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
    "2zArH4bsU49GwJpQDaCqtjgBbrmEMfX8PU7TwUvfyXL8SDHW2FiQPvpRPjek27CJ6XWJUPqsdBtWdZ2rf8YPXiFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nf7FaDvPR9Y8ncS6ewueJGipXYJ1TPPv5ZcSKjM8jLzkTuQkgvomXJhSLAYmt2nJxSFFekRCzyHSDy6MZPop8cD",
  "key1": "8sPVKy7Co8zjEdqWfXpVVjQfRJVNk9KQhMMRGwv7HDjcGDFNKFQsJ6ZssnVFVRg6BhLhCmuDT1AiLeCwofgFBMf",
  "key2": "2NHJg8bX9FuVZwAE8fzdC36Hms7ejPRtXwFQ68sw9QmMkTpFr6mA37gEDFbQFAiL6FiDh3BF8KuQyAsXoXrefsCp",
  "key3": "2Eb4fYXaq4U9u4dgAikfyGTcfb1A2GmbcUtvRtg4qtAJZ76HJZnHnGQvN5pATTLDjC2tkxNv7GaWg8ch9K2hgT3W",
  "key4": "45NW1R5w3VcLiQDUZSz7B7t5Z8jxmnke3cMDFpmKgZVeBM5cpUAXyMGZvZ4Hd7VMV25tCYB9fxM9PPVgnxSai3TC",
  "key5": "397WAgPQ6aRHYaNH8CEEHHPtjQj9Tb48HszbdWufojxAmSo24hN4HuQeo3SpYq9gFbG4rP6BMVzQMWLKtT7muJ6n",
  "key6": "5wioxeXL9vRA5wr4TqttsvJmnSuT5Pk3pyAzMewbXwJjGR3TYKmXmQLQxeC9TMR5KNCeTPiNTbGrRsYM7QwMPqxD",
  "key7": "5jfYVXqEw3fbNbQ3euYs1TMTRSFMpHv5MQiMLVz9XKsnmQD4K7WiKuF45ns7DCTRgz6oxroxRQryP2picSnMnnLd",
  "key8": "3cVGzmBkfNSWzeb128mS87G9JRXwQGpJMY9hnkxqGjtPS2R9z9Cz5yLWpPLaqTKv91PbZkf5ZQsyuxorZpRLNLF4",
  "key9": "rqjveJB7DKkW8iA4SfyTQCCZhkE5G2WTYFzb6cD1tSLbNF1KEGKEF7Jsoh8JzzstTjwJAtCp8vJvnxZkeejiqju",
  "key10": "35v5VXXKapBWuNsWPLyYWyrcfu4g6sBf5TTMyxd34ARuJBsGZKXMe96B9BJSf3tsHCwjUTTJFDBmiuJ7GMN1rK22",
  "key11": "4Xhzb2Pw6Vcn7srTiMdxcyUAsq5ooxHEafyveJqNG132xTutKFwg89ipcRrnPht6uMdcS94FmupneYoLpHd8fqeC",
  "key12": "4Ys3EqJdpMRh4o4egUsnjCoXwgvMLA2ekxZB8TcmdBzVYEDyEVWeFqjxTm6miW6EYT4kB6p6L1Mw2oZsYWmgPb4q",
  "key13": "4TT5AsCtaAQHoej6FYx79kBjwztHRN9T9BHqzCWdnosHf1FheWhAe53ZphzUxDkQGUnXvf7iKinZnfENaMoLwp6k",
  "key14": "52qNHUvVBA65oKpK4AkJYvFuBTmvQXpAJghSTj6znybdW9152XyJfPBBRceXGHTnCjF9vqtCtQ8ijhUU124uQZH1",
  "key15": "4TmRrbiNzkvDP4Nv7ovxQhFx8Lxufh1vFxP1Y6S6HM27UzXzHAv76d3fWCyfNvdyV1LtVzw73sVfhgcR2vJUDzTS",
  "key16": "2c5dqnZHQvG2b7gfm5HxRpQ1TC3iXZYpiRuoUUWiu9qpUXKE9pJwNQaMFFpP2wNSw2qh24JoUj4BYZYyn6Tj4CNQ",
  "key17": "389y3o37bLYSvXEB9b5HhTLMNWkEa54b9fjnpapBPRhoWinMnCpmJ8kxHejrm2zQbcd7KRFHzaYYYgQRozD1Fu7y",
  "key18": "4nLH2q2Lfa9vNNzNxL8s5iMLJBVPUyMS6mtH5Ah21cwuDYcmsupULMNerhwnUacwQhJc3Qj6h7wLAAY2awwHsGwi",
  "key19": "3JWWdrZKLVTsz6J5ZeunzdFbpcwkYxSukSQ5hX2CeXNa6sNvgqy3WzCgFoijCQChbqXwYsMxatbyHR82BGmpVVmD",
  "key20": "4K6vVabUBjhxeBhrdU3k4AYqmYqrAQZkronQACiySKAeB6XcJ2rFzC2eUsbND3NpwQYD8JyV43tFYgSqCbdAGxZa",
  "key21": "3MKKxReF7zTtSasA8FTYpsmphfJgXJGwutjyEiJgxTd4nyMMwZcnajwLUktfn5XRg8GvxvancZB6UxuvuQnWvCN6",
  "key22": "5DEzwvikragXR2jKBuzS8soCC3k2uh8iY3oxnqWwMi4Wumn1m2oa1NEhQ9t57KCQKiac3XqtG6n39A4a48Q9zfDJ",
  "key23": "bKMGFPM6Xsk8pUcmjiBwp3kPbTiSoRRD2utVosMto3ah5xYNL5DMfK4cpvSKPagjpUp5av1MGSmtueXx9mdZcQ6",
  "key24": "4UTE3AtNEjzSKGxUtRken8JcFcqfUi3z86WWrQeHuAqVvp3TT8JFA8S8jxkKZ6tH69RJAveSTK92Mh1kapUVJi4Y",
  "key25": "677DvmhbCnU283Dhv6wYUJM83QyHe8hdVppqaZs73XjCbsvYC3sr435tM8QxcEoUrXZjM7pXQY96GTbc8dThCmdz",
  "key26": "5LGUsMWMWtPKWt2FgMJ5hH31nc6GG3mv2v7Q7crXa7masbWTEGVCSfbKDqdJSiRrfd5aKMSNLPJFrDiLksBJsZ6n",
  "key27": "29YR6sozGLkY4AfnS2wy3BZ9eAiYN5zVTyD8jTmB8mWDWvZz81hbSHwn5eKZvQYP6A1pUDmtySDRyamctDUjgWWy",
  "key28": "NNf8njkMXVbsT94JLbXW3TiXWfWSXka7t7wwvdBk98Anvz9Eto7KGypunXYhwiUc9LT9NpjMCtbR1EFHg7UpB5A",
  "key29": "3XZ3FCKJ4Tgu8u19KLznFQzSBL4kfg5XApyLrMVG9kphtuwLhE3pe2Ts8GBCRWJ61HZFj8gvQaUcYFWni1DwiCNZ",
  "key30": "39ZSNA9kvMnYygthM6hhuYdbt9iibUd9ct59cuAtTG559piNqjkUc7zQcyZhvVqHxCyEmFeAvXuM7gHF1RXVb38L",
  "key31": "3grjbCeeWa9YqYEHcnkTVsN3dcEdn7wz5Yg6uSsBiXCZJ5a8hYzSbqH7JeY8v3JfLXV7PMCpHvZfzNrfXAv5S952",
  "key32": "gPMu6wkxFAFguvZiQrqapy8rdtopzUkAGFozaJ47MRkwhs2UfpdSPtWk1EBJ7SUivK4YwfuZ5EraPKPcwjudjPS",
  "key33": "67kxKi7m8zJxUxgkBVxUeX2tdeCxNWvBSki56tBLdBZC8jjXxFZB5vYxeN5W6iCQMJ3JSYH87geQFZT3DSgMdxnA",
  "key34": "4xZk9K43k4a8hkWC3HJJEmmXXKU9WKjVy1Sv6rPg6EiHduy1kd5VecPD4cWfNuYjZreBcqGxowvrxwFKyfZx8Jz8",
  "key35": "niWcBbLSBb2a4E2r4QcjcQ5cK9LfWB85XHbMwQz7AwjisaDbkhdTjnPFB6fUsDhfCyrNyJXUHVdAZnA4XFS87pZ",
  "key36": "4VhppBnxwZ7tVW8vq5nShtRczUqES8HQoUNMi8y5xXqopbTaaE13aReKNHjpXCXxvVmyUpDY831EySEjMXTzVVtU",
  "key37": "52GAEeuYy53RqwL58oFK4brX3Bs6LZJGpA5AQCAUANSY4G8XsgDwEPXVR6wPaiEztuYZqgwasriJLnxyTGbAu8a2",
  "key38": "eoDvkQQV4qfMeDM3DcXbWc9TeBkj7ruZZGDYmF8LPyK9kfMx5Lu5zgmEiCRCG9tU7nZPznEHZoHc5HJrnS9LYjc",
  "key39": "399RFPWzgxJEAyUouiGpz1kpA4FaavhauYk2mDVAghYcGftDLNGbhUBXUjGcMPtpRy11kwAyGdhT8wwV7sULc4ab",
  "key40": "2FzujVpo2waVbzYQFVofmXGaLUGDAn73mKPpfugfKt4ntxVFuCrAVDKpsH2tHdbfd2r86RiUNsmp17TyAL63o77G",
  "key41": "JJAcLuzE1RVEswR6LBhfY28uPWH1p39NULUvDRnPBTeHqjsLRSLU1qYsDx928biTujtePuyz5GHa9whHhn6YEtN",
  "key42": "5Kgssr8ZaBRZeqKvS2hfURbcZ5gF4p7LD4bLB3KMsewejKkdcx3TYiShURUURPbciAi77ExBXbXouYYLeNPNgbtg",
  "key43": "2PYiPvbRKbSbbaLSrBU96PtpjnnPkMtHrWozKaKHHQQ1nz3kkhvnp9L1ogAPDTpfdaCein7izxqLkNmUr2r2xGBw",
  "key44": "3qGwz4etdRsd1PdJLebcsZXRWSu3NSktmn49rvzfdE5zput6VY6cUWr6ySUENs3YzFyxdKkjz12twVAQQC4xvhFT",
  "key45": "3uwye6kbTSQPCmEGkoqvZJ8qnbzqqQjRnQaieKpfyySE3M2c5SVJkAxy3Uky77Q5ehhYqRVZSbzUGh8Uuhi1z7CT",
  "key46": "5fvVwCjErbH4DyQ7THE6QokzmHAHeqv9dvNothahmL1So4KfeNk4N6amXtg8nrFdUtqRQugT7ZHrtRy8r4RC2p8C",
  "key47": "5Z9CDfRtVxFavxj2sEaiXENLpzv5CDU8BJh2EJjFdo3RcvDjkE1dWcQN6LC6G6v9wCbCk78y9SJtk2boJRT4rPce",
  "key48": "561DdQ3ng1Kf2o1pXKCDnvYSUnSjV1gvhYma1GiG9TTaE2TC893qUU4ewMFN9NuHwk9kVzii5tLnex25nj9Q4f6L",
  "key49": "X85v1QWfPBxjQeD2shDP7db7dCe8SDBrS4mkpEdx4mG4uakKaf5atukHqjWmuuUAqmR4jk7WHbVr1372AdQruMW"
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
