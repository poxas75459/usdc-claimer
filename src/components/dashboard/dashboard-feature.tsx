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
    "3vYa5Y3Jkdugyr3Pk3LXy3RFD8j1KSWnRTmqgN5mE6QQnPCnyBeMLewumn77bCHeC29MwB6VnvXttAC7N5TfQ2Qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uktSo34FvVqQR39mXtwA3YyQpfTpnw9eedfQzW5E6VAjgThaug3dEhMP2KUBHBoD751NkboyrjvDaovLbH66pvM",
  "key1": "51of6LwVCzieWnJ2vPJqvsCxLi87Dfx4cGrEA9H2tFYnTMZbxKR5VERsf98eq1s5nu3qB45bLCED8RLenm62FVa9",
  "key2": "4E4rEumEphDs6GGmC8xwi1yJtoGBzJ19GYnyfoziyuyxUbhtagRhykpUVhk9bWhBKwwsxtxRmzGyQSz6VA15d9dY",
  "key3": "3HTxLt2cwCWqTprthmUm3VFTnh1EZszauSnA3AkkcTeJPta3Yuua3yjMmSJzGu84TFzayKmCnhPnLZ1su5ivNhKJ",
  "key4": "2oMavbX99zQ7Gr3xdFkYCNiPQvgod1YeMgACQ1QJK8tSbS2HRwkf9YD1XSCiZC45wFAGc7qDJr8uzpkwtvfrgomu",
  "key5": "aoWqj4LD7yJtgV6m3pvJmoh5k12N9AqqtCS7VZ6VTqyM7aYkPrHjKGsL5Q7VH7HK39TDhAiFgBodC64NKvEVgR6",
  "key6": "iGs7uiz18bAix1fTkjF2xPE2WQRtbc3HA19wEfQpmWMuLXTk1oJKuKhtmreGBSBF6GKa64WvPgAUVxh3V28wdk7",
  "key7": "4wDowpUxRyroG8ZJbznES2gnvjaWVCwSLbUMksyDDEmj2kPZTK4bwxsrz8ykMgY7r6W3a51vAJ7F923RMQrTcU73",
  "key8": "UWA4rDwVRMvTHQhVMHiL8SJ1u64tj6VmwTaYYYAF4sF79a4Ejvh1gDfiGt9varvkTGMPbXWTT9q1XWjkBLU8HEF",
  "key9": "sQ1Fux2BWw9eYyNv8XFpY9VKWufudFFPYCWLxqaZr9S1o5m5V17Yqp9GVYAfgdRA3vLJvC2dxi4LoBHAorUXpxT",
  "key10": "2aRPkMMXRP7eNLJeStckuyxu7CG1nT25nMWs4SgAmvuJfR75LZy7wrKcrkounSKNR7qP588dFQeuJ2joYB8p9NR6",
  "key11": "4togr1SNE8mAwyuP6zxtgWH4rBum7Fr5Si9kEgd351mXzP8Xiu7YhrywFFweSjay2SHDfpmmnLp9aemF5gd5pHch",
  "key12": "4UuVbKttR8kzn4Sp5ULY5gtWEnVdKwedj2D45EcfoUdRyxLY6TsmTRSLjAj6VDJdt5TLsPR2Rram4yt5cAFavFLQ",
  "key13": "4BLDgXspDx24acMUPFB7BmwpZq6b6WFR6mvPVpq94ciE7592EFt27KAwqmii5QVKLA5AedkegCvamoPEpeAVX7uj",
  "key14": "4Smc8UpX6nPR6eS52M3QZJXn8GoEcVtCHupSHub5ssxiphw8xcoojJ62BE6NUzESYzd7xRnt9xgeP9gHFaQpXAQK",
  "key15": "4cFVsXnPSi9NurwrjFgN8xFFkxhzMDtdr1f3s4MuoGTk7hy5PJx8sPVMxUHS7VweHQyrWEjgsnBM1SvohmDyogFU",
  "key16": "3JrDqA2rS5qXnvQdZt4P9EkyPLqgmxnCwk9eT4zTTNKpWLeEv3yyEHqp7MY7Fd6B9EHipoLQBxuuz3BzY1LKdhaS",
  "key17": "6UYBqV8vq5Dbbuv16qNR52RYSi1ssUoqC6A4T1mXtcNMWpFShgW2EjoR5mNrCWjCM3CUwAnev2ZgibqpcEee3gL",
  "key18": "kyZGVeivPdHenuXJNFV6FdtsmTWa2vGvDZ44z2wvUeHpSMxQhp5yM8GuoB4FjsE874TbjMF11MWWBCoTQBRoLJa",
  "key19": "3srPudj9pHKBjh7RZ7MXi11nEmkNBBvLgffTFo774D3TRdyK9HEEmDf91jW1ZSTxwKjmtm4xQJsakKcCVM6FA9rM",
  "key20": "YwGgnofHwNPwYTUQxKccndxnYKcHJuNqr13HoMvy2FdjVtaz9UwS5dGCXmWccPhkAzXZWqZzwpcAKW2QduvqpBf",
  "key21": "NfBiLWRhzdWBbXPPH5jxgHPmwQK5Kw4gMp2PswGbLcSYbZE22nxzRVdKJ6RiRjakxrsNnHEjCRPurid1pMx7qsk",
  "key22": "ymzXtwDNJ5imSEC89j4boVFJnRcLpfXpnwGz3XiQ8yo98dRhupogobHdBaSBuj5kFLcyNA5BhaETi4LbbzqbTxM",
  "key23": "g3CbtnVRzY9bEaTt6Mz1wXgnTH4Xz4iA89B4mMpYZpaCRusPYLdcNFBH9vsRNZEXjcNMK3iWddTUEX4HMFr99PV",
  "key24": "2tSLs5hdXPR81DSb3BRR7r4bEy2hFfH6hMwYW9ab7Bh5Jsm9nxnWB5g5CupCtR5JdYstVDMKhtJdvNg3aHZfnYcW",
  "key25": "2AFpLLWLJaZmNeMKPR6cMjdRrE9ND2eKF2Jyvpp5X4NjPMzZ5vvcMeGCYCEVnyca54J3aUtRsJU16fXeYr2buAcz"
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
