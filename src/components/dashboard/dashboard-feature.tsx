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
    "6483rDg5mogK78vWb8p9amSg9w2dNy8fJQWPgWnuqT4Y75JjzgwRLAkED6ZZwxooZmkkyrfcZaeQYaNgypNBAQnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ejyGmK9VpL1STRQoH3CK4VcBkXYERoxbuA4qevW9Ud58k8zertuXjEGh5wPhvtQE8v8hHYuiDY17mEFMfnAvZ1t",
  "key1": "3rErSdrhwPxrDm9uNdzi5hus5VAZKmNaiRJ1dnXdXWpgDJN8Lfzzmq1mpS5q1vDjcEw1VMb93PHZs6Si3D7UWMnh",
  "key2": "3v2aBr7d4xmUPNcNiy4BVnuTa1q63P1P55VsPovFnDjLV69C35EdS8n8kNdZj6niTn5TUcWqWv6mFKoMNFAgjyzh",
  "key3": "4Y98UWFTcFSQjcAL6FXjY3mjrFhtWyRPaVn1zEdDQmJEwNQoAqtbCZ3SVkmcSnjpZY9Uiiy4nbEBeMDWRBV1bsVi",
  "key4": "me8TgjTL4hEMR4EFgS3JYAQ4iMea75MMqHeJea6jb27vZrXZRTrLkQEPCjkp7UCpJGZL8wJst7tCEMrwzdBpVuy",
  "key5": "3FdjdpSJsUkzVpoYXYp4EBwG2x8tZt6QZikzE8NSFopHc3QEVcQBDswRWHyajsy42FhrB85aLUPXovVonnziH5Em",
  "key6": "PMRJCF8Sbdr2Qk3YzvqkGfDdUjfQDy8pCMoZif2zXydEjtn7i2SWAtoo6xjmNvAKuir3KXARafzTucRHzjNwKJC",
  "key7": "635xL3TfTytoq1uQzhNggtK5VkWL6c9Guukvy9zqH3iK1v8kZ5FGcaJpoxmVyck47R3QQvpxKrMM1ZW8UErSLdan",
  "key8": "2xYaauhp5nZ3eZqVerWK8qx1Qg6CFA79g4EzM8uiTvWU2oiqB7RhjGiyiwgnyxsmDYb8PKn5WSFFcrAwwiUBf5Vt",
  "key9": "2DPG9Qm1aRQfg7vSaBgmCatxnchFR8Tfc8VsRPpBHy4tonpMFMLsjTRqLnSWJ4jm2tgYcWnUUgDdgG1ArEBcHs6k",
  "key10": "3WKh8jT5rWRk59XYxXq2ehqqD71wX9TKQEH8QE6P6dqd3f9minxNdrd2poZJZq8WsPct4TtHNFxLEL6fNPsYnZhd",
  "key11": "5qc6hJvKwUcbcffJbFcmRVmkGHWLBNncttNxC1JvUa5S8vTcuPYHi5DH1YSriKgzuPNXAT3ZqRkkhwQKT9ZutTGw",
  "key12": "4TMRQyj2K5gYT7Xv1fn23EZpWhrudGNwvrLrz7Xvij9s7x6fnYoXm5HM8GuqPJsiRZz8hX25MNacq3TdxypZQxnN",
  "key13": "27MPKERKsZCLLivUC7BpBWPHUCT7ybJdSsAG4hcKwT27f6bsqSMn2pY7eM3mTgtU4vKLrY3UkMispps2KSr8jVNr",
  "key14": "hdHrwCZnj6go7wFy7aZpvx9MJC8d1fMyseL8HGVQBHfPooET5ScKnpnvqykXFf9jiaiqjcDVvw22RJmFuCVaZBL",
  "key15": "HRujatfxdf8s5T6uZNCw1VzZ66t3AaEZB43XNoHTU9QXhHd2e8BUXNEKA5e5yYWpHj6jnErWQaAp4z8SrAZvvMY",
  "key16": "59tP8rmoeaJuyXf8duYtFEpizBRMAPqD2qqAww8jjhE4XHK3ivYVJNpxaEYomhUT1rfgZd7gwXxfc4prfV6A386m",
  "key17": "iMBPndpUQHcz8qpb36zNiF3VAfz3uYpgbxFz5R3kqMZQdGHtLPtqgJU5sfzz7b35PF7uHPxRJknbL8z2WxFbHN6",
  "key18": "2gmeqCvrvCb8EHRaGbzeywuuXWqWG34DaRDUaPE6UoqAMBNbvqyyXVRnSCNg6tCQyJ7xVatEnDsYHedJ7MQK94rt",
  "key19": "49jsBfth7PDUvSXTCiq9djvaqKqhLnnwKZqJFWJJMKnLubMUVwc7mVS4UuQBtNFWaMNmFekafHTTjJ4GGGmankrE",
  "key20": "2n53ZASa3FbEMDkAZpnivV36ojcrSMdUuj3DBTnMmxLcMdnvuALbLFf98LrzLuahmmqFctXQpb6ZnzBqATpPGhTg",
  "key21": "zr32L26fxHFUsRP6YThk6bkoJk4PhzwxvGhcBoTgf4ZJyknSeoatpyMwCwbCJhSxbYJWqxC4yFWa6NAFUPAzP7C",
  "key22": "4ENBkUBHaVzfXKDbQw6r4y5fHHiVkQhhJorvicrnD7M4PMJSQFYvbt22JvfTV9rEmBkUqB8hdiqywDyHms3aTMD5",
  "key23": "2V1MGvDQ5PwDgg8dUXtqCoJFsKEQwktwQ581mC8Z6RrUnnaWRKmg3MXHEH7Q1TBLeTNsiEeDJYU5RcAMBzVYx8rW",
  "key24": "3jzNf3Z7eYC1nRodV2Kt6ohcHHb5t9SwFVwRr8PheQikoLvtwaTZtVPtrA7xNkMzw6SRbAFDpAmvhtaE3eBWDGqe",
  "key25": "3rAPjgsj5PUcS9KRDnNAu9QMQUqrimcp75R8kRUJ5oXj4WfmNiFU1XviW7YFmbRE5uAP4pF1yTBvBPdzULoVifLJ",
  "key26": "5bAWHvAcxFX8scnLA95AQvGiBehTwzjVvZj4Zd3AFxFhKjD2FwopZLzxgGVBBxe5LnQ5QjCqs5gQoYKxxd5fKSQm",
  "key27": "5LQVyqSW4ZjPxGamN1qRtU1m326b3ex93djdpEvHKf9n5CRDJzo5xeeV4ga2pLwwL3zuiCcCkGBrWWcnD5R1SCEk",
  "key28": "4PrFy1Vyg4izdBeXxsA6JAYzmUUoRz9sGPicP12c87GVw2V12PXNGEbQQAPhhsStgPxALwZyfiB3bLg2FKFdAnrh",
  "key29": "LrsqTQVb6Moxq7376VAf8HNcd7TocEHQEMh2tui8zAjv6CC4xV2H1LMq3eVRtFSyBZeLsuH74i4W2fCvd9pqvLK",
  "key30": "uhsfoLVeTqEdErVzJRMiGkJX7ULVjo72veqnbS72LNDDCahuiLrzWgCWKfh5Uwe5jSNtRCterDrjZRTKK1EQXpy"
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
