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
    "51HtjwiYgdxLBNADJPeBPTQTQgqjvWknc4TRutV9S4AyXjY4A4L5cXs3R6gqDEXATNb2Q4a1Y3Nx9uwak4EV8wHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SqEYtRG6JQ7gXiJA6J6zbiFpH4h39ufTsWjbRA8d8wHVDdCbdG1iGaMKTxhYXj93MkudzZnFmWntZtXpHb1zFhi",
  "key1": "2q3wjB1928Y7VWFWthUSPnTKNK6ZCMAWvGvY4768GrtBEpwoHvxmnYvdjs27kxe3WPRgLrhD28pksjkNwB7dGHXE",
  "key2": "4hf8emeSUopaaB31XUw4kH2b3iFGNi2nMhCzQh16Xi7Cn8xDkE9L9PJ2AvmqSGu8mg9ivB8bp21zoPacnstz9ULk",
  "key3": "2LFBXNnLZAT8SpWrrCXWn5kQTzdLAQAdiZnGZta8tCveF278SsdRZA624tYBYxW5JNunXsFrKBRj6Tv4habYtgMQ",
  "key4": "Sje3gPyDMttgMSGucMRzBpMF5u2Mx5sLk5cfV3xEEhkiM6Zs5998m5tD2Va6R14A2Z5dBrqTgEk2YTnXY6skprt",
  "key5": "UtSDJh7kL6VBeGf5cnMQ9xJgANRJ4uBr5NxuRtpfBUWhAMru8Wr5j2izQ5NLBQznmedUtR3nrBkziU73WfKYcZs",
  "key6": "3eCMMNjWNpFcCFi8KE5Thi62GwEQ6mqZEuNis5kXRNY3nkEhC9R6Lk9QEpHJqk43KHaUrAibAAozhUPA1wD9Gcy3",
  "key7": "3yzrQbiSVKuUDw7B5tDyy9Nb15bfC1dULJoFuzoBJBNLP2D1Anum93ThNoUjhXCQnKNkmya4Z61AfoHcY9BUhxB3",
  "key8": "bpik2ApmpGGQx4FKSQmtL8gsKy6LqvFVmHgAwu1ydh6fs2u8yFJExH9JoJrqE59ALDBniY59bfjS2nYQT7bAvRd",
  "key9": "4CPsf5BztEoPEpvjBQ86rWe6C186SrosWowNCEwi6mbhYtL7DRx27spRCMhmkJSVmNcxPQaTwsdwi6okuB6AED1d",
  "key10": "yX4dAivEPtWa4UP7sjni9VixB7QoArwuDwbn8bfGKVdZoqxb8tuhp6aRwChuF46W546nmzjW4bshaNRzcCzxdg4",
  "key11": "5sCAWPuzazTZnsQPKW7R7kvd52kH7fpRtuGdeam9Tb3FPstcgD5hHbrZWxFinzvwxLTvESEtwKXaSDHX7cJ1nRtd",
  "key12": "PBm3YQt5MbAWoKxmzrRa9m6yHHVygEvNFEDLvk59kL6fAVNVWeYnD4S1pTy3SCx7vPGAAY5EHyjRGpzqYnDRP6X",
  "key13": "4gPAob3oZdufiMEcAkC8uTne81oJHERFt4MLGigWPhTPxsteme1bbQR9JD35esTxnNvMYeKwqBE2bFguoBUDV3BQ",
  "key14": "5Ux7Ti2mjp7pAdSohy771ktStFwkmxtu7r16rVs8BGrP49NkuY8AoUQQ8wwqr2SmbRvf9LA2jVZ2LUY3sbvS9jJA",
  "key15": "4K7upWaiGs1u7YRHsWGbAFNUVtTPfWpHP43jaTZAp7U8xGE5Vgwxw2oEdW3sCkaKBj6fjqkER9VJ7qAwXsxocu4F",
  "key16": "5JLiHm6V45VYF4YRSmXPd92MauCEm2BfH3ZpebJhSbjRQvLbAYiJUCyBQDyeu1gt4p7qMCENvkNrWqMtQCfPFLRt",
  "key17": "2kTAXW4r4Fzgxw4sseQRSDMBbioyCQpyHtMnCGJJWa8bmMrShfbALHyXdRvuYQFmnPfZFFsmtJ7CxikZ48ntTy7M",
  "key18": "dwvnoQX4eVTHWKTLHEqeoL3nTFKCtyUkBbwoxAsDwY423P5mx77saXP5im1vbnKNVaUrJUQs9G39feHMEtziT2w",
  "key19": "SWV4LaVqsFA5YCmz6FStGTwnK229Rj2dBzpTdwkXXkh7QBwET9GhUxPmVehzTRzavJLrwf54qvpmdeGXhfQ2HXN",
  "key20": "49MaTnqvr5D3JasaczEg55dBKWXJruAgyNiZ44myRBj59Q7TSuxYk8YVEd6dXAKKTs2VNu3ChqgXdGARCPp5Bjat",
  "key21": "2RcUJXC9J7mSHTQpMsPXoWYb7nHjdw2HHKz3h82sFjPataRzyVsKwPUWqpaP4JerjYr2NvH6eL1qCfU2u58cE2Gt",
  "key22": "3HRTixnShSv5v1ukphzEFemYM95ka1ptrUCCPkLPCJvCy2vyfspK4Yetbj1owQjNQMJtXXWe52m9WAWY7WNpGsyR",
  "key23": "2XttD5LkJvnpaQek8mCPExtjATLnVRLNfr1mjZEqpNj7LShBJAjG5tQfpHm1qKuejwwWsTmKwDC6hdp5HM8spPj2",
  "key24": "4d4qHKZuAdvsgKx5TCkzox3KNaRr1WPAhWdputezXVLnPFX8gHN3iMSpK3v3W7ekDLqJfhvRerTX6D7McmNqsAFo",
  "key25": "3H1GqxbRmdRFS9RYe7opjj4Cn4Bzy68SpR3EYZ8irkxNcCbW48zkUL5FcfLruTzM72DAr2jJwpYwJfwfTnLmjmFR",
  "key26": "5trtSvFmmzGPTcHppvshbcZvdxJRXnX8sRHqkJApP3TY5kb9HCuyHM8GnrDN8FJjy9JrA9UGxXXJ34fP7Zukn9RE",
  "key27": "3oZajiwpRrQaWRB4f2KQNmvL1KnKZuEforY3BMmgL4zZcJ81ENrFnj64nsRz5xsPmWERhvCy15d3xf9Fj12BgJRg",
  "key28": "5sBiCoKLbwR3oRVhmpgCKjRejXpxqU1ZiTSkjK4fex1hQr3ZCvHoaxv1Dr5DTQFnxChWKZjavAzL9CV9q77pJvTy",
  "key29": "4o5jorsYDexgyihP3FikE3A2EEbwhNVnUVzUZchXpLe62yehBKna7wjG5zBdLQgUZR5n61F3xiZEX29Qaggieydc",
  "key30": "3mQxEK5mBKdudv5nru5454mFayye162LWSrbTQXHuA5vQAoLXxDmCF3KEuXeQQTk9Uguj35wnJgqqwQgfbUrYVHS",
  "key31": "316m8pnuVXqx7XjHjKXjU3T24pdwqrPxmkFqtiL79KXBgccNDuHHd2SBmcLdVBGVtwrP1JGHjBSoTcYG3v8tbckW",
  "key32": "xqQ8AW3pJ8EZypx58baRmXAJvQDH9YcAefCfrNvFAKSpxsPyRMcqZWqZZNaNMzGFt9GJDnMFAVrvCo2XfNEisTJ",
  "key33": "4BJoMPTLxu6ZtMYhUQCQxnvGb5abb6VKtRvYrrwAZywxy3YonZKRkvmjmkAi3vodRjTNUuTfitBHqsba5LxRBimL",
  "key34": "2TSNWkTFYyeCzqmVtuBmjjAKi4C2ibxpxHrDBgJKwcqg2sSxaEoiGBgdBxHBGAvV1Y6HDTFN4qjVb3RmhNDNokmP",
  "key35": "RKJJbLNKWXo9TqK4HvAVMfgLidV4SiXh3nPcU3kJNfKjEb1nUNWCqaeE8HyQqHFC1hhBomEg39Qw2updKqXy6Qj",
  "key36": "jT4Ja6DbpnWY72enCyFJ25WUqX5kEvobftbdqbjx9ACuHk5rWnUaBKRTsgYhrfp8vpz1BaUJg76YZMWodmwJX2X",
  "key37": "66QpvHG6uBHgi3G5R9DQ27jLi4n8MrRJNKuk2mnghpew2fUtc6UAxH1gwpguHVTF6sV58JjAQcnYG5gAfk3ZuMZ3",
  "key38": "21NMbhxC2AxsFcLtjj2vLUbiAN7U3gb4iHuXbqn1HUoM4Cgz79cYhaiE1cUW8aAkuAtaf5qnqFoTZcZZaCERPyN9",
  "key39": "2YFB6Y2qhEMARr2kNiycvx95VBwHGEpqZpAVgX7jW1u9U4k1HLoAtg3LN1y1VE5kvS2RJuZg4wfNXhzWnUCufEHp",
  "key40": "4xwPQu7Zo5RYNmAdXRfonVPNYBANXRKKJjJj1HXsdqHRUXVWZpt9BFDMGEMwHJhLpcF5Vro2QqxNFhbdhcsoY2ZK",
  "key41": "cjg4Y2yRchhE1fpi7urXAGrBrLgaZBYhxKtR2U7GwTt8bTtQNhNjHQUujWLGG2uU38Q9PMyui23HbB3oYTeap3J"
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
