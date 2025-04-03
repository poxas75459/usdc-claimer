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
    "4pRs3fWBcZa76C14arV78H861tnRw9aWJ7erZDu3RPgVBhhzE3aj55rcQNjW1ZxmnRSeNUvuLLyngUf7fYBsSbUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idDoApykiSsWtYEUrkmT5BAppPAnK8pJCUKGrkYUsc8cBVKfbhkxBmAtL5eWUq5U6n2vM3oCV94KgbSy9LRmchg",
  "key1": "r5L6g9uauhU6Gb2G5hY5bwqoY6UHSEqN9di9vW6URMMAQ2vHRxq3jZA78EFisytjv2NTs8J26gH5RChZVJXovz6",
  "key2": "mgfQQTBEHZCnFPnHbzGRDjQijMsmVfvoPXddBEYYmfsFLHHKRAY96TjLAbFVF6wrFSZiSqAhgmkT5GdxsVsmtQx",
  "key3": "vvmeecBJZ7zBedcDHaDTyyx2iLKsFwvuw8ETffTgdMcuz1NbVT8r6B42Fc6tzqEwqAxAgnmzxa1zgdeTCYXVLDN",
  "key4": "26adfT2QuPxyNFd87NRUQxJ9gLQmA6qyB2WSVDXy4bqeYJmMvDjQttHYjqkAdtKcqjm3PfyZs33jzmFViZTWCRWW",
  "key5": "3W53T6rbRWWfKEoVXSHqtkmRNdN4kdQuGZYJN5qav3CvCzjAH7fj5KEEa2GW2HSwkqd3GeTWu7Thdf74j1JgncSh",
  "key6": "61kxZUvwNdiG3eduZqeGasVtXrpR6mtDsEmiVrvt2ZrZ8ueyLpmyu3Y5dypJZQYuY3cA8pYA8pGwzy3ms38kXitb",
  "key7": "4Gavnt6hHayUYXuxaAhVupf1NmZrXGyGDeV4u1arjXVjTjjRbt7eNU9LhM1u4drLcdJLaTqtzAfQhhsikMhVTUcE",
  "key8": "4GkN9mxm1iTv5ZogrkGYayxvKgdrNUmUXJDHu4Hpjq7XubK7PM6KRGKEetAyUsYk2GMU2JFy2ZBze5MxPnPCYiPg",
  "key9": "5UMjUWkYe5xBc2Q7imHJkZ6hPZjFTnXEb39m68uUL4Vi51pQgRANvBk9DXub3e5q8jno37AgN4w9ZnnRSGwBwZkh",
  "key10": "2ed1zYiEnBBuxjNLSSXxfkbAawy3tLopjNM4PnYxPo6arUemgp5ENqi8Y5yWz2b9oXhLhXiCJHWCfQMYE77TMznu",
  "key11": "5JrMvJV7kWSbrAoKZeZ1GKdYG1jhgnnrSjgvGrNwWirqL9s5mSbfowpfZYj4Taixd4YNLXdokFs7h766gCdqVQp6",
  "key12": "3aSiVrLzN4t7GS43WPAnDf4Qo2SLPRj9k8p7XwKRNJZFvk7DHc5EzvfiXxRfv98wpTncCx5yoZTq8rPA3faAYecP",
  "key13": "3xCT7L5mo14iXjSbBQzChLfUGPc9uu6N7u5E1CTicGDvUZ416NwtbpoACftH48Lbs5vi3hUTo8C58pJrLP3dpsoD",
  "key14": "3ot5hFqPwX8vi92idFJXpX7z7qV4ExZVWj5nYzLup9pjQXKZfNb6XLHR9eH11fAC4xaXBcyjNot8nzbG7EWvt2bg",
  "key15": "3b6Xzzmz6evPDoyBvCWDPdDhpki2YKnJE46aQDGU6dasiGarno9DcfLwLnSDvd8z4xcnvonfkx8GYYNui29DAx9M",
  "key16": "2KvP5tGChFCSPaqrPpDwgSpTuftxs92UogwXhD1mCTAzxXqyjG7um8khgevMmtkpsDs3fybQS3YGKv4QV1y2tuNx",
  "key17": "2S8TBS86Th3mBKUGaeYV6wASqQNk32GLDEMn6sE1d2WCKPWEFo29iicqNK2HEACvX5tTeNkzokBoNFWuBnFHBUuW",
  "key18": "4mjSBVGkQoXyf12AXv9hRF6W7kM7DtauS92sQEcHoQLcidwFm6DpqW42X9GFMQmXR35DXGjojP7vkrnwNvaHr7nk",
  "key19": "2duzUGH5z7eN4bsnGvPFmGEbmxT6zTmRfvuYEK11gMS1VHmp9o2LNjBfUqeNsqkCvus6N2EZwH7mY5q4VMCGCwvK",
  "key20": "2HhQFtgoh329inPWEAoEzRrDFY3ncm1KtqpRwfBeFPM6u3YwkYkZkT1Xw83od6TupcFo2xGJP5fJxECttUq8FwGD",
  "key21": "2b2JoaDotNikV8q1fVL4SN6jneuQYakCdXWkeT25Abmkqa6cqKiv72f68eSwEK7TmcdBQgTKEepjb4Lpcx5o2fzs",
  "key22": "aMuGKrTLCWa6L7YDRX5ZzA6r3ANQaTt9HvUgeHgH9qRgyrZ8M57adg8a1tPHBmQGCH8WLi2MEnUwmgrcS54z6bu",
  "key23": "4qd5inbVR5gGCNidFUL9qqLcDqgWzE4T4DfpHky6krAU9GZ6CZAQeV1tq8K8DMgp4s9TQS6fCm8fggpk3qWS21QW",
  "key24": "46YYJo1Jy3ro1SPxoBjsefYAF2jK5fdhrF6y82hNePcgu5AQi2khMULjAqWdc6fP7LSmbD6Fqc9efsd1zpXJs4dt",
  "key25": "3Kqm3XdmqczP7BY4GugH2YsnbxRF2RGNtnpVrQcx2SAxZGLxHg4GSURGxswV93YiiszSjEvWtApeBewjiWAzhGK",
  "key26": "3d1DCPwnL7g9amsSchxfdyPyxJcsRguw8J6hCBJkaSUjxViNxnsfEc4YC2pQjx3ARZdsoS9BeCetUYbFokEu3KVi",
  "key27": "256S3VkdmoispTfQ8ZRkQuKwh8nu4nmK95vcq1JKm1gSsuyVshDAeQmZjZiJ1XnrJAPiHCjdY8pdjTNiCU3NDSd6",
  "key28": "23487xsitnHBGA6HshY6gRkqMjMdM6j8uiz8TGxnbB4BeHygweXvqbZRc6ywnoTXm1A4rEDQtKg93n9GtvU9Xd97",
  "key29": "4W6D9WbRPgiMrwgyCinCAW3jnRS7Hyb4zFnv1Jpfig1N2Wj1bmHUPWQKnL7CtBtxSh7ojLywgmaUb9TukEfXYiTf",
  "key30": "5jLR1a49R9byoaeL1qXAg6tQXzN61zvf8y82LKB2NgLNWP5iU4isfZxBttPJ5SmRAcupehGM1Qk8BvnBCFfxPgvE",
  "key31": "4ifWkn3NoSRpf16JvXdVVjnKVNnruZZ1RSP35abFiyAqSW9NFotxJQE6SsVXAoeNvn5p8pxHgKg9kQA5uiKVa2Tg",
  "key32": "5SVtGksDRiT5YMMhyQKHMhf89KcsupRsb4Pd7FugcoH335SvmhmGj38HuEsFvcXB6ufcBhWpJXiS42gXUeqbrm1z",
  "key33": "4Emw8xiYf7YWyZXGbN8UPvG8d4TXzkAfZubQvSdFQhNKAJiFtowH6mndRoB74eDz4HHjFQuce1xRCh8NBaAFZTbJ",
  "key34": "8BrBoWXLg68DfKsCTgqJkcRRaMYaMASa7BPM2EtyTDjzLJqogavpi8y35TQrvUZjuvMF55yXycVEtGpPR1zJMbu"
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
