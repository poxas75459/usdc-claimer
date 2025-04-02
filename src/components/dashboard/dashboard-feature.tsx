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
    "2PQb9vX6mqiM4vAY4fHKcibaARqjYjx6iiixRfGP64YJ3Q7gdh1mq53rYuhNaTT3xzwNbw1LQrSaNoLCrQK4CPA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fo5w5wAz4xs4dBJFRkYPDBPpjLaSu74b1J9Wto9KM83FQNc8ApvkgBqokuQBWykLRPg7jVTX3J78rjxBnC8ihfJ",
  "key1": "5aPbnWEmBR3eTSXEvLW2orRqp1rPnLiugrFCUkfNcxvvih1ezXzUG6JBvcQpjEsBAqhnrxkV3PrVaKSw98afGitX",
  "key2": "3tikhTEQ41rbcaXgi1wkT15yGviBRuJqJtEMtbv42P6Xmvc7jWMtJjhkKno32tEodvqdZnDyhcAVgzzAtnxYSphg",
  "key3": "5U2726nLjWuqUmvWPQgSf3AwA6XoQksyufCHnWiKHkdw9ZiCX8Xgh2vDUJzxiUZ9hySPEz4ewF34Uys4ZLP4UyUH",
  "key4": "5bUER545EAZq1gBNVAZVGahKAS1kcNXmvbanXmM9f4Xtqs1RRfjUpn6WsjUsFHWGVMNocLjSHLJSeWisV5wQPQKa",
  "key5": "yCAbHeWU3iSX9B675K2LobTdG4ZxyL8ynGmB7SZamDD3UdfFi538USgV3EUzY6C5gxrZK2XBTsfKkXs8YimS2Zs",
  "key6": "3NVoXK8sKR5VJgZq3o8v9cWqnKhTKy5MYNN6Nbrqz2rakzs7rczxBYYCq71jmUARdH4AFFgFMtCRSK6LuXVas4VP",
  "key7": "2F2okkVJxVPdo3ePqwVMkR4ts6zXbmM2SC45FApYDLXMBBYTs6RRfhidkZZLDGSvmibQXAmhbeoBr9MATpxHHXov",
  "key8": "5AenzchV6XYCM4S3ni124rQfM72o8fKqnpYMpQpMhAT4aZ49B8Na3mYYEh2RMo6u5xvaH6JVnGPwTLcjDZnwUxUn",
  "key9": "3EEjXfZjh95TzBoWndXMVYswbGHrMzT1fhBgmcNUgiKTpjMvJZTvwEp5UDfuEmUWekprcYroaZfGErHomnV3XmDJ",
  "key10": "2QcHLDkkHR3fb2JLM4GrcML6YoLX6a6GtWxtAVNsMt3iXB7xMMLUPAqQ5PhSGGdorCGE5jj4gEksGEem9ckMyL5Q",
  "key11": "JNKg5FiKGhBrRKmD7FwZqsXN3jvbhQdAZ9YSCgLPPthyZ41ed4og4RuNjrvbGLdhgjNNwTJsDJVVc9yHwCo2E8U",
  "key12": "1K7BtWFpUTByKiythUavZrrHUooMFxaKtoBnJL1qZs5yNcCB2KCR2dYGC9dkSDXgxsTTXfeX5D1J6w1xEDURKe8",
  "key13": "3RyKKAvRrQdyspY2sCoSiBQUcZRgEot3P6RNM78cvCNTVgP5FB5SbgMMwSTnN8aRn6mEENfq8mw9bTWCA2kgzGCB",
  "key14": "5cARsmTXp6SZ2yBezxZqaVYuHt2njxiNpdwii9ZSqmzDJyJJYQ5CsTTtUFAySdxWE9qGjp5WhyydHhYziB2YyFx9",
  "key15": "uiGz6FRpJvGcz69WL2uDiqmTJ8mpP3asdnoQAHpGUG5sBiwRWtiKiwd17pQL2EKDMYPNL5E7AtC6DfLLr7XHDjM",
  "key16": "ZGzdjhgniz9qpvAoyoSCHgpVcqtBSs6fXY2pzVyPneNew8t8ZC6LksydtuxVAbVcqtYNLM9fnVJEKvf9LEsM48W",
  "key17": "4QZjNAZfZzapV4bcshnWi5VJtqbpNiqZidrCz63ZqoFJfT28sXKfpD2HNXUyEEWvyceyxPjy4nFtnZvSDwBD7nyu",
  "key18": "5yzZU3brcPCzSbMP6AYKj9BYodJUjDEqtDNjcmfmZLtPHDLCMZGJDmxMVh4sDZGBGhGaUnUJghfzDeFSLR792UR2",
  "key19": "BXTH4ASed3qydjP5ZBMo9revxZaQSEPiT3yhn2KquU4Z5PtDCD8VRxpytX2i5cNE1CxWvdegQokgbDz423RLnse",
  "key20": "5uxVb5YkD3jJfAJhwdviq8RwMyAMB1WAZPmeSAXqboSUsZot3TYCQVv1tPnpUu771HYH6cWcbKWfA76bp6YaZ86S",
  "key21": "3PcSWQ6W7cPrgD1UzgFzKSniKVTAsbWuAZhgFjbbxqRcQs6MG4Wp1QXueLrEUiW4LZTsHLamFQ5JiADK2w5JbnWD",
  "key22": "2j1DzDQt2yDGBH3mSiUqQYZtcEVxMfSvse2osJdxPxewiKgA14sGdZve4mEQbuNaDuJtW3AR8XNmjJjSEJ4h8spZ",
  "key23": "2DRRytXvkxG19z5KFGk5K5pRRHA7pJd7em8SQBp8cLZCcEFRM1aHiRgTteVEkM2y5S7nRNXMA9v3v9GCqw9VwXis",
  "key24": "gkivQ4GzLmh2HedZ9RjKttypvUjmwabEZuEwnJjzX4NJWs8KqDH16bZcAbJzRzweCs5ENm8dzDMU9v9emYXC2cT",
  "key25": "VzPHNEAvcmY3UboMPnDGYACERtxviRNevBHvFNG9wPnyYbB4uQiFYHLaJzzz999LWfjx6nkC3JEGW4dFv1PHbQn",
  "key26": "26Qc4bVxigUxT5BLZtzN5kuwmPVCQA8zt5gRQGSMoc1XxudWPyyoRPzb3a4kPnKXLs5FCCq9SLjLpBZwRbj3CLTr",
  "key27": "5Vk25jRRpfjd31e5aXPx6yMibT64jtu5kc7hywPQzPTXKNyYam2rxJHAUKowH62CgM9uKwT5D34QFHeoq2RPuvvZ",
  "key28": "44ggaz1cXvU8DnkKTv6Rs4KwvBKuPbQe75hi3ELdTqVRy3CXjVkLpgfaH6HDrGaNgM14fSqZPSJmKbPeBRiNYg7d",
  "key29": "26WC6S8hrgtyXsNLGcXTsDoF2BdKTHYWyxHHyR4BPvmsiuiHPHf9KyuFvn4w8JLhN2ZDxYWTqiMKZCerHPRj23y2",
  "key30": "3Nc9zf7XpqZ6D3N7eYHVtDcBg1CiKAs5nx6dmKw2WpjgcWHxLJt2Q1WEMEx3MNVU9owmhvMDvZ6pc8KCJH6vnfHW",
  "key31": "5ZNNcxTsRRNcZxWv2rzNnxD8sheMPqYSSwXokeAwXK14o1XKwTEzPeCqkur5XHrcFkrbqXL15rYvzVRmyVBT9xDG",
  "key32": "49RfnDCsFkkrdnMcTHvVX62VhL4gPeSRqA1b8fAg963ZN2eqKP5RTsXLpXAJdGK17RH8sfnGTSqi9qg5nZRzAsZ3",
  "key33": "AzEfvkmL6DUvFU2QNxhhWQxFrDGNNupMfgEYFsfkGDT3dza5uYe7aqjcjd3t7hYA7YJ3jgooU3b83b2aHgW9d2H",
  "key34": "5wDgNnNa1d4vcBGn8ZMapZbkdsjTyAwr5awSdcjh3UD1gpt36mRwRs2H5EbJY2yJtFvKwuBdtz93tE4P9V78SoC6",
  "key35": "4wkznTMXFxi745Vd7r1xTWuoL3tXxSbBnF3sd8n7W1QAdMKsP8CXMXYS8yeJtT217Zt959ePT8JY3DXqoMvcrcz5"
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
