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
    "3SRQh8YVNckCY2zSFiaAGYtMxFLoShqU831FGSzB3NfaFhVfCdiZmm5d3VLoKQCjnLcXmMGcaCbCcvdff1DyTYbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64xGdxoXAJMZsET4cLYvvhnHDwPbqSxXsNTctbFBQHTHksyeyow4zY59sf4NTYCAfb5pHJ9tUbXw8G6hr84uZejq",
  "key1": "3WPsLu7SdKhdho1NN9cJhAJgG6p6LUSh2Q3BYxrupKgwTGczb3vjwCKvh3hwK69qA96sneiP3NXXVDz7HV9QxcwT",
  "key2": "5oSt2dLDsBpaCBXHD5pV7gSkJwaBtziz7w89eBTvMMmwJ7CaSkQM5idUVXNMNeES8K88jp67STWzTXGKJWfWa5Ka",
  "key3": "ixXf7Nj3P7q8uyKSizrzRVPR5AYY1mM7vbRfFNCyUP7njKzE9L99Xi2VShfuxeQXUrQ9ky5DdR4EEQCBmBdBN2w",
  "key4": "3rXiQmLE81ZBkVNp7eHHeCdjF8v3DAPXgCeoxw5jizSwBS5Jr63FimTtSxQtNTS1vjxT3JH31xkgPVFU8Bc6d433",
  "key5": "3k3T1bTkAJpKLxk8TWefpwT9Z8D6avpXBJyDVP4L4K57bwUjAJ7rkJUQ6JzFjNsjxXP7f6RjmnkRwq2EdeJDoNYw",
  "key6": "2biXfuNHtYSeXXeW6okLHxwDmpaPkjMvTJBiY5ByUTh2XteQDZ49NEKp2oNBqee6Dq3susVATfWeC3LNXbAvazNp",
  "key7": "rVLgN8x9fV5Hwsg5SgNDri9jbPuts6nzAap2kjJTNd8pZpbzkJBamqgZ6EHsX2qW6pCweY1y5PXAdQmMZhuprdy",
  "key8": "5wq4et9m3hDhJpsE2jEDBNvwNBxHYVN13yW7axctBwR7MJpBzCjPpeTBdqxWVqbYDtkLq3S99jA4f3VcHJpxZbhY",
  "key9": "5i47GjPZmM8GARFj3tVYaUSviHdWJMD3ZCGemdi29FUu8mXJAX9fQrtr5RQ34VYBWZwc7B995uHt3XxpPR9bBgGC",
  "key10": "2HXxCzzemfxoFEK1Kh4pBwfymJGLwtvGKdyZMb9Ffpmo1L258RFKQhtRGCeuZ4ekmGSVye2yzrXBbssYJsSRp4uU",
  "key11": "3wu7Eb5kjnszSn6VHpBAZYRBtbd8foaGdY7cwmBPDw6tGn13dM67Jbs6UptJSBkyk1LXGXenGnDFmjhhLSmmo9by",
  "key12": "5qfHNbp66MziyhrEGb1jX8zBvd1Ruvajrcp3dwuqUhZvmz6SxmrrnLBPPVHzTrcrRk2vDC2W4mqzixb3mNTVX2hD",
  "key13": "8NreDyG7s5DL2n793Rxw1SEgrBWTyErtukt6CVJWqZTwdF493onNLnCJNnWQd2JQsKeDW4h422gWz23AUaqqyxv",
  "key14": "58yE7ppGNVzP2b5MBHWZEAksosz1xg1tf3zNDxqZvDgjLv3DaJ5Grnqw58qgvnfivjYNme34TG992o7i1CkCxwYo",
  "key15": "5iqg29VKqkMMnyHZ4ihZvtUM9o3GF35EqffugnT66oEUmkf6fmUnDh8y95BftMajebyp3dvZJWRoWXDWJyDrPvG5",
  "key16": "2Svi31wgQyFzPzsaDacGBg6c2zSvq4uJ4AJv5C1PMQ6VpD9AGquRHJZWhgNN8cYNcJ4bmXpgpYU2swtKajBgvLis",
  "key17": "3iWB4etAxizQ9VQFkHhYsdic3Sb9QhQj2knMxiAjGK213QnCHtzJnHw4UkavBsqjQcknrqZESf2R8DUjFrGea6E9",
  "key18": "5kT5JCdbT4xmVua11XKDtpREpAehRGY2GbGQoLuq3wtSQHwphoTksFBzoAqrT85WUstBperAqWv2kqkxrLHjusqf",
  "key19": "D9EoBFfPeTFN42pQ8x7LNYMHzamy2jkW7uhMJzJB1iT3qWE5MUPxs8jqcVNT1hUYcvWB6FEB1DTMn5xkbd2SLcM",
  "key20": "41Lnij2nh2Zw2vyLXtyJusT3Wv1nDESUPChqZRsUdZzGezSGiztJSM5nuQYesSgN2kMVNqtZBFiQRJvMReZtYsuX",
  "key21": "JQ5rjdYDtruAeeGhTVUefd8mDApWYURFjBryLus71r9T5zqxYxrmCd1NpEbgDxxtBj3QrvT8wpExza9U2C98nLL",
  "key22": "p6vEPCSV9gNujHxFxdm2EAuuNT9HaPiax5XTMSUqH8WLQhgTBisdLfFTtLqAK4fVkAY4SCXtGPZ41cda75DPXtW",
  "key23": "4zL4xx3QvzvUJ1qwuVJCZvDMNyQ5z1Em1zUgkf31KPDQamoR8uiub9HAPqtfCJNDim2v5mcbZN3zHwvi4fY7ZEov",
  "key24": "4vwquWw87rPcgyyEzU2X3c6Mrhx1ToMTJHSrZTvWDydt8v3LgAhbAjuT6ZEQ7UczpSheLyc4RgLowdJ3PRH5ywLz",
  "key25": "4bpgem1Hb2unZvvP59EiqKE2sV4kg1MhD4jsNtKUd4fJ9ywV5FB3nWVrgp3JTXpMaN4WF9iPmrYnHjZPeQ6o1LF",
  "key26": "63M17mJ1AdZvUQbhDBQh8TH4jCgG3iMzEwburrhY9wBo4qeWtq1Vo7pjXtVJjpPfNaX9ss8SL3n7D3CMDhv5G5NA",
  "key27": "gQdAutGTEbVaXhhUkYndeyjLiVfyxvGqWSomK6RGfDPpZufYCGmEcRhhgnG3kbrdXSmiU25rPUp7SQHT4HfFdSW",
  "key28": "53vAHKpUcimCsjJqyyvQMiFGQ77Hi96MyyqGrXqHAH6N6EzUiWunkW39iTQdEHLHCAdX3uj6BqGDg7VRnQ9dP8mi",
  "key29": "LSCCaTCbsJPZABFjCKK7yGwqYNC8T1eUWxrGh9DDAF4wRUWp6M3iYv99yJ6vz7QJmt982WSvfgveVkyimMhQtxF",
  "key30": "48FWeR4JTnGDnk8hE33BUseCKf19WpykN123yzregBbKSfU8XZJbMzEkMLsjRMwuqeU5NcP5YDyYUwA8VM39FYBK",
  "key31": "534zxXUpJjNpRMz8U5P7seTzJ8CNAb9in4j7xxtnGHQB36Gji5iPdvFugEh72SFKDuTL4W2fXnczoTZCiWjz5Fzw",
  "key32": "2XTpPQwgwxF9YxeB8rB39PogFWTe8J4MVJMEwM9P98ZNDGrNZSZpJBKfgZoPNGMq4PhJAhMTqnpvFZbdB6MRhrz",
  "key33": "2kwwgiRE8sap9tp9dpSotkrXo4fQ4Do1b3ZPaUzv8oAsZgyoJubgnwxHvqMBkxv3BXU1s5zpvsMnve3JgnBnG1co",
  "key34": "3MfkYhMzz8QuxdypXdSjXb8MXwm5BncvMvjCn3J3wNSHjBeoazMqtLj1uTpuzkjhPczTqJQVqodpKUqgiKQFFMBK",
  "key35": "4uSuSTaSbG67bhQ4GyxFe9HajKeV2uVGup1YbLXNT3VNoF8h5eq4fWvSbJWNVZcCNrGfdHiUC9UbHHokdvxt68L6",
  "key36": "wj5Y27nhYiiVPg6RS84uU2n36i9AFZS1Fx6Uvqba7fm6CsXrn46yFvGUfBzRcfhUVzuH8W3vgEJoNYyXS43pXyv",
  "key37": "228SesmaWqL5q4u59AfsfrRqHGxwtA96YAQVTdbvshD2x5CfwarC1CXBkVgs51912GNKDxCKr3wpYkQnZhX7uxWP",
  "key38": "4GXLgf13wR8KaGs4QK2YvAjdMMojiBrz2vuYn5pJFCXFALim7ABL8yMrwp5A4axL31K6fjqy8i1sQuZF99VphmPD",
  "key39": "4GxfQ4SRsJxSEGTM67k1z1VCqRVR6zSF47goYrUnp37LieKs1aqaM4dEd51FTkr2zfYeZ6GwWsewqRgT6omZZPNQ",
  "key40": "33icRkX7k2S8rJ62cM8F65ynooZWpduCttAFGvR8oii2YgfnW1rmZXHbgUqJxEPPvKoGdXGNJQ31X2RCYk84abQS",
  "key41": "4kEjATQWUQPbLi9KBPcU8rViKBkJmhDVK4pJEnTjB1tqo1y7D4zdXXnj9gCmcruur81Ltjr9Kqxvfvdt47t2718h",
  "key42": "4vZDw3w3iBvMyNbNsm1rY6Q1RH2jebtbrSNDh8tSdGpgibYrtBiFC1o6NmLxPzevTCjprPgsCRDFrqVsZvRd2W1M",
  "key43": "5c8tmBicdFAgLwwHLUiAiXx7eYx4BYLqVbBa72tp1622LHr2Rrm4ScUK4zAj35p7eymv1ZncEU12y7qFw7cuf6j8",
  "key44": "4yCethunpsFY93eHaAe2V37FzQQrcEbfPszrjTVf7u7zTqtnwrLfwGBtBwQ3pe36gVLpTPTEua4S8ZfPDCc7pB4g",
  "key45": "32ETPzSFfoySNP8irnTUtogBscynfYFeJRi2DVW9kVQX6uaX91Nf26A7WpepuNuaXEXdbjhH6uN2F74jgZZQHHv9"
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
