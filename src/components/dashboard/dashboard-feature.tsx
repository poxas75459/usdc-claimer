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
    "2TRsXWXNWBKEVCZCiewZdn8es4JBaS1k4fQoom18kqXCb7zSsxT8KBxzoLCVUMqMEEzeEByfe54aGphNP37KHA2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TBDdJUhTCENAdTvLxiap9TWN4tZZyQVPExHagGEgcGf2dFeq8p5tNQwTB4KKJPsrRdTKS2fcQmFET3DWnMAFEau",
  "key1": "4vGF3TQ9UrM3WF5y2WW2H7NPEGcDtGo1nS7K4NzsBpAAkePmPd5AtRiZcqExGvMaC9LfFA9bPgPAsQwzC8H7Mk2Y",
  "key2": "2Tta5qpRUUZXnVadAFq5RqBqe6ooekHQnq14uYS84p5Sdyt5t6VbVCrApUfC7Ymx9poyV9AHRQTvxV7eimBrWxXh",
  "key3": "3c9E9nAynKfuJYyjuefPqxw54YP4VZLGynu9ExhmWt45sPwiTcauGUi6QULiYGHDt7WdPNPeGjPnTJ3NK63Tm3yM",
  "key4": "2VxH27GnYWnm13HGKwy4yihW4oqrVoZ2tYwVuLmaSbsbQ8LdGFzpcLCsw3ZUax4tLQJg29FmxtyQrH2NgWkULxhP",
  "key5": "3Xe2tg5tXaxucLSy8PMouKgHX2nn6maSRDZKCSm2ffWEQajGepwpedXgr8MZJgbF6FRchhVB27VR4uYpTrjj7UCq",
  "key6": "4M8vAddSHsAipC9twACNxkYp58yDKTViHHoQsnYA6Eauy1j4nQtQPcqdUXaZZtK1ch7otyG2UoWjxjiUDkLRbJLj",
  "key7": "2eAUZEgDwDpTkiPU7eJ8gyvcheJD3hRZxtH3yJ14Z7QVNsJg17rXTvn8vywuHCPftAhVd2f44ij88cv8AUH4UwSS",
  "key8": "3FxjL9yjmeBG3H39kYG6Y2CvHBekHyuWUwA8xQiGNCdCi8UWi4gf9r2ne9MtNiDNgJntv2LvfTmAyAxkndNmRZ1A",
  "key9": "4sn1m7LfrXQXc4Ws6jtS3K3gbXGCoi4jrr7qTUQwTGBkmPs1BJbdUVzJQ1HyEJWyU3oLHrfEiLB2gyoHA1vqW7p4",
  "key10": "5sBHeQ8WtQnTQfdYEgPTMb7BB8ixrA37d2AkRjPzBY7LM89Gx12qmoxasCQXsqHhCmX5ya6YK131BE88ZHhSdWHK",
  "key11": "Gs2fVEp9WTzRkDwij3bApGwoWwCXiGBFwTvzmgFCNe817in1xgXrdADDrcfW7QDASn5wNN1ZRqyuU6aGUPRGgzk",
  "key12": "5EcHc1gSRCtm7nbmzv5UFiyFRehQhSXnKQquRd8MBSUJskvvW761siRTxruwmuDWfXT8i7HwzM88479iBgTq1gNi",
  "key13": "3dvxonyW5SCY9P5A4awpSRz5Wy25TAveJ1aECrKCQUuafh276VqDZ61txghEWyQPNzSGWqgAQaMxPRTykWEy3MpX",
  "key14": "5Sbyfz6uyHuX4JWegpV6wDT8cZ73hWy35Hzn7teBCayg61eXCBUQWzeNV53fdPs4ffWYGpcfnEiSLgFLuM8kWKr5",
  "key15": "67eX1hx33PnX1P9phTewvxcdGGuC5j1wFmY1wkqbahc4A8UKHa8Me5xJaffRAsHyPLy2VN8vptaqAvQMVptURHmU",
  "key16": "44GsrDP6oa6eXDrj9pDsrwBzdpj5L8oKa1Zw9qw2R5qvzzCPoUJaxY7GdRjpHSKkPEHo3BsYbfZ1NcJjun69WGsZ",
  "key17": "5PVtNYnmq3jL6zQTxYBF3txWE3VaY5nBcARE5841nKpovR2fQaVZBUQDa4MuL9bSc4xH2uGCZtyHPVFGbHBiZKGD",
  "key18": "3kE9hb5GdBHhHZFB1TXccVxXwU9UJW4wMhC89NovfqDnTC1hHVroMwjFNzuBqaRTkpKJEnEkvGUEkGWief3Rhan8",
  "key19": "5kyp8YMxeDao8F8fqFmw4P7xm55gZSny4aQdVEELcxJbiwm8Cks6bYetzFyXVVD5qjpvTKGZHPX1xroneyXYRDtr",
  "key20": "2SbEFNzUVa7qRFndNR28mYm7YP2evXGKU9gomznCL3LytUpxvyu9nsY32RAA23nrfAcpwLFDFMDJhiUjGdjxb5A5",
  "key21": "uvztdAFcLuf74UVzfRnSKYT5cSquxf7ACvY588Kz3iPrSV47x71q7boiKuMzDNnKoMC6kRyUagDbbUB8GH18D44",
  "key22": "4CyPrvg4j15MbEW9S4ttycsz6TCRNzTfx1xZprWi75zqFvL65nL5wQs9VWo6hNajrrAhQHNqwzv9b6Ho358Rin7n",
  "key23": "2mcQ2RDYQHKagvd8KP4fmctyMVKczaZE9pFaW4NKq7TSgC8scQcp9wsyRtuHLXTeNdnUjyZyTdQzH3ScrL1sbgox",
  "key24": "5JUV6qs9zahx673izV5pNGzcD4UWD9Ud2ZtNq5V8TWwefPHxM9QWNbMYcCK8vey89MgvLU4hQNAr3caTVew4ZjFT",
  "key25": "2gQxMcvWYnYVLmKUYpAGLFgaxte9miD3KmcP22iaaR7pBrrmRtavG4ikKnfs9XwPiQNRVTozezd4rzA833HtGC2",
  "key26": "2ctk2WFiodVNqW3ExNJunEz7KyMYrRBgKPgv8A1WA1PD3soowb68UtaQSk341DstDz9htvWCf5dYj7sxbchqx3sX",
  "key27": "62MWHeTuxZ9m71bbaX5r2ZMHf9TDewATrRszc5N23scuAAjNpGPyfKAxeEFuYovzVX3nvCunDhafjoXaZ9VTP97Z",
  "key28": "47oQQ2PgSUP6mEKGxkJXfoes3FzkyLhJs5wWJaWZHaGZfwXMquJfsnhYekwxtcB5k6Wp7TrBBMScpyjxGrahkfMQ",
  "key29": "4fovdB41FpbFjEnwFuh2eTechRNd1WyBWWdu578Vq4YrG9DhUnXkr3ymhKh2QpqzsiU767ahfAUacz3NcoksZNPZ",
  "key30": "673hdHUS9W24R1PRneWPVozfbuc4ytgdxKVU9Qt2H5gbSig6gWrASoscmrbDxpXmgiq7NiZtCmFNKLgRkaiw1MBx",
  "key31": "MzRCu9uhpVmx6QhUVsdhDqaDr8zR3vzQwUvi6dkS6hxP2LEjQXWbi83hG6jitXmFFAF2y6iGRWWBrsTYx3r45k9",
  "key32": "5Tv8ZGB3Q6yoacFJciSc4eamCgXEpBV8qzqCRiftAiJPrbsrh4w4dycLcz1P5DvPAnFh3bDVptPKBxxHyX49st3q"
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
