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
    "t7FmQxiZcjJqFcHPwa59Af9s4pMnVRem6UWb8WyjSzUGvTzE75oxsgMrRMopRzbQVovdczXJdXoxDmFC4jTv6d3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39mPmGJvN4SS6Qb9sSMmHdM8FsZhimqv2jMjbrmAcrsdutJKJhxnG6kvKWYG7NSwkfPymQXHvaVBRwxa6w9Ku9tE",
  "key1": "4joJjBE32NR42nc667zPitd8qPt8Hfm4eHLA5P57ibCNgA2TGEjJZVfQTaZGA82UQqGCqdehbQweBwCh56DSp9dT",
  "key2": "ypXztQgWPCZsx6ebeRpscTrXWHoxKRTTgY646Hnc2afnaJSk69PSxoWkV4V69cJG6WgR4MwrSLQfCCnCQ2SCRh9",
  "key3": "9CA3ieUzPXaP22s2xrigpawAdjShgwrVKby5JhceTgEHJfZbKu5hUNSt2UdmCAGfU5prCFiyuZst8LWD7Sr9DPB",
  "key4": "4tmo2JH6r7vUqeKNSbBcsF6No2sTQaMbbXQKUdxxbbivWc8ypgkZppbTZkNemTCbzy83zcjrn3T6Yk3pSuQKYXhG",
  "key5": "62Q6BBFSeQ5eU4zoVYiWTQrJd1ijUT1nAbmp9GKvjcK6SYManX97YoDX8rQyn5PkyGwiNujerLCnN5ruhGf9e7V2",
  "key6": "4LWSbTr3zDQx4qkAeb9DZzKLkULSk7KugvF9JmM5kx9faLTrVkA6NKuJwJzbW2jHbbqxt6YCYUVaYVnyRTx3k2VR",
  "key7": "3CMvFFirsg4zhFnQqDjmk6aaV8CR5b7wQCXipiRN3hi5TjhdKuK8R66yuKGgCosc3gTFXs6Dd6JCYx3k4ZVWu39D",
  "key8": "2x5E7JHggqDskHGnv37dfEpqwtCYQya25DX6TNeijD8dRAXADs1PuJje23PoDJDDxnovyzdRGZnLMgmU9dvpvpif",
  "key9": "CCj1wWMuKo7NDhkCNaqTTDtBYiLBWuWtgahhfT2DVSwqP4tY3iaTuU8bjkewrpsUnYrgXxfiTGUrTyNqQDR4oFr",
  "key10": "5aTj4yJ1DJFuXvsqxiBLEzycuLY2sGXqpKBCBGEvV2NTEk925vcJzuomAicfQnVRRCggccBrHyBWVD2N4k9B2tc",
  "key11": "2FTipSEe7Mtf696RCGdSccjBeiiFmjHow6nKWFx6VEhhcqeuQb5Pfv9MfdvovUWPMrZVp7rJ6bGN7Te8ZajEABgr",
  "key12": "2G3zLx9gMyAmAoqxBmCmJHEUxLMPh6SvmTSyZkNE7i3VznZ115BeE7zkxCHw2yueBuRyq2QjVGWdsPXcAFy7S7kz",
  "key13": "36dWVqV9uckexENBHfevFnDoGFbyh8Y4zJaPMBmcX17CoehK959GGfxdRNHTrmvELUDxkxzi34nUwUCE5BMot19v",
  "key14": "289Q43igj2NHNQJjh4m9WPQ7VQ1zzmqgvA223YecPGjfuHjkctggtWhnZpv82AJFBcSdf2oxAqkZ3GaL1AuVnNXo",
  "key15": "BNimbFR6tWB7fsYHyXC3TzN9cyqY7xYR1Z1WbYGUHtQeyKAosDDaXsUmXANmei8WJwwAtDkSr3YmyhiHG7dgJ3c",
  "key16": "wz5JsieuK28t5AFqVAd9EihFBsPMbQWP5shE6cjqjbRc2soeuak1uxoLsqkqst2NgBRVjiB4ATyYx53bxcXKnmm",
  "key17": "4aULdWa8vnq9AywhAQyoh96U9m17SokpKJveToRBLYQcd26md6NwDqjbwnqpSYeBJD4YHk7nyNJdEyhUUq9W2X24",
  "key18": "nMPuBqZK8JPGkcvgqLpAJ6s9Bqr9W1CwTEQMqfpq52vxwJPb6iGycsLG3eL1t9StBnJDG1G8DateRqCxmqb4WWw",
  "key19": "3YTT1253rytjXWYxa4GwPQbpfkqPUrtxmnZTcHM1UAS4vcZQygPemMb4C16XMZtDBXgGncht4DKZ8w52dmnGgSup",
  "key20": "cgq3qBcUJ61TQ2Gz1xbkKLXERECGRBJvSGbsKMj2Qpu1dyjqY5iibXg8YUbkcedthRnjBhuoMmP4W58y6zRWi2Y",
  "key21": "xguypugPbLKn9dg2CRhjqefnBTXVUkofzH4LPVwcMz2LH8s5hXwuAQvnh4yRjYbhCnQWwfJtPN8TD3vn92xpPWh",
  "key22": "3zt9zcVnrr6hX5g4Mt8Z3EGHw5mAjFmne8tK9N1q7VkXdLTZGnVT3PQkuHp26aKnXRTLx43Uy1Q87Mk1t4VfUGTC",
  "key23": "3AmxynCpsADF9fdofooPFvcJZkxvUwQ4QxMmixxwTFSv6DbTCYYjGhTLPdfjaPbZUs1iXCPAVeVw8qpkK4zvgfhf",
  "key24": "3jYXHB69ECV424z92fxqshkMLKmCYqUgtNBj4VpRpboXCAC53YXmTBja76K2fRkZTUtJHPYXK1o1aKRvgeBd9Ayw",
  "key25": "3VQBGF1cRu81YHL6hjcL8fuLTnpQW1JYLsTjP1uQ5gMFW4jBNAg8A2fwMSE7LwyXRn51R1bVzAGMxGwiVzLS76Bh",
  "key26": "P2DqSH142ej13rqmP7rbHQ7mmHeoMdUfaMS5f8vtfWqPicPgPxB3fzTLntpMuY1kQwohUNoiX9yXaGiNBQfy1Ca",
  "key27": "3fi91DearDKg37tewCEUPx8F48jvCmqJedwZ2ZqvDLoL4ZDgrKvLrXgfUqhtC5d9iBT2BkZFqgbpbQL8Vnfrkz91",
  "key28": "2ZLZKKahe7YK6gMVzUNppwyecwdxa3pVFn33RxTbTvcYv9XyW435iyxpqY5b2En6Vo1ux36KqqakStG7PUWJFrdA",
  "key29": "2yDj2rodJTJimHDj4cvG2SmercbFpZapRthc2AF92g89HoMNjT9LHwjqHMc8FdLfjfVANes2LFchRfGtXXUqR9XU",
  "key30": "3K4Y7fFa4j5vuFvtfkEk2Dqb6sMvYYwq7oVSPjiPtSLNZzsm2JxkTUtYYzfUNHH48wGdEAJ5pX5JJkDfPAJUPCnJ",
  "key31": "RfXXo6P39kxapewaZ2BZkqhp2UpoT4ebSeQpLHosxxuJ7s8Awrgqhg28C21KwoRcTDexgPmPZqKhFsRaTaw64AT",
  "key32": "354EzQwTixHpLxZTEBcxoVKF3mrug71XWmJVjopFX9UZtva7gqzTC9Zx2rq16Cu6B435VDrtF71NsLb6Bf8C8Wb7",
  "key33": "3ipcioSN69BrdKa2AJWRCaErwJM4LrQAunTkrZHm1H9bvyyZkaxLPDzWu1sg6JXCXuugLXrNWQmwukUaSqTyTren",
  "key34": "2iT3B4vNaqsv6pc4zBQjH37fEA3yqsf8zpyoVCF6nVDjirNHE9WJJoNs5CuuD9yyAa8rumJmemvhXdLdk58z3TgZ",
  "key35": "Dq8SEoa5CEJtdDZKjZHmRBksh6J69uiwzrGngRkVp1Bq8FToxhTcVTWRokGv7zVhTx8jbN3EfkdwkftSvwQkoSQ",
  "key36": "4Lw46YZ8Lbs4NfQ1dSD87r1JUeE1ffsQ76z7P3u8a2ieHZHcozYs9KL7XYwBghTZHsPeqdhyfPUsVABS5DyM7Pgi",
  "key37": "3ZrMVgP9xDq3aJFC8a6D1JCBAN1mGgukNwfPy8kU6uEPraccBYGhtvTStbz77XrpmbgQnEwgvba9f6r1krhyPpZU",
  "key38": "2DvYynJxkinpGDt1yBZttXWVq4mAzVa1UThAs3YW9KSFCJaFNuxNypkzJfLBYG17ACS1ZsxfakD16KSaCMZeCQwq",
  "key39": "38QN8gZyKQZMyFgz7wkCk788gLYq13ggWAGUG8sn45Spk9fd3WJwZCoFi9hSP3LfPRF3FAmwqk9v4NFVZmPy5SCS",
  "key40": "3QH5vmvhiEwJmwp9LXQ8wyop7kPUzBTiSvnw26qcHAgKvHLEMtVfumXkJDgR6sqcuBE79GFkz1b5JKekE9kdAsJf"
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
