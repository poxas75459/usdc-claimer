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
    "23bJ756UgeZ1XUk6uGooQqnzCKGPdita6yHeAc974yg6hJsVzMbmTkJ7dhZFRE5PTucnCjuKBhHg5Gd5RsveEf4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G2TvpZek3NaxKp2vT7vYTi7j2kLy7ZUsiXN4gEw2TbCwHS7M9pPDFaE9YGvukS7qZYGYdo4SgkQxZ2RLxz6VVMA",
  "key1": "djPgV7EEVZUrDnDrZSKvqJkHYWyZsFgEdsYNKJaLejaKJZSHpvMAUEqESQjULP8Wr3JamkZ9T7s8Agy1vXHkav3",
  "key2": "3iL66cX4FFU3ftHnCnWsVv436J7eoxrEWa1FWvdjezXE9ZTUyggt3EpjL6ZGELUzCjtsvHUjustrKNSsTV2d5juT",
  "key3": "N3XGhbFTi9B4zFEgZGb4MrxnDfTCQPgazSs1HrM4JYBWC7Gs1gyXmTLLuxSjVjnYBYkWZmoZGi1QDAc7hTr8KPL",
  "key4": "2zti8RfV7GThYQmeu2vasmSpw7WUd4mGgBMFUpSStaYk58pTbjneavc7QgtfNJsDsqVamkmwEJNkDa9bKz6zx24w",
  "key5": "4JvukvEG5sD3KAeHr62dNQfdJSKotDBhowPB326KbyMLx6BmVfRFj53VsSA6UuLbThkbQ5PxAFSWEpWBtBS94c1Z",
  "key6": "xcbNdX64MoCcUaAf7PUKZiG6kTPJJjYtoY88SNxHiUoXdbzANXkjkkqB9Z8uAxVPQbv4DuYfjBibBWRSj15qTBw",
  "key7": "5S9CM57GdnywTjQTqJCnPsAN1CAqnrw1h3EbVhV8krKNdo47tQG2puZuHtWECcBfpfMK6pNJBQjMvqqCmdjBRsuM",
  "key8": "29axYeJy2SkTmHvLxNmyzhac7v7rBNtFhGzAjosR2jjKCgCcy6HqMqqQmnwihckUiw5ScFnwTvPi7623pyKN3jdU",
  "key9": "5UHsKrsUewBcTfNQc3MfBvJuY89BuCZqkfKSVVwT4iMihV3Dc14pKiEkkKWCMZG1yFHUaSN3CDhSBLBGo7AtECdU",
  "key10": "2kZLctxeUeRYNfBLFpHkAcgYJyZYtmUaSKBBEe9esEhdDj8XEy888spa7WtRv4eyf5jj5ry5YEtp5WR13uAaKQvW",
  "key11": "HzMrpC1kALxt1mhWcgHbF69i9fTWg13sBPhzL16mJVNHoi8BRCfbBh7Qy8vApGNuYFtuf31qG3uj1EE2ZGSsPGi",
  "key12": "a7xAK3RkU9vUMyXLYcCU6khkbociUJyhvPXoeWsM5bENQVmir57tHrwHrxuBUU3amYDtN9eBog7oHDPnazC1Lx3",
  "key13": "3SXdZvRtXRuXS6o7EpkBnxbGvERbW9LNoqeNQVcSZiTsREv9yCwJNi7yimtLUR4YPysUg9UJgoRxhwxCKM1Vbas2",
  "key14": "5Etr7DxnbpKCg27HMCThRFWELfLVkyfYxhf9N7S4W8obA1LDKYCqhGgUojjKJyBNySn3yvhrAtNRZ4Dianmsno4p",
  "key15": "2Jt8D4eNAZACWNUhpFdGjtijv8UiWCKCzAG2eqgdvGnccBjsAuyeZ25jd6W7YSkLtJM4Q4MFimz7jvWAcDaBLuZf",
  "key16": "5CjAD89BWJuniytNjDyvmZjad1m25bAwJ2tmyz4d6e8LNm1qCzvJqcezEyVPjsvMSbREUFJhgK7Zda7xGhahcHtp",
  "key17": "K16thVcoEHdtePNNz7XsjLGQuVi61kZVdVhuaJHrrNS6YRYzpy5jJv4kW3rR8vqsdMRyr1jtWtNsUxEhw6vvM2p",
  "key18": "52LCSUnMHJWmipey2acz2A1zqs6B5xPgkWkRUVwZae27d388pSFZGiwph2xgdKx2avjqfv3MLX6QUpLtJg47YLw5",
  "key19": "FLoiBUFo66hdU8oAyP2QX9CziDWv13uneQfPe1cApmcYxDDU8MqUjNqn295gYYaiLgLocycSEmwk75uV9qsjbsY",
  "key20": "WiSMesebC7x4BYhhArRmpAcvf4Yum2Nq433EvQB551T7DU9zTBi48yxeXj1ZCKurB15JUzaU2U7MedBwNC8ybt2",
  "key21": "33S5eGZvTQ87r6T9xXUE4yDtgAy6MHfYy4VCRPk5imFGQ4Rvn56tenjgBzCNF1GcB6GpCc3J2ko7s6HELerJC5XD",
  "key22": "2JhoT9buz1WHnDdXzw9QCEABX4ma4dKRTNQCSik6YcESpEq6ZXkZ562P7xvA1fFLv27LBmsExTxiisRTcPMwf2zm",
  "key23": "3sirmDKZBgc5ANt8a78XA7pX5Hjh4tnjayJvT471sBkxz6JcahSaQbQbuu8PS78uuxZYTApzZ9KWJAWtjGzxV9k6",
  "key24": "2YgXWsijFWdc9m8fSFbNeeBVVQYDoHAQCbDyG6s79u1FawPQ7Zv8hszc9jghT1U4bMq5u8DmujcLhepnrTsBnJmC",
  "key25": "5MaRqWuSV7pw7zR1es63ymd7c8bXAycdLs1J3Sve6WNoLwch9E152xhXMVXhbeZ34B551op4U9RcxFHKQckwGVMK",
  "key26": "2whe5oqL4SFvg2L1dA4HkApEzYSb18Ts692oyNqNvLjba6FdAVuNiyUbXhLQybgGuLPz4y4r4mY7xFaZfPhkku7h",
  "key27": "sPoJ1qUkW4oBUgLNqqWaznGcS9yQYwHrYnmSoWTXyvFLE6ez2uP8HJqvX2ckw5x6PST7vdkaPn5PP8WE4AbU9as",
  "key28": "61PyQbCfRvoFdyWVggqKWvwfp1bGwE5nRmXAZLxYGJA1Jtt8R2Bh2QUjgYQCv1ghkAo5EAiXoyQyre6dLKH8RCav",
  "key29": "3NgHxCBV8wrKdWEzBT1oPzt3cqTMM1f7ikAmLHUQKt9NqASvzaUHSeUspxvV3DjGwitR8Ee5SwcW1csNeEVr7vwu",
  "key30": "4XEXcyGibbiJxQvFfR74LHQsLYAmaQUDeCC5zhsQL1kWvp3KszHDky2KprcNmMw4hQ9GhmAdfjDysbdTvsC8nw4G",
  "key31": "MZYrTwUHTqAyzMhz7CjvY5CKnS6Mx7TgVpqST5sFmh7stty2fVKLUgkKf5sWc8nrWtTLf41444xwHReep6iWiaL",
  "key32": "3mcxS4MPhg4crXsnDWDXExX1sfvT7npvfiB34iouaW9WhBh9YCZE3j28F23HW4ejS8YnHVDtb3hX7T4XF5fVbpfV",
  "key33": "j5LA953ZCyZf6G9o1DfsNAmBAsxNRXoXFGUZbJPvRVg1DuFKvRA2fusBqszUfHa7j26r4pV7DmShCiLRHb6UiWS",
  "key34": "2hC2LEfa5mXN3GxZu5bNnSoCau9FxiD911XuXh15Rs76qexuwyVnYqbmUjqgiHXU5GzqKuZBaKoYWGzvWK81wWAt",
  "key35": "4X2t4mMppxRmhEfWZBLeFPyggJtQaWuhpYAhZt2Y1h5Td7vHoegyKMgJwBr9mqoxTjzsywFjz7ZWvNisHyA8PRYj",
  "key36": "4AfhSKd1qn6RXaEsTS42aGhGvfgmtY4sz4GuX5gXDcMFVqFajD3fpWzZhCPDYDKa3UJYL2Sa5zPTEhnTYUgSa5Y9",
  "key37": "b8861xqbp1669cza76XdcY76Cb7ucj7ke8ZBkLNPLYGEwPzvwud2dKLNPtRbSqSmwCstxThUh86Q9aYoQVSz2ma",
  "key38": "2cbxcneW6G5ARs93uzaX3fqB75g9AQk2QgxS5QtPxx786BzgcMqu1YknJCHpvmVyypwnQnm88vrkgEw2TQbdQVV1",
  "key39": "4QRNa4cCFqYJ5WeLjCVoCqojx8sPFu2PQG1QAcuFRMNA28ayEpFnrkh71YWUKHXLn1uKp16RMCrREX5zSS4Hjyku",
  "key40": "UshfFCgBACYUAuY3ydaymq1HPTwZtMgRECmLSoUVGmnXTnccubmgirMTbzMBthqkJk4PLqiWgDhmVhKePyM9Jct",
  "key41": "43wkrRPiiSFkqWHHhJUEPFuZd1iuwv1hkbw3YPSPNHXfeeH9DDoFwbEJMMRbKh1KPqKvFidmyV5KezPtWH4f3fhA"
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
