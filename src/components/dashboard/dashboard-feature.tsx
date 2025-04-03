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
    "2AVxtn2nYQFQHcJdN94uY6Bez21LBsuecTZYgbXJvAiJLwtVyAFSQP3ZnWEgvTw5hK3ptbPtUdR1wYgoeFmQmejE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KLrpoxswNQeDXQ6g8gdLRDfGji7ChKVBgt7mCuE3XsFKkxEdzsXQs1C4u5PWTnbSAWyDoq6TrTzeJHTEQkHagL6",
  "key1": "3fr9FzZctZenqbcbcZWedroXiBhztmjVG3JV9EeDQT9VKhyFiHDDxrQND1cdxLzYzWiX1u38rDc8vCUZ7wJ186yt",
  "key2": "5B5ats5ZaKZvyRtQCfXZ7pxcB1n12WYoe1RskqBXZ2tzGREjMm3e32MU9KazpAWyRYWAvzE6d62N31dQpJytsZej",
  "key3": "5v1FNQ2jyfXU9PStPki64JWaJ7ygTFEVGRcYqeNBi1Jj3vvrK8qxzvwynDrdJWMyMNc8B1TB7JJFJeyzQoyEGsdU",
  "key4": "sMYFXtc64kAecaKtzW5CxUAKgQGW9Fpip5f5SGdyuuZL7Guxihdp7SA2asQzfQ613rpXBWuiR2JgxH1HCmPfY6P",
  "key5": "667ax45Q4b56vALmVAa9zUrTrvkmab2fDEyV29KsXh2NRKV6ZkZSJxnjpAjG8Btopd4gqXehMf29xi1BufdNrLh3",
  "key6": "G8RSAj2puHiGwHFjgZTvszgy8riJGENw5Bfo2GKP46nFe3jqms3tvBuN2zmZy6nthjWEWyNLSSYE5N4gTuivnSg",
  "key7": "4KpQm5XA9PmscrjRLvKGLHqYV7j47JzgWvUoECNwaipFvYLraVSR9zFhfSMo8kjeJigr3opgEfneDVyKDpVrPuN7",
  "key8": "3Jd1a9zrv5VcFcs9ywVUMcqwwF2Lixfe6yX5Yrh6S7HtcatFyYrZPBCZ6jCf8tYpo2LrU8B83YMYBowPP9SWaw8Z",
  "key9": "57vChjJLF3cHnqj5h7dnwhKkbUWMBXS3UGUEywaqNeZYxmvh6KF396RoCVmxvF72hNgjLRMaEft2dUX5XXNeM2t2",
  "key10": "4MmvoKbDpNa9YXUnSdsRpiiavmEubCv4Xu21DjaQarZeVTyhCFN3m7gSyQB9ePzymGEGA4Z6WT5TgBBNYFRwJUgt",
  "key11": "TzSjWyPiJQdfGQm25BLfJ2pbTJEuKMKEzYWoY7qz9W9JgLsaWgXiTRfVc4eEHNtXH26AnwJsJ7BFWXGqt711X38",
  "key12": "32GLA4QpiHhqw192DxtvhLEHY2xR4TPZ5pVfjw2dDrNppWqMrs6UQHkdzXmzrEmkUXZtHYP6t2Hwe8KTonSxDkiA",
  "key13": "63RC7Xdg3pAiPFJZHXeAZpFmpDDoQaTfYep2drah25NhguTqm54PPproCJjKXsU7sZ2BFMjJrAFvht1mJ986FMq2",
  "key14": "2NBruifmdLktgAXXKSpmiduv27rAB9dF81QzW9ZMfzd4TUL3wYow2nVpZoG4M7TBTfUpCL72ZxxQumsgSoMc7Npk",
  "key15": "ZhRUyB6A3jdU5zQbGoy4zUF6mJ9VqJ96KSk5pPHrcEdgPkcpjXuzzaE3vhm4m5LskerQq93SQTJg7bbn1AoLuXn",
  "key16": "656NSReEATCHtptXtt6oUwbWTKAisJWBZvvs3jxG4WWPR9rr2Bf1AikFVNGUELJwF4aa5iVWj5MxtWLkATFcqzJt",
  "key17": "dsj1VptRYywvHwH3gJ5cKDwKpt9AaiNAMuhheJm3A6qHyu6CQ6GqDfZGHYmZeWJALVaJi6zKRXvg7i8B4Zm4fGz",
  "key18": "SD49eR4LjjceCtUuX2fikXLaVUXthg9SE8Tyz4oRxyn1o1jDsggNs2upL1z56vTaCs5MWGg3WRUoASGSC56boSF",
  "key19": "31sWxZGbapUEocf2RmGGcKBC27oFdkvNpm6iCk7sBFDshL8uv3SCHfKPhXtBTiSYjNz3bjE9RMAvJe1CuFUBnvuU",
  "key20": "5qf2Vmt9uTQM24mDznTsdHKRLkC4XvqDqNPozhxwKP1EQ4imvJ4TpnZqSE2Fx9oeKFeHakZMN6L5a3pdUm1u4GZd",
  "key21": "3Ugq3bcKqxiUiZyN6vgwFt76WJYumQ9JMbGGpgEJqW2pk4RPED3ssTmwSsU6aekZZkJfycDw39dGY7FDeJWxGigu",
  "key22": "wojZkBn37i2pRWeUPkFqyiUbxiud8ok9G7nPevxBSCvpsEiXfiAijyQJbjfnfsB53pZdyk42MN3m4S4nUagXYyn",
  "key23": "tvryB7PWbyzjs2BZiHcALfLVSBTWy5UiWATuH12WcfPikrWvSn6x3Pv1kuSAWWjPjYzWBU3XhKo4wUcsrYgEMid",
  "key24": "3wCeu3tuK9Tqz1BwpY5WhkCa8jo3f91GqS3Qb893RDfXoeYLwQu3kvvDkZWZ4g1TAorRrWeJP2LovtGtmeRC4MKn",
  "key25": "u1jdPjRdKiFLXojYYEDvQWAinnmpsz1ScoT49xRRRXHwLbhQXFPi9Ey5yLCWD5NYqE1FgTn43sDmVdaG18zLMKX",
  "key26": "4b8CfRo7FRx9xzFSiu8NkqTRRXkM1xDyFTexYaDtCByCAitCFy2BBoKVQRMbWANzR8piqqKuFkJKizwJR9SyPNWD",
  "key27": "2brDheWmmgrGVEnED4HJWPQYGVvgKFdkcudMPq5jnJz9voaNy2Xmz2xKJdVRTrrsdyyARr9WJdP4qHD6mKriqvi5",
  "key28": "2Yd99KHXxubZJ43jZNtqfdxdqgt183D8NpnP8NNaNEBbWHF9KDSF3dJZxpr1gYU59ZbdRpsCtzEGvw6CLyPc9FKm",
  "key29": "373E5FDRupNpNhqSQHo9TCGdMxsx6ukPVj2VHY9ZkEaBitw8FRQLdrdxgLYCDbsgJchdex3RwPfBWN8X7suV1z1y",
  "key30": "54DyWbj19ujz2UB4b4bCbGomxkj58cbLpcbvANHWBNWwkFifK8khqzQ4y8LwEwJpQzxJy8zNQu14DfSB1WohKRYS",
  "key31": "x8WD6SoXQ7DHzqP9pQr31UyKSmepd9K45JQmbUkjF99c8587e1Xjt5aQMaYtxtmnvNiHFfvPepHR8DmGdV2XNgE",
  "key32": "tjU91EB7YddMdZgt3wzvkXW6yzR6u7jMMLpTBfuqXxQ2dqXGBDKWGTTFaVPsHwALyB9BG3s2wnE725VPsrJYT5n",
  "key33": "66J3vzfYj9mXgrbTtwR6YeAJtX9vsArYPDxpcbSU9ydsvD4WeEh5xc2wF4fs7fcKLcDHZPeJ2Fd42ee4D1j9D8Xx",
  "key34": "35MKqvHZNMQVz6PgJGw6zYJocmDzCUPAXY37XYe8yjLTBLxr3FhseVTjMwtnMsuxvmTVjNwcJqCXd8yYajHczU5v",
  "key35": "34QgXRVuHkTmVoZmzkXTwASrRTJuJ4QmX8aPmiKVDvLXY6oxUqT7VCkhrUftPtMxtFE8UrvtsLmGKHnpbaBHjiig",
  "key36": "2MQ1ET8NL7kkjDJtNDmkVSLxsEthQuMeBGeYbwHvu2sN2vEeygwa4UWGCFMcq6SUTa1Kq5ZwchDdHERuZ2zMZ21z",
  "key37": "s28vuoeUFCcVZ41NhsV2BoaAxbfxErKjaUaJJzS8Ca8A4h7Ddgy1wQU2NzGw7rVSt4nykTL2UewugpAuwnAQUL4",
  "key38": "57wkDGF22L4u4HJAZV7NktcHJRjkJghe9WjvbYWfkdNVPK4MaDiouHxg9UHkYMbvRSztpVbTADMrvr2BH4QFSd47",
  "key39": "37TvmeMVxxf6fjfCm5N2DLkDpTLvZTfN5BLsVC3D6rAdivikesJhoeTvprHCrsr986CJAXDjrusw8gDCBWVfNnSJ",
  "key40": "43GAUr8RaTHKJAE9Cn9tpDKrBwf9rBMLwBs5grcN7GgAUU3ZxN6P32EDPL1pUKhwHJWCCsBDQGhBsg57K6dj5fMw"
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
