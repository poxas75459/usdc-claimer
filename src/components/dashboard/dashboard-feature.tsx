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
    "5NNndKREfAhDicdxDL7U17sKDKg5T4y7FZNDxxa5Efn54CVZvraqKR8YjgyqznssHC2xWjwYTnUNNz5uj8CkaVWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6LAvLf5S9aFXGKXR2cFhhGPzdnNDx2t3fWdvcKu9715i12ykoSbDFjwzXkB6jyvt7y5jPUvk6BykndcbPScToq7",
  "key1": "GE2ZYBQoAb3QB2zSrgTBweH3czzpzknhSP8Ku1yKiDrkaN1hcG2HPxG3K9vxsHcQco4sMM1nTbvJS4uC9vZcvuY",
  "key2": "2JRFAix7Qim4psN1hiqmKeG4QB4rgyXkgptJcwswLQtM5iQvzW9jvH2qGAWzLorDzm15oGJSh1Re4KtGbsHJ4fP",
  "key3": "aK1tHG2frPuaTb3t1c9PNZijvoHqpbEm2ia2HbKx8TjvRQQouAAayVj5MFprZ4Pm2mPnzhz9GrAbPp8Efyks4t6",
  "key4": "3U6PDeRZ9WbkxpAX55KAwqTFJATRtuKAJ6xhGQESHvqk48CKYafMkT8nGtEVbfPf9bGcR6fPZxhGfHyy7ovv2S4z",
  "key5": "264CZ4TTjhXn1CVGipNruX5sKcbTyvmhavziFggUaFqE1EAShZyxkWFcKAeHNpjDeX6JbPdLGV6WhDmk4ykNPrLf",
  "key6": "32AkhbExNmziR1rTa1gLB7WvbML4p782c9MjF2dzNyfsptChzd8323UMmJm8cr7PNFZrS3JNo7RffNcb3gjxih2N",
  "key7": "4tKh4Sy3putN3FhfRZb9KxzXhikKqfXrEKZSdXZmaPSfS2nBvTxN2CSvRogtKEzj93Ktz8VpVickvhjBxBhq5FNp",
  "key8": "2YkN6ZejWLvS8KfeadJGnHw7siVX2iXy8d9haribHypFX2TutC2m3pcUT2Dygw1xyMrW1sqa3Nd9UnBydcrUceGd",
  "key9": "2h1tZS4tJFMo47KCE84ZwMLtsmgCUJX4d8DhZK2sX1Li74Unu9ccMgonVxEpic883GNgFgHiuszDwm3LnmF1DTm4",
  "key10": "32U2fzQDQ8KrzQQ725ggcdHRNcnxdeEuBKTx8QNrVuVatvA1QFBFfHzKJUpbGFXUZe7SMwZYktNvzRBS7QFB76Bt",
  "key11": "DGjQxevoJqjHtGvMR2r23H28BTcmiHC91jCi5GX3cppLq8zCU3Bjg8GCh8wJnGWWYptufu5hb4HE3dvpyHyYRpt",
  "key12": "3twBjz4VPrrxsDfNm9ofFALk4QCqLPVbL9jJw2r4mxkuZe65xBXRfUcf6kDAuLcTqmUQ8sLZZBwzq4nJSToH2Yeh",
  "key13": "4iYZAXtxg2q9g8yQNcu1adnSkYwxC4fedsUkhuXDRupPuFUJ5PDDAfHRfYNXATCJc2WWzjMc8RRqGExvPid6vGZW",
  "key14": "2g3FQhyFcwFVv1phBTeh3WLf3zw2WBLKSB4sHSJdZT8yGyLduRRCu66fvwf1YNLCJyFSwphVn5WmkQvRb1GXZpBN",
  "key15": "54c9SevhwPKMrChKU58oFA6XSJ3Uqb5iW9c3n6RchA2xXbjkhDQ9kgpVaH5S1TbzDGWbvpegCDwFanaDmepjjdBE",
  "key16": "4CHg1JCivcGk9vvaKG5JuqWv6wa7YTsQd5QfHS2MrAso7spLJDvfpDTrwhNXywejkVyf6UPNuZBUWC5E4GgKVMyn",
  "key17": "5itQHvBEK5qGjrdvYNtfHbZJYhGqtYdunyiWswbd4YBR2oqKEAmpdMsQLhzP5pb4xbvp8iiatMBXGDKEmZ1twV4B",
  "key18": "5FP48Bzpj96vFUnmiV9Z4P1dStdGQHuBc7BHb6HRg1dFDoFWdML6rXqLEoURZyrvq97iQbGHb75teBBYJ9HaBCjB",
  "key19": "LxLvn6kFfy77Dcp8BCraRJhYHCdBPQfjZoyrEB3LUZrR1mX6kMALLgimDher2ydfP9TgWsoKNwSjBgw95HJSVak",
  "key20": "o9kQvvfAtuEbaANNZNrBBZTHsQFS8wYgtSqoLq8b3gWusxZyUEDERiNf5PphH6BV8DvxW5otGkTow1EzqCSNBkQ",
  "key21": "2wtARuFYUeSvzDonLC1JbXaAS1m6ehq9SDQxxnh9nJvMyhc4Yji6dGd7Mtnz7c1PTvEYGRS713W2njs42YPx9xbJ",
  "key22": "EZot3A6oHcDFkEv4xRwgaYVBzhzcSquUWndo4CyezD7179tGMKAsRvpALmn9BaP8yJMD14zAZzSafuUhBV3PouW",
  "key23": "37ZC7gCeYWw61DFs8ccnPzXUAsxoFwfgqM747kcArCkYvxUeJZGR469zPP8KWcbhZCxaByaXetu81enU3AuZHPFm",
  "key24": "4b2qfFtxKdfHFNxrkxfJ1pohdrzDfyksyTcX4eVLzZ2ZQpWLxZq9jmqqk5eom83hJBcJAGypWBHfNiqaJkevJdAe",
  "key25": "3SA9qyui1aMmtCTFamdeqT33fEqBR9mzLvdx9vcpoz7MAk317uw1U9XcPbfuatxajeh354yUGAgXEaGq6vxuhFkM",
  "key26": "2EPVZeLU3tzRea4Aoy8uaEnYx7Z2SsTw27V7LZU5CoqFx9f2bxCS3XB247GYpfVJv9hSjwBu4XhNvvAxgSiuajD4",
  "key27": "3ZkYJQbhqxPsDYqzFCuc7XWAPJqPYc31KMJFf3QtCUPGDx4xqGSarRabsF7auby4q8RLkz1uYi5dqz6MBbaUbdae",
  "key28": "9JzVXXGJ6aAchbzM4ScBxfLV226i12Pm1M9FYSegUC9nCjQU5DosquG5AzoLqEyUDZH7Z9Fi4H265dbMiprWToT",
  "key29": "4gYzNAQ4odRtBuTPp9Kg9nEgRbYkrNUrAhaFjPctsLzN7q5CcMTqupSRtHj4d3T8zMaYp4LG7gtuYyECfvPBxLRy",
  "key30": "nT2zTKmsF3Ej2Rc8LWWet6JYg5uvcwWGnzM9pvwN6UWoondsxNYGRXBQpug8xDN15zPZD58ocjeSq5wxyoYRGV2",
  "key31": "4F2Yem5NSojVUmKmYrjp4HzebTQQcvGLUMvS1YSpJc8uWYLCsk6y7tE9MMDSg14b7Kdg9HDB5CRRzFEVHahAbagF",
  "key32": "a7Rssix6Hc13wFA2dUqDEieNt5B9RjXxnyWYNoF4YA8uzGn4gnAxSg6GEwdVyhhJGgExqKuZwTQpbVqQ1ZADm6L",
  "key33": "1cFpMtC2YSzHiQ9hsoUTCKd3xHxYHhRs17QCARp55YsXEeK2DKXfCC3SN1NWhsNRXb23hF75nXCf8m1iFM6c44",
  "key34": "48RJvSGzqyhTXMHPx8qMkout8jii7nwR94vuyK9wkax8RF4WVhXrouD4kTY8G3iFmak6noA7F1vXttBXKFC44a79",
  "key35": "ptH1hYdeFw8hb4uk4iYMd4TTKh5FsEiS6FTt5Wo2fGkpvcTrmXWL9EJfXEz3LhnToF2JvMDEMi6SYW6ySKAhsPJ",
  "key36": "4akbtrP7qSekZz2ZDTKL7KYhbyExskKuCZ3eCzJwkbYtFcXhRoMLWTTkXsDyQ8BiAC2nfU2NCrcAf1EjSLecnBry",
  "key37": "fk5kXeir79yULJWKmjukEx3Vt8sFQBQ7XgSMn8pRaDH8J4vTjRkjxkY9sEZ23Wfemb9UKPmmVww8TbyXjCSuc8i",
  "key38": "4pCDjRDscAi9ZojZ3pLPMzpBFJJ4Kjz7WcBgy8EWyRBqq9WeGobvNgYwVn42fkcE2jSBNhEHvEfU1RNJuZvLBZUW",
  "key39": "4CThKUpQJjjiScGnZEz7vJsuCzogTcVsYbdkUDHRAC6v2qfodVcVktK6iV37XHkReBzq4U7RVyvAtjxcpqRE7mDE",
  "key40": "247BDDHym3S84u8WsX9sJhjN3g6Us5SbsZprfKoHYUpP7EXQiDo7UhCFAzspjGcPoQb7PagqWU5gnFkF5URa1PyZ",
  "key41": "4uDtYwF2GjnqsRegkvNvq7b2U5E8EdBC5uJukBm58yezGunu3xdjBJR3z4j4FPnbuPFfkYbqZVpWjApTx3qXfoUj",
  "key42": "4KTq7Eo1Ye5UzaMwGHUmDPZFnaNem6srKhspvn1rvwkCdP8e3BbzVLvHqN6KaiGacbuJAifjWxBxk2wrZXLqDsy4"
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
