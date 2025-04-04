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
    "43i6CKzLvrtCfXxWyRS8ZbhHipqJ51wVJ6E1cRtBLm6NCXgkxuf6d5UbzDUaZ97tN5gX1zGeTXjHzzFBd1akvTro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P3twZFzsqHKq3wEQPxJuT2EDE8Yg5Lm9U1YXBG6h8PfQYhShVYWkg8yJ9ajcrowV41af1H5WjX5FTdkpu1XFkc9",
  "key1": "55MhwBzW6uX7HZA4Ry37NecwT6pjxsFEhbG1JVnKaLH1Pau9gZjTHxGCSVer4JGPXDXjuJGCHow1GnuESLdwuUZr",
  "key2": "3G5Amf3wDsPb9BF5FArxHR3oK7ks1K8k5VQ4niAzNN1CaaapRgoH2irwvGFKH4QTr2hRLiM6bTUsi1wJa3rWTaJ4",
  "key3": "j5EEHxFdCPcyRmjVzRFLhbig6qpem8RXfy1RfGbPRQe2tNnBLf1VTnHqmeYxG8BL4GsGoPUQ5L3Htn9Zjw6Pzuz",
  "key4": "5EhVKrgpMUZ8HpQ5Ck7wdwetGin8sVf1pz3YWjc1aL4XeygRT8h2RWtAuTG46E731KrNyBhm8swQ22bKNpgeEitd",
  "key5": "3FsrAFV5xYf9g8FBJKhU32M6FohZZGv86GhCye5fTkgX4kzCvi9bPxZdKUUcZ3HDCYWT9X4uJS4cCYDe7ErDXSCm",
  "key6": "5h2ZQXa7qFX47V6GPF3vVq1o3GpmUGYFCzjvTLKnHAhYXi5X9B9FT7Wq7doLSKET1UCK7nk59H9yuqKoNqLRsBx6",
  "key7": "5kroMX1QY4ah6NruttRdfSUFiYo9h7Wtet6fSySDDUiLyxGy63AzMXZZoE6hyRB8zJKTehmmksqnk1SfWFbUAg8Q",
  "key8": "3RkX8UznZKv4iFA39T2sBFb41mJ7PTR6FVQ1ukm5SwZPYbvxPozn4CL9Yej3e1Ep6Cx3uugVCnPoe7puZxjyxqR7",
  "key9": "i3pCJLvjfQyXSXhM9KDrCaJRAfjKWPCKRGSD1VteV9jEsbjtieTPughtmggaT9eykBcuC8Fc4ELisTVcQewHe22",
  "key10": "2XVf6Bat1GjyaRxBTQsryqZsc87F28JGNqZDQbvmrC3Pm3UjVTpGfbKTMRgwDqK6sppduMpFhdcuYnbaaxBYM2dH",
  "key11": "2ceNb2gGwYUrAvQzPenWUsGCG1mXeho7F67X5xiKbFMscZChYWixwAVZXWYRxcUqaCYvbeT3H4A81YgBsu3fMJVE",
  "key12": "3ThgmdRiPYTpjY3Qm5WTY2UK4nPkFgP5MDLD27u7cSSNdnQcGfEBr1dFN1aqE3VQFTWR528mLbVWwBWWyLoLW644",
  "key13": "5JLUHqfANwHQWDBSFSnbVD7WSmA7979gEyin86vEeZRVydnDUGc6b8JEq5yZWQ1BAcHY61woHSi1QPomY896nmZo",
  "key14": "4tEFN3MhNdE7MFSNniaaRh1mLFT8fQE5BVv6LfzFsduUKAUGUH7BeKk8jtscA9E3EVod2r3ywu4Yg6mW6W11ess3",
  "key15": "3miSK8DKTrJ2UP2j9uBWqBfFiAsysQeCDGP5g1bBcdfHzoA7fNpp8wacKXwVh2J6mVCQmsefFnGNChYyK6jzDWMu",
  "key16": "29HBPC6FdW4CrhLijmD7XVw4H9vUXNjtvxqnP1X1KWcTQVHdRLsHo4Ns1DNcxv9GLV41wFYwfx3SArM1gqXn8cYN",
  "key17": "kNGR1ES2jWLx7DLQkaE8nSz57Nn7qDzGKrBpeAEfG1YyET1DKvCi6mPX1m6pgUs8gAX9E5Mh7CCt3Nv5Qbwye5A",
  "key18": "22Yf9XgL74U6VWr5Uuc2787USghdhcEPSGGZcsNyZDEqFAXEJrBosdwmzYzun7xTv9TSAXVwDHzqG4aTSoa3YpkU",
  "key19": "3cmthLGtwLm5wi1UAGCyUzd9wGMabN6Ju3VjndvWbrUeW99xBjJs2A13MuCojZrdGUbFwcvFPHfu6VUbjx4V9TYW",
  "key20": "4UqUsrszNoDKUAgA4GWy3PHB3wptTSRasGzB4AGpsMSvuyLpmXhQJcSZUsKjqjBneW4umWdquJYHCarhUvBFjHm1",
  "key21": "3WEZ64byBBNkLd7VLii6J7bxu1JrmSGzPKFd9ovHijb76D9JWzCV7k8VMRdMm3wnYZNTUrNUvqruBHGa4U77Pq9w",
  "key22": "EMuuYAPpEF6ti7PgRDzpuSfkpE9xqGgxh269aCcJHg7wcF1c725qTumCQTedk6ZBkXpkc7Nf6qZrJnzQWY3SrhJ",
  "key23": "5fiY6a3GVyGFaxJsGA7UnFKASDqNZf6rWdPhVMxzCGZCbvPvxXvfF442uJhextkgXBFNcCyxBwFao8mXwAPX3Nek",
  "key24": "4D2eigfqhaKYYAMpqSGHsHHTA6sYUdc7xgU7m2M8Nwhq4B65VUB6PXkC9BqQhKKHSHXXbnGfH5MA3QpgWvXS8u8q",
  "key25": "3ZK21P9rzCdmHuJ2XfNUs5egnUS8oTUZNVLth5gbwrhvsjZP2LCeabeS5TCxiU8i2bjjj1WfNPQwN35LZ9A2mobG",
  "key26": "4uDYKqGmRfH8z32kqyuAJrwQ7qaSdNJaikPehYa1Rw6btXrp7RTFiGNmjn6DdAJB2hVd8agSwQvdgjpEVaavPg4C",
  "key27": "4E9R832hfZWSLGc27j4zMU2Pj3odpgo5nG1yGmDxfLw7XB9p3brCwaVLua6fPmRNs7ZBUBfQphUPGDCcNDRpfrjd",
  "key28": "L5WnJc83n39XiK68TdbPMyLCoCWuAn2RPT3Bi2PGpyWR6DgGXKYwSnW74UG8tHGvUragsneX9fFVZq2s8ZpeD2C",
  "key29": "3D1uvzeqBviAp7N8jzeyhEV6GFnxY3dgNtSCyGRB7RH5QDdtxNUoWn56PsAyJAXLq9c284sdmrQ1E3pikuUWseVN",
  "key30": "5mdnd6Xz13GMmm8hXPJsxv2qJf1VHg8kxus6jaikVRg61RuiaRQu5jCeQzZpZC28ZTozGXmwC66Qn2vPeSXq4D9c",
  "key31": "3ojdh38FkykGQYBdGRu4oYu3gaemCiy5aCuz7YPQJC9SC992rN62MC8wDpYB5cM93EUf14HHfNMdTVCcpu4atoQX",
  "key32": "4B3GFHjpRYyxnFhy7epErVDbsVhXLLw3LfpyQySvdZfeRZNcS929ereEd33dP8QUebkEemWdc7F9J64mPdwZRefP",
  "key33": "5ZSPFbpWYbB4kxqwEg314fmrXShD45pbJACeA61asWsnDqm7HQj5Y9MV6DdeHH2BgYhbGq3r2mRVBAgzAiGeXAkz",
  "key34": "4hyivXjc5qXhphMhTUQy1NVFAqoywQupmXJdkZGaaeFSp6QExEkoP8acvt281bYCdT1W6iEnnuyLiFWeooxmbyw"
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
