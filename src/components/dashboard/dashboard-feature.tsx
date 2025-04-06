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
    "3VBiS8y5bfN3tgZHgmHHRzgpwvefMeAy9aao9ae9jVHLgBXiZdV2N1VXwpiz4AJEBRxowV2kQG694zJyBqmtgwLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLZ3xMRPF7r3vmScyZgDju5xvKe6KUp8pNFgxUUXX3Yr4b4pDjthg2MTH8o4BZGJqKkr7hmh6BWSPFwqS4pq2jj",
  "key1": "4vsSndP1KXXwveFHJfgwsUswrhxZqdFfjTL2PkC2kZFA9BXHeMniUBJU7DM7ghopEEZE3FuFhyPBEKyCq6kmRax6",
  "key2": "3vCSHN8kVqcvM1PP7b7wFxxyfDfZtsY2gnqGhkvAUKLHaxJiZ9SigUjafk4ubbo9WjSS87WphF3NfeYv2tHwVveS",
  "key3": "2rrDnYyzGfpDctSQv1R7WAdtWyEnuq3a2yvqXA7ovJnwFU653zmc7Wm31abxf2ZrcMhxAsdbP8YV1vyqAQKnYwNq",
  "key4": "5hSRfm9RnLg1aDxLBWmXVr6VSrgFGfdXciTBtcjGW5s7zEJgRQNmHeYwCFYqARjB7iieiYvTSeQLmUdAB3L2yWHY",
  "key5": "5TF27uuxad8S1qBcNAu2Xeh5ExJe1nRZE55uuha9gV1CerJ8x1644C81aTu9UdD9N7ZSM1xaWYhMh7PaPbhUPvsn",
  "key6": "2gYUBoikstQ5nHXS53WP8Cg7y94Bz4A9ttjPqSfovVjXpPzvxvUXBuPJuVPBEsRmVwDZdBEeKs4C13MozivWWLsK",
  "key7": "vmR3F1i1s5siFjtLRn5z9gaWSWa3oKVkqEMzVna2A2RA3CtoMww2Jktg1hEhJd1B7TzLQ3YdUER1zE6aUWNBHxY",
  "key8": "67gDNBgcsxPnbJGTcWgDQHoHJbSNV1MLhhBeptSAViH7x2WTj68AwNBLXT1krUzY7F6raQBae5V9fwzxi6gEm6Tu",
  "key9": "qfxG8hP5XXvcnejH996Q24urJbBh89maud2GAUhsdcdhAdJgz4EEdvr4nbaPdxUfa4UcmbafAgG73sdsU1HJF4Q",
  "key10": "5ShoCXnFnv2rgb1CJ9xjpc8j3qZbWX5Z6WNJLuKu8QkeNc3eCtgZDkx3aa8qct52zZ8a9n29rw2fjRfsZSz2tnib",
  "key11": "2jZZuvCQ4H4LqT4YgjoDFNjRdLLWAb4KT6v84S6uFZw5M2AxdddheqvG7RMTxzPQkobxaLJmyeWANNcfj64tf6z8",
  "key12": "3pqArVAtcFpErAFuSoqWN2eSS64k7WXhEtsRkapRuMq8BXoyZzDHVPgX62bycQBfNDM2XKiJcHCcrduyVHt3fHtS",
  "key13": "5ZxnYTKKk9CQrMmBKzraHC7aukb6SDdxkTqqxAA1mxLQ6fc9CNtkgMEpYx9eFMFKn3gtzBfPd4Ui4G8uS8K534ru",
  "key14": "2wMtm9T2TEAin7wpgopAbsELUqQeQWXNJk7n19YSEe62Y2EnoyvY44hcMjECzk4H224c53Bm7NmcppJjX8cPSYBu",
  "key15": "3eKyZJaMDXBz1irHD2AR8nnEiKAzib7PQ7JcJKXDB2ehA1x5cTqNgNGLy8W1WCaDvJ47XAh4zs52YzRtfhazjtr2",
  "key16": "21FB8x6tvh9k3NiMseiR4QjYzbZZ254KEHHv6ZK31GbCsV9CECjT8jZzjY53k5TqGDfY9TypASsBraW811tcfJpu",
  "key17": "2RatHcGV9KfM961VgPjBNYya3QbgpnEnUGat7euw64TmXnP8ptghoM1VaJCDoatimhGp5DhnoQVoKT4AjHRBuKta",
  "key18": "NuhKRvGx2VqkGu4puQHrPZ2w2bujF8h2BQgzbodSkDa4HKvVnADNqncJB4wbWhtkqoEsLZndKGTgLUotEumHZM6",
  "key19": "2s1RrpivGLrKQ8Etj13P1JU5ZDirxTSpAjk5K7nUjuNsDPVMuKxp4CwjwCHY8Rp1K7kKygHTDaB2Ztxxo8Pby4bg",
  "key20": "5bT1MeJKSJWegwHcsLrd2aG2us4ThjJzKbANe6MNDSJ7GZXRMk3bV9UdowbuVcAKwzYQNrRWFh5MkvNMFfVy3MFL",
  "key21": "TBMs7DGyBCPoQz5s5J6BegKGjJypdHUd2JVQgp5r1tfhaHVCh1CREju3hKhj3qb2vfbdqTtFeGqHit9AhBFW3dt",
  "key22": "747VQxsXsuTZu6o6vBw5dmqR1myFtMm5v3LbWD5JvvYfVcYdakQPbuKaF5ULPJyQbD6MpxJswKsXhCpwJPD19aw",
  "key23": "3WbDTXLKVbybjEQnbyzzdmRrCv5EtP2fLYuQqZeJggERUu1tUhL92qChht5d8W2Rd9g9ieMsGvydvxwyPPj84BMh",
  "key24": "3AAWRXvHjxdexDv6BwLjUdnvdfnZCsAPqVNpZFStXF5aumo7CMvQqi5kYnEuTAHLyhjS397eLAbJC8kBhJRfUskh",
  "key25": "mN9BNvZFW2E28ksg5D5ZkkD2uVD6bANpkctLu8trBkJRx1fWg3cV8z61i8V85C6mjFpSeLPGE8zvSP56JDmUByG",
  "key26": "HLemErArETxyjEPVEqLeMEwRZCgHhnmSuTNJjvuo5cbpmKSXuMULpzF21LZjKcsCVJ9xEve9LCVJps8wJhnZ75e",
  "key27": "5tEAhn3Ak3k8Y4ZyZg4wxJdywNkrxtevBjH9MLvhcG37iP7z1SQXcXanWc5EHoBrdtapgu4B6mHNnGkpSvYkkfJp",
  "key28": "4RcSiEZRNA6Z4ekmfno4pzH2EP34x9T6i7mijkPyf3PEhcShLAtGHfC4XbuYAQWvCwLXXbU6TKhiLE24urwYeHDk",
  "key29": "3dqJkaSvpRUBDC8MQVtTvMQAmh9wXyU1NKM2Guk37budtHM4fBhebV2cP74Kzw4RtsGv2CbTjVNF5h3TYKjBnYMU",
  "key30": "3m6kh2EnoBSbNMThEWMsH2NfTdepn6Ptko1mPhGYALq5cvmuKMzVSfgtFB8AprfgdL6Hr7yEAEVXF4TG6cN8Kd5r",
  "key31": "3xNj4Sp2yz2DBMpjHhTBVLf997oxGw4ixNa4BB681qVDVwFxK7NTTqR6866JYMQfqWHNT8GvM2VYYSUHWW9ac4Qv"
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
