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
    "22YHg94wmgCYDZmQeiunB1THc2cBo3j1mfVCRQ2FbwASXf6UZrGx2yVXSiWYKwiS7mveTMJH4kbWzhMp7Qh16BDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPfzabWb3it8rPfkwhzxoCLEXwEXS78zgaTHuVeZp4J74iFqzFSCRjjayXLbPGw6fdv1xJFMmV1ZWCQzh6Y3Z8o",
  "key1": "63FAWungcrm4qKhhifSEAPYgBtiRaVJU1Z5dwAPE2Me1To9VdrkJVXUgPmpKhKnRhGLkCMrzHoWPUp1wsCtGpLdm",
  "key2": "f1BnDxHAdqZ4EteNxqUKaKeKwbK3oD9bwF69F217oDwr1XvCWaHaNvn7FwM86PVNMuubn2xP1MNQK49L5gn9kg1",
  "key3": "5fGojaA7WNDad9SZLPgeQhMUVeTVwqwzcWpa8KAQphb4xZAkzWdHRxjbwdkNSSDtTiNyYEv9KUDGq9efTgKPrPUG",
  "key4": "25EhhiA2MrgAq6S3HL1SX5tfcY2AmNjRjwt9v18gCYDWXtYYcV118pg5vpPC3SwSXttXzFNrbMwCkznRaa7cZpcN",
  "key5": "2bMMFhhzSAWpGw1V8ojofKznNmVbk9P7aBPoePaQzvWwcEpbD2fE11WaArTCg6Eg4MYx4kSGvg6jxf3gt83zmCy1",
  "key6": "4Fq1cid2LmW5BFBxxMCAwoPQqZn4s8pS5Jdn9sejXP4sjKwJLw635xiJPcWfQqpzsa9aa9aLWvMchHryvS7PL2bc",
  "key7": "oSGUtpEx9W3G2uud8c4LHicNVyovBCD51sf8TJk6P9UNEzeTyXvU37xFPBy5wDWFZN8XHAas4ZQzRpSkjzW4L6t",
  "key8": "2GHuHnxb1g57XvgZTnVRy33i1K85gif27F9XuYkG6KcqoksBtojM6ng1gDtLX5W8MggGkLFzPCJDirvxABCgcMx",
  "key9": "2ZCQk8NLx5se3accckNnpAU4Mf1o4ncgptZhdCSAzvRkXoy4ep3GD6x8YBRJEsGekgeKjv6KFdmLnfJ8M7dJucBw",
  "key10": "RqKJ3xaRfDGLJZJVhiL5anhoeUDU6Gw3dUXcrdoXKXvf17uhvXhBEzdUzM63BmX8dkWKcn3ria8hbvSFiAfkHUu",
  "key11": "bpJDvSwYCs6mJW8Qrm2DngcD8H6gfkTu3LszzKUQBsNdeTdDoTDYQbtAbggKmKC52gPffuFLjkoctAKx29z5Fp9",
  "key12": "4ff1DkFgdg8FMwebPxL5JJsbHDjJXfjNwdUMzfjcZmZCty9ZK64iegCyjSwdZN1J2tPoJCcytj6LA4FPsZQDopk1",
  "key13": "tsGhXLLcJnXm78TGipekrJPPghY2X1c3CKCeFcYEq334xrCRgaHfrsBPgJYgtvBYZv9HFPeuuNiaJ71cUL97oWZ",
  "key14": "2CM6q2qcVRFFWKTCigVpKEbTLGosqiffUyuQuoUwxq8xD7qep6WSisBpRAfB81NBBH53x7iGXfAq9JYNCB31dzg",
  "key15": "4TFC1uFm3t8LL9EkC5zFJRsdc8rCXT3SoF7BovdwA4quGEgz1y2BoWPoWb8YQMD1f3hK1hLob8Eyyksb8feMDYTW",
  "key16": "2VKUQsQ5CVJwXgHWCzWHsQZebg4u46jaukvuitC6ET317WSjLCR2H5YXv5LuUuV3XBDqiWrrCv3zP9jpXWkzhHz3",
  "key17": "2JAkvGPBaTVXqXNWKv34ZKwdqZPZP3C72XcxHUFZ68BtnvqxCN1TgKeNbrntvHeVm4unw4gAmgQ9V7Q6SJRzib4h",
  "key18": "QWVLFoamyTBRLzDopaoZjSXd3hJgbg5SZDBJ6F35u5DwkXdnULbNhYqwwjqJTgUwSXgZzP6oCu9Z5CSxTBt13jV",
  "key19": "3gymgmzguaAbYJwfYJnNyxRhN8huwsmUaRX6bHo6V8h4zuPx4kvVAXaasb28wHinvNsXGpszkpruYNYKUkBAGuaG",
  "key20": "2QqsJvweWTziapPkRJULWCrxDtkAQPmeBuQAqTvDUfZjvQaK6KauYGhcAKH4tsEmnAd4FTP4WG8sX8SAtDnKiDRe",
  "key21": "4mbvrdKzDfTJBoEVx6nBHSLEff3J3662HNARUx9XqUh5AT14sW8VQnS8v9GF7zThNHfMMBdapvEqNY6V8wnkCL9R",
  "key22": "4gMov2LpnYBjb2GTUjdqjwBVXie62oe16bAokhorJUDCpEdJ4qcH78rSbSfXcKZBPT9zEJo6oxKn868rkN1XcowL",
  "key23": "2Z1Tf6SbcDwWPwDLtUWa1y3dXpoRzej53fZS9yuxpyjBqLQFR19RRN3XAa3vjuEPMuPjhCwRw4qhQJm8bCtSwZjw",
  "key24": "41ntk3BL43HnTc6Ueu2Ht5NauUqttKNuyRZkuBNh19khWkFQNd7c4Zk3HMGSRv5D6UqtiFhctkg9owoQrg6HBu9R",
  "key25": "3UgGhRhpYdk3PjHmgQ83Ezg8meBaagmUqTtk3M4GkyHrvycd7nKohBgPagwRSjajreTyQEFpsH1caBckcVjLTHPf",
  "key26": "LDCXcwR343aXcUViWxyCkaH7XeLzM8ziaNnjKoPtyg6N6ge6K67Yyc3BvhNJxeFQhapHwr6vQbuwv3GCTz3zCHj",
  "key27": "63ByGXt2pFyPCei7eYdLErqBH4QH28MkHFAPnM2sPFaZXVopEHpFGGjwdc6A3T5wmRn9xw92NsVNJqbhQDyXCETi",
  "key28": "3QuadQQDZvPry3VuVTvFs888BhWTEocqyBE6DkUxcJoYyM295rmPz82Q3oCSSYsQ7Wvrw6Ko3NnsebbmSAx3FbHa",
  "key29": "517CyMZgitsKtHmQiJy7fbsEPRhyczEuyqfWgzS3b4HvuVJXGC3mnKrTBoovzSfzvXpXmuud49EzRkZQebsnPBhy",
  "key30": "ur6kpzPuJQvEDpj3txvU3Lm5T1qAhxErgoACnr9T5mQszmfbKAbBP2GNZ5zH4UYTUNs531ssswDgyNUBmm1jyHZ",
  "key31": "5icQHCSonMhbWyN6YJf91txMeD1h797UAkuQZZZ4rtbCYDoRBnGEQswKUCyozjUDnM6NZAx3q8r2TUbQA4AHkzSQ",
  "key32": "26psFh7hZxF5a2eciBXZQYvZ3irX54NbAzpQsq3WYvrHSLHTeSKw9cnBoog4QcUn3Macyhp1sPfxbTWHkBJAmYZs",
  "key33": "4Fy1jZZVfvsdSeqX83Q7NrjkFDCX2DRUHLE7FvUgPzST6p4yWc27Mhc83hc3EwdB36tvFx2TuVHBs6iL3QJT5igL",
  "key34": "3nT9oyNNeJYaB79gbf6MMmmZqMCwNCkPycs1rYAk1pEhzLUxXZUvBWjgdoXTaeZtaxvyooAgLjziMGFLU3WVg8q5",
  "key35": "4Lyag2L3hVFkAueeW7xozkbJMqCK2cwzHkYAGktiwW1vi91CRpoe3yExRNUFvfezQYf1emPmoGAesJ7UxjnPbNhu",
  "key36": "3A1SzgY9KLwJYqEZVyYpjghv6cL8SV7ZLPXLLW7HLmYADpRVTmZMJ5HXQx6q4gd5DxZxSjdzMPgMzaaGFXERoJNy",
  "key37": "5Z2xbhkNXNKVZHdvJDTacuc2fEMRTdZNXLY1jJZ2gknvAGponjg5f8gSCqMqZwd9gZYYghWeUePsK9PFfN3BfBSg",
  "key38": "2uae4Cv1jHjQKheDZKLMPr1ZG7ndG14dyCLTSMbjJeqRt1mtsubQQYQRKAt91t8Qaf34cxufdD62zrJhbqC2vZAU",
  "key39": "4YuhfGxEs8fFm1g1VVK4wYs2a19W1uK2KdsLSotS3Ea1iTnzHPHdXAN3G6G4yMMbthN11J6PrKNF8nUq2oQQ2Sq",
  "key40": "2ijuKGLGuRom27rX93unsxnH5a2KDCQmeMaJfv7qeNcqkVTmquAbfkyyMCERxVvhPtft6R2ieBYxshX9omZQ3qDy",
  "key41": "5K5j6hnqZx1FHTNnGHDjo9yG5taVhQmiy4kYSi3HPUaeUNzAspfo4N6GrxH9gSGydnw2ZdaG74Z4ZZKRtrTimMMM"
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
