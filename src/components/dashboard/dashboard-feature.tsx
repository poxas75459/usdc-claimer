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
    "5DZXp2r6NHNRA5V7UE8eB4Sy6NnUn67xHFQqSNziydnSpL4Hircnu2zRJ79zMJzSE5AA1BD5uk6zKci96hGJvjE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eQ33ZpKhrDXAKAD4zCAwkUDbUevwh7f9aA2GW3V8xpptoCRM8Tys8i75fr3dXqg9WYBcHTRtaBVgR5QGd9xcwud",
  "key1": "2EsN6B9sm1D2vDEymAHBLsrDnLvoKRWFxEckv3Qxo644MsUs1bQEpM4oguNPKq5zGGdPhNmxrd7cE8v1U7d1wq5K",
  "key2": "5YFKz8rDxgGBVBAdVpZTHrcd3YDXeVwy1AyhooM4PL7Z5og6BUep5UYgYNLZr4ELCyxxiUJhyP5d6PJkwzEPc9qs",
  "key3": "kojnPRyn7q7eDMbGk4Jm3vkxAw4K8HxykfwGfVJgwuxBMWkAznic4wUQnnVPSmEeeFBNhAVyQmVCzbtHyPdsda8",
  "key4": "4ZrBpTszrpGD464VC4KWMYxdPH4rhb5s7wGjEHwvCaTQ8n3ykZHQuZxSEbDSfk9Nw5KcjSaCMzYkyLEofzvbPHwC",
  "key5": "4vGt9YsLKS9QShx2uLWLHSeh5gRACrwFE8TvHvYEweRZxmixpSTmHeDHkCXX9V5tjdmDbYnRsmGZwb18rrfbvW6Z",
  "key6": "44E9n6ZTwdzQX6PXkYhM7ctAH6kPe1i4WSmfgU6RBodV2NJ38BdCBmRwaANCyxbLtyreMsNiub661mZ4EpveDsyw",
  "key7": "35DvmaNUSHVzj9BT8YMpUT5c5eYLZNF7D3q1U8DZe4nMvK9sDywSse88uPShyF2WYy49WHK73W1GYWXJQhZLVfk6",
  "key8": "22kEZF5WF1ra6ajb64RCQURcjMYdfUEeGw2wVkW8rjNSdZx7U5i1B339JXF1F1f8ogYXD74TenJi5g3JzsopmRf8",
  "key9": "5eEPJHnSkiResYGnE45mHK8RfANPsdzNdSNEXwYohMjsDfKct9UmFmu6B7mbWMDcSLp1PCDFgX13LHe8qMzGSDhC",
  "key10": "2QBMzkPUWX57hKMd7AVvNYYrbu9pPZB2HKX3tuWMgC8fwZperSqiGXRTwmL5kALpCdmYjKqXbfDDhdF7o4YL23CG",
  "key11": "2ZtYtV7MeB8VH6bFkE4EB4Tt7h2pxYGSrqhzGAhfTYfauefejuG7S7pZK1bdsehBLXUpyreBhHYnFAntq9E3ffFG",
  "key12": "3xyE6p2kbtTWghMbo1mgAupu2X8JMeE77zjcq3yYXLw5B1WL16y39MyKTnMveWBqzcJEchDQQy3AUjRjCCDKoU16",
  "key13": "2JvtxfD6FmmgMDW1CyzMxoe6pDMpLKuYZ6VxSUKcLGcWGVuWuQnk61ToHidTgyX1kqXch3CzFzdXqRfA6b8dPspe",
  "key14": "4WToh5o8G2CiykuP4ju8f8U58Rbn2Ly6uAHoTc4czJoyPjaEWeXpxK5vXNq7p74CemUwyJzJUQaKvC3XUS69qcVs",
  "key15": "2TnLashHZw3DKnkgWJFtPjzWC9zgXKFA3Q5t7PwFEoGduGi4S8gnwBZVGiMVptzL7Wy69cUVb78M42BKzs6eAgTv",
  "key16": "3iTXsJgrYRVFUauMtfmxQoPoWLRLGGn3g9WXnkLConi6aLYVRZhwjmkjgZUUqLxZBTZyiTU68c111NfntU76kt7G",
  "key17": "HYF82GgusLs6wULHd86qayoJK1HF4PrbCJyYYP6Sfj8LYHtKXfDNv3LLDMnNDCajvp5pZdvYjfgDLTBWiurhWxY",
  "key18": "tUTz5T2SLCGp51daduBXwGjCLpeB55c1EjSixpSYUKgkJRFjrqRVKezGsWyrhmRWxosHnwtT6R9bLgZ6mbqzmuM",
  "key19": "5nyhpu5utu6MWmLWWtSqzY9EtNYLRcpHsXgu9kvZ3mB8AuGdXdE3Gbwu3Jq1dYYgzsYhRsz34LVDzhNKsVytxi3n",
  "key20": "49wc4et9hdYuu3nwUEo2To278LqTkZRYaHyVfnkeaq1YNM3Pdq7GrJiR5ntnTTEaQGroWjAHi5tVRcPZZGKT27gt",
  "key21": "4p62vGRBmaz2BuSfEy7Jqt8YFdq4vE5T6KtqgQ573EeWGGVeRGrZwdyowiNxbZFdndaRLXe1yuwiNjFWWuPRRiLt",
  "key22": "3UJhqDtTb6utr2DutjqrJtqg6n5Ci14Mtrxf1U6t4e1qcn64NgkAbJTYpyinNLUwJAJHjKowQjoGetxiDha61HPe",
  "key23": "3X7jN43VQWo6MLU7R1sfWfKMtSBcAYR4jWNiN3xUB3tkMXQrQVUQUnQPD5P42GwmsS3LXCayhtRWdGhr6xmCnFP",
  "key24": "2Bx592945rMSCLSdzeXsveCFsSJRKWSGJmD9MXDA4TSrjGwDq5De5obKXoKamC34QEA9sXLsiFTGgrX5nGn4cevs",
  "key25": "3G29G9ymu5AximPCusc8UtQUkPYqypKueVjSHocSEGYdYnpRTZHhmurUaSeWUWWtn6ZSzcG66UoZhX6uGEL2CbCy",
  "key26": "65zPkgjZrG9yC456S1WiCZh3F6oAUN82RxPLqjJERFTjqdR3U3SzUJNSS6RSSuWg3WrzZGgGWGNeBXx1GvaRdgHK",
  "key27": "5Cp2VfzQUwAdxwuP4hLBaSC11EsbHJtjS3nMJbNcgSZnE13LfaqNq9GTaoVMJY8pva1rYT35x2KLf5ReGzSWuMf4",
  "key28": "3UrdJP29QkisHd7U3ncufh6EAVruEU2FZmANGteuaJ8XNMaEtGvxQxYZDyvpyBFP9ENmiYy8bC5edCmN8xpijcJE",
  "key29": "2ophcQ3YFM1txcMmTCLsbjx45UK6qnZdEGVWFQcFcS66Zoz4e4pgf7d194xkJ5PB9hvJfMAVjdNhUeuXpV743Don",
  "key30": "uGrw1F6qTiLJn69HsiD1y9cTwJsxq8Hma3yVJu21LLS4qcvPhNJq75EY8HCy1iQiB3Lxqsxa2xJuCxDhGaBeVJu",
  "key31": "3WsvdN9nMcfF2h9wMXYjRMWDw4CvNZA5VNk28ZTRfKDShfkGQUGW1zbrPAHwnd5JpNqU3VvHMhdrLtyEteNEub1t",
  "key32": "5VMchDJpUHyEbVGowW7pVnF2iCk4dftXkpsWWKWQp6WzpwzT9yvpPXHGeJTPadPUirapmdCiLgPkrBtx8W9SeAQU",
  "key33": "2cZTXSWwVJmywHVQbFCWfMmtEeVMrD45ujQSDD64TGc2tHSKNyg6PCBtYRCEXgqwLA5NJiRciTfy4ezzRDCSf44H"
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
