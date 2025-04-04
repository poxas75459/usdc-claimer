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
    "uYuBW9QqmLduVoqkMvkop53433LzU1bARhJ7N483vat7eccVzSdYwvzcCc4rsA1jCQfCrZDQk9uDKZZaRrsZzKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34EhY4PzFtoCAifV64aMD6CS8AHDychXCxSYQ6zWKGzwi9mKeaKWCb4f8ogtM4NZ1s32mkPPPAEqkB9jPvercvbE",
  "key1": "4MkXXoZEzFjkUwaMMN12XFGyeuNRywTutTVxq99NJyoGf98hEgodyReQvd6GWJyidvfaPgZe3xfm9ciqw7YCUw3n",
  "key2": "46zMxo3vBhvZ1r8N9qTDfi2V5A8grLJqae8RPE2PWjDb3hfAmLeCbiLX2o8keJYNQYSNYCpQHK4ueMttuPDZW3kg",
  "key3": "4zKkegAq1AqiSrABd9cptrTetG3XAyr4K19vfowxJzdydep2wmzgzzsnhQYXxA7kvBnzZxMUfeXX4PkUxfM1gEf9",
  "key4": "4QfZ5rU1oWs4qpQZADTgRM1nstFu6zs5Fx8ncsBGxU2FFWPqenMhhw3zkFUEYuYeco5nVV32cbugTCFBojA9JzsM",
  "key5": "57qauagQ43BVisGM5jbD9E9VAJGdNbGEkt6XGt8k9fSFZVxQiYMv141YBKvQ2maHbKazDKwA8GZMYfc7cmNnz1Sk",
  "key6": "4BBCSNzuuxL6eDB6Pey6kFpxWY85eoGDarvhjau7iNAqWhDFYcubjx9b9LL5rfKpxbkydH3WMTvQumXm3bhxUUMp",
  "key7": "xRHdzechtJ1Cbq7T5FiGcg1w94kWsmicx2yeCMKfTJUgyTZkHXZTCHve9ABdXRBCUoQcFnANL9bB2k4hZSWSCnb",
  "key8": "5eMBvZf9FVQu5cYLKfiiuXw5bxs7pXLeT5ja132rFnGWUnKd17fq1ALi3VYsVi2RuqhUq1ywnZ1Zb2BsLT7t9NCT",
  "key9": "5dNdpTAc675rz51GSFDveuo13izKpbPQxxRahUbAUeePnMCxibsKKWc6MUTVWYgjz1MGweCgJf4UopsNwVYNm9xG",
  "key10": "2Lbq5QUCi9fjThWtwknwpyQn6Yzz51FdZqhnbwGuYJ1Xqx9w3CNdnfXTvYfZfiz26PUiXvvkKSJdZcRyALfdhgDH",
  "key11": "4rVje1M9QDLN34j9A2FDuZC4c2GLkSsokE44EKCT6PjtMJewxjnZogMcjykYfWSEFhvaxqvUMGALbCp5LsLZY2tb",
  "key12": "TEWucnwXCfsr72gkdayWCecLMgJcxsVpB2V5zAanWK1SKaFXMzjFFwQ1nsxszia5LhPHYJP9z9wN9HoCab52WGZ",
  "key13": "3PnN6EZmCeJzVJ41rwQh8gXGLMgtwJzREK3tzfM2dA6gkB6kEKMRQg6k6umDVveEtgphtbDoFa6qJgXGzngY5Rqm",
  "key14": "FsTyuCqHBVxHJoi4PaCdmrngu9aUGmut1cuXsqZ7EMw9Yg2Vqi9EdAthH6pLCpxiAQVLvyCp8GVW5PDK5oWvjWF",
  "key15": "4FXSRZNBEqtHTLrpeiMgJJ3PsYg1StK1QnvmmxcN6XU9JqPSuPQuUxgpCVt3tuaumtZ9riht6hV3wAoqr7xr8ejy",
  "key16": "sBTTJa8yJfZZZ4oS7nGTS76TymNHc9SNsZRpMsTBdMgEijdqfVgiv7a5osnqAFjdj4gAYAncgomc7wRqAeWYTUy",
  "key17": "2xmivAnvCRoDqXya9BT42A9MCVF5NU1Jg4HGzQh2KCqRN11yr7mFNwsr5TJyYNj2THRao45UJEQ2ffffJTfqfeU",
  "key18": "2NXbC11NBMXGCaiF1xufLyeU2EjRpWptcvvprvwZWNxFs4o3Gdezx2qoRggKk1vayYPsRUi8KyPVPvFGjySFScED",
  "key19": "4gq8Xve3pkiq7QQFKsEq3gCWy6SZRXUJRnaLzstvbBPsMj5DB2u9WDcb2Af7g38L7JnwPS1G9nHGLzw3AtVCJnVP",
  "key20": "3QmKjWkZvocrMXW2eqSCBb9Vwjw5Q8EsneZBxGLwHdiBWfRbdfe3eD5W2FadWdfQr6k83i9ARBpvEc2wQrAWdqkA",
  "key21": "4PN8xj6TGhvCNMyhouiQsHcnPv8LuGw4DLVJ3tAcVWDPynC8YtDuRmFcWH5xRVKbVXPgYN95iXGKVNZJjuyYMvdg",
  "key22": "4qXnMoUJF8miB6fH9TC5nSNfzm8nnHf3rugL59AfgV5DAa2rhWiYbMGxcuiKp16JzZeLgaazGBNuy7xmXkr7JUnx",
  "key23": "2jupQuW9oGdoA3paoMsj8SfQRXeQa2DPeDMtQWZ839JASFCX7hB9MXvwH91rrdMWMLSe5gGLmHQtJDvzvVpcTeWS",
  "key24": "59vLWtVXW7F8reQrTfjuXieaaLAza7U4ehv75xZoSG9tDx3SMdkEkYfFvTcdv1E55Q3ev8voDEG6C28tTKASfVH6",
  "key25": "3B1w5vPPMX6bRA9p74Lerz8FEGQQU5qYRwnJBYhokjSn96sGXy8WrdACbBxy4w7QLp2Ez56tXyvGwiqt88j3Esck",
  "key26": "2hKy1Eas7FjNADNibyCcrMSDr9ZdwydZ2tPPStTuRogtz9U31LPfpkyXyQqmsJdKUBTuNfmegLtjaLK5pseVwtTM",
  "key27": "4F6dZAbMKXTjC9ZZnJqA7bkUrgRvbziHRJ7nbq588BF3r7SmWUs4nqCKPsWc3SA4tHcqpSyK1WiwrKe69Fia8qzd",
  "key28": "3t6fMgUVGxvsXYArsRrTbTxgafvUwGcdw2sYjhh5QKNyBf1fUKQXrA5S2PPaZLgxWi7HmTaL1oh9XjJrnvFbyJY8",
  "key29": "cYw2Ezm6i6beJq19ZsLqu2PyVcBCRaAwvc8fCVovGZWNQFLYo5af6hMHUPrwZngfTfBBV3i6QUSp3uhWqHz7r1p",
  "key30": "4C5Etg52ruo7dZETYQJqsh1g99tZCz44tBU3LgrAk4BwAoPC6ivn32sWeHwnvaaKeCj14vB7XE7RR1BK5saf83ss",
  "key31": "29X59LV8rgJzqkQLmhE3EZruTcvjcFp9UbF8RQAyTN3UEz7KAcCRXQdh7jmwrvWKGmifRnt8oLaEisj84VLxxR3y",
  "key32": "XhXUPVq7Pjv3cZs1SBxDS8YnJ1vNYxbZHWGxux5qcPggAMwtCG2WRsERhr6aYHhpi6JFxaJ1Tt7Pe5BVzcKHUfs",
  "key33": "3KtFDMqKzALgkH19mgNVAygzRhfzj7b87AQh5uTkbr5hb2k4SCb7cu5gdCLqmeR2WdLZUicGSXW43JS9amSbY8px",
  "key34": "bB625pGW6gTKydgJMifCrWi4GRVxsdDNsW8bjH5KTZHuvnU2cmFF1XMSeynY6aivA9aSXtMjRcTQ2ASK7nTPcDM",
  "key35": "3t4Gr1bhGcnrBHARYPz5UZp93r28zW6LCGWnJe1hi89mZuvx4AyDLDeqN9QmewEwpC4HSoreKNbcaTVg8sWCDNm8",
  "key36": "67iRvFba7YVnkeDvwMLXwDquPAVLTz9NFUBBqnByb7qFzBZW5XUDnVBoyu6ibZmrQtq7XXBzjW7xrwAuHN2b6iq5",
  "key37": "BfAmdBd67hLfJXUvDhZoV8qQVg4Qj4AjX45wpmtG3BmDMwtrAd5HZbSQaCnDJBpj8aD5cd2FCmun4t6JzsSPjgN",
  "key38": "34u7i2LBBKoJdSWj4GsvmF3DhjFM9f46JWBGUAr3YDP1Ae79vvkSLru3hz8sob2MJWt7oprX8qCkJbFxPTE5xwK4",
  "key39": "jcBqubv8KbHyjiAJTTgTu6m46Azj5B9cPPJZvocnkUUKunPXDRq5SdQgmJqxp7rh6Pg6agku9GLDHLb3Ac6SDcd",
  "key40": "4NgCpa9cLCwZKK8BLrSteR2U7GfP445xLXwKEK7j5tc4vP7icYFA3wroHLN5ifL79vBux9fLUKdo2tuzEDxY1bF2",
  "key41": "44KXBW9AtppuJB7vRzryYeqR4f5zzpCR89nsssMVGjmoJVCv4MDCbD3RyHyT3D2h1d7Rro1kLMKnAdWzV9gixtYY",
  "key42": "5MtS6STDwuj1SNDfoNv8c73mLKwTJ9Lubx7VfXaAFQSBDBYGtAnEe6ECUKkkZgECcTyeCvWcPATLBzPZyQocpM4K",
  "key43": "5qikHpcUprL59RAvjodbivKXu6pqVKTS6aHVvMoMKWuW3D9RuL89HtomRhmuu2qrEJ5QGFzp1VeYDFdfNgmKNqH8",
  "key44": "22cSrtZSw33EmMxQs7Kc6wLTMTFjTyoTrUxsJHwmxurJcFXyK6Th177jy8ddN2Fd15YgqEdLXfAuSy4ADfC5MAUQ",
  "key45": "3Q5MBZPaK8SxHsisY67KrpCwJyYJvv1wQro7brNUp42GKiKtmpw1sZMy8bw2PxC5CRyTep95NiMXLrsxBvuZ4Vx5",
  "key46": "2BG21cHLqn26EpZgyiKLEYTJvVDKaebayo6Y5cyDAtr6B9VzzWgs4P8uVCoS3xAyNXPSWj7bz4g8nH3HywaVeMom",
  "key47": "YLTDad7N4P47NexMfRg8jsY2fXAvpXrikfxNcCiDoEutkKEP8VkYgZJ3UmPqonZznqrCeSWuQNKdST9hoDJF56Z",
  "key48": "4wB6cDaPhtxZ6FgJGjDRna8Rpd9YfCysjPkUrmnpNLrEjaw28CncUzpDCmjFpKoNCVmzJdGEmRhgypXb8oT9bPGL",
  "key49": "26zMjHRM9cB1pG1cKpVLKwn2ZnoUjpixbcH4YhBDBQVZrGtQJ6Q7x73Lqh5RHX1PQMmAkV1cv1QisH888tNJuP81"
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
