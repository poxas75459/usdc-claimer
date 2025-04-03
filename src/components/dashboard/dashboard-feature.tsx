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
    "5KwyNGiRozeH4r1jyLQKBtSymQqvkdYh9EWm98PuLhs27wyePvB7eYxTkgr5QRRqntUuPBJZKySNfwUPHfK1WwTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkNLyuPQmGPTU27rcnTJcSzuh4BT2HJG8k9ZQ7xM3L7des6kPp6RbwfdXiFSz7yieq73H9UFynB9hV37dxiuD9y",
  "key1": "2nQoaaLJof9W2a4CLG4psKS76Epk55wMFa9xJW54uyNMq2jdnaNu7gB7Dffu5JbALi7Eqk1T6UwbeBSsy4gbtLBn",
  "key2": "mwnPakhqryVff7s6i1wxx1Er8U2yh7CdoN5DZsLdGaHihsGywXvuK1FyJMbM61514SyCnhfwetpfJDVq3fBnhCf",
  "key3": "4ag2zjan2G1M2zm7tyNeG67JXwQXJitMSjQUDh3DQoRnXTDj3tcwBtsWR8kF7niwM6ZYpaRvBKJQxmG8QPmzs7HH",
  "key4": "5x6mi4WQQ2EiyKUnuvxU6xyQJCKhMHPH1AWxJFhqMfFGJDDNQhAE2mjGvSGtiXfjKQRVe3P75Ab7HmaL3gyXwJKa",
  "key5": "2Cpp9HotxbWrfzum3c4Xt58Pq5KdRiWD8TvDcTqxvjTRR24h95gjWbwukS9q5ojiydQ2srjokS8qgCgei37Y7Lh4",
  "key6": "3SWHFQAy7Z65QNSkhC4WGtQ8vHeYqpanmVEe8CvJn9jcEkjUPiTK9XVXUsdSccU8gJqsHCVpk5rCfGVvsS3rcqt3",
  "key7": "3sLTrVufkYMpXEkSwFr3iNW4zZjzpA73BpM5dd7c7rguoNo5tjnc8b6dmfaqM5D6z18ZFim44dj4yiSPj2SKNjjf",
  "key8": "5ZTNkmqSMKsZvwPzNNmLBibQt42z2r8dHLoGQQRac1sKUdXkj1DSotHk1QWUFCKN96b74CeC4UxEFXbnKk6ymtN2",
  "key9": "uWodBYKGS8PyvkornEFgua4jjZXCvTc1eC33xMpPSjVxZzvyA4MShYyX2pXxu85rRuxDDTuYSuB4RgQhS99uXfk",
  "key10": "942XMu2escecJCkaYDVYc81ivqBHQPFnxhikJrojgDGuJAbqRBSgBrm1212en1SYttowQ8hB5ix6RcW23qnrMTL",
  "key11": "2AqPeAREkRd6x9fEsj5quNNzpesVYRJu2ET3DzSUPq4LFN1XVk6KQ5xafqJBgiQkY4tTeyb79kaF5BtbUQ2w1XHF",
  "key12": "4E9WwGtYGJr2VMaWy2Ci8sdwH6KigaAwsAvtas1CuCAzqDuYTV69L6zGpaTX3MpmbTsuRu4cd4E3KkSY1fTNYHDr",
  "key13": "21TUyCyAhLXCPfw7KMRph8webUsFm4iofftsrorkB1jVAfEaQH2yy35TyQMpiQrmvpmnz2QoHPAJi9wLi4AcqmsA",
  "key14": "5H8sARg2fHV1bqraAaf5C2D4ttzXJfwfqd6Rfiduag5qJNEJ88N5jvea45LpSsosZ3vMctoW5bsYVnP9sU1UU4to",
  "key15": "4XeTwCysN5df3k1wQiqCJvSEXEJ9gHqEB681EYqJ3z5vZ3jJDf328anfLQ6FDsx6y2Zk5X4q2GU3VaWMtygT1DpR",
  "key16": "3x5eHRfYRDEiyN7BEtawTThFFKfez8hLpdyWUz8GrP5KjUbNoR6ziSzyahJoDp4RXyTAQMRWiA5WKAei8Eh5XFyv",
  "key17": "5LDUdhbr1jBYuzZuAUbdC3kr4LFmM9wt56ffqjJrWFDnZYFiJuAdwu6v2X9JRKCbqH4LR669ivXTJniwX9Uszrvb",
  "key18": "2yGFSdyXhZYkj4pkvokNnrPKCFb2cWEFgUHnzUq4WWxgikL74S16bYFDUayM97wvfbxANYLoEw2CS1C28ffQrBpj",
  "key19": "2gjFxd5RnFk6b3znQ8qFkHrCPCMc3858NSmayfKcdNQB1WixvouN3t22YiCTnpwo8oBCH48oMAiUkgj1CnmpsiDo",
  "key20": "BC3Tn7B374ek5A5Zhz2jt5Kzecuk4GVa1eh657JewzuLm4YLujJcUGbKWBTsGus4kmSxYTzZeGKDPAC7Gx6ztgZ",
  "key21": "5Cn2U4amdA1cg3tK8rMwskB8fwhY3mowshTsa5J9beFsXePykoSKvExRWyy3ynnr1DFRqAshuGhzG5aPC57FjzFS",
  "key22": "4vU2M2CFPiu4R8TQxAFmLBBjsfNKQgK24aD97vV89tznREWDxuyS9oevzKsVh5x3bFCjDfcWPKGfvzEAZpbzGGe7",
  "key23": "5HF7VNNosr1w2jpD5oGPu1YSR5CNDe6B7PdZtsxrMzh4GhqQd5vTYhevhNKzgHYcjqKx7amcaexVNZwULbZfLBPf",
  "key24": "3ENE7kMG2rMG4LBJSxiCkffufRRug1W5oSSdjLEcgkxVxaciw4ANan3RUYBbx6cYVdbubpxSV77Y6w5wro1EyxHG",
  "key25": "3xTkGAt6NCUyfGeLqHu2svF7fnjq12NfVBHM2sejE8tViehnUW5YZNx1SRRvZoNERiFDgZ2iwE7sHeZmhyTFDvgP",
  "key26": "5LcPsbSUAxPC4Hbqs6PvUh7abkJyWZYdWhavCp75KTJ9csT8PmwEgpYkg73iUfYmhX6KSiduo8k3m7iWBd7sA88i",
  "key27": "3igT1dc97mmFdkWgnHsEN7niPLxKFM66PhZAEnJekEtgBrPxPRMjeG4NJ1vDFFBBiQLg6sqePpNrJCezFUBXNDer",
  "key28": "8VR2bbrRzqBEa2Tv4xJkAwTSLJwow88zX7X75DtZcFHHNWpGjGhVdyabBXXyDv52fqoNg1casQ2r3e1jcbCHYoM",
  "key29": "5L6s7GxVFtgjvCxyxC3PwPU3GZmHUPnhdksHfjRa1a9haTQyyDbM3H9rrzMafqdU9kXmzhNBf4QWfqVGZ9EbzWdt",
  "key30": "557EXe2jvFCYHFDr7Drhp2ESWc86Acxo2vmx5XZbmtUS2mnjMfnFXW9vkW8h4sw7wrVz3dDMdpR6GtiG7Jr6viqN",
  "key31": "2FgqKqBqABfsZYFAPL88wTCoPfx1PErUGYNonxedF3oH9NkcUC9ar4Cob93PvrEQjRzSdweByykNz9p6JtaR6MPX",
  "key32": "2eJ6d5QCaiBo2DrfZra26gisBLrEeiVP29Jpyf18UzyPp7do8nbjjx3SNqKvmwPwUwxGZbCLbspH7ws7nqhsfJQn",
  "key33": "3tYZ8ahFTy8KUhrC3tAxz15YDgpzi2PytN33dU31KM72511zLC4pC1ATZKfQLiVfuAZKxZ5XabbaJfqwsVUc954L",
  "key34": "3kZy5FLsPkKC3vLJUbcjx58KA2in9HQDktqAxKjNLJtB55NHxdmkm3ZHJJwZ4dSXAqgVHXmnL8eEUPzdMXMQbafZ"
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
