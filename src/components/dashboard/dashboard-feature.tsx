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
    "2ZLzfKvU1Gb3hYyShtpCTVpv7wJgMYN1Ta47RoRNJUcP3zU1bbSQvyfume54FVZQidxU6fKdhazoH3Zgvd7Fh3sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F913ZvZUXkdA93ANRkJWTYAEgmQ9Fop2vzfCWRjroActod7dYeB3Yet7EsL89HDJ1YLMaEEnjCpHbvBPExYv1uN",
  "key1": "2TTy4tLwFtsxXRPZqiRBu7B1ZYrGeajbMnmzoZFHMyHkQZNX7tDVE79SvZxRM3hdA4mQ38xuKcdNR6Z5K2vgoX2T",
  "key2": "2M3n4Db32ksTU3pG6iDdyVJKBGkQFCzQ8ZbCutLRQtLjHkr5cyHBHM9icc8qH3rzch29VQ7qoFaKc2tX43khPwLt",
  "key3": "4f4JTE5ZM21TvXo1Ng912AXDFnUusEjKq7LEiD8FabinyCLXgwgCkUY4UG92Jvm2mJQadNtg2Ds8pX1c1M1bBAMq",
  "key4": "3B3XR1nE9JeeKbvvPVwaHVxVveJVDzJvXiDUq39WVxG1JswZ4htm533RqKELJdhqewgCZn1DfJxajcq6cKeyQBnB",
  "key5": "3vQP6RwbH4GzUv6pV5NpYU5dtZEV33mqFeQSF37vPkgXyoNgzRP6MnqZefoVmpKvJNHWcJm7mPqdhnVzyqrFGih7",
  "key6": "bGfbZzf5AK4E67qL2gpnCG5Uqf48AkATryec4HdPsZ1Cj1GFxGHg5PiCrUvQGtzffvPHkDBDwUEYBo4eHxwdqWL",
  "key7": "3H7fuidw1wSKHwj7G1bagNM5WmqupnFEF7HbCzZaJQKdpHGPG7UbERBqwTrTCoRHCMHAoPy9K7KiSFnuXixUM6j4",
  "key8": "32Wa1629opUMpoXWmJVv8yQXRYAHyiG5zqdFqEkzKtxZfhmbU487xgRx1KFxi2oXKLdbCBgfCYtRfRZYw8AbGeWB",
  "key9": "5YxwJ3XV7LGDda1dgizD2VEgjvLqH8RbAALkQF9uwT7qd6EckcYWM5o7rjsbraRBW2u5VY9vCojwEDnqAMjv6Wbx",
  "key10": "4WMmwaVCxdbf6DxJaBbPkbV5JFss4z8RMv8b69gQkJ8xmFwMcRkAiov11CtVXEybeZUFv374ALLABCtTg1oyrbFP",
  "key11": "3Qb1j5Nne1pYGo7gzdWnDJXSsZGx9fyE2jWN5FYFttq2SyY6uwqUpe1N4JYwiAepGEKpEG5TCd5tNcu3Jq9CGoDn",
  "key12": "5gsFLJM2F7nsfKqKqUcAipL3e4zLn1ynpNcSTibyiSapFn2NbTmC4Gk3n9ViEahabPYovgSAhkDwgb5hJaFffEDL",
  "key13": "4xtxyTBYZMJ1BTPpSVqXXcbJ6XkeFT1MwxFP7Um2p3CvmAdWNLH2FsSVcJxoXgChJQ4BQz9vevKikUgirknSgNQM",
  "key14": "2J6CnEzmTBxd4uDbq12EFcepxRLqnDtGCca1SSdiMTbFiXD2S2n87xgFW8uiKri32Q9E5Zk1yaxrA7EANMBLvL8t",
  "key15": "5GCS2bqrZwyxpEGsDeL5MsAnVqVRJgK31xYJy6rYNJHD1sGv91iWzDFCXiZTTYJXFRZUoTmsRn9Dy8agUoMpYMb6",
  "key16": "3rJfaMMiHLQ6J2vSMkUjbRvZtxF9jG3vfvgMgmo5hWteEf4UXy35N8vWTGSBit89AdBANSU5F9uJsMAdEGf6jdyQ",
  "key17": "4PQecewUUQ5cweBkyAdKL6wmLTrJ6fwUJpQ9TuFug6UgF7Txv5RHDDPs3M4hmrvhLtc3MjZXe78UwNYg4LhvYpdc",
  "key18": "22zJ97HMWYqtXZ7chD6kPp1x3KmhjBFqXyxnbM8QU8z1WiDjPU2CJTeD9LjWEs4fmKtoPh11u5SrDgRxd8b61qN9",
  "key19": "qNegzQLeQxD9CGuWDsMWKgBfFBbzkMVEeiCxYsaow6bd36cgXuGrUEw6MBUgGFzbU93kH3hrZY3nGeVLw33RwFQ",
  "key20": "3orkhWnUwpne3fohUGh9m4rwHfRotDiGMGXcztYtUzpJeEYU9zABYN6t6erSuLAndANDjcoKvN1QqHYTWsc3ARaJ",
  "key21": "DLjXxeK886G1LQaUpBkXatiBTwLFJiCVqw4GHQJ5yXP1w4pvK3eZFT7SnWqV5TbVRUzrED4GX39bYHtMcdSVp8Q",
  "key22": "551KmENLD3w92KqWbgEvL1uzQSeRhEAjCx1tva7H29tesZGn6Ln4Njqi5Qthfr5kk61JghkLgofPuQBjSzNmSTGW",
  "key23": "3NjVkXZ38LPoCoCdxQCRmhKyaNh9DCpDJqTXqoH1as6Pwjf6LnafHw416T2Fog28g3ajbjpxMrbgy9vs2ZDpUtCk",
  "key24": "2Ag7NmV6z6mcDk355GBCRoWXWJcqW9VGgfCuhvMnMpV2crcPo6HEy9fjsRHo21s9MiChiztbDJc9FJHddX6VXht3",
  "key25": "kNhg6ZENKF22bT9dVjb7wjD9sVYU1dDu5DZUiy759HDVVG5GgGEF9XpsHh3W3BTMB3nRbbcSeyF9QePYKWCy1YP",
  "key26": "364F8Sb4Es5eGJnjc2JDb3ZVuaJNkssdLDvM2TYchbuqVFK5dd6TdzBV8LLZ5J9eEuk2muXDZcNL8Pwb9eLTJvN",
  "key27": "5fNEmy1kP2Asgb6KBfAwhCc1zScvwqJbyyozzimBTRuYsQqsdVJJohq1heFus9FGutZLt2zyCiz1zzgL4eK9si1S",
  "key28": "3kzBTrnKCx6PrFMz1epvciyocf8VztPCdY74ZrkvhoFZgh8TvD63QsVh2dC8xoHrybBCQ6wbP4rzcwY8cjdgxJCb",
  "key29": "4aftW1Uv7J6wLiaRt5VvZb8KsrkCUwSv1PNhnqhUMv65MBYJUbZKrV12oL5coPQJ1qnofsMTdkFGhSk9DiUetAcL",
  "key30": "4hyzAU8rqdFdpc537LBwvafndAt8wXUedV3w3Cd4DWbxv5V751yaPDPPkHLkpV1B8K1583S4oVqFH4t8WY7ob3md",
  "key31": "5j7R3j1NjS5THcLj5i1VuHB3RUKJVM9md1HY7deWvvJoLyrR31xYcswS4JYhX5z2PoW94SeLqAxcvfxogJD7sitd",
  "key32": "61CvZduW5YgDpJmmcc8EohG64WNM3TpBPueiqxhzLbJcWSTyCpasQJwMSDiK8M9A7F2ib6dBCV68xzYmN2sYUALZ",
  "key33": "3AugxQg6XNMpnL5L4btPyrkna5yUPrJ5S9mwhAsXEtqUnQW2DtxvNXyruiv883JaWrrUw7HQKi1fVby78mngLaGD",
  "key34": "2k8DFiuamUfbo4BYWSJhYWqsXZodD5iTwtzbQ8MzDVGBfR78WNNRBrTDS9cEgiYNrwZNdShhELbhDh1Ev6qUKV4N",
  "key35": "5utdfjPykpgrALcU1LtGVuCTxGEiCZ88Dm9nqgGXkAKYsAVGryPpfpK5ZjKyusFab6LsrHFMGZUH6bGLvGvBTvvv",
  "key36": "3WX9nMkQsDPNN6Vr6kAUvKXVzN5PxiMLF6p2mhNrB2oC7FsX5unoQsSTKnFHA96fuYt7Q3YtMD7zzBKbWtYThxZk",
  "key37": "37BVN4NmM1MLbLiiBYveJZW6ZDwQMiktnTC4RLotDWDznf9H9DGRR6aTU4WKMtVZZ19cr7zjtWe7EtKFXfTpvP8u",
  "key38": "wVQNgQtfu5aw72ZgcytbbwM6zwro1CBXoFSRDAKxAewRETu2TD9UKr4Kj6RzsYPo2Rg8EyBphtHwzSXT8zusUsj",
  "key39": "3t1uPojdP3VLgqW24X5CVQvcWmTwu2RapFgBGV6HLyvdChcXdUHekLugsszuZEpKa5uq2eEiP1amerfcmLttqHuj"
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
