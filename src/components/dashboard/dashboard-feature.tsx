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
    "zmyLbte3FdPNWsmmUECUqm3GCZNCfLwxqDHmmevttqXY8NqxHCnBacZfYYg7SPnsVfmoWm6MCW4B6qrYa7U6MXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SEiXSJdDMGUSvifuLp6FJzAGh3Tggw9QF1VMrxy8TZiomU6SZeJD6oetQ6w57zVnytPxvoJyagdSKyctAhQUcr9",
  "key1": "6JzNVC9uSN3vpgXX7TsKcv4ZTwxLsL7M5BCkfJA1dSThfjgufQdGtVCP3uj6rME7njm5maZYc3zHRpfY788RCP4",
  "key2": "jXMJPw4Js6s8pogLrQudQTrL9iwG888ZjVqpfrhVpxDucRYD1sVdWKzCeYdvarppPuus6WFg9QgZMCYVq1NwX7w",
  "key3": "3i98dK5bS8qCfuVbZdzbYoKcH2zhqnzjVXJYFxzxWdyzGFfZod15XUbrxjx2q23CEJdZsNqWCSDdLzied1E5Zu71",
  "key4": "2JHGhUbfUb9sqieW9TeBLhDP3FZT3LZeQHJoympWBSFDttmCsgkWy9B6nwdvZugQMMkWqBz71pH1F47ZW8ekgq6T",
  "key5": "3Cka11W9THMWf5uSsh4rsB6KkqJA4QXXtfKK9DAbi4xtLjYWoRbj6uSYWjnCnEJiWzDxWbgh3WAAbCHgtn2B6yY8",
  "key6": "21YNB2qbmNPHDjtaHPVVNc1wiZXHFaD8SWh5WN6wd2HnWHKNvhs9ePjaAGx3NGg7Ta5doyS1r5iE7J5te3p8B1fZ",
  "key7": "5oi5RDcFJPmKYLfY9YzgRL8DGzQ4c1pEf9seh8FFNxWQaPNGhVa5tBXbGgiPHDj799HUeoJTbZCCLmAQuRcjQACQ",
  "key8": "2JfcKgGSYR1iZGgTNba84x22SurhtnUdREVcRTBWp8nzXvtoSLLWHyU9EN8KFDfGjeJgZ96su4oFkPpL6QbkxNGd",
  "key9": "2akTTQZv1cAySTB83CQKVjkKtkPNgWPrPuHGQD5i3PpcknUo3k3FqzhWriGaU2UFNVG9vx79GJ3VxLdJpbyNGbSq",
  "key10": "5kgKoTXiHbp4NNvCDnqx4udUEVbT8DSPCcEJytoVQJrpKVwSZ5sxU2mZbr5MtvBuBSjJuNvPfbBrGLAJfaYc51xE",
  "key11": "VCjeZyEgYZaxGR2YPWKWzFsUSQYuBREW9VMayFED8T2NKRSd5nzr7Qri1Nb62h9fLL1ekiPvPyYqUYUi3T12gyC",
  "key12": "4KFgLJAP18cNBmFNLovqWNkett76V4ji9yc2hoH8BKrvh75WyiNVPEsLZam58vQxwFsTW4vZdp7QyfZTFpSUfxDM",
  "key13": "5DF2C7umEKBH3LYVEkK1Jove43ZkaXzQEe8kPjFuj4JRez2P5RLr7sjSwjPgWPnSpwBRQPygjbSiT3QGM39H567x",
  "key14": "6VAFKXgW3FCFvAFoJ863kjQgYF62XstHSXWUY4ikm1KWGhNCnvy8CkyajMopmZo2tM3fFQqLF1oJq8j6Wr5VTaX",
  "key15": "JLsNkph5WiysDZfLBNHcBqak6HkDxkopXMcs3V5J8tVjpLocTqQuNZhzSnnNtECSTikSnEYafNHMU98GnA1E94w",
  "key16": "2vEpEwiEruCRP193QECEwjCRpbDzpV1utNcv3VhPTCt4Cxx2U4pBzD91kmKDS5wSu6yjcpb2CXkguxN95iCJvdLY",
  "key17": "4wrFBiMMQmM38hYfCoMGcm81SJTptvQsAMvVhihEMozwbgTNFKKQmUcHQvZeenEotyx6CYUonTBSBwVAkKiQ1xD7",
  "key18": "3hMFxcER5zhEfPjQqsxdsJYp3At3CfAmjzNy2FZDfCRqKKTVBZd1Qj988ZFa84fd6dgjHtyJSjLg9yCuZnT9rqDf",
  "key19": "4H1npFnAdaQpQDmNK3Ky2LAvZRHhraQNDVZCcLDSz5y69kSMgq3BFjiJ2VxMNncETfwvPLhB5Aruso2xNtsCCNnD",
  "key20": "3E8DTs4E8GTjiEKqTjxzwVxyEa3x5ff4pGHMaTFMo2P3gwawgcRHXDrVHbF8UY6szx5d9HwR7xSVYR15mRktsko8",
  "key21": "3dmLmTkoAEZicVebjGjDpoQ6LZ8putD2X5Ub7nJSbcBaDzVJMPYLSM3kDb1PesM8n9fEDDwB2XrMXHy96853QAud",
  "key22": "4AvJkt5noJXvEDzs61DBHuheGhLjkUdCHZXy7CMRy2gtH63zbaTJ2AAwmrudhDkDJqFkLAUcjtFjLXYa1SvCY4Lq",
  "key23": "4F5zkGNsVypcydoEvq7MohNqjwzrQm32zYsAQ1hWVsaCUV9no7WMC4tbA33LsaxGeKNhVz1EQVRiQqcr7KnZPqo2",
  "key24": "2u21xsAWbAkG6pH8PtYHLJXLFySzxen9er7rTsrCHgtR8Uodeu5dwWWg6ipRSBLdR6Pob7uNc2miWMSXy96eZd6s",
  "key25": "rKJiQDPRbUeJazq8hhqMm7Zu8ucTZJ8svQHEEifJTPWV9MPdKGgHZyzDiHZSSASG38acJebTMEFoKuab5Ui5wSZ",
  "key26": "36bcKApLyTBCi11YHJZvZyQwk6Q97k8Z8dw49GrVhDzLbEmnqjLe33VmLyU9Yk7TvURj5b2VjXWCcNcq7LnaYv1F",
  "key27": "3Eu1qqNEbqiXgqeg9WDqk3mTy2ZEDTPQTAABD7cbPxHNbcJaQBKPHKDaf3afyM5DWak1To2fyxEHhsYKXzrKooxs",
  "key28": "67NC8DJvjBuun393ZzoYcgbVWPQBDAF2gJCiaKrwTD6rVMDxQW1aJQi247PtjSqteQFZB7n8xYMbwWUUyJiNBABY",
  "key29": "4n88ej9tqoHZ15wLmxFYa7xsacaU1or5aNxaWmnXzbrAWhoyivn4KW87WEcQRWPJALBih8kqdxPRh59GDT1wyNUT",
  "key30": "2QqiNJFYBoU4bPyys6dGoqJ1XwZDBcSbCpYej8tCq2cpkq3iNW27QbtiFN2kyKZeUjTYY4oHUQfd9misCTmExDqH",
  "key31": "5GekHLXc96YRXjeTik4EJknwJsMAaiwjnvdJB5WFfa8jnHuHDnv86e83QeNKLid24EisYZTgaM3jJzxdmp5VrTBN",
  "key32": "56aPX8WUdTabnDoa7mzjYks8WGDnnxMJ8RpvFMir2fXB8CSfEXwGtvYeYT6cN12Wgo51opRq5gDnNxuys9JM1sky",
  "key33": "yULEPPC8CWrV4JLsa5A9uy5Fsmk9HuGMgyg7wnMKxrt7vfArZprpCHYgzYChbTx5o6hsHa8wWAZtRm6RFeBQWCP",
  "key34": "4MWcrGHfYFjVZ4A8yMhd5Sv2nPMuVpodN4tFY8J3pY7s3H53VPnnz8e6MCxXHcmjx29iSTyEnHqsPK6ds4Nmre8v",
  "key35": "2JwbovX7JPoAHGwPdz5mg4c8FTv1JoDL4JFBdGg888ontQqGd5vdCPbPKWnuvvS2cQHdSiq23Ap67gqJKndo5Cht",
  "key36": "5MP5VDV2b6RENsNLn9SGYBJ6A1T67SHDsraLBbGV99T2CyR8mcK8JhmN9KEQukJGWyW4umsdmAuhkiDKYhxAvj9R",
  "key37": "4JEqFjrWaeTSZoCqZvawk6zoSSwQCCE5sojPdAurTf3W58bg6WkpHtYtgER1tNCTYhaFfApPCY5wreMaBhTTAwq5",
  "key38": "3XvVNSFN5i4NGmrgE9gzJJKmnC35ognGoANP7PjjgJG7NHixRtwqh8jkz1x7scDsjfxwqNCfBXn5eCstr5a2LqyS",
  "key39": "55iYKatTbejmDP3knSvpxDMyqv4RXDQgePrppRYmwoNyFCbaBDF7LSm3qx2KumKdWaxnFymMVTZ3oFkYcoptcuPn",
  "key40": "oBw1HQLmoVzyNd42ZJ8vTnH1hMTJ9ShDa2Cqn7JGafvQ6ik1WUjmNejtUAMiZFJoyfrwmkGC3mGKUpDXg1uH4K9",
  "key41": "4AYmgQJrVxL71NXSkuwCikohbirRpVfKLHZqYzZ2vVB4MDtfiQvahXyQoD22NvLN6PQfhsbZCNouSv8ZsCqRe2rX",
  "key42": "BVyY7Htq5do4rtw8k6rdnM1hhXTdfBy7VBkTiQU9iDa2Unt41sT5TUT15YGbx8s14jTdCU6Ln7ULVqb3sZh7TEg"
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
