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
    "3C8j9hn3FiVMBCQTtgvJgTFt1PDuHtAmgRKCioJxoZfAU7gP7vwMfuEh6qsC2AQ5gQK4Np5B67ceFk9fqpGVGSi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQ6JpPMBqkTkBwAzAouXT3T6XtqMunKaCEtKiJZ4pe9SCLJ5VJC96WKxs7KiB9oYHKWDhmQW29YLKUXjhyXEqq8",
  "key1": "5JYnkGRWEjCcNrCpQ1CDHpy1SaTZR5KEPaQpwECuqJfTEdbqaoGkQ4QScgpP5gEHgSYW7RCC2tUu1S4DHU6K16BK",
  "key2": "kEdzZXZtXPgKeq5tKXz7Fvj5Up3BGQFdz59AkQnJfiF44prwq8jFj8PKMTcm8Q2w8oKtuQs97bGazy7fnvhKNGz",
  "key3": "5UhWShhDjyCBkeg5PygLRpsr3dLgzKfr9HYixAGEvMyw5JjGPY8WzsKj6virAJDvYf2L88f7A992PUeaa6nQLqsY",
  "key4": "38Xq4XM2FuqSufx2S4m9Te5znfkLeNHXtYvSugh8yJZEZFDeQ2hH6Ym8H57TbmezUP5cKYmkPFZ7eLUiNdnWioTb",
  "key5": "4iqu6YTkA5C7KTMvfwd17hadoW8vs6E52EeSSMoqkqG7f4HpMc3wnH9wEBGwVhc7o1Kks6GLn4UXox73BFtNe4PG",
  "key6": "2XyjDfRybJwirD9GsDRUemNrTohgXosxMXz9sGrmEfLfVmwJbvww5RKLFdtM1fTHzByGRzraxqiGsAnxfvwnwfoz",
  "key7": "ccxCvjg4W4Cpb5smX9gGZrBhzLssv8swDp8uWTo8gqKAjpT9x3sU7KNoV7TS96sZjxfy46Uq3LKkYEqfCbP1hBE",
  "key8": "3p7yz6eLVgUEt1bR16x5ooA9n3MEsjaKcb2Sni6n74VwseTYzi6Jsyhq6cZnmg6w2yxiCUTcwYU21fD1T5FmmFP1",
  "key9": "oisTXUMteY2pGu9xwNxKYM2pk1qLuLoaSSvLqFsLCM2sTCYEHtpsyGGrFTCyyHjZAxBDdCBw5Fn3ePXWstTHGrq",
  "key10": "5mWFXeFVn89ZXejF8Xb4GZgZdTHfLtuwrRegyEaMbyyHUZjNFV5ptFJtwMyGdWnHGJr9HB4a95zEMxsGCMa4KFP9",
  "key11": "368e6qiZmcULgFSs87nad9M6p8fpBX9KsCAQhmR6hbGG24E75Q2KPB8RHUcP4cTdx1zdW82bM6uicvEmToqJyUac",
  "key12": "wVwYYrhb8Dd7gr2fYcVGFQqsiQpHL6xkeFjU1GM3GDWpKG4N3PMPfquGFn95K2WmZwRgrcZKB6BJbaskYQyYFmQ",
  "key13": "3rXjESdi7aVYVQfEyXTvmnjt3xb39SBZNnTBbmkeF4gm9fQ7dFiQewF1uoRRt467FFF9ogBftafDYoaLZVUjzB8J",
  "key14": "59NH9ejczcuoMAgtCmVVpxso74ZTtmUTFt2hzB7xsgZMHRAQixFRr9j2d96kqr811cpLchAAdBq4FFT89MDBweaJ",
  "key15": "5XQkJp1kxVHCg56tQ3BDknAWjcxTJj5FDd8sBH6mH7mktdzbuS4mG5mEkAcetAisygmGpURnrWuK4ckTxx8Y4v7t",
  "key16": "26GuCfD8mv9pnccTLnzyB4gJbGJA8TNZGpsnjUkJyxaEUCLwKeAwNHDxpncjQqKJoutLiTnYxXk6FRRP7BSE6nbf",
  "key17": "2gz44DMQvJZTFdJUTX2aRyWb1NSQGSzWxkqBzFnX4xaRPjcdZHfnA6EKQGQopKX9XFY8DpTfmtRYT9Zx9PD4C973",
  "key18": "4zkJtDxW8xVWDFpnPb7JmDKxiRE5V1djBovqp6cM9Ey8CvENY3Q6E1ZVTxcEg1cdLeACG9UPnn1LSdEakvWW6cwE",
  "key19": "3FLc9Xbytz95g5joDhyYDvDWqxX3ZHB1pFxfBRAZLu3h7SVapaxUsxcpw9vzpJYt1vyrAnnZcTmm3CtLXcUH2pub",
  "key20": "4npDC83oAPQjj4ZAKpD51vKENXGpRhvZiphqiHP2t8cRbR6beABSc3B91FsP4jpAGZGXw17wUVvvWawywAYALv55",
  "key21": "3qEzPEwPU3Qa6bArnonEjrLYpKsHY19KaTHt5hM7bpGSJ5cLMKEZbY35LJu2X2i1fJ2CT6d3G3SqmQMeNyvBTJ8T",
  "key22": "4nNAob34jL3UP1xk5BoNXWw3kbqpJuu3khzTBHsfZUy23H4EBGK5dCmJ9cHcHG5DLody1xPxE8vSdHbCuH66tSXJ",
  "key23": "XWgRpJAy1FChJAbkGt4dPU1bYArGuE7PgbNdqmQeiGwiGyf5C3sKv7XmQ7yeBQL7eeT9TQ4fwisdfeReeo97ohX",
  "key24": "4AdwSYvpAsKuWmMPjgWJehY3q24yUJLiWMj1yCfNyz3Tc8no3ZzBquByKjgz2XaBEoJ3Tq1zex9dy4aoo5Y2DaXA",
  "key25": "4m814mMxcqNfpio8wwH5kCN6BHjQ1bMBc6tj4NgVTzGVibaVRRZwdYRgRJ7Uic59kZrZEHbUSbDsLNRRENa3J5yG",
  "key26": "5SmV5QFxeZFeBhqBG5JfJDnw6ANKSFdNwWFM7GA3ki4ytsG7SRDV1MDLYjBerGbRNnsGrLsTTwcnm433av9SJX7h",
  "key27": "5arn6DDsxMucQeHRr8JWmf8C8U51ZNEKvqNYe4uvvhFyPktTzEBHsa671jsGLJguBrg55xgFxsRQpQkyT1GBD36G",
  "key28": "44iYdH8jGWiUsWvGE2NHZhQkscxAWfgQHjPeRckFHNGDTUn4xYSyHKj82CsWDQZEgzDL7J1uFYB6Y8hDdqpA1Qkh",
  "key29": "2FXxGFD44oWJGMNb7ho2JsvFPqgw3g7De76qFN6yA48Yyam9gwY9zabjQj5TkBUeWUTmPhfur5i4sYhc4n3xB9DN",
  "key30": "4ZkaHK6DAN8iSc2dGqosrtxMNBpEWm1spt2VsoHiH1L4hG6Pki6z29V4jCTDJb2un7oEgFbm3BF82Z2bhtPkhAje",
  "key31": "5sYBua4889CekyJQxghQaRPBHWyizmRnGbnLBCQjMueJwjkrcs2ef3kfxsshbEakcrN5EVtuatgsc54XhmeahYrJ",
  "key32": "3u5A1jQwdHc2Xyw2b6kKkSS2DXGJTp8cCC8BA83J36VbcNfNLqcmqMpdXVNWAkbT8rx3ytigCMmkdh3daP5ccJ9P",
  "key33": "2ef7QQqZcxPhwrh2Tfn6ZnkjGhxeuSNmzJHYH6YrUtznsvi73rXEdtXgnwHLBki3t4ajHerCj9HYUcTDq9kuU3DJ",
  "key34": "3AWgfPKTsrPEM8sogc1w912Y1bgTrwevxmW7XFJHzpqPmF76ZB839f8LxY5Tzyie1FxWrBULx4hK2HHkggZoWCF2",
  "key35": "wxTUJsbH1HuKc9T5Yft2u4qY67F7hMVcy4zH1XPqyajMa2RMoF7C4MK3HSjkM4pE5Kf8nG2AprdGxFEQ4hqz6dM",
  "key36": "4xa4GXabVkecH63FxVKwKti7GE78gnoP2pM4qYTRJJXNytzh2h9Rt2QU4E5kJn34gH6m7d5reYfvdCJuFRHJp286",
  "key37": "5UJTEVUzr8qbT8voJ5GNsofXZzhTuFDQZBRdbkvkHjqf3c2hADYmofRnWEQw7Vy4gdSuWupFCahAtFhprhzfqHT1",
  "key38": "WDXWxPzkjhsKpxk9VubXnmaZPvbyCrLxwF6Q6ZFKSQViDwfu1xrhR96Ku79S594rXMuBiJEQ5SWx7LtWAz15DAy",
  "key39": "3GXvDsPfaxJmnPuyR2hoG8DYThec81Ki1GrAxyNMEWWepr9rteqENdpKWBqFF6o52A9UPt9HSPEsASd96HjMFjuZ",
  "key40": "46EK1rmzMKhuuexELyW9sX9tEGCPaHWxzeeQuX1UxUYp9ZQeMarCRRNnvXFvaEGnh4wwbPqMNakZPNFsTJzBmx3G",
  "key41": "4gdyddxU6YvUjfjbdGPUjetJP4sffVwMzVtJrxe5a8dAKXjsr54tyxPjtpr6Yj6NTZux6nEVYPJ6xYAs1aqibhFv",
  "key42": "62VUzgjKtptgWyLXpapmP4x6AoqUbVRwWYV8m9s4eYab541eqMcfvh8ucUx5zUCTVjvfqNtnbsmTEpYCSy7GuapA",
  "key43": "3mJRPtcNHSKH19ZdpQ8VDm2qeXKQtHNxg2E57sNzyy8jxRrf2CHdhhKKUoBu8RYSXHi5BCXFBiqLHkAabNtPFAC7",
  "key44": "3EYSUpvxHTYzhGNFpBQ9T77eWyyRMsFDCquYHerSzAfN7jnjumdD1dycVnoWCB8G4X1YWrSHfnaJudbkWFzzPbck",
  "key45": "4Kjya6fthfKHXqeMdh1xhZi4qQj25Gu7FcBAA1LPiyR44UFYJQph5DqMBryRFtG3JKSqfJcuGBeTy4CHtcFXfMD6",
  "key46": "58kh3tMGvzZa3sSYUcNuHJa8DkNcEc46kYoBToYwXXGAyuDebLdLf8hgdE4Bdhmjq3uERnneZV7fmvtkzezRUaj2",
  "key47": "2gANbhPBspcaA5Aw4hPBHETjNa1M5v7eCSZjiSYhLCJ8cueJCe7GfmpBGUTbyxNcguV9hXjLwoQgTwhgm2pG1ubQ"
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
