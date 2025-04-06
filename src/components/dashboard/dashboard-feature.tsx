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
    "67AqaNVxhCbfUNM3sTL5C6BwWYr5wJR2DHdosGr5DbkbVuDQ3DiY31kAnHGveKzB4izPv6gTg8TMJy3ZBBCMFn65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yidLgVGrztBYbNcXJmFvBSoeQnZpEtrH917HiuVaUafyTdbFfZWwCMi5W7S8LmENtm5bRtUMkLgxsAg1vy5nrRH",
  "key1": "5pg6oi2oiD24GbrVGTCwEy28bTAtjWkBNC51Hhg7f5RMsf89QNeDrYNb2Wz8yxdvGaMfcWKCds226C9aMofv4wjh",
  "key2": "2BrewQojYrA1dSfAjuoQqdvtjSohrcfunaBqkYcU7gp4xSvhdnXK2fonUgF7UhbsScQsSntyo5moZUrBvQ7fosZ4",
  "key3": "2dfb629tcmBd7cMcLiZHrjtqCSrdxwKLfu4391J3atupeBFm4WANLXDKuqSEtGDLjkcUEwP3SMaUEtZMWTJ5x6iS",
  "key4": "6MVnDd6RpcCiPdXR8ywYnX7dLBX5u8PEsfUyW3YtBFy3iY9G3QwGE99t1htp4iwcUyfXzccVVh4LCtSe7ivq7UD",
  "key5": "hqUj7VrbsTqytpmQsgc321N64aJiLPTCWY1HfrVbSA7y5sfnK3cGwna6PMZhiMb7VqV3fKK5NfMnrvk6ViYnYfg",
  "key6": "3h7YfruuwvA6hzYbwKjoyBj2kumywkteTffsu94DQ7Sq6Ce9WDdvRGSrt3GBiJ1kXeHtMw9fqeMM11FsRezMGExG",
  "key7": "9RnSPD6KKsyFvTavecpR3cf95bn7oyYm9HymvDsmT8w4uJgVpLFfLDj7LbfLUmSqqmMiEubEJMjAUQKoBeD7D34",
  "key8": "4VVvCz9pZW6ympxgPDr4ecEFh7TavVXQUNJoAjoioXWsW3kbdrsfTXQ8NESjRmXwFScU6ECHd4gzNXTYT59NfGwp",
  "key9": "3oZLMp78bSWGSwqCmtNH6dYd3xjxngdQeqpHN5AKTM4UP5LS2Vc1W5tA6Ct2KPf2H96hhrK49R4JdznC92BvtcjX",
  "key10": "2xKTUWPGzR6jwPUY6NUJNmirMhfKGYkYPkYbiuBov2zM9h7mF9r83wHtYCATz82igXHo3cidadopUMRgiptbGMo7",
  "key11": "3tyYvEcoVbXniJxW1cUTC5b6SwkJ89ZKHAZEwpiHFaazZRtcXtFeCPAWKe1vbJsEL9gFt57P8BfHX5BJuiF2Usp5",
  "key12": "3FFtVs4ugjMKe2K63HWbYk4UMAhft4UrGZmBcsLFeoxRwnmux1kvPKdGq6Bb24AuyhPWLhSLiTXsUuzWC56pXhZ",
  "key13": "fkcg7eLfro6LE2LM6wrY9CgwzoARJ8EQuVGj1D9XhaF5yHvVXvQCeaaiZib73qPD1cYPNdxSJb42h2EjxfwMzQE",
  "key14": "5aV84SHwHQ4reQEh5CyibrVBfYG1D4LBS6HRnz8Vyw3siuk4ofiGh1hjAUL53wnsSRqXtTxgfz3PJYkJCUykGa4w",
  "key15": "3qLAW8RFBKvYLksmMuZtp9VJvo7ZwHCEGn3naDLoa6W5Q1gzsc1FdAjuAvVJahYUCxdamsV6HneQLXS2d4WovHz9",
  "key16": "LLZcZTzWW9JYrPez5ocZXBxmJ2KuBJNqG831SQ1VGS5YmXpvzNvpRohJWaWYt7ebVHJK87GF6qJVXLe4naxUz2j",
  "key17": "3of1EYU8hErsXhR99NFqb8tcRkZp32MdtjxooXhv6YGswpEotaAC9unEajTC98va8k1or9FhjRtSuW7k4pzxVFx1",
  "key18": "51eheuEXrMyynhwQTASD9C8QbWLiQ2qo8moTwpweWhsYWYjAwmYbQT3JowGvKo3enkY36PQvt433GXcgpT9YS21m",
  "key19": "2M9XRDURigXYDdj11LvBBPkc44ewBrx1E1wvDXx5Dqtxy6ozHu7E16N2Ucuxz4WkJa8v32ayAYCnbr4NqpppgDCp",
  "key20": "2UidpDrufsTLRRajRa4keiz8aYYPWQpEdHzb79YWdHPCv8a8cCqhEGMSQsNJeHdC7NH3iZHDqfhE66onmyqHwurb",
  "key21": "2ksZUgnfoFYwen7ZKKjmZ3RU8rYkum7NfHDJ9U2h58J4uXuekm7wKacQqWb661ytd25D3d7QC8ZjNYiQTPHfqtST",
  "key22": "3p7ARBS8ZhGjfCPcNjnga8QjC4Pq8Csvi68b3JAmKfCDkoVuZNuEK6bP7wr6SXknk6VejaGvvTocZt39xhgMjBpS",
  "key23": "3Z7Z7Ubbupyf5q2xJfJz6bW5kKVYE6a48nkVPJvEVHb9MT5G56XBUAAChaQjjWoYwubXmFEM5hi3MViHDwvFHxdM",
  "key24": "4esmEQJU9baBJf7QoNdrWneMDTbYNFPm993TDDx5Wb7PsHyXF1SfmbtCHab6vKL1qj7XpL8PjedXiBGywUQK3F1o",
  "key25": "38ALX1pxY6TetWyLtGuAhce3p1JxLrd4ZufyS442CDBt8BJrmVbv2r2bDcYGrghDhomHnUs8gxjgar2NKjEeCtVz",
  "key26": "2cfLrXTBJW8LznDYgNsGYmyhpoEJdSJKebSgGhz3GpuiaK1x2objggoLcfqxJrQtdYiD2nL4Cyv4NmKXaTN13rJf",
  "key27": "gxBv9o3owibaBfjt4BdKwqpwKM9WssAvbtkSyWFzJcXjEYnajaJ2Fc5uWvBhSoDoNqCCSSyUsgMm7owP6Q5GAT6",
  "key28": "2GoZmotxDLU9JqNoSjSneC6Y7B8rU6TAtS5yszrKsqUFEUZXZwzePGscp877ui8FvS8JfS558EuGG1LEFLiMuvrM",
  "key29": "3PuCgBAjBQ79hbYfWLEWvCBkKDk1HdTWeUEkdS9X2FHRzoXd9YFhP3gpaoa4oPMsiQBCwDuTTQVnzuZUZNdQVu4u",
  "key30": "644kdFxynt4wakS3BfVdp1YPSeBuAjrx9JkFjkLTbMoySeNPcM27mhLNdMebbqBpYnys6J3XdVUcctSfWBSYagDF",
  "key31": "2yXjwR7TCnPPLjMVk2QzY25QHegz6WcrbxaETJybuHUmJhFE7jnZnHxDATQ88bs8X4SUkWQ89N97Swb98vXpng8y",
  "key32": "3MbaAqAsUyERoPdniN824skCRcPgz2PtazmMXC91oyGgF1YberTeNa74bWhzgpu5CRAvLv7eVtn5mYzkp1oeX5X6",
  "key33": "2HijNTgB1Y6NT2zizfzRrZjJW8iS9QExYbH5kCCtCNaA2ZToeNT8uyFX85WoHvCQtVMEJhnUk7Jmzivy9RiFPKxF",
  "key34": "47vPYygTioF2sM73TxDaRMf4tA5W81hz7L9DR2XXbKmbGjmEymwRNwhXK4U3Toptcm5X7xvuEWNd83apsVmFa5XU",
  "key35": "2TWTxjUrM84FTptedeF9vw9FGefFygegkogN2my96SJbbTjPGeq3fkn6zevaW5ARHvmxnrE1XbrYBTD8vJSjmGHu",
  "key36": "25UPRN9DoeZcCPUpoWCzRSFaRLUe5XdSzigGQWEPEggR1wCL1WuQE9YJamkvz45TfQB52kczRBHELWzhpihn2Fng",
  "key37": "5EJw7cnPkun9119UhrM8cisvJcteqQz2GrLeyp5GKovu9aX22Uip2RbYjhi7FT6ZBK1UZvDrzfnyGVariSCHPUQb",
  "key38": "2SNwnx84ib2BiKQm7Gxs3kkMhm4rfyedfvGkAx42KgHoyDJeMBk8FLMkDxZ1kdUqKSPXcw84SDTf2vzTsrhAvT6C",
  "key39": "5S3SNBtudc96TXFfDKAbmRVfoRuUfB4Khj44JgzxhA2Xf9aUmeM8ZsbXc9xpuJuTXk6Rk1pWpU39bQsabvLBFeKZ",
  "key40": "41fgdiXtb3iPCDMnBca1KARpYdQbbBBW8wghQPyz9i1Fy7wkp9iebS5acsqBjNo18xuyHbQE8SApSasCvucYpZtG",
  "key41": "2NqnRWf8M3QNg9J3BWLXh2rVWq6BBhsq5cg1r8yWK54Qi2pHm3ZgJHz4HEHmScp36hShJiBfY3ipcuoSGH75kLMa",
  "key42": "4pf6EP9uiLhK1mJr1ZUnUxhArnmb65ADK7nwCAYXvvFf6CtA43ohwgihiiDCSD1XsEKb9K3N2XSF51SoiUf4g2yK",
  "key43": "CHSMjAThzBxSFeYfLHfzjVBKF2xZgVbJ6QKD8fY867XbNmEoGPnKxpnWJS8FqUqM3NAAJVSQQmifTqEVse4McEU",
  "key44": "5yDSgZEAyfXYVjgZUPEFQ3tW8GbBDb4Yr88dcuwDmEkpMfb218DGVLfhSSagEhaijBgUPuTncGYRuGXvPtHwSZKq",
  "key45": "BBTuWTdNYWqEzVFmz8bZyDWKeNU6P7ChRzkhSSQAThb3yMkskJERbunbWJbD86qGKB61qR6BBadsLWgKF4jPCMa",
  "key46": "pbWDDH3fQdmP24biervyuuwcP8TTekAXSdbSvmeY32tYnukJ6qEKBAjdFdX7sumSrSnbmSqwUy7S2xYomCYWHDn",
  "key47": "5y7SaFKBreCCAb9p4awbmyvXYbiYzSqeEjpGKwFKpJmQLLh3Zd2DGuR5DeZLfrr6ba2fzcx2AhjGxwZiFT7Sd9gH",
  "key48": "4SpvhWS7ydbxfyMFqV8s3mnyW83bDZyLxuLSUdjBvpcYULzSHkYAEW6FFasZgwFRFkdS3USHiFzeahZQH7Jrz8Mz"
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
