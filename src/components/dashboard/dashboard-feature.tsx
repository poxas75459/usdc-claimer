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
    "2WLMTfS9mP6ZHstRMaiAvGNpPB1VcM7CKMK4JByPsQU45Xj1WGph8RxuZYPo53jCa7qxXq18ggN4LNmqvXREB5YB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ab2yJ2ZenVhGTHkCVr1WqWTJZC1fKHJ4u8iTm3dh1iBwGMM2uZianDmA6jzxRfdVuq8iftnBNMPmnhvEzf5SkRw",
  "key1": "3GTxC7yvAcjM2S6cZBRQB7mRAW3HvVA2L15KcFHgsLQzJJqag7sGchJgqMcstDRP7MDHstkCi63AC2WpyPCufnvC",
  "key2": "YzMzf5WAQica2VVMGyD1JF3N5REnVMMEMY4kRr2DQMskDVkz4UNmjd6GQQJPEManc7K7p5xshZggNMjQKu3G77q",
  "key3": "r4oTAmEDRXW6zWZwCzpqA129dq24Q2BT1BccMMUWxBY6ddQHMooGVJS1fcdgVyuh6PDFXH1Q9J7is1ByPVa4yHx",
  "key4": "5Xih39V9cwQ954UN31eYnnrznD4SsE5A3xUHRWSs7Tu6ADKT2DgG32QsEBwDQhLxDYwutGnsQKZY5mZ3BTYhUYrV",
  "key5": "3cDYuRqpQZUGcdzw71c9go1frH1ZfQfPJeMMxbDZE78vRNAzz22ZhNqRN1cKR6GQE4wmvCsVmSX125UR733BVBku",
  "key6": "191nSKfB9MUDNwxeykhXsQtekC7t6vPhNctJsujL7ncGJcqZkEYcQy755s3xncLa2KcEqLpr89KByKS9zXGDWxr",
  "key7": "2RyioXB5fWRkxsbsmuNfE21HYzoLwCPH2uXY7CwyKtrWjnHzTNAmJybtTGRdHKWXWV58wDdfXFbNH9PCxQsoi7tQ",
  "key8": "3kgwckThbqPw8akF5VaC58yfUEHfGDwoEQuVxSifafoE7Kh3K5pARu2UWpf8R7LKhAj2GxNiFGzEcET1qUKnrzWe",
  "key9": "5mfr6dZBbKCrKT2KeRf21ziuczG2dcXmDoNcwQz5uckemesnWYKdMRQ31u9QPDUQMANUg1qupPErLcYZPHRJA7dB",
  "key10": "319xBhqQJqpuby5pHLzyYbTr4Uyj7V746Nrs9ZTbxfdMGzrYy4JvQuwFzxzY1B2ttkVrtEbA6Ld12YoVzRaxW2QA",
  "key11": "344UTLB3Rkt5Ko9txRXDq66CmjyiH72iTP59bFPZVimLhHNZx3dneGkUoE1SikGm6GLRfW7sL2U6dzN9nR384GGA",
  "key12": "47y1ZpuigTfBTmz1ShJ3ZHVEa5FmTm7hkKvVEVjvAEJ8GPxDyVMBMFSarELnsjwuidmxEUmUitVHGQkp69dQGWLU",
  "key13": "5bAXpdmSpnVpCiJZZANq9JfJN1TnyDYFyB7mnWEm1nYa1KV3nNbVkrD7EcFiXpnbVt2dJKfhqV7nw9D5ecUgFRG3",
  "key14": "5bX55752F9Umehm8zZChSCjCYocG6BDFk4K1kR87D5TLmRec8s8dWPbCC87ttEvDrU871VqWkdZ5H3PTCouKk83Q",
  "key15": "CsGsN2hTgxetPrxzgtRac8iDBfvoVA1jCtgNPx52WjQMbF69uSqfhNXgV1usHyJVbpfWKRBb1WvvdNgHUWuS4vP",
  "key16": "2akK7NbY9QpTm4seUDcPbHTmmSTK9sTsexHNVTwBdJdTufQV3TTjMjvxsc6u2K1kDUN128DuvjxkU5qFow1fZWQx",
  "key17": "4WSW1TSJBxJvUsmK9CdAKHTVJPsXrNgyfxLvgAdHTM2Hd3DhxNowrK1LftaCDCMLdBLQvVUPYz1uwY63tu3AAgSU",
  "key18": "ud8wsMu6fH8iCbiH6XV1XN9iL4VaDQBxp6NTQTYekB2gBn8NNVHSgqqRWqWxEALQWL4DmbNEiyY9XGb9bmTYh68",
  "key19": "3RYQ9HJimUiHaSCYxmjFLksgiLJZioLnuRxncoxqGDvkkJHYqyEj3h1zdFz82zxSZot2TrwD1XbvQ64wQFjxkyPL",
  "key20": "5iWYoqvzahmFj3f2yYWwpq1KJnUc63v8tHsUMx4gdzaZVhmqpxodNsmPxix54tfsTkhxj9FEEvLmsua54TRfMeyG",
  "key21": "4KERn6M33xAwtsDvi21vEx78eBb9bHXG9nZHgiV5Ryh3GPEkgmKPnFWwcdveP5j5QsXoCtdaPvta4vykfGE32saL",
  "key22": "3wH7aPtNiBehKsLi72vC8MjyYscCJpc7ypFP3oVVAzFcXPAgHSyXLC9e46BcmDfCfaFdxwVtMSpw8PS6RPXvYAiY",
  "key23": "FJdVfWJKraqQLr7JH6wtL1jq3t4eShiXQr5aN6EhUQaEmvwG27NhK791iMcwraa31W6Ph2cbuqWAukPrnb3YfVj",
  "key24": "218E3PukRusLdxXrrDJVHPhhA5334kdBYZXZK7T6ZnCLxNPk1AKRKPWC1G9sTrawWQobjMhNAfMEZwuhRcD4Drxq",
  "key25": "untqWzBkF2jx5Zjso9wfeVEW6YKSZfyRSSCReDKcPmm3pu8Uw7kXamSE3hzFLxwGA6fDwjb6dcTEn6FjtiDVHHX",
  "key26": "5evjNqiTo5gntVWH71ejcnPoT5PtYGB85kchSnPEAnUkBK1Yj8p6eJv8vadByQV1brw9Mt9G7hS4oJiGZbeA1nvc",
  "key27": "5dRF8XBD7j9n3Z3CuHAW6tHjbiMiQsq3oepHa3D2szEgHsrnQTXKMXnaWWamrEY5wRqCuQm7aotfrJ8CVsvJUFka",
  "key28": "3duH8rkGeaatX3QwpqLmtdUGga7LjRBzb1GWJw1CXUQ36CxhBT7vK3cVCy6ghodC9ypCbcVDQV2Kwc1M3WZou7xU",
  "key29": "43XBkp7A9v6Q2gLHyT7XZt5vG7gRWcddPLWZvtQd7aofMo7QfyzmcHCkv5aE3xrUiZkN1bxnAUHVMH2XpdGyEido",
  "key30": "2w8WP6G6Q9nX1bgHtnDmuMDA2Lvp66P38KQkNSBazGouETS4RD5Gtr2RKYMbJXFQ9KFReF8rHUffqMsB2gmndzTf",
  "key31": "63BoWGz9K8WnXzjoZF7PAeatZHkaEgouc586yfffLw6a1JqLMozVvMVcU73YdLUQW7onyiw9R41awDrud75iN9eH",
  "key32": "4FYWqtaic4WF9jPuFarGyGiD6GcgWPGGGekmpfbiPZyp3wGV7vsDoYc7zM19hra89kQgYF16X3xHcUwZHnz5kqc8",
  "key33": "4BN8JQwSwAy339sJFrWxW7VgvefY9oFSPozJMvd6vG9ARo2iihWVjvgsNxmxQu4kG1Mw2ZDQ5MnGxWdg1tBpSJBz",
  "key34": "3JNuecDzwVGPamDt5NJXdoyNVMcUPHu15h8qvwoJLv3HaSnbinpXsHxLcVAqutZzaNgqtJ3nDJkdLrvBtqnzRwUv",
  "key35": "2CvX1QKZPSyV5fTG89zb4bkZhC8HeFGCr2YJeJ9MZfDEaBGezGGGd9W5rr6xu2VJYefrJ8ixzUkF5PTLHiXCJD7y"
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
