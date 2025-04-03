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
    "628RvDcAKtAA5ESoHtix5k4RQufRoHKSHtEDqt6FV5y5H16RYXEjWM1yYWCU7RvzEei1NDWUw5ZKqgEMjBeBy4AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KoBQx374cCPcwAfwmnmzUA7qchGfbzuGMLpWQiyExPLkofNszMLFSN4r7LwfQZ4cA89QyPP7mGQb9eYvSUE95mW",
  "key1": "3VJYahNbVQGT8eKAW72noHnpUe1ANLzjwhuArZ2aSD67ws2okYVRLBCvKS1ZYs1xZBCVFSXFBk87RnELXYXJR2GX",
  "key2": "ToPbaDs2xK7U3bd38P2SbdJRN89jyjCNFzWsvHLjrHmbjRaK19ECZUfQ52zQ4b4R4RLq5VQXkUi46v649FYLBrj",
  "key3": "2T9dK4uDTgGdAmURMEewJP5rcS7s9nKvMwy5VN8gGHrb4NNdCcHqUFYsRuiqkF3bz6Ki2DyYyRSE44DN73D37vo5",
  "key4": "3JMxg7HfrceVzeoPztLZjGxKo5EBKzn8E5xaANpvgeAnbREWf8rgxBne7qSU3ES7asPrs5Q3eCRUwfN1SNRjEv49",
  "key5": "4nLU5xEXWo6YdqDfNEouRmfpconVGX11f1zRfTjWMH1wJ2n9XV5skxJKgFiaZMeEcaDpqV5jJBewi92wXdJYnb9u",
  "key6": "267sEYiRFFEWM6W6iytX6Xvff1YSxqHetrwVTvnUdXBZW8rrR2vhUTUGfMP1NKP2usxwMhzV3KNHqXrByBU2nw5v",
  "key7": "32De8MAfVBVNWyLzCoAA41kBE7RgQiopktTv9yiXZsB5LPrhsABDFxz4wDCfXJ1HKgxuw91GZ8jJ7hM84Ve42Ya7",
  "key8": "B6WM1nx5ZZuKXgoWpZxonEZp1hrcJQE7J62QZXPV83vYVAtvv9nPB8RGSm7BjUJ6k6xekhWr7a5ZkKhUVHE7JEv",
  "key9": "4CLi5QFpymmDnnHFudN4AcfN3rmU3XXandYNeHYyRdBVzDYn1ynVm7jmhHE9BjYjqisurTz9TV2JFp9jgrHtcGKo",
  "key10": "vQ3ZJu34Adxbg6GLXhoksVzfT1G6U1pP4jaGA9Hb1XTmcfb5JAbBRuCnewLr9giC3XDfLqF7N4aQK9hxXa1PZsC",
  "key11": "Auv6YVYJguuXiLmKLvEhNoJFecpFJ2Xpm4vkhJFwcV32u1jdtpf6pGmivd44Au2CGb39Zdouwsz6LQ1GdY7654v",
  "key12": "5Kh9xLquJK8ZRrS4P9mMcASDaw7KPCAELvSX3iwu6RBYzSXa7A5VMsNze4EPryCvKMAdgHDKUT3W5HZpeP92MQ9e",
  "key13": "5Ad3EhFzKMWfHauqrp4ZR3iCkJfngm8io28GNaS9hTh18gipKforRtzuBjHW7VQBUS7Wm4keKpgtHUToYipBnLaV",
  "key14": "5PDCpFNtpdJxGEhDXCjjq8i4toEWyhLSBfdJSwcX7BMGyUERzx81SVUBBL6WdrZvKxSU5CwwZQcWLx9og5kDpHLS",
  "key15": "5SpXouTmcqqWFq9nh9jzCvixxC5cR69P4fzVpzMzwDXM8bfSoT8SvqbENhQDnW5B6gbFYCcrkSexYySFMtzBykvt",
  "key16": "5jbcifEpYtYWeMyRRk2mLnmkrb6az1DGVYSrF17nkNkemMz1aAojQ3cPHApEHh5k4xSdkKJjGxwc1dA9d1p8VwH8",
  "key17": "5CsGpV1gSwb1f5HhqFhjaNRU88iRRstzTk8R8qnmJ3a7qkZDpUscmxwoz1GxQDee5CP46gaUBP3vJw1MoBezXDpQ",
  "key18": "3i7RG2JXqZSeLFkpzyegihxircwoezZKHAm83zVMnnf9LT8Lyxme4HhwkNvLvQ3T8tH43PRR4EMb5nF1XW5zjUCu",
  "key19": "3XGv9f94vTAvNko6PfP1hj25ACDu7wm2tMumAMxc6cWmudEfccMZU6jf9uPiKQaF5VhH5gT1GoY6t5xxRKg39tHK",
  "key20": "3n6vJqUoSBw7PzM9cMghPDecb8TfTi9edyDvVmb4dM6VPktjjqXnrxVpFnJvKNx3nbKQErHMqCEkhDQCjYKsZkzw",
  "key21": "5iy1D1E6i2kTQw6XdaqgiPhLmGZhKprvbJRxwJSahCQWZy3BAqAnQHCPT7FnEbKHKULbcb3fXzbyNupMLq3FQ7CE",
  "key22": "hR3KUGKWK88k3y9H4zkJZfPYkxMXXpV5GML8GvbvGotz8hZ2mXgibPu4j9Px8QY2GA4n3nXtwGVvjFL1FdtLK3n",
  "key23": "2icBVqGV8ZPBedacDQrw6Xq2PfTCPoEaC84SutL5ME1Fip4q4qBF4kLvQe98xUMKz5sYhzqtNVaqF7WdZNAZV3yC",
  "key24": "2V6tcJbA4oj5Jtwy5seAB36TynFEJPuUMB5SNKkoUZ57RUiCvTVLTRjttn5dygbhcWAfW8gRFHSTARcfFsRXfzMj",
  "key25": "9XJd1zcbw64QaSoPRMXHW21bcZzjwyKBs4upbd3EdoQgdRNJTXGqm5NDdHvQyvU8DqwLjrJME6eSU6PfMPzSofb",
  "key26": "5M9AEaUxZthPof2QHMXDT4HePvkjF6Gb6een4V4HLCV4Z3HWQPQqV7xihKMQdL6m9Z363TTt5t2aEJ3Ysct8C8dd",
  "key27": "36KAQgA1YbAHp53PDyYWczTPCd5FNJVthfYeiqKdXyLy8FcYE32dDSssFBKfKYGi5vn3UDAQhXpAbWsUsveJvELa"
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
