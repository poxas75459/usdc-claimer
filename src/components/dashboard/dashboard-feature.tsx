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
    "26EjQjnSQtVQrieMjxJ6YU2W2QSuom4eXV12KC7hfDwXEduveMGvK7r4iuXs2yMXw4daydnBzSCrAsnBcy5STToJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sFQKUdFEQx9tKFrQ4C9uNxgR7DU2hKT1j4K2kk55t2v6T5YWHCm6Bf86GXpAtdTsE1sHmTv2mjpfcX67Y7Zctgg",
  "key1": "67gbW7efu4wyMGreKo3VxrPbdkcZuvr8AuzYk3fgemoC7YxfqBAXJLHLh7Soyc3w5Q8dHr1sGbEDttrF95vMJEns",
  "key2": "4WNwFaZCnFWDUbejEmanRrcQTdmEF8ynznUet3AbhNMHEd8FG4rkQdPmsHBceQ1q1NBSkxdrKEamP8LtHw4qLUiY",
  "key3": "3fDPv4LC6AQhWp51YqRWC5HYhEgZT8qfQDby5VDBCYZbPGmbSU785YDZjgqeKy69CLEeqAtWULTo3rVYyVKc8kxi",
  "key4": "5FG3YgK9b3Wn8LqubSU8hr45TjBW4XyVvRdJxp4w8x8uKJRAtJLRWFCnRdwWUaTNpUSSimn22s9UeHG6YKKsBWfd",
  "key5": "r6vWMpmue5yjtNUyj2nhTteBJxzjMgeqd8TTgURHXHm6UJ4JgZkUTQh41mDn16ftBQip3CjdnCZrCfDzHoDRuYt",
  "key6": "47atzCNAmiRnea218XhGPwpo9LYBH8czYTaFcCVWnoPdzGfM28b1uRPDZXeK3Vm1eiWcmtqNsEWWKwhp5V2RF9Ha",
  "key7": "4irBGhDAAwacKw9xWg4JyBWB46jgw72UMMoQ6nfaJ6kmuP6Ai2qK8QrunZtrpacRiv9YDtLaz2tzaW2QcyMbGjHP",
  "key8": "3Lk1jG4zRHj9NqHSKkbyH5EBukkm7tYmLeYsxHwdyHqnUpYUJmiMws9w1mu9P3R9YSz296wbV4cNZRDXSi4eQzYr",
  "key9": "5FyfYG8cjdp9R3CysWHvYUujqQTg4afZEurShxuLzxwdw7TLonfXT7B486Ayg4VNFPFLNh6HhSk4Ld6P853ks7if",
  "key10": "21AFY467ysmG7a7YDuhdPfqR8Q836uqPBsq6Yn7fBkdzLcBwd5mN7rgN41R7eyWR6U1Awjz3be2ZK17SBZD5N8ot",
  "key11": "4VbxygoEWoJMefzMqkq998xA7M4Hk5azH6aKsQKrDyR7os5jiFAeEPbY6nqKQbSinSmu1t7oU16NS41ZUaVzXNCG",
  "key12": "35qdDhWRNrxf82SQgZfaRi6idQjukge8ZWgzUwwhKc6YTNVXyhuADir2CqiX4pb7rwWdKTygqcxoq5gkSkg1UAMv",
  "key13": "4WEraAF4oUwZLaEu4zgASgSjcuD8xqhzasppgHLQJP9mXRiddfh1FA1GBDjuDcJTJhShFZqoJUvASJqgy9fMYgHK",
  "key14": "w9xcVyGXhACZfi5Kvhhg9vyRLSPtWmx576V9aVma9XCVaJQ2tgA7qfZd9hqmmHyL4BenbhG8rwkS1XxD5CeehnD",
  "key15": "4tipRXQJq6QPCU5TQDsWLq4h8so5VdWEhB9DzgrCLS19ENdxd2QbSjocFgfJfe5ioGjH29G5g2WJ81G3SNPV6iqg",
  "key16": "3wVrUaTvZojADrxhPrX6wqfpHncMLWZwLC3DCmaEWNE9Q5wj6vNRKs4JbiJ7mvLV6QMptGxQwWxDSg94YoPAtk5u",
  "key17": "4z9bAR74zXqdgZXz9L3Dk78qtkgwacHUmpwWhxyQZt43maE9tn4u6kJxeRonGh9sAjtDaaAUg4whC9LRQwtLcQVb",
  "key18": "4y2jgN93v3xZ4kCgyTTRVCzvhTqagsTEFaCE8EYRDhgkTJ4Ux6TCKr2gMimBYRFpsCyke8NS3DqmneuhTkyB6o2e",
  "key19": "4zA8rnfriv1TNwXQt8585x9dXK2uhaRRCYAdop4ajVNRbe24gK28Z2SJZJMEqpZq5nKCZaPPDoe9NAmEwygcXLSE",
  "key20": "4gjdUzYMfc3k94NQR2UAogR46hTDjaB38v4k8KYWeakpgTDMxPSWLu9yewUG3DwFY1KM5z3dnUVeS3TgA7q1BKWU",
  "key21": "4CoZeFXQkRmwnYZNXmehXPa7Vdv8AGSd2wCqQKAuU1HVn19BXaw4VB3LB2JqgpxYUwb14CfZsbeC1RpEJjxZgXBV",
  "key22": "VVboytipzpKUwXvV6QFASP6iFZqK7kok361yuUYphD3nExAgKZpCLf3iy8CWTfPqbFqakTXu2PLypmCcEikUpNs",
  "key23": "3Jz2zuFoKHzaXpsEcQYfB2J6FTaaRsNJPTnzRboW44dumUKYcWnZmRRbBSDFD4YF4WUZVpiLJ55AWun2UiXHbuYm",
  "key24": "58KtkzKRxA2B78xFM9FgziX5VT49t7M6Co5wG9rz1sMErjXFeAQNG3As12DGVn7Wso3nBQ9PWjk96JxFrQenvMst",
  "key25": "4NcWg12jtBBhimNWwhGzggSfnXfxrNE5YzR4qRXjRtCsmbtrb4htnYh9Rqx65ZM72HgJS1kfwLGVddCq5g3UfhR1",
  "key26": "5RW93B54Pu8DZAfidSkdswGBsV7LRtE66gT1LzQDRwudLDawQvrnCwRH1W1zFU5eaz88b6YEeGAriSsYkrzpDZwF",
  "key27": "5E5zg83vAZG37vmTGbLtLdQCm9Puymo7mFScQXPAFYAUTQgAoGNM79jAL61ktUXfJ6jSSwbxUcyyTVVyR7Y1qphF",
  "key28": "3VDvS9xe5iZ4wCKEwbb8CofwKQJEqRU3P6x1B5uq8ZNBCsrdXXtSuXVX3CUYQ2sgde8kvz7wpjWQef7sXsHCWvAB",
  "key29": "5GzywLMQF1tgajWCPAW3PbnnS6shudcJUh8LCgwuojyjzyZzC4M9k2qc5oaY7wk1xQ6NWkkJknQaRkNDwhADh6Px",
  "key30": "2RCtVvEMc2U7iQLJjfWYSfdSwSQLyg4vCxmuYZ6hXYwGN2mD6CH2vAeDSdXjGrgV9bqpX8oeqBpVpczdt9cFHaNy",
  "key31": "2FByvacht4TCboCPpjh8HqAZCdMjD8nZJTghavDYCmNJEotFUk3Gssq3sMfQq7hhywS3YVpWL2CFggh1E8g1TgC8",
  "key32": "dVPWPuLciSG14UDircm8t7zF8DSJrZVTf3BNtssd6vfF5hGZhk6SkREBb7P9BRnUKgLLK1fZRZ5VWvRiB1Hb6f8",
  "key33": "2ySiW4jQEr2vkKJYqu4cUn5XoU1X6kh29VQFGQsDgevhvFCgnZYgxgs4LTKGidcNV4CFYBzRMTC5S3VomRue6ZzX",
  "key34": "5HmQfa94iFgwX16Liu3KVoXWSL52TowyxTyofeiXsnGPevePpGJCrD97AAwRWm6Za9x4M56LTSArUVkSSD5HKxp5",
  "key35": "RRzRKBDpB1CF2Q4iMx1gfZ7ghaBXtChjn5tLRxdPiB6HdYWWFvSuuQYJ2QuKTw1n5GjUyYLzBZeQbY2TsjuYGDe",
  "key36": "xdxMpbJBymBmPP2jYtVn3YdGgVnGvMuX8X5ynuHvC5RK6L9PS8ctfATj2aRqcBjymELX7ngh5cysRqwezxCn8it",
  "key37": "2eAJXoQFxBah8aQoo3CDLE8dW4UZfmCEK1YxySfSdhojdbdxGwDUNGhiXmGDgA6W3qkHHV9ajt1nqvYGBWstPBGE",
  "key38": "2QxpfjJarcEcPxbQUYwSbhymzfZ7ntdDzXWYxGKs3ANxXACN1TRCt6HyX4hzioazf7kZLviuqs7AwWhTsAp5Cr73"
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
