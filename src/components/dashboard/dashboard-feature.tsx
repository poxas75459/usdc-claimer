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
    "nWDrX2wh4afffmh784M6EkEPbbNFathWDxgdSCcbcv6HzF9XCfrRycAfgkRsvKTanLkg4CiryTAtkeqnX4Qbq4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1Qxg7diQAJUKhEA8Twq7AGFZTGUe4qYXH1w5rcNF6ojGpJwsMFjaCiZDTjaHSv4jcMVCearAx8nfaoWYLkcXSF",
  "key1": "5Pz4K4jY2pDZjswUJ5kaaBiGJMChiDEMg9dFg4jF7EkwfDMiQU2QFaNXAZRRbMqGsFBXsecdhggpvpkXY49pWDFD",
  "key2": "59KJ5ZNHC45C3CMNR3DhKKMkvPVwdRcxas9NoEFhnvUPTMmhVkgUeXRWKpnsq2HN3tipCK1E4tZKKF7S9ojGoQJw",
  "key3": "5315gqnenWJDUcZtpej59By6nifsedtkjpjeJTdis47M8cK2DdeMcN2wFm2JSq8eRBZkFmFewcARqgrhU8JkxqAF",
  "key4": "3EpjKMRQ4pLkAF4stVYbA7jYTFpTMdqEkoH95Tbh2vLuZyhsLPy3F3VnnCZjKg8jv5SXuXaAesaYu4yHSt2wNpWf",
  "key5": "29pQnaxa4zNgVW9KA3jx3U6gH5C8ZfoCCYhiZ18F1btPYz8DLZ9aa5kmdSD49sPZT78feYLD6tvCrZjqvM1RumDf",
  "key6": "2SiKngDssPPNrfGwMUgNRkSAVCxLp5U6P8tmg63wwnwuGfeRJPoSy9fX3maQrMXHqnYZYcuxA8r2cPKvLTPWS7Zi",
  "key7": "5f9evqmGVfPsDpkhGEqAtE1edpRALA4BEhyPbrbK8tUWsuNiV4PtDQdF3hf5zvCpXfvwJQoDTRLJkQ67FATu8G35",
  "key8": "B6HKcgVfdX1dwQovsiC5fc6bzfD1LmZMnZjWg8rQqwmqHMxgT6XBxDikcEWdPGLbq4nFiYimyhg3pDwnpa538Yn",
  "key9": "sGvd7jyJmWGULUomQHUJKyw8TKdLZguiGNfh2s5PPTaR8jRa45eVXgzQUQm7zc9ys3XKwFtbnr2mxip8kNYANJV",
  "key10": "5g6VXz5MMbUdypeMfHwcs58s1NAP1vT2HJZrNuk9zFMqH9J9wANLyhSkdDE3qiC1vF1xDtFomywiiBviLUv7ixYB",
  "key11": "3XV6rTdMwvnYELWR1XU7R3rsZXHi3HAkxCxHtuRRm9YMKQsyea8DsjVRShX1wL3EraNiL5A3z5fxpd3GgD2Cyfpq",
  "key12": "4LYc7FHEE9ThzMNfUptRQeHaGDP7Jci3c1TEYQApLmqg3jjyibopkDChicbCXJNaFfWLHXy9eEf3nDfvwZczvrB",
  "key13": "3jGPA6rYgn5n5DUirKsQ6iwfJPxNuZhDMTY6M8xFdzmZqEy7dZQi9h7opczWoY1G6LpDL9m43asnK51tjrUFWNMH",
  "key14": "4eCqxQvVKRa9DPTrKi2coWS83uyiD9mbiDTdezZD2YvS8Gjdkmr6uLNvSePKqDmdw3uYH9ZQDpNqMqKeCvSywFER",
  "key15": "4nRFzzU7nUPYTy4uir2n5zsKkGTS8fuYSY9fVsdSvJVQQVEQJ5oV1gLYWQmJ8VaHP1YX9g9rzpsqx4oEYkZ1h4Z4",
  "key16": "4Ay7FrwvWKE19rrpvQvry9hDPyygphnYbRhNPZYdJ5kyLHyCc7Y2ZRLqkJf5ssDEPyghBAvNkdRwsHUxw7Hznphm",
  "key17": "39iaPj7gwLcSdxpN6VMHyRA5NCj3L3ruWhEMPWZE6mqMVyaVsAZf9WjCVFZt3SnViKeE5C5Wt8B73wz8KRv59Lgi",
  "key18": "3Lo4q6ipobGRxwNqhbHrNPaiB55nsNa9jjsU6LEkaNeXp4FGqCN7geS7dvHguvJ2wwkVAviLfpgofoVMEzwXtFbc",
  "key19": "2VXbLYiNxGbW8xcXP4vNbPCDMh5wd1AmXHrbWxBXmH3shfLn23xjbEWH2ByHgy2R71ToLJVyKfUdxwMFHPEE9qHb",
  "key20": "5QFxbBN1AKvd7bPCvUwhaaiNA4Fj31dXq2NPTi36vi3pB38DSmgH7bL2D2zWp9635CzTTTUQQag4Lq2reXmzBU7F",
  "key21": "3NwRXXXWbG1FzgKELvZmHRpKeXFdGvPWrtpGuucbEguMur35W8LKVS1er4XWfYmh7QPRdqvuxArEUVF33NJGtL1D",
  "key22": "2pZ82sozG89W8B9kzQUazcjJNfHvgMdoCgQDZNDUECHeAtdSZrdorpNcK3bdkLVrZKRa1mFnicimDNMbuAdfceTs",
  "key23": "3MB25R48GL389GP4ZryrSsLmrpD6t2g9XJ7GxXzQd5DVZDNjcE7H1yW2y4qpABhhwTEFkqmj1ySWsSi7UexKQcYN",
  "key24": "62NzbtmrqfDQT9NNgapyAUB8sRYeZZu7RrrrBgnwZSoRsnde3fcmwVkn9qQNjPqyNgtYjN64snxzUXTCP34dKgzU",
  "key25": "4Z4aewEDY1U3RrPBNapThR8HeEgECF5NVq4FCVXM4zLArtFLNYhnt3DRYoLXxaz8nVFAqFySiTqsLaE7cRHKnnwH",
  "key26": "4xcBNeeuVL6Pn97HogizTTsX6FCoHC1duhs1ovVDpiHKxrgKaXkDPcYYkDg5m5PQ6uDE4v9fh6odR95ZPHQQP2t8"
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
