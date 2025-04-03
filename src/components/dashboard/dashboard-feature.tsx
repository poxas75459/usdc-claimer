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
    "4P1UnLRcrBmNi2SxRScoHYHvpuYsBxdXpuZko2LcG5cLf57ZqrK4iZm7hZZhJPUnD99RcuDYWAgvLfQjKhTPyNJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "389ZdNGz57FU1VLTNoMN2WFyhRphxd8GhQTSvEeNNWCb1Y4zE5bfpTXaAaXXCrDuU9f2jUYtmngFwtb2XLcUkFnZ",
  "key1": "22umSQcLGZrb2GAvtu74CrPVpWSAUNysp2KA64cWfMwErnjvmjcfD1edHkv9oop5gYnBbyWtQT94LuiHCUMMaVMq",
  "key2": "2zuNL8DYN5FkqS4WSPY9MCRU1wW4VK2fLu6V22ESY6sBUDYKem5VbMmRhC2JjPPP4xwjRBfPXZHGonDSon2Nfb5Z",
  "key3": "3ALPnECpGdvFonAJzJhABqpS2prRzD1uwPTpVPTqYzRGtmFdbm4FUr8d4cQZLcaexrVbNkKxjPsv5kkqYby9tYxs",
  "key4": "21kTVnptV8Yto6H2X6DDSvLLYidqUq7rgojxw3VB4N184mGzgw1aNrL5RSGP5Xsix984dEuShqcSqyrF2Lwyxfq4",
  "key5": "3B8WBEkNuRoTkLmgixsiEkeMkXvce5b6bqhqG2LCMwoKfh4zBXEeiTr2AKqT7yDKtHiZKWo5WdpxtMYJuX2EQ7yZ",
  "key6": "21sEeqAtkRbDfAFA7oxdiDiiBej5CD2ox9BVLANVjtyJ5H3Napkn6r23pYUg7btU8QKkH7BaanKsHaUAuZGSHQ8Q",
  "key7": "8y99rws5H6jnaShJao3S15SN6nsFujGrWqDN3q15rQmGHQvFDQLg4qZ2fFMghjNTeCXbGZs7DhXuPd5YF6C1D5q",
  "key8": "4McNjegob2HugBTDBgYiWViTgvSLC7H1R3KqehmUzCfstEVFtT2tXSQ5Lu97sqiRJJWr6VKD8XdJRZRWVRG4a6ef",
  "key9": "2Kmoju3Tw1dhEYtV6ttQMAJcsZ5rdpHsjSGWvx81d3bfFFr5iZMD3zVd6gHqqJgG1QpDwbhZjHt5Mq3X5G2wjMie",
  "key10": "3XRvpf7ntxjqsQzkJmT4YnK6PP5byg7VnvZ4vnVdp4Lj8gQeruokGytNNc3QL2Q3ASoYfWYNpj6VKj3MmmJP88Zj",
  "key11": "4RLJkYDwfYSGs9L3GJP24a2BcqFEBnqraZvLskGYih3pFHVWBGmZaZMmbh4JaUe5u87LNfpzYhDXhp7LhBAAYQJ9",
  "key12": "U8JrLkdiobbs4GcGSSgEyBMQn8fDBXBQEXV69rfBs7xH9K96HvZztr4mGLrBJyNcaQ7ydC1xTA6uXXNxZMryy5A",
  "key13": "5P5fT2ozF34gt3hHAHZj5C2xfdr7JN52xJxXRYFkpzpn8mt8L5M22cn6qfrCbabqdgQVnDQhCPd88fWb7qvc1mqz",
  "key14": "3gBs1x5k9i2Vq7gV1URcLbiPjLoJsVb7VARnT1ofmDERkQhqgHoFfeYPLvxcUqDymxes8fXgUttQ4zXhXGpWgsD5",
  "key15": "4sVtqauKFkFAWrfHUFBj2x4oZgVbxupzLUsEtNMChf1TH5H5MTYHsLcDZW5us6xiqQaCTVJGB6bPpK3puzqTcGLQ",
  "key16": "5KANnmPZx6yPJ625vtdZ5XXm2QW9uRXqEaM5wTVnMfP2kP2QBjpGUnpfgFtTSbmYpcPPymr8JgCo386HCJPY3yqg",
  "key17": "4Yqw52bT7wiyqFdxsMtt4mosgc3Fv7jHztY2hDBfe3ZXhgD1TSgPSf3oMDpvtmdCNji9iDE3YyXqrhStKyW3t5K1",
  "key18": "2ebJUZYpaxPtRTYk5epatwh89jLcPJjfQugJmNZkTDGnypfLw4yu6dsQHQiA6w1hXgr98brXri3AsG21iDnnrYfB",
  "key19": "3sQA4g7eQrPCFvs6RuNNUPywBLP4fZv3R6opK9G9NpSGJrNwL7Sd9Kw79CqnEifWhcwVGxCrxbTnBbk9YkCkHiDa",
  "key20": "2tQdr4obiYS7EAEL3asQW9W7yHV9n4T3uYVx3xec3Z7XRigpJ9WZBym5p3BhrMJasYCDfWgr7ge7jj2o4RyekFVT",
  "key21": "4XUAv683f3pv9q7WGfjatEwBR3fPYT47XRr1toBiQU4GYX8XgvcpTc1B7FrjrPHnwkERERyunSLX4vVbmcF7sUQp",
  "key22": "2MwVdeBQqNqq8WmYyLXY5te3faQ6s73GS18oRffDQpSueayaX3FbTWfyFHtcquLhd1qMhxq2sCGLbuWKcb414k91",
  "key23": "59wJhX7aVfE1Lnqh5qQo39tQdA7dDwde4TtbJiLf9ASV7nfwXf9vVUo5xNnvXJH8mN7TUFWqCLGxRW4cAKkAog49",
  "key24": "r3iFkqKp4Y1DMdCxn5zoT92ibrHPYSfBzfHX9qDphpvbkzE46ZhpD1iJVb9eUyEXJEpKkuuqgmJEVxri2DEDktA",
  "key25": "2cKyJtG52WQeUWcPXej7sGEPgQuivEHY2mPDAwGYk4pCcNNywghn2AEgrR4SyUenHKPC12Xtu9XkzG8bKGZVzN3",
  "key26": "3vkAMWhsmU6XPk31EuxxGRAcC2A52aDoMrhd3GuQwX85z1B7U2E695aG623QieavZjgU8YGuFxcmU5tS58ym4Tk8",
  "key27": "67phdj8Nc8p39kZQfrKcYB4Tx8GQMH5VYbpc6hMhHXhcGXwwikLxceFkjHSbvDj4oGRUnf6yBuPYu1szYypjPpo9",
  "key28": "3mG38VmFM24das8C3RAc8CboqRSPjG7stR1JsAqp4NbiScS3mSUwTMCYJrpXg4EAVcyLkUAFp5izYChJax4SXhow",
  "key29": "4eCcP5SKTqQsCbMLKJNhiPPdWG8ShSdZdC29y45Qf4ZaixhVNqNp6ZbRvNQYHwUHocjdijaJGkMVjcPCwWM8EWQH",
  "key30": "23pMVqq2AEhy5MC5XDKHtAagCDrCGTje6sZ24xJzyp4jAp5fHxFmk5YR5CHJ7T4vAqyZhuVZbYbyA83zWE5NjSPm",
  "key31": "4RKECZ6AWn9WwU5666QLvHT648xAEvSAe8dmLCQnRMteBDApYDLqncNZ8FBaTS26aBSGbxwQ4re1dRiNzvk4qv2k",
  "key32": "5mehejHXZpJZGKy8ySDVExGhkqGe7ZGMTCsoSRGVBUvJCM6gjdPnEskML5hZTYSXHLdaWoX4pVpdW7DqacfenGu5",
  "key33": "29XSioduizKL5HDsGwP52Bna13nN7PrzB87t6dypaNtU8386CmFgBF2kTF9wSuJJncGHu1cQndGaWmfnrXMp6iYn",
  "key34": "4FLE7sLbzquxsTGLfNQzNu4n5K2eK9v3uGmCaH9iZdJtnVPkKYU6TT6e1vKDDeKGP7Fd67SpVJ5GGZ85h71fLK6j",
  "key35": "64tRNf5L4cQnSo3Uw6yuSCeXPDvSnTcPRhUABVt3TcC9sRwNXTe3DidJsgvcqigRiAmPekXA9vz1Na1huWHTq33y",
  "key36": "3TrK86Dz8an9KnBt8GXv2gARgjRWshVBGuLUe8QwBngjRpeoSqTiC31JFsuHPPSLSFDWSd3rgyd9AmZvkhxN1MYS",
  "key37": "4GsgTqDaSsvozVLNLgzBZFxW1VVtzjHFsn4T3jswNYwB38bkztjtHXmCcxEQSep9EyjxdjbPpHovEyDTjgf5fMoC",
  "key38": "2GhRS5tf72BEJgpZ81JAkiDiPwkU7UrDqPjCSfRW1YrZJcEQQh6eqy2SPEnyJYay8KkXdcbKRwmcgMqvDk5ck1KH",
  "key39": "3oFkAU5vs2ew6BYrkpAv98DK5JfDh8CpxUxZt6cQL9MEoRsH9HWkJqf3i3EoRzE3w62a4fXDDTW77LAESGWziCQr",
  "key40": "2JCBu9zzY9sAQH2VxRd4LAosnGpxf9g8ADF9f1i7EB8qts9QQjTqJoB9PoH4fHwx1p8TgSaqtMP85RBktNkKgUj6"
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
