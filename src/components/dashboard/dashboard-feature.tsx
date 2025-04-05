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
    "vRMbAqXPWKC5WUfZafTQUNdibhzgkwPAiC336GV3RbwuMYtFQrvrc6SBd4HmyhYshGuJuk1t8dA1UsDSqv4aTJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ss7MKCeAqL6JurQ5gcMtQ2vDaBEb3CUePQrTrEHqma1HkAedvByFomM5aSgFNTjb2B1GArnzBmvKvui55cmZEBY",
  "key1": "5VtzEStNyi5ZJBph4gA5RENKbskeKY8fkZX5mdPPqm3dyVNnpGzV3P4nCmXu7oCMqtxynrcCLgxTAe1UwLuhqANA",
  "key2": "22hXARCwjUcViPiM3HztDbARnjLY4XqRXcX7hvdoNem7Agcm6QGoJThw5ZQXtMiEpdiKERrDuCaxxsxmteh4rZcu",
  "key3": "mmuyoJpku7YPqxt8Mqo3C4FuT6NysYPATTX7WMqggWd4n8NnBXHCut9mQgc9rwiheqfY5pjAZUDHmNMREFzGR7H",
  "key4": "4jUZVg6PUpPqtuXW5NGrmni1JPxGecLQkSm2sGqg1LpW3v8o47EWu34MSA9f4GXCjrxxwnaXP6UdkBhA3mK9kpTz",
  "key5": "bnPc6mrudgqPgRpsq1yYWQBFnjQKxgRTCV9RQcqFw7QyngdcEmSMjBAsZW2Fkyj7Hb9u5ytySaPYSdQBU5v3dGs",
  "key6": "3EPmip1J3WbWbV3TJJrD9WAYKmzuwX2TiXkaH2N5q1ZFw3VGu4JuDotZzJxadjo7NhyKZ5KxgbPeiwPdRiZ4fWwT",
  "key7": "4WW8Hr9QuBELTL6wTmbGz4STtZvuFWK72PkhD8q9qRCzb6MSXnBpFMRxyV9KvHenMzjJbvuHRfeqWYFhHPjSDgRM",
  "key8": "4B4ossUnweSwpJinYLj2fMncnXAyXTVMHXwp2VkZrmoTKvUrBf35YAr8GN4B6kDsa6xmarZKuaPfrp7Tow4qW738",
  "key9": "3NnW9hTnJ67DAQgKyG9KZhsUJrc5J3k2hFiEV6npPBBY1CuQk7jxHYG6wRCaPD6yGv676mW7tPqLqCpJthW51TkH",
  "key10": "4xVDdM88Zusjk1pEkb5u3sfLzkJYoLSCiYqncmUQDKy5P1AQMYvXoerfRcRSYpVSaVrARMNntmRJA3FfrF8vquvW",
  "key11": "2Hh5UxrkEcSkSFtVSwPdpK2KSaqLvPEYZbazec9KgSm9HHYqrT6p299LGH3CMBHq6GsGeYRPgmQAiNYzbtd9dRV9",
  "key12": "3nYqzxFNX3AeAP5oFZwnd2Qse8MLEgCTWiMfLnQ7mGNXwSsBELkJFZpC2GYxS11t1EHCSb6P2FbAozV9LEiaudvo",
  "key13": "2K27SSL3JfeZhEKJohM2FCQhsrb8Mexkkdc1t15vYjHXgrtBYzd1tvKhHrTsoFQHUf4Cd6HEoTgzmVSBuBH2BC3z",
  "key14": "5qS2eNDMFTTvBtEWnFxwx7ycpw75Be8yx6yA2QCV1MWmYLgkyKtJu7UViZGrDZpZRkSXqPji2dH7229fSpuj92mV",
  "key15": "8JtQdkBGgzGxXVFA2SFzAm6xWqi11gCENbvRRzZTCQp1zEoWQ1NLAWdmZTuSYgRWvsen1x1wfNsXCfUduLbAbcR",
  "key16": "33Qdo5xz1332SUH92eWo9i1Zix8S1VLmJEoWR2w9hPd6pexpnpbVv6Si2wPRQtThCeUwHC79H8uTdc9BDNDYP8Sa",
  "key17": "5XRxGYhxTRNG7TfdUQTeVd5BzryakAkv2F4V9Fu3BSVV65vEEf3WFEvBhgifcTPgv8NRHrBXBNJ1AhX34QxEpALb",
  "key18": "33ga3fG7SJ1VkyPVnhNnL96W2dKjzfYxY749eGmwb8GZfvk7YRUJHr1pL5GE4h138cBXocxGZpNob4kT9kXtVsZC",
  "key19": "2TdARMsWk1BSnACS6KgU9y3ZQq9J9RRDUXdfv9mFM9hRsXrVCKtvn6XqrAHSn3Gsw9dZjvwbUAe9kUbUHuFJPPKr",
  "key20": "zWkURZo8eXPovgB4AaMAdxoGozYvgAtE3YVM4T71dL4zWcMczSxky3pzvZ3oJzSr1PaVcQERHAxZr5REZy3eXZg",
  "key21": "33KNvMUt8PozazCzQ24o7cGqqHHdBNgk4enREQ7ZkJZVHNa8AwG2XF14RXmLMNhzsHxBqcM3edsohkSYbJfCGx8P",
  "key22": "5tMN9PjQTdvupd8xmFa54C8K52iNxbUBMrmLovc8kFB9WGGai4eRFNDZgje1b6WJXnKAr4LnfTcEFN9dFBJvrEjc",
  "key23": "fKKQSSqTJTsKQE7BWQatszuZftxcEfGJJR55TLAA4LDDPuTmdhpKPWMB18mt6ADSNYeufskVCNhtLhnFuCE3XkV",
  "key24": "4ocPAPCpyYvLevQ5iHZc7UCTgGT3rQ2gqZDJ1HWvSpSzjsSvQX7JSYqT12HMu7p3pkBLM6cXnzaTxQWWwmpCQc8G",
  "key25": "2mbr4RDob4PGzMBabPmdbx1cAFRx6saLGPodrxDdbuphTZiHtgA5Bu7pmYYwceqM8vjxPh54342rWaQ8ewpu4n36",
  "key26": "521YFHznYZR8yrBr8S1iCn9Ujwvdhsddft988M4P2Kyhh2YW4X44U1JUKsovDcsttf4NsMRJBR5vasU6A5Q3VY8A",
  "key27": "4mcqYkQADDoGz4VhrCxDzo3PtJSR3bdbNB8nTjsD7Tk28Nh6RwyAwscnu1ad1uGRvAiWqRHdMxdK2WAhr7oChqq4",
  "key28": "5d8FfNgJS9z5FGmVWTbx4rLr4kn9JL86omzbcsBZLfDeu9XLp45HQzskNCN54g6LjZPJfuzwqRZXyH68HNMf3oRc",
  "key29": "5tjA4DrkAjVqEFbnmzVMkb43o3yUMx1hWsfUmpin8PC3CHih5EAvo1QdVRyhao3V9hjvjjNQNHGohMu1S6nW9FMu",
  "key30": "2yhM1ZdzCMhWQhnxEkozQKRKzbLZiSP6LC59uQuPQGywibxQGN933Z7ynrx7VhFUo6cdP5jCJpBwbw7YjUuz6TZn",
  "key31": "4dEuEbQPPyfM7DUx3QG5wCbwqw4wXXK5fPvWbwu7dLMj5mPqguHrr3fHQ2wHPBYruaLKVaNgW22CVGq5iLa23f2b",
  "key32": "2SaRYqXHZaGt5gw8Kt3JRzBcSNy1CV9atcWEhWLNZgu6euqLAjK4UH7f74rXdeKsZB5nUU7ieKPxHya8pyq2ztNT",
  "key33": "FUSPijHoUnbD2zjS1KjhAvr9au9SFj1m6cAxLAvy7xcRwstYDrE5ouFnAxHtv5yxBZMvW3LinzCfEPxp6vFjxXe",
  "key34": "xe9LELnobyiVYGRNw2nkJVmxn8sTXcieQKejE63wzDn6kMaz1FsQ4HWxNU2jS5Dmc7XMtjunVtoFdpzR2MDz54j",
  "key35": "2DRbwNFy1AagciQahxHvNHArQsU26cRiMdfz69gRD3pLiPjLz3jP4hAefqQNwLxsnKDHSoBLkeT98Loy2dXwPXCh",
  "key36": "2LFY7LNytyVKj2mDZynbqYMt4812hawyJM1b73EUrx3GmAP6DnsSYctCSzw2ArV2SVVFHcRjPpU4KmXJXjmrk4QC"
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
