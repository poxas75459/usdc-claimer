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
    "3rqZpog4E388ZzkwNjquSRhzYJqeQgJFDauAL5aEnADXyFgzyW7eTm2XRQMDzcybDGxu9c5UXv1WwRwKeUaDbZK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PWjGyP1qJWEK6Lx1QK8HdxAykY1F9AAc3Wd2Sovu8ZTdvmoFv8SJqms8iAGMyP23TVLfZ2omCUR8g9K8UdaEZkq",
  "key1": "5MpbMRWGH5GEizrxHKajq4WYFjXD43XWH3QJVvQGB5tq3CcziPPUSsEVuDA8hNDYt69fKbb1ZPgyNcPCcaT1xTiW",
  "key2": "5KaDSDaTc7YyQV2osvQbSdTSs7cThphWr7S36cjifEPJB6UYie9RdbPhscsJvQo2W3xWnVnnNDx2eXg6fm1m6pg",
  "key3": "4rLFUqDkG3stzTXSQWJt9QUCEBBYjxbzSHUDzkSJ1FMCRFGA1CjuB62m669w8ohnsk1Cuo22eCsKuRE9eYWxZpQS",
  "key4": "2QKucs7sYDJg2d7N7GEoXAtLsvKhqPN4pGFuBKgKoDq89KDYKN1ipNyxmUALMgbXSF4dwuhPqiW5vq8qmdxusmBe",
  "key5": "2TSyDYokjEzpBghYF7TzYVrrSJCkhqREu45oK872RTtRww1P29UYYezQE9n2GSqwynKM4x9byG4QQs9MzDdR5jWS",
  "key6": "RfzAo42nV6sBLdkbmcUbNHYKAvBtTTNCHsPV9sCVtEt4mL5rFNw62tQkABzmbKV8LowUhv4YQ8YCcniPRfDNX6z",
  "key7": "9Bh1uTLbKK9G5P83jwyZb8RFSA74TQmaWgEvmvQ3SBrjnYqfvjU4LbYmkZFs7tps1MqaQCC6oHs6zdeJzPDzRjy",
  "key8": "5igsS837MagTpMqVbudQNjPXmi5VEG1rFJ2YE3md6RvsZHKhPvDooqZY9yqCb5rm164FKirLt8fKvWPYXcRv6dFg",
  "key9": "5XsFYPzN1NcBytQicbCAZwLMw9Ag93ZABW4XvEfkQ5C6XoSSasVZ1rba6YTaGtfihT3SUbFtVFXMBscpoiNvi9TX",
  "key10": "4aQ7CcZ5PrCwGast1cAwfJc2mrpeY6AAH1WoxFCaYNHWV8bcBmfzqKJbxGiGjgDswDccDue4D6AWduUy7PJRW4qk",
  "key11": "2fHo6f4SqfEA8iv8GxqJhNuxioWgZnjHwii6ShHLxErcpkFgHeDXgJGDyFQTKNNounySbbukVg4yHPETwP6geyPH",
  "key12": "5gi4hBEX3FGuAtJhsvBdAfpyqMCTSZiiz5smwJzQC5bbZKksnZkhUgjZXqCfzhQV4QdaU5tS2FvK1xyLEg1CG81q",
  "key13": "3LEbaKEkw8U44f9bhSQiG6GScXELdhXK3Kp2nKvw35Uq6b4v3DBHR7FmvPP4GPxe36juWzYs5qDGBirXfEfNikNc",
  "key14": "2ziZHqe8kT8wF5D3XPQLL6jeUNCm3DU5mMo9dKoCuZbrH5nujTRFTFDyrrSaZmrRefFyEn4A9qebCd6YEmQbJyCf",
  "key15": "4fYW6goUgiV15KWmGSZ4kMK2JCcyE1Aox8F3rHLF5thZQ7D9RRxNuTpYjqd5oEdfvJfjAGGHVUaaukcmGNNFSrZS",
  "key16": "2g6YgTPmZJDf7fb9zRnNFMVeir8vgYNaCuTW5Qjo4iBReYCMifQ4QAv5VZ5CfNP9rvNd8YwDyK584YzwCHRRzekR",
  "key17": "38JeCVhyCfKyHXqtoeKNYH3RS95A8wVuZhcxggsXu6C9DxtnTFMNKRDycvz561oj9B8jF2SaQB1m26Gsg4bjTs8c",
  "key18": "4rnrTyyWnnVCbZBnhLE1q5j2g7kzZVTbQbiPdH7v3FZKvdLpmQwRp8r71i1BFeB4aczsdaXJwRqw7aDCrMTTVtFA",
  "key19": "3rb4rEizG5JduDaekzuuvGePJmuJZt3wYUGKAUrticpxQZc4eXZGDsY51Vs5RuAKQbUzTYgXoG5RgbrGF2bsiQ2F",
  "key20": "2R8KYwahuEtqJicLAMCUJWmMzPUV8ZtvvjUyUKeQ2sDUzGonNjrQtP1Ewedj3zcVK5CPrZ5YFFZbZAnUAnSLHGQx",
  "key21": "5ny5GqKiU3449jurAhob7CDef8jgDtjF58D1a2omj9rZGjid1hnQYRsrT6x64rMoQKAupPTp9PgrzDTd7JcciDFi",
  "key22": "2w65G6GBP9kyYBoJMMfZFgLkXX7k2RA6cmtzJv17GiK29NFkDzNCYD4XQKT1XogrQBDTkBHb6xMYD4pNzEnxpeWG",
  "key23": "5upDfTzff24hXkER8caQABDeQvvCRKspCEToB1vYdNKQWspjYLGqBFcvccqK5oZUX1UmfZKpesGhDuHrvaSh2dYc",
  "key24": "4qkHhcSMnKtWqkRXxiFnUV6XZbTLHuDbhdCZG5ggAkUBihtoStGLSdLWpXdHUoN5zWgovV2MLpY2Qz8y6y7sqwyF",
  "key25": "3k1ZZHAxFQ7WYEYD6AyPkkMjbhmoqYRSBRjMz4Cq6gtJ4RVbRBQqbcig9s4GJSY85TLiywVXn1mLpdUQ3T1ANKB1",
  "key26": "3X9foQg4XN7JH2dSn6H2naU8cGgRV3mNepQcEjKvWVCtE8S5MQKgMeRQPNpyWeYADjuvBEXB9pauoAGgaAHxtaaS",
  "key27": "WSTxVMbFsCd3PwvSniBvMe3Pn3BScn911dKcP1o7ujadLTG9zPYg33p3f7YBtar8tVXWXWpw3Cxn9pq34kFEPsT",
  "key28": "tjj1n76cBupkSnSxQeK9hiEw4vrtbQBhLH8186aPTomGYXK5cdjGkPfPz6jHZ55tKehV6D1iPpPYYpapho8xcaV",
  "key29": "4TYqpLRXjUqNj3jbs4TTNZERvs7UhBFZYLvjQomxUTqq59GgJnAWNenjkDKJfA5LM1TQL3qdMrza6S2y3GZ9cbra",
  "key30": "4B7bzEGfy5WPtZCeFiSniErWH3LYuGs7ABjyqhfNiDtopGTDf1whHmJk3szXGQ2whZCxUFRSiG3UYDQELA9w2pVo",
  "key31": "3yCGnoRg4mY8Cq5kSsMKZk84UwdN44Cg9TKUwCzxA2JtpWy6DfByVxTo4bVJtaE9cZDaaJeJruGWFTvv5x3e9NVK"
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
