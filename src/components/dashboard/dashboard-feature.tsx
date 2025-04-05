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
    "jsAg87fFAkb3xiNwM2bkkGjzENGbjMJsLizTSLuz6EXKikTkM9sHp3FNcQ8xXF34CvJNxp7HhRURcwXNd3YFivh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o75ouyRVnpvcJco5QvXgwoPeMV7ghy5YQVvd8bYosTKvLTYBakrZNto87EXaySZ5APVpBqBhusptpkE72Myp6Yr",
  "key1": "2dAwzGBudArCWsTyRQQaZcLtWJ7kbL2PJn588VWNztsCQVHuwv1qapY2yJwMoahd4SkhmU2SRgtUWYJhMQNaV7We",
  "key2": "4aU5AyK5ugpSZ9UVN1BTzhmURWSHNk7LpTd2x2SZRqWLai9z8tscshRmRRfSaRaiVhJqAkK3RtNGRCmCT1tNBMD1",
  "key3": "4dGTC19PN7jdovXJftjaYYifE2iNkfvdHXJEVLL8SAWXWSt5wKTipDtwP3NksYNuFxt7hLdmAQKJ2Y7FAPEHhKB5",
  "key4": "4X3F6Q3uiVrnMZuUePHH2WXNLg3rVGcQMcf5EGe5s1q6N1YDorrYQxciZzkyywjp3mUrGhoKo3cbhwyfm5ZXZbS8",
  "key5": "5Ktqj2FCsSLprunUbkFCzqwq7KeykxrxoWiG8cCPCyEKUTuu4yLP3YiJtDuan5af6XSZjHPdmiHbg6McvzXyGJn1",
  "key6": "2V4i5zqzpPLJMsGRMwD3mmMDRoe6kfWczMiJCf6TdjkYhEpCLm17JJHJaqVv7Vk3vKYDDr2LiwLmi82QXW4CWxYW",
  "key7": "3rBysNSkLiE6eS7KvGKmWUpgxF7haEDbCeWFyDX4GUAeuW957tthoHfdKYXL2PzYJU8wQDp8iz8wDM9UbP4CY5YM",
  "key8": "4UVWmstkz2AtaCmh1qCopQmacL5heRT6vQkrSBJHnwhpbnuz3svoC9MNi7jZqMTVbxRJMgwAKRJi2NKZB2Rfgn2V",
  "key9": "2bYGZNMCHWRM3ypbTuT8M9Tjpo1V2da4mU6umySedLVo5skgfs72m6rio3bVzUw6y1xU3ruUrmtHbWZtFEQbXK7h",
  "key10": "2WdvzCXzxYnoTf7HW6Thxuw26yotB6MxLrGWWWZUykvQnZtF4EHSgfPnx5ekHwawv2ovLERCLK29dmgd7QPvFbvz",
  "key11": "2aXNM4YSGL53nmjeosd16NMGdt1YLbFbKmVLx49knNdA7g3GcJFd7CojN32AS6DnsomLBgNsbR8qYkW6qa1xtdR9",
  "key12": "4Fhj2jpbwbf8ep4cpNW4vLqkcAKAqBBT2GURjHdVkKFBaS3CiC4SPjwQSqsnaPQuQCMAhmx23JYUUkzF1svuWEYC",
  "key13": "eCmVd1PQVfUZsSsrw7xQFvuUKECp4mN1MyYr3jrrRVEdwTM3ShExaaYVHwsgJD5UpV2D5pRLCDXqhk5CvHR4rHf",
  "key14": "4yRZVQR4xtuyqRhhCpjWSLcscqba8nCGyKQJyu9pCciTQPEL8PqrRdFrFAwmBUyk9Xjj1CBq6rdmfeMCHzNTP6K5",
  "key15": "5mSQtwDYtJSbUGMnsoYstNKMSSyywM6HK9wVeQ4WPRFbNWPoNgz1FWqmuyBvGLsoZsEJHyryB8xgSnv8UcZETsLG",
  "key16": "2aWs8jXR314XrajL69s6bHBw1x415K5F22aXqztSrxqqZzqUkkN7T4yfekCTe3zkiq3GkNLKdHJhapKrW7dK2hX9",
  "key17": "2dW7cfZg3kmBvLb4BxMkpNu4dCWF5wXEwpGWrZkPBKsBu1TSVabQoND4zmtmPd4uf2YGro5QfBdAJa2KPCKJanRJ",
  "key18": "KTdi9q3PMygLt47qB5s9MJqB8FaXP1ace4b1W93UKCrrVMQm1VjyjJukh9ZSMxSTERZJttytnJg4Ru1ChP1grZS",
  "key19": "5rAnEM43YDCsMBKxxGAYx2GQYRaCALiFHsTuobdqc6f8et1oaUKYw8rUwoHZxt8vSzU85hB4gy8EFMdXWhA1SpZB",
  "key20": "5bWD3JFcpsuPnT2z5Cb5bVUBDqXKeDs1QJi76s7YJpCuDTJ4ZxSQJxqHn7qXardxC9oyP8WLoKyFvrv4JB1R7z9Y",
  "key21": "3r9WuLzc3ceBNLVyioZRwGg5Y7NUkwb3h6ictbJEpbdSQwNXeqycur3iFt38um8m8Rv58NYfpDX8B8XAcsMYoPu2",
  "key22": "2Rx5McSrsK1VS6VirHHgjAbh9e95mJGFpZyQAfCFr6sCuqo8hAvDKDRTud5RmBdbkkEsTqmkZbdd87QTazNE14q5",
  "key23": "25vPr4whohRh1eMcpcNmtKgASWmmKxDMaKpd4EhCjRfUgeL4Ub96pRzDZ5fRqJsGvgx4k3kL9ZCr3dShexC81K8z",
  "key24": "3T9E94WFFD8QP97zuJb3X5Yg3dMmQpx2AqjZXx5wFCLzjzetqWktmg7W1jqfHH8THXNxi6nssxYbuALmXuAntr88",
  "key25": "5BqUeTJYVdo3FKJ1nSJbUZiB1nnuANjSwphF9QUgqY3YRB45gd7f7aaoVmruXBgsxGNRtT8VWv5yFqpPhhWrPXXz",
  "key26": "2VwAaZaGMm6etMC5hNP8VJmTxaT17ZnYyMnNGmwFGASSKDv6rNSHN6NKu6whKBiyqS6om7axkmTpsZSynpyniuFH",
  "key27": "367Xxp7m7y121E32kdXLwNkWjvNHMax2TMqvyni9ePRtUhqvgPnpt1ExUaWd9AHxj5Vtu6tufTm6GXDsYUzwgQLw",
  "key28": "4VM2E5rNvx6LVRq1a1Y1XWGr2dKVdskgEuWyb76st539uUgDzqCXrtTwhzr7C9aPa27qLYDrekzKsM2UQG5bZpL7",
  "key29": "2dZBJsZQZA5SrEzWYgC3FPNUQcZjH6z637oGCtNTLY57UQcf77Ya4Pt7NA8ggj1BcEtFu7XG6g76qdM6b5psChd7",
  "key30": "4jp1cNxYNKRp1ZYMfGptmBrgSLgFuZCV6z45d5Z4DNTz4Gjt7WJfXvU5ieynkoWJtXC2YhKUCjGZJvAHjzMYN9EZ",
  "key31": "3UuwR3E6tfV7QXDqoWMoxBEEKkiZT29fsABtLJPoAyswStwE9L7WqJfQjbSrysCKrGa92z7pQ38mJnoKVMo11jKW",
  "key32": "3rpzNy9TqMNRBCwKv2XXe1DJvGM1j1tfejHacuWv713NcM1zAGVyXuAJmeVvg5admixWo64YDMi7gT6vbxRVuYjE",
  "key33": "5nKcg7Az2v9SzT8ziCqmQ5pXTPzhF55w1fVrdZ7MM9hTddckdc4hPbPHkSjQvBK6nuGcWai7UkjeyS3YKmkFtupW",
  "key34": "5jxxoDmiknZ5SnLGeQSELwksqoet9Y61Gt6h6EkMT9RLbsJmS2kSkzQvDZi465Q3tqRt2928Z4bjoaYtk8LAAgCQ",
  "key35": "2Xt552oJTFdv4pzzYcuQfHddurw3c2rgDwB8v4r2PHH93WRwEe8fjAjo62KxkdqDgsesfoxdRriiFrcVP4W9mXdF",
  "key36": "1LAAULdHS54zBuyrfmnU2N9E8wAoNMqYtuNDwgQSQHMywhFWGHwceKDRusR2VKKMXaqozgepssdhFwKQfGxKcSh",
  "key37": "4kJRtSK2JE8PsAbTYBhm5yE1KxptwZHsYAFnoUB2huwWNbuS34QEBC8395fNPZUeQRKdMFRVycUprwPVDjcZnwZu",
  "key38": "2fhM2nnK48VGxK5BuYFiophHKBtCktjBeVe33paffzUYQMVrZci1eHiSCJjizP9a4ABspD791yZF8SvtQ89rCsFs",
  "key39": "2VdCZhZhP6553VXmJ9ZGTQ92PFm7h9xvW8MLzmcJSp9u69c3NpPCwpeyBPtKxYsXPcseqYGJviUBTwKWMRQSYjt7",
  "key40": "2rmaibeFc2j2Zbp7EYcscNQuZi7FMVfSfbh6WV6o6m2YZoZL3LEQNnJMFghgEogjeLGmyNSV2DFPHhVSap2gUSUt"
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
