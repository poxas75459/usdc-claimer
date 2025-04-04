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
    "cxVjY1m594Txuy4KJKU7LdK2sjd889JtC3JWqaD8vgNyLAC8s9YDX8GAj2dNfBuWaKFcmrM8eVypHcjMJgVoM9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bLhuzR1eebuKpiP3Ywfn9eujEv3iU2WnQRZ7HpbsvUWK7wEXutnWAjsNVUpppCMjtU4UVY41wzW1FPbZ8mMYN9t",
  "key1": "5qDuGC9maTaHf5iUxkPZMLYMMSfTbLkrPaMskdtKiVFCHs4n6FmhBB3HyoSWvDSr7VL54hCSRGs4bvnLBfL94MTT",
  "key2": "3v97ukC6kgMXHRa9vAn3eHPXuVreJ4ErG4P8nZuiXk6NQRmUaGtEEhdyVKXKU9o12TRQWKn9uTo26y5K2EsYMs5g",
  "key3": "21g155AobokchbYSNkAQ3ENk8yttm5M3spxsPWFFkxMyuajKgUWxNKnhFcmuDb4ajt68qrGa4nQhEz4fUXLjRLzU",
  "key4": "5d4FSztuEscyNEc7xtft3WjKwZdtm4ezrcopZpUyYSgry9G26vERQZiJWnsxr5dbEFhDqgEMJFWm1MLBnbMaXQaG",
  "key5": "2mwgDetNAzLDa699VVeyLpZz7eZRQPDjZhLbRQZE1UA7T8UJTApt6LqiQaYRdgwTnSTw9jap9VGSFFJZMT5x2dWH",
  "key6": "2uFJLL9GHe27JYSFJCEH8HCBastUKuxnK63mT6e3Ekjx3N83JtmYquVw9HkssrWxVab6QdhwvxGtAkmgwcHrsCQ1",
  "key7": "4TvHwriTeoqfujYtAoJeRzSpLGxZJfn13esdhBkbyc32UmTubXNudJbeMXo5vBZgLrvb3qYubvL6hi7EauwhYAPY",
  "key8": "3hzqqQi4NQCxkCuUdQM5nLZH6TiYRJ15ZKkXkBdBRqyWY7ysNjnwagAhsoQSeej6kp5WRdZMg4p2WPYZWxk8JZzy",
  "key9": "4jyMA8NEaFZ8ygS9kBkqssr7iQA7dU9um9NNnBNhu3WMUoyodmRPEzpVj4tVa41hJnKQe5sNxNyPdGNg9EhZTq22",
  "key10": "3YRPQoHNd11JhWD3oTohrev3BcM42Pmi7f3uVEcUxDhNMTVuP2xjArqPRLZArz344vw7byjMJECzbB8Z8HhGYKhh",
  "key11": "CSamxRCQXHTF4cRLfsoU9mN3GgfYkP17GhgozbPJAHBiBgTnmHzFBxWAXekqnEz426J5gZUv4wzRfP8mtXzRuMu",
  "key12": "5ejFp7pGRdRufigx9Ra75Epcdk4yjsChDPCRUajyHPYBrCFxsDTaQmCvsk9d2HH7tP1644KGfLsdvsHRxs8XWmJg",
  "key13": "yticxsq9aNNaQBRoQpQpietYGLJBovDyKbAvspX3qsCRjDHJWiGvFrsdauPwCZZmV3cNRFAgshbwUiDfF9T9aQE",
  "key14": "4QqZJ7t9Qa6vNGs32Tj6Qd1UpgpYmEiSuNTxH6izxXX2X7ebdX9VT6n896MKbcLV9jCMzk244STtmvnw2GhV5ZPu",
  "key15": "33zDtaK2QQ6AL2qeEYNYsvrt9yC9X6ViiVZ8p8bcfHKjddfdzAEfDu2ug2HnmDCTawv2vNBG9bsLTZdhT5h5hMZv",
  "key16": "j9NRXrxKxLJdvxyekC8Duec53BvuXTcuaYrVZYFAQouB3ho4FJ89kPz2QcNJZXyvNfMeGNHfbGEoxXWaoTNz1dG",
  "key17": "JX6DWTw273vbrk1faWkvEeZGMDWKkWmRD2HzfoHRuKFsWxTbW4XjsJQTKBo4DEgVT1EHPg5LcakSPBDtjtLMkvu",
  "key18": "FAD6T7tpx5BLiZd7oiu98QQUZMr2Q8FeHfGQHpqPsrHC2EoUpwoZduzUQrKWriQ1PQqb8j6TjEFn1aUCqUfbdS4",
  "key19": "bLeqneATDwpzmwvB9fNZazxbmpCefNUtjXZfYGLSfUDTE4z97ed3KDxb1hkZDYpsozixXkCzDJ4FjBc6xUcUTk1",
  "key20": "2mgS3yyouLxmvbbuUXnWwU2c2dhv4s6m8AY1detfjtNeiLLPYTyw3wyqrycCz8ethqYXAt91ZQeW5ypaRyamgLK7",
  "key21": "WpgMtdagT4b9Vi22LoacW7hwra5rBgbUAzmxMjiHypu7K1Y7YnJm4fsbiL15pXZtt6suomUoaUf2vwk9LV5L2gf",
  "key22": "4eTKNLofkQnrmzeBGmgcXsy48ZYX3YSYgsm1rnfubovRyz7fRFC7E3nHnzMEKEGypRvotrVXKi634gZoy7Uat7g7",
  "key23": "5wgUDkketKZPhpJ9vjPSH1v7qnBorgG5G9BQesA7LsKQ8Yrr2ghAoEExWHinFyW6anJgLEr7EtVFU57PjQaYFfj2",
  "key24": "4vwukmwiRa3Ss6ndd8nAFNi7tYz3E2TE5zhB8dMy1yGvt8zK1bUdikiPCNYHS9QR6Q8gVP6KEXxvqMchzoicJcNi",
  "key25": "5B2oucZcYisB2d3TgzNhj8pxfY8mWLNaEjY8DA56xrMU1u5eHaEbGWMDoxE37WSt9yMV2RaWG4J3r1DX9pbnu9rs",
  "key26": "3rJxcM2nz5vFPsfoH34VpL33jBSooVHokJyj3ppaExQ5k4XHZA9phUQKgiXpjk3ND73UmjMSsZz3ZpZ8PkJaGMjH",
  "key27": "E7pXizXJKEVj9Ze31P7BR3rZPRR64LUqkRzjFQ4TC9V9m7kKTexoJnSqhR93v1eU39StkfX4UtPkTCLLF9YtNAv",
  "key28": "3dYngGForyhZLTEx3ozAaCNx4BjNdaMTNaHNXfFZe2F3iMStg7MFrN6ofmy7x2wqZKFHWW3PUPpQg2yaubopSLbo",
  "key29": "2x9LGh3bzYwwruXfmwtMPxMtUQjjyUL9WueuSBksd83M23p69irhK2frHN5N4mvHL3SGJ1VJ2LGHugRyBkE5Qo2r",
  "key30": "4ndCxyQiamxZZLzu2zhLtCiVD4UzxtPJVqqYwo4Ko5yJNNMx6eKEhdGnZ6JC9S41b4XbuqXFabxQK3CLorH2KHvF"
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
