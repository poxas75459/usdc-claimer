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
    "2Tv1E3GGdj5XdRqhK5zf2sMsPm2qCt1nRFCtDfAYxWooDcbHH8RgiUvKyanKvZp4zoW45M6ktKFyNhi7znMkzFWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVES7i1CD6tUf9Tv1VNb7h4RcoHFNS5aio5SauuXZ3xnTQPLLRjC812MUn6G98PzTcMkFHBcxvTsLjBW38kriqq",
  "key1": "3NPGvzgtxfg3G1YScLqvRRuHrWtbpNHmb2xLpMysBHkQLBkPd2FTzjHkSWurq1dGtfV7Sq3T2T6q7KhcVKHrxpG6",
  "key2": "4PeHZWq3A2K765QWpyhqoDanj9TC7dhQPK6TtSq52sNiw5KGeVLTQE5xiQLLJLGzkW6FWkx6Q7SMFQAbMiw8x8zB",
  "key3": "5qS84975L9YnhUG3RYyPqyCgAX5GLfrBtuN9YoEU44g2i81cerUcLxMjhXoNNRFThCZjaARzTFryXWAAqiPYW4GE",
  "key4": "TPsQ219yGwzJQXH3SoH34M3UTSHo2j2Zn4rdTgSeFMKvEMZshmNc2HX8DAYRvpwAsCTDcvSNyzgpSVMfLz4dhTN",
  "key5": "3hfB5pbwC4Bf6tGFcS4S4FS9VSEWmj1E48Jt4Zn52R1EkLke5BHWjRP8Qfv3cLh6Zyt3Zn4kvRLMXkimFAYzUcNm",
  "key6": "2v6QVNd95qqhXcqqkNwLsNKvxM2gHqCLfJE6JvU5bzsi2bGfm5zEv25GTLTp8Drwg25psmHhaZTmEeWnpQEqMH66",
  "key7": "3mB7A2fCxqesa4dSbrXWZqTKVmvM24oQCSpn8ju5Nxf56xwr9YZ3mnsKsyjoJjEriq6Ekp5mUW2yPx89C6nkgMXf",
  "key8": "5Zdux2ALeZ2GNFzUfeXeDz2fC6KEYJb12hHKEQGB4qCaxxDmNMna3FspB22k1zAdjv9oZpb9K4osfd4aHaYQiw8W",
  "key9": "4bFGQu28Ke2dD9eRTernSnuBniNrGmcVHDsN8gtcRXm7ksijv2TcYdehseoaeBTHHrq4KiNw4QDvpP5YKm9TMNma",
  "key10": "qKGWSxpUh9LCcM42fqBEsYRDV1nko6edvwG5Xw67Mc7Wz2GyqoEgZRNsDk8u1VWvyesbFVRxssrWb4yqWHREN9Y",
  "key11": "4aq3f6XdXrLRpSKst7JE1RzcMB6cBbnpZYgXeWSrVd3ZL9NUu29iqvSAwtZTmP492rK6beSMSKnFUCgzNEuHyeAb",
  "key12": "3C8u83ZUcvNFUcQA6LfFkLX5McyUB5eBnxDzFAxxCFoPF5WbPFsMcfG7KsbyAib3NDZ5Zv7MHowN55brpi32XHTk",
  "key13": "3eeLh1n7juvBiZppyuoWvNUNcWP93nWFJNPY6fZoAW7w5cXVauC9RoxJGUoJB8ywC6h5nnBrqUxYCRAXMyHParWb",
  "key14": "4kdwXkxJPQLMHg6qvUREB7XEQ4CeAwoAjAvxFWuDFKRkU87kMcMYriiYVK4ujbPREKvMAiBTZtuMh2fCnBVCRcQW",
  "key15": "33vAPPFNZNuYevXWHTN86NWSeTrDQnvMdCgwxASbJoc6NqWqsmSR8ZvgnfwP4wD5gLkWmGYQAcYUMXrUNwQwLiUS",
  "key16": "BJHKJchHuqSWAmtkDpUb7YNH44JFKc3FVybdz8DYHnuU4S4VYpPKR7rYd3JTRpi2TJUoF7DjutAVPeztJUiFMAU",
  "key17": "2VwhFZzcLL4CZSvFPcwLSKpHuQKJEah3TgqwmxdGbjJyocVf7YTSazmuUgUfBGc885jsLM5XxYCA41nn4TX17n6J",
  "key18": "5mg9N5RFfh3xwv5eedjKdNrnonj9ZFh2BcoYCQPwoRYPELHXqkxJ5hFJmyX8SpUWs6bnzWHEscjKp4a3huLduuuo",
  "key19": "dZZmRCxFJvYpMaqpUbc8We8WRyLPPNv1BUz7tsQHhxE6Wx1uTM3thQgexhzTN6gviN3V5hiZ9rRTJ9BdhWYmcYt",
  "key20": "CQ96viUwpjoXiN3h7p8PwryrwESUUzKSiLfb3TtmTiJHFqL5rx5d34pwnjpv5X1poHJDwc5ahW7TpFvqKgN9u4A",
  "key21": "4fGuoywkxEdPtbe6JKEHuk3eQHSvXAZot3MDcqfcf7zGS1cAFSAFoQaDWo9vpfxwSXdgMQJXfA84po2NHLBCLSsw",
  "key22": "5j4h2HdjxzAt9Rv42A8J8tT6C3yMHFdL8qTvfPpLAwB7NjZgDrZCc886NaqQ8dT3PtrfKGyfcg8kf2MBuUYwnZQc",
  "key23": "3E61a4wJYNU46XAVTjUf7ejRDuZ2tUa8vRk1y2J6gwXyHakKu4p8atwjtBKWedRRwQuMigMWRHsZyDhPRgmaiyYa",
  "key24": "Sepryrsd5K1c4dBeKVtWG8CQ7CkocPJqGhLi4FAcRk6s6LhTgb6Abyzcp85kANP11P9twphaUZMKZ3KCZoGyuMW",
  "key25": "35fW93v3XEJPVJDF1op6FUq2es6GQbuWsBP3eQXLp9MnL9vGoiwZSScyCLpw7aBsYpGfxdkqXRuC7timMuruLaSH",
  "key26": "3XWEmjdiMHZLkGu9ckKYTSXrVzMQkyn8f4sbYCp89tmmVxt8M1W7otFmjA9u4UEctdLnUiP3R7ohUV53acFrzDHw",
  "key27": "5BKdJE6vmDsUtSpbwHSoZYYqft2Vm5n8NYrSt5977W9RTVcbgEjzjCm4egKLGk3bhM3u4zyqv3fxCf14XsHULZsq",
  "key28": "2xh19FBnwTmN9q6LZ7h416w1C672n4RSvdnwbZNK6u6VUACua1h3ucTY72Udxxfcw9t7jsKue6TGYRdXV3jxHFkE",
  "key29": "4TSCbQC4uqLFQh5KV6mwRZoaaTN7ZBAhXv4hW2s3C5MB6ip4XpRscwe7krhs9R6yKw18egZiXPi3YVg235eqUc3N",
  "key30": "y6CCfGFeZuWZjM3voiXtGrZqXxiCtPjpjXhJFWP5fL6sr9eQEmMzPhu73Jk1txYp47MUbwTRvfHd2ikPJsY62Ng",
  "key31": "2oaNUENn99rNy2prJYNtUuttWNCiue9o8gLruDpTMsW9YrKC8WHF7y4xUVspEibNZBZ5hgYbM2sTG3SsDZUWC2Pw",
  "key32": "3ytY2m2fkCZEsv1vQCqgKBMaJuPrH468eMPLSaU8qiVN7ccrTDYPciYo3WokK3amxEpurCDjFtGci4aiAxz67QX6"
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
