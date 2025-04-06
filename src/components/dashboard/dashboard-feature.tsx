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
    "zCVJNoY5ixsUd44yRERtuP1J6q7XKnsmeMNWNwc2uBt5Te2isQrLnWG3oDJxQp4kpHxZDvLfvWyVTmLAvNtE9MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gJs6GJ2Z2AUYT6TL7cyP62KoEaecziC2PqmLv6T7exRMg4W6FVE5uz2vD9xeyy4LtkxXHVTrqhLNN2qxd39KADp",
  "key1": "4nHvYJc3f5ENoL2HRzuVXqXzf4M58EDRyBAm2Ff1h2xKK8CUK792652m9yoH496ifnctgMDum5LuxgsJxy2zHhrD",
  "key2": "3XCnDzb5KBgbYJeQX7QrBPPQ74sRHhezWbUbjmG5CiFeZKJosF37aoGBArqPGhCmFNazKj3GjigSerGYwczGXJwN",
  "key3": "55D8quBjJJ2w2o7sPqkvMruZno56sUdvvUtSCoh44xPksr3dXyFgZPF2JhBHmWdeCrXzhCyiB9Vm6sPDX3Kk7MZQ",
  "key4": "4BpSXfZwrYgchUH4bapttC8ff4LKakzLCAweiqXZueV9x4fc12GS48cvyeF9yUi2VKEqCtXXnCDY48S8m3KLnVgm",
  "key5": "2XTNwBSBztSqpYJaL34ZQ8VL2L22wmQ1Tth7D1QGSYhfTder2Q3Jc3Wm79aJUxFUrLtJpGMFKJQytf4xS7KkBp7o",
  "key6": "soMLQCthC4kPkmfuV3ZYDcTsXP1ULiTvjfG6EbSAJriPhbu3c8PFwUHEAdece6p7S8AP8SgP8cFskrvQp3nV8cp",
  "key7": "4Q9iorg9KwmFMgksHXywgdvHbJXeBs5Pu2rVQYsKpCYAwTkBuy6agURtDAryKnrvp47ynujR5XPAvbzBr3gxfydD",
  "key8": "3tdRPDipUMucyM57fYowxcAYStxp4csaJWZxeZQRpRtBweDa1bDw3o9Cw4K5qYEirLUd6QZWu46cWyQLUjj6DPoB",
  "key9": "2mdXjcuBxp8bk5Cu77mGt9xDgwTzDJ6tj421vw7hbfQ6eE1iJ4sM6YCrb3hy4rpZ1TgvnSVmj2kgSwcQBRfgXCJU",
  "key10": "456Xn9nccSb8JRzLxiLaBBKYqoXPiPwKfDGBQHF2z7XM5aTR1dV7gyido9rQ2oAsv43AeyxvCuvj23JDJLkY94S8",
  "key11": "4ABYnR3e2vrkHzyncaPi6758BQDe5wpsKWcx6w5CUf7JAC8DYPQa9zigLWYmukjzhEREGer81P1aCVqm2BzkWpdE",
  "key12": "4KAmq73Tj7qiQvEAKJQBi2G4aD5Kw57x7ZbxBBNKZNnp5vEMuw2qcTCnvd5gh9Qqmg9nHphpUkwEsUen9kKgkkf3",
  "key13": "5BgsnxhYisVKUKRmJMkpQhH167NYXqW4j666gDVRY3dSEQBg5F68xow83wn2h2VPf6ctwJFT4Q3AJ6WgPDN1fpfL",
  "key14": "HxL7WPoLJimjUiNebCXrJtgNdikxvmpRyJWuebiyHamFYBZvuqixHcX2xyZkE6j1k2NnPRTTRB8z7h24wYPt6Tq",
  "key15": "2wQfcEuaDFogNnjAZ7HnSrtMMFHGyAParKQ6CvG5LZkyPDTcSGqXJXQj9nxS2HQEPEt2GRjFYH1hr8La57qW63HL",
  "key16": "5pEouhL6FBFhw42EuCmRnhCMPA7vSXMYkhZgLwGPBUYVRD1iKMd57eDspjdND1ims41M6tgtHRg9TLWxXr8A9WAz",
  "key17": "dCYzTJug915yvtCLL5GFdLAahpYAT1DeFRYaU4qsRerBNix1TMxnHYJZLYNypLD5zvWrAzCfw3PwjEukKZfdZjF",
  "key18": "23Ewptx3pFpGrTUt7d86Cm3XC3eLmKNEUb6gmNHkrEmAFpQaDHuf1u7E8hRXvADZB19FVtbYr8LzmcFoPG2yvB9f",
  "key19": "3B3dUy4wFgEH7BPhNuBpXZBv7z9Za1h8B8GuM8bNeQR7uUUm1n1Xm46Dj91fef23GzockVbS9Rdrm8i9CTUUEjJh",
  "key20": "37h8qptAZ6jjCVCSd4KsqfABq4xkmtScFqQTRDp3ESdVdhadPioQa5LYdkugsYAuKVn5x6BKMhvqXP1iCNoGPm4n",
  "key21": "3Soh2bNU2MqbUJKGk4yk2RiEmfuU5KDN3WyqK6pQcnADk7fUKC9FR9qk6pGWwjqSJ9cfXFcoLNtJQXzwuMHza6vD",
  "key22": "4gdsLBQfMrBRzGcRcRgaDdCYMgp2TE4am3TxdDqufQ4iJpUVnLyg9iUjn3vr5mRZmZ3pd3RooM83zzpLjkkCyq8t",
  "key23": "62aHbA76Pv5G7WYPLmyYhJL9DtLfb6wYgP7Uy5zH6xniE7kXv6u4kLvCykJ2885wRHmJZJuqJ8wP4x46kJ6eApQJ",
  "key24": "zWZqMbEFwgbcNwz5JUy31ebBhKKoA6DzRyCo3GDNqPc69q3j77s9txNXXGTJVzdqtnyMX5m9YcDS4aeWRo46GRT",
  "key25": "4GgoxzzdxzLsGjxvGRyfcejxp8cXfcf2wAPjmgrqbdTX9RJAvrkFgQuxBj2wvsSpY3bD62E2HTx1DQApyRWwtJeB",
  "key26": "2iSs2eybaQsRbAPEZxQbDQRbhU6rfzrBvdJHwTRwMcNVFVao2N8W68Kmrqn2H4KMLiDHuUa7xwGfX7WKgmf2DkDz",
  "key27": "2EfbuVE3vojBKvJipqzkRvh24x56FnvMJcJ4ksYLssy9tmRj5xXfrJFEmDf4nrYwKkKuorsChHD1GySqZaQMaf8f",
  "key28": "4r91miUNFcEocSWQLzp4SXsQQEbz19QMgGfXAnH3isC9xJDnXwgo1cZMqSjdoNE2sEgw5MKnDuJjAwKR1BHUFDGN",
  "key29": "57teATEFGNBkSerB9VJpFjqiAw736GKBRPBFJ1xsjWXivhNLzRyURKsyaF4LFbUadjFdGNRFwgLws2GutcPpTHzU",
  "key30": "4GWHQxy4WQMoSGt86ZKwAa33i3dyFVbmqmEYVischiFHdPFgsbo87xbVfVgYMkroAsazmsF43RBehyQkkRv3wqRx",
  "key31": "3sHuDwf2Ger3qRCe25DcjDHWS9zXVaYrEcE5F1bCwSG2ftaZK4udpjU8t8GH3p7rsqgy5CtEGDev6Fb9QTuu5pps",
  "key32": "46zrpBBqhc2FEnVBPgXacVsxHTUqtbTwzL51h5fv2Q1fvmwcvDsKtvTbg9Vc8PE6rooAocP8n3UFmpFUnHAWCv5N",
  "key33": "3ZYbC9DGe5XhGDykXHdC47DnhUA6hpBWwupH8JoiG8AJ3eM2VFSwZiJsgyVF1N4dCYVNud7AjmdRWMNs8KfGy1eC",
  "key34": "4qNXGR2SyeSrYs73pLhF9pFapqqjA698ZqByVanGFU9xYajTjDhu6xM1uSvZPw7KKeQQ7pfn9mc4yU7JuLP2hFq8",
  "key35": "3vrKeXKU8JUTJCC9YyhEY8JBpkv7j5bXziS488z3Q6EhNSJRGUEUnw28yH3dofCZ2hATzmNiPHUwhNdhwn7P8kpY",
  "key36": "3VAYnCkYG5Lv8W9wK1i77t7rwWpTv9WtsuXEejrRQNBc4rTMJrruJxZZSxpePBC1bpEPZDiPAPGezwQKKQPYwhH",
  "key37": "4vJnj58fs2cKb3yCwnrixGTtPbSXYnDu5X96CX6wy9p97rye6VYpTiqNbZz6VK4Rb73yJfV1HhswXv8JuvAX9vkz",
  "key38": "5eUPZvkrKTLi8NK4ZiW2jA1KWdbbAExGWSCBYQ2eVj3Hvo4cQsomWM9KnjCMyyAa92XTbcoK69bpuoxcMfuY6ab3",
  "key39": "gypU5HoEGrH3BX72hNTtipCrp5hkZrS5hKK93B3hZLN5a9YxoS7YpKZMnU1MEpYxVaiUTwSBLHEy4pByxjH3QJ8",
  "key40": "4iAHXSpGVUQ6VvMB9mezrUyk1UxjahdT9RZYW1m6zhqgJNAxx5xYE4g3MMGwceU2jVJNczNVBnkBJiYPqj3x3kwW",
  "key41": "SVWdaNqQcHWp5hYKMr1AnWtBsa1PuZ39JyA8uCUgXDDpyQNmXcyDzdmDvLxPSiryHnEPhaAwh4P9gaU6MLGPBsh",
  "key42": "ifhJvDkyWWP1FHfvS9V1omoEP37tFe6zeyjx8CLRuFzaTrHgTbKoD8yb2KF3o19EjSsJSVVcYwfxrbGwkrJtXqB",
  "key43": "2xtoQhBTG8L7YzGqCXePiKqvJ7mBKaALjrs6eauKqqKQuCsjxygTAVQrAvViQTLKUbvXgMZNTth7hqBejDMHATjy",
  "key44": "47PBEMoWX6Bhap5CWw6y6Xy341hfj1ifN31P6SjMPAvZ7KwtLHH2w6ea3dQ4KLzMUzdMv1CsyUErY3dhWFQfBpvV",
  "key45": "475KeFf1MpCrYkMcxwg8DxmTQgwpC6Gocq3hkda1gGUCMMQpjhfjC9kYSzrX2YrBTtRDmzpY9M7NAddf6AyAX6g8",
  "key46": "mM28T52XCJC2iVCePw7Ja9CGjjURpDa5yP43pNNnrWJcECtZERq16e7qKwJY3PduugdzAn6EoAPCRcWCa2Mp2y1",
  "key47": "5C3YBBfNNfgrHwULJXh8ykcwn1JHyBSrvVwxG53Sv6hQheBc8dMrKV2v9ufiXL2AxEZHPDmkHpDLAAHtgqH8RmF6",
  "key48": "213THd8juCi3MRgqbvnUStBK7cixiFNwMavUVtocLH98mdwcjawSrLVsVt2DUgcBEjGNSGXgi61BZZw7h6hkaadA",
  "key49": "4j9y6f11zB2BsukW5HcBipzKc1Xws3JGUSKXHHSJqsq8Ap1fVT3PJgkmNrAHPyx2Yo4pN6tA8kAQwR3p9HLmcaER"
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
