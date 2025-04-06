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
    "53vaC4DUKi5uwSrR9dj1YkEgBURMX2NhxbFKNxheFywXUNBTLNHdjDn2yb7xRsE4gRHnUTuSjNAkcttYEPxeicz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VST88NoYF4cp3Wvjmwix5rD3hiEJzanKeiN1ZJxssM1LWwXdRyQ29MCxiH3PZtniGqjF2jtJmy6NuPK3vWn5XMq",
  "key1": "2pdWUHTXwabmQQ32Pmbnrj9CtG6dtcik58kQRpFUswjesu5JHQePGK1QchQibR3yMv5QJe8Pnr7Lt7iwyHFynMDh",
  "key2": "4tjnmHW7HMayXZY2dvwJzWuvEpoEYinBEBr4W1Bfbj1cRbFotGk47o6wh782HBtEBtS8eALPjiTWSKgZojEJn6F9",
  "key3": "4empHyHQHFs7iqCnbFJSz8FJLw4U7TCSNCnseBVsWM951yBaBMGCukSTMhubZ5Fjx3uf98a8PCxN52zF46REKw3U",
  "key4": "3WyM7Z34JPEnTpsqPBXGZ4Mz2JhDWTA84zD8Ar8RjzVMetw9jMMjNu8BuuNDnyurTN1dDgYYtABMTUETxczMJje4",
  "key5": "3EaQsjycQLHUzCniNvXyDaiVvUdk7dbUBPGmbniGBoL6UBkagmALrEsooGvwFMkgLc7mCrk8LRaGy2FyoetAehPy",
  "key6": "64pyjTGFtmyEj9X7qD9D5xeywL5GiXCcF2VYdPQp2HMKsML2a5ETiaXdTKnLbtopyZJvARqNsDRvg1bPowqeF7gb",
  "key7": "443bjpY6uZtU8C7Wynephu8xHNgkHUdU9JgccRsaDBGCBPxHrN2wtiUGAMw54UeAcwsJZSjhDxzG2MNBQPHU9Z2K",
  "key8": "3HMoMxpoGYfDUdJ8DDHgevCDMurmpdovh9XyfoHQD3dRFi6pd8X1S4VWaiY7jpbrDhC7a944KrhJd9mMmp7VdFfM",
  "key9": "4CMoKJdLMB9AHMx96v18KmoXMtgFVnNoExSdVnaTwYqNNpLMaqhm7buNYcopRXSt7vR4zqkgBvRNBzqnM7GGP4y5",
  "key10": "3436GkqECPDReFMY7gqv1qeRABaUeixjSM65qxg5UudRkYnznyuyGfecKSbGz2yNyKQbePZ89UNUS9tg2wND2Mfj",
  "key11": "5yH4zUGFXwYj2WPSnMM3Hp7MjNpLw6drEnZ3tNtLRUXUGEpbpH1RK1dFqhFLqtHBSYC3vdoh5GmSya8Ge6Po2wUL",
  "key12": "5nbtK6usFbH3aLtGMM85uSzpZD73hNHWYUdhfpLYwZc92SVJ4G8m3gQe3NLcZ6563v7YLVAWuTCEgBZCCm1Wq74K",
  "key13": "3faXAqrVZ4bsot3x759UJ3mZELKstrBvrCFBE8KRA8Mec2mQRSmHDFg4pt2coGxa6XzsQUecoB8r3JrhnzB4Nvey",
  "key14": "4oF6v2azPJ9rSyv1BXsHdfP5TJrfscanrGvBGZTDQmcaSDU3A4DZf2wFoNbwHmAp58YxC39PHCdqEENeHXcsGBEK",
  "key15": "5KbpLVsgvdUHjqojrUJSTj9rTUoyknrSZUzSiBbaegWNNFGK4VeZXkgYvTmzw6tmhRyFF6R1dBfLfrtTVdggQzZn",
  "key16": "2UsuMKYASJZuLfMqam8PNVFZ3Sdsba7JpAZCywPPPaLzNq6mSzUeJCbWu7qeJCLEJxUrdAthsCdeRuQRGEyAMXgX",
  "key17": "5hAZ2JB4npYy11BihiNh4XhyP1FufqnsGmWCMbeESzQXWsxD6hL6WXiqtNBnz22s4b7HecqHPgCWWtwxSN6yv3Rh",
  "key18": "EbdTSqKKcpPP3cJnjZgjUSAqf2WfxnHQdTRAkBFpmtAbPSH8J9XwUQpFqvy9YcFMUkquXsAKcer7k3CHo5FgQds",
  "key19": "4qkjcNDkhAgEv83V2Xr8Uekw9VqrLCmTNhbgpCQgK8nFkC31fiPc8uPRQ3JfoaviXU8eQKsJ2MKDgS3JRJHR8pDf",
  "key20": "48uRAjWRH4nKv87jZnrocYtvtp2WAbettX13EABwjHbAS5GN717NyaSPR2vScLjpA2K7oQkL8ZGdcarEMgeybhZ",
  "key21": "n16GPfJshCw4Wweit2WzZK8hsha3Gri573owGXXGjRhHH2mbJBy1qaA1W37K5VsCu7xSVF2ebQM7aF96uiU57gt",
  "key22": "3mDgaZUWZF8h1SVeB3odPeKD7reyuCQFvTDYbf1QQkfqKkXTKaoYqyWPCUHWLzFK3TVs7BjVV7fMnnFm2334cnSU",
  "key23": "2MzPD51SzBtE8YgNSzmfLKYEaaZTDoSK273CDcSk4PVxyA6gNPGqowBdtPxHM37wQjcDtkoLaTmJoeLrV8Jzbh3y",
  "key24": "wgKg6QNEEQgGS9eprDWHiweEq8egZ2Qga3Epjkq78ycCAYYLmpdKudAP24eBwN5CBtx361hLJAkAPEjrVPzwvvv",
  "key25": "3foPMD3LGNwm5UiKH328u1jfeLWsjDSRAPAJjfhoksC8fq5zmq1xHioEu69Tfw2Sty5UepyRDoY2zzFZvPzQwjie",
  "key26": "3KxVTU6n6ittsLTskWfggu4vzYQqhBb7nSCZ6PNL9rBv2BmLD2euzLdgF5R71TUG4jhaKhaZaiFCFXpShSvisGDV",
  "key27": "2za2copRU5hxtHxgLEFrdXaFmk112Fbcexefxwd2DcfyW67oGhy2XZPgHsWkNGYAGvU8tvrj3ARbJVMYWeHUC9tY",
  "key28": "229eB8PNs66FQMVhYdSKda9uJTyYQRPY2igxyb1rTcb25GC7JxncfgJQJBWmRyByA4Xmoh442sCHVjSg3XF6FcwL",
  "key29": "3ttTGr2nYMyuzQtMaYa1ZVyizwjJyiFoQzjJ2WW7wsCAfY7ZqqWdpJ8euPf5Y5twJ2kvbKg52TM9XsjPjezeCf2Y",
  "key30": "28p99rLQPvxxDk8QiQ9G5cVQeAvGhEyRQQE9QvBmk4xi1JdTLUvyzoWUV6a83kdbgfx4drYXSk4qpECxfPCk5mYq",
  "key31": "QKafikE1D66CJxFErEPWYukHaQts1NSZ5wRCpWDdPvAhrkgy1XaqbUotAeeyrS7PDFMXoqKRLaxXyyd3HGYoUGL",
  "key32": "5vfxh1uwSUiocc8pDGFgapHqxkbuVAppz7UhnXmpsY5vLJ24sLz84fgSPhZD4sHeftfWmwWyUUN8aBvm37WErNv8",
  "key33": "29CpqAz1b8qbbbXihrVQhyeXCG7zytXtFdS4Q4KT9kCZtNERnUrcayNbSMzxTkHLAfifFfmgpobBajscL1VAVTgs",
  "key34": "5Jur6s7EpqEFn611dGtcADws72BQDUgayCRcEt5ABawvtFnaCnZKywhmniUBPDnpe3bc9qrBgUnqPGCHpU2bsngH",
  "key35": "464khergWrfxG2kd2rTDizHTUH2UGSQqKTqwfCvHDvSkMcp32j97t43tpEcbGVnUKAsGhkhapG5JtPmzSsubQjQB",
  "key36": "4X7LCxWyGE5QjC3gCxj247BSASBLJh4aezge1Zyz64o1tr1KZc9Hvcy5u1XtihqsVKjVFS4fdjD9pwGeW95LD1UJ",
  "key37": "MQaAifHHR8NcH93NMSruv3aGGNhQG7KCewM32c41qjtv7KZQJqEGSAVwYkSjgSEhg4PJN1fcG6ighJeS8R8tmXu",
  "key38": "5zt2iwiHyXAoVSxDwgtRy5jEmfTp434kRbP4genNGNGgB2MiQ3xTBa9Xeuyts8K8h3gyxujLVD9X2qNQtLChyf72",
  "key39": "2bJTaJcD7C9EPdmefMCzQLxU8G2AYkx9vq2VnUqT2x7pwqtN2zaQHccvwScUt3BsJsB1LdUN8eviFFctsqsYzpiD",
  "key40": "4UuHyuPSqEgUZkcYSmg6A2UUpYECgPAEqJvpaqHBA3W61goivt9cvEDQpZc24wSkW38CfL3sBXEDhcvMYuWUiQas",
  "key41": "2Vw2StYwnFAcdYpk9LMGfndZJg3xrrF1y8JcbJh11bRjKhMWbRa5nycpsTRvco2FSyDJLbGCXtiFf2hJkwxu1jnD",
  "key42": "2SWYoz4ZxnDwzFJBPfSiL4NkceTVHWVFZzLwt6D289Ab4xVfystwr2N7uwxfsY7RqgZ82mFN4fa8ssbJRK8NqmkT",
  "key43": "tTY6WQ4eV31fWLZHmZifnvpyX5JfNQbf8WnzEx2sawte7zHmrnSULaTmZfnyLZGPfZHhgjswEbr1Mpg9LJFHcXR",
  "key44": "4RPpEvpp5DAR4C1UYwaGhXZd2yAANmi9PVkhpUWnkdiaiUzEHv1hqeGoJiMCruwXNTA7j4GeJcau5nWuRjeSpisR"
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
