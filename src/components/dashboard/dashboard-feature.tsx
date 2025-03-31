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
    "324LUxieXkNLd1tfXTxG3ArwRWAurcLdzWsEE3uqVx7Djr8FtT4Ujb4HoiphQUA13r28tpq7r9akA3xngkh1hwvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p7wkJUnP619inSjTCf1vuS6BmPFTvWqTWFZVgVW7iu1UYpLunYk2jRXbzv5uudVgk9RpvMqBAWcgMQiqkeX2Jxs",
  "key1": "2vcVPny1E3rPoJkvqTYbr7TnJLhusW6vs2rs673JP3SU7WtYRJQw2DvCDGxZHYGHkgSCDRi1PidR6trkMdcs7Avg",
  "key2": "4a2tS3eHj2XL6kR5cqZjq3aQiPH1vTQkN9eGJw5JakrUgHxd6D3qNP2EMY69aju726Vy9quHum2QmaiKVTUGZfwo",
  "key3": "28jZeDm3pFPYbNb68D98Y4CwqA5v59uXzw5SkxUA46cmZhXqYaexE4wXPagzN8BfBwByd5Z9Le6kfjXDsAhifrXa",
  "key4": "64yYC2CQY7pjpjX5AZpLhkWcGfPhnBStuzKo451ecAzzftX3A8Zut4hdMEUUFfosJJFA17qq1qkegkH7TWJzhsUJ",
  "key5": "44tVFWpgvchSrveHbUqFSte6XnmcbbeCdS1xtnWdH2xRJJCebKi2pAmWv4cg7wrwGawp8gisWgDpsYXpFhuEdEWB",
  "key6": "3x1o9DtH8To7VveaWDQDpZ8SnF49P3MNy6mhDvpdncuqNbWTZszLYpcqxEFWK5KFPt2G3SXpDGzhuNzqwGu3r8oc",
  "key7": "qfheXmG9QqdpEPvjfgctbftDybNWZQqtH6baj5DKGWzRHeSjVgigphVP9jd67aCw7jvhTwMWRBnrds6WNj34nd2",
  "key8": "5hH6ze8tJAhcoFKX6K7ZCBHFk8mBGxV7yg9kniPbnjeBVqxEv6aU7Jw8fufrqZX2Hv2pRhSLZRj3VLx3Pnq36fza",
  "key9": "etTsLyq5MSvaha6cCkJTzAqcRFR7D7P8pKE5WgY3DuKpo1G3XgTGgJn5tjRKVAEkzLvvLf51YaRGjGLssYswpEz",
  "key10": "2AKewXhAAAz1JhsudFEPrGXwTYc7rY8YLbkx47s5uCFX2tD2azzFhEGUQcgkCFqKCV5dPVvir8mC2tQTMufYbX5e",
  "key11": "4n3CQQVdD681dt4SawGyoZnxEWvagfRw3GV93cnHLAE9HSRsX8fGAgyCcJZKGyHFt4wFNdYYycEP5XC6ZRx48FnF",
  "key12": "2nrumPoTor1FPZMVJN7fSwvn3PZtWo7UBfWyEYf7UBRPbCGdUYrZZxMsqfWkp37tWYWpUCUYbCgaXzmGkVDSbkoq",
  "key13": "2ZAPUZVjBoGeo1a93cDmyxSzhPn7JyiccQ7b1PA826ioN3eiNXSYgMXBpq6ex44ik5uzfNWJtLzjnwdjKKndTwrp",
  "key14": "2W3QUvUkut9esn7T34KZqB35eRtGxaPtSyKjH1f9kdACumzo2Sbxg2qeZaEZiB2EgPT9KLpDdG7LUSPNf2MmLEYp",
  "key15": "47isHNy96b9UMUJRrD3net2F9yM8AfD5aDWodpxi3W722VdTTijBvq9NMXzvWCbWinq5rEgarpCxg1xAG6SCGdmT",
  "key16": "2YnpKjN2MEnCCcXeJRUe8bQPXHCPABGNXpucNpD4ZY7EKJTcAsyXUc5XM3th4YqfBNYj8JagzybtQoaAtMScHcFm",
  "key17": "5b44aGhwvQydg8xCxhmCyDGghi8hpD6H7gmJPFjRfV87BeVAFnzLKb5nnGmqXmzpRoTTsrN4TRoW6hMKsEu8hK4o",
  "key18": "5qnZR2m73izx71GVnGZ6nxNWQjtMnqVzSKb4MZzr7cZ1nY7RptFtNPfoWpEzQSR9dJvQedEgYYmrwirTd5kLwMeS",
  "key19": "3WjbJHkiGnAB5sGUX3CbXyEkXE7vF4u3KHKWpfMhp1jH3ym16AUJU1LJ5w9NkoLoZpxNtfZxjvQJNV5on5gCq7kK",
  "key20": "TK8a8CPUV1EKYpRHrSrzWnidnjrhEUxDAoPGLyNzBvLTxry4j6E4PjfVCkgFviBLT8CtvEZWh43ozSzpejy5tCy",
  "key21": "35z71M2pV2G9NPq8fTtAKo2hnR8xhUMMetVicQVZVFoyVdSYRKTDKPbVgLMdHSdnaK7m6z3fDB5MXrnqoRrJuDWB",
  "key22": "5PGw3ZMZ23L3V57qTQdRfhWPU4JQRAXd5BQnihsxbfQk9m6Ug4HtU8TYfugfqfJsyumMh2crQv55PpvM6hhMs67P",
  "key23": "5E431s5gBZ4SP1rSHuZs3HcoueWoGhsAGYCtFXQrbfp2q6ZtyUEbUaWUj8VBRkRBw1aejus8emxiEDDK2LHWPeXN",
  "key24": "xAzJXN5eyHWgAzA5JbGjiMXFvWMDy3dquU7pZyy7EnwLgUejmeiR7436pVJg6R537sfuvjnGZvy7xCuC5MoxfZb",
  "key25": "C3SDxvhhsSPLiTRVfQ7bqXpjT5Xo8h8mVXN7hNdsvYrihhdfBKcG8PsqjT8V5BPQd3uY4b3tr7yptukwAsHQxvx",
  "key26": "4Gvv56gJqawHA9mHeRmyJcRwPSUSYoEz1TyDQr8r2gZmke83P7jjsnznqvKDUHscg3MUPqAtrhv4Xfi9DgpxzzJ",
  "key27": "5Pgw8j7LaBbiYR1XFTy2nKTsqtYoytjaJvGe7Ton3Bq4joJRWYu1bB1LkdeoYapsMqK8v5LX7i9EYaZD6gMAPohZ",
  "key28": "677guPAvUTpTDD1Nv4cvYBL5SVPWqGruYsVJ3PMxjHZA6vHxmBM6EVvRfSRHHkNuBnASzCHsNBSQ4Q1AF1a2Skm3"
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
