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
    "5TD9wrm3TSDgitxRjt6mgVaDChZ7MsBz9N57TS7gdksgmmUSNzLB1ZyxXLwEABG8seQSibJP2b5xZTLQE2MoJgMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "erRcYQ9SVYSTZhKTkt2eEJgPyExduZKfcfcKueo7yPzV3rsVPQoi2WQm5EJp7NyzS1naWbYhQq7f8T2WDV13zYr",
  "key1": "4tRVTPAh5aJwgwuxdnGMFFVEdXjN8x923BWHBLfBDPzVK4g5D7vxgJTVWyoHswjWqa44R27MQA1BMAenCwfoxxJ7",
  "key2": "2hHzq7W2exNPDWQpv8i9zUQ4YJECUvSK9mRvcBAhKD8zbLA9Q2kScc161yY3QY6rUN6kxKB6NspRkNWxLDYLB9Ks",
  "key3": "5w1mtReQZzHHNuX3PtdKSC69mqiw9ibH73qaCjg7q5UpzDPe9ksx9e98gUrY12GRzkmoR2Dc9fuoVootSpPUoY9N",
  "key4": "4dV5wqFRfUfwRZD9R597oZv48wn37Way4T8TByPNb37ZYPRnoq4AKJMqZZmFdbYoZ8sn8erAK8CPMdgMSjiVnZuX",
  "key5": "2u1csJCqeKbQkFvP2F4u6byMTTRYjQjXD86fbHR87xMVMQRSp4yCZDr1CahaH2MQxjWXNi8AGLGEu8UDwpWXxZEJ",
  "key6": "jf3qpppXyhs42etm5Qo1E9E8Yvad3JFJ4hDQQnCemFQbcA4jWTkWtRSBmceB9iixw68Uid3WhEFCaZh2Gj1iW2p",
  "key7": "3T5NkxeP2RhwzmxQGJHQPZNXUjDrUHSbTTvfyn5ophyjgEBWXiFjq24AfSYgfSpiQYnNSaPzXGfqKB4pw7pW5WoZ",
  "key8": "4sdaZJErGY7eQGxaatLo4r2czqPLYxroTQzdQ1bXtqa4UM7nqycwbWJqt5UyoBzd1Z6ydtfc75LtGcK2Ad5cGkg7",
  "key9": "2FVenFjRR98nexP5e5j5wQ5grqFjQLunea4ComidGKqtTKd8gCwwjysSLHCewLWfqwDbEKfTWgnoeDAdyB8X8kqu",
  "key10": "Z8PRgzH4oWnNmYJGn2LZEvF54vFHgJSvjbsoBLtJBHjnk1WUzJkYe5qxURrRxWxLsW8oLX8VgVPDSt4JfYwvkVm",
  "key11": "Lt97X2Cjy6VdhYCMdVuSPbYgDbypYkkTmMqSvNHvy69TjvFpvRwPSkZwmpKohbqyQ9DbQ53dWvPDJCKaff3VJsK",
  "key12": "2zcuqtToNKk64fZdpanU28poX3H3SsgzNMMLaTv6Q8VqTiwwYLmycyNhJzL8zwFZpcoXfR1UDP7aVgjtiVCNbedm",
  "key13": "3LmbL1prTPSPz9eu8sSrgWByuQEw4cNXU39RS4qtkS8eU7PnniqVaDaxyheWjkzVQjCm8mYEGNfHytjk7CPcUz2V",
  "key14": "3jrKBVDComKT8aBnUKQTpRxxThaTfSL6FEgFbRy5DrL4PrfvepCR1Ypj344jC2JrEuoYtp762u2pxeqQq9Bbxcfg",
  "key15": "5pJHdZmyGm1No13hRRW2DQvBMyi9E2xU64exL1piKSCpwb7L1bGFmkR5iKzx6AoLRz8shPaAADcZqjSq1XBbKkMS",
  "key16": "3HzY56DD76T64oQZVXEupEvmS2wsakJo1TvHeKKf1128D35Q1s5trohZLnjDbe7BRAbkfkVGDP3jK7ZRrG4R17cS",
  "key17": "3cJPBQzymP9RkhT7uj4Ns7YkuKKwTkmBaQZx4vVEvNpNwLm6z3DumaXVAeKHz9xwp5KZkfYsC52F6ANxHhxfGeRB",
  "key18": "22CA3LBb9MEh97Hj5BHZffXeLkfZrKDadJUsizhJBieqHsCj1o86mEz8txZor1pGmH1ZYHoQBTPquiaGpD49rups",
  "key19": "pMJJ557v9XYszk4gFoMmTLyySwrmLTbaHESn34mBfJnVgNbMFDaw8mJ5Tto82WXynkghDvEDzXZ4AuE8c7yKwLh",
  "key20": "5Uz3qiHMTmaLyCo4xqFYk31oTCu9Dg9GUdvbus3ydbh1DpS3LBGixdKDnpdRMbKxcss7bcenEvuN8qS96FKNeGmp",
  "key21": "25ZwjkPNcgXRBmb5kP8yez89wHL1dR1y31B3T2F9iohQ8igmoFh1zCp61LPT3qN1UnARXtvn9TTE5KtwkrpYRFMf",
  "key22": "3bcSCdx7D732ZFfaUp3xDsvfuzsiiccBEBsibns7ME5Yw8dkDyK6TnPtKxoy35YiievkxW2VnxLQLco4U8eZV2WK",
  "key23": "2ttjxnB1ui1au4aDzHWVYQuDHDE5KUtMe4fMPGxmvGTnJQFgQU9cS76ZJQ22zQbuk6x7LsUXqgAXwp1o1ZD6DQz1",
  "key24": "2QTwi1VSe4yH8uTQ9eKzRhrey7GTy7GEwGcbe6fPThSLn9uh5rSutPXxt5dVeuTcZXmZb9Tkfv1j5RWoDZzrcM5",
  "key25": "4T9tT1BugcTbtqw2ZMxAJBZgXbnQgdvTLMwod3RuVudvxeKDMuCwvYZGmTscNe6h9tzDPx45aKHXuJgWkqEpnka2",
  "key26": "4jvXSFsZxbb3AUrUfZr4YC7grj866m5MfUGsjEdLmUYVfKZsz2kgyf7E2DvsLcckvzef2TR9fG8S8TpkgA43qTM8",
  "key27": "4N6zP7VA8Dv9RGS1QjJbJFskLUer1gAnKZYNgf4TMp6uyvRmyZfGs1ydQoqvKmamgnFrUkziLwAEgBYCgnjKoBxJ",
  "key28": "2XrGkKAKxhKGXarvPw1dkVxrWkw5wDzvT8z4NBJbAPdVEnxXHbNmBiGs2DfjEFMod8H8whtni836LxXU6RBxKeUv",
  "key29": "2dUYp6irKGiFmnwEkMEx91p5s9jUdmzeu92ZZLL9xadoVdihzLQcT3hiQnD1se5r3CtubhKRdBJx23QAegmmvt78",
  "key30": "2dwzTdMH64p3MMyDcsn84ZsN5VYcSKjUhqRrKooWBXiqdpn5a9EM2mFhD88Cw2FvyHRYyDw2pRxjRLL51j8hkvaM",
  "key31": "3gW9yKkshYCoFxyxGWTBTyQ9tj4A3SajG3619AtgKvP4PDUWL93UFYGx8HrBC7NzYrNVaARdvr9mRoaELYY7Tgbz",
  "key32": "XBNkicxfURPJgSEgVZmP5gqkGbNdKMaywPeWtr84z7NXwrM4FTzSThGsvobirVbkyBsQ6Snru4CaKAG9LgWPmkp"
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
