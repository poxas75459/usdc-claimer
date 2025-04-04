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
    "2CqcYepLxnN5P9zKXL2h6GXi5sCJgUhSETn7CHXcPSxPfVHWK3z17SQGdT1kSEgw3uHCLaZjKVokx86JqpjJ8RYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hgcHMutc18rKjVNL9hJMh4fLRTctZLCxMQvxkSfBwr4gKcQ3w2YE8QFRRf8GqUiHZsjYWcru8CH4ZKVWCrmeYG4",
  "key1": "62ctX7kWZt9A7Xq9FhF3kYzxYuTNkYrkC9KMwvN9vaafgvyTEbSqiMqk7uvq2xT8ZfpgeiBAMN3BiRMtg9ELbhNq",
  "key2": "4P4BdSUMJciUnHUHN4bAobchU81Kr3TV9J9VDgWCghoBHSmsQs3T5StE9KuWjUN8trczZXwFvpA1ANBC5kZPCDRE",
  "key3": "5a4TjaZZrFD84goE86tr2nZhUetd6k6ETp4KTQi9iiPjPy5xdunN1sTCyufPhNtgZkBDcSqgX7a4CyNgQv2yhB9E",
  "key4": "2aH8kDVMQWF2nN9A8JQn8bZavFGLfuhkJS6pYADcMTQezdXPnFCSHEBvsMUdirVgc4weEMkXa6fn8ikyC4jWgqv6",
  "key5": "PX2cgwKZxjRgebhrkrgi6tnRc8HmotKcjvh6N4mjB2Nsbiyp7bA4agGc544Z2tTtJNbvEvSS7qxw495K2jJ1WsH",
  "key6": "5ienTGywWcfEYcDozn5bMh8skPDJikiYGj5puvAvXeuk1ujrAvH4vbbBGsjAqBLcrrNdDGaUx7gBTNnEfomYLxSu",
  "key7": "25SMmvWcgTDnQFRNXhtyX21rBB62fSY2rxaYr2F49K35R6sT4dJAtRQ5nDZzSbnmxPmFKxbiax2T7KpP5wuBJC2b",
  "key8": "HexjsetZh3ztrWoyKJ1ZXDZu3FiEG1pV1BirSotn3xnvreDU11MJY99NYmEjZvwNpMst76ovEahHbNre2Db82gY",
  "key9": "3DxBraZ5tE3p2aH7w5QP3hCq1Gt9LoKgMbhSuoFaRURcRP8rSa8fui6cJohM13KpKb76L2sxWsh4DBSJArHVbyKf",
  "key10": "3qgR7nMJAfSnGzrxaUnELp1gUhVfAw4Zagfw6rck2fHknGmC5o9h895Fo3kY23wXZbs3P8bGLSRge1HEFjnLvmms",
  "key11": "5Y1QvNcLxdYXXUcaXNSJTqhWhKjtrryp3QAsjf6Zi2Nkpvr6e19GbQ4sw7Ub3zaZx6uk1ca1RM16sWvcC9q58yqE",
  "key12": "5KMUTuizPDa378bPBcmf63B9ZYMoMzKN6oinvrBosHL2bdYEP7pa7cqsXfxSASsXoYCGk6E7mb5fwon5mcWvPEdj",
  "key13": "46hnVScRUvurprHxetnejDGDg1eVYpQKRe1o9hKQuXmthrcCcnJUzLZzVuH8zfraTajxxFVZAZuNohoh8gHn9qgz",
  "key14": "3FKuVNdEAXDWUZ2xw2RUxi2UDw6ohyvgyXLDYFMgXypq6BmttSh7k9az39uiAJFbWYJwSRv7SDqrzuXr4VWNrCDA",
  "key15": "3mUaaNhWnFc8DFx7tmC1PCgdsmqco7qVDjhZSuBsNvkY1csdu1NnxFUrJUZ6XokHxpMHYNDFUtKZ2VTcJpWK9ke1",
  "key16": "5HaNb67oHF4FAfYksLRo49qDBnQdr7MdjmnCwaTxyCRnjVGNKXi95RmYJMGpGJiShAM1bTCJCmRygP9zeGpwKhWy",
  "key17": "pXymsXZcxqcKhYXHf3xLCuAzBxjPgh4P1psPvRnFcZauN5n7Qg4iNda9J4sA8HsFKfm3SUzB3sVqJkmUQndUQ6z",
  "key18": "5QpfEd25uhMEZeT2kojC7YPRj3kEEv8vXQf4rmhRyA4htnAiSHtPUpKxkfDc2BRPr7uhwLeeSJwnAsECrJxTD98w",
  "key19": "3whLCua4P2v3ibmkT1vXmFLoRTF1fUygxVhNH3DdAVavsd6B45xuB72CvUKxqxKnL8r8umYAV1xKJKQV19vrmFWC",
  "key20": "4UCA4E5r3KY3pMKbXHZFJ9c1tje9HEH3q6W3NzxzVmzDrSQ6kJMGa5mSEYE76cmYPFCMx7om12jtDQnt6qBP6Zt4",
  "key21": "3U7RGkVgGWM7umsy8pecDaRCLuTCzRP3UvJnpLJwjTptTWJC9UwTnxiWvwWMTmybxhRgv3drLeM5CkRN9WD52TBL",
  "key22": "37fPedSW68M8zqRdUKK2yGQ4zYLRKMekqpDBBKj4Aexz9yxKeoNrF6pytB4UkTyaCWKeKGq6u2NJ3WEC46s1wiWM",
  "key23": "4pkw87rFqpB24SwT3agmje1WLu4LJzgp6wine63fxCayjZRfubQZjxULwiRpoh6Nct26BaD6n1CMK8ox8UwLn2Ku",
  "key24": "4tnnHCwcYxhFQdAkUnfBUgPkMdYptyztx6ibzA2Wm8K5sfpGxAwxR3KZPBi9w9AVvKUA5EwtMXEWQn1DXQ8q1SJN",
  "key25": "3qyGT1yYwMyNattKYYhcmAgpsiJUirg35sq61tFmBK3VnqxBnjzTMgbhFXTKhTm97oT9XqvmLfVebXiqGvdwckfY",
  "key26": "34UzNd33FeBL4NGjY46DeJFMGeHGT2YGd7mDnc4RXLNyWexb8LQzeryYxDQfsvK7cH9ntLsg7N7nCWaZiR8mMuyq",
  "key27": "pVM1Q1NmEMnnrciRsfSs3h3tfUqJTWrDCnLh4FDwkenDG7FrKdhSPGALkbs2JT4U91hGwtV9GGudsm56mQ9c3rD",
  "key28": "4PEtgncM44qumKwCRUTBRZLHP3GvUcYFKUdNs88d4YrG54BtJNpjbcYb5tZDyUBhEJMYc2UnY8jaUmD9SWvbm7Ui",
  "key29": "sHRyEYJuLhUNSSFvqSQXhG7q3Aib2VyDPwMPVaEQRqixKHZTcAmZRGXQ1TiX2fM7gQKt6nntXyg6ZbopWmBk9Nm",
  "key30": "2Rm6fy29LPqiSWWqxnzYKwJkrtTW8kqCd5Ezn3AFgoNRdUqvGtpBwu6M86fptzB1pjHrU9VtEYx9vBY8m7xMP5Ca"
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
