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
    "5T4KBPKaT4kDqqv7JcfpSHkJ5B6DsrWky55C9w12fmp3idGLoe4YeApdoDFLh3KmXTqVb4Hpz16DDewi5tXwejD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z9qbJKxXBU9miMNBELmWDqMm7cyMJNVFcAuNSL7ucC53QLUAeUceoPgnWhdsf3N5zvbqdCDgoA8uoEQHdESLhHR",
  "key1": "41HqJAvqjrKSPUfXBzBjZxXDMof5EvCHVnwhjfWQNqdZrTKxfAo2jem96Pog9VDjktqn2yvHfsUxAjnpXqyRmYUZ",
  "key2": "5SHiCq6eRDoKRmjHvhbJ6cHVdUfXctzdDtY47cARiFDdXcWqs9gGrAG6FiWxeybrweg4PAGvTAQ2roX83mDScRxh",
  "key3": "2GREeD1f5STQVPTmmya6MCoNBSQA7TMkAPxRFv6haEjZ8cErZGPUR8PSz19zhALHiMpaJTLBEZZ2x2yX3x9S3vHZ",
  "key4": "4JePEWaQ9aVNp2EHxASeAQeo3X5QvpWNQofZctdwxnuc5BbT6Zh7ex6N4npZzcPGYZK9BnJ7qRBpyqfV21aS4XCC",
  "key5": "FRn29HJjr91SG6i5quVAn7heWN96TqR8MiT4c3KNsw1RWUEBv2qsa8AuYRaXBpH9HrCqatHrYkbRvSk3qijiP1V",
  "key6": "2VkR5UuqqKe9i63j6ExTAFa5qDtgmnzDE9RJSBLnHFpq9Ejy2siuqsEhwc6zmSCoJ3GLzyyUp7mKehdaXREedSSt",
  "key7": "3Lv29rxq2VBKjMFMZKvsY7mdJs5cma9xwQjcveRyFDcKRdYZLSwPyGYerpFFApRc8R7wWYfHG8QZ2Lf94GaE285M",
  "key8": "AHJiZHMkR9n4se7ueGFzvdL7SZeeWyDoZHsDFKEhGN1AQ4ayYsEU74G9HA79BjkTgRQAB3jzR6jwhYrH9LA9MXg",
  "key9": "2XZSS4tj4QUUB3xhqghXxE6mXkTtd5tdxsa3CZYehQbZAP3fNagG4RAUEjWdVGAonHAruEpJ5Hcb9bCDDEjanTZX",
  "key10": "27wKF3S8RQDCkxxMDZbVakLTHPzcrkfU4HEz1gMicdSKWw9LwVRJNzSS6xL7KRoC1tdEbkmmJktQr4FpK28yiJTW",
  "key11": "3mxbkE9hCPUS3VhGsyJi1uvF4rQVBa9XNo5DbMpRfBR9DesxBNZd4WxkhxZd5B3iU8DTqPjGKNM3cvvYdHiQ1U4L",
  "key12": "GFSSpiYFPv6xkpr66SVMmk4swYYCojeTArnXjKV2wm7FqqmTNUxpSNWvGQnVGZVvk6Kw3zzySVXpkwnAaamrcK9",
  "key13": "5kLtEzLh2wAResyq1Lhro5xu5k6Jkx9rcRFfcRqMadeUfgyWXCWFG6XuoDhiW1XuM8xe8NQpmxhrDdn91cfvQ81h",
  "key14": "5AXo8oA31VieymNcexiYK7rEqP3GQ15mT1CBGyVaw2UCAz3XyMEwP2998e9tsqYYRo8zYsugBXrWoUWdoCFAVUfm",
  "key15": "AeoTHsSbzyxAZG76qYwKKiyM7E62H4nRXU66tm6xyMdH23SGLdVoZdxibyoR3ry7pTXMdzBkhR33pkAPEEa1BHC",
  "key16": "2XniqUfa4NMALwhU2jJDbR9xykj5wu1TaGHWitwievwPoegkRhDdYqnvbUWwrTjESPiBAtAuSVmVHAw1twp9Tnaj",
  "key17": "2HjZCUm9HixVdi4sVAAr7PrYVTayMixA2geWCLFuEKycHHFdUdrDdg6XghuPbyBjiuxi1KWYyMeHaaA5XYeX7CPa",
  "key18": "5K2Leu4NutfjpAzeBjnvyTtVgvYJTZ9SmNPnbC2UgFFLBE5x7T6DaHvcqsSk3cAR1L9CcK4aquB2fGcWd3ttQ15b",
  "key19": "Tj6A3RK2o1jUN7o5mVy9FYAKaJ1bm94dYTvYFAVbqbw1VCrAAMjjK2x14PG5eS8ki7wKMoK8EnFAMv6idQD8UMD",
  "key20": "1VNEojmUJjmYYUyBBpmLAt7yi4UQRUd2oGKyarAs7u6kTrpgAHk9tJTeAGnibKXwMvM2MmcwY17TNE6Bym5TNvj",
  "key21": "5H1XFmvtiee9dQfQPNzvHat7RwhJboe1iMMzqhEA12Y22ArxWdp6ARePVCPRbfMjkX4cda22zqpEiowxMxiCbznd",
  "key22": "wjKr1yL64sHUYuUFms9MYTv3VZfGb4xtco9MzPZ4ycfucSBaZtRnFToEWG4ofKY379UCB6bwgiZMaWmomTSPTTk",
  "key23": "4hA5U8fbkAkTp8ggdE2b1u2pDPRC6ZpZZsCcY34rmmJep7zBwmdyBpk4wbDGDgNb9tJSE8CNwz7DhzBi5HkzzXak",
  "key24": "5E6c4y4ptk9MDfUsEUA6849w2yJsLpxp2JdRiXjUkT2U9qdobPiXD3B8rxCL8LSMNNwGProzcypGAF36YTRuFN5o",
  "key25": "663X2s8AM4kEWUgdPEJGGdJhd2GbMfShMpXBxrPDCtvenEA6e3npV5jCfhkApUBYdyFnWc6bu4VywLQ2t882zou9",
  "key26": "usn1rpMgjCLXPcbxELGAZSFdtupztbEtVue52KBDxaMXYma227LGUQPZogcoiwAyAKc3a37uoY9dtXtXrAGqiKK",
  "key27": "4RnCnwxmYcL6oZ77Yy4acy7JozW2Xzspn17vmGjGDvBPDLSyU2pxoB9uuj7uMbY8AEXNLKHhuUfpkQiSfuqcM79k"
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
