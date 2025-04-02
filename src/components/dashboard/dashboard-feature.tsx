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
    "2C3Yb7yQNJ2g2Ahjzo2ZA8PhbKq8LAbf4VGGWCbvv5yGeksTMp6zyruvxXKxF9FmZEMkhSJDxRAcaUHUMdECp8Rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DfwFUU2hxhfyQugRwsBNExUrEKL9XoBEtdsWvsV5dTNT6fkLyiXaQCZDUNbEYPfUQrWVYvpCXJ7WTWZZdgXgFZy",
  "key1": "4N7iEx4tyvtfoteq6f1gwaN5xEnTcnfxeqKbfj5hti49LfExJiVT9qysddK9tYwe9KuQZKcpVt6Z4pzqKai4w2WM",
  "key2": "2mt9jxeQwQvPWhNuR3Uy7C9XzcpMiDM2yq3pPwDYUvz9DRcKReLFdvqtiLRF7gPQso4XNW39KssCY7Y7UR6wA6hA",
  "key3": "MBicDoU7UQWweybqq6f46cp2G65HcW1t5oufLovGEgUVKSWsV4HEStWBi5zGyZKdz8zmyzDfArRF247T9qVwVyq",
  "key4": "3uXrdacZLcDKQadsf4jTTCkApaePxitYsayfr2ayiaVdC8NC9shFdDkTHEgsaqM4qLLqi7CXmmKmGvqeNKNvQhsV",
  "key5": "25gkrf3X85BrGQ1UvqwxXEAF4NGQTfq1mWBCorS14dnsby7eYVgNPL6UKjxCQrm5t4FYEjZnoEYpXAWKGuDSPHy8",
  "key6": "3TTkyGb3FBUr6VuMBuaD3ygpQuMaYJw9qJBw37GSVo7VPWqo1211pygutvsUTQEVYNpmWU61Lx28snAjd1o6gPSn",
  "key7": "2pDGKuWXdGtQnDpTGYUtaSZBedbsX73ETfFgF41XnCMqv8P3Zou5Z43vyd2utD5MGst6cWEaKRq3i7Zgdry6QKq5",
  "key8": "K6sfjiMaQTaD9S2qANwLc4LMmDaKvNx6yECF4KPraxpSVBiLUZFMuf5YX5c5yJi6Hbs7TauNeWe9aMzJEFhfMkk",
  "key9": "4uGm3FJQ7P8sqmg4mPDhMR16pMhVHi5eVjiV9bvDvTUcLxvDZ6DL7Z4oShneKNQ6eFhRMZVu15TRE4Ae8vZfDC7v",
  "key10": "igB4BPTZLCu5G7Wi7c64bEoZzGtYyePKDHtw6cYNRkxsjqrLoBvyQDwddwMNxvd75eKScrkb9xyzprsYfS1qSFU",
  "key11": "w6aznxe5dYXwBaHBvrG9bnY7Gkh9zwjmWs4jdto79pcYxcbuaEjP5SV5T7mfhL6W37DEMH9cAN5vAPw7ajSPqcg",
  "key12": "4JdP1nj3z6HWFdTCjKMpksFiSxZ1ivC2ZSrN61rAY6L28unRv36yZv3PsPCZKbYVbk9WtXi8HwhEgoLBKKsgEfDK",
  "key13": "3fLc1afEogBETCwv4DdpVgLqnfoogfsPHgZB7VFTLbyeWxFgxJuecKcyRfa9KPtnBdnURiqyuULetvSQsQxgu5jG",
  "key14": "5TmQvj1fJvhnLYTEXL2AFKKEE8acyEQ6GmkFWpRmbwfcbFggNbCbKy9vxLmHmW433tDT59hs5JZdjkyNhEjMhR8S",
  "key15": "5jTKdTA86i6UvssPVk734SmofQymVSKcdLNudqARuPt7ivo5d7Jn8Zj6vj7bQhuD5PUE2pw544oG8YNNkBS35agw",
  "key16": "2D1Zp5XL1Lm8CRhp446SYNx3Vx7ECGse5P3kmwcM2XVEB6udPcsoE6FvAKpg5atcbG14F3TdyPmg8zF2VTGy84hj",
  "key17": "5Cg3bdnwSwfxxE5JPMPLDqsAsoXh1VLJxYGfqtJZoRzUzdmhWj4QaAVDLx7tR4T5xeahqpuWftNZiRWZD3dF2nyC",
  "key18": "3SPacqwe7qJujCWdP6Wk9EX2FrTwmJeB4xcceADVpZUxKTPix4wJbKERoCr49VBrBuJCMh9LYHXnsq3s33BAQm2b",
  "key19": "QNHDoQq7N37DP3m29J6ePPAryiJh9tmCWJ8s6Rcoif1prRdbKYHzc5MdDN57MBWiS86AyUwFRxRP8ndTRjYZSoM",
  "key20": "3v4DAK8jk7SncKfN6THSwRdUa828peRGogb5tNiLcymoMNViMDx35ktcnBmastmm9j8GThn3bqyGYuEMTyvgAxFd",
  "key21": "34irGgT6onGGx7Ko9LXB51SQurjV5NBZZ7F1KabmePQqp4gEoAMocNbhxqL59UXxCGh6Qrs4Ak5yHvadkBYC1hYD",
  "key22": "w9a1yfPV9dBstK4VKPrjng4H1abAG1Zm79vFUP8Wct4G4jSPTfuuRE3wKJxyGoQAG6Zv4zDRZpjwAjKz7RX9arF",
  "key23": "2QExMTKw7XVtNzqb4FvFQALMCDTioYL8gAEhQJMZhUmLE2sKKUjBVFLZdzCb7MBNMyNoASHYyjUTCf5vhAwMw1HZ",
  "key24": "2h1TAjTC3tPrMSACgWZbE1z6tdMErhDL41Qswaf1b9pHQxnkqurUJx1CqwHoUebQQmFdhdvjEPcXLKXSViWvTfaS",
  "key25": "d9X8gyhGS4fiKvpS2Nvw5MihoZZ2xSJbrVoXZLWowQQJzVy9TjrQEbjPZtBzUadSJrwqxMDwqNxVMduiGNfptfV",
  "key26": "EGpeV82HwuFPz3gm1swBaEvMLRRZ9Tzjoui9tU4b62S6p5iRCNftzNw432NyMW4GvwYtwkDoQDYw36F3zzUpPwY",
  "key27": "3pC3KBHYsHta8pfQmNKYJ9ZpcoV48H8GwKCoMNXJMvkhxpVpXgLANLSd7uEnvVhW51C8Mn2g9B1U9rAdP3LN6UB4",
  "key28": "53tHLNAdE9YUgj7h5SByhpXkcUX5L3EjJyXqX5bLmR1xnxos17nfJV9Hugyp5kEwnDZx3o4JJYvU1gbeqnPr4KcL",
  "key29": "3HVjUmrGeaZp2hWL1QrW2jVzfn4UC7KpC2mRmf34EWKuQV1sQDuCaSeFTvdk9gLURkkv2pxRrHCWUkUNu6CfEHSE",
  "key30": "4CJDBMJUZg67MvLFU6dNMNb61smdUt6yokdNf7HCoPyH3qPcUVP2EcXM3UR7wbE9gvgAjHQXTW8h7h2E46qHDb9c",
  "key31": "4FwoSZuwCdq2mdcXC8YoPgteqtrMThPLnSTkhcn5jg1GLVt5H7f38r1FiLaMF1oPCbS98WkMiCj4cyoKERD1MwMB",
  "key32": "6721joDambTouQFowztEXebh8BVZE4iTAQYHMEMV3UXFQDZaytfKjwbA99qS7giEqAFgBe1fz72uZSoZQ6THBfGu",
  "key33": "46fAqrgverk4gNZZLsuATG9BuuDZse9h3dvMBAvCq6FKfPJvBYq6p9tUGf1EADy5eyY81b8XZYkbQudBqL3A1XoP",
  "key34": "wzQCfGvevZWpKzsccdJ3Vncbxb1KSGfT1Zu6PBsE1ikh5g5gMqJCruYuqYQoodZv4BczpynwvjVnLQNsHk7uTV5",
  "key35": "ts5VJbf3E8sFcdmJPCNAZ1HjVcjfXwgwQ6iNHcLFbvnZ3bdiWArijjNXcCC9Biu4fDSfSH8hAeYk4F4eipGCTPf",
  "key36": "66o88DGrzvMC8FLMCxg6odXaZeEv2PTLWBvwFDrrZpoLgKtZj7yXtkux2b3GQRzB2HWexBTt6rw8HpxgN7onNZg8"
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
