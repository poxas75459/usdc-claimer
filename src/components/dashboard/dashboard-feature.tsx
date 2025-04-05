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
    "4kNMdGSG2DvB7FjYovn2iv66CQeZwWm5CDtKrHbgb7MCYJqMQ4A9Lumek2KtREJS7CUPhsUwhSmthqQoDY1Ri2zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i26Fc2iQchtmAcS9Mj5eX5zRKrJVh88diLvBGDTs3sEWDRfGEfdDzRwaWUswQhof2hY2QRB7rGVMxnA57wYUpTq",
  "key1": "YCX8WoUpkt5s8rMnjyVNMXUEiqK2s9BoyCcnC4bT9Ks8SiqYUvuGczUJ7FP9jytRDEXK2f7C4dRLV713StL9zTX",
  "key2": "39JVAfAXHqodQKTmPmBpM395VpZRyzedrP8zRYU3JGwTbABUoJScXU2bGs6LPPkykZaEQEAhYQWJUdzBzP6yujZC",
  "key3": "5qxDmbNc5WndgBrPsUvcRWX35jxZyzuWFD6jbTFs4gQVcrC6ptVY2GAx9a61355J2BjMpJ4aLKtDgPvVy5y54mdP",
  "key4": "2Mxarhuh7X5DHo9yNgtMBvGMu4EEMiiqthVhGj5mZw3W4kGpVnkZj8shZ35qamXhr5oMB5TGrcge5hBB2yGpnnzW",
  "key5": "4ZS2N8MmHQ6zRDKWZZiMwGCMu2tVU9TqqUzU1AjaGqovPfq2BG82fDbU6nqUjc9hrs7fzKya4hTbtP3pwRw4d4ch",
  "key6": "4kwdDjQe1YjByaVbZgfvkYAZUBxZH6oV5d3nDA6HXTX7LR1UpCa9ba7L6VHLCGLVov3gje9mFeP2oCzF9wjXshyP",
  "key7": "42FisGCsT9XSCwU4Jj4S3GQKb1Kd5rmSTti9Pqny5iqGDMEfAFSB47G4QGYAbv46hiwAbhqttCcstH9iaADp1ax2",
  "key8": "sNkXquWXjnxBbpfJyfrwZ7wAviMywr7QU3JXtSnfkKV5deFvkzC2QZq7NhCjbp7PcjohW7GWr4F3Crf5psT2tLG",
  "key9": "3LbtR1VKF9uyzPewbjZwuuSNqkNUhY7Q4NJZ4qC4yMnLrgN7HMYpr3vnw8yfQv41y6aa7eTKBuEodQcfLcTy6JQo",
  "key10": "5p8btzcLpPiMH471bzacaAmZg1jh7chRfycC3E59UaPBtkAb1tSfUcfxVEzKoiAUaeu7sbNDrZ75dLZSoyNUpBnG",
  "key11": "eAptks3pWWA7yeDJygWpzQR6kGYrXx5qjatykN5iyTonoyJdC8K5noAJhXMAJYFMd6J991d4dAc6AnPUEndaH54",
  "key12": "3MGHfgp68efRZXD4hxgFBZqGAPmh6eLKUZqNLwW25LwLAhnn1HYDHgvBhNDLiRCMRHVwxoWtMuWHcn2hMVatuQst",
  "key13": "FGNZ6JeSWPSzDCgyE4a3S1Tmj1BXqVwD92v2FSXeeHQadUQHKkWrrcxayE7QW2xXvYSZbCiZwqmxQ1TgycBNLAr",
  "key14": "MVuoPTUrWPvvZBjuevND9otZuXXhVLcz4UaaQxpr1oBZKPsUeg2Y46G82KHxXFL9gfnyjgXEWAd5QfzwKQB76wH",
  "key15": "2QZr3pvmNYXBJLAzxZ7unuP2dpP61Z8TDs6y2U29ZYGtRYEFhwguRWuwfouS2o7jkBjAPcY2mgaswEYLFNQu6eTc",
  "key16": "a1YewGKtqCjj5abc6da4ycQmonxaDZ9gwv3Qs9AsQsShbC5Xpe1ia2wMdJt9RbiH8nAcwtxBYJDY2TH81TjdhfL",
  "key17": "3NA2xCwRRTqGwgQ691amXaAvTaGgy5TcGCvm46bViP1TncyetVjiFoRvYcnfKnB7tmPZ1C5jSCMSLg55dFv3RW5d",
  "key18": "4QXca2x3DRpg3K1KFQdkFd7SJBwY8g34FR9aoTpJHmP6b9Nhyg1Ad1YKMXjd9qZb48coCXCJrhSzgsBjBedMm6ZP",
  "key19": "5DBvb9bxyDyHi3JmR9EwPXPr25g7GHDD1zbs9R8KkRFhTpTRChngMD1ydXaLTuErrf7crk3tnkdAHSrdaT1masj7",
  "key20": "2ELfQVgjUK8TyPnZKnDZJoJaiyvoEAER8Bzc7fttU5E1WHFBRqTtykPssku5jCQ18HgXspreDu3m7HnvT65dBxUS",
  "key21": "3pC5n4UACzUzmjzm7Q1CZJ9TgU9SAbLzJADV4J2bBrZuBG6WUZR6yo4bX5WFJeGskFAn9HmpXh9WJtzjeRBp6CiV",
  "key22": "pb131qYZhq6V28sjH24Q8EPwkuTL4627UEiqtXcM3E7tKjFi4bqb6x18fZJCF9xUXnMvtKjmLu6DpKZNPBjboqo",
  "key23": "4FuUdzQSp8C5ieroKetKgXZSPrh15JPafFPqtaf1kph3xEpfxmcr63y2Xv9oX6rZh9qP1KwdBNwPCMbgwPXqwUT6",
  "key24": "SeQU1vv44hTTqyCZfm68pytwpg9dFq8fT6GHzR3j9LgWUAF3s9fVrG5XCEsZ6VprXvU8mmjDw8waYXxadKAo1kc",
  "key25": "vA98v4MntwQjyTj5jbNmiRVbKT4UDD9vUCGwzeCt9mjdjvuKnLCCbxaqspGSficddztpYS4MxrtWxeYQ6uiXXHy",
  "key26": "9Hg5mtMi6835br3xKEzoev85iziNGDduGLFLJB3SgJmLz8zsZH49rWTcmdsH3VzCVqA3P9jHh6F9BurfisQXx8U",
  "key27": "3LJoA7YmwCmuYdBS8sc6wTtzB8bq5Bze2e6K5idM2RWkRaAXZWZXHWAcedviNqqHaJqMZrcZ9fmtUk1sb73WD3fW",
  "key28": "3bgoaGVxzkJBhXfAdzAJ9cNxYtWK3eiZmPrybr4ptv112M6LXT4C5AJgH1yvYNP2Ua1M6Pq5PTgveaPZzD6QzRf",
  "key29": "5B1VmEcoHTrHcwjvwLtaJQGFbAjPWH7u3nzxUCRypdLUPbBrDQbrT1G1dTJgLLk1Mqffob4jMgW77P6JF91xURen",
  "key30": "4tcrGGqSeUhkbijanSvBvko6RUmpmV1cmcCT1dCE4LZqdjRJrwkzxdgZmGGQqDkbL542hCgBorGodVLuh6NzCvNZ",
  "key31": "2VuQkC8mLun8C7oSDYDjKU6QC4SjsasmC2zSC47uqbVCZip62v87X3Lrijj6aC4EK9H6pwCRiWCRXkNrDK9Crkdr",
  "key32": "5QodPLtNrASTcWabTKVbMNDTHSzP3xTKKxPaQfyAGfy4T7TjZFA7fVQYcbBntWe8L6XNv8p4cFz2ggwqJgWoo2NX",
  "key33": "5Cqg3ZQdWz2r7n4qegvvq8u5QzWyMrUktL15vbxufjYpS6i73n1NysKCgQBLdsh6Nh4ZqgTgHK9yJy9poVHsj1Jj",
  "key34": "jnvYyiRiNfLNvV75gJ86Un1wmGLqwFtXidBmuxqX7wQ3Zi51hB27BuuHMyAZTaFqLSviU7LdAK4dX1JaAx225Hn",
  "key35": "5mRxF2qcnxdJbLtN8XCLLTNtxFPb2Hf6haJiHnSq3xU9PqqxFaqKDExsWgUoZS7MV39F8neKVLP4qVBFca1Q3wwa",
  "key36": "G56RBfzTstj7cEZvkPju9UmsJrEFm8shXGZjgUxEhr8byFTdv5p1jUQRAD7AgDaTEcGD4WPtCtUnD2FXwVHXwUV",
  "key37": "4nizQbnesNWFmERHcSp1tPzuHsY9yqn45i4UQnNmA1nBi5HRAF4rQKAoetrcjLKpKTR7E3JSHeMo73Mf3jGTDYLx",
  "key38": "36YJ5SiYVgonoaTXTnG6Zkaz69is5J1BKqWE8w3jfY9EjaEYxY4qRuLN3x8pFKRkTQSnSM5pmkPn6X6HMxn2MqSC",
  "key39": "3TY6TJyDJ1cagLLm11AzM1N35dGQKj1DEH7f2jvfVidJ6N15MC6Ewnghed7XA19RFtVDPmkBo2HtC1KeDuXcD4ny"
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
