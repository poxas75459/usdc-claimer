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
    "4PQe2fBKrNfVcAqL7T6veM6cKibUuHFXTBKHinhcKaBE5LK4tCfU3N1wmrTUsJuamb8fgy64qCrFwMQ8ht6VCEcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kzqYTEd2FqgATJ8uovsyBoJKwoKYzomeBGN2JmikQgKUTvFcPKHeptBgtB8UXDerfwkKM7QP7MS4G8VAeDarrgj",
  "key1": "2bETFpEeJD2pK2j8SGPMwZ9zgiAUn8X1jGs9kGCe1vWGXmYbvQRQSoRWzaLH1oHKuXtTBDgqfdWbZwwmPwmAr55M",
  "key2": "4oRV65hgdobMC1FADrT8LPXEvLpuBAhvL1TjqyDYnX1deevCC6mXXM1SgPqpEai2G62DWSYnpdL5fcyqmi7ubgqe",
  "key3": "31rJEm3H5nCNsu1jHn7bcaZT7jBjtGWis2WyMzG6LwmZpWESGD1atAKRQU8qymT2nQ65uZ6CpnhNnS6dhonuBcGv",
  "key4": "4nvYyXz3ofFsKyQ92LWfmC3Z9QE9T9NJJ89PRQ9KQHeEz8yHTh6pa2yvTRR6ePz4EKwkvY2Qb76PGSb3hmbkiRiq",
  "key5": "4TKTQTLuyiMhBbj9SyGivARXnA1F9smCPx7ZDrAAYnEg8b6VN2N84m8H7FzAEPMxxJ6DMNYndwo41nTrgcUH7d2S",
  "key6": "3U3KysNmYRD1dEgcvqsUjMqDobtAjRWaqrYU91LozbqhJQQpPGwq4ji3Qq5DWDkotMwamdna6Vh5D91TdG7ZJM3i",
  "key7": "kVhKyT8UNa4AjvMan6nJHNU5LCzwfAXJbNqueY9PRKf2YKNk9bETewoxVVum7ftCT5NTchJJ7bs8qBc8k2bSQ4c",
  "key8": "5GWGuk6gKDgj523j2ShSPHD5p3i94GRtAG75GDDNMr3syhb8upNC3PXj6KkZKhvQzHf7wd6v81J4YGaAmXvzYg3u",
  "key9": "2Z227GCEpQZjJ9Bat4eyPEMngPQP1fDyQoPgE1x47BN6JZvTj8c2WeT2u7Wwg7pLRBEFjPX4Bjiiy7Y7DsJLTxdr",
  "key10": "3tkqFJVnhgZNrxTRPLaQz8DyjNLEyMXb86bjPB6vqkVBvN42Hp6w4kxNpfCfD8Q1GEs3VLbU9TrsLSxtn9cRn9va",
  "key11": "3b2NUKLfeYk8oES7puwbLTLwznweHDVzijsFm3nmn7D7WDoCq5y5r5FQYKwitryfmh36EjYsASJnPRB93hfnKLEq",
  "key12": "2UGKmTNe8nxP8HD7M9KUzSj7F6E28sDBgDxQKuc1cDTK7bFFMM9hbre3WgiNr9KSrbqeq5ztkcJe94Ej5Vg2Rzz9",
  "key13": "3mnEmGGnUuWjPRdV48ypzGY3RbtWuyjWwvKoSJhquC3qvByRKHR1NbqXo7nb6mBxnvyxhA7Ci4P4JjoBcYdYSBa2",
  "key14": "4wnQhsMTZYM7mzpPEcVuHmWVHxUhYZekhYHscHfwNn3HWCsuw1DkkiMtZ38scaQmUVogd2iiEnLirz1eX7ZHZ79z",
  "key15": "2RtaXuGgHAKGru69citKyJTb783xENkYzYr1ERG7vtb8mD8REk1sdzdomf71AvpXHm5XmjqCM34CigSNwPSM9Ldj",
  "key16": "2mB91ctsJs78GZeQ9m1y1F9vXpdjwjHsM3dcv3edT2AmkXnob2cN1Y9bALcRZp9W1Birrj81K6nQNhFrkBH68jkr",
  "key17": "3dsFFPtn56vnMpzuKQjyGttrn7mudmkcfn69FQLXuB3xhuHwiJd5g3NAX7PGsnAWYr23aG3b6v7CZqpPfHePYneW",
  "key18": "3BSXt2Gieq51RNeirbSCZRbNqESUsq81Vx2uppuJQmum8HjigGG5cWeufz5mJqsV4XarGSDFXY7CPkBKkPWvv5y6",
  "key19": "3H9ZrwmdfpQWcK8B8ehKp9tipVuFxmVtXqtMXjZvcewLKB41gxcyUqcrExuYVUadggtdJNyFWjTtk5CuRviCc2aS",
  "key20": "MHp3VFm4ayfrzcWsc9Kg3SAgffdUdrLiEkTYabXS6X7VpTRQVvawww3uNUmM3iXe2mLsQ2qDp4ER8EJy63dP4Jv",
  "key21": "589DH4VLUoXc5gejqVJEtntJituFuE4A28zFH52gNXPojbZFk9YbSeP3W7XfPJF4bnF1m11o5TLCyedphd7oezZW",
  "key22": "5od9kErVDV8WaDqarFRMGHtKESNPnSS4FrFsBuXAdEJ171VuYp4MgQvRCA151TCGy6kpQe298n8XSJ5XqVKnXzM6",
  "key23": "5hfCE83MmWdr3hAC3vsPuVzXEPkeEYvEvL2wTeGZQJCsmU5WfRgEY5Fqs1exJvEMYAgCmdX2BUazBLAAJNjAftmH",
  "key24": "5Kjpf4jnoLGmg9HqukmxVLpJywyXwoSWRbFBxrBULWPvkZopeaSuVS9hV42fTwyut1s9gVr7UU7A8xVLufrDMNG8",
  "key25": "3n734cziemxwCqbaAvQwqm7fZnqkd8gtXXQ65vptzmUjqnfK4d8AwzgDDyuHLPjPwrsdBNXJnp6H6tYvQQdxcbL",
  "key26": "VmeX676cHm57Ce61u9e27ZSYebhsH2RUzNxQWRE1nWrxngnGA1uASCJn95kvwCRgZpZU1aG5hNtkw3sA2k16QTc",
  "key27": "3eiLfbJfef8kEfuLxpzysV8AfPY9nTQERkppSoG9j7M8mQdNQBxKwftuyS8agGCw5m9BQcFmtKAMB3UANUTKbaUG",
  "key28": "2v4ag1Dhiwpq1HR1saFKan1BFQ2wEK5FRCksZxtk7RLr4acwLjbTq4CwTi5zphUueBZ8sRDSnTEdpYRgpqkrrijh"
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
