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
    "4kd1Ms99A2WusnZshCZ8Dznzt8JCEMwddp4YKpF66H7wDWHNAzBt1zJ7ZPes5miCVX5wgFStfPmBtsZK4uF9Q5WT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bfNjDwck7NeUMseSQPZnHPbezucL7ti5weaiCorKzaFfz93MEwQuLkJezEuW8GZXVw6Xq9cQWZytiMLvfyH2LvE",
  "key1": "5ryaicDMryGrpNiPP239rRmttrnbHh4EzqauXdjnYCjCWtYK1x3Gso5HDAUHN2ZpZhaS5S5qAY7kuo6u95kspkEU",
  "key2": "4tE3EwJnP6eTTjJ3nvfcboGh7LNrT64xv1dde2x6k9S6oqidu8AmHs4RL1qwr75ivNGw31PFrVJs9639HjNeLrp9",
  "key3": "41ZC9KYtS5LKh929DMcsuKHm6W2w1YuzCikWogh4WBPmCU4vqCMduv5TvqRGKEzYFj3w7L9ta1Vr8dJx1oVbaXRS",
  "key4": "Mv4UB9PKWCK9qD3fTqhud51UFSkKQ2oongoWwSMxogzf2gBEg9wbPs964B13B56shZ7XCzJoZbeQMP7Sw1b3HiT",
  "key5": "4YTqTek1M3gquwfyQ8u351DcvsVq4x8t6ez15AhrJrf6oW4mWeaDwbaRKFQ9xeBPMmdgW8aHfqhVUS8gRghgvzMq",
  "key6": "2t4iqnyNAdYoFp7wBjwLduS5P938xahSH6jubsAKQjAeCALeszrrvHXoh3Ub4hsBRdi3eP6QqkqgwVhjH3xrzZnd",
  "key7": "2jUAUYdo9t4C8HtadCrbXrwrA6VupDhTNkU8Txp7Fxp3bTEyBeksHUgnoydZunf3okZ4XCGWdMa3RmdJnCHaMudY",
  "key8": "3wZb8KPUJ34GNqzfK7b4fhgdDrRHLS5HTqAhNUN1MHp7jfzcrmxaJncYVaKi8o7qxtdz4eHfkr3d2VRkYU3sGqQz",
  "key9": "3gf47BTdUP3MPHsVAXw8mfyRHPtVnsunhbb9jQBQKD4Z6QS8VHaVfg7wPS549Zv9T7kizeqj1gnqAiaNBQ1eCgJH",
  "key10": "25bJttLQaqk78orfaCWtqpDngHqTNMaDS5ztjQarPiziomVSeAzDr9jyPEEGbYxSafm2eJwwzuNqyQLJLWW8VkHJ",
  "key11": "4GY3Lf7FSMkReLiEAJSmYv7KgMfb8KTyJSZLHdCcfXuFhMTNaCo5aj5sSKm4wzH1MZKV2LaJcNWJDnuJ3PSS8pby",
  "key12": "5w5XUbMBwVuRPfZEs1FmdUWEzATRnndN64RqYBAS1eXqnmy3CkXXW4dBqdKn6GybdqFAJtmLCdvZs98BTaPPXctX",
  "key13": "5XcwEDgSV4BvUyUqX9DtGzG47vZzGgZWu2zjMyLjjMusgop4BXawtLNZkGVPikiYrRZLqArbDUKt4tc5f9C3s3gy",
  "key14": "hqY2W4tMZ9fLBiqF3fPur9gq47DuvhnpFjz6RRXzsAENb4WnJHHcbUtDqU4TEnCZEXRnLLiGyj3kcGtC1PBbJie",
  "key15": "41QM8f9F4HngurejNvRiBXeb4737cK9TEbb5BMetS9q8EecqUgx4cjVnLFMVWeDHZfsACZYLLHsSpKpAdLRkkhv1",
  "key16": "49eEfFpiN1kmf7gXbVqfpjFkpxQ2gzKaCbrDiLsrrCKZwPj3BMUd1vX5CXoNsQBJoHaM4AFYyt6S2ndCcudBmQoA",
  "key17": "CUjB4P6BkYRSGuMf85GfckQoJ8SJsRdU7uaLcoyoC72kwDe3NhDWodMatQp7PUEYMHyrRSVUgYp4mABxV1r5CCT",
  "key18": "27JwUSzeUoz4NWztnyXGP5gyAZkTf7cAUmz3meUwwZ4BTQuWuC95HnPDhX86hK4amwgzkktxTLF6AKi1dA4th8TL",
  "key19": "3yfKvDXWwV7K3zmMK9skrzg6hVhm8Nio7wtLPpMbA8euAdQaXGnYSkykKyZtbV3XL4hoqmTEcWkNV9CYvTy2rCTS",
  "key20": "1BLyn72KKESH92fTEBHMjUsJob168Fm18RPVHoaE2eRpiG74RPHyUmoRrp9QNDScRQq9VriqWVuwKjNZ6bKsMPX",
  "key21": "6oEBCunn97sNtpWS9uCipxdLJB1Ko98AcmHz8Ygj3Dp4mvLrUwAakE4ad83RsftnXX1LR92JXhh18tmyqUYxp67",
  "key22": "3cerzLbz1Ks14udih8Cr26aWrL66XTn2RgrUzbpP8XUYDTzyhctGQu43AydA4zWFwE5yMhngaPaGMC2V86v88R19",
  "key23": "2ptR3rQkB8LgWRqA4sVR3G1xyeiTBr36wZtHTfGwnKVQXWu7sr8Zv9dH3eAZ9YKyuMyC6G7ps1jmyZGHTZ6N6526",
  "key24": "2wb69QnsqZL3P2UYwMEN8up6DjBpATmYdxahJuweJuaqjo9WcopevCoe1JSnYLNoRU5FrWCFmpJAzPgSTFfW9DQ3",
  "key25": "52jLZW4eftvGuquxkBWio3AxWC5bZwMMbNna2ND2KrH8YFirq1wGeGDyECANDJEGK68xoAJQx87fwkjH1nnuV56T",
  "key26": "66dfJLx2FzKZqrPX3axwXVMV5bdZWFcinBEwRct2msMXBTRsCpNAGb9NHre27ffmcwFYrXpfLpKK7ypRocgVM3x7",
  "key27": "2EzmGf2LMb3o8xgrjCUjGe4NQmg9uF5Pjpuc2ZzovniSPJTk5geis4wAG5NKKak27grKybkJuhneVuKCbdLikMDb",
  "key28": "2qNhDrad33q9AQo1dLZuJk2YvvZHZfsYvSqcj2CmFKcRB2m2HJTgSUTWdSM39ryL93xJimvUBUUQG6ecAxmdCK2H",
  "key29": "65UKdm2Q1q9Gc8SqVzr12tbUqhdUBzC1sVC8apb5BmrgzM5ZijusZ6RADpVSV4ge5ZpkGTt6BHcu4acoVfjLhixR",
  "key30": "2oMZ1f2XmRCn9QmSU2UaNknghevahLA1WdB4Tjyh3ZyNxDppFbN2ktfgBy8MQfx1BCBEkxDoXxEuWfS9HVes91yk",
  "key31": "2DnEceAXfNTdy5YyeGn9x2F4u8GAyBcm627TiWjK5j1dcaQru84SZZueXTjFMDy9zjTHu5WD9J9F5PBfMobL7GBW",
  "key32": "5UE4omPVcssAMM1j6YfB5QmRy6HLXCoiXgtQVtejcbphXv96yDJTKv9dCR719aKVxy5wV5ABmB7dcdUB7iwxPkF1",
  "key33": "gaX4ossw2qFkupdbuuSeD8qVUWUvAfBErESZkn2q7mhvXFzqziTCyTcw2Dbn3awoxDc48qGBPnhLmB3JWoqePoG",
  "key34": "3Vfsy7KFN4UTss5NjVnRiQui5UaivzEMQbvUXSAGfDQoNZgaHVHhDwYVxAbKfhXnJUKKurmnK8PL6JTsZeLaHdNs",
  "key35": "ZMZhhCkD8upd84yAGTjberQB5zGMerSo7YB4FLFv3FQvUDStyxzK9ksiSS6SNjkkcLVuoHDuYQNkwnKTapoFFgQ",
  "key36": "ACnXEubAg4KKJgCT8sWDt4yTwuBAmEAsABXBQ7tqet4zJoVsgHGDsE3SSbd1nGs1yFa2vdwVbukzmBqw66YguPp",
  "key37": "5swkdogsSSScNie1kMBNu3oAsjvABJXkH73HVqj1UbwKqQRJx2yap6jHVuTACkUUDo9pVWPSYoc8swiPA27qNQJH",
  "key38": "C263YnMdtsxwMbe6jrkRLkYGYrrcXuGXbj46Tu9p2aUEYPB37vKdr44T2LvEj6QL7pP3CTyaihE2xQxgHGUB6EP",
  "key39": "61VSd7JRgFBjqKU6XhKT2y8AXo42Nv4u92SNiSRc7R8Xs3wG7pSxeiscrVLEw1C2zE5mzUTDTHUXRDDPX8dCQz3b",
  "key40": "513j3wpRHf25uufqjZJw3yF2uVKU6VM9YPMKtqthTK13WjpDiPnaGVzaaDKYRHgAh7oUVQJ2uy48iKoBVKPu92QF",
  "key41": "5Ps29tojPQKRJm9sdo8AXAVnqyMLmgyPM4uvj8n7MAeohyteq561gZtHo5cq1f9MpUNZtDR3NJ7wx8xTJKwfcHNW",
  "key42": "e3X4CUCrvUdjLZEj3xNFocwY26MSNn8zyekRfGuLH4uuRuvePCnvBVHXqth6zt7CDCJRMYimrksoMa8UGdmah2u"
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
