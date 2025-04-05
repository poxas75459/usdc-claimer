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
    "4rUcqbzwdJAE8JH5xTfhFMEMPY5sJSNuYTdR2csHyMwhabh8KYb325egjs7B43hVxTQg5anqgE51jE2gCj491xs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tLexYyVwR4VUdKjRDSFLw6XXeoEDFxAiqwq1WADnzJiMMMexCV4UrtED7FnaBWmgUW24q1oymfhHXDdsYbFBW5t",
  "key1": "2MTakTWeNQztRi6vyANM5ZeF1xtvXm8rKpEgukxopRL6RgRcr8fRoq2LtRS5w8vC81qZ9hFnzYFVxhztEXMh6UUy",
  "key2": "3Ro44kQRL6fu1mXJosfTgRnQiKxtu2x6SVxXARkRZKBTdQ7BsHBubUzSqmq9t2vuVRHssRiPC5uQXqNem4wHC1Kw",
  "key3": "5RDUL1YVad4a1Y4bnyFF8a2c5zcQFiEtdRb6LWNLmrtDPsqQF2bi94RPfhzDGirSrCtTe4ZE5ggcoX1jj1BZJuRR",
  "key4": "2FJCpdx8tyb7BC25E7MrYVXVUWfzz3h8XLN8FAz4aokLEwhyotrt4yCDhoMdJdaukAb8xxCwWMwXAKGKR8Ri5WM7",
  "key5": "3p6y4d2ZhVDeYi2puU2TvUi6YgzhB6rQGQ3QXKyMKPDhCdZL6dWeX7eE1dKBuGQbevNZ9dr55SnjdGRoyzyfJfLS",
  "key6": "273DGbm2aSzhsNtrFWVyok3pCxkHrSwJy46hxHaXcFYPGNMB7Q7R1vFdy8PpN62A4W7H2hAB4Aaqiem2ckM5qmdV",
  "key7": "2ytqEgNEFhm97xjp6fgFhJQHPdm4P6xjXrqnw4vJ124sxEmjYuJv7FRV73TJ2WPctHiR7oHySPrNdg5YkzwgcQxL",
  "key8": "5YQ844mcPorMvjJu7FbF2M1uvAbnpN1Zmqg5aeSQw1kSWduc1z3jnizPyrLqj4fxqdSPowD7jS2GY89vWh1YFGfU",
  "key9": "3wfuoAaaeYimas718HP9gsPoEq68xiC9B3659Yj9ryVZPNFm2SE4FFTqFzdB9eU8Wp1aoC12GkCvrgnaw4gnC9U6",
  "key10": "4Hhi15UPW1cPuJNYVX9iCwX4FFod4Lb7N24AFsMCNHXnUmWbWGH2Ji19bs6QNRcYqorT32AtMqQ33tJ2U1eRpu6c",
  "key11": "DoTSiHEV718ZRDBRYcWnACqvekTGSqGQme2WLra92daVivhmVTgvAretwGiuEjhdTjLe2VzT8PZQLToaDkovCU7",
  "key12": "j8WPinZySyFDbmmfJbaU9BdRAT6EaDHZpdDMWhWLoGfiz58sj25mJM4ePc1CDDC13YTqULZwm9QSn8QgE4HPk4o",
  "key13": "5bSodLpQ57B2Lek351dKprZQD3fVgXE5LSLAPH7YAhRRBQLb791Pr12nXEpWcCCtuAeTghdMsuvmD4vA4gN72wdP",
  "key14": "4AxEMy5ENrd5C1F7eyDyT5DG6MvXhNJzYzfPdYnFqmetdJvkVASi4AbRrYqM76AoCwnn3aWER8bfjaaxhGAYf5ct",
  "key15": "5D4NszDEuf4i5TKGsFvgpbUzcU3DUzHLdFraiYng3d6cPYtX3Lk9qxzGEWaEp2sYFXQFh7WbRULrSaLkSsUDzojd",
  "key16": "2xk76TLpzmPhWa12Njc9iax92AVHXZ2gezXaRbAjxAUZdHYR28SaTjayiTUou7NL5pDduHg2uupj5fhUQrqt9gR1",
  "key17": "4ZNC6UvWYQasnkHojLvBEqNQLuxLkxpMv6h295iJsvaFy5vJNekZXjDeGBgMP8qiBALJXzvvxhmFkxHKqrmS1C84",
  "key18": "sme1pUPQ41PFXoVYJTm3PDXcXEu5tRpkUbcj68rNEg8a3LUPJTWQWaVd1XLuTSBoSiD2KmfCRwaEU6yia7oj5dE",
  "key19": "2xQNFpkCnSKsxMN5bszJDz2JEtaS76koQ6BZJLw4JokVYeC1xoGLh7gmnf48MMFRSTC7VqaKXBD9mm8tqqjZaHLP",
  "key20": "xaUuZH9oTEKBqL9hqMujr8h1vnsPbDaPJHfAUNn7kMkGSKVdgb8npqwRrf4Fnz1dCnmScmSQo3RA5poJzihG89E",
  "key21": "66B9kuYDodifbTTWwNK1SubPj69Pevhuo9tdk4baewhoC6jPkwbh9Q5bM1s8y2cbDaui9sBcykt3v6P3BWe5PDp",
  "key22": "67Moah2fgxTDpVZbgaUZaE5kr4urmssy17D32YjdCq5uNNvHm67mDxpo7Serh89DL12gMER95UakKBfRSmRa2Q3Q",
  "key23": "yjcLPrhf23uQHUhSUejDpAwh1fwXdZ6jys3NZ8ugEfz7Kay23wPL4By1U1BpEkoc1P9fNMRa3A7geY4MAYjz1hs",
  "key24": "35S47NXzT2Jjme2Qz9eHe9AHRm7YhNKi7adgz9vBMrMVQswFrnsufKyB6n12G9wHoR8rJ7imgAzXRSfZovVR8XwY",
  "key25": "2gzZRYftNHmsE24seiqtFeNk2QsZebRHzbiT7bZtuVoYV4bhwd2kNm7iCjvMwSdaJageaCejVS3MGaBaNBuKuLBG",
  "key26": "5p2FwE2szx3FcrcD8LpMNrUd4Tb8bsF53g1FvX3mdf2BewUgKhNRrBizcMJHCFaq6czPMFcUapjk4EfaJEcde1Ko",
  "key27": "2787aMpD2PeP2pyXaTTvBPMA75XRJ6B9L2hamfhnZ4YYJzPuPRodwmjDTLumnTi9sKbWVfWxuZxQx1ufJU7xWhLN",
  "key28": "NWUvDPFcrETCCK9VVwwwhNwiVRp9QjtGA9BFMBVfyUn1sqsjQmXjUfgGMnCQSQQ2GWF9jtAUPFhKodQr9tuSsKY",
  "key29": "3kAkjfXvzBTN9AXzvQQJJfpcLGJy5CmCVuVBEbHVyEiKoE9HcCztY4G9fLouMx4vby9jPdxx2a37bUAz1rHDdjxS",
  "key30": "2eBid3SirPhktZfohL6AAi2FjVNisXvWR2VqU5FpUwBrSERT99DCxbUvgu419iatFTbMvKvqT8ANrY1Tz2TTVE84",
  "key31": "qLinpiPZ7BjhfCejG4RB536QEzf88APD3cMz3YjpT51kqQYkSyr9Ei3wr3BjMTZcScdLM6cNqo6syiaWX9ZfSGe",
  "key32": "5V2sQjw2UJyYbWT6Ve5AEz41by9fECkJpinMGs2eczQ9k1PszyKTyUb8Tz64GfvwZ3SWbyBdQTrPYDcBPiqTocph",
  "key33": "5PcQw39QzTDVdoB2eF12Gvw8SDMtKx2UZdo5X7Qrv4wd1c9rYaewLXEPwgLs2XoeUexFpt2PKsQWfPyyhjBYZ3Xf",
  "key34": "2daKn8vMVxDH8ZGqEEmz8wk1fhVi1BYmVEjth8uekE1aBuE3R2ELfPgbmXRR94LpLM1FXiRo9T6cLKAnU35X7mka",
  "key35": "3zFiGLf385YvuJ5oLJQUiZgCtpSF526K7k2TqsDaFr7SBYpAyHUh1UVqiQ5RzMoGnNXcy4SyxEi9AN8Pgwdvbzum",
  "key36": "pXR9n1KwngW1vQGb2bjYtCeCAw2hrWMFjKjUbo2vvzC4C9emKqJnRBxLDYxDdPny67Uj5GXqXwgyU8mPgpSApRi",
  "key37": "5XZTVfdGbBo326bEj63nXDTUagmsXC1VH8fVm2b1ypcEfDvMFZmgKZNFNKXQ6krpX6H2xut4JgWLaBcbvMWo6gxK",
  "key38": "AAx2RoWiWBdNKjXrBBe5dzokkdRYFnBcyd7CGhTEX5FYDtL2GtF3XyZgzo26YLLw4ES97437jdUYj6syKYzBLjF",
  "key39": "2BZzFBTkwfrJZBA24x1VRCgK1kq9nsm7MHhsfBZKMS9iAsy8uLeSwHiAwJ2iFktzZ7ypdmXY2cXecgqabYf2wpri"
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
