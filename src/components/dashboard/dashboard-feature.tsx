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
    "3YwWUeicouQG1yQd4oSYsvW65JDoMnP6nz4zKqWWMHEkvrmueQerGer9VyWoUMHf7StaXLr7Li1BvE2jPn8CgF9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LTCMCujJKvHz9nF4rVgDKg4FhKcU72geij6igLFP62gqudMPCYvWDYV84MUGB1wgcajAEsj6dE7J67oNbAe5AaL",
  "key1": "5YHbS5ZtEudzBpgDpFL8UuzhEEWRaijGoNJaTQnbFZRjXXqW9exgNXVKdt7hfaSHQ38jTG6fdNLFutQWpAzsnePx",
  "key2": "3JD7UXEVDoyFSKvJ2GWFzV4VVKUYSzC1f73tvo3J78tuafGdpq97KMv5CoTBBTiEkZKFcBvMy6LzWZiS5zyLChxG",
  "key3": "55AhSxWxAkXtvfDhKwVpM2YzynSSSrwkdKmNoygb73drsdNGut6qKaNQXjZmpMsDJMLTgrwfyL3QvcYFYjsuJyEX",
  "key4": "56B4cKa48Xd97Mdqm2yZzAZ7zGFk9rFNxsusZtqQwBsbHZkdhHiBdybNWUo7Bpm4kgUGLUHTF2uJy2voYvBUufbS",
  "key5": "3QK5Nf6PiN8F6MTc2QcjYjNEhUZByxp2fxWTzLcSGNdkuBqCytnzJD9WLNGXwM9r6c72eZrkKYaJWFZnwDeuWW9L",
  "key6": "MfK5wtCVuwM4vFfU2ZQrSJzGMXg5Z11eaYqZ1sBhRcguQEkTRTEzSAodhNoG5Aty2Kswv4XdkU41GLJd9X8enFt",
  "key7": "217TSw2bog1Sfevb17vKKSAHQ8DeR4mxCzfwg9EMBXktQBqBoAMmXNDf61Yi5p11DBTq4VBVg5eLfuvt1S4YaKp8",
  "key8": "2Qr7AzuuiNeV5SsuMhwdER7hPgBj1CoRKkPaQaFny4uTMvbAL78zrs6dESAPK9KD5Tb5nKohnDzuqk6rGWPCN24W",
  "key9": "651yGPbRx4YCV4PVyHgG34mZfM5rs55uEsVhpmDN5x8Ay1UX2hxRjX3yqpjRZw8eQpTTpQByBTJNxzxS5wu2zoGr",
  "key10": "3EryeQk4eeyM4R6pDJSEDPS3xwH6ytus5kpNHZ8M2JbkaMc8DSF9fUgfjK7FeykJg2Ua9R6RcPcxrKoVsnfayMom",
  "key11": "jpBjfaYqQ3DaNixdkyvuZyxk2d9p47LqQMQCfaEMNF7bGuoPyvM4T6pzCxohtmmn2VYc9PSQYVz9t8BUFBu3er7",
  "key12": "4wb7KSN5xqPzhnpsqgr4aYkTJhpsvamBD9pMjZnY8WAkjESxusEqGtjcjv1nWJK3LCXowmLb8rqKRCJM8WtWMEvS",
  "key13": "5pFGXcWyZa5EBLNGDEyVHGYojhh9acLZsaLCgaWdjeLrzSYCZdfRvK5ADJT2oP3UcoyU7KmANJcCaETSNDvZtWro",
  "key14": "32aK9tDTpm8rTqwXRDYbnF8n2f5tseiPbyJVANWoiedjLxuuMByJVbVpoAP2vHUFSVRyMn9BCB6hrfDjVWq91MsL",
  "key15": "4GqspGzpjyZgPhaF5Gx9X32XsHDd4LE3Dwtng27UASt2dDAKkX1Pu6LxhmjYVxnrv7c8UZ95SXoS6VyoVeGpiCzG",
  "key16": "2bDxLUX2nHSjnvmEaGQdNGYaWH5gb7922Ms5rZsjr9fwD7CAtXJiYmHWbWGRGj1mKUnwZibxhVmL9w3zs7zbe6Mp",
  "key17": "EBH48QkRdDXMGdEsKQcGhdFmtTQzQKHrBmGf4aiJ3FVx9VXCLhjwNaTuhe2gU5xUA1T1V7R1QKnGAs8dNtTNK8m",
  "key18": "2yvaHxsEMhWoq2tSJonCSk3S64ynSEVK8ShbRs61FWRu68dj3o5Gf4EpHaEzz4QRbHJR7vJbqTfoDL4qW97aMYS1",
  "key19": "afyxSgidxZ6iqmWdo5XWe7sKhtBhpShMhwwGyb5RisMSPhPEozcKqqe1gnX4nyY5UNy5qSdPDWbSgXXrz6giLcJ",
  "key20": "4pN1DqDxsXViZRvsu2uGKZCMXQEVRXZCnBcYTkJzDv2s5KcffGxXfa1A9ZVfkvp9qDjxRz2PcXHKbRo9krRKP2Ti",
  "key21": "2mtnK7WVNBSLr83Q4BeTVNWUddqMhxBLDK4fVca9DMUXAZtUh1hXx8E3ktnjaoJmC6Hy4PTADcXsjdCXBi9vNTzk",
  "key22": "5hoHH5CpAaLYg7fMH2gxVMvWMM97iebxajPSkQtonU9eEVELYmv72m4YfcfT25f5Xn65LtsUV9cbpW7WJAU4sgPi",
  "key23": "VV5cPcfjVCfbLKRrv2MHNtk29GovPhfS8dsgjGWMJdVTvCzSBLAWG4CjfSwzdif3x9bo4gr42xYbrXVRQGa1kEb",
  "key24": "4z4roDRctnNZENQ38zmutHjcukseR85D5bjcib4qRXXAMg2wPWTJqH2kYG1acxKsqs3R9UUoUZb69qXzo6cCSHBg",
  "key25": "3NBFhDgkLMAUaKb3cSUtNtgF82fXbgGZtpuKZLhieSmL8mwpZ3gkht9n5UbTB2Rj9CvbTpx9GqunoujwYqtotPKq",
  "key26": "4Ptf8Dn3qbULq6qa7QboHyDCizQPcxVA8oLrFiFkTKiTAuLCXxf7FQ8iXJLCKpTwGjQ3ebU7d6qJTrhhiVmFM93N",
  "key27": "5siJ1TbCXm7XoNLmJmMHkX2JuLnhe7b5iv1chRDLboZcN4i8y1PCaMYNzzDmMQdoc7FbvLGcPq5BdtWc4pPprMbr",
  "key28": "j2owiek1SEvKWADjHwsKHh3NAJWGXXfjGYFwcHmg4UBTWCVG58ejLPARNAMSz1KABLcyYYx9rJasjTPZkB3MkWJ",
  "key29": "61cAk6KyGnNrFUquCFWhAV7pFsqyHbHSmk5jperEfX3fLKGe836BjpLeehhFNBk2iSCJrPxRqeHnFrpkKCcuZbzS",
  "key30": "4SpgrsHsMghogm7KupiAs65rvr5oVrab22HHazRQN9gdYo8QydzqrhV41cEUKkSNzynC64At5GVDkaQfvzUohJEE",
  "key31": "4zxeoHd6sPqMyutwx3J2wuNcwt6KzjUq3QPURTpiCz9Zp9jyXCNTFJXRMFynzEi8wjtEjZaUK39hkribzFxi9njZ",
  "key32": "2x4GUTbdGFJNKP5Vx5nkFe9WA83eX8YZLK4sZX9T5Ar6DpVVjGXguHwk2vQjuBmGkJSGqeiXKyHKAatPiJMog7Hy",
  "key33": "1WtKMdSPnZRo1MJchhpdYcVXHMDcvWaGBwfnHGCmHRh7bbnMLRUgHQCL5rCNmCraHTjNgGoVWDwx3YnmBguxkrh",
  "key34": "5X4WZGzEMnXfeUgTG6KNo8jne5eRXLtMfhQpMgV4VFStaguzam4C4xWnTmccTGUedZT2t5ttKY5Vwp8K4SQkjATe"
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
