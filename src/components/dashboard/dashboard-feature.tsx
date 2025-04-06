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
    "453s2nivhxFbrhnz7LUWxey6j8uZRxeXZSnJBbSZtuAdmcFKiZcxJ3SCcSkbAARuhj9tHdVrA3yUgwQu48id5HVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vX2UhA7etkDhkvF939i1A9AyaYQLqtazNcUyYiQKcb4KWJXZiCKGA43z7VKCXBxnUx7LwdVfRDrXjJv58YdfTmQ",
  "key1": "2To5kanMjMq1unyGtAGE6dYkYo8X89sUzmgWW8xAkLBhMeBdCfoUaBJ69SMfbwe8Bgfs3MoHDa18oBXPSeSvYkM8",
  "key2": "3LwQMf44b89c1gRck1LQgqmiR8FNrmqPAXHo4syh6RwJCrWHiJ5vXPDL2NzjT4D4JdxbykjqNrfa1Um6CpTxN6Li",
  "key3": "2n4BnaupaSudA2GnXy8BPUujXsVmZkrJ2iqjmCnMTuufbadZDzjSJu8vWMMwNoQykXQVyrHV2fLp8DT13Gb1FBQ3",
  "key4": "3NfEmVFZo4e4KJmooMQbsmcLcx13LzXek2X1acmqgGorPUsPZbT9zZbiFhRaE4NJQSGvfhErdpqn1ECbPwVxa1tC",
  "key5": "4boZkuw7w1Z7NZy7sRqxNXqe1MU8ZbhQ78WLv1vhXdp98RKZVbcr4JcnbCTJYMTqgGfo1ZpbAMDy77eJn75Yp9nb",
  "key6": "54vus3KUpgRCfyCBjjwtmgkhNPapMKTJfbrW8a4eLSre1jMv36HJEnKoPmxLd2AKkdfYHvU96tFFs3WznFN6CDze",
  "key7": "JpzeL4g9vSwEkhhXJFo2rKD5XZT3dmdScRDTQEouhsGogzrEHmhQrE8DWnpzEKYtp7uTSuLzMjxZcZWUhoC7YN5",
  "key8": "125qhvVu9eJBjtic6dxDEHfpBXFeMbMfrDvaieqrYDvNERw2D2yHjb8AF5oL1KnXfKTUr2o5NWNF5obAFzF5sPY9",
  "key9": "5A3cXe5jAdcUkpNhZPac5QdtFGpYfKzSWepZ2d4TAif6ACy832eQbddA4YFe4Vgkw9rdqnBhqw3cLzMep4ooz6EY",
  "key10": "5Hqehtmmg4ysAx46uXiduzSVPmSzvd4tjHrYeLb2TQSucagw4dqoTvKTpiFnDGjmeEmiT3DzyQYxEQjMV2j21GxQ",
  "key11": "5sb9LaHfz1en54YMpnbuCxA3hDjeSWtJ6hqG7Au8v2UkEuHTkrkLkWZso9GwoBTJShUbvPNqqe6pNFYjXMFKQ6t8",
  "key12": "ARzRi1HXbsmhVps4vAwbT16ZWPk1wNHPKwYEu4WDgTa5D3pvqSvQ4HPv8XHEPqwZvzFigMfQQa7jm3YNZ1b3cFV",
  "key13": "3KMY6FWZu1tvhJRZ4jzBPNtyYTKrFSskeRkr1NHFTWuPtc8T7WNcf5Nq3WMFQMXkpsYjKVFAJd5WUSpVvfmur693",
  "key14": "PqUaTPqLgxF1D9Zwq2Tzz9GNNcTMuQh2vdYAzpiCjDiE4JDEcs9xwPie7ushSzQHKxx79QoBdNmW8FQWt545b6Z",
  "key15": "fZh8Ans9yujCAAgVQGJwQ3A1fEwAUZaGDeLwF1KB5FYg7RYy9BwHxsNEixnM98Vvb43Wxhr3GXjgNeMK5iQ5PSJ",
  "key16": "2dwHCEzwPKLAvdXMLt9nt6vbNzzPoBw3mSHSSR4LzP8fUNnFh6DN5SeoEYXGbxcg6wYvKHe2N2WoRGjKbZLecksv",
  "key17": "5xU4SAmhGQyUKUmncLK1kn7kScfGVTMsiQWtMjDtedpx5UkBHVKBoM543cE8ajVfXRYaYx4hpLkfWW4RSDNBoJca",
  "key18": "4xNTYWRreAi6JmG6RLSntmF4pUhUmua3E9eM2yCgCvC3NQkuQwtujvorH7WoYs42fh6ewthHRALPXA8YJ8hV4yv2",
  "key19": "3k4bAPMqmqgcHfhMbAunYPvDWfczUceE6EhtL5yqZ9NRgxtnmx97uQ1WKqepEgyrhoosT3KmrJkjVsLnd3ruG6LV",
  "key20": "2ZLwNER1NUcFVG7axvwQxNvdB2ExzsyEQQdsB9Wn2YLXG6by6NGbtJPGjD8Fn2W783NoARedR78ks21KCimA4Fa6",
  "key21": "3eHdd2DHqsxr1834XS5ryQsTgWfmLZDLoqwMUEVDRQDFdq476N1kWGHzEReWsAQ1P9nfytXjA3jZiNbtoMSzcZaC",
  "key22": "3A8MqnRKbphi35Y1x7cgadn24shBB7F47MmkYGWcf3cx8hAUPuA6gZ2LFDNzwPWuVitDtaDFctyZmkX5Rpjab9ym",
  "key23": "9MfdpUkkiKa1H6R2A3vo1tTijzHYFBUFiEeu5Apy1yX1rwXVUFKf7LcF3QVtAHuMuZf7LvoXzbRVnsUVpND6XV7",
  "key24": "3ysEJ6S7Q2ADLX6GUtSKfGS7NUr891JDSR35vNtm2tsd722uc5415JxtDrYPDetb9DpL6AYkz97qa1m57bvxb8BB",
  "key25": "Pz2N7JzpgVW41iRvmQgGBZDas7qfNVkcUTrbsGFtRdw51FTSF7ryP4wF8ynjJLckj6PszzdaZqjDRKyHRscmSgk",
  "key26": "2rrhKc1CwfzL9dmm4XRVrRXWKz5YCFJqBWhPT4oA6Cs8omFuFDPkYw2cWfBa5PBdG7C5yXApjRATMSCgpU16B95t",
  "key27": "64G1Yw5tZZrkoPsMryKUfzabkEzrQmrzQ1vtweRe11spBsRN3zJA7Rf8fFGwHt8NGgpZ1he8Uts3NyQWCQXmp3kU",
  "key28": "nYMoJa9XKmTMfjTNa7khMbhSdBtFYi7B95oszZ9YYfAipWR3GTnzx3d37zJpUwCGYVJcYJN3ATSBcM1jKmUD6no",
  "key29": "3spopscpUHegCtsoM3X9AwRKH4pXqk4v9bbuWVt2qmiUNjtYiwasq9qUiqg1paXjsQxnZDVFuXwyrQxY1neeUBU4",
  "key30": "6VYjNfWFsoug75XeLeU46svNDa92wBKEGi8QYtcsLy7NKSeHMCNh9deZ5Zdpg3GG9eSieXgmFU8kgJwzUZQJzrc",
  "key31": "41vvrDQDtBG6U3cRDo6Ly2Q7uCDpaYtpMTsxPkKDoGDVDiseEtF9Qm3WrDWcCpCgAgmFgKthuRg2DeMfTmjDocBC",
  "key32": "4mPARaeG4PdfaQBFkCJdh8UN4hsK33hF37iZq9YtuZx7cff5hmrogFCgsoFrgD2vUpjmnNzW2Rer9QtYGLEVichF",
  "key33": "243EvgXJkXVBAWqB2HuiGZ8zLKUp4XJjppFhHF6sdBwQ9CUjcjnUwDrHFzWqXj8kDGCs3ukLUZNW1ZEfudqWnJWN",
  "key34": "63qZwZrGne1cwzetuJi2MeHuyLCMN1ehHaUxeA3r6fqDJJQYDEJTY2owXJ4yigWd6fy2JinWPQcPjTNEXzqDmWH2",
  "key35": "4XAJecsi49AzU5ULCiSWckcBJz7jfmMg4n1aPHzmArGF45Ljpeszk2QZa76BFUqzX1GkUDtDWreTPk8HomuyPcAf",
  "key36": "561LFN5k19iTkQEPyVWPqbHvfvPjfaV9VnsG6QpGNo37Ss7sGWBB6h2n78aqA1iD1sM5LnkUXL39R8S1C22wwBVq",
  "key37": "2KtcBzmgSSY9W2LJM4KwF6uzPZsvyWwy2q15bbkb2pNrw23QtrekDUiqwM8jX6vVWPzzSLLZWvr3F9wBaBdoeEYL",
  "key38": "4zTmLjXAtTKkQnVmNdQkdqTNDkYBvP2FQ1YsrKgucE2F7cojKpquJjWpHBRppA3WExTwc6LrGs9x5AqBAEsLcSg1",
  "key39": "fM67bjcAox65FAv2FfCTe2hVtStnE6vNsST8TtbpVnjML1DEiA48UHM1TaSNRRMQmotFg2ejngSBpEp8TXRWL2p",
  "key40": "5Yw2AQL5y9XEZZ5ahpd4YfcfBPeKXLfqaQ19RHP7rv76MSZnzryzd2vdWu2uqRu2UStLznfbHPrydG7M1sRWDgLP"
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
