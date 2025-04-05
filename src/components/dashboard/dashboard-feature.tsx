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
    "2z9ZvWDbgRLrGNJo6PkarXMJbazopUsHD6Kd83gZDdbESHTzpuAiYR2Dyk8Gs7wWSJ4krm6nHbcDr1qbFGUMxhBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KNvtPPFdv1cbgQ9HNuKsYTHAtdo8Qyyh5vgf8ibtEE6GEmaCKxLbvW2n8eX5T4fvnv2pu26p3JWJeqvxuGUAEyi",
  "key1": "2bCTjVtrCVHHGzNDLCbjdMUGJ8rTi5KQhV3m4rrMe9XbQn81ZZJ45GEb18kWeCP9kuxrGkDTdJh5G3q2QWZeVZrX",
  "key2": "57sCeHNyQ5gyJZQ7ADBgE4o3hzvd31FkwjfR5URvCkDrXBSd1AUQc5oXZxzLG3ipr9pifWMHTGLPnovK1bCZPUR7",
  "key3": "MVVQZmwEJREZLwceM6njT9RLEhiSsx5ST7YNf5NnYfJ358vQaKK8mhyBJiKMZJdCGxTEonP7U2ThDNxBR8jYiAt",
  "key4": "2qsm8EhBtVcb94sTag9q37FmtFmpRCS9hBLs6bNvhEbF1cFV5XeCb9emyFdNGQChxcxtuRUiyK2owZWeQMd8VeVo",
  "key5": "4jV6k7gQoA8ciLjn5aLeCUKjuFcCX8ypeH15mc2AXyrBDnRQjcBgHkr2ZtA79XtLP2fqaXK9syoujmzpa4wyrw65",
  "key6": "352swzfUUMKFTKG8aJAX8ZRaB3hJMQ9hTvFSQNjiQ42vPLmEf4UhvaqQkkGV6D916mk6Dq26vT6WTofDeVVRNd1q",
  "key7": "3aBB1CpEbo5UVso2PCZX29x19NKr7qgDxLEukYGLcVsY36Sf7MnxYdcHJEyfWdLkmHpnpJcpLLfMcFLQ998QLsLw",
  "key8": "2fg7y5pUBKarLxbgJ1myxb1bBRGDXwnyEyUNmnMDFyjYmpdEcntvcV595vK1aVNrJEuZtGNMdwrGTw6zBryaqehq",
  "key9": "4aAhtR5NPRL5mfKz9W3xhmhU8TJGNd9PKLtWrsqMbvzTxaQ5PgzJQBP2WNRV1PeqCrhtnHKB1aKChHrF2D274DA5",
  "key10": "3gZnS3m2FfNKuS1UuJjnoEobvo8LhNznif2JJN4KzU4dukU79ehTXRGqbXjyQnUL1Dyz3XCtxdhHk53aK6pcnPwQ",
  "key11": "5tq5SjzKyP8VrKutHaMmZRr2kvJouaDMzVU5xiwjF3R2aYUJRhMk7mRWT8ExMsMam333hwLrWwbUnuQU3HQRtSWv",
  "key12": "3WjT3gH9uqTKpKGEyyKgW4PkwdE9mkfedvuxDmtVR9f85RNFLJHAwNWux8D66p3LeEWGoo3WG9F96WbMz8uE5LjT",
  "key13": "4Qmkp8wznE8zSiJuc5qSnUHNKKUZF6D4VYAG9PBpLtvSrWbYUAYQmkGPfqdBqYkCFuRU1VCBuQT6natZD5BbiBGY",
  "key14": "4Jc2115hMd85M2kGPftXQ2JfRdpPwTjWMdb1kuvQwGPqK3b5FgnG5awHNKVLWHrya6r2QiDDH4rWN3dNeJFLSMu2",
  "key15": "NiHCJ7JbhAZYYNUsxqM5zQYpNCm41fHsw8NEn2uDLJZdWHgXnuQQcRqo97gdN32umazHwqbpa25kM1Tu9F9MaEY",
  "key16": "Ca5YNtA62sByfshcZwQAT3wnMkCcz9Sdcn7BY6KXu58f6UvttzsJis1uZ75kpzv2UUuZEtn3N6wiXbMpgw2AAQe",
  "key17": "AEanPySFhgjRzTUt9tvHixkdknsdCjJ9afhK2QmS3n4mYjQiGkAZEeUwFUjZLxsvrqY5urbNfCZzwyr4NRXcZbV",
  "key18": "2V3fqWt6WU6t1FVkuRFGGL6z3SKjpyHNkLTPuxyZ3QZqQVDuxmqsBdyRn9pb4vvaWxYC94n5fdyphU7Nper74Q9Q",
  "key19": "33B14TG4gUZodAcg2M1Vy9P5vzSJ9zgmo3t1tw3jgkNViSgv2eJ22bx9AVS7HqYgqKbTUMQi11EBnwupgk4sSu6R",
  "key20": "5C48feQS8wneHj3q5poi5s2xoDauaVPUJWtpxDpD6kCcoE4Su1fUwUJnkwSMU1cM9duKaXf35guYVcRMQLLSuzkf",
  "key21": "3qBbFLqfGEuDpWxajR7QoUvKy2LktYipar5HQMJ2QJDZgf6PA1WVbJrnDUTDMJJkCgWs7azW9fJVKd9Qvqgr41Vy",
  "key22": "fq52UZzTnwyDLHKZtriZnPeujn9sn4y1UV136fiADeNjAWos6JFaEyGTbGCWUZKiPDzj4jtia4QiFrya1y6vVPG",
  "key23": "MMRkPtPWeQ7ueNST78Mm874XrPzP3jRv8WtGvsQEQuhtzhLoxTm7mBXZ3fu9H812z5wG7JAeCL1EkkTdYei2hUT",
  "key24": "531rohQhtGLWg57P2pdtyxfDVDHkuqQTjCQG9t388HCg6epHs7BawGizwW1VWMDZ5GsUeSdbDRKaKNFECuZLJbKB",
  "key25": "5qyMkbEFwpUbLhpUhDikJYLeuVdG5cbDaewRh1Fr7nZWeyMmcpawah7iudvp4uMUoXqf7TbnXPgL4FtnyT8HRf7G",
  "key26": "AZDvPBWRRfWKZ5UsD1692iRiYBCMK6MPga2G8b2WnkynTmtyy3aoTpbEGmpM7tQ8NEvuoW9mCEr1eRUuEgryjUA",
  "key27": "5xvgD8NDYWJ92wTgskGv9NbnUa4qAK8Sydpb6JYNHQYSWwAHmSqWc5A4emnmA8GTLbWMMPix5PqDR9rWu5Amo92A",
  "key28": "4u5nuJdxo2KpKEb3K2LrujrkoN8QRb2G4YRzJvctG7QoEGvSvZCvbvzzqtkS5QiKdY5fzzDCHGNdKaw9SoddWoXP",
  "key29": "4rbCDDrTqRVmuDFbG9wiDexh5ctNabgdjXoBtSz6Mem1XXyxBNM3KwWmoRzNRmAvUR8iDxhuHMf8baVuwHWJk7ja",
  "key30": "3Td3z382gSN5MH6Zf4mwYtsxGc4yThbUeDxvURPaxmaCnWtMATLo2DTbKVgcVZukfzLw4hU5dfpH2smqaCBN1ehV",
  "key31": "3Zg7VcSejSgLFvrxnSGWHHb9kX6wExoj7DM4EBye244hjonBBoSgVYfCc4HEo5VAXYxQb65oWMywqLGNspk1N37q",
  "key32": "4Vf4KuhonPLhioTQHxBCJ6VUCGGVPtWMheAfhtG6TRgXvw9VAmBB6pNekSfukQqY9trfk1pJcyoyqmNtw67JcfzR",
  "key33": "2dENuPqcbUJZjme4pncJzYmPZEH4EemAwQpy6k1rfEAeM3mHG7mQCyhsAYJRgxhUSeaLXEvjauQLgUS9RhttYTW5",
  "key34": "5RRWsW2uci59LEPCVmXSreMrdZdYZEYFmEwocBw7C7q4Z1XvftGq7UAdDtqC2NnHDQ1byVYFkYARGtZNQWrVPs7Y",
  "key35": "32VAkYHvrkxCkVfECvaMtxU5ivjiAZ1j31FRkGLZUWirHrZqExCppjh4QJZND6ECZr2NKtF4eVFPJQRbc1RB84gU",
  "key36": "2aQhGCYirkmPwsuQHpU55ZMm69Twp9uEt5yjMWhuAyD4DYouD111AScG7hc3oeymyDf4jB81MnjXUfesy8gDMyyz",
  "key37": "4WLFajdjyyC4nfkBfarxRAv3jSStDftkNaa5KPP2FJrimAzYft13uNvibSfGVrSw2b1yJVUUzC4ttudG5b15SJj",
  "key38": "431zjsivhPXwxhi6uC2Kf3jk6CbZSW8RF6a5dQ2xuEfjv8AiiLhA7ZSNAWpL9WPXQrYVgvUyGYEAELcjrBSCdDha",
  "key39": "5BTE24ttQV2Lu7x48XLsHmRkA2fB9vwSbw2L3jQpMZQmFKLiT7mRC1pDaTkTFyY1Kdq77dUsKyFB5tpZaCdvjpKE",
  "key40": "4Db7xo8aSCnSUaYeXaQafa4Ka8w4rbEv9JyZyX79ySHSKfji1ZeTwWjSWATYUB6ok2eWGUhJD3rpVZhMwgJbhvQb",
  "key41": "45poKUVcobEdpnyW3ngQjMppCZuqVSFD2P4NUmAdPGjyA6Yf718NjBNutn4jLuia62ihvL5UH4eZ6gKsTkB2Zsw7",
  "key42": "4bRvvhPehKBUWkFCo3JQ2drDoxG4u89j792Mjzs1mkknhLpLVGZxWcwEMnoQMeTMehZLa4xtgvLxKXZxayvqZJER",
  "key43": "2WU98KQy17qow8GqShk2Jpn6tygLnu1f39CZZa8TV6zDgvQ5sqTckvzMuoghnrY5GmRxLzVC6wZ1zHT3stVyvmyc",
  "key44": "4fcnBmQxMJHkKje2n5ZKbyf4gpp9VurqgAQSRHBdZ71j32wq225KA5HrRYAAorw23iGghdPQJsi1Xgw2HPMGqNJS",
  "key45": "3GBn7diEgkLS9NsnLj5dEWfcbE3ELkaiJrB5ndhDdtQ3Rwjig3UX2xEQuqxFaeUgf1aymjTRUo99HBdPK4WZ14fF"
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
