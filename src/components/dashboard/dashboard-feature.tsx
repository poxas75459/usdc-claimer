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
    "5v2MAPfdi7oB1skcpeL184AwCFcopux34Dv68WQbUkxuQFWYhcbNForMoSy7GnRVHyFPaKsPknGcVNcv25QYskx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEodPknBtao4Nn4b1YrChnzMN9YQwyCPfZJbARGqLxGWKz3xaEXsydvuzzTGXb2NvjnJQy6qSPZrYc7mZU16C58",
  "key1": "2NHygkrQA7QgXeLmL5x7xjdAU7NngiUn4gF66kAobXT5pfyoxzayvDzmZS7JBbPHhf1BxYZFJpMP9zPzqsbiExhR",
  "key2": "H4apyH2XfvzLMmvHZnbuH5NJQQMCCZ3SSUSohfpqsVjrYiHDix7KU9nEFUw8ZAciEm1MSAkUx3dStvjGAX15wxU",
  "key3": "2Trxdc5ZLFfMJ4Wc25sjpR5yqd9GhsYNchvs3Hg2hqMEhhZCYKaJWM2HsaZTrqgQFgFgg4PnrYhAD3TmjSZJEtRX",
  "key4": "2Etx8uCiyznTss72Ly3FRw3dRhEnf7AS6XSkLp5nXKTcKUAAPPpguCSnybwupDKCCw41c3nwABbWUytWgqhArHR7",
  "key5": "xNoem2nC7Ki8KioMxxBZZtpPxxeAsbg8XJ5m1oHHz8a2rdpU4WGJ2JPGAJPk1jiYaKg79UiXwuDPdfs6kfbLsex",
  "key6": "2HsYEaxXntAQmqwKTe4QT7uz2yFb3L6oKxfYpBhcvE9HsZyGbHA2PnpVgM3ReH8MkEcfnQjMprQEJrAHCf2T43f4",
  "key7": "2rm3jGghGBpX3a2b2hSWMUEsx8wbi1NAEMzzBDjihCFVsFXVe6uiRMpc4xwg9Swq2kAMiHzZsZ2qLB252DUFzUaC",
  "key8": "3KjXmKCCYfBmApecDigYEorsRR4rgBjn4dxmmE8MjYdfXbcoUxwEro78RnQAzhnhYWt1QDCQDq5eDx4CvTgMeM2T",
  "key9": "qYnHxLtdkNUtRnEuN1fzrMtsGgnhfw5uWA8gLWV7KfC479XGD648bJaLexjGeyvpRpYqYeYox7ivXAKkL2YkTJt",
  "key10": "2DdmVPX8mfAPTVa5DaL6gjLbnCaLbRtLcmGhP5eJVsqrWyCaMDXgZB4qt7kXPMxWRc2Van5LztYEuPG95cNjh2L",
  "key11": "5RoJN19AZLj693Vv96jtCLVMkAApsHa8onFeFsBRYj7BMs1U7BAjapQnaYM3J8B7eBSDzmmHgjuBYQPQkdL7cKpv",
  "key12": "3a4w3Mfae2TLJTL6xxHSsyys7LSMzJHUX44cEyTUb7o77frQPCiQvuGBzqZYiBawp2ivXxKU85i5uvoJp8vL1Zne",
  "key13": "2Lm9zy9U6fUifKmBknpGNnRrtWDCd7N5CMUNpx9fS778J93kQaEAzA4XKestrv9y5J13r1GtBVms3YGvyo1yt3et",
  "key14": "28nNawmzMGgHzWFFecHxbpT5br9fsyRkTy3EcY2JUuAC3dCva46Ra8xCa4LTug3rKezsgmQRPsTVrmPKf4eC154q",
  "key15": "iz9Sn8LLri3PcQ9QHZQAwizzzTXH1NcUULdSdtcSxs4egVmXQuc9E7RdmPgsrHz9Dw2gJx4AvGuAyGWbhuahZXW",
  "key16": "3cWFFiZHqkKDFK9Wa6yA8UyVmPd48p79NfEmAN1S3TuXqrUYriBxkT7QtQobsoF2KSAQEdm6mmhTjT3EVXTFSEzk",
  "key17": "3erxzkjhQ3RDnh2T4nYZrR9q1YRvwzgjDZGh5cTsH7D4MLXbZQCgDw3dS4s6kUKMiXPvWNKcUchaRAmuSQxha4ft",
  "key18": "4PAg8BwkEJAYBwFsBWTbzLLZ9qeatEe8jWgt8RdqqkqcoEW8zX8N8CvxXX1ZNTEor6YQSfA6SibrWUHgwzdNUj5F",
  "key19": "2s7YAfFkdixYWssouD6AnBB5c1cV4fa5XKqaYpB3zyy7jE8B61nPPyWgtMSKVDGbDBX67FA2uiiRDzFEBhYL29Ct",
  "key20": "2462s5uWsxxHCcQgy6w7dYfvdTcwkX7k4JQeupo6GGQVy9bwY9g6ueFT7jCmtQxDSbNYumwbT6BKFkachdNj3nqM",
  "key21": "2ChB3Atns8AmkxTzqV35KucabQ37JVaYoJ7w91QbiURiPfjHexD91GqWyVqb975FWkpxRjT7y51e4JaYvCUoEnme",
  "key22": "5a1aHhmBY5tB6NamKd8WRRQ89GWYQUciiBSKcbfAW1WaYmtY5hPC3hwDAd8qs6nzRTh4vTELP1MXYSQCcGyoQ1We",
  "key23": "2HKVmQ9yQcmwkdNCZMJGtqhjqC9sJWnQr9VWfasKoE4ydD2ABSZquqjqJTZiqhcVq68EM4NWonwXjZxqtT2km55S",
  "key24": "HAK3nbJLDpMdKzSqwWgajM4gwwsfGENsTxJoCrwAax1hCR1ew7KVXf4MLsB4yrXfbHuw88nDc4CErpYz5K1YhQH",
  "key25": "g2saRAmHZKChSwaCa9Qw8GShSB1xStbvCiFqyxh3UtmPWiVN1keXLvV3u1VXBTcFAUTFEMgEm77zfNXeTaTzm3o",
  "key26": "3mpbn3YVFyjBqpJepqxjRLbX785NuN8zY4PCdFvWco3Sp8c5wqaXs1idmypiUB4PuwbA5XAgwFaxp3cXMDdcLGTQ"
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
