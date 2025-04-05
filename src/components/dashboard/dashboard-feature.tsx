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
    "ikPAJFGQEpMkWvGtMJmjAUKSKo9ej1XMnrbAG6d45cxr7Fn8Vgq97NpBKpETKjjNoAnm88NdgLvzVAXY6VjdmrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kj3vWLbtJkzgLFqQz3p5qqhGRVZ6h8gDK7rcN5UjvShKBXdDU98TuTJwrVrMHAU5AUgZZ9CRzt1F7FheMhYU3tr",
  "key1": "4GHTGrpWkRKPBCfJQTFhxURyVwEm8GwopmmMYPrJ1U7aJy4ki4jcCy3brJ8pXLqNRL9QRFFnkFgvctAFNeiqSPJA",
  "key2": "5rU51zpNmLhViztG8N2e7T1Mo2FKN1ppNUGohHzgUzWQA5aZBaMvnhJ129gpTq9uPZegWauMJ8fL5QkWuwrkoAYx",
  "key3": "2XyWuWCw1sWKX7RvEudLVUYrbHqQE9VfZ3FPByc4UomvwPmwZbx5YLqxVEU4JY8JuXikDm3YJ7DpbL8KDaRwEDKB",
  "key4": "KAidmsq7MGWvqTdV8y6LnsvxnFFWBzhbJzWbi8x9qiTveMcDkj4sdFwyGqMTsy71sY4bGMT1NUzE8gurRLhFVUw",
  "key5": "28fRf124wjQozspXUwrhFMX8FieBZzpR4Hs969JuQ9LvFg3hjMtJGUEUV6KLVVmwWrr218XyfNoogdfb9LZkXhJx",
  "key6": "nB5QAU4pQY92F6e3d6XJSMAk58tAMymYojqfKqmtae8QN46cZhhQjkMxrbFD6Swv5UMQucz8sr6jBuP3VXFVEdT",
  "key7": "633soP9aAPRgN4GFyb35tDURxYmrzMURroanUNnz4hUQhYojUYaW731XX45cwEYhqKdsuW6cfPv13dc9sSWgWGBM",
  "key8": "zuPP82LtMev9LLDeFc8C637U6KLoJ9X3TmXVGqfwnEhaYUXsVUcLNNLxdwFFxkuWTJ79nWQ7WmWyVaH814yJu36",
  "key9": "2dYPhnhW4GRBThW6STS1vo9x8BfvgZpVDEBSZdEi4aJF4TwJkGo4NRrFVZkozut6EgkWiaYA8QTBnGacbEkDBrBK",
  "key10": "3JptJ84uxwcBTFioBAfXEugw6Fnndhsko3F2mvYjQwTRqhZzukrRSjDGP5HusLqEwYoehnYgkWyCdpCLV3tGPoYV",
  "key11": "2ZxDi7QbvQKtvikitiaoRHVGqBVGzbHMZYMNmQgnJLw4aGnLvstGBf9jqN9wb6SUFLjsENMkaQDMTTyoBTvtpzrs",
  "key12": "r39biQXcPPEdX49NayHcZH77fgeRYUugdZnWLNNa4PkMCZHa5jV7CPgezo36V1bfD5aBwuvZPdPDLhHQuCnohry",
  "key13": "3ewFVTQVGVMfW6c4hwjenWpC9S95h8CXdz1kSLtyJ3dhHJDEZFmguHbqeYtJ4Sor1JXua4vRoytAK6LTcpsvejM",
  "key14": "3FuM98q74o8QySBYJaYeWKBLf9q4GXtEFJUiKQizrC1t79wY6yA2gGe1sf5wB9B87sp1hQxAid6QD4TSATnHW44q",
  "key15": "3gzoSjsY7546gtNnc7qTobR7DeSw3jgPJFFvzECDYAZdpVteJei93RqhDkZmstKmundMuBsf9TMzKcV5abbcUD2R",
  "key16": "4bGrLB9nQKXfK9nVfkbxmxzz7DfuRcDAbDsrD4uGz765XVs9MYPvZa5za38PAwsvgUHbbskMTpTPk9TmEBKCdya5",
  "key17": "4fnJZtzzMYs3SN25x4cYbDEuyq8ztc9LmuHs7rcDYRQotn29eyUwBz2St6kbr1gXdDBiP2dmyAYiaiFKV1JLSXAa",
  "key18": "2Swhdane3cHjsWDj9kN5UzAUHfg9GNYQgai3ihUN4ACy6DUiGFGgUzELB9jXrbDBRSzioui61m9Nuia8xC2TL3KX",
  "key19": "4gaBsZu1sfv2qecKWKnSoH9chVbt3yK7Ro1qHCyPjAuxBb6PpwgDZkMRCnVkxRAxn3nCT131sUWPUVStLwRrWmr8",
  "key20": "5FCq1qb8y9dhR9b22ftZT9UhxPrNDXUoZ5roYtdaLgMVsP1c1qtb1wSLdtTAuPuPGE7qPv5CJkwfpCKUJeDE3594",
  "key21": "5Wcupwq8rY5uU8jFHhCVs94GfB5H1G4evx8v3whHoF74S8vmJgbCrhQmq31p7K5NBPiXuuSTgADoX3pyhSVTETGt",
  "key22": "343otGtxTQ6Z7Ym3h3QF1PBYjNajNgJNkx3jbfdEpEwhGLa685DW3XcMvAixYbVUL4zP6PKc2Td3kKazTfxKHPtt",
  "key23": "2RMdrRBJ81gAoJ5fsCgUdvCuckTewRodDqGBHMBkkANmncSgJdYfwPLQZi43hZoRnC8e2qtgLNhvXurAZ2DvoNck",
  "key24": "2zDtcdsguPiZWnkgP5n6xB6sqtWzfLbRiP8S34zUu3hwmwPoWJs2niQ7ASgCZx9faUq8tR6FKM7tW2SNMgZeV7Fk",
  "key25": "2aCwTF3nPrwWneCQxQQwqdwbTyvFXoYJbHFE9TuxLzfgUxf8wMRKGceVspDfuX6rdt17AT41vXTph6nPEGet3e4c",
  "key26": "4XxzuCyXc1LZp8JJWKXok6o98s925TqdznjzZtRYeVQ9Td3ruooZfYDwfv37Xe4HpESPpmYkKYhmH8NrzJdTrMVz",
  "key27": "Qf3vErL5ZowToVEzoaSKKW9inSSDUcFMiCXy5cFFWMs2arDFtyYniUynrGm9UaWx4SKY18AfvBkwyHAWeZTj7d6",
  "key28": "59Emer4QhfyhwEHMcVgAYEySVrF5CRh2TEa9GRXYvcRJ8GNDU9kHDERGasfTx2t1N41AgfZZoNHjwzbWmBePpiJy",
  "key29": "o1bEeYRf8Xa7PNxGMLhyEPMWNgsZm6t9NzkNAhWB4uTBMvKYCBYJEpgyLpkVyypERLhmeqc6tKXYbmtfM8dXrfQ",
  "key30": "4rXankoEzmiHJLDEro3oXGBExmc7kjLgVjcBfjv7yuvvDgUhdV16T27YH7HHEH1o3EtpcQ5QjgHSAJFF2zffqPEM",
  "key31": "5zm6FmvTvsjDGnb2QAi9jvfzuN2FR2SMJAr9qVCTvvN6iNtUUSp5iZ7oPhaKPptgT2azHMShKG5SstdPrETEBCS1",
  "key32": "2QK5RUNQoePJNfiSao9J5DkFJ75KcEs8zBwWmRe18sypam17Mkc3a28FVx8aDHf2WtafkxQL6xV5TfBymyS5PL2",
  "key33": "5rKKhbSeppj3egjUHyoUsvsSecHdyZuLuPGvjqidm3XFQ6wP3gjZanspAYmTTdG6MKNnnHyJnU7sh3J7EDcVq6wB",
  "key34": "3FdsWQVk3VuVnejhXxbfBoaaLBRkxUsTgJ2SGkPcEKLxWsAyteUFLB4rkPmmF8JaT2mHSdzpp9UiD32zBVmrp2xm"
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
