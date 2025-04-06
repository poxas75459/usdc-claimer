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
    "4w47a8xVgDQsmh4S5Qguj6PfmrFPZWSc91HcMRP81Na8JjMwB9a3QrhKUe7cmBCS3tDuZQGSvC5HiTWSmbbCnf5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23E3V8qjF4yqYbxxwUjwRc2iZUJ1oRjvXkk3DSHSuEiKM6fDm4mfqLjEojuSmBcnvFANy8ndTGXEG6EfwkC1Yxx4",
  "key1": "4KGE8UaT6aGULSBpMLPkh9nGQjLRD5xoejHyiXKjhG2zZ98jYnS4LNcLdCEeAy6qNfBwbCpFQFTYWfiyu1eUKZr8",
  "key2": "258JBKJm11sUmyXxzpsVdzv5aZcpGGh7AbGGzsvRideFhPTH7KgiqiuTx8x93Xo1bGbv36b2igksMnTk5kY8H8pC",
  "key3": "2XjaYcHTZJenDHSEALfaECT3isCr7GYpxBvpzHhZB5LhUnxV94q81vYVrLGR7KmgvrgGnCkaxwTh4f9AVTDP12xG",
  "key4": "5D4JSq6KpbRwebUjAYLsEgxeyLXcLhDKV1bMw2LZP3ZFVbrj9xrM1Xep4nertnkLYSvLgzvztD3nAsPLwv6EDCCf",
  "key5": "4sNkTByjQKr5TZYJNmrobvkEfJpqD5EgDXJWejjkRT7K6Mg4vW3YZw1FjPLwUVN9ybhHxTN55z3W8GmFXNhtJFUS",
  "key6": "3Jn6RnW4oJ6QMdN5W9cyvtk38NkR4QQwLd2m2j9mvjS2L45Th5y6wzzxBSwaPgjtQiLaLBVmikaSNnZBRftECgjx",
  "key7": "2Xu7Acfit2PmdG35RAKhEMkvpC8SM4UBLoEuXAaHaA747Njw4XouvGUqoEkMNw7YcV51D2RnRnrwVUEZSzBsn525",
  "key8": "4WGMTwVuU5ZFNRq4LfXTmMb5LaHL2gH5irY6sARhqn2wUKApfsLySnfaFwBVhrzWtZB2h4NNf4TWF22iN9Xs9Fr4",
  "key9": "3b4QSKzsGzhKmexTGvTXRNHw8D1z6SkTvnfPKH9b5KuNHGS5HiAasPRxsnVRNQuM4YANFgJ2WhySWPMBhukq63zZ",
  "key10": "2FwYkijUA74JouhLjGDZM1PZCMkepXxFfipMJErZdP9APqYmhiPSyaDyndAp2Ez4CgwcUVVUtp5MnrC4wojJURA",
  "key11": "2HSzcZEzr3weMTtVDvW44C4XQpuVmapDnViAZQ8VaBthp629QUPBvfgiiMiUr24FnnK2CLHhKjxbNgFvdXqDbpLC",
  "key12": "2zX7FiLWisseE2iE8F1b5wHTfhVQDpVVBRs5XMebAwZqpNV7bEAFMGgJMjTwe1YnhAm6Z3LRrG4B9YGdm8K6Vkcm",
  "key13": "4tkyX7GNEqaiJHkZPCbJT1pzYudGzsyJ9CFcEcdKzfVogewdHmGohjqR6Pvj4GHKtD6jxLUmo5rEWjy8Vp8CXH9p",
  "key14": "2kXSFGmDETYhY1KZGWkxdFkFqdnJYctFPmCNibmKVv53QMLHgiSDgYCQkG76aQjuHuePVwZRvt5njEAsDAEAACZM",
  "key15": "8FF4k7pKkVrDhCuseXFKgyGcaBoTHiFE4isKSjzNsxHR4HShsZMCjamLizHJCf5rafmT27ji7hSsNfxohUT5Jqc",
  "key16": "4hKetYJesMBe4brx3b55xzJ2p2DRBsQz6EE7yJdiaF5PByx9WuRHLu1tKko3cDvzFf8Z3QLQHCRCSmLNKGDfRgoK",
  "key17": "3pMm6MtFEcaA7G6uDcnMBCyjybhRDhCM1YZrApnbiwjHUUCbVm8QrjBub8k1KovSecGLbCyeoJQVhGZueVjn2Xk8",
  "key18": "2Khp96VetjTWez1SHjx6H94dpAb1cf2r8gvRfi3grPp7TbpDWJPxrbS8hNbBXUrLwba73tKmQdEeT9MnG6NMnbvh",
  "key19": "3Xko1SAkoXY8fEB4i61yH7GryBVPZwgcGrXbiVshg7bQXcdVpvgbSg4yBaYeTw1CXqba1Ko7oUsGF5Bgd221cht1",
  "key20": "32V4Xv8DcJcUe3BU517Giz6zUznSS62fvBs7BFch8maeozN1Fc7UPfCupTdEkvFc4BHGUBnoH1m4WrxExTuouRk",
  "key21": "5TmEnfj5BeoQvKe4YVccfDoaSxN5cVBuf9PU9jwQjemLsbkgLSzoQnXm8o3XDRFHouYn15aqcz13KoA4X9VA31tF",
  "key22": "53sFQgpg4eRCuz6yHHwQkwjioWmGk2BVAyboyzVAuPzevF3rueaF2tbZ4FwBtY1j5vSXV2ocQ2J8i26ejj3jafEu",
  "key23": "3uHYUpzwRA2buLCk87qKvYNrce3GAb2YuDKBnmHgQiKXw1RqviWDEpezHswAg5TdbZdfmU1xTaP8PtHcr8FquUiC",
  "key24": "4oib8WooVEjF8CkBHvCUJ9urCWePWQkngFiivqd5dVYFaNJNxCGa6remjfZBm41ELxCLF39gUn96UmFtHYkUAkv1",
  "key25": "3uh1Sv25zx2wuRDWRKvp11oJb824QVMkvHewGpdUG7SeB9KoGDvWBDwRZJNjTFNKZd53YWaNHDfNAsuzB4dZbu2D",
  "key26": "5XxsMsphaHK8NNHdMKMdzycnJuFoEkojxg6wFXoj4kta5VBiPLuKKNQZvHEMbSnomLRjz3nsGk8FC6gTsoMqHJHy",
  "key27": "2DA4hE5ZeGdYGhvbd9M8zsLy3Tv9rEQ7Dz86jAro7tBnP7hePALMBfq8XpGXtji61eXPEfkQ6FUJab4aZXKoQZMn",
  "key28": "3F9uBsk7LZjKX7PduU7qjSkce7f5QkqrwjMQRK7Eri1SSsyUmxptcrygzZjmBQbYDdPXykVsZdsThsAAiJKN2Jzo",
  "key29": "4ZSttHzyTvZdwcwXyCUU5jfTsbZKGqF2HYFV5vboqucS2zZ3osTac3gH3MvoZs2XZKThtkj6PVfQRQk8s3d2Nvoo",
  "key30": "38ffyxZpJPmWzUbeEktkfmhnH8rYuqZ6z7X8hAVuoGHqaWNtU6hALjwpymv4UCWVTE9bsbF9UK1LL63qvuXnVpNV",
  "key31": "3PWKyjXccTKkYsxMYEMgcwufCDyuSWXEzfV29jnJjAbcjGbdDmNJrUe3VNmMBLRdUqtXng5Vaw3QYZ16jmRrKscE",
  "key32": "3nHpe5dYRshaW8Z6zYLACSRXbeQb4mdA85wk9DWvQZFCjUjXgaAt5iRpiufzcdagMAWTgBrSmj2yZ8rEuzGVG5yo",
  "key33": "2LByqj7yZdugZeyTmC5nbxo6q2obu8YUsvxM99mPjhp2NupogzJy1Pa3LUQG3qureL87Z1SY29FRgxZfzhmMAN58",
  "key34": "9ACpHAePX9hCpPfaFeknNW1N1GLgMcis9b5dGEbYAczZ7NXhdkBMraRgV1TDQFUsvhxh8LtgXLkPvQt7bdPooRR",
  "key35": "g3FKkJeVrzNXrHUcZsem9urXTF2Ra6dMK7aBCjChpHcGz3HN6VPf2hg4jyN1Zs4rQ4efh2HUqNjpubvfKMQN1Lr",
  "key36": "iS5i2vHSDZ6F7Nqs7ZmkD5CUjhaB7eCP6qpRhheU2TQpaH7DNu4HzN2yQBs1Zx8hMXF9wWzyi25tJYSQXdRPPGy",
  "key37": "D5rYg9QsbC1TyrbUqadXcuyua2ga4b9J5mUfPYRxaNzCwX9MCMvycXUebuH3rtFQEBpbN4HPrjvmhhThQgEg1Py",
  "key38": "3K8qEeuztmBHpSgRDbMSwhMR99QuzZgNWQtxRr6j5RZCit6vtnFnuG1TSdzAoPprUwQrBNT93npcNya4wddF8S6L"
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
