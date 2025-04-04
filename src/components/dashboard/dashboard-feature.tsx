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
    "3gQmEZpWxkvyFSMDGBy4Ad3AaTqe7nFoeT2AFzdArHzSCzMJFmZRZZXtLp9VduebDPrbEWZhwMvyN7tn7kpP1p9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dnkhstXFdDQGxP4Zvsb4MrMmBHf6dzEQR3i64yZEGAdcbKzbvTiwWdfxA2K47rm4ABHivrJPZp4xryZxBMCDwJ",
  "key1": "2SoLdWyZ14KWfi1bBN7yKnvXRPN9isZNURRqLua99WxAnr7uJV3LpeCju8wD7o2JDdDhrYzGT16KiHEt1jtctNBP",
  "key2": "3iPVei7cjSzHEFEqYzbNoZ6K53vB55fhXf1QPtqDQXeG4ixCYutbRCbjKmzftoYpMKFvRDPnhUix2vPLgxtSMif2",
  "key3": "9dP6ppXiMpRDRGvPzhwYB7MCPjzSmcpYGJ9Qm53PKDYU69BQE1tmP2emwm5n1ptVbfVp6rvpkbHZgmM5zYkbGwo",
  "key4": "5dKxe4mzuiDeYppUdjV8bedap1jHbd3nfi4vdRA37uaHmLA9GUp7tJnYKqUftUvMVtoM57Pb9aqPr6MeARU61yJD",
  "key5": "5wYBrhjkBwgPr5VC8LTsM52kJTZT3F4HfoDBy5ZxQfzkKZkVf8zWXya6H583yrrfWckrqnEEtmzNjVWDf3bXsKo6",
  "key6": "3xR2tnyM65d5dzrwAmWZb1rSdgYCbgt7uXzzhxhaoxDtDTo5Cq1nbCUmhpy96Kg7qkHHUpviGYX8kGnpYhLnVALo",
  "key7": "bKows9Eo8PuRGRVk1tAdeGiimxf3VXTSYWtyi4NgVYNqcqdc16qgz8QvT4zGw3FL5v1NBEL7v7m1cQsG4XSLyRW",
  "key8": "249GJbSvWdWsEcuc7Cvme7Y137LvgUrnhPqAqLfLzbWZbacPW6z8L4sZNDe6f4qVAQBiMCjveLsB29rBMa5BYaDi",
  "key9": "4eEXSPvcZvMjYmHQvj9AS3cW3FsRN47zeAVLLPDyob8HJowR1EDH6kRxpgGLSN7updc5qFnSL7EVqKJC3yU2CEcR",
  "key10": "xwp1g63BiXt46WqRvH5cB9xmvdNGQrhv4WMHQMEg2XAfNtkYQemcGsvP3PQdQHwJvVh84xJ1LhPDYA73VyYR1fy",
  "key11": "5PSuSfYCw8dk52k9hnD3brvJWjxWzAZ96xbm1whNa73g9ASPJuJR4WpNjWjgaAuEbeTNv6uFY4WRaFA3p9gTiHrs",
  "key12": "cArMhgnbSKWPxqmacgtFEe6fk8YBPSGvQ7cfUVBng3f2Xy9QZw2NDovxgFt6Gr8xxsp9eSy9q1ZmY8quQi2rwZC",
  "key13": "558SW5W6EiSUEKYrSTKhHXiAWk11c3E3VmitzRQYnKRbSqAYCvzMYjzNbtRYGwdn4EWWN6gEpx5jcM9AcPyanKqT",
  "key14": "58srv8yjhGYJXBLU16sBYEQChis9hUKowLAjkhosmFsazNiXMwwE4gzifbWABoq7eVCFmvCMmevJXazdQmwv4AzG",
  "key15": "2oMP7j5NHkFwZeiKFwXV5Umfrgbr7mbUAhJCy1W9VkRRvgeWKazMc5ga1QCMidp5N78xX5zuhwKoXFkA6t17PPm7",
  "key16": "5U4NenVtj9ATUZzHN8corbumtXyidsYMSKP2JpnRjxJ6TtbYCKkYEMQS5xmcSjBnmmig8WFipqjzszqAhjK35N2q",
  "key17": "2ACuSoLsEqYTdJBmEvBJVkKqrTWDUpb7QcFE21WZzBETzb1tUPcZ3artk8x6MfUCPhsKVNmguAoU53kxr5Bzrxyt",
  "key18": "5myi7q5ejSdvRNErTfXemp7CXgEAWufDZqiNvrxLhoSmUgcQZBDUgHRYxAzdMEyemzginWXG9W8rAQBgYA5nQGWf",
  "key19": "4jGaPnRrrHjpVffoh6FzkLu1MvPnPmGhhBLXggTFzq7YEocTTqsLGoj8WYhCwe3MZhdfcnjb1xAXqEQheX5wzuMh",
  "key20": "4ayWJCpuNtatYFaVUbiFecnXTfD2m6aKwjBzU7USwtUTFq33M8xuiSaEvNvnhgpNmDAAUmeaSS8SqFjV7KxoHgLb",
  "key21": "5bQdkaRCAn5mst6ZH2shAC2Bx6PACLhkjrENjhUdVfJ6GrUwXEK1s1jkUdVKE6NJsKzmQ9GfBWpx6AabSEdfDZLJ",
  "key22": "4FJ4G2CPCemPTMuYGS8pSGEFpgNV8APTmVBfMrG2KWyWndAjMjRatNQyqCZbrz95MCJK363D7bQaYGAUF94DKBys",
  "key23": "4ZzTwt3ffpEMhYWY4VzajotNg2ocUXZaapdow6PU3td9wwRw6PBxCNmnrEuSWSKCvFAcbPoK3fpKXKatoM1GGaPs",
  "key24": "4RNawAhaRbtar3c8PhftdQLWQZcNAwx9SYTWTmM5one9Sc87VWskkeV2KRZUppdD6THYdKDcCvZkUAuQpi3iecup",
  "key25": "3yCuLadFeNaT55WxQBM7w5XrP7dMbP12z6GVRmxwmG7UPbfqRpywVca4gRAhGJLvEr2VFbzyd7hdcmLuzdV1BPhT",
  "key26": "3TGG84dTX7LvXtav4WDyRfPsqZwf8NT8sD9ewxvhJhGxBeFytenfrfAoh3tjVE7F6VfizerM5pL8suUJ9yHrcXxk",
  "key27": "nT2VXtmdqTqtDKFiD4uKcjs5Y2tKT7qBvgUbxbCULM178vzFyibbMyvabGUTPpN8p3wsoJJaTNTxhYRR3Wv9ydi"
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
