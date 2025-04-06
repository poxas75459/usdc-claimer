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
    "2krVMDGCo2981rj3dGPnhv6kMZD5vPtq7DEcrCNoyUNhu7yBbdXecwzqT4Hh4ZxKpKh26CHSShb4cJfPxfG7ZYHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xq6cbkUmoD7RpFnxTRrviswD23CdnDXi945iYJTfLgNcyVroNvoZSCHLWNB4jFFgptFeeq2xtP4X9vHN7jQoom6",
  "key1": "3WMWtPDJcKKSkaNHN6GgVF3rp2ym18XDqXRFgU5UcK4B3R5ZqQsrV5Pvj6Ns7kEsdtUjYpsVWuFussmNhYhFrWKc",
  "key2": "5ELWG7BNdikj5SRAZ39o6fW1bfzr9ozybkwVa1WcR7F4iYC1dPyGgY5L17d9PLVJ9w9bKh6x3L7RFVxtyXcSDmrj",
  "key3": "3ZPs76JzozVsF5sm6gV7zoVAFK8nSvBqWQfNmPbnE3BakP6mVVPKAmdMmgo43N6jKyJ6Pt14wPK3o1f4Xegpvtf3",
  "key4": "5jcGUBHQEruQHesyJ7XGu2H1xoria6bg2y8uDwCyrEtT8kdMA2KYJK59PGus2CZj3R6K5vtWWnLYnb5iJot6wSGB",
  "key5": "47XY3km2d1vyQAokNQUKVFqz4EfLvfD78JuQHGADEYdaeFx8M9m4N4c4ZPquJZsM5663iSuh6mwZTDaiHKbnZAnL",
  "key6": "3q9wwa8eaTQNYAPg4MepXZf3soWo2LAWrPXcS1TrFDAHG6ejyvjCdyvGdiLu2tLUnfM7tcpSxD9e3CgjDq1crRDg",
  "key7": "2yBJpa6qxTSKw1nTdNenfTs8M8rDdxb669zhPa6enTffTWcpKVoELQ8921s5J2oDiNKiLtUJM3hU72wuFAN6Uts9",
  "key8": "5YuCLZxu4zQvYRySzpu6Yv6SZ2XnQrKW6SsDMhgvk1xAgTzZPzi7oAER5fcEhi2dtuiMFMoRjjH2gnr6W63tvEKB",
  "key9": "5Wyn2i5XZwoPZf7dhivQsynpLyzdb6SH7BztXyNN7st9g1aL6q5GWk1H3Ceg4Py5aJcmhAFoeYYs61f3S8GPrfwv",
  "key10": "YczQUGjqFPSC76Tvv7SzNmnPDytBviREAiCfjFSQus4qTVDwGwxsz4pnpsnaUFdT2qPpdqp8t9GAgBv6RoLCDjz",
  "key11": "4er7rCwcDWwo22U2syguuaDq7aRpjx1iks2TCFJ3asWxAWTGY1PqHmhHKvTQek3Qq2WA83jPEqhT9RBqzQCQ9fMq",
  "key12": "43i5qSWSrTvZqSoM9BDohxdhyapPzAhBcGBTN82wwDP3gWsRaaZTP9C5p9EE5oc2h8XpsJBF7KaEoh4uTAkpyV9o",
  "key13": "2WDekR9scVkLXJDecXiCsfTrSTMhQ7h1sLSE1gcLXscs34HMD8PMhgG8GhLp9JuN2qUZXTEue7G2jDDUgNdPi1bt",
  "key14": "55hYJWGpyxfMPWtN27rqCDHXTWyLjxsPyzXsZF7V7KesEuoKzaR22jsatYe3njwhTR5jzEdzQ8RUV5rTuX8msGSQ",
  "key15": "3sZrGe5b7RkekVq2bVudi79TioT64TFzNedYTuKUJCXYquUJK5Q16v3QA2G3paE5K1aBACFX7soUs9M3M9xnY1bK",
  "key16": "5M61yGg4RvXSRTbYmeeFdMCuxkfXtk7aGuSRm2xbTH1pzUjbfWixU46yoYARXc5uM8626cEUTLBBmtd3T8HYgTSC",
  "key17": "2jUVQRkWJQtzxp7SyBX8ZwZ36KgQxxkVoiz2PkVJiDAfmNMJ7CjxDiN2GE3QHwyehoMvVsQyNNzYzFpRSK8w6DS4",
  "key18": "bnjYwpNQVJcLEmcv8W6ZMyC6KJtoVWyqeatsbxfFXE8APoL1BH48aYUwbZsuJ9CXuqJzEEi4KM95RNteEqxYbBi",
  "key19": "5yFPTewww9AHU35iUqY1rN6FNujtWspgtNqXczqHZUksbYELpGzPf6ndtVLQKZ165wshre1yLZzDZ9M6juD3Y44Y",
  "key20": "2EVjvixjU5DmCjMNY9XwbpKqf64LvLuYhDjjdRLTwn4Uio8ZUmq7eVvAbNiSi1HDzZjguAa9Z69e4zFTpLWeX4iQ",
  "key21": "5YEdcvK8yXLebqWBofXqyyce2EKiYZckSmeRYyPLEZUn3ec4bkQ2XmVoKseJ1CyamYsRUdmjX56AGa4DqzKy5UoZ",
  "key22": "5mkEyrzZocUU7ywexzNsAWAZqcA9RvZibLJpqKJCmSGXBuvn91UAVtFMYZbeJhyVknzLsts5WUjkPK4LToMD7SKH",
  "key23": "3zKeWANDGkiu5Zj2EEQztYQbDiHQ4gz3awXxd7M5kH81ribkEm7dRxCyXyPLdVduUoomAAzaA4r9m6BSoRhnpK9G",
  "key24": "2TvS4FYXmPKnTWHYCH42sVR2fFGs8vxWA5MhnYifLF6wy9YDxNGACQvjcuP13rC6MqYqyCCkcpUFQ6ov1mkdwAXL"
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
