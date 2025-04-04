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
    "4hEstxLyC21VqNnBHcuqK3x5M2KXjNb3xssg2WKjRjTMzsUdfmzTYyaWEp8aRq5iu4mgTwxu4Gr8f46s8rzRPmJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3CJbAhHokiusWbk8dANzTnWGbYNvtHWu7L6nWHRupCRNxBmPb5Lw1McbM92DfYvvuZooF16d3L1PyiGipYDCtF",
  "key1": "3G4iH8N6M3GLMeemjWtMeVEtjBYQ786hBaTHFKvsSu6gGSBpSKVWGDP8tAqrg3foG3PJ7UtkTHQwsbmkQGkgVGug",
  "key2": "5cXUnksFtVaXXusiCBLedUZQ3zgqy1rYiFVpZpZCXcXjeJgc3o7RU3gw8uHBW3vW9NW76BTuwmtr5M9y5hVF8F2D",
  "key3": "2NEwSvczDqdCVivtPHDrjgG8KwNecDMuBnYU8S7zmESFd5A1DHGHnBRnB1Ge5GiRj4RR8yKviWjK1vfHd2Mv6kMz",
  "key4": "2Pd8PWmTppLAPF6LYNUrNhTJL9byE6MBBKs3gTvGwQJAvR6oepipJ2ZkVEbuXdwCKTuFdCtXPcKfCHTmPTxnPYEt",
  "key5": "4rSeSHbW7qS7oSs4SFfznej2fRVxxGfc6kc3AA2Z72geA8eNRkpYHEmn5MRgHKWKcUxg3gZ48huwEQ6F6brgi5K4",
  "key6": "5jfB3tDUtcQfyvhHZMgjmWEGkvgNTSudGFh931GZQFkjoDPcnoH1wHsmN9WP8ZwHS1nNAx7GENj4TPaQn7ZmCR9F",
  "key7": "67q2TXMPhHeJModf3LCWkarkp2Zih6qJXSANxKMqdySqQH9oGXo2DXW9zPcrmY2rZEj7bUTGvSRhnFS8HubaQJox",
  "key8": "3bWua2H1NwMX9qrMrg8ig9HzjLi7enh8GMojKARmwrdTE2qKdwwaP1cgNjqBhSkezYmfVfqhokPzwp2KiVm3X9rb",
  "key9": "37aMgXxCTuGj3bo6M5bEonpqjy9FQuDmchb4uqJKasqnKsGNQKaTWyEyvYfkUZGVRcuPzN1U5uZHUbtF94N3WcdW",
  "key10": "2SUzJ6EKkajV4JK2vD4hKv62gB9kcgoQxdviKU33LhJ7gZo1MmB4X8djgRyP8Mman4ESv3ih3Rnim5C9MkxW7kwQ",
  "key11": "4VqHP85b73exnLctNNFV9rHToaZdSzwBdzo7BK7cEjRUKGXZqbCk6n799qzTdXLfhNMtL2qgu2AbGLn3Xpo8DPLh",
  "key12": "D5z6hLZJ13MMeD4KtVqbUL1mcNA9ckTJWVng1Yy5rZXNrvL357xEBh7Pv2hjkTkTUKMXP2Fi584veDuhX6erL99",
  "key13": "xmVPQH9oE3whvtu3mMuV6EpHCrXT6TWUge5jNrgJm7ZzBokfMD4w2nw8coN5GK9yMhopubGt651XKoyzJtLdEaB",
  "key14": "3rou8hcsJdjmTU1LuQzbfmcoRgDf9q15YUw5KQCgemFVKMJCSZHfb9myj1HAwjUg27nLkqB4o8tUPjUJrZRPVu1C",
  "key15": "2kWNH9MRozAceTQLTyLyXqKwcS3kzg8tpxHPGg6CTogdZoBAGtgWpqkgpMsPG4pFPiuRyRRWGAoDYB5hidkEG5Cd",
  "key16": "3KTj9D8mvjXknFBjM3zDu4gmurt3MxQR92PnZ57DvqtLVSdaGjVpeEGq6K9BJTPyvJxUU6W2VAyJGZMLagdMc3Sk",
  "key17": "5FFiKz4tEYRwG8FNBFoNsGQhiBP3EapTzpVdSioCnRi6TGdUj47L6b8PunwPdQzdBMboUGdmwmMZhiW3QmiGDnvL",
  "key18": "39gzohvu8uKrbUh6aErfk6hQt9mQ8jXACrEPPgCjjKDMgce56JafZMfnTHPiBbhDTKX3R2kyVbTZcp7QmAWEeaJ",
  "key19": "4gotsJrjCsu9GjZuiLz9xJ2YQB9544RA1sgR4H33SkvpHNXMJ2kyf2fe2Tg7Y6gmPQJNXqF7fE7aH8R6U49v8ASA",
  "key20": "5iDK88dMtZyFd7t5GdVQ5MwXRTJKn1h6sbJ1TqmRjsgyxv7ms1NpoGfRSy8JWjgTHsSaohTr7GioYkuA9SCCXn7W",
  "key21": "3oDv6DvvP9h7RtuTxdymQKe1hYapVFpwC5rKVjaP1aaRy4fjypCaDWnB9zzC5viUrEwyumEps3bkMrd2XpPdBirJ",
  "key22": "2UW6NDhFhJQgX1qZ9zjcTvsWhXv4Fd36CEoTrUUPd225QacNfMZva8j5hPX2QDZx3SyNrUtYzZ2YnBskREjPbNJY",
  "key23": "EXw7sdm665dNjApXGYnrki2igZfCUT9WZBdNAeeucRXywqDdsxauH1EZDwBW9vU7w7vuoJzLKDCJYokU46znviw",
  "key24": "49ayx2ChnE2s5KVDvPwpsLBFQwzoWuTbThnPriNJr81XwP5B4YkRVB7JDtRhCHxD7Pr7rj2epatAQx5egKac5gmT",
  "key25": "5aXtg7oidYM2SsbxAYuJKc7tLZb4arXnHqvWTEyef6bHuqNUvGUUKbAeNSpoVcqfhTmwASEUaKLDygiW8rPE6fu9",
  "key26": "21CMpjzsrdxXynhFkeF3YrtCEWqqqWdj6ezYsiW1LLAqSyEphwsiyGr43K2nVSKsbWt5ebheq71sbiTvHvXsip8v",
  "key27": "2fmm5wyMJYaGgnggCSGd8EzyZYKP3et9rzk4saxVAgGHgQHdtJ7xTnUZw9sZZKX1nXfch7C1oF39vkCQQSnXEJoo",
  "key28": "5Dg1PZjp9ntJx73PWPcVdmvUWufsLzUrAek6hLGPw3Bd6ggkuyn4rrqiLL6kvycB8fuCaNwqHf4oHYKdEKHHeyuM",
  "key29": "EDmjpUko5pf4pgenRU9agpNcS4Pc54HBBkgprBpBLdp6687cuAsgi6e459QxK5p15zZffx1t8njNZHmrMtyiqra",
  "key30": "Cs4MVuVqQALFucpk7fQ92SV5RdsDRpuS4MUqm5n1KNJDoDguY9LyVBEYGTyKXLf4134pY1Fea6aRm4FLEMBhnny",
  "key31": "hgEiSVxHGgE1JhysinTr3uxddvTujuWZnXtkTtEQa9ouF3RfsVKMTZccb5xPK2WxgmUeZspEsF5RGPqVhJrZi4x",
  "key32": "5sEH9fFEU2YpNbhfoY7LWGuvCz2u8uouAuiPxkY4h7n2AEPmvTJ7yCbdGNcybjRosuJ98CUSUzmByJd25MJuxYFw",
  "key33": "67QXTQTPJwaa4XeaZntwdWaEjwoSQhLHpgvieztm3yHm5oDehihaiatfiqaBrtLK7yJGypQDwQjR1muuq3WfDu49",
  "key34": "4PQSgsG3iPAoehsGgntvPhuyCNeRpMZFwvFXhgpx6DGtx9E5bFGtib36p7X1vfKYWUFrrDDXCsR4YLSYgJ84F3in",
  "key35": "3dyJG8tBqabnbBEStcDvoNDz5Z7xTyAvSZaDuyfbX6x7hXzcsnUEgRFX4V86qbe6uNLReYEjRPSDogtC5qK3SHw8",
  "key36": "58tHcCgZFowHwhSNTHQtHwDUnpLbzZmDeZFYAAH36rK4HVXitscYRopdNggaByDBd9dDpXdbXoGMiQZLkrY8MhQK",
  "key37": "yq8CJb1RDe6iGtyjwmyX46B9jgvKCVVM2GJs5AdAFqMnc3KPx33xzzq2tpf4BpuRd91kauSw9aFgRm2oZEJQBDC",
  "key38": "5ArRHHvFFEfJLr8AhG8Npg4a6ZMGra7JfAAt9p7g8K2QGvCswbzt3fWD1Vnnw1ygFppp3eA4n47yukbfJy3f4ZiN",
  "key39": "4B9ZSGHcqDgmVMzriTW5c8iSsKB5oNS4dgA7jS67QNt3rsRRN9gQJJDLroCFUZdJSRxRgMeks7SvL31fVrTzvCTN",
  "key40": "5V2Nd8X8EnRQWP8uSbhGSNji5VXfRcxSs4ktaJTAbB2GMQvncbZiB5JCAZcR9cPgzKcVJ4g9wHRfL4sJ887CzmfE",
  "key41": "3VFiRLZ6NQEbYtxWE2JxUcDbNzDymi1VqVpSjF3Ypkc4zpq9aAHKHAoW5quBf5xNyGCu2k7TepYzKWBv9jDMv22J",
  "key42": "58i8yE2QMBymoxH7ccthPgMP5RAgw7jqxHnTKfNb8ABBBjDcueLjeRa7Nb1mF5eRZ9kHrxvAWGCTAtHx5oN9sGqY",
  "key43": "feDkNRWsNk98xx8ZMrhRAqicdqYUFtexy8gM4g4Hm9nvSuNXPLPwcdXuUC6SiBzFCoja6RvA6NJgPjGFueaL3xv",
  "key44": "4BcjDNjuWaMrPLs1CtwnMe5Q3s29pZHSxMywRggG5xkeLv3t32trdjR56ANsgJ3u9bNbJougGVfSNVhCC5C6Y3DM",
  "key45": "5ygQE8LzvUoHJQ4yfKo4zdWQ13on4vxbbrJtPzaaJEg5fN8r2iF8YsNy2TvZPb4Rm9LxDykFoCkztXkPxv2yUBov",
  "key46": "5SA8M1z89Xidu4CF9up1BpQhw12hv9La2vY4PppmcUyAPiUmcHqT7cVRn9NeryKA1HDPbfpB42kswYniNm2UCdMT",
  "key47": "4TSub9fxmUT2ormcmtrT6yAekVrGKRGjKqJMkKmQgvpLiFrozdGf2QDzaufbdg4pAZ4ThfWqTaJZq1uNBNfEufXq",
  "key48": "JiBSMNq1SAvjbNT3XmL9948C8KedypnFLJZSfrZfLR4j9yjGPZj2eTvSqLBcV2ah5BYskRx8uktsLBZsAFs7eVD"
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
