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
    "LW16r8rApBeSD1rbtWaXp1RpfU6KRCMVG2TYY92ENrzH8HdKa4NcC5LsNWMcjfXdZhQiWUqYEsAX1u8uy3AVMu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptKxm8poyozArRqARmGPChmZ2p7VHRPJ1fAx1inK8kvgZvcnjR7PC23AqVtxSB6jopuJ3rZ7RhJvhJikVaoFtEc",
  "key1": "3UhscJHckFo2g3n8pTm2SGtjkVJsyyRuxbe2m3SMGauTGQtP9DxybqWf5N5Z6vEWnLD7xjsDQiAen7zgiCRZ3xqQ",
  "key2": "3ScmNsJYTPTrfoCHmyhMKFLFkFc87Vg6HkWLNvGthpipvr4uGBK2BwMjdN3RA8wdRX4oHjAwvB9j4MGmR51XCY7A",
  "key3": "62ya34MKbGD7WiNQoPYbVRk6CGcbxdM9QXhVTbFMvy8Ub2DBzNbTjEYwC8BgV37vNAJ59z19v6SMP4FrmPePKRo8",
  "key4": "2aqc72fjvvrMeVr6Atbt1HXrmqobm8eYVUVuZ5FPB1Kj9cWM6TfomweqP6QbMNgXGMEhs9y742BwRmM8tJNUfF6b",
  "key5": "eWC5CkBjjt2Z3YfHVCn9jkFfMfWQx69sYPiQWnLPaSZGZqCvqTqXV47VAiPD9GYq5ZwJZERH5mVzzM49QZ3eScg",
  "key6": "5qve5Uv1hrfMTeKNK2dU7tvHhkymg18YDPSudSYLk51mNnoyosq2mRtxHzvHJLay4b2sw8xk5B8kaKWUiXKWfZgp",
  "key7": "4XzSNNMcnrjUbZhq8koQxFy9dCfb9tZCH9xgCHa83bBgoFRaDgVCMBt55mvm1PYEGqHBS9zXwhGZkntdEMnyvWmZ",
  "key8": "3mBhPmEZGfF31BJoPnipeTPFEoMWp1DgyJyRFuA581NfE3nPJakcCD4WbMrWeSJguqVWzYisX2BHXjhtx2eLypGM",
  "key9": "532KSonmLCXkGLcAJvKGGZw3iaSu4ofED7RY1SJbnPEF3TBz1KnMU2dbuxUgfVi5Ru2LBxQwcfJq9xM5L8hwQGMt",
  "key10": "YxqCHhdzK65VeTLmWmKfB6eNPCirXMTfw9QjGwcH45LXUezKK9NWQs7mjCUsHsFSGscStHxzXHdSxzpis2AZ7YY",
  "key11": "51f2shG1uaipRU3CKXa1rNj69wsWT4t6uRcYgLugHGM16TdN9QRLvSAM3azgZ1C8W7VfYNvEXYvE75fRVtN6sBod",
  "key12": "5a2WHzHdFrSCyk1iFkVRkwgobrjWcrLfhkPZqKJa7G4NkAUh2vmA3znmnuawcgUHP8FnPetnfR2gL6w1Uimc5vay",
  "key13": "5G7YPis3v2kKLZQpsfBfXLhRQW2jBiXCCym1eeYqfkUUKJASoh37mzzbqCSGVn4VRsf9QMXKWFWcGWRbkwP2DomJ",
  "key14": "ZKapgNG3MBs3PEfjNPbDKYm9iAVkyBvWroSwHc9ifVSiymbf7L9AwU8NycKqP5RgukSWQ3v2mDUpoRLcTfnSFpJ",
  "key15": "281aFwz7xqfFScPAF3WjLwsPHXaWFoVg6xtPbcktRNSikmU7Gyh255AvCc23rSrttvsAhHaupWWEKUk2QdjvRaTL",
  "key16": "2KbjjmhTaZCpJRmR1ahi8V6KeWx7bAshSoQgzP5Fko6rf67p54HVzXMK5LvzGuo4kBeKm6pVC7Sqq5eGXAZi86No",
  "key17": "EYp9GaHxzQ6FbLwbJzcU1cPPmdWekWf9nag5a7RXCaWkGsfJ4PEeHzy37PmxFGPenWfw8eJmCkRPSHGhybajPE7",
  "key18": "4aANwMMrwjYHsvZsL4yJm3B96y5rfkFxMnswpqgd5fSyRwdujo7fnzwiGoTfEVUJwGwnjZip5CT4wDxqvk9HgNnJ",
  "key19": "4FjinUC5GypVKejCZACiD7cshJ71h9ScVzP2HJ8cCStAX6wRWdYrXmHmfmoZxuezst7YZyas6S7RKv7GRX9P1iB4",
  "key20": "2c9J1jVxZJtjkuXe3wzG2ncuGMS4be1XWgPquj9tB9QUXG2ZAu4voaNxYnQGtwa2w7skFDA9avbpiGhzG57r8jyZ",
  "key21": "4qJBNTHUZiBeYb3QyNmAJ187H5MZuvcZvgN9dfMnriKHXtXmTCfww69Pc5sreFUnmoNykP8BvfW7wJqtJs7sU5W9",
  "key22": "3vP15SyZbcayJbNwfxxkx96T4R4wXoCjdSRryjwmBRvxdqy3iEWkZmaHAeKLZ3jBBBBiBQW68USABF9c8PH3awEn",
  "key23": "4cdNRjCZ8G4AM78u6HPKfEbCAgsJKsjfjHr5jcbXAiJ4avbZYvNwHNJVbKwZKQRG3CWjfSpMjWoYUhSjAnRq4Zn1",
  "key24": "2SWpc7zWLkPW8k4pAwARjTC4uQrmaUAofVDUWfRfGYtP4icdNXiQPkvJPBpzZJQ22sokS1GwpG6UcnPKcgpXkG1P",
  "key25": "4UEixQdQHYMAh8VcQoxL6mCwSAyAXidsQhfvitoy6FdENJ1Yd26Leaf56v5LDYLmRa4RGgkdRLBsW8iDqbRDZAoH",
  "key26": "3ebab7BXipqvwCuuoE1KN2vovroqzDgRoiCcs9TdNyCCmL92NUtdiTRK1o6GHEK3a7bhsYhJBdhdxLu2bUMNeXv6",
  "key27": "dEdc9nd1Fgw7vEzf7BmcU8xwckgF7JbYyzjCPfgADuS7Zw4PkgNNA5JRGnBENUtimgPTaFh5HCvTumxC9fWoDa3",
  "key28": "5GrPxjNqvGGoaQ43xtHR7YZbbjyMnVAe7FnLwkygg4uyPXDMLqFpbp61CiEhevtj6UHEgSyF6m3t3N4ge5xQZhzA",
  "key29": "2H3pGmViW9z4wpxGizD3Av6RYhmSqXh1MYxbFrFVy1QnzHiNMRWo3jNVNifd3vTpbT5t93fHFXA2JctJ2wSFe3HC",
  "key30": "2eUwB2PPkVBBPqVv9gJ2H9PJXJRyBfKptrLSfD4pbqVp4LFPk48vdM9pDvkgKpXpw2ZrE1UUfow1yAF9LsnKkKBJ",
  "key31": "2i34d9k6AghbWG6ojF5tnvj5eigJ545HCicTh3A9z5JpWXURwbKc1TpqiFA2SVVuCt3FPkvf9CpieR2KpYNLR76",
  "key32": "mcNGF3vJZeJomBh95tQeHc5nibHpBn7tsS9A4UKibrWdxTs2Ep4otUzwCVy5hAfikwcGsUSV8f1hM88KYRtTfjV",
  "key33": "5MvPyaQN37KG8HwgWm5pVgWoFJKuEf2T4f9Ee2pDyZCmk8xFH7TCBtEYV9DJinKQ98g59dfbEpZqfouDZk3Jr2ed",
  "key34": "2xGS2VkXGUMbU3ZtcM3WmoSmMoz3row4SMSji8KpdFzxMeDU1Bh43FydScNmv2WD5AJohybu1rJCUj3CkKt1xtBr",
  "key35": "3sfQfFzRdwsaJSWe7WGU7mgEd7mPD6xpDwybtHbqHyj5427VdzS5ngnZtpMbTguRdUYtC59KhjyNfke4TAkzv2Po",
  "key36": "mmoC5LgQBzD7hWdp1mq1xyxa7gdKznC7wmgL626LpxDkbAHhyHF3A6xqtdovuLgWZYNP8R7cJRtCaGqoVJWxw28",
  "key37": "kJuTqZBjExh8RNWjNePydHYrzBKsVCxsgockPP5xGhAXUksawfd5amoFNxFtHH9dE3m9bvyKwdzW6Yx4DCEzavG",
  "key38": "5BNAP2E6Bx5HxdmBSd8ny5roLExYyG4x68BG8ZELzC3pe7PaS1rbqy5GA4DEwb1qRs5rqua9u5t1QX8FoQfdH3Ww",
  "key39": "4fR5fN4WwAir5DdVCB25eC1obxgzs5MSRWEgiJxR6TvaaMmHygFxD2jScTC6gVqypzyJew8nAgE9ggieNvJAEBwH"
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
