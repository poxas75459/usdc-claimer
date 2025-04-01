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
    "4pyAVGLiCDjzm9Cqas6S7ENEnHV3vxeSpAoptgw72NFfwEygwAaNcp5jtSr9LmbmsamepyLneoM9SeN37LTji4UH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XA73rLkiTNmMpjU7638hqM6cZoXLhfhzPNUUTDLi3jjVUFgKd1tUEcukz6c3VBsUrLTJ4B1csHApA53gDJ86JQ9",
  "key1": "23C9D3w8x63tmLPbNph84GofG5VAkuc52zGXrjvRL6WXQfkaYN3JTRyb7HPXZZK3BNedGR4BCWPNMTFLigX6vuvR",
  "key2": "WwZPQ4vriDAH748JgAp3G6gNV1Mvrb5HqPnNtfCJxRuSUJa91nz2wpT7cVSRJP495Xf3Z7P1MwB7kKJRMppguru",
  "key3": "5XRJodW1AVN9XAjqmYy9N4XP5WPiw8xrdFfhszihS6TMwkjQZkwFqgGmu7PhCUo5BnKFn9EP9dWeh1rmbAyVZuyZ",
  "key4": "3d8h4iTCvZz6yKCJ5EoFSmeEFpaf1nRWsw3KvWGdXaUc4XRWves4jf7PSnkJVRQzXxatvRPGXo27VQyh6JhS6EmY",
  "key5": "5DigE51njZWP2AtmLYBjZkQXbHUxRznMFEqxSg4cNewnW4jk6onnHzBKpmx7jeGEgwae1JNKAkTsWf41e36Qyjmo",
  "key6": "5vtKn1TgRG5fWpS5xziEkTGapePRadPMJHTPeJd68uaoByEfoKffqx5ph6DUCuHohLfcBbPbR8mCgNNrEmvCxaD7",
  "key7": "B9eZyvrty1bvG1v914A2rxK9Ziexf6dokcyx6TFy42soZ2nhHbywkpdmCd22BQpqTBX11qCoxCUGwguDLWtJYg5",
  "key8": "42XvneiEooBpLz2grYNCJ2f9hciJurpwrg4vQks7PdqaxJ5KA3XVHfHF1MeKR4PduiH2YgkbMrRiCTqagkkrZm9r",
  "key9": "wXJHe8ctUfyFPLcEVqzo6YTfc7MnPq5odbjgZJsNWgxnC6z6y8tTejdHhobLY7bsuVMrBH3xJEi1qSpraz3Disv",
  "key10": "3TzAb2a4Qy7XcX7khUZkQwcERyT2JwHRR1jLCquZ37Vn1MdiWX1KgxaYQAw7Kv342Py4KCvQJqXktZ3c9QBuU2eN",
  "key11": "4pLiiT8RTecGUjLKQVd1gRTrvTcKWUhXcTxGHaW4vNX1jsqxbMJXiQqJW4BPvzonsgkU7PmRPgGjXeveKqd23gYc",
  "key12": "3EhSCJge6XTNSCGigRm8KPjDX9aFexXZnFM9TRemtknPC8WJ83jKbcxqURjmzFJ56Yt7ZsDRGytHHBV372nJcNjs",
  "key13": "5g7Aqho5w1JE17SktyrJyvGJt3cTW9Ca9mrZufC8dvc8DjsQhThqW3SzpQVxPTKsxhKLqZTMaJ3vPzbUoeyCtNNR",
  "key14": "2GwcgFQsti6muyZWxq1Dq8boRouWKVjSmoMEAxkFjDPQ1LQmomooU3o29F8gQJXcZUy3nS2iZ3QuydKy4J4eTfHK",
  "key15": "5vEd3AAPoN7xy46CJ9rGP7MdPy9qeAap1SyfHwZchGhNMzytLuzGWchj8ifP1u4GcQK1oDPTpNhrShzPtwSXimeA",
  "key16": "2TAVipVgkygi2Pgo7HF65MfmXjnhnQ182DZxz3rqvDKJJ41b5bVFqKfxPLJhJYyKXkLro9jc28XhWtWwrM8dPfDr",
  "key17": "2dYPYuM1yZfBuN6pE1MYXhQ6gyQQqhN5ep24xe7Wt53NdqBXo2SzSNsKtuoURs2YGLr2VpwZRp5mTDYuVR9LnX3K",
  "key18": "M3H3x1jMTVa1vDTHqBBeerksKuoTNsYWaoHW8uDxztAygGUvvZ7u1bXhfa7KfcMBvLF5p65sgUV85F1MGwkwKPb",
  "key19": "2bm7SxcRDCYxrfZo6xhKCbWnYnPa1QMSX99FrDmYa7WzLAeWBuRWaALuP8SWdADU2ZjYNxJUim1DsU2rm7JQ8Jti",
  "key20": "2soA4i1XRCEHRNrtk6jmRvuLyoPakXr7z9eG3TF4kEY8niM5dYbaQ9jX19VZmmDFj4fQdGqXR4RX7QUGqG5YcS6a",
  "key21": "5NabDTGfNV7eZWUzH4VvfAYJv2fuL4msFpnpd9oYgKHCpD3ccKDH4BUBjLNN3usU8A8X27JcQqaEwuwYhEnGqTKB",
  "key22": "r2a6qpi6UrkHeoGe7K6jCqj4mhBQd6YuBJyMEkJzspMnF5WG2gjxXmZtJdrN7kN566AZCvoDEsGwW3DokBkRS5V",
  "key23": "4Z8u8Fc4xWsvwhyiaHc83Lh96W3nGesrrkWLCsyTZ4CstWr7da1mVaBBzbKsDWdmuBQ6CJUW4QJgwdtdF2Cm8Sfk",
  "key24": "372w6M4BxnikkPVPcoUho9PpgKpsjS5xnYdYeEeM7kv36vDEyvEZ6JyD6XL9KF6KpLAc5vdf24L7BhN6MeoYtiNp",
  "key25": "48fgQkooe1dQVj3VXJ5exW1ru2uhFHWLL6w3dpTBqXqkQkj6fvJs3EiUizRBC7z3GaqPaspjARZWwyvs6GY7ZF5w",
  "key26": "2YtNb37mWKoBFBZvWLNPUyUxvAb9FmE4JkMiqNTMMMzxH8MJz12mTGuxXE9bCw1J8o3qXp65Gh4mRUyXkZDMCkSp",
  "key27": "36dJdaojxzra3FfMDSJbnKW8mKYiDnx4C294nUFykzFpgMEhxMRrdrSjk5WUA4jmPi9PrwcZuZsvewZBEG63Rfvc",
  "key28": "414CymNqaYxigxCGowWTWf8AkgNLNYXxa3LCiiiF4LVd43HGexVYNJm7WSUBNtWpiwd8y4RjHoqT1DeMVLxeeFym",
  "key29": "3fm4Lcd7kLb12dj9rWZPN6sX6Tg8F2DJLPBxUHLLExBMY6V637sXcQE59PrRK5eJNJytqxdA1cDqByPayBMi9d6A",
  "key30": "3KphwQCnpsorTfpgKicMaXpJDgkHDi4tFcWq8Ut8XASeepH81cM7MEvqn9wRc7sg3Sk5FJUaSWzrKxKia92v6J68",
  "key31": "5QwL13cCcMPpUjUcF4BsVvZ8ZNFvPWLPoiGTCkRSdwu5SCbbD2pkZM6zeN5DtqhrtDffZ2XeBUGHstAU98Zn2Gq5",
  "key32": "3ppobBRmp8rzzBmRExSyqarLcPwqARDEqi2uF8wPvZC1XgSj6jyHjWfVzUyvD3DT6598F4pHCMgNTkiMBxZKo6Cc",
  "key33": "3uBvTeihUs1d2xgT1uSGuwPxTKbSSgx8MEv7eB36w8r7hM2Z34indkvNieaJ6ShTrsjR9EuEXSiJiZCnNUcwLo7F",
  "key34": "2mow4BtdyhZUSeCe38sgj8oHuNmDYXxWJprojgTfnofk9z3CrBRQkjeGtj2ww5jXrSf8A8MuKrnM37tQVBHcqBRC",
  "key35": "2ZWjRgtBH8KatxnWdCHQ6Bph9aMnoEi4Ry9RWsrqnvvygjArQr1S1ra5PG5Z22L68iKCHqaABowi6BXi6oJkJ9Uk",
  "key36": "486s2tWpNZruU9xSyV1HAAvF2es7pnrTP6Ws8nNSK5gTSAWjW9hBjtS8RWPdDo8sdj3K64uES2vTacsUHUr6CYt1",
  "key37": "2LrcfWUnNaMNEmNB2UDwMh8kyPzDnbAsno23gKCnuyY3qJEKTPwwkVTXXtuimPKaVCH6Jo6XMHALiEfDcLgSF7ZW",
  "key38": "5oJaiho6Jfaybgc45Xfv5D2zw1AYpRphEhT6UEDHWtD7HXdpn69gR9usDscVH9StS8Mq4yDZTDieMAkiWZhbEyYy",
  "key39": "4AxVb8ySN2RJumUeT7XxM2kGNe4t1EUSaGY72LKv4ZSrexjskC2KjJKAZLdyhcf1vXnJwBbPjLLsS4y6SiaEAtJq",
  "key40": "konEkT5SWQSeAvdABDzVzqJBYrhHxkaJT9cqbKXh7nMKxERetZMkd9MGkoDSMn8bF2exsUuj9cxgnyUE9VnJLv8",
  "key41": "5TpqoVdQbNNtcQRGwjj5ndEn6b6VoifWiiZUAnyaNratiN4kL9ZQX9ef5g91Ti68oMxMHjdPnTMWL8ZL8fqw68xR",
  "key42": "2hGAV63TU35zAUDmgMW9SaVyqjVyqiM7fDaKWTuuZQmQL9ZUwyaw39j9yy6RfBxuLXakoPofiZQJHSf5zMkQkbyE",
  "key43": "2Gz8rrC9e1sumJGY95LoR76XmpMQoTeFM1HLs9y5rNcBXudP5g6XiH5zwTAZPiFfQ66cNBCt9o9YGAYnUt2P15B9",
  "key44": "5ChLMV3ohfWvcHAh9zJjxhsUmSwqhyw4Rq3c7GymtVu5NYPZtsoqH2wYtZof9qPrNZqHB6T3r4nEtHLVSQUQQaP7",
  "key45": "54qfVxb5mJCurW8FQg3i4EvPMaLr5jkyVd6Fi6Nbem5rgfd9Xwi57Gwxon4P41uPX1VHhsV9FEUrPAPazRbvVFMi",
  "key46": "tNirti1edEVnhxUGkmBrYSrJ7C6QP9jvT86Hhp6uGakomDgRR224HXvMprd92ntu52VTJTA5C7UQUFtXMu44zRe"
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
