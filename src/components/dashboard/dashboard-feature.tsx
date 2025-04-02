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
    "3NX85eNYnB4ei1KsnCUmch6pY85LZgpriWbgiQuCennsZ12uv5L8GwAp4fhFnipgUCazf87Zv6Vs7yf24EWtAkCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "txSE4kcNRS9vgYz2ZXDoqQdHQQG2thUy9MSbZ8kNaQYbSjQvh8H78NwnfeCokQmXLwV4J1SGBVZzinTb7vpeiER",
  "key1": "2Ryi9w8oiqM4LU7v58CP8wmY4BgeJ6t43bGAa38XUWW8EBFzr55XQEjTocDxWzDVSYwvsnRoV3iRWm3J2bAdqxWR",
  "key2": "5QRBWq2ZuKmDhEPeBVnAk6s2VML2vpNB3MKxvZWEap8c2u1QzX8wRWaZm3U3R9H45GJCK2AUnQh89ErC4idEKEMq",
  "key3": "3omjXwNjppR8zd78AYrdzbXvZPYZebk7cLBQgKnsE1e9VcVTgyFDT6nc3aWJ9PCj9sTc9MWkL75JGxbbD7SKbPxi",
  "key4": "4mMYcCFibFSy7EySLTwwyT4fPJm8Y16ZXqjcGYRQu6TyxKj1MoQyJADfFwabHiwZe7JMyjCLFgAHtVwZVJBCKDsX",
  "key5": "n1ZW3QCLC38VD8N32QdchewTmuA8HLxLs5kxRhS67vpqQ7VrVLPUMTwnLiHXR26f8jUz9ZRvmdSfMNU2PoAAdxp",
  "key6": "28ec8k1qgoV5DLG9saFGNKgnZevFm6FAQoSvJMS1CuJFLty5Een2WYQfK2DM1CnYD7yoW9ao6qTDyzSQRdAP8JCL",
  "key7": "4TF9P1cZijNYHhQa9LMLMBrJPHQNFYVKyD2CJGVJUm4YFp98Er7NXAFQ4W3Hte9z7aVbkAgy3Bz53PUz2K6kPSJr",
  "key8": "23zZjukUfRNXVKAZmiHpmHvE8y7AmgMxAH3w2Bjh634yhGFMvTdZxrJBqSpSXxgYYC5NFCiEARrgqw8QSpNmJ5k6",
  "key9": "dD417Z5iegR98hJVcs9nkzbX1WAi2VPV2tPVAcBdJaCGPuNEBr8QW8SfbLa3Fg1FANKV6HFYX1YZMiR3AGRvVhm",
  "key10": "Mdcz98QrnkapnimmyF855Z7WkstLx4bXH7qski3pUcHqqs2hKLN1mLoGZ8ZJwhEABcKSYMSMMe7wB8jvDrNfZQZ",
  "key11": "4BL2q6ULiN4dddFjgv1yNMPHoghm1VMznFcTRnSd4tZvYsBqKDzMeCJ4o8tvQaw83mcxiBdoVjctjxKkNqrCNh8d",
  "key12": "4ZTGCBtpvzqgDuvFAAuZgTjxQAJF3iW2zifmDAJcv2Dvz3mdQsAyXKvk4TwAnxA8VqK77kuFWfgXcdf4mwY9b4iN",
  "key13": "xDLdNEdr5YfH4UBRDFHX7yJcZb3ayrzFh4pka9H4ixCGHhGjUFRSTYadezqcwrQXgV6oPipDNDG2EyLppJ1bK37",
  "key14": "5a9bLVqRjLK7id9KLJvWVL8cfGLp9YSUb52qX4dnkvxuVHqzsMtEZY5er5RQRNPsCRwRJcpAQpB999i4op8T6cnS",
  "key15": "2LNfDQKHa93H2zay4bPsV69gDpvFc7BGN2E4WqC4cVBd2pkEs2JvqMntUurdttZQfjqZyWfMZZ4aK9AMtfL2B7rg",
  "key16": "3dH1Y4oDW2zMtTkcJinLh4ZGjYsvpzhwwvJtDVX8nbTojppcfQK8Jk3J9nLKZgw9m3DqUUidmAtj3tEJTPFSbcaS",
  "key17": "3satWyEA331EmwDyUbugaRyLnyTKsHp846b2nmeuqDc7usV9uP8tjYKNHJcjRY65QwEfX2Evct4LR73YthtuRxRL",
  "key18": "3o3i3rTwL21HAuLEuSw8Ak36SFibeYt96mMNAChQnX9DM2D9CLfgfSj3cue7zKTUUJCGqnXuXFSa4NhRqz4Z1kZ8",
  "key19": "3GWcHLqxmSJAumdQxRmVRX8bk5jpa2qQUe48TZpNpPxEgWbW4UX4ZhHSdwxfVbizdM9qiNtyGzd18hy19f4Yuakb",
  "key20": "3ZdLi4ftuWNVAkDo5CM9CuFiTa4fH3Ny515wrpapWsGui1kiS7v83P5vQUrvmHNdom2EDEsMTbBBt6WT7JsJ4fEK",
  "key21": "4gNV1KKknL2UUjQDbAF9JaNRibQaczGTZravCJypFaya4x3T7pmFPUqkviv6StfCWEgwxrV8U1gVi7ZePYAzQ1m1",
  "key22": "54q4B8PYC3NKuLuvFMDhGF17Xn5EnwJFGJJrp1EwSSEAeLETuDTTLhh5dGdQxvFE5WEnFEiJtiBb9J8xkCgEnRQ2",
  "key23": "4xqVSv5KXqvtrAYE5MdbYdTzqfcFWN7kcKGRjh5apTtVryZn8LUFUrg3YFd99zwyQiGkPuGHETQa2GoYNCr3oZfV",
  "key24": "5AUNLVrPTE3hs8Luip6UsdTHhmRV7pcyW6Cq1oa1SXC2TvVhJxk7CYeHNVFwuffpDyDyQq3DR5gghQxmrisgGvcm",
  "key25": "4L2JEfse5nRnGU6caxgK56W4r25C1eNmgyevGNu37fDA3Faw9hUmLvvfxY3w5VLmay5oHmJWoSpC48WX5CyNetNf",
  "key26": "4m3vso6xjP5kxrXYMwWqhBvCAGq3KwLs13M4ep7DjoaJKbCKYkpDm6kXzSLV5rKS9AgiXKtwxTNzsk9Yc2pvjpUb",
  "key27": "32BhoKSVvuAANC3m5DW51axxP1j6qcfU4rh1yyBXPaSpbdzEFqYjFSGNR7ZH9wQEdwzg1iuiNJTwoJha6xUSC1Mu",
  "key28": "4DtjJDASYLF8wXdQN9sFuZYH6n2cw7mAP86nPjFf4X6aeD2KJB2SEYfNppVmJTx95PzNTdfkxuVHygKZsJUEU6ce",
  "key29": "2PWDG2RS7oWC3uBcQPYRPsE4EYd2CnWqu9dHbdS1iyymD8VgdJXdSGafLNNc2SVqd7aoSrfYH6pLchYHiFbLSWgF",
  "key30": "VvBXFXQdGR9UsjHAmG8dTZ5zrFvZdRv8GffMEmg99vyFQZF862jjWBwKder2nGbvKxxWjc4jU238sna6iSYtdMy",
  "key31": "4MPGMfqyUcSkLRnt7aoaJvS8NfVyBZG7FAvCWtSxWoYwfP6Z6jdbMRrcSnto6jWMNjZudfDSM1HwgfwLHWBrBLHf",
  "key32": "47M2sEx7deScmX2STBkmskej2wwHtGUXngK1s9ENTBqEE7pmgXisdMvSxDY5wktcqvvS2KJirmCFwvNLYpepmU3u",
  "key33": "5Guvpm2b4RzzkokoBFdyapsjy37EhA1uu4R7NmNNd7jCb1rk9jC7ULqoTd9PxvQpVaXMgjmuyiXkuZiTzhCcuALg",
  "key34": "3H7f881DD3F9jTf7yY9vHK1rDhgjDgjbKumY3rzrNRpgcSeQGGtnMfkvXGs7iuSZVpBS79gPVULooLHcU4TtRfme",
  "key35": "6C55KbygerLmxcVD8FLjjxdmLNUBER4Eh4ghQrsUZYubGRGhnfARgiikUCbb4EeTrX13S8jcoGygn5YdQKdkCQx",
  "key36": "3GyDzKzTwcJybHi2gd1YhKyU32CaGq1XarqV31UjdRmAn53ErTB662QwQE8Ehdh5QxiEwAjxLYPnwiBe7Rn3VZ3c"
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
