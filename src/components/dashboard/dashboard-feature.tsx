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
    "5uotYEB59KH665vU4PBCBoEZ1P3DUgmgprPD2nSvyofZJJxuHf2ScsHTdjwxm36cCqAd3344faoCkC7hRGHjA6WT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SNSLxQiCNDwzms7343qYWtJSbBeoV4JUWu3nBLEs4pbKNmtnqEFX4Nbz3FEcRhqetjyG7zz6gMS8doWXbPmSuJW",
  "key1": "44uhQacDWsBJEfDaBADuKrX8u6uUut7unsJGaCYra5WY2FQDPAwMA5UNc3kkGeTQp8PPYwBSVcadrdPFVdSA3wiP",
  "key2": "2u5oFPQUESBpyQnuMgaRf3dk4zM7w6J1LpFdBtuiRjNr1CdwdKT8cVYqfRWhSaPNDe7NX2RRDDeH5T25yqungjqK",
  "key3": "2ZG2bu8MsjmzxRwveHgBLLcD5e59VWxUvELTzC1qtRr9UxXPNpWppk73TyR6JDdjYcFfmnyTGkHRgB7imxFbQh55",
  "key4": "4yZ7SVzWy4YksbNkAi7ekfBPop4JKTtBoBeaEfWu2rMqsZVWrFrczB3cH6hYLMtDcbRzyRYmH1GAmbBjwQCo3MnR",
  "key5": "NoiBVe6hv3tkkLq4hsDtioYjqKgK49XvQDN1se4XDR5GivgxxRiN17bx5SxbwLPmdV3kahq93Ve1ucGgugf8jfi",
  "key6": "2YoHoRceiu4SkCv4wTbP5VDjeVkR1B39YpJeJmrPurz9iAMPk7C9X6NBCVALwgwFDjvb2D6niaFp6h7qakgS7jpA",
  "key7": "5Ztzw5cvZzYKRHazgDNEfhSWsdrmXJ5TSSJcu7TZq399MSD3papfrjqUP64M4pvrVDRNQ8eEUFuNWkLLiNnCLeii",
  "key8": "5P1jW3tkc14eow7wUqt5c7FUVrxd1SrgdWHzjvSmAdvZQXFWwCm1oUHwqumdiagAnoPey7U61v11PeEngU1G7HRg",
  "key9": "5nJrdqvkzKU8i1EwhvaWWNeFXzbrv2rJYu87B9zRFFSdA7D1mwUkjz7nHMoCPxqp5gSZb16DW1UwhQF5SZcSCPYY",
  "key10": "36nxwGoeWZP5wYVwbemkaEo2Na5CUKtWgKrcq7WYq4f4qrMN5ASPr2MQcP86nd8y7u8SKf4yvgs3EwSmGrPjV7Qn",
  "key11": "4nGADCKfUg5g9kjisoGNkp3Ycxy8minL8v2kVWhi3a8rzXUgy6FoUVsMnB9wJ5ATvs48WRU7dZvuBCigKGWemUrW",
  "key12": "5isQmhhzxbKyUbLN9Eqrz5sznLkGFLLv8FbKDpunW8VzKSJKgaS6dzoAp5k926ro7tgak8jsPgaiQrBN7PehXc8U",
  "key13": "fgqmEX9xDkTTZVbuQgyqsBBjFdwBHoYAx2aDn8pAqLxeyVdesDr4NeDaWGn5sU9G19SDmmdxu5NU2Vdbt1cBaUQ",
  "key14": "cgvtsqpdxHr7fAUStB7dogi7L8H4vDJVu7quudEhxqfJ8Q842gHQk3G9Q7MRjTnABbbMUNSRR9UZdFNKKVx8gvZ",
  "key15": "22gCyu3ykeFfa7nmv4aMFiJ6obQwTJEndtSJMzkDuY2k5gzQY8j4TZKfCuqzQnw8ftNo45D7sCd5LgyqP6MD8m3m",
  "key16": "5yUY1JdVyj14EM8pBrkZAVUSWunPLUeeJvACeGH553MXUiKTcp2NibngZamWB2AV6q7QUCBQU2WPjLYd5bHeknYr",
  "key17": "2biXax5CAonJHVgD3jCR26VvJ41nEDakNbxRfzm2BppvzP1nD2Q2qWGMUgEWdvUnK2BXULpbdrsKZ5UyEzPsew6u",
  "key18": "QFAoVnp4WckHAdkExf6Jnm2CJedAT1qQ1oc4mwCDsAMC4sMAjE5aDzqJARPcRMFtHLJWMs3f6GYavwoXeoLkkj3",
  "key19": "2jeaoNfTPjGyVipp8opJFy2PfCDgZCuCdhU3sdSWA2nbBCBqdmeVVaNtopqqVMPjR1zW8t3SvhtnqKbAqSLxFduG",
  "key20": "5waFPZR8Nr9nLpmfEKkLQAVTf4xZHPcEMYmTWpTHQHxC97fBwtTvfGVR2J9zLRbzdW6nQpDBdLhmWmahYWCDJwji",
  "key21": "5B1JBgqvEvkuT29yz2mzVChZJFTCyGXW7VfBX11HqrDQQaamdztCbpvXCrs29sawfxwutoj1ou55Wa5NcgjgnRPZ",
  "key22": "5xPFuuZERTBTHZjo6gnaZrUesMCBBM2DpbZj1RTbFrUKs9EE5H1gwMB46YcqYn1PKchZyyZ6TkAkwE5UhaP9buB1",
  "key23": "4DSctAbPiTTdLajxbHaiJVKrTnGdhGsFUGP4yVzg4YEoYZPxqeLwoDb7aHUXBEZeFR7tLmmVsZGKmTh3gzLCtNrW",
  "key24": "58kWcDfJk9SZmGUATErJZ1LqUqy8Yku5kBkNW3yBojZMrGN3DVvdYagouXcy5icc5RVeErmXjw7dLT1LaQ2F6seM",
  "key25": "76JaQ2rLZRdgj6PG3HTxFS8PYTACKd3DV1UXCU4NoQLTCXRNtRVXcJYaWQbdGuopcnNT4a2Vtm8rpEbWHT3BxBb",
  "key26": "21NCynqksTPBfSrgJ5rCgnEirh25E85LcJjjQk5mS2vLVvcdBv28ZvBY3Lvq2uV7gwoxvoQFRQYLJ7tFk6hg4SkS",
  "key27": "2BRyPtn8ZM72wxYR5CWGrxJYYAcoyMy2DBNWFD7uCbzgRbBbY2UaS6MR8AuZsw3KndqJ8cc2frsvPcd7Mzeydjgt",
  "key28": "5dzgJBsaYg5dcdxC1pELSEpxPYsqo6rseiFeXQVa3d96iE4QRat4uBCEdA7n5TQvwxY6nDFqmZ5r19ai72LTaty6",
  "key29": "4Cz1cAGCFScgxpuSGniCtS5Ux1og1XBdKAuXKrkVwqW235yWRXUN2dj5TW6t7FNZ7RMNmAgEHxpLzaqhbpcezX4f",
  "key30": "65JwPmFcANRM8BahCBkRNotdsebQ5ggJC2Fedap6wTnNpUuE7nQ6EyQVqYMpzzAB8uZXCwvvXGFzDZHVnmUrzWty",
  "key31": "kbP3rpASnTdUtQo7ffNBPfqvw74pQVkpqNi6f5bCKhZZszcXuNdW8x65DPQEmuuSaJ4N6Ps6BxQfEom8u4woG5S",
  "key32": "5PhSwxKmk71JSKPE9UxGmbiof4q78234SWZkceVw3ab6yjNwgkiYRoZD3bn15oPrv554CtJJzF6pPQhbLUru3s7B"
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
