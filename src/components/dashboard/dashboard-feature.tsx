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
    "2zj2Vk6H2jzRndoeKhFcDNQMZ9ERpEHZbgkaoAMNgweJN81P3sHZW2mF5kMqCWV69WL1kd26AZp6bcH4NUAXfzg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U15zRu8y4WFBin6HWHpDvGSHCaFDKxSYibTeBKgKLFHGCwTZvr2p4pLh8PKw7yALLuR2oVcLpHktdHYJ8rJMiVv",
  "key1": "49kt2qcQxxdaP9jGsR7x7uTCGyQ9JDLgYHDtB5oy7bfBNnCMKWtTQ1kZMc82nLvs3tRMieQP8vpKidFuNpdgRWmu",
  "key2": "3Cw1GXCxPPf13KhV5zCwae8bfw2K9XV1o39MT7i9bBibus77ZgQd4dcEeeQBWAKC4jnp8HDwXUTrpcotHcwUSfxD",
  "key3": "539Spzcoe6x5XRS2BoBriP7T5z8juFEL4e5fZbNoDybEhyTjvzaVSQ8GUaUYZ6igCrC5DwbAq7muSKfMFZGJVSL",
  "key4": "3DtCiRKpPwDMZMmezYf8kkBH6serp55iNQ7ttKLLQ2uxLmRm54SSWBvib8DCoBWoahEH6Qx1LKFTQv1kfFVeQAxX",
  "key5": "2UjuEEzUwuUvKS2kp43VKDmyW9jpWc2MXnb9qdyesMM4zNjGW8o8m4mWHtm4mUF5ekhrPugUt93iEuCgGV97v3qs",
  "key6": "2wCotxEknJrttBggjMgby7YxFptvZGKeExZUXqcmiEiuShBWvBp6VQjn7zvskcvWUoiJLhk3axJJgEKBDY8UuvfY",
  "key7": "3aJthvy99dDNfAgiH9QvBQ958k46LntY5fkEABHQu9jsQi6TgtZNfX8VYCFKgVKzuu6Q1ye2CnRFSmD3R5zLHLWT",
  "key8": "vMhy2ikLokU752evyWuuxXk2uRChnzHbnwj7MfAryrT6aHUNxTqRSzzxyYdVWN5Ywr8JbduQ5FPoH5XGaFi6yXs",
  "key9": "4ZHMmLdhbty2qHeHYMs454Xid9svHZQwZYWQdqVKo4vJMUHcSUSYfUi7XDkrXu8smXmxi2PRtaLbtWjWUYwiJD2q",
  "key10": "2KXzhPvXWdHz2m6FJLQf1bSqJEWQNjo4FhMYS9KhrX5QK2Skro3m73rSVZXruMaoh5UEP9gMbnAfTkcMX46ZAXWZ",
  "key11": "3eLjCFGFxX5YmYtthhDDKwX4WRkxxoSfR9Yr1pMLh2fHm2vzeeEswgUB6K3sCKYfgCb7bFALPzWuvdCNn4Tmo5tQ",
  "key12": "3XFDP4pfSnaT7Tq8ihKqFzq4FJRjPDo4gbMJYiduFVSHJcEZQz7D5TwX4JeYoYdDTFAAtZXyxLaEEpich6UPoyYU",
  "key13": "32qyN7UvwySRkgF74vbTLPxrgpgmBmBZjfLDssBfmLTqWy7kwzvxdCSa2jHKjtd1xjuzqKPfoqThcVNNWdUakMPT",
  "key14": "BZsxQqHrf97WerN3mqjiGeiyVdChS9SJb8PT99ha5Lkbx8Yn53yMCpYZABqX3dwwm1ozLH25pqTsqyAhqpzeSdq",
  "key15": "5QZ3GkAyPg2dT8V6YHW7MseGq1kqyMYUrrUgdTLivYfKfL9rBootUriwkNAsKWEhMK4tty34aeMfQGgaGXckprr6",
  "key16": "2dhJfs5JyyUCBWD9vUGNRsDzgWYehvoxrt1msNudryAJ1JpGMjqTrCqEeMKqYQRbQCfPAT4rY5KRzPkZmPEj1pxG",
  "key17": "2eSZpx8jp75RhQ5eykEmBbHEW7GmXCXsLmkFxjaz3wybU1RTV3focZoryMpSsP9DN9yjdfhQ3snur1vL4xd7FbTM",
  "key18": "63FkVsw1yEGt2VSAivLAJ848bim1N5iFjHJu5bP7NSGXw7kKMF7ESKfSPC8NXd6uNi7j9SpChDKXzSsh3wSYdKfj",
  "key19": "5cYjmCTXkVz64vdmt5NHvrbZXQx8r2wzsNPau2zfzjXMGN294vEPTDqqxk2DYAmYFpV6tGJKddrf8VyakrW7xCBs",
  "key20": "3PzWvjFMmo5saJi2B7VkqFNE58d39wHxgfJcv84PwjA3rSaX147Fr4LZ4YRNTMDsRa5H8WC5tviSvG7TYDBernAG",
  "key21": "eUD1Tj1mxMTviPuerYD18F7oWph4RRB6gyiEmjifDFtb9FReYwDRK113MNFsCzRBmTuKRrUUdJXMag2AK6ZRavW",
  "key22": "2YDkj2GMfkkMjZydWuY7mpKiouG8LptT7ScrQje261K5e2hiWzbCrHDDgwLTsALfWjMibdTwRry7enPXWSJ7GCrC",
  "key23": "4JAqe3FXnvdCE11WmVAbhZwEA2GxNgoFJscTDW4X9dfYyHrzBGbLDSnPUqJCvUMtg5ykCN7FWRvRsgRdUHeQKP3g",
  "key24": "5QnSrrEsugmrqEmZiADDrwJUU8mc8qoTKQtAywfxZb3fpptpuAdGRy2jtupWU49opU3wPgYKojHJTDwxxdsAwhaF",
  "key25": "4hA94pVwt3ufN2ZhrN68BSbJH8ZFBsPwntTUtV39tyG1MJtf4KyoJCHzq79dUHYWJXPYJzo4jJUU6Z7AY2PBEqZU",
  "key26": "3eEwHZEAgF7gumpq3g4SF6zcJgTz34VR3FNmsuXja1ZM2HqjQQFNNdpWPbkiAnVAQPeFCK8mRWsWXQVtf1jhbAm7",
  "key27": "2wgw9axSejW9kxxbfnCB6mVmg7J4suEbAQ9eW2kasBpZvDosaWu2mCCen1fUdsj1rhCUkAg6xvXgfEQ3ktcoBAPz"
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
