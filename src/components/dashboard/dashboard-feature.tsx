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
    "5qZWtQrf1nfFfgbD2udcwXW8xfQGur9VmdVMzZ9cDfqGUKsFFegahWdaN9NPFoMc4cuqUhQcnngu3eMWijFSt8ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LjAT6TsKPNnW3D14YAJBYihBr9tq55aSbr2GiEoWhm8M4SW85HKwuw23cUD5PGwm7ZBjsSU2Th8pFTe8DEgNuNN",
  "key1": "2KvySr9pxN5i9jfoDUPpxDmDfSBwZXyUoSSDSTGHcavY3b4s54QsWpn9aN48RZ5pkF3pebokpwo4D5xQvmJkjqdH",
  "key2": "2e8xyhhhs377o9cy4cq1uYiErXRUAJYzd4s1SHxWdZ9Z1W4xPkxDCzdcjhHAMbJqqJgKvxQuyVYxUnZXcegchwUv",
  "key3": "RD6z2kKUbc9drkoqJGzKrwqDuQiVAATcVBcWPPcP9BjtGDa2UiNhtpVtGJ4irLkpJEDoHjGS2FBy7L8mPvFWqBG",
  "key4": "48L6vTqnN6QH77Hrj5FeMPt9kD2e5rifqw32JkdTMtDS1GuBt8N4fm7ag6TjALQk5Nf3KKcbFz6CMmidLs6oN4Wa",
  "key5": "K7vyQMEQcHhCGvzrzdzm8fwRfevJjka4iD7EgkQnZYzBDHyN3j1913jVzsqLRAvvE6kRLuDJbjeshfTNkoa7vCv",
  "key6": "3EGm5jMJEMsz5cVGeqkw8CkLVZB8GUVZGsNX1ZQu7nhTH1JMtb4bTaogx7iX9WT4jMc371pF5N2PQZzn6y8X4GJf",
  "key7": "4CJEE91UYkNRQnb16evYYabKM3gC2NtvuqKHeev2o5xmkfVeGW1wfL8zj7tyeDZAY5b8cu24k5WvcvU5gssaSGSk",
  "key8": "4kB1txw9TQBmcZteCQoULAz9oR4ra8VWszYKxCVUefzw96USC8bMmGyhGqMhmjy4kgyXxEr2bF5uCN8YM47ctDWK",
  "key9": "3K5q2oMdkMP1TBsndNGg5t4YADHdSgGQPttWPz49a4faTRHnPWf2HCUPZRJN2inxqQm7gCKMfn2JFWBn2uoA9mmm",
  "key10": "a8HBc5vttEhQhNd3Kkfwkc4ydDGW7Ks4EpQnsAuj8SnqS2sBDrLHc3NftgAqMPWw83gQwwHKNqU7k4HJ6PPLEbe",
  "key11": "2A7TZbDB7sNtNDKsLg188dHFDLRTZyaPRduXXYPB3MR9JJT9atpKovV59s4xUm7cZ1sEMfu5Mnng9Rgge4wNFsqt",
  "key12": "KJ2uxoEHEz2v4hG2QdewqTyvBwZm6p6kbnBKJXN7bYvEnYN3gNUMTNNTBfE7iqvBihfbwmPmoxzdkL9L2znNHqi",
  "key13": "4hq3BGxJSXbwNuzhP1HkRPUx8oV3UheWxmfsY4QkeRcKSnCV5UcugrMGMMmuL2rGGXfHNmunEVUd8SXAk5acMpEe",
  "key14": "5W1VbwtZgqwo37C9o75Lmsq2S8g9DFKLR7oUYH2Yg1xx1Xx4U7MmUfX9aMaV7QqxHBr2Es3aoYivXjmeP47evHsz",
  "key15": "31evpeuuiBg6eHDnafBoJz5kiZnEoaHAcDQj7NQWCNDhHhQRcMey49UsLrU4z3r2x6mxdcSYAvN2N5zCKPRtLP9D",
  "key16": "2b4khyJPDUSsMcZiiTxfYVDmNZzNup7QJp8ovZKfnt9L8sLheBcCFeZMjuFYywGWbWgExNe3aMpcJocTscriP8w",
  "key17": "4hYBv5zq9v9U21N36VHagRyGiyFh1EUDGNR9razPoKPf1c6dKQaPY2he3g2Lq9raVKeRKEkp9kHmDXTHCPFz7BHK",
  "key18": "Uv2YUf7ipJLfLgLziPCcgrqSb1EjjkoUSBGmvQ9pns81QDQJEUHgiyZRtyHwzXnkqx4PcvkfhKZYkFHWFbuakJ8",
  "key19": "3sdsCXM3x8p2KtmPzVy1e7UKa8RJWbjZXCLdfui3AXpkuizLJXQZ3uJxuyKoK9Wec7fA1PsV7Sqv2ZTg5ynm2ntW",
  "key20": "sbqa834K1p99s5ZDWv1HiYfdicNsa84VWszyaktSTwirHzGmcgkj88FKCrsKA4McbVczezgASE2bpYSdXZJALfW",
  "key21": "2RKNPUGi15unJtfr9oUMg4XY2GkTNNiojSUEx4ex4jNUtA6m1xbVXAHocF9NggpiPDT745iEXHEfmtW6Nwhe8xsB",
  "key22": "2ju2bR1TxUBvDaexoraDL52LGkWdrAmbaj9ScvSvF54rCCNGHio1apcqcs5LmccifbFwjTq6BFAL4D8wMVHhD9WM",
  "key23": "3fr8QBuDQbByRaWfbcUg7FgzZ29jyHNk7ohvnvBW4UTMbb7uBoXqPyP2ys3HPg9Cc6sJPd7B5WGe1BjQujbsiMn9",
  "key24": "4CbtRYdDtUcFSciM8TJMmhZMCfTwxGJDkDdzwkk3r3GhDtQKPFWt7gCVMo2wm84hXBXUmbkR6jngngUSo7Axdvh8",
  "key25": "26XtUqeqZ3sms86TL7MuvEce5hXdCTmyh7YV5zcZ54Aw2ZZj7EyTBPN1rsQPsuqHjzPPSy4S9nDvBgUKo4rqBHEi",
  "key26": "3ebg7XcDHjEqbU1YeggY9ZURSWs24543yptedTWhLPYPbSqA9qDV1KQscv3W9YSAk9MnmY9SvG81Kh6Zf4RGJXBx",
  "key27": "2bb7PmbqHS2pq6kgD7FRnAKXLqWSQynjFuZmAKJy1CGd4V2X63NpaWvUQUR7FmYwu5YX8rRGtJaza1KJAw3wYUcn",
  "key28": "4bHmc4bqaDB725vgQGgNLMhyJc5K5MeZowTMFkcZ2BYx1eyNkxoLPWKyaKxNSF8sw2T3R6MtVVETEQnThEB6chre",
  "key29": "SPW529gzf5LSyGsk6bg7sHAQV7BGJWrtruTaQwUM77MFy6mQfBdTg4jg9hHL4ccgXMSjUEx9WPmHCtSaRFEthRg",
  "key30": "5fx9FuaQ8pek1gecBmTjv2TrJWBAyxP4NhPFp7MKoUZgoYcxyrYbmdKT4u3XY7yYNT5CXnobDLptvMsGuiBAMeZf",
  "key31": "2d3Nc55VV4UatxdtUUj4dFSJ9zfC5DSEhcbGUVjDabcnd93wwhJh6xvsAK7K2chsuvG4hSkKBDLenRGxLvhqNh6c",
  "key32": "4dGwU5HFXSKYzGdPS5RZeM2LRwytWc3ZXRNZP2z9x4R3ZXX8EbSMapakjdHQRFChDyV9DTgPZ7QK3yUNnsWNfxqf",
  "key33": "3AsjzvvQrw4xqR3wVMMJJTJsCm4zJdBTaHXFWVkUqXnzaB1JDaYufebLwP1MgU8dqrzCcBWdJ38XNmjZ6qBKLMab",
  "key34": "54oeCfnv9mnVwmi7dVSTaeZe9E6aA5qPj8frK4Z1xWurTLVMnJDixhaj5u6RdgobvLwygoFeD9cSXvz8BPVMM9kg",
  "key35": "4EPQD1g5DiG3BmMMZTe2twoFnxxv1A3LNGiaWokSpHHV4gMDSeEFoWED37LjrEUira7JJZ5NWjcyKBumZVyvnXBi",
  "key36": "51ZEo9UzzabUCYcYo96emXteRNANNtbrDY6A2NTh4JHMR6NKj263fnAiuGZNgAcATTc8pE3zyu4oWDWDhbg9J1FA",
  "key37": "1Tr3fPYb9z2AqBXgyqWMLyT8ssbvZs4QmVC8hNh5M5HAa6UQTWK5pPAr1Wm2sU2Qqgbmswm2sScjLWTWovUefRm",
  "key38": "3tXmKAHUwY1EBCa1AjPqG9jABYEZ8vsX5oDZAgLPg3YNFTCR731CJzbR74Qmj4BDW5fFEZm4jnVFx8VUx7e4hL28",
  "key39": "3Jh2R6yXgbuMUr85jMmEmMXojFqWt6zMYtbjBpei3sSgCCtkj7qpP8FphS3DRyCuA4XGbpQTLsBzxQ1j2VzUCVzQ",
  "key40": "xcvyq861UM8WsXNpxDFhEauJJY2gKDKNdMRs8ST5Hqdv6Y7mptZfKu4AkK9MicVWa71PuwoLGkh8r5E2swHvnP5",
  "key41": "4BsgYxXb9dEaUNtTJAsuA73Ho5R1R15iLEovjkXBnibFJyxAr2TjUW4KPasQk2sJJcNuJwethU3bhftApcSimL23",
  "key42": "45gzN7sVSN6HnrPf4vydhXXkeynP9q4RPzkc3NRjZkWpfu2tjNodhzs3YL1fANgbG3N8qTJm2NF5tHii6UkoQSK5",
  "key43": "3c36ag6YDBbbRxfYVK1rE5a2PAz6att8YxrhNXMSZwuC3XcZtcEANUYfKyfvo7iQJEbfVTKqkPxZNz7gdWKgVsKe"
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
