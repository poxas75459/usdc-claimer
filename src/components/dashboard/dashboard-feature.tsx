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
    "2KfUfNqMLZD7cHkS7vnNrncgTJqcNRiJbeSoduvuaRxtivoqSuH6AhFRbk43oJVjjndoH4MxXwpa5JfWdJxzaDca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4nEmhrLqU5YUFy1XyJ2uTQ4QyLppoxBZ1ost8T7krbJ7nse5ZpsQLoRWU7RNz4t8CuSJyeHwfbBwm5tTbN975d",
  "key1": "32xReEqehJ1qfFV7qeyJp6oa6tUgaVEhsDQvg5gbcr2MAPJeHfEhm95UXMLnmtsBXdnChkuBZCvs5BJCR6FFGpMs",
  "key2": "2xdvCPLvT7GWRMX5cN2S1hMad9YUsYam2VMWDYHsPXaccpQvev4hK3HxiFzxSMxu3hYgRwjheePbrWoZGD16D6sX",
  "key3": "35t8jTWLwJKGKXZPf5Y8GnDftfsMKjLptJWiK4BKKbJ2J7cL9go9Vri7eckJ8hRkQtHVg9L1JEyXyQD75cWUvPQg",
  "key4": "5F7FLsU9Srv29qwMFpXvi8tyWNa4vT2eLbiHysJoaUf8u9jLncj7NENdMAjde1hAuZcX838iMt2JNSaqRnqgieun",
  "key5": "TbP6SWTQcrWAF9BWaXcvipUZ1JN2xpjjAMngMsWeKYNV7ZTBHu7EY4NzHzWKbmE2xhf8Nsm6e9Eq6iSWu58CtqY",
  "key6": "3kxJuvrrwokaion2UDnBt7m9qesGXRT8RrKkfWmMmvpdGafdspHhMQiydmQiEvQSg9dWHy41piL3ThD3RuRtJfek",
  "key7": "5AuxbnSff9gKHaiydzeYfUUL1ZsUsnKmvTuUdKc4kx1XSSnGqduhzBf4wacwguxtXurakWX9xhgxCQ8CCFoaLaGo",
  "key8": "5YxCvXCgoNan8cgG3n666BT9KGcpRuCjxTyvKxmmQXqQpsYAGxiJYDJe3SdwbirK9Qw7JVkv2cWgBJ9ZL1FS3TQy",
  "key9": "66ASSGJE1aihXATWUdWtk2EHqDb6LWLa4rgD38kUjMG5bWAnVxRRUUDmWLThXWabMfgXVrkAxpgak8BaUg1cat2D",
  "key10": "5tV93znp82ZKDnFiLp1NwMvHa4LMQoiQkwYhKF59Gvi5EfjuCuKJKENDCd47UXsn4jubHtfCSEYUyBcfnkjuP3iq",
  "key11": "2Fnkc9LZLAJLsuq2M6ww5b145t8ydMZgwtDtsTnjKBNQbYmR9Mt8mZUDwBVEt6rzAiGeeHcH3A5nKQpQXYz62ro8",
  "key12": "3W6GVLp5dWCtC8FoBVbkmd2GshBKDR5mm35x5j38JAWxTUUWmb5kVFutjjKQMDtYPbhrf7jXxruepRbVqjiowoo9",
  "key13": "38JvVa68LLrBbEicPKgwyXXfbe3YFD5FDbZFbiMoj6pkYZBTsqSb4EPycBrMwr91F1wru4Sq1i1UaFNG3bJAy1Ui",
  "key14": "2noagk9BhgpGCpeUCJaMKSuw2Cv2xRd4dSMyhaRoygy2daSEf8G1h2o5nVW8tQbXScW2vNRBjobnfpwVo9HhRmdJ",
  "key15": "3kU5hnvMh76unuqaCd1A6phpxrx3DsRJekLY5drvchd3F2on9trpa6PeoXMYpCpasgtf5gCE3sP8pYnCNaT9CYqH",
  "key16": "5pf4fhrhAXsu8iGjmkQvb6maxLujHrGWv64FbDkaLLeKJzVEiw1GFPoaovWsbTBJ1VvwcjjwVCh1RcnSyPPqMeNL",
  "key17": "3qtBdPVceEuHZXEX4YzX1d9vmcqXPv6C849eKoYtX8jJ8fXuDoCxUrRwMa1AJHyUbdKBVxD6qYX4V1Pegu3makWd",
  "key18": "5jzmUYAuk5zX5aZ41BwzoFxo5cbssaTzVqbTkHmQ5Yg9H9L8gBS2XPUHgguHH4qvhUbd5idVSXqddvZCXghpY2L3",
  "key19": "5EwEoCAeArnaAWCdYL3RNX3PjTH3mmoMAdwJazie77DcQGyzC56NXSYr7o2bJg1BWEWnHDq9wCiASPZNmXbNzkyu",
  "key20": "baJKccfHaNkEf4EqLZ2mumMnAqgn5CKyw9P5Vq5zfQtHd8uzfyiHQ9uFv38y65eVPs3kADJ5xpZuNZ6oYdSRoSr",
  "key21": "JPVfqdWRAmSY9ox7E2iwyTHMqpTRue7gdtd45TF1BxbXu1k2oRTyPjngCnHAJ3qqjMGA1oQ5Z6mMB8EPFD5Tr3z",
  "key22": "2DR63DGrgWm3MNVZyu2BfCv3wq9kwXskQie3fcHEgisMavooZGmqEviw9KSsZDLogVYS65iZP7MuvUMztofBuY7T",
  "key23": "2cQRzRmomFvKh3AG4iDCDwzTj3YGLvaVuFpCuYvLotZSpzf758Mr5BTkFfeS7cmfpvJWUVDq6meR8xQcsc7Vqtqv",
  "key24": "KYGQ4iG4XZ6Q1mKMGv9dGdTFjQB3YZqamnRYGLe45bNmi2bJ8pKAuW6rdc4DD9WqwGvs5z9ztnwMsFWBAD9Hs3N",
  "key25": "2vRUC6z2CEFsxdgiLbGFVrwonveLQqhX79QP35und2b9tuPe8iunHqr4BUaBJxUcQtHrf1tE4PbfGmdiLkGjJmF4",
  "key26": "5depNKrsz9y1adoWJnC9NeaQygGM7vioH5NundKjPmqg491VubBj8ke8hYbsVLCo14vj1hmKYrCaEaWqWbVx4XrR",
  "key27": "38KSxxmxsLeatQSoScsweZ2sfyVrCHK2BcYjUD48bBAyDRKtvuTGbuUyshXQudYmbn6dDnzC4ArGwssn2GxvwHmP",
  "key28": "261JBjYZpfYyZtzRL6QwXsAonfc23xFcdqwHcbRQmwUaK58N8ZCg7Y48dTcvwHk2gQic1XTiTrXbekxV78JG8mTM",
  "key29": "K6pJdZJ3Xjfj2WwL1MfWMsQypvufyVhPAT6VvTgr5ndeAyomhPDk3skJjhYZpRgo1RZ8hUD5ZRsCj52bcCa3mrf",
  "key30": "3aRfkuFgRnjWUWRT3Ania9jopE9r9BzLFdKmgvbouPbRo2cAy6rL5QkTw7vk5GFY6SXbMbCGfpHHTvcaKF2V6Yfu",
  "key31": "5uPnV64YqVbg86BVtjLDXpmo7Vgac7wHCSVCZ6iXPw3Z7F5RcV7G4GKorRvirVctSpm5uPGLDbpEeSRi48o4KPVs"
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
