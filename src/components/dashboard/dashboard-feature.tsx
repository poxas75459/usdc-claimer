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
    "2v1eHSrKdzdcAbNTQZis3m5GeJsbUEmaK5UPVrWcSrzB4KSKFARKHUdaLHXXQoj1axT1j4jemwDs9AqmGnSjiCej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22gFUKmB88tzDiuzXCQUPP3QBYuShgka8PSsp5653hD5dQumnv1y7tehFg8r47MUwYnHHK1YHKRnvFpyv6crzaUT",
  "key1": "2MYJ7oWwRV6AcjcBAPjmnZBvCgvNhN5WHkQ8gopdT1r63318512RXU3Z7LZfR6oPPVyQC4BU43MK4ddEvyQ2jZYe",
  "key2": "GGomtB1eRz98M9uGKpZYg1TXxy6Tiuz4T9jwHL5wPPHWfb6G6fdf3ikbNjQNnGGd1tWFe7ukRPZF1VX5hJ2mo7w",
  "key3": "2e1FHtGyZ5JRWokajcyqS1ATNMxr18MNSVjrcUx45PxTPpxqy1LBWXktiBJMUqSTbqd1Fxbx5hYkDhPL1xsWGSV4",
  "key4": "3UyMHp36WftY4byDbVNJuJRG1EotToA2Rr2gBJDUW4HQAW1KFdfTpknDWxuJS359Hy7WnYb4WGR5J7XXq3d8iADS",
  "key5": "4XmKGRjjVdPfmfoDZXAiTMwcDs6cPbZMCrPSnTq3KLQohvbUJe9AHdEPikfSgnyEjsR5RCu7wGMdji6x9iQr5Ph1",
  "key6": "2eHn6gDbodarzETpsUuePmsxjMk4v5Apfs4UroKEJSYs4wDK7fgJjp5H9iFHCrR745qDo1cY7zJHRe2WzA24iVoF",
  "key7": "324wjGDXvhQAnGnSAfPSjNNtcVXePTuUHuTUkKnmSq5bbeqnzC7c1TYXPxr1cCF6ytpmpBAZEKh7Nb3kJJKdoQ97",
  "key8": "5wx6qeZ25DX62F4tdss3f93nptnmqDpohsenhJPcuFybwR4GuSHnhfbVZ6LPrPMDt9ns188c422y9qdKxo4UemP4",
  "key9": "4SJmkVTv6XR2LRYDQF3rcLQQ7bfgHwdCZoiu2QNunRXmScgBpBKe39oZcM8TQ7JFRUcDnfGC5Kc47tWatLkKMw2R",
  "key10": "32wDZD93KyVGvxa7YmfEEYsrQK38a2cAJBrfn7GfPcT6iY8j4CCVV6mXidCBw94DuVhYnwHHJaDeKs3h5P7jcAeK",
  "key11": "3cHhbpuZKaiZcrKYB5L8sKyB1BME12tFk6yvh6tryX6EDpsPUWEjAV2UyV8kTPuFEZfTJ62mpn2M7FX4NEYc61iU",
  "key12": "4PgLGzde5Eu1ZMzkckeQLKP8LJTCkdudYe8553bfHe3BgmwTExAYzReKyn8dQjrmyjEqQ1SJxLajjgDzPrWNQswF",
  "key13": "5HbUPo2yiVufu39pFxD4LhixRSCpSJ9LFa6aG6WL8NDPKskstJdLtkDPioh12F2LNkznfTkVcbCHvi5KFiycZi9Y",
  "key14": "JvFxMKXVUzKofLc495ZMtjjF6Tde3htxqf3XkftkUh5s9NJjFvAmNUxhE8ck5fD7fACc8YWFSeEkUGztRYye92i",
  "key15": "4TVWPWtKcUnHZcMp6TBuyuYRUsCYqYanAJVpcrPUZqZxCYd1m6U19L9sx5nDdTkTtKegQ5pKu3difbXZwt2x4j2v",
  "key16": "39KWt6L9kq5LH11ibf8NV652YoCjNsoXJVPRsP1p2pMdGwpE7k4Fy5NU3kUKw3JyJQKyZVoDnANgkvf4645G1YjQ",
  "key17": "5VqzcCiCb3UMNeXPzLRnH9ewC1SPTfhRjd8BhZ4ZUE4CHt3wVLiHWU3LWmLdKjDjJ7YNV2tp67cck6AvUjbp2vZY",
  "key18": "3nTcfL9RGpvDNQyHYtCuRRXChc36WpE5CxW81zoYJukjQcBshTWmwQF54iedDVUmMNzU7CfiHQnrnidaVdrR5jNY",
  "key19": "5m6j5S3RXqMoG3XyX9AfCCvuv7ntBdcMZbge1DDx2n1Rvr5oBGcPFU8NJDnQtYp8PmZXfUPGd6AJEq5rMcRKK22F",
  "key20": "61qVBG9WzSUcWptkuSxVEXvMoZLSqNr48Um7RKcY2nLkSTYE92EEmfzv2ipbNvd7JWM757k6bgmcFS1gMnKPHRNd",
  "key21": "3fhqmopoUisQNX19Wd3KbASZwuDFvBuiRvuhifA7KTFGh8sjEmyHUgebVZCiDbhAAZCNKhVWNuCDx3LZAGYHWU45",
  "key22": "JZ5yVkbnWr8SupFPh8RHWhEzVH4WY4S1jAWCs6sK1CouWSKD9E5N6fJh63ujYTyfEuvoKrQdC11qDvSva6VzSr7",
  "key23": "2U2ZvBThVG7fbZ3yRUkmzvSFyezG9s7JPmn6YuTvuTCFuDXAA7L85GCV9MkFzncTgMGaEs5mhxN9iEjxFg8Y5uLZ",
  "key24": "f8nih5ktqUVWE92JtawwnouGMkYQ982g4ytA1AJu5pQRdkkQM57hwS79sSpwjKMVvQauLiExRLp7DQkfvKJoq97",
  "key25": "3Fa7VxMPS6mYN7zQcD42a8PFFU1oK18GScCCToNMbvuCXizUcrUEDfLXinL7hc5uK1drGD5RT57oJTLpgYAVUiXz"
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
