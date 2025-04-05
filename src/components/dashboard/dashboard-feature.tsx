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
    "5fpKwM9HeL5s6BU9yqXJBnHg4ZNvgib1GVf9k8Hi8Q2SiWNunUqq9Zeg6PVmv5w2UKJejdjr7KDrNrNVb6qYUPQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QEZ5VVwNcQKibSgW6HY3tFSkdC4L84owv9agFYXFgAfcgJJPwRxjpdznTMKTgCsMq4B4veQwh13zDSZwxzApEyh",
  "key1": "5FafGBdVk7MbxJK1QW2yvmjWphBqdtow5baFMR1QVRcxuEeJCn1QcWF5cZSwNN9bxydXccHRCsT4VJxfdZJAUzP",
  "key2": "46Cyf7vcNbmEQXbUsEhtSKyGNpd1q8CyUEBB9j18X8fTekmMixZepBM4zFC8if7S99pQrhrZUFHKSYbDk7jPoCh1",
  "key3": "2eARySPjzzU5ms5pfCCf8ap5DCfjmN1Kjgfyh7pj56PQ7sBzKarmFsQbsjSnB2JDoUkv7eTpQWGqHvU9obnBVSSe",
  "key4": "27pHEetyEeMWy1CoxGdpYKMh6ikLV2WWRtC8DQBgzcgvGD7NV3JF9AGBBsPCnZ1EddH6SKLdcwLu3ZTEgxs1SHS7",
  "key5": "66vAEKDC6HCv19e7jU966DceseszBs7p2K5KMyfwgh5fUwWo5KRmUgYyLreBdiGipte7fzPCp8HvDUvFR5ZJfyVg",
  "key6": "2rp56dKTgsdtHDGxuQ5vmSQGnRtCdrWpd1TkohQi8SAGfgjsz25ymZWMc1ZJV6Uw1iui4XNfbvgXed3fBdNQP3Ef",
  "key7": "5b2aMk1MzkZkj3StywdJeWKmzNFYbmkN6b4TJc1HzVt2WpgSCF4xRYsCvDCdAC9HZeWYS8qCrP1mwa8awhyUFq1n",
  "key8": "3UN83XNzYucWNwawxTaTvam8aX2cRwSsZunD4b9hgoEm8cz1fHSd5v1WeqY7uPXHS6we4gCqPUP5byNaKych9Tjh",
  "key9": "NnRuJ2hSKPckBvZNMGW3fWLuZp3pcQHpArgKQcbxoWJCdXYGGtiSjDswEvspxUgHdDQ4NHja6DtAkib6yAnsAvq",
  "key10": "4ibCeiE1vaANCVsvTckkb9vnaapAdjs7PXDPRC4uvfnCiVGDF9URWjt1hX7zrLemh9M84KQSwgPisQxfr4DbJAZe",
  "key11": "2fjK1vhZy7XhraaD9C3hddajZFMtzALd6yw9fQoVnSVUq1FcMYArvWWmo7R3QmGq69yZkY5FpeULmqJqE1zGx2Y",
  "key12": "5Jpp3V6CqMiaxcJqMJkUUm1C38M81tznjTAnmAk1dugoj9uAv7FiAAhyNUvz6awpvuVQt95h3EBLpjhaZ4PFGMug",
  "key13": "5PCTdCw1g3WsyS9UQxWYGMPE2eoTq2QWhW4pa9PDrjGikJgfPLs6P2CRSDPwL5LBetyUpD4AcNGxxbo6zmjGM1J7",
  "key14": "2wmEgJxTukizs7N8ckKfut3e8nkyEoBLp5rChcUGxXC1TtqLZzAjxHFR9Sg6Ry2MxzuWuGBitSDEk388XE9AY71i",
  "key15": "4QexivhstMzKFksyN67TXuo48CJuwYNzZk2aoBaPUaw5nr4NaRYvVefJwdQ5jchebynSuCXomdPdEDrutxtNL39i",
  "key16": "4AQEazik9hhtVheZnohq9prBn7tE2bRi8R3pCTxntta3jRZYGhKSkwy8LG3SyF9mwNezCV7w8CvtrXTQxW6M6Ada",
  "key17": "34PgxXBocGtfcAz27sH8usG9w4gAvrvy7S8o4gqTq61ry7sj35DuHoU5QMhY9UZiMCvR1P8SeB4e9o6FMskMxwT",
  "key18": "4H1Z1csbUUikSukzd1Z1uniwPRRm5dRKwgUjynv4gtCXv7f2NT7XHAR8ddVu7hGSwrNopPfcCG2pUvapB5WmsZDe",
  "key19": "27T84nPYMeBb8U7bwfj4Gbq7WdoT6uo1LurgRz91MULeTHPLvdNB2TG78sPLyLfgb6CwxRRpfdVKumVLWsStvxST",
  "key20": "nsivTri36K2J3dV8bR6pZnFEbe9yH5MLCaQRyZARuHMuRBZAUEgxif9sTZUwBNCa5WoiA4ZRqnEp8DWpD2G6iiA",
  "key21": "kJQuHBCaH541qxmHA1nSN2ZfkZ8xuMKU5sZ6fZyh2rfKSQWDMCKhTwtQohDGBifzQf1Rau1yJyF6RrAtnWsPpkK",
  "key22": "5K4BU7USSwFbjc72tpJHSZDNLntVdfD2cT1ah4htvdDd9GfmpmDZrgU9U5FrKao7WHGs8wrVDhopxBT1S7QD9wuw",
  "key23": "5Q3EXTgweeNvm5Aay62XJ7qJV8iS28NdqrG6VrTYBbZRhcBhAkFnMiMhc8tGawajkgpxsgg1WLAz49bT5qR3huVD",
  "key24": "5GU8z821vXYDyBduhSG3qRMQ5vMJsgx4efRXpMnzTdndCwEiKr75eHEiH6GWUPkoCLh3jVt8tXCHuAjAyxmAkCjn",
  "key25": "4aTxtHNVhTAKqJzjwidiEy92cSRYHGD61w8GBo5usW3ruBrx1AxU4WrvYSaK8RmJRqJqW7TZigsgZ7VPgkMDQRR4",
  "key26": "2g2hn5fLR2v74NPsRJK9hdnC7acjiX9e71EQPpTH8rfK3hy34so3Wtm1AdbMBVAngugxNddqDSeB9ZDBq46DE2dG",
  "key27": "4dNJEsJ8BbuqdkW3p8z6tQauZgfYbWskEu63vJFTXiKzM2zpz4bKfiFXHH6epeSYarx3YzxLGXxxqSkun4ptGpYq",
  "key28": "3XhdpybM3duy2xesJv6fUUMbtptbBLtLYcdWM8cQJEYmqGiAQi3NNyREF9RVbcRGMprfC3Us2wt1bfNtNf4AnvNP",
  "key29": "5wdam1nfqwrau44P1fBGG61EcrjQvE7MwxvrGxjmLt15tGZpogDaohT54jzZWdAAHmympwaQroi4o5vEM82mwBAW",
  "key30": "3TeevfwD8u2wT26ZPSmHFuC446MnyLe6FsW4TvLBtr2R1wcDYK8tSxyZSbPc5ksZsCi3ju2LtLzWRaZY7Q8EntPJ",
  "key31": "3aQPtipTNdfvLFLJW6GATZ6FF6CawyRmxVBy3aZiZE9xnWvPLKkoVyo8Zzj3s2637TUUAzPKWNy11QPN7GBzxRK5",
  "key32": "3YKYefnBWuxoDciXKmMMHPoJwa8E2jrUwfengz2zYb6P1gQGmhtnYHe9S3nPf7G9wkoimEtoPrDgsu6jJ2K78FBw",
  "key33": "J9QtxdVRtg3G7Ui8aHSgwggKD9Pv9uKNF4x6EiEYMxasVxqc6tmNNfdiacdiU2rjR4tcGwBrB2zpPJhZS4CYDwZ",
  "key34": "5SSteYJpk2Z1Xhj5zFEqBb4HgWVia7ZfAttjQA1osuKz6L7G9xcBXGdy5mJt9FTbNazgH7TndVVwqsiEyhrCNY87",
  "key35": "5kP4d54kPj7ZfoPwx3sf3xXnaLYeMAVGhVNTDcSkapiqjSgF7XcTHRkWRweCQSDiQeGjNsSudmdxH8Xp2E3YHydQ",
  "key36": "4gttZ2VbR1QTy6FyXMuYNPPMMdUXrShna9B1Njur8RNkvejtGcNxmcgxSQRzwBGrxCrABsLCK9F8MtAawkgMSB6z",
  "key37": "4LSf4UiwZ3iqrjH1JqgySFgw62ifZFvwSFEZg9Jcyc3weGnqgt6URruqsxQw35FMVbbfRzG8yw5E1zzGgLNT4mxg",
  "key38": "3mYrsW5i3YiS8tecyJCwjgd5pxjCDqoEF7uG9wdik8QL6qyCYAWJTRPRdvZ6431PEWwdXFo8gKBD1jFfTyZkhtLg",
  "key39": "2Mixpo8LVX9H2B3mH6DUAJ26HewrqU7dSnpUPzeZtzSCW381hLSDs4MSrQgGU1HZMcneuxKm9Amc4wS9qBMBsYGR",
  "key40": "acud2qHFgcF4Tugk3k6CCQWx4QLsyBUxUtLbiL6dAXeuB1UwVRn4akkkiyjhh445rfpt1fTnH7knbVQUpF7w1T4",
  "key41": "Xua2BxcTEWSM6k6QR3K1mtrj7uy4wP5qis3kA8rULWxtmP6ZuRVUaQbZY4A4uEyJ7gmaGixWWUYujQSyArQFMhD",
  "key42": "27e4AC6g8Ho7kRqTRoqRn55akLYdDwa77yNfZyocWZjzs6RPsUpjLqP77pwz7DyTyAiy1fmgcn9Ja4hXsFqTn9d7",
  "key43": "5baizq79Sj13jx1wsj6sBkG22JHbdyK8zCFtehtXGUK2QVG9jVt4Lm8FU1xhjUXC77kPH6WhrY5Szm1XUamYjpsA",
  "key44": "5PvZfTxmRSgXkUtBM9nQ5DYqyTiqNbveyerRAT7PSdkLuA1htfZL72itxNYSP1Q2EVthQtngy9T1imyBKQxd3A3g",
  "key45": "4MKbJvkcAkjXYh15skaxNgkaR7KJawP3qJSgUbd8U8uuKkYYrytrmXiWzYKgo3atdq9p5braj3n2JehdGmMV8kbu"
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
