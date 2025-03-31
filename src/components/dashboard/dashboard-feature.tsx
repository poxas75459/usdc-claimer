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
    "5J6eAnb2sq81y7btZ4ufy9ygypSuZ6pWJmu2HT77SnkywTKQmcYwjorqYNiXtnGccTQT7NKr8NMm6gC1vaC1MkQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YYATRqJGi5WGF85Z858mgDUbwa41xr8vRqaAPrwswY4SPmmuKN3UTjEHzTBqHA8GTcZ65fTNghvG9KPhcmV2ihv",
  "key1": "5WCm2Pb6x4XXsRaY1dscZGLACjXLD2XWGQGaHmDdDNst4CrTPvrazunqr3ngnbHccpADGX3ryWpq6QhGYqeZebA",
  "key2": "53RpjHsP4goH4Qrm9rFqB9NBrgnYppwkCSZ6SB3V1cAPw17Ui3HVtQJChEK4wDjJJniVpFdXmFRS7VNUhhvDu8cA",
  "key3": "2aqDsRdEXVzCTgzRVHUyUNWvLMu7GDCUHzXB4Q8qfLo492YVc9apWVqbJdnHNuWpmEWupW1VFysJePKiBEDLgjnp",
  "key4": "qB5f9k6Mhe48hjF75XFWyXHs46gvkNVDD8E5KHcVpwr9gEBcTxCjZd6DZnZtoD8S7MrZvsipbYcnAHFrnMdETWB",
  "key5": "64Evz3tM5G5zd7F7oVHPx44z97k4UUbMSAejCf9nEL8w8UivRvGkkBQDjPUHCAKnU5AhaderschKi1FZKXrpjJfe",
  "key6": "2Gim6HwShS9cRfoqaeN99HZt8w99d97WyguUuusTEpgFa57Y7aHgynZJ8AJ3fngyrWhXxU8Mgo2xWspsrqoZSoqU",
  "key7": "MjfrnsKyRg4p35sXiE3zVFjBEA9JKiXafo8Zua8sNUkE3tJMVBESRRQrLpGzNKRXqq3K6dz2peX7aErKmnNvW2C",
  "key8": "428NUPhxWsvikVQBSNF3ySQrbYQLBkEFiMHc54xN2g6tuczBxvguAaPhbi3KoJ6wZPFLSNcgfAhDonRCkFiAx9qG",
  "key9": "4tDBbS1bzFyTnjwZhZBQiduhL7KjTwRjtSJynyYrDsY2Ngde8AfCKg5xHUfnRE7dLzrS27xAKqCYD88KrjLggfME",
  "key10": "3k556iJnvytzhprxeSerAfKop2yCviCEqivGqXGyLroBQKgdFhyfNhdzKUXQvfRYqr2pMNehDyVJ7Bh1QgHqSGCY",
  "key11": "2Ly6CwiYT43mSvw2EhbuP9bSU1wrUyPMLYZnYDv4dwv1Y5bykX4oZTnqfuGP4wyPSd5zk6cSdgb8ZedsB6qPnAEh",
  "key12": "2kH5CwchzLFBj7mWH8koHc7Q5USbn69mc7WrCj16uDY64ebwpdv23VUbDyN7DM6w7WFoRq65UX2H2yGfs4aSVUme",
  "key13": "2vNsF52HK8s1FZdbkQHJPft3Mu4743GBWWjiL1qf1Wyhgo2uQCgPNxU1zdKYkv8NnYN1TdwCxyHALiAB9bTkkgJm",
  "key14": "5XZf4V3dVRWvFoGQ7qTMVVAdiS6PZFJwoZJicaxCtAeZMMwBuiHJtkhQEtiYyFb8DwTdse3sMKRzUNSwsuq6yy93",
  "key15": "5vQtvWWNwWKa9Zyj4D2f3NbfgYU58RZGqGqRvESXceWRHQAB22Gj8WJuUgLUAFEQ7s7KoVAn8YbnWB4G5gRqkkFd",
  "key16": "DwfmADjBYdYPrR7DywBS6U4XU6N44o1vqQNkWpbR3Fz5jf6VF4XvMJz5LaFubJhSLWwxxZ4Vrd8eCLYPfWp6dJR",
  "key17": "3XuNtF3BiSSDHzzjXaSZoiczgHbAhuyLWzGZ59Dw4EGBjh8RKDB8r6GLaZcSgBEEmdzPmAd89BRChFKuiEm9hGKZ",
  "key18": "3TDwtHguC5nNw3FRMDoQpEtgTQZjpW5WZ5GdSoKLGw5EmpWnMhceALY8kqwePZVn1jEaAYZSMS26Jf3f9e4dTkxb",
  "key19": "3DjrUeHJKomiG8niNGowZEo3Bsm6goUrkLEGK7QXJpm8C4MUnjAcJxw7aXJrXgmeK1krPQZEm5TjFRErPeG6Qv2m",
  "key20": "4mGRrngUMYesreoEWE9KvJfb5HN2HV6zyShav9ALS6QqJBi6tovz7LwuWTJQkq6WyTqVAEjsY8K13jxUqJBvSyqE",
  "key21": "51g9Q1WTei5Q4jBxA675ZKSimtVBDRkrkBVeX8voXUXrYrF2whhMXgHNRP8nb1LuyErfYxZrEbXkrBajopLtbz8L",
  "key22": "5smnzDajQqHuKfBaRNykAf234apMfTve5RtG1Eg6qK86RYtcQyNtrsQNzRSRACv4vuByLzsCzQh32ShyqjUz8AfW",
  "key23": "2AKihGS165L2T5gkgDhBCErrGfGFRnnV51pVRTsGTx3CgvX6E2YpaC5FXd77n32L38WZsS2qfrzfLgnPoqqCLGsB",
  "key24": "3JqsuivSb4oNRvNAqdT5RKgskgXDYahfaa2L5H2fC9HyerJ3dE7aZfnLdmEAS5v5XhhARWpGiXcHUdQxLa4DwKha",
  "key25": "512ho6FZUHBJ5VPQycdWSDFvFAxiGDPuAdipGYqTtXL9DgSPLHKSZAvQaHrsakEay7JBy9ycV2EvuJ34voN7LLvH",
  "key26": "5BrER9LBkkUBi6AMmBWGF7b1fXHWKgMfWDyg9m4mMUx6AA73JB5yDGXAw4347sEBsqMBv83jnqRg8GfcFVHtNmHJ",
  "key27": "2jdYx5umQuMxSB7ZifWH13MBtsbMNkkhN8pWcQDAFpkLQa3JQ151FBZ51efjYTUosPNS5YJhUVeXkdJSoziYb6kU",
  "key28": "3ufZNmd9b9tmNP5chciEtFK1ZJ4qkZpNHpqjnWipaqin2k3gM3UR88GNtNB9KishUFuRZNaZLavam7muwMsHePti",
  "key29": "2hGnuAVsnKbQdJK1fDMZJJU8d8oDa17QYEQhXP3MgBPveVAmFhRGpUL1VGAJZkWVLbT7wJr6EtaiDok18ctky5dC",
  "key30": "41TaaF12j67i28MAgYJRMgjmbBJU9VWRqgz158pwzcbp9s8RMRyeE9i9xkcR1rHLb5qMnuqZSibd3qTrStcuLjhX",
  "key31": "3tJkyWa9ZWRVDpyfaDFGEKGJmVQ48mVqaoYAhr57zdPpzQXLHhjCe13yNAPaFuRJTk3cBTD8rwyzBBhDpX1pLaLV",
  "key32": "2faQCC9uFYdQAofX3yUosWr2X8mZAbW9WbTCPkLwf9815K3fTGG5orKobGMqkHKsXhP7AjmuWdWPyRcrbVWG9ZPL",
  "key33": "4NbtMvkp8yPAwwx9vy5XgJ7KiGEVHrS9B4s52cLRiaZbVRRpcrcSSKb4brkZciYJWyr7EdFBJLbiWfjKApxVFjFh",
  "key34": "5WTBupvXC7aVLphDkHbRkcgQJnkfnxPrvcAZA7oRqLLDHvG11PtVjsCdQvUkjbNRykhrM1AQpsqjqF4w9dZzDroY",
  "key35": "3KJZm8XS45SyGDKFWATxtJwsAkHvJNJDm2Bn9WkmsWNEcJFVCsRCKzkH62G3aZS4SeYvJNBdzQR6ieWy8sfVqLsi",
  "key36": "5kPjMH6sGRNKdqRh4qqtLxnD9XPyxvAufsRGCz4G9J3Xct2BfkwHPMWbxY9xCErzWqMQRGf4rtFHydk7taM5jX9f",
  "key37": "GRUj6ZiK1Zg2RKknQ8dsitJwatMKLvCo9zK5PmkFLSHQvd6XWQQXfwcL4F8GsftpKPgVM5RiQf8h7VfYMcPXiG1",
  "key38": "2AuhmzPNosWmkha3UfByPKwtvvtvXn6wyt2JjYKiyGVFVShhCQChswzuWWftRZeen2fFdLvhadP5DL2Y6WDceasg",
  "key39": "4Pz4ptz9T1mMLZvp33EvGiGGvnyRdZ3Cpv1izRE2UENieEorVcxsQh5LaeLeQWwAJG65D73Gn9sefjfmBRAXVsfP",
  "key40": "5uFxJ2tpK6mETg8povHvwBR5yLP9hwqCnbpaicgBTghx82Fsj3ha6UQk6KX2EmDu6T1oTmgY1hMpwS74GBmaaSfp",
  "key41": "2YfqcaccqPyU6YVS9HPCH35Zmb2vvUKmXFHeN9e13k6piYuZX8K6PjEdwxoWoYTC4CshJyvBoPgwhgeCd8cAwYXd",
  "key42": "36EbhYFNqjMQL5fSqNwvREiJT3L2QLQoCzCzw8CPvV2jDnSm2q3DsWdht2XcTTuu28jAYTjkM1M3sntRQNR8wtcD",
  "key43": "25Kt5sprxESZZT34jL8eqwqQFpX1QovGbNDkGJGbrSxCg1CKX2qHPGjVQoKjM6EDpc6GWGzWiBXQRXFPZdi3EnnK",
  "key44": "2RriBbWUjqwKpvhDuKjj2TikLYnKXqyLga4VRXHE32jMYJR5AcrVeKR5DPu1JxPXgrEQbfMff6BxkzfgefWE4Lsc"
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
