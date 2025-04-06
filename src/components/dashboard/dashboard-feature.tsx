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
    "2RCeABSDUBmdZUsJpJaSuZmD3qYuK9fvEsS6idAknpXrGirnoj8pZkBV6Ho7Frow6L1Q5J6md5rMFeXqtzcXppBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X12gBPeWn132UEKwq8GBULffjHSA1iQjqaHZWjPustoRpM81LdiCQyz6Dktqx8iyABUHaM4V942tqZYf556Abti",
  "key1": "3dCY1H6aqKwaqKkXF6MrXaiwT8vsuXesikYh1ynKiX7rdhGtGjZ7QjcJazooPTSBkUnCQTNCyJeyQo97UYpGboNo",
  "key2": "3u9emJYWoUpBVK5ePhhsPMQFMBuMFdVB65dc9RjAAx3svFxDyR7MNzdPfrgioYakv7pUKgu3bWZ3ie7PH97VWUiN",
  "key3": "3gbKsJDRFZD6qkCyuMJHPtMw5VZBXZQZM5yGbbumw9oFYmYUJPMjFWi5rJfaeQXPTHt7KvNfUYGU8xZj51SJcviu",
  "key4": "4Rf78qBd8rtbNgYLqxAidhQsS3FscS4X5JGp24i9PLjrJXNfLSnqwFo4TRFkZFY9Te5MTtDyGNMyTwxvYSnrBatS",
  "key5": "4hwS9z9mazQjqtmfs8cszBhLoEQrVKP771vRgUYvvF46kcmkyijt57fgu3hJc7Uw7nkPFRNNZ7mCPfmA3UPwUrSQ",
  "key6": "2bQSgsveetx5NN5ttSWN9GJhCHyEwUkYnzDzcTd8RKrxzadBfPLZrndmwEqXPCFxVE6cZc8vxoQdvGsyNA7GhuBW",
  "key7": "5ZjB2Q4G2WWuBJNiqSSS8vGBLyoKqVu3wnm6hFzMHSE9DiCRrYU3Zt5WxFVypZei7q6zHwLSXvQKoJTDFuHFSmec",
  "key8": "2oTMw4cPBN8jeVey6hUV8yQPMMvQ5kYyHTkN4EVHePTt3xK8HBasCSkiywaHDxGntK7ZwE7XAgyMJn1CCN6jSdvH",
  "key9": "64uYi9DkuxyshF2syvJUJsWsRtnqU2cTHGEak5Wqf44gURaouUthfCMo4z4uASAuPfiAbBYyeaqNK572e6ctyXaR",
  "key10": "2atwoBNUfXmwmvtNnai8EgyidssVgMaTPT3ThJpeA1h7x5T8ehXwTAkWN7g6LHSPWwTgVrXbbj8tyYedmhcbdBgD",
  "key11": "4v6euEPvDnH6AtpbT9Jy1QASW7pEXKG1deMC7CTvYEZbYgLEwsdhtivZ1inveS437QjbTa1KEkG4ixmhVE8GjBPJ",
  "key12": "4TBAkdTA6dmCHutV7z4U8r8jT3efY8fKJ3sUbZYMJwEjf5R9gRS7nVALNgzfG2E6VGp1BbuWM7jXpjKVzXgTm2kg",
  "key13": "4DzDrP9wRyQ7peaXBSLVrJezFXRZwBa45jxRGUgU1C5upqjrgXEK8knT3NEdegTtjM3U5HoTCeoCEoYfG48ZTp2R",
  "key14": "5tzEpNzP8Fd16tb9rZ8DtubfqBA1XPqYRsQbEK2wQcDk1sqyEr8bh6PQ4uekjikmZgtZ7Rip4Z9Le67bpBj2TqgG",
  "key15": "4oz9swP3JazPVu9cVSkDocfD4gZHQmTvn66QJygYY2x1dzYCNGws3Hy1VssnCGr5vaxbjafg8VW811CdWJ72VQ8f",
  "key16": "4NoXD5bHPowYAWbT25ktppKZ2VDnt5MK8ESm9FtY9jmJWrVRQSqLatG32Dj5iW3bEhLNBD7cpsTa1yxDfJmxjgvu",
  "key17": "WqEj2o77jioov3PkmZapVqw3Qmeo9Xb64LGdJE75UJfZx7zAF1fAXqmDdR57zLouwHFkRc2iy5J48mfPegfsLjP",
  "key18": "FZXvfH1Ji9Y5Cwg5gejg2m96UypnF7pT7EdebypEmMPULWL7tBHC73JXgxTLN87T4CVoTgkVXjg9XYNjX9LSH5Y",
  "key19": "bJauDssPZCtMn2mWPW75L5XXXfN8bfD1rd1e3KWRfUjLzv4q3aUy4Aj4HoQZQH9johLyyu2Qh9Ajb5YytZ4Z1ei",
  "key20": "5MgqL12RZt9rVKNoKUKnBiT9JVc2ujEdzjQSxkrfdmD5SBT17HFA1eHLc1r3EKUjrtpZi1VJWDgp7JVdBK8sdDed",
  "key21": "4FQedqoEr6Fqrjs2o5mPveYE3qSPLmGHWPt4ZCGKZSQdjzDEV284ey1YodoQWfiY7dL6DZd3CQR1s5YxfUk4QTFD",
  "key22": "46smXiH2kzjakFg8WyEqEitxtv61Gfb4fvW4tQbsbMLmpMniox7iLDeLh8frnWhbvPx3bvHQvDaWQiVyg9VZ7U18",
  "key23": "BAKMedfcE3V45iGVy811vdnnYZ2yXYPeffoWktsrnWTQCLxxYEETfYoKFtscqCSCzQTrai7A9ps3WXPuPNkWD5T",
  "key24": "44mjerqn4Qgbji2u5SfoghLzU1cyhFtetxtMCYPjCUVP7r7qDk7i5VzKkjjyLxNPbm5SfVVPPPQdMj4qYZoL6nzf",
  "key25": "42pjotsRzSZNJ5ndhEV2bCcECvDRfsgWF7V9s9mSu7y34gJ3vkUTVKvq7y3e7bzYWeCVqyvFifiCg9NBnowaE4xC",
  "key26": "ZGynY2hMsPT4EmFj3qf6AvG4PSbLSK79jxbQKzJeKWP59zdnkCRTE6FwzRLEBxcj9hWw9zPbQYeXYagp3sxQKz9",
  "key27": "3NtJFCjcjcNYKBV4492rbxKm3WNzJaEGBQLW5mwwpPfrhPsM8xurUQxc8ZDy7g3usQQYS96fPCwUvLvFr5sCViNS",
  "key28": "2wSnAX8AbiCaTivVPBT138QuYGToi2D5k2ywb5aNNLMkzsGVk66trnvzxUmyBZkAxen3QEi8vTEe8pUJKmg8Wmp9"
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
