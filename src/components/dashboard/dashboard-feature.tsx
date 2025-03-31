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
    "89Mrkojuu18AWcjr7ixEsvTAPh8Tyypkt5KydfzvN5yn9gMdf8WTF1K5DFaEoorU8bKEpFvHcRwponV2RQSv8Up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yvqpn19qWgrGXgbTMwP3uPxav2UcoJ6aieDVD9GFxfgdgfDVjUFLffn931zngsb8MnxNveZRDunyx7VDT8YfDw8",
  "key1": "3J6GTmBj9Wisu8FFoQk9vMux3CjmxGbfdUbWDS5Py3xujFUa1NX3RvLsfSNtMDY38UnoykzSsERhPogQ5BppDgjc",
  "key2": "5eAtM2J986GPnPsV9JLRPfcnD35DgGHYCnRHaqDrdsPNgTNDwgNC2Nw9AVjhkGeyPZBY13oGsnqfeCbavawXTeAT",
  "key3": "3N8xDBd5BCMZRyzZNXpCTrBaAxbkzfjFXAzKsYzjWUVK2vhrnSwJr9kR2P4QkaZgQ3dXq6ytSVJfhE7XEj42isf",
  "key4": "3dM1ukw4sZvykb3JMAB28ycMi4C4BHX8F6Q8EsstvwhC8YNjwYCiztcu4RRtDgdECnZAhrCbneUBamxZFGGEUzNr",
  "key5": "SyqXRtDRQDSQsUKooxRCdkxAdM8ai12uzAKYypM7SE1zqgLuG6Dy2B3kTQVauze213dktk1JKp4usTKmTtiWhaG",
  "key6": "2KrWwJKdnJcsv4zGvQgVi8owVHC5Rp4C6WJ4bS8cP38V81TDBybXHg1oRsYMZEXbo5DnCuxcWPVaa3sp6xmfa2Sq",
  "key7": "3q2hegpChEHXe1doDxer45TFcxzpgLq6D7uVDsnNyiB4SvDcky6Gxp4GnQpGJpqNxipmHMfwqDKQExyJjDbgyuh6",
  "key8": "4NXGpXmQkTydifNVMFMxr8DtVoe4XxSgHBYaD4C3iKZUfVhz61mvx318qVLM2XJi27G85qxcwq6rRMQLzyPgw7kQ",
  "key9": "2FUk3THc88pJ4TPixXUMXC8YasLyfERpfxvshYsQeea7XP4tpHDCTkJNUe2Czq9Q8AWUVsJrUDbQGyv5SshKgcgJ",
  "key10": "iF6EXhsQ3w8Dt7k6vvzRYird3UAsJv1gQQj8WDafWtNkLeuMeutMe6QHT4UEjjhY8A35C6LdfPQxqdyZNcSZepp",
  "key11": "363qJYph8tc8ebeD3ecWo4pNbDhWTXxC6pEssxCZTiERKQZaJf6nzVtVsqF4pZz4Wkn6Tfdyophc3T8absMNsja3",
  "key12": "4s8nSZ3a3AKywpcGoa7RFCtAip5hNNGrhogteZC1v1zMbwCKPTPDahiCNGs2A4B9vaKsodbzgpzE9ASCCZYUsDQ2",
  "key13": "3P1yvcSXCSaEWR2duFKKHSawJPh6jnStvFwkyUmqR2xpuhHCL2BJJ6TsJA4BXcyq6K2XdbymGuQK4CjmGbVRSgUH",
  "key14": "31E7JSkAr5896WYivvtqDr2MCMhx3WLuRVQjAMmaRyrKMsaQNgQDi8hVCNVML7qV5CmKshU95EvKuRPtYdzVS88F",
  "key15": "2QQ1cwP5szVjTzQxBLpa7QEMFqZu295fnoW9Wte8StGrURZsrBPL3pekRthidZCisdCZaT11yVV5q95Wg63sUSFK",
  "key16": "5oeJ6o3P2fh5uachToNZLwt9X9qDGgGWz1YeEEQGQLNNyjwx36NdLnDQGcyfpS9d4NUovqedEh9AaPLhx9aiNcod",
  "key17": "2j8mWUQcxvvcLhMamRftvQMmhG7foaR3NsXK3KYJV7sBDvAJMmb5uTzswpaYfPn7zTwDHmdJPmbpjz1fp5oFQqoX",
  "key18": "4R66iGrtGqhczuYAPsRW2fo5GVvCKVEcwD7dJhRHriWGNzvU3THRdYUvWpYKUDQh2e57kpSncwNQvFxGXnpQhaQR",
  "key19": "3d4W7NSaurQtYazaWSwsR7qdhegREDMURMbZiMuLLAi4jmbpgq6fPgmMHRFzszL2Bedt2cXiw5GBVWGEwEGEL8AW",
  "key20": "2KCZPUq5fwRJBXDBb7z24RsdYbiRNmFKQX4qGtRvuD8w2hL9bvMggmLqn3evudgfnEHfVpWNe47hM7WG9vSe27iV",
  "key21": "4ufmkpSHxPLSyuvSEz3QwTPtvV9FKfJFeuQQeoTo8mPcDLmFUZepTTd7WAgBxzPFENpEEhjVFZyaTPmSszhX3dT9",
  "key22": "2EmHTW7XjqeaSzXqzYsaLPw72rTZvz8p1f5oaKYQe3TddMt6itmfrQM1o3E23KntkjT4Gm1DYRsN6C8oZ66TuXS9",
  "key23": "5PJ8DcxVeFaVnX46AwPcWZbmGAbBsS39iFqDT55b93o1vwBwjBN7x6gRUpBPDuq971feyb6UWW8H39sDFjnhnDQ1",
  "key24": "4p2DD8Te32cKf8fLWnu2LF3rLKpdT2NA8WNWUyFwFRgAZYjGro9qgZwv3Db6o9MekPfHTRpbdEkR1PW71fL6a29J",
  "key25": "3AppnYaYZ7uCY2KkjTAKB9MKoye62kUfZWyF1h63Xdj9ARG4sRZod7MWEEhmte1EsFZB8DohmMaHToGNKUTJ1Twj",
  "key26": "2UN8tqUCeNJesoioUwQCHhS8Up99ydmKiiZjYgYwij9VdTEAZq9tGiZBbz5d3zTZRJnUMFZaZJ5Rg5U4CRkCPLk1",
  "key27": "4Z3dxJtB7nq4C7ekP1Zx7F5rpRUNLp9xYLqqrcY7yjWcDPANmvEbKwyppJzuKHr9UZuQWyxASWoz4bui7gzkDrz2",
  "key28": "576axv2d3GiSTt2XqExv7wqPGJ1ukAw61tb37asEp4Q5ndki5Kh7LRH4wGBkf4Gv9UoWJQ98HEEGxq9M75tkD4bk"
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
