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
    "zZo8dBCSd2PSD7DoLwB5zzKGtS62vGNxKQVSQrBcsjxxKjg1kiuCC61G9sQNSuwytuqPeghEL2rHJhiby6b54EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fAgHC2yNEmoBCfzJxEU6sJztjCryb5oRiVLNd3onh94bcdEa3kq78RLoKcZaqhmMgwamaapUMQyEhvRSw14rt62",
  "key1": "w8pb3p6Yz5kd8Sp2ATBEGCmjdBNVRczSGMEfi4AMjQ55MLbJLi51ypE7BCU9cfcjFE8HiYPN9Xr8y6dqMpCimxx",
  "key2": "4c5cfaGkDbzvPcSW4bvbQixLSbv8j6ZXxxArV8eS1yeY5aARV6FncjpRuQC4CHQmBvndg9RjK1hnb8Mm5kfJ9h7Y",
  "key3": "3os5SU5WfdR5L3GwY88fFruWKeMVPJNY7NuMKUkVnbmJzxezRdQnyhCPQbbdxp4sUZjtU2LFrzUi9tGrDFfwZ7Hs",
  "key4": "2zty3sHZPUDAP6sDiPphxkcisAtEMiAYu44zMruc5HEQCk12AYEEhdPJKedWtwGWsMHyfsyKACz4ZTkL1fJJ6YUw",
  "key5": "65NfHMyMPATRbLyosuPmBqRd4MsiAbuFbGG4CvW7ELfJYRGig31Mxkx7iHKCMEMK8zZD94gWHsiV1UVFTEZeBSo6",
  "key6": "5jLcFfpGzKXdENcgAGwbvhyas12PTJy9TJqj2s68q7bUi1uwjdpnCXpC7JwXSCShRnTX9ANVdoB37YznvLfMW4aN",
  "key7": "58mzYuJ4EhK39shs91MdrcEL4NWksvAfQE9FkQ39RpwzNc2YHeCw2nqN5FmTUv9rEvRj7YGiVQNATw1np72r1A6v",
  "key8": "vsdkkbWZHQb3Gfm6ZnMgnK5AJHgp89aYGCcUHBKrUEeg2Hc4FjpsdZr6mHQKSeDuuFigD1BpUjt2KANfVBZ9RQU",
  "key9": "4vj1X3gdk3gbKiia3ioXKmk7m32RMbvaAQKiKzLbRDAHabBFynwmGedyC5iZvcNJyDpYMKyPdirqnhAi1UR1gi86",
  "key10": "3aHnJANK1bT3Pf54QbFndqMPC98C68hsmpVMyyD1uFFo89wgzRwEMiWMzmhmD4gNPispiHVwWc7Pj4fjpd5g2iLf",
  "key11": "4NJ1cU9q3aeKfzLyWA9e8gJbRrDpErHWwRnza4vc2ffDuox2sVp4gDCZyPhpUegGj6DDer3Ejj3tho3mvVVUEKAe",
  "key12": "5UeVMhLUyKRnCUHBUD6QtdMXhvE1HFQdWBNrUMaBTuejdnqk2v4BiYfJ4jNi9Sr4ziu8VutKrVL7HynFmtsgS2Vm",
  "key13": "4g1JprFV4WHci9x9vMXXDtKtezEShEMaEz7L6pFDitnchGZRLR36BuPV9gFbw7w51KQVzrKoxpHNBgmkG5UATriK",
  "key14": "54aUDvRDLV6fusbp9UAubgSvWLaXgfMu4wEb8xgUUZfomodPjEx5yMCEm3ndTZMYm332bapqwgFrwmYtDyHHoD6S",
  "key15": "3Q8FbeJwDTwYQBEQ2pxmb8z8QLMTPt3mzTaZ84rJk6uBhB5Qm2g8G3fYQwMeFaGRsEGm4AbcKb59hitnQqvBmFzJ",
  "key16": "sJRZNfXPDk4eSeQ4pwTt2KuxLaoaSpoDtU8h8n9inmXDR95136RjwuYgUoprAhJV3uUxxJMhbm1V3d3jHao1F8E",
  "key17": "53i1GeDPWiw5rTpf2a7GXS8D3GfcCxPfaqkdmsEPMSiVwzdh2NDddz3pfpFN4oeAZfeRqhdsbhjK9k5i6NM7GRaH",
  "key18": "2QoJPHSQU4jgt3PWjaAGjo8AjbpegeVMDKBUZF6KzF7oshQuK8WjoApeexMW77xNHZHyQ4m2UgiGuDzFa2k4Mpss",
  "key19": "5NgUuNW7TkKkMZxJMjganXDKqrvg9jqzincV14faPD6Ajnn48CLc3a48QV2Pj7DbLQKkNGinxCbyAfsnmFn8KHAU",
  "key20": "w4tdJ28skkyThnf5tdbni2Qwf1w927gTE8gsRr5qMZsKMzvPAcbpE8EmByhzEFW4JMjEkw7k9g8tt7GcBB1bHSY",
  "key21": "3MVTaDVRMjvRN8Nk9TSQNMU9cz3R9jF8pQCqiYq8LPTEGznT3pMTQZ7HqzLUtZuHJ4sKCF93B6DLVuSwAPaMyFj5",
  "key22": "5CHXejtoj9MmGkoAd214ytmVwQR9v4NbHpgB8TRfYmFrFMn7a7e1zcvaNC6PvzBArtgbDwgJ5oViUZQF7bUBtkYc",
  "key23": "EeZbgT6eF5qkwKnoG4UcU6tBHde9DQEVJ2726aFHgkbYWh1YEoJrv7uCDYUa9xnRwJyfjMhFL3731XU7ymjRc6S",
  "key24": "FYvE4TzbnhJ7tznySXGausULnwvWPLUAKrWBWVrBCg3VvpvX3PConhVgYsBYguXmXxE2DrgKooJTp4Bau3HWESu",
  "key25": "4zwemPLKSAAPZuCNNbTNABYaYsd7kehwrqfEUwmoz2tMdu4EaRXLoFk9QqJdBGQLqxnFFSbGs8gyMhzbZm2sE1v1",
  "key26": "5C9KV4aBfr5XM8ETS44RoQ2RKEphtNFvNxj9mXpsx9yHX5C8n8pZkEmhxp8ivqywsc3shChARGpQ1iXqTuSgp8er",
  "key27": "2oJzV77BLj1kS81BjRQjF455X25astbL2jDXCqqezWkoN5XMzvxfSvS7xLTsMEK2r7oGxTEwdsjwMZAwYx7eqDG9",
  "key28": "2NaT52KLDpoMwfkBLfwm71JXh9WoaKqfLzQibVathJffSa3i5SZu5yvbhRdFTT514mWMBP8MdrZ2XbGaX8UMDi48",
  "key29": "4JMZK6qsbEwqjjMPykgBJpcXUoWUeh5TUDm8w4LEy25RjfTaP9W8YfrZVgkEN3nrAjpV6bTTk89BykZZSGomrMBL",
  "key30": "2VN73iFEf7RKLXfZcDXq8ywkw4pCB6oNotrzAeMCXkj3qPhxnMVyMYy5wv6pZQHwvUDrwmsXE5XRW9Xo9a5GxHtr",
  "key31": "27YZ1JgV9N9keK28gB8vaT69Cms7Bwqz8U3d6bxeC8b38dPGyf87Ctwv7aqyzxbLw9Y7BxwmHhSocqGZHe6FnkgM",
  "key32": "5MWcWRiNdmnqVtAALbxK11wdjsegZiCm7S583fzZBhsd4ePHmPizrnLANGKQ5dMrX1btLo3heS2i5TUakRZGwtHE"
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
