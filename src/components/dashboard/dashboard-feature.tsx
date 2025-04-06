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
    "3kU8E5hchSq9KvjraGbzjVcmmmsh7WuofrTW8tiNLetQNpMnNijBZLRtjNrqsCRq8MKNxFvSWTDrPexF5Ywdwuq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8pTwZjJTaCUhvCbV9CzDkDWRtQAGRKKNA7mmtX7PJGErfzswVFj4tjT2GnAgyXkPSoLTaY8Grv1tL5k1aZBKh2",
  "key1": "3XZ6afQC9eQqXwKcfJK7i8wCnbc8PAyaAD2PP7zJzKpvGUBx3wNy9xEHYmZBtVYXo7BXJLuNhr6PHHpCQfyn31pS",
  "key2": "3v7BVR3557khiTV29KmsAmeXXDn2ScGzSEx2mrvZEsAwTxbTN1BwGoEukz58ddx6Tuvc3Yv4ERzzbqrBRZJcfS6p",
  "key3": "1vSAhz7KhfPUiLKYwRMjXiQHbeuyV3wfVuAi1h3eYma8GpLzafFdZVCGgpJyU1RZbkyB3ExeZ8DUjTK8DkKozaP",
  "key4": "3XUaMmVnSsYWZFV93yccKxSjg1WCi2A2UjfirfAoq2KA5xrmL1o3kQVWGdqdnnnMDYpo9QHCpCnyZ9MoGTv1yqXi",
  "key5": "5bxBQqwpFxUrtKfbmwsUubfa81jeot9WENRDAa9eeqVr7hfk6TMdzDmFB9ndBapeppP4tSGUZ7AyfHMHUB35ujaP",
  "key6": "4WvBysyFx3bXku5m5eBrPUhA4eAqgPEQR9hJfg1Dd94dQAVge3PBEohsWqux2Ma4LqaUwXuuwxsNipshYZKmC6KJ",
  "key7": "3eZ665oA3DL2ko8zBD1fCsbUoGuEbG5WxBNxGvS2HzFdPm8zrqZjMD59tfkr5W79fRhYMon6ScmBsa9UcDevmzTv",
  "key8": "3JaZG3vfnhbvfjokRs2HJ1PB4UTfrouYnJdxYgGM7VCirBGbtU4xw8cGHj41mSYCmhcKGgRaVE2jovgRbrSbJn28",
  "key9": "2daVRoNRNoEHFoiB24rgr4H7abZ31n1F75bdcVUvXkJDyBGekn8xoFzSfRWsVqYMy3JAqFZ1J46gk7XTUriUMHy4",
  "key10": "5PyF4KCNAh9vCJpC25puKcESfGtJon8N5abspeJN4dGAHeng6Y6tzqu2ZvbDmGpipMsTuvX16RmiaYD2ozN6AGKq",
  "key11": "2vARbBKe6NXt6jywwxdCN95687NYdjoMPNMkLuNnb8dE2V8U1qxsAaDJkP9u5PHZRZiQSooFtRenCnkMtGRWknVD",
  "key12": "5CoXpcDnHDFTQ9zRDD7GssV1dJLjc8rFNPmz98mUUrs8GDHUHonFXhwHMzQ7k2qEvBzoWHLYqmWoo4zzunrfwZCM",
  "key13": "sYramvJGMRt25fRcDGPKxAVGXtybBsvRWk3t7eJgHx9NBeHDAzpFVAn5viGCgW3H5u4r92QTVyFGcphcMaMWFQU",
  "key14": "34kpceX5EsWZ3RJwzTuTUvVh1kXxuPqzXd97UUT7avoJKQq3gYbLg5rv6MW42YxQUZBVQuWSpqrTK15nKAVx1hYM",
  "key15": "4DXY2iD6oM9Cnie8YcZXj8n6xRw2mLsbjhhWy2zneS6kYkD1x8Bbc2QfXbHRdnR6HE59cXb73aH5CTzAJnHNCGWw",
  "key16": "4VSyEMy8Vg7N6CRyo4xJSCYnmju1fX9PtPqCnXKx1azKvt9CFdhLw6UWsNj6Wy2qPGPmZ8o8yLZVCz2KNJyFa1PP",
  "key17": "49Zxo2gM9T3re79V7SxW1ZMTkTtwSMeiSybUbQAK4jvb5h4K4zyJUGGn3PL2QiL6KuqrR7RHL2AGw6v3zSHJnQNh",
  "key18": "4eo2AHMZx6sFen7WMia5TLH2CxPtVB5QELg8P4trckp4sU1tiEHicZgiMWw727XmdeTbsN87ESjgPZAUpUfYM4ic",
  "key19": "4ELQvi2TFvwCjQ5AxTqqCM7bG7Aq93zHUfvjKySNW8dhLFnd5pKdpgnrcBwSi874mBWztVovmHqqPcmyDw836KF8",
  "key20": "2Qsx8ir7X1kuzs1XqyxzqyD8KNXBZZhmQEGznvEzUPzRav8Xuwe2npLc2dnaaZf7KAPDFAH1ACBXpZLe1o5ScKWf",
  "key21": "2RJ5aSLjjDBirA4sPr9jAqxpKBVP4LPyUE4mttkLKZ3978nsitkXrg5T55SRmCzuzP34VkNz1bSfKvAVjGztVPVU",
  "key22": "2kwbc98QSBL6uMi6inVn3bjyqf66ZoVmDVMaBRL1J3TX67Y6XzNZWXdi5JV2HrjeFWhECLLuXkDap6JsNvBjaP1s",
  "key23": "4mwLnghKWsbY3BMpimY8MuYjCZL8Ds4oH6qaJnF9GLGUsWmTJqXRwvfdAZQyRh2pvBdJYmf4QEAJEwG34vXQCKUJ",
  "key24": "2hfLTyDh4PuqfMM4GDopE3nQ5uBK54pwDXAwyomLgmZUYYtnjkMmt1v6HoCEEAsjaJC4v5GmpaEo1zUL1yt5b8gC",
  "key25": "4JvCqUtymcJKjr4iU5xsSUEgPqsMuZy78kNfWcBUnqtzvuGosspb6iN4akgjuAq4EFjkLoxv89X5YZFjEqPnej4w",
  "key26": "3sh1BSHL2tWbSt7zrAoMLFFjqqCKQcMvz6hFmei29ui6gYn5q5Hs5GZvTcxZtNTZDQmh77dbwS3aXShNcT3Pr1dS",
  "key27": "4nozprcVAek63mxdEDWDiNewvejrgpTLKkawdxYUcZqgF612rcMzEHbQ1op6CxEfeUFZLNnLnG3DosBhKGfe2Wyx",
  "key28": "VsWNyMs3TVEdiuFki2fYMpxTR29HzB6BdFLQ3qmPUq9adEQTQKh7e15VCedUNfSayAiSy8acjbuJByD8toM1sXi",
  "key29": "5mB4G7BW8rFs7ofQSEJX2ZxvMnRi99qST3aXnxrdKMTd8vsX3QTDCVhgToi6pMs3rN2FgukSHKLGx7ViMXYny85h",
  "key30": "3J1e5qcXiLDuqbrQZpJGBeztwfReayWdweca35c3oJY6BwJVQdrPnbnsVLXDfupgRYzDMKtnAbGCZFAAguZk2HKx",
  "key31": "5eiceQEJPpSqdDBmEhMRizX8onoKLGRK3kmx51ZeYfZB4ghh2i763jjk3RQ7u1RF1PSZEtRevijEJzwW1pG3AaYm",
  "key32": "2whXzog7vCTuZMsqASDbXF5jfFDUo8uheASuonwmEtnL5b7uV7v2dVKzNU29yG2uhv3ywCJzkrBHKarbK7tEdVtV",
  "key33": "5dUM8uiJbz2dqpoKSALNFJQrtbEsyQJCCzZKCjAkq162NEzU4WkW6NhTURU2uyE4fzW4EsTT5dLpddBnEbaqpHFe"
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
