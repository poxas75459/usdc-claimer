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
    "4pZ9bQVAwY18ZCVx8eWjm3Kz6piupW3pa1zdYKyBLz5UwgGj6yQ7SNK37pz5xXhmve1HhdeSoFjwxVej1iqHTPGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yh6oU7ESn68vtS3hKR2mLo8VYqoeCUde9VtUF5rRJsFUWa1Ggo61FN5NyBmAi8b2S8mC4DSWSThjpnkayQnF325",
  "key1": "x6k5YvV7BNmiachtozGNx9tGAYEAChnLMQrAgF5rqc8Nq7GJmD8o5H4NyyXBpTcLLLqeEa4sQYJLojqmAu65jZT",
  "key2": "45KjoBA6Ts4izu8uaRpRXfPtVnmN3CDzcuun1HXrqSJjf1FTqEMMztYyzv5ZKNroPPA8kZdJ2orgEgK9n8RcgTta",
  "key3": "3viM69Mcv6otw7nybdofepvGWAkCUbW7m19ezbskGYjKAuASurtkQMamH2MUxapdFarfs9shSgZuz97nsx7xJDyq",
  "key4": "4FFb7G7Y2K9jDMeBfCLagraBNdni7uRyZXy2kkfh779FeUDRavYQcfdwA1mbH3jDEf5oPsQd6Qs5pc34tAv8dH5z",
  "key5": "3sissCMhSPoNwtatTNt8VUNQUCGDMtRFTEAi9cndowoCq2gWUu8yvn5zGhXMn1m6NEt7LBYnt6ANVrDwzk9g2nMW",
  "key6": "3WXTPgm2uTrJBJFtjviRU1d2Am4zYY4rxZYBBx6kk6UunguzbW9duNfy7KbnSiGmyPbQxXwtdcgvNhfuh9P8KKv",
  "key7": "2HcHcy5nbPrPpDanTKhNRfNUpv654qUD5gbbjJ5SVUdZzcbCNjoEHZUfD6iffx3YK9UZ9QnPjtew39fsuRo4uZe1",
  "key8": "3FGtn2jEtyGA5g1o8o1vdFvBjQg5Xu9PsAJbtbgmcv7BzA94eNa9fLKLPzwNDu2WkZUbFsMwAxJ4WChMwsacQrKR",
  "key9": "5iH7xNvURAMQPXMHVGQWdRgGhtL1irUwhVf2sho5z5epJ6w6DZTH6Xwx5ZEvcBDVj4zqcXrtGB7R2ott6mqqBHQn",
  "key10": "1mqegY1o46NgUZiRAuab99yruCjmGkTBW4ESFXs1vAPoS83dYDfGdbd642g2oxAueTDBPFE9YYyLyeRdvxomoFb",
  "key11": "3Qjf8w4fjnGGygotUueU721YKgeVKtXecMGdv4P7aosDuZfrzC7nz1KbSHVrrxKuvdpAd4dx1uCDwXbgQmHUNkz6",
  "key12": "AVdt7LaeVZCHGW4kBWSkFSiZJB1QySSGLn5uimvwDGTUWGs9EC7rXrwuX5gTEGQJjLEfMmseTSocErqNAKgGeLz",
  "key13": "5h6zakBrBUS6YDJW7YMsWvH297KRjajVpSvbMwjskEVdSC9Yedm6buq2uKABJ29uQDBFxBb9vQPs7ucYsFZSyz85",
  "key14": "5w5vvK2oPYX7RaU81ANH3iehrGMqGYAuZu2TPHWSmmafNdpMXFMDoJxBT3KnReCR8izf3NkpvD85MCgRMJCTqrEY",
  "key15": "g7k88PcXkvzGDKS1dW3ARDMgJUzBe574FazAfJTw9E5favm91DHvcGdMK6wbyDXctAjwL4ohzNdVH6oEyzim9Yd",
  "key16": "4gfSVQQdkMSpRvesyuitZcZ4Jtd8Jr9oSTAuKYF7AA1Ek54CpREUhiLwaHqXzUs8wAUt48GFjqLvrhRYAUKULtxS",
  "key17": "22415x7R7NcXAvPUQzRycXPSuvtToiK1eH6hHDVzwL4awy85AVtH5KUTqBGhBqYbxKcRjzcqUWEEN9tCUdXK8SRw",
  "key18": "4e6vesccNAZCbQzinfGawAL6zVxZ1ZQeBksRbxkoqT98zBGgRP3nJHoHLQ3ArDvAQb3UVQDNuoxYzCMQ1Qhb4ZyM",
  "key19": "4DDXPWdkMADhs69z8kcvGFzPE738km9Ct9shconNYYpfZxfUfFLR9QU3pq8uAWo7aWaurDUFkWmuxommeRNaNLRh",
  "key20": "211H3U9hTwWaVkyVjNoNQcNpAfRmQaBcCovgynjtWfAe5dBdL14aBTsLmmqGzJaRySvk6p7SNcwBm83vBy8qhhWr",
  "key21": "4XiW8MEe4y3zDszkgvZPEfWNtmRSGvfsynexNjEd7XbF2CAvB3qYRUniTbe9Rg25ho6kC7pL9RGbrWLGrSeGHEjT",
  "key22": "5tk58uVGXReuyAJ9gNvHYz4ChsibfYQdpChT47CKx3wZ65y9vy72Efb7aogVu4BGK7hU2Mqg5YZe6DFmBgmKGJQH",
  "key23": "3xvmSUhoF4gKpqFZyYpRdpD85rELdcKsCqCpUqtmKE3KmwL1bL9izWraZc4cCr4V5VFtQgpQQzbKVujPgQrrBCkk",
  "key24": "4JGuVi5wcNzbfBqzBdCL5s7pUVYDFzjy2RNUQcbmSSCFsERj9gYQPa9tAEQ3164MFx6PAQur72GK3NtPFYjheLz9",
  "key25": "55FAVrV6zAACRAgrQBeE5wa7uxddy94sNCvC7xoGW7fxXFMK4t87YhzYyZexysczw5QAqi2EwUKASSnKGtkxjJTg",
  "key26": "3KPEkpojPyxcM9YMbREo9ac2MGzogVTutXapXJ7XMsEbDHqrYJdQ1VV7UE4VQock2ksZfjGWKHfRYwffVtKj3aps",
  "key27": "24JFf2X1eKeBF9JY6p4HXQv7hLKzLfcbgWg2NVmfWFNS7T7TLRF6gUTpByxcQ4mm7ywecBUDDqvgw7B5y9vZ57Lx",
  "key28": "3XQWgNmZCwLneHaMHAkbG4Jn4eaL5V5xX5cHvLDGcjFDjz6pKNSodvSknwEysbTvDtCgBG7Wm3Za7vQDVv2crnc5",
  "key29": "WQfUHbV3r4QtiTL7DurP7TMtobE9XXEauXKhU87ZiC1qDg6aGsDDiJKYBCv1QRmQ35pXxMwDnopvuy7n97dAgYf",
  "key30": "5buk3zrXZDTDLHdYoSnv34W5onqvnMiNxstc2A7q2ZrCmWbWg5rffo26vmwYmkn1HbzfbyoTihcDoKSzy1ScNPUG",
  "key31": "2nubjUgozkBrocYGRsZzwg7iWzjavJ44q8DYoR8JesdNLJoDiHahwjc2Ec21wonoWk6icBep6ahxQh4wGPxwo8Eb",
  "key32": "2fqURxefq1BRy81mQLfUtBJSzjRBdnUJ8GnPiJWXr4gxCEFmnsC2ABGydJdwu4SzbUfZgWGigURCZMd6cqqZBvxV",
  "key33": "3VbqKHVYYfBm4JbxYxtALCvDnQmsRaxo4zpLpF9k2Hv77TUa3kbWRRBxVgarYZnYcGoD7DHB8UrYfRUDq7wGz5nE",
  "key34": "4uTTsaZSxLmz9oAAMH3XwKfzb1AFcuhC5tKRshPjTQ5zh6es7duay8qSHQJyUeoET6ANQTTCnT4cdMuoX1Surk6B",
  "key35": "2ujYnTwn4KGjaEo3ngHTMxCHNyTksRcGk7Jw52fMTmTXpUCGY9krtk6yqQ1LxmNtdJwNf2bWzSXZXQW7ZtTJLdE4",
  "key36": "4GnMRe7iMLingqzPigfabHYrQP45jXMrwxnLP3oKoSjB2bZgE1EBu8V34xwcHKQVPe2Dwk4k5Z4BLfUKnVGkwGnZ",
  "key37": "3jxNXELRmQ6RjftyHbseHMSDJLyLLp6sxaVYVFRdD5hHoXTnt7GXtkie7YDgjR7abnRWjcCDtBPa4LWxGv4AvdbS",
  "key38": "BFBXtyCh8Fk1JLhoVwvUb5J7F1DVUdicATug63rPGDXqh8894AiU5NUPuKKtEvG1VHPP4gTfjvW21iyWbcWkMqi",
  "key39": "F4R5By5pHiNVd8qWwUJkPSXdnterzrEGXSsntJr35mXh8WJ8X5sK4DfJPihgzV1YTZB1imfJL4P9uY8dc75ZUFu",
  "key40": "4BqVKe86Z7AhncC6EfhSPX5mbDFCg5TnFdNFThkxiHRt1MffizBSsqrmAeiiFeLdcjYn9fBmcsDiCt8v5sDF8prC",
  "key41": "4hZepgaMnAGPupf9xgjWzyVJ5yebn4pttscEY13tnNdQjSubsMEt477KYa2BzKmAz4Lgopjc2ygT4VsRq7DKQEpt",
  "key42": "3Bjccmo8PqbAWkYyTRfP4ZLjQ4ccT6GyAt9YNU4r4kSoaiQydkUEN2kJPamb5MCEKkCJidSXShxcTpRVhxeSaECo",
  "key43": "5jhXDZJRX6RJ5bexsPJT7bT2a72pqkLRs2djCnZb7scbSbWJUZhoRBEeJMrEoR1Tkt6a35NirtVdZKJtMZinhxbE"
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
