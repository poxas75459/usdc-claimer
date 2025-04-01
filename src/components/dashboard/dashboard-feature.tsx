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
    "5RVcw68p5YAWfLrFDmXeZvwHTpMPNCCBaHjmRvbV2rCNytuEZyqpz7YCo1oLH1oWC515AWhLhaUtT3Uio8KNv3g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rFwXa6HFcbgf6ih9veJPfgzEEb8wHkjyk4jvy53acre58F44Jq9nZCgBEjZZZgyF5DmgkoLwHuAM3yPpBaUZJzK",
  "key1": "4xMPpUQK2rdFHN6cQ1KrXVpo7tTpNu1qBMrYYdnj6whuDAegF2jb5Qqsp4nqiYsWBZ7kZj3jwDCyJ2vhm5woLtWy",
  "key2": "4tDyMG9ZMTd6xb7UViXNWx42mpTkzj9inGvDNBbpjWvkTjAo3xpmNTTFndzR5iwPiZxPUZRE3tJy4vmyTVgbc5Gs",
  "key3": "zeGVGNj3ND4T9Fse6jp59xhTqzNKA3HJRixRNjFwsFxn8mJ4uL6YtDzCw8jh2e27VTX6Avm7tHPk6Kj2Lqu2e9D",
  "key4": "5EDZKpGqCs13F5BqswXvHHAkzK9rG6uYGf4iW3UE3cxoauJQx3fLe6gVBGyBw3EMTipqA8NvxCd6JdPNiohgw4tL",
  "key5": "342nyapX7vUh8pL3VdKsHc21PEbppjuMBqYJfvgEGLjmRSixuESkTyXNs8StxvJWoRWNVQP9oFApCVqtCkKBcts7",
  "key6": "62os1ZewsNv2GoJ142rkENn1yAAqysCC7DUqsUyQryd1oLusy6NqREZiJGicNb2K5jHJd3YZgottoyZ5PwFAb7EB",
  "key7": "4EMbyaL2fHATekTve1b3bHpK39hntnmgANKm35stoxrH2yP3VUu95sBqTHoaVjuVPYM5Va99u1SdMt2uHKFJ4nCS",
  "key8": "zYhp3m35heNRgDmqnaKU7AA3XuriFxHNnVt72XTQQmDkNKHRnMY2dbLtYaesByWDKxAT9d8ng8T3bXYSQdxU5Xn",
  "key9": "4GsJKhDirJm65VMg7UuPLsNQiT53vPQLTewe5ChLmoSB5U6sWythfqGh1y2zFoVY9VDf1YhKTReru24rCPwijCkf",
  "key10": "2BDPG63YGGoR3gYjEY1nGFMtSuT5FiMXwRtYuzB24DULWJuGu6cyK8RVyVac4kDmXLNQefe5zFMPkjDHNo2dwVUG",
  "key11": "3Gov7SLpNUwRZ74zBJEmksRr8MEbDmibtPykgQHLU3F4cbyYeCxCeAegERHBYKxSeCw2FtzyPjondMpQc78ZrLJq",
  "key12": "3osN2qfhh8Bde4zJFHSPEMEqUmyfkoJdCzKXE2r4YrHwj3vsqoWjYWuQbBeAujaRvE35bBUsR4RDKhywSzF8ZqX6",
  "key13": "2pbq7Ep9FEeknkcsCmRsXvadNJftww9AfPdTAAzFs2myhxZ8hNd1yQkyRd3F5HnPQLr2n6ULKUhge4p8r58NVX5h",
  "key14": "555KmEPmh6cWsD5RJKKVREwNvXdQ4fajcTy3B3EweZVmkpDgQz2YyN1qLYBronMUfkNDSdE6JiCPnh8i3ubCJH7X",
  "key15": "5h4ufyKKeGp299DLRNZWP3fxPsdp88DNn4CTrKe8Yu3e6jhZJD4wzbdJBFKN2ZjhFvEMUnFaVAwr6D2kd2Vn5nLB",
  "key16": "4YwURt2QEU4fo8taaaKhpJb61QbxXbpc22UjaDN11gqh21cdpFJbEvr5zjNMkp7dmZHMnKChwKncDJTs3QmVVPfM",
  "key17": "2Cp7QQtt83jGf3epCfNmUaTkeftZefHGsvhwU7Rhmxe2iBceD63jeSvd4vAvVFJNJPZA1zbK9HXh4z8pTXVwX73Q",
  "key18": "2ZafTzDTNbbH2DikcqvCvDQLiWSnW7KvcsZgjcwxMKY5w64AnoipYHfQXQX9NUyshembJMPHrWeG3AcbsSsHGKf2",
  "key19": "jT5T5aggs4g1F6XP8WyvLfA3fBJrVWpD5uYfyXzEUapAbhUt9sSbp6Ugd9EHsNcZWby55QWeMM7XwaJAz1QNjDb",
  "key20": "2yhN95jfBJzgQogsceu6LFScgu8DWcnnEz9Qx4BZyHPwp86ysnHqAc7rqBk39wfVHC4eFztPD1ckEXoSYop8CDhj",
  "key21": "3zYxRuriNtn33RYmbdQaRJZPu8m6yxecXSUeUCwg7hy8uYF2zo9PchartSXkZGRavjYJ7zGNVKhuVcUJvyWWquKd",
  "key22": "4jDCZ47xG1CvWYktWGPAdXQVgaBQCLQ8yBtagDn3TfWAmajqoMRVF55CCDb5nixtEsR13bYuCWsD2PWfuR1GcJQf",
  "key23": "5J9DKVjxLK61Nh7gUytFhi2g9Rz4iyKVF8nBwz7gxBjXFCMUgmjjg4WKLhEDRp2Bmhsr2Pi94vqQAEugE7YAAJUu",
  "key24": "5CaFtApb4T5hoJszT3QwRj1eP8khgJ5xbQ6Jus6Szo4fjGGQbHtD3eCNWfhZAMudrvUYzDwwUvcXJhYo9p27d6WX"
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
