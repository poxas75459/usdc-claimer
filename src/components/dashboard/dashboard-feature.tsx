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
    "2ypPoG9FhFRD54QaxVj2R12obSgjzK3eGLe5DAGnTv6zeARgvjch1gjqDJnnDoAjgE92ffswkn9qajeHvPJ4Bd6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V22SbmSMEd68mBpidHWn1SheKcqB7RKwdvHVYBZVWyuHmNf1b8pX5kK6dSris4dTWSb4XFavK37qNgeni2RDCQV",
  "key1": "MKTgGr6sUtsyEzqb12ah2Cf62LxRMg35ehYSqTXc4tZ1UFNqnssK7fDhugEuponxWw8SXA97P452cFCvPUaqHUf",
  "key2": "4gbPwxuaNSmFtRADy6wF86gKcGEmcsjkp2AwBF7nwE5uJryC9eb957NXbH7Fw4N8Nm7qkmcCMYF61XXQidQA8jr7",
  "key3": "4j3CFtxszD89PZntBTmi5i3MUh5kbhRrW7t3SfSxfWJKSmMJJiuorbwLY2xQ1RU8sLo23zspAzfwg95dLqhqEoav",
  "key4": "zjCkYMfkkfCme24qWgB7KEDpf2C9yMQFHqeAMxaEkRkvnXAC6W5uAvW3282XspNZSvd2vZcJBoqxttmwjoUpsth",
  "key5": "2s6SEGWjtLbxF7SN1ZVR9muCYREaHnsGsjYLJztzVWCcykuw32rf4KPGZYCpw7SP8uTzW1Q9RL1YcrZVd7u5UipS",
  "key6": "4GQ2FqRYFjfmGKYV2NaAqQUPRXNksan3hBaXoJMvbe1xyvwGk6FqnXtuPvndHMcuJUTft8sFkte8Yykr6PvoH3uX",
  "key7": "5pocbLiCRAZkNC6rDk5aL4dTJsENfCvGDGX73dPGxEbjCTCBzGTftcRGAbUrveRbMTks7WbSDnXyoT6jDKVsbmke",
  "key8": "2mQ8b8hk3Xa6mKa87z7DvPEovfPYWZaP9HkrxMw4zERZJ1iGvWX6w66CjwA9KJiWAZ1TWFtqU31vct9yFAXgsG5z",
  "key9": "2BxQWU2Fv9og6MZ7gXti1ByvnrYrm8rRG5ziDJGYfaNQ5NqjQhHsVwuVgggNosJXpZ1Q72ZdbMzV5aFSggZCPcns",
  "key10": "51ABRM9DGZZVLBhJk1BLUDmP5awy7ZkG2Q8zageLRgRSqTBCnau9qDoVhoijXk4cY1gP4iBJWhniHzsYZS54Hjoq",
  "key11": "4oMctQbvBHtLsrmaVrKyRva8Pf6TDWRXZr7iTtitGHk4qTk4AXUBXLeJQZ9wSGeceRxPdXFYcLE5xd84g483Axwz",
  "key12": "jWfgqNa9edd49wBCtUTLftpHGEaF8d2WaUKniaYMozhmHhmXC9JLPoyGZ7tg68q5aGvbt6g4yRP4LxyKC6E2PKr",
  "key13": "2VcRgvC4idvW2M1Fdhb8hQyXHp4hm4MKfbYFiuhBocic32211x5Wqi8qB2oyHbqzrm8Sfu7zGkmpdEAeGKFGcUnW",
  "key14": "4Rhu7hFx8ra638uyTZxWcBaZ2ipFpdbffZ5EwDT1GKTCtTFCuGMJMHMkyYD8C1Q2MLUUbUt9jgRZFC1JmbvWYngM",
  "key15": "2ay38boyVcWJfTX5qVVoYAPKPQBoX4Mzpai2LTD1VBTpiMt4xe3G5r7vnekY9eD3XoGwwUWgnUxrwNDC31TNKrs7",
  "key16": "3aLuD4NrRtPBFxg3pWuJ27StMJXV8yzWt4hrzmVGZnPm8NMTHJpekG2ns5igbVe2MsHGUeNzeYQxyKbpMczTTTq6",
  "key17": "m8zf7npE3ampsrdfqWyrPN5AjPbUQz7U5TEcBpR4f3Gp5bRBdFeGd7tothW8uUTcsQnLyEbVbWjGq6NSd8ayHKr",
  "key18": "4rHX19jsQybqD6ZFTbkNuYVddfU7SXJhLnsu3tiBzcGwAbP834QWy1DLfFNzX3BjFg2PxKp8rN1YdGaT2XQy4z4F",
  "key19": "4o9qqeL5sdGBMozyfRb6meTW1De4N6nJpM2toqCbgsTuWW5rEEHm4N4dZ8xexfS6fykotMbkpzk6rL8ZnFA2vrPJ",
  "key20": "51PrfobTcJDVWdJhRSy5KWBxUcwTDKp49a9njuGpjjjGe5VUNgw1GDrz2N8VJW1Jp6ao6BKhYxPameg7fRLJpFHw",
  "key21": "iGSese3QfL7571ZJGnNqXDLKZ6ynweSwwMkRqwy8PAwQ3yhWUmj4zEdV8vczRUkH6HQCZxuowmcSiy7fYGee9uQ",
  "key22": "4QrF24iBrRZp3x7Ms8pvbnAHbMNrd1cvj1ALwYXBPzdnb5pqKkckqNCTxdMNHyC2rUR7k6qwMganZcZi2MSDXfS9",
  "key23": "5NogwYnuz43oMZV6okTS2vruEPda8E23sJn8yBJe14tb5MA7oJc7zeY2bmAe92hxPhpJaTUXmhMH5sQPCDgVKCGs",
  "key24": "4VQW6N9nE2AVVo2EzzfaW2W4C4q8zrq9L3wCzFAdUZ8jhxYMQoBvRDoMMe3XePQQ6P7xcF9EKJGDEBqrHHBjiByG",
  "key25": "41dz5A8v9wp3GJSU2qyvHHShY7R9T1wdcsak3dGAgB9Gx4us6qaLUUwJqZULLYSUktRk2vgXWkheJF1RvrmPbSyi"
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
