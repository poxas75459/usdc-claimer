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
    "4XkNArMK6QJKC42F9uNSRLwEWW4Zh9kFqjmcxxm615Hj1t6tyrHwJCXLGcGpb5rME7Sh1EkgLrRcvqYoceCV6ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FqSGaeKMW4gtMmLGcmokziSh4uCpJQVDmUnK2P8zctcV2J2ybEm5NaoFoJ6Qhr6678pWYTpyVm9xuPPeYU5yuQ2",
  "key1": "4ZjdZgpM2JNfDGdGD62oyvXVgritZuJa5WQyxagLP6MZzrAAdiRmE5uasLay4uz3awgnzbpbqpAbCS5xRoDM5eCv",
  "key2": "9gAteQk4BWvB76FdRjGgNwz1LacAD6SB8dyf9c6kFC2mBnmHNVW3XfddAv1gfzjzHCdrgc4RFMdzfdpPeJhK6Zp",
  "key3": "4MrxyYRjPGuz1bXAYuqvoHbu4QLJBYf3hkAFrMRV8S2qY4Dvx2wwXuBuJuSzywraquxnsZAGT5T5uWzu7tZUiiP4",
  "key4": "22Kyk8hhr57ELZpyp9t4tUKmsy8PEi2UFMWX9jR4RR2W155WgCUmXNp3X1rJ9yCRMer5EbVd5yFvrmg5w3W2e2Jm",
  "key5": "3ReniJLhUcmm5ej3ir9BYsDuZxqvfo9izZrBrc7xPBkcVsJPG9TutDzc2TWoC7uiyQgjVhyDXHRza7t82ccie9dm",
  "key6": "4qdJD8nsEi58otbzgHcS3QcWLo2J6XeAe7VA5XjRSMYgk8sRKP9oQsxnrNQmzPzRbgrkbTD5ZE8ejBJ9oRa4Y5bB",
  "key7": "3Vd726mrQX2a59tfHzT1p9iXLrgRyPJRtJnqjhqTeH3AiSSaXa6WKP4q7mxbg1JzBGLxCoqrFRQCw5mQPj1ZdqEj",
  "key8": "29CqLVyRCBL6Kn4YTsRPiyac1dCbnckba5wEd1J5VdXjJRLFRTyaVReM5BSJ83tb2d46gQrpHAhVCzK7k2BuUgeN",
  "key9": "5N4Cj1MtgAH84MCme3xi7hv5JzmyxKFW6pRLVWJ5jSGuLZNTiVFCgEVspSGESrSwwoRBPUAPqtoXczg8UcTKNd26",
  "key10": "2QMZa2XcgssmZpa6MVW2hizM7zSBVTSUJyHNX35TNP2XLtBncPe7K81YEbjyRS9CR3iyeB7gTKodFTtkKTNGof9F",
  "key11": "Ktutpj443qcrUbjg1ovXSbReiwrrj8sm3apLtvJ55mDXxv4UL6netcSSruZEUWa29CHfhWn43CZ7tMV47ifwSTL",
  "key12": "TLNGoEvamb37qDAzoaAroRbyccLfAjQEsgCrvguXWbw89FNa4a5vWLRMRPn1KGoLQiW3pkzQpQutBYs3FkMjQfR",
  "key13": "i2GLV9MHnKrtq5757HGWipmJsFV5RuBiwauF5BqhPUuaqny5JgGma1F53C5k5qdRGznEnH3BkaEQjzJWTwyid4n",
  "key14": "53SXcFzSDbWDYZcHGVNsofY2KA5Bnob7EpXGe3Nygx9cn2dibXyH5qgzYNJYHzgpGTv9gzYZUQZxTEaffzU1HyFm",
  "key15": "5ZWPcg7QowN1hpK4bqE6WvF7w5PkUgH5tup1KBQJynyQPPtmUynzTQKf5d2T1Vs9kgi51RnktheQynSeY76Gs9Mx",
  "key16": "4GjNBj4zuam4VFJTcsR4Jm5gyQLs8w3PCUgGHDrbSSpTiJebZEQd19EeauMkSzZNqHa6LHZ3wQE3Cje3EF4KAjWT",
  "key17": "48x2XdMgRT34CcKLMGc6ayds3netPJhi5nB9CacyfLTXFy6P6KgMmBo2b8odrttQsjq43PmtqvJ1m68Ezwiu5D22",
  "key18": "2ofM8EigTbnuv7urMfFxM5yuVAfgSV8aYNvSMBtYTNfnPWvFVDpgc9ikTRTQzHcGMuSihGbijm6De9a16wkT9jVz",
  "key19": "3FCdV1422kEPx3seRNsUst6mEAj15cxfjF8346CaF7uaemdz27xXjctR8bL6suM1FYx7Q5ZWKivhur7kVajyBN8d",
  "key20": "2MHjQSpxuigNe3hYPo2Kz3vwMUy57RochY5rejsbFJtRARu7HvZGJzLkTRtyStiCAcWcXADj7M7eYBjUBSj8GFhS",
  "key21": "3jMMcYNZMRkFgWBxYPbNF4dfbU6Zy3b2z39LriwopWWbQL2i4meGqqwuFsykYZjjPVNQHQKKLjZJWttqMRGutmFq",
  "key22": "5RehUDbjaGxzSbiWTf4zKN1xYn1jxpoyw75ErPEvZM1zTA2WRyStGnDWJ4Z9zepDxqWdB8d3QypPdY7ZfA81gkAi",
  "key23": "3RCD3i4d6dVWu4h9mi5ras6oVcKNKsARwQQoEwKT7Zd5j5VqmJSc2QJS1i6R95mVaxtkidEtNGXXN1bMWgyHr9Y9",
  "key24": "CTnEUKnLXMJg1wgvqLn3Vot95nmunWHozAvxvzqkX9puRjTt653MmiTVSJemPonKeyzaVSP6iwmiNnUgUruhm4y",
  "key25": "ZbDv1kzgpChZdad4xvgF4WhfkthksewMhikKWharUQUrbSTQVw48MshxhKWexcbeuFa5rTVKNY2EGAWUj6kJYRs",
  "key26": "5eoUHUCThHL18CoWRFGWT89inca1yNZwGHatRwgKTcKkUc8uDguX1rfjmNUDrtPVPYoGJb68eiQf6ga4PEm1RVa4",
  "key27": "4Gp7zJUPQmSSFP1UjuLqy8JhXViFhQHXDJT2yVKy952kfT59NebEic3beXCSmv1UuqGywVcYFuL4bPQZCXTbVhi5",
  "key28": "21VSa91zS3Rh3tfQ5YLRxK9NWDt9SdgEKHZAo9i45UXjMoLHuMhREU6vhJsNjaurmSWuVKx76XtjvgP2RWgsdBcP",
  "key29": "2FvDC62nvdyhzXZ7DHTUuev2a84cukbqwS1sNKsHEqTddrjtTYYN5jxjhHiPWCBxy4ifY8WDhTNoby1kTHL5CmvD",
  "key30": "5rep99MwX2QeP5zL89V9kAUJYHiWxZb9je92oL8bz6scNVjUxUg5Qo1skaFY9pDUvNb7Q3gHLQuR9D8Cnp2JbGU9",
  "key31": "4mYipexaUDtGNbZXt9aihTbg1fRCsbFodWUfGin158nXA8zN8oXNKRSNBq7wUZbLsLYygX4g7f8Fz211eNDvsb7E"
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
