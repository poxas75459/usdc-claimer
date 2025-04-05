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
    "49CoXiTcH5j3Uw7fBCvfM5DQZeNcnqiVkuF2C8gSNJ9eV5NBtuFDXwRiBKseTBSDq4r3RsbMcDZzoD6BLi7VPkSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eMJDUqF7EzQLBYzkJJsBKJNXm8BAoyergHMGNGccfXYPQWCPbCCGTpF9riCzVJZgzfrM1uYG2hBppRKNfijhFFm",
  "key1": "24mgzHdwXbvWrP9EvrjbyX4dQNNwhvUDrYamMYHBYcFjVacAWK4kcDPiXsAsLUsq9q6zpz21EXi752XF7AMQpsDM",
  "key2": "3kkhyvabYmUjwGvXBK4VnQRxaGyYJULdjcjEKNPqPLoK7r5TCzsWKpQRM3UNwMu2Tdh9ZHPvYq3ZUjyKLnRE76md",
  "key3": "2QpnNTE318RZrNQj98HgBQfQ7vjjHGbGYaC3aXA5Diwv8gwFqapzoKb8qy1onfsj9vfnaiMpTZmyR9osxRCsD9oT",
  "key4": "3tohpMiRBCmoEtX4v8PmAFb7pZghBve1Goq7JZczjSi2RiuuPs2KNiHfzTm4U1wbRiq8f12YHjCrzmAkTje5Kktq",
  "key5": "2UtH5vMRM22xJh4bYPGUEB5SUBFZQ8Bkn38NnSwFSvJSVMBMUGCsZ6qpUejGy4pTr3zGtXrDmvrcfrCL8ebuj1cz",
  "key6": "347fiyMjSPfnwM6KhrAwRQ7bSHhYLZQGRyEDBKpQWL9N5hD67MyY4uqJXMxJJMCRgSXBXrrzJEgd4ryTh7C39VSH",
  "key7": "3MyGYueNY2aapNWVT9pKm7cFvYvSziH9rxRHRo2F8FzT4J5WFQwYVN78GSfd35Ruh38zZk6QGXiQ8YKNSQFWfYjF",
  "key8": "5kpRtnXCARvMNo1EeceXhw8mtjkFXWPCgx4X8NN1QG5UcLgUSXHW6jiY5CzEqoec2EQCszzVmerMEr23xeAC7qK7",
  "key9": "35rTWcRmFAdDVwJo22pPF87cusrdQX6tLZ7BAnmT1wKSfVX4e72X1VaKhwc6qx2oeDH17spu5od7YgEwNzPP2rU1",
  "key10": "5pj2M5BzUKpzaihRuo7FAP447HziTYhFRKK941V9AfgpQcYCzVUqoqhrzCzM7M3W8TAczR67HXFJWnDfsRsnjksb",
  "key11": "4Hzo5fdNdaDHgVfTyU77imvKn7BccQs7SanxBbtmwzvPMQoZDRaLnZzwQwP7H1V4C4FGavzjgRz36WcYJPuHKWVk",
  "key12": "3bBSkDrBi8VEu6sGHrUaU1fgNBZjXgR1YhWR2gHpEtdYfiywWqGxRh5qgFGUKopcTcxq5JonhsbgJooBLe7xyCQA",
  "key13": "4pVohREBSLYCDqKdNNu9FP4BYzpz6WG3X8VeQKG8H7G83LS6bcLTt2GrxGk3kt21934xNnV8Jkyk6mKuKauCjqNd",
  "key14": "caS7Qn1zM8HdwL7tYYidRJFSHUeXzmyq2chhjgdZyMrjcQWJ3SLPyzjv3zw1z4N7iaCQcGYTCAw59cBLvvLgcGJ",
  "key15": "2owsGzdR3vCNaJsuPfu7xakZZwfXBkQtKAUmCaFoSdEsD7a6rSRfCnYp5GfEjuJpTJE9ddRX7PKUF3MP8nbsto4Y",
  "key16": "3CXasZwvG2aPEU5GBVo3SuPbccbmFTYZ2ZaiSUAykYT4mSeV8HWHd2L5sJFY9WEJya9N9oGNNbd393Kn5kMsvvJw",
  "key17": "3ArrLBB4P9g7yFTSC5kjb495sc6NJWMyxbg2s1cxMZnGRW4GNWUriEAaZx5HeVJUXVMWttV65Pv5mZHN8mfZzDTV",
  "key18": "5xBzaBbcaQkFBt6SuypKCsUaSwWcjRxBr2dnfZCNBYwtjtDDFDsFCywtz1mFi8mSmFNng2kqd3Dueq4DGrcKEfR6",
  "key19": "4A94KgpnXnqeiYSSWDxt6yk2BKPzVRR3zJBGX3fiLu34kbDjSjubQd1U8pvj2oh5DD1XoRQdXdNdSvHQgD5gpn94",
  "key20": "4YFqMB9XriymYjyugxtk9hSAVWc1tjqLg3ovty28h8iUKfgmxEJ7nJTivDBnoASKidJ6msoERD9yy7aijzmQbDRJ",
  "key21": "2v7CcBPeHE4K4dhEA2RHvNcWQW3cGUCzwWuTTjq3wVk15MmynCnNotnbDfWxUCFpabXbq1pztmxSXQHn4cmcorq7",
  "key22": "2CehAHP4tyYqE5ytPhJTZ41s4sVVa1MoXoPCAKsr3hRZDRRU3hLHEq3feteXKXjYG6C6boKPJt21cG9XhfFcCxZx",
  "key23": "3M4stjAxrTzVDLshijvLasWCQrnGzmVonUbv95efMbxkVc5rNNBhBbZcnHCkGjcd6ycgkt93gZuVemcbKFM4QdJt",
  "key24": "5exfxDZBCXAi9QW4BEgTLpR2y3HAZ24pqSgyvD3wAAm3jWCPjKgNmb9HcREimD4648Zy8XGVYDQyjBhbgve5HoFU",
  "key25": "34QiJeRTC2NpoPn5MZGyqkd3QpXRt3knUyeMWQKyZRSUXiZHypkBvJv2ZJpfUkFfh3k2VQRpp4cz35g9UcvfDxfR",
  "key26": "8cp8RerJrwYa2THxAprubKSj9dAxUErnPowNPrd38LMQVs1KrMgzCpWkfVU4gXAwpaouPYyHEgoCSsz9fny2CL8",
  "key27": "22kZouhroeZ7jNzAxyosDN8cTmAZtkFfjgP5BxKTz2E6p6ZonXq7hVtmUmj1iQJsZ1UsHm5XFo3JRSHFUeHXQj2f",
  "key28": "39hxFv3njcXGskMUGyGV28dqPqopGTkm7p2vUqHvVY3obv4edUGR8ysNzb1Scd2D3XUv1BNH1ANeZjYEUfT4dhBQ"
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
