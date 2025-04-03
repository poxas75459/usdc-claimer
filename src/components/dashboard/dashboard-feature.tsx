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
    "XQkfgZXJSXFBYn3B9MnS4r2xbjVAtTaD2itRygV7XnMTVSoCtfM6iasiSKXBYTZZhbyhC2U62mV9Eje81hGiTs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVLr93wxKGmJ9qNTJ3xVpc9ppPvDzH4KFKBY2MCzueDpUGmExWqQRvtn36WZgucoapXXVSWFaqUASWvxBppUWEy",
  "key1": "24PVyp2RueETweXbmd2MSAtWu7cS8NJG8qoDDJLF1UUj1sGgNKD1MZMuxrEwtc8DBzRVheJov8FxKcSSytrC3m2u",
  "key2": "3HWaL2679gmtA2q7fXcZSgxBEkpS1UHANN3z83uNjaU35YkZqFEyBBxecJhBvNAmSa27ZqtuZryHWrEnLLcRDior",
  "key3": "5j2MPWwf93bEG6Mouxg3yCv6DsM3wNQs6Y86hxPSjhXmdJ9dJLLoRP5QZmJG3EYGzzW6xyUDu1STByR7mzYVhkBQ",
  "key4": "2vp1fcE3bZ9NrrJYqJ6rk7cEyYmhuPS2WJamAbk4RYH2KRhjDUVoUcYQkxALNyMNLLh2pqQHraHQmv2cr9dSUkAx",
  "key5": "3RqPjTvj8GcS7L59MMQVYcaFM5BhmAByibabr8pu95VdqrVQjJtZN9Z3daV6f67j5Uxy6XTAkmqzaGkBRjkdN9n4",
  "key6": "5GHtkku1LarhH3qtfC6JwB78z6RM3D8ECrmHtBHgTSSxWCSEgAdf7jPjy2sjPmy1Tsn6w4RFWtxoLw9nCDzhoqgV",
  "key7": "2DF23bHTQmCZ2Aw2dYvz1FUoudX2xqYbSBU7eaPwM5FjPZfrEqjyPN92QWqRBZLFPu2vechVu1fegzv8cZFhLjnQ",
  "key8": "61C5ep1AKeN3KKJY4mwCbindnY4jGqecUmSJMdAwYxByoYwxi6yPDRv6xHCMqaZ58XsJ5nR2KiuMQ5Upz3QAmXvF",
  "key9": "5oT7fn3sKk2crdfAPUyzeWgTfbJVMjrGS7MkkhDLo9AtfDC28GHv9VELVH55YZ1kaf5xWoXUoJTxS3AQUM4jgB5T",
  "key10": "3btL7huF7qxgRG4ebNVYtp9VuBZAWLR7JVRKqhQg2Viu91Ky79L1w1gLhLQHGHgZtFf4smRiJQRhYWYiUUJseZf6",
  "key11": "5k1qiG9KE5QUZg1EyxaoAShNC8162fW8daiSvbv9BRZ6PL7jNLc9u67ZjcxkGvCz2sc8x2ywgYTFadJtCfrYSdoo",
  "key12": "p1VXoGvJTPBmoHyhDYdZqKppx5GDzE3Ho3mYsaQfcDtQgZQ6UWr8QxCWyzdtNUxqMgLDbBC2tX1csEUgf3d62yh",
  "key13": "2PRbWj3RuyuWsk6xKGU33ZANkMzvx33FzjV74hC72kY6zyzsePFVMeGzbCaJn6WMEYtkMmsJ1xPZfNzVPtSbYEya",
  "key14": "38S4F7C1ZzCNw5GFW5WXA4HFFiEGG6ZSHkdzCNrg6ReBteBbES644Y928ktmJ4vBdsY9qooCghQ8AMoeUpzPXrVT",
  "key15": "37fmsCjTbqXLc7VEZEZNsWRWGj18NaqatWgBoxh2oCK8btqbvMRMSf7kZ3WECJu5XQ9irnfwdY496yDaZ9ZaE6Jq",
  "key16": "VvE4vXTDR3ytB6qtD1JcftCbbesEAf4aKiWgPXHi8yRSXGsUPrijp5iWC87whnctwCZYh7M7bKLwuDtqd8zPJ2d",
  "key17": "2A8n8AdvJwCAokWb5DVXzWAf1BdEBQyfKCLKRdH8BJ2Ec6A2x3WB5d9sEcc3Z2SgRcJXxMgLkj75UwN3e6ezo6gJ",
  "key18": "38K3Qum5q2DS4F6eqPheMmeuaLb6YX3JafYMe3PnQfaxGzWW3gn1k7xo4xU6wEggKtJznWq8cYfdzF1G6fjYrwFU",
  "key19": "BRjPjXhZhxcwmSxcHdRo4aM517rb78K3RMgjTBdZrE9Re799doyqemZMzjeABkRX86jezcEEevkgRJXTVJRYiw4",
  "key20": "3ZXTCZjeqx4RiHp1vrAjRpR2DPjGvfP1auRxzxTgZonDsYfg5jaxy2uA6XAQ7zvA43Uu1F6WQ6SkwUQyofXJaLou",
  "key21": "4b7grzFpSyQfL8YPp6BsnNHYkY7HeB2TuMoLDGbTqbkyqFZiB4bJLBSj4RDoRFRxJNN63LKpotobdNoiwkgetXhK",
  "key22": "2HFtT653syPVXEst5uV7xW4qNNbQ2824XpaVULjD163vVJeDC6kT4a9w3eczdqMPbVsi2kckdvFm3AWzFMLhL5pS",
  "key23": "4U7Pin6Ztm1JmkyFcRpujTdBikztyfV8WrQPmPKBV6FJANJaKE7qVRJM6DPVx8Bg9fKawyEtixrzVyFaREs19quk",
  "key24": "4QcMfL3ofZ1NpR52vAX88cr1zYZLXVJ6ofv67BBjdY4ChKrK5j4GZkTj3bQimp38wJ4QxnbjoEQtxG7uX3wgKoCU",
  "key25": "4rTHxnmR1aNk4kjee58W2QzHEARebbVB9GKgXC1vxam6f2TkQBRJ5abGxCiJZ5Q7V9NwYPXpJXXo7Kj7G1AFZ6Vz",
  "key26": "384gYU96SvrQbSiR3zLD13cG2CtcNxosV5uuiTZ9ics499GQ3imehoPbdsz334jekQMJx5f4BSrr5YxDTtYAAjvS",
  "key27": "4TnAV3jAGBWu44tuYRsAgxB7kPEPA4eSqc5AvKdrZYRpwc6ewc4WgzbcemyNCtMsNgijfqAEAKus26ap72zozvrE",
  "key28": "3XgstAzFCksM1isGVHbRHVQC1Qo5c9WhYKYaDppfffFp8mGzpGMbYG2RZkFUMivra6j7MTQge7SQWjMhkyMzcomZ",
  "key29": "3aAkhnkyeuVLY9WSTC4VJ3nNpctufN3p3M7p279fgLUvtFU2kMjZi5kziNFo3p42c4sUCWFnMtj3hDHWFeNzYqCY",
  "key30": "5bxhHDEbkjMZyfjC869aHScnmRbxBcHDFofUxEbKaebykmv3C9uLHgbQ24Vhsxqn2dCtAeiFXNYPb1z6wTDg8Gmc",
  "key31": "5jU8V56YohWPFh3s4dHkfPBH9MQiYfEKQnHLLfwYs3HtsZmsqosisBVHrNWBAZmZoTP5h5cpjpRbi3W1YGBqvajZ",
  "key32": "3vcGhpn9oDcfeREbxPeowxsbHCjVaBRJ6LNRMPfEzFF6cDnE49SjdBju39pvdzRu1LmSNmGDtB21wmx5S29FPc5z",
  "key33": "3pRgyHiDDP517pjEkTkNTmV13W7jyFZfEDbHTaUQEaFA1B12XJ9gA9gL3pvef6fbwPQhJ8BwHBzzD5rVw9j6UbmY",
  "key34": "2KzPeUsabj6UW1H13ZhvN17M5tpJNHXhbkkUnLVWe8qUJ7WvKvSbNo7Fi56aNdto9GcfLGeW3mTCGUGNPrsogx6D",
  "key35": "EqsrzvE8GyEExuzgXqsdTHrR61THQ2BHZWNaT74H8UXakVAmJo4MN5NCVQBxJcrgta9xnbRKkm2rpme6XkrdW7u",
  "key36": "3mjKktPCR2efsWkw5QweLHmxvmjFAUYaU2dQvztFPpmr8dB5gCwNy6Jr765V27QWqUbpoHjUSyj52yZ3uAJNVCCc",
  "key37": "2xz2pPbzyvfce9T24NDhyPhXQJvhnwE6p7bdQmtc2L7rtxjZ1GaAW5BHKzWcsra3GqHdeepj8vBMXfcvYhDwfj15",
  "key38": "5Fni2FrSMpa9fXhMH141BehgSMnBTXwwf8kf3QhmL2n9cZMz9PpnMhZzpiDimg8povqz8hPUaZbYUFJLb2fCuprj",
  "key39": "3MQdymiFmwTy8ufQz3at6gUMDejszwLbJfS7oe4TC2H28VehQ6ed36js1KXZjCi8eLcrLt3tLQKbFETQHcXWcppz",
  "key40": "25qjm69yv5iXUFdoPAymCvnzhUHVaBbgxfN3psLAwdQheyye7HqqwcpF3Qcpr81ZPRq7v61hcnzMzFi6GkEK346M",
  "key41": "4Gt6Cd8V1wBs3ws73V4asBQKaMonB6tgA79nSXoqtbEHM76TPDUshLKdaWzQeoMTjhreihw3yqEb9mVXBi8zyLo1",
  "key42": "4cCsL8Y5s9dgQfCvGVSF5W3FWwNXzMFSZs6vW7nh5Np2SibiHDkJNkWB2vNbPnJmsAH2aKX61mihukww37pELMAQ",
  "key43": "3LUZKuHU9FUs2cn5PJfAeZDJTRTbZFKzjCio3TzgRwDHsjkCY78EiCtnRPCsGaUqNSX9Pepw3f9WNsjdBtXE2geQ",
  "key44": "CkfzioCv9tt2pQnUcAZS6CMqB4HnR9sr7H4YE7i7rvspQMcgq261LwAyrnfurHF3FZorvk4c6h3LgZfDKsri49k",
  "key45": "3H9qtaHVUu6aUJRNeLK7n19vAnMoDAYa5kEGzH8Hr9RMtb3RNpX4NosFdjNW2NwtFzRixvHycwdncWzTbXEMgGPi"
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
