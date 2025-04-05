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
    "2w57ahxJguphCZceDdXoX5guVahNXnn6J3VdZSncGer2VCBTfM7nZBL4QR56Bz5kFJa9r4NWpPu7ivArqh7eoHvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DksggfcCDmaRtYWbJE3HA7GT8S2Pcw3oun4bX2QoUNcfNnnqGsLmSQ5YXkbDWyJ5pQGmhPjEck7N4QJ6rqVxKu",
  "key1": "2QMxFWLAwcND1cau5XjakmrTTd7oW8WetX14sZfXfsoMnsQbkLjm4Fu6kaVj7EyqXdK4659NTxWG8xWgbn5gcu9u",
  "key2": "4ZscRqNKU8hFbcrjB4s3Wb7zMeZXAaCfbCjAkfDVvVf1sCsY7F2UmXex1Sw9JtzNVSYvLrmPn4ddmuWc5KNHdrxs",
  "key3": "2jjeGroDe8nju2DJRNcQf4wDvRq5Hv8X4GGS2fZCPGeJDu1hYCdkDxoLHSMb78fMEHUJr1XHnriN8LrNxpwQgWbV",
  "key4": "5FKXbcdvKob9cHVjJa5y8jxxEZGunme6nbRucaGpAjV6yRTFg3EfU1VDhpCSx4N4FNvSfXZ7aQ2f7XrcHhkQj3g5",
  "key5": "299rhoA2QpkNNW2W5ghzNso4T8QWgvzqQMqeVM68ZJBb2QNd8otmzL6sPK89T4eUs7JSM91TU8Pdv5TDRygNhC1w",
  "key6": "KRiP2AFYHa6zffm3D6529kRJEdXyQFwZbWBwtH5kJMioqnVYxjUygduysGMWxCXcHvP8EQPn92gbWfGR7JLdBMv",
  "key7": "3T64PP6VMTQsxstVw9ArmEAAv6wKjKP5kEFFss1DdGzVoAjMEaw5reh52qJZzkw92gyn6r5e6oi8Taza4kKRnXmn",
  "key8": "5wMP7G58PTGjTu6264cRCZUyyvSFDHyUUCdZWoAuJMHggpNum12AVGM9pAXQ7rdw71trwCZHytvbA2ahEgP4mLEF",
  "key9": "58T9eyzy9PXopYx2HcZzBCqtf3QKb3s5Cfq4a21ThD5FybFePJS4chSN8aupcTYXuFm5aZyRtpBGFk4pNHibphPg",
  "key10": "1z8NHhSPTNZ91em6cQzigh9PRytojhZ8UgShQyUmzGoHAP1o1J79AUwzvovLfDQrFPxyGZnG4wrsND6Bpwj6F2W",
  "key11": "4NJcpitABsRxStHEVpxupg8BwCp1kK2noJWv47v5Z4gjeYTHYgFbsq9RiRQUST1VPr36zrP7HjphBQcbb9PDDBgS",
  "key12": "3sN8YGNYgKpqDiDz2fh1qhwcopnsvfR3CkMJjnY78Cm5Pd3rF75rYkPKU1byz1JF2gmg3dBt3H3P618ah8kmiFqA",
  "key13": "5NvfEA6npiU95LxgeemuNBiAQPA3MmPD2TUyMUzhK5cgac3A9tMxXbGG9pUCkLdxZUEVKqPy4sBhAwfhC2BpQDof",
  "key14": "3KhQ6Ag2NXE1bHDm8CgwCcrPE3uwHSaHbbuZeqb8xvaKfN7Vj6hDGdy5SatHajwXLmZ2iaVWakfvsFdRU2BwWbTf",
  "key15": "5LbUaFUMid7iyMHyQY5ubmpdERwYingimXAvR7aUafTNV5bo43ocsfDr8CpFPo3dNvZBzCJRdYfrPKSimqAKEcyk",
  "key16": "b6YBczisCHh4yVPKw79QW3tsQoEkoePdwQeVzBs5rjGpUktKfkQ6SsEmFLhCqgnMbSMUf82oXDNb3o2iJMeoctk",
  "key17": "ey7NHeQzbVCfvdREpsMMAYUV3xDe4C9aLG75h6wLGvajMfpv6h13xQRW2gFKnvBYqHZdcoLUVczU2ddL6kS9upC",
  "key18": "2EFCDy8vwncqV8HW5qK6cS9SSzBLXzd3iFqB6gHgzrQADYRSLS7aJFSsXhUKMGYGfD1a9DPCr7gg6FPhP2rEPYDy",
  "key19": "3phzdSoNQm4CPs4sSxF3BtdDgkif7m3ZptQdPNGxDNUeaJ7J8Mros2V6SMiJhGhD6KWCAE1ita3Yg9q2o2Ni5K62",
  "key20": "493cy49ncmZQwMdukZtnpBSenaaghTBQ7oekfBndttzovw7U16bSkxqbVbH48XJnoU6Z99TPCinj9VZ8VQDTezaE",
  "key21": "TunzWvfXKN7NYwdhxYya7yoxVCfUVhH5785Cy2zECr8YTkSgRF1Rjj6BaBCsdiXGGjPr56uCFPrNxGtvkpUF4u3",
  "key22": "24PeDmXrY1y4dZkFE2mVBbHRUQV7Ww2BrU45tbAjkEB3HvA1qNSKtLK7LHkb9gsDTojka6dFUvrRTBUbFoh4Krmv",
  "key23": "3QzMgYQbwg9iazr51e8CWFqqyY5EA8h6uNKbkH5qRLjBP14ZhzdhwrLG3V62DXuTZWKiaJv7hGGDsRACYbMsiuGG",
  "key24": "5vphE2YYRZEs2vygFEogj5Cjd33zgaCrHvQeGgaEiUYMGv7uk68JNAMM1z8tMtx73UJLciY6MsTC3o23ZS6zpN7Z",
  "key25": "3KBoFEmW6YsdPNEgZZCXdoELChP9j1LHAazVFqtFqsjz3FGSbzpWyAkyhUTDmbdZr6EFjePxdwk2yfKc11wYYMhK",
  "key26": "PC5QaXZ139XUDYtvVFAFrxGYFUGUHQ5EbJT7LEoy8rSPbtDViq3pD3mWJ9qqaEBQqwMe2nkqW2soZiDwtiTsVGW",
  "key27": "rKGZpDTa2WVH9cMNua5MwEExEF1iAovua1V1pEzPmFJe3nFjzcLiexUAPwpBj1QbURVtiadbw3UByWt9LyeEE6t",
  "key28": "aG7Dwc7CVaqiKyLdSxyyZr5iYZuA4T9hTpAjW7iqAwzrh1skdH46EMLjBjY98NGqSf3wSsUtpSqVmuuYz4oMr6v",
  "key29": "4fqvnTdPJCkYEk7dvAsseA6sYGE4d5RKPvP1tQLvYKRJiwEfAJMrfHzwLtWTgr6vL2vBSeYYnnmPCCjddsKJfFCy",
  "key30": "GPZnHAp9Fzi4ZyaTu2GSksgEdVLBRGJ7nRc9EeQqCELADjCYu7aRUJ9bzkJE4D8SAB8TKhDeQrE9KN5h45nFQ5T",
  "key31": "4EfKzUNGfm5pZ9xPjf1WUEVz7VGLYFdkMxc2XxkfrpsPgxcAU8iiPwA7fE9abp8MbdSsf1GdWZRYuR1unJYgKMpq",
  "key32": "24TU1133Td7cBkEVCP2cqFSfBXU14vKaFF2hQACVwJEmLno1gisqcq66hLuiqVwe928Hm5q1US9qQ27EkrxS5VaF",
  "key33": "4hToohY7vwCjmHYiH26SwQcmFqw2ZTLNe5QqQCi87fMPpZLzhE93hzo1FSGMzjUyWEyELC23gQuoDVaKfHeNi1bS",
  "key34": "2fCTqyoX2e5RcfijJwbz2wFH4hgSi4WAg8AjcNuxi5ArqrBSkRpnKih2NndWmQs1RNs3uGaT4YRxvKfziwUWU64o",
  "key35": "3HWuiX5NeoDt7Xw5WyCNbdPb9U56wkU8Hw18YuVGTjvDSojZZCHb1C844KT8JnE9FE6Tp8aCeTuxiwFt4iE9293i",
  "key36": "2iECgpS1RDLWDaoznnWDfkjzuEooU81tRCWMcv7xWGYuE7tY8c9oiC4G1QcnmN8hGsxS1cZsjzYDpLpJ8rSkSTUY",
  "key37": "jNZ2q3i7b3GzBVGpWX5vQBwtxaJJFXqN24dTP4KTPLSCG1dmWxraMnNJBB1Mo8XVNuJQVo7HG3aHZErHcsUWxsV",
  "key38": "4sDrqq6UxKRuhygttpbagqaDBF9ZRuEn1p9mxNGZxMPmQit4BLG7FUwJxoEzEREkEnZEEzCAEyx1wky3m9NyoqBw",
  "key39": "2bZcageQFFL8FKdUgWf4qQZqoZMoi8HDEUmSHsfvWgxLKSZb6CtTPJH2V7q7ND8e2zPRATrxv1UKPKLedAMssmMa",
  "key40": "4f4aD1gXXdBuYao7vGA1DCTFZzir3jABctp9eZWhKSvLNUdDS9XWoAdSXrzh8NTFmD7dW71SAHggj92BbK2YJH3B",
  "key41": "55RMjuBUu5zjPhqBAGCU9e4xVouNqPiArY7YxfWSxEXJC8hELmsjCwbv3YxvL4FkaeuahMUSYPs3oUrJaPs944F1",
  "key42": "2WSy2e7uj5gqoBXjCt9AFc2R2HWzHAdkptmYmTSNCc1Jtz9Zd79DwmNZ9TDBRiaWjQmnAavrkZNt432BonubwzRL",
  "key43": "5cGkQL5ZVDRMYqY8msZuEfFFo3CARe4HL7iHwuYCcbbTwZkSbJf9yKCxY9BmJE51xyuEnBL5JvwVRKNDVN4iKNid",
  "key44": "dfs14iv2RMnt51mW6iRmpxqLHdkK8t5F4yFAkYV9DbXRL2srHDxnFTX2GDGHKp1Gt87SrgaBHP1kzQiMiJ5VHqr",
  "key45": "5cq7XpUZ4xUzjTKuGnphofuvXkaEUrUtkYNCubTqwEoa9m14wDTW5PU5MhSfBedKt1LpifZuRGNsC1FSFySzMyGD",
  "key46": "38ffENrekSLghoH6Da3RbuGqN9rXbTgft9Ybxg9wC9jbmXuKFXffGNudxk9fegHJvCFtWxjLG3rPsBZSqCkxySNd",
  "key47": "gZyFxDgmxJFagZUk3HAvAgNEnYiKr3RBap8tkKAn4CaugXeL9LT9mCgh1HL4TXfy9H7J3TXBLEMfsiSb7gpJLJx",
  "key48": "3C8tUCB2U1R4d3K36uYeuQS68zsiZ8BrMdyhnxXsvoJzqnphH33K2KWQ6r6zsdQ2WQSyQFGTSoLfjSAwHKWPhF5N"
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
