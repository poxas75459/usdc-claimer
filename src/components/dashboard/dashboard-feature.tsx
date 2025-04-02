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
    "aq8PDfoLQkYfY9D3Pr17vqruTEpVy4eVuxyWwvvshfABH45CPccW2seykVBZzVVZqyA5pEGp2V3QZKx58X2NiMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yC1agzXLosZixcPL5qCmDPHxGgv8Zyp5L3y5gEdEDBTvL2mLPgmBr91sG98v3L9XEz5TmSK6QZRjANRmZXojkNu",
  "key1": "5LHFbSQB8jgDsxLECa6P5sit12wmNPuPAqW3CDaftKZkSfov5u86HtpHzmSnVm4xH6ABPqyupQeFT16SQ2d73jYe",
  "key2": "5L4rNCrV81qzE73yNpXsNAaAmAA44KyphHJyRipF5g1ATfEZq2ADeWKWS1NAEdRn9nNC3WsqVuZEycUXskQmhpzz",
  "key3": "ZwbLdiNsw4briwre5bJ1M5xFjATEfS2ybnkejPdJNwFGrJEc6YGjAzFz22Yhk8z5zA45cUBxqbP1awHyMhJS6um",
  "key4": "6MmsYNzmpQwLivbXaW6QeDAg4iaeFwTcBc72ireJaG87EjCphJpCz86Kp9Sa5ok4vvDmjX8Nx7uGTuPPCzucBMN",
  "key5": "5F9Aau87Hikt5ybbBQWdP6R4yvyTds8XLvDHTaYs7e6ngLasXEiyNEVT9hw1fh1R3bq3jS3LoVitSjMuZHCuvYoE",
  "key6": "BGnvPpDnjSefzQkWhGshDP4jCLnu4fNkFLsskgJEP7XofCkGHPNMLc9rhfZcskGHjvUfPEbVt3xsX8psXq77Q1o",
  "key7": "45w4ys45PucjAhg63CaUE2KC8kCFfd3A1UsUrx6n7ZYeSteeUz738h4Eh48aMBmmeWWi8aefP46kKkoC2zyamXjo",
  "key8": "64Af77zxXYY4k6Wnzf1oFhM7qBBD1bUEAWvmoeub4SF34EnokfRphkCMKkpFWESrqFYR55tHLkCEwUGFi1K8HCYn",
  "key9": "31cTk15SN3niwiAY5ZgtMQq9GTYV7pSDF6ASjRHrxTpVkL6aYHuV4fbVCPNk2e7ZM4ga9r9oDWt45cD9PHgAmLtL",
  "key10": "3bXQAVGbJfUQJNqtfGyQLoMdzeAJLskcY1DThFzvUPpdfC8q4ArsSzd61o13YheRknmUKBwtdXukNXGMWm2Ds5nQ",
  "key11": "g7oHGrA2SSTWVeV7RRPyDrvKdvgBdgqtuZj4szCCvax9Wdd5HuWNGbwBbhtuqpYEygTCUt3qnH9jEwNwdcmQdnY",
  "key12": "28WWzZdr8ho6vwwvnbegB7RXaKM7fjqXy694bpX7QcT644H6f8MGhjhaMeikSRQodrGAo5ZLg5GrYQFMUMjE3fvq",
  "key13": "3SBV3cPUX9LWS9MdggEYxZcKLY2TK3fyegpxikDSLRNBh2zDoyHLTtsmFUr9tzgLkoz6DVGYMAbGZBsPV9b4vH9s",
  "key14": "4tuoKy171CzsT4bCF2oroXkoGWH7wTzHkFH56znao4sydJwm3HwmWyrE5uevph7B38cQikNNhMV4pVEJy7E3Uj8v",
  "key15": "4bcbgt8dNQE9ZGVKsyTkdh7emLzL9xb8j7uiA1GhTknhPQ9Xm2yiRatdSYsHMxiti8oRbXCRmfwcbmsFjV8XsAqW",
  "key16": "2QoFoxDJrMKWJEuow9S1HM12GMTH8DPgQ5tj7RahVA516aAm5eWr6xz7bhQFGDyVpGArMqDoS8bNCSitBypAbXGu",
  "key17": "5gAfouMwj61hSz5YA1TYhFi8NpHF2Wqqy4UPcNckaor8BgtqYXF4REdJ3Xnp3oBzWVjmvKeBGAPLi7e6wYh1G8ow",
  "key18": "5ZzU9EQpKFVAg2EbkJ6T6hA2fRaMLSCV8mjqtK3ZooVm39RTNXUnfYSGPyiiBm8oqQVfebBkfsDZyjZjpJY4wzHr",
  "key19": "2JcWRKcawDUqZ1YwxRJqF9kLLuhh9mQXSLphuTSQFBb3kcqAvdZXbA55gygNcbvxGs3ELtjffEoqvXCTCjfucSgb",
  "key20": "45Ko7RdJmi4a7oXxVCJ2uQekaPuvyYM8Eg3n56m862hLaACPexucpPmcq4Lzm9UKu13Ak7R4u7MqdUB8JwPk1j7S",
  "key21": "5V9G7CtAY9mCfgvRCStoEpPzmSzCXyuBKZYhzaLbtvEbxMocZRQWK1mYTtLFXgHmd9X7LquyPkMTreDEnHRGuij2",
  "key22": "WNAUbHLxNPZZM8jP5guY1LiY1K6rQkzkWCpMLyaCxY1Ft2EEAQVZpq7ZMChk2inD821pbvSonuZge6Pu4VirCUE",
  "key23": "dMrLwiShrRQoo8wW27VhF3G9mRBx8DhHbPscqSeZQcZHcx772LyLFVYfH5XfDqTQ5dUdASh7dd9Mw2BwskkpSWz",
  "key24": "41Zr2AoRYY6YZqGrVm4KQsuG9ZfYMxucU9Xqk5aVUxqgABJvP7qQeYcf6bUZt65EaCa9bTVCtRQz4HEM41kqpJE2"
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
