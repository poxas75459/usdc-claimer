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
    "4sZv3vvBaTnynLPUDBvq1nWbhU4R39HPxeqyNNHf2uMDaM3kmAGonA9utdqwvazuqPJtmpFihLo3HbJZVC61YA97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ztdpt9CLdV5wXkJeLgvpNJS9dwRzxG3aP8XoZQ8bYTudRsp2PZYg5wEPdbJg9n755YuZbcNj3dK3yG3mMqXr686",
  "key1": "3qvkhW9JyhtcweyU7cKYWfqdHWciaMpAMUaDD5szgcdL8Qt7fVY1z2477vU8BEAuzBDF4ofgj6RZoeTZkMHemkim",
  "key2": "3g9hjq3To9tF6d7Q5T9LmY6Jr12qnQRwzmDUYVx3sMuvpxpEKqJbQZEEANaooLws9p5EtQ7hyi1i4t2rcZd9pGNT",
  "key3": "1KhKgLwaYcRuLRGVjLqdi1jFXFs9upwpVJqD61vw6KCqj1cLZA4WJLkyo1UBw24bfLMWmdqb35a9EVxgrqz3DHq",
  "key4": "5FZWMVb8sP8nRdKah2NpsqWMvqLzYJ4wNRy2EQqarHPtoFvChG12jFBncfJYXywDVmpUuXPpyGt6eUb5B8hbE4BH",
  "key5": "62UGUfg1UP24epdqynXPTMBDYwveUXwHUBc3iA4hpdpVVuLNm9TZCCNGUAe6bhPqNjwzYAtnb3tuCXYVUR8GqVvV",
  "key6": "BmXktRtqYs8NAUqTE9qJjJri8vZAVr6VKWn7tWsc8ep8QYVxgdqRNgPpkNAoiMj5xr6Q4fFbcyTULWn7KNx8qBh",
  "key7": "3H6TzfLrpW6QS4ztU4E9DCudt3RkDFcs3xreNPK7oumQo3Wb3qJvcxVeFfNmoz3noPxAu4tJzrWBmxXUdJ5CNM4g",
  "key8": "2Fx9D9op7B3nD87Fy2B46hqasjaHkh1PiT1sGuQSSEixyxuyNqY8Tst6RwjnjnK63m2TC564TTAUCsc4xjhSxkwx",
  "key9": "3dfGmnVTGfAR8ujS8f6KLBZa6twPa3u1krZ4FZ44HjBkZx33QfDCbNsifsgoN41YKd2izMu8PJHd53nsAXLQA2A",
  "key10": "3BJjfVSuPkMeqnsPoQqMfRCNv7nnzFpW9wgz5gJhn8r4Pq3vNDPdPWsUynRxrx589WTWSNwXi8TEhjVnQFDZGiC",
  "key11": "5dPj1jb57CzbmwQELD9qjCGpaN2VVqYJFdtFtbD3jz3MtEojvC455t8fty4cqRpMmiDVVC1R5442APfz7J7UP8f6",
  "key12": "4DkoSH1toAr5JUioFSPu8wNYcpMDezy3ktWJxJ3fBtq15BnPfPkgA88yp9hUx62ogJwyULmHoQRwDeQwFq9c9cn",
  "key13": "4vLjURYR2J3LjsvUTmsbdKwRZsLB5SNwa65tMPXJXzvPuKq927ndDsXspvg5YP5XUXCa1Wtn1Z9Y2n3Z266ThxNM",
  "key14": "6AmHScjVWQpbarc1Nsde8yZ4BRgLTVPAKFnuZgiChBTR5ansNHyKf8v7hjN5czWdxf91ob4hjjKi3Nsg42fqtJi",
  "key15": "PTNFZNdfFUNCfkSrHAcSo8eNb4GuxmRf3JMTUQZQNNURQMiH5x1CGsrPVUvniTUeQJAK3qqTZNS8kZm3BNLk8EB",
  "key16": "yLGqQBAxpZTjMwfqVWp9kSQ1QpS9HpH7FxJNhV7e8pqxaGRARBc1s5iNCAboJLRgEwsH6dH1vDu8ePuCRd6wmjq",
  "key17": "31ThShiQZLa2gAroWiQGcL5UEyVMh7htfmKMUjJJSBsYCDNRo2CF6ur2xnwDKCwiPbqMrrHSp5fwwTC1rtWgvUUk",
  "key18": "2iuWzaztSSMeuKDDidqdsywvPnuozCM5YbtWnn5eqnGSwAgx2KnGxuzuTbktLufbQZ4jYx9maExFN3SdFrZZuDZ4",
  "key19": "2TJVNvc4GGNpkPxwgXc7vyHtnqKQf3KJnh1K4z8HuxH893xsPAM5RVThgNP6CpJQoEqiHGTPJewq8gBoJwgMqNVW",
  "key20": "4PMfgAuq8FvqqXoei9QJr7FdB3zTd3EvxCz6V2GfDAckUYqDYPryNLykJ5j3a9JQNx8Go4nY3uXAHvyK8C7ooz8M",
  "key21": "ztHAVD7H2UrcYUkcwazHbd59QtZz1Qpp93H5CstqtJEYhZuJwttWMJwKaEs5vio7VzUHEi9WU9gp18KiebiR7Vn",
  "key22": "3P34VFGneekGLmCoijsQgnd2gpkvMb6efWhcsXz1q7GtNd3PtV7zVpZnw1XcQZUCMGcoGUWsbai8GLNMsYie2TJ3",
  "key23": "93oHqNnt4kMQuqdcuPaJMKH7gYb4SVaXQ6UZ6rtdpkFbgE7ZN4ZGLfdrud5SyvjUqs8DvfoZ1EVbevUTqyJKRqs",
  "key24": "5o3kdkZzHsrXNMd7LbwJf7Vcg4nBj1ETndnd5WETDv8e3JNzAFB7mrNMxxSGpaodnciXtbaomP8ZoFoaE2ndtbEe",
  "key25": "21Cqy2UxWbLKMs14qHvjbbmUmny5Nj8pixHJ4xFKqrDNS95MdBza2GeTffgcy54DMGFo7yBKKMsAYx3eR5rjQVYm",
  "key26": "58Y8muzghv8LoRNAmuPbTHrL6YhiW5C9dGnYjpNqqaZDzxuUAXsy4oQThXCavcuAPHqf65fYHQ8YpZVmNphrJ9Ui",
  "key27": "2kmiSeW9aMqiMT4a7ZzcnAxtR5RFy6iBhuLjx6gZN5KoayVT9CSyqRTNb7z5Wo3npUJaaeeDZ3yuP7JHv5xZb9mt",
  "key28": "3ssDMPsWG3GM4Mgp7k9LF3iJdPxLFpp2m96q9oSYng2z4MiwM4ArGxL5Q2T8GjfGQmKs2ET6AcCqbURNB22pJLRZ",
  "key29": "2dUEUrwGvH2DakS5ZW5k66mX2eTHN7EPCM6m1uJg82FeDShJoXvFP3ESwJ3g91RX9QbX9cRyxN3RTDRh9tg6fp2n",
  "key30": "5ZiE34MVj4g39b5PWSUgDe4KRYDH9kf5bw3Ron8P9qMCgQUEfuG4shLPdkAszyaaVadASXGQ6qCStiPWV1Dxu6Eu",
  "key31": "JDynN97Rk5D777om6f8e5ii25MZRUhWcUuqNoTw9UexrfYhDWFh5uusgNYjiyHXumzueTurvPjmooKkz8i2TN31",
  "key32": "5RfSFzx2Yt16Gcs2dFhXashm1JdasmH9ZXrurPhHW87DjJybK5q7rDeNuoUJ35GaB5Frogq87QZrpWCo2m9UAkTc",
  "key33": "3vDuMHbwNFwrpGjiBamKeaY1HCaSVqgeZe1zMyaZpCXVpBQpC7FfWM582UK58jeSJADVvpko9F9tmur7zWhLYjXb",
  "key34": "42STfgKaykyL2Pr8NNsuLoZs2xfUnfY2WgEAktrUemAF7zNnfYP71ffbg71pqYzfaKkYQKxZ26mwzpZg425teBJd",
  "key35": "25yVUwTgUkCYEekdW28qCu86AFmwhSa4pp5DR1mnMhTYicpAHNQKqXr3omp5Cq2d3e94bBVQ9KVVEvpdF4TxdmVz",
  "key36": "KVYLMuXmSozoR6a9b2pjaoo1YVemqWXx8kvjXXx8TR3rpeC7UGDFAsMpNPT4gABD1paKVfZf3VqmFFCkEukqwCm",
  "key37": "ar6MBHseTLQmwcZzEG9yoCDvocsH3v2xruLUWhr7hVcZVhLm9UNhdZf1j932DHnsUieBsyLNUPHJZtEJP6WktPy",
  "key38": "34ayT8JJq5xxkKku1VCegjhgNzgb9E5B2vPdeX7HwLgPecWDkxiZyrJNAVC54nD8qGZKqGy7ATB1uZgnqjT7Lmt2",
  "key39": "5aMWnqQzGCzzmWXpuc8cXSxQ81SPaEZwz35eBhnf4hGXN3LhBdfFUJU5tVLbAyFtsMt8hCxe2Ah4CFuu87w1dkRC",
  "key40": "v3Yg2XL2byCbGUBNW3jePdyhCCuGJVf9mUFxei9wYyHmSsLx4vZVvRhoJGt1w4PozraNaquAaDQ1HWjfUwsdX2S",
  "key41": "4AYsg9Lyywq9t7MyMxt632JEDzxKNNthKrxueW75tqGBuWdkSHrsS5Joi7uJjfuqjgDto71eKhuHuQ7NoCdUGtAP"
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
