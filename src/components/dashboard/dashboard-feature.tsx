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
    "3QNaZuKk1NhLT3q9vXWMVTqkHE6VJ1gb3UHUMrqFeo457xRLx7iXYeSC1B3sktdoJ663M4Lkkrj4hwvuFkFyEGiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zXJMmq5TTVaCSib2nZpzsiqtQDWawFZH2rBDH88pHirP6Qv5n4VzD88iKkb3ZvAC4MuknxxnprC3qHBJJAMY21f",
  "key1": "4DLVZbpUpdgXYbJFAzTzKeoXtwrBcKJnuto1V5pVALhficgxSSCnaUxRd6DZ6GHh18gMbxMzpq697rMEVaXb662w",
  "key2": "3Aa7FmEuCNmDxjUHMwETwe9Sf5XukHkaPfGQ4nepiDSt6hgGqUjrQms9kHvQKhUFBSMDRpkeVDE4dtKToYWUrLiS",
  "key3": "48JgUWwvjp95sqDuGzWds86ToX7uxKyc5BXwLxa5pv8SmkHjcM6WzSajq58QbePB88JLUsdvnQLgWe75mHstBzpX",
  "key4": "2AeCrbbdQhtq1L4LqH5VWVsmx2aY2NZ9JpbGZy9Wv53Ti9SzFXYCKbn8LbxbF2ditfZLuqPEueiqD8hnaaeYSZRd",
  "key5": "37YhANa2ZMXL6pfkZcCJyp8r6teJ5eAPZj1HFZWsrpqwtLNvZb6zngBuWE9qzAmDbdJ2NhYN53wX795R1F1YwjfM",
  "key6": "vbrJSx6Wvpk67AVqpgGw2RiNZihPiDYXRJPQ5aUpLT4vsPctrt1iSArxBLpRaENREXup8U3AtiNQ6mRBHcCV4bn",
  "key7": "2uJR1cF73Cqs72YubYue96Pp3zvt1qtb2LUnVYqcuVJcxAVmkyiNvJf6cyX79AxqtjjEqHyTrCsLx6bRt44EAbNx",
  "key8": "2fYHcYDzxF1iL8r6RnDrv7t37gbG84aofTEwfC7uvzYoNmijSvkNK4PUrEVwnodhSft3T6JTszMQaHiYLNKgCuQM",
  "key9": "5nMAbNAsn8S5UqQdG9dbt1D8AriVG4Uut6BX3E8s7xAk8yUFnyuP9XFsGKZwVS7qW8vE9WbQPUzFA6zMMmthqAkm",
  "key10": "59FMrKp62oTpSFyohBL8hfd5L7H9JbPVxgpWmXpv7YmSCHongbijZi9ovsH5uwH6su3V59ppfzN2m9Kx3hy1bjAM",
  "key11": "28mDBDiT3e6QYfeutAqu8hfpdAodJGw5wMDTsM3q4NLHMV9rFVpFGV6Mw3y8ivcL6T2R7Ky7kToYRLQtHvVq2vyq",
  "key12": "4bJ7Rgvu4yPzMhJk11G5hvM3hEYVf3CHMGSsZeCGYaosinzD7hnG8gHaB4gtB2z7g41buvVXf7zvqucVtTHpFPjU",
  "key13": "3cuSnkpVxNoiGeFWh2bMDTxtAUpvqtRbhvPmSPiSuRWLDHpYPu14sMtvSiPuwvGA65QGgzYMMWSoj15gnaogkrAs",
  "key14": "56zGG4cuHrUrFfcntcdHE1FRCPB1SgDSGtVksw4FDM6AXaQ7RFu5QDQfLVvvdWAbRygcAx4tnTuUdF2yp4ghu6UD",
  "key15": "65m6roYnt4ePLgBgyKgYi2ZZgFLfGKTjZbsNGBuH4WtRUbzYtnoQ7rtm4kpgkZSvvcQJTASiNwDZhaMktq8Rt6Pr",
  "key16": "iachWmDV8FvY1fwMXTZFTZFHZP8Q4GuXWoDD6D49LnYovh8TXocCoLasMDsZMCCGp5Y5eLqWdWpaCvrZCKXYCYM",
  "key17": "fuHYaKeYw9YB6hwRpPFDFEBBDLWrZw1JXmKfWq1NJGmPuyVW9eTAhYG4pXUcArLNYd2GSnsX8tmHBpWWqKbhkz8",
  "key18": "4guKametuLyv5YsbGRNs2JHPNH5Y6kvNvAzw1PUs3zqubTwmVB5gAfwmKouRqbt3AdneD1ZbgqWigobsj9LdxvGr",
  "key19": "5rXDhuov88VEXXHMxhpPWoKQvd4nSkKQd1PZYTCYgKQdixAkTNoGauyi8edhBNKyroA4m2mwy93HpNHAokqgpq3M",
  "key20": "4raoY11PYb4apjkRrCWYyKncg5yxfw7u8RmFA8zvzWT68qQKAcyJc4TW7NogfhjVejtf1Wbc9FnnN57DTbSNGDMF",
  "key21": "66cLbr3xhkKnZW31thH9ZBhZokJ7rTrT3jBmpHMZL2AjcXg8UWsjfezLAs9vPJi2e3Y5Fn1YLydNSpXtw5SopjfU",
  "key22": "31hmhQANiLPKmUCuTLReKbyhudRLVGqdep9F6qqBHXRb3TMqNFhyx6jEhvKpJDbzEYpEYsXcWuzfdiAy8g2iKXzd",
  "key23": "4eq1fP9N7ch8XSMfjErApEC4QNzHVqSWm31oC5vkDJd65UEqsbEmp1oADr5xqbdEY1vxjZaM3s7ovdPBq1m56w4L",
  "key24": "3kRSs81phVXJ2Xeg2C3y6nHs3tezaAYWS2DecdQ7PP9y7Hr2Vx9jT3YQVzht6bic2K82cbm6Qho5ojgJhcG8bUj2",
  "key25": "5brxKtbcT7U9DBMf3efBZgfK5MhXJwnfv4KcLTxexVUAev4Drvcu5Q1tnejMJWkQMhDvY2SuPpuU43Jfm86pvsUt",
  "key26": "AALFRnq1Q3hwV4hKLh8a6m76wZ9D8VNAB4KVzHDLnKHbTjNe8t2cLV7WafFBxA1v6vmknJJJqCJzLReppVX1svL",
  "key27": "2VuJuTuTVTcZgNwDZxTbyKvNXLejkymNPFgmzqa3r8cTza5GZxRKzxEAwD7h7xzahZGBaP5r4mXYBwdTqFwTMniP",
  "key28": "319hmK9ih6Hh6sdUxSYmrMDBCgQnKP7mbpm2LTNuULY4rS1E2xebZSYEJcEdVimNZtyp6khUrxjPHUxJq8GTu76V",
  "key29": "5ZefGHc5DXevjYdLyxjXcASQhBPctiwRGBJs4iKZEFZCTi4vr7WPM1u8fPHBTtjmZ7Rdvtnq4bPVJpw9x8Kc4u8p",
  "key30": "51AAiZ9CswUSezEUD9PNL198PKaqEAXKHXeMFQdVaCCMD7tDEBjARHHn6mFtvPyHWMcPSfQpWaJxKZfRPprYwdq8",
  "key31": "3nfcUFcpo1YCErQK22MkCuXVxmHPFoq2mqsS72vJhtqqTPPJUDJrWDnbGsVbqPPtHzdNGB8pLnTe9HpM8YEKQFJX"
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
