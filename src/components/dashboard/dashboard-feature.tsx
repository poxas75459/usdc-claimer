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
    "4MdjEKSpQQTwABPYQ9esCoZYW452ZKXujb2Nk1yXxySkmWyCi2Up8oJKZttFHXV4X6SjDmyhBCzSGarLT69bBeiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxFmLtRoDgFTvPDGDhi8AZk6Fw6FidzvnPyYmHa1QxDHFKxMdqcs6SZAHeMpFYqrYDcKBPciYweUQCDvYAd1Gzx",
  "key1": "4WLNXN7UHoEpK2oFJz7cNo1AVEDbuXsUrq1EvfjeRBuPEWU6cVdwmLbExSGBiA4XZLjqcQHY5QqdukU16TNZHMQY",
  "key2": "5QcSJ947Roo4Vj8EEP93kvUC2xescXoX1gyAB2UyjiGjY11vV2pU3oWzCQYK1168NVnRsQr9r4SURbFbHzrPTFkH",
  "key3": "5yMGHgSp1phn8UheSzWi4ovrfdpCg76yZ9bLfhdMsnSCLToVW45DGB62T6kk8EawyeFcjXHyNyzckhNCyrR2nLvm",
  "key4": "qWag37XsCNTiUpg5YMv4wi4k4i2TFoU6cRnkrq6CD8JQwmdyq35AECZACw4wxzKzxavUDejVDA5rxi7Z3T1MwNx",
  "key5": "JiiYakBdKZDNwiiB4tAnJPsuemvXR1CTU8pjCShAyag8jXeUkSARUr7co5a7cKVMuqVYNG8qkWPM28qiAfW7MfV",
  "key6": "4sBBjoDEwQns7BjYXeX7z4XPUkHPXqHmj3ZQhKo2yMebzaydh9EdxQCau4etLhxgMYT7o3aNQmRAU3GojVgvFXfA",
  "key7": "4gHQ1kFUUA3q4JWb9tTHFeVQQnspk7Qb7E9LFn4YgPSQEXdutYqMdLfJkwPNwc3vZqUQYzifocMtHGdKgAfqa5mh",
  "key8": "481Pzx87uScHVLHQ8yL6ZBbq9YPuVru3A9vj6JYBSPP6TBjBaDPzZUTd5uVgYx2jf6mF1yV3ppiLwNnNMj9z1Gzp",
  "key9": "3731Qt9Gaur5PDkrN9f44BoJvbxE5RsGr9y4BGDYUtBTH2czzTcdt7RdasHd8MozZutUu4C6cQnUiWJY6nLgFW3r",
  "key10": "2tSxjVdAWHox1FzGuPoU2RyAR1AuM9wTZcGWeAbJxLmPDcQ7hEd9sfVsVa6Xm2hEryoSvDNhU75kDASmM3KvsCKT",
  "key11": "6a7PebAWs3gWuWJWYNUYEh9Rcw21XXAYC7f7e6oVJuung9MoSGbYhPyc4krb7pxsJDRaqtZ6ZRgsWcqfBNwjfDN",
  "key12": "2WXX2khjSuoYi7yn1XjLU2vV7hCEdvwdoEx1bFeRtPHxcC3Wu7FuvYmxQxhj29k7aVwAgds8SpucDYdhvz1VQNpt",
  "key13": "2QJvKEZJD2qcUb3f6487iDNAGaU3HPkUqmEUxvcCgjexG4Mq2mWJsziFXQqqM5jM4ob2GWJM5C2Hm1hghWDwNwTK",
  "key14": "3Fj69tdBNnY7oKRV2RnbyckWxjZbDukpzBUv3yGgt5GAhBVJVEEQLons73zrX5voQRDrnh6ZWLaX3aEyYYy2njdn",
  "key15": "2xWTEhY6zbywqYzNfpf3L7Uw2DpABYqepcexB5bvMQdrHGtZ3WsfqP76zBmLS2fTRzSV9PxGsuYNKFj61Qmw5NUp",
  "key16": "3NzpuVVRLVRQjDuioPjPkhyj9saxNvY5o9bJ95YvPPnJXEYnsGRMHcwma7DmU9NcJv5J1b9vJianHA43b5CjnsYj",
  "key17": "2uG64JqcG9srKoR2M1WSbVxf4v1VzU6yZPLki3hfpQTB19GAEaP1eCPunwtevfuNgs59xHQNbe4xqHSrC3NnydAD",
  "key18": "4rvwjXiRjBudtJqUqmwmfaJ2eXMvxpgTGfsdbJQgyb21cyavjd4sS79t8xip5buZQ9BSjJ7fWrYLZs1etyAFRoS1",
  "key19": "2afvDVUGWcgYeifVb3iTe3H8pbURKc1JetnPQBGST3PB2a2zmhgUHgowsjGxnLWtNYFv6v43P7v8D4UGK74yYZh5",
  "key20": "4sXxppGFcHq8SdLDnTBNYe3wgamwrGAEveuQnwev59uVHWxv1f2RbYibi9jW8vF7jCkBZggki6LDBEH62YQxaLAu",
  "key21": "4x5osVqNhAB3yoQcngSwUEuUKuxJr6Th8jgqj2mm2FpW3JxyKGE3WUMxufdbVwEWWk1CZLrDMRFwj6xVt5vGHjKi",
  "key22": "3cY8bssSD9MAnxMmT2a5V6q6rhjj5TBxBMhuNTtTXtJpj1ZKetLhBn72CcBv4ygt8oAnpsAEuNS4VmE11QZNa8L5",
  "key23": "58guKAVgYH28w8hUGP51c2befof2dQetoiNw4yTLPD1qWicHPeXpwEid9tfxktqp8T7HX3ou5rK4HtskWfMMwdey",
  "key24": "63BEpQSnVG1SDzdRRryzCwXECX1JbVQhvvt5Fy5X17hQe9GELvA9pkJhPgKqXCy1TpEVbu9b8vmTSLrho4atyqc",
  "key25": "4hrNhioxbEWekVGmdLPjxnzgGJtKhhfqCaoNPANhbzjJwwJBK7bwnhRmmV8viwwPSsJVXLXNYqmYGYVBnHAPruKS",
  "key26": "8LaDebf6D6pF21iBD1H14vB9EJqj5y2gvN6NeyvApxCJw3iWmCnQjbFzYgywXgNNHNYJAt81Lnzteyk1xwFCaoA",
  "key27": "2nZCxbcBCHhCntgwohoowXuAToteKCrZHTcKEHzsAMsv7xrnyNZx58Sk1J6Vmzj5tmFYhyHsiEjmTmcPsnj2orim",
  "key28": "5oEDJ2mMC3Xu9ysv7cWue6mHUqjBjrV1HSsWnkmGpV2s94YehMVZwUuJm4FKUHZJXWWnGikHFeiNTiWQzfWbE9Am",
  "key29": "337EA1Nb41yFryKUPNSeFz8G4s6zj9yLdyesryDknWP7GH4vd1Xm5GykYeptg5QKniLNVtzx3KZwfoDBrnEZc64K",
  "key30": "66Rx7WfuETuUXag5EaC2yhpzPq13tPVWqgcuL8um9irAzK9P3n8MJWcqG3Te6UHgngu1moufE1mV9atmq2sDaNZM",
  "key31": "4Q7NC6Hw7krjufoV4DDfWf71gz5H8MtvhE5J8dRCM3n21KCmBB4ZinzC6baPRktf9TYXnC2LGHRfzzdx7f4aTYYw",
  "key32": "2bfusTa8zLKLtPD6rVRBMcjPt3zn8C2FwaEzKCpoWnctK6Fi3fDJnR6NsW5LfdhXDDRSMjNEgp6cEvj35ZfsK7H7",
  "key33": "49voxPYTHg4m9PnVpouFVV7y7hrVQisvZnYTvmkCZ9bVpPq9ifmp1nZDBQCZqRroRbnWWa1e6PFbtxo92F1FdMem",
  "key34": "5LxJuZ6rLGeryvscdZxJqqFDimjZDDSzpMMPddMNLH9wRcnvgbmxsXaJ5hPprzHgSntSr11paYnEYbT94oAWV5Vi",
  "key35": "5y9i76oDgxJxKoNZF9Suerwi4wBgGQG47qNXh3XKVvFGEF3YDHWHBjffs8z2QfrHC7STpuXpW9UX3MKDB947Dfxt",
  "key36": "37XT5Eg1ND5wfn4MvXmS77WqFNSe1ThL3CRhhV1NzT239jaP8MUD6N1v2XAs8MKWKm32SaRdyHRJUMG3KUGdeLYw",
  "key37": "Rcxvt4iSnLBKPjPiia215Nirda4pYBnrRsDQSsBuXnxKLd6AaqCaKD6NG3wJMiLDTpUTEHE5KeLYXk8TYWVUrZG",
  "key38": "25xetgRUaMV1CNZP6ZkvdP6yomBdXptiHKsRwwivXChxXEfzZVQwUSwetFRWSRs9hGfVJLK6UrVFB2XbjQspMaiV",
  "key39": "3L9GPjXHRsVFfetAmnQ3BfJdwGdZLcma35E4xnWZF7ALpLWVCZkctvrcRZ7RPvzomhkbptDWjZ2HGiLLS1AeH5hC",
  "key40": "4TENd5pJiwxQtsvutqcJpH6ZPHXiwa7cffyUctmukqg1zVtJuvArHeinYUibA2wKPwz4vHMHykeFtQNB9hp7hKdG",
  "key41": "3MVW1UQKXUEZ2R9jgp1ziRpuUCdTkFZ9Ht7bXBYde1L5z3JTEBGyk72CxyTT7qS7bBafAQXxm5HnZiRHxiN3DasY",
  "key42": "3FbJzm1ar4pjgoDxkXhiSQoYvstDcuCk6zKH4MuuycpchNukktHAMLgUu9yzXez97xHSKeqM2ztyFn8R1npkw7wS",
  "key43": "3bqtzxHx6mrJSY2TvvQHmLnVZJt4H4xwftYGVQsbirJ8BuhaGFW1zYt7pEaUKDfzqPQkqW6abCF8WiAciG9sHxnA"
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
