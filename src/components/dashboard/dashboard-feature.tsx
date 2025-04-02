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
    "2gE1oJBPLBqzYdvfobJhzr8YFAHgDHALaBynVXAmX926mL1kwRxUvJ1BkcCi8Fre37mW6ugtn8WNdMoqQSEEir9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RS69zya5QSUXuv4BsmwbA6HgVANFEmqk8G3meP9tAEMU7tu25gS7BqAWvLPXyJVmfDELgeNLdMnnyrwP9xcXzZv",
  "key1": "2qRz6UBmcYa3GzEuBaRUmqNhkpYaZoJ2KXXdfvWhoVisUkqhsxhpexYKHARrd1kYGTUdLvh1Vn8GoMCQdvw572rB",
  "key2": "3CtmnHt71xMMYgweFyoUgbjJKUoWGY2JAw1zx9mcsWn1FrKjhPgLHdC9TqDYYHB4BExK8LnvXedrMBpozHTbQEML",
  "key3": "2wcYWoJWpjxkjFSAoejWtjZsU4bRVJpRDLHPkTAG4XHzociY9MnnGPzbuSVUcg1xWbLaxHb1o4qSmpgA6V5u5mc3",
  "key4": "4PzUpnqSi8P2XJs49TdNeHz415He4Lxqk4oGGGXvVm2vfgqkggCVbbECaTKRJWJiRJDs4SpMp4pcxTcoCed8RCpW",
  "key5": "dnxPqdRcBNc2YfZorVTY4FXfZ2dM6i9S77Pfat9DnRH97X2e6EKZKdP3kW52fVWL6jJQD75Eu8HShjFQgwrwuRG",
  "key6": "5rMQ7ywf5zZWZMMHq2dBiVrbsmjcKNWvbUr642oSR45TbsaD7ziVgAVzWpYfAM1JB4qH6u1Sk6CsguWN4Nri11HE",
  "key7": "4e3GTTgn8SBxWRVt4q4qNH59dyPyVJLdUeRP5ogeg6dBF28wtd4ABCUDs3L9iwfu55MoUeVscVfDaChP8yzcKYcM",
  "key8": "42z9WaA2fddAp7V1ErVUbrq2oQAF4yNnM3Y1pyNvhD6gnKJqP4TMt88QfyZvXnUufHyk7P8HApc2fVRGMuXZMto6",
  "key9": "4J2Tpq6hMfc6bYmhh9uhWVZXyyPK2ZwzUrUJWmqCQ8VyZuCg9kaUqrKfpTbYP86hgrtW2whwzNoZQfwH5mZAE1kn",
  "key10": "3QjJQCQuVepmjroGXuhpF3tJUjj4rkQGsV6J7QgLuVfM9Eg9YPuCE7cEBJbqQdDxPaRCUkUVnfD9bK42bn7odmya",
  "key11": "3FLu74gLySz8CKbHwYPicnCaBFYreihmLUq1HLDjWQ5xvqZK2ksBZuMUG5Y5z52TFKEEWpBUcir7ANg62KzYn27v",
  "key12": "61zFAtf4gNyGbwdiQW7KKMAR5X9h6HuE4QZdV3nUss22Laj9uvA45RtEJs8cHRC1WP8kLtCaCZ6CMgKF3snyS74o",
  "key13": "dN5TeQLq8kkyx2FdyK1fN1SrReqFtj8fsY9M4avVf3MwzKfmSGMgz7X5E7ikowHRPagttMZGiemvUpvDrU1wVA2",
  "key14": "cFdZM9abBDX1fMkqp3AwwUwJFzAPX1HiTeWFWZAspQEikAPnn7X2ygpr86KT7DwgRNwb7ev897yRGs5x3BDW419",
  "key15": "3BDN5CjMaDUK5Qxnxy4hkjrSFdSkadugqcnkiU7kUPkdiNP6RWWv2kMMV5ZgHzMs8mSx7xmWiHgkojVY4ExoABur",
  "key16": "2rCusMufapwY5uNtMTBc9r1DZ4iMEvWEdHxZD43zpfPNCPj6fMq1eDf76hxkq2hzDRTt5MewdnTzzpy3DTYH1kbT",
  "key17": "PEVyZ7nAnLWkb5VC5F8dfKUSKnmoYUy9Kn6853G25yMP3NdFt9aM9v1gVhr9D7wEsi6TMUvNpqpBxCTHEkJZjYp",
  "key18": "KWv5jEkBPBxmnPneLnmz1BseR1xFcxHQcxkHhDwgbKrFsBjgkPeDkkaB45CLHJb4ALMHgj1EvUQPQ8iGcGHgLxi",
  "key19": "2DzaQd8rtiXudfCju5Dq6Tn34ExqTT4Hxf2bUcAAJRCPqidgEBauKFBVYxJgiDYTqWboC6Dz2EWA4YhqSsGsVW9F",
  "key20": "4YhUSjEicbGJSvWzx9qZGA496ELnABJD2etUc3v2ooSAXY688aZtZDDxKddPaB4Y8xgrUvGvKC2gBXRrDQKEbMX",
  "key21": "gEgT3c5TjLe6fhBy9Md73fWemNazvVnqFkNFeLP6dkZXJboYdfbrghrCjM9Nw1eoKiB5QEfxeYHMUdWxLGfa8u2",
  "key22": "5msf8MB1JuxVpY1uL7mtichq9zdL7YbdkeYKiSm6xDGhdXkTegfbbaUHK9Zu5P2WCrhC2CoMWpNx68WDxJwq5Ano",
  "key23": "5qtsXNkA6SRE4yYHW9Y3J9iSBczm3UJPYXE1V7Gwtce9HVE7j7K4Dwh5wSA7sXYNYkQwd1JifdNxpfbSyL5toUmC",
  "key24": "3qyf6BuyFAN7oZxc8PLXEkN2f6ce9WJxpACHaHEVewqU1FyHa87u3BXYuCCzqPRpLD8kCSybeAZqsfiP3JbHwtkn",
  "key25": "4p1x6MjSpqDfYPccTxZ3cxS4evVbDuwEns3qDMNx8vipWSRP7RHp2pxsbYqFdKTdnbfHCbZUz5vGwL7tpc4fHfqS",
  "key26": "2LpDHcRZY3hqx6BkFjjUs2p3VMyNBEVhDVgWZeJubxvD2WdK8zGh8k4fDBea25uDTEAxrPtDFFa78R6kvK3NTJ1U",
  "key27": "2ypqgKV5y7KDeEVho6vMf6nPWBaDJ9MbpztaSEmr1dhcU5p4uSPdQvndJJEKSV8swrLoFBWyt2JBEi6x8YnoqwbS",
  "key28": "4ipcEKoRtGr3qKDyQWXskM4B6Ji4qqThkq93Bv79bfDQEQqQBVmS6TmXqz8Gp1HomHGktGnm81dAgrMutS4NVxz",
  "key29": "29PKy4FeScxJjGRF9UipTocA68R7n7CNcA1iXvDrmfNTEPL16MNF8VNnHjUVJkoZDPJsgWmoj3R71ySncuJw1xSF",
  "key30": "5wKnhhSs6javeNJjKvj3aZ3uFTRx2CdzcZxZXQq5YBJnWsncwLCAzP3y2Wi7ebAuNn3zaH4Vr7aVxfB9ZBaLFdBx",
  "key31": "5zjtq9pHWst7ebyCTGyHhgK3ARLaN2gLC8QEqDWtqVfKuGtXFfYvJXjCKpP3ibj2wmbN3gEVz7bcNX2k6WffaVR1",
  "key32": "5tjkHqrySk4jobSpnQgsJxQC6BncrZTMuEfMb19dzFcLrnn295NrmFb2z46rJ1wt1H9wUUB7o8cipCUuLuL6gAw2",
  "key33": "4txeV33KNQH68ZLyu1rP9Cjh9eTJLayzFzPMKHo4vM8QS14suDCzpRGRfsdhAaK5Kp4cTtuXkFH7zjqFYH9Y5V7D",
  "key34": "2cnUoDQnLJsHvd1bmaF8ersFrKYT8GpWQzMLXCN4YqGEqhEZPZYD4nAQ8nLRZNz8baHFMjRnGZya6ukLvR3n5dNx",
  "key35": "4JCf8J7RspKFMgw4bAXodDLG3WyRFaPjszeHPh7qwfaNXY1nA3aufiWjyQ37HT7qTHzVwb8EZnSreFVh4TrdFdua",
  "key36": "5RnDMnciSSq8SnCgA4wvwM83HttUDvJH5QLp7yo6fr8BNuw13JrueMhkP5rMD5Sgen3txbLtebScYKzyhWwKesuD",
  "key37": "3DVgsZ3hWr3WHhKUsrJV1tkyCZK8qfikWF12o3uandJYAdk1jtFaFdA3TNCZFc9unQMgqEMKMqQ2M4s7JtDiDUzB",
  "key38": "3FKUoCPnV4mdven3raUpNt1ZP16m2ViwVXMeX2BoBwnf682f7W5Ard1UFHrKknQhiKmUr1SiDoj1j6Nm2RgAGW3V",
  "key39": "53WQxkYpz9Ue3P2S8xhHHtK4MV6YrVkxXDpDUUiHgjBofNhfZDbN8r3Ttp7nSzWfJh9A6WYuqErSttpDWfKJXWaY",
  "key40": "rLEAeYCziWGTwnUKTxRefzqaVD5KQdDaWDYzS3UYV2BmMzYghzZpk6zb3TRH2mmJURemWFsYQqXBcyjsMvAaMnL",
  "key41": "43YY6LjARjB7srXeydWNgWqCVEaziLNW4xkRZE5BLkGiuCVCzyjFeAUSYgrQCpjcc6RJ52XaAN3rJeK7Y5waHJZg",
  "key42": "e5Tm7x3Yg4HtRR1BRYpLUFe6LmrMQyN98LNbE38RvKVgfqRuGisHPqELq7baADCYVbfhY8qszPQJaz1x8ycdr68",
  "key43": "4qUG4yoJRJa5dDu5ffMVtgz16L18y8bU9htuVS7KXYnkZ6o6cub1Nj8voiwbQjmMdzLbQBkADm5nW9XdsP1Yp9YC",
  "key44": "3uhNHV7bZ6gcaxQLsEt5d5fL7wNJPpMWr9cbZRkdQD5ntU2B1CCy2TWxtNBz7BiSesT2TfYBsZzfsACeVkqySGhK",
  "key45": "5YnSma8v51UngTpbKX3GRKU2yJ41Ykea39P5PehPT86zQyJEb8k5ykzuyHWpwEnv4JcynsQqYkVVubTLUQAroS4p",
  "key46": "37XUAEgGEmPBUHDoufQqzdF1cAmerhHz9BGQrkSqNQLH2AiiYYujqnbCnoBsUjyK6VDDYxHBoGss5Tb1ZUHRbRjW"
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
