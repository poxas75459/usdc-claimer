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
    "5Zb4kTKAwGxXELJKntjRqvChwsw9RjzMdTBLQXzZ9ANZWyDQhGGqbXdcUGgUuF1J6zeEeLShjLJ7Wz7sEoeE6EH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qSAKuLA2iJCgwVkteHKs4qgBZRJ2jiWPHgmqahkPqdzC3SNwCPL2FV8qDjJw9ZLAeEtMvQi5smpXwf1kvKBg4B7",
  "key1": "4RUw7BUtaykKBk7jkZjgL9TQxaNTqrDm8qbiYtqTvrYgDEa9MHpBsxRAsdEsQkRxbWoqBxS6GBkCDVDAtYC2LEjn",
  "key2": "5UyzPPGHvrLxej1Ua1T3X7f8fNRpjXhNDpfhZrWYVd1KnWjKJacBre6VenUTgNhCfzdp4fDALfJVLuEc9GdzCQQ",
  "key3": "2vM7Bw9QXW4VZdEGpYtrT8KhTuLSDPuWuxY1FL97FEF4KGpfXieUYoVLQTk9KtcxURHj4C4A5QYuLDHXzRfeJwoc",
  "key4": "46V7GXm1QVXfvZUJxe36C3sG9VzFmgsQ81PynCM5o5U3SctJ9vA69jRU6GK6DYHatot5mDgujQtU8r2nouQ4JHRN",
  "key5": "3gsvYVdTQ9ydbhhM1VEiMUn4CVUHqmScbXezJ231GtMDeyHiagWtqYnBHQfzCzTJjNBBkPVEbWvvFrSCZemzTJEi",
  "key6": "4u82e9XaugnmkTUSfhzFUW9fuHcUeiFcFX1P35Crc3o5XcND55LhSWHLtfjxaRP9iGJw7xwovtFBS5adUjK9MfAJ",
  "key7": "3tR1QtS14DWTxHj1Mv1CDY6RPzFXTXfeExcQKpKNC47fnFcNc11XQ97C3g1Ld68oRCuUziDUC5eXiVRYFPTyVvGj",
  "key8": "p92v1CUCQcwttvyLyyLdQktQDZ6GKKe7E9gSLpcQpqtrMxPXig3RgyLEN44phEGMu4iav8kMd9bFZT6GKNfuueL",
  "key9": "4tjUDZXh1S4AxMiYQ3eGDTKHUMCRXmCYMJ5Svth2JbTCB5JysPgbaGzdyaWyunpysYWZHX8kq8HYqDhQzqDvGrFR",
  "key10": "2HtcuSX8GnnHazKKEm4TmwLEunoMcy6HuehrZRQo4Erbt8jNuAarn13gxQLL6fzcgKsqE4ebL9EUNUuR3ArNed8U",
  "key11": "2x6p7UM1hcaSAbvBX388ugcrdt6geRyYaVHLfBsv3fPiLv6hsW3Ny83q7M4Q2pYnudatGvwKsn1tpVpeKWboX7qX",
  "key12": "63b8unAgp53TTc4GViDSAMiwus1Lq97ivzjJHjj9nNCYqL2AC5WpHzKCtQz1q8CnxUTBwvm3MmiBwJmjpNSeYp71",
  "key13": "2dM79vS9gUFAiKB4mhrUH4mMgV6uEeFTuSrphZkXd1it8faPPGdvaqaqVsrSgEwwxd5bGPN3nqfM9S5xJbZM6v2g",
  "key14": "2EEERsWARoiUTyPoKbGTPMN45Bct7SNFsJNFJAJ2fxVLsdFoGQMZFVNPpYGpnqkmNoHLeYi2LoDqt2oRjUm4dzcg",
  "key15": "7WEjtg8ZvjXtyZMjJjS9dPb2Bb3PrmHj4aPvnAkNAHVreQJRC6T2icJifphT7vxe8iNbU8XXXZtyeR6EJpj3H8e",
  "key16": "3ZtFA6TGRm1gqnqATJe3AKZhE2YGxE5k8uMyvj4w2SjP67jEncmKgEkG5ZVvMQUyD71ftHS4LsQsHqwaWmod2dvZ",
  "key17": "25GSxP9rtGDe69XMFj2NUhsYfenv1UKrRJanBA4pDKMeQRhhHpAjfvfKx3nPh2rCTbQoWJVP2EeBFbNYbh2GhgXn",
  "key18": "4BPX4uRA7L7LVqLCtvUfgcinrBoe9HU7F8TZoFpEcFvHnWKkgHdoga5EtukmHFHc3SQKLhHPtnxwaJ8yfJxis6o4",
  "key19": "5e3JB6saFLAM6KpCBY5EPh9sy56AMBuJmsKnEjMpfvJ6gN38JdWL59tQnEGZt9tX9NM2NKmLjp97K5QpengzMRJQ",
  "key20": "2t4YJCgb4NrK2a2Yivn9QVJcujSYVAPB7BFG5ycGjtj4KX2yvPNR7dB9fZUS28hJvgrp9ipuhm7wmhQg8Nobchjs",
  "key21": "2vhgM3fB6ASuB7z7zU52rNRJdNzxP4jUjExu48pA5NM4UrLqWhoAtrJXtUpUBDUyBWC3KQ47EKh4CU1pKymLcqxr",
  "key22": "5XoCbTF5ih4V2xMjtJrtt8hCpr43KaFjgHUVG3xuYtr3iqn45jF5jz7cuuvyaGSroDiC9FBvthsusgxJtzpCmH12",
  "key23": "2EG3pgn8kQJqaPQCotBPwPuEzkS3voUT7YkBThi3ZBenQLs7woh1S7RGEb8AXhzaKnLBvwuM5CdMpQUw3NXXFidV",
  "key24": "giJqfxPXthWcSLAyYJTbPKtFcjEJN53aQJi6WroZK9Ej9JmVX1RSm83svoCNmgz2BD1zWQm24e9B6bRScB6uJbr",
  "key25": "5BESjLKBiWL65JBnDGs2Gj3dVZ8RALYawWF3LFnYamBxQgXoadpcXjvrwT8MxfdDpqxgtqk6jS5vyXDk8ZB22Q2G",
  "key26": "25J91ntXobxoMLfAKZLDZaU2vqFNdme9DSBExeLdwdYV26GyMqUJQdNP9ypioDQdRBN2qv4i6urdNXooJuHVW25J",
  "key27": "3tw78j6GQD3TVaZZcURDgQnFyyNdCKoE8gLu9cGedXyu6vTwK1DS56byMknq4SbKxk6E2m9D4LV5LkFp3SUTkBxP",
  "key28": "4PkQESCZpcGT7s5Hnza1k9q7s63nfRWQ487jsXB89xmVvB87fRV8hUVDh4G71gZKkwQPFVrkzANDTeiS26sDkcCB",
  "key29": "3aEFUyh4TAbWtnFHLZ619qjHTuCdAfvu8W6UVa7Zor8hsoonxqSkTKXeJwuZwP5ypmLBgm2uCmXVxHiWJn2HhrD8",
  "key30": "42Q1xFXqWRUmbjaXiiBdMbgHdrD2W9Rz1xfKtu9bmUk7vbeg5mPxD3gXHRqShaKFyM2XT9UYDoJi85RExV4Gdm8",
  "key31": "4FtTiuuZFXZCQ6HK8o3hG4NZpF92PsxDJMVsaSM39ngBRfJaS8bnG3z6ZDobJrR6EjmALxVbaiw4Krds6H4mxVh4",
  "key32": "3ZDTFdosQkstruyi3AfbvFAejKhdmirhn4vk39XjmdzAaq4btNRRiykpKpJG7wmTPxBa1Ls29G6ijxHKJP5CcHJt",
  "key33": "W9iHs58vek1Bit3zov4ayvtRheuJFEKJX67Ruu8L5bDMxSKMF8AL8zBU39pqzbCU9cXUEQWNK4ianxLRG63boFP",
  "key34": "j7ZWUwiNwiaqCaFnHVojubTu1tnejjySPiPEbmzGQuBJpuCgPqsWQmmZhepCg7QbwxwQignpDyBMfx3twA1ssVk",
  "key35": "4RPZqvvrfJbeX6dQS4c3a5pRhnLAqQQ5ZQJ7QYgkFJ1PwB9rJgvqJ27GmdtqNzeoyJkNhXWwt56d12UVMxTiaWBL",
  "key36": "4F1LfUj5wtA9so2D7qeTNf32FS5QuWfgJAZstCCaXYcCMV6itwCWBFQ8wgFrMPC3uf9i7uBjV8aiyW4RTyLfPYgr",
  "key37": "3LAm5VqxKrVDEqriuKEfLXrdAasUQdoV1MqtciriTJV1jiKFLn3NMuRmarc61SMdVq1tkzzyoTxb653tBAJ2UwTG",
  "key38": "4XeaicebqAZGEz5YkKjvwDgYy9duw7X8gZdBDcBguBpakgGqebdzpmJNzbCwYjwdojiZWkQ1HQiCQ2jE7hajG8KE",
  "key39": "5Mo3FaUJtSZEFwvLW3qgHXtJiwMNvsLq9q71tXZABw1H63WqNFSi1jhggjkxSwzcZevMHHbsXmhDpkVtpJjh8HL8",
  "key40": "2Leo4VEBavtWVkNsSuoYDRZ6GLo6zNmMfUy5b74st1et93z9cHUcZcYhSCH38D9YYbXHD4miNYy7gYdS3FWbgciB",
  "key41": "3H1duzoqDcGjcBrE8jQSiQPKo3t1K4p4U1MR9mTqeeEcFjeQ4ZfpXT2n9vaGDRbyfkkRPUstouF8SDzcDifLwB1q"
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
