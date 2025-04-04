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
    "3S1b7qW9nF4vwzgrTLj43fZt3bvQMumghzc9BeNMJ3ES331SJfKMi1michaaFTXzcBtbCXbQ8DtTrZpT6eBMhFF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WFetKWJTZyj56ZWVhxRYEhrqdSVLDdDGY3HSEBrjvT9miugoTbifkZ9Kqhj5U4fJ4cXrb32Q5e8S1mFMNusfP3U",
  "key1": "4qep9Z1j6L629wXw2NzUW45CcnymDic6457MQfWSMZpaRVuUp6nBACEW3M67tTgQobGNXG26nBhRJ4QTT7uhdeEh",
  "key2": "2ktL9N4tjVjf6af9Lne35sWyZabuw37yYqc787HGShL94mB9Crnu7G59kBxdEqNNAWJfZuWYT6yFA81dDRLuQYVC",
  "key3": "j6zNHu7neZG4VEchrH21BNdfyTEi2p6HChcLzpivNjyEzrfZEAySNJzfu2Sr5K5Xa5LvVGPGUmLr6smGiyZaRP1",
  "key4": "4AeSxZ2eMEmpD61MBCH2PcoyiJtNNth1u13sirJrk69saYMQwERGQPpxUmaYxJUzuMQjv68LhC9G4ewKdKhs2JRU",
  "key5": "4C5z1CPA1ahTVZPVuwGGXayMjshdhc2xBGozWggxACgTkyxfHBKDD1HcMoW3zNQpu9zbPCDjUQyKzEsragxkQdF1",
  "key6": "2utfYGc6Ztm5RExVGWHwgzrmSJZh484YbpgpXDy9YXx3TZFJ9cBF1zayrg1weEAkHk4WwJzkjmWES1tshyPvWaGd",
  "key7": "27mXTKPudGeQWG6NcbXQ5Hno9R8VepMvPuyojBvKPUjKVUyP9XSqeAMUwVVReextiUMyu8DD4XA56DRz38ayYdQW",
  "key8": "xz9wDgGqxFzDrWQZiaPcTaqcmTFmghHwzanPYzoMjgMWrwmfX4h7mhPewsGn4MiFATRfoPkotfrFM6rwb2V9P6X",
  "key9": "4uCuKnD5NSndVQ7tKai886m6VcKBJxNmKotPesdwms82sTTQ9r9qMaGULrMrKioQ5Qn7HNTQXXX4NLWNuB8xDtAr",
  "key10": "2FvB74qDuATpdbi9MGRr82kWLa7wiwMoXnymhC7Q4Au8WDKGAfmANmfuRXoKrbxAMtb6nptPUnZ1KF5DafTypn2j",
  "key11": "5D5o6KvXKd7B7Pua8rfihyMewe9dkxaoidEvfWG6VGozibnCC6CoWbjrZaipFhUd1qBqTEuKcYHGxDiHDmxyP29b",
  "key12": "4PimJ5G4S49qcz2ZUVThrDEqRJ9RUHZuAgo8uY8A5G9XSERhg4FKHp8jrjZ5P4giigjYt5R248YNxj1e3KgjsVGA",
  "key13": "vwjpw2wHihxMUkieyGwxNn69uw2vLBV4AQ2au4HwmWkzD4rdMvJA9WXWJFsNAgNuphH2aS476PPSrxJUvaiPK4G",
  "key14": "3D7mhqCoHs2wfhMs6goyCf6m2zrFjK1DyXzn9b3F52qZTxUv4gAzkXHeTmX1r7T5EE1Y8tR8tqhGKQBaTcjihiFK",
  "key15": "4P41yL3wc9niCjsvRLemuxd8aQMFGnAYHaS2TJ9zyCZBtjqMHKrJQQGtS6Y2StoQ2EJioTwjfvBKfvweEfx4N4MG",
  "key16": "2uYfCHpzjwGc9UHSEQtmXpGv8ngW8F7qYbDPDqWwuYdCarp9S4MoRp7f8TfLqLqm1NJR2hHkoGxL36L56rEnmLdo",
  "key17": "457R5KykJB298nu3UyqDdsbFBkUwFyvEkPsYtN2XJpisn1BA1Z3mhrd3tfSnjvfmHkeqyWRecB9DEpLCBucMpnco",
  "key18": "2EMLGCy1YduJo69ZqPLULK2yhWd75hkCX7xkNq2RtrQSGLCN9pJwCoLVJwBeYKjUkPGrWX1cmUwLQj8w9VCyJmoW",
  "key19": "2XywqFTUKnJ5K9Z4tY9sdwBttmj9YajqHocgbjPDDTqaSXM2DPokUm1L3Y4A5bYT2JBKvLvkap4hBX2PyvgapWGi",
  "key20": "5cfeNGfjDev7u93RaQVMuMLhxGLHwdV2aSzuCSiUwxEAFiLphmpzwNdtdEcn68sSnc6fUSpvPkMzTaHc9BA3d4Wf",
  "key21": "4CpXPEGqKBfiVkEAizpnHEnqyxRfyhdBsUkiv482HCQYU3yzmKh5yAW9ugdiEgNKkLwyF6g763kG9bAHTuv1Z1TJ",
  "key22": "5D2g2wW52iQn4mnNPUfP9Uw3kBrXBrY37j8v1TzCxZsFXbLEEJ43knMp95CKzfAtH15jjLvbqwLjWyp3WwaoGFG5",
  "key23": "3LiaSVZFaXmneNpJhECy2MEu8Uy8BbQuq9iZk9bzkjDcd4njtbG62CqnrUADntxhWoRap7m2ZbMQadY75GhQbw7k",
  "key24": "4GoMCma62sCs9rGqnpCJDkNrxrnyqscn3Gf4sEbqUZcRWZw9WjjChL6Rs3KpYT6WzYw6FMbTNZzQF2vMM3x4pzr8",
  "key25": "f53mNwFWuMtvKS5AXb5xbnMZWVWqKWEfXtXp5UkMhwvnA8j7y7fiwijuccjubZf9Z5F3SfgqGAEqi9tNTYVGZ44",
  "key26": "5a2PnCkP1ZNkXRZzZDaUSTJ4KZTtoo46DJmzjSKvbu6EhrQgvNphxrfHeBuTJ7adLWZmScjmawT45swGEWkouSuy",
  "key27": "4xhgq717h2tA2c7vuBtG2KP6jxPVsmC58qC4EjvA7zMYYJwiK6Zn4mmfTfSow1Tf9ZtWUKdBCTKsnthXmzncyxMU",
  "key28": "3CkNoDJFpQdkgYdwiYiHogNUqy4B32x1mongJwGsk86S8ZRj1ZmZCHwo8kGLwYWern4KdqSYdo9h8Ny8vL34PFA2",
  "key29": "hHxrmCamsK1xBDscZzSwqQFWZi1Xvxv6oCRPVC5Zm9W32ne2brKcDHpz5vxdFtUQYXJ2H275CWgpWamghmaXW1v",
  "key30": "zyDoUMsPvxQGdAmDC6xjqjD2jQFhTrTHaUqB9oaRzUsUQTm8B8y6CcjCYaXtkWC8qqLANm4wWRxRrgyQcomDu6N",
  "key31": "2427gTQHE5jmc4ALzUrsus1DZogXpeCpvDoZj1BLVUokZKfjSYtkyKMG5Z1kQTdrWqWoeYKbZgMgFjBx8mnE8xRn",
  "key32": "451adK7CLaP8dUMEwQE4XoqRJXSa6m5tCCea1GCGPg1KzjwUBznLV9QEXE8U8xoLr63Yk23euohpVTDMkp5R8Dv2",
  "key33": "5JJdBWxAbsv7zyqSgh7zKkyzFQhfqgALQZHhFJnQk3KnDDQQUzvNQtMUTYjJJvgkDYc79hCmpvyCp3YtZKz4DKTL",
  "key34": "2Rb6D6iJ36UvbYZs6VRAmSpVjDopBJRNDdJ65PGnADw1ax4EhkrpUp762PUzgjnZ31cthPJ1k2XBAPY4MV1TPLVy",
  "key35": "5gPVQebmq1q4J3Vf1QgCKiBnc2QT26vLneQkyFhKuesAFJWyNDR63941WU9rEuztBcmRptb928W7iKPqs9JYpHL7",
  "key36": "cjbqogGECJ4ugEg3qeBmbpcdM18pWZYJSWCAAzaBnoiA2h9vd9Gom3gvUiwe2NB6B1ENSyKC1V1S7G7CwnYo3YJ"
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
