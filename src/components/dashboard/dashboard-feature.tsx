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
    "2eFyEXhxKT6eigRfMsTatfNVVdrnvc2enUEyRHvttR7vbtkVanVpDQagwTqwBqgPfCC2icdLr6WFvs2v41u5JKvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dXGDmkjBu7mkoBQxv8RxSfeQPxU5V3C6Dp5GNPdnQNxLipfjbryowGETWKeRohyFUr6bT1eyanrVXnM3bAvQqWS",
  "key1": "2MwDmp7ftSSF3G18VojAuU96Ln5UGxujto8Tjk3uo6i54ys5tp5aQwMxWeUE55yQe1SR3UADR9qxY7J95cBFPa8a",
  "key2": "2i9ibu2ni93DqiZtbxqBymFNd3V6KnQ8pvn6WB8daLZuHcM7enWVaEEG84CfsCuL2DNNsfPQvMoD26nioiwNY1FN",
  "key3": "5xFYLkrTnFJfVDfNW5UTmXsKRzsqycWfUUn8hzQx3zeZVJvnWsQkCJzmm9v6kyS5iZr5kZRKjSnjiS9ukf5xdQMx",
  "key4": "4hsW6jsS9LKiXjWiewJj9VFSVUczT4Jg8maFnVxGgkFXAg9CXRevWH9SeCaGnchrbWQtvKsXLGaz2Zy9LMc7rMcb",
  "key5": "5GukCA5eMYXXsT8AyPDyTqV6YTU4SAtKVLZTSNVVUURiN6m3ZEKdq6EVJfFco4XaRAWZqGTfzXHwGhoXiMjVFvvP",
  "key6": "HVYRXu9pekQV9T1vngkNAfcUuTkudP3sdHoYS1GAxn9WR1kYbPfQR3k7rzhUssnGZhiEipFtfX4BansFA6zMU2B",
  "key7": "3JFhnaPKoa3WtKY2LeDej6ZcsDvUB3gVGrP2p1n8wSFbhr8DQbQpeaHmwv2q5QqKw6UonB8FJxyb7PFNg1ft7H3x",
  "key8": "4YYfBTbhgMapWKqjj79qfdCM8YNyK33DeGnCnVZFj1C4wieLtL3J6ZqKtLLS1pdk2X41QSEAKMrLmDHkkNaAiRFB",
  "key9": "45YcozHPg9zZRvdmz4kqxS9Lnsu8s1udDR8f6vz2vVLC4XDdVRp2DayLbrKXNByRk31DpnnG8fCPtwxMhz4pGYA8",
  "key10": "4cA3KGQ3Rrx3zgezvupkTV5nSruLesmguzv9ubSpH8xgw4fTsQ3m7Vpb4XSWeCrZqUL8tN4NgDux7Li1pekZMUGK",
  "key11": "127cgjWwFVz4VgcEKmVLXE9AbJuYks5Eg4Znn4sWCUqNdMywvinT5agQD8822Urzk1B85A5fg4TNyJHdLnSmN3Q6",
  "key12": "4PqTYTh36E8VFWVB3rQmS2yQJvLzhRShBHSJpomdmydyLF2fNxLquWWiSe1hg7iWCdV4tCfEGH8vXyGLvDTec9QA",
  "key13": "3fUQVtvQbpmNQULPgo9a8u8XfvLvbHhAmWvqtEJVtKHjofi5nB2ssmisDuMWYZzr8d62YzHMvV2k2Wr5RMAZ6mrh",
  "key14": "5opfTNMPfiqiDq9Xw8u8MuG4KEM79ba66u7ReATQzfb2z11yzgyHDCY36hBdfxKeMUvoGaY7zaWJ34VLuzMvwzDv",
  "key15": "4N8FUmgTrZ46Ta112x6cSYT3hJSxVMq6AapHYPB6rdvous7sGqT7vcBpSUHzbuPH2mzhCHt9ahueEuVnaPzZRtGe",
  "key16": "5rXBWXS1hYmDH4rps4Zb2Uzs26SKbu3zSjM1rHf9jUBQhvt7WABL2vP7sB37HQU2XDoY1G6B6RDsm9UJ9XXDCo6T",
  "key17": "312w15MkTLuXChB5Ebv9xG45zBZuf5bkSETddDhzvWntqDFDkz25XkP2CwGEfJK6k4Ao7Qhq7JcfCHfaFcHcb2w6",
  "key18": "5WPVzesEXXxpznMunWAonPee2V6JqrHcUddR9SrtwuRAF8Cs8R5949uAASE6d8BGYpbRcd6ywvuCouBES8ginjCg",
  "key19": "31LZKvVGHKdAzqxJ7GenxPvisB3p4UcW2KEFfWgRpRtKMv1gWA73iiYV9t55pEnYsigRmqBj9EMY5bj8xg1F1EiQ",
  "key20": "5LrH738Hug6nZ28kM6HyDgGMJmuwJBeD5iXNdm5N4TqmQSfHSfA866yyKiYbRRMe6LWULvGSt9wozuAnrRMC7n5B",
  "key21": "2RiMLcGSiPwxmJ8J8sLvHV7xDQrHzDwX8kPgLjfS4yyTyT8NzNByYaQEziWxJpMsJo9MDqd2X2Cd7yNA7uwPaBas",
  "key22": "5rtiHHt8NtCr6SCH4x93WyZ6LVmduhNFoX5JAZHwBzC6uaXqg9mEaQuMX7R4hfpK3zfqJRT4N9wJYgQKjpGCywBR",
  "key23": "3HhTc1kCSiMuzC4SehtK7DuBtQyGeajAzbHHFXypmGo6Y71Y3ZqsLXzkhmJWYu666qaVjw8Nhm1C1NU1dCNMnWws",
  "key24": "2EoFQ9X9N5KNpkwkSWFaqUTSk9DNuXzc7v5yQPLEXis6yYiw8TBjnRWaqGsGhkXczp7jhpjFrSndzmHj1PxXi77B",
  "key25": "4uMg2VTGBKgWUausyvuk18pZdtvbFLTH2DUKZ8PrEj7fZR1n2dpciXiEPTjTb9j2Ddkc8o55jZPgGUVxdgbrKExB",
  "key26": "2QrAZXwYT4KnAryLqGis4V6iEoWifTyvdUTXLRB9He7UvhJ7XLhMpagKHDp4B7oPhrM5Wn2CvD7etWquAgvAa6jM",
  "key27": "3TzDyYCaxU69uWHiHfo8dGeeVYymiBqQeiAGjXQGp2R63Bgi9oi2jMDhWawfj7VKxftzfGkyWNnkiXmv6m1Zhikj",
  "key28": "3eNMCr8m8CCNzG6S9hcUjRqywf6X37jLxypDiAjJyMVVZzpRBcKj9SrS4FjbYTh899WT6qk8uWoLWaUyBAES4pMQ",
  "key29": "4f2gNNF35k7DXTeLGJwLQhsbtAnXvEiT94vJgwbA7qfXFtgkAT49Ay8uDBzVhaGb4Pru9Pq5AwkaL5xHbBhL8hLM"
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
