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
    "64BSh5pGTYaX14FX7VS5oX1UssJhKip4GWjEUbCUFRnFSX8fip926qiZr7bXa5mJUTkGm3svxUqhnbHfibG937SC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kXkSnEnxoSQgFxKk4GgzQWmcS59L62bZ166h1RtSe87RCAXKjX55WuxE8LVmjNdkCuUaBhkPkXgL4efVLz9u69Z",
  "key1": "2mX7CK13XLJbpbt6PAxusB6BUDC96BM56kGhKWVmd4Y4vU2CjTuyXDqfLyRLT8EgzRXfgM1it3YF7JBBp7mNPPuC",
  "key2": "66u9k5fUJv6KrnQufkQcQuszrUdxhcHSyCu6huc8mJ18vorZCW51Ln5ewvE76jYJpfbcqUCCenLewEDJbX78DhCs",
  "key3": "4go3J9VUAfKUnZSXXHZAeDHLFDzNkXNbT3WoWszG9irnFzYgjCp9zLmnuG7XUKkYKPSNjb8kgZbU3YFy3a7JVFuN",
  "key4": "Vf1DGLib8VGggXsmA56mtFudomTCwU66jo6aJknvnPD755LGPgLcAVXmUhoqJntJcbtU5p6V3W7ZJXkdNzFnQsN",
  "key5": "47dWNc65Mhqep1x2ZpjsXZ6hmLcBwkefwyqJfUED9hsBpiWpNcqVeztDSjRtYnM6w6u5i623FfCuNMNw5zpMFVQt",
  "key6": "MAbsPSbyh3ePPhGu4939udgrh7zcnhwEbpJhkAT63eSTV7uM5X2gy8gyRYQNqbZS6YrECuQDHTv7vsxsHJiHruc",
  "key7": "3115qjt9ngK2exEeU8BbueaCFkL7y2xHx8AhYD7MWy1WVWacA2EsGL3rzwfmhqF4uEtWNkq4LhU56L91LRTe6Dhn",
  "key8": "4v2KXSRs37FivWjuNQhBoSi1Bm6RJBJopDGvGFBZEjJeortHUSfbaWUqVRTLmhXKg9ZtNpKJE2BUnY3d1x7TazxW",
  "key9": "4x19nRvUxu8cx5QyYqtE25dLiNzrgEj8cju7Ghi9FWBeMoAE1oFk3MpuuUmvrjy5sJ7ycjn8zAD7goMtXxeAXb25",
  "key10": "RYwv47Y136rqx7ExzSvVmuJaYxLnNxdGFcjST8SknnJcN8QBgf2qEPZGAJDHdM1KktwqG8TXB2MQTvgpRWWwzF7",
  "key11": "2uMfyUBkjCymBLD4JTqB2AA63joEsJTWSX7787Jx3UjStuL6Z1Uj9SNKyyDCriAwv83tvGMVjf6h74B2WcAMGFsR",
  "key12": "2ze2vLic6aibyU4rd5uNPtr5ep3u2pCFRdGKF6uwDup9WUBTmvJ7yYCW3WpB1LzgGoWwqkb7hqsxAtiC6LERj8Ct",
  "key13": "5YtVrLfvBeH1ddKDsGhJ1aRU9DsvZLKxFmYNoYKhu2iMMcgerBPaJWX4EnRZSU9F8zfuBwwn1PmSi15ux6jiF7n6",
  "key14": "DfSTdpWG9D3iTxRVPTGEBoMGxCMdozGyBvkbDFbndJgdsV1yGLcL4qJhy3s8qhB1fmqNSkQ6rejL9TLWh5Q2sLr",
  "key15": "53UbHvDpkrKSC7eyRdKa2ZzAzLD8oQQLXGn5J3Vzd4sUUTVDKZv3YTf5f3VnTCf1Pt7Z4P9AzjCwjXbZxFX9gTr3",
  "key16": "QeNCg33GP8nHuN6V7kabW1bdHUD6xowHX5R7AMAVC2w5XGUyUDv1uNiJTkdafU3YqRWSdqccrfNieocRePKCFfH",
  "key17": "U2maGao5fQG7UnAce3cQJdUzgbZnc8MAp88SKVx7qL55JkZsYYwXK1eU2XLShYWidZMHEkqxxoSHLneARPEH8Ta",
  "key18": "zkXCcE944HyjGwaJEVULvAUdTXvgtjVyPSpNzjgpkbE3cbwf3rgP1BP4GSDoRwQTSgiNsJry6paMCxmYfcQ9JgK",
  "key19": "3kur1cW8s6YykG4oUYaEWguF3ehSexu6eMVR5fYfuKXUVptVchXi5ZLXYorPMf81dT2DEdg7jaetyciURTsdiUs6",
  "key20": "5jr35ajJN8EgXuK23rudjFDWNEqjYZdp21fcgK1ovz9GvUMmJmeFZUje6faNFE6WGJfW5UqQNtikyb6qweiaBttY",
  "key21": "2NB8XM7oXcvjGSqtQSwJdroG4UQLtyZssqw1M2vFxdGVSC5d1AmoovUUMeNw6tnYh8L4qq9PDuZZiVho25jUm26o",
  "key22": "5fisNmApAWMVzfrxf4MFjH6aA1eEAt7usk7PxpSciLhmmS3qiFEGzuEVVdVYr39iJbir49772XXavduRRNYaaD8c",
  "key23": "zvduEtBCK95ifxeXUfFN9Pa1gLym7yRmJLgEnpM3EU7fHRFco2EAaQiyMWWssa9zPUqBrF9Ns7G5ZSKuzFkc94u",
  "key24": "49KKnQ4gYMhe2Y3gXcYtY1mxd4iJPjMpCUdtPPteTibugTF7cbpxqYfr2qBW9DgNbjzanvDmzuTiYW7cATsJhCfz",
  "key25": "4PEhUnb8Fvayu5UxiPrvYUCSw6i4BNSypkiGypVKD5XTc9vGoXGvvz1KU16Yi11cSfx5tnLAovRSRDYnc3GH1vF4",
  "key26": "2wCMU8pfhe1r9hyfhNQcgouRWXgQfBb74sPno9vBWs6AYHkyJnrw31b2ecZfjogwfHfaC9VB4Hn7AjP93LTARbby",
  "key27": "57Z2qtQ286yx4pQ623CD9Ko4YQBZwoCcRC1ZAw9gZAHTVhw2FFuT3M5hyhqEDEJsfgg3G7ZNnKX1yh2uixbF7Wg8",
  "key28": "5zrzdM9s6Qud2TxJkgvrFaJQXS9bbzJ2FvG9BissMCC22nBCbE7n1oXQLN2PbyiKRULKnZjDWGqNFMTeidCCBrAG",
  "key29": "2HUpsbK6wwQKXEAg9zFUEDo9WMYnHn5M5odjAy68e59e6FtQE4ZSffpc9veQX53yUhtvEiiTmQ37XtwdoFY9wEGc",
  "key30": "B6oJAWdoMVbLAvhZ9tb3TR4sVvAHqr6ZCtWfvHVV67vSkU1TtFbvojcfwGbyvFLowbnQ9vC3bAWRERhJT2CxVwy",
  "key31": "2ZSkMtubSMtPbEJqftRFGqtZX7WeBG4P1hdEEF3wLQFPYzoSDDGjmhd7EFJBuiAUBt8gyKBWeXeC2zpfEBUdtBFy",
  "key32": "zVsV6wtVYEgDvzqJGBteaSB2PMCApcYyTJY3KQ69kam3LTrk7QBJ7yDGRP7fQu664MxXmQHp2k3nXeYNuroCQzW",
  "key33": "2xuUNagLdq19BmwwwG7A1qnuFYjr1rZGyQedYmb4z1eBDuaegHKz8zNKfAfuwhiC9EaveE1esZHeUvrB21my56Yv",
  "key34": "4GPPqZ2Unh6wWeyvw5Ce6sZNWz1DGffqcJHR4zLQC5YiKR5yNoioP2seWGMbHLQ2UW1DVKRicKkfLB6ihmA48td9",
  "key35": "5vxzHAitThAMLN3HSQojWvEPyVsFMeQhLkfesB47Kg9HW8okXTMPczFyWRZddEnMRR5RDhK9dTMi2gBhPtVBQfdv",
  "key36": "4ZNYYv3KcKnU2DWQ6arTjRLHo6SksBoL7PSvFfYjDRDiyw8oDLJMxW62rKcaweerwbqhzPemMn7JAHZBub7yPGpr",
  "key37": "58Ro66piRDhcKDFtMukXaiEysTDMWQJMRVsYcVvYsod9veXk2z9r4WkgbkpSgVU2ZyfStNTLfU6uX4dun5ftStVU"
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
