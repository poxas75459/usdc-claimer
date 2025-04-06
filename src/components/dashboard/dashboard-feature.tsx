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
    "6J1137iSLayosWgVkwYNW1AwYmK3cVDTRyitbxFYPoF8KDDTD9VQaarKVUgvy81o6k6T21TPGZ74E9kz9fMUwZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eaHVbu1VBRkzxBwgbDZC6kFGRfzvdgXoXNmHHHu7C5h2G8ZBEb3fNCGso3eEFv9XkCYNqrSh8VVQrTWV8pGKxxm",
  "key1": "5EGR9g1rykQhU9Cpr922wLBnnTVkwz5ZgZHQ3wZbZSGn78CcrSbr5GwjkizMzT9sMFaXPprZQevkQEf848X13bSL",
  "key2": "669B6RVpe2Zm1CrMp7K8yuW1s9VMwn4tRMXWG2LxiNGAgm9hKzKvmQXLuA28yYEUiLfnsFJ7qLkF3DyLwHMQuYLs",
  "key3": "4wbYPL2XNmtskhun9mkTsqLJ4R4aN5zQXPrEjvxYw8v54fW8WKGT37L3scSXsy4BWJrmpLjwGXkq6J6EMX71jcce",
  "key4": "5PR4yRLyEVdSxkB3DFdtFwoSRyfWRt6m82w4Zi2D7DZfYWUECjERhDeR9aTRRnCEDTWJUku4YepfzejA2NEWuhaR",
  "key5": "4cKLx1wFEMuSLe7MPsVvYqYsdvQ6xhczAeDPhnyGZmZHYo2pDKsHSxeQVfaszXuv1qHmm3tAN42EHgov1KiFxkUY",
  "key6": "3PvMqQZsW3oyE26MR282C5kxb7mjntS2Kw52nCDgptvmJwaFvqYVejkMM7rKvumVZKYrG4wJjYjB8yhyHRCNRQcu",
  "key7": "4vLZAN3xbF9dpBAmTKHK58R4kud94g2ndRRqeqjtAdD3dnYwbhMT1pnZEtVgowkoEZRw29qE82nEPJyAwQpyQwpv",
  "key8": "4yUaNhE8HgxU96VrEQYLNMqtVkTsKr3cdbErn73wx6Daxe2hCHuk15x55qTLux5mbypSnuEjGZqPiZNsrJTZjycm",
  "key9": "4BXN1BwkJbkPc8noPdDKpUeLgZFM9UMmgGA5KPQszG712R4SFiBVwRqbwEJbxT9LBp7Gms9BmvASmjPDasudu2ad",
  "key10": "2TuR5SghRxfn5LTWrEYJ6ae5DHBvNQQZUXrxG3zP5Gb1pahpxhnYgQpYiqtSUXcbybqSvY3jj7eswCDbz5FDvkc9",
  "key11": "4z4WNZxWoXhNd31ehHD6zaZjsq8SHanUjvWMkkMxYMhn41Eaqr1JPUVTjB6ynRYii9i2VP8TnhCtv8LFs2RiKri9",
  "key12": "3cFtfaChxgiguhh2aHs67BxRwfP2Lr59sDv4A8QQyVLZvmHfHbs8Q5VwTcKhwPVMiP3qByw89yzxZVHzfHbX3rwZ",
  "key13": "4vZQ4MGF5QfticjyERPVGvZbnbKbXf2wq35vVyTUb4NaAnbEr1fzC5KYfN3kZuRjFn7rBrm1focanLE3ioYZbS1K",
  "key14": "4XVPX6voJFp5ewYE6jvEFXKn2AZ7ca5zTLhu52YZqWc6EsJec1gjrc7ERBAcFQwEXSQaRowdiNmXjJWcLxbXbn2d",
  "key15": "oa7JBYsBgYvLz5vVzzJ7rseAdLQo8EVEUjoPWqiNSZz5QR2zsjk57JsTwz7gD2Z9sbGJdCeFMerx58M9e9z6E1E",
  "key16": "3gMffT5PhEaMErRyfFZJtd3uUxbmSv6vNfu6eGNXie7EQhC4mw7suxfaBvFbbi1jRJveM2TT2Vi9exLNT3Xm2zMf",
  "key17": "5QamMD7Kwiqa4b7JWXt6mcywmgK3WzdxY89LuK6zFth3E8QizDZVc4tqeeUkiSmqtuVaBEkkZeFbrCTaCTZMkbsv",
  "key18": "59QwcA9HX71mJoedq7Qjhmyov24oCSpNUKxeu5UHGzp99xETgfwbcPw8DyMYauBBM55CbFCX6zVh9WCYGPa2DvgJ",
  "key19": "3eEzMACk7BXzLTKAzt5CrPmRYwyFqnNYHaUXyKMiX7foo17vzUg6gExWvdxT9kdBhWZutu7aysGXKwvERb53rXpE",
  "key20": "65NQDJGjrhT1J5twDQ3MVZi2zguZkgUQoEoE44coznLB4jP4wVgUg1gzr6ozmso1LckbCKoUD2rL53MwU74zg9AU",
  "key21": "3ULCxA9e2jJxNcCh2qjQtqZs6xKTVxrVsGQqjNqC37cec8x1dpbEzgitfHrHePwj5mikfaQQTHqkib6cF3QVWAph",
  "key22": "3a4sMwVBZS3RhN9NMLfSZWWtt5mqv9RVHdMajEUNKWTTthC3NrBuR3wYJCdD1HP1seFxxHeeStQ4iAfDtRM5MVqQ",
  "key23": "86LreaSaad6sVgatE8VmyQWDCk2B4iVg9kHArUBvy28q2drhJn3uEafhB1tZsJYNpMgxVukKEBoDAEo1ARAqMgi",
  "key24": "3pUZLQnXLvQqU3ED6mgtBkRPnQKhsX4P1Tud1iQG2A4oZrHyhwn9FyKcopLpAR3zMNRTv6QXRiYGdNucDjz2QHtw",
  "key25": "2e22sbP9SH9irak2imbZbGkxgNqu7MCCgbg9GBcHJU1diCLhi9QhjjRVyByVnHyaWfCpRKU5FX8KYqXX2PKgZ7tq",
  "key26": "3EQqq6piTQWxyUc58e61spEzUgaR3NkQVwp4ydSViFtSbSn9V3FdaLetwFXJGN897ng18xt13g1ahc8mozYCYSuk",
  "key27": "27YGygj5aLHD9N8bdpWiJz867u6ACVsQzaMh7fhqiQKSbF52d9baQz8W5fmM4WaxkGjSRK9rbhbuiWXwLXvjtP2f",
  "key28": "35rG9CNFykzMZjcYNhExz1hAN9pEBjSKZpjohpvaUfnqmd12zFnZHiiGvz1i7V3xZHn3h8AvKUdACRzjBszBfDDZ",
  "key29": "2Tks1F3YpzbdwipULaHbqPbSUmXYLwbACrNwMMRw1CH3rgMrSWRUABdpsgeygonheQSr1HQ6ugpHEueRBKD67G4x",
  "key30": "5tMevqnsUFefGVByGLpy57LMURfXUUvbDrY22ZeB1mnPxEY6M8jvupcNKRrLqNnrSPpGb6daoG5qUjoQAHVspUn",
  "key31": "BaT2hrRMC5mUPqNeur3oMu5EA1GsFZkZupNTJjVvpwxoDLZrcdtCgu6srR8RkENCUvE5pPgohVYdtFSiSyDLEeP",
  "key32": "4qQ5sDygedntJ1zy1sER4utsDU7sDyGVibTK9aHbLYYEwnQGJdi9xT65nzDUW1irRgwb19tm9auAA9vgMBfqyiiZ",
  "key33": "BgBsKq2aCzgewBgmRkcjXTKssJfMFWW3p1znZYc2hfwaLUweRiZpwmT4Q5zbxbjcs25auLJEtTfwdBnYyZbxb4M",
  "key34": "3zah6aW5tsnektscH2fYGWyJxawwoFGWfhg2jBp8DJtKHSDMFth58HPMD1SVaHAHawVZNgUE9y1FRhimR9denzsc",
  "key35": "3rai1fj3tzBBg9jgrRqcw3kgnRETzFnxJ6HYYgHYDEB92RbT3YaGCycQvSVXA46cPRntGoxph1Q8gurfBgtMgRU6",
  "key36": "exEqiQqoHaSxZ7Lfd52hh88zkiPQwcaFKrz2pfqqc9AiVPNMyTo7Vf9oZDSjgQFMrmphfHveKLoiMFw1xeKYZVo",
  "key37": "2mQLStuCHR8ErqivxVQzhmjuUxpAuckehVG3L9DYPSNJbnLWTHr5CAus34Kgck7wNEwf8unWvD4xUNbMGfsSSazZ",
  "key38": "wv1Cs5W8f7AWapvvNu7Qff6uaE65rNZhBpzrLrLv52Hc7EDKf6t7G7CsCqJPcvc8DMz3yMS3Js2ztQjRvbhRWy2"
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
