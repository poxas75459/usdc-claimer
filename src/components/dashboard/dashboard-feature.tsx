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
    "2iDnVYEkbbADJt1qCQfBwyJkp6aKqMddYm5dxDj5CycSnJmFjXxZNWVuKsB6FSjdtYZKfmtJH9w6ms8j2n9DTzbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44VSo5q4KY6zzfTdekjHgrGAPzt7tnEG2Qm7ef6hYJXNVkdWR5Sy6h2hYtq9SNsTZH4oWntCvPCQVZ5N7bkqJ2Ge",
  "key1": "626Ynt4vicoMuTzAtjdCDNQSDPUD3VQDJoDqKkL3aLbuoAU6ixLy48xG955QEGGVtNGu8SCQWNGEyJj8U6XAstJF",
  "key2": "5EME3aPkp6jsAq6jjXxQYWHTNdfNoAaA2BX7pzwm2TqhpeUvqfAV79upax9tq3YfWuCrDu9ENky3tYQeynsmTDzz",
  "key3": "2Z4ZBwXLAzRZvkvZYxk9AhXsKTduHvYe5CvcJnHdFZ34Y3eS9DvFdoPsi84eruingiH7jWbQ93vasmADsvDhRGso",
  "key4": "3YKi3GDXgJrBingrFq4pnQEWFkWGLYYPESeeh9H7FYCMw1RgHBzY7MYE4D4AmcWJCAtNCniq1QiyGH8oBbohXaiB",
  "key5": "4GLjCANzA7aeC8foTXEhbVQTQwp5WHT596jUqXGrNvPn5mct37qvDGBRnYZevLZis2xVtUGYdyj1bjjegn9ptMCR",
  "key6": "2gxhRmMD7yBEqQzFmB7uCQ5nFergUaNthW7xKB9PbrJoi8wzPocRoyowirxYpBvjywS1jYM3QcTGPJKMp2dKELU5",
  "key7": "5AGz2ZXr9RvJbRktQq3unkRdQSmu4NCEuHFtP6ascu2jpX6v3tCEkJZM6Ek9MDTrm2eD9fViGHDcuN6mkCcBSCzM",
  "key8": "45DHnn7D7MZSpmLmZDPT7cxQocBUctpKaeGJWGRCuCVxe618Q5aLfTiN9M9p88v2DdKsxABmck21b9xyqAPj4GpY",
  "key9": "4PsiXrEufnjAG6pmf4gsHwPmSwAgzAcxisWcGTk2Qy5DvW6fZbw7vC7NctBxGEX35fZ8BHkaKUFWHdD4VZDSM75H",
  "key10": "4rAn5MWbT66yrV22rtb9FLKRrKH15FfSdnP2Y5UEdMvuEsQ6mDpSoUtF19MZVogL2kBwREFmTT5VR4YoxpefWjYr",
  "key11": "4Ta8UGYFfGQbtfjhMVokQsTP2mgzRpAwgjeo1YETcPaxBtcfKCnwuWvDWHuh4icYTi1rMei4d84t2ridU5R7V7Dp",
  "key12": "5v1HWhDBLBK9gbk3HTyk4mBL6PAdcGydGgu1LCj56E1JwzaTbU2vofgjq5UZYuqG68d9xLkUeRSFbUKHZAws2kQz",
  "key13": "3tbBePSuxHHFWq3fsCt2HNPudfsU93teqaNyntP4YTg7L8RZc6bvfDfxRpqwPoxB37QEFFTerFC7NmovomMbz12d",
  "key14": "yEWRiLMm1vX9WjEhEihdd6ni3NDXPcvYYLyA5ymPTQ9F3cCPkZH3EK2BaBUBe1t2DFKc6PinRA4pJWdZd3Un3fS",
  "key15": "5LwAGdoeTTg8ZALxdZgLqKrHiSF1X8fYj3ewB7xUCE2gYiJrxvqv3CttHLHRQfoMJ4Fvqk6ubyutAeETDREnjLoz",
  "key16": "4Xd76JvYqEeNUfufq8jxNAASQHNQbYPHa1A699EaYkTA4y83qF67pzJVunvowEangtynBjG5jPdn456Uhf8B9E5i",
  "key17": "5mbDnFoYVL8wvWD3RUF4fLpRibCGzhRdniRJAhzHwxv5awuMGHdfF8ZmwJaTTubuR9HKLY7ivtTx3KVdV3pPe6JV",
  "key18": "4JUmsaTfc2bFwuPo8U5GSpy82sRv2Eo4rMLVugknxTNFiQbrtdK6gsP66h77sSRF4hvz5zLCgyMYc5vPTqBpN1pn",
  "key19": "4jPFzufzg7qWTPzY7Ei3tspSRSbduKc13Mb2XJWQGi7NxuwAiaVtRQ1C8VMcoyd2qP9a2HuVFAmR4BNj2fWedV6U",
  "key20": "2RH9C1Nz6bepCkpUDgsYs3Bf8mPsisiNHRDABMmvNAC5ngMQwaS5DJ952SA37aQ5i1vmAwT2QbKdy4r4vuFLqy3n",
  "key21": "5htnUs1QSgiZUp7hs4qozH9EjxqMzXhKTEXgfi9BDbatBU9S93nxd9H9aCHXeBEyQXuCz1RwuWsWLmCE5MRZbEWd",
  "key22": "3x7Bs3TpFqNwNYUqPQD77rtyLJmfwb5RDd3XDSfhTMo6vUKwTHwrQDdaQRrV7es2PmqU7eAPZBb4yUMc81tFkd5c",
  "key23": "5so8LTNTchW3wP25aN4wME14WSY92sQefmkXeKvscE45q7RgYdUk18vtYqct84DDxQw1EowAkmRRCLkWLZF575oU",
  "key24": "2c8iHpi9Tuu7WtmnKyPS2pU4T2WZ3VrSp9r1rmzee7NXZ2DRz1RuLGnD27RGGUZHiePd56V9pb6DPmGefsjdNCQp",
  "key25": "4iEmqbbzwDFQzvRxJuVYWWQa2UBeFNVoaWu7SReiZXZZHaDvXghapjqQc2nptVfTuRuaJLKnGKoWRGMo2HVYiWtW",
  "key26": "3ZsmxzTYJQYYutH1AHUorK9AGccKCZwnieYExq8n8Gyo61QCLGkRyPNaBBvHaUUkx9ug9pphjTdhLoKTB2oNbYW3",
  "key27": "4M1VNYLxDqWLG4AcUpuPa5cjWr7pxkFyZhrhF68L4T3oLWRcgrWcQgBdTYfvBVZnytHpfa2w5z5LvPnCqfT3jSAV",
  "key28": "2Q6VYRyyfbUQK9aDQr9PYUUxLgtwxScJDEm1RZKK5rJq5PJpPhR1snSGKRcKhKE8DX5UgFL5sCNKDo6BQqpbdgTs",
  "key29": "5n1eM6Rh3ViZT9crqdUuHybkuUd5gjJgwVatdXMVq4ckBXy46qQ7JVRbHHggwUBAW8xxUFRv827UGcutuJB4bZoA",
  "key30": "5HtWqWhCLBVVvhTjzfgSAd3qtnchdU1TT74q5xvja5Wa4evJXX5JAm2ubVHJ9qQYzWa4V6L3NruMho89bAvTBsxQ",
  "key31": "2BujeUJVuK2FFwZdGWuFyBqDkeyUFviry9Ag6hv67WM16nursgikVCG1gi7qRAHtjAFjLCL8ie2gcPvgWnuodDid",
  "key32": "3z8CW2kqXAmNn3a63odaqr74EJoQbyATNo4Xsogmh8GcAUzaH3d4MGti2tKx4iH8oAH98A1Kz2BABsZsRwPaqrWL",
  "key33": "42qNaku1AbmakDgTyE62j7JcF7bXv4DmWri4Ayx7DXWg2jkCp1B2W1UYMWeD9dzJXiQnbMqwoCp6mLiQt3nmhUmh"
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
