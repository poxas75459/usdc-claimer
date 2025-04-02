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
    "yH5L7BEV6WgWy6xazxdzfXzLzzTPFu6eux15vHXEUvu7YQN1WTp3v5joVZJofmt57T5JRTq7WAANEpumuJ9AS1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ssEiQEaBPL8LkRjRRMyeKqFa1CkYCCP3jdbMLiMZHLAFPqSVebBgVDq6Y81fSDPkaQD8jVUMjTW86EcNvWZ1Urh",
  "key1": "3jPTXSk1LLhYSL697XCfxTNyyvzuYkjUrFevrvDJuHn5RNZFEiHjiJ6Tu1D19swYj6S7CvAAAw5PimhnHNQKN1cC",
  "key2": "2UpaX4WkwTQxrHkVtda5eR5BnhLAkD38ByfLzkezbLsMUqv6Wt4o64x9MRBsbQjjDqzXqv5MuY6AxMjnd7ezSweZ",
  "key3": "QWRy91BmN7UoaddaF6uPnYb2epyEkPViLDo9ERirBMbz5S9v1mtbB7YF1HA1S6TVjbUuMr4W6V8wZVd7nuCfUrU",
  "key4": "3FKa85bmhY58RGMMWiwsJfW38wK5BsaSEt1dqigYPduJWgj7VxcAzVJUaANR7pnwSFiUFHGprKk87Mo1vYsRQfhK",
  "key5": "4PZFvbinK7wgM4woHqymSVZKUUVVpAbwEev1FCjdgMpSQYhyKX4NwZ6fkbD9iTXYyfvsgoysonGaeo7ZuJPgNoxM",
  "key6": "HAr6XvbGBpESqGySuKQk2BAqxhGkLvqabj9NkYJLYnNZj8WFTCF3zjapW8iJPUSF3xV5iM9GyHPkbMpLS1MHEmj",
  "key7": "5nANBHka7DkUvb7oAEzmKAwvB8Co1ohvusaZq7jbpUE5Smzp9eBk1QkEzR9ehSv3puR2eCWtCeYFhVqDpC3zqjeP",
  "key8": "4oWTzLgJgKLBFvEh2a7wGy2GjsFjMJwEA1XKwLv1E8uciho4cWqHTfS4PNr4W2wosF8gjB6FC43RkB5EHNucTLey",
  "key9": "2EDrQEUBuAuC9bT3VRLEQvwbqhq2ZK256SSZ9Dt6ksbTUCZmJAeeB1EUS1vc17ya1taYSUr89yFHtY3xsUYqVSnR",
  "key10": "5rVnWJ2gRNfaPcmVPTx7rLeb3Bc8Myg9Vk4tYtWxEsNfQi72BF83Qu6RKRv1syNPGgsozimUD2zBYbDziyB8LXE6",
  "key11": "2dNG3wHyvymGUYe3ALcHJn6nWxLy9edqefgVcC7UYsqfSTAgATk5DK2UAi5FqzvwosXkk4ESnPNW3RqxdH8n3Fbn",
  "key12": "5VVL98X3N8NHSRnsKJNzEcSCoRkB1cV6BDJaURCkgDgaD6P4wEUcD14vhZ3WVjMhgYdGq5NVzA8w1zo9WhGsQtnM",
  "key13": "2BbLTgazNKaw5M1uiFCN4pakBBhd8TbAo9KTgLMEFz5WsHVJY2kmvh5gbh1gEnnZEiTYkmuQZ6ScBeS4bpb4fkk3",
  "key14": "5XPft6kDmQY2ZchaZwpX7QcyyvEpsvo9Fkvq53kEhbtiUeU9vHLGh8MmdieJ4xHzeu4CxPvWua5bHx1KHLxM8UNU",
  "key15": "2zvZrNtkNbwBdJJb49eKcUBL72AHU93PX8Hx69AsE9Zbw46tmSgKU6TqMeBh2mEJqAs1gPp3czPt9anVQxrGP3Lx",
  "key16": "2KjqZrUfadhkGnrffs9RL71k5M5WcFBYkR8ewFKC9osGMkNN5SjqdciufHNT1QZC17wX5NsVrU3yum2ZLNPy2PHA",
  "key17": "55jSoG4pMLHKCPgpo5RQuYZGvbfLSYf6wNV5Eh3XAQEsoNEaH5RdhbBxPb8y2Qmz7V4eqUYsbYHkdDPgZGj5p1W4",
  "key18": "4sfEwby5864b3Htc4Pw7FNis3izMwp5CPaeehfScJ9tYhkpKM96gCUduacx3nSxwfrQfbysJ6QBEeDGu87EWrf8Z",
  "key19": "4phVGLiYthwnUrqewAqZnpdvBjAagjsTf4GAhm6SsoCetfRgxyUp7Q7Zzi7jfqySjwN4CQaFG6sVPFNs23Beh4jU",
  "key20": "r2zGa6g72nCSwEY8GDnM8PH9E2rHKzfcVgtETKhypmvVxABZoEmC5irVxvtknudhdK5xeCRj29WRJwt4h7FLVit",
  "key21": "2xGamorCUH6QGrx2KejbeBCFcFXotKwbJGVKVU3JwqJi3wvsUm1EvL9xzma8GuYXDSN1fJTsGZZ1715FeEgse3Gw",
  "key22": "5kfka92aAzzgbTgeWfzJ7FbgcnD8y5YtkZHd2vpmDMqimXYV5DLAwauMP1Feqw7fcPceTyfG3uYhBT46mqA2vUdw",
  "key23": "3Xr8acJwZL3rxSvxhxAQeAPPmhv1oNXZGxhh5LLgewSBF1ddH8eupogMS92gM67jcaCDBLyuVKN3qoPjkXzcyytf",
  "key24": "3a8QAATjNh1LvhksYAphkw6CXw1ARcjk8EatVKhpdSdoAKEEqy34fVQA2J3wEcGc9n8JPzxYRco9F1H4T1uVAnAp",
  "key25": "2Mp2rzqBn9Xxbf4HkzMhjDzXhv1a4FGgikUydb4nNdHxtBXAMcFkrjyiVTTunmWw7udR4y8HT9Tf6sMRnKJStfRa",
  "key26": "2PE6R8eQfLrtoVWDCZtiRQRrUcmVkwDDs7g6dywA8fdLVvay4Yrjn7W9VumoHVQRCZoQZjMLckWVW3GHrYxaoHxQ",
  "key27": "4WfVjSedSdkXNreUAFve7Cv4wnp12F6z1hMnCTyt3YiNmHKQG6TSDLMbVWV4q772QLNF5dQTZxYqEYbc8sPtm6M",
  "key28": "4HTS1GUtEQAJqwUPAY9thcRmPvvsNgtCUbGv3vcBjWWoicdV2uEQ8HtWtVoZwNAvAGT3hHdoNYHEmpBuBBUQ1F65",
  "key29": "dF6bzyQqUSrVxcShua4Fj4EqEbJmik9Y8xkHTUvMgzbAKqpPNDySTojW79VSDmHVEhGn3PqGNfutSgaxY3AfpfJ",
  "key30": "5w98LF4MSNcqPy1sS9zap46AGTg7ztbXeXdVaj3HGA6jqYpmqQTjut72Xxw4eXm9dZJxkKZGUsMK7rSdDXUvaWsk",
  "key31": "2bUQTCuFF82RVvmms18cqs2AbYJHunt5oRhn86Z96NM1AavFrrUt2qgXbAELpkHcjF4nGzo9f6K5HFSLv2c3X75W",
  "key32": "E2kvMjUAhYxFLnpVJuzPKWZ9gBm6sDXBqdi4oXF4jRDosvXbcNMevA64n4riXKwfasQkatU6hnQp6WLLqzSKaxv",
  "key33": "5uETC2ztDJdEco8JwuiEi1CEoKxf2vzmPwTXBu2j4gxVfh2o3fEF6cTAbuoLA4FfS8DwpC6A5NyBUgJKaGrW1LHJ",
  "key34": "5LUnzypRoBtubhNg11PCYnM63EvwWhFU8jE433VWagCCQ8b4bw1SZfnGnVEt5NW7aQRBHMg17oEvorsPGgwmWf7r",
  "key35": "2CYa1kLFitW3m6U511EMLAERTs3xmv6ryXHFWg3Vx1SRMQqABE8xwZGXxzNJncHKTFoiR74o2RV1B3MChQ5d2dRq",
  "key36": "3A6PuUmeKav9dj7yGCdSn5daWivYtwfhd4fUxiD4eVw3ahQw469otoHN9b41tfVJTzRbgFJnppXvmDrkXMytAjUP"
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
