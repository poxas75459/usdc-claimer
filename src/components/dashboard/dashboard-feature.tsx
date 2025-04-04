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
    "5N68DQ56SMApUFTqvYuuB5a2ngKcmVVxiakuF8xciAzrntcdLefzjTJ8WWvrJJjH5TM1pzCQVwr6ujAWybeNBANM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o8r6HxxcYT8kQGrPnH7doTT4uAoMuM4DGxBQgR6X7fuAWmjtxx4XAnDYN4e5UXkuuVRQHyB3RSxpFgsY7jUBzAd",
  "key1": "4eFNHxAUdypDa1xEG1wkj8q421VXv8KbkSVwMq5dwM1viue7bnsUpMTNQbmDZdj4uMkJt9bDtnjLt6UKF5c7FSXY",
  "key2": "4W9dFgxoWcHYJL3BqCWrpv9nGbPdDgLpmQgNhsE2QzSn7F8Gz592ZQDBDCQRZxnE2C3YhfPJrS2jyWXqDa9Xn4XB",
  "key3": "aa3dnTgBhMtMsHuzsxKrkW46hvWUKus2CZ7NkUPFAVTnKyZH6DDCfdxjrZ3DqhzkmJ4qcfp4Mu5hSjUYWBGt8aa",
  "key4": "4vTuq3cqkuJQ8AuSaFhuNCPKpBPjL7YusWsSdrqHJjrLKBPB3UsZtp7exgzc8LyuGz1VUwbySS7zGiHYjZFuTa1h",
  "key5": "5uzXPowLXPND2e42T5Qjr8ahMVkmqBJZ6aD63KPS7yjKqwyH1ZWwPg7cf7bXC7tc8ScvQ9H6pBF1tgtiajDubQAi",
  "key6": "55tM587zyGnhhGhwJ1Mr2Zb1Vt9DXzzR7MrSp5X2Uf2vkRiqvv2okijJumJCJ1GMmkqPKngVLgNhj3pbBP4aUESh",
  "key7": "4Lrmmz8NKDnmS6gyuw7EoLkxNcr5hiEL5NcTgaVqhvkX99FmxQc4y7doixQDEzP7WxozaFYAgNfRz7puivARhhdS",
  "key8": "39aqDtK9LrS8NxDoEho33QCaXNk6kh15oAXccw5ovZWxxsvPY882hob7Nv2bFJe7KrZNRyBndzj8mDNKMYAUmpaF",
  "key9": "2KXejGiiaV2kxQPW9CqbqzyCMiq5EYtQBNLqyqzchikQKnNiok19x7tM4a1UsJM4TeeUVY4KXec4wtTnLyTF92Ze",
  "key10": "5ZWsFgpYBZuLWU6yaZbzYEVgUEX6MeCt6qxopV1LDhhj8uSxoghwuinAQzp8ttcZJeij3GXRU7ds4yPUZdfsB1Mk",
  "key11": "4zw81D5PLDxUWxTE8hJ7x1xsfwpZTU5k15i8jPidZUBTb6jfuwZJxRwiZuoKeb5UnrPgy9QG7ySU2u5nqWLV1TEv",
  "key12": "49XHELhVWPf3MUPmW2vysuw4Zu6Th8BVRRc2D9g53DJgUf47QBYB43GV3n1SyJohayj4Xx2E9u5mksbq6UMiJAz6",
  "key13": "2WisqfA45gJvNu1dNvymrEfRFp2z3xdqtSUbKPeAMdHkmj9JTtyZJ5z8PZVDoG8TToQNE49qSKmzXVKZxNEwCaaU",
  "key14": "3d7G34RjtjxBBRZYKmqjn6hKDZ75XpTcrCXrVoF38yoYuqZujr54hsd3vc7m1X7QFvd4tKUkugcJF47z37Pz3RjM",
  "key15": "ofXLh7TQnEobGe2nEHzqjuFeRVhRu4s7NHAsf3rHTQWAsSR1dZcmnQMqt1vsiCH2XD3FB7dkd76kjq8PV2EwQcP",
  "key16": "662WnGwh31ZJ6XmnsWa2UJD4fCPQii9jSqsoGmsqUdwRFyFrm723kBW13yL3kUJ1eNYpPUizaqEDTH64dGZMUav1",
  "key17": "31zRLH6sz3FWskjDzynapaJu5M7aRzCM4E7T7F4bmjY1SVAWjAeQvdaENanehft5yGKojtTYQzFRHvzAdEEBLHsU",
  "key18": "4anRhYpg5Far19Dio1CJEtvRpyKGTGxqjMWn5AD3KWjjwo2QWitDPZVTpxHXCoETjQvqk25q9b2VaCs23vafuEpe",
  "key19": "5qF5jUfHnhXjKZLQXUJct8f9nKGyfUt4rhFuCsbaGyrAZCsvkKU5j1eeQ8KSuZMgPyyjj68H7M8ABRBJcSqztxFn",
  "key20": "azAFjimk4s3ccNkXS5wcdp1LJPtFo3Jf2UUP8pD4A7Ldj2TsptPh6LxLCfjEikm3QHCUWJ98MzDwpR9RcNcoxez",
  "key21": "44E6onhyQEaKhVpuRzKzvnPwiovTJyCoGGdvgMjkfYp9Ga35XnM7hq4912ZLLTr9NrSSyz1dgSxY8g9vKcp55Gnz",
  "key22": "491wuLoLnof4kTLiDvm9t4ZcMpL9SWDnENgHbBcXp9krjbACFJhVJW1Boj9mR9UK1fiJhw9q3uQNp4s1uxYbGWM7",
  "key23": "4TMMbxWhNkF1T8wLWyf9TtaQjpi8YTi7AkJhcvj4DrhMzW33qiVgvoNUmCu9NDVcEMdNYAu6DXeu5MVWPpsvZfAU",
  "key24": "4q7WMA49495Z1W8Zdc7eyC4LzHWX78FXPiTARo79FmPM6p5QHDAhvY5FkRkLH1qZsMKAcmnF8buncFZC1yMNj9c3",
  "key25": "24f8nMtNRGkM8GgNVVFrHYojPPrtwkKRXbk78kM66WoKD76ELVmrQEA3v4E9FbPiTvQ1NYi9PRaqpqtApad4vDa7",
  "key26": "364bTHWq7Mt67XuFDepn6zC1oMjB2n9RN19opiSQsKo3po5GUpjfs5xZ8PAVQwf95JmHsdaHT3yuXG5xUY6Zwwc5",
  "key27": "4Q9wGK8nyGWRrzUvjErBoN6qtxpNjotQ4aa1ymoTHHfHKnnLcs7cc3MVJMM2inJQYTYeWdHSEy1kEYBeFz9DJkZb",
  "key28": "3Lt2hzjZdwT2T3NKBMFcGZ5pcH29Vd8TC61fUs46fwqiNGPAnFm9YXLWbeBuzrw9iX2qqG6KStwmr8F3ueJxrwE7",
  "key29": "2PLmt4YtfazJymuHKXAuh46MzCKyCcSTm6xWwqqwAvvMMYUhDBcNRjDAtuNukPdAmWtWBuqsFGJZR2EjutLjGpov",
  "key30": "3yYC2NHmqFbByGxtCMSxauJSksUVTDXNE9JWzKm281Whki11VubggsKF9XodK4WDJpDvxeFubeUz5JbHiH8B6HCc",
  "key31": "4S4KiWh9PHPawXJSP7vxzBpamTbkdpfyLa3XRhV3cErrfiDHHxMUkTwPtg8LbFsXQo8gWmKHzfjiNji39WJRvx5s",
  "key32": "41iBCWVogWagKeQmJVsehkej93rrJhB9uMSM6fWWXhSa2i1FP71bZUREya3GmsBVWctdw4KLGiAtRR9C5mTsRvS3",
  "key33": "3ooxWRZBL4xtTPZ1NhsiqWFbQiRqsyCAWQCYQzRAvjMBX4D9sqK6wJUDP584oNi6RiMYtYw3hd2M5tkoEa6K5fTm",
  "key34": "3BrwR3FGBL6FoeLcGCHuGoG15SjcrK9GozpQvJ6d4K9BHZq1p4QPXxo1yZx74J6Fan59ADqiLUQASi1xskcojinu",
  "key35": "4jigpuouUof4E3fQ4gRMF4YE19Tibx8xWnyTDptUydksoFQiJ3zjHXX8zy7Ss8oeqAxUPG4FkpfNEAgXwU9nGVC8",
  "key36": "3KoViJdUHMLgEbnpXzebFUmc3SHPZ2i9wvvzVy45mzNVcBXftdP49JfC78vvGBtMrtgLABNaz8kMR4QPthdkxAz5",
  "key37": "519W7w4EgiK6fe9e7XYce6To2u99XkYnVGZT8SxhuQMFD9tHUrb3ykz7xzko8ckj7njVJGxEvXzpNby5fmvNrpTP",
  "key38": "qYTHT9duPNJv9o6F3t7UAMMyZ5ic2Zwhu72PCkWQihWm2pXNw8h548kq3bcHjmMPmBSaZ9b7Y4v66VfUqpxWmvY",
  "key39": "5ze5xTz3muxjFKmQirmSFTVy2YV5pmiChDsUwxrMyRubEu4v5gbyUvUG4mh1B5KfaZygqzVf2aRbxNQSHtAPV8ko",
  "key40": "2gQnuim7tP6oH3aucnEpSy4eddhWJwHnbhSu9r1cDNJDwKZVxHKKQnt9QHBiwE3dw1MGM73XBa6jXy1traC2kNM4",
  "key41": "oezELtxvhhDKdkPJt3D2Mz7vSGA9jEK84PTrQjYKCo9VbBN8axwsR3aGoH3eBqNRgeUsyNnR3CyPcBR7Bgb15tk",
  "key42": "rqQLHek74SFLFDrGvPx1LLvA5fUnhAF8JB96CrgbMMG8Vb9cJX8PuUC7125grAdweNxziQcYceevCRzSTLmih5N",
  "key43": "2ms4S7YXjFjEokFWTJuV2WCuo3CmwJpfTPnKJ53DhWUus7DEwNjWcQpWbe65fDfGjGHGUEtPFV8mfSUMomSm77sX",
  "key44": "4pNiHYj17P6TStLWLrAp3ibzwYENJ2qbMkcJk2zPsfUQ6qQUUwPhqDtdHSSbiXdA4nrFSiXw6Rjjw1DtMSA6LD1k",
  "key45": "2aCdAyiGG587xEnsZ9YXZnmHAVmAsGvcKrXqeCmmUuMe75G5QeC1mdGnF6h6BbbZA9Dn5HkmUiqwJeTzQurWE6Gg"
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
