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
    "2DGHx4kCZx9rEMmfws3qidrdqEQRakc97uXNC9VqZ3rvw9zwbBvmUu8mfeLNTm8oYGHJaitkavrMtn4LSSn1gZAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wxF3BjuNGfEzpm5oKxnRY6LtTUBqX9H2LQ7DdYDM5EkJaWzntNzHUER4tcnakAxd6QcaW6FCTWaxZmPh9tgPZBM",
  "key1": "JEanjKHPW5zaGzxmSQ3mr1X4dEziW64adZTiseziZHb3ju4X9FyUjk8pGzV2gWKXKHGnTnFMPwy6F3JSmE9XcU5",
  "key2": "tizAyVkkH8GjDNqGp9Ei3Z8F7Q5a22rmtcKkhP6BD1JbxeeRnsLZeHVnW6yEwYtccPgeoB54DhLS7EbfPProib1",
  "key3": "4926UgRVxcCtGpReyQwbBTYdnHZCRFfbBt8fpEK6Lx6YyK6om9TjmWbWZAJj49nScNNShwpzdExTNvWbrpmf165M",
  "key4": "5Bp88QWptiUdNc2yoDSQLaVkhmv6ELxanBgA6ggRYeiwzqeNcTSs2cdXxm735AEfKJWHmgakdVZ3BFbVyDFz5khb",
  "key5": "47SvTBaVSswyjVWiEB3BYR9pRa7hB7rWmoSBoWFzNRU9P5NE1s5vapxbvCVXdLCABGKydcvMemiuFKsvdHsUNko7",
  "key6": "2LPRFe74iGocXaTULdaXAZGJSrru6BytZA1Gd8uD2GKqP1aEjoUsoiLUAqynmpFUaN1r9sBGZA32CrWZbEfApQ6m",
  "key7": "3Ssf8Q6VPj4kRfnMn1UYSuovPEVeeMxBTEAs9m3CKkFSKh5zuvju1zzyim6zjKBexmN3kVSCdbd5uAWM7DbnJHwY",
  "key8": "35cAWniMjqqg8BNgzviKFdzB5bbrBRigzvbzTt2QHtorYdkwgtq9hKVV8G8HjJMMsm7oGNXF3yv3yJBYvHNXrZRw",
  "key9": "7nYDVJdTaBk43VLv4CacHT3puoCp5DasBZ9Crc2pLhqQ2Ls3T9fktv4WeiFk5G3Fvz3xCzso8vmLzcS5hizYa17",
  "key10": "2vQ2g3jAqLgfq4GZaxMSsxrjAX5qkn1Mz5GME56vVnJd3uYxJtSq6yuCvSQ1xKm41GDQaqvbU44QbfF5s6aaw1D5",
  "key11": "2mwNch85C75cCcQuC9BW5khZ84ApA6GLg2NMCjGrP21RHh3YNrSYv8roZSLUyYMYYKXswzcSLNdLSbGSDeHmqKEY",
  "key12": "4a3bUSVQ7Ta7kLPsVpecoqJL4aWqTvvw8caFH6EeCkSmHC1DfWRCmth8otfZhkEN7hk4tPC9NsHR6aMWjc3YRtw9",
  "key13": "2ouHNwCaZ2rKWmdoCZSCYMeh9WJzf5VfE96UyLssWGmNnN5MP94TPu1RidXaNCiPdqN7uo96FsMcrPHQqMEQXGfT",
  "key14": "2KXG63i77PB3ZXUzPiGkh2sse8XhYrFKHRkz5mCWaLCpq6yqruWCfkHGB8iCSiu4HYPPVe6sXrowZ2t1Xj4ZDc8G",
  "key15": "24yfJRLF7BQNdRAmNBmBLzX5XWbH9YhhtAMPDpk1ec2TJLtpqTEwnKn16uycSeGo8mfooFPiEMNRtSBwfJmzRFfa",
  "key16": "3jt1tzVkax7pNboHUCEyMiQEtt4MYFaypHNaatBaE6wmFpK6awFjFGDcqFLBjRS8bmD3TA74wekhBeaHktFTXa7Y",
  "key17": "2pCahw3WJkMbpotgPXECULdWGSyeN7ayzAARA3dBmFqAqc8BeZ6mrRTT578iHpEhPTq6bVKqHZNn9yRdpnyyGBeo",
  "key18": "4rBUHDoqH9KQJvTDNr8aiFgSZVt8tFRMnM1ZeZQNyfJcD5aF7jsTEkERLcJH9iXFhf9oFkoq8RuC1njCzQY9Dy24",
  "key19": "ViraP25T3Lv4zeFskwwSLDZVa84yP3D6Xs14AXQj5oKyzAMsjjhvfVT749KMy14yQHw3YGFaohAroNPuCWPxTVP",
  "key20": "7nmWHTVWjiFig29Xy7pnVNvXDu5GDYrL3CHq3LcYo7N4V23e9DchK3bXB3rB8vLeM5aL68bH6UvcTK1Q3uraqdV",
  "key21": "5YawSJTPK8o6LFQVcQyEde5ugUfd7zT4Who9waLwa2RVDFRrs53bNY5BbAjBmRE7kc3UPjBDa7avqeDuWEoUwQ3S",
  "key22": "4LJhxJTZFZj4MdP66ecQQFpaizx8eUNcszX7Wfv1LzSgbEQ3TXp3AsPwToHjPMgM63tvcJjcrbA5gBuDjCQuKLtG",
  "key23": "5WDqvx1osaZ8j4rV2nEyGy8s1tkXwCu2gL7WUDYQq2U6h3ddopgzQe1B3QW9zopU8ki7RgLoFJ542jr8jX5GtXUh",
  "key24": "4MbYCDMooqWq8iNFPijVE8mhbN1s8qQB3PxmNngpRviEuNZyHHE8rdTxzjA4FPiwBZFhtYJKa3RPLWBRTc1HW5S7",
  "key25": "3bZQmrc6xg4HzoDTv8Qh9GheXGsPpLyFUPZhS1xaKiPYMrDzTFueEdPChnbdwuL2tEJKd9PGkJhW2HN9EKEiKH6c",
  "key26": "29W25PLkKrUgEwoBVxqZXmY1AhQxJHhbkdvWL326WKz9jt7KUaGSpy7fw3WRQzDW4XSsPAuJbLLtggWTRXJD3X7m",
  "key27": "4EH5gB3ZD7AyQLN1cSXFytBMhZkybYndxc8cduxe1CzzL3uAZqwoEp9fdsmKdM1yfno4PJdrFHXpoRB4X6BJei1T",
  "key28": "3Gg2iHQ9icZY9WNoZFR85gbKJcrxsj31TPQ8y1FMhEW21THWjVsSps7icb67WXyxBMfY22MYApvFxWTmrDWuLHGY"
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
