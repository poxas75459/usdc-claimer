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
    "4aUQAVChovMcrbXybhYPDm3kD6Bcwp7qKk7diVePmi5fuHAZGBcqQBsAHqxej3krEftaevc6U9wDZ1cwQ27zqVBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GxisckDggmztean1cis9m9CGtMtd6tuEwEWEvEi3UVxb7RpRB9ryCNC5X1tYhKxNNQvbwukKtH91HU6J4Wim5d",
  "key1": "4EcJ3kdYwuyFJaLthrH8fSq3RbjYCGUogkSiwgA26TXrjLxStjDihLvGdd7mi5GkdQ6cvqpgEkM5nmNpFqFqjZ93",
  "key2": "4pPmHX5GUk4gnRJZYtc6NEkZ2h2ccowL7Ataro3VGRa5wJRFiniRLxmEwt8mRvDzNk27DU2wqBuxq6iX4KShuRvV",
  "key3": "2PbxYJ8JnV46ZUtUdAjap7Ldv7Wv2SMAHymQYKMhY3geW2EF2LQcdjFkRH44ELTBzQS7zb2fEzYkiZGFycZeukH1",
  "key4": "3wKYn3NZAoYNECn8Vxo1AbtJmT7aajGcUZ8mJbX9XA2SF8WWTvvhoeLW2ARNZvTjcBg53o9mNvBxoi17tJci63Ap",
  "key5": "33xtht5zkjSZTUyWVJcCEznJFJbCvrKNzW9kgRuEWUsjq2wzvcX2dAd9Bfh2yC8foD9mfcduBzHhZyuLTykSMwZh",
  "key6": "3x3MPtj62gjNvz8gmhapq4J1V37MoiGD6iKSvVDLsgVdNKnEEpqEsTGv7JVRceQWH2bXVZsXHC7PFviPHQMhzzdp",
  "key7": "2g6JYqerN94vuxggKNYq6y4j8B6SUADGywXuafDaUcTL92n8W162j86XygnuXk9tZCDKqwcq64LKdByZUmwcFsPN",
  "key8": "4cY6quURiKqAV1GmFj2X4JBraXC3fSF6vXMR4teuivkkSsiUMQr3u3La9ynsrQ3dFwRn2Kjt5P7SpvTNh2bDtWnF",
  "key9": "3N3Uk3JM4Dp5vLZHn9cnvefJbKqWdDGirexsDwCer8EQnHKQiMksQu9toDqmqdnmrd3bQVw74jPkZSjq2bUra2uN",
  "key10": "2VQgPmoguWDwfgUkQcAQFdajUF4krBjLrBt2z2J9ba9xwLudMD2UH2VftXfW5PmPhsyx5TSzrNgHfzVLTdrywX2L",
  "key11": "3sKYe3G9NNGkWYL26e6w6f2fCCkYM9ddFJNe6uUH7dkREXuZg9rzbXfQwn8Ad4uheSSb1fpXSmuzaBLbbUZpavff",
  "key12": "5rPh6Bjkj8gitiei3pZRVYnNwAebv174EV89mTENTC7rYTE85vRRe367PKcAhkk8p5Rbr69RtCenw1bV5sAtAkze",
  "key13": "877h9DPmLRWGGiJj3CxoqKsYSCifEDeiZmZtDmqsUEV1ZsviKPLrPMGyYGu1ky5NXWFuEZrHwMUKZAUaWAxmB66",
  "key14": "4ve3Y7QA3ahvGLrPuYV7rAkMSEuXCUVj5xENEWkdaYuBwqAu1rKYNtEnZDTsjvUaMBPigKk23wj8JwhPC1yFF5VP",
  "key15": "5NZdSiV2EG6eyzszq6DY15YzeiFAsCd3nqoSGStn83QRERLGpZA7p9jnAdgJvUNfR6owPW2raVHq3y3QgqchEkXL",
  "key16": "5tRCnYJ1K3xhVgGkeHuGBmukVK6z1vDTqgpNcQ1zygGx7QFjTeSs5X6D2BNBc1Ma5PZjgbotcTStNtYMaFWtDKJh",
  "key17": "2R6cb511xhxfYxgTcgb3genUujufFQ5RWNSzi2yJcsbS3nV1KXDuJNoMPULCjsRu9NgidNSEs37jp8Jyf5mcYvn3",
  "key18": "64EJf53o8VrLfYovX6364GahvbSehezJpAomBvnEqCMi5HH6i9fcWuF9vK7PFE2GVXzxqthhEaqHwmCQarSAGBw",
  "key19": "547mg6MszFUKtdCEzrrxy1C1CD9feckPTVQasEBfNgY181dJbQDVk5A3McQgGzv6nL3sFMUzx8HB6pxHLGu4UQcq",
  "key20": "63kUnPfjLMaW4k4xT4jDSzSuN21JEXUWycipimR3FB11zB6JLe9gqrgJfUApUrKuWeiqk3ysU5BcHgAUjx5u5SKv",
  "key21": "5thrk6qmp3MSUhck2H6UcD7RP2mKVdi2idJhaMmW1vjHywwjaRsiaHQCiP99EaHP8etmV6YX55Hh9NNtHgjcFnGb",
  "key22": "55KLDSeb7SkdyXunq55ksXRZEjGqMSTaSEjv8TcA9Xn37QUK4Jt2KkkQLLPfoQX9FpYoy7MUP9TLLCqqQw6jUTRV",
  "key23": "2Zukm1sHAX6FzF5Jcpv3GhV7s3WNUXe4aQPo7cLYMrENHM3wfzhStCgpscoYgcfrNmXDtdp9tnsg7of7rifZbTof",
  "key24": "3yF54Xiwi5NuStY2Pe8y5QpoRfufyEXboe41QGs5sQhRhNJTRXHMd2r79Cijz643HoYetXwUyoviy7dTfHRmKWSC",
  "key25": "5q88vZ7foUNoD1gwyvGB6CmCyyh56gqJiQsVzcvSTzQQDZ3FKvcRidGazSdTYNHpHqTup8eZfXH99rFZc1GtLvow",
  "key26": "5CjX7iA2rHKhdLfEc36kKzCHiHfdiYQ59s8qUSrMqKE1nEzKG7YVWQWJPB6oBcZW1rjaVrq2MXTrSpUhmFLoVSFa",
  "key27": "2TNVztppy3A4xQRSvXBfPjBzk79cBMFsbtNszLgWxZgy2Uej5NUtP5HKAUBTSrzjxEt4pw3jSCYBUnNo1wjJV1ZU",
  "key28": "4q8wLqvyeDWeZizZzFD9QXNZA8rQsuMazWcxjxaXfUvof1xjR1MuAoZ454jnYDf3W7Qqo3xc8GSrUWxXUAz4D1CZ",
  "key29": "MiZA5FdTS7jMfCCyGWayD1JvcwtV43fx6HdiEUK68w5QsDM23FEaibSZXVLiCFcuHz9kiw2aFUgtBk2Law6ejif"
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
