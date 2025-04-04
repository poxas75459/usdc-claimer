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
    "tVErHCQ62LFrEmVByhK2F6zzhpqXYFrqjswXpajC9jahjGYx3ZNk2NoW3TirK3jsqBA5BgxTfsgvTTJVKmwuBVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oUJENjYZBdS4m8XeCXo6ian1xbezikZKxi6ZthPFp7L5LNgn4yVWXz7CK3YkdHTmY34XzpNCHXbpTicfCeYtwiW",
  "key1": "46QVWj6EcV9h7jjuGnBh9yiSjWBnSaD8YXbnRHAbxpjd1oVL62ZPHApiDNgFQGzfkdPFtpMBhtLpucFk6RqiYp4W",
  "key2": "4JAB7X5EotrwLNcRHeQoqw1DgGQPnGnMpBxuWFrYDzcdvEwoaEAPraJMjm64a458ioRnYwURG6qvcXTtcewQTDGx",
  "key3": "5bsEbutnDNuNVw492iX5v3TfcqHoMWaGRA7pejyYfCdYzfKxTkswqvfEsT3ykPsd8QQC1c4ZCJktmjhzMj5km32s",
  "key4": "5ifZMEUuEmX7Ydd1zWUgKwPLSGy5U4vY3p7sMLemfh7YDGQkhafuoDVVENJb1RSoerpDiq2n47A1mNJRsUR4o3Np",
  "key5": "6Z3R8F2etEYrHSHSqqbF531nsTtV6VFdyqPDu5v8RXBvjAr3RRVngWNtWKKCLxTdMNea3QjNHn7sv2WxL6gsg7K",
  "key6": "484HvJvVEg9dBh3ECta9J3BFhX3P6462RY6mbDn5aYmzLDPQSqV9yFpzoSs4jBmHViaxF3SFWyPAwcoRt1zQk1d2",
  "key7": "3R6JS4Bf3RCiZ8vnP6Sj1GMU4qq7YjAEMojpEh9vCvy1taEkoQ4RkoqYhM4rvTW2vJhBUKjFb6A5THRdzPAopFzP",
  "key8": "Tq21tT7LWjPG8iSCeZE72bHuhKiPVKzm2CtHC9d1M6tgEoTsa5vGtdTWqfvskCaGo51JJQgPaXoLg7miaDQcVwj",
  "key9": "2pX8qXW5xvkxL4PW9LHvgG9bMLFYLAH3v2XTjwJW96EPSQ5ensJ71BfDxZSRF9vr1gtsu62mqmVyr3wAbBah82vE",
  "key10": "2vaDkKdBBFhcXxHcFwatgurUvL9pKJMmx8gdNNKBd4YxKtNoCPzRhC66weFRQYjSuhDuZtji552xpXL2cM7WMz9P",
  "key11": "2Q46vRpXZUUUkNYZVyt31vHV91VrHZuvjnPjnEbeRRs1Z7EpdsfMSp5RxTW79KatKKQs9qfQMj4T1Eu1GSiQeQGa",
  "key12": "4C9XrNM2AbQahNViMgCTyNiPm2bGTz6o956KDKk2uAkfqC2xADXTEqGkPBMqf2mZN8VbocMuEewjDEnpGUr1961F",
  "key13": "2idkCVAzxnj6zaKK2pq9fSVSChHXuWfEXnSrbNC9ZXqx6bGvK4ceJ5NkpJUqFvQi6w8UL1wYQUZD8XA5RpHQaSVS",
  "key14": "3adaxtHjzZgWKN84LGHR3pQ46TKyvASncW6sqoUhf2g59JhnE5QTV5EpQ4ijedCBH8DsQfCAJvNc92pfvv81yAqh",
  "key15": "4xuHhKEep1227VAKrppb355JLtPSiG7vCCTR46L7REg3pPcTMjCK1bwwjxzx1L1cp2E725WxizZwb1DLCex5yFgL",
  "key16": "HkmMAKW2kUbm2KUTKXPDhzZbeRYxA7zNZTexTs73UsvSBJqW9oNTVJnxv2xEUYVYDA3fmttpDgUvpwmFh4hWNaa",
  "key17": "4j12KRRzmyNgk5fq7CbFRbXSMzu5u4b7zrAzQDvkfmeKicwwQvUZg9aPdx1XtDqQiPR5gCDsc3n6ho1FoWKkwNgb",
  "key18": "2cQHx3bTKFgYEJ4s4UQrHK3iWWWGD6oMPYWaNPJzUtV83Stmu2fKJNFhKsLERABx1kxFmDdbMCnogphb5kC9Qpiu",
  "key19": "57UpJoAqWF8RPDRXmbTGhd1XFHCNMy1QsqwQjsMEyb6CVn9kWoCaFBrYoKuzNkkHDPtuiNAi2zKhBjRP9Mm4McRT",
  "key20": "sYe1rhJaanzMv447suy6qvzsEd7GQR9KSHYEoCriRiT3chxRwxz3EiqEkevpKuMi7fTR2qKKg52Z8CCjK2tsHvJ",
  "key21": "3FGEnCSznwMvbZiKrBo57QVEBBnMAT5n2mCzDDyBjGhXXSDCUjKJXijSu9FfPUkUoR1EYfGHwyZ1pTGga6rSGN36",
  "key22": "3jitTcbHCsckMxBhBTn2eKcWrNt2M2bXvTfnNBQmFyiKuS7u3gJm3NtZHiU4BNik3DBv2Q9tWzP8JHFEStuGmBGE",
  "key23": "66rvpWaAijJzzDaHdHYBqB7UK1h8Xis47WTgkvscHLdJqABCUYkeJNwX8nf3RYFqWMyZ8kRhw96UFDNK8Yu3DJDC",
  "key24": "3mK1Pjt1DkFzkZBZdcvsFoeNydGoCjHn7ouWV7DEFUmR2BadqJW2bQ3UMgzVTjsWxsffR6c3m7PFBegThFz8AhR4",
  "key25": "5JhZwmX5gAzSTJLszHqy3pcnSTLcQkY6n3BqDnbsay2hfarkKc2Q294Yp6vES4gFdmcWH1jzUQEMELydEjyeKn8W",
  "key26": "4pUFcWchQn2UmbvQDmrMtSvKJS7TrUVPiteKQXFsraAWYdUuTULHAQJVza7zLHNBwH4rUkbepX6vKxGySQpG7dEd",
  "key27": "pbKP4YFCFVSxcgkR2b5cpTZW9CYzbfYzebekWqY77BvFWzvqpT2VNE1XyNmufgZXyF8BzSBd9egRNqkwJz3XbNV",
  "key28": "3kn7dW2R2AbAQhYUkx4QWAxbAkYSDoF78YnfBRYdWZcu88RsxphdHTDMPwxLN2BmkcC38XUhYBzqXex4CJ1W5r4w",
  "key29": "5EVC1tp3ZrBotbk5gPQEAVYG6Q4QnZTBHKQL46zuB49wi3WGuTLN2QbC2VYZoNqFaxxRwSZnNPqQ9odWaohgR5jh",
  "key30": "2fh5Rx6qTAV7GPSn8EsWyDh3bNYgiaaGmmhyxASYbwgMZ9yAhB7h4jWMaThuCHwsrpPnVEv31T7QwvN3mEhdn1LH",
  "key31": "3EcU6Cg8VTr7rL2et1tx2ATLPjtRzuFk86h5T5nv34vDaAkx3f8Dqf5ke3AWd1PNzmzHGodJmZf4Ao4ac3Pj3G1M",
  "key32": "626oRDrFynqvhnmxMLTZ5WZubQ3G7FEdPNDvibUkiEZUtgvfMsT65EXsFCV7fMzFGEv3DgfwfH1VvAKBdEQGhSwy",
  "key33": "2rxBMS4kzBK3tY5W949fqcPx9JgGJerh8G8GsMqXyPDhwKnrhN8rk2Y1f31WBmS32F2jALVzzBYwxNifM8ZzbLqh",
  "key34": "24PhPruzMaiTQDaf2r6PV6YRT6bj12FFCTPRH2ZJeUDfzfd56ipdnzzykPQKhKESgAvr9LL4Sebh3V7LoYnVwJjt",
  "key35": "3YBo2enuCmdi8EgK9UCTurvqmUh55nq7E1LQVQE6Msf2X5coEpxfy9A9p9n3Ax1DhsXu8vL9UBFgG8xZ3yBb3vsG",
  "key36": "4BKqzsmbHZYCsdxZwCyMgo7PpunkGz7KM1VgDUn1nqFm9ajnuHEruk6XJ5Hk2SYaxpxCY4b8t8j5dK48atkDyZkR",
  "key37": "3UZA2YBu35G1vdyUUU5RRySy2aMTwA3BL7ts5j7DP5audwyojJeXRS27oAUU8bEogW44oY8nGJvTVSP5boUEks6M",
  "key38": "4mEf4gQAmPSwSgUEWhyJdNeGKPmihugUL1Lz18LKn1K84Xx3T72Fgmrv8S7CHo11xut1oXvC1ytgiHgBHGedm1WG",
  "key39": "39xsmkLRN2r1sq6Kty93n8S1iha9eCEjGFg1MusjsBmNDHw1QdDBsmZX8eDyYYVbWQXPnKUdDHf21bLXeXurBhrq",
  "key40": "4ie399tYbxjMqysMhAfcrLXBf4hnHyGcaBwvpjRj1aBcqbLmoWcgkPQcpEcjZ3Y7TwiWjGo4TGpb9J8uGErbsjWd",
  "key41": "37h8HLMs2uRtV6mmY9yr57nQnzdbUGM25aRxCVxswPiYMocUESJ55Dn46cQFES9WxC57r4HdrgFxiV6JAQ4rijim",
  "key42": "2ToZ8P6bN6AFnhSuN5smRh8LywGADyC1xrgkySc2uU3c8t7mftJQoDWXEJrhb4GgaTwTUdQv9WoamdBQhViktnw4"
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
