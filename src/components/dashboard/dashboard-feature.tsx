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
    "64Y8qJmFxN9ejShQSeMKEnMyP9WpGU7MkLed4d5Tzue4NaMmrhc9fNHgSoH387pQXhVMwyLtxrXPFmkMQ8ix7uun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5woTTWZTJTKFEMPjpUN77PFuwFRDfJ6m1dPs4pr5cA31MqjNTiynRyb5m4MzQFx4UXtbfj2P3zS2zNSZrp4NamVM",
  "key1": "xb4DAJmcnGEyErcVfSiT2tafjkJHbxCwFEdnA3iTS9otmfY8m12E3TAPvWd1wwPUiiueBUks6dZuBZqbdCdSkg8",
  "key2": "5mi6QybHNaX2wSHUvpm3WkJXQ9uFzQJPjWiWioYgFhBzmLV2GdJU1RuzDcwdCxJJi45W3MbHZo3FQLjYC9hnEBky",
  "key3": "ZMCyup7fenzYxQNDRRbA9ybQb3F1XU75yQn1T8oDKx4bajU2Yj6Nj47XQ6z9sX3QvpL9iyKoQqMmyMiDPAaSopg",
  "key4": "31Eu4KAtE5DThjs3SXgZC3UyvNo9ruE2Ph13nxYN7L38PdbRKb4rmbkADRGfKYLG6vTpEYRx59H5A7cSDt5SnqkB",
  "key5": "63FSYrZtUTEtSQGpHZADu6MuTMTwxHBUPDGRC8tZCfcx2DFJ7URGsD6ZVgtEqCwtWZEia8b3MRzT1swncopBMPt9",
  "key6": "wCkQ9nkH45bmoaryTheWa9ncwsbg9SX4PjQjeRrdDvpYe671bCDoXQyWaGPFufBf3nxPTzPWEMGrFN9UL3HD3eN",
  "key7": "3ExoMzwGNLJyudgBHMzGhxaWNM9GAXRL4UE51aK5WQxE8XG3aa9KFTAmpJ6Sd3HHQwJpt3LrXL9NXyyQaGVn9PbC",
  "key8": "6Wfmq9A4rNG3yVfjAvJHB46Q7Q6pZRV8RYDZ4iQ89pXrRjAWx6UUBrUtAYMtcz511XqrRiLDuvLQfhyTqCTxoJP",
  "key9": "8xjxrhmqP4C6n3wxC9584puv1AQmcFC1XY1qUg9zERvmjbyxxrkKwLCayf8H5J6v1eKc6yrBhdamztAjDRVUv6L",
  "key10": "4rXimzGYuukJu1DnXivWQGr878QVk9vMJb9SEV93FvBWyg18yBaZKu7iGFgtsQkJSL9a7YsKXQVK4YRJyVWSVV6x",
  "key11": "3hWoL6nTqK7tRgnxJifgqFJdaXw9fXthvh8NqLVF2Q4Jw98QM53YxyS3F43SmeJTS829hZ9aD7gwpkmR3NowWF7Z",
  "key12": "pKBPvpRueyKY3M2cdDLqQDEtxutmKfiBV6uvkK3MjFkNheksUVKEgQAjLsG87t8nuGhx1ftdqauxWWDxvYdNNEN",
  "key13": "5XosXf8DXi2R4b1C2SU76J3ZkMdvuQXHdT3aohj7a8zheRrgLawne2QxqrKDviWtYFZ4DRbWqTXQK1zRh8U9iBBp",
  "key14": "5bRLgENukXV1NFYZtNG8ZhEJsmXuNWWY2X9axyz3RvVSqKwzVgAXChsGuP8F52ndWYSkCXUG41qK26CX9V62avSF",
  "key15": "4juvs7MGMr3iyFQceLT2FtFegCS98VHFuMp44sc9Kww8WYU4Q3mzCAm1BeokPNC93YaBkqcFpfLBgeVojeAYTtt9",
  "key16": "5f2NhwqdCbizzpHN8vHj8FXemhqsv4mMsGVQvMVnrt9hU84vBJuzTWrz5z2eZAQwD7ty4LhJKPm1j8MzHJXUS2qe",
  "key17": "5r9cVqpbwesoUnYfSLM9kAtTBdYip6Y1GByEMfBM7hz29sMPoC7kfqX94rnhURsaLCdy3e6eqEBssGvFMhWiry6y",
  "key18": "2ZArwVLzb3BoMt6u4EeCUrP9QQCCLmMEscz43zwR43fRPsU3qwmjNdn5pQ1kNMF7Ndobc2QJwwKYf4x6bVx3PWie",
  "key19": "5sLKNnUr76ruwb9JkT8vTn6hrjAxayP83fpPAw1NVKF359HMikHMtQGb2FRBZutNwMAzQo83jWUEeWbJACmHmzCW",
  "key20": "1uyaCFBpaLg6GCiyDKEmhiufYmamUdztv79D6U3b2z7p9Nk4HKS8sgHJENY3czmTPG7cjifwxn2kpyyAmh8YwTy",
  "key21": "5oDQNrS853z58Pn1eY9UXqeELV9AcoVJkwN4bdkK8CLkuSLZsDwFy2vjwfWVDnwJG1gPNUBGV2k4Hhcv1aKWaekd",
  "key22": "66HkeRctEnxttPdTvcHu4E6spCnymmnaY691tRzqK2d2iHF2Wbeda8f8SJe8UqaeCd7zRbAGXh5Xm4N6vNvFsU4t",
  "key23": "2Ep2s5XCtAh5mHXyosdYMYAU3mz91kyHTCpak4WYHXqj7KduL4RQHYchZSv88pXru5yab9aRHwe9aj5fc15zRmyv",
  "key24": "5qL4jRA5FH8F5FpAz9XnBYBeQB5nUgiphriqiYJJrTDK2sZFnBEmBhMwcSg2j4fAKPuQTdoAhTMcXNHBke8NEExQ",
  "key25": "5rVHtX1pLLoa92ruEXvGjRR8jCT1SQiHHU3CGguNu2cZW7qv47PDQw8oQj8bYsJzbjHPZv5P1wFht4sHfgwSzXM6",
  "key26": "2G5uExcmKuUZ5x4s2AREKw4urEbPEkuQKuuCpu2RoZZSbZ2vgwctj1K8kpUGpWLTVtW2TdwjdD4w3wnfgWRhRsDv",
  "key27": "5e1sqhhPJe7brk8HFcwnDT9StrjxorTW2NBteJ9AsHmDAKLYqggfh1FnptChxugcRj5b6Xe7HgVqYf5sfaG4ow6H",
  "key28": "44LQ2EXqjW2onQuTNByuoDVeA4Tnc3WpnfkLNKybdnJMtCg9TJs24r8wBMKkcH3Y9xXCyCaJ5zRmgKw5GUPjfk6x",
  "key29": "Xx7chhcrGrELgvKtQ6gPfnZnvqoH3tNuXyRTVZHSKeGwXgiLdgzryYodpxSrkC8NQ3RCwVUt27oUkCGMVXSdK3w",
  "key30": "mZqjj4Mxz8THPfJKYpybFM3Cb3Sp26baWvpTFPakeQttc914UHLumPumfCNh1oKWG8Ee84ffvJanYYyENGUN2SW",
  "key31": "3cwxyqjAMRzwSKf9zUFfCPURzo1VD35g22DCAV1NTa5TaKuw9XKpJGNsuQ1svvy5ihU5QPLEoWFnzygGQ82jgtCu",
  "key32": "5wRBN5pKbB2vgFGTrZABoauiPpt5odB91F2Hd4bw3JAfqpNuvGvjXzJL9Cvr9oRTJehh2pMD8VCKhWcHkyaGDYw8",
  "key33": "2x2Gz6zFccv8inxpu8xCYA98U4kdkVF1DQvnoKn8pR7GF2mSGU6qVPU5m43aXp2ya9daDJPfdPRZACTBoe9qUmAq"
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
