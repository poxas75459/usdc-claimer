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
    "4jw7mKSJ1qdNQ6VKSb3TpCPYUEjxKzSs925Uoxu3koV4mgzqmtxspT6B4tobrptRSUvcpFW3JnrKtUMHhctpwdN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fzJL9eNy1YLq97mHvqLLwzdMWTZH5J7mxFWDCPfN9droZRKdrTWS3BbrwWmTzMU5Rk9j5aX75XJvMSLvjZLQyGR",
  "key1": "5Mt2pmCAGqhaosEEjayJ8HeCftzKFFn5fPNmsTL3YjaVdmeM5o3B51fa82fdPf1YvU3Mhkv6wD6UbdcaDHgYF1n1",
  "key2": "3hLo1UJwVJE7xazRzKT688sce5d78p3FhxE9QT6T6v1CcVAdk3uv7fFobTQEDzDzJoWmpKiuCq7mCQC5Cb3eCody",
  "key3": "3kAf9FPFXKNNmve11HEpr5P76r3rf1ifsydwwYqcKv4DNzd2gvfjF5zLk8cfRE5TajwmYYcGQSjd2Kqo5crR8JZZ",
  "key4": "47TNDtpfbn6y76z9XZr3AKUzFV4k9ETndbs7EP5bxFoGutMhHfLqw12V6xpb4FmQdxoU8hPE2iM75CesmkPdNVbd",
  "key5": "47eTnEDXLWwfCF89Wu8EKh4dueGFCUH3jXcMddhTPvC8KaPz4pocME7x3i8Cuuisek7PZiBSwLfrSauVZgQFJmVa",
  "key6": "d7sYLKxxuHnWGtWYvhJixnGqmgyxKHwqwwsQDwRNMU9bEDENpEjfCMBi9LEHQi56zCd2gtd3Dg6UyaawTFsZeaW",
  "key7": "5D9qDfRYEPSBQWwXX1mgAXnwhV9t9D7h34uxPcjpL49NjPhgpZgQ5Mo1nWhsLwxLvQb5saaGxYZ6Wu3DLUPhZzBU",
  "key8": "2yRsAmsgJwkEJ4JUf3YdQs2ySZfs53sGYHE47VphRgx54thSv4QLnWBRPxeKjYT1VdR8sWq437KsVoGqwo4rwU6K",
  "key9": "4EB8ABPvP3tXw7s7Q2aU3TpF3oAi2wBVkiXyyiXPY3dheDFnZShrfaHniiVNHZ4TaLJ3mTWgMQCQqTriTUxWDaSN",
  "key10": "4DYYvdV8PiZ7A5x9PxAVd5L7p7UbuWG2bD5ihthesWgJrZkKwa21gYTt2ACsBPbW2NeeDQyx5pcudkXZLwSj8ADL",
  "key11": "3ZykzmTjfvZit6erUQkFhwaTXqKF4HkYoQKAEwWnnCf12wGuhBur9sZQLXCpZEsZ9orYfQxEVtfNaaH36nd8riMw",
  "key12": "2o1WPMWCfXGn488atQyJgEjx5NqeNsbP7QK8iDboQfJT9zvFUafRWMXdGdcWpxPMXX5p5TGsuapEjHTNuU3NNB5m",
  "key13": "636XqMSL5oqWVz8aNEzNmdGhmhQFagfN3TwTKKKTVMcE1AiyFc2VgXsd1WEEvPAnXzU9QJkzHPYpg1pjLh4PrCdk",
  "key14": "4tyEeUeCZjgWP4JkPKsGUukWLVfKwYK2gRafcDC9hGmfVGftozDxrEktcxLaj8Z3bEHkJ22VtqXBeu8K6Mj2CbeT",
  "key15": "5D5DsLHNQSmFcW1PGvCTQSaZ1HBWv8p8vEWeFhG2cxgETsR2wwxxWnY8XqPh89aLbUAW67XXSuy5tQJzaVvAjaVc",
  "key16": "dJFHk336GXW9rCgYLugJLvrsip3H6hRD2G3ekb6jV14Y3u4b1YK6zqX6V3cYzBB29HBWW9qLDVca8868e31yFP1",
  "key17": "4dyVf4kVWEQoMwNqJB2fgiDk1dJ7sRMUTp4M5Mrh9JEzR1KFQ4BAcZ7R55zDPrbYYvKtqeeAomt3a2rUujYEqwDH",
  "key18": "5H5dAaEYcYYqBoqroCRi1g2QSUL6zZbYZ4t22MmYFXuVY6uoLdigJriEpW6XckurNvTt45oNZPdTBXgej4Lv8CTR",
  "key19": "29sFd5WW5XaJrpAX2A2weitf89mkjzNFNByJ1fmZ3rgcwg9e8tCTzvyeUcFEHfhtUyGRYwJC4EmXGJF1MDgPfMAd",
  "key20": "32SY6W5ujr41e5aTuQDmi9ZkZbH8TJrgSRRUSDU5CzkHA7rEPmga2Ut2zAd6YfPz9vVpVXLUdi2pqno9KczP8vnJ",
  "key21": "3Q4Wfh5HT9RWoFp1vXYCS5BdtGiaVJVBGT6TUr2GjxTDJriCqKbEWZbbAgS8Lrz6ce9s4mtC9LRU4Xry3nUrn6hs",
  "key22": "VXF3TDX3XvefpjUh5djWFvx2JDqjX6gHET8UK7GRoDYTotVF3NimUgYxecofeaQusN6CwuBGm2TBXQFaCMnBFiN",
  "key23": "499gToiFgsyM4BWhtTgQFz2WzHr7PC6SSQ5Hu9vJjJCJkHShXSA11i2D9FiBfGLR3Ck9KHBYNbXASrJRD9D3Lvcx",
  "key24": "2Rx5TRJHRggMgwmtuZyuAHcgWuRJCpge1jQ1PkDfH5bmrNvuJaUA2MPt5a2RGu5unfp9s9xAqn6FpZXvdMC1hANh",
  "key25": "54CxY16svLEN2ERm69AGmUTVCYrjEy1epAc8HB7U4hLqzr4fZwANFQPTdiWSLgfkKCyHdM8S5ZnYjwcxLP9GRbbT",
  "key26": "5X7AoHNjoD9xk3ixKriYSeYA5cYXbd7hK3JY3FugUoo1LvsjGqeisb2na3xF1Fygspcakah8xeDCvLjUKwJBAfgL",
  "key27": "4MD8NhJ7Pezq5WWFKUa6LkgHTFjBMT5Y2Y36GLdd6Lh4ndz9SrV8usXBpf5SJMW6AabokxLPmaRJhnV8SZyforsc",
  "key28": "2hCXjxF5QAekYrsL2fwdo3Fp8wVnyBiGsv9HQy9V8EmWkcKs34Qb188hz8zvDKq3Syn6hG61Pzwbk6d5Wvq525J4",
  "key29": "5fSsr3yjBWubmqeMTV44Ue4vaPHtCazE85bE3Y6NDtFaH7s2o9gtsvj5kva7QKjy3bcTdYhfZpygQ2FvSsaCqffM",
  "key30": "2zBYor7Y2iuu7JSc3tTVz7YxF9vAgmqCiE7pVM3CwjikoX3PnHQHVzqZaW7tp63pF2GquQRQMC2et2XveRNJZ1pJ",
  "key31": "3zBgJp5sidbtzNjmqnZRRFqm8jiezRK2a4T1dAaJeaanXPNgaSHTPUcSGTZYmweh3aN97QvuR9RLfFbfhMGni6vQ",
  "key32": "5VwhM9Hi7FE4nZFyPQqw6pq835dq73a7bwHYiu1nTpA9C1B2RAnrr1qHZQ2wA6xZNUj8xiNHDzacLDNKPV1pVeei",
  "key33": "4sew8ndzZgJL73zWdU75oeMm4t3L2e6ygTPtJxwyEZ5PNNajv8gDcJfsJ2CogDSFE3t88MRTKXPwVra5PpSGfEiY",
  "key34": "2VL6WDTsppAWeg8ggYhjbnkfzpNpQKMVGjBm6xeJishQsDWLTwq751KEx5zqmsoy1y3X75Z6xJVqnrjkoXD6Fnbo",
  "key35": "616AnSpXkGhtv3LxF2jjBX6Y2sDrfMCkhC8RJkbDdnHcVjBqP1o19mjNM8xhdGDmvQGwM5pedTNsDLQR93jAbRMr",
  "key36": "3dxchT5RTpaXucBtN1cpLhVn6ahQqTnwGK1nD1LfiAgD2CqGbBTEXaPVBeTrBjRUrAiDd2rAZWSb9MosUwD1eX8L",
  "key37": "3HyGBDvG8VXZu2h83SwECqSKVK2r7TwMecTxocnp75npdCEDXdzC6qye7E2CEpjFLxTL64vLj9CRjW4jCr82knvY",
  "key38": "3h6oLTGddWmEkfXmy3bKmyZkyBC1Jf17ZP2K5dpfgB41erACWXDtkbLiBgYZLALchW7T4jWPiT1jegyi91FprMVA",
  "key39": "pWhn4DMqiwo3bwufm3T9c6S3u1Ru3ti8XywNEELS9BCR2EmK1UHRCHv82fEfZneW7pNCBL3WnUgFDuwYLrzYSak",
  "key40": "5Tdkr4ASDyXBVTasdNpdshJZPJDH8zfBVTE6NMFTGUa67F6oXhSmfWUQWUFsa56jdMq2BrzPqYrdvyMEpaDB2d7t",
  "key41": "3SEtkxQFL7v22gZhs6RKWjKQ1sDQj9f2pbqX4L3bwvyHYPhgWPbfrm6tUnpSaZ8QnrB16UT9ZF9uT9cxvWg95hkr",
  "key42": "4N1t4rF96pjKXE6ooPHbxt9XzhJMDt58A9nxCCRR1V84dVmpM1jjQjeoE5yTTBakQRgFi5ZAyrWc29YCwxtWL7Mi",
  "key43": "5MnauBP4X4RAdV4byDHyVDyvKn86CfzbkL2mfWaJnExw4SxRqRPAz8AGG8MxBHmfKBkLymUCpX5X6mpxrUmD9Uww",
  "key44": "3AKMTQMtNydRVUCAgzXmzwZDmhVA9qKiHB7ayQNPKCgp8c31TD8LUnQKyJJmj5waQbxRTnNFvL32gyo7VLvzHhan",
  "key45": "Bs1uN8hfhHTJgi3UaYBZg5MrNHe36DPcN8M5GfY2435iwiJZgSbAxoqHixyNAMjHXqSxRE3SkyWeE95Nc2STQdG",
  "key46": "43o5Kd2DWryST2vaD62DGa8Z5NQxm86Tr69GpjEkeTZ3EM7ZYaCYzNhp2LHFV3Kc95VeTEFzQ7pNSqKT9PXMmctt"
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
