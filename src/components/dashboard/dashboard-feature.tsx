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
    "392jix7HLtShDkCAbSMqSTQbCM7hS9iDJ5Kui4sccFParGwDKiFaArXZMMnP5BazDdyvvUJwPCyTSuN8ZDzK9h3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HabZvKSQtooNhoytG4DsTRD22T4ZKMTY3nx7TWGt9hqBBnCD5K82KP48rcrx8JeHvwe6YzQaJtQEtEvhcW6Ydwx",
  "key1": "5zo4ZvTUqt3gMZUEau6gvgamGy8BM4U9chuAtS2otKRp38AEB7GUh3NKdPNHdPyy7yvm9qNLQXQaUBTmJMBFJMdb",
  "key2": "2y5uraBiMFi9z8FKjfY7uZZFqwrUctdNaW4qrt9Bo2S83E8ndyK591CB2gCE49SmzCSphzoJgn9zvGHAdF9RBcJS",
  "key3": "39vDrm9x2guctm1mCReKRPWHoMzX7eArkf1xpbZTF6R5KY5AaXcfUZk4uDXLrHuDFQr7LKq2eDM91brukti8mzP",
  "key4": "5e4z9n1HUSr78d3H4mo8q4DLuDkZU2t4WuUpWDQkqAxYDurYFacThMxHjh5PN1FPy75jMNfiNuSRcSXbdMJ9rq28",
  "key5": "3jSAbCuvSTF549UKYognnztwsN7A68kwFyYsGjEKAKh7VWb6JpagTV9j9ZGGkKxNuEUgMaueqqnpZwgC2rE3mQpy",
  "key6": "4hJKGUDEZ2ATjanjzjB7cbKxgVwniGZ71pUXjZBAHCqdmBvckYjop8p9iqQ4JSCTzxoemckiRutRHWTH2S1hL9Uj",
  "key7": "bhneysvxtFUr6wzJJz76EHpxMamvwPS2ixhM2anR7DbLc6sUcN63q1A5cLP4KoAhgtgYL77ggh7f5Pfw7oqGBfU",
  "key8": "62ZgmhuEPwon5S95EH4LhEeYJzY711TDeM7HLjjy52u4o33Wt5aF7JKoRJnamYTEMiTRr2k3gLd6n4nPCgxLKH1h",
  "key9": "3BvrmrjkjXPPPgyhYg11mF9cCi5TANHDChMHwBTCd5pSQdwWAfSzpmNHLgpJc5EX619QN6DYAodiMAueFrAj1z8m",
  "key10": "2SWv6z24tsrvDcHFRkVnxZgsgQ7kBZPM8UANgGDBZZveUiSJXBeWWpcntmAi5VT8XnqBkWhRCqXP3LYvZGNydJmB",
  "key11": "37CDH4i2JFCz5ExSVVFfGW6cc8n1ZyxUsY2b4LgNNDVeHmuyd7dV96updnfXDTWMDmsfCd6MFVacz9eoLBbnhv9u",
  "key12": "qyH5ofA8YgbHEGtbBHNssE5sGzeT7PpLDhs99T3JJuMG2pgcK6kGrfebsEUmCV382mtfHVZ73tqbZsYvDahMoS1",
  "key13": "FaDExYKgT8tdFFoMZ4jWyJgLhxWAryqaNhUANGyo4PcHwyDapGTm1K6asP5izxhR5av3vPwNANdSdocBhCyix5y",
  "key14": "5hjYMD6cnnpWDbPBXiCTFqcS8btuR8i7pHmTLvApYJvF2pCbyT23VoUUUTA8amzj12Cyq3GcMirAThNfedEozXhQ",
  "key15": "JKe51VjGe7bmu5a875BJq6ADMtRRM9XzybFa47bTtJAZUtNescxQbEi6vgMdEKRZaJsQSmDtVYrUobgfnyXYJEc",
  "key16": "2bBYPfHq7denyGsLNBBMCsXbXV9nQ6ko36PCguZgqd95SnBoeANWfvuyaQ7tTzaEJUhaaY5kppUWrZYUQzBH44Dc",
  "key17": "LaKz1e3Gh3gyCFnVsQme5WA9xkNFsrpx2TVap9vLbchNofGjUHkqqiv1u1fBBQasULPdYAuMmLwAysQ1KxSSUoN",
  "key18": "47dEvF3TjaHhUv6puVKBEudi24f4JnUkSSHjnwzdUkZnHLS9w8JR7doW4Du9DcZPyNbFi9L36gALNBFrZQVvqP7K",
  "key19": "2sYjRMvYiN87ug2UUBFuunzzxNr6g9zBocY716kX3QQEpMvSiWCngSyg2LTTTmoE8XSDXacbNyaeDYrY1zYJb2XS",
  "key20": "5xMY78pJg5Q7ynWU8t4Gv7hzcorQs8Ps56fNq4v2yZnVvrYAB4DgbHXnP4Sq6xZ5K9EehhmPActRcysLYMwuLSRh",
  "key21": "KuDJ8JUZ1jkM2N21NQLczS6G5dcR5cGRVngWryHv2sH9PWrRg7YXdiLNG8zdQbnGp5YPzfo6vGVybVdMDTYXQ8k",
  "key22": "YSxnpNXmko4PKNEUWTeSrGZo4PNAxGNjAJi6uTjyc5BVa8GeMXw5ouutSS86ZA8Roq3ji7HMooCkYqLGLkMhrF5",
  "key23": "5W5CjkLjgcPNBAQbSqcz7wSrHQ6zLcLGmY9pX5DSL3ErhNJtt9VoDbpcuKJD7twHaXF2uGMve7mn8fXzy5d1T3fm",
  "key24": "wUbtV4Z2FtgnEPoUAXyPL4Li6L1byzfhQmxicx32p6x9Q3XVRJFxSZ9uNhvtrrZH8C27KgcJ3jmQnEpLJXBX2at",
  "key25": "anrHspmPZEVkZTiRSGCeQQgepJ8k5S6tWYHWYjp6A1TxiCncAGKpyaGp612t2yw5UaAmtV1CtgDFwDzgEyKPQ7Z",
  "key26": "FfrhuF4s9p5qbDfVeZwgV7XdovQforjuxk5Vxwnrryoq7pN4b8e3FD1eQn7ZBjvq6Vtv72n2ccKgmZi4kvp2sxD",
  "key27": "UdYafsKYo7gnfpDbYqcXjXcbFdGfhm7vuDaXXyPagHBcnuiKNyG4kGVp7LrYTrmwbZdkoerAzCisR1XLuWczonS",
  "key28": "61cNvKaJ8tKT6BFQYroY3rsTDgxfnUU95Tc8s6WupsTTT2gJzQzkbYxHTcjqiJVHNnmtDmkkBDQgYx2Gt1Hkowid",
  "key29": "3wZqPuevBAfoQoJXxC938ZXFxBf6D23ijuo57JKuPVa2KUmn9y7uLBjpgNfoqNHgXGBQCpbbrGzoUeZjEPBGdVSr",
  "key30": "3PHZpqJkUkAnU2VRyCTK54FGhG3cJz1N7QnYASKdPsFXyAiVrrR7FQDUayiNesuuja8N4Acn3mTAavnM3x89J729"
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
