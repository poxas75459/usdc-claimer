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
    "4cd79n13v8oipVmbuygSy8Ccyqwz4WAJsBYoJNzn4jS9HdFCi7XL725Qn52jNzdXH3WwiykDLnzrSLr18q1prfK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GgU2rcJHLNLv3cekU3Ji93uDDgzPYFuJvejuJDxEo2p12Md8Hew3MzS9k79f8MPsp4VDfmbVfwC7Ke7Z7wB1XVk",
  "key1": "5XcPHDcEJP8mbt6hY5LaMDp7t6HcZBsUDF9vzNrqjfRRjJ97c7Ps9iKKHYiguCzZJRmXSiBrseBpX5ZZjM4ipJv7",
  "key2": "cj15ZbJJqnb4DQmCxysWc334PDSJPu1WrrRRUtwLs5zCz9hmvkRvsGLcKZiGhxqXFNYG9HagXhqg1CNaH6NedHM",
  "key3": "4Nk1y7Lb5ijdr8GYY2Vaj3KegiUzzoXpSHfWL1PzF1EcP5hgM48qRmRJLPup2iv7SLj5VrN67E7Vhsheaq82Dh1q",
  "key4": "P5aGA1NvNf5MV17FUsxR5vzEEsaFnhbL4KMshTzoDTZYQkMVUvgk7SwuiKNDU4LpjjFfNxr9orvBEsRyrrL1epS",
  "key5": "59ZWLAFTCVG3dBk1JUeUnb4Yxbqi9YgcjTgjZEEa1uLki1oNdhNmmQRbYxeknfPiMf6XYpc7r4iwaLn6MQ3jnBLa",
  "key6": "2VUNSETwaTngDELgfCBZaRqfwcpaJS84APfnoMDc7qEkPf65rdEetQosUAxYKtd1zwutzYocvRdkVR3TeaL6QfMH",
  "key7": "2bbZZzFQ71TP4MtGtXbgesAgtvvAAE7SXXRAo498gMbfQuXBSeeWifT5Cj51zbnGRMNHRhNEr2wToXL6sk189pXb",
  "key8": "3sAZssF6VkJJKZp69iLFcBafbQJj1t5ouCjAFFbqnUiTxX4mWUQFfz8vjvUF7Zf46KNZgjpKYYJwfvkk56SoBjaU",
  "key9": "2fN4oLkHx2R8ihLosgwwQZdJMbxJZM7kvHvoE35tf9Ht7WHGEa4CzZdKEctX5MejmbkUzLj8kQffPn2Gg8DegjT7",
  "key10": "3NWVJCXTSMMjTocoXBSDNpKpX46bL1bSA2gBy8ZgiZDBn3A54DBw4sLg5tEgrjTHeecB1ntvecGkaxyQBzKT8G1X",
  "key11": "2EH4Rr1MLUEtb7tqb68AazsTgrwZShqNX23TqjyWiJKvgFYftpMX4YASc1uZK3b3LJTLyNt87NcNEh8ZYzyYiXpP",
  "key12": "2CVN1GkbDa8GRyGhuBHWv6pubgVZC6LY8rJrLUUk9NooAPaRMVy6xR6shcDTb5mwYSeC1dxnupsZv5tNZc4D3Hqv",
  "key13": "5WoQHRcRMXWAtikqnwPXvRTuwfW6qmdc4eeBu874vSTu3SPKP78kRPuY8QeV9z9BnSd6XUoJcNT6uDX6tvbrcKBr",
  "key14": "4hGY3TRkfAvmmEXGwuGqoZUF36daoUT81sjxqdyGTZk4nVrzq5omWyNDDFhmKLVfKryf1a9QMX8RCLLyPC4Tp23F",
  "key15": "2cY8wvQaCMp8rWJf7AFbkj11RYWMoHdyCa8p3ysnjBhVahnSLctQrZnpxzJU1Wk1QTZbpnrRiY1Q72MNjvLcCJb6",
  "key16": "sdqg8uu3xiGnfBGwwVYtnnyj5M4vhbMSeZvgP9amefJLdFcTFXneNuqT4n8muAy5i2pSfkqSPFLKqo49szHqqSV",
  "key17": "4FMuLAN4rfmWBZWmatwsBjAMpvR9fQHvMzC6Mq7JfmRVxZnhwPpjBFJKGwZek8yCRucChztu7udXvWSY4neKALEu",
  "key18": "3ZF1rXuGEVjif3bG4LU3Mj2ZXDPzE6ddFdsGgxLb3j53FbGEnMm5LwFCoQ4u5CBx3Y1wL1sUSuVdvqVXM2d9peqq",
  "key19": "2KdLbQNDkojFGfjcC43uNQucs465BHta1AG6SpErSCpqimG3C2Crtex18KFHGtbvXCqiFRKC2gXMUqDfSdCyUdZX",
  "key20": "4WEkhjLo8RQAp2tGD2i5HE9tQhQWLnyFZ5HjZui5gEmqAX8C3Hq3rN9X5UZdW7acXGxMSB7thFhUQ2SfgpUUdExg",
  "key21": "4z32W4mpifeqnW7p2PtpgtabroBdxVbDyxrkpkMQfy333zkJtEfQbZwBpsETr8Wo6cLhAz87zLhs2DSAoQDYEU6G",
  "key22": "hPM3nKoBwNZJw8ckBsVFe635fQUsYmvGqb3MYYyUigQEfEEm5GHoegXy4jL2BtGVY1ZHTb9r6JemAHZWCfdRn9H",
  "key23": "3xBa5EehMidMt8dxEHcdeVSQghMxXfMgEeLkFzxjTZsJjSYbNYvBeGscv5QMf8suVsxu1or6FaAf8nQwzEVK1Gsk",
  "key24": "43Nkae6D9MZ91aZUsQqLGKLrPZseSHx2BwewrQz2DfAkp8iHJ6NDS8awAW1gtz7JJe4HPsUdpigMTbdNqFskBc64",
  "key25": "54qSbZTj8q4zDMPRGJsEgDPNhL3uSAKGEjMgezCx6d4LtYAQyKBnadJktQV8UVzmeWvdc3aKWzUcZDi5Y98VdbaL",
  "key26": "24KwZfM6LooWgpeSEdPirdRkwkrUeqBHHkvVrcDaeTJHZk4JBGnQUML22A3EcDv5BDnFJzmNC7oMFWTTGU54Dks3",
  "key27": "4vua6n5otAN67rRnrpwNn1xbTSRAAmkeMQYEp4rEQHDFkkWHzp1T1669KjTt5EmgjkKNx786xcBSdngEFbWZmbeu",
  "key28": "2qjJBtj4cXUQDykU923zdad14BXZ2r2VMc1eKhw4Y5iNqzN1psykNDPRFqVyWunfeFjsVr3ebPqzAc5TPHn7BeWw",
  "key29": "QckmgrxgeYtGo8wEmoW1WUcpWdDV9dZ6S8g3bKiLg2VpeEmPZyeVYXXQKC4MCmRoHYT8qxjVmnSnkrAkDQdvA51",
  "key30": "3cPxowzkgLn8Wc8utbxt1SADLnkT6wJu43h5TsYXHe4xaKrK4sHYHPYmtGq9DWG9AhYKAt6bvk16Q4pXG8GAwDN4",
  "key31": "4UB9DoCRR68YWj4rezpF9CKboaphLSxfAvk23PV9YKanNG1GTnR17JHtetLTxQJj1EDFvPF7wW6HWtq5qcdfY7Ve",
  "key32": "2nMunNdJ64LAXtMxdxHe514qgF7fo55Z8XDEJS69z5Twzj18PbF74AJ4KGmu7akFnpVY3rb5N9rDmCx8izfhs7Aj",
  "key33": "34yQCT8qKoQYuDFFk733EVQYvUw6Z1zJpGxTbS65Cy6tmra4sXQ4j2qvwDKe7hUp6w3sCBNiPQAfh389DhCg8aGF",
  "key34": "5W1UcjBJt2MTYzvfaxBfKguwCua8DhdvoZik3zexqsAw65wTrYAbhgA2rSfNVS5dcncGsy9uJU8LWrMT8WdvdqBQ",
  "key35": "55mF4kAmmjEJTx1BZW2UGrTpgQ1g2DCbpp6zgc61vprt6PLJYiybBkTRXfGHjZfzVeMt6LxT6YKZ7SPP9aBtJarz",
  "key36": "4swS6sSej5uHAMATyqUUuRyXbNR3TpF85x2qWqwbVrKcZCSNo82Q3iwuC23orGgPsV7cVS6SGECwrvBpn7sBRmTv",
  "key37": "2wYos76kALDF2EwBuBWd8MHc9wnvj7tKimgYnZUL4oSgt5siXanAduLU2GyStAjkyNYKaNHg1UePNBwJ1PjJgTS8",
  "key38": "5TjZtwdy2dSUfrcE7bYgNMnCQR5Pp8qTaQG8krtt5nmYJ4fBpwmV2Z2QTvU4h1AKj2pVu62iXntwEx9EmSEU9KNv",
  "key39": "4GuKGzK2oyX2eXChoxJqjWVY8jeaKPxoyDQyyAx8hhf3GkybvXRZa1ySroL6XY5GEGiJAgdYPGs9Qa3vuYU43VMx",
  "key40": "2fpCqGRVb6gV9vnN8mttdJ2nNjueCKUhGaJrDFLKgYWopCMXc6YZHbEbmRzvjvMoFE2kn2VAZ7VJyYeM5JJhPjNh",
  "key41": "LoiupPKYAJVgW5xmVx4ZFwikfYsLtvH32jcryDmMXMPQ3Md6HdgyFCXjV3qoGGAB2RLKaVZPL8bitkEq19Fm4DC",
  "key42": "2WYTPMTDn4SotsRZ983mY2DJj4HbwDTpcn4msGwLgjSWhgqjKFKc4DY2AkSNBbCxh3krDNvYbetJPGLfoqCG3ACQ",
  "key43": "212YCveCfApDsEM1u86CH8Li7StAPm9VDRAJtS8fqgRM8x1qjFR5GFdpkhDczYoBPKehWYacWSU8qoJTbxPuhhxN",
  "key44": "44NTE6d4KwYo7M2k9SU2uE2PUtwKVb6xtTmUJe6Uh28beWgoHgv1Lywxv35k5n9vciBWMfWp6mmqwLgcYTN8oszC",
  "key45": "51KGwGCz4Cbg7t1yCEHVVwkBuu6BbEEVC44xmhpVpEDbnrK7LpiRw6H9pzp22CpGggYaN9mQygoFQGhPPkbA7fnZ",
  "key46": "3VimjffTEn9ysHzSPqfRM5WwCH2eBUUc59CSF6Brc3v8cS2God4decYikEdvAVLueTJENGmCB2YNakZ9QSA1Ftgg",
  "key47": "4PvrwjMYFdNjkGvbsasnnjSM3JJeruqV92wq6k245QwaWE8xzMVgrfPzKDGYawiT5JJV4YD2LcA2nxJJTNMQ1LzQ",
  "key48": "sgRpiVYsGBHYBHZL8Z8urkfMk2aUxhsTfBTsDgYFWMGntkaUUPzJWXBPfY77fCE1sY1asEJ5R9pfK5hhf8AqgvV"
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
