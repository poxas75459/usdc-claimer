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
    "X3fpuD2RSU6cDeRuF9Zr8rVPvbTdt99V74dCa8rHTadAXJvAU4Hd8A9ydYNuJjZUgLd3rD9h6XSCozMSaSDvXBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EvRC43P61csUJACHHX6dPDRr9CnfZ2qEx5v1YPFEwLtzL6BLex4rXTgxZuVbm196ReRJhmzNk2tDGBcbrZZbQh7",
  "key1": "Jx3bkyjHK3q983u2xNFJhh4EVB94b72qqNPz7u9xi28cz7SC46btoxAhE2uh5jrYQgBycfMktMLR9suwpH5xfHb",
  "key2": "5DVT3tiUKKf6WN2VJrk6KBz7G4Ywec9vGcwBT7bbppjjFWySEMTQfi5MD8edzFFKimbxz7kYNT4WF6anJuwxqEgG",
  "key3": "GPUtvnVG1kC1TqbB7dcwwhNPu8Hh5XvwvCoFLDYdrWUmCUyPMXHb1RURPrKAo5waifQJQrQ2mSvhYqVMnUfQCt5",
  "key4": "3mNyHaYwM2JEG9fcVRduJy226TNtkHJUzETzvLMYkb68tub8SYMoYd71FupjEjDdwUm2b1zhRHUM5S64Jkm1cjaX",
  "key5": "4zkrZN9cQiqdESNPVZ1YLGqG4BN7DYMWYnt4DmcUZgoB3XTLzHn84wzNn6A2311sFhGnVfaifjWCzj7hw7tTjyJy",
  "key6": "449UzcWU8sqTSnvJgsGxychgi4qS3Jhimy8V995mUWvLNwD7ULWCBivedy4m8VMRHMsyboHSqYizDNsmcsCaLpkH",
  "key7": "PpmkjZSScCFSamnyHdENnvqdgPhqr25Lcg1eSaB19QcWAztvu8vUKbua7oHs2AC6B5ge6zAXipZ1Ac2ap6en8Gz",
  "key8": "dyeeFrEsr4aLs4fypVwT3fw63PX3mEpgB7LifwPh9FbrLKkrrKvU2ACpntb2zKo25iC4baEZ2eZA28EoGnuKy1p",
  "key9": "3TMTE3mCPd3yNrUMLanKheGcYdgVyzE76q6Zcogxk2q7znNwA82pUmL9PmCL1zPm2F48LfiB2UaFAQwc179aLbuH",
  "key10": "55pnDmj2ZcWsiJWYTHthU7mNhdPY9Zy3gZLSq5YvrUNH8s6oB9nCYEnBBVmV44B3VWJALwfbmq5EBa6A8DJd3Dg1",
  "key11": "2gZX3XvbmNgv8piCMSkGSsTkyBiBJGAm7ufWY2R53VMn3xxTbpP9Cpd1AXRdLPh5qZxffgrdTYh6MXGwSHyAeX6j",
  "key12": "321ypreHhtXrvDrqZ3dX8shTCsnXbER4mgFzRzyDCiqwCKAxej14jsaQKCNPmeDKvexHy3JLf3hcgU2wi3rGTQB",
  "key13": "5hJk6M1fymy4cTd7MY9kHHfRehZMcW1ZXHQnGdy9eFRxXNnns79kKXkoGoVhJjfbj9noY4ycZnXaM7bKz2Cxydmj",
  "key14": "5EZKBATR5iKt8sPPBM64JiMyZsCBMhTGDpW6PgxzXxTfqPxcbc56eCciDSiVkbf2RQwLocVtPw7PM6T7CBaVbNaN",
  "key15": "3imaEU5sfyxBjxzaVPNpVF3j7EE3qPA6HyDV7KDN47WXvmzBisUyAz3pT1qMBgXC8PWsrHjhzVmWncgairKp8pwf",
  "key16": "4aVkhdEoQcNiZMZfgHX33gyRF9BzRgkkPp48xn5rAQWa5Xeh8ytsSVFgG83zoXkh6Bv6VwUFasuAUs8h7N7ASLNZ",
  "key17": "BGs3rEGa7MTY17PknzTwN2RAQqBkLXF8hX3E2DeaeiMUS6xcxbQSKxPEJkbuUAejbLYW8dnE2L8WDXCDwCYEePP",
  "key18": "4K2udZ1sVH6BEHMwVsUVn7Ro14VpNThxAG4JayBv5uPeuUsAkBELt36SivAXNs2PxKtewwcxuh9u5c6YAoYmpcZw",
  "key19": "36vaoHDwtWpQX7Rt47mHBricTCbX5PyX4gLiS3X3MJ63i2N9j3C7HR4wHXPbPiXjzxx7PuuTq2ZHVJAgGMsup27S",
  "key20": "4i2MyAKDf5PBEjcPoX5y5FyTvRRQD4A7tZWmpJH1cezp3w1Hg43BYKoodqiBVPFGNt6Z7XbQAvUByCXWu45WwExS",
  "key21": "3eDqwwpoX1tTQiACTYY6foBKBsuRdyLN37o2wNU44fM63fphp4SpM2TfgchLLgJtrCAsvJ73xhFrrmaAEw45jU7U",
  "key22": "4gvEJA99pQdw53Y5bU874nJ8Pvam9Q5nsPhExhdCkpQiMWfE5FNYsGmoU1hTzusBYAx3gWsJsRqPGLE593GRGeaY",
  "key23": "26nx9W1DfwS24jt8JiNbN1oHAGvTwRHWt1h6yRcQuzMQvF2nWN8BikdZYUXwJYxnRFVbfLhUtm2qpqxPa2AiiDhR",
  "key24": "38gTQKpDGNwb6jAaw6HXfWbmxPBypxvzKmFt94D4WHp4bspUurfzWKkhXP3nBrfRAudXa2vFqqsDfmbqKKNifMS6",
  "key25": "4daSNuPcEXbyPzup2BbGyKCsZjGLL5MYHGnLknMyqb1LqDZVDLKgvr9APKGjwwn7qsphipE7jzaXGPwSMtFS3ByV",
  "key26": "3NcntYLXqzzRN4ZrfCiDd1Y8oZpuW1jwJXCfUCmufYqX2ZJtDFtEHXy8pSssXv1HhfUFucXaC3FfT3M59Uwpdt8n",
  "key27": "3ymW6od1B33WrRgjFL4vA6EBUkH8FHUf5zbLrseKsacVsYLAyqNm5kDL1jp777scjToPYtNRJt7iKDvKe665ZK1r",
  "key28": "5Q5S4ZmgADFw5ToDHbUEzWEMGu5n4vZxhvgSuecSZ77Uou6MDEPDpBYfCYbbNm9xeGYH19bzsnu7bYcE6mrb5BjT",
  "key29": "4h9SCWC4ejM2SoWvhyb1AkLvQEpSE1ayMP3VjDGsxMYuvPVUjptL57g4XLYiv1HLr8f5W8BQJVSWBkLNLvtAvuLL",
  "key30": "5GQ3nATpQQn7XdvS9s8sxXA5UAqijqBGtKLopteiUBnxUXaf9E333JxdR2eiyQgbzEdNQ6AjYf3Nme9ooHV7VXDc",
  "key31": "yWfGVkhdYw3EJEskTKs9gkrwCAic9faHuKmurU5GJaskiBSXEa87oGD927JxpgJcNpUSTxYCPLC5AramWFXHS29",
  "key32": "3dctd7n4vCjeAMbaSnsfwtYp7cG6A8GqJoL5mgHXkACPbYhiDr62CL2aQ4szEgcRRG3qpxWmKtwswXXq1Ypi4ePA",
  "key33": "sPv6m8ZseaASCG8URMNYbFi9bYiv3hncZQaMhfuFHSFxftMX8iZqzrTrP2pkETQqtsravLPVfB7c1hcUv5P1nqM",
  "key34": "2X5dC72pi79Tisx98uGkg4LLTpZAMns1eJ9x31ZZd979XKteWN5HoBMYtyNVNrrZDJT9MUQvdaANYEHD5iBUa7ns",
  "key35": "2qj3bHxwHURKCZvUGszugGGkw9ppyaLNcvW7vWGrAjhW9qWimem6NhopGqL41thGoqZTB7QZDgZgkAieiaESguXo",
  "key36": "2iYX4L3U45APpkXbnF3uongaZ7JSoSCaQYJwz8RonrDGs5bnhCSmfNCXi8FdqzBiSLcaMj6pBdaDC1nDuWdHLVx7",
  "key37": "JC1FBzThDfV2525nuNX9YEsp16x9jfdw6gkoUxGqf7UxH8UgCDw47bMZrFFg4seirMyTRFmyyM6qei8YTP95Xqo",
  "key38": "3sgednpcWg1L1ZPpWaLfMAf3i46nRDwMMbn8YpoS2hgnXFjkhatjzU2CdDxCmVxh8JUMUbmAscZbRHF7dxerfGdJ",
  "key39": "2S7qNx643s6q69tQ3pYKkJZBYAo9QL1qVj7H9qaSeu5UbjVLJq8yk2b6VgWkmVDvP4JwunDyNCR9dy7MwwonLAiq",
  "key40": "2fZxmFpBTXmbpPDaMkHmATZN4JXQtYMLjw4knRHkSrHTFHu1ojd4Pzn17r4yoR2i74zCZjeFidS1Jj2S6zbR3GoK",
  "key41": "3oKQVXpRjjyVgGGdcJxPnPJD2aSuFc9RyDjsbQ5pMJWqMaAf1AnEZqqkT3fLB7XfgMmsz5BuYJoHhcC9ssBQkNXi",
  "key42": "5tF9pnc1RSx3dPX4qyLPzSaMBB2hkxaYqzqTaYFxyC3c1tXacC6zryomi6qhYbiBk1s4tqhb8Z7tXvZcto79Rkyu",
  "key43": "5SPpFMGP4GEo9m3J4x8Jdpo5camUwn4cBaRgEo8x3t2YVj7GCG34zoTzdLSHgh7umhaqF1aaUAspWBbTAUsWCkaW",
  "key44": "5izSbA8twKSMdAVHxTPYKZgNiGZCdSrEJnkxWYFJgRDHokvKmD2vCsiZesPKAznS2uW2ho2w17MVvC5ChwJ6QTJd",
  "key45": "Sc8HaVLUnbo9YXgmHtuqKfnSbzWyP6sdJEXvdh4u76oWywAXjtKPvHvgrnSEyxKT46M7366WWUaBQkqL1PFZrNh",
  "key46": "3r9mn8gBschREnW35gEHfKABqRae4XkNgCs18YZLFSeQbVZ3Yp9xHYyDo8GSDip8XwvkQKoQixJdNq5mPYqfkqiX",
  "key47": "YtuQYL2HzkqJDeP1aYXFEMVsJp4i6J56fAsQ2Fyh84TE3zuYeZbWxtiGMH6r432UgvFmg3cgH1L7zWfgEGvGhJo",
  "key48": "5v8hgckZ7q9xLB1NQKjYVCchRSk2RQQpTikHhhAFE9CTLquP96ogtsb19wrNrdhZ4NL9ksRQtL2nTYpT9p9vaC6x"
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
