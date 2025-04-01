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
    "39s9nee7eUNr7rp2BEsRyoSpW95msXBBQDaq71WZ44Br8az26EiXiBfP7pFwDADjKEVCorjNoURKHtSNRjrDoFS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NztvmtoQUk5R5iKuEqp9dWd2WmUa4Wgo6x3bZ1soNDuqGx1TQfqHWMg1D4bJ8C73JzrBdTtsZzcgEE2RgEEbLEg",
  "key1": "4XP3VRZpY5UQHiCmuz47v7zEKUqXq1wMYEVgs3HVKN1oajKBmENbtGKuQzKwVmdeddDkWFHJAjanG9RQptxGZhLs",
  "key2": "4Ev1VMDaFAttSzd8vhcqjtVWU3e5ZBi518MfeRuThe3nPCVyhbdwvG9Zob2AW9AEmC4spvSjYiUvgFnfgFx61awU",
  "key3": "4hfpi61U71aFzyZoAMf8VC62GyrL3XYHiKwaTHxNmZktA6GDCTuhSGA8E28pGVZezs2HqHnbvvEg9N1XaFrtGNMR",
  "key4": "57EVQRSquWvfmxBUgZnnna9Ht5PqiiowLxqhk5KJND1fCWatLuxy4JAZ78pDrwPe9vzHKd8vgJLx72zAAEKomJwh",
  "key5": "5FFcE7XoSEc271tAadkUwpRW1xzEsNCSCqA6NEZMsg753P1o4LaXmpYUwtLYtTGbVLtQ3A5JqgumJXjoedum1d6G",
  "key6": "sk2CDDuqXDkhPzJKHiRPxmHa3ikmJcjLzrKMkvCGyfHKgzX5zmiZbHXFW5mFJ2tWTXoJ5eTY9qACtqfZWHwhsGn",
  "key7": "35PSnwbtPib7YtWWpGC3evgQDobwkBKZ9Vsm6UdHtmKwkCafNKaNYQGS3khc6w6pxPnxvTajuBR5bMaMfnr7GFPu",
  "key8": "4JXY1hz2xmKUmqfKdqdcZBoTLM3P3SCrzQTk9iZQdZRHzPLo12ucFWwrhY9aHtvCWu41usywDbJsFZLwi8LcfKLJ",
  "key9": "2sRr6Zh99bkc2nxbWAYCeiqawXXjJejAe8FktZV3f3SSH9D77f7KAysDNAZY8uBfU51heVCQSaUFWHrqJF7mFWpS",
  "key10": "42Z122YyWi44sCAKiR3bfYaqQK27gDrwiDkq2dGTZWU6cEPHK61UVgdqzN3wVTmLsFKLbBa399FjDiE3cUNAaxBp",
  "key11": "5GpPXPYNgai8jewbamRQhVSdWymaLNxbeAbMMmpRZd6tij6VapyaSGQcsDhLJmEhvmQwoJw2bySvY72tYJ4dqfSC",
  "key12": "3dUBha7HygzXUcjDNnQ7ZP2i66ZBrFjudhH6jGxThGxzyq9m3QELcYdKAWDXu3WGNUcrsFu9p6F6EbrUto2QDdpb",
  "key13": "4ce4RugryBNh7K5HfeEWemsC7thyLrXw3jTy5CxMKZ62w3h65DHVnUihh7f77ML1gAvHwkqwNLb4vEw17foV4R8R",
  "key14": "2uBq4vDUyiu2SdfhBrnKVrVTjaE9tLKJSqeWhTEbDTMCssefuBvtatPzzvc8vEsWjiEM2q76sHFG4Rr211b4VkCt",
  "key15": "5jEW2QhX73cBDX2EXSSUCqDDoAnU6UdJ8gNSQGRPVLryLGMMm17sKFp5jz8KWfXXi49aPPgFGAycZJRXBuKSviTa",
  "key16": "3N8F5ao492Aowc1JPh66kJQ7TZ93SmAJ6CKrVHNfQdee62Q25Zzq3BAWaVCfWnZAhPssUb98DDtC3a46ukaTV5uV",
  "key17": "5BXtYdUutyq2jsoK5pxYJyqiWgQJcCYk9M6eDex66ENGVuiNAhxnRAGjLPS2NxNohqV2ZuhZxzQpC9whXCRDh3Nw",
  "key18": "onrMwqMEavRjgthn6rkXTaeriQ8XswqU8fu2a8k57uDbvjqEdPjcL3Yfe5q5wW42Y2xG3q2m7Ax17YxFnmojrJF",
  "key19": "2gHsbRJQkbw3sVjEcTB7ucfTujb4C3BqrA7cXyBe6ajhyBFbNdWsitrNjGfMaQMvW7BymecrA6SSU2McEpn9gb6V",
  "key20": "4hLBwBQjcgMYmLcFWF5H1gGV6W6bb9zDTmLuWZNsGKeHHnumrvQJam4bCmt1ccNYsuh7zx5Sh4DqBVboCeVx7wA",
  "key21": "4AuXzoAKo9Si3848mmkSkJ7kNrUpuzT2nxHk3bEEawNbEjyEXrkrGHG21DEV8kfgt9pMaCMbhXa5KYgQDaSpUxFm",
  "key22": "5euby5vReFvj1r952t2cUcL1QwfQBm1dygtpbsFY2jBzTbYUfQ18JAEbChJnsPfy3YCGr5s3nCw3KmtLbjmK9Yta",
  "key23": "4MRPqzZUUtSfzTLrjETuVGsbkDLshz3nCidfjF16BEDLvibkKDEMjvKbb6wxcAgFZ6d178rQhMoLcgkFx6J6CRq1",
  "key24": "2xgb5VhRMBPpLMFKLMNVzwKa7Bk4kAZ3YUj9vUuSkbXqoVujPCjTs7j39QqNheAdyY4WFZg8fri4qXaocagJ4iKd",
  "key25": "63v788c7GKdvfxwfezcsTefS5XUZM1VAJ62ELSX1UMtTEQWSYnZG9Wr2T9n4uj2qRLuNeDPA5HhAvBjchXtJxPp3",
  "key26": "2ojr4818kDstctiqTRnDnMnwPKyUEWbzUdCNHTYqyeMP69jGeZwKyB8MY4TbvJWCArhWfPbSA4mdiPuiEe2ArxMY",
  "key27": "4DGqDSU1uGUPBxDmuRB44E4JvMAPcKL89L2zta7DEBZqANB71odJWgAi7DWAPrveG8CLtCnnq3NncT38d8CAKKjd",
  "key28": "44CV8qLzjVNnojzx3YCLyQSFgXDoDNuKtbHKEKLKAh9qQyZSqoVEcYFhRDsqFy11ud8YFfoD1ynDads5shaFyQFa",
  "key29": "4KYMBPRggpv6ckW866zdUas3hW4WZuzHK2AZxtm5eMn93Pu1VkKuXSRAQway9kL4gAP7zVTQ7PJ1XGQwr1yUXHQ8",
  "key30": "5PE3Apa59D82GvUVe2GUrxEjXpL28NEUdQasumkcQhzD6T73KUx1dLPLohopSzmc5pRxt2KJtWQckKHgdaD5avAe",
  "key31": "3njeeMU41VEB4cjLx5w3vHVS5m2EMpoK5wc2equm7fykyGFdRHFrm7HHFbtzUxcG3e8ZQhHNncZ2Zp1onDnsTsxc",
  "key32": "a8vERk96dxk7RjEYfp5LGXDzKx7TkMLXgqoXYZqFq5BCcAxkcQ2iZ2esehRhNApgmQVkWgYQ2fDjUzCjUQwhy8S",
  "key33": "2Ay8V47TV37ETtWuZiXJo1nwupxyD72sxwb536zcNw5PAmNuD6ibZPkSUvmgqrjC2AKL9t5k2cLLSf7Ev4ePWPVY",
  "key34": "5UkEDHAecAVzH6F6btuw9CKAG5LCbFPHnUhQsh1XxsCREB3z2i3CFCp1TXg6ZzzYisDxeaUJoUF3RKPNRmJXZbg9",
  "key35": "5MiY1B9fEwxNAXFAf2jNgLohNUNAeZXKyoaT9Ue4spjmdxKJjYkzNrEduCVwS6fdQNTfRASsqJGsg94ijZd1YHzK",
  "key36": "21p9QpSLLsZhvAmi2f2QjTe6RvY9FtTrmUoco3YrzqNovKVEu4g2J6hNLo9gzbXLeQdDv3z3ZikZkgbxgSHXj51D",
  "key37": "4h4yeXVFyMJczDwK2sUUkxW7cQ9QU5x58LyMybAgxPZrDUvCLAPqYQwQbDLtKh4BhxivqMPcVy4WKCRY3tcrbsdQ",
  "key38": "2L7C6nGzw46ci1gCephzGzF8Gn1QQ3seRhXyGpiYC5iXvnsWPafSfTSPJvb1Bf9MzwJMTqbzFmohR4jj3P2C9Qo",
  "key39": "3PKyc49PEDUYxaC5Wi2FGrn37gNsSbEaE9H7jJkPXJRLRmaqBtKukKkrjMtdA9YXG2TpaST6XP479KnAMYhZ4Q68",
  "key40": "2XpN2MxG9vayQi8fvJDYS3Ni9QTqyJSS7E7248sFrcfdyv8Ls9wib3ZyNscSse7zE5eBxSAjvCnVs3UqyvtpiTsR",
  "key41": "3CTLRCoHonAyF1DnNbopNkpzFgqBs3x11NFo5Uc2QAhbkpwVygznRkyDs8ca52rPacKKsNZ1vuEwHrZWirSCHdYH",
  "key42": "4fVm1Y6u2H8rFxgXyYML4JKVxm78tZavqPVupmm5nbkhTHsCitBaZHWUxCPUsVvVVmvJ9i6uYVWjf5sTuY1YL4ie",
  "key43": "4x2f4DZqH67YydE1TH67QMuDVZr8fZNP2nabTFkpXiD51ZrWrWdaEz5SY67ooXX3TZdYp39aXT3Cxxt3KMSMVv9A",
  "key44": "J7BZdLyMBBzvDkNqvJvroUAzm69CRSdCY99MYkSDxvsMVfFokNm4UUMpz7DyWZX3ZbCKxQQUCqXKvU9xXBcYKm9"
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
