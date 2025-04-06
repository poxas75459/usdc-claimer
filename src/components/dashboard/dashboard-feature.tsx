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
    "3WNBLg2k5Tf3wF38ePjfvCBme3YogTRbsN1zF5tsnkLqh8TRyaZB67FizPz6BibMmFHzeeCtxzokSRKzbTadn9Jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXR14K4wdxC81baui28MktYDhh8md9pcdg7iNdxpWMUA5yM8tExcwXLKDhwK2DbQ4og2kYis47ENr25E35cs53M",
  "key1": "LWCyQVqBRiNmzrngCfPcyw1toAgJo51pdgqRMtEJudPzMe1uHhRRMsgg2hqang5GUKW3WwjEgYta9BcoUPv65kk",
  "key2": "3RohPb2eLdz79bzAe2AuhBedGUrk3RmLKrg1Exeq8o4By7WH2rSmu6vMx62HP2TLw1HgrRs6wT3fkgwMQ9L41rXA",
  "key3": "4fVXknKeF7rUKS9373z4xcyk9VDZnsYaDnUnZqMwMTbNcu7HV4Vyd8ZpecNCHUuhzx43177jLRY3YxDNUGvVrE8i",
  "key4": "MkjyrLTXEA4uDM2gxWPdrzsr56NWuQTKxzapYrez11m4yB9Dxz6wrZJv8CduFbSZwA3V71grFFkKyRosga5idvV",
  "key5": "vFi1ND93mEjoi8Hq4PjSYaQN5N3QFdVjp7AEemw13wbcZ8wrjr7FbZJKVDZ9mH9y9qpw6pdX42CZ3zHXi4Q2bJg",
  "key6": "3tMt7etrfjVZbEpECJZeLtrwmD4QpiAcmBPYHpBT3AQjc68jaJCVfriqt5cLowLswBGGh6YJqScQqhXePjrquPsa",
  "key7": "siete27JjgjeovX12GpVsXVusiG994VnkgxemgpaWhE5Ak88zgyJHNJx9C53GRCxwzPSSJRf7F7YskvSRke1ZFG",
  "key8": "5KTsfyNKQwskoz3Dj95asby42aXbKGrzzGjxK54cS1VVvQeiTYtV7AL5dU9xnfYMD6Y7RY2LdkNMc4d9PRxGYEAt",
  "key9": "esrs4PNvSzm39LgnnfiiZfz3bjRVTMKVB4AmZXGkZ63FoRT3ZEpFwmWXy1i5LoeVoQSDBmDh1KAn4GyhcdJJFza",
  "key10": "J19Auu4HKYYGRU83JoCCKYVbazw8PmkFHyQYPJp2HmMAfGdGouJnE9MmS2vtxCqEiRHHweH64dEWcjYLWi59NGi",
  "key11": "4kZAgdk8jEipDyCCJDqs1M7LM3e95V7P2UcuUXtf3V71X5vpbLXoWugUgGNQk6MFb7pu39BtCuMvYAQeEXNa3zMB",
  "key12": "4swogdpfcjBpv69sFpEJYoxS1JTdCo5VX5MUAcrKhpzLWE1XEz9mXCHyffPEmEcfqMTYeAX5ummHJwkDopshicf6",
  "key13": "5uCxF9cFdV3MT2cA2ZHjN9W7Q7ADZ8399rgd9rux7Nn9b3oSgowsA4NXdG6p1FjFFjXCuq2tJmoEMJMG4ePrmLp5",
  "key14": "2n531ebPtMgak5yzpnesdwNBHn9tVSe1Qc2hioGQmen6JmcnUdAVR8jRPQFTyXazg2wnZV3LZpjJpXz3sJfmmmCh",
  "key15": "5vAPu1hCDvgHsvUCKjgT353jA5AgBzf2L3NNxe3gQHqs3XbeJ9CWsnjGjPd2oScu3oXXdXAhaXhJRv1f9Lkd2chU",
  "key16": "qnmhucgD7T5aVPNqm5z345E8rNDYAN1gkbM5wG8Fq6tadfRDevaVTZCd16YMQwChCbbaVNVt8LWA4MoxmE1VoFm",
  "key17": "RtcsuiRk9FvtaPbLZLR7m6nV1NykCvGdhYC3hPx9YE8Nnm2YW743CYZ1639m9m9rpBAWN6qFVzSRywHA5bHjuYt",
  "key18": "4KQE6xV2DAPiMUAALfd2y7jzSKmt2ZHZLwA7RVcS4f9BJkG6W5p3Cpm7Ne1WGgk2pzPLknTAB787KPU1aioBhw7e",
  "key19": "2inmRhGtDC5eV14pA8qCmvpZxabnDYuR62KZBxLJCChemhTV2ro8fGxbKAcZa7jDduv75kNGeMJR8KDSQfGZ2cj",
  "key20": "3GsBvkQAcxuvbX98nXEecFR3uU4sF4cVfXenTjJsm3XdmsVXU7LuzekMZBBBH3J4qzvnBDjYmigNTjCrdYvVMMwc",
  "key21": "4TuMQoU6FNjrVg8nGN3pVYrYA46wfQHgpKDHm85ojWxMxSnts6oN3sPaw2fqdCiRqw9UWGpFcLrefiDt8XkWP3cM",
  "key22": "qHFv7kkzv2rAxcDEdcHcwGBPWdyb4seT9QKkqH8squmXjernWyD5QvvA5hVbkp72R91n4izuncBPSGHcFJegMNM",
  "key23": "59pt8SGy3wgdygbJrh7WRJHJEQ6H2KTKvKDB6MXeitLvehAN6SuTWjM87WQ1FiLWwBfAeC8ZCUMRjiMdtV2dc87a",
  "key24": "2L2NxH5gUtCS7CXA6A3WYf3tD9c6oscPCvCpyEBy1HEZqG7Pko2EqWZLRXZxYgsHMR4uwKys6sHdrqDNRaRus6CN",
  "key25": "4ZBrZn6Hk7L3rkuLo3HdpjoT3jUExwx99GvCJpoJCtZ3WGDDb46MqNnfvr9D5jibPzPKtSySAugPdndST9TxWswH",
  "key26": "FGVYkaybUBCPFc51DzHxMb3RhruiCyMnT175bd5gjPzY2FJRU3qauvXJ6ibmGzCqKY2mKVBn7wC7WAxFAEELvNE",
  "key27": "2dKXkxaa8JUzHYL2sG2LNLUH3KsHAWGyknmPsPqHZaaeEua2UWZHhhb6jNphvBhUERng5UKyAthWA11oUq9ZoaXc",
  "key28": "5KN1emsjZZ1cZv8Lr8s39zzjDJtd5AvWxWgb6jjCs8g9jFjevVbPA6E3M1MDXpYzm7LYcYee4WDGbx9GR8KZ5nGy",
  "key29": "4GWEw4cegoNqk3NSB6JQhA3FcuYC98txpxYZU9R11vggZF5KsKo83xj2V9o9cdDD3w7KXSURM6AX2cdvN8f6XxBY",
  "key30": "5dtQ5z82j5hpZ8MEkjTvTRX4wmGE6DMHnTR1SFe914dPcXYYfRe4AXweNS9UazBuHyUwkjRTpAGpEbBAK5y6aLuG",
  "key31": "5N3e3SvJGNbJaV4qih3xgTtB5uGxT3tCaMSMbB7hz6vuN3j8bWRSGXYrJsZAk2jMnnW13UK2QhLGLU9uSTAgsGqF",
  "key32": "4BpzR3zfmo5dy8jcNu769AVXUXsGHRYBPot4y8hbp4xt2cceqT1LxRXsAmqGNij9YqYa1RSLedMnWc1mastVWczW",
  "key33": "2UUxzEXPZ6Bo1v5SnikKASC272LBxvrWJUapCrSVzMRbPoJSFTFz63hdtK8zpZ5rkN6yoKGqgTCH2DPHWu2TFtXT",
  "key34": "2ZHheWqEfU42SEhfrU1XRrtEz3HFo4T2PRuwvmruenLf5SA7GnFH5oaNcMbubaXhQXH9kgjaCGdXJLesq2Aswn5J",
  "key35": "4GuncYU1FdNb6Z55VYukwz4uVMrepWuQzNTu9hvW21x1tmgw5epcxnAV6G6tRxafFbXqJ4kMaTiGt6o3gGxBaEoX",
  "key36": "YCU7oNz7PuJerdGUcXh9nyfQp1av3eEgSuxMCyJ6ubaxQAhV9k1TfSYjPoizdVftcUN4u9cVKaiD3jgN7WTn7iM",
  "key37": "2jkXoKk7QvzjLNqFibtvRSdPF4XC88SBEgJ7pmxubZwTJnrSjc4nKCvEy38tgyWfQtKR9fEjQazFdiPAg5c3xaLS"
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
