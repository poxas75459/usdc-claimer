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
    "5DvFm34MuR5ZoeBZ5cVtXCwQMMGKVMBrKTpsZQUKePWP88Adga88cdwyVxkpEmf4Fi98xKq5TGcoU6eQNssJDmpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYYcPiLxipBxoBS27Pj4BqQP2ucJ9cpG7aJM2QDn6buyq9PmP9UvtLtaYR4qC6LVnNu8jpseBaUT2GR8FsBk8w6",
  "key1": "5H2vkc8QuqcgghgohWiAS6idSNSfxradjUYzSzRC1r6YrsErAPmBDfEfw7j4o8B8yE7bb9CQT7F7njFKh1VcJ6Jg",
  "key2": "5fwAXXYBRq4xZSkkkpPhaMwvovzD7c6y2BU4mGZsS3YUHSTkk5ZyoPAT4rVftGhw3UtuEKJtnmuVupPqSHSCNh7f",
  "key3": "8Xkc1stRAgXGCTHRggYpoCg9YNEGt5eUtc9RxXBozdjJJuk3T5Tx5wBBuiFcDbtgc4LNG1apP58YKFDy38yV6jX",
  "key4": "2cpfkgpB5XMBxuYdy4rE9tu3WtKKWMBy6y2XzDRBXcjpFi76qofGDL8bA2qqY48GG24ECfk8chbBxRP3SkNhX79g",
  "key5": "3NgCdRPjoobxS2cnucJVD6JLV56LrJRrGVYTKgrU9ZScpqp18gXqiF8LrTBWNqpSUpexv7CZR2fzJfjmANN3o5Lk",
  "key6": "4NxAuKCdn5KaMDbH6o1GPSTKDfTTKFwR5j6PVJo3Rrr2LspCAD265HLaXBxU1YxFFKEqCAXkJMuRY9Ri3fBqiLYd",
  "key7": "HbTx7tnGTrsxJ7cDVtzEbKHYqt8t2yi7yhKSp8cgqz7Pey1HJ3YrcFfyDwGvwib55gToJ8q5yJhV8UBph9HzkK6",
  "key8": "4SJxGbFkwwuqTu8KSAQxABCNfa7NVTGptRafyVwoCbzDTh9s6XiM37C4iCreMkXXoiegfTaJH6zCVcoShzpwqE1f",
  "key9": "5AeJC8etooPQMr6bss6UUt7BqHewQ3szWyhiNzuJLncNLoaKqBLUJUDp1DqYvF8JBFYg23h7MBgzhVvan5zFwqXF",
  "key10": "Bw18Y9wi9yvd7sQp6S5yXpDAZKQdsRA5A694wX9cbqFdc9nRVojKy12pJxYB8LLScEG7F42pUe5oPLLuN2XSmhx",
  "key11": "56g75kJ5fPWzU7kETdTbuVjjFXKUGQBQRSthoHBYNCyAiTgZVTdJGao4uo7FGt8d2RuvU7t8DD9XtSLM3MzjzXdE",
  "key12": "3MBqKymRTGKkk6DDPtCZw7YiX4hbdtiriBBgmZdY5CamYZ5K3nYsmJKps4hzhvU3kfHxTzfy6tP6uvFr8jWe9SyE",
  "key13": "5gvJY8C2iw2LfNg5HGwRi6jnT9YweRtcgzwCVDvLTEd1zh2Rn8Y9ZQ13q1D4Z6b43RFp5qjM1z6uLk26fQcA2kt5",
  "key14": "4rBfSvMGRMpJyVjnL5b5dsheh3vWnYoSs6rV6PP65GDXcvYhqHRxsamvnB4KTbPjwHeQ9vgfSkAzF7JC2HTrmv7M",
  "key15": "3AfU979eqLG4hwwAjApenunopF5MACqXWTQVPRtQS7jdc5GTbbrhqkq8y8zXcmr3tQTbZWp2wtoNUnrrjMzX8EFe",
  "key16": "4ZEaAj6PqvJHm9t6gfEyz1XDWFUoTbHBJAxs3MyeYozpMvmGPdyEtVJXwaq3G3cVhyE7FdqtJv78jZffGQ6h5956",
  "key17": "5VD7dPYCJewJ81DexiSnanohmAjJTjAVkZj1y9UgkuHJitdPnvUaerMgKkHq7SATmhoMwT37dyccxcsfQXfZhiAy",
  "key18": "2yEjhFZiAEzpMtohByNC9QbWZcPVJSn8Lrxe4S6B912wUg3rHtrKR1uz64PSSDFAG2sYHv2RBL1yMBPDE2rrT5qr",
  "key19": "2TjPQWPi5uQ6fdVVzfe4W3U55AtbvJ4Ca1pNoTjXZAApBiw7p8VTQKaNR3aMLx1bbwfMUjPHEtraeLNtsoEWRzZ1",
  "key20": "5eeb6vSUxA1hcPgweXn6Bq4uHqkfzBWkA2Yo15dQYj96cyH85a25SCHidgZhrW66Bk8cUyC9te9Nn8Q7F2JxRJTm",
  "key21": "3hnF6D1ie2We4dtqxtLsa7wWDd2UASLsJAivmRtvwZrqcAsSUrNzyjUMoLUNPS1MM9GvrDNBYw5qZfYHmtpknXTK",
  "key22": "2jDzNFMWGCJ3S3U5vCGf98zJbddr4rwvrksv4ZsLe6rzbwgrmoeLj5yukc7fTGMde891fEDz46PwJ22ezEjApEsy",
  "key23": "4pvzQunqcxt1sGSToxoCtQKpt9UrzxsSF3Fcj7Pqnc2VuJcVPURbgGHp6KVG1Zh91FMmPpBuwNbSjfx8rRLcnH7G",
  "key24": "4FAYP6djHEa8E6sWz7gaovQKtmBZ7CtbYibddhk7C2ujb6UsdC81Q5jY7z6VhAZf6NroScMFc3RTgDMuStB9BDAe",
  "key25": "2U1ggdH7t4YYApj8i5eMuXb4h27akghdkuL6HddqE57DpeRBVvFJmppAfVfWF4Qd7EaQJWKibWLyLRZPWgd3YebR",
  "key26": "5QCh3JEUxJM6n1SSiuiAFzA3gESCMnfDi3pfPxX21GJB4T43NabFVatpifYoPqiLxXiUAMjGdSbNFdLoGh4j9fxe",
  "key27": "5Yy9k8HjskgPHXbXRJ8b1N6UbSEormrpmJtQdh87WmQaBq3bv98aqafJ6rFGg2WdMWpaha6zNTGgeuwdh3afvoJH",
  "key28": "6Cf88CvGLRWbgmgXsVws8n9nNLc7pDjKXnYcV8HfvhUJ5jcpb3vtjTUg9jthViFAEHZmPkSSYmuVvpqVa2SxvgR",
  "key29": "5a8qqvkbw9Xdr8VCqDcFY6Axos8NT28yzpiBS7e1NEJKrxSUMJW9Wc1m5hTHMCtG82W8wPi1Y3KALd8eTfiJbhWL",
  "key30": "3axinLzLjS3pFTzPbGn93DDdpjZ3J4CDsPYWPmK3zxoix68q7bLTAr7XQJ5UKBNrALWVZJer1NqUbT1jSwCaJfDV",
  "key31": "3Y1UvqJQn384sq3Ee4qBgwLir3LQcXHmGVom8GXpZWsxGsrZQgh3DJwdL46q3a2nh1ubJUg77GHY47s3PYuWxwp2",
  "key32": "2yGD5kX4sLDx22frWgvB9X1mmvX5r7tHDXJTsNq8YgLXc9C1e3qWWrPkD3Pbctpf91ocqpGKpt2ywdvVRtEp4Drx",
  "key33": "4JDDrtkWpfVQcBnM2mTiis9JnckhV7WMvbi65Xrro1qTZeyzX7cvBeqnQGw7kTFKSKJn4PAatv82YSpYn4Y9sQah"
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
