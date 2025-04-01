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
    "43Mur36B8k6ctTBgHqJMWY3cWe3Tjm3JXYEp8SXrmziDCKyPwqNnddpUwp7bzqoR6TTGx1ag9KLg1jiQkEq8ecM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p4MNAknbUApNMdJVT3CVtnHDgqS1zQRB8K1W35Zwy51zHbdPNpdpCpEgbwAQyxhjJwoD9hvYuDYhuitAbfygFF1",
  "key1": "3trZcXfzjvdjcLumtSfiDyXXZGMiUGE4vV2GZhCFixMagQq8f5txEixECbnEsULnTcPmVZ9RB51yFMUQFeVZa9FB",
  "key2": "4HiaH5w7jakv2KuWsdE9wbigXkZqtvEJMPrvrRLu4KXHZwpW5uewhz2Bpz5ZuvSuvJJvvkeHyKAxdFXr86m2QDrt",
  "key3": "2FnLsX4hYw3NtnZFUBv13HvcRMDFmDL1viE8aBZhyGoapvct3bFNLsQiYr6iKQRTWheaR46qRmN6NW3xVG4KM4QT",
  "key4": "5v9sp122KHLMt2UPL6EXz6VWz3fGHGtZVGJkSWCD47eKJYiC5ENX9FSg9rACaEr3oCk1hY8d1fScv3NmbNZpRurY",
  "key5": "2wsWm8wMCkTdDHEErnMtykggMWHZ6iJ6hg7ua4VQUjhXUKbGmUs8KQ8SX1inW3hxfq8Ry3UGhHq8HeDPnZGciL9C",
  "key6": "639jf1iGUiHxMoPRytjQJAgZpBLxLQNwx2h9HLhDU78eTGjCaWCutN2npBjVGpD2CFfMvKUF9aXjWjQpn22rBVWE",
  "key7": "3B8Xce5bSHnea965iYwawmU6WU9bw8abF1ckL8sYPzjP9UJZqtbWgu1dJuUC2HLid1dtZE1VJQVsMMsNpzYawNY3",
  "key8": "4GiZmUqce7HTT2vaZmAwuupNGSVT8fdBy1NgkQyWvveHPZYxvGc8KR8NzMVtR5KxssWeUuX4KxZHPD6kvcSn8vWD",
  "key9": "phQZiJjqPEfrzBWQDj8UkyaWFHedY7jhrqtpMRc2khzrwFzrS62cFa966b89S1mWQruUuad9Wcrtc9kG33reKvB",
  "key10": "4bCFTsqD5bhv5FvNABf5dQa4F4Uw1bMVnz9j5Yi2BeC6PDXSdBKMeaQX9dskML7x9Gu9ceRpSP5zmpRGjqrXLNTN",
  "key11": "3gHbzAHRF6Xa7ZPNAHgNhrssCouRdnzjWAtHgpRYhmSMo5XMHnjpouLGYnzUbKMRS3sDwY89Zfkz95YBG4VTP3JA",
  "key12": "4TVMfXp8pKtkf9S4oYCPrRL6qFrEktydhUS4SuVJ3cFEQJSw4dXFLUqwssfWp8Tg3iSi3WK2EKw3DRDnoTgrbHn6",
  "key13": "2j3VJZt6Sjfgav9H2d7AscLsJcswQEBZtQwJD35Yp8FxgFj3pz3x5nXWruCYEFSBoqBQ3kKRjRg4kfm9ajzrSDe8",
  "key14": "3qtoNySvQLhrzhgguP864KQ8XF2bQhnWs1ytF39XytAJb7u2K1evDxh98oVTK2EC69H9i9QwburFJ37ckA2s3RbN",
  "key15": "3kTjprLSCx1n4DrCeG83xSw81XHKAoxVAKV19oMdXLwYjxh9uNqLbVQEufMqoyGVVEVxm6nRXc6qwocPw7kGAaFA",
  "key16": "Zugkk1STx8hzBkcKr5VgZhpU2MW3GixjszhnYAvcciWRZiSavkQ6azfgSaKpBQ1DNAt2Jpp3mCp5fj88kJUpj9z",
  "key17": "5Qtwwn5aFEodigZmk7KoLEeDSozwpX9YExjw8Wa2dKtdLRUF2UKWo46CeFcnZjM1wxQwyw3thK17xqmmLa5LBfUN",
  "key18": "2zPKikgjSADqZLFEjcwnX7NHVZLjieLTQeE2Lf59ygmM9PH239hwCrxiixPyss9MAErGbq4Bt7YqpncQuFvYMfNn",
  "key19": "2a9aLqpufYYJjuEpd4SH51kia9ikWFWdD5ZYoGZhKApeu9WUtPfNB9fqmwe33QMCVk4oYjqpRzs59L5aiyL93sMp",
  "key20": "2XpR64XsgLnrACTnKRcRcfLMpTMLoXcLCRdxdKpWYaeH91ZGh2YM36tPyunAk8n7g8w7mV5LPA9vRsGzndfu279U",
  "key21": "2MWdFu4ndUaJ5efQ7CK9VxgjbdQJxDukA7teJosoNahH6jPBJGaWRAzodnDgq3X7QTJ4PWQBTAspmq3ZAgHjTBVZ",
  "key22": "2RrQXRL1HgRpAfUjMWCD5UR2Ws3sqLfL7hrPLeyJyyt4674FxJcMGFdvLKQw2CoMPPeFFVvmZizxCVoGgGF5kKKg",
  "key23": "49urUvaRCBDTzFjX9avGKrrvdSQnXXMaAmbwPDN3wCAAKdV5SVRnBvwUq1hbT4DZucE3jY4H1Nd6j32PAsKnpiiQ",
  "key24": "42yqYnMqB1D6qBPeobVksUWGS4yVnUDKybdHHeUycV7vf7KeSbqTAu62wEqQy9ZnKapwQ9nxYwMotJ57wnL5XhNj",
  "key25": "5uKM83yccV9hp49kZKCpiEubiGMBhFZeh6QvxyxdbKDxZqZabWJQwG7ACWRYgDWfHWzAzfV8F3cStKupr6kF7PJp",
  "key26": "5mBuGSe9YhWk5PynXRxBCLc89oS5oSRiubBASkUZMwVKMNSz138gyJfmvPtCmSi5dAAqsyd665esBmXHX9NVvCxv",
  "key27": "4yEu3NLbKa45dJUacCMrJfD9tH9pWXSLoEJ1zAL5huwPAUhhq99oKW8oxMap2NdK6cvW6AtKs3ZHayTczVq9s2AE",
  "key28": "2s9LyUaTEB8t7kUNRrfpyy9gWukAJEowNckD8sqrmnSouMjwVFEYrnNU7sXHUrg2riY8oLPbQyzq7fFdntkykdqy",
  "key29": "4XSHHrTncJ5EE56FFAqcG4EHChTB7Meba81eF59SeSSbRuSvs6Sx3iCRLw3uQ8CX9v7cBHxN76c4rrwgtYYzRhV6",
  "key30": "3FeEpufUutiA1ydhD3FHZoCgFG9yLtUoRzBeiAonabCvc8VGtnz6xx17EwQV57qu6Bwa84h3gBiGtkyYYN8faj9o",
  "key31": "zHJcsqRzXPBbxyXg8qW48ryGfyPaSBebuZC7X8pbyeWZwvqvoHkLD47rW5S2wXxKN4tFNw8XRrpQZye7VDS8Bjv",
  "key32": "4u3jsnKopLCPQWM3Co68oKNhUkNqPPPh5CWHaTs7r8eLhY8pzAJHww8f9jvudbkvxtJCwrHSZnVmFWsX4cUVfs5Y",
  "key33": "3vVdRpKUZQZRgB5eDd5E4CXQkY18VjrvgzfsJyqSRq9eTYUnANyM2kR52s1qg8YnWJG2QfEnc88y9cWyJeqM3Ak7",
  "key34": "FPcPjoHSVCzZyWyjp15k2jXfUhf1G2LZjBGaeLFS9B4xZMQgiohWNnZGzcB2AVqPc4XLpMk546RdF8Eu77EQZdN",
  "key35": "YRoJYu3LVFhP5mWyUjqN91X2fba6bdcewTSu2GQkCD9y9ikQsSYuFY7nfRiSAC62X2K4ExbRNf4kBrxfFkwd49b",
  "key36": "5LcXjuLFKVX5adngvLmiXibQNw688Wvsw1TC3fxVQyTjPBXg3ESdsTAid2eeuwA33UEufK8dJGRgcaZ35Te9tubU",
  "key37": "3r1PTGKp37sRFAa6cho8nm2vqvVYAjhCJcWwXUXpjcH3cnHh7jhe5yUQw1DztpUnV6VT2Z6xHkPCQF9EdHryh1Uq",
  "key38": "5tVPtDeuv8mgvSDXHVcqcCJRGEiB6BrNKx8JP8DDWt99ovStFXSXbbJLHUrUHGzDnmWqNdbuqTuYkhA8stosJRY4",
  "key39": "4EddaCyCHDMextZTFxPUu7fHicXrDwGRyZZVJncpmL9wts29SNwnZC8CoWWT7pgy2sTwAXtuaAwFk3u3Cezu48CZ"
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
