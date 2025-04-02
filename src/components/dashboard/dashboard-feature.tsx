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
    "5XyQJ5UHDWgQkyoomxbNbwMnGsDAQmMjsrJDb3MW46AgdGqxxRgVretQwmYuLZiPTxHBfqV5pokRtvxpifnTBoe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cx8wmM7rtfgh8W3B3hAJuhrJdBon3mUYSRrmhUphuPRVzhbFKGt8oyWhq2J19yfNPdi9NdGoozAcRQDTNimTAkC",
  "key1": "4CNBGYxxx6tYZyMXKcmkFdB9vv1pjZYfW5LzYXQeXRiX86HWnewY7TEwZx2YrgSNYrJ4DDSnyZsnS7rbGSqxXAqD",
  "key2": "2vCuxisapd7qFRf4BuAxobksKF3AdaNSWranTgNYcSuhMy3Byz75HGy5HiYgaXorL1VD6jieCsYE6PKiaht57i8T",
  "key3": "2qYY9hmZBLNvePiyJjc9ecYL5D69zF4z5GqR4vKU6ZsRN9Te9DuRkXsRv4Bpbkp3CTUrzQk3QeKkqbVu6vBVE8TN",
  "key4": "5kLX3ZxYaEk9vnNEkGaggMuswhjaWci9s98rCXnSV54oS1XxMgcNU9MKpSGzKXGpTfeFexxdbhzFW1PBsUfVKDZ",
  "key5": "36ZfhVDwyHdTEwt2HF4peBjxwckHBkTSPSG2RGPRp9nu3MY1mRWSMSyWSDGHXMoYw8TFN6rwZYQak2YzdrpruN5s",
  "key6": "5PaJECzNBKo5Sr9wgZMnSvnbrDaMphwXDe9d4KzgNDCdUWttqXAWZwpxnvZVhD1i19s5zD3gPourpBqDLbY9dDKt",
  "key7": "3NQbna72c3yp3F6EL31MX593hFuSTreJCudD4cUHxEat1Zg5D2Bg449CJcSJpiNj8iKMnYoJ14rcP4T2FMNEDfaB",
  "key8": "5xKWkJMF7mEeWX9tbhkXomnBij3seZUa5WUoD3iFtqSV25PRXRTtYhytM49byLesGYrTF8kfUMdPUuj2fAMs3XQh",
  "key9": "2AizBYhVHFBvNVkbBjGeaqRgjuq1wUdLJRGNYqeqFA8i99rqy4fyvP8JcsvNFk85QphLnG1JCnpSVsrcU3xP2mrG",
  "key10": "24zwgLjVGGuceAQtPhabUWdLeJgYpxeDRviRePWkQyHjy6MYorFHunemTePxMJVMKXt1TJajfBTMXGNEmziua5Rn",
  "key11": "5KgGLhnLNYefCGGButRJohBFnpCkmwPPC4fcGdJQ8Y18owP1sC19QLVQj9NJBB71HXmqmUPe5GmETHHuDyPJzf14",
  "key12": "65QSYRkcTM9tnt4Qok6bo9zsDHA8T3jAKupq1DsvuMZ3mbKk54R6X17uw2cWAtGpWpUxtqxPeg735Tbo4jSwKqnA",
  "key13": "2z2XGhhDFFYraL1UMNHY5vpbawNyk261qqNwguyBHECUeTsCUy8MCDQ9riQSCPgFCsJNtgsHjZCQ8H8UiVsBRFTN",
  "key14": "YHcB8zyWrMkv6XfyNJjtvb8HXH2dxTFroJgva1k4pg5CRwUzfrtMrAaX2wzgjcfDh233Tr2MNUAapTyqLinsocL",
  "key15": "oN3xCZLKFa2wBptNUp9Koc472aoAW7JtRLZZHmoRyA6Ae9g7KLED87TGrnBUhnHhmnLW76DUcd9T6GJVnFD8Ytk",
  "key16": "52GBQSdGWDKYtbgC81wSthvByqJkw71NENPWFuevGxrvW8zJhZ5yR5B7HtPwz5anyoJu3bZVxpLUb16cPLgf4nNi",
  "key17": "5twQmRPZMjYKSUaF6jqLkhprEhHE7PreQyuYng4xkubUYs5o3jiDbWiCGbWEWrTSH1uRYs35wvuc8XxPta34BBDe",
  "key18": "24qDmP5E65hT25ThxdarqJ47ns4kMSPWg2MJZUPHRX5GspSFzZH71ChkaKqmuyCBgWuuPDmNgRXCsPkH6umAn8ow",
  "key19": "3QXXFCSFuknunyqxHQkcUAr4zGRLEuR5c7D5z6rhF94ZvhNwgiJ3SPEavkHUeyJvf8pYi85M2uJcwU6G454W9xkw",
  "key20": "5JAPB5PVeyCB4fiCit3JoRRvLW3nsqZPcsTUyxxiQ21xCSMCqKbRyvkYPYphGcgAa6qeMEru5JGeHW5RukvEQbZY",
  "key21": "25eovkjLdEWtpFLUoc5CE84tUwXBZvirGnmUnUrQfda9MNixBacSk2FKnVi2Muyb91tvyUXz6BBXJVdvUQ9ji3xm",
  "key22": "2osfDBJ9TgvSLemQ9CTkx5SG9G87C2eYW3VH5YuVFykzbojK1UaqVZXMiSQPTmzW7rBiwyVVZpdJdCRk9jfZ9Psu",
  "key23": "4qAea62wEmzwphmWPabxtK5wgBhstrTwHM1AgqZfuUciaSAM4GsShxvvbS6KL8VVkAsDhc4NiFW6HQnWV6LpDdnE",
  "key24": "4UBxGhLrARZQGn4FMqgyWMgaPWCHh2MU6meYa64RtU9nRA18ZgUAzcKGNVGdnz4MeyBVtGoWTzTNtWmURaKLBdzz",
  "key25": "5oBChYPDnuRoWJEEbZwvthhzBaCz3ThhKX6NJh7AsH2ogKYZvLVosHotpans8GBvUzKAzY8uEham1yNzTE3FZV12",
  "key26": "5eEVhsXLZuEyB2AEqTavJCdGQRGV5WmRxi67S59R4cStQn97fHAUZYCRnGbJsPEUbYJ9TTZNFLr1JbA1bGQuYPw3",
  "key27": "3xsFCScYtpUavm8DySyswCXjcbe1LnA1ncc2TPgdqXsSQ2SHUo44PKVNvBJg6mAm9sUFBSFq4F4DQ9hE9CJy7yeu",
  "key28": "4bdzgSV5SaSG48HcdbChQcjym8r2X8NkhRUY2zhXMswEnMkL4269y9BeexVc1hoEKyPJJGzLQ9ZWheWTkacJsR8m",
  "key29": "3D7roLatQG1BP75PRFBRNQHYRxchPyjbchQULEN6G2YThZ7v8qUUb63xNGDnPanNU4GWR5ZwUqepxCtNrPr1rbx8",
  "key30": "3FqnKcrV5BWB82YF3jRCLKYHpfKUAUQRyGG42p4uWLZ5tRWxfFE1XbD83qA7QCTq9ewGdubcyqYmk1nENrKXGguN",
  "key31": "5agf3ohfbTPaFsbgqrkE9sxSk6DDWYJKwMo6zDvbpgDicAzMeGgcK4J42XLMAra9f75ZocHVSGCNP4iSqz9RcR1Z",
  "key32": "2NAMjgbkoGrZEop1nJQ2xGUgmBoWyairemdY2sv5UDtU3EU4F5rTGJ8etVECKMjRqW1SR33TzRenAbgRfqiJKKJr",
  "key33": "2bitU4QH2vmxHwaAsJc1Y8XxUgFcPDcGaivRkpuMQ6L5NXgmKG7HYQgdWmJjY3Sg4mxKNVPopjXdFc1BR3ZsDgrX",
  "key34": "4gyyeJAFVSjyGvz1tqBTUUxHK5Y9GQscFEBHVXJRrPEWkdHasVVYoj1LPwQbMYrD3qDudJbUux7DoNbbsw1brfa6",
  "key35": "4WGxfkp9YDFPS8iemxKprD8A27rQD9Vz4ci6sVJCnDtURVHyMNqy8MnGSSAwy2gaJr3QX64QFaPxTQqvTJmjBBh8",
  "key36": "FfvSwek9MzQ41k1n26EDeJJig13Rzkt6sBGgsJt7jNK4XRRn2ULP2mXjPdPfS54WDXUwW1bccfBqy8jdBaKHXkN",
  "key37": "5kvfkdY17yy2ujqcLyeXdhokmrfcACMzc3jV48ias8Wo3TB3f3MKyULiqeV1BbJd4ekurqiQqGpg8517437KAZdR",
  "key38": "3m48wPRHbPTUpovJst9aiVY2CKJczwDdgfMwybAGg5mL4jE4bGpN2uEYKXC8Gtwct8oEegA1kyCxfSC8uzJUWjqY",
  "key39": "2vKVJghEnS85E7QmAKwtEbo5y4mGM1JqoyeQaDX76b6Tcbj5Vrkr4SbTHB6g7eVdBxUsij3u33jKXZM8Vi29dNZ5",
  "key40": "4HNT73wviZqqdHjXJp3YAgpPdTCCc6PQMV69SrQGMb9z4JZunHksvkF48Hsv6yhfCTKRNLvgdhJ3qC3P1wtAXoJ3",
  "key41": "3om6hWX4qZEpVh4c3P4yrWwbebzYDWVbvSCr9BzqnvKezeeXoUZpZrWaPL8m6ZTqxGwqJE9NxkuYTwibzFFn8WXm",
  "key42": "5eJs13g8S5ucrmCWNbdjaiKqTskGNZW52uBjRFGfY914TRxdX2khxX7MUY2LbHH1wZs8q3HLVFiQh8XHZ8gEkYKP",
  "key43": "rq7NyCi7nE983ddstQoygVrQmMe3WQ7dq3Kk9oAXNC8M2i5WDooBVv6MtLiiVf4pnw7aLfbBzKfQkhGc54esUoa"
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
