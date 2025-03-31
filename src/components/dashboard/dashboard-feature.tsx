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
    "2XGBDuk48DGmGG2qNMeiiBGqLb9QVZVcu2cPW1vJAH8YDZvz6XYkRJvWM2KcSy4adFZQLvMMfHiyLae7VM2d5kRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CNzrycGVs23RqzBAgTBtRAVYkCecaK643inrkZ3hz7BwVXTVajjJi6MBHGrGYcWMog9oGnv5k4A43cT4u5HQubs",
  "key1": "24Ksdp3DGGWkuMda7BVKCdDaKvWFnPYcC9nQf4tMZotjVoS2K8WUo4G4xu8CYGiqWH3HuLTLwEb7h6Hp4FMNovQS",
  "key2": "2eJFSD5aJR4WS48nYYo7crprY1HNpsZDyR4VaRTeFGYDqFW2eDnh6TQijVEp61GhfzQV28WgUry23q55NJXbNHJr",
  "key3": "3KkYKNyUCMnQJ7t1cxY8SyqT5dwmwCmwHuuX35XKv2C3wWfRNBzFgXpGpDSswUHz5wF5AwqLetLtjKdpp2xkCjkn",
  "key4": "3Lcz5zkGFWZ8BnbatKhhyY2q7DtQvybGfB36Yez39aWvFtLD4dQRgGo932xqJE3y8wyx5GdwR25m2RB2kW67DHzX",
  "key5": "5j3wQMsNrFDm8XLitpY6pGD92voxocEiA9spEA9Z48nghwBb1x8Z4RpWaybkQ1hYkVchmug47N3QaLsHaYKJBXzS",
  "key6": "5vT2D1LcQUQ3mShs7UTyKxkTHNQwgqqoFjyDkgZr7QdswRX3WBdscSySf62GZK7soCHkrX8ZqRKfUPzicdLjntAG",
  "key7": "3LJ3dGQF4eLi44NeCkqkKgF5Pmw791nRaX4ckQYEHMizEtPKoxLwvkCbnpBJdUJs4wQkdRVjFUnob7D2ATN7GuZz",
  "key8": "vWfrfm84cEGqJGMhbEBku1MQb5WAgGZNzC6TrtArqF36iH1hPvykFy83JoQJ4zrAq9iT8C7ifno2jtUXKVKsxmK",
  "key9": "65BarMxpXT2ML5FJEgEfXMosmEBqstUmdMMY6YU8RBuv59akZfbeUWkVjVvFyd3rGzHVMRLqe3AVEj3qT1umJcHf",
  "key10": "EnJc2ZxgfhfdDb2zax5uTAw6LewiiP2txJJt9N9a5vU7zcz5AC93pKenkcXUWkGqvZqx4fSPTCnMqLK6tVaBY2w",
  "key11": "3psKT2kvWgUuSdZYpqbBqthTNhciR1BafqSpsG5iQhqykZCocMd4pp2QXJapy935JcaUfVz4CypjmqfYxiAiBzeZ",
  "key12": "3rRP8F4wMZYEieFMcguckP95cqckqXpVzYumC5iERby8ASKRVPtMiEESPY3A8w8H3S8Jmi2qjdeUrimaFYeSktbH",
  "key13": "XJrx1FiF86H1otxLavNv6RmTMwHdn9NiMD6a6wTJQTbj9XzRN2GEadZcizBEahzkq7XgwTSS5ath9xUTZERSxUY",
  "key14": "2437eQSb2wsR6Ago9q19HifrLcmCjF6Mnxxqz9xci6Zsca7THu7WfkcAnFvqxewmyX9w9HwcTu2CMFp1ekADS5Jb",
  "key15": "2d8LeFYy9y7xSgVuZku2JFXHcbzyEaWx34YQ9o6FnpfyXJEWBYERrNa7NUEL1Ub5eo2UHpVD1ePHLFCFbdjA4THP",
  "key16": "4nWLR27M2GTNgmZPh5zNLw6HeshN5BUGJGbdEcbsLjYcTpj8YToJ8UFo958fUJJSwKk7yiibXcWaYP5y6uttHKgs",
  "key17": "xpcKhGsX2fn2wyrNJHETSzHwBGA9TsRD3o6i4B714qwPrPeQnLgYPo3tPM6yyUb7zC9JFvJQ13azMipJ5mk8xKs",
  "key18": "4CudpwS4w85KzWDNpJozucWuT6YA7GdFaSWFuzDUuZuEdjxBxZSLzmK2WcqB7A25Fy27s66Xx3oAYsDbtqKxqU6X",
  "key19": "2wyAX3TZTREfG3HUTuoEuxtfvXyma9tRYXmVk2ixo3xSj9ToitxJauNmTBxMZKPJaAa1JiR59fxiU8LRiBUBd8Rs",
  "key20": "5Ac7Bwa6j3Dci11q2zWyrHSyCnVbq5WeH7QbybcEk3totkhSDaFSxFBtRcMYtgxhKEGtrcY6h3YcVUiDfzRPweqc",
  "key21": "2MAWk9bSqmW2nG2hMCfsKtEri9N7q1YVDqRBXVHf3jBsuexaLYuFbn9Giykh2g4ZaU1etQbKwqayQop4LubeLNPd",
  "key22": "4UEuTnDcdQ486h2jSg6CRkpSUzCMMLVS895pKaZz2XdYpqwMySmWoLDLBLEGN29EkKYxzxetcmYYNMWzqLngN9WP",
  "key23": "4htA2iQ4UXYP8bs3bECedtfvHX45Tknx1Yd8hJK56bspitTNzVhcUJ8QVrPYYBUeGFhfFpZa5PT3TUapQU9836ZZ",
  "key24": "5EGXy466Xn3C3b7R61qZEjnUh6Qm3kpKJjnozXpcVntoXevNQATUB2fna5EpKTHn8dAX7encTgsYmw3hfna4Mcz8",
  "key25": "61WfhFq3ANM2bHUbKbvt42pN8Ja2tiHi6bsUrdNxmuQEJJejQZE9nf4uABHViXoaop6ufQF2nLYkYAFSBJvMZdGV",
  "key26": "2qirh8pushpKn7D6F7nAHfKYZW5QVJEjFWPfG9FXYPJygsFArPrembJqibEvZz5TGETmAGX86sFdSL8obvVUJFic",
  "key27": "3UyKw15zGKxD8ibGy6vmnPsDFzbcSc1idwSiCSYekN4YwpCknAfP2tAyecEdkdUctXXCgumFz3CDaH6nJ5Hof74C",
  "key28": "4V4g1CJoDmNctXM62iaKRBKVWpmwUTJj1vCtf7sarUU9YrvpjBdfjSVCo9CZmubBewn98XK7aUhdoe3nhsrwqYzV",
  "key29": "3i3ECkYR1pcapRK4m3iBTVr3MVzgsuxkhANAkhqEVa8Q4rJJaVa2cVZw7CrRKYA51dSNp6BZiAAH8gD7MyWh6yXS",
  "key30": "5cnNewM3ncxMccgLk9W3vvb7d9Cqi3Sxv79V2xRqy5hfjFt6x4K4vbniudRz3YuTocmNzgtWevTZpRBPrCNbqEZo",
  "key31": "43tLtYdTsYDUhaLLHWEnpSWctrY2jW2vZpfDXpHyXQSojx64UyHTha5RiuPrUCqtEgNYhmBQ1FdZqqnz7RV777qb",
  "key32": "2kkzHLVATmZjx9yBn9dytLA1ge4uAZv553J1XE3kceG49kLoMxDqFiqZiS1t4BgAFpGibUrwav5hm9nMEH7sv7eJ",
  "key33": "wexiUD8JnPrnuxJg6oqFj2YCjrqq5cjPypvAsgD8JtisN7yWtb6HcGMHRFMWczVtZap27xrgiHo54uMDV2oDvgn",
  "key34": "4EUop1MSMK4E2tAvFc8D3WAdKe2QCRMMazRaeN2nsfc27EEiDnRu4VWjHMbVfsLDqiwAB3XKu4wJtkHeKJCqyi47",
  "key35": "5EA2a9JAfDq393SsG1YDfV1TpJdn7JaHxZd7wd2otB8713Q2X6k5YioamFP2zAgYryWqtgrvDXSK1ZAts12FP1fz",
  "key36": "4BoSEidEpVw1cAbTwHW1yp2ZGCdbxuR2rguQFEVfbAsfEqY9s311ExGc64wKw1Pa8kyo2LLub9v33RaT16R2ZwVW",
  "key37": "3JgVEmxdGKS7iZg4sSdVqhCQ2AisbZuFoNcJTJsEDAuKYC91BJneL1dvkKNkonC5tNDBRQkbp8ZXX6ec45SDiA4q",
  "key38": "4Y39Ly3xXvKz6WrsKm63JymftWDZSqodiBJpePqubxGxbWB6CtaunFJwgLDtBsA4ghKzYuRKghfgYp4QeXDCb5a9",
  "key39": "4jBR4NRoKWKR3ws9LEJxpdmkshcVrtx84A441gx2LSRWNKihw1YPZc3KMUbUCYU8kJUTuJMAmHAdkCBHzrH7e3f9",
  "key40": "66o4eMrihYRsx84dqegDALL2MCGTEzcJqeezamxuPWM1QcYd1xbx4wpU3AS18WgXnDHR4dJmrhKLeUc8ckUyRjwb",
  "key41": "4fQLtvDi5AaDMfYXaVN8sHPRSqmCm51u4nhHNE1eptQkzEDJV6wANiAP4nY2re7sTNkC8YWr5r9DeZXcVeASFegG",
  "key42": "4MhLMESyrdt6anNfB83rbVaXWx1BgG6DmmotGujvp5JPGXCQFd2EDDF5rwWcFX4kXdvk84LoqbmtwoU88TRcPVmS",
  "key43": "Ygc7sgyPPaDuhwc39dj1JqVave9eeP6XXEhrXFt5Zu1yWTGUBSetfKGQpx1Ve3GQ6pH1BmDi46qqi2g8oKCRkKY"
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
