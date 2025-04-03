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
    "5FnHwpyA8uWR1dR7LtikEu8ShYTSZsWmMR4QMUnTT6UCtBb2ASyYJaR53s3fqY7gW3XDnUF9Hf8kWXSXXBRKjvC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3PnCEBeQyCmCjSKGwvMAGULxd1iF8FzCqmhvLJzjwS9PNBtTk8G8rXYEmye54ji6pyxbkTkfY9hVTEjDK9cLFv",
  "key1": "CyPNMcEajyrLnnwNkrr2kKwBdRsXAMojah9mnmJ9SDe52TvxeyGnGJVAakpvRtiX7P1qMSFnLJfewhUQMZAYak6",
  "key2": "2aNZQrMiJSBeHTYcyMVPL4jTMiAAMGCZYSJJ3quoA8wfz3Ft1m1MgnmFehxqj797mZnNjyPnEy6DBLMBjZuQMaod",
  "key3": "2sPVjB5zm1vHoNtBC9zTuQkFtJkawYmDSHYrYD4s685AUXt2QtWDShAFuBXaChUpLAMUBpPPDgyw6t8C6sJ5YfPp",
  "key4": "4zeLnTVtDfgKPyb6UnKks6BxHm1p9iwrUGbNJoqWSot3cZLZHZgdjup6ypQUaAi1CEm81CqENWehoBHDwT7HmKzR",
  "key5": "2mymtsbpefpTS3aCQ61fm85EkLbjKDeVXw4ZnmsC3N5RVph5ya5i4DqPoFESq1p7RggZSzVJJqw4arirtMT1tHXs",
  "key6": "1XCtv5KCUpAXXctHhLpBbwiTcUmJUSBUcJjJkAEtQtHcWvzCBkxrwwabKpkcXdkbTGS5CH13UAQBdMAwJxjwdL1",
  "key7": "4hgfX3Wk2N2Tb2AnEPUbsB7msLp6JGaMnNrpz6B8dMeukoQmRRjx5iuqjhsJr6dDuYzN2bcNukvaCAZCe9fU1Nsz",
  "key8": "9d2D9Ls9kWB75vBJUNTobwbFxtzvuPURAYLkwS5RiYg4CRzwd2U2DPsqhRxoxTws6BC1JYTnZ8C9BEQvBvL4FgW",
  "key9": "4vWv3j7U1H9T4AJ5nhmDRfkJ9J4xCVzBbuEnbPDKLTMmRcX3Vkj3jBdDVoBA3da6A3gutApTN1MfXy39jSngDFus",
  "key10": "gYoXDMoSLFXhQcE5PNg4DsVWrJQhPY9J3vgL5po3KTPB1Jwg34zkJhrjetjZ6U7oowvBxdTPy1EHpE7PqNTxNXW",
  "key11": "2apXcjaeNebmBgo7ErXBek7Wf7YEts6yvj1r6hBzzdzEgvYRKdDgGzuyQCEaifZaXHvF9BUY2m4dip6HydLMTrgj",
  "key12": "2dbR37Ec82dXMXW4UkVtLRPL3krjaD7RJcy5xe4q8zxvLEFoUF4VWTSZgpNai5ZeMFhfXyucjgxCxG5e3HSVAgeC",
  "key13": "j7ybqh6MxiHe6Hru2VMMEsuirhPt9CRRb4AMjngQWFLsM8U1QV7P6bF4X5Sr6LvZi7jJ2Jum71dVzwHELYAEHSS",
  "key14": "nhHN5qhTD3YAh4ReoHqgZG4LP8u29SNH67U8h4EiK4DnyWSu26tFxnvVPF9zTiJwsUke1w7u163YUNc6AV22sLA",
  "key15": "5ECcBVKqh6Rz8Breatkmm8SeExYGDDNWQPtFN4Faw1Fpx4qHA4JQrmuVnJVzVWbdngzii4H9EnEDY9H6hHKTFD8n",
  "key16": "3mbb5n5N4Dd17WdDfBSbgUeFYDbEXqaMAiAAmG5ur5ww2LL16EGdpkLWYmbzJx2c7xTqReruXtAZk1EJC94jbkyC",
  "key17": "52Qb4jCVAAToxtoD7v7oNhJAzmUk3moR6zBsN3RGMG3qBbWG1nnyQTnZFThKTmapVDdpR61mvDAd1cbk8TwyNTDm",
  "key18": "6CChU4de4VHQW9n6spmPBYSYWygi2RpVEdJ2EWXXF1M8UfwNfYWbZKe24rWPT39gEwmoqZ2iWT9Nfurc2FhPZtE",
  "key19": "543jE6t9irkkBYktQCemKEm7R95GokTUBXQh8n6nKTHUuPaBXLYftRwN9Z4hWfwvYwnTkqJvAV8ZYt7a5QZyjmeM",
  "key20": "4Qkgogt7JM37xy4xwBwc2NecK75FJpvMH9GYtZMxzA7emwgVqsQN9c8EGgDemz2rzi7uMfMQifTchTpQj4NGzS97",
  "key21": "2W9Eh5aPj8WYngnXHN952A32GthQt2egD4h9TUFgb4ufNHDafdX42hpWKmJ1m64xPQ6K3Wf4Pn2mCcPU9bP8Wkey",
  "key22": "4sL5nsaw527iYgUCgPwG6cQs3moPDYXLHiNLygLRt68Cqc1K1tu7bNndKJ8hxy2sBZdsePykbzYj8PFfWwbiG9Tx",
  "key23": "3pnucfnHkqa3PHh9d6dqop2Gnn2U5YtMP3NitZJtuGjfCZsCLUZB6wxYx13KyD5uxM4qby5wqNSMCyL6k8wz38AR",
  "key24": "ZTGGoivEoTRdEGhMgd25SmqvMYnccJPbCPC7cz52vnF5VJKeUoNmqgnpmHV3yKtRCa2SnWC3ZB9AmRByuPwAkwU",
  "key25": "3M5ZSRjN1nWGNKddi33RZisQAXL1Y5T2CP1EMvw2PePEd2yAmAj7uLz56ieVgCPiAgy3bYMw5vu5gqzcLoo4RQaL",
  "key26": "2Bqh9q4FzrggvPrtBJbGGX6GpLTB7FzCv8eY7wY5Rmo1PgM1PsM5fxFhY1j1yNQ8cL9UgqkcFr83iJgwxVXxLQRN",
  "key27": "2yxFY1u2Tmwy2mgiMV11RPkfSbYgAy232JeFNSVnmXdoqWnYPLHytthqg4adYdAkCZfYtSXbvwaWcPBV9iCdUoaw",
  "key28": "5LeZfrePB8npQkJ6iy1eaSAA6DZE6DqryocQffaHkUkmvmPE6BMB1z7mQMEaRtYsAK4qn4mBLDAhx5LtLAHn97Rj",
  "key29": "4SZqoCtY786R4LfJVLea8TZAvqskLrEq9odpjvtdC1qTKQnPnJ9B3ioUoaJT3UB28BWWyoBdNYTmgTAnj7EUKoPp",
  "key30": "3UfdMvBoAC3deYWLezpyN9vP1RZnkqYfC1pGVLLAjkfATWmgW4mwynmQFBnbxqB8X5aL6djp5zCXRW75YFfZHiTU",
  "key31": "5xuRTQjeH7HrCexVFNTbf3qvyjgGGsGKiKDhsUNLbFX1DdoPtFow9XFoQMzxzwLePEvzEf7ACdofL2YLT2ShkMQR",
  "key32": "5DxVbnf4CLVMZZhTxZHNz88NocEo8XSQwbczg5fksDHwVbjPbw3LfwcjgH2TpbEZntvajHdRZmyXu9jivj7dS5pb",
  "key33": "5dCSsQzwqiw7Qvqztm5usSNjYF1taT5bzpNzNfVERx6hbKjqTM3w5bK5xAjqFasBzMMipNfExzrSZEK9hU8JYiXP"
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
