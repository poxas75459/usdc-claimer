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
    "49hHTXjbor9nLzEdxNo62uYuaez7wMMviTGdB3Uc1UKM39skpT5NSUzmn4MX4GEhU4jUn6a68HCpquRhcLKCEmrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X469WUEAvMf3PofFtMNYUTMQRxbHHHpuSs5gsz8BLap4RWxjsKrTGDnadSiGvn4Lr6C1hU27UZkuMKNWfz7fWcc",
  "key1": "5Zb6gaLc1PmLhpWU36F7i8SXDbTFigFVSfCJWfvJeUUDoWQaKwGqb5tupuNphah1zMtSVbWQpTemmVEw7CdR85Nm",
  "key2": "vcEyHvJPuxNX6KCDYMGP3CmDWHUw9ddNKHfeNhwiX1dMCXYWGMbPPYhTj3cwuALLWLVvqvscnCyqpKpfnXUDpqR",
  "key3": "2GH9N4cj1PxvR8TPPDvqvUTHibdfJRi1MLdN5ysF2Y55eKy8Mp23FFABXnYB4vgD5XtasxDkUzhPFszg8UiYiJ7S",
  "key4": "2SHAtDjkcDQTW4SGCJKgWdvPKSesv48y7jNCVqpRidrH3ypp4MdE1Y94tNK3XC9qLvYWYAjuNLX4njkzz4ApNsaj",
  "key5": "3skGR1r5KMXit2ZQf6S9pyjWH6dnRX5r41gvyDky7nfWMoHF1FGsBJbrFvsu2QczdhxEsmGYNzLrdVt9vcjuax98",
  "key6": "2wDrUWGQizKDqHNqEXEsYQTDxX2SZB7625AWrSYopb9J8vzpp4didkVnuY9TNa7pTTXaCHjk125se54FJUj6G6NJ",
  "key7": "63BfraiGq9UfDsWgj7YxfhXvzXTpJT3PKSFiqBfpRMSqr9EHVHym7jvKtYnNnqb2AtVRbyZ9D6PqGqiYghRQddzG",
  "key8": "2AfV7fu8EGF42j5SAQJ9ekyxJBwmthNevoAvhWxwURCH8v5R9Uf3KArQExyS5axc1GptWV6REiWE5SwjziAP96tz",
  "key9": "3LurNYxwQ1ma2oKKcJtpwSRiTdEvXKCCaXB58DPRyzWoZLXRn74cbzZvvTXUSJxKNnQadQsu88jkb9xvibGRGBis",
  "key10": "3S2ZCnq1R5wJbYX2kKvWnkLd7JMHgspQrASprsjEumg41uyQMcdMNCnAHCYiyK7eb4s3GTHqG89C1smmVXsjs1do",
  "key11": "4hwD6RdQzEorZntPpag1BUrZvhZQnRhHn9tPupN3b53k4eoFBpbqBVWC62gGJ9oFHaSRRcQ5Y17UN5KVzPpBbcVj",
  "key12": "5G6bQqvpEUoxvL4qseA3eBiM1ZPtSMTkron7kJfEab77CbFYKj8Lm6WB6WdBef65zVh5tJqFXa8yUj7Gt7T8YoZB",
  "key13": "5TE84FqGzLPu7vPLuYFL2Hrv5DwbW4KvT7H8irp699rpPgdMhJbMzVFM7dp8qjtfHvMDp95p1rm78xQX6i2z5fhB",
  "key14": "65EApNahchsNYyKCCfM3pTGyi4EZV94eATb6aJoEtFZPY6P2CBHQDjU2VakDPtnysXZjrkiTVuQy3fcvFuwmTTZz",
  "key15": "25zeJZ5T8ti5qDiza5NRbB1S5chffe5qgPUiPTo6WY9VwpiLNmc8bf7mHLGZJf1U2HAcLPxfPzfq2emcj9hbMgZg",
  "key16": "5BuTYtkAkqTTt2q8C171XLSb2iwnXFRxAkhmKsEVJ1ARjHu4HwcgYxh3BnnpTo65TAZAShBUNVSxqhQacjg15rJZ",
  "key17": "2vsSg1LWpVgxvyEg4YkB3whZFZunAXoijfZAEfhUjwomDGPmRiv3ND1fg5VWRBYTgNJk8JbKR3SwHaFcQiHXaonU",
  "key18": "5bc1ac6wrrq4Pu1811f6Zx8iruUSR5rhKNE384N3TB1XY7Z6HMLXK7DxsCzf4HgQ7bpcaEXNXxvmAWTT9yip1JTV",
  "key19": "2etCyuhNf2CWh16WTVKUpiS2qSVT8M6c3BdX5BNSjuubQvvs6zLSLkBZB5VnGxoAcjGMHynU4natap4AY45gnkHP",
  "key20": "29xQsmD6WTWPx7gBGQ21xYYY472dM8fqBQ5pzKEf1RT5RdVmbp1jJrbYeb65cwJ7SvLvmC5KXsHZAw6qbRJ5Tar4",
  "key21": "4tge6WWkm6DnToFrFaSgmvzLBncGy2f6NRHkPwnhBL3BTGGMJTYbqNT7ZYawUaRoktx7se4vMnsUg1Q9vMyPBG91",
  "key22": "49jzUZsF3UfkuinnEfXck11wTBaaCRfGUXueJQLfnCduYsD2PyLVsgbDjGPZmYj8Uer2dsvdHRC31pU4r1sWkMQS",
  "key23": "5QuQxKu54bJi3vKE549Qy6FjbcWkYCSYGETUdcr412Jv5LF2BXGeAsg34zkbcqGRg1zijkt1EU7iaUJR3ZV5Rdvq",
  "key24": "5ZzXuwo8CzrTjVCp7WwhzruEPJ4bKz5g4C6SwByScS7z1hZs1ExKtbE3kmt4X41yH6niiRKpHMUzGN3yjPa1CFFi",
  "key25": "wF95BMhfC3kDpGPLU8yraDq5RweSJS6veut9Unvhr4LS1jgawZJ37ihVD8wLZu7jPCUNH5wG9BGcLdmmVV61w49",
  "key26": "4qt4zDPKdP8PukMkajYH46qDt2CXnzy6pJ68kyoduyxrQQQ5sAsPuikav1SJgyWnEacwsook4pMjR9vdbwc7gKHW",
  "key27": "3geqAcUzDUDHGmb8NregbYqmXmB1tGnGvk977RWWmYAL7oz7kJmFeCQsEy7eWziR2tbNDWZng3vjc8eWWGYpP8eP",
  "key28": "2kzyMWajRm72rWxB991oskZqH41UgzN9fXfBAx928ifPz8YBpBWWaRtjVfoEaofG5GctZ27qGEGWL3Kg9DHx3gdX",
  "key29": "22PYJV5PmtPYuz22BLUnAaNPQcMebxpuPEbSw1wVzEP5jqs2Zs6EfvXV2Pc4TLtYjiRyRypa62A134hVszxxTyR2",
  "key30": "MfwxVtvPN39MkBUbE6QWrXUbKkPGcdHDWaAvsjWYYwLYaZWJWbgN4me4XwdEqHTSDtdB9jsf2Ex9RdPaSkPvBqj",
  "key31": "5g8Jaz6mcwZPEPrMp1C8WKGQVqWrDDXPUpsxg5rT2xd9hfi8Hh7AUqDzbvyR2Lpva7x6e7J3e5kpfdL96LGuoB7M",
  "key32": "5iQvUJKpEq2VQdYVYeeLG6cLFzNvBFZb93foXhJyALcxB1t6sFXEbtCYhCsysdLWpph18bWRkKqfJG3ytpMsJJnc",
  "key33": "3UZLMj3yVB9miUVQLGcTKkWNFauY3ZpyqJbZZQrYD9GRENrFjF2PHq8f8bHLdB3K9AbP7qmFXaADxCnm68wEdj18",
  "key34": "4HKuhMRNsJXVhAD7V3tYV2qaCcrnHfxUuT5VzrZGE6nNeWfFNkWe8y2PZpnCii3kUzjcMQLhfbzKdGM5ShpyKyTA",
  "key35": "3a6R1JVUByZRGGTRvzhVRLPiDthaUQvHBUd8r79gfpiwFUeXgANZbFzwgHWRq8feoLCoD4XjkGBXpgTrzqFVdj4g",
  "key36": "3uuNgwBWp9CMLzBip842j9BnLH6NdTbWgSYiC2kJhKW3pm42A5sw3mwRreSsCDKouQZAtsVf3s1dzZZGkzjHj4ih",
  "key37": "qdPKeQus8YzbpmWXmcAuoKGoX6qvVKcWBGCyj9GNfJoVr5iaNmKM8J3zy51oHucvP7Z6vLBuubaY5yrc7Hmf1Qh",
  "key38": "3FXLe95abGukqUvjqtB3e3yt3zaHz7qRZ1oWv6uWs2komS3r4jUCo9vCcVZmWFHD24NWeJmABcBdgi7L5CBCLajF",
  "key39": "So4pqoe13hhLnFfwCmrt59CcnYAgcQfE4sgtYese4z4CVVs2tVnLyxwyHmU9Nryb7wxNNEN4hobKgkB56SwYkMG",
  "key40": "2tLwu9iEVi2m3NWiVTk2m8Nofec5PFvNPL6qPvwFcmfoaGvDv4NqrnKtUnAckrRPyeH8We5q13iJEJGubXBohkWS",
  "key41": "3cTdxmA2jwhu3y3drd6zyS9Ddyvgh55SySVsbj2UmFzmwqRaPwycFFZ39yoLHEbUn1nNx7Za3uyS5877u3L7uERe",
  "key42": "2FbV7x94fiSt1jzPQ97dbjwQRNVWWBqUze1CDmAGcB3hTeQtzmQzsPdnrvjksFLZ5oD1gN6bfBMcLEdsyzd5vBhn",
  "key43": "3oHZXnY7JVPXt7XXMGyFqsy8UvBBVVbhEWA7bCAztiyus1ySCHgsG8CxYa17AZBHRbBHWfRL4ACx1JYeqzGfyzfA"
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
