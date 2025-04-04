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
    "32tkJx7WrRK2SrAztt4ySHLqhxP79SSLNhG9jp27AA34H7HfLkP3NtMw49U4VcjhULmYdzbXDBjEzZTJe754L6Ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36owjU6SsAw7U1St9iGQAsfCauMLgDZafwgLysuvGVsGBjrrWCQJ2VezJKAAZvNigJgSCK1XcdrAgNvuGQdPCTqY",
  "key1": "4fU4LYmhFTdGMBhPpwXRnCxEj3mwjLxspmkCcWPFmRGUynNNfLTLNvJJpYL6xsPNzYkG2fMGEG1LhCW8Avg3ZeqN",
  "key2": "5WTkob6zdfMbTyXNBsLAJit6NxicAHhk3YQGW72xcDJkZ8Qz8wcMPhXpYhGLvN8rfCESnPYpeNkWKaqgMtcbBoHS",
  "key3": "3Z5HLrCyYKPmfKnDFqksYTVDjTViv9YDRwqF5b6psGFMb81BUP8xdFwQtUX8JCwSk24a57tQZRFmPPgzbjVbH9Ga",
  "key4": "3UKLx3Y3maDcLsvYDiHjv22C3YRWiNiKGenxmTQrGLU6gaT8Em2UA2W4u1cyaeZDJwHzMJLtnqiAoK2cr5Q33UMA",
  "key5": "EAEb7jmDmAUkEu7n3bPVFUHKWz7VVhMsuz9FGDCN1EaH3m8DPeHUX2XUbmDdn4pmJEoouPQkY6zhWAj56tyXJxs",
  "key6": "JoG31E34pu2sFWndRTsg1YeBb81GwVWVVXaPYwfv6sW7CoCA7iEfs6RA6jAdE7ToXLWtYSMTxxK6m3LSz3TtcaX",
  "key7": "5K6q7wAByhErj8JW17tGMTmjTaV5xdn84dX1ucffiCNxKbotX8tZ6Lxe43SPSWzR5GukazeF6L5CDm8J6EYFjKxp",
  "key8": "2nQecxamP35eh2DkojFG9SpjH2qnZbowi7c61uUK3XgyHsYeePHKP3nRHs8gEDme3LK2AviJ4J6Bwz3Mak7xTS8c",
  "key9": "TnuiA3U51m52FftCCaSYA1eu8uNrRbBUBHww7w6sGZmi9XcvkvNaCjrLBKv6geoV2NNZGC7YN2CwuF7wFS1QaKZ",
  "key10": "41FVEbUcTZSztELfdM71Wvd26h3X447bTwK87Dx2GogtjpYRBuLnqbeZ8X7VY6qEowa7WbQ8uygk9KJgNvmJ4dYS",
  "key11": "3YG2ap3sUqWns2CVQT3dPDqEQYCxuVp8GqwXPuoL8uqDMC2kAVGSgdvFMbW2TTH6giLrNncTDmEsWdLe8Cz89zEC",
  "key12": "3AiPhDiUwuX8L7b6jDQ5kSg5rxxRiETcbjzUWc4cvfJSiB3oWPnZGqNuKJaw5rNW6YdTGA86TUYcDxuLfwEsoQXp",
  "key13": "4tSawaz92ysS5HyiH9ogXrAp4uwVF9vN9PjcZcLKUwBsavnbQ9zaaGtMc8JBxMhY1asjYshHN27VPYdxJX2mxoDA",
  "key14": "2UsTMUzgnbHfGDiTYUDqMHiDPiDjDx7r8VSAva2jSRpvS3AbUGhTcZAs7ZugiirgRZahx6NAGQ5PfYTTH4jqrwAH",
  "key15": "2afWfF3jdHu8phT4HDLG4Hr8mPt27qemsAThLxXNPu8bLXNFhpJQCU5b6mebMMDJLawwMssnrwur9pbNmCnRmkZ3",
  "key16": "2Zct2x8rL6mn7R4hUMYQssdyJFuBco7S4oJ3VjppE4DwSF2xpTh3rWHtnf2csaUPBHibDn8MngLCeBeUwY1CSq1U",
  "key17": "5h24XT3z6PSRmHW7rw1CtPWhLus8LVjfZNDKW6ZtJ6Vt4mYBVex36eGWx93my1si9rnpVRavms4v4RmNgXSXBYB7",
  "key18": "34sjtu2ey6Lut8BZw8afGBQt9GyTJ5yrL6dF14GSztW9jBW6YWj8iUuLN8bCmqE6gx6mFEbpYZesQ6Kr9qdrJt2s",
  "key19": "22K46cCXHGivvWCmESLY9bmqYK7NPQa4oV2S1GQdNFZvhKVj4buZ1rEdC5rMBYjFaPSXUbjHbDM9ck3vj52v7AB7",
  "key20": "2A6uKzYtw3Lm2HzyP62nFqKGiYf7djBwNKu5HJHVqBxjqoMzD4pPYvFRB7usVZDiAxBahhQ2bTecCm5qdKbc49Jx",
  "key21": "4pCZURW92ZzqQhuWzxXENTP7bzjvrMqxCwqkdL5WzUgpK6bTsJYjzcmVGPrNVDBQYMDepRF2JtrvRCWn8neMEsS8",
  "key22": "2VFksPr9UGyBmbTJ6rBaX6DsvmoE4LCE4oZJUb8YJ9LcRHuoxCJVK2iP4Fy44rhhVWn7a5sRKp3UZJxbRhFsBRPN",
  "key23": "5TjeRna6DzdjWChpng4hk9ee9mA74WFuocVn5DXcMLFb4gpKkgVAucFNaoQhG4PDR1RGyjWo9st3aak4jbXifqqE",
  "key24": "L2SeCKZMZvzpJ9Vh65BY4ZxbNU2AuLrRvWN1LzM41f8ARbcoqnzqn7VVoVPtgrZAUFpFCGaGXxAHr9wqe9H6JMB",
  "key25": "gidgTk5vsdRen4cs48tCfCwwoUzWUueGxTD8NMsMT4LChofDepMEZXoMuaVWxH7vsTYiCZR9J5WNQPwQe9BwJjv",
  "key26": "4vdawdtkmGGiY6dz2mJwwXoHBBaMdupqbjdS8BYu2RCsWfrSMHDsUKMt7k1uwzkTe4vBdcwR5SDH62s6M9aQqX7R",
  "key27": "oDa7c3trv9BAXLq3MvKTFGAmg6J8kPWVui9xAoFM55UAq9j4DeJ5AQBcvY6CvKHtEXdhxHfRpzcfx5v52iUwPw7",
  "key28": "4vtZASuA5fEY9dy4h4iP7zLewzdenPM4m34AQq17GKq412PoiQkvoM8netysEgeThGkj4uhY8Ngoj3bT9rxU9UhE",
  "key29": "4JLCZh6H518SdhxG1E2iRkxmStEURTvnTnJizkAe3tbXp6fTH4yp8J4a5hjpzeTL5LJSVrUNhkmwdR3pw3Wigfxu",
  "key30": "2e64EBiK6cNV4uYextaGq7LwoZaBi1h51fUWPPu2R1ePUMDYTstquwFQUvNW3YeCtm8AAsSfPRBHvLexJtXN3R94",
  "key31": "3FHYEmVhGVLNYRpyQD43e1xETSVWeMmAzfz4nvfcy5zcMwghpvrENUF1xH5JyHZpE98FbQn9VozAzevxEgj4iE2G",
  "key32": "5NjRpAS7Vaf4dRVutcmUH2W4J2Aypgii4oLNZkCph1x5wt5PJaCm55S3A4HyFm8Tbo76rDzDerUzcezAh8ARqVpL",
  "key33": "4aLDen1AQ4uGgAXeAUCAG3HrWn8HNHRw8LhSbGSj8M96n9iDCJhzMxZE3zDJJAjSTgCdZFF56TpDhB9doxHuttZk",
  "key34": "41K7rR6WdvPUvc2q6d9wj11qLkhdqJdbaJ835TeQ37nBranzFgSsyHbUJXueGBK3mTafhsnCp2H9WQgUKsVsctv2",
  "key35": "4vCitbHavpJ3FWyLnYgpRvWGyncwFmV9eiKgYmwMYceXgUeWSUR8TYCg5KXSCw5bZYYFmQb1o3Nyxyv1q41ms6ns",
  "key36": "4dCnFHNaEQBMFrejUTsRxTt983mMFrm4ZZ7Qn2KZ6cuyrrunjmAPn5vxZRAcD9epQ7zwg7tT2xBu8crATUD6dWgE",
  "key37": "21zxwF4rT36gE36sFWEy9wgTyneK9Bun9wsS7JBjxp3NqhiJLtheSiHRMZp96k2hzLrvtwaZNUDvbxfZgiXZX3gV",
  "key38": "3xNP2vKb8JYgewgmYzwEDc4n8TPDt2ZNdni4t1y6sRCjwCqCK7MnERvHmwg3bqEzwgWnVHJrh8i3Zqtyye2D2jEN",
  "key39": "5z8Kbwhi3aRCQX7d9LUfCBoV7t42UmJfNtyVNhwEP4sqwbQj8ve7ucZGkpuQSYS48RXkWNFaBHEBAFA5kyWx1J8A",
  "key40": "5TpNck7nGur4koz5Nh1sj8n7y9ZMi9LadRHCLtPRHHTEegU7ReE65Esh1CTzaDDjg7gtZ6wUh4iQqocfnwxmqS3e",
  "key41": "4mbzEN86LmVWnimfNga2g64E6ZjGKWDbJB7v9FPuqGZcDX3xdYSrf2pNF2PwSuTZBwgWupRSHUCs5NJDTPJYWNdV",
  "key42": "4ZsG3UCZaXYxBph8eQzj7XCjvec4v4V3ihXybEchcynVTAoFxRPnGV5YiXzcR9s9UcrShA4JMj3JWDQo2yccgKnD",
  "key43": "4A47uVGjYMvP5T6TYUp5n5X7ncgUTkWVoscVNHbvQHmwPGuV2bQi1rkax6kbZXt5oWrAyYiNYK2KpUQYLZL24cRj"
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
