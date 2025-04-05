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
    "2ynGXHxPgDCE5aCWJ4orZrF5wW8oPN6oxcd5nzoagpGe2x4jGoLwE772uCsRNHAMsNncCBbaiCwKZjkzrcMLaVYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TnGZvzsBFXidRfdjtEwzL9Y8QhEcsdptAeExnKkArsUZkoKKq57fk7wLgthLTiwTEybia1VPqKtxnwYRCuVMwZ4",
  "key1": "63JyeAMAcSGVntJ9m8V7DiRXD8KTJP6aYbYbeskPbLr7fiQbvmdmkMXJfvWHTPaB3zpnSddkJoVuGDSNgXsHbRWe",
  "key2": "39zGoGAA5mGKUWgbkXkBScbFTyy7ffrdAcYcPEQfWXGKgdY3Qr43QFTn5q7pofxD12Q8Ht4vu4mRFSnnqnicsr1d",
  "key3": "tTNQ1uZ4k8rR63tf8r8ETpQJ8Ncd1TGoykFhoPbw8vVL2SWZPrW9jefo4WYMN6jjRVvNaBeMgV2beKCZLLX4C9s",
  "key4": "wBaZYwjRAx5BRjtz1HTbrRdoD3BcNrAGakNi1JE3KvotZsGWRqLCWB9SL62KYy8EQzosnAoUrwqYVyV9RYHkd2G",
  "key5": "2rDPbga3w2kmXfevEEMjLmkYPopvKRXAgeTp3THKunrqKtF5Uz9qWf7Zq1FH1CkfU1tCijaYwhsvnEQkyFSx55M9",
  "key6": "4oxioWXfetmk84PtuArn3nJ1BtFSuUeHoT7SooXz9xRwGU72faRupQkun2hZ7XJg9nKVk7eeX4W7WHgV3mX3ytac",
  "key7": "56NyoZSp8nZMsy3KAPD4KpJtUjnzFykyFU3M98YJPHVPdgpHpz1Fty9vUuSJex5eVFvMTdxhU7MknezEmLdvp8Fe",
  "key8": "25AFijqPH8CYZWAphJ3tBgq4HBLiXX2VNjco88pC9vi9o6D1GCUGu6StBcqERcVJQsC91Xa2cvJywaSPJQDdykEs",
  "key9": "58ss1t82t3NL871VEp3CX1s8z8SgkFvUYrCymBdYYDM9CxYWJYgSvJtqeaGNXZD6uMAfz47Ene5iRbaqaRJteWQf",
  "key10": "5AVERkGPPGGWzmL8DtHKHg91Jn5wPjtvxKa3ij5PhqBEL6JG2QBF6mqNWR2zYhRixbs8UYRtRfuf5CAYmFj6A7xY",
  "key11": "67oYQ48fbdwttWCmAkXXzoKRCaLov1S65LusESNhnm29vfY15yoDem9dhctdsbE29b3JaCJc7hbj3TFGuVkcjAgm",
  "key12": "2QTbMfNbVBFaFetmJ7qB2imGZMnGfi3BzwCASDaY2D26ivwdEdM29HBd4RB4K95XDp8Y1HbG1Jo4Rf2T2dSKoBNa",
  "key13": "38BiTGf7JH6K2L3s9TezdRiTwvs4YvxBdHMJTV1Rs4hNsUnQHJt8x9jueFNAq98tNeF67yXnQCY584wHjGhpCjpQ",
  "key14": "5RrcSEyh7x5XDuBueh9y2udcgXgkG4mFwXFfqs3CW3x962oqw5J9eNE3JUBJbq4QbUiqu8g3YWxcxkRuPApVno1d",
  "key15": "p8srV85kZcx8raDyVQMaKPTmsTMUHkrCi5njBXVPHYtV756JncaGzfNwFjHBasrMSvchmPkpGRhcPqFqagNnuiF",
  "key16": "HT12gBGycGxxoY7UMGmBZsHvC6qirQUBTazrBg32CHwUoavDcLZ9StmSrXjGkPfeBdfrY91nKVnUk5VbsiubVLt",
  "key17": "5Vz7P89P8LY9kfjtAHv5RQeEzDCpERMsPeAiG8NGhFmoZ6624GLA3WKxZnxhnxSDtfU5pDHtQy3JLVF4GQsYkqDi",
  "key18": "3t4C2Dr4N9Yvbhd1bdca1rEPA6XfpLL6YggjFH5mVQoGn6mSWrZbhz9NBEUyTLeqaKnJcBEDZtqS5HJFSuvMK4jt",
  "key19": "5Lxz92Q7X1h3MVH6eskoSh9sV254H14jinG4Dt1ELdE6Sk6mEzouxd8xnsxNYh2uP8tSTLNfJW6BcUoV78Q4ukN8",
  "key20": "3nPP9ewGxpNjnWZkn7jyCauczxu1TKjGBwDRax5QLBz6KsxnUTjb5cV6VMb3fqok6ZX4MKB3pmaGo7Y8vTkFbBKv",
  "key21": "5ChXrt532fLSHcVPkqitfRDoxwHGiE3pYH8Uyt5HBeAvmnKU54sbErXAuUFsW4j3mYPHtcaW862k9BaDjmnPEEkV",
  "key22": "2P4QWhr97YizqvzP5qQFHzVrvYGLPSnFkv8cz86TWbJKXMuj2NWAF6vAEVPjnbNx8fmgsDJo3BZiQWMZvPNexgXp",
  "key23": "4SVKJsiT4Lg8GCuvvkk1NUQhupHPRwq5UWtJHtmgqCujpjnF71vDkRjUZcU6aSoLkxz1Ra8chAkaqrMyGg7vARij",
  "key24": "5gVnuqUKjCPXESAdoKdhRfjgPaZaBWH5STvFhYRX3pgKBRGDezgTKWPsvZ3bMgZRBYRFNQ6cM6JUp9YgKUJ2PEch",
  "key25": "34WoMCpJrRgRoMFq5WCY2VWL9Z7JFeDZWu2mFsGGhwXnVaePLGavxLRUVoSsVhygsKcPaJhcsmo824TeG73iLLQK",
  "key26": "2fiGNng7AE9FBPTnd7phUgftP4hn41yFDndyaagUM3jJedfpAuzy7okR7vdxbJYW2mwFwMEPCKJa5mGhzVsPLkcy",
  "key27": "5CLXwJWC5GATTDpH9hh3L1Q3fYftPQMRzRBpytTaosX9JVLP7W91XFeiRMx8rR2KFNgWZdUjM18G3SsVvr9tiWWp",
  "key28": "5NRPi4dx5mpNuC8Uo5vYCeSTnNYwQ4CAQgFkMmgjRB3j1PKKcQ5JDyoXfNCzV4KVF7zB7EDDtYhtvcsic2cN2t4E",
  "key29": "3qm1bExBWfaaLLMCHx1iciaqpdFQ3MnnhxuYYP8Wg97bxaQm4TyGTjYu8Dj3JnfcDpnVmueXXJTnvScyHDxzQkAi",
  "key30": "zDsTFy2WJumMWx9AjcMztWCdtCTtanPiG2bG55gsvcgPqNYNvkSUFsU9ERMg4kRiFEsxfePpdWv8DEu8f9gnAEV",
  "key31": "27EFWXWALSGPfTEUHbcSsF7LJH7v9YnY6zsxAR1xxdQMwusyKDsRGCPLQ5f5bi1Fi144EGWsGTyguKZ5MBP2h1Lb",
  "key32": "3qivoqXdDMyAHckRvcb5ApV9LgtWteTLk6SZ5KPsNruY7NN9TVP9ih6b5WSq7qzEevLvCG16NmwwCF7hSVKUaNAC",
  "key33": "X541DfdujPk6ZGsXm2YaFB24Viwmk3j4Y5zCN9UZHDZJTQ87JH9etAnZxcogN4WcEoZjTwvc8ZP3dtTfJjHFqzY",
  "key34": "CBBF9xtxrBaekjZ8rAwS4QWsyawiUVC4TrC9ycPRUe8jWEgrDb5z1iCQYd4Fnsh5XAN7sycTDfgpT79rCzamDfU",
  "key35": "3kYsyJXWQ1vwTFJ2T73ECZVQv8t2nXCKKncoK5Rkr1PZLvQzt3rhGc4iUY3Ze887ykrA2bTobXUrsxedyF78TjEN",
  "key36": "63ZoZfRpKuQE8NaMMzmWgW1XGYFU2aJYw3icA1Sq8UjxQb5EhM2RH3HEQW6CCYuiYezBDutSted7yCJR2NEMXo18",
  "key37": "4hoRzV3wFxLqTbxhxwt1TRoXYMQ236zNCUCmYQ4DHYxi1cbLLAUicfWGd8vBdYmGkPdpAFvc3NnusvpM4Wz9CvSZ",
  "key38": "3zacXkTX563a78ULPKEefDnJkBQMuGhE1HGSTPJj7ro2jQhEDwQEAntbhGxsYQvABUtbHtCUfPzY5fP5JMKhCWHj",
  "key39": "9eXpJchVeL1ENMTj6r2VMtgyckAnZiGWsMaoHDMQdAV2PF23pe83HCJUi5QCofxvdpyv8GsY9RGfcs3xPytsKQY",
  "key40": "2PNsrQTDwBLba2KBvi1oQ5Q9STBBTMUimnqNmuTGnwcgYFKdiKArPcZ8ojF6m3nqb7oyCaV5hTb7t3WYuMGbbX4Z",
  "key41": "sw7aBBei7ntjyMRs9wiBMnJcX7kkCvxoUQA5Ut2D6E5FFTJfe9d5b1pocug2tvknbB7KXNMNyXExVPpb3RSHQyV",
  "key42": "27BYskupzkJ2jTRR9215Ak1L33PmB1nUpCdX8VQyzEx2FVqZ3VyioX9Py2MufPksT2r2KS2Tq24VCH4vNnPfReez",
  "key43": "5mYvbRG7NnMY4z23ycvwSBjWGWQHeTX5y4mEacmavDVwkmzs1Rnk9uYNkdR8R6NQnHjeEV3wuHYUPg4JZK3Xmyih",
  "key44": "5xB9Bsr6fDprVGcpQbdUyQQGXuFVrqF3kaDwsc9ZSTnNHuXX59F5TBMEAHViDBATTXaVuPy6aUwR7yjU7qoUZ7Ck",
  "key45": "3JAMefrWC86VfPCiSUYcZmeSQk2V2hTb2ShwWEqBw6J4q2gTteetvBVZCvDnaPBVT6RXmqC8DYWCAkatiAz4Ms3C",
  "key46": "2NYWh4fyZsmxRUAJCeDkpgf66Xik2HZ6ek9Y88oLmkpXQyRZJCWb2gorQA5XkS1PrPSQnxGTxHejr8j3Y1fqB7Y7"
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
