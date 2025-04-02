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
    "MVZnKa3xrzfot9wTyag8fAe9nari3RmXFpruiYadcByEWKqawCJWeYfsCKSPWwvPJTA5EZC4gAgWr1TDWpz1Gne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "252CqYWovjfNZNXuWKYU6jAMrXsQpdYTSkp4Hxp4CV9QhPmoN9issm3Uqx6NwNco71gPyK4koHffEV7TpZXhEogR",
  "key1": "58u2njAsvMwyYciR93Mfp7R9bExaSUDGbg5DfLTVz1oxgutDpQzcJteRKWC4AVMakFuKz9qED5WjQjvHuiVEufLo",
  "key2": "2M8HWX6FJo1cuPFjSBxYrsbi8DJo2JYuApZgv1rwxhuj1sKvbzA5tS34fGxhPJ6zZ4ZktRcqmHBXzTRyJoiWogMu",
  "key3": "ScsHNUEeHqGJBQKau5377egbdu2H3JTquQsAys9t2anSKPvZbTaKsieC1G167TpSwTYTGZGfomCFowTnWLfxc1J",
  "key4": "2NeFp44bRYVkPF89i5j2ezkYvdDxZbUQ5P4iyUMc1MP127QakfJdc1wNbtKs5WrDbjayAqx66tfyEfe8ZCCyBAwt",
  "key5": "3CrgV5DErKPJmWJED7MDmXUxZDTSu259iemZPvE4WJRSYSuwLpSsMifsXifcW9DRBRa3trrsqpd57A3kfn7HDdj5",
  "key6": "wBpQbJTxvqRf2TubzdM1RwPosGH8UDWXrrsvkVnAc8uiL2VXRK4gBQV4JzLvWzpMCzAV667qdTHbDxTZM8oEtyg",
  "key7": "49ozQvYjJsbE7u1FXcEim97C8M8qSUX3Ginnr4oxxbKJaPdgnfMeaBT5kdUrPTotE5tdEK7QdXgt6FVcPJF7hSDi",
  "key8": "5bs93xSKApZaMx6J5B33JhoQ1kLxoSC2fqaxDwoMuwrugTAPVShgfL3TQQrQinUj4EqgVUDowS4zFyPYmRCjemNz",
  "key9": "4yaW92pJZYjAB8DrXXkWTfpeAfhjAkKd3MiiAqDVVdrG6hrerdrC1JJWSur3e2KN1xgtUET8Wtdi1wbPtepGM2CP",
  "key10": "3j2yZbEp4EkruirUhPtixGvNGhq6nSYQdTVM61Cfsd51sviTMfjrm6ZWaAxRpfYUcNCJzPMiHgDXvwZEAzChkXmT",
  "key11": "4pmW1n5HbojJH8UTuu2VM5erGfvTthhdFYVLUj5AfD911uMwqvjgfBR9LQgc3UPjXRwqgbq13zBG7GqzfFw6S384",
  "key12": "5NNSY3zgwMRyLyHrdLkPW6CycsBFyxyveS2iXJZ7Y66T5qvnoCGzZJXKWzrfXrVgt4ExNTTRVcVZ987RZrHUaB8L",
  "key13": "q21RwmBua76t6oCNztEtZPqHWVpegXGuAey3DjAAMLgBrFq416zHiceDoTPVpaWub31Yn13h3tiG4s6R2FzcBF4",
  "key14": "3yyJY5XkiFD72gTUu5F8igVbVGhcNpAPRN46nDTJu6QfCsqx4RJuyZPv7Z7oSoZ6pATSMaVPj5rwS1tR4t9x8vUC",
  "key15": "284DT6jxUB52W7Egh2hZbLbFr1j6NRd5mHjomCJFS5oQC94BCGkhLayZMjc3soMpCVZGKnXgzG3RvpKcpVCJxpWh",
  "key16": "5gdV9KkHMNyHDQucoRDBLMdJQLCEM5XRjnSw6YpYP7TN42tujXtR2mUQSqCTqpWPx8K1kns8f4aBtcNSJtV4D45F",
  "key17": "dKZhaFuP27gEG5ceBHg5fAmd46ZtdowYfWHr46bLsy4xa3ARhSnPtT82stszCtb9hhky3H92N6cQ8BHDHMgcUiq",
  "key18": "2vqwXfVuB92NvMXdkyvg2dQrR6Jia7Cw7WAghsvPgtaaN72HrGqv1EtcHFbeutwgZWSTRQDSmj2NLwyxwNf6eCnQ",
  "key19": "3QMbGM6gRwGojuqsUGgZzP7uXyPbRSuvCmGQGjYnvRzoULPMQio2qmUH7vj1w3YYnLa6RVJEsBuYsWXg6adxdPHQ",
  "key20": "37ENjLsck3zJFbtN1UgySx3yHwu4NeyGB5whC2kD42pXdHPtq8Wxg8C5AjssPEqWZ2xH1rqbJJEwvs1wYuhERTKN",
  "key21": "2fgw29vA3NyZLrowY4vo5kNrqoXQiw9yFMTm5ygHbFJt4Gu4XRGzmj1FnFuERKikJjLmdTx5CgqV2Kg2Vq1E2WH2",
  "key22": "5BGEB4Hka4zpynpMpFDEGbLw1WCJen8wK7CxDm9PTN9q7NgxhWQRTtqyNEJZJSNA3ofNprM8jQzh3zfzvHpV6N2P",
  "key23": "2TBTaX7jTPSQgTg96NtY3n1TJZhYsFndZ4gr1KFFbNF8iTQBWh6epPT4nWe5nm8ev4krbGXQkg81JEeVHgBzMX78",
  "key24": "37C6XtewYk5fFwB5WkYBgYXtcqUcu34dc7TpqSbVfPTAghaiBNnDEJWNEcHEJds9CHszbqvuXCCUGGNgFfPYR2qB",
  "key25": "32yhv8JLRYRMwaKbtxmkarg4vTrdEwtfqQ9jHQThnnQrDR34AUSZ8Xq2KZZB8NvVwth5dJCxue4ayN8FySLpTqfM",
  "key26": "4B4UEMEu4dGvbUgWM4P9UtY775srr52yLEmco7uJrf8Xn6odsJyp9m6eBDWsWBS7e8JTq46JyYzvCwvS9276XRyN",
  "key27": "22qZyvcNG8ASxNFig9YfRzCmbSKWyej3eGdj9MYAnH5WJn26e25GTFYdaHJDYWYA7VYEubVeDnunH3BdbKMAQRq4",
  "key28": "4gu4yoE7w3kvHnPU6H1MKdfzkVGbUN8iuahzkr82TC4f9Xo5fCu1LLHGS2QgEmaHCjCj6UaRT5xo8uHZ1JcZYJHq",
  "key29": "2JTmUusDSHvksWFd83JQLDGyTfAtZwgv7ryLGqap4PSHePixpPJNo2DvruX4tBpYzvqUCSHBAdWWqaZipNr2tDUe",
  "key30": "5WNo9NRckcQD9nyhMZZKJTx8b2V6EqqE8LyYNYVAr5KR4xG8HsFWDcZ3w8f3rjiwz68KkfamUiX2YYF1GikDvUyk",
  "key31": "6JsoAzZmUFXJTTeu3aYYDD3Y5dKvkSmudrkFQuumLwsspEnznqweEQcAcP6CBMzo4kmS3ASh6xLSgA5FtXTR6kZ",
  "key32": "eEdJ7J9VoDAc6TPM8ss2tydjuHhSsRoymeUcTgHn8gNBGX1oBHWfw4Bc5GDyeWQ9vUZUaJVsUHZCrdH3RhWzr9r",
  "key33": "29M5bjkdUmS7u7MFibZ4F9fTg6te1N7HjkUmchNqbjeS5QvR4juBe1KdxdvnHqxcVoKyeRhjJVbhS35QfYKAzbn5",
  "key34": "2MdUWwQjkpXt9visPR7jkeQogbtUVnGepWvG4cPoaVZvSMPxaq257UCU5LaVFfCVD5ZZMgUpHKyvjbBF4c7Y8bmW",
  "key35": "59JPaxmGATTWXgdyXdAxcXnimSrMQphpCGieTg1cYQ8ANZ1UF2K6a4Dj9g3s1a2MgodbxYQn9UtvJXU3XjJAyoft",
  "key36": "4MNSKodgHJuizWLaoDCA6BpkDTSEP6EDpe2nwEuULGi64Q4fge9nYQ4zQ8hCVJswxEiFu6aBoNzfFVZXQ9an44pz",
  "key37": "5FAJJpXFKdCvHVrtETR9V7TGNmipqgLg7vb96N249BLNU6juUcPb5Ronias8TVz59wgpmHmSGVisZXHGqLYd51pW",
  "key38": "ueEACHUiYDqTYQrf9wGZ1w5MHqftaUWYe58So3xnriCdtv4jJxDjLJhRQ6SKRZ4nRCfZ9vToheUYD4wKyNigpME",
  "key39": "MggjvtSXV4SKGMF5HSjBr3Qhivvi9X3og4nGFT43ocZAQhTzDwyqPxoRTxsfpgZS5FLv9Cz459moi41h2gGzJys",
  "key40": "2UwjXDAuieERtuNAxgnwpCQkqX5NDTRpLbD1TnVhyaEw8QHKCbPFStV41s6nUt4ByYdhDAXtbuN1pTPQagdPnNNd",
  "key41": "2AV2q2iixuk3geN7fYKfBd5ubeDADgwxMcnH9UDZfjiJEGwW4W2aFBEYh254VNAy8LD5X8KTps2HXyVNmatbpWLo",
  "key42": "3giABsL5fVB4HZRwBYRem9bdaoHxevhDraAVtVg1AUUSh6dXMKyosmJhbVCtnshjqbeEvQ4sC41yqVd3WQSgGHbm",
  "key43": "28X4KraahVQUss46SL8nkh52Lht2KqLc9PCQTKPixjpLpzKaj7EZopev3TrrcdNpVscobdcznXQaSUzr7zjeHyM1",
  "key44": "33i8hbabee1Pr7oqooPhAzaqVuASWCiffpURX2smtyv4RWCRzASZVZQz9jvuzhgKbQwsdYN1uNCxdrTZMUnXPd5j",
  "key45": "yLbPHAmMJS7hCWwfw2zvvvoEDwG7Cuh2KAosVEQVvkDndQvPzBWHCpdk87kJvB42nS7dj3t7xUXbk7ehyyvXZy4",
  "key46": "5WzdYeKDmDGJ4k1oS8qQvFsq6xGL3RmxFyWt4CbdvKmU7BgJfahenSA6zWeuA5MS4oQcDEHkrA7KfUyuXUnk6Ero",
  "key47": "2pVzFoe5VE4RYTHyFT26TyrRFb6NYNoJzT5DtMyy5brJr3qzmnE2VwSu9NhNQSREJi8RwXwCXDn7wXkdN1MC3EGM"
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
