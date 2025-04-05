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
    "4aMgeeHEHTYMg8esKkmFjiA846bovLruYPYTBGBinApYqFXrk3GdBDDszB3ZkQ8V36YBAr4c5Li4eSGGrY6dPLZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3d9XUmKoapkuk64cH9qRyUeFARNMRqe8LAgDNCephL3iAsVaBUBEAQamVHa8E93VVSPjDbAAeFit7RLHjnJNJz",
  "key1": "5stTT8Erzx2YVUAxKCjrX9iRpaUEXSzHFqCHXWbTera4dZnZfwKgvTNmhzri4TmRSt1kvRUikyysbrvQnoLGvWnr",
  "key2": "5w7JA4tRkB1298EPegwiyGWygyZiKgLyBZxhrGsQ6zQ4tjrJvdMYDCmawDWZzk81pckbP9QrJbHyzjTKPHNb97VH",
  "key3": "qbxuwgwNXqMGPBQopuaCaw2bZPnhkx1SAcLYF97uM98FMDsFt9WdQrB4c2uTcrTzyoM5uogy3MG4yZK3YsUxoki",
  "key4": "5yaSxu4Ez3Wtg8LPXyVbNrpyLasMMCccrLhCui2JSpNwYuYwXweD8FwKYJeZHFRoo9xDjtitvBF48hMpizeiUevk",
  "key5": "4PPETTmy2cH6Q68omHiQGZG7DHqAv9Ep1CEmLFZKDojpKHB2omio3epFQDUqeR2BFu1PwxTU89LTs68biPdhejgh",
  "key6": "3W3eqwLqSUTqJNAscXJKNJYmX7bgyugPihpcsmcC91N26fNdCAGWCgva8pqFxPEZQnjMjsw8piCWAdM2h4CfA1J7",
  "key7": "2jigenFsJqbsycbcmBoRX1m5sWQvPvAg78zJhfXctrkfPgLWWGjk5NpCfftAKHAQ94QXcABJVbNQ6BzGTZbPtkaD",
  "key8": "67HxJteQjNhWTWc6fKEg7yTQ4aWKZL6gnKjdVbGPqkUCSbDfFBFwqrW2MngNHBT2FYSfo7rKE62WAaPMmMznZ7mW",
  "key9": "64pPEAXY3PQgxrLDoD5aE3HjYAwRwCPX4oW5udWMdUWq1GYQeDd4zHzfeJkHRSuH2EwtZXFZ2DZ8tmRE1kJAARKw",
  "key10": "SRWn5gKGcZWkg5NiZcLdFttMyH9kmWC4WhB54X9ruGpkhKg6ceZAdQV3k2aPNbmgMNFG5DQxwUvZDEStE98wG4y",
  "key11": "63k66TCXGiNqoUf6vbTM7u5NLyBYHGXdGkKmxF6KKEgAANVwxfKU9rbxRDdYVejnjgAXRhnUJMLcVkvoGfS9umTP",
  "key12": "63Jofrsbkdyyn8o2Aue1GW91es9gm8NeM5yBWx7zVcbqsGqLycaQDt5ukp7Gv8HtXCmyVyn2qTNZr2hhkVJK87xY",
  "key13": "3MkSGMkAQkHCHWkBYnJmPfBgnt4164LCykaGRnL8DqA6cm3Tcug3wZgqSpu1AmKUUcWeUyaXJCN74yuq7UBkiZXW",
  "key14": "3Wkoo1m2jacP8aYVbGXto6TpV6us3eL63QpgEAvDofGTFPrZnoz2MS9kywD4uSHBhrBQ4cZBsqjd4sJ5GYVmGuYx",
  "key15": "TuYMMSJYUp5sskW7BaJN9zGqt19ndsc1oUoh2fALopBB4zuLFENCv7jURs5JWkLNUSM1fxnJLHDTFDvYHDqDfYP",
  "key16": "3zMJSemZ8A2urdi5SUbuoYR8XSMHS96Ei5ECvXGgj8BhiBZcZpUaronZVRueaQ7zVy7DrSWbyUoYCF8yMkeDa6Sn",
  "key17": "3nzToGw2m9a4JHpvqnDEVNDZc3iFBLg7Wg8XoRvgE9rSamMVKDRVb2Pq3ordg1aKZV39G1HviqGiFcr6Ed1nGwyF",
  "key18": "63uVjZiaU2GwxhKPvD3gbzKRkFXfqa4U7yWH8UmYD6TYfJA9iW3XJx1xDLpqMBMhYMSBmgGVgJHbuRPkf42shWeZ",
  "key19": "2YRMdBu6mDKNkmcCE752Zn2iPDn7TkpxXCmYLQs9MySTjaZR3YUEk4iVMccCnBb1iNZdapEb9BbvsgbktFLffVj9",
  "key20": "5C7ojbzqJyrGgHHkUcMVsxD5XNhnJqJS4pghdG7hG9zXBsSd6bbYsGjPUi9BmeBPVxFu8C6uyFDTsGrpijgNJGKR",
  "key21": "3QdBNomfVLKt7KF1epCBqbKRLYcTgHcTrf4rSW2m8hrY14xW9cPcXtUCdHz1HfEK8k3Nh5jq2L9hZLAXjcQ7ojw8",
  "key22": "5TB468W6wxKCYe9Ebmvj4kVjoDGTceS4WEdGdEAysDkjSSAGFt7riWoXt5GFvS2Z9uDkiZHukWZjNBWoKdKAtxp1",
  "key23": "57uS2MeowvSyX5RWNqi3Mw2tGCDbf52yYrrnJeYAZwJmwWRrRUTsghHyeb41hHiyhYsSv9ewzJ3dQiRFpqUMgbDV",
  "key24": "5cnPoPCVv98whFfarspNiVGsb8Y8FZMii7NMnHbs9yUMxv6V2i6iKmhX9zPpvsxwBCjtNUo4VUF22CoGfdn5GEao",
  "key25": "2nQNgejNCS7XWC1asBWg2ZGes9VTP7MzQ2HfBhNPGfY7KAtZgWRtnKwAysZC7HPnmLvdt9ToVikeesqGYSPQHaPA",
  "key26": "4Fe5dU5vxXrBXuEV2hryAfCY7uBWSnsggY5iUs9eLNft5rWR1NQY6MwR7JujqdADaaNR8kN7Q2YLyeajz4bCjzVQ",
  "key27": "3fnVTQkwo2mt7rfDYjKRKf8WPFCAKhM6ag96EVXLRBv5ihtiqTffS3opa9nFAdh3bVg2dfBrtaZK9RYp36VmURBj",
  "key28": "4BP7H7XdpC5jBuiysFGQdQnDCJSEpvfLAXB5Ysqab7qRErhi3yLFaPzH2WjXx2vxuddiFsu6pjzwemLdJWy2kyWf",
  "key29": "48ZT1jBgzfuAb3rx8pZRTfFMjPmAiyvLmF3fxqp59YHXBm63uEcmYT2LouvA4MHTYc8NUB9sTjNwgNUFcS8TxdQj",
  "key30": "4ghqmuJsNjgbDDBKLD5MVTE4dJKDRNqdFfjeiNC71B6hoLe6XxSst3Vf4WekdXRyVMHRqeDCpDV358g8d9ZqEob2",
  "key31": "2pXeo1SqfRbWBA1No12ePm68CLeKa9xGtvM1HdYLBvaLcUmveK3e6qQCTSFdiFBsTJJTN7cFTWJAiqv9rfew3TLy",
  "key32": "2HLuEhGGgPLumV8iM9JeUNbHStBQkkD1aZHXwJfgyp5eVQxy8hdGc4GWrJbGo8KxfaKPfvsSiVsLE6bgixNkrM79",
  "key33": "5vtU6UxmTqo3gwH9ypWphNATktSDBVj7kpqsxbtXi6Kp3Dtx3tFHmgMRVjWAoyL8uDrU6kUMPGiXC4p2UJt7yQX5",
  "key34": "2YjT6A3uvauySaKBtE9Rt8eE7F1RihbB7UWXKsCowxocC7AAYVDdm8rDa81hkkCKYtQ7XoR4UUx84ZHfUXCdBzt7",
  "key35": "4667sNXGLUpan8DLWwHs596stDVokGobgkR63bc2nG18H4ZHuQ3AidrZCBGxpJCaEWP2Q4doavEmvoNMCymDwfaD"
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
