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
    "2Mba37t6HNPp1xmts27Whp3NpN3V4EZMxuGnJX5J3y9nACUKvsCq3NV6NiNodYPXSNoqHLMCMkfiMBYF2WMWiUsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dat2xLBwRFqweTD6cr53eH5udVZfD463sGYEMhKmjZqz2cgsvgp175oN6kJxvgA3jusKbwJs3gGRAn3Ny4o4Efv",
  "key1": "2MEdaTw6moPn19Z1W8C7AnLAqR4dTh3MCaczLdtTiDMpSnePxuFEHV2V6PZNK76fWqHyL96PjbieV8vMPJ2be5x7",
  "key2": "4GyQfwaJHVQUT7VfSmpCy7PyM67VqAsTFgzHc5CrB1ErKQ8LSZGpdfNZshETcWm53k6WpRVFAHyniXMrUni6keZL",
  "key3": "4iKMd9428NcJZDwA6hejHLSTxB2jYv7GTVJ7EMuPerxkKXuGNezvbR7S2gLEAbQBwZTCA1Y7fKxcwCe3B45EMkwp",
  "key4": "3S5FEXQi4Bk7Rcz7MU4eVa9CDzbcN5QbX8Tyq2FLNcTrLo2cLV3r8m3v2aMsYWeJmH7zc2BS2dw4cgZzs1pKSoVf",
  "key5": "2VxgKL5seEChDX4werc1YwPAJGCk6XTpGck9wgkBCyi6gvQEdHfVANEoChm138v95Bh4otdfBPV98SgbzL9Yy7cM",
  "key6": "2FGkR8QnqjjLXe9fFsBimA99jFCHjGjV8DxEkLGuvMXUZoVNj31frXMKU6teoccN9fh7gpCwBegdaowfLidxTaDz",
  "key7": "2X9Ec4hYTGyrQSLhmUQgnbEW1HEJNubanU91ZQLL4VpMjCxig5N6CHd7FyEyn83K4H9FU1Gpg81xsRK5MVboGxVP",
  "key8": "4ek7E49iio4BrvEe3WpKUggN2gQ3Do3BKHyxQ1uepjnpXqeUWAuVQ25SffvmYu8EZyActnTtNaN4WMZoZ72DFH8h",
  "key9": "KZuqA341xuPq1GCvqTCJxGDxfJKm4dTnw4QzRvwSrsyK3XnVr7S8hmA2vVWruiyZupawER1s6KyxNyJVdzdQ3Sg",
  "key10": "3SXqU5zgWCWNRm2kk6g7hFd6hs8RCHuryRWZP6Z6tWUnWvCqjwRJJXgJbcnKyMyZvgMUNgNBS8WzxA96spZ34oqZ",
  "key11": "2kzhM8XQpxNeqbo4hfALFGtSbBaVMMhVCmWw98TyK8qbkwN2HKjERo62LoYfHJgdGWARqhkJM6KJjy3NiVKSo7Rf",
  "key12": "5UnvQBUr8Q1ZPSTsk6Q2KML3txLMpXY5gbHgMYkoD6bh2hq5zHg24F3eDwqDhPPiRR2YSZkkXTb8Pcdfd7XN1uwQ",
  "key13": "4EAnfnmSV1VhzuDSYVa7pCtmLjPFwM3mKL6QMHY2GvgzDq27gRxdm9bupWU3ebMUoxmTi4Gr2pofWHc211yoXh9F",
  "key14": "ksrSo2LMm852Ev4K34YKXEaMo5kbzxCxFDreM1g36SzWDC1JDtWjHC5SwW17ivDbChTVWTcFojFTsPFE9FG6J6T",
  "key15": "38UfPsrHFq23QD378quB2Myaw1dF3zwUFEjdSsV6PF51hs6ZGJtEeWqonVyf8j1R5Son4MvjoHntxoxdaEK4Tgbg",
  "key16": "51W6dAPMfjJocZPfDLXTX3LELG48uCM58qgFTKKQ6ScgcuguGRo1NAnbGXCeqJPZFs9s8JSkWz1m2nEdUzhM9MZW",
  "key17": "4DqDvuPEDR33g7G9qxr8UgXtN4aR9fczgQNm5W73FgvzvBkDJZdmTCimsW7d2ieVcoRtdhs5K6Eei7tRKqVhw9Mc",
  "key18": "FQWKp1LBDSSJZLFFDdEUPDWM231KZ386TxLbAJLUCPehq95dfWebrW6vGZqe6ZvUQ8mqa54x35RdMb3Xp7kbJBt",
  "key19": "YeRHtrSNkJ9AxmNrEt7W65MjfjxpmLsaQGLvGeod6nu4DaZWhRX9xGeMa5QxZhknP9PkCEogh7L513oJawfGSF1",
  "key20": "4AVQg1ukjBGEvP6eMFqSWCWDHL2zE5aXCSJrUv5yntkSQRBz4skZZCTYwYBZMZRpEUvGtvAhnMLCgFGMXVoZ8Y2b",
  "key21": "2J81BKseR2pGXdriQHag1n94U4Btv3hcdTk16heMY5UaZtHjBtkVjJ4MZSPNSzynCeC98avEQBvRycfKrHLHoX1B",
  "key22": "4u5H99XUio3Y1BkrDwejwthCGYhs4BD33za8fVo8XXYGFPSYEdNY73QnBKXfR4STAkuqX37XtWDAGU4Y3hdF67qP",
  "key23": "3skxH7sKBvg6PLSuBzFhJrGPB79HPn4vFj4xChWgyFA29E4QvdXupQA9yfzmkdfNH4myJcbvVLDXSuywDWFXTBtG",
  "key24": "kmmaTpe6TywUPQfL43gSM8SawbfQGjSMNmTwNi9JT3cbGBENxHnqdph8KJL1d1ScnZCEnbPtvyRmuUDwEHwPGRe",
  "key25": "5YPwTcva5Pr11xg1PweMdwBEFLC8fZMu8abUFNLTxU548nXCwCAsEn35cdzjWLWuTLN4Sfmisbe4L6zgRoo9mivy"
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
