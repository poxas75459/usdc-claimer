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
    "vf8JnMGTgcRbdEzWMZnZ9KF8ikwdvgmGDR93nCtAbfAHZsz6po6oM8CNc97JTCKyEaP6N8NbdF6WrtkQnUDFkp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41F7rDyVYMQu9HKpenCkMm4dgMxZCR6yha9DAmKCdvx4qMkYEA9mRHdx9sTjJMAhDe3F6gRJ7dw5R8L9gfX5yhCK",
  "key1": "2vpgc1UtGa1oduLPxzu1tTpAhHAvUEyKvZzrXKha8UvgRmGQH4c7TQGnHE1jx6BXz8Zpyo3aF6erYHzApMvGbjt7",
  "key2": "5wtiphsj6yBS1ajVzxHpg58pHQwmpchUjfkxfZ5EdRmYwDpSvQfTPFod9mqMNL3Kk3zx7h9YKpNofcVneLbC3RJV",
  "key3": "Z24hfrX7otam6R8HyGFydtcqx3GGMbuR3TsqAbsgDkMLKaJ8V6pMfzatN4bWjjWLFtp5p5NrRVYdMB9B994pTrL",
  "key4": "51pWaJN7g7gVMtydW9XSntSo61rZdQ8XfWP2Wg3nqvQhiC1ab5gcBhSrpVFDpyqiNZJBpPcLg4nYHJyU5xATG4WR",
  "key5": "2P7hVWgBJXH6YwWRdcjGSznGABRxpFPcn8phor7RFJjWQpPK8DUCCjs2tLm53fUjjyrMVHAqf7K4ZXGsLmhkekxd",
  "key6": "3woKhdKosqwgFfqpQ1sFoHFEav593AD8u9KhfF8oAz8z83BcK1eY26iaubKKBSphQVrDB3ejKGYam6SQGmVG8LR7",
  "key7": "5kVNue144ZGf5R3tjAQpqEws9y3ApwAoC4irUgvmXuWzHKSSeu7S6gWuESna6yTAbUg3e3p41AAHJAcBb27rRdYc",
  "key8": "3t5izWcJAXo1CEfkcNySEaUKneAsqPQeere1hN8LEuHUEytNCELwatwzs7NzJAjXTMDb11u9T3k1ayJWgSbtufS3",
  "key9": "3R7WzL2aJz4KZawi3J8U7EqsoGs6nT645vmtpRNRsrci4vcjKzWeswqtWoq8NhvgoACtJXDrLNoPWYUfMGoYeizb",
  "key10": "37PdzyLVA4kGYif4mcZyb1AG55FdRYuohNmREohgZtDGgyU3emJF8gN9naV8QkE1xssturVzMCSshsnwajWADdz9",
  "key11": "2d6jeUFShVnWvKFQQwnaUuMGzM4ASGmmwbckqzEbY4Sn67p9TakYiT8vfTTcm19z31xmNR9p8anGJ6bco9kuzexq",
  "key12": "VtvpL7Lr6pGbaRQQxYjahDmXxPemYu5SvdmVpSZhfExei8SQ9raH6SNmMiCXE8WegV87urWmidLuYqfnK98NsrV",
  "key13": "54sD25r7hbty2h5mNx9Y4hTxDETzu9aTyyEkN9KwpUC2kibZnbULKzRp2rXHKnA5AHAXppUJPoApLiAe4y5ajMrM",
  "key14": "4MZ2kamSkMt4CLayqBdHuhSQPXSvnALFSaK1kKum4PE2FxdTvBhnRM9KmiCNyoguJSvqrB17wLCcmDz3by7REz4u",
  "key15": "5un1ZY2BNg9Fe8vcCEZq7A44Edh1wa8ouPtrBMCkTMdXTGJCNEqLPqQYpVsQ7QzXCvfv9cjPS9QdqvZ1KnnMBCut",
  "key16": "4izuMHz2ngUTD9hrvR9FTsjWai2TnP3YCs5GPT4Wodnm5A5syu8H9jSgN7BqSyUWCUARx85eMu4T4WF5yFuVDCJK",
  "key17": "5Rx6sWRQHCnNxkeRFh5TF2KrDQpcLghQapjc7N9zEJbLmkohNkjn6P5t7W2TjoFEn5BJgP2nkFHMffnfQsdE6TGQ",
  "key18": "2rxMtTbJoT5M2yh3ZanpsM12SjCzQSsf4jLMby3rmYSBC2yLmMCMws5SWbg1BBfkuUaTziSv7PkmpPTW4tdBJBvX",
  "key19": "2ZHCF2yoCKVgGKTLyK6L6i4FQSR9bBCyaz5Kdf5TLBrT64cz62ZDvWMNSSfknXpDF67L4N6LkZJpg4kntJujkocs",
  "key20": "2YaCMam9cy2JUuPytWgiZA1GWwSz3SydmEEw1jivhBjsfAphe1NCGn36cRYbUaGFDKECYVc7fYqqxFGraGAdV42Z",
  "key21": "4cjxVR8nstVqvVf4XvnWsZnDUkugX8E6RE8wf42DuESKXvFwqBmiiur9rk3ksFEVkR6AuKtkuYrLtQpsdv3n5yvk",
  "key22": "2FkzW39zeeW6XyZk1V7QWSn9gpJ5m3pGUeWZnJtVK1kP5gvioboafiaBpmuN7DA9uCqfR9oHoRaWHh2Vqc5qfrpa",
  "key23": "4VMYqyQAW5nUjKMV3Jc7QT64zDSh18wAx4czCgDXWMQnTn3a45yG9qTBQZ7u5DeY1mtkA7tGf3WfrwBmdayhPs7f",
  "key24": "bzddkiFA44aVFGptUYHykRTh79Vj81sggQDzFkLCTG9UyhZzii57QwQEXfDWADfqiTUR8kUygvmP4YJ6AjYFPnK",
  "key25": "4gMPRjBZ7D7nfyTsREvZ8hwC3Mx8qu8msTA1bZEvUf8omH6Se74UmpxTKAz7YXG5CLjCWVRyA8ejoxsDrZMus9jN",
  "key26": "3LVKyYeccX1Wh7FBS1sEa4ZjwWJnT3ZTGk2fotBtvHUbuqixMcKAP5hnfAFX6aB5auXaz1LqwmdmtuhQrAUQfyvj",
  "key27": "3mTbvqgpcLRNiue8c3ZiyPbkJkVB75UKaZXtMSSCQkXgEF4Wj5GMwWMqLnY5wWyY4SGnmt4GvcBo6RByLK7DDFUr",
  "key28": "23SccBREKDDyRzKTgFBcKfo73hRC3ZmysxN27vRJCQnVRJzGqSES6Xf7PmYjjfaDYvwJacp39mTmDGLBRYrX8Uni",
  "key29": "3ue92U2u8tkU4UfXcgBysGeS4K4cEALZCBdwDppiSadSziQyQCXqLkTCQZgh5QopbJwuaj8ZPbf5qEpDgiwun1xr",
  "key30": "3vKpUBHYNZ6tpYV4cYgZB6uPZak3yB3D6bUw5Mcaevrt4Wa6krxq6Fy7nXZmdHbp39zexrbgBR3kbXLbe4qHPfXw",
  "key31": "5swfo8M1eaX76whBegs6eXYVJ8VK4ZZg5pqZ4ppg5BPRcMvdoqThZDSoxYYV6psXs7hvEANcbWyTvd8FsK5YoNG1",
  "key32": "EarhtrFTkrRoJVdnuvaGbXDvzTC6dRQLDoGyngXUcrEDRVq7BtJYgJgJuwLJ6MGic46jCeFRDEZfD16Aajtgrrr",
  "key33": "3ArzekyMYPfYmbCRUgqdGvCq8L6NfFbt756ERNsAQe8fgJAGRwnrCTuwxDDVJVwBo7R268Co89Ra6uwPkeJpYPoe",
  "key34": "Wkc1nWtQrkySeEf7UYgxnKyi4wp244BhvRM4KRju2MUegesaRWijwAVKYWFE59qKmK7kR7avopTQa7wApmJPAiw",
  "key35": "31y72xshm3yaKw2eb7827q7h2JbZzoeJ8ZgB3814fJ8YaaJFvBDzVr3oZf9pgqq1C6wwxdWKXb7XYYCvmsK8rntN",
  "key36": "3nYYy645yddwMMgvKmpLoxt6obx3YQe6sihTE4S4LiAYX4QEjQXw4Fqz6Kjby99Uz1T6Esy8PNwhPEn94pLmtC6d",
  "key37": "EQxig81NWwfzHGC7kQXZjrCBA6aijxNe41jkZbjyipFTS2421DC6ybVnJrLhjQNkiLZXswTYXAC9CP9q9cX89EQ",
  "key38": "3oTywSzPiNdrK1SY8fCfkgWW7i4k2YniXC8m6ijFg9JhcjXNAL3NhPHgpfa3WTnrGhMYis66X828wDjFyBLQUvbi",
  "key39": "5KVAhbqW8SBviraDhE23VoeMjuEXfN2m6JLddbyUMsYNG3bs5vw3Qme8crCKFTamd4aXSgtq2bZtL6skHKN5qEqN",
  "key40": "5CG3vzfmXrKiwZNHF3owr4qtYkH13pCmcvdHmktwBAhtfuCAvNoK6sFcNqCZ6JCaQMyHhE8YoZpZQBrMcCbukX5e",
  "key41": "gQA2FTagEe1rhQUghRE6uBHZBTasKG9nCP6bcntKBGEBuVb4SL2he36TScmogC9RoQgkoaagQe92WqgSbp22p5b",
  "key42": "vo73QXoxgNwxU9gQ7RwHBdptafB6jAUW4KQS1LoBrxJMiXBKR9kqFZkAKt64N9AhAkrLm8TuVbPFfabSSz7z84X",
  "key43": "2KzXhzGwD668BR9NrdLkMubkyM2cgB8iVi9UufJJW1XVCbkdKcLFAM4sRnEhJTPR79nbwp9RYUPMeAgWLZNN51jg",
  "key44": "3PXZccbfXGcnAGr2r7gQfpgjAzP4UziwQFqPvwzxcriv3wzqudi6vAkUCGnYxTYCHKsnGdq4SUd4KuXEoHJ1X3uZ",
  "key45": "3ozZVe25ZQrKzPw4xUMyRhV15LV1sf9sgoAYNQxot2eaWm8EnXyebPNK1TapARwdJy8YzpzaSUdSiWVNTuVQpeCo",
  "key46": "27gpHaqyRH7R5fBAsQE9ZCw8ySTgiH8wwr1ZqTtFxoNQZjVWBQajsjjvbMxLH3Zkrt5Prhfa3GckuHuukorbxLU8"
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
