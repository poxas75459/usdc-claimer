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
    "4WCzzS8KFkQvUFm6XT2F33H3hmMGKKjvo9wJHEHB6ZLsmMp4JE2KgkLdSXyBUC4GS7w1aPLHETX9Z3m7ajiRaz7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PvYq3jssAp6kGFRmXYij7tAcnaXx9KkeNqNf6WwMW6wkn7kVz5CfR4TcABQYX6isefCA4jacQxnipCe4iBMiXAD",
  "key1": "rNjKuRKrCwFcDPoK8bHXnN53MFAmcDDG1Poa8hcESf6aan9vrWEHSX7RYdg3TPJatjAMPGr8pdcbDFkxSJVojBK",
  "key2": "aqR3oYNExUjepET3PuhhKPz4zGUbLfTAeav3YqCeuFzCDNpTbkkbUB4jgEPVthDRwism2cdu5vPvKoLPhr5SAMi",
  "key3": "2AfCZEVTE48pHgS6E9vWS5zQNdEQqQCi9cKyJQwEkKAZ4JC1fK3kDcG8XZzrgsZ7goQVz94pCpaXgpzA9R1a3AMn",
  "key4": "5o5PRPmuukcVxCxEVmyGC2f2Z23TvQKDqLfr48gb5ZLiChKN9R6MapT2Lm7BpU6fsTK7UL7C8kEVYqwFxcfCwR3H",
  "key5": "4YBk3zBmaRyLQxFB2tQhJWzq7FpEBwL8FnM9CpXoP2LMTooqGL8MU23MKqCfJJwwJoMV9KoGcWnGNKUhAtNCKusx",
  "key6": "5GdzB83v2jCfhJ193n3RB6EWN3fwj5Ph2fWM6NdGavKE6eN8tPkduRBoHaoCXNyciT941y5njt755St9gwz5rcza",
  "key7": "364vfHYGdnU1yRVFa4fRFV3W1aGPWcskZpXkuvGtYfDMqT5UNeBWGXQrpFnAFbwqvzMtk5bm8f9HbReL6bzN9srM",
  "key8": "zCfHhbKC5jNtCpBMpkKVcBSuyYipzDkhiPCTtSwKc6N3YF6VsXC3XLspC5G3y2KxyjZLvbUpwbGh1Ppvu1KHWC9",
  "key9": "5gJvQN5rkFHMu7zbA4WLK3MkgrmQsQs6BU9kznp9K5vsPmdZzmB3Cfmqn2BuCMht52bwQjwMSGbfCJb5qsxom812",
  "key10": "2NcGXBN3PkKYVHRPJrTSNHacUAyidMt9ZLafcojYP84wi2xBs6orxH5zuqd8ZeZYNGcJttAiJ4DN6QU7LcCVkjyy",
  "key11": "nCNhQBW4fK3HNuXBjH4a5kDVZRCdnvgLXfRh8EW2VLhHEzyvMDEJpch7k5ruFdVRWVMhjJYizrq6qQJfqJgxG8J",
  "key12": "51yS3LKV4ymfp1TVXP9Psvy9ZW73SnQnvRSqzh5nEv92DVoNjNrKUg9XKs4rCKyYzgooPjFpKFs4UE4aZP3vVz8m",
  "key13": "71Qw1Qd9jsXWSbKC1WCEoYxbb9MDyQBDSvaAR1d6abqBHUgNE4S2o7KnDKVM8Ncz9iNhbDpGCXLfEu42itPmMka",
  "key14": "23rEsKzJr1MoCcqA5HRoJDhsavAWu7KZkkGL5VBetFEP2SzG4EgpNiWX6mB369ugRK3VGGzdRjeedTX5cwMfjtJu",
  "key15": "5oi9d6nx5YwVbE2TZtRA3rRQcNL6gzi4Cb2U7Q6SUpKS3LLtfKSAg6t7vny3PKRXyRHarChthekWzc6rZQoBDa9",
  "key16": "5UBdu1UdgWB1AWS2RK3NJUsgE5BGteWnUt5r8XnVPup8ecNAjch38CviZRkaAp9AVbvJxHAqtX4kyR7mmn3dCCMy",
  "key17": "2KuVCyAw81zwXR1kpZwbNiZ9ANgW8AAqK2aaXtWuykbf5JXaNkaAq9fRSdFwsfTyCPCdHMVasSb3DZ21Gv2Arfsx",
  "key18": "2iUkhC7Gk7nPSbgnFoyqhdd893TVjdS7C2hCB4sBo3T9kKBVAoYBZwjdEmLo5bFcgBqUGhGzqCC7mpnFVAUZRcGg",
  "key19": "3jkBy51zJ1U19iwvYhehSryBxK7bK5h6psB6uPyMoVbe6tovChJwadVXWS1XwcuEVULPT5E23yj14soJQyuXB5C3",
  "key20": "4U9k2rFtJjXKCUGcKjbbDTrgac9K12CRLhJEMbpfWyEzsRxfjtGxVmSrUtZmB2XroUgwACb6wVdS3SgzcNecq2kp",
  "key21": "2SZTwgSrsfdgZXd6KPSaUmFnFKxYw1MHsdLy35Qx4k1Napsc4ikN3M6HUTpu7KPQZJPZrydZMSm7ne3bBwhc6LEC",
  "key22": "4c2rNDvmH3koNS3cjKNAn4L6ZgWmRsLvkFZogZAJSxW9MpSya2kSjgj1CbSrhrSZ8oeJpsCSakpVbMo1Ck6u3YG5",
  "key23": "kiqZkJghawUa5Z13cPPXfZkpQmQV646KscriYjHPXYnPTtmEi3sdKXrPuRQdDAxTwvwBNGSZeJCanFX2teqr9Ra",
  "key24": "31fQREbGpyQGxafNsHzP4p7QnrZj59aAufnCCb64k9aNX8Uegktxp5qc6ZEaReRFoTUga5zTsWhtSx5N8xgDtwgG",
  "key25": "53NoxjRfxc53DduPKfoKJQ2S2yR2sqVcY2dDH1E8JCS2EH5BnjFGZfSHvQ1sVsSfKPPCsJRxCu9K8gMpCmn2kNaw",
  "key26": "4rN2UZbMyYXaFFCjLKXwhVYR6s2cf1Dn7cQUTWdGrRASVm8h4BvtZEax9yJ9KZRLwkfVDWtdD1EgNjrAPr5HvdgT",
  "key27": "FWRowEbmFgMuJEGYsSB2Jf1jaJdWkSvjjfPC8bAcpkqRweHqVNLN2dqeFzrJ4H9p1Rceo7FCkQJpbbFyUEyJcae",
  "key28": "5cdzFcwPpwa18x7U1eKno6hfHaTmtYdkVC98JWLXXffzrps7qhk489dEQAVmqGLNBspFDBvrpgpURwvGhuK2UR7h",
  "key29": "4DTDMXgJCroxVbCzpRV7mPRSwLa7uujjn74vmeQ5qNRvNCTT5uR3qFf9K17E5xsE59ppNLJ4Zm65fpgCzN3RX8k5",
  "key30": "AkmQVwvyMFt5pcKgdK4gYf16kisg8oYaCz9pMdYCabqMq3nL1aZYDH7oo37993yWvahq8edD5dGu7cG1Cg8CGTR",
  "key31": "5VT7j6yVPnPcPw4ZADv6WaBFvsgUkVrK1XcFVcPtKKhqwJTnbSdrK53feDFMUsbX2ZZoQhuuNMQst9XY8E1tnqqy",
  "key32": "3wjqVLsJBQfURH8RHksm4RjsZDU1Suk2ywVZLByi6W8v5mLewanpWcAxFiRvWTtAefKyjTuFHtBMB5LHtzaBAaRY",
  "key33": "3atPTXhX3RMrbVuS3exQNAzM25pVfxzmmFq9fVF7CqAf3TBE6bZLi2HjNKAWhMMoAfTGaVxEWifxaig3WddtrcyN",
  "key34": "2bPe19hVG7ZdR5agQYkFZK7pqxsYobuqH7fdUCHJxk2S3kzNZxjg5JbayoixT8yDyUrA5FDatizoT8UUZPLyJESU",
  "key35": "3k8kp5ebbdvMLzHNuKkQvVAKrNPPntprzm8ebTGacRBR6fFJEhypRSMYrYndeLLWqtr2Xo5VUrttunmjaqc7z9s",
  "key36": "xAJWubvmg8CTyMDwAvsB8gyaVXBrtvo85noCRuxkdYLTwisWGq8fAKCkGBNK7H2V9vcZcGgnWkwfzX25Nx82p3B",
  "key37": "2bjyTvTsHhaEGqPBiRtaS3aYMKKaw5x7u8S2Am1RhZrE5cSbSkCsSKT7eYMVReEJ3CpLzjrnmTfLAbYvnWFGFaLy",
  "key38": "p67Xr2khpEunPpjQrhGeBU227j7SJbqmmWXLmmVGR6Rb1QzAfkjFqpBjxX9zJAE7FnoVBTjAd1HgzMzARFFPSzm",
  "key39": "UyEY7esDuix3N2BkgFghv8HX6BFJSwWQ5NHiyRJY9RSUjt2YZbkfsWxxmyu76uFU8MV2guPuhHD7ZvPdMkqZXs7",
  "key40": "emcKVFY3LydRM8F227N78QyNnHaSJg7R6ruUretA3FVQjp4JesioL9tkE3suvAUo26zKysBDNGTErdAjqajBN8u",
  "key41": "5wbiQfVxR7CP9NmbCCmoMevXqYRGhzJYvDqrhMis4Z893fXT56bCzERpoEo7atJbv2fA9k88BuJdiRM9wXuupQ2U",
  "key42": "4g5ewUT1YaDVe3pXcaGFagrkZmw3zSLTen7x9iHFxfBaY5dKgkrSynzwymTMEw5JzN6W5GsH13ZU7o9k18o5X8Sb",
  "key43": "5dc8bWhix8Aboswqo1k5YuCRfhAvst2iiXgXgVDXRUdabcqkoMY96XTXo2RmmWMhrjgax3qGg1jnQDKg8dNCUU4d",
  "key44": "SXUScS7h8GaRZvUWhG9fUtaCyHsXW2kNcyV4LpcGJF3ygPJShREogAmLLSfGf8g4Aw5VPS4heJ9wUQhpR4mDCdw",
  "key45": "4fK1jzNzho6EZENGMkdafupMjp1TL1gKv2ACPZZ9XFD1FVEvj4UtCFzDsAZAGSmrsv8Zb5PdcdZHuXVh9dXmMn5A",
  "key46": "5cD7ZnSLhJG9gnPtcrxqGBB9VEWQGWh5vQi5ChTE6whACE6fKJxKL7WtqhvhKLqrZafNUKjE3A5jvUxaw8Wo5BrA",
  "key47": "ohUb9rqrckjUS1zcBHg47dXBwcQHXuYM2NnNEwaaZU5g2fUkraB53L2sQfaeySWzD2EyQoDESS6VDAMQxKWFEKf",
  "key48": "2xEqcmNJNS2oXarmgJ6CBZXqTuLq8yVdFVrZHKuRcVdtkaA3zNwoi6vNodmh7wR26XGRxreNPtRoLTZQ28BJHy1y",
  "key49": "P5dTYYgjHEqH68XdRgWvQCe55JiMce4ex9iJBZUZfgtVREffkkK8tP22vBtGkdFQPurDmwuBhXsNC5riUGWacxk"
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
