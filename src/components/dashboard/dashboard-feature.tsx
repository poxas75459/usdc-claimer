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
    "3aFgFCGSSgg7RTm4G9nvZmn3W3QoFuEq8JWLNGS6s647Pnd62x5ysh9PJBVcS9KZdMHCHCmc69WqWPsd74h19uHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AkZqu87Ny1w5droCgayB4EgPvTb1bwQQRSP2ciUexVuDNeTXRdLDs8MiTx9ygVZvJE9MFzprJAEgpF9hZ4bc7wU",
  "key1": "2JTtAzTrnSorR71PnWQhtwgf7Mh4ximx6DVGcwS3y4QUxYPUwMx9m5mzCZj8jgCvvDNvnKvt9FPtkDFJLVe4KaGC",
  "key2": "37B2c6gLQErsbN8qnCGyAC4na7Ty3gdPfPToWo5M2sBgcaeCB637YpcdTfgi4CwRnwJx4xMpUufUqCbuDkc8VtZ4",
  "key3": "4vwGeCLVCvfJbT1LubLmqfDdJD96mAp235QfeBLCc8DLo6GBecY2ncPiARMjmmzdX5xehYMqom8CvsbtYbwSKTKK",
  "key4": "3TiF77ZoUrJmiz32tEgyhctre46M9gCQJi4H7xF6T2MKMGidYRzUM9X7zXaJZUiodhaS6up6Ey9KUg5g4g8tRBP4",
  "key5": "2Z8dUUHXUU1WB5Tf5T8GDcrQrYjJKcURnJ9yCyjbJoyDsJCnvwcT3G7uDQi4g4zi8bNvxDQ77nfZkrjo4aD8ppDD",
  "key6": "3gpPBJNrYJb1XJp9En2rV6G1Z1r3GU7EeZFx388Mpnik9ob4iB2bBTGsBW7JkLANYn1aNmxSqrGGJpqsFT1NaUaw",
  "key7": "5qkjV7Q5kT3TFiMPxdKPNeMiq5JWQSENWHhSbjxARZzc5WC2bV5XG7BvNvmR5KTxnwRtTs26rHccQgSepyLfSy5t",
  "key8": "3fqrYnRsyEdrxTRLgYgHe9RGkVvyApVPoEfeqJG9x68nwMu76YCZjyoGsa4DaNDaJQ3K62hZi1Gn2hGCoJ5Ju28g",
  "key9": "4TBCYvn7U1AJYiGpL1nhyg1p6RcD3q9c9dt4Ux3iNnCxsLz1esMPD13zY1GogvDDD2513nRDR4C381Dee19MXP4p",
  "key10": "3T8Fxi7KxRQiHo7UyATjZNp56nXejyCAAcoYihcHapYcEBxxXFg8yP5c12WtYRtPW9sGbFTYhUSSYPkSQYdqDTBr",
  "key11": "3M1rto6YsmchdrARWBbWN9kpCJNNm2vgU6PU8g6dWv9ATYdz1UBwALohVenMgynhU95SArxYdefUb6BsWxBaWQpp",
  "key12": "2uUHb4ZaLVUWwRiyfikxB7ALKCh9KGmF3SVnaXxnrZtyV38EqoqkLyhYHKvVf9CLJXobR5fp3BDDbZb4nZNqeksF",
  "key13": "3YNQDn3JyjdPdJALgtydyHPnRbWy432XSwAhE296xutuHSCdZ2CkxnYoQ1PxxECQCwE4axbHzcU2Fkfi9HwN57UM",
  "key14": "3SSvej7PKPgY6KSVJCkKusKdzY3jAYUakN8xNmNgqsoUXuQCdut5AM9u9YnZ7RNwd4t3jNELioLUxJPx45GCqQPg",
  "key15": "APYkFanwWtvYdcxmweAgjw4RXgHawTbvKPDTXzZzREpkj1qV5RvAVL5Kz4kJknVHMGoVyft5RK6axKpdauqjM4p",
  "key16": "kFVhg7RNJFCyBEDPKWEpbSxL4KJNVA5TMk2BU5bdW41pUjVDea9M9T6NZ9a6mAcEJGttSYpZoMaFkL2p5jRZ1RN",
  "key17": "4Kdin3cor3nzZQF42MZZTW3QrEdFaraApAaMv9es2ydNVrVmtXjeqHhjkedtTiBv1FPd8Z3UB7PiSFLx5R1L32za",
  "key18": "4dTyMxqiVzHeuNLh3jwA4UM8sEfP7zaoNEApiaEN4sp4Uz3eVtE8YNBcgRXo8o5aQK6cNfHBsC8aDpSapLZbbGzj",
  "key19": "2PGiMz8MzSM17uvXEJuz2Toz2zN7xPnyt9e4RoZ42paAzh4HCrH3W1vBov2K5a7mge2LMvYC1VnUmTqPcZfGdLsm",
  "key20": "3e2d4QDUmKabDoukVrGo196mgoc2aVNtRBuVHxacghG2GxFNX82HPG9bNmiQmmXmvahLBsMUCFsG9dxGTBm6xmLh",
  "key21": "2bPDbPkeVJkSNuz4nUPEFuG4xcLSMK5e4BehJ1vp3jGyLU3DozJ6QUEkX2orZHHpdSK14EGfaGo4UHDDF81opgge",
  "key22": "4cWDGs44u2pumzysUZVaxt2h7BAn9GQTCGyqQDSnDUtFUGF6MAC89M67RV9KUDuby56GXLedU9tkTYEfXyb6C7i8",
  "key23": "4dwDBA1jbijCJXN8MHS6Hn63YH1ExwhvWryuUvvAgirEV87MHBY3nttRfVvv5o6FbGxAUApy5uQZ6NA8p3Mtfwk4",
  "key24": "3yEwffKvVe8JrkR5EE9Bc95BM5Af2UdDpke9CW4PEsjHxMSro8FHXyvtdN3UPXpDJ23cQC28bRRwnd2yJJJvFgcN",
  "key25": "3RFfEMpXgwYqgcdSm2YC9Mc5xcSrWzkwww9RM2L8rY1s235MEfmLcEVpwp9KKYcnaYr22zF8bxd4sB5589Tyy5dR",
  "key26": "YWtvzCyXqoknqFnepAomGv6g7Z2E9aeCzFFwdrBoF92dpnsHoCK7EomZSHBfji1QVjMejjjbUGfarqudZE8wiAk",
  "key27": "3pzEi927vnTf3zaJWBiCxTqq5XyKK2aBmRvDNDHDGZQu3rtBngNPWypbuSDEYhhzoLsr7NisrZ1jEpGpX9TD5f7A",
  "key28": "373gJN8p7gK1PcEgGUk5BSygS4jz2XnsEsyjVMXUKGLcvo3CkcBjkqDb2ix4BbMsAWSGPVdDv6L3wkcwYPZhMN7c",
  "key29": "2W1zm9ZcoCDxFUgB3JcDhUBPy6v9v7iF5UcxZRL1MQsyn4HkMBg3btZe48M1Tdh3iMU221jzwfc8PZxT7EBHRKKT",
  "key30": "2jCpjajBsCAbvXqgHA4HKi3rK65uof6vi4NrJjsK4HtyG8YAEVmQ8WBDDCsHg4SfzsmrsPtdK3om5dw32fbYQib3",
  "key31": "4FMnXKtRQt5HpkjhSuGGQQAYMWTCXxadeRMz3qqSSkugPGbmgTRm7N5DL64eKa9stXW5fs1gRtVrhPwjZuMf4Xnu",
  "key32": "2CTM3guktkPM3QbuD3JsTSXsNRH5gaHCFvyZHy6BEZqEffMefWz9DS1CfiDpvaYp47SyZU393V3sQMXfAMRYdQ5Z",
  "key33": "4BF2RmwzNzxiKxYXbzNztmZJcWRvUpFyEifuG4nQYzAjbqkEWZCiEvAghXWbHBQMb9JwSQZsUcQg4QZVAMh5rKQo",
  "key34": "5pnTqz4NUunbKy45YWKFsNg3ZGu5HATMtFSjPjNj3wiNFxRRiRNi7PUkXTixRx2UaTRckTyoDPJs1whpQxJoCEYD",
  "key35": "5g6yvdU1VJgUsFAWzbxDyADTe9vAQ298y5taf82zvSn2o6mshwSSLfc5xkSP5fSfStgYgX6aQswUSsJqQxVmZZWe",
  "key36": "uMMZUg3DiftcUSSp1BQUvFLfsUK9224cKXM3jcoyEfiHuYHHrAfwLknWdvCTEVc1DjPZDntcRrMrJSfMUKGQYVm",
  "key37": "3kDLwncZ2P5e4xzFkriB5MP4ineHoi7rXvHAx3go2HjpPU7HcUzNF1XiT7Ftw8d5DjAiaxg7muRTCPaYXUZr2qgV",
  "key38": "2XfEARoU9hGCmwB3qwaySD7bE7hfRB28emEENKNZSy3Uwkxffq7mBmBBGkGqEC65JvkjzSEw3FceK6Rg6UgEcyRx",
  "key39": "38m1z2oycYs4mk8UmCGepVnpWywhkq3BU2fAHPNj9KhXguqeaAThqayJLtrSZzDgu717U4m2fnkeAhDZAkYmb6RA",
  "key40": "4gZRmDDaSCgBZcigji4wgU8BDxm5xZHyurjpQqwd75RjzbW7gwgFDmfpzYzFg3yfFk2mLQYd4iQpWGKvizvxQBRy",
  "key41": "5FiP8RGwEH3gahFTZd977rsjsZyNYrR2zW1H88CtcSevpC6CCz4kKAyCAEvoNaGSngn1EBKoVzRJvZ9YU27yx7us"
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
