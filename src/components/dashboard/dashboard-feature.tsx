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
    "uWcZS61ZokKdPN5cie7hXpLH9ftB5xfFCwSSDWrtMqvXqVmpxaqyuZiyBURozEP5fdinmVCWpVgup47eiYTxgF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGTh6VfStnCnRVkMBMSBjAnqTGMrAL5wXVuwEBVCNvfsEgptnfjyrTjEGYrrp9GUBL8S5pQvosS3hRy8Z614iZ2",
  "key1": "tP2QpDzrzzn7XzWRbTH8V9NvHYNhjThYXSmGJuxSHs1gX83Q6w4UFdTNhSZx7JQrpJpoVNH6YkMMe4soUxLqRGD",
  "key2": "4VMpzqDHCGwrxBmYCm82j1DuJqFhUvm9MTmrupgHpdKMjy4vq9aMemfLPN1SofyxTjQhMdLSGhCz1hRz3mANLY8u",
  "key3": "qK2Nh91W94zmwrUNChqi2i5tQQFaiBi9gfAEXqX9k3NJNq6S7eNLKcDMGdWb4PkrXRLsdDicPrCgetTLLpxsZTC",
  "key4": "5PJEcpiCt992be1P53mp5gRChpKKDgvbGnouAVphm8FES6ZYoYUTinvCtfuWgKQ35CYJQ6juqKzmsNmKiNkNZNmo",
  "key5": "4GTFd4NhdLjE1LGT8Tq1r4tc74Xzf7PQhacP3bCMiDzxwNmjqhdgyqEhC7Gpp9fAqRfXpSiqseR47N2a8aEzsgFd",
  "key6": "3V7LFTb3Lqw3Gr6yUdBtxPHCXFbyjzyPo2jiDwT89XwhXmwHRiNyP6yVTyrsnKgo1x7DvA6K4XkvHg2dj9cncFLJ",
  "key7": "4gy1p86dUt7MjzuzCEMBDSnqNBdfacvsnC7A6pqTvLnrHD5VDXP2Tb7eAJwtWU9Cph8axzrYjjH4ZtQdMDFyMju5",
  "key8": "5Qp7nEu9p4C7AePR28f1sTbrmutwEjnGNdd2KWq1ma97z7D2nhKnvfRWiHaAzJtHGgZmXpxiDvuK5hrL1AtAYL1D",
  "key9": "QfynGDUiwmwdBWMzoHMJZDNEvEvzvZMDrLZtn4qpXGSeiro1SHHWQHRmnAeESCGPTLRo46soRLGHrnAvkuNGvPe",
  "key10": "2R2V1KuVkudyfwYvKyT9ed6Wk7YiJUgHvEiWoLF3ECedG59NfhFp998YA6esjza6YjQwXpQVSX1GoQ72EmrVBvsr",
  "key11": "2yCcb4FRKWrDxNzoEUmPTjLjmuAD6bCUUatxxN7fWh8LDRwA71CdigsZj1DnkcXdUy3wKnD2zb4GNT82czrQjFyu",
  "key12": "5ojWW4eAPuygdq2VoV4R2BaFcUAJu5DCbMXzcLbjqwNqxRN2ef6fQZAn6X4ogJiBif6N875RLbYKZJdDbeCTUqX",
  "key13": "5pD1a2ykKGNtLNHVqPJLq8rtSZg44ueHj8SuTcBYUMNBU34kCTvYPrQzdRdga1wHRvbKNJ1W8FYCuMjrKyRbJP4n",
  "key14": "43xmJ2npdaffgA9M27gipDTySvF74Q21U3jUny7BaxwTNfJW7kjHiWBnUDAMHiEDhFmwJinEBsTnqoJTxzXGQPGZ",
  "key15": "4MwXozNBWd1h3KqGRt7tLVvNoJYcCCDkCgK6wj1MzCJQ4vkqcLYPMGxh1x9RovjoV5Exn79MkoDPFUeQU71DoA5E",
  "key16": "2wZugqi4mvyq4RPmQ796vDtuasJD1BrkUjdmf1z9E5PPoMxfPHxnDo6tpjW55T6sxCRFDf19ToxQi3cqQFswAXLm",
  "key17": "4Pk8uVeN49G6R4rhQAd5wbadBfw9ey9R5CkFLy9tyB8QfEPYeFHyesQSpK9asdHoA44UYPne8aueJtjeSnDNoocF",
  "key18": "22GrjG7k1ubEaj91VBUNgrgtP23Xuej5jnDsCo7FaxpUmkDmVvtDGU8s2g8euyABMtXx9EGugpxHtGLjWJiRgnLr",
  "key19": "bPJ8npGTsiDBEzzpCcWxFFC6PbQa8xm59VdPbumjzegohvRyiEtjFDMFRssCj3atqJBdJg8wdCuA3vpWtthBtys",
  "key20": "CoCZKj8FRWFAPfiEMRopnPJXjq6EWUKmbS3ecqJWZUSX7QqjDVHgVubTS4JxtSHPVtxESDGftWsH1znmWptmty7",
  "key21": "CxYgzfU5ybXJ3nPxF7xGiZDWZBGGNS1YsYY4oJH1nnSpZypCtK74rxtSAgYg45m3DcRfnC5ZXhCj9qHMxHq5faw",
  "key22": "JPzU8oRd35n5QT13JouqLNvAUkUb21AcZ41tn8CoePnk3ixgqDnotC79qjJhjzJCKZDUGpAcpHZA79WYQCbZ3kn",
  "key23": "Kfr1xCETeJBRawjJQTZ179VEwfPVEHjMJgGLEMRbYP4b6dQnXHXwZbYPBrBFnwfgPp4ghgvrBFm9ygeG2hf1qfX",
  "key24": "2aa7i4HSnJUvgMjkFX58MT9HfgsbzswawnZsN6HMMwFa4RfKg6Rtg4cVDtek2h3NQaAbiswekv3BYm3yipBZYmAg",
  "key25": "BPuG3wNKKQ2TKvqqeU6PmNJ3XHqPDPXk7MeFg27dyYQmRm25FD1Gkhw6NAKi1kzdw2gMoNMUXj45pD4LJo5Ke58",
  "key26": "3iUBySsAe6BLNvrHBxu9VdiXxnJfiA7mi5dd9XUMMR8EDuknvENUUrfizktwbfUwwN7pSFuAnjTWP6tNqMB2q7sm",
  "key27": "3RZppcRXvEGkuZFSp4JdjtMuHdrUCfP8ftuPHrW3mdemqZwzcXxXpi2iNBtXBcuPfXZnKAHoxy3EXAv8yaGSkViA",
  "key28": "cwubPs2LQ9ZjUxptiYhUG6j6rEqY37VFahwsQCQrXEgzPJgh4MyMqk38C6Qp5VLe6kFrA5SmwH1QKmsYdutPjyA",
  "key29": "62fUmt6sNSKkph7joeesArEvwhsbgSn13oDC7b3NPgyecQyt2Pw66fFu2PBfUgbToYja6p5RjhdZL27sgv3Ec36y",
  "key30": "3ekM3AHJEh5CRBv33awAu47UBcagQu2nZJPP2wBaEefcSXZHhj6AeAZEyqGfkfeitgUqLrFfHLZCQiieGiWHedRV",
  "key31": "665YwgnfRL14YHkyZncRUmeYU5HfZfGKEXCoUvUuZbZYCTvC3AfMqecZnngzZFLXDfBCZVpS2Hy5PwnweRsJ6dHk",
  "key32": "5eTiA49JG6gSazP6zbow3wfX7EackVXMr3Tvc3t5usNL5V8sfkgVREVjtJ56kgpTW4iUkCA1mVi5k6YcdbP71NsZ",
  "key33": "4mdNLt2pPh8AtRkRf8KV56gpAUP8vmhocMQEwNYpus9D9WpKsXDiQoH45Mx3xsfGVu7tPonyRQpDrMHrFDg8Rmz",
  "key34": "5fAB9tPqS99RWHkEhHu7VQcY2o5hh7XtFt4dVrUUK7RarNA42Mhzdfs54JtbNWxMpXnMCFKwFUC72zSzq4SHvvb5",
  "key35": "HDdwonKVuEeEM84xoUjB5F3K5W5AQvdFUW2V59XWZpbqiyQkvEAZd5QKHrtwZYUvUzhNFHe4oPdFCtQcKSPWyTe",
  "key36": "5k5DNG1G6a5KJofZ78WJ4Ea6nQDdZRkKgxEyzYmtgNCqDu3kMZjMbaacWudvxcGfd2XLfumVzgRneXNfo4czz624",
  "key37": "3tSWhpzUdmFvuBqzgUj1kho7cG789WJv8LFzWwwNCi4in4uJCiZzRJmuEiUr3TLAwUaBG5KL9NQwTo7i6Tx7Cqsn",
  "key38": "5y2tMcEuZksRVn6ce7JxadtDLxGndtaj6Jp9E26DxN2w4VDCumWTiytG4Dm1aGhYs5e1DB6bLimSwq6GomGMD1LE",
  "key39": "5FXYkyRviVjiMinujsAc4s6Upbz4ktihMJpqdr3WMk87ZQRUqJGKvjB6XDLjmYWbtarLG3mta9R21p912tCXNjBL",
  "key40": "3KRE9HxCj6EJDSUPekqZpgGHPnYKgMj9srpDWaTYdE2zLEGJDd6uDZ3ZbAYZzMZ7F1GdYTYuf7XEd5VnFwgi54LE",
  "key41": "5ZyuHk52kbPrm628MS1CnFF7HdcTzEZroeDx7f2LevM3p8eX2aPRnPEi23R8eYut6dwV7gKoenz8Cce9e9sRy2u5",
  "key42": "2JxVRhP869eHHUiW9NqE6Gub2GLfhceNm8C1gSosEYXJsTPXYwv6QNNSjebPxAzdJHStW7gBrifiTDqtBPYEeUKa",
  "key43": "4vMp7S25t8u5onGcPWxWZczLU886SfxQLW9pSFMorfSHrW1yZuoeVWGWKPwEXPPL41SEjNTgKk1CDRd1rxb8VsnM",
  "key44": "3qyc1Qr6SUWiw8qu8fHedBMJTXijRQPVCFbcSdgUAbJvyaAFiu2ynvzseeEHUwwgUNMQXyEiNZB2R3wCTrSuWXsR"
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
