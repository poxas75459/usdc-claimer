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
    "4Q64FpJfGcUtsmpFQocQ52qGwpcP31T8MsAjBBVHo5C637hBCT7w1Z5UQF2LM1rcv2kXTCpBAAdSNievPCy93AhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33BJRt83x2GP19jnASdV3rKSTTXBcajJvsmKZoWk5JpD5NkNnSMRrcPKLDngdu6xgcog3xfTUb1ENXyCk54YmDtm",
  "key1": "4ErLjB21cugGo1SrYX6K5YzKsrQNVNBYDwtejqF4HKjNd4h9WDVtbDWgUXQW5ZqXYPLLpbirSr91cUSYGvJcdvj2",
  "key2": "ir4tkCwdpoXBLpEjBEQKAmpCSTqnSgTEzzU2WMvhTirxFKwmQmJHmGCxLLzYNQxizLEFjJWAThZXqJqCKWUDAKP",
  "key3": "4tykWfnGiefe4QBR5sZ1CuiHw7vKGZGficZKfrUAKvr2ToYF9zHmybXBERqghxTdGtc3Br6zAePGFCYwPKEbJQsv",
  "key4": "32EREAkGfdGAro3kDqyx36CBAys9EMKkwLAh3BbekbdeZmk8Ruz1nZjAcwe4cPkUKxKEZgbrHTysvW2dnaF8n9Hz",
  "key5": "5oeJxEvqzxAJQKYnjdFPwsY7dwpe82gCeU52r8qcWZLrr8M29MokcPmEpSDLmSVwV9d9SoeMUycRuRio7QAg4LYf",
  "key6": "3uYPH8yt3ewmFSa8qCiWFeXTAK4e8tKKHXp2RRgBV6zGWSJoDurkRG9MVkxYMcJF5neskW3WNzwfn9KyjrHgQg9S",
  "key7": "fE46vAkjAAzCtYrKNS98B7SqZ5HYYp5Y14cPq1w22h4oF8dvgzT2mbpTW1ogMBdnH3Z5naUZmGaHK2KxSY61EBV",
  "key8": "3cjkAnVCeR36JqozyJDpS2VevyoWku9Ge3LTXo1JuivNicMmERWkCqnv2JXoyB1xesJkqDgaB39CqmveqbJ7VLX4",
  "key9": "4aMUXPcLGKHSbkXvgMsDVWErDRCxMaWVYKNvK7QN5YYsLcNAq6YZZ2Dzr5W6WpZyP5HGnvxrEHCQfeGBLBt11Bgg",
  "key10": "nZU7Hd8nVjPASydEjQ2BHP55xBdA2eAZASDyDEbj1VmQMJPvmXvDexrsucGH1iidNdTVTDgAwxpN3NU7HUzTjvC",
  "key11": "3FtrGHqs3Bx9xmRnkpdUGoPe8A4ji2eC9Y5ADk28uMSzXYfGTeh2wo3PzPaJZZU19jerivwu4nFmDUM88ntqmwEb",
  "key12": "3WxzkyV6rWyo21BwK9AktejdadmDjM8VHspitZf72CdqrC8KhYgxnNfKpWcqbUx8JCDpzNEfSHUDL9a3sAz8Guqd",
  "key13": "3jxVZ1QtzjsXenTV7R63m1V1ACLbAe5zMr8kypgP5sv5aGtztDotWwfVvvH8R2Za7KuLwrj9xTZbp3YmN1bY9cmy",
  "key14": "3QKbKns66F42X76isHnXGwcB4zC6sgZt5kmnf5vHm8T1rNXrkJ9RRXqtQDSij6iGY7K7jhXkSQAuLunW2LkXE2ZZ",
  "key15": "29exQggcuWTFM5bGLLNzp5Xca8T46djDKKm96Z2QWS8qVWN1wC9wjU68iizDa6t6jAiofZiVUr3P8DrUbqpy8PeX",
  "key16": "RL6XFmLaF7EBQmzUDHdaUiWBLpLzTfALsN8kn4k5VF1kgLnk7WgAGPDiu7MAK92wHs7YEDyzJgqpWxzaWLUXtXY",
  "key17": "3sacKWQc6FhU27vAM7PAbYESf2fJZddPcAsrAgwdSBqbvz66i7U4KDUFJEs1Amwh8hSnySPUZndYp63hvE9HJy4U",
  "key18": "3ch7hxfmdZq32AcRuTUks7orfDjyHDjmDQ6xKKNUtufq6vbHmmtTZhAAXyW3kCxxEhTX9NfnfRAnuCbFqmYzgajp",
  "key19": "2FwR8TKEVTEJLhsNaurdUdExh7FdzqN8MPVhQDak7gJLcBGT4UpWupehY1PP5eJ8Y8FRxKGJdtmqMATukWxZHLyj",
  "key20": "2VekyzGkusvnwf8Wzj8GftHQ1Kc4Sjg1iw7JRERkMLfxob214mxfY28hHgnqhbeKtprCqrANhSdZhoFseiU87TeM",
  "key21": "5PGG2rC4GQmF5QmmRZ5EXUydH2N1zmgnEJ9ZHSbnLyqi2rrL5RNvQrqrdoC3avxH3wkiqx9hj91fcck2eLZnYrBq",
  "key22": "3a4b7wFzh6JUxxq6xpoD6BZrYA94jMaWqMHQUJps4D3KbKEGqhBUwRb22WLikuQkqNt5v96FpZca1RFQnZKGzRw3",
  "key23": "2G7RXtoSgwXJ7EHmCHN1nMf6iWyoACm1SRCYpyhxVu8dPX39i5fJQS5yUNysEQGQsdo1jhvx2UvAdxbT91vBP31b",
  "key24": "5ucs3NXPMJ165mHWAWacqMzti4RtwxYv63CyVf9Bg5evjvRDk3Hu2DDFKdusnqxXA9gMuKZALEviJU9m8GAFYiu7",
  "key25": "hL9gb4eSEdjRj2VRTrdE1Hbo18Hxd1AX2segdAdpAFqrSZEzXSqKR44vDSE2ceEqHGcM2DrkUc4JsvbNNvdkoFh",
  "key26": "3V2QS4NCdA8XPW1eMp7bMVKNLKDBTFofoMMHp1wyahD58otfqBxKuiDafhaRRikW7d9XiiBW9fgCEckyxanQapQS",
  "key27": "5tLZgdipg6w3R6Nu6v5EArjGFkpuEYCEHx1gUSEzRoFQZijjs9WcEsk6Z6AuprrsJAwK2FnWopQJDEvTjQvoFVij",
  "key28": "2cjsUm7qVqkohCpUTazcZ9Gz2iEfGwBnk3vw54X7y8AN1GXKp6oB198UoM58EVDo9LbNvu8gqojfBRrwSxgc2M3q",
  "key29": "2zLezbZMuQ2zNxg4ay5z9gT94jeDcadNsmmiR7eUCZuXv2gUAXRgiFxm21fT64R6pNqn4iqaRmS5TFkwq1o3TWGA",
  "key30": "319QjWSFNNsgomaGzMSBNvhtzyBeghoPS9K92ZDwv1XMVoUKH8F9WWoiNJRHU3xdAejuYRXzEwpiJRuZbiy45ULg",
  "key31": "343pMF6Qc3z5m6RfpzjZbkhPLCA8ipK3399SZwnhP3LgyHwUH9uLs2VrYXMEpbVyp9AWbNwK9wqHVXcELN8ZAphv",
  "key32": "2G4GFuZk7e2GGrNVA72aKXKLJCiGMTkouHmauJ2w7abLJwPVsTDA6NU5DzsnKQ46MS5jL5jexmhMcehqqmdLzG3P",
  "key33": "45GgcD4e5DHiNwKgSjpjKCTACcn5XL3L9BEhy6esEdgFYYtUG1Ey6TAkDaxbZ12VF5cdFeYwviPanaoDW8tdiJMh",
  "key34": "2uUz8KHuVynGUC26DdE8vJZJDDdwxiVPD3TJYfCpRHD6YFNYTCMi3xHgxnarhwB9VqCe9bwaQ91mpjdEUChwt1Xb",
  "key35": "5FKipi59CaHSg5dRwc3Wmif99PGEkDojMutpM4NJ2i2T9TCnuaDuZC8Mtg5gHpmrvoJDT8HvHk4ER5Lpf3jFata5",
  "key36": "vxVSR6qX6juFoBPJgT791bSiy4e2bDLmKQLPbhPFnmjNDuimgJeEjsuUPNayQRkJZiS4iNX4zZQRBrGk7RHntvx",
  "key37": "4ze3KEMc3jv69G7aTt99cABZ1abdVESBMXqksPTNMfhShW5a1jBXZQgYSHZcUAo6pdk2bijreTJW2tKemhENaAfZ",
  "key38": "66heLi3P14zTvRM77ADLU1mpBuLT5KTVxGJeqwe7vm6M8F2Ryr1fxeyqMaMjRBjXcw7HJVKuJhXypf51sH67d4J",
  "key39": "4vwMH6LE8aKvKtqfdzBiHaWJisPLXV9wW2fVm3vZeyPi9cnoGxiw8Yz6RibNe24Xz3eEoeUZ4Xn8k6CaC7mWbGpJ",
  "key40": "3nzMP85bHick6PRvREvszMowXeNsXVgA4yWPUADup5nnUnfz4cA6JSmN75dpLJ99P79LH8ZTahmJPVXHZMuEvbuv",
  "key41": "39DUyisjhxGy97sgYmorXLcRQiBWyASY4kU462U7Wrq5kEdrMFfJiZxNgbUVbCtJneuzSQ4Gumz7n6T7W64HXQmM",
  "key42": "63BygX2zY1nKcuPmRH6NmUNKCSXAWRWRVxbhjKwdMYhaKn3WX21Mo7MAiXrr3DwMw1bbgV5aDTKfLLGPw9ZYTTtb",
  "key43": "4bjErffydqyxdG6YeVwzWzE4ZZ54ySafgFwaiZPuNHEStLV1KsDJk8CVxXpAwRSCYzrDh3stP3jVRchmTKRP7Vko"
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
