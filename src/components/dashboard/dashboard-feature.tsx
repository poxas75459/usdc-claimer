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
    "21ddcd2B5QUs2Q25bZp2qb9pfGR8NqCW24dZrtLtH1wTDhj6hPMkm7GC682UhWyHhEgnrD7rAUCqfbjzYk8JHvY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eE7EY5wjyLcwPeybHf2pHGoAf7S9C73V5sFc9RhX8vMkPb8k7h54i7xWF4LzLLjcVfSYarFtWDpraWv34u28NNi",
  "key1": "HYgYBHtFUu3bBw7e97URMzMbNKdNY65Htot6Tq1ZRe2cLpXr7diG5cZmy1jm43AnK6ZBkhcqvkXs5gaQ8nd6pVb",
  "key2": "4MWR8MshdZRMH4twq4mMyuFvVLGWbzjTwvKjMLGh6kTxNxJ547oRitG62YusHKgkXmgygAvSuRboF3nCTFNaXYe8",
  "key3": "5QSUpCSNMk5uz1dg3fSpCswAjwq2n4kGtcdDFxYhkNaxJ8Zx3C3BYSQedPMdtiuhKSLkV9HAzEPxG5obogMh6MYs",
  "key4": "5NRonU6SyeBR3qfoqriwqSf4AFnfTccUbnwDDp7zQN6W6ntx8uro1JE8n2HtZ8sa9x23Wg5YEv8ajQdQ1Au8aFbR",
  "key5": "aL2pKaD7QugtcT174bshZsirvux9i4FVzFvRZTpaBg2DA2nWD3NZNHsMaz2sB4KSBz7cBRge56wNkNP6KzX5fEf",
  "key6": "4RRHXiD3NVLnXg6W5QPmaWB9sjMrEBf6GTuwksaWpLXfcpBboXcMcc5PP98Gmrr9Y9Qxx2Cq7XtsmzHFzfGw3NMr",
  "key7": "17cAQGsuu25VJuGJQQkPdsBapYw5jqmjdQgi8PYQv11fg3ngXcsboDBpgEKTemSXP15qzGwW4SPZpciq5oLUbwa",
  "key8": "26hcAC5yEhiRqzbtnYwtsxCEwewr18wmHsw9GJ8VTgwDik5mUmALuRpm3DuB58FJFW9U874AcSYhpwq4snhKR37P",
  "key9": "4UgWA2RmTKTUg96KBH48jKokngsH1Upo2XDYXS24bbjtXBLuRzsLPG8hhT6tEZxSCxqbRbdzVo3NhS1ckGabDgws",
  "key10": "5i33DLKt9oTr1in4Z7qZ8PjcBZzaSKpwWGjpRNw3ovo4dkLjihTJmT4o9RtBb4JWQ6ScP72GP57FX11mMU4uUZzN",
  "key11": "5D1cAtt5DQZvQFoLhD6CeYBNr5xt47ahrFVLu2iV6gNzruc5WcWjPE7zMxUELtijvfGmGKPTrjiheCtxN8TLEsYa",
  "key12": "3cDbwQXcisKczWkUmG2K1nSQXC35vaChGC8TcsaJo72USUMwrz8HivqdHCQRGBNdw6hXf14eHzk3yiWF6cPM42vB",
  "key13": "2bdcN6max6cW6M1HquTL43b9cWc7ZuXYYvc8hPGTb4PTe38kmm34kjbQjS4rWcJYJCv6eC8SqYUYZnrEEibZQMpP",
  "key14": "65PQXApsK4CGpc4fsSytNuoAL1H8BftirAXbLrw5XNNYaFUtkzAfmVjvgaJSvCNotjpmWAf1Py5u6nujyVQRuMpS",
  "key15": "2WryE6vDegEf5T8cNeqj8NAnm7ChmayfMESDHG7Bj5RNgnvq6utdwif96fgnbKBsWKXPJonPJNNRrZHN6DXqwdTs",
  "key16": "3uPfpY4m31dr2ikxyfsSpbfEtJjd3LHVK8CFMovrKFmomFBn3EAJkXYYNvR7WRLqDeBnzC6nTd2Sr4oEMj51sQAe",
  "key17": "AXNYXvEA22yxzQTquh4gkaNuPNy8bfdNbN8M5K2WTqMShGGXh5i8LfTQFfo1zdYwQN2r3QotM2ZwMBPwhGG1fMJ",
  "key18": "3TkbtjuUs27DHRyMLnECiP8zb49ksaNKbYjk7uZzG5gmWLPyepX2LFrtaQ61dybEverzPBFdMr6QHE5t669tvVhi",
  "key19": "3qabpSDgyeGxS12zcW2DmfgP6d71bCGtxQALipXxAJZHwhQGzjx3KZfArHtWoivi63XdvbgsJ4GBAdRd8NKht2kq",
  "key20": "5H4STEGwC1Rj4owYd5mZJTJM6NA3kEyw6rK2jU3vR7cQCbHnrVmASatfbcsbtQLSNmbfXzTnFp5CbyJgTMEFwcQy",
  "key21": "2iAq9YYKZHFtSD382rvujbL6xwKv4wppqEMNnnBRcFjodXXoMuFivy9Edtxf9L2gk4Na58uVwoZUuo2oGaBXUeGB",
  "key22": "311LYYbEbo8DdAheZ72FTq2QyDuyaGtMe8s6F8R3BkAzUa7nvqNWo7xBkSQ5TZUpEaSs8iS1W7xfC1FL95nyh6Tx",
  "key23": "3cUs6L9ExMSf8tZgnS9ypijCBi1yn7uai9XApnVo9FEHVpjjxFXYgqqwqqUsUtLqhLtkPo6Perkov4eGZTVn3kTR",
  "key24": "4nchDfuutyXNTzXxJZujvRd7ZgzqncGCbvRmmHJjMVenSELZQyPFLj9uAueHVGraCw2yfY8evhStpB8cy5RPDbd7",
  "key25": "32shE21xBUL6Nic3hcw3ratJXYfYT9xqkZMgxyZx7ittzcLrker9eanGC5bLdhfL3w5ZoBJ1pRW1qpvDqpUeG9X7",
  "key26": "226kena8DWqcDyVDYVjbDLgQeHJeMXhnstZgHoxsbGrcArntBv1qkShNnNNLBdHWemNyKchK8tZ1QA8jLP1HM55V",
  "key27": "49BtzrTr1aW97yV2fin7Aje4Ut94fEYALVKtHhwQrwuAEnY9Tp6u75DHEdCpy5sfQUUbX1LhS7DiGWk1sQSPJhxv",
  "key28": "2JL75aphP78MUCq3YKSajKdGEQmAepS1FigaHV4pSbJeswK4vTpoGG5wyQ8JpGDTxzMX1qB1upAypRqHN8izHir5",
  "key29": "49qjesH3pQqW6uNTwmHuDEyChdZkEE4dob617AaYmeJtpJkJ6rS21rV2QurahGXyM3Y36G4G5MXBBuVcQ3oux4xE",
  "key30": "2QBwgju2RWjVtY8tYzLKL5vZxvziVHGbgTL1G3TqP7iSFhGoB7KDP3BebW3Pov5NrWzwkKfgtWMbTkuBWow5Jj59",
  "key31": "2BvcGJdgLm1rHeMagBjkXmvbuss6moj75xNHUfsMbnWo6BpGSP7v3drHxvs84Da7aUuLPr4K4djKKVzN7UML2CpA",
  "key32": "2z4dgCieGr7e7WZfSaES9i7Eiqg3A4BzzmosTTUSANPgSDkmDu6zZMgP8GnxqLsBagbMXT9pEM7bg1yNsV1CJ14D",
  "key33": "3kHvYnyYaDLsNksvkiYNCxPDEc4RCUtrQDKFuQnysKfxf3L3Zo4QLP5vPQ73B8eTttT4iQg5ogSyn9WPunxmqwto",
  "key34": "22iLpFySpGLFWV248u9Hr2zcKBvYnVqWLmsgzJvPVXZeC8f1DnWENJNgiR3ysiz6scMUqkkgZKwLDT9tdc3iVPMh",
  "key35": "49ygoNzECThN9kUSJiVsmLnRPmwor4diCbDo2UqhMCig7gkfjgqWPrBaxJMwhvZKpXEcDNnSbcBSivGkMoo9hNz2",
  "key36": "4h8m1XsFhgUGkMmC6NYMmqNXK147CN5qXXw7Q6E3X14mXXr4EB3UErfazU3hnqTXGjjPCzQaKHX2gaXUY7EZJC4H",
  "key37": "2wtCZx2yqaDY9G32hQrGT5JYFPoU85iFmzzWcrvq6KdWb3bvB5gNaNNntj5rwDKY2mBp51mYx8Pq51Vf4AcA3DCR",
  "key38": "2CoZLTzvrv7zLUwhjvRKss6Y3v9weHXZZdkQG6TZzytncXCHZGvrm9bLkpbzQWKJ7aiiYfQctmRXZziSY4xc4NkD",
  "key39": "5cbaUpm4cdRKi8XFpLnHoQFK9K27gbGbNjxjFxu5PynkKpSoLKsyAdULknGS1ziToWB6hCpiD4EJ9rttCbJ9PWg4",
  "key40": "3GpWMEqtTzaXcMbQVrApGs21CiUcomLo32MkatX6Lvhq5gh2aCBgQ5TxooQs1om2JtiZazPW6KWxuABgYJjgyqtB",
  "key41": "3h72DqRQcEW4mC5BDFTHnQPbKC63EbUYB2PWUYF1Bt3eMiVdwS9mTiRekaueRgEHZqDEAR3e6ZcB69DMbysBv53g",
  "key42": "2KWvTHM18zifC3VCie7bP4VQwPqWaNYVufx97hEVGZ3JP7EXJAWWh7yy3Cip7XyoLtWN6Pnh4hFdZqZ8eDUTphLi",
  "key43": "2SXcPSU8TZEfsYvpzj7QgGKQhr2RYfKoBWWCbgpkenfpk7RsLhKEkgauMRe8hrihxYHNLSpg3ewHFpunofa9ZzUy",
  "key44": "gtGC3T2r7FwoGPnqpzJm96sA1RUHVbfozFCcSWmLkY2xxi8jZpYg77FqmmsbkiegXN1rMsykwy7ebW9jsiQSpER",
  "key45": "2ZBhzsgMDgF2ubGvMQNvS2Gs7xS1q27L7dfHfKDPh5aD1sViFfSsSRKxXo1fgTh1VKiMKsnSUFKGy3P6wrSAdd3"
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
