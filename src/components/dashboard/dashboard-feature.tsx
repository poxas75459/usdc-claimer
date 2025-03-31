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
    "5s2XwY6NajTgvDw5jeDsXXCYKaBRrdDMnTpwjarLgsC5SpHc5prTSPQQWiJDLGfJELFF7KNCJCEc5Yy1iYG4LEcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnawED15Hq8JgWdPzcgvfi8DYgbscuvGg2H7j5sb6FBEq7cXqRe3VyA5Xgf9hQqbvQY6V2wJaEczYHRThtXgaWu",
  "key1": "5yDbVRVxvG4oycJaQDqn7dwGvd8fPkYs1sy6NTuFE2Mggj8LRwRFFcAV1y7QrJ2AD7NGywE1agYNMgSCUTC3pXEP",
  "key2": "5cEAe8g8WiyRUTq1PhhctSeMb5TRaVA3VWSsEtVnimc6Bkx5cdSkM8igkSCkLYJh425ZYZqYMxoUaVjpSvFBCdhs",
  "key3": "4B7UABGhR1h4YwRUtez5DyGLV38XDEpmB48qQW7scqwo3XfCe9kq3Em2VdNwEJgif8PTjXLeB2EmkEBDtyKGSFrG",
  "key4": "2EbN5m2azVkjAhUNPjax5RHGoNevQsY6Dtbr7aVjehiuovyf7SSK8dzaV3UEdbkA9VarQgw9AharTXDAPFa9pYHy",
  "key5": "4dcuj5FfcKYi51nHdWbjzTW6kxrXwNNnDZBhC3buto8GcnuwPbQKv2BginegMkBu8iqaG7atKwmEb7L6mPqM8gxX",
  "key6": "SgtMER3zyvA9unPFPUaM2p2DR6uXxDXXCQuHVvsPx14ZLBkwr6U223swApVDmy4EexrbHJHkUhNu8tyqvb9CuPk",
  "key7": "5hHXStaeHhWeeE3GYpMom6xgpBJd5coaXdE4KAVcybWbj7JQPYe8Mb7QPBLGrKgfTQqYLwAUPts4ow4tVPvxCJrD",
  "key8": "MnWbxt9Rb6cTmBaUZKwYDrWSAoJJnNBHFhC4WHENLZd4haU64c2xL13TuczqGMqXgbb43aodcBXJSXNFSN71qA7",
  "key9": "5HKyzRLdNbSZSsBigafHfvNgCf2xzbHWbckdwbzmWGWMvS23y22Qwo5CcKrmvo7t1hiykiHYutACduAUDbDG3Abv",
  "key10": "23KefWGUEypjTz2oJb8Xso99bpg771vGTySiEVERz7LatQiLkR3m7xhdmzkoKf2JwCPVtBZV7jHrHBBFpSePHWYr",
  "key11": "4s1twTWawQHRxkEh14SU5wJ295USpKzYbN9MhwP6eqXcQ728xybkyP7FQBZujDtLbbWEA7nKxt6ZnNVeorehhnvR",
  "key12": "4G8UYC8jnTpTvqe8nPyUZwcAMwCgVKPAor4pkjvoowTeQdBHrRRVfixvNG4sgzLWp5ERbccSMNVhNHDr2GjAVxUa",
  "key13": "5srK9QCsFLeaUGv21tJ3fLAAy6Nu74ehDaWD8DJKmmvq4PazFDQ6jNQEhfbRbStb27fDZHzpxU3djJ8gkeBf4Bip",
  "key14": "3tHPxmzpkmMzmj8ukLH9LC62xSqqFffm8u4ZuyyRwVvM1ApBg2ijdyJdcGzxk5mkQSDH8a1PvxoRwQsi3yAzDkHK",
  "key15": "2KcsAzCm3wRMCrV5eRcfuHPaDkM87Esedm5q1Vt1T2WPcSbUtTncagTT8ddWDSrLHkpnDgEf4BDF4XSL7SHMTUNQ",
  "key16": "Na88ALFvZx5wf38ynMkUAz7daiThhbPW8EwKFC5fAjDFMmRrcAy4b79V1QwFgxrbL4mWVhLFJ7KXkSP5c7HJGcT",
  "key17": "2NzZ3VA6EgYb5xB4GqSgTxS2A1af4S2fXqgrkKSqsphNnFjY1yEpK5aP9jp265cq2CYWp64SD6Vhpyek8n4dqc23",
  "key18": "35TkEycjVJ8dY9k9kccKuvZm8gos6DVAxfQuGMWteSriLF4SzvAZHf7gcrZdwiXRxef24e1mT3DpyrAKT1boq4no",
  "key19": "35VEifx3nexcgzdyQgsqKUbcb3KHCSPZwCgvKwHvY6e5kCKoehcHiPwLKuNAUq8jD5vh2nUpqsbDfQp7vMabYbec",
  "key20": "3XQzdV1yjdLnh5bZvwD3SeAvpCbaRXgVgi3PGHcRD3vxKd264dQpdbm6AQsXZHh6nNmw4he6f3ZEAWtWUN6fnW1F",
  "key21": "56TiGcXJDvqgMXcPxhxKG5eopb5kCkkTTTt8gcitu4SWkU7X2JbJhKfyR7UoGfuj7axT1hd5637oQa1Z2Un1kgf6",
  "key22": "4DnDjpqvnBVZMQeKL9BYHBx8JLjBC6YFecFyZUXMKjuPDaYndMitPNWH12j17pa7YJejRizZHSRPzMmcaRUJLUPy",
  "key23": "LvmSr6Nyw9EAX4eG1V329jGrtP2xb1kGaTqhsBjnA9SMQZCVdxruepi9NXMF7LkFCBy4hiCHEsG8mdj5LWuiNqd",
  "key24": "UTeWcCU8Z8oqVRhim6W1aq9fpp3n4wXZdYyDXHnkQ4NniiEuVQDzN5GaR36zF1cwqkjgbnx5p4Z6uSVEcSFZu2v",
  "key25": "4TvrnGzKfqFk9ibvZbgjAuFeEdDWnPzq12FMZRGU7MtMUHBd2aWcwk7jwiPW7dwgF9ZhXxbsGoVhDpq9RKc8xuc",
  "key26": "4nYgZpZJd3tW8dzm2k71AY5nBvwCzAG41U9VN6nLgo27WVyozQh4BmaDBQqyvnH2D5Pk2pPKZ6999WhaZHYDowLT",
  "key27": "44TczK2ghEPu66jnu9hKZePqEweGPw9MtUZwqZSxXxaLR1539jeEVq1VNHHf9Xb8bbhgPMKBVwtALFnWnUNGwy4s",
  "key28": "5LFimPZNibQFGvsHzZbXkaBqtxyhFVirMnBZwCXXjZtoVpVKEiXkP7LSgwTLdtMM9eZNALo2P61Xv1G2MprrWfK1",
  "key29": "3WVFMrjCDND8Gfuv5dZZHt5ZkSeCPW9isz1brWqLftGj7C9RykF9cXvJC7aWnLZpgjArYRwCiTprfqvMRY8AJa7R",
  "key30": "4Bdq8GCwtC93x12XWNy4zTsPFb4WaGtTP4KfVSQZ4ZbaYx927CTdU77EWabkSnajzQu3QJuTHMDrtvfLEXTARde7",
  "key31": "3aY7xh1yXZfSxXePwMrWA4o8ghDDc1rUhWzFFm2e6FZvQDwthyTTEWWukt3rT1HQiVTYzkwPqo3sXsEooUJLFwKK",
  "key32": "4uqVUyFR4S7ia2ieZg8CrwGVFjb61FMRa5TaPMrMzNLdDxW8rbZRNJK5eBTPg6Akj1rP8hadJe5Hj3HczEauj993",
  "key33": "31mUWK7Lpt1vAwSUG5NnE5gK4wsdv1dULsgPmkiq6qPbBhBEZ8D2euWMe1e19i7YpYg9b1rgXhQj7MwmW4GWmFua",
  "key34": "4LfH1YYWqvGWU2NkkD6b8JmxEjBcbhMR5K93NChPGZSmaJn4iuc2yA1RTe7iBgSkamiE5KB9ydwrNgT9Amsadmzh",
  "key35": "5gX6TYqR8DjRRuk6dZBGVX3kwnz9cdWfXw9iJ8eaQKRrrtoZgfK5mV98jMn3bJ1dyR14GFpVspki78hUqdc88SCs",
  "key36": "5zdtKkf9gtLP36tDqxraiiXaRoyjnHkV9qzF9hYdWTLxnybwjftFXCsmYh3Pjh5jD3x8FYMUYpsHLP743eB19r6",
  "key37": "4SSvpkKZVwZMEtKHNA9B8FS8aXRQXrDa2MNtSGMw2QGkvN1jYFQvLKb72VKmz4oEiN2HjDzi4hjqxujb17sn5LGd",
  "key38": "mJKQ2zvtr12sPLuT6ShSCUF8otSZ6UBrr6YQSizZbCeKT2j6kapzBNDCM8sWzta9NY6Z1M41MzpANqu3HTuzQQ3",
  "key39": "7K4Cc7T5L1vfvcbTFBRdh98wThtKNzzFRfgaqz4eTLhTQB1XNWEYqtMwgSqpPGCy9e2z7wLNNoWJgG6fRQRkGzF",
  "key40": "5DV7mkzss3UszNTqVwFq68MfQwdBQKo3ibJXYiGNqeDKUYpLj8tQFkxvy6dRqL9rQ5m39mLviuV5pFFoYDY8JjL3",
  "key41": "3DDtbvavviHFdQEcfh9GDHDrxWPqy1YSbV3mhdwrShy2bZyyhdba9mnNrPtgvPMNLGoGJXK6UosY1DTXwCG87j1t"
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
