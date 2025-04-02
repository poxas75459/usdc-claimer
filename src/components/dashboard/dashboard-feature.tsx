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
    "HLxT8mvV928caX3nTFozhFzQFhmDMQ3GoDQKCak6JKtKWovhjEsHLw2bjGNWoPgGkdaxsE5xkWbLYsYjBXGyEhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6nZ2izTFdmKkvh2giJYEJMzE4FKGQ5UtpEAgYqhCXXTLsY6mLqbGz6wp8TKnQWVWHwUBuWnugZttjXPwzWuLHa",
  "key1": "3i9eXfxv9wmLknWxtkzMKezqt1JvnNna7hj33AfLEnR1XrLTUg5zcTWQCSAVhkzYxupiXvUf1nPgSWpDtDLrxj5h",
  "key2": "4z5U235gtUMX4switLHWyEdHSWbgWfDLA46kpB6PZLfAdiBcQuF1mDLh5xDWWeLMK7Ns6fGMbGMVc1o62CSeKYNw",
  "key3": "4eSDScSeLdmYdkWmCZt59YY3AK3N6X2ekj88p1fjuSkBhKAj27p6JKPvrADYmUprSa7G7F1MQAHDciRtmCxYTCv4",
  "key4": "4qha6ygf3ZiY4iNpFizTcqdjTBpNrDJri8ZtEJn575AEbsCR1YJAhfdQ7ksWothjwX4TubNLq1UWFbWEVBnL9Znt",
  "key5": "4ty9yMnZXfnW3XAdehr6FGJkqgMsT98mpPGKsS8Ti2wBuDXkwbrF9srwGyRYLejgpAuHT6bhFa3gWvqpuZPARnhR",
  "key6": "4XnFgcDZVvMCLaR6J5m6WabJXUZzvK23gf85P85XDJ1FK6ruQfMmjPELoGbzPCSHSZ4gK9FggiBGLSiy8TjbH7RH",
  "key7": "5mo38gHuRB1AAWNWPr8XNmrYTM8gstCLaP4aHmVrkE7BLBEJrB3U85J9F8qL4Gv3UntgLvZusWy6wiJCkQYup7Kw",
  "key8": "sm2YiZtmoyNrtYFLSQfK3pxoXjukXFyVWFFw8RYTm5P4pGryhcF9ZVvVfQk4mtqRRq8E2erSw7JyKh8Skt1RfgF",
  "key9": "4hcvZChYMGgJvAcr7pDVGLkCYrWN3YM2YmRpmQLbp3p4thZAn1Xr4zxjstWAhkJBRXLj9UnczzF37YtG85aDLJQB",
  "key10": "UWQvrBqEtd9Gmkji53697Cb9PgBJum8uVp2aeJEhr3An2jZwgyuVTqE2idEjtzZrvHdi8ecSxwPdv38ZAmMUqfZ",
  "key11": "2uBDNdFvSHi7hsNLZhPHbR3XoMMzxHoq4Z3dqee7bWces34FNAgPsCbnppLg4aTBYEBFN4AEv9fThodUsvrNytne",
  "key12": "3nqEqtei6ZG8V5RLiEEm7hMGfw3KE1v5bZhN8DiEeRx6LPBnvYqeuQKhxVU3R1mnPipJk5rAmJkmmopLQ8xTUrTB",
  "key13": "DXkaWuuWSGr925fwatHTfN1M8zukCXtXjnfoYetu3MVeteJKWskaS2TLsgRynRocdNkeWjnpbKh5EvxfJoVWBAs",
  "key14": "3zFa77N7EtSRLauYe5UusjweroH2u7CpW9rvjZyrZwqeLaRQbbwBSJjacX7UiwCNfV8nXK33afBnffLGHVEiv5s1",
  "key15": "4wm3i36nWb7YeV8BdZZCgeYtU4pMguft7feBwuP4RBS2ez7LtfmwuAMxRT9SGoFAzaFtAaUszrYF2gnQSKFq5G2B",
  "key16": "5AUTRyF9TgrbkdpTVzHpVPbwR9pvqSrA8KLpv5Pk46yHjVZkfK1VGyi517eFmkGMLPVmPgsHvQdQiaqR8iZYhJhp",
  "key17": "42Zp7eWp9cr4VF3C4VaszeVmkwXiWyLYrztC1QHDNypnSK5srfsyDFKrebddiG96hFvTDttv1zv3RkHPMEo4MhiA",
  "key18": "4Leu9E8DdTCZJbvbQHr5yAf86qmV5jgKhWxe5hgCFdnjj4YSRaTH2LbsvsRz5UyXue2UKUydGTJVK26HP1HzgFjf",
  "key19": "4NGYFiHQ7JRmA98xNc6zBd9dB6Ttro6gKaztDrNGdFjifStyvzsH2xe7xhj7ZBCUbZtV8WNbbHYLPHuS2RKDJGq1",
  "key20": "3MEPu2ncbMiviYSnY4XiB3Ajbft1ToH1ktvwi8C5yQVxEaRuzAGfVrxonRkbobEBeCBRyshcK3i3SFc3c3gvmR9F",
  "key21": "2SP4HLEXwE4bLP6kSjSBBmC4AnhvgVW1edTyZuHx5YZKqitdtQVCBSUWZEoFcfi4Mk4NpbGeGrSjUnYbHeGcjwDw",
  "key22": "WBMCNMgjBHAzyEhJRcwKhA2ZbMaVNLKTeFovZYtk5Lzkrxcmh7yzuVgTFovH9oNC2qcRKfvyVf6PFNv4JP6ruHR",
  "key23": "R61ZaLVKLQXnUsped7vJgixpY2TpHkZuq8ra4GoUaVs32LoeLfR88JZkYuQoaWENVij5bXEjaWoYXFjvegmh5BY",
  "key24": "2qJ6CuPQUyXvfomEfUGoeTDfFBUg9mxkXxHsA9bNNveiDGr6vZKuA9P5LV7XNhQtrPJFirXw7uH2hBBf2pgpSN2R",
  "key25": "3TZWha1eb1pRtbwSVNNEbFVZzFuMQntbtk5i3rnymZRtM3eEpqdYSmP2HCAFDwqdZwbqDUQh7hHzsskAg7oXeZz6",
  "key26": "2927CmJzmZQgc25nNWjoGDSje7vCYsmF1fkJzLtA2Bc7Sz7F3u2rtevaT6ZqjHA9fp9bmQVb6LpNsT9X8y98y2xi",
  "key27": "3jhkvDkKnnYvSNRFsA2RQWndVXgZ7UabPZQ4GeHaNhnoyByp6C4T2iUfjbqzp4rsZpZ7AQAef5LFENNi9zjrtGDM",
  "key28": "rDshZMpyrpkMPsC59qSHs3kDzZtMETLMrQ4XEdhmUmWyc6PhKagSABpsPUePEH5cgL6DQYf2YM95RoJWz2ijWsg",
  "key29": "31ghyoqtUZpjka6CMWGioL1H4dZqi1UwcnnudCycTikgQ5VyNY8deGVY9koTfN4x9PUNckVJTgQJKweqYuPJW4Gp",
  "key30": "Jjz3DAq6bVvzEDUE63GZquXwhav9UwsDTCdPtVy1mvGdkMrcmztnAwCK3xDPejMMgmjAMzmTZZi7U1ShhSrZfFt"
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
