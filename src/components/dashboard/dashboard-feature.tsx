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
    "2ffDJeeLtwG9uKk1iaX3U5C5dJNQqBGbdRBa5om2t6CfoyCq78dZG97TJwaJ8FhJbCWT7JRRkt4GLe4fXyQUZW6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34A4u7UG5oUN88P7NbPcdYrGu5pgQ9MWkKLM3pUXcgNn9KKTnS8gHXrYKCxvzHkbVijGSxZH29qdSDax2PRRKPy9",
  "key1": "4KrK7CnSBBtPVtz9DwzwKm2FxkZkabs3CmvzanTT3H8g8rkF9BAJ89Zo537fMWxNw78kMifiyWJWib5LwQUQTH8n",
  "key2": "3pFH1WmYTbNRfTspGknWaEEz4DrbmZP7Ngi7L5KpRcZMBPgw2snwmefoUH8FojJ8SzTTPDYzaoxhZciW5xgdvzWj",
  "key3": "23cTGBUcJR6hVidwmBZD5qz132X6mPz4AhppTngVvzpZBhnW532FLWiNUibX8fi1Hr5aJFRzskBopJ1Ydpj3KvtW",
  "key4": "eD6pGhwtJS31DAg67qq2KTMndNkbeLaMAEeBPspVqVYLZ6965tbQUYddHin1HbJjVT46AcnGctLjWwyNfW5yeJd",
  "key5": "4jhfjVQ7sgKedTCCPFxuGkSC8RHYV8irnLmiDtpMkGRExSZbicMzRutbNCw5WxLZ3Nk4ud6t2ua8uYqUW7oLyKTZ",
  "key6": "67VsdsurY85kGaj5M7pdRpkrerSB6B4yawL2Sph8Y3Rip7BS39DFrjXutmerZgD4z6iE4jn1DUMKmyD8WtKJ8Uz3",
  "key7": "4BdWMJEc79XQmNew9qWDQB19uQSKeJk77t9rVmvpNk2KsehUghGNoUDaYLzMxaRTUBmiTH7RCNRMDBWsMQqiS3GP",
  "key8": "3fZc4kyhKxsZ1Q1SjptXixh1E78fqc8h5dVJDDcjyvb2HNVUdWS9cGVyED3RwqzoJwzZEy6brkpsMbZnwrPbkBoZ",
  "key9": "5ea5E6juLc3Si9VEiHT1mrUUNPTvZH2sAzwmy3ZJM49ChE7o6ZU2BamGbNgcWPnWKivUHSVkpJ8TKXGAoXLUkSQE",
  "key10": "3h4b1gFvhXGufeaFXgswXabBLZc8K7PbC9i9wv9CxXUvSzx79vHZGdRcgBvkHfcogMbYogRqMAhPkvR9vmTzGYvX",
  "key11": "5Zq37w4N1nq4U69JcEQdCSjY2zwYHakgn7FzNxWTtJ6oorqfMYLJzETMsC7XdznaPz1oQQHZDtvKHrNQpKvFUGSX",
  "key12": "4dKemhQbfBQW6iFsrmXyMrjg3KrJErtMW53Qk5JyD4hz29myp8CYQ6DBas48v6hi1BcqWG2X8ruPpcU3a38Tqd4",
  "key13": "2p3uNkfGwRMNANDsFAUPcgUHju1kJGe83d3GDGBGJtTwwpS5aYMTuGSNFsvzJW9LKgWW9SuyNppK9hvkdLF8htxW",
  "key14": "2tgTh36UzDFHrFLLhYwTE1DWQPwBNLWJxcbXHYfbZ66ncWR4YVscbyCQTp8kToT4kq9pQk66jhSn76w4jqb9B6n8",
  "key15": "4mePramsQCBHTUNnnZA4QbedKjF6j1XXKCetqdvTiEX2DBSHAE8b8qK7LbdakpnVi4iYFft5czCWNr535TBv9fJU",
  "key16": "4PAxPkwDdJitTRaVBvYPbiv3scUpBpvqKctnfWooSEGD92LAHRgo8vzVFSjt81PPAujH6gE4oQUjSYQT8p6pq4Ps",
  "key17": "4DBDqrwfAjiA7RZxUgwXxbsDuyd6Q6dqFvrjx5vbAD6HvZpgrBZLqacELLjthSJhvQFmHViRgVeGD6bdxoM2QnTR",
  "key18": "BBN1HCRjZm4pCa3wRwoHG6sq14wS4on5SmanU8YpavUq21bfpGqq8rMqTCVXNUhA3TFoCQYyGPXLRecyAZC51M5",
  "key19": "3XVtue2YwtRjXkyhV6ETSqBN3AAKd77UxyQZPd7KXTs8zGG8o6HkEXEYvQomi1UXw5vyjqDVd2SeAMFAqp8MRF5w",
  "key20": "3qwYoQZv8pVKzqDurQPh8jvs9U6LBAjgNZAgshK3NL5xgKsimKiUg4seeucyvbJMUeR3Vny2RtYXKkb9qbFfJ3aX",
  "key21": "2QRuu87ib4CnGf65zmwMRqivR4kP2g6YhLvuyEg4JVMY7DZYtt3MrSVV3mG459Ly1SnAEV9UBgFUpnYPHtvcDzMZ",
  "key22": "5XqxhaLfKZSQ1Dr3KUowDDr3Ydj1cYo3BDXeawMBz8HCG7BRoejiEmrMiGaU2iGQ1TW9Y7EHJrHBHaN1RChK8fzs",
  "key23": "4FFmBRPcWMKRbwKm9eZhcCN8JjdvWAdyaPDjAPyfukzRPLdGkHA4pWzqreGXERCjxWKtNiTBWmAgnNA45a4DTHoi",
  "key24": "2Pt8ZjeiUyZjkSEzsVFP2Kmwmatgq9EXVPZe3ZiqDQKTHYzuZnmySaYQvDu13iMEB1vEKkqtxRpfPZyNe7G6RZ6C",
  "key25": "3uUsC9PYoQkbvVJR9oQtX3CMoeTez1nSJWq4EYZaiqEXiCAKR3qoxa4CfoDR6CTECqK8dF1nVtBQhrbPnimoGfnD",
  "key26": "2mhzKPwrkKWjLpvKcV7yjmzRwSc4rjGBYPkFzdfm1MH1eTVAPosm5PRxgaTVBcok3bJQjwCdmRB2vxckUvU5aJhi",
  "key27": "4uzD7AU9oHZR49YYB8AGUvd7JJKJD9c1PnmxKeYpHnHw224ZJTMsks8NHXxDoX2GufdLHCbjqUCxQxPHo2ddDMaU",
  "key28": "YEVzGXnQaSVd59g7sHMzd4bKFeyhJ3QrnDobidh979ctT4JhK8QmAJphwjZtHTXTxWK8KwHqreAFAt2n8gRsMwq",
  "key29": "3JhekoY7kWcm2pnwa4QS6w81ZrsSnX5wNQqkV9TW4E7otPgUo6gjiEADnNspMTdt4mPzJEqbpyixkwaQqao51To4",
  "key30": "4AcLLL728AkH18qXYmzze6aWvGpSehThiPaw3X7HerUcKmRYAcc1kwKE9F2AuZrKKiNWJGCwT18fxg6L67Ae5yoU",
  "key31": "5gQwfrPafpZ4qriSe67GDZ9eVTWyJRqXwffXHkzRBRfgnDj4abfYV87u1V7noA9Cyo19PHWHcyabQf72mvvXSKys",
  "key32": "2Y7Z14qSp9edz6Eu8WVKx4Big6r4NBsGNKXBtYcdVYn6GgyCHnaThiAUJECUwWjNWhWs1jkzkyhxD8kt1bPDzzuD",
  "key33": "5N3FLnF7QdEvCbyumvS7cu517dYntPNk7Y5SGbMsDb4rsy8AnraXfhkbWHd5LDcMx8gs15821khC5DC3C8X3U29k",
  "key34": "HmsiM9dfMsvqyXX3PjqgCoG2oYEEV7PxKAL1gdM2sQxCGGw6PDzLBG76ZdxSp7m4FCVrprRirp73HAGttMrs45A",
  "key35": "5uDBPSEnu8rv4A9bk93wResB4bNWAsNFMHLepDuuKa1ArEZQvgjuFXqaDTGJt3rUFUJ9QtToqAaDTq7KFbAzuk97",
  "key36": "5y1kqtpahwGF27VePnduuSUENVyEP9nvmak7eyPktQdPydy4RqnbRf41xF2qfAaipJ1bfzwi9iW9UiEc9ouVSCC3",
  "key37": "4SBRMbeB2abqTkJF63YsFgKtzVq3Wk8xjSVB7GQ3R48tRXcUSaFHo8vC1urSHLkKChtF63atZsqRZUtzoBy6UFBG",
  "key38": "2xwzHxvKzGAYYddf5kdw5nnAqk69a6MXTeDK18r8HuxGAMCde2GhTSNw1vPuHf7yGnv6M2UjDqdd8Sf735bEH8av",
  "key39": "vnw94mRvyK5CETvbrZLmULQHp4dB8CamQ1YSoExqP5E7DnBQHnzEMumHQoRqUhqh2EVLnv25cQ8a4uXsfnJE3j6"
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
