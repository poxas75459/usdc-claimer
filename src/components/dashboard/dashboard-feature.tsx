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
    "3Kbs9oH7kX5ad9uUCuH9wxDBssnAJL9TXPwqnrBFen2HuLFoewcsgcoqsq2zTZW9khREkAwsCmtoGh2EzXyNNQvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uk49zzuRCLKXeacsvu17J2Y1CzD358N425XEzTipaCbYjeboDauwrBW2cZuhLJxu645gHTsT2x2Ua3y7cS9Q7Td",
  "key1": "vnB5eweji5QY49mCwEfYu922A9n1mHmZTD2NvgWiy4aHhnYhH98TBgiANH6DstcXNKD74o6DrjynqMUjSNLLs6j",
  "key2": "268omRxuRSan1RDiBcWT84pD6dDC6v9LRt4BgaP7GtWZkerSEWNq7AQEahfXuafVvBJaY8FEYaYt4PLYaj8D732r",
  "key3": "bnZW99sULspV7bp6EsvHXhg1QbYkaqZRd283v9Dhzk41hp46vhwxC6UvRu3CPgUvGD3NCidFhDqzb3pskw55DMQ",
  "key4": "Zo5d2e5ChpVgr9xTZBsanzjgLYuLJWf5Xjnk1o5hVJ6eJdD5UBrACRdrtchpEt9fQW4YzKkThk2E5wLv1NnLSL8",
  "key5": "Pb2N58rtJRUgy18EQFEMH8e97Qcr4F6HYtazmwarEGHAjQg1ntSDc9s2BxLBtVMnWtodtvDB2MqUfrAJPbDR1AG",
  "key6": "2zTYvurGW8TCyP1pAXiU3FL195ymCiqzzkMMdkLQGprHvVc5EBWuRsjZKCYD9nQyZRPkHAX6awWbzBCoF5VhYfK5",
  "key7": "2sQbcUgTjuQiygMWihwYTR22AkKxcRKLqYCsDEUHHwLrVNKSd8oqgr1P8VnAxASxf7Fan4gkHzipN7LhHkd81EQL",
  "key8": "4iWTHAtMX5NxnszUjsh8MjeaxzbCqZpFKU2ZRqDWqHAzSyXsBBvLzJaUUCQuhXtmbRUsvhK9vGL2Sd9NbEZjbyYk",
  "key9": "2r9jXKdoQ2FPzSd1y39uqfd6hL4639eERZoZdxQyUnGqG2MJxnweJF2PTCCcqHhzVYkBzGyXirG6C7DASbkezhQE",
  "key10": "5hzCU4Bs6Gj2TotS6YNc3LnGMZ7N1Sjv3JWNTtm89pHx4Fzri8dC9Vjt7EcmeGNYbwPeto7ujSWR8NBFNnMozcpc",
  "key11": "2BQeyjP45G5aRQ7UdJDvncbPaY3bkwYTze5vnSqngrcYMzr7aZatcHXDWbvDzdXd7VP6VMb3kpqq99YDf1k1VZ1C",
  "key12": "2W2rZs8UueZPPD96Ni2EJyyXDXRAd2sgUdbE3AZVpafKsrw2qsVFfSDawrK3KiHWqkbsA1bx9rr3TajWc78bu2JQ",
  "key13": "ADRg6yv7wY3gtJVithAybb1PfbEcFhbNhfdosVWTFZouEonKZMrC7euhh5caXqS3EuyCPZyNbEDZ4cxSZVYcDLS",
  "key14": "HTYhTJwPA91aV9phfUeDhE3Hp5RxCTXWeN34AHHN9fs76J2eASgARLh81QDL3fmxMSc2r8k2KNCsaLaCF5fg7Qq",
  "key15": "HrZJxithciVBwNyBzafUQRkty2omH4Fye1Am9R9aA3WVjgqQFxTc5U7iaS79RfKTH2Y8y2xARcRbTGtk6gLastV",
  "key16": "5St5wQnzqCYmD2e6oKCocKjdGgPyhxajh6Ut1xy7no2irqGsqcvpXDewsKbHCniuQZdZkeM9CM9V8A4w5ykza622",
  "key17": "5jm4rrj5L15Q4nVvyxgX4f2LTcDtbrgr2JgSQJ2siCpBudnNKzQXssfaaRnWB6JfQ8BTA3zb6rY8Q7nu2aKrvtxj",
  "key18": "4eE7fvHuADT37JzrtZzo1fpMq7cxdirkW2S397q8BF9RwfQ3kyeZa5tBkwEd3ywFEMcoYyTgSYGytigQUX8do528",
  "key19": "5LZuu64C6QZmYP5P7FTg1dj5dG531MxUjt89kWiiFa6anNtB7EF1oNcTY67y9c53FZGUegfg4tYdkQQy7wv6i8ZT",
  "key20": "5rqddtjdetu1HTsJdr2P4Ac4yAT8ZLHjVBnaCfeMSFZ6GA1vE4F3jGURmi7CgvSYeFXk1aaJC3zKXWPmnmXDhYd1",
  "key21": "4xJV7wKUD2w8m9iBFamqKmmPe1xPA2f97xELmXRhySRzD5KLWhRjg2xqoLnJtHT5KeQhmXdQQKXomv32pSCBGjVK",
  "key22": "axNKYa76WHfCyLxPaf3G9jvgnqbAy1dBwsTT13G6KDdoRP9TXi7M5fdCrwrVf7EKRXgYQnBAQirAnJLU1HnSC1y",
  "key23": "258c25zQxuGUyzn9cu8fUZwQF377NqgiBWRHCf79YNQoPsuQAFSkKgHRx9R54wpdMJohvouX79RW99wxtbw9VRu3",
  "key24": "5BfUDqUHg3ipok8NSREfpkNpsjPtYKs9qpY3qq7LchoGuA8cQyqMvuXe6ZfF9GPYpb1jfT8g71byjDMgcxe8dW3w",
  "key25": "Q2Trioqm73CYYs2WbvrXpc9Sgz2LpZhPRRYEzZuMXLWVRABepErjhwa76yzd6PvowDJjnpke2zzoMd2qxMkhV8s",
  "key26": "5wBAxWQTi2pND5FYJ99SSFqLg7qXCec653P5JswH2fWUiWh723b7CzfhVKmXrqmtxskKUA5Sr3Kqn9KvBPUwRikR",
  "key27": "KyUQjqLGfSodNG77gUWrL4NCLNSd9hCuctv6W1cfF8r8G7m5YWAo9XazMfMPcaY1XTKUb4oQ97zVTBp7yc2Fh6N",
  "key28": "3zpbTsL1wrY1VNANU8Xi3KuH68yhqHpLwtXAHKCdPUGpgFvHSCqfxdU8xJHDfiuAq9bDoRxJyYL8mtgeVhfCqvJv",
  "key29": "5sNoCTbphM6FY8RamuknMHjqPDoqKXcbMRV1QUdXv8bRdw11RwBAoYBhYS88KdHimZ6t3RKpDPS5n9cUBHrwpgjg",
  "key30": "4ftaEih813U9yxnHBXNkXd91vSNzoY2DCH5SpBpe6xvpaP8Uo82oC5Xe87kZpPuLukh4Q2BH8fV8ffjZo2Ua5c4D",
  "key31": "5wdLMsHxBJDiN4tSfta8ognLhh57W29S8M3ePzydyS4fXN3BmavHrg1YqdxZ2i3xxcuCGYAjpvN2wTnenPWAAuuQ",
  "key32": "QzrSVmN3dArcUerjvDs6udPvmYvgkmFbKtjYUr7MKc7xwPHv5ZszGMZsrV861VDnvPza1XMVc5AwDJsztjuHEkN",
  "key33": "1VWRdTyJCvHALkd6vbPMkBJ4yKTX1opJtUqky3kLKvU693B1MqVbcB4vqAsm29Gocbxq6Dh4fbXHXQZkQxT84oD",
  "key34": "4wvtiD7HqLRvupiBzhhFUWMJr2d472N4Bx9B6YAzGbPCmHQcKYYLG92cNPyJxeouAMM5VddtmeY5oYj22zWjmKU4",
  "key35": "3FxHhqP72kE2HxMF9xrDhRo6Qh5GmmpCfXYoGMhjzWG5qrn5S3B7tSNQnJYpak7W6T5AEf68io6kDQrnZMXPC42c",
  "key36": "4py8HyuJhduWyP8jMcnt9Qc3Jutu6Y29h3ngpQDRkPZA9gk1Rg6ARsByesJBu52NouG1kq8XQQ5EqiCepHor5fCQ",
  "key37": "3KvGwQrhtt7TuidQre1BZXBN5zgK63NRPCSzxb5T3Q7bAtonBCHDEGkBgLmLxjpEPx27eEEh3KENavzbTtsG7LTJ",
  "key38": "42kHRgXRELR1NWmnusdkewFSVD2pC8JFRbWSy8gxXLwg5sP3T48wVfPLE5XAfUPHMXYvuLGTApwivcbyxFTji7ke",
  "key39": "4nLR2GQwmAPdVSranwhWnUdRgh3bBPbGXof8DcpMeYHcXj4X8u7JdXggdoGvkCVxcKWkdqKg8bnVGNDzLwk4BNi6",
  "key40": "4vZ7Juz2ydG5VUiZtaGUSKEAh7izAbUcKMfyJeoS9SAbnvdZ9wDQFAkiHgRgqhdopPdmj9iXYHvhTv3GRmfVH5Xb",
  "key41": "TjNUzsiu1EMRTefBS2WrRGCh6xEUwwhN9nq2nFeMnT6ACC2ztFWrw33F9XCK76Azpza6CLAwRt7mSXddghyeu1R",
  "key42": "4tdbLcfCkYWoAWE2qaWaD92WfarTL8o9uvBh2WGwLZmkTN15ojQp7n2rQ5eK7Zg9n6ZvK5QDmjjHPENZ2qdq6eXX"
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
