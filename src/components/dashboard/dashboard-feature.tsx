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
    "5T7qcm9V7xtMwKVJV5obj6674iKCEDE4qm6LnMXzr6Tw8JS6BwvWYPE12WEYnrAbBPdF9QKb4rfHdaYDoPsmaxf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DaQy5btVk1u7DA7ZvSyBfpxE4n5zAWQ5YMyKZTcgdMfro7XaB61wyMbqmoTLxYs4TDmL65z4BitL8mtVbGDBUNd",
  "key1": "ZvQMsEFtAj4BXo2yq9dURNbD9H5vPzSiUs6v7H9SLtLgBtpFFcnD7dphPvc9VLp46bb1JZ6zD9swhoMe1SU8N3u",
  "key2": "39e31z4RiBpxTGSwLQvDmKCDJdTQRXQVLq8F93LDmh3GF9WKd7HeeXbr7ECX5bvCb6g7nUfoyM1cSiiurxErGhqV",
  "key3": "4x3rT379ZytcTddd2RpJFLVwGX1rSW6bpACRVquxiNu9ARFjs4uZu4qD2kRRNpX6F29jnqcaHJnEtVyKfwzhyDaB",
  "key4": "2t267iAJeD75u6snmzqLgzYhEarrqNpi8qj6B5B6cnryuf4HZH3WrEAjX2m1VYzRXqT1kWSKyjXMeK3p14wbEVwC",
  "key5": "UnR5CCokzjquZMujUTorgWuPTa1wQKFXFSjY8mgcno1NacCgAmLFLqgtTPpMPThS5NwbGo4hXJekDUPA82Mc3HX",
  "key6": "dUgXw73kZUbkHR61hyPbgSxWgSTZ4CFesAgPgx7z7uo3y4Qg4bxjtmpn92Pd8vq3cyL371fxmraM3JS2kcJTf9N",
  "key7": "564ad62A7MXs9ib59GBQUFpJBrgNTMZpSCiLCm4c8s8uVx9xM63ofi4ikdYryQLJDXaNJoCD61Mk1a2mYa73FgWp",
  "key8": "2zk6AQT6tPDcqoqFi9Y88Cu6MRDSdbJWMZBMoLtMvyJEohK8mVDVtxkWoXut53puu623PFyV18WH2ckimGhPza2T",
  "key9": "3xFb2TWKFdnPyKWdLT9LeAmc2GAro8iGDKYmhbfjebb58LWbAEJTacRmzJzkcYTS4HKZt4QXkLYtGjexqFtEHPQ",
  "key10": "5LwSjceT7Q1vHyT2UDAQcghyqdqBbshXyLU2aQAxo9FD2fZWEW42h96v1KpTDffR8KxxNHJNEXsHHGc7j78DwCXw",
  "key11": "3JTcWthVm2vSt4fY64KSYmYGh1iZ9SuVq1YHrWxZNVptu4q3ZESgtFSsifpWPhxh9tYBheHjk6nZbkCdKGFLvCY2",
  "key12": "4DLhoGweyP7nfv2WxASVNPxVB5x5gxKy4MCLTPQ32RUQEyX3s79t6PiTFCVMQh8x6mTkeoTdDSBsoiwYYVgWJcBj",
  "key13": "3BhH3DDniT1qgSmDhTTtWBR7aEpBixDPEcRE7A33cCuhcqqemRzH7pkS9f2S2kXjfY1wgj1ZZZPUxsu2wcSFyzns",
  "key14": "43iFx74cQt4rGXRxoZZdpSjFFKY5H9rVZA4a6La8k1xkXyihvCfZxyhMpx1HLTKcKeeSPUyb3f5znFPnanmnVRqa",
  "key15": "yvr8Y6AQiKqzX54AK58uNE4NKyCakwCaonPZo86x3q6X6YiLsCV6jpiJKApZ5V8sCF8xPPydvuhXDR5iNixr7a1",
  "key16": "5nxvNgsW4cwv6wRRD2ZUCda1cAxQxuU1A1tmCQf9VksYemKHcto47inBboZAbovtJH2vKxJXU4jwmHknE85jnQTx",
  "key17": "2nAuxArrCk7ishyFj6aH2j5rHmgW7wtbqryaKaqfiuvtH23XKHHwFuDADaLuyTkwDBekAQRv5ybXy4bikhHvsiXv",
  "key18": "2AdBbMYinfixcnVRB4T3oUb2kr5eRGhfZfNQp8TdCnK3RY9n4kpZ5gXjNgne8c9URJi3XevjwKQsMKDbevqeYHGj",
  "key19": "5shfiQ2L59soo5suqqVsaWRXna3FiPYrA14wcBa4hRsPD6hN11WnHZeMFBkHPEJGx3ZKnodG9JYHERmxcbQsQeb3",
  "key20": "6rnCbAgLANThLzjCpXKjjYhGk59RfXu7vxhDpuNC7rw7hthmfmKcQ1C2YUWcUXk1ThckQkc2Ti7qZFUgJnEk8BD",
  "key21": "2yPszaUntge6AagcyCUTzDPHB36rFnk1HTPkw7h2HjPWSdJ15Bphm75a84BxYmHbfutcup7gmSuJzX3YBu6HdjfL",
  "key22": "4Y5oUZ9jdQnFvUXzEtWK2DKAURExAUQNJYtfkjkH4CzbngErz4kwgGJf32VXJaE8Koibo4hbafq8PmA4wTeTiQLm",
  "key23": "qmp2DxTqwA5ifzk8h6ebyifrvrBtUUb2zXmhNVh74U3Qdo5EQTQ3p33PPt4ykv4Pareut4VTqjsWGmDFWDDAdBo",
  "key24": "4J6BZvPWRy5w5LdtsGFz7TjCvxSurAPHoLoQGxMoBPdp2R45ZfEGQFKWQeyYcrsbb8WS61DXkC1R8aP7VEjVJspT",
  "key25": "2Fi9MgaJYNHTLmfssD53irMK9VmfTqonbntnVUDWQdgaHZJAzRz1255hMZ5qPyDdeBtparACyVqdGJPBm9Bkefn4",
  "key26": "4c2H6VMmdLFzxRK7D6KYfEyfZK94AP1cMGsznMQvBbKkC3DU6vnAToKQxAFbSYboB1VFfGYmMsiefpVf1wMCSyx5",
  "key27": "4oad1SJrxoY4df2Bxy1Jf5mAkLSiVFugffkxQa8JjEc7aGPBobRcpym2MkYQuiwHMfpNa7Y2YV2PZw7Bg6dEeJhJ",
  "key28": "5AezLLhRVtn5Quok23ykvxftc7YQXbLsVhGkmtYqSCQzeAT1YFC9szFWvZp75mtrmCGPhuQN7X92bGuVRVzFLoUm",
  "key29": "2usZYjtrFJ16AAajAZmvp2pH68tJtvgchpHdH5yS9TSAPPVdgPoQPNyijyV7LsxnwgimGSRryUkVikycgeoZJ9P6",
  "key30": "2KS7ce9gYuodqVJrUvqZ8ewcjAjXXnX3TtBLe8y5PwtCK3TqHwKpcz9y9LdfWjJdE66oCh1EgZa8eXEknEAW9WUa",
  "key31": "4waA8edLoLTZaD9sUVhWDhKkKtFHKKYtn5MxAcoNimzaZMAfx93qfnMQQCZShQZpDsJ9YFuvqdMiE1FsKZLgQK3e",
  "key32": "2mn6EcZJNo9T379qkhJnYxu4FDvj3yAornpg3Gq3XJS318HAwmTf1mQVdy3JQELmLyReVTgSiDHs8kdMFivkhF1J",
  "key33": "4kZsRjKfP993QSN6wk5AiPTLpqZDMiNmZJvPFH3n39DxYc99XY3GbMQrhUu8MvoxSv5bnoNCvPuRE5LV4zr3fSDh",
  "key34": "zbg8EbrT4Ekbdisd6AzVf8JN4RKMMasSBSowYpVEwyvrFsqV9U3hLPvENe8Cbo3bPhAZvnsmt29gcByjE9vJMWm",
  "key35": "3amAudkoDDq7GD6S19acKPKqe3LH59B4WYdFnNhVmeN6Te7FMukzBNPvoSKzMxuxABgvannYDwjzW4umXQgjpx3T",
  "key36": "HiSJ2kzGgAiFVfrknhHswztrMnZYdbFMJEreiGHyTzw2Mo3oLaHfihWHSZ16U3KBvPtow8oy6niqbpCzBvBWpm8",
  "key37": "4HVBHuCQHqeFVdzWATNEQBWxC8USGNLkRXaPFX8HHS517BX4T8DF3TnMGeJpjBzQQtVtuEHoLwCDVY2VGo6dkp73",
  "key38": "5vJ8J2Fy4XMXC2ZzT33XR7BnprHpC18xhj2HJzy99YwCfCtAvy4roEyMtsivcKusWu2PqakaV2pdDF7WDMcxCt1E",
  "key39": "56bHzCPp5DHov6f6NxwZFWUJ1LMwYu9u4RuBssQqwSZyX6TmwE6iEK58WfLsH2zesmZDoyg3FAXyc4FzxVuJ3eKA",
  "key40": "4WSrT5PLFDke9NVAZzscHH5npmtkZjrukWULV6iKu2x14FMhh8QxypqyziQb7L3dFBKnphuxUcnSCDjwMYhHdhq4",
  "key41": "33dTrK9XYLzpFYczApR8f2UWAjPkDzVrUTQ5jq2SNT6Kyr6nJSq1HzL2WfYyaeTwZKFSaUmsqTreDVwygwWEk8jx",
  "key42": "5vE6r8CH8B3LCjjiRHMvHZ8A9fY6eRHG4LcbAUYKyZAXZejp3qjArJUWUbnBKt1SrygZFTBpj2FxUw1PrnsnRWqi",
  "key43": "5FLHv8YKQKrYVE6cuUFJ9mPAqWVXSamh6hhPxgNNA88WVwsenBAYGeHZjoBoVhnK2fg7DSEWnGn4G2Vx8UMPVmt1",
  "key44": "3yhT17RQWv8kfbQTJn1gdaa4AAcXwENbkMfqoksuJfisGgHLZogBT3gmARG7FSCoLbhshdVoXzScH6i7GFF1whtp"
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
