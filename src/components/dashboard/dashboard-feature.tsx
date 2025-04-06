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
    "34HzjwYvuowJLNPaQs4Be596wMwS5LApHDALbqua5rCi42iPhh9khrMHGDoiHB87EJKPDMQZB3SsRohujaWVfShU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JxNj1EEHruwYu3sYdAYZHdSF6X1aZVjPK2qPLtpJTeo3GvMmMFz7EACCMwzyY9XXNzeyHtEAHaJTxxbLhvjeAC4",
  "key1": "3mKitr6k28ZifVQqfrU7rPR3WNZ4VHcGaqYA5vYxH32NWPfqHmRp9nuT7EraFWM4sFSVxMm6fJS7j6i1D8Ui8Fme",
  "key2": "5vbXwLHNDb6KrF1x6AjqqL8F7tzzjs47mDrfViP324yQZbDsnZAER1KZwDHZXYviQbChnfnm2fVx2ePbnFsPo59N",
  "key3": "4n3DFeHwPCofjQPVvMjFxMevvsFkoVKnszagRbo3tiAJiE9ToctJiQNbdR3kSj1vBgnX7RQai6wZojoHQsDupEzX",
  "key4": "4k4RTan8sX8atiygZeULx3VeGmuAYDw8KDYGWesqthd2f5Nn3svd4qwm1Fe3AsfpFtTMVHuwHDsEqzDu5ezae5mr",
  "key5": "AxaDCjDRVcdb9tNj32gZL2BbRdyi4jTJ9DX5oYycQNDRZrUkbbHUEU7cEcJmCLaktpdB7QsVstU8dzWvq3WHwri",
  "key6": "3b7yR87yEA6pArhkGKuxP4zR9sXXtCthhZn6RTgrRnU6khdgKCeU7mSnFZ7YhmMNne21DHc4c73XeUyDpNHENjXy",
  "key7": "etLzxh89DdCNYjzeZWRcF9HKDC7d2EEGseUPN3tvkhtR7v7cCMtk8f3yEgu89wwfdnE6YixPSKpjJrov9QoS6K8",
  "key8": "4sCd1CNfRMFCatVuTy3f1Q22UqKPXTm1YikqwkgqtrJVRg5Q3t1zwTDx7afECTRn8qAp7rfkX3ZasNzZgHy1dNn",
  "key9": "29LjAik3Cek8okq2vvgNxmzrkjv3d1NXdkiSBGrLJHhngcVk4Ma3JkZUFtuyKX7vcFhUYnmYba5rbK683hmNAWPE",
  "key10": "5F2WQxrwFUc86V5QV3bWAhBaNpaqmXmUyGQ7mCEVZBxmh5a1nJT4aD9kcvGzNezys567Pduc2m33P4dNcGJozPsK",
  "key11": "XGUVhnC9FGTSbb6fAELP9zpSx8o2Sa8iNVZwmYHdBbRB4yFEqvynyXEYGLKxwu8Mf9hgMwt33mP8VLAa7GW25hE",
  "key12": "k2MJzVn1Z7Kr1KQJ6739GJhu3QsCqVekpP9YJmrxvYo1z8z8Acgf7mAQrQhyNMdV4LbpddpxwUpSn64XJUr3tkM",
  "key13": "2Fb7fATY4t5ASPkH3d1zYWBgsG6C8dtLo2MTrBGeyHJkafVkft5ypgB9D5tZMrSFy2zjjS3dcq5UaZmhUzPWEmxb",
  "key14": "5rZ5rbzLAHbtTXnYHPznQ2ggZtm74b8MgvnmSik6S48qdb48B5exSLwtTR2TVbv7UN1RSiWg2sEQU9k5bnFm7rjF",
  "key15": "3dgZDT7ABhzn4p49JiyuBofSRGBSLp1SGfKzbdUNxcAo2iWJak5RoxJMwQzVAxSzBhExh2MQmYzgm9ECSESt4Fc5",
  "key16": "2KApiPMqAYBZV8V9mHSAeSZ6f2tRbTkQZiXqonKSpf8uQwmXLaQ6Ny5M1WXcEM3ZHPcCv9K8NKPizdsuriHpfZRE",
  "key17": "3rMFz8rHj6Zs7GN99gdudQWHGvz52aqNNTtQXMtfyVAUmFwC3RuVL4KbEUS2WCT1N23MxMe6dUvdd8suwJ46jibf",
  "key18": "289gPB9bPwxoZCMifbZjqkAqMwKDnLXoTQCttGMKTH4DLzZLnQBx3eM5kvi6xDBRANXsZVNSBH8hGVWxQqWX64EQ",
  "key19": "66Wp28gEBeCNSkJJpaYUMkGgTXCyW4aqef7Nod1ST1gexvED92qwbWzJNdD5BqNm9paexZ5yVCBKTVQGUhfMuwTt",
  "key20": "YanDwLJSrMATSNo2sj3StSfuL7ZCgzekHjf7n4R2L8w17FeG2x4ntdAUzi2774NuiSf4RcBsqTkjFj4gnxf6Bcr",
  "key21": "5oD1KzUHNegJZjxYPbCjLvu6EmLt3grWAZcRycRckHTHjAgFCN5BxLskXUKy3S111NmorQrm2aRDdsGwQT99yeTC",
  "key22": "VYBpjJABQpKeM1Ax4GuhYkWwuS61u8wc8TXyNP5UQ87SYPK3KLtx3V5U8E5RMSjgCPskEWZ9SKrWXp9Et3zMcQH",
  "key23": "64QVpPim98ppDDb7yXRe5ZrDyursr1CiKQbL5N9j9i6ULCwfaf4aaCuDPSENLnQB5CxzLKn7P5xu2UKL8FUg2zuT",
  "key24": "3XVi9cA3bWdxXVNBnr9YjWrFY5UER9SYPzMt1VdRpZyu9CxXviGESA3v4dAt1AqS2b9992hDPQqqrco5LqUdC5C",
  "key25": "4E3E9m9NejRK9FDMs1134ZhWgwAUifFiTMZd9icZtWqKprZ5D6xb9ZbozERgtupHFJer3MM5YnaA9n7gxqisrsQc",
  "key26": "27z1ErrDiFT1fQx8CNLeFCDjQy83jH9392QE7L2WRQv1fKkksGZrmmyW1x9QkqPNzLeyvFgym36cE8nS2NVNK481",
  "key27": "3ip2pgiRLHUXSRDf7sMryg6gmh4DzYt5L6Ry7nckgZYGVKsGogDJB588hWZMR1TeqzXWdszU196Rf8BrFjYg4iyN",
  "key28": "3bZyJLsUgMTY59K3ReTtoAJUcfRCu7ab4o7UuszaX8MhwmEjAPii6phRuAjGqvNx2XdkHZwCWhTwhk6R6JJa2iJr",
  "key29": "Cf3FiYXJE9WzNUCn64NbiRiiCTgonmrEEY5qgTB1ijnGomrvo68PbBCJS38dYETo2oZ382dKCf3deqLqH2fsvNa",
  "key30": "2Vx92cRci5KXSSNJ437gGNkNNFPkunxnJabvKG1iQjhhLqXg93vG3xt2gFdkWsF1p2ZE6jLzy5QaVqX2hSd9mGiG",
  "key31": "5peKJYbyj88v2EWktP2fUrx12LKpvNFwSRgKFFA6PDuRkiZh7hn8Ca4Poor4DWwuoLzDAKU73WqeTvvCQT1xvRZK",
  "key32": "2BtneGTMbPmWuhiNVZjdkaFoSQpnGZZp4K4TpJgEGyyFYVbwc7VZgiD2CAKUzSioorutsPYdDDydUiNNFqqFrB1W",
  "key33": "2qLAsVnCtxWRjyF39uL11sQu4K5hYUYby3KoM32D4ofxRUYqDMvGTV9xS5RzGGpYszLtNo4HovDNu3LshyawJSoz",
  "key34": "3hDi1kAKbmjtnRYGTCVFpLsxfSvmN1qseJ1ib7GBFccMNbPa8rbuWmXdPkaxUmHA1cUiweYvETCcU6ejEp5YNyKX"
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
