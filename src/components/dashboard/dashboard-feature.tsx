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
    "2NhScYMzurBDgUVk6KTgbYgJhFmDV38V8s4zHPtrp4zfYRfjgTupmf8rdfdVFbpiYCF9FnxZfwDE1M6SgUk5s4uC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqmYKkeVPCPwJeb4ZPSeirsM4t2EyKn4r6VRrzViT546t7iPMnKaaqugnSGe7BD21jwiyiLbcDQNVdnaYdpbaCm",
  "key1": "2grFNNn6BZzfF4NcbXTWp5M9hGYiekuCc3ziMRNmenC977HNsrwM3zVmXW88Fzev617kmMEXAqBrkJdz263FR52s",
  "key2": "G4hmw5xq92FAdLfxkbxHcPfuTjy6Pw9rokWmgoJyBfWVQ8dJoU9jKaFf9iEjWmqmPhdNJBVDobMti2SiTDXHStE",
  "key3": "NPWuLJLYKcCWbt79bAE6qqsrgEi3mnfyc17dyGANNFVmsNb2tjCMuJeSTLnY3v2dTEo89JYo9RSUhoiMQVRHbtq",
  "key4": "HuT8nNnTgX95QTqt2Ac8RbQhJJuJryycedDHK8WmVxBREcHo9mXAjjuxepwVgf1sw5udQ31j1uKxiUzjeuwNdsp",
  "key5": "4rN3xU83oudz11tTx4HrKx3Kq5wdtB3848MizqwrJnKk3CBZrkSQYdBzY2vt2KV9j1TKmsU5SXXVr9hBXHYNbNMe",
  "key6": "57BhKyDh4NQ9dtXLAQkB92XZdrjWu21UjLxWZnvECzTFCn3AtUdDqMNmPD8A2XsMYqAqkEXFi3uYJZf4ke1j6U5M",
  "key7": "2NvB4KZaazCLWNAQbCftyAryVHcfJft9hwqaJq5YxctnK39wnj88JG8PXUJSMgQVRkVJuPhYC1iftRt33wfetqFy",
  "key8": "4TqFNiRe8hZwUiLjVyPnXgoF7rxQEEXJmP256HzadwLXF7gkxzZ9omCrdvMoVgWZKB5GnPkwJLYpsaoHLygSvAQw",
  "key9": "3aH845VkBemTMQZyJqv5SJZxTjYQAyvBacc53TeWwbhsXZ8gLmthhdtoScetNJXe81DL28L1g3Dmuy9fU3fSzEHE",
  "key10": "3voguj9ki9azxN3F56DKr33tU6Jypd7gMNnbrrHLyWhQp2eDGvRAx3ytLFXSdFY6WBLGdgAzJCmRaMmhcPmWyz4H",
  "key11": "L8mQhF6akzj3ymBQa6VSsvpLgz2m2PBXaPgVwr5doGMZrB29Z6NcaKRDrvDFd6kwXu8UrmUMEGmJyc3rEjHYPAd",
  "key12": "4wDD7we3pwNV4ofny7iLGt75NpYCwVkv1VTAqggNJSp8oqJojQpJ3QzbUegMLbRLR38pujTM3i5ZH3zHY44Cazqf",
  "key13": "4D6dmyoHJrmxV1K23kNuW7nWVeJyZr41rFFDZqwTFDmcBEZFXKf5x3oeLvbNNsZKKMCF62NHnzVRAobHEC7ZWyQy",
  "key14": "4ZTRFFuXzALBAvoUt443CDzE5jey7ubmqX1hy9tWNNNQ5QNCKUshoWfZxwvwtM3qYfdnCuYnJqwFZAW15qy9fBtu",
  "key15": "21gHNtFGyMjP8cRNxr96gVjMbgkhEK6o5TYYCY5WmyXkPCf63kowYqkFZMUb96wU9Fp8RLhtpQ1DieDJUXHRTAkD",
  "key16": "5sXnmbLDR7fVhV3sibutJbkgL8QsCicP7pPUHDFb5SWrFaM2afP7Acz9U8Wb3czgDKc92EyySVGBzav4MnxrhzAn",
  "key17": "2v8WBxqHvSV1ERK2b5GVdvnsrSwQC8ptiiNQq5A7ryo5QXe3Kfcr8MB4mBXhG4QpuFrU2WCXZMaETNUsDDWYVyp6",
  "key18": "2pSnwQPQWp4vRTHqxy9uts6exY2Lq3KRRMGVppuS2VW5gvtUxRUZQZefbYzYEPh9qafyuU6PVF4FFfeGVWYuAWX",
  "key19": "2prZM4ifL7kSKGRR51iQW33NkCCwUZq6KFia2PNHeRLR3UH3PEasUF7D1V3zYZmKTm4XvSuYVxsxfm5mqh8xajiy",
  "key20": "3XrPRobL13wq5UDqH9FdpPr33aTmh18Jw9tWCTAUKbQDLFH473BAVVJvt1xd5wwQtdArV4Ev9QDPNeUmvwCcj7JH",
  "key21": "5GKGSNi8wcuuKhUJugVgSP4B3BWdVEkAb1ZHTB2VP8a42A19AjHDfy73e9ej4qretEZTutN9EMBAtqqggzAm5u3a",
  "key22": "4c9fUrjwPp3oMuZyiafYbufu2CsTCsTHZAhJofHg14F5KiaDKgcXsdxUK4zQNBiVNYx7bQ5nVw9RuKYdC7Xf47Rd",
  "key23": "5cbSyhRRqYAqPqozhbTohi4gvmwg5d8Kc15xZqDMY3FC4ujCwqUFTkAJ6k1oA15MNyPZQi748qaWrr6spCfxA9qj",
  "key24": "3qVG9jsQVKR3DSCeLYUqB8akXDXc8FHz6dMTf4daGhkwXf5otbawKu5UeNVQgf1i2pvyHmVL2RwHuX66uGTN97Ud",
  "key25": "47bMo5GHmqe3Hb1r3bMPWDYPj2sz5RMdyaSedrWSAnFzEKGMeQ3XtsrDfk6D8n43yErPW6MgadujfXwHYemTVieU",
  "key26": "4jpvrJKDfn4eR11iG7tSGjyCt4qwGyXVh1LQ5V6YwJPVpnRP11Qu7RpgaM5YTEfxHkYVpsL9vXUHEpPdtBiDu1jY",
  "key27": "4zDt6jPVseYKZGaRmMkbrmj7p4hSeZkZ7VLwxpWzm13A5pyVXcNDq98cGRZohDVtnTfB5w1HHgUdmf44RRVeKhaN",
  "key28": "552cPwHBmaiVt662uyMUPfLCczdztvM2YuVSnhNPJszJ8f6BWwfXXebUY3P4v3xrWKAyjWEb3AoQhux6ZdPpf5AG",
  "key29": "4uUeq9C1d1jt95HRrJcRJziYBatQE1q4Y84KQrevZUbTTCoinr2pPhDE8v9koEAFzpWB87sfkRW7hdxfgXUSHUVr",
  "key30": "2WgcJNqcCpJKYuaQ7gqpqXhHNsDi6VMEdQHnan8XFep82aA4SeDt7cHrvF5Sk8pdefqgD3ZWmUwq9x6C3BMSVCCH",
  "key31": "2jkfTq38Rxo96fhYzfh61V1KtCNWtk5dFKStF4mW1YGfCvhXiTzFcMa9xzrjJg4Z7eFBSyNJR2gn9bhHBsXzShAS",
  "key32": "4QQ67R8nXipGGHeZ7xmeupF6n689jFBrSrg2oQhtTBeGNqnawj824ErWWh47QfSrvmzNNQmAMShuyxs8xREYU4gY",
  "key33": "5S3WrDUJutXNtz2YRhVq6mmNnm2cdkGC8iF5hP81CarELL1XBUfQSynYEXYkzXUUJ7X89NKs9hPzFuwjcaX34kzm",
  "key34": "gTnoVeG7Kcz1mmezgcZB9XYDRnBj8bmT9NqWu1B7eqKMuVJdhubLoX5q87YhAHUqfziM1tVNf5JWE7ggy7Kti7n",
  "key35": "5gs116x7PLi1LHA5Kxsod97Tcich3qjtPTpLJjh4qc6Nz25BBRnH87tNct1i1kYMdqE3F1EK4aMXAPohSmpU3khf",
  "key36": "3sswDWC68gYxNZXqC2mtGMQcD2WPewdttepyu8vdd43VKchcFDMEvDkcKVjw9PXbBLCLVZKATPKeio8Nk2AsUNdw",
  "key37": "3PbWmF3fqB7LGTQuzncBcpzmakXdUpAqGorM8FWYJ7howmDoyCwGwPSX23akiowE651duLjZVqqZ3SDeRnHcd626",
  "key38": "3R9aUzDptn8zq1Rd8XvpKzJ7CDCR6FVs2EdEUEduJD8PMw7wvvqRHkLFnnxkWzHdBQwDwsd9PHHCm5tPQqGh2WEs",
  "key39": "5iHcWBseFZboS2J3wkfU6hE5y1qRPyLtEqmdjttuWFm5PjKyqqtvNEyL3UxkQztv9nuCKiRSRzmE66XTXruciB1n",
  "key40": "5bqWtAhPFxab2vCyo9Hcz2xkdfWcA9fMfb1rrY2w6xwZLBJMYoPXGSkkKkfGyc4cvgSd8rvNt5w6QZxgGexX61y2",
  "key41": "3RJDPmPvJsfCVrFn9BRqDVfgBk1RnvWP9iry6gn7HeaYXCEB3oubTKeBNKavX4yXr4BGA8eMskZk1jVC5wWZ9Dez",
  "key42": "2g7Co7Cv1yu7zoj2ubypgxiUjzWd1e7cG5QY4EGvr6Ab2d6SAH5CGfJdgM9HxNNfVSqepf6Qa7MJgSdNw9EkA5bw",
  "key43": "5q7Cdz6f3tJT3gWnsyd219DkesZghraJp3CwHQuaskqeHVj14maqwtbdrqn2XU8Pc7Y7AHpEbCqugDxgzBadCeEd",
  "key44": "4g8zu5BTqUd7jMSk6RydVurwTTPi4zzabwWkKTJjor8uKD11oQnPTdXkEpbPadAmYeYeZJ6eD6qrH8wM3QBw7C7v",
  "key45": "2FAaXRaqAgXibrad4wsASpDfH6EoFYQjVoB1L6NhdH8QcbXztAhd1GAxksucQnY2ovkpwxm7ijfnjJo4K3Gf5iM4"
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
