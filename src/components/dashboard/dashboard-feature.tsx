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
    "S5b2UFRoR2DxF1WSjcWXRYwW2xm1BsK2fUUJmCPHLucmZ7YeMshcAXLkPezJDmpuffVDrKjwGLzbakfXB5WR4z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pK6GETGyBsdE9bn999pWPuPt4K4xCvw84YXbVvmSASWc7RV1aBsNFMjAR4PPXBz3hjbeFszwMzMTBpN7i1R6rea",
  "key1": "63tbW7wT3z4sNxPfyxEuR2WGZJzry5cuVxgmGmarXbFY4h9whGK75xCCsoWqf6EPJLZLzMfHcmzccUodSuG1tvKt",
  "key2": "GXsCWTwiQYXg4ocUtHJWXEhU1Hm344MqRYcRXd36jZKVqH746DpWfhGcaa8g2gR9Kt4dUYct6W2nWCSyERgborw",
  "key3": "2eMSEeG43DU9FSCVjzRNE5nfXSSFD6BHiWjeeLQyGf34EkUmTWBSTseXqe5qu5ytBR4E7Wo7LEdXKZYa4o8T1GtV",
  "key4": "mgTTmAE4puHtLRFh2GMJQ7wkv7jty9AELTteP8RMiBYRrDgmK5UuF8ZKRvr8tVD9MqjnrE8jKTnQPctDcx8sdQr",
  "key5": "51Gx2Jg7ARLTTZ6dqRNSrWghsYskCcZZWh8LsbLyLAHMePC32HnvaozeBrRUi4j4srnKBRRr4KGNq61ThEo5rcUp",
  "key6": "2hZNpPgbTwg4ifMQZZic4vRQEN5zaKibgvD3riUvqcgHLinbHeYBAxvqUNsrS3ghKuqma8KLctgR2UmMN5vx53cE",
  "key7": "4n97MK5Xn63j6wdmCAtbiDELqZ3D4gCTHDT8vyBkkCYZuzGvsGaH58y8CqqSJTFwvkdxEbJxezvxVcCCu4atQzGZ",
  "key8": "cCg91quQeQ8fcd37Fvgdd1rhoUyrmzCW5o9pw9uQTbqdrcW1yQs2Ti5U1CjaxTaCCN3zDpM8Dxz47XtNwwqEGNt",
  "key9": "3zMdtgG9UCjUYSX9t3gDEm2B18gSK8yZyfLhrsaF8HfKXnt6Ypbmbp8AcyB7jiJJnuTDAFZKD3g1V38sD86FbRNW",
  "key10": "4xmBKgzmRRwXnkLHdgNmbi1WTZKjh9ixesXB6Smkno5bnjivdPM6HAQyxxEHa4CYJ4JkQuJEHyH7ab6eq1VNqTLy",
  "key11": "57iizaBgWqgN78oBk7PNAnDM7asagyNSNG9831chH5KHs5SpqVz6ufg3nQ71TQcZaWmCdGw5iHe4ctND4BgbqHzj",
  "key12": "3yp9SdW4Z3rv5VZhNE8qVLDucvS8gDT2tHJWzB22F5yG2iMH41cbP8CvWBcdeDD94uRSuiCM5nDM1mMkE9TTM16i",
  "key13": "3Tg1n9ehRwSRAQB2AXzgbPrcZhw8jQdE5FzF62Gn93p5EuzzRRTbqBvT6r7ieXqDGADpXtxR1A327CQbniWGzHNK",
  "key14": "2ExCsnAgKZqPUNrfLuesdZXsRJVURBYnH4ArWtAgkLeTuAFPYYiWycAPxHNGY9oiPQn6WqDamBC2Y48RcqivdZNB",
  "key15": "2QSW5FRWzCEpRgQAqvuSHzLvdhdFvbnRaZ1bW9knnKRrZnohmMbFoYQH7cWB1Hj7C4NTfK4QMSqJK86KHFsTvNtA",
  "key16": "4DMXEN3QKYnMjUWrMkH1KBWuu2vH5khMHuCVdiQy3TwUR6wLvyY9fYyaCHKEP6ACBSHfucqhAhNW8VCUiEeZaBgM",
  "key17": "4sxjHrKojroCvET3NTj4eVLar8noLi24Le962SjS8WM5Lc7PbU9pSqQ3estkF3jJvhbKc5UsCvqB9pfRCa5Ug5u8",
  "key18": "3CtwX1CFjmA7A3HPvqEqrVzk6p9TsBSaUXKfSXXEzPvvAA22EVEGL8ZeQDbeuYMDnjFGGbSqCVTEYz28sT14GuKN",
  "key19": "2ZCamLxoAH1n2m7SbPLHjLqNLJF1W3YwJJPk2p4jBdVzQBEe9z2A1d2tjzSPrmwrJFutnE6zxydRbbazqQBk1Jn1",
  "key20": "uJKMjfBUektALCXRPbnKK9FqiE2PPK68NoSpGzm7su7SXj4s6qo2qHaD98UHRcrmxwcU1zmjWja5DZMssLPypKX",
  "key21": "3qQmNR2GzxjjzAKcwjWNud1jWbmsaoG8GGo4pH77iS9p9hrS2m3Ys3494zgcSWgNyba6sM7gv1y8171FWr9AkLfT",
  "key22": "sK2d6MzteeewCUARsE1WyxVyW5EMgtWSzgiWs2TypHGRumUNDjCTA69WA7EZWg2TR2uHYjUH8cCQytpLeQpsdZX",
  "key23": "4uRGAiSxxiKv9ZJCxD55h1mLHxFssKn1kD979mMYruWTfUcD41pknU7Hx5Q6KFNBCNMnFhgA3rXDtbkvesufMJPH",
  "key24": "4NtL37hVLJDu9oopHTUTuRmTdEQEZDmKgMpfyRqc5zKqLAPCZjcvCHPtzGCfuHBpBv3FG7FeTebXhmn3xhLf7z97",
  "key25": "3qhUHj2dNbHvR6RyHD8yYqncj2HYAiZkXRWgjrdkzBx5SAwKQuyMXeysCErJ59RNb5KvRyNGsUWzznwMxTakeEu8",
  "key26": "5E69XmGbZa9iC2qNQ5sTKv8MkDoGWLjHgggnWj6uLJahE5R8LsHAZL16HgpCmPRUZL3FTdgkeVqgykc7eKKsHjD3",
  "key27": "2NLV2S1Aju8u1YTBdfRTYszW6dyY8fLvtas6rgLNnTzxFwY4np9JyuGyYqErHQ4GXGpJcNQytvhQsXyv8JGn1ZXa",
  "key28": "bXWX5urhmhdvgoUUPCctCNMrmTF9qYwregJ77pDf2nHBuWLs9rvedDEKvY95uvnq2oTZa62wJDN9AXoVGQPqsBm",
  "key29": "2WkSL9QjZyezjkm77gRvcGEimcCuKV6eJX1iMeviEop4Ea8yQkWnyjTQBZT1gRB1UqF3ZbV2LxGJE4TtGWNQ89qj",
  "key30": "6z3KgCtB9mbXzUZDo8XbJXoS6RABr9qMa9aqq8EvQNB3v2YRBHUHAUxfAwGjiDnVJYFZpFbGoJaVqehLFaXXCNo",
  "key31": "5gczhXKaoRvCxuc8ALJTKFnGLznk8h1CdjhhuSsGV5FXkn6VoQQXzUSDsBy9JmsPAWhkC1VbABNDd514t3RjHVVB"
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
