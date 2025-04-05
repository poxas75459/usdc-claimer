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
    "4qPzS7LVp1WbAgNTXhfA8wiebJecTJpQi8nqtsJD7V9PxPYCsVPkTJN64vpVZRjbaTPaKje4VAcNWFB1ageDJEnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFr6AsUeHE58c4oDvh8tf2vZUk7hqBXZL2BZNWYjwKXcsAQa4UwtfJyCqED7MkLKCkxkCdv5dtDzKn3TTXGYfFB",
  "key1": "3NLwLfH7cid5wupnV6xo5Xhi5kdRavdr2S52BAZAVKqsmuLi5YbVx6taTL57kKbomm2NpKVMWQu3nS3KM8oVu7Wy",
  "key2": "eKPvhYke1K4pmBiEFrw8Axj62nJGnXiVHzUn27pXgwzgCtqQAFxMY1jcK3UP5LqLwAtmm8c1V9r9wvsdmgDp2uM",
  "key3": "4URsFmKuMA6haPyegTN1CsHFDTEhnVr2yiYKMdBZYgHxyp7dR2tfrue2mW4QM6DFMeWS4g8865PrJfbjQqcALcWc",
  "key4": "5uecnC3e2rMT6nJrHJvyU7To6gayA6k838mDeZH1GSxqKmQHG18MEhexdL3oBg4zAmwcE6XQ3UST3TD4EmBcYggK",
  "key5": "XKrRTtjfZqBMbz5wh26yj4mu94XoP4a3KLUJ4RR64CuJa8nUbTsD4PsHXV8PpbL7GjekzwZgy4fMaPjQpiCVqvp",
  "key6": "2ZvTLvQfbchvwycUWrfNaNq5qPmHHTfMsrx42CSYbMLyz2o5ncupr2anek51DZRBVobURn6ZskSHPqqVvQYr7JdZ",
  "key7": "4YmJagJwM8tpdewJvVkYXAdM4rEmhNMZFSikM7aMy3twx1QVM2AQ28BhBAejpF5zMTvP8iAKwaekQAPL4tnoKXmX",
  "key8": "9PDjM1rzwBLfL19adch9S21PKkkRGZqVzvd9Ztg7tkqBygjNBF2QhZJMqaYJrYwDV1sMeUJtEKdXh6K2LVP4QvM",
  "key9": "SzwqKt87JMjfbQL6oGugSyvZPFpcmbB9or5rNhy8rqNMNMuWACPYKChTRDoQMpupNCB7JhMUuXyDL1b2ijtYdfg",
  "key10": "2zjd8oXoNE5D647Z2VqmHio746CB2D9q5exgP2udbn1CQr1jySYPbSXJit3sFJKedNTdd81wj4BkYApuPPKgqGTB",
  "key11": "64PoKbvnGpyx1Uw2CB3iNijn7FwtrFw7A5hSuNBY9TQtuLgD2usgQTVuYB9SGUoJP5jXF64DuqLsmZGjNdSBKPHk",
  "key12": "2JQugngLZFznqYLMR1FmVS2s3G94kiMghG7U2snCoGkwHidJp7Bd6qksnRou4vwd6ZY7N44w9skwmn2Qdw2YTEY7",
  "key13": "5womrB3Sxw1wofXS53RwmJupS2gViMJRQ5cSXNaVbH9ek87ryrFgRdRr1cUNX1WDUmvd2K8auWYMcrD8E12ZgdaD",
  "key14": "4Y3P6WeBV9EPf4ANQQAioVipjzN5aEN5Qcbez1SZSUB96Q5ZRJk5sCAW7p1tXkKDQDsSRyFvaw5Rni5VELzDLH9o",
  "key15": "2A6ZkCfQnP3dDcrJhpVMXrDNoYMDGdo2abH12Ke1dWkwKcJZwbS875f8bxJVw5NFyCumdj9jLnVGjmB6kEFA8BXr",
  "key16": "67Z5eLDZGeE4Sqk5SbyCWYXzvHDg6xJy31sKiKC7dNVhtSB4JDenkorb5zzspjXwCFhRVFSCer2J2xsrb5fpvkjn",
  "key17": "5DEYU3ZHV9St6yNbzYvcxcXcpUeDbH77bkLqZmTMkpup52rMQm6N3G4FoGAPJ8ZDmRR48k29bTSUqD1MRTmdHxGc",
  "key18": "3DipgNFrzFvSb9cVPnpPG8yD39YE2gKbbGPndJ8VEDpeFVjmm4J6oupJ9K7699sCf5JNKkQx6wq1uA3rqLLGgFwh",
  "key19": "3p3go3bSJ4zRWACpp5emT8rJe5Yq4eWuWLbTy6RB4ca1aRs9D4mBrDtN9cvDvUeGJyAJHxwCemJXbiLP97ZS6njH",
  "key20": "22n3cSYPNk3FCajYrmVkNEknWs72bm4Td3XnkEP5oJM9ynTzSekUZdm1DdEPno9BT3vxK2Ymzwt829Lx9BnF2s3P",
  "key21": "AePnWaPvi6XiCe4mPByjrn85TXbomhHm5D6Zf7Rf12kAK4jLSo7zF5hegTR3DahbbiYSvycsf9zez4LhPvSpvM3",
  "key22": "4pC6Lz2qJLgoavuXDSG4PRepyYeZeooLLzLX8iCrcrQ9CMEJfrqRiNGvrudM66gUJYipgWrPqmd4sXbTvqQPfkrd",
  "key23": "5FCbucTGL9RVvWietvRiB2BpoX4WZKG12PN5uq2TjtT5vSXsfkaVTEDLoERyfzRiGcsrPD6cYH7iGWvt2Wx96LV3",
  "key24": "P1dxARLA4GX9M7YQJR5RcXkLyDwFBNGmp2fHpM6VSWgjpvZj1YJ11wysAYzSveQ2pKrXFa65L2jjevvmxY43FRH",
  "key25": "hgEKVooy4fDeDKyobMBGx43WiERqxkx3kvds28g3VuWUDoWdWXR5KDaipRetgH4xxEuP4HbBcrfiaNo3rgmebBz",
  "key26": "SoDb6hUyB8TSCqKiLauqVfRsEb6ABZg8MWpSbbwY27e5DnMV8Cftq93xSdfeqJFyf4RSKy73L3mFMdZTL2iKAid",
  "key27": "2fKbtajDGPKtjex1KprGGuYXPcAx8PH7P7oA3hGeWPwjS22ZycYhUX3dsUwUzugEo2DdgSN33FVSYyFw1sqWUQc5"
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
