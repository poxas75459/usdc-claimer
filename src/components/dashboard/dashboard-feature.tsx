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
    "2MfoBonaAiHLjCvF3Xaf9Ra8Ti9caGggFGcaokEYMsNwewy833SKuHVKB7jPTLRc3q5BUxsKwoNVdeJD3u5xFZ6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KBCqz7nNWYDxPRP7mjvkrooVfDgoDP7RErTb7PL9ujUiRtZXoRDPqrjAb5AeMMkmopKA8irKgmn1FvUyQ8uPx5e",
  "key1": "cMEYzVhcGLbR5gvAtPsmAqUrZRskyM97otdimYGbj5fCAR3FruUYU3YGgb3RhHDA1YU5pxiiQAQLdbkejHCBv61",
  "key2": "4iDEZ8RPrnswpr2UvKWuTVQAbkufmuqXoZGCuro9gMQTkipjUUKATo6pWfsa7Hhkm1T6DGuHHVRBTdPKA1k667pZ",
  "key3": "5EoaQdcSYwoYiw4oJTzVgPgyLWumJyjXPqohC6DtxtMBkzsPw5Bi8CiJBVBm4eEtwhogFmEP2LkvBXmdi4dvtjqf",
  "key4": "3YLKQDdj5HziMCoEgBjxCphXvAtnkekv97pCpgAjmQ4pbazJaDZXiu4Bnx3Qc9P1fFhJ3NWZr39gtpthqNAcQA8q",
  "key5": "4kyMn7UEuRCmbJUZSJVX5NrqTpzkC1sbjM4GGV5TnyujCyFoCwrMaPiBa5nhtJ9mLB3FWmDTH2aNa2KxR77pYo31",
  "key6": "3usZuJh8HTGJDNkmWDBPvy9DPTMbFoXueRnnCRtytFvhi5y2mUZyoMD4jMXiVacPJSwAPvGuGp5GXVozaKhgFag8",
  "key7": "4WCrAnYEbTiQgkBr79MMLveRkrVrCCZfrK1w1XrA4EUMFV7MHRnsAWmY25qfCyEu8kf1CMvja3EvGbvTCeSGYhha",
  "key8": "A5XW4xNzJwoDDggiR9ZsTr4PdFGP84ZwYSNcD5N8aMgbPKVTKzHaqRbQNXfmy61WnDPXXgVUiPoTPFU3NU683sv",
  "key9": "5Np5nCcdaczfeLSziga2J9AXmnSwd6EnfxuD9dCcfE58vADWfgPcDG9psgcJSrFCFnN5idK7iXDyeQRx6xh8oVGS",
  "key10": "pjeya6YzTtQYq42b1EsR9tvKgsYbgkv6m61vtxmpU1f9kPCE2vjG9ZkfprwaQd8zohRut8Q9FmDdj1jaEh1wqVj",
  "key11": "5PWPePKerhY37Kg4BfnYLFhYpA2k1wyanLaNArmZ1FVq3qbVSGMNYPfNKgptTJYecrTy5Yeox7uhrNKHoCmk8LH6",
  "key12": "64TFHKQGUMXBFgVD651b7YUPhLpGVPavzReRimqJtUNzvxCZZT9AKQMMmCLyWtbhLZDDiMVrWAgXxC4zpfEn8eZn",
  "key13": "3EGu3u4PxCjrd9AHXjZ3iVkM2F87A2pN5UuDWkRpNZurxBioLSkUTPQKm6BTcNe6manVx34VdrhReFDCvy64wkeF",
  "key14": "4oA4uTxGrov5MowGhgY5RPBhKCXer2dPTE7arYdLrXZxRudoG2b2vCb8mjWLg2Lc3CV9hz4M7zmiwiHqz9HDMt6B",
  "key15": "5LRzVxzJJDiRcU8hMoYyGSuvbRX8x2Z5BkLszfCZdrwbBxtfqAnFVjUJkexyPUgxJW2YYrwtQqX7YstkD4VUprtJ",
  "key16": "4aVGzETwCCJpBPY72ctsjAKePJXQg32Hea3KXgVnkhYdiUZFT1a9htRuDtARhhok9TvBmd6Sw3gQQpF1FqEyxEhP",
  "key17": "5aM9pzFSMRzbj31Qw5UqEwxseyAevFxvL3qMLC8MKFWmBYJXrfg4sYRE8wBS8HyGp4DNWNsqisjHCiriWc3KUFrX",
  "key18": "4saRMPmy5to4CguL5dyG9cX9UawPz9a4ykk7A8yyXoMudM6SGDFEEf3surELtKLZEEo4kcspVDDBV3dejNw61qUW",
  "key19": "xHDcfeAWejeuH3nyKHV6ndKp9CwsvAhCsYo1gGP4CCbBerNmMh1HuBWK5LK8WrxWvBUCr3RkV7KZsCAcYdkNwRv",
  "key20": "57eKXt3dqSgs12f3dTfRUuh6r1fTKGFv63PRd9UJj8j6h4LSsZrGJg8MB7iwWqimJYuuL2Yrzx94Vq5cTW91Gz2R",
  "key21": "3yA34qmeMVN4Ge5P431TX5FDBSV46uMbFHRYxFrpX8Mp1uiZ7ivNU6i6FKDTbsyVqTqLkjc1J2b4XDhoQYozKfA3",
  "key22": "jGE7D7btjEJPqy8oJpiadnrHxh4ZoD58GG7iQqePSGjH6hyaZQ6rYUmPKwwAL47YnwEgAsKfAYonC21hEd8nYCr",
  "key23": "5gtE21oXwoFqBo9ecVk5Ky5daQJNCbTbS5PdQ5NAwqkyAGNjhbsoA4ZEtksjDXetwKBmScCHQTGAUYvdrMbdEe64",
  "key24": "4YGf1WT7RH4dwy7eHuyVpC3x9zeq2HzDz8RJiWVQZ9fPSnnCVyajfW8VaRHGPgRWmGjW5NuSQc1N8TT5w5b4LjBN",
  "key25": "2nj4Z39V9N2KSL5HpC4DawQkMTKkckzNAyRAxAzS8HRp51JDF8rfkjPDgTb4E3DEiwPxYesqYp4wsxdCkZBbDQ1u"
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
