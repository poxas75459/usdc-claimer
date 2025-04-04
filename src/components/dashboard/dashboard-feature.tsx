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
    "5aVSjeNaTFjwRyynEAhwiqdAWJCZ7fK5BrqpKH4nm165UfziuZ4CYaaPCy4QCRvxM8Jtc5eRk1BnG4ghWZT8YK7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLY3G7S913SSpHhEvo39xgiXsjWnB4BadDSUCWYjppi1n5BRbhwPQ9jNiM5tNAZVev7md2i4a22sRA3U3qBZApQ",
  "key1": "3wxyQ1rd42r37ijqbpsHXDrAFP2aQnVgYhwJo5GdhxphxeBSMDT2jFA1KAt6ZaWjNtCLgCWLoR5AvgrEpyWquTiZ",
  "key2": "erpRQcv2X5cVvSVUwavCKSwTQjUhAbBRcCgvocgUhvt7wP7KPXM3mydC3NLgHw31ky6SPzkRBzSeXAFDdozBDtt",
  "key3": "46pg2Z36y2KpoWKvxh8EKh1b7t1yP5DLQNVauPZAbqjz8FkkddqqRSahEZ7vDHD3YrpqJBnoJDUBuBsKKKqU5kuK",
  "key4": "5AGLtJmBj1CH7GpYKYH6L2ssmpgKpG8izuKTRqfqZSp9NT7VL3Tu8oWBkDmHMprpnAtfH18j9SP7Vno8yDi6o21C",
  "key5": "3GRAzj8JkGYGmqNsq82S1iyn9x3AiQb5Fpsxk7jRBsbCER7nRmfEbmwLPc6rfDSWVCtSfgQFK745msSL39X43KT3",
  "key6": "4EEcGr7TzbvNHd8c4iLanARwEM6Z3ZuVoBcSH36r1nmntyxQcXq2iywKj9n29kMuZey5Qfd2tN3TNQsLfKGYM8sc",
  "key7": "2gJRPKhWYYLCYnfPFubh4fmJQm99L6UhULxucaw1AsSPRvKA3ozmmfLsRF6woXDBTsRpF3547LiFhRWSE6PQ53gr",
  "key8": "4NNznjVANFMtCmfzngAR2bUouALhhZ11BoGfwxdfnJ4wa9BMuDFKaK6MvL8xEbvKcWYeaoUwJiGHid6RBgyiJKAV",
  "key9": "3Yn3iT5cNuqLDN1yJHcyZAH8xsrzhoYeQti4Ax6Fo3nAyizvDGuTXjviizyQAv9kFBPUsore1sXVxcSm56i6TEL6",
  "key10": "4NCg6N1BHHFnNshVJwJBPumLYYc4VCN3zRT2BqQq3LYVgKnWVzya1kgVwZihf5xLB9g6D1KrEcafyGswEKU8YCoK",
  "key11": "36etCrAKJvpK8TuZ3qcxCzTKw4vQgb2aXeXGenQkp5ogm1s1CoXa3piis2ktHLPJzBH6CYyLADv9WnQBLxqHGtc2",
  "key12": "4n2jTni8h3BCDE51Rg5zRXHS14ZU5hxU6oTZWHkYgHKskc9w6mTSiJE7VfkhNiSXC3CZYRGju5XCYY8tBcLbVKaR",
  "key13": "AGAXPv99ijkn3WacCA2xH6wRLR7W3j2emuNwmbohHWJN4CpNrLp3KoaiKodgnztuQyYRQofp4FUEwEKTmdi7Geb",
  "key14": "4YC9Dp49xFh1Vft43wPmdkfaR9VHZYrgZJpex7Dv24WsjnAgUUcuXTwStq6sDyowEnPob3YD413pgDjSC5bbER3c",
  "key15": "3k9fj6agHQBPz4a2cxyj7uTJoVqvLv4BAawSZqXrwmzPLnNFtAVcqUH7kUE6h9woZXFYuMvC4yAFiTXJJgPmKN3T",
  "key16": "3w2Y5C6LPXhp5TrHULAv4pzYsm9k4pUdoRCewx2mc1t4p49VZsYmQZhrJiqGit56Yp2Ts3i3jihq3zeDeZKKumgu",
  "key17": "4wDgjSeeqTVXLibmCLKNJN5dc2KyMEhf2CDP1c5gQ9XtfJ44K1qQNykyiDEXWZy4SqWYVkoDYWSRkZ4sbuzsYBWH",
  "key18": "4SAudJSiZF2w2dEcL4aSBc84V7QPnthEcPXWxgh2ZpqeBzap1sDykTYFizRVGW6ZW9nCA4aNoPJzqneRkJnYHJ8Z",
  "key19": "4AViADj3uW8FyPAhWqTTYmxbnM88nqEae2hMDeGbYw31A33DTLgEKjNM8LuBwRQ41dTiDXFq9ebQw2pyo4KaHetM",
  "key20": "36169EJnGsn3KskwMxRJpELEa2ouYwgtta5bFBP7jCmanYGM1YAf5Yq9LajLKuaMpAJsFuqfkZsZmk9c8TY1pZ81",
  "key21": "3nHCf8qVAj7qeYNK6qksRqyNXCFnDUZmeF6WVEHX7FNrCR33B9FaVfd35cDeGnhGyBaZVxeWmyM9AmbRbHLkek2j",
  "key22": "4PTsirqzZ915mMjtNEcqAX81TamCgJ6nRDQm2UAXcskJbdG47BRZzYo4EUKytYAzKmAs6sUaEwuXwiZV9XmTxDjp",
  "key23": "c9AjSudTj92nR4pTJRudBybL65DHuPagA2BjcL92GFsN6MNbSGgdve7dBLvpSvYmD6JtGb5egh1qwLVHUZKNdTe",
  "key24": "4MwnjZizVM8wHmgdGtxmD4k1dmJihCPdudKYDNZ5T4dwmBg2XiWK1pcRC3KU4UwbBxjt6ZC7aQKrV4C2u8wHDZiH",
  "key25": "qZSkb2SsB9zZL7bGEM6LsQTAW919UHiEnRJxQZ2Z6KEbTBa9D6K7qJgRgyxMivjJdihKyFWogMjN5A3x1BRbr2c",
  "key26": "2B9KGqtdvDSqhg1arNc2J7P1mXF8tL3pH49pPnub7VdkWRqxiowGk1M6tPtjwf72ABGSLGt7mwWw6AAvBMwRQgWj",
  "key27": "4FrsAE15ufDECmgqrgKeEm1vLGS86aAU797wUQfeyyK1K1vfkEdmuoVCWLGiLFczGAmDaiTjCGpN2qZwopFckK94",
  "key28": "5VTyjCai6gUdQkh3AnrxJwhDNP2g9AChZf6d3geY1i8iuKA6RJ16SU9ywE7RXymYqwrSb4APvAQh8jtGeytcZH5M",
  "key29": "3UcFshghVcxoisF6xNymXjFVksnh5YaYTJZ7YHWK6bgu27deyZXpBEMvGGPUmLJawkGkenaWqjAWvzmjFqNYg78g",
  "key30": "6JctPqFZARSsJLNodSnueg3o2ZaxmiMXUPRTwxNuhMvZHuUFRyy16EyNLF5a5NKhTvdv7MU9dumZ3tWx42Kr4AD",
  "key31": "2bcoDHNmsvZpvkCxtprwSg5te7c3hJAiJqsLhdoKt6aMnnbsGJfhCGQdbbyoTfPtDde8ZfhuUZyzAtV8uaEbQLpn",
  "key32": "4C6WJFoU2BZDGAyz8qXyUrXYEFoiS4may75LvZ7et74uqFAvYcqEvAZV8zysUNqq5W8WMsjtAb6ZQLoVmvkJiUSu",
  "key33": "pbPh9VLgnz9hXG5entqYRVg54zSuw7kmLYiykwTHXzcA2kpJco5kNi3WzTVKNFCrqpmN2KsRVxBdxX6mrLkQo6M",
  "key34": "2tviHwWhBNvXDq94zSAXgsjvLLjUCDASL7vrQRjWvAGhpUjMmsBU7a3v1QjcxfAeiLJV28QhfFqosZmaFCwuBPPZ",
  "key35": "8oJEM3prLm9AHnP33qnhvVUqkWXfd1Tz6wH2Yb7DJpdi5YtCazLi3Vshs1LvhQcGuPhMQxkgYEttMC1GeZyGQuq",
  "key36": "3BZRZovSDJuw8oCQqH7Gn9pAWmZwYBT4qbszMc1VjHFBUDAZR6BSvK13FDcGc4i4qdKNhvSEJrLMjETm3HZ4brvK",
  "key37": "2Ep1ccdfgnkrpTv398kj8R2LCvsDHknXH89VVivRwAnafSUL1E7QERuNYwS7riMnUiFAo1BZW9yjr9wATEBWfhAo",
  "key38": "4Dbhk5w7fFAv4kKbrK2pkL2Rmv6qh3ogs92VFonBAUYcsoJPooGh1t7AtCvNUVhPFWzm2ec2fxPoNPfecvgRFjgK",
  "key39": "2UUSt7TMtxgqteJDYt5J64SukmgyUUpWUHMYV5pF2mWzhYwBcjpp2mHgMXXh1SmdE27h6KhzEqDaKLAsJCwCQSsj",
  "key40": "2BjYHgPE98anBXpoNdLBSkeKLae2YzQ1tTEFpart93Gto3sxkL4UADQo6PRu3uBJMvy9rCAeuVsYD3Rr9cpL3CWr",
  "key41": "3jBFtoPZstiqzGKRrYm6zqeK36LapRXBfNpocz7c4755gsMD6odqEuhUS4yr986pfYGqj6ZVqsUq7ScoSqNq1PCa"
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
