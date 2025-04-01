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
    "3YwsR2ddZJ68hFD8U24zm4ftnRYx7EBS9D9ouyZRYkj2mLCRhMmqAx422zhTMkkjcXqqAeVoNYdpX2J8EMkVXnmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yvcR7Wir8JDq6TZjZtP5D2FD16GMYUVgkDP2y5MAr5W9x6LxENLrCZQ2WMZuRyYs9sGiQPGmXmdHxUoVkW2hWVT",
  "key1": "3Xf7FQpF3ubXhgYyWE1uqyy1whpPUDyMSX8erP8gLtojUmDUZrZPqEg11FM4YAfVR9sJgwSJuVrUHXnrr3FUznsd",
  "key2": "2KQjXRExiViwKkzrm2hXc6yekYqbresu3k5kmpahcZTNPfGiFCdcojRsMqXQ2xPUn6R9xbGneHBKuAfBwMts5HGs",
  "key3": "2EAizZkCTuhYKDDnD9Z7ZSY4zAMnaYPacuYftxVkmN1cMDUPcfh9LfKTyxzJjrE5vM6eZESmzgCbab9qHXkbfpbz",
  "key4": "4UryLVoX84UPYiBAetuLEmNaAK9qpZQdbLKeBaFLTxya1MM51hu8P4TuNSbpjMZFZ7nfLeoNLUypoXtmgCEG8CWn",
  "key5": "3QR7y7eQYa3ce2LLxhDZAamVFiDMx8gmZdsJJs8MfpJnmXh3t2bekrXbFXnT5j9mgmidGZJkF8h6iYvrmfaZg85d",
  "key6": "2BFThRhM56B7YApgMVctAj8cmPwPkPV9mMZdANtBFrNSNNauLq9UDPPQjcnEycpRgdosCiiYzJKDi2jGT8XURDpV",
  "key7": "KkdMNhV5jAq84o14xZnGTZz2CVB3pcJ8uPuvkjBSR4jt5s2ZocKGGmMUdo2Y4z2nRXB1ty6Ur79njoMVfgcXPP7",
  "key8": "4dZpXkvzjpSNsppYFESEkM8QyNcrcmVSDZ6JC7VbQ1s6HdEwSiRtqvsxCWL9KHqq6ViV7chP7YXdHzgWYWQiMd1R",
  "key9": "3YyvHC63p6LAL42p5jHjo5tBmnJfDoRr9Kr9nNWfZ5LZtvgTDJzPmwoQWfyHaxidA3FExcony5sGWPr2TxHNUuR9",
  "key10": "65P1GgTaqhQKxSauZzakRzUBkBv9oSfobx94R7WKHYxaU4h7dHbLuq9sGicFdNCY9YLG5m2k1S7MqwrukAZAVWXU",
  "key11": "3e2rHbFGXC11QHtxCBZx1MfynqL5gxfzzKgG3n1wuCUKWofQbJMSTkkJTL7W9SRA5YqpXT98GgiQcmUukwNVKhwa",
  "key12": "uJeM88279ax2ASYpfnu3WTc66GppqK4kPv5fPPiGpMyk5zCQ3vZsKvLHAKgEPsJ7NSgQ3eVPy8Ajk8YFNmAMy1S",
  "key13": "H9gK1sK2HF5azTTKvhHwuaCKPQ39wfJNJTcpy1g556UoXqscSRf1TaTAUuPt19cZFmcdQKuiRqKnv7AfmG3aE5S",
  "key14": "5bEBUbtSpLpwAMYmVmX8T5ecrHbKLqTDX6vGua5t8Na6wQfqStErXeibkgfmQKLqgicYsLupVw3tc4tzm6SGe1Fj",
  "key15": "5h8JYFWv8sBuDdKpJQbFQwDBi7twPLdyCPUMFC1zsLLzKKGeDytuzGdz1Gwg6HsgBF1D7QauBbFfFPgJmtVaKgDs",
  "key16": "2R737TByZZzygPX76LxEPCJoJM3DunsYh1wYPxq2X3wSwLRpJTHXLAs52imgwvfNpkUfWsHnv6C2f4kuumQqY5Es",
  "key17": "3EUEB9EisaUeqTqdRkvnMhTmX41AzEUZKEKTYb54uYffYArgHBUfo3uKKWi2VqFdN9ZMnhHghNXxT8vss1zngGvD",
  "key18": "2G1tb9fqq7WvPZZASpmhpFgBW1TpqbARKCQhgmv11Gge3ttMptBNC8nUfanpM1tGpzXw8PXHaLrvddWXqq1MUnWA",
  "key19": "5NB32uFjkuqbUTtmxBtTK43k8DztyNrC3uHfGZGMKmWgKp2iQNFbho6pcTpYhmTkQrQMytsvTSWKU6pKh2ZdAFW4",
  "key20": "3yokPSafMYMJPb7LniETdqMwtXkZp3uGFio7g84rhbCpQ6vy24n1XkStzRgJJVRE6zx9FwauiuVzGaX5nj9r9DP4",
  "key21": "5GKPiUAeWbdDZJNUFfsqqjNhUoqUaUrm7FbbiorYbkg4QFcUJjtVVYgyUFvxAsdqJKZSsWiZmtbSn47XZC1P29wr",
  "key22": "3L4MdBump1YLKmun4vPEiy2qRrfMdPDVisaernmSrFWZ5yz5LvMQL9Q1XXMQwNfpZpCnLfGdjr6XLGKpnaW95E6c",
  "key23": "4Foh4EzN1YCQ4QSdbgv3qfAmkmDySQeAXioeAEc3f4d73AyfoeJEfCKYSRUJAznNNABdeKj7e9agKE1SngtFaurh",
  "key24": "4kQkskJ3Ws2waaxMabJGBuoEe5Xp4B4Lk3UXMCWqK5BToo3uJVwWEPe5hRKk63QfTrchsNE1kBBAYbT6axYP7Z9Z",
  "key25": "225wccQ3rYdBhyULcRHK4Dz7tpxgxYodL3XQcJBCVVnRf2Cca9oumk8QiqaThRSaX4jhp5Hqc8FWRteeP2zjYaNd",
  "key26": "62roc4AwDwV1tbejfLgev2bp2Ggw62Fi7DbD6dLoXTpcmtdAKQXcWAFaRcJvjZrKFjGV6J7rT6hYfALjghiJ8n8Z",
  "key27": "42hx78xHuf1NoYREJiwgYnx5bcdH3ErNkfQhkr3jogUxW8D8qiU4HogXZ9QmP8jXXzk8zRbVXmv85b9ne1JoPtyd",
  "key28": "2u6NCHPhRR6pBZVU14pSPQrrLTm8zPXQ4mzXJ28oo6no1CooSXhjimhPLARVz7WuYEmpcPGtX6tNNCeAYawdxNUn",
  "key29": "3Qod4bZA2CgWxPyEe37muJPsrigqstNdBWgD6HSEpsTo8bUHya7vLh2dikMtVZPvqXzQ2JTMHVPy2X8rQRrNXhio",
  "key30": "4JjjcCh2VBnthKRsqevsGzvgXKCp75a6a3JApxko5SqQpbdJbwqHhZK5pEAFEJwi3w1NWhfhc2je7zhuHQWy3SQf",
  "key31": "tSMxDKRd4Bjs6VVMovb72pCNBKZtYqnKdMYez4mP8gLEUH31BtKFtGmsZVnGPkekYsFQHX5GJGznvtQmTwnEYmJ",
  "key32": "2dEVcqibBbR4yuFjtj1SyUq8pKHgunT15Sp7VHrzvfMnzm8LsW6LpR6fBusTws9nBGGfe5YyQ8tDV5W6KPjjn3pT",
  "key33": "2F61dN6gx9qgW9rpZjp7QdsmwYmVzszkiX62CuDm3V2pL2mVmEtdtJyL8i9FLPDWN6tQ3aR9h61KfsePnTgEZjR6"
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
