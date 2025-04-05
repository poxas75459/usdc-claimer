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
    "xoB1wfffkVhNuZaSw8X8UYrEFvcqa5z5BiLbyRrhekrm5mrUCHNZvXbB8C7Q9yrAutc7KKPbuAojEg3NLmNcpLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eARvoJ3Rhzb8XKbhJXHG7t1sGWqACDozRwGsRm83YD5sDUbxm7VBoNiyA7xGQE8XB2oBzZtzzcwptqjsPc88dL",
  "key1": "4tJPXGS8bpT4nFzMxpmGrAhesEFY2yccTW8s3mtiKriXjq66qKniC5763f5npoZx3CLSpJiv1GppDVSt32ezZNop",
  "key2": "3zGLPnGg5ZobSKQCyCC5x4RQcDxMV2otDECsqX6BroKSDXR1bAxrkGWpxZM9V9KD4pir5mjE992Q3fTYP3kZJM1d",
  "key3": "4bd4RcoqyBXMHjZcgtwJKp3smZw2PLhgiYvjKYBrRWmiH5pjSin3sJNDFpkBNAdNTNepRuYAaUPgGpqkWRANDSDK",
  "key4": "4aM7DZrBn76DuR3C4eatqEkAjC2fkVzau3FsCMDhnnNC2QuQvvZH6Ldu8AGzoqCgfuozvTxfDF4ipSrpgAKENQEk",
  "key5": "4139KvC4SoQyU9nPemkqTnqHpnYkMne4C3rS3Pg34A1iH31UDqwFNknmgxe1JUBhBERbviZCqsB9hvRH5gcvh7pC",
  "key6": "2VT9pVQMNBzMmAd9CSzz8B41BZKXxaAGAr3szghpytfsVYp7rdeWGhkvzYYs8jDc1pRGF2ttvop1m1xRRsVoJNHS",
  "key7": "29dEHXMnTJeej2LKx4ZuPYwP55YJgKvD7caWpeR4a1yuL2HPZDZDKoAZQrNawrxZjmPt95WVjkcW5QiketS9GKZM",
  "key8": "5J4q6nMpaTkxQP25pxZf3wiY3oVJ6pjaMWSAyzyhyS5qQ5GX1XL3Ti8RxKHJSaDvB1Kuu4tzzqFQ41JhvtMJuLfP",
  "key9": "tGkscYiRDC4phZjbntBKAi2ANRNZ3fEnJdFJytVZuNFNCHtHbzi29nbe2G5LQyPPL8E7VfDE9LGCwvEXnk37ysx",
  "key10": "3tYqwNj4abbsHh8RiKqHZuVehASEfmygPYfrj5fPWhCG3cR9NTtZj8BiFJwGYZSAtePEb1rPJTPXDa2i4sFy9Ehc",
  "key11": "5fD2mhff4dNVDZ7sDtXKA9MbBC3ZrQ7Q8Qumujr3nFpdAHLjZAetSdjN5fyrxswnsf8HUkitFCoZ1avHErTeUyQ9",
  "key12": "2LARMt6D1snUPuVenb1jqKnxKFpRv8c6uU9ppfCDmUbJw3YmosWCauCUxNW3uUJXGgrBS6JNiY519ezBXg6KVbLB",
  "key13": "YrQmm6ukMy6i2msQYJXdseTQQQsGZepVB6neRmXKZECbiS1vuvP5WmjT6PtrJisNy8nLP8JMy11JEovG5D6mw3M",
  "key14": "2gV36sZNNR14xMpeR8Lv6qS1ULhXayfjPSqbFyuoNzhQxXvf8Ec45Hma2b3Eui33wpG98KtEUoGXSkzc8UsoBwBx",
  "key15": "2biNY4gDBnXe9AHi9tR339yBmdw7E5NdX4rMHpU3Q3YnZ96cEPCBbJ39p9NwMgXzsPHDnXeCdKNTvD8eUZ1Sdqeu",
  "key16": "2F22bt3183P3NiqDbwGfjivWKsJAQq33evz9CDPMvgSK39yK3qakqCgKTGP6gz2w6qkXuzqqndfHJVmE2hx43XE1",
  "key17": "5NzSxAvGUyeDhQd9WGNWgxmcViaAxn421Utm7Fk2X51K6dLXmtZqxSVjHNdvAiUkqyiEsMx5KC9b9SVQDgXd3iaP",
  "key18": "4C7ZtyAfz9qxtsfxR5e3rfWYr43EZG2diNo8v7dECvDX95HdCX2Gsfo7koZLMS4Ek7NxwevBLqepDXeHGpzK9nNQ",
  "key19": "2DfntWYZvTnntS8TVh5eXkbcBnUrBWJksS2z4AMeJKWRbdmVh2FJPSwRhGuM7FNq1oR3avX73tVSXjqHUyDj7UUe",
  "key20": "4pjeiKFYgx72DaergEv4JcEtMFZN5qTeXhBvquKKYgh7cRA45pfN8npmUXqd2P26si7Zu78ZDYff7rCYJYuBHbFD",
  "key21": "64SWfeFz9QgKthTNvV5DPiT5W3roVm3hN5ku8Fkovoo4hWwMggCCAxwhzRveeXJnZdvmUvVFCq7N9jZ2DtsgADUR",
  "key22": "LpcazTxZLvLAj8GYMgVTXFxNj82sX17XpQvaCE9kfQH4HxBPVu8rNyzrfJ73WRzyNLMwjtyix2hK7L9HcyU18gv",
  "key23": "UQ76nWRBr9JpuKawhStwPFyq2wChQhGFD8F72Z2ujbAQsesEa6ifGq81BumjvnorUqLLJKjPYx9GkvgwAhuRNxH",
  "key24": "489WB62xS7znmXefrwWXYxJGtjrnkECAApZ6ad7yMDA14Sk4AZYgSat2U4NhC4vnExQpyCXsc2VifxWGBpHgJwcn",
  "key25": "4voyAKVnPAEtptn9DwSekdbM6MccS8JoNsQdBm8PaUMMjxhezEhjxuTgLXKJrE9114xq6aKABJrEpGZ8DSkm5zP2",
  "key26": "2ip8e7jz9acFsF8NMwr3kWzuqqp7XUzNCdrsJHc8JR6YJ4dt1qXsU1Cy1c5k8pYiGQfqFRpQEXaf3eT2j7ZoSAj1",
  "key27": "5U5cCwAwA1z3z58UkTyXjM73PgGN28nVF6bUQpeBFGTaHqKezMGvDWDaLdf7yTp1dXxtiZnSN3TsMe8cd9RKuTY1",
  "key28": "qXsoCPKBkKLJ7TCRFwmysYAeW9TchucKgMDzw2eWmkDXhhGq4BRQBoxEP7Cm3PZBiKCxoxBoX8eADCKWaRZ9Gkd"
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
