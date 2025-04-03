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
    "2zt1E2znbWeRvrN85KmtshfZiwpJMvbjoCmkwbFtgoaUqFmgrXyjhdAtzbtBxZm3JWZDReT85T3T8rK6YxLnyCQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zL57F5sjeDoHHaXk6nEoiod999Mi3EnKYTW49R8fuSQ7XjfWpQaTQ95bYRLSv8C4WLGc2PYYzuPt4z2uQyoxfZP",
  "key1": "5siKBoxrxFJRDApSeYU6LBaPXAkayKnqWEN2brmpMSAEaRXE3jfuRcdjzdEBN4wHtFpANtJ13RTGXbM137sT55dj",
  "key2": "3kNnfndzEePd6uUXw9qP54BVvizEe6BPgnwN3dkjKo7AKFN9Fjy1sC4cs5Nwg1dzKxTG5g2gTRfv5h2G9np7XGV9",
  "key3": "4BNofXn2Z7JoLKMk26hCmcVc935tpbrxCWW5XE6ySD47ci9b1xpt8Jn63jjuTaosPN1maAmLBc353chZDN7PYCmF",
  "key4": "4b41h1HgUw8X8D4dw5qyp9p6t8w3WLoNCyE5Xs8FApnt235b3dfhVWsTV42mqKFbgCxBbjLdDH1pfqo46eUyCJm4",
  "key5": "5SRNu8GkCrtHwSrzCVC5ofw2yujahjcCziv1CSpncLKvXXrRZbXfruZ8JKdy7wiCY2MMpgTdvFPVrWgs3E57p93a",
  "key6": "4tbimibA6iDa9p9WDhQ5gBGo5d14ri8syChA3su2YrU2Jah6ydAqp7S5u4NGtNGpiSbvhQzvrAG1ut9Kpk21Eqpr",
  "key7": "9mjcc8nHo1FtNg34H5iPRXHMU16P1MprYYpYofFixcvNdSPKK4nFWQaLRTJH6Nwxx6kPLygDKzqSXmpPx5RxtjN",
  "key8": "3S1LSXKDb7ci4Ub4pVZDHQGbnd7uKdtcdhXrVbTb4m7FKMQ5vWdkJX2fCcLbk4YS5i2tWizNF96a6MZcdWyeDwyg",
  "key9": "5iWSZeiWRETEx1mzYPEHi7NYXaFMeqENrK6oNfjphn86BTZpsPri8YjjRC6SxwhFCs8Nh9RPy2GEiMN6JmVxYAe3",
  "key10": "4YjbvCHTHgPXDNy68zFPGv9zi8V2Vfjjv7MhXNEkUzJz8fu6kKy4TMZxRXDDc9H6cGxdcCSNSiAXygThARWmoKqU",
  "key11": "4uYy6RZL7hXopC6yVkWn2DVdj9wpH3GEsQNGpxEEwMkQDYrszAPQx9m76gtL9VqzLBP18nBnXbdUaKCg6VnMPi73",
  "key12": "56TUJYXQxRJGgFxYg7DwCWe9YTpaRdUQa4Aq5CmLvdjuDZTeKFeuDp4uCDwjnfYTVneDP5GWP7cthwHKhPv8e61Z",
  "key13": "4DkdvgJFGRY8okxkEqR7tmTdmwzfoDwMkVXqemsR1JcyErMkLQPTW8jMKWoKyRmGLQLRTKSQz7PDhbQF1uZMEUat",
  "key14": "2ieRJxCysW4dRNp7JqC1SLgZv9rLCQAmJTfh3N3JDGkVHSLSoC4dU5kxqgc6PQAcb5aVLAk9A3JwUnG2pJWuKEgw",
  "key15": "3VRK42NkzWFgSmFrK7Q6irvoX3DJ7gZoM39icZAoghht7tZRHiFo4GYq8hG8NA6PFDvf5appQCBiRkLfWUG4FNp6",
  "key16": "3gMgndXQ2NY8ny6cjX7aCPFdJCzUdFbsgjdpyHvJBmr67HBjXExU7zFooJkPS6SR7kDVzDJqGtwWmQMp6Di4GUDa",
  "key17": "F21zqgwKB326ZdJq2UmjKHzXy79JM9MBUQe9NCVGpGDvaRbVz8ge3An18BwEBJJMPfh9EXJpgSeCKEn8xFExy9p",
  "key18": "2CXAi3ps2949yjafLtm8ssQFpFbU2Jts86gguQWqMwYZUdAq8vhNeKpaFizLMAcufJDeZuc2RYBP7zFMtfWqqkN8",
  "key19": "7bnsdgaJbuRdFQUcSBLK3RZ1X4PzHmBiPoHSeHUaVYPvsfgU2AkDEA4aPaJkvbAstTAb9wrkz43qR3v8FgyKwjp",
  "key20": "sa8StTitpeFSsGbpfSvzzmvFNXd5avjZgcXvKQKftx8KVkp6dXbsZ58MFMBRZx8qJosCa3fZ6eoX1jM6iRhyVV8",
  "key21": "Dj3dqGJyPADt9t6sJgVCSAq9xEyy1sG1seGecQTjV44QmRQhLhWqxnz2HrggFStK1VNsJm1kKdkjJZxQJut7rfj",
  "key22": "32fEZ9ocgQb3H5bNvBZ96AReyr3cs5DMVmPP24rJ2f1yze2fKELudoTYKZQJzM6b7vwCa5voAwRxjxsYEYoywV1W",
  "key23": "2kH3rgiUbPWrySwEGMDdnhAe7VU2LWepStq8EYoDSwmBXDQYQ4ruEj8473J6k6q3TxvLDVieLCCZqAN8gbkXKWLc",
  "key24": "5JKJzLnD2pxH2rMqEz95w54J26JxZYJfQQ7mkeb9dukctDEmn3CSmMUJr4v4V72Lj5iNwxQqKDCGxVwJctFwH8J1",
  "key25": "4KM6pmrTKnjHykCWkcJx12VqZ4avgFzJjaDwQ4pmnd6uRx2Q8C7AFWob2MWFxXBc1LxKdeqfqoa3ToMMoyCVLgkx",
  "key26": "31qoDPYQQjeJHiSJnbZmuiyfaDNREiaCcfAy8TpnDKccnyFwzEdrA9x5thyTfRr9yXAVbyTD7k1bG8n2rJJ4Q2aL",
  "key27": "4sdCbpNqUCdDU98fvJpifwDBFpBrBcc4tFD9dnfvvnMRqcWaNSDd9JFWkjYgbZrJRezBAKNcEGTJt2ZxbsrkYrev",
  "key28": "2chGB2k5veU5BD38fbcQZE8YTgcab7WHbYon5hjs1ZJbai6iABWDthxuNvsCXegCYEEUf6XAZdwwpFXr61veHWoc",
  "key29": "3Wx5uxJWWetSzM2j24xBKebi1oyuzczQrhjYG7LdpJzPKauBJmttP4Ubu5Wqfj2MPg18YgAKC3rre6fbV5E1CDd7",
  "key30": "47DY4CREbScX2qw7RcKzDLVPonKUbCLre9CmEfEPTdu1zVG6qRrasGSF7RmvJaQGkWLDEC7QgTZLvjsN1cv1RLir",
  "key31": "44dsjrkJxKqBwMBpyMRuXGRbyyob3RjouSFNcV8rRqzSizoPoB6nPTw9964wgP7jWobwtKmbU9Linyi5ewEHH9Yo",
  "key32": "2U7hhCqeJZooBZne2T33Caa2irT2BgyGzMKYPSTzsfETWd8zUYEcGNVFaLmPM822osGvSqHrJRkLukwhY6PgV7r4",
  "key33": "4VGRm9BZKEZmh2r2QEJ1Qui17DFWz7mpDp9BF5Gbs63hGNN9JM62ve8ZhQLZbu7C73qnnsfpf5hzx83NJyyKT1pQ",
  "key34": "3wXRy9sweEKR7FEfDnvbgWxZLr51F96y2qGaYWmkc335HJdsPcuwrrMSKX36cuuoLYHsQSjZrduowEGBy6PwGMnQ",
  "key35": "3vygVWz1iTM9Kw5XuqcumyTSfM85w7jo6ipeaSq3rQbozdC5rdkaknWpgMBG5J2vBzMj9AmoT9PhvR8CtWKBDEv2",
  "key36": "3CTUnf7VKYuPDKgcWCuY58XMPmGetrCFdkt9wVTJnBF7erXusjkwHR1CZxHpChP5MoqLQ2pCLE6moVt2ZRYYRHXc",
  "key37": "4w9oMAyy9q48T6mfc3e8D4aoLdBh8XNnr5g56YYBK47RX6nvDZBrxChV7uU82rejrN8AD5zVyBbmocAtDpZxyXNd"
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
