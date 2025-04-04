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
    "4o2W36rRTEueTbmSK7fpm952KcBaN7mTGvVmFRmjZqFRZQpirNv66bqfmZUoTSArVjwwBJEfsgtmnHWUwmLKKZkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQ4BSrVRxEzzZk16L1oHGNrNuSsVWxkKL2sh8Le57sYqBcwdMgPA44YheXUQ5pWtQx4a29RtRfcWyR8Hd6heE1n",
  "key1": "63LerL5TjwhT13MCwGCJmuhaFnNfSvQu8DUzMwgysRGtwiFReLW2zdVZFwn55ros63QsBtZfKUah726M7NXMX3xA",
  "key2": "2iVoRdzYvkNAK5M1x1tUUhtajsjQsBTUBeoFdn2TSXEKQPwKwN2AbmpWhCfwTregVywyB2aiCgoCCVxBhF4Q5XME",
  "key3": "2yskEpWtqxfiBejk299Qytx3BUVLUPCpm8CbqH6d8FfjRWDZp4fUNkn6F5pM6WaxuDZD5BmouMsgbzaRpTUt9nBQ",
  "key4": "4DiZ3WbtuJSuTmBQ8nXGqakHiamwoC4sVaLKkLm6nqUJaojpzeExYYo8bibcwZyjJmypaFu9tcNefuPPm3jB6pPy",
  "key5": "2MB7o4G1Jkeo8fViZwFURVND4PSwdwEjuJDVNpqWq34QP4Acabo91pLAwBQAGCs3ouTTEtF3YZkJNFCAnX2r7yYo",
  "key6": "HsqfKJHwuaiM8Q9ZNFwwDeBEWAcH3AdBjs2C9xT8RjcbKpSShxS1B3vWLd9HhbDpin7VUc7esNKLPURXoJaX9ES",
  "key7": "4tuAGV7pYRuQPJ4tTrdmdt9SnLfcBFFBywKfTrYTEvWxDsgHEJW6uhKsWCmB5aufpWkWChM4dfnGQP2E5GHz7NpK",
  "key8": "5t1G4EnywyVxfBa1DvViUEeS5xrdrcPdeRUkfhpGR6ePnaJdjAHhzVj5zpb9k3FsBYrp35oR4byJEDsKqr8G3vAo",
  "key9": "56KzECJjWYPSYBF1uXeb5ZzQuLemfKDsXkM36XMvkFjYcZ7Z3r1qsdkscLqEtck5kBszpg3dqZRxC2TqpoRB14Kk",
  "key10": "5BYV5bbTVrqnqs3d87eEppZTiGcaDFZrVc2piswh5HhicqS9cUSsRoN5tbaSoke9tZmzTGZDfSmHAvC6DBK8u1SC",
  "key11": "5FDyXNxKivs1qR8N4hT4FP4EKsy8AqN1cbnSEvsRpEgDvynq2LBS5sqkhLtoYdL8XyGef2ypdRDeDpq3UcnvvN51",
  "key12": "5GcuEiFhJdYJwkfyNBu6t6moVmAHLU6gUYfQQvGbr3ps3ddm5dwafoHBLnhBRpWKReARSDMEyWhK6jTTcmuTzXLg",
  "key13": "qqG9kctAdkgKD5z8mt8B7Sf6zmqr6uEYNiAkv5iJrRDvi8cCSnpwJuqBvCx1CDNRUMcRTWsN8PNEfzTztMGNDbV",
  "key14": "32xwvewyk32Kk65aFjptCZeE3wNVULGiWo1kYaWBwMQQeJiCtAQYtz6sK3S2v32omCy29Tej5E9B3eohzgjEGL3k",
  "key15": "4kus8ghHvmNKWc2m8sUEvYiBGLAsXcdhjmzNF7biLjpTEFh9NgM8kq5QcXsp9v2Fw2GgfULfHCmeVzY6zBhBKb6E",
  "key16": "22BCXHTvvoie9riTeZP6bYaWYF5gKnWqcGUyPsUqViGDLMByLyQT3tGhwfk1KWuSJvEDBJQAN1F2HEGj2RYeaD1T",
  "key17": "LJLknz6RCtjpmBJGF7hfzW1saPwwGiMRrWXHd1S9gb14uZZhkCrPYHwWGLwau82FNL4MAHZVAk9xbpvQifPLzue",
  "key18": "5x3WVppLPrabtPXdy9CDdUJU6vWP9cJLg2nbTg29V9LB1fBqenBAhCn998fHaq2n7mHeduXwiHasKtvFF4UnS2th",
  "key19": "37itqzZf8sECkhvBPhH7yJ5JuMVnPEBjDGmsdMnfgv25B2fkgDkUfVwjEjRoLKjTBpdRQYNgUiwXRthz1Lcv4cnY",
  "key20": "3sY1avg3qGEiL77LuPbaU572nB53muNSujAFPpyaXuPSaszobfEz2BHHiUtCnBkpowVzaErNwyvGjksazXmjAHB8",
  "key21": "5yjDGw2NemD3kFipzHh7eug7CzfWREAVjG27Qd1XtUWfuxpCRTpwtxfsJqUVAAQJTd7GPHWqMbDQn1Ykb5R97KL6",
  "key22": "5S2USmRX7Y1wVcsDC8kb2434Xz69v6rLRrwDzcjzTGFJRm8gZ55KqLvcuGVh7yiHSfgdpGsdBdqtw7cAw1xsHnf5",
  "key23": "5LWwqEdsSLbMKtF2uyLLm3CruX6tmxjaPinqJivgQNt5JDo1wrsUykCBzeafZfgy2ErYpCHZC1XyNjyRyUjRFAnr",
  "key24": "3Kq9FtBx4HQ7sJqFdfs9ZYSXw4PD13tm9zz55Hb39YsVUrpWM3RnxuvvxVDbzviTeKrwKaf6kZrEQnYWUgm7z5U1",
  "key25": "3b3xouk23ERtbmhyrLVnp1kMUyTEgKRwAsv65WnPBiS52wr1enF9g4ApTsvFiwvG8Yeoa7NZvzDAgXiTb2jkqctv",
  "key26": "4FxEAXJ7uagnRB5TT8k8UZtxT5rRvxKP1qXnd1Z3TcNoZrA8fwDiZKyFsy9U2KZ3nWFyGcSysPGLBUforMB12dTL",
  "key27": "5Gb6KAeLyjY5nDz7FnDfMxaSXuMvmNDbtyagGBMh9rpqNnBjH9EdWJee4ocKJAzJMZLZRHgUe3Qvwhk4cmTda4rj",
  "key28": "35szGG3tqWHUq2ocWZs6YpyxeETkb9q1n9DHLSBHTeswaaB2XVESo3jMSCiFwTPe3bX8rw3L8WKMFb5ztisLtSn4",
  "key29": "Uvw7TGJTajNvXY436ZDigExpsjxUUfNBdfQFz5GDocqkgVodn8CAhpcPftgLFgPLwHPR1hToyCSMREWD6UxsEjn",
  "key30": "3fCPSkYGj17pCs9xcK4ox24XhQRSKcJwMT5srudZ7v3rHuc53URDbWJfMJYVE9Le53V7tGc4YJYtW19F2cpe7d5R",
  "key31": "29JxdrXtocJWVowr7nc8naN5Evkbax86XZhdRe7pyq9n1joSUeZeE3yGCUzKYaHfkLywVugMrCt7Gkx51b9uEcZj",
  "key32": "3rRMio8MZDp9RFZ88HPB2EGURS38ztLJ6qJaHufUtsQhUR6p8gRB4epd2peA1RMMryjeSf913HRfWtiKMuL6oijv",
  "key33": "67fodBcFdGLEuwsQfxYt8TGELoTwfNpoDdnunpXZvJEJpjMjhQrEkbTKkmNmzpm4NE38JES1joBzq3a2wKg4EhfZ",
  "key34": "4wcwEzJjdQY527xdPWRRonqx2Su51ZJckXRCuedVNfxoL4bryooCE25pfGB3e8AF2JfekCbyFgM6VrzCLijoBjnz",
  "key35": "U5gSehHraDbknRd9xVc87t7tFW2N63k6FpHF4rXfQgV7hVa2TLZNdqZsQLqhepyftFHSs47YEwDJKv7qyN3xFYX",
  "key36": "3Vomr7zuvWAGtHvKtmwQUfQ9FAayKzNrsTKMMM6RhGGd9oXFaXeWT7sgYC3i1yZXstLvYKoX69M3yaMwnT1MdJYQ",
  "key37": "34P2YL2EpFCoYE4t54haE7GBLLa6A8Kjs4tWeQKLvQh1gVy413RAHRndjRTLfPj6oRxhnwaGyA5K3GtVrWcKVsT8",
  "key38": "2jfUq1pVB3igD87zKP54Uekm8Rv3wcGrrmR51iutqbw743AafoXDQDsiiYPpCd9sUPU589rVyTZPtxQcWsCfYY4p",
  "key39": "QNomRgZ7RYyFznde7LjcufX1b6JLs1DckaPHr7Kj9Xqwyks9WW5EnJe1EEEN1DvZhiqSJmePyP8bxHZJsEzohWe",
  "key40": "3MNW1gaPvcATRiR3py4jb33nG5NkmVTphfFg45iTE6TLCVEaswwh8ANoW9Jco7uJhAf8WGwRxrWEPL2Ceb7x32iD",
  "key41": "N5qvtwDtvANTnKZwv9xV5u56qRqyLfijU6Kt7ZPsnnVYzyLn4osmzeHPd3oFo1MizXP6BqY3P8ED7h9QePUmJu8",
  "key42": "6WfkvA5s6VMkm2VSZLJeErvUTKqU3CwCogMQjGvHsJXiX36ktGJDfY5S6cpvRfbt3FfUYE9QATxURisxtVVi8N8",
  "key43": "2GXTWXp8MTeHh9EtY7DYMcBA1t9J9KbMYZTfWMDrA11HrfAvftSoYCshHe4itNZRLZXooD6fjqC15VuRAsiNxnJ3",
  "key44": "4qDhoZByEb6rf4Cj4jKJvGq3b1WibYxKCEaPmf1hitATnXYBFc8VVCEG3BRxWCqXFsX4GTMdcYQxhkiZysZqvGWB"
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
