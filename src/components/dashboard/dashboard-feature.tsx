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
    "E72NJjvkvueHaeRxZHvZyM6Xn2Kn8GFNyyXEAwEAydJuipCTVxznzcz2PAtYHoE6XTFo7dWPxygEWRVmMcimqW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8XiuMKbj5Wodu7Pp9348zKSR3bLi7zfivgXTxpntv6boWCxSxrTQV8mEYziXivBoKzSe7r6upxhWr1giYZCPpz",
  "key1": "2k7KpGmkMJ453i3yw35QrtPoXSdyWcqMbYes2pZANo6FCaCtMiJiD8wkXFDQvDiG7gJttufrZ4p74e2Z7DPnrfZk",
  "key2": "MgPoSLVtNt6hspaoVDx87QHkJ5k8A8dZqGea4kZDjrepc93GZ3BPpwzN66Q25jB49CtZd4CtvQGomuvkJcatezz",
  "key3": "52jgCoRHXW9whv4FbXH1fFxxE4ftEowu7Uc2LEeMYu92sp97bcTLJmGJESDuCR1REvCQCborAvgiVaJSyBxL1YMw",
  "key4": "2ffQyNS3rprG6tsP5MLjy4iBC4XAvga1eQhNS57aHuSheK6nARdrN1mF38zLvXjiVqSAe6gUXZdhXmSdwdUjDnSj",
  "key5": "5V1Judfe11Y9bqP3LNYzdH3HdkiL7qWyzqCX34dDS7PaYLbThJWsVZh897Kr7Y5JZmBdk3pwrYz4CcVq5YZggDep",
  "key6": "4ujpZAZ7QE7iV11A5PZfXrfg5Ab1Zf69DUHzCPMZwBL4RhgwK21NCLjT1VSKtndMAYL9SLo6PNQMRFm3MDRp7mHK",
  "key7": "3JnCbAEHkBt6moXYHNvAM4WSjDbp7y5LRQeSKrfmfqYg12d4zqVnZbqZRrsF9cUgXC3UdxJA6KEt5qB6kszLDBwo",
  "key8": "64R8ByUm5SxumAizEVfqReJX8mCjov6B9ip8wyQ6vpscB5AuXj2MxG2kwrMi8gzLdo7hcS53CT3WJPqKBYeatCY",
  "key9": "3U7vV6nNSWjsK3r7DLhNRn1qGLFv5HHHMZ9XdKVAZ3fdtmJRW5xHYtGG9GbmDQRbsTmywzKdeCopSc2DeP6omDTD",
  "key10": "3T6A1Zr4ZK2NF9gmu4qfXrtrxhzHZKsXLcvpmd6iVz9JkWBV1WqNS368GpYVQnPHM8thUj34fPvkopESBSt8QnSc",
  "key11": "4s8wiho6JkL8UYeiCAWiWktSnPRSAoMvMShsHrtAT3a4LjuCcsJP3MjUcMWAFcsCi4xDnFBMEmzeFgQrfbTptQWT",
  "key12": "34HtcKZ7F6K34BTWjStz1RNfUsX3MDedgyyW7zDf8YhKQ4L1mHQp17YAd9PyoFBAxFdG6sHcbjes21noHZg2JDPQ",
  "key13": "4Ef6nANkyPg5gpwb4AajJi93NxaryUuuPAF5Ghe6j2SyWh4pKasq2nXCncKmDFR8cAQyDdS2D7GzRHRBVvAPBwT3",
  "key14": "2upL6WAu2mo1s64u6nNXXyD91fi1zbA9VPsLG2WptNQENN37qvXwnWqS8UTfSnRKBny7Zr5L2sz7dF3ZEBnZDR37",
  "key15": "3ikijknD8h6TE1Zyg9Qa9dqkcjSu1hwRA2MezkHTvMF42B2CT8vWoP8opZS2Nfc7y1Mxq272h61CSFKdHYeoh7WY",
  "key16": "4W5RhR8quqiwugJK5EV81eiZz9dpTKzjDyc15Gadf5LHjRQ3jtriS3oqGkjcFWbx21CqYfUmepgZHXmHHBibPCnD",
  "key17": "67M3FTnoJwrtTSq3sUdpsD4iingNrFBbz1f9k6YRAh3g4mYSTgQTp6To8vwVbQtiLxSkQz83KLZ3kBgUCU4zpkEo",
  "key18": "4B2L2tjAAsqCCeTfBybodYQATHMKnEWcHeaxESHquBCQhMi3M4mqXrKDXuEkPd7bjgUviGrVX3DxyS1FDJkGgty8",
  "key19": "4b4rzPc5hJ5UWYstDPqjF3XYQ5jt975Z9HBZyXHToE97eejtZbe4eatu7igBzBoDnxWvLzqdZaRACr7aQW8XGgWD",
  "key20": "4MbShnvHHCAA8ooRXcF97Rs4h8F8wCYAnAkTLyPBuoacCFz4idaiYnZWrZNoaD9W7u1xhYrJ63coGFKnpkE3KaeA",
  "key21": "5sJiSWp7bKHPLgEPjUr8HsZGb73YFfQMnNwVsppvUEdoNxnKWxJfBzXtrmqDLTPnFeMt97y5BQ1BLouKewGLBVVa",
  "key22": "4DSMDxH2s58vHEzpRBUU19ZVsZaNsJCsibWwJSZ9eKE9Z1YeupN8rAdyVpwRKmXLUMzEn3FbrcqzWiuUkTq5axd3",
  "key23": "24bPwx644zpN8twMygmKgAGjHwqWwnksk2zfzy7WNMSBz8cD7NPUbUCHFqsJXhNEzJuynz2ZyDTkEms6qSmvnqH6",
  "key24": "2CzCWeNhHSULKnR9qfgGs9SsmRpNVana88wJXgWK4JuHRZY3fL8uuPq2RpYk99QQjUt5bLEStaWm3sEhPLBggheH",
  "key25": "y425UGt8bVNLA4PaW9U6hRZ74MVRt7FaZX78brjmNe7W8ttVTFcERf59gJeu3WXDzraaLr6rGTtA35F6KXh5VRQ",
  "key26": "38pq6SgXyrZfGs2cbkEjsHHPfeVwA3m2F3UeEhgeRQmtHWjrPxYKo2d7WJLCU9ttM9EMmsukj9ofGcBBmGHyLFG3"
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
