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
    "4EW6TDRdxLUV5zZimSNYpszqTABnaiCMtymfM8imxakEqPdyvfYHe5WrKgzcfapbCqXANXSEr3eynpJzDTLW8UVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCxGJSbyERAS4agWf3G3tpNDYQzmsArPgMb4auVVn1ZCH2c6gY94zRn5JmUZ41DAEbuRFAqKBruwNpoJaMVvkgo",
  "key1": "2E3SeWcNCAAkFWpkcpwLCd44CAkXZvzFNR9XXEuSgnxNayFgt6gyNk1g8pWJ3sRXwj4hD1ccKapwjnxYkDMx36kw",
  "key2": "22MWpjMptHcbr2jvA1QsaNuXFtUG5VDTkM3TkZszxDLffQ9cAHcCxbA4rcoPoEMm97EUVh1T1rn4Z3M8yroWQSrf",
  "key3": "3D8sHEzAre5etJ1n5UtmodrfWiFg1wHx3mNhripntf86CNB5SZhgmbJBj3FRnZSEW1zQ4HrBjAN6taH9Ecmb1oDG",
  "key4": "665enQ7eYmy9Z4ZfJ7vsW3xA8RqZX1oJt4QPKWWAr8UXoebtwrDvyuSEZ4MkxsjEJdkHfHBiPEwXF1VxefL9h3Wj",
  "key5": "2BUbvokQXdRoVrthDwuHke1chdx1tHzvhKYTh3ygcApkeWnMTC6DvYYkm9jCSZPPWmXfsudL11QW1kUZ35yQHswV",
  "key6": "EReAnN9QwQ1c1uJXG4djGiAqV4PXRKJp6oHxDp8FAEWn4i4Qj36CqhEyi1SBM5S39k9vsvw3Zh3QT8vAYW6MWND",
  "key7": "2kMk7p6BcpgBN1xDqPW4CUwswDnW5P4pjZcLvKE5FZGos6bE8cgC9t74tM9e5BT6YKyT8cn8s8pKSxGY7WZ8VEow",
  "key8": "5GS82RzWBEYXEiXT5Za6SdXy1ADyRRDK1SbDh9pP7Z7dMWCkmTXJdB18R3pB8U7cXQp9yFB4SJ94Ft6q3cdpq5bU",
  "key9": "5p5wnsAP3LaAiuvBG6Zn4ndcBgfi1vRbg9iFMEbYtYTGAHCAWnTytWE9QEnrmb7dFe4JipCgyqgx2vYvmYv5QrTv",
  "key10": "2VgvvUFRsL7RzuEVGKGruCksY6pRL3mVMgRZg2FpB1tpdMRwLZUSHR73292JQWiTqXB7akqCoj8k3TR5r7djDZ8e",
  "key11": "5MbijkHYrby8dGEgCJd5CaaF6Vw3MaiUVcxJEA6a5yR8LjfmQ7N7GVw3DiisZ1sc7efYAsqS5V6T8uZrPsZDpYTn",
  "key12": "2f9KyEsWJHRBEbWGQqiJE3D5M8DWTk426THWwwBJJgYYRWTGVZSu8jqAMfNNhBAshUmfJnSqzgqSvmTxY2XNtQTT",
  "key13": "63JJryQ2pkNNSESP8Shkfof8SxcZG6vJyMpHzjzk4pdEYQ8mPQjj9Y6Mivs7Q3TD7HFFG6uH8yjB7omqtkVjRjtA",
  "key14": "3pA5Rn3eCtXJVsiPgGcEGCNfMV97S2obJf1fBXsx6ZNE9wr7RbnJkLPM1hwLFVT6pWMj8KyQ4sgZU1DXv6hMYhJH",
  "key15": "5MK9mYiWnC3ZGUqMHeKVBqymWPLFWyA2dVnTZeBqHdhLAgA5FkQGc1ZiRPQQ2HCvjVScuVWtBTgHhhLx453e7epG",
  "key16": "5Y4L7sSqtT8ThKeh4CVgqzmbTfiDwxq4xQJrmYz15Fe3Wkcpoyy7M6MiczRiPRvWjkp9facFe8McJ75rXFfnYoaj",
  "key17": "vKjjmLSVuTe91nutikjxTmTuqRijXZubkT8mZu1MPDDp83rRBCuoAt3ZFFR6TFXzicf8SU2zm4JpMCJoARTKYbV",
  "key18": "5tuDnDRxeR825bwRNCXukdWZd1BSoZp2vu6jMoC35ibJ3Ubii4XiXJVqUg5mUVPqTkizuuBUVzmyRYkk17zwoPn4",
  "key19": "4kT9ZtV9YaWVk1egju6d66Bb2qDmPDGR8Gjd97oF1Eb3tXhWhzavZPtX66SFmH9RabmYBH81Z87gvshnHio6C9ZA",
  "key20": "5HNbWt7yoc549M2pGNcsAXEJiE9vcYijGPNt6QcLsK8do8SgaUJv8rj18ihFq7XwmBLB6BJ4d8fpZTcS6JUQwkTf",
  "key21": "3639yeCJQaUqcBAnejhfa3htqthhV5bShmaQ8WeHhYU8mGrds5nGZGZTYtwbSrCHosxjKfhRLzMeTwahQYU1BBVc",
  "key22": "4uTmvtTSwXSPXmc5J1bxGQVK8bvmcjq9m6sfhnssGr4CVpuAbkXK9v6bDhJjrNyCo6cuNX6KPr7dEMUhY8RWH7vp",
  "key23": "TdPpvEnAesKg784eRF9DRraVBxf51aktKaMNoE5gwnyE9iVDzSvUJfaKWeAHn6T23JpBMVezrCvcxqJVkz3GToo",
  "key24": "LCL6fsFvV5oiYyS49YXxtCBqHnyNE2fnss7rVaDfRjvdwBddB2s8gMWvCdtgMF87YxgyWuZA4SxZ1ofi5rYPvvs",
  "key25": "2NXG5QMHqADKzfbT9o6DN8MGDNshDS4kNxVtJE689NcUPUFWf33FYLsQE89ND5SgZdpU8LvtCXh39v1WUz3TpM6q",
  "key26": "5amhuRquFmdrPgLtpc4QQ6MYkYkcxN4LwQweCNzP1f6PCUx3ag667T4gBtVRp4aQysMWNBQFb5WUuMmRGCrJAW5j",
  "key27": "3YodN4fxN6GSQvPh1fpDibvy7tfAfAYtCQKUgm98YRnVN18nwNMhJwAQ4oaRRfabJcJsvATeDFpiEYAoSMrKqX1L",
  "key28": "3MkpHGCBCbdLMa8CAM9jZSEegWwySxGgi5Sq6Ha3QoEtbNRpPfnCU28hcsC8UG9JPTVZLnagrjEpvkz91NHk7Coj",
  "key29": "3m3Sw3vWBbFSx4xcG66ykSdWkHkpNb2kbdMbk1meMBMCgaFRzk6ZWyoDu2qWkG7XERtZZEpu2XWpaRHYJxAustDN",
  "key30": "5X2Y8uo9FTYSMg37NaaGp3xkxPX7haSAuxa66REgYDpjaBoguwdigKvqRM1PUwcvA86HkK8HZZWJQ1mvpCx3ZTCp",
  "key31": "4DdBa99m8ctTKLkZjdB4TewJPjPAXAtqLQ86rWWYqhZ8VUyHUPFshvySuu2cUedDqjwT6a6AGnWJg9Xg5heYqz9u",
  "key32": "3FvxVHZBLw3qUZGBwXK1G2METUpifPJ82fMyNY93GAUua4oG39RtdzqUb8MCoFaGX6NusEj3sFqvKn6TPgnoPGM2",
  "key33": "2icqneDhcvcMQ6vreXsDg44uFTuYx9FggrGSBaMeKcwvsTPbKdVeef99yfLbb3fysqoMhkYbBoWnf6LKLgrZMjjV",
  "key34": "5wZnK71Jk31uceRM6gTXCn6KGUkrYaT5HgNUYkGThaTFb81CkWck2f5SB6aMgBKWvf9PcKALTxJ4j17rMVnFv3HV",
  "key35": "zZTsxGVP1BnWot3j1erKZriU4jDM4bAqGVH1YTAeESWmfKaoKarK7gojPggAvn8QNBtPRjm7m3z2mJZ6MMhSciS",
  "key36": "2kDeeXx5e7k7N3bKZxRiQA8ponJm5myxy6TPxmueH3YPQKTGJbDF68C15gFsyU4k6UWih8sLd4Cao8BWigoU42Pu",
  "key37": "3Vh7SLwmAAwYyqeTGWpHv4FREFCKk1oMg5gAGGgohohmfyiAiFAdkHRihRm3L89HW3YYaLxG78jhaJsU9iSmHR2r",
  "key38": "59QXtftpYZKRDa1sMDrU1Jp6PSqfWnqeoqwNbH8kCJwUAkyYhB9Rw3M64KEe5SfEvt7jS9qpLTVabCSXQqtWdp66",
  "key39": "2Li4R4j8rx8buWQtHAQfMd8f9JGAST7uzLaGMznA5h6HsAZCyydJPyL2UKDnXSgnPsdUqMwYfjjbvVj9AXeEXVwA",
  "key40": "3NFBhBXYcJ2b83HBTBNm4JBsjubJ9xf443hCSkCPavxnf2sWJcjmMiM78CefF88uypjN8vVLTpQTNJxUrcm6Q1S4",
  "key41": "2BgdKpKmBeASNXEjVij2ixrmoDtoPuaBSDWiwm3PHVaFNjQGPosQ5fdQWsF8tQ6tEPYqJuHzSg9bx8SLsG9hx7V3",
  "key42": "3xWaqVXmQEGjm12vVidimF2UGvRia9myUjTqrULWYP63j3ZKbJb1VPhQsNCreZotacyY3KTKETGouDrP3sqmWQqD",
  "key43": "LmM8FPP93yP5haHDSvqSs4a5pPPXQv2mjm5Y9PfyzjiVcq5kUcdZsyWTx78HpuubhGcmsoFbhJZ6TsCng2z9LWS",
  "key44": "4Ypg2CoWerP8kjnsoyA2JvuwKvsAW4D3bHU4wad1K5it26VHPquJRowLunDCsFitnc1SEcuMRebnH3X485EdBDrs",
  "key45": "pQscjScfg9nxuNbn7U5xhgrw2U5SVfBVNQt98xJhRqdDUv8MmKR9pE8jUDZGxVzjFvPAADDWBcy63wPnDcWZkXW",
  "key46": "oLt3StD2yQ3gxMsrJoazpnEYZwdxDsyydmrWESNUgGXmR5ojW4rdVjLh4YiRqkBbZH6CgkByLwVPA3hRU73Epzf",
  "key47": "2JdTXjNN24Eam3pFUGLnVfwTuLZyPvrRy5C5aicBRSpSyNmWtrAxHSS1Seqa3wXcgPKxc4Rqa4XPkoFPAyfGt85S",
  "key48": "ZceuuSkBWM1cYDWpad6Xa6JV3SHhskpCKYg1tbBQGijzV5Ux4xx7zKsNcc7Fw3v5KFxCCGT72tQSXqZ9f9ksKb4",
  "key49": "3JPidLpYLjC34vC8tv3968MyHG8JimLp327MvcvzQafby5zkdjE2TVAgXgL3kt57eN57x6QedM7szNzXcj24gbjy"
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
