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
    "5TBH6Q2opBcvahQDE1bJ1BKR4uEfFmjy5EXNT73XLVsR9j7KbeyepD1sj9AoUgnWA3GqTNxB9qUHuLLGoQALR7va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kjpikiNXPcfw1RnFGt6qwaBVXyJTRTUSiq2VKCFFThsn1aaShfsbAgfuLqEnoyBwxfxcpLTmeKaUzTaxgoh5aYQ",
  "key1": "4VkkSojijdrYyrP1hPwYsob8tKGmnfUXJrEn1hPvdo41z5h2xj81xrd3dryFP66rHE8LDayNjRkJL1kwLpX2LJbH",
  "key2": "3CnufsV4Sk4zi9cN3i8fBETY8WxBtPqT5Q9eJMAZzCppgdLEgqkrJk28hg8no38Dp3TnRX31vio2K6QM1AvqaTwB",
  "key3": "aCQvp14A26DLhWHwnGQvK1CFibtraXBxArAXSRmhCnnsiKLTu4DKheZCkPTLMm2L4Kp8wZtNmxgD29x9kpG5kN4",
  "key4": "faseJe8f5rZznhgTBTBi4YSfsVmjt4WTij1dFZbCQeM1pgafhBJvErGysALJdHb91G65WF1mGxsp4w4qfZ8ACa6",
  "key5": "3FS9o9QZmRdFvkurpx3D1kGPPP1rBkD1cB6kLKmEhyxbBayvTWQfuEsCcLpAKPWujVQJY6zb8GbYFwCwSeBTayUP",
  "key6": "5qJa4TGXLCQbY3abRM8tTBTT8QqwaTy2o9JSZfiRupWvkKjdmN52p2UT6XZ5zwMxK3mBq9x3Rc2dWk918rkTXpaq",
  "key7": "4ankBGFE1s1iLxQfhiQZUkgM1U5Yyvhmqh6wGeNMCPo6j7YPYQMKMTg3pvZXK6TYPBMgeZWpa96N9Uuedr1oRD1T",
  "key8": "49xUpLYi2s2C8z45xSaNxq4DudZRxEF5L6ZJrCdN3ELJn5QzW4QhjetfiFNVvVPS8NQ18TEru3qcCrR5AQ6JTCu9",
  "key9": "cRDTFCUTRrsQJV1SYui5Yg95KgZC3pf8aKgq9s7gpHMwfKxURHAFZZj4h4mtQuWsyX8P4q9pyWQqmE6iSffS6wf",
  "key10": "64U63EFESTLzWmgo7xcK24e7VX588XS3hcuKU1T8BqgnE59ebdHwCiN4PuJHGH9xAmE1sutVsFn7NnxoAmJQYEyQ",
  "key11": "B4H3CBkWLnnmkyFZVYBnxtdrC1FdgDkrRrPgAqKDv9611qxrk6r5YWaYypQK4jkiMXHAsMPSEMHhAVVBzrBWzMF",
  "key12": "3ryC1E4fpDVKsPPM9vLDNTgYakfGNStQxYY5Sr3Z9nBkuLzaDwMzpqL346Ca5KKvs4u3oYwwb3DJG5HeaqwBQ6Ju",
  "key13": "3qbFKw8wigMgajybi2kXuRD8pdCS7EbQy9b6BKLQ8Sz46wVaFfmdh4kiF7C8GXg6UNaQ6sT3Hu1DCSCmaL3imreB",
  "key14": "2rSuCW5bqqpAD7EMtLBYa4kj7fJ9XzWQFyfMSHqawWvAJyrtxZ1pzqmcKePoq3zMwRpHBS5PbzJHzERgtKFof17r",
  "key15": "2x2cfdjcy6dfugbJX8HtdmtkMRJDiRLjvjqiUfNiVscxQvSx4jsdQq2aGgxQCtSjo9mcXMjJo558A8ydpf7AD85y",
  "key16": "2b2R7uxfznBj4k7zFwrHmMBZgRYZb8z7tBCdC1FHAnXFhBD55ivWTS4CSBSJYDo6jgN9e9UXzPuxNrEgKXww8QnW",
  "key17": "4hew9bGzfBypauKEFU2W2URQsmxmPDhCfEpfAuFkioehcfYCCpUgZRtvSoGK4tN56LgSjGchSveXFTCnVGA2kGs2",
  "key18": "3jUUaAHdPWm3KToRjK8nUv9NZEgmeuE859JS21qKatkjVtGU1J99iB6qNDnoKnAEGAPbJxpWmgLmBVXxCsrm8X67",
  "key19": "5swabgesyzCr3fPDMDVa423gPYe4U6tpgnUFo7EjWfCPiQskAe9CnwifgGgu8zAk86h5n1zRYBpjDS2eJmYBg6H6",
  "key20": "3ShuY9iMCepy4Ce75Zn1sDm8PqcVYweQWWxpzC625TeCwMDgLzvnxsY3BUF2LxoU5WQv7ZZu3y7SdCk4HNqoETQP",
  "key21": "6KaD592NxvVNx5rsYtbYifRHdQhyn3DMKYKrEqnocnaF5DkxdcDMUzveStisyfgGiAYxrMWUCQg7c1KzF4s1gTD",
  "key22": "5qVv6oW13wJgiCsgFG92HPjA1UEizTyuFjyRXDGVG3hvsZCVHPh1ksh92PCzMAENSZkBLDCjw1PSXvBzoi41YS4x",
  "key23": "41qX53U5iPobZ9GGwy2VT8odYkdBVsm2WRpVjQ4fR9oBUteP6eoKPhk38Gt4yLSajUzCswcFPSfBrAurVdzJbFWZ",
  "key24": "42nfmBgFVfSkvah11BhijTV2hHZCABxgzte3kCtXP2eBM4J9m8EpYSp3XDGpeMStSq6VW2jvRyF4W9wHtjQrKLsf",
  "key25": "4AC7QVtqPfZxqz5SMuW1PUvLJeFTfG7WtQqHuHtBGvCm2RCQcyL1eQR9xjG1H6evMu8zx3x7bVKq9bqdwaHNXtnC",
  "key26": "4y3Tzf2n2dGcMxdg6ke2k3go4LJf6z6eJxuWXuFH7VNBApHsjt84Zju7Agwg4RWV8E9CZpNzmidykh2CLgYqR9bB",
  "key27": "FCqU8pTYs8KdD7hUEw6Cd7MdPQaLpgVwdFCyuL9WcgHVAmSizv8K4KuPM6AcenzrQ8jkbTnn1hyB1UnSh4nhbYK",
  "key28": "6YL3d4UAPA9ZUksZT3GjcfEEMqfbQgooA29eegz8Zdt2xxLuFFy2VpALXtHNdpiGehKnHVerW9eNzyraDFGGqd8",
  "key29": "4ZY7xe1SPmGzpvQPmWFPqTfpphonSyr7PshJRMmbPYLUmJm62ee5oJf2Bc48bPXw7xM8wr4zi6VMyDEidfX7UbyV",
  "key30": "3JBCKW5L4uGbT55N3xLFjvvt5zucfRgG2mp4tr49mHoPwBtP7z4B8rSTHWg7FSonbMCyuPJ4rpk4g1fAVFZpCGun",
  "key31": "5uFfkh5mDsq3DFnFXWR7MVDNF4SP5KLCybe5TvEVfwCZ786XhKS6HAYdFgicgPJ2UHvifJNv2QCByNsTVqzYtugd",
  "key32": "3vYdMJmgqZb1tphi4GwH91rnz4VGdqXL5eNpZqeJALVAChyunWrHNWHLV5QzBzgYrtiDrCvXptvkWCxEavZiUFCa",
  "key33": "51FKCsePDMt7STuARhC3uQ5UudsyaBXV53RueWBMZzuWSguGrZqdBdwdeTkSXX3Wvv1m6TENZu4yLPXANT3o1ZMB",
  "key34": "57spcuiEu8oT58LFuKuiZchB4qhYgqn6Urr1uh1URrAmRac555fxTqxyrp72NdDZ3QmVkEDNd7mzwtaNKXw5EMzT",
  "key35": "5PnUDVcqut8anYY1FGFPhsFiTDqVDjz7AufMGW67wvKSsYSLoki93m61hDc5kXYHmmcAQgr9i7Cbmd6w3o1uJoRF",
  "key36": "nX5bUaUUFhSomS8A52VHaPirbk6tx2MckoZccY79w5QkGDbJdQwfPegGXT5s36NVc1Xse4SGQVPRCtYkhkPZhCP",
  "key37": "45SM5svrZhozMyHEfBdERCZhTsNJEi5RbLNvCBrkKkgTanjoZffM1jBLVgKZnbxUWQgj798EwQettnJrMeBjtsxs",
  "key38": "2vMxt8jAqS13F9a5cGyz7yRepNQoUiHbwr96vVTqBoa84W1Xz436UP8CaSZemkPDytQVdXUjWe9LCLquza41xyKc",
  "key39": "5YqgvJmzLRMC3NgJLx59q8GR4ZKbBQUhMKB2HkREhVHi3MDkGr2Ee3exp7UNJT2SE9YxQfRBG4JQLQs2o1ytyBRQ",
  "key40": "3Qyq9FySSsBVz7cXFvNM8TKfCcGTotf7KTjHgU7jiksKjVoucytExTRVH7AbkNCpQ2SFM9K9ze5GKi474Lvta12Z",
  "key41": "5nmr9B1jWNKf8sVS3biwrYSevAb4n2QDJTdyvZFTTvYYX3xFfUQZtHzmUoLP65uVhQY7Fv4CsGCHDmrwuEUeBQ8X",
  "key42": "5JDuSAkEVhepoMiLLGmSaKCVVrvQ6nmV9G6cCspTfWyZCLFo4pA8HWC8rKMGvU6oQNw8WVfaURMiJX2jKMQrc9fH",
  "key43": "5eDwpGY3p75uAnTXiJrfiYqpcSKSC5zx6Bcdp7GRSvXW7SEbhKCtBbivKLppv84GGLRk8KDPCyqSHQndzifFybav",
  "key44": "4XtNnuwNq5MBJuDDGpY7SaKAhYjr3oMkysyi86bqaFb2c7RBCEDEbKVWmxkwMPR64z2eHWZMpkZ1K8s3hA4CpNTg",
  "key45": "471gKqLfv1jXkmNwkv1LJ3X5GPZEATAru6FkxMPe4KhiMqsRwoBF4ndNj8Hf5Ybj4gjDrvFhZbULKJDZFrjotPBX",
  "key46": "2GwqcJZGcTtf7CUXwbvB32BRx8yB9CVyQFTC5Kwjm6TCY8P2GLVsPtsJcpshsVsetfaTJokFwxsJyFzNM7grYrwY",
  "key47": "2JaaUrVe3d1gWzDyU75aTZaLpxD8ChKnJcrpayhPucvc64f6PWJ5i8zzKsJjxRVeZuLzbZJoWmNwwai18mcKiVqa",
  "key48": "2PVi8wViRcyfceYwqbuCz2kvTqcQdMwrirY854dBjL3JMcPQDDhVRzAczS7Eyf1JS1jDjWwBYnbyrnJMH7NqSsZS"
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
