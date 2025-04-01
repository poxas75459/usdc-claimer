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
    "3D48Fiw5BBtxCjPB5jxVtvdyYJyPttkNJzetwA44saEDvykj3SNZabqiojnVBQFkZaG5vkHXdvuz8G7g7A7tAxEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4t2KvgP3RgEVbDCtkx3pqydkUYRn2gppVU6r9qkJJ7Yn3EKFuocy8FMo2pg4HBbR7Xv4R7MchijpXraofxno9R",
  "key1": "5z9PYCEN4zGSPWCQf8LYfcBUj2XsExYdVgoqFR6dhBPBSqeWDhAJ3zZBcjhfuwXCg6X6BDYp7H8HQ9VHVAaRt8TD",
  "key2": "3g16P3DciDHYwrHhCFX7Bq5BLiWMMzr4rsm18sQhq1refAqLqSj349AGmey8Mf2gVRLWhQyzikZyrTxXaukHBAqZ",
  "key3": "2tmRaMJF2uDvrPXDVGSK1KXUrVboczwZenuoYNhJqhXo45h1XBWFCnpdzQW5HEWejRhu8tKcdTPhsGiqdpMKQt1L",
  "key4": "47J2c4D89B9hjrZ8vZ7z3RqgAfLRsmWBZDSYwnpf9jaUrrUpdwGfroALZvP5fYHXP5xpeVAC2DvDneJJ41rH8kdC",
  "key5": "mdPxYUA5NyMhaqYcqNiRtHpQaDSjr6MRnSUZoai89y5gE9boK8GCJEEgA3RNfnjmgUcjNZeSGHtsy1KrnTANowK",
  "key6": "7pXceKe7SryY6saeUkpurnEqGphafwuwGC7uZ6GFTSTyWSDSQ8VWWDGRuvtfh3d45vahyMNENgpJE3HG4muadjL",
  "key7": "4sbYENu6saB9zrTVJr42CFRxbYXMZBhWJqsWkFTTD8kAzUm2riecpLRX49696dh5SGa39XSwqZVpW9pafURWABq5",
  "key8": "4Gm6j2awjYfmm1i4yemgGEHiAAb3zBSW9qr7qZnNUfb4FxCy2LB88uRhpyQX8dV59KVCp7aFadhwo2zbp2L2H7UT",
  "key9": "mvr6eDBaaWU9xV6tf15gVxAjPF6ird33t3sST7sbUKLUQMzLDnfgrXtJs7XyexTXPu2LwdfgLD1UszUQRzKMMta",
  "key10": "5HjejdvUCbyVPZMDwCts2ptqthQNJpS9d1g6gAxkpj9VgtnF9YWaujBEPnnA14qsMuyx3fZbzTW36KZPstTezQ4U",
  "key11": "4jxik4cC8MXoXcmJipJWZnUmkSCx2rgjWJLwquQ66YUHb9L16UsDEcXzZZ3DazHcDSJEtp9FvMojH8Z3tXj1VYGf",
  "key12": "4H3dAvZ6AiLxsn3QpGDHPLVkXyyLjN5Eznew6WrB1oSKoCBBYVEinJosge1NYkm22MwuUkA5g6ZZV6ufVXLb53vR",
  "key13": "55nHBCvjmaPzk6JoyakCB3A2RPd4QtNV9GFnw5ueJ6NCQ6YTdW8QueGkqATfgXXWyQVbuRNCAihPMGHpZXUj1fNu",
  "key14": "5SgLfdtSwiKLA97VXa3BzHdDZZSnszo9bdG3EoN8piCFym6i34PyyVnL5oJixGmPbD5Yue4oQEBeMngT2BqZbkGh",
  "key15": "3AudB7zEwqiAT7QCTLdJujKtLkVaNrVi6bFv1Hz5UJwYVbWSVrNbgZUBXWvXt6BbA8ZjLyL3vTrZCJ4ZabdabTrS",
  "key16": "5iXbzBBFijkEJvdXNYjc9CFvgvUraioPeGaKHBAQkRppHLNwTewP5C5myGkLwtB6sGrNPACiW3a3bcs71QBE1uH6",
  "key17": "iwJJP5RRjmGk4XhtdYQQhp3W7gkXE84ZG198cGymkgbKKm9dau8Ahj6Vhf9KoxbHGDFTgGuGVyfBEjCfbgQGRNQ",
  "key18": "2p68dUJffC8etZhBLZQaXEfTqcCAYf6TcihVjbepg6a1MqXsp8cBeoPBykXJ76HvcoEjuXE9RAqCrzX6Hw4uFCx3",
  "key19": "b8jbBb63BHeQxCQEcDG2Ubuk2QibEXkgWBx62gZjoK2EaZKXC9zGHj2azpNPgw2vWWYPXF7d1KyMskuTqvYDcXD",
  "key20": "5aZDZzC6S3LvFeEs4pqXq99HYWvRAwsFPf1M2fbE1oWKUqMJVZajnckRyccHabaepFhhyahsoaAtKtdF9DmobgkQ",
  "key21": "4j3ph8FxtCrHimwSiYNbY8AG7UcYP2zzPGGRUXEcYXjEzcrvt7dQMnnS9pG8UPdzRBwCYLCZcHt5jDCEQ99Jam2v",
  "key22": "4WynMA7G46TzQfABDDnDfwCkHBBLZ98eUewtdSigepjFLRmBwyiWUMS2dnKmaSg25NMStqwjKNfkkNQPAfLL6X49",
  "key23": "4TXhn1PUGqJiWtEzjSFFKPUBCks6NbzbQBGxVAs4dwi22CLSPJ3MpGt2BhGDH6dn1WZBFKAThhnPudkciYodYt9K",
  "key24": "3b8tcAGoYuMG3Sye8gVMNFpSEQyDRpeSuzmH1oNkc1X2RyfvjaicvfpUTsJ3n5nptVutH2kYrdjUUrEYpnHxe2B",
  "key25": "57gZopoEcpSRj6URpQp7S57RCaeYoHSd9cdZtKmeo8zDnHWy6h9NvhCLi2uwmK9duBAWJd4ihN3pEdMWfFfa8fbv",
  "key26": "2xnNixKE7FtTvAJYe5miVV6HxkKNtRQunViQFoiADAZ6qMZckD73WBMtaZzqegkf4rycXF6yAqq5ZQvgc3QvFvAW",
  "key27": "2ebAhkkPGuFwXHVEm6KYEJaidVKdwieoEGv9TKd4VTtqq9ozf87godTm7TnQtWva9t9V2AdZNB9bs8TNqqKmxtNt",
  "key28": "48NBwanfoZE7ZCMCHDj5qy5U8Hwj2RNBGG8C51GPkXBNtwXC9psSvtLP1uotyANB4qvEiZRUy2AMF5RuMge3THRq",
  "key29": "2ER2P4u4h7Uq7cFEaDkvBJx2m8s3U3XYPAdHwQ3DmPYf37fT28u3cAGJ7pBRAuR2sqQQYwdcXBRcG1TCcRfbrMWt",
  "key30": "4hAfWtYXKpkbsW4gzxdtG2BTwodtY1wmP1tJLrwpg4Mm6eCiUFfEAcqcF5V1kAwYp3ykM2a8oPu5Z4nKYAgmMkbf",
  "key31": "5vAKnZjkgDYfKMvrKTx83SyND8k1qDXg3A9HxzwsWr5pv9WpHDFQPAAXoS3bBwrZyBpKxmwDUDywgUafPGxATP65",
  "key32": "2V1Ep9dVLCmigzzAVMAGG5VMGQKpwkzucjdw2SgP2BR1nTT5Minh4ejBSKFTEYheFvSGbtKhvq4fBVpcpyt2xBJ9",
  "key33": "64vd4SxpUgoGdhTVUaxfrJhchKLUrek4K6H9QX2y3fRrNmFMabpwKbiVB5TXESJ85FFL8656EBfD2hgpNXgLmnZU",
  "key34": "FSgXVmug33cUjgu9xhExyCMrfRA9zpzrXf67CwwBPfDKZXfFariQh4Fy4BfbKfpQyu636sTdyDJuYKD3jucwwFj",
  "key35": "4tuCQsxQWRATEQj62tbLuJwghgVC4pkAy7tqMJFccMTNEeRo5uM76V58jnMwdaPuVtVKhh3P3fstEzbD4o2z47A7",
  "key36": "4Npid18DZh71X3pG84eVbXSfhfJ4dcjtF2Ub1Wr1mQ3NUNyRhucM8GxcPDWqJuybNU37JJY1CFVzsLmFeB3VYdsF",
  "key37": "uMphyrbWR4Zk8AjnLtLa5ZwFGowGyS7yACsKorjbYS7mKmwfQrMV5mSrywvUs59KhYoZ5JEPq1a2qwsoxk1fr6n",
  "key38": "2RjT3XdFaRsn8BZvjxVV75JGiEKqpeBoSUEyK5NcrVL6rKL8rqKXmHipYqxe7te7HenMo4nqUhrTjKxdZLs9VkRW",
  "key39": "38WZLrwgKSKjCeTFE8FHPKP2yLfLdyEefkfSjVvbfKsSpvtCbG29NB4grRuhxuXwMAi9j2CMH7sCzUJQaUeNh7pf",
  "key40": "5EoJ2SnqrHLJqTattoFbDnwKLHK2zumA8HuhW3kaFCCgWPnnNSm8fgyozkaXQRmRQCs8EZZBBa489fobrYqd3hLx",
  "key41": "4WRdmpTrqrZ2mZrPxACZous8mTz8sZzCiejkXPrTH8WZz3nGKg9WXx7ZpgnFKpBBybkAWWPrGFteQegSkhUC2gts",
  "key42": "Fhio4YNcuMuzmvXso5Zfp5nVFd28rM8GSNWJuL3yGwpPFdKZpXydzyuexVoHTnLBSR9Rci1kwkLbCEAdcgAHstV",
  "key43": "4JLdBikmcD6vGo2enseXF3nUGK9tzq9n5Z494yLPgne6hiTYJccSBXfRnCm3tM1L84ddHFyQbU7dDNbi3PMHptgG",
  "key44": "4VPEz5jm53ru1TwCAxWNm48kGRiCp5P4e3LgqGJgQbEjbqYzzJDBLYZ69jbhY8aYQ4FaZN8zXipGRDW4C1tAqmUX",
  "key45": "3Mx61yN6Uu9a7KscVuM8BLaHV9dvF1XLhsxDyAgubZzA3vLxFXBAWz89p6fEMbtEBaXyGoHkMPEH4WrwtG5tPSQw",
  "key46": "3J8NLCv3GzRq9mb72QRh6KEDMBPz5G5nnXAk7bwgKDPr4jpiJgPispvPAVJn6Te3PU9vzyovX67tuY4QMD1EYZsC",
  "key47": "611fTrVhksBKGrb9eGPrS25wMGCPeggBvUWYxUWQvR9rYGDHRrzHaPRvvppRtz1R5bhKRUeBqhxa3FNxoMJBoYyP"
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
