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
    "4ctvmt3D9epSrUNhHfy8RVuPT3jo1vdCTqkBf7yGZ9FNRJDriiG3yYzzmx1rVQAd3RvpSFtieJ8VoutMtF2sCnYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lry6AMZGX2SGgXyo9CQMiB7xygi7jsyYqEDTyNSgjXSR6rqqHFWuT83ZskBXNY8RVPpcJue8FvjzehNHknsMWRV",
  "key1": "QnNHAf88azi7KqiVuM3n6Z8FHF3K3BWBaQH6uo11gHrJZeEj1Lhdgp8QihXXXvQDvzTjftGauQHuHztFhaxrd4N",
  "key2": "2FvvuQgRbwzrGnZUHBAEvDhAbatJBbz8mpChSFMXNEgoSaoZDpXxHTWcCRyb1coQwNrySQiNMc7aXutpPU5VPm98",
  "key3": "ZbDWJDtaUaQ8pkgwc1X9CpGYuwHE5sJDrHzcnAjo7vX9PGvXnGrzmof8mAqej1uqXj7Cnd67tDu8D64A2pDVkXC",
  "key4": "3QFD1wofiPbVjSYfApd1uV1XvtotZQjncAWvLJYSTD5uqzisSppaeEoMLHyfGjCyHa5pQGbp7YTKYosqPCwaFw8X",
  "key5": "4ifBrGNZNhovkCN7vcye9SkBYFSYomfEL7uZRni8gvQWWKwVy9BZQSGU3rPx79oSohu4EcmrYRS5r3mPLNnKUiXw",
  "key6": "52UZ7X9fiy5PAGzRDxeUvdZ1sqGpPzDdDrZuhgebABzm3PAaRYhvQFtb6md6APYD2YsKH6sasxhvGQ23PcaXkfRn",
  "key7": "e2cMXyKfnoqKkXykD8PwMcCE6GRUbyCberhmbaWvTbKf4xiWPfxS5g3z8TE6J8NzrRppRkuX8Dg4m7JZGdn8Ben",
  "key8": "ekrpApSK7JpHxLriPzCGUsQxtG13anjcs7v9Zd7WmP3pksRkXyxevz2L3zENZRGSkqk4xzf1Q6pCpzXCcD3zSte",
  "key9": "4GDjWM481Rx2krJ96mRjNzuubhMMvjYiqod7ooT9PCzuNzJsqSW1iBHYxZTnHnhg26gjSzxUY31bsoVZZ5KyQFSU",
  "key10": "5rvQa9UX7XQbX8bDQrMXVe1TLsWhayNc6YLNLjgZsgvyEX1cqfvc37v4Pm73aDFFkLBHf1MrsG9ac9NWsqRqnGcc",
  "key11": "4zbnvEZeDcdEAXuoFPsg27P6nXbuLdJscBaRwymwfERYjcUFbTEVj8PHVc98NQedvhCK3xoGGGexxHJzgZYksYve",
  "key12": "wJkBmfo7WFJtWR8qgUwpz4b5rGVFVYo4xk6EfwvWnhpu1F7SCk6xRLywzvbwzBdhDgfxymERgGxrRJN8jL2gQB1",
  "key13": "c4475nTRiS8yfgtueBnC8k1FsYzkYDtzqbtwTf2LJHywimSEnYAzNuesG4q3VyCUJFZgvpd7GMnkAVGxGkhiaBx",
  "key14": "wxgnLKh7owKkJP1GwjZs29bsZHBv91aGyKD5FtWRVogNZsnp46sQEHCkuuyDKhW3yDkejJnpgkLqymed6BXccBL",
  "key15": "3p3ake9ZktgVHuGnnehzJb8oNgGBFqoN33ozjzXPw7VwvVrCu3yQwQWPJAigG7rSNw3M9BBguFLLVQqXrXaMXsa2",
  "key16": "2VeUzmamym9NPLVXuitFRbQjafKrvdsTvs5YG4YvQBt6KVGcqcmBy7akMkbusoChNDRK6WeHjJPbcr6BoY9LhbHd",
  "key17": "5FmxfMC1SJtQGVjLzj1nAXA9JcggFWiNWg2838zsB1e1tUZx16rUbxXxrEkZt9GLZH6EwfhYURWB6u2nX9hRsPUd",
  "key18": "425n6jjhnSMHELfiUy6DTs5iWXtZEKLnwoLgUxWUjqH3SHL6x5e11H9F3uKiAmyae8GkmexavT75P95AXkAXbxDh",
  "key19": "D3yWAL1XZr7qpRE9pR7sZF3bYfzFieVKW14jLc9F3y7hLKAhPgutq1CxHCGq2D181ud21Bbsy1vQCSGMGr1Csbh",
  "key20": "2k2YEjVBUF5LR5LEn5RRHwaSs89qGaRQ6DV2xJ1GzY8FxSe4GqFQpS1fE3XdhQBCSFuAygdsTEr6RyRjyxX48pa2",
  "key21": "4yZG7AY8yRb9BrGqkF41DVij1eXwMZSFpo7yTnzkUUWTTLNoCJnAXiGGZHnwKnACpXqPDEzCjUeJcy2agokNusFb",
  "key22": "BFXmQBkPLicYvcUJico1qrnkzDQ49stGQM5uTUYA6t4WwpS4Z1WKJ7CJmkpgF7FW4cZKMWKHa9XcbMwqu9Hxkzs",
  "key23": "DS7wvWZi6RAGThqzmfcr1gZqLRAvnt9sfFjtvTsX7W2ssbH3ywUaYKkj65Kt81jJfBWoW7GiB2hkVm8CDS9fJT1",
  "key24": "64dXovC8XBSPQHSfhn6HTiU3MREifXB2i11uAdVjP5TjYc3a4HhA9Txbc7xWf1c9mi9tFcXrhPwsjToGZSJHUEkM",
  "key25": "54aAdwxpDu6uquC42QNZjHPV4w4R63evAk4QVD23zgaxJc3dxfPArmYbns9nYfHnNis8MzKAqmdEhKdGpyWxgtUH",
  "key26": "41YXycRxPTgdFiqW7h9usEkhoPHzKZZv7CDpQiZDGgWiA8xg1LfALZBb2NxWHKmZTh5HPhfziNrFL1juKsNYk16J",
  "key27": "4kDX15gp5yfbWRT1q5smGuGgARQxufvKj54tEGwbXSNtchGu7tZvgkMt5mvc99vKs1xeuBXhFGR4nnvhHuyK5v5s",
  "key28": "4mmvrjNezqzEuyABVrk5UV2XoxSgEAGVoyJX3CJK88uof8tS5g8iHZHCq3m1nn58XT6Cuo7BpAcM17cRTKzi6SmL",
  "key29": "ncxQcj8skkv4XPvyXkERZJqHhiKd4zaCC6DY5QGfUrifdWi9rbZoa2uTgoNufvVQ3FzkpVyQE18YYrQasQjrPZg",
  "key30": "5WUfpp1wC14N9YLhyhwdeM9xdQ9TR9jfzLqnZT62sGdd4UdMUPqEW4WrDhNsGNQ1bqqWfbe353bocSsUxoJDVza5",
  "key31": "2rJyrcf6Lk1uEDs53GijPK3saD7onwVv42JtHqH6tCiW3ZCGDqWRgoVbFVryJ9MNr2ULcxKukKPXsJq9JMvMnskA",
  "key32": "2bbagrn9FzTTbpXDs5ngkh2AU4RxCVgk2XgG17hG2YosJtk3kNgMX6Bo6ktwsBybdFfZbSE6oLq1HnuigtTGuy1d",
  "key33": "2zxzCaHvp29G9zd5C1B2sjx8wYEjfDGuAh7dux7MEj5x2DPckQDwHKYMkF7ZJGRDubeayxQ6qLhxyufZWtscRL1D",
  "key34": "34yaV1GrytUmrtWSH2LydjTXbEnCt4vhgyZy8RStZv45nKYUzNZfKQ9JJXSvxB4k9Ru61GFFH6JPuyX63p5awhcY",
  "key35": "C1CNRKzjDPbmDsaaS8CCDu64Jr68C91YKDyn8nfdHvnBnmPUBFTYQCWetipMFvMfr2XgQdEhinFzVhFr2iEebPL",
  "key36": "5zNdpeLtjoaJXJD2z4CBPVTQdLRJUDJf8wYq73FvGNfCTJgC1AE2onbF9SpUGCPwakgUWtjkQV2KgmAdME3f43Ye",
  "key37": "3EjLscCBZJ7grpxrBsYYLTSS8zrRe6jnmqobA8jaQU7QgpjzJjne3FR96U17PCh4cNrfrps2CNQjS9kKQSwmv5kW",
  "key38": "2CtzYCJKZ8Z25G98uUsXDcQMYtxoZAUdAphURR58znD2YYUFq3pJiVHqcQqUJGP2UzkUgugL3zThQRmBHE6XnFCn",
  "key39": "4yQwQ75yjtAfWCNV317USHDGErgeVD961xnKeoTXEaXT7Ju989XwQ6pn7pR1cp1VZZuot8CumkZjf5oxqUddfMvm",
  "key40": "48BRzoaacREfAXfZnBvCLeBbpXUMJDFnoNaJexx68XynVP2iKNzorw3nCH7PjKAncKosUy67eeVnUsg9oQUP9SY7"
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
