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
    "3HDqmNfYpus2LB5HRxTEaPG8aTP85tBxXUW5kamCy8gsasnk9Z2U6Vu4h9RbhkHPfsgWNnjStuq7a442Zpxm35v8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nBxMsXo1yoJGCizpLcAJfobixiFQAd4HMGTEvu4vLP4Q8kuYKFpscwz6ugSD9rcTTB3uj7oMvuTBJdD6z33EEWL",
  "key1": "YyxNZCyQDiUUAmmqMpwjEPh6Bty3Pw3Qn6HuCLyo58LPGcBLwpBQYvLpLJ6YHFA2nCQ3FyjLvBF3MLrwBNS3zHp",
  "key2": "3QsokXDq1Z6zttNTszueDoTvNJKSURYEdD22Qek41qBtBypaEyxFtP79WCiHQmAe6oUea1i8sXwr75b3PzKDnC3D",
  "key3": "5Y7Qb3m2FmmdszsuHMZ3bCuQeMuYHmPyvTuw4LuYpnsuvbihqeQ3Xe6jNE7gu5nVUTPkS7PoGLBUejS8jiDD48ac",
  "key4": "28JyN4Hzu6Yqvdxq2rVFAieWwQEhi9nbs9Zwx2p57bS4oWrZUM8Bg6mqBsYZqA9hHHGiFocTjTuQsJXT7cYamYam",
  "key5": "49a6qHC3qXyJ59odGJh7s1tfdnjLN6yCgYnh3Rn44Je52fqUeZ168hzyTogTVnTthjTCrPcVqRkL6m7KBStAYqZV",
  "key6": "2Ga5xnL5EFnVEMv43MhJ1ojKu3BE7EFqoVuaiGgvjfzRyW3nqMhqQdas83zDqRFZ8KsBSMnt1ooUjAtW9Bjo391g",
  "key7": "52zW2rBTmpufjpw31v3ovN14BmiNK3q4J3AvWGoPUfYjkTjVMsDARQW2aGvKn73hYoWYZFmhoXAx4RWATMHpXXLV",
  "key8": "3BCZQgY9NUFaVJvsqTr4SowUNQ9vEVwqJcd4xAKHrf8Ux9QMR5sW3TVvrtJzsNgnZ1PiKYPjdkh4v7G1WUpJyywJ",
  "key9": "2wPmerQpPuNmhBCsqwandRoizvPgpzGfWfiJfdhpHquMWKp4rpTvWuoV8mNqXpb8w7PMw1PPJntrdAuPyTQG81Yr",
  "key10": "53ZJJmkGKGCFL1gn6f6H9fJGFgJAjirv45jDirQWECieXyT8df8qkD4QuQa3AkRxXMnzN9YT1cy2Lr79xEKjo8ER",
  "key11": "5PJXMU4apwwAoMvcpCq1hJ2FDyEiY4QoamLe2J5sbjdkqvHYAQ4FLu9gkYMKqrQyYVDBp5YJArovc4JKRY6Ws3YS",
  "key12": "54n98KPQasDkw1eXmzL5Xqu6ae4auDGQzSjaTahAATg449kfu8Qwwy1sGR8pqziAZqeCcZkjicKoPuLqtfFwj5z7",
  "key13": "PHMbMhjdfHxsAqRSArAxDXeHkATqxdjFH84RvEJ6EqVrsuWRrbU9kSKjERZKdqQmwr13YqL33BVLdmK251cuauJ",
  "key14": "2CQMVdu4JWTh3Wxn3Hkmw6JQYYajq3h3YQgkBWSRHcn7nWHKPmvVmkNELFm2qzKFsHdNC2dZxkeRm5CCf5TgJk48",
  "key15": "QWaDiXYxUYfkut9JTMpgwnq5Fdo9JRA2pyTdNkWdupJo2Cqje7ecZcrKJ4g8HxokfbD7ftYdscfBDRPUxzJhyyw",
  "key16": "26NNEJN3Bt4jeYGCTBup6JyuXEV9im1ivQHiMWZJxCdnmS6ycdKxhNFue4LVpax2mMQJ9TUM92r7V9F9PVBpR7HM",
  "key17": "3UNECc2GZRdMNUzxBBxmde6HWkfTAGjgy8EtUkL4pXAC6mGs6zUdgTRgpk3H4ADhm6AfTik4iWaPpJXr5sNrisDd",
  "key18": "5H63dXucxQ11RiE7otUru6zpWn4kEFWekNfQks2vg5rVtAXa7ZUNuVCBsntaR7BHXTfVUkvWDcj29txKBY3yc6Wa",
  "key19": "4ibiGK18w12qxzPLcNXATNoDQGEHyxCHFvpdX6ZNncWhTG4WeL5CVFuJhXcZkfeEQdvuy2GCZiWspSVZJSxrPF3x",
  "key20": "4jpsvRurhipweVYEDbXJynDWxC1ZMqvqnXcJCZjNdGNp6tTZHkrEwkLzrwmWTDMWTM5omes8Md9Frs5jAvuDL3Yc",
  "key21": "3bwoFWhrKqCtipCXkAatrxZQzSgcuF22VBZyu14whEzKN9d4eRbHiuZ7cnvcYtxVhP2Xjs7quwZ4pwp69UiGL5Tv",
  "key22": "2CEVsv2dVWYHPnCQM8pkjyxfzccrsFgwLJtkpfJnRxmaoK7L1thpN7ng8sMVSv4oXRW2uRSHFZ5mhirV1oz4nPzH",
  "key23": "2Lgp1NtiPtTBYDqtAds6Q6tkoaiAUe62ARE5WBmX1ZSD5tQvVzYSHLPQxtVLasEGXx3ogDQJFPc5HFd6TJUAzMBZ",
  "key24": "2PQZf9zBTVubBZ6VDkeK11DtCDWZpA6sGwrBSzyJq4R88fYv5oXRMtfgT26dAXnaMfwxUeQPTtATTG6yYue7P3Pu",
  "key25": "5pStAazXuSAwp59BahaDTNLcxKpf4YjdmA1k5EkX4Cb5L5iyK3dY9HTf38PPaMooYnbBaSWt8taghJufHkbxxxhn",
  "key26": "xiLd4heBYy8SpaayydbVM6HhEeVMs4GbSn77w8C7kb47VMgcbFUkbejyAHhTpE4dTJQcQsuAEc8qigyVpBSrWfc",
  "key27": "61uCkJkbgFTwH8SThFKPcGht5D7UnAahqNQ8Q2ttrjG6gQ84bVty96xko9AummhWajKKPZKVJYTEPyuio1QmnAha",
  "key28": "2F44pwciqMbLUvsR79Cbc8zUvzJXxcT5cE3FELwVRKu8MxdU1imWrdCfYePZH3sDqYq1x1FT3QcKQZThcmSkjfdL",
  "key29": "2b8PPTTWTWkrWVTatGgvtEBQojnFWj912FpSGZyfpiuVQkdz1WVVMMJrkXYWyyYVkfK3Ecooi8AmJqur9y3ZNRjw",
  "key30": "5jfpQzzBnkf8CW4amiHpFRSfWCe1mVX4nmvhFzx96P1FHLRQdQ7bHjRG3ZMZMFiCZxdkbeDFFKHmxvRHaLRuBoda",
  "key31": "5eHxWHPttPg4ARKFrPpgT3bRb1wKYzudLEeBpKHQ3KSdY5DfKvPdCVzmmiNNBRjjwBPirYyq6HS3wmnN4kVKBCxE",
  "key32": "5DqqKXsJqDitZUd99yJogUn7ep22vqhVFCWwFLUH31UVsENhbMVbRpnS4hEEbokJbVDpCFroV7LK3KxA2mTnCySg"
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
