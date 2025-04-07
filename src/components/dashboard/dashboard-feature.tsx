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
    "3ZJCpGHiujktWRTjEaLxMEJxvrrDrTjKU2rayeNGqfRJBnXkMANWccpsN1YzNVuiKXWvuTNfPtxm6hqpuwn439jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9hJQcDufNgjRVLveyzjTxZz8XjkJpAMuu6aCs4rGkYejrg19bJRcaqKWiKDtwDXHFCaYjwuQvGGpXMiZXD4VRmx",
  "key1": "25N5pdH91tjDzF2ouhp8Gr3SkA8orzpijuepC7EpHP8pgFvgiAchYPtT92RGN9YwBb79UKSBSm2xpvSr4zmpTEeQ",
  "key2": "4LzoRs1pP4u7HhcnQJxkupkPt4bhyQWqKhJzd72ENC9nvWcYXRsQc9RvFfxyifPHuXq7ZA12t9TVEcWSrEZDH48j",
  "key3": "5qonFU4ANizwzNmMzjS9b7ffQVbzuhdD2TgVVyEpKmf9YUQjkW28eqp6Uv1EYySuNxMeYjLf8vDgRuydgVysE3M8",
  "key4": "3LHkpit46tJpYRSpsEjmWCJvrMES3E2wT2HxJ9bLyCSQXp8ECNWrqosGVwgmskUS4VjYeZHRe1Aw1v929D1apXG7",
  "key5": "4BiU3XkcsyUgFByo12hgrorhjZ9bZtFcQK9s6CZJLwo5dcCuizSiqo8xzyQ6ToLbXPGVxCywdZUby4FZmNi6Ane7",
  "key6": "7eNQGQFcgLKEGeZJth81vFvJhpLELkA9daVmZJSJLb2WrewxVtzpmnfLckBsaxtULEw1kE1NKbN941yorA6FbC9",
  "key7": "UUrSvafj8u1tDxoaexMKK7hxySvSmGQ5ZJMsJXQoqVzDXKqNxyNyhBc5PfHQxVa2RiZra65ohb6kSC9xsRZqraV",
  "key8": "tdz3gbvzzQa4SEs8m49LAdXxY6RcE81kvhUSu3QnCXNR687tcJ5jRYh64yaqJXsTQh3E5zMHL9ruLcHenjK4YJc",
  "key9": "yGtCkkzs88nkASTgJdGkxCB8ZJfdxkj4JyYokZuh3LzeKadtdkKwBnFBj69m64S81QsyTAoBe5SAfmWs5iievWX",
  "key10": "4mxUyGhvRMFYYCs5Su66Aw4j8MB3E5wmj9GawcaABk9Uofg86tqAajPHye9epsQamCdqgS3MGrqRULGPbHgjzXTy",
  "key11": "vnk1kU1V7rxdFW9iruF7TPAz9bccyzcjngEUcp2iLm7AdAbLkm5WdUukg7eKGD2dT7T915JFoUwCZbtfTaFzuVd",
  "key12": "4TS2knxd762td6dyTPW6rUByz44SXAqVY5AdeiNroHDfj5Yi92KJ96ErqxscuzJatqYZAcFNRPJw2nq6zqTfcLe3",
  "key13": "2PtNE2WHQp3TePZXyLuN4ume75TiZG71iaPWAfY1qTV5NAfsSH9SW5JZ97fhMey6zQXHdb4mqRZyv5pUFdr7Cxfj",
  "key14": "4RPgNGuFGJHWRdWxQeUwmvnRXLjeMnfP9aZA47zVcktmYcraaBGZNmY7YhdbpZgGV1YCVnoBkFxrey8Pc28ZNVuR",
  "key15": "4v9CwU9uPbAGUfbqjrTBcFbQtMoMo8NTD6e9KGAmfGMrZUCLKLECjZA9VVUDac7Z6Nk6rtm4jsxJeegRrbUF9svL",
  "key16": "4Y2PWrMNvZfV2eTmfPcbcstq4yM1jm4r8pZFtsiGAWWgkq5ZdzVAfb6mxn9YEU9HacoLQLiHRMDweNW4qJqPHTto",
  "key17": "4rLxYSGbi1mLa7o1Gg2bFaGDV3S7bN4LipcEcaWCs3nr74BAPF5kK11N7inJH56FovZVj6xxBzUyNgwqiD2jk7uz",
  "key18": "5BfNUFmSEiAmgiUVBc94YfkqgPASaz4gzvEJiGAgjBZthQKeXydMqNQ3ykYt6PoQ9cD2s8WhYtLMiEVDZ6A2TNHM",
  "key19": "4c7Ea5RFM8J9hEzjAzGE9xAFLk2C2ECSiNMxmB35S99SGiJ9UJ5gfJXNi1zxNHEuFDn9b2W2SBeUsqvjgJW3PF5x",
  "key20": "3xYrsbAYpgE3kEwTknJQU4BxrBQRsfJgSzHPd86nkTNUhao23vneV4FDVeK8TZ5Ftyqmvqr6vtMnH9GNvbjtJvAc",
  "key21": "3iUPcspAzvB4i3gW7p34ANujU6J2XvPFSnRUQW5U3K1oHcZ5uQ2wUQdWu56ghpiHmcwCctQNsTPUpgeuQHFjcS47",
  "key22": "3qmURQtU1R3TwMCsqHU2CFvfa7dudb5Kkb6WkTCqZ3uFfFgBA36YjxaTFNLKPN9gV7mWY5vrtgK9CL6Rxemnn4fG",
  "key23": "5yHPFGfk8V89PLGGzM1bYAjXuyoJsx7k1HpP17XptfMpCbCTqctqjzTPs8LMbj5ak3GsKEUmQVPjsb1J6CnH4B1G",
  "key24": "2CmCpsigftddoedxHfoLRCwLgLG8Vgp1JykSCVLYKNUYdoz66StUi5WFf6cURYV6qUjCC6WzVRkYhTRuDGodo9zZ",
  "key25": "C9KUiFcp5d2MneWEJWrzVJ6tGdmyN6bA7fLdcDpLVDE3HrGjWafhxEBVhCE2sD4eunqh425wnwjTgP3K5ix5ZM8",
  "key26": "3YNi8sqCPcouxttcebSSV9yThmpF72vgLK5m3v8GAm2mwAX2iruZPXF9AvqmDSSxD2ggFSHqi65nvMkgaDEhBo57",
  "key27": "AiRomxMpbcd4wga8NP2ZLX5immD7YGxCgYMoow9eN6Lh4ryWLWMRMc7sAKC1guKnNdBH9gPe8jeDWee2jUMrrK5",
  "key28": "sshhciqjqaPd899dhGkAViWmtxMsp7UMJgQwdrrMKQYyo2Dfph178aEW8a2p3kW49MCxj8EiZpj6T6nW22j3hkJ",
  "key29": "3AST7YiNJdEbmUEC5R3e8NqCDutTTWnR2oTvBkJXGZXUeGBBUj8jUjVz1RZhkfenjd5zYb4erpHFfeddhrAcpkHY",
  "key30": "4CBkZbnRFwCtRDK6QmdnMVkDqfU11DcbvrRjb2LKUMrjoScV9FwDRQVnZYsA6FnNMrfdUmqnshTR5irDgR9Lwz3Q",
  "key31": "5StUGD8q7q4TQcJVH9UQgQsmUBizAwA35LTqm2BZL7x4pKGaVv5E6c133Y7Jbd3wY697diE9fr8CWgrhTiKJhMeC",
  "key32": "3MjYw17E1qm58APneX3xbjLtHLxw8zC7fPHLathtVyHDdyuFQfcttJ5ii1oixdnHRW3T3nPx2NZzzsnmtcWnVMy",
  "key33": "35YWi2UktqgvxMJ73Ry1yrqTecdAm45wN9o2yP2sUGp1DnARJMzeqN4qfiGRKKjqL47q8jc2akeLJ1dohciVLTmS",
  "key34": "5WkEYNSfqoFSJ8bnF5k9MVG8nAdxkSCA9rHa9ayuGFzpBaeAZCmUhKAxdSEfbiL4yvg5YYa9HEEiW24RJK5Tz1TS",
  "key35": "4MUNHEnGiygB7LorYogBHpMYim9KesBNjSQRbxNUkBJ5sgzx47Dk2nSJ4DbnFRGk3Bn728LpCjzpUm8vkK8UTyT2",
  "key36": "5gMsieDrGmeCDRRdbKc9wf8yBAE8pTtpLxPQHuBN7bDSSFTmJiJbsZeRuPhAif8njcZ6Db3mEC4ArdmxaGxjBUUc",
  "key37": "2ccSKVGLfyPhnCYfhHPETQAZjSxG3Xvc6nBtkXpLfT5VtnBJrhX2ePUe1PRrgmk8hgf3krS56ek2MfWMuEN3wmic",
  "key38": "GoCP63x2qDWLAjXMzXtQpdzY4NJu8AwYbVdw1cUujyduS7iMgNHXhDu6wc17dRmMM9u6uPT4Hr5d59yJ4VvFdPq",
  "key39": "5qogrYawT4QXZfKQWrVZSS5RjRhR4kYDp1MvJgMVeqZH7gPdMX5jBAfvSm5uT4qcTPY4i7Z5KJM983gmdy9LeWBd",
  "key40": "2EtTJJZmWjHrr5TJro4ExeqvFfTyeVVPkvu7h4Vx2kJYSvU2PG9zYvvCSg6oXQn81NnRqSFoVCBZH1JSCr8K1qG6",
  "key41": "2zLotPd4S9ebqxNxL3QwHsSAUZ8JdGVUGV5k2NWzcNqzCUPNbYj6TAm439D3D7NAhuY7aiA9rspHtPDHtnstMB4T",
  "key42": "PU9sDAEyGNCd6iwS7dpYgbrNTMtr3jekzwi3mjRGYdjrYAEWD3PJaSytkYfzXNrdKrBAXxgUMAqMeTiWZEUHAyv",
  "key43": "3md77meE7LZ2tXGStceJznkndeSPF4Gt9ngXDCWwPZ9W2i83cGSneJNB6NKxj4pg6JJEQfEsnLe1kiiMMokjK35",
  "key44": "2eP2VexdgsdRvGPtp8MSXDVGuo2hGUp2dfHuMiKhepr7eE1L4tT3ZnAosS1VeZqxsUdsYoMMRgwRJjr75jKtrWTi",
  "key45": "2fXdMmkH1MqXT2o2EhdZKtGWaVU9Dsvm4zN9A6Rdyk3epSoL3dwpXddoyRiZJxMoXPCADzd2MHLcLxLtGdwYP8V3"
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
