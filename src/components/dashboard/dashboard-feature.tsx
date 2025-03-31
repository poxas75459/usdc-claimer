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
    "5jRTFTvQixUbUhzUFNpbB6EDvkAx1zEHMCawKBQoGmJDBySqS8eCyUtCNBsZQyWb7b5nv4qvbLYZ2b6A9fee8zZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63bw7Pt8xooHdsK7hQrSM72zMY7UB2zTbQ2VAG2PvsiAz8w4ChR3dYSEVeFh8nUh8qyQUNU7VKSNPjJHv3PC6fKB",
  "key1": "5CBemkNk6bUxV1Dt9ex654TE3RjbyN1FkTXtUKyXs2P5BMHYtRoDTavbHGP1sZqPpSmBHviFAiyS2kAFRiivYysN",
  "key2": "4PDJBrmKC6UExW65ckLfwXXQdH2cvPmNRnpNLS4JbXfPd2GxSNutiVp9ZBq27rh1HTyZ7otqcMfW2Mr8DVtcSeeq",
  "key3": "3QchVinnVgr872PGxCmMq4AAxdp5AZk1QpdGtcgpEZYZxxmr67nS2FoAWPgHGuR36iHRnfqE5LZw3rs31cSvKmyN",
  "key4": "3WJVg5o74XZ1ucGx48n6Ui34A7rmtSRAry6u1KyxmbwntsdiAjJvW5qLS5avywUY6aLUF13C24FwSVTLoQwJmQf4",
  "key5": "4EFjLhpymBDKp7qkRJnQCkfYNNaqEpEvvsNGfCwC7tgkNFS3GomEPmgWVT45ia8mSpqECc9cTbr4qby9xjWULLbV",
  "key6": "5UnmpMTfXfEqeoHtZEuQKRuGZy6tyWfQymRJt3GYJo5HJCqR5rePbUx5uiLPa4YaxGdNxWhnBH7fSRvtvWDiWAF2",
  "key7": "2DUEi18EVJb91Mb4hAg9pShr8wsn63i8EnZqDoheG4orkW1Drz6hBYcG6iXY9jFHxR6NE1MeaY6xRQwFSyNWFdWK",
  "key8": "3Gt6u6WdzE8XGa5xYsSuvtm6kGHMWUWkYGMAgcbGBwJJANhNjiEkWa4t1sowqmJoPmXP6mSrojK5sQ5dmZgv9hT1",
  "key9": "4DrZbMKuBcg6RbbLDNcLk55zu4ZrnnHTCCWSMMZhcmPyUxGT4bUKN4Btrau6qnaiAd6SYU6uwdY9985GTjM6UKB",
  "key10": "32EuaGnd39kkKCvacNULiuZMmpHYiK7xXXMENUsMvytu2HbzsAuBbXnjVhMWn1W82GcALgyoKoSxKZJch5NVhHh6",
  "key11": "51KEjbMVeR9NvsXYHQW9NecmKrE7FdHhxFMShb2KFJSWXc7NM5JjsHDfzgrLuGw6Q82RT8iUZPVbaGYwtrLxoRvc",
  "key12": "3sQGpZbBP31AU8H7cS2ssJcryRSzBQw1VmPsGFEswhvLNUBAw9eguyJpof7c7qvEyE7kfkWLf5ytq55vqdtyjFxA",
  "key13": "3tm1myxWP4ydj61pv1Mo8mGS9LuwvynFcBxvSHv8WVMNkvkAbzCQY1w1uDWmRprxKAC7oFK6MTo8WBPs9Qv5d5dp",
  "key14": "zjVBhnT6B9K4e2aqihCaPAASWYSi63xp4wxmxgxpN1PUV8cedb2PbTPNmimCAe1RUiRPRSPRk21CCwvV7j9dSZ7",
  "key15": "5jJqrVSaZ3qjkMrCd4nUMjGUQRsUMXFztv6uwgTRVKQDnLF5GjFFtXLndjdxipBREGjuWoNrG1sPX8dT1sbGikkJ",
  "key16": "5vBK96ZmMJSff17GscZupKxkAjC9BLiSFiS8b3dsikfdVUU2BLWNhqpxNyNoactvF6zuPeiYxtU5YYhmehTZy8Wu",
  "key17": "3qY8K8q9HV2xNrymWPXazSv9UjZ1cP6tX5VeDr6srqP6RaALmztY4YoNAH5rmzXSPAqDbamfuJC5VnfXyFLS7YHi",
  "key18": "5YpEY4j4MW1gpWCgn3PYNRveeqKSM92AhVgjCdzEyhxh6u15zqMf8FVz2MRSNdo1T83Hkvj6c2N4MtH5dXH5hFjo",
  "key19": "2bWuxjRraBY2qY3YW3DsYUsNJhZ8shJq7VXzsK4LPzZyy1vGHUyQRAcrU7dELBA8JK86Rr26t3MCm6P29C5kfcw8",
  "key20": "4sTQ9oNbFxw9UjKCv2R2Cm12d21yE5AYE23dZUdQjK59xoLokiMy4gSQsK1chCzrdZ76HvuWcxJtYHGHFSewcoUv",
  "key21": "5Dz4jYAFdHZNKGbjjhoRtLAZJ9bApAty6RcmHgBQTExR3LePBkkJwHWZGFRaFiCnDLJt3jX5isVNCp2AMv7zFxCV",
  "key22": "29apEAo3m8S1e4NaATtpLFCrgro74kRc8btQH5WB533MAkN77MpAahpH282SRJswyXswJVhahmAnHHSs48Wn4Ai3",
  "key23": "2BkcCEE4TUErNNT7ts9vLmps3dC3sdNJxxRU2igp2zX74fbJpGVs1yWuvw1UwDvnkz2WdkCR2RwtPA58sFvetKVf",
  "key24": "4QoSj3yP1BNetof1P2w2DYG3S4byZCnV7B4GYuQHnGLy7tzv5gQj895kcqwbmt8RCRUZ4L81K3vGGWGViFaeq2EZ",
  "key25": "5w3GohXP9xJXiwJjg9WdEzWhW5jShnPbnhG1ZTu6gcZLChnhDaXEKqxDeYWRGNLsDtMoHhC1aCgVXb8YC5g9NntN",
  "key26": "5g4RpPYgkgHhh8RLdvotQ2BNWG5EnvFwtwj1LPiGCkSZ6iXMGVhdXNG516WASLmXBKtEEfzF3B8fxD7qkbQmCqu9",
  "key27": "2GoBmB5GMkbAxR7BBUfqfP7qQ8NKiraVNMRtqqYop4b3n8x4oy95mPchFBMRCkSVU9HNGi15F8nM315azXgY8Dm4",
  "key28": "42QeANPdvCJUeTPZ1aHhTLigA6jnFnrcABsLDGzyWwLgdKfcoePXaNz5kfvAwWqnV3zZ8JQHXfv2UBSTyBNQNEcs",
  "key29": "rBhwg3RSbWKUHsUYYdaUXkcatbjBQSs8yiYVxGo5h4Ug7A7YZgGsqN51Xvom7iPw5Awq7K6DaMLB4X56acSMPoM",
  "key30": "7KuLsq4wm5wwqGiXBJBjM2f4gugQdAfbkbx34VgRY8MPzAuuweivCaWLYZoMN6bqTXez2U3Eh1tdCr8wAYi8ubu",
  "key31": "5LRPsPGaPmcQgKXKPUNax5rzi5e8Dudxv6g2DXFDhoc4pRHhYHr5rkaSPtpSH87wxC9jSbDRw3rc5e4JuscZSiFp",
  "key32": "3FA8pp9GzAnsVaLYHcjrcwZJPZudcPRNbfB7rFERe3r2pqjiyP3ettrnKtqGeeeuLJzbkx24ThnJPW7XTNYSQ3jh"
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
