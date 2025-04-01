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
    "2z9vyawedpi2CsTUro7kgfvkZ5UcnyUzTuQjy1TynxoCZwtpG2ga8YbyMU3i8kwGfdzcGq7i4RYGCjQx15nyMF5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KW4QYXEYBsThQvjah7yrE4dEVNACh6dkmPiXXtTJz6zvZbyp8Z6i9YbcKvKSgvtdMkCuNufzJi5rWP3CmV7mqSS",
  "key1": "4HC9JSufWGkV4v2W4obzokzy6cThzQy88PGveynkvJFPxKsPLMpSVic1ZBN2etGvNv9tvjrt8aNHJuWXCfys8nGD",
  "key2": "5Ukvd9XFNA18iUwfYaib7EYKb8K7EcFS44WqqgehJQW2A2qHoWFKGBEhmUTPZpX7XG9GawbFKFJYRihqM9fhBnNM",
  "key3": "4BFWMbRW6jJV7N1RDPjaEWt6VZkBvYhpJ28ox5AJEqMYMZQAS7H9gkEGVLLjCWnAWKovNRxnqcAqC3HFTCSvGMjr",
  "key4": "569RpjqZ5ZoKP3VYeW5m9QETADtU25jZxqwmA9bcPTNwdefVq45ouDEEpZeCgy5Sa252xPc8hcJWqShs2361pnmG",
  "key5": "3U2uV6w5NCZcub8rAzkRB3FYFpiNSxaoKmNziQPTpa7AbG9egvpWwMK7JvBXWoApVPYDAiLXaz6rA4EoxqHz94MD",
  "key6": "5BXY5uf62ijFHWNY4T5SMYQ2yriy88ExKpkhZqDVsWk3csqG1djiP5rAx2tSkPBjuJs8MsMW4UZ477NYRnUxvNij",
  "key7": "UM1FK9mGASsEoKGVnCsT248fdNAoqzZELf6XW8DN1jPyNpTkyHm7Pfqimy4R5eKz3p4dRHkGs9sg19FwXsBnNEg",
  "key8": "5qDr99JwURvdnkAvAm5ZJhUTeXeLnatNAYYnhPfVygdFT8S91N952h66AvMAxJtwB5hkGBP1aEZX5WSXsAjNr2Bd",
  "key9": "4pE4s74WmVJ5azaLP1ZBQcBTtuMQe1n8AgNTunt8raAZqCpyaJtSnkw3ZCH7sC3Bh4Tufqasa9NdZNsnP2BRcyV5",
  "key10": "41xuasKb6CpouSSWNuFzcyeDfvch16rRBpF3iMvnVUK31EKLYp5cXaRZqA3tSctTpXwGNM2JUTwb12CyGa1HEKw6",
  "key11": "FDKvLRhBkQA2JJwja6srd7oHSted6Lq26JV671ztzMi8fkb34awG9uzzZC6Y9uyVS5vo4eBoqQh5j1E3DjGjj9A",
  "key12": "5u7zwwRDgBbAHPKbbMBCHKTQGZUnqwWwDnYqCD16DJ7DTuj6GjGo1fFuZicXQzQ7kEiLNrqN8YerU4DqViPnbpFC",
  "key13": "EcMVt8Luv3ugtPaupRvuM4cY9eiNHzxYoVkeYFovaEEepHs4f4Jre5ryPx59XsS2PQyDJEwUiB3w33VLfLFDmGc",
  "key14": "6253xkehaCNsDr7WqMmEwanUj3YTcq6CVQgV851ZncC4JaNfYqwwBGT8wKfiAi4Aj8ZfiizxTLcXnJNU4gr17Lx4",
  "key15": "4RmPjPuq9KV78WcFDzmzqC9bVkWTXDkFxQJXRDAyae1Dhv7xjZP6cn1HMMe5HhAR1hTBUPXpKp3kusx1CJ5KX3DV",
  "key16": "5AAneoyLewSgZweczA1P9Y6R5e3s6hPU6fPXZepAer7PdPwdt9amGCNvMwNCD5GwcbFaHNz6HD55kgT4ENaTqaux",
  "key17": "4FnvNksCnRdyiVcvRUAyAKSn4H5ZKbFXabF4mDFwxAhvRgoadXNP2Gf64iSXy1jXa4JTDZSkUot44NMb9dHNeAwN",
  "key18": "5fU7u8825iVQqhwyaEKXtW8zRRGFDEG9siJvbZtzbVega6oXwkBd45hJSkqWUbDkDF5SiVqyHQFCgm9Vs9pXi968",
  "key19": "D27uKLHnCkgLV8i7dpGPiTTeoLLf9ekapSaRjPv2TCmnMEJDzGQDRRdUGEXEKg1HPrNCLXgdScFnG8KnjopLuwF",
  "key20": "49ovTrd9DNNkUfZY3oSoHtozCwZgiHop1cK5LSVk6GRVTs9huFGhJHZnCx3ei1ZP8Beh3G93jS5r8okZQxUDhwx",
  "key21": "UzSycNsjQf3dsnbHtxX7QaB2NKFqwJQw4XbcU5QGXqUYZ2QvajuQCHNWJcLGAQVNxqmETZwgmFtqFCNpvqw8LNg",
  "key22": "3AZd3ZF5EiUia6qDSGB321FFBzfryNWGTtYR45d5jPvweiehBNk1oKnzvtsFQqEUz26bbehhXTMG73nurcbNDkrZ",
  "key23": "uhtyRrDJeZugMkfdsUuv9wgqRDNTcJsQCUgdzk5NEM88xMWmQQYBX8CYUfsvpV8efvYpZDrVJNfHQL5T8ynDRmE",
  "key24": "52hozCDpfPJgHBHUbWjiQDzVtBbqnHY1xj2KccWLB9YcgAq6NGxjXQSFyPNQuHvWfU9xRUR4ZhGPqWc88a2VqNBV",
  "key25": "2YxPYXJPeS2k5P2LZACrXmKohQfqjia9xbpaLxrJRug22eGMRDCTaRv4Qf5wVdQiFv3LVBYhBZcT5BGk3pPi9PaC",
  "key26": "4onAv6D9YzaxnsTcyJthCaWXayWT26f6LC4MeTQPRcXQt5qjVy8eiLDrdTCpiBrt5CenAUR74JBMzdVFPsiT9JQX",
  "key27": "3Z2cAsMgu4g38BEVVhJWmGLgpff2LUttSofRgZbifrxnmEpLSMqMk4Mjy9F9Wr6BnndcgNRrA3V2jS2iG9WZppa5",
  "key28": "4VCsFCNkuPTcCzExdU71A1wig3ye1NK82dhXsZVRH8t8qjWSMxshmcA18SoSo5gWZgoASt8bwMxVXyMmxymyAbBw",
  "key29": "GXFbNwLQbRQbPt38ePC19eq89XCEPF2u7EBqVcC5CY8NpyikgYvq9z5eo5Vg7XGmmqhoCehzpB6ossHcTzRFGJS",
  "key30": "3MbCuztLukGTbCMpsDsWt1zeHkC5VkFjZ3Yra7nhFRdHDECFPPAgDtuiH2GQhHop6R9EwFY8Po4mTUNsqwCymAXU",
  "key31": "3rTngAXW4KxpMuPEvWKMgpJ9P56bTjCwJM2qLDDQ1mB1JnpgZenSjYpJrH4cbW1hRvHsgRHigqWmUQyQkL3Ki4FR",
  "key32": "3AhvV5QmFLbf8GJz62jYtjL8cgy66MWAGoen2nhEZHyNDvDffCKt1Q6s1UY8oRX1w3pMGfhGCCEEs4kCcjh6EfhL",
  "key33": "2eZ1UDJpn8QMoBdbLwN4zGeb6d9D3R4xjULXSgTsx3nA1jmR9FRimx7B3FCzLBJUrjh3djQGb6enmCXGbHi9ziUM",
  "key34": "4Z8MiwLeFzRBbSDoXPd6WGsYQgd4dsJRNpAPVDowLL4PmfU9RBNuu3VG9i393bK6tLn1zTP155tK5JiaNmcrBweB",
  "key35": "3aSc1Qi1JuKmxwLnF5DWcifmCA4M8W1ufPZc2i7JN6mzBNYPpossqDiKofFHKKCyNvSjLzDTbzS4QUA3nzY9D8st",
  "key36": "8cWtxuTGcpiqzsB4E2RwXje8UvvvebKXBLZiRydiPtUKfJfcVPeoPYEb2NG3eGXsTAB7YHio6yPrjVjdJPCddi6"
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
