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
    "aEufAduPjqdcrmBeZ7mJJ1nYCS2PMXzTb7vFJFN1ZwMoV8iG9mv62atzzCZv66zZvqDiMhJmBgE9UpTHNcPRAM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tH8Jqy6kY2VJxph8YFhzSG6V8AechuS8MRNAaTXdsayKD1zijm2H6Nj6xE4crxGW7YCHrPSrC4TydXUEuP4P8rs",
  "key1": "425vjgJygkHekAVVLcxcrNNVf8xjTd3rYqVbummHESJz1asAMqkTaqmnEgjDjtqvBCF6NjViRtg5hJzpATL2VCC9",
  "key2": "3uZFs4dJzUfeNpxjpq2CoDR7w6JGDxstfdi2oMAchQPF2Fx9TsD6oSGUUp9mGsAcSzrRGpghPUGrtMe5NZpbjaGG",
  "key3": "keT5mKcrWU4UiX3phQEubadpuvW5X8LgUkyVnHtkHdid2nbM9tS17PbnjGmjQJwDpdJjyNjo6gUEHVBCSK9TqTH",
  "key4": "4iu7x5w9BMwqbNdWW6ZUnfTiMMgEZa1n5yBBtnUAoSZ5e8xFJwmfJXfiCmZzKXNuNcZR4kWaZtytDJgqSc3uoh4T",
  "key5": "4D2KaSnaxSw2LtiqQfSJ5YPE7B9HRGJJ2UZCpHvyRfuHRfQgV2Scp3ABmtbVNSJvwHZv4ZdjwcMfWWHqUPkMLXEW",
  "key6": "23QCacefgtDdroKMq2UZZfAb9zkyK8xQZjC9hqD545cW86bDyWzah1FSyXGKamixqx6My9684LRdDMeknee6KzcW",
  "key7": "2MsBCQ9TWUMu22fSFddJAD7HVb4YD6K3DApw3iz8bFTN47T6T4NS9WiVZEftneynjrXbAapu6cg8rBMEKYJyufgR",
  "key8": "AAhkrWGKLyuG7LktjEQHPeQqRYZxSVxLJpmrp564AM3nPad5RfiRq93o1unKJc7Eo8otjvKfjXJGytBxKMHh7o1",
  "key9": "52k9m59CLnCFejnKbFAenR3kthYDoiEsGZrgtwC5dKdf3bJ8zetoLwTEkcbF1Dea5GzmQ5biKQQuXBfHTGD9YAX3",
  "key10": "3hkyQVVcSSNXvjFFpkakkxtVNrhUyP8MwH5aZMS2GBx4CQEaBJMUt24YAgxynD7PAdq9hQPaLzv7dquKntYy2wgg",
  "key11": "5d9RuR4AJCWqYzYfut1Zq71XfuYqHXFRGAygUbvRSzPJHCciM9XHjbhWZPdxnQtxqxgYWwwgjpd3Sjvz8q8Qex9b",
  "key12": "2Gm1F1Fh2BMBfJQVAhC77g87Xkmvzdp5fLg3UF6qPsaPotCA4NrC8eRHsVagb9nLxnwKc7SCzfRF88u3S7eoCRQh",
  "key13": "5QzXgLfaQv16nihD7KVQ3uEgiRFdm1PQiiKmEtKhHEZD2GLfw2q189hi8agoWVfDUjKHYQ6f5EmM3qKahyMnGZDB",
  "key14": "3uQYm4XMAe7zcdrvkkwbyqq9PVBNkL7j2sxfij8oKx3aHh29Ro4tPXU9s39RfHwXhdntB35Z1NW3S3QyCN4uzF48",
  "key15": "4Az5FP8zSUmBpynSxdBccCDt8yupZXFLLtMG6eFKmDx8EPBBT1pyeDrzgnWEYvjCsvpFFmFMveKsJ6CmVcUpTJpP",
  "key16": "62SwmFMcmtLookz5eBwEbb6DrM4zt1nHXsg1ywznNrzYTcUa21uk6f49Mcvnq58F1H8xT3WcQ3Xrsj2RKQAFQYa",
  "key17": "44S3Q1fWP5AFAWCyC58GdpGWsvbJxhUvwHLdUbQ5wYMf2Bt2QZuW6pdej3VZk9yMULjKhxZzodsuFwmgM2psb33h",
  "key18": "5UNY7N15tPyj22WufvPsP9FwR99yPM443QkQM1grC8gSHsKmA359xNXd3geFvghdAcHxAaBGanxExbxpC8FcJCEL",
  "key19": "5eg9HxGfBuuj6ZsTDUqAcCbM1KWXe8QPe8TfBcBiKWWD3grxTn4DNW7LtrxKZhWPa7mUTxXSrcGfs6CG8YtzkH3y",
  "key20": "2nBoPQMKFM5BZPfD8syGKYMLVywPCptWJ81jvu5aEvVznpDabVvjogwNJomE5GWXHf2xWpEbN9oRgd4qXWjtSXYc",
  "key21": "4qTskrvpiCHN3H2T3JykzTo6DNQxBmf8vqn2arCbuFYPmtVTJXWxER7iFgibdsRDLpmg9Qva66JpLcR2Nkr8ht5C",
  "key22": "3pyPSNeKi1CyCp4axHi3iTNz2zYJb8dB3SyZtJjWCq13XNkaL4UmtgwxjHymbyfQYESkJmyBMBsH5SAptNn7AeZ8",
  "key23": "4KBDPHPAbkLU471jGvBJvV4XWcMoVwTj13ZTDBxJyYom9xsEAytQ16V8d2z8MofM27oHreM57EmFEXJZw7kx7NLW",
  "key24": "48GKz2aU1mxXBYvtu23dFxQ8pSCiiG7Sy3F2W9B2KDThuP7rGQwUExMEZsrFMYr4tGNsbjvadDrGneVN6mfnd9Hw",
  "key25": "gmMLtS3puYLcDoVRStZg4YPFSm8NsYhVpsq17DR3VF9RnVF8ymB3eXLxvBWCay8Xqp1NK7outnQaCthoivHsP57",
  "key26": "5Cr9M5Go93eePutRx5Er3G3ZYVCcMsUoZvjLJgVamz42eRUNFX4EAgWL7KY4yqpk6nF2687H4bRgGEBVhWWVACqN",
  "key27": "9zqa4T1c2RtvtiD9GpL9LuPS4v4ocP5STmeSWbNu9iub8uvmvaRubHQkvZEw2o4ofsXwz2cMqWaJUKb7Sgk84Do",
  "key28": "4uhjkevAnLs5e9BzzZv7kjW1dRMhAvRAZhauGnoJuNUaFG5fMNnYx7WCxWrM7WJrAS4bvbKUGJVPNstqtghUynbS",
  "key29": "4G9Lcqevh9fuzZyuVfRyLaGG3nm4WyxirUEbhtBg4PSV4gAyq1afYdu2GC1xGEEmKgm9HoGK7RkbW9DmMun3Qeup",
  "key30": "3t12B32zh59aSLFi5QGED6NkTDLZbk6PgQaJc2hDywxu6KVZZzorHv3885ewu4Vu2NVCBWDnY1GGNkT517sLURKw",
  "key31": "58TMJLaS9xAnSuWnbSCQ2fXUcNJByzUyzyzccW9YfqGTLa6GMo3CPSjGAz6wzKvbZnU4UpFvV6B95PELaHNsfSXY"
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
