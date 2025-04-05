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
    "4FrPJtVTHyb9uVoFiiTLZu4BV6GW7BNbEunp8DVR75kmZbhD32xRcC6hsrUwWU7BkGCFt3Kn7gdckAcBU51aAgE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ikZdFztdz64uRAyAf2ctCyYhNkbZx742KfPP5qEP4RTkEKaijtLsDwMTseodFbU5NYZz6k3Zq4rbpLxsuurmqW6",
  "key1": "rSoGYWEAh79kLqmczXu49Km3rnNbqc55qZ6uUoXhAA2S6NNMLvbunqM3UJj7KJLxXSYabDvf1ePR6uw3cTyry7j",
  "key2": "3oW6c52vBxfAgunQ5yohjasCxDi8SZMH3qAKPjc9SfnDskuxyUyouqa5segJfN3UWbGfjDx3KDmLeaULqz9YpRpa",
  "key3": "ufs6PEw4LiTwL7X4Qwxv15Zyr1HqeridoCadYnXdCPagckbPruGUQdkYvm53bAe5yrWTnbfpVA74VMqoEj4m8Vh",
  "key4": "3zdaXyi5jKKqnS1Y4Sx8rryx1LW8ccBu5bd8GG48ypqUt12pfUs754LEqHc98MBCwVb2sTqyLRfLWkbonuFyskSz",
  "key5": "3FSqrD8Qi1iBahQ8dCnhDd7mTm1CMiHh749iWHXRhpF4uTqjBpQU7TPHuPcGxPCyVSW5qqycnmApdykWADqZkY9y",
  "key6": "29BYnPyKFiMsA8ys9j8zRK9oo68NdMu8dnMoLzpaNNTf3zanQF1TXfqcwMCpZE4ZC2DbFEeiN1ZH6BRqFUDjv9k4",
  "key7": "2Hsi8APaTkx21TXXauXyfvNdnWjwFSgwKxZAYrjY2cj65tpBeLdckTMmqX1S9a98V4DxYGsrks87GhGcw1WXeeYa",
  "key8": "W43gAukyXMfE3M1KwF9jXj4PF7UcwUzM2h1KWzLCJeyswWsfXFqoAv3v2RUvck9qxq4mpM3QPYuwAP7Rs7Jvsuj",
  "key9": "26788NhhGbXfDchZXcAeoq3RMW71KCzsMUZnrBRpTP4UAB7rn6JQegMsWUWGydJKi31zE8CXwDVo1vVGc3Skc1CS",
  "key10": "5Zmkv3BdwQbBnq5ounMgKk3PXEfcsVi5AifeX7u6xYYwXscDwex65WJhyGp1wi42U1v6Fbfc45awcQYSKJnVfcGg",
  "key11": "2FucLYimef71s8zkqg1b6Pe2nBCbgoxfV7NRtJGqVMgzTEEZSFk4fuBik9Hezq3vSjGCvQBAXqUUJF1JSxPkzThX",
  "key12": "4xG4iLtABYJkTqLVb3okVLD1EfcoKJM8v7d5Jffj11RRVgUXduSnq9HNpaDysyGeXZy5j3DdZzXTgh9GKM7BHU3D",
  "key13": "55tCQaVta12k56anZzLq72RqCSxhbemv5kKMwJJDMG6TeHtTChFgFJmNhwUbnktHxmfZgzawTumLepYzJxvUjzTD",
  "key14": "4XKiPDYpBAj1DHArEpzFT5ZrPKMGKbfYNawMRfm9hzDXYqbFBxyECN8UzBFAWgTNxUuQPfbXEH7oBU8JAGAYpNr3",
  "key15": "5JqbkeYLVFgD3ZiVRFh5q3UYxap7ENT9EZKhtEggpxW2xdeKquJUA4RPh9uTtLyeW2M8caRaM2GZAZw7oLQ5YhPr",
  "key16": "526MoeJtDYibz2vHSrDf8kkkjqSxS13KTX3BLxvo8FEhcERbutZtkWiyWkP6LtWXoiCRG6Ma6puDMYQ1bmMupPcr",
  "key17": "5RN5A8p9F9XKoQzggJdjQAcFFNAQCHfDHKFZfm3QkjBJMAyW8ZkHeCSKumQFv6py6TUvYVapc8auByAcwU5L5K6f",
  "key18": "3j5Qpk3hvHqFRSpbqdKDsDvpBzfALTo9NscmmmJbsV9LgWqYn9ohwd7q6cfVj8211DidNXEJu1Dr61Ggem8TRKn6",
  "key19": "ZLVNck26in2C41dAW2Lq6JTQStiazQZM8hvzgoSCCiLdy61PJbhXU5HZ7zcK15Gts1oVYkSVZbemu1qhUeJoU1r",
  "key20": "2cF5s1pS6jgfqf87uJDGq4EJVVme9hLwD8ycy1Xg8WGtXHns6NDhZ3SUcHx9Xb1xy5KNjDSmcpH6uSctsdje5RzK",
  "key21": "35SxyisoE2TJoWy7BzY3RdjSiTGA4ZsichYD8G97V8GgZLMggesr3YVUqFPqjZuUQteXGzohCXM4Zx8hHzSAYJs1",
  "key22": "3gSBqRyF9ZfD8LM6RYnhCiTy9B3Fd4bmEVzTV2YgGYynuCCdSFT9Zr3Qviy8eJHKD2Z2UMxScsr2JnciiGSDP5Yq",
  "key23": "CrWmtSujf6ZuwpWnJwbRikaLrz8EaCi9hMmeGpg74THmyLGpK3xWXqELk4svesLaSsS8cwEbavwLfNNdEbveU3w",
  "key24": "3ronVGG2gD8KGjE3M8ayA3es8WaJuscoEzu6UiYA5PwrdutKjSxXkVwr7DGkZVu1RVBPm5vMtPmtY5mif9M3tuZF",
  "key25": "5Hkrd7hfHRc3BEnkodqbMzaq1ZsNebYqHxn2D66tYUu2cQ4GQ7N7onMr8iFEr8NXMeZSNqvzT3PQbjW9t2KxxpYM",
  "key26": "TH3gca6D9BSqU58hGS3dgbyPkDhbeowkL4KWZi8g6nUgTAdzjetzJ3ShbFJ6YqNBZPMPuhoDJSiQurrCroGmtPY",
  "key27": "3jLq7xAZxZTyMuMaGsfA2gz6ougdgJMvg19cypVNRhS5GJVZeZrtSVi6TEg3vuNknYxhehCh9LVvzK4eqGtRaw58",
  "key28": "3ha5nWj2sMMXEL1ydyqWfoYz2BMpau2oFkm5hMfZTgwrKRAybwm5qoy7QtJj38jgMdwpMQHPh8b2oeVb3YDVTVw1",
  "key29": "2qozEL2fui3sh6ZpefQ2WFQNDDcFhw4JcTnoarfcRf2DaLMGNtWoWTE366TCcQBENPtkiDAfageVg67BUcN3xcD3",
  "key30": "39sYG5E4BtLNQfQADHpEcL29LaZbi7FmShDy3zK8Zy9tg7u8wrxTsyhLJyby4Evyahtd7pUEpr34vjpehbQ9Zz7b",
  "key31": "4w9seQ8e5gvH6RDspY45reDLPjPXp3VwrB56KZtLdN77btbfUtkmsnSetNSRAzhrDFG4YvA1439US2A8ybTqRWFB",
  "key32": "64h8y6AHC3QA3cCfuDP84XUFv9UU1cwV9ArzwaBJSdXW6aQDzSD9Fqq7BSxNbDyEbKT91QG8RYUtq7pdoGXu8Sf1",
  "key33": "2dAXJg4w7NVPzRZr5M36ppaZiiLzmufrc8FiiYKuWZ92pG6S4vTE7Zz6sJF4GGK2p6JQvLYeH6Z38TfbV4YnoGtr",
  "key34": "gXjKrXbky3xcz7taTZi49LHNL6EGQzPQ6ojadHBP2GnYUxpYstoVFNgpo1RizxGHBvs5PGrN7CcanZzUjGgRroo",
  "key35": "5q5uuj2vQ67e9a3Dxawf5sJFnYGRvJBABhLHSZu7hpjgUWV68Ea4cxtf1vYmp7rW9zvojXFa25T7iyZN1n8EoRGz",
  "key36": "G8Z65b1QZKeTexDcnDWDhMR28roM5zk5t1tkLMHBnkg7ZEV6rridGhAxP2eVYmEerLkTrR6A6wYrwWTBxyETDxB",
  "key37": "4vh9p297hSuGmRXMUCBFVnW9MfZZzFqn45WbBxhjwKT1MHwk6D9yvXqLxfLU59rqvTzkgQjQ2UV9pVVP9Qbc7eUv",
  "key38": "5fyfjz68YQjfw7Z879m1WvQTVqSfrfZniUC4Bxmps3i71yvj6yHYJn8AUQtrmNGGabqyENVGcsz8DMQ8MqTvEYUe"
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
