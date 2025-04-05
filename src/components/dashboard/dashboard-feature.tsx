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
    "HGhe7PXVpYufUmEmBQLdZHW9VdEmceeFBEEjpTyZ2XgwdCB31iDcvJMhaAa5oNR2uAr67hk6rAVMw4w4dNPAQwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ATeSVc3Fx9cud6FHj2DZo5cssZzn1F7Z2WQ6FmRpc28wZSR3wPEHhENTvySNEphZD2qnpN1AGEuSPYtdD4xENf8",
  "key1": "3AJxrWBiRmULFuA2wnKSmhvqDYZjA1QN5QC8TnaVNM2QC4KcEu2X88Tgkoi2ZxRrtTEbyo4J7Ri7iaHCGWEtaJth",
  "key2": "51zvu9Koi8JNFNHRFybe9WcdwnDBkjLtSfQvQzUhZZPQu5BzoRFeSMngj8DT5uCoWxmvXJ1ks7BhXTBMUyuDuZY8",
  "key3": "2g66SPMjfjMrh3m6b85Jm1kUFqS2Vvdowjwj6UmqckjSSGa1br3Nj9Ym5tH7i7pqBYut7SeYnAoutqWnn9pF7HPq",
  "key4": "C2tADKAVM5WT7rFBgEvJpxVSjWpN8su8WQwXG8LkwejnRHTzBjstEdAPF8Bp6s5XRvWDQ5EvzWnBUBN8TQLuY47",
  "key5": "4cLjLsgcL45SxygxaP4Z7NUhzZDxagHevnwAKg1ofWZirzh8WVeTdvjoYxRP1mfLxMywWB6mmGQYH4RnPpd6KNC9",
  "key6": "5fwqSA2EJGNayFDTZzKpzqBrqdoBshp4RZ1JYPygTg2C2YxFHpEM2NBZvZt1bDAvDbeq4XhxwqNgLpjf9MzkTunQ",
  "key7": "2ZtDbv1tYMeKm9FC9FnST7wATiEeHWrKcECGuzZXw7rysxF3WSRSKymLaLNUSttxAQSeGEpnBiFKNJeuJSrZYAS4",
  "key8": "5rm9z6iUsq9Z5S9LvPZ9tV3Ewi4A5nrDnP9htbWt6R5qJTrauumFJhPY1JToMKA6MveeXKEUHJwbhK5TB2NBgr5J",
  "key9": "5d5qLJKoqgHFQpE6MMC3uRQ6Cj55RdidkAkrLNLgw87i3eUw8rN3Pxoi4z1ub97hb6mEs6YR2knyJuNdDjmLDh9",
  "key10": "458e7WvmeaZKtRQVR4sYyPPPXP8xrgVnfnREEc52EPp6c4orScjYo6re7n8Dxti3T8e1SLyS96d6HBGBVQG5dQ9X",
  "key11": "4FXVEeXuCwk9ZHJoTaH5Kcrddtv9YN5oSyTt7mC7gxAMfKtpR3R9GwvQo6iSxyLateeeHTiskcFJYk1PS6fLkLVe",
  "key12": "3EeivLBgbovMzypkUw6KLKE6AtWMb7tLiWtJnBq268cdF96iEiwyvGtvgGcthrG1GhG7A9UQxbBh4ifYSi5S6b6r",
  "key13": "5yRM9e9BHNev2TqSdtdVMiZkFFh96nYRTHfeyWcS6yZQ6nuKyrioTxRLUosZyWfAgJiTSCZajGnKwxM8kZ1an8Yb",
  "key14": "4EuGTSWAEfkBMbVVdB7m7QaQaDU3C3VDSWW4QqttbtUfMwahSJ7RH71THqQZYCPD6P3tboyJDcyUns54PoPAvqdY",
  "key15": "5kKHSNq79EZQ5sBrVamh8CasuFZiuzrCDd4B5bN3DeSof3KYV8pv66SyRajC99uVpnfBBeodpg5ob6N5LRGf2ujJ",
  "key16": "546MuLBCCgDbDqAp2SkNwMtN9m1ukkkAPfuoThfCSbhZH5AnF8pwsB867YUPaDsQJuq4tYL7jZMwKHW6rzhWLrEE",
  "key17": "5ab42NaTFe3XnGzqarawFSQijsG1eCekEtW6yXX4Yvj9CWYZsurrLzBiTWWbd439HE4VmP53W8djhuj3YqYhjcbr",
  "key18": "2rLXWwwV7YJ5Xw4rGoCGvLavsUXupm3XnzZV3omHW5wATVpRKvkCmvSBQifie3JHMLEu1GJ1KmkH5p1SjFak3mfn",
  "key19": "sZchZqG83ajSmRp1onomc6DLjFVafRhn9aqCbw7wDsKSDJMiyB9Cwu15UKwkrMses6tzdnuBt1R8jJL6ZBRvjtb",
  "key20": "5iW2nciwooiub8kqMtuYFfwfXFbad34hfYS27n8nCSq9r5JvJLm4MmXtAjcbSavC57DqSk5pepS7mY5fSAQ252yH",
  "key21": "G3SYjxCTdBVKSWTkvkVXaJ4YSmJ9XL4L6sL8dYZR3sf69i4XikNJiCZ8x6XxZdbdbK6nxJiZUAKcR5d5XAxEhLN",
  "key22": "4szcXUhqJJUTtdM7xDK6yKV1b1qeL1DRcNfbkC6PNbN9Tq8DcdF6wHaR5NnxyP9bmXpktuFQzK4cacJqNGqNRah1",
  "key23": "5hN5JRGvS98pdS884LpGpjmQBKRTLYVFixyAHb8usDVuvT5a9nCM2TSJFXdiwewYigugSE5namZchn85zTdyHfeY",
  "key24": "2cH6TwVts1QqG4w4Q1EEUzTpaoY9HhT1tpbGdx8GYg9Gy9FUQW5gem5tKQnmkL2dWgbzoaxDpVpxYRdV7iViyqPB",
  "key25": "5Ayay2hW64LEsoMoV8be5wspcF9RjzVKxYwdsJhwv388YoKrcDABH5QjgLCwro5Hh1n5Z5TBjb3d8d5MAh5t1Bgw",
  "key26": "5owya2BgVvXXymFrPjEMuKDKiZgCNruVfMgb9AmNjgZ4dTJBPz3EoitE9k6T2zaqL3eiDy9gNKgBPTS2V2mzCyoB",
  "key27": "5LNkxNp5seHQM2LArQWQL3q5ABay8rNNndXFcKp6jjN71N62hTPWkrCfG6QVoLzJaGgDyuVFznx27ZJS7mLC3ARP",
  "key28": "2KT9gYzGepD2sdCLXLUdmzi21RKqVjhAsvGpp9Vw44iHzQXAQvX5ewHK1W3HL558YMsfxUNRonDiewAijkJ4t2gz",
  "key29": "28PQdcKcwrThMkzyvF4yLJ8GZ2g4FwPP7LYYk5K3QWzDsPgec4jYMKLKfccvXoGXZKDfRXcgg7f3mzUw5PhGH3TK",
  "key30": "4YtxKQVp5AVDKgNhGz12Z66DGH4s7dNbVayzPkCvvUwF2KymCoXaNWA7H7HimYfLnQM69HDBDvPEaj6n5q4JrTJ2",
  "key31": "xESoQh3sqauhSqfbkz4sQyr9wJSkC9hmam4oShYdp5nT9tJMqwe1h9MopXz9Ude9hpjBwSAjQWqnhyMKBhUWvPn",
  "key32": "4GAtDMGymj2R54W3YSB8oTQTdQDhb3aeKof9xxdSD5z2Vka4cr12LhCMo6VXpT7Si9bEdXLovDDQ4uYVq1EXFi1u",
  "key33": "5EFtzdSTwcMhUbhfDEkcuWF1JCdLJ6xt9fLMTgTQ7tPxA3Y41n9KeqvnXnxDCqRa9hRYyYuWSYEHyvXiBmV3v3Xv",
  "key34": "46Sq9JJE9er7jredJV1Vxcgao3N3pvGnta3sBifauc5mB7eAj4DnqYdCu2W8kRvf8mGmDm1MxXDTDHxn8eoaLELC",
  "key35": "4PoRNHmciqSPSdQGspTtLXQv8v2MPwD7ewBPbipTAVj52SACxPg6p5oWVqKyXy7apBtzzZXfQjp5sWfcR25wz6MS",
  "key36": "3NTs54MpDkXzr5SzcfFQ2VegTwWFxwiAYHpAasTjvmvpL7rK3BbovJsydTq656hntE2c751Ljkw1PnZz7qBi7Vyn",
  "key37": "5Qy7J4PwWz4VRFAzzQmPtkzxNpeSDTTPPotX9Y6E5isP2txrxAzUQXc1NVGdyKz8PPkfvBc9EPVMRo2G9tQJ4dFH",
  "key38": "3aGkLtUiGWZJ2XfnpVq7QZknk8dvqfU8ncpMiVXEYB1BdHh8CurQz9wTNqXETv64rn5UwdVnXnJwHBw8D4teCwxn",
  "key39": "39Hx1Y6eJoMep6CeYocjsS6jYgyoY7xRU2LLkTjF5w4MmFHSEWdeCcNv5pP7EAjYqYrNJPbivo7BPSHx78CgjMnW",
  "key40": "2zdUa3Qqt26Y4XrTXuM9Te22BKQDQR69hkjB24ymyLQYjs9kJyynU2eB4AZSAEjMmMbcqDd7F1A2mM9rB1KKgTHM",
  "key41": "2C7RoFmHT563VBmWDBQQCq4qDrHQNZqbQKxQtcRqsNU9fn4gwVpe11ohusLiw1irasB3p1YJFuGrXg3qQKq1zmx1",
  "key42": "3REQdhw3mJ28VzWc5WdoXoKgWfHea1c7Kfek7i8oHcFzU4pbJZNE7TDfvy7qZEAcAScmqyP2V6kyVHWCPmpxQCqH"
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
