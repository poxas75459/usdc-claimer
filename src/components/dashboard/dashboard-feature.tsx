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
    "2NPev5aQuwZU927988qHtHormdQ8QgQtpGTKk1Y976TKhkmbT7BYZTC72gXg4yJPWrM9hyo52CbRw9STvPd2PRcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39L8EEEtMszj8MTDdnGqsBGCyGtH3GrAxGp4q92uFX5BwLctf7KmiVjKmgr4ZfvMWUFMkr2b2ruCAAFnqCKF9tqE",
  "key1": "5vt7NFgW8GUJ9oFpyrKY13J9ArxcVpNtn1rZvsCD8bf29v2VKazLbXWovFqR1b362iJsaZereKsVGVC6bWaHEqbt",
  "key2": "RZSJxafF9AAwUFh59cJF3Bezc5aJ6iS4VkvXpJj95TnEVzxJJduhBAt34rLHfJ2DXrWqpVcHpnpShxsGyo8CuCm",
  "key3": "4utGWxTNv5SmMutcgwZKKu7GV4eu6fhkXn8xkuWDbU8D6iH5ERCL5RoZGbGfuySzhcAdZJ7tKHQZVJveiBuK2HEo",
  "key4": "2vArRRTWHwFm2bJWfEwZFHtWgZKftMdSVBPDGP54T5kiBjxkFsq9x2FeFUGfe7ZWhCF5t3yydEtxEecZthLLKtpp",
  "key5": "3JonKKvU97L6msTrjhjSawx3o513yv2SZ8NxxuLFQ5uG8qQEcdXRR8LkhriGJuKys7CofW95ZoiERmhtXWZS7ytZ",
  "key6": "3ihf5YAyW9Mp4RyGkRQZqwt83BEHMY4bwmpHH8Wrokmj8kaQLsnsJyrkA3HhA85mx9uEUZDo4kzAn9MwPd4dPaQa",
  "key7": "2F3w23jsJ1cXDq8BL2Z51tBc1wAZjbX331YeMKqB2gxWLDUzQBx9NmdhmdChYGxhtqL5HJX1GNuRgXiyiRK5CeZk",
  "key8": "57T1LnoQgzieBbzk17tbYYcWf1yMDCiLdAhkVTHADAnt6NXUWMZNM2Y26BxxsEinVmvzVXkaMsuubpdf4UKe9Zc2",
  "key9": "6tFu6ueXCP4ZKXwLAz2Tn86D1YDCtUNfCUkqKwCqu4Fid4mTMVQCnN3ziTY3AUFWv3QDwfRRWfoCs2dgwFrVuvk",
  "key10": "47sWt1Vpeh3JE5RvGkZtH8tbRNyFcY93HkGGipQBWMddyBmBuYL3f5XcTZeZWSi4PRkPyy7bzBdLw4k5AsmdZt4W",
  "key11": "5jdiFviuT3qYcLMBr8Y9wMjo73UKqqZgArLBFMJPYNu28ePz7vEdLysMnV2FKNkvEa7qmRh6V6p4aHx2464YD5f4",
  "key12": "4xamfqzNeGA622AmTCoAGYg9CMvLqaYmj4Bm3aYAEo1c9AZQ7v8hc29YPa7rfCScMpFb6TKMYtrURnyiYvnChL5Q",
  "key13": "3UKNziC2ua1QAWganZT78KXLBNjHeWrvKUk7UMmM4fCQSqckAMcRd41yrBNQZ1UGa7JSn4ZxiSJsP6C2goDdfe9Y",
  "key14": "2AkqsAEukBRNfzMdXWXeHZEfEyBrCBndPdptgVhyyuNpgTXLV9ipKiV4nnnWWgqoq3j4RSJWSJq8WP5yHby4FTYL",
  "key15": "3PRyibN2AP5dd1a1PhkEaR2Ynj8B5fhX5UakM3R8VyfjqfAKsTfLPiaAK4519n7uN7mG6dwFAnnVD97nC7hDJJpj",
  "key16": "3kJAjNReuTEUqpyk2yfN1J8XTdcneLTuwsDZBFEdFSF28oFEoGRWyxZyn4UZx1FGaNoQtHkzFfHRme6DwLq8ba2s",
  "key17": "4rVxLcz3PXSRj4y82hHTXExFV8afXiKSNGoqNtvx5p6a4QbxAGpziLxXSbQoeTHJEimh3o6JhqZEzxZVnT1ribsu",
  "key18": "5YfWEoQW88PhCKVJRruweCUyYVAjinJUkvxBZecjNXCn9Xe5umcuuiywRLS5UMo1QrworJkHsNGKYTXs5d4Cbexs",
  "key19": "4FtjHb1GbV6goiNWzW98ZEuLuoarpDDbN5E1aEqGKELw3g2zG71uaKbHGsSnnk6s1mx5vReo6iqM33Hi6wuyY66K",
  "key20": "5ZjGtp8XyFjc524WwoGYEAnA1ZCc5RrC61jooZRMoa8Xj13WHq2gfpWnCCUZJ73ynFVdFrcea1CCajjePKWzyQZy",
  "key21": "58WRWVbSGtGQSxSYwhGmmkkcd1hJdhAatoYsgUKDHxPTwhYTw7cv7Wd9dtVB4ozzSFXpt9kbQHwwZsPfMemHskLQ",
  "key22": "38LL5eQ18YjjxWGB8jaefb54aAQJ9b8NWcPiNshmZpzeRkE6qtQB5rq24oqgAAx6BM5gFyZhw1ddPKyXrnXBuGTM",
  "key23": "49oi6fnV6ze2cmZYXqfMMgvmN2aybGDXmZZ18dFeqBZ9pBJ3pWJGn9pyi1BiSuCSEupKinx5vLjHwphrkSUZty5K",
  "key24": "3H2Ts3Lqc3kLLZoVdBya9kBu6abkzNBWrpgyhfKwAJmFRRE7B5s9QBswM9dQu5eF1SiyRnLAbh993wB1Pv7Lgsij",
  "key25": "2mmNUcjhVdUAasaqb468R3cYToxJwDLMSmqQPdiNEytTwqmKyiXkrzD3SrR1ANFzsvDYjzYvieCUwMAGkRXXLn6u",
  "key26": "P9nnTth9mr1AhCvvHST6YpMQhMb22YSKSQzvAJ9QovvhXvbUGDwwXNWZ5ahDrpkeeffSf7NSiZ1BiXj4vWwwX49",
  "key27": "4pDxChw1wZWGD5g6UaZen4mpVyXPgZYJfRWNLsxstbeytUPN7GPLTzQPqEVn4egDuyifuTst5hGfoZBbKem2ryYo",
  "key28": "5KWEC1pKz68Y8Dn5EFncnKDm3f7oNUYkYzM2ubPb1r6J2Q6tbgYREzrVydxEU9Hmypvu6VYPqE8KjHms5AehSLKY",
  "key29": "5EYCbZHPTb1XyWXTo5EP8ZeNNzN8UFzij71FnSMidQiyH6NRnq8HLfPKMtJNBavWP2kEt23fouNWVPJHULHCMD4t",
  "key30": "teqeo8nGeK8KZv4c2oTkDG1CPbM4gWgqGtK19k5zthmh29YsjYqRLmdWhqH4NeCKotFXWPEW8ZDv8PuyCyX4tnm",
  "key31": "D8ty1yDB37kyevV6knUjbbqAAYyPgvEwRgtK5mvwphyxyDhixy2RxwZguJgbrXTJh8onsA7jK3KLnbG5PZjJiJo",
  "key32": "46wQWfsWVb5dKzRs6p7ucUo3eD33uXpKEggCZSCoRjqUbZ8D4Xx5rJwTPMuWgcsnMyEFXgn35u4UJF87KsK56fK",
  "key33": "3aFNrRrJ1JPZGvc87cbKo8kK96EYfkMvUNptrfJHxmNJ8j1Mdw3QwX27nGnK11J1d2nZV1gv7q1izSCT1162BzB3",
  "key34": "GLUfJhMzJfn5F9mMYAoLR5qBPbhpRrdVc4oUZMgB1PpvNG1W9f4i2JA25nFUBRYT6Amo4TnkYrqfqedBzius7ad",
  "key35": "3XqP5XrKtM4QhS5w6w4qojZQoyYi5GCBLK69Zj6Hjg2U3FZAR7NDKMcCVHsWBceqpbVrfkMMyfzUViy68R6reiDh",
  "key36": "3zjGDDCqcYjktLWDM2z7xWSPo8qta57nH5VAg96Ywx92d45FZxWboG1ecFfQxXjrGD38p44uC2K56jgaxhnuSwbe",
  "key37": "3LTJBrLRVmptxnXxe9J6WGSCMD7Qu3eH3Z1uKXKnDjtDcc5nP7GDQBznj5XqJLmcCCVxT28KTj83Evhpx4bDHHjY",
  "key38": "zeZybC7gpDS5fW9KdkMsPx6KWU8ofqHEpKTEy7MsYwhzjmpVKrKQWEzj1pmQge8TAoxg8Qow9D8XiokJkVRoWJx",
  "key39": "3kHQ6MjyHFgm8EebZjtJLNCku5o962xCRD3KLRXmCvXSpJgtQuknDJbAMuXn4tjHjAdbN8ijML3C9Qqk9YTWWFPH",
  "key40": "mhHePCoDQbdPtRbtXb4GtzLBvMWvWjDcrcGjjqMzoHRqxwLAbfS3oyELdc4pF4TYgUnXj9iqRak6J7LnD3R31bb",
  "key41": "2LXeWEzY2P1pQPevtWNqc2fMvbEGR5cdiemiYmx5DnmYKK2PLKvVn7LNV5V9HpY1oMywz7G5RUJ7BXWXN71ZdcZF",
  "key42": "ZeDgp3BfsHyo4LsHFR3TQHK9tZmtWXxrVhHNPRypNdLX3yF5MpYB5Byb63QNRJ78cudTFLEaJ1GdH9FMHDeNA85",
  "key43": "2aMpj7z8XDbuXZ8SdmFDeGQaDE43zhxyMzvLf8ANpuqE4SPEDPbdzQ6QbKaFudqeRZsZRWoxbDht9o1YqZqPXDWL"
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
