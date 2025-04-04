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
    "5nP5CSbgs8ctEeGuYSGRkTMZ4pa9isMQp8g7Vn2cXgYUqdWgo7dgZWyuYNngQnBCFzfmtGbquDfP8ycxWFVmoqNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N9cyAAXQ12aqJ2bWuueGMMV3d9cSkEf3NXhh5QNbMX2JFYRz56fRyxR7Z7sC3LXCHToZC4ksUyCVNZiFBnyktUp",
  "key1": "2Nvtvv18zxTZibTVbp9ffsbVDyxiMht1TvC1EMP2sc7yhgWAGA3CZdafPuAU1EV4WAt1SskuNwWDjU6wi8ULV1GK",
  "key2": "qKWrePtBHLCRKGd8XnWiA989SvNtgfRtL4fxw4Ur8ghYSoCpAqYkNFj1F5PdxCE6om9QPPWt4dUtf5vjM9QRGYX",
  "key3": "4akFhkMze3H6khr6URVtQ2XWuDNEi4Ps1n8nbcD1ps7QaMTdtmpoWn936KFJzx9iKTxJRC3B6H5CmJQSNHTJ8ePf",
  "key4": "3DoWpS6RZQeepPkftGo8YsMtmXu1XqzSHEvFe8RYfQwfqcoaY2DxRiUWkG76ic3QPLRpJMLqBA7xaN4iGUf3yQ29",
  "key5": "58U3NNyfyKGw6ZvnnLtLCzPPq984cgUq1LoMKujZtT8YJvMigUPwysKMXLB9P9U5ELoZ7G5ZfH6BccvHb3dmE6vy",
  "key6": "AGJ2i5ohGVzUqwHPWirauhRh6hTPx9Q8YnUqEHCdR53RocLMGLT9v7oRvcCwUqW3rb4NzMQFR4zmVPP8rARo6Lp",
  "key7": "GZpUsVCFgYPgGQg11HKgoG6GCVCsxxCJ6HBsVEiXienuEZBZWqUnLHMEcdzzezgQ4TCw1Rvdmc94i2nuwBHUda7",
  "key8": "4jMcUbPcd3umgWHck7gdkcTQxkBopw2maRUHdmgbRk6chx7EoqY2iM933xHHtoFeTzBGXT4QifFXqecQfKUed62A",
  "key9": "4bThf9zzcbhfUgc7Jvy1buYhwJWsKFFcomN8U42NsJvZ9kS8e4AECJ4etM3PHNzYcRLpyg8VdPbFZXrV6bC4LiC3",
  "key10": "61bVPUsdafyf4fYjLfFNDqVfKJ47NX9VV4nvj7cd4wMY7q4efDWRiDKCPCgBXsF3o59eU8VJqCj1UyUM5vgZFSTK",
  "key11": "4MhZMU7uMSCKHqPMBEPhXMGaq3V3n94xD3NX9mMBduBWst4xjHH7H4G3ve84tTHXdZT3brw9D1ooA5Bvj97fRb2N",
  "key12": "3nYadrLnsQLhfsYx7zPYwNeZ1Drm9aCWAvWhmeyKXiFhGPmjjrMobbP42DmnQMtcFg4FAvxD32HanMPAxoXk2g8Q",
  "key13": "ozquhPxFZ4foTPkdGv4N5qFj2Yb3xVXvAJTa6SSjef6PGXsCS72boXML53ezrCrpker8qvX2xEaos24AwuJw1M4",
  "key14": "2p3e4ztERkr3m7X5A85qDszLACLWMyfJPyGyrwjPtT3K7YVvJxrWk5EDj2duXQXhPqmEy7H1do6njMEjzpppGeiB",
  "key15": "4RmvY255Gpf1zy9j1VcZwTVpBCxdMgsvx2oMpn4tL2TESR7FEZiGm3i2svRcXi9PdkNAkXBdRJSd9p2vXquPf7qm",
  "key16": "4P3WwxfeC3dquikV7Htj7cri8KWjbFPKVW8Hmc8KLcBi6gHDjooPT92TPn572hTBDnp9ZVbKjFjFoZZUX5ucrgvK",
  "key17": "5HUYy5qJjggBuzUjkY1tmbPEzaMiWBACDiCuogN6dkoJsp8ZKn4fZi2WNXo4ZiE32Ey1sZYJgQKF8STcUGtRT9YQ",
  "key18": "boC5twcSxtJLaHFzi2PHz4i7dttKz2ckVSq8niwjWBxhwrZtzkn8D4WBPh7CejvmqdYNviMJxzs9i3KEH4KBrBA",
  "key19": "3okkhiFfcxwBm8mzYDAyXE9s5EvyLwzg3tJQ7NLcfMtk3AHNEKiHdbx52VbThU7TYdsVdbzicLU4pKgiqAAX81df",
  "key20": "4QZW6id8TaHAompVQxCvdiKTmrqcRZJn2stmYQKRdyjUwoG3Dwot9AQBsemPYp8qiNqcZuESPegvB99GKqcADjzy",
  "key21": "LnP7Ht7PmqcGfhLurajdtwjSCEPKYsR6PqCyw4c9MGEk6FZ8KZYWNMsb62j6qTUvKiwZg7LEhcxCEqdSy1J9Fcw",
  "key22": "3LZMU4Tfvr1hbwfQ59QohAczcYSPSpGK1t7AJxDEGVYXUfWyfzafRtKkMMGdApYroPGRRgG3fzKfY2ZEDavRKfeh",
  "key23": "5sRDMV9ECiy4VcujakWSdMma5VQJbUzCvYbytX53PJwCX1eoE2LEXDPn779hzDudBE2LJCUig3VBGKxa2PyJu3hc",
  "key24": "51od3PsLD5zADAg9JQw9B1zRdTLUZKRB8C1Rvn6nAfWKHtTVweTjKB6y94DyGaWSFwCbzTE2vRno2PhorozWeaNy",
  "key25": "2iy98Hx111oR6GWzj46yx8ZJfmEgUK9zep74Vm9Hct9JTzuksLuY573tNJBoSu6nmS9AFYiRXJsYcXjn48AFUBV4",
  "key26": "55WCrwodKWCmm7Nv6NeecAzgZLD9FBobUegHZBo6iFhZspuFmvJ2Lb7u5xCuScZP1HV6TfgUq7fxe2puQSA2rjW3",
  "key27": "5wcLkngHkAzDVQQjZnCiXCMTzt726qeEcGevKi8dzGdvkUk6BBaSxEEEmumMnkAKuFwpWX7w8qRpPeJwCpK5R9f1",
  "key28": "3xPx8ze273eSwYiMKJqYicR2BumwfP25Z5LCyVDNChd1hFMkbfH8Dxk6nKc98RyGkc3XwRQjKmiMHpgjZ3c22FzU",
  "key29": "5pVmVwqH1vBmXVqFqFNkJdyZFZsHPLztpGqSmUwVzPxHpw8vvwBBNmnQnYaLHYYUD2pyAgmnw43CDJx2pEerD7iQ",
  "key30": "2ekyZfvrUWU1Xr1PCzwaMX8dy2Rr7RfK17PEtJJMbnSt8tb3FLem2U6u5SMx8C6vAZTkhAeBunngZUF9sSW3c3k1",
  "key31": "xsq1x4a1aH5hbyizuwXsQj4Cbg7dij19TXpxExDM3HtG2BxUCefCuc1npW5rFHkyiFnAYq4hqTAyqak6jYk76uQ",
  "key32": "SRkYTfixofnrqDLj7hZQvm4NHoTPY7FK2UJhXsJYUYn9AgP9jdTfGT9fLXGdYVduquBxYdqyuQQWFzNZ3XrRShb",
  "key33": "63WMTkMJA4MMJm4NcHZtKPZXxs62p8XyXkAHtw2mhz2f9edBUR7C9ZqoU95hhSDxrBm4jVQZtmMdhv6yBxWY4iNM",
  "key34": "3W55TNTB3b3kd7YzGQKDMs3iLtcWyNL2sqinX5Dxb1LhJHfNS3EBUA1v7uzdLjiLxFYzdDJYb1yogVVV5iDAMK6z",
  "key35": "3wnTBAG1nt9JVbh9c1pqfcxTnErYCFgguLhi7LxxE1SQ2RGuE8SkWtV5VBzVW5MfJ2hjVhh3KfDM5WSkvfKSJhir",
  "key36": "2qx3kzExrwgZk2SK1T7RPn1VgVBNj3HTbMCiNRNkJj2KpmPysi7so4hikvnXzfkBEH3hk63v6h4wpotJpJeCJS5o",
  "key37": "3LhreP2pHkxeJmZrvoEbAD8bQonwFaDWiqyJpi7oqC6vb93qTwA5sd9vWbip6GvJZ2h8GF3ZAd2ArT6GsdfUqyZV",
  "key38": "5b2uGmSRRdpdoo14i9eCTkQQWkZzEyb64Dnh9h1d2NfQ6pPVQsM4qPrq55Ptdd39aKH5BzbFKaHH9hGFQ1fiMorD",
  "key39": "jMVadsh1chgfxyGMLrfikDagXt6rJNWHEUMrbfpd2sG22UDRoYR11nvgrMxJvtec9XqhhAxx64m6PGHf9ezvCA3",
  "key40": "tKJqog98VBuCwLouiRCx4rbTn1t88K3WDyeBnB2s14G13jQz7cyd5fHTwHqmmx63usGAC5iHzSpaRB427Q3TTSP",
  "key41": "2senFgjeveVk1pme7JeZ9MAGuN2LewoyfkvbxyaKmoZDmN19hpre8G5a6w4Qx5RibVq8mDah5ceJXaJ6Uqi6z3sh",
  "key42": "ZyLC4dWrqR8Whv9akqTnwUXiE9rT15hWvPJYWE7VEJa8qZeSQxTBZ7FR8sQiV9YRCTqYiHs31nByhg5xMX3kyDc",
  "key43": "t3fH9RFFuFS1ry37xBdPTXZ5zN4QubUhvZosRg5N7V5SvFgQ7guCksMXJpNkHejvX8aPfwe1Wk6kKHx9XtL31z4",
  "key44": "3UWhCqogNKdAXyuaxeqUidRD6CTPWGiszp2FVPJCFTUkLLJhCHBYYpp9sZWS915koXRzSNmDQ2A9M2tJMjzJaeir",
  "key45": "5dpifoKiNWB6uigVknaqXtqhcDBV1uwpYZba7LdidSq2wfH9dshQQNCgcoP7aM6uMVgdWoLzfGgcUkxYCBYvftND",
  "key46": "kWX6GYaWrk4NM1aw6NHUD534ndSZ7bexJpS4M1HxSZ7XGW8nnhVAdzUCVxgtqptF3LmLYCqfee8qWkRwoDNLZHB",
  "key47": "2dV2uH99r2YDnEEWXRNjVbxQZJEfbGSkjSRKMKRpWRKFdU9jUpefWR19via47CTGMdBtZ9ZVAWaTTqT25qY6jBEy",
  "key48": "5AkoDmxDJTVpNmhcL9BFjh93i9i3F9kgWjZbhYW4F6jM4vDxt31Lm9yeqS1Y44JAJD6eFUAVLRmVi8LmENchgqf2"
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
