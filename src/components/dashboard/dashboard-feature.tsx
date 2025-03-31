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
    "3MhNRCxKbQrL7qNp245Aw9Swt9rGdEdLNJMcqPKU4diRxofzC9PQNWDmnYJg1FQAeY46S8x5JKLv9t6D5dKeBJaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qViwWZK26Prbyct8w6RcJTpv6Xme9BXnfZRWq16ALJPzZfUQNfeRtH49miqA1n5EdBg5qS3BCbKmPak17qG4f3p",
  "key1": "eAr8pqU6Nmn2fF5wbsNHGimAjGqfTTp5Sjug4M32yMsyfPeVC27MdhJ5ibkS4uGSBLysxBdcEKxqxJEiSo9Cve9",
  "key2": "9zhSDRetdDnPAAfuytuQFmrkFB92FM7HjHq93TSiZCb9E2MdTd84xanHcM3XDnHJFuzvvExF3NZ91ZQyLsuzqQM",
  "key3": "4RDLdt4hQxAH9YTQiJdJSrC9PNwhThgwLxqrXNaCe3uUsfYBG4tnaUQmooeqe2wbK89UUo1H5urjGkjNAZVBhfVw",
  "key4": "3NDnesrjPsWbunumrhkq1L3va1kfTd8CmR7fuz8YQWDPSkFChGUrUmVDT9SuxJDF9YypvceiAfYe1mGkV4bQCYrP",
  "key5": "5EM2qqCtr48GcQ3FV3CYwbB5mYJGE3xwX2mCroewN1tMeZ8wjchQ2pVS3cafeuPmZxxEqN8H7N3afXsbZLerbW13",
  "key6": "3PabMBP1XR1SwCZWzSMoj4Te1PUMhYqD2cbdVS1revaquNZ1p21iymiQy3XYSRCBrd577GsxQxRufYhTDjT5wh7V",
  "key7": "5gVSebYa2wbd3WqbxCEJyuN23W9HFv1YKqPBJdF8KjxCzrbCWVVVHmttP8WwazNJsx6MtJteJ1z7GGWrHY2UtE6V",
  "key8": "2nbCmt6T14Jz9KATfm6sUK7SiJsVF5qWy7j7WvwzZrCLRWDrZSKeUt3EGVAFehgUnr8YZeoyFijj45hYSs7175tb",
  "key9": "4GVvwTmn2m7EDfRP6CPwUdHPKum6FK8KV7jthuwFvsw88gABv5MCuodHVYEkxbP9T9Ag6vBthUJKPWQ6BJdrR2vb",
  "key10": "oh9j9qRrRbaRLbUr2NhcbLY2XZUYx2SoQQRXsNBfGPnG8uc3bVDtMbwqTzcu8N43CYXKn7f8mJwHR74rahcoxmV",
  "key11": "24sr6hLNaH9ki7MAXRgHdXiH3sUmieNGWw386aDmgjzBUDYES7qimj4H2JHNuUHwFRT9Vvhr3FpcZQGhEGC34obi",
  "key12": "5K1Lw2xRWvr25ysFFTZZ7gggpepQZ8dhxcnEZsdaRecPL5U7An2rrSk6SESvFWZuSQUADpZmEXw2noJMcBsDtp9p",
  "key13": "ibpHiDuUvYNYEmZHB4UEjwuGaBi32y2NZTjrfhdhzVngJQwxs2BpeHQCLobnpLAjFvfq3qBPkws7Wmsyfk3Xxqv",
  "key14": "2be8HrUWiciAFT1XnFVqUm2FTnWetzs5Qq9p2DqUuPRcN3AqNv896hmM5zCEqaA65UqUG1meWgXnTmvrYQjPynAK",
  "key15": "3nRKnadHVQdSRSrmR56k6KEWCbMJsKW8Nz4jcf6q16uwvnAicT6XJeseKoK5Rgj12bpRPvNehrfekp2aQq9XSVcd",
  "key16": "4JUeRogJJ3iZFFfistYyoZAsbku5RsQ1dESLJ54BKQpZnzVYyWxzyDwx6TgkFgrzrnWemszYvwAvEUnUGSTqwawB",
  "key17": "2HbYbgdmPKFKDByng6rzfmPrdntV6659hkbzojh1RVFEubNZFPy3nEbYs33Qja7Q5caEzZcamidzj6EvncDC8skU",
  "key18": "5LD5bBfxBAnfcMcsE4mMuLuixUAUVzexqPGEFkE8nEJJvJukuAmSXN7jpSjmjDXBeGJwV1GVtoicuhg9eE5HTb8S",
  "key19": "3qQHqEBTUzKyqm3ahLUTzjs1zqmTXyYonzDaj8PePaBP4FNp5xfLCbYCvbHXGgUu2yG9vpWy5JJVjVudoU6i8yQU",
  "key20": "NrPGw6CBZLN6Cgu7LphVp9UM5iCGWbgmym1c6DYKThdUoRVK16kd5e4TGJjqT8pNzxAvUnnEnNLCH3d9RZ4cUrE",
  "key21": "uxLG73RvUVxQN6tr7cNcAYSMhv8jS9nUYoa1XNeCvWQGQ4UfeqaBiUSFAZij17dAivB2rovrEU24kZmjvVQJ42o",
  "key22": "vJHE65syQvpeXy5Fh1R1KeRkx2Ri336MpftctzTaFUrp2cJKTAuKQrST85QrabkUpRg4eRzNA5LbkB4NYfjS5UX",
  "key23": "33X2uWJSYQWXbTbsJZKVTypYjtrK9u47ALravGgaFNVCTjhi7VexWodyt5edZ5HFLp7XN7PYeR4zyC2kDbGjMiaJ",
  "key24": "ogVESTFYfVLu25EJL1S5g6AeVxwW9JFVDxRVrkSWm1RioiHLhj9R223w56PyEw1xnbNJ4PLeYKyLFL6nK8LvbS3",
  "key25": "37pbwuvFVQHYN66BzHXqK4qcRqW2ng5Va8RNvTHyw9m2brFjtSE2x5Ado5qXccCpQqo8tRN9nxFkzr6qbjugQnw7",
  "key26": "4Ky1S8L7Aj4yMcydg1FR5UFE9P8Pod4U4mpfpYfHaPFHteLR2qj7T7eCGTb79NFbc88MFoUq2qNv4rNtRkZ3x3Zb",
  "key27": "nwpJ3bQBg6vK795Ggtq98EGV7QTs9983jLQHzjozbTDLhsFBytnYaveqwbawvBjKftrGpptYoZ9EfRXgANk7NJZ",
  "key28": "jqugL49NHStYaNT3DeimWbVAr9PFF3ZAmCh2tdGefSUBdDywW63LyV6YM4JsqsGQ45N1C23Rykb5YuB1Pn4iuNs",
  "key29": "8PxA8bMAdasZLRwSqhUPbpRS5WJAR8bPca5exz6aYmvhJ1UTkqa92me2MZgmr8rVNK3C55ESTR6LYstXGMt1rBG",
  "key30": "6pVbv3fySQz23nuthbfKqvwQzRkuG6XGPX1vBsxRxxNkxdHfrhzr56oD5wTG7NHU4XVDURauXeeb53J23rGU5Yt",
  "key31": "BrwFhGg9g2sDmZqgp8oEgHYanqJXGfhGbm8LLTQvvB1VZNbzeWa9xkbkpQ4Ln4XiqhbuwD1qcbjMqDcTpxFE56g",
  "key32": "5Sn4N3eET2sQWudYUWLmjT5FKRdZwiTN5UBWm21PnSqzXAu6oCJoQfKnqHTuJmiGJE1RC4CKadbLHyLSuP9juS1u",
  "key33": "4Y8tPYPKZUsarbNFZsYKb5h1WjT2z7emGvmFaWzDW4YXMxVDp3L8BhFbqTQhGXDHLytkrTH6egJVA58zCPebSpZq",
  "key34": "5Bfxuc1ezsBrUgmndZPkogtu6ZRLM6QeovTG5mKFaS1hLB6un1BrMWgLDBr23Q5kKqAhsMHnoP6tehMLBxJN7wAv",
  "key35": "4eY2qasd3aK4bHUxgLLKhEhecTcpFRBPJWb7SPVgCazvSEXkjRDDWn87baMJ6Kh1XFx1i3AYMPscbF9hvvPWC8Fd",
  "key36": "26k7qFUed1Ejn9TKZutcqW8RozoTizivRfi41pxhUNkNEv1maT2BxRJkC4qGt3HvRE3cYnczvLbT3ubp3vhDrt7s",
  "key37": "3X5YFGh31fuhewQx8vwLeV9wD3iypg4pMx5vE7gcGbBf2XEbvJyZTtHSjWifMb7iru5xJ8mKXprph6ogH88xnF3Y",
  "key38": "5UXREexm9fyjtVCGNvzih7uqni7JAoG4rZ9JPWvjWRpEx2b8MnLtpVbE2j8TuFkB7VJrx5tiRtGGVkjuZeuC1hkp",
  "key39": "2NjgeKjvAbShC6ZPKt9s5hB11G1EyTRQVbKz4gb1tiizz92ubUDqvqRRmZE8rSqbVgMjcEJ6WCuf7NgUBRCd8akD",
  "key40": "BFBLk1JPUnbe1aGPtAiexcUbgTNZwabzvKQa8QRWP7UFUFfSbFX42L1STDW31b3My9VPS1KFJfLFxNH1b67n3ij",
  "key41": "Xu9VuL4koBYYxDYAB4pwZVyPc4e2wqJNMM5z1aoFTBcmS8rTVuFupuQotbrk9BAaMcwYnamm9BwPNyvWypBA37m",
  "key42": "3yh5K5ZYUX5CKXRchotBDMfMoNz4DdKZTVGsTRF4VEHohNL6bRuwcTgLVf883zA5j6gS88hW3E4vRLQbFxTGuCzK",
  "key43": "MuzwwyHfSWZTbaVZPCwawq4iKqHjCMsHofny9sKCYZsFK2r9gt7t3TibcRrAuQw519Pr6dk1TfN2f9MpbHDyh3j",
  "key44": "5SHy1Tqwj2ZRCxFMnt39TX5SMo7CAvvMa3EXUhvQSFR5mrvBxAEG5LthJdbmM418ciXDRK1AY7YfoqaEbEWhEykk"
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
