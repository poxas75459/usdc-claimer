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
    "3pwd6QHWPdwrAmCN7Jd4DwyTNSmobXLDJsBhFJ1bqPwLMb52RLpf3WkqcYVFVD79CakPLRuUA6HGixE2b3gPLQy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VJFiYMgtu5ZqJPGiQ1vMZ8Gmb9BjarZoZShrJUc9iBYEejuKc6Yu3F3FyEDVxVsZif1gxTJJvqaZ8dUHdF9iMqz",
  "key1": "5fxqbDybob6xg9WYbbjpVLjfecP6qwwuA6QSpGNHC2jnDSVRyecpv9dQPHWMfwcpqpRugdWtKPgDvQ3vGG555u17",
  "key2": "2YZZbcUnynqRtj2ZzkU26534dqq2vRuKag5xEzhnhS3CsxcvrmY28kBdEvjGU6cFyuxmZ78neEjADUN8yak4VMQC",
  "key3": "36KVKuJZPmnTECDf76xkm2PZGA9wUeBra2Qu91orq3FEae3MVAgeUbmu1qtbXcrwkQWhxnB3XhNUP1oFzNxR9wmU",
  "key4": "2Xo6aDx9PC1o9saMKtgk1nREE9Vmr1DaAAzqG5QWAMW64Y4Lysw7qtYqqW4NHS5BeDGhdnEwcDwpmcpV93tZFPtJ",
  "key5": "2ckz9AdnwvMffUUPvEt95XwPaH4ppAtucK6s2H4SbGQiJzP2SHwV1i2Sw3xB4giZ5iHQ1qtZPuL92zxvoSWFnJ5Q",
  "key6": "5z6CfB9QBDFP26eX9YUJ8D73w8Q9VUD5iLEAE39qJuTuYn9eSS9Wthxtith7KxpoHYqYtnemc3xxWfZN5HDQqXRm",
  "key7": "3BJsdmDKkAqW4HAfcZddzTAKdRzaRyHXaGyCoB66aBb8o2CRa4AZA1ZwsyDj2MzNc6VVwWnYALUCMbk4tLUHn6oS",
  "key8": "5eTVR9f56xTu9v9bau3yCLkjbKx1LiLp4LXtpEKcusXahFVcnCy7oEwhVCiFbwF4YGQXJ4T6JqtWJR92cuGFgivE",
  "key9": "5QpB7VQRBuAMCLdSkX7Rx6jJ4bU3hRGN6xGjEWbfBtZXB7x3cXWz8Eg2S3GXyZ8uyf7JcYou3KYetgQyL1FmWqdP",
  "key10": "5wzTy7YTnYrsSZCRSGmWbcJ4apT8idsKym8YE5cAmjUcTNq2D8mAcA2h6bdLSDJoyxJgGQfzEJSDPkMkKm4KHtfU",
  "key11": "594XGQb7HDWeHohMiTt4kgGMqKDD8R3khGqVpvKVVWsZuLcaVYdxyEwusbbxa68LGVnTHQKC4iDjMakiLLxQmzkz",
  "key12": "3avSwBXQeabzWtFXWViUcEShzRXRmZge1D8oZMvd6SdpbrfLXJH6vzT2fTjH38LZSzCrNjbz3yexZreRiy37dyVL",
  "key13": "2K2UuXRCrKYfJsdx5tpruZL59RG94mBeuf2erDyvSXtkf2eHjSEUQX6WXq35GoXUye9k7zPuu3mAMtWDp29Yu8a",
  "key14": "wcucewixdEZYgbtsi2pHFpExHSTJYS53nXPMGYZgb97XqCqMDoDwP1rK8rK1znQv1Bcjqxidnaf11bo5sBLGKLV",
  "key15": "5rEDVbjFn2DvdGrsw2yNPytjkUrmKHrBJezQPE8wFnhyqMJC8yDS8fXYAskZURwu26LmfaA8cMGZ6MqxkDPBwvWo",
  "key16": "5Yx9rCq1HR1wevHzhoHiwtx9hC7vNh4dAVEhVsMcLQVKiPh3zq4pM25zbCZzxXERhBDBa9PrQGdH9qhstdVeaH1C",
  "key17": "2SxAhVbWESWyivqvVmhkVxv5HZU75Uht331c5iCVRiRaLMydBhtVSP7Sq8ehwc2x5Hhqx7BCfKghqKPsPAsE7XVx",
  "key18": "4iCELuSYxpjG7iDREJ1qAMP9jYcGs9PHuySnXwm6epMQdfk49ZbfTvt5stt1uF9WhSxiHcwPUfSwregthm8oh3Tf",
  "key19": "4fSyRj2T12QSbGKEdqRcWqvnytCiZB9e1pzMrs1P8YrkrBj7bNSLnA9194UTB8fKERjR5W2c6tAky8CaNvkvb5js",
  "key20": "5uT7X6as5nGTuCUppCww4y5rXfP5aNyYY2GhU7FSvi6MyZKEQKwnj651Sko7MunJUw3nw1WU7oKkFvywp2YFot2N",
  "key21": "261sUCi7HYt3uGjCW3Bt5AD21vcaG3R7G44B15bnc7bKrot4eDh2cC7W16wv9z6eYaZFXCVsTCazQ1jEgWJtud23",
  "key22": "612HvXTZc6aCCVpmoxUCsUJ7zTHW19xN4tYKiut94TvoXvsSBG7EfHrzkwVTCKGjV7sDAacAJMTnxsk5zrMLojSn",
  "key23": "5MyJLaeyR2rpnZJb2qTdYz3UgVgTsTY55dmWiMVdbPaJxAmWSPwKErApgkFn1xYhFG4wuPhSAvvVjzDVZPMDZ5q7",
  "key24": "4hzUhXUHov4fkrTsoLDVgtQ1W7pUYLeMNHXtwWBWkxz7gXzvk2Wse3SsHLt2FCNLm5LLE4HC6DqZjrBpTzvZzZHj",
  "key25": "4DFBt8C79EP3Ms146FXaodjoDdWquCNWAKKNR398tGRzwULAzGpfwsm5a7FaRGkSA6w5fzRwA9MP6GWJp9tZRD7L",
  "key26": "2JfCgfLpAcudP12u2ttDN4iymfRTra5La77o683HC4y8nGcWuS2LSdLTmjQ44VFic3MxmQh566VeqSdHurKhyBks",
  "key27": "3oeCevqL8yoKybhZyBby5y45EsmsimGULBz3PxJxk5tSuGRkD8JXPubnyYw4KLoKfkrnEyVdMRHmYS31gnQN95yY",
  "key28": "2mzCFmTFWzBvnfoAJQifyAdHtAik84qfSGByui5Y8uMssQGT4A8e3yzDwStttcy9wMhHZxyD5pJrvVNvtr7YZe4u",
  "key29": "5pYgzjkFLQiqZTDYtfwy9BuLADhNh4yMrSb2MUGEStfJxU5gxoMmNzLbPCDLB6QUn9Aq4fxf1Xxws3KmdReTJ4gD",
  "key30": "Ga7xTpEZxsrwvVEsRFvEAZbuCvG3y9ujYXvbxYeLB5rmiWhykZvZVTvgaWCfePwjYMbEgaUJJeP4qnNMrbT6r3U",
  "key31": "3YURiGRrDHuQyEBaEbNwJppJuxH2kBJJ49yyYwdrAy9aiw6TeQ3VnL7ZYZpzeQWnaPXjr2UMqB2Qu9arwD519ax",
  "key32": "9YAv5zxN378MLQhyqinkkiYf3qDXoau4PkAakEhp6q14iVm9ALK6DM3ZQFGb3yquxUcazQ6rY7MDQujZixJC6Lt",
  "key33": "4n1rxqeFs9GDiPbiHkXsNbJf86BnsfQpKSDsgs4XBZFYnAygCTdKZDCGN3UiFM542rjBhXbg8DKr5EaN5tJiNS9C",
  "key34": "53KgQFVPX5fxmbBL6a7psbaxtqdzL6nvJmGgiCpdK6AyrES12QBkomsmWrUGCRazBBcfLjnLSacqX8pi1nGaE7xY"
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
