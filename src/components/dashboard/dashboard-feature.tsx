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
    "5zDtmGf6RpT8csARkLBjXSbiKsxx1RVBNpsGjCgHaPZNVM7XimhLHsBZKBvprGheWwBVeKqB8BHQ38EALnERKvFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AU4NHUxA3eQ3qZfBCSLjhUFUvxcLSEdyAToo8g1ibsn6Cwc2CyFcQcDdtqkpzCWTpdFGHVNUr2Nz67ohbqjMXgo",
  "key1": "44DKnBVyA7nHdyEMosxAo6juemTHp5YCBuNUfUYSJSqLmbGnUBHy2k45oWnsrgzk4T7Xi2P7ewPunXSmBSFoDPfd",
  "key2": "2RGQ6WQY7SLJfeoHrjBtjPhfuXikUKwYJYasMEVaNPxEGu6PL1JCXtr5FwTx9CNjKbKdVmf4gWFFX9qHZZd1mqJp",
  "key3": "22J2GGYNUYDsu9NDXKB2dSumqSUpFGNdwUntNCq4FmBwZvMq7abzjdF4FPWeMEb1RBka8dFoA7rxM3J4uKBzgnCB",
  "key4": "3E1vPfWewtYcNwqTwCmuroZygjRZqdW6M9Z2NwGnGp68huvHeEboVm29jXkNvsYiFQyEnH22K6Dd1d42ydzgUoyg",
  "key5": "2VL9CG9i2nqAf4XPGn3Yjgdv7rMA6H3GY39UZLmgAQfKFRkSDUUPseJKDC6e8712kx3qcnmPhz56GffkCcxuKDX3",
  "key6": "24g2XNAQ7tJLvUhWjZoDpsh6HuY6L3mPtKV97xhWhheTSRxYkQ4x1EDi7WM3t1ufCNLRvTvBmFFn44fY1Mu2a7s3",
  "key7": "4ardLFhWsR7jAddiAhYauHgPFEspNL4FdyWpGuMXRhNU5ANAm8rEPnQs5jdJLR9w3U2K3gA7kB1GvVpb9S6E5SGN",
  "key8": "35Qrqf6HaR7iYdYdXsyFDahFYesDe2XT4Fa34mjAyUimBHzbG78LJnSqhxpW7E9Df2KpzqpSq74kaiMqr3N1bRS8",
  "key9": "4soykyt4CieHc4zJhuNhW8HEMTfqwPgeLYfEd3QyG4wAM7ceqZuXhYvg1NcaJcBoKTULDYUpuQ1xTvAGKUsMqbp5",
  "key10": "2MHXHnFZr2wsJHgtoMU1dAXJ1ta1UT7PVEDvp7UUWsMrgrUKXadUbHutGFhjenVq8vfX1f6hCsHkmZhbp9mBSZWH",
  "key11": "4DGfXXGHpWJEp5ec1WbxxiBahTH8G38fQSYVCvxQFsSu3vh8CaW91Hz7hNrUUTT25hvugo6nQsc6T3qyi2S2pRyb",
  "key12": "jRsmLwZ1DWdduyfkHggZV27eLoeFoSEQKE9en2rYWhfZLXH8Pbsaos7s3gKWHocdBUG72BCeD7SxjDxEwYLuC3V",
  "key13": "2aoKK6hkNkqhCN8b2c9WxrHhfw3cfJYiBo9MZqcfkGG979kYkKtkezAgQpTvpgBfFp3VNpxnjMJboc4Cq5v5rC4A",
  "key14": "2WkzFLC9SQrUEF1os4itn6FeyLVXF1Gu481GAwNWoV6r8fngaeRivTgpn7hR5YxABcqMLdfsA5N4zqcRPki5xWkt",
  "key15": "3HkcDoJSMxVvvWc2Ub2MNSexxc43CiCLfK6SVuCCzjtX2bLXsvVZK411Nb98EGpoEkPwG1sUc76FttMRXRfywB3n",
  "key16": "3AighhnZcoLGw1AUsFGJHjqNrAjR2v2sKik2pZfZw9fPfFozR6UF9tioudUiXCE7trAqc95KCFgyzqTZsFN286kq",
  "key17": "5416AQfht7gNVd9uHQH3mAk3xPugPwg7ifaHxhJzHm1B8ghxHKm3qxrFVwFR4i3KipLKWpTDFiZurQFWP5JYwgdT",
  "key18": "4RCsq3oaprn7Av37UAhgX2LFfn79xf6S7h65ouWquh6MVG4Xkb6eEWxdyi626gDsXwueoQeBnCBUuzSUoVBubaW8",
  "key19": "4NYWN8tMycR2Hm9GU6HR41PvYSAEgTDqMQBQAYB6mX5ynxT4kR6gLTu9ZVgVzdhuP1v3ofnXxiCndvJux4cjVjUa",
  "key20": "4d4h1uPgp4hMbzMducLoTkDAvrJTkzofsgecd9K1rhZC6vb7ZqqJzQUDrJqzfSmCEcuhe1wPkk1DG6pDdFgzmy49",
  "key21": "5YjE267qErMk2wjUCzz8ZZwA94ZX1GBcTELzy1tCByqJ3JsbWCNBsmtpuCudNoz7iUmuvvwaBTMJmyH9Yn1C5Aqs",
  "key22": "4DjYtK68XfQ9PzuCasFaD9ncwU4FBwbZf7AePSororN4gLbn8gPvHUNsaud3ytV9Vt3kZ8nTgbyDeHswSBDbeV7R",
  "key23": "j7kewJfqAJUjZn7eUv1pPVWUiUG7VYbuA7EAxrvdpzAFpBZFnZAMexZ6YrAS5yHQgT7AxQ9Y7nMDJ3adxdqCfbc",
  "key24": "2hxWkaucsYJsArna169t9x3AkH1goo7yzUrRPwxsyLWGfLBthXNj2nueT2QmgEaMYZP3UgG8XWtpFrLN76Guj9CQ",
  "key25": "2RehnKvpXfQQzsZtZ9LUHQk7qbDHRKQLPjtnHVmDFb8p7EdRi7pQaArVkJknZu9m6z1nNVr9gYgYb8zrcZ2dEjLn",
  "key26": "Hyvx7CvzxeXnUifsWE7DmwXk2pm3JveBMcm3jumYHhTorKNNyfuMqgNqE6zxcApE8qW9t53Pw7vr1u85Lh6NRCx",
  "key27": "1KL15UmDa3stirWFhWFrbziaytghYCuvpXZXXWxpkXevi38SPCpfE3cVDAe4rGhu2kHpAuhBrDch8QrSooFi3Uh",
  "key28": "5SMXBSi5Gk6znv9HD7iaNboYNiPKhttRxtoNb1wGbhsUoeV5iqtJ2jbRtp9WGwYHdeu3S2PokXPFuxv9hEUYKXSe",
  "key29": "5BLbKkipn8xMsNxnzDEcz5LMbPfRU3Lq6pc4ycfG4sKejFu6k4btewpbBDd344vNovfqreWaCQQbyKizE3QfBmZC",
  "key30": "2ntHQbYCzxqi9iix9aPNTEbQ5zPEoKn2Vqmzb8NWbgzx4gVpxPHGTx5YLbfR1JaD9Kp2mHBViVJnUvTxhWcygXbr",
  "key31": "5t36upeDUwpEYYS2KwyTZHM6py55CigC2Rkqem15LdMeMsZCsizXuAHN3V7UcibhsEHwtewpi7G1EDZwbaMhqT1w",
  "key32": "3AFez1AyF15tefuNzNvrkXXGUo6m5aZ3gPJwqqR1SbotVyLYFisiwHKbMVBYhQDF7bHuju6fqko5cGAr7cu5rV9J",
  "key33": "x5zqNus3fEeK4oi6haMR3uapWBcaDpN8kpTTFsafLLHCEhNTTHcxa5cUBZpWAUUw7DnMJAvns9tCxZwE17nh1n3",
  "key34": "t9cnsgwFyXkSsdQ7DxRXqyWAoLY1GymtCJm4s13BZZQ7Txoop5QeyDqQLPtwELuTwkgAKCYZLvdQ6uCc6cNaENH",
  "key35": "29CqxVHd4z2MBkPHFu6kf7eEUnKmuZPUbpKYkifJCumqH1JseQN9Ww2EbCBYcRuVhZxz8XLtGjqiNNi7eVx1bJ18",
  "key36": "5Cc2fMZ5WVzQfoJeHTpe41HGUvzbUiadZ5zCJszonozBXv4s4FYnExAz7GEqep1LNV6zqsykkq9HfmXBtbHC1rJV",
  "key37": "sM1jh5N9h5xLFbwPZmSsEbThESk1CEeewa72BVDKAqvgnL1GvNaPX46FA3vDFgbvnRr39MpEm2bs8n6b5w9gUfS",
  "key38": "5UskU7VtZVwW7S4vzJthkqqgLgxkkjE1S3xu6JpBaJMvyaU2Gc3b3eknJ4wRLGaMiHiGEGoJxU9xpMaLa2g1BmTw",
  "key39": "3r6U4o6k8oqWPX8B8NwBXtwGfg1pvKFG8oWPJLDR8PjShjSqCoAaNSQEosmsE3YKsRBFLTJKj6b5UPm1kBhVVj3D",
  "key40": "52AjjwhUaEXeEfmrh5vxdV19aa1XY6GGUnX2pjZFTjxPcdxD2jHmiCGXhzLnJ9nLJUwuYGEkm6CcRw11QMGLdkn8",
  "key41": "4J58q4e7cHgk8jRk659guP6BVNGYJNabfrC5GHwECHzueioMSsfijmyx7hYJkRyxtqJHa7MCPEi8xZ14DmCjJXb9",
  "key42": "55FcdshQ4Sq2bQaoF5c3JrYjY7pt6k2YDXwv2oX1Sfqx16sDTidXWb6KF2FZw7LaSDu1tyhP97aYcpeVmTV46v1g",
  "key43": "5X88YWhzQL8vyUz8YV7LdS3o2t2zhxkzBg33B66ba3dMaTR1svKRsrKiE1rbzzbfnD3XKHidDuEfzAqF77gFtfQF"
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
