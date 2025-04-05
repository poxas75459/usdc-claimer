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
    "5TbPZc4zBoL4qBuL6v9QwVw54V1A5CVdd5BcmKfNRfKNcF2dibQ8ZFnx5NnqMdU8HCc9XEpSPJFRr4ZuJLL62HTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogSkgxEizBKu5GjHRpnCCxzNkJuhEkCwHD63arSsXszzEfnLaqmYEJ4vn7A9HfwCb8spdvXqYMNZ9zxg8nteMiz",
  "key1": "5yKsUuXgvtTJJmUtnBYkSaswSVXkWdciJ1WymsFaY9gxqgSx64yExk2rSvp5jj3YJvQMDKnnRmMdvqyXoZunT3mH",
  "key2": "2fxTdbQSERYWyvu3BUQPpQEEbhGQTUxsUCj6LLgtT5ewykTiqpUrq4ZNP8NQ2AUXdYX5A9XvDwqbv5fC8yqGsWjR",
  "key3": "4hjKY9sRwh5Cq5NaKv6XuoCGb1L7hfh7b7WFoXM13Kuc1mQem7XiacyycHeg2NZsd45YagdurPU8pMfWFxZgsWzy",
  "key4": "5XW2NvTbTtBw6ECJvXm5YsWDeCzgjeUA4Vab9ZmRsxwYDe548J8cnRPjbYvwi1tnyjgeER7bVDxq1rRwtaJpCfco",
  "key5": "ixk3geR347BFzwSuNdVJMy9bmbUJb3WdgoYYgfze9STpJRXrhWzdY2qBM1xXcd5kf4f4ZXQXQ7zedJbBZPyzkRs",
  "key6": "5sUiCBv2RT39U5B8Zk6qXaqMEzVxHD1Wz4usLhG93ufzbFye9LidSPUuoMosZeMajzuDdFyHGxA8xVWyc1Y1U9YZ",
  "key7": "353eyVJ5stN5iqqXQJHrdwcHJ72QfVXVk2sQVgNv8aDZvEyAvgZhERdDGqMFEQvvhVzetPzTYciPiUhVcXGA6s7x",
  "key8": "4jtzGdJtM4pgQx6mTPGKePdiaV2GULE4RQzHD85r52Yq5e5ACVzwF227fiuDLcwADNQuwnKieoCqH1bSnjFZx9pd",
  "key9": "24EnBfj8T6sTVB3mCzTfC5cXAEAAD6uKPdJQxp4tCSPEv57aYGJxg7yR38yEcwSvyaWcNF84qGTiRJJTyifQPGuH",
  "key10": "5J7BUdxDVfPv5UTSoGDpve7PkuTpRVasdixprSS7hhdoRnJQ2D6RxxKzXUvVZYoK4HHP5p4UfES9jPxD48Hqjf6V",
  "key11": "4QA7tdfsaLoNKHrUJAVLqMisqAs5uxrWj4PAsCnVqbYqchKbtLRp7WtfZN5xFeqCPAY15xF8F9dktb8SBD1KsKvm",
  "key12": "2nzkkTv85sbKh53x6c6fdPXdt4bTsSDoRDqq2ES8GnN4zcbqKpF4Qcoktn1LJFzjK9n8TRzyyFq35JLLBzd3KNaE",
  "key13": "2imc6v8xrthV4MWh9iXSfMwTr7kVqw93mN6pye3YaAor6mrqREpCg1yMtSq29mYS8We83P5kybGAQ3EJBMWXjUXY",
  "key14": "3KqhiHAaSZzi94iSqcq1ouK8398dz2PZaSFfc4DxuH3bSVEpysU9MMLkMy5tJhip6wyUoxGUrsZNsFRTAENCMzWD",
  "key15": "2jzi93Sx74UoB9LGfqoz57ZL6PbR15kfbxK1B3zGQKNZpr84eV4tA2toAGBiqJEUdQjdoK8jE1QT6sMpy2a6Rjix",
  "key16": "Lnnqm5GkHFXHg1v77NcTJLdiv7Qjjt24216LFTQKnX2C5huhu2183V5mt4eEY2BGtx2UvD6GodXWdp3dZgC7W6N",
  "key17": "3ceMy7wVrfb3BpwnnJdjYo9Vq7LWFNsWLNSFSB7HxLquSiNFmUdSFYzcHHFsqfwBjdw7iEjZRxKaBUGgPuweBkm7",
  "key18": "3u9FK9ZJFhsztjdXpYeywZCJLQu3ZA927TRerMjmPLLANRXDSf1JX8zikTCXtEKj4K6PhVRmpQUzHfMZ1Z3ALJZ3",
  "key19": "21ZirnWprEjAx8pbe648rwrnn13dXMsrmLSG69nhtfWPdsCGy6R61Xste4NK9suDzePVaLMF252vcxZQHbszy7AX",
  "key20": "3184PodotbBMJ7tpWUagZGVpAMUqWP729MGgLARQvMPrNEEAaSC8kPWexUkYXz5gAq5pnzkYR4iCs3mmLGKgyqXt",
  "key21": "5adhTrWKtdShsTe9xr3yiKSeXAJcxJfCaSC2gNaGwStRHjRZHp4xq7AXej5qHzFj8oqVcNsVgUmHrkws2tAYiYr6",
  "key22": "2d5ijnoxxwV4E1RgYrhqmmegRdcwR7Fz4WihutVHepwKpmSyBMHjWP3uuazvXsByssgTb7ZWUNhkJkQsNWpC6mcB",
  "key23": "5eQy3dMADk4zDdi5CCAQ85rYtLRSQ74Lyvx7WtBJoXcQF9asT6mdSxXTDobJicSSpJ4ZpDrZwJ3uZNRCFVt3Va2B",
  "key24": "5ppKiry34NDB8GNuBYcjzKkqzrY6mgKo6uC54KEAPubZoduQFYZo9rungDPPRcdUWWQyPq6RpSRBtRqbeVhNcvfE",
  "key25": "5HrkQDE3FNkey8MHg5hEd7MP4TC7hLdudzjGiMJoca5r7uWKVeMNaNxY7zjsRLZu4TDuXugnDRGPhVxAj5z8Udsf",
  "key26": "1TEZ2DS27vqxYGJQJ8Tb8PFyQGH68KdcqbF7VSvsMSxb4vhweJtjJoPLUGuuboy5S5QRKeTRo9UwydQpJWyreg9",
  "key27": "VvgAa5TR45Jk68KMybkVdA3fmFZVdpqJ7D5WitRZjyaTYtQeiXegnsh8o1r9wLdzkg9GqyAqhdbvizwUKu156Uu",
  "key28": "31qX7Ky9xEWSJBgnqDmrj7zMN96hCZ6z1ywmAWnaf5PQPkGAf2EdypDiAUip6E6LD6mv1guqp6vp8nEkSdZrFxPT",
  "key29": "28CKBWAcA4tsRxXv4RrDkYYhLWE4FEBPTczoutDv9F4dDuAf1d29anzTjiTGrX62mwCsQASt5dNT4unbUJSVNRFd",
  "key30": "3oW44mSE98jxsRmuD7WF7H4ViK7CU8YGxvfy4MDshz5f6FCtFHtNSPKVfQU4CQHM3NojLJmquw5MRKbcKrgFaEUV",
  "key31": "2SaduqJRHabfkKx4EChF7oaCEkYSVEecUrD4pD8uauZXYg4V4YndKN343WvQBeRtJQ5M7pYLDvZRRScaoFy8UVMg",
  "key32": "3THxZcwJTJBLNnoULoffTZUnEb13NcUos6BT4FwrxDx5epccUyxFLVwxRFZk1B5DzSpHZiHXWyDB9dWCG5A6xwac",
  "key33": "2gCHJzdLnS1uTUvjAd6FeY3Vnk9hnasrdXkNxL9FjzhJTUXo1VnNooMQ8F8Zk7zdkfW1g5kQcnRX6WFArmLxuyLT",
  "key34": "5TZ9DMm2ThYQAhgtBjaBFf5YYzxUR9KBpeZmMLBsSt6mMTcDXP1yiEvrmZkGBycf4Jak47Q9Fgk3u2LV14pemDKG"
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
