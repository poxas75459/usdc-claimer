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
    "4f3929TTPQQvEXeTENVmch7JSgCMRh9UGTXPkPfGLF3KSv4af1S9qKRsBYFYfaDXoyhRDtCpNH9Jirf3cehwRrGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J3izrCgnmUmHpLosrNgeAJvJdKD4T8Uw6ThKpEDz8Z2NoqqKmzADQ21z6bS3CVAZqrBpe5CCGXrjf7fraDcgWAV",
  "key1": "4XowhqHgQor8QCJJYRqXD5YVta1kykCPtZwUJZB2wDadsfk9KpjtQ7cxSoovbV1CtCrnYXG3NujAx5T2T8EDURJg",
  "key2": "2YByjSge4mLTWqkURYfZBYV1uzA1Teouu19Sx3Y46S2TffZi9EevQCBL8KfdwHbRXvRhLTCFzE4bWuW5sFNqi6xA",
  "key3": "4E3N8q4EkkgCCQ5XGH9U9taBgt3dWpBXUhjRqgbsJn8DLjbNEPx1HjB7kr7YJEEGn8cCQqFVfZizSpd1S9qL8Ze1",
  "key4": "5UwSB73UGkGkb98ngn47C6dsM3MgFKc9iNhKZanxhCENrmp3dQoNer7Xm1hXnhLX7C2xjxXQGHZukR4AbeWeAqrZ",
  "key5": "bZKQbNySheP8CCZDGsKxwQn46tLDiJMjrfkVASv8cVzU7PrazunzHwEkZ1cazHXwPSAAbXNFf1YjHAv9SW7pg8m",
  "key6": "3tYWcckXp9ct5JNAADdBRyvm2ncoyMi7g1sQrGuibgpFra3zfGGmmMBpLD7ihx63NEyN7K9sY6CxQuNR5B59hxsa",
  "key7": "4c4pnLkfosGxtYj7HRzxqG7YSuUK65UcqDBn71x4U65jAtJBJon1bZDhrE2i6T2rnv1Ykw7pWceGsJN6sWyYjjWH",
  "key8": "2ubaFSPRFr8j2oPKue6sqiJtB5cruZNVt5DWaUNv1rAqsT5svQYRQQQFbe8YCLpFi9AWJMtSYtQobBREDBcfLgmK",
  "key9": "59eiH8Se5CS3riapH3Aqe9LqNKcNPFWMuD9VpQpb8D4LUTj4Qk6oR5GjcstY9ij3CsEiBLXfXGvuHQBkcMjwZy1a",
  "key10": "UTBtfiJN5qDzPmCokV3z2PXzoP6oygQVei2cc9pG5U592Qm89WpEtng8rD4NdMHoLHpaxs7DcaeniSy9QE9Xk8v",
  "key11": "5NXWbDUv7KRJxyRB1tJCixnPPAavkSwpAFcggj9s94k9XTeZYK4ktJYPJU1qakaaDGadcF2LfPsewGWBNbk4SBWx",
  "key12": "4d1TX3qsdvteYf99j6zbFwBWvXnw8pfqnxwsMRqWWnCHnooJrHQkhV5MFFvDE8UXxDA9weQZbBGLw7YpUD7wpmjW",
  "key13": "bz6woNG5EGc8vCFm1zx6fxSP7CMqUYNbHFDRNsTmJn51oi8kgVK7ZGrEfVhFUr7iie98GyWULvN8y1ztyxbdykE",
  "key14": "2U9XfHdZgQqc35UzUoRpVUoULdx3AGAufMsHWDULq2mGRSqjEG3sDEuNqSy17s6yTEZu9jMDVkwAZL4eS1vSCnU6",
  "key15": "3uuVxoxh9dSGKpYhTYFTuvrfGJAvvdoLAJKnpetm8FR2UQxjCJqapBoVekTWUHj1uvUw1cUXwtzZkQnBvMqDc4f4",
  "key16": "hXrrc596q1QYDMmfdZ1UhtEQGHpjqNph85PDiBpqHRY3VmrUMdQiYg8xHfqnkv4ojpT334M5aBUM3d3224AJkpV",
  "key17": "4W1sep7GBQg5owsGfjx9anbLJypQZ9bZzSWUJrES1piZdhQGxXV5Zp74LBoghauuA1Ln1ZWRF4vMDy9JGEfSSiH5",
  "key18": "5qpYuPcFWDNbURJDUKiaS6hhTckK6sFgnXP6YcDLKJr8Ff6RBqeMRYzj7xXCaSUUP13WKRkh6hRxS54bdB2wTgZJ",
  "key19": "29DptFaMPmbuBNqfCVyTWeLqgLpjr2DXHiVGJiVohJauS1cakWdfHeH28tMtGj1RDn5z7NW7mcqVUfNHzbX6ohEc",
  "key20": "3QZ2u57E6eWvU6P9ypmBF4afBfvdXicZVwfQFRR7mt6G5TNUjCRDhbWbmdEzDpD8MdmRFgME5X6J2kddvs1MUzWP",
  "key21": "5zcEc8JwxcPUaAeKffKAU2PYs79PrFFurobNk3QMR69ArifnXbMHS2VZJqBJ9a1MKdmMe6tpU8KKTMeGw8X4Wqo7",
  "key22": "3FP1xsoagALSqxFkxFdE4inRnNpTrAVMxGrAUTocJsTvoMNh5KXuWDepKiJyPjKKTyBaLZN1mnMbdoJPYQxf1Kvh",
  "key23": "aEnYsTUnvY5bwFagnLCpwviADwtc88KsY3xvsVnbfD3M5khXw8bxM33McZfZEnsYQ5XaTTAW6wkMM2pKP9HSSES",
  "key24": "oLnm5yYeYsv6x1sPg3DYEiDJ3Y9fFLg3mh72GYvtGpN4j8QrkzWjtQVCfG7949BWSfTJwDJhstQ6xRCDwhb6sz3",
  "key25": "4yKRzyhZXPHpFWntKkKX2k211ERZErQkHL7uyvEyKzhVN13xvgLf5u1bS2fgbWGaEuyVqyjMsF7vemDLvTsZYGPE",
  "key26": "3jNNrNTtraLP9PVYbBHLyb6ak1eK64riUdH5mNsrYE8SGHeYitW8BVbUpmzJakqUyyHJCEhnAiQAXkhmGG4c9xTQ",
  "key27": "4qWro2wmWxknqyj5LWydEWsS2R3YVyituei17wNKvzUXACezb9gLoLPnVtehwXUjdTuTvvUYnQt67CKXTnf9YqEp",
  "key28": "4DKy6aypkihrVMF7fFCQd4Q3G2q6w8oNfZjvio6K4x896yW5oSqPwmBSPkwHthvhfWTJXgz6zJqWz55ejMy6FEgk",
  "key29": "8pmiBcFMwYB5sM2jQzRyck9ydZt5kt3RiUtRyKyndAr1ETzYrANrDfurcazVNZFxNbjy5NhbVWnU89efwDvqph7",
  "key30": "5VYBivx8pxpp8GRrHaC3HAttMoRyHDEgtJwJQHdJq47w6R9BjdGTdhmZSJbbNuBLCuRnJ6adMfyVf5EBW2Jh6TKA",
  "key31": "4ReChcH1dyn3Uz94huW4yRwW6ejWc2f48yFaJJrmYqXH26WzGs33SpUpDSfUgoo8yxowQt7GuqbjqTgGKCBRNmKj",
  "key32": "5PvfuWWSkccprasbgE63VSmaGGfnGgHJLKeN56fAAwbNBfYLmCxowQRmiBvUcbZL6hrbSFJUUKjfCNxJKVRmaY7p",
  "key33": "4soWcoMU9s8sEG9kSAJ1NBTxeXGkp3VppEAJNsxrowAaBnrP35tRRLD8sEpPeqpXscWJWBPDyA8Y6aybHxG5TtMR",
  "key34": "44qFmPBzqn1XwVCFsjJLjygs2331Bq46aQ8FGY9BjzoqaHz9cX1RY9R3QnYE3pQpfWD961xanrCJFxKMWH1mGmbX",
  "key35": "3mgc2WEf2mD2Gq7Y8vFjtZGX8mHA3GQ5pBHdScKAkdKFECjKj3YXjvgH6c5WkE6dV9vjAs9A3Bwb35Scxe8ei1pu",
  "key36": "3dgxcYwtTrNJ85QCmZHLSB4ShJWcPyQmjkMWUKvp3hjwXw2U77TPxcSmFeqUwDEkTPtnpBzD8tDC55d4GLXSMScT",
  "key37": "3wXHSAoru8jTBiiafXNVfFTKfJauVu6y5XBXxiWmfoDm2tHJNDMz2qpuCp4h3bPzJHmL5R3GXF2v7ZwHgBf6PdUB",
  "key38": "syTjzpxxkj6KdGdNW8uYb7sZ6VFyBJTi49VSAqCpVugiMqvaaLrCP1rMi6LLU1bjSUHV2xmJxRLG4nAoHZ4qGtV",
  "key39": "4HVxZGQwLm77WQznEbym1uqabyehig9HQERCG2N54LwCpaHTja4pE2P9aHugxFjiYf9LcMmBCTz6zfxHeXF7xZNz",
  "key40": "m7aXe6W1dLAuZcLdQMQLwqbDP1B4xkPvZ9owk71MCyYJz1je2bxzd98nVvETFYSrA5pug5mhfem9pABdvpK1fpS",
  "key41": "2JBvQQyuk8x7FCabeBsz4MgNFsKmyuJTntEYZmzG8j6y76Jy9QkHQ7x4bf12zWEvR39fmJduhsnvNG3uzTvvLB2k",
  "key42": "JSXF4TnF8xvAMjdjddRsK4j15EYykiiYBELnhzu7GTXSSy2zLnZqzWmaEPTMEDw5VBL6G3VeTAtQcEB2k1soSmh",
  "key43": "2wHb9TdLtpCgNNmg6WgfkfvTeNYjs7TrYb38axFxMfCerQoqz8eyieCdUKPNtnCDSxBLDj6rUg6HSVqAnMrZrs4D",
  "key44": "2cEULbSE5z3tEX7E9vovF9L8UjNJWMnh9j5opwcpWMZ35bx2UXyZUpJVTPrPTi6hupxT2xB7nuENXJpqqtoWUYW4",
  "key45": "2yvcYCe1AvYwZUDewkQXnLMtmC1z996ASDYNY8togAywEmnm4ttzSBVRmUKFqTQAW2LvgQ2xLSdLYy366xDxH8qs",
  "key46": "5yq3CurTnL5jy6ryTCEXVKhThdCMhNBvZ9CpBeQuZxsqdQ25TiDduHKtXKG4fJttTvUkqcBxedNpnnMMaB1U6qCk"
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
