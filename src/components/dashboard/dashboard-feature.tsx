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
    "Bwnfi29W2tsAoV6NF3CPK8VF5ALYfzRxbYSoVWN7gftSfDHPzQQFtrr9VcQ5wehiX5dim5HAMb3rGpau6jZTmGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g2cMqNsrLE4xNa3vRCidZmjCBgFiwD5eY5qgBQTvQEE2V4VUpZokwMh7NLdGeks3iQ8SZT8PDHYnPQcxFDWh2kn",
  "key1": "4gGMMgtQXR9BbgMWbYvVhoMNrM1nR5aCuH1KZz37GA6V9xuNtymz2JAmA5oWpgcHkbFgQ2CzWzohospzyyeEDeak",
  "key2": "5JP4LQ81vfNprf6MnoXWFeBLNERgmqYXhS7pNozRFoaDLtkePD6mgeMMdxKWUHikLxj1LiXL7uJ9Ce3M3LH25C6S",
  "key3": "5y9CBLNctpDgFqVXfyZj4FdB3qB94t59D9Z8AnLRqsxKusQ6nvL8PG1QNsVJzuoSKYUNQ2nCmZCXDNLKD6Bi2RN1",
  "key4": "5376UF8xLUssK45ZEMMdY9fEQMMKi3epP8uo22ecwZE32G2NK6psuZ7nYzX25gJCrrRoEGnBSCTzKTGpB5LVpNFw",
  "key5": "4VVgqmMKM4EBgmkPkq4o1aJ4RkpdSaLYsB4HbgsCffh1kQGXXoxib5MEUx89YQFU9AmCySAXSFc5cTqvKcMaJppY",
  "key6": "59dx9gbkge5J8DAYBhUAh171LUn49vd9bEfWZ1bm719S3963gxE4QA2biKtvbEzHzgXfvdYbLt9SYE81bDV9jbvn",
  "key7": "3zwdMKvvHPBgcXFYMy3pNUULWBpuzFY4ShYXD7Dn24NJEhD8meb6iDhB1Y5hz6ULzayD4oGzkae2i1Lk6qbnTYan",
  "key8": "28W8cTkhch1dRy56zbHe5JAp9tjLpLV7MVsxQjqtdVCM6pU4iZ1PzZJszjJhwbL1SSwaJryKzQBi9PKfnsqvEtEx",
  "key9": "5VhNPZgM7kdQx3TcxnQMeouvKPy2vyhv3WDKqYuQWiYQysvnKkEqXFJzx8KsRikQpBcz1K7EqiUpPmpcdmYA2HpT",
  "key10": "4ikDmSDsNV5B5q6CwD4Nzu3qBar54pNPXw93Hsn3qyUhboPgWKXfoz3hVF6xZ63T3euwhuwv7BuHLitxg17tfKwJ",
  "key11": "59PFfq1e6NPVCUShMTVZYD8hEqNwgSNLuQUtP1fmrCdeWEd3FqMD9xNCZE76WhkWmipLG4MGnzdDUuk5ApRM5y71",
  "key12": "4EJ929sf1hc9K2wx31zFCaN8YXXz8Pb9bWHDccD2AzU8S2Khet7zEQzWzHjvZZQJ6ZVtH7suquzDaz7TpbYD3XeT",
  "key13": "5ouz3T2raapGrSwBXWJDrQ7qxt6f3seq4NvjqeiDDE4cYM2UffRJhDqMkdQPSKb2YehVq3fWVuiYsdQ2Nu1GBHRd",
  "key14": "3YwzNNjh1mioyxAeTi8UNr6KZYkmgjWWnVyGSbM4VSM5g4oNvPnXWfQUTBbebdnqaKs5QR7waQDw9CRWcvUVhN4U",
  "key15": "5pcMWXBB2GWU6VhecfA8mT9AcigPqApFTZdsmvMhAYDsLEikMgGQo5AngrD4nTd5jpe36ipaby6dZHfBkd18ajuK",
  "key16": "3x6mNqboQjzbkufzY84FpWEZHMv2RJLQdjxwCCeXAek1HPrrMpW2Fz6GX5RvNTDGqzsvNTCY7aNZHkhqjU1KxXac",
  "key17": "3j8GN9WthNV7zBnf5ephUSPxmyKbSnrUFmcRaqCRBEJmgoXdyeGUSFfTUHrRx6eyhbfvTUPFDUzn184zDYa9dMaM",
  "key18": "4DFs3LD1tfnugRm9Xcz2smHK57f42hWsQMRfE2DVGnFYDKUxZEK2ihxLdbJbDkkag5m2jA5WoMAaEnJznzrimkCY",
  "key19": "2GYLXLm34gHRKfRTP4qDBTxdq3iFGb2ZGKk762HhGTnehvAR5gcSsXyarWprcFjhr4d5wbLF3351Y5abbfoMREty",
  "key20": "1z9AUCoaYgSguJCnpKYAcfcQdGyJxwcdMHqP1EeTuGzqhm6Uoii1JSwjFEXPXqrVSYYdTfHp1p3Jc8FUvMTposv",
  "key21": "3TjAc8QXa6MYg19fXrHxmJ8ekSh3ff1MrYVMN42xVZtzx38uFFVFTD7cmZZ9vWc78DiUtpNM6RF38AZxKGARtHdj",
  "key22": "57xGBDbM2dP4pkqaABkM2usNy3ovVch1VvyKBTL82CPtdpim1MCRVfHEaownc5n6UW4yNVKR4ktz7M61TTAfqpT",
  "key23": "3ZoyrFcg6cQ1BjuNydvSxBpqMqCon9Vad4o8BEKC6p3C1E9wKdMksNjgtLs8wtXJF2VeB7GbH1rCHPraHZLnW8oX",
  "key24": "t6YTafwzGreAP14kZqixJWGtFpUDyBxNwgCe3HVjKnLttAVkUVQeBGwJzxkpNVccpjy3itHUpPhWBaMhjnt3UMw",
  "key25": "NLo7zxq1uZitEJCPNcL75rtBp3hBUbZJTBcJfxUzyrCgaYaT7Hkvh3RqQKXvhZAHqSCmRDaKYz6hBefmK7t6GVU",
  "key26": "2nehiGv3ACLd7uuA8NtfnwVyG6kjyoYTUavN6ZacRUR7bwZHXLXxbkDWcgBGeVzDGqRRdyqLj4TgxVmaxxkHCjo7",
  "key27": "3zm2BeCffeXPou9Hrh4yiM2kqJXLUkgyNMd1TqkyE66zK98GVDwqRncpzZgyfvjigM6vahTkXty5q6dk2wfkDrjG",
  "key28": "3stumS6MtxHmQKkoVdAsrSrxSE22pBH1TQAEUs4EugdxBLBzbHQMzkaHh8GxnPHemZmrsGPu3RRP5UzH1KWcjuSJ",
  "key29": "4HGN2UgWxJ5uGkiB5tSEFf4See97xqLq3LGKmCmjAgGPb4beYMHBkRGZ3f2SUvHSu5GiF2mqA5cGzbF1pytsqWCi",
  "key30": "U7jGu3Uin1fJP8VkuEgA1W1NVpqpeduorRqToHdyrPMsXrCrF9Lc3PXBmmrhfuWQfEgY2hquQZoAdDrFseU7GCD",
  "key31": "2uuSoruWYxxQdEGiZryjUfBRa3K3P7Tm8ysmXzkprTfvBmj5XScGho9RvsYuED1n6soh6u5DX8mDV1JkNcgsStta",
  "key32": "SLrPqiX3BcjsVivuJeZt7aRN2TBBxueFH1izNxBSBwyCEYjtjFwK7jytmbxtGpvJKqg4RhXrhxKUYYUZkxBUicz",
  "key33": "55B3w9yruWLkRmunPJhTEDBCS8UK1PdW5KpegM4USDebT1Ynt1mU85TSgbHKNfbPm7Lm78TjLFknRcTNJMk6xCBF",
  "key34": "2dPeWdsEf8eYbHZsfof7ZXPZwB7hLHRtFg65L29am5XcM1JE3D2vuSoU81uLUKLi6SsSQCxAC29GxMdPScTBFD2P",
  "key35": "pJ36TiTTZoobzDcyvqyaFFHJC8tF8xw8E5KjmHcVSgoqbNiZKdYSDzSQppJxACLv6JMa1vVpZhRBwosjQhc1gyN",
  "key36": "4xc7AMpSmLdYBFbUVuE7s7EwWaGkweWzYhLwwwsCq4hiytJuJdio9c2aF6hL7webih9Qm7eMZijvU24JrU46xqNb",
  "key37": "2JrLw8AN7BDwx4tDixsGSS9zWwmVzBiA6LpFJgw54LcfGcMPyh1ttbn6vaF2stKSanoLBe94g1AG5xAKKcWLVnan",
  "key38": "3ZrEprd3ca8FuHYTf1kGF1bkhGuZhDtCV4V2VDzMWi1G2VTem32YCgGYxUrwSsFFeLvWtePXUnTPStWt8UBPFWwN",
  "key39": "64GFLoRxV62EdPnQKsyoj3BwrU92QzfGwzR3s3Ri2LhZSSYYcDf9NSPRG1aG3tGvkZy84dtBEMdewjJvUUuGWebZ",
  "key40": "63waeRZbWFaG2bgsKugAPKfg7LBHxhji2dFzrSPRfhYHACWa3FnGyTPNyTcm5guD3jjP7EMkTx7nHyobPQUMfMy",
  "key41": "53s9KqjSEfKhUmZWK2e1ZZN7XpjBjtbaEsmuLeYzVxweZuEQugYVsU1pS3fRtRfJkvFSYmPcK5SLBozVT81fAz5D"
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
