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
    "66jYKfVUW6kAepeTBeHXyVvo6WW76ai453BggSqixuzqP6ymcc7MwmJ1HkrJ4DTjXCFi3PyEpPp3ZRrDVfvEgHAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2wRwEzeX1uDTbevZoRKMJRsJ7dWy81hmMcoDGh7d21dkWsxjABZn7xjSaf7ydAPNEyNcW3dDJNPUuoDc8xkToq",
  "key1": "7xRyBwNcxcua5NkMxqke9fRqRi8rLTvKSbjQi6y4XRb1WQg1UuXdwWCCq4FzET6df5kpsu7jMqhxfydaj3ZWQb7",
  "key2": "5EvsYRYeHogvEybN97B8tS6MYCvyii4gBB1LuxNkngRoZ7PhpNs4xZqDaruBtHqLZ9JtLhAj6UmH3PPHcqjwpLT4",
  "key3": "2s29fUAG5f7PQFMyWe4TDnig3ZG1fCzz234yfkL8QCtQt3Y1D43nUqntFzS9DfzQHEsG4j2uTJGL481W9dTJjTUc",
  "key4": "5GWMTWDenp1HKCQdrc75r7VR9pmGSitBxdLazJ7g3a2BPJ5bAdyTAt1vkb576V4eCoLYjmFHMAptxMjgK8HarxPv",
  "key5": "3E3q1aFPfFJmZiB3eFabTj4zwmojVwNDTdM5QJGzi1or2ZTHDH6arChd2zjrMem9CoM48WD6otp3hzJSrtyK8wEy",
  "key6": "2yQVfg4gAHghUjCfNrHAokz7fSjmS4m5dKnPx1axncEyrJmowz9QYeBKPrHbHPAi1vLYghCJrJcncwZC3JFQnqMf",
  "key7": "5z8HhZuKGxpsM3VVWCcHj8FWpgkt66cgSLnmZdmzBmW3UJExptys7DyoG33uRyHXBZnfmbbVULE6GkVQKcfmFPLb",
  "key8": "41LBg7AjK7c79FBpEaWKUtubWbQ2PehqoNm24D9bHPqxDKkkM7AYsoS724NKxfrNMs21kL4vZquY2bhA77B37cfa",
  "key9": "2jXSumBoWupnCBKh9cGZpVZgxPYxCz9gxXzU7C6jx1Wytj7VMyLZt9vkXwL6Qo1mR2YU6yyBgTBRWCGSND4UkZrC",
  "key10": "5aBHGUe6xpdSofrEcduwGXSN5U2ttvh82fgP5bmkL84XiwffLjqqAb8YtCNBMNWYUXimc5LFJuRS7JftDFSWivX4",
  "key11": "29F8ET4M4ytesjg4ZvqME5gyuJmT3Znjz2CvfoSa1z65xdSUwdP76gxW71i29w4Bn5gGHpXCCRWTTWyERtEMDMmK",
  "key12": "WyqoLBeXA76j2Lga7ykeef9uw2RapsXU6k4fYAbGNmBXJvaTvMn3oWn8meduhofU8JuPWTuUpU8GmDQsgZQscif",
  "key13": "47uJCNnRx4RW1DzyFynHzJcKaNB9rjQ5KNvKVjSTyWHmJyoSf2YFYM3dhB6z2EKG42qSpjWQSMU9RBQdkPC2vzWF",
  "key14": "3LNBc5MnsHLRpdNnGJTqGyEg4vtQKasbE8bZ8XBNvG7NVXgFmN3G2MwPPd5hYSP6PYuCpkMszk6o4FrWfNT1UM4n",
  "key15": "3w7pzjmHJy1uYWk9QWe5VCSwJg7AD8RXAm6T5CUDKf2Q3cMAxgkCmGfBCLeYebBLLf3AAdhXRimxG89USj3ghCoT",
  "key16": "5k15jhJrjvNB3qxzPyC6LU83jyvHXwk5EHD5QR28JN4QusP89bnC8i9ZXZYha2yD2dtd6Gtewfup9aMuy5sxWNwa",
  "key17": "5qA93L78Cuw6w8ZgdCzFnuJTSUVBYidKThfzP2tXrUhWASwc4jTAi6k5gK968Q3YwTiFzsFEE9kU5ybfzRwQXds4",
  "key18": "3vFPDsqps3EiVUkX4px4SrwZcXSUraFrRhYEzWpyyskKWq19viojp2Yjr9NYebiXvGgfmaTonYLJQ7hNNQRq3Zdd",
  "key19": "4w4HRxoA2fkTVZXxt4vcCmz862x2EVzYzsrsGqzvs5oQtLy2LVP1JvDntFybLveRe1yJYLkP97YrsN3sbTMXvc53",
  "key20": "5SUu41YM1bu26fvWgUszTkyXv7MCHaSQPjRwLuiHrvPve8rG4sJRk3DoBUbsSx9ZNULhrYhgGw6YV6rFNL8yAnAM",
  "key21": "5yh8EHb8Qe2cJPoevdRQ7SuCHk72LTzHws55VWAMK9dsBThQWyvWv99QmVFwes7nGKi3PAV3McRpTsfYs39oyfy1",
  "key22": "4YoHdKDxQnqiPvPiLWHQ6kHPP4QRFwsEW8CsYjwP4JX7tmPK4cXQejF7pijdA35xRWWhyQj1M9kPZuqaFiaNdQWf",
  "key23": "922JVeJaHSGNWiZkSKQ5qyYQbo5d3zD64Ax8RFtNHcx8xdjfsrB2S59ZZmGD2pwE7tHBVi9saxdjXLoQZK7WxjM",
  "key24": "3VoedU7PLoDKhQdPGGuUSQTpQhABiuPjDvih58VTR9Xe9Ckgfc45VjMHYC9wy5vXsY7AcMPGRbn5cnxjb7i5XmYR",
  "key25": "4BH4LJYKbfyNacn6TkBsQU2b2jRVCq22UdFFwhfAJCM7nwUDGy31qM9QtbdPeNZ7CQDxHHmwkdexi3X83eXGiNf7",
  "key26": "2m1myqy3ejg9C8exhkxr95m1Mm5SNCu1rZ2bbc2TDaGGQ37W5BeXXVrDL2BfuNiEzFDq76QfAd4mURzagTqXjGCu",
  "key27": "57GSymrhmW6inuAsZYsHyJmgXd9PuPscZ4U4f2CjL12QRH5YyN5Pc97f7m1Q9jQU7XT2KHao31PMG5Yx24BnDuzz",
  "key28": "34s3bKNs1VAA8ak3ufAsWuDPPPKqn5FbwgSaTeM8eYgeTVHhz8DofHoSgabi4JUAJhvzTpy5AFBBLFvM126KtQer",
  "key29": "4UYpV1cBJRKZsfV8Vgnrw55dKyyjWNJBPWyA7wmS2c1LYfN3TtHhotYGJzJdpcQrbTiuAaiFrUixbNk8H73YQaBp",
  "key30": "5PZEvBrreE5yUx2UZAjAdqsPDvaQX3LKxg4yfQG1dramh3GWtjWShkUiG4b9xTg4rKD8BN8SFZ1phCVx2K2vWCEw",
  "key31": "4ASGd4eg1eeUB9F23XqueBucXPFrPgPJnX3ASrXrDV8rUaxD3pwT1uiqa7yYQmDq5tmB158CHjgQeFEQVXysjQWv",
  "key32": "2682wP5HqZxf7g1oKX4UXtbp3SKMxiAc3kKqaU6cV1RUFfpJXk5wrHJ5efNvZDC8UwuQCBcZCVRaWrT4s9LFz9k4",
  "key33": "5PweLx7QQeJ9cjvYRHyz7Jdybxx18uAGHTu5wTA4pw4cVd6FFPoKpXB3fRddqtpdcnzNg6NuznM3cFWdZZj4FwpR",
  "key34": "CuJMKjSAaapzbs8QhuLsKJHxaTEx5rwRYcG45PNcAHmFG9S2D7eC97ds3X9pBX68uFQAsk3c7DSR8JZRivEtzJC",
  "key35": "3ivn3z3HmqzdKfbNoJesZMMZfnGEcnrG9iSVzf3iNMDp6JvhfYBnvTqSM5jvtDUTkVAb6vB86kgGzQnRj3GhjRxn",
  "key36": "5R7dDUwaCGifX6hFBqdT3NRn7fEGwhWFTjgKEPi4fX5v2SFjDaYbB2SFbvWtXhk85z8abgksMJ8ZTGjsbM1r77Yn",
  "key37": "3Em9EpA3aLdwwQeBpGePq2kJPnJCfGcG1A2GfAsE1JRxeiEG7Q2KEHSL5yxECdFD8m5TY1QLtcWU8fXwUDcosMV1",
  "key38": "v57z7AryciBStAwJotXRKSgas639ncsRN3gMai57jhK4R9QxnJxYHnPtbWmU3i1VBd1NasEnVeAAJta5AJDPm8n",
  "key39": "3XbpnWXVDQycCtigLZvNZbdQEYX9u3zvzcLU7XY67LaNMqzaMFBvArRNhd3zjHoaZwDSJqp34Z9Uqsy4NWFCgvoU",
  "key40": "VLJ6opH5DDPiMqHnEEsN1x8N75xeWGY6nVxfuFu6U1WBs7zfJkiUbSvFCD95E9CS4paszBMDPAvNq5coGRgKm7k",
  "key41": "2NeB5z5RALt9nhBGcYD1zBhiJYMJxtRUhaR8cMZCZrcWKns4QQ3EJCUS3odVaKVys4PfDE4oDCmT9pWbqs1yzsZE",
  "key42": "5JcQi2xEWAZbM5jgFtxybwHArtY2F4S11eTA2tU9xtHvSa8jmZ9soN2rSKwaJBLNifgvogW9nfAZcqQ8d1D75uBg",
  "key43": "ZQd3iuU81SkzDxMiuLvSv1zV3uxoSjnG6ycWVge5HQR5u95ruM3qGKuvxLKsaHgCn2b6ixnRfB7t17BrKAYtutz",
  "key44": "5nAAgSC4vVSSWJSgKukswUwiXhnkoHiLggi9zMPMfcs51h7QYRhVR8Zfq6MwsdjV4NZmwpx1s4DCdZ7eKXvtVjvP",
  "key45": "3aBYkGq4QGnrwz4vP4s4bePmGY2P4apn7c1ZFcn9S86U8tLDc4QXHVD8TXSjztAnWvE2FsneZ7dTtFMPfPe5Tew3",
  "key46": "5jJExeMF1a3qq2WbX92S5ZtGaXiBMJDfF1cagXrf7jcsugBsP8saBW71SLQt4tcTRgv7TZYTJhBbAC3Ns1nxcFTV",
  "key47": "53goYk8ET2YyhGGzq3Dxq5Ext2bFWN9hBQrzVxNY2uqYziSTZhcHAUyP3NQN3YaP7TCChgjHocGexrax5hQp3tQt"
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
