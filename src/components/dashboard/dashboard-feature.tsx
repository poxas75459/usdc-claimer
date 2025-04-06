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
    "4EAQri14ZrqRkfBhnEdzHNxrq7i22XkV217gR6g7jcfe1qH2H8QPobzDs4MfiAKJ9c2D9AScfTsBpcFG1Ag5nv8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZiYWxtGMgxGUp1xb4AgF3GeM8k8Hok4Q9M8K6JVdqMyuhj3mYw5zSeAT3ZDX2YBYm2LziiKHND9CKPC4fVHtYxW",
  "key1": "3xMJWgwUY3vjbmaUJ77DFCAZchHZpyfZmojhDkrSVbyVZUs8ckXKT3h3Ym5RrKxcjTvxLoqYj5JjKpWVLb3EZjKx",
  "key2": "5oLRdLxwkpPjUDbsYNQrXNKaofTRzSG9jm3vKBa4dwwGTRkDAm1rbxhPgm8YSceDJioW9BVop2rxF7JyjZiKxP3T",
  "key3": "4re4Qki6zGGrYYRwHF8ZACcL7zeySS2UKm8cp7FSyPbd2acY1xVimzQ6JMVp3dgTREqf3q6bSTFRDuvWR7uGTTyt",
  "key4": "43LFuYfTWWWgGYpdmhAEGYhemizbtGDvTHzZANpRxaN1y2zLnmzXy3FzQeVt9B5BV9XaJbWVXYNazDh75PN4z4Th",
  "key5": "2eyUxXg1uh91j6egGBMpEH19oL53XCEr8fJaBoqeBCSZBCJ4YJQUtNkESWpxQDaJBc6RZSJqBAbktQFwrHRxyNbr",
  "key6": "4QYPp2Ry1FrM6cjiSGiX74ZcaZgn54iY2vwiAp4Hy5FWKdbhmAoxq4Nq4atCXn2X3cMndXZFpSMVa5Fkh1hRzbq3",
  "key7": "oB1hxvc3eLCoZUex5aMfsrTctrSSbRTNvNBMWkiJ27qWU7nNim6gsB7M9XeYoWz7FaqioBmgf4RnJ21M3zZFsY6",
  "key8": "49QsHWi9j3J9B2vKKJVsvxJENuzhD2azapvGEJ6j2BzohuTGpxA9YgoBmUeAe87THcsVfQvrwqWzeygE98iAEjau",
  "key9": "3VjNHUKYbr161eeq8ZcshkkMqLkcRDitRRfb7DUz88KzEHBk3UcJDUaUbPyTuTuX3iUjAKNhfJRKZ9BdgeT2tkm4",
  "key10": "3X3XqTtXnsGZMyJ9yGsYYFyxAyASaABEAkTjHCc2CEV1zsFbi6Ee4znKmdwFjE9EokmV1VfMUFuTGypdrK1pn6vZ",
  "key11": "5ourwi7LdPtzWx7bRtxZg1vdDCSC31DQ37NjYavrkEyGoQt72DGksq4umpnKyQFLwh9fb1w6fSzBe9uJ5mL7zcuR",
  "key12": "woC3VWMXiFNAwNaFWixmcfN45fjrLWaUxq4yJsQ4G71nzxBM4VA837zubTkZXmTYwkLGSgu42jAk3FSJrBKRSa6",
  "key13": "4dx6SfRt9PjHBYzFE5np9q1NKLAhfSA5fPZAA1ZUBzrYuPZVYAnJkj19s2ijA5cUEpv69MnjCsmPp2prr8CUUhPQ",
  "key14": "5v64f5KWgZYewTWUBL9qdDbjs7CFZ337ppAkabm239jV2yyZxES1gvHNV9MwpVhCQWF6RTL5TCkTiEHDCLwRBx97",
  "key15": "4vxobAAMDvLV1Xap9wSYBd7dVhParuuSPpBpDbV8T322qkkJnixvrSaJCDzJPLidRqW29o18g69gQLKiErJodYHv",
  "key16": "3cudDEtoRojM1DfFFYSk1MH9HkNk67uxJ1mYeobeRiRVCna2wrYsMaji5o3WhB3wjuz7kBsiU3p8LJ7sfwQMSNDE",
  "key17": "WusYo3ki8ixpdS8BNXu1Rih5pwmnXJfNbjEAvQ6P9thweptxYrqqEwy8VhZGxkZkq9nsLGqoexb2W7e7xPe6sTR",
  "key18": "5A6PyThJbY77y1vYZFrmBHgbGq9J24etpv7xutcyRiFKWJqwtyX75rdjWdxJCMgAVe855JDv627Rb6y9GPZAKWwA",
  "key19": "5uwMMGoE7UJZCzAM16hwq5PgEDJpgCGFxc66cM7hRLCnPhqzsd1xULkkFubgd6q3P3QY3JpcCBGYUb54QmPdjbfX",
  "key20": "weMNeipPSEFksdfvr9ScFvayPV4vshiNQj6QP32edvJWGY9wiMWBRJMB7sXfwQ5ct2bgq237SuJZpygVEdvvKoq",
  "key21": "33jTZVTX7dT82G4Z7eN9xQzYMZGN64vbDT4FZ8AZ91DWimh97odvWFDwgSoYfvvoNKsmW9my5J52UgExBmuSWryh",
  "key22": "4FC6q72L9QEmuqdAV2y4i4u9BnM57L7GHVkp5Sp6qkNodsXWxuhp53A97x9P2C4QuEikiVchSetkay3TgaNdyNiu",
  "key23": "37bH8x9rAd2ZdcvAsPeqLKLji2xyavYsD6Md3gbkVW5eKuMbpzFTvGLfXissKdwydxUiWi2bujh4HUpnmZdAa49b",
  "key24": "3Dd1H8HWgPbS3zRv6MZ9QdDjfen29o3s8QkGEakfab2KXMxKYweR6Efv53GY5JFLmpV6zh2t5oReNPLHKt5xUSc4",
  "key25": "3SLdjTasyeYC7SLYMCDohUwHnGFNGp4etavpWHsB7r4gmuHiuPoNZ3DBJkLRsUjHwx1q5kvtvYRurfxRwrQAcFBf",
  "key26": "2JivUrsumfjpjYi6dd5fsMTh5EGbtTrn485ZbacUbxZ7msKkuowHZv5tcQy33v231eKKGrPhk6Bau6W9qASuTK9X",
  "key27": "g1ujek4wzmBD8DRPm2dETwd8RdPKMgFYcmxvsKmABmLrwso8gt7S9adydihDjB31iYuwJxUgrsFwXLjRmhe8Bwc",
  "key28": "3Lk5f8HYuiDyg7haWcdDagaBDKbXUyn2itdkHuCy5YQ5oUA7YYWwUtZjJ7ALBBr8kndjryAbD2BTRot1M5GV2Ye9"
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
