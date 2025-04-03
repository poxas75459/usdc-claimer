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
    "JBJTsErCSDRyp32vfPdDcgD2eDGweoJ1v69xBmpEDAvSqFwvQDFNgt68EmWgquNm4RTi2CN5QaKj7bF9Mx8DqYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WmGFSE6WJJbgck7sDhSCKwuneGs5N2mzAB1LEmSfc9wyjBBJz3JoicNVwMBkkBydCoWy4Mv59VTRiWSfcKvo3qs",
  "key1": "QARDb5GprfREPCrD1kjHYEgx3vz5sGM6qYLtRWNnBav51kVXCAGDeYTKyj5d3TBCgBoLnpe7tKw7ur9v56vydLu",
  "key2": "2kND6ED2kcWjWg3siV2roSrrFXpJMMi1r9FiWJ4SU38Ctw2MEjhZp66C3iRBy5vX79GuK3yxPYWDqF6TtvPez5xL",
  "key3": "2nwBQZjz889pYQDSM5AsUJqpZJxJmKVZE8qnyATZeiWjBxSVMXzyZY2LJaAa1X2dE2y1QvjLVG2iyRV7EoPBTK9P",
  "key4": "58BxpUdTd8nNWqh3pvP6bJsnTvHkPLoaKmB3Sz5xkGGFnFirZAANiZdErskLWe2ZBPXqALcFVawfFZTwzjWJE7jr",
  "key5": "5JsT4GMCgWB9MgLzSv3cTPnqDGA6rZw4kRedBbVSHe8wkqcejc451NgnAyUKTR5yjUHEL8WGhFUVgQyiQ3RxU9uH",
  "key6": "2hjswHTgJJ1CqyddtBHMbzyM55bkG7C9FNECYB559iUmRbP5kCnnWs66pDjPqLrfMe3hUhuLrU3xnDd9ShnTYRP8",
  "key7": "CEu6QPsHAMHQ9ijo1bMVtBKDPwW1QJyuwjk6Uw2bnpmHzwtD9qMAVvQMPtyo2ZzTWD5xiUELY5rwZTiBNyUGEn6",
  "key8": "58X7SduGZvY4GGnmAg2hCDdJ2VVEXtNH6jyW2qCNigjXd6hQD63Xf6S1CMM6J8XTBYekj9qrEYdCQ15MidxpggaS",
  "key9": "4nxY1psvuSCLCH9VjD45DhBT3uRA7J9HB8rbJiWfVRKJau7jaAMmcCaLz6SMD6zJqfempXj78FpY4JTScbH88QLd",
  "key10": "3URjmDis83M5asaayDQRT7Epwv2Aw28tqaSxEuHKmzsGeVskT3gLgbDrhmKMJ9h6ntGGJRi93NGkGrVxSdgxWG2N",
  "key11": "2aWfXmCW2JEdfcPRVXpDQUR5CUaRNocr9w7bshbDvBq18NJgG38HLNJ8KS1iqP8J7VFwHjjJREhuWgCLs5Zrjby7",
  "key12": "hepUfiZBzArXSHvEqGBmrGki7i1VbxJBWKXBxU6XEjAVRGpxre2iq1VhLsrnUyVbLesWrRFB7js7fcoMkkmSBBQ",
  "key13": "VTEHRW3wFxw1AgJAD28xeZzsK5nCwWGjFEMJpsBbMeeQiQUgApwzA3n9gV8oiCt5Q8bQvED4sk51QRqCLzM3rbw",
  "key14": "6FsK3upv8k1WbieYonGoKjZpR84Vp6vWv3oNrpo2JDS9SR2iKEYE9tRpBdKCULLKLadF7c2mSaqj231fdr6RrME",
  "key15": "5XWcUCQtBwimjHu1mxFTu4xCR8Bm7LcsZ1iWDQh1DzmUycV8PzWp1Fi1DtukxSLjafPN8Ynru2RmmFQJHF2YvNMz",
  "key16": "4ZJb4qbyMPKbRV23R5P41ethP1f4XDB4AKnhaSc9hMnNYLy2BmcaViTj3h8P969aqjUDjLb8JhtFa3m2Jq2qGQTT",
  "key17": "4KWeCUvXY43q1NPuJEiLpKVesbGvQbpisXY1a6TqRdRcP1voo28PcJcnTqCCd6peb955928nQgayaRbeyPTampM6",
  "key18": "5pkfSDKidXzyPKx4SsaiMpTAt1efQCHZYPhCyxdVrpyBN7MgN4K4ABB4LFb3mJjVq2LeLRo59U5c6qfbZffo5SSJ",
  "key19": "4mS1jNE1oqBe4R4UmRBpmfpgLvzxWADzvGZBZEFoCbgsxS5evCgsbjbwravpbN3dYDSEnTNscRFGav6UtnRcFpVg",
  "key20": "2AQGVr96dq8kg1jfxCsSGQfPmFJe8y4S7ac1deBY9riDdWciqGjKeUn4RD1pwDooR5r8DJm25Hr5p4p3VxNkmrGY",
  "key21": "2iCDE4sdymH8esMV3X8z265wNteKRrtSDsuPQkxhoEDu3HkDLURDGMm4e8zksynopyQtquKhNHzAqrzAg37uRv68",
  "key22": "2Wfb1ipzdRcqGJpXJiTyoV3SG7vQXcMG1vqvMRcQe5ofZNkEd64Uwpk8fhTWngqaDtCUUPmZUYXEe4hUYNxHgCD9",
  "key23": "2DbvDGeeN4WR4Roq4Di1chHVMcEwATykygm7f7Enm2BcwaYw6u8RJKwnVP9XdC3Sduq36GHtxJVXd6dR8pMqpA76",
  "key24": "3Y5iysEQiKbtu14w93UAnQTPczP4a2YVrtbHtnCQ8xGah8aoJvkGuoq79EjUM1vAt1xBKsnT9FjiGt3Kc8CxBqbc",
  "key25": "22fz8NuqvwrRqyF7bZSsBtjehHdz3yCwPg2m3yJPjveLewXoG1U6CDb3vZEi2Xqu5Xhj2G1vwvP7AiANEm4CRNzF",
  "key26": "5UtVjxBXgETT28gn2XkDN1uZgQqye8ukBrWmmwxDsTpp2sexwuVoFVYsmHdRMn8GXJJ9bHbuX8DZnAK4e9Kpbg1V",
  "key27": "qpntTRGPCwFmitiTn2GHcLEjwdQpMKBSziCw5U5FC2WRaHfuU8muZhMRJTBx6vKgxJ8d1FqBPbJXBZnTqgxndZ9",
  "key28": "stLCgiqypafRfCxk2nJJTEp5wQTdRfer7mNySJDebAzppMZEvu1yerHnAKEFFNGt8q1hafNVwadvNY2H8L7SHR5",
  "key29": "4TnXt8d94ZdxoZegPzaMgazX9XoxUDoUBzDxPc6pfwM8FeFctR7LGFbHGZzi59hs95nXLS4WNmSZKSSwtS6wgSy5",
  "key30": "fiuXU2MpVBcoh2esEfqfQxKnyHeexbpHv48pnK1bBm6LUDtqK4yvT9inJB2QpZNpLQ8oBkW3ytfPvVekkeJdK1M",
  "key31": "2xoWC4vu72FbFGw6kZLA5xZk3fpj497rmaWEuCKFrp7iTcQu1qt67Z5tqJNB6XCj8JjbodC3xqceisArETrTmnVQ",
  "key32": "3LMUQce1AaNQKAAbgyfDsXppm4RzMLmQjxpKqQySVPdS8btzZo2b7hHMoaE7pHKPSDSzG5uemD2nhKX51TheDDWw",
  "key33": "5oCYf3t9GHEnj7bvkn1jh8d1z98ttK5PRckUtYCHr7MgGm71emHNdmQjLk6dzoEhSks9jNt3dDfrdNjHsPUbsrJd",
  "key34": "hZFQyWvFsRCnRffBoksVpGsEC8rbGHoHRArJu7EAGdTV6ebQG9ieJLMDPjXtEh3kkSW2xEvBXRRqXdwAxMYinXH",
  "key35": "3VgGofWsyZYGgdG9bv5GehZgWNdw5Qj89ihupYkgQrut3fd2MqSDWSsY56B9ah4GriyyQvKQxaBbjUzWRyJuiGa7",
  "key36": "2QKArRnk8Gp8yZg5YzajpiiKHmJZxPiKseCmiMhuTvWCvMkgBNu9eN67GUoUByWTmcQiXfqJWifYUX8MfXk8ZeWr",
  "key37": "34FmjLrJBrSxSgsZqF9tAVrG5mcdw9BJQPP7pcHaFMH3NzMTNW8NBeZKPJpjfiQwfHSwav5Eje3HDbQZL1qXQB9u",
  "key38": "5Q1GnBagKUxqu3RSV377pNjUACrZDSLBMK7nu5LyP8wHGbNeKApo398TmGPtwEKiqKPiYVvwBL7qvZiLCcuLYuKx"
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
