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
    "ABwULamnN2RmVuPKZ2tGBxCRzFGQVb77U1TvtUTmWKmZpZi9QzURpLG8MHGYdvGcws6sigorwmrCuhaYuKikiNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Py3EWo2tQD869tpFvrYUDjmoazAqSa1Adrn6eoqefy84yPDdZSDMLFg2f3H33G6UBVJhiZ8A3Tx8a7pcktwrwXQ",
  "key1": "585aVFScAhmpdB4YmLEBrw8Nz8Nm4hc8hpPCUGx6xv2nmDCxSiGmm5egptVcwMvCJ98NbPirqFGZ6gTPfAB6fTuo",
  "key2": "4LwLYavbMeA4B7syYw7Avn2uafuESzUAzBGcdvrW8nd7yeFubbKaQpksWbjH7L4Dm5NdwhLr1zfqFJZEoAJNHHdE",
  "key3": "28NDGdpxf9qE4fzGpccMyvWnr6a5xYZ93y4W8qw4n37bJyjhMdzkD2TjgLNdhMdMt2DCf2n2iGsSifyvcEV6xXiJ",
  "key4": "va22RVwJDyVr1zgknFRTAP3sFMbrfE6VCgVqsVaQDsdTcbks2mRabsNYr1ayRH5VT31yMG1mtG3xpKoZi8kp2aS",
  "key5": "5UW9TkxTs9X78PgF7Rben5xZmaNtU9tRqg2dKeB3V9dviEXyGaivGKxBu7T8P3iaxec4qz5FH5stzzHif9kJVo9U",
  "key6": "5WvAWsv4r3t9kVSbjPsd31xmWcAwVUV5mWLzjmtRj5TcxCSU9uUJnimRQQVPcjQV8eUQZXknB9q69mh3SbPa6VWo",
  "key7": "HrRJiMyMqiebeWVEQqo1fVBNbZSBWZzPmaPUmbvnPUd9nEKdMnU1CTML6NZttnjeaoNoeHfzUnes3PLLiTwR5op",
  "key8": "894qdSLK5Qi9YCVjkmzppHpZ3dg1WNDxASPxXv7kgga4d2vmo9SnGnzxjwhS65s7iYp2Bgcg6ML9YjxczQYTUDa",
  "key9": "QVB5BTAH62ao5kcUPi2vrLyN5pu645cN3HWVfZdweeXtaZSk896Dbu88LWL5a1A92dDGiXnGCZp5Gkm6fxdh3kw",
  "key10": "5wo4Qj598xP38iuxbwLbjE1cmooeAKeow1j1i8U2GGbsttQkdWyfCK5tym2SeqDkH3yvMqnbAo5n4sHVbDQbkeJp",
  "key11": "2jDDgSBx5KzQLgMuBJZhmEpxgxJwLArzPhzeGwkuQ9yGNbCgsMn73F3npvGUnW4YVJ71Mdhh6GnnK3VSjxuMSZgv",
  "key12": "2UsiXtiu8iYLTrKvf93WK7jMAbd9ZhtTRb6QjcNLN4p85QSoQcmhrUFpyvVb9MMYZiNBibo3n3gYhFn74gtLUBuY",
  "key13": "2GGZBNTDT3uA4sicNfMjYa7xPAuDHrr7sPmqLU85zB9fFpbvBibLUMhrDXHh5e1yzCPn2CYT3bDBCMBgeYyH4dJC",
  "key14": "4RiNmx7Nr4cEhpPpwVU25YZkHqyxYyixpAJJ2PtSp1LR9x1c5qGCkryHVXkSSycQcjsYhvShj3Z6Cp7W8fKkUy2B",
  "key15": "5AYYrh56RTaWdFWoeHLZLgen29C4stKUVcPY1LuUkyV2AcyDjfjVL5QKXt2MkxeLHcorFuRSuRzX7LmjED4KCAJz",
  "key16": "5iPM7JHHWv9FA7oa1rQT9cU3uRKqL2FFdekWS3U2zpqYeXDKPa2ovs4HSUqHxmNw9nSRutYjc5Bd5XJU1PdBYaNr",
  "key17": "4sTt6ZDVX4bCuTynCbvKEz1m3kUte5abPzpaAF72p38YMoVSZrHWgScoMhTzrUCmzGW3rPuf7gVfJq9rynrx8ub9",
  "key18": "5q5N4kLfLtBgs2uJhz7dtthkerrazjwHGY1Ga2WxtbzRjkPCkcBtDJL98DBgRsVDxUy6KEsir6dbK6b5Fc3dJ3qS",
  "key19": "4chcpFMSEAv4pGccti6HXkBKSe374AcBcxQKyS4WS4NtviMXgtZr5hn8RzuDd1D95mHffcD12A1pmv3KNj8ezq2i",
  "key20": "3HcFkVe2QPUS12YnqS1mHzzzT5GfUvot355yTuCCN8LS43zzhPSSBm7qn3wUWx6sZfbRoauwgRJ4SCefB6tuDCfq",
  "key21": "2uSfKCN2HZtVXVePRNtXWkcCypmFbTnEZuodw526AAdpy1LDmGHxbALtmsDQpxoLzjdk86ck4CiY1LN26cKEpmeV",
  "key22": "3GsEdmeQ3eyTkz85erBgJAGWoFkfjcmKRdiZhdgFgiHWyzNSrREkw1xwmTy3smM6ruQHMV3HsPUafr5PW8HCrmJf",
  "key23": "5bJRhT4d6Azrq5koGN2edmRL8qeDfWP5VFphpxS5Pv6p7aKQRG2L3eZ1vgD5evhHC9XVgVBbti8nhiD7JmCf6LmG",
  "key24": "M1FJ4q1jSiLNGSTuoEj3DPVLQ5gtTh5aWhJ4qRMDjo1Zb4wG2ioMrb7oXZu7sd7EF4nR9LH9r9C1ggnDL2zF51T",
  "key25": "4p7GJCVK152pAEW6yPJQ1btGLiXooniR24JvXRNk8B1e1DLZ5TqKFYWEUwC376t3RXvFVfCuZLQW51nhzFb4uy6h",
  "key26": "5jx8bkByC8quKAPknTd5T1aDb3f1FSR8mYdxDAa4o9mGMKDLz8Mm1dsq1h8GK4qM2tTXCmWfiJJh6mmbNuximmpy",
  "key27": "2cPUMZvboWWnd8fqkZLRFPomaNoJu6NejGzkAuJLuGzpCenAhovCzzFKKkeQfMifJNBDX1cvmMTtPxueoDUw5uf5"
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
