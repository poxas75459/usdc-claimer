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
    "3tjwgRGDtna1hyjjp2UbATT9DJmSwf11JqFUtisFRN4nMM2dYx7bQX1SrZoQjzyDTWtCySXr88AUMF8PoyjK9dyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZLeq2uwSw2pXQhDKQVMLw337rpcEfduSA1Dx9CSi1u72gChAuQRDxDnNGqiqsJt1cAHKX5agfhVYi7mms67eHX",
  "key1": "Zr54zpuznRrnjvUVRYyXiBuXts2tiydP4vsLyAtQa4Nfcc7UXG6Q2VM9fDuFSPpFbLBeq8Er7BCEXnG17HfVsra",
  "key2": "5kyqBoe4KdnTiqtbu5nHKJRfCncZdze4HbUTNKrMFt8BwxVk555ATBSt8KfakaghU7X2P3KtAiickf7cRFNb2418",
  "key3": "4MPhgNnBtU4VEuvptgTZ3Y892PYqwgWQGuPJaKaQeeA8EoZG1BvKnTXUSkicnki7kMz249q51Nxqxq3fcwqXWzjG",
  "key4": "49zi3Nu29HgzBDqx1iCv6aciVbiXgY2ykiyMha8AqBF14cnoxcr33f6EVfGnEQVBvxJBXAZQS2Jh2mgumkZ6TLTA",
  "key5": "WWwuwokK1dowbPNjgmTe7Y9YZia7agWP32m8Yv9EYUSRbeif74o79Q62ZbFSUCcC2sETAkdDEHVT7aRezXjC9tG",
  "key6": "4ucizATyLbiF4iWYwf2jqSKeuUDSD7hB6bGC2KQVrKBViPA2eZMtFnYnCzoS4mTiXem2wBDMXs5pH94JkTTUkTsQ",
  "key7": "qzydBeouMBaKCd1Y89RaaCqZLwVCASu3va8sdTJJQCCiKETS2KDri7CK3No9rrSz9XdNiGgRuGV1avsVhh1Pkvb",
  "key8": "5WJAV9TKY3MK5N3Gqwrf5XZbmQhmyVFpriYCnasFvhhwpHXBu52r72GV2bmStxcLySQWPN1ds7V4asvztoAkbS67",
  "key9": "222FCnnGcwUpzDxwqjBhNT6Z6gJjcPSxRRQCEwxj5aG74eNexvy83sWrkdCkgk926roTQkeMzYMJwnKpU3WDMekX",
  "key10": "4fJFMie6CHejprDEAy7hrPsxQnoHG4aBBkpDmG6F2eQS3BUYJdMXxzfNetrRJtn7gyFPn8edioYwp56ayDySqxid",
  "key11": "Ji3XLabhEpSoqeNZzkz3SFWUnYPMq1stWcbUBcDYt6u9wPcGARJLC1MPDQAZZgXRwFFw3vCr6rS776vRUcWtypu",
  "key12": "2x7FvbaCf55wsWdVFDLoG5PRtE2fdAMDK7A6tXMgzKozTuTB5uSJoMTkrz4K12NMfCZmsDdnw9gb9rbpkb4zcJ9U",
  "key13": "3NXxT3DFmx7GafQkZ4KVzr8q5qe6XiSPvFddC8nFr8rcZSKaXzvWYiYA3ESUbuj3iXenDSziSxNx4YTTPNphAJ1W",
  "key14": "W3HHektYn525e7zvReESXUkNRipdusaWAonqJYNSwDLb3DDm4HLPiFAS1qbPXwzuHpoDa6s1UAMHQKkze4ZQraD",
  "key15": "4gzH3oLmkSzmkWNf2FYAC64hGDn8LHa3w2rWNn8B6FUWb4bnjWadiUpjfYaB4RGqCgfs9S5aYrhNmnELQ3QVHDtW",
  "key16": "3Lcj9Zvt9wj8DhrCF1rPozzxi644WdynFDfrJTHTrVWzALnpDrTXsv8J69A7EBjd9k8P6HEb1iuRdYoXfMqwBuHf",
  "key17": "32w8tAU2vT4966Fi727dcA4essvt2enxYmxNZiz2sVxT2QnipZeSt5HmuYibcaJ4vbVGSRmGTE5duwCxxPrN8s29",
  "key18": "3FiGG2zbJmUZujM3jUpLVqymhfqi5SXnNtHmBrxatF4tR9meoRkNj1AYRg9qDhrbeFG4NaqzS3tVGewWERF7g1mn",
  "key19": "2r4ZD3gvwWkks5VXTqKxbwirhGqztLaWwJPAbGKmMFT67NzssHgWiLmqggb6hkxwnVUu2U5WcLYjc6xMPXHUzaV1",
  "key20": "3a5W76mHSWBUdXbTgydjnzjMWu3mZu93U16K19P4YfKwytd2DYnSQc8KJD51dniyXZoiAEquAYy5RJ1h2CmGCy6C",
  "key21": "4PVT8V8Mb8ddGxy8J4fHKbnXSYPA65fyALQGa1QF2xfsVt2wCuCFGg64WBYgPWcUNFuWXvf4gXMSQ54EA99XrPRJ",
  "key22": "2jAfyh2R6hBdZcSygLTEHL3K6KqvznXJydLgEgp8X1VgMPJoL6qmX76UTNQSpzuQKHBStwBM8t2fR4Btie59s5rZ",
  "key23": "31JyVYqHwoaoAxyFVtfroAYSi7A6znyhL1wgSWmpMwegcCW9UfpweiAF7AHzNx3cXy9HdniG4boxZyE8pAzx4Kje",
  "key24": "yaiTpnn325JnXUL2p2HmhAKw78gkwZFZRCpzcsfQCB9PU1Fc5qVDtpHAhaLwibmkM7KwA8Snn33LdXa21z8xjK1",
  "key25": "47KynPHCEkyezcvQahfzQKQBbrYWQXrJ1bmMABtKFgXDkxDSr8KxqxEVJ9UhMSgkFkmWppLMSighNpBjLyfaaA8j",
  "key26": "vpY5RNUfD9TwESzatjxYdA7fsa1EsfjprJwgjuJnxrZmXu4YXDgwYMu66AxeiAprKBLs29jHmh3WmKVxhtVhNYP",
  "key27": "3AczzuHzp197u9jm1YE5NHbaAEA1uadMr4ww9owpPWTmZe3Dbw1DByVsUvhhav5jihJ4uRK3TsqeHMvEE5zXbocD",
  "key28": "4a17BYE1f1U9aNeYvb4br8brb8Lf9KEq8u6MQwq85dGgee8jH95P41tSrQeDxg6S2MgYZLULvSPFsjUJAQPP5UCr",
  "key29": "3w3QfQZnYNa4uJHNpqeba86qLbVRHrNq21D9vEQBuqqx6bsRJ2YXtEm2J3Pw5FgAjHqmRWntTyvjnqxUgVUzMEif",
  "key30": "2XJapbYVKYaQmmfKfzLxaPYL74tLfY9rni7mBBYeWMQKnhiyp1E2gsoyeYsFqd99KwKFf788B4xkHLfpQYrBZz9Y",
  "key31": "Ga7W2fTX9T71Qhw7ZwpaXJ84PuWbKtX9RyhgicnT1468haWYv2iztBhXdLzXnF8jZT397ffqMy3dsEx4k5H9szy",
  "key32": "3yaCzWNj3WGzGpP1iVrySHieKsKRxRBK3r6KRZyvMfFe9qqTtCw5iCKeDhisty2ps953wB1srQRnmWLKvN7FRxRT",
  "key33": "5W2pwF7P4jfttdSUdruaZ14azMdBaVSDh3i86UJJF6xo8QyVgfcymeegAqx97aRnxjb7W5x8zH6DeoTKRapZDkFe",
  "key34": "VsK4iCeh8LpqZD4KkmiCZwvdBr7QHnpimEKa2byeQQSG9xc2nJMnLbX4tFQ94PWgFn1KRG1CivXgwVUHQHu1SMe"
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
