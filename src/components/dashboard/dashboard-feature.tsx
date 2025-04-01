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
    "EvbDt9fPcVcjuxetspzpVrCs6NT7MjE84Ls59CxwgMuwEQR8tPzVzPtUwyH2pGfrtCe16ojhacV32KQjh6Gh1pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kmvu2Zzmj8nPKatKhdCcypucCoGcTQ1PFNoUWf43URR6nqq1dFYSNQ4XznMDDnabXL5zhWzZWBPJH8weL5LojsK",
  "key1": "4fnMwChWYzvgCbGXYYo9CErZzxQiUkvkfA1sTgaKjjC7mcxNRunCU2HiC63sJwQiscX75RPAF1MVvqLXA9bDhGKM",
  "key2": "2zQnmRa52hccodzDCzRgZJ4s1eCveNTkh8zBbUHeTWKjbugZQrSzn2DHeds2ENkcyd1XZ5HvsBy3rYnPBRtmfKa5",
  "key3": "5aRdZaYoj66jEYJqWeyo4k887SxX3kZSmZg57DVVKy3GXKhfgmgoQJ7uFzHQnEhPQrJzHdJd7oAuGv4u54Ff82fu",
  "key4": "3DtvN2Zu53Y7TWEWTCSiEUggdnEoypwBgQuAQ47ZmUqzeSPonZc3Pc1uiMcuXWV4nsaKsw8P8B28r4e29p3oT38b",
  "key5": "BUg9Tkr7jrxUvYmyS4ombFPKVeXtiUcYFx6VbkShzSvBw9v9uzvarJ4X86kHfZb8NwqXfzWyuB8aj6LxhLGtHhp",
  "key6": "5L1Wpw2gStye2q6vNCGmdwJkTmZ565MRqTsUdFHPwNoEQ85L1c8Cj5oRZHLLGZM5eQ9GHu9aARCSCbbKkzJpN9ua",
  "key7": "3GgZQWoWHEh3KmYH2RrUsPgg99jykAKujkYvghqErngjxh2bd8MfqRvWoVCUkuWH3gdCQ1MmAQSDBWyu9iGDEtg",
  "key8": "5aoaDbdMqYYDRd1KyFWADgbfc9JoFsBuFkobXzqvTb9KpGjgdMSxTsSzcFKvYHveS172ByBQe6xA4Dc3VQTuQVTR",
  "key9": "61bWw5oz3TVbMz1z86oTzEEEEzRrN3sWmvomNT86mmUY4eXGXVHjorCktRcANYs4ySC89GLpg1Zs7XwXLTHTD6YS",
  "key10": "2Wzgz4g4Rj77ErVutTBLgyD5vW772km9w59mrBBtJMEeU1QMD3s4gFDEkGwHmSfoieXqhch3Rn4vPKj1BF3QndpL",
  "key11": "53tW2r9Bt5DedMujFDneJCrPRwbUUA1xmse5JSvccc2zk23WhNx8YEvX9UiUY33bjJD9527THRxYNAiRDxRtjCGy",
  "key12": "4Xa5dMLG8SXoEhMvaRkBz48iSwYNp51H5xBLQ3MWAwYeWZhCxxEhB36mutaQK9Mv44MLh1V72MrcDnZAmyioeQqM",
  "key13": "3SDaPezypBezSQRvx6JqkcvwH9q1Xtcf7obCXHXmmrjHDvaqHtnvBiSyr4s9YRxSu7xrpLZLgwoRu6vLSqUJqpsM",
  "key14": "3FawkvgZ349XdfHo2tk23JgtQcm8rfPfBJTGcwUMoymVg7wpXZ8rUjuy8fuv3yY5MBcbvgiLbSrzmapSiySb5ZBi",
  "key15": "2kyxfAagcRbh6R2WyaNKf3wiRDnpSxzDQC2RuurngEefy3KX2KDKjFZTzuBK2PxioNBJLYRdP9KjfSJEn4Xhi4TS",
  "key16": "2HedjyijSH4M9LSPASoX2xEtUyuz7fq7ehPPuRNJqAemRCNLdMHUpa7sCvH5XPYq5Prfp8M62WPiEhHB9tpupJ4f",
  "key17": "2F6BLJq23wMGmn56BG37spBezEPewAs5YXRLoPdPHD2TBQZV2Ai8S4iXYwbEA8Mk8zebVDPiDRqyHK2dGymurwrV",
  "key18": "2Xf6LLqrm5Vu5ibW2ho4Brw2Qdrh4L2u82Kp4R8REwsKSsNraX53jc9Hhy8ac2G1MjkvoAJpG1NpjhdU1hkztYhv",
  "key19": "3wwkr7DBpaDNV2Ci9RitUGQ4oN63jrkggyphr2f2YueB78FTHVyoNTmrS7b3SM5Zhf1wXkoJJakf3xGgLoA6kb7P",
  "key20": "3iXbtZ9KG5BAHJMVWMSAnHv2xDqC8jEJRLFeiSPE7Lo9MkycNPsTkBPQxabCyZtQF7xgbMJrA4VxhZ8DJUx5t5DX",
  "key21": "3v6B4zY4rA1E5sy8dEfscExZowPv1MnLDtd1kEYZF8WbVRcqAKDfZxiqPEpMj2gyW3bAzjVXEk92GFVBKBspqyri",
  "key22": "3kDRS2wmjZx9U2WL5f77eZB9eUPS9zXoEHXf4SEjfc6LuytuGz5ggGQL8NRpbrqUX5fpp3utacfq5M3ggFLdLVhQ",
  "key23": "2CbWmKd9eRxRtmaxMHCdaN4J1sL3RdyqGS4mRYyAJzvUKgcq9f7pnTVPFvJrS5uCokrNra91g6BKGETCwaqr8sJ4",
  "key24": "31Yy3tyc456itjqWDqGrCDA7H8FY3QXrgdhhX1uD8C6C3bL2z6fWY8RUBqL1VqfK26TUJrhiaMJogkHxG8bpsyd5",
  "key25": "5EAt3gSuq1SnrU394pNRWSwJxjyQkgRUJXoH3mvYoqYJGXyb96TeBwBgyUW8MRMcNYaTiCTxH8w3xVmR22KXZMZ2",
  "key26": "McWLB7fKMrYwR2J7t6rLm4PYeCScVVZcmtWwUyDXQcNeTHWYQxTnkX71A3ky9n4WxfbvLX21Gh8VZxoZzreYzEe",
  "key27": "5JVM7GZfHYZR6e6y6jBYnDYjXeLh9gP9ZeseEjRrzNqLAkr7Y5eyc9YvdoCAzR6r8PogbaugRM86nin6cVpr54rr",
  "key28": "44czvSdCi4DjdgphBamCXztkigm6HS84QSyFGZKz8vJXmz1bKD2Mq7TWTm2YjnrJYoNDjvWpMYrUX9wfTvde6beq",
  "key29": "4sGQhCLngzBhC7MMQmRFgzLCCpgbfSWrDwruMJsL4QGEvnnb1qtr9hfHA3uczL8wwnFudYuqWntEyKMWjX4jSXy4",
  "key30": "26pHJ2RdacGTnSJaqDcoHsvaPHSkKAXtnZXeoKvHtvRgMz4DZBZ4CcyK2NL8xzzr92JKtm1VrZp2RrT4ZZEBR3vD",
  "key31": "3iozDkBAGviKbVKcrnBL4fsWzurvuEQY4Jh6RengfddmG2ttZEXZb12hPNr1EkSg2CCbyTPWTYpnS2qF2mwYoA5q",
  "key32": "2BSExWakeDgtEYBwdt8c6RKMQhbvHdwd7J6GsZbraP1wEBQNZfRqcK6e4PABtRmTkc37wt6w5ygnfZrJWZNfK23B"
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
