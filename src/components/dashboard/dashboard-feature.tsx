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
    "2tNBQ1RXm6UhCBhD4oPPfxbwcm3C7VeT9K9VaGDGaUAewf8xcReTRbdMSgitrSRYwSbrgT6raebrrss3ggNeo6xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TC37Nt8JnBR1uckhJzgrgee35dg9HkR8yQZSVXeQ4n6u8rf5iuCBH7u8h3PGTNSEn96yCh6c3YJ6z9TVMRVs6Yp",
  "key1": "3jinhkzxfVsKWCMYn7nnmQ4WDK25XA23qx2UqcgFVePy1XV4XB9M9fstDPogpjqbUZ9YgpUFs8taP7GS1mYBVoZx",
  "key2": "5dwEDLQWQJWGKKTenoUUji78StPUop3UNsyPnfVd3ohXLQnNTdSniF5J8aAq2ijtUxuw3K8fPm9kPLBiMD2FsVd7",
  "key3": "2to35by3R8KqZnnjDq75HvtuhSNggnF4V673AhkjbtTm66ufAKSWcX5BnivxcAgUJJBgs8KFJeznZjVJsEBwftkR",
  "key4": "2sr87erAk2Zgj1vdRYzXSJNNhrqV7tC4fZZWPwjMxhaaBTx14FFtKbJGP2BXKhKm2fWHeFSNn7T7wU2yXMpz8U1B",
  "key5": "BoA61tWuDZd2QAt9ag1xUSXc3YW1yTMWvQh6CqRQK4i9qJs3horoKyJNtdFcUDWABQhoZ5X3sJRkKQEskLppJN3",
  "key6": "26yA9C2arrRYTh69jRcLV6MVA46EwJ2TbmP8VZ6QtoXge5KntBGBTR4mMjNHAU2Wfpjs7emZF1Jcb2YkcmQix9GQ",
  "key7": "3fvaftBwHRfQhmxjMkQkpZZoweDvet44R5GCXRkKFenBRohpGVD4tiuiUcExFeS9xNyJpWYRFeQkGT34ZyVadWqS",
  "key8": "63tfg9shTER9mPVNzPmtEaWf1pVukrhkaAWjWD1vfbVRM8WZjCsTNgRtMoTrHtaiD3ApQbRxuY9iRBgVWDnHzzsb",
  "key9": "2fySQxkEtWMESnWtqev2JP89wNj7wkwuR4SNYwhBw1TDGqEobNkPM21iM3Fh81UvQwYqMgdahca6AYCE4pX3JsVL",
  "key10": "3aXYyXNMA4RSC5RSwH4LBA9MkGxywSNioCvDnVz4aRqw47uZUegMKg3a27wVttCBj1e3efWKyxsyC4dnUF4Tb366",
  "key11": "2bvM29ZN1b2CjKSTT3WzAn73pzHRTWbhAuNqjgPM5UnjnN8dm9bFEJRx93nCLLdRWuQiJXvtYKndN5dyEbAi6xfU",
  "key12": "3irPKxdPu6vHnDRHuic74iz93wyPESfgHhp9KLbZoF3SFD5EdKxnYQnRyVrZFD5AmBbxdoS9jVkEQXPsm6e1wrpi",
  "key13": "tD1e7XEKkS1kZLEqJbiVtAALokptaXXDTCqMBDsLvr7NZtPZDbykdX9C92KHAefewVF43NsG6rmp1dcc5EkpVH5",
  "key14": "yMxq33bWyQWZJzGzivpYSpPj3yvRK3ZqmZBHQXP3whZTwo63yCwa8ZhECxdFChbbmnZ8FKmUDxjzHx1iWLXX8GH",
  "key15": "5WWSbhS2djMDBBjHUPGm8Yau7r4cFbFXr6Tmaq4Tr91UF1F7sPui9spju8FdtMPrQLk5rq9eAP4tkyhBAGJZKi8z",
  "key16": "nkfZUqsoknNpEXG6h5K7jo8GGtcf7KEjcvrx4w5Xr3aAtZYQG2JyXPqgED3hN3L9kfYSBbh1eaBX4a71ZcXyAp7",
  "key17": "5HAXeT128hUWvHdpBhBbu3GaFGEyXDtxdhumbvimD3dezcXpbrEid4B4Q19EeCY7cC81E1EVAxcWBa9MX7dMZ9hq",
  "key18": "33sFvP7u1qP8RmdRQabhKfwTdDodjXYLCXFJv7oiXGmJGqmDq1L7tP1peY9ykzjTCYA5T61cPBHY8n1g9B2FhQbH",
  "key19": "395KWZa1nZj1JxzPzNvWDx9ac7BTUAFfHVPFFrUVniuzfdh1WSp7Xoe41buCPaZTTRDRYCvxMDniDxK1WF5uCUPT",
  "key20": "36yAXk2A6W1cZZ3tK9TtYDXPs9MZPK7o74MRvei1uSbN8QqXyKwokzMzhakUMAJoMAa2i4266TP7LZJQEx2ozhBC",
  "key21": "37sxypgKHK785MGCvugxbLT4LbJrTWDEufyFQoKorsWD21U5uUHGsh6qSevECpMdgmv7ADV8C4R3EfZVWkvzZyPY",
  "key22": "HzkREi7B4s8qRDbRstPaSmausp9gWDycdnpqvKySRVLNBGZD8awkejXWtjtt9UGpLfcAwbk34sG3RGzBJgodskj",
  "key23": "4zZnouFqEu4nvTB1bw14YMS5Vfgo2kfwTNWRcxAW5WVJkB8rjDHv51GsvDiUbkHePYaKgWWSCUxPXs3LihUppBo5",
  "key24": "5ZvvmhVfBa28WB8bW8m3EuytHGsPFJ3HdGdP9R4AWYujopiiKGdokKEJ9txKzSsrD9rueFx8B5hSaWdyBMdQspVK",
  "key25": "4xhKnsfwV6t16ogNLCrvfyEtY9QT2DGAcGuXLL4Vo96a9xQDtusbYQp8YeGrmWWZ53v39YWp3TvkkhDK35aurHd1",
  "key26": "3u88irt9DSGntKE9ybk1ZVidYK2uUKondkQ8mivkxiCHYdhADDKf344jzjHqEeFHy473iS7d4mtDm7RcazvFtod3",
  "key27": "3JG1yZUJfkVeSB6bNa1hYCyZVVY7iwNDxKATw2Dq5YTomdfD3TjNQ4UdAPXVm2AauQhE6zVXCTjfbmjyNf7tmtYB",
  "key28": "426D7VjWJqpWgiEjoaVwGUsnkfsgkUFoKfEp3Cwz4RqiPQqEqTxFmrnQ8azmFpjPYRRshDa9TTp7wNEfQounwBbU",
  "key29": "9AgvWkRiA1mJD2f6i2SDXwnK2xH8sMEWRGsmctwnMsyYWYS74eemYNqF11bcjmhDmgv8BmWG4Baw3q8LMq2aBQm",
  "key30": "pKCVCTSNRbrRcEiPry2s6jLARDABptwfoNBYGLUwL4Y9yLrGuAY9wXZv8SXjYvRq3NVoarQGYfnpjSae9joW5s1",
  "key31": "3aSJ4c8DkaM3JjYcv9wenbwfBuds3NX4S5rYS8s3X11g7SEwQZCiB7CgpikB1wyCtsYfP88Co1PzGgb65crcJqzR",
  "key32": "63ucSaFjx4r7DiH4gVgujq3Z8aMP6XYdLPHW7XLCb8YtnuoRHz7nNfUwMP8tq5LoayDPs9WG69KTZSYz3Jh9aSBZ",
  "key33": "5jJmtc3ZZNoxveAYwUr5ADBqEgyH3NYzhyejQfNaSgtbKAkmqPp8sjAtinEseYDWUSjbEKVz6bawAkFCsBkTJ2Fu",
  "key34": "3mkBnsEZuAMCaVyW47eFRJk44jJ9R4NL4wsCJ5ENsrNf8zp6U2qVhfJ2f5S4Nwd9JA2LzpyqWgyH8JetNqAMAsTk",
  "key35": "5AerpCQdkXeZFYyGhdL6gQLj7RnGrK7TULLY1837mYWDyaBbTcfcFhTXPThiZSqPhkX6uRXfYCtCdEssVP945fWt",
  "key36": "2xA3FueE1fgwuJgo92WfbSzSat4eDeEVQAPymZob8hGTEttaDVNimWwcqXaGxhA9BTA8FXguJtTQr2ptZZwhRXYc",
  "key37": "5NdWbHjTwfKPK6J7Zi7HFG11Au54vaXnx5hfv4wxAhsLdCwka8rBvtCT3BpAjmsFiRW3wCC7mGSZ6drwwU2UQbCH",
  "key38": "2xCGiCtWvjfjPUPTrD9w71AkgnMgd5SVYsbGux3gZTMwSGvBuLW9tMR8Gn1MDBDxdQogn1nvZVrywfXaGY4HpEuy",
  "key39": "3jHuJWHZWVN5eZt2wx9mrHhNzkERKj357qt9ZhKFBSV3GQfp6PGk5NMX6jy9qsWebvJYvaEQ5HtKYu5EUqYGSrPs",
  "key40": "3eesDxPFARosqjLWEGAtS9KjRLZUhqKVyRnQ36MCYExCCT3DQA1DHBvWX8GWYBrtxHivrCmHoJeEDpjj1E2m9oZy",
  "key41": "3uAj8TrP4NaF1mfwGf3eLkUjhoxrPjFfuGZQAwahutACe9MnzRDJrjPXyGceZb8tCCp4KSnRySCggPSHhsyDzTxx"
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
