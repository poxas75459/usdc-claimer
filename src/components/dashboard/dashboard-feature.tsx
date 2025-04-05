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
    "TPDfHBG6zDWeAN8ZCb9NYueiJqok8LN7ejyYMHo3ZycGvDX9MJaLF53xXZdcaAxG9GMvs24qnrLfNopt7HTfJtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LSrVnMCmCBj2qmD55ZWCc8DR1kb3xJW7zdGQ5RuQiDJpQMJCBBAQfjAUZ3RkmivN7xpGHpbDXjCkn3P1jKb3rFe",
  "key1": "5np59SdD7eZpEFJ2sJUq267ydRpXA9F4wEfmE8VU4HxGCimW4wc4wx518hmjWwEras1yZ65FyFMeHNYoNkxrM1x7",
  "key2": "27HGHZN4tpZq5iyDSRxXXhbmjgEkq7P9BnhRhZGUub4Y1u7T1HFYorVTDdgSXj3ZVg1CEx88fJJPwNxXqWtah9b6",
  "key3": "4ZM88idg33rv2225MsyELPGoV36ZftsGAAPRZNxZN4MAt6C9t8ewrzP7u4EBBTbqVLLXKAScrW8y6LXM5rofNM19",
  "key4": "28nKKWkubm31ZnDwizU2TPzGZmbepiG5PqmRsYTZGUXM2Y5ykqXJG2SJFJhTcL5qdBbEUHPcBzm5fCzTtC2MGYyC",
  "key5": "4g31N7UMxBgFvDrLt6mk683okfiFHpkaJkn2muTVhmkown47yaw6ff6qZZys7xrub6KDEZMNPxRc2DrSrCJodTAv",
  "key6": "4LMpqRaisrfoqnXCAB5HXomJ7UL41K2v2KE3x2QPBJitapR65wnX1icNmKHFhz9Kj1YqGubsabSW4ZwVPnNtworT",
  "key7": "4Ak3GpAGkT1bjrA8AVCn1T1cD53SmtDsMFHR4vRfXHrYJhmP9exgnx9og6tjMwGzz8XZDa2TmyJNH9t2jrBapaCd",
  "key8": "2HfZVhpZqo6xNMCtg9Tz4NpmiECfhhyFuDCsCpoMxE1h2EJ91frsWPDtopcjH8rkDQmnSeofEwikAZfvUEwQnFxN",
  "key9": "ufTB2D4uHoi7smA3B6CZJHaxdDABjNuGzDWKPF6SSkSPYeCCeU9dhaXwBmSvvcocx7PuCEDsJCi2mxu6tSs9q74",
  "key10": "5u3HZxAjqPPSu3pMk5DK8tQex8eDRFQwRA4au8fKUi4fnKQYXXqvgC9Pk87y3F5Ny4VbLgBoCJM36vrYSacZyo9q",
  "key11": "R6TjMu5XEz6dCmKHoXZSkr2FPKvqjpdc5AYPEzwWGX2Kq8Vfx3A3gWMUJjdWVJyC18dC6sHvTwhwUrWMxi9RWiT",
  "key12": "eZKJGn9rp96SJSLQC2MyKcLyKtVPuCryJ6kQK8zQi1pF48THLhaCiBCWWiE9THx5yh2diTuit1NwgYVVjvBbbLp",
  "key13": "3gRSfCsvecN1McAJnodS1m2vjq5TY4Md8RFfGzDPpRpzzBBEL9HzNzqwc8vuHBinicwEMLhLX5oVz7AmdA6w3vm4",
  "key14": "2z9tDyPJ2VyfFHrMBKNrHozg7BV1fiyBaFspvaAaGs52wc2g8S6N4nge8tMaA9ZEuc2gVtrir3ndz4k2pkzTrLyw",
  "key15": "5WJ8R9434B2ggwUaJKPsQcKm9nZxgk1bAwbr7obuBgVJQjQoKamqwVSWRrcvNMACxBkc33EuD8jLVwbiE3fBd4Wo",
  "key16": "54rw8bfWNnu5RpodR1NteaMpwnuYTXJfrHyt2CetqhEwYicqqxra8nRuzje7x7ujzKq7U1uzXhGGudnuMVZ1BNTP",
  "key17": "3jMmBgHUT16GsSQ1RMqzPWqgXcLByQ88K5BWCpbauLuzAQ5DXhZ4CCW9SHRrH2PPpFkn7fZGEjhhwRw1pGevTV3n",
  "key18": "5acQ1L3pxHVxp26mpmx8bpvnRP22UpwGDxuVwGyEMPF1e5viYBmVNoBCJhUyWqtDU8gaYg8QN6BGc6pHG62JZiCQ",
  "key19": "5YnM4SF5ZN18nJrPzUnMBRwRNKgB3m155efmAooTYcfJNSWrEdXUmntCdMaWTseJmwd5xpnhDARityXqdiZ4bzWw",
  "key20": "zjFTAgUfmfjdNVQYoc3zbGquGSoFKVabyUFaJyU1m4oD3utMYAvC2ESGPfMjiAD272momAXF3HgJn7uD4FcfKYT",
  "key21": "bikiBCHgtwCrTHtSJh77d5P7iVuggXDQddEsAzEpGuc1L4ZiQFz4F7vWXm6QAfkwK7v4bCUmbnFFC6AbpDkkXvG",
  "key22": "2j3GUC7eLQx8x6YAhxTDd13LgPPjyccQy6zTqrKnFzCsUmzbBKKvyy8hfibuX1NmJXKL22LLHvNB7Q158SJcKVqo",
  "key23": "2dEPCygYAn7KkgmynjijbxFwKSpjn91Kw9vBco4WjPK48ZUhvvcR6LXjGAQNAVLDuJxzK5szZyxzzxdiAWi8A3bL",
  "key24": "23jyL5AH8nnBaQaBrVuaxR8wMuJDPHRv9eC4UhKnTBmkNq3dFuTrvaA4FXDdSzsaFwtXho4f62QJ3BvNXo1k9HYv",
  "key25": "5BiHipx9QpVP1bwZay3znCXNSGFfaAourspQToKsKwVHH55W6eyKWipYthZyCXZCnAbLW6sqZc2eESyL2RETExRY",
  "key26": "2NB4bp75faqDcArVDiejAsiKJVdLkoxpAE2R473aiuM8z2HUbyA25b24NXvSEYLd5a9TNQLsauxageEYWRJawVLv",
  "key27": "3dvtV3GdmfpnUDXnYWFa72dxC4io56THpSoXpDp723cGm9NZwonNpX5TvUKNwX54NahMmQTDBHjqNGCo1N9vs1mh",
  "key28": "2B4ZoiiS6KFDnkigmXBYfgkP7eF6zJGA6YTWd7kRRaQgom1xX4eNbzNyQZ4kKr6Mo9hf7B9YRcvjZCaZvgsrkCTh",
  "key29": "4WneUwkmZJEbbpvqpgXDAXqoC94Sgy636FwFDnmEVyZU7iXX8Bq3GUrHES7rtpKNB8faHSM6x3bE9xEKvsts4Tme",
  "key30": "3TJQ5Dki5DcoPreR47iDkKwJuxPKrXKAjtKjpKgVZMAg1dm8qCKzeixYngNTenJyxZfeqct8C9UGnkftaU5s4Dz9",
  "key31": "2osCogqQjSKK8jLqEA2bvzCWVB6wrd5rzPqTbDRNbL4uXvfMrP1oSAR1vBUeNPgy4iyXfecuSnXJMdg585hKJf3R",
  "key32": "2yLVLUyTZLEzAtXThqY6XrXiugbJw3EHboAAsMbVKUryMr6iki65ug2R5M2PDEsrjARAb2gFzRXM5GAMdaadRDNw",
  "key33": "zvT2K3zJq38tQLvAbQJ45TwRpBRbwrLWn41DvRZG1Ab6QEQ9LvoPqGBA8xm1GcL5jcMEXhemeRtpHig3tfvV2bk",
  "key34": "YbibZxMbKo5cXX4LJPznswoXgfiMGpre3P2bRa61HkMuzirrBGBJUsAUpBGDkuJaURLgJqitcw1dqJMKARHbaxw",
  "key35": "u2vWN5agLjRwwEeQTufuSXA53iKrhFYWRgAsBi6RVNAptGSg7FrC4n324yFmDyaf1Q3kSNfA1u29aQoeRCCAX2y"
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
