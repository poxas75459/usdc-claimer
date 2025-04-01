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
    "1NpPfi96MfpAxhEEToMjiSQyiMzimKVWKbAn4xGXc9QFSNp6jmymDNggLuJKzD4Q7HGkEXeGEyB1mFbxkSB2Qa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mPqPUvz1kzS3Ym86EeJsXsaaGzyj17fXoz2Zo5FBsbg1KqVhrUUQRLRsAUPcB4tq7PZdsTPpHc2huEpwXL8TdNU",
  "key1": "5SpYUDnVY4HgnDJ3MNrF6cGKPvNUe72BdtMFf7QTAXYGDhEsahetkhYzXneExW5Zo8wTzZGGYdMGwgDxgkrtm8RS",
  "key2": "5dV7TjkKDJQTDhUHoDVnELfGQ2G1LE9LqWw5CoXq3KFjMqbre2K3BTwncAARLuxyTQDyD67eRBbaTpdty19QgSU7",
  "key3": "4kYxZFanx4MxGU8WBrwtsGYYbqzZBAXbZS5JQstXDFEq6Pv9dQR5j3MdsurX3ccVTkKATeABmDNRZkkZ1zocaZTo",
  "key4": "oEYrTPt8jxdG2QYBnS95MPPah4NvTuphHMBwFyoCdrF1ZgYkyS7rqrLSwB7Fc6oH4oJoSpYUy9MfNVW9MEjUK5r",
  "key5": "3LT8gSToFt5DcXpHis7x52u8j6vGaWgvuYDCzVvL9EBR9rvfVjFJKozQxBfG3V8W3k9SqggFRNXUKCUtSSybe5wn",
  "key6": "SZpZX1xqTzaZmYTUGLUvv5WpU8HaSLj3jKq1gdNfqbdyrDxfyHptZmr5o3F4jcFJHyN4v7GdoDPUKvkHMr1dq84",
  "key7": "YbSp3rVNbgsagKyabH7ib7gmwvyyLBkMbJDDtQwn6uJs5F4gyr5QbMPvBAyMvmrW8W99L7yyVkgpLVNAXepvMdo",
  "key8": "3uXHsA35GGt6kUu2ZdBpuxM8DGbFjsLKPUpn3tNfWsApDhPJUxNq1RbWmjWbvEuEm29coSudoKEmTZkf5KgoLtsq",
  "key9": "r9q5Nd8ZFgMPbGbMqRFX9L4qzdD146BJ9Bc7p7txYPj2y3KdcsxA3eoBQJAPtYxXP7LvD5RhhQPwkexFR9WZWxV",
  "key10": "5qy4JNvsSEESP7ZUdoi8MuoHwUXwZMtY8cbrwFisJPhrejj36Pot6TpNdTX3dTVA9FvcHo3Jfc3wCKWNticwbQjX",
  "key11": "4ie1Aph72Bk49bBCZLaEsRqNjeqWwcpDUFEi5yyDSSPgYNRBMAN3bgr88G8ahXzDXVhELZ1WgQpDg19rsQ9SXKv",
  "key12": "4RuEKfXFNUBCkFqzq818Q38fU7kwTJt3R9cd7YvB748yCtuU1nVijm7vdZPGum7TM2i3hHwHKWBtN53sATaM5SoK",
  "key13": "5rxFMsJa5m6XbJQv3bospaM4SzqRPfT62nD1572uP9zoAz4MYfkPMpv5rsbcgPuw1J9cNcLnNtUE8TNPrhvMYKfV",
  "key14": "B5BXg8cSUzsjzv3biMRjo8kVdnLcPmioSFKcQSwcnRmiwS1bJB3SK4ftt74cX8Q23Wj3WWY3sVqvQExUVjmpGW8",
  "key15": "42ziaFnqJ2ywMjYLt3BzWVZdBPainZckXZKBD39YquKdq9TeXnUghN8CcQKhSmfBCaLc6tiFUJEGuXHN64uTMonW",
  "key16": "63YyGHi2bekQinnVpLanbF4NpgD4RuHryZXaMXAAKWtig9pAWSPs2CBS7gRKBeobZkbV2DA8ruhknxNZDEx4dYrA",
  "key17": "2ehEa8uEQDS7MKDqZxHK2MSZfU84aBfTzqZHN7gHPdBPrmLAj7x5WTccHmU5jE1r6ErbokHtjpDHxzgm5B1mEfnD",
  "key18": "7wU24qkakfwFGMyokSyULuTPSJpGbGjuN5WxyyM5tFkx7dqSWgjfYE7tbaKdp5wevRW19DxuSgjfvxmj9XgMhu4",
  "key19": "GdgZDurtMGPvuwsbffvpgm3N7d92Da8P8PWRtfMeonk5ouCCEHqjvqCrZQaspv5EPKqzGuVx1dWTg9pqYhaXp92",
  "key20": "mria9wJy9sZenFQLnkhT6xYHQAZBMyKpjD757NBFNFcnf1pvF4hrBWL4Jix75SduqiDVTvtTdYr2UP4V3MghrSq",
  "key21": "4RiUhHJLxSCFpNT9t6PdgQVeNGYmwD7k9NtnHarJmvcK4ycuB2o5Vx4JDND2711KysQhfCRu4SqMsmDhHDQxdsDQ",
  "key22": "4gQnCmbPesweMsBHmMuJjdmcEqnaQWw4WHDQartLe7tAGyXoQ3Hy9LSzU5QPjan6jaC8hxT7DHFdNaQmGPSx2N7m",
  "key23": "5AMMvDpuLtFDA4CZYHSG6Lp8aLgNVMYhAATwEk847RqsrXYWLTfcesx6Uz2n7HkDP9wd8mvdGgxiqoZUFeLUE9rN",
  "key24": "38XKBin8fi3QUiqKxggJBJb6VXwrjy1Ka99ZBZyXfkNprjxN1xVULJBRnbG5fvSpJKX6R56qSSMzgHmEHgfGwnnH",
  "key25": "XUnMYo9etLK57h95fsASYgQQpPkFrQJuhi58mjGpbKuC7WuPph5BuBoWgwDTHMRC7BWbFUGFLTxFf5f6DfDhxcR",
  "key26": "5kmnjoEXUA3apESXSEKEy95BCYVqhKVUFp2Q8D6VzCdHb1PF3AzmtQzski9xXKd33YopTNsJGEVQGNHJCcdAczWf",
  "key27": "3QzePBXXTDRfGCGr7wx59AK24MupiHWHPtuApEebSo9vb8D36GLpx1eWHaZYhr1H52Xgms7eey6rHcBbXHP1yF9y",
  "key28": "hoeSg2eHG6VtsN2XvZ7WLEnAyNx3VRLS4rGYex2fzF25tkyuyCwVktbJFu8SuVBaJr1VArVbrjKsV5HkvRMy85E",
  "key29": "4Fgn95rmoJvfo7PEn3aBeTLG5yYAJieco15K2QXcTLB4ApcjoDBPuD9ieSSmFgHDx5UxSJV7QwCBMWwaeSTF5EQS",
  "key30": "bXeBZV7NPSveQ79NBYLheWQf9G1q7aeaJAs8vNkAPW97YyN2ef8He6Cf6KeEgiKkFkgyt7DAWqBfgXq1oSTpdcJ"
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
