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
    "32CGeZ4NvxQV2FbfUjfyoFUAzsrjuqWqz9wqP9pCX1eCQo5UrX6pCBqby3DgWrnakypUNpT4tYKo1pJQPu89phpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MiGucqqkti8NAanFQM9wJXvJij8jEiAFztYyMTCtqQ8kLtipA44ArnvMSMJbRgMXjryMsuCZ8JBJqPAvVqLS7dM",
  "key1": "3JcJrsmq8pW3gLv2jLhHpooJvmLh9JxPP2YGeArsGejcpcdPBpBGpSPe8V4oKhjpFbAPmMFKjTuwegVwHYV9wcjn",
  "key2": "43qqJc8YpGzznNnRejRNrqvrhkPGszA2A7J5jbdaC7P1fiEiCYMQ88U6FshjKk29zapk1wH9RY8voBzSrrcoRaQb",
  "key3": "vTMbnMgegt9QuUVr1urVaLj2CXTy7NPy5K7V1ywAaJBuNenzi8u7qQ8MhJnstnfAfk6Lvug23p7cmcthJoHyFNG",
  "key4": "2PH67iaH1AZCQrtsrHnD7VSZMJ8T9SkVnYJi9m3uoggPhSmo5HxnLA4zr4b1cTdeF6w3HDz5ss7LccnXW9oasgjt",
  "key5": "2nsHiwn58fxneaLs8kJ6QyeYFJRChWfu3FvqXhyDe94ph974BdgX5xpog7BMicYp5McAxH8hN4qYQw9rY5BGXT7G",
  "key6": "46VgRVB6nVX7Z9ZocrjjTQomFPwuUCFVEEmP1kF9ZP7DF1yeLZuycBvbrniYp8W3gy5sTU27kc5HyAfMfwG6VREs",
  "key7": "2WcEsEYWkY8TZ2xVZ6amnoGqjeQiQ8hBS275vSkB9SdHaejz6kRx17sUvNTGxcyko3fT7XvCBLiCL8w2zFbDi9e3",
  "key8": "3V7bgJJjvsvQJApJmzT198Au7cCE9xdJTV9Hfopd4Ft3XzqFAcCLmpvJ3yskuJHVzx4JVQV9b7qVZmiNVDV5ix9X",
  "key9": "5mENMZjPGSVaoAV1NdffG91ZmTUEf1zboKpUHYF8GxMN9kQ6Y1b36ZpLA21LrF7bEXNdZ8PXmwDCqcZvGiyAat62",
  "key10": "5HJ1Fqgg6TCjABNy6aGm19NLm7a1zjAujoyz2cznYPTFcPJ6d5PkfNjZfVfF69dNcWFcg9bs3gRQCiJ3vxTrw84F",
  "key11": "39rsC6F3yotQHqU8iMPC38TPP28kyd1gfMg9TNvwnxegqNPB58Vvsij8c6jHCdF8FL49MuvMcTZd3wS4m8knMkKR",
  "key12": "36KaL7rH1eywZiugrA1gEiHRTaH2FcmED91ocKQp1W8aNKqRNjidUvvYM55sPtwTxXMWZ921UgYjcEucBLV9adEb",
  "key13": "2tRykjiNNvjGMi3zkRDJokuEmavqZoeVYs1aj5BBeW949XM8XnwjUgx9LCMrJ1TWdH57LY98rvUii1HxBVSu6QTx",
  "key14": "5y1AVjh3CouH588772tTbMFCfCpSgw5MzRiyYXu3kSR7XPWzNxFdy9V9uQvyeAnjjqPDE29XM2RfzwQgiAa3hhkV",
  "key15": "qUPpoYgD2WDZi858antVCL8nXiY4svcHh6wWjst4rv64f4RAJ4nx4mERLR48utk7U8Edqq73SXtEmwmhNzqj2e9",
  "key16": "5XiHwF82bmZZxhgTCXVaQMREqG4d2YHMiY9QfMuJxneAGePQmrdoJ27MjZGRBnv1mX9KLUWqDsfttknLGowLbUsH",
  "key17": "2jvtxzDsHMs2G2A9TtqjFhhUatqwC7u1qPzHvuZWrcuZ372FRrG94ud6WegsSYEe8VyfJFfyQw2bYFtkfvC4ecCd",
  "key18": "4BwrAAj3ydSRLcY8Tn6eZAwzB2Yj85LtxR6yQoQy6zTEzHyn16DTCeJ2iaNZHAASYHVt9iQNptB1CcLpyv9qTngN",
  "key19": "2giEcfL9vB7iZcGmhQcQUzspJVYA2Y34aX694KpcuCHZ3L3NfEak9Y86pcZd7s1VXqZKNKU9upmpM5CBdqhu7gG8",
  "key20": "BCt1JPWeq6hL92UpaDeAK2JuFMk9Hv3zLGrAdynunbYbg6aYrNXWEB1uEcPcnbA2VL3oQEgBB4bw4cS9gFqCjqw",
  "key21": "2vW88v4BmxZN4TYNV34fETebWJZ5E1JshJSy1owYCAYqWHBNrJEtPxHYUbHf1FQ9R37CgaJ446FsymAFx41yXGBo",
  "key22": "PrdaqNFVWf5td8jxTV6ynixTA3mXCizVw6i6W7kq4xSh8ZWrP3cdDFFmUovatgnYceQYcPyzej8XGmhiHkQjeZW",
  "key23": "5hbUygsX8wrWUuxc255MEYaTK1eArhW87KfLS6FjZ6ap8Qp4qg9C8m9GeZqzudjxE2p9kZJAnghQsR2MJ2WzSk8b",
  "key24": "2UBoG6tcGhPu2oxGD9hWtxdCUAwAherfsZdP7UP9dVsaWvSxwzXce1FG8ArifXrcaAFW8WnNQGf8qdokjNvKFCA6",
  "key25": "4xtmv8BpQoap2mLtPE5XWHX7tPfTBBTbwo1JrAmMCzQs89hTYGQmaqNYRgp8UrZVapLpSNKywkNXozYtQpteaRVp",
  "key26": "3cqmpyDm1MUzdPfSCGmMhGLVQ41UQzf7PjWVL7EMpKA6aFJSDbJrgnMcngQC3CCEMwTjF4d7SUNbjgwcDk92wXTe",
  "key27": "5dR79Tey7bZqtXivWi9uhrwH3nzXEE1t5eP6c4PH8RbSbYFVBCQKam85titx5fbncYVkomoqsLjLQJ1crpbQNqmB",
  "key28": "2KPtsBUvcbenqsU1FDUJiniURzHJeeWomH57up9P2fkwZW4oJdWXSbHhRdahUj3FDX4RVwownF7Zsh8ui5oqWps8",
  "key29": "1LqKEcBNEHAbiVnS5KZsmBHGhjw7F3JarYqAXrRnUCajWY49ekTvQPxCCPK6gdRAYi5UkSjH4XJWgypjAJ6WEvs",
  "key30": "2DMPfVHQP4QUuoHNSBY73zjStZzAN1P2fXo4LCkykARwUXGBFLifWFhy59LGaPpB8MXYCo4m5PotiyfrrwTTVj27",
  "key31": "2uG7AXa1yxneZ9m5jzDoVBAxdJXa7x6dyfZkSFgro2XweCFexecC6NY9MSoJYsJFaMvGu7fnjhEZ585m52xdAezV",
  "key32": "2TFR8ExUMKXqJEkjeuV9tkEp7rAXuACEoMUgLKpXgQMi9Vo8ahoxBhgNhMAQp6Bsw8DMpWQppFJKc8SBj6WVhi7P",
  "key33": "88uBdLeYZxBdQbX1nnV1yu99rMgK9FAN6eDLWXkrPosrRXSxejAupQZsctxjh9wTsb9WED64J5TPXi2NybacQnY",
  "key34": "5mLujLRU2EBcbjFGzNM3ZkGU2yqhdDXcZtLooaHg58z1vGqshDh141NmpSk7rJ9gjxxnHLiDNHFN89bjGnmEm8PY",
  "key35": "3ryykuoNgAGPWL8BmvU3taRSW5AykvnGMUbXZGJiVDpKXxRVTQJEThU4T3iwQTZ8aMh1BJeg9kpNk3ZtqFGrGtG5",
  "key36": "4NanpCCrm5atcBCaJ7ho9Se4e8uXF6K8L3D3AMpFQWkwLEaNRPf2bWW21ToJRgzv7w7Q7p22dF9fZh46skFkh9kE",
  "key37": "28jaUACQjnwuKHUUhyxMapaQqXxHTrQ1Je88FQ97zJmnMabFCg6pXVYRHZ2A4rs9FfFdYRLoFPtDUg8SaCgkQBHh",
  "key38": "5KyUVLNv5FiR1rYd45F1xNBwpqabWncGYMMr2xXsvfEVqxUkD9qQcfauZTnQB5PK5A6YrGcmrukPtXeDYP3RQob3"
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
