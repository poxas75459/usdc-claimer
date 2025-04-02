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
    "Qd4KNDdR5YzYZG24XCZAMwRpUoBqPZiSwKeyDBzyVh6pUUxaJvavWRo35Bo4W5jb7APjyX2pUuYPv7KQWoL1P72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QX6XLub7RnCm6NLRGAc8u6zmXSdYH9Pe6fuoRiy7TTjN9MAEWM7FN3qPXkY4AWKfJztqVLPnrzqraFB3qqMG9z2",
  "key1": "4GDiKmH1zBC63SCyennftEJjhqoQUZFNuReMv7x9tYFxRGTacN1YboYazzbfDzS4Ayrorbec6qzN8ibGTFVqPwBw",
  "key2": "4mtCeXdtCwtmhuJNXYAymSVzTLCByUSEKNRJtjyYCcgKoDdTeXmn2C9zp26e4JA4gqs6PYFA8cEgLpGmnhWzjwtf",
  "key3": "256RRPfevxnyHMq27R92DVx4Uypqvm615Smd4FeRr7Cnz1z6v2Kox7iNEsCFkU4ykT9uNPueC1cwJpHAFp4tdY9o",
  "key4": "4oLuJuhVutzW2EGzBy8ibxNJsosWohap5kGYzXP6zFXKTYQ15j7pyqEP3vxujMxAZwC5GntLR5oA2ED5LDTYK8sY",
  "key5": "5d74vPAhU3bvMdgG9U67dvC23MyQfcSawdtQsy82LTwEPN43nAJq6NdJriySPvBXvL6Tzz7wddJkkZfhfSU5cAFS",
  "key6": "5BoSJQBXf1w6kPMvZSRNcznf3NCBNeCWQtdxYdT49H8z4svXLCqy8FSwzKTiWtCiHjr7ZHVwLw5q9WjyoCxc4woB",
  "key7": "22gMWQrrSoZk2R3ocAvxsdDMncR13JYpcgvUS5ELGNftjp6dLRWf9bz4ntYbj84NF6yWCY9NRtimY3i9zMu42LNL",
  "key8": "4njriYWvCdgymuyN3643b6U2zPNgjR9kyNoENU6CrDwd9eJAefCyrvssYXP2DCg5qzsT9Zb2x4zKMVCBAH3m7rfJ",
  "key9": "5GKzyzowPd8J8Y3ACujDFeZV4uQgs5sp15myytXvodsPzStygiRMDeCUEtT4fxpLpomi1y8JriQ3LhCBDrpnLfCv",
  "key10": "4qBRJH3GrWEUNZnB4dpdAPZMgKBoG6N7TYLKyuduCbdmGcS7NQ7ATnctWk1iQMtTychxyfyUrnTPNAyT2L4HFY29",
  "key11": "5LVtSBT6VhTu5d4NC14qw91Z8fhq3y79jHAxAceNeR6kP1U1etsKJnemoJnxNddt8G9wf9Pz3CC233Unb81nSvW9",
  "key12": "5E23T9GBf7deuGpTVt5fFZMeGcxeLbrAGf6jVgeW4NLzvh6a7rmLrDvGRNd6sSUJbaYR1Wyf61vL3e77GPyEff9o",
  "key13": "4o8hjH5NeupxjWaDfPyBxP5QQvskK8cEbBcvYhRFpB68zjSoutYwzYFMFSpXRk5qz2FEgcxJL5Aqfr8yjtTnbH9r",
  "key14": "31M42deXwwV8aur6rLDQKGgaU31eHJaCdiPZCsWrwatr9GhAdy82YyqPFPSB4VQtJtdktoyBSUCQZSgYnTDQ5z6m",
  "key15": "QWyjh99i5NFzSNJ1UtrzeyxD67b6abxZNJ3wjEvcQzT33e8CvXuyKwbLYte1fGQNNLVSLARrMC76Y2K73FTay8P",
  "key16": "eU7RwdVAvCFQPfCdM1nXZqZRvbjWAnUTiFPNJpJb7U9Vu24RD3i97CsoeTYUheg9xQ1VpWWsAEeRb9RhZSRetty",
  "key17": "2m2EYnT1BzZPQo4uq72Lkqj8BX192jgb2KsahW9rDAQDFfHLapSnqC6isWRUN7t6MHW7GY6yRT99zWHPap6j3Q2J",
  "key18": "5guUSzsPpFZNAcXdKGrgw1DU9oGuLgM8dZwryifz7AUpYN2wtL96vrRQDYcL11NWrvPC6LgbDVKJ1DT4T3WUvsTo",
  "key19": "4JKn6xMS9SGx2j7cp1yCpFbXYeuBKNtCicBaMY64F1tsPiWpkvaYvvg31dhoM3c1sQa44JMTXY9QsoehYy2N1dwA",
  "key20": "3RUjGyw7dJmZwoMv2ZYvts2Ywge8uFN6Qxz6HpZcE4w2HmorujEXhiPgfStmW6VjjEfkhQ4KkqqPf7y11GMsNRfL",
  "key21": "48rCkMCsiKrkUqhZa2527FNUqfTbdXGKSpU1wN1QaWTy1jb5fmsMUzssGh6Lz3rKcGAia7ZVyrAHbPUnTi7nSuwU",
  "key22": "5DnVgTaCkGp1Xfq5WwRkcEYNrKv1y51GzGpMUkS9jkLmYZQPuxYcmEac7AvxKEeQnTEe2FCRUUawetLpDqLRKEnS",
  "key23": "4UaBkr9fzdxShVeuXnCeNmRVEZrLvQYJDXBxKoie6LzW1ySNqtUrnNb4sMUhoYobLzbSaDHVsaDftKKEqeh5SSgS",
  "key24": "5yZuJm93uzBWrZZY5eWjpNEqnoYAvJdzJi8k6XBRFvCZhZmFg1FmfP7yModzWdE9pJ73t6zUrv2b2oPCaPyg4SFh",
  "key25": "2kraHtk3ce4bAXkrQ3GfBdxQ2dHxjk9ztU6cxNFkTDvBSC9fZwNPVWLV2xj7uqjnDJxVHwCsVx2WfyGiCKSSfd3T",
  "key26": "3HoYasGecyze6og2rXnXaVAEGtSAfyu9DWsS1FULz6Pb41vMiYvLmca4hSLH1cHZ9uyH2hJHTzSojeZHtSAEa7QB",
  "key27": "3aUQ54P2zioD5Xdr51HYkZak5ZAECnvi9y2u8whE22zEqBDnCepMzwynnS3H9RmaMuoecA6DcfdnYsnJtWEJA2Wi",
  "key28": "3KDcS8MBehoHYCiVnv8x8Kg89Lahqmur4UMiy3Aybi81QvPVUo2sBrX8uiFwXyvx7EB3ugnLfFGs9eTd8UJBC39",
  "key29": "4g6gaUqChezKLR9WytoEqPcPYvy6PzZZ351Cg5obhJEQKV1iXkxTLM712mc9Cj3KKVMKKFX44ycTKjZt1i5z4Tkd",
  "key30": "zWU1ne6zey3jPgDT8Y1ZFCBmLxQmRwsVZgkfFZywXtiGaDLazjT19JW3AbaAqovw4UAZmQHsvE6sa5CwMH9U7XU",
  "key31": "3jT9dfRNnMdDq5Lz8dtjZUT9X4jjR41b8oicUCbMJ3wgp6MuoEUGQwYbRB6xSKk2T1gYX9oZm4axqydS5kwSvqyr",
  "key32": "X3c8Afg3jJZFzjJ3uZvMC26utNiZJ2zFsHTMiBVkQap4LqbNYymLoX7SL3hrErKtkZZDSVr2YdEFG3VDaByJasX",
  "key33": "43DVNCdvbYqMwFqKEZviMMwZgitnwyyzmtAJnxVgEakT3We8NHcvnWE3idSe7NadeXcqpXiButV5Wn5xyTGyMxLt"
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
