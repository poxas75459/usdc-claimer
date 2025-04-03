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
    "5h5Y4BoXgFvYp9jCcwWJoXUf8G4TEDd9BrEwvLwVqmrP9sT6bSF9n7uEa9aF3bJLHy6oCdrSvwhcpovXeW9VudBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8UkF6Tsirt8Yc5bK4cExMn9j7iA5bvEkchrEQm8jMeUAqEgEn8dXE6S99XvAi33hTxYq8FdUqubVxyo1jJB5yHd",
  "key1": "WCorXrrhthreuxRHAFjTBkrH4KmVws1FJNxXrwpv4mUF2iYgr1qhBPTuaJVErjAbAuwEn3LrXTooB1sQ6L4y6ZA",
  "key2": "86HrykWxbzZ3huJFAXfd9NvCyG1zzGmSCXHvcc2xrmvMZ1SVu6FSkUwY31MS2aPMREAfnPu2mhNKum1gsauZZbe",
  "key3": "2MohnwU5CxhEDWXs9t4AJPCD8GdujCLaGxKevaRxJJmFF38TEG9bjjqmAue2tFQSNFp6P6jiDokpm2cDbgwSYkcR",
  "key4": "5gnjBdvu9QTWKwbjuNS1AM7eXFCuxRTVsGu5zxUYACRe2xLegu22Ktg6mhTMMva4GgaVPxAocRLkJwYoQyMxq8hp",
  "key5": "3ufuurJfmxK5V54uMudZafnkFjjqBcyK2CxUH8KEHksWocxLaNdJjKJGhQmdNMQxU4yEWhZQLcmVXrrdko7FH4ku",
  "key6": "34hp1GhGtowvB1Nfs3EHW9cBuj7F6EGdehAJhhWkCTgMZpC6rBRunZyYzLK9JohF3pCkqB66mVkf5v4SNDL6bPmh",
  "key7": "5z91RDMsEKJnV4LLQw9HYd4XnXEspagev4sjkAiwtuqscGSpdEVa3xFeimSvvQecZuhqy3AJc8vc9bUw1bU7dB1v",
  "key8": "4S5KsKqL3q655aSzcmnSbpPrpCssgpWnwfKsiiCEzM7KWDbBybUhHTYgpBJuZ1PDAVc8MVGrY6nkjjSBCk9MD5WP",
  "key9": "3J2SJ5pKZJAhb2TUR37kzh5C3PiFnMC6pyFeJ3y8UC1TEbWVHFZLc9DgEXC3c9R71VMx8ZsQLhgT4igce9krvKsy",
  "key10": "4hzhG6nkj3JeATsC6YbKMFejczkWTVBaJKFso24Csfe8fnB2z6w3WhaLzGXZwmCRMMZ1wHegvpsnGwPnnNLBmsq2",
  "key11": "3sFE6EDN2YuHJTq9LhcSN6SYMUkRxWkBq26vdFGy4dfKF6jCWWgqrv4pL6Xr7uutvd5QEbEc7RiSEYsJcpzNYB68",
  "key12": "4shBehoGe7AonEMmtHmgwGqq4YeSZE47LN6tCqWCqPodgJ9mqM1pwAeU3HbbLZ3yHBk2FdhMHxRviuMRH9JmoU8Q",
  "key13": "3HjHth6HpFrtgifHZPWW3LNYj5cGYEPth1RJfu4dM52TMwSo1MUtwsuh16FRhS4WBEvfiSET6hq8icbEoku891jq",
  "key14": "5kFz1fU7Hwd8Mkv4djKmv3jZF6SXEZ2aKKYidsCycbmdUCkqEnHbGNCJNoZH6g5izwrJVsHBHSzAmRzdCFmsKUx7",
  "key15": "9LW6acTpA9pFigBgBB1tFSxXK7MggXXDJCxPdRxHynRkSvFCQPH81fJYisrhMvR8eCpqReP7S3AxTmhvnNnd5tr",
  "key16": "4eJSWThFCRSZ6mCMP4qEbHizNc9RDpVzGwWCz366gQdAdpvnDp8p7quyhEqxVbBEZ3aYam3ZzvoEuA3vDghp2FdU",
  "key17": "tZt1ka8nxZuPuiGvCZB7BZfctXy43ydyStUYCVhawxdtcSg3C7FbU8os3dMAgT6zv2GXwh1qQqfpDJATgSZzqSy",
  "key18": "2M4FWkjgbqGfvJAa1Ewxe5jQXCD3Ky3jdhTt8xr1H62PjhY8aeJJ9uTtDpgB3UfvTSXQpxi38yk7wSjtWkdHKvVb",
  "key19": "3a5KNuQ3nRLniKtS5AULAvb54qPXYaQQZeAeRCdnJu8BiJ8CCKyxiwqzuHgpsZ53fHNwzt5aGG5jSxqHD2Kterjm",
  "key20": "3buvGwuDFhBQ4Qvu2XGGPa8HCrZkZJ4M9pZJnugEW4SRMDnn67tebMEQ4T97NkjuBYNQ9xBThdxZKThp6qCUHeny",
  "key21": "3MkkraDwrFKQrk7uf7Su3NfxHZLVYLTxT9sqfm3aDaNV8EK2Tx8uFJRB91pB7EXGkfFc4ZJA95zTthJNAY5AQs5t",
  "key22": "Eh6vHoJi8ngEe2YzsBRFgb3AwRczesznJriWPGaA38vxEs4D8PdqoAcZvxTSFFRQLJf22XxHSnXTLYMkn6pCbr3",
  "key23": "3B5zWvkooFtMiwoNdKcVA1azd9xJvob2W4as8qrZQD97D6xpHoAVfEimDG5aDhemuHiov4SyipieLuGGvJrngaoc",
  "key24": "yLgXc8XTytyqnfRtfBr4qz9UeGyAvUFbNCRUPAeRg6L1sVrVQvnkGSxxiPtHjoooiEszs8p4oVeRtGiRYuTAhp7",
  "key25": "51jGWAJJfgNm5L2cCvA1KLUEVdehQ9e32QyJsvtSRnCX91Ge5R36Jjvm3t2trfPg7PSssqC14w5DVqft8Cmohovr",
  "key26": "4hbaYHSBzG2WwTBs5WSARaCL6uBBPmC2KZr27qs251bJRKm2yEzMcR9Pn39Qn3ZXxnB96oGjwvtZ21UjL46sUtxk",
  "key27": "3q66ZFjM5B1Pd4vPnZ6qAoWLq71VbcmhnZ58PJLNGVFDsADcS8wRtYgeZKioDfU5Y2xDie5rrkYjxfDB2xaTa8oV",
  "key28": "QinSnVrQoKn8nPbSDNCBS7TSup95HpWRnuHssiNBqYJBZhE9K48ram7pPBLSq7TDudPG3qN2ngH5kmGcjhyd2tf",
  "key29": "3zwhHfqWSCK4yUA6BcLpA8uFKraTboJtLxNzaQGm7Rw4pvjZg5aD2KiSoeb8Z2ZuAUYWbXh9AHk5UALmshgDiuEM",
  "key30": "jS9cTP5DWHtCVnQyrLDANVDwEgXcQLKMrepG7KM1gZvPxnm8TzS6N9ArH4pu7G7RxgmjzMoN6VnSYWEbGiPudcw",
  "key31": "2fCaJ8tsSX3qmCwsG7wfXnywCXKrjioFHTauCZBCvoXvUjtP6S5zSikZnF52zMkpSJEryZY27spSrTLvcEfCoBFA"
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
