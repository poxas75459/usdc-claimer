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
    "39sxQ8bmQtQiyotPnj5th4hCpxLYduoLRXH2vwFawBAYLT2DJkHa1aFBuxemLpZxJGfrz46xtpjS3bH4gyHbKQWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a8hZSgLjbsTzuFctY1RisnYPDpMGJCrtBN8zNhBkdrDgF1wLUXPjBA77TFVZiQ8eZToFsb7wyrCg3jpMChVcJFG",
  "key1": "3ofniJjkrZcc31p8YqEsBepmGUgKF9VCq5bPkzMHkuM3wqM4B28ViPwnuFb5fpo3vMZPUWZrXQqiHRrBRb6Lqjkv",
  "key2": "28swxWrykj7QMmWLUfddkjwCMiLyWzyCbHntqBxzWT8YZ8zbezazyLEARt5C1mKLB3MzWzMFSfF8bVRLEtafE5V9",
  "key3": "3Jcmu9fZG8E9GetEQsv7F4s5Qzvi31dHaEGSNSiygtj8DnVFM3ckt8QR2sjE3PWbzAvBu6oFDJjNXcWN71QAaDdD",
  "key4": "3uojmvWGXoVpNhhjYXdkojhszFF9mhycdMrBanSNk8LEFdYyKM5eyLRaLdRqfvKKVfyBChVqJYa3LP9ULQts3MwM",
  "key5": "5t9qukYu7tQSkEZvaTEuVVZbBjWjZrqyfAjSknfAmbSJfak6Gq7rPJRnwmEFjXMV1pVg1tU1ejw4LPANX6ztU9qQ",
  "key6": "4kxnEyKw8V4v4qAqpqjQ2gAuNfjeGeGHfnoKcsFFuRNSFCpNEdQat1QqZkEHjEvtZmwxmenxMBBEKvqCq893dtxt",
  "key7": "4B4qGWt9ctBZbXhAzGWYeQ2ZbVXYdCKKwY2KA6mtwaGn16JF3QqfkB9Fc6HtfL75x58ucLevRnigLBmgqFvdFBzg",
  "key8": "4bZFCtTPX2YXByZDRweaxnnh6qFcg3fT1tdMcGhGNQcENhC2AGDdTxg9pTkWeGjw82ravXVL69VkJreUi1v3AwGW",
  "key9": "2kZJPidrwQWAmoM84iZhHL72ZgxPybk7fYMNvsMGojExpisRqdgpHUctERPqUicLvcvFnJoQAUmZmVGkPbKWhGP4",
  "key10": "25ubxVKXVWnzJcpcfcFzHCWthD3TZoTWGHAot9LjjdYD6BKmVvgooLpaL97igtBCQAZFwev7e5GEt1AY8CQjm18F",
  "key11": "3tuNCMcGMfNcRLsPJMNXRMgAUWbMv9ehD2Z1beamkAAbxUjM2jaN9wSemxTXiWkiMM78k3ZPBGkGVTr27pueE7yY",
  "key12": "4GAaKEdaJ84xTSrfWLg818oZAC35BLs8XGdLu2VJuSzzJ3BeTCyTPEXMG4CmuUnY1xcZFiGKREnHWn5xjtP5197T",
  "key13": "2M91aKiksctyi6Yt7jzePu3GVQFMLFbYQMbt3sAAV3XGhxSPvybyjcXWiYFr6huwxQi2GcD78iijNHm7CtfeU9h1",
  "key14": "5tKcb3eE6JXCdkJWa5RvZ6zjc6gLYTDFidbR8JyToCs5yiPwmHvgmBVcckvKBeZFJ1YQ6Q3eJ9BDk7DMRayvXNnx",
  "key15": "1bn2DeZ7t7ymJYot8mK6DF6pTuPn52SWmrc5ppTButh2xsGAbypptMRKbQj9MbhZqjGtwnSeTfLfiB6mkyLenJL",
  "key16": "3NY7areESdJfR5GcPjs9vW2jUwErNHheLHNj7py7dBmG3dUwAyHZcDGf6vHnP8djt4YjgMPFJyMZWgsXyc84GaL",
  "key17": "RcrQ2YBE8qeWus1Ed1uijafHHpPqAZwdhE9NtGsFjQ3KKhH6vLgosWyqxYg6a79ykC8kSSs7vLshgpSwGKhneM1",
  "key18": "sgLSzZKLJShwvZYY1bsYmcb5i7S8ftbM5rQaq4zAXfwX3wXMR1Fuz2PofNE4H5eo5w7xFc5HrRMmbpoHhea5HaP",
  "key19": "eY1EUXzqNT3wToL2DpMaNN7R3vzdEGH7NzThrSkVqtugp9FXdZiwzkVNifH4WcMxdpBtikvDCZygQ6HJ5bNSQiC",
  "key20": "362pfYW233NnLU1wwwWJvZytYcsmSodxW48bgZMx3osdv1eFTDqjyygSKyMJNycU3JhpQrbWtDz49myfu2MDfhEm",
  "key21": "4E8KJU3UQVg7V84GBZASSRFPf35YLXfbU5dv77idcS6Qpxi1bWMGM8RJrvWC4UNf1VR3sPsLMenkhYzHWkVc2Qkf",
  "key22": "3X72FuEhhq3YGdgPrP8YKhHkq38tHEKJ4AGBh1VnKw2aqq1u99KPTob3Ch2SBj6cmpfrP64rjGTzdppVmsZSGpew",
  "key23": "59ttoMN6JMCkpgZZzQpWcZqU3wix7AEGfovGFsvrTErkxGA8j24yeK3snC9cyYjC3Pm8K3Dp63u3DBKRFwa2TXjH",
  "key24": "49XNGcbzfhjctoh9vMkKxpAwH5ZZSZGpjSq8bP5KB9sDxaxExFf8WxDgjjfHm9ANtw8voaL7x7sPvbJXS6iSkQr6",
  "key25": "4Cu2Pg6dUEvBmMryVfTPP7zst64tRjwNTw28j7ERAq3UHT8Qai2pEMWvQHMWMBnhTsSmQdhGZTmATiUdX37HQnvE",
  "key26": "5HT7aYZnTZ16k9JUvepUEqhViFWUVuPkDXYcVNpUdLdM2E4ffDVLnEvqNDfscLpu2sx6rDC7Nyb8QmxQaNtZopj7",
  "key27": "2AD21SPFGqoxF6DJ6mpFAejVPdz8ue5jESZFg3SPkDGY2y2Gnni2CdUmT9MZEu4S53BqdPtHdXVzk8bE2MyoGAY9",
  "key28": "2KkyRoTcsF9fvF5wYq8z9uzzVez8kdgCsEzb7D25nRZwxF2i7y1KfZtcN1vyyUsm82HCkAA8koztDstomsBtumRh",
  "key29": "5D7Y7FwanAb4RHbUYACDoMSkEzPeKZaKA64DZR1vVx39pBrcqp5FXgV5A8CzEpCnMX1axQdnRqg8BxJQBuPmFWkw",
  "key30": "48rtWFMNMJN9s2KnVsEPMjKzqfzB9toNSxNBD8ftSJ9HLFEctcGwwYdgFQEaYrwq9TSQVy8TzfwBe5tfBvaNjNKM",
  "key31": "3VJ6UybgGSX9Fq2FSS2GcfT8ZgiXYT7c9cBYB2bLCaD1nw3g8N6Az9bKmV89nTmPYtXXUtHiiE6bn7FCqsxiWBwB",
  "key32": "3PrK465aY4sD9zx5PN5onULTagjAH8jp8t7PrVEaVhV62UaiN6XwR18VAkCRy5EzPP5bBfPsTsPRiurcben6eoNK",
  "key33": "3uCuATqBCRypVjXypt87mVizgyL2xVkTkk5n6NkigtDEAnYQiVcrxmEVPWvMxcmtiUqh3MryYE6KQdn3mSaUNLAt",
  "key34": "nnrwU5niJ588RocTKgrj2kM75wdm6ZnqaWLJYHsJ4BDzf5AQ6UBpFeuuTxdvFwP7A4ErBJPQ41dBg2SrJJsEw9c",
  "key35": "47gshkKX2YaaJqRHxvpns1dBKkSQe7VqPxx5vgyVkx8XF42yRkLWu1jfR4uwvVzsi5pD9VW8bgjCYb4GRGAQ9JfB",
  "key36": "2YgPQzRnMWV312rkH84E8SRVA3ozYjRUzA2fceQtz36NryzjLDrGnPr18ACEazAouH94WSouHQDzckPNsw6oWRKD",
  "key37": "rCzPK3QrTJ4uZzHih8T17AP1Fa9e8VGXPoTuyFDUQsJ8oyKbF1GTQxzLtuVf7qYbGqztozKw1BrqZBvCVAxbU9e",
  "key38": "5tmeiC3tsBMNAWVTqWen2vL9AmnoTtPa45P2jxMT6CEhD55dspMxhQUPRJ53fkMTierEhBGC6kWmbK8wU6SEY1Zr",
  "key39": "35PK2nua4rr6jkeqrYGhGU3AhPgLwKfungYb821YE6rf71TX9t3ccnE8vpQUHyzH56gBZbEe79P4zeu1dT3hvZto",
  "key40": "EhPaSAFCUuq5EhagiQg4xSNL4AvJkdQ6axu6qVH3xHUVS12jzSyhvYvpjm434W7pFQQcDDjHNScvhY2okmyhHkM",
  "key41": "2DbVAusULHwtuFurA1gxYz7sNPVHQerEDzkssauC39Uk3ZeoHqd8T1SsSJkDEG6u4EzAdUqgGssgAMdoXzzeDkrH",
  "key42": "2iPuDWsiqA8iLyeY4KnadDHzhx8Y9RBSCb5YmUzRDLMa1GcC1xV1Acy42dtC69ZfFJcya5ZwLWGJhjhyazwYS1U1",
  "key43": "26VcryJJkqNMHtayD1Bwyr1tAUAzrhFmGLGpL3KyGfqYXVafpZQCBdRL59VteRMesYFwLgcjXGksDvMzvW5H7EcB",
  "key44": "2a524k4eBbwJ92SdMYcVzcvGefHEXx6PSY9WBGq1geRsjwQc3g1bTwfPB7scnk4bYTbTDfVLnwtZx6U1AjA6zevR",
  "key45": "wGfjyAzMzycsybBWi5CvsE6d3ouaLHMA4KVC1yFe9JjvXyTF6f9YVYAzwNmyq4cKhB2e6dE7RJMxvTtpYjYJA7C",
  "key46": "3Y77pkEViskECQyCDzZLe7pfhsH1wkwJFGhkes9pooxfLhMLMN8GiPPL65qMiY8F2kkZ7QsMUViTnzXqnMqKzmNW",
  "key47": "2JzuF2p8MFbdi3BuCCzJDXybcmCHmKs9pAcW4p4PqjSEGRaT6dTGtDZzajh93zotr1WomU6M8Ys8FuAxjttHdHHv",
  "key48": "4z7vkJdweCpynCUgeqUEyJoiXWZh2jbWbAuLk2YZruEMoNuVXPKAvM9JdpesLQS6SLC2ZRw7X8mTcQCUFVAKB1bb",
  "key49": "2882KaVDxcFjsmL7ck6psaXEvDK7zwj5tBSBmzyoSBV37dTExBEuA9hnqcVqueqNe1ZCMEvPsXWCiXYGQ3aeX7KK"
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
