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
    "5weoTMLncJXMonZAaP41WqYxc6XkZKBCm44DiVBbjnviGVouHjHuvPu9pF4koEoDLFBAnS7dvAz4cWS1H3ZSR6zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3druHRee4aT6pvH4AcDR3Zjs7g2RJCKrX6odmPx7xn4PS1ottRyJK6CcCHMKrgjTirsVpE9NuZqHRKPgpMXpe9Us",
  "key1": "CPhJbU4nYC9sghWZ6ku5CMaGk8GyJp67GEAViC3HXR29AXswhqBGuaBotLpPMXcu17nYYmay3zn5pCyYg6RJGYY",
  "key2": "25voKgWwtqkAZfzfXBH4KbBXtVe8HGKfKskmB1Er1Ra112rdJbG3ZB9YiQBATPTDb425ayAvZZcyXZQeveDPduiR",
  "key3": "Qp96jDkcSf1M1oyu5ePfER21zFuMBXH8DPK49HkayMdwSqGhdqGJax8KeSE6nKCg2K3Bma4vSHYPsb1gjhaC8Cu",
  "key4": "61sGiVCemG3RXFzB1GWvVKwJNrkEBEZFKRD2CgWfguvR4c76dELWTENPMBKwDqiTvfZido46d32MpFqNZPcyKqy9",
  "key5": "5L66S6tFERfWXuC8ywTK57aghw1eZFZBisF9L8bbADn27m8f9fhyKT5WXX4YxZyxzyNbeY5KZWAZhFt5oKRGrgvA",
  "key6": "3BucPZxawB99zTmER6b5Rw9F2GicoHgKtcxcEekXdxzSRCkfqXmPYsKyAGebQZwr2LCDeyAH9riNbu5nUtStiHz5",
  "key7": "d1V4XBSzwqKHmzNxEnE7APUVgBjBkPorwnYkzDVvjAi5fwFmPgcMtWrua93EQ8M8wffuJd14pNjBm9yEqXDSNM2",
  "key8": "48kFV2RrhNTAp4YUH4Z6x3GBFr1UAChLyeJGeUGYA1P2DfcZnRDXxFeqnnRH4WjNc5fupPkAvsixEjwswYP7qhur",
  "key9": "2y8jMY1qd5AURHraDKFQeVrP2SMtQtRJ7Gsb7WvYMrXyXTztZwEiYEWxjcMgvb6pSEPmkcCbvcZrNihZi8gFmcEA",
  "key10": "4MDWzmpJrf5wzcD4fwh4ERi7AKZ16Lu86o8C3Xyen1PT1R4eqh9BwiTKbarwcJmJeLX9xoJiMVXfa5GyxyV6RM7R",
  "key11": "2sfCNCoV32rFZufNwc7GA64uPhxQ12zEN6GwNzoUddoKuP7wtiXTpQjAE8PUKM1vhF9EmYCMGpceJbb8dszJQ1dR",
  "key12": "5YsAuz2brQAKXwVEq3EeAB2snP7xvdt5Xc1DJYeP2jY5aca3UnGt3VC9fJtTpbhv11pdDzhjKpVLsSm4VgMKLfrh",
  "key13": "3nLVPDQtobro7E8rkEwKQarty6ggJ88Rn2UqvgMaKabfEMUtKCCN5Dw9TPidPGw3ZWDTpM4jms5cRvKd8QiH2LF7",
  "key14": "45MZNJbGq8cPT9BkxMtWPBbhHJZBHFiU2rmss5CwNPgoTa3j17dThCcsWVkJYEnHmABLYhZmb29DGtt1i16HiiH7",
  "key15": "5U9g5vziAqDS8eFuBT9f5deu9YHjmDSo5MD95pv3NsyMAY7zJVVoAh9Fs36M1fUEthWVvEY8CWLpj5wfVFkoYkVG",
  "key16": "CwPXqT9ZsCXGe4K59JhLHVv2MpPd2RiPZmznR4LvuxdJteQsqKFQpQS5GgCuviMhmvZwPtzrD4F2PcAubohzRUG",
  "key17": "3KMKPZuEVkYSpww9NUFjX1MqWv8mFSozmt1BPfsJQZ4H2Q3owXXR9Jo9jve1gSBaxTG4NAKWvYoYA3VW1g5DfrZV",
  "key18": "7xWWhvETcV7CBenDpf4U6LdcjuKSU8iEX4NbB1yDtougnpcJ7CBt8GQ1Fytu1mnY9THax9XZDQEKU1XysSJcWr8",
  "key19": "2KFPt76Kwy8kEyjyMX3v1uDhCj2rwa9JHkRfjbeD8Ye94o7T7rnPttuR7AEKtg8cqFsvrG64LXxvtGNUDUp9uNU7",
  "key20": "4FLtzqSg6BPMJeXWk2BDHBYSYv421zxm28xgfCzwMJpqcrReZ7ZcoKnwqnLQX7uw4TZQ4KpgSQG1WTyz9jJEYcXF",
  "key21": "4ezzkfbFDw6jCLGDQEhTxujjZfdC4RnWUTtGBk8z4B1JifT9zYTtDDCsisRqKc9AAFiR7Ws1GUgis7YB7buTyKA9",
  "key22": "LuYWotqN9jeqdr4qecEJg44e87QVxrY22QseiXeGjMH1RBUH2XusWobvy7tW7EZgWRiBLFhzaP3uCTd6SUjXREf",
  "key23": "4hWp4n543gE9ApqgoJFGFRoHLvxXhNLfZ93HCnfUkLQbDCWwabd8K1DYCPCeGKRiAnTtRhfpSWkwtKN5QHnBkK9x",
  "key24": "4vrAjWTzKnA4UiBSi67EW9yC7n5GLeDyTa9Hk4PGZhxr2hiDrhMpVruNNwHrT1iQaFP4LzTjDuj84wDQkNFrnwJc",
  "key25": "3FxDuBxDUry8dGJQ8t25e7TWgqTZaEPdQE6HmbAufUBEiBUdgGNHhsPNc4MZc7GMeLrCAsqSmdJedkMr4tcFJaFk",
  "key26": "3BbrbktEQfTmnXkXcrT9iADqoi4kp3ZkwqGJ7ztgoEm2fPucAKYrxiojw3n1TH2hoEr3F7KYtonrVU3t2sDkJwwB",
  "key27": "2MfzXFn8ezk6apjKeZ7LQ5dQvbceS9LBifxbnLHbh4DqTxbhhckVZwfrt9BaPRpTygHmksLwwa4F5dSPxZqbhcbT",
  "key28": "xyAY5wXGd3hVZhjsUf64uGYX6jSUVF7tZVvXaYersGQYrD92qnzxoGH8TBCJCYw1nEnCUyq3fMk3WAFZ7C9CnwZ",
  "key29": "3paBCtHij1UAHiARpvDtAFqkF7EyHYVnpgMzDvaietDPnQineShr9UaMGDWiPBqqLMsb19YJiAwb3g7a9GBpoGoS",
  "key30": "2scuu4Q6QTp1CJK4EwK2bAgYyzCnxvPU3fLKR5GAvm57zpN3wmrCvtf1WSvwJC1vzrBSivCk13ekgHXRBorRr8eR",
  "key31": "2kvhfmp5t8YwWsqstAPXsDTQXQKqQutB5acrY7LubAsTVwg3QvhaL2QQwoLzyZFia99hKFNfjxRJHQuSwKVaD16R",
  "key32": "HK5aXbgyyj7RBNGoGjjPfT9yptRXpeUyWaX2G3SSHaAyoytR4RzpcmpHLXdfqeqv73HkwPpXSQTHH4ePeXBmr4G",
  "key33": "37doMvUUnZ6tDh5E8bPYYWxEdMYsTpvfbbdCML2H8KnvgeZYDhxBusp3JMbgzm5gMAE9T3vDKxEQCeNbLsfgfknX",
  "key34": "462tijQUd93xKTcWJacJXrXdT7KtX1NJRBhW6nsoFJojj7oth2T6asaMy6tnG2YiPAg4g6QLjGCBKa15o8oKhRxX",
  "key35": "4j5kHH2v4CvztXutBex6RVn5f6VrC9Dk7Gg8fiyoA3S6v6AMLPM78itADJF9N9dSsTqXnruQ9YyQDffmaPF4HjTj",
  "key36": "2Th3fNiUSY9h86wj64M5J76mWaGnriB2Erj36oxPJWN7zid1gNJtScjKW2aYNHLWS45C7QDX5YYMLTzEFeadn2Pe",
  "key37": "5s1cC6hvByhaiSeNhbNPG5nSEdBNBfdae23QsaXc5XcYe6bYWeBUVnUYur1UXu7fwtzTENy8c7cUXU7NRftw1vaM",
  "key38": "4BA5Qcqr3vXGcZrxFWYswLfDAmsLHy7tnxtWryURZxBENHQuBcEu1vKjPBv3W6y2kR7fFtknAwtZxPRR6RvLzkJd",
  "key39": "5URCV73PCU9Tg9rJUGaeJ2yWE7RxgKs2LeHLm7YUVscLP5AxEzSt5Sc14z75fSh1na5R9zZDejF9LKoPh8SUpLBU",
  "key40": "egFByRM9eei4irZWDHJcYx6HnvgGy3KXJqGZDgcNuNZHggtue18Pmk87nzm4wpj1YsNfS2nwacWUj9ym8KC1Hoc",
  "key41": "2mGFsDwC8wZRrR2Bvwh3bNKbA7cPfQzGHuinXo5LZrLYxSi4aFmDmwBwkMJnhekptzoHk2rMx2CAsL1r8kgzn48B"
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
