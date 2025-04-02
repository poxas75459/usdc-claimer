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
    "Tu4GAgxkSbK92SmqiZy9uEEC8xBzjdt2TDYSBGFaLWQ8SsTh1Mo1wVcdP2zgfftQeopJntxXa4sUibf4aKi26HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eigxTFu8XUfgrUbY46cxJbJ8oZWKprVE4sVvHGDvboSqgPrtzT62a5W3NNE1Et9hwTdE9X9QPgzU82hP28LSbmi",
  "key1": "43pxnQELZfqqDBT4P8GJU5YWLKPF5iFMm2FYNd3sDdjNqVUyWvKeFrNkaHBDSWJxCTD8Hv33SFFYAgNYTHhMfCpp",
  "key2": "DYPXyFAEgfUAMCzgQrEUBnyDsErmLiUzqpgByDWL1LqhdnsdpzSGeyFY82M5oU5cFcioUBRJotR1UBzpGDnKxDQ",
  "key3": "FGBPAXRw7KvL8TrQpbaXgzhMoetaCvZDXfq8G7EaPw9PkKumjmnZRn4DN1Qc3mdB5iTn9cyWGZWNE36dDRH6Xvz",
  "key4": "4mgYyGpB85KyftK4bZgm7CyghwyCneUumxWctvX2DAoh9Un6U7eaJeXtXXMjnNcVyCxEPHjRbtvRQs2NRWr7SX1m",
  "key5": "1n7E5HPKL4kbkRigL7Q6w5Axpc3bNByazNXYsipaBeVfeo7gPVb1PoKXRcXCEDogydSGqGVM3sfYYZKro28fpmF",
  "key6": "3gGCuivTwPpLbw1eU2Xr5o2Zc5BwRcG1u5HiuPJwLpUj9TBVtJELYuhP5qhf12TJ1eLDW2yFLVKN1iFuf1fLuhyf",
  "key7": "3DHouGKtEjMfLeQ3uj3yzG9YPdeJ5WBkD6BxDo4dWt4kynAU6jPoXGQaPwL4voZvpo1mB9mSaEn1oYM8jci44w9q",
  "key8": "4cK9GDuczVrKfZwyWP1DNLoGEnFU2DnfGwPUgvVQf4pepZ37xGwEhBhWXJewni3LRc5cwHdrwa25FBnfSdfyyaUR",
  "key9": "4i2f6PkA9dVbz8FsXqLLiJTG5DQkBrdCEDSTRHHE2ykcXY2qhZeQg38EWkRtuA1pMvKE6myUiEsARvHgsbgtegew",
  "key10": "3Eb2EqSNKb9sr6hQpsLjo8azsV3wG748U5C4wmRCzRGuANMSdDagBSbeNwrorrm9ArPUbEvhpMr6r55aZgJeJ6kL",
  "key11": "5QLFyQnyMQe37YVQaxuHfPGVQrvAAYwtfDpNQVNia2jy58Dz6aH8hkJaFtrWNd453AEmpkwdGLoemuGZ7Ymxk1Pm",
  "key12": "2PfPTU3oFTJd4PbQRSrjACJdStpdbaJ1BtwKp1TYCCLMRSsABUjZ4uEMYyY9ns69FfRbsAwK7onR2MTT9uru17ZF",
  "key13": "vUFWYFfPQ9m4un9svLwPgBGc9D4woJH6swMjTCJaPasYVB9zDsBAowVxQeYEHbGdXCxx816jgqfkmwNVSj4NG3h",
  "key14": "5E1XfhqQo24EDyJecvsGF6zT99sQem6GhkCnAj29NsV9RoG3b9r9mWBZMtc8A94hzu9Lqq8BbYrLP4QvJi4c8VYV",
  "key15": "5atKydjcWbZrA3TNq75kV5H2QZsSgRrNz5qNcXi8c5U66cey5kieQQ3qZ27pbK8n3BHpDSqAM2zwVxbyDu79KQNQ",
  "key16": "26YA22udE5SEDthUE5cDpmWxNKgq7P78YuVMJ6u1XkBZXv33aBBZC1whPim2Nwd3Af45AmskvoLqgKYbiP5sG11H",
  "key17": "3RfcgDXrfjgXiFzf1utBUgBNb4tDAmFqVb6LGiqjXMJ9DPggzPdYTys7wanjYvvUqNoWZyUHqSKKpXMD2rBZgXTt",
  "key18": "jLPCk1xSX829ouJKrLQXKg7PmsPAEnQFZzC7QeBSeq6U4bxEACpJhNgEDofW22iGexLrFr1Bd6Mgedk4AMp1VBk",
  "key19": "sjZC3hmgYmUJ5Ukw9n81iJh67k3UsZCSUR3LQH4npkcgczinGYATJzWizdejphH4LkhWinoefvhgMEUcEGTw98q",
  "key20": "4VPFWtg7XdC44T5nQm1vZcBG2URFRwGJ2srmF1uGk6EDtUPrPyW7dT7dtigbcWdbU1cBW5TtBM6r2QhEq8bwpCJL",
  "key21": "3gKYRGFVEJsLKgj2GsCzLcMtikJbEnBWyTQF5nEDwj6612mLWEqj7g7vt2tzvpvhxeZU4UEUaadoAHUJqiRmPmMy",
  "key22": "4VYGDJGF3qVLKfJRyGQJESoUpi2BNPXoYGdWf2TwRFed2csL4rXyrfLXJjXZk5PBWzyehCD4xsf6cEK4jSxn6yPe",
  "key23": "5z7mgGqu2woZ5HmPRmGi1a692tuLHZNBCSkuAz8vYcmWHdADYhtBvVtc3B1RaZv2go1Xi9v87k8LeAMxSDn4BPD3",
  "key24": "2ivET8wNGxKs6PceVhknZfvdyv7iE9jFxAprEbqWyDHph4BBFRWzPKy4qvcKj1iadYbxDjRP9Yra7mD8zdPBzFo5",
  "key25": "jy1B3L6bAjLYduJtETaiNwXpT9VatvQ4owzaWbkR1nyS5KpMnTQ1s8g6jPhwTkervQUj2Dn1gSpqY9imCyiYZXd",
  "key26": "4pqffy8N3nyA2DKnV6r1SXiz8jh87TqKHikPm553syzWd6p417H4mbsK6KaP7DDNtdofqw3NZwdHeYVSgeRTaErs",
  "key27": "26AVr7qEobKs5HsYKAotNUYKU2rZeEoPZ7Nn7Dukgo1EAmUrYHhjz1SQgYpke5zYoKQuhp3WuH9AKiLM7ByysSgX",
  "key28": "3UnvRDdCRCUyjqsRsiQmHQ3Dqrt3LgcXFBxbPijZxqxd3h7LcDSQpdg1DN757pXVzGkfDTiFrZ6wKFApF8WbYkmT",
  "key29": "3iVWkfJDsib8c5hCFVrkvaPYGtuZbsbDhs4jndwq4VvHKHhyEvZmrsdDgFzwSXjoweK5XnDNsB7VvEV99p4UZwrT",
  "key30": "4hVWE9TGF7jRx6txZWxDk2Wp1kL7HVf8SyghJiXB54vRW9CBxcuSEjYYkZqmHzhEjCHh6KgEL3ySVE3LKE8hac2g",
  "key31": "3LpTmFSnz89zz1mjvNhfwJ2sRpFBVqTbkkknxnzcxS5tkoJYsQwJEzZ1NvbErnmU3SHgYMMDgtdbWPGKWkT6axVv",
  "key32": "8PnTHUyMRU7WEgcJqqrRinUk29JyQajMxXTpAw7SbtwsVNN4hn1ajDPaXByZCjredPeLciiJeKnYkAApHkJT3cV"
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
