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
    "3EHfFMJxsLxBTH6y7G5SLePcRtQHgYiLj1KVrRCfjqK6k72YwPPrhnrERo73Ymu6FBAWEJqWYJdJXFGB8X9h4Lup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mNuJEJ3MvUdYYMz3KH685vJPVRxXm72NNdcv5LcyUkBAJkF5jnwWTeeAd9PrWMY8ew2pPtTpxu5CnSmtGrUM6DJ",
  "key1": "3VMf4SBAFyXfDpKbYhMpnHXY37BjkdyJFor4QkWPrmiT77ANq3GZH1XXkd6WiiziLkPNz22pLq7bcbMW6GMnb8QE",
  "key2": "3XirBodoMCrsrzsvGdKNcYqtvX2aEGdpAvFb1kgbgVy1w9FNduxtCvJx39McBYi5pzp3ffKxG7FwHt1zZHaH5fvH",
  "key3": "4xGmbyqvHxbZcUPsUWC7eAGmyRmmPyZDLNaNa87o4otH5KpFqjYmEznbFbqL1zSmSJn2RdfN2GYx32ebJnB6gyG3",
  "key4": "SZFa3QdsnuJCFmfA9YGcCqPGPPyfFYEHp1PEj2SpV4EA7ipQQHhePJgai9a86a1YVg5Vnzz7NGgCd4vfePTmzdB",
  "key5": "2NKEjgDSYRDrTicJ5eBaRUp1D3DviYxQxsMwnwyX2QwaiTr95Vip6VnfgrasANW5B7qRSLKWJKarvaHFLNnypetL",
  "key6": "t3w2H2TmYqqSQgZwPVK98qWScuBzvVrjEFoC2hAaFmcyDVo3VmehAysSAPYRPxArKHEX2oAkCp6CXMa7649YbAK",
  "key7": "4Dr9mearJzqotf9n1JtzAhhSrhpj15ZfxVvX4qiaJGmMLrQHdcZ4J6MmhbR1tJF5DhEuJ38HLES3zmJQWCfim4nP",
  "key8": "4ASzECZoLTM97ceH1QFmyFapZcbJB4f7y1Zz55vMZtnETVM9zvsMH9RjFvbhjvrPCce25ejdyC9cREm6U9D2UhGa",
  "key9": "5PVnge23VyafHL2u6rfZD8a68mhN3Gf88EkGn2SngRQeoKgxCM4vaRjADKFH9LE1n1wmGTRzAa8B1m2C6zwFXvTL",
  "key10": "2Ps91nTpw6HTSKVrNYBhuFGA1Ve2yqQ1Qm9BG6LDCKbL4iNotiYHxhnWRPqxen83QhCCwfSRFCnAadzGF6uZou5h",
  "key11": "3EScrdSZizTxJKrJSbJzpoEPZGsC5UcS8hQCD9YZJniLfFgWYVzgbdPAtVhuSoxFCoPQ9DDyyEq63pJ4PK3tipy7",
  "key12": "2R4ZnMPMiwqnhx6NBG5uXZFbbwpp89W4mfgDfnhgHanGcPnzkYxpA6fHVos2dkXznBuzbqtiSVfkJXmZvfmE5egS",
  "key13": "4jm4jvjpmbqpWayCC911fcWBDfvWiSa9wbTUXmuWCLHPguDBrXPuhFA6LD6F57zXthL2L1dDMJkiVTzeiVFazwG5",
  "key14": "PjDpFMeFoxbdKTPEJzv2cc3uvSYLjcbCdBKgLPeE554zazTPMrntfNreN1Si8mXnicGUyysXnCQwxYFe7LMRvn4",
  "key15": "48LgE4nWbbXh6Gnh6ooQfHfi1rQkoW4sa4SkEe1Zq9dm4GDgzvvo8TiiA3RVY2Wg1gYZ6JiUuZawyVm4C8Uis7hF",
  "key16": "Fwx1E6MvMtaHUBTrKp4ymADjL7oiwL6oqLWG75m9fsxB6pC2Dgi5JBNbF4HrFSUUsjm71kWdKBkBrCkTeztpq3q",
  "key17": "2Bz27KzTyCXqHZ6sYjzi2EvpzNwZpWa5aEePvtMwBz8wJFwmQhPzMDCJTJ2iGekQEwQnFZRfFUMLozkAZTTzQAJb",
  "key18": "5Pa2W15rARv5ijJLVuLSEQJBYJmybAk4niw4YGVLjVBSJUuh3kTkwKfccY2wrSyWNWwVGxhkZsTMaERSND428RtB",
  "key19": "4aJjt89jorvYxi4rvzcp3wYXkHo7RMiRF2sfvkbYGxkzY9ZV4x7rxNo6mn3kM52vsVb5Ui4QVfpeBAq7cq82ricu",
  "key20": "4r2mczMTZoZh8RBGDsUFRfR42H778u2KQjia7XJxEP3eHAveirtuQBkZJ3PkMNFf9bopG8Gs6gngrHCR1FHN6Xvj",
  "key21": "2cfXvT15KucPpyESTFbrG6UXokwWJm16LNcDFozpHtLHEZY25nqsVLtDqpUWfNxjepUL1ixJuBJqD4P8n1zDLFgf",
  "key22": "3W9NMQSiDviTPa2RSAnDYsV4XGHmJXr4JLn3WApXDT7YhJwN2N1iJnZEYrgcBgZ8n9uNGSnFLdcPLkqdiUhBejrF",
  "key23": "28eZTMDAUWKiSPZqXJGWZkSaBHe8jp2V7jgKg2UjucRBQVFSbXe5uEyBgJEmG5bNNJEHzBuUEzNGdcafp7TUHVS2",
  "key24": "42SaSGrMRPYtL3So2twg4PHkzEFQUQG9LrLcv3Eu6XZxJszjyourqk62NWPaWMWr13WyeLj9THh25Pg4AepLmNB6",
  "key25": "5XxKWU4c3xNa88rtNtRR4E4ACfk3mXu3y69c5wjVJVEiP8x4gtRry7bV79XLKtyhr6HkBYQmovTYxJjNvU6zd8WE",
  "key26": "3DiJ5qCJYmkVXtpCv9pHpT9oQCgpnFU76uXiBPTCU3gAhP9JE1fdtT8YoQy7LMxCV88v9Mh7K6KKZmJEzNbZqMXY",
  "key27": "3Yghaz4qWShjLi7op9FwDEdRe6qcDSJu4gLHpscZHoiFU8A2iJH72jXq1FpoMW4of5vt3oFDXgqPiwqWwqNxakZ9",
  "key28": "4488PfSRPswCVxVpCNskzEU8PaXWdC2SdYjh9kiH4TRfu4wtSVCnEfKczH1RMw63QNjosqs1LGpSfZ5cPsqaVNbS"
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
