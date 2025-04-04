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
    "5FPSg6c6ebCqCmYPqWveV4rqanEVQJFFRwMpYBejtqkKGPn7a6VTqfEoC2RyfTzPLYmoec3WC6RAYKBKKKUsfSeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55fQc8GDs2RhPkaMrRSuARTDQLmymMnoBCSnavVMnbFcts3AUktQdptrpgyaEQMQNj3cZfGRQX4fzBb2NfZe2Kn",
  "key1": "5q1jfo1BoWtMjFjVpHp3xpbxj3gNiXu3dByo7uMDmEeHrkXiswCZBCRR6ZyW8PrXRGBKWPeSkJVSAHBktqNWzsXQ",
  "key2": "4zicCB4a7xM8jyrLkqzd6UYaBfVofmEc9F6fjAo4ZNJJHdfqR23yjRRvqv2o1Arc8mMGSXY2xChiVJTEMgFgCmqg",
  "key3": "2Wbga28TjxPZyKQccXrCPUXvb7KKDhQYWziBG9VvTNbHLmxn9xCo5hXU8qAfBq7xEgPi7txK2fCCT2fHWMPAQBqL",
  "key4": "38bbEAjonHqoHPanGPkaN657iEQnNUH5yYPJYmv74idQ5NdRcm2PaF5WQX7ibj4ob3vKJSApoVvmhpGHE2jn7yu7",
  "key5": "3MsSwwmb38DHDLpXJcdSqxuu25YYfgA1jUwpCAjs4vhgZYMvvNU7x7Nr22eYT8teKgoMBRhoh6bcKHpSskrTVEra",
  "key6": "1W7RuAJS4nwuLPSA9m5ve9MkygxRvD7JkW5LCA7moLL1H1JTGtTsfUKMhqS3WPhb8ZawopuyLAEqCYvgXr8m2jv",
  "key7": "5v9xsCkgHRN7cWeBykzP9vGSdGKCzaYpbhdMgM4ATj3cGVwxWsR6R5XrCQnT6UjgwXTxBhheA3an85EmUgdPXUam",
  "key8": "n1CEWhgfaVejXdsWmNPtsdyG1pC3ZEfHMArkAbPBKR7bsrkMJdNdF4YbBg2uqSbDxNp6pxuMpnoWctd6CRdqZzq",
  "key9": "5fnWzTKUnr3Lf6Juab5Aa59EDbaLHNn386BgJnCsgELidqWRzBesSQ4cq2kxrVRnJr3A8Bj2TWPT1T2VRe1DuEpz",
  "key10": "5PGDThrj6ABaKUFs36xVzA8UDcRSPaDQkstsuFpe91EjkdjkgkBQ2qcj4BB9tTP8GbkhdPF4xRz5jQxswHmLffDT",
  "key11": "5N7WQnJ3zRqeKD7F5fdwVQrLCjLLVTeUsgCHrn8jRC4Ej7rcYFQ8vhEmFgb4vjWtYNcJtMDvgCvx1sdnTMoqn9rn",
  "key12": "RYHjiAgVRXE8B4rLZyJF4RCUHLUCCsw2dsL8XTxWgNUzDL91KcSzHG8kk5dH6DgHu5mfCgeC5qpoRCqonnHKwdc",
  "key13": "4bhd2ZuqgFwgNf1tF18xKEsA9Cfd1bNseSHtpXUUTzkBkNjzz82NZD79iDaB2QNBTWVyMRcAczGpAZSjPfgbYQeQ",
  "key14": "5dTDivRqseieayEV1ceveRJ4Gx2SAbPf2YKAUWm5P8VSz5GuzEp3xu6ZBJ8qj4ziQfhjktPW2AQc8VBqkJ6m4H5p",
  "key15": "4scoGr4ckZfoWtznf2BKt5aB385uk75ws7gQTrWLDHFjPpFV43PB4tyrF58VXBrpk2sPBftcByExxLNs23sr7N77",
  "key16": "B6CC6nAW4UjuvzLhi5RyBnDiPT1fpxnbBvp5UG3GnzqQXpkBsJL3jjoiqDBvnyh8cgwP7jkUCJdHsoZ17jnrNJo",
  "key17": "2ce8dHEr6dYQFDTHVcRvRjL3Lt5Ciu74xNxdCf13t8tML6zN1FjU2N9hi1yEoGzfUFAbdgBekBYP1A1A6fpM6XPS",
  "key18": "V9rZKxTWP5yfxefgfboArAeQTaJr87qbbZcBobgmJyuNz2gAti7ywJs5zy1EHQaPvYkJkzZuRuVBMMHxEyXSunY",
  "key19": "2qkPzKiEFTXBGwPkiDxP9E1ZqKeLXDQQTmQK2cnoWFtdZDa7ovqwocfm8uachJw2S5CKkxwpvDZ1XicKWRnbwYRr",
  "key20": "3QRru7hgehC32xdRtGGwDTeXTpR3oYDnK1X62Tij2sXqVpMQcbS9nXwd1ALSBHsq6RVDhv95jtZFJsf5F777XNkF",
  "key21": "4PFbEeAPk6bNMdjCgMwfwRA8FyVpCSnUrsVsBvNmpgFmuem59RHSqYg6ZgYrzKopRzY11PWB1yvR3q9RGfKF3D2L",
  "key22": "5wNFGMEQgwgCQAPVdoZJb41rsEnDbRn6mH8hWC65oUR9UoqFY3ovPQmEB2jAfx39hZdKcMwqaMmWPiPwYBx84gRk",
  "key23": "av87eZsiD136yyxfEavwR2Y2xd8qpqA4HAaqquFXm24jjsb14pu491ui3bXnFFm8YXaiM9Q8GHURoVHtfYDfN83",
  "key24": "2tKyfR3ebRZoPftkfD7GH57PcnLc1HJ8Ewnz5qEF4R5qZLmmfrH41JC4x6hKs3ZS5Uv8E3VYJGuYBATadUJCaVHV"
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
