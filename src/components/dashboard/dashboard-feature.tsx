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
    "2tws8rLx7Dx3Sj44iFrjkw2nCsp6T21KVVgoK1jUjHyaXM2bJs8ybCGV3M85RGJuWUGDN9f8YS86HBGUMbiDXi6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkESQZDm9tMbhq3491cAPCVrP1F2KpRsNEsqbWU3zpzLVXTn3U23jAUJ1XBYcfhVWa4H7qHsEB7R6QJvEmwFYqL",
  "key1": "55SaJPZ7M52kogJzp9adUJWimZ43rYvB8ncreZ9EdtwgtT3hmP4S6sxXcffkZoiu9qRUEsDv3rDQqUPcQw8p6ip5",
  "key2": "564snLjCQRiKWTDry6ANFakUL9DpXv5YTiDGLZeTGLw9Pn8BjEgVVLBYsmp32BgqnNbZC7TTn4J3tzHjKN2Lf6pL",
  "key3": "5UKNhcey51BxQkrU51JViLcpd2y7u4gFa5mEmEsEaApotoKYB4dga6o7wheJfcFQCN8DpoxzFNANifVqed4SYaWc",
  "key4": "24ETndnfHFsrFSxgcN9TRSBhyXvTY3tHTMPegudgEkN62htS7TSFa6Cnz21Yzmi3KSRfLxHKt66VJmzrHinW9Drg",
  "key5": "5kuVMaLzYFedsg4FcTQ3jwr38XMsEfmmjR4ow4yFXiuZmuJQgfxom1w4S8TEuF2NYwueEHcaX8GtNt5TGbUJBrVY",
  "key6": "2ANyWTumRoCMKf1KM6BuSzZi7A1Y8kBoYYUMeiTcus4patyjy4NMzoqp2qM5Ddn3pCKiGAdw19yhAitLqv2kiYg1",
  "key7": "5iGhMB1k7NaUvGaeY26KEgxnbMbstNa4pTAYnGAzND2mKTN2WLBdU9gTdfkaY7MSGiGSwd4fckVNtZq6TCJPRnJt",
  "key8": "2YcHVQTiPDhTRrfv2GjgNBWtVUU6cB9YqE1oC5oLLJEbL9kog4J3mGyxRzzdaCg8ZVTy8WsEiWdjkwZrA6pHzvW7",
  "key9": "2Z1U3fWG2neHTQt1RGbkCm2FXz95EHppnoj8kbEBPYNNmRxTAWjJYnH9EBCrtQ1svNpxRpyHFYaQZj8yJsRw93RD",
  "key10": "3P95yhjBWwm61NTeR77YMWGNwyXo7Mppq55w1UdHw3L1xxphh2rJyUdPQFhTXvh1e8PwCPXfETMcwG8tKP4M5oRK",
  "key11": "3sNNiEgnZtYu8wAfAUED1tZN6Mb5btcyD3bgzgAF3sa8sdATFvMrXnMCZfJm85NBDMQedMctvtTgPrRPvxNnqiMF",
  "key12": "5tkmKXyJyr58aoYqNq4juZQGS5Syj5a5n6DzM62nd3pQ6WDQD8BsEVpKpJxJpynpYwHogCv43gcirS6mQBAuKzjg",
  "key13": "36TUUsPrboQoKyoAjertmamCtEnTCRAtjKvbkbWCRnjvuq3mEm7pinEA19Nkn8tmW5YuhRtghkb3Auz54GtKvuaF",
  "key14": "4FojMQNnF2N6tfmi2RuVsXrFLc3KaN9j2ex2tyzu7CyNA7nyKQC832NVeEgD4kfff8g1hLz6gMtwAsGFpKkB7kQB",
  "key15": "2LJSEDe42eBfSAjzoCJddw5cpZwqALo3weqjzKrHWf7Bwosup1DrVPA7dKNKTQroe5FYx4DtNcUwSYhDEMtjmeKC",
  "key16": "3CxVdkvYxLF4CdDfLJAbPqqmrchZAKgrqmkmkStgpnThJ6D3HzB1xQ3peWi2TByAjdVc7hZ3cYFpi4ivyhWfniSK",
  "key17": "3sZ3oP1PyYBLdHvzxJ93MyPjRpihdkDG2YY3unmiqcxzAVMQyRPHb26WKKih8QK3w23WEUE7dDGtjZ6b7WEikBjq",
  "key18": "AFuitELJZHGQcUQsPKbBAbDaMqU8yQqymGt1ZY14XunbwT8rmHmfqqKBupfEQyrrJmZcvpkxpTFL7SZ5Wrw6wES",
  "key19": "5pJyntKySZcg2WYf2p2yQvpMoikaVXjR4koPz2W3BrFVemZZPykuCBekRAsBwaLMxjQeqk6Zwro6KvS5utjwHGva",
  "key20": "4Zow9nMELDVtbYDw5mXcd8D2yVe138Kyub1WUeJrdQKQSijRrAgqE6Ms1y1GAnzQG9gZhTc6mcps2mJfNZnuHiXN",
  "key21": "5qJykhbi16Tx9rCgXvZn8iaB4C6Y9UnPqkmpRzgGMJ8fNGGvEEzUNHBTDVkVDdW6qYcrPY4qb7rAgetFFkbTTVWj",
  "key22": "2jCLWCcPHqddZCR2jNoUdNJBTykP8BuM7b5FWb16r2tN3RcLFxkKrAmDFtbjpDuu7R5zg9k7jcfvMyervZGGD6Sf",
  "key23": "5oUVucVa5ae3SSCAYR4xCs44x5L7aTk3BHcjbiUMYxwMZeQyfABoBwszCLP7P3MmzXR41UD6Gnogk3WLiSiHRzQo",
  "key24": "51uAtstt7u83TXQ93DGoYcxKkzkiooSWXSgu3zJVX7HbLmCs3JwDNvXoRkR9RJo1kvdyQPevUH79riVtuUNuCQ47",
  "key25": "3Lp77xTYhrX3KUPurDmbAWjd9hiwY9bq6iEPiCinYAtwLhmNkvFbUwuJv3kHhw6jD9GLiL8YsRVsqygs4Vq5B6rQ",
  "key26": "3X84am8Qn5SGTZyagALWnMtDgtKox5Q1wKygCNwEB5EcDYdGg5uZT7LaHttHwfrGUgeY8RNQx6kYXbo79jv5BZoa",
  "key27": "4psJQ9PSYcs4rNg1SYqCvnCfajqadgUhHpZFy59VJ6cW4itQR3ipei7pi8uzgG1DY4z1Xe3beabsVMAYscya4XLc",
  "key28": "4q3yiVqssUZFHh6KvSgTjDzg6Xb2uzpjvvGjoEi6bhvzNZaX2pMLjYhVYC5oDNs8fKKmgnJVrGtwnY9seuspbbqc",
  "key29": "3rURB6hXApyAVPXE4oTYgwtSYqiFvSmiU5j3vsXzKLemzdc3cx58GARZF9ZtQN3sxC885GuwhXagoY4c2Gpdntg",
  "key30": "1zvQDHqr97pywBwK7nETUPHjdLhksMnjWVuDh8e7S7eg8y9QafPuB7bYmKL7wSMVJZZaMq8m7Vr2zYm3LLtJWm3",
  "key31": "5WaDbRNMLwoWJFmKCMqd3BMPs2DFTfcfsZbCUENVReH3vZ7CT7TUnwpYS3FJZdzB5fqr7qaqCQYtRS1xPLANSWZe",
  "key32": "UtwSMbL9cjtach3oVp6VZW9SvShiKXKVVAnYzUrp5TMZJyDSUDiMwDePMnnQXDtgw66hgcXrFe5oEKpYAW4AvgX",
  "key33": "2f3JU9LP1ZDEz4ZVUA9my5L6XS6LakVKfxMaFrcHinAX7knLGKzu8GwF9wcKinDBNnv7GmB9f2xzfFM7P1jWaw5G",
  "key34": "u366LDQEeAGdeWv9iUKM3guAmYY21apq8KuAxrqsdJTHKqrCobtHzZioLXfoa3sNcajMgppcWG5d9qfok3Q7bTp",
  "key35": "46qGKfDsXr8u9oAbyRP6ZGXBu3BJd1euRXAVLuvxozbuiUt1wsfQhQ7wGp19jFrRmJ3xXHSrN1k79SqrnBJ5tyug",
  "key36": "3hCYZWBjpZUHypSP1a1PjDkeGYQWxvqiqEWeH1eW7xqynMeJ7VnEcgGUKAAm2F7nqcgB23yJHPyWGNh3WXHSHgVL"
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
