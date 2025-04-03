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
    "4vfoJGNrNNFRYmXd8m7K8Mcd2jxGi5o5oQaWAprW6bXy92kBAPgjBdbyGypMQdzaLQmVu2kQkECTQSudYS165Mi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fELZAYbUYMcvYJ5WrB4wwhCDoY4RtVXPrrNBVh7JEKh881K9B1M2Pu9SZoeEP83edyXiatJZzv1Tv6TBApNHATE",
  "key1": "repfnQapXBFVA41JBW2eGfkiSr6pFCWxio32NgB4jLWtHkb8dV5A5yoFJ3KuR2gtEnqaxV65JSU4yWqREJj9aUo",
  "key2": "5wSzPzcrAdrppETEnbARdu8moaJx5N6Bbhjf2s7cY8vBWdVZY3kpzXjCyrg3vU95DSt4rcQffCFzhtrHpm86aUqR",
  "key3": "4YuPk468svQJgKMnns5RGHf4ymbXpkQrg6fJS72U6jUNoJSXePBJAV4hS9N1JdAuCe9gyQMyhLPiZ48pdcopcfd4",
  "key4": "38srv4eJQax8eMtdBnUQ8FVXbmzb1pUd3HLAP9x9uj7vfBfuMkJ8oKmvzALh5STUkzNrFe6kvjP1iVLYXQo7zAA6",
  "key5": "4htQkmzyPcjqZgVdQ9M5TTp1cZMZFQqyS9wBFjF3qVRbhjY63qiA8jDbiBJQyRKUfiy2PmM4Yy8TYyx4uhhVbd5c",
  "key6": "AJnbdaJzoWLJ3PeEz5ULamEuRJtuA4HmEAs7Qt3PXx6r2WVGTshv653Ps3akJMPduzwRJYh67xPPAMV7d1FWwai",
  "key7": "2toUscEBMShfSbNAPcfMBPP461eCX9YHvKY7U6UoxtZJDW1qq5YH8WtpUu698Xfs4yRf2CVjwWsoPtrgitqdUPga",
  "key8": "3hDNkEQcAs2k8HAQ4HwekHWMM6MsDS2ZsLxs4gRc47j1RyD3ZVh4dwrhtfT1Ajjw5y68DDayvzGLoiEjPema59NB",
  "key9": "2iwC9t6cjQVVBLLsLWjx1qycEiUkCikTQsehbAdDHvGwPabrcpaYutVmeVgAcwdz9bfvs9kw8j7xjipKkDYYSmAF",
  "key10": "5RVbv5sbKw1y5vnQj7gaAJXWW1rKBAGSiB1eQ1WyQUHZy46cFWgBRU8ZNdskpF6LYrZpuuiPdEiwdoxz86JbzSjs",
  "key11": "44q8wrsnCsGWPaKK25B6Yt3MaFjU9Kw7Vq3kCs1E2t2DLgfRAw2koRndmJ3MH8sKYUKRdow2dEzSrmvsecb5NnDB",
  "key12": "4qJAzXFmkuNuJqdc1hfMTvA64XfsEe4cZc9Mwioqy2LKU4WJGQMGspwu3cdvhMU4ZYxWNmzLKquoEkCrJf537Px7",
  "key13": "5GvGUvAuvccuYJ9adHjNPB4mJiNKc9E36M683ypigo8bu2Jr6Zu9gfMR6SNLaD656rFMz6EYQrhem7szJPXAPWt5",
  "key14": "5CcXYhxv2yn5ze5oRYjbB4kvpCjdX6i8FsnydubKmBLPxrqwW8ettytVwJpd3RLK2peDs9hGs1cmhQKU5syJ1Qg7",
  "key15": "3aYiHJwAbwnjfiEEwaRsm5jiwKey42rLqTHWcmQpVi84rAydnien2DPFsbde7ArnmeGgaAqXD6hpGm58gbMRLdjt",
  "key16": "5ViGGvXYcq2eVGfJWs4yE2526SifBJRor2LuCgbREFCLYquTvZjoJvKQqTrwyxaeerGJDE6BhrfUt1rR6HP7NnVw",
  "key17": "3KoNtx2i6U6QULjYFW5Ae5n1zgL4aLjVAzeSrJQ7nV2q1RqM8qpRsCtSYHcwvSEy2w8bEw2b4YgCcgydGzKzmgRw",
  "key18": "4TTJ4xVYguY7EvyYeE8kGY8e3KmstHu9F3SN577WMojBr8uDVC1H7gmT5BYfdS8FXhfz3tbDvoPVJvQ6ugQ37DMA",
  "key19": "2xThm25HcT4xo9JmhCnSx5U3zHiHvVLG5H4az3DNVFpCCoP9TbC8qTD5Xcv51UGqDeYHJr613BbATdxRyWsHjQte",
  "key20": "LN5fDfZgtZEBgxZK6VEaxXMkYLr3FCYCyVWFTHAx5QA82CmE8Vgh3VAUUhMXvG6xbzemautXybhuCwZgU6g8eki",
  "key21": "55jwAQCobgRXhTEHnRQxp52ESqQepRE68f3YFfhsx8caSvLCt31pVHBojtp1853z8XwqE6KZ36DKMUo8EWRDoGUj",
  "key22": "4CmfvwggjswPZhGq5L4NxchhBwbE22jYwnYKXFDdMQCQhWv5ciHKD4ZA5xXGiZ6U1Pe5bv6CuCeCh9PHyphawYqV",
  "key23": "47T3oZU2b6KxhtH7ob6xzHVGhRx6F9kfbLfsU6jyMfbkDB7pb3MvyNKTsKGpK4zXWg5jWyBuwBVe4azecbFhp71Q",
  "key24": "KxMXRqQZaYqRSrmMhXq6Y7pMPAnc5fwQs4zvxsVeitDKhmvvhaxALD4s9SAkZUk4eGyYz7GsBuSbVXVpUd6sGEK",
  "key25": "67ZLtyYdvQ16hw5tj9jpAFQenvRoupBYQCMxF8J58iT2L4ZU8VUu69tWE5YNHaAhN9M4yeLFftg5HTWqowBYiA58",
  "key26": "54B8m8e7jQQq69Yq3rLRsDwYmGCJwu4cwLv1a6ZsupKCqzY8xwSSmMJ1tzHvKhSXiC95KgH3ySQ1JPHUL41RYYPN",
  "key27": "4kaba5r3KFYiz923rUzhzAz7iEc3eFB5Uku29aftscXzLokna6W857RPhR3x77nNnc1prSitc34Lg5dJh3CvvcjY",
  "key28": "24wuRtkGvm51RGFGoEHbWT7YiyetPMrSBBS7Ax6FRgqGqEAq6ccy39qPLFiShC9EL2KRqanTvV6pdcxt5epcEsG5",
  "key29": "4rCzNNJ6TxPjZhYfN6vEpbfzfGuHH1LipD9zpB3jLDY8iLdAcyLYBBjmDjnKi3rLb8J2QqoZhmLtBLvQTMbk8Gg"
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
