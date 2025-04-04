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
    "2VkNRrp4Ts6pDvNuWDejyuJpAm84387FiHjGTCRnNEn9XcLYAYy8Sv68e3PYLVHgmaLqUqC2baGrNr8HNDg7HXUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37MaqyfaPqcFSgPrtwH8ziMhc8zLFPSPjYCiR5kQPibvtKq7wfn1DgS1Gg834SVY4bpBGd6NFWBRyc12q5ynhKCa",
  "key1": "3hCsruN4K7NXWpJaqsrP4xJD47FNVyHmd9uHFUTTqTCtd8AnvKEccGDagxq5CvpLu2A6UA4Re3sxoubvpaZki6ZB",
  "key2": "5QRH1ccGLBG1FJGVNkFnaVQffvadNDjKPi1L9nFTbxxN3R1EZ9uMCwgPGPbuCiK7uQK9oxzsrWRdqitctT1ZJ4eH",
  "key3": "3SJBVXhCGYyZZP8Hrzr7bwntgsKc94rDgXEiYb3Tr1myTz23GQhHZ9TPFkA8cHXLbgmJ4JGLWV5Lp8eWukzVeemK",
  "key4": "4mQerqspZ8BzUkt2EgxTK4JkQm3icDJzumazWN5vfgy6APhcn2UQ77neLGgXepscm4fKiDvM7o36Mbmfdc16smwT",
  "key5": "9sSx5EKLXFk7oMJ7xBPVUBj4bndMhZjSfsUE3ZAZpM4osePJrd7VRf7yVtAgKdUEUnrMLZ7SYW4ZXhXpuTyckmW",
  "key6": "5mJSyVCRjhSvZWEi3RyfbNZKcocnDcKhDt5SnY9VZH7v19mUA8AFckf4M36Robppu1eGvT6FrhMBSvix8TKBxiRG",
  "key7": "kPZySnkML1S3QRESbXjkp3DmhXQJPC4fAxwjBhfAQWzL2zW7VnRjhJjMMXpL4AWZRejxi7UGzzKKPj2DQhutq4D",
  "key8": "4mJU6ePYxYDXMaSTYvUpe72dbhk4CLZnHQUknVFDKXfSVipW145SaJA6g7gSL6y8kJ72pGwB9Kr8A3kFWC4SesBM",
  "key9": "3wqhdmmiVbRFQra9fU4yqifdmiAbUzUz5XySftwMzCUNGepqtUWF2Mt1wsrJHcMwNcw6ymS1ii1XmnXcrcmocvU7",
  "key10": "3QvCSbbQJva9D7Nf72tNcBY8n9sq8jEqMRrTTU21BAQFtdKg226mkRkr2KTjT4G96sTHtPiZBRpTcEDBbtJjo9LC",
  "key11": "4XWZj48szxgB7vWAEoqH3cfkoqtDPSwh7JFFuoqT2N2GXQG48Ev22mViZTtS4dRtCCRswpsnVhKQphxoeLVRbemR",
  "key12": "3MyADerhfsTXnFTMzLjhdQ3DYk1mTRukcBEsRWjbbPCFoqnaympPgmW9T3JKLsS5Cn1ibLUiNDWZm7LGSgTwpdcC",
  "key13": "5pTnKKeJn5iviedFBevSnaRDgSzviSwAaiQeBEJsD5ES8iQJbP2B49MfrQmMzxY2aTuPSDEvxaTxft47P83TR9JZ",
  "key14": "3dRJ6q4zG3MxuwiEfCLNsjEW1kWq9gypbCaaTukDskKcdMqpdqiU9wZ4vdcUc1i53YemzPt5mBfArEgMxo5JNkDh",
  "key15": "3XT5DnHnqT9LNmnARMQYQQ8z4Xi3STg26u4brhwuz5CR1fzuJHZNBp8uM2oegj7XXH6fAT6FCuNy7eW5886yNHXm",
  "key16": "3vRB2k1BNNqDsiBv7dMpEaZ2fDVHrvu7FHsvVQq2zMP1PXU4W7XYM1UafwRZEBsTXM4jEaCLCz8RZRVGne6GBzVC",
  "key17": "u8sB5Wk6pA5tUm2yZnyCgad63T58vydR34etbENBWjJcWP4kSfLZdXFr7Aga92vB5BKAozG1QnnrWaKwYgRr58T",
  "key18": "2Dtzmk5p9ERKBHZ52V4ehiw2ZrEjuJzrKV9kFTxcKkZJYMCxWd3AxrTTj5UR4xxCmRj4g4yRkoR1T7jHZotumDmn",
  "key19": "61PaQqTm1eYgy9rdtJXUeboFksmkNhTNa5ipPXyUhgYD8scAyMEsgf3MEAfaQmfrDcDJ5MjKbp6FHgmtTndBedYp",
  "key20": "2rXnrseXSL8Y9v9s6ZcYheyzwm1nq681w4TBavY2xrcazsVtesdqtdS3RuYenX4CgnLeL8acXQEmErMrVki4vYgG",
  "key21": "dc3o8hW5h5efmZXr5NGJWaU7gjKtsgTewDVW8wx5DbcYdETiAz3Zmm7i52seUW6A5Th18YL1Sbu6LN5Cyw8RWb4",
  "key22": "2xdRfZcZCPUQitXKUWmgNi7sLHhr4UhUe6RwnQhM7as16TQL7u3kb2PBx8jH6GLyVRKyXy76XMCvUefyKEoWXGDQ",
  "key23": "3g79YJEBjGt1Ax5XAY3g1cDzHgkALet9cHMV1faFwejwA6G8ptxHUuMnWQUjuNPCEADsqLJiNYgRXCXsYd9oLh1W",
  "key24": "n3pEaeJf7qQrT1fvsoHF4ZQtAotuePvAKuLq8NN7BVRfeLMxSzQDevJesSRBnT8hhusocJ85Qh5hk6JtiXW2GsC",
  "key25": "2auGww5QbZraM4HLZRjgdCuA9xyLUCSUcYqfizxNUbd5Bi2RwCxJ51AaHzaSY3i5Nwwt5DTy6EXXEw7LT5MZNFaD",
  "key26": "93bSiSqaPMirW6PHHVMc7hrm2VDsK9VJ97UTyXHSgc3oij2J951Ch3BdW7TRAGsFvJAX6RK2VX4sbVRaZ6wsF8r",
  "key27": "2wbujQVLRBUASHxpksYaApXVUHcu2Pq6FSffU9T3aBGSm3Y849yKdRSYq7X69bVP48rqK98T5iHf4SpLTqgvgXkk",
  "key28": "3NhRouS7mXPvhQTKW232AQ7WtyVd8jrv79XG8cBTCkGbtizx47vpg6sNKbvcRzqJnFqZRqQ9AAiAxC3ZVKkMgkb4",
  "key29": "5YVY5tNyvHZcHEftWA1WrA5HjCtoj2xkoRNTCuX7oY9vXgPtrL5Ddyoy6X9QZeEMcGC3Zd3CeWPzm1He351ieaUY",
  "key30": "3EQrAG8u1aMzA5z3v4vxKoPB8xyEpzCfmRS1Qu3GV1wcvWsK35oXLq7b8Lwq2us324iV9BK4tPXHpFCcy1xeaJLo",
  "key31": "3aUw1XDzuw4f64PW4LrJ7dK8LJLBnvXgZ2MreE4Nq1v61nq3fzs6dj9V2i3ZrhdVmA5e7py6vNZaRgEsiE6d81dL",
  "key32": "321KkHkvyHiX9ZNG9Dp1u8dsKo6zMubnyECN2YU4NBs9cRKih3eoPzxCvgssGNs4QTPLHQtZVvcCqaVRWoXrmNuF",
  "key33": "uYG4VH3jNEFtCJaj7URTon3G7RpKhM8f3BeDUNSm55ts6rggKshVNFrUYnyCPnECZbMEwhN2dp9EWbDKFtu81bx",
  "key34": "4nhwtNvyvLokyjdLjbnEDAr1aSxFyxdxsfx1RnqZDmStxyg1vvsb7uZhHTvZDnegKTgsFEJabEfffAnk9xWoeSKo",
  "key35": "4XAroq5vXCPk63iYpbkp59je3Qu73S23rRmQb9f97Z8UXeTrdcErfQJCwwwcfTgCJwXxJedQ4ecVPyNVjYtH5KdC",
  "key36": "5SmaR7EY7dL8N4SzZnYDZ1pdixDehRBtL4Z8PetvUZR8dt1vBb8qu1mivGM4FDjR1uAWY2jMDYGRajhKwgLampqi",
  "key37": "2FhKwM1LfFhDjqp45eN48idTBDFRXf8YFUTpquZXox7DAJNrJ5ZvoD3mUpJTiqwLibVM1Z2PP41UYfu2UdpLAPiy",
  "key38": "2vnGBqrAvtwPZ6sRE9EbwJciTcTx7Qk7cuNAZmTjDwStJMjd7XnqC9i5wjw1YWXra5fhoqKD67o1W1SycohCJqXz",
  "key39": "5ZpHLys8YD8DmTg2NieWacArdQ34UkZGMDk8VLLy6bJZF71taiuJUCDtXbUH7zXYthdwuzZqRPuUmrR8b9A3rtZN",
  "key40": "9VrgWoAheWfqbJP81BsPcSihZkEWfQSDxdr2BMhWPXkcfWQZaNyfWoiwKKhkpWNbHcw4F1rQWMj2Gxs9CCUPoQo",
  "key41": "uneRmK3kCugCgY2mq9UVusDoq4NzjKHZsSCgESH5ANgvEyXAUMHwhGbAzJH7uZggU5Vb9m458KYtLK6x73PqSF4"
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
