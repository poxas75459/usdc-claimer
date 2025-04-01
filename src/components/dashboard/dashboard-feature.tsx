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
    "3tJcLhCTbUf7cYrmPngiqysu9fTqnkVaULcfg4CeHuR3hr25LZp7yqJ5JFyww8TTdA7QC2mhowQYTCyG8Poet6T2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "532dCsYjLpTwHLTThDdv1VfQopW7oa7tCU1ALz8zGrLTPejgXTMSEaj7jUCnRGtyRv3GTWVxbtcYo7rivviSffQg",
  "key1": "4vVVCx5G96H3oS5mCregt5xJRVJkfmy6i5T9HumcU3TJ86vbPytsL6dSHnfWecfB4ZemVFYS4nA4qbpC6LmQAS25",
  "key2": "4F684D2QCiajAqnGcyqrSEgHVEPg7zu17mqXMRkoEGdmxBSqk5s5HVv5frBynviH8ZEwnFAHJfrFrAeNe7girAdQ",
  "key3": "ZCu56x1mQX2VoMQ6nNdHcBqoPBw1fWaV8ztg9TfnX5qT8M7kS6TTUWYnRqZhYHoZHdndHYposdJaXqXnfctzujn",
  "key4": "5girMiQ71LUvKrNfHsBEjtYYKRTuuvK7oo8XaAF7WKzHd7UbzbkRVkVV4115ZdE8jLn8vgYXXUR7faQ9rYkW1aJc",
  "key5": "2jBZ53WeuKrwyo3HfKukjaYXWHrrFE77Zqsx8P4zBhJSWBV7B4jAA5nyKTaoMxdvZbgUp6zMfbETjPD6GXUPKABf",
  "key6": "2h6dA298LoCAt7E5Z5i6Aum3PXXiVLVsyEftRv8WLSZMrocYaQmm1an81T2KjzMVW1EqEADn6JDXk9spLJ1Fk1Mt",
  "key7": "WYjUt6tssAR4B9g8eW9HHswirSfUrAADkSHsRAXKHB3Hf2Dv2QvcCkGa1vgYQQvjrkaDR8YefenQRUUMzSUsrWS",
  "key8": "27Ht9J1NMk5aNwtHo4VDuEumvTs6Qu9Nc5niZHz1aVKoHr6nHjjXqjeT4r5wgxUMTtmo8e38a2ptymsMapVSmVwX",
  "key9": "42otmx1uxnZJpknkPNBXKb26u9p4GQFMXYCEw8prFVrcU9nWsXLzoCHYoec3xX4aR1N72TYrARychC72uQp8KEjC",
  "key10": "4JUxVk3Ud2HRyz7a71rd1UK7PSPDBc1pYyYqgH2TUn8p7zb4UbBuWVWa2RaiPrZNuFV6ZE9uBG48fqakWeyj5Rmh",
  "key11": "5de8ZsfBoV3ejoa9earxkPYcPyqNWAdgfERBga6DeiF5gGZaEZn4tuhYUfErBKdaZcfcH6fxFeRpL7PFw2Cvx5xs",
  "key12": "63EHqE5T9d6qdF8bSdj2cqRXbHypyRHaZKwKrF5CvdUA8SgZkSLwXU8ccqRrBoXkd2oemWPTMj4gRGheCFbHhgPT",
  "key13": "3X4LirCEbi1dMDUaCQUPh6pN18jcApJgcotwf2sGr8qrUkYEsov7fA1swPSE6mLsvYih5k8q7Xe7WmmzhNU2cQx7",
  "key14": "2f7puj4co5KXR7H7fYMoFhi1UqzPBcMgdmhVA5GvcbrYREhRUtMXFraxwT6wS8gvoKE71eFXWkuwBxHhLFzg5sYj",
  "key15": "4HLfz6AWDBD1dxNh8PqmmLkuJvaaiwk4WPbBCPTTWrpTy8rHCCkNjSfkZ3joj2qh4Y9ArH9kF7V7iccjuWymCo8m",
  "key16": "2cnKx51o7SE9HkiPuYAuHM2vqTMbgM7wRU8qFAPpFztA2iG5zB85dCZ3B6hrfNgwYgZcgJkGkGi8685RUakwzYnZ",
  "key17": "2Dcqg1A48fD7t5xzG9vbtEXrTmsPko5ZMt8PHTQyZ5v3KeWGxsdYDi9Xxth7Yyfk8HH2vcejkZdtBSoKCJ1sP5W5",
  "key18": "9LGptZu3E1hkx83DUHzdPuH2bGAjVixUs7zhry46wkcPjao2PAn39WH4xC6S4kFxYrdtEEjEQJM8uQHWpaKVCKA",
  "key19": "W9aoxgHsNU1VK2bQyqubvmGbUkvYSMqiAhHCU8pVS9chGroL1EF48nufoYYEBKtyE4kFgeVsxQDizGD77kLVF39",
  "key20": "2jvTrBAkQt7GKt2A33AiS8kkxmtpyZ286XmTeBv63jC8PfnckcRcDgh2rjCFF9ifMReUfj8eyHkFzkHLsKeq1oxe",
  "key21": "4hfE1Y2tyHhKmz5LrLiFhsoVZQwZ7NxSePQTyxi6ZHt6z6wA4G5pmHWATtxWWyP7VTFzu3vToYpX2VMNLi3As1md",
  "key22": "2t9wgCJ5WdyBFYFxxkSzeHp4ReVfye5xRcQ7bWo5uvdQEAaikJ2bXNknG9Zpi8SJmhb89sgLgyvjo3Vg2uqNaExt",
  "key23": "3HGTjBSYFWMf2JctqAWAh2KF7qo872kVDLham9hcrV8XfwdEyPfQcnjDmsm4m5zEjifPeAZm5HaLsEk8DnYKqFHV",
  "key24": "4wuhAZUsWbf2aEhg2QhUaorNkivFFrpi8TKYpgG9nu9Ko8wnyJUu5gwTJU8AScu7jzMT6i1bK5rae6jcjUXZozyg",
  "key25": "3RwBygZYcVdSJgkEFmPY1bAPeN2Qm5mcaMFr7EKebNBEWQ4LYbMJ9J1Msyrr4ei8Beoe4qKuVqNkQHAoM4qP2ppj",
  "key26": "4aUJ6MAzbZsFRvs6uL2oFs6k5sUh8FZK7iKu7z6r8nJPEmx88Gaf8WyF1LwwDixjffAp51osHgaby8BTDZVWqgZ4",
  "key27": "24Q5zPGpfdXMSHczF5EuSKXjPVbUAsxHmxujxXBsETCocCYA5odfq3maYcjdXxbcsM3rBXLLoCPcf4wJkAU4EBKt",
  "key28": "4q65UVsV8mGa47icvgvky3FVQzBH4HXJJqHGV3SpPPTYDVKKJAHJr38ToZzLVavmX7aucbv549Sdx1eZaWJpkCw3",
  "key29": "2yJSq7Y4GEf4RpdrcuETbhT7JCdETVzeEmvesRtGx4FFcNu1ZRiCNcScCosjLUbuYSneA8aYG5ANWz43x3cjVRJH"
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
