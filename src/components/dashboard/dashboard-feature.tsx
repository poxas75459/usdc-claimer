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
    "3me1meiHwZttrsKkB3Mat72vAbHRbLSTXEyrm5Q5xK6ni5LCP7rWJbdERykwSgswN6HoDXFXbLABVDmANWGct6mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pWdSNN998G1USER89zUvCnVc93C3QnGdy94GXgPtqsaXCLnRP8z8cDE7ceTLUjXdqQ6FtgGPZd5H8QEf3QcbFC4",
  "key1": "xEYR8QstjWyMjZMnYorYvtUQaNquvY8vtv8b3zfR8ssEP86eZMJmeqKRh9RN6nZuT9DBqg6FszsFT898xpBY4c9",
  "key2": "3TkZX833LFtkRWYGBYBzCAjiQPzKkErDA8MJkMNNF78sJxsmPMpnLC7gKTcHhc7aWppJ4gpaRyeT4H66sQjiPnt3",
  "key3": "4U9RCwPVMpGyDC8DM9xsfo9PqWmzWZBLZBF5GeP3K9oAtz7xFNfFgyiRmwqkFLRQ2GEMXzr5vmd9vHfKcNR9CjAd",
  "key4": "2sGyjKsbxBTgKCzYRXqi6XYafbcTJgUPmzmFiBVLrCdjuKxZPpTm9m4DstT1W5W99ShYSnzBXLKJbqudA47X7Drd",
  "key5": "2akQbLuhbMZcbThjCArxhsYS1Jhn66ZcCKytYgYNnc7nFLKqaJrSDoyRZg3UVCojAa9js6SMuWmLjYwHE1DWAmZu",
  "key6": "bLbNy2S8n2V9h4JBBJbEnrGsLM5MKUiD1aAXNZcwswTEHNJ1DJbNXvPFP4Ey3nEJ16sAJMi1i7vwssigUZ52Jnr",
  "key7": "62s3S1FWJLxE9C4pqJrMxntZMrxUnQ2J1msEuDVRWmmhD7K82hs197zYgpXYQUiKQriGVDXGNwSzsYrB8JaHdqFf",
  "key8": "4UFt7Lh2caQ5RrUhgvrBwTpDqiQo9ew8PcKWt74eaXKDcrG45PznvHdvaknJqPR3X5HPZkteKdXXnR1rfNiHf3JV",
  "key9": "5rJQxxq9MfevCuQ4FrUsj7Kwt7AqJrTJSzLrk7bdd4MXn6mdTBTDByS1Luhkba687QK6xUZD1ZiJ4Kg8xPXYzmae",
  "key10": "Qb4jYsaRqvgm2gsDqifwijehms5pVPNbNLm7mDuRnvUXBvPomtyiuQhyUoWfqHwB4RAfMoEhSr8cnvenpiENtU9",
  "key11": "2zowMEyme15VQiw2QEpSpJJmANgApbYx3tQfD59XVTKHYdyPh8g9Ms3Wx4zM11xVyojepyojc67KjrdpXBUyxZ4u",
  "key12": "4YkmR8SE1bmViWYPEbrRxdiCwwZLYXpjkgpoo9JEYM1sskZtGSenqbj9j1NpjbJqvTc9P9UJWvJq5j1jYK5ZAGuT",
  "key13": "2tnkQhCA8T8g5uQkvrDUxQ1n82rkMafQa8eAZyLgH1Zn4LWi8U4rg9FivoHyKFCTNhssQDG9Qz4DnDTTjAWXs9fN",
  "key14": "58QfQbuJpyXqoAX99YvWrtvL9uqLqhbfsBZAQu9JAapvBYN4vabmdJHT8viRGspGd8XGX3k3eS34H1JCdbkg84MM",
  "key15": "sANWLJFLf2ufSqPPEjxP5XGkbvt81LkoNyDircjFFccb2MnCJmDvAz3aKUFhXJDTS3zNs4ytSWATGKSdqswjoMQ",
  "key16": "2sV38LjGJ33xYnQiR8B2FzytdvGbgnA4UjgdDCZtVgh4NRijEncRHkzSLsnTiE16EywjCekbNBYyVX5ggMKLYFQL",
  "key17": "JAxdRLWr4AMuLo4aYW6NKwYmgPF3KwiESu6mmV2SZByEKQqs2SvvHhRF9NfoeQkqDYTSceAhXyU2cbxVcYpeiqZ",
  "key18": "4DhANEp4AgUe2p77XRssXWBx9Q88wzJi9KbMJfWbRsyj3TefG2wYTStpwmtfUVpd4LQwsVyTL6TctYQQJCJWGwNA",
  "key19": "2mmyC8Tr1MVN1mS1h3xNf4C36qFoB435dLDbNa4SjcLq1vsKR91VUncCMZPSiBHkC4dx55oQMYHBJ3zyPqFUAjb2",
  "key20": "3crVHikKRK63jYCY2jCUKzxNakuHKJ3eprwUx4XaE9zM9ero4UqL2xfvCZTbP6GdCshqEbrAbgeFY29MnXSbnWqy",
  "key21": "5ivGQoNotF3DbTyaDCB56dUqdgAbMLKDaQxDiuzGj8GBE3J8tp64GBNAzLsjA8QZEVRBvFTxzsYkHiECQhSsLH45",
  "key22": "35Z7LA7dUkCv2VWoyfKp8ERXmiNk8jZgE9mWWWhfxUnbZ6kduQAMjppQHHB23CdNtJJk8MWWkJb3X2xkvWc3GHu3",
  "key23": "4L5Qffkcz6Qto7QjpxxTwWAwcPSngDFiJi5Q4g4Vg6m9Gyx6dUpbc7rxnW9KYz8iRfmmgojRwb1MqW4PCGVGYuut",
  "key24": "23Zxj89WejvFStW7GPbxGYvZoeKAbjuGVZBFkNTbiXFxdh6EpR65JUmAda4LAkm3PFdQa8qEq15VpRMuBmTuNNQN",
  "key25": "Va2inFbbTmVxct4TWfiXBbmK8JP8LjEevXwQCvzjtDQxZPV28GRMjS6hJy76fW52KAxN8aGQMraHoVwQXT8Pn6i",
  "key26": "2JMnKCMvAwjWT2uoLAkWtHmDwTLLK5JsR6UFhaET1ku4dmBo3NezxZDPN5oZdriGiPfiYMJery9nL2soDv83S9FV",
  "key27": "5Ar44imuhv2ML3BargPMEfaLSAfbGKDKjpabR27qKn9s4koY2A1rJqqXhT8Cf6iiv4AWqKoTcYfHGNdisgmtXd5R",
  "key28": "5oZH8kvNCzvwitemZfQ3YqDKTUHJ4pa5nJbYyftscGSgoVsz9u3TnGqoS21AVrfLcvbtagqKEriP8qpD499dBf3D",
  "key29": "2VZooSRR5cD6kPbFsExLPsizkrshS1cXo5YSufbhxjUe59P1FDMQV2BNYXbxtr2DLrSwhhVyKjm6wgTv3ADTDXon",
  "key30": "5idXzq77TQX9J9wf23HiDdC3SdyMauXbj18gMWVKqVvjzDgCw9XbxgABRzygYZ2wtY5sBCPSNBVdjPRGR4xmVtFz",
  "key31": "2pmbit8EYFTFznFumZH8SzWAitmcXYhHDPaPSUD7TCGBGFqxZZc4Fure9b1H7ZrWy44H5tf7h8xiVtPgNCYCgyYN",
  "key32": "4DPUoqfn98wFoQCwfxNfjZLtPhp46L7GMVkxiX8YX5PxKvRAnKPuQoAEegk4ohT2QCtF8shRQuHpZvA9MurUYnhh",
  "key33": "3BUGR4ew6wpNvhrBTjQHb5vTZRRbWnugQ44KQbS7DY98t2D9vE5x5awhKffTqTWQiWkv9m81uut4vdDnRosnzPvQ",
  "key34": "4mAvZnhJCvCxkD6syi6vVEcCF4Kv3AMD5M8JB2Z3aYUoF6msntxAXYsrEd9wbKdsFWc4TMSnuVPZ14n1A2WpaLF5",
  "key35": "3UJ1Q2FaQvjE5tQFamERDniNcECPNV7XW764KgTkCqTuGYGWWwV5hRG65Nw84GzmujsXMvq1kzHqstSfCz9DL3NV",
  "key36": "3h1vmLduM6peL2JZTVKUAsuUTofWxFRMPWKoKCuNBWkTFmXYsDf9ZmbY2aJoXw7uHrthqGZm7HmyK9utC8JkTmJJ",
  "key37": "FZ2ui9hMhxycapwqonENmbyCJPq9otQKdevTvJEyGdYVTW65pNgjwjaX8iKQxhuzAjHERTyDBTYuB8QJGGTY3Lr",
  "key38": "2q78Ph3KCJ4uqMK4X3aTh38jYLPprs24Xw5QVXoCu7fnxAuJsmBaYtrWb3aeUFQ33YspPCJxYNi4viXFBhmeYXpg",
  "key39": "4oqTap6uwavpGooeAVX37nerbfRj7XsTP2esaRQv6w2gXwbqaBZEkqkEhV3PXo98wkkKR1bvhEQcQ9sVMtHQ5rue",
  "key40": "5qDJ5J5tWQ8JTXHwtfQQBv3MFBQ9Dt8yWMwh2jWY4aCAjnHSP74z1HmKprCji9xH2eGRsLuifZuWjvu1gQKfadRM",
  "key41": "JZcBdSEGjVa6uNaJ1FHmz8vUWoNiEzCnErtBG1DimPFy8BnJ6mjEQP9icz6WtSVGwEkQRfNDatihMEnUPJ3aei8",
  "key42": "sT7d8Jo3Q8naEevED1WS7DaDTMnTGPDM1R9jWGrjeUbqvx9ZXt2KQdwZq4rAbh4jQ8HmVNejs9fsVt5hDZTBLcs",
  "key43": "3NV8ayUhX2cbcp61x4a6giVzorPdMce7SrdEChjmWtf5npYyX43KtrRBXvwKGJRZaxXbkrhg9ZXtVr8952L244ke",
  "key44": "Zur6SGfUQtfPraUZJ5TMQex3Jr7i3mAcs15EkMrRYCy36oowQBvyBLfwLTfXTKjCTwwBu7h6nFRJKdVZ3pyZsPa",
  "key45": "BzmF3MTiDSaj54dN14SZfGUpczyAKbRszpCXUARoANnmjGt24ynQWyH4KJ8j916sy5BFtXrohN9UGW1ZTEPVFyv",
  "key46": "HbHMCjHXuPsU8G383MSerHChYEjzRGD1JFB8eLyqrvBaxz2yy7iQM9WnZaUtA6Vj5Xovzp4buM18kYnNKUFQpy9"
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
