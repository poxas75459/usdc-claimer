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
    "fyy2QxjSSWJFgTdy83PbTmexwDz1tu4V62hQ2FWHjdRvLoZDApyD5cQqAtG3CiswE4BY7fH5EkKc6mZZ7FgyzPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X6MqPDHyHVZFM6DNZmeggkyYnMA2W2uLMRZu4o5fx6UzEi4xiYxuP4v1nNKuag9nQAAcAEe2tKXHuYQvmaMtWdi",
  "key1": "3WdLbvJSTDDUjpWnMMb5tz49GSBRH8H92rYWiLC81obw32wGnXkwZjGFru48crno2qbe1sZiyYRZbazsNkr2JVAH",
  "key2": "4CNjNaaWjkxymCxKBR2SoTi3U2SsSvdcqpcDZLWA4t9vxCEtjP84tZB1tjMakK2DoPWH5uy1CoSJnbAFMFo6hrdW",
  "key3": "4Aizdogcg7sCgAkqFHRwxJfGMMjFCb17N3SNuHtYtavM4ZMqvzoW5z5JTbb9ThjuAVn69mQyPMCbDGNpjAXju9pw",
  "key4": "5vALQSVmdtE6EEXtGLPgtjwt72DJ964EXeQesmkiN5kJccQGGeaFjLDGaJaiGbscTSQsgM5ZGS1LpnrBiWxn8a99",
  "key5": "H9mMXRhtpeeiNpP9hHxCEWTEpDVbGpiaTrk8J4MsneafpYx8TZ9NTtLykJerkRRjLhujThPhmyAbPZKcwPM4vfK",
  "key6": "4RENKaRzDSR4QAFyoomNYc8aHKsRwa2V6uaHCB42bLupip5xAvBL9wpmb1oJgKAWYfhmB28rmp1F8QxNfm3KzLLt",
  "key7": "48ozqY2eqTJ72gBp4YvU4MzPo5UXukwGjSEUCUXbGYqjMyRbCxj3fg3BGYnBvWTxzVahDSY98jCgaaFWWbDxEn7U",
  "key8": "3tupXgeiKab5iNw7v24ZpDdvvNUe1W55Qp6qmc5hZrPLGeXkVZnQnGCzNf2sMHo6ZBU4SwZ7dPcQs83E1dwJSQAX",
  "key9": "5DosHV6A1VoLCa5Mj6rbAGxdAgLA4tnYErtqfyGnBcCevwKWc3PZwJ6LpZcTwZ4kDc3YjetpCbUHQ3iwdYdkMeBo",
  "key10": "3LSD6Wf6DFzjf5mNgSxBFDRtjRLoMo19pMBcPFRJBCxSk8LFRJ5EDHSboL5woaukrPQQmb8aKr5vqiuXa5H4LB3B",
  "key11": "63Hav4obZskQAaocLZ2JZsW3QwaVseBRXEzsad7Fz2m8sVnJcaYtptoSEeN7Mq6gvT1eEwJ5SVVSNV9ppAZqUVxB",
  "key12": "3pDY89VEx9xM7Fu8tmbia2LiorRwUZuykgfZjd8kgG37z21BcVEjXD2KDN8ofwS2NnPR9RkKqCZdzUG7Wg3DBgc5",
  "key13": "27X6N54ohkUcjXtfQ117Jhfeq13LgVEEFKgHStynuX9N2kQyHrWnmXMdFDhpjHGr7EiT8QwixNcjjU9oDrr1zGWm",
  "key14": "GycSqiNMfT4T6JQjavGfCUCB3Etuy92wCUVLXySnaj9gFfyjgzzaMmMAq5YBrgLNNpcCB5jVt5GVFqiYsVjdzM4",
  "key15": "2F42tgb17x3McYSYqEGM2hKTUX2ig61owA111cKAwFhrtaFYiKwfFkPjjYZHb5Roh1h9B1Ap5giFTUr4d4SApJrc",
  "key16": "24jxBR5HgZzoCuEcSWv7n4P9V5Kopf3kefB9hmctYt8p3zTxPoBmmhuFEjrHo2BZd4CVU1VdF73umMtmKPkopJZ1",
  "key17": "4UnsWsCa18K5BsT38JfT1ALW89Fb2Eyuv2hG7Zry6DFqh5fc9d9thUWBKyN3Pn8zoCmJthBSVDHNW1tfYej4UooF",
  "key18": "3qCSuYNJG587Ad6XCk6VYPSovRpfasjwz3BjXjMkDt3HLZvMfAyhrJQHkfnNBTqCVjUAwGLkvWganGfSDTjrLk5M",
  "key19": "Rz96dgtVuEDHRFgck45SbvWzFCxJQ7jwzWtC9EBXLTMvmn8seXHpYmM6fyhG7eS8ggZ2rvMeYi5a8xiysgDWQPR",
  "key20": "5ngqLK5qYEsXgxXee7z3MVMUpXAAcbGNskmxDAg4XgquXQuH6b6AwL3H4yknEGCgiYbSk2zqaAwfTsNaJzvtoysQ",
  "key21": "4CLfAMN92SdNxbNtVXfr8GDUsUYJtVouSiXeCvGpXHFrWV3NSts8CtGxeEzf6MuRigMNLEUKna4R25EBhxuJovkk",
  "key22": "5hCzSknncGoSSSFggtBoMe8ZYJXGdzFGtA38xCRjP7WG2TFAstngwabcA5fpaSkYiLzizXEZVeXnpkoKpfeKjSR8",
  "key23": "3G2nY26S36cYii17hBQJ4oRwp14GLEJjwFqcxuQJ6xfkoUm6u9Y2ZxznQp52QgJTKY63V8m5bCbVQGDnWThseMu6",
  "key24": "3fv2fKmsjrKcEyGUaGuvRzyzH7oEHSx2Db1KRgXtSuwx6FAZEmYd9ArHLtBgNXKB4RQi8GaxdBfdDSZ1x7KNeMXp",
  "key25": "23F2UYgJHfojL2rG43XYoWQXsUayTLFLHYEAbMHUy3QFSh874RdwBdyF6S1JcKhj47bo4yVWS8Qb5me9L8TU1vd2",
  "key26": "3JUZ3q5Hd3pmyCZPQN8sFFyR9aEyS3Z47zFdP6RdSzNgWTgfJMaHW9V5SYyjYzEwUvWxQfkC62zHB7hQEqDnNCNv",
  "key27": "58SR4sox5bm98kdfTsqhb9JkebzWE9odFsZ2EUX6aYQ2tby3tdbxUgSvkDdDPfFWTptUA2A91recMVZbw5XWqiyz",
  "key28": "xAbXjiyv16jwEfufBEgi8NT6dSdTLLmvw8pNH72DAfUXjM9c5Cx9h5BjKvnePB3bk9RmPTJkDMFyzwp9LdY5dpY"
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
