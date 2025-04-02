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
    "4bwUS8TqXrVgcoSs9Are1abbpkB6bZzutab4qqfVqDGD6RkgVUy2cRz9sXbwcJUdsx19Pi4dGk6HdZrXw1yt2vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ikZ6pFErnjQSjVH1jcCZ26SewDhV5hu5542prg92RgrGf72jH3HxryK4MjGUaKYaWBatAie1to1jM7BkhGUbFnY",
  "key1": "3GyqAhQkneyBbkyENU4LsfxELNZcA4qXDgUohmoUMvadfjuh1xjg6wPEWjwRFUmxYLmA5U67jaCRkmeYBdbViLPP",
  "key2": "kVCVH5jrddE53tc1AwX4GVX1zFqthSZgLEke5Unfxi1pd82t57wjTBGkyzT3xzfyRMn5vKr7aKVmgjRjTGThVSG",
  "key3": "2wpw2UawvdGELxLgbAcLT4wGufdrfjFecAodqapNqgqRzUmNyHDorN97CXUufxfJ1TpwsyAHkpM6cFdHy7SBtNpP",
  "key4": "4ZhXB5tzomrjQseeh2QM6YQ79ohqpc6LqoW9F25Td7HhfwWrntHY2yKKaQW6yXxNivhbZh1M9vkKzc8AZiv2YBuH",
  "key5": "56TSuxSfnuhGR1cQQUufGDpFzwmd28nUTxGgG322LfkGQXkVg32rJjgFBnVwpJvmq7M8jBZocTnUTyiWoDCFHiHJ",
  "key6": "2f84WQay8giPaurzHGDpWNoRL7Ppz8cWgbFG6P82xMySpZ3QhmrSgjjNU16J6NTNM3kS1PsXvjNQ273DcbuEbUzZ",
  "key7": "21Md73n4burBteZz6yvcXTRFUBkQy8NEkRas5KafqoCtxfqN8XvaetpEAkfb9cbEMAsMkMEAKpZWNvFB546jh6bX",
  "key8": "5PbuC3WjXUzEeUpsNnMHUDGwAhGGKYMcKy14pMuRvwwGXaXG6C5wihSnVFExMmDJ2iJkXposg1PaZykko8c2SA5m",
  "key9": "37mm2CYsv7LpMt9Cwxa3AW9f59vvPX8BdSo2ivzsxwDv9M7vrVnyxJZ2pQWjijfZ99bQLU9gaeLWFZZnKsH3UHMh",
  "key10": "3ktf7HVHMMRvEztcwBXDG36xmRMA8MWGZxSrqtLg22id4fPFTpiXvAE8wggc1aLybB5UfmRbZX5EhZbLGQM2S68h",
  "key11": "5HDJSygHcwDvyyEpBUKwYSFYCtCVVqH5vRNUfTyCc7vBHDZJAyroxwQ1CX5135HqNaxuDwcpZ3qNsJPfBESA91wF",
  "key12": "4dv8RUAyZq89P1uwoPZTbjmVDDpMhF4L19K5vsbstYASKHpHrkP1yJdwkizajctGRp4j6QXaJ268a3gM9E376m7r",
  "key13": "65a3FHxhSfnTNVjmxR7Bk8F2DogRkarcP5JwokhQ577NW9MvAufAUf98uxmLjTh4Gk5TiGF35ne331hNpgV62rGh",
  "key14": "28y5iMkpMoBVWWWuNGnSuqNsyxHU2tSQXC5R9xwjpLGr2y7s52vQc7GudZNVuaSbBUULJuNexxh87R4AQHV3ihm4",
  "key15": "5xbBXYBpQggfDXPPLgbN94VNhRFuL8AsVrJKaZaESMbHsgMoqHFBesHon7uUWY2xENPtZTeRqDPktL45B2N4Nvyn",
  "key16": "4Crotuhse3VooGnSq6M3C5dGVeDfJraDxzBarajbHwRyDFPuqSqbUSvvRkJQk1YWBfjLFVmxvoY2THQ5f62ZpQz6",
  "key17": "2HeyGgtGgaU8vXZASfe8DkEfBgRsRpfYeNga9wcosggnpc8hwYfcPGj2ho82k1tTNkAdwGiP9LiP52sHfpbE6nHW",
  "key18": "2Lp2jr93RvsHodeLVCvUgpmpK5sU9zM1JAzdW1sQvtmTQeG5rh2h1kjkPUofsRBa5772pMTTmrGSXFctGpo2h6zS",
  "key19": "2pnYnRjjyNRhZ5he8TUYeK5YckTzhZy8njA7FMiGHtPz9A7qQHMjtkcB6gYpovvgVYXZ2521j1GeRm2mtAsWNgBv",
  "key20": "4JocRYJbKwBnDECeattGXHyS63eDPK4Tq9USHLYA1x7t9ezfddLxK7LA2u9W5XnWtF3nutzHfZq2YrpyG6Fpmtdk",
  "key21": "3LdytqkLMqMGMfrrjfUxjTKn59zhNTQRC3pPkEkXN9oytEtVqzHWpX1Z2Zbtd33phd2WevNwhf66eYoRwmQrXshQ",
  "key22": "4Ve6twuZHYFuwrqSqjKififZ58yC4UzGS6CoxDEXUYybyum4sFFnEX439PVmHdDKF2kFPHkv9iZuPnvqEUxggCDr",
  "key23": "2Q3WZtL7tLNgodRMrLxXVFXZsziXseeG5wpF9uLTNqycYcFVz8soXPD5rohbTnm9y8m48Lu8VQ4KYEzgVUpAvfsy",
  "key24": "3pDPVebqrmu1xB35ooWYdvhRReVAgYHqeKt4q3vjQqVmPZ41i78eNLGeeW3uoKQcMFMQDfmhTHssnVzwSybF16n6",
  "key25": "5wPcR3SKnM7VRSW15jPG1htK2tghf5roqUzPTSjwSt9rEuCMyAxAJUbwenHzXNqfeZoZKc5VyETtvL1rhYwy8ADL",
  "key26": "5BdzBFRrruCGmeB7yvnJYjRJQeVADdk22w4vi5WwQUwzP7ZrYoaxWhjfWWPXALVZUUu99nkDjZcMjb9p8X2VgUyF",
  "key27": "1KgWW6DXgdHXrFf7DrHcdny4xio8MkX8h3b22qMdKjNCaoP8X9LKzszCFfovcFUMHtukbyMbim6txrS79qicGZ",
  "key28": "2aNF797GsaYNM4tpWRkTfibZmkAg6sQvNRTFcWGp8ZHCEjQKMhZG1QKWvremNnR6qtY8TEGvWMGbmUcxyiStAUdZ",
  "key29": "k5SzkgZs2uQ851EaDLCrVwt57gbZZxtWNN1xqaRG1cBbHyrsqaHdygJwQXr2wdBEgcYdEbK5JBoVEMJqB18xYJ8",
  "key30": "3SUo6zrUJtHaLYKNKDMHXiowBwrBKR6kau6hYa1cfQPm3Z9Yg9qqxJA3Ndn3BEG9cDcvebULbFCebZoeAdF3WoH6",
  "key31": "3uJfQutf6NPB8vybbhdfBUtU7qRnuf5Fh7Quv46LdAL4A5q3hdt56xHPA7ypKG5a4gbi6BAbCsjFQGz2ZVvyX8BN",
  "key32": "ZrJGS82RYBdSLoWVjuVvauC1HYb2sHGaSHk2Ma6xnNNhgRd4kyWcFnzwSFEdaQfQ3DCDGgwGzFjCwnD2E3KGDnW",
  "key33": "JxwKTFpWQHPC829sJD8K4NpiQWa4yzQTNzmXVrKhgmJQeNfWCg35mZ6j8PeASaDAeXUzPDFXwpCG2FC1B53ueC5",
  "key34": "54VqY3QqA3Y7jijAZYSwxAoKeEeKPeZFGGaTZTp8YTGsiJMPEw6hKgvtHzANAEyuTGP8uXSNKg6fC1bp7Gj7BzM",
  "key35": "5iYPn7WfsGprBYCGNqFVyt8cvUmfrZeSZ2MkXkxh2h6xq4WPW2VF4wVs6SunGDpWW1X8CqNFBZTTUez5Pog6rgZ1",
  "key36": "318ZzefQDFCngxCRUMzAce3eF838gux2jKzJiWvrmvZ7AkYCqzQQFYRmMrGiT6gAwKKpZzPREDdKD6PgS9VXeLkA",
  "key37": "66E8VZqr7UDiKPbkKV6s3knCbbHaAp3YGLA3uC4oQ74VjKFUfm6NEoCgMJ2ipHgUNhfAij7DA42mwrg6zw55LS7a",
  "key38": "4CPadNV2bShgJ1yiK82ZZsA5GMMB18GPwrzgnrMCxyYFBJh5NhoYE6vpoFqMfkwuauDAjugxWwGbZR2Mf6zjLBzf",
  "key39": "5vgeocaEGzDbQgcFopqc6yHkmdXza3nMW2sjWRJFEJn54FmGZBCVnHxEf4VaZBivumSQdu3UMAan54iQFetiJynP"
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
