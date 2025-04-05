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
    "LUpq3MnyL97mrBAkP1xiU3DnVfggouLMV9GvjsELHJ42FQCJ1BkrPzxkmphDQ8WJ5vDg8VvReoSG9F8xqzSuQnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mUUW7GsSTozmMbCroQwZLi2zXPwULsudkH6rkhMMdQrazUqYM9XYvYt3Z4ZUJhqT77aQB9TdxHvKefPseszkZhq",
  "key1": "2fwC74kteUc9R55HDXx8VRAzNji76fsBueEhfjm9CujQDf19ued4CuBXTD8M8iPJ6DQ4YAgPnvPmq6g3Vx4nwwV8",
  "key2": "32F9Q3aDBj12r18t3SUKNEmFPqL4xne6A2FHWq3B1NHapxusrY6ceBfUXnmSzbU6g2puLXJCpGnSBFGzQFRv8wTG",
  "key3": "47RDUTM9Ar54uE7Mfc8Q31LdEQsecwP2A2yH3CKe81dweDFeNuvom3qSmkXdBo4yddT9VDtkRz3SVpukyq8gR7k5",
  "key4": "4z9uovbqpvnYKf4epkiUaqnQMUQ7LNomFR5UmF6muoYii85iggCVVzSxn7GE1JH3azZnbEfpfWi8J7HFFhZkH1sz",
  "key5": "5jXQGfg3AqxAvN1kG5VA46a9uQxgpxR5oVnozCTCwQ3yi7mRYziyzuyZpEHweWGNJDgTA4FLzSCesafwCj3Kpwik",
  "key6": "3zPrphNZRo8DRQtGMHxQeEpCsZ4ynpLeXz88P7ucyFR98VFNpDMtvd1faUZZTfHD19iF4X8WWAa8h64QqnSA32tn",
  "key7": "WSCtD6iRY3Q4EBYQKtbkiYCwVf4BGx61Ye3GnsyLJHTE5S5jo8wDhST1B1JSMeRRqqHXzUEfpoVTMAJeAAm7SR3",
  "key8": "qPxYeEqt1RSHMp2ggmf9Y64CUJESQx5oxEbCPZrbVRPpBDZfJHTd46rt5nEKoP7ZBuVUEuCcMq18GGE1kjfGWG3",
  "key9": "STFvgprcpUSPDhxkcKMjYmVa6PZXw4nxRRr87nR6xz8MmzbMUEQiF35ebwbXtYCcPb3WEqRKghwXPEc2JZAquPZ",
  "key10": "gUnMHHhsKAJR5nJkNxfKPiWqz4Xes6YsRm2SimqQkQN98zxSXC5H2Co3AVsKTYvcnKXysJexRuTUeZ5Pr8djUir",
  "key11": "2JJ2VyhxdNFK5GENxa6UcsiqaMmvYZT45jFJDHKEad2rEo8vcay2h5w5ZtrCBrzDJFNTqCp8ktrtkcSWS3hsU6sb",
  "key12": "4FBstmBwkbN2Zve1hZ3tUeiyn2qU4JbTPenV2SNAXbi8ixjJDzvPLAD1sQHmYFRtwTkQdtzHXGLTgjEoJUMqD3Xb",
  "key13": "4gzkNX4q4SkNVKNbUkKWM25orffbz59W2WaFWb2U7AP48gtbzfjDUH9HhwCFBSwdMyRxrUa9nCvp7k1yHLyno3Ji",
  "key14": "5kMwZTGoCLeQoSPTmNkyjJjFEFv8L3pegV6haoBgr6ajMDBnUnRaXdNEm9VEA2os1aNEizWj8YwN8ABow1cviwim",
  "key15": "cKtm4iBrjVZ7UPEVh4Uy1s4K36pgjjd42t7QpShi9jbAwom7Xf72KujPTK3bNxeiMyPJ884Ji4Jda8SkNAmeBJj",
  "key16": "3X4toroKrcgZ7Bmxi2JMRdt18BdijNfGNj5woVDdEybTgnhb1g2jpSGoX9QhMtPixpTX1ZsFB7EsyL6mwq9hnFsf",
  "key17": "4X1r12DF2QjQ4RH8n9Dhnx1dDesKMwjt4vVvxMrzPHyR6cYsXtRvxECn8958ccpdfsdsYrbj2pJQYyRtZiB9xKqg",
  "key18": "2ykUrG8X3BSzXMHvZjRB5Hj5dHwGJcrbE8RY1RcQ3wcBZcqBGFYD5Vd6SSVBT4qxTVQbNz7mt67PULcK84SYYzqu",
  "key19": "52V78KqbSCqfo2WhkJYaBFqgTkGjUMnRSV3QX36WnRqKsSvW3jaD8peuvStMVn61FTroYQMUp9v3bgMnncWThg5C",
  "key20": "5eLBR3k9QdUhPaw2pRjtXNzCZGduwG4Z8NzGQZKQg3kXnMPLQAqxwLEiAZpT1BH8qUV8WnvQLHB4ZzKCNVk72LR",
  "key21": "4HrrDQQLSppLT4ye24utqURkeV848kRGCKbEt3EjT2PDb39tz6HdaRc8kJ8mVVcVzRhSYxZKZ7hLT6BX3Y6fWxQ2",
  "key22": "3TJJ2p6sceVqrKCjkP4UmEa6ySMmTAFE6hYBdp7FBGdbp796k1xNTMezYeFcCnKqni4N4mDxgkZpipKnHP4qD6Y8",
  "key23": "DzfqwZqQ3iJYZZo1W2LYmzs4p8rDqNWEy7N2s1ec4w3YW4UPxeKnpyQkPqm9Vpw1EQ6g2nAhpm8dLc43Enrg7bh",
  "key24": "2667TqcBgJhbLmJSxtoZwGkGAjzQcgGAJadq9xbddbSnxA4AQhgQ6Uir9N3TTfSmwoVpqthqAQ3GoYEJQN7wJnFT",
  "key25": "XYxkwo1GDLiHpRYvXnE9MDwpuuwS7SopXsfwFdaj3EacuCVmvkaVPyH3ThpW78S9KqHBUqkLX2WGmhjR4DegYwP",
  "key26": "5HVhGXiTpVLX1vcxrxzyRJuxztSVCa1Ue1S914qWgRa6XkxZ1MCNbhF4TSwUkqR2vJzff5JMtZHRtM9TsqZNB1rb",
  "key27": "2piTZN37exyFJE6q3cmR7gP1mPNKGTPRzVabFNe7VkcjszzbZ754mPbn1yNtBgH4p5J8gDpH1aMmdrxW55PgnpzB",
  "key28": "4GRaNiLTMoDAbRg3MLvdAMXKyCGhenE6PGHzwFEMPZnxGrB7SgFNo5tEzxdcbxMJJhwRxiz8ncGTVSzzPu4tkzRj",
  "key29": "3Z3XdQi4eabqdRaR8uT6brvAjCUf5Qiyh8wxYSmL9DzwT546Vka6UPzUATZHZo7GypovQ3JsfSZRnh2zkdXt3w28",
  "key30": "2Tn53bNSuZ9Qe5qHWAogcyLYXLJ8uUsSo5NJFFhxeSWEfjG5P29tnUht4hfVfmgxA5WzuqP5AGkAUxr7Adx2g9wa",
  "key31": "23ifdgMa6LvsjdRarY2esM4A9fs7BtMS8Y6sEPcprt3wUq1thQ4np3h96AT1MFWeUtobtPgDmX1hmbpS3PjMPiVf",
  "key32": "4kxp1P5QeRAexDonqhSB17cQXScZgWPGzFzV3iHqDkcz9XvWbnyJrLj5YCVEzdbVqciRiPKzbwdGQYE9jdN1wRxf",
  "key33": "51jK6DeR4bnJWjUYjm2Fy1NC5P7vCpVwbANW7YnkqcDMpDxwAL2saLJi3WUSsDhbJLnQPXQXfaZncfeMJHTRxhDm",
  "key34": "3ooaxfs5TKk8icWSVQc6vARqiWS44QvQntdhpfketWKrdKQd4gZ6cho58SSRgeKYyFunjS9rhQ3XCjLR8Fo2k4As",
  "key35": "SvNx7nKnxyeZ4EzLPArTywC2z3p9QMEJFCrASHqT2Z1s8EpEyA8Cff2koT1oX1VitJEEYCh8sMFKCRSU9AmKzWy",
  "key36": "5X2wBy7cHiumZjgHZhnP4hwbru9Nq8ypjdsGkgHbKXMoS1eohRWTs1SGuyHMe9pkbkBPhpCTfi8ocSMyPQ3STgrC",
  "key37": "3Ykxd3VDa3eCsptGt7UqD9YSFGSPrrcz6bejWDjCht5X7nwkoG6bSCLJDG9TCGTmLEbRi9huXcpDPCLiF5gG75Fv",
  "key38": "5JsZEk1HGkt5QvDny3jokJVir9TYAuCsAvDa9W17axwpij1vw57sWRuQkiumpVTMLwg6Q3JKKRYbJ2Jf1enT99AA",
  "key39": "5txACY2ZnsL6WXF38qtBHCU3K4JrQT7jfDkgFvUuvdBwcZA9SbRJaY4egkBE7mTQFGkF93MdHzGY7eqXDUv6J8tM",
  "key40": "2Y9dAzZwiTs4LnxsZoesaYLaxUgSka5L9m4wH87y3ZRqVvDKXM8XaYfFeo9VcUADpmde4f3ugdbtzCQd1rYSGyuu",
  "key41": "24gQ6PNNWNfqgSSLCyCwCHADtKLnZUGmCxoDiffx45uejZ2WGZy1qTwWZ2mKn7bTvuyTBZkSmD9ZQSXrmxEoLDpc",
  "key42": "kBwZBUvUCXg7217y2kpx5piGRwnk4HkGUf791dp9BP1FkZiXV2scjUX8RVDaNrwz6A82ciBjLXaqg6rB16TWCU3",
  "key43": "2BTWUjfZU82bdnRr4Ti8aDAQi3LH3cX24b1HpMLsn5AktTDGKzDjgi768JserVZDfMaLshViXfU5LES4wrtKLw37",
  "key44": "28VjUgLo8WRZzNuDNw4u9B9VyNgrijGhor1yBApeCjZ8YH9SJZLQrWWJffaErT7ivMJZrsCZeAJB33ky7dnnqrz2",
  "key45": "qiFtcVTu7isPNwMauDZpJU3gpBULEGj3xnAFVX7vTXGWEk7H6BbSsssyCA5R9xZCxnJjx2D59RMrXwTCHFv72oB",
  "key46": "2dBjJpuveu7DXnAgYb3cGiyXKo7QF2NsrkdLF5e8kue4Fb5DTFrmeeakX2yMHfLgCq1FL7L4NkWw9QEdW3vE1j75",
  "key47": "wgiNgw7xPFHo8dVVxtDg6k9FaFHrvf1hEhcx9qeu4JJNVBf6hw2QgG8cKE6zHDrcHtNdWR2EV6BeqrJPMLpxKLP",
  "key48": "4XFafPVj7XjK4ZXhEbEeLikK26aLLCAfnLbJKyoVCB3WJvwnvbLd3uvaWB6G3bHx8eiVrWV8NQQnzg6Z1qBhamLG"
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
