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
    "5yiyaULd8gPgxcLzoqcvuaM9SMKKSr6WvZ8pQHhAPGw5Eq1A8WTE2kASUzy6HnsxVc6YViYXn6wxgAZUN45TLsWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XXcPfwWzvXg8vinz85KwDJWAcHgqus6zx9EJA4HgRLWKw6cqAJiW8rHxNLaT8YTAtMzyXonx3cgLDcLY81GsoJm",
  "key1": "3STiqMW76pXjq1ZAypyPsPWbg1dSCKbyZTQRiMithEThYnx9b1TzTdcvMnXAvbNgVNrnugCZyh6bU6vB9mGpfzis",
  "key2": "62nCtmG8Re9TaTWyoehCibhne8KnVPegrF4i12ECPkkPyCVsGa33yyFgXbaK1WqvVMy9JmcWypsiGMKRpEjEoTBu",
  "key3": "4er41ruhaKpu4fqWAzRnxoL4bX3ifHKv7u9xWBTYFEx2LiRaESNCFqj3Dt4aHCLxw7g4eJ592jzN8S9PwzUhD9W",
  "key4": "2hnFRiF2xbGjZuiAoZkamQqvWzaJaGfnNEFSLPV9xtEPpYtaoUb4koyKZtua6TakEBZtdRVtwJpg8dg4Laf5DFEw",
  "key5": "2mDDGdPUghuHGSXzyTFbukRDM9wvQFy3TcCidmps53ZrnDDfdkdrdsEzswuGRUyCyiH3qTFL3axi7pru7CL1xnwY",
  "key6": "aCSpQjU1UGMfffPePdwWpDNyZ7iidsMmdqgkWWCeasiSfDgoDWsNohwMJaXXcPA321mPrV7jC99Wz1uGjqQPGgS",
  "key7": "4gMC4mXyuzN1uQQnmEpcToxjDbeyN5cXLueRxQA8SojhpxN4iceTR15DzdCF4wjgJqKC9X8qiHp14cMio6qdAZDi",
  "key8": "5qAiiBH3yPhc9MK3oFQXFCC4ZV2AXRDHi7VE9zCCAWG4e4YPnJpxTdhq9Y3uTzAJ1ZgRa3gtLUa7AAQD4o3B6Z4q",
  "key9": "rFLH17FeaxbnUQi7e9GcGVcs2Bd6Nze66oahkEW3wPPjaugZ8yjSx6QMHzJzEeopHu1nbwJLTerXHR3X4RW1j95",
  "key10": "Qny1oKmVtd9nXYRrRrbdbWFPcaSHCzqFPPZF4Sf9iugHHLjCNVNJcJ8JAAoumoEg9b25UcTpLeXSnqoMeJzbXwk",
  "key11": "5NgxQpxs8kgLBVJaDSrqR5QH2qkjKSU6EQdDyBDvkWr6e6iZjCgbb4t1LJ5PQaYNNYTxjSZbYUWdKzGb7KQLr9yE",
  "key12": "22o4DUDBy64HHns2YFcHVPodb26wvEnH1TKrJas8xUwHaCbXoy7e4aFUCSgNQ1tDHixgpX9MoZdzsnxPWb1DRAGq",
  "key13": "2fNo99X8o5mpmRs822BtatiErnETSxSHmi3VzgxRXzzkne9YTrtA42aB1itNBWeEqn1EyZsW1HZZ8b1fywFQvraN",
  "key14": "uVTSBBCcHgMQh3sMZXL4jpjzpDkjg81DAxWDBYPGJqPWxAdAAxsMxBPRR88mUfUp1ADbGSDzQLX2BpEQo5E7JCW",
  "key15": "5tCu9BroXYgB4uWsfqUjN6YHyY3wpefGcnXEpbHRqcb9T5BtCFAzSc4saaLZBaoVHEcgfUuMvMi1yCFvDbwhYFRs",
  "key16": "4B8AD5qekAZhJLYYzC7KQJKSShBvwd4KGLkX9zUGaTb96Dzb63n2zgVmvbieamhBtpLXeseCpXhYwH69aqwU6wdh",
  "key17": "2192raJojSMZvAQrE9jVxto9QnSznZ5uKwpjKdienkgZj1M7VsmthvBWBKSPTsA1H9h3PsjKj1ZZTjVcvm2BRXPy",
  "key18": "3Ak6UfbyDw9fHjayeZAS5w3BZzttTYeAtQfDkWLATVWTNPaHDWs4di8wVhKBC5vD9kefdP5TY73SYpCMJfBPsFjy",
  "key19": "4zBbRMCiA65C5Wf5aLgi2kW7LBqsANyLPgtVafUYGmUDqZJAAQZGD6W6JEiig1j6ruzAGrwwiKsTrgviGd9vVrRK",
  "key20": "4R8PXqpGrbFWsD9acEUp1ne7J9P4ugC4joLmUFb2UPB47oe2DYQTjvx9DNxqESMR5teB6M8KVpFimPyAtbutyXnN",
  "key21": "B3w53fcqfVrRNNWnhCjtYneGXDpgG6GaRJ6LvqmeViQRMvcUwa3KvqYnXo5GHoiqrMngyZQ3MKzaVm4Kwzeibf9",
  "key22": "3F8Q3h2cehVgC6HzPRSuLXoG2JJyA2Bt2MASJ8WX4frwoYg3qh5xeQdXWt3H4SXNg9uScnW3utuBg9aopCZfkaEq",
  "key23": "qgH5RVTAXS47VMtVHCAUWg5KZQZFhCcFYW7izTmTfjfjU77MGKzX8NQgsDjip8Jx2gStmw6FXXQj7KxLd26Hj75",
  "key24": "5hdKkRjnCCC7jfhynRBpfXoxB3x2FqJTLJ6mcvYdNTH88mXjVNXG7mWY6SxXAmguTZ3fCTwbJZUiJ8gzZnghNVc9",
  "key25": "2AGHAWhbWSs68U13rSXNGHqMy2bPCPD5gLnBh9URnDKj3wG9ZXgkXYh57u2o4scDa4xVNh56MUyagKuMXtBucba9",
  "key26": "2rLhLaMRpErhFMyGdtVwXEdDsSP8jwZgmDQmYp8b8kw4BgPyTH31NTw2mk3XsJDxuFekpu5xwgJ2TiVeMeoUZcxJ",
  "key27": "3TAVxXnFXkTBW7BHpNM6b9p4b4sBpmxidQtY9i4r9qFgrr75E8jHLeTcMUztGkm9zZZYE6mahayQt1DZxoHWtbXb",
  "key28": "4PC5gxN8T3yoR43TzX6uWzx5bsW5QarKSFMUozzRwGHXCRDM8uF9VEYtc6AiUnX8Ja58cFHcq9RtCxPuauPMoFrE",
  "key29": "B38ebwKkQfbs9KYT2dKWwjRJVrBJZcBdBpZ3hyTpPQARoaQBSP5Zf6j9LmVCCdY2Mmaakh6KNVWeWBgte4kB9qD",
  "key30": "8KTqWJBiJa5cG53sABM2xgWVPE2ZAhan1ySMFVFRFDvoGxTbHHb7BhBF5sG3NbMj2YsQZhL5pp1hfEK3H2w9X8y",
  "key31": "5Ni92Zv11v6fqRG67rvFhrRMWdrKqvWiRbz7bzpv9TyEJo4BPYUzCsgSZaipCEgZMHtdbW5E4Nv56ptiHWDvQyWP",
  "key32": "3Y7FMtfmh7VQSjH9RoPA3mqUoEXB8Zv8qLP9uhbDkJp3XpMFZaqn5D2kdbaX9qnkEzHoNLGkAESNSUQfMmisC54W",
  "key33": "C1LTJQVMPk666XQQK12XmGt1pRhLM3FGqCwGnafuYavWZqsmxvLDgjTaR5uTUxgDT6mcQHke6qcSrg5wFgSJ54P",
  "key34": "3XuNJgXmYXghxfk55nbcewmW3o13NCpgz36M89QPU5G4VE4BDxCbLxGFdtkJ9uTridZ4pqFfR98YR6jZd71aPFJ9",
  "key35": "5qxm7QqZPNWgiqEf1xAxdDabgCS3Br3NWnL46G2Vk1mmU194fiNNVbVvVkV8UKifj9QveXMMjGTMxqtuA3nBtWHr",
  "key36": "4wFsRG8QhThtMyndDHUS6XhSQqGoa4BPUY8yxsputbYrENjWvc3UY5BajPELCwrNiexPHssAJARDWPfKdvmnjcqy",
  "key37": "3ZnLY9Eoyi4ABBAdF5jjbe3GRLRJtm3m2RB4UJ2GuBgxJdYAicyq6xFrwEtqsuckME2oRSLNVQbyG3TvS5p86aZt",
  "key38": "BURxjzy1Nh6BrQzXtymCcPEuSRoVsjNzGtmtW6VmxYdMFaSDRYSRzVT6GnekaB9vpFAWHNvnF4nhStJjVrregVq",
  "key39": "2BymMCYwCUFMUMQx77pYuctmc9S6GBd1RfHZjpXjBYbPLZDnBABMZ4Dq2d3cbL9bY4CJTeN9puNCEwHedjxucrh3",
  "key40": "5FUyHZjoEDLRTrYLLEKYZAKVzPbCQwggpNc2bXospDhwiBz23dAf6wetxV9BNAjATYQ2SqYiJf3BguhxArD2Ac4b",
  "key41": "s1JJZzjrsbcLQ6W4Gy4WbjAx2imVyaKMePYJfvmb3c8aEjRE5E7hMfXasrcsUDPX9w3zuErGxxi2oCyFvGhEpHV",
  "key42": "4iCw6t2LEoNYRQuwyHWrA2dKgksvySjbcBQCoFfGkrkUCmsq4UjKLua7jifBhqDKmfAWPEEqE3qWtT11BCwLFdEF",
  "key43": "28vEV7B7iNPTikJLNPcNfSiCAS3fcXNLUSGq8GRrSVhkTTEuWU6RxMg13woscHhKaSAyRvJvjRBDJiCEd6xjjmuN",
  "key44": "5kn7JvejFMQYS9mJF9wETjQn4Zz3gpYdLdFgKpRfAo9ngXcc7PNzyQvZodTxfkZUAH5MPGrd3ZvSudFETKv6eygA",
  "key45": "3b7VpXNCG2T9fLSvARtHAMhJjWPAo8QzgJFXofYvdzqrfRTLnfCUAWEXVCx4GUQ2KoRzkDFmk3YMNScTxqQzkhPb",
  "key46": "U88wy8QiDsyNyJN8gr4yx7EH2GP2ghH3p8As833DMZR8iapKSBLH4PRsN3cDqn79ciLu7yT82TtYPLXeCym2Sip",
  "key47": "2ebogce7bcfNWkSxgY36DvtWJ6JwT6kuEvpGQHhKkGsMCBWDYYsRXfXoLTHjvWmq3T7EqfrHMvTL3C437YgmRoRq",
  "key48": "2x41cpVQuf6Mgt6RMCxBATvmrSEi9WiSGneELojXQwnSYW1huJk4MugFp7tq4TtzaaQuZ4dddtC2QB1WA8jkrFoE"
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
