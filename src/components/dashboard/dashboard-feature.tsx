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
    "4HxUkJJx73R4jijJvsznzs5urFfymLXap8zaBytitqDzupvtArVfoUc3Y52v3hvteb7N8UhnENcsTCY2X8WSfQrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mc3HG8WcR2eNFDfLqvv7ugVJyt8YCWyZcMJEeG33YursPuXRGCidS3WpQjPDyVVJ4eCxsQhy6z4jvBs87D17EP5",
  "key1": "D1HY9EMHn7QqHQxEtBNvt4MphdLrvKF6UaKS1uRu8P8Ww9NCqxixFn4FSatjjWnTjKQic9V3BMVFPP6g78QDQJz",
  "key2": "nd3dd3BUArNQhC882rSPp2QSSmBYU43xtepo2BpMfw5gAKGY9SfLFQYdvSCQ47EjTXLUWgaQ2GuFh8Amxr5LBuL",
  "key3": "5Pe1MhPKYNAFMkCqcU5SNbGLaw61k5gn7GyoZnfRhest1TNkwRhf4TBnWBaLTSTJLPii2X8StChWsDNffHHGL4y1",
  "key4": "4Px5SXXpzRErtc2VjHTgj946gbjKUiwjyjko98itXQ575Vt1sKokTcP48uD4zCufEAcS66utRS5bo32JNgbvn1UZ",
  "key5": "3hSnKheGr6KdzRd7DgDdGSkLtFJkf2FQ4bDJS5AV4gLvuNCkrT2nUrSxRrkbXGMCqd86JuJhbtTXHafPFAKbCCyM",
  "key6": "3jL9SJ2QJPKsZ13eQdGq6AWyZhgCgkS8bkB9gxw9Hutcv2L92X1cuTTa98MoGsUk7rboEQM12ghR4XFnijznxtjE",
  "key7": "4qowHwWt8Y6P691kb1Be4w3k2gjeNiLt39rR1RK5t6DdgP3EvYcLv1srZGWJZhfq1Nwg8HvhuEMQagUZJdpJreSY",
  "key8": "3cQ9mV4MVnoEeSiA5tXXFkxYpstjVPEGqSSzJmLpkeRon4H8aUuJV32dWAwa9VXvxrgvX1v6kfeyJe9zouCk2Kdn",
  "key9": "4QEZLF7tR2nVKBo36TiBEn1dytVJjL9W83sgPYCZzUT91e2aMDThFBdHaE5op2CbE9JJ4RVgQLrM3RLAe2khpSEH",
  "key10": "5pcoeUgC7SdimiqMRfP8ijy7nPZFVwDC22pyv4BF7eJo5FXSxx16S5AicdvswcBmiFdkadnNcQp9LirteQ3eTEBA",
  "key11": "5vBm7HmcRBn6L2B7EVKWnUgst1FGD6qjEkoHFRnF8HNj6EfanPN3mvaNV78duVAMadrWdJeTjTDSGz2NbDh7R3Be",
  "key12": "ztaresmRArHP54kFPEbkRH817D52jhHe897PpzcGqjn7gwgFync5VULG69kMEu2UhcZAZXXYNFhxAnLsZvs6V55",
  "key13": "33Rouhq2UC8Vp79371CvKwAALmES8U7sjy1UAUvt4F7j1HEqwJASwAWShDNYkk5GVs4yBwcVcVMtUGtxk3Cg1fS8",
  "key14": "4PThF46w586jwtS8PUNRNtKYKymLJdJfFhcesH5195KGZmXFjSwPwRGp2cYVBeaBeBtcFSXou4CtcjUxGaY7mKh5",
  "key15": "3kEhLxy3NGYSykTR1w8FBLeMs5k9qwxz62e97BZzSLKeTNTR2XCMqRKSjcN5eF8xoVQCVWFEU8dkqxVgt6Ag9mJU",
  "key16": "Xp5S3Hz4TUhCn75GAtjzmVWsq9rkA94kEYFyW8mqJgk8xedAYCvvbmSkTwgTn8a5MSd2fwVDt2LCd5dNp88JuTB",
  "key17": "87EaEDk72SPpYFyr9Up8hDKQcfma7UstRVZ3nwc8tGsRNKF9FgutAQgLyfCT1aCMiNGXiWXFSL1BenDHWeXioiK",
  "key18": "RMERX5MHxL6qsHxZ9nJgPCu276gMwurYXk16pVeKwpuoyJrVnRTPsYtJJsrMNkL9VEyxUzCfmPaNp6pvy9kTisj",
  "key19": "W2joxA6tAn78MxbEa99sz4uw3adGWHdpcy6zyYXcLGUrMQBbGupN4TazkM7VPv4aszvhwjrnRRqgf1Gn8bG5vXD",
  "key20": "3Kf4jma8rtRtej18S4f68MzKA1pb5P9T6jADv4bw66Q6s2K27Y5hSy4yFTg7MV87YjWoskQdKtQfycKmGeBjHBAL",
  "key21": "5RQBMhHMi2EbLC82pAyUrJz72A9xrigaidmVCY2ttbBkdFobBpXoxfQtkKoCwUX87NbCjgBuQL9G1DSrasvLMnbB",
  "key22": "2FiP9Rn65VGau3oSbKVBv3Chqc9SnETUtgcuBuhhFdiMT6nf2jwodScLvcYrtnmxDGv1nvtmmVCw7t3RpBjSXa3z",
  "key23": "4AVWuaJNY1Tv8kT9KwLFnvdNomzryDmucojfRJwfaedLdj6LEWetpCJPSYVPyVCBZfkomi3qDWmzyJNAyWr6aRM5",
  "key24": "51JumKqQgidRi5xBHutE9wtc1NG754Ebw3LSc7DazsP6BMrM865PqaSS92So5wntMCLW9QghxYhUjahUtbnnq1EQ",
  "key25": "57WzySisS2fnHLNCLxeEJMoEAqZGBu8oPE9nVxa2D9B4YSK8X4GiN6FSxFiHqBRWU8c7J6aMVvMGNVWgFArEAKjw",
  "key26": "2pTUD18k8PZmyWDCm9akhkyWFVEB78pWMaivPHbZJHTQqabvU8Gwyg25JmxgEqRJbQ6bSYsSU3pqF8hApH8oPoBh",
  "key27": "3yQCHY31AU31uA2m2qbKpaFPPaxXzpkipgZUWAHNWXDnHf2CyCdzKCQkbgQZGj2vxHoXBkCZRCkhqo4owpb2rVZ7",
  "key28": "43JGNZKewFafGSUyrZJkDMF58sQvMNSAAKJKEGR1w3cmgP6F7os4df8Ys7imkgxeDAUVdqYeL9ZmjjaiRKgjRwVr",
  "key29": "2wqrgtaWZmPon6riHtLqv1hxFPMT2czEJZrTtsKXbdr11Uz76iruicbwCZ2Z6kHeB273NKmhcY4kmDZS3jF2SWvh",
  "key30": "4hFUmePfna8L59596r1jUUjEUmvNntG675gCyB2F4dYumzb3LxBSAKyRGTzBYnDw3wV6txngV9VC4pg14WMGGK5A",
  "key31": "2hCrX7Rqp97Fgn1HSFLq2mZduvFVg7asRcVLubvCVrah4RQreSMy22eVbj7tUqXzB28VdQnzgBp51crzvhAzWvxS",
  "key32": "2nQ4tYMA4umW2ifw3zNHDUqsqZAHa5ns9d67PrAf6ud9kjk98pHYDZth7oBWNFbbULFfFSAjrg3jKobXKbmd8FQX"
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
