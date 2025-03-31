/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3PFY3h7GonzzYYmTBUumRnso2qUuRNXy8vC6iXNHzAWSavYQiT62ZQrASy25BqNTQFHEW1KiHaNu7upz6eiSw6ES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ugwu4QtJiTP9KHnBvpZ5jMtYrgC6iaggNJCUyaZPuM4Ayz1wVHNP91KoULLFsmqS4sMHtG8Kw4afKZgmCKw5wZY",
  "key1": "2juWokacdraXmhnauBgPDgsqL8CbmrqdSunCc7Yq5rKev4cVQj97pnDTxkHC3Aqum9M9uhTsP9MyX2RvumCSxTF",
  "key2": "4ssPfFQ1t2yxrkZof6FzPYoZssGVQe9w4cu6AiVV68fSfe7JjBpm1BUnGa8TVZ1hSBfS3LazGUXnmon4n7Vw4zSj",
  "key3": "3MdYKPuRDjHpKUL5f3f12onBqHZPQBfQD7FJR9atyHhcVbarCWsrBA3kzvpySQcRjvXfCU62ybmgheH3jdtdt8Vq",
  "key4": "4au2EF7kNUN9iBqGsufUDUgx2XRSXaYpZsF7cimw24x23Ek7G5CvwAeBZDZUXRpsWwGKcAUGA7DQjhbVhZYFg8Hf",
  "key5": "66RS7nbv7ZxFtkTbtQYGmPfxZxkeDtrQhUSnD5NNXCtb1jr47yMNUSbgoRZbJxE9EZ3w8tEj7wnZfmrHTyAyutUk",
  "key6": "FcM8yya2jHpYgpDJ4H38s5VW1DFQLmr2E56BsnbghLG23ks3bphyJHm11RPAeeHkhwSiGqxyd9j8EUmRMTAybN5",
  "key7": "5YxTg5XK13pePgNU7GrkBahwENuj5fPxAmXLAnTEy1Wmoef5gNwqcnehNACemngBAe3sKjP1FbnJCtyD7UCv2pxD",
  "key8": "4EjEN4B1jonMhcDd3Gcwnt4J88FmuNJv2gvAzdVKj2ruWKjf3Fx9zVsrLtZRyWZvuitqbHgEN9VDuGQm1uozJTm5",
  "key9": "4GyN1VuvtTXf3tySiXeNnaorB4Hh3p1Ue6dySDLrwNDqdH2Cf1stVLmmvZLm8qMcb3ijD2FKmQ58PHaTQawJXMFS",
  "key10": "v1RwUFyV4Dahps4XMi7XsDg7nL5saooM1kZxXaiHj6LVPV8SPSCvhMXd938TniMxwQvDnwBVndjWpDLiSkR8eCj",
  "key11": "4YuGxEeQeWh22CHTX1ZNUEnk16mYiAyVjEbsNY7HLoUd1b9FCekT4EigQ7qAYcveWw6eX4f2nkk4yg5rsfAnnoff",
  "key12": "7fXDKQceyKPRxX2KL21Z9syEHRbPLqEdaD2NUmcJa1kZkJ1JQbv1y6qP5WLS5sVbydvbZ8iLhqeCRmiRRmnQ42V",
  "key13": "4BpkWkM5TBtBDPTXPKF3SKADCuVujVQeQyA31cQy1rkcYH7ip5NYrfm9wmjau3H69Rs1doW8rtMi9PsvCrnkbaVr",
  "key14": "3SuUrNcQzBbQkuxyvjRNZxMntpWCoFqYEMFSddBkopGN2UUT9XQVSdyxqFALxzMxywB9cu57udQsXFVxJ1CdT9iw",
  "key15": "4Gn8GpyGh1MLQPceuFmQB7t32js3sRUjnWBHRWr8jbhYiYhvjmywbeYU5ETKyafZ35YFP25seqg1HNgXy8obNbTv",
  "key16": "5EWEGbAfrhYcP3Tnj36uaHvwfi8qy2Ek75NxxsjFXPofXY8pYnsWntWFh4Mcn8LVKyMzSQ6f6XfFvpgHxS18TvAP",
  "key17": "4j49JXJVXNRHLdamcoNhgf4o8nbK9QGRoaEcx2tv5BiZVx5TfoZc8nnBnX7VPkvQFRnXRTrNKXLwtpNPPDmcfQPu",
  "key18": "31VpPhZoTzmR4ybBNyM9D9s7upai7wekTmKQNZGFun35UZaFPUdE5mE8fabbRiVxJ4Jusi4Pgfe4MkK33FDUgwu",
  "key19": "5LBCH3TFNdjpzhNnFSHZnJ66FGUnX7jFa3DfiuunBeTCVixEcxWsTKG7gGZoKDvnQ2TjhQek9SR6MWfCNfxdSb4g",
  "key20": "47dg7T1HETkJpMy2mZVMmjGdh5rU2BqVAuyXtYGNMxoGQpNF1QRW97K7HK6ahda7W35ba5gA57swNyFoF7wiGLG6",
  "key21": "45vcFmMBuvuqjFvqLSMdxHF9dJZSSAJJKbhqx6jKRmNS7Jzb9HguLse4h6iJ4zzrXxub4DGPiFfKAHvdjMdrT46D",
  "key22": "4rqNrsHxRoaHqTTbHgsk7vyDFhk2ZjbFy8wrvqgRneZAtPuazDgjq4ePzXVePMtGupnk1wYRKnUvhG5HKgDAqLni",
  "key23": "2pTQSimNec2i5iHv4LFGgGft8iXCy1aG8PQpDtauBL2fhTQdAmQ4M9jwPVqqtqVZ4FNXpHhmT7BmhHFQTvbYVkKe",
  "key24": "3RGynJg83umsK7vCzMvX4WDNq2WMRSfG27JCfnxZMgLa9PddPoCAQyoRDf3AbVKesh8Z7Fw8C923VJpinWoCxKvz",
  "key25": "3S6yVXioe17V6R4jn8zEWhXToCAWLPsrCzDDG7L7FpZtph6c52VpuknqkqQHYsM9CyxpA7QSevR3UyTjosQrPTBk",
  "key26": "5RbhUA3JoShPhmJF2ujn1w21zBuh1gqiSPMSAraFkRhw74HZa8oRNXBcwT3aLi8msemtqzi5wZUD3ifZ2g9qEc5D",
  "key27": "5N9dY1WWurfRdcubAY19NrPCeQiEnEjqtpTsEXT9MY6y1spGncivL1v7NF3xHZzk6YVGnipoekxime3YeDnVWU7k",
  "key28": "255F3Ud3o5FTEYhAR7XMJDdNVxm6oBruhSMXoL4MEAMFiTHWQZuiMexK41vSXxGWEE3KftqEioiJcSA2vieVVG4g",
  "key29": "5pQoEQyCFpdGEm1XwreqZJD5vaXF1cTD4btRJr3VUvKrpZtkB9r7u9ngsWcRGTW8pQ3ESpSokx6yVtixEAYyrBGj",
  "key30": "3dpqqCwh5EnNVgqa3Vny1bjZLdQjv8HAMaSPXPUqQUA9SwauXLrSfTZCgunE7LJ6FcRw9yy4w9PtnvibDkA3ezJh",
  "key31": "3WfFrkBopzj3h87NX46Bq62xzXGYrLi97aF6Q1Y3xNKgYBiqQvrbr4aJVqeBJJzgCtsEdbuLQSEU9DTWReV4TUi9",
  "key32": "2aEjiC4VCQob3hhshbk6tLJU1FAsTktDucPfbeGdjdxRA19gRSFWJKoLr9jbCBk6nePGfWanCjdU6nLEjEeLcq8z",
  "key33": "3F2ryHMLKUEHPzTYEVSdPdH3f5tcoeo9NPbnht6CNdy8DPDqyYhnMuZc4pPqGqNpB6ahKipKFeD9XHJsqHMA3yCf",
  "key34": "5aKUphoEvRmu3sSZwsP7uL2bDU8mD6UqeLKMGFAEGLAAF7zceiwMaj6EUZTs7yTikGNzct2oPEPZbdvUUT8E7hzR",
  "key35": "4ZjyPFRyempUZAPRxr8eL5bthNT9URqxGYbvK8Sj4LYzHeUmA6KjXiKRFudPo65RJRarFTfCdM3i9Tovyt51CuFj",
  "key36": "5bvh1GhtN4ExxJii8C8sAxzbXUZ6ax71BTFwhPoKBh6jLrZnss5rjLB3Ns27mJEo5gDwnEp1E2DEzP3bvaBVhqV5",
  "key37": "izYdCqZDg35R1rsUwQUFMMcTsGeDhNdRqfNMkAp8E9kzGV3YyawCLt3rUGEksxMLLcEC57JtvDjwNnLQatWftHp",
  "key38": "3SKUnMwadvYGFBsydxrZxham5Z6TMSYnYdkWcTsVB4fhjuAUtTCVwuqiJ2hZnTskCNh5jjanaBKjw11ahnRDo7KY",
  "key39": "XZztGyceivev2utge68vVtoQWi1EHXZbC8nY6JYAo37SmKSghqHQ5LsWxvhxcrBWAz5nEpNwFiSPwr5eVy3j5k5",
  "key40": "5SmXsBaXxiwjCNFB5M4XjuhUGarcfsviD4SZ34KHy9Ukmkeq5GHW8ktrDYHQLYNbeh6W6uBtncxQeV8EBF3BNQUk",
  "key41": "5DVeHVuBm1BvLrQA2btBQrMBWjf2PsRFXB4HyJCAf2aYguworkrDiZguCD1Wf1A1bSvsoMknhXjzXgmk1XPbg71Y",
  "key42": "2MG64G9FBVqyUVkiVyKsk8SRiNEfypuMRYwt1MT8qvN88CBKubdq69ti8iU5RaGpWejcDDHBG4UeWaZDuuZqqWm9",
  "key43": "3kYFEHycPouZE5AvVpyhDhwzpjt2VmapbZxCzs9RwqAjSbX9EHMefwMFwQz7Ggt8x1Y4nHqevPKUU9Mqd1NeXmMz",
  "key44": "3MJ9M725ugpBWSdVhxUDuLCtceV1jqNR37Pq8xHFjP8oRjgwfU35gjv3vF3ZdnZtqFR68HGfWyCAdmPZTGcCbZoV",
  "key45": "2BnpFfQr62yMdTV8a69sfwTGwAr5LKxHBvTiVnprGUbKkvEuUsbo3cWd7zUArUBYauaAmxoP5ZpcxaW1Xj83dq9L",
  "key46": "2u64kCinXDtDsifgFnHZvjLWBvKiitMHHJwjVduGHn6F6hNzNRYBZ4nPWisUtPJp5uGigTu5jhjYHhc7zf91FTQv",
  "key47": "4cvu8fatVuinuyuWnCkVWfUZDqq3qEY3RBGDACWRQa7zhzPj6JMV6AtqzoRL5kDqb5sg1xANGFXGvGbvkvM2cP3X"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
