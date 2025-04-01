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
    "2ASCLi4DovXN6ZX4tQhVYncSatSoupB3jdSoRgarXKVpXyEfogrxRpMfSfrXoCgBMKWxenDKMzStd3R6Mjc4GyH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n66qkyTtisDwsPAwwZBZQqhcwGePUpPKhovsWqxgwbhrBR6kWAsZbmdmxGkvyXaarXPEUCpBZPWcEwqLZtzGPky",
  "key1": "RCwXxpq5WoS8wYj9jhv3MHvzzfQCiRrh2T98NJCxBySoaBgXmvVX2NFrr4LA9S8vgXffgtuZqGssTcEGYnogAWk",
  "key2": "4VGFrvy3nA316gad3HdNwwixGesTDqgwGEABYtpHtJUVem7u6QRvNjt2HBQyfrR9KWbD6ivVtu2yPSQiaLPgDgsS",
  "key3": "3aPWMCVRGgg8fQPbr7gnrWUW9v9bjCqs2Ww3QYBS8VZwQ9ufakq5pcSi6TutqqSdLSpUmGujpPgo64ETnghnKMtD",
  "key4": "5xzibiL85ifc7mDUua6AqdCTsFhPHzVPS8aaXdBeCYJ4kuxvhZu2f9TckhAa4vn7sfhzobrFFuGCr5Gph48a4y47",
  "key5": "2pfhWY1ChhMmbWVc7Fvbf529L46DxtAmqjcuME3u1nuywQe35xP7pNkud23aPcz4QqqBLJPzrq2QyUYaSi8j345J",
  "key6": "3yPji8sqfAZoN9cHavop1WubjUw9sL1GicMZRDJJnFvocf4ZKbDcuigsx5T2kpSn4GG7raHZYkhwHCuRJnFcz39x",
  "key7": "iLJTYFhNkH7HM72ocGmuQ6h1NQAni3rQbVcgbTCT3Mfzs8n818ehPLqYHsQmApoHGPDLQ5WTnReXbvmi41U1NZy",
  "key8": "4AaaQAu5BDHK6yjtWUzch8Xs5eEnEuomKMzP3UGsFYYdnGqpFaiBLmY3FkYP4aH3qz2phzX6ZCBgHMWAdfPztUuN",
  "key9": "Tc5ksgu1gpGcTUYWo2nRp4yQLcvF7pSps3K68gvXGf1qR8LiPEkNk5QpTyvtfP6TfDfTSqDmdFaUxZoirbKmnAJ",
  "key10": "62DoruDD1Am7zh29iyggtm25rz2UHDEwZHgS7ZHbEbrovGuD56sseipyKbCQKEiufYhWHKR5tW7XGwGCYgbGXqMH",
  "key11": "2dfPD81Nrm5uPKQm6sm9FgrZRUb7BWTqyrWqmuB3imWyPWnQieHwGCK3X97CdRGJedmwS5ihbg3XuiRE1CU95eha",
  "key12": "KwYtrbfRZwzxg4TEPnfgmBiSxvojBEa7fXaUfyM6TEcNZhZPn28e8eDobTaAK7kV7Dx499LqLGnhrnFK4tpSPV9",
  "key13": "5FnbYTFRFiszU76J3NUx4F8d8Pj1k33fn1SuRhJNnZrNuNxmWFV6yXUHCrrjWpfAJk3QE9uBeBi1YDhq74ky6aBe",
  "key14": "3634eCgAqoJwz19unthmU8SovEFu1NXdcWUdk3XyUYxqwXHzdmF3Fbu2ZZoq35xUP4ebv3UZcs9S2ik44oRHA7GJ",
  "key15": "27RdQ5HfD9XFSmyzxQ3zjMvjJtn8veu57bo21ALAcqTdyr4fenXi7RrF2v58v6cgJZsvqEk6yzd6jr1mZc6d5JV2",
  "key16": "d5HCGGNJVJdUW8FqrazqUFgFPhJkgCA26qKBkSptZv3czsN5U3Z595RLtjoDwpxHspHDcBqQiP6ynqshrBY4YDL",
  "key17": "42p8vT1XGqDAJaPkF953itXoLVuFYonoTBjgmtK1FN7VB7mckfeu1uhGFqSYA6Qws3k5xSB2374wftUWn23eH3rW",
  "key18": "29EPR1UdNUMQb5iopWwcQtKH6yBxGA7uNNkDb7454Tb8ZhsXfecuxhAu9kko7nMmrELW1oqnE1pZwEo8cELdr7yw",
  "key19": "4Zzo1xzazsThFto8Dk9NdukBGuDYQRfSNN4GLx5QBgLaCQ3YpY6jiBDbS3ZHzT7uqHyv58GPNAH2ieT4abRRXRbg",
  "key20": "4vMKGsxW4uFaCqBpFCgfvssjxhST9vykmHgZGz4hxLNxMZhN2KhWtyRZPvFfvEdTwrJJQD1QdSi3oUkjCDK3DEvK",
  "key21": "4VrVRtTZEijVMLcsz2oAPcqePV9pEt9unTrHhy2QGexZL3uyqsapd31a5t8NAaWVzz1VCf5jps6C5XFvwvLdSwGM",
  "key22": "4SxeuzsZnSkEgY6vNDwFwPz7937TPbK8AmWRCEkqBKDXp9WbZy1Gb3KcorkrHuQqshwHwP2bo1PK58TfxkSjN81q",
  "key23": "5ahkAQinxkpLMG2erE5r2vyyrBKcjZHz5FGodvABcTQzRbQQG5ostRfJRB9Y6mT36W9eBb8ryDj84o66Uez1XNn6",
  "key24": "KwepAPHDk43N1suvKMma9NPKAQsFSyrSjwe5wsfdwAF3p9Gz3pQEByWwWgDS6YBt5dfqdtV1Qqnt2rDHvLVZG5Z",
  "key25": "66wWzjoXi4xSNLFBzEcCXtcNunHMyNVPGhxx5PGqVnrgnMMgCmiPtmsac4hHpLyavREFDPddMzxhhWh8Pek6NMLc",
  "key26": "3r65gNJ1L79BfTx4jeZQATmwKa59Pui9eUbP4GLGwaTYH4xwhRw8tAKQk58bXjDnxTRp6VSjFLEm6wSAZfwVfHfQ",
  "key27": "pgbsDciGenhEPaJyJP4Q3AecGihK1gPGZGuguCLTujgunJN9N8CUqqhm24TiM11ZS8n7kG65xan5RLzcFG2TVsQ",
  "key28": "4V6a6qqWLKErxDdc7bXKKmQzAg61B4MtAqiq3upyvPscPogcDgAw9hrRRWUDHMH69s9XEEc8wN5FiRzx641XNKJt",
  "key29": "5i8ph41fJo477erg38MhVSMsivkjDTzMFhf5DypEfFowqSbtEM71bsneDM3qdoCB1pxuTMmPGoVpGCzA4a3KL2WQ",
  "key30": "5LiNSV725QQQsSs6sgruGNMNTpyxGuu6Y9TsLKdntG5PasZWPWWVNnd6Pf3kSz4KrJseMQgq6DvWTdNiCwPpzxJb",
  "key31": "HuPSkeVx93dKfEBRhdjXLDruf3THmgnrdeD11wxfMB6z1ACGcTtfs8VByPC7bv5zYqrKxYRmE7V3ace8DyLsGAS",
  "key32": "52XtoSYrAHXooBpbQHaWepLDtyEFYGHVtcPpvVPkVvtYhKmjiTFpPjPKsaiTXqjhtxGC8xamgBxYZNxdgd8RAt7j",
  "key33": "2stboVVyaiwTfzC4cS89Hz153J6R83BTVHEtJ42SQzVWgPcBo5dtGnKYqyHmb7UuiDgDvGWKE6G9Wvn6qwkebTa2",
  "key34": "wzRC3fqYkTHU355h3jse5v2EX7m6fjJXP7QTUJUwJv6jTLF7kJMMK1MWivSsCQeSmyDEFWrV1VCvAzfsnbGSD8y",
  "key35": "5RKmSNBatdZ7YX1DYffEErm4TTdL7ZJ9htBLeKUpJXkv8Fg2hPA9xCXJPAxZfcvBsYMNdPVHhR3zTYDqfaYzUti",
  "key36": "4Bc6AfKTDU6Z9hc2Pjx8ivPapaR5Gkn8Jwd3NQ2FnSjibkVKXszqPuq78Wpd1y19Tj6eKsVUFpnu1rz5JjdU6SQ9",
  "key37": "3EatudQaU8rYsFxmt9jbbL2istCcNeAubSjB5L4kz6t3xyBJKvtQLELJqbEHq1mq11JwBWrP9LSMNX4b1BToN5Hk",
  "key38": "5NzySrDBymZWjzt1y3GGZ2xjYtzDSxGJ1xv2WE2b6EyRyWhvUASwNdVWfu1zTcezwWyiKm28zQuhRaMTKBvS2cEp",
  "key39": "2vZEC2T5qWPhBVQXMv1tkeh1YQYwp6RhxB1kedGkrJWTA3FK5iDZYE1UGFWn7xrtyjWUzRRR9WuUQy8uB7Kn2kgC",
  "key40": "5DmmSj5aYXHiDxYeUKpKGh7Jzz8RCvFoK98Smn6pXCCMEcjVmNnKzy6b6EJQLhgJ91ooUqhgCpjLFFk7CrqmGErA",
  "key41": "Ssv45ASgjR38DNMVjHapuhpwfRW3Jmum5PqA5rDt8vXEt9WHXoJGeXqz4Svsvt2WXWzxaG4fy9X9CvVQL5K5QD1",
  "key42": "44mB8kA1NnaY6cks2r6jkoeS9qKKir67FwduQC7XFaAerJHNfs5RACjiRKNnDbji63DS8oARyKwPmdo966bjFL4s",
  "key43": "4bdZrLSeh4RGWfh5isxJV782VSKQkwkD3Ss9FD7H8udFMxWi6v3AQF86LoD1DY8adwoTPfUm2vTryL24S7cEsNPJ",
  "key44": "aRbk8Hqja4oxRMfAxDXF7UpRynK6ES8f937Tqs7r4B6WFqFaVzSQ43esfbo2R5YdHip9mL3vc6LSb5atmArn7xS",
  "key45": "4nRoa8XDvTUqW1FUcYyGWxBHXtPuGYzUqj9RWBWvNnXQopGMZat5ELy5vDTM4Ka2rTg4g1zCBGWc8nSPZmz2pCsT",
  "key46": "2ya8yHm4jQuVTT4RFLG9TNpn99qG7NBSdeqYXJPC4rRtFY1AipeGJ5Tr4o8bU8go6ugbn89ticfxQ4AjHnvCuZ3e",
  "key47": "4v7M6af3ATGosxwxTstTnArY5Sfuo2CqwP795Ai5CbrprQKrf84spDrc8rhh15LhRDWj73bcuDuDtiysufnv4G5",
  "key48": "3rGJdFJZa1VMWrvFn5wRLRGAMgsuPJSNAGR9vzu1Z6jnfEXnmLVkjwZ3SZY4KpfrGzfPYuWcmGKXpmpbtwEwR1w2"
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
