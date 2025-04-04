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
    "4zFmkEBY18fXBcwrqvsjefcb8njHhc6SLNiehVEFPJpCoE8JyszHunshhd46ZwYDKebBDQtwiB1NGxMkRuDG8qzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3S3pcefAR4Pe7buoLkqHXdo9Wn6xbe9RQbjBcE4J43mJyh6v9M3M7FSLR91KoG7NUmHYu6DSSjdBhyQVCmNAV",
  "key1": "2GP4RsKcbsHx1wugvhjmp76nkZD3XKf3Fu6XixWZ77hzyiMAppBH2EuA5ARqWchKtt1doFNV3HCvob8mgkYhUjcc",
  "key2": "yY4PJTdsG4CRN5mzdTE28BvymdoC1PqnLwFKScnqbVqmUYfCAmYZciZk4irieJviXipizHFjKeXkBoYe4DTGrJV",
  "key3": "SA8CQM8vo9t9Lgp8NS7hFFZ4ZrUoabBFtWdWYLRLivc4TnAtPq8aKZ8CDZf8zHqE6pUHZtY6ZRo6xD5hvgQLqgK",
  "key4": "cyxEit8N51mm94FvwERRRAy2ZiKCLQRSjjEnZR8PSdEnqX8agUa6P34PZvXkr5mKDWRCwtvFuXTFAkiBMiFDxyc",
  "key5": "KsekifYJhdEb4Exbe9E6xfC4GAJEkqxSxrM8ZvJBLP9XpdDXW3511pq8xnqkHvWfnekAhpStQdjgt1e7y71UfU8",
  "key6": "3vhUmcDhqeASKV5j9SgZy6qod9DUinAkRefJR8c86X4JKWQDW4DdRUnwrjgLJRvdiFcwwFsYYdqhp8ZbDczrorby",
  "key7": "4UViUsxxAqK7Ni9oH8kjNjj4mfZeRWfU9oiNYxYddjwpEdCXH1k5kyWLRFJEubECxL8PBJKFxU79kCECMjMscJX1",
  "key8": "65gx4dVPXHqG4zD4qRPRyjsMBj7gNVUfw8qVXAo3ug7bGVm9hPQ5nrHfWDfbBBLEZRU9dbDgsAZAap6BNP9EbaMt",
  "key9": "43zi9PZmFYM7VYNNynb6pTWUv4KnpvwnRphr1Zq7gmzAy4fVMeWtrC91HKUzUpc78AqhzjA3LQWkHj1SAKo1K5FX",
  "key10": "56zWGf4oixjDTpeN7TsEnJPxTfdG33TGa4mrxFnrj3PKMHLEwvMSQ65qZWuhAUxMS7bt2mHPBuNsedQWhrp8annE",
  "key11": "F6imCU38jwiJPF5huppJzsWrPJEkNp7tCfbMY5dkVtNtK7K7XmyfzhsVifSuCf6HpZxuEwpH2MNXytqYvPPogPk",
  "key12": "4UVtVgP8Nsk78EyW2xS7LiZg1pEL1GxNDdc8NgbAWxj54tRZNqXyygyoRuNyvcaZVnVXKn1r7khEZq2GVDWuXmoJ",
  "key13": "4LtTgLr1iYEkY7Tva1UYPLL95YApZTrAfWThGGhBMdxNYJf2Zquo7GmiffVjvvbNdrygTuMFYwaic4HGy1GdUuex",
  "key14": "5FY3X4CyF3i7cN75ErvbumVeoJZt27MWH6dVbcmDudQ2KwErkCHfCZZQqhAKQmFkkoK8NrCwtA2m7t9DYzjF3aUg",
  "key15": "5zKdjd6VSKvJ7CpcpQgEbgDSgQDsuoxDM3veJrgoRpaZh3xQ9ekYF2xBYv7gLXwe5xCQLpZ9ngETDAP1e29no6ob",
  "key16": "ASjgb1KH4Hren5zeWnSG4demWKVH8hXbjwCMAm1QYuSEKXM6cFNbr2TDgbXMLZmqht7PPELRUJWpUVZmo4k294j",
  "key17": "B4ss1uZAzGQfGmaTw1LcLZeeeicGGmbbmijLQi76PYbVprJQDUMuoco8HApcNmdUSHbkzerskW3NK1chAgSdVNY",
  "key18": "4RJ2hphrVnp81Um7BoShBZ41Q339BNgTpQJUdBdgJfJTcF6sD5zs5RsBGMUMYbPVoyAMdEpgoCUUGPrSzs7AtFBi",
  "key19": "2nFUwYRjqKN2ajG62fVKJDPi69ME7x2mMnycnAQDz6KPnDcga5oPk25Nby1s5imgA3A5oxM23q7sJdmF6fi6mAwW",
  "key20": "3VXRjy4krXLXkUgmRBjnCvGUHPafyna48xbKqDhbrk2pxvFgQaT1mZAkkLnq4oVzoK7RK3dCAJpPtAk7MVE3htoQ",
  "key21": "5VxktpsDY8s9rNybe9pbpZkT1CTRnZucXvELF1yAzPmySuC3ZuHkCEgYFWMrabMVHgS3fvshsEghJZkHjkmtuENR",
  "key22": "5rx9CQyzTksZCBfQu6fdT6cPXw4bN8Z6L15EQjP19DfeSfNFWyxAQHnoM65iPi18g2exNxPAhtUw6TgKvw8vVCyR",
  "key23": "5B534d1gS9HenUsp5gQ2r82tS3eRhB8xKbPcmHA238iGrB8pgMEU4h2ZZw6KzthzPTPKFWK923d3ifMiLdMziKqU",
  "key24": "58vEKEHugwTZPayjL4yGXvswh6rpMW25jxxGvfJCemaoL8RCBqmQvBEiYgzNimTQiuFogKgxBPu8Nfog5G1YdBMh",
  "key25": "3tSSK2SZwUihy5eFARGHdf5CoRAsMEEjj9eep6gbcwure3VA79XE9CowSYgvYMMC11zoxyn7t9YZsqk8xETmp4ZS",
  "key26": "yPn5FKQnRtDoTNjTcEKLZ9diSaaAYJMrdDMpe2btZ5QqibwUi4Tfi285PbNrFXiLGz24QmEcJidRkxeLdj5edBG",
  "key27": "3T1qe382BVdkw8R9REc6AEg1XBqno4d2oWx4fDeuM78vZP2JyuaXxQvSDB18KPqnDfWWGdqieNGptsPV1oYVpgKJ",
  "key28": "2e9WBCYAupWWneWqfUX4416JRbKqJV7FyqTejtRxQA4fNTBdZvjg4qS5WCq9w89gfEEizzMH9PXqaYKiqVngMVaD",
  "key29": "4pp3mYapLKkGBydcpz8Cv51DwBYumUE3mqxh1UYAQ9fvAKzyXjYQ1ypHvvjqgMxm8K87SMdgDDEK71NYwtSguhQx",
  "key30": "9pna69BLtVDi2LY1NTYn2ZPvsmEMhj9ajDEJ5Nni7tPCQPejFfnA5ZpVAPBiwGVJH1iWcD6q6xtDQjuK6UC2pWC",
  "key31": "5sbhwahzL4zmi2o5YjEGa9erQfSDyJYR3w89KNuS1mURGj8Uzw5fkwf6ayoW2fL8B9i1A1u3gdt3f4nVrwFZmQ4v",
  "key32": "5ssknW2iEtcEHAvCo72aes8zEVW5tQW6SXC7wDnTaZ1kH8MPWaG9KvYHUpbP81zuS5u3Ej6HvN5cxtar7AiExc4j",
  "key33": "4BiyX2boGfWHciZ9kh4obwpPQ6YGAkFybsq3Zt8cJgvXXhTkpdYyjZH4CM5MeKBwUkPd9W7V7iAMySwNBq2ShMKY",
  "key34": "5n8PBnVXgDcCNjjTfT6gbwMxoVTy9uoVRgZmdoCcZBA5VTSXr4coSwjLMcbWjfNd21Pu4tVp4Tz3WoGVwFuDMzQg",
  "key35": "2wCC4Ltajx6LBkpRa5Cn9o4cyuZwpSUdRnKT8Vf46ayy1sWC1ydpbzvNfZoM4k5BjVBEjnJjmdf9UBxsHo1A91BK",
  "key36": "5d5rfPEs7LR29xfoeUEF1xGginUhUQev8HyXVfQFRicUnzKSKhDvgWv8N91gNUZvrUY4J7B7jRYFbDCrkdhGhvxv",
  "key37": "5SY71TakrHSSr1C4ATA9bUWWqEdRkMNQ2hFFPq89LmYeZfJEEDa73PMo8rc41JZaSEoFpFAGdGrUjqsmPci1u22M",
  "key38": "3hCyj5bBSzQn1Epu7J7tuAh5TnrPhsde52RRwUVmLT6HEFXsvRJqvWMShs4wxcSvEKWS3eoSoUcErgDegBCeYKiB",
  "key39": "3raE1Rv8jrqka7veqTJKWYrinnJFQ4LdpzXta8Drv4PEaZtAecfVYJxPX4N3iHyV2o1XcUS5qNPvfm51Y5Zvt3kh",
  "key40": "WdfJM2pFCfZvSQYXm6EPH9e5xwzetUTc54iwa83dqeNsReoHT6MJVEhHkeoh8q38s8itv7aFNLiEsvrwSU25XWv",
  "key41": "qbAShZ7EqVKtVEjzHHL1dDdH7VvspmXyYRN31D1L3MNWwgPb8MFvoDJnnWYpe7X4BN3Ppyv7b9C1Qd26neHxiVo",
  "key42": "5d7HzSHKAQWbRhWuyKnynM5VEbiWkiTVpt3wGhJs2rCh3qCRjmq8bPKtbGnRBEZKm247dqM51Wr38gwhZ1b6zkpf",
  "key43": "3267eVmJbBsWBEYbASDsyee7HzMUNrjcJ19vDt9X17BBVM99cqqH6QEE77bwySBgzDdLt32ocCQDds12HxAMJAmx",
  "key44": "5mxbJUytMQybpkU7oT8nagCKDyTDxaYmTDk4bBMyyxYAXvE2cLceYudp47yaibRA5NJGa537fr1CtU96AsjaLNcB"
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
