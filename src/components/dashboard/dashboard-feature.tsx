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
    "2UD5eGjaw9oWdrgcyjxGKnnNw2kE7QGFevMbsLBhW46zTL5Cj8eUxizorHV2gHqoLM7TwjUG3jP2vUYkaDhjDtbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8drPvjmJGzkTb5iPyB8f1RhnKXSX1fbTrs9R1R9TNhjW7eibKwFpgQDci7mNKxJbR9MDj9MgAwezELpsC5mHJR",
  "key1": "5ZyY97JxLUV2oK4xWfRm6SzHyAxf4RDU4nQR3bGRGdqfeFTw7ELh7UPYogMZ72X4q64zkrHxM122wNMA3aR4AYoi",
  "key2": "5h8HE3p9xWKbYYVt2Exdz4hSdpvE6Tsko2VHN6RGMqLqEwrYP4TRHYDh1MGkPnTKx617XxRGkFrQzqkQvHAyJ8A7",
  "key3": "54M9NttsATRucKZRq7g9RQ6Vd8YMANHP7n7wytBzvhYUBtwy7v9BGpEBeCzgdw5ZZbe4MMudLt6hU1TjxFGHYvif",
  "key4": "5HCkCizncEk2VaRWgFZCnHxWsBTALo4ymTqyBYB9i4r6bG8o17d5mHJEMeVEBQmbE86fLeN1viWbSK9b8uVevyua",
  "key5": "46xvd1SN7n4XxJnMnQxDjuuXTF57qW1Q9xUSUboZ7gNLWRFZ795UXN3Ng8h1E9jEREduQq811KTst3wksBVFci7R",
  "key6": "3fG1kg6zgfxmLfskoKmKRromXcaGiQgSdCXiyucaLpsvRLysDUXFsBiKnaUg66YR5MCbnMhMXVZnH6bCpteHQVG2",
  "key7": "Ea8r4WH9ELNi5qPrhmxTS22nNEpyzuhaRmprKQgbdJ7yDdKjW8Giq7QMYQuxioSvUNpWFjewhUbYQV2fVwkuAAZ",
  "key8": "5vHJeAfBdrgxN41pmDMkhZiZecprvpin1vQo3NxAcuMh1ZvxpD6kPeh3DUKFjzJ33M9jFM1ZLHKNU3KDH4AAZQ8p",
  "key9": "66bkxYduxc5AKkcMHSMxPcc8ycjY9H9GE1MyXP44AGidhLp8oWNtPA81wqkskqLWowYSLmb5uDKNEcHePTZ7iYMg",
  "key10": "2p1h8F93TQ5Znt7ZY9KbLLjmYs8bSAXZTt45y49JqbM8jNuZoA3ezELLfug31XSRmNQseMiRgdXdpctvd3fYbQei",
  "key11": "2cAd6wMiTvsqFVxnQqGPWa2Sm39BxabRuFq61Uoh5xN57yqfQQzXVdr1x2F2g2omWHBjDkpSVGyNXW1G4x4Mx2Gd",
  "key12": "Sy5UUSGhbVTPXUKV9RJKVaG55zbfbaJyHHTNHCiYhobmsH3sbRfcQ3GiiajwhusiJDcrJ8xU2kkXSzbZLnShHfm",
  "key13": "4uCvU81raYKGTvNQqR782YfwEg2gH9fmiMcp69qYCqwE4AifLcxRug11XF6Bv3ia6sE8nvEqsFCJwhsJkP3nZ1YX",
  "key14": "3SfddQW8hLqShjb4jb8BY3AuipuUa3n2n3ZYXiBZ47KusbcPG1PRvu8EFhCcxZUyH8w2uVFsfd5TErxMHyBfHBG7",
  "key15": "4S3mvd6wuFWErmua8xWtjtjHUAdo2ofzQhCX5hXdRg7BRx35St2U31a4Gr3DQYVmWjLMkdxfcNtT2mqcNhEjBqnM",
  "key16": "4yvojPZSrdgJBsHKwazgsZ2B7Jiemp1ZPFtG58xQ5HSZYQtj3yftzSTWZdyWDQ3tL9sDth2qv3mwbsxcptSJXjPS",
  "key17": "KGcQAXRPJwghVuZ99VJfW2ijrYsmN8ioYm944U5TaLMCDgDJKAeGKYaMk23HPws4dDqBSHusDCih5yuicZhTs4P",
  "key18": "56CLUsPTGfDTMc6mSqV7PxsLPpTD8CvfroYzSzE2ab6xfBUgUidyydXZR8by2cKyFMMZhy7qH2Po9XjK1NEJ7i1y",
  "key19": "641G4EZ5d34LyFaP3jHVfTwcowztUPYPj6UGF4dVntZNTJWHQUPPeujMv3gSpkKz8smZpmDWqUmAVe1L8F7FfymX",
  "key20": "52EHRnyhowpHQPwFKsYNKzVASDX26ggwWt3jxSDxNtSzmwWb6PpZrca2wb9ju28Fed7sLdssMTKaEXJiXk6pzho9",
  "key21": "hnRgUXJ7ESgVnv5dSupheF1gbyU4BUS6UuFp4BcE5bXZ8iMyWyhzvTrwS7px8ba7er1yCJZ1GKdXL72LdA22LPj",
  "key22": "4K37SpmL6AzwSU1goVLHJrn9MahSNh3jydGkSn3jNASucx7zokJHDoLsRBT4TkNuFGX1iv2yWZb4HcPvn2r5vJ31",
  "key23": "49iFvhtxFsUuwjTzebCtbwS5VqH1Sag9MagNPD99LjdXGL38yQFy9AQmCsGPHzTfoWr7q8kqGX1a8WvmJLSHbc4E",
  "key24": "2QbYigEWd5em61Cg8ZQy9zbgdT1poMGg2wvDLt9JgGsGTZjUvzCCjYFV7eTcf6Nzeg61XAd836svD2nmcukeiJ9Y",
  "key25": "583VhyCZvGGHnpFpD6kMQ6kpysDtGn3GNbYu6QaiAHjf8LYpU6jBatbN3Ss5fcdKeyp8ZAZTZktug4arr7Qg1Nse",
  "key26": "LQRgkkPBM1MABdReiKgxkor7b8g9o98HGHstNqewa6zrgFB6QY2jJPx43DAp2JGQY5G2fzCLCiCkX6xX6TKAvJi",
  "key27": "2JQLshPuiyuEcXQ3DL5aYWGKie8pC2fAH93K2qq1dXFFRnVXAb7Qu7TvmC615SNHFxhrFhZSaFz8SMMtr5Tr4UaN",
  "key28": "5MPJJ5x2SsW39UeWTYxuckK2QmiLujk5PGUNY1QR3UkgEMmu3YxTSp3ghpc1BSw8ogQqLijjxjdJUfezRcmA8Pv4"
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
