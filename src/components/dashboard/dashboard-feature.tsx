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
    "44mXqq75wNkSsdz298bhV2akHnsCdAbcpSpkLMNQ7pVLo5MuxNNfDZeuXYWpSHQMnJaRi3diCE4PdPnTtCGhmmDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZEWCHznQzQBbanzk8x1gFsgF2f9EczFUKQFc8wb7roi6Nc86fc6UKmiaQy9bmabXvPJxJ3vKJTEKVHx7khrEd5",
  "key1": "5AB1vTMrcF2J9UQ3Ziqvw5vcUhJDgpYQduZffPu6RfSRT5LquEuhYWVSDxJyGqKUf9NvPovWbxuw9FYiqoa3ZgNM",
  "key2": "4vCMYMPZPJhgSZHY18oo1VkoBrve5x5smnQ8w83fY4jgb24GA9mJxD3pVSiG29adEVrZ8mqa9Q8xavGQNxeBRQbf",
  "key3": "2Ek7owqWRqdfULgSH5zoUjBuDbyxtFce1V426xdu1vHDFs2UsZ7QT33DnTXQmZSbM4q9Q3r4iLgWWpZZDHpHUQPo",
  "key4": "2Tro6dt13mwgPmRWioM4QRwtFpbU7HdLRgRfSimbQZhEc3LxaeVr5cxVem8m2hbTXvWJNra2eqRYnxEsQwywiYZA",
  "key5": "2Uh52eUHvRrhCGfzvsteGhfbBXwhinpQUH1MXzunMBHDZgJmHxhp5udyR6kKSRjRCNYAbDLs62iFodm3ohVnaAov",
  "key6": "5waQfgT8yDsvpV9DyLKn62C454gbKgnB91yiUMkYVFYz65YfwPtv1BzuwDE6ziLMgeUqHzpJj8nqcPFN5yS1ZSXK",
  "key7": "3zANQDnnyfZJcBp2CxrsZVHcN9Yrch3EvXvaihqG98TSm7Xs5aPcesbdydYYjbwEZkbeS16S8NpgVGgomv9cdRsM",
  "key8": "PM12sh8v7jaJTkcrVzKYGg3SLBvjXAhQrf4FSyVsCoxa7HrrUj4LvKwPeRFtiTh4mcbZj45Q1mmGeND5eNUZiQn",
  "key9": "2xvhm8Kn2EZdWY6qQyHzGAp7SpcegdKmMvP3xPzucxH5g2ab8faWRqmUPmhbHri6QER9MMsW5TQEGBW1XxqycTg6",
  "key10": "4Ax3xb7Gm6Cz34NzbP8UC23HTG1KVhfLwkxXebxnHtt4ZAayi8qBuxqJAGUwGWNCXH5upYbhHpd5sQUL3LcZmz84",
  "key11": "3JydxxzBaVTF511HJDZ51HHkHF9sQZZgEeLo9947GofAnhy9Fh8mbWp7HpvK2HG1kjYgcu4TYac3yzjiRCpHjHzd",
  "key12": "5RrU4jXkscW3QucqucofskksjeLTWsSAXhRhfFtTj4qnY1W4fvMaYaYLQNV89xzrf1bDpo2aXfqkWRBD6WnNHH3d",
  "key13": "4wSnoyvbXZnnNsjUyvy8zBHY93PdYzzH8yUenpqajsC6AfYpFSzpbAMeHW9eDW8uQdh8TMkfaGrDnqxsJ7DXGS24",
  "key14": "4dyf2kb1X8dgUKWs4shc1eHfWe6hKG16yAxFRkkxeLk2RMbqCK1B8hJsVyoYtyzy7VR2GKagxkCMKpZv86hQw3vs",
  "key15": "2qSJYpMRwowhdvBExAdbgaag71B1MofQWztYjuLVxG5PJT2a8hosNYzUpZMqEFvosZ9AtJEHzdZSaWcQZx4dk47N",
  "key16": "26zoTAJqLcQeqfJSQZizcnH9nQPWQYBz4UAA3rFiUu7D63utd5g55JnkiKkbUttZ7iQeHK4EQ6GJsJtQRupzU7jA",
  "key17": "2SeD9Nt98TWpTHFkfBn76v4sHQB2BarxE84PAFrDJAFAoEubqod1DHT8QM6kAABCg8rd5M4RH1ZVgZKZ5P94NQvK",
  "key18": "DwQBS38nTKaDzsmKYmjM99RQSSPKrWTBR7UK6uXatH6tjfb1M3krpWMzCjpUx5Nu8RJ6Quz927PotFnp6i7sdz4",
  "key19": "4iewtm8WVk35PMt66J1Jaud181PaQZ8iVNBFoXzDPnXfkVc2zfEhuRQB3eNffgeGwQXyLdJB6uSLDRXEFMJ9wMP6",
  "key20": "8joA41TbeUEouLucLNmfFc1emz1Foti8ffkuCyhLcEbfc6oGA8gUCmYWuTw4Yukd5MtxWA28LzFtAGL2qYFSXpL",
  "key21": "JMKc8qdvajDFAQy7Wo2K4M73p1Gu1gyo1PAik7unQ2BDAhmPybNVQiiMHd4tEaiH1GxX5ZTpzcYNEc3EcMHFW3j",
  "key22": "64tW5PgVdiXwjL6xTYSLG9P6v73ecXHL49zTfSY7QGGkFuFKT8z73iXEfCuJSatyudhvvYvPu6vbkeJQ8wuyLiUh",
  "key23": "25gHFtqqiRuLxAobNxeaoZvT6Pbn3uwF5nYgGSdTuGiWBWZqg8RwARF2VdVTVcsnra1ESuj1h5iZubBdrx29omkd",
  "key24": "4zdPwrtRF2uhz4phmCnFZyNMcerENjEDUdnAwXLzvc5eE78M18MLcLmeggt7cAg7ppacodwaJTEAsfZ6rBmDDEqF",
  "key25": "KAqyuuXuUr8weRzjPeGAjE3cuYNnZtREuLRUGBktHFpxKbWsmQHS9KziqNm4PBo2HuNmmoVLRkNbqTtFoQbbf9w",
  "key26": "SznjCZeYq7Q3ZXZZVSM6T4L5XfQakDfi7XQ8eYaDFdnjZHBLKoyXcM3u3oWWRBDTSQSYNdEjXWDodjnwQJYwaHz",
  "key27": "3dAku3FnnMy8pY58rbq76g8KCX8DBvbW9pcLd2uHH1qrAkHJqXGwQ22uHWkm47MxhjvSYP634wvEB8aaskk3bFcF",
  "key28": "3A3sguCKdp1oLnozY5YsnvzfQyxADjqPx7j9yLRJwfyTiUpE5yQuT83uboMqjHG7BkKah7rMore1vdMajT3YyHC6",
  "key29": "3pU368hmbZbDSTysamBCoGmSGPzQT2j77Bah6zdVrkq1mch5WHucFVWiK9rXoM7frriNYUGLz5QnAGjJwT8Vve1y",
  "key30": "5VD6cAFZxkp68kkRBc3s5do62gorjVb2yT6vEt1UDzoEvcgpEm9izzpHVvnBmvcXyGZpHF92hKXt9ezgd3uwQiUh",
  "key31": "4QVPCsh7JqAvQkkNY9aDE9vQaACZznqKWfnF59V1EEvy5dnUNHrfqW2JzvYjkLMob4GrKCJ9SgZTKje3tZUpcw2z",
  "key32": "5G4not3ibsxWYVQQNeDp4z4nJjNycAcjVUDFuzkQqwNciwxmWvMMYNGCJR6qWCqa1dVaT6cXJ9h8ZHPSt9KX45kw",
  "key33": "594ZTMcGquPZ43dPHaFHKaXr4UzF4TGZr4WvunNMy9jb8sfMSywYXKGtQg4wPXhPeF2y6SETTA3Fnd8SLxE1DZkR",
  "key34": "66VDUXs1r7U8ZyZZVt1GDDqaxgNU788M7e16MsCdzHQmvHbv9qKbU2iUvg4wZtRKvpBLapGRSpWsb5515GRNzFLi"
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
