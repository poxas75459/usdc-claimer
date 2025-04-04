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
    "4yLx23UY8bSddtNRjDNuQNuvUbJh8xEuFm4LDEn1qYCypAV1TxCVEmdaFM1JQcQs95ibe4WqYPBx7i4YyrXozBrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qT3DpgRkEfnUex2mKVNeMCCw6uFbzJLiUzexc2HoqPM1bNHF4iJPf4jonV6EZmgLDa8tnpmdNrZf1FymffMmSNc",
  "key1": "2fD193XQDg8C8KDg1EigGuVPAVudXsFB8W1DG2Dmpm2Ey5sNAKKWxVCFquwJNt1NgMqneM7BXm7nMpdzArMn6aKK",
  "key2": "5spGpKatyty2bNstqCq3EHGNJusQDqyo6jgJbKhXqSd4Y3T6xZagjaJJhhst5cyiyzEWyaGeEQreLZKrmWtZ8GQ6",
  "key3": "oZk2ErmFgtkfHTqxQ7iB4nEhQin7mciBa4YzYyQQJR5JkQ4itaqHQMdpV9aV5TkqR3nhRMBbgUw9huimxRkf7wW",
  "key4": "3CWRVqma3DR8eNTm8SAJkBYuF4khfeMpxh3BXRSgQtRDxGxz1rHg81fEoSUCCEuahUaTzCDKiNJxz4L7SXrKkxxP",
  "key5": "2ofqVdy38GKK7HYHA8YTbN1ATchF4kBfKKnBXhP1noa64qpPkcN1RMeLpdQgH6fiUwHjEU1aVvqxZhQN3KAHnzLz",
  "key6": "5w8Ta9RFf1BDxE2mG5za8KeZ3w8gVkwPBCJZxV7jiPkhX9cWnpiYogKxoRRfAY1QbLup5zrsyGsQ1jbGt2ZL55iR",
  "key7": "3fLBMN7QJGQMQQJDWJhtpnRSunsU6LxmcJjd322JdZPp6PvoBnru7wKLKADvAxiheCQELPPhkVxQHxLRtdzWSznc",
  "key8": "4v72hKciTmyDDMq6XbAcX39pbcRhBFfySSmLroFEV2YhG7xJbEgSDHmsBoYyJj1CXVHBnUZRZ3fEjxCxLk9k15xH",
  "key9": "5s84oc5Aw41T6wugY9Md62aSUraRbuJm8jME38GtP6H4zNweNRoddCfaDLmkVdVvTpGUTU1j9nUtQGY3KHq6xm9i",
  "key10": "2TxgXKQDAew2bW4R3LBg2faGuZFDe3d5CQ4vFB9M8TrGeGq72dn5U5MQg6QUhkrqw44dLmo78PUnMoTi7S7Fe9Wc",
  "key11": "5KMvAThySmPSstLmwcuUK4zUM8VU1n2r29ePyJza3AbEGVdPBwYFydprWpvVpps1UgDSyPA7gFUsdvGH4Qv7ERv6",
  "key12": "aKnQRyxvAxYZjkFV2v825dDCZBQyEybL1vQZsYbaERmDBUMzBKsKAwt1YWzHwbWv29PJ9jdd1J682GBsYHrnuED",
  "key13": "4iLWrybTL6UiSpnKnGwuQoxf3NcKopeZoLRp6KzYhM8rBZSGNme9dEo24o1bBFwrW28emHtFZ5eJNostM1NUdZ6R",
  "key14": "5EPMXk2doHW7mBJRWKWxcfyq2knBbW2ihuD3amT2zrGMTFjgP4dgQDNCE3SiwW1QT1AcKgkE1423bZWvftz7MvdL",
  "key15": "saKD2z8RZaXABt4BJaCYmLTGDGcoc1GgdD2fdxdLuSJNVbUuLgcYW13bUo1V9gEXbqChQDs7dSUmBamEfq9Fmak",
  "key16": "47Q3pneGXUc7pviGe4KosrvKPfVFaXVpyNjM9QWd9Nq2tQatxmNihq6xV5ozwLNQdNC3Y4j2dmbXGq8AkK4Lezx5",
  "key17": "5k91PbytXAyk3jxdHp3kmgmEjCZrPrzmJd6s77W8YsQ63LsnzCrxPttT9ZqpQcxWmKTXAj58QhH7DLLgRJsBefKM",
  "key18": "4LG9GwrERUYrP4keMbBimCHKQAvj4MznSrmSoCsLAar4EHirwPmiR5QWtGzEMDrRRNwijBVczQgCfv8HdiYSxAW8",
  "key19": "47qfnwfJSnRNic6Zb4qi4cquLZ91aoof46yEfaPgDgEUGkfNEe9K94hoTCdPzzKh1bipNMTfNH2ANEY73mrT47u2",
  "key20": "5CWYyZ7aCzJntMVieWJJexUeg3R25FHYYBfBbGe649QQNEaur1HwAatLZ6kqAH7gxTLFAqeAz8gJWXurUJX6iGBo",
  "key21": "3Lcp8PJmqbGh93jFvodZtzrnUj8sZuCrfq6GHjMNPYbRDfTC7zvBDtaeoLwdLkHJsDaVqyHBjNgMMTbrisKLwefR",
  "key22": "4ycqonWcZ6brs9JaYcBgrEau9uWV3TuqboxtKb94S7W19Mb3itVtuEeKqAk7dPU7aWbW3Apc1megskwqhzDgATqX",
  "key23": "2QDADqJKQtYfvu7KbERKXz1f6TSumE3pjNJRK57vyny59pr3TkxJEZ2ft4cpAJhX4EsvNPM3H8Z8D9cM3MtX8GAC",
  "key24": "V4Bhw2Pq3e5SbzvmcXGYudgmgz8icwDLxAR46Aw6ww9yKdBPpdbPJyKyWdsK8akPbEtyNTJNipFJiucCZ37ztSv",
  "key25": "5fRApS3aTiJbiU7qETo11PLoiGUfoDsUMAzAJiRziRV4dQ1FAS3tHpPAbhkzbTcJdQhdg2MCTPTmCdUDEHUNLQxe",
  "key26": "45CFFgQd2TkKSDtNukRMgXEnBpJAU3JTMh84NCFqteSuNcMFDswxc4d2HfZ9oZuJzCSzobfhPxSzE4o3qYernxsA",
  "key27": "dznuWmjD9qJLBRVmSWoa8BfE9BzyHDU8t9Dh6SgVcDWktgfWijoBqKWXUwH68iA7aRPjPeXuhjx1HiqMWXvAkRk"
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
