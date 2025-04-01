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
    "gbFLc5DnhVtmuEA1qYdRHZikLQx1C7CAQUD63VP6ftynSzX51ZaCDWLvuaohqmeAtqY3F6KogZh2Sxeh5DJsZi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XuL8vBzNzFisbJecZpemkpGqqySbzTSvCjX4B3hSzQkdSq1AxHahWCq6gPL7YC4jy1QNxFipi7gngBK6AjjJBfp",
  "key1": "2RKywCWNqGZvu46eh5jC1Ka5USRi4tkoQEhv7dCZPFkg5nsvmFVhYkEBL8j2RLWNc4fPhrW2Tv4aJU2hbgbHz4sr",
  "key2": "3DdnMSy5NareavuF3pmSe4kCFoWFq2n1i8FiqCK8T1oBeMtJqTMLb2BauRthMptGMJgCm6n56EAeQBkqAin2tqVb",
  "key3": "3Es5nZXzThNik5mxQyeEyfycyxrfnEb6Co9DhudpHVi2CdSuLEQzcMDsfbEbZ8qdg5Ke87UJzhKgkUQGsjkjnqg6",
  "key4": "5tWfTSKqd6a7CkB2Mu5UjLBGfFKUVr5udUzkcvPgyytWSzfeDAk96WA9gd9G8WW5D3oZz2LVP8ibpTAbmif5cn4s",
  "key5": "2gQpoPCxshEhUoAH5podsEzHXTjkAtHds5CNauFfjHqS2drCDuZ88jXXGi1z8dCshNauNVyRRXu5uPb9MJdPUvoL",
  "key6": "3ze897ZemJEp2VfMhKfRLgd65dJ8bgMbAsyNksKvp9osNSaxLNVcKLfpYXCi9xZb5u7Uf8FjwwNcd4ffiQHHqSLS",
  "key7": "3ErP2prMP48p3fo2BVsJK7iAVfyd8eh2y7LNs9mNwb7eTYcZsSMFowYWgRRr82rLffJrxH5BfkcS5dpHhw1r3HTh",
  "key8": "63GfJWhx3f858zDvGn72RYyRxXyESnUyAS1VZWEg9ny4jxtfmgrUeuLY535YhEm2gGvknVC4GEDbSezHBH46Hyrs",
  "key9": "3dBB2xqeM9t2HaCRDQsq9BHdUE5WvKeXYY2uGwowSHeoVMgZmwKJyWUWFQatoDn38dqasWvFpZxVT6VPfz4xAMTa",
  "key10": "TDcRW8eY1gCw396mKpqMajRALQWmbp7BZAQkJCE8RBjAvviaU6cSCTgtvTKrZVXabmZUMezCTdcesUQptssyxBT",
  "key11": "4rNn7abUvaqrbZoHoiGTFCsbX1PpKsujr63eV6KtqKpYSCu22WWM8sownBgKCcnbBSdCRxxuRYzy7pNEffeZJNEG",
  "key12": "2Sqj7bgwKbgsbL3dEA5hbJN12pHXSoXfcYZgaPb7NVLEiRzfv47e3pzSjyVa5w7PEMYUVedzRcCgTRLsHQmaUDw",
  "key13": "vWbxyr1bCjroGQtUr8tUfnpMrVF7oERwzJSvKRxryQwBt5TUERH9Qe3LibbJxL6bAabbVNWmfpCNuNAdEcz1RVT",
  "key14": "3ZTi6VMa2YgzpnT7am1m9vjjbc6bP92etWKHSNkEWqKpKkkLiTUMVrjzic6q1dYZJ9W1eUKQYED222VmyfspRQb7",
  "key15": "4S63TYSkUrqgxmVrhEd2GXvnt9BqyTNfSHt9tNcUk44sZmtgKzbKJ7xYcncHL9pYPK9pqhbTdKoRAsW5raQH492H",
  "key16": "59n9SBnoh9HRGdmW26wDuRopv6Z327NgiRj9m1PBwUTQzeS7uexyd2SL19L5CfH192J4vsTfxGrJWP5ykT7LyoUb",
  "key17": "4DesD9AwBUW44yahgNRN246AJhyTAcEfTCUzvJeMtjugbgi6GucHxYNiT6R7HVTP6Wr49krL3xMi9gj7aaMwJp1B",
  "key18": "3K4BTq8gUM5y1snVqbBrhokXLAsiMJaX9Bb61rgSSPKikhsCtLpH11xrwhVCxyTaNdNLVinkJoarkuT5KmAG7Zyu",
  "key19": "41e2CKCxi775zE2HtL2pgQh7srY1Lykd8zkqzohcd9C7JjHfjZdLgmbpZ6XArj6oWKvCPiGeifAtTr8MK4MHTJDB",
  "key20": "kzMDcFJK7rhhkABdecXkFaHy5hoYKbqMkdzGYpAR4ETK5b3ZTppWpv1MASM8bPSzFDHb18KtssvFrXSW8zAQQGh",
  "key21": "2vGsqJ54vdfNHHe68AzJgoGtEeTvGTPVsnQPahujFTTZbNtCv9ZU3bv7SnWSvWQMtoLJ2Uz4mDG9whjNo1KiVjaW",
  "key22": "5da1uAjRnN5DbaS9XjuzXP96h1b4LwzuqDJmto59brpjpE4Yk6SgNxnv25LKXAzXwPGtxT8MMPSkgd35hyombf76",
  "key23": "5zXXGqCaT1knhYzPDt2QKv4bQPSPudwRUaxbCSUYgjHL4HiuaBvhzv21nepCQNDpzfxVBodhHp9ozfPPnch2mfun",
  "key24": "RKtN9JJ5tMaKEuGzDh3U5mVJ15LBsKhWTMgVfwwAbABLL6Cvjy6ctUWZAn1gzewpac6wCSzaVQJTPXMcqgkGNcq",
  "key25": "3JEZLTZi3f5bbtUKp9BGxuhkMqsjGADnAYGD92wm8LuuVEH5wsNwuCV4zyuaeR18AGqVNGtpxeDrn34VZUEkVnud",
  "key26": "Au6oCydhPr4fV5rmqSL5GmTADsmwSMRj7PD8didYLDDLk8oEwipqHf9M3JA5BAHyK8CAfDgUNsDgv2Np2GdS3vT",
  "key27": "KCsPNnBf5TCwxmHogsE6xeYeDxrJYNwzmcRN2nqgdNTe3B1AAEUPNNroQX5tdh6RfMWrbqh8mYpoDKX3RY4VKZy",
  "key28": "627KjLGeBBj7QGWmW2rtMUvo1awxQWK26maQRLmF47oMpgjWZ1KtiL3NSM4nZJqwAWmF9qCATu4nKVprvrEBQZy3",
  "key29": "5aqN7iWnbLF3xASqqw8fRQkZedMusuvNJ9JARU6FQ2Pgb8EMG66iRbqXDiAF8sRo6YWokCFZRhtqTBhGuwXKrVEH",
  "key30": "3dfHpskWpVjLyrzEu5yJ7NJ1JLBxPn2oYqzn4UyouzEbKnujuVCgKzL5Zir1rzLDLHYJnz4U5EeajWUZc5Ps18pa",
  "key31": "3gcgaKQBn5W7am61q39fypZ3auqgc5aHxucgwQyxDxXurEz1W3jaYyM6uoCWGoBMh3G9y41n3PXXu3sinK19GYSs",
  "key32": "5x5Zpq6MB8PP7fkA6QrxLuJsvqSv26RaQvp2XtYamCFjjfAB5bHu3JLE2fmMZv9KBaaHhtLDRMYisGoawK6Kq8nz",
  "key33": "4WThymCDKEfxkMAgAEXEqPr5ks6QdaLan9MmyeoRKGHd6NkaNy66KujjtzsGCFKpSdKNxhdFmoVj9gLQAg1xScif",
  "key34": "g4PwWQbMWZk6papuBrfqRbfBXiiPxbY7kQw9jCoAHzGte86T8LPUyh9QRDbZ4oKLfmteVUhvzUPXp5HxP6Ad2Pn",
  "key35": "4ykSr7bo1PY1WSDbiLr6UoDjWmr273Me9XvxNCT1ShdHhX79mitRrdqZzRKRqewYXqb5wKm4Dbo9vK5nDK7WNSPQ",
  "key36": "5rsBn3TyQpaZy46YHvmRwpkFt5qArz4buyKKUGAEusyJVURWdCh2Ugz3Qftg7ocYiLhHGsE6dpuaRgjMSDiK6wxF",
  "key37": "cGLo8hutRYZVrhXTh4AKqhp946U5jQJQ8GTroMhx2uEXxzsgYhChfLbhkvSgLHzKhAFnUFzhfgR6H1LCRL8RqKP",
  "key38": "2dC6jLzb62KAYqBtQX5p2jST1LGob6pauaV5La5A8fY8HGoi1i8GLDAgdBvBNFrYJES12ijCETThyie3Mtqd5DzT",
  "key39": "5q7J4zcEnJC3v6V7BE9nTkhgPbisxasJi5gEBTwz64Zvq67mJY2DixpDgJWti2UmVJgtbJim4U8sGkxDRhq8ZQxC"
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
