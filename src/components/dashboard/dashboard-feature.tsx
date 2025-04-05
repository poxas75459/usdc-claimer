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
    "3EDa9XGbiZgKnU5JK3i51Gk4iyGbUD8FTiarM4wMvJxqZZjSBqLvVJYZj5SiCFgaab68AKgGJJpjLR6k6vXd1YaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NJvwvVCbFQ935GHxRvmCKZWPHMX8f6iERJKCNYdrNDSpnrtNM7AYz2TjM1VwaxocRT9Envu7bMaiXuDXvi1vNxu",
  "key1": "3nZWv45m5Xtch6C2BMCHSbNKSNh85pQMFZL1JEA6mv3N9goXKNt4xwpCMDpF2Nzj7ZRuBRzfTJtJcRrvwKVidb4N",
  "key2": "3qyfktPRS1uzjfzEgtxQX9kMM2kGHPpktYHF4rgwkvTnHuQEmjNeohB5vTLTi9sFjvFRZrT5t4vip6ZMveDvGd6h",
  "key3": "tqpBnKar3TLhHmd22wTQgY2JtWpm9HBhdp6LX4HFNKZbMfvUUaog2FMvey1UMsKKNxemTTbwetV4S1BZxFydqvd",
  "key4": "56iP8f6KEb62jsSaqyrY5X26Mfk2MZixhWWgvAFiEa4wA7oiUPZigWzmgSnLaFqhexRkePrAn5vFLj26f98wSTzB",
  "key5": "Tuc7FMDq82C2ZRMovgeQqQqRxVj5R4YZ61wDunVhJmgXYGmXif1QFDBY53rHoRLE3HhtfHawm2hwn3ne6igRX8r",
  "key6": "2jHJgCPr6Q1WpLsgEfRAxYEDdjXNEi7yvqfYrere2CnunqVERsxA7n4aspPD22o27BAFAri2yYxvVZKR6qf5dVCL",
  "key7": "51A9xRrmusUquqMtKEWn3Mz3hJpKmAjHzunQSqdx3kLi4JJxD5gdV2sPQTZ1Au3AYHmPDi2kbZNRki1cq3XjQHpt",
  "key8": "2uu2SYpYXJ7WsLaZ8czQ841SG6TLLKbtyteMMSyUsKuZ4ixoT55WixPPN6GJTNgaut2y7QsAG1eEJZ5Kv2FmbGAL",
  "key9": "5n2HNQUTiHWLQyKtQWeAJCEzG8m1QUCeDhRYnyWPUe8zStFFw6GZHiz2JRYP23tpoehjaXKukFeQyAf3LejygzPs",
  "key10": "2nT9aLrr8EDhr2DwzT2Rfqpyn9BDdvBD1KzXXm3PVkdT4EjSForzfVRTEJ9zq7A3HXy8wR95FXJKXFERkEmqcS8G",
  "key11": "5RQGXQGUrrxegaCSeuf5aAMhx2xFhBYT3bgz714wdPhHxfZhcxX88f9Z9nqqpFkLuiuo97kUfdypNggcngsjVrmT",
  "key12": "5brEJJWLTZxDgU7eXAbgymwu24URWZCzv1MQn27k6Z2fToRdNNZWe9vxjf5nkReUDhGDh1yGqriheQqRueUijWgV",
  "key13": "5ZXMb4omH3dFLbLSMMFvEz9iLiTzE2aRzu7eHM3ghXG7NRQT4YPPkQLiiyeBeU9kAbK8Gv2MUHwuGxp1EStBhDP",
  "key14": "3oW7az5qDH5Z3Ehy4Bj7XvxmQgfNTkngTGbRHNx8xUcq3Q4hRydGCxrUhBtyYAfd18mw28reBozJejyB3JKTvT3V",
  "key15": "4cDDUCnp7dmqmsi3idNjxyXJmvmFNUwmiYahv59aZtMXRJ98NrQaReK8GPbQseBD9BHrrnzPNF6KcP6pR6hwWooC",
  "key16": "SVq4jpkRiYrt7hKjfFjtpsnV3qovARc4dEfiVykgE424in8Ltazj1H73nBYCPABcLSwj1E75ypsmPGVMJnDxuHa",
  "key17": "3HQa9YeaGowpJ7B3qk3MqWVof76R8dJ2PMESEwNFqjYqXGzh34FEZnBYiLdfNJnbdjnrG3uHTHJwQWM3KZn75hWP",
  "key18": "2Kn3H28ZVipL1k7KkwG9yTQ9iJFAGQhs5Z4UsLBnhgnxy5m91PMXkpnJD5mWVEeQD9gwr6f7rMXLLLMeXagtGRMQ",
  "key19": "4KQ1yca8GBX1XugQAR8XCeFfUpVDRnYXFwTiSQm3j4BJ8k4bknkqmp76NivMTcQfCC7Kw9vNSLBbQvrMwX2UE99",
  "key20": "2fM9QnerRBFHwwY7wpemhdVQ2LyZ65xNM4sj4UtmR5Sk8CdoK6BXwXwX1veabxn5Sgt9GSwuEM58fvXQ2q6Whunk",
  "key21": "4JEJcVcNDdykcDUkxjUYAqPZprZKKoX9VpzmrsmXbbt6jU4WqH1y8oDcRZsoNDvVd2qXN7FdeKjCgrNCNp3F2pBw",
  "key22": "3AapVkpYsEmbC3MNHCwkrpcAXSkVAPSwXzgtqqK93wEK7YGr21FepCmFKZeyZF53T9iq3TqHtNPfnUCuk9Dg2ByK",
  "key23": "5P6ZDWDaEynKXVJtCQWuRSbYFyFFGPFuMs8oaSMhZNJBrHGyNQAJoKeatV7fEPNsXzakWPqN4UJgpJsYpKQrLYos",
  "key24": "58EtP6t66QupvYZ5rYtKiBDorxmoq6FPN6xtW7h9YwqxmQyd4au7nTRByyNzW7US6apWDP11PZ3nFdUQGBriDGoi",
  "key25": "3Ra6qZur7jhdUgowZuc71ZGkGZcqjkkCssMtMzyggwjo2Mat4QbKrAUFGS8TR9ebSFy4YvceUCc845heB8YiHYk9",
  "key26": "43x76oyBtAqTkmAYyszwdAPzEGKWbu6LmvafsEtXkNfCKyGswqsvRmyw1M5wFsouLgo3yM1QaR8CLiQLD3aS4j1Y",
  "key27": "5eTkWQ6MDFpj6QSReKzz2vp1Tb4ZuCQnd3J4D1bgsMDeB6cKVvGLBqdUfxZ42JJWpjhT3UZVqSkY7f5eDNntnT8z",
  "key28": "3RwgYD35RzVP3NdaxAL4KYLCQrXb8qPYJtm5p9jmz8WrBeo4BZJmS6iBuRHpKj5cUqbcwHX74t3uKD5nVJdVWvFV",
  "key29": "5TmJVay18XGCSia3uvfZearYugsa6tgEfykEgDHsVGSRo7jFWgNCCEYFd4sCk3jCyTErXb1eNgMZjXBDzDH5s5gn",
  "key30": "3Ms8HumrSiqC6EPG6ysYEHvNAtVJud4RWtra2vBh5MkzdwaeCpmiozLPimS1YJKgWftNVLnnTWCwtjmnCGkwp8hv",
  "key31": "3hp6t3RZVhvvAkyQ7Agq4tYGNaBwiD4HhFVd1LbQDsMn4FkDgrvXk9c82oNcQbcFBa85cm4q75c6eTXeMDdvpACe",
  "key32": "293cXBVM6Ap5qZj6TxSaWXQyxfHH1kC9nVPXs67pY6gaUbyeYLhLw9DVC9ugHBnsme483NRQG2zDtYyybgoivnvS",
  "key33": "2WaziECT2f6Jijj5EzoMvV1LGHsNt3uXHZm7vDy7mDSiXELhAu3Wn77yeh5LgPxGMhrTxZ62oA9eZhvjhRFEXEcZ",
  "key34": "SK6aK5WbjmmXaojheeY8EK2AxsqByr1AMxn1BjAjGfX2MgwrzrG2mM4QbCqyrwLckABEtP1xXQjYKQC69937eEh",
  "key35": "2YfQWqM8rqqJRsqjptL2AGdGCL2kjHxzivKHb3PvYddSXaKZ7YXwTDwKwgCNgmz3Jdgsbiy4VpqRpk9ZW9CYekqX"
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
