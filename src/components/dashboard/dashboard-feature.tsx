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
    "44n6kRG6KSTHGaHc1oJkPSVaiFqzk6QiVNqxsW5vmjXiXCem8pLrV7Z1bpuhHHxTYxVycjEocS7XHzFBgWXUg6ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UwLF6MUHXjE5ptEfqoxXdcbgVxnXLkA9LUDorq2H53z6Thr6yn2VULBq8YUhoRPmi9HjRhPRtdPqMicDSRZZJLp",
  "key1": "5bW7LW2yFqdPKyog78LjPzVy4BbhiXLkir72qqmW5JdBnJ4JbJHnB5vA16iMp2237upykaoj6BnxgJkdDkt7Q4tX",
  "key2": "HAAuBx5cWDpJSTEUV6CnNrTPKn8jSvHnWX7Upgz19G123g8nchWUgjCXdwjYVsBqwdN8ezRNFbcipHubcmCzFkq",
  "key3": "2gpCH1sNNv4vJEmDWtVpqpuKGu47pxAvFjcH2GA5WcjyMwfmoPYwtvqDn4GdcSW9XeWhfDJbM9wmFWvcuGHJT455",
  "key4": "2rGJVK8uh8sRKZh3FvMo173NWd7SkYabLskACnH5pXaFWBzqiAt1UmJGqaTVSJrigmjeq9nJWhFw5tGvHGiR7zs2",
  "key5": "554b9q7SCitw8GS26UMJ9pCskJg94kx14BNoxV1996TkLxdoJ3HQu9ekFgcwosNNW6JZQytnur3UVVj4Dbr3EuBt",
  "key6": "2kmk9uqVd64qwHMKVwQC2vUzSUBCgkwtdXmtE7oCWKvdLtXSkgqXKaxCSS4euf2s3JtFitQEot2Ph2mNmKqAFw5A",
  "key7": "4cyPzCdpPAyXB1mc91czQynS9kwZKpS7p3BuiFD1dkRCCE69EB1k7R2fTQvoVQpkPHe9dTJtXogMZpmQHCqfsAQe",
  "key8": "4RtJ3GgQccC9cECvsxwBGq2168BFR2ZyqWEFQRKBmCV84ybLacjmLeRsiUqzFNdhXTEqmU8LmQs75a4W7th7BrDr",
  "key9": "rXiCorEyB8qAj4AZfWMeDSF5ue55FmzsywNwHZYEAKBPKUQHvR9J5mYfcV9mx7E89r7Wt98XBT6vn8m71DQPmsY",
  "key10": "4YGUW5NzaSBeqGfFgiAiAy2TL4bbi66fthfD483avnQoJZiJ2hehq6RDf7PhBiApHsYN5Mnn8GaW8rPZvx7mTW9H",
  "key11": "3PcAb2jBRw6Du1WYydaHYtNXdMibNUWoQz65XP2S7p3SEHAgcBdVnZLKdRtVtKqZNHdqo1xwyHxxVSCvzzo1pNJp",
  "key12": "2LPrFeDNT8osuxDwN3VzcMUtoNW4RhuXiqDFVUqm8NufH1ViYkPPTQqLh1ozCKAztrn4PsbrdaxbzeiCTsJtqFsz",
  "key13": "3zassS5gBFZ1Cs6tHs4wn4MMrcvMoR5Fb4BGsJ858zB1BWuFfELFThTPNQLjZTcBp9MVGH2VTrbLWERBisVFYacR",
  "key14": "5X5n81v99yvBd1v9KeG6bUxKZChYbYV1X2uJE4oJdjpaFVd3Jzp5biaDuXPefgCsRt5yK1kZFzgaUQLp9zgSF2yA",
  "key15": "4co6pXVELBk9HE6TbFP1RPXpLtPAq5UKNgqM1eb31BmDPwi2wBno8gjqmmBA2tm829We5Hej48R2Pzo1Tto8fMeJ",
  "key16": "1HDyKaYDpdjN4EPUbkULu9xxvtJYeAQX2yrNa57kc31vMKQRivawBmNbs7DmyDRrYRE4QS7fUPRCR9s4kLNEfmL",
  "key17": "59g3hC3bLpnxhWLpdMfdrEEgjtzfR6EwVcDcSjoZixNMk31NxGf7dT76j5HnAmgpHcNsSBtfGsB1HeqkYReJM8JB",
  "key18": "54A936AC7VMu2vTv55b1KW7c23JBTx6JeuD4dwiivqinL9G2osYZykZXc2XEtECnhfZr5HvG7fDNaS8tw31dkhj5",
  "key19": "5kFh714D8gKGSGvSfrRZevEqFjU6D4tpvhbLiXAWub9UZ2UuEyFnFngbiHowxTR2tmE215pfVw1oxybVTovtmhPv",
  "key20": "61tKXVXhTFANJ7Ruq9MVtFaizqHWgftHwmpPs9ZjZEZeh54F6nrD59VwWYfmVQxXpF9PxbTj3QTvvZVMfmtZfK41",
  "key21": "3ovtK4z5NiAUNkqUvYdG6sExxAY4EZFF734xsTFM8aEg5R9f9iKSRpiAW6iYZXJ5mLZAc5uoaKX2q5Y7rC2jsg1s",
  "key22": "4P17CJNLeHnPBGZHJgcFsSw92hq67TEXwrg4tMsei8k6G2z43JV48CduR8J1BCe4JWvuQCZs9yK2N82BF8hirkVR",
  "key23": "2ZrZXNXXzMWRNRKen5HBh5jRxooW5ZkA81ZZjm7iMFE7vAgWHtwJQQqVgmeaxyXzKEYU2qj1BqXWE68tQsmPaeLN",
  "key24": "2SvyqHGeyyqQVoPPFHSUdy6xWUi5ex6XHEtgRwoWCigBov45Kv4AZQWoJB1rz3FCcmqbyq7UhqhNyoibZa3kmk3q",
  "key25": "5wP1sn6sX9gPqtUerQiCYHQYDNcXRjA9fBAohD1HP8aNpVxrpN1Vy3RTAFbAjd6Kox8VER87GkghzozuXbnGaYgd",
  "key26": "N9wLVReoG87Hu8m8JHXboGAaBXb5Tst2P5uXKFytKFbbcAvTmpi14ksn8n61dLpw6suQ6SD3Ti9MdKzAWU8Tivo",
  "key27": "3PBZiS56YnceowNcHzR84UdFxL8VU2v9pTxXv9kA75BMzUBaZ95tUFPouD2d6pr8P4bHMVp7d46zbDLQc8vbuJXG",
  "key28": "3srkfNXTCAE9GtniB396KRo7SUE4bJDGqngC6RAorCNL6VKBRGTTr6LJ62BA2P9uPdvntn7nkoRAmrQoxjPnzbTz",
  "key29": "2PzrT4u1X7QJdhtjwTLKewroUKVwKRiqM8NAXMpw7n47WvYJMwxZo8WvxmjB9TwAUx3niJXcLmkjUa7cmz7fr5kE",
  "key30": "4exfPh4U5xNVjLFB7fy9Uyj7dvBnsH3dC8BgEqMKhbiBbMRcBrrt5yqw1zdpgWqCguVGuLSgv1Xcb4hYjy1DiXkh",
  "key31": "4WQHmxK9na3VAtDdCoBe71T8WgpiaeS5abVwMpQQY9UZDkCGaYjJJ5yap8VLPhAo9S44Mpe36MZy7JjNYCnmra8Q",
  "key32": "63Kvmqv6WgJ47mLtNnjbYPydgn2av3jMNascrXhKGo87pWxBL2KN3koSm8dGFZjLbDhm8WjdPixWVZwfAPPU59ic",
  "key33": "41od7cm7E44RBXSchWsfPbaK41iz1ra8CAdqWF5kMDh31EsRYow8Tcun4ZS7cmCZFLgZJKHNzdVHejDkeqGFA5LA",
  "key34": "3iRmkeZ5SRqL34HoiayqfZY3KYt9J6Ha5uUj18gEzqvJiobxVAcgafWRGWDKtsXD66sUMcG3xNbbrMihTGwNUkwu",
  "key35": "aMu1pZvyidbfTb9U7nNGRiRXvFXJ61Ma9heqdpgGajwMtUnMdFhhG7cC8oNUEtfSbhY7FjVgxYXtcqKtiRbBwwY",
  "key36": "5nATtWL7UvfgtWPQLQsfqEweM8JAQSW92BDni2pgkdqTK6JU1ftfyy9UkCbbzXbDVUdAKZvhPJvHUeddWtJUC6V2",
  "key37": "jR5YnXrQsgGsznRiGWFnfEnojvwopverxkNsCqhQ3deTDwfaZL2oy6XZecoeReGkuNDRCC4zY5bBzZRcGKR8DDk",
  "key38": "5WwRCV4Qa3efk1CvoYTMSDb6n1pmEg851uByhojcVgEKdD9D8p8owcYFCYN8hGnX2Ma3dzJcKR1iTn8or5XxT6Hp",
  "key39": "64icX4E1VNSiSACEFsHiRPREpyPtRxzupvy4Vdxhw2HwjvNGCDdBPdSJRgrHGfrvoAc3iEy8FikqB3aUvd8YiaRi",
  "key40": "DLidmDP2W5sVrMrMTHrDzPaWV2HBrG6Stw4efZLkeLE5eyEwQCufQh46usUhkcWKs9CyEdhJedcoMmL29WgRAUK"
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
