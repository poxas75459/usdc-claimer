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
    "3hAgcsYPxCRafNUFN15Tar2q57j4Qg2xaExMQL1EdpdsMi2AJo8RfJjUC4dBUvAm9UjJvzq58bcourECNe5gyPbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKfJeDFJonKM4tBgUD1ajSQpGhyRGBrQokDz7TBso2x2R71jUJwD62vXfKduyaFgHN1k9N9oD57eb6SwLiXdEC6",
  "key1": "5dTu5gdXbcmeT1UXzcjRdRWG9At8wEWBqXKK5f5kwBgkYzC9nKjeyqxiLkPi94dJYnfWanHqvZiqQs7bSUSVG2ZP",
  "key2": "VwYM3kAo6ApGSbbQN6gVVyxwau49efVnwera3ofWM1U7TN97nEnP9LvyGrsJTTT8jTJZZUgSaHtQsBnqL9ud71s",
  "key3": "48b6t7PCZMjZEoscnmUdHzVnxgG26m4ogcTMzjmFz196NbBxx2s2redHJPkCGYxC3WNqfAHdECu7dYVU3GwtizCd",
  "key4": "3TgD2GAZXdbu1nauTjxr8HSMA99AKYHLscEc5pczH4zvahbydKvN8CxeZu5bpjkM2m2uPkgiuVosirRwRydxAJsz",
  "key5": "4kqcX44akb6ksfbxzEarDeMyTM5MfEnfDyG1QE8BdBBieSep2MrNmdqhsFNQJUxAd3LoWwTYjvobDTNRryoLKZqp",
  "key6": "P5NTx9dZgLyH6yDA6NQ55hwNrVfb3R7577Kt7mcE2xcbg1a6qs8VNJUMSAjo7pV5x275zD1c1yQe9cvunGQ5Eha",
  "key7": "huv8Wf6LSXJUAJ72aFK5xDfJn5AEsjPV6uLcTbtzsZrGixnGNQaiFyFFb9o5xhhdXxPkPkof3o4974TaoAWmbMJ",
  "key8": "259yhtKJtcpdtAVuzRF7ZAbeWPWvVmcsVdGaDAFabXfJ4XMX3PfLFm1LMtXfZzXL7x9EzmU78KuJvfQcv7nJEwfw",
  "key9": "5Bhzuer8Rpgnv2R4HfLatfdgoDxHZwn17pWt8LSzMVhoHpiymyfXj68oE7jTSjAjunqHGgEknkKxQ8FzS4iPXhtM",
  "key10": "2tfzKHZRr9Wvp8oTTxkTX3qTQPrXqjSWBMT2GigS5dpg99BxpFrDMigcV5CrqNcX1ZcbhHqrEVPnDgLAB1xHMJb9",
  "key11": "4YPxPFzNBHUxqouiT6Z16jBBLtQ3P3h17G3EpDXaiRGkJwpt8Z1Fg1U76DVAhcSnPhswBsn4eakpB3B4dJT35AEJ",
  "key12": "wbTHrNKCFhBCV4QMpYRkysUvhTy5u9cyTw3fMZkNrZ3Da3mSJGSt3P5BQBsXj2wsFWF4JsWb38bAZoSsAfotGQf",
  "key13": "3jJkoKpLFiVi33JKeW9WqnywFiVuSHbcWF6uaG2wWHnUxAfs8LpnpfMdocTZzfcQwSwFWj6SYjN57KBcm3sXxKh3",
  "key14": "37G3VE7iZ8wg6DYPswhNxwFyRqNzNNJL42cKAe7qWagwW7ZREBW3sYp5X1LtkDfAaXrYQH4ZtF4N2ZSykTPh4TCY",
  "key15": "JthZ7qaX8geBr9pWEhTGJrnYYa7qisgSBm1KV4cqJ1rY4ycn1PMw4CHtNdT551f38UtnbVgipHJMNxp2VGaWaKD",
  "key16": "4VVymXRsep3DMKVVxo8JzNYmZPGFPRf7XHsGHuaF3rTgyMwCnwaGJiehrjHcycBZ1qeyGzoQ2CsDjkBKPJsZ3gGy",
  "key17": "Eu3Du9UUBJ31fagK6UgQjRPLPdamPAHaxYgb4pKZQPoDvvWsLX9YAxgMfRCsKTASK2tb5SFp2msF2haUoxFDyHX",
  "key18": "2GNqFs8tCUswkTYAx2CBC3noFeJ6ojgWctrQxu4Fqxw1FfyqTCDNWPjRHWi71qbZCiA1ZfZByuihDXRzCv8t4w8J",
  "key19": "3jQEq8nuYc9tu3RSaqV7TTse6Z2r5aruifgJMUQcd4RjHyukHsEmutX9AFMfVG2gNzADUojqZijeWoYLJL4ZfRbv",
  "key20": "Nmo5AXtwxj6uFsod6r1YjyknRXnQvVnhx3xdKqqva2LVCrthSTgjFotBW6G3gys2hHpbPkJoaSnpv71coxVowRD",
  "key21": "5NQ1unNrRpW1y8biHiThjpAFewnScNeVJ1V9hEK8Y9kZWLU2EidjrWQW4DfqHbz4F52HRGgvfyWWTU3WZmA8FCaD",
  "key22": "53G8ZFBFvWGvk46HCCHsAX1LCNFd21EjNP2KkDLCKQYuLd3ASpXALK7dC6a6AqexKZcXP23bBssgDfCd2qWhT4kk",
  "key23": "4BoNyJ51ipYx1AtNN3PApQiAbQThbxRSqb11RYcEGszFT1dVDQqLJP67MCb48UQXdN6bZeGSGdUCPHricMwdbEUa",
  "key24": "5791nMdaF3vo3An56RHK8pany9np2mzTqhT4HqdsfaSnQPW2dibS2HijL3d1kMWea2N6yvd4jJS5vVKJiL1D8Th",
  "key25": "2wZLVbTfNsgeEtmQeCiAhgs2Lmfjp4hWrCHMLz8bsgteWNGRSD1b9TuQxtMUE3dV3SZnCqcWFU2LviQRoHYiSjyW",
  "key26": "4vAgKnc5sVcCBQP5GvB921DGQRB5rSCekZSTpD48Qc7EEsgfFLPBJcyTiVcySFfV6mL3c9w63BP2gjmrs7rctce3",
  "key27": "3ZLVAraam2pGiKusLnegwzKN47uvcLA4VR3emxoZtPyE66QhwpSRDq6JadJquodtRbvHSXGkCn3f2cZm7LNLm22t",
  "key28": "22tzAYwAR1WeRiVWPTL2r2GXtMtAU9uLeubT9AkttqQQRiFmSwhsDZFyh6Lfjdqt92WVYqwusAGJoZaWRDpsZeq1",
  "key29": "3q3qACGftYDBiT5mBjqM7NiCMzhkjzoRsqWttyMnE5DWTiGg68NWeQ6Q7yE9TsNWAr3R7GphL2qQ6vq4CsEFFhNa",
  "key30": "5eSik5V5a9tmReJUUd2MEBeEAqMKBMonBTwyqeUNCGQqHC5xm9ajeqLHHCdV5aHT4gJq2kN2WENkRvtGZUxYVTHe",
  "key31": "gpmiMowsERqD57sbPumhq6XyaW7HDoZqL9PUie9hYt9ZU3Wg7AMgeie5nxi9iJSwbfc9yKPdq741qhBFgzsfGNN",
  "key32": "38Awcxk4csu6kAX5N3resZrjehYweEwXnHiT9N1ezkhotHiXa8WQw158WEP5yhSjj56gB1sATZY6nA8obUYUJNPE",
  "key33": "2RLCuHMZaMDTsuKmsfb7uw2hdkAp722z2AcfsjHrfavwoARapTTHk3SBrc5MWnnwSEaJaf1dVN5fPBRnYiBYbwAL",
  "key34": "5iV6AGsV1bgq91VasXoaJ5aciu3GVLyBo95HiA8DGzQDrgGLALJDBw5LrJkYabc6LgcesjoeCgnWUh4pBAFHnM6L",
  "key35": "3mm3LKjNDYGHh1RLcf3EJdm2NhFjoDYQu9ZVbFRjGaGnjNHL5dCZZiVSB7gdZM6mpzqbNiFZz7T3NnTrtax4YTkP",
  "key36": "39UUS1NiwoSGJuR9V81p9Vz9g54UmySzcScxB4ibxN3kzMM9dMujSfHS4WfLCQV3vAArhq74enVba1oEgF6rqvpZ",
  "key37": "5DSGfBaGwFmxkARMDZDKw8rQUve6TPoC5gZoV2jYLfLVg44ZSVM3SrGNUVKUfrkeokRJQswnbAAwSgZ19AYyVhMy",
  "key38": "2KNNGNoVBswqkVrKzazChQKAhpBmFWiY7K1DQ6opjK7FENHNVhkGosZDCBJePp1Ckeq6WRwPYGoEfzfnsZzXb1iu",
  "key39": "5PY6CSDnYYtwGai8dgRVbvt4G36ro8DnEpJUZ7k2bnw9xB7T2ZCA9DpUjuGjrffRp12eAtpy4RWML8L4a77xu93u",
  "key40": "53EszYPPGKoN8i6KPiFAVZdXnXTPG8dVxemWseZvuGMDHwPeMihpDiyUV6gz6gdyYpEYfe5jmPoHY5cTh1yMPaDU",
  "key41": "3xqJPPtfFwrHXU3ZSoZ56yudbFVrM4JT7xBMPCFzNspJFCSUxUp8JeiLTCb4Ybu9PPkzuwiDUPjq5yxx86aQsitS",
  "key42": "434qJ9xSLqRyCBdzSy3KgvcF8H7bXC9n667z3GXCq2eUnb6J4md1m5R2WQWqHTPKZDwCA2fYLnMZUvhywMTK5mfH",
  "key43": "389VbJYHh7avKYH1uqQkpN9rsYQ2cqJM24YbtoNdcm9sUAF3EaNqXBPKu6d56HfsAqWEj179yUqoRhcHKPoZpHza",
  "key44": "fp83TMxS63CagFhTCs8X8c6yndH9QR4VdcbtgD7seC5xpUMxYZpV84AKJGeGz1iMwandd2kmeSpgA2co8HKndvU",
  "key45": "2aSpV21ZmX4LwqnVXCqpBVL8R3DhjX7M7YRwn5uvvvDEWpWNG7gWF4iAJ6N417Urh1iQtBHRzdtVzcWAKMqU18rr",
  "key46": "zgtkqKcstXzE4WM8xtJrrGg9RrMXTB4sbvxZBDBBeZqUg2oSwZoLAKMmhog6pisbrC3xcu7uWNScddK2rmx8aZh"
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
