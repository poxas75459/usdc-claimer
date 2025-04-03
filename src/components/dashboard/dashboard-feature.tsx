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
    "33xH9CmCwkDnwsQbDANFTLWWRwkCw5Q2NUqATryJcztAUYUCiVLUT1U8at1odJtGMQhss1YDbASmJBDCYvACuNC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cc54fhMt1DVH59sE3TpxHZftjXPs7yT2gSftR4X2PM84rC2GogqmXu3NL67q2jPDRyHdhr3415xJnGSbadhi1x4",
  "key1": "CHR1SFWcMC9hr6SnUdBV7EASoesbENQ4YrUT9rm9ouCvRBDRrxQ9YXq6vQ3KomQeYqBix3FLGjJBCYauXUMRofn",
  "key2": "2cNsvtN2dyg93mhPKjrrELFzYG67UiysYpf3sQWpD4ZZvd9nBY2ZcPjAkuJyedrVQjDguaSLVpqR1P3N3vDARCba",
  "key3": "4UmMC2r1kCkkeWimzJ2TBAaKmLoxyG5gzpswTeXmenLR2JmmoVara4wSffqntpyVeyByUUh8qoHQtpdZW9MMnuCy",
  "key4": "2CLdCGbP8GuNALbbUHNvUkXSYKH2uPJr561WWjg8De4DCsRxU2HaZrNnVMcDcF91GEEh7HBMnZeJL2DAKQHejoqW",
  "key5": "2Q5AddFm4N7ZNMDm3Cy6XFkMbLB4ScyZGDjKdQfVPYpY9D8jfngz6HKfFqcaL1UXCjgJvZ6Vk53ytiyd9w9Hmp1r",
  "key6": "4XPmgQwcFQPeQaLnXekofk8j7Y1EZfRVMnKXS6qcHjbQhNgxeeFwFyMtbC7rtViTfVC72VsKnM3am8H2VSkGxvNc",
  "key7": "oiojLQ23AVwj8JJjE2jMoCUFVHfBg9VFLGC8zRQwfzPvCNhzsei7ssKnfnBoLoiSU9Z6AHKX7RU6qozpGTc7hcF",
  "key8": "2Qyhp2XFSgbfuLz2BZrhwcrkauDHPQ7nTYqW2z2wxM75B5MJB5e8LZLmExUXeuobh7gVwYijvg8nM3utEwDeWPQV",
  "key9": "5278Sn6LYfDBFxkRzvufGM6HemCfckBgYYePiGa2sKCk9ozmM9mucTaYvoViaW5iyWzzoDQEKvbvPdrsCsmUkxLq",
  "key10": "2hXgPoqvvFkmhEzsyNG7UzSZBNXp89hpHNsRLWKxZvXf2daNjhH3arWLUiTxpmMbKZHTFK8eGUTDZbEBT2mqy9qx",
  "key11": "2TScYbC8HuYvr7pskWyqgY9TrNvEVtXBNwpvz3BCgqEUeMYMTNzaepbaWefHuzFjxSi1u1ooNMsCESHDMxe6T9qw",
  "key12": "4YvoU8hGpsiMXMoHKT5ug7R4YmtQ3mfUw9Sz71qAB6cNzg6XCYkRnXK88APXA1RqRQfxavSNBcWcb48QH1rfV3Fh",
  "key13": "3Qqo1eV7THjNGkMcqEYZCQaffCQPFVA6wuYHpJPwt4J1pZ9Zax67R5SZCFa8auryHgSLokxJNxJmpTc5PTnkCTW8",
  "key14": "4EEEy3oHYdVUiLAWx7bcszjyduLhsKG4nVRKFTibUPZkBzeBQa3aERsoyJqeVNfW19dgcQhVoHxFYxRBUA6TPHQV",
  "key15": "4D15VV1JdLg1iq8XWyCvTmr4eZ3ZdffH5dyStFVt3LTqofQfbHJ13kwDHfZCRQ2X5WCmj1uQi5LCdJihsUGE5QgV",
  "key16": "4ZhD1vMZSbuagzdZLzHMqszwSoG9Rc76sk5kTfsibB3zK3biWnru6g1xggpQMJnMGmLX8BoFFVGr7i19JUQLygok",
  "key17": "2CxyqhGmbj6p342zV6WeEqjVapnMLMfs9b9Z46mcKw65m9XszUU9PJEYxXSJDEgYh2XBDEN2Q1BWKZmbh4nYCYdb",
  "key18": "3ccF69NJiZwwMQwQU5eVhw1Y6euesgck8q2LwK4mDEdu6b5amqA6MVCEQMGDbVdF7zbDaDzYaxdUxmAxqnAjPzyk",
  "key19": "4EhAmmCbhzauS4nKoCs7uVaQJjoySp3qqX3cvY6LCfmvPPRWZVtR3GJJ2xpf45P3aSJwaFsSuhr8DMHiJzUDughL",
  "key20": "5PnUHVSpymosTKfRyogRjvrVGLm1pLSJyqyYmwassWJz3qoixV6fqEsChcNrioMvbAo5eXq3MVvrMvES3EBMniL",
  "key21": "3eVRX8sSDM6xFArnhRACVPwBLmZdY5wsGWSrTTWrKFAi8axuNsbdBc3RG4szAvcekEFyfMpnY3ysnvuw4eQHA9M4",
  "key22": "55TEQy4kS1dc72FD2EkGHLNmVVpvA8kTXHJzttwTowPf1kC1NXBHVwY9KsBhuggnERLYgCNBQM52SJT7E5zDc6zq",
  "key23": "21zJCJf161LXmmVGixhbAQsQJrcEL1eteYaSi6tpj3rXZjcpLMcqtfr2EGzkkjmy2rSynp96JQBqjnpzvmCcrfza",
  "key24": "2wS4FbtayLjCRthsQEwdixA6ttvMLBTdYVCoUgKF3hfGJ6NpVouv18Hdm3rVMPAbmqrhKiC9fFrxEKHbHWPmnunx",
  "key25": "TFFFWqzhsjZkcbEAm21tGyNdJuSG37g97epKYaDC4Jki23jiCRyx4zWZgcrAUVW9Q74WuCamkTCyuXMDmizpid2",
  "key26": "653zLxHCb1WLd77E55pgxUnGRv8goZ6KS6jcd6Nri6uZdEy5cj5J8d4oRxU1xba2ASQTyyhP8Memdj9oTCnwXqbt",
  "key27": "qGHkN7PbArwnPjmPJ5fsGLrWtRHdvgsULutRDqZj1HQmAtQwCRzxkKo4XEY39K4h85HNCWEV2dCQF5pZA5qtyXu",
  "key28": "2N8H5QDkSQET1Ji4eSeRZN8GEhoB98JfVbBkF3Mpymc1aRqtXxmjUNGw3Bij159kX5wcFUkHqWXya8Lav1ZTrB1W",
  "key29": "2Erziq5JXqwzo5MzYkR6uUmC614wHaAeGMUG5TxquXZ5k3txzsXVuecdNhwbvjt5NgsTjUKR87aAEBqviwLx45jH",
  "key30": "5zSemhZPcTGuRnxLmWNy7zu56WgRE4Sc2Vi736jhpkWunkBfS5ia6SbcAbrF4zrffsnbHpc8vFBbKN3eQXwB9C2G",
  "key31": "3HeyfWmitv6UdxbsAbWzP63R7W8B4nVCyERG4v842kD8QdaNJBSoMAJNLofGvsRPiSVHqJ1PM7iCP5wDpbqjWYjf",
  "key32": "3DLT3qQ4y9xDCx959X8cKYJMk3PqN712r2PEnguLs9RofVN1nQPB3p8oCp65CZEnoZJVroeCemgGbDQUxiCaVqez",
  "key33": "5yhFgFYA9WJZAwCND28ZzCmCVizLgeUHmhYdihHVNrsm6ELvVtwfbakuwzonQzmDzUUJ9GQCufQHHdSskJpuMS15",
  "key34": "38B1gEfzXQUapJH75uJeir1zna6ifLW5fV2XM34TPoNVVFoFC2QJySrwdAaQn9T1CwTP8beRoN9wCCg5uq1fRvXW",
  "key35": "2d4yRa78BN4zSSX553hsqboK75ZsSsrjUpLG7apJWfABK1657HcJ5a1phzM2tAQHLY7TwMWujeZ9LLkGTuA4TRvn",
  "key36": "3V9LCNcgobT8TDF8G7jhC9QyhGewSpLF9tG8Nehy5KFnFS3RNejL5QRsnJzURnRyvkoW9AU25iUyB5oPBSNkQ8WE",
  "key37": "2w43L7QiuU8L9NagAqaihVhrFvqE3Q5eHTpb6zKNEvhWtPRW9D3yYAXcqd38qNVrA2nLJnUHts92gjmTFYrvwUjz",
  "key38": "5HGmzqD7C5wErd7uV6ubhkR7MbeeV4hbb7g2QepewG5ttbgL2Dm5wmVWBhurMCJtsir4LT35j3CH8HL6iUSHF2aF"
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
