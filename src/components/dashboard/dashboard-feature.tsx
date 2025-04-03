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
    "3daxpUit6rY4btEQVj7Zsp5Dzi5ZGh2YNZEmuVqorrxHf3CK9ZE3GMnYnkkuCAv7hyygTFps4HGGVszftEiSxYTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JipCGuWuCj2QQEz3oQPaVYnCNxA91aGxZdnccxbgWiCSHhCgURkLigc3gYqNWU4CiAseM9bH9vn8fi3S9HbLUfo",
  "key1": "2tqJkYzG8YfWEcEBRZkdiiucipoceiczkURuM1SK3qJhbTJsTLSrNDQmrBoQQydwuTNj5ro6SiWKsw21HHBqPrFu",
  "key2": "3gEK6hY4huF5SqvdQw6NMcgyRrpqFLtnjnaDy38zVwy3u4fTFkjzDPzJRd1bS3yEX7AQM2XH9NxwkgFpsGtW9R7R",
  "key3": "3fdqotQ6zGcpk9mqzVX8vkZSk4qY95K2hw3oVR7zXcdx7fnAHt2FBwHwBuDAywrmfzAza54quwUvuHo5bVfqwUcb",
  "key4": "CgbuJbNwaFvQg6XgRUX6jR9sjrNgpyhnNxtrCUcdUH5NWFtqfrQZUajYddHQbPD1LiZC8Q12L9E1Xw1zyZtdDAS",
  "key5": "22eFMuTcbgn4Sc9qVeAzP5ZtHQxchcPVWoYsGFJa6xGFwonjkqccVAMGpuBWqEk9oEtWKYscDjENgyUHun6rXuVD",
  "key6": "4AoUgBwL9JmsZAxAn33xujXHc2VcRQirrTMsszrSuzvE7kWSr4F4vEKYSZB3h3RQosKTLrZGmYjiUw9imUsyqzWc",
  "key7": "5qfhcjBbA1ffPrz4xjmDT7Sh7GNnUVgFqnmNCijN91ARzFsZ1qSK3WADohWzMveLwtiATY9Cu6PYE9TApkSpAiNU",
  "key8": "2uXRzaJaMzhDM4yRg3YVZDdRFAUc8WA13uDz3BHzPFN7yy1gCC2zma3ZuH7gc3R1BUpptyqBmDHHeFgeNCYqvbn1",
  "key9": "4YxKLmoi4nhsmQCq2X8zcj84iTEys8xjK3TCURVw7aSpvDkNpYR1tgXra5RCdvPFJ71czj91DZCdQ7xyCMVVGwnM",
  "key10": "jcvymMd5vLt53dcAoZmYmQeqi4vngdsHC7MZf8mDPzkR7441yph6oRwSaf5DFBwXyHNNMNHhhj1nu9ULWRzQinB",
  "key11": "3TA2rPbzwqu1xoYHCwgmo2G5fuf72L5WkHzTJpaRJJgcjeBCRPGE6eLLPCpS5wCTPpseq2A6o1XqisSD1w881yaU",
  "key12": "2nej6yhrMhkeWfwicrsFK9azu6Auxrkf7CV2Kt92KLabaCF48w5RtwDGYgN761R7TLCphP57n8pgDCbHavB93RYA",
  "key13": "4kEXZR4HKLXiDbaES7ugQc2bcn736GvCfdxaUtERtbDzFK26Up6vLLawQ6htfEtfcS4kebfWFrTfxSTAM2QHL9mp",
  "key14": "3bnD1cQcTpTV6HkKFsFZ9BFD9xRcrM76jdDDJUHrhPSYqBUtqBiajCbEFcoz3qsWmQjRj4156u8JcB3Pt4ymXWiM",
  "key15": "5KnJRAnna1fRa3yFQLAipnp5pb1KgEM9vUHPrBpkVb66A3dbLAArM9B29ozQdB6CZw6q7zh3nkha8EnnxybQt2Nj",
  "key16": "5rMpVCecQ5xjXi487eoCEXrAnTKXji6pKXBF8BM782T5EBFBBgvBnfqN3jx2vs1nPnh6RhzH39CCHfnomnkoSsrk",
  "key17": "2QmSxJ1bFQYQN7Q4DMdGUKRGFaLnnYp28FyBCq8n8zZRn6xkCzR54VpfgcY7XJSzuxq9sX48ZckuMezEyi87c1nM",
  "key18": "3rDQwZPd4mcBJANP2nrRcTESmWYCBpKeHP8NuEXioyz9RgXbeWwLRqkdGNACLh64G9gYankAF8b5HAq5h8rNKfMD",
  "key19": "2VRdf2VHtfemceFjhfefJgVHwjumDTLbjaohDmSt7LathKE4Dekby1dV7zCmD1mTNuxQtBpknPnztaH6Q1B9gwfB",
  "key20": "5oTrC6VDiY4vx3nRt2vbNrDEq8X3jp6aUzfSGXMbN53kYbYDcLcwbESHcuyhZGurCj1pmZFhSnhcFYkxE4W3GLxN",
  "key21": "hWtn8jw9bS5qTN2pQmNNbcsfSHjck48crY68RaG9i5sFLDkfvavkToeAiFf6y4eneDaFvs8YTRuVazQKojNywq4",
  "key22": "4ktu2irM9vpEGLVxrsfjZXX7L65cskV3LaBacuwPVnXEmaEqqWC378nosj3Hc4TmxHarhXB8pcXm2ZuQKhJbvdsg",
  "key23": "3ztdCv9xz7ynTKTPjYks9kzYFKDKJT3xij4fKt8SZ8Rjbkz3EXH7Eq7FAXnL6TKGCXBfN6p9NT8kHQN4WC7Yuk6G",
  "key24": "2VCwaxfnnG6BsqG62YXQMoo5K6tmfrw6Bu63eh7taPWeTDJoXgUCoWNd6pxu98MUvQFMToJXrKauMGregbVznPoG",
  "key25": "gSFqxA1XNHMZ7QhRuA57dg99Csuw2b4NacEq2T9wQvaC53EccHfkiSBL1s73KLkax7w16wFDeEj2fP3BUvJH5Gh",
  "key26": "39VJDTa11ShywCRVxTR4MjFYFcFKNxzqrSCTVfm3M5MDBLzgzJZ2mzXgyHd6eDFfHUFeMZhjF7gp9fQhkwtDSuYK",
  "key27": "4Z9ANqFTaex5NxZcSKfKANWWVPF898tdugCjzir6vYUrnZ55f7FNz98c9aFQFk1CJqrWzYuAdtYMNxF33yGfZgEc",
  "key28": "3bSP9yHAm12AQex9wiVciJGGBZV49zfHQ9uoLstD1t3HwGa5FbrCGhNj8idHDUEs2ALUFZJ1NHqhK3Jij7hgf3j4",
  "key29": "4igg37nLwW6x4fjaqUVF6J2WDz39imBm96DG3aqv3z4ftk2nSnWXaUPcXu1u5GzTgixKB8Y3zq74TyFDcv8V82sJ",
  "key30": "4NQmFRLZPgb8ZboGt2GsrBid6pgFNr6Pw5HFrHNWzqjLN6zkbQ6tHwWxUGHdshop8LvkNZNiye6G3xx8LwAtoEbo",
  "key31": "2pzkAauTWcPZLStgLKP4JFfoNhSKj46Hvr3x1da4t8VVBRUBBsmia37jKwiAg7Qbm86ApfV7n37JHXy9gCm1nsys",
  "key32": "4jjViArwBG6m3HiPo15bK6iiFesHvsihGnpCH9AVuZfKDnsPEfPvoLBzk1A2ofdKNMSgbzLBdxenDeUcwqzJHeNV",
  "key33": "2zkEGKqFHACTmN3dazX6vjJYy3yQWSpQyfDTQh9nhNLYgaELUqhX13w4BwrX5RyRWMcgHkqYxzof91KrXwr7vLp9",
  "key34": "5rxbDRr7iVmtb7TReEZDUofyy73epv1zB8FUUGMJTboLa68kosgC59wBiXsYSqDFTog53FVis6biEKZtpLxdifi",
  "key35": "2y6po6yVMeSkTgqSCGPvoktqqFi2P7C9yBCYRvzf3hfWCFynGVxDC1m7f4reP3wVrreE9vsDAfpCSviYwdVv474S",
  "key36": "48ibMv7wkTTgcmRZuFJx1XSUBmJSshzzwjjUjDUsAW1C6un6mWoois1AYiZhvWBgx5v8iYvqj7xrLa6wmP5V1VB8"
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
