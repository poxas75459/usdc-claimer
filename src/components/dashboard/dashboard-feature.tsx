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
    "z82RFCpMWL94bUi7UyeoKCwHMZ7T4eko6dncMFFVW3L8DT9WuYPJJD8NcGFE1oiXqou2HYZc3gmwi5DvF7aEXSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cgU6yuqCM9vYpWXZYrzM7fGUmHkGsZEgP6PtwqZAid9FEr422mZQ6JswKdS5CrgGN1zPVJd6aqtqo3txXHVEUxj",
  "key1": "Bsq26MM2r1qXVt8yasaYdyVvgSG7aGrnKP7xHLfwP7h1xviDsKB4bmCBek8YwxJHTm16szrUmR3WcZYVzSqrPoY",
  "key2": "3VeS84AykrsBNPZVDcLzQxfVYjrBnJU215E7Ude7Qk656jQWKtuzVBEqDKesiBN12fr5q1adxg5Pyr9gvz3x7HZA",
  "key3": "3Ckn5zoDWLpv3WdvVQksb3ca7y2dCUyfkD6DaQ7wK2Hnw2omXBSFHhSBrrECWDdr8hp4f6NAYRMKC1VLE4hcFbEB",
  "key4": "3YX4MFLN9Jxw2x9tyZuEmxqQriav9ZQwU2m4jyCw22eZpmoHDuMRzFMaQYEm3g2jYwfCdWCdNeZujfoSBeMLKMja",
  "key5": "2WBg7QcnUxvnQehRUmy7vbHJKXd3uRbSRicyrQiVic2em3ssPB8285jhEzmmQQwkJtYMbYJASXi7GQgmzEtEyEcU",
  "key6": "25G42LQ2B77E24pQoNfsaaPC7fSNeTYQ7GpkeQtdefh5ZTAoqfbo7npEpkbyXTnyLMi8H5KRHDgAhC6KkQBAhfK1",
  "key7": "5csx7wenX8aXyczAG5ttvj6ZPMNFdRJuYzzYb9xeoRJsycBU3d1N5jd6KzmpqeFSCcMJdvww7LUf4eWYeVh6xgjk",
  "key8": "4Ywi9SxDekjGybT3RpEsjdkH9eEeH5SsN768REqyCFzUGy9bkHVu8Q56SQLam72bdrysJ8yYmyx48NZW892UNY6N",
  "key9": "4467zLZLyCVvWPwLmdM53RBzbHjkGUxSZEDNyYk3SBoBhxqrTyPwjtxcCcHa3k4hGgMSDgXBoCX5CvSZdfRFk2Ci",
  "key10": "3NSTB4kBNe25jyKrsN3YLGnhgdP9eemu6zJZzKgynE9qH9YuSh7rNiiT9Qmxi2QGE7uUyuC55pX5yJ4ZksFzcy5p",
  "key11": "2S3eZ3yt1c6nxY6YR1QXpEgB6xLso7pzJAqpKAexhxe12N4fgx43ersW1ff9FUhUGPm3CVf1LAqHkZCQBKGmYFem",
  "key12": "Qd16NHEpQzNhwUmnaznrpian1rbBkgz65h8MjBfnUPnHoVd78GnPW8JPCjPAjbJhdVX6Hjpqpeuxk45sVreBwAX",
  "key13": "2YFyh7KQP1c9uThdLPcgMFwBjSWtMzidJMVGqiLVKKiqHjsevo4ECoQp9VtfApwxudnLDtWX6ibEQq9wd22ay27t",
  "key14": "4bc5j7bz5BY4xeApPJCcVE5tE4XMewpFD7Mfp7v88CMSTa6QJNrPKrXoc2uRosfTKLzHcJvUfmWdri99yN6MtUDE",
  "key15": "54T298pdiEgLke71gNBEZGcV4zP2csF6S5N2uERkDsx93K6wKP8U5YzVD7ec42x4GQ8qotvZYTMwTUaPMdug8WBy",
  "key16": "4tuVCjmWFNq579Fj3eqcNLg4zUtFSVmCFkmTg3ci9nMEmPz7e3j8WJGJxutdvYekwycbiQvjLXX3YYJgtLF5LAdo",
  "key17": "3wqUMgiTGKdUmXQ9WHT84fzvHxmcfTcVwGXkEde8gM6FYxsrt2kNPfambka1mGczMeieT7BumDTqyWrbcYs11nH9",
  "key18": "3TYEF9yq8TuVTi8XD4fpQbXtJNHkaxSjrPxYTKqyK7bLdmJ6rs4gKT3cMjsair7NfR4i1ZS5tYEsVQofh77Wm72C",
  "key19": "62n8M1SP6YCicJEeVXqTA6QynWdjsgxiRmiQkafJKSWB7kuiXTQmg8vjbfGrhBMwwKjrfkz3fUsV1RkTYYnEfHf7",
  "key20": "4heZEua1X86zc3PGRmrFYNyQZTFrmQSaKWhCn8JrHCcthp5o4skpiQrcApKY3ttxjjjb6YRNGn23TPF8kGzh7BbY",
  "key21": "4XzQwa464vxuz7MEtoEm5UaKBUWic6TbnBaL7F2yQyvnCAJHQ8vqJiAPa6EN9g5WqdhfKjC4dHJ28VzeMoNa9Mpb",
  "key22": "29FKRkWvnzAR17zfMLa3D5tnPZvRX41pv7Gw1LXbDepTcfcbVGVatxi71XJPszzJoyABGNzDhhwtYXuPCF1qS3nm",
  "key23": "2jxUZiDUBkHJ5uNfWuM6fadF1LuAfPPXGRwgw6t7gHhNSYjjFj1CHeivgSVeEzPYeKp2mcdaqoZ44wJMCbMSNTC9",
  "key24": "5JJCn7GENyop1Wyo6smfaCbyreXXxwUhuTnYiN9JwX13ns1mqW7a9ZRQuwKMpmTsHrMGtUDj7v29qkUHYoWXPzPo",
  "key25": "45UDb5uacy67sGLqXpjgCJe4QWUYoPvWpTQhQVpCbcRFaRLp5b6YCMyuqbsimbs3Eea8Ufj1NiWj6cBm3szq5CoV",
  "key26": "2bqPbUU8BaD6K8kDYvb2BWbkepX1G7F1idsSSjSRFuGnLztk5CvquP1zGyhyL6NmFYbxAGfAvB2qoRr5hg4Kioak",
  "key27": "5TQ5rJBLN1ydjo3QSQo1GQGUQYhjggYbVrgHwWYgtNp9Wd3rbcAJ2jdRxXdhaEFsxYCQ3aemCZev12NB9p7jPMZi",
  "key28": "4wFvktH6kr6uzUUZ3QgWjKJDX71kUMSGj8ZrqHyiWBNyf3Ku6by4n2h1Ls14zFzh8mTtRH7VaJiTBPuJywehMx4X",
  "key29": "524DMpyPn9etMhnbq1GKpemmvnCwgcdG1Rf2J8UPgc1mn6VUfCCek6TySuG5aLsak5eHfbkeEQqeG3xyT31EXgwj",
  "key30": "2S4kA7jP19AgnvhZ6WZZYpXDwNCu7j1XHxErhkaYo8Yh2HLhoVm9TyBQYWMtTU44wHurFAcy8JgtUKPtjPVd8cWy",
  "key31": "4CVgkGM9FNS5yGim9Ne66xVboCm7RYse86yHVHVtX5SxbPFAr8UzpLNfgu4qAxe7Ao1XDYdApLT6RWhTzpJBMG8Z",
  "key32": "5iwVF25j4UNBowT9W17Y5YyKHW48Rx2oZyf7B8vGJNTXfLMdA5U4knAsYkshoEJ84BFvAqgPsoepif99hFebmsZV",
  "key33": "3xcS1YAdFX4JE3gRdJVAjvNou1hQsq2XwREjhXGqwtUoPdoTEzP6gVbz3nSBwznfZbse5EEeVUYVCpVQCstr3jJV",
  "key34": "3rCoveJaVd1iEvP3MaZng574XJcwAaaYYRoskTceY7FSsrqapfyqi5GNxnZiBZmwr86ZdooFMm8F3G9C4tWgLB6s",
  "key35": "4am7zkY291tir8QooHU31Z7FSi1XKa7a4f3nELYECw4bd9csY8zdXryVEpDCyQDRWUnD9MCMxhT1TDHVXcvHuFWp",
  "key36": "5te9tbZB8fJPvGGpBCxT5j1CHLZa19JuaS26EjNiBBoiJn6psi96ADkcUasLtLrcxmmF9jDh2XJv4JZKUvrddfHs"
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
