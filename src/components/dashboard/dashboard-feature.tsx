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
    "4xewB47f8SdoKRzpXneaSDv3UPd2WzkrXF2UbGC9Z8NUwNemVGfVzaVCFaZmGsVeLPLj8e4GqH9UtV7Ve2MRFmpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nFwkohKmCni8pWDiSKtbRfXn2nkCdSZBvPMsHcsZR6SKQTddM346ogcFk13Hs1sUXJ3GMAXGt7nyFfbdZHyQC2p",
  "key1": "47G6FHNBcUncTaQKfCgwPSBGd64aBfVn4EAUv2bbuartFNPjdoDJjYVrgdzijCkHCPX49oDSziBwUJbYp8bXKpfo",
  "key2": "2Bvj83TgqQCswvaUwDb3SFAwfipbiAg6kJi4YKuc5dAyfGVFp5Vd9BTPbTSXLnCxJ6HdjRyvsGrPZhoAT75WF4po",
  "key3": "4QjwyH4rZKE5bXBn55zBDVGdrffDug7zsUJYeZg3h4av3rGZtYEVN7LUsADz3ZWioXpr8Y4fnUrzc8ztdmGxEFHZ",
  "key4": "5s7Nqepi9HVHP6cHtpsjyC6AneBPNiUqgdSmSD9K29kai1SmH6djDKeCYwzBZqGq6ZspzcERdrdspksnWvSCeDMY",
  "key5": "5czFvG3atNopaiMtiKe2ZFvGjyvy5uHpCuywnTLEzuDJVY2BJMEbXJkRusEVpmBxYf64BNoonRH7SUVLpfEdUNqt",
  "key6": "2ACvRkH8F8y5jw9nNruUTDesbGCXBYj3x2adLzQZxRn9CAwLkvTc1fmFQj72vxxqVWv9rFtZhkfeeB8R2zexzSSq",
  "key7": "Br5my3bffygYrvxwYL7CvKmSeuDrwNAuWojBiyT6Qsh6CVcBDoSVFcKy5byxYSxa2bGmnABCutFgwLqDf4VPxBe",
  "key8": "LpJKmhU11zMgt5txDBAd335MedPnKSMxhPQxTrZAj1EjLemUAMsRV7PCUdoz6b586py3GZGdSQgAngQjMZaq4TS",
  "key9": "61tWjD63GmvCTZ3fgmz6YppahxpwbHrNJbLGqEKzfYediQgxyp13SA74khfxKQEypPMeMee4mAdUQExo6APtGWRn",
  "key10": "59C82VAE1c26RobEfhUim6875Psv5Zj2Jorjf2wqLE2dtPgLgpC6n3dRhFHRKNtjswqbBX9j9EJwwyPeQpBhDtkh",
  "key11": "4kDRgESh7mdEapFUcZuuEgFZ7UPYtTpxM2wxj3moJRaJ87wJ4SoAZSTinZe8uSKWbmKBxpQ9jyXnkG7sJrstxQ8U",
  "key12": "3XPdQd3CLvqHNPWjEoUJWjy8H71owebThWBkXdY83RdXWgtE1mowAV7VfLuTXQtMXgGcqzaJYwxA26qGrrQHYxuW",
  "key13": "5voFZiDjfpjS5fxGTjaymNAtzb7ck16FgseVLYcZXXBq9QZBRBLaeoMfYeZ71642cmeKXYat2wMLtswrZSz22sag",
  "key14": "5tRcJKh6P9ayJgn2QYkzpA1MwtfixaGhUuAE6STBfJBndWFLrtLHooMrvkV3HsL6jy7MpghdcoNA6EpEpoJFnjqG",
  "key15": "irzpwzyqufohGreRAYGmrWraCrWG5JvbkGuWx87Fao6DzsXJEQJ4kvZWLivd3c8YJThYAfE787LDG7QfZFPnDQm",
  "key16": "54KEdSxUPiisJBo9xWzxKvygrz8Mw511rYnwF6Ze41MZqZZSFtbzzcjcxmDAAM8uQ1CRNppbzRuY3UM3gmKS6Ycr",
  "key17": "5ZeVHP1UUfPMmHzJpDhTrtvvCniyFv1KT9DaqqMhZBzBWvtM267phrXDfvRsJ9RDqtE25wvcRt1NhePsvyq5V3Q9",
  "key18": "4noypGT7dVXe7hEbmogf1rN48EwrY32kj4FVHJndsQnPGLF7Z7fr1JwHoKyfPcFon2h4yKD3VFJ1vDuiYCvJcWGh",
  "key19": "4zZYqcuQg3J2SAHULExSpHsCbV2opJD3xYvyAmSyGArKYddTFzvcjapLQFtRJoJc6QZs4zHpBDmJxNL1TRdayhY6",
  "key20": "2vMdukTLPmydAo3gFBvBTN1nSa2EcmnTAH5tqh2kHQmgA8RW2EXfCXcbESpmGjXH6pGYKzUiPFqojqeMbFoexrD8",
  "key21": "4bfya1kYie1a2AUFutQHSucXV93xxXuXjpE6KA5Nqfxq9nUQuCVRQ9w7b99WgnTsTZYGiKNWoqS9waTL2sFpci4C",
  "key22": "28u5wHQCpmqPEVsrXn5QbLgC1fAts74KKJJMpuDksH3SHtysk6b3UCGy78TMpy5hyXGVkpgnAQDqqMQRmfDqfbqb",
  "key23": "L82zPWXm6fDTevtoejrF6EEW1hBZHNGqfKvGrXKBj9b55PuKCCbBVWBtpdg4DnjZNoQHBSpUcY8xQuaVCAfs2Wz",
  "key24": "3hoyXw1rcP1Gsx5Lp8J61ooZontQK59pBdxUsPiWNrvpxb1hHXCXKcvQgUHmdybVEids97ecNCGGzvaB6uWi6Nun",
  "key25": "4RDkqqVD52kr1VsJFUtB45fo3RLhYEJjHHki82NQA6TefdZzHR2LV6zbteNzfG5Ni4nA4RY8submEFJhsPmNhHqy",
  "key26": "2PVKi2bmvTWH3gcC8dXeeYW5KbanALj8A3ZnJT9CUmsQZqsa2PhRswJrRatA2kUJwQsSoa8gtJ8c7XHoq8WQETL3",
  "key27": "DoapDd2Rb79qAyrwaMhZ7Ju3jeQZPsbxST6frHV6CmA8om712EW5gRrXXtvMbKbG4bc2iDW9JPtWJbfzwbZiKmu",
  "key28": "4srHoKbii7m8bzdpeJPy21RXCJxQrDe36NSNtodmRUCYCjvATQEcvRVQqELddqueV5jm2zr5iheBE8Cygx1rstsX",
  "key29": "5xyJdir5pevN1EcyiJmgLML4VH7ofThqoxMVqbdTCN5uCHCzVaoBhKcZStA9TsPA4wKuMiqh4PnwXNr4TTYVTaEU",
  "key30": "3Vci29QZW5M2bpnVHLKswvgG7vJFcqVBSx6PUD2jsBDgKUn847cYc6UhUcXqbAHj8nrPpae7Sp6MyMrAc1RQd3ta",
  "key31": "7Y5cEgcZwTprix6oRXV8vjDciajhaQDGzvZJsns4KayynZkw9Z4kfUSRuH2iw7JXt62n1uXK1wU46Y7wJWHoAXY",
  "key32": "Vvp1VUXeTW6x3s1Ys9bbVkGM5Mk9HV2pvdXBmjyC78RpPf4xeerGkXQMjvyc3VdFaAHBV6JfMsvKEuwbGeErQK1",
  "key33": "PJQTQJaegfyYP2G9bzZS8DosRQkRRGHVNWnCVvp9ocJFq2V6UiCpsDiFAcDMy8ZiqzwR3v4hDoHn3zenHqUCNL4",
  "key34": "2zCDguRkvASTwdKSkYwdiJXXPtBviPY6xXos16gkRpWiUythKR8xeULNtkyZgasXF9PxGUPEbp3XRC5T25jXELBR",
  "key35": "4CrortK62ezbUMXuqeD2PZjRMYYuHg3XXCK5X4XjHbpFXKKZQT1ixoWPCLMxTA1BAzS8wJYBXxhb1sKKrrZZ4zCY"
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
