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
    "4MyHLrtx2hLNihiFhzQAubUQ2vbP2ehQxK8D7K1CMy7k2KEGMYGU9qLEVP6ow1W9nQJJcuaPiCsqB2fwhuGsma41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KomtZQBSxDtFMG3pjFWBzpVqSPNpERh6Aj6V8QUbftqyqwXWdyd2tHS8XWG8FFtcDrAyUgNbcPu91WjXwB6Buxq",
  "key1": "3PwpSQd4ePjswmfcVDJzYpMmNpJaYrtdyCtZafyVienuaWEFttMuz5EVQazNa87ZxqMP4PYpEN8Wv9j5sn9S2YLy",
  "key2": "HvyC9yzMnrphGRZmdgKufCKt6DR7SfrDR5Rhb1YM7Na46AEJsUiR3ceB2vM5mqnpQVjSqx1wDaDDU1MGY2j9Yzn",
  "key3": "3jNiFe7V5ByoUqfi6MrUAHzF6TW4NUSPfbfvsvwFAwTHp9ENrxZmogM9cHkwTrHvTN5Ap4UFFTNHNTA4DMdSZpJp",
  "key4": "b3cAjbEYxN91RgUerPadxrQEKpNH3UqLYjz3cxs4qSDeYXhBHGdzw8DSmdctDRq9Djwwc5E4rQnwZ4kJtzwPeR4",
  "key5": "5N5b5NAC1tKPDvduHRwojizFYgP1xy2njrhFsVggAtak1i74kLVdFqKUHqBRMpbBvKzTns2J8gNVqEiVW7SxJEwD",
  "key6": "3RBAfpyvfo4UQyXtckxksa1W4ijyv71gzmK4z4uUdEonZsTdZmstjgJskUJeCdJvMoHGbKTnVddcNFP2Ttkpt71j",
  "key7": "3zExeWL9S51f4ubd8DyqXXZ7RPE3HcD8TsuXZxovEZpYvNiAUQwoLSWQeCEC3XqKnFZK2VH5SRABGBSYNc9E9Lt3",
  "key8": "4Qe4UyoSTjMjKkNCTVYjJpbZSz99ifFTLrpAr1EJsUxZpEyvsDjRXFiHGqyZkyjJBLtSBHCTAbk9CfATXzs2i41c",
  "key9": "dghZD7Cz5PGBN1xNg5axwH9mwVViTfR83zEfbUNWHhufSFDk6DBi8HL8TGoftqRmFgeobUwsVTerAdKdP1PBNhz",
  "key10": "vYwgpNj5k8GCoJ6i5dPwWXUgvQw2ufWt5csEBtrk9oAJKmq8nymMH5eDb4gsMNSD4V8CrzZtj2TageXcLmKkWE7",
  "key11": "3gAtgZgAf1t5KVTTG63uEyCLWjr3C2bEXf82t29pES5hqQoxSxkZ85kCww8Nfon7vkMgw9rZMtCcoT4WSvD9pPrB",
  "key12": "cdjQTZPVJ49Kv8xwJQMg4499HrjdtahB1Tf8UNQQ6X3nMsM96ppKbPY3PqAyGdQtF9ypt9bgJDrXU2wjPmczKR8",
  "key13": "5SHq9mExy2L5TzizmFELe8Vob8TwgBirGThLAmjqgRuCnAkRUAPVDqTB9YYw6XUfG4LAS7MMHreSJAafCQ7iH9pb",
  "key14": "Ha79UvifCNbkoa1d2Aon1kkujhPvBaCYZKLDBjdPeAiNNbFRW68JGCnNsxDQwWBi7S5Go3YGNSS5aeMwpyuTJ1h",
  "key15": "3dHUwjDrjfMooSovAQRvoNvN3L1foPKPZXTKAKEpcmYtqjU85pfsKSAPmSWSo6LWhcK5VsYmy3c7ntBJFQvnMsnS",
  "key16": "2PJ1DuB1VoYXsm32ipdrx4bab5QZWfBeZTPDGTZx4UwRnoR6dLf9EYoHiGbaejSAbXeD8DotMRnVebeZN95dB5WZ",
  "key17": "4ekjf1uqMMCBUePGykrVvnFuZpGKXfhVuuiippVY3wckpWKgu7uhdAGLrxHH8ssSdfXkymV4zMNgvt436wnbT2gC",
  "key18": "2tZADVb3gHPXfCZMTJSGJU3Vs6Wjo71w4nf9mErn4omdwMwoDvKYfRQPXr4Don2GfeGpxK8L2hpJaAnqea4KmLuy",
  "key19": "493nrnF32uUxLCEcAC1U9hKg8YjireMnxmeZRU2bayEdyBkAX64HvP1LhLgyAVNePTombTJTTJ9Fg4wHa21BmFZ5",
  "key20": "4qdBvAvqipzDWXv59P4xtELKQUyTRmVu93xPNbVcRVSHeWgkkGBbjZTFQd5WarCvkGMjbvnuHDB5zr6AR8Xnhz6e",
  "key21": "4yCiopTSLGFG4ALzqUisUK6E78oFeKuoVUtVFYPydx5RrHwZKgFRWQsksiUYxoMBxB6gFBSwkL7hRh7MhRkvJCZz",
  "key22": "4SBvVEhPDm5biiN9YvhmbNFXK97MHmUgx6qx62AizQvqSqwjKwhAaYd2tYUe1RZUvBj3Ra5cAEpQn87SjqrSnqJo",
  "key23": "z3dUuYWQQneo1noULgUYuqA1hEYvhP8tSdjS1KXy3cgoX4xR6AsELVUNAYWYuZdM2Wk9BdyVZ4Ru3xQXiK6pNnk",
  "key24": "54d77cXJhKQbmH4st2ocGbcjJFW8KyDs6S6oe8psfxiW52T2fkd2ZsZzq3NHg8G86iS7LKPGb4Eeepg63VKS9KF2",
  "key25": "Q5oaHi6Wu2godz7atHVdXjTbYWwGkDsvJKyEqZ9xkVB94ngmb5fq6vEJi3GSKQtNVaGF7mgWNKgU6MchDoLQk4g",
  "key26": "y8X2ng5mPSdAMAWN6fa935pucLAibbXMwXH8twJeazN3SPKwTtWz6fcP7Un58br76h4kmes5LTfsm4Zwf6knJk5",
  "key27": "2xvNjQvBGjqHY1Rh31wwdokUsB57ktgBSPvBsYXu7GAPKtwXVbZP8uLrqFyNBVCaC5kcSJpheNJKAsAipTzDms1a",
  "key28": "33GbLSTbCLGqed2ejabvKxbUtydsMfkuShxtmbTaUt5ovqBFpzkGrAhMTDAq8H4u1oZdprRh9qDd7GsWrmFsksZx",
  "key29": "2tdcNXvWnPXqG5NXMirJiYy2dvdGkPhBNtgRWEQBNrHRGZZnjvgmdG6MfeCqY6gujgchPS5SeqLq5GjCQjpAKR9e",
  "key30": "4wkc51wLagCJmTLKgttLWhkY4EWzFfgq4hXnHjwZikGpChfieAGYonr1K8kjAA5UtAYJhwNfUfQAjP3WVHdCRTGa",
  "key31": "4QxZj2XPmkZsgvmvqGDsaPPFH5smk9wEPMDjdR4ZWFDDxh1xWzULBdPXYqQWwYivJuYB1RzRGTem9Vfopkk5mLr8",
  "key32": "3c2nPGMybDMD8wZz1VurMDGeekgsZG1p6dVNgKrcN6t6BcSDHK3ohzmaN4bvVqNJaniJGP9rA4rtwjLctXmNmyqc",
  "key33": "THkeM2TSwFxsUpxvbr29ySsg3gbY9xzYkrX3TiTyKPnTviKN71vxndWfKWfT96U8MBHKSaD41UffkbXSw9xLKgZ",
  "key34": "5xs65ELDKFZmZyc7C7bEohahGHDhwbtdJct4CTLZZTuZTsKQvgwCLVAqhxtPjVyvZePNy2zYS5pGQtb1ATakhSsj",
  "key35": "motHU4rqZKUkG7ZbQhBAJvVLdZFRT4gYZ9Kvvz77QcF3RY6JiqFiXTizo3zUaW2WMGiATqMjjKDdCxC15tVpYrs",
  "key36": "4AF4UkY9ZjCyhJN6pDHE74iKoHohBLTomaZuoPcusy5PKHeYDcBECF2zVNinyM2b4tEHanW37q6Cqx7Cfb9m5iwc",
  "key37": "2UAVkwaJF6THAqP9QCAMd5mRPQmtf2Dn6VxaiKppDTynPTBSDy2o44ZZ9AcJovy9CSBXnVG2soEU9toYftftCncW",
  "key38": "1xbpfA4c2QbinRur8u5bKeQDVbkwX5fZKn46xZCeeYVcs9fQrenJwy54KmYeUF3birRAMdrVYyKMLbrY1b8wRH6",
  "key39": "3rVsyQbXy3D3HjyPjUTTaS9H2zMee7ciYs1yiCDLb6vD3T6rWzexG72j94PhDuQBKZJ34CtvZEpzuHaqLgfo5daV",
  "key40": "3KHcQJ8fX2Hxn5VsEWjJggZvnH5LKr8MMfqX3JwWips7y9vBcMKQDFyihV5nRDeCb3SLMzzCsAuApLU5gFgnxgPf",
  "key41": "63nZSZytSRF3fZKmdu2kR3Ujppk1VKzYnpFYp5PvxM3C2tKSBUSkH9NqtMEAMjV2mAoPbZfQqKVx1XSgckRJaN9Y",
  "key42": "VEbAkgrVDem6hmsoQpKWyk2beupQzVBH2XHbHCCGA6WQPvfrDnpfQNgZ2mdzmt2rWW4mxMqMWiV19wG7khTujsw",
  "key43": "31P39AJPUHpb2VXvqauLu2PT8g1Yuktx24KyVJGwMhMiFmptDbKKnzQxPR6kwhVmtpZNSDYb4Wj7TSArXnFG1Hq5"
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
