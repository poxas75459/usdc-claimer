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
    "2ChPoDNmLjTEkgiA87HcX1vX6CV2RQCRWvmRHeYbUZ1JUmu7CWFeLMVLn659YvdbxXgEme11mZ8TLgoPqVBYxeha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R3cPuec5XQwGm7Q9SvEACj1eqoyM4MK8BnKQ2yMddxNarMQgBiozy47H6n9AECbrg2chHPxRF6dP4PMSwFzKmgk",
  "key1": "5j2hhrS8ZTo3q3E48czkypeKHpTjmwpVGn36XN8GA8tPuXakqfnjzDZNAortD4eBPH6swcAumu1iC3N62HYmiwz1",
  "key2": "34GfbJZ162PBXrpAL1YudcNZqvmkiu3aafW2pghHRVmJav14vWNCLPMcZ7xBBDE6ARSmPVyUa29HxTA2A68u9xBx",
  "key3": "5DZtezaAN6sbEZaNpuFb3bkxRU7nX3wZfRnfairnhWwR72GBeghSpTzggNxXFpQqr23YG6Kow2Rm87UbUoVYLQTJ",
  "key4": "NBNYSdyWey2qJawPN3nmhpnc2tcNQTzQnQD9huBUxSHubU2UDN79XNSMzzrUUF9P1iqtGBrBbcymVJvLvzDbgmG",
  "key5": "4QcRx9wng6sCsx5ccpFG26NnwRHz7PuEvTc1Sis4EXrKGxJDXyZV2mHExQ1saKHkjPxdeQMBqGd2gMR7w8LEMc5m",
  "key6": "2Xz348SWoqn7Vdke2mkGTUxX4FYPZYBxK4e5LopCWL1MbwDM7evMciXd1vkrwGJGLGbbWzMnf7YaeY7HtYpBHPXy",
  "key7": "Vfrz56dffjq7ENJoviQLCderKZzmpJdN6K6JobCZssjXWxt7PKkTyEf9PinWeZh87KaKbiXDgdPt7FLYachxwEX",
  "key8": "2TdREpmg4HQ6kpt6VFMz9UxAjhCTUHN1zsW5NZwzD8XwzQ6Bm54rW5CeikV67BRJCXHyyHosq9MSgSftAZ8qi3xH",
  "key9": "5hKFVEetYc6gi583zRVAVPrBGdNmdvbZrRTnM1rwQdRSMMLU8nt6wNRGihxuNrW6mtF2hxpQtLgKu9xxJpxTo5aK",
  "key10": "5LxrCwX8RoZvysUL9gLJFoX5HZV1s5dX8fzjpYioVHd8WSaU4aM3sVFX6gkMNRWQDMKTHTnDKTbnntnsMQeUyGzq",
  "key11": "4zJcXSrEgHuooBcS7rabooAMYy9PviQD7H2WZvTEwcM47qZA1sZkH8HV1VwLYVPic3UbrX3uUv1PatU2x3aYNQPW",
  "key12": "rV5JnvvdtweduQEQKD1ctMB5oaTd8xxW6UZxhEDZfRAp6mjB1vsQbRb11kQvLZR9iSJEKLBfRSUKjjRw8ZyV1q6",
  "key13": "3KcRENzVKPsfRuyFcw67rsQ78x7VgLFG8ezpoe6cCr8zHQ4Sha6RFzEmZridYVb6BVYv3tajP3rtUVmRvLdBgZku",
  "key14": "4Y139nQAzLgSdVX6mUfWSmWzV3WekQwcTbNbbQxd2wstt7zL2aooU78kH6BGqkQVsqi9Ntzsbiu2Tpa5cNWu42Js",
  "key15": "4bk8dqeaaEaitihovcUXp6f95Bbx7kXavdmUQejcL5aTMd2e5DBJpadV1oBYtsYS1c2NstErtf8RUjHjnkNQsb4Q",
  "key16": "5Mys8fKnyzL3exWLWDoET1Gr5LbGndQ8v4otZPLF7S45srdVXQYxgeRwbTQ7mjMGaGMKamz82VT7SEsotD21zEUD",
  "key17": "5uNYbM9dd34Zt5WoQxHxRxv9dwHEduJef3cLdmnTJTJMCLzYWiqnrVwXAfhCRVRCab3koe2s5H5p2CrZw1NNmNt1",
  "key18": "64ntvELHLga5Jwy3qDrxwzMjcukDG9iBUapYvGMetLkofmuxy1jkHBV7Mc5LnsbWGK6GzkM5Nhy5sTb7t7u4143h",
  "key19": "5s2XTdUrXrASfyuA1SKMYnLg1cUtf5hRDoDDsMQHcnBxf3bdc3bVaKwt4ELAa23fHk2JzuEN5LVuMKdMD4y3rUNp",
  "key20": "5UA5pbKzzdkPWhZdyZJJh5gW5fjBkaJaQr6jSPSZLGUfaGCjZckjvevUGxK468vSEuvTv9ickjrBgz43anRpowym",
  "key21": "5i4BwMkmfpbKsfEgrP4wa8M8n7Lx1gsapAhDLRGa5475mhHqnZnyr365jEjVLJZrJzaJKRfLcbtatDNFW9aAbBgn",
  "key22": "3uRBptvFazJewq4tM6KwbCqKStCpFxQKqiGdT2LzhPUYcM1or8EK3RkNLCHoUygxfeam5fsnwTzbHc8cknAdb6Te",
  "key23": "3JR3N8eLRjoPGemyKa3yfBTmPEo8wM3kJQiVmMAQFzZ8Bj9oPj8H7yrk6t3vwhwHbbz9uBXbmMyhNcVD7cndP9SW",
  "key24": "wMc6dPEwrvhpUpZqbpyCpAqat1q9VtUwGqv175GmNUmuhiszvw5Q1uj5u9uejyfxiTCvzXxHmkVHT21Y8KG7o5G",
  "key25": "2rbCmvo45bYSkLbN5XXDGx1Kn4r1Zj2zPsisZdxXxMBuUfhBLfbA4MQDtbdoodjPGUTG1pNZy7bWWaY3eDqgupZh",
  "key26": "5F5ST2T9sMXx1Tg53N6onX7qfi1XadGBcv8ox2i2TdTMH5xztdvEqwrQPRQqv2m5i8psdj8rFww4ozetASh4JyrD",
  "key27": "4KTMim3yYEhnb7xVqpmxRL3uqM8ZAs62MEfHtahDchC7ut82gxSJ4ounczmFiLbznXW8bvNeQpHot3pwvfcwZsWx",
  "key28": "3XtSk5rkTkhGiTaBrkqhLcocqNvqXsgnqijKQUHjy2wQtHCoJoRqVHYh5FnaAyenhLHeuFJAJPjZVxGp9tRMbGUT",
  "key29": "2f1ZFfSB2NJuFThXW4sxg2L3WStPfwXuGYJhDYkkycrTBYmk6GsWHJc1J8ggV1eApbPErNbLdFQF3mskqdDi7m7i",
  "key30": "3sNnuqwctCQEXFLagi5sC8s2JsRaW1augKbZ939ZCJbBgwD7zAPucwtyUFBdkcCtNZZENDHch8bFDzJaYDom5VWp",
  "key31": "5ZRkFbqqW7Sg4dXx5WHb4uRtz9K1gdRgLb8D1qM2zLSoNrqbbxdGxaSbvpqUcxhTegddeaeuY5kme93K8yMcJurF",
  "key32": "AuuDPFXDQDeKE9ANrnqa9LW9U9YyQK6MzJhfg7BjAZ21prLvyhaRgG6b4DMj385VWSofj4cQD3CqTCq9o8nxCrD",
  "key33": "4pvmmohw2B3aVxSAr9uPd5JtpV8brheAfJWRFxPDEuVxdmEVmN9PLXKLsVBnEUZwuropBr46Za2PmYLbchJUe1V8",
  "key34": "43QxyXthKMFx47tpHXAmNDSvNvLkZk9nPZtLjnXTxqpx2sX9gnNUgjxz6hHYAn8xVg6F7Jgu3P9hE7EgKGJuNKf4",
  "key35": "65k3XQ1Jp3raXegzJ6ArM5DBZP3YabPoxvNTnqVQQWXfbdHvu9FFQFAoDiimyJcHuKfqiqYX3HnWcmu3i4MYErUi",
  "key36": "2bkN4oHEQxvz65RA9LWTk8QbPD4JBuAYjMyNyeHNfrzqMKKVeucwm7oqKvjag4JzN6scCqktBDZgetmUWZekK7de",
  "key37": "4X5tKJ2kMCAk36HDdcxazHoQr2YedPkkeZ6wQcY8bbdEwXawkZQ9Y9toxjfYB1XKfVDGHFvd6h4siLNsEy7dgRg6",
  "key38": "3ShtZZKgiM7KCsSBURu7mzYvS92sYfHeBZkQKt5Jfgd7uxCmCRhbqh1776UuGBEGWMxrcwT2wfmgDiVGtZh57eT7",
  "key39": "37WoXpqjdqmpDfxJkdz6qPWg5s7kNgmN4eXFE6mFmA8SjCCwExSkinKx6dafM5XN5br6y925iZrXw3yN1mKV6gmE",
  "key40": "U2PpL7egYsXhmurfYeByRsiuzjeaAMGZnSi72F2BRwofCe3jVvReysdYj9hbZ76rr4nSPCFkhqD89kKH7teNucX",
  "key41": "53ZbJEBQBjz6vXCm8V2MXGyLBeCX8jVhPyCM58W7mZcGxPESYn2arKVPbRZgoF6KCpwMbwSUabR4rRyQix6aFfog",
  "key42": "kPKXxcHuPMxyktSBztE8D2BzgNf3L6UrJQNna4wjQ3ktrzj1FMojJfMHtffF81bMJ1RedLU89KhfKSxiQBLTh5r",
  "key43": "cn57c1RmF1kSEYoH8tvsH5Nop1DrasLHepbL3Gu3JrCgouL9K2TaRT7bDtXYzz9NeeKoWPChv4Z9HFAZoCNwyhP",
  "key44": "2uJnoAJEnDVcRtZSUHyZ2AWdRNKTgCurMgbPvMrpP3RjD4cC8w5CG3QPi6bkhnYqjBn85bd7QkVjVMCe2WdEnLe",
  "key45": "4gu6LdP32JkeLABHHHJhrwYSroo3GMLDJcztSnswbc54JYVJGKeBzpQDbWZLZop4JhuMW5z4ELmXmfS2WJyncfFY"
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
