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
    "3YYiznwYYi6ESvHpFvdJNAqSi6YKVXSh4Bxn1FNBaPXCzfhF9tbnbe51sRdtWw3rCYKdajaVrRhQFzqWnUWe72mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gtyrTJZAathRcpxtUugiYnLcBHUUWZPhgQNZem5Bz31hWKjErGPEhjJQwWm8eiongBEPFCRzNMPqovAjekwMS6o",
  "key1": "2Attyv92FRinzF1tPRG2pYBxuwygUeXunoGFzbcRJn4LwJe1NVkkgXt43kNzYtHerHmhdbFgKTDW5WZUqyAiJrkE",
  "key2": "2RTQwU3L8nn1tfqrr9sYfP1LwvXwMiwUvTd1vVmCV4xWYdF2iynRHmk8X4d8nT1Ut3cEbLk2rkknbAghFCPoYPx8",
  "key3": "2JqiswBitW4UxmtH9kSkViw4Yxbfjyn9QaLFv7NjSPbo36MpCCDavNnwCb7Q6jqRX4zjc9VFYZ2wCQKa8MuWXgU3",
  "key4": "3w4M1yFxSYRYMvQiMVbue1829pMSSTY1tfyzJhomJ6BvvoNcfdnkY24aankjXwmqqCCr5zPPY9Z89exLk14cXpJZ",
  "key5": "REoJtWmCoB3RybJSaL7SBY1Bu7bk8DhrLU8fRQdd8o9EeJaZk3vetGpsij9tYQEsEQXtjM7aJYJar9teHg3im4x",
  "key6": "2oF3PCVpWieAcErq3PU2Jp5WCC65DoqW18ejQkh5BrkJe88MwYvkFVqNnoGypMoKXRczd7G4W21iYpCCmsjeq4Lz",
  "key7": "3XXbPSwHaJEmWWeVY8td4Gjcmqv3rhVq5Jg6FNWAR2LmYaCC51Es6tHjugHa7jiLRxiTyR3pNmxQxb9yrFo2ot4G",
  "key8": "YzuSXYHsNETk5nBJqXj7XgxjscB3aZHFmBWuUvhQ212yaSbMJtvoh5ite8iskamLpdTZ2Q58kARhSS4K5oPsFce",
  "key9": "3mEcv3LdKjwgarMarVqxb3g25VNGvg2GbVkCfWsvTrTNdGqD76oyfj5nSegW8strcUxz1JpfUoeonDrGWZYJnnkU",
  "key10": "EwqTV3acLxyMxmBgNRQEyqcssV6nQufjQnfjm1UKaPALbhAroqRHvaqVyEuwYNtSHVvLRUnX8N3ujQricSGcpvs",
  "key11": "4ro7CEmCa3i83vKykRtLPV3izEdyGgiuxUWCzeKQ2gjniyoUD27nBhLbRKiV6okTLKxAbB9EbX7NpHdzyHSFqAzW",
  "key12": "5teJgrHPsBgCZjd6EWYxLBAZNxYPSSwQDyDax9gmSV4NBS1sktjACkB8xt1PeSSEHeL2gXRXXr6zv9G1ykKFniU1",
  "key13": "5uJBBbPNN19gE8uy4u8AMRZjd3gWgjyGrUyXh7e5zriHnuX1PS1qrZjWg68oHiXNa4bttpbFGeGpuvfNY6J12r1d",
  "key14": "4zB88Uxb48pwNzsDyWeyBjLBNd18WQKpk17CzgDH9BMrBwJ84nhrhbch3ooQwauvzkmFAYJMziwEQDnNrVPZoBDs",
  "key15": "3HtVkkA6BH3ZjQRTLAH31L2t6c28tWkytxGi7TdiF51ph1YCJEPPkijfpKKo25tWuNQD7CzsZ5HA9i3JbdF7fToX",
  "key16": "o7tEPXN9oSSDhHXvf8s1n5PbHdAM99Y8X9LT7Lv3RucKAY2R6LvPVhywob6xYopBBtR7ovsbkNitxKNTns2op8f",
  "key17": "DFKk2NcWhTR7XJaniSVEEDpJ9LcKPMG4VJH5yZB4X86YYV2qDzcXnWR1NuGshnn6mF4tqkHV9vbLrtcFuHejQsk",
  "key18": "wyTCj6px6FaP57JNxwHErjBG9a1C2z2AbPCHJhtjCQXv9r1Akjk9j63EED2rDuN9Lygy7wg7ymk7LTN5Ppy5AhV",
  "key19": "3F4TLeAexTPVaevz75JuwDQqjPeZTUwS4TXvbbBkkdmfckKEkFwYJumAbTAVr13cfUccyfiSzoLHfJKCXGfimvG4",
  "key20": "3cYD3d1qPntYU2dKKEYG8Tn9jnqYPC1qTrGWnVEwjSzUzdkQs7ufZqz1nNaEDHe2QFmpCWSXJJ4a3EEZN4yeVP84",
  "key21": "5gCZngA9EiG6oGKZRKae5E365qKgkGKemEjj3yQ9hKX2h2vkrMAt7RQTLKBvKY36t47SF1ZNERZXZNWPZWAYbvBQ",
  "key22": "4Gc9sz9tkVZU6581JSrUTZjJHuBNcXmNCLAEbi8PWdxnkTPnbzZMrxVromzrFJuUoj81RYNQPWXZhLPRFKocapp9",
  "key23": "3L7ALyg93ve4SJXB7Zr8FW7qWjodK6kcU2kh5iVMuXTqMmh8PbrzrdHpJEgDthzriQZmnJwJa3Zk8CQc3LT5YvJ8",
  "key24": "5U7GV65H7m5W8T3wYtKqRrFdvuFz2511r6MtYWHgHKoRkobVsfrq4iGMrF26TbicxSQptuS8abJjb5ugrecEgn8U",
  "key25": "NWPi7BmPABCr8Tbfqw3pS4wiUxSPMZ23fHYoTkhsbm52dJdxzpbKL2j8sFtHtb5VZJX3X69hBaazB93s5MZQ65a",
  "key26": "Dokovw1fpc5QgFhBdUvrr1TUK9H4MDHrAYP5WtXb9aX2c2GusUtF9kpyZgoF5pEaCpyYKg8KJ5ioL2wabu3T9AS",
  "key27": "28TSpk3mPiU6KSCdcwz813KcG6DTVATKoXuvDip4ueS4SEMUfy83Ua5814GsPWhsRLcXQqWVNH7aZGWHeS42Bc3W",
  "key28": "7VJXBui2xFpbVYV3GjZMy8uDR8saGphChN9j5dncrPXNpvkSgL39QKn2NRgBBvAx2XuF9tWYtjAEYNfe2LijHMU",
  "key29": "5DB34i623ehMyjemQ6WKKxrk5fF8igDJzQo3CXJTPUuhcf1EuDfipwn4ZW1mrxaEdnLSxCDq7hzqRiwEKZF3QH8D",
  "key30": "4wGnwn4XnuY44hNmKSzoAyHh4WMM3PoSqpTDfe8wLue8ZEakYTcYe9hiuJSPMvxNAUn667bB1qBbez2P4PoN9B8K",
  "key31": "4y4NpE8w281wpYi4VbsXoVUAwdr29Xw3moN2GotRjYWPKkoTQ2Hh3dgyz87N2vWbTLxb7K9ZjyZ4Y8ckWKvjtYTY",
  "key32": "3rfByY5SgSgA2v2QnizjLHiYQFxKUVf9sXka8XTqarer1q4Mbc2iMdWeM2KLWfiTtVx1aP56bbQ4zAeaMPPFhMq4",
  "key33": "5UTdajZpayyQg3Vqb9gL2e2V1KtFetGfam3LoGDMQbMXFYatPt5PnKowgjdiKfZPfhJXmyYw4cusM6447WosBCs2",
  "key34": "3DRzh6kwVaMJpjmmk4zDLKR2Wga2hH26XjTNrNwKgUKqgXkjZcZ37E7Z4aAjWotQwh5aKWATKDTzH4WxqVfDSqqw",
  "key35": "Lx2g36FZsC3KMDdim6djryvaej41gx1Fs7ZfabVTwLkK2nS5pSV3frRcRbLSX1poGYXidMxG2fN7MDpYPyUfNby",
  "key36": "3XcU7PJeDhT4HQRi9YwgmggYFZ8CgtxfHbL5FPvwjTH7xnqmbv6FKNsRvwd1pmJEyTPatJxNsXXFJaL3Tu5JbH4V",
  "key37": "3oeqzfo29iduq6tz5giojekSCQ41TaWQqh3TN1svDFqoEbc8bLnUt9rq5yZtQGtEaXvLDS7WFRzuvdNwgfg19bZT",
  "key38": "vxbQgAu7dhrZXZpTEVh6LZAQ6moeDLzm4WMVYdpqXM8s9zeiVkLm8pArtPgvXXG4Sod1VMV3jY4Rgq57GdgAru1",
  "key39": "2zjuw5ocU9dDHgBWmompHyotYHH6Mq1dRRz6qdK5CVZYbB1UghGKmYgvGtXUW67GELFT9oi1Ld1KsWrPFvzND6vb",
  "key40": "2WMuqKbdkf4JeXH5Jm3okuzndEqezHjXkaCThsE8SvLx1P18uWy8t4t9L8NjSW6yBemYjtgcAmoBfduTRaQg8G6y",
  "key41": "5FJYKsG8Z1cBviwxhDo3QjPGdUCLckPvYvUsxvVvLVPi9TKm5zuCJRv6fv5xqr5jd5jK2CkQf8xKnss464JtVmYP",
  "key42": "5UgWofHjKcsSDXFjZ95xRLFP5spoD6TLhTiCUL22UxbXszjQFmtPdvRxDiGksG2aJUib6hG61VWBDpbn4GS4T1Bj",
  "key43": "4e6GMarxUMieN2EtSq2osiLYdkq2j13UuHJryW4CcLEc9GdEgXKL28b5kZ3jK3J49G8rHARhdAe5nw7DH33AAGDe",
  "key44": "3Khq6RBnEfu9xkvazNdtTN1LPQJbwBox8CGvYhZneMs2Wqe8gGygP1aq5Ff7Cm1K8DFNrYVgCm2xYedCEuapSiWB",
  "key45": "6E7i5mYqmMgygb71bo9MxGx3iF5Y8J9QxnKZ3WtYWCC45oaEh9WTRfwf5tZF4CEijAZAACJ6Bu146a3k7Z4sWsA"
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
