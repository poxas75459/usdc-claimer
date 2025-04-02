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
    "4JNNnSb6A9LiPd72mQLE3LQsgMYsuSyQxrxRXfhBMjEbVkwEV8N9kdgZMZLnGAyXivrdgsqnmNma5Fp4z5phijSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NE6wPxTmse5pURRFuL9bzGzoEB9fG96TYfPM5HYPLg2UCvzC6yDh5PV1sRRvL1dqto5ZBCM41Uj6exUgu9CzEhU",
  "key1": "646DCZ8cisqECVJGSSgQCu72DYiCjbko3xuF9vZQdieYKriQ22yf5ZBBGmkcUPFCpADxBNXPRwpsufUPas8gTHJH",
  "key2": "3r3KwTmQKE8xEaZJjdra2JnwczzzkRzwbvJeZcNbLh9ewEKLcXde8ywhnmMj4YJxgLkJf6sWDSRkyZZWFGQU54Gb",
  "key3": "5wjdtumzVwVSpmJDATURiBq7r6JwzrM1oCP136TbiWV5FMVt2gHBEg33nYyn2GPePWuknoYRJNmWfYFgEm5B4mMr",
  "key4": "4mWWRNv3MBJLyYHbG4xFegm7Ah6q1xM1caUidGoEZMgGtjt4LUj3ezfRifqJGzHXRiKR6kz4CRzieJwXA8Egubf9",
  "key5": "4RXwaxdKfwF84EMyepmQwDVnp6SXfvwtdLRkbzkZqQuWh2NDV1JqEMbaEC2TTXPNUKBXrjiQneXB6bv7sGVGJEGT",
  "key6": "2LEvtE1Z86fyU3m2vrJguzz751yoMgKAqG6JHJ7SBqbSUqU389587yAZGE3U4hV2AijwrV9byQ6JYM38mRRZxRao",
  "key7": "5w7gkHmtrxDHd7dZaSk5BM7eyhr8An69QkbtatonJ71aKuVXLPvN9mB2WLT57PA7Q9iXPUqoFwgz7AxdUCBNmz2b",
  "key8": "2p3YgTCnETnSjXbZJ2SDZn3cQM4DvqmedCyfyS9yLtSPZhJgqqrZ5BWtc2ydkqenoJ2gaR3WgQjxc39FzovdJZCH",
  "key9": "3dpR12b9NCaxgWGY9Zab71T5y5TKiSWRNeZy2MfQriwmpDqoxxCj1x7rru4teVG1fEQTya3KcAfZx9KzY5NXEsmo",
  "key10": "3h9CF6MnfRaYfJZ8R5bThRdvECZY8EbyS8RTqsNyNk9kgoQ2YzxqJs2ionNQtnmEqjoNeJiXvMvBWvCfsSVd2ouh",
  "key11": "2dssFqHeZz5tYuo6Zvn2hM58RRv5bC9YDsh4YnXMBE39L9KaAhquQa3ufybmyJLpMUaWZvFnN49bYRSvr6d61qBg",
  "key12": "3HqYWEBGM3J2uD9vRxgmPTu6nmfzgVoMp9Lc6YY7EWXm3hds8ASZHbAvxcX5oLTJyb8nhpaPEBTFUqVxp2VWS6pa",
  "key13": "rGQTkhJNzJ3NRCtiT1mhSN7odASodNogKESW9z9VNqGpYSwf3Fcdo9Xv5DZYydc2JXz2cLS8mZkcRVieimAufD7",
  "key14": "YkmXCUYytCW77wJeV6wh3KeHkQCwCbFmmYzJ9cbopeZ8a6HB17EAsLrnwd8kFtRp2pmmfk2NFSASFQ95Aipcfp1",
  "key15": "JZxLJ7zjkoSQLGhXkJF9MJRu6XBmHPDhf8P8ab35xyAbrFp3fzX7D1pVM6mhbvpbva1YPgLGgZR1wkzs96HAYb1",
  "key16": "3S5k1bJPTvcJdd7KUCJybe8MLkwZFSAt28NdoYtcGz735am6UfN3pwBycofZE93GyBA8NPLRuJkWXDngcuz9uk9f",
  "key17": "3BMCSKbMQoRXn4kRKUyJnCTovJjwt27iAaXP6v7PFBs9gjFCnqa7HABN33woKz8UZKJz5Xg6yvtk6279x79H6Exu",
  "key18": "5kabYU4rYoGeqAbzdkjyFUAdhH5uHXQ6dDdWWXsAtTfnSQCvBjA1sy7Lh4Q2j7NiXFvPbDUer9duy6BFo26AxJbB",
  "key19": "4N8s4rqVdytTCGYYVekKEXofuN7ExEGX4iwqXvrCELeKLrd3xJ3KjiQhM5TSiRLPpdsLbwBtqKdeK5rE8oKDUUEb",
  "key20": "449QJfQyeq9yt9CspYsV2PYX8t64vMnR7Bz3ngCd7sBCHKthvNWjWmrKk8fjzC8NDZLiUv3hRvJJQftaD56Z8Tx2",
  "key21": "2MDppUYqovuQKgpJbVzbUsGm7MhWYmHwtEJMeo7iG2P1avbroAYRswB9Q9KL7GZsniA3QvKdd2moffqt4dzaa5KY",
  "key22": "6AuZE46qTLxdEwCQEQxoi9Yc7zZ6AkEHTyFznKLG6WZtj3qVcCPjrJeiBu3kFdecqXUTT4snbWrQWReUWa6CKDz",
  "key23": "4jQccywy3rVwzxbmnB5a1pKsuCpMEJN8jRLmvjWXG7KaH4CNuT4TCyFcbJc61T49Se1UYJr8Jccbq5imMWcnTeRk",
  "key24": "5Ns3zuUyQRcFEAhasm5TVA8Re4GUct1VB19zbd1j253U4CtPWwgikoEW3cYXUWZc2inyZRYPvX4B9B9MRA7FYcW9",
  "key25": "2mwy9x2bK8Rmf8gJaXw7m4jMwA5dtCfVBFqguZKpju4ADBSXNrPbzPuMfCc6SxL4HQnxGKquGNAC7ptG3mHxji5c",
  "key26": "c1RWpLiWGJQtaZGRht9kEVCKZ6gpR4Dto6B1a5at6qk47mZfhuaJMVpoCQdoRNFVRnqcQiVSwbusw1ozkobCngy",
  "key27": "4BACwhyrPCR8XzMpR4T7PfN4QRYquZhgetpdViFPyFrd5KwpZthhchxnVLohfhQh7MQDqzfV84aotLvcFGCB8eoJ",
  "key28": "scXGNyUrw9Bx9AYTUmAMqk9Vz32KQvhJPwjoLJLyTc5DRszHb5x366DTD4VqxRgdsCnEcDcgsKhx1F3PRYRqDHB",
  "key29": "4ut8q3NqLCicAco3bfcrj4Z7yhpuX64HHXnVexdpaeRzmZJobjhxecsFdnUNH5mWM9qrrWaYWGfzYJYKAYsGjhet",
  "key30": "5hwbwgyubXWpH4z326QMiUNRT7ZYYvGKrFLhwnCCzBa8GbxSSqxPgfuJS3yjCkNB5BbEdQLGMj867gjE8Ei6rYfp",
  "key31": "23BqtY4Ho7b3bqRKqUGkSHn1We4UX5E1PFx6zsEsFgHmTENAkB8DzVy3k2sogMyESw7f9i9YZsVb25r4vemTJ1jv",
  "key32": "8MBscyfpV8cYvouSTuEMov6xHqNb3hV51pb6uFfG1KLf6D9qUJR3wfewTCSYyCWJbA6oKPvLPZcqWJ2JL3zMfjV",
  "key33": "23ysPUMcdA1tF3vCmH4GQBSV12mXNAJadDvSZMoEBBDu9dr5EturbVpncneZWWbHcpqeX39WXCRwVt66Vs9A6YtR",
  "key34": "3Cfn3gTUaDD1Xt9XQYhW5FWjep3RbwhcBswfTzP8BTPZ7SiHCHmZgKdzdb3edsHpdYEtsBqM6pT96bwttDxhqLRz",
  "key35": "3K5ig8tX1xksniX5LHt1btLJT7bSMKTRz4t3uwDYbrSj8nT9u6KH7Y2bF3xzjGHD2TG3kuua1nkh2VASLRva2qgs",
  "key36": "584xU36hGzhbJ8WiDxoKxnCmvSahpw7YHa5vmcgTM7pqWusMuAp4DsXTitYNAWrVkvfzaZep3pUbcNY58g4C7DZB",
  "key37": "2FFMAC9SmZGBSm1baXzbSMBnPdCThaJmQdKi17gQxZPqurRmEMvQyLhKoR737iYFpcpZBhTC9xfnBiUJGBgiczn6",
  "key38": "4Hh4Yn6J5eSug7P6pR8VLDG2YLSzd3yPxg4TDiaE818cVUdw4ze67Dax9fMmRbumCwbfS1GLP3FNm3u5RbwojrEq",
  "key39": "2nvGZLQAAAMD6rD71RYQbTW8N2zaKqRf3nwTxooe1KsYysc8GEtpAY61b1zNDpNV8xMfqhf7HURxJ6qBtqgpG4Cg",
  "key40": "2HWiWLNUnFbnTXzU7G4yFhChprfveHjMawsNhzecWWS1BFjAdYcKmGVhwNz4JZtsbZR33ybBUnRcYUCRSznVKbiK",
  "key41": "5F7o3auSrc34bP84Hn7Rq6xeVxsvpfj6r4g9xssdqRcPPZsuraA8of71Hps4UCXyLCYv2776HAaQRsoKfeXsNNSv"
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
