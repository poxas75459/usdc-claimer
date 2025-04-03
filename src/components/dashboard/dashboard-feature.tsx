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
    "tcd3g2dgUQQU22SSYNRdBuQwAGRXLC1S5WqnFt8WmaQHr97YKVzeKpoR64RzPKC4Tn3MDdvaxtStzDuXU1FkNPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xdu9LCiCpER2XHLBCLpELZAF6UErrK31DhgLbrFNVVZMxrYqsrZ656JENiR3umQmqCQEYkyryUKwHViUkNgoX9v",
  "key1": "4S1y2SFgASpPgUb3HbKC22M9KeUWHSRGyzFTzowgBmQ1kVw2u7BMuk1mP79NHTntx7Nn2k6wSELJqd8vKyQRw23b",
  "key2": "5mKtyAYdpgrdh2DZzwXGuzRncVUpqqj6YQWLWSRmHTMSXfRh59DoKEEoz3CxPmZTG8JKWdxT5HvxF2TF6JVUfGnT",
  "key3": "3DjWf6AJAhHawx24C2gMRRKPeTzZpfMdx3BCaVUcgYW2KG9KiHJf2QUycdyhGogr1XQFZLYofGBfsu86WqLSZBtb",
  "key4": "4zzc7H2iPToHr7UAUFGhC23sDxrmcCYheTVyohyZURP4evrMYGDExF9T3k6FpeLUh3M5MNq4KeUiEMQDeCQCYugZ",
  "key5": "5gP8Nyd5gVW9ChYG35o7xphE6kfLo4udEfvu5cXVduCcyy4RSTCb6yHyc5rGoUoms11HWc6gorEJNps2ZDvmfPL8",
  "key6": "23nrq8GKbDeT7pFnn7GeP1bMpRUwu5aGGjjXx4NiUGu7mpQRDzRE6xW3FMYj8PdPAdifr4DwR7LzKRtLQdSiTHjv",
  "key7": "2cWGgWWtfard31RhaqpuQAUTuvqBvYtzNnkeAX9oT2iK9JG7CSbaWpBLsu45yzaEetaQMXMNR7ZkmXcAEjP9zNrb",
  "key8": "2qds7ZoDdvWf3nXg9uCdS9GrpASuJhgM7iTcNVeUaCeXwR2MSm6XmFkLseeENUs2c7fw2KiNK4BJMEM8k8MzLsvr",
  "key9": "5zS5fWJ17eVPeBFsK9jLAZQ13qYhY81TEWpmTUWb7GJaqzFeqajDWDa7XW6U81H5wwkSEutVQpz78XLLf6dziYnN",
  "key10": "4x69jYMCmViLEKEZfrtWe3xJHZm6pHbC71gPJGv7rqRQmFAdToh3EJ33DGSU1Nckv2qCi1xUXKQHPy1mnisUbzqC",
  "key11": "3Ziw7UaKQ7p8hqneVEbNeUSnAJieF6HBARZMTjat8wKuQ3EqX9CqmyPBTkKECVNG2Znjd78AbqKFf82brbB25Vr3",
  "key12": "2BZ7G6TujoXanWyP5Ki55goXRj1eCGbCKrWjv4ujgpUVLGF6PtLk3HTGLDcW8PYLHBHHR53E6L2t7jM8jMHF87PQ",
  "key13": "5nZUD4LGrommRz24TTExtci66TWBdgmTqDc4N8S7YyFScfCfnhqUvGahUYWkHNJvgT7uBBUH3TQVVG9Y1qsLaPxq",
  "key14": "5NJLz9o3hP1mUDmNSS64ANerv3AXd6K9epd8rTWcj85dpaNgPEpASBmLmt7EH4yUv3YuWhHj1T67RWfwpr1mjC6C",
  "key15": "3RDDo3aPtR9Fba2AVmmHZBjgXVTtDomrMwxpouAbayGjmWjm4z3bfFS5WynHrghKfwLoFwo3UaLrpmQWr48zsLZ2",
  "key16": "5UAEBchCrZvwA9SyxZhZ3Bc6KLDaSubxuRggqH8xDpG2zvyhcBHCmQAtiCoUBcdXLfUv2XDuPreVBGgBixMoqp53",
  "key17": "ZrT1vJUB1ZvrvfUFc3xj5dhYRkLoHdvnXLCBfdexEajwbD4JU79GGX1V6y52uyE1tMdtm3JfbP8s4t9Ak7efTHq",
  "key18": "44WeCviT3yfat4Ffgt5NE9C8boURiC53FEFn2zj8jaBMhRCb1Jjxdd4gX3i1DsfDi8WeWayCSJxTDgXusE3C5Ut9",
  "key19": "3DBwNQLmoiZc2z5TJnmjNJJ7AZoWtsQGpnJMQMm4LTH8XmpAz6rW4X86kuC7M1xcVsejxubmYnApUzZ9iFJkvQMo",
  "key20": "4AvgETevyUGmoovcYwt4hqrEpsmfFr3CnUvbk4RKNnkMY67Fvw1FrBVffB6YVUAQqkdz5Wu8S1ZALrjppJHYi9Ly",
  "key21": "4orsQYT615z75Ee16e9v2Rez385ETgD26J8DXdgBdedTBNMcWMBaRgGzUtoGyG8SURfVng384W5sCAJpQb9YD6px",
  "key22": "251TjLucToLNym82hyA4JsZtLfg2CQxXprF6emKAqvSXZ4dZzys5oKyXE46cDWSoTLE4nRRHzMZE3hhakk2mERfs",
  "key23": "Piw9WyRHWT22xYowh36wnbSLAtaJ2HmMpsAVpfjDhwLUDkjZT4YtgPxBZ3VUnfy2Stn5bseVXtkpV1wWS76Na82",
  "key24": "3gXFx5FYjr5Pbf723CUkeV2YpeC8t63AdYMkv6VwzdDqQhSjL86QbWyu4FvvNkXp3GkTfwWxz3t6zb9szTMvdCsE",
  "key25": "5g9dKFbtwmjrTnYXUz3JHVZfnux3dKuZkzCKrm2medCREURr7wiTQcPtvZTZV7bAGnqY7EFBTSAQCwzWeHzVKUPb",
  "key26": "TTw8ETLB5a81BQ8ymnCSyDpD7x6nhrxprRx3B7X2WgNzf29nC766K1okn9YBdP2vCkfkEkvYyFutW3nUS5dN7ca",
  "key27": "5wBFZQiPyt2gH11Vv9Ez6fu3s9oFu67GPKmZXMs14j4jAepj5oCTaCuUHcuFrrUX5TwffRboiNQsVycdRzwGTJzk",
  "key28": "2BoZPNa19kQidoiqCuw2vcnfmmVE7iPEThaX9XoqWwLsJjGRUDeNRtgVnBo24XTyzDgv8pEmV2Av5JPTSfhYkGJz",
  "key29": "4m2WG4HEm6isH1tVQX1MS5uYT2DYkmxrrd1hUaMufAaGKrzoBbMXb3vhVDyp1s9RRyYpwmL76v4opVVUAtxf8qxA",
  "key30": "37pkjxHHCCSvaPkqpysaeKhCV3A7bbs6inrGaKEYUdgFaYtxdfAZ4n4AyPHT4jum5HvBjPFhpG7okfdmMNq6hcbw",
  "key31": "35RzV57mPbcn2Gr74H3R9EFoB5mesgiMS2SrEu41Z72CXG536DY3u6GGKXqMwnEvv9qt35yo47WEhiiakZJvM9nm",
  "key32": "2SvzQXGLXkopezuBQge5tQzY9yQCwL9dBvChymSMxprqyp1HRuwXSnu6wT15LDQJbqoYotWWYtRrPoaFwTPLRz2k",
  "key33": "3DKfTMwvR41Dc2qYmCHmB9tmHUc3S38rCFtBKAbrVQSjqy6HpVDzsTpWjb99KUumVfDbZk7LgH3vuvW3btEDibwh",
  "key34": "HRn6JGhHBuVYzSGVvAfsmci8E9TvBS5j3a197yvq9hqr9uwc5JaMnwPcdr9yHMDEkbALuxxRimB7hoEzFVdWqPo",
  "key35": "2uv5z45iz4XVGm3a7kH6iTYcxKhz77wPmqenaxoyqKTmXknJcRFKijf4ntVEcA57tT9E5qLymMMAezV458HYNPNH",
  "key36": "3ygmQpv8Mb5aQJhjbnFYCkATG7GwKcCkPcPS4VvtGzAiMGTUAf4gKwLoKPJmZFKfiVjvrkwESGrEcRnXburNmazT",
  "key37": "4jcCVgBxtaEqKmpa1udUi9tjnxUpjd74qSTU5oU55nFUyZPZmch3aHwZJviLu3Ej6NZ1JGRpybhhPYH9esBhReKw",
  "key38": "3mTcYr81pQpejUcv3WN6nrE1U6KWEXcnCSGRpEpRsXN7rKtgrNPQJNHEihYpJ79m3gfU8pryUk8FikxvX7fcTUTW",
  "key39": "sKtEKRnjH2WNbQkmQDKLw3JTB9Cg9ASMNwRt3GRbhmRp9nWNh1GEEx5YSM71TA1t5ffQZEKU9YgXnPoqzR2AePy",
  "key40": "3He53XNqRTQTksSoJcbcyVoYFqntuoEjmKrFzUA4cydFrM3JyUHVGAP9McuFZpu7KCJq9RViQazpbNke21BJGjpd",
  "key41": "4Ht7BVjZNPiBYRZUYhWpzLahwLqqKwGbbm5ihksjqkFPnEP8bj7uputbEb79hpZXAYwz8But3UzJas6qLYfvBCgD"
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
