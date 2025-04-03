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
    "3WZJPdZfotXgTfNgULS5sZPEB5QNnhQf8UCVCrh3s5EjSpiVAG3GGKgkcAfTEAfYqgAZTAojaXJyxP8i66nwEWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZB1c19HhehWpr8gyVrkMfvU5iHKZqSiwXe25yqarTeT6VfBsEpbTio57JnbxPks96DmkZzDPQDuXpYLxokPG7K",
  "key1": "3yuNoKhRVRuGVenBcsr1nSCHBD5jNXufsSm26HkTcAMCW558aR76oHBEJjinKGYBMw63Yt5Y1DVcqRUvK74GuKXG",
  "key2": "Sjn81YWfTyjQjmdfvsnCG9swQK3m3bZdeahayuSzZDppXGvfABQAKSNKqmPuT7UMxWmYdmmhtBkkKBPxfa8tB3T",
  "key3": "5X4riJEdzwJoLFFCHCYXwvh5qzLZ7igvNUh7tTqCMU1WRoRuSJcVsoNZCo1kPQg8qUyUfmCKNF8FLWmjrbYAYLDd",
  "key4": "4VmyTU2QnSEZvvah5cUQr59WMtnZQtvZ3qomNPHMF9hHoYienS8ZJPaDHraKkrfpGiJLK1A4LUacgeyB4ecW7scu",
  "key5": "2QovuzgvMdrZgv2U5ZQfJGxVKACowP5BTaC28g5A9PfzwpjJ8VZmBynAdfXzJ2s3hK2yDh4aGbVfWgqSSxqHqPGP",
  "key6": "61rMvk7tGgF9QFc7V4aLajkAzzQNAbmb3Z6a8debrrfHU8rqnFTkp5EiGLjtyZDp7D3iFff8j9Yy2qAQ8N3sPKZF",
  "key7": "A8o5MVF82T683Hn9ZiVWBEB3gXN5u4HT3XnVzHxkPgoXDuEs61S2sQVMw5k371vYug8RuPcNTXNfuesEwpzGe4s",
  "key8": "VQV9qEWnHUCvdFZNineF2DfMCCN6gJux5Us3nRCS8nktJ9caCkj8TseY5McfudqGgTW9Z4s6pf4wDTw7D24CMAQ",
  "key9": "2xzRW288xGtGMwpPi1g7fe7T1ohZ5kNaBo9E2aC51xFouiPfYFQZT21HDKiNWKdTw7VjwjnV4efzs2zRqNLTPsPR",
  "key10": "3veCDQNsk78pQAHpkJxuw7rrfvdLJLEcYXJsGg38s7AUJBDyFMjyFHxEnSTBjumG2WY1sUbvJuzGrCqrkh6VN7bz",
  "key11": "2kSDhYJodFbuUYUUUbbv23LRHrNLVG4MxrXhkuFRbnA9Su3b1zRMryKFdHVjurub6TpwpfoezFf5ixoyBD5Mto86",
  "key12": "2fmwLF16qiD8TorTUUn6AJoJGPGDpRwaCG2Yp5YMnFmZRuk6eMfVwtgQ6zaaHwJso3KqjWqjyVg3Lu3wQjjq91uA",
  "key13": "QNEYo23WKQwRyLqprg8uWLgnc5jU3QzwGkmHRtnNTyM7PzFNV4xjZKS97NEiCCScAp2MQK3dRDN663CPQemU1io",
  "key14": "26BKLpMZNB48oBwqwV8eH672qHUSor3S9nRJVvhvgtM5UEQpYibHpTgFbny62zDCiEUy5DRaRcGEtyrMt9fYNKrn",
  "key15": "62ruCxFpCDhXRQWVHYMyzBxmipPWYGUUfyiKbyQwBtPSPLf9btos7PvZTHPopSa32FLBUi2jB3DUXPFUMdFfypT9",
  "key16": "Bc7Bk9hrcsYeqFridr882oovL5vX8CWEZFeYJXNkZgeKM8w8ASnr6LfeLgBkQdUkr3XX96EwPUjdjKDSxfDPwL2",
  "key17": "5Sev6bkxXGvdcRbC9zqsUdA58g6Fswh3ms5QKsXs9Eh3CeFuqKPQjxrnBnzRyde7oP1DmGJZWC1StjxZyVGGVFcN",
  "key18": "5oTrt6mijhxTjmvJ29rGKxdZdkefxjZ5UCiHpaV2N4RQNiKoKp9ra7wcM3NLXft8bqJiDvits2E9G6i7Mxekz2oV",
  "key19": "4MX224RcHehypGH7qauTi2mbKFvQBgYMcuXfwA45rWiQy9rB6QVZhbTrZNvA6H6Y9xLHjyR8bdxvfPsrnjN218CQ",
  "key20": "23avW9G3wnjgBLLCb7eQiWTEKN3xM4Fb6ggzqpbg8tmcpFbe4Xco1E1eEABn6DcAeFnMMuLhU4ZcrmJBnqiJkBRN",
  "key21": "2otc3yJfJdSn2SPEojNUVQMTpXhaTEfeqQcsXfobXJ1pV2pvRt3eSSWUGdkxX5MhsKJ4sfeekLbUdoCch8kSTh4Y",
  "key22": "E5cZALUonshbcUyLn8DRwS6g99YgzGekSWvAZXUWetppfhzaH7sWcgp1MwG6YuWaYTadTN4xNTusa4CqhPv2PdD",
  "key23": "2xfgBjPrK94a7qK62pdH7sfMHv4kDR1EvKj1qu46HcaUh3Eca5xSqQaTdnL8JfdqeNkeDeAtLBrZ3ETHZrV9YiJm",
  "key24": "388zSN4Yb4yVbBFW5oBXCis3hdfmahxsCyErq6S3H52A8t2HyLTz8nq3eecZ9R2CAhsCpPP6tQqjFAd3iDA6FBJd",
  "key25": "3B83QRdRyWQZmxEbiZ8j3V9s6ZMURNax7xqyKMN3cmijBWGfkej3tCjk7hZquo8L7xVRvYAUTCVaMairxnNQk4xK",
  "key26": "jkLRWNoEHvUqbXLas17ZPi3FbVAS3a9CSfwbRqopbTCusYcgpWhJbAiRjRPkq3ecgpeNuapwrQ3U3C4vQWXDc4b",
  "key27": "7RjazLmFeChkyJTqR2sDqZLDLsv34EXLH3nCLtFXGhH9smF1BC5cF5fNarqiKwpbNWzTA9Ac8ioVQnG1sYGJcp5",
  "key28": "4Zk4jHJkJNfhzdVRBWvPuhrGqWSEzK7k5zgoMHQAjXYMnvdDHQjaKUpaDHvN7buKci3Spct1Qxy451EnkCaTCtE9",
  "key29": "2AF9PzuExPGgeovXZQcGjf29shEbyTsfcnCRecCYmWWPf9N9eunEMtbaHg41vqcqtsY3jr6wC2D2s19o27hZv8hG",
  "key30": "3qVQgjbKLSsBVoi1RMhsFDjazrkfLpoKVTcat9g7vKE929ZRsTyrk1as3XzEZphd3SPcCJebRDMhe2QuhKeZvyZE",
  "key31": "4ASBt8H6VDHDetQHewFAFCgfDA9jZobVidwEdC4xNT27mCfSur4bMt8DpkSdDTesw3EjdST7AdN1nmZarksCigSY",
  "key32": "2QMkETzVhfaeu8oNg4VTEjw9Mb9HZgreg1LYPhbNF4JDtJGugC8C5ZfHdJMbL9YJ4uq8b1dy7QHtiq9ZxVLSQJkj",
  "key33": "4XkcFVxtbpF3cGFdP5pWgGaqxfyeCJw9wnMesiz3Fqb7VUBQctvsNxqnGaPp4xaEfjRuS7Agn13iAWu8hSxwxjDt",
  "key34": "67E2ExKdSsXc61gyDW3wQSKYxpF4WbYVwtSftJq9ujzSXdvat61Lou7jUceAoF3sTLU3RqcAPusGAgp1cdeDWwmz",
  "key35": "2fTRnej2sqKNw2GyWxQN41Ftc2rU5z2h4UG8iwrj7X37V4iCgjX2xxBzTnUhvcnZ9qbY7HcDR2YdzRhE1mvTdx1c"
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
