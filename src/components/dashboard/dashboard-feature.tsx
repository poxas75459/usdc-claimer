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
    "mWyiwiGvA4uensSMWbiFEHnL7se2LNoQypgncGsZ5Y4yCVerSB93YJtxRSqSkSu3NyFobEC4bFJzifPi5WmAhSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K9xJ7yontzva5G8BJsqpyEVns9F4EY34DcpmGgDKaWd36RY15bXZ4dyn6yh8r8VHXF8yAbmohxEx1whcPfTGjen",
  "key1": "3j5j4fxVL3gs9CfXxVipFke6aAwC4zy9ApidxBq6tDmPwsLQozQAugr1LUAm8vwh5Dvb5yHV3N4ro8r4r2qLUtuh",
  "key2": "28RAS2pmYn8N6jz2VJXLzCHhShreUdto7bH6KRyiHPNSeZzDTciDAT7RS9ycSoeqahibcD43kTASa1XnfBAkCi1u",
  "key3": "3tw7YEMgYwSKEMR6MC293Q2GSuRko9m8ELN7w7ByogDcefHMpwagCQRz4PMgr3Mj4iGaGR8T7fCVLYPS7kDXihS7",
  "key4": "2VVYhCcC9N8nDBYsqRE7gon7w6rEGMBV2hqk4qCRdfpwhJzc7EUJqNBgYbvcGJTUuxL5uMu7Wvg2BsC6McRxtgcN",
  "key5": "3UoDJnGNm6h3U1kr3wSexCPRNmbYUTi8B2GppCWhwKbVpTiHvjLERAV3q5ajyZzvUFYCL6zxqD88v2uKoHBTCVsg",
  "key6": "29mE2oBzFgtB4AkFgVuE57eBdHisYR9evP1r3wHAQrQ9eKK7P6VpU47gJn9LinXRxfitej55LWU8oEfayPTPLqcZ",
  "key7": "5euBRDnu18SSMbgGtK1YFCiJE9e8ndtGbUvtcipu1xsgycnhmLcgYZtRt8JfaThDjLWjmWjuBJXZtHVPnhaGeoNx",
  "key8": "2FJqT8kTkPuvQiJks1kBaFtpnM9zYAxWAfGdsbZS3GGLQ57KDFP2dQQs2NxWUzmcS2gMYzgTeLwfLiqsCe8uj5jc",
  "key9": "55h4GZ6ZzvToJzsjAGJar4SQ4RSFtbXM7vKneD5qeawJazs8dJGZK8DAXLhLaaZ4buvYyBTMGvoRJVn8qvPLmJuA",
  "key10": "517GCwyMtN59yfeLXmHDSY9NEndqvaKboKCkN7Tn7gb7a6aQ4XsEzLKqi2sTg2qiM762ikEyQ3drRVvBsuCjCD6Q",
  "key11": "5j6chnz95pAHfDyUZJ7rDKuargANMgwikRUehxfYHdamTvHy7AeHxDcs3XGm8brxxNQn9q2khcUZEq2v6RXqigZN",
  "key12": "56ieBZPuGVCo1Zf57BGDYbtuAiv5gaN1VECaDH7oENXiEb3ha2uN3PorCGBbYm3ByydGtDB3QXosxhw8SDpWNWLe",
  "key13": "BL14ekzS4kWkjZFM2iFaogLUrJS5o338YUE6D6afKye8ziQxKU2BPhT2XgBLfpXptyJ2SnpbnfpqmShf3FB1gwv",
  "key14": "5KK5rCgy6Hu8JQ7DimEyVwCszCboxp2YiwhXoV544JEAGvbuagGSEEcJRqsbERFGvdS25CJHfU3SGZyBMNZASGpD",
  "key15": "33vk8J97kWVtEd5qszPRbbDCaBzApvERLAELKCzCvZrQwhRQHQaYJ8xnt4K1MdKojmCRegeHJTWxMfmyU8CqCvWR",
  "key16": "cUxfySV2FxGt2R5RJo7RtSVWAQR9kkEAXSu7mm5Z9DxQQ6D8qZwrSehMpDAYVYW4s54Wx4rgQxRxvwG6iCr7kdF",
  "key17": "44VdYSyRZ8B3f1MXAiU8pfNtLt6EsB3RZo7ipX3fCy9DVweGkfBSPdHx6WGD4RFw2gVdUJ93EYkRsNSaroyzdtKH",
  "key18": "3a6tFCpEZodoxSi54J8t6Dom2dpTtT6pa4wz8EECvxS4tbPb8ixqF76mLG3Xk1xNYvyAeEfuApQm89P4E9TLBJiK",
  "key19": "4EcKsK4ZaSy9C7MEsWBMmp8as8KhxejdzPC6F8wpYzzcLEWhcXgU3AtqTSs2vCsqfhA6S381x11MnJzHuRqcQih8",
  "key20": "5m1uQn8pHusMbbGAti7EwwXqH7eofpqzMhmguVGU2Xpoh473GMa8UJJbdBT6so5bdiSm2MjoyNNoCCovL2cqHyse",
  "key21": "2cYKbozbYYHbRHfhbLzCecjoN88ZLjFoHshFVBGMJNF8Nj7972T6YYQQoThdkuspeqgUgQ19q5rg9RdjQ8t8ku3g",
  "key22": "3rbtLKYS9KXAQg3JY3h2rvz4mZzySJECSFK9uWUKVKiTsPL44xMD6bXkyrHuAcKVjvt5dZV9TaCNnuxzYG288ded",
  "key23": "37DPKEvoV4W39nN6ewjQoC8BeSBfK4yeM2iMCAD2bdEWJvozzBwmd9bG56CmHHdLaDxxmggGmxk7TwVhHByBfMRT",
  "key24": "38PTz9kszYGENf1e8HsDFmx6B2f2D9QoM8ZcECGzzcpr5M4xCffyMq5KpDakPeka12Lb5RYqsBN7eLgBEfvVRn3T",
  "key25": "4Xa4S26pyGP9Fp2ekTzCDH9z2yzWEhHHSzGgRvbSZxNzesZNLB8PA8orJzEZEDZy6yiEUerrjwL1KNYJa711nZiX"
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
