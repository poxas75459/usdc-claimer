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
    "2PHuFPeGCKRPg1Ls5nG457nGyVxxHtsP3qA94wDvqTe4UvZCT8zo7DY5tC6FC9nnXaVGW26fPQGN6UnudDBYRbVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7oeLNuJHQSYdWeuvJcYv2m8BtbyLvkzGocHAkWQaooMiymrAHZfhstbhtzNETs2SVpC1EbFxkxju9j4hebVzaWz",
  "key1": "3PTo51it1GRZRo9joxRqNPU3diNjHxuW9FePS4Rxw7TcujEzKtqmUSaed5F9szX2nCzkqsgwjrHV4iyyJG96rM8z",
  "key2": "4rBrRVGS658ndVnhd4JkSERjetuS9qCaanTjv96d6qeoLubkk1cdacGdsWr1voeV2G52P39nTHJM734poWijaPNn",
  "key3": "4v5cNFTfeH38ekWCpAT4gh3REaYJieWgcXYWe8tZKB4xL2QnC2subp1Gjh38TDvYPftaepHZ4VWRP7bysc8NRY5B",
  "key4": "aQhSiiqW5zrUQendcDJkr93fF7CJuSpNYGxdW39tj7PVKsoJD87gXGHCRm42R7Cp1pRnS3BBnm41RDKZdUyq6BQ",
  "key5": "4tgGr7SJt9Lbx78NjM3qF7sfneoWjEv22u9kz16b13YKtrt7CbypGMJQGM7weSdjZQ8zMUiS8xdhvQNKww5aTrJb",
  "key6": "2FnHWdWPCzkf2T2XumWKMwat1XUqSNRsiA1ZzNAbsWrXuK3ds7tDNP4BTVg9NmggsbtfhvDXzfmmUABBLWvvw5B9",
  "key7": "5QqM3swWMMTeWa9qSTdSSRPvFiWXsgF8rwvYknGS92XzgdQSgPfykryDKbdC1siiwUBr2WnDY3cu1NhwKFGYePmt",
  "key8": "2Txc9bM5N4wUWeihMu9muWBu2qxq7Da91awmS5qrvL3oV17E8zj9j77DJrK6iktWifKmc6nmFWawTdxp6TpyEC3H",
  "key9": "XdjW5BZaRZWstuuF8M5cqYoAZRVDe2VnZGX6W1qBTYa78kYwmyhZxVgtiTXYQrq8XDWf93mmRUsHe6n4J8Cugvs",
  "key10": "QX31e21XaLyynVpNVHi6yFkERsLuMYPYUfVAHfQYu6DNs7NEyGUB6nTw8y8Tb8N9iKty96SATmTKdshgFEHM4WR",
  "key11": "4BnUHPUujrir91VGw8vErMNegSw6qJicnuz8N45beWpJEzY4okXsk6fZ13jHnR78nAeL6xv89znRx64KRuaz2FBY",
  "key12": "41sfFWWp4ZE67EUvUsdERg9ALSz6sFmWQYn4UiHmuBXZCd7nobDxisWmw2kbqsbDBTncJkS9ij4BNgsmeFmU2aeN",
  "key13": "5nCGYwcznm4xe9qGd1v5Sd8ApbKNLHhBDGzHyhbivi3V6PFRrSDv9usMUWHE2JkBb49Uuc6vGK5rT12WxL72d5Bj",
  "key14": "4ViipsyWnjsZ8pc4a8Ja2rghJjV4CKaoMuFFvk42qTn65PG8kr4pXWSoCMbvmS3kNzVPom4NcbMaSazGGPQPGhHS",
  "key15": "4fvFxHzai3tu3Na7dvhoZohcVFhw6kdWPyhKhQdPUtKBb6x5M5PHYD1Vi1MoRZCQ64MejoPSHvj8d5CSnbN8L9Ey",
  "key16": "2SWBHWGzTUMnTTaMX4KDMbcuatPks8Gxs3T6tzw4Sy8FBKxQ51L7WqrfzX9GKwqkVYkdEU1oh3RDx95kgKVJEnnh",
  "key17": "2MxG9Tm7Mo8rGz19Mt1Lrrd1sJJdht3e1L32BP49HoohYLxL27XyxWm8dJwChCH5NQCYy6WywEPVcx8sKS59FyEa",
  "key18": "5G3UZ2buj5TxkeZ2YNt84fcmJYQCqW1apWmQG93t8kYiMnLubBba4cKxBYxT1q7Qd8o4yKHMVzBV4ZW31JVUbX3X",
  "key19": "75WGmXQdzkvW8NscR6sJiGVDPxFEh3um6czs8pN3D6LkgAvnLw4S7REuA3hSAQyUuENJRDUi1djDhaQpLZT4vFP",
  "key20": "XeKB9Bi25rXUayVd4uYPUhvjhriujzax1r4vNXmH55vPZPBMGvAx9SEdKdt3cbtZQo4NfCEstkLnAAE19rYUiMK",
  "key21": "3Ea4Jqf5uENUhJdDAnkyHC9SCHqccQkxvAcXbhX2sJuyfobTnbNTt5tJo1nsRWfUt9NsmU72Yp7AdKc636vUCkio",
  "key22": "2MxbJ8WyDLHR6Fne2ECGcSYQoNEWqMkx56PjPJH7KqUSR7VJbbeDdnEUG48A2eMzUgNTQCgmar1fWkSRRYYjdoim",
  "key23": "3bDrokWGz5LxAm7FpVj4qv7a6SfWFg61XA7n68U42TcKdCqchdwK5VTXXDBLCHZtqwe78bJDRQ6hnVoWvieX4Nxt",
  "key24": "3CjknSWrHb6HKJcs1FkudzH7u71zdu1YjobhfWoheTP3oVsUk49BjZkgBeft8bJqMsPCMpVRWgp6yG8dfiuaTq16",
  "key25": "2L6u3WrYHLEPoywnu6xB433Jqf84mQA7F248L6E1FLA4e9sofUEMW4uve2mzXjmaRy4pKxXVetpRYfU9PaHPXpNc",
  "key26": "5JBmMPifaR9qFGRjSVyFqZQpBrm91vuRAk1ck29ewN3Ch2duVxsjoB9MWd6zkcsL7LvKFxVSU91itbY357569AFV",
  "key27": "27rSiuYvRsW3xamxQf4X3KUKG3Atq4aJ48X6C56jNbqCv9XYoGyD5sNHde2wNyqu3TcqVZhVHtPp3EdxjjNXyizs",
  "key28": "ut5SmdevoGKPa9dzeQudHnTvdrFheuTbtQyHctr5wwFzmSaDnvqwRq1Q9FUpqjRwn41CeBuYZXuomV4JaQtbSPo",
  "key29": "4m7gP7M4H5YMPk2DQg3RSbB8wpHnyw6xJ5Fx8jPMiQUiBGQZxaDSyyP4xGe7BuHZoGQLpKjD6z5QmPTo6cZFKVbY",
  "key30": "5u1DQpF5V1Nrj1rkvhFt3hXf3L3kpv64psaDY71ZqivzS39aQg3h1mGrzziECnZ8Ecfyq8Wtu5a2wjR23M5egCJD",
  "key31": "3fvyge3eNtsdfKhaanwR8uwgaDSfzhKAub1iqzQ67tNpfpxvjdzAaQYW24m7P3c5yUm7BnKtoZ11aRMDvQsHFpW5",
  "key32": "3jUae7aNmLzQH34PmX198zkGPQhgVgZUhDJ6NN2on8tkBZ2Dz6Pb5CrnxSwoezUYCkDjmAxQjmV8CkEGqERtu71D",
  "key33": "3sn9ZyakqH6nakZ8KCqA8qP6qXi94WB7FPDqNukbX3HjXv7YD6pCdHhQEi3BvvsgVuBNfzV2ftiqkiFtyYZHq9jz",
  "key34": "5w2xiNTnwG7pwJsSyB8ydpzAxVL1hHcbRtGdawZvQP61s6pdvRHazVHbjHgk7Quex1x9sCo2PhDNn3wnj6CR1oT9",
  "key35": "4Q2TXwgA4F9Kgwz4HTePVKcm8SbAP5pEt9Ybh59dngJjSozhgdCiKth6qndxuQ4Q895pNDRPjmactc9QBDVTBgxT",
  "key36": "4q8sTTX6XtYfecZi2CXmBKJqrXmcnVR34D5ovXsWkBtwjcvhrxgaW6Kmo9jA86ERyETpvw4jK7KDmUDJtaS4TDLF",
  "key37": "54ATANFaUDdYGGtQ85Cws8qQX4Gxxntw1Ryo5RHjyB1kwEH7DKQ2fWeMD7WZDm4W9LW5qjL5UhSo6L7LeJVn64pF",
  "key38": "NEt4RPPN1AJ5CVpRNsET9x32iDVbi9C24bAoobcZxijzgYwzyoQakUQgPaCuFSHTevNJEHfijDxXL9uYut7HdQ9",
  "key39": "3kAT2RjCgoMA5hR15DMptKs2bV5sKJMEHCjtzhgTZwaoL8MDUeN5vnNfdzvF8uEoMH8EwtwUEjkjBKg1N7imHZb9",
  "key40": "Rc8uEiwXu3e5dGtxVrZtPyNiUtyXj34ZhU8H7zRL2zFkXoGU7LgFPUQQeH9KbJz59R2nbxhnqq1PLpJUspirYdS",
  "key41": "58F3akVojB89jqJaDnj4HKtAKW5StyYXTVxFm4fpMGjS8NqtoZFg4otojCQck7vxxducvCdJxxCuUpPH73JfPG2F",
  "key42": "5vJzksBHQnCovtYxa3DXhXvegQ3VMeqxdPaJ85GPjj26sjEHPGUgPRgGy2RfDmgdLk3xiDaftZUsjbUxhNtK6Tfr",
  "key43": "54UMvnop6FBLtTWQWtSxn2J8ybY2KmRsaXYb2yyxHJNoFoE14NVGy5DayNyqJL1EuyLremvKhKxd3B8aVGkRWJ9V"
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
