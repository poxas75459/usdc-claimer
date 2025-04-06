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
    "4fCCMexvUD9WBHqF33F3afyaFYGh9aDuT9BmTiSjnkEs1dA3cT3cFUyw1JXe6qZo4m7YAbbJFNUuv77pN4HdQydE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i7bVTFRSmsjqrbqasUJKGyyrJ9HgYUsSbcarbmgqQx7thmcWTvkEnxhFqREem5g8hHk33GJKLx1g2p3xfHS6Sou",
  "key1": "5SDXSzmcWFTj92UUNqXPNUoGEP3BwYd4d9oHDNo97Go1gKqc49KtmGVP1M3eoGTToi59XTtWW4b2PqYKXXxQEjji",
  "key2": "rrngoT9VNsh89YARp4fpTygX7PHFEoGLSpjQ58EUrX62CTkLuqVLWvi1dKaC6xUozFbBoW9QP9pjXeUe2vkpwcC",
  "key3": "59iSELawEzQHyYzAYzNXYK4YEUpzRBYyuvU9UfwEszx3ptYpqUyDzB4UUH8pKB28o7ddBBAzNjGN8tySwYbqyoA4",
  "key4": "PJeXyHixCvZgtTQw1KNoXncQuA6qN5JSe7aLhUZDWmNoxe7Y76vicyXyTcuFgAm7VtBcYj1GvZvSEvx2CpbK8mH",
  "key5": "277Nt5vETG7HAmykL3DRUy1pVGhQwszf4n7xSDHQkJfeodu3DUyYKh8XeAQbhJa3gNVbxegg13iXxTnRpF1q28eo",
  "key6": "21zod1zKLiKLdBdAj3xaXMjwXWJ6vsedq2Z52Fko3qi7xRgvsAj9iQYnv5URkKESdG5qRkrm5hfYECnXnM9WeDAB",
  "key7": "3ERtCYmeMrr3UvSrLqBpcTgYETnvjP1xFbG1qaobfk1PP91QNKZNoHmJY313Wi13mfN3AgiwaViU4b6kUq3PxKYd",
  "key8": "2LnehKr5p1oXM815vsbkKN2ni3HmzuHNmNpzMAw1tX1588BaTAYWe8GdVacBKAVZGKRpicae5UbryjAVf4VgVw5e",
  "key9": "4HgNbzK9HbECEY6C1fW8Zo7MWJF6XAQUBUV1sVt8DbxNDDSPmfMppX3KGtWFUGVEjP7JZkBbQnfYTNBJiAXEBZAb",
  "key10": "5tj5TGSmk6vRxfXNotSbJBhHDEWddRqFLMY7TiRx781PrRdm6eCKaiMFNxogrF55pqU5dQBXWkNufFDwRMPKM1TN",
  "key11": "5BcyQ5SAcjWLtCETmntJaY4JR4EbH51QcjWFLno4FE2gTFmbwNMueh7wNAXTttPNBtRRMerjN7xW7oHx67c3Yjkt",
  "key12": "2qjQDZRoP7Qs7hXtAoYeTY7QvBf36kY15MqwnaUjD31xSbC1Joi7FMS5PNFcWcm6mYbT9Ae13dPjezx635Q9Ki9i",
  "key13": "36aTFu2jvgDGxiuoQKio3yDZWiYrA4Bnn6VPBP3L5HmTuKCX8LQGEVTGunWZkLyi7cvWBGGZZ7pdMNxMnLy1ZkPx",
  "key14": "4pcgNziJpJUPKM6Emjc96NfkP5jjrBpkNr2XSZt7yTz744Xq1CUGaM5HGQzP6MabzJZ5fZfrycrxEbQw75c3qcQW",
  "key15": "33Kwvag2ASpfNSrUto3PvzDYgJNgny8kYaJodK61ppvGknxgNGpQPqj3ya4awauBEe3wG5UQA7zbJKywEroKExyq",
  "key16": "UBcrsytLoT4EcJtBQY3X5c5nbjNVME9YQA84pJMmLWiJjt57UbRpTz9yhtuJ7B3iZ9NMSVnYASPvRvxYEM7wB3k",
  "key17": "N5Sx59F2nzb3zZir1FKi5u9S2rrKaXSn646BCnM4FC1gob7q8dETaK7zzvbCJZTA9k27ZCqT8sQ6WmAkiERsuRZ",
  "key18": "3oPRHRsHMro3rW839sGVXxt1o92RhLH3CcoAx42ErYTNYztQiYtaizqEJwp29iSqWn7m22DN33sBgsABcpNEYaLQ",
  "key19": "4crzmQdXS63GiCmHYPpYVJW1wDy4vcBAcMNMbEN3jNxumdEsweMbaZ2sMEGQJHsypvdVbiHzb4qipbmdVn9f5HDo",
  "key20": "2x8jJ8joNPSPiqgDjcczpqAAf95URdyHZKAogJBQ2f5fAMR7Pjh7Ev5P3iiaG7eksqn1q8M3vw26wwu2t5ZVqQke",
  "key21": "4wRVa6w6L8LJj1tFLUsjs9NidNZCoVinY4TNLyW6ameqgm7zut7eCW6W5WeizpbwAzfgHuZz4s56EmjgGx52BYiB",
  "key22": "3Mt1abtjr9BsUCjnqCEjtmqXjv565SEwSa2EYq6R8GZjUt5koaJ8NLf6E5S9JgffenRqhUrfPjb1Ycbnd7g3yZKD",
  "key23": "4H1rDGAKqQd8GJUZ2WuSkbPs7jFeChdrtbmrjjWYRifKK4NL7nL5CnZUCoBuPNcukj5RVaAKnQtC7TLGDjkmAYS1",
  "key24": "2wK1WQuCTRTfCVRh4DHFKt8LQz5bDnNSL1HZa63kSzf4dLiygECWg1whqs2ZfZWHGETe9e65vNMpYHSkquWbq48k",
  "key25": "4ZngzQWtKUiX5TRapjRHUPEDVnxpAmcYCZYXmVJCBdchjchSjSJeBUPMRsLedfutSL1iCPhPxqYorY6CeBvEU3E",
  "key26": "4dXEfFpNX79c8udruVyzQuNjq8eYM8LNJKvanrfRhBosXLDDiEM5yyKhc18eUx7VBs7L4qdZ4zsF7b9MfLTKgNSa",
  "key27": "BbEfAsqboa4WCNNa6QQJPQ6vqscPKryjLoDAbr6QFt6pHqV7B6GkYqPcPkhgqZYUpzQ6q4yJdwiCpR4NCiREcFK",
  "key28": "4a6XKHwQtrzQsb5h2JyuGNiaWE5UtVUmh8UZweoRwiQira3MwL9U5ALvFBBT3xyQK8Zn7WCPgA8TjNEDQwRa9ERf",
  "key29": "3ePpCCK2UCiMv5jpsrDp4yQVDaRzH5vAw3MLXV1G7Ayhjb7mNHTjQBDYPhssJTSQcojwJKhKEEDNtPagD1K7Mb5B",
  "key30": "48GaycaM7PUgySnj6MyCQNAKBMf9SVG7Ux7GcFjUrd3wUcfdrpr5mVFydJmx5oeVtahHS7USmVpFS7hPbzhrPkSX",
  "key31": "3VJD9SGKRASxeeE4SdtYoDbqnVmbgmMQxj7YmYN7bVchQCCajti2haJVv1MPWWvv45RKociozbB6tar8KS8FhZaE",
  "key32": "4S7zkuLc9fF3hMjDyMsVYDoAuS1zY1ugk6Yj5nYi7cwMtN6EcMYXRNWgu5VL9PKnqEoLQAn8stHDCwEFeQKvmuLh",
  "key33": "3ghzXbUqyfwDqpnFpqYnmWoiv1WYtXYtoKX2JRifrwhshvCzQ9DBDFqqB72rru4eabbTxCPNBdpQgb2e9JV18mRr",
  "key34": "3pe3BYkgysnn6e9Rx4QQwp3Pwz4YP4NstLMTUgq7HcwNeFFE2Aq6mzasDQtTAJPZFY6GLzC1rmoZwNLnC9DL46o",
  "key35": "3jdRLeUQDLG9eywPwsq6d5qdTdoagPXUxzBFDyJCc2cehgA9sGHpQhNVcAwYDFYS6c41wZ9aSuNBDRXk7uoH22bh",
  "key36": "5KeqYjQB6HKwV7RQXoRHSnCnk8fFBXvk89wiFbYE4Fs3qVxVu4AwDBvviWgEGhJc7b8MfDftxz83rXuYgrNE8EjF",
  "key37": "JWKKmoRHyT5JmKPzw48Ev2NUwwUwbx7AnjRyhDRKAW9chvnEiuszhX8HoUiXgGKT18QpSjSs1nPz5pv3vXMcUrk",
  "key38": "556ZThE3z1sGYSGBP2PiFX4WyuVX91ApEacb1R7Car1ENjtBF9Jf1CY1WF9PFVjzsMVtDRY2bgcNAR8kyo8g1cW3",
  "key39": "3bf3odkWo8qReAfkK7urb9HboS2PRQV5bFDTpVWhywCGiQqSFcqENZbewscgEEgv2zW13PzkSbB7vXvc1nXQziJ8",
  "key40": "3k96J6FLeqZ3X6J6438yUDotRX3f2h7nAAyocqMQpZS4TyXUCjte9rFfKf6h7jGNL8HV23m4grFXEKV9CG7vyZ12",
  "key41": "5z5xfCxc2aXRkReKrgtGQwxbntRoT8Zb4oaZN3joTt7zjx51f1qKTkqhCyQNpzWdhfc1mFAKN38aFTWyoqdXTp76",
  "key42": "5zZ1uG9SyTPxDxKhEuZWUq42ygJ26Gd9zyYdhsFj9E6zdTNS9JxEyqX3QPy9B4Ms8L4S2NEjgzbjoPo5MzEWCpua",
  "key43": "5GMjUzyXEjDUbFscg5EwRY2Kxrt6jVjkUEJ86M4XPXp3RQBw7WFBqva2xPTp4PmFvuNiDL2SHLTbxbYXfpbvN9NJ"
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
