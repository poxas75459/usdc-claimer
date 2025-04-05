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
    "3CJa317dFJFCHKy549rXWUUKG76YPrcM2HeuiJCWRRsvsKjZyrpvQFaWBsTiYrnZzHiCHWp47nauHDTcULe7qpUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KxAT6iiEedNmto5Xph1U7D2qUPAhapLr272fvhwcT15p9Qmzx9JXy8eNqNtRrXYGjxWsiobeTv6YKsw7PPyxxsc",
  "key1": "34dLDgDxm7dayFcYBLG6YDFWVwHTw2GqtM8CvCNFcMziks5SBrSt9zNavGZSENMQuTyWJaooBJcVkHMdGKHnn6Rb",
  "key2": "2mPnHFagfBggiPuf3i3PatZjnW5bqGQK4Wkvu3toSjGvoiyhMwaqJVMUTAP4ryx6oLSU5PfCHKC31Z4313Q3YHqc",
  "key3": "3kPwdjqrLjk45Zd4abcgq7MjgqNJm4oPFktJaKYwNeANLtgAVMVBnNnRERNWmfC79m7fcGZVG2WWpHLDACfJG6uo",
  "key4": "3RyYV4DxJFdoad2o1keW1EYc1JXiWmQ4kSHoSCTeYALj22ceccjXQoCrVnS1hhcM79uD9M4z1gXqyfsrhwExBJ6t",
  "key5": "3dzU3CdbbGXabcuZ5LC8fgKZMSFn4rHi8vQrHhYt9rWvpWU2jkdfDbFNyVCEGrMDK7YbcX3vSex4VTyVkmc4VRb6",
  "key6": "2JERTHYNzfJAtCT6X8BUQ77mo8WpLRUEbNiXf2PXLuWh3WQH4JY9fZ5F4Ab2jUXp9vyqpbqX2bK6TjaZ8oak1fpd",
  "key7": "21R1LGWe3kEbQdFcVBEnrmMzUmG4wTftW2uMHSy1BB5BB83oDgpuSiha57L67SBAo8HU8qDUEgqNoV5JhP2iFiUu",
  "key8": "3SFNsqi3tZmnjL2A1vKPY7UJK7pU6bHgqLx6ioUC9GdmyUBWWy14SWA1yepyyBVUGGABiL4WywxbMTqPSJVJy264",
  "key9": "5dkLBxwaV9xj1RcuHVT19NCVQUD9tMZRo2gZu9uu9BpbGJR56HqrPdPmzpAbH7eEsVJSf3DGZgcBEf4k4qo4wg3D",
  "key10": "qvzdktAxdRSKnLBdyHvJFJNSiuj2xZigfZLF9YNk5iw3VpQkLSD4h3VF72csZrrZVLWjqWVM1ov48KaAAwHsj1h",
  "key11": "55xE94yX7b9YedVAsqwYXfEYd7AQaheVrHaBs4xJ48QijygL4Ej2Vo59D8o29tgQJBeaUaRcF32ENygUB6fgjJLM",
  "key12": "4itP3y6GbTQsnDBYn7JkYWAdpEFMWus7HKq5hfVKZ3N4X6oHq7JvYQXQYTotapiNsV7MLCPjBSFNneuWZGB7AQM2",
  "key13": "ubKTdV3vy1uU1wF7jkU7TA7PytJpuWMLk53vCCam5Sbx6HUsau4WXpRat3CkeQQBtvBKRpUN78wUDhGuaYXFGhr",
  "key14": "3smPUHZzPeZnAUqZfEYf52uDXJpgzAsBS5rvmXawZbDG5BH8wu2VeeQHTPcB9ReGdhxGq3yuGhbFS3i9HeZdAyWv",
  "key15": "4h1CKt1hJveuWsCd1sEGPTgGp4Q1fCUtJQ1PYejY18ujyQwF4ffd21pLcKvNaVeT5mqt3fDbFSV71Bv8VcKTSHKx",
  "key16": "26Uktw9HucQw3oiDe5SeUQ4FNgvSY2nSp3oYiAdtSYBoJ2mXAiGrdtYSEUKpdtrGLzXBMTEqUtSVva1jw3749SEX",
  "key17": "5Wxh9QL1TCpGN42i3syVuw3Gw4y2kMbbYkqWV1e4CYbmNpKM7Mg9SMcQviBEtMRrz32NMBNcm2K7UwcgZoRX2pNS",
  "key18": "9btZjTWN1F5zpGe7vLjB2H2JyiXqJn6opBcs5nVaP6A6vVukEd7PA3NeC2o2bZRvT1bFBKGygJ8yahkaXdyFK9X",
  "key19": "2nGWypMoEz1vh5cSzKF1D4wUKCZW1Y7n78jovk3gzZjizCzmrLS2ehGcE4Tm1DojrpqHX1Q4HqsdkEAEyGva7riv",
  "key20": "k3xgc5AFqYvsvtX25A3vsSD9qSwy4v89y3booPtypcUzwDmdXJ5K4jmvtW7upe85Kp6Qi4CFkXQGtzk1wrdE1xu",
  "key21": "3cufRrDofdeqiCrzR1WCCToKieb3oTvG1Kjizo3wd848GPfK8Aqwy6SW76dk9hCMjSAEX3iHZUjk941WLHAvHDqr",
  "key22": "3bXbUUFhsE7GoxoHZ1f8GdNjxtLsMmbdkHUgkU728mcnm7PJExWYgBcUMXFxbcdD8mAsh4rJ1Akt7PhhGVjZh7ki",
  "key23": "21JcUc1zTnn5Lm2daX6RM1q3AHarBNbroAz62JFaduiATq9TQSouGDtZ8PsEfyhVRTwedEFZHAqJNzYpiogRAc7t",
  "key24": "5brZwVUeomr4EBo363FTtVzqmz5gYBQK9jbnSzob4jwzkBpYMm4pspyLpYXb68vXWkB1tDkrwjed9GGU7jbkD35e",
  "key25": "2nto4auaWwiQDxyugBNWm6D2EShsHzuFtuy37Ko44uLbrkNRYeQLX1PUAjEQfe72x5sGtYk4kkZxJByDC3CZGXE9",
  "key26": "5bDyPFvG1AsqoozvWpGYQNGqDdavLA57PWipnNLnpZj5Y2vi62wu33GAgu8dq83QtCCdDFryvtwjG54GT9W7oLA5",
  "key27": "36E9NjFso6cMZShNRKjthZqHenm6fwnhmRvqaNNrPM87or8k91ySXbemgN8S9uVjiSyPvc58s8ZiCLUK8P2wDmcx",
  "key28": "zACP3ivkpU2YX7ugixNmJ34uqKk1BieVn7qhmq74mr9rsPa79ysCSpdMjKBqoUF6p6Y4X5hPtPrRGPFuSyQgAE9",
  "key29": "3k88MgkA3tZwUF4siaTssudvYrGTwVcLKPxG7UZFH8UQ6paYSQw5UdhKowPhGB3K4zhHHvZAtickReaPA48VibTn",
  "key30": "4GwNR1e3e19DvsYZfwxHXSFpkq9ePibeAmq8uco2eHEyHqVXySCoMCTvRiVyMG1GWP3Tky1G7iQHuFzyazHTpT7B",
  "key31": "S2pcPNgLgUBKLaZaFHkBDRBbSZjXjknUk7xxGc3MVKHVGjMx9ZMCnudxf7XtFBAuJRBWR8ZkkNGGdDBo1brEhvE",
  "key32": "4PJB6jUaLRcG8PnXKhhqowhCRzMKzhXQwR6BWfkQahwuFGqqMHY8YT2uSrTtZFA3pWPyrQe8uUUich5reB5MMsVJ",
  "key33": "3XUzbZqz4je46ExJJ5zft1wGyrbBfJmcxdVNLqPcf8sSiUBmLyCgbBgNE6vZ9tky8FVuxKoRCzJz6hZ5bSYEsvYG",
  "key34": "2NPGeaRXZpzVC6YvHZHNeqEwqCwvuA2oBA3a2VxMiXmbUMMBXm41MBSLs2Wa3rosujoSNDNfMb7TLWt4GSU7FEDd",
  "key35": "5V1GnDGYhSxgBSZmzEN7aP2B8uXzmGJBCoXuewxHp6JbF2yAZqTejHcjjcMqjDwmQyuXfELgC3LULwtzVWRNVo4u",
  "key36": "5tHCdCPRxPQKM3pj8xK81jXxp1dg54RuA6uWFUPiRWXvRFXarECRoYJA3tajKyuwz9sKb7ZV13sPsvgAjQT4RZb3",
  "key37": "2nruQfngBNXfLsqt5tdJAujTheWYNt41rLUMeCDMz18CdnTH3NGE1b8HgGd1EFkLfppbb2ytKxUaHPSsLs2f2R3t",
  "key38": "5xtZDJ4UszGQK76o7MNLagPbgrPnurAUDofUQagAF8mT7pEJh3j4T6UYNdMzpC5ZXBXjsKJ1YHoGbDxMA3zUnvaT",
  "key39": "5dVJuutANuQErE7cMtm9P3AdgPYNcucCwXdDuzLPnhF841p9JjyV8xuchk9GKLpxUEVGtoBZQpdUYWKFj8FUnQBt",
  "key40": "64oRQuTkom4Q96C4LJkWN8ZJMpdortvzXJCxvUH9u9Tn4wU7Y3Y47yu9VXXs8KfVhSN6PZsRikKnvPoN73Khmckm",
  "key41": "3xMyUxBV6dzgyJWWYC7iHERTGKMHjP7KBhXbhPMs82KT3YSN3jiaHtKGkoAmdTar7NvcjjrSkwfLepEm78c1TSap"
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
