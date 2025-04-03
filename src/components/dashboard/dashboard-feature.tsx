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
    "2RtuCXMpoFuHLBBHqet8fk5LFjWaQkx92ait8CEGg23d3Y9QYaYVD1QYvwt9KQDfwoKjiC67DpXNoQbCXdmDL79E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rpc2EGuKSLMsTDFR55g6J3jAdCTPeLBS72oSpuLqJaNaiT25Pp5dPkmv7JC6j9gKEiEHitGq6jkpK4g8f8zQ1dP",
  "key1": "3MKNdVasJkn1pDNj2fLgcMRLf21bTyZNtsbySsCAbQiKw3WcuvkeA39SxL4tVGRKEXWsdsNqUt1UTgCXqmynrMRg",
  "key2": "H87NKyNUedeBW2dE1n6ACAkBYwrohigsJkqd1pdt6N1pi2S77h2yMKhKhzpuqbX3N4BU8Wx4UDXxsBaYoBFHztL",
  "key3": "2wMSRdKPAg5FMVRFPxy2c2k7Qrhf65nM7xjfy44PontrgqFiDykgNoNRh4RW9qtAjwd1uFES2z64Fyw6GBizUZmy",
  "key4": "3E4uQEY6S6A9TgVRQMm4m9V7M9shsfoyigbx1z5pzHrpErsiXrFaYXXL93gXqjvbpRt8m2jUKLLR7p6gSHt9S6GF",
  "key5": "bkzEN3SjmtyQz231obx3b9o66bqrtGgVDBdFcNCYodzRdMSC2XBCVd3fpKq7p7pQ8pe1JSaoxyRdjgZ5m5rqYyc",
  "key6": "4kR9xvTXEDQaH3bgHZnZ55pKi4dcMbuv8GGVXVFTi4FN1gckYFGKj3KAJgh7aYYKXJAua5QuqtJqpe9Lv8Ka5JQL",
  "key7": "4JHvrY7xjxBe5j8aSibZHST6oTaR5RC7QG1zxhgWr2yff2GpacXtMFzQKJxVTw7N18CJDvx1DgEy74Hrx2Rgchbt",
  "key8": "5WqqdC25coKdhJsFkeAqbr9C45dU8ejucuxsk3j7iAcznpY5pnByHdTfmcUTGLj7wBB1S8PKKuqr9UxGWkThTPS",
  "key9": "4N5H4dm1yr3yMd9NTurHUKnk4WYqRSPzEeUy48CHdP8WUxCNPW4Vt7NmkFAfvYrENJacxLtTRNDcTkM4FdFkwPS6",
  "key10": "5w7qSZPjdgfkkiehcYM5D3JSH9XYuPVLWMuXURdVjDUTfjaFYzrSeRkPU91VBmAkT6222WfVgTtgHjsEXqhkMEdY",
  "key11": "bZDr3Y5DNwM4DGsABFydzJvND7i4ybAv3krrFnJj2zsYKZHMzLb7WxLgC1aze47jnbPhYGbdoX84vu8RJqrkE2o",
  "key12": "57wHSjKCcnMdNf3kWYVhL8zLSGP1LghfFo34mFDYfQHpxtvzDFzqyqiTkWFVRPAf7CcJnDTHM9vsMWaL1SUvA4Lj",
  "key13": "64CzcaZKAezbvRe6BACcUvGGP1hKqBXwFmHX9H4hf2ZyBuMmspvJB5BJE9MQyoz7niJSkj3B5Tavu1oh4UuFVSFc",
  "key14": "5JNUE38JYYxX4UCTMiiYJeKzJsqnkxWac1R2JGZeVBuNxspMvk4z7gzS7UZCJX1csW2qmMxy47WWunDLbQ2JNVPm",
  "key15": "4GWMV1z6GnAuuzoM8FXpHafsnvZYptxV3DiDJrneMCRf8dVPy87iiYrLpu7XtF7XDxRPvDTat7EFbEArw5yYMyNC",
  "key16": "STL9gvmn1UXcj3ry3ZgisWgrKXZy1sHYduBNmpYuSyQPESSwppGDzA7EpsodXJQfjbwN3NDqw56YFr9VS6BKg6T",
  "key17": "2spJR5hzkvQ6ntfPghwMqpmw7LAPjmunXFH8P3f5i8hHkxeZuh3HJHZWVo6H3LNxn26KyQ83M2zNKbHEw6SdWPJR",
  "key18": "3Nn5G7yjfrL9VhS6c7m7LMy5H87uYzKqHuBectSxPqrMosm3XDcy9wLzpWCEyGm18DxZcL4ayMTe4H1bGjBH1BGw",
  "key19": "2reJmepqWRGqdoKh1EAK4kWtcaFZbcgG29oQto6s4AwPJoUUX49V92uEvaEts5ikCUbNRWUn8JFNxdotvkbmJKix",
  "key20": "2pXTrBfyBBdLQ1FCXMFpPbgKAevTF94queiCG9c5zf4MFE12MrBWJ2fhbidruLisTMsmpAsDNe7mZ28noNyS1x86",
  "key21": "4DgQif6QiiMiLD9kBWegkNuLJwmpBSVfq9nf9ivuqTH2gW6R1m9etrgwpSaSYqpcqu7imUaFq5mbQUfoCVsjU3Go",
  "key22": "X6oG8Ac1wBBWT4Fdo8UbJMPWkQy73FoVwYHcWEdNz6hwXRES8nipSoMH7Wm52fFU29NXCk4py2wyFuPzrcrXZQW",
  "key23": "3r2UVFzc42DRDS7XXFHiY9HHVhhCZwQcrM2ACrYokF8jnmU7a8Hnym127rdEsptMNUExEWcXPaPHKgGSQtk16TRw",
  "key24": "47W3bfYq59QAavvMtN3XqzkAy8zdAZKBbnWTdTWTtAAVCxksC6d21DXZx87GYrB6QzLaYYDCJvqeUCwUgR9fueck",
  "key25": "3Xv67VgcQnZGbYUD8B2Mgj33sCAQTsGXc6w1T9hywNPG9DA2tU4UjeDCVutFyxKQguEbGKztrt2HNN1vMWxJYwgt",
  "key26": "ebyQjNSDJ5GnBGXCDvuyKuEMHwWc5czW1jqVytPceT3uexwp9J1wH1errm9vASHPCJeX6sbG4uzJ8f5kuBqfCqN",
  "key27": "3AJKe3sCXRaMP5oyEA8suokn5WWL5A5eWpuU6cHoM4SdHNuauGT7B7nAmN1mQHJD3bThf7Qu2pGuucXUD1SSsC9D",
  "key28": "3dbtvkpeuWbQWReC7qxaxVs2hJJhLPW41cgRn6YKNmrqscw4GNqPxnrBrDbEwMkrGtUZ3RBETi5svidVpvecTeNf",
  "key29": "5AALctnfxYfmGk2dmjsqG6aTU2pKbkoySVaS7SnGapMYXVPgKCbW5ACM1iFigBJ2Y8QA55fhad8fAyiAkea8FrqS",
  "key30": "2oHwTpTyFFCuj6VmzyyphLrXA1CyytHb4BCfBbE5RexMTQP2u7nyUdhMs38pnT6i4gxwxJQaMUso7RgwjsDFDzn5",
  "key31": "3WQ3TZifopM1VphbsowqoFYUo2uuozTDrYPy1CCbgpbtmVYLxDGfSa34KRaq39fiKUJrifAs726WCKv2rzqf8eE8"
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
