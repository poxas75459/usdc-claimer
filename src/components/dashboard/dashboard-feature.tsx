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
    "2qcBQx97bS3ZMWSo17NXxzPnbAXKM6BWzXBXsAfJJR9DBE7c5pPz5qhud6NWCteRDUrdembQ1KMr3xdR3GREigRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38QhaHSQqsP5wpLPZR5Pmd2wZDQesdvUiYMiUJDWY7Vp4GvdfU1CAWvqxPCAyQX4PGKWToRYvJnnt9fYcSc8ihXz",
  "key1": "RSKmf4jzV6s23LvWYhxRpWQwFVkhe3LJ8hcWd6j21DXREiGqKbpSHn1uVxjz4NyiEecxDLBUAefWuFSyDn6PhHR",
  "key2": "5JdSQaRFDXxWTPRNznsYoAwApT7TMhdqZqtBYBLA954sXHfLr47oZzCBhoxdkXTK7cvPid829ngdYkgxm3LuFLRH",
  "key3": "2PBnRjEN2CVsvuqr3TdEYsLufML81eN3r8WYs6LSEGdKbEaDAtJvnuy2xoyqkStupFFccvVp8L2QbtnfW3yMGNwK",
  "key4": "5Q6KCkt1L4bLnHaEo6qh74xLf7M8Z5KiugeKKFYqS8UTQXPtL7gAeSc1taTeQne8VPiXZrHepMJ9diTSM9AXfLNF",
  "key5": "4tz2jUib3PvNxhuByQe84zJt7jDcSCt5onCUAQ3HJxHcBxNzy59tfuuAps4zzjoxoycHVAo1wBuFDA8EPjptH2RA",
  "key6": "58BSvD6zv3xQfdUwdqTxdhXJZPQgDmMv7tvaAxqWej8Y2CFwbr4U3yzkmjYpKrMtZcu5vgT7xaEzx2hHBGhrSUqh",
  "key7": "QXDheZnBkebzNx91bnRi96L1JMyvYNfPBbN251Cq3HwRJiSAzHumzKpNrMU6iTTDuJ8kRawwr5BJkqCG6Srv2pB",
  "key8": "3oAk2KaavC6uhJsivUXjExqmRXQdHgaRrqExrWp8P4q6CUwzEMPkMCeHjEVZZ9YwkycdTiK3NKsqEQBcx42X6vBf",
  "key9": "3e84Jxv8qxtfE6qbY2P6F5SnDWPDcrS31fZyfNEbEJpSmYcT7Efzfv7oL4wMcnoXqB1Avp4pTqB9ybfChdeLYHS3",
  "key10": "3GAzBgZ2smRMG18ePUmtYkCA1NrLhdaVLVggj8wfX8hn7tq5RVNKLsdxHjTKC4ZXXPVtuCGUqGaaFmLt4gDf6Ai9",
  "key11": "4RDdPcUh1vAa99BhDnzgLtEmiQq4em2tASxSThWsuhpuVrT7jWP5v2Yvg3wxA9QxV6vUQBWcP89xUsm4JuVd5Uxp",
  "key12": "3iWr4Ck19iZJFiKNWLAn5ZLpUCbqL5GsmdpPhswMSupYZYAksbLy7BzV1yRERJ3G4TyC6gJyQFUXsH1PZRDSh3Ud",
  "key13": "4g3urUz6g6JnDGiRU8Jcyxq89r9cBAqQwtPQFWwVxpbCGdEhy4b2QN2PKaX32EZnsp24BcDj3DtqRhxR1NDsvR1B",
  "key14": "2geD1Bw9dHa2peoXEsGF8r1mHe9kApbXrraFsi4FyKCwYB7swbMovyoDuN8AjkxqigN73iooYDkHd9CVAJQ9zMsb",
  "key15": "2gDZgwjSwxPpziMHvD4n3f5LZKunpVgfeJVdocLcQ8khwgEs6c7XkQBvypvtpsmCs3ABm9jwtSe4AqVhgiDb6JqK",
  "key16": "3UYfWUD8xNW42eYZC7Ck2AfmZRxnJfDpQob5sh6TDKWcCeUyVdV6dBz9CXYek7TGgpezAekGgftpcJrshZSvpCVu",
  "key17": "52twt7pdM2t8cS9oSojhqPQNMppGA2Mx5tR12SdDMa2wF54C6NCRXYcoksLJJ9PfGicRdzgvPJbMDJdTfVEFLTbo",
  "key18": "3JTdSYfVUYqkQo296WRVvNdYGGP8hzmbb1E5W8JKhiqaAv6n57fEDJhEQrD6KqXUPhNN8CCSyU47rKQBtfVB7MWP",
  "key19": "3L9Vbic3QcdWd36PNHR1MD5NQrrHAv5Vg2bSr28rbwFiafWrwoorzQ83A4DWaXM2aBw1jquYRqvhAVyAzPAwTZZx",
  "key20": "2n7oqkyr4jgwZE43iymzE71mgSv8WnGzETP967B5QMqGuduuWjgQRxjmNNkc1ChoPZbdY65q4PEAN9vh1i46YkBF",
  "key21": "VY3S1CzeiUnuMAiXBTYijqWeTbimPFLXf6dfFP3Wh31wmLmM6jtLLe9xjUK3GhDPJ57X5yboy6Tzj8REpwoLwA9",
  "key22": "292H12djGnk6QveJ1xrq3oyC4VWReYopdfFb4ZMjiKjpYn7xtJjd5uGNJe3UEAQor2hiCNzfrFzad6vzVqzjZ8jh",
  "key23": "4CsZ2JAfgoVFwbSS2d5XnoHc5Bc9nZTrPRbMSqd4EpeZTJp9qntuxipwwpAFPc71jo2zwbBJL14gRw67WNFu5gqB",
  "key24": "4JjcHmspBJGCnZpSnYsiGd2yDpZZ6bYN7fBcqE2rqUELqw34GEFgy9obn1FLh3VSVRqQ8jMgA5KqByi3HhXYb1Vh",
  "key25": "5WWKdXHf3jv7U4yG8Hk7qNRqFDn4GnybjgtRx5Up1zWMcbs4qYBopHwGQBi2FEeQ7xzD7aAvDTCiUid9ZhJdXbFS",
  "key26": "4MdatzqHfZkfPiAwgzSZWdouQP3MdkpNtVtdqKSsCL1HQrQd8GL9cj5JZ7y9iPtKQz61JP8vX4bNq1yS3DpzmoAh",
  "key27": "5SNgi8D3HHdfY9tPueFYETo4y8VZaiyPz2z2Es4Gx711tZwjAaDuPYiyV9aK6eEPuPyYN8NPT6ZjYEJvNfhi5iGn",
  "key28": "5Dqtf4Ro7aU4CxVhZC15V2Tmz1tYkn6cTvmCK7LXJ9pLLRtzo1uNGZ43yqGfxCpLG7C3ZRWNrDJ4WHf528AwgSvJ",
  "key29": "3SeE6UWPx3CFgakgns22TASuU2zU3wmqwvbM4qGtqKz7AgK9LkxsVqCM4rtryAXKXmoYWwLtu5YsRpWBvgJ5NWhj",
  "key30": "2JV5zaR48QaKsxkiFdcbWxoQLA77336SMMH1RVmqwuEagyeH7B3i88FGQPJfNGvNBS6Urh9EiVPh4c8kEEzf4smw",
  "key31": "4GgWGVB35Z8DjvZRWmfXNHtdnJDwka9MP2mJhvcUTJegHp81NANjFN1znFMj4bGaB8SDKsk9poeoLfCuevJy3NSJ",
  "key32": "43tied5YgxYFutsbzMQKfRgx8XiHXzoXDZgkVVz6tN1MdkV3hkHMWKZFxp2DMCRZzMD7e5STPB5en3ZUNBFej46V",
  "key33": "5vbu8RXMsLgtCq4xJzcqP8tbLcFmoC7obQFwkBHTkTakjEyfGKZxrWhoLwZUc6qcrpXHmRkrSrAdi4snLeq7N6AF",
  "key34": "4FRYED3nHixMXmcrgrCNa1SntVb4khZFhZRCzDfPLjT6neVnUa16P517aAzoz4su7WiYPR3h2JNDeFLjNwTRvqPh",
  "key35": "5WiHzLkPwHggKxncAEwWivDWfrXdjF4JbsAwhoRGazEEXHupXvCa7LtCneTh7ahJsdsADngMk44w7eCvezrTWujz",
  "key36": "4YbWNx81rAoz96ZB8SNeM3AAejsfcHzjBbFG1dCTgzWAHTbAQNRuLyM66W5XCZAdP1YTzUAxkaPPL3JpPXaDjvdh",
  "key37": "37vgBa7Xoj4sFSL6HGfBQxKwNqD2GBs9pZrffERGE3aN2VhAAxsSVLtpzmcfJ2jeYSHvJApk7i9LRsLfqqJMzfGB"
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
