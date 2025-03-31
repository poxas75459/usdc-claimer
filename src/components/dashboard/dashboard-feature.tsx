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
    "4BXpQtTM8auMTcazTo1ry9iua8V6FUq6NVuwVDhAshZEGWqMQ8QDxmNES4iNBezdqmUPEp8iV1CGaSTttf6Eihdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mFmziJyyfTYbGpqB9fAHFna7sHWSbhLUBAHBPCNChXes5ewSZnRk8kSW49bL2TYaFdTQ2YTpf96agwmxFaQjPjh",
  "key1": "3zeB1kcSQZJQnLhUSvTX2qcfF7ySsDSuaeDNh49ees2zdJ1FJzd9heE4gQbYx7uVsjwnmjDUpKiGtZ3db4UpwTP7",
  "key2": "4RFNidfNkfZXeVBCjN6Sar4thjEnHWtm48uhEhm7mfTNYSje4iMkk2AY3f85RvoDRLnuKmUXmpcAYtv77RJiTnaj",
  "key3": "67FkTBJDLvtzFz627K3uU8bQrGPqdfMsoeYnkRwWey7pT37EquuFcjdc7y2oaSoe94G6qNJiseBKBTsbCtTBTgZr",
  "key4": "3jyo2fGFLm4vgF6sEmr7VZziqCf1GqKeL9YhupwR6phJH9aBjQpCpkVyt2MnyPmkmtD6JXhdxEQiE12AExAYPyvL",
  "key5": "3JpCimoC4nYDYewC9GaF4Mazo6gJfm7LTVoTiJKne2Hr7e7hUQhDpPjnYWWgnZ7GTuWYXKCtWQtmGWcwomEYTs5J",
  "key6": "3dSTJ426Xq9JY683GU6VbiDNryL6gxeZRpFYzJHBkSM56nsSDdBqCTsz5G7ABUFmHc2dQ2Yt7hqnQx3P46BqmnRi",
  "key7": "J6hQKGzeSHvtBox7hF6Cj9LnKjdGzQHCKYvKNSJf8d8gasWZChYi4XxdmHRtNNk7VYXaeiQ7wp1eBR4jYnBY48f",
  "key8": "5zfNcBGyahE2Phd5mTHz42VJMcbn39wJJ63zrFKijL8jh9kQLfmRfkcuadpRsqgMwKXP78XMLKFj9X9BKUHeKHQa",
  "key9": "5oByQq566V9ondq66xgUFe4pSFZz5Axjar8HrpYmbCj5RfmqejAPhCqusxp469ukJT8xc6AmiiKGPuTYRtLbvTxK",
  "key10": "2bo7CpLLenjvVhJDc4UbNVPEW224ncxcc999RSxMKDyj6UWg6vDakLTML1Vca22UaDAH48hepr2NWpGrJQ5v1w48",
  "key11": "3SVKUtEY2goErcR56gnMVHfcXERD5JwxfkJJkKF1Bg8XKvFSYf56EQLUjuCPPiAz3bE7wumi8PTinZh7yrG2b2rZ",
  "key12": "pjTpnXYWuLMfVMZ1yugv5wAzjymhq1hz4NjzMNNdUVHeatNqXbmPrJtG4ZqYHNHL1YNC1jvADkTvezmzqwqwb2h",
  "key13": "3jc7BvofSJ4hMkBqFXnikfi43vaLAzMpKaCiw2duWcJzxejJ3VBtrq8VJxQaEN2WUcGoxqPCMWEMeiMjmacwd7xo",
  "key14": "3rEiis92FMgKPLv6S1urkXjcMwiHYRJGXojf7AvVWxKfPAuWWUmCcaceRPDLPLECCELwzXL2hmKPmF9YQdFk2iND",
  "key15": "TfuYdzgHjeaEtmz68vvUCXpnAXLwcggCFBoKb9bmY7y2kzgbfqSLHhEzrKEZhwCVpmx6Mi3cMzHb3f1JFzZ7xRE",
  "key16": "2VkMCnwFQw5QAhbu2WfaDhjoXsPMWPokpvZT7F9GM51Qa2m9c9eoGs2GnTtsFre6AbUF1dSmBye94oNu3p3dGLYN",
  "key17": "2RJo1VSaqwha22nv2Un7rqA1Mp6ycBeYx3EkX2TqHwcoBkcR8NPChFSd32Syts5GFTgrW4t7SffzKESN6MpV38Lx",
  "key18": "a42cPozk6VNba2NjrXXBuMPvzPzWbBY9NQKiEX9jSc9r2NvD8FVakV1cQ5Lszji9Fjd8vpokE3ZvajRbiA9e7RE",
  "key19": "3E79XdvMP8EerZSVtEV9hiM8Be9FPV5J8bL8nkmWPT5ZWov7reoAHVBkv3RxPAUUhaCGWNxNvDWbcLu4PNouaHCj",
  "key20": "kJE1aET3bX7HUxfNqKii6Gi4UNYwvfG1zCf1othyrWZ7DSPK63scwhZDLivsUNfNcWVbBVKzZmr5xU1eAV3Y3Up",
  "key21": "43TDJjxC95XxBfkc9w6EqLcwn28rBEmC16cYjEaaEPinRSLzBDKpmmnn8CtpwLGbFnBefzxQjechLPJCj7gr1MTH",
  "key22": "3fNoZU9vDPhwuZasxsvpzNFrYWvD2QQ4uJi2yU1rYbigvT6uEShMUnASQvVpAfmr5YBE65xtzde2Bn3dtomLk2aN",
  "key23": "5VJXmeXAsCDoEZDUr52DFwcxa3nRb4aN4UQGYH5F56GcuwbVQjAFBGb6wyuJTw5stQ5hQ1hiVjjkNpGLwoqE5N6t",
  "key24": "FygEvcs6BvBjVC5Wov7bYT4gUezHRHR1ygRKZZgfv8nokaeBMPEvPVvpf79L6XXJgXRoX9dTTicGjuwwKFPc3wW",
  "key25": "2rz7obJDfURr3oYyonzxqL5a5h8zYEMYnDTDLz2unW6Q1mPrCmELExMbLG81v6WXwJdz4FzqpTbKVS59mwbSWPEV",
  "key26": "65sMsMEpikpZGB4kUBssVPXwuNWkUCzaQAHu3LXEgoqXodiYKQ7LA8SbXvcL9sKKSPuYsYXqdugt8tU9CNCiT1Yh",
  "key27": "AMvTYDRgQ926Q9pCgDkCexQ4gPyx9x94xzsL7ShyyxDm8Ytz72UtVqe4ohLm3UckXgeB8YKwp2rjfoVrXMynqnX",
  "key28": "KMr6Drb76JVqq5VUzm3cDmMQeuwQLUn4xG19nTDoGUy7dP728jkETJMpx7jqxmHmaUFUTjSXgLFsY1tszMSGtEm",
  "key29": "3w1wEBLXmzQ8ERPamUSihqFbTTaiXKmfWaA9THvj6FuCvhr5kNGmhGL3hnRZfAQuvfpVCzmMi7qTU9geFcAxidNV",
  "key30": "3bPzRY7shAHHUgT14XGh4bZwam3SX1Zvw6yaZv2i9awixEF6U9UpHjhr4Etuu8QGU9bf5RKbjDSX4RKDy1LR8saZ",
  "key31": "29GSEFr9QjJ1XrB87xnnuEXLR4iNSn5NxaqJghiv9NvFFnf3vKz98LSu3aXvT4AtBV5pYU5e5KhTRd41eA6zCGYv",
  "key32": "3q3WDSe2o2h2xE4oSEAookRMWypKxeKGfpMe7SJRPHx8YsKaxAF1MdsWd1fUCAonuzeb9giVKppieabYYZKk4Ggh",
  "key33": "2e8c71jMwAT3Mapm4W3vLXM1U4rzkyp3xBod95qMoS9jV6WuswQKjzdWrKvTsJEvJ2yct65JBPxKnRcAaB8w3gMj",
  "key34": "ftPLCXpVgm2f6VYPVqV1WGGgJPfJfL863xwbTWCUUi7R5V2YmbtSPGy1FJbuVseUjGNpMh9iC256hKTxM9JoYAw",
  "key35": "4ckS2CyCRCmsEXUwzUWQQGUKpmdDz3RESEZzFQVgo2M1jmRJSF1zgqdyrGsxMdovQMjwqPzEVTGwJc3zwUcWb2yw"
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
