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
    "2qNEnuLz9AHk4Ddz3zcjb28niMzom2ZA3CY8wVDUg2yk2D527qS5u17CRBzV3NHbVFLguGPbYP2o7BwvLu2SqE9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YeXf33eLUTaE6tAZkeXuEszqfegZKTgryyoUJLG6CiJPvm632N9Drj19BEr8ZLx7pj5SwDGd8inampQr8HV8LB9",
  "key1": "66m9XzCJmFv1V8UzPBDYBdGz6EP4gmh9NpYs4YTHFDSLF7TbvipUKpiN45Hs2ukcrUb9wexpfZEbFN5NXJLJeZcP",
  "key2": "5Locf897Bbs58zKCjjq9oPhKtNWWiyHtrvk7QeSXD5CfCd1DPPtUyN89JLH3xsqHQh3mG3zWnQUQoNCPRdUXuRa3",
  "key3": "YP7R2T8h8NeeutdpLBzAjumnxaM9c7o4FG6SDiDCv8ZC9C9NYMQvT4nPXERoXfc2JEVw2ZFpB9BzD684bmXGdX8",
  "key4": "2twfLZSUwL1uoLSpAFSizQSE8J2rJVhhahNA77JvcQUvSesqrGFaoToCvE3qV2kdJz2ZAL2aq6ibo11AXZC2y5vS",
  "key5": "2vVUE4DMiB681ovoUU1JrqvzEFvWD9mqNHfteh4V92b593J6rD1C5KHUjsgw4BBF1XNarJcKvDo8FGUDeQin25Jn",
  "key6": "uArXZfN74DyvBMxHdcVYADVsudxkBdX3TG5UC9buh9j3rdTCfd7HC3ytQKGNEbCmFQWpT6w1P1e8P7rHokDJuoH",
  "key7": "3MoDdpat8VBug6HB5iU6CYMyccdKZamtnywJLTyonJnHawURmfhK7zMxLczYuZ6FDN1Vy8Ho688RbBo2eJEsKRWL",
  "key8": "5sWNaFCJAbeZHy35Yxu6y58rJa9nw19AjJaBkmXHViq1HkAhTmfmcbFTBStv5RRjEkF7ur9BgnmwCahjydb23owe",
  "key9": "4v6hayYquJao8GGpJaGb1meBr1JoUDAQmYtg6yLm5wDCxhCWijt21sJiLmdqQLdKeULVnVALBzQ7Pn4JDHUrt8fQ",
  "key10": "V7Kbc9JnN4HZoNbzJcio9EyS9geNsEsPXd9uSrNBSC82pRvDqM6ypNJDfyKpc3tDQQHh1pZtqrJ9RPTxkDCYuC3",
  "key11": "r9oix5PwYSnARmbvoEsVnnxP7iARbmHHk5ts1mVawgiSi6Pexgg3Ja5DJAKbbvEeaZ8CnqfJNnZVbxBQuW4oCAK",
  "key12": "4MDkiw55ZcqyM8nD3Q7pUqw7hcuG6qfhjRJui8cNe2xVhpFbZdvuPctdreR786zg6fxqSmWztvdwNaRzF8pKzPDk",
  "key13": "opGkSZHGxn4qoLD6fJEqHRto5zPnsizDdhWmYHZiyVx2RfRRjVC2PunMKVLe7rbCBUGQgjXteLzGDBvNUAir54m",
  "key14": "4AnaHqg7KCg9UQjGsBaLuJfNqFd6KyDjfWdNRUJ9zPEbpUCS2WpBE9a9xUkhhh3R5K8TJMkhcp6TiVahMWrxoynX",
  "key15": "4uKe7eRYR1tY91RKWVXouJRDh4yDmuSefXLTwgJkdmu2Q1ZJJi5jptc2pLKPu2oXrCvVkgzAogpwcLNZSM6tAfbE",
  "key16": "3qJFceMxV9MAh5XCGEXZ1AXw2bhdnf9zcrwXVzuT8TkAtHBVEqkjLtnUSSGYSBD7d8EVHyyft7MqGLcUUzh8xQ3W",
  "key17": "2vMBSG3sdffVbkipojBS5NyHscDMRH6vKyuvniakH6gJyy89WCEmCmWMQxTeTZ3nE5p1hJbknCoj5dYoj5MyuZrf",
  "key18": "5C8SxmgB9bjogrk7yKoVtqmTpiBFG1c1MW2G3MUqLfC8GzRQQURpwxeVXaBef7BMy7bmqtVRjHwhsGFbGxiXEDXE",
  "key19": "5nkpW8gk2hqU8bmnVdTFuKVTeJT7cwW3BBMMUYFKRaxbFqy9859oFveG7y8qMu3NnYoVnuHwcGjLhowvtNwAy4qL",
  "key20": "2pQ1SkZEgb8WGLAhQWueyycDzuh4CQffuQfFWwBU2P2Ax9fbtXsBi1si8dczh7V2mRuwZ6tc43ZXTFSiLnLvT8QY",
  "key21": "5hDAgYWDHWChCK65ijnghzaS7e3SvZXwiXB3LRSg7TPcVtBZEWxrBV6451ARRN1aYK4CwNGjUeJbTF11vMe7uKc1",
  "key22": "3CD5J1TdTrVjButhEXr1829gXb5Ayy2DZuBhVNeNuGpvSJbm8jJeovashXYZ24uZC7iBL97iRJyZGYgCUzArPDq1",
  "key23": "4ZDfJmRwjSMHe9RBStjbj3k2iA4wRatgu5iPziixQVt7NFMcHQ1uhVv9uqvoE1LDjde79HtpFhpm5R2Fb8stu6t6",
  "key24": "efe66gRus49aDsKky7yr1UsgBxMavXcr6jkRDY31pR95hPgEoV1KSpAxNEGC5pin9v1ZvdwyxrzQUy8UKqSBvAo",
  "key25": "58GwdYRpBZkLcKKKtNS1eo8dLd7eES4uMPmGeoXjFVeh5nRqceqLmT6sdcXXEcep7Z2wHfC8mfQgLuffZNWMrLhc",
  "key26": "3osQWUd4cz38AUWabwnjAgcti9VfBvro74rtUyhKp1FjcKGxgPdeuEFFFzBh5pDPSzSeXBbpoh1kgzrSmaWfdxqJ",
  "key27": "4M6xRFAqquWrk2o2gjRmgyGMKkgaJdzxydqjEdodRDSZBuKxdHJHoHnFaoioFmcb47JQUTVCNgFopyUGJkfmV98W",
  "key28": "2WjSfjBLmbttohiqbzgKBPSsmWKZCmLFN4pDkGEyJMbiR7GSZs918rHSgwRquXKkTc7JtT9WBDSZ5EF5hG9SpCXG",
  "key29": "277A3fvZYZ7g4BTMggeSxbUoV6zFHawDRH6Zj7in8WZ7gorRQ7VnZpewEhYrBfqfJDmRCp5MqfJx9WCuBxxbRDHU",
  "key30": "5ZTNQ1bw476D6qWW5VUwZXTfcHniEo1Q3yqCZkhBurJr1HcgwtDvFNxkZPPdbSghU2JtWh6dLyr7SkLhdWtiUin1",
  "key31": "4TchwdiSTXQE5p7bTuBEa7M7PWqqXudKTnhMRfoB5VTmAJfehBz8iqoJgwc6r5oCangMqL6iBb8eQWweWa54KCdu",
  "key32": "4Qza1YHjHxDUsQviuusa5NsPTSTemCWLWdjF1aTmfRDT1gkStLuSVZWmu1PHJKNCZGUa5HNFcc5t6geJKUEiJ1wR",
  "key33": "EEVbHp3oqnvz6mfhKcYZ7j4pyUMrMvZA2tCamXH7dsTQuRiejWjZcuW83UYh4TiZsTcJFsgM1sdJVzVfvGJLdGh",
  "key34": "eiEVT32RNbBvL3uAXc3Gb4iz1vY3QcHNXrQpakJkHjPKhgEBn4t3EDdgU16yw4NBwNrFkxGDJwFqt1xSQLQpLgF",
  "key35": "3Yo8AwUdNGTdwAoKZNsMEbE1uaB5Sq8XUSX5eM6ekM3f41D39QU9JXQcaPVVuJ7oiR9EPq5AuULzvgLNuLMfzqEv",
  "key36": "3BCEPi8iQUaibtMzqgRi1bqGm3dKeLEf4zCCjGYTuyWN8eVdv5qCqnVvX9gGivp6GWoEg2uRKYLwMnZgyn6GQfKn",
  "key37": "2JPVUvEYixHJJDpgLfXmGbGKCGLfrzSkvP7hzfk4admQqduN2yx1wujXLM8huyf8K5Y11BkuUM2h6MZsG8o2a9zz"
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
