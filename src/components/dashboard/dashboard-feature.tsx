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
    "2RMRszSgvgrPTvynbVDMaWJ6odSfc8pvLgyykCviNrftHgwFCyEXPa2VX42jhxPfbYckhxMXuDq3csNopg3QBMFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FvLTxMox4rrj5xbVm4h5PsaXb6SpyFwkgppewmyVZKHBy4qdSk8KrWW25ZCzfkHkThiPPLbUnoxHXd6NQhFtw3Y",
  "key1": "CpwLv7LnNNXhw9metcxbFCt7BQyu9JwJ3R47b2EaYuJiV4qqy3Vu5J1HqBB5jyU1yvoCyPxYPAHbqKR7B3L8WQ6",
  "key2": "4sCW8xDv832NQsKzQ3ffSv87BtPGdTS2SVv1YwdeX6qPmS4A4L1t37LoBfZVtEYcNN5GHY75ErsT3ybfu3iXjriY",
  "key3": "vXYxmj8qG9BTXutsjcDako3xTv8LRJ5NFBVQsjfdw5oRVREp9P8ZDi4NLbVr21SBRNbsKqXoQEyK488HfupsWuJ",
  "key4": "664X1WEQUR9LttqUxZZ2zDyjha6xgWqE5Lk6n5o4RJsHV16ScGVenqvrHpNENbm3jRUQJf3uCqoEbRXCUnUkFTQz",
  "key5": "4AnMrr8aTPVgNsAzCiZe4W3KZLANwH6uuPaXwJgykw9KhaMt6iBxNyR9EaQzGuUqpuG9hoyq4ShALnhnzfXZuwFM",
  "key6": "2TvRbZoy8K6PvH78exibLNqtn4nqiAEAiD8Y7nPpGRqJdBGHZmcSbEQtjepQmBCETkfQFGeoXxgy2dskitZcJHLY",
  "key7": "5hhzPRAyXeEtV4EEyERgyDGPqN2qbtfdbKdmhEyjVzu55Kz94M81kjoecUmbPYGtW136CYtqVnoFwknbM5VEWkmU",
  "key8": "3hpd2rDh4BBfjez2uPYk2tPvepb9kydEJj4XcMy98wWefQUxZcmYcYAmxsnpDPXQ9i9ej6R7f16Z7fyMZC2oTSbb",
  "key9": "58MHwABy4akGzrsEuDNbFQRBapoeb27HQ75CXCDPpVqCcUbArBMRJi75di8KtxZeLjfqFvDPEGvbyDUja1gZ7PUE",
  "key10": "4Zbk25CUqXwQySTxcCXhG8BuQHyDWQLyuHYh1ZajDrFT11mHvVQY2cqeuGHFTwCvfdGWBTTvjfP1MXABg2WjMieP",
  "key11": "5hNYxT4A5FuPo1urfZgFAvxM1g4mVt5HokWufVRdh7TXSZc68pvaSdUR6FTR6kPmZdLtp5ZDx5bzCvvHCqdJPAGT",
  "key12": "2M6zRE7oENcSVnSvk7xJxBiuRGkCCco89tDVCgRa2Bwdez9zi9wa6Hxskh9terpeMisuxY7AwMkmQThV3ydRHpZh",
  "key13": "Fs411xgJ1quFrraYEadQ2vji8qDbu4atVLM7u6vqWr1QfB1fbP4jRdpzcG5Zku79FkG4NeL9Wtgk1nmA444uSRn",
  "key14": "5B1DeNfydFgZq34WzJrL2pYxhyDRgUxj3M3HBerLYAERUfhj8bBceMVyskQWaDWfCYYjLkuW8xNacUg1zVeNPKC8",
  "key15": "2nnKNsaucEqpjaMBC4GoNPUPRcChHyVrDSpa42SG4tQkqpmkyuZwfHGvE97zTxWPPxJrTw4QaQtQRzmP6jpQs6ff",
  "key16": "32AcNNwusCy26CJMEyi5FrRDi8kntLXXyBomtD1q96ADEKEyqbxtewYyZf3UiqL9rgvRw66yRkHHyW5KCxzNcwr",
  "key17": "3CZ9P8oT5MDdreMq89wLqPPLg41tEdHL5b8qLAvtFLgsQPbo6U6AZAC8uSMeaMi4HskSy1vY97oqoWEzQzV41yGs",
  "key18": "3PT6HohkkmWUDyUxugyC14LojFUjPi7bwAsc95JqRLucJreHjmzmvtYW9898Pmy6STrD9eKznqesywiTtsE3g31v",
  "key19": "2oyPcAPHZ9hHSLK8HFhLw6zSDxMY1Z9qY9Ry1ezhgczcYCf2AkPVvck5uYgePmYZAioArpC1XVRz7ipfcT9Bxb2Y",
  "key20": "4mtswXFgLX1LUa53DQD4aBDvru4jqvD6vPSZc8DjMkfKDZy7TXWLRxWrkPfs8XTj1uUuE22yezkRaNadzMZVKsEp",
  "key21": "2Cy5g7ybfuLMNMA3hiGfyQzQo5fyPU7tgcwVosNgBVADUsHMu9z16SksxTJLgE7oe5NWpcgpQxUt9j6Be3NA8juZ",
  "key22": "4AQ8SjR4md6Kz3LhCiSpXgoGUyT7Tg2HDRQxvgPX45i9qXxs3yDCNQpr5TEhRAi5sV6zGASG1B6C8nhbzsSN2SCR",
  "key23": "38vxdQevhzdq1rVX5Me71qXMajhbyVqRxfMeXVfCbpJX4CyAqtDSUHQgFz7GKayPsJSnLqsVxQeGHLgbCUPtjmsS",
  "key24": "H7SMnAvk7wdsjwTamDWnq5zpF4Va9jEeAbYZ3ex2teTiGkQpQoXAJVUy3GSmasApc11vHfSwAirExRi3vVJFhTW",
  "key25": "3ieKD2tRnufsbPRLxEVNu6FcZsAuDdRimTaFTahTyU8iLHXp9XST6knadkWA4RCx7r5LAfghNXopfJqoneHdU6bJ",
  "key26": "436E9AhxV2cFAagE5oSYpFT3XMARJSxUGm6rNv71E47T1XN4Tn96bwG4XaVwxZxFZzd4hFP1fZC3QMk456Hg9uBG",
  "key27": "4Ppeq1RWDCZvLJCTHaaZnKj9xPeKm83kr5PnAyaoJkssj4U2Pn9QeCjkt2e1kcH9H9BER859XfpFysTervRAFVzU",
  "key28": "2XZwY3WVHmCWAVHpu35G2BhbeBJLMBo1Lh6Jn7JvkvPXbkc1MZGVjXd1FWSAAwoRWmcxrDs6aMKDCwD2zt6r9Gjf",
  "key29": "5ym3XWMo5kkq6VMdaEUDwwtnAHKRsZrTaFq95voUsqSdHFbyXCYf8v7Uj6wok2mkdxndxy1Z2DR2fz1SigNJDWo9",
  "key30": "4DMCtAqDL81BD38jtWKTVtojbBRx693X76xPR79VdUdC77cU7sCKBntZkTwbEy9Smrh4uf7CHJNTxfHx4yY9GyTr",
  "key31": "NWo2SeMFca4W6ApBniWBAGDogPQh1Sw7P3Jau2ikziXrcddmwn2FAa7zHDB7uFP7cnPQP4wziNf9Z4nr5C93CUG",
  "key32": "4LqJpFBiHevfGroFvFBPKoPx3M57BVq1gvZbua3cLvKPDSstKwWf2UsEiDd7Rn3e4iudCoq61iy63vaNvtXoPbWF",
  "key33": "5X17faa84S3d8Uof8YYA3s7MnGeztsNeeHdeeVqZumvPTWdpr3QLMqfPc3zb7TrnCfWMiNZGRPZnSNVKaXEpTvgN",
  "key34": "64J7BTLo2nBBdzcXSzBt7zRMXP4hE72MoW38qaQc8Tmsov2eLLBjHz7ULFKWNXrJoQC4ueh25x8adh51NnWfNPx2",
  "key35": "4njgb2dEMZsmHJdEaR7zzPPjuyQT4ZrD7C2PYcRPC3TgtuBfNyH4fX4A6g3Y9p8AGpSLnNHiB9oaDvFVQHeZujYQ",
  "key36": "5AHWiMtxwBVU7xZma4F9hvJHMF1FkKgMniSRCsuAkzj2QfPxBA2QGupnxVMGVQbcFH9G6vJTPSfYnk1DjXEzWMxq",
  "key37": "5DC4kk6xGwg9vS9tBFeQAjVK5rFbABTfGCMaiu49kVLCQNBxtUjqpgJcwE6WADyEnnPS7PR8bTWoWCRfgPhUGezT",
  "key38": "ezELrj2hNygxZWtzx1xTRdvNTzwA682i9pT3z6sbkuFoCMZ3m62QT4Hs6SsCpzYpA2Y3TjEo6GK1NmPt3iVY8b8",
  "key39": "3GtSfmSNTyL3H93vPTAf1kFXbg2tBa6xvzeimnmnBtQ2rxKyGqYcKKJDmvtc2Qa8qyTu2XMWR7yhvnoKtxFatEW2",
  "key40": "5tioTUBXC3KamHcbcT5q8xMue8aqzJ8poUGuquj54d4HkqgxMvnq15QgfoySPDvYBZct4f458mDGBzVEu9MdcUxY",
  "key41": "3at5mNjBEpUqVd7t4sh6g59SPB4x2RkCrB9ka3f2gcnzEQQFK3vXfPqGTQHcRcadEjrjqQDECJvR2ABLzCPSqRuP",
  "key42": "63e4oztzQpn6jXLi32ZoYjEJHN7xbyamPCG1YHsa7Lm3YZewR58Va7LH8EAuuseSFeRhzWEHW5NGGfcXvitZgJWt",
  "key43": "3iJovBtjWzcsitvKuynWRPNtYYRWMstTDgDi62mGmACSxaSQqocNkLKJ8i2Qw6eJHn6FMyjLpntFKdXYVRU5K3Xt",
  "key44": "ta8XUhm2evwvvp9TYeYrbqjgunTsmv4gHRc6xmAFQ3p71BchAzbmKsVTQnXsVk9niCVr1Ah3oTL88DrUrpJYPVH",
  "key45": "4vonE4otDn5Xx1LFSXjYixfK8NdFt28NeWbMqTDyshCWsaFWkvcPVergynVnrAwEHGCoiR8DdLdJQZ6n7nHC7F7y"
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
