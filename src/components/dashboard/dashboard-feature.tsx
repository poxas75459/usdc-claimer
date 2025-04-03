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
    "4nkFEjw7xZpTXo3rMruF7wYGroYVvsf6VY5ZyYfGG7SQfdVZkuCaSjqvKKGVpEVHq5JK4fHTvPaUmGV86UVfmsMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jkn7AT3FYneZNGXcp2R14tTAF4yJithmuauQ8mAng7GbtMCPY8GndPw7T1qC4ecQZf8rdBSgCoK2hzdqAm9QA1h",
  "key1": "pFuyUtbXvc1Udqr9cbyfFoz48rZTYhxKJ5gWPQVC5okW8MxSqULCuZtbXw51ta6dTAQKsYN4Kcz2mr96FrsVCGs",
  "key2": "4eXNfGNqZJyKva2365VW4woKidYTKiPkyhSVaaBAEhTHpM39hJHNPEiukSDA86U8iui893we44AmyGR5Q61t3kG8",
  "key3": "51hpBVH1EQArknHtq2tJoDHM3X5a4Fz65e3spvdABmAsS5Z8JbDi9XabcZ3dF7qCYzH2USfhB3fAvk9WoxLTpVbF",
  "key4": "47794BZ2jtEs7Huow8T7xig1mj8aKcnY5YppesJpSVN5HKRaswpobTYG5r8qhBxQt2NNSwct2MCDRTsM3hDzpCak",
  "key5": "5JnotQAWRTsoPYTrpKMzF2FkYKv1EVubbaVDhjPZVcEsgLZV45QCgih6jjG5irLRTAm2aMqvheKCgTYRHdqm1X4e",
  "key6": "nDreRZyPGAvimN7SoNaRgHha42ZWjjcCeYyuuZRgNky3H6tmonFHmQchBpsYm7UUJQYbk5pr8Nf4oyHDevLD5fj",
  "key7": "2hwW1gbq6Br8it9wT8V1RZ9gk7rw3hDcL9mHKdSwnzRZso1qx8gNfxzXxznJT4V6h6JmBeubEuHBpmTpNeL3Y28V",
  "key8": "46e2Ud1gzzmbEjfLb4XhpmVnJkxjdGSbc5mLjy9SAHzdfoDcSzCgPKAbBdM3gfSBJVeaZSdeZpkpHL38PZTf4eL7",
  "key9": "TmWBxufRJj3woc5JdS3rii7MD2TCEQJYN2ZPE8PBt4HAwQyY15rsQpzcsAQ1LyYwziEsQ5BSTSUefwDadUxMcXF",
  "key10": "4hiYGYp3tf3dKSHEF8cArnsYpdHrjp9n25TntaVvBUsnTKXWhCAWERYuUeVoBABwaX6bkzmuVA98hid4dMqADwgp",
  "key11": "26CiNtL38PLH6Uc1UrUYcnhkB7aCYxNtXZ95AbAHJ15fDvggJ878e8J54qzJbp2FYLtvKCspSfgtuYe3GBXcb7PJ",
  "key12": "5PavCZidxcjnyJ2oBsQh3GtqgDYs8N2bnKrDd7uXYMJvf93TM5xHPB8ypUCvQS1X1hjBxAX6LCaYCg3G9ifkWH2a",
  "key13": "55QWVqxSGijZSLTMLvvfA9aErPbYfxMohG1W21dq9J8UEYnDsfx1i5ATGtuAuPu7z9rYnxhfBWJGWMkkUz7kRDfh",
  "key14": "4XK7YRbiVfQHV28n3zuqEc3qX3H6Kvvbky63ZK3UQczCwsfhQfJMXeyGbHhpKz6zA4tfXNb6VoQ7iEGLTpRWYdSt",
  "key15": "2EmA5f7kJtYQfv1C9AGLk6bmf8eryZetXUFYE83vGyS1mGcs3F1ZhaWp5Kge5axwE6KAGCksxU9xU3AteS9NsYkq",
  "key16": "41cWkBSmeK2Gj8of4bBcLufHTHRecL5ZhMiNZQayhtxrqZHLWmDG4rhwwMRoKzWvoeKiujAyqVazA7gnJUBcXjun",
  "key17": "3ECraFWfXvUUcJvEdKLEDPb2ArjVa6F5S3yVFT9LNGJwyoHrSu2sCFrXh5GdNoaQaobWH5B7NdPWcpENspp1qkaj",
  "key18": "5KRx2xQ8F5Z1BkfbnE1zrZsZFjhBeEBj1RkBzUgrtKfmvPkrEzPxdG9wQWsuaVmndSiNU5XsY75L8yBbFRtqRZQ9",
  "key19": "3CTqjEozzfDj7RyeYhcbG1zGM3MVBwhWjAtAXeLZmnYND1TWXcBCL62PcNtMb3ukWt78VynZHyvFRVaqb1bs3XaN",
  "key20": "64KcSSsgLLtuBUK39r2B7ALXL8dEfeP3Ry8VKcWJCjQeERxMadiEU7sb4JajXZeJdAoBKdbAXsFxapTMUmKWyPdG",
  "key21": "3atLtQnncLq5bQ7sYcoZogJP3xRMEmMymcwEu8REPoyVLDJAZ3D3CsnLCJSWyTvpniaNk7ZzxnmHJ5YpuY6hXxpG",
  "key22": "8ejNxiVj1YJfBVTySnTh4ku8ctgRc23G8NLUSmo1KqHSkauB3oiSW86NkXyCba1kgDmmSGxfkmVaPBVFLiiLD9K",
  "key23": "xe24CM1i8Q8dF8BVG7KWSu8LbMLBC3jD29qQtt4w6wb6Q8pyYb5JDTsHDvPESDzJmL2MSUmLncizDGy4TdoYiHn",
  "key24": "2NpxuFdNu4JNedLZDCEG2yQJ9hepxJw9CXFYF65z3uV2TdEaqtnHH3nStiTMVWMZrVf3KrBwJQqz1Xrxg6YXgXwC",
  "key25": "5y2NG1pkFuXCe2T4YrxwUbVXozLQEWgsHkbDxbJvKvDJcQPDbLFLGXiYW6bRihNsNxcfW8Bm11PdXH6HiRMArzU5",
  "key26": "3A3QhYbVxd7Ti3omC1V6sbQCM3NUK6x53Nhpy9V3J2SLXJHET33VVu3BpiMsXdTGM8xBa8SAro8Zo24WQn8fzg7w",
  "key27": "5gkom2thUNPKExJf2cnPimqkoibQWazJFJpNKPxZsW1oK4JKKMM8Mfc3GFAHKEesvMWiP3YLGJwRoB1ZoG3XsRoB",
  "key28": "datBrwTCMVTXhCDjKM7qhYYs4XVBaauZTXnwWq7k3qLKtDVPWF8a5o3JdzWh2wEKuNUDGEie3hrcj4QH758gvvM",
  "key29": "5TrhVinCxRMEyZHpKxWSLympSFGX3pFEnuiLt9LYfQHgoYeuXwv3j65eCKzG4iWWyRkfD7oDehZFHiiZHVGBF9yt",
  "key30": "3e86Ys1FTF8nNsuaCR56RAgEAXe9uBwLVy7Q8PJaoZWcGg6mdareHydFCMszDnASaTx5CzeJKBPcoFwBhjyo2bYt",
  "key31": "48fu5KRsyEGwMsNnNgYaaguUqL4NMkfM15wnTfGZdeH4QjtbApjArUgnTL24vVzkp6RKukUtEf1N72H8xVe8ExAU",
  "key32": "3umybCt8pQTSGtoDBTLLdbkLQv1C9UsEpMLvRtsTtrkW2HHj59kbj4D7kGLg36XkPfowBeU4TAXn9PaZd9eLiqfF",
  "key33": "2UnBt9DCXiC8yePhpWiqZsZF1Ci8VEjUEiuYL3J4h4139B78Yyg47r7wbxYamnEKu4pNHwvzkm7BBZuXKkLzH9wr"
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
