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
    "4SH14erW19sVRh7gcSYbYSMwAPSfuR899iLLPPxAvPFJ57RS3uQutaTJQTPKunCUw7MnpWdMsPx3EwzUpoNcqYtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F1ut6MB8dhpSdjC5EGS7ys91rTWEq31DBPtex9pTGamTBQFVL5RCxDvH1Bh4DGLp9HDdMZoLE7tiAKq7CVASHQp",
  "key1": "2iysXjvxLFJmo3d48dYGKVSmcGkJD2gDtXzfY2chqYTjY3anAz3mW8ziJuiGAVmTzrWNpWDyL8CcEtpT3FPnCTPy",
  "key2": "3TLV4oH2CwVcSVhBbAzGJxTFbHMhtFxMhhmFjRMQqSwGCTRnD8henJzcwNhWDULWpPv3uZcRV54VtZ7DWDcFUWTd",
  "key3": "vcoMmnQMKfQXQwN1xhMaBgtigVTRC5fPJZDHUbukMbNtbHpmGN9dmVtL2nrC5PQuecJ9ogwgSNRh3FbbdHtaHBE",
  "key4": "4CU9uuDnHgL2KAAqQYCVvELwyZSdjNfqwJ6og1JTnLuotEyFgWhzV1eNWopYWfFvveX4ijAkxcBsGcEHa9raKUA",
  "key5": "53e91ZRgT4zsdmbjJ1ByrMADtKD9F6DfaNVbHD48YBZLvxcbNX29u4R4D5aL8gErAMf5AYBqwsjczQJ6XguyTfQM",
  "key6": "4UmAKQchk9at7vbyEVrZzXUdu6TcwskFaWV4bQzZmnMBQNjGUjjWX7EBFDjh67kf2BqejqyLMoufviFCopPxw9Hd",
  "key7": "2wNLRFyeGHtoTnVK1MxghMJSfcKzDkiNxbLyJCyZj9DW7UqLvbzT6MV6Fb2mDbMgeDGvNSoYSGmfR2jGGZTWkkqa",
  "key8": "hu8g2GNGBBArz3hHJEkhy38RjzZTLPf9TxiMBXkppzupionsnqpzbr1u8igUYepwigoPWZY4Hn1jDDMSrCDFijF",
  "key9": "sRgSvud2DjzL7jKqPqaKGa7kTQ7fNAjb2hmCzNpNU27H7WMwUEPSQ9ahCCGqiySwBKuJLW9bhUv39R41bW5cyEr",
  "key10": "4GPUv71BrX3Uz2mYg6cFntZnPnXL21r4EEA29ATcwomEAStyMiceMuwmQ5Q8jiEyMsyDh7W1ykiug4G4bsAxdxzz",
  "key11": "5CbgpPBR2H36oX8UJETUZqBhNi5cj6GfYKmghsQxXRCpCDatz9wzuKh9Kpd6ifvjxNTGxKUcUTxfeWRyMQcvpjyS",
  "key12": "2PqoYQvQKYTewWSVJrPgXKhGaXT7qFCjwKLynXYLnNu2Y6cP6YRNAGSiALAXwgGCuoUEBoV9TnWY5sKK8naqXG4m",
  "key13": "3yUFMB2awNB7HVcgC4ep7H6AgniMDd45aELCZAFayWYodi5f3gu91j5RsLhUqzHPJj3Qry7SWhvwHwbp55Jyxs84",
  "key14": "opMUsKqQUsBQnxXJAJdGN1B8CA62C1SnZXUrDfNRJXtAXFsiv4Y8vce7WcjSEKbR5zELCBYhnx8zDTrwa8AURsY",
  "key15": "3t5mn5pwXhiqw21mhHe9QAfkMF2CUwCgBANn8Ly3RqsUaQxN41pjgW56txLh4eXghYTkzh7Ze4aKbTHznUggP2U7",
  "key16": "3P4QQGf7YoPQ9xpW9oswu5cow33gCheccY2h65j2oU1Q9miPt7ykacL6k2STSQas81VhugoJreicuDtxwSnzvHjP",
  "key17": "35jwNTF3oCyWrxgdz9vmAP3NsbmYxU52BUM6aNGtvYHdCXJSWFvDZEC8NdG3CthMjbtZFxvKaC9W6b2HeXLNoNo9",
  "key18": "5kuPxAFuQRyeNNisrjqiiiPEvoqHq8DmBS76CZ3rwL53xmaep8MPuv61Y2HR9nAjc9ymYSm6nwTPFAoUCNTrHiMr",
  "key19": "5DU2urikpjcBXKoi1vvNgXhhPHJTHTc8XAJq65tEF2EFAS7zpj6WymdLgvn7ktaALkHDUzAHRDQhxwDZ6Lz6AEfj",
  "key20": "5bsPd8Nd5FfN3y941ppRKYKGECc3pfEekbcYpzpD7G6WWQ8n5sQ83vaEA3SgsBnWLhMCZdAyWZWYEseqW6F6BnVK",
  "key21": "Tetp41XkrWDg1zsyRt1Vzg9s3Th1JRBLNNiJBQntWJ9JNTsMEBnm5a3QpNNMGLNqCkQeG8s3dA3Hw4CT6ezMx9y",
  "key22": "5XJqcK3WoaASpvatFVKVtc55Axj3zzxQWsBxtzjHSmejeZGNSnJyK8FZ9FeY8BErw6WTypNWZmnWrYKeeaRMnbLy",
  "key23": "5hFKZtnAqcG46GEcsPagKjtKzjhstKgxok9qKsSua8EadLWBqHLjgav2SBnBqFaToYtvoE4nd82ARdfDBsgp7Qbc",
  "key24": "5qNnKUUVuf5fPH9WpYLfJtp16YNFDLic4jioRamYPpjhDDDXs7DHVibqcWpzfRVzHRXMGgJAtvnWpkQcaBP6KoN3",
  "key25": "vLTDBKvRCRuiYokmK1cTKnVs82KCWTFDaaArsGaBWoysgY5qe5hBdgMFFbpcauPxLVLUSaaa7Sz6MYMtgYD4wNs",
  "key26": "XunqCPuFqVGCdGtZcrTFsAvx8Z4HJbYb9sLujYx7YF2csvS3VDKxACLux8xVr9cuCb89Fe8d3bZgo7oxiBr3aE4",
  "key27": "25j7Ra7D2RhJ81ZPPNaG1vZsTh9sYQABuyZfonWnafcYgjGbjnr1WgB9R1ayNx6SHBLRks991JjJcpYWGhLP52Ui",
  "key28": "4AXV8tnc7fhCw8TonkoogTTJfchGpCQPANUNkwer42Adh58xdqXFxmB3xhbSP2Mr59Ck3sUvGCx74tYGAbCcgkgq",
  "key29": "4cG3zesoiCF4VrZKNKgRGZm3hqL4R6DWerq2ndW5UsqVZKTErYsXbzDFZqkYycFaRkKHyM3LJHETGKJTfjUHR6ad",
  "key30": "gQMSKsvkzNkBpkGQ5VU3rarXkktpfUvkBVw2Teju6uzBsqcBp8RVwLT8abhyhvkEZoQ4XKZNG64jbVRNYdxqtKJ",
  "key31": "3FCq4psUq8qrqyv1bHDG1gL7kaeUDRJJekqEkDd2gFD3CYbL6g6fj6aTsR21xtsAjXDx7cyzbosPxHAYMCzkTZsY",
  "key32": "2nvhf8en3vToy5mXswaykw8MDoTgtPhJtiXsnEyDQDjuYhpqFYbACJ99VEHBpSm3TqG51xofU8i9aCjtQ2vBuiJK",
  "key33": "3kV11UWxXFeDGpv83jyK8P11ra4sLTTuJETAgMruG5oMa7DRtcKGofi2ddPjSoBYU59xdS5XSVCGXs1EKFBTC6Jm",
  "key34": "HJGYzeUsZoBCGmP1ZgrkQCBFjzqCZD3QBNwsDvur3sq238QxBCaJLPJDBi7MLB2bmDWQX6cciABDxZ7eroq5qJs",
  "key35": "2KPeQGs4iSqyh8PxdBLAvkDfCYMCsUzAS3gtyTJhknVjXFEHK54XLLuULGf5qveKXssrEaoSAvLFYJGbKhjCsfDb",
  "key36": "67BETAiuFKof6kE9f3Mqj9hkxnScDQrfAJjZbRTVJnFeFRFLeSmAf8a3sWTAjevhGrp7zRHSf6zZSZT61p1zR6Ln",
  "key37": "5iGdKQ1gkq966jgi8RNBwDn6KvRSQmEFz3NEzDVUfPPG8nPhDke2mXA5i5kuZKCHdFpo8MB6Xsz5B69dK2eZ2ejW",
  "key38": "2YjgY6PMkFz8NaTjEtoRwhDyjmwU7Y23dgDwoFnZjJgvPXKnPcHcMdieDeqrgZZcEkwiPeGGfeBvkcBfeFqfZrxV",
  "key39": "4WeddRFSZA37gnUC7NUC8hgSzbvhxpe52h7C3FeAnQQr63ACu3ByjXvhyTqbzxbNPGSbUJLqxG67EuGaihPEP3zU"
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
