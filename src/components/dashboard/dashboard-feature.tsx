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
    "5aajiTACwJ87xYY7kc2SSQKmpCBfmU98BbE537o7nnemzkvTMQVySNFNn4KYpetRKpiRevchEao1HMZLVULScrUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35MYwhMDLNeKtMnqALgPDjnUvJFPAeoi1aBRZUg2yhh9wXdq2qgQ755jhxt7LCgCam9fK7T4Hvo5LJnC6ozR6QUq",
  "key1": "4g25uuE8fcjL6oM5WRncTwvqBJVSFjgVGNNH47Tnnk7ZoFSGF78eVyizsUG9D7AE8UCUd3ckPXGjGykPpQazq6f9",
  "key2": "3B94qTtYMtL7tFHBb2WnVPmTg2TxddWXfwjkeNdckUUqc1xeDV3Uy2fsaDBMCdTFhchnFsMAa85NPQWH5cgqWS6a",
  "key3": "4UphvHnTZpEGhxRtUKdt3qKjFaVJbQRBHq9MJw5z2g2TrdyWN5SNfrTZucZkanpBw7oLNgL7ZF9ev7Y2XuwMHrmv",
  "key4": "5P9nRhMTvEt7T1KKYDN7rHHoraxyQACRvFZLHFuuYuqL7WkFxgZieggeHngKXzLWvAkCRRE3BTxStBdZCq74SHFm",
  "key5": "5VH9zJteFT2Dc9PQ9VzR2T6BtnwNnmxqgSGo5Mx6ZP3H1JWS4PBib6SW9PS8aMUK8Qzuh2dWktXva68Vur68Ljed",
  "key6": "JTHJxF7Sfv26Xp7JwXa8NmuSxtKrZeHYZgC6yd5szz9ZwWrkvAjFUfqB5SBBEuWi5qmnrg1C6ZzEvnKz668tt6T",
  "key7": "4KFmhWyyF75xtvL3sViXbqFm5NEAzA8KBbY6A6NgGgRZk6efA5NUHM3bzBt6ZCe6Xc7R3qpxHQfLzvCXPQjntvqH",
  "key8": "3k5VaVRwec79WfxxNUmDVRkujZtbBaaNRRzeWBY15JaHLc8sesXsbMBM87cDdVUzCaSp52T3xS9cpPBcAuSge7yA",
  "key9": "wRArfhR9fBNr96FQd5gjjdjbLReMnymAeqmiuiZMbD688KR4tvCByDdKSffPyHJgGrBJ15fXuqUoCiE1f3TS9eX",
  "key10": "4qAoGaQr31e3SqX7Ca9bf8oaJNVcMhp8fZb5EFBpHEz5TMvMjbCZMdmQVQUvMoDBMQTSjEuCBGGjaUWjNVQAWTmp",
  "key11": "4YHa8LUSDae6kcgDQpjoUdDS5ryY8MD3JvHruZSgPuYcd2DDd7QnbHeSHn8JQNbbDaDPt5fzSYTtbQCUA3gpULLN",
  "key12": "35EJhvmFqpsysgoR5JzHeusLpSnXX2ybvCJm47BV3ccmZuziRdmBR8AvjPp2ywmwuVqR2ottJUT7xsVNBCtrUkc5",
  "key13": "3qzarsa7Poo5DkqyCDKawZgwG6pt4uGrPFKG7nLdqAj7yWP96LwdgTbrhJh5tbunytTiVSvAtdzJLNF4ejkjTWAo",
  "key14": "5hKg3psw6t1TuQqgTsgMDVWnqzB1Ydd1tEnNqybGPvdxud5Nux7uim36dAtVjbuaWQbRq1WcKDC7xokvVfMAmxAu",
  "key15": "Rz2n5sPqjrfDNKVk4rwdqxATr2cdzEftJqAuKpwb7dayaJZshDtpbRJZ9SBVsLkvt28gZ5XrMbBQwrqThh4cHjf",
  "key16": "3SmEy43nwcbtfpcbwA7bsePXHMhgGPRX7pZAS7pgEZT4iMfvCqjRqm3a1p82AYqKYypVpmrAr9YcLAePLRPjCACg",
  "key17": "5BnhURfpAy2Sg1J9sUT6fEUE7ZeDXKd7fUf152vxv7JPZKwxrXegVazHTabC9mRd1FsNf7hWRtLjTePDhP4aDkcc",
  "key18": "58VefCZgg9VLGbY6j4YbWvjFxXG6whLbZhLSMdUcV4FgibnB6rr9Cx6bzbPgiHmegWR99qVgd2dFQKPgQguMcmL3",
  "key19": "3SUHV5kuALVchha7dHnQ11w7z3W2cRK1WPtqDmxAA5RPm5qknko1crwtZcLK5Td2JzqrMziE71tjiXvDUrq8zXmJ",
  "key20": "65nookDRuRqYxc77F1wUNxTDZykNBfx4dBMVGwp7D2f6em19JhEKgMaHaLntHaW6xNhFgefxrD9Wv43wzD8db7VL",
  "key21": "4c5QSJpqFCouFrTiLeaK54prZUmwW1L9Nm835nc6gu6NjSeehKPpYPBA7PjNj1E6s5pFBWABMoP3hvXjSqpuCYZH",
  "key22": "32dGnYbaB9LkhV5HZ7GHCPyjQx6dYeLknnHLQj6i6zzMza4z8Z2v75rjJCzJDywTjFgmXcBD8HoBLiT3WpNE28k7",
  "key23": "hHhPNnpsbqE8eFLfR56D3VojAB7mK2ZVSGCiG6GZ36A9QftTZkwj6TmpXxuz9ZF47YMtFW2Cd6A7aW2N9vKb68q",
  "key24": "2Dwk19BwSbRG9rGjBjq8sLBunWhAszXy2moynvtU3J2EH7N8ZYYBK1S6L8WDBaKKpbfeMyhaTxbwnoCsJqf8fezX",
  "key25": "56q5P1JUJTGYSjZKDYY3tHnEg2R4FA7mir3xWf4qm1Gg7vrVn1WedsqMhAYJQ2NtU5KBLiMXLTBnHkUtPTPFdNCG",
  "key26": "UFknuo7a3gDSe7HYHLpXKa1YgMkNsapmJtD8ggDpAom4mow47fWnFUbGoeKFYbMZaeQvD8kumbHE1iZ2hcYHVMq",
  "key27": "5r5PM2HQFc3DMmJ98zfDQDbPWbtA5NwdSbGmuAaay8haq1wp5cuoCsmPFyYNHk5H4MBXmJU2y13K4d2PFuLcmQQv",
  "key28": "5bzi8nUTXoAK6xWWXmQZw2LovxH8zhh1nsf1gKW4UfcKBwC6JyoD5NpVFg9sNGshgCbsrheihJg8ZvFaGJMTncUE",
  "key29": "5VakBNbn8TxrGhN9wNnFjSBGQPuZPgobvD58ASXBNfqogRonw2bPotUUgoB7dFRLr4J1R4LVAFqeTzpKGC4Hpevr",
  "key30": "tvfXtA27TYkDLTMhbHUdzBqp8vVyaDa5s7JYuTEHDDPrdPrUkkWBSEBekE83p1opqoWs8FSx3okdbHDBUCYtuh5",
  "key31": "5NXhNRxiD3VpiLF3uN4MjjYQscP21Mrg2gSoDZBB2qbwFEjzmg4F3FVF1T6fwyHVBQxuS2JsW7sbHcFiD3NNovvm"
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
