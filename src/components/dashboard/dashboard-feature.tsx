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
    "5MiXUCSdfK7yqmv9SZvpCCnfQARhT33J6EWWxGnj9Y6gxLJoyQEe1tjFYU7KLvcuoTEGmkCRUQP2dEgFTDKR4peb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e7CA2Z4V9a9rNPXDBkw9b7NWA6tK2Gx75nwcf7hqmjgpSiuUTT7Bu814SPTexN1TG9zjaLqgk2TCm1YBhQZyR7J",
  "key1": "3gAeedu3M8oZ24vVb8KzXj1N73esCFHXBE9FoiUN3M5vq6i5qK9Wnd2hvcEYbRAXDQCmPNC6C3Wucw9fdzLKTHck",
  "key2": "4iZoGwXi6mcPfaAUxkbFgqMbVoEj3gLwiSTXpXxS9D6DuimSh8mRL7vwgDsDdBZdfPWXaJz3nj3VW2uybdQ48UY2",
  "key3": "5rMq55Fyw9Fe2HftaFpR2sTfaY4hK2v6MQAYpvtuYt8eijJWRsiaH6dnSxepk7Ha7824spXET2hqCXuLwPNFTt6f",
  "key4": "5SqhcTCfeVaCodDr4n6834trdvpRGLMh5kHNPptJbx4snZ6rX5i8sMxRnVZ1rKHE4MVHNX9yTFYSjR3j4DszY2KT",
  "key5": "3JQ5ENXs2yLC5sUNyWbTQKi8oyGmhUD7JSprxx1hGH4neGUscAmoqhzDA5SaX4FQLBpJMWmS2izW9LthPF5MsXab",
  "key6": "5eCQemoPB8SU2qmUQwLNWR1PRNbdrpL19w1pVFMuauhr9zwrNNd84PvRrQ2QrMNJ7zr638fSjLWEtfMGrhSdLZwQ",
  "key7": "3TrwhWvz3W8fuB9rA953XWYsavBYjykNRJ2usM5DnP54fWcFa2dZfThLhe6Hsjqe9xf9SwM5QektvYfEaUAwvmJv",
  "key8": "3frwFkVqSy6cDiVfS3w4cMHFiyFacv7W6ZL94LACFQiXtRPFETLNRik8W2LzSjuCzAC64jU3msg7YaXudKcisb3c",
  "key9": "3R2XzjpErYQqXVhV6xbiVQVo4pEYtcJDiB4mLj9QqQ8e4cNFqXDeWNyW59VM3BvaBVqm6EbucCfSw7pyGtYrgPZk",
  "key10": "8hGLETpAr8FoA9zdA1MZCV67enibKM7ojLTFPN4pmBPTj48pEWL1Y5d7R2BH5D5aMjWaV3eycpnkjpSxTg2nvuB",
  "key11": "65pKC3MYMViygadP3MoL5ejh48kugV65SQKVWxxyJ1Jj2EgyAw3x7NE2DiHJiV3UUQHKopFhMcibnffjP6iCPouz",
  "key12": "4WPgVBvp8xTx8f3eY79hdX3Md4g46BSTMTt19pZA7d2QPqh5jKmXYbZvURxuPogvegzXQjg6hLf8HSJM2HytagGg",
  "key13": "3p75eQT9W7XnuiXCHsrnqcU3Za6JdoVdyWc6Uxui3gbijEe8GsPx5gohPsZiyj67LD6cgT1LDrVTUbpyR8SQyc3t",
  "key14": "23U2S4Ms9TmzKZDAcC99jNaMfeJXh1Qe47gvpbK6rnG6Xincfczu8mFiH4Ct46QcSNktnWduYacoYq1CDqau55TJ",
  "key15": "47Y58NdCcdaB8oCCcxjx1NhR5GveaCNtwWFCHsScC2uj17DLUCwW2mU6mEkL5ByqJNNfsrjswNsFxGWua7qds3wz",
  "key16": "5LpPEMSjnyWX9vXi3CRRG9cNGUERDQ2V74TtnrSjQHBZursKkLq7HrUGGsv6c1fSUGmvJgL6cq34rkdCoAuLbLse",
  "key17": "4d4QK9pEkczFHgPMqk5DSJa6mxkHrQXWFy4urE31NUukmxw7g6QJYGZz8HdFsg73kkfMn5s2vqmcTg5uaz8e5oAY",
  "key18": "3bqMNARd1ed2M8XKTibjLLwib1kzvuZUPj4zWW6CvnqXiHZiHvsS28TYdtV9t4NpTqx8q9R9xAXXQ8HTWh8bwC8k",
  "key19": "C4YwQDqvJyDojEUJwG8PGz6nqGcC8fsJgNi2TLyatypUcgoeWWe4DdZRC1waqyPWTMoi4Uy1mCMzgPLXSd8uuVX",
  "key20": "5fFXz2x2xZiuRSgT3KpKBaq6R7rVJNXMtS2qhwNGZzNnDwUAYW6qsfS9EFsUL4YS3b5qWwQ6XkJHCbMeBR8Ug5XA",
  "key21": "3Be8KYASXv38f2LEPKSXrjLLaGhn1qkTduPuaXstdYJuDRpPvDGcKVC9CZN7dfheyU8Wkoct5wd4F8XXbzxnYRXS",
  "key22": "3ZpTmEFPwZNthwGV9ViRzGHXWkwBHFJFSvWDcrWn6cuxBLLgHiSsASY7DBVR7y3g4tRQPpeWx1AA9mWbK1ttmdtF",
  "key23": "2onX1j1L32Sq4RorTkuAzpbkVpzK99k9J5NbjhtQZy5gH2NueJV2LY5EEEhTRQKP5gRfbf6zLwHZdZGDLBwi4tB8",
  "key24": "4y7jGpjwbzZpP6WvbbG7tq79zH9quvkoxS1gHsXFpbPM9SYtXR5HHZ5a6mhoVydaUa1ssKCwtuuSxFxiJaa5rFJa",
  "key25": "hC4BZ4cPnsXUvtKdJ1LaHANYE84DwUXkvuivao6i4SCrceC6HtLQZicCxrTTi3gr3J3cEkZKehhDZ9AwoiBptRE",
  "key26": "5WM26B3scsF8hpcvv8UKzVZRypfkV9JsGBwzZVUBXK5VhmHGs12YfbroZG1HQ6vUguGVZkSBpDN4uFZZHd1XGG3k",
  "key27": "gYzNibNUPS4YJYLtmUbaDrJK2zcK8j4C9BfRoACCe3JASrHgRYqpfFxN8kKw6yQdKefR1PssZoL1EVcEbnoL2Pc",
  "key28": "aed5AYKZmjgsAKcuAoua4QJFg1Uq3gDp4fqV6b2YotYofmog3gt2nb9QZURy2WVGEziq7pZvxjb6VS59N9NKwVm",
  "key29": "3xHQueSymudTF5Wkf6oBhh3g3tjjrLcEBMUs4xvA9CUucWVCXsV8a9Ag7Ve9n7L5nixCmTpEKbvWs7HtHC5TyBoL",
  "key30": "4UbCgWZ6ELXu2f78tVfB9qwYuF1NXSdnDEBwo7PwjVTrHEyZM7ySfc7sd3D9Km9HXwszhxZ4WzKSLK8iFiqwciDo",
  "key31": "A8zhgR7B54QxQF6t7mPcZBjjkaWp5WkgFQYdPsygRH6XmadBMygpxWfYifzcteaa77RQXtBQm92zLbW3YJvzu28",
  "key32": "iSXkY15ivNrM52CDnFqysURhfJWRzYg2bNJdyxEkdg58auR4uJmBcF3rWb4YvrQDLQu7wiv21BaaUSqFy9J7xrv",
  "key33": "4UdJG79Aem5ZTfJnrActyFq2ZFEcmt8EremmYRrTVRpTzTrVQme9xkf6sk7Tq7KwfrGvcmhfKXzZ8eaTwj7syDYX",
  "key34": "4zcqStC6ZezS1xWhrxXLvvs3PXxx4R5Em5WqPaiPeoAwcQbSQQcCyXyw5jqyxzxt5VZuEtQSFJrnnzqjTNL5UVJe",
  "key35": "2kWvt9SyeZ8KrmhuiYTJv1HzvB7f332RCoWUVgfX4AWrAJrT1orczfYSMgyhCWyLzvyT1CV7YiWG1cvy6DASHXFi",
  "key36": "3qP8r6rKkcBrGdRZmHWvB1oWJ6eKgWN5nRfKo7qBTxzX9QQXisL498Lp5fQkVn2HnUZQzfGsNM9eJRM2ia64xNeP",
  "key37": "3oHr5DdoBSKNxLNSPwjfYnfYvD1Wfx2Cbdoq7tqqX8PYgQmWw1CCRt3viEEyX8yjKeMKWTiiigoTJdmdKnbgtKTS",
  "key38": "2Sbs719L842gw6W3tBqzA7sUeL59i5JfsLYbBD4nAHBefEdTux8SVosPv4wmDSehVtaYCDRmkMj5fte11LsCqbEq"
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
