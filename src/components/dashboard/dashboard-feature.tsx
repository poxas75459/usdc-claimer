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
    "5BRRjfpiSK2cQh92N7xwvHu9KPSqb4sq71QxbCHTnPHvK14FGuMak2RSNPbH5dQhpr1BraP2sK6Rp23LVtBecphX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tbvCsb9tk2YJsYJBH4NP9c8WLSaf8maMcszMJmAUzK6fYC81B41htNXcBLhtiUfLwDHUgc5PjDysiAheQEvnstL",
  "key1": "2xbce7dejwgcxundeyfWwEreY1f23xF65UvHZGEn2foyDu2cNJ9oyTYRBBQBci7TVgUtN7HxxKBBgYe7nZEHJtkt",
  "key2": "4BfukH2sBZduvJuYMwKe9crKCk65tFnZSBJznPRMzBD35BHtMYzqDDydqX6xXNLaLrqjyvRXyRaMqXMCvKB2agFq",
  "key3": "3w6DsZDUQzpNi4LFcNDJeBpRyKrEzpjEaCcjtMgAA3JGorF2LQaMBod36GpksQXbGNG64viqL6J5gbTygjUj4mwd",
  "key4": "3HcmdxFPdQ7zJwsCqZeCbjEyTpEPr1FNxrsAAjwyUUwDSB6esSakRUfu8WVo1rJit44R7ohG4uSxCnKmrduWZHG1",
  "key5": "2qNkEmwSqaDEyxYBnzpdQ7CkEM72TqYY5WU1ov5km5GDgMcEjEDdD5kqUk14UhMf4s6CgW1m2Z41DV6L8qY31fZJ",
  "key6": "2YL9mtPR3nGG2TjgmAdfh8En2yFmogHreFDBPGq3YzWwqzzYPr6SZXLdqVmsvUBYNbgB36UQhHcwsHPjyKvQQG5o",
  "key7": "61cKf8cV4ZsEBDoULqBujaU4214na8Knt3UsBxH6VDLRGiBrz3FCgneKBaWkWRB2BAnTJhrzRjWe3D1ZixfD7it6",
  "key8": "3Y7Zak8PYjamEpiiKrU52iWMthJj5eaXoaCSYVBiEz9eeJd3pEXwkUZysS1Bpyeqrkk1veTygn6gdhdPJjuVNUsy",
  "key9": "588wwexx7SYwEYuTpojTZj26yZgW1XZ5utfjC3PQpZvEVrpnicDnpzTLTXz9NKczoSHr25j71QYRnfhfemU3r8yp",
  "key10": "qSxVW6JLQXe4AU1rm2xpTWHwRuDa6MTGRGAM7cDhRzL3QtJ3Pd2nU9RmKVBk6QjfTHgEAka1c7HAmb9Zi5q3Qej",
  "key11": "3DMDSwFXAmYTc4E6LHt5nYQByrkjeyCfEqGi6aMpFFWY9kjFxAEsJuLUbpRJHxafTmEYJ1A6Y5L1EKDfMtcjxE9G",
  "key12": "2KF2e6emWHcG8yrodVyHWYU3BKtAcFF7x1M97EDm79h1T3Jfgoa9BaE4rVjL5ARMW4v2y4qoDv8puUr9KhFZj7x3",
  "key13": "95BZA6ZAzqDnaivYrfrnHeqUcrZsntNoc4JCBMYrohkwqmLCnWPZTmxGr2mi9m9axbjRz7NQCWw6Rgfo5CDmkBj",
  "key14": "5egxWYkmHrahpE6qYmmNGMQLHrFeaehLhnf1zHsiqyVtaNVCZeCyoD5pLD53oe4JuFUi9gPQKs9w69f2NWa1Sjhg",
  "key15": "4Br3WidNmuS3ks5JvsB1DgKfn3saXbaptAS92FH1YWW28a3Rm2SQKAoY2Ri3kgWM8tweaukoCvYissPukYURYx2S",
  "key16": "4UKPkUzcz7CGSHiuGLyT1JwsDW2VLAqK4pfxQAMDLvHE99JmcPmMUcPvLCZXi2gMQebx64se6ABNKJrRokikPu6u",
  "key17": "2qhsDgKFQhnrFFSgDFFHmFc88aJPB9NQ5Ted9BAQgWrbi4aGU2JnhhjiiQoWF3P8yjeG5mKwfbupwWVZG1mCmiLE",
  "key18": "3ERQzhgUSmdts9jHJSbRVE36ciqWhRMV7K5sNK25xcBJB6zmZEwcM7ANGRbHRv21ECDE4gtKtscuV6NFdQKUSK2E",
  "key19": "2fbCNXcFmVM9nHbNFMyrvqtxDtTY2Z4Lxe5gBHCisd3xvCzPWFF2Kbi1chTWVRnb4RSBbX1u5WDUm8uCxtvFyn3i",
  "key20": "5JcWUxH3EFLrKfCUyjHDZYsAkLTjmHycFRmPyV6KRuaQVnRCb3U7fCi1wZMdoM1ajBcRhPYiBUE47MCphaA5qZYQ",
  "key21": "5W5WEtQbWHmyQyhyLNBvJugq7mkfBRrs1axEdbXcLmq6USC1edAuXyRVUt6YBjXFDXraZqcXScXB6EwGtbCL83hP",
  "key22": "mYnw9mjErpo8h4FdkWo86u6ZubrtHu6GDN3kF2gANQsij5xzTEMPtWksdUenvfvq9WwVfxeBw74ijuka11EUxdb",
  "key23": "3DSeLSPFKSu66NjLtToPXbgfUyhciAMhQH5asUmpfLGUNyif4oMGvVPdYjbYu6ZeaERksPdGbQu8GGKPgwJtkFDs",
  "key24": "2xWw8LLnoEFBX3ZEizLx33pozp8r21bGGVAwDQMqp9SD38gtw75M4j5AkqW7QZJnEUvQMAG5dZvmUAuLb6N21SHY",
  "key25": "TGke5CPVJAR9bhw8YvSesEN9KsQSy7fF2fbKC4vwhGxNWc2tgELwu2BPcanEftPsZeN6gqSKev312nheFLX3uLa",
  "key26": "3JzSutCxWPnEPbDCbwbdQjEWF3a3Fu8qAdLeKR7VK2HZ3iyz3Pf9iysM2kxSyxxGamtXvTCRE6A3LEPC26ehuA5W",
  "key27": "57u6dFpsjAMzLzvNXp3T9y3ctaYe9cS9n2BskwKM1nqNo41vT5ebcEn3VmQ2VLpFBsRAxZBRT1pUdu7GqRBPazkG",
  "key28": "3mzqiPKQcWFsxXvYPZpcGm4DRzHrPZsQETJzUoEMLgCu8hMVGxu4zETb3dyh9tnPxGMeRLxYj2C8d5VCn23pjHoN",
  "key29": "512DBnBT5LihDuq42taZM6afN9g7hDuK9Bs4KGmTgZDetLkeEnNErFMJxQ7jgc9fptRaFJeY897R2G8cJAJR8xyW",
  "key30": "2PTG1jfnVkL5ApdgZgbgTa2DHsFnddCdewW7mJje527zXV7aUxUhU5RWwC3ZxNWxUbT9qNu5mTy9NrgyQiZnCjQY",
  "key31": "4TNTo1uLHKFoNhPEgTemVK7shQ32rjosnJSbAHJwQ3TdDXRErmuESzeKX5MUUSycCZW9bbYgTCK8aFVYzWysENyp",
  "key32": "JuR9xfG44KEBcxnq5tQYaPoJdX6sLuDemSVyZmUuqCMiWhWXmxHhLC7L8H1tBkFM62QUgS6NrQKa2EamgTYSEng",
  "key33": "3P3B8Lg2DGqyTUp4sp3BgugxSXQB1kKraA1hAYz5N9ntFCNXGUqVjSUzUGiHiZ3etNL98cnNVK1uEtensdqN9yqu",
  "key34": "5DQAk4BPdTyABqiTrqbhbhk2cZtQECVtQxiVj8vUCoTD5xvQbwU3ExEZDFpAAdoSdMM95aDfu2iTvDCunkDjTFAx",
  "key35": "3D1b3snkiUVRfhCuN8ApMVrXSLkchFfBGuak7fi4yMoCaZfYnQ4SmEJamHVdDMWTXeMzNnMahwSnyEi2qrqdNZhE",
  "key36": "6od43aZc4vEe7tVD4oQP9rh5aN3BPpUDSxTAe3Qmd2aL9SQE8xyHEkbyWFc75kv951YuRGKvifVhuRNrLNrjDUh"
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
