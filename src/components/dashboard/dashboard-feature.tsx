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
    "nZsSM7F9NkeYvXwxT84Dc8BtogyZ5oQVvUACMnWiejYSRH1Swz1SaopfKV33GYBbfWxYNUo9iDXMmXQerAaHnyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RH6Y5DvFywNS5ncKFFJ49qqDhDYTHJBdF74tn5DCbiQtLeFLU31cmb41HCAHZtCBi3KjpFnWNwob24856r56bVU",
  "key1": "nT47Xu6kD4NLHhVTJCJhkicB2pe3SfB6KcwAbS1GrNnQBard88mbdGa8JY9EZjyGUm42w3kgcJBfz8uJz7j8P6C",
  "key2": "4K41opZWeGwdv3EMRz4Ya1rcirm83LvZhnyQyexYVKSusWFtxbRN8CS9UjrkSd8Q9BYNNDDQbeoFZTkPmdUH3zyv",
  "key3": "4UCs5p1Ahn6Z8QMMPyUp5hKptEdtUho7NyqFEVvZAzeSGS7Eb8phHYJoitRgpR5WznWg6AhxzDnktskYHkcgmWbT",
  "key4": "5wnTgKUAxyEWYkSrg4FBfqhuQfrCzJEgXCgxzZta6vE2dJPfTygdbrP7nAxgNTxKKiTmFjjQLc7n3uzx89bRBN1D",
  "key5": "3ZsoriVoqe7128HoB4hkvyujwA2gH4HiWA9KNjDafuZeRqCxBydouGotNPMCa1zj4iCCSEZvJm74hgkf4Vy5XDBC",
  "key6": "3DLHmQzBad4Vsj6525kDtPfQSF7ejuDoZgW9RA8Wp9SQMcEbtUbuvK3FbdNrJzaoRQ6GKuTneqwTiJKtQ6ZFavCJ",
  "key7": "39X8RYhDDpBQ22BA5DAKxtQms83mutTuvGTtzTqJcxp7wxfDoGcVN39VySetKp4J7PTHKnrZFnFLcnLdGoKXDM9A",
  "key8": "5GvgWzvpy8HQFqbeFnHqjfRCrcrExvHBo4vb8xXHJXLhBXwahRPocXxQNLivnMnmoaH6RJ2NBkzKdpm7ZDNTXxuq",
  "key9": "ECcAV8Xs5UVLeVRNWkdVFuQHiNLBYFpa6n1u6oNLg7S7TDbnDW3Fzq2aEP78mz9E725uvja7yEsBEjpXKLoepex",
  "key10": "uhTSLJdYHavKQgX4imvuTacJRmyri8Fv8f4ZiAWBfEZTApvkHuhAXZ3wHpJ7MAWqNUxYc7YP9SHKDq1XcGy86nG",
  "key11": "3C3PMANAXpzgwQNsuK41KcJpRF5Ppes3HGDUqm9XweMWLwvXPXmjpYAszrZ3L2tbyVKctg4mbyxzUCDXNvJ55fsh",
  "key12": "2kWsK5rpyy6WDJu3zBdvDhA5w11eYRXzgSDeWLHra6yGBxSxuVT1euxqqZajuGrjLigGbXYW6LbF15VVkRP2mpGi",
  "key13": "4xpXpx5CAddhK9EWY3XFNFyTKeTvFY3C4uFWKCv6RHwDiSzS84amH57AGG1strxvr64oscPGLAs7mrojyToJgpC2",
  "key14": "4eUSNotUectQVacmdsj172qE5hhHo3mPrAr32GvA3ua2W7z88YUoheyHUSsmpZ9HyMjojvreVjhgx6xnUPi1f2b9",
  "key15": "3ikjJVoupKK6a2SYpLyu7XoGZSxCWsBCQqpwqtcwtzbknrDYNV4n9jQLqNmmvyTwaZor1CgcJqjdPCBQcSMDhmcs",
  "key16": "2tHMBVa5Dd9MGL65jtm4pcFuM5GpH4YycLcU1zre2egnT7E2EUR6KFXCaWzapKMpGc5ZBKJLzNNigY9CEHmRtZGf",
  "key17": "4zh8GL9xNEnrHgvBGQoEkTpMKtuksN4NTp7eEA2y9LVNkv9ExsizDULezEivxZ1FCUN45qv5fo3V9VnXfgyfTPAh",
  "key18": "aTfjUKNM7oqn13zNd7GLYaMZKwE5tCuMBGbnTtBYYBCBJbH4wt7Va2Es1JbDKHVMHc7zNsxnQyjXj6CX1XM2bHa",
  "key19": "5KoqpHKsm3Qd4JVK3kgEuwsut6aEUdda5P93UF73WFHq1VtzRRhMcrVwjp8Rbf7EvB1NA3DC31XAjXVY6KsT9jP6",
  "key20": "3n1KTEb5DQLVp6tHXkDjwu9oSDp2uTJLPQezuCzQRhprb8LhAMUbTtTuMUwWcCkjMYT4e1LQw4KnyF2fgMUQ8ixC",
  "key21": "4WdW9pYz5VUD6PDc3PE8xWGPFJrn9vriYbkiqb4Ep2QCCNSWo91eVLma1F37pYW88dvnAsu7xEtFJk4mfQ5krES2",
  "key22": "XqNwFG5cjmKXyow4jbeJUgxRbfh41wqFix2yAvEyp8RUxRMgoBK4W8cmEJYQtxQUGXNrPfE6spKDcCd9uVHqKFa",
  "key23": "5vjesYMzHPCSft5VD3Jh9EFqpd6mFn4663952BmtZ1dFQEAi98Z7s5zg36XK2LQJtoYHzA5xcuDtTehiKmrx5Fig",
  "key24": "MdEQ1A4WNQZgeyf27Q3y9pyULhwMeZWE3DkJyEtovhKDs7M3cVsPpgQ5J9KokSxpKoPijjuMgnviqXqyfnb2ozg",
  "key25": "3qgaVjiFdBf255DFXgvYtuuWcafZG9cKrr8oYdhY6weUSTJSFavftFE2X1jQwvX7EBxxBovt5PVkKyKeXNCjzGgN",
  "key26": "4wG7TeaNH3uvF6LGU5MftznNk8KELwyvDKF94SaRNkkgHBBAF1czrtpyUkogsnFxaZpSpdbLKw5GhhhxA1XcaPRq",
  "key27": "48xvmeacdFpCxEabHg5AUTjtLWv47hq8VruC5WCeFzXV75c5pRWnmcwwwDJvuEiys1LLziLkUPusLkhYysFo1uHs",
  "key28": "3DEcELNPatXLwyqpcpTdSdGhrKk97R2xJEm8fZsojTrgJorynEXH8C9ac7QSQw9HUAN1ov8wdBdrCs7APxgokXXU",
  "key29": "5886mAsa27cuVEid7Vsszt1DxYuUdX9v3ZvKXhbZDX59thNmVNPW7FcaBcZspPwgn7Fb4UewKDaqkLo4tYXuciKc",
  "key30": "5u3chhMNo6vrJjwMGJaPzG8tLYJz4phz45Gjktks4wo8eeftUbkeehZk3Lb3pveYtGZBcGEBLuvYvGQTW1D5kqkm",
  "key31": "HPFhjSMJBuCCD6CeJQeWivLHqrqHrxPDj3ey4259C7wNdT8Js1W3yECNMuuanLukpddo5GAXubRGeeim7Ee2kes",
  "key32": "w4tRnyoBU1YkJyQywD1cfrw74Qx3YCazRThJCNRUKx7LLXrEXX5H9ons1PAiVoADH6cd22rM5ZoPhcxXh4yXCDM",
  "key33": "2eNV25JR16Mo44jtW1wykkyujx7AE3G5vKYKzF9PnLRhAPGWBiZYG7rAfNeeQNBJegCYb7M8ZMnArdZ6V7DFuvCr",
  "key34": "21APsp5KpxHmKLSCdeNiDDFSU3N11ZomuJqHgZJwmNKrXTQUxy6g4vkCU7nSNYmvqk3WYco4BxemEsZYvPQYJT38",
  "key35": "2uqgchFGcmMaFNQkWBdsh7RJY5fXCipTrpKVJQvWQCoxGBoGBaRZuN64fwLSfgJ1nBhswxmo8kJQog3HbzbWNiCz",
  "key36": "2bRtiqL77oL3Ur2CVxxvk83CjiR7SwVz4LmmJGmmYvmk6RQahNmzbTXqU1BxDeJBk747WXxpfpK848wddd7KaP3",
  "key37": "36B9t9f77zMvxZSCyvX1MU4bJgSksYW2n6ohCxwsJyTq4qqYR2EigepnoGxVQdMQoAdpK577DiR73UhfyWf8ooNV",
  "key38": "3iwtnyNoLQaStp8wYcVz6pzqdveyi9ptr8y6dbqVNN2fArudNUdpK5suRrS1SuPXK2FTiHGXW7t9VzR2zirGcF3L",
  "key39": "55aghYSokab2UnurpdQFqHRRfpysi5fhQbkX339Sp9pFtbaqdF9sJGVuGGxmqicSKYx8LuJFm3RxoP7V91p4qUJ9",
  "key40": "2gRb2D4unJfLkecKmKrFm8DvP6eaQQQcoZ3UrK57nXNFGjdHFWv6ysVStWhazJrG5uGbwMoxvc3TiPZrAtguhXuB",
  "key41": "2dTpimsD1aLqSH7ekxGj9hS5FD6YMhJtBRDwFfD7RFcxuEeBVeuofFTP7jSoiMJ4rS41xw4ZPpAepQBCtTepWPNx",
  "key42": "3eZyTVa1rv6Ur5gAQm7VMEu9tmKHLKc5FxG9XB5rAkmWCRKKemk4yR5CAMveExYsXY5iYKSjZw6derWrfTwLFbhj",
  "key43": "ordHPGcQ6CQBgFPVF19CZ5k7idFDgVRQ71ZPr2H8EzAx67BpsvrRRcLSf6kMbTdJxbUierU4jnPZkNi3GxUWLiQ",
  "key44": "E6H7r6m4bqQmPER5pSwY476EPMCuMR2Dr2L4NkbPKDqnegeXdydDiFRmmsd8Mcd31g9eGrwceuP3rtE9EArpcTY"
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
