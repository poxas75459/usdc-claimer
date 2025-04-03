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
    "3mVhgGnMWtwMdM5fLQUSgJWoiGugbTCBFQqs7is5VUXu4UkRaYvnGwFAJnE89o98yiSqPWxbMBXWMfiHXxoWDdSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4abBEBsvih3mfHhhYRCDSYUqF4xx6XEdFT8fC8g6suCLaLA5p7PFQrsrsSMY4r5de3JGsgsaFf7vdKJpHuD3qwQe",
  "key1": "4ThtWUb1mKSzgq7sRBmN9pG22b3BGTvsRpN2KcJ7SonQmdEZzcDNDth5fuf7CtTWtVoBuWiN3hwwnMwMQXShgDNx",
  "key2": "54eDAraHRurWas4LonLRh2MridYHn7i1wENYhajpTQUGjter4rvSoWM6JFmq8LBRmzTTJ5Q9yyS4MPDtb6isHSx9",
  "key3": "52Tqg1wLP6qub7QuXxYagY37aDL8Yj9dUuAzjzkJ1ja7AuyPCXL99R5XsfzYwCj137kF6T34uNDJE8PLCNHPkPV3",
  "key4": "KVX26zSducUuEmAxeSyr5mcjctiYjMAMZd5bKnhnxKfBSX9eeSwaLnYzXqCWfRZUsEEMNB87Ttk23kikR57SW6X",
  "key5": "5cG5ZxtD43w8o6g1zvyP6o2wDiqLsvuLEVoPh4hgUKxm86FC2FecrL1ukEiH9G8tjiEMNvCZwpQk319EdhteVR7X",
  "key6": "3CyCis89JbgNo2LwayGRCeDod4uexsWRpkNa9uJpij42Ek5BW7Mm17C1LpWpy6y8QJMTU7nJRmah3gYkp4XCza3t",
  "key7": "3eKgj98Ph7ez7crYiGo5eZpb9s4JZAjpWGQBT4rwhzqXbCmzWLuwkpgry9kQbhCbyfScKMt1yUWbdueykMAZpTLf",
  "key8": "2bCPkhmPZyDuhTtPF6Sogpxr3d1umDhaJ67SwH3L9D85B5pHXHjASUkTER88Rsz6eVigzGMyJxdyui8pYwdaNUDL",
  "key9": "2jo1dWqaAkSpQY8iEL9NQaZThC8YQ5PWKoEUoLo8RDbG1BpunHtPWRmLyyAmotNVnDY2EKUBrrYnZ8pCBbwaL4V",
  "key10": "5pQmdLEE58dudGKcmL2NmNFLyz2Fo4dhhKHTrh5SzYwBRppDKG6VedPNyDRGip5sepUVG1KS1qbJi51dwvqDWYpK",
  "key11": "4tSeuTWXPzkfp8C36dN2jQSPPHBsLwuzdTL68fZdTizPjYHHJHNFeTfxJ7WAgY4dEBWD1zx51aqyWVooUQgmLMFM",
  "key12": "NnvZyWgmafGHJTHWbf5rpgqgTh79Vrv51iqx8TXv5QcRqB9tWrmgHTG2MpCeMZCkPSF6RAbeBTiJuwFZhPSWpBq",
  "key13": "2d2uh43m14MW8ixuMcF55WnhZ8gj8afF6YgfvbVssdJXTWhibqjyotXcK4auKv95T6gu7PHvuDw1WCy7L8V3NB2m",
  "key14": "2S3bfUqDCTi7ne9183HAhcW3EhLPPqrqgmgxk99YBVCSV6NXoMPQ7V7YY8JiRzpvRjvJfipaKwHkpzLGXeGqJmHg",
  "key15": "5ThTBg6896ZDu5dtWchkGNvjqkTP1eDYc8nwpw6WqJXM8D14PxQEfsM6PVZXvnJcTHqGxDhZQxjZv4RoocYW82tk",
  "key16": "3pp2fDcZ5dSnD9doPJBmxEg5T8iY4FCJuwnmw742SzDGEyqEEAut141RHh4Qb146MFLtyXtm36H3KEehdmSPPyYT",
  "key17": "55ueAnv7K8bLZRbKDSfFhfbguZsPdSdRLvqtGvvYNeDGkAzUjsdTtRgERKd84uiYLZEZjBY2VvLtPwkRbuuQURCP",
  "key18": "2r2SqgMnxhAADnZvHjsBPgbtq7YpQbzvqJY4GkN3KdAQSydfENcmzBV1QDMqzWS5z2KqQGLvUeqXoTGm4yvz4Mb8",
  "key19": "3HPceJAHtrjVENcJsH5AyGCMdG5qydbmi6WuLJFiTBbkxFCN4BxccKV6e7r8HhTD4ZAQNX4Aei5oEqSpYp2hP7Wu",
  "key20": "3cFQDHe7so9DF4bpYkyaittQYeNQC4wSxUAxiPkYHb9SYoBCxJzLgfpbrEfM64HJgcacm4exFQFMEz2Abtko3MUv",
  "key21": "2pcsSkwyKraAnV3V1A5aYJp7njf6wKc7P14is4KnygNwdRQzAZficzSzT71zpudWkpWz3pSBzfxCmXfpSzSxHAJo",
  "key22": "63MMgUQ38SbRmG1jhp9hqk5Sy9ivmqrcgfXC8Jn8mfpDnhT7vk49QfdbsgNE1hMkZv8cn31rVT4kAmGsVHfZwA18",
  "key23": "2SQptCtD9jmwxZuRJNqnE321V9VqnGBhAUF3hbSQPYpjhJtDVcKYfpbrFxzRtR1KX3mGJPs1R1ExrANuuarkGC1R",
  "key24": "49yHpCSVPraMFzWubccMqA8fpntg3M8wmoPMgpk8yPjC3VNufHoG9m6T9D5CfykSP8sWznRxMUbJs2oXCvnUEEo2"
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
