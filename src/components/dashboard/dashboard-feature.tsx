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
    "2oM6RhgaJnXaQNcprZ78GfmZGVfccVzeEvVwbVpFSG4CMGcEtSKxnxiRy4U26SpDVQPy2ZFcRNVpu8f8TtFgLTdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yR9f77DsBssdYmYY7SqnWEjjgQkDBXqYJRkwUbNbuSnANkz7eTN62hTv9yyz8cAgGnjnfnEvwKTY5iGihyEeXf5",
  "key1": "2JgGR3byRXTLS5epP3F96iJbRZ6rRgD23dRfQS4xeoaaTPHpUpbmmpjiMbEi8QkwG8zPDgRj7ac4pNkTKnCSGf5M",
  "key2": "W12ZEFjrmLZEGqVh9tx5N5EkvYQNMX4RtuVfq2yhGAX1JKuATzmJW2UAgpqhiDLVss2tGEhWnWVKSZywPSMctZS",
  "key3": "TYA8qATa9ovZRqUs3sP6RYLmJJk48GVs1DvWFD42PaDaWun1AHnSmTLPPAZGXqphePEyqSYkgYyGEkdAJ1kHkVm",
  "key4": "3pFtkVpbd9M9W5nAVNgAK9SAnffFHwASU5bsCPXPdQMaRYqcsdRD4LRVA5MzASvgRDDPBoerLXXUDJuYDWm3bjxn",
  "key5": "2C5YZmCDrZG9XgeESxaA7YW1LA2qXo2ePbUmGEbxKPDCugzzNd5YkTC4uCxeEJ6hWLD2nvRXK3EYfEyWRaAq9sZ8",
  "key6": "54HHXpDKfpMgN3dq2eoo1h7FkscRvcyXfruK6c1mTdoJEsNRYENBTEQZrzg9G7sschuQFZNfPetXrFYk2Utkej1N",
  "key7": "3NK3nQrGcTM9GiGRop4Ti9ag32v1Z63EyS41e3kA2T2uUuv4FygfRyXNN6TJTkYorWDMUUYth7xm8juoDpz98J3g",
  "key8": "2dngnKtkGMKJxajzZWTtxaiU7zQPL5Z8ZyojdFdnVxFFozj2KBjNbKD4hjFjRLHTBN7JDDkRR4H8fjHuH4oAipDH",
  "key9": "6ofYfSFfXKZ4aao6D4qyrkuwYgi9zGQyRKcFCvZfR89EESyLEz8QNZM7qXd5ENzaVmoY6FretPPBB7AvfbKdPiq",
  "key10": "TfXLaaf9JwSPNUFqUWBdWLCAiqrEYwxjxDvNoVHjCX2Xcpd9k9tP4Bs2sHyAZN6NGBMbTySUFdxb8jBuG6EbrH4",
  "key11": "3bhLZkKe8H5PRSRpHykFJH6vqRYqRSTD4ScJ13obR8BCybVGD1oJcC46u7GH1dpcd7YLujzbYVWeHMmhc3mP64VM",
  "key12": "22ZYJntFurdy425vLES4hGUcNTTuDqKvCkGRB9iTWF548jkD1N6F4CF2LxgV84gz1B767vUoXomvX3kaYuBapCy2",
  "key13": "3vsDhE3Gq4S4nLsgU8o1hLca4tsaQgEYJgcbk73du6KmWwQEdoKBx6UJLx6vsu1md62yyFBbfXLH7G8RMsH7DdmB",
  "key14": "4F7DwMvhhVfcGAoMaf4NdVQNrPHowP1CF5ABZdg7ygjnyxRG84bS9uufh4cXwSge8szL6FZnTs6zS5a3s6jK4nHN",
  "key15": "3iYc2E5Ks6UkTs2RS1M4ndD48dfDzE36B61R2WwmuEnWzFUtE5tjDL2dS2dUEJLNMT7sy1XgP2fr4tmtyjVEx47L",
  "key16": "9F6bFxMXhmfGjJAyucR2mtPnfSjNjD5wMzLZrHfC3vRnAEf1yUE99mVe4Aohj1JpDBX7Lg1CDRFa4Wewgt2zxuA",
  "key17": "5oo9SAm7qWV2Un3EXo5u73gBv5GndKuuezDvJ9BTrPHpME6MAj8CWUpJJaztmu3vGihNoG34nAP1WR8ZYNjXmiNF",
  "key18": "2UzJhGvNpZ7f9HdeBcSvzr1XhfADyb4hiZzbd1dUPFyeFzyhtbUHBZi4fpMpN3eDEPX8XNicmsfNtLAxSUm28Lye",
  "key19": "2QbVt6maLjjwPnBARqV9oipqaa5NzUDNrv8tyU3hM4wrVqZH6Uq5zDpg9eJESic3mQUe77fAPaCYxjYeU6BXeW48",
  "key20": "4ELmCppwVTGNifyM66uhFT12uDxKYZ9jde5twcQxCQyfA45Y5qyLxJ3bzPzrF1DXfQ6pezQHVG775rrG4TseJfeG",
  "key21": "XjoCyzzVHoXc8Wc6uNJrbGCXZPLyNARN1wf16yCNtv4zgdGVkuCjbLz8yeqL2nzzMckBU1goLqAEyaiUyFLhr4E",
  "key22": "4mM58yYNRX2JqqsNudpc9D771bjcUZnNosi7NrGpGtxAVYHSRnmmnQYiCSAXojd8GZcEzFKWAA84V5xHh95FUbri",
  "key23": "9J7rPFPwYhbpTMKKgSyLacQJaL8Zz2ciogayydCRiMTwxhwZYSyj2omYT3aoNSqh8r27AiNB1LKuCkvU69ZjviX",
  "key24": "8hrYi2ofKpjDac8Fsxrjmte1CKGXHv3SqfgtHpRN2H7Csz6om4t9YVpbHKKNoKr623oWmSKfrrZUJoP3w2m2ZZA",
  "key25": "391hD5VC3y8YfyyAxrLpVjsuJgRRposoibswtSSgTU2tLfBEEqXRoRgmVmJ9K4dUUFCCMpSdMnST6okkGvKkDoCw",
  "key26": "5FBPDYyVNbWS2NM8PHQbyTGSyRpYXX27hcWyDg2fuHu8ArY46zmrcrkP5pvBbSfJeuc4m29EbHqsJZgkRkCaqRhQ",
  "key27": "3zVWaYL2skD25jXKSR4dYrmCamneR9HJP18wVa88DPbpHubpkoujLLudaWoSJ3Y2iT4yUmj84TBFVe32h7Djwomt",
  "key28": "3sj6QxmQAtcZSfHuCrmmb9ZjibX3YPuw4NEjaMupLJRqa74WtBgFjjwzSgjhymNMhwkofvimh832X5xdoRubMbhN",
  "key29": "34KAk4ExdPFXUc9rC7J3cWG5RELer3U3mWZxZqPW8mzgZz18Hbzy2wx63WXaSyUyKRyGfqYw11DPCmPL64cSbhxS",
  "key30": "5vBjuXsDibxLejCBygqdsnQgYzjzsTCLHhafNCF5brzfQDbTSkoZmDZmvh8tS3wxTLtf28jndqijAeKwNziP9Bqv",
  "key31": "rDB2VEVdoCSTNLtANq3mE6RPoRQ3HjUsL9Hmti65FnNTMheQ3Ki9bmM2xa7AAkQGeSTLhURGqGeGoBS52mrmcrk",
  "key32": "4WkA2SWS2wcPwmQ9tFsx1DzrzXiCgbzkYz1fxC3MorMY2g5HjF6WbV4SwvdFzPDC1J1mgVk5YwrhDrdamDR2wJJL",
  "key33": "29dTm2bUxEfhKm1sryiKfabvpBiYm2S3jAXTyNWHo5Gh4ip5ncXiE7RXbo9RgChXAp7DZnvzwuoxbajpzepyqgmG",
  "key34": "37paWnLbsbh5R2M82asewaWVZmUP4AmMETRmAG9KHgKgikYnW99bWZpa3XESkXLPzktJGx8RYnwsZva66EdtCBoc",
  "key35": "481Khr1FFa7St98GG3cQNNwK9edNJtxMeSoqyff2YqMxh5VNKvYwUwSXy2hrmjYdJCJwGCE5R3B8rQGwvAhRJcTF",
  "key36": "5rC2nRXKca1TGoQN2mEKE2HvYUszvv1pY6NSr9goqZUmVi5AHVneEyPeYrdaACrYF9aoukiNYo8hqTWqVBaxVLj3",
  "key37": "2PjopqEfFXd4NzLxyodNydykzJ9JM32eq636BTJfdHNwaFLTKPFhKsgms49fWdsjk1NHzHLeVokMhtZBF5gAXA5R",
  "key38": "nW7dEfJgPfVTZSYsCzUcqsjZyEDf2d8MakU8AdoDpiEwh5gZsXp8VwJtZNAqyYJGkmGj2dxHCuqysmKzkfvknEB",
  "key39": "tcqmjHuaBsPyh7uFi75xYaLXd94WUvYFyokQCWTWNJEwraAjrf3ynnRFKbFdGVJLxEftMuAEzufopW537WzQumJ",
  "key40": "5kr9PucTcE6G3PaKNi15BxxDNAeKPhnkJ6oCSDhZTjLitaEprJNqDFdgVxtyLxETcPmMqFAVVMUBdZzwjxQ6J8ax",
  "key41": "66kvcpS6o9C7sbmpxupnCE6gAhs7ppafejQUTUEdqTzeKLjtnuEpcMqtnA5JEzafmcP5yQVPVwPkdpQzY5AEWXxF"
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
