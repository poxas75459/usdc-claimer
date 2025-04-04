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
    "5gihXqiCor855jnmsncpA9sKagqL3zHS6F7fV7Z5guuiiVSYLnu7xHu7wptju4gdfSRd1YVPMY6x8vG6WAtB9BEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAmUD2VtB4Q9ZzG4GqxaggTLdEM1yasm55HymD7cN4My4GErpVr1qtFR6SvcbjoZgMf9vXqrPa3454nXBEVDVV1",
  "key1": "3Aadodcau8aR5HZyq5VciqHzkGDyVobDGdc3xXkLoRJbEKdhisZ4jKPtQYQet2Pj72mvamLqqafRKucA2zRf6MkD",
  "key2": "4Dg3G3Xp64fEyCndQQhW8R1cYfkMazvg1D6LMxSNsg7ZPwTcwqE41hB3M3rqRJK8v5H45WfsePjMwrP8KpnXMiwT",
  "key3": "3sAvArG4cd8XXFSpWmWs4kuAvid8NWozJN4syKpWAyiLc5er2acrRs1NA8FCQGkUfMvDawStQoDsinwbrY5WGCkT",
  "key4": "4nZ2DD3H3hR7AbxembwkPdrFLSNuAtZEHhE1B9reC6xfbwva697SLh5CFnamBGHLQRuUG3dYXqipfwBj7bSg14qY",
  "key5": "nZ7Sq5tkfR7qqGQLH8HQAof4n8X52Xso5QnCMKDVcwjhaWr5zW25MN2Hk8CxH4JSiEGYh3HGBwptbkQtHynDzgC",
  "key6": "qjK7KUxMpH8ELaXKPd2K8C4wGLZfYztTzvUuTn2oxFqjjNrtPEgnYLnVFsKzdsA4xzQ9CM2dS1ioFsbPT5Szs4r",
  "key7": "2SLRpTctnn2DB1nWeGWXSNm8d1cbiUwi79GSA3oNAyPs66GECswDRGUXT8hEa4SSE1kWXGTTR6LNx56FEjqhPx6h",
  "key8": "3Re2dGuS4E8Hhwr1fBmQCynyrYu66eK9zMmquXVAQgvLnVSsyG5D2qeBh8PrcjEKeZq2hUktRDCauhYuys4teCac",
  "key9": "262qL21mReNjRDeV7HcBxf8cBLnwVJ3xvnRFJfUMRNv9cVDqD4C8FJv7waz1xtmyhfgUYrwzWMVvCuCsv5StUfXh",
  "key10": "2azf8ysQv6AWiHH2w3FYD7YwrVeQYNusLtWdVHFAJN8d7fVEXTz4AzWCkGyo3D9LxvnzDXQcGQEUZB3Y2kzzqnMZ",
  "key11": "58G8MQhFdCL8QuAzWFAGfrcMsktT9hDA62b2W9KtoADGffAJQJvLPbNBdT1V5bcdYmqVsx7PY46mU1qnkjTMPE4t",
  "key12": "2tbcAcapwcwApcQ5ctT5eNjsqf8Bgamse3iN1XzrcwzcsphtBxLGCbEJoZEX5X3osqtiYCdEmbNo4g7NdDUanhvP",
  "key13": "3pAQ33JemtDrpezqXyzLq6JLKdNKrcBPZrJYnsBBn9adGmikWVq96wpzhGEzUGGGJd2u2YDDvEBxTtUVA1n28VSR",
  "key14": "374TLALmrEu9chd5BbjcsAsDnYfKkPFQ2J7LC9XDhQc6ssBD31uETjZtn3LJriotgfLvmU9Bv2hZPhfnw3XfABym",
  "key15": "yTkqAgc5Z3WDCupYpQC7zb2GCYXkAHVJ6cLBrEqezU5yFieZGw6tAHEdVGiG2epAWacWsRerAHKULF3hyeK9hEi",
  "key16": "2zwk3v8YE51CqutBofk9BMXVNjWjYrCvrFLT7U5PYY1s3aUTFnkn25yK7wcoc9cYQix9ht9dL7ZigdCeSQgEhrvd",
  "key17": "3qGW4Qax86DcgpGDkQAJ92Hm2DZUNW5ecTkPVZSwpUrXuP6SBCFjsjNcXaEfZbjsirr5yhKxBkNd3Cavy1o1izwb",
  "key18": "3QEKUaw5HNpVKdSuZsUxtjPBhdjuVCkqaVMzf4azsHccowZUHjHsXr1SMwXEu1f8MYuoikETCLkXJSY1Ft6DrzET",
  "key19": "49f4jLtuK2Prv1dWdna4ShU4SnFjon4MCRjQdNBi2kjJP6Dhvhzo6ABuFcBQkXgj7CVkWVVD6WU1BAquERuEEz9d",
  "key20": "42ZnBQV2kfpzWHePMA57J2UNR3y9eZX3USRfMoNXNrdKNsVJcjnwmYUun2kCYAw7pprpxysboxKPyNBWDPBi9wh4",
  "key21": "wNyg6tJZBgYZ7josDJWHsbSnBTK3ZEpXqRe4xqdm13zJTFd5TcztLn3r8uzHMfAWoNEqPrW2cCJp4ARSFoHeodz",
  "key22": "z98WjPo8PpxBg5YmfeuWmu8QcGY7PQLdnXQCFwrVT2Scy6yRJJn5qGHash4iAKY6VeuJupxT4QXjVDvx16suc93",
  "key23": "3q7r8n59H1TyrhZbsRJU3pnTQVUAvkGk6HwDUa139z9Azp3323621ztZjbeubmB8ithPx5NgCprY7YZ9dPLVP7qP",
  "key24": "3AdUrnADSf36dDSdKCmKssgMz7G2njXo8VjQQiH2ZhNL2PPntohQwRswwFukhkBYmfu4ZTmpmaScTw9dQFWY2Vin",
  "key25": "3LncWK89hqbrQYjjkk5DHFMzsN7kgFwJSdF6UnRniS8Wo7KWzxHA9vq5kQfge1UDjZe6mr79mym18Hw2NGRVABkN",
  "key26": "26vGkdg3E5R72MtCyXPjy9v2bfi1v46kXjYgW45wsS7dj7swXq23D99ZjtixanhrUvSydYYnaE1iFCxm73PeCVCz",
  "key27": "5xR5VNhCWgfh9ALUfGtoiedwJSnwFS2SUJrvRdsAQfVXftSKwX1wENAUKiHFz7AhKfRLBEnvhFkfkTgDaKCfvzp1",
  "key28": "5hG8pTdV5CtgzUJVXi8ofUYrua8PRiWGip1Asa6iy7gNMwc1Qb7ZSV4H91aQvShG6K3BU3ro8viPCpKuuRQUK4G6",
  "key29": "eP5nnR4T5AqMHZdBQJPyt7wMRupgdGv3ViygGuhxquvYofGEfDnMP9snKSwXNfR8eqKQWMNUUh5fraA77QbQSYR",
  "key30": "3xvocvtLHDvYTdW6KP8WXCyDqzm7kWbjcKnbGvABZRDiJstMpUqbZb2zFgrMLGz6n3cbV4kkYKyCLdZ5gxCaXpAo",
  "key31": "2mKotfmtHtAdNjHAeb9UtB4gQzFtqwP2nBUbN5WepBkjiDLkXyuTyGYehRnPFh85W3R75hfHykkTeU7iniCKuxL3",
  "key32": "3MuQPqBN5tkbuTsngfwBuancgGaWkAmsWjR3At61PpJ51UQKn3fbBu156QEbx82awJf53fRBx5dZgCgeNSvPpRa",
  "key33": "4GCMNZRDVRiTkx7XY8E1dhLjWDeQTTc4Z1NGqUXgawfDR1Vpmz47Y6RhtWVe7X3mHxnZJNeUvu6UQqmGHAJhCJ6B",
  "key34": "4UCPkeaxneXRbqRrdh1TgMeNF2biPsNMd5ddFdRNZA152pUf2M3xyWwAhtGuhH5VA429XTxcRWdN9YLWp8xL8gA6",
  "key35": "4f2FVwUmGeZxLw61r52GnzUvriZjrHvb5xDAbMLs2cDyUymNWAnMFSJcN6r5yCXhweFyN73tTW1oQA9tD494j6tY",
  "key36": "2fNjrmR7eRwurJ1xj2KYsbhaZMA6RdbaGmADYqM9oT75bHr7ATY5QuNussYhUPDbFUjjduvBvtQKGhHp6BrhHaWB",
  "key37": "2qJXjCv2rMZQDWHLCiZJjWi9YdC3WEHU1Dmuyc1m3dc7Tm7oru3BN5mJ92HiJVjS9LxAVJQqu5V7SATF2rtb1Gbh",
  "key38": "3EV1okcJAsnpMUgbF43hbL1mSHbgHnKwkuExRuDBSXJLCY6uC1UhsBAS5JZhEvovnfUxV1Wn2YQy19Bys96whJVz",
  "key39": "3oRKxWgcirmP7YWua4wa5DcTuqoHF8DoZbtboBaNdsJaJzgjx6HFcnMVLksLnFafAqsCrbqqvMvRxLXzhGvKjzFW",
  "key40": "4WGtaNoEEJTJjrLyqD7NtCGoGDWpNpPVsLMiweFrstpnDQwR4hFSoWUrXEMKSrQ7UxDZoB2dpmRPY6HdJwx3v3Ku",
  "key41": "2Syaqm8qjYixAGGhtEApm67AcTu49hYiaW6cxTcT48TseSQeLh8YuSWMwaFPreW7nZDWsXjtxAEksMV8sQYthUPi",
  "key42": "4xRhLx2knzMbhpgfdeD9adPBu9sg7QbMbPYED8Y8zMcfrDVXA16N5VtYCy9FbDLrbq4s9M714eMbPexxG77kS4xU",
  "key43": "41RvZrGLnj35JyHHmq3ZXhH54tpiA3h2Z7DS5ffqY66bTQfWZMTz56aiyrNNBp1PVqnAi5m6traKiJs6AaV65Qg7",
  "key44": "BjBLEfXks2neaL95farTHcP5AicZGxBFsTXftiU3u7osvxhhpFtKyXxB7GeUzAGE3YKnwRL915mJQYaj1WamyeZ",
  "key45": "2UURGABNqztWBLteYMjgDcLcMiBrU5TM844BHnYG838qXYNNQbKKRgbAtMX2u2GcrMofKhvsfAQeRhtTX7LBDZGh"
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
