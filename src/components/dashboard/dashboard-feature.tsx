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
    "3juRv61h3jAXrc1SEBR29YKHdzMgLCKBLr249hZCQPVoeTaVuLB4sn4seCSWRySdmr3Ur4JVMYQv1wJzQ9y65UYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGPRvbhzwDTuyC9yjzJcmpKnLWKNBsQurouXCvYxfcyQbCmcoDmAxJQiqNjU5hRsspdhDFbBTA73J1pJ2B45tkL",
  "key1": "4z54nvW3jnaayYgCQunYgduHzYLsBbZsNWvc4okhmgE3Gd84AXmR1H1FNGvJJGTi7kHyGsuDhMm9uSstbsfZ1Pdx",
  "key2": "Cpf2TbGBBf8W5N9xcWmxdKZUmAP1qvBh4xuT9YKV2Fom5UGHcRequqXPC39Z34fCcTKKJpmqUPpFcEAvwypTSiT",
  "key3": "2oWHJrWkFdRCAgYrDKsMzUxMFTYGvDNRapcrCuCuJ4GmyL6ZC5F68xEUazDGeNwMfXtPnreKi3eX2NhMfxxWaCH4",
  "key4": "2Te2UB9iZZSJ3cNHWfu8zesaZKU3kC6B1MottpT2boaLonoQcNzTT3Y6wNusL4fX579P96YVnWYdufqXfowMZ4fe",
  "key5": "3YybvmqHyyJDKNWzWvNNruGd5erJ1gK1RXG92ZL3XDhVwY6YtWbTnpuKubmrbftaSoxTw65Nh5Ap5xAKb6Y92um9",
  "key6": "3vgQE7S9C724a9r9Nmh414hW8iC27LArr4FfoWDaF452QhJhabTy6CyaA58g7dS842JonghysaYPbXCwWcGiSJnB",
  "key7": "NqSokRDscimCWEYQpu5HPtZAcqs5VCnioM24XyrfF8HQ4Gradhjie5UneNgubZt8JEucggc1b6Qt3ppSPMMd1Li",
  "key8": "mtN6SzsLdGc8pJvTLVaETHq15wnthnNvaH2DNq7Uy27sH4hJqX2oWrrTpGGbCHzrAB8zuZ4SsXKY1D2yRXygU4p",
  "key9": "4XabM8XiNPb8A2cQS8A9d4mqZCBwyTcPzeJsufqCH8WTRqRT6teRjxKB7AbpJqSHs7gtnGMU9KH1a95E2s6VKAdU",
  "key10": "3epNL9v5fdfWNiNcmdmJzjzFkx93aqQX4uATEap9VSJYYi7CvpbFVJf4KVAcb8YX4ZLMKuVd9kjS6abRA1sAVUj",
  "key11": "8h9k4wZqVWSN2rSFWFNUZn8Xymui4qcPu9kjQiv1jZLXb9xbdqbmjDNK9TQaiwcgrL631bk8MhMoEDDTZ6p7Ebd",
  "key12": "3taeVxzAYbSuZ2ZpQskiqzG5qhjKPZMtLoZXEdizAQLmmxqUZ42dFqNDLqFdhZbPbdagw161XYNJXvY4kfbATXi8",
  "key13": "DTa41zfK16iqCTUprFg1B3QRZUbd7jKmJffVsjGoxMSCJ8J4Je5uYHscxKr9czMvHSMwHEKUHGCokjZoeHgzbim",
  "key14": "445psNMxBBPfML2nFPGhJF5mC8A9xTTq5Y7eHEcTw9vnx5DZcFnavhcH9jZ783oLRU9hyER7hHhS3jw3kFhGqHXz",
  "key15": "4NZC9gLfHtBK7nAcWFwB4Z6d2EfZBPSV4Few2VCvNGNSdAMdpbcr6yvdWdWhKoNYZUXr2ct9cXB5swNid3iSfhyC",
  "key16": "4eiMcwsFrui7kHKTDjt1SbtNK46ayHex2wwuw3VKZ7JStXuQEWXtQDNem6CQWVJLCUTUrJwFXcSQaUkMpzod7adE",
  "key17": "5s1eEna88V3Ee8VcGGtgZsoL9GGfNJk24F5MDxEuRLa1SHv7gyjh5P5KNpNzDm334nT1jcdivcmNGd7pu3Ppzjz1",
  "key18": "5ytwmqba4xhDoebq9NwvjRsVLnEzruwL42dKLzdVYHMzJgpjH6z4z4dHi4WokYEFGbt6eFszX6VzDhquts7wRnYj",
  "key19": "4JfJao4cSFGv3TpmtrEKkoFC9aXL3ahxevjLTaPgjEz5PY9TGP1yZ3BFejE2ccqxqttY7wUd6gBLCfQ8HPiWyJFv",
  "key20": "3L7sgp5guMQjtGbF4DL3D7d8saSor1zH15rgdxFjtnWdySfwCoWXu3YiymUzbWJRZYJLVjThpxy21TZJgzeLZmZK",
  "key21": "3TSHjqjcQmQudtb9daofXcq3wb9Fjt11UGPeYQEnyZSMXNqyrEfRi6WAb8SwdnJJdthrsXdQXin9y8RxE8tGcMip",
  "key22": "4K6M4JAzN1A2jkKKHfEHLm8yoCv74ctwG5ELpbKiB6DoWYTnk8NHGcFADKjFVr7W69B7azvd3hVubdc9683hk2Qq",
  "key23": "4xFtpRZ3dAsB9RcHNGgbWb8gi7Zj9Ufy6S1ro6u9dFVy63fuoda2iQeZ2Z36LPcBuNMFcMmsq8GrouU12bAjoKcz",
  "key24": "2du29atB4JPyEVKRrHJoXZNzz21ryxrFs5sYjpaWXAhQYSF266u5m4Zi6m1CYERHybXBpCV7Yev2bmgtFqyUwcYw",
  "key25": "63JPW6YBUAXgXurRucU7XGYAhUbdm5FCktDRCM8kyWNg6wGvSS3a2LXd52yF726SDv4vX3NjvN3TBN7QxRnj2DRc",
  "key26": "W14L7wLXLeKaBDkFZrsyZ6tdTNDPtNFvzzULkhDsPbL6PMctENLSCe1ZeuVT7iT2CvyCywTarNLED22bob1iPJo",
  "key27": "2tJpCRK35YzcG5gCSBVnEPJeNM8f7LcDyibjZQhDdhybn8Knjt6MtKrxRAg3TxwUAjnM7SBFT7GtD9UwySetqyCH",
  "key28": "4bZmMUd4ceByefbyafLXPJesLaqXkV6mLtspTqyFPxbLih1xKwUkxbne4QS4i4MYqDsmhm78o57xkFzCVzMXGRGS",
  "key29": "2P82xvtUMQu1u7SkuiTro8aMHdASSQtuwBTtzqmoCtEAHJ2e6vyZ9R65BSDvquo8tCEwL2xezfke1xb6yaqa6qV3",
  "key30": "vGuz6xbyZN6QBb8VJUJdBcyVPauie8kC1KWJUNnbZQn5iZ46jGP2YP9x6qMhyHoREx5TtW9qNmvyQYutX7B6Soe",
  "key31": "2weqC8dH1JyrFtop8p5RLQJspoXXbkbZRu6WnovyRL9Qnxy48Hj7UWTEhA5ZcDiDmuV6HYgAfFsZN9vJFpXz6GYn",
  "key32": "4KRjePmWStLfiHCaGomYnuoCHU9Uqmox6JNGW56P9Rpq4Z76KWb1rSEFSA6oArYaoDa1CPixS9nfNiGCk9ubvFGx",
  "key33": "5Ve3RGQ5xagp8FBAbhhFGDySfbjM8SoLqfJFfE6HVvbKgarZRF2G3kWkBXdqc52zNCwqRpeG9WPfQZegiM5TiRKP",
  "key34": "4qtzUz5dEVSMNf1CzjHeNGCAizx8qSmjd491CZSycjYHi3CFCz8W2KmSUiNqpJ3nSurNFNLUNh6h4cNNTiskbXjx",
  "key35": "4P17WbC7aRyhkikcWK27WxzG98cy1p7oribGzAgMb3GVMEXo3bMgt28TnsyZLPguri6m37gYbjMtLyzSSefbyWuQ",
  "key36": "3STWRu93bnBiEndixjFLFLYQcXwoBzZnMJKxkZa4c2yPDBFxhZp4XKvsTxvHZ51FpwzafqLJtAFCcLWHh98jKzq6",
  "key37": "2AQKeiVnwLFB6S7XYiCD7GkmhWYbJ6Xg7vwrRYKW41sCcSJf2ybFveH4DPMAeoPanT7n9YjUbChNG9AYj1dfbFMc",
  "key38": "3EuqNqiPEV9cjcbD7hfUaUndYmXGaTAfuW1aqyK9Erd8FzSaL1F74L2CsgLbM8Es5zwvR9aUtELkaMARz5xcPygf",
  "key39": "2MZL3tA8gM9fsFuYjD1WdA69DuHAeiJHTxUavdHgdrEBvFCjTPdAncBNK2RBsK3o3aACXPFhG8GEiMDoU7iYeeh2",
  "key40": "4SAudDSNq7U1FnMqMyAp3EEuBWAqz5X33rmq5AQWo4faoivsUvEqDLJZW7mMLuDgXpcJfaYEECWGvXB7go7HXVG1"
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
