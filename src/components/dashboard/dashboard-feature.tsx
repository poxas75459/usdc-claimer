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
    "NuCzE1fmVS281miBykdF6fK4myLSCg2xVWdfwGddjSz7BMELtTGgjjieR3QykCxKsEJX8uFpzvTHAR4UzYsWYnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1DbZKQnSWm49Yporj7HGfph8WpfxSN6bZLPCrypvuGfywPpZ4LuFtpNHLfUAWQHZRg11y5NRcrfattFnq8wgdy",
  "key1": "1ZNvS89ekUeLsv4Vi5PrRQ7iFk8nMr2RGghcuaTAKoPhi2NFr3zy7cs99fsaj7TM3FF1pVcC5RbzHrcEbHsja4b",
  "key2": "3TMV4F6zpoQF2EKTSmoPLMTemavByhLAKHCsou9qN6DwgM2doff4gJNhZA2kBDaAHXiMLLQFg1Cz7td99kNSgqJx",
  "key3": "3awnvaWScCUYt63MAAQX88pZd14iQKjzRwSDwpv8bdTXWYXgJHjjdVekgNHq3Bzq4G8H6GQsJaH4Qyk7V9yhevti",
  "key4": "3E3JaWg73PawPcpxmD1zSxZMTxqK4s6FwWRHeEsA2WWxYmSdN16xNAb9bgGxi15KpRdu2MQM4gSN55gdRma4o4CW",
  "key5": "559co3Y2QQHY4mFDbnGnEighKtaEbXNu1oRZgNAkZ4VdTm1jiseudfZXCZMtNW9UFUoMysbqjS14Cg8S2ngxWZqe",
  "key6": "37hEGmnkpuHLazSMRTAHi8rjr6jPq6g6t9QSy4LXAZCKSg4woiYTs2ECLAP1Qn5Kr4EcNP1RJhqEm8LJTm1MAdrZ",
  "key7": "5nf7bwRdFtjgZsYnVfMgBz2NVRnSsFXt8sSKH9hVyzP4ZKvYdf5b3Wu3A8BYzbne7S9ZrdvyicqxnBdRsSMAe8mF",
  "key8": "iD2gR4sZrMRPeuLycJPS9sqM1XxhChx4me7YGJJQGQX1VJhnaoc7DCJhZEMqV2Q28dn9rM5jCKNVJbN8a1kSprY",
  "key9": "28LRpHBpaGJJqVPt4m2UJo6VnCtKuZbLHhHQ2GDrGUpobYLHgUvmMU6PrUyeZBez79qhNGNkPSD3UsAH3Mtv8sUr",
  "key10": "51eXrjAZEkxyYh6p5os7mYiZLtJoLt8YU3Js5MWWzED24j3Vri5EEcrCV4vAcgCLL8uuomiQBMWtdM77QEjHwTu8",
  "key11": "2jsdvMLZM3EaYsjY3RMTzeodr7i15n7Kg5kKrLZKLndE3KbcghGSWew13xagZdD3Q5cDXPzamxMw5GALpZ2wqrvm",
  "key12": "3VRczdpYtG4dc2GEQnkLkXLKLPHEyVecW6CHtYPBJcpcQW4sjaVVvQzTDyEosQvj8Pa1id4tvNWb2zLiPyWTfJkB",
  "key13": "62rDAtEnbA4sL2B2eYSMqgo2XK4qWYRaPCB3HPqMUsR2Gi959pYtsNomfBkaAwVSEZP1zgTDSJRS9VrWeaDHHWM7",
  "key14": "5drnysQptrMWxhMg4z3jvKaoSBHpJ4XCKDMZ9gBjBhPJS1w97hgJ4xCnzNR9D6AcJGoRAqm54gH8DCtdZHKq8qVh",
  "key15": "hrtcSJ7MMSMGkrFnSCeR7ijgfALCaVnRvZdTJC4EZHitK7QnwYoxucCURMPF3RrQZ6Zs8AdtTvuAHFtsKaJ4gU6",
  "key16": "4pEoTtNpqKS89SgdstYVBV1yLVCADj82cF7gpR8C7dinEY3mY1252FS2Q6CHexrvQ1k1zu3CM1yM96iPWzSwThjm",
  "key17": "oWBFJbxXMbVUMh831PR8t5Fm2P648cUx5DFPGavgU9sVywDA2voBvgsgovwD9DgQt96cMkEvp6N3RhfT5shKDfh",
  "key18": "5mmKK53p9F6mX5YoYv8uEFP7TDkeQPQE8ijQXWaQpi3jkaQZkqg7HKmrxnq1Csw5km5oJk29kjoFr4QcGz3ZEuNi",
  "key19": "24cxVXDkPwJ9WsXJ44t3rymwZArPX3chh6Pc7yegGxGbfDe1i8J9jntHjfPPg374AT3UDAPy5d5w6FXG39HAbH8B",
  "key20": "4f5C7kR2eJQhP88zKkpDs4cFdCyqa2hwMvpzbnF5xcsu7bMzStcSxuxKfGUS5kBWT7cAGY87W6HgsucRNQbbihXM",
  "key21": "4Y8Fay3Xk65c5UhdJNeEjgad6ARsVtEMWog9s7FiPybaxe1p87oBowsWqVborcrpMBb96vMgLfEZE7Gi4GRT7eKK",
  "key22": "45nFQL4UWXm4EoHTuTVqMZstvscfv96cywxy7PCo72Xf8xUxuWda9MYz5FSm15irQF2NsKS6Try7mpbbME1gM2ky",
  "key23": "5sGYzq6gww2tvsexhztWpyZ7ZcQ5ZQop2ptk9jivnynX1dap57yEu3v3QyA9b6idHPXexkWQNkaxAtyBrvnHFTXJ",
  "key24": "2vZMd3eR1iR1ZoEuEvKpj8NNuspK7tmkfGRRbYskiQGApti2MBpFFoswFT7F58tCByku6neiVjarrnDUxWWigpqV",
  "key25": "5EYGbx8uYJgecTeoV6bxHcoX765WpwsnLRXMQQmsD8BcBu4h2KMhtBETAUyKV7pqrJczro67cDXzcCEHeWA9tGc8",
  "key26": "5yXwCyJvQFxKowvnqrVCXGY2Nhrd621aewVj6JhH77A9vdAp9Thc2j7FTpv3HG9r8uoLsdH36REEbyMthvnkHHsr",
  "key27": "27XxRgGjgwPRN58kSLxYWWKz7VCQa3xGzMj8qYabW5hHdBmh3YY2vCJnqL42QoptbFdG2o96cyo9U1SaxAiRM56Y",
  "key28": "2sAqBPw42Dp9y1JQLQSfHN3wHJbfmAjDU3SUksqvpcRzj7GphVoZhTajypuqXY8LzJCjDpbN36NjAgwKNc7qSmhJ",
  "key29": "4ifNQb5KeNppXkP9fqYXpxgtaZ6U2Tgf7i3H3gyNvukG15z7YuJP2VZ7ndVXkQv5ZTeBSXr6qsyMVYgafPrqxu3b",
  "key30": "64RmSU6ZtMsRZr4ueHrv6KUiHLjWDoBoe2uRGuA1kXgh1Sch12YusxXQhekRkJKvPT9ma7Bg4LCAzL8MSsPvLAoJ",
  "key31": "5vuZzDiuPrgq1B357GpHjHmDZYiUbY7swEBZzELka6nXPqEYRFdPnBbJ1QoigVSGTevToJDYnYPD55bUErR1vqS9",
  "key32": "5cMFm1VkmX9HvYQnyEyTbqN9uYSiq6WKEwCbnK2iLZGPiCkv5E3Q2xp7e3n9svknC4AtWDHMfM4M3D7ygNwS9ZVd",
  "key33": "2mmbo9aNh844EEiLUQeHC3zRbKeRQLaYauDruedSafurpb5qv8MF2CExjC4u16yuSHoJhGW8vFKb6ou2Wam6opnn",
  "key34": "aC3raNm2NPugcDUfAc1gGg8TjidVyp6JvmykPak4bZzuZHBowT1AKy1EFxrhSa6337XuJuRZ4Ui5xZobSA5zLRt",
  "key35": "2QGsvB6wpXSNFpDmF1ETqKFAN8EBL16DcAMc5K94VjYbFJbJ5YRMBX1R8ncXL77tRkPHi3fZ9YkeAzDbACr2AEQg",
  "key36": "2wUBAoH2LM2dfg5AshL9R5QyPSAj5RwnN2ZmPbQn2D85jACqo4nn7KEzyhqCv26eVdiUMx6KqGHZQN3K3GK4HFWg",
  "key37": "5pEaVrkXApmBo5nyCw56JvtSrf9TETkwwSWms7Z5Xd6cAWuENyXnTinMcPcgEvCxn7cXh42ZNJCPPeNxmh72vsfr",
  "key38": "XEshzhx1aCEGxZRLF2a6fzMB2LYetherdmRBAxodEpDaijebJyRh948R3sEAfQMFtJ7enXPE8dKwfEPdbEi8GVV",
  "key39": "5QhRuQYuGohx3oPPXkSZmEiS5vpMv48Gqoyn1gdsbWH49A43tHNYj6HG2FiiykNtzQZXkcQwAcfeGxKDnfQ4N4Wc",
  "key40": "BfigoAKRsrjZ8GKrKRLp9NFHQBT4E4AacFvu19p7oFcwRii9DRToZNk2i9MFfoXtWhjkP1NJNiGrmCJiMkNEzRh"
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
