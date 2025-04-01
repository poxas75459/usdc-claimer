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
    "5zddygPg58BiNgvDdQbA9mmN3q43xfns74n3LLxJSG9YjXA7dcjZi4vnbcDCH4tBbu5Rdb8FrCVM1uAsrvyRh6ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRRiH4Con6wPLrcso75WSTa39V8vnbdAhDkhorMDEj2KXojRFFZvK5mk9538PSifWoAAzGPW3vVaQFwN95XRvzd",
  "key1": "5EbGVW8ydAqEHV3Y93oBTkgHK7KPwn5EtNJKaQ1YwUnDYqBAzL8jmBJtRDdqrAKAZJuB9vQWCqBEzoJaMJWuAFQa",
  "key2": "xiDk7FojqsU7jhbNGzsd696PjDGyqXMWyybhKfTXB43nrPhY2HJj5a1tx4aGFJboQS18d7NDZyvDdCtitrVeKzj",
  "key3": "5Y8crQK7CC9mcD1py83mNaHRyquERJrQz3skouZDXc1bmfBat9BgwJVPDyhJ1CPehyfLYHXRR3Fm1TB93XDnm3F1",
  "key4": "4VtDVAt4E2ggRFFM6wYcFfZt7hBYz3ad2xwHqvRHPyYMqccxbZAopvzKbMrk1nj3zfpLZ32ad7XF2yvUy1giP4c2",
  "key5": "2YHseZvUGTwLQFi2bRtPMWDM97nLwVnka8rEkE1Fa4TCZ4mkFphgd8AvT9FbJShF56hifHmvmjfSJqf3cNLd8Z4m",
  "key6": "2nmT4TjVx9e4hckKQ8jnHr6BakqSFWz2kbzeTXQjhc9JJheV4BDhVbTxstf2FxGvotuVsLZ8sVS6RxhYy1aQZh3L",
  "key7": "3toN5CCDFnLqB5KCFhGHWznfGzjLZyz5K5VtudtMqZ4ZLffyjUWi3F5YxbNHB8TEAKg98Msr6DfzvpL94QU3qLQZ",
  "key8": "hAu1i8kjJpatoFaQpN57Ay9R8aAevnsqPdegdRNfy8NaPGSSLKNi4LyyPvokoEs3GC9dycxfk5mPWFBsb1S554s",
  "key9": "5npknYUFmFSNJF1smLwL4GHspk8nYsArdwMQeDT35rYWJ7Wmkvd2S4ke3HWva2gmBVqFskj6Mj1WvmTHSX7GBsvr",
  "key10": "5Zi5ocX4mJ8ypj4vtG9zFrmLZ7MHUfg39FhHhMTZXjQmvrRKKdi4Lin3HCJwWtDcLTxwrYiv1tog5NejpD9KYAd9",
  "key11": "4ajHax5DfZ34tEkqEMaidWrTrDuzc4GpbgGt6fwXobu2b1yyLhSsYmA87fETydJmvETNLMQaY1XUEXgCA4eQC861",
  "key12": "4TfHBLVgvvxkcp6hfvje8hu4L9RFyWzUzqQmbm4Rgqc5TcR7qQGr1mocEYfa5igTJYXaHp61GCcbg3iH7TbqF4NT",
  "key13": "5DF2fMC7YjYrKFe27PW6xbh3ed93dA9QQB3KLL4W7KNNseCFpSTxeF6xg73rrV8it64ZYxVrGtKEcUvmhdViTg2R",
  "key14": "611Ru93otYbbWWbjAGjronfWmFYBqHAsqkVT8PjP4DTGrgS3uvMDSGKD6SzpkCeJmEpXeEiioChvX5Qudisdqhcg",
  "key15": "ur3z9sq8j4KNg66Mc6iGVjJXfGBuGeA3KPv1C7VZ9ssqoHXJJAq9mEkvoqEepkwLxp4UQ6ihd2eNhZffH8u2Hcx",
  "key16": "oWeVA7XQ3rzaiGWU2x4YfxShE36C2BQRJRptahCApoEnxcckKW7VxZgjj5GiZkteQF61R7HKyJabXFf4C6RvKUw",
  "key17": "rB1XaRsVEi5nvmp93KEonowf3Qzuj7dKGu53xgTCpwUTwz2vrADL9ktzGrdjLgpz2PaGivqGdxHmkcsSBRVdsot",
  "key18": "oNaA4yT6h3wUZ6yStMFBvd2aMn97ztojsMNvJe5HhzdrESMmLoHxCDFzquw5MRGgGm6kxf1DuHBuDHk64vn23ab",
  "key19": "2jpxXQ6sWesGybEp2iifCBiqNFUEebKwxbEC2dEHsNDrpau99iCy3YdUFN7S584q7hTUuaicCHSvfytSddkajBtr",
  "key20": "4THrTa5jXBFSn6JzmJpZc3wamssWJ8WEXfYEeYe38nVHXRTkX7rT6y1FvGg7zWMH5xYVMGcZhdiaN8qgLLbCRotD",
  "key21": "5mAUTtTKjNcGVoxPKdGr74DE5msbANSmdvaRWaQwcLtiaowxjTFLcNRTNpetM2j9eKfbgipsEo3GLNj2CuZKU6Zv",
  "key22": "3Tptj9LhrsLVLzGfA47hs1Dnvt92KouNJSE6g9q48MFYWMRsQNDEnCydM43hzhq5Sk8mWbyyTDTcXyKq6fRuRKAp",
  "key23": "62aNEomteXrqLZAaTPSTMcTpX9HZDDyoqEtm6w8hFuwtp9GSFR8XbVHZhWV5XSzvB17z9nLvHBeyT5dB7wVsfzRC",
  "key24": "23ek9S9HYiJ2vFckHR8EoysefosfhVyhUhXS5qPD1BQmcygRg2hMsGVUCD6UHieyrkxg7tcxfT8Ee3jmQJKUC2za",
  "key25": "3ay8diFhEcthCPsxswLr9aTpLaAjj8LG7oZmnbLHpfydaEinhoQMPhajCr9owV3CD8msxGEJNCJ7a6d69WFrR8Qw",
  "key26": "wKKCQN74ZZ59RocGRVjnv3PSWSuMBc5RdwGhveCZ18nB2nfckkuZsUib13NxS8oj9qPTiPRVLXLRt416d8XNdbV"
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
