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
    "5UHeybzd9XmQuLtrqLaoa1erzFEwyFAMgK51cDFnLmfGSmX5ktqVm7S1BvZrGw9vzrVJMSVtwnfM8d3oqM33dA1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MzMX1VYNtQBAdAyaHbs9eHUKdhwVFVkY88UBQ6QjAJ3a5bscTmyEHKrw3uRdW7pfzxwUkkpRciPUGpGzv698g5t",
  "key1": "2CcxvR7P1QeEBFMXPV8cpB1jSw4j6bxMX4BYL8oBK2cc1JJwvfTdL3qip1WXC2W3ZbUWCzrqGv8NKDRqAcWVXmcH",
  "key2": "67DYyLJYMVpRFy2SWf4MSAxJLzzjM2suDouGfrEAdXQjHngdSsK6mUnqnYKTvwJ8hRWF9VC2VyAa9x4PN5rjV4GT",
  "key3": "3YruVBW2Kh4gWeDo7VqXEXyt91i7X6VaeJXPAnTsktLaMKs8CpXVugrF31Y8Kc7dxKAb6yRKeUXToE8BiunBNiSj",
  "key4": "2TaxpP4xB5JtcPaEfXHikqZaWUFG4brjBedaxKaaya4R8UWPGNuwQ8w5NmhZ5u22pGVXuxEuhJ3UsoWjmZJZY1Kh",
  "key5": "3wfUU5pKc2t2y1DnpZy2cQ8SMVgRN2K2TXy6KdCn1wks1W3sbFNym8f8xrAeLQsnMW4c3WGTJ2WR3txKgNLHbQAT",
  "key6": "4xHqjkCSzTYKpPWGn9ZcaYKnfwHgBQMHJGCTvg4SVRkCD6hpCTcUmZMwDL7KY1Jaw1KqZYjjLT2weFvmuPVxxrx4",
  "key7": "CxETXxxAvuzUD1ZyTdqZRkGMMzAspbMupGY5munuH6Epgg7XtdD4wByMsgV5qsj7MwZJxby65AmM7cSYvuB3mR6",
  "key8": "3gBseZu5oqUv7P3G8F1BACmiNPDAqntNhVMDZrHGL5eEr6aVc68ucCx9xRL6uPpNCH84fNWJKAZSv5JFu4fV5m3W",
  "key9": "4E6BWHFT2Y1uK1yXc9a8BiJjj7j54RaHWmUt7JeHysHmZdi7mcGAUnrDkgh62t4CTED7DvSRaFQ8aXd7QDFK5xtA",
  "key10": "2WS2aaZDrfK7W9hgqEVUvzBpNP2M5D6JY5rQzp1w9ZsfRXwt9pQt1R3AEyszXnP3GNUZES8fvie8xoeFgVYH86Jh",
  "key11": "5NMSir7MYemLAKhb87E79SJfwdZoxe8hkDfgzDUqxpPst6Gvcwkq3xNNwh8uRUP9E29HiHxaFRbyCgYh4juTeHSC",
  "key12": "jJ7LatWbaWSqYkjsrhCfiNGB8KWvzEvu1jsgx1nDXarAcJY2c1RdyR2jh1REzCxmfEcE3oWSxEQihqX7owSWBHJ",
  "key13": "WQYTpHYoGhZ2YpWcH1LXrV4KpibE5eys3Jr4p4oS7ENL1XgVnt9qLTMNkfPodmNKf8U9fAu25pjrcrB2jSDGD6z",
  "key14": "Y4zQff6q51i7cToRbxT4MMPo5ZFQKtqXroNLuYSUZBAXc4UiLtvxJKju3UXiuGyq5w618iB4oLBtLjQkkrqt5ax",
  "key15": "5SkRGj3Zxih6kQMv2Gy26wvcPU4dJSRb5GDPHpX3PuQyKpU96BYUohBn8hdGiymxif32NJXREoN6aD3nW2h57H8g",
  "key16": "29UsVH4eF4QJx7d2J6wmJvvdu8RwXZvMEJkEtpAuJRoxiuvq7SDqy9rGB5Q75hDa29BxKEk6C2kL2YL9Xq2p75on",
  "key17": "FM3UQGodACTV5LKRLzhnzAuQHh8hCuEr39M2trz3vrirj9CncoBT3QLts5FrT79EhbPBkvg241a7j2QfS4QfKVk",
  "key18": "3GtV6AUmdEYqLV6xJvEEVkB66mAJQ56hRVA3jXPpaiWKmTQ12jtRm6h9gzqLReUa7FQJC2cXPmvMZLNrCf57brZu",
  "key19": "2xb4tY1bnmKi19cXgYLRmu9JWTJVLBT6HtEuvVja4DqKabTEDFnHJNEik8i2SsW8EfAp72sRRzaSYPdECLJj8Zh4",
  "key20": "4aQz9weAoU7EWhqSynAJFHCgSHkL4VSNnDR3vNcJHAna38kxyDX99PAsDgfFqgiqQL97bP9u9DJzUfo3bd5fzz5V",
  "key21": "33AWh2NUjtsp7HxPLebAuyQnwQj5cC1gVQXwEeesLxFa6Qib7aWoRd6xHqqttHQBxeCZsm44yrFHxSuJex7MAzw3",
  "key22": "4kyvSaVnh5ngyzNE4rDJxjGPNfmbK2E9Nnx2iYN69GTpNsZe9Kjqhbe4pLP1DXiiJMk5wU7EXh4mU9EQUqQAxMJ3",
  "key23": "4m1ndNekVSicsUk5QC7ZgpQ5M7WQ2hKXJpiQ4VgRkkeWy8gM1YdvixHCaGq9PGMxRvUFdeUxsnahHgvdQzTChiFp",
  "key24": "5ZUzSDWmP8m6jYX6hYsLPmThiXcUKnLt6M3CMadGWSwexjeV82obx9q7cF1gFowvnZK9k2yXKccPne9WRaCTm4fP",
  "key25": "58bqAX7KGEZEzPF3J5FKNN5wMXYMxjQ29PFAwAdoPhqgjvFkQv7rGrR9Tp4McpRKrdSQFuu9io9dwWWhRPkG8BTG",
  "key26": "2HfjRMBExu1b7SLcVKNmu6KrQMVg1Yd3RQ1vjrQEHEZ6fk9zyNwHBKiPJ2DrmihDeiHSoHezKdYUvXLxRj8EobTX",
  "key27": "4C1A89FPNzFmzNPt8qC8ExEUqir64N1dFxeztRFGJg9iHJ5SB7dL4nfmzu5WdKkoG6ULVaBy8CLoSd2sYBDggimP",
  "key28": "zoPNoMDYwwSdqcyDCMw7iaEiqEjLRWLqELC8MHRoW8PgEHvtpDXBnkT2JxCTpNZVmL6XZ8gYnkFiUvdA6dvvQXm",
  "key29": "3hNffs4NirUmvSNWxoV3UiKjKgxgRHSSne4jGHCGdNMDYULueGihvz5qV8rzP27C4P3Cw82xsciDAFaEMaiWqwee",
  "key30": "2TTG6ABHqCpigmQfqToNdMhnKPqRJ2Yt5RpC529obeMX5F1Z4veT6rbqdB5vunm1YpMTv8AnfYPHrixHYdCypmP7",
  "key31": "ciEfnXydnQMck16mnZxxvmBSskNX5m5xRrHLdtXh3Tr7wNhBAHgH9LqojajeziY6UECRH3BnwaYJDWoHkHMfKzn",
  "key32": "3735aX6hCJTxYAnHE4VVoQm3jfM9HMo3Htc6nDKrEJjnCyKhsVPZ5Y9wBjdL7zYQxYjmF5SdT5V2YtPLNHtp5EcX",
  "key33": "5d3UphTLjVao5ssyRDyrruRxFgSfDqcjmPC1z19kMWgan5x2iRoDL8EmtK28PfRyfiptvFQLB8h9qfo65hoyYyxn",
  "key34": "LFojhanK8izyUMjPsxEfs6x428owCXWsWcZsAe9JxKutPyB4eY5xzseLvBWgKS5LLPFAbDJuxwqZaDbm9bTNZ2B",
  "key35": "41eaAX5yQ2cJ4x3TU5kZ9CQkjW3Ydb7zKoyKQDYgnUx45wircXiZYPjKyKs5xjuWo7ktE9V8AepCP4YNGAscdszL",
  "key36": "34fj5AmWMeYNi9U8aSnsg6rK6AAendJ3FAmhAGhRT61x1KNeDMakBUcXBvK3Vd92xx698d72xr9XPMTC7EmZ5q5A",
  "key37": "5cbGe1BdVRmz9mx8J1VYADucgo5Z1Z8c6Wk2xidPogwU9gKGHyuz4ByCs8AHaSniQvKmgNDKDpTZiScJEjhQoVW6",
  "key38": "3CRdTYxqwEJA1sKej7y4entYCF3dMCi8tR982jAsELRdusX8KuGEkmQNy4JAvnzdDgSc1tWVa2gLBRX4FKzf8tqv",
  "key39": "2pu4uPizyJxWCq1qyMtAAXHMwiRsEvmRAKmFGjZg9DDRhpioRMW31J6srrKZPYUkjjNxuCQahooRhdMkmFDN4XFC",
  "key40": "ETqaPGetSPbYswF7hmWKfbegSp1HSbyLUaf8BsBw9Wwqc7W2jxXJFqkwZkG56eNFFbXc2vT9YvXizQG1MsgKVW6",
  "key41": "4adrkGdQvKm4J5aUewCU8RyVL5LXKjNiZtyKGL6y1SUmv8sP7cm4nhg7169ochYNctqNwao47W4aidovGTzH8qsQ",
  "key42": "a87opAZadU2M9jrwVzkfraYcCD1LJkhoCcfZWsDgUQcTn2S5SnFzacES2rTEgMoQdva72FD9VvGVjoambXsjBh9",
  "key43": "44J5HAqQuxFhbSKHWGvqzRFHu5KknqrypeVdSpt4pGg4qhWPMgTD5GEDzb99uswyn9WogTgZ5qvtEeadnsVc3kVz",
  "key44": "3d1kLNnPjqFF46knaeUnmWf8Uz1JGytMeptHrc9rW5La5dJJoEvKG9gXo9HP3WGqpYfTy34Vj5FFbdwwasKy7yYe",
  "key45": "5ai6Ec1RZsPFvxrCA1AmfnjvqfG9W8pWfwE3UFkmjcc26GTsEokV33dg6zyUgr9sT7cvuapxkZNsJnLqMRSRwJhL",
  "key46": "4M8fLGdUj6rsa2DaSjR1ntT6GBwGbmKMtPeQxdbAmD6fADbYb7oWft7ysgqqQLQkp9JZiqPMGE7HnywfHssNeZZd",
  "key47": "2F2CJhPdLUyW6RA7ktyqb5y6XXVL8FPxb3sZ9uEkPT8bieiKAxDfKAxc4Vqinobwj5raR3gniyjrJdAcSAybJnYY",
  "key48": "2bhcP3mogtXqnrUMUHS2pFarJ7bhMq9b5MXpbXJX1DbFRDGUvi5RCGYf3TZNMofhYzGNwYSSvd8vApzpyYaxPceZ",
  "key49": "4o6owmgsbZfg38KM49jJyi2k8xiW2QdjxgzQkqn57iTLEaquPYA7a93CAUaa4ZVXkSQhfHmBw9H5yA45AffpQEeo"
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
