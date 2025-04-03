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
    "4uz9uk4CB3pcvMuQ5EGNR1dQZyC18zPmgi1aV5ei3C7inJEynqtiEoTPMnJJfwBsRiM6soVw6rTSWKXbQTB3TdMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35n2Vx7K1eNGxqUVuEHhbckSmUDNkbXa4M9o6n8zdK8CXybAQGuuVJAyzQi8aitgUsPb5xYafK3mJxXHmLq38TRm",
  "key1": "37tDQVo1NcFqchHsRY3z9vsqDzKuX8MpgXFkJR39Zn6Fcm23gJMBbPcZk5EbTMzbpYd8SEFxWhQRsFYc2J1typys",
  "key2": "3Ey2xapfeHmMCAsHiF82S6wzXy2HDNDmts9VxyRB1GVebHKJsh4rifzD6uhJ5ra6Y5KRE4nT3Ji7z1jKA6AqtQEn",
  "key3": "5GY9cmdHeK658QofSp68KwCTR8U5u5QQNUWQ52Zg141RVNA82S4wsDxoXrry8UUZdoeE1nUBajs8XsC8nigv4hyH",
  "key4": "3SWUmChHXPA9THJFWNXYEJrYon33ujo37kkaXB2P5r5P6e5Ka3ZbgHs8qFasPW8MDhhpPLvdnFMbKTUBCRyCErZo",
  "key5": "2CpagBY6fetadht2HRtSia6Vsuzq34kNz9QZ7vKdoQKbJh5wTCGNUwHyjaSwniEYBiZ3DYYxNxR4UpxWvmbcUDQo",
  "key6": "TDJHHC3JWFf25mnEULzn1kMpdqJUtdGjmeUzjw9XpnK3tHL2JdsmBrmdSE9WzZGJvXdAY5tkJm1QBwYN8qinr3y",
  "key7": "5qAYg76Wro52DnH16KErCEXqxjcNchPMBBf9vLriDW6awJwhs81bVbkMBLpG6ByeyckDiWbppoBh3SnXUnasFk65",
  "key8": "KN6iHQGGvGq61NA2d5GmyYB6UGFKkSkzG3tevYa7pyFwLCni5VDeTzGcy5QDwofiqPVwhYK3b4KQoHcdY9ocQRC",
  "key9": "5WpvoUfuWn8NM2w5XW5N2NFjQRorhNFhw1hdmKuXV4JBVXh6W1tvDuPDA7fcCY11GfpuAoWvT18CJ8Xx88wVJB2V",
  "key10": "4Be6fexx8yVWyNAxy2EseqM9khmXWKbJt1jw1h58cfCRex9LCEPa4Fih8trBahvRBJf4rqYEqpuFTnU8i8ABWB5R",
  "key11": "52FLpYqEAgnQ8GdcLhBzbE2wboPfBQYwoMgH6c4z7m254Rhe6JMhUft6DoJtnq7UiJ3yiZtNiToten9DbonCYqMq",
  "key12": "33Z8AYzank9gMLHQpuJaLm94yRvXuXUHqajQy83H6PkBjefcf41ukip4fgmbEP4cZEXspiVkb9Uza7SEcZtLptbJ",
  "key13": "5Ff4WikySJo6ffm67jxF8dJeFQBgntj48Y4yG32kUKgr4SXVMwjR7sNPh5k7R1zGYaVDjHVsSmrtXtVZcUbPNfoh",
  "key14": "3yKT4pEyjyUkCj5LyqeJTKM2ysr21sBq7Gj8vEeNsFVoqkwun4zu5pWk79sEPvXJVZHSC9H5HBA5bYz5Lo5Ko8Qn",
  "key15": "ALKHMNg1nNEv3oTbsP82s9AuvvHj5AiGzx5QQwpqbpoz2PTLPh8biLpftuGpC9cAwZ981nT8qGtJRHsyG73bhr2",
  "key16": "2rJajKNhfjiKnKkbYDn4QPSMDcX2aAt56nHMzWWUZ42DNXPG1w8VzwpLgMDjUtegk1eQnhJpQZa4ZB96mQJPVM3h",
  "key17": "5h5GVoiYFLivVkwvpfDtJ5B8Nq3Hw7ntkoyoGJ6bSsnMpgWaYp2qf8nS815FNdKmZqzJBAe4uEkhWs2PXzotUKYN",
  "key18": "45RWKvA5NhR7Y65RS73GkwEZHek5Kc9Fc7t6mUEce3G5SbHk2Ji3ivPyTEqkr9D1AXCiCTtqBd2uQJzXcSyD9D7q",
  "key19": "s7GtWupQUychG5Se1kGTMT6NeqewogAow1DV8BkWZfFrEupzttrGDquwUG4zADvGRnJvpVYo54gmQkZuzBGPojC",
  "key20": "xJUMzVAmkwY54Xs3vAYfvZeUSdn9DBq6kZGZ3THpsZPVemnYLxuj8j1rsVp3aEJV6eG45TwKTBV1JzGgu3Ud3Q1",
  "key21": "Sz1kXkPbrbPmsV82AbHbPCZ2oKFcZnDFSU11vQJMCGPN7N7LtDGdEjAFrrKtCQbdyVpG25WUej6BAaJFzgqy7tP",
  "key22": "4egWyUERFpE7rrpTbCtCWNLnXhY724RTLwFyvyqbSfeoovBEfnCLBXxqDE9AXUhbcuVqYXkLmAt8yjbNATnrE9bw",
  "key23": "3HaLPtb223iar3H6VSKz6koXdbS54MJWdReCtNuJTdeq96QqADt9zyivszyPp7ufctVZJzTRSGbd9hLZ4kni14Hu",
  "key24": "5Vn1qzHaCR3RwQoKrKkWgwgxFJKCYhu5SfvTkipZyWd2RjeQrhzqKAczGzPCLEJMCTpiJSRWKyF76H2g2XJLmiFN",
  "key25": "2Lt4bnjBqtqiJnojKsja45XEiKuzWHMso5fZctyJ1qNKhEBYkEkCrhAMJtsinLmQzkFAjxacHzEwVsjcSqysiSNU",
  "key26": "4shyykRQktrNGxCLn8vAjZ5izfLBnMMi8nhdSCEzrzZKKNR8snpo2Hi7nX5NgnHMqpNuPiCkhXQr4KEeypqVr7MX",
  "key27": "2V122twvCHuSvketoaSajPtcM3nPoJa33VAeKy9BeaaqJ8esrftDL2qYUhYd9UKGpeX3B84UGWT5YqLS4eveCG8m",
  "key28": "3BVNfvUWydhBXsfhirZpyvV5tZZKexmu9rXvbxCmZNN44bQHMY41Z3gLeqEZyK9DEdmAmjtkGp9f7H9UsdQF6a7G",
  "key29": "2T1F4fR2SZjx6GVApuYFbe2Z3NHiSe2AzhDhUNhZeMyBQX8aKCc71AVbhnuFm6qYqXfEM1jVQKCMBYyav7msCsbm",
  "key30": "66E7ZG8RDLLa9dY1udh8ufm3JPRg1R3JtR7ZXpGZAxuDwTdmPdMqwTCpHiURSv5MeGJMfEmKJMTcKFnXjZRucKUD",
  "key31": "4bzEeftWhwCnDgqXt4DQKNMWXakp2ry2G8kJgiRMwhc8NoQkSYxSgnUwiK3qbviHzWAHpeipq5gZC4jJWjFvS95S",
  "key32": "3suhModE8EWp9HFUf1NiLmNUqUXAbnk4s933J3iQ2koWHqiFY79M5KK6V8CKMkW5ENPKZJ7xxQEzKc8QSxfbULiN",
  "key33": "LJbJzL1v5YqpKKySv4sTGvYdbiPnWCe9yNaigSxnaN49SojLGmQSKfN4nH5YFC5MiouMMvd3BVyD44PAjE2nAwg",
  "key34": "4DoP1BhscVmunCF3JgK2LG1bREetHRmsWrnFSHd5g8avMNPJ4tNDCcU6heqrcsmMeEoP2JDHnbcY4f9ejJZWgUhn",
  "key35": "61H3Uhp4dijCMnzrUdWngaTqKQa7JRHAH59Ni8ChFQaN7HcEnquLPmdVn8avHhEeVC7N2GeFbVNAKmxRLaQmBQ7s",
  "key36": "3mXuXZF4t5mucfNKnLB4MqaCQbXwXM3suFAGEp2Yao18mQBeukXChgNSo3GAi7WKgs33BuvKZcwSNoS92TyDwxjE",
  "key37": "3AQaiqXovFttwx9AgPtPZ4s1dwCXy99K2JKd2kvqzFp4VcXoKB7tGDcMrgvMEU7tgwwmf6rYpKpmBZLwWa1cqP6X",
  "key38": "39CNER17dj73T5LUMVfoM25X3kfkHLDaLWKEVHwj7zcCqiu96KvcztvaJ94wWYe6761191Efj5hXJkbJy8ZR2fVh",
  "key39": "5uMaJEVTBjfUWQxUbgBnnmgB1ihwBVgchauaBs7Qvya4wkpSfAegoRiZMgaqZHHevt7g8ocZuqn8FmRo583cNrxe",
  "key40": "sjAits83ia5MvMh7XzDKrPgJVCUk1zXDHoGSrzu6CVuMjrPSW39TCsKc4n9jWdzeqZ2kXHRaAykvRgPM3qTAkTj",
  "key41": "3fK3eThM1LPn5i3HAmgeXneYRUFkVsruv4wQo4wbRA9WxLKoyTNMuQZqoXCPdjDzbgvMNDEdx28cgBwRXhfjKRin",
  "key42": "3XriPexXsk9jiE6FtA393FLPuckT8ewzxajLT43WRkZKRz7aPT4An7W6MrNRYAxaWE23oQDnKUN9GAcDjqqzbMNi",
  "key43": "5QDkpttUgzsr8UaFRwdGseCDiNoLqzMnKmjDRyHHMKFuasVdUBfG1q5CAZ7mqWezSCdvH4ZUHsy2W7c7CABm884t",
  "key44": "4QnKeSmivrETNjE3Ks55rRwTGYcuj4tttYEhqpF9jzRbSD2yi8hnMPvLdQ2gvNt5uEghe8qxJawk1o3e8mWBJqai",
  "key45": "MX645uq8a2Ufv9vFevpM2rbZdeJM1FMesrYojYfhEb8souVcUVfnTnaiBVvNE8CNwgrhU5M14i33Phedp4xfhWj"
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
