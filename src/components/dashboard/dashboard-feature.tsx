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
    "LKhTuNzoTK33JTemurUbPib8XmjBSU8wBnh3yoYyLvec3DqPJYyTDQreraEW8wRRTcYL61nRmPj7UCVHsvnCck5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48LULgGGeGaGGs7UjFyuTn5w3gTYCVFPG3ByYGRMapNiKEcteTojTDR5PdhebP9aMRdFqgpbVtD34wK7uFe7mTWF",
  "key1": "62Z99zCTPXsTRiRbewAaNDZaurDwtfjGSR1y9TNZrTikgiWNSLCXFaxwS2Mx28zMtUWGj5sCbG9AD6X65Wu9uEkv",
  "key2": "3iVwXfiaTHW6MAK99wGdunqYhJTubtxQw4cwtXFoMv7ZWXGMNvKiUnB93kTM8T81V7Ho8ypktfzm4iFZogEQpRSW",
  "key3": "2pU9TxG56PLxBZrtk43zH6JxDyw3qRKrAVNj7KZiTZn3MyGqBUD539LMHK3gNFfcLxNxtT2d1M1JeHotbCrWDFqA",
  "key4": "2HC3qXSPiNfWAinLKLdqJhatvqqBN84M3QeM331MX2SBhNtxU9gBKivzVN8kNbpWdLArFh9JyZCU9q12dhVQMjqq",
  "key5": "6416bczjd3YUYrska13p98QMv1L3dGn8RLbo9CJmMKy9viVzZzqoejAmz3yrRMvhjNTLWy7tkMgwPiUAjNbviUZw",
  "key6": "5jRxwoDQQBZjQkJJEuA6Ef8yJpEx6N6Phq114Kj4v9WyUkF66YqhmFtSpcmozJf9B8LYQSLg9LL71azbzf6WaXgp",
  "key7": "23fMUsEnSDsgfPprZogcWK7Ei1R3Lrev6WrPGu4dZMqehmAYMqRVZN9kySkEw5ZG8BRPZPbBALa3ziYcCEKuCpsm",
  "key8": "xj3qpZCusj2mf4cN7WoKk7ZVhEjrerJD2HutQPYUVz9Prm3iQL945Pr1c27QVoxJ4dBg3UV1zw1FEBuTmJwEJJ4",
  "key9": "22k7McqbjtYroT5veGeyWJVEZorqsUnWzVYxu7uGmborhsqxXiKAyqdKEBFKHJeEWqeRHwxG2VoKdiDQJftqWKMX",
  "key10": "3FxHYpSXiKWZRpHvcFtQPrSnDHiMMtw9uGyRA3DrvL4r8uw34AiBvMM7V71r1Eh3P2bkrQ52tmq7nB8b6NdP55Gd",
  "key11": "3dHCjtgcmsL6vR24PxZJXGnmELveJCheQg9XSUcTmDfpGfvcgqgWpGe5h6gdAk1442HJ7JGsvYfcgC4UM6ftEfDL",
  "key12": "5yYdc5GKcxPd7ZB7puseX495gy5UtRGQD9kwEkMN11Xd3c3GAiNrFunCtv3H6yMpS5UYm2BCSWdgkHce1Ryq32ch",
  "key13": "5ijxyKSZwSEGuxocG9qxmG8RfLBrHnU9FUqQD4qjiQAfm7AG1zXZ6iHUTFuKA8n8szJkoussvmTVd3G2Zbou44km",
  "key14": "zEfjF7jTLtMTUXQ6U8K5dACNDRkKkrGoxSCLDkFNuYCcXaFVNRw7pnrTFCfWcKiPdmenEjNccrrQLTNbC72QqRc",
  "key15": "4Ycs1YyP9utqt5xfkCASCyv1EV1yJAhuPCfaxKD3SyRs4U22YZr166N6cziqHbfjf58XuUFD7vZDpmpr5Bb6efUd",
  "key16": "5vam8DAcdixFzBdgnUx4YthGfhmqs7oR8LKnMKwqGTYpNzRiBEHm4sEYZcHz5NCRCpkgyiF8XupREMozFqPJTLfX",
  "key17": "4TjH2JyAyfyv3SWTHzySkGWzVqFikU8UNG4D7Sy53sSjugZZtxUsNLeKriMLmxzzrMHXq1WXJ7XqB29Nuczg2bDJ",
  "key18": "av3z6kszBVXQHwq6qHMpg2RNqG6LHdoFaKmH1GyQT1xLwS6yqdK3ZLRf3yxqVQNEfHiDdAMbsUZrq1rDcrC9dYK",
  "key19": "3zynW1nnsnZ4FEcB2mPtxqrA6E4UveFHBaXU98WqU6XeeYF9iQbitg3A7GxnqaDSWYrP4Gnbx1tq44TcMN8rSKn4",
  "key20": "3Di854PpxVVy6W3vyrgkNhLVwYh3dwgvte6u751kyyx8JZkJbD7jwhf5gQL5LyVbw41LoknyPdzxNkxH4nBdUdMw",
  "key21": "5PLRzYSEH5ggRj6UM8d8oSFFbHgAXDAiwPC8jHeRhPcRwsGKiW5rpRcQGm9ZogNaPpuGvk2hRo1jr8SmRTqBJwpw",
  "key22": "N87h1SqH3UDxFK6oRc63AERxUbCLyKwoQ11LtfqFoAn2mahN8gYdpwTKF2haZR2G2vhLmPDTH8mbBueg4aFdFGJ",
  "key23": "r8FXvt2FXD5tZVxZnagQYtaKaJCy1vJQHuqDVswxNqHdiAxtfEJxkkYpniFJjhrb5zMQ8Zui1t13JFa9Kvf2n6U",
  "key24": "Fjqaqx8aCRmFDQmMGrb1KytZrSfsk82cgf1TXLFVtoqBZFocpYaBsqYTJVjXLWMsXT6aexf2Pn2cHs4YmRCRsZ4",
  "key25": "3z8Xck6pd2fCZDUX7UDgkhgbdp8tLcpF7g2M5VRqzLvyQ14qh8Nc35bDaJPuBkqGnDNJk6t8Bw9jHP6qqLLiBQAz",
  "key26": "2ZCRTVahwZ6xzw7Wg6mMtkRJo2pvd3kAV5totUXk2HihtCG764mYMxZiH9wy1a15eJMkrVNVsWW7UuMLdggKsQ6o"
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
