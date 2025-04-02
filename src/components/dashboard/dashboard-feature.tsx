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
    "5qHc95g3UD3pcGcN5vUxYMe7UVfzV3Z5LzdWbgvoeeEYALfGwyf3fyySsMuYizQoy5AZAk6z2M1CfxcQRvu1ytmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWSqK162HbrGJQTQSqVHPeMh1QGohT6SgzpqcTyHvPcy1JNT3VYrqnXeaskHdTT3U3sfGB51FudKmB6ZpBU3Q3w",
  "key1": "4as8PorGZr34nba2ybwLX35EBrPjrFqwdvyB3MyvrYqGR5aUjXzsDwKHktWqtkHf3SttmVd7Y94nWUHJGuEoceiX",
  "key2": "3Qbh8F1rM46j3M52NLKisgTfedzvmqxg8Vuv4i1QuW9g6uDXXpBGZNUNaa8r2GFFLmtxVL72SuF66y4Ftk1EGQ4f",
  "key3": "6LdVxpsDK5KW2EtFJp7QD3rph58TcSa22ZhHEyAXLR8Q9bewqiUQtrRxggrX9WUiPbBnfHcvE34M3zzBa9Dv2HC",
  "key4": "BTn1UyKWBvGcUDmpn9ApKetYhD5X6BsDVBPD7hME5i8YWDzbfpRjDy7FDF2w47KXp1bB3CLa4hndfDkUXFp3qtG",
  "key5": "2Zss2WTSMRpV1Seib3npT5typnE8gntvrCmGTsdcveaCxZgHBibAzXw3Rjhz4yzpgVRvMJjfZUB8uGwNkjhLTayA",
  "key6": "TdJGNi7QfjaiVHy8WxxszmhLxqyo662nN4yMah83aSJzEobRDbM7y2uya6xDhLDpsrdJpnDWhm8kwYjtAcH7jgg",
  "key7": "2fHaJeTyz76ZoL5p5RNBskmjRvvUjWBtNpw3FnCiGJJ7vTx6XSZmYYK7tCG5Kxj9vbBzEvsvE3scAbaeBvPL6JXf",
  "key8": "22UDzLHmo78iWcv2MSB6Uy9rFVcBgGqL1nng2NS7QEsVTGFHFXoRfrzxGLSVbP3TnBaXEEAjJtRurNuG7MBTZrUL",
  "key9": "GPib5B3FwMV3riS39B8ouLjgn6CrtJXFY939k9BLuZ4Ey16B66699nuSg7hp7coJ3Ns6QYWfmEnizFLDEZ4WKXk",
  "key10": "52K22hwQWmkwtkF47vjVNu1CMWtniFRqd2cBDzFRja7q5D4FgFdNWStyJgHzTZfMUAQxCi5JuCAo23y1UtdbMcdW",
  "key11": "5rQWGNFcCH7dJuE5YzE73S7PoDFFpk2s4imLPRPck8GvBB5PeBoAT4i3FWHm9cjU55ATBV2WZAhLmQTfaA2Z5bFU",
  "key12": "5HDxVUGXKfCtwThkV4c7U1eZ5djVX48apGVmtjYWFLVLdYRhMWDVTN8THVRYdizutns6Mcx8igCjE2kjb9wpBKVF",
  "key13": "64eNRDRSiiMd4jA7kdRgChhd8bDvevP6ZQ3v3ghwRwiUJjy8FURZPwyd5xw4i7YsjRcuiTvhctzrQW2NWc5U4eKf",
  "key14": "3UTCDKMmBFkkjyz1513PUmYfbyMFUgKare6WZwFWEpPYGVDUKCYWGwtMUt7GU3xcHJUt7NRwRnqQPZtjhv6r2yU2",
  "key15": "4DHc5VB7xy837KxzfjbB4UELjhrpDua7wJdMrFR152WDSE7RJMdx8tX23bvgUW1vWvN6wpTuVVYGbBTrPPdJ9zJo",
  "key16": "4zRacTx2wNP31hyxKDhunLsYYvjUM7D3ueDhdYMGEK5dvuYKcXu4hFpmPRGueTrG1v5vRLyi8TgKbZC42t5K7bwJ",
  "key17": "4oqFZStaZs6V7TttLWfM8xtYUu85TUHPiM18SRMWkifJfp9ZUZCDsweSoNdja1t2yJvd49yswGWi5b8ihCdyjTpN",
  "key18": "5UvFhx5qC6CGrLAmxkz8SwM5tk7qrxqu27wiaEhG4BRjRTkwFDvTJqxMeUi1mu4hpJ1sNQzDNormeuckcxiDz2h1",
  "key19": "2mikjsgYeNHzyxiA3CaZNcCbKL4kT7fuqZAP9rK4fzWRBm1AWxcegS7DqbomDFJXmBRYnV6waHbyBZUpCLXdexKQ",
  "key20": "4Gf32HE7iavX6RAEg92HMpfNhve586Erat3sEZ9zDwmfHxUYFq6ifJaC8vBrbCZ2WMtqg7KobaXYRXzScL3UQPSf",
  "key21": "4PNUkMjcF1YEYKrKPW1yAcYvtZ67MxQexFDpG9aiGUS4oCaMyPXqDJMCkny1xSsCqpy3aLc6hetAPs5SGKKZHTn1",
  "key22": "4jkSXMLCG5SH8mkuMNjx1JFuxLKAS9MDt2WUMKdNfuwvTn6uYbpeM84Wj9Fr7VH7K5QuekRWjopoWnRS5frhTNQ6",
  "key23": "5MrJzzRchcm3dckmuErMVg3VuFBffCyAELKRxetzf6HHgHpL4DPwpszfNk1if22xQPJC4K6hzFffcyzEvwMF28u7",
  "key24": "3tJ3LoZQ1Gzbts7rKApT3Nef12M8iYHEMdAoFmea1gSZAoHrwXpSamUMRR151vYXoENwfxqZSVNcThxSfw1N1ZKw",
  "key25": "1yKuHCYFHQRDhxsfwR4WBSur6cnnuqWSZR5XXxjVFmQ52hzFPn3fsKDJn5cUTMFyJEqmQLwy1dB4JitVFrnXLRC",
  "key26": "5kQFfCU1QXphSomPLUC89ND4CpWDXLRFD7hynK8DWVzN4gvuW82BaT5m9Xwqx2mhEA1yvCXGfn9qnRDCKQZQsnwG",
  "key27": "4PxgHeVmfVTUCTKYx98t2gkQQtzGgRBNbDwLCgWM84ngiZQdcKTxTfbHiygUL2CacwGXCG7N9ojPmwZqQVJM5NeV",
  "key28": "MRePkrxgaavFyP6MPgABNQrUjeCWNdUxYnXmDgfUT2Ur9nc7sMNwBjct9MmyeLwMf7hrFkfpyZiUgTUMrMU7KmF",
  "key29": "AoXshZMFdyyeRWZbPngmTbaxCywqoLMKh9GH5Gai3FMuw8w9HYy5isrToCwwfwLQesSoumUS82mbGMki9GTwUPR",
  "key30": "4j9sDb3a1wJUHsyN3W2uYBvbAyK8qitB76LwNKPKi5LMNaoEEn81CQhUPui3yqwod3H9UwfgKaJvGmT1wWngn4RB",
  "key31": "5qcrLn9srNApuwmFVnxkfDyQVgtVS8oB1BAd9X38jSVJxPYcjYouSRST5Akojx7xRzTWy8bTa1pWwChJrmY1orpM",
  "key32": "4ures1U628M1Zr9PG4WoDnRBfmhniW2wnc65Jw6gBeyLY7Z1GdDGBSMmwVMLP6TPhX5W4nNTNQqgsSi6n6feZVJP",
  "key33": "4Emdu2KRqor97oYGGFUZeYTzje4VfLpZVR7GNhdEXrdiWcG4wqN58L8kagZ7gGXPW45j8UoFCAJYLcgN3EmARV88",
  "key34": "3hC9mmKZnFbGRHKgRPDDnJxypcNZS7zDgjgAf1UoL6HoRb7beGkF3L656YXh3LadHbqh9XGC3mNrJhHuLtf4qD5Z",
  "key35": "3N5MFTZ6MM7FBbpHsZepKBGWUMt3Nd4wks2rvzBLkg7GzkPkZG2mjTQtWapeC76iYLfhU2ycgTkagQFsv6dYtXzv",
  "key36": "4FSdnxFHTwY2VHh8sJ1qmQzEHMto6GAPw2tsMBz5tJE8TVxLWMty59v4GJL2qBF2HyQopwueWQaUTQLUFucD6HFd",
  "key37": "4HUMsJYfLX8YDarTnbzpErVYUcg5USAPnQVL5Pr6NT9GuYQrAcBCHeWMu4jZVSQntcCv9GSkdX2zvUnbPwBRm7SF",
  "key38": "4QcK23EJVJcwu9okFyMD4MuhTqZ8erABkp7LR4WvJ24eqHyo8JwKzEfXWGdm5Mjiv6fEcRPzax9vcsQprEYu1Fsn",
  "key39": "Yy7CoVEvp3SVjUMuufqav3fCiGemLT2CxEbRdPShpqqaW3V9sPm39YSec2Y171kV3aNNw2ZiuT7x7JfHrFQWkxJ",
  "key40": "UJCR9pz72dzrtPshEDRvtLFMSA16wXVCt55JGomCZRyz6h9ZgfHmYUgVgM1wHPWcmWN1qHX96DDYugC7uoL67hB",
  "key41": "32J2fbFskKdvYo8UCZ53c2vUmEEVUnE7M3uHNUkga5jLJ1R6Rd88295usyywZ4oD5Kyi1rSxHfjbANAvBjjWwwKb",
  "key42": "4Z6m2oa58ukBPk3p2TJ8JrniwxvUg4gKWic3HJTRR5vZ5JJyYAQ5kiZhoEvVx7W99jas9vw1wGwZ9J7Ge8DoPaHQ"
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
