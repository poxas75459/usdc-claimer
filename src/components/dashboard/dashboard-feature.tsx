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
    "4RMFd5qDRc3zqFeSKv1QdGyqiuymb96452t6a7M8i93iTr3prKYJ9BMMRhg338kMzoFNnHm5pfXhpRQmuHJLSsiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44CE2gFAgPLamFUfgMqBb6sDS6Bc8CYSgCZFvP3AYoBmamKyL4t7GRCZSDPbQQwh25VA8SRkkpNEFCWQvj4s3UpD",
  "key1": "3oMKXxH2nYpRXS2mH8rBChVAu7Hg5wp16usDAb7qETJWayTDTZ9j321wFkJ1NYS52cSKLzVQaNoo8utrUpAfHF6S",
  "key2": "fqzYSPmw42e9mrWFF6EPtGvhEipcdU9Ju1CDhmVgLzcuwHNoFr7V5DvweVuW5HkevCU7d7UpBENHyK4YShnwPzn",
  "key3": "iTQ6nHWJGWvhg7yXVDvFSjbKTGLdU7NB5RUwUAHsJxSsyYhwKGz1YW2WFYmFmMaNh4vSUaohAEu4N4PRHQrK1yw",
  "key4": "5oTUamjyDFXQwp6HwWBvFUKrb4hvhbuGfm7iaV2HsqQxRr6ucCY3BXHUwaqShQWtrr89wcKGU3s1mwyF884HpKkZ",
  "key5": "4UioRuyKspcZP9o9A2SdQvh4nPR3DEedPzCRyzfXY18vnPqXYN9XBe1ciixEKvtrUYv8sa7o9NEtb79x7np9Xm4m",
  "key6": "2EFUo8mFKAB1TZtnZtqENz9dZVpYTU9bWvuCafChFxWQQ7sSyAsCFbfhCNVJhtJKwS5CCHbmpPPvQ57deCzG8dtY",
  "key7": "5vHTqjxPn3wV1vfGM77218NBTTbmLu28nAZbPufbKXJ77Ux8UmxzpUgX1LrJkH8N17pGZGya2TzBRhRyNCSoTwt8",
  "key8": "2V6hpKK812QmDXpVdYFHxVARFwYHSkVqK2WfqwLGLEFJSgVoWsd85reiuQY6EcR2NMWbfB3sAj6E21sRsyon7Npz",
  "key9": "2eG4bghENcWYeSvCRXsWJjCwW4BHq6dEGvRbM88Fi6L1e3aNqKZncqABCaAz8G2EYLay34Hreqf1mKv9P2HZ1htF",
  "key10": "2ZVW923Xz66urAFDyhxWzTyY1KJTDbCXUCFyCrXRnJEvEgKcSjmisACRfoHsBHQ5mQhzcu2zXjBzSD8YFXi2ADhU",
  "key11": "5LV1aqGLh1LeJDjzFJ883HNmzxxMM29tVWZJvxrMsMPdXb1KdQdQTfcmQtmJPEyAUgVi7Nbt9evc2eWNvnEeuarx",
  "key12": "2m3ihS4tNmUy69HMoRKi84ca1YnkksN8ZGEBwUDPE9qeC8rpobKv6evgL98BWQQHW6YiBvDk9MmX6MM3mRmifBjr",
  "key13": "5oQefgdVDbmhModPyJ8ZhEQKZVauPp9dFB9gwgVeh51TBnpp48nkwNCmqQt7NDZM5YZbk97Hfug5AFa9eBwBbmVF",
  "key14": "3Zj5WLijyHNrdRGvgoGDee6KWqwAzZCJx2aeQaTiB3qZookMPNSc8XSRj6fUDL97eC3uFwSRtTmMjY2qswjaubks",
  "key15": "3daiZ24PakXXMNa2L9zsSmq1Zop61JofFTsVUwYCYjm7VrCMqtirRUX2M2UR8P4x8joorXrGdUPRDC1iB3CdykR1",
  "key16": "66AgkkafNkJjU55t5GCGjyCHf5VHTv3DhRAhLLGu6CNmwbE5dhTiabC9TuHcoNbrriDvSSRJYtmXKS4KBsj93uSM",
  "key17": "4jQNRWxuwLVEhR1CCvuGgzL68E8XxH5zvoX8V8XzevvxMVR6urp5iLeysNecFdj2MfeT61zWjWBXVrNyQP6s47wV",
  "key18": "SAnfSxSC7k3gVsr8vUmHuJ1U8LDdLrhhrB3w2tyV472ra8LnSqWxHrKnb5QgQt9igbwedfMzbYdBoNFtm6GdKzq",
  "key19": "3tzY6wiRHNkD4XQin9rFSs6g7q3NmfewvLhvcL1ASVuz18LZxaTv6fZUpfv9VCboRWFBF2mURzkLNW9YBXCjmJZq",
  "key20": "4bNpX6sJSaJnZwxGGtX4qGDkEPLR9AJZJZFxM1NrVzNF4wqPyAmETSxLgvkWYP4BuHQBdDyajerUMPC65brgyeBw",
  "key21": "4jFadTknd8dtVgmxh9ofFVAt7TNxounKpVgJiB7JudQME6UQfPHg1JX4FGnVUQcpTp3wur6eb7GMEwavy1vUhQ1R",
  "key22": "4DGGd4MQTf2RC3RbQkiPUJJX2YBs3sZsXZNjRnEzyj3dZojcUNgNEdKgp3D4Z33Qjnzx4DEBjtem8yHbNUhC1VDY",
  "key23": "eP2yZWdjwQbdaG9F8F8nPEhi6auvRBjpBPJJSzZYGdzUsXMvMGybXSPLhLyehG18uhzTCoJuHtHSbZEKEBaDWNy",
  "key24": "5HTQntHpDvPLg2rGHR1bbsccQ7facJZmtAoa8E2T2FpC1zXCvWXtSayQ1tmxiLpVY6Bfkpzjp7VwJpirZu7oKpkP",
  "key25": "4yb5XjLtCde6KuRdb5zW54WwZ8XKymy8mSLS6H9saqHxMex7HbYUPczt9gvb4WQQuJaQTS1Luj9t7HZFCAqMh6EB",
  "key26": "5wa9N6EKoGMxhouJfGartJrh12hCPj523iCDCk2Z7bFJ1X1rGsSfUEJ5thFyuff3gsePuyBRvhkUkuYN4bXZr7YH",
  "key27": "3GKcHLfBpbZwUmsasRhtb3XvbfeMkK45GpiEYKWj5jrPy4cKTGae6nrmpgcRmeDcuZKAiXqmJjx39eXJ8CvMBmSC",
  "key28": "24zs8mYX7iX6zugCoy1eYdWibZ3rjmhmpcDwkXbYCjTZj76sLmsWYUqyYkmo7ria61R7KZci5tkPuaTkYAzu8EPj",
  "key29": "dWc7rU7YkrxQK7DMRWorhWSUwkRm543MErr7BJyoABfcpmgNBjrVFufXsQCpv6sZGgMzZe4r4orpDs7upRyTG7Y",
  "key30": "2X7XbVAMWjyQMjUAGzWNvkHJExydxPuFZynjSxh3NNPeix3WCJtLtaStiFVh512bbMPHzx8KPPvKDHY31zXdLWXX",
  "key31": "dSMgvVQPPWveRQFkbSDscN296PcYUouNWYdqipkxTTNQWEFywpZ5nqWPQEUuJr6jk9MWH1X6rKfeLqhKeh9p9Sa",
  "key32": "5XERdobUD7rYCSFGAmUQfiUSmKFWzDpXb2WoQ5Nzvq8fZg6Q5bAB6KRg2xvfe26ymZfgPYawoFUaLRZ2P39qfnka"
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
