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
    "5FCvJ1FadqEMTpYBF2b1FEwJd1VpLVSWXYC1yxRQBqyCa9DvE3BGZgzLFCutXnuLrQtiEgwM2Z7WWYc6Yj5wLGU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3Ar7x7W465tX4NU8Uy4gibXZnqHsUeovqRmNvwYTFzkxofjFdyRETRMW7MJBL2hYrj4gmwHTUSkJ2yNe4j4U7E",
  "key1": "33xzPT3Wg2r6ELNDE4J1iUPSYvCYiwrjQTLvpnKbCB4Gk5smq3NnPAH5zGc8ZBgrevsCsP9EFK9SCA17CeMdUG8R",
  "key2": "4BVWYDhprDbP5wcPCZUtQV9wmEaYNaACVxu3rNeBZ8gbXQkM92LDkkDdVicbWtzaehcsRYbQffRNxCUgFU6fm4ns",
  "key3": "kUxSH8cy9LqqTUuHq3Vu7aVWZHYtiVQDsEzxZgqfmZi8AsCD5pMGDsWxkUA2PLF92sDdeArfy4qX62LFU1pVqEA",
  "key4": "WDvo6wBcuJrraQ5VNfgKkKjzdwZ1ui7Q6gH7u2A3BNAhpdinPTzpemZbCGqh7gQ5B5WwT9FnxmMge7g5a9wbEhn",
  "key5": "3fBnKx38xpxSb9R2cSxjSmW4VKXaSVG4JT7GbU6tH1kbqc71xEA5QpMu7hksFUHFhy9poVh3Mkw6ZSshGEMmwVws",
  "key6": "4SAXH3YaLeMxz8FZWSxafabgTC1swKZurRkNqmtKYRBRcmdUQ1rpm1KCLwMT2ULVGMhZYLbL69GWaiVSo6g9U4MK",
  "key7": "xSmto2z76Bcsga4koWRd48LSHedwqyfbyrb1mrqFTHaX4YmEKg6ap9UoYe5sxsvVLDtf7t5LR9Mqd8yMKRjL7Ki",
  "key8": "73Bht1ETTgwe9XZQTHiCHQGDssHhthZNeJCTGJS8QiwMz1gqbxpCy2QMhaD7PvBoaSKQTRQfrobyQ3eHFQPLXoF",
  "key9": "3LM1RgHVkLQnq43J6HtyAGNU3ndwRm3jC5z8cLE7q8hhFiSZykkSSTGpWxc5hKmnUPd4R3kLZRVDYT9mJSSnqdAF",
  "key10": "4Vs3QUzujUj7Mbp564XchNeiJnJCZKYyZ34iitDc9BdmzZZwAnG9UvL6GY6abMzoUvvA8Bn5TmNBfsFFHi1J3bHW",
  "key11": "4LV6HA4CPcjA2jVqvyCspni587zGGPEDigThjztS99nPVSCvoNW2ELtFhHmXt8bsvWJfaKfmJifk48PLvNWjYe6E",
  "key12": "42He91jr5kQPdXTk1XyJ5crmkjin8LGvrn3LgTKmr4fxG5fBunHFeiaPi5BveSYfrDiuXqk3Zh5t1wdv3GSYe5s5",
  "key13": "3bndGviMjEfdoRR13GadrWzgWq6Ba59pMVXjVJgvRhpv4b97b87fom5wCxiXA3tjYpbB9B8UvdffEA7EKscbv8N8",
  "key14": "3LPijFTjziK24tzyR3WqUPCJ1pYmnTRT27Yu7bfiFifVpouML7oqmuPaSseaLqzvkMK3Ww7mrXRAXUBCyKYT5e8u",
  "key15": "4kRzZgPDstRENr4MEvThXdqcCGNMXk6j1CP2VjRGf4CWqT5GiDVZzrWZ1Kqr1hZvL8YTELMPKVe3JG7KZ2V7n7tc",
  "key16": "64rjsa4jak1G9ubTs5URTrCL9mXZ6bjTKghDbADk25tFT7oCn6iVGwbQaV3hgbTH6YTLe5G5RN3LsHxf6PjhzAdj",
  "key17": "2mpiWxc2cQWtedtd8yUCEy9eiPnVSH7WMF4nRWVsndbH26kv6Mk6Y6YG96p9wrBrfqceMoxT9tszXDk84QZbKSHt",
  "key18": "4Cywke4WzJifrMRPXmoaC4KfvcW7eoZF9tmKLzpeQx3aBFGyVye5hDJg7WY9nxewLbVtaosxPhkg7KpR4eCn6CW1",
  "key19": "3PMeYZNhFfSMbNais5FgFSWJEF1CLMNnA4PxQ1jxRmLFJGDb1Tbmg7osJjhWXitjGzfu6zB7WvqAy9BAiKCmiSw",
  "key20": "2h4WN8aHsdTpmq9mU7VP1mRyiDmbHrQRG7N1zHGAM2g46jdLTQXaFEqqWz9JasKxh35bWEvNqDoqxdj9QjvZ7arX",
  "key21": "2TCXW8uk9bPHuYwqpMD71kA5H3jiC3RPqXT5SBmZ8Mva8fdpx25gCs15VnmVL3YvkKpU59dgaPYMe424XZq4Ro35",
  "key22": "4eufdRxVp7dzYDtNaAiPuTAeTid65wBk6Tih8Zb94S5hRRMNs6oTF3Jqwfbjb3quuWd9QdouvmMa78Wk7PWAvCgv",
  "key23": "4vcy7JL9kyiqtE6KhGeu1xJQDsn5SJtJjsDMPdg2hq3m8Jz9m2dsjB7ny3LhcWgqftvL56RWLFJihB29X519JW32",
  "key24": "52LZ2Yxcmh7YrDneeCW2De3Cvxs55Axzi2eHe3EroRz6ZPqDTGS6n54Fr4TXCzYpQr77zSSPe2eJKw9ihmhY5Fsf",
  "key25": "3ikVx187kBxRie7CJJcZbuMfRNRoFNgA43pJg8tn5DwMNxn4PCFScE3JTZN4s4wTuEBFatfgCLVSDX5SWDBQnJqs",
  "key26": "5YxThU4hHUjPpsCQg77RBhvzxQYUXkfqK5HNd4CSdDEvXSNip5Cy2mUsyF7qpR897Eat3ESfjHRCJpqqTzbPM3iL",
  "key27": "65q5ZaUWcFti2FvQhhhL1XYm6S6R4ncgRMRNBihNAYrpr1URQjfYQ7K2cLruHj6agPfBF8Uwgk83eTvFHQCXKJUh"
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
