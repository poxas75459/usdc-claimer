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
    "5rz2aYqSyh3WtdaPFKqrAmygoM7Y4nav1rnQ8ygdqvcMTFxVtwHzNq1eV17A4eugpZZVCRgYsREnh1geCHBc5zWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6FJsKzNXtfbMRbQjae2NHuvWSTppLHwZwpDx5VkefqUKHLfNjB5A9Cg9U6CKZGNNfoGgNqk9BJeeesHPjpqZ57",
  "key1": "3hwJR9VQXTuruA9qRacpu8q1cpVHRxetNJRy7px1T6UdEf4b8fQ133Zux92QpVxFBL3irNsdYbqGiLxbF5PsByQq",
  "key2": "5nRxmWoQ4gf98BgpDoK3KcTzMRwPJs5jVjisoD4dxNtH9MgfG1nE4YkeujSm8MWkWpsZPGsKdvENzyNsPJ3uLh85",
  "key3": "5VShaDeWJ1up2s8AwBTpbGc2qXDRWGjJn66S8dcjhQNWDG59Snib8ZEM9C4PUkd9uTtdWa4wnBKB9HTPg3tmmk3",
  "key4": "47FhUyz4pr5izeDrY2JozeYmy84UhdghdQryuNESPdP4sEHhh5hr8eLVxKfz4gdo8kY4GxwzT4UmFdNrdYC7cMnh",
  "key5": "4WBqwwN3QRZcG8eXLenzd7wECWitvcJYaPvoGV6MtkrChoJBMCHbL2h87wktyzdw2HoPGAus1DGX1SAdbxuqLPZG",
  "key6": "25EJ72QzWC3XpC1Jt73pqHEwxopkb9HWSpuRGtvjZUMirwvPNECwgoJYo4i9rMtyCAqFE9s6di7iCoNY3QyzAQJ3",
  "key7": "5RapiQ3FQCjnDHksJedny4SymywWVdT2MqvEbiaqbj81WjGu1VsU9PfPcoW6MJzNkxYtYtQCi1DU6PsteXGhMQ8s",
  "key8": "fWJE5xbUC9BJPXvLP6Ror1DhNBeuLPjZMj9w1sd8ZjDpPos4HYRhTuTmVqwWAe4gT4LuRzfqP7w9KjqPoySfqC5",
  "key9": "4Yhg5qvySdwwLfheaYrCPxhxLqstrMUjJLgMa5MpBeAoqZvtRVoXpx73Fv1abKRHPjbNXL8rY42mAWxhHNUvFgmm",
  "key10": "R7Ez4jheaJUdA9x6KwGPcS7RtTtX8XLJ1rycqXfydi6LHPxLr778unmumUSr16UHJxmZaaprFDSWULxpQi9jwrM",
  "key11": "4H4FEVbYEhFMf259z3gXnfqq6n3yJUewLumuSo9z7Q2wLTH6YFvKLjhPdzRUNA7rdXnm2fBBSnk3ABbPNWLxTbZu",
  "key12": "4YBy8v8Y5UhNJqWs7dmVSHPLXz8nmer8fU84TV4o3ULQKNw7f6AGhYNQRUh2Pug9Si2UK5idDAtkSZyREXiVi4qG",
  "key13": "5Up1UZHWzCj8YgbDUrXjpukrPADeU1Uqkn6vvw8qv2iWnVSX3UUQr47EPQkHgV3Zr6PG1o9CYaCMXGmkF4CY3pug",
  "key14": "5FiWqWyL8Zw31VFHF1owvDKqsTEtM58gDqyL9SDex2ZVb6VYmr7C6t9putHHvRtq2GfoVf5u9hSScpXXmnKHU9KT",
  "key15": "Mg8uqDKL684AazWCxo6kqUYpmoV5evYVfd33vGWWFVYZtxSwCNMDFXk7PzcMkaKhPfmCP72uXmuY4HqR3Kzpviz",
  "key16": "3QrDEyURr5RRHbuTn1ytFLTtGQVzXbfs5Ha34tpiKwHTZvQYGNsaYVPbVL8hWngziRbURtxQJGrPh2xoByRoVQKM",
  "key17": "65QtvKqih6unKRfRR9cavidUWZ921gN2znhWbgN278vQPoBU9A8HDcECZBuxuALw12Pxtp3iJzMWue5wRg7YrrsN",
  "key18": "5dHUKWKj2wRjh4p7raRhw8QRu1F4Pgm91exomrAHWwLRjQA4DbYoHsSqDxrwSs7izwiEdqkzyxGZovR91z6LBE7D",
  "key19": "3Mf12s8EFpah9ZsxzUiJFxMqqD1xw5ga4A57779Jp7RuWSoY14otZwM4JDjFb9anBa4LhqyJveBCiDTMQqcLsrvF",
  "key20": "4GadaWFjtm2Fe3Kdrj6sZBqLrGgrU4H4ZfvAedTWfon4MdwZj77kYu5da4HMKuYoXcsZvSSBdomgCKfS5X4ET7eh",
  "key21": "2c2oBjKw8sqfPA1og6zQyRKad9qy15gV5DrrwWkKV21A29yXnJNE1nNuTix7k2LH25XsaXvbk3k79KvFgkJdnuG1",
  "key22": "6eByFfAJ6pkMKXhvwQFsEHnth8gEf1ifoacW5GLRBZJFCEUpEQmE8UNHaPFFfSgPhzud8hFrZ6hSJWekfaUDDi9",
  "key23": "468UK7itoifoDABz8ZNEWxCey9sTZCWoSaA7PYG4h1Uq8drYCrefnx2ktWE5o1yowdjeA4KPrA6xiFLs4EF6PTZH",
  "key24": "5ZLjcdS1m2DerWCrxW7jo4yxYW8vn9QRnbkteuHSgj9P84oJCtDHxcYGgPmB2xiD4xWUncc1P94HyEqWTNCE7Dsh",
  "key25": "KNoRzkpu1qVNncBDDbeZTVPwKqWEQqFzNhbVQMfRMVGmv1A8pvbhUjGr56wYVUSqmAfPTRLAuR3iFUEeVhNyiyn",
  "key26": "4wKH4XhFjTNhPofqGVhxTMKwMRUfhbk34pdLM55k93pbX4DKvmf7gFRrVxGhCGwWkxDhdBvVjRamrdxoZ8oSWNaK",
  "key27": "49d7o6GQaJVkaZtVqcytehXJpSJJnGucGizGLe3cT1DEPnoTazSQn5LgegFQgRnruCsbMFEk4iXz4s6RfBFhtCas",
  "key28": "YdHzfNRUzAXwvCcbVAhfJunHUNie9UHUi1Qosq3wv9aCZg9i2vWhPmozc2b7btmvznRFgRC1MB3fGHSkqra9Pn8",
  "key29": "3XiiskJWDKpdoM9HxDPsaFsgXKTVhG4Hi3xrDNKdf7mYcNKKUqX31q5g6kyG2FUYMuxFP4ASJFFNNCeEgKs8A2ap",
  "key30": "5GGYGFwPBPQbZa19512EoN8jxABNF2x6x4j4FAgsT9umjXYkQWMhzGbpw7RiUyPH7fJaRNdagj3MWhc8y5G96fAF",
  "key31": "4vFbmFgniNtFDk8WkpJLn78UFxtr3cymiRnnJJhwhM6VsRjDyrygMUf5e6N6AtzrNYUd6pswJaBLC69x6P6Pycgr",
  "key32": "qGctNhit5uQ9cbkrbdcLJ5ZdxmJZhNinA4DfWw7GsTGwajZX9kyDShdnRwu7AExunwA1URTgBYgrwazrpgRd263",
  "key33": "2AwkJZnviJoUauxMnUiEhvTj32Euj4uXvmgm8R7bYTGLy8We9v3jM35JLVZTWeFe64XnKJR2vkgszNjZSvwrLGiA",
  "key34": "3N38ptxgsyRyxzpTqGpjgnRxXyW65dPGqFzTLrQFm873cVFBdk8Cz72QRGJieanqMRkL9JgzoSAc2DNTosNscwXw",
  "key35": "1ijhBDkWbQqxCNRBEXTcfY1NVgzDYNekoCy91FdCLdZk6SYWfyjwnsyxGTZHB1M5Z5FpnJ62gJ3VybuQbEpkgYg",
  "key36": "2AoYV3Ki3keADcWLNb29ZTkdBVLw5YZLmdswpPksB1dSzMZsh4hESV2Hx6AqR3xsvtb66FcfXKn1p5Xr4dSdQ5KX",
  "key37": "5XtbpxHCLWbGVo4QUfWnVrgFtVLMqxT1662uZK1uLS9NodJf9j8zyGeLk9GACejpdXrGhFC4yKwiUpP2Lbyc51Ak",
  "key38": "3quuGzrfmQKGJ1f4JZ3DJpRJScDby22AxcfCk99saPgeZxK5cQF5mEPtbKi9XtiLJD2CTuerQN45cRJHqPzw3tJW",
  "key39": "3QDPakcdSWVSTcjGqasFobzE21wbMYzDDpAhRUWbvLA2jjV59SJyr4fNh1jYD4FoUZqVWVzpvGweufWAY353PhDm",
  "key40": "2dLeKon1ym4Jr59662uRBodMCNCuWtPuZ35JNgY4GMDHrbhkJxd3Vfoc6HRz6GGH3Xw3LFdxM9W1GBgoxfARiFGm",
  "key41": "4EGtBHgv2EWXq1quDpZrrMRvi1qDAVJFb3NpDTpvFUUYkkC1Q8LngF94tVfCSbAf3Kbv7UsSQtLutYPMHJAq8Yrg",
  "key42": "zX8kGUopW7P4Ra1HNBr4Q8fjCRPAehSMKoKGMgCTSYLxyKVq4kgWMm1kfitWrerh566tmbee9rHCcXrcncS7FWM",
  "key43": "3FYVpAwPyHfmT1GJ6sUWajzkJvK2UhEsjXp9ynnWBL4NYSPzTGRzLtzAbamQWoyzRFzCvrsjzRHPUsajCKFkhufo"
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
