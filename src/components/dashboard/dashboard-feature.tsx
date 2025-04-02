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
    "5CDAMjvv3Z1Pzp6wcJbQWCwrgLkj1avDSBw59JQ2qYGmhsgrNiyakWRZp8zMC3mkoHAZAyMSGy9jqEAVge9bhiLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ggq8DEkHiigeNTDchSFLU2n5Xr62di82uYwsvGgunkJjhas8416rBqnxUfV6iB6EwRBg2kp7sC1RJEEWGdFFWj6",
  "key1": "51V9zyZQipSjN38q7o5BrgjiLpz1eVjugYmRWpSM1AtzBWnpMYY9J2s2EVucE14ftkZ8yWfxZjYoAx99Pf9qP2gV",
  "key2": "4i3fTmwVnoRVDoKVb8Q77wbQoV9f3CKti7RvGYgv94sRSPnn5pMMhPjFqXuPiYn8CcCLVguGMRELsxtRVNPdpvEk",
  "key3": "625Fcem4mD3zWKhrSRzaWZyzCzkSGJmpnLK1Q661233fnqz1fiEfkzik9VyKtqZaKAztKcVFiYYWrYSSyXWY2Tr5",
  "key4": "4JEouwNvDUnS11uAzuLhV5T84zb6KSU1pVFVLoE1kN2W9w5YCTmCb7H5N5tHqSvK51k7i23ejUuPveexvno7bnUS",
  "key5": "65UCLXNG6jnPx4fqfQicFATFZtkJUmqNHGmtHH8a5qLvuyiw3cRW3RtwbfbUWm7mQdaCcKVHZsxtkB3Xy48gzUtZ",
  "key6": "5WCZtbAueqyLhdSTkMjLar1SLxKoojgxmFEaAWdKK2Tu8k7mUSwKt6pVcdrVEn8himNRo1naqRJxESBRWWJHYdf2",
  "key7": "5tniSPV52TwQadzpunc9EVMjrkADeP6ntEhxUNt8CkREjVeu3tkQVCe1y1yvpBsNs1RRg9kAACnXQBrP7DANiSqy",
  "key8": "35CweJevK1c1SQ8eH11taUrywchcxvay7tyKgMmcBJAK9BsR1KDHxL4DheKxM6NahbTSbPEwSbjUEYGMNKCHTJVG",
  "key9": "4tbDRoC5Lh5jr2ShQoTmxV2JKZV1cSgURDQUNqgGD6wEiywAmpwJDB41L257zCLsepnXqhZ5oXL9tF2GhdfZa1Xg",
  "key10": "UieRv6NyiTNpjh654SGY8KR7MvSdVAjX8PKiKdwkxMKrcbyGVFPLu8sFdNyfn1TvDfdXDTkhA2dTotaTiWvAttq",
  "key11": "5nCt37CFZ8aoqzvDdMBTcj62pJVYvqkPYLZFnFdt2oQPfLSmDZWtQ8Uw1FX6o8gxiMHKfNRf5CWKRioATPN464Ag",
  "key12": "5uCkvHJJ6ELb7kbsidtwyQGPEN7CsegqNfCenU7pWJAGPWETjYVEYg21BfxCpRa7JUb5ATd8F7JJxtdExUUcTa8x",
  "key13": "6QAs2Nu4kNEDfxGxeocXer13hYBBDHS51TofxzkkE9V5Nq924fTUrDRkY12ww8TZWC3S1f4bwaqtDDaTY96Eqw5",
  "key14": "5TrbCmX5C7Qg24GazFJog31T1GzdbmxP5yiv6LEk9UpTUoEL5EygE5AaVAyFUAujG7f4sR5iLfwYwbWPzAFTYsbQ",
  "key15": "3HKyQ52R4ocp6AL4PzkrgYh18DBjna1Tzg1QPgyzQoLoqFiLWVkuXx5CiLJ8tzoNP3QjDgKgN1BxABscYuvNNyoG",
  "key16": "4fZNUwiWpFM5tUFkioyGxR6Jm8QDurq9XEEpp9eMjhjYjAQeSH4eSAXs6n7H1okWutTWS8adsrmUKiV33ToETQf5",
  "key17": "2L83hu75WjCLDArcFcdYdL1afz3ThMqej2b5kXK4spcSoGmPHDmEDC3v6HnL6bwWck4894fkhdNCXcNogAvAcXiL",
  "key18": "2pMLV17ZjFvDrVJycxpWzvWMT2C9YEFXvWHvLmmohhuneiJbVJ4otathAnhkk18J5TZcHoDNxmbbBSUW8LQNTmMw",
  "key19": "2EDjEAcRNyfymmNnBnvztwLzt1s5Ram7bteVJBegq2gR819DGthe9j59tAqxPRjLzq7yrFs3kxiYAKjp5N8BQXj",
  "key20": "3CMj4eKPaBUZj9fak5LGaH48W5gifUS1Fm3MwP7w2i1DJpxqy34TA3LEQNw93oHAWeQtAQum5W4ihEkwdRKnHzgG",
  "key21": "35aJaxWPa3gHWiwfN6aMNLpLNm9WCNZ6KAQXEhzhE7rmkM95bfUspzGLsSqstWtudFStUin8Uzkz7KrZ61aAhw2B",
  "key22": "2UUi3VgvPsqwgvBBu68vpXZa4FSJ4zD7dSk24wDENUMft2eycQKuRg3A1n3pH9JgqxDpJ6LqCAdAfRRh43o36Gzf",
  "key23": "3GSroxoBrKYBEtZ9WGqfQk6fFbKkZNgjPsYo8BdBLc2n4JiSdjxVHmVZgJSRXa7jLMetxuFZWqTxGcqYVdoGbsLE",
  "key24": "3C5KwwLDLT6BHPxPcnwC3rAsQba3jEZRAeLHY5jgqrCVoKEZxjcTNmH8RtXK37MzcZJaDG19dALwxLQftWhXuMD3",
  "key25": "5YtFL59yaKwzFRqWFswAoPzNeaFdHxPbW1hCAxGQao5jxmWvbAKwEPoPkUfnLRfF7vL2uWEBCXFzqqdxhdrJ5aQW",
  "key26": "4hxkNgXScrZDx6di4Q3131x6JQnkEwrujzNwf33PHLMnSZdhetRgq8biHZsEV341eQxbWKJ3bBNax62NRTzMfrNi",
  "key27": "4eoh4Y5wVDA3KssV5iiDYeiHenkJTSFgUxdE1dU89RqX75AMskHut3ydGPmNjCQGdt2B8xauAX6g2BmSxWqYfcMJ",
  "key28": "BZaoSEkm36DS2uTvRkFtBWKvDahzGajfibtfre6LbgTLefLbLNHfPatMWn6FrfHn41LzgtaFQrZL19EgkyhoN7a",
  "key29": "2np2BnhKNojD8oqNz6b6tjdHbYMHZLyHVN8rT6ap5q8gHXcnSkWvDy6TMm3GYUpiLujgoKmYQykcEPPPxNho5J1F",
  "key30": "5ca87NQkcvkCuYqncsXPTX11PAGziSMkzJBiw5b7j58XybDYejf2UBwEvBKoCFEXsfBzeqw2SJCAisWySfE7Bn8C",
  "key31": "2UgaaToS1AenHDe7kuur1m2Qw4WCEgYqw3yYGKAxF8QBUwf33pP54NV9KMtnh67SMnLSkuVHg7EWhyRRKD7GJQnf",
  "key32": "47GdSipmhMp9PnRLhBtbX5s1JxEuiVQ5poY8uki54yRDxJwnVA9qWRFvc6BgtektcbVUduUcKcwrhNNxYTWLVoxk",
  "key33": "2XGYz7GDNjvgbK8nF8toMpFMMgsPYAkqqD3ChqKgV8hcYYUUEPp5GYjfU82p3WsGzV6VgeLDcxcRRFZxorraCeFA",
  "key34": "2R3jgX3JCET8byiUS4d4Na2pssLagVThePrAks6KsXknFgGGMvgph9f5SV9BSR2eFZiKeq865e4S5KesDzwVAo6B",
  "key35": "2c2DqvGSgiYY1Zzty18qTLTKRAf99M9odey3p2hegBymbSxPm9eqBgApnvmu8yKdiasTTpeLj8G3Tseg69PPn3Lo",
  "key36": "5ZdXyNENSS1NkV9nHAgxSfenAbisMJ3Cm1GCqyr5snqWTaaKwfDDJCJvbr8cbTHGKj1hFEug5cti6rwm9GPB1gh7",
  "key37": "3qYhc5M7RQBb2yx9WCY8sqaSray3UQ2fRbacAhMbLxxRYdC2kZWc4ncvcWHSkB3csCkbMp7wRmYC1oFYNo5N8VFM",
  "key38": "4rNcX56HppmapvRQL3QPx9p1NMsqbon14mdtZ7jRbDX5nGJAE3sFBroJFf9PuwM6ZbgjshB4Ap2Qbgk3kP39DrSr",
  "key39": "ntaPvD6BwsW6hk5gyofUzdCuatguo4o12GwcyV7YbQkrPH1AMBC6VSqJXjsivbpmxLcrN6BGFudw9rPHbbkuuSP",
  "key40": "46vAjpHpiSzQ3VFJRw3QKAmdgqPSSx2SRdQZLwBcAq5BU9kFvQzwpHhayfcSj4jdGYBvouPQpcKrB8Kr6pVnEdr5",
  "key41": "2atK5m5Wg6grgzdqGfSHpoFhrej5PmDLW8HuSEQuHS2PZePSo8VhRUXGCXufg5jioepS2MNDxpoZRMUWivcQFrH2"
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
