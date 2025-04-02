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
    "4JsmTMa5KRbqtKYXmgt722WXdyD4PNKMmi38U8DGkuqoFjmqqbbCGjy3L3DoR65J4VRJMacyUtKRPk97TJuf3eRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QaTKgfx6bwhcarhcAmhBXRNyVx6vp9knPekoFLs11FFXJyK56DedKKFZ2uMPC5CnjT8paA3rAYXJsHFSm1z4ZgY",
  "key1": "4DY6Lb7VwYCj2Lkne5naSaMD79ehbyKDHSyaB39vUPyJYnjRJs6G7Dyj31mNLq5DKrqjshPgKz4BfgVf1i6EdECP",
  "key2": "4D8F1c2kZ9wgZDF99JDFZ2WHUr8Fq6J7yxcrgRyumtVFTwqaPMcooEan1J3Tbapnz9iJonrWnmETJm1LYZcCgB6J",
  "key3": "4V6BMgXGAdDFywehqXrs3paQg3AK1PR9wpNsgu2f1HGGomQf3cYnqRTJvcU3ihEHewJjd2ybQcjCGhxY4BnfwxgP",
  "key4": "2EaiTKbMHGPg5Sid8qSuDddaeeFesRkW96d1yeoQuUkVyipXbE2prrpjvdE5k3ztqRPhZ8gWCv8BdPUWEVtiAMtM",
  "key5": "LroYLCUdFY83tw41gSbE6e94hUygkcqf34tf1vjzVdCKpm1MXZB8hLbCFKYLZWTWMKUWYKL3a7WLvUHnEGLGD7N",
  "key6": "4WXfQdAKbXCDw4wu9rWBRE7cp5exmczLu86h3KAXQsREjF1ZSte7HNAtGsXxUwKSWBCH1SLhyANDCdcFYKujPZfX",
  "key7": "5g9gBthv4y9mhzKVLDPzbKBF3TgpF6wwEYePfvjUjU4uDMiyJmSxg6iucKtsxqAfSX8UDDJNpD6BxRNBLAfNznsA",
  "key8": "2dzxxPNCS4rd3GoRfuomXb3WAztDamkXjnwnW2JKeFhM3ouHgzVzhvi73g6NyxNi7LjVH3hrkrgUhSjKwdHQzVqm",
  "key9": "3kKdSoJbhVb4cSKnSLiK6BMT3mcJTVEr3cqPj7ZT672Ro6vtgVYHinkaJTsqNKBGgwvcfjrDyZ6w4br6d1XCux7S",
  "key10": "67PJ4JSXKCexwcuQto2FwVfzmFymKBnea92uAdiepqUoL65Nw7THoXBVvTMz7MPSo8P6GT7iGEfWo3wqfQyQgM9q",
  "key11": "bJmTjXZeCRJo754vEs3ykKTAtbYXrW3ctADoT1ADwZrqyNYigdZGYWZDG3iw2Doc3aU3u7dTa6MqnYEEn94YAv6",
  "key12": "23wDmCzBvdrMWfcSHTY8EuzfKKx1kKSnANBx2zTHGQWcQbkgpJwA4Dsv6JiqZ2QNxpjF1w7UNr4N9exbnEiLt8Xz",
  "key13": "5Fzi4Qjd5yqZaJWkgbK6AmFJnbq9ynm1DzSpZ7rDUCPvw61sT9Scvz5yKAw2JWP8dfxPVtaxGhxH5qXuFpdFY9ja",
  "key14": "2U2PKK6Cu7fUZtBkuEoD2KiAbxD3PqDS3qXyAiWQFRzBKFhq6PczjoD2z4MTus6swp29YyjAoxbaRocVhDSdPhqW",
  "key15": "29up6BNKVSWHf25X96EDksCJMH8EWfHRzVkiyibZuXS5nfidoXqXqsTpFQ2V3Z1rDSFUUiGfqJaZ6Jgifc4NRtM2",
  "key16": "5BfjLMXi6u63DLEYjGGYEJq5yKmq8BBsMcBwoLNx4YSebeUt1SsLJiamXR4QbPeYBbNZQzTC28zY5JAvtvtDevBx",
  "key17": "4fNXzjL49Piex5hDimyNfVyg4p2cqkREC5kR87hfcyrAYxFhpct22bqLe9L3LHkevBjVb3p7W97aDiynzHe7FjDW",
  "key18": "5QRkXPqMWW3T7kt5hGGPbbkuqsRJyzihRocbQwQfEKz7WDA46wvzcLmtkxFmrYPDPTFUxrSZGBgvy3EnYnMnpzEG",
  "key19": "QQhaghBBXtLU1taHkRzrQAv6hbHEDafjJhe3c1zgD7nUmv2q4b45sgzqPb9nyh7PVbaqd4GkaudZhCiKwL3UoHZ",
  "key20": "jLs56vaybEBFdYVwb2jfMapfdv5NTxbYbiQHRZzpavSXg3FSxapQASCDD3YvNMoVLxWfGXUPk8UKBb4bzDUjdMe",
  "key21": "4dEYvVcTutxG1S1ykWHH4KST8URD8kphcJeRi5SagSFmzuiV3PGqEtDRvQvN1bxLxsqPMd4CZDQM94a3piUEFNvt",
  "key22": "5NG1EsjXVVdGHCKAbnyy3EiPmch7uMjj6PJyhzDyVSvAbs3Ftq1wTgVf7ZTwuLjAixY7cj66KmXZPkgc9bAGei7o",
  "key23": "2rQ2rzJNBUXSkawz2Jv6BpH6KcNmk6kKPgWJ5Kpz2fCYZEdh8sjXjQbiqjanRF1X11VDYhzYmsCNq1vzeDkz1y4a",
  "key24": "5sevDNVP5Svq1MAvqnAgXvp6iwc8osmY8e4J3fRqmDze2XZW9AnDAhJCWYsCpupc9LW7TBYE8YiYf6j8PjxRDS3r",
  "key25": "2kudFDSNmTGhgVm9p2DSAscqwxhCPM1F3suEakPQQNWDcn7r7j8uSMy7mb3Q4GdJHSYnkePMDmMmX3KxoBEPx3HD",
  "key26": "4h7b3RcCExfxLwAVH26JbZUubiMDnRwC2fivcf59sUbmbiHZPxGRXoBvnq7rm9h4rWH8TXQqPsG9BsatogyJbDnL",
  "key27": "2aQLL6RT2QPFGKRDhau35Y7NQjcLgdFnLtrDyVp4mY2DGNq426fLCtaM7yKRJFEmviPmc2njwQc7CzJCiJ8oE5Gy",
  "key28": "3oTHmbxTevoL7VZFEjscfDtsWVKXWqAUZhto3TvimQY8Wqs8Zhw4zbcrRMfvvv3bdBf1wzB7UvkChhg9FLRkBASN",
  "key29": "3HmQ14HCGSkZPGzTjjW576S9hZzREdTDCgSddGaZWcVQXG3j47fbEY4yjpnLwkRHXAGzKxJFuWpEgHrGeP4bFN96",
  "key30": "5DijNeghVsyikS13S4vpwjS4VePEWWzrkGwGhJuKhCFktn6L6af2MsRhScSnSyvbwnVezTkbzV4Qz1MnF9wFvanY",
  "key31": "29SuN91jaW6nzszga7WnceQLJNV9LfYLZz78utfK3ZWMH4qtXBS1bGeUF5S7cYGaGc3nZ3KqB7pLq45XvS3xpSHW",
  "key32": "21CH7CNFJvjAaB8jE3LPkxPeNok9Qtt77MhrtrBjTCKJxCAsw8HdP9efKq5f5tF7nTiVYF8TyrMzxFNhK9RFYEEp",
  "key33": "2m2qqxKKVxzT7BYmxe7Hq5rzThhvSqG6QAC9LzDmpmCQcANinvrmRjew93UU3MALsPEkGzkLrcTh5zdfxCjL4teE",
  "key34": "2dfEjTC9GJ4V5QzfAnz32Hd7p4fpFTZZ1EJtFi38yEQW3doXc6MoUeQYdAcPeyMGVecX3oZFejgNSBQ7zPW2PnnN"
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
