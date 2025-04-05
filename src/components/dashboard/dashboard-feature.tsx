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
    "51GnhzVPSCiTU3sJg2WgVQ3G4hweADUzQi6yNHDJfaRdcs6yM9kExeXEhgQENujXrPTL8xXULicP3XErixftsyYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LnCjHREwZyLSwhYrmyGbFBunhvhK45LqAB7gsUvzeSTsf4iKUWHuWzmrDhAJuzvbuciyi7JKGp6zrTPH6tZVjQP",
  "key1": "3vQTEfUMb37cNg6qjZHysbdSrw1XP2Rv3H3aNV2PWxfbMhCiAK1FDWa7tLi3fwUGRwjwT8pkSE1dcEMv3P9Q1Bz1",
  "key2": "4nH7LJ3kMqwKp7rZ1K2paygxrN3KVaDEBBkJc7X6hFjQD531Jpg2pcNucx9yyFNparV16F3GWY2gmTgp3b4Q81W7",
  "key3": "3b74gZwTWvBvqBTnfhS3cr2gRLmdQsKxPpPnkJugSsjfivGBPQugT3G3xL8AknQ8sQCsq5Use9WVyDqNxHDdzkcK",
  "key4": "5DUZzAvRQnpnDsGwFZK9hzfQMp19Ls8JWFpmzQyosdUAoV2NtwwWanMyUbqoiZ39S7HhLBMN22R7eYERo67P3oPx",
  "key5": "3qAwJFAAJ2nzpVTk4DcSu6MdoEdQGxSRDNmMCWJAssbQoEwTSJk879Q3igqvMFWHGZ8THowQHpWy4UjtsTfVXyQr",
  "key6": "U1M77pATiTscFGaHwxqNP91pGz9RtR4QRwVVSmvyWy4mGfED9axLVJm5ehJkLZD9Sr3HfqBVkRJ8hyFQDpaV9dS",
  "key7": "2a38ynCGevfXQPEv1sX8zT9yQKxha8mXyvoKLPotB38QYSVBg2D9gaiEPunMXG5Ap6e9CtibpCQMXbV2qxYpuncB",
  "key8": "4iCKGGCpZUqLAh6MrEYFB3Bxmxqzuye1vcoKwdtkxXWxoHcyGihxSscvVsjni6BLNrYKvU9cAFJvhjLw3YAZLRi7",
  "key9": "4TobmhDgE7XAbKjURZ9gguoW98bUATiHxuCRLFLE3cDSmJm5JDb9trc2Rkc27Car3pyR5xfLyi7nsMHVHi5D14Eo",
  "key10": "3vRTEHDKD1mqWW9D4iZmwaN9oPDDEsvZiTb6a44XkZBd9fPAZX6bmheHzBqi4qptpR8mAH7wVa3qMYLEJ3cVAbg1",
  "key11": "3MLgKNPJhfJcbzgYei2aUXBCvZ7wdoRJy8VvDmH3za6HTtmpGeYXCNoLK5d5fj3sFhMShpn6UvJF7uXajWdgL3Db",
  "key12": "3qS8LD4jZQLkwp9cRR85mWPM8QMZAaK8cHhVkURvdpAovgmJHkFTpmyazUogiLNAiPwcQFLCXzHwh9o7VzyAVGD",
  "key13": "5poCDkHu7y2iG15G96LpGRxy9UBWQGrLMePgmjzbzWA76z7xni3KLPkS13LU4mMxcdSpTRGGv2ieUhXmuNNMcSFp",
  "key14": "2BwamyAfuCgWcUuLAzmUifRSoQJMAQteRowByncTRDAstXfqtqJSB5JN8MU8r91fTRCyLhk1c1eFTkzxVsB8RVEk",
  "key15": "48qJc4yYt9j5P3TdWxu7wZXiaBh3xyxSwUx1MoEb9ZTrdekJMKGLM4UgRxjK8svbuojmijzrRdQi1HMBNK5MsNDH",
  "key16": "4HXKfUJa39rXpMDewbDnxfcwvtTz8hHsvME2b6uM18ZvNriGaBUepAGomVrj8BheWLU2mfUipWsxJdajPSUHC8rz",
  "key17": "4HivqWPJM22W3kPGYwxfdy779aKM3pqGV64gYQSBK7CPk9ref5SEnHcYEiyNBXv2GUrnF35PGwDW9uZTmcA5DcNr",
  "key18": "RynV2eJW7o7Q6XZaAR9zBhBk26kxrP9s6pzQ35aEFte7HsfFEjyL6hk9Ep6ToKzQfqpgpNqPDHCZWF4eL3ARtPE",
  "key19": "5b2sKfYHH4sByS2LN7cfx5YjkVc11P8BNkdnJnsUkZ8AFg9v5E5p8DBJqdSbDN3xTiSRfT6cZtwmFkRpq9waNMh6",
  "key20": "42JuAFJ9FzcnhmbnWJPwW3BYsoMnLMpjjjGLiqtUFHw3hgkHgJzAP5XM2GCUoMCWAkU1VWCZiNMnQ3dw3iaXD69y",
  "key21": "36FoqYBaeQ8vS2eXJZrMzJswsYicVS37uMxNSf51A7GKgBuo2eCFkeWbDqxdXAHQW4U59pPYEFCm9vBcTLDk78Ju",
  "key22": "48uTyDyNadyz4zVjgqTA3B7aWj9D2tntJ47io4nGdsivjuJzYWYcHAFguz1EJiQnheM8MZZt54NY9vETwjkhh1Td",
  "key23": "4VPtgq77ErR58dhFrivZCFDhkaTcVt7Fz6cDebsJ6yRNj8bZCGc6wQZbGwjm3UGajaq49Dvjfjs6N7Hy2EYAtyTW",
  "key24": "23hJn5JE6XdaJuqDmoVGM5gGTL9RCT92gnJMHYnTLtM1YVwp6hLeHkJCVRGt2NbgpHLsLZmufCpDo86ZuTtjDyLr",
  "key25": "3qwdHtbJmjcH48As983uMgGkmhgXDu8fGGCNrnZuT7aG4EAjyCBBGezMxh7ZHG3ooCwLME8p4W5DaDZmzzbc4Sqc",
  "key26": "8G88nMNjyaisEU16ivwA4N67CZazo4iUu4dysR1tqF1QPuQd4a9GwNx9CuHNeX1YDqEjVtTQJmAqexdtRpefz8m",
  "key27": "4Np1Sjgn2B4CVXtrCQHHVzxeJC6cxeAr8qd537pcqPqvV8fwQsjiaVka4qqThrWHxWsmwvEdHqKSYUY2L3q29dG9",
  "key28": "5nRSjNqSsNZXS9CyxgS5SeuViBGz3Zqs2joFfgGWtuvPJJ1bwPMBQPnChPu7GqZKjBcCTSUem5vg3mRQusEJqr6F",
  "key29": "2z7cK4cKGtsN8i1AApBKWcsGHm5GCFdx1AzqY9J9sLy2ZMDhgp1g29zbNtPvnjkdVxU1XnZbVZmFTGHjd6235kjH",
  "key30": "43dyrRT6i4Zop4V7xdcyB1eVBAqBpbcrsMkNCG3e8JFNxUeTeYYxiCsS6dgPMNqmbPBraF4kqPEQ4fhSvPwjATe6",
  "key31": "LfNCy2qT8hZEpiB7ePZJUPgvSrKGmVUA9sDsfC7dRP3DVExNkEsJ4nH2pvuEZ9Kjq7TMpHvy1fYUWEkLDaz6LpQ",
  "key32": "27FznAJB5wjJorLLS1C6U4P2uWLqpw9CCY5G26KiQQNgTShBAQ6EefPT1he6WKrobEUSHDXCaYTDqnz2bdx8ED6T",
  "key33": "617r4sKxUFTdbXfFTA1HVKNKa86wLiLxekg8dApvo24Z7Bozk29V7dtQjoSVxs7PNgp2FFDLUJxPdt6xK1Yb929q",
  "key34": "3sby86yKYie7stNDUPPCLCtDPx13yxdbYL3aLEEcud9trGdi8GKr5XnguN6EqCUx9HEzBoWRARRnvVUPbpgfqJM",
  "key35": "2LSeMgUmBZbBUwqcRtStVt2SZRMP5tyPp5LvPvHJr7SbxukUGe9kXCEhHGe7k36QWDseaP7BKGjf9nPG2zbMWwzH",
  "key36": "47bwQ8zKFZvx47beTxdV7mgMwr9ACSwQLFUFYmmbgLye4eDoNzwovheGW2EevZzWVuB5m2nGtN6Z9LtiHEq3f474",
  "key37": "2FPyV7nvgAuRuoErFhreiA8YTcvasjvSWTkCepwLapziTdXXRqSQVCCoWsmewPvVHUci7W2PQtuxMSVxfJBM7rct",
  "key38": "T9QzVizkft8AV7pirHMptZzvr57Hwt2ARQRjKH9r8BvAdyXARLkb7yVyJ5LzhvNYfNUduCn1F9SsHjov4gCdhA5",
  "key39": "3aQL69QF61p9o14hBq67qfZDVbo35NhVuEdnAN9rb83j7MspKXhZU3XwKEVJQhXYXhKo7xEwtubKZEqiaHkLyVsw",
  "key40": "2xxZXrGzFpp7sVYTymGbcjCSTT8UhPxjqcoK3CAP8KrekYw3LAdn1Vdd8ewC3gE4MgNEwFGAyr8WiB9LQnNFH7EH",
  "key41": "4ZQHveYvZEP1GbVPoHMq7CVLnHER53NkdbvoZFBM7or7EHNL5yFqDBcDC6G75C2TuDUhLQjvzdweJiztLyJ1xvMS"
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
