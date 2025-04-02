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
    "2GHyAdHAtyvqP46Ak5bnkJrF6BZpKeniAPoZkYvKxVeNWWtZ6BDNG7QR9zntyGC545t7H8SuXPoa66fphSKFmVbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s4Y1UTsh3PBAJK2kUQfrVj7dEYv1hMeCge3dq4Gohja9coro3ithcWczZpfjdq1wzu6f5r1PWYdrwAmKieoidjo",
  "key1": "2fgCCJi4n4AmzJwRiPeNZhxkadRfWppjqKN2hGFM9v1JKaF8yddduiYwphz39988fGSGsQhLjgqzC53i95niuxDZ",
  "key2": "4zxgdHZbYB9ucpdpnnzDnEtaedbqtoxn6RFh8FM1hE6FcqyiRofSkJAagF3jrcKpe3vcD1biSWnUMyaGx7Q9U3UN",
  "key3": "59qpJycdFVUth4EXjsY4JiGt5i3JxBpLyJYoCm9XiXJ8gwYfmGBuL9WaV2ZF5RuAkUjLRkGJjz54UJX6FPHNprZc",
  "key4": "2ZF7g2uPWk237YaQvvk8wsyxqwZvVQjtPZc3TAkmUutZKLTAgw2vdF9bgAogYrmtcLvrNN3Zm6KtkZ18PKkdTj6M",
  "key5": "3B5ceFpwcxKL6ApLFP2cZx1HSvf3BrVbK4nrjCBa4DzLYwzd8rHA1rZBioFfX2QYuHNjH5UjLW7Ya8eP6Yvxo2sA",
  "key6": "3UvYmwgUDRW1FiwPgsmwbEodB2DfSyFtYVAAX9HF4JWFJYXcekJiHBhzBosSUhEz52oPdaMgqrXW8Hcgy6FAvTFc",
  "key7": "5ZYdDhi9mZb2k3T1FSZdAXjkHUadvy9k3h2Lxv5ptPMCo1875RUrs13YggidVH88kxiQesFXziZNpnBhvqPFZArf",
  "key8": "a4b1L7sJY7YMsVqC3YRMB1UdcdfGYRM7T4GzEaeFMhCz6KfG7GYHfNHKAa7DnHgGoc7aYWDaGDsYzTN2uYD8Gai",
  "key9": "4JbQwg1u98iUHhF2jAx34uVUHETbMxMwyKTj9WoeG5PfTN44Zx5gLortRVVU52nYvGuKhKkccswWjjBQms9roGi5",
  "key10": "2f287NEMVshifbxjhCdkS8UznTfRsJ6ygfL3imfiJmDX1rHg2Nyk2ig1AuaxyABM555i7psGNUgKDvw2RkAUWojD",
  "key11": "3uheybXNtPZLwRwSHxBCHSx9A9ULRbyWRhCnYB9dxC4LBLcSmb1n1uEjZYAgA4jYmJYN3dM7jtmrfnU5R4EuA8jE",
  "key12": "3M59ZD4Bag256ra9m9UUPADgnhuBDvWfQgQSW5xMDDPq2c8EVQRpi6ENkrcE9h9tNFBfhnjFzHY3xgFVZcTHkMuW",
  "key13": "55VmKR4rxeSsqk81i3RTre12GZdkXrFD2KaBYwSqow84bxZNm7BdmKJzyuGXtmS3ybY2C2nN8uYPWBmoAV75gxtY",
  "key14": "4r8wnCGWP3XFrKMXubzmKyvHbWjzX8Je6mcNbyYab8pHvRTUbTPmFdWh81NyXdbkdVtKrw7gv85G5Hf2VpjWzC8s",
  "key15": "4TWhPCwHpNnYUL2tXtqQY8EP8oEGus7CMcYDSsCWWsusJk8qLF4YcMrzt7XnErx1JeFHpRBgVvNNDy3NFDALo68a",
  "key16": "5gvRRfyzgPYWH9ydioPveHPChXsNVWbPZUgPjbwVzsMEyCwuABxHni3x57Qo852RvAtw4nA5GNTNb4ptaN72Q6Ux",
  "key17": "3SLqRAHnuweiWt7a9B89xznwrjCYxAoyKXYxMYAVL2hEEJ6QhkNYoSos4ucM3fhPtN8zwzCfDNTUZJYc5yWQgb2h",
  "key18": "2ijEPFtPi7poKBRb5e33VDazTMLteH7QpJVWnQ4RLTwc4uGMVH6YtH1ZdA9Fcr4JGYpM8C2DmjYwdth8b5oAG3GH",
  "key19": "5ZwCqr8u57H4mNbYPSE8V7tvuV7QMRH6RySMffCZZGtk6wDUqQQzvg2e2D5GgUA84ZnuqxwTfBJ636PxdmPVhw2g",
  "key20": "2NvzQmJDo9mDmxhzcxwb5B3use29WNe96XbEDULGiKywjgjJLiaSdTtfs4M5LeFhXNp4E2urVUmEKJXFc7mzsNsk",
  "key21": "2hGdB6rgbUGZWde49dWihU92QpcARssFzpCH2dTJS3hhCzoM49B4VgmfNFexFDKP9PXEtUZ5X51oANyPt54dyTA6",
  "key22": "4tUfP37WxRBvKgHaVKeHHGA6UUt5HvvA3R4SZWZn9hNq5qzFA3REmTPKPgbmcDqQm1LZQNwUiCkDa2XkoGSmjY7X",
  "key23": "3qLxuWfNuiHz4AQecFkNFHjvtfZBNh1QdKUrkxwAcyjhjAqU7FyU4gDyrVJi8vLZWSkZhVeZFkKkHTFPX6GUcgPX",
  "key24": "2RQmBAr478V1tVv46BCviRJnjnWdVd789dUmY51GfVXjWMi7hBxvcK5x2C69uWGrViBh9MS5zXSvchUB38yVp6ZS",
  "key25": "2CYcvA5a1oGXR1RWqsDvVPgiKUegSnZqGaJuS6jTgPVaibeTEFiw3PWoEYLeSor2CHYEq8qxTVZbnjcbCamwmzkB",
  "key26": "tJLrGmQuVjmR28fZvdEhdZWDiUZyGJeDS7BemNwmQEQ63bvzEySSQi5dqCDJUkveH9NsRp5WE5nadmHaBb7PafT",
  "key27": "35U19vxNcmeBS46JNQotkyye6MXeFC8WbqJwG3BB7mE2MyLqD5Lu23RrXvfSjvLEepxWpG6GDbj8AGHjG8EzKP2F",
  "key28": "4qVFsj4bzA9kyhKXhQYP9jUVwr8oDMZBUN9sLs8n91kxvb4AknFfYyTcfVERXeqDVPsAQsQgpRb2ULMDqRgbPzLv",
  "key29": "JZXbS2qLYY5gZsmVZsqKYD4X1mZTChUKTTRwewa2fVQGyqcFVpPpjBb5UH8aJJQawauD8jHDB1LwY4jiWxdPSqt",
  "key30": "5K7dp8YLLuusGLCKRDS4q2pw6zgH8s3zSNPGDLVMNeCKgGM7Tav9xWF22zvgT5nLU4SwankLDREr5URjtnGPZWoB",
  "key31": "3WFUY4d8MxEPuc2Wss8gszZUX6vL1ZYTFYhfnpU5HjTMNdDiwwFeWT5E9d6szaYRLeBNi1WTyf5KgNpwbtFsWg5K",
  "key32": "32iWQNe2BBz1tcMD6NTaQcZfbYHjPCEt3dibzqBzmj8cRW2QCvN1tmMaoagWzUiPVNMZU92sxrgbCYL8HnbxqcPf",
  "key33": "4wErVw3dkbmDpx6cfWwphFXb9TZvvPeZvDDaXvvSFSZyWKWqYDeNQ9ubg6FJLPgtSA46yy2rqTzz9ssAverSGqXP",
  "key34": "4Wz7wDsWajq8h99yESqMARKQNpcHAi397yzWirPLvxGMNQSpWV62j29nHnpXVJdAVZDK1RtCtT6CtCF9YMpD5Wcw",
  "key35": "2KCsLuPJKgZzXUd9EzhHhWvSJvWz5HDaEQNwXgFbEsaj8GkH9ae2RGu79GmyoPeTzp5xZ5J5oZPZ8DzAaaq5DH9C",
  "key36": "rXq9ZhAqoLntj3gDQfmFLRVEbg34JG73wckvoqxLYCUZyLg7434MDoP5dqmELbbduQVTaNAEwXKXumJpwmHCF76",
  "key37": "3jvg3BeVedtGZwbJfvh8qzfP7tLNVNiRgWazkXmLLfzDLLtt4BGpwZeTVvu6vb4GmoCZD3ksNugb3evZpMQEiT5G",
  "key38": "5XqotyVna4CSShB8kpjUnc11ZRzEPp1xVMFpgFufhsGMYQRu7QAh2RTnFSWQAvE4nPpYbb4Fpk2azz84zxeD1AQb"
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
