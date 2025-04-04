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
    "2hxXxopLASsKHKLTuAXgYZFYH7WXcwHFmkRP6wfuCpRATndWJr1FE5PFBKN1uLkbtJKfMioH5iaeAKHk6XTGkLzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tirHE46z15wfQy5bvsPXoatSBPLW5ZfM6VnGQb7D34iuPXrcSkJ3BzYA7Kpf74QspQMxRdwq371ALLLyya5wjp1",
  "key1": "4rZSCkaP3uM3UsNZPDFWr5Eh6fypjjGdDEa5WofLou2AcGY3Bw6UsGFFLwDDio9R3gz3HeabP36eejgF9AJLSn9g",
  "key2": "2aKX8h1jr3hmxa46TZtE14SvFyVwRnF4uDxncvyZ3H874uHzRCpsvKiNnmCkwEAYxjWVv9NefzuYY9ajCdUPe6ma",
  "key3": "3eNxEqPUzxJi6QHgSdarAn8XHLPQtzWLQqXv7EqoB83D6RCSKqideofnrhVUwMnfDWVpY6dfWtNrN9VuZEZEJour",
  "key4": "FGwHMT5P2mCrp2y64YN8yxbNV1qW6D7XF1gDmo9m6SWyZgjDjYuCfDVAXaH4qnjuA2nsXrb59ziZBefctqZwaYD",
  "key5": "22CQkr5KgXZP9xZ1d2fRE4dXq5REkMDkyfjj7XWSG71nWUTEVassa144RDgLyU6aRsuo7KxRoWecGigQr3P6D5on",
  "key6": "1zuM9r2EAv8DjHnppDNJ4w7nqcvoovSY8x1GfLRrCAUHtGFxQe41PgfRtkcRd8jFauSL9LShasJ6waUKouog5Lh",
  "key7": "5a8Ytc6QE1tNwHMxPSyJtiYBvuyVbMRn6GreRPn2nZGVYim1Ufa47gt5ePKhUsCfXUwPGEheG1cQQ2uSTVRCkFfA",
  "key8": "3bhTtyYGUZsoZ2E8afgzfe3wQknyrTmsQb8b4tKgpqCNjGWKeAfab7pok9FfS8UbnwnBFUbegnQThRi8uRWnysiJ",
  "key9": "5Uq8CuVtYh1huDadWNvyNMmev3ApYKoEq7i36TtiqMmpKHBkJwHimzP2BS1EziKhYf4PiQUoVwu8g2jtmdgGFWTV",
  "key10": "5fQmzv3sLZR8PKjj4tDBZGaEMyYs7qzcB6yDeMr1xu8dwBy6AhiR1C3j3RFv5z94af2rt7vfZfu2qEau5XT8Yfu2",
  "key11": "4y37SLYvsCxyXuSVbr93wcxnXqEUQqgEvsYAHmPyyTJkP9BuniKL6skrD8Ddxue1oDa2vNfvxtU4gqBpXTWu5ceU",
  "key12": "4AZx8qepXxQJLqDVhNWS6fB94XvmtzrgHm1ZTiJwVMaztKzWaKKwtxYhwJx4ZuMeJwP4UCBVEyj24QHUhbEXB7DF",
  "key13": "2avvd3Fn3KcSxxJA8XVkaWYfjRoq52St7EsV2i611vzZ9tY8bEtrKGSJq7a1sgTJLUD83ce1mvwavj7UxLVBY57S",
  "key14": "2X7UcjFAgrfgzFBKDsk36qTVHEungJjeG5ThxnwWcuXgr7ke141m2ZVQi2sR2v7qXGAz6kmdUKPBPKg5YM7zeUFf",
  "key15": "3Pf3J42KxHLtD2eGmoq2LZ7xnXoJ62uPNxDwyPnoskp8GmWWkxbRuXDT7PgNvK3qWW7XmgB97wRjKF9JKm8aSsKn",
  "key16": "nkiQg4uP7f3wNesUH8VGyJi3r1xm1BNutubzC98s8U14ND2g4ye1ik1vbgfYGhvucUuNKfqrtf4csB8gEPaxDHG",
  "key17": "AkbiuvTShhiNxQZe2aTT74NjVX16VUgjUJ653SyBQHRdheRfU8fcV8osKCiwD2vrknZor346BwtU4hCZo1hqGKk",
  "key18": "4FjEhfVe7sK8sNqW15aVhvF5c7T8NTob3FyE9ij1LcZAELzqKEBSwuJs9gadzV83YfUPaXjcCSK5W3Dh9ViZAwiN",
  "key19": "4PoRDJnsfNPGyYwvRKsNEYRiZFGR4wnFK1zmNN2RAfVogyvFNMt53ZCehmKegZ48MftNmobKDnSxiF193jmkMZXM",
  "key20": "2kTcUyMcjssarYE8i4kKuzmj2LpmK4Zpmh13Nv713PEYaxMHcWSgwSGXFvNLtfKZAP3fdpFwvheRcL5XtWC7vhXx",
  "key21": "2axRhP1F7nLAsyNwHf8UMJDPFK5jiMBvvqMkvPE17kyW51JhTXThsrBRNuK4LDiKVUZ15qfwq1SK9HBPBeas9TXm",
  "key22": "3SZrLZs1Hf4SM9YRKu6137g4Hfu2peKFPH8vxC52qU37wWGBxppfctMVpJ4vZnooomiZNwcsgSUMjNUpawbF7gno",
  "key23": "5WaVuK44KcGSF6t19goKToiXEVUi7oxsj8E3As1Wmue8bM9ZDvKvHVbY4HngHUS3e6Gt7QvakxGCM9qpe1S1aMKW",
  "key24": "5xvSUN98wyVzGjENcjwjCXsaRobgpAuVrdxuUrivU7NPVuAsnmUuoK1JWgquWyEi7hDJGC3AUEZFBpfTYfqnGo7V",
  "key25": "3mDe2Pt5wGS8BgoJt1MoDYXZtQBZS9UDfgfbEEH2G2r4vpseWeEHevxKwxoArUnd6JtuvCqwzfkBFhvg9wnzP8m9",
  "key26": "4vaZmiJZhp6SGJy8dbzNDS7qn5woCUuVDXVwatvwkytMXvpEWYmjekqq7FqF6iiwZHnGrrmyd8o6b4unqoGRHoup",
  "key27": "34FcSLfKeG4JJqL5JAmLBbqRkpTqfH3X8VGFQM5mGRVkr1H4rL8pVAwSvKJ1GqdSPs7D5VDhLnDCdQA2tREMGBGY",
  "key28": "KiTN7QGkLgmM6twVc8tifJvKD4eVuTLGxSUJmdikyytDq3gRaxniCkweJT5Zdf15HySG4kzAccyuYLX9RrhETpZ",
  "key29": "2n1hu7Q3RjLTvAB9qnRavFMAwPTn94Fn83qqhYp7hLe69o23vTqNchr7H1hD8g5bgUxT1pEuzGrmCwsm8fzcnC9x",
  "key30": "qzveavhGdUp1cqgpSJMX32BEs4TncXNVdtaCR3AvP4gnaqGdT6zkmocqyb6qx1uZ65pJ18gULhQ6VpuNZdzaQBC",
  "key31": "YRs3t5F8YkcpHdBbTUEibEUFD6icHmT6QezNbN7J9o1jEwKbdBuo9KWXKn2cqz6pD3CqMF25DDyg8bRKZrtxKtY"
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
