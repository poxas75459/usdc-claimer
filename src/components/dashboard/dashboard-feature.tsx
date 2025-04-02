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
    "FMPWaMVJUMsrtf2WhznX3yuDmhP3RSj1RdFcvLb5iE7DE16WfmhRxC1shukgnwDVgHTNj5Qv7X5DbpKS3xXT9Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6hwJKpzge65yfnmP3D3QQBuLspriqQYqC4MHVzxZRVdfKfX3T3Lxs19FExVbDqaY96zTJbxYEp2qgt5TnFw6sJy",
  "key1": "4HEh3TcUEeL7Uv1Bu9PRAg67HDGyyvJGVuco4KWMTMyHobbHLwv8toVhNhCyxANuys7TM78XY2PCpLfKN8ximu6v",
  "key2": "39JE3s6obaDzmdTuLb8iYL4qFgSxYxrdgNw23tZp8RvdBGkznAdLATjm1zACGAu9wdZ1CmLYER37wnYVMnyBpcS2",
  "key3": "2HTRWTwbh3zgUZ7k9xYxK4RJT67iPy5sYM82DgzthTf3zGyivcLuUT2MNFiy4cXofnc7dG8ggFFMUbVMqSJ1XBRG",
  "key4": "sSnFSrKMDxEq6c5S5Bawa5rR2KqrtaHgStJiVHPu6VpcWphcjja7t9L2vbgP1RAgWtPaQAHaadiNCsfzzuuHuHq",
  "key5": "2cf6c2iEtrbNvByWNbtphq8LEFM9fDojx5w9wfhbpgfj8VU7DaXzz6ucw6MdPFwQSyA8PQGpMMSvAdBT7MqboNrM",
  "key6": "5pN3MRQZFDeAJnDuNkJ3bARtf3r2auY36ELqw4g2V7pbGyYLajhe82W2f2XESEXCJtnSTgEM7fJdpAUcVSSgzPLf",
  "key7": "4xHSd8iUVhg6GzkobbHvgfHuqRXsmZ62p8fSv2ggCDjDLnhqcGzLmeria4LDoUDNVCk6gzCAnaEm3LQr4LypvD7Y",
  "key8": "ytBgAYgPGtvQxN8yYspJiYwLcWJeERPh2RYbQ8gtZVEsZSzWnVcbe1f9onKLqcdEV84qP4FwmV2oudyBhA4HJoF",
  "key9": "37qGDXYkZt2v2E1RR1qYsvj9Bex8mETgcuNpTfEadcMWyF2T4UethNAxzgVZcwttKyxVTwLfEXWJEutMdT1LcQqD",
  "key10": "57E5mbSNaNFB1XTsdPz4U46NB6fe8F25x3g5nEhnzY8JHT4nEd5iMfEVJs5tR43Syaf7FSn4kcmKcc5E6Ppm3N7T",
  "key11": "5rFsXgBe7jLVsVUFH4GauUpeo5eoCA19MfZU3xH9SHN9ohDUh8G2ERumm38PgcZ292kyMSqjpr8Sgwz8RjqziUsa",
  "key12": "3zvH1CFcUJa3XYoJqbwAKpkf4AagUusxSPBjWBYM2wyrvM1jVReqWF98KDwkGiUqjzpL1Xsv3H4QaaJmdwJSEJ8t",
  "key13": "3Bt1X2ERsVJ6fQCxwpj1QQ2NZKFs6pa5AZ7UbNekR8xxsZv2ptMrvr4NrhmnYNRNCxwXPKSDUZCXuBesovMcn8dW",
  "key14": "aD5m8AoLFMiWVsTzxDcScosb2Qyk3kqdFJBVYXLqkv3p3FVag49nRcRPY3QZiaBZtpduaDx4qdReAfgfV6DRvdn",
  "key15": "wZABXredPris88JwSHo1ZKBagGD9pjzdsmSP2tnQWja474cRytRrG2Ni1aCCHDMi7vT7wYhDeSSEaz2A1WV66g2",
  "key16": "2ctM8FZ63nwRpv34H6tGZC4kYtiy7Xq7kitMKs3iuFKz7MXAQohZcu3MACCexHK9DtHk7rJX52L6CgUkuKxE4d2w",
  "key17": "3wNczURExWWJhy73TGSp7LnZTdWpa5svN4pgj5Myvv69QDeAURY8kEJPm4hBPSWA1nQUVAKZDsXVUBZ4vDuhTzKX",
  "key18": "3nwh5dbakEHqAm1ZNFevnhM9adTpc7uB8cMTX3gWD19jxzU8fYfWmFmMuLSTrY4ZrVW59FDruRnSfb1pH9typ64E",
  "key19": "2TZkeoTDs3kqRZr9zUaViBHBtUAe6R8GYVrVo97Z371BDAMhG7BGKaY7BxnGDxQUHtvEmABfbxB96Ev1R2oeFZr3",
  "key20": "4x6drqnjVwE77ZX9oe47SCY2CKRF55XUXW6cpprq4xDyBdZNxYAK46HbemNkxy6UsiP6jvMgtLXDTt3G44ym73vB",
  "key21": "FihDhDMA8Ttyy1Ao4E5BdhXSqejbZY6GvFFbgbRqQhs65uXUEP6GnM6EzaXtABubZf8h7ELzwZwLQsknv4CzXzd",
  "key22": "47QrDE4vJyLLFM2mxGqh9dR8HDFa54pWRmhwRRYiqL3waJtRV7i95UY88twoUvdzi772gRESTcAy5eS3SbNMe3Z5",
  "key23": "3eChNN4aTNma91irUatA4HbtwkjLc2gpPSmUNFhjC9JXheRPzUTynS88rE8hnqRfcCzvQR6K6bpB4tS7Sm5xJE6K",
  "key24": "4AZCFtbMEL4JAWhWzuvSXAucH8HjabWf2Ea59w6Mc7eEeceKWjErgpiH4oubgkKcYYygGrvLHe97AsVa7sa98UCr",
  "key25": "587NodvX4kUDGCK1xBq5X78CphYX9mukErZmEftD5JbmNfjCZ84k2VGGJkMaRBNcdbEFMAy9sTsnQG8LLGbebvvb",
  "key26": "23ye7j7NHrmqLty695gJb5RFRtArEafNc9p1K4AAKn7TyfJDjGPi8QGbPVXk1tSqwQMCJNBVXD42h4R7xPfXnaRg",
  "key27": "KtFbjngMsfJogMHNfS1s39khd4T4Ad6u9xwhJc7njTmxF4ELuSFyZUFE3se9iCc3dhPJxrq8LzoEvioJG1HGVjF",
  "key28": "4e4uvWzUhcESyuEXkpBPrWpqy5GqyCQ3GbBwobQ4Awdw8ouKLgDEx4UUhSR6dePsNabND7uLyT1DmnJG1XUyxDJ8",
  "key29": "2r9dM3Egxr44qNHevbrXw7YnqPNSKxHHZ29pSR2TKryYEqSS2isLBQZpMqD5ZkdLwSN3GsneEJ43ThwqWMnc659u",
  "key30": "2hGnJvLSq691275wQQng3Rnff8rrkFS9yWVgi7nNv4qkcqBg6pUxVV4g1Q3QrM1jTMYhPVeK5SekMEwZ6buFtDAd",
  "key31": "2kToUvEJ9C4d8KjGGPvi1XjUHx44a4dvmGak6CwgeQ5q21tAYq4ru7xiRTL3HLCNZtaCNpvJkfZNiNs77hmLwPut",
  "key32": "2jfyNinzWVMjdL2PUDLMwWfd7aLhKZ7QvBHbLiaPBtWpsk56qfVfNueLKpJ9fcWQLYnBLKvGpvmmv3B22pKtNHTz",
  "key33": "4H7NHTcRniRP8PPN7vxY3uPae1CurtAjENCMJjA1LVCjjTE9zt3jjkwJ7CNqx1VVECq9etNQpf19wxpggQbbAnWW",
  "key34": "4ePPV1RwwMuY4YswSVPyvAEiJvJRFeauK4DbTMLmf2FydmMshe8wkV9SNsYEpLvVgaY9WEMVbsPCVyha4FYsQGb3",
  "key35": "3zX1zsqSz5jcdDMnkcM9M5qXgkY7VqGoXyKQeKz2uyaZy2LwA3stpuqE9aMbQb4BHcZaiN6XRThdSEEDLCs5mHqr",
  "key36": "tbkjFZKo9SSC8rbG8ETjVTHW5TJrcQdzSZZ3DNh6pMAr9QZYNezhMN2n4w1rJ5c5hWLwT3ARtnXXf92U7d3BmNC",
  "key37": "2RsZvR7c9taSsLpm98k5LFUcmM2Maw6XH7xpt82VJ1p986fkUTvPU5YXGTzL5BWirV45q4e34H4MwitWYzozAutu",
  "key38": "2DNdUb7AS5Gu2v9ikvKfCwQ9xr4vuQfrqVDPLvw6HoBZkVaYJA8cE3uzdesZAXGqGifJQMGyQdDWTjQ72QjbZyRy",
  "key39": "34ddtdpKrKNi3ucWmZXgjKpU9HFa8a3XUWQN23Ke2ydruuac7BrRza39tSA4YyMSmpgcBp7rLztWGXZxCYwYZTVF",
  "key40": "AzxpEx1xfMDg9XJ446Ecq2X3EC6E6dStNuChh6rChkTCbdHPLsBdVFT4emnvSvKPRhctf35oaxyzhzagN4XdYGE",
  "key41": "7ZrDDYrLJaikad2JLfa8qoHzAN8TXFtS2y6EMbz8qDVmF8XmNuhCw3Ds9RvPf9DeFh72hL4uCvDTqq8jBXj86PT",
  "key42": "5kuSCjShXJx7cBpHCqZSEpHmBZsFBkvPRxpkMEAgVLcUzg8f6NX8BMgenJKcJT9FmgGPvYeFoMgWds49d3XiCKBm",
  "key43": "5hbD2rUFcbHJRN3pn3ZMvFTzhr8NonDEi7ufNgZjdbL6HKFmWZitvsvMHeJ3PDEyKzuoaAVXGGH2dHfwrJLyKQwW",
  "key44": "5yffJ7W4LPFUDE5fxooWrWG2jvc44eMkHCpmdTVGVCrUR5pY5HKKfCfQiZd21VtWC64PgxENsvQMcT4NiDcmJEJk",
  "key45": "4ip94JY9YbkHdcARu8ksZTQQ7hceKYTxhVZEyDjvfpzTNWDNeE421uSPabxBnRocCrUMvHQFYTK9rz7Bb14PgNEW",
  "key46": "5W4tC2DHu7rZP1A1tjVTjvdas6fxPom53bnsaT8tq1hYGUz4BAAvpEmQeiVSCLkuGYZFJ5SZqdVgg471vfacsrAu"
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
