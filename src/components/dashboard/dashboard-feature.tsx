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
    "3sVXaH9ybB7JSRC1uFVWBF5Y9UGux6qG94sxEu53ysvZiUKpsohk56FLiPdXjVDgHGwPk7rzMEAq9FNwt2eD4VrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCJ2mH9yKqbAdEjZAwToKmopur82QRepKj92BLAqfFdJzRoh4WMb6J9hjXjxYN6LaQLRTVavzdejwnEXX7y4Fru",
  "key1": "5UvdH8ZgnUkEPJbmfSFY14sH4YUEhMuQPVwA1QHM1Rdhr4sE99smgE3C7rFcxu1mBLkohzSz15ePGuZtH4LZhtYN",
  "key2": "4CSHZQeEh9EHBPNBjYGMHeXF2a5JMZkKPobVhU3SUnYPtp27tHKhhpCaCtMtWeoiqGauUKN8iVW3aFnf1FhCXx2E",
  "key3": "2YVwXUBZFWAJKU1deMdzft8WDSuqJdQQXpsdxW1H1hJGdiH1QEigKHM6KwQREBy1HKfeupD2LEjNVH9TXpdJyDRv",
  "key4": "3vfpFrxRPJVr4ohsertBNMpPZQRqBBs4pVd3nZ9gG1bjAhrUyH8U7wfxdVq1J13i3VkDwq2A36GN2y6xGoStPcLR",
  "key5": "4jRthuZ9TX9M43dizydxXieo6QUPURWbyZhXR565NUUkbGpBcZqVNLVL8sthyFSghST6chsM9B5T4ECwp8sk8nLT",
  "key6": "5R7VTP7rgYGDfJEHWRN2zYygWFBxwPks6FRBTYXww2HFTfHmzqvppLcqacCWcYvyXxSBoWU2oydYTrbAxYb6FBn9",
  "key7": "4wXNcDw4eGDFJzdda1YFEgErMo319CMEyKV1YC5rG2fbzNzUdR1dAepV3XKLESEbkzHjTrCY2dX659cX71nNvRff",
  "key8": "32KzSz7rhszeCtZ6jzAWnjdB8rE16LFJsMzreud2QxfiaSmMU4qV2UauKFTWFa5edDXY7vNrNQocuB95GLpr3UPt",
  "key9": "Ksxhiju4BGLbPPkdwcgWgV6TFXURySHvbP1CSjAmqSVvHVsCoZLtZjvAqcKTCwqxvNotRihBeReX1JEFgQxzMZR",
  "key10": "3cEBARwagpDPBKJP2Fo4vDx6MWqSRhpu7XBaiECkscNMQG32uR6sfUmveGoSHRzu88dSTCxapWAZ76i5JQZ1K3FF",
  "key11": "RQ7FNSshdEU4aXUDeh8PAdoRoDH6prmiz7HXQ64NHArdNxAYuz1ztRv6tyAX1JcHsVfbiHi9WZjKoPHjbEZbpzo",
  "key12": "3YrvTWvJ62Qf4jRrVPuDS9LUPbXSM2vvieWJGZ1SMiYu3YR6pHFDgywQxgRZ9bBsXPRideRK75jF8wBV7P9JdR9p",
  "key13": "3qdRsguGn2FYokAPFK6kn356WfDQeKakhyjSXF1iNzyXRTQi25bvMzxU3GWszRH6BQcQhnTQjkEgZoSKpQE5MgBE",
  "key14": "4Aq9MEnM3EcrH5QakavoWYfU39Hh9pH6W94NXgtzRcEQHQu29y7D3dG8bAREjWhHkTgYngA7UULMWe9wHJhijJ2G",
  "key15": "2nFiaFTb1A5AdUqZp9YpDdv1nwEp1fBdpMHmWRYR7wH18chu8Z9ieYWtvcZ6tLbe4PaZLq17M3nn8zzK8VTN1VhG",
  "key16": "3BQUTZJKhr44veFoZSSK29PfGRz8HmxMhzfM3eg3e1v7qRNG8667JwJ4cuSAEBn4gtKjiN593tz8FwJzPryLJtb6",
  "key17": "aiMc5y2HuUqsRL6TbP2cMv4RhQdgypCaH81XF8uWNZ5Y9X9TZNhZts5dyeBYaXcY3J7rzVw7JedDEDdcKd19rWb",
  "key18": "3LHqkpFSWTnkuW8k5ncs6g6evB4CxJDeJdPUaR52aK1HhsEtEfwp5vjXoGQuJTM3ELRLouVHk7uS7JUk5pZvq5Fw",
  "key19": "4Mx2aLtR8rvtnTpYEJcPptMAv5jvZiV9PMZ7YcYMoU84uYj15C8oX5w7urtygiY1Eb5YLRoXgyMBWr42coKdnWXe",
  "key20": "iFhd1hSazESjPniNnWvNAQhxjdtWZrtJjp2B8SFAKg6DxL1u3MT5CJR4t469xkYf1m31rQ1MJ3PSp73nBurgSyk",
  "key21": "TADfdcQLFrYddWkpZrDWYLt6HTSpJtn9LrXuk5vCZ5hPKWL2xfueGjSxekvoXDoGXxgn5bLDi5nc8eR8VqEdHvp",
  "key22": "2Z7io4PerHXvzKSchhvaFLmGRcbS7kbcCvAkVadkpBB3EqSsgDrz5LdsXyMfAmqpu96oW8XyMjZEEaXV9BkknPpA",
  "key23": "5iUpniNmRBSr2gEofd1BQQx3k2knqxAWc3eFLfvg6e6UQbXrfu5g5Y3Tsk9ysRzNaS9uQGZ7gpNvbpmbFoTQJubT",
  "key24": "5JUHxJqUT27KtwHNacyjgcWr4BVRRMCVo4TZgehBh2kfzC2eTKJPt6B5PRA5g6PEmEUkpTp1Uvdngt65ybQmHwAG",
  "key25": "J62t7YTf6LcF7xnmfGXcg3B7nvLxvw6BeQND7DBTXr3GtbkRwjTU3tZ6ek6kscYUh6Rnd3e5a1R3SfuEbfXCDz7",
  "key26": "3dncKDPZw1uuw9uMuHJLGA4dtnbvNsDw8zzecapavADY66mnkBWZ22BnWhvXkEEu2ujH7PrA1yKNaDzdPATDz6Ez",
  "key27": "3jum7V2uhXaYSvbbsWdnn7mHesL9dgwwWXGuNtMS4BqYMcrApyrvrqhUFa8iVFeD8DnTPnR5w8JXhgnKqA8zp5sc",
  "key28": "Stw2eUcs4mTUjcck1UvH3Qe8cMz6pgUgTbFjBebavR2wsuCYiDvSHFTx2NAGJPLpHviMEf18995sfFxE4faMCsz",
  "key29": "5wQdyKuJ67necSRETqJq86j8KNBc3Je3LvSzk4SwoPFHXE96RivvSxjPQiY8wQbE1spbUtrwGTJnboRsNaS4QgJb",
  "key30": "215F6uivWqUNDfEMD9T5ej2B5hetvAmP1X8755mLrsEdiFHr81qjZeyPT1XjFdeXJmVTpsR58EtPUh841rSsgq4b",
  "key31": "5wLyfMK28SZG63UCPi2QC1RhkWBL5bd3ziFGU17Hak5ujbqwpEjVDuux7hiV9TdRYUvjRUpspA9SR8nRNYLm1fnE",
  "key32": "yFhaEok3heCLYcqiSBgyEPoCHL3iXLKXd1VUi1PfZj9fVsWMLoeZpDTiJoPXQGSnf2spRhPtv5JRDDpBbNqpMcH"
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
