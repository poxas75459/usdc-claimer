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
    "3RnEXURCea1erGvxM7fanPQgvfZJU2JsJZqV84gbmicpYdHCUmd1wbmTjMnoy4tinwn5gdMvkWabJFBoRhYtSZ2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YUfFcJfjXpKzMHBARHi6x8BJFzNmHKixweT3x39atqY4qX7CHgrcKvrHDQywpFbcc3zLCSardLSwMdX2fKT59sU",
  "key1": "5XQG1JqqxrhJJ56Ag7ZdCN3y3A1zNy7JrJXfVbu2cny18ty9ovpe4RKp2GRJh1GfqhcdhMFyiUa1fYqpfwyVjaFG",
  "key2": "7caWPkFWzkKsQ9DwiqY1S58JLoSWc8j6VH3SScdNJtULdiTx9JxoNnaMgkoWHR5njEJoDJ4y6KuwxGwJekDy5Dr",
  "key3": "4srssT5GuZEinuAiQJDzGcNKM9KZkvqpY8LVA4qrXULiyseCLvV5n17CuWQoYYN43aJgtPAath356pecmpH1jibU",
  "key4": "4MqYxFJwyjyst1NJDmaFdSFV78vkmK7mp3aPyDdVrL3sXQvzrsNQbg59FYsKmC9h2dytiC5MbYYNRmrTbHWNexn1",
  "key5": "3e2mjtAzs3zkREsjQAHHSnbxXt7pV7vutsiwH862wii7JwRwRYKWuZBD2nKsvS1U34sZ9Ho5u2p33bn8Jm9ZqT5Y",
  "key6": "2MWNgiCHw6SCnJ5aPpx7zPdYNzpzRMdPeU7q6gz9HZDnMnoogz6iKhFvPsUcfBz751S6u3ZjQnUWeEzFYxZvAXid",
  "key7": "MReS7jtmjEMLPTEdDiDYjXZT1NKpGiGcDTq7VnKB7hbFEAgbTqy7d6VTS1hsv8gzS5PjF46qDMNR7zXhEdrwjPZ",
  "key8": "4vdeUQhJEW6y72CbpG788o63GpHYaiYAaBgRKGFMA131msNaQcy1vcQCb9he1tgoaZpXtLxbRFr1UEPVFMKCrWpt",
  "key9": "4iXsVodzyAD2sVbv8opAEungeePp4TJDmDg2FQ1LnETe2MKHHNU9v1NbNgiJhUaQ6MR3ohjMvmE57SBGrcmXnjJu",
  "key10": "1LtFA7C2wvygfPxVQqPPuJ4kh5gLG8dtLtH3cr5w93pqyViHq5q8q1N456KpWgZPsKVANxUTb2osCFPST3EH2wk",
  "key11": "5K48uBkUx8r1h8MBJPCELffVMpyCDn4vJrVUsJkmUMUhtABenso53yumK2paqwHgGX21iDtTorZftGQUVcirCkiB",
  "key12": "4SHSnZA3iyZGS3KTZ74VDr3HKUzzuWjQ6vmk2T6XPqCjp36o4E4nSKza8fQE54RupAZLeF7gx5Li4zFQaXpY6wtt",
  "key13": "2nFBWXRGS2ykfoCWogzozu2Vvut33Q15yRYzf7eneSR9oRPAva4bHVvyA7eMd7MyT9eZXUk8u8pgPPQcke5fTox4",
  "key14": "3xEk1WMtNHjEHnTG4wrhvNZed9BktqMMAM5BoA3HYaGM1qawxcuSr2mpuLE2nPF62svk7gb7zEyQTi6EoEKA8TWE",
  "key15": "2rGCm6cqtT7Z3xq7teKGEg2CVYTpqR1HFnvL4PzkZCdLL5p8pS78oexUqAsxdLSzLwsyksWx3LN4pYzrDyLFfRJM",
  "key16": "3zaKYis2WMJtrreWYfkaaT3WAbfGLTqMofvQq7ZecH3Sk1ZnzbfwYQ15YM9zWx5jxSX6r15RrcuSDz8zjJRAUMtS",
  "key17": "4hHTo4yRSpz7F8RccyGthc2DBUGVaubBpcYmVHE715koJS6aUXw8rzb9wXfJSpdcq8MfHVidLDcwZWf5rijABTex",
  "key18": "2PAdSRwQXHMmkUyM7YoA9fbiRa8mzS9unMqNHKv48dAh5E2UyiPdRe9n1fPyb3o562sD9xcmjQvaNtzk7iiLLpG2",
  "key19": "BMQhpteqdGBcVzXXi2jmKKaQNuKxSuVAgPHcFACnBYH6bP3QXuJpWP4uNaFbRrf1ehfezg1EfHHUfU9GYEXGnvc",
  "key20": "5KV9zZFYdFYt5nbhcwFKTpktS3BYzNSEe5MLKFdsWGWewuLdxxvsvtvB7Ax1rYEM9mkRwUvUfjtbChTmo1jB4aBq",
  "key21": "2yzSCV3P8E9uUozcQTjwWvJnu5UHJoKBeGPaNujrpu8XapC6ArZk42se8pEya8Rd575CPXYm47sU6JzgNH66Qf8V",
  "key22": "3YdQQPAzFutzeHahh1Kqih79o8AR6pGZ3V3uDPSEvSHPjozzHKWyigyX8BoWrKxzzeWZm5cyRLqYJmPfsNjjyLC3",
  "key23": "3v3bhrUBT1yiVUYURxs3jB4Hz658YSMcHbGVrbZEULts4FrniufpjMNp4dpRNzWfWtiRRYeWEFg5FFGxddQtU8tF",
  "key24": "45StgTpGtv3soaYUnFwVrGSoSTU8j4pVgUjfniu6REu2ihk8exP1noKfyhUZN8DXkydNR73RQUZ35XQF9DhNnLjS",
  "key25": "5URCNSMuMs5pkKrRosi31eJYnj9A5zjLwKEU17jBAkKJxatKurpqz6DXwJzmqj7YPLuhBx7gFB5umW4ESukTEnm3",
  "key26": "4sqHWmHpapxzWP38zvrWi4yxcy3XmYKUpn31ZpLSqS2goBecQ6pMj7W2Ws1iNW5n7SHTUajRVrMMtyijaeZnYzvg",
  "key27": "nNUfky9yFahrQweFVJawbE7Pk9EsJnavKPMokD88MCrC3BFQoiz6STLq2uzs54uCUozhfQ7UhNzs32rUb6boCpR",
  "key28": "3azzQSog7XyVajbkedA5ZMWewRzDVL5p6FSmpTSZ1j92d32DCFdUZtFwUzhHufCuEHmEas2ra8pYohk9nBFaWM1S",
  "key29": "4hLkS5vpfua4gT6t2QUSJVHLm3s2UZHA7JVRBd3Phw2BoxBWtTbvmKNJ2ogSX7VLCQh9gW93wiudF65W3xEGuwb8",
  "key30": "45j7Q2ryYS6xKGdnbhv326YPajuXTHwN4uzyab3buwag8J1PpdvqvRc9J3uqnJNQRi6was8W1b8gVTmnjoC6yWnr",
  "key31": "5KBaRS9bgEvMFomZgWMHiaGeoWtXJvjXYpcNf8vxF5QVaUWAVwFsxU43cZBth11dKh7CSiKUjguatcWzJ3EJAE8P",
  "key32": "3Vs7wVytnWMXaDteoJxMsiUXyNuhia7eymTvvJs1Tiws9SR7mBcS8BLuEnQjeexWCvfN72mh6AHK8ZesydJC7rqf",
  "key33": "5semWKMVWziekeHxp5KAnLArE8CLMezRWCkfko7Rkgyn8Jxz6QRsP1sUB1mpiBxbNZ4A9LRYYkqdj6XovAisdSAd",
  "key34": "g5NgGL6isjFudvSESeorrgTRn4Wa3Q2wtZF7dvMBSzPy7x6BshMhSeUcucKLBCLH2yzkb7bcji1XvY1pdP6rXWu",
  "key35": "vp5BTpQhtr7P1xVxXBjohDgi9MnFBocDrr2mM92rkfruuhzfCWKdDFJYUGfNWd7a24ck4sRkdExyeXApP4HbfdA",
  "key36": "3VEWM5syG2j8qvBgA1cmMH915hWMYDWDuJxeJ1iCHnRehHzomZ3qcpaG3iz1gL7YSgkBnrw59mWrMdVtEEd5QTeF",
  "key37": "2EiSu2Y5W8V1eubn5apis4frnz9F8VPMFBsizz3qkaXtT9NY2Q7Dp7dJicXXRoGFujU8LptSYrsbbBGZEYWCaHKC",
  "key38": "4ricCXewNG53RcusqLt5qdZageg9sFENHUJ2FUYDDkR8wGqr5gbDGQrtLm56TkxbBEQtHJyAR1chqAN7t9AtF3Ht",
  "key39": "3Lioz98mry6gdg6j5WbBpF7S5m7ucLiauLq6AFbgPmHgFPj7uBFbvPLnX73LHzSjyTpqXvrm6ufvbsjFX6k4UbRJ",
  "key40": "3qfhMzDdCr75mUKiz6CVnxuH4rjTP2zfLhhXwxq2CJkkoU4ma6SLWkoBXwEMaErmpJqhvBny23ah9fygk83jwxnt",
  "key41": "4BX8FyTWELp9X9E1M1VegvbFV9xw6nDhc6hUErY4QNrbmcV5cBYegn5Ck4psMoAMh38g82rgUhzrQVgWwYUhJmft",
  "key42": "219WNTY8DXAUbJkyMz2QK1hzucQpXXzeY4RXNAC7supQvsQha8QbJAv1ZWHrCM7XSrbZRRkbNYvPH7XVTtn5QAQT",
  "key43": "53LtK6zrqgvSVrWgDubSD75idUpJE1Ks8ozxWiREeGWqcJBExiNiTGVrvMmbGajo97u7KYmNf7vE4xEWkT1b9Bsz",
  "key44": "5ip4xZX1Yv4qLcfJXer37DTxVFsnib4Twae2fWQ2J5xGzAzdhZQJbQPut3PaFvPv87K8aYbWk5x9n1UG39r3Wq1h",
  "key45": "4f5C2pW6SZ7BkvqwfGiWPabZ2kat6ApZCrwdnpspUyHCkTRr8Nj2qB3H4iChGxrdVAzzqjWkpmAFAXa4r3uXfnu9"
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
