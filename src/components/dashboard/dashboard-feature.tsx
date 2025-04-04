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
    "yDvEvv4kWbXzVFnacjnoxhcqFQAt2fgArNjoJYvCo4LUiyDya4sR4FK338jytT2D6bvLFWnFWgmmuEMhyAmPhX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hSXejsGbf5WmCi1xsP8VhCRgrw5w1j9k87gx2wVDuouAF5npZViiDPFgTm1ERTxMpbs7NjXoCBykjasaEm7cNJH",
  "key1": "5uoTNF9XUP2JE2tRF1159hC4QgZ5ZWJScZdFHfsyY85k8SewaczE9K7xy1vyBNUrbzDEMq9vV2YdnpkR5N5LnAch",
  "key2": "5Gbqapj4BebLNMexpGFUP42yrGNGUqFPFJ3S74wUiTBWGHgjGJNTDqRgU72yVfqqFUqQ1B8YU5FrgQAgGE8LaMAq",
  "key3": "3pppMt5PoTJpsFbH9k1crmYQY3ra52L76NaLWh7Gqs2TLwR3X5DHRtGRrdYvJsBcGF7wGY1Nw5bi1LmTFfogppen",
  "key4": "5HufNxpzWyMA1ikqLgje4aX6iPjV7qEMxqivA2hXpNB1sojAmDodwP15GgQnwnEcDfPJofqGnogCgzpSj1EHogwo",
  "key5": "qC75fXof63Xru5csXDPqVN8SLRwBjcwZ67BbtEaTdKEsBNTgweTx37kNnkaj9Q93wrmpNVRaQrkUpuncJKuW7yr",
  "key6": "5z4TLmMghgxDBs4n5mrfFoccgAuxBwii6rr2NLvPtA2YHPaczpJMXjUXmjX3hxSo6Wd6SUAkkjemGSB92uX6V7YL",
  "key7": "2nSTgRfPH63m1Z6kkmEWRzUgou51uvkSCftt2kqXh6nu5A8g4LjJ9piHdgR7RjFPV215zAB1q859Px9mpNFv7M6j",
  "key8": "4w7isg7XSnxGUVypbKWbqrTZnqYsd5RqBDpW7bbC5oqjzMd2R8jkhveMEU1ynobFYHUZfu7YL9Wr67SxpE5EARAZ",
  "key9": "MWzcLN5krfze4TgQigsY97gnSSCLNw1UZhX6A3mvvACorEHv6usV46S3fvuqrrTaVwSFF8bDUHG5hZpqydmzx1i",
  "key10": "5sbg3i3E1JVsQjXNy4To4MkGYuB7TgZZLBUhswWvvXHvqhipuXMPY1k5ecbQpZte3qc24bDXpww3EfUsBDcmA4Nx",
  "key11": "p46wn5C7J8EjeTYLCCfsp4dfbDyjMFpxMHLf3omiLLpeQuvPRNhZqdHdztSna6L7qCR2xpX4s6UFiEpwFTgyi3y",
  "key12": "Apuo38eyWRR8cRSo1rsPPKrgwN9xovpVyB52VCoF7TahfdgP4nmU2Uz9H33XQ43gKgrgkt9SyBGqySXgd67jWQm",
  "key13": "SPVFbAvRosgGdnAHsKUmCuJ6FPeGax5yDuE4q9cRxnn6tWT6DNgvejSTpVoVgh4vxzpkqBgStYG1QkDY8gNtnzN",
  "key14": "5tN4KDbeiHmZvUH8vMic6j38QPibQNNK7wAujk6gkj6JZRA2cCVs2huPohkdv6QLTEWZYD7LM4AGVWqajpWy19o",
  "key15": "5gWAGrgVKywsa7A1E42N8v6tTxqG16Z7zsFD8pcZd1mhT7jF4V4KH5biANgKTSm2NfNBGPyXsR6WiTnf4rFJW8gT",
  "key16": "3N5p6QH6oZzxpeuDBhyMFhQCGb4fjgqK7bSUnMAQPAm4jH2uicYCpsJvxSHDBYBiLu31vYMPmNXLRDH3HzVvVaTD",
  "key17": "2Dm733cxTUEnVLhaKUjAACW9MVeoF5AJugJ8XfSNYqAPjNZjHAtpxcYo6tk5Ty7sSvaeF9Vhabe8DfPC9HPDpqLS",
  "key18": "3pmoKt6NARNWPcKRnkxQkXG5J9jBzAS7dd11NuNFW49zzVN3wkpawiELBjP4sQkT4s466Li142v6HBicSXK9ZNok",
  "key19": "5Ar2sSu47v9xvH42NqfF4fARZ1HoehcnrKzM4sCrr4V3xrRbLYnPuPsHykvCZKreKPkEobz64kc9BFhVeNKDPnzq",
  "key20": "3dbp3DGHWJ86EhDrYaEvCKy9pUi97DxobSg4EW9zyaZxUaa8Ea7fSFcvhUurq4PKkyvyc6WYUrnC8baMoLh2wTP",
  "key21": "5c4TDKtwX2P1W2UxcyZVDxNTaj3r6pikNhKPDfx9yKAPKMypEZwPMS7N1vS7GUopmncpoFquRhi4AKTWWuEkPhA3",
  "key22": "41fu1wuRXN7acViVdidEiBoc8s6iYaceZNxtgJtm1tn4gjDzL2LRRBXF4YprMsrKE9V56H54DGJuz7exyNsTAvns",
  "key23": "3337a9YbYgyqJJXCoW71ercvAVbM1e2Viaz3ua9nxmdmm4Rz6SxEzDM8tApTZzKNw4dSeSvHtV78PCDmRJ3GWZcY",
  "key24": "5eCk1vkyb8PkVoLaG2yTfSbJxU7mzNRV3YafJuhb6ZXHHTpD8N4ZpdhwZbWWLd7Yv7wtVMrUEXyGpktAKAbqJBK2",
  "key25": "2qxafrPNs5iyQ17b3VxeRnV6oMY7jfGpoBRsZAihD9nTEQXPNtoU4W2Eq4RLgwTZN3ZDn5Ab5gWz9c21wLZq7i4h",
  "key26": "2q1UbaAEtLsJC2WuZ8NyMrU6XVEDA5Eb4Stx1p1gjNFeL1TsPFZAxfeLMaacNrFbxcmHhst1nH2xnnEHCKzr68B3",
  "key27": "2BBW7xJViBVnPGf18XaXLi454a7eWQWXPb6WuwvNv1KAddSmgE1mMKRV3gCQ9kECUwk7QM2VpMfd13f9v1RFLbRw",
  "key28": "GWRfhxL3aYwbiuSTXa2y26KEe1nDeLWonBwTiMyDcyXwMR8sgRivD9YH1feo2N4fCatupkL7fTYyzvVEsg7UL4n",
  "key29": "YTLBzgCv59NvCW7ncbeRV1A6ijz7CKCLmku5XCAq3hyunJjHJaVcbznnxoRkUT7v2YEQXcDv2CberbPcaeNHB9t",
  "key30": "WtqUhX5rWW4tgihxaJnt5D4E71Kx34dSu6q3k4ouw9ppuBYtdxMriNGbzvBYDK5i9wtGxVZnpGjYYAYTyGJQQDV",
  "key31": "5TrvkQuG8PGGfFp3vGWr4Qu6iPuMtk55QAKFrtcLKJcZHoPyHH2oRfb7XKVqLqRf4sD4nzEokXHdPkPRNFcjSVK2",
  "key32": "5oaaYCJJCmV1wdAeME43ytZpg4KQyB9ikZA3Sqey7LESzdJnXWmNV2kjwKDNJGb3hhJ6P4m1E8jQtxypMTMxU4bK",
  "key33": "3UgU7CspgHrqLTmXZa3DoWAnNp9ZczdyXNPAWEQGNMi4y96szygd5Y7g6YpRaP7XzBkXjA72xaJb8zYfRrnCASpR",
  "key34": "Tyga9CgHkFLtG47cRH7uHS1FidCpXxKy7ZK7JWpJ5eaDEEsvBJ9ZsCwfWXjqh2HF1moRsrsLFbkBESxd6TQ9SaN",
  "key35": "67iqARJknDHAxmMBge5GLo2R2FhhAZzx2w6kJ8Zwo3i41MupxEqk1gZYX6gGXAKi27TBNkwkNsMuT2eWnThqfLW2"
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
