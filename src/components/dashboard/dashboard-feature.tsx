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
    "3XyqqsAFEiNRe4APYqWfBEuzVthv1xbZwGwMZAfpv6zdcKj5c87Xmc5Znry1it6Um4bVVCh1TK1tkXc9AQVZkxXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47kaJC9nqFmNJJdkBsZjW4vjBeQhmqQ8ssSF9ofv25aJ5Yg338hjuLDZZk16aRLB7BKDFuQNs2Tf2RiNbzLaTyKW",
  "key1": "T3eCkriFtYHDmM52HTo81WEpsUuzY4vWcKiGLchoP2tLVQKxzA5mJBYNLM8xJo4RtxtAqtexXbohGp46fra9QVD",
  "key2": "2P6TBmANqkXU1p9u7q7g74FDThvF1QQcktrBBpTNiyCD32QBsapqE4W8SxMq84hG2cXnPoWjsUWnvf9knup6bpii",
  "key3": "nsQrwGvXfy4rPKum3y6rFRTs8NtCCWwYbUdVfWdM8aiAELL5ChS1pqEq1mexztpYA1WrKhCkjuVKYGLd954Cxni",
  "key4": "6oQEp6Cxwg9mc769MhWRCEZRYEoYJWHonvz11G9StcmWkajXEMBTdb3ZpzqDEnoKQuMXqS4ZTi66K31PgZ5r2Uw",
  "key5": "5XvYC5wZNWjhkckDP8NQkLBZCsrBvfrkCy4SUnR9iMnieTLkkZsrJFeRhUci7mnuyDd4Z7C17aeitk73n3JNTfX",
  "key6": "thCd9awczgZwQqD3zdobNNd2FkBGTjTSeidE5mUv3BzDkF33NEPp15eTLHyjp3VFtt1iUDXjR4K6vApZja4xHSg",
  "key7": "49LXX7gpDuB4HCzjZTogafyC6SSnSNuJ775ZKw8dYiaeyWy9QF1mu4mymPpkARWeyFin3YWakxZU2SUPNWC3ZvSR",
  "key8": "2rZnbbApSMuCXBrYfA6btyTr9UAca6egsYNgePRhikzRy6qmozxMakouSa4UZjAQoaxkMHEnrdAzfifw8LkAS6AD",
  "key9": "2zuGxdiQ7gfca98Y7ebbWWHtmGqzxShSdmtFsCpsRfDHVL99dMSGes6pcSZt6YpuVePn4PDArSnZ63CAfpDt2hs7",
  "key10": "RwPBJexQCiC6F5vHJ7hoakTE3weJ3caLoqP7GjDMW4zdmpcdsAu14aPU7vGgQN7hS2F5fdYjBvZYFhSpA8zv9CS",
  "key11": "5bWFGkwEk79QxKmmfLygVYojQKGPYZsVnNF44VYghAf15aFNBt2hRtzLFj6A3iffn7YKdPizgypsmP6oed4NzJQC",
  "key12": "3Ehgg28GcpdEokAEzxQdT46uR8Lwo1XubDrgmqSFS6oXFucSb4xc6HuE7BGh3vzv4Wz29P4gfsoZcmf7eGaGnGh7",
  "key13": "4ba9KRrNcDnqNqh5hjCfBehqjkGJ4ATWD2jqT6NbPS8dzR7vjoKZyhSahy5TTnNE98wDoUSmzNhBcqW2D2GsniuP",
  "key14": "3cuNyHTGDSH8KAKvQYUv6UMDX6iyLFzkFDYLTWtWsqajDVDcfJsWmbQ5gacfaSZDhQhtjLtZMdiqQQQHtrNpJTxj",
  "key15": "5UZWBNwjPgNytAaQnSeUe8XjgEMkepMdKcYAj93jhHNA2BxvRaKuZvcLyih7dEwLnDyRNRdg65DTiQYRZMYJh75v",
  "key16": "oGdQv6qVfwfMLNGYbovXDrU3bb8JzGJAS1fWqXXGDSMBL1F1fRxp24RvZdmLoh8goxKU7uTX6MUUgsU8mUkJtx2",
  "key17": "2MDwo7nYVkSMoiJUQegRMTFHWYNtMGdfXzz3JsnGsriPaXsS7n7D2myDuxw2F4DTtzBedVjMLFhqfC8f6shfWkDF",
  "key18": "2k75H5FGDAidLmh24FCsvEC2HHH43qgtueH9ogv1bLtuG7Qr6R2N99SV6xXw7EDjtimefECcWd37PrdghBrR3WhQ",
  "key19": "5bq2kni1WG35Kkfn4B2pnwHrbFuqJKV7uu3ndqurSMWU525eQmXzLzP1WBnvjMb1KqjhNKSyqFsvZ8VSMFE9ngjm",
  "key20": "rmiXYY37NT7Jsrc9MhTNeLSay9zLKuDVBJPJ8Ec7C78z9trTTTDpQjPNVK36Vp9PqTnFdAi1XbKhpoRTsAWNU9J",
  "key21": "5JtTaaRSNP9mJZ5bh9iMguzfW3ny27dGSqGyZZKZpwGmtNfzSXVQGMkaZDEjJpvZztbpehzEvdms63mHrDU8vkb8",
  "key22": "4ASGhJ8N5hrbMFiUy2Nou566TcbKdSdvtx5n8sabXzWT7yhibkAzssdtcCaT6Pk7aM28BXFksNCoWoF3DTDCUGve",
  "key23": "5hpBhQ343SdATVTz9yk7BwcTcAwwiVq6Hrs6yfsD6tVJGHj3UDLzxUFmEvpooHCRm6wJFnV2MqYoswsffhwEiuGm",
  "key24": "MHszhJujajncH6G7q11qor6RS3o91mjdoCEsufHRUXEeHMJrdeNfKE3ZG8v5bJLnSzrBDETHdrqGngSmWmeXc86",
  "key25": "3MJ9f8MDvFbvsw7pLQgiJe4eHK7skBExMVLYst4gWTNDYGr3p8DmX6iHcAsVQHH1d5ZNxXXeTmqoBnTNc5RfyQhJ",
  "key26": "34kUWWrqTVCRfyo37Jhxtzk8pfRzJAoHHZvupY9Rq2A6CNrmTG8V9jTAxV8caBRsdNXG6HZdFn3Uvf8BjrsxzyPp",
  "key27": "35ZgYXBeQxbT9ZBkYUTbcEu3YCC12SPpToaJPcZFe3Sycz1AGTLy23kTcsrSRSSS8W5oyM83DN2kRmKS9kuB22Ux",
  "key28": "XUm6A6U78jP3FoAzQ7aziHx7qV1mAay269BNG1BEoxrGUeoURrwWBM7XbFrGAG1ZmdRURdLD4NGwWb5UDzpT7bt",
  "key29": "oWEHJnBh6kHh1PYoxaBJULBswtqZt31xNVVjTgHBfAz6127ggnw56S7husSCWKYRaei9ChpUya3n7p3uRcG9kcY",
  "key30": "6HJUsPnm586YMuSpiKWpaWQeSNAsUxXUrP69uVBc17AVQ63uL9dww9KGk3sdZGYBJvHeg6KkjuaV9LpUHTNqsyM",
  "key31": "31Bsr88jJQDhjggVpjfPJTuxRWKTBvCzS49vWzLHBiDPBkPey3F6o7XL9gqKLPSnBFyc8BKToGkAQQ3eXZA5cydt",
  "key32": "5PEdA4HWP6rFH3L2g9WEmKnKwu1qzY3gY63FGgefsNusiQHSBhVYbwHXD543mELC3mezv6VMDJdHVtqW4ZwZhfvE",
  "key33": "64CimVY5hYVyG85TSJPYjZTbBGpGSxxPdKEnT3FJPouPA4qTXtGNywhfbr4a2GXjtvAprejboEKE71vxqWWKB5jV",
  "key34": "5u2ge7vU7vfHLN5AyFp6j2XWcQnXPBdoFXYKVg8G2YPu3Xf3T41nftwZcAwWczsuuZJQ3uAT1stE6RQGE1da8aBd"
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
