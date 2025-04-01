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
    "4ajvQu3QC7rtCermMVgqFNNGYYdHRqJdBGZPuG9HhSJNwgHQNWwhR1hobbqpLggaJUwMr491pZjhVpEW766Brdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ydMyrggUh5dejuTAc2EaqEDMHfkGaKFeg9ywRX3v37BiRZHwjRa4mCzqKeou6rDgmGjjiFoGtej37t1crvNTFzm",
  "key1": "2k8RLCPqng4ZUXbsx44cLzQBGbNnGk7a4bfwMJRjVFBVfxfekY3ZieK972EwpWty3L4xmTzxdsFSXmmXwMzgsfGa",
  "key2": "2H33cf2uMSho3phda3B96AbPc1AknabpNsiZVjVcp5JCxFT5x4Fwj4jy7t6KHUG1jrdz5NM94CpfyRHdHuSxorW7",
  "key3": "X9J3iyW1TxvoXzemJf3YvpTLTwwEykJBT8bWJsaVJ1gr2eaECW3R7aE7THQvMKriAYqxgQ4ZJYgp14FFfFKDtJS",
  "key4": "4Pp2yTCU7yua5kfu76yngxe3n78AnyZJD1qiJNiNNh2tu7WPVUjp8M4wpe1G2iSwrWXCDzXG1xMTRGPT5w9NBCwq",
  "key5": "4FCVSGv39B4xhPGoKG4axFEg5caDdzsKMJEsTNzoiiX6HFFsZSKG3YUHGFLNAXGrBNPHK7Vtw1fR9RP7FKFMpmCh",
  "key6": "2A7dopcPF7qD9F2h1sFGyA3THgMuQ6qzazWcJ8Nx1ZMg16JAvL785ivuF47mrEW8N8foh525AGKM8KzWYp3Wh6RF",
  "key7": "2rkqGGbe8XCoFav8Ey9wMXzCZNurdJxeVCeHAMwTXWKHmxs6fxv6bGB6NpZAnpLzZe6W5DrP7V529eQtFbZKYCyW",
  "key8": "3dXV6vixYuVYsLzf6GLxyLvXvee9FVcscvcmkwBK2SqD7Bt8mzu1Zpsx1q5gdfMUZ8KxCEwLth4hkeauUerFqeJx",
  "key9": "4udTXJEPAtYr9yRKUSsZ2zSSFLNS91aMrN99MAeJgefToSDCo2JVnzvBbAU8mb2zPFShywQAZTNKzpUy4y3xL7VK",
  "key10": "5fMzxYXoyXEsENHuJ8mDYfDsec9hWedBDUU8qjmQjuQimFMLWYxmceSQg5yyocykJJEe5frficLYXDXR2nVmkCGw",
  "key11": "62e17YHLKeF3U3oXpySLuPJDdbeMrtnT1cXd3SKUFYKs1WDDdiNFoLqgxVidHyk8mCv7DR5zrdsHhPHvWfx9fRej",
  "key12": "5hP2anFYjo7XbMFuD7zRcLHFQZYwF1T54aDH49ny9ezcfhcdkRSk9RoJ1NLLCQNS718B2ufuRAGoC21VRpzqesYD",
  "key13": "pL1uaUwrBp6dDseJxciXDQzfJKUDkZSHGGVFmPnYLXqW7vjYn8qs1NTTxLmMnikjauuRWB2Trv5XKYDx2QQoyrs",
  "key14": "2MuV6NTBBAUkEhBzBSzjf4x5M3TxTJxFT1sVqJUaKfvT3HTAWBgYfwMiBY99wvBtvSWrq9o5iFJGJQiGhV7SwK1t",
  "key15": "4PL1cNpE5MnN6wDzMSBZsCzbSrw9EyB7mhzBLJfAnFE4WpkwAmh7foW4hTjS2WMZrrYifxFgxzfK84y7LVjok9Pu",
  "key16": "4zHACBAoz66xywsQw9df28svkS81r4i5F97HkSS62DhyyRWwVbT75nGNQxjB9by69RSxjPLxpPkc2KB6dVaNmhnP",
  "key17": "5qJQUrBK3bpH51WiDQjrsbKvcdJd65vZRJfaZCzBCodRULHYLZ2LPxCFsVZJGSwgJjccpiZWZRBBHFDxE915D7BS",
  "key18": "5AbqfFNMbvGzTdbGYmrKaHj6QEkzYmp5U69XYgsvw6AvpDFLuU4SPYEqCSwP1fb43kamtvgkSitxUfezqrQnw9Re",
  "key19": "bd1BYwMVYgGtU8514SpEcPnsM9yUBMY2qS7CgsSDPDQ3bEaoEMjbHmvhKS89oVX82voDnW8XRGWWEa9iD1s1vU8",
  "key20": "2DRTCLdo2H4LGTcWyez2xJn1oTv8N6BxSuN2Skmp6qmRoP7KVfyeUGoi5TmsmyjBefPQhcZnTtP2JVwQzqMJzQi2",
  "key21": "pXYKBhuXcMHGXiucqBn1U1fwF3LAqfqcB9eW921QhzMFowjHEf5BegJSj7m47MGmz44dWPEWZvsuU8sNc1ZUTte",
  "key22": "2yqSFVdS1GxkdNzMc1LRb1r4w8LiwtWT6wxgiFS4gSvjMu3tPWbxnVfSSq4fXBiEYc1HQULAHgu87rWq2E7Mtu5F",
  "key23": "496aUdbWPhbk1rVy8Fk7GAab9DCCGR2ryEGR21DygFYPqijYHhmju9ZxPaiE3tErzjokdc44FH4NhmMfLMq18XgX",
  "key24": "GyaRtttCrQVsDEFM1JcqvqWkbfkUsPRqeEDtatTNLPHecEdE7XZ1YJuy9rmxpeoG8nn5j2bqhNg88MqFvkCfGNP",
  "key25": "4VV599JexWuHmvhkyrbDTawe2AxQLNczccnQ9Ys6evucWb7hK1SFipC4Vtpz4GmLnoC1gVmBcZDMmV5kXv24JxHb",
  "key26": "39FpXVULg2izQDaFnjLR2UXCxEgvENaTgZxxvfa2PD22wQKd7xfEC3heh7g3B7UiQeRN7buAkDvdfoRDVp5PiGia",
  "key27": "47i8fHcuxUNrJp4dHtGWWGPCQyL4TY6bEMX1hLfmXBZb6ufVU7vfSHyghHn2jK8VTV7gCXdsitNhtFV75Yc6Bcmu",
  "key28": "HBs6gQrEJXVPjhxsbzBr8Lz266McouHxqScKWeVS4xmy9BKJZiU4M1chVHm3wdsCjVHLBd4peXYzwDGTdtP4hei",
  "key29": "2bUyKUKP4msioDHZEskMarfGjbwygQVe4mY6KJYV1zGeuhHy6ScHoA9owAHETKJMi55CBsmkBo5vZqyCtGFsAGDD",
  "key30": "4jEyvYhDxrFg2uJLsSRnPA28Q9KJCjzuhq444ysDhWVuFqjrkNm2eKeHUhJuzJtyJH1V2ba85qTY6sfscVXrhbtr",
  "key31": "4gyRb3gJC7PAN52JLeg5oeY1M2CnEx351bgdKehr4hJnPgJ38braqQ1ZrsEnfabHmBbrQLf83mCan4j4Zkn6zLew",
  "key32": "2SpwYyRzs86hAxUjfkyD7ZG4nXoxjU5ehTpRS5jFtLK5ng15Eo9Kz7rDbrQfLjiuFnJW92LFpCA4HCdYNJJdCHN6",
  "key33": "4mi3Jjg6so6xnzWZDPaAuf1GCKWQ8HGep9P3wHYVbimUQxKMQGikm9cwtrrkimuU4PJTRYDxp52E8me5Ue8DYxKX",
  "key34": "5c6hwD9P8Nvpw9aGcd5WAKFuuRssCgeGW1Tfh16VRuatp8JW8txaR7unMqEys7s1i8Xupmj7go1s8sMv91285HKL",
  "key35": "VdBnc1s3WnY61QKnMCBiinEmVT1oZ9ieJWNSEysaSPXZq1s6Liw4Wwrj6WJgxEu1hMJ3HNs2DxWPakLwCbQ5mDB",
  "key36": "4tkpwhv55SGSG73PtfQ2WhSGauPvFtoykhCw2zJhonG9eVrTxJxHxfmdaoN9U5THGgCjD4tpCzqiQMkGsGLwKPxD",
  "key37": "FcjQPaqeqtaccVxzitcYugDAFsgK9S6WML57y4TcWJz5LhyyZHRdPnSjLG6B8HvswRKovqJGKf58yJv3hwopkjA",
  "key38": "3cvaPzghUPXvLr2p7YoF5cLRNJ8jZ1AnMXud3rPx8PRvxa9kqvjmGNKWegCpY6YM19mgPoWw7QJqdSYSLSAKgjRb",
  "key39": "4JpFYfd1V4LsBHJ21SGnSs2BiMnn2aJp3u8H7BW8RUD3yhNJnMx1uRMpBdNdnjCxbb6cCXcWyXgN3PotSPjSYqMK",
  "key40": "4XY7yzEx5dbfMDkdSLGaHTSSR4MoHidyiRrfYkrywKzPJZksU89qVUy3pdczcUxwMGsDqUk6MJC6KQBD8ujJRuQY",
  "key41": "4zXmcXYF9VeLwNqYpnLYp8GDtPCjRgGtrSgpkJEsB2y3KDbRMRxzSgLquyXRCKodkvi5QZuiN5zHwcSk67RPFFkt",
  "key42": "2V5QsZasAqjYfNPjHHsrNATmNPkUadxBhhW7CQS9LYfaytmmK2njHjFjYTbkfGFiXRX4kdYPcMsqiTqjEeHnGHT",
  "key43": "5pjNvJ4jAGf5gbcfLqnKKApPCvnWw3PZ8Th7RRKpTnhQRaw8n5ccMCz59c5MCw1otR6sZMXoxru6SnBVkM5cNJ5S",
  "key44": "7YuD6zZ3nTcDdN28a4c9bgVKFtx5U8hvmyXGFzGda9QAcQtWvsYz3vj9cPMFvib4BDBt3mMJDBWJY63XA49stqv",
  "key45": "5pgF92HXMLo2DmxG8X2xoGTe6w4vtxwU8ves8RFpRrwP5PEzUqLUS2av2ji38Qs6ug6Tr6YVt9ajFvFBmNcSZse7",
  "key46": "WSFwgjRDkuvWVaWE8LGvbH9YohdGD2UckLesun3QRTy2RF62FeKsiHyuwPjai3VXU3fyWQz1Hidju4mGAo4EfJq",
  "key47": "4bgPq5vHSpVVZkmduhsVwfW27rnXTkaRkR7qGAw5jbnymN8uQzc5xoJA8aex4Ld2aN9GJw4ty5pX2NjS7ABEndDm",
  "key48": "5XbF7vUoUuRcoKAgitoagAo7nsUnsUnNeEJ5o9ZmTmWNknHgTjtZ7kHRuSXbsRxmQ14hFUne2ohZDYzhSmwKD8JJ"
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
