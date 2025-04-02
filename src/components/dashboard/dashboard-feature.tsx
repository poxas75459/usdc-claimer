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
    "3ahBVkx3RJzKJX5WuRFbF4YtdFQa3jUM4AiyEpcKPXeKWHyTJuaUhPnfWB5HCA5h81rnENZePi1mD3CwQ9NpEb82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Rb4dr5YC4VtHr8ju6wVF8zJnDVstFkNWe5t7z1gh6B4wwgsshXAUHgL7DsPB1j4tr4RUusX9rBz6qvPHreC4Us",
  "key1": "2gR4kSwu633TKRtYmyNABFk7dgKtw4nNnF3svbuo7RzEpNHiXVvVWuN7QffrYrnnhmkk62hTZWy5AFyH81Hpuc3m",
  "key2": "yaeJcLsMLL27qJyDd9pLRwGFB892FPT4Du6XwFaNT7XbC4UPwXEC6wShKFcShSUiWXGnzVHMgxdv2U9yMVJkpB7",
  "key3": "5RzLKaiGmwyFQh8B3ckotrNSdzHWijz3Gc4AZNKzLwLuXN7X8Gx3CvCyVrowmDmtZsP8J5twN1WTGLYbEhnQG15a",
  "key4": "4ffykufHJQ6wobkiPBVWuieELnrxdjBLfEGDArozE5b3UhGEkaBYZXvEvu87iD6xvVKGcMBJMtTEFTvQocPULcbt",
  "key5": "5H59zeqdLhV8PR67TET5phqJrPpCyw1LFChx7UcFfi4swvvbvrHUsMgJJT56Hfct7GQKCw4hrBjyPnHbBgNws6mA",
  "key6": "2fdXm5ThsnUMhzkyEqN6ayRMWdVecW3vyYeWK37SsGG1FKRCPutEMZjgesjXvaLmQEwuekaRLmnzym5DWXF5Jnmp",
  "key7": "5EnHqtu7wweUvd2pmJqyTSyQTzyY4ogAYZDvRPEySN5CsnzWgNXsuYaCAMFdxBfj2eUhDRofECAiUBCkut9UW4p7",
  "key8": "3NqqDpjH9LEXim5gH3Q7hkJ8Q4LHMJvmVSsb5ArqoKAqb5KVBTob5aNcZ1oKcntiUJRYTTMRYDKd9GpUzKsdFNn7",
  "key9": "51Xru1jkhUhFiA7kzrRaFsv2PPM4fB49jPWNYMCjU6vPEyh4m93pp56rhc5LnVE7srvBAQdg4JCSePvseEQcEBBC",
  "key10": "5rzPTyDHtVSQYniNe3VcM3aAmCJ6UE2Zy7gL7GyAcFM1CqVns621JEzxsGqT1R8HBi6FoPbqHqtcmYphm86yQ4jj",
  "key11": "ESZQ8gptkGBKzWEiFgWQknq2JjNcWdMSi9ppWdCGgvRwxGq7pRdoghTbzkPfhQmZs1gAip75RULHxEgzxmwJj5e",
  "key12": "ftjpLT2b8BLq58AhH79JtrAZHgTEfpdkoEARBZSL5LZVWEE78qiVAMjpTENDcPa9Jrv2T8CF16zZfF4axLKaqec",
  "key13": "5iyuaPbsekpAtMp3rrZRy5S2ohvQicBHukBbDruhHwdvXGRVyukpqK7gxu3QjVWAhkHQVgH4tbD26tsxhetEEgmU",
  "key14": "2dHzddX6wJrNGZpA1W1bbUU9gRvt3Pvdvx5e5KL1pqCXSaz7JZ7oGRNpPrGTmNHqaN4RGPnGJueNvtFPAG7Gmsd4",
  "key15": "3eeyc5j9NRE37v6v6FTwHuHNYTqKGiSsWLkCFw8ATqB4rVfsCtDyyUtjAvpzp2KBBiM3ncChP4TQB9u5mPreb4d1",
  "key16": "59EniR8J6kBDDdzqgj8B4KhB6D3F9jRjTEHjbhYPJiJJ723Yui21HfQ4DCfutdV1f7ADhDN6aHHs54rWxKQYegL2",
  "key17": "4quc8aKBzq7HPAtDgT2vZWZnq8FmE7PUnMdvyaovTuMrbY9dVFEVM2bBXWrnckUbBXProvUe5khXmqmATs91soEj",
  "key18": "3mkz25jx4v4QiLoRBDvT5wBywDGbPeNyWPkLkyfdGPTehyHSsskv9ntXKGgJEAEVr4js17d7A5c37viird7cxS7L",
  "key19": "55HRTZmTxoVJkJvvRWMDSwg94tydRvymP3iYeVzPGJvchdBACAPQKRCXDYrjtZ8aaaWfkD2YSUK9oMrwxVz4NT2h",
  "key20": "3rs4dnoH5GZ9ZnsrkdT2K5siAELK16dRbZpnHvfCvxkv3g1ZXTXf84exTQpuTBD5iyZMtAqPJYmjMkp3zMNBwaAj",
  "key21": "4C7u92c3cJ2V76Y9bTJ7o57qzzsUFdALgpzutPYDfKsk5N5Mi7WMrAC1pTQNRboerWSCQMMAc1EvqX5zpgV9MYqh",
  "key22": "3UrVk1pYGCSr4t2q2NvTDFqdb5mB65icct3Mwiro15khgQQWxgvv4wbsyQMDbBkf7F1RHpcPayajM259WK99PfHy",
  "key23": "2163Zhi2ppsGzN4Zbv1KDu5gxXgyVZUcEbiCZTAJvJ5G8vc6qhqj9QbtjQxyVsj95skbfwCJa7AGsP15UvTe7pcb",
  "key24": "3oyzGsThk2fWnbU5avMQ3b49FvfjGcBEz1Tbz4QyvRMut7HBF9jRaEAea7deuAH4k5jxxq87YtnYMQoS6eTjf9kK",
  "key25": "3DhfWxYof3fXvHi4f2esEXoCPNYH2whMJinDgALbUvVBdVJzBZtUibRiZiDXEtS2uDgHDj2F6Xt47ygCbapgSHma",
  "key26": "jbchMMVGmJQMP6GknpFPyK8UWDasmsSF2RJTLrHtZMJic9hJ8JQAhu2xZLirwiAR3fBVkZbPpxpY8jx9xKTme5o",
  "key27": "4bgvoV8cwng9e8VRDeyNwNX7taoHzsmenTxVLiku7vEXZNQYnmCLobentPhY494qA7vWarPkY2ke2Jn9BjRxTeob",
  "key28": "3pxyRi1GDzSsDwsXDe9D4fH7qAMikxudxXn87pbwVxk2CRetG7mkWuc2kygDKtZL5mUgf2LCBMe7DYFZk3xCUhj8",
  "key29": "3HXaVg8ubeKngp4iWsxXm9oRT2WsNLZ2GhhatH4B9GemyKGvaSUwVLeZtib8ddZQf4FAHT5Aysh9Tngj2mnTPnRd",
  "key30": "2P7TifhpZDGmKawqDk22fYY8MdGxvg8tAmxYESugMUy1yS656BQ6U6yxTUDwDErZFx8uzF1HkbUrMfeTTUGH2JJL",
  "key31": "44yEXvHKEYkGeM2EUch6qW3dqSNpvFSmEbiQDfEZPRFLre7tKP4bZY5Gfwwmm5sSvMx5UDae9DMQz9ozMwwJSvxu",
  "key32": "SZgJNF4F5mTTW5pgf6ST5MaqazHHshwkpSooa3UmTmWvanEyDn7HYWpDfRq9AUboB9cAETZNrWoa6S1cPXn7s7V",
  "key33": "5LNY1Wt5UZkvTrNZii1riPmiTEzkjJoVeZMR1Zhq5Vh4hp2VVqzYRkARxf6QobvTsDUwAKDh9gKLxYLRXY6trVkm",
  "key34": "4sGga2NKw2sJxEgT4cvPiy4JUULSwFhtcWprPM7Sd3px8JzPgb95MomUYPrzBU6EK9yUVQTEv2BL5FnGooe367f6",
  "key35": "28keU7og5xD7oer8bt7KSdft7jwKPqgrMFrBBWtCYkgfZb86HHKoS4jQ6MqSp9o4Lf4HV6E2t6X6JTiQsZ24R1dZ",
  "key36": "GCBZRXQByeGQuphRPUKLxCasqUAdBXoZJjScXK3DDTSDFrPkYhgnxJLdcAtAeMSggPeY4xuF7uGvyYpdnu9TCkQ",
  "key37": "VdtPf3WfApqfrtH7wYf1b6QPPj8PDHY9JiRMsEzrnknDgPEuLuS637Hi31yuMxmX5tTqLAiNA7x7YDqipfd9kYV",
  "key38": "Gm19VJFJYM3Vyt2pVyhFCYfY1xdhrkkymMTy6oLWj3cYsRpixqbByXDfoAHAr8Tjcqauu1QTSDerPZHk9vj7JNA",
  "key39": "8Aq6VRgxqhXSDZAv5SKreo5Sx2K5fN4HQHdTJ5Ryhi5dsH48UUUz76t4f8MHx5U5g6gg9PHtGRRnWcvBXeYmrpn",
  "key40": "ewcSbu84HzgZBwrnE52tKUpo378ZXqoMsfisNwFQiTJFpgm4nEcZxyHCxjhpqT5s7tqdrm5ByA9UnF6fQudN1EJ",
  "key41": "2H4sBGfHugfqg465sV2cSqpmXpsbckeErYkxJQG4QQYNugGrN8Z1AeQmZ1E7uVk47nX2fYrDF6C1UfTnrWTweYtA",
  "key42": "3ytFpjfFRjAL8PodTyah67i193EMN2UntkuH3vFM79hrjaebZfDa7DtuM5W6ZfsEZdosVLREWokEzQmUDhEC9off",
  "key43": "32fkRS7UtsRPLpHg9kpfBAbk2BtFWADVFkN369Q3ybG2gbpvw14MJmVbfCtXaGoKKADqofRU9wRBha1fydkAKFks",
  "key44": "JsGANqkdqqvyksozV2eQrDxEVJTf4RfJiyZbyMJfNrxQrsQAnwSJ3NrXE6FBUtRzw3usR6kA1mTJSzSsarGUton",
  "key45": "2fa74tdpJnqFfB1bwv34gL5aqPo1RgEjARBtYYtC1nLjxCVzxdRTvb7LbTb8yg8qq36SpRpLV8zcFAazMqvAXmDb"
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
