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
    "4rVYW9oFZq7r5vfDDLb4xsWeRsKjuZVUaBEpd8EaYqASBEk8LajDQNX2nSVfyqbZ418DRighAr4BSTbTQswmuwy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhS8EyPhsuaFk9tg8ZbWpT87a6i2jrUFW44d4sr8VD8Sbmfa7A6cHLy6CXj18nip5Cxqx16YkTo3WCFKUCigSLH",
  "key1": "5Wpisg1JXxg62AKfzGZvavVMK1HkvfiX2vTN9XCEjG1T9CyMwnx8rLB8rvCVrsPRYZv3tkHwcJQ5yFAzwTYdzHVQ",
  "key2": "3FegxcM2Qp8KTAAzL9Ub4vEWYwDZP2YWgZtYNGxYry6JTWheo6CHKoaAu4xtHmUYQ9SBqRYHg9oRutGTMRBDPwXN",
  "key3": "xM7LghKDMk9xL6WwvygJhWPn34KAntgZ6722ACDYPHNeBN8hzpsAWRDDpNjYMCTQJSwfKThssDfUGyLWcE17S3X",
  "key4": "2rpLbBmfF9eobyaWh4VLyGK9YKH8oR7ZoeVCZNvsXjxuvrXmBmncKn7ubGtgug6CRKQu7rxdZaC1MVJ42BzBkK3q",
  "key5": "3Q1313LLVyKUBcqaGiwzAznzXh1bcE4vZJA5rpF8Z933eKcLJibaNV3wvdTzfSo3nqkgDgKAhRp6BuQrfQ8LLFGy",
  "key6": "4z3mcD9GwtANXVaoC1mrhUcr3AmvkQCK71v97BUyaSBvpMbCq1NKMCX5LdsxW8UJkRSnXisK4tMiQDfw8WUSthgE",
  "key7": "4ZCpwHxZu79Hm4CMQSHofyeEwW9Qkf5rh9DmoWeqNKJ9X2W9TaXeA7jy2tVbdZKRyeVzEtp53B2PcPg7TAVfUd8z",
  "key8": "3rwjZzUU5LC8mVDpwNVijnV2Lz3ZxVfqxyamDKtvFdoxocKDQtcP6jCGKdsKzgQWqn6UcJYkNJ3Pyy9Jvz7yC1F",
  "key9": "3PsJPFWnyXFhBCfaRLS9EobmwK6m6gKtHrhosPBgMNjK63rBo3Q38JGVWc1zoc1D5a9bG1JizcyvqriQ4RTkeqyN",
  "key10": "2sFr6n6aDWxtRzdc5yFjXp635AjssBNTuXehv7hXaCRw8jTjafma5c8w5Fknj3ois4c8FCC62PBqraSz7MCXsJHW",
  "key11": "3aF8ZDnFwuN6Wbt7KTp63vTwoyjEpJ5k5iaYDx9oSBHfrrzp7egydEAHSoa31mAuH8BRmHAQ5RMnGAKHvGUcxjYv",
  "key12": "2bwKqW1hM5dronWMEFBvAhYd4422Wz92vk6fCWuVNxK5kRyg6bvwybrTfy1iMw3jQN6Wvj6h9s1VHUsgvH6STBLf",
  "key13": "44Un8hznoCCbhct8B8nFDmgFACus3GNkXzpsNt6GRC4NNNGZfpxsMPD6ecfUGgQTCsvtCEJxBnSFE2eci84r8GMb",
  "key14": "59ijMyyTwfhbg7zgbh9x22jATueChRuHohWAN43uPTErvNpemvCEYTbbVXkQsmEXU6BKT96hcGLdHnwdH3VUUWgo",
  "key15": "kWTydPFuH6QhCfKbSpqyPLBoLrRKoWxedqYfuwXZ7z42jRwxKb8qemP6oSUR2VP6jmdRYTpGvvXyzg64zeE85ne",
  "key16": "5qDSQs9pwmyaqASZ7SDJA9h8CxyXL6TdeS5tFNDi8VKfkDFu71cr2QmxS7dyG9UcM8rPPBNDNqTMGD3KFf4jHTwX",
  "key17": "4GCsd8tD25u6ZdYEKgDMRVwiwG5a5DBaFuBQMozX6vJjmrysPBMzXQpZLBHNzfazzbSLyEtxzKXYaQqj4FMgezkj",
  "key18": "45DabA3N7z6nftGb1ZfZCGwnJ7Q8EwyJj8W8UySG5adFZVxQhVL5s8W2sJmdg6DTxb17hDEf1xN3NKZPtMaiBwAR",
  "key19": "5HG35N4wSxcoaTfbY8qfdbNeZ4fny9vKxJPKfhBeBVVn9iFKKLDod7Ymy8nNkF9pdpf8RSez178666J9tYQwKwy5",
  "key20": "gUynzoUMnb44zSwD2ABN5rC5Rf7rBKF3XMPYz9sQr5mmMpTW6bKrBGXSztdjZTAbArS4pAApeDbTjVLSPVbjhJJ",
  "key21": "4xc515zwWjG2FsvoQGEHngqCBBHdxKtaqW6obMJg9SZUsxBAdXG72bukVcPoou7n4od19Cg3M5uncX2MR3bFo1gT",
  "key22": "KNEU1wUmk1SBKZTB6xQjBRTC4GSa3KPApuetN8GV723Emm3WcRKoo8nWtNmPLBVofevaUJcyCX6AhtdDUjunAvm",
  "key23": "5981enT3rX4hB4fey7ae3aVekvWmdTykBmGwdz3wRVtZzUbxmw2NRu5wkYh5WxJARj7r8zHipcGsTux2LYQmLvCk",
  "key24": "2MLwXgdGf8RSi7fxVDGLqUKWuRfzfhCx2PicUmhkVPnw6v73xfYp2nWfk6vZwXRjfLHSVwVdXZPHe4EqwGiKAQhW",
  "key25": "5TsPjaxNe3rHazBgDsSwaJePeHPBPsvdMzWt1KDJP6rtQAL1jKs21QLsbxuUSavHMfRjEhmE9uUWmeBdHQCrerYh",
  "key26": "5Lgbh69C1GttzG4yxsBZz95CTUwfwuc3dF2Gh1nw26m6b1Y9WaMnXqtMZiffitEjtmziZ6knes2BYwAhoMmJJxu3",
  "key27": "51AQoRKmofsA1Lt7qcU5qWE2ddh9rgLFHCApcGFTydmTCdXCiNU8hFWXAXJ9LCxdaTBs4ewL8NfAhQF9TmK6xfZx",
  "key28": "T1sJ1FBs4r4ANhAducL6NzJ15CSxz6cvSYajBxU7GQQDdS3DVZofdCe9njnYX1BsuXR2Zcx57Ypt1VKRbW4D3sP",
  "key29": "3H1mKrrdXS4VyEJ2mBbf5HhW9hDysk7u7XK8ZeEqyY494tgQAt53NR9ZTtVPC11kW7aDymvUYJfAjBS5pfj8bajn",
  "key30": "2NRuGJtHUcsNuP1CiSFi866bAQ1A6iufStCWjX9QkziT8xKw87f8vDNaM3fuJ3G3fSvsPoAqxW6ToMP7k4WDq34e",
  "key31": "5LUJFXuYP64eVdgFwCiKqUTqmVpc5FMrkrinS3pydC2CgQSid3kd46FgUdZBuzr8bu8CJZk4NqwPXZqxqGx1VkqY",
  "key32": "2DwrriYfpzqNDQ5z1q2jHSLy2yFWrH2xRVvs9eLw2BRT9aXNGNTVxmc7xmPcuuP6vFuDA5JRHw7i75FMhRNGLKLP",
  "key33": "273mvuto4LQhkwaLVrxo3pqRWU3P7KUpHj1tYXSvvrvdZhyFS2Tz6mAhNGvnS32CiQxF7QkbCxAaoLALzTS9VCYs",
  "key34": "47Vfj4qx8tZtUtNMSpyAFxF51HT19GjiuDtQXtJMPTbbEV3dYmisahKcCaokrxWH7RsJeLNwWFLjXqdCurZEU1Gp",
  "key35": "4rru5rmLD8htaBuN64yXGwBMtJcT23SVyzZfeUiHoo2gHBiz4DMd2D4DNAycbW4enveot6Trsg37jUw7bQwABdUi",
  "key36": "36SM1rMGKrUYP4LfXyQxKPMGoWVEEYYxzojftUA6PgKtDS8TVb48L7V4gTu3x71BqqyrSKUKmPWeCxXLeujV1zWy",
  "key37": "61HqVESACepyQNey8wVquyH5r1XwNskbiM5pzHZirfLJVpdsKSpg4rKgyJ3Dfqy9rykLae2PKHz3qLsyADrQJ2xc",
  "key38": "4Xw6LgJCgw6MJ5M9zR1DaA91mAFtEbtUNjFwkKgUAUcBSL1qbpH9MLL7KnWqvDyqqs2tguNYCXQiEYrREpM4yoGh",
  "key39": "3YtjdSCQnwrk8GKjNzUg5u5MWP97xfKTjQW9ojxrcXspxyE7w5rEB6cRdjZTGMQsYc5ZmJXRnajmJNV244pgC9Ab",
  "key40": "4sJd9ubKX8tBuBfNomj7mmm47173s58W9LUoRdb2E51XrdTawGVmhrjmj8Gp9vmYJ7EhU42MEboQgtmGecfASfBH",
  "key41": "3QKpvh9h5ZAh16WXToY3DKuWjQG7FTA7b22bpQbnvJ5nzuVVGis5PwCr8JTd51pSHPgg6BcNTGeXcAQQ5fkeYwfh",
  "key42": "47JkKxZiYchvQxEiDJFvZ2Lhp6YAhyToBcwCZ15cbemTkPhxEZRiGRRapGYqVuMjeyXS5zEk8JXjrpFAYsm7UgUe"
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
