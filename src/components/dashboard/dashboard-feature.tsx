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
    "4YS34NW7ogwqRcNoHK33zczxRfmhPMy6eUquRJewcwRihPzVrMbRqL1mn7ZP9eb12X27aosBVouHzRsytFhmX7iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rv6LB1op4vwzckGo8bCwncxX13QRNexTbFfXUkB9Ywh1YTjPWrZJ5AQL6HEGCwcayt9DcyKz8kPzAvrnZZGGZDX",
  "key1": "3DTwNQGzrzVqQF71ZY31WzLE7jKjosxQnFR5S1bcPDEUWJfGEpSjzP6m4ZZjMLpvvXwh64tyTt5gRTcAjVSM26es",
  "key2": "67YfAEEADbTSc45JBJB3peYEt3PSfLjENYsGVD9JGQbrVrMbLMiu4Ad6pJEUPVjHQRsvpNY4hbt3bdkEH59T65BW",
  "key3": "bDaW12E3jjkJXnci22fUGgBWyEEx2szwBmUXYUvd6kbA2DfJKCs7U3yeiU4cQZWa3DGHXX4cgBqkdJfiTS67dKw",
  "key4": "2wrZPP4ZsCBPZ17Qo3ZMQqrWXBdd6Lw3Ktiz9mqXumhcF6BNPSr1cBG6HFUnnHxt8dv3kC9i5WGY3evXgaLGG4n1",
  "key5": "55V3GJfHPyYUvVmTZhmzHTwA7UsicbPY1yJkXwgTDP9YmFHUVb7SXa8NVT98seZCeafVcL1sCcTeAPavqZVvdfJw",
  "key6": "2yvDUADX9t6SLkJSq6ne4BDwqF6bgKMPuAkXPjnAkKmvCw9dHCSCYsmPxxQdUhmKG5pR4YVhixoCMpQr4MhEbZJG",
  "key7": "46UJzC2ifreE9Y4HuNoEPGB4niW6GHzv1q8LsyC1Fm7M5MssxVeMLnBg78q4p1zeigmdvyKWX3dU9msGucfC1bGi",
  "key8": "2g6wckvUVsCzFq8dHncG8GQLbS2wx2zrfudGyor6AsRsvTc4PA6GmkgiQhx7Uxi1ywtrAiUWfKqshV6eVzSLy3Qh",
  "key9": "4hpmrojBHCrKrUMCph5JidYxnh1LAsXjVbFTrTKpYj1h2vDfVKXCr9hvZcBNoMZLq9h6MCmhh4er6JRTcGVhsoSg",
  "key10": "rQm4WqkNZ5ibvAh8fGJF8ds4yZFYNMLcAcEniivt9XqJYbdSYa7kZskE4LhnYjFTvurs9CTYYY4ANNrXzSBdhsY",
  "key11": "4X5niR8qQQGjLdFrXk6KWYPcKq8wFr3Kky2wS2WCKb5MR87V2DPB78dhsX7f6E5z4n9fAB9oZvSf9sDygj16yc9T",
  "key12": "4huoT8kYJn5LtvfyqLTNNq4Bj2EKBaskMZzMvobBX2mwBx17A8u3C21pE8M9d9ZqRgM7x9QyTJi5hn2c8UKcfjQu",
  "key13": "32MCJ2PRhASmRuqDHpqH6WrrsDFod3kHBa4Hrf5ztMqNMXgq82kFzwXnZNUNeBwmXgcft3cVqwpVaQswRPAHU48p",
  "key14": "3aSPBSGhz5AevRG9QmHrsN2s8sjneZXFBsKBpGeM1Lesa1DLrtuKytTeN4q8ZwDc1zyv4Tg6iYT8k9Vgh8CuJcpk",
  "key15": "3ZifhdgZMwi8hVauB6vgRRZ3KCxpPwXHxFheWEidV6mu7hV8MZo4j1uimTbai4YQbc59Jc5CboEwJhRVdmSHxYEY",
  "key16": "2WMVEdhAhCFTnVTk47geYEFSCG7cNxKSfcuyfuWfGDkefnyJNcHyH375iAW9Tkgx1u5Dbn1D2iWWHV8sQoWke7NG",
  "key17": "4eoP4nAJBQAJ32YYwub7t83KitMed28hJ7pCsUBj2JhhCvwrxsm6ACM6jNWF2zM6iKp1uDCWmTSV3zj17ZRpCJS",
  "key18": "4U2TDjwLg7Toy3fig7pdcEuoMNzrseFGze6E74QkQnVsBatAb42Xuz2DTCJdcor7LYVU88FDbaXBz2gMHfiFD3x4",
  "key19": "36dr2rgEfeTDQtrZJQw1MQeFwV29qJxzvRQjyysKex6bs2D4kHsewcMHPvTYCQ6chhQNxat7eXdLW7ePzB1mdLLX",
  "key20": "4J8ZedMt7c7VrPsLh2AjAyMny7SMY1qZP7ztJ8k5JtqYkGZMN7JuZye4PP6dWjfNvbeLqBEZk3WKQ66XRsGVjXpU",
  "key21": "5s9RdditKftmL9xM8vcX7LtgmcywJzGAa9FPMEuwKJyGPNBwatU2FCj1bjC2nVmgBzH8qwkgmtLhPzQsKdXwQfFw",
  "key22": "kKW33kNPc7yWgegzDqDuhBGsXUcCBd7mgsfEkgKkp4PdVrxHbQGNQRrnb8GxZ9ov6nww7N3HnG4qHDRHVS2Kw6Y",
  "key23": "3pYZLqWtgvKoRnSeAgrKn4hZSQHACc9NPZpfTsCtcp3sfVMiVe5L2aUQtMfhU5xxN6Do1zPYjcYjLNKye1BhS7Yx",
  "key24": "3SERna1Ye6DW8Ef2E5NWgffx7ViQ7vwx2eG2gunUFnstVoWXF4uhRUxiH2MmshYEDwqzarNTRcV2HGeeB5vrL5t6",
  "key25": "5KEJKtRBYU9JdPVMBAUpQtooPnLEk9uMP4tW6v55GsDwkuebVfsttQK7SkMkhkdDKMeK4HbfWFyuJgU3wD3GnxSM",
  "key26": "4Rfuaw7uBxJTToJafAcuLafrWWmd342Do9LfvLg5CxHm4g1Vdbn4DPgb9wvqkFExEy2MqvhHgsh4DfwjQBQWopCU",
  "key27": "4CMaogXPZKCy4vWpGh3jV34vbmxJuYogLY9TqSFUMG4FR6qUZKLHZGTFtQM9UvpkPUB4FM2YKEeYZTt548vuPqhm",
  "key28": "2sQcP4tRjx3mKCFyAxWxQ3Fgrm9QFFM9pdxUgqwT8HnwLyx6yCgyNvDA5dLsb2G5VLDZ9Pmz5g33AXvt9tSrZnkU",
  "key29": "36HgBYkhCp8ouutWs2U8AoMHvWjXVWLV8SU4qgcakfU4df6Kg7F7c4RAz3GS59MrzsmYMwuB6ZmhpYft4i9FLV7J",
  "key30": "2gH77Pmuiue6c8Zbzvjz7EwS6vc5ZLKBQA2zxU2KtAs3AsztJY3vtrEMYsygwaEMEYJoSb5X3eGiwqcpACU8tFgB",
  "key31": "2ZP6sfeA3qrpUf7E4F49uE5R371bRAnCwQz7XV4wgLNeQcGZ926oHpRqw2NigZH9uBWBN95XP2uZX1FtsHnxyAr4",
  "key32": "Yu1GLJr5iSqa7W9H8gRTo6xaNVrfPo1d6iLqBTWmgwUL47wFD8GMCwmzBY7Ufzz2UjDWXTMbh2MKThvCwooXKiq",
  "key33": "53RZVcWsmfMUYoRGat6JtrxkBSFy531v746UDvRXfz6PcSiRYSKJBZHso2ArqCWy5Mh5set2SFv12EGuv12aBMeW",
  "key34": "3WcuYTBKuFreEegYCRgDgxWPbQkCUqKyYJ3NLKpnNmDzoTETxqvfyvrJxGUTphW6rNhp6t79gmkEBuu1wKnxVyCE",
  "key35": "3yAd4a8aDsYfQrue5E2Q89LyVcMGEHGXmDredLGaGb3hw4Afste9HgvgetzM2t8aXjJ6jPDwdUs6TXL4ErTtNJt3",
  "key36": "yqheCCzSJg5gFmnwRZa8Lr2sVJo6j9duBjNDKjtTtcnPGaSnpXXNe9BvXhDcd6B1ifRtuMqKiwpdMf5oRgguFaK",
  "key37": "5Xre3X262sd8eyQLQLrM5kSRTHzaHfQPbr7gA57cRbo13daDpyA7ns5aZvNNifU5TjSreYubT6D5G1VZc8Y7yEr8",
  "key38": "a6Lexz2LjeS9s3BFf6TQLWaJ5gemThsp68DFRWVAtSQUuefBP6p1U7UjJA64L17KRBVC8p4b39JSKQDviLjrdJ6",
  "key39": "2h1dNYm4wh4BEaZuoJZzRY31zuh5a795znXaWVAvAhXcmMkF7mP1BBDFWHC2jFXRktLnftL1oYekLFZ41KW8nVY6",
  "key40": "ZStKckd7LdobgKei646wFSj3C8syhaedR1t81GAMt4JD5CxDgxKXnckkjVgbPXWutN6cv8i92X9NhpdtifvXfWH",
  "key41": "A2HFY8j7xJNxwniL3Rzky59XMvYjkHVfBf9nGDyDrdKTai7w4YSG9Uk7Z3GyWzqReNawWxYsXEbrfD7n6hVniva",
  "key42": "2aAMp3z8ggfwZD8r51DFk6UrcN8SdM4b6WavnGYMF3DpXE8B7QrctqP9h2XGADmF2ZqeB5PAzbLhuDr4s7fRStEo",
  "key43": "5d5TwEZBRGFXS87fRYozTkUtNnKa6WgoaF4LMzZTnycAzRjJc5ZErimfkJQFC7zCnJG97hK9aaHWXkDz9ukEKkag",
  "key44": "xWxnSKhT5yj85ZMwERmnqWu41UMKW7snmkFgaAZiFjnFV2zbzotMmvgde8uRAAXvGcriWAhCopK4yZSDdvdGLs9",
  "key45": "3fCVN64goVQdA87FMuE8qHNAqNHKm3WoBE1NM2finfVXNVM6TdJPAAyayqNBMP8QjK9JLRHrxW7aCcEfBJ87sBaT",
  "key46": "2Rwm2QD3hUB544X2Tjhn34APorxCGVR6hSRUPDFM8jv1G2RSHbgWfm8ry8o9HbbnmnMA8TmXHk86rHCas8sVz9Rw"
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
