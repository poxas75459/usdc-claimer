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
    "32WDDmAYb8RHV539RNsankStxS9Kv8w1TG2v1r1PBoY2tedwLQBqAdzNFRdEcVRhSPzEDybNe9zXH7HbDY8aPMKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mfp7ZCop6QJQscYYHppaX6qjV9FGtnLEm342K29kCNQ4fUyKWSAs6H78bkuKV28wrKg9oPXaFYTaHxax739vpNC",
  "key1": "4rrHYgCB2rbZq5Svkxd4eDupKToFUrChYKKfHSxXd5nvyUBDeUCYrqLgKWRF1x3tWShZm2qgWEMuGNAh73vaEgBK",
  "key2": "K8fNUoNZ81xjQXRdivxnxFN2SGYaU2uUd6feHcaaJTWQYisHNz8mz5i4LDdXXnqBjaUsMoH628cWhLPy7Di8923",
  "key3": "5P6nkVxWC2pu8CyZ6ih3RU362SEp8sA9DskqMYHLx3VdbSycdcJFj2AspakEvUzJZFjja6Xdhn3zg8xbEKLziddM",
  "key4": "2gqVpoiE9u9rneugF6Aq94QTsVvJSxXWbvKk1jRY3HRUzRpdg82QDmV2qkdW5PqPPEguZ4d3tXwXyFfeueT1G5od",
  "key5": "3oEwMAktZUycTPHP9oacNFBra2PUjgQABtHoex4HXfeAcurArdojqT8H765DCrnmPG7cfgxVj5V8RdvKaUkLo67T",
  "key6": "3tKWTvhtCpnxFjReqeo8L8JVxpdmwuwmJJsie9EfHsVqjrfw41Nj3ACyRtSyy3qyaKPC3FR4gtSvC9M7MDwuwu9a",
  "key7": "5ym2nTyqqvBaFMxCGpRWn8gXrLv39HDkPPTrRUAU2HrpqWsqttKPqvybKU3r87VbXgYx2Lf46p5jwxiqow3qGTbt",
  "key8": "3PqMBV9TbgjSBBiia23Gig96x7Lnmid16gSxHoQcUYckS8DNAe9sMz6fzdGVHGAPGuXzoMCE8QeSrrkjpPmA9Bo",
  "key9": "5TiDuPBWHwzvmKcckxwiE2S1rbcEYkzZXpTPkuF8EcSVKNrioGST2x6MLwde3wc3C2TrzqMU7haZBgmzon4DR3zP",
  "key10": "5YgbU7ueeSKzBMJHSbgWzV3QJ56ATJ7sgMECqsNQ4FswdNxCo8PqahgfDere3EZNKjdttp4PPzFxR7ybCZ5tvdqg",
  "key11": "2acrPZApaBqmvB88SmVmYqnLBkEGNDiMZ8HxYUeunfxzN2LoeqjmTMCBCVrigyXGePKXd7SEF5Edw1QS6S1rthSx",
  "key12": "3MTMgJZ5VTyjcriodBQ8NXmmqPHYnm22reXXAw9ycUzZtJcooRmd7Ts7qDcFX4GtNKZPs4RKYwHymh9y3CqG8D9J",
  "key13": "wyA3HA5Mphq5AHMaEMisYG3JgeKorPZXmXxEtrjvVkyS5F2wpzWpGAUAUR8T89UaZq9s4Fshasf5KnUrGgLnjj6",
  "key14": "4e3MUeB5NTqb91Ksw4th4ZdxiXEGy7F7WiCCnaPRvm8H6Fn5548BmQjCsW1KLuMqXWtpj84JgShixworSzgiuhLc",
  "key15": "2wd4HMbiSNWqMYaFunuure4i2g86j1BHHeez1yMd5oY8y2h1L5ocFQHwq7ENq6X5SXDEDGR79XxgjEf1cF2B7qEM",
  "key16": "4ZGadJzsyuj5HkJXDbBFTzYReVNAqUCPamhcg8JV9CqGCLV8NrvZqgidbfXwYJQmQ5uSkpS9sLtpAeDjhkvZGFxt",
  "key17": "34RApXBTi45M1vcbGRKWsmpfNHAMymSrMivLk9oBM3nP7ZdX6u5X59FVHPwXcHaLtidz19oNjhcw8s1Rg1jPpUTv",
  "key18": "Tfr4HdeLpgPTT6mf4GJ5unXNtxDW3s8ArTdL94Z1ifYMc421uyZb2CWLsnqnBPaH8MaPyMJVr9jt6AiKgvXDTKT",
  "key19": "3eRQUeEG5b5VbPmVqEUB9VsascFufqfE64mg54SoNhTLSDmpasDaLc7tmxGeZj8GkTZYaFDPJnsaUrLr2AfVHWKy",
  "key20": "2PS1H7qSrK54qzWFAWVhNnCqTVM37KifChgZYTYnAb294SHFm6yVzhnTxXHGFNVLCZ8HqC1yFdPaCUL7yMdJgtpt",
  "key21": "2q8rty1XPHr5ognpUUQqkrN37tiqQH9vMtTSJo9PxjKZwucqc4Mt7iNpH1HewoZpnFvMPPRYUZf7RowuwSbHB2b",
  "key22": "5yR7CYnhZp8ujpQVf7dixx4kzg6AhXvNUGkvqjHKUoTFHTaebZJv73o9EJsyXWo47dxZqUMG52X9hG7SrBjvAXE8",
  "key23": "2iv2jNag7aCD6XRma1Q63cKeBnMQXrg8TiigZ4DnWnArmeieSNRUcn2UDhztH4bcbJzDS5T2TDLVYwjMSZqGJvav",
  "key24": "5pctry7NnWGkGrqWAYzAo7rFnZMRYFzFQhLvRyPbJjixdT8poZ7jGxwqkNzUsb2d9xEXnYAHdFBf31uFSVr3zBri",
  "key25": "5iXhfZjEdeZX4LHoeHx3Q5bsAXo76sYBRpExVoA8GR5yUkBLE6eA1TF3NVUJ7SA7rH6Br8dYXtNN26zEuV3fQG8X",
  "key26": "5xmeNbEXUrJXYEs6ZEXUa3NuZ11DVFa2kVyxjNapxBxUDSwYyYQB5jV9vzeAAxKkdTtyqeiGQKbRzQGnL6qghTjD",
  "key27": "5j6iuBH9EwLWhnAzXsZnBs79FfhSrMqnaJQw76PTxjJEVihuC6rtZ9UvgCgQJCiC55Y5dnwidMLJqfvD7c2yA2W7",
  "key28": "642yAU9G2iC5B8a6Ue4ydvsUH9M6MwCuGxWJjhDXqFzLK1NRCxDgN4g3B2kg7fVSvV41b67Z14CHCzEvMmJxuYfg",
  "key29": "3Lk6FW67PWXNEV9oMDKshCMjmzrpmwiYsTpnzPtk1UHae3njYuRYr32xZb6qRyzm8Q6F23jUFNDAsMDmcSc1xBqn",
  "key30": "5sSSWLg3cBvUsAEXz2RHBsecZDZteGP7KmoU23u7xsv5qtjgtDJzpMdwU5GZCPTsKWpfb4EKDTxv4L5Jmr6v562C",
  "key31": "47BXPoTU4UJnn5ny4MsLuyg8Y14FCcWPtLgNbWeKpy89PfBei7DEXKZP9QRB3C5sJ7CBnPCYvCQQxZYt3K5uEMUq",
  "key32": "4tVLCoxJHDzXZDwAreUUGoKyL1iMQwhkVfRigufeuKLSDQLnKFP7RfsiKSBS3vkcBXQde4VPCsHfFJNdR465DLjf",
  "key33": "49Vhi6X7ZGHFjZQRjP6YUH3svZoKWo5wj1XAQHJpQBr5mcMLezwtnufoNSKwtkV3BnYjc9n1K49vdSBz8y1HreFE",
  "key34": "3BFnqoYPHJNN4NgdrPKDhbamuxhJrVArUuW1NNoHdRgjqC7Q5wmrKCP7kmwCsSrMgeh65k5bWnhDp5YohHP5UCkp",
  "key35": "pQxbHgqRrbqvqvY6pzYoV7sBkYaQ2cVHZVSjwR3sym3MKaEX9JpDoT3T2vVLiSVBoA9WsC5bYSKDi5HizYRVnht",
  "key36": "3HA8uLY1d1GRkN2Hf2dVTvXkdcqw9w3iX8MLTPMy9uAmx4EkkL75rvpd2rwU9ijEgmj8s5FV5huVbVrpvNxZCPzc",
  "key37": "VkS8xCDoMcaTmUBYdhqiZqy6c9ZpsNiXjqxKuZC1cSSZMeutWFh8H9tqRKcHC5HKTxeAmCMLctt9FHr9NN1fFtf",
  "key38": "unNg8y5mVweEj5LfEzgQSyuPdH5phMic4Um5iY4E85GdNudq3kH9rppeQSJjLVFRCV7ABfiKSZZgmvp7byKnQf1",
  "key39": "4zjRtPUGvwgiTA8fTuUrWZho1bhmWbEo64w2yDW3UhQzV94Jw9yWNmFCwAYqqdxZ166P3C7vn1u3n2CKv3gc5VML",
  "key40": "2v51w4gU11bV6Fpfd374xypqzAiMUFxE9BvvNECBDBZwkKyQ6jMw4vgPVWNUtpGv2sQcbzNmKBbJVAy5NLkoZoUd",
  "key41": "65fGJtpSXMtAQgRC2ekypBCkZZWWHrUEk4Q8TfyEgUCmWN875dNEphFJ7V8dJKd5XNHMBT8myuFrZ647opCthLAr"
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
