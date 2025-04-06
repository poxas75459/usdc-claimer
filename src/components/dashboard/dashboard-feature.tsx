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
    "2pLZftSzPsNW7fYVennFCvtEopdgaMxrpECt43LXgxHHtnoTrvHfgxLPBpUtSz546StBgjXSz578pp2ZGSFHGRZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zGWi7RBooQQj7yaBgiY8Gnm44RbickniV6xfWwsUBABd9QKgApkFZNVErtG4E2yLG4Mq3Sic1cp78jMmY3JkB9a",
  "key1": "28NawdAdhz8ooRnr7xx6BR9qUJ8j93XuYxAM5Pw4wQwgfkP6pk7rzXsqP9YSdR4yY2rCtosuXsoVnk2s2EPEFKqy",
  "key2": "2B6XWkWwoBWq7V8ZaQ3Y1EuNNd3qAZeFeACraumD5AbYQnmozmZzReSsQcuge3fDaMxZCp4K4PyyoXnVSAD7ja4d",
  "key3": "496fzNNPxqcctdGDuyYLL6sodr5zRAW3u1JaWU9wqTX3AjtTQeyjSSdFLh5ithXmH1CiLYaeZGFwh45LqijUGqo4",
  "key4": "84abhcKApXTxZano777UtcsL9KcuC3xRyfpm3Qto3hMJ6wNKy2H8WNBLVi3UTH1VXx8bghS4dPbEmwgY6pkqJLQ",
  "key5": "TVnJgChsykXQhkMMiDeFdo8HtGJfz6ysqNSVMbAMPRViTZ8axHDU53surHTJACxHHuZP8xuja9WquuUpnU1eCHC",
  "key6": "2i6KwUNPFoNQX2heC95MpoYFBNyHBYJbZ4HCZTNDhrfKbuNu7gS6Jq75mvR6rWHEfhh6oRj73YYdouHitfksSDwe",
  "key7": "4KkUoUpBaL8bNmT22WdKnd65DAepVqEdBdyFZAvYbHzTWfcosuKYn8L5pUhYQNxRz7pWgnpon4dpk3yS6nYfRkxQ",
  "key8": "5JkMepQyWuP2CsDjPUVpM9bHR17F8LcUpziaEnSzsuTWRZ3M5spFzh3reMjGRBLmJtN9RAk4D68vpuWHUPEy2E7",
  "key9": "1H6TjvnwhPiC4qtjQQdivPZqsm7ENngT7ctSRwYQVpUXcTvuf6gKMCvPUtxqfDhAUYqfXcc9WJnc12qpduHBKiq",
  "key10": "2S8aQ37qjrq2z6MYJJsAUza9G9ggiKMpRsu8UcuwWjWJsfCcKiper96uenQ8ZvLXSqCBCg9C3eGzebGjtV7ExW5w",
  "key11": "39U8jAcvkmzHnHAwqNqxvs5tGQg2pF5wCchwcp6eYMJY31P3pcZNPpLre2ayDP8NrcwJhD7M4xHJ7j4f6E9smXTr",
  "key12": "5VNShNCUjYW9ApqK9Sh47cNGnhYqjUMrccXVhhkEBrdy59XBG8CCQHxok2YicGigmtwzgVqMcqMNKBgf6asfZ456",
  "key13": "sm4SXasqXYs6h7kREoHSAkfgGVduRVZ9QkXLy58KGoWJdcFxSLrdJUmD96pSQwpZkUoCy7nBoCBwEgjRRPNSBcW",
  "key14": "4AZN9qmCFJXgQhBt349GGZ2ME8WSdS6DA619cuksj4oWPeZAB4ZXaSzMbcUBzLkRWqC4GzUR15TYRimk6GS1CVfg",
  "key15": "4Lur535w9kjM318rxqQZVXJ1JnzAcqYFdgHSWfZUUqp8i6yPy98ae9CzjGT2e2pCdyibWmFkjFU62CHwgCJAJtPC",
  "key16": "578CPEYFBJqAmyi8aZWCUbqRNdfphbkKtxmm9aYHU62fzNjZtDEkqKye9PTDbR3CDPjHaXquneYaQcJkenGQuDLK",
  "key17": "337owKavuadHNegskwgSMDKJHduAvd1HvxFdBXBoE5RRspzj1rkqgDGiDn1QBsMfii4qRT4jikcAXXPCDGJt5sw4",
  "key18": "2vv8ZuXkfnCYMTSb53z7TtXJ9n5sLQMZqBGoiDm8sLCBNzVkuG4vroWNSmGWjp5P4uHfCCtFhWuNCbAGavrmqLfW",
  "key19": "3DTVw3oXBy5SfgeQgZbFswNPJyarMJteiLvpy4PkU2K8tf4WeC3qrJxtNbh4W3ErENfHX7xxz2B8SjAupEnCxXuV",
  "key20": "4tnEijRsWJTeuuTFXrwSrziyLYmGCEczREB2QzBW6izh5RHeFfJztvj9ouu7iNJAaMc5wDjxbFcc7JUeJskjqXhG",
  "key21": "zx8cXSXAmZ7aUaurCM9M3WkDDPVdac4sr7yRGtthY2ajwBq4uM7J8thsXyXtccmmVRuJAiR5jafQcs2TdXYbrdL",
  "key22": "5WC82fAjycdPCLGkZ9eZ1yon6aSGyJAwzLB5fL6UYRYYKhEdY8j4oUWHRsgFi1LpEjfun5FW7RMkU3YPn5rk44Zx",
  "key23": "5dniR7ExoXjg6QcWEUXBxHxPxnRQubPnuyh73mXuyUH7e5kiSuHetMwbSMsvbiyEgXt8Uz19Qb3m4rquJ1FHRdD6",
  "key24": "3jLqvK37ZvCRYkTMx7EkdhCbwufn6FPaV4yYSnkAQ5WCu3DqQnPY5UU5QdLvLWQZQJFRKTx6bQfQSaHhv8yJBWyp",
  "key25": "25D8EspU1AT4EihhTP2tTHB2uW8pwF748drXnhQUYE6HA7YRGh5HJUZyohss9QJ94VEnetFsdd7nGm6MDnbDyu8D",
  "key26": "2dRYMEYyGUmVLpK6H5rvZtQaE3C8Xx1BYTe5z85N2mCgu8CB3EkyqYAjPvUyDDfvgbbboBAfgC1jA23VoQ7LVKAn",
  "key27": "2AExqyuBUgzJbfqu7uUBQbALHfshHTyoPogENSQFJ9ZBQCmU7e6oHNzWeAXLk1o93fKNTTC2hmDsQxVtFkvBLmTv",
  "key28": "5rUHpw8Uy4qNtb5ffiMaG6P2A3ZvV4xsqr3UWyuzyU4ufMqZbinkMrztXX2N1Y1hVpMHQCjGJtQ5jNxwSFRLXC4c",
  "key29": "5bujmY84ZqZbF4v4Jn1kpQ6e7nB2RAJRYdzfyq5tud1rJVGZTqqc3xGyL94fbhnveCWVy5T8ZTf7DaTReBefffNJ",
  "key30": "eyXNRg4Bx1PDikwGgTGYWstAtcB1DiXS5H7iMjWAanshW6pB4wvpF8oRVXExuq3hmbbJzDfwYEqmvZw3p8ZekSt",
  "key31": "3NCTEUVDqBhxfLVDSh8xJuSsUSkEMRsVgdYbc2xMEwrvoTaLzGC4f1hBBqTa9y4PZaWY5aorTu3Eoa8mFtUT81hn",
  "key32": "ZM9CEf6ZdpX5qg17w8vHWS9E3iWNXSAtvHEQ2HUmYgJbjfCeBTywc4ds7bBtXAw6yMUPLH6T3Sw39GmXXE52Abg",
  "key33": "5xadKF7nvRBegUCFVCuBHgAERA9qtysD3ugGr6qsXcjVN4v4gW19UBVJ6ccE1Xqs6DxxxMfj4574MHs2NbGhPeuv",
  "key34": "59ynnTVVTxKZFWEr6ep6F38q8TyuJToxUtVwLTVDi3NuHDyqEYkYoS3gfH7pCj7VUN1afns85gTbEL3HCJBSgdNk",
  "key35": "4Jtbm9zUhiJXkYdP4JhVdK2Y1feEvikMMGqcKpjQmHZrnXpy7KdidbxCvjULQ2pLKjTKmroQeXzBxe9SyFwPXKDX",
  "key36": "4nyEZ7HVWAgRqkYPi3tJMYG5ptubCTp383Xjgn2hJ7cTP2mfMuT8667pFM5t2SqBjyLyE97v4KQg62HW3Ch5Nh9d",
  "key37": "641c9EMTJHbS9oPpv3ViCbnM2ZwiVnKMnksF2D6JVewNY527cyCsG5C1Xgucr5MdWHJ9jYd4ZxvoaUsaLLz7i1oZ",
  "key38": "5aro4CwDomn9vTvz53dAc8pXNoQqptMDe2eyKSBfwEngos1iFWqfN62MQUxYtQJHFCT12di4rvmFxLn6ydit6UH3",
  "key39": "35x2aLc4JnJdXER5k8YQraGQkcJyDfkzWRhmhqQqddxPNudUfxmiZC9FepsYpoXNDcRcevt2ytFWviB8MgQxhxa8",
  "key40": "3rXsPMYX5MD29ETKuHsxKUgg2Zn4YoscStDhehMunPxBbD4ZgFxpjjfcaHwj2dZ2LX3z7gS3HALopBPcEsPXt1XH",
  "key41": "vDZpKMSmjAovGgjZ3dZzXEkxxZ4MiEgM5HrQ7HuP4zCq6tJF9sgnGfPa5X3ySjUo646bBMV78VykUtUtJKXwkNR",
  "key42": "XsrpoxBHEMS2FF2kjnkdJ7P1RHofWtKJYb2BBnUMzZNr66AVBvuNHuj9zpiENw3sctp2WwYGd2hHpBoGwxN6Ri7"
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
