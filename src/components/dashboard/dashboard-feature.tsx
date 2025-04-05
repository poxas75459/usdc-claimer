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
    "4AL7UGDuhMQBoxwZHTgYDdR2mG79ucqnDzX5kNdjLfMyKN9E2PzXemZU85noTEzJuxs8aaf7jFZWM9qokB3GePFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lc45e9iJNmfSrcuzwWHhsHDyGN7Rt3s8jvudA9sFTdXx4YUjYCKyeJDaoPzHXRwbsrbha1kLfhxFvQPUPrg1NC8",
  "key1": "2KTBqF6LYb2NEz79pu87M7Cb9jVnkBhYJtJYecUXXsWWUojkNfTRoeKgQcjh4EfE2qKxhfhozVFnGnN81qiDgAQm",
  "key2": "eL4TeJGugfK2oGaDpX3mbRe6kzsMJBvfEknGxc1ShKQBDFYF3Y7asbxGHWLUerAAaoC9mVzWZeWwjB3hVcrUeVa",
  "key3": "5GGeRMKfD4yefPsUB4KtPyf9yarzy3HRZEsNFX4xC3MG6mbvdDWi3UTFYhsU9W3ecoPajqVXyQw2WUuPLaQhAEJN",
  "key4": "45gh5kCmxZ9MTjky2QEwx9WQp3zfpUAxU7tUv4FF1ZFPwsKSYDhRR5MZMr3wWFRzEhUatJ8HPay7kbK8Ari3tEj3",
  "key5": "2Gf17YFyRMjRpwx4Euqc2M7HbMPoHuBfgXevy2ueSHMs2Juy1MAoUQ8KzAs3h59fqVYqq1N7RVhZYXbhtEPV7GeN",
  "key6": "2G3djfh6NgvYV1ntAYFmqoc8oM9xX3Zoaoi7aQzu47uR8AuGL5L2MSoDeWSpuG3vqzEnZ2N15Jb3cP5zeJJtA5ya",
  "key7": "3d5okGrq9GfXEvMC12UF4TU9WUUsBJGHhFmunpy3uJoSPYsxjGaddBKD3xCEkBFDJRWCDEnpBHp3LgAatXw56MmX",
  "key8": "2LaH2vcWhhyyPFwMeMERKCVpLYfyggvJZ6iRgNGFCGr5YRG3HnByauLjSKAp4b4vNovfsyL3WW6DJ64E4RkhKtJi",
  "key9": "3juCpL4AnKpbdjM7s2Q5np1H78fVdTtcxsf4sfeytCr6ptW5egY3et1DD2JLEqQrwpTjyXGSNAiDncFgkB8oZ4H7",
  "key10": "5x4MWwTgzELAgT9AWjAPJ4qL9BVLrP3k7K8Yt5sgqGuLuhfd7hhD8CQVjEYvej3og9MQRZS1tWjo1nFGwiTHiCnU",
  "key11": "59F8aowj4Aevy3QrKTEfTXH4RRptqjGNMQqDXytXZQ7LRiHMVcNyM1GcLzZMfDrtKbNdTTnQmLg5PZitCjCLAaFT",
  "key12": "2dTzmAJP2rfBqUxJuDEzx1bKhyYoT7Hj85Qf4AbYw1ja8EAuGnJ3YdDqxMfujcqkmLB95RnnsTST2n3Sa1ygxfk1",
  "key13": "4CV5Vn1TDqLrC3qwx417UpJUPyxSjXBraW9kB5Pn6QNEvMkxzB172eJyJhANDivevBkxoLbvYWTQy6QcyJTxLfk",
  "key14": "5k4GhxVetbERoRnfu1n3R8YMJGv1WMQsGKkpurkMgURuwRPbNp23L5vPC93VDqLhdZr6gWfRUiwrutVhJ7ihMDob",
  "key15": "3Yxs6fEdYFftBoQvRJgpFmQ3kyRQUFymJnkSKiiHUFfz9ZN9BN4C6CExtvU3SFfnUpoiqgSmkdPAdwMNpteXZ4fn",
  "key16": "49LpjpNpGsZigqthM9N7vzi47ASfz1C1m8VPC1GDzK3ADQswZ78E3qYUqVs6mcw54mZdsxmeLLnxDTQzvV5DJ15J",
  "key17": "3JRUJa4bQDwC8fwANfkokbtEq9i7zJdbPZeRdh7B1bLtLfpaan7QNn1CyUGTpnveMZZxpSfKcYetnHTCWh4HGXd5",
  "key18": "3eGCBZrvVtRcdaY8LNo9srZCapzYrFmzQwtvLV1EGge2f4JUCZtsZf7SkjvovzNMppSTbrqYXdKh7qdtjTpGiMuJ",
  "key19": "2BHCSNB3o6XVVHspoJ6pdKuahQQajhjLYhyLZSuKrBa3yoJqMic3TPtVs3EmMcVjCWje2dSsJqSfZNCTfKSCi1pf",
  "key20": "5aGpR9pZcZf4SHvRa1NmLDUyxECMvkPdMjfbDQsDYLGohJLvwcRhRHQTBzBhdXvvkzDZqyPyWGkEKfxexzphhyo9",
  "key21": "3qiKBytutHQUcVDQGWjWWBeW2W5VGUou8M6ykvgtkaKBrZ7MicvKjqSXxb8Va6sstnJfSACJ83L8TQh18cD4xwMi",
  "key22": "63RzTpCUB959MPEuK1FSKvbcvDexgnn1nBWQtDZ1i7NbkjgCZpk22eHgWFZnbAm22tfEanS9b1YJfqJ9vfA2G6Cr",
  "key23": "PpVizvSYc1DUjm7qXtjcALE3Q4fBxqhK2iJUJrqcN7jHj29KHbkjCyP4MxEcpXp5UKtSVRxXaRTspNDZPvxn5Hr",
  "key24": "4xkn6aaW26kWoRX842Pj36ggCutCiPqXNtW62o5fa5GKHeTTpRHDPUWxWwKnZFs3j8QPke2DiQmZ3BQ55D2s4K9G",
  "key25": "KrAdoGzJc8BXx7aAnpQz9Svr8BS4y2E6qoSv71cJyWEvHgiUgaE6qKJYx3JWde2oADv17iuUvWWnEweCbcfoFwu",
  "key26": "yhQRwTJWzW1GCkfeZsEkAjJkkCpDuVshH82mQFA9b7anqcW3NMJMx6B5mufZjAtACVv3rJGi7RtK5aNuxvSTxhX",
  "key27": "5qXXgrb1pTz18h35RaHPgv5abWWEWeVrqUrdo4x2WEfrMzy7NWm8E14bnccMC5RCU5aaJmZ4FuM5mHKt71NXLKcF",
  "key28": "3U2aHZAv6MJzHCaDoFmJPjkMwmdApLMjqG9NeeMKrQMBpD2wdRaKk7MYp15YbjQK3qZkNTgsmmPEwYQPeY8oTF6Q",
  "key29": "r6mnyyDXpBoAtQ3mkYvnhcRQogWqowZ6YWCdqHds9BDAFqjNqJAompcfaVrUipFrRCU4AhbgDpQaLM8kv32zawg",
  "key30": "gb1zHTKvESp35yt7GxRm3FF4CHZ8KD4hWaakYSv3KARCZUU2QNmBuqbcdYZanHmBwwL9kK42MXc7soaALh4iq97",
  "key31": "64M7R4PxpGeQBsv8NGM6h9dcAVpBKPztDhcydVqKp1W98kELb388qQ4LvDcZh7Q5BR2VWADdgBA8JBvD4wrxMu89"
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
