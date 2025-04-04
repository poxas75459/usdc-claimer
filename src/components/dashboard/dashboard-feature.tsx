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
    "723KYgqLWr8kn89qaXbV7md3QQQsw7Ph3qXQNFd5ZQrykVt6WXkb85NwSd2UBkeqU8baLHHkKkgkiZBcwqrHTZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gauGVuWL5AVY1VbdLE1AbdmXdv1kVHPNTmFZfx74ZwShFyZ7RCm3gsZ3RncpU3V6u75BYS6SAE1NYZLcU7CmUup",
  "key1": "5EoCnv6j6GUrMU24JjzXkVswZ8Dy3qMr8daa5Fdj9m1gmqusaUq61zCxveo4ahQvSUqV54t7yGw1jwpKuzkb8VV9",
  "key2": "4ZMnzGBA6uUAUoDu8cNAHeCtsjdoL1NCWwqhBGfLyT7GMMvYAPdwQXB5Jqgd13CDbpwqP5ALNZ4Ln84fauYacpDT",
  "key3": "269c37gVsJ5Zod8ePs7mcZNhNYepGbEUk4Y2UtRYdaPww8SB3wP4sE8icjdxEUseMZLnZ5NQJnPyZB1iFmR32ye7",
  "key4": "3gWgcf4Sf8jtXwo5f8ZhqU3dHsv6Y7qUk7BT4D3WfiNRXcy8pSEg8rTLbUT5MiR728kMx3cV3Yg1nxWNHsnTjnS1",
  "key5": "4dpR3qGzb8iZKtVz19sf9hGNktkmmR91mtExFEznkseMGnWLcUaKckaUgTvhZGqDbpUC2xTJvDFkeqh7QkVNyip",
  "key6": "2Ur5Xxsk7ahN4pn8iFci1yC7Hg99oAtvphMyhwmuK1zABqNotx8ZwXpwVpfjLeSijErQUwEeM72rNW81y1MJpyQi",
  "key7": "5bBmHZAwC6KApi5tkshX2JCesm3EFRhezBVm4VbRXacx35VA1BSGz84JFLhTFB9VYYYehgAZPfykth2RpJM6qohT",
  "key8": "5TwcD2TX52Y4tjLWiUgdFMo7QydHJDt2USDgRvqSNWEFk2wBUVmw7ZMfEroPQrfpZnA1FGsvsEp4WH9RMQURLZX4",
  "key9": "5gDntuqvjGB4ySd1VenHm5tyH4U8jayKrcrQRHsFKCPTyqWHhP38ekdxAz1NUQDvEyVLvPySBXNBPiUACPAQAMxr",
  "key10": "5tnN3RA4rPWityoeNnvnAsCJG6vexU4cgZ5tPx6DrMUiR7NqfVcGWPiia6NTHpQ2svrGTLcRu6ECbW7y1fcyb1nv",
  "key11": "3uEuZvdnXbbsbBt6So7DJZ2RodDtXdvpkDod1k4LWvu5mE3USbNVYRffK98PnNFWuk1TDbMtJ7gUQMqn8bZT7uAj",
  "key12": "3NgUJ1XnTQxcrPkeoWHmfwxJKmXG96xq4t2oe6UU2dem5NC4t5sASAcrMPE8Viwgp9qfCsC3k9ALSC5LZizUp5G8",
  "key13": "2hnw7ujtBYTQePo2vi6PqQgMvJsjRo9zU1EiNAe9tyjLETs62VGV7M6XBnnkKv3xM4r27b3dbG3wCpazHsMEav3p",
  "key14": "fgCjC6ekNE4CooapJiumDx7w8XaL3BBJdgFF3FLVwpqkKctWKffrVCmtj2cFgbddfVRHpVsK1ic32KzxcMZ6PCt",
  "key15": "3qzMfWDcJEWgq7QtZw2guz2Umzj5zVMtrHpCJNEMxuroWtqgD3xWQVegLtncbvZHWA1jy7hQkCBcr6HgWjS8yUg7",
  "key16": "3ReeK8BWtQq5uHtEFLBLaTVs7HunHQak6gSeMPfx9VjrYJ5qvmJ4mauTqG6sXw8nXdvbkFqz62bNU8rjvDNPMbB9",
  "key17": "467kVvjLP5nrgc7ex6NwCMbg7VsUTb7bE4RxXbfTF1zgZ7STUNhSwcxMqV1teFj4dQhvqg2GnTRGy4zUxvz4hGWe",
  "key18": "61QCe9QtMMyX5xUo4cjiCb5hyeG25HYdThDdsihtLoKRdLwYej3KNUfFZd7Lk2f1Kh27cYcd5nq3nAgncHLLhxog",
  "key19": "3NqBm4LWC2AFknjayY6cQ1o1j5ufMdjWi7zst9oniLtsZHALT92wU3jhFz1CC5tLKSMxRy14caVdx7Z9S5Jdneeg",
  "key20": "3Ve975hMLTNQzBap7FHLw7F9y5Yj98QhgQhrkCrSj3Rhe7aJehPBcvFHGj23np3Ex8GT1h9JHJ2ewZqe1TL8LyGq",
  "key21": "5gSRLX7q4pGk2e8ARej2NUwLC3XPftKFhJirzp94xy9c42nRyCAyqLHkxGohpvfpYG5PhU9WYbdEVCETWxmXS2Xd",
  "key22": "664DhRx6teVDdvnQSoyZR3KXfAJVwYa5KxM4pZrPGXPP1VcGkfn2nerdxaV9GnWiBtAJSP2V5RSQp1kZFDHa6hTv",
  "key23": "2988Et27rcFqU19g7b9HWWxFuxtYaYejAc9mamToEcFRXReW3JXMifSR9VS9K4EmRmrgs4oCKuKokQzNNRKDX3BV",
  "key24": "5G5saRDyS15bLQbcf31yX1Z5yHn6Y7Dgx1QHo9gwFxQCAuAsZP5APDmAT9U8fFwc71puXmomnFKaJ9DEEdAp6b6z",
  "key25": "4qKtQUwLqDake6TQtVJgywKkctmBhpUHMpnjWdHSa54dS5SLHDpX41RgkVSX7CzyY6T263XArjTeRZEjvbFQ7qXN",
  "key26": "2qRy5XX4WHHL4xuLypBC83JJejYNQipKFcCKoWCvA7uhGCQ7HbQgV7HALW6srzJfEfUPpUCxHaMHwZ7FNiorHWYg",
  "key27": "A1cvrhSE15tNwVEG4LWcd9BHgV5jT4oDar334fXJR74zrjbortnwNapbv6GHfTy99Dhq7fGJV7DSsoi8Bh6sFBH",
  "key28": "2wNLGtwHbQaKWuQy8qeC1fbpbDCdqQZ9yzrjW7eXWpjKirLmHaWxyeCHXq12ExkUCSckcM3UBu3ZS56yiZpjHxrC",
  "key29": "2BXgpZhqMSLmswtwU5zhEeu7YXdZ473kbCbk4RdFvcNbviL6MjZdJPDWMbzHDL1AZHQTSy6GG62gGxeze6Lq1F2D",
  "key30": "2HWY1fqMM6YqHpMS3hMKMPfqa15u28Ctp5q8uGySv5tm9678Y65LMABovBNqfN9GzvNqnFJ3moes55RLw6ZxivL7",
  "key31": "3aXMBawv3omygpWf6d8q2mF8ktUSyrGDr3qheYCtx2tZiEEMd2WqV58cp4VRiATfe8iD6FJmbaxY7xnXWFqeEMbQ",
  "key32": "23VWUmfkyZMrNrJrCArZH7qhXc8cchm3mFzjt2nr8rbj46fijMPiommS8hnbd8exxPZfKq3zuSCg2efh8iFNCyGc",
  "key33": "4JoTwaHFVsAKovC1ncqvc6Wfd7ofyhf7YpQyjbZX8GesDSbH4rTXM6QcWfSCgaEsVPjXndsaiBC2idwG32ceNQKU",
  "key34": "XojpyU1rLmz5AehUzzkan8Sn4PXd5HtSUtZ5m8uqD7SdPBLRwM2MLVTZj7j6wHDArvM1oKL4YPGANYh5CABmax9",
  "key35": "wAPvSMMUzZMVtEG2rWSHeVKeA6rsqb97BHGj2j59vcqDiwDdN6X26D2P1ZfKc1SK4t1mFF6GtVNiUa9uCYq8jPX",
  "key36": "5SZBPwohHruPWDZXYNHV2mbaCidzQWtLTARdZKqzXBE8eT2jqBYxXnXS5HVQVzWHyKmT1fwW5AocPXKbPJjWVMNg"
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
