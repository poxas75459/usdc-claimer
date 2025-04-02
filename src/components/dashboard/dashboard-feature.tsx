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
    "5RV3WGTZLP9zTBaufNYiLY6tcx95TRZ76imWSqegzJ7RaxRatqvNCWggHn4oxUvW7n6nyFFm1NCHBjhJ7buzYEzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35pwLNSzAncq9XX9tZjgdxTwkWwFYy45txLDfEuo63Aprc5nGcbwwk3UrAh1ARsBs3fQG5UAcwF5eCBVkxojrCmt",
  "key1": "2iQdCfs53fez68bpFyHvmgZ4TGB9b9LjpAJADN4iFsVfSghzQLJNYTf7sTFTZmF4uCXSoYJCJyifvZbq95G47TTP",
  "key2": "3jZkWUVcVK865YyaEZCnTyoLPYJWaui92x2DNty4y5gNGmYGE84o8tBt5kS4YmhZeo4t7wnJN5iwDnwmPRiySmWj",
  "key3": "4gqTLLtJYTFxGis2apaKzK2uU7Uky9JehteBQgBKb1X7whghnqgz8PX5aPV1m9Q7VHev1jbdksQ9b72Se61auz3a",
  "key4": "4PQwwX4civHiSA7pUNcdPHn7WLxeaTx7kGWaYpKNLXRaGHrkAxdoi1UgbAYSAtTFBeg4f8bkTgChz8zX1NymEdwL",
  "key5": "4dPxwpqYANCvdt4oMqjLEtChH4ott4762vEzy1pjqPgURD3FbaZ7xeVVx1vLJhunjzXmXVcTpjUvEHiVM7wVSW9p",
  "key6": "5Are8zpVZ6W9U8oWk9T979CVYTQg7W5a1oo3EBA9vv3R5ujC4Gunz1Z2jSSbXKK3ZBBqdGHhuJaRGUia6LTjgou9",
  "key7": "4ezaNGxn7ExJfxVwdBmw3hUABMwwGph7jhm29Vpihgbgy5G9a9uZ1P9iqyrNrTDrzNH5jwd515WCYQfGZ8TBYwp8",
  "key8": "3KCgGMfgZcBvgXrqW7Kp7Y7THnVcnV38BCY7hTCbqMxpod1Pt4vfGVy1CpXnMHPxWo98V9HSdKSSnjGLeCG1Uwva",
  "key9": "5opJVj891GpKcnvtJnQBHAFouELGzx2yrKeMe8mE66pmruRHVGVdjdvU4V2DAzY7K5zCta9Pu9p543qk8GVFNTAC",
  "key10": "5sAuZ7dp7WVT278CXtoLfvmxSQSQBDjRpzE6yPFSWMpvdxK3Az55x4MpCEGjDb6DKuR6cd1bFJxztJdmQ3vwgrFF",
  "key11": "4dnGniexjUE3MpyuP5z2CtvT5SFH4tr28dwPiD7e4ZXYhrgR5J1YN9XGmGcpx7WDVvosKrq8t5W4d52oNLLGYeYz",
  "key12": "DxhfShie9FpvHJojtWAhrDC4nhGdhbr1HjHLogKzXBCCAVQ7uUw57KfLheybMU1ayXEyihqpWYspQL4Wvh7oaR4",
  "key13": "cFCGLDBxrj6JbNzZ4KXPM7z9t3bRwD8pEtyecFobBFnrSmNbYx16cp4AGkZ4fugSfe68sdh5VNco4Hjr3nCgPNp",
  "key14": "5cjLXxd8xuSX6Zy3oSssgAwgACPaqLS6L6yM4X5XPt5o6f2dGRuK89D6dTzi98cevZTbD8YKB7VPqD6VhsgFpMR6",
  "key15": "3656BXFUdmhWizQdoa3YJJ1KB2XNVSojh2LttJuBZoX6fxGk1cFdQZqxEqRarzBBa7BLdTq8njSCEVaWLAtBSye8",
  "key16": "4ELKTgJ8vXnRgRQqfYLvrnaH7N7PA6aizmn5oR8g1bDfAYWqPDMUuhngZ9P9eJwPWvgXixNcuXbZWTuNghUFxkqg",
  "key17": "3A5ENAYEJNU3QDnu7ziDa4c2Whqht8HWWaZZVvu7uURbrLDsrTo2p9XoSwdXCCe66LSv5NsyWZGziDHv5QDCDMzB",
  "key18": "3i9Zs33Wrs7KL3idY4eKDShEAwfDWGSqcjRbBc65nRtfCSpDQPvNC8PCCwfvUrWc3WNSKQAdV1rbNzT7fQXzofNK",
  "key19": "gkDQBVLKWSsHtTCv3d2KPUpXz3DKvYo8Y8hVQVLXMgkewn7UgwU4798N8cXLx2p17JW72WepfNPQ8HzP6Q1qEXV",
  "key20": "45HJ4hJJFQw88aqYr5CPea86uwzVbEsQ1T5iCuCF5KJFa9enoNZrcevRWLV4EqeR5r8wKkQY4J2wiLUWBs3ZHpwm",
  "key21": "2yaGWwE7njjWVJ9ijLVAE3xyxDyDZvXmNDiM2TNBVojdvRePbVdvTRbmKMRNZe7noEzbiotqSfMuJGzGeeEN6Cf",
  "key22": "5jeoGGyELX8wX3P6GygZdVs1dhdks4WastudEdrEpDP1dLgjo2QriRsYakUwFBPjuoudptuYWaK53LEv2HT138KL",
  "key23": "34SnPprMcnwX65kQoB4nDEUq2BApqkE1EWa8D5D5dKEwpbbuHuKcbtfQCtj9Bmr6q943UdHLqRYjtuBJ7BT2rdAh",
  "key24": "3fecH4UXvjhRq6qhQokcuMCeZtQKDT9XsgR52njTUmAT8AgnZopADbgaMcfTNKf6hmhZATqt7GLLh2g4LAc5JVsH",
  "key25": "2TwdrGjL66z7xxZLYHdVpatRiys4LmDPe6tbdRGa8f38DtC5aFcLBjgpRcWqauLF18AQ4mYZsRBqVX2eyTehSoF5",
  "key26": "25S4W4wDTCUX6EoWPM6J1LXHYh3TUgZG5jEqwMKf1cxozw4QJk4n61uQ5WXd5aUzYsLZVMjYkbHkzhib4mhnSNdp",
  "key27": "3KzyHYwBmJQvSbuXja7yc8ZoLfozfAaPpGpaxnLWCCfssxWYk73f9G2X8nme3NKXSp32tXmK4WWCAvYFkVS8n6Px",
  "key28": "3wsfFZuxzVTd9JNoGQMTdnqq2zr4tcy5RrFYBd8WovL2QbSzQBYbvXzxMTxero7YrZzNmW99SkCkxw5N9TgMFra9",
  "key29": "2WgFc7Hiief1PJiQcNLRcgK89gehyw2q96bWBGYaBZptEb7F7rU2ETqiBx5cbJjzgM1rwbLRy6nZcBuvLJeWVYZC",
  "key30": "4y77aEMxrUB7MYQxHvRErNU7T3ZyicDJSzev935ZGopmm2NUyy5vauPWAjwEYjTkQsDN528PyTASCu1RjacxM79Z",
  "key31": "mapTUWGyYz9ee2yRBeK28kyMuQXVoPmTtW1cBZpQBXsKRgXG3oHoRkprbi7Gj96yCRfVMagmeh1P6K4mNrXqqpk",
  "key32": "4E6odjDjpXAi86tugNx8FpRcdRKzPVQJmRaDoTMo7t3DMdu9FZbQyShe8hyX1Hn1FAGVhfaQFkMCC9bHzmcvrjHT",
  "key33": "Fg93ju2AEggacszS8tgrZAEkUnPbBWUYyvEL5ufd9smHYsutzUbVbpUxKFBP5mnMqNBvwzkjhqNwkFCMGFZTAC8",
  "key34": "3GNEyHUaZ4Fxn4KywcCQFPYG1Znukk62HUkZrjMnXWp1Bon68xhZRCUAJHaVvg88hB6QrJMG2xpraAoqzBd9HTw1",
  "key35": "4DshUZgYa7n6wq2TALKc9bfohh2tB2UKjofL7HaUAzVthuWXzUWn89R4E8TY6UaFuUZiNWqmjXmc8teskFFuDEwS",
  "key36": "36YTKLDBXnLs7fqryfD2E9CGrXYmpN5HEXT3RZyacUaWTuqxmUPn86JeFyNeiSxNXNtVFJZQ45szawfQzkD8GqmQ",
  "key37": "4tiV4nxX42Bnf2Ejmv1tbQE59ayZNNjomoxN5Ezo469fn9YZabrAi6fqVMWE53m6vgGUoV6jm1umJAe3duLomr4T",
  "key38": "3BpSsAiBKgJLM67f5sfvropMfXFjEsVZUi72mKPkcT1ienZL6pTygKUG8WXxbzayZcqFKuYjxYLbRKmM2pbhRoR4",
  "key39": "4vjB4jMTCPuvpK2ZE5yaxkK2zW3oduZ6rYYMn1sohRMPgeUaiF5bGwgfL98Vjdqft58VTRSxXFpbuDPQcUMCFH13",
  "key40": "3qMomaM1uxS23AWaEeW1TEDCxQSuUNWTeRpiG3oWP6C8SY8jCfj18QqbWAcDsFHrBNqSi1ny1Xc4rBLfd9PbhtMv",
  "key41": "S62zoNmrsc9xa7wKSirY5b2L7aNkW1Za4o6VaF72jQHk5QEk6dmUC9qLCNSmB7TJGcEu1iyHdMTGQ9vT5k236dx",
  "key42": "RcfhozvzKrBJ5Cy8c3LdPmLBsgjWYYcisnuyXaNLWzYEogB31hihwCKizGZLyDK37Cbg7jC8y4iB5oiM2bC2JaH",
  "key43": "4LnVh7Lb5AjGU4exzEk8nhoJj97QKQkzLhq7G4fM2XCBohv29kibv3w8U9rqDEHCqBECGstLXNL75rdzFdVxS7i4",
  "key44": "5VGP7rTS1WnW9gbF1pJWx5k9qfKZPfHBEuSLZ69PSMPVC5QyqAXtmJQWWGWWK9Djd6GEJY3nBk1vibdXT3QHjAdX",
  "key45": "48kX2mSMQQT6xKdU8NVsjkGXW8PuWGrpen7aN12A4LR4qjsdhBUttmKGrrSLszwcGZJPPPdrTg3z6H1CKRJSdLCN",
  "key46": "Fa5dwPAXfJprdAvmx4wZhX5GB87yJER76ND1MMurWfEMNxn6axcLS1ywkXYhxHNxD7zMXrHqGELBknWAiebpt1Z",
  "key47": "2HXCnXsGoHgmpjfSD9yvYYwvJviw2mNxwZyyAgdsKQpcy5eeZeiW8eiY9xcJ6FkLZeW3TSSGHWeDiUhsQeewTyLS"
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
