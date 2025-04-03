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
    "2fNHNaDS2ren21RHENy6Wjhvu2htG5xsV2rtpwSAYEiDoWrvJYj86aTJKj8tPsAfS6SoQxHJFVci4R4ngEsZd9vD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zts2WwikTBdLSVsRU9dkowAPxN1J4fvRBeM3stFwyQ2KHbeXdKTuurbryghcEEpZPHwbUfcy55MrVGXa6ufJdfW",
  "key1": "4LBeWDXdRRECMSaPSRkxDrgBq4v5Sm24EWrccXeBKQxGgxweZs1NPyPHnzF3iEaJZpYqQFn7YzUXe6i5r8wK1ikT",
  "key2": "5fyZQZANuGze1xyHxmM1gc6PbqC5CMGCFm4SicJPjzd6kDkxpU4ELJSyFY4prWUtzTEkBdWnZCX56tvsYrhXuWBY",
  "key3": "3urNj3c4YogAT7B87i4R8bCdmHGRAN4QT5murCb4NXPzJkS6Ct1CX7Piu5daPcWQPBaPDmpZSZUaGbrvaipfEBLc",
  "key4": "4hDmwGC5JN6bXusLVpvmt2bN6PkkJtmzAvKrqEqRsV3fQsRfHpDs3ExKmDFie3LiFsy1wmdB22UYXahuxsXoYZ78",
  "key5": "GQVpjSURYLd5eiMjA7xYdBj8SwzyTz77hY7oqDKheBS2Q9padBwCBA9kaFtJx5Rxrjz7SSxwFUyH55mMgNENJHJ",
  "key6": "612Yk5pXK7JQpEdQDgFXrhvbdBQoaZDsardZ55C6HqaLMv9fP9zuL6dxMMidQfUpxE5Y2nqBuwwUWiBEB3Zg9MMu",
  "key7": "cWT2pWQL9uoZCt6XMYsEhnMFDyx45MfwkbE989HqGb4LxW3sPWVZ43RsxFg2aWqARohSvWPSL3gPuC8vCJJXVnT",
  "key8": "2zgJEiunC25fcsNCkeVGR91WfQFMuCR3uSDz8iqRGqULtZXs64HsqAQh9FaCzPPawiDvvbEcCzk9KdwpSsESczGM",
  "key9": "2hhCs2QGSZ4gDKJf9Cm46oNGuf7fCTxyNuVspNvwmyHTJWEJ7M4zk1jC8FUjuU84zxeGyJ6GTVbtgNifqoU471Gg",
  "key10": "3CjzgFmPnBPJkTMyVbWyKsHLqKaaYewuPUMxgQPjLreQUzC2GFomgfL1nwb3L6UNHoKXhNdvfkzc8dQd3RkPJ3zf",
  "key11": "5BzVtmnvRFUsEACCkQBdUYFyJvQhuEjMKJe73pvXT57dXp58oC77Txv5nMAKFN84nVNX5NnZKxkDhw9BRtyq6kNB",
  "key12": "26VA3kqLcPCs9ZzdzEiS57BNTCKMseFDm5fqo8a372Xw9UPsaU5YdmcHr1KBBD8i4rXP6ZKgKs3jybNLAexY6pu6",
  "key13": "459Dgu9eSdeVAWBqEhhRc29ASVuNQwDAUvam6apZ2pdPbGqeC5TAQ3sAAKyAHwVqRMFL3Gqyo5oBr8BYzUcyahnV",
  "key14": "3wq53Yd7jZ6aaUyMA2M797Wp2CxmNqvx6mDEvdA4gAT2DdBmLfLVGyeQY5hvxHira6Z55ntBM2QGooaDvJSo47kN",
  "key15": "35bpyjwWwEUXTUCTrbSbncn9B7fcTKpEr1hNtWBP8gfvpuZjsT7qoVY36VLWCokcgffCZyu9BroDKovHhjzUTWuA",
  "key16": "36C5HAgG39aK7tqQamZuMC5kRdyjNBSTTfbygAAgNfgrp4k7adRf4JRmxgCeXBsDPzCknbeAdftPGYKXWtT8xL7j",
  "key17": "4MEQbZqnnP5hENq8F8CGV7h9eAetLmJex2cg6Q6abgdjL5E8rheLysckCtDEQ9V75gArntXC3mTYM8qrHN6ZowgW",
  "key18": "sqsv1eugiLJEwjwxrBc5brr8mcqWAmG9GE4yNWCkx4BhtnAUBYaEwMYsQgMaFSfq4DGVKntaBFM2sqh5LbWnQwa",
  "key19": "3NMqnM1CpQi2wdnTdiP7Zd4GRnNnvBu2KvQKZRDushDnHkAiVc2iQYZjgFUhXCjVtnMqVQtdmUroVxFMvjxYArF7",
  "key20": "2rJVNNGcSVpHckKENAVU9sCMvJCMXaxtkqwms9uJPa4XmrCXWwN9ZWq4vL4EmcpD2qWx6SQhvgM3CETD7iCGvtTx",
  "key21": "5VT2Tg6PXTfL6CihSj6B1z5CuHYqVrX8ztpZdU85qkwK6gUaqtDXfVUZNM1VT4r3Dwe3GtzQ69n2MwC635uENzGH",
  "key22": "4EAr7fabUuVFo9hSsT6L1LuCxYALG4ttAti95mtZ8SNdC5YJfEpGWihPSBUSGqAQuhuQ9ZcH2MfkU1kpc8QAUrm9",
  "key23": "2pAFFM5cYAMpebWYBLmi3SN18uifSXGnNkBq4NzkzSgowxGUtT6UAdpKDrm4XenkSzDCMaaLQHeLZGfAYwg2R4nR",
  "key24": "2uGJKDpKSd4ibaqAW43dVErYMcYnPELcpmkqgGh5cq4GqWWrJVjqKvceRhZ2Cf9rTa1twx6F6Z6XtJgc8MxRjTSG",
  "key25": "4z2cSEd1B1Nk1tkHjbWbwcrXnVJzzNWYi4XoBx63WdbyNP3UVmBcicuuRdvf3vHfb9cnyc6P6SeUn56vvU7crpfb"
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
