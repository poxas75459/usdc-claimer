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
    "4uwUHuM4ELvD4C2gYEMveBtoQuSc24mUBsmmduF6dJJxoMWnjSER3BrRiLZ4LU55YvkNbVvpMZco9fADrgtNvaDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TkbtEXpmRQRaU1pjZVWYpGLDJXTxHKQkSYeMRNXP4hutBvNEkeiXWgZoz14wApvMXP4g91AAJgDafNeMi6gQK3",
  "key1": "2V2sUUKmkjiUrm31qVKBjMpm6Qkoj1BJGCQhEvc95QEASjuMjoYqEyvbSc7VCmfFMq4DFciekcR1WHrcNEFsvRDQ",
  "key2": "3dhxGJkBvFd7THicpQyghJz3tQNkyCysLvhrgAbwC98MvbqepBYf1J2vqzYz584ADFJHDsmUMU6dhkyxAZREUohx",
  "key3": "6rR8VeHnvc4vEgv6wmsicRGxHnZ3SMhnHGXxuAxHQYHHmiKMWKrqSo7JrC7nvTdg2FJxAPM59h8oJhyctig6aBd",
  "key4": "5N8mQxFG7x8r9aNK486g2Q71UN82T8n2rH3LY7QNoeDK5vz2zqDDTAGyf6ZVQv47Sxt1qnkyhmE9VvN8b5ZTttML",
  "key5": "2hkEWiPbTa8cRT8HWsAZMv72G42h7JaWr7roWLNUHFEuv3wSKzszs1oskH9ZfAbk77YCJaA37mvoapuQG3Lcxdrv",
  "key6": "2SL12fdzi9uEr9vdRep4EBDwJTw21nbsq8pcLoTTDaPLyEox1RhQRwNyEdAkPounJZDEJVHUKBnjf74dKG4U4ME1",
  "key7": "4oUSbcFWpggxXqgwTkMPTMEwwgEe5jiLkqtW2xh7HobCSskMxrY1dVqzj92EfKVnbPwqS6oaLWwAyYyCSnQy2wqV",
  "key8": "4FmWqa6kkUTMF5YxvesLDeheTubaa8pHH5NUUdDgwCxiZhKLfpb2p6DbevAZVXYQKHHQe7jFNJ6kJK8J2wWXybkV",
  "key9": "ioUJiajp4KoowhKYwD4YYKvso19YTJUmNSxEjbk118YaWwtC1k7e9b42qcVjXUXyMd5NRQ5SBpKEGzaaKzcEAVS",
  "key10": "5ssS6DWzqf56Mhr8x1UUyhY6ZzXmAHWDZhPbUEHr8Mri1RTFhusvV6qpPDvQQntme4ks6azu466Bd98cyb1brNKw",
  "key11": "5M8ZaboB5nrLCZV3uxX3yrkmn5JgDLpN7JVFCGda55ct7z5wyxgayKTDTX7eAGemoi7rAa4SW9DegVWZjX2YhP4T",
  "key12": "syHqmx9cXrLoyA5m5nHyYe1AGXYSL1Dy8YLLTQz1nhTqmuhPqR99FgARuxSg9Brv5t2aiAnqcmAy82r4Xi9ooMu",
  "key13": "5Vj3Ef27cTkDdehx4ycNA3t8Emnb2TUW4c9Mr8yuq71qGCGPCw2uSoCBZ1ih3tDahhSz6bXu8Nd1PuCPf1d2S38",
  "key14": "4DgzCjNabdNCiULJJE4kCuiWYdCvNUeBW7vDUk3QqTRBRpTxg3Q6xYecTPSDMYsFMxkzJfMVpELpCFWUPujjmMw",
  "key15": "56YqJ97A98V5cW5N2Y78942W6xyJEMNkB6uvWSjjHnB7FqKqtZoEKX6BAsA7cP2PQYDwxhtFJ88ieWe372kXW9KZ",
  "key16": "5Q9iEcG548nE3WaZMbafhiEEsvFEkBBWbTxAeXfC6sGtASk6q3dkgrmwEhjUaXtciBP27k1usmfp2ZUzQ5Rzq4Nq",
  "key17": "5M7tyUM2dW6ePKtiSqkNVoLVRqMCue5ycHYbesxHoUg29JSDGEU6nCoY2cDbZ6fkms5jrcTep8AcRNuNayj91qyS",
  "key18": "3aK5cfQ5mmaq64LgzUPwU18KPCMMXtb5zvqxQ7m1KjNgKcy3NUcdFRVLJAA4ZeHVtzjFwwBfgzsSFP8jhusHLQuR",
  "key19": "3UybPJDHWwvkFaySuQwK7yx5fFmoVwoNio9nGPcYRgZotAtXqgDHEdDcuwMCkR4QMis5SboCB2U7LbJm58SsPXcy",
  "key20": "jCrkU8iU1cSHBSMGVbS727GY2ckELUUSNvnakXLiLHMWrxBzMveT3xhwDFsT5zS2cmcgPsR1aabuHGVgzZxGcsF",
  "key21": "3XWrpvPs3vyG3g31F37M1ALfzdRnMrMnnCTxRNxDhEL3XTBVRFWSKxqetzJRYVZgo29evJeVF1Qy2a968YXKD99P",
  "key22": "XRf3cQuMLKa58GvtrNeNxXnVNpK4ntLUMvxko1TbHyymisEZyfPRBoRt4puWFvUYEFYwD3PuPXnR3MFTHmANAgU",
  "key23": "nydi8518r3Uxe9nqm8iwFyQvt1TadDSH7QG61ke1EA1di1XB6GxjwdSwrPataCCWXTtqgbS9gNQqoRQNySU3qv6",
  "key24": "37dpeumhcuePs3kbcsJryVFegJ5D5b6Pbjk3rWQ1UiHSdeWTcYqUfM7d5xqqEENCJnQmSXkKn1dnRQSUbBSHY9NK",
  "key25": "2EkhCLYMKXn7HxwPCLkJhB9jG135W2kNmn4aJGdS8BQntumi3PtFuD9vQaDBnueFDBoriRTXNNzsTyrPhrn54APf",
  "key26": "4ErJhqfGznNvDJRYehsfJCb39QwZeK4DGFpyHnaD3FRn7Fq5vMnkf5N2NSvGzB7tXzHKjNU9jKUMsdDZC6nX18qp",
  "key27": "3T6YUfKLwPWaXPP9W8nnCaaEZ1rHHurHSXs6RA8GNRbZScFWcjz27GddHg59EwbDe4VFV3anfKdcHEefVRuGBPe5",
  "key28": "5ZXZN2aX8bnLc6GBzj85QHPDcwbGyzYkPxncEgZeqgALiZcQmLZTPyrzvN7JTJf723uAwyLz7gRt4MNJHM11b1zK",
  "key29": "m7neBw86bdFi7s6duUwMkqZRS5hXcokEgydaJfxiDfX2c67pAL7CbnK4sNimyafJS83MvL8h7G88F64QnvegVhW",
  "key30": "5F6auBf8Dhg9DdfEYyKK1ERnPd6CbcB6q15DsA9af8VWZaxrY2wNa2BfiiF8SR2ZJvhtgNPUK1SHCA1FCZt7ETbn",
  "key31": "41ef8QqMo2ZKVJhXwPu8NiNfpuvWZKffmSy8owuVDGYCkVURgsi7bszJRS65ZXA2rn6y3MV2qSXUcHhHXUquqa8h"
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
