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
    "4y8RXftuCsibc9SPNHP3TZaAVeqjnnNS4MQkQeNxAyNzifuyPD1kGKUMS11GxAX2BuWQfBiGLKSPwT9UmPCPyF4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K2HZSqDWnuM3xQbyEPLQwFLWuao8pzwDxuvqddiF4gFtQW36yLZ7Qcoh7qQN2a4vWQaRhD1XvrwvoXNhRaUGKx9",
  "key1": "2js8VLo7choJqUH9smXXmA78BXVYgMc5F2darBJaWUMgzzhqnHViDBppZPKGZfAktE4pPmVfPUrFN6UzwVPwrRgK",
  "key2": "eSTAUsw9dnUzuZTEBEcg3XJQB5LDK8b1FpKJ3sX5LqH9ZcBF6TicYsywwJJtNMdqM69X2ScT26WNR2dnyDpjvBu",
  "key3": "5njCHLjf8RuBVG8vhEhFkbi3gxegDu2AgNtRq3B8HGhVE2DrCgHByC6gAgJyxLR8T6bPsVeUkNBnoVtJeormqPGP",
  "key4": "3Th8mKrDD8CsZ2FEUfQoJz1pLCvBQq7QHanqgKNtRidv6HoDtyZ55AAPXngymcfc2tApZHUz4quTdQ75MSK7qop1",
  "key5": "54UgxPwJUARWvNy9iGBm3nkmWSQQngi2GeN9hTBJdNA6yLktKfucgMwRzmit912Vcmt5UpUHDwZ2bfmZzE7QPxzs",
  "key6": "s8Kg4JoVoPbvQ6BXbHEfBoYbKx7pDz4rXit6g9RpNY9C37CugnitirazD2PDNvRrQ6ZprPPNBatYnZk945VAdb8",
  "key7": "nC8HZNurSLUbaoC7fuFs4ur4bEWa9BA4P9bYGXadQPtLpFJJXZQjkHYcR5Wcxretrw2wNx3peDzeh1FEVewZpfU",
  "key8": "3MZqz5qD46Rr1PhNVUYioMTzmARX2pK4M2oxPA8QrTz73NmW54tiWeBc8Gj91JBtMns3C21RpyQ2S7n6kdDuwJ2",
  "key9": "sVp7ycAU636wQQjXKpKfDNW3sU8APe7bUU7f7QKWZ1Rzuc4pCDVSjnPSMbmB2wQsHR1MWptbhdM1SvBHnDSSub2",
  "key10": "2WNQoLxZBx47Dv6orinDLycVMQRijiZHA4BUmKo7hGrXkQstrZp6BA2mFi3Xm2TnGeUZyR9qrkd6216e8TfR1f45",
  "key11": "4Y6hZB3GZC6xThqAmC9FTXPU5TPBhr97UkjLGPLm8uJ6kuaEbBuQ988j3bWNt87mjaNy8R6E3SYkFb662QG9sDDK",
  "key12": "358by5jMRSh9kzZuqkJYwMGSb9oG1HxUsWqKhnkDgHaVJSvWVUpv4yaCogpgZqKXN16VgRw8EkKBScyjVooKgxMH",
  "key13": "3LiwgywG17RwonjKNN9JXvjRRDpWPhu53N5qbuP1L4b9PHoSRrZKLLnuNo9t2o2ieW6et6ZuLqDTCZtaedKV7AWh",
  "key14": "2JFjy7AffQjCKzfRhh2BVFihN7Sumo39BAvgnsyvqMicNMgYFiwsnXeoGdrmoPGrTpGLY6bcHURFBrqpkiohnWNz",
  "key15": "3D7hpyapFo4PktA6w4b1p2YDdEV7BXDv1aEQRbf1AGACtmwbMvh5SUoRoeGDPom1VfRMj1R5bH86NJk5tNU6kGT",
  "key16": "3pgGJQVnwGCNyCBSCt2YttWE44XA1yHxMC5hXvxS8dTb4KHF6Tzabt3Czirmu9vJLg4vFCgeotDoPEuMxa7Aki9T",
  "key17": "4pw6wBPm3ApGf1njz7pm3LfZGf7HUSZvq7BzgpfnTyrywrCpj4vsPHM8HXrnvyv3yT8KZm89Nur12LNNPCpo65zZ",
  "key18": "2TrDQYfvq4Kxp7PwRazPJGk42dNkAzzVFBy4p9ZxRQeWMjYuPKfqmBP8aCcVegdQvqnadtYT34h1hFajyVqjjCMb",
  "key19": "Na26uPyjdCRRRPg2X45BwUhVWTNvoy7qfiJyCvztpqrM15N48C2p3StbhHBx1ku88GzQj3STWM5ugf5eXqFNC2A",
  "key20": "abeGB48dJSPXaVpKy4uRifp7R34RzbGXkCVKqbHZGrUnLQKiP77LjGfPo6fp7pLX7kQKUpQr758NjkA2uGsg1Wj",
  "key21": "4Yh79GMKG8GxCibprnUEu3avoVZQ6ikK7MucfTG8SpVBa5Hc32d9KfZv54Bo8FADzbmZcWuFAsHmPG47VmeoGXnC",
  "key22": "5gowhoYGSLNwVppE6Smx1vVkiR1cVoW2upfoJmDW9mkdzijHWbgQXtUbjHGWSf49m7mfpcN3D99ZVWnV7HEj6HiC",
  "key23": "2fvsWDjKX8H7EugojFxhRgoLjmyLQwcFpBjbS3yaF2D9zatLfgUhh8oHanYPPC34iBYNZhV2EabC5eW1VvZuf8sZ",
  "key24": "4qCdqPS4E1XY5sUV1TW1e9vCbHzSqDan6mVuVdmNTJBsSThDmx4dLcEezuQwxbpy3C3cHcpQ5haHDY9mojdo16Cx",
  "key25": "35ShCfBwiLc1TYsLCCMmcTUi8rCMeoipCi14M2zZqS2dDsB6SQccp4HQ43upcQNqchXdxg5FbcFzZ33XrKBFK3U2",
  "key26": "2AamXZM9hA6n6L3kfiSsfKVsFekB1iz3xNZSu3Vk8aFRcPC8Ypt62B3tVrZYr1sr3W3sTZyDzJi7HzYLHpDG841N"
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
