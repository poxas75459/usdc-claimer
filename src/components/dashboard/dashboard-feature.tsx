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
    "F3HrG5gssQGbPZtHPNDjhPF2GeVs6bEx31jwhHmLowbqqo2T857q9AWUqXiANNyKVVF5rxLY2T7XFrJoagLzNuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GHhAQsnaij2mYMsyfaFqjvNpRNkRBYxPwddT4UbYWRZQCNugWLhCjUJRmmzpseQLf6xY2KbiipZBgB1j9hzNBt4",
  "key1": "4eKy4CbVA4hHAu7GmrwXBu5SQBLCfVErSWYj4kULUfPrFkUj9GEJaH8LToTS8mMgsPSux9zJaPVVXQBS3AAT7XKf",
  "key2": "5atX5uego66i7gPdZaJkVRjEty1CK148bR2tffVij135RzCTCtqz8QNUwZVwpkx6qe5gFD41XWjmtMz69Qs5hhNs",
  "key3": "3FiNdFSUyHRpqn6ov8QyUNV3iyHK46zcS7yFzVFbiPQ7qFYnvWG3zSbivvzbAJnUkNHZBz56LKCzQJxxay6DpgfP",
  "key4": "G5uFg1jZ8TzM55bYyerfyb98s8F8A94o5v9J55egs8rswajbReEExibFgmgX4j9woZX21f5mwot8XUXFDGAEdgJ",
  "key5": "4wNLVMCo77tK8ZhUCBgG2WwKDuJ7EcTJVpxNTv41FYXFJWV33AsQJJq2f4ju68bihvQF2JYZYBqMgUHkrFQo1T5Y",
  "key6": "4x7e5zreL8jB3HkQwBb2SScG1bGzze2sb6br4xvH44C1NLXV1BrHbs8rda1AAz9D3PQpZsWGdZ4zhXB53ywnoB4o",
  "key7": "VX9JLaduJ1Piuk53EVLJ8TNDqkFTGVpdJzoZHqfhNxaKyNd9cmNbaV2onnMwqypz7J1eezxN1mqLz9A7d5pLCUM",
  "key8": "v2nSXmfqGW4CdQA9v5q8MzpfaRCDFNnkJ4Tk7Lc3CcxCwbdQKouRbTpjmpp7GjXSy1nrEa4V8vFchWWpdLJ766B",
  "key9": "MdizhcWTJ6KUp5vknTfygic1Nd7Ty9TfCLazcncAAKqJVnuUrCZdBeWgqc1NopiNE7zMV3Syw4FNcJokP7rWChK",
  "key10": "uKSBpRWeeMDqm12rnhrj7LRpiuaFpMPxvfM1C5CTEAXF5vwu4ExQ1yZYAuqdPmcGYBCZVzmruoujJxbHPArF9ad",
  "key11": "5bRCSKqSkasjPw91QDa4ykKX8kQtR2HpwdizQYSJBUVBejP21KxGYUpWWb7ZCL6sbmaFFKXPNLgwfP36wY63srho",
  "key12": "3qukpsLvocqYofksL1qadB97kUJSn1n5obaFVCHsvpr7ZB5bL46AVyPEQXNdZvTneBvGinJ6S399xPgLoGjagPvD",
  "key13": "sQSv82swQnWGoJtR8jULTtWnPMMMsZ2oUTLRxr79uXG7Z6gh92JjnaQdTFp8to4WDWNqCAz8VSsGw5danzhqUsh",
  "key14": "5EQswoupHApciPF5Umc98g6xanXnD6i4182Xyiweee4xk6SQc9KDFBaepVzpbLNiEa8hxEePR7FiBvEYUxuPEuHd",
  "key15": "2M3MKUqND2p9Uj9DicjndC9DYffJeqmwbhxo8XiEc8CtfszbvGHheicDPkqBYv5EjaqM9DoaVThQXNafgxowzMUG",
  "key16": "4sqKe9KWB98o9LkqXLbcTFyS2EJkZ5ZmZQ87XznAQdRn11PwVRj3DGMDeRvN3kDLDrfw5L4CpFqnYfNHFW39YnC7",
  "key17": "2GiJPLiuRpv1cCJfi4en35NHJkanTqGcp1ACXEj6AL7GuAdij7sKGmN5QLZSZUWPdUYCwm5ogg2PfMr6sn8pk1za",
  "key18": "3pzxXKHzTkBGXvewPyxSHHKV2hbpVBUwu6X87nS8EENGRRa4BrfUvbxx5ATgGwXq3F6c7yxrVopmVpHe7iQZ9hi4",
  "key19": "4mhoKWWY66TohdGENxKW1Ycbif2a6JjZQpKrRAwbArjYDR8ZHc6GtfnJJeB2aBSoTJGgfkEKGV7gW3ojJnLc5Y1r",
  "key20": "46N3Q585K5s3roD8Ck2fiuCKyAt8vhA7szrojneJUqCaYFGmD4H4wd1vQSaqJsjYjiRXANkqUkN26bERip3t5CWS",
  "key21": "XgDMpCvxtCoCADaxWfeq7xKegLZkjbnLUUyMGPbqeJDXfUTdTMCegcPHbSgvyn5iLw15quk2zLQGBQMx9mZqdaX",
  "key22": "4CiM2nqn5y6rREoDxeei2djfDXE6F51ngMQHxuZBfx1CKGUoMz2zJ7L2Tsxj7sFBgbWhJYnD5bpnAksgNjDEPwQg",
  "key23": "45iAi82wJU734RNQFxBzuNZ5SzhDVQHotwTvMy2R9FbEEZuvCJMdWpjchdqaafhvc3e4fudoY2M5cEDUYBGQSKve",
  "key24": "3ZoKaXj1G5rQYhVsJeBBFZyrt1pNnKLTh7ZQKFGaCpUsDcYLZ7rWPiC4TAC4x3AMJtxqCLXhCiNSdDwnRdMMDYVB",
  "key25": "3xWaDANyh7kkCjuiatfwJaGH6hzuBq9Zs1xDbcUfGDQMH3QzxCyoanYHzf2ARrjSkVSc8PJ1J8gjUkGm9CvEK3v4",
  "key26": "dvFNFKoKH4CtwyRPJuJ3CybtCP4dcgyaetvgx16WeK7vtBropgh9REsPep7iCVgpqyqjciBSLWprciEMAHKVNbU",
  "key27": "4m9oBUiEWtWHDhABQGaNgjXNNDPUM4T5H2pc82PX6QaL13GZcSvEMjNS3GSQ5BH11GykjEF6mhakDwrVCqbVFtj8",
  "key28": "3nTpnY7xSbkPjHFwsyMoFdjwbwHHrshpyM6oVnLsTxHJHa4pfRmyPJhrJAUKFBgv3gi3CPpji3FivDdDxW5QXLcr",
  "key29": "4G16d9X6VTxgPwbAuKDn9qEcX6jYVxRKB6ZN5nsmV4EdAzWMo97KVMHMHVzWhfYVTjdMx6zkVdFu9zfxUHZNAyAS",
  "key30": "4TPVCoSkYJTT46hxk9ZmAJpXsoPGvTSksjWLBnGuUomviQDAxGSvyMcTcpfToohY1dF1jZeWmkWMzZEBz96xsw81",
  "key31": "2EQEbsCqoLGWLCcTye8QdN3W7MgBcYghuhyKRuB3GHdYcD3sBWBYAj53aFnJ9ncaDx22hSnWepNRT9GVpNHG2qVN",
  "key32": "2vDZ1zMkEiCHY4b8QSBPW8d1TgTWayy4qZFkhWPUuzK4dtZSvvAeuzagrz1umEqywuewidWBVA73DFjsULvep4X2",
  "key33": "VA46HGxBHCP9mumW4xat2yETsDXqNia17kZzZPtAaq6GzSbHxZmRMGKGhW7FstFozyp2eD1SZ7p9PEGsDGZ72hH",
  "key34": "5HNy6KV16vLZB3GSsJk6nHSLrhFSp2fqMa2fHgNwj339DcZaBBvcKY28j6eCZr9TqXoumgdTWt475EQmCf6meefJ",
  "key35": "4GYww8RZpf93mUs2Kq18CAYwMj2GqqvVzHocKbdFybJB2FUdob76QHbApkspzq7nE3m8Yh1RjJXGDHEfADxG7hN",
  "key36": "2NwgN7c4FujttWTUSsXygrFiAAfePVR5cDZmF7VQ6FnAZyZxUycw3c1AMAJZ2gYymj4aBr5SbQFYaRSyNPw4CPfH",
  "key37": "41syyenVkchvauQYvxqMJ13wpAkqkNQVqgMGMQmWV6J6AprLqG5fvcgV2xwfjWynvbLPyapP5YLkkkqajoUM3xaZ",
  "key38": "3p8SpEhCxkxSy7mAyXBvNj3nPMo8xN94RvAbbH4yRCFNBJw8XTzPMEa1trCHgrG1YxSGUyS2d4abDwCKcsMEMeKz",
  "key39": "57aH2tjSwQhJ7QGHd58anjm9psHKF5PvVuWCEBoC45VHocwPVhsf1Ri5zb4CPg7zxH1LxAB8zwnpMQM44CqzHHuk",
  "key40": "3H3mtoQkRMyZrNdSDWsWsMpw7ASgTe13QZEGkdofR1GysCjSYTDYpzKq5sFvUgAsbsC4oUZGjkTNik89atJY3jvD",
  "key41": "31R3CyJYgi6azZzQcFUFsJ1oRbpFccerYhW2ybH4svm5CE8PXbukbw8hjuQPVdQyZz2tqy2VAB8gL5USDGtf3tkV",
  "key42": "3UZFna2KSqBFsDy9dM6X2SiqVHBrV1j7gX3csz753ebu9YZ1mFTqMMVqUWfauqvPs1RsKW9ZQt4MbxZ4xSaoefMC"
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
