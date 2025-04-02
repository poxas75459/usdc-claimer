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
    "27EkSxoAycs3Me49hXnbRmbjTsDojktqSmUuuNUumdwNQoEig9aY5yZy2cWNZ5imstJAxpndQGFrULwXGJTLTwzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38QwcLq4wkuznFtKPeoCAoyLn834i5MF6XUGZRjqAGXvcpmth7yvAu94MVwtyYgToYzfADU4gnzYLXAsrYwCwo2c",
  "key1": "fQo41R27Skc5H8nzdzzFmT8ojK85FFu5bPqBFLRiXZTeGgznvV5z5zHRMsy7KBGeEQnSjfayKqiaQPKD43MNUvR",
  "key2": "4JBUpx7ZQNF7x5LDiMsuWbLi3ncSgrXx9CPyuQK8AiJAYq5HzB2y1Ew5aKnpmSRfs9AuFeENsnLgo5oTLYgrLu6Y",
  "key3": "64c35Lg7i6wfYMC1oyVaHMQCaZGkAB7NfcGH4rmZNGFw8w1xamA3MDLEQ296vHQwxAB4z6pRWRzF5tJnXzM4soRL",
  "key4": "32uSc9x5AbRSAQM7tV7pTkT7kXZQyHjomcYbtCYoqPnpTjysFyVgFrs2efCPUa91BZ15L3KhNGAQidhQfQYA2kYu",
  "key5": "4HV1jbXP6a5juSHaHMX3PGCdD8jgNzk9q7Vvz34grR66D6GFXytweDDYjKHLuqYEvbg5hCho8FiDCnoGvUScVA8x",
  "key6": "3ofo8Q2nYv9PuBaMUioLgDnWQJab2hJqXgxenxo7M2pqxqiEXDyRDDCFNeG3ndqHf4iAndKdxTiY6cnXgLcJM3QV",
  "key7": "5igz4fGs9ZCRLHv6xv2GnXDmNVXiUS67dxFdhFb3JD1X2XH97cmzv9y5zrmVLEsYdK9ic7rwDjwhsCcp5H8kUtF3",
  "key8": "5CeBDgaA6w1f6MaxEPc5Ef78KVmYGGyWoNepKQNzjMR3y13wn6XedUoVCrf9JGwuMxDMzfr3PZVnW1rG68UKEGRy",
  "key9": "5qDhgSS3HRcBhvgjtZz6Q4CeoyJZj4pqZr7tN7X9ZApQPyZy1HM93EGMnANbe9RQfJhfuKn3MetdgnZnd4UwF86t",
  "key10": "37XrnnYxPJjUeB8kPeCFQVFiUx54LBNtFNLicbaHJdUNGGtZCPmt2L9AeKGrqT6MNkKUiN5kpXJiL1VTvz7PfYf7",
  "key11": "5XSsv78ANhXimHNEJ6EZr7wtcGJwmE7sd1vmuDroc7dtY5r7Writpv71Q8xf7RLPJAxBVz2gBBYHsieBQZsnBuMY",
  "key12": "5krYStd7sQhPGqenrfEvfs3x6mnYcBt3HxFtH9owqQMsGhgdbWD1W4Gy7qrR3ysHKa3MaQDWBaVHZFipk24B56z8",
  "key13": "3WU1qPUwkTrXDe6rBxD28mHQJ3UTPWVsoaRYP39TvagvaS5JfJA1tzYzfb5G2s6pqbMAZZ9WhidNZgzhtNaGptsX",
  "key14": "58FMsc1mXNw883aAe4YSaf2HP6DkHTabaX8izTuUBe2wGKdo2Y353C2dGFsyPiDeifpXUEYXgQXoCT4isZGHQXKi",
  "key15": "3tqBxdnECDRzRjixWtzw6NFzoUL1Yx9DD8BKUvDPoYDyyZxdqk1p3ZyDTGE9Vuh8R7oc53eNcus3jMnAdy28S6L6",
  "key16": "4oyN9hW34dHzo8a5GZpf8x6Q9qEmtjumN9KM7Ss9iMDpQJ4z4Ua1CSmVSopWweJUxXHXJBcnX8ufLJhZemv7JQZV",
  "key17": "41zNEHfmhYCQvMApKTuuHTR84b5B2A5hr19he8HPqmjpNsSiQadEyFfpghSYUCe8SL9TFaAiAz9Gp3yYwmaVVd2",
  "key18": "5wzvzteUoD6gNMYZLXegEgnanriwioHkVsNEaP7UbvQnD98o7A4CxcVJTS9JZioV127i9HVkkMFH88F41LSDWpE3",
  "key19": "27CQMeLhc9wGMDbG2nSZXg5KxPashYoxktQomyPw2ohFWhwygKRLwBe3n3JzE62Z659xX47U71jR1Egjba1DH7Fx",
  "key20": "4hpgKymw6vM1n5oicNtJEvChTGGHGbX23UyyQ7sY9ZRd1ay7uNQKez9wXrMPWXPhA2VrvLEneJ4btTRs84nnMsZi",
  "key21": "2J6Eb4mNFZzMjcSX2sQrAjPqJBrudAyRUVf4a9PiRCaDEaTmrVbgbrsSHd55AQbSzdBxszZdA5zWToo1eUdLJR5Q",
  "key22": "5JVZT61UKipuVXJfL8GbswhWk1SbXgxNTXeBykWqbuJeKz5Bp9aTtxTFbd9NwUwkkp1Gju96LxtSTgxtHkdLT39t",
  "key23": "byCDdxf8Ue8AzSGshQRxbMFCoHHuhHNjA7oMHjBGqfTbaNtoJzUdEVfob211wrDNABG6tQwi6T2gXyJjavAyVoJ",
  "key24": "2sj7b9uupLof5rCoAdi1tHERWoRPFVyLadnn2ZFkFtshts87st4vEcQCxg71ekNxFcBgiaBDCFRHxNmnizBLTXsd",
  "key25": "fTTU5v2AhgV8mQhiNUWx2Cdv2ojQBxnnuUYc9EJCyGyJ4DPuVVSwSJrT9uNTTZzNCeMi1TwH9Kp5ZVXckf69hm6",
  "key26": "54nEf3aMJ29B7gKLH7wLXodkke9D7FBsy85KWpN5M7rvTNwY4s7ZxQwCaUStS2vxzkf2eFyoqahbNBpCBZakLdHE",
  "key27": "2zn6akDfcE8qHPpqToLPVMWtn2z8xh67DQnwnyXM9Mw73wvUYAivLPTioAus24REp2dZXDRKPcePny75VH3hsYmm",
  "key28": "5fH3tEKCLkpazTX1rTMWwEu7awmTzwEcPDbsNyQuBRyNu7q9NZYYguFSyrpDXLWEtmRHEQKjWXka3SXfsQZmLGFX",
  "key29": "3dDVPWt75buZjmevjpWWQn7riYM8pP8dmRxwn7e6LLAxSkV3AXjfS7xdixraNRfpZZdmiSd9AgKo3H8SjUrhPA8",
  "key30": "zVXthrP5K87V1KqXKwZRCyD6QzXeEUcppnsPmkYALE5GkpEVqrAjTmdJY6bdEXn9Koy5pMRAdGvunrswmvHunaz",
  "key31": "2HbAvj6WchP3LEyYDkFXCT2zhm2Sr2d8XMrrNfFqhQhAS7Jz43cJG7a2hnSvHmFaekHEWKyxw9DQ71Z2CmQ8JZii",
  "key32": "pW2hCPJq4Ta6RgkFB2NHrt9WEeJkGx9Vw5L19HwfFpSDaYuAHwTEoqgJY8ih2HzJWpiW1Y5tuZutKCvpzN2Vf6X",
  "key33": "3KnXhyeQHuFBdtY97cidugP7ZKKgAXcTAKqKDpFzx3cejrLAxHy33VMmvFeoaPh1ajW5yJWCuiCW5SqjJuvVZfN2",
  "key34": "3BnDWykK994c8DWsoL2Yx2rwn2pBACzArGHCj1gi5vgDHNZX9bqru34CH93h4yyLWyQjk234V6X8QZzpCsFy9pL1",
  "key35": "9aem73tLrSXMVjQw3HpjKWtbToCoLouZB4o2LxtkyAMMnyhsxYxB5rKYxovJC5Uz16ztGa2G1TgHzhM1WBbg1Z5",
  "key36": "24xsRvDNnNUkwVPDUYUzqftJ3RxKvFtPR8RZvVrqVHpebDX3i8QMVUXW499U9ren74Dxupb64Pe6SYneeaU8NqLG",
  "key37": "5R2kBvhSTJ6dbRgpFFEvGFt3knAuhK7jRv4cazL8oEierV6UZ3b6271yRwu2MQZHj4gqAZmwtx8DWGHALCQ63Wjz",
  "key38": "ytUV34AF6kETodGZbivnX4Nz56N7toHcCKhWVG8auPkhn2tnmjiokiMJnbr3Vigd5EPrjNmkphvYjdZyKZ4eRb4",
  "key39": "4B2zZsAzew5vhmrbxKD3mT4JgfH36DMLVy9Hssr7h9bXPpuvu7ayyn8o16zw6p9p5yNEErnKhGfnwAUzTdeiEd4i",
  "key40": "3ciV4RTMc9XSCqnBvWCJCTYJ24ZNz1oEbUCY4A3ewjhJA4c8bnvaA1JCtRTD6TQSdDf4eceygi46YWhV6VtiZYAz",
  "key41": "hXrdFv956oQZBtsDGPc3BJgQGvVbV1C5ELgkUN2Vk2roqwT1ooYMo1iiT4X3HQpPGyNkUXRSy4N27RUxYQV9HSy",
  "key42": "3omgF96PgF5ZMP9pv6Cp97oRMt5aSVZqfxHxCha3rHATwumnSmSzuqWJTLxM3fR9XTsXXHooskx9nzwMCYVy9Z2D",
  "key43": "2ajSBvgVrDja31w4qdmjUCHN4DX6J7zTKCfpbZ47CfVjxgXzFtrAfrLZYwDagWiL41qPtyMU2TqFu67AtLUU2HS2",
  "key44": "23QhMpY153rURkD7y5oe4s8F5EDivbQgedVvocpEbgZDtJUi8DAvPUWw1miGDKULP16MwziQfbv3CXyw6D7F9pBy"
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
