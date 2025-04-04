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
    "3U4bqaWdiMLntaK5RJVTcCohstRkzGZrzvWuSgJ9RSRcn9HYfWWjLYVX9RBr4o9AqJGdCLKag3XqKdt7ine1JpCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3veCvWeiAMs2G7PQFQGsEmVed4UbQHooRXQDxVyXVJEyUBcjDLXtajSEpXWauqrskTfRpLiGtJkCkKQ4oA3pa8Dv",
  "key1": "3H8S4bi6mDxTuGnzvPRPh1PNHtjuYr7VPteeqM8pAkd55z6W1yFESrBJMgMg8EtByT6ERuu24p5XxMX18cDMvhPF",
  "key2": "5pY9cnvqV2AGK85ueNn7TcVNdfieQrRrQZXRQ3Lii89C4B93RLq9eaYE6CJGWLAxsRgfkG92BFMTTm4WGx3fnAcA",
  "key3": "4kgWm9mizXF9HkR9DZBywtgMQAd2uuYkcpKEgxq5q3NjP4ZjRk6pFquQ9gj1NUbKM9EV1f6ZPKSLTtRupXxE8PDt",
  "key4": "5BgKJ6qTqwBHe9A3UiqWn2V2x7eBQTiKjccGdTJXszaNhmczrFsyzoD9oiEjgAxBcvrnM44kiKcHcfnec7iGcUjv",
  "key5": "2fAVHAjN4fQfG6FNkkVc1GMPvzaAUvztj5w7pfqaB9pJb286QbsrP9q5N6a31ciSPtSZ3dfgGbF8JaRANiyjisuj",
  "key6": "3R1VfSmhNZsToTKsNypr1vWR2o99bz7UQhPDi8ZYyPyCHXk7FzjUpCQ1vKb15yHRU6e4U6bQVUED428vJkr2L93c",
  "key7": "DSU8FvhB69Ji2YpL9MSt4FwhugoWNPKhyynunZEBFsafLZeQvAEjhGgUCWBu1R3siXDN2jndfeW4tRk1aehjVfD",
  "key8": "5Mbnurh4eRkgWZg721wETf2tMir6gymSzYgdkMCznomtYHAaNHbN3aB5jKNCNC2fySPf5QUwap2RzxwNP8zBusg9",
  "key9": "5CsP5Km2orcAFsEVQgsSpAiq5wHQQ3avK39kyrSSEfh76EMZg8ZPZEcMHzHYTPZgb1tvuZxvzejQAJSgB64pf9XU",
  "key10": "3qBfsqAoZQucu2WMxkTamQ8Lac2qCZFcLRQWS8oQoZfwHMHDhdWj6FWnYqUKNFrbUMbokKSQyFLnSFwSTS3QZ3fy",
  "key11": "4NdXtZwcZVL9MtvbieMXR1Nxe6277bnEwZ2UxvWs2UW1UK3211LDowxFfHwha2t8BJE3BtG4x82fQVBZrmyGvTWL",
  "key12": "bkNPwYCzrdqv1rg3woXEcFQNohRQHLodyzTGz75Gg68NkAKoSjTLrPXa66KPzcZyozmm4KuupV5o152HKNRDSfK",
  "key13": "2JMaWCDEV91KzmPUo29yyNchxPpUzv67fCuVdtzZacuWQKWADr7hc4qPnHtCbcJzME4yVtBimKWhG5rzKb15Pkb8",
  "key14": "627pjsU66EfK3z5M6SNKJEUundMfbN3RLHrivmmw3SPQqsjYbrfiQv6Nk2xDey1TMeqRwCk7iRwauEhtkKeoieSk",
  "key15": "5QvtAZ8h8rLZtAECseTEbW1NYd8nHTsGGmEGcargAWSPHUUrg8wpzwh2Y2Zz6fUkNfdRkvvp4RxUAncd9dMbSEFG",
  "key16": "5A3PcKSt3zGteo66pFoowJBLwk6y12rgND4wfYxcuUDacwsMv6A3nQxHbVR1rZ32Dg1vAir9WCQ1ZBhz4xuu7wa1",
  "key17": "3bheDnFY72JvkKnNpDvaDmdDPKaMPu5AYveCMg7EJ4ZbzLuFhvUZw4nxe6NrfmGDF6nbafnwDn3sjbciBaPtVpJE",
  "key18": "36xBkLZgA6Gzom7TLEcQtYzgAgyoGwD2FXyFFsrK52wXS13pHUarEWW3qY52Yx3PaHuFj5u4x31uRXBz88cHBA7w",
  "key19": "3XMqgvAtiwBNBJYT7uScwTMEGrjGkjiBVCnvghYnkp1NrxVJRpYGELL4TGAug6EghxyycnQPDi2kfV54a2EyfAPA",
  "key20": "3WDe1nyGgnavWyEvfEtgQKAUGYqmfTdQ27TW3yihyMCmC2fTbSLMV6HUKpzpXHBDF3mmXR1gEUepMLeS4R5nPzup",
  "key21": "dhBcSu9ZEKWCc3cYezpjLHSXb7TQmrzoecBNiDLULKJjhpyk6o2ij4g5BtWp492dZK84WfAvyNj6rfJg23Fd3P9",
  "key22": "2zn6L4YoWi6wsPpjNoi5WF9C3BVeJcc7bK7hDuAjHMe84TJrSPDSP6ACjammiLjaJPkseoZ7uNWN8u5xdwLgdGkV",
  "key23": "YN3eW5eTojcPNRVUoNNcb4ZvYfMGGm33pCngfsLCcywGtHnSC3R88BWcNkeFdwpKS8265jRAeSp8iTkQMLVh6JQ",
  "key24": "3XBzwhmUYV6fYAVrwhFzhybnxfqN8kwpF3rqiRnkESoTEA8g5b9qZii1CfLWRtMQ2CnseY92YzaxXGezHqj2jfaf",
  "key25": "3cPXTSnAPaGYhiGDP5CKpTmr2h6wp9XxPBS4uqzTYyQt2KbLUr9VZveSQc5KckSEeAgw95yobRtPKmJSPnApvsue",
  "key26": "4K4J4UTMTMXFFpGoZkGRwZSzgWnhs96PG2xMHZPieYoUt6XHu55TnJYkSEXiSVerhJA8j4PiTcDr64BBvNBeYt67",
  "key27": "3i4e3FcBhRzxZ8jfsqzQNSTS36UVZsieXFyJQBdZyFhVXeUZHGq2EDX1fG76VdbKjayzNjU9BSu39GcJyHmRcsTE",
  "key28": "3H4CxdVGqGgGozrw7d8LgshowzSxZMsWzLQKbo2ZiRdHvKgjNUAkyY2DEJNdMZ3DHQcXnVKy4XKXXXCTfb3143kB",
  "key29": "14QeG2x1hmY1bMcTxdMDjKf6R274rnq4BEn7dvXcE8gaWtQHY6x23qo7tJVEVwfig4PFHwKL242BSmcok7YAAfH",
  "key30": "5cG3pvrqyYgRaEgK8pLStpfoeJ3pp8V9YCP15bKbkyqmoJKK6we1Qyy5LUzA8xu3kWQgPjfV2aZ63KkB5hSWufyF",
  "key31": "hW3nL9xJdDj3fDdrWfmYGyEUSMQ6ywxhdBqoX4TmtpCVdh1fvCuQQd7aXSywm1DxX3XnFWqLgnoDrAb8r421UNv",
  "key32": "5an6axoAn5xG632dFSMibK65wk5qUo8jt5E8T5QZJbhuYXeYRcKtQmfyrAghJ2UdFChK8nkdwonM3tnfHh9tkcLE"
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
