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
    "4bkBUGUwxNyzHt3W3REehefpSCidTVJtkouR99cLDzjQh5vzsX8AHog4pKhpq7AGFuWfRAwq8LcWD9keu9L253d6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37mzT7mTL4Riu65X73RKgL6x8bbPSEQneNCqgsRDaXNApNe65n6jHsPteHdC4z45SCP8EBnULqU49DwfmaX1WdFg",
  "key1": "5c8xnxU3fFr6CaPm6MyiEzfR35ce3WE6he2TN69qCMydtaiv4aQhD3baf9pkhydaaCZyvXhSekBMqFiPfvC8i4V1",
  "key2": "516fwuUg3jAvB8FCGp14Q7MqYFkhdVkfM9zmCod7YaZVWjkejwHqH4zZ5PGnaRbX54fdUJTpWaa6YzAqSDGfd8st",
  "key3": "4NNkoFAtM3wX2FPL7MfFBVVfrW7RMnPz4xEF1dLkaHZRVSXpkkuQn683sWBGFV3Y1xdLZ9tpM6wmQRFjpYjS9gmq",
  "key4": "3wdH3SE9YrHUgcibcfhakqFSNnbhN6ayXsqGszb3VRYnYs1C1ix6swtxUempkudXGoY48GqJ2cvHSxHEQVrRKdeh",
  "key5": "565LRKfuz9zksJQb8AUyNgDc8DEdK5qN17NfEtkPEBx1nXuqCk8sHJgtuneh55uFgCeXbnzrSueTU9KwF89Hk3SW",
  "key6": "2i7aK5RCQvRrLjGSdLU9KX6PHxTNLpuKBmX5h5uWcDQ9kGJbwwx5THtGjX2Rg1Y5fEL6TLVzwhP9MoCcXhmFn712",
  "key7": "HhWDgP3NDn8QEbpGeo93AVq8n8huRvEH9BWfPN9YLjNnNqavEQMzyPoQmL9X3JRbq5KiaCTaMWCbSz9EjfuLsiz",
  "key8": "48jvmTR7rX1SyjNZwufJ3SN4s65ELthWTkgmTXGDcQ4migf7evnMEv1siQaz7aSHdaqvtpFL7BF5MD8EpFhZwbQd",
  "key9": "5uMdAt4nUQf27vMg27dHkTi46p4KiSb4ZafwmZGHL13YqTkF8wHEH2eocemXR634fs9CJBFce9DqaZYBE2JuN3rq",
  "key10": "56zC6ZiiHaB3kA9vcCd2yx8NnEqpuLf6qRDq3R4eMPtSwLSzMDWkdRQhdrahAYixXT5PG67NsZi6tsY4Y1XzxFki",
  "key11": "3Gj5pNpFgtS34JG2U228yCMdXqCL7XHLVXCaVXApBwcyhC4NZuivsYrcMCW9CA3LB9fLfojjo2UGxrye5qLEiwFN",
  "key12": "2QbQV1H24jgh7EdfmxH4fEPLfga4SuhAe1NuwEvX7PTHcmRQhKRpAZ6QzTCFGsFpDpxibioLm5fzjUGwB7FynbV8",
  "key13": "645GHnj9etDfWwzXLyokVoAx7JJ1QVCtCqs68PqsUTFxheXierDL84ZSg3nDug3FdKwk8mPLGKjhVEuLUb9Wa5oK",
  "key14": "43wpD6fx3VPGvjMM5vxnmKuzC35VS9HWiLYyVyuyJGrabq2Y3CCwpU69Ed66fw9pGw5fUStPYjCz6fWQaxumPxga",
  "key15": "5wDeQ4XLCHdhpaNqsn68Yq7CvyaoXW9EZeXXrFYEVeFMo5HDtNcSMzurLqmLb8zCX7iSYj616iTLVmjDDrQYAMJZ",
  "key16": "3u3ueo57xiCPWYTmfe6FqZAcAw1f7Gx7ZK8ZZZLqfR3EpjEfU33nrLFBevtV8hMP3yUFDdyV5wmt3v5Pqh4NaFD9",
  "key17": "27u8stP4njfE5vgitdhHYa56YsnajitRFpX2Kb7uK336A48fpwh2Vvo7sAfjcWgoZEM2CXjwAW16k6HQkxdw6kFM",
  "key18": "2FbeiwhyvWkW1HkUhA4BZStqq8qvpp9TRPmAvHA4vp6iyw2DahD1DsZbiHrnUFdFMhBHobWL4yFVGiTAg88tEXR6",
  "key19": "4mJXRKzpm9pPDNJheSdE9QVJnuh6UUKnGUfAdveiRBGybyZQfqRoTsRjC4xZciAA4KY3ni6thserbNtc18iLHU4L",
  "key20": "5xsBehBAx9JKKgnfK3R2pCNmxLbuusmHMJccHEJTF4xcJfv8a6zeAot2bU7wbUtb3hQ3won9WahoQm7EC4A2goS4",
  "key21": "5Gr2hgAW7XnP4PiUUCgVp6ZECdCpeFkAmPSCL5UeLVxhKPnEBebbDtjBnkzNKzcUH8uca4HqL1jf8g4zUxTnbWUc",
  "key22": "56QQYMFLL6d4HMBVzvwMhZ1sZuYTosjUy3eUvuRzn5DJ9GABmCXHMy1rX4gPZofEDin3wQDGh8VCQqHSS664VErV",
  "key23": "4UUgnEqCzroMrNf8Q5Q5FhzhQdMKWz2Rq5GHd6vJChbG5y2djntLxmHVwMcVuTqo7aDLNsfoCAbLSuVqgUMfCh7T",
  "key24": "2A7g7aPkDke6aykkNp4bHbTkQjH4km7nWPTwSVz5C6iy5ZL7EjjgH4ETN2YbU4QkVLJwxkZCRHpeWDbpze18LNZL",
  "key25": "5bAJ9KrnDMASwmNw7wkita9vG9bXumBvFDg8td2X2heE4L4UkonUBXANAxQjkKN8tr5HTzPn5eUsmZFNnVKV4SVp",
  "key26": "41URz1LqR7wB8ZPG7ERwDvHHrPZsSnRMQnuee7wZX3KQ1qZG4woMvwrS4mBQLXx2qAwppT7DsYP2azQc1MaR1Be1",
  "key27": "5bkQv2hpVbTDjdtxjZxXhFtCbuVKkdwkJLdpWGMsQwytaAb7qdQg6jCNR3qukfJxhg2REiNvnM5kdKWCV68wm6fu",
  "key28": "248r62txXbAdgdFEfXPt6FfKfssFZZJeFKS4soGb1WWFdrSUacAqoD9TSsHrkBJC9Fi7uzmQSqyjVNgsWbcTRUjQ",
  "key29": "3AzUQ3tmNdctgK2DGVUUyZcSd73h3BefdUBZeWYS7fXmBmaKxqAU66SWxrKmLnWfch8FkEmbh1YN4n9wMgDAeVxD",
  "key30": "2kpBVpmJVqGHh1yKQmzjj3nvm1w2P2s6GwQCRFDG9M6NuG3ivgjosLkLLZnD6o9yom1sQkSSuKxZSng9s8sindTF",
  "key31": "3D1ceKPyxRozNAcnWKj2WXv2Yvi1F9dGpjtkGQFuegiKq9Er9pfrP3pjxgpv84F441ZGWF6eaiKNdiS56Sh8Z7rB",
  "key32": "377mFbwq2vU5yDQs29vxBWcRYebdRXzbN3B5df28eYoRBgKHTJeMKHRLx9aMFKeBHVqZsVwttjVtwrJ4wVxqpXBT",
  "key33": "WEPzuH1Ye5AixdNG9Nw2cenxwvWZfACd5RTG3mdvnriwnqX6uA3ckb4jpPAPVM6B6VhqnaAyEP49yWRMgHGbGQq",
  "key34": "5QUJzHpEnJTLhdfKjuiYa8s9bu56SSYJzddCtjBW7mX1CBQqSjZw1TaNTF3JPaQP4MhejWXhVUTge3E9hZosQuxF",
  "key35": "2ntyxRbNdgfAKhGw1peapfaY9BSe53vgvePRcovV1kJuPPJLeS6bTSbmuqiRpQGb5bZpWttC4x9xuAdYFFE8Ewrq",
  "key36": "5dvtxtRG77CqJivAsvudSoY4DWYjBrboE9zmuT6JTvezCT5EcR3oQWDU9eDfwfhrh8aqFmRwyTA3Z5zA5AedNc6g",
  "key37": "cRNPx8GTW4vpXT2DVMz3gGfjtRi1egCouhKgxBK5NNt7tQPkCqhAdEm1tvWKtEZGcrQBbPEJyr3giqyiWekWKQk",
  "key38": "3Lt9y7HFdZyWRNAx1UQtPiBic52eNt9rqc4qXTwEyJjxg78qDuFLij1jviiqkrTb1buomRrxn4MsSdF5CDtC5qtw",
  "key39": "3UG8eYy9gaSkmnHRRkT3erKaXVmhuk3Pfe6RcwoyCshYcqiBPfbAQACC2Zs5yaaj1jPoqopWLenNtMedMVwxVxSJ",
  "key40": "5kujFBUxcCuEvaa6bBXhKKSoV2pfgNmyVcSqecjmrbxAjUNU6zy9DMMTraADPrEevh1Vx3kzVZgoESn9xE3d2gyX",
  "key41": "5CRhyqskTsPrRqeT1BTX3aoMXKnUQf3ogscCHNeAQbiFKyY2vNxKyDW4f6vw64uYoKKsb9NWG1z1joemLRAtNkqL",
  "key42": "3Y2SNjJW2NDY7ktJ8XxqjNpKAztRAEtCUM4PdM8n7K6weobKa8KPbVrn5itqJhibanHg98Xw7e22NwzedRUgUkKX",
  "key43": "4bsKQ3KeJPNXBA7KQJ97nQ5hhQ65r5sTEnLvjgYrRQjP7FVAu9m8HpZUBkERHAd2QBNxWkvFMd2pDp61yiWk8xWk"
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
