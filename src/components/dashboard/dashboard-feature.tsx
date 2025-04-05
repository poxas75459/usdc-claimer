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
    "v2w7RHszedJ1jJNxiRW1UDFr4urRAV9TcF9b2jeF8Ks4eCoDtNaFy2tTjKvaGkHjhqwqmL4HaVLaoGzKj794kNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rANtcH81odUSs7hBTx1vnx8Qo93J3LpEpXPX9fHDpMASr9HN4BU2JRK3ZB2dgESgFzcLgtAuuwtdgSZi3EZHfmV",
  "key1": "2Jyk3cwMXsp39vY2HiiKbjWpD6U2GD3RxzHT2HgiwwsucdEc2urym3xSeVheZe64XMKk28PE4p96jcwHscQxtm1z",
  "key2": "2ciEZtweNuX4eaZnmfor3ceTf53wq5TDk9qv4XtTHyx4p3dJBSKJMgx34GZV7GEKZC6tMqAEhk39EmQzyugA4bGu",
  "key3": "5hyT9sTshSdEFdT4W7zkWbfEUqYENkgx233rDzZHqbaiM95djjjY6jHdKk8viKPiHddVqBAurryai4vDz99Wn7oe",
  "key4": "AsxkRDXmyuow8vJ55GiDd629iMKqRhL3hmDRMuTGbPN97K7z4cPNk4mXEvetPwbVXTmuS22y2ZvrbJaoXf3dH3a",
  "key5": "33NDLuWGKnxK4u6H7a7AiTfXrP9MCMEzi8i7EPr1MTsJ9zxyyyRHrtMdiZzdGTG6hvfCsC1igf7mG1CmGFVLfeCd",
  "key6": "2TdFo24hCD5skzUsJQE9LtMKUXjzBnCcgyz7b2tEptPsLjV4pq1RxrnxoPkVBiUw6ZpBTVU4B24wkcwW6vJChTSB",
  "key7": "29KRtTy4VZ4neNvpnYuiBQH6YFSnQaPtB8yHFGRYAdh4eZduzqsRDBtYscqRoPHzBV9fHDSgsukDzfDYFjnXZ45h",
  "key8": "24iZpBfQZXCzQb9iiaRBFhBB9F4UMujie6ne3xp8rfhG8ma8U9bARbeKQHEvHsHJDKTgNMqsTQzxC6rYBizJWikg",
  "key9": "r16pwWaDnSDmwEsdUHfxX7oCWG8sAkTMsVRoPwNy1kRMtigyxHMkXbnP3cnk62g9vwecrpnX1sSLqH16V98sgcq",
  "key10": "jKvv4u3y6NNH5ZYWrrCHzceb44vVq2MwqF4bY828bQ8bhA1Pv2i2V3nnC22QN4t3XG4H9uex6o95c2i7Zunjd31",
  "key11": "5gMTBiMoi9BQg151d6NCWV8akNGLP9Ahif6eeD2nEFqcSGdbvG81iwhYH9PcC7aqM7H38N8v4DyoPSPdHxqfcAmb",
  "key12": "4QZCVzBP3wHpY7k9hKfjeeSDxxb26FJDbhWLSNtq2R4cKk6mbsNhn7jVMdiJfVNqr4ua1NDoQARefgZzDxGtdA3L",
  "key13": "4GcWkcwDAGMZcEYQ73KZE89FjCC5dkwbNgkK1RxWh63xH3i1Q8tjRu7UFHuy7yK5YAFaR4m3zqwPruqxqj8QXnnu",
  "key14": "5hbYPGEk5BM69B4VHVCDP3iVkDRiyrmo73NXuxfSKVKxLwr3QsBZ8d2MBXHtSQtwV38gr4cmsVTbEDFxVzKSyEKN",
  "key15": "4AX3ohKtr92kuEsVdEhXBEjc1T9fdT2hfh6KPNdNbYn5Xq7dmhB8pJzXDoNzJh1Rs1ty2aeRR812VdtyRPETyh64",
  "key16": "2rtsQzn5mqe1LPVdDu1NM8KCy4s33syR6ZNuf5GSLVaLjU1ed9FmAtghixfwu9YJLrTrRANw5sEXdPdr5xpzTGAa",
  "key17": "4QYGfzWuypKv1pjggud2gbkDpHCKgdjoPnhpwLnYtsHQncFTicNEZUYj9UhgN5ixSteS5zgueKjHtnHB14exshpc",
  "key18": "2QDze2sxyh6H3C5dupacKM8LMzG8Yw29BE29oUyWEEcCjMiVUxs3XvJvDd2CREqMmk1Et33N6S16beNzaXB7SDQv",
  "key19": "j2cmb8H46BA6A2wZVk9wxqZGhdg6NFb9Yhwbcut7CrY27YDF6oEBYVK2ZfXtigCDuvAPvYq8U273oGR37Mhb4Xz",
  "key20": "1wyFXAwUyJ6TCRGgFRReVgxyZtRH9B1y6gCEJdXrnqEtCmb664Dhm6cfN24r1SXrRUnayMFxQaqmdzTtw2XwLDW",
  "key21": "4V22HRcGosyg5XkQxWUYTEzGQkukmRzrcNVLZ7Dg6e4rwYdUsCVw9TDX27UWXWy6PZDLmbQJh48PLwpjnvrXvGey",
  "key22": "5JYjgKQjeiLDqES4qTPVZ88hGVhRvMWBQUfhpch7BVEEy3gDB7mAy4XDd5Fhwp9THZFs1gdpB7RN952sUkWpfX4B",
  "key23": "5bwmgQQAktwfoFXAQbzChw2n9GpKLpoiFChHDmAAmA4hPkmFEViNVV3M27xjPAN9im49ZdrRFThX5CiLXo3NaZ3v",
  "key24": "22QX7PD4FszjaCZR4ro9Hop5mWhfQrhpvHCgvgHeaCoLnAWhZgexhCXocTqsR4gERpbWo5GP5rK986tXNwajWJ5d",
  "key25": "4eSPjG1poipzhqWKt8jhjmnxUo2PMzNEz54yJrUoEFWcAhsXkfWjrjwiKqvMiCSG9cQT1nAf1GbWgUtA96BGkPTt",
  "key26": "4xWmdBronarweNAMtpf7bHmBD8nnC6pqZp71qBcisXxEM11iiz4Sv5f3KhqbWv4ikAxHJRorLy2gnkcorneVTNPu",
  "key27": "2Bn3x8YcS4sReuiamKjLXdg5LXxLXxFxgKLXL6yC6pMYqauDv7yTXgkNqtt3DgdHN8kDMmrdnvcK5KvMuPmnCQrc",
  "key28": "5JeU6oshXqD7nZG6wvdJyYpB1NtkPS38dSP7JcNdjbt2hgT6ZfAB1NZpCsmPZVq85Y95CfW4sCWM1v5k8WpAH9TA",
  "key29": "24Px9xqXGBjfzM1onah1q5dKg4qoCqjoxge6iwKrtK7kk4LoNzX3A4ZaXhirxhm6HMYAi1Pogmz48fFmQMTAFV88",
  "key30": "9vz5UR7YLdgWfBNAiR2ya3fRkdPN6MDZpbeaXQdeVLyJkzJcjAHjj3TDLNBZ9hQeNS3aVfPajm7aStUaMWPUjWm",
  "key31": "f3D9AtUghyz1WKpHwssmyDr1WbtRtCyQ6fVMhgM1A4SS3g2MFjvKQQi4Sng3nCsPTjJ7uDZWDgaknvBnArueBh6",
  "key32": "xjkGZYDAAfRHZ9u3wBP8ma2kbrdvi3e4SrAvSzzzxyUrhCEPsZJDRp8s5GcQHuqBs653A5a55ccZ2ACpS4Ka5vQ",
  "key33": "kentopfm2tzbheMnP2YQ2oaiD36S7RmrwYKuepArNgK7ssUU2hDPi6qH7S3HtxGxRCnbosJXjnh8jCk8JLfcLaZ",
  "key34": "2mcUsgynqFW2pfn9rs9FS2BRJj7hQdSwxAyD1yH5FQCsrKqSsU17KaVEYJCQAaPn4s3VVXMeWLxW3v7fcFS5M6p9",
  "key35": "4vLLEnBbye7HemQyVvKuuQUGigYW6TmmTRni5QNcvFzT15QtZ5FEQgvcTJyvLaJpQULvZXMpYXwZDaKhdwDtrENT"
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
