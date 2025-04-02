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
    "5HjtfQMuKamPQRiDzn5SWmdnG7Rjxh8pRQzUC8U3Fnpr4PbsrmACNGyrfeqER2bZGZPFJtyeEsNZ4pg8wniVXbZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZwoHGo1dZQ9uihczTJJmtuxH7PS5hmnP5B9uoW4R6aAXqRmJyzFYw8oSKT9v5Qf8Phcc9Fv8kJKjaBJPijyZYS",
  "key1": "5YeHYTzbWHLcNuPn4U55g4Di9oqVj48zvFWcdVbPjuwnhGS4kN7CP4DCWbwt6sFT1rU9B2RDDhBKL8YiPdF6PX5T",
  "key2": "4JA3fMwXNHAp81KxDPs8tYX3rDTHSUxzQakxhANAvawG6PdqBB2AnRirYnKUpfa7TF9xMpDeWbR9cGgFsuxzXz9k",
  "key3": "2ikSSy1D8dPB5wY1aoYZMy3ndNQu4877GZjC4AhgaNbbc3dwSnReikJZLUPnyznw9YH5amsFyKFDP91pGGuB46bz",
  "key4": "5Y3UZKUcwKyZoJpEXkf31xJHvkwFdNEekiHnd4hMjXwLqwtx9zcq6he23WtnXezunqSruUzRkaPbY9Mxo6MHHqYS",
  "key5": "4dPjp1CWKAK4PKtLUTUQEwWFcoRypoF9su9dybQBRmG3SXetXPFwUTAQAswPBudUM3RjShRzKeErJVfpnj1a71pm",
  "key6": "2FTcyaor1j8QFMsYc5GEf969z8UYoBNvXbda6io1LbowT5qLrknhXFCEewBGkNohyF6XfYvaDaphtJf31Qub4Awv",
  "key7": "2PF7uscvSWVDSKrxPWNwxfUmRvmAtFAHQvA4GfSAsj4PQRn9AGN63yV3MT1u32KaAQA8K8Y6vJV1aDSCeGj9RLgT",
  "key8": "HwEPx8Wg5goYvaj47mVwLEcYztCvye4UsFvr2V8zNcVoGTqQNeDn4JHUSj8FcEVDerFWyypJd5oa7NEMBaxHnJj",
  "key9": "44C1cCcgXdkYENJUiWpPQbfWrNTCabKL4wExbUvBk16EStGt5bhnhgeFfSVPeiYcuK8mc3HCkk2YqYGP2UGndJbL",
  "key10": "2E1PnVnufVbVvuSBqy59KeBYuRxEiMNj9AMVu2Aqk4Nwq2ASUnae8mgPuGViNC8DavpXPLSeBnS7KuEyTN5Q82tg",
  "key11": "2rsgX4vT8t4F4ee6RKx5Q6o7zmsGogRux4VAvh7CQ336Vg5XnwCwhBA5Wfa48UvwV7ywtW8pv3zWXbJBBk9cazGR",
  "key12": "5VYdZ8ShJdRfjLJxRqrF5KCp71oGyP6BvUCW8gkR7WCtHYg2G2vErNKBVYB2Yq3y94eenVJTFQ6UbwBZUx4epSYK",
  "key13": "UoyZfeMvN6hhtvaPM6kGfNXiRwdhWHLNH2Dxcm87rZWQpfPdbUEJUTUdUxwqWTE2Sw7Xhxnjb4gGkJhrfqFHPtM",
  "key14": "5qVteS8f2nQwChkvUbKY4mXvP2o7Ue6ygdamchazfuzA1tmsqnKa65AmmPFH8qMovKw36eQZRErK59otm7KqtoU5",
  "key15": "3pp8zQPsa2uxJGhx3CEmNdVeUJyhCeb38mjSX3pYuCjkE1mLYgGRW9oJph8LudWvLXuPXzQw5rncucTbFmBYiuhM",
  "key16": "5eSKZF2rbPEERRqHQEaikEGJr2jhaJpr55LGPGTNP9Fupcf1KrvHyxgR8LJxyy4hc3rnn7Dxf6bMsxsDW8QJ8qQt",
  "key17": "4zN1vTeyhSvf1hDyxLhdKyEG1ZRJ29y4nGFb2XWtRtiSWcDawDxXEwrhv7a2PpXpr4EX4XnXv7SJhYYGzFVQRZED",
  "key18": "2s5JYZmmdAts9wAX1Ud6DgM14ooQbz5GQ4o2ojetYcyTYvdsn8ieLm2D7bMekk32uTzoUM6vptxTKmM6m44DNhFS",
  "key19": "5zXbbZziqfPgcZUkhGNsVDZ4jYqVx1aB4ofRguaZxgrjUrVe9sFnmgVKrwCe1tqMtXwwbj7mnwNKwWVFNaWdTx5d",
  "key20": "3WqR3apGdpQ5kX2aaBTvayRZhMn7d5EeSXKRxe2GZdtvcv85Kh2EpDU7uUZnaL8Gt7DspMozpYPrYAzCojfrCWF8",
  "key21": "5GzwYr77gDMruQrosu2S13iEigyqkWhwVvJWwNWtDRLQeiaEipuNptU9aKcfrgKonwjZoJtcLxjQ1YSjnHLK4pTU",
  "key22": "39Ydy4rRHXLZmRXjankCDogxcgZYBDnyKmhzXAYgvvFmpRK97yBSYDjzVuAZjzQfiWLGiPV24T9qDKtiSjKqqk54",
  "key23": "5Ueptiv1axh8ozx9aQRrLemPJxJzTcCRsqbHiB5mXUFqb7vbutUGmaYTZKYvL4w8zEQcRovSKqBMqryY9Z7bwShG",
  "key24": "51pQ4wJGdHHgtijxivwfK81mKpUYsBZGDTSBUy1uLGvHGBCxBnFibSeUH3yQfWSPSTrJpZbfzj1BnF6XsBfMoZyF",
  "key25": "5XUXhGQvmZhBDLXayKp2phQAY7KLdjwtQCuYjbGjjCeBcKPHzMtJkaB2GUf3pYjdHmmekM81hYntB8nVkPMRRuxf",
  "key26": "4XdKh3Cb54VtgLd4DSNqEDU4TNmZcxQ6FTuKLyFijnLRwBiUGXmHvuVrvKDoyyDVJx8dS4rKpTE8GeHKSbZLuYas",
  "key27": "XnH12VHP5UAoqKbnBRkDaUj914qHsHgp4QHjnkeMXCU7BCUeUECtQC1Hoc2tJj7cziFhwcxJDD6nyPr49guzgUB",
  "key28": "4VaNiB8DRqbCRFgpCPwWtPgNBctSfV6h1ugoSgZHgmSSn9ALqgJja4YCMRoZHTiTfQwqv4ebDJzRLAn7QWh4uvTQ",
  "key29": "47RuU3MCDWJCfLATyi5FakbE6owS79QwBjEpfqvK6hu6cvbCgSoE2PXTWzY9zgkLyv8FsNsKFkizjYCvr51ST1zk",
  "key30": "5oknC1gGqxwy1P87xhMawuDe3yJm9S1cZ99EtpbwatEFQ7GgzmkAnMuCFUWSirh9e52qpSAY2VFQzMWAsUhX5L9p",
  "key31": "t8GQmYjGj51yZxv3rHSTjWMzu6kmLWroDp1quXcoit8kxzDAunzzVbUBULgKoXfh3HHe9v27MVwhBey4V3ncNfi"
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
