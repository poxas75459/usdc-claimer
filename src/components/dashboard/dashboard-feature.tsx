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
    "2XwmWe5ne3k2EWr9mJnyHyhPVM7Qpz8rxXm8rN3wWmEyU2yGPNg3PGeCk9XE2QocEBbX94yyPV66zkShNSD4V9oK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TsEr7Q2QvF6PE8KhUNNbDSfLXkvxk6KC9nfgprvcD17h2yypMeNG63chJvufkyp1KMhoras1fbmarJXhQWSBkT7",
  "key1": "2rbCZG3PJGjG3PWtWNMVucFs4sPqeSUtZc4PrC9hq4qa8UbCn17ieqs3yqbb9TzucVoMJ9LLovnRDQhALXXmctky",
  "key2": "4bCFCsH141anpb7x8bFdHw18CeFZzWHDGgF1bZ6V2YqgHiEkunRSTiFPgkLvhZeS6VqAjes4zpcx7Pbu3vbcBxzx",
  "key3": "3wXSP3SDFyh4E98dVqP1SQYFkY1RPWZHkCjqpYLJETEJcmSqGC5KpXiEZK4sqj3MZvuEmyBj4Z8tmigq79EDDfaX",
  "key4": "3NjhqiPDs7Np6eTwBzeCiHsTYcBw6xDryf8Nn7oLmJ2KYQ6edziwnmoGh5mzya37XPyk41cLDSp3C37vPyDyj3XR",
  "key5": "39iXeg6JQSRGjUXv9PVmcDnzXQUxo5vpwJpmXyoVfbZbUcf5UQcweE9bZU4PezFEpqHwkN3WyupHTMuy8Co6u5b2",
  "key6": "43APAkdUyz4ZyJbKwuEQxXxj8uAZe4E5mtk2zYeByRTBRPm4jnYqTiizSQ7mTcFsL7Cv2rDCK8T3AgWDQJC2Wy84",
  "key7": "qih1cvFznhcwfYYo4p77DfKBFcPHpRAPRoPGjh3bwuBx1uq3hqNB643sD9Zhea1YWXWhhRQgViWY1S3EKSrFUCa",
  "key8": "5DVhi4Fy6EPB7KStk1mUDRoVDjdsBLsTQGs3Mu3fEafeg6K7xE4EUHz6M864Q7RDujqrBejZ1v9yNHCpVjV6aY9j",
  "key9": "3f9sMzzTZaz44gZjnumt3QRBPDzybnQ6D5RhKP5tTBY276mXub48L4Uud76QMzciwariZoo8wFngUaJK6rJYttwp",
  "key10": "59GDw4Y8Qy7xLDkJw6FxjojiHV3UtRzpSwGQvSXp7LMMrcTcD9wAVuGqvJV4P6RFfDKd92GpaUZAyRXFQSESMgzV",
  "key11": "4fZ5jUMcKmKBsgEd3xUWaPsjup1eq9gxcgT2ubz9tzUeUxDp7T9DMb1bQFbFh7p3iSg4rn76FWQxR8X3mj1xCUie",
  "key12": "3v1MYzAUqPWcncgpgQaGYkhuVKvoWeZpcUkWKyfMKAuxCb4Fg8F6oShx3KBURPJgWcyUjDfsiEssB2V7nhvY2BQE",
  "key13": "4Kdx8J3BoMvScAx9hN57Xsevtr4R38yfZzoKmNKwjdewqm6wBKS3FiRbQQZD116rGzdCzyfc9S4reLpLgZXanf5G",
  "key14": "2e8K7eBdyrZrf5B6aZy2wJ1c79d4w3Dw1aCrtTMQhNPz9qReNbQWcnuQ6eBgYi1uB4ty1BGSQHKCPMbjCEUGJ6N1",
  "key15": "4EWUrFToTNfPKxMuN35KLCE1goiX7xVYv1CUeb3r6iZ1XfhrQpfs1CSZqeQAjLBL9aJETjiDGNR5qa2VxkyK8pjW",
  "key16": "2HBdGMcHtqj86AAbwHWiHNNQa3Aei9EExK6m8nkQHBWc84LWvVUE99HSnX3WAnAV1W952B92EJ8rH5LQRKjPZa9L",
  "key17": "3utreiH7tLExr3Lte5z5EDT8nzCUA6KrvS2C7MZikzFs34YoQFz8EWdSH1fzNQmLHNV5F8tVB2WJbssie9WdPx8Q",
  "key18": "4VqUZWLoM1eWNYGt5AxqTxJEmgCQJubfdGBhcz9erGXFEaenmGCk9qB3iBxu9a5CVNKw9bFHzZexYZU28uDQJNQT",
  "key19": "4o94hVMzd1tTBNgfPfLeEbGpcYYJxRbvzZx8JcMa8HuD7wjsfbWMXtigr2pEKgV6G2kLk2FnoGUxcUFQab4NXkCj",
  "key20": "58FHRgzZa4TWj7yxJJ9f66PVpbGs5QkDKkveJSXM3Sc4zLLE8wCGQh17CxHRdsmTDwRYM4NqGYo6Ni5hRxYJD5no",
  "key21": "2EYyhguRFPr8J8jPYFwBXBK7QsrYdGsip4EV3cWGK4v493rPs23MVsrb7BpCtAewuAHqoUhQGpM5fPKJxP3qoBde",
  "key22": "vy9bqW1ks6hNfGUhcqagGvmEuqK6ANhwWhfWuEXxU9ng2LvcUeiDwTQac189aTcCmdAWJP76NMkEwa2KKwieLWi",
  "key23": "4urEkTSJrjXZFCn1HbPe8VBhu682zdPqtdmrZ2W54gAzxQPsZtHZdAoaVWn9cDec6rgv87UseG69iC4ofkrZHrdc",
  "key24": "4CDzTuhZpdXqKeMTa3gKD5dehsmLV9fM7GpxAznHq7wqaUtE9q2DhWJjuiJnJgMA1aZeD144ybAwAZ1kADRzf1e7",
  "key25": "62UYKuyV8puxzVLdFmT4mKmfDuLCv1vcMYFjkJffZH2v6xhqZZsYQnSWb4AVmVHZ8sdV9NhWw77taQiVPQRpHFEN",
  "key26": "5eM1GQBZp3a4QvN9QxHpNQtfaHpVfHRkp2zrfuqMc5uPt3QRta3UDKV6AUs9X8hcTQyDhJKuAVmFx58gsCZBGqVc",
  "key27": "4vMQbGgnSdh4pAfGCzdR4X51v4jnRC9ttdYKYfV7kctXVpzs3xw39V98kPegVKRKG2XR4bPU5kvFjDyd5XNGCkqY",
  "key28": "3QbyXstw5xEJUwWB1ZmcqERsa7r1bAmpJiDfAV9pEzAwt4xNuHZb46GAdwUGhW2VHdkvG6CSikRGktjqQ7AfzV9g",
  "key29": "51GBNn4aRZp6Qx7HVP3vW3EcYQjHjTsvNy4HQGhfVkArAxLpNgSXqjeYKgomcQksG1AxBTchLe6rvBUaUtyorRTu",
  "key30": "3j899dLWdkcNuk48vNm3Vp5QypNjqYXiq49FhJyuhCDf1ma8Px8UDitpXaigXetVzz7mHGKcDAVGAkYBRudfJKvi",
  "key31": "ynkHuKuNRPjfjc1fEmVcstoPynJAP6LELdr7ceJivkDJeEmCz8yMqRQPfhZSxHkrmPL6QftjxLM4Ba8nQ2dN3GF",
  "key32": "2hiMjTe8YtHVJYhphgV2gQivRYADrzRsD3fqD7EgigdfzunfQFaZUsRUhBkYU7PeGQrfyoNcPkKuWv9g5cCssCvP",
  "key33": "4WE84EDESGMxd4EVhVPWTnBdVYx4istx6tCT9czXPMBWj48saXZXc2mnw4KcrP5pNmfbcUubBuPUGJr8FKSAyFPX"
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
