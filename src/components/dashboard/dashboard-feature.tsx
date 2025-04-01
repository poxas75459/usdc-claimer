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
    "3tiQC8orjeTanFAxfhLygrF36ehcaZ1sSCFi25EPd6paRaB1sAGAs4AwfkVUqMraEEjcLSnGsh2N4VHvdMk1nExu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1VJzSzgQEJX1AYhW92no3jayPPGPRjWkWwzqi3gLQRvwoSHyZqjxJVTwqrJ3o31w8U2jM3M7GXLnyXahanotuD",
  "key1": "rW5Aiyu8GDoPGZvgB8DKVbBTcFd9rAfr2AAeSqWkm2s9t4FLgFSPeWXRb8753YjRvwGfitQmDQqRwaJ2bJj2aHT",
  "key2": "2U2NZgce4TgGScyEYmjURyMhSPswdm2SaeaBropSFa4WFy4RQhEeMDEGZ6SWrSqtMU7BGhBTmdxFUFWHnT9RxPa4",
  "key3": "qwt2iEcw4oKeQCasmZKaCcc1E7sM6Qjy7yKAFDKT6wcfN1fi7RQ6TcN4JDSaQ1N7vDu2moFwxFRvFDRWAMnQe4g",
  "key4": "29UeLFCTt8j6fvvgXk6vUCFwnQAvxhCTPPh6gpkx9F67zafkPc6bXnb4R6Qwxp7GMs8iCXm6LLgZ8X9KTQo2UYz8",
  "key5": "4kSTGvJZZC9HtEaL8H5YTW7B4f3X3KTWPNpcBSagzuWLaDuFSadUNnabejhkFgHUAVdPxc8ShzpG1DoPyiYVcHEN",
  "key6": "WxLRacLzm7aC6128drobnxYhsZ5PyiHQwXBq4h4UqryTFMGxRerZQQRHqkPhUX4AyVP2yEghsfWzfMR6uV8V82U",
  "key7": "4Ta47Ya9N53ehsRnb7sQ2fohMTvecB7efBtPzXrf9uTQuygMjnQCxkFwJGXkTqpd9Tt21xYKjm41xLHfDmJYvwMS",
  "key8": "5YrKfCkAjkkeUEqcqC7N3C6LU2faDys4dLvzSKp9phezxRHY9dM2xUR32c97DpxWDmSJSRyX6qui8awMbUmCwi1A",
  "key9": "8tP6h6PU78cM2b5Cv95Fp31DrdihT1YSHxPKjbw8fR2b2p5adVbDMHunmG6cLHoaCFpU7sdBFeckVsU71nht7fu",
  "key10": "65y7j9MVztZSRGJWbjgUKCB5Wx1vDAyLkqMpXGcJj4S1WuBfsmGxPJ7uG9aUddqHVrLJsXoarDszcFcPiXC2Uxcw",
  "key11": "JUXDEu7wvCw6XrbK6v3cxR16nzwKLw47cnhYoK3XZw5D3aD991JjpduWF46VpMtiRbfDi5V52iR2fQmjtcCMs7p",
  "key12": "uEqoqNh5TcL8zkgExSeDpZREoK5ka6VzTW8Vy7etrvSWq1tcdt3nSRJzZfVjyDF2n32GAK6852EoFiay69KWsRa",
  "key13": "5q3Ed8HxtddzVb9qhJcVaKkNmVGSBXotBMFGMEjrJggb4rvUWcobZMDcieWPbbf5bSkziwXN2cq7Nz5uwx2geaqe",
  "key14": "2XSscJasc4BBmvYWzwYM8TQ1wFUqYt6QheRMf1KmBD2f1W79u6BJS5Pg5E2uAvcxHRfcDANErfye3QjW4BsLw8LD",
  "key15": "YtETtrVG3bztfnoFXEQuHxhQiaYFD7fUFfYBaUGsuDs7GU8C3vQj5nU2Ej3RAi2faUEbGCfm9YjAp7nsxHT2QgN",
  "key16": "5w4yrwZoBJ64wse4rxDDWoH248DKFLGU1fs6dvN7Si3MyTz6nKzxEfhATAJnLJLwtVLGT2EsVFi8WoygroL9oU7j",
  "key17": "4MFbDDvsWeBJrQXtrobBhP2XegQ7JuuAKWKQ2vJCdUkkFcJcsrJk9witj1Goo6vaazsEtuE6XrrzbEpZoNMnZCJ3",
  "key18": "2DdCCrr3VxrVmZeTVR7J4FDwTv55kg62RENvBNtDmYoqKsUPPxtz3gV55xtCY8p7bUEocsq7PS8ckXCRYhi9gFDz",
  "key19": "dVPzAvhmGhuN5MtH1VguD6DCARJ6du2X1CpJcDFf4ivyvPcPLMqhWsjEtfckDKew215cyAyt9YMKjEcxSZQsWDa",
  "key20": "swHBaUaLwk1311LuhCHoLeE9PurKxRjXNYwsyUu13v7fwFCuYm7zBYVG7UwvdnwGxRMuYA8a1trLoK3qy5nsHcL",
  "key21": "2tG3bSuwwWXwmJDZjPqCMHk3Ane1Umx1C1fUTMoRXmeMw9FEqWBHaW3qhwS9ELHsENw1Cxe2gVvX7Q83xHvJAJkk",
  "key22": "kPTC6mqquRuGEVMWjPUeigiqaFKgv6HAuHqhB1VdWqc2KL4acQGeaYe44SdPCLTYF8MyPMuZ66tvRrkBXMzCAv2",
  "key23": "4NjXTMSmJnFfjYPhqL32tiuAyNmc7b9RDpLmsdix7pxaw9H8MpJdWSwYaactLLBnVtNYfSjNrVeDkp5JGQDL4QGX",
  "key24": "5og5ni193Vh3vGecSmCd4C6fWNEPfphzuEv7kGDvcoypRWogNNp64JBa294eHh65WKPMPTDv8SRczTDjRHoZrRME",
  "key25": "5brEtzeQNY8SqLQa9LeV3VFvze7Y9My7CurvEH4H6rc5f1SjyKsCjAnHKXnGGznAL3dX6cNKGZZXdZq1s9QnxJyf",
  "key26": "59P4y6MX6QKUgBidzFZGCnuSJVF2RK9KSFw7SAb7YckNLFoGCyUeitWAG8HzDguFcdyDDUod8ogwvmwpwwbTz5zd",
  "key27": "5zb9RMRvYLbqFoYr1GaE9mDhqN1UyaYgomKaWdHvK5KWnT2t5G5jzbi83gVDJAw7aSJLLTJSxXnVMpcBEiNk2Yjv",
  "key28": "56GjpW4qftyCwdDNxTFUfqDNWCrEKZZTFH4ATn7gZgCrmeGPnSHehXZzHnBK6BFd1oUgJTcrdj5R9EXfmXWPekup",
  "key29": "2pnLJCywp4VFnFPK4GqLUbQGZ2TMuWUpLGsK8NBHb3RoCmxgAYQZxES8x5fdgXDCXFEEL3ayU3QyJDAU4NomqCZx",
  "key30": "3RGZaPNg8ywEuKxSjiwHRcnEYsoaWvf47KdnWzSNdLsBvAV7ZG6ADcVMqWwi3Je6vWRV9TtDdVHot4bfyhvzRKU1",
  "key31": "2G9jH96Pz3WUoSLPPDG9d7c8ahk6u3QBzeNh578CjLZTZiLRT5hNbYJnyoYNbqyAamYos3Exu4Sp8szL1FTAASWa",
  "key32": "5QMdKLcvVEgnTvn8nLb8vfVu79H3ohNKXDhcNva1UdiCQUJc3WFf2qF1ZtFKAFHkrJumuun7GntZQrcYjV7FrUQS"
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
