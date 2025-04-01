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
    "qJFo4RQKcY6jW34q5S5mQ9erJLsrTTXJN6fwz8fEPdZmwYs9M6xSwL1Mu8p2m9tkqUMEJXo4c9qU3qhdWrmnhrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N4mTwmLTvjKs3Ev45mW9V4puTWvrBTNMhNpCcvZNrB5tSxktFWXuCm1vf4m89yQFNdjycSb4ga9iPgeWJEerTQJ",
  "key1": "5hx4DwXHJwPj878MuQfZrjNr22L6u4zZfm8LLv4RvLcmCohqfxes4N6RL25nXeLWVqdTFGupuv75U8pMb2ERWKF5",
  "key2": "nCbrFHkJ3UhGqqppKQsZhdNdzXs8fm7qkTApXWsQBNpjrxHZhv8jNeRdBL75WsoPoFCzWjXD5hucjwTrk85P61R",
  "key3": "2Bf2rpb7gd3iPisniZRpw6YF5AoMdPEoRXQS3aCxNwfAdMdFxKAcedw4fJA1oLQBqJ3F4pUYm3rjsBjKMqSH6MQu",
  "key4": "5dPs8h9AtzqJQksjKSko7BBVDtWSaTPeeGvffX5F4mzpQ6Wc9TBSXJo4ss8oRimcvxgD436M2m7rS9SPaqJUzjJh",
  "key5": "3QJawPpkqvESQnoUpVbM2w5C4WjoR5XD2ca6BzBowD3yvv1HQ7tkdMgAf7g3Q6Xn1PHj4hJuezoTSAtBuJSNV4jQ",
  "key6": "VH3GPa8h6kEw63mKAcx33T91wdobsxocpPfh32ZsYpKjhuX3FXJTsQU1tbLszmS3JLEKWivmHXDuXx5JxWtyXcu",
  "key7": "628TvW32Vh1XQF2jBypTjFAMX5tGkYW5TRdGPvVp6T4XpkWnjsSApykd6BiyWUZ85wqtxqBt6Qk1K2So1U6RAyfJ",
  "key8": "57tdaC1jg6jX5XpmntE6t9JzNDf8pFWwekcumjR7irvnqb9Dmy1GngG9JqVkkQFH7FVd6Pjn9k3CoL3P8nQ76daH",
  "key9": "2raDAjKytM6bE7Mgy4Wg8FvaiiK4dpfDALyZvTrxTpp8bs4xHd9Vh7S33wCMRJNALmnnMXiYwykDp344AEwRmips",
  "key10": "HqiBSENeNDvJR9A8kFHni3crH8QL1fR2zCygZETB8jRH8DvYU3LdwV3M3g6gJbhgXPB6E5nhZkd8FkQrQB5u85D",
  "key11": "AhABncmsr9soG6jyh8oajLS6EpYp2MF3h6tYkba5XSEp9QnrPqo2Yn8zr3RV68Yq5TjbUvScBWxhXswgQ4XXKm5",
  "key12": "35i1FMReYmr1xBxPb1KJAJHZqSYfs2VT5qxwz7eGcRWNgYwVKrx9ns4xGxRKiqM1iHtKPJcpBh1GRQWAai326dQM",
  "key13": "5ksHbcMnpxouLxvAQybNWrfcSQXMKrxaK6VSDXKfGtjcc1UtvVVQcTbZGN1uV3F3mwxmHXSveosZcqMkdqPCMNfz",
  "key14": "5swnQz2TSJPX8Q4dCvKWqc7ee2GWs7wPZX73FYJ1z47vv6q8XSyZpftrfUw482JpqTtxFnbrYoVcFH6xVWLB6RRT",
  "key15": "34K21LnqMBRwF5JeDYYcmmHAgbtnSFHAMLmCjKcuTazw2VVBsFA6CQrNMx66WvVWf7mbF36CTVz8GyR2jAmTzUhT",
  "key16": "3He23DFLsV56jfQdA3zoFgmQgLHUaL756bgPHKYk1YpP6deqkRi2TyUwbcygsimzpTRTXMEqTaR9eotieDwP9o9q",
  "key17": "2SghK5djocavQLrf955ZwuQpztgtcsRKZb2owfe6Q8ywKEmTXEkdeXMjn2nnJJs74dcnx4xea6U1HeCv8GzxK78Z",
  "key18": "366DtHRi8mKwDwEXb9rTkAYVEyz4qM6BEsufm757SskZoXGyMjikpvoMXYg6cKSZkw2MCsstKJ9R1gdLA8mee1as",
  "key19": "54amWVf4gn5ra2CqomNoKPGAEVvu6unK7XDnJDa2GE2uDgffu23C8AnUvCvFutCiRh5BNV3yDvxhxKqNVtp5bXYr",
  "key20": "33pFSsX6745u2zszW4FPQMbUzBHUqC99Pwfvy4gFaiNDzmAffXkrXwS2MDxEvysn6W1G4VWpwwgnpa3TaDeHTfKX",
  "key21": "5PoSmXuRrNrSq1q6dsK4D2iUtX5BuF1ZXAB13UBwV2dcZ8G6apN6EQKgyMiGEQcV3WMvbNNEV7P4MHAJwCPLFqpw",
  "key22": "S4UMXgYYFnBRTRUcFXem5UguKBFgrCh4xWarmmzsfgWsWtSZA22V3WYgKAsMvvnAXkxZhHvC5FjH1ubiHPfm6iD",
  "key23": "2HdzcypsjsBGMy4R6M6ncx6uyDg4fc8vyDiFvKJgfX3Dfb6V3FVhwGhzwBwe4bVVMKcm1fUi1dx2ado8MyjNYEAK",
  "key24": "3a7BLXQ54pWanRFKyCh2JzDzVGpZedV7aWCWvuF3oxcGn8YtSwqWfmCJ6uWp3Lrjku9Rd15VgvvAWRLGg5WvtNjZ",
  "key25": "16owvBdfu9nuHkBpB9XDnGx8Lfr4hFUozRprX2cWepUzkQsmZfcg8dGBrP6NsjoFHRFn6LXkTkoVUecxSTaZzsF",
  "key26": "63enR4ANmzQAJjubhCJX3f2ao1FNEe6DAoQ9PEZjcukLMtwdviMw3yJF9aG3jpj6nJ2oGAeh8hq5F2BsqqizJHdp",
  "key27": "5qzTJkGW34YHrAmB3ZqwqnS9dEUmhbZdvc6qxge4h4MSiNU1oECTsvh441qpumr3JC3doGuE3LsnRxp5kFbE2FBQ",
  "key28": "4Kj1rvgNu3yoavXba8FamzxFkfESYSktBTq1hdQCcoD7tThirwvKEpKTxvQPEPcMTW3SqoKafHSNBCRbixosXEMA",
  "key29": "5JjHr9mCC3698Gg127zD2c7LM81Jt8xB6Kno9UP2yZjDhoMYRN6TifQ1goTaMJN6TzSdmrkev4ieNFe5rLsf6aFC",
  "key30": "BDF5vurqjQ2BDjCN5MddugWdgrb6zyeAxQuycR3XWWkSDxCT64ueEtup3q9JRn4Cde9Rh3j4M2W83n4JYRiQ4XE",
  "key31": "ZGUJKdNB5Xx3En9RDYQmSku2QMS1BudjsMsvdCrWzqoBhpqJwkUseJoSJaEnkpKsuVDznP67vSyszCXJC2ujtrM",
  "key32": "4pJmUx2CRPjNtwaxoX1Xs7DwRFb8hcJ5sqYWaKJL8RyJQFo9dL9qKmM9dw7iVVV5T7DhW1ntqYAwBdY1TQxv3H1s",
  "key33": "2dyaYtYGENJo7R9PUeJ1DknqUMToxqMXRAG8oCqkhb7z5yV49gNWUU9CP5P2rHqMseXgoG7qmii7gGYMDxCtiFGF",
  "key34": "54sZiKyea6AExJAUSnknj1wdD4gsCCs749XD8uw5aSR85iVAdXtcQx9MJTqASF2hnTf64VBkWmuJZyD5e7bJvUPw",
  "key35": "3jJetcd3FDB3zN9PCQg3EgqRmwmaxtjHpdqfLvPKhPkC1CJM5PkTyVrjG8jiKdmqzQqrf97hSN9waUwd5b9Kj4Q8",
  "key36": "48jx14KtVC9a9rLunr2NpJyd5nVLGCjxwuu4ypneVZCnD5GCmoL2eZ7AStCCToc5P1xEEUqz1Lb3xFtxH69RtnfH",
  "key37": "3mCaMPS9wokBvJMxPYsSnDigDGy23ZpPJTTSa8SkJ9bbhgQAJrC9wRcGejQu39QZZhmPx4b7pxFKUT7QHmJHT7hs",
  "key38": "3pqVM7kH4UjGW3NfWTXJ17G2pQLyBiqzTrPqQMpxpG46KcNEH13C4x7LPxUYiR32L5isToBMWeBpw79DR1XXRKVp",
  "key39": "5RcwAUxxpFi12aKKadDobZRqUbFP9uF7X6MWWrcAuJh7TeuTkAZRPHAh4xDuu6dHxE78excrCzxBJGCzKc8jEyJF",
  "key40": "tkifDV1mofY85DSuE3MKuysbbxt6p97pa8u1UyRiVy2pdUeWUJM6M2st3oFkfHkm61GGDZXPjHwzaPAACcYxgsG",
  "key41": "3J1pLvJHpLYJHEsgNDX4tUHoWq84CiNmFMRgHeU2WNfWwHRenQehdjevkszVNLTqHNKb7FduyoknpoCz3SJ8ZREC",
  "key42": "4FzFUtePRwtsDqERyFH5AXV2yA19N2Eiuvz56txhhMo2uhxL94HvS1KCv5sQzFbxz5wpxJnL4fD3APrMuqc6gRqr"
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
