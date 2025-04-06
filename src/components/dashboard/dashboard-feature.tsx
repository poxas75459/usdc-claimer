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
    "8L8T28jp3KftnN6aF3d86ECjxVSvyeLcpoaRDowvWR9THcjEf2PfKPHHG5vmm2tKSTVjd4BEkbCP8MbD43gRh5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27z3rCfRV5ukJcTo9VCHfLRSWxDL7g7BcrT6Cor5BDygiCLF5G7E7HUsVoLQdPUEPJyMKDCZfZ32VcWs1JGA7yc4",
  "key1": "4Md8tH87JgJQFincxg5MwGoZ7WrErnDZfF9RWjS3Vz9RG1rpuZ85TcTQJeLFe1Yu16uTExmAJP5Cqdi8dA7BET3N",
  "key2": "35QkGwEH19ubFk5aZFAxAqNRW41sYiiPNxkuXyEi8ogVnJrfTZYi2bm4EVuVAXQYQH2SfH41p2fnPc3dro77DHQu",
  "key3": "3vX2CdduV9LikQvwaHGn7djxHoYWYQsPMkpKjDCaXX8pVACcjUyWQ3Td4HSE3eSN9pU7VsatoCK6DTnLiNr85h6K",
  "key4": "3a7ma92or9jv1zN3hutm6kgF1oPQQnxCKTqtNYKf8WTJGK97kjcayoJkLd6Sb3cxjg1QgnnhbZNihfo46Vfji3Qg",
  "key5": "2e51LCaTgSHKZFLzZxdGGBT2RFwzS7fffE2nQbwAML9CKrNuXwsE61MQEni5tZjb62kEnpF6Uy2HtMxTgxaWhzjr",
  "key6": "Mqrc6ZvAgmi7CdmYqntrBc7gmfY9wtgyHpa5wZPqPkNUDJzArwJsZKUjHk7M9x3whheqKG1ayiBv8bMUzisuunk",
  "key7": "5dEiiwVobtEyNC8ppfb3xVdTBGg26ednoUxDvxUvgxDuXXNXrnZhUjWa5JquQBzvCdtUbdDFUCEiRS4y7PpM9kDT",
  "key8": "AtBSmViWTf6vdfzsxvMgShyjTNTAkZ7AMN6KzVNEhm9zCuYJRecQWtPdgsMixBPK914SSheXF47EKK5JytDVMJC",
  "key9": "nrVsJnntCjWbXaFw7PRpZxkR6obwdKMu4wq8LCX2CuDeUgtw7c4xhBYSRSFgGtFLAoBV37FjEnkRMctgJpDXrJF",
  "key10": "4DExFvfFRUtA9KPoXmytQG1A6f2oreJEn9qUriZE2fFGY9eNvgJGwwzw199PEcYn6a1Ahr97YS1USWc5C9Hoyr8V",
  "key11": "5qhvxBx4me99hAJv5tbr7GPGFr1yqVh7A2r8uBFkMWUBesuAHNSyALBCCvPvm6N8SZkX18FfEaPqaM9hsCDp73sg",
  "key12": "5rS1zQPBDLjhFXsQ4V9rFuynQvAVcpDCG9tC4fiFo63GkCMjR7d4zs43g5bRWgqz2HpQiKR9qzDeCBDqcD8vN2pU",
  "key13": "3knZyP7sVQLb2Phiwhg3WKC6H6hVwvfhoFFeb43W4sDGAxwyUiHtUp34vFQSLZs9D5kfZpFi8zwxGPJGjDF9Uutp",
  "key14": "2oeQDaiZoQi5zK9LaoDibm4jHgkAGDRVhBZzSD7B3cpPt5KAGSdwr7cn3xcN9Jk7Pbi3hfduGYG6y4ihD37CV2dY",
  "key15": "3d1MvqT48XV29fM7tXapa82QWXvPDkkNcpo3wU6ExTPJhuQge9SkTE3vRxH6z6vwhtfeTWk6vHHzj25tnFiygNTd",
  "key16": "6A65ADK27Tnn9jsZyHAVirkUJJgMcu2UboBxyjVjpDpjD6oyPSnZERQKk6nxdN2LB5oThy5pytdp7HLK91VDLk7",
  "key17": "4JJ7jAQRSVKRUEnZvaBfDa2cMPrLvNJcXyLU78porMfFYq1j794ffZY1aLpqhpZutfuUwNTXLhEXMKFhgYXPEQXS",
  "key18": "4ub8KV7Gejk6MF8187tW3ivjjwsgiqjPqfGFQBvb2KK1tJmDQyyqmL6r8QUXioJhFijdGWPgxQgXAda3xukFb6pB",
  "key19": "2LsQZPNX8AKCMsSpZNaMCEagqa3ReNUTNsVy2MHmL7ngaj4xU667AJNvjLBDSpssMdCogwbv91NP65x3vqwZavEM",
  "key20": "3fndyy1kymasBeoJA4nF3oAQmTGfyHaNaeH7aPAcU5do3X7a1F7jyo2hGfks9Y3rMSshcMBaYzepGRKcD2HcS71M",
  "key21": "4f6GxNNYS2dWjzn2aggNXVapeWYCmkuzjieQroUtjUYvWGNnNQgeeDKowqekKrC5ZpXWkzTHAYM1tAsRCB2FBdx5",
  "key22": "5Y3L1zbkAS9n8KB5RrZE584pm7p7wwiQS4GXk6H1h4qJ28wZVvEUAaJN9XDKXXj5fjQWNoSfFFK143pd6rzZcyGK",
  "key23": "5YKq9a6RUcRpypQVJvnVLZXyFwK1vqvsbKDpFwQD8U1evTFeYuBuHAch9LvhunfwsWtfyBnbS97hVNBehVZBz2iZ",
  "key24": "5iRRx5hxRAa2iGSjvrkTogrG1ZcB5AS3pu41NiyNEUeFGMVELVeXQ6FGF4gjpzUhuUNQ3CkwDtPpmZkfP7QnC9WH",
  "key25": "hKTxSSZcZt8i5PwpsSoKEsMoCMYc1Bn3ci6MG5JzeyKQmejGqUcQTkp1MF8M4QKaBridE18Kfd58rdDviwjwUTv",
  "key26": "5EXNpqnXjHaWgWW4HhnYPZM1UzmVX6PUJeZ3FKepz4SYRAW2C46zpr6r84zPWpaRVs2wuVcG925HcPUsqmHC3nCH",
  "key27": "24WLyUuWqQ4evPeo3sxi4Kffc3pD4ssqXpj4pJ8DwPYzZvQinffaHKLigBuMp67rSVCoGu7GsaLyHYMaL2rGGT86",
  "key28": "2RzgXYqtbsqUjqAagtwWRaXMYqNTipvYSmQ5CqNixawAWBRkpwQgK4QTsoswKEkh7YTvGGPpnwKFxHw1CVNXag1g",
  "key29": "5V2mRzuUpKquCbzXZ9c27iMNTgZwUGcdmi9oTR5QkJ1VDBHqKs2x7MdqBPBhcvRbsKqyCSwSQFaWm3B83aDaVDMJ",
  "key30": "4XerwFMXN1kH7gkn9aDGbDJyCrw6krEeUTkLQ2txMqnFH61MgtwpFiXo6uvmKFSMN4hs5iJesgfSzNViy3scrmWQ"
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
