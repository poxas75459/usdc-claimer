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
    "BZAMXse2bHJQ2NsXhyeJpVUDUmfGUVo2EgVa8rma8FeznpsSrqNfvzJy7YuouHRqSVuJYk77WLojbiq5qMSPZbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZdsoFK6RFJ9FotRFyMTvLvWDK5wp7a3nnv5eVwfWCBCATcEZVYwu3msZwHYi9AyDVqL5jzXnvLhu2hBZaF9bRu",
  "key1": "3yN62fjdiZXqqchcuprhMjK5MqAWDUzXSmMB9aZjXyXvkZ63YFRUSHEFwVterHPzw7RvADbzrRamR4adZq5U4EXx",
  "key2": "2UugFZ8GpyzQF37gfh51AemAgUh4e5LpYr9mEMwLb39YnE5QhgsCeEBaJWsxAwgRPPEuAFSKR8J3279XJSKW5TUc",
  "key3": "ysBxa88VL9jiCJGRwpzc6umij4UZLKzkGFyrJ2wHrEV7UjEQdUY6ALYP2q6X3ctpf7CqqsQXddD8sAEYwVqkzjw",
  "key4": "hWgp84foPwCgxQ2jHa1KtZ6UZVWNZd7VPT8GHRWg9XLRKqNb9YTTPTsu3iA7PqnwsYnaMLGJwM7j7mg7wGMEWCy",
  "key5": "2YCtpGdWCJ1xNr3mtVPptbH4gcDm6ZJk8HSVqjxrdZtNQYVprnHMiLCVs13ghvCxPToEKY2ia1QRi4H1ShcndA3B",
  "key6": "3igRigjdGopUGPoerrpWmLbPtVac3AgWGBm28xpTwonnh3EARKijPcZeFdpwHmzwrub8tzdP1pnqi6dQfVvKSyoD",
  "key7": "35zna9euTqAtmboKTwMz6BVXNSt6SQpYKsEJu2UukpXeyXaR53Sh4H1DBupWC4kLWQJkhokW4y3pP4pivok5Wnmk",
  "key8": "3JvNSe9XQwnAA1Ppg7TMNNx1XYgVh4tNpyMoSZtP9i3y7JxnwGCUpGGCY84v7hzBu282Mky5mqWRGxZB2M5SuSQT",
  "key9": "5fEo6tNgDnddjzeNCc7NsRN7hys2UHNvacTV3Ve6sLZibESvu9GZD2yYb6o4aFnNqDAhNMPAy4sicUN2ARVg9EwN",
  "key10": "5mgqUPKr3RQPjHEjX4CaJTDbcrsv3y34jWJPWKNTNcm2MFSg2As3drJQfYuJumFrt81wQcdNmvUmAh1BakoB8qUF",
  "key11": "5h7akfgmExd2zjAHaw7DwhKM4unAXk9URdkdDcMyHbachw31r89WGBS39c8vjNiePiNZofDPmnjUTEMtb1YN6bva",
  "key12": "3QF1DeZqWmGwUcttZgzE6HwXdw3Q553PeFPcUvXH2PGrhtrtXLs8ZWeHSijdggkeXkiB1wpNmfDoMGdugn8DVSoT",
  "key13": "fjGoaRimBNCuCqwB6dQKLtntKUWtuQKJLermyJfS1FUeCdFN2YXd4tnkp5zuA8KKrHKkD7n3bA5NJqR1upe1Jhm",
  "key14": "3xDLdfcsxT5PDF2BstJQ7oRBRJjXDBRF2pdqvRJ7RqKSZ4Q6g1NgX5eyjPwEfEvZRqVg97SLif3M8da3JdZ8FsQB",
  "key15": "3cTyDchiVHbgqUxWvH2RptTe9rq8UipMdJF4VqVUYFFdbBYqh5J8PdRKk1vz9PppnvwQb1YWcJh78FjoM9X7WEa9",
  "key16": "bC3q5FerNmVoFadMqpWAKoRNaYpKpzDEjQo5cGdGSFf1MAAca7KvPNte2nQ3GBSoqgA4RFpFtAP55s3PqBK2cVT",
  "key17": "5VHkoep2Qeuig9y9BMNaedXoL9aBLEL6p914ddPoAAzTbdP2Jq7VHTusqpjZLXvVrG1Nab7VeTQH7DXRmxr3gpv3",
  "key18": "3PbEeL14jH2N6t99BwBgxCLZQwHxPSzsYXoSuuLApBTbgcH862yFr4exmtd4PMwU2qGgM9i67sQRZhfRXHVSVjpE",
  "key19": "nKjUyaCkDPLZGDstE3iyozH58cA48T4GpkpaL1yD1YvvQZcAPWE2urip9yn1jGBRQRsjH79ZSGdM3o5EyP9ZC1s",
  "key20": "3i9i2357d6d4SGQygwMPzBnwwVdktcQtCthuUyTgxxtUrn68BTsrKnmAap7WrBqNsVDGnCfUmTgXqpoyqrinNCqJ",
  "key21": "4K6oHmKV6WNwrbQEChpYKJQoj6wCLMw4afatLgrnDafopsNUDSm99YuZf1RrMn4jVoGo1Pqe1pZCZ7WxWjSUu7Vi",
  "key22": "65f6nRbLR6yowcWJhFKt1AuJ2kueKM9MCnyLQS2u2C1FGRdfQ4VdDgdyCtoHjMVtSbpgUu1QbTeWm5eCdxvBDJ9o",
  "key23": "4dbSWjCBfyeJDqzLbkkr8a5t8kfbSb8CvXvopyfM9FUfKumrDsQvGByK2dVTVRW7U98eX6dESbhL2hcbvjBKzhF7",
  "key24": "541Sknd5D5GwvGSzsXNqQwZzEPPo9iU7FCZPW1qNbEERNNpDwL7dWpcMnTgCZJqAQdshAQNEs5wFePHXDjQC9k9q",
  "key25": "2GVAEjn8S1w5xaWkjoL2znLJQwHqtWeXijsQPdZzJ5Ujryo6Rbaz4L4qAKuztueg69My3A3rTQUxo7XbQSLx4dKp",
  "key26": "2xjTU5qL56LUqQmsoJEuzrKtVTp3CwZtomnVVqQisxJpaXFevtHMVyFathUNWHjhfpfTx2VgYZo42hdG1zWxrYS",
  "key27": "4mowEtfzjpN9eF49FFgXLzyWyAkwZN8BzQo5HA1B5NJQB1Kev8mbitundoY43yBWzTvXqk6RTyc2gCfYWb4Fq5BM",
  "key28": "2ucMScAdkLAgfWrFXUN4eEV3CmurGonPBBSW91YvZRaumKZ4PwkvVC9s8vYdCERx6qctMhW8Mrjciry6GfK9h3N3",
  "key29": "3wSkCtSGnUuSca5m53Ly4GcPNMDGYLigrgoYyiouAsmiGZuVEKxTKtNRuSv1TuCYKyBVhaHuf1Bn5aBhyy7BH4pR",
  "key30": "d81mWCs9ni2FB9SDv1ta8GpNNTF9PPBRSBjUEHdSSrkgdVVK7Rcrdg6xdjB18aCxYVbtB3WNtfsSxdzXTsjr5KD",
  "key31": "3pb64toTGxZjcGM9Ks3gxj5G59eBvvMuLQTyEas4MUB34ceRk1V5H6iuiG7nrmwqitu5Ww9nL2dzVQxBmpnfk5UE"
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
