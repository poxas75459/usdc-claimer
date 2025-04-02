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
    "2qrQYScdacEfRYzFWRHiWsrDhf7HuooDfoHWRgLMujmGVtYfdbFTF3D9X34K3j7wTDwtmhUjHqgjAdBz6JCHCYxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eurYziYAubRdiZJkzLz9nZW22QtM3gQv7HnqftZN5AEw7WeQRij1r11c1EGZpmjBvTDrrHaWnCHRLmLLXFBUYdx",
  "key1": "2PVYeQhSEhQRdh1DEayCnWpx7KDi7KeMaH9BGaZ5HbZubo4Td2pNWrxjtwQQbdJvihEyXVyFreoX5srkf8amjdGs",
  "key2": "3x4HxcEvhA7eqWeVWoQHofRPqsjehkLweJizf4HPTaAzQekJMdqGP8sHp3fBQVHujEPWmuQLQsSpHbskfSg7aT9p",
  "key3": "2tacNQzZtbKjHRDZDcL52JiyP4mmeJhettTZMt1bm8cJ23KTcsRnxzvsSe7EeX4Y8vRXFXy7sBGKSahRSEGbv4ru",
  "key4": "4HootNYqh7cP9Tuu5im9Jfhr4xWZ8HPtTGtT7pBxDZQPmkAAMm3zyViocoQAMAYMHTjdDpYDbYSrr8qMoGjEBtxr",
  "key5": "2TofGmdpcgTdjaLCqdV1Hea9s82bFnx6MSeMvKNcVq9nwCjppp4Q4Q9S8yREz6ifjjp2rQjqMyTanVjwE7yjLFkm",
  "key6": "4F33NN7onzPwHizpwHv8GhGxkDZqg654HPPQbGGEjbAXcdi4d1uysqX1EMkRrVscVTsJotbQ1QYkW7jMdzcQNzgY",
  "key7": "58oMVm5Dtg5eBD2WmbuSZyi3H6TcLFDdT6Ufgbe4Ct1znCqhMX6FSnbPNgjxwLZ3wVWVvmBtYwzhJNUAXX83rrXJ",
  "key8": "2SJuimbtT6HdD4mfwHZgMseUBNpEwBRTeWZuQ94pumRW6Dt81GZYZv5K7RThPvJxDC9nsZmi5H6UH4oajLpE6t66",
  "key9": "4GFeipVu2p6StuM8WMoS2uK1CaJXqXT7p1abrdHBKvJThEuc2vQifFYSBBoDqZCYVj3i5CscR2iQqoi3cDob149T",
  "key10": "4qu6xiGDm4PDcoYTH2CeW8dwbBSzgN34yYjCzg84hSKBm6WdVPjMwe1CjuZXQwUhTos3C3e3UuVKKoXF44fdfkjq",
  "key11": "4R2U8U3WwG5w8SL719Tb2ekc2SHePCvJFruEg4rSyHRQGMmnqc6ohgVUJz4XnujyjFdeX9yq1JqPe9QXk44RqnU2",
  "key12": "24wg4RZdxzDE9YjmkD7AQwoF8HmtnZyMXG95XeCYbL3nKtFjA6xyDak8y3Cio9P78ZypiscbVLDtN46UfzixGdsp",
  "key13": "3MhyRnXCsD2hp9KUkvD4H4PVESfjKPQkTjQWnwgncrfsoAcJVzHoFnUzykaye6EogM3TuVxesXaziWDkoqbG9iuw",
  "key14": "3FphkQLj86QiMSLcKBP4GkZDkbAwvn2F1yprmJcYXtSzpmkBDxCrumZMgrHyitqTKZpN52A2mjDy5yzeYt2XcNRW",
  "key15": "3yJChKTTQqNLQEmHBxZUx26Jyz7JCaiccxjvAvTHih7JoXXoyCWVK2HJBga9Et6LYc6dQWVKZadHcPkSHVFDdPk8",
  "key16": "Wrj6rTHDcfAzyqf4CD8GeE2joyhXPCNfbmhSDoK6SGaRMZKu1x7ibogmfgPzwcGxXfZ85vnFS48xzP6BF6AifSk",
  "key17": "cbebunPnLH19Ld7hqiMmPWiXUW56Jdks7Xevf93oPnXuQ4xUuyAfvTRAz5MkoA7AwUwc5zBADC3xk8UikCu9SHx",
  "key18": "2JZNoyfqcLzLNzM2geMvx7n9LpF11GyGXXkQx4tV4dtwS9LzXjKd2fjQeLFNjDXdAyWLPdxsZQ4Ju9JUevQGSS4N",
  "key19": "3i9HAgCyB8CtNcYUqNrRo8nUmunEP5w32ubSj6rkfUu9VxiATbtTWHJAa3YJKrEMPG2h5HwxFD8j9qmYzcDqHG8",
  "key20": "5x4QiEWA7MbusFdSxXorv2f3HLUa5Hof1XorLaodaWDXMYhoadzdYPxyytsBzTHbeCWyaTo94Jt2CSYe6x9XZntK",
  "key21": "3aoN1NxGfM7LmnM93L5wYjmmBC3KsokBK9aRrV2paX6psxKiQQ7fJ5gVrjz2HHuQ8zQjcoC98JQg9ZhNzVpT5v8V",
  "key22": "2LZyosPxpFi4FbCECJGXr7vQ4ZxgEoV7Fgu2b1iv9HVJUKxhjqCoTfAfb5jwAp8S9n14thHnvYZ8tD3wynrgDfUp",
  "key23": "4qvR7cqiB9aiWzRM8kvm8K9tUkCQPWsqX9pd6RPqB5MKL1K99KASbJ1jtodxfCfnpbyRz3ucTohqCCLnwcbP6o2L",
  "key24": "3f546QjF48Z77RLCUnoXVhDyL2xRSS5KUYrt28t11X7JuTiVDRGg1fiwuovfrdk4J4RAFLrwYLkbkSTMeqSWzyXH",
  "key25": "cfRnJjiEGV4mxsaq9f92ZooGePUEJZXymeBJXLnFWr4seQS1nmZbjZ7fHt7NNsT5cbiLrqd5J4mAfWRCZG7D3DG",
  "key26": "42SfFKvbvYq2rzC62FrHF21sT2jeVVgGF1EEdsMDUuxjxzAfde3HzWDxuv9FeQXgnNUqk5SH2kDKP9Mt4sXQdDGD",
  "key27": "LXbgPkaBXDmz1moWvUSnto1eAKsMkRGkV1MnjEPcSFrYvt7rdKimJYitdDUc8wKY46icMXnx3RENR7dgEgqovnh",
  "key28": "2pjiYyKavgsaXipHrCe7CKFmtGPYVgERqWnN1bcJGmsPxsknEjNoPutT3QYY4yqZR2dPmFsxq8ZRbUuwfzP6dfph",
  "key29": "4mSykZSAmQykz8z4xjUHyQvu4GPaCHpvnPwRD7Bj9qSQR2WTLFd16bYJYYDjyDvVhixBNNThCWsFmm9Bs3G2hC3R",
  "key30": "L2hYLK6VNnuFuz4EGsEX2CcgE3qPPW5292fAznpeXXGLbQwNbhM2r5VxfssMCAewhJjucUSDn9YEJPYUbLzr46m",
  "key31": "2hpwb4F9uCMFBQxbEReM439zXofgfuC77BVeQvWfxa22HoLTPBT5aE6G4tNqrwzzth125xfGAfNR2Uj6295CFKJC"
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
