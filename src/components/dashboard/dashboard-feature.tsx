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
    "4SR2xDJXSyBSLvygMLnq7J4JW28ESGNrC2Eroh3RuckzbNnAsNR3yXYDQr6LFhyFpuEmmBbPrf4YViYqg3K4bm4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxGRR7ozu66HDEpZyYatYHqf1QQ8dKAoM8aLvgzGZ9Ayetrf2hFvXjTankWALDV95ho9pRuFNcSu1EvqixEtigL",
  "key1": "Ud4ukFD9misSc1oqj7QUjK4bdL5R3xKpgvZy41FCd2HbmGwYJ2XTRCQsbKC2FqjcYhDhNTLQBjiJZoCoGyqiC2h",
  "key2": "2jNsU7kGtXeZWXZ4TBP15xctrQ9XvL88kZBAspYWY6Mb1cpyos8NSbzy2vUufuUNbfGimxB8Hteggz7vKEuipThi",
  "key3": "3KyH6ppCKDqyZ5iwCqtyooqudqbFLQvio8W8oFBhJhWJMB5uJ141VvgUYSzhPwiDmRBtW4PgsLNDsLGwc4zkDKg7",
  "key4": "5QGGHST5bk2qQuqBtNvrieCnh6mNvxw3u51wvF4pBE2v3pftmLym9QJM7c32rGtKZYLGnijSpwGg4SsH6Yt4ztCV",
  "key5": "53KN2czq12M3PmyhVKhY8XjTzZMYa88RKz8bpVwx1TvGbBYG4gbKQh9SgSvEJ283q8wphARhAD8ujzZUBRBknfke",
  "key6": "4RXaKfAa8kFECgMCRcdzDr9foiuCzatnSPr1Fp6evoajhKxiCzd5vhLgEDkTwfLwfvqJ3ozYmQoMM135dfcjober",
  "key7": "3DHTiyZyi3LFmqbFVYzAaswM9RVwW5SAMZ59U1Nb5ZqXhino1GL5hhKRdQhjErW3pwcQGCCiyo1kbD3x4G5FgpL1",
  "key8": "5LWnQJajSgRzMeJ9mKMqAPDHHg3PejkZmeUYiFLH9zWjHc2vcTSSbNtvUscdG2ysPrCEes1S7rXaxHVYAatXbA5c",
  "key9": "3KivBJDVm5xQNF6yFANoF3z4rDA2otBGUSjaRqfSvFjjZAgQiJACfEJUnhn5Hq5gZQxo2HeXTtpU9YFqt1BQCP5T",
  "key10": "4MagxePPPUVbuFwNjeLy54dkXWzrR2YDWdEc7DQy7GdGKPPS2QrArpksRNMw4GLSCuDsZqiWEp9miDAF3J4xSgKd",
  "key11": "4daDd7DBoopAi8hLptw52SUj23kGfdHhKSgZVWxsSGN7PsdWJj2X5PTfgCHspBbhjEstmbSbA6pMT6U5zqda3jSM",
  "key12": "4SGiEeX82dDCNv1R5hG8SS8tbuSBgjCyN4Gzta9bZjZpEuJogfumtpdGCTdXntpYBzNTavMgPkttq2LiPTTjdYB2",
  "key13": "58pzZtTJYC1cNi7PjhVY7L74h681Cpw7LhTjqsuLzMHZ34MkESAWCYCHTaF8AMVTzUM3wy9hJ1Gsu8NSCeAa6ezY",
  "key14": "65NmD2ehGcfXu66onr3cKCgtrcSA154reDNVnMWoRtxfeA3MAQaGMHLhKnVxzXXZWAYrMtaXNwd4NoWg95QX4iP4",
  "key15": "5Jz5AQMcUscfE9wBTDoWCV1gwPcHnxuv8SkFu1DT7rkwwKgd6NepHqnZGDmbdKPQWfCNo7ZhUTWchEydr9qC3XWF",
  "key16": "3Nc4MC44mEbavrrAp6qzQ1F7Q53i3wGwiGknzxqCaByGuqDXF3FcoP4jNkspPybBwqTqqYVdFsTo2jjS3gSdSKKW",
  "key17": "ogvPDZtZNqV4yRNY6Z2b3atgBj2pGeVdPck7M8HB8eaDpngaDzYJxSDURqyW97osVEeNRV7ciALeyEynemGjJxg",
  "key18": "5rQRqjyuDiCX4SD3hoWsQCprKQksmrFFDW6Bt1nDUQAjPvLaTyUqUKFb2G2okVDshHf2tw2wGbTGC9WVZB5Z7eBE",
  "key19": "VBjzpY6UvRKEeb2HEQwp6FW57uZjEcn1S48cfBKEVe6ete1psmbYyhPw9Y4bz3jyXapjqTfFMa7dKBGMXZYJzSZ",
  "key20": "4y2MHWACWXi2FeqrJs28QFa2HWm3XBJmyLTQ5Gru8FqMjzaebXN1Nynp5FypiSzz3EXKoDxRXpADb15Kqmwo1wyR",
  "key21": "31LYDgg9TFLRq5uk2nZ1mhQ8iC5AV2R14XUecNWRwW9jRbH6TC3q3e7HBWFLroGDfhptJ86Ds2T1snjGpRf95vFo",
  "key22": "2MctCtuMPxMRKpotXaMoVJvrSHxqBWZkJjXccgWc2EQVFPhqpQYpnstxpzzYjgakC2m6J4dHQMWQ4329oZWotGMd",
  "key23": "3DpmZCs5z571bX7v2SodkD9P964vspEvSwfm5V47CjqoPiiyp9p6bSkwnEds81JC696hTTJQ3NKnqvKkyYPU1XF1",
  "key24": "BdQJzbzUHdrY2kZsskz6yUK5EjTHNDcovNmfUZiDdVwp2PzqVuJ7aWw2ZCD3T1nAFcP3TUoEjNtg2ZK3vnDmU3W"
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
