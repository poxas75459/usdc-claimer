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
    "5n9pdFhLTzH411wjFNNQgc2aJ1DsZsm7sNfpuiVqtuLmcY3yMF7rewv9wmNxGXSpLNjH9f3V2T32J6u3VAS3cBvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wEoUdbkVDPS1bTX53skQGApUvH1UpJ1ho9nHYSiTL24mE6Ni1q5kfGxC5NEWHHMoNaDXAS1BDQAHgJbkkFnurb8",
  "key1": "s1mxL41Uen97GMP9cvT4w3LijbMwPGdxT9BpdNA6w4BfmpW4ThvP4XEobhTo78JCVN5DaaJvf46MCu1zt1g9Smw",
  "key2": "46a3BpweayZx9LqjcxfhBbDS9KXNQPWH7wU6JJDPMeWne4mtnBnV1stTULHpi6Mz8L46GNM42shGSTkJmN7y7QYG",
  "key3": "4ZnLLRieAJQQdH3vwE9tC6P6AjG7rnA6Da2XeSLRF3EJxtd8dSLUW6irHqYzicvUvLFWrQeaYTzxGdibqBhegoxf",
  "key4": "5HrFrC93JbPjVsS3iqpNJnW2f7ojWMDoY61dhQ22hMmhDNYwe8zakhXgXwjmYmejyyhDEQQAdqRLZp9VSMswTsmN",
  "key5": "2yuyomN3ARjQ8gvMAhdtEXZ9jt1jgTWYSSefr2Muy16413Fc7oGDw5YuoHH2ucWYrD82mwjWqPz1zXC5GFttwFBj",
  "key6": "4N5Peh69iZvyyNyPbyv7p7LgbV9RfyMrDhvHxjgnGo3RxNSg8vvvNzXEd8DUDnnbFmThTyHHeZtUkpztiCLLizbz",
  "key7": "Mm41fVGoRV11PE1XrDDh7oaU5QEKezb41cAXMPUtjjm3SUaEXuxAk7CVUzEg8AKW9nK1nqt7rzY3APeFen6fQCU",
  "key8": "fYGh248Vw5bMiqKjj3F9PrFdzwqWcuyd9HanbwYB2tBwq8UJuD2awyYGAkwnaXomt9NrnZxcAh3cySHtvXsBaTq",
  "key9": "uSKkNCptpmZWGwkQSB3vaxaC41KW7VHdAm2qB2Mr3JVZEckVbSFn7uaSPjYJRBvoJPpSJVgGX8Ey6mfN6SRrSX3",
  "key10": "4Yete6VdzPjA9dJEiqnkXm5aJ1fCjNohxkxqDw8uD4VMkcnp2i3M1LMRSKDdNvaZ3CKuwRz8WpnPX91P2WqgAf7L",
  "key11": "2rQAy2P4huWJ2SrQtun7qNyHg4N3xkKfkDjPtfu8JaohjDRFPe7tzmooov6zwZJgHqynx9toWxXaaYtXhBNw8XjH",
  "key12": "2oPutuyovXQ6bhxUbYz1YPL6erpNUZTKvr15WmGa5RYL5NSYcQtyLgSkU4NR8pGcjFB7ZeBAtkQ2ik6ugUFB2ojn",
  "key13": "4cLzHt2MBAiTwefukG8BuBbGXTRRP98ZWVGAy7HRReab2Jog7WzaktWuGhCCrcZe93VMLDuJog7sDCjtj4KKZNke",
  "key14": "38kvZD1bMcDyrKH7Hnr6hx7jwYSMsdELaYkEBpzMBgKPZEi4nM37hLHDXxg2XGAyeXkf2Y3hzoUEnApdFt2yLpQh",
  "key15": "3wJsHBmM9CCnvrKVWsYPiN3gTmBNdSg2xXbFaVrhAGxM28VQuR34GCppi1KcMVaESVGoA9DievDj8AZVXorKd2c9",
  "key16": "4FGdPQoTndLuxcY2VNSUTewfJ2wRRHKNnZkXDTc61rxQdkq82eBipdWCfnMZLYmordaEaDpqkg3A97TTWig2pKLP",
  "key17": "43rJceJYiKtcEVYD5PpWb8gBAz9rxxbfXyDLTgn2VrEsiom6L7mvTC9p6ix2ztvSpp7sLuJAktinisDnsDpr6d93",
  "key18": "4Darr52tZz95ReaZ21WgwcungYygResYH4mDS8qQ8wSqmhcWg4zsbjbf14RapkmNETiefHVsTucgnzRKD1ihurBT",
  "key19": "8qALZNpqr8ndTo58VE2d17SZ1kN5HBKTMXDwJbSZCtMsD4KfEh5ynBjH7vC4jdZkZbrbaCymZVaiyiu4CnejnUx",
  "key20": "yteErTetK9x2V2wqVRj78JSnjxy5Uni8LUk2KCQ5292SMr86tCUEhpM3ZFJ6ggMo9HWCNKT9yp5SZSpJPe74aTp",
  "key21": "E6kvDbfzkMUcRWt9BCuGce6ya9zKYwCXR2CEunL9BhBY4EFqnpngn9HrEtwZwYeEq8HWfbMUF7W9jdixYJa6j5v",
  "key22": "5aB69mM8yZ1fae4fwWrofT3Kdb6EHfEFSyNuGRHpw16DGTLu1KCAf9U6MvpuFLRXNwRmVtqoPEFKrjZWufiAAiuF",
  "key23": "3UPkA63t15DTPYjG1pACZUgiisEj7eU1Ay7nG6GSYUpgR5oo1GZxR1oUpyS596wS8yTt6uMCEv5ahfq9CkZdpidG",
  "key24": "37P3QAtTADoErdq6aoLr4RM5UWokBXUwzYMSG3wVxS2dbF1pD5WU6QLwFnYrK9ecb52tpDaqVH7FqxqEmRM1zN5L",
  "key25": "5N6pjuxMuo8eM1XKUbMaj7sVCMAc298XdhYyC2jGjiZcf6P1ToYDfXdZSAi1Xe1pD8aTnei4qzFJiAHpfPjN1X5z",
  "key26": "2LKasoyC2skXx2UCCrgJjdsFPporMkyq8R9zxU6nF6PYXdY7sUrmNac9Mwvs39V3XJ3rNiFJdxVKMLQtAXL5xsMr",
  "key27": "4nN1QYk9pzhSNpbvwGwK4CDUw6p82wPhaJXjFBFviFnfdqtmeTiCoPc9XvGCzHDhkS5BJnV2UWnW8GPN1TqHX4r2",
  "key28": "YRut6mg4aFSVSAzvysg1Fk5PSXZNiJs41qH8V88ywHpsjzQYBoL2XWqiTV2tjvkjmz7aKranyDADHfL3SQDMtcz",
  "key29": "31fnqZaLZRcth6QTfMVUs9CyTDP1Q7yyTUvvQydGCA1HzwkPj2GhQzoYefhWvAypQvWgKTDa154MfzWLzw15z3No",
  "key30": "2xwH5C3FnnYeFDy1drugQTqjwQ57ECinMJkaY4Ac9dYSiqSzAycSsE2GtPg48HHNLbVxdgKZrWYLFXmWEeM7qjpP",
  "key31": "45YmDszULuUePNkB9LB63qZKQVhhmVuJ4k74KZwzm24SbXoXTFLcwKnH2uJpjcK3ZNZXLdygAXZQzXhAJuQGAKeu",
  "key32": "ZMCh3BvfbzDMVNVry2DzWGbPZbS3gSdVagBuB6ny4oujnrm1Gv4gTvr3xSwBysRK1DNJejFYXFrRqNmuEeX5Jpk",
  "key33": "6v3YmUhiFhHcxmJ693WotZgTwbcFLrecDBeNUpELJsmWo2sirVkUedW4GKgVvHhvPpsECvVNA4M3nxhU3jAKnTS",
  "key34": "X7JCt4GnfBkY3kWQZpZooiCh7Aj1oyZLaAvzkHi8sV3tySq7SMokhJywMox8TpV9rXYDZ1NsyzXBriPKNUsuSVr",
  "key35": "36M7jy6deEw5qR32DZkHGUJr6YqughmJsqj6eLCgAWXTNvzg4vsVrn9X3Axiw3ieRMQCS77ng7FCBAcww2pjigWs",
  "key36": "FvdRNj5K6LW95SsmyHvZ4RdZcyFHsuYKosqkerUSKUZSKEHUhqeuoJW1w8TqmYPBvaQP8emMhppQzrV4bYx6qT7",
  "key37": "2zSDcNWgWsvY3a2you3Sf23BQe9S9JHNssALeHfiDYKyM4DSQSn6ZpDSkSjXweDGUr5C1rojYrFDaEbUL3EtZeRt",
  "key38": "2XPad4YSyG4Bi1spsBbqLYFC5cP3ux7NusHtKYVGFG6giJtjLsRiyuG8UQS5VwXGSJRgM97FTMXVhyGrkrNX542E",
  "key39": "AK8NHFvoZ4zzD6p1Y7nku3sXsdZ1w1hRt16scmGCDz6LgV2f2zdjZe4TEoT8spKpYTRGcQ6KSUczCThTR3hFMNE",
  "key40": "3NtVPRp9s1HbWVn958Fbc41ugk5gty1Br1jkWaMBssr1sxrhXfig7jPEYtiKJxYAqSLgvppe1no26g7tVJFg94ef",
  "key41": "3ZjWF8fy4B9ninEH5jL33dtF4ji6N6uKzGdutkdTAUh1ovzPDBxRyLZzdcrgGwcz2ipqYFs1vkxpqoHuGouybcry",
  "key42": "EmPpjM1otgNgPp5x8vYcVMJc2W1hbjrH18xpAoZDe4Fr93qvRgSScqfefbSHjHip3h9shaSeQbBG5JhRz2u88JE",
  "key43": "4gB4i1ZS11k9fnfCS3pAwoVABsGpaPbuUp6cjZb9foc18L7ksFbxEWenTTcseteBtSNYR5zJrCxNDfeLZyHwVZoZ",
  "key44": "3RNCvwwm98NUjMEhFdrj4PRWXNDaRFnf6dxZzso1cKs2mgaVTFScXm9SotJB9xg5HWbCLiDQPgXLfdyP1MmjovYm",
  "key45": "22nWDSt8FaZszFxDS6anJcTFkfYS2tqvNNrPeMQgHZ9LKRmKYMVNSqAG874MgJX281KZyNNUFJBubqAJ42KxYoGL",
  "key46": "2bp8KsgP5YZ4tZ24A7SmmhJ2rYSwjLzwZspRJsygaouW6hs9MEo1LmNSYofKHUH9ZCvm8L5aBRLiVQuTsRXJ23cJ",
  "key47": "2Srq67ACBzuLz9TUA9RHh9LCXp4exC7LQdP8rGvJ6DbZzWPAdJMKK2VWKncJpjfwMA5xwYWpN3C88KqpSnwDWajs",
  "key48": "2NfFzXaSPJD13j33HvutYWQjyoZ49ozYXy3AfXaaqYNmY5EupvJ3zFABc8SDPXpzxCtDyFkQb4cpp6iXDLeiY21D",
  "key49": "2TLmKFshrjAHjpAScmZG44ERkSyZ2rMpFXNftXzd8UhguN4PexF7NNSmK7j4p28qsAouAWk2PormknQUSQgFyteK"
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
