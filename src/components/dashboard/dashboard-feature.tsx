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
    "AP3pp2wQ6e7UXEDxw8GuhdhJFvJYQPwXdDwtyfhuLWiYiqjEQrcymLiniB6my5GBgV3xVDjXnFmjF6sceWn4mVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DreYxhnczPDJjG983fCHJuqEeY6auRjDVHbxdUN5ePaqL769Gc4rpKQAcXKhqCPVNkgjupEdDpWwLub4eUu9yJS",
  "key1": "4AE8wbooLEUroj1sQS7g32dtpjj4552boNDCSN9vUctq9yAhi2nBF7gtHKmSR6XhfxHqMBt9U7eireQtSfiG2juu",
  "key2": "2q3S4gue8h75ivqLBwxosvF2spX3b1R9TWx9m8c24kRUUCZ7E8qACCY7UGFts2xETiKLzjDQXi7fnkZ6KuK5tuf9",
  "key3": "b5UByC9fztcJVc2k6DCvT5iPCVwdYZBK3m8da2Q9SrzwJjV9EdHQMv1Zqc2nczKsJ2CdWipDRPYRvxJx8TRCEfe",
  "key4": "2mifDdjYBrxD7XBtcf3xziH4XKGQik3eryAbTNPkATW3fyxbk1893Hr83JneJUJ6AAEXwr6EeCCZwFKb55KXguu5",
  "key5": "42zSaBmVRMTvaByAEATbh7xgT9j85ghcYmgyH1iuQKd183rJSGzxNEJCh6XzB5yWCmGQRCeepZCNPsYkCjt8wkh7",
  "key6": "5tKB5mqxGPzMytEaTyVVHoDDPscyaHGPeCpdndpUFwW4axWDsnt8DpPBvC1c1CrM6UiGz2sm8kZofRQ4KSEZdSdG",
  "key7": "5YZFpsCNMKjLQg1iV9qHS5c5hUNpDwhkoZhKwemyh8pPbMJ7Z8jwvptWhcrusXrktFpjjTcKkmnzSFDZeY4oFjuf",
  "key8": "265A5z9hN6sL8Cjeu6aXWp4Ed8WhLbSMEDtcBBM2coNUi2edf1NKpUy36ApU2Cnprfo5HisAUUAaiAzVHxG51AKf",
  "key9": "ohegPcJFmhzGeTZfLA7CCjCTw1BKjivuiYvToJ5QyVGmtXr4TH52zYzrTRVVCxDfBFZi6NSM52EtJpw7yDFcLgC",
  "key10": "5LPKK2ZzaooG8dHar5FkXVyXoYaGaKsDH8J2hujiCRbNQvHEJfA7FCGfJ28cdWbMSSo47heWoqLMracGBAYXccCc",
  "key11": "61GnZ5rFBqDYuc37BMuF5UoGAaGQq67iagxoxFFhLNUGU1rrpLJ52fdJreJdH1oM3tggpQQZoS9kaJHBNEcLVB3B",
  "key12": "2mYGAynAE7ofGTqLM5SGszLMEh7Y1ow98oCJqResnBNvR8ReaxGh3ao8uftryscnWmEaijNYpqg39xCDxYB3a4eh",
  "key13": "4rN1ArS4mdRtASmMTwc5EuhpujZfHKGMh6xWWUaRMqmNjcQYgYcbteSnF8moPFH1zck9xsXUx3bRwmfuhToU9GAb",
  "key14": "2b4pKKjQA7dQewx1rM933HPoDYNuvfLyPpKExtQT5um1oELsyJuSZHm65hyqdFGznyhqEKZNEhVH9J39wAT2jKej",
  "key15": "CTRAyTxgCz7Xtbhn8YeUvnsxTqMC7gjGFgNRFqYGYP7N81GQUPM1wrGvtSmuVwi4ypzLN7BYzybSQBPvpotArnm",
  "key16": "5D9Em51Kkf1i4piL3oJiBfcYK9zGaqKxhvmBMAErX3EtNw8vsVLAKyY34ZV6ZQRXiJ7ZYhjqfaSeeGxd742s2bq2",
  "key17": "k4gJsEune2CmoxQa85gkYjP4t7dJFiJX2jqyg2WTgEznmbBpnQLQNUrj2JF11qngm6b6YG2tVvrz3Gwx1epkqhJ",
  "key18": "2hk3zpoCPHvHpQbn2evMn6TgchFjZqfJy1xhPgnDgRPhijmTkve94iEPg7fY8jY5LSrCu2xGeqV2gqDfBKineYKR",
  "key19": "2S198UaLXpq6m4SMDDpGyxqNT417xymh7yBAhAZFujYsMEao5Qo5dkJth3BzLBxBrCQuB5xBtGyLJ9zNX9PVRUi2",
  "key20": "5rMvMY1BTthaBwncUjWJYBdsvnUkJDetRB25tFComUVq5xmP2c6T7fgF8aBB24rEFaAtL6gYEhBZcL8d9bXn1ctn",
  "key21": "3LxcFmMnngRfS6GXZTLySmmy6bNvCsYvNewhSqyoaeXQugVsSCnskUyMwJKX5FVYdYmYXWeVgaZESW77Vq6dWfCw",
  "key22": "Jr1ekB4AR4Kvzbpza96FaNFM7SU8x6jRa977jyqdajbafYwHyyXi3LaqcynWYCHqbVPoh1Mhp1LAwJPvViUVJiu",
  "key23": "5iBQRTWzYcuerDh5vtT6nWVgR1VXoyovZ3Kug6WwTpa6mSg9VsotHZJc8nPLXQ8jkhebVvtpwRxe6rPUeWL3Cvux",
  "key24": "32qQ2u8w4cUY5sBF3PHMFTsT4dKd2iKY1dYHYd7gojWtCY7sPFzt6dQ8Vx8gcZpLqLvVJPhQJxzu4YZCdcRgf8GV",
  "key25": "5cKcVhJDquFocUtqocAmjYtwWVq5fqHQgYqJfK4gjgsAQxKDjHMRTkTCvv3BxL6BzA8cv928SVGkTFXsZ7LxSB4Y",
  "key26": "5NosHjnyHsxZpWXWXedeWj5AFwchKdWHDC5PbBFRsbFMrSo5ET1kc3YFGb8akgYukUyJR4PZU5fviUqBWSFmaaD8",
  "key27": "2dMWuqbF4YJ78kK9UepJMt9PiKybYGYp3KgeBTWRwJr4mYjKHqJBenLX9qGeo86zLQ462MnNMosJ6JMnRrwdwaxN",
  "key28": "zPdv1komsLwNijfr5587hptye9FhPCMsNYB5iUKETqZrL5uRwfzqWPMTzig2eN8LGtcdjFKmEMKNxQX6jZRWwwV",
  "key29": "3oZ6uiNn9SCgwTYpBuaPpc6Jwv2dJ1gxAtHwW4vDLiEGq4jVsGzsxk9XBGDTrJ59rtfKGKM3fcdDuKt54Hf7nqtD",
  "key30": "5UQStHA21RmaXJSCC8ZXsAm85RZDjGozmw4zsfGUQ6YNS2oiUYKbT6nTxpPULqyDJZpJYz4FoWQnoCEibbWS5fSV"
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
