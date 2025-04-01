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
    "4ULHkC2gtQqSVxKbwTZ1zcHZeXrkUMs8ijQKzjtGktUA1QtxaxbER7CEvLRSNGaimoJSnBmoNxAKLShA6nsbpvjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZuVZh49c9CF39ZLoXHbQZS83pectx1JfU1eRQFQsJ849Fw3tj5wCJYcERV38n5DdFq1uwYK2zeKEPEG7UEUXCV",
  "key1": "2ENzEV4AXTULuJayBoEwwwy2XqcDLkAb7voCAr9Qf99Rrkqx72Ec2nnVQXPcZFUToVZvAttXAADZNAqirLwDwswZ",
  "key2": "3MFZ3TYfsCMjr1JCdKAKzYCs3MX9oqGj4xMP3VAAcj2utfV5T4FHiFd16g2xzLeAb33RCoiyLrCmSQpaBotzUfbk",
  "key3": "2oqbxp8xEFgrBMuANCxuHwFxGoe3yt59DNu4K5m963hPqy6SgmkkamxNCEdb5CVa1ahmJwPpt6RuUgiCTEA94jVq",
  "key4": "4NGifq3QBmHd3z4d1ZQx88zbWKLsLXFccxaAvz2tq2LtKBcemp46jTMkW2h2KWDtpBaUTHBgB3WzPTR9PnQQpoEj",
  "key5": "3K7qEyN1v6phcon6eAkZrPSQ2yPvLk11hsC4BhP4rm6psjJ9DJRcpGvA6FhbZ7La4kwEqGxGW6tnqqRxCUNs4fZK",
  "key6": "Jx39fwdUNq6FmDuemd9y38KujUEg6fRYN8jsLisGVNibWt6zSYQ4Xs5wjmHnwXLUz8nn5Yy4fJgYk7B751LPuF5",
  "key7": "2oLVVP36WPfJXbYmipLiHnEhpd9LgVNfVCc3aSaMw9gBpSxLw1n53HMEtX2PmUQsDzYAyFWo3fKKRcmDpDDqPb7a",
  "key8": "5ZnLvFSZTSEKLRmibTTnZ4t3f93GG4CgxpwAzbEjM1QnpchY3iQhEoUH5fF4uR6yE3GzgiJ61eS5bGMf1tCJV3L",
  "key9": "5oJY5Eimpwo49Jn6yn7G9f8xMybuvZxmX9GmEjL7yjLo8GKwit8pAz65EJgjN1vLty47wfxQ7HwfXWpXxhE22Y9q",
  "key10": "25KShb2FZ7SZfPG25TMj3dxdfLdRjZQoGgFkDP46gtSszwNuQ7RBfMXgyZJXfXvVUMH1cUkR9yAPnn9tPQthFnJP",
  "key11": "4Gbg8gewBGnDB3Bvf3bKdhaKeMfdeFcX2heQK1aSv1iYNuj2auZWvkcEDKa5fhU6LPZB1gjbBbfbY85DVwoST1fx",
  "key12": "3oHLn9WBTZmxjD3cHpzfzGAxLGDyWazTpz9pY59WbXmx7tpT8YHN5xwSJpUX9j3w1SRZnXMUJmofjAz1H6RkZipH",
  "key13": "bydUY1HyWJLMn8a1SjRQ7zqfZ2ERdSbbWDwPZdxGCt28yYBzukEZw445NFGhiXoc2wZP7ydsub4JcTMxTk5WrEg",
  "key14": "4J6rQbEQxEWww4GyLivUEgiy426HuypRh2bXudXDqTKbCDDfDFDL6sc4c2HC61twzDbFdwTH9WSFP6KYoPb9SCjp",
  "key15": "5j26oQkWSRQ1jS83kM99s7KZoJySi5anV7a6tSzysb5tyf4oM6HzyvWCqCU3nMCufzeFJZYbhDEEao8LvFFKkAw4",
  "key16": "2rWGLWQB9sirNJ6U8AREN15din3PqupByKHCuGusudDhh1U1mNv9ADFfRYzEHHJLAXGjnKNwZcJKBZ6yPSeGpYD6",
  "key17": "5eaJpfLtK5FoSKcTy4wXuxUUMza1d7vYjvkRXdgeV9J6CQvcakevoKfa5CwujGsDssfbsbpnqhoDeat1xu47qqSa",
  "key18": "2n7WNoCDhZ7PB4PWAmWmRsGaXy1Z89kjGWcU9Gc28zGfFiPikj1ygz5CyxwqyHtsAjNKK1SmifHdYF5wotm9HiKL",
  "key19": "23jeRP6Aady3eudKjxN6kPaQaGbezmS5QVhYLfBDF5crdQnKgV3pJvgfWdrz6SuCSnopQuAvnjD81LYTeGPrZMYn",
  "key20": "5LbxnvStwMgBwhM7HqHWTpZyoh9FWnsu9f3zttjwE4rKrxQ7K47Ax8kaRsZL6Rc9qpD2wGeLpyvYYsfiigFJtiuQ",
  "key21": "vVxBmhFw8FE6P6VApMM9e3o2f8DAR9uut6x5gQaHLfahbrr5FaSyQHt9iMnSP39DDJL2vz8yCFm1jFdRev1AgQ2",
  "key22": "286sAEEDQi3diJMhrtESLyacyTQ4wL6DLqWLv1M1zzfhp9GkWehxWjb5nWbsNdmcd1Ts1FnfNM2G18poYJ8rjdHE",
  "key23": "32ca4dAGjhKGbKd7QuCe6ky4j7sFmziUPeQgvDN4eWMfezADnxUzKHx2GUwmta1Lvp8TxGFr5FQvbfnz954mhfAq",
  "key24": "3BZ1B1UcEKcJfJ3QemhW4aVDvj6ahdmtqgBoND72w3iyHC6xkkaHGzhrbmMsLkpw1o8D2dLjgcuv8kV63H4ZS98e",
  "key25": "5i59zagTprT11wQnzhTw8c2rURJyKiZnfWiDnqMCE4whxxUCkyTciP97bZNNPQmKge58sktqwdx4iUptWLn9kcV6",
  "key26": "354kD1M2VTuj1Z8ji2iv8SJCj16Rt2GvvJKeBy5xdU5pbxUMW4rWTeZ8B5MAPkoG8GAS4uKNoUpRvUW3n2nUu11w",
  "key27": "5KAphES5ANpPfzNnqwutRYUJzc7bhkQZ91B7d6V2bawPrVuSbHGGn64JkrVNcbsgjtK9KyCqB4GsV9wKqDLErENM",
  "key28": "2AZ4sJyVtEZD6gKJUwXAU2GySgiKvhg4qfJ7bqMVaHsdJ4w7bSuYAxZdb7JwD9xwdcnaD8JTF96EcB4vyRDz8PZt",
  "key29": "4m58kNBjf6HHVggypdeT6YwR8ktKopP3tg6AupX5XouKE9CAivbAC3Q87PQ9A6K5PiXmMToQs3MDAEkBSmbpceQU",
  "key30": "iEy4sjKZMtpC2NGGRjQ8f73TyEYvRGTH9xvv2jTQRy7c3i6PceHbVzzP6urynGTsVVX5t6YcCJPYdrr3Z372MDw"
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
