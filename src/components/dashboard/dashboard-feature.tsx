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
    "s8R5bjSVkkzXbafKEQiDYrmCa6iQVrKkeCwQE5yKKBKkVAaaM6LwqGPYidqgZKTFtH5sWikmouD7A6vT2XhRbU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eZorCQ9cXDGzRBcxJeeZot7BVEszMSD6bsboHGiPnAukkbbffaBqouQxtgvM6TocVDtsjmW3PFT4P67L3ugTpqW",
  "key1": "ZfqbFK8wpgztpSeToWAAy4hrF3uJX2Ew5zt71gHsDkTKwRVPZEveG3xdtgvh7EQw3Vjur5ERafCL6RxvK8MeCke",
  "key2": "5dN7goheoL9eai5pfJDBP5GvYsU7uP75wzvrU2FsEEULMnezrePTamrvYk1dJN2A6ua2LEsuRZA3Ww84CXqMjuMd",
  "key3": "5c1US1RLonYEfyP8kp3qySLJCndYk6vK9cCqkWaQN2gaDCLiud8dXwcHbZjZon9DfedN32ThrGEvKC9x2czCu8M3",
  "key4": "5eWyxDjBvPZk7LVhGGqdaMApji99AajSQPBNtrBmrhufMA3ETdkipfx96y712CmtUXo57DvAq6FAVc47PxvgawyD",
  "key5": "5M2mv8TH6G4rt4og7bQVMAmfEGrt1aJecPiGC2ZvycpCDYoBGQKY3BqmD2Z2A3g3J4cMSG3x9R7dGvLPuyjYnic2",
  "key6": "VabfjYzThoxkpewCKCYEqC5hA5ZjJ5JxB6fTtxpnGV1ZKggeXf2eQeS4vFDuVq2xVEkkui5RBqwvgcNVpjEqY4k",
  "key7": "4zLBMDsypJQVXZPKASrdQpANUeLxfAYfKTxsDGvmKffbiaeUUhtjHnuwj1Hqk4mDxUXeyNmmb9ikj76okQeQttRQ",
  "key8": "4RMJrz6a5uqwvGcbSXJVRm2Sj6DwMa2xzwcrLFMYDXDgr7E7nfZUsBNnBJ3Vrmxr94gr6aRNAG9Kjq5AXc5EWrKV",
  "key9": "4ZFXLEnzf82qPX4nZVDAMgxXjXtzQcX4mTp4SVBoWL6qMeUWH7de1s9HMcnUoVHH86J17irbT4CCATA1rriQRNUc",
  "key10": "28d2q8RcTfnmp72JEYfyaaFUXSyqUSS3XxSVuY95FSg3TSDaJXL62YPN6hLU6Wd9yR2YET43PcZJdjjpQrKEKd3A",
  "key11": "4QLdqr7uSgk4fLPvKfAFMux7AtFNnif59uBb843dw59pq4apqxze4CbaStQyrMcx3p4mPdxpczB1hfM51wxMZovL",
  "key12": "5yxY12hmXtJvgEweKRc2TXUGELaGasJJrqfoBLa9xYw9pWMyjvV1Nj8T9P4v5tXBCX3Z61DuLgXQJuGjvx1HHiWH",
  "key13": "5ydrnarb7eeDzx2jrJYVFUpkxaxf4axkYktNbiVzj7KfVD5zajbrGNGVKsDY2jP4ymtyAtUgiUWGLESphqkrav2H",
  "key14": "5u5g1U3xN4vmcns5ixGZD5qYxgvG7M5qe1jxZ83KkP1aR65CSpk7BL66FBYthLdib9vk7b56DZT6PwgpJBeyRh3o",
  "key15": "4EtRJ9ErirP3n4hGTewSY1vqpfrFWt7LWjm9VBJPn9XD8kX5tooMh7XrVw67Dqrwmc56Ns2BWUY9LRXCpMHANTMk",
  "key16": "4spCksEkwGMYUf9EaQHvogcYCcTNXzr3zBKFttdof4x4EEQcQeMPFBhz87NKdexaPjj1qBdzYQLKYyrVdq94xFgV",
  "key17": "4pBACBVVwGDudDpjJ3cBhiqQq1k4phui3LKaDcaPfA54K73bPDihcN198Sitxi8ZmnzkjRrh1wrpCGvUvXnJ4VbH",
  "key18": "yc1jLrLZdJxz8v4fpr4NNBhAntTEU2wBAHsU7kwVDmdN8fjzgYFSpFc17KuE5TM6mZJVV6aFyAU57KpFpVxsERV",
  "key19": "ERZoN1gWTtLkHry3jRLkb2bGGV6tMoFdVkdUt9tTwa91TqBYM6dRVbWX3sLPMGjJ4fTY2MsTTywTufuwvbvq54W",
  "key20": "E9ioyZYNaquwAAo4s2BH3JU9sWsugY4VeGNjnFb5GTw7MySMfUcuJ6MLYre8HZ81PCZwYyfV6UWugFXWmpkGu6w",
  "key21": "3fGhFeTv6mNWr2sf6YZhUK2vCzJpFiECYx5R8xnJ2go6QD56Upjj1P6X1GKcdiwdmEAUKWz7sQkGptMFVrhTjLQU",
  "key22": "2pscgVPhDJVEz1ohttXwSdP9F4fFCayK15j7P7rVFR6Q2nrUvhgbebPzcPBQdhqzLN5EpuK4Xt2fJ8M6zuam9S9Q",
  "key23": "4xKLtxv8Bx7ifPNNUYA4srS74ukB9CjMN6AaAc2DcQi43VoYPuLpei487hZtfUynugvponAPDiwRidrR3TTQQMd3",
  "key24": "SDmiSwG6fwejcjG86d6UQdDoWEcZ4G2umHCrjeEXA7cEYuYvhMX3qkaCDf18kksEV8wxR1esiVQKTWPRGcAUEBv",
  "key25": "4CQ3NUVZWpcp2HZR1XrEo6TwYGzesQy9QjJHmNVb5f92RjYSdi7ybwuJhMy6zgMY5dCyk613edG73qoWdkTt9zy",
  "key26": "4sWkQjPrDXivC6hbQZ1bPkYkX7bnD2LPy1JUTzRgX8aAP1CnHAvzH5XLwLbQ2vvKC2KX8ZP3nBjLRXQwHGDJQEJC"
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
