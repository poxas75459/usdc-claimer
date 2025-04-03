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
    "5UyfRpKKRAzw4HNr7DV8W1DC6K6htfu18fCkyr73bJDUUEiE3RFUjbCPxsdmztsCsHKoL73Jbc3WktF9rj6ZpVHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tgPpE7NdduXUeEVsfKo9akxJpWTkC3aHYY7QSb6wwZV2ChTEdepp2GNvsTZkk3fEQW3GjGpXjoF1wEwVPUnPAKm",
  "key1": "4fzGRkjce1Xe7KamjYbiX66GzhixfekBiJ5AfhScmjRxvNUrmtU2pyLcz7azbjFsiZX6cJmN9jCiuzgV9cg1j9EQ",
  "key2": "4e84o8T5H6cqxEMHmCH7wVCNw5wFTCzg9ejuZr7kebCDawYNcReDjSoqkfPrb8M94QskmsjD9KJ4CGREXVJELmdJ",
  "key3": "5cSHNytc1q7Y9bzMeQSkJxQ1Hs2RijLzi9xjuqmmUqSxefcxY9NjED6LamfyMHJZLQPqaoCVmxNs44jwKPLYf433",
  "key4": "3eCRbgkbJKB3jhnxB1CvduFy6T4LjCQnscCfbrB2Ted4MBuMPSEbUe7VmCfncAKpxQkdjruBi79ARXPX55umQbMD",
  "key5": "4pXv9fwgShn2AKAwj2KiozgLttCezb7CsTjBC2CtqGxNQRTsH7q87dqcREErVkmUiDUaoFbk6PVpdknfieUpF5rs",
  "key6": "4ZpKVbKLqFiqExEmPQ2PsGpEc8ZUuyofYA9eEvSuV34xryvMr7J7pPF8ThpuD9ukmXMgbGyenbuWuPN9jFqjatCY",
  "key7": "2GF6cBNBhv7MLuja354g2u19aSsx2vBA1jS7RHJw86PWaRFmakeHS39WUM2TsbQ4XShnGcDnpkS9gJzhVDFJupui",
  "key8": "2BT6XGbQheLKFhzhdLEC2PKZ6nfxnDbNYxLEzxLqwkHeho16DrtJxQQ5ni5x3ULrsRhtwE7FMZWvWRsoT3Ak2kLg",
  "key9": "2geawK4etmrxd1UwCNMFEME49JBywTQtTGXB2f2fR1khrovSWirFraeSoxQ5kfGHrffCteCoDxzYSYvTEXLNgt8K",
  "key10": "5nd43ufPcVnSJEw7GmNWzqri5WU39SAfHLG8pBRvcAr9VQ78CDkQqW854yjqKoTDxFsMUDMSPaxTRDbHMNQUtGB8",
  "key11": "4pa5wW3xE93VMXmgAWYmCrtGCvo5jtYaruUcx39wfo4dE1EC8Z8QiEfjaKK6GxsJG6sFmmxm68AHENgR6oD6ULxc",
  "key12": "2GMTAXGeEQqBTDpQkmtZvv4eNfw3oDrnPRjTbhXpBLdhdwAq3h6T8WdDqjStiMfTDqwXGt1hwrMzDcpy11kgGxpM",
  "key13": "5EqtnXhZErm67BCoC8oLLhsd9p55YWVy4fUKjq6pNtGVxarf26joBTY6z5pyLEbaWwMyGRDNfrp4fqAC4Phuw5RZ",
  "key14": "3ypXJWrUUAiBS8giBBELjh1MD2DZqD363L4TT8t7NoTFJhNErpFk7cJjqeeiAk8fCUDf1ei9Xy7SPuhaaw9GVteN",
  "key15": "2jXucYrY8TyYkPzMtFs5ifzgXSpA2Q1yBVz7tY2nyZtnv1xe58EGyXEe1Yq2w62zNF48hzLC4WWKaMue52Q62ANG",
  "key16": "5aFhPqccvthVkTFZfwS8wq2Fuc7hJJxDofFSQjC71hJUf9mDQXoAQGfUMWDAfys1hCWAxreRfWBeBRk5n5xjriKJ",
  "key17": "YayQbWCqmv7gMFG8WSHRYTPYnSFX6gVTj7Xady7t7LvAYzAFaZ5B8SxttSSqVWBAuKNQ9hPfuoTtNLN5bUZLmcT",
  "key18": "4FscHsqiVBMUVboShVYLhqtp4w6f4J5uJ2Hf5XiNX6H57GwSQRHxPWTn6pgL4qMXNhLGyur4NTbCDhdqHUqNUsHF",
  "key19": "2JZnLnKkmcjZKxSZzVAbEntzJGQC3Sc8y9EV5i2SWJovHVFqNzLfhFTfP9n4i7ML4Zr2DDuxzxacG2BWepLgDkzH",
  "key20": "28piXuWRH1bbADBEHdqTXeFy3th25TQA8MkvSueiX9vnkxNrwsWNt55oeiKWYTJQHiqYFetaG2rUXax3qxgrcutj",
  "key21": "4U9w3yr8Ah7AjmKp6Mky8S4fBLFfM5t157XZHrNS8YvoXPLweHyF3J39Lx6k89WshkTQB33NtvMFr4NkeRw9cRDV",
  "key22": "avDcn7xx2rNFEYBkipbxtXNkGox125BYutgiy66NayTCCV1uVgVN2KZz5gSyp8X6WJoveDc2ydEmyReqxHRNG2w",
  "key23": "3CxVh68WvZrrc4XHfo5zxXvwTxzTk9iyN5Y7eBCvHLiRxtokosoQnJ1zr9Ek3KPyQwWdXmWqwWhTHPjd8iiKSDr4",
  "key24": "4t1XXXf6zjsgtp7YxmAxieYzXMQFpk29adAK63vEHyUfBNQ7oxLhJXMtF4ie5BTNeXVbyFD7htvCcE6GoiHFj9Jn",
  "key25": "3idLikXWN3Es1vW6o9JE9gUBqFT81UNzkT3jts36nCwwfqi7MP1Bk9Z3coFSPQkWb5tRssMnfkohZY9iXe8DYjnN",
  "key26": "3R9pe11QyjRLZtHNj5XGbcRwYRppLRgdaCat9ZtYPbDtLXvCiHi6fJLQYQWhfE9D96BWjcfsYY71H2g3Njg5CJBw",
  "key27": "XNUdE2nmjqHzd88WSeiX72qZcuQNHnkJb1CAZkbsZSgo95YzRQpdxKpTAbjwPDnVwZKSvn2ULJgFEB5sqzcUe8j",
  "key28": "5Up8zYcRkYTH7muctMjpEBTFdn7kE4FzVajensnYspTkiasVu3XMskiV6ZZgPJxGZSYKKSZnnsXFufYfSy4cdBMa",
  "key29": "5kPAJKWpqv9N1pi35ZZPvLUjb6aqW76njTJFiY2eCpA1V8EV9dcjFTbNCq4pUNYRKU7EveMZbgXKmMZkfPJvu1A1",
  "key30": "5fXAUqi9b6Gb2qjj9ihYQrMbhMeJVt7AMnyoYQWsz2FJsjP22YE9MZcstXBBNjaRH6CKq1M2vwghLfV46YesDeJi",
  "key31": "5mrEJpXiDePzpwVKRFp5uLpgdRajGKevsViD5GUbHtFfUWLtcUZDFzNAaLQiWCgn9TyxxKZBr9uvFB3iG1sPbC2c",
  "key32": "53duZhKBsG9woXD3ULUtttm6zt28ZzsrDbfDgXLADEzjQKxyHmeWRtFfzCzvszLsm4AYq87umRCnCccu9izuWt7E",
  "key33": "4VpWr9EdEVexpp77rSbkjDA9e4BUML6i4CNGcBLX1WkNShJFpgKKgERfhxc4AyJoKRaQCcPhnKz2M9dGAAQtakwy",
  "key34": "225exSBXjU1yr8PK7phwqGhuZSrkqAts5NJsw3RrqzJR7ch1XiWRz3BkeYLS2me3bdMg56dt9uDk7pkmDergRgwW",
  "key35": "Pwy9kmNfzvXUaLbomWr9YePhhJjnMBKteUtfqs3CfkmSXiz5yo9fJ1fc7Yi3Cge3zFRzoRK3TTQiyvzviNnFkUd",
  "key36": "2xmFYdVTECLeU3vyqNjVG3kZQxUBmkArRRr6hcy5DjimdKLPRtZKRMX9sBf8EnDQaMZz7PURPJE3XD4VK7CnNSe",
  "key37": "253ypBqs1GT3cR1YbXNEWZ9EqjX5f1taaXx7bcP1espbNFn9NobXK65hkXDzgyeZ8wqYy2x1tjvGhdE1rA9eKDa6",
  "key38": "5QX148nTnFFqF3GURf7RfMiEqpBpgMHuXW7yz8JKaZ7bCjXWsmgzFo1kqz4VTcPfASqWDw9ESxiEczxpVaAmzZsG",
  "key39": "M53DFZfsV6NgKhCnH5UbLtWSta6FkzqD2ELsg2E5PF3CcgWobFKsVYUSkf7uBPCDoaxK1v6SKnU9S3yooEUhwm1",
  "key40": "4kkF5RmJQdwfhnerLJgx8NJ8PZbRwxzR1xNrVm7Rx18GKnENxjUpUTGwAhcqvVKPwNTRbNfk8FX3NqczRKXg9PXj",
  "key41": "3tu8NQNVxxdWYM7iCKm2G6cSdzB6AUDb2h7VRjwmFogrp2Jd9kMwgyhthNxMneVXgwzi96YQRRCaH9cr1shSAAps",
  "key42": "5KFTWXopgpb6veAhUdzp4eKydBNKYUjxb3wcEksLq6tRV7pZ4JniosmE6YfUh9gzHY8a4Ay2NvEFDVAjkdgLNFhn"
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
