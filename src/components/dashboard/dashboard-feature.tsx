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
    "47kdP3YGYdyGGkS9CAmJWPCCs8ajR11TQ72KFmV5S6zJuhViYDwRVRswhZuXf6zfMJ4y2dRc4HWLiHpMhxBazxFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647GVbbY2C54hF4qTYfeq3pJVgFnH3eT2xmj1PHhoSUFUi1UXZs4766cbG2AGWgjtE2MCqr73AH2RgUXM6CjwLMB",
  "key1": "4UXwBukMATQgQnCbHnzyTLUBHddZujjiEJCKtJyC8KZSnvJekk7RQtGGqVD4heLJc1HXR6FzMGkycxbwCpsuAroy",
  "key2": "5uDk2mNpjutzNeMGzdh1yH4UiqMXQsbBKQyTujfiMAdrjCQHrMADvsVhY58H7gvpuer5QvBKJgbr89EKhVDRpCeb",
  "key3": "2SvN9hBFzQjrmFxGD95vec9ScWLVncnx4rYcTZiJFZZoQJB298FxGecWHTvxChsfDftxTXiMULfnbjhiXN8WAPB6",
  "key4": "5xsyxdNtLAZSabx1xNE7qpkRyhxp2w4LKiLeuyzeWhQVNXHNUuRXAXyeSPH5HazoYeay34wjAgmvy4Y2JMKrgZRB",
  "key5": "6442kqrsiZoGqNiKpo7AXC8qRAAZSAKrBypqUvYpReuYrth3FvHHuinDuUHFRENktRjZAuyb8z9LzNPJ6Jc8zC8v",
  "key6": "34ZfQsy12kHw4hPGur6EGT4y387kmLE4R58kMosGLJw4j6GJXSuPk1fPDy4sYbMmf41rxmPzqkvCf3nJrUdiKwQA",
  "key7": "37FPSWs5HVaioE8LP3UUA24bkx355ZVSzX1fhS3zUdbexKiw3sJxrvEZkLDepaLZjiZwVF6hEayeN59y4fsVCp2B",
  "key8": "41HAzAfFANJWn9AHjoRwJAAseRJvkE79L8rtXYYTZdYqeXRipvMCktbzZZ39YJSZ5CN9etC4zQT6vBaN7fv3LrqJ",
  "key9": "2v9p7BEa9bBNdcUG4FotoGLdrgJyd8VRXbxtuFWuzjDdNchvDxK8Q1Vr43dkgqGtwPeV2wzpb7X4tDx2PUEZM7qU",
  "key10": "4KTX2RG1oVixXxdQ6hvijnY1iAndZ9eFVvJNuQoUF5VzZb4arLvjQogbedYZ73PJD73fQQpxhQPFWjUHVHoi7kqC",
  "key11": "3acCAq6YfngcvYVnXH54MyE5yw2NtaSEb7NDUvPXLmDPRHFggFRSUe6cvETXoF5vxMdDAjgooFFyt7YMu5Njqj1x",
  "key12": "EJLm7937aFUav1KUxkMS4VfDN15c9TZK4fT4A3XD71hvMj5RfibCYAnnae8KMh6oK5kaeQUjCiKJy7Tw7TR3E5r",
  "key13": "3xU1WYf3zYf6ihjdV1h3bwoZEiWqBLYP3LXJ4WTVMTJh6NnTfJ96pFPa2RaXiJApsyo7WcDjtgUGwotTrjDr8npX",
  "key14": "3PFWw3QVxZ3uLmsE8sLe4pDrg8AeAKTGyYvungbTs1MrHoXXJkR1mYPZF9dAwY4TihquFFNqRiT2oWGNkshUey8T",
  "key15": "5Yy8ZgVS6LRJjKprEKP8jViQR4rYweMNrC8BxivGvSnhpoNLZe9uakJv3pAbBc1UAimBodU8n31qbBjViAhcoB1E",
  "key16": "3eHUbNioXBgQHCh4goPcZj3HUPGRzK8hxwC6zbdzgy3Mx2b11z2u1YgEEb8aRwtq24AjFtVwGn6bcASVUn2Q67M8",
  "key17": "4Wyyb821qhec9v9jAgB4UVET1Bsyj6iRnjhu3kGdrHzQH3MoERxDg5wFcHPARkGj7255YWWEsPu3KyaXN1vbYpyr",
  "key18": "4P171Ec3Mx7BWVJkANUptC1Z8E3EhWSbT2LpSpxfQZpnJAcFAEXPvnwNsY8ZDGntdk2tbhKnufV7yP4KPDqdFMck",
  "key19": "4xoGJ1TL5uX77MASRBsGcVUKk6Lphg6pEccReM2DDqubc7bevgk7cd5D6xk83L3mf4F429jiACrUrzraCFWAoA6x",
  "key20": "TpG5EsjPpFnfYmuCKGvokh8goznuWrCaavbtqSpx9o7No1C1SPpsNJpstVxf7k2umteCwYbPTH2Po4wisVDvVvX",
  "key21": "47CrNF1i8kqcjW2MhNcJkcm5fMi5ywBzxibuww2enTkbhMQFbxEuNCypiagdKtTDmejqC73bwA7qzD1a8wZH3QRF",
  "key22": "5pjxQTSAK7C14RK2u3sgFTD9x7v7hJcvnAhhNUS7YKtfbpMQcNhKPQGxUf5YgFGBdtKqNCT9q6JqLrmqGNueKWP2",
  "key23": "W6JdNbvCS8ZDsPveSVcfxJAk3xw3HxrW7xJgyuH1jpA5RsHdUdYM8nR2j6TkeJG7iingUK5CSVXnaP4jCL9FNz1",
  "key24": "67Ko2GQ6Enepi7jFoBoCqf43Bw141xHzjXe2bymGnS2EfmeLBXZKc2PGnXk8jJ3za1JKYWGgL2jtSGZEiQC26Qxj",
  "key25": "5hU1HiRHdJiaVvdt9VBjKa6xHG1cYpGd53RcYwY3eDtDfS2PnwvbZB2U29cBZTNMRcdGY5o8D9NNBkqpfSYqjgAv",
  "key26": "Eyiw8JxFM6MMkm5BrUY4i6TBjuZNVDCSAAih952mPUNrh3wcZKH4Z7rojoRdUtxcvRAd7EbEnBuSSK3Rw1FyUtk",
  "key27": "3hLVY3yZmfNvGzCc5WHPuPmvQiLt2KVsHWpknoFjw32VpnYj9P8fWu1orLSf7Jf5fAuKQBv4StRKepGCbVC1riJt",
  "key28": "3LGyeDuWL13zEKZxwTwHrX3kVTiiTVYchtdai3SWZEE2YQoDzAxXuGXrZmdEFq91uwboowAetYYVKzNxXPE4U1hA",
  "key29": "21mcb8MAcZXi33m6uJpDwngJe3HWBgfk3EfB5UXfk44eFKiXCZWHvbMkVa5eeMLzhmbXiBu8xM99Wq1HxbZdge7B",
  "key30": "5Lk7s8AKjXk1vrJeNUWVwyQQLftmGWBkGBQBc53Vj4twqXXaGdxxjkiH6LPa9CFrVovAp67odSUyZjX2C9FVwb9s",
  "key31": "36VuWkJSYkFnHstfTrS14z7T1Abm9JX67UQQHLVgC4tmLcbMjnrH8RUMas7ysyJ5GZjA33g3wYmoBdQfAUypPwoW",
  "key32": "2yLtd1VzsG1sW7Y5LpkUkZ4VGNGMxLxRrNsjAdW7LG5ArD5gsbtxvLz2DRiSJvF3U7DkUna3Ty4Xihgm7ataVNfF",
  "key33": "4kYsfzpDSK5qirgxUj4f3sQzHVcuNP8z5tCtBRyTU9ueWL8dSv9rLGeZy92g2pWG5XLJDYM4f5ujVYL5Ypb7wHS6",
  "key34": "2Nbyihd9pChbd8ZPkou45xwpFQrRQ7KuPpnK6tmTr6arnvGcgPQ5SSXgcnCj8Je6YmdRwPDAvMFwuhaQGurWF3iy",
  "key35": "27VmBLZ3rbpwLFdrjvBQ1aL7HdLxo8HdXJzKTiggxcpxjTMuZ2NjR7eTmjxq54c725YZg7vDG9mjjgeH3DssDhNa",
  "key36": "58Xgh1paMEVfUd5NUaqXvJXJBAE6gSAaEmHLApYsUKJpbaQxXsxPq3NXpn9n56u1TmuS6YJKHFWSupPYyEtQ1MjQ",
  "key37": "4rgvyYvrCc2Q3kjM3XufoaXFtXLSNR4nC5NMtX6Kf69SmY2YmbV3PwK18AmfcbR9GTePwzqcRZrPQhsu4EhofMF7",
  "key38": "54WUn8tLKWoYUNEwDuef2YYGMQASSZ1hmrfMmjrLAfptcWUCTVZn31Qcyz4B52puvu1HBgNwJaLgqqVSfhAsCd6g",
  "key39": "faTJpdFFrWngwWNdTVG95sVpR8d8nAv9QGVopvDTpuLdPPdkXY73cSJJdiXgYtNmp46rtxQ3W2CVM9CEXcDK9zc",
  "key40": "3iQp9nkuqsypQr8AqmvL7cPw99nNdVZwXAPhLx1EA2Knup6SGskqHHbshrKqmCr1e5fiXhGoVGpHoZ63RhAr9Urx",
  "key41": "2iWRmhmRHpFLosfkKh6y1Looy61n9qS1WxRoNYzrT8ri5kdr99JBYRdtESM58b9EzusrCDbbQh6ekmW7uC5csov3",
  "key42": "5tfcupXmjCpx3kRxRES7Z7KSPgJm1GUHMB7LMNhUMkEUrUyxFWomeNKSj8qpQURHnGVnV5EqwPi49SYtRJmjZfJx",
  "key43": "45RqazrccLEpHgQLVXxguW83r1pzm8XntonNx89jK9qTbE9aPu3jNSreSa1WHsS8HTwVLf5kB2axefkjYjxESQSS",
  "key44": "wY3KPrdf35hkm1abrmspw2vMpVt3aPJpKnMHZcjbwoMqPewdeHsbX6MY8r9hedjrc3HZ41vGcm7sxCLN7hDygqW",
  "key45": "5nombDE5dsRpyUUSzh17swxNd3GUf8Z5DKXFWzjTnyVWRHsWHJB5i914tyuwAcurLoRJr5AG1JvB6vMk2c3radY7",
  "key46": "d9boxpRJkbvagVKnXAdaxhDkNrszEr5sPbyNmvXqftBrz2HKfoj6UdpfmCLu2FdbmuqTPUzu8tezVcda8zN32ps",
  "key47": "225NnEp5pdiXyhsp7LAiQemseMCL2WvjcMfeQbe2XBPBAwj26pPRfZc4b1ePiFjiaN6rH3qR3fkPEDmuWANU9h7j",
  "key48": "41aCa8vGsjmZvyesyJK7wVvBykBvMWqvkaCNxwpUhi94qj2yygJKEZX5baYGCGHSQv7Y1xfLhiJSAM24U1ZuoCuR",
  "key49": "tBFrFEEhCsGUdxssVxbhk9Tz1VK1AYDM5fKqeYzQCsg8MjmvxaHW6jvNa3xqtGrWDNoUdREoJ7hXsX9WWHsAjjv"
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
