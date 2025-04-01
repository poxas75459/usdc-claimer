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
    "3xXPUy9XuNb1xVjJm6RxN8KGeG2ksSUHtg6mprGn7iXhmef8mjEskodFiKUnXRdsxA15cyj65xwoWBRatfyFRDVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pVrocV5y7r7u47Vi2DNYbTD9KjeX7hCie7p3G3jhevbqHxESC9iTYQpNdzruWZbBPS8CU94cc7y54t8QFhxoXQi",
  "key1": "2NdKd4vyfUDYGDSSDYGY23nwqF8ar5jKeiX4o9kyNgACDeHfjSwusL1nyMyMAtntxChuqLT8xaoJq1Tvhp53CNkT",
  "key2": "2WyD4mVrH5PwBtkKADiUSCP6KwLa3F6Cp8SJMK3TBjPaV67TvUpdcHLs2EvPcSbDntC18e95FjvgrBEtLgFG81Yw",
  "key3": "FMqUnvWLbRk2VCDm98DwCoQALDL6V6ARnb3ENJMwH4L77Pja51BhqEKBQqfspJ3xFhu1p14QBrsqWHLpQpEe8FJ",
  "key4": "bvHGYY4vpayKUZWE6DFtTP8kDvnEEXsDKBUc3M6i5LkLNV1ZXhWH2UpthMGHkLGotYudwH3Jo6qrkRJVDhvLrHA",
  "key5": "66hrUa6Z1a4in4ynPWwpG5xxxGgBonYVzidagjFRFpJsxxa2s1o1xRTzoBr5TBC7fC12Qke6piSESj4Tm1smXJWy",
  "key6": "3FvzNk8NaQLTTydPqjmwZ38KgHZj3bocEfT2MX9edNdUPuFfJyhFGJQXhQKiHvhAnEDihqivUWBSvT7GcZE2mAxq",
  "key7": "3L6anDs5Jfjz6M5URmSyPqLt3aDzKrpba9LD4yHmEdMuuzQiTMYX9cM8RkfGWKYGieBQVCWkm3JfDvySpTNPcghU",
  "key8": "4LE6axnsEdvYCdww44zybCHQkPxSs5aRMy5jiJmJ9Nq7gLPTAazihWdaUWiByimw8AupBTEnvSHh7SdsUBxN72zj",
  "key9": "63mzvNkW1vkkgeK65VLWj2VASLTkHCzbZXWcjLyXisPLTLAujb9dZ2dvJ6khswKXWaX5ZwHmN5QrmHNUo8eUoi6z",
  "key10": "4nUd7ewCYsaMmJJ6LUxYgXfrcpwmLQPUtjE7SeH6RkvQ4myyBd1R7VRbgSdBp8FfHJKadFTXR5uid9Ccp9hYQQho",
  "key11": "63Hw6aznERsBAtUx1PmwhJdNkBacjUoCr1RbgN34caP5Fa4CntfDyAYSgCpR2PKHt1ZewSQTCWPjTdYcXce7g8Gx",
  "key12": "16vQSBAUwkwfCv7i4djEDm2RAN6SPGyGyJVUAyTPqzGsLeACqyB6FeoRzx4h32yYmqLaHxLrMjT7i9t3cBMrHad",
  "key13": "4LnjdoLpn3EuuyvxXRwX9rmWmzbMobCzeyZjtMqKXaUF3BXd8c79SvwfVv7NgheXFNRhgpRfbME9pwVazRgUpxb6",
  "key14": "22qZJm2VJMWT88AGi6uCoRpc15NZ7t2d3uiZwqagvZ2oDKQZJxLZcLMhsVrZd1KjkjQiMN5mPT9dmx6UW3PiVArF",
  "key15": "3mae8G5R3kd8fp2kDcKetJqotcDqR22ZooKt4V1wRTYD3CocgDUDqpf8sjhvW58SrL7BrQ6ukSBySDK7h1W15ScG",
  "key16": "4DMWMSSyBfNdacdoMqc6W4wR5PtcTwcJgUJ3ckwUSF7SdwwBvsyNEgAb1j7rHwPfq7P1QdQoJe2NNmPBCJ9fmFjA",
  "key17": "2yG2zocrTHCTdYqbYrr1omebvn8XSJ362npxcgMZTCGcAHjTzDJmajopst78bG8WZU8oZo2CP1RMs6faoLvxshzz",
  "key18": "iFHrRdKRraVohjntmW2QSxmTfaixr8evCwdZV6CX7LBSbcYAXoqcvYE9AuR7HhmiQaBmiwnqxhvYZKUSdh5n9z7",
  "key19": "5Ub4WLypQiVi8NNfK9PEhep2HRwffP8aLHE8TL91ktemq2QCKJDZvuFFVuvpZXqU9U8TFj912Z6Jfnitni6SS6y1",
  "key20": "28FwdRAoVPsdz4JNSLCPKE7ME7nhLJXFDD1bNvQKMtnjQtUHMY3BsdbbTUWZ34tGgoaqR5eiP8CstL6ntcfqwQNx",
  "key21": "2kUCn6CGosGTewfcvrQH3s9fjSvAgmX8KgxS6zQC3HAVy1kiXfs9Lhc6hkSJTMt8x93stUfkDRxNuT4NrRRdwpg3",
  "key22": "3cbTbj5SBpXSDuLcpjoysHh949LFxQ2L7BWFN4kqKWiufR9ZK4d4dpxJWvUyTQBtjX9V1uuoq6FRksoZvz58f6b1",
  "key23": "2sG4p2ujwswVjSAij11YxDfc1fSQtZKAFGmxvBvWEEkp8siqeJ9RMxE7ms42tUYhsdRtmtAz3oCfrjAWnGowcdi5",
  "key24": "2HnfKtJMJ1kC9TxLjDwiwp7QqgizevEtoxzJTwTdL1JZd24zcebVHSUAUF11nwJUr6xofT5TEEyve9oN6pmyx1c1",
  "key25": "3sZAMxrGbd96YkC4Lbesou6HH89k5XwvAVFRfabFsnDoEyXydeDeieTKrRmupLnU2jZhAQuKaeNfii9V5n9xmXPb",
  "key26": "Yzd1fu8bvGPRRDCwTU7SwpGCjQb6eEMHTtqcTzsxpKYQW5EJJNQfWPJVSGvpNpjGBQ4Q8QUoDkyW3Lj9d9XeLyt",
  "key27": "5S2HXQeaqB1otvVNn5s2hSBbrJjvNXSMfo46zLRgUcdW7hnMGP8WotoArERmBoQiSKGbXVUdc5qZnEXctGXUSkdR",
  "key28": "2yiWKhb3eT2pHN4cCFpvxuZ48mGGbcSnc7DRd1kzvphTsgbteUPbxSt7GtbNkqtVXdHgPVUqDTBAoEUMJaNa5L9v",
  "key29": "2xSVZPtG46NUfajNZBBcYwgV97qXxgHsFgnE3mN5Qk4iMrPPA4a5WNynVSaEnPQgUQpSEpY7JUXMGRRWGXn35abz",
  "key30": "3tpzs46usfMZHgZbjehXFCupN5qjbK2DNVakwzd5acyynMBYNFA6Z8p2nsp6z7ErLc3WN9c2xg1ASs2rydwMUU4S",
  "key31": "55ib4jTEdasAJLrrnb34pqSxiSbUAD4UMcoDbPfFzoLf1vL8Apsx8rQMeNsasRHGdCsq5BQ4tD3otwCpcivyX5jt",
  "key32": "2438Hi8ZdKttE1NzYLqe22HXpmvWRtJp4W9LhaALvMDE2p1jmY8NthLvQny2QnwuC2C4mEnt56jWLAA3rBrTgpG8",
  "key33": "GBtTP9yW5m86yDNJdn15d451Xh28vq4qH1gteUkMfsuE1vGcXncCqzN3M4CaXSBqCAD8VLxBHCfbwxZ3jF7bkcG",
  "key34": "5oQwDj7pPgxA5s67J3fZ9VjWS1mhPsvqBXKWvJDbMct7UdmwX7NZAkjntjHM2xkJWfYPvme1RX1XK2jRbt7uhji6",
  "key35": "422YpRR76bMfjk7YM2zL5eov3ZQpHxoy9Trgqs4zqZE3bLMcXMPDvTvdKfgR667PEhz9SqvD6PAnESJbZDL3mjBY",
  "key36": "67i6hSc1onbDVDBemXRuXwkDvhP8njMisDxLULjkuiXyas5ZcB1LPYBikJyViSUer779vUgjs1oBFx7aAqseEzqB",
  "key37": "2QkxJzhPcHWnuqqB6tmTt4nqXxzdAp42ghvhBFgy7yKFnxxmp1qCADda3QvkqGT2oaE2RiRgPtzTMXLHNMN1ZPnS",
  "key38": "4Mmq77w74PqKMduozGfsRXHfXwJzq6nEt3YxircwvUAvaV7uUJaFyhJWwGoYAKdmt6dJn4R7S1baWpd7sijmKTgC",
  "key39": "vBkUoKH3K8pddLwmiAtZ9CiMhfoLLRmgoy2QHd7AsuSUiMdgnSRHEMs3C5UjwDwqTBek4Yv9b2AjqFciwahWTsT"
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
