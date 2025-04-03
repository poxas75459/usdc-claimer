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
    "2P2dbYYSUd7nqjVj59ykPkQ4sebkVLbJGpsnLX3KrpZRdAo5U2Nd1BM9BWzaGGfSsits4uNKeHEKsftg99hBf4bE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CbVodBPAkpBTafy6EgnByZsLeYWLqs6wkK9HJEX75KZ7REwYSti1M14xYo3Ri6W9AnJyR4y2hQ58ZUMPiWsuxwn",
  "key1": "3RgAeGa2KyZbd4ybVP4h7Pt9qwFMzJGSS84Mxbnx34uHancjkrBr9ZSXyKwXqyGSVL8Jt18qqLihcTZvBZTwnT5w",
  "key2": "5dZVcHcFxNaoNW4UJtUXFucoV4g6b4bUkGzvqutb3XnecH6U45yyVCEAWLyS5tS7p1Czyquo1p2B48FPmXsrnJV4",
  "key3": "358rxqByFBSTcsR2KyPnYh8yQJTQAUpFPBr1KYJLzof9hajiPe9gkn6vdATpQPihTqjqxDNHSTmdqK9XpGQgtpAg",
  "key4": "4hibo9NiWQpH6PRR6jLx2uTH7okW3RRrDx8p8vvMqJPUuLsnnGvjx1BM44nmuVfZMCszkswwJ49mVzPVQ1A8ACU4",
  "key5": "33knpo1ELPcRg9qkSxF5XYQjeSGwMDTYbRDdV5kgnMHAcQPbVfefBsKJ428eAjBHfhH7LTW4hP5wftdf9Q22N2ar",
  "key6": "2s9d6E1L4U35vvrvoo39HoVehjrBodYnkhKTqBKrP3c7bn8ts4W3Bp9ePz5PLXtM9SFDZ1uDTS5ZRZJFDFbqZV2",
  "key7": "2de5RwSMStuRBEWjRkcPbWvGuKkGjPSxEVwLLPEaFc7aQ6zqhVDCM3Nyc2iboB8v6f3KZMZAHepczBD42SmTWnEr",
  "key8": "cHvhsXkALEE9d2m6KdZJnnteWsrULKta16za1TQCpfhDUGrAnLhQEQyFiFbuRNGH4jiUekXYmmrsbJhaQe9Z7PS",
  "key9": "5rqb5YG2794YzwFsCb9GKBbbLP6ogsrWzvTuVrjmTKYMP7gPunPyrpoJvoTvdbFe9rVvP1B4rVBt18XvSZQDu9gs",
  "key10": "3nZUNnsZSqX9KaqAMMfvWKmsEUUR6mHric7i9DhphVv3unhfZUZ7N2n1mcx1upnZ4AdANLmZWdVM8781s8A4rG9C",
  "key11": "2mUDUmrnSikBiumPh8cFL9K87Kncbu94AbPBrqRrm9Xevfy8hv9svpt637vSrf6FUPuRaUk7ARntJUJJdeLDAR8T",
  "key12": "5hMLE4n4LC5SEsY1PoVkSG48DVmqFQ5CeoCXkhRtZ65ZpUNcYkzhaLmT79Jx2nPtTWSVAQBWSABJmDqSfJUQ2G7E",
  "key13": "37Ckz5hc6ySG34iVaHJo7ET9CMxzeZVV1SQH2AAadBAEDsNwogxeWYoAZ6FLsHk21dzTpjLGCY8PBXoKFGLwUTRP",
  "key14": "3rETxzsRyveN4QTaX74ybMq666AwiRA8EMVscXfj6axAxDZrr5ge6eWRdUxU8oCgKHim3J49nkEyAYvWrf4zojse",
  "key15": "5tDiN8Nb9ahpLkBVzZu8Gy6HxXiXD8nZrHR8bTWRZF5MTeU1rGm6qANXWZQNH3h8mzbPHGbFUhX6khT9Ddp1hprK",
  "key16": "3StGBHKMtSaNqHbhcLXNwNDbTziWtBjg7AXHqCDkpdMShPSkrTidWmjNwjTJBynkdwXTmFQaSC1JRb8HbFhN3FLq",
  "key17": "5dd2pQUhgCE1FNsMs5ZUGyTZP99nXaMxApgnJ3Y93Yk72oPqtwDByWxSmvVDjcXZuY3x2NCPwgAwHkaW1LMKa7ip",
  "key18": "2q2tMDSeYU5KxWkDstaFJ6EyoUtLZurCsqvm2EBWfrHngR2ZLijW7g8kFTX7ZtseeHKrGrthfNt5B4S7n4Gx7umv",
  "key19": "35HKnnq9smXaDDHMk2Y5oyZRA7B8BwYmXAGUKiZJCFgAFCZmxiuM4seBycY9tqJh3d5KbCtBNTo9dhmrrY9VJuXK",
  "key20": "3veQcvUXiTc4RYkr4hCdxz8ZXFeNc8nHK1YT3hVoGMbrbfhvVJjjzF4Mvrsote3SAm61cAWCyPSD1L6VRcbcXwPf",
  "key21": "3ujwWQWQQdnCeHwzPBtSzRdMz6o4eiYvZ5nb5hk3NN9uzdaqeoMjNTfBqV7RiZHNGuDZu24VYJLQhw3XhQTBcWVa",
  "key22": "2aaEDKK6Lokhdtwnkk2AMzj4EmEQ6qZ1JbVme38w6HqcmxyKFGFyPP2ZgzBx9TAqJnj1C4NgaTJ1RUP1NMPsNcPP",
  "key23": "cSkLFW2ibdjqD8139v4tPcnGmqpD6dBWzZUPRhQFej76AjkU8rDHq32BW4ESwGXa9Hwn8DtW7vLHWCHqkxLcuSM",
  "key24": "3fp9dsobo9NaV8f3UD4u3ZZZYcdW3L5iDMtSCUfa2qRf7nGadNn7b6WvJLwRg1bQp8FvY15bMzZTwfEgxRqKx1aV",
  "key25": "42aDWqyXSEHTKsAGDHnqUUUVsLvFmuL2ZdLm16TmAxur9Jaah2YEmQSapUbKeTN8L8gCkd1pRJJNR6NdSYnx44mT",
  "key26": "4etZTXYQyhaJczRSRufAhuKweXQgj2gJG8bD9ucvyh34fR4miD8Uc6x2eh6yxzsE5x5SPzKfUGNCoCKkLmuSXpWa",
  "key27": "5EfDqc6rB6JdgE4ikfow9pzruiRm1yjtpwkvjeKAgTnZDo4zU5XQwMV7AwDb7gEfvtAdE2uVAM87LdAV6w1KQeoe",
  "key28": "23SWcQ2K3iW55arRo2VtUxCz5vXWfpFJeUotx9H51ChbxDrsf8mUSFr4Y8AFDCDqAEgbtKaK73hGUK9WMQYdfFvj",
  "key29": "2tkzYUEE2KXnG1G1mBMhwkk2K6VpRgirfHLRxgdvhqNHzi9D629gKPsEWu1L9dLdLyrb2eHbHFGPtm8iY7BV9NnK",
  "key30": "2zTE6W6z44T38eLWXMv9rBYp4YHzvM5hoB8GG3V7aWqpomrjZMFVV17LTdg8NHEq2xBhxZN7UDwJRGofFwCySfWB",
  "key31": "4g1FbpEJJ6MHZVFWfzmNs3AJbYz5Qwwkw85LHEERwesz4hCynrbrrPuDZhrFBoAdTjyjsMBgc2xksXWNAbkD2yHy",
  "key32": "LzV85ygAMNSQewNssuz16NUtGMeJ3FLzwTc6TBG497t5d6h6Udq86xhEzMAg7BcxYSuD8q4RxC8JCttbBPpurBK",
  "key33": "3qjDfX9fA48747usPEDWTmBuHwyxJcgAyCUfiKfT41RpvgRfXQPm1XatHBzty8sY4x7fVjaAgDEksPrq6pjm9RzG",
  "key34": "t3ueaCw1puZsZqEVmEWZ4rWpwMP1cavXgY5BZEcjaKJeCkigXUqxjbe4cgjBux4KuVC5gDKaQEYGseAvdWcMcx6",
  "key35": "3qKHJB6MECczC6LBVQ3gXCAnLorxgrHign5xsLXVWkFmXuBiH3FaN6yfLmxasE5hjqVW4Q7K2B8H5NM2Hv36m1ax",
  "key36": "5F75Wxyv4rcX6ZFJWGgTDWFDb32MmNbC8jTr6GGHS8yQogHToazUZ1cdkrPGr4JavCFxtetGMjCuWAjvBJAoxTQC",
  "key37": "5jUvXgWeYho9TKBuYyZgF1tWw7bgg9yXd4SkfUZcrTsTLaPQH7B7F23GRYbJT8rWdNqCL4wYppz3P6TFn6WvCztK",
  "key38": "4xYAVmRcU11YVQawjdBFXnnvZrcjdjEqh4agdUHpMEupwxm4gNF6BKbWYwQBEFjNmaZ4fUuRLjaUgg7LVYnsWDU4",
  "key39": "37rcLkMBpPEddwBB7iGFAfehMjw1kEAYv1EeteRepLxo6Cr1svynYxQo3V5W4oE9svMFkuB5xYpWJ7n1e3MGKhiT",
  "key40": "52cE864ReSWn7AyjoKDj9vZy2Hwn3qRERGWnHhoRH2v93bm3gb7gpvBDcvAUQ4NNiNuNNM9c7PhwJQKBN7yh1udR",
  "key41": "5edML7QeExn3T11JARix2q89ZavD4cnFZqu15ECQNEcrExxdrsR1RHZkZqeeED5hpWgj79P3kUXeyehUP7aYSHuU",
  "key42": "2UPcv2A3VhY9FtKfLVdc7kcShuJtYaT3Ekfg1uWz3gYfVJQsHGnhtH7uk2SP7qk6K35ZLCMrchQFpL5ZrWveKN5w",
  "key43": "5aQFcFcVrzA7ac7FsYTiEaToRbq6S9A4UArbTDwzbqhpXib4aB8FnCCD4kazad6Tq6N5kWoX75q1uf1uKoBfmGpe",
  "key44": "vi7xt3FJDjQhewqSKfTCLGY3d37oJRUguFy4DjvYEUX5FoBA6vzd3wHGmnbkNTKQ4tJG1FYTyTFiEsRVWqrur1R",
  "key45": "5mHFoXZfzojBZ7XDeBiZ2Kq2BqkVVErwi8UxuPX8wqjz3HU6LcVbmd7okiJJSa4YNfRdXqodBv9W5wfdnVapD8Fw",
  "key46": "3NXeMr7c89sPZmGe9w2QM71wBxc6B6fyxzyGT3sjh9YbUTkubkGT8LWAh9ZZWrQgiCQwXvj64U5REuxukto29dqs",
  "key47": "5mvrRxb94PpRFaPNEk4UdQr6KJGLkHBRjoPGjC5Xp6H3F1qa3fJKxaP3MTzXmFP24uVvZ45WaDXRxr9XFGxk3izW"
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
