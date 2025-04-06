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
    "3E6WqRjD9yEiZLYrb1XauTWC32pWFV9QW1mABH9YQ8RT9Bmn6q72RChDKm78Rz3KBpy2Jt3BXCYoC6hQF6ZZJaBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64DtozLmoxgHArjnpPrHZzzxGoVr84TPfhoBdqmRyvNrZn9S8q8xedS7XBHAoyaEVKAb2sJAMK26uggCCoTV2cvH",
  "key1": "5tXUiPisBmbYDx1wUJSGtb8xKhC5WVNszgnuNxatBNqiYHNkwFpTHAdbWHbuGhG3Et2gdSyjamqDn9wuc33AkK8Z",
  "key2": "2FbwfB3qtk1kXQfjJpg1ZTFxQmHvVJWyxr4Q5ZZfiT5PEG1gdBsMDEaaTsARH8fiUuB8MzUC4nPmC63fFvXAR1vN",
  "key3": "3kkZrFnVkzBBz2S6eEjYUMXZXN7pSYBfPFN2CvjeRh12we8AU96RkTYQ498aohkUpD5qaS6C7FUGhWQ3FW58DnBs",
  "key4": "67Qgueoe5rWX4kkNVk5y9G1tt4ywTxzi3i12avgVv6T2pErAthKGiNt44no38Nvwc3w9UywRHgvuyXcrV9NLx3CM",
  "key5": "4Kf3rbZztSAy6uBybGtxCVcJUHnx6hx86PETcqVG4UZo6Kwan3svSJyEYCe7rnXsAtdKMpSCwGDtrhSAtRG2AXG5",
  "key6": "44CbndL4uR6GMbcCc1a51x8wjTzo8n2HpN6AzeZMHbnX3QNoTb1WZPTNZAKvcExcbQEfBkor98e269aNDWn8Lr37",
  "key7": "2zFfvtmKNDVP67eZ6NC2aqiSCSXpZbkwts2wCmrtG5JCVnhECZBR1ksuwGcFQHWAhjaAMsNUzmwFJ1iNJ21viEGn",
  "key8": "2fi4B4xYkHJaFpXZtAnsW6RnMLw2HMBASnnxjDU2xd9zBqnWXg5QzcpRWWDzE16F9aRNC1T6HgRL429W5X7AYPrH",
  "key9": "oM2uyxgE3UV4kVJhjszUYDrpkHP6sUDzmezuvwPGZVqYyX5txAyXQxvYTpx54k9His5FCHd3jEeSt8YEx5gfctL",
  "key10": "3ZDJ1kLdMGkGZBfsrzvLMweXe4S1S5UVK1MpwVNyHYpjA6F3E3K1LwSgamWtAQFEt46iKEVUvcJ5yytBhCcpBFDv",
  "key11": "5G2uycxP5REEuYMHPzifBmKh3YZEiQBk2Njj9SoAA7iijjQ6U8SQrNxZKRLQ9V9oAxSc8J6WWDqxo5FpYUiwChAf",
  "key12": "S9x6zcNmC8naQoLKiAYRk7wtQuC4sppXbH5fsjpd8S22rUEGVxQASD7hWBFMVjxQ16bR1NRU4CC9aUVHiynccjL",
  "key13": "fBT3nyq8VkUpcUCChqiqQ7Xn2zffQT39sWXrvnU5reA4Kq98FLswrxBNQs67G13jo25vJYBSoAPwYk7ErFX5EKx",
  "key14": "2LF3uuh8cpn43ay13B1LeFrneyVtu5BoDYxdL9gusFEbva7DyGEYsvYo8cotFJ9h7s2WpsP4ZfnnttgKfQsa1pm7",
  "key15": "2Ms52Ne9YtRjHyCsrrGz4Cxb6tgvbxEUabp3aBFiFDeHsCNfzv6LiqrYsvp9Q72s3dTZHnYV44EB1ajrtKDhkLxG",
  "key16": "3AC3o8oYWNoJV8EKsuwDvohAzdKRthrn3RJ6ZdmWusyYeGH21nroGHiPWaBV8LUmfs8CzPdbuQKDaJuKwtJuB7Pc",
  "key17": "3kXQV6Ep4wd4WEWiPpxcoRVEx6FeRV4SDmHoEDpNWn9yKkgBLNnzVJsFJc1919zUv8oFihdyUwKKTDmAT8fywMwW",
  "key18": "1LRDBweYyAFfbKC1aBqGvymm75yvACwXgfNjzvC4xWAcQtqSJQAjvS1ZxBogMDyo1WgbA3z2MRUDNKoXEsjzEWD",
  "key19": "31f9pzA1UuJWmx9JsuTDBVRqkCiTu1MZQiQDkEtfN27wXURYFAPRMHLFnkhssnHji3cPadoUA1cdP2bYpPtrnPu9",
  "key20": "4JdoL69gR3TjeuUG3FkfQZYoyGuEsjTmbudpD3gDvFixVFHXx1ATiTPd8weooGCvqpHKVNWSXfmAQYZQ6CrKX8j1",
  "key21": "mjeQHSkB82ViPSQ92iBRQ8qTnfrw4p7Dpm5d6Ed3Kj3RcBRZRhnAYKfpzuevTz4NsFWP8UtdUgtc2jZrbv5sJU2",
  "key22": "yc3sbt98CKVEyUTYJVxU3ikAXsMJuvzssXWkWJWeqDXc48LptY9zs2GRktfWBJAeA5A5L3oQvfvqPX9pqfJkuHk",
  "key23": "FAUM7qDHyjXhRs36jfPJsBTYyh3dBgXVkrbexdbWCsXMxwbhWfTF64zWiKzwBxRjD3nk6UZvjcBk7TnH47UXiGX",
  "key24": "2YctTDMYuWrkogJTCYyQVZFGdq8D2FY5PFpdBS9Kiic74Q8yBEHwXMNh1Bmn9SZZMVKGxNLTfwadnqT58nmcaHC2",
  "key25": "5QUAvobwd5bwd7wzMECWqMdPYrkAqkqskm7xPY3bT4NDYF4BTwfkhkSpcczGqgBKuFDwJP125VS6rnV1Zy6bvvWE",
  "key26": "67rapZ6bgXzMQsiP7vB7SXAGPbsqzE2w55361jnhf2m1fNfdmDnQJW5zk2vwz7zN9nW9E9pP6mVMjbKbHiufQX86",
  "key27": "Z7phYZm9YriE5AUxhGzJeLrAn34SUP31BNHCuDPtQExgaiDPvGTSUHhUASf5m9ykVpAPf9m1zajX2XrgcWCswo9",
  "key28": "5QagLEWrp3JgRStNDAPaatXfNmLRea8kh19buqJs6iY7wFqgCjmrdUriPs4BE5DzeiquohvbK6M1vL39bFAghQDG",
  "key29": "2R3qBTnCyZGy11LSFTXrH8Q5YedLvnYCHfcYzRbfMJU5EVXnAtd4YKfs6XprphTPrPe1BXGrW72rf14TbPeCeEzF",
  "key30": "2vu24jUbNQ2Phvw8DDZh46URKrgMwQgK9B9N58DTsjTWoTQ4Vb1kDPpjZtM34thVYznGXUWe7EXJmYvDuyjYbNmt",
  "key31": "2BPpAVhoqEqPBWE9qbDM5gKKaQaMj4EJ2SwvNs3542TkRb3vCcGd8JPGt7af6wGmh6pnaVia2DG7VpJYCvjKRBZf",
  "key32": "2y1CQfiQXzYzyZSecxTw8QMrfFWCfXQ2zUdKgNGY95oVaonnXn6Y45trCEPcvAgDHfB2KVH8YwYBsR5aNmiCGdA1",
  "key33": "uL3Q9FjbU2vxtSHoGhSZXT9LVyKUJrJsTXniChReqViVgeMV9c7yLAhwVAQoTTVwbQxp3nh5MdSkbGfkKDB1kfG",
  "key34": "hziSF5LLVyZ1C52Rt9yAkWyve4Hg5TKbDg1rTwNmRot4jpeKMPStQ3eDaK5yy5pj3cXrFMzbcERoSP6pQSpyVLt",
  "key35": "nkybG6bCakofuD5epKnmGUXQAt3Q44ugT9JMQsbmTLnfAbWDzwLW15TRWSTcuzSR49q98F6JYZRaJSBQdijyDg3",
  "key36": "66Hey4Uic6fo1pV6uSe139uvnAKtgSMp5BU5TysVAvgC4MVCvVhZUqUxarjE9Z8xBGKGj6bQ8qRyo4zziUs6het2",
  "key37": "5KcH7PCBfds34iB4oEpN5JpnSTjzGNz2fLZUtDhRYqkXGfb2kXJm3ibnpGd5ovnU8B75HPwLLFS6GKwxNXd5pipF",
  "key38": "3NaL4nDQfC18i5PXvHnoxMTFuAYayPZ7VLT9W3K29hVptf4V6su1atMktR5pu6oLbNny7aqZyXJmqjRz8jyy4mdH",
  "key39": "4cpF6J8mzaoZjqunJ8qaueJUgPrS3erUC7u8fBsbDxqeP7XuJAQEvPFrsJaviHrQWFzePuc7WPPq46uQyqdaSR2G",
  "key40": "4C6f7Tkpv7ByCcMVwiLP1SNh5NBiTtqyALSjtoo2QrjKXhEcdc6iuqH837juVsKSxUVmyQngLA6VtPp1PchfvPjk",
  "key41": "2BS48Nq64KWS71S5xNJc3NJYjcgtpVxGxUCmjk5AbG6jvVt4C2SPKazcuSWhpxigsXRTiBLAbcJYCpDBDFG65tsP",
  "key42": "5Ez9xyp6q1ws86y47tumQDLaVJVV96hPtyxhkfAowE1joCheySMbG7VScncZokpoHjSLdyozVqT1M7EZCv2tadP7",
  "key43": "3YfShXyL1AKP4WgFaTB1rTYhCZG1g9gWsHWYLtGREXmfxUY3922izrhcfP3uTGNyhR9xqvXNAV4b7UzRstVGuDMj"
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
