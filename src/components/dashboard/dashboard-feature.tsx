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
    "4WnafSf1FE6z2VYEqPRB82DC4YTqihKqhAvRyb7ZS89MRsJNeBfTkp8BTcz8Ed734ZvnU6Ce5U5exF8n1UMtsFT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38JpoUow6oRN3EtddcTJEgHfd6bMbfoTc3RHGAHnFtNoFYbHAKgpjAe1LzRsA57BJ3cernrGWXVy7tNWsd3qVKc8",
  "key1": "1fQzWtesg2RcdxzBeeEAtzxPUsMH2qfrwaCbFKvyYb1ptPJqJUbR73tcw2sPaj5D4jbbxGxorjSNij322J4QfcJ",
  "key2": "xSei8oqG2Lv6d3ufxier7GViNGHvWQikKzsphSwy9gWFgPZrW2XDeZW1jGY6hLoJ3rUNGxBfHGzXZGZ94PhD3Cd",
  "key3": "5MdyAdRVpVRqnN7nHPk6PDqNPXKWsRnRF5aYNFmE4DkMJ4auryJ89TZTSjUmrgTgJZU3Yys13zrZWsNvi7ZHVzk1",
  "key4": "YzdP8Gir8gxxpEgi13FjagPwcvUZ48KXMKMbS5vQf8T5Woi8XVUv19bjDXkJ3hCuyCXR4Bb3eersPSevNs4e8GP",
  "key5": "P9bGWEATBoo2svMAPFTTJ7BibXg2MsVxjdyHCPQWW33GgbRaNTJHsXFwd5FmmHt1GpamFzPYndHYgXxYKS5GERf",
  "key6": "4yevQvg4Tu3oVSWrzNyxtc68LjxTjehQuaoS4KYVvod4q9zWHDxPs6yNH5iCx8MpjwdTEJN2i312yTtSXoHLVFji",
  "key7": "5KSkMQ3Pj29aucqh4zSWYcLsZ6tx7K4W3xWKEMG8LFgUzkLg2ckrHJrVvSeqyAMzCwEkUk1ouxsw8VX9bAASF4jm",
  "key8": "2T3ooxstbNbYJ5vyb4htLbmn9RYefBmrPYFoN1Z3m93d6pdHThe6dwjJjeN4uayvAwo7Vvu9K21bVvURyTLmFkAL",
  "key9": "2ZZvC2jVxPwN11KmahTwiyTmxjnLWq72VBBrYUov2R8wQszoPGx8UiaHyQy8BGVYbPfBhKkzkquMRpNTYbXURjma",
  "key10": "63WqsTe5Zn8iEpLwq6AkrjecjXvmXnGM3fG1bkpNNK39kLSDi7uyepKMXJVrKXJJWAzB7DXFbEoEcZ9aFeHbe2Tc",
  "key11": "2oYKWDniY5L3ipqKpoJqMk2nLtA21rHFYgZHo2WpzjJmtzVfEbmLfUM4EMnLV4K9q7qAgKa3a7gTvfPk5sPdStrS",
  "key12": "2jRQPwzeM4d4h7iZugfuxh8GZM138KHSNmUVHv521wATt8hh3u9BYr1AP4RiYNop8uZbjEUm7BZL9fcsDcLfjuf7",
  "key13": "4Yqy2BTmLYqq9838bYvrc8RDQJRz56m2ngGtwBeQw192uE1VWGZcz7Rr38E5PNj5akYyLF7DgVaw8UnMHbpA5wFU",
  "key14": "3qxviXFVbkciMkguGfTRyoHGRKrcnZQj79Ki62rNzBvDfaWS3GerVEX7Enm6a3YCpKyeyt5QvRitqJVB8ALesVhC",
  "key15": "4wDuAWz59DLnaLuFJGuMTWdgzmVCy6dC5qMjxhx9kfodkiZGBcAAG4zmHiVj6HxCfo2HiZzhKT4Mg3DgtdTt9zSo",
  "key16": "5cmcotxJA4w3Uez3NhvTWLkVqB6DVruuz7j35NBjpNHGopePgKorE36MDehuqu868VHWrfvgPGJyKZQbiogtwMPk",
  "key17": "2iRTknFc7oexfaTFTB6z5ZVRVEkc9t2BdPx92cnxKwgukvyYsdFSEebWKvRQNmBMfbDzE65vMigfAG7BNhM3ShVF",
  "key18": "TzEhNpAhLJi7RyvekfhLhtA65E3ajbAkPcwnb3e1wUxq28Xx1NHNfQ4RdHg8XVCaNho9M4cEEZCWwPL5psLFurr",
  "key19": "5Ns9UNsHy2dXPJ7zSEHQQAQcBLYKBEvdKqLmTtshT7p7DFNKiEmVGiqLpiJfzLtP1Xd8xkNyBshaCgRphPWYpRVN",
  "key20": "3Kk39mrsXvrzic8UXb8iVx5TcQDqaB7iFsQrbV2qTYcWdRUFfkThBm1nbd9YH2MDECADf3gCRfHWFo2J7AKtKAsT",
  "key21": "2RSRvLBMqgdE1fwmu39yotGBk7fjzRCVvJxZksy8yqHu4Bc73jhroaup4iUHfq96LyvGQwVMUqe6ePYtKzfPtNFT",
  "key22": "4T8DqBCeQybz8S8hhL5visGDHkyE6qvG3HZ3PtyKAuDetvWkWpVPQTuY4NLmp3c4zwpiX9TnymDXdq2tNo5i6Fxf",
  "key23": "4mo1HHxzJYRQhpgPqzUpFEDnuQKwNRMDm45uDARMJAQ541mGWeqzhD9zxyS7WCjDQzuGtSAkeHCCmSjfQvUSJE8Y",
  "key24": "32T1khPACzKBEtn3EJBucuWUHGVLwf8dZWVWN6ZWrhETSptKY3RfEXFfxy6Jmf9jd2M32AD31ZdNZCh5y1KdGnHq",
  "key25": "2Buk39S56xMUuxLk5Pb9To2mquZJpxxBqFFdTDZqWqwmiVSFD5RBbLveWKsKHucWqtJQ2YcMhb1vHGvhFq1uRZPB",
  "key26": "4BEYRjPKbL8RZVRb5qPvcyGvtRHAHKqiZpJnsgeNLEtxaXJuJ5Co4dKTGKwPzaCQLiLAsWVk6mf8xESfgEBrmZXd",
  "key27": "3q1f16h9gph5sJySxi8U4f4Xo1oLcNqTZCuduZyNc5ughTDcZ2bM1EBmfBSpm4dDLtPbykeRh8hVYuS1FvFt3Loq",
  "key28": "6RrhavPTXQJQfSRD9B2U3iMgHHASdZao6F16AgdxmF9VYcAUv2mHThfCFBU1RLMbovbxkwj1QXMFccdXkap6Fnr",
  "key29": "2aRe98HitY1bUgE3fWuUSKEkY6SvsVu8zMNMWdUiNJqN1L7auS23wrAUSYXstQmweFBAAtdmnRRHRrmmCxt6hN9d",
  "key30": "2bYUb3x4vWrJ7pYvVKWqL7GU5aLzYGKSd8GKxPyezYY4BXCPHQbn8bez4VGnLkmJVpxodLd2xYMt8yQR4HPwfDci",
  "key31": "2RzwZe7utdziCrLVk1XvzHxwguJBVDbd5T3yZd1P7d9szXSrrRHcQmodHGpPyauisCqFX84wwqoLpcANPA1RbTjE",
  "key32": "qxzAQPpUh52Q82SRHv9MzJpBEGduNB7GchWwzhfuzo618iJs3izrNfJNWZWUxR1iHsPibStu8Tw3JkfdFJvpc82"
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
