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
    "2szvRwLAgve7mtCsqDuwsw82xth9xbN9ai3HLkGmd2qCoFnvdhqsqqg5CrzBuhSMjYtxBex9cdtVPmdUfAAdoPie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fbkk34CAj7JxbkmwPrT4nc5TRfwXZ8Urn6VDWRN5JHgx63hGimTa5qFPSpSkQCJhaMiwC1hpQAa7KfEgNVamirH",
  "key1": "3F1hfhSCaceGMDpwqva2daM8c7aYaRFZH5hkhwMAoqYikNNCQC8KQx8P4yxRQQN378yZ8XsgpJaBiU2pp4PYR9gY",
  "key2": "4dPoZtmnrWAK4ajHwt41wk4Xqr1cB9zSb3w6dwwkfJRvvJLQHERngwt7QMn4PJVH5JTmZnoMP1uswr1VG9g5a66W",
  "key3": "sqAcZw8rGhxHdU3NtUybwviMS7Xb4VarVQVV8YDFkmR1pzLsCCQ3Q4QdyjXyFmpokgjGGocDyyxL4p7WsD6XdwT",
  "key4": "4UE78VT38S2DdasSA5yhYvtgwQfKYwJsJCN2aVsXHeUupEZbMGsXQczR2w8vFTise4APAvPyUajG9mSVqE3pmWz7",
  "key5": "5UkvZ62Yz3TxdJpynMNrxAamPresQVpeKbQC6vvwaLshnv6wPDgPu4w952qDkrrC5Syh9pZL2ZJFHhgf1zTWUqWK",
  "key6": "4TaLHtS2Xo66gAvjv9xn7SmcteyJTubnBkSaRAT7FcxzTcAvRGAWWNMVBuiM7aDjM7sy92nu1bGNC5mTJadM4Su1",
  "key7": "3Cehm9YbzWofrgKYUAxWLwHimU77p4N4gwr6FR1SHMdFPRZwWwzK3EgrqPJwWtukB5UmUGNsEEQFcFzUEDUU5Gx",
  "key8": "49kk9YMNA6ZQjQwMUNbePrfdwiVedwpZsBsKGszu7UsQ9NeYTZgJEiyQiYH19X6HBFoH3DjRSwCfXn4uB2UAWgVe",
  "key9": "nT9p8Ee5PGf5eNgDw2HMTfiXXYTNJwYpyFKMjbYq4VxNYrksDiuLHydDu7beFF5vK6aTYuP1VskqSYmQcszuTM5",
  "key10": "27atvTrnJFyymk9hDQvkyhtmMKojx1ab89B2Qv9Q6atP6RAxL35AjcSWk9rb59Sy1BhnqAsfWvPENgKM91RGucA1",
  "key11": "2FcFBWLtx1L4qmvtv1TYJFeZvrbWQk8y6EL1wSvqm1L8fGn1fjkxFTKg5t8eL1oXGQBpYVN6ZWcTfCAHwdvg2b3N",
  "key12": "65R1gMQ9eum3cs9imfbJVCibSZhozt51VVQgEtowhDHvYYtTVnBuJn7tB5Stp5iRAPjuAFP8ndejZZqS4UbPiTh7",
  "key13": "5GXs9P8eZaRiRafd4DRJ3Su5xDRXDvx28qwRc2MorRA9w8WTENfPH31SiEMzueoDe6B4REjKoadxmWQ624XF2JQW",
  "key14": "21j27fTWCKcArQn3ToLvMamV7DZVeeMDUQQ4QhChuPHEq8sfTVnTBCaS586Hj153Rhr7cweMxRoHTHU11u9voKTY",
  "key15": "2vTxs6zpBtciNUMJQ6zmS1fzP96Dc5CoopfSTqTM2ktqED7GEjFw4z6NgYPxdVbE8z8wzC5APkWXLLgSWiBT7q9s",
  "key16": "ba1zEGga9atV2CK78QQVcEyUFMwYkd7SkmAE8a4xJvZnruj5QTGWXTy63RGGAJZ3LYc1NqCWxD9V1CEz7ahhpEh",
  "key17": "26LPmYdTNipSU4wEgVbRweGZsrxSaeBULHcqv7debe1ytQTYrwv4wGjGbDxNHec3UDLTZBow53QLg8MjbsrpKjTd",
  "key18": "2BibU4kqWBCnsZFdjLUr1yy7WZfivWwGttYBQ9ZvwUWDkLPWuXkpSNUBVw3unFU2W116ctUnyieGQ4YZ9qrouBWC",
  "key19": "4VcSmRqjjwEum8NmQayfRcHXZDEXVBSTcFh66eXQ9GfsEyPj9VKuUby6AygDuRkK7QTYg62dE6GwkkHo9SuY39x6",
  "key20": "2t4BmNaFMTdvS9i8aLge36bRHrUbtQbqNZsoPWbNZB3535DjgzxhsmhNpMTsY6pMjsmayPKXmfCbX6FaNi5WTyjw",
  "key21": "3JP6qw5GRsGnyvVBq5cxSxyvi8gK6HqMRMC6Kagp1hxNybyTfC5k91nMVsZ8Bc4N5R53XLidpdNGJRzjYJvQcdvk",
  "key22": "z8u4crM5n6a7UhGmQgqMQBbZUaNViXjXbP6t8BKQCz4n7orfa8gzpAUcf6z79VTYtvpZyBifddPzhWTEigynvo6",
  "key23": "3FjeP1qjww6AvoPZKL62NcpmE7zqnH5YLJMMD5yWt3Dw8hLU4UmEF8xuYe9kHXA3KT9pC5YMWtWMKjFKfagSP2Ct",
  "key24": "3jgJL2GYUHB7oukuv4WfhGy3jYRBXC4TgV9ksPoRuVsZY3sPxfdncwZcKNu8DqepYRZu93oD57X35moxNoJG1dkr",
  "key25": "3SMNWLoMQHk2UVbhnuKY1VP3ENhdDLaQfEuLx9LXJrquVcntNgAztzZNBNh5gcx4k7WD4yKN7jCDpZJrXnAoAE4g",
  "key26": "27nHsVJdkSomxjpFsvzHFsaAo1AH5qc9Dwfq8CHa4eWuSgd1TaAGbR8GK67DrZN1wu3WFgXDW5zLPMJizejgVB7M",
  "key27": "27GPgGvegZYr7Sc6uvDNmtfVuoGZJ1UKp9xbJfxxZTzrvwnPo89195rFvuFKK4tsCo7yyCdRR8FLGMofw9qkZAa9",
  "key28": "2MkgjmmbxzKb9T48b8VwEtv9qGAKtZBM9G6L6ukwfvr2ji2WiaYcQQGzZE9sD5iWYg8uVWK91p8B5nRoLx84bVGC",
  "key29": "5Ngw6ht2YKYKGBmy8RHQ9NvQoRFDEEJxnhXsRwknWHc7SYUrEBXa9ibohNM3C1TzQHzW8KebiwxtNx4et9aajK2e",
  "key30": "3f4p7ECMroFcSKVGaUHzYd4RqTLJ671FFWu9eFe1cendo7TpuR2vtbccqQ8eP1qEmEfXGmBCZmSZ5ECpMbYtQKhv",
  "key31": "zBDPFH2x4jV7rT1EzAkixAGDURQGniHNVxLk2ipVtjKLVjd7yVUyEQATn6jgVSB2XgtxLkraJyyJ6vFbhKMrndG",
  "key32": "3QaEnP8psFUxofU73Kb25joF68mVFpmq4jQEyNUAMfFgrXvxYrUMD3c3uW1FPecBZaynyEQHttJD23EmUwoTCkFH",
  "key33": "2VfZBkC7yYWHK6gbu9sZjo3KPjvrv9er2hfLUPpUfgRXK9chD3CzVwLmNnPrL8WmzhUeFwS53CDAimLGRQAUpifP",
  "key34": "4oTfahjfwofGB1xCX6y7yYcxTxmWmhCyRGZ3FBfB3EP3H76rpBUAWR6LxGZHdX4Nnry9wWqNUSPsPoDMGbQvu69k",
  "key35": "2ZPYTtFZUMavFRf4SBBoxkTeLRyMkPhna9aYfdZ25ReJyswpH64RjwwLNdBAAi5JDnNKNRofD1Nbu624Lnmp6EjM",
  "key36": "3cBABM9ndZZtquZbeugAcWjBqzXuteH9m4TJRjqshhF63k8TXPVdRZp1i6gfiSGkpCBQrkj7hBAr1zUbeoxxhABp",
  "key37": "4egk6mkAtgJH3drZqjYn6i8UnFXQXuNRxx5GQyFdkjU45aqXQVTXPYdUiPX1vLvBH8vhkvS8jsCZNXFFcEwjeyZE",
  "key38": "4Pq5JBJUtVcC8WRzv5sTkpSr75B1wTxjYKQrB7LomWywcdqMxmjorUBnxxNSNuLNh99dNt9VozVbLUsvnoSYX4uG",
  "key39": "5rNzoVvUBWAbqBGt1673bhzdQnbJAfVSPyPAe2tRYVEnpPVzaKAuKNvzp77wN3kRTe2pmnBx7ExAx2Uw8do6jAr6",
  "key40": "4s5xgg9qtNZnrsTTjFadTMA26g4HMM6YxMxx3QYkP4PgxmCYYZPba3sXLCGfqvqkJo6FCbxkJg6NJ4TbscPSpb4W",
  "key41": "5vcVcG8M5Q2aozYvj5hK4yRFsduPcqhD75H4EqUC3xWG1sbhqyxzPxm4rDKpMA328uKECK92Hk2nKgiw2HiQ2tJk",
  "key42": "42Gq9ax3ZcJZNM8qmA912aTJZEtQcRzfiaUEr2tJfi7m8ER4pZtKoqdPdP1JLJY3mV7zgJPVNie2qZVD9n8Utvbb",
  "key43": "45TGrBQwRUz9fuJBW5zyFfhkk3yXfperfHPx23ArP85X8b1ABPwk58Qvr47qrHtgTjZDJ45pp1YVCbfQnuywsGDy",
  "key44": "3ZAw1jeaUn83kHyNNpyenURBWNja8E3ke2xzycwsxyatLQQsqB1H3o2U6Lx9YzWGUJtGzjnNg9FE4EqkSqht6p45",
  "key45": "62q8N4Wbb6GDoAmmHVD7T9f9L2Btg9ZufGWBi94P62prTFBx4DZsEh6HqCdGyJtfRUBQNJ7bDEseEbQnyZaKZRTt",
  "key46": "4ZCKeo5mNHUhhGuj2RxGffhNPCATxXbr9tBKU3839sxHrE3Y7vEtspNLUeB2prdS3RurUHifoUwG9daMMSFAVfrW",
  "key47": "4T9274Bg66bP3bnTEuGTAzE9jPLauQkQeNKzhARX9CHq2BVz26AoxgW2sztp6toP8vsesN7qALq35bSUX42hdthH",
  "key48": "o8TwuY7ayKpNBqFb5hZQJrAAzLwamYa1UFyAvku7WhuFuoR6QFXdKDX39MMusAgHaKJ5Tbvn5bNjzHa1Bf3SCyQ",
  "key49": "3sWxoPdABzryYT97STCF4FJBS9dAc7YoL35aAzuZzLG7CtnoN1j7jKp6z9rwWzjLZAauPadJExAPupF1Fw4Wr4yt"
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
