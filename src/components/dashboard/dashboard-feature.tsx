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
    "m71KsKggtvSGvTgGkBr8zCHV11AsF2mx22egLfDhxmGvaGr5PtKBLuCRwPbw4tK8fuFhLGC4Pc2h5TgcxcaasjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wZQiRtoSJHWByKyAHuh425JGQsPtvas4S1LnHccSVmbPQycaB5k2wAxfYXi13iLLh1ZegtH3dFPnG94uLLFKfCR",
  "key1": "28mnueJiY4WHr1XzUfukRs8AW8yTPuS27HfeXEeCbdBzgsbDWZXQYhdfhfukzMUjxipf3GkDoxSVjzq1VBZWcwau",
  "key2": "3cPZ4N2rJ2kEfJzKe6vhSbLSaBnr15h3kdpXeJEnzYNyNDXQdD5szxdPubC1Bap171n4oDqkeHkUtGrRvVd7jWN5",
  "key3": "5RzvwYUFfQhWfwvhSe3Y2yV384qc8ExmoFKYbzxw1bpNAtjo54b2di9X1jsB43k9BGb2pNFBoqh8Dg4poHk9KiNc",
  "key4": "25B3oxRq52tqEshUmLf4q8vScKqP2ng9h1r8g427E2mZw8WYUKUXMa3bkuJ5Sru7bupLHe66GzJfFPxtYmr3cqLw",
  "key5": "2uxpmzsnLXt3C5h6y8k5tsKeUEUJgwZ7WtetayJGhCFLVX49VwewJwSHoqjcKRjjLKAq5fuYgGhbwS2uJ4c4x1c6",
  "key6": "u1oZZ9D2TSz6jgZHjEqACAyJUXFGr2uaAv4BEAEDwNg526aX4UAMu7hnD2LiEoCBEfyXQUBdPSNMC636aRUmm8i",
  "key7": "5ugHveCn1Z9bKi68nm4VeV7JTWE7bPzRpPbknXRsRKQzEANV6q7k5y7omUAXp5FJf3rzyEhc1HNkvgcLXHNvRac6",
  "key8": "4rM9JxYgrB2fSV4sNUMUZLTYbKCtNGRyCWqTEdVUH6Ja36gam6jYVCfutCctbVs7xMrsTHDjabETx6xihqDwHn5J",
  "key9": "565jbNiioXG9FbYJqD5rJiR7QaXmmKTbSSGvCgLMLqkoXq1wnK7NukgPgVYXM4TrU5FbzRjRTUMz7SndZ3cjBQ9v",
  "key10": "3Zjks3a4iZt69xu56q8YZ6fsuLnta1soGcfxf8APTuA5U242cTn8D8orDyG2MxtwLGz6rBCRz3B1jBsX1Y2ws7H9",
  "key11": "4AZH5UsX8zuMiHbPXekEUB86tHthVKugjjMXzoWRMLwdgvmb6zhcDKRyE2sC7ijXRHtaJ6EMbPn6MT1AKo7psp3V",
  "key12": "4pQrpsU3pd619vYPep54xL6qYBMbTBLUD4mZ4vXwA8S3qZPAaPs73cMhYtW8jwXFUW343MjUqAiLNPVZFCbEVHE8",
  "key13": "8XJDuwkBUbf46BHonfUQZLXspRfvvHWBzqd2dtuaZ1uLeKmpvhYYysSbjW4HhBJv25CtE9MX7J19BLoYcqSGpqr",
  "key14": "34p9wPjgJJYS2QGmXVd8nNaBFvHSWnnBhTLWsy3BzDCWAPrT8iPeuDSuuknPSUK6nvNQH7jDPnYV8NGJQRppJ3jR",
  "key15": "3HGDUirXfpwyVRCuB5VTU8AHSZ1osKfM39GYUV1oX7namWsDHvLuxxhmfCK4cd8vtqCvqGXBHrwEZkttFjKoZhHH",
  "key16": "25twNVMgujekdERJX4rhBwvC785yvTq5e1htaEURur8aocVzj294m3G2dzE9Fgdaugz1cH4v44tjb3WLVNo8NJFU",
  "key17": "4hsKXAuvSm8oToaAe33wv77NVuYg9M86By2KPv2ttmMMCt6gxj9svU1AAu61EQCbvuUQKkHKkZumYqdewDNz1oTa",
  "key18": "2QPwf1YVVaW1hJZkB7ZbaAXnJb5jCc6XTNL3cfjfMpbtRt1aPGsBNxqLEeAYzNWBgnZSnXxdV3fJYM7FSnDs3WoT",
  "key19": "5hzQ4RFpwyQKsDUHgJ7vrdmc1JZcVHDWTgv1avtfTxpZ2KvcmNFbFwamcZYsg3sLWFyYxd1baF7FBbhVyB9Ym1M1",
  "key20": "5rL2W4skwWQCCWwn21zu9R95fWSvpDuoBofgbnLpKKg3zNYVDuE1qup1yvdtbq4MHTFGkn43BrCKbRVjsTztQPpA",
  "key21": "2HcAEUJKfZhfoUhz7Cf42MytYqojWY3UrXKNqf2aaGrAjKqvrwto3mHWtXYUcjPsFwkEtPE1Ciufc7hdfstBMp6d",
  "key22": "3PdLt2dfPS8fW7XyjSFyNHmP3ES1bYgrPQjka3Qzi7BGWuDaPJwX6HbHZA4gqvZamqNBjeAhgGvUd3mK2h3VRtsV",
  "key23": "EFvqCTXcDG7zVbKdg3Arkbf68DzThDRTA3RatuhKNbeq1AKtkx8xXN4RUaSyKgq8Z8QPQMBWJGTSGUKpkoxeb2o",
  "key24": "3C9P5xfi51y7ygzWDUUzupJmxHPPeJJLoM3Ezsitj6daaV3UzYhtEZmmfmBPVwKmV3ZFBfy93y2i19VHNs8RCH5V",
  "key25": "dwKy4SjTpu9Xec6KiqJWWH7MMPEAuoxvnQB4BuiPLU9dZCsTcf7dgsC5EchrzDbJbD1oVRktvdxX6tJ94E9TNLc",
  "key26": "nqU4QmqgM9dvkZgTQAsPMrsRfkfQsCGD2quG43rR8BeUxKkUSiKAfsgqT3r5uacPzKcHgKmaL4rEeG1kxbQUBCp",
  "key27": "24fHa1hcRHcEdsudbaCfw2rFGz2dKJeaEg5zLRrf7XKD4h55EhnphRbP4KuNKrgKkscov8DS97PGDYWJdbTHF9ch",
  "key28": "4tXexnK74zt7qkbJNYs2sVLcUiaH8g9pgqX3UQ426rRh7LgdQ56roQsdE6RVTMRnFi1nFTSdWsSAPrXLM2Qshp1m",
  "key29": "328akNcipCrGNprhnGAGtUarFNUDmipmCUG95cbmyB7DjVkaD6EcxXJ8GUFcin33KeRV67CYh3tSjkrPaxyryak1",
  "key30": "Wder7XcCJ29bH18Pp5Pc2Rz4uyf4VQHha5dxqtRFDvRWpKTLq9qB7QPPM48RXbYVopm5j7FNScgWQcRtshaqzrT",
  "key31": "5b8SDwyP3MawkCWoLjsqtFwtMKrcYFWLDu25UUKHMkxYj9zuDeBR4vLHs27b8DYUe9U5sFiUAAg9fhtzPX9uVtSn",
  "key32": "ogDHHbFXkKxyfKJK35uwUiYBHCUtvNJbbK7pxFv5Unkrmw7rikYnMBPkMRobCxtj6CMay16EteBcE1KrbxNRYBX",
  "key33": "5xJf3tLbVhBbELDnxczNvpixW8BnNqXYWWzZsUj8oayB8XtYuWZaUcZGUFVsteThLsXgCoekFnPbKKaTafWnfuBp",
  "key34": "PNNuPCWaZDkAHQENcmXuynhAWE9HH2gWWuXxDxtFPDyNJeBX3q3vjuMbq1DNWvZheTkyhm6a2gWbjRrJMR2L6Do",
  "key35": "2954ySWn5VchVvDoTLbzVhE5SX1SjxzhSMtgRwn612crFvWBqhFLVASNZEp8rD56RZKJuGjmejVKrbLZP47AexN8",
  "key36": "4Ew2uy2D6LpeYvVqnMMDZpqHqJRvqPA8CtbDUwbneetdFywx7R83cMGfTBRkPxBchdZrJGTxgGwDqrF3Fiwxcbiz",
  "key37": "32zzTNufjTnnupag53zmHrhv9U6q7pNiMKkzgujmPGn7JYQCiP7y9Ai9J7L8nCNxhRNgrBbboHD2LGAshnjEndjk",
  "key38": "5asct4wfgd8o7h2YZLVFebQPXXfKcqoXcg3fmKP8DFeqCF1gNDB7Jmv4hkP2CQDZNH2TRLcRpfBucneXzEcCW7hS",
  "key39": "R5NAmG2xreX57XVhuK7F246hcKNvsRnP1rLnCrVj3ev8f6viLSZKPzvyocx41J7oXwHhGYoqBHMfyykrrVCM1gt",
  "key40": "4ecnmEvJMVzocvU7HWiPmcmi7t9W47uGzGp25ZPcC1VMndZ7rZXrusn6Nm8ZTKM2SW2qwBNBuq9nGcH4p1jHNFDT",
  "key41": "5Bga4qBX4eT31vHUKgbNawgBcUZsZLh4ZvDDUDBtdsSsnRUduCXojpAKUAks1NvZSVi4i29z9oPfr9f3EFCZHqWT",
  "key42": "VoXMgg8ZqiySvm9CF2mPtQfJDTCfoEnknrPvR4xww8F2KEPDQPUKFgA7aPXM2PSUqpeJaPAHDficgj1pPt7BZjD",
  "key43": "3YPXvQ3ihYYj2NejSTmKr8XJkzbfPKfu1NzxjfBEwthiMz3gP7yLBDSog5gGEiEt6aLRT1AzA57EMbutdgAtHHxT",
  "key44": "2hF2SPEvP5UVbxX4ShMcnUGGeJPdfxZ9ZCLTW3gymrxteHSwZKxnSB89DCkwnjrKcxquRe5f4a4VPGn3kNE7xuEP",
  "key45": "5TQNVuX4fi688gpgb28GvH3MMTWEA2mK3gEDFpbaboYAEC37dbxfd5vWFapWZpb9UC4qZx46CU69eCBtB3c3xioh",
  "key46": "3g2mgkLkDSmYM14xhr4qtvwRDiRJtiSpGdChWncaM5i6j28scLU7SBcubR523zr4DszwRFTK61xkv7ak4JVLy53H",
  "key47": "2ZM5suW3czeVupaPHfJTy1bCvsDLZSYnJxgxWuPZLCxSaUR1ejaC9Ewc9oacvxU48mD1uEhi2rkNDxkQCeb7jCM9",
  "key48": "3zSstBx4HAp1LFAa26xEYeLzbxbmitkiRNcq6cL8995jikZLGfN4sSzeD97uvLkZCxUDGNUbFHCduGnnWA6VcGPF"
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
