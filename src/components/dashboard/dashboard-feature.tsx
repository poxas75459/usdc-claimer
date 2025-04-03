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
    "fzvN4otGuvY9jvy1r446ocrJqGoyFq5JqtMgneQMEjhZ5Fysbr8NG74per1JpibQEew8kResTYb6Gb1Aa9ZE5Mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rz5cfurEXS1eCeM1zM9ADr677inNBBg6tEwCe6HcRX4WMvR796Cxhw17AuQ6yoGxapMrhNKBuMrg6EUFQvDg7sx",
  "key1": "4dfoKE7UcCKDg8B2nN1ZHXu4FP2kYPN89MLuLJuv3wSe1ao91F2AegY2nNrd8imtjQkUbj7nm1TWkM3PYbkZT7Nu",
  "key2": "J4MVsejK1wZotvWLvRHGmkPFiMQocXjccGR5DC12L2TU5boC8J8Zu9gKNuzCXMHCsFeXpbN94TpaRT6xdKSZjaX",
  "key3": "WcmhPqHr1PHLTdz7JE2YCf2VmTKZqpAbY11rcGwKdFDrxy8sXz3Von9Efd6XaeGiU25EbewdZth8i5GLEQQEEVg",
  "key4": "4v8oVRuJFkpyvp7oBYfhNxYmvoBdQsZcgmySceeYMrXnnhjd64HjcvojyiUciFGNB9aknx7PuQQ8vXVu17wPTZxg",
  "key5": "4MDoZKo5NUejXg8KECunQpMG94xUcHQaXqcXm6XkYGVG4uGybUom9u97asEAYGvGTKWtkMrf7F4ZHGT1xUmZeRgD",
  "key6": "36Uo8WBho5HiqwQeUgJmekZAmTYarnwG4TBnkbgC3YmRaAHtQ8gLEF3khJMBMBaq2oMFSeKnKfj4BuDLY7DXGTc6",
  "key7": "2MvBBTJAHCbuCXL2f1fRKq4Z3aRH5ijetZqeqmAphayRYMS1kmo4Hqk6zbU8fXyek6GDSAKv7t9oK9tvF1jixrM2",
  "key8": "4P58iGMvcQbwtTkgd1dKM4Kwdh6iLCZkY6KNttWV6dmQNfvz1iz2SDjUCKobxjBHCsTGowdQdD8PrfJLEopM36aA",
  "key9": "2NSRfZPEHtY9PygS8VXpyvaEyYsKHmAvUURpb4XwGP1QU6kiKEMkn73e796H4zyy9GCvJxAXiBzHW36BXqq8go9U",
  "key10": "5rxDP3PE2vKJW1Ah4BPUP49wHkH7e3WkevYuFPZNZmy5gFZPoG1bUifeFHi1mTZMSZuh3L9PkrNMRJs7Pe6mJjWX",
  "key11": "4yGmGZ6A9p8UiUdiit5SfFgnoGDsrVKkbAf1xuoQ99i6xaMNPsCSyGVoj6rdUj98VeXMGkmUBRRs6xDQB24b7por",
  "key12": "5cSpsTvUhuxfuVD9CibB9ME81NbHi3vtu5RmKx9CAvAdt9vJxPd5Eeo4gfvv7pvqH7wXGFC1xmUjp5twv8tAGy7q",
  "key13": "3c2KaLPyyeyLbWqQSbMAEAX7vamsbftXJALtRPj8toqUjjgJapY4ZjYgFr1SkSXq4sHh2M4DWhZBzBi1HA5yiNWn",
  "key14": "38j3acjSZ3t36HvQRMF6qkjHUQcfXjUobJPyVyM5GgjUoKom4VE2uHvUvMhw6ZSyMcZ2YQGz2xR9LqxQS7Q67beu",
  "key15": "2FYoH1VuoSEg5smNX59FEyPFWkPFhL5B92av1Ura3WLrFYDrEr8LDaANRDkytM1e46szh2kUvfNzeLXgqknYA2LC",
  "key16": "2HvuTzKJvFz5HdYGDULWscjVrj2bWjAxD6ny55tSEKdasM8ebnD7Sp9LvCJk45LjFM61JJZqfWvNZRdfu1PVZd7b",
  "key17": "dK6bEnL5zHcHL8agfrbZahVP8q4VokGi8gLZpwggF7eQRR77PVG6ejjM3E9QB8JEPDyNHH7XjGYmPdoN8sYaaxB",
  "key18": "2P2rshZ5LrhTjH8Pw52rfUuxmMxSo2WTJBAAa6SigpwHx4uS6evGDcDPMMf6U3KSbhXWtqXuGgYKRxujaTz4C3DB",
  "key19": "xKALtm7vt8TscaQqG92hFoeQtYWUUrM15vWsUsxg1yhqtFywodT6FfX31PQzKa2ku7KAQEmyTySUqVoEkibGWBB",
  "key20": "VHfHYEaLAzMsNMNPuyHDZUUTQ4Pufwn3e1vTaVqw3Ao7iFE3N4iEPCBPrW7A19tyN1UHMCxF3L3JZtTGV4hXzWn",
  "key21": "VPtKGkqMPSvK5aELtZUsF4eJEQvDsjoe6UNxRnexQRBDFU815ythhs1aEwRZXYu4sDfvNhgcsdizYwC3DYLVUt3",
  "key22": "3vzyQ22f4wCVjQQySCdYJgKP5G75eX65noZQKPi6tJq1NE7g84jDFa7CpXh79T4CwGPKkybK9PFHU8HcCnivkUEF",
  "key23": "4aDxegh1QTfk1JkjwtzWiNrDLwaYSfppzoLnMcMe57gfsUjhTmb4HYoq9fgAWsdBZTpB2ZVFhGYqucSvwb1w3EYa",
  "key24": "2xKgaq75UR3auWN2BMQWGMc8rvv4PRyQ1RphbcxjHRT5VpixU29E2hETa4KWcjm7P4YUpc246CZEXW6nEHuAXpRT",
  "key25": "im5TgeYokXm1xVmzf8sEv1htAiotRPhaGnSEcb9TcztjUvszgbvgqom1Ea9ego1WW9kVtqy2Au8qpLwjRt7SDho",
  "key26": "2pqsbk5rSta6Au1HQKzMhUgjJyxyEgoiAesuGJfuqgnmiPKn9VDJZHMs8Noq2YY3NkYasvMX21Sbs4ojivoXFeNd",
  "key27": "oCBYWiB4Ty6G8J56gsJwPEtDA9nYnSW9riYr55pG7QM6XZZCmqGZCdnTnr8VkzSfZE3aZ1zTaGJ8edoHaVkpC1x",
  "key28": "2QmB3LyzpihtEMkoD4UL7SKqAatmxfgdhoSuFYvv1u8FBonWkjf9soQMa6fxMvwnLirMQgrxKz5KupgS42KbF65a",
  "key29": "dFZzz4qrtrs44zYR39wH9ksNNwQJeapjwFP7MY1qmWYgM1Necy8Teoms2S8eMS5eoE6FyEKVMcdeqALQYQMEfSt",
  "key30": "2yphqMqeNHbeJgV2HTSuVW44zEqFPhXbpLbR1S3Eh9VPFxuYx3AHJAsVkXnULoQMMeN6ucbb2ATkgnRovCvNM4YS",
  "key31": "4oN52cmWoYMfKRGu9Q57osNvvHdtcvxchD33eLxvGWpgczbdEcFrLRh9FRVvWdgGgfuZZDLMyaJviYfhHbkRENJ",
  "key32": "5F9LLkEHnav7SXWQPzTn5jtW95BNERRD7coCRZT1bTANQnKUKUp252vHMsgeADNps7iaFZQqaK9NV9cXCfTHaabq",
  "key33": "5ZFzxnhJqbWPDPcwLzPVxDNjn66BwWVVb4d1NsdARuy8vENCBEohkPjEqoCLANVwHYCWRj41CFecX1juYawhYCUh"
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
