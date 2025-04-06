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
    "3TvdVS6tQHcB3Bfw8NCwzrbB5j2hJuLY1ihpa3fEkNRmt6XsdJDV1sTNgmF7mafzPxHh4rhHimwg4HSL6L2NVXkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32pFJqKhJQFAzQbBgJzHPLfjp5pL5WUbZ9cWKJxvqQaVcKTvu51h899xqvaz7F39SVGBH3cNMR72B8KfsiQoCwkZ",
  "key1": "hc1HnDE7H6fvsdnaN2zt6TbUxz8cqBYK2cR6FnYqghgiTBdXsXJaMY8itQYJ7soeraU8JxwD5jmQ8jFLWmYG65P",
  "key2": "5YqUfrMPr6ywNMJquWGtAKz3AbALLkCWHR8zLG4wyWBv1JD6bDybWRxAmisGtokReR3ZRyFCjFL418LTaHNVm576",
  "key3": "3tDrpJqRXtS57xRRv4uFSzfbcuRVcLGeqH8oA2Jej298bZykQxFbSeXkdtHpsJZL45MzwuhXXZA2t4S1UghJt7Yi",
  "key4": "4yvNnvdcnRMfggU2LF2fruFFpRbupyeUSUStmHVz4J4LKRhXvzjay5sg71PpRN47EhJPSvJ7G6Z7EpABc61jVTdq",
  "key5": "2wFrghcZazRPLYamwAcEjVFdpT7PM4kjgaae6fJ3Y7KMweQcMB7ezpk9ZGDmoZE7ajwNr8i9WSM98dUCJS11nKCx",
  "key6": "5CqRbHmoQeJSani4oU84CyEdG7pj1gSbCDfPiBBm3zHvkLfwCB3B3G2TpKTtoBS7AeHqX8mFEJnvs77hFG4Kskwd",
  "key7": "5QbYZPd2imQcLgkYRhVwsCRWy7pmXnm6q2YhWPBMJ5TxjAz6NTXbQZpN7vkDyreZ5bA3q417MEtRYC1ZSJjKaVKE",
  "key8": "wg2irwxHphHtAtrVVmdsWrzbN52rKuXwcv6rJYmPB7r57AhtYjSVYaopEce8JBf85ba9oNZRDAJWmVH6tFh3cKs",
  "key9": "2YvNSng6ebA6ocoLPRySfQCWyYfYQ64CBhA1SAewFbqLWLAdcrSA3pQvQhksixMTxsBHFEdgmHXw4oCpoGHfhtrf",
  "key10": "23BMVouqzV8KytJbkzuoLvDxX2JVSm2zjmL3GwHM4uE72B1eUbE2UQcsNW7CbaFfFgzPHM7mCDeH4gMjTZXtUJWk",
  "key11": "5n1hQpyLgiCx8cwpGUY2yf3Evv9T3ywHqP33FJb5QDuKfjtxPBj1CqL7QAMs1XdZJi8cLTTgCiKbsoDSoqHvKein",
  "key12": "4dPZP91ehkiTQKoidVnErdqiafBnYGqTNudhw8uTxLH8CPGdkmo2befMT216LRh9iy3kZ4QHZMuVAwe8xTaJiUUC",
  "key13": "4yw7jmznpDYjhGonaVx2Q9GrsuUMuotvoJ4ngTa4J76d6x1z4zdak1biQazrffhqar37dp6vgzJmDD31g875NEQZ",
  "key14": "4tJ4GpRSfPXq6CFgcLM6Wy3PbpbxXsYq1N7q6abM9BBbmiryZsr12iJor7tzjK5WgALogosAn5f7b5gUipCnS6bn",
  "key15": "7mPnju91o9BDt2eBs9g5KvvNa4zr1nSDxLJ81YawZq4eL9Wi9oEHme7c6YdwJPepDT2U9k3EG6QS2MpkEercNjS",
  "key16": "gQhabqZZu2y8VAbHMuNqDnrxJyHZpZ8yCW8KgUST2uhN7RcpvDNe7eSjnczjwUG8oingYs4w8qFeM2BUQQyz5QM",
  "key17": "4HT9UqsMvZCqi1Typ85JksiJ8TU5sTtJcSk9V95apuEL8pnQqYrXJ5wgTqxzPW9mGqHYat1BA6jiB1miNvQwxZ6Y",
  "key18": "5yi9pTrH25ZpttBUM4MWQbpjPZdr4efFESpuPrX3pEf8jqdr9EZ9Uf4pMALKAaXh9xKGqEDWUGj8NjhqLbBcsY8j",
  "key19": "53UaEpcGuJ63y5w1A6deaNaoTox1XjH47rhHv2jM3agFCsHAa5MTgMNor4buCdhPxf6sZ9kxP1C7pLebsPfJsbvc",
  "key20": "3Cv9QiEaFQ9jnXYc95QExfGtJ3JBrWDQvs3AYRXewXqNVzjPYCNgkYF58jWudLW43QvujC3MDk1mNsm1aR3u2Hr4",
  "key21": "4TWDDxzYzyvsRNertTEDCpozE8TnbZDgLjtad31KJbaiLYH7PbghHLy7xsopaWqZmC3jkjnUen7iVSFMuYg9aRrM",
  "key22": "3riX7iET1poEbya33QWPew3RUyTDCm5wCcPe7NZk4NuwBJxARkcG1JCDvZFioePt37s37PtHbQTvZHqeWyJrSJUU",
  "key23": "28Da5qkswMmfQ5UmBrQNhWmKkQSSSUFqxueZ25fk4ytMcjRd7cwDhrmqnyvxZwfdr3zMNY97xNWGgRxd5GeFRVHX",
  "key24": "3cCdHN6bpQjwqDGVnmuVMkNeCykptYcL2HRGo4xCP5adWoztyv4FvcnpQfmj6mxiQCbVnTGGUKiHYKEZMq2Fa1ns",
  "key25": "63DY7HDGKTUKezm8dSyo6yzzRp6JHcD7VdHC79MQHmVUCZLFfkd2GZKSVPKtufdh9qrCa77nB3Hvpi7MxELcNkQS",
  "key26": "2jMTaKFhyCKatKKViVMYPQFutCFxuANUck688L2g33NAvoCXYJ5SWDUFthcCfZqpweBoEqkMpELDmRC8doEB55Ff",
  "key27": "5UtJ89JvsZ6B11FbsjMFFyH7ho8GzXhaR3DU6wEWzoUY2VbtFq49KGnkFVUbKat9apmm4Z1ceZG97AQ1EtfcbcfP",
  "key28": "57oKhib9gKroKBg6Nf4c82K8U4aDicNjuSEgFDKsAAmr3vxuLpqqPYKaBRM5A4eHTS5rvPUobduMDMomwdCjpkZY",
  "key29": "2nGFAPF9xk2bkoA7qSge8ZAfdQjmKQiC1PKSAu1Rbk2JvgNcHrV27qDBTqHDFj8t7E2TDWuuDmha3RvrCwKswjc7",
  "key30": "3o19oH8h7uPTZhMcXSndHsJxzQVauXHGznMbPLLtjvBJhZHBGE7dkzJkoJrXxdPabKJM9r1omgKX9XAxh2xqzgE8",
  "key31": "3F8mDqhG86xgQEhmZuzx5Nz7pHXR5QE9ATvag75J9xQ9SaCcz5SyYvSsDX5NJrs4oDcHZLEKMhJELpjNkg67oUvr",
  "key32": "QigMN6bLP8jrBNRtC786St8QTxLGCMQ8barAK8Fr2uaGrW333H4ytmiMAKPbV236Eb1LSpMHA2RaLwpCVqvBezH",
  "key33": "472sdPkQhac9R6sinLwXcPEncSVGGxpd3oRhdYjdgNsGzmMMX8Ao1R51xAuRR9T3kFGWj3tBx7bUn7Hz86hcdNoz",
  "key34": "fxJTr9Jin7qCVfJG8dFhbuaTSPgBhV1bqwXns9z1kAk7NJuhRqofRxe5hnqCYTspyy5Ew3mtQn6M5gdwqJFY1Mu",
  "key35": "3zk6bFaR2L8e9GfZa9UzK3FmtqFvntLzNg1gKNLunTXTkodjXe9MJ4jaDm7mKRxVDEJDrqyBsUyJrwQoN54H9gjo",
  "key36": "52cvSPqCYsiZEMoHzVFCEj67cjozqhtPfDLWDwdfvjsmoTgkLYiZTj3QJj5Jv5fctPwVMGZAq89HNcoL9hrFMtcn"
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
