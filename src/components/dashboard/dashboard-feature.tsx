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
    "47rjLuaknwjZ7tRrKVKR4Z4NRW8GrhpmPXJYJgKvaShH86X8goEMGKrBcVgvBi4wALNrtvF8oug23USnVKeBDKBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MQm6bQexFGTEQrEMH36EwFhy5iXarqncyU4PSN764dUnn2GnosCHgAPZ76VoxphrG3636KVCHYKyx4Nq4iWNYG9",
  "key1": "2LWTnBoeHPKu3sAEn9WRiVg5CKpN1mqrYu3NWRaoMjnru2DbZwnsRdXpzkT1ZDA8frN3jEc5ULuuVZ8PUfTSXL69",
  "key2": "2327fruHyLQetrE4tFJ8JTbCKeWnYBE8BeThYhxx4eUarFgxQkQjpwtryMH8TvpX37GrHV677e5Hi2RNTrvNPBYN",
  "key3": "4SkE5tzyMmtfgQYjiGkHDAUp6N1DCt7fwLUJs6xFsVPvSHvb1KUm8myTua2JfeR9ZdSP2NCWhtPTwraXycakZhB",
  "key4": "3rWrEeDnmqvGxMUYrxy1fBz4nr8M1TV4hKq4sWx2YF111cWKdXyUxaLxEtAc1dUUvjS6g6i3ECAjNkjGQMRNEd3m",
  "key5": "UKanvs4Szruc7qjiaXfLu97iULcWaHTTsk66HjZfC7N9hyFeedV1gywKKW9GEmTNNNPzcrGRHuY3gxhjVkr4E4z",
  "key6": "5yZrHUeTbCGKQTf9e1CcbX2syHb2n1K2ooJ54CAz7FXYUq8Eq4hySwDBcjaRUJxZVAeoXtMTyGxw6KdnFf6yHANy",
  "key7": "5ztVL2bpQDLBBD9GyJz6ZfC4qwxPmGc3wEDpnhbALJui5FdYQagGDsNKnDCmQhR5qZPBWsuxgJhYcC8pFicA1JeL",
  "key8": "59Sp3Si2bTwywTZVjaEfTBsBFpRW8hz79bwcSakssZXogwaHZ11KJiiS3kxdCUEqNFKE8Rx8PpMPgHFQix2hKd7n",
  "key9": "5RGnAHUmToEnJVJ64tfEqXCrQWhLasbhH7UHXMjQvkggVsj1b9mPHxuPSgwLk9Uifq3DH2yLzujeoAr2FNuAHfC",
  "key10": "3hgb3KHZJ6CFC2mTjiXYKLfpUbMr2foTrjfCkwyfa57ahkHowzt3Jn4Q77VFuLVNUaft7PApZf16p3m82WnuHZDm",
  "key11": "2191aJQZNmQzcWpbVvpyU2BZrPr8YVcd682fjs3StH5b8pD51tUgreGLGpaaBn2crBSpMM4x6TpoFxfP4tc6YzqD",
  "key12": "4xFUFbbCnSAQxQ4u6ekWeJSXSqDm2PLf9GAVeRfGVUQhea2yT9KEF3bZjzHn5c5yEjC2bHmLJLt3Vdc31bvGW3eF",
  "key13": "3ecMfxBhmh6fmEuNDZvzUtahaXvC4eBP3iD4MbtibYz4wgR4DXifQmFF2rx9eguf6xbBHpppuJn29izcASDqrwqw",
  "key14": "3WuLsmV8aE9KfW6vTViKsjgBx9BN9QGkZ8SJKBLvyXxLXkvreTzZCzbaTBSFaQ8GiQhh6MRJkVkgPGT1AN6PG9RF",
  "key15": "3nNqhqNmBddPr3aGU2tvWTA3DvpfcbshApAvygrYnn3MqTsuBqX1xiGvaiapVh7sdeH2LnhqjzhJP22FkdcCccfv",
  "key16": "2uDz7vGkyu4YgnbFkSNYAymWojDYNfVjK1i5vsiXxo8PMGxKGMNcRGBB44XGpQwwSivec2Rdc9wByNgS6Fy6mFmU",
  "key17": "3VkpWrQ3SQDQ6xRr53pZHoJyhHnS7XhCQFeuvWhUKCjr2296BXbGnVQzsBKwjuGZRyuNG8uTpvTF3PChe5GfkAHR",
  "key18": "4t4eXJ15Q8qy3BVAe4vPqMm593Fk6zRtbdwddPeAJ3pay7p1UofXgueUA5pCMB4fvqErjym7C1HsbckMyHfH8BTN",
  "key19": "3quKb1MgAqN2XA2H3VGYPkZE9asGWoUFEGy1Z58Fx1hngvabFX6W2eFF5nuhAaw7toaSesJD5yAVwqkhLocjA6og",
  "key20": "3jHitWjAyy5F1DWJyWQR1jeswdPUFgbB6Askt9eYFg8EHtptrSMfmr8U2BR1zndV9aiPxUDKoUHiVMpt12NwnRbx",
  "key21": "5cMHyVTvyLRNr3iMh8BQzEkzhcJ7nqZdpw6Dv1RJt6jN21zv1rADp6d8qDGLtntv8FBnCTFxA1shJBqG849tABRN",
  "key22": "3wn9ihMTXGaFQkQXTmVwg8Ck8ah2BVXvSCbF4kuCZxfDkKpPcySHmgW4yRThu9qk1qXQYgxHjSAvi7r9dVFxr6Z1",
  "key23": "4mfJWCbNp47jXenmcSp1s9Qj9Er6w1Y3XqxxfnWPdKmoSHasxYMs5qcy7EoqT84BAtBR5iC85B5z5fuNtEKNG6ce",
  "key24": "57MkNACTjDnnSnBpjfQUjo3Fb6CUSudzFQtqEfMQLyr2DVixaSmDraCKi8E7qmqXUaJcSZfFpkJe891JWppTQ73A",
  "key25": "4BQReVkPGhqZ64oJLmuHQJzsnp6rvR72MKXTZchpQf4wgpbBUboXCf2xFmpna82Du5Dnpn2bZE4B2fPXzGdkrHyZ",
  "key26": "3CD7rnexY2Mnjam4FhhXxQrP2iDe4JKDyDe8apSk2rjgvbWkLma6wRpNAndZWvcTxhLJjtugcnqXPHZCVnQ7UtWE",
  "key27": "2saLMomYrXshAToZd1CpbNHQsds36my7qaih9bv1GjGgAkxYUX1fm3crzzemRSJYwyia9w91gkwAZLEU7puVcYMH",
  "key28": "5sBLRbxQ7kuXqaf914z3NjMYUvGuocpXrwws1LxeRuUHgN2v3cJiDWcCo4NAiksZ6zw4rvcDSDXcfRv1YEWzjP9S",
  "key29": "4FUofc2iXRWnNdHrPRQtgeuLWExEeJAm2ie3ALELBquzxnLU5xy99Fyr3PujNVfq3ECa7qdbdHMurVWgbNEayEL9",
  "key30": "67KMBWxrhhAzt7wD6ad1kPVxNt8VK3kmf7WWKu7giAa4MBKegqLqPR3mkVgSRUKpJvUgZXrKUdznvBerZYxBU8va",
  "key31": "4VxMibZRm16oo88grHyj8uL6N87hKFDMcb1HFZToHfJ5J5jZAhZn76wfoZjjbx7M62kKrMZYpuSJXdPKouomehSF",
  "key32": "5KVQRKpzkTtLQrCqt81kSfEbZ1jXd4fo6ShP6RyvxgE4Tz4BDX1oFhU4AbysXb5iz7KEbhUFB6dzhyfZrjQD4waQ",
  "key33": "3L8GTDww4YjMfmaWHmr99TLJbTYR7JLSD46P7Kfo838oNH3CymNWSTneR8wHZd8YF8am1oFoQ9gq2CCyKdUUXwEL",
  "key34": "4HXp5vu39sUjjF8ryVQsmyZcoy7ZguAeHE1uRFvdGUjbvGekhupuPBxu7GBASCpTzVeNzj3S4uasChykUUsyAFoA"
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
