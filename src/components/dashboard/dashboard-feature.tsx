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
    "RsMfcwchuF6JFW1TNXxP81iHCMZ6xZrBizKRexPWe31HnDKQXS7exH3Quj88v2RYu1f3ZsZmGZVto1mGHKqzQzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipmDVt4o4fFReKgiPb976MfqBF9osa363Lrg9FVXxYRzno6h1VWMCeZZV5EAbRXLhogbqJKgTKVaVpoCCgashTG",
  "key1": "49H4hArSZymXqJuG1ic5ggNVXPdfDYPdKeitB1xi8DJ8oRuzS6Toe5V6jmPJYfBqocBuPm3rvtXtPkgFWrKzVTL2",
  "key2": "3qtaJWBygSpYyh2HEbDrdUpfVnavZNsDtfejvrJDJ1wBMp4hxcRGxwzUzfDbrhQ8tGmjvEESXdjU9wF56xSGXECB",
  "key3": "4RcSvxSQeY1NJi97QWxSUosmsRAdGQpPRNJXxjPSNNagD3hhodAcHKMWMttDZAFUrDiAAToTMDYWA2nCZgEKchVT",
  "key4": "CttSYC3ZArCFjhUq91KfZAS2c3L7XbNqHoobc1pMVAt3eBCcBd1vSVJokTqephjvGumPPCrQykiTvdzfgnSw9w8",
  "key5": "4pcEXp9DvwjSPFxTkGcWfixd9TrRccW46349fohnoiNLUJNF4pzDectFP6cfTTXtxR8bDPNUfKnMADCvBjQrRgGi",
  "key6": "4sSYFRPQ43GPHHzfrc2ANSxZjwYig45znZrmckJPVV5MiPmnWhgg37B51qfB99YoK3wF58tztpHVwpoQF8gvEpcw",
  "key7": "4Fwi1EhkdyVr3U142ARVQtDsiDvurgdE9CfSmNmd9vinzVFB6gMeCp2jvD1pwCP9RyHx1fMdywfJnizvyTuiqFXw",
  "key8": "3iADP7HMZCB2XQ9kQQiDhj8ZERM9Svpoqbhxk9dcFmt9P1BThj9Spc9SBv9BzrxbCnKXaJcswp7fw8ZuZmiFoXaW",
  "key9": "d7uvoRLy1o8a3DGCDyazm7cQWsrjDhqteE4yZLP3DLkEv6gtyCbrVK6jWTmXmvV65NG6p1h8ceLBGL3juVeZNog",
  "key10": "4NiXnYcrZKgD17owQXTv6u3Sd1x5U1juofF2kTXxt3g7DTeNSRWdfpfXdVC9SZGUqQnweXe8DanNGYpSd85VtqEb",
  "key11": "5VvfSKqfXdJ6RmNs1gMbNLqGTdJGdcsYw5wNszvQP1htTPhX1SAd19MXBbZtJzFZTEgwR2wFrFTcuzgruESkBe1Q",
  "key12": "2K9h5VbLSyvcEDYb74DaFHcR5My2aGn9U8vDoXCxtNAGsGDhCtvxzvDoDHNGxB8c4s9P9GdA6NrHSzMeLPudQ9yM",
  "key13": "4uJdauuXyPfPmNrE7W4DJZwBEPsnLtYnpFY1Y9ZNJPUuSQ2A2Pi3PYCVGCXBwmEcbyFh6WUtRAQ9ULQKKTRtPH64",
  "key14": "52SPQwTd6Cp2GnaxKCsAfgx69VzeNYGFs31hwffku3vY7cDWFT2N2Z7GKdDk6apuY4LhDW121dzXrpDyFLSYg7N7",
  "key15": "2sduGJ3Rk6k9gLL3iPXq6Y6j8SjnZfcMwY3hbKd5ZW3aJKbjV3Lj34E6E29t3k7KCpd75wUh3bZQCA9MxXFVDd8L",
  "key16": "3doXBC9WXN1rSj7XHcUvsNctu3qFHanrNc5iEXesTHNYsUqBbX9mKhiRHupJWt9EcYFnW9RxdTagXxNHbRmyDHVN",
  "key17": "3Wr6beP1cNQPukKT5qmuk1vkZJe1bgV5q9YNPFNxNwefVgyXFUuGGfEAoTwWr1GTNqJQAKBHgZHJS3DZHS52Ss1U",
  "key18": "EyXm4DpV466dwLp2qdzgJG5JELT1ZQsugnyS8DWrDatn8ckE5osF3x84wsYijEU2HVa9jT5271LiNbtQFoahKJg",
  "key19": "5yFKpvfFGsrGYdgtWonZwEHELimzN68FSYyG23cj5xn3WQJkgjVge9NUypYCgJ32hFqEHCnqYo2Bv8x21F9eqymn",
  "key20": "2qM6fTrwNbWsn4vaeJjTjuhNqkzXSBm8y2RE3W4MdDULg2wBebZAaRtE2t4hrPUwgdeWUf5uKvNV8qh7pzSVv8RM",
  "key21": "3hS4XJNH5nVG8imKHZpgjUwwRLjK2sBZxYK76oTVgro9Uh2HXdoXLnasvti5m1VrnFmfyQbGbm4K7UcfBTdYAsWS",
  "key22": "xGmTsXEriE96Trdsfq2dH2EVW5ZUjpXAtpX6RbmxThB77UuaS16qN7bgV7Abpp6nrSJb4XXV2K3oUqGrEDzBNWS",
  "key23": "PmBAhPbtWL24BegyNi6YGGDQ53kkGHaH9RNk2Tjx3VKoQ9FvvEXr6pRgX9TEeveszxefWBhw8DsM48gW5SBGo1Z",
  "key24": "3fd1VfyhVoyhdMhSpbAzY4dPWXm9bQgm2Wk5mRA89TSXwXCzy846FxZLZiYh7a3vRy7BFSFgH33uKDoJhfvpC7Vb",
  "key25": "3P8of4bc1SHEaVy9bCaoAWg9Cepvv61jySdJ9geouiiKQRBPzPVwi7NQSKAWZqLd6khp8S2NHRNyWUVoZgK6Z29D",
  "key26": "4XYwSTjytYY4sMfBUUJLv6hh75fKTHoHxZ6MK2ek5oDduBYPA8wbEirifUGjw672btSvmBnPxkHfrh4i914NxFw5",
  "key27": "65qaWEGwCmym5thMEbDuR1UVgoTnweKH5dSpdynmm1u5YfZYt7DSaMBF7BwyvAgf3CcdWKvrNxcXXmKXQ6KnpmnX",
  "key28": "4EABn4aNmksgwwhnJX7v5wCVjPgo9aV37chSkBBC6gSe7DyemogqbWcCBJ1KtYKteSHEodoGKVrbTRSFWG9bnKo8",
  "key29": "5cn1vBZcjpmbTKa7nRCBRYYYgn3schpLryFJKvWPPaxBKQDxFSQFWuTX8tbbbmeu6DTtpzRkvULFtx78s1hGc6rV",
  "key30": "28ocKD8F9zeSW3avbAP6s1d21rQhG2U6otHnEASWqi5qSkEP7o5WBrHRwKyiRVG1t6ZvkDgLdF1i2hPLLApj93n3",
  "key31": "3LvKLARDt8UeU2Mu7j3FvNHWaKqjfhWMgTQn8f3XTEq19WQNruPK6CVDJv5H87AKh82QUi9ASD8QP1gHuVxx2JQh",
  "key32": "6Ec9sRM3jvdYcV8vJbb3r3FeHWaqGDEP784K83B2eVHwmrKH9fS3TmnZupnUx7kYVwaXYQ56aXCcM7k7F8D2GCe",
  "key33": "5cpDMAL3QhWCeuy9dHsS9BYHzA4tYY28LB1rFMrrVTDQNBckqvUAdCjmzwd1yAtckTgUmnBLxECgJzqkbjE79Ty9"
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
