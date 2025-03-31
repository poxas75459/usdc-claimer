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
    "4ccpSQagh3YdsEkXRwrEEdgmmVerz4MNGumo1jf6cKuYzMKwF5rtPmbmN6Bn5pzf4tbHxJQALFtCEoKGahHBuRR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m6asM8ibTqsdryDD8JmyLiyknynw2Eh6x1ce4RxVzsVnETzg38LAnHrEudfvyGprn8FUqiPLP8C8jFakG8RNmnj",
  "key1": "5rJeXZoQnkvYTmRZr9vccCRVdHkghHWS6HkJA7T2Jxc8DymFMVjcuFyiqZLw56BWB2G8d73rBTsrgybTPeUkVJPY",
  "key2": "2tAkPdWBMh8h6uKtZEjVwVVnQy8yU62JoSjjgDAfoRRhJyHKLZSJaQAmPY7BiecyhwUDG5a5tWYdbYMzPp8rpYFb",
  "key3": "4BUeE3vT52Fxdd4Ke3J75L9HZDfieD5twQL1J5aqdR9Y9GqGMKYs7EZPWT6R4xFUkqvdmXe6yX5b8ovJPJYSDt8n",
  "key4": "4xo4S176htQrD6Yr2xnuW6E5bkTmSFs6AB1pavyzhgCwxez3UkiTtKZmYYY7JHHqucrMVP14H6Nd21jsRgQ8ijDY",
  "key5": "pAR5maSk23xQMAeH6gVXgKgs4FR6jHmB4sb1BbxLzfadTHyVuDo5fzkPGaz2KyLtfi3sYeRrKriNpKbiyfPp3kt",
  "key6": "1x8EDL17rPPi91w3FU3JrGKm2WGqixn8dit818fdjZrH4QrkBB9ckscmRQvvqN8K9Z8V1Jou7Bhpp1j2hgagvBp",
  "key7": "5wG9QRmv2FXScSfUFU16goDTcxCHk6vJmRPyeQYUF3RSpNaZx26eZtCDQUyoQknBnWU44T72wekAWoWGgRRAEfne",
  "key8": "555E575bXA47ZpSxBFzkXieepZLw33drqLafb6zMxNLGJkj3BgnsjKo8EeRWHjbfMgcyyBhbtxRh4iL9xKERp4Ne",
  "key9": "34tMeHmenDtNrLp93jfFi2ja72CsUGEvjGd7QuC9g9yL5AxjhPeKfjE5YpwEoyGCuVyaBtZXeUmVJVFtQJ17SDTJ",
  "key10": "3BYuJdXrWPemmvYpkHDKfimbfFsye5c4bTZSZApJJPjYuyR84jdrrCdcrziQHUBZfEVWJ2iMetTWJnmaKDJJh1gQ",
  "key11": "TW3XD5nfxKHnnBy64jdr2t9g4rZqadyH8TY6bULsFZ9P8YLWkHe7kgrLd8DSg2k5PKjEau2G4MrDcJP1SYLXXst",
  "key12": "26bGcLCJ25iXrJnyzKuZ8TZiFwczFXwhD2Vg3cWtD7PWBSENVPRHC8TFKFKJ9UNRt4DcQxWrL87Wm3ZCzqptnQHv",
  "key13": "46fuZcF4pWHYaaAtnTUpAUT3bHya3hT3YHgAzYhUxLTKwsQ5EacKUg8Mo7Bd6MAQuqxyWyc6tEbiJbDyDoe5mYYv",
  "key14": "eqYoBbJqbZmWpDq1eKR7Qd6XGhmxf4tn6hyph4RUv1H2F87uqrQVUtSUVw2uFBeC4ztVNxqSrrXa6GLDdjVvagE",
  "key15": "2SteP4ngSP7bpvfXmVr6rzztPGpPLMjb55E6cmQ75Tx7kUYF5c4eV7EQDwgBae6SLtuuyDaTZDd4u3ZnY9wBsX6y",
  "key16": "2NN6meLerS1uVSTCujD9qPNyYEA7PgjzpqizPLEP8aFQ9qR5BoS8nNDXrVo1mPjCKiVieK1ZU9HCyoWKcUQdR8hU",
  "key17": "8Dn8kE2MGRb24DYtyCfKUfsMhQ3wpexWRew1NZNKHm3jwaYFzadeq7XuiYgNj2DY3TdKVHUKM6qHzsiJiDa1tbv",
  "key18": "5qGC7EZEqUC4kM2WYnKB4foXT3och1RkbMwqfdHSih78GScDjEz5N2A6rbpzw2ptcFrkvx1bhqjTBX5MCC2aYspd",
  "key19": "3jPnHQ6sSzXU5xgqwiwifZYbfiQ3AFZmuPtmyDfUpPsdX17D8Q2XZ6RPsx3Pyjeg9ei36pwGXjzPWmPd8j4k7cFY",
  "key20": "4NTYBZp3SiW6RtKWUBrYMibaaQc64n1B9UmfrnbZFQhdpkYx3aS7Ev1EC2hZ847rfucZmV1ThXK8DvAZD73b9S7N",
  "key21": "3W2fJk8ADHcVY1fYqn19mgqpZv8o9Jhwcer9E4FSEXszRb9RwxBtdKYwZdismBkxBjGRLbHjRnxeseHCXjWHFL7Q",
  "key22": "2htUZ5PZcHoAYjYh6CvaFbVc3aufA9sha1cec3JpcFum2hBM2sRSG1cwkAT5usC5Y315ikvqCDjtJbmmXaudUxit",
  "key23": "4XsgNgwHVpfS112R9nWFgokqMgAmVXCLqEv3ZHcjK75CeeeoTyeMGrRBxBpbxbp5zhDcXY1i33xYW2J8FS92E1XA",
  "key24": "4PajTKZTThenYwMt36V7EWRhFWei1Va1wg4AmGn9WvJdEbDZPnZdgarNGBttr64jdcmD7V6w5vB1YAY7kVr49kSe",
  "key25": "4LSrm857up7fc3HLzF8JbeYCETWPibZbDz79M2WyrZStmvhUjbiZ3Z3zZ1MX8xtcapTAUxCo29TKbhVguySemCL1",
  "key26": "3Qpt81yZVNwqar9hWz9YLo8exuYrHZ4sD6VTFLR44EXhW6YtAjDH9UbQWv1KKUhGejRNtVsBU8HdTikzgsWQcJpQ",
  "key27": "4eVWERGxDtYKdEVQE6zNRxRejTaRc9rfYxWwTX2diGAxeRqQHy2rXhdER7s7iEXpmZMRMD3ZeBbaaTfbNjk46zxH",
  "key28": "vARs3qG3gpmKc3GCKnxwUVchqGJCeVMNuU5ViFUoLwvJXDHVuGX42bfdPwigKvYYTDFJgTLzHnV5XKzS9zW6jJG",
  "key29": "ufKPiWGycb72hnRvJCCPa1hDwEKZwA2tWFAkFcQHkR11D1RVjRxZWDeLa9knW46mfrv5ydNBdDjRxXrK9d3kPbJ",
  "key30": "3imeSfwu65War55peiEYNVmuFH1xn7FU3ncVe2Hbrkj7NGGk85DnB7mBv6PCWqqcKx1wkguhJHgWYoZkNqmyhtjx",
  "key31": "4ra9VjEjjtMr4V1f3SFcfkUUkpTQHUqMd4JNhtXncAtcfLtzgfYHqGHrqetzxwJTRiK4ijKauX2UKJkeWEBbwpLv",
  "key32": "5DyH5ttNQmUDSk8nC4ntFFuafAvtDWUxTbQzgeM4tsdRYYqgYL2YSUimZ4MYtQYUsyMdADTbQNVJEQP8moCkQR7J",
  "key33": "5QNrC7RsskjirS3y3CZfCxY5k5TN1JMjhDX7BTh1KZ1wQjh59HHeoyJT4jSPg2SjrtNtiMywnNuSiChyioWdiWBq",
  "key34": "2SdgnB1Kg82dmz5jJcKFs9UuUXrcLwGiVX9umiLpArzcyTotNZmuSgFgJPWYBYBa2RTqDwUxQiMWBy8z1bZ5MvPD",
  "key35": "21MNxGfqGUBTRq9d5FjcgRgn8QBVS4cCTsZ8V4AtUXHi8USP7yRc6wTFYvGmHKJ1oAb5vYzmezjbHHHk1akPUcWn",
  "key36": "3f6RYDC5ZmnKGzYpys8XFp5EoZCRRqcE69ZhZqRfBG4gP4YzZ72dLFt5XAjY1WZNC61ekaawP7vsexVV1hbKcnbk",
  "key37": "2nRtKtZCacEBiCgXPqpcCQDpt8HX9D3U3Dc819uXxTvw6NrtnW3HFbSi4qiToMHHmvu5YjhqXFmw8wLcWU2ixqH5",
  "key38": "5C45XNkpQyGveMmN74Y9kshU9SUCkmYHVb2BXyekZKDZuttfLPoL5rhyWz1TJgvAEZ69vnxuAfVCGX1wXYnAPjva",
  "key39": "4q8CCzgvx6QxSE4TjXEaNLcUVm9q2XprMDcJhp9GNEYWBiaQWTCUdJY6WPCJBixTApinqsjBDTg4cVrZ16BJCEfv",
  "key40": "2zGaDHtZ14G1ucTZhpzc5fkFWnDVhUjVe2iEqjuHHJU71PrWYzW4xseZgfmDWwftnL317V5uGqyY3stAv8v4zdai",
  "key41": "3WCJ9CrPNB3SmJmdHRokBuc6JgPQyUqkrik4v6WkjgwHmnQVitDEo8WAYv768gkM1dDqgfSY4PwjS5HEAe8Pp6Po",
  "key42": "59VYzi4xMPjBewa2f8P9hC6LagiCnuctnp8N2qAD7offNKV9xCiSPK6M4uGhDaTJzrSxy7ExrSY4khcWd9rtZyYL",
  "key43": "2VcLGpuUQc4t5LcTbGXi2wJyiPLQXfLzUM3nBio3ecquHcHTuLio9haSKmHm31uXvHgmPa71xkj5dwZh7fGkqhDp",
  "key44": "2wpeDgxGgkWy6bs6uQVYgr235wRCRadqmuKd3XdzgKBHwj8bBYEfzciX44WYyoAQrKfdez43dabEQXXGiR4pv5vJ"
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
