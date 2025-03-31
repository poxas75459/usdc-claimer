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
    "2EGHB2pDGxS2BkrFdFEQVDd25bThk71naPaBhAyK337DgX1yyg4qroNoBZacQ5PnhNvLZrLSBkQfZk8tMvHQEebH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wKDdVgjG796s3LF2zS63zMdasCHjmrAXskz4kB3PBAgNC3W33fzWPvnN2n9uKnQMmPSppSjcusHpYNahAzuLq8W",
  "key1": "ETPtUZmYgptiMmPyYPoYqDx4Xh5BCVkMFJRdGktTpxEsgx9w6sCjFbn5GyvdqZ4MxPAyXVc8w9ZbcdAyiZE54ud",
  "key2": "3GQ2EEAyPVgmh8Efwa98eQeyEkd1V4ScFirhJ69tbd6tyVKXcC86MZbtw9mjb9PrgBRhzBZS5U47ZuzA6txgMLHf",
  "key3": "4DVbrCKK6dWY2NoitJVqR8boTnTtfuroYzJMdMyAu5TVDdZW5rHGkrmRzEfsFMaDqVkQGUQB4Tu4VXhbz2SGY22u",
  "key4": "4uJ76jb2vorqCGsCf5XPcv11sx3cLViPdmv1MPSu34t1yvtLqYfnXHAPgq2E4HV3RGBg13KiAMbPZhbCtSrF3Guo",
  "key5": "4VFbMQRizDjuVnr5WuiznXJ5nX2TbZXy2Tf87YeJExPkoFfogjpRJHT5yh3JhEd3wCRCdsLtyQC4kkLx1jD3Ei3q",
  "key6": "3mUGjLq7Ub5qrn3rzZtBfE6FY2PeYqVeV7RpDAYgW5e7E5JqwSuJt8AScgXMLAghaxwACuqGgHtSfZLgKsAdWFnn",
  "key7": "3ZaLivjdabWFMBpvBnqc6vk5psvsEpcZTNH5pBrgGqygMSKehTABik8M2yka9ytWxax71Rjs6CbiHpiszzoQabsq",
  "key8": "5rE5aiF67Yu4g1FhVmpNuCnEsegGhwpVcUyLSfuNPg7zatKgwnmZN1ABvuj5V2Neyxv5rQXrBp8zCFYDZQvkayQH",
  "key9": "4giy6Nf7CHhHgutpmebLZ3K9EMgZzwxLHCMg8rY5EB2PT75oef5BLxd5oxg8h23mCmZBw2X8G3SBVqZWL4UbeFzq",
  "key10": "28JpdH3WTDuZngVNvKeji2rrZpSYM3zJ2cWTthK2gfeMAGkPoCdYL4U618Uch5GS5fKu2MVZGr7hthZJgZyzpEgr",
  "key11": "5zp7QXPaHcvjuwhwQCMm6zwvBMEk39K1oDtYXm6niYL1fXuopXTv8qCURBU6tDfUyHQKH2TQ4ZzLjdHfAFsh3QWY",
  "key12": "2LY4Fq992Ys97E3WWeHBk738F16hYHGvx8eLw34MgP7P77ou86WUbTCWruv1K972Cxp8qZD1jQ9MxoGF6mbhqb9D",
  "key13": "2BwsFS1hcbc3GR5q2moVTbcDhrCMdcqrTwPUfiXqLnKuKqRgsg3jVKGCt1pYPEeaNqpK2qmTPavM79zKFCbMB97D",
  "key14": "srhZ9DLu8XnEf2RN5T25TQSzVexu3XCB7kKhXnTtCtzLa9YXY3kugTm4yaUz46o244EhpQNPeWVLEf9adybYq8Q",
  "key15": "c5HsYrojzB1ZH8WpaZxVghNRARNnWVP3jtaYRqwp9dhcHdewcDeUEMvqi9SEp2VrZddcMNSNnYX85qZ9V6jKDqF",
  "key16": "4fh5qeVkbVuvqFnx3upfbtUDgL9ivYdZo1Vge5B1hKMK6fMzzY4xpQXkBf3o2h3iPVevGLd7xjc3r8VdpyLLXZ8H",
  "key17": "5FrXWWbHy9gTohXMTcR2ZqYaxxKduhksSrZhoyVi6WzLx77xHZRuguvH1uo246a6wRDZE9JDd9rrpHrAZV5JaUK9",
  "key18": "3f2iJTmtPeDxt6tQqkBBpBv9qDdVXcAkDcZ7ytKKmnjsbEdH2JNiBpsQd8htjwbQsqfVihrnqBk28waJWKLi8e7w",
  "key19": "3RPyy3kKU8hsbJb1xHzzv1LQcjRLcSTTtdHXYbrZ7pMDKg1hS9YQw8mfAc1Amd41UbXXiYc8re4R1eipQSaQ5E5H",
  "key20": "415uKraZgKGXp1FVCYU8jvahroFGm9zsVsZD5dcuJvcF5svPEG3npVnJ9RrDbx3tDFYLxmUGZVzWnRA2gheMyGTh",
  "key21": "21PEonxNv67hbiyvBLqHU82ohC7M46NsCaLp5xPaAmdK1JTzq2VmRBUtb8E6nwEcWku4Y98FeVjMeDYGdqCa1Nnd",
  "key22": "5NbogsLmX5XtZuf9sQLhZ3K6CfASUc5zbFNBGrDVwH2CjAAUr6q3VD3z91R9FUi1evGXRVmueayzwikxouUDSwwY",
  "key23": "2PsmfGuh4kZWFidtTbukUNBbavXJzFj3F5Tnwyt8YwMqbt3rRVLZ8cdKyGsp2QSjuTn1YWbHkhP4cSVYZeoh1DZQ",
  "key24": "5LUoTMdchWxn5Wsnm4caHj1vzhVZeKMcSn7wkvuGptmpVU12mwH8wdb8Fggic3ENfc34BvW27eDeBteecUThi11T",
  "key25": "378Cmhw7BZCRWenyy6wHY55WBVkt7vqyNCSh6fTN3W72QM72jFvok5SbnFfnbPXA6egpZhQkiRzram3h4ob94S6U",
  "key26": "3cy7zLWyWcCznrQ3jxe8U4B2ZrMiLHddtqN1Di2bMjSYEG3PRkXucmym9xN6XWeUhRuT9QpuvZ8C3W8zHtJkt33Y",
  "key27": "3e8ers3TdLKEj3kBqrA9jcoX1k6HuG3hJCmZ8aJ21MRHCkTJ4TAELYEV9LrALs1F5oneYxgxhbUpooqFFDbMQvWZ",
  "key28": "5n6yAjFKYHa6sPvKV3dhrUxsTdYnTqHr5NQEwoWXyuWgxG4WpFzZAjNxRvbuzTKbvpJ8WD2k53cjLaEuhFRxrJeq"
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
