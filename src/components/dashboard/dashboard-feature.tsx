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
    "2ELY5fiP7Yxn94d1K91hba38aTVZo8njf3miZHBQrZmav4SsdQZWa68jxgwq8CCmLvLrqB7qL61EGyJdf1mHKLAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjAjPtW2Md2qY9uYKv49ETRMb8kmGyxTRceqNDLiCwf45rzCHuLAcWyp5zuu3DWjsdmvthtxv8afay4zYuFXmSx",
  "key1": "4o2BgvmSFVt9k9D5WDUEf9TgySSPmGqVZCpe9SxSPHXTsfAR62F5wAQRBdd4QVGyMju68YkHCL6ZyKMtg86yZ4Rq",
  "key2": "31193qGNjYPMPwsXMGRGRwTy9XhUwomt865W6FLUEPBNPWwyhfUSpug89Xmu9E8N4iNVhMdsx4zWnieTh7MQzfiy",
  "key3": "5u5Cw2iSPYcT93DjnjkykXyiQQPZzHzF58pytLD6poTEtvbTy7YpqQ8iBeU6iBD22JqMVcy6sPkWrKutRHPSbqAc",
  "key4": "39kwQecdEcH5hnbK3vi8RAMi2NoDvmw3fmJW8AqducvCRVSdipFW3rjUAusRhBaKvJLKfa4vDvYMzEkJ6nbRVL4V",
  "key5": "4WxFaDupSr8jzoEsqFcMVmHByFC6a64bERmEZurG1HVhGBV98fLHrCfsunUbDsEG4H6CW9o5tXLbMjGFitf4E4rZ",
  "key6": "52mPXP78ecG8j8M4S9xCR7QLkysGuCsYHhyBhiK1tAvd54r788Y8ogopfid84VoML6m94FKRjjuKof1dfa8fjyVw",
  "key7": "36XSywqj8muVQoQr6YqUxd1zSJgGL5FosCGa8wosNE22TWhaQJCD4BY4PSaivJrXcjeQVZtU73ZXT9qB9WGp5CbL",
  "key8": "sSCQxDR22LiEakUjCaTQRXJRmyk4VTthfYoVrvH3WPtnAxBC3tFAe61hkT1BFdTH6awhDGaMW1BjurQBeU5BpuJ",
  "key9": "3rQp2tbuDGb6QtuPxju9DiNNHCptfwB4P8Y3L51LQkP7ERPqfhF9XrBx1J8xvKNBSi6HggSjYr96qa9CnykkJ9vy",
  "key10": "4Dt9mwuQxv4yJLVU524BQW4aPwzGoXL3BvWgcKDwNfGQdBXnmKDA6DkUpaSd5FWQ6PwkdN9Pdw6rT2XSUX2j5nJM",
  "key11": "4YuT3Am52u7gbJcK86yp8iMk3fX86NuWdK5NkfrY3bhaJS77VpJDQxhrVFdYH7psnRW9pDH2g6nFVfzAAHD9tbub",
  "key12": "3CLvHWsRQSBz8N4DBVS21ruxocrTs4NQ4trAXXXGG92ijiRtExNt1iSQqWme9sRWBsBhUXfiSsHUoeRs4VMjrsvJ",
  "key13": "4c1bX1S9HiTrigwCNJJ23VLcvDkKoD6u6JeVNWMmG5nP4JtZ68syb7DVPAw38HzbBU9UsZdhUFMhbACxg2ow1Bqa",
  "key14": "KRFrHMiX7Mu3G2yvePcwQyHdovZ34jeNzpsuMbNc3kLrAmrMzPri7gr5LLtjjdyo7gSKsBX4RwMBhiycdKzELKH",
  "key15": "3HHuFVwgnbQjJvhQCzZjbwnBU2N1RnCsp3ktSaQMBth2FFBxUPB3NP3GPP3USPvtVRbkqGtGRcdFCoBk6x6TGFuX",
  "key16": "5RCkFuruFKT1QhhDWT8HbSo2aZUDxEpshZ56V3Je2o45QbjEajbZBZ1RH33sQsbPha9oiqHjfFApXcB8Y3GsZ5AH",
  "key17": "3MjkDiTQG5Nyy4295gWz15UhWPHvvm7EBvK9jwuQWahWj77N9zLnMZ2yQyZ6ky1k4cFnuSJ6Q4ZcNeZTdtvbYBaw",
  "key18": "SkhGum9BxWgfcSL1xrjZEiJYFoja1Yg9vH8D9zqEWnVq1jdR9JYQRQQbMniimeNVgJpY1vpd6QKsQLCbtYTfvUM",
  "key19": "5a6ez9mTCEn2X8fDsRiU5bP18jv8tLtwcfUVdXPHd4kj4Ysedge8hmSUMvT3xrKdYHWEHHpmEkmQ4uUxdMBuBT2B",
  "key20": "3vEukcX9DA9TbrPmcLfsCgb4S3vBTzam4SzXo5RUUwJmrBa5box9UkdwvhSyzvKG5huvZzLY4cZNK4QQMwx48NFL",
  "key21": "29PnQodWSXreyWoTSFLeDvBZ3WY8WQpgRq8sVZwAh3FjyNLQ1dbnxNgxzqmxtrkcmTRvPdy1puPcZWjjhAZAibmM",
  "key22": "2hbk74U9g8CxcFTMFjk2kjRZdZ6wxDxBhjBJKbzEFNHqWhqMXgdbuNRWscwbbcuhFJLpRcUCUgejTAKKCdD61DxM",
  "key23": "2q9puGfGW7jP8FWxhZXhbQodiB2Lvftc9BubT6THX6NYzoGgmPkTKFiiSrB58UHhUyq4gP99xQDoW1HCtRxmTAFA",
  "key24": "5mUmiL37XdzxQfEeTpYKRiP1WgACE3GJ7aLnqXwtP4sLzBF1yJiuT1vpDpze2PbUTkDTeb61Mq6Q8wjiGuS8tmBm",
  "key25": "3BwQjBwZ5tv7tdBjNCVr3kYeFB8ELzhHPXw58RPntkvU1QdfMWEw43X4RVpaBGzPTCvNoeQ5ijonx4d1xiqDMM7K"
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
