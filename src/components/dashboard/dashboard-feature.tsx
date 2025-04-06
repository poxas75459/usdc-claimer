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
    "tYDh4pQQHWAktJx3VyARApv1owY2Ac4RunnUz9ThR1VjjR9qy8upRnG1mf741tbhhGqd5PVkhVM8eZkquS3qipy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UhTR1FGWQWBZLaXB2NpMAh91RpZsoKoy7s8LFc9yLTfatPDAPL8t4WCgV6rZmGo9LdeQHvirU2VB1mDxfKQskjV",
  "key1": "399A1ZudhfVbdX3zpLyqmgTWp8H3PSgftYskGmUjgnxMTDshuQAyrRBhje1VhpyFCwe4uL51o7wrmnvuyGe75gAP",
  "key2": "5JPMLz2tkaVUYsd5chArnnr87eEh3Kyu63JKBB1WJcVtZ22AFTKB7SMkwP3YRUdqJ9P7QDeiW3daEUYV7vmCqTKt",
  "key3": "SdGYwxE7ZHTQ6vXFRXy9khYY3bxNjNNaaJFZDf9FwUpUSruP9kJ62Jb3nABwSzc1Fk4ArouNRYPN6Spwa6zqSUA",
  "key4": "51qKPHwpHpQTayNzf9sEgLx4pA9bAqbaxbJXULNhSdgiLtuC7YCtvoW96WqMs6NAKxPvkkGyM5PnVki1RVtfHcnD",
  "key5": "61tyv7UiBGm9fyMKVAvy5GoUAhaYKPgQgTFLZpJA9WqftUafrfKnxKTghupxa9rUGiiPNveCFNDgZ4MHnLq68F5i",
  "key6": "4biHoxmB423ZCxBoAMXjPKZRCzXhdL1Yxiadp4vQwbPFednnZouAHaAauSiDXEj6BiYvC6dikX8tGHSnC4Vp5MRw",
  "key7": "3STzSvcbaQz6qJGdgb9iyimr2eCDLh3zfuAyws88LuBWDV8DqK6LLFSRTPtCLhkZprbvysBewS23sX2JNNP92tau",
  "key8": "5SAizcuzquFxWBr1dsYLhdkS4hjN2PXmb5PqDMBYtmJrqXfsDCSUTKmPFHgoVnLtsU8wGCgYydjfhzxGgT2JKFUo",
  "key9": "5XZCjzPujnBKpzhwMctV797NBg59fz2vkwHXraqJZu6QroD4u2bEKRMrK4UeyRfNCwtJBaRdnHQP1oa4AYWVEf7W",
  "key10": "VH9B7v1gGo3j1nkwracinG91ShDQ84eLmAA3DiFGSgVwZjo38BXQiug5QZfSdWikuZ6YcKX5uHbTfZLTA4zbbRk",
  "key11": "3bYFPg7zZdcvi8Pg3werpog9j2ZWQsaGvNNWQRwSxDTnPTcKWnLGZSN2aAC2D8PpQdmaPNWH1sj1MSCwXrLPtRkF",
  "key12": "2VmKDbijXN6DLdzUnj7KbGxZmjwQZMR3T9zPUb8XWkf81s5Byzwyr9Wo1HYEq1m5RKm4Hn5TchqGjhbjz3ktcAAs",
  "key13": "4LU7CuCUCNamXxQsKLDauoTfvxaDcqfuoQKBb9VXaB8F15y4xRvkH22aKCiqWFRvbsr8fqAzHutP3kvbSov2UTQE",
  "key14": "3HYgeKovTXUKgCepAeGdp5rw3LYQ5Jc8XptHcVMGxvEq1u9xBTtSd9UpZvyeg6BkkQ2vrppNGeEX2QSdXKJQVrgC",
  "key15": "5XiHyP4cSX1rQ5TzEqwcoSK2Af2E6beBUfifriYYtN5HPqYA5E1YhpxEM1Bb2Ux4XdySqH5wge9sLdoks4FS5aYy",
  "key16": "44Ki19L7aS8uGz4yaqxw74WHKKxpZ1Swjuyb4hKCmQbUMABeJodncDb363dRS1daP3QSsLitbm3YBHFc16BcKbm1",
  "key17": "28rvuPVbvV5fyvBjDBoJEvCmJihgtRVM6Nzn7ebZySFALWuCtMZUnJ5YAgq79f7SpgJtk3GSWrgk1RWabSGkGXCo",
  "key18": "3ySzjKee7AZto7s4B4YhBPGtusT8W7HSnAE5MCe7PH3pspRmMrTFDRqzmuEnaKBdFgkYnup9c5q86JR7B4AzdFm",
  "key19": "2jupiPhJqAAJkMk6cjCE8wG9TAVBSDjEmkfUedkRPvN7UiLQ7yJYFXf5uEkBBkqVyyMroJfco4vow1dmfasHhtZH",
  "key20": "2XbKYaCamPKB4Ajw7yWX8qxsjmbNQxgb9WDupoTnzEWqNUnp1JrNpRbgYo3N18nnxhAmgiR9asSp9cgqH2BWxZUx",
  "key21": "kmBNAnPJVTtrNfbXWjLpbgxVEuxKf83aJxtQxhYfSZr4E2BALvLLxU53Kose2UiMCUPtZ59zJAuDNVLKnKMudRj",
  "key22": "3deqoKKaDHAePTrLoF7X97uWuKRiXQCYTxqKw2smj2dNsbnwAPMJKfG99HpRYqz4d3duDXksyc1HucbYkBB2DQzZ",
  "key23": "3X4XvLDtPYkooSJxRgx7cyQFHo5EFCGFA5dkThZ8ru2LysT7vVPHkseqFAPG8cUh2M1KbdXQAQoNG7sB9doq9EdZ",
  "key24": "heyskd8bDyTPBmjj68GYCd8KthfB9gwoR8KK7jZ65AUC1LaTLG1ixpuD9kek8HUkPUZQvn4UJYdBS1vEUuWjfRz",
  "key25": "2CyTnuw7BtLWkBA5eL4qLSD8pTuscmrCxopv4FuYzNxdebYYb3H5xbS5VGLaPfDtcULCJNUN2jKTYM9TpJhoS8hh",
  "key26": "66cSaYyj6s9ThqZ9FB4NCfGGYUcFRi51CofCa95MSnk91SnxX9hCp1TyNTjmy3UGv7Xuv6se6nYSzHLnjBZWa4vo",
  "key27": "4HEkeiuNdWkUMoQQpg1QEzvuYUEb4xbZNT3PyYbujwoVr7BCqABwf1weNEsfFvMhBmEARifK7GWvwE4KJrqGJ5nE",
  "key28": "2csh3YguzkCEVsvFyxL7chS5W9NXwdN6sDfPtNabnjTEhrCDXUhX3gx2tnvgeFb8pjuYzKZmhyAAgW9rVqkoYGYV",
  "key29": "5LJbNPGQjbSYjp2TRoMBLQpCVe8VbDbMkHvPSXghQ6eD2ysXcvvDGsb6uVNtwNWq1DVaXFs5AfZsTHMayAtucfSi",
  "key30": "5q1SkbAVSqMeLm2QGy32VBueWbzsqif9fbNF12FVuj5mio5t5F8NE2J3UmtADEnoNw8iT265icAqNemGR52pUjaZ",
  "key31": "5LEV9ZAg2LC9hxvSFbeW61XGrAKgTZtiJf8bEpCBcARsVtfcUwNnCUEqGbEQRqkBX4DKdRxdSdcGExsQfBQA7TbM",
  "key32": "4yXVjz41u6wkQz3uVR3N2Ka8A6RQKC5WTYFUY4aZMeRkaFA856jvsdqWkWkyXLhAwMjRLswhC29ygt7rF2BYJipH",
  "key33": "NWCv4EnPPgjA2f4vxfjdhbA4oqFZ1kLjiTmPTxCVrhyMLVzuDVpzSvrCFAdCBkXPE4xgEqrzpjcqYca31k2jzhA",
  "key34": "3bEashybXowY4pY65wH9Uyu5Kdtu2sBtgA2NK7zZGZAtkSoBk5ZC5wyUmJ6UbmcYheexBLDFTAuAJ8QnLm6T1a8u",
  "key35": "BBN4t5epUHYsBvP5C5hJp4KakZNtSy5T9kkJzN3ANeMJdAw18z4B7dDgYEnheACftiuVMoA7kTCTyyFUajNw4ah",
  "key36": "4kt2U7LPB7pfwduBgNNyD32phWTzvDb4edVJRbQaNJ4U35vYrgHEgSMpM9SQ8hnRk1m7qxxiFE55oWZ6PNcmwfUJ",
  "key37": "3yB5KZT65hdfbcLJ5a4WSacHNStB4XesQ2EGUQBtWmav12K9DDKe5hR1x7MpnhEE1hLbCi4As7ynUErTQjgDy8qE",
  "key38": "23QVLC4FnuhYFDVpf7wn9BWYgadphFfeLG2eCkEGsvDLvE2pF1tieanHf5q1FkWQKnnCcF3BaovxXv454MaUzpxK"
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
