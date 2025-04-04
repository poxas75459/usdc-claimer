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
    "5mtS4RzkgrwG3dz2s4PRS34qSFxfnKakkFNLZSCSRLwyLX4KPGqwQYKmS8ckw2J78wiHsSVbDyFiP8RQVJ6TgsHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GSunDkBPGbwd8kGqdTMdoGU1bwUoNqELq2yC8BTAGnhNTRux4QYYsfVCPmSN9kCjFPV1CAytrv12ndARaT8NGpA",
  "key1": "4GdXhsuc1oTRSuLrZYuBTxw5tsEjP1FyH8Qi8rFvGEhEXiYYr44TTsHScYiDBZrQzB37nJv2RWY4ZFhvED5Ehdme",
  "key2": "3d8TK6ixL1HDwrLavgLCk1oh6H1i9EJEtt1fPBHgTFLJ1YBPFoq9xnCPcBsGHGYTnQVxwsJNzAH69rN2xq9zgwAA",
  "key3": "53nHK2PSXnGeWJorus4HBirSohMAPxbHGUXFo9TNjsBSXmypNgVnofDyUr4S16wH9qiNNnRWvYnx5G5FAR4qEp1m",
  "key4": "2CGT8fzEr2uqp8CFtEmFYp6UQRtpNKHNgkkiAZqXFKj7f2rT8f24kz7brzPPxn7okuiQMUpo5hNwRjXTZFp82U7U",
  "key5": "ZGGFSsNg3qQPPiWJVfsXnhERy584533Eaz2rSv797YCQU6XiZgEur7CjrKPwXLFNMydjwXaVPUPvcCuivxmYyrw",
  "key6": "2pVyecDihJuCjyAxG3pFfdmv447aaTmE1S3tRKUkEAJ1YSoN4ZF8fjegkUaSvfVAdBkXU5UDJGWm53FzaajNTAY",
  "key7": "66Gz6Lu9g8zKwgpKEgw4vaiXgnBdCocyxsEpfPffvJDdE3duMRDsFuas1ExWLqGVcqSVs34AAS21itn5QncbCCME",
  "key8": "2BtqSRuZ5S2Aiip6wgUS5tgSUYBWfLfrxDWts8j1A1EG1rpuMXu8aqMqZJktXpTjaKxBWRBTm6jMDCHYssHfZrEM",
  "key9": "5S3GNrurj8qx47iRYU4JJoVuncX1NPkLJt4Hunjn2g34BvbhqLRwAm89phP19s4fjjgBwRCSLSd8eYfTogWMykhM",
  "key10": "3MFYH8CBNC4sKEBv76C92YbUUk1Wb2YKvrLbqv8UT4uyZYAR2FSs7DBTpLyjhuMDZEtA1Dvwq1X2Y5FHfmmeDhUc",
  "key11": "5fJzxVZFpaqMBgE6EbNpxJQj7ox4b9NQtr6ToB5UgfJc1b1B4ZBHeL9NoaVd4xu8ZyawdwRXZnUVKkSt6uMwvjSH",
  "key12": "2YuNtBqUbXY2KtYgUPZ7qAKMzQ1oD9ykJ336rTEt6ykHzYPtiSsiaaN4cQZKmy4Jj7jExMz7NuizDLdqQUjKRPr4",
  "key13": "E11x23iZ1DYDLsG8o7KZPfURNFVeQKEugrvkoQGvxFB8WTnLU3V2RDrtTtHLDx1Fd3nuksebHpg8VWGJHscregf",
  "key14": "4DTs6T1hCyZcSUeBoJsaDiNmKjS9UyXYG3zdkQ3S26shE6M9cHjRCY3GgGDWpwaYeLuLDztKNVJU2XD3YgDF5vez",
  "key15": "29L4mCpVuNJ7Zv7CrfNtMxNyfPxvmxz34YhV9pbA3rSoZZxUC4m81NMpsQpDJh7vUJ5LtGz23D7d3ESve8iMAv7k",
  "key16": "2tgRAusg7KoQhEAEknbEX1Xkd6B3jVXz7BhuFozTXoNnuWQyrokJd2T9E55yW4ZxMwpvK5VPk8P2Zj3SmnvackPw",
  "key17": "3RPLJTzuCDc8e7DRoyFsfeMJfvZTruumDxkXL1Yqm9iX4wwCcxPc4NSuCD1dg5DP9qVmme37yefzRTbjvoFtNhqc",
  "key18": "Hr161qdbiQ66q77CMmVwqzNcptjLbZzpAisqd6yGeKdJJvfFEsbCSXQY2YNgrgz54HDzmR5jMMjTi5RkBRoJxxb",
  "key19": "2XcGgVQE48cVf6C8t7E9UrCidwbWAgfxwCU4E46wV8UTbFLQxovVJy8VjLBVQC7mC8ku1ZP5yxEKceVPwi2JJN8z",
  "key20": "5ragkYW7ySXqZ5oTuNgDcVaqrF7NEpRMjwXauc7ggd42hZm7yc1hTNJGu98FEnnXq2VVyQSsNmFhLiLnh9FA6yM9",
  "key21": "LXUGupEzJmSk4q82THSp8vSerRNV58rHYpzmTJxN8qggwe6umJiRHR5EnVVXwKGRzELMmFRAKyg9bpUE2ha5kgX",
  "key22": "5uZ6NWdn6sRQTJZ1JK3oBmFbQVgQnkQzHHUazdKTpG7Fg7Skw4VNdWnTNvrkz9Nakta7szQvZtZ5MZPv4uhL5Wex",
  "key23": "3B4rr4FedowBZU2dYCksKtLNTtY6YCPGs24n5QFC6ZqrBENk2fUqFXb3Faycur5vyp5NGDTviB4sBUgv8AqgcC5V",
  "key24": "8VmAVq61vTJ4yMWyafsprPQqadPUBNoi6MLsT1qfnsdVmppg844cExsMwBPD8gnfMx7K6GJXDGDcqsQ6rkngkYx",
  "key25": "5nEwz1fknZoPT2LHyzu75Wuz2kVjDnVHLzRhGqdJHpEz4fKLLH56TaJSZRopkNH3c7tF4fEQPJR3cxXgYpgTYrUb",
  "key26": "4UZ75ywxNZuFydRSe5UNz6Yv1CHJSoQzck9ePHmWiShdTQ5ZxGrMFx67ZAEeF5Tam3SAdCKWocG3u38mK63RwF7f",
  "key27": "3dN2JEXDhbmv8KpCuyUCsGGK53fFokJPxqX1eNvsc4Uxpn9hYW2v6Zi158oeLtikMC1G2oGthDjC9WVopCmtgLEH",
  "key28": "4aj4mXk1eVpstk8aKBtqnMZjxKUnKLBmqLF1UtULoo4PfXKqFmhhSkLqhXNTwBAcGaC8GWCXs9bxZrtG3JrritkY",
  "key29": "5eQK3p4KZg7rLVzK5GsGU6mA79dkad3cZkiyyfNLcfN7hEc6hDTNeCZZpJTjWiCZrXthBwe6HjeXh3jKxnGmXc5o",
  "key30": "4DyzQafmRSapPWburDGAXkhkd37jZiNKav3EPLBVtVvHMG9eUWSX4qiDPw2erjQAj8E7ZmesZVpaUA5x4AkKP3B6",
  "key31": "4p71LRnj9rXuWDVxeoft3TChiRv2BjUKFj8R4ujdZ4sLRPqQJksc3eWTTBzzY3SwpppqQJxQLARU3Z3kYJqncjzk",
  "key32": "2TuMkh14UpFLMtrKVRm8Lj5DnKPpgBAHwSKRqF12DoCJt5Z6Nwe9yLXbEb1YiNxxZU7nqvKAr1nuYULhPJuP5hoT",
  "key33": "24JdiQQG7XsGSMHqYnxh7dQ43j7vC2aXAqGUJbNPNiMaHseL281BHiNFX6VL7yEetZD71Bh4gN1Su6xzSZgz8Ady",
  "key34": "2YSDMmmYTJ9RFYUjJG1FgTHXqupVmj86o3SouX4DbZgjxYWMGW3nJTv9zD4EfEgA7Vn7LDBLSKcwbcRtNThBV9Q3",
  "key35": "yzGYQvSu8bf8BzkdPBCMPuoZ8vM4tzv9nFPfqQq8FJRBeDUUoTDyqzVfHuauWo45N5WUyBeFHJqxMdF9PJ5ZXdN",
  "key36": "4ZdPdCes2S55T2iHbjZ6m7VA3nqDwaHSMbygLPNVvD4KqWb2uZnJaLQigsSNKoGXamcgaZ7zU1hRdGaaxkumZq8Q",
  "key37": "3SjjhV5qmL5PMHiD4sf1VwiezHkZDVzjMTHkJH1w2RZ3zn11fsS4KcTRwskhUm3FpGGJVX6TgF26VWKhsPoRckYD",
  "key38": "3JyK8dxXFFtFSQ8qhykHvURRmpdvBsrgqkAwKcKK6EuygzuqmEiPStZVYquSfJoFQAJznUtHSNyshBaAqJS4EFVz",
  "key39": "3U4wb89SxoUcVXH6UuGkrRmybGJEFa4HS9hLpaWMaGeNJ5cKwYifixLG2qyqva4uWsGxuyeQdUdXA3jJuK2gsUZq",
  "key40": "5oKQ2sNjnNCJMKpdEtRV2EUthCXBJQvCmJfbbCBoM1g6WQ6eAM9Dz1XVgEeVYaX3jgcfj2UdboRFcKY6txqmZsvJ",
  "key41": "5ivCn4QAzxhxRLEkaBkuU5UETLvo72t5PBzwQt65ufSr4uu8Vu7zWatS1YjQKEBeBAVxiwLamuhvc1c54jsoMXAB",
  "key42": "4pD4u3FBxjXgSYMCzbnH3XHjr5mFNs3iR78AC4EVHx2LcJCYrBttW6C3vV9aWzp1tNKjWqZcaxa3srYt2qYJpXJZ",
  "key43": "4YkJTktXjRhuDedx71QwwSdq1qaFnUCB94ydPw4PMrx12kpVnmNSXFDM5X3zYTpU6uD33V9amVnQELWC6oVDhDNg",
  "key44": "2XB8FqtHChgWEQyrEHU4kggkusCHUKhinpHS4Hb8n8NNd16eXcMpCviw3s7TczqESDFd8H7LgGUpLNZTrDxM3NV",
  "key45": "46cihtujMtiCCTHi5YTp3X3KVJ4MqKKzVG1V4nAHPprcjow9ZX4TMpHWsNFNisQynHvbjzX4F7rKpa163wF5WLHU",
  "key46": "5UeVspb2w7s4rRkCe29KvqWCcBUqkPqwh9Air23STrPFZBqbUyBELdzxbX85rL4nyPD4RcVP5f1417QYjYZ1mtmt",
  "key47": "4rPbNyVmtDn6NvJVprtWhpMcY1CXUeh7nLHTwrQx2X1smxHUuUQjUGnhtHiBqTbDmw5bgQ7n3rxTzrx4LXCzF4qa",
  "key48": "5bYF2ZABLy2i8JusqquDFZQL4dEKqg9ehpSsjW18RGqXcvvsd2xcWU8Byw31GS9dnqxhgcuH9aGVRVauY1N2uEai"
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
