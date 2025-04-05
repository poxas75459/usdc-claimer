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
    "3x8WoTZytcMRZBw9FMTG2mo1VUTcmo6VZLtpnZHqruJAnye4FACGqnLBrVyFWtJTL1qwE3byqrZmDVpViygynTQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33U6ThGYGhhxFfGNdj72SUmdsPBsmkpSLhm27pHaRVenzPVer4GbctkM3ZFyEro37gjawnUC4Z2mjk2XxY4g5Xm2",
  "key1": "5wQzgUDwFaAJkenRedW4wshZwF7oazxqz5dZMoouGpN4ysaQkA4CsJ5hACuZA86bTuJfCQytHwxLZKM545y3WMZ6",
  "key2": "mWEEGn38MGK9z75dWj652V5rmkCUCKwfR2MBHTy8LhfyCv4cCbdqAwU1Q5updunxRFu32V8bTuWMukxbzDen5Fz",
  "key3": "HA7V7a47Ywb5MohRcTAztmZW6G6PboRM17dpMLCV37Fm1mU9kt2cZNPXKwtaaUPyknALtWpc2zdqDJmszgqLzk5",
  "key4": "4tnrpK4RAeSRyDDUfo7MX7m63gtvwKJiKLbKgnw6mMXhWDTBGDeNeaXc21qj59ZGxiZMA8VPQ9Sj3UhRoQBLdP2h",
  "key5": "4N68Ep7s8kT3P8UkqH1kG3agVbfxuyTY8D38Bd35hMYQ7SUeUdo6AQu41wCBrwqNvVNWv6cBpTXTB3VxzuuFV6Nc",
  "key6": "e5PYqmCXGjMKhJ4kcm9Unt6xQyJgyZqAvTpDxc6PS4rPGYQTYEQX6WR9LGrnKgvY3QRdxc9RoH2PUHdXaH96Kvb",
  "key7": "2ssvLb9BFpMu5udEa2V2HAgxBsFQLCyzjwTQMMBLjNc7jfQD7Z2wcQfuJnEpfcBf864tXaWVwFQQhw9dFvU7c3BE",
  "key8": "3iwxJ7ZAfLoM5guuhsiRNJwiEU5sUMhca9bvZYqqgJaXE2a97UMayUMZZC6776UXoT3FhkR9s1x2YiwBSD1zqqxD",
  "key9": "2evHMUUFc3AGKS6YQCQJF6P8zFkTyGmAbFioVad5CrTJjGJgs3P6mUuWWJH28A6YR1LbBKG2MuXEGYvxa3Y49B7J",
  "key10": "5ggJUmTjLNBof7FnZEwN89Vxzf95UFtA1HmQbQKnjSnbz9GqBMsqLzxwYmGCgnFpCBQ7Z3g1wLAxCo6juN6MJVtq",
  "key11": "p2R8mYSFqvaMhVamST1ZpjxZpqvaVBCq1g8hyiNSLPoiCkC9ikn7Ku2Ap16ow3YLcT8EwApvG9WG2CgoSeBCP9V",
  "key12": "5hYE2DrRvQ93f2GeERpv618tihp4VyfcYsxFqk8beC1GUpc6JecEPopuKBjdfQajfRZ19CskDr2gCQdwz2yYb6hh",
  "key13": "5LbuXEfz5TVLqwp89iGFMj22xJGMxDsWkHpps8VhUAs7g6Msz5zF8QVm4CZgZrV8p8tG3okMrZDBvzDFqskMb5Xq",
  "key14": "A7Tm4wtmLgSJjcqpUo7d3TqVMkvSS3yprkVaWLC2jx8PWgEojHBF7xY7MLpiFrhMRVKJf3BQ2mKi7DDDfnRisfZ",
  "key15": "5U6hKzxULBJLN58jRqsJBpMjjNPSZ6JED6vLVJ4kMw4Wqs7P4eizKutRrpeWwfk83sZwZYm1yBENkpRFb8dz9HmZ",
  "key16": "5M9tRZd4NsTULCPLMtnwSqTt9pZMMo8W4bFddx4LpHUJhxzU6SDwoJpqfQFwRYPWfvh7rQusKMS5bodHGevzns1q",
  "key17": "23FQ3KeHZifPsGDTWDJaeuPVCpR2CBpZfaMX7LTyEgePzF4AYbpJzmB55QotQGBfr6fQSsXM76X9YySgf1pKLHsR",
  "key18": "5WiG5fw3JPziYnikVaFinwFpf2Wmk7ZJ7fSxayPuMg4NBnhA3ZyWx1qgMCeAUNjERp1ftctdqSAiG7eWz1HXYv3z",
  "key19": "5pQaAtLhtywtJQgAypjrMnDCXZzkW5GjuDSUfFAL2dgZi7q4qW91Wm5VqGyVeNFoPYEmf9JGgB3rADhvBTNgzXgj",
  "key20": "3HwjHBTTYom72byP8tbmbQLvawP5aRfayuUvtCi94krdc55xVdEGePkamwCS7yuzZoCFcHxiaSQMyzMXdBQVkDie",
  "key21": "VuwbwhnudofCgd9gfbAMzhRrkZSkQMJ8N1P4qp7AJ21dwUjs9Np2HWgXg85Y3B169tkJykto9he6Wi2RPgFSQ3m",
  "key22": "KG2qzR4oHwTcBSo2fJTsHrrnJjx17DrX2UstZzX43rfHay7wHBkZHTebXX3dyGjK2f9RkHhNRbKmWhLNsT5T5e6",
  "key23": "4sCNMkUDhYM1LrEz3gmDbw71MCVGPtMACzLTqv8JKpMbhN2nxeehYdhZW3mBhYujSTcDZYp9G5jnUQLkQTBQ24Jf",
  "key24": "3aEV82i6dNqbzQ6omzhZRkUu5kazybMnKMkGPSiNXZu4JPz73xEST3HcYfDDNbEAaWheeKTf3b78uC11w7nZz3L4",
  "key25": "Xz1ski7DB12gnPaAq5N7im6NdnwWiTtKZD7HxR2dTdwDWJzz87JyqBVHTp3K4Yx9yH7ARRYp9wd4GUdhek3Cz2P",
  "key26": "5dHrSwHxySZrC8k79b9zj2zKGMJ2cKaYGTHk8oZB69o8fGA8uYK9tTWKUQSZnDS6NynfRzW41esGVJL2wME8ANG5",
  "key27": "3zkDU4RMNXLCsLte2HyQtEDisRWYMwsKpPv7bhLpXzrhiBzHP9yqBzoYLr9vu6rDAmgRH3mHoNsRRBgTZrc9qqJu",
  "key28": "3PFe9yZCRbyECX9R91PXPCLexpbZd1CpdLGwsaTnHDtu2dNdpLUrTWd5fSXiUzNro67j7HDPbYbF3CqzmcnxWjCG",
  "key29": "5rui1sU8gvMsn3eMtLgsb5H6j3U7fzYKZCJnZaszNRRHA7ZcT2H3KZ8t6oGa4VxEXvCd4i363bJ1pt6mKmWEAiFq",
  "key30": "3Jgmdf3MSgJTfKcKktk7pfLdAopwFSzbLfSanyVTFJwqiSNxLntvLVCavB4HL5XBBN6Md69QczzhtYgn77Ez4seM",
  "key31": "4Sr5BzpNJprF2igibYikpNSqb57Xw5C6xhxYMPqsETxAvyCfbRZqLskszYTSX8pyi7BY6ezdADCFrkjXgy4skfUV",
  "key32": "2vCQTTBjBQh1Q7P7CphJSKrrGNVguzSGJZR7SEnEUz5S5fr3LSdEd2K2hsa1vjf9njA6FCLmwbW3wvazjgnXTgna",
  "key33": "64VGvMPrhcvriuD7TnbhfaQ9CRXXbiVDkbVW8y4aA8znX9bEBNjdjFdnbm2erahX4kJYDGmgWx2VZipTv37LwU54",
  "key34": "o3HjR2a9GBeaDNCKgbRnDzz9XAo47zQ1kAncDGxEPdH8cDXvdJcLmdy9RFnxhTkoMZhbfvqU4mMYSymyAqqM3B6",
  "key35": "2Dgzxvb7ohwfw5EZEQgg4PsgyFBFq8VCL9WmvZzkgvC5qyMmJp9A8HhUD1ENLcUFsp29gtgwyz2YfEGrPBkHWKTV",
  "key36": "2AjbLxbpJ5bK6fuD4sWiXqNKWfBQ8powhDBmpr4VxxfraKPk5NXarGvN2NHXHibCbzrER2R2LaHvqKUPKCBEr8Q",
  "key37": "4mE5P9RotKhyjFMVtEtgoxZjwkhuNGRMFQfzggMuGmvvYwh12VFxM1TxjKME5hZ98z6YeNtqgb1iqqFCgqEhxs5m",
  "key38": "BoFBR5Rc8dkCqruLfXmfa4fMumdJZE1GQMNBKP7K6yNY2qk6JPWMPFdQoapjfEFUdKekQiZNjM8JjXctvzk1kAL",
  "key39": "3tZ1t1KrhBKXYFNL3AdjP768iqETda6wbvkFp2EdkrtMkw9WVbkPkdNt5q3vYHFSSC8q83saBED85dgBrFZdG2Hg",
  "key40": "3rFxP2JZTvvkAvAqYo3JTza7bDGqStzD8NGrUJv1xSsShenVU7pUDMe6po6dP38RhxTwXWayYoej2wu9MQU4rtrm",
  "key41": "Gq7o5dPRhJQw2TpYrcE6xq78JEFjJyatPg8kQRPRatD2GSZusWjmh3orPFVj9gmduqQdUpzttwiiEaPQJfsdysK",
  "key42": "4MjuVUTkWgw8iztSYGfpoxGKAwzrhRqY6ASH2SBPWWKeZN6mvmKB7jnj8EurYTh2avDpH8M6Jd84itzesQwFkcAf",
  "key43": "677iUUEq3mJa5SCMFk2qwdG52PBMGeSUBYBvhDvHvuYKw7wjAfPmRkzRyE98WrjRLDEhaF6rv1FY6p9bnB1cKYgv",
  "key44": "22mNefEtHSexsf5X5cWgCaPSJQsCmHEt8pFGNGTVDF8q6UvWaQLvxmYWxSKwnPDARNdTkh7BAcJgfrbjRqDpBxeC",
  "key45": "nGzszGVNX5b4MGEtA7HDH49mo8Zs11pdPX6rm4tGEvrY5XamkxGNDAvWAGBLX4nWgBTy7rZYT5s34aAcJunXLQW",
  "key46": "2UAsL6XsLjBG5jgGTEDKsWp9NWdfU47Ra3ZgnAswCADHhP66CWbTmxzEGb3sH4dLSVeaxnUftAh2YxWE4tzoqBWo"
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
