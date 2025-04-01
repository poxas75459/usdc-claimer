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
    "4z26uYJNRabARaJkKv7A2sGqRu8Xmc8A4gXXwj4E5JdKMtcTcGY9QBsFvfSaWAsZyk9ETx5D1RJFn66yaYBxE7Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLpc1zVqjzCvhSv6wmmw5KHHTDYVn6H9TuUtF7GMs813HHz1Du1mLwAVvsc2PQTDGpL2aWuCLohMw7ExTVwC6vv",
  "key1": "3CMiRka18YN5U42tAsHFfbAQNKAm3MTEfboMTGeGZozUTaFvP7eKT1dfZfCy15cJRsKuvm7j73398Zgh1nMVjvcA",
  "key2": "3zbgfpa3AeLauGpXWLNXhptWHXHoYGEx6qPyz6kitNXnFykkRfno2UvYwiZKPDfr5eaXjMrWdrQDz2joiCWH2vNC",
  "key3": "2dJK2kp2nViX7g6o4LzDEcKmr9KwqdkpVUWXNXbecsD2B11Jdn6cHUE929rPtDiKZPLzUX1CshTeVnRhVgrs2sVe",
  "key4": "2xK9ywC3imRn9NKPJaFX2mz6Ygj1EdWjqqkhyfroHCRqnZTA591WqFvJ5QSg7rA4wEmopVCVw5rMQeLPDmvp4ZTX",
  "key5": "4yBRtJ6boU8g5YjsbwJAH4wVzwq3JvDemAE1u2aCH2QiukmRdQNg8LQzpcypowM4EKJdxp4VgGWLK9xksbRG26om",
  "key6": "5KxEwFbQYF6ncShFE7nrYeeDMFBNrKVShRv5hBUjAsbABjPnyvP7tyFm5fzXXcnW375Vp31skArCtsENYL96d5Cb",
  "key7": "V2V2v8uhuB9aw77Mt8scq34QguebDSHAJkMEPC4gaZd8d9iUFFsiUeihRbNQ8ZyQKp8gTkdj3V4t2xSxkxuMELG",
  "key8": "2kcFE451DydkWE13uef1QhAhbPrcdMRq27iWVYKjfjCQC2JreFwgAc52ZbPLwYUjQzmMVn6nYqTam5C11SdeFi9j",
  "key9": "4CKmF7objtnV2ULWaprDJx1fZM3w3ACio3iH7YvYjWdNTDxGthu6szWmwawA4dAWsNoKdS7zPr89zNHrHhehHT1K",
  "key10": "3p5KoSawgoPpYQL2h7fH34qbGC8gGVG51XfhtvgMUSUC9cskGW5cBTzU7M2vyy3rNQcHLEdYi324wyzp9e9Nb954",
  "key11": "39SrpB6eVQTtwMawfyNJvAvrBbvqPP6ZLC5cGsyUgkfQa3HvDZquaPdzn5Y6grphaiM2RGk8Ke4tyA1iwCq4UGvt",
  "key12": "2gaA1v7C7ARXLnCfcFxTsGfFnHj5qKncPfzxsfCEExjuRi4hUsU8GSXrjy9jnF8h42upTA6HXJ3yYuVSLweWa4sV",
  "key13": "3rjNeJaCpnySdcxJbtBhWPKQHCZvgjuRPKB7XapFpDiifDBj4X9pqHTsGnpZuKwRGJgNDw3aUecdX3GcoudhE9Du",
  "key14": "4Y4UYWdjcoaeaqNpsWCHDoJmSXRoiKmo5ERMSgpT9ZdfjNqhmGsG6sG71ki7RvJyHnPXJr878pfkLr33BVxgiS1N",
  "key15": "5vF3zidzpdJ9GSbiz1hG4L1YAbBiEx8d6qbE2Ffsn2qqz2EaAgt5FQGqPSDhKK7QXTUznyaw7fTpsstGwH18gXMr",
  "key16": "3aCXm5TKmeEyNc43S4LUZuFNxzVAsEKekga3M4GmGoEF8uNsZaLzczX7idohKGw14YpGyircS5FD1t8wFqtZq1m8",
  "key17": "Y3oLZw9f88bbAjh6C23hhW1AUCs1NDoqxbXk2RiRQsszw9zRVb1J2hnyW2KtLZu1aXZv1s6pJ1CALXRtGyFkxsB",
  "key18": "F83RQNYQw4EQEEWYpRrBFu1rAuM2Byddbhi5Q2r9UsBwLt7TQDLzjwSCnqwgChZitDxSsCBGhiaG3QUYLH2R9gW",
  "key19": "25vMzKaaVQ23mC3aykspvEyewK9Wr8P4NpsyGwqU1RE3nuMNi4agf4ymLyjTKzmiJ2hH5HGnzestZj8G6M8rAfx7",
  "key20": "22wzAAH8MbVBMEAih19ukL96hVaratqvBGDfv9FdDR4M8doa6Ceocbz544vfWhAdsvtPH9P9vxW8bmtd8Q3aNXun",
  "key21": "5dmcMPGsPPrSZMGdpP9CW6n6DUDMbm7oqpj1BYwyPm9TnSd8zGQ6LZnAteeGn6MLSXJVw7BbNZSrX7P9tKt4r9yg",
  "key22": "V63BmYpf1w8EukZRM1REDBxmWvNL3hhQDEUWVyv1tKjrNPSxgPSJsPtwrJUMxfhuKmkKZd9gwVdXJfi12A3A6XK",
  "key23": "4TTxekogMsvTN6kT3Ctuw1yj58yrMoNkEqi9VLFKv4DWEm587PJ4TGQj4oe91FYFL8uk9jKpisCFRe5rpyayfXL6",
  "key24": "4mv9KmkFgGeVSyUYjnq7cji93RY8n6b2at6vkn8RSU6cY5G9fyduiouAJC6bvpbykJMUUpCqLRL72e7ZhcJGDEM3"
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
