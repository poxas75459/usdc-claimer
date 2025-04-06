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
    "4AVQMMcMNPSKi3bvsTiBmDsJMSmkfMQ19Rg6impUe8XDyozNZQ9Mts5LozMX1XhfXTPrASRHLinRdq2T1PeuGY7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24S858Gf2cDHXjtqTrH9dtZcW4AiWUi6GDqupVf9KGddfAUNFFC6cThdKMf61NJREBCd7J68ix6mzrKFDyTVWKMj",
  "key1": "3izgJQzKey9mV6aTJD5FbGKqdG9Td1RGzgQjHvDuGxHzG5BBMibcEqFrDwG3ZaGTGyVYKjAUva85nMZutXiVKd5y",
  "key2": "4TNsEQoixVykHADkd8qz113a49ziibaQBG4RGS7YuRcAi9QBF7uKLEXDAz43CXQY6qkfqXAk1Z4Edz74ue8Jhmzm",
  "key3": "3oTxdMWph4TQ6UWAtLsfiGT2qqWjaWQZyiNtY1XRq2GsRyFSQv1Nq3Ky76GmKgZzEYJbwaeH8hyK6nXaGZNZE6QH",
  "key4": "3Z4dwSMGzCtu36ipK4HTfpJ4uS4NyRRmW7HuxT25X7RZdSkFTKnFPjxndHZHrWyRiQ4eq7Abg449RQbHy2SqdbwA",
  "key5": "2Me9R2EUtR9P2v2Ku8RtkGMfwVyvnmE5rtiS6QvhdQg2kL41heVKXw1Qio2kHwvfHsLjK1U97uPUntxPz4uhHBR3",
  "key6": "5orW8TJY4jNN8jqsWYfBrMHuCwjv46KV3qqWBiin46je3cWYuox9r5aFZyJx3LoKzfAknV7YUFK6tp9ZeFpSENmq",
  "key7": "2h4oAc2kG7UUTECRi9TrMnH4WeQcDz2Sx22SK14m8RUEjDuCCYLwKAHcgQZGnLGygcG1hJsHW7REo9efM4bvnVmc",
  "key8": "3PECznDoChruixhCtfPhac45ZMBeNFyw4eThPohezgs5C2HLRpKXLSkXwAn1C1fpVW1L5rVWTKN61caqoqQr6NaB",
  "key9": "8QdV4MSafY4PfRtaLaJ7SKd5WPcLS4Mxj3Yf6x45F6aEoCykVfwiHZUEeGQLRZZFPmgpgzhikkhd77iJgciCPW6",
  "key10": "2MBWmEHHdgue82CkGb6i9EbML3tsS8srPLwmYVmYCGa84Mm2oPvSo7WyCjWgzCsfCtjMWbsLKSEF7PvUcv2ZZ4gk",
  "key11": "5jsKkqCQRQ37xeTzSECdNDrodheVFsN21Pbky1D3wbRv85upYuffCNzVtVNozoZFHotwSXfwhjd3Z1bKb3jfysLG",
  "key12": "56qM8NLQcczxJfSWEJV6G58r7ig11hntCm3jAAYtH65AJ3Es6s9GuRWC4UqALSD7ZHQgCZn4XhWQtoSUTnnCdkKP",
  "key13": "4cHJB57298SeKDgiQfJiohzLjCVzWVQfRXkz9vzW5EH44agHQzZqLjJDhQDHSLfZUpBUXkEGV88HX14fiiP3g82u",
  "key14": "eP57wSVyGTgDviuvZDyp4Xg2dfPYRKsEhyrYEYhDS2qvL8vng7J3VryzQeXCMdDx4DqxeRkwxoTRpnWVuFG69na",
  "key15": "2aGfB8F8LwE6k9MPU6qgFxyBTXqCwepCMq7aTU4fwZtd7zJHRM3jCA4DxzgHPNe1Q7FY6DHCMkUZTnRc4h1xzv6s",
  "key16": "3GS97Rz2V449yf7fvaTgXpiJmDM63HqBgVV1n7Rtbt5gGnQ996Rbfou8U4Lt9jXQafDytw1BWAXd5P3rg6Rbi3ME",
  "key17": "2fQkd2wN4JDxfdQ28shLi56f4Ves6PR23dHNqkkZuAVq2jqtV81NP6wTtCc8TZ45eNfqRez5WJGXaWtshjRHkDyA",
  "key18": "5zi8HFsQAxxAv9nGxSBX3q5bsAjyoGPeACMLurbrZFZt28ANQi2dm8QL9s1koK4hYPiW4dyp7fbaFvsL12Dzqh6x",
  "key19": "5CmFNeq1RJ4W9vEhNAJiv7vK6srJaVAQHPWRxZHSoWBjA4h4MoBsK87qhVjgMMZmZXU2bRvb5AmhzDC4Ls9bvcBu",
  "key20": "52M4GbE982hs7vvMHGwrTMcA9E6exwBjNMwCqUucP1gfjymEjwMMLvjRoaKBW69484hpegaq5MWCJk3GF5YUmXNk",
  "key21": "2nUJQRxVXDwpGZ3T3tkVRVPxHaecrnaXnr71RMuvJkNrqVwK66ukGAg8Y4NyiiVShp6V6dwVGFzs2HmDm77i2rHW",
  "key22": "3EA6E3XLBYR1pxyhkYpb8PPETz9ZPiNcuGFMrEN8VuRPH2bTLk6asiSevSQkFeZ4SmcUAbMpcWMUdUoWJLHfVf15",
  "key23": "2Sv1gJk3LpZT1rG3Sk2BLXxwndq7HskPsDX1VZDYMzqieCaE3WD3WM2DDZqx8PXWPq9NssYxS33UcUUtcW5ya5Yf",
  "key24": "261d5d2aKtB4anPcU9RW7r1XMdPBagNaUgSHwTFZ4CXm1Bue6x7EfPUbcUbgLxYqTxAySiHWg1yQBojvD3gWnU2B",
  "key25": "5jziGSJHbehoEnUbUjp9U9bCToYc63F1QCwfix5fMHtCYK9QHqt7HKnSuexW3Ear7FJJbR844CJyfenWhiqduWpd",
  "key26": "2j2KmNYBDhXpMHo9SaWot4d1dBp8K9YqKLk1gMaxeoiFD9gzw1A6AbRgDp84WmYgsY5ver9PKAQoaUxqp2b4xaRZ",
  "key27": "2XMARCkpzDq7bQ6KcDcSo41wyYZmjeGTV7oMwGNjYsTBQdfyUpwPFxyFbR6mYczdHwruRq8WtWhTZK4rDvA7tdez",
  "key28": "4yeqw6XEgWcBjrfyPqntDHswFrX6hug4aEnt3fDsfUrE26Uq8Lb9iPAWQ9HDzMjAf1q4Tdz7sfb1GRm8QVXL31tM",
  "key29": "3gAEHKR6F3poXHMFzjFq9yJvKyLiKxy2VYMqVm4izVs9JHmFHnkbjsG66tF4i4t2ksaWDrBeaK4NSt1JARVKnciG",
  "key30": "5Cxipva3CBmNUFxVCEZVkejAaFABcL5p63HHg1J3gmBK3xLjRCYpWtVuizBgwL3WtiJooSdX6URUNSEkPZLj1brD",
  "key31": "5aBLvhxCm5cYfagfw54Bjk8vuun8SBBiHC4mdg3BLYou1WucoNsfK9kcUfaBQ5G2Zh7anSeYSuFGiTmbAeMEwQZR",
  "key32": "4vTTfcnny656axGGyseVNWo936yRQw7JSbtZ6VdvQQLwEB1ZViuTNAQ9g1zfZcYMYV4XmWc4yDmt3F3uiEdcDGmS",
  "key33": "57jmxm2hk4X3YB3NR7CpvE8AXFBtQsczK8fAPYFxp4ocb9BLJ1w4oXHVsTKuD1VhEVztvbyDHCNKDjnzprqM2k5S",
  "key34": "s5hVZVWDA9AbHZ83YocQsnxrKCbuHBWDqjwKnFxCHAsT6MLyAhgCQ34wwcEz5WqX7FgFqie3sn7mt8GXVk8sngk",
  "key35": "222s6gqoDVdLo8UHSkkUorhevcqMFnCWQzgFgbpAQRcDzx5gMDo9CQwwRxrdsFQUtu8V1Fyw64BmiYb754CcDQQg",
  "key36": "4KEJLkkBxxaRTYcrah8LQxj1UW67RxbK8tsFChemcvf64aUyRgBu3pzMXR7XNLuy4m1vK39WoE37n24wdV6QXuD3",
  "key37": "3jRS86U9mmVG5WQ6E8QQSmoNQbTZsHuMjueWjSZWsp7AGQJ9L6GMhViG8nWRY2NPwihopNoMJseVtPjKCWHLdjw6",
  "key38": "37ZhJrH5Z42UcoTJ7J2XUD7HqtxNoM1FWnEr48vx2h26Y6rRFb37d1s6docwnbd6FdH5HF9Dg9paTfDnanRYcaE3",
  "key39": "2GxXsNkWRdzYQ4vnstFfL4G33PFfBMpMUsjGiZpSXAZ6QjjLs7gcPUzffpex2aLAyyhMyAXyKK8HZAkzvetrss1H"
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
