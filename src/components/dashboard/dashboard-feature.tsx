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
    "5tq5s9w5PiGUXy5Aiqr3YYd1BciGRnMNxUjmfZaUdkktk2PYBvxFh7UTnzyYj2WYu1oufGZtD6zfPDW8gEhvoRjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pq1mKrcfjUS2Qkb45djuNxvznXSncc7pDyceVEDhZxjyRFX5pB9t9kVNBiQwNLHStZzdo3yf5hgCFbbevUwiNdk",
  "key1": "3guPfp8sFJbfRCk2Tdq1QMwyMNPtUMHpT41NjpNLZKo8UqPapRo4wNS1yqi2BoySXvX77JQhoXzY72UGfSThBQaX",
  "key2": "PwFm622K8ns3feCvfBaqLaKbeJbUXVrVhmC7BBRoUW9BQvQk4fEav16Vp5vLz4iHQDPnhUEgKEFQMsfFuSbXAB9",
  "key3": "4HnhNJMKj7MnHeS4YVCM4Lc6juYH7hMRJ1pMuaXVKSQ9zkpro6pv1Ex9oNFUgi27sdxMBvrWe5vMuvAPYT9jE4iY",
  "key4": "2BiNBpFyTPaYPooyQSiMNTfw1WCGpkgN7ZwhQhBjc8AAto3oM4RnhuKGrpMJRYkTv6tL6qLmXcfRpCz7WTfpWMgj",
  "key5": "3mv8QrepD5N1hu3D7cKGE5rrZonwLmBp3yrUQrrrNTrAmfkntRFc7qSWswc21vSbg962Mv5m53ZrUsKQENeHPFsg",
  "key6": "5QyN7WC4DRsYLrbMSNJsPtigCLRmGgZdp6siWVhTfAuN6WXNHRQhtdcCVnQJRYWZ1743t7C6usnGb8NmPTNg1j1x",
  "key7": "4ob4Yqj739VF65LLNhJdnDBhXmCpBkNRendEhFnd5NZRQfmq8m25FHUFXdRenp3bMXr6dekTYHkfyBnHjVsJhCDh",
  "key8": "Zr3kCTNMFVrAAcUhzqBj62S5T8Xh53iL9QKCBvqf9RLSEkxJbtmmrfJK6vbqgJPALHGcTaHa2A9YkguDewL5eig",
  "key9": "4TqmwaXX77Tq1oPbuAqmhATPYnaj2czz37wwGgS5scb8pCdhntEhw6FWsEBNbnuKpfrppSXkt29XRAtHu2efki8T",
  "key10": "4CeFTfUEPJmPREBW5PWWLgBiGZTVT62TV77uVUMRZK38x1giDfR52KG4ZnoMGesPbBSDwzEFveyEYiQanmYtKcmM",
  "key11": "2orjYzJKQvpgG1RBXwepKyfMSDctjKEZGyHV2MFNSrRcSWht5ugMNCAuP6b6H6H2PNefMirm312xsLbDYW9rsTNh",
  "key12": "3EoDwNoWnd65ZWKwWtta9xrspYKvxpM7cD5WPrDK7DVVfRVmiVanhb56zGMqFgXXM6dc8YTx8nZQfAaK3LzjcEin",
  "key13": "3B4RhTBEbLeS9DsMpnhzsujMfkwiNFPwbRLQVbuW7Y1Pa2e8DmAJUuGrDT3tGNysxrQEh6QMZRrJmdKRqddQyA2Z",
  "key14": "bDWHqTg4GdvJDkfsbQVSE76iC5RV88LfyBwkXVBpXkfKitYdVuSyExQnRsXfAHZtRYgX4LKsnSXmCnG8ooQM8SL",
  "key15": "4tWSkGKXCbBGe7pDprkjbwX6gKCeCmJTKmmpA4SPqkDxTPhAkk3xMghwWo97fQyZwbvCgMT1WGsSKVtt2dFoE1GD",
  "key16": "AXHEagZYCU6tAtxcdq1pbKTN4GuPKLosERFbGPJdx66BwEfa1EDZiZosKNRq1e5UMH8EwmZ9sscGPLpcKhXA8r7",
  "key17": "397Wi6jwkSK5Qw1pnLmJfkCbiYfN5BZR68BC6H7oJcLUhiGd4BYN7AKYBcVgp7vi137gNyQz1udZjHQTAJbDqGJZ",
  "key18": "5chtWTnHKzrUkTYABmmfWxx2fXtphjcBfSEca8ZLGVEiG5CVEnEsoNed9ccVJB6inB5CTqtYHJLSJ5x7mAvgMRkM",
  "key19": "ePgAyTEv5WNwNmiTmyN5V3N6ouXs39NZDczhSQHDkz9GZW5RXaBi4i7YxLv9c7bvHU9unFpAWUxroC1V2LcQhRp",
  "key20": "4uttG89gNsLtRH5ng3F6H3WpuW6LMF45QoQpYNFY2oS6ncr41D4u5Xmhe91zgjgFWwGikCCUfo9E1m1vt6qthK6",
  "key21": "JdsBZWt82ooKSEg9UdFUBVDwaAh2MuAvqQDDV7xTHgDoZHmTYQAdYnw4bphncs4wiakBKS6CCU3cmV446wDqAY1",
  "key22": "3GMpgi8B8KodEbneFoeRDtxZXCv3HCHFomkmRrWjzaDwfi3yWDJaqzZq9VQqRRxHHtcwCc6jCuT7iM6929JAiCkK",
  "key23": "7kCJfEkMpDXaZo4LHeV2ZaMvxnyX5fa8N7QNX87MrXkCQ3dcNwNyghUeNhq5fEuTmSzN9vMrqCJijfMzbu7ZqRB",
  "key24": "57fK9RNwo5K3w1Pipj8K7ohYx5kVnD3Jj942RM899v6Dz9weVQeXNRvzWausU8G99cW43JzTLtWRdVVBH47zUXGo",
  "key25": "4LeK3XqEU9cJg5kbbgSTR3Zmz3Jq9rZ5Rt6Kr7djTsLuVSDAe3BLKP6STQsgCuCpM1AbFxeGE4NmE8xVrf7ycd6g",
  "key26": "4wGTjjEkr788iHF81Wsk3zhEUj9EyVGCcj1B9yB6vZTfbnSigFao2Uj4AnZVEwtAaFbVR8JyncDea5LjoCDJGRB7",
  "key27": "5mtvaxRrFHCgF49FccRTrgXuByUsGtPaRMgrKWVSjUU59ZJqMhkpi2dUVRLYXnKoEaCon4yV5qFCohHpZ84b2HJj"
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
