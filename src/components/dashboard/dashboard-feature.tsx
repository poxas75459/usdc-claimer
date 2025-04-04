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
    "4WxsTeMAPtCnP7Q2d773GyLe6b38LRNRQ3wj7k3f6Ry3jVE9PPG9PzyRw6GtYGyrhLkC58qZ3sDcWSnksPpquB5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZAkGfFHGcfk17cJnF2GNWnd81AsQ2TwDFe4UnENYGUW7BT42joZLMVXuGURbjXS6CbKTKwx1nXH69c9kdwxqgwN",
  "key1": "RRvkCKhDxLbqZzwBbR5wkke2yAnPvK9XDRWLfCDTPzBbZgjahhJjEMyFsghwx529JAuurvtqxwz4yjAWa7MN78g",
  "key2": "43WNRk8NAn6PBWQLPLYbpxo2D2RCzA3Bza1C3yZTMhBMBSW4yFV8pgb88SqpKqFc4vDaUFnEAzZRKu52CoasCiVh",
  "key3": "62bVmSp2NexH7QsCznJEsfYxceFuVwioMUetaMkBcLvoaSLTkhwXHh1Effn8xSL3DhkCqysvZHMYQXhYEfvVSgbq",
  "key4": "2TS3f6GogXauv3SK4hK4n1zHtSjvQ6SfCNsr5q7Akcb51ESvXXgaTE7psaW1sKgkgyqs1CdD6APZB3rssDbNn9w",
  "key5": "2GDv7Gf7E46NkK5iDa2HtmQNt2dWPctWkioN42HTwvv6jG8nUJ7HnkRcXDi6Aa4ZtK3A9JAc6vCgwgshVFcYqdBJ",
  "key6": "3L4iRYuAeHJCpDsFFeGbc9J6sAtYv5kZAQvfzKFcdVkcQMj6AcaLBaEh5RuJoqvLS4qyGvfwB1bK58yciUvDMhtw",
  "key7": "4CWwcJ6cHAvmALP8yhCZYjjF48ifjgLpDHzFLDZbsQQPWNZTUb5gtv1B1RaXajNEXrbJthhJGxBR1vy8AYp3xxq6",
  "key8": "2RpRCYsfvqg1zt119wvgPiJHFbtjugPGm1QAJSdiwvdLFhN1pxrAgiQtSccn73StYWNHiuejujf2GiCT6A1dpZzT",
  "key9": "48kx8hGKdU8X2Kcjzz8inP1MJRGysUrNxdXbqwUsEeqXXn3tg9dJyd69EaoUY7qJ2o7SopiZYXrpYfQhAKwAmfZz",
  "key10": "2ubz6f9b8eDxAa3i35uLkmmh8byttZ1azJBEt4pKhMkP4Zx68hePhT6fJoEJenNSZFgvuEkoYU72ZKm2JLvbxZvT",
  "key11": "5a2Jv6kYN6j5zMT2NsrmMqLXZHJiKz8pF7FLU7fVUfzJog9KsB3vdfLPFTAhe8HwmgV3yT7iactsej8SVCbisMTn",
  "key12": "4q6smjTPwMJvLtRDhRQ1awfh5ybdwnSxmN1KYZHomoHdvKbrgNPYgTUxDP6pgHUwxRLNE8NgxqcRv4cfBzB8nQML",
  "key13": "5Dzht7MDo8dVk7iEU82DkQWza2hZwHkWGNZrrRhRTsik3zcrwAZwmxvV8xvBbHiaQVKsDUaFndsqx5unVpTko9YM",
  "key14": "355H4tryzzqyT5dUg3tDrFiXxgwz5CXYrk1LfJm1WuAV5W7oGB8y4Ch1WmZkxpnwkaE5ZgSPNhD7iDC8J9zVCZDr",
  "key15": "25sfc3VRzxcYuXkypc9eUUhbQrGB8uXp32XP4TkHCu8WAsfSMoEUJrjw7wWSdL55WtPCiFWozFyiekcGM8jeTqxn",
  "key16": "4koSCWoz5PHzF3oWmvMooioxTRYyPaRzghCcHcLfoe9xMRBtjHHQ1MnAte9XF1HYpghA6sg1FDDVxUC79evv6q9F",
  "key17": "2QDLq1XFodwmRc7tNaJrwC4X3Mkxw3ERmBmF87Ruo1UMQTcZEZGhCThVfDviViG7Tx7Tx5ukHpbTZh4uPi85Rr8y",
  "key18": "DwUMZDKcJH7uGch9ywWiNmHprySqXn4oANSYCofvAk3B9UsgUNeTH3J48qAqfwxbS4CA4rhEdpoMVrPhHk5qgYi",
  "key19": "4zrX9kZrjcLTazF9NbCrMDmRZXSPYbw1wP3mxoLAwUqLPwMrkXbArEcpWotF5JkDnZD5ogwYWrabcu91cJ6sreua",
  "key20": "3zucmMbNMUeGZHbm55SrBRuGLQFKqUFtZtjQEsQ3Ri98ZHmKHYTrt7ZX3Qwm1e6vRQt31AuCXmGn2ihenQsaX9ub",
  "key21": "kjoDQqUHvKAAx15Wm2T3H65PdZDPuCNd4hp1UnFYtZXr1mjTPD91ggTkFL2brKwfBwsVtvbLLrainz8QWBy1wpM",
  "key22": "59EcUiSWvZZ1aJpMww9QgeYXftQmQetVX8dUNukg7U3QBuDwx1Qoi311Ku5KqUPGE7sbywqNmnfD6PutoxqttTH1",
  "key23": "2KERz87tXfy8JkENm6WZGZZtYATHh9Xv9ovm4JmdERGryBajAF68QfhdWifuisYR8nKyd8naREWsEBAm2wJ67beR",
  "key24": "5q2idYcwF33c2LnECJUYMLWzXDJ6HdUZM7i28sfk2rxd2mw3WvziPPi81Fna9LoTNHjSTEDzJxkCiwi7N5gffhvM",
  "key25": "5xqrzMyuz3oA6z9Lo7aJS5Uj35aGm41evskrGZNxLJ913iv3SMDzSEiUKQJ9GT6Zwe3nK11CVuX1frfUvwqumH94",
  "key26": "599hXjnoGP1vimsoaPt9kPZi8XBtJFUfHLPpZooozzNCoAVn4x8JfUQo8QcUDNwA3LZxuU87CHJ8a6pdheoAhD9Q",
  "key27": "3YSEj6wwSguY7o5qLG9U6q2VR8HUoT3LXjSKSibwm9yVsYUpREjHrGqrJJvkdHsRQ9fxfRMkU9SjgN6W9PoqRF7a",
  "key28": "5CZ8NJdJX63nAd6kxbaZGwpRxCeg8Yh7PxXvSd5CZAaPU62YQhVjRcmWBn7VAmDYinvF6UpSrgFC2nmUW2Ej2twq",
  "key29": "3twsk1PjjQ6gBn4uzA49Sz2kHFocH6JdRLstMGen6dKx5ScyFaXBPuagHcafMHwnKxDeDRtzd7dDjju4V2F1hn39",
  "key30": "4DTMdBZmN4yamRKi9Vg8ubVa3MTjqczJSEa6qCvcbzvhhLXkTT9jmtcrGSPbz3ZFiyt1nT7TwbrZ5nZM5LNcGZGt",
  "key31": "3yALk2NxbnLE6pDEKCLbXwF9QRvADryWkbsFkhkwSb8jBtx4JbBJjdmqLv9CD5yA3uejf5fEAF8LJFpxSoJYFKrG",
  "key32": "3MSjuP1KNFQ2q2FyZKVPFFqWs6LVwj981fcL1zMJpC7AQcJs1YgAr5hL5S8NxELhgCSPphvJoRRf5qZ9cLjgK9UD",
  "key33": "2X5Zf9VJbZS3DhfNhR6xzdswEdoue84NbF18eProA7PEwcCktw1Hc46zzx5WXwFFjYUAk8N6UmTMCbwYxW7VeHGx",
  "key34": "3HEQSFF3RVEsGHm5sBV4dQquXkDZk8B4jJRotPdDHACqdBJ4FL45pzm8jFD6fvqtBAyw2o1cw8Wzuuhed44gNLKP",
  "key35": "3jR8FDDuGbwowWCtPw5pw7ExeccysV3nSTXy6FmYMi3t84i82mvs5rQHHaxFcRBsB7Gopnm45M27WHWm9qXQu88S",
  "key36": "4M6b2uWxpEstCt9mRzpDawgzMxtvsY74SqEVDwAk6naH4NDNQw6jHNbMbvkPDQXg5GHHB6Aw3MZ5wiDqdH8tjHDu",
  "key37": "2SQDth3MuBueCg8c95j76Zh4epzr1Qu1pXkrB7HWWNtgJGU26UBmzEA9VyEaayCUtBSzKQeZ9TDu196Mro82hZkg",
  "key38": "2J1uK6xUxrQ4JScHJ3rnPigT7Hqt5jQ6iK7Zj9XXtuUkR7eSMgRRLDkM7VsG9WLoy5xNNjaLgoQ4RneMXZFMJz2N",
  "key39": "vwnd7tLfZXR7CmexYwk8nfu5qYxuZPAnbtouR39g2MJ916bQGvdKcnoftTYKcXrytQPGzTzPpGsg5bLmPRxaa18",
  "key40": "5b8G97r4f5FatLQdPN6ktmF9CihqVQc9iTbyM1NBp8zHhmDCHeNgbf8xSGT1ecCSY7L9RHbmJj72SSnt26U5f3Ux",
  "key41": "3MmEY7vper1aiktjjavYdfpnHsngwSszbPgswDyGoxKgYWkA9QKoeXiacgvSPeyuq6KYW5hxcfVGtFxmzsXQxtL6",
  "key42": "3Wm2AktN5pjtJ1NeKpTfrW6n8YbxqpDfDSK8i7U6GdnMjqPwERrsp7bnAoLNazUfwCMFzXdtxgov9ktiicuArd5n",
  "key43": "3mUC2AsFw8xD7FBvvx8LK1nvb77qRmm5jMSiNL6JXhYUxmQ5rD7FtbWwMBU2JJqm1XzXxpnmZB9BMj7ovT7q2Wea",
  "key44": "2fnHhRTi916DsC793fUGtJ2mEVEFt7Fdy1nETMzRRZHmuuZnndapWyjwByh6HnYZ3EXv2bCVqV9nokCQ1k34ZAqH",
  "key45": "3SiRTrkUfTPSNgfHYuJJPWPEftaavsXs4KjB3xsKtJHqJLtvRnZPFoYt9XKtCPSLt67wbeb7gLXoYhqLPbadiUvD",
  "key46": "3aKEchkdmqDrsbXE6K8hwvvpHffJ9r7JMNVADDnuMqKmkAFGHQuVWbWVGzhmopiVYZKC21JhTTzEmxEM7cXsmU3p",
  "key47": "2WgoZ5LjAmqQ28boupJvPfBFhoELrQWCZfErsn4yTCb3tSpWX4zDJqAKChERRdVmy1jPiWZXwgtHAo7NwgAcSzYR"
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
