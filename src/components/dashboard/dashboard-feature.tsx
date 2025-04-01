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
    "3hNFveM9kkdbwo7KpLhowkequkHcBM5GMwgyXs6HCZHZQBP8GsCgS8GuKYAmiHCbyeYRmpPB4oPCBHq32rJsxuD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vJ7GsCxg1pXuVgHRkto9HQQt5VfBqfuctLEyYz8jg3S3waMx1MyKy3V67CYrsVrRwbiskj2kbcYFbetbMA1wTbx",
  "key1": "26hpXZygxWarq6yehFoZMLhkqfASFuUWSNwFptnLYHGVnud2UDBK5TwTTLTvQ5UXo55XTftWYmEy3Lt5k3AHQnCN",
  "key2": "SPdLHGSaU2ZVMtnU42iCyF1F74qkjz1WeQ9UgUWdVUH4GGTyE5KE4jNwVShbZfgNXJqhQ3pbJohfHXmAddiDGHJ",
  "key3": "54ZVE1eEtE1RtsfeXK6KYeSUXt1wcDWqXriqWBYX7wtDo7kUsXmtDUuhTg9uBKH6yBEB3zS2yp7VP4n5YPVgb5rx",
  "key4": "1uijAC5gaUAtuhi3WrqFoH6jq4ku8o59GUXv6XnywF3w5xN992ZoFqr98cvz6WrjiU1ymrtHoaiUinMpWnD3ERx",
  "key5": "4qV4AECKUUsVFYYmRGBS2bwHYXyva26Bnm215gwWDwP6PFqZbx7Z34W2NmJVTY8ABak5rJCWnrxe1z1RMN7rAxTy",
  "key6": "5KLT35LhMuQLu6WNbHRxiL8tsTBRFUgsR2A4pAkeZWyGRpbwwDoUDvpGgudnRyUusFZPAPZ35aYJeHMMSeHN6KMP",
  "key7": "2YYaVdNbGkQHLGFS3CZGAPAk5yo2LBv6d6mvJ6WiAws9VRSFGbpfsZD6Mrjyd3J4sYNz9CcVzjZfb1UfnB3VPCwY",
  "key8": "67pWYrkCkayoyPDKqcDQuzavNxC1zyCAA1KJqaeKA8vahvoL6Ab38Sn418yWxujCq9WpSUGKUjSe6MLvEEqWRgTy",
  "key9": "5E9R2pmmsAbJkuvGCxb92Hy1vbuEDjYWynvJPMDjkQk6UxM1BV2qrFFXapM6AJueJJWSRdGqN4G9uB9MfPb1rfet",
  "key10": "3G6meHj47jUJhwcgrxK7z8rmfeSDzwLJ5gb2rSWPqH17FfWcS3DRcP35iCFjkoEr6cagMGLtfDrtEhmMGfMsc7ER",
  "key11": "45QAyPmUKKNV5V8LBQtipZX71D1XimHL8rH7hoaUSJDYjojLhFzP4HMucoNKM3FxLFdTVR5KQF1vSY13NGVVFM7Y",
  "key12": "3VwBYFNV9ZLeKAP1S8B8hENXDeTmtvfpRK9qDkAhppH4bVTzqggXzk7akQdMz6PzGPyVe8ZcRJNqaEeJxvrjaULn",
  "key13": "4DuC6hZvNrydr5ntXxQwhRPjTgj2e6gMaqmF8gqzUZRHMfasg1PHaEZpJQWKUhd1FCXFj72rvHxaGLZcaHGT4Ton",
  "key14": "2kLhErog2GF5DW6fYWmDAZFZ6xNsnXJV63V67YVXaThK2AJHeEjm9XKBp9HLGTrC1FayjaQwFvF6SjEzV1RhdrPo",
  "key15": "3ogAUeur9ZhAgGzeNceeuDFu7yFhcHFQwemwvvizS1sUhBCsTFakHmdpiLucheb8GU7tW6hWS1qxZtSPhv9hxQ11",
  "key16": "659LoAH8HXET7rXpH1SwFCkFnqcsYfpaV3WxGYdNtYHHiwYj4v6S6Eg9pP4oDjWxK4YREtuR5U18mKTNZbtEY7s1",
  "key17": "4RVQXb1ySQavJqYvN4WnTncTcng1xZzB3gRt4VQLnBts15FaW9dHwn3viDnyYn9JVji66wZ3ncFC9BBpkqH3E5b3",
  "key18": "JkXevFPBTMv9aDJVu2dcsf5nhwrSy3upkUsN9r9XN7ttmQ6ehXDdj1DS8zgDzCCQGWmmTJkSGZjwuLqfmm9Fp1u",
  "key19": "4tMR5LS3xk8F7hNTeaSA4286LFjjr1FEi2WwRd8edPd1daN9QxVrQz9pVSqS36PD1fNekUEUcYfVdvpXfAUPdqvR",
  "key20": "2onWHxtNbH6xzJu2AXeBNxmMWJy23V7QcEQ7meTxNmK8BiyJLMxmdGHfy614MkJprxxHwieELn9vW3iCB96Kai7L",
  "key21": "5Xp3h2Ft8fPB8kCSCnDt7fGXHNVFn6U8vHw6iX69kqTJpBBNUFZHH7dRnM2uo6ctzU8FgotKt53V4eJLiik3GRRt",
  "key22": "5bCjSiGfXeSiD6ssWwXJ3cphQRAMo4BpciS5XnL6EKofiUnEwNy5tCH8QXTnk9Cf4sDSBoAuTUc4pkLWxkMH3qEr",
  "key23": "2wn7WvJpTNPCtQiP218m3KrvCoy3xjC4a3Xqn3bexMmvvHk5b2NnHoGYjhzrv3w8oFzWveCx8HP4DU3S6Uk9isTR",
  "key24": "dYP2R5FNAgHWFLpfK1g6hQj3AxKja7jg9ZYF1mxWDJP98k7c9UShQ75rCLpDdvt1226cGkiPcQ8J7GfbmzyH3sQ",
  "key25": "56o3gn2DTfNzxbgT843QPbZ3JYpit9SB8AYHTborJ8qBHkqBvQG1h6L6piWKzwGxcbqK1GfbfsHUNZEccAtcf4FN",
  "key26": "3tvedrcuM73qNXuoeumF49nQNsBQ7y2QyB7uR5kS4myxzzEMigVKRiKXM5GCBYcuDYxaRCpjXhu41RjCue4FNS6h",
  "key27": "2nXhjJkoCf38e8wXnxER9nzPmuZCcZAqUks9WhZXJgLtir5jHUTgJWGuKCKJvU2BFmyt4BRqh8HWYnqL6LqAHzQU",
  "key28": "2AsC3UsRipGfHpew77nHgQ6CRc8sH7U96j974qqo6vGdkW6toJBeBawkUeSv5XfDzcuDQmiiUjLeCCYnaXYuUZCQ",
  "key29": "3qrjWdAv2yoHx4bXCSzAcJQTeqZNiZmtMUUdV54mKkrF2QVecrY1iG7AdMkP9ToCqbaAZXd9w29Yn4vkpRCCrFV9",
  "key30": "3XX8EfpEopzYtFTJm21qhFTGDwXmJw9jiPgmdm5q53p4BZRLqnndDZKfHFwWaA4KiGVkgfNBMk6Z3qQRGk87yzRV",
  "key31": "59CLFVLfvFVb82HdjQaeB6U3vRTNxyVMbxJtAwZAgRxN92nDWyBUEStaoXJLx4ut6wRWbDW7Q5AZ9p66NVzd384e",
  "key32": "nzyoWcavkrs6WYAdCPBDDapDQQZQoBjQ8PpEuTiNhDMWKLsxf5PCH75mCTeSrArTpLk12XM1mLk4DTAJeP4kiVm",
  "key33": "2T3BA91YxjizYguKbQdQASbXRH9aUpCemrLAxsgp4goBHcLtKoCzxSekZVrLnbbx7YVGkXMZawohX7CPtLqT4Dag",
  "key34": "2TSPbvu8aBxkVbfwmchx6PjsWi5uCAXZE7ob9YfY3dcBsUjLL9YDYHJ1QDhzZCLgUL4gtwAK8A8xAqFfWFpD9VaR",
  "key35": "ywaDnuk5bTKe5kP9GmLMMoWVtj15QmrAW14DZJEgz8U4CCgTnDjaaQ4ooThoNpb6NRCGZPexLAykmuPvXwmizQT",
  "key36": "31y1SBCqYeNncx6m72N9oBqVTYBm87SPd6VofFU5DG5N1gHZejckTueJWQe3hk4bE69CttraEw4YyvSNyMMyMaxB",
  "key37": "4vrYSTDJMcQtH73EDS6Mg3RDnyGKsT33m27T3d3ySKE5aC92YxZXnNuuDvniEjQnQe36gXEDrVgKkArgeyJaWwPh",
  "key38": "5Wmh3jFaAg2HkzTXjevUJHznLwuifkyJcDQyxxAqW4q6DhorPMpzRc7xMmQJQrxDsL7UysiVUpt29h3xnuYk2M7j",
  "key39": "5YPQo4fngHCMNrhM71TXreiVPPA7vPgPUpfPKNsc9qGWAqAnqRRjbvXuVFMUvTL5vHXWZPmDAaQoUnxAymh8XRzP",
  "key40": "5BJYbw4h9cfceKhVBUzYRREm8stq1By7Q7fFHFkKePA3sh2nHjNM8d3Lmn3vNtjHaPqioq33PTDAhXCFFWnzD6xY",
  "key41": "4JCPRD7Gcj6WGiWyn9M2pSHDDo8tzevV8UAcydAYVRAt7DQ3rfSzzqBsvbLAjHkHCTqsPrChPjWkVdsFQw7YLdk2",
  "key42": "66MMvaduWuDGywE4nSQrHPJ4wat4HUyS4AF8GMtC1bZTvYexajxtwyJB1onNumj3d9yEsz6VqFondq5sLnw4Pieq",
  "key43": "4EgBm9fDz9XzASBdEEzcFYBNVNqTGj3todTqseQA9eFC2Ps7nYuV7YfY9pEoLsZj6w9kN4cuvnEMaQCvXMzw7Bxv",
  "key44": "2T7BAU46KiANhpWeRWudqEuz1xQ5LqA99Ny8FXCuxjh5CFki6VZTn5SVqT5BjWs3iBpVYALwgmHcj7wuc2XUkTWj",
  "key45": "3Y4T4phYL9vu3jVJSx1E1xpJp7FarhhQmvWu141TG34hEugMgYEXYNmfYX6aGP9GgWSijZGnCYjF8VGmzpKibhcv",
  "key46": "4ypRZvZYZtPxMcpqW5oYLJUbYDpHfd4fvTDwrZdP9SWZQ94wdkrVL7SfmaazyeLtJPDkeCgJQTsnWCcjD9pMWyoN"
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
