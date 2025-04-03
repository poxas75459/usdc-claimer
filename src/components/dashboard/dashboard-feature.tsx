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
    "3Uqd5vKkm6JYGpQwybBESUanZYAGuMnDzKRLnr4j4YUShsZUuXKARLZtRcMcHrCi6NYRjZBsfsUyJ3nQkE9AcEYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GnqaYnC7Pee7HQn7e4adP7p1yvH6wTD4BbPR7SrzPhDa9ogWqPFLzDvesVfCwFrNNkwGEVGtypTpzvN6GkhRbyT",
  "key1": "37Lu1EFvCxfoPuSzUMU29WEuX6cZjVvRxecfnhapRjwg7hk59Sfnuf9TYKWQc5SZ8GYu1ZwFXP7FJHQWGfa3X5e1",
  "key2": "2iYn9u2bAQegKuPyY6u9GCLH6XfNK7fC9F2MxhLW16GtRArYAZqC7AbCEToiYcwhMVK8kYGBzPHoKd1LbdPABDbY",
  "key3": "2tjaUqQnUF8vfZptR1KTn5bvZuX7c5p6JkgxeCWvsQ1BXhEojC7KNfFG8y1wcKJHm9mwPBfWNDRRrjjTdbaWpak2",
  "key4": "28D2QpAXmXV9hzfiwrc4wTyPaguXv5AG7HSKrQhXBv4eVJQcAFUcfpU8N49KjNRcU9ate7fHg72npoTop3oC2AmU",
  "key5": "2Ub8k6eqyoArcgTho7DS4136CrRtTJKpeJG63LZ8svr66JLk2zU67WLMFWEK3CXt1cfknoTodoRz7yBgT1yaEgVU",
  "key6": "5eYVZHXkLJ3sLe7RE5nmSKVcMvsb9DwUGmV28k1xp3rCAiLisc97hQ93isLhNy1Mijy27HaW4cvDijC3ePe4UsQB",
  "key7": "3md5a2PfNuJTvCq1cURHtwKKPrZKzCYxEW4iowumGmMwkspRJf7TD9yxGi89rRCuSgMAcvp8UdEsTDfRYNGRmnac",
  "key8": "5hCHvoaZkdBxUoYg99vX48CWrd2ZZ5Y6GnjVrwzQ6SowuN4yhCND46a9eGLmA6WXcWJq6EyDDD8ZMjFoRDCvnZ9A",
  "key9": "5NR9XdDbmn7atzogncCPi3q5k5rhUW6r8EXJPym4yGPP2PJTwTUxHk3BE9drBkqk5HT8vVGb57MTcnjdb28fTapi",
  "key10": "5LDyHYai8N9Kfa1ZSn2BjGmtkpiLTYuxCCGY5fxGvBpGgfnEJw7qWfqeoJYRzGM5Z374eC1RLuF9y3J4Cy8kPGjn",
  "key11": "7FTbWAPUWPg6FkHPZ4qyoXC2Y4nzVyJDW9ZJf1AekNz9R1HzNaNM87eySHq1QkEfqdohW3KMBNP8vCnygbM23kh",
  "key12": "2FMvyDj7bEtKpLusFmkJ5GybKsTJja5hqDQpJgq2jZLQod6bjwTjRBAaaLSLZBoeHiEjku1FdKWC3abnkCj9XmkD",
  "key13": "4cimrHwUxodAAe6bGo9yGcn34kysFn92BoAURXHstbaXJpmGQpTJJ26tqyaShcxxnmTNvzCPXujwnAoMhcmAYLLC",
  "key14": "2rYyec1kthD3dq4LmeunHaQ4SucgvFqRzy6rv5KwkgGtp9XUrxEwgeWbmSSFHp7WgcPrx9b9HbC5gfWrU5R51aqp",
  "key15": "2Ry3AuqM7QL4Kd8aLWc8EduPRGvToCMxFFnE6xKYWBhGKCPcYQPYduaNX7xTk7XxTTBP6e7pNEF6L8Mf6GnXh5uy",
  "key16": "5qgB7t1Wr1nmMGWByzfH4tu9u1doebePFNUTuuXMW4SEfFCvd9Y5j8b55c5FEZb2YjTnqtnardLyDcE1uux8s7YE",
  "key17": "DDCEZjSZL5Y67ygYJ5pgMSUsQmENn648aMZaoy6pCTd9C82fMkDAyEDCD75tDueUrPbW22bCpDJRB3somxAKAKC",
  "key18": "cRdShfKHPvQ97DkzXVhQxfM3Hvo1gEmu6jE1qWtUn595sNHjHHYer9fWk4mFBiiu8NFFzYV1Nm6GLFSUeFNxzga",
  "key19": "4NDveYRbJHrjtsabpEXHdoaQqPVgbYRXkm4buzYMEaxymQFzJyyKgFR62LzsU64yy9yWhPZMgFbJ6EU7upevcXkr",
  "key20": "237n2ggh6ibHqBwa5mHaisuxyTFRPNCTq1vC2iadpFhT1r32rCJ67dFFgGbo3RdeUqoBhxVCAsQB8NHXktFX5ho5",
  "key21": "2FpD11ZDTDBn6iiBDMVga7FgqT685cf7LYYoeazYtRY2ZKCnZQ4ZdkwVAr4EJNuLhyjM7dmAMmykZvaP1aNaLPxH",
  "key22": "71kfeYCapqfHmqZP4ThfGrnuVPB3CXhrPLRgEcEzggfyHshCVTXYXtfUUHeyk73AH6p4C8SDhTgH83HyruxNDSB",
  "key23": "2jwvttXJLpGwDBDbvHW7dMBHs1DM1jebbPsdUaN1hbgW8SJuh8TLSKsJhC3oHRa16hRyDhRdapKngYXokXw31qRM",
  "key24": "V4snPaTHbYPv5hR9sJ4s4sdhqAGcte41dHFuKWcGLSsmdaDkbJAvpbBAVTWexgN7KDDXkCCq3MDbzznb1X2C39S",
  "key25": "3Mywihz7En59fAEwxQY5bK8gyL48SyQn7VH1DsprLhLkdZfLKASgr9nUEJzeczVUWJWSUsRKAqP6HYjz8FDSZuZ4",
  "key26": "4DQqLGLVUxaaY5aq9dk8tjqqPpx8X6dmK5S3svGDvSvg9jt9XtFnqLwcanZyUYimu5xuLkN8LKBvRppJTF65D2ga",
  "key27": "1JtWw4C2RJ1LT2v7LLnqduVq5xs34Pqii6jZ9xUqWn1QSii15vWV8vYpuvhHWjeZgtyELMu9vCJXcwzqJwyERxJ",
  "key28": "5ptyJxix6PgupjYqh99xeAod13k2ZojEhCRmQedGP6hyzfjNeLZPUxxZj7AcPJepN73r9hutgbPYZFu5t8qpyqtu"
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
