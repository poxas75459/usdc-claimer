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
    "4ZhBMnqhjGCiJx6kwRbWa1HvXpTRAUJTgF3xPtgFKL8V9dfcqkEBZ8eewpincZpBci4ybm9BRV64obsjNyebJi5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "622gRqs3kh7KmCUq4sbTzgF6jdxry6uVpGSW3ARHVpDd5PfvK3aKNuhYUDYFGay1mcxt5xkcdYr5zWzYra9HCutm",
  "key1": "3ZL5pfvq3erUuwbBuJmZEwLJddH7nybqft4tvzhSMu5KgWkLMna4hpyqQtUwwFq5bMUvSnKC1jnKEgHGRHxVEZU6",
  "key2": "2kKFTMBLT73Tz5vUH3UrF9EFJKxPrPipRxqurPibBzSAYzYrVmvtahqURehaWYqKPvWxNnVSQerhPUCNTfKdVwQe",
  "key3": "2BZkpDeAVdVcwCXqHRKvCZNocPadNYQSDa5NuzxvPyycB9wi2oNjQ1DbU1aspYdjQ9KyZ8YLuDsu7nnn81wWs3po",
  "key4": "5SXAPWo47QqnDr3pakdDTqRsUsu1VmvcbS1tzwqQG6YJdD6diU4tDQLQW3Ff3mGpr5Yaov1Uwnm7uk9ZBjgJ7YJ3",
  "key5": "322jytDdb7Kr8QstGLN8YB1dog5DRpayZHQbsJHLnxyMaBMi9hNRztGptnyQAtdbzfjSqmtpMzqk2cbQPbCu8u6h",
  "key6": "4rWp4dEbiFjTnYmFJDkcptcfebseJaVD9cb5z6E3VCxusPxGzZZZyBtiReUEHQ1xy1sqasnk1BnZRwXAHRq5T7A1",
  "key7": "GBMmq3RT6a12v9o2mvqJXUqMNb1nSjHvXRRs2jcTa1SqrwzSWyVnaoRyJspTCkQ3SxyZRCStkrwWhx5iY9CGcqD",
  "key8": "By2rcgdncPDFogbBXoR17U4DZG1z2BMmzppDCA9k9fcFAfnwYJfqdzJddyezPv6ERWzpV4mey5VK3xfKQqjSMfh",
  "key9": "2p9m9uYiM1gYL8M61rxtFBvY7vwJhPWyh4SepWVSoHGVY8xFAAK6FUtsLfisXspjazbJhynV7zJjNf6UQNRLDaRM",
  "key10": "4GUJuFndKkdQr77dgB7RELpqory624zpRcN5u1MM4EFogWCoLE7Fq3jF243tqQXiWR6UGsBap2MKRQwJnLecyH4m",
  "key11": "4SSbbGJkdJ2UPFAJa86e1vs1WwAuDUyXFrRP3BKsfmZMmF6ycjDi5sTRYFvQczrgvt7dqe1bUSZ74f2bZYiobFo8",
  "key12": "5qd6AMRJZ2CimbSVEFHt38jgrbqTRBY1B41qWTdePBHdHjF58cditMwxrAVsphHDbXDVEfiJEXD7F2CaMKdPPhiW",
  "key13": "4GqS57hX11WrQnK7sXyRrfqB15EMF4mrUKP8yx8dMYHe1NpAEtAkMAysr4tzigGvWPxp51JSdMU6gbGbQYcbrWMi",
  "key14": "42ne2ksmoMdeVhbcwMk1UzpN4Mwi8bre7t5yd4fSJjbvxBEiRqmD1s7JqA5zGcEePHfBfaxZNfAp4peuFkAFoia5",
  "key15": "4fGp8yRT2uExuzfuEACDHpszCB5PrLHkacAb1cEfLbwPjrMTMbYdXBiCz8gAyoKeRtPVC63L2AAyTQ3ifENEm7By",
  "key16": "3Z9FKz7mJ2tiw6k5Y1s63aepde7HkiWtTAdTT9f96m5PUPvnjhJcPo55oJMHf9bwsaUDB1UjgS1yUdMUyNhRDXJF",
  "key17": "3ZnR3w4AHVDrJH27ZhHGMkyn4B5xCDQ9KvXhUHdqGcwdbFwg4gmxkCJm9xaFeW24741ka9Ugi3uCgomFbHsvaNxL",
  "key18": "WJQ7Neifdct8CsmjLjUtbtwaNHVg2vzHwyEUoTE34XE9jEZkDBNCcx5E2Xgt5ZPuJeTDfT8nT8NrsA7czeDoK3C",
  "key19": "37CpHSjj8nWqPTST15ENRm4WKhtNA6CuVuZZKgYd5FiP6D1JHb9dP3sBUhUXEtwpASuupJ1f8g1Z43PTLauXEi3Z",
  "key20": "32J21aNrdceKvZB8ZhAbWrjyYUmKwKGJxRrDigycGAFqxeKenAmA1bvnUjkJwA1UUGAFJXHiudNtRg4TdZ6NM1Vw",
  "key21": "2YNy6YxAegwQkHCjzWSAQgBsX8GnPFcpd4HQtqp8fLJYUWj3N6pLxXEGnDiJ17neaytJ2gXoxqMtSQKsFFKmtVs",
  "key22": "4jUq1AgfLSKGa8n577sHXz1Hkg3v7WwhZcHPqWGdsYMXwNgzG7L2behevU1XEMKwRUsvfacvXKZdkexnCiLjLDKS",
  "key23": "3pV8bd6Cgisi9RTSpcKKQ6HDbTP73puynRquzztmuopfHwoqzejaTkkrfGJit9p8DJuDGYKk3ADuViEH3v7P5GEs",
  "key24": "64z8MzPAWrnenzJFAgSYSoZEehExZWs7G3KSTnQBJrZt1zxfiV8MJsds2rCqRHCqJMN3H96Zj1cqjVuDKDMw2SPA",
  "key25": "4MDa2qRZQ8DmLwsgYLowAfso4n7kxWdUJpeKuzbvCYADHDK6AzusboEL31s81W6CE1qvyshsuHLzEvfNqZ4vhc77",
  "key26": "2NzYFj537PRgSDrh2hmJefVApnKQWgTphcigd1WvMhuNfCov14QYQvmkd2tC3fWmCG5XfCKQpFxzawfQq9ran8gk"
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
