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
    "4E8uP1YoVCQX2MvemLqu839DXTB1BivwXdoDU2yL6J8dzv7oBY34gUBarnbhF1KDJ7Fm7RC6J6vKwHWgggf1t2mZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uPD75Yoeuy6eWq5FNdrD85nD3869r1p4Ae5sSrMkiYGKwUSy866VchaZ3LfatfGp4UBfUAHtLbcg7rr19oML5G8",
  "key1": "3dccKXkhjULAjkeEqttNHZjt54t7vHaAURwgZyXN9Ccvdow9T98TvRScffnNBcokfTDYyxSTdRZLXtFBREDwuL2G",
  "key2": "EF8kHAXqD7iZ7a5MkybKp81JMHBAufsuJqSkrAWcLQS3tRmeV8Nh9pEWYwSSGqTMyHdqqYjyD6w5RLZAmKkZtVj",
  "key3": "518QALzV3bW5Johxs2uBJuMauFHv4r6KbhhcRb2qKygq8VFRpgsxZiSeTzKLUsW69UMcREmzPnpynYkFvY3cnJKJ",
  "key4": "4viLatPpohgBhh2SyrBWPTA5kXcNzdXrCLKYGgpwr3xyJPQMVGiiaAKwXuuufGsptzDHmwawxexjXWUnvCPCwd3Y",
  "key5": "39XSnwxMxMGaWxF3fGqsM98moHU8b9dtUDD1f5wypCmLwyfce3YzTJhypoBRRNS4RdzngDL5B4rD9CmjdFbE8biL",
  "key6": "2anPzyWG8RWjZR38QGejU2AYpFkKx6oJxT6wnwympDvhqeQnHMem33Xm67hTcibNVhgUmx5Bv9GwQ2rDHsvKdqBD",
  "key7": "22gVLCsJKQaSDEhLVUYrLV1fcUnj9aLB4ZvbdTBX1d356naJTyf5DxkVFPR82VpLaWYYh5MLSwd5RaS2BEW7NZqA",
  "key8": "278ZLyscT6GM15gcY1Xmc8q2xQkvjL2j1jqWwQsrYUMWfSwQzHaZBHyyXb9K9L4W2ggsAfFRadUancBKo5ZbAHmg",
  "key9": "aCfrRqgGfkX9VxgD4chmHvdpi7CZ8zHkhc86nqW84u4p9jmhcGJdu8zeYFt2WscUWiHfWe2SoFsYCafVyBq1uNL",
  "key10": "5EVxdZGKjiekpCimMan8JXuWtxMBe2NjdZUL68JWHoGAFJbABX9c8tKMEPHUzbDPFUnGLXHF64WJNcvTdYJdgpv7",
  "key11": "2ReFDcjByLLjbsV5nSVoFWUDXQa6HHRSRxmjQ9ZsznvE8TJuGX8jpYhFVz5iUo9zq1dPtjZecmm3BxeTnRPJmUSB",
  "key12": "oURfEiZktVtHZeGYnG6EsAmFyfQT5LyUYj3xHna1DryUS137dzbTiHosAjrUmnEgKq1U5TCCxddxnUneg5u7FoU",
  "key13": "2F3wtq5DR3aXpc6yiDjU2bYBS7K8yEYpvuyWhs6a3nnvm4s9jsuGEDsAZZ4hpWoiad9YKLSMdfJcr7csm19D6wDK",
  "key14": "3Z7jvvPWDnVusfmQqEmautw4yCX626b7hcEdM2ThESxNH7st9cxFckoLYhoQK6nNXdmkvTtbxfNJ7PtdUCK5S2Z",
  "key15": "5yyVFk43XnygNYyk75SvvMDwi6FGXgRAUpDGbT3gRYuvS8fHyBToBsviHYNiAr944Vnbwvr6CcmD3acC8QBpqpGT",
  "key16": "3LutD6foYoN2ATXpVSFk3QSVPnQdZA1y5XYMrqrYsjcEZwizhqqmXzqNrkohyYKSRR69mGPxroR77idP77ktzJqq",
  "key17": "ShmvBCyGdTgypQPTuN6tCZKrVMASb89UEp3t4TxLB8tK58mHoYvWozNzcUsScUnTQFTABzuPNaeZpUpuCv3tQjx",
  "key18": "5GrBdm8ye11ediBrnGPWehkWNaTdRvBub9SZsyz9ZSUdEQHffNFSNx3G1B5e2KTmznhWSFUArFCcCc4XrnszsTXo",
  "key19": "xhYFHxUBPAvdNpQKsWnHY65CuDauxvqTM2MJ4Crh9NP5BCQDTVVgJP4k7khkNT3YeDWM6Qo9LNVGAnWmHc9vKkG",
  "key20": "3dg981k8dAh4ETFJBvKgqd5fUwStD3LJixxzUkeZqShmnZYzGX3rWQaVgkCyY3xeBBFtJVfMRizWc2vr5RT8i36S",
  "key21": "4W6s2J89Xd7b5chB97r13DnHXhyTcoSrC5ogwxZ9vSL7KCGHMKgjZxooAVaAtGC4KDoQRRjoJnqbeDxh5ygkqZ3B",
  "key22": "4aAmVDD8bvEW8QCQu29tvzad4s6uDZjpN7sazv2wwANLKKhnTYwi5NphCSYM1cJhxqHeEVbgikteFfVJjTppcRZk",
  "key23": "5dpZmSS8iNTzBjJo7r2d7Ks1fSXLZiancWBXMFCyhNQNd9YJZsRQKyxr2D4PzjSUBEtKkPji4JGRZMA7oV1eoZoV",
  "key24": "judutcZ7bbqhKAxCaC3D1MhpokaaFEburbmkaRLCQ96yrVqSpsYrKeMMNxPjXMRQhqdZ9dThtrbd4rfxu3C5qfo",
  "key25": "4YmqXatSrMLeFT1XH3KjArgfWMYbJSW6gC2EERLHkkwWeUj1dAB3ajWrjRK8MU6yvYixdDuaFNJqCPhARrLuyMcT",
  "key26": "GphrsE7ZEZFRjC7ZQZi3Mo63MkX764uZd7eqGXf8XHhyXirxfvvtbrwd89ck7zKSW3TtLsMhg7h8Xt8uHcR4kov",
  "key27": "22vbWKgNqCSMzhLMaXdq5dzQfjCY32UJJEBSpP7c4R6tmuAic5sefFhKvQajHeBkht4m5WPsdZyeWR9siZMvom8x",
  "key28": "3Z3Mdxg4vazMfmFJ8QNzPUokYDnhUtD2ada8asskXszWpJizUvP1Pf3h4YP9NNYUXSWVU3rHA49Kw5aZu4ndxHmu",
  "key29": "51LADc8FkLmo8CtW5KsXs3STx5EKLHx3yU5CYzbXXvfegiqR9UipXYxQTgzyHefhc163wrixtW2WRKR1aK7dS95p",
  "key30": "LmaQrwuRPSbdq1bFvoLJvBEVKFEnrNA7PJPEQm3YvThBpieieC4sHZ9RbXnb179sEqv3QD1H8XHfra2PUt3zjRP",
  "key31": "8xwNPzwvQjNBri7CseNTjgDjEuFMThigD5fPVM9dbNjDEgBywkw1LVzphcWY36YGGRjq34SsUJbDSavJaHiNptN",
  "key32": "5m2DSh1pqsbHu5T7FToUpSwmgnrikCTfY3WzouoYU6wyibcshPAm3Cp9xJ8BjL7zjrtyaWRTVEJnyLA7ewctWuXu"
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
