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
    "5Nx8FbGgXkPZQchRKXLZKMMghZS5Nc51R4o1pHiDMczKmBk9icr4R9XrCyN1R3ndaw22g5npxAqrf2QZx18bCpmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKVThNep7LG3hRK1xDjD8VWLMDC8EGsvPiHLDnCoWjWf9XvSkY4VXmVF3CBSU821RXATDWKQphHw7uC7Z599Li8",
  "key1": "2yGKnnYtKpp4Yt3r14WZmuNy1zesCEvWzAEiBHuuXPnZyNDPFLa6TjKVJ4x7hTmB1BwhU3VgovgiH3TjhKw7tuN4",
  "key2": "3N8cWCjJPucgD1BQ9GyKq7fkts1BzptdZjB9MgAgi6LQWzzGxLs5jBPhH2tix2GGTSGxzRAmnSWVPwq276gzkfqq",
  "key3": "5y9vumijEFvYEtcRPH7vAX4suRDivhvLibZLJnYucKLBFeUjCnGYEpgiBu8rj6BmtewgYbrkCfCJB1qDwTCS41ke",
  "key4": "3g2UPuuAikcVZCdz6eXwjxZqDDbVUucf99GJ7z3cJp4NVwqjVC9hLRTi8SJMm6htruencx72H6aiQNrnYL14p54e",
  "key5": "7MP6GviTUyED8eTYS9Se8HsJJyUyzNsmsR8xeqoByK618wnAja3pcu3upaGh9M58aKvTuDGGiBLEezHUe6TPsuR",
  "key6": "5C4BeoWRYAZCU6GKZRhA7RUigxiAb1t3NCvxxxNvG76wUfKatHDa4AWWyUKELujQ7B2F78cEYHVknLpQDSEkuBY8",
  "key7": "2a4buLZVbdYM68wEzAXjHP9fKM8Sdjdmaxmcq5b81Fzs3F3cPKXsoQbyVJJsTUxraq5Ewvi5uYbHPYVBBY2u54Lr",
  "key8": "4J1HtCmdsQFvSPniAZaNjugUig1PGiKkRKKJmKjoeT8ahnSn1WPEsWV1zV6U1CzveZLq1kukhRMsXbsLdScUoNHb",
  "key9": "3jvHMxP9h56ELrJD9XRENnh7JTXzjwbavwrB5Lw1KgWEA7P6L62T4JiN9ui1sphwcvUucHssDiwSt1sPBanYuNpm",
  "key10": "2fpauPcKWPz49w85guGXY5iwwarHYY47SuhjKPWQFNH4Bh2zqvSbWYePpC7VKSGsykK94D7saTK4yueTTfnq9vwq",
  "key11": "dAtCkKJaSMVDLcjunZodozqgarvP8sJzGrq4YFhqUoXuMGGbXGwN2E1MhQnstBBSnNNa172r6FhsR3WZuZtZyTv",
  "key12": "45RVHjkxv8qsBzCb1DKGko9hsfjTJmE7mD3NZ52baxTubxUjMEE2Yov7oHWfm37gXWZ9qwGNAhfnQBWfaxukfYK5",
  "key13": "5BRmCsvA2vDbBfEggMiiohJXV5ERYZPBPfFXcbdLaGLWsJq3v7qMskx56b1jDQhhKcFaVW4bWQKZ1HLXxcKEZBh8",
  "key14": "5k17WjAr2WB1ZfJGuAFyg1oH3oGm1XfgGWFxwKdKPp6iHLxCZ2HrQg264PH41bhYb9e1JvKgjVcrJEHpWWjtgtFu",
  "key15": "25YHYaqQuMFWg7f8KkeuZEAiSaYd5XNsBFEJUx8QCvUTfB69ovchVFwG2PGKUpUVqEqqADNFAS3ES8BSJQ5bd4Hd",
  "key16": "61FiQUGbm3yzHZDnKC9FKAo6qWyzSFWuFymb2ZX6NHbeDKzfXr1KrUe3hGmdaKUib9puur7C28mwfSvScacZ94T8",
  "key17": "2EvxGhqa9ovc2tfwawaBqtCcEMbw8c7HbZTcm8CDiBqtRrX9dkt348SnRmoGR43diJp8kKcfxwpZfMXZViCm7KWi",
  "key18": "5Gajswy5kkMM9jKMYsAxapY4whUNMbczRwdAxg6by7Pwd7AePsPUdDB1wD1MaTVpMRci5p4GKL7cD33CUeryJNdK",
  "key19": "jFFQQ4GD1APWT1Tf6KSBAashYU13ggedtPjbNujJ1y4ArdAdRykQ3VY6CrWYuw2Aoxaig8QZyLa82NUVFWVmUGX",
  "key20": "5iQA6roEa21M2wVWNgkfvK2cAHwQ4drY2xC5iVLwFtTkZihrLwwnfP7CQjNnDReiVDDhooHKpujrjfEHh8MWFGQn",
  "key21": "2WBuVdWicmUrk7H3WPfYPWkMPmTh4Wqpi9SNUWYuaUYUHVRYLKq8Get7R5XvavtdK7iWSm7tkWcNvFmDehJLLH9G",
  "key22": "2BYf3oqZDzsMx4TeqHhTwoWjuCkMtcuqHNDYNeN9CmD5LgXsSwNDdpjeHHJFy2BVdaWChmKLaCDUW6wWcq5N3qVo",
  "key23": "4QDsrBXFNt4pzdVzzJuwPM8aWgLiTM8FVXQeKp1WD8LBsPQbDSKXHHjbsYzBwhYRHqv95U7HMBUomUkAndDTzEEX",
  "key24": "3NLb18JwpbjJWiGEFn8cUahHs6iLvsdCVbyJbtkLRWJsZE4mCTVDCQ89DEiwcHSAUjHc4ZL8cj3LsXWdZqzim6UC",
  "key25": "2CR4NVzkmQ3Bjvp2fSZ4QoVjB3foDqy7ZeoaU81kRr1X2ZMjZDpoR9iVEsapfXbojoFDvQRpgBoJNNQi6oX1pLQV",
  "key26": "3bvZozEm9qGmwEZMcZYdeYn1215k1kFpMgwCtV3SdXFbcGs4BrtPvcj1cKhYfpZo3iwpfG6nDTC4uZxd7fVCLaG3",
  "key27": "2ivFNsxdFUbgVG7QzVo64cMLb8EAFXrsk3AEpEukAwuNpLRKSdKLhHHQud4jjvEpAS8J6tJaaks4FLg6VSRm3wcp",
  "key28": "4RTcDxNZ7SUovjziRgNMppuYv8s9D1WuqGjSAGq649yojKoR1ByLPuuVLdtcveiuiQaf1XjwRwttk5pfSdYtBewc",
  "key29": "56kPBEJuoxogXbuLhxMGdyCaeegbcAAmMfSWETNj2fM44XAkZmycpCeoUtSctMNe7wvAUzLffEpUZNDeGbnfMt6m",
  "key30": "4HwWWh3Kg93XCZjdfZk5xSR5WqDiezmhjG1Gz8N3kQNPXJzPciSsUCDqXHyNASwi5K3yt9sHPGZqN2i3orev5YRZ"
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
