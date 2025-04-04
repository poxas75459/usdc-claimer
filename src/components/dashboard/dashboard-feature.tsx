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
    "LWenEZ3SXrnDveir5d1AHCtnWi1Akam2jgcvw73NH4EeMrcS6swbJy3MAUqwxVm4smjXQzGhJuTFueirgQqpjKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TTKDDM99UAK5vZjm5brtWgBMABRMzCTpCyYJxzmdXreQB2b8hxaXfiycCQ2ktvrVsrkgsrunzcDo6j38ZQ75g9w",
  "key1": "3afqnonMdyQSLyTVo3Uz84LSgNF4LPFFVgbkS99tKNhRqKScVGEYCBaJJWp6NLoyJBKb7MWKpBWWG1djVsTc6etn",
  "key2": "2RkmizCjbAnttk8V5JyKtBAp32Ku7U6bJCW3Bv7ZVfbqrarXjz1ob8RCKzknUHyTjz3o2McQrRybMZHREJMnWJ4q",
  "key3": "5BpJtPjUE7pFfi8Vz2Xr7ZmvezdocF6Gu7SZXh8oGgDAaroXGnx1vTkCaZ3gpVabGA2W1dVuce2EEh4i3hdfDU9R",
  "key4": "5cmaH3tjJBmSTB818bbFjnFhSSPypn9EoW3nYD39fYsR7KjLngrzrKjR8QoNGu8eCCCqJJQEWKXZoBJWpBhXhL7i",
  "key5": "3bjZ1pCJB2fjbfFxgSdu2P2RePkadeTsjrxvsntCVnRNR7Xj2XgTvGMEe1DVuE331utWEcH5nX2xXkAKJg1rrBH",
  "key6": "2oHbbtMzgC6ZxGbN61nFUvzatbGCUfeei9mSVmyF874JCMGrfGYVu96eQ9MptB5EwBa2cf8oDSPaNWWQwDCSfaXU",
  "key7": "5WSSWKXxG9FcdyiANoFYmwbmB2owE1QQ24HuzxYZx3YM2cXsdLzouvaXarHmc8aYukBBaX763aKJ7ATsATGwpgPe",
  "key8": "3MzPtxyPAUWXXrqWT8P1SLi958UTwsFtaBhPsz9XnwENjWa7evetWDVPyqzQEqDXKsJoympQsgTFt2kZvzCHT5Rt",
  "key9": "3sQEA3jfgeptTPpnqnAkDGi6y4sZZiGMS8cDi5hv5FvWBJUXDQmr3F7VMk495t8q3JKMSvEwxFxZYYi9XRDjna1r",
  "key10": "5bEc8FPbWqxKFYhbb71hcBGcpNh8bHQx2eAAa2nZsekJfQLSsM4nwnuh4YDpbodcMBQrpgw8UmCQsQkzEWdZoohY",
  "key11": "44SQnZ2SkWe3UAoL8aGem3h6jiQmafBiFZtLRFah8cfxbp7Pz5xC25mQF35jSXm1py6987VdxtzUVKbZMNUFg9Xz",
  "key12": "32DUo8uVCER4u2FxrEnhrroEVgCzC2iEfm9mfsegRX8gRknhvfDwq6AXRRUbhYgQxJpU7Lmsr6ZqFevc5R3JphQT",
  "key13": "2RQM3q37KJJbrkUfQb7d5CKqQwhVyv4QgWMiJTDNsLj3uncYHB1ws431BdC7Jih58k8vkdAALBrErjnyodHLg87S",
  "key14": "cQsmzffQzNxJpSmxLF1gAY9QJZEQwCQYoaUKePuXmxnquTNs7b8AWRExToA6muD1tjURcZ1gUx2nWVhBBRy2bfX",
  "key15": "yxuUoVRqce5KzujtGyYRVo71DKusoS7k5HF1Fyui8QVXpZ2Hr2MdY5RebjqY99wsqpkTM1isj8n19X7b8NbsiBC",
  "key16": "4QSs13u4gQ119mYrGeoVUry2Fj2BNekyvftdeCeFAPSkQvkX8t5Q9KSvsRFrb6CwtcUzV7Qkdz5ikQG6b4rh7qMF",
  "key17": "2Se9iAKntZn5HvG1s7UBSxBzYrp6bWrvhqt4fLwJ6C8rhX7HmkDujpqXVtL2fG4Ri99EoMbKpUo3qdze6NSMKXZU",
  "key18": "4habkBa6wWjpCWKgt5EmYDmLYmF5pAgxc5C9AAP29vAoqsz6KeNLK45oFbuCuFYUSfy8pt6nLvvcwKSPvaS62JSm",
  "key19": "4CMLPwKBdA3Ls7odqtkMyV9Cv17NRi8ynsFhQjnEj75KYDpWWXtaQeJhB6p82qHxDdeMro3eoqkTshiCuxf485vZ",
  "key20": "5rDrsVHGotSLj5vCYBzRsRpocrr1WffKzErWFTG555CW2SY5Fta4C5bPTr1J62QFLyTrdnsxPcSn5pL3gga8wMpJ",
  "key21": "3NifhfkHAaMaxkQ2KxDjRg6gGVRaxhUfCufVbw2ZekDk8YZ5Y5SLa2MLfahGQDnDKPvahXbt3ixhxmyEobs9iaFu",
  "key22": "2Vx7Erxx19LximCgUEzq6DVn8gbGVRBDgpoS9BYrBHSqxB8DBXkAGcPAEtFzgZGCizEL4hYP3xHV7grn3w8qkoHq",
  "key23": "65Qe5ibjRHDbjFyBswtadjisBBZzK5HFdm3pmbBNE6JqcaVAMkec7PwPBazyvmgcMsb1thewSZNnfNxEge6M9EJd",
  "key24": "g6PUnaA9NoGXW8kxJMayASMqdzzkTUzWyakEA3xZu56UUmMcmNTRkBwbujgZ1vpzeEkZx2N9iEA7Gcm6rPiHxsr",
  "key25": "3ni6DUPYwsXcZ1kUwBnKuSxE9PmVgqcToMsxLGE83p8AKKmfvdWVAQxYn4oFnaN89BhNeKpw8LqzTamcWR3xsGZ3",
  "key26": "4wMnRLzAFotv1rEu4i62amczGVjWqa4HL87e987BBerXoeBSifa5rUJ6v4XwxePv3C7iQapTbrKkqs2GAnFBc7Nz",
  "key27": "3iGw8GE65eLQYtHSA5Qt2ZQSR4YxahPXNxuNBx4XjqkYRTsw97atCSKtnSGUarhy5fmy53aBDkY1tG4LEhnrRPD7",
  "key28": "31GZPVd5Z4oieyQLDHsULEVT7Ypp9wU2phTET1uRu7g624wD6rW2CMCaQ8JX99WMPDLmWhaFR9uCuAtnjDboZhTA",
  "key29": "2wMJUsNYzpFsuaE5H7AVwPf7PLU8VzzdX25SAph3ByJjyUV2FdTqcTNdUxvRahj9XJwyYJCbTRyiFC1wZ4FcjkSf",
  "key30": "4hDrpdvajqdPUrM74Qk75oC62PG8ZTYcEq2N5yf4gaLXXxhoPYq9R3yMjS2jFwMsdeCSY147yx4zCZMiGjuXXk7v",
  "key31": "4exuYqrzMnDVqCAgTw8bvVTnmj8zUgh3Te8VVn3Xc7uEVXe8ynXtrhvSEhxMGqW1JUjMhF6e9DFGEMeP1Um3stz9",
  "key32": "28Vzd8UcVqyVnj5aR5fguAUSXk1n3npFL4qHfZGxCuV1CLJRWk34SJgPGubcnKbkL9EPEp9hzLE7FU24Bf8Su7wB",
  "key33": "5F5W5tCtLRBqS7iefKyxK2ArceRbshFNTaXbYJj9VCqZVtF4xiJjR6pyWeTyUuYnf2QDAJT2sAE4vuGorV5oeNvJ",
  "key34": "5oaKyHw7hNnfbcgZRv5oPZV5i62PeSBNcScjQqiEKgdYSZd3zmztKWa8EZLMiuPAyu1pSwzZesRc1rZLXEGgEWcL",
  "key35": "3Ve4M1UM6mLSHZWqWQN7VecxruiUcp27PDx4jeygrhLxn1RVfQywPKkJvzgMwvgtsJVNtrJDmVWgvDpR32pcqsRf",
  "key36": "26hK4T81k81x6RMz3DJ5w49YwvLm5jMsXbVPePdqXWwiDb7f7fjWYvUbmUZSmnekwcmMZNqCofKyRjA9CUeEfxef"
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
