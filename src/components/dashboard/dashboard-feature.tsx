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
    "48bVqHRwseazP9B3fgPzZvqACEfAKobYHTjEvxqD9anRZKJf55VfQtK7DS9j4Ti3JH76V6Z7o5iFcX8Y4SxPY16z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VtkhNpxhDCharRpdAHSKR9Pnc79GnG3iddPUqbboj7umGN8tMeyL6yPTuURwzS9iGEh9gGBfMsxy15cG7V3tcMy",
  "key1": "2xxohPoZS1KDqNooNbYfJCayhBAXAbk36ow7tKauvhQ5Tx3SiqagLrasabZqCsLCNsucTmK97vVqZDFdwprvYfbU",
  "key2": "4juGgVb6go6ANbpPBTRfZ8Dds8UdJwHAw87yHVQ3JXHoPU9gABqo81iviTN8xdkXFqvbbpZdbmaiNExMEXKTKuwZ",
  "key3": "yYVtQvvcKHgxUjzLgEsuM7xpJdfeV1TiPWiGGL8yjfr1PpqJcFdy9hidJpvgN3JEsYJDNxp5GtCknNuroCRUnqh",
  "key4": "2UUdojoSiAX7C7SJtjXjYZA2D46aagKpx18vmDiYWV45xyd3t4P3KRuUx9bwotHPe5zXkcaxJgSE71o2yzSpz5Zr",
  "key5": "9gS7sRYsShbDF9ccmqnkXgE62p6XzLuSBJ8qBY4tYaBUkGtQmxyJE9t1bEaWoqfL15P2X5N76xyA4giLQjaBtmR",
  "key6": "2Eizn8pbjMQkTSFVJ54NW7FQh3LokGTchXcJntvpoJpTjSoFPv3kKunZavgVwxYn1oxex8QGcvG2MJxYzC65B993",
  "key7": "YVgifcQ3dhE9CXU88GYtbwD9n1anqfrTQaS2QhejC5T2QNqZ2zSEM9TCaArhK6yyJTcnamdpBimPE2kfAx2Xsg2",
  "key8": "21rsypvGbPfrvr8ryySVxfogbhZ43Q16G1foqmTT7vMYQU4HsgiuirrfifbvNknzYt5QxYC7BTxB1xtn35e7859Q",
  "key9": "G6oLMh7R5MNWkAMQBCfHjZzwrusBMsfjzsnBUrGvoHaAVQPMbqD3NUMhBoPJYZX7VTWP3foiRCCUoc9N9NGrE29",
  "key10": "27Z8FYaqmD8k3BWUhVQTbkfXvP4nLKrfNdmbhQB1cFE9eaHGeCaKn9BrgwegDuGh41xpRbmotXPffYVju3cT3XSR",
  "key11": "4UwgW5inufEhG4NQkzu91UnMcdkRBd4Fn9zs3nF334CtqRHAKM38qhvLk4xENFydbPj8beNEHR35LmqzvcUUUzf",
  "key12": "3u9vTi9BxgjmFPFDLkkuv9h29FJcVcZyTjv3fky47AKBHeg1zVknDNiqTQqEAQ9JLfgR7y57A4Y8hxdmhecSskuu",
  "key13": "uquH29jfjR9pi6bMukvPRJLx7LeYUc9ewv2XPspig9VTKQQu5gi7RprQysY16i9F4yXHNHvMZ9KumAJ1ofUvVWj",
  "key14": "3vRZmqd5xqmMx9qGz9SAPBme7sxLurwMnE5x1w1XBewJ7fUPAVK3vn8trCkoeLP6WVQYzD1wY7xgsiegJFDE3qc",
  "key15": "2tx7RqLktHcxgfyLJ2DGUtBfJuH7QrTcNzUBNK8urK81D1dvgG8jjNKs5BesUmeP3t1Lynx2ySkCRxp2dbzqg81P",
  "key16": "393fpNuKSUTfr1LvWAoU43KhBzD3tspSXdbpXZ4NJ7T1eLkzLFez5UCiiX7ueRr22MyV1uWKjqmQAAtmA5n5rAoN",
  "key17": "48hdjN6AAK6Ui7u8ZviKJGbU7UggtuHMKw1N9yBRmmeeGWEKn8qYXFygXVNkACfV1WNWPZRMMEDhsJbD1v5BQeXx",
  "key18": "3yFojmARSbyDBSzfQfZ8Cku4hRa4jpPk3cXr8aKkPutJQUjhRuTtMJ8XMpkoN4PSgXa2uTytErpmbLPn57CekDiE",
  "key19": "4VrdnAUV9ipmM4ad9HJcNxWYjiTuAikmeod5CqH3iNV3P3K1CXqYUPkG3FGRdZbfokPdtnqvFc89ZUWu7pTSQMtg",
  "key20": "4dbQUSnUodDE3movohun2KT56pHx6EBwAxye1aedF3bX3b7aGuYx2qkyKxuqtZFTDVasPR21E52BuxcoDdVdL5h7",
  "key21": "Ydyn4S65atkfBTEdHBMLhs71shtmKLAKUbRoNf1ZyHkS9TfQSeFsK3vztM67UXripeYAVJNfxT73HS86VzQoygH",
  "key22": "2UJ5AvSh4AZSWsnnEtQ7dfeQ9X35AXoBiaBdV4ir7LSiJthRmybqnAZz7hzNwgYX5C35t1qs9SBUvXgrD3rN6dv2",
  "key23": "2k2GJXALyhV6dVfUuq3jidZA9HS4j4YDiPopecKgeNTTrYoFKC3Gbkwvt7QNVw7Rk5sv8XwNzoX1j2iZGCUbyBdv",
  "key24": "3dWhvhZDucMrPxaq6PtYd3FELr51FFW19Hihw5oBYaW67DNR6p1m1g1G8LJpziabGmrT36YjZCdoYbBJrkyJiY8A",
  "key25": "kP5rNTsxPhmyka29CpcB5YefhPaNKG5ZyhYS1Crf4nhgHwuPfnUg5mMRmU3zhL7DyhH3BWLBAPFfdb9gFzZTGrg",
  "key26": "4AXAakEy5JzM4kuVUkVsAWJrYHftMJ3hct2wMui4mtpqqsovsA3qsisedupB8jZwdwyWsU8ea3moXeZKiKCkacq8",
  "key27": "rsHeRbGMMGxQyU4V6yBCLjWUmGzsKBCMJ4ZTTFzvunsQmKVhWmLhgUAoASTikfD2AVBCHH9hp6qKAA4Q5J6FmBj",
  "key28": "2jzAwB5w4yR1wL471NVZujBkihUoQpYvrvjbGqehGtJksuvZ5UWZhC1UejtF7WYxvd56WhfYapqxb5KSWSpUXex8",
  "key29": "4AgaBrXuWAeE4EN6XqbJJykjwAZGsK9n545VqHpATzUXYrU57qQex5LMfzvNeQJj43xKqRsBeqGnHZwSJupT3LYJ",
  "key30": "35qMmzepZoFqYzMTtud1fNMFsZB9hb5K1x8eZJPqMM3bGZmA78srx8dSkEgqb9HvUy6HV44ehrM1ZHThDSLXkeJG",
  "key31": "3UZs6iaB969dnjoy7udXKBaACGRmgcuspT5xxUaRpXKbF2epYUX5cbo7zubfv4ogUmbGju63sp619Z34quL7KQTb",
  "key32": "W6sLqPwqKryTNCjJ5LZv5uADk6QXoBpeRcXmydqGYVzAHtEPVyeueh7rhnR4iEnQr6TGLZvLQ4bEwSsG8X6XjdU",
  "key33": "4qoioFjVWozhKLdXM69qFUQGTyrYTtVjkSJiTnX4KcwBH2jDzugHEhZnoR3iM7iKGchZHvstCaPBPxnuTW6a1zjy",
  "key34": "48cpkUHaJ1aSh9xzvtYEm9KaGjxn7w5JsQh9LGYD73sdwp3ZU13VqtC6BuS13VeV1TqYMv3XV7NizLVuf4Lhb1Wa",
  "key35": "5h8MNG8u2wZpp1Ltro7A72F8RasQNitwvpf7ERFk69fD8SU7jsjGh3zDVCg7ZwABLj6GW8qGH8b2XFNxKtyFgWSx",
  "key36": "2rB5gN92CPYmacdmdXTk9k8VZy6PtYm43x1z3rRJSH9yhvMWJTs3ykd2muVjdsrPEd6D7sfrPTrRR7WrfqUxiwD5"
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
