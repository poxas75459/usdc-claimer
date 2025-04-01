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
    "4H6rANKZsLKpXwuU9WaLPXLSVPfobF5xUmKg5xSEfuD8qw7wqHRzuztxqxVkSCw6qMtZyfqV3S1RPMgsFLFfWUL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LFcb6B1pVChJALtP8xgaAAsVyqnEfbLsgFLJgH8aepTiebw6yGWx2vWPGR8Az6VRAMg9Bh9vcFZagtpeniMXABr",
  "key1": "36whyb4G9fKW6eSEmgJMeKinRicktj5vzb9hJDFrvGvJYEqZK4Np4huwRsU9v1YZTnQBG95yGzNhzZkKsiJ4k7KD",
  "key2": "6c28ZoVSLo3PMGF9ftDQ3bR49tvkVNXYakX9xdpNe4n96G3r8dtz4CKBVr62P5D7wAwuPboVcAKaTpUomMafGcY",
  "key3": "2hpWmYcgYkTwDPXDPB2DaZAaeieBz4ifkrbv3Frv1B2MDZ2GYYAsHWpy6xGAzmpKrkhCDNNXBgFEuSoghAb6aZJv",
  "key4": "kwJUSfYZgjZ9YxXYDpsRqm1ac1SkuqxJkH8h7T38SuATmtWMX5nME5pNAM7RSgMcmpjutBXzFsLi5F4ViH2qUse",
  "key5": "Ss8ekufGrZeG6Fj8ySLAbzR9HDwhMjcYZPttxqVPGHaD8heDVK6vYsUDVGF2wUPxArMmimFETChio6ZUx3MHSW5",
  "key6": "2zm16nJz9yCNYTbfBhLrRkrp268j4NGEYAgLViXqL5vKLKFRonisMv2ierFYDhoG5kHMEKa3dtxKNzB65sx8Cpv7",
  "key7": "8gEEX1X1QFPy6bkiAM8JjjHp5fNZLVuUy6dJvTrAfcr6jwKa9G92yggWcUspbD3yr9sowXWmT6VroEKyMtcSpuN",
  "key8": "4LX9YqrVCkmdKapZZcdTbJVpmXyoVuneTJd8jajEFCYom82QejmVgosozjxUR8CtDUEaByWtXzU3a7QbdkYCQEmt",
  "key9": "4XB3kU7E6TzdY2jhJS5retJsNQwV6XgbsRu8wqKtJJbrq5QdotQfLFQHw4pAAnhC9UpL4uR6dfTW5PRTLA9jpmju",
  "key10": "4G8sr1ZsxFdNqM6tLM9xa1tkzUS86mMyWWsz6drz8im7J2d4pVexsVAiLMfTpHTKHfV9Em9KrFE4fdvBazDn5eWA",
  "key11": "32kRrgwiMXYTjtSQVUuHh7cZhya3rVTizioTCxrSLZF93d5Z1dYU8dCDntxPscVyR2fwYwCiSRRrx2S5N1RZerSw",
  "key12": "2aQ3gbs9W6L7W4fyFkQgrrRxuMwinLudhDKymYeJzra1DAkcXQ2H4ExicPMGt3E8nF6nk8arsZdRNT9fbcFDAVpF",
  "key13": "4EecpPWiiBkihTAyuXbe7AuQT2STHNJJPonQ6z4o3NktHxNHo7xj1awpmb2itMc6tMRtmc7kcuGSJpGCBvgZWAmT",
  "key14": "fodWYYvaC1Ar7sGxsh2DCDnDTpDLGwbDifWPWP9rAfgkkfECL5TtivrQRUBkTQtD9A6ARcsWYcn6qKWLPttNgrj",
  "key15": "qrHVxh2K9MA9BGXBH18zx9kAKfp3fBoxpifCzQZhWEVtMoogePMqTQCoYr1WCqtm9i2ey1fTRCLd5vv1ZqhWfbt",
  "key16": "4UKxuDcAzJ6GhLFYnD4MYQ7kdcPHJqFWBT3Gkoytac6rgXChzE2QsPufBQ4EWTHjCpDEUfkZ6HZ5Kt7AWxUdhzYZ",
  "key17": "5k3Cqzz3Zy1ffGerVzhXqpbFdNu22X8yT37jEuQWLT7PCpczHr2PKrRuhDFrqo9gotKRWKJeesxAZx1M51Mu65kB",
  "key18": "438bD1qGbwawkEi13cXxXmLXWkNC5oofWz2fu3bcC43z4FJ9UVECFJwhvbwTf5nzDAGGohqETSFukCLDttWqizcS",
  "key19": "3YKh2hQiAxrrsyHeQ4yBki6nDsg3eRiEtvgpfpZD7Hh5beLTzTh7yn7TN9wHSih2pEEvwQAwm3tLo33B3s5XVnL2",
  "key20": "5BBswwyJZypvA9HfrxwPJYmKNw5Su6RJs4iM5zV7VBrE3aPTZYmrx83jJW2Qy8qpR87xVZUpB8RH3WVP8aUgWsf5",
  "key21": "5oeaT6V3WV1rJVv2NnyzY2T4ZZBzx2G4EVe8TvUNEQnQY9bjdae2BdijceFRCtx7xnqkPdEb3RN4i9SKUgPLTXhj",
  "key22": "4bEVduojFBbCArJkXyqF28ueGZM7Qh5YYUq2ogH7ZEs9Jb9VQaYCoUbbQAAaeoU7FqZAU1SzLhKwzgAa5XRS8jGr",
  "key23": "4Zfz9rESzCVH3GLyJbHRAfAD5rYG2XYQui4YC2N9wu15hfpzXPTUrWPcJLKDw1X9YWrPYLTwvfFLiMResvcrto5",
  "key24": "61ediX5sAymd8SwHDng2HUCWrchCLH5XcHCy2keKTpjdm6FExsa6me77JKwXsEQx1HbAXnbLYZaaspDDn3ri7Lqr",
  "key25": "2S2wCaz2SfJaUQPCnJeEAtXJTutiMdaNwUNz88CnMAKyRtv9uK6sqYVB2AHjp87J4wFaM1b3hj47LtWBvhfJqDYS",
  "key26": "2hptw8N6t7eRvwuWtjn3q8vdsGf2HXUeDhPoKMfEP1Qs68a43oQjMtQaV8WVvMb8smhzjSqSATwVqCHaVV61LddW",
  "key27": "YLqopPcJo48oB3LDJQBDEj2UMZV6ouooRQ1RgQ5aP5vH3z1GJG9te6Y3LRsKp8aDy8kwKsiCaNvsuVtiHmzpjg4",
  "key28": "2wrrAHrbQiDcWHUwFPk8Z8bz8ciSQeovN5aUnMekX25QZStTQke3b8qWT47hMMMi9LvAcdWk3uXc1B4s57SQg8GR",
  "key29": "4vSzHgXTibwuF8aHUCFroHijepWsZYRczLsdysu8ScYwuivvuq1eu6MRSbDRR66FbSdTEpPZyRJexuijVn36LFnJ",
  "key30": "rNboJD8wbRpmATEyvuq86CRsAfw3xX82s7GzRTd45am3d6uz38sMGswDH1pcmCrtAR82znqX34XYdbUWz6Fms9a"
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
