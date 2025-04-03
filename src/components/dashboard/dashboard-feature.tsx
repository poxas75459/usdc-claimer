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
    "4yToyjoEs5qAAm2ihtVKsRqhwvh4sh1iva6iN3VjZtSsU5sgwDey3pcHuiuAQdf73JT12fs9HT5pb1qoFaLjUZvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tV8KkKzqEA8Cn8oFwryzyUJHjckDmwpb24SM11ot9uBZnZukP1qiA3x5m7WY3a94L1mDqqsMrQ2WDZNQmxDWJBL",
  "key1": "AUkyqWkWo2muEGdtvjBEMrLif5AUjbE1GpxykqKgrET6rgtqZLZ75RJuNTJLaxSs9LxMyqgr1Q8bGmffK8GWKy4",
  "key2": "5ZShG8zEMiyCj79WuCCwykkqxjycYEpQDgzTU4rYyBN8Xtqi2Ey6tjifycbdDwUftsL5JFjMd5jYxUGp8ugLSvaS",
  "key3": "8GksgEsWiG6vu1R2M5adAxmnRqLhMQn2EgWTMt7kNmzaSJa5Z6tZ1TQWTDa29yXk79H2A8vL8xsWWTzMVsr39rH",
  "key4": "3sTXQtTRRPcYicAi4BQScYR19GFPmjEnNpYuofAQ6YXb8ZSW1FbfYDe7LAhABdEdX8QK78LLqZQuPmd2dAP5hcT5",
  "key5": "3376UfCuhouBJL6bNWJQrethRhhWshGePkfF2pLJMSLRiDs1hTgSDSJFDGtc7kEvCJysejcCogMz8vzyXTuUH9v5",
  "key6": "bZqGkAksWTtycYbUWY8LXF96Tpmyrc3g5wXJiciYNEsa1mGas9CQTE9Ef3AEsVPQZu6iRrzV2GzshNCR4oAuZJV",
  "key7": "2edBsCbodAqLqqj3pkr2vFYdUJ5mC5HLcomDL66S3UVqtB7WtrdCzTuQxzSyRW3u7mQhC9NHeFNjiohDBCK8nMJs",
  "key8": "tjcZCAUjMkESVrYCiV1aHbPpf7RfQh1jZGMasaF5s4prGLVcrzqkkvhrHuSnb7XDu3k4r22QDi3CmPzMw8Ln6eE",
  "key9": "5RoMijNLr4UQFCjfkWETj5etiszDzzQpbCPhPgVtRYkdym1FZ97kyaNtijHHTHRCrza55y36ifjot4ar798biV5F",
  "key10": "wcXvydL5vR9AxpwcHwgreNkmTk8oNFkPUFZswSFvGD8a9YAFNZrgKFLEaX5s7gCg225Eq6oPAR3cMPEhSQ5EdrF",
  "key11": "5W8Xu1VaSkK1ZRpDcDte8koqWyunwxQkntAA3qfttZgueSm44epBABSPYh3mMrTdDpfvAN9cnFbLwpscWt5zAsPv",
  "key12": "4B622c5MJuR3h8H3ta8FNq7Fg3NRQMKgtr35ajXUARsFmofCnKdC5J6zo6wx7Jo2EAvYEqMawsXffo5L2NJjNZko",
  "key13": "k1jR8vvUBPkpncqNLbWqAr1GHkrhKWq7iUbGXrFryHq6hALML3Sqn39trtngMABJ4csgAHxSibwJynDBQ8XENWt",
  "key14": "j2JyWYTNbC8wHQPYJjL5h8BWA1zidD3BbBikLf1TZ2suWs61ZyANxN8NWdb2mxHQvmWW255ekHLYewyxxrufTHe",
  "key15": "2kr8WKSkpUZwZXd2Y8fzi7cghcwPCM8QQwBCpkctUUaPGmK7U8FGPtobLmhCcfJZU7q7tb1WPCGwK7cJGLsjy7is",
  "key16": "5FhXCMyUgzhyfJxtZnemm34u5231PCRtnX7EJ3NqHTGC2JGyfy8h11ECtxfGEDx4wKpqNFA9kjMMXiobKYfX67tj",
  "key17": "3PenskD57qYxbk4Nzfmb9cTb2i9vq5oFn9TZrMrLffx7Zo4viR8tzEkrDh6HCiiYc3Yj6SKNd334N4p7BmPdNaq8",
  "key18": "x5ebT9ALDpfoHjd8f8fURbZYgVrGZPqWwLv6tw6sV3bYYXnkBdEzsMeNutLMygUuLS7bS9Ka2qQJmtapWQTENFG",
  "key19": "55DA26QK6WjJT9M5Ay3hLB5TMzx2d9xi1k1UgLoEWbHNYJixHTDFHnFQMBTQSRUWUUuv139fV7V1XconSQfDAyWv",
  "key20": "4CXLSKca3XmkEnAHiAR4aoLYxMiay7FmEwwtqchf7AWG4mxhDS8fzDif4AGyPNMk8W1TJ2wGJ7KBhW71L7DFi6j1",
  "key21": "j9JsZpQt26R2YeDJVvXmXznUBT2tsh6W99sC9TXU8TKwesGWRqNSBMBPNZSGqMACe37SVrkBzLpveMn2Wb3Ge8d",
  "key22": "4yXscmDSQv4prf5RbPiemaCU1f1k637jFPRCgGasiHiF7ixddXXtWWhK7ZCUNdtB8FuVM9pz35HNwyZB5M2K2AeP",
  "key23": "2tdzoUTVxTUNC1BVhSb7g3831iFc46SiFENRzqoN5HNcWjisH5Y2AYsJUpfxyxv8mCicQcNK2PofVgzjcTFg256K",
  "key24": "4SYZh3ELBHp9UMVjSGpMVpgFbSarez8dy51s3ifrdznv1KQdKLVrrWQcMbHqYri45BmCyydA914PFoSRiWw7Du7J",
  "key25": "YPEYHEBkznEaQXDY6HuoK16z27kXtYGNUDbWnzJEZgBSzZJHKoAAYbdN2fRzFmx8x4uoEYVZTz2ArGKLKqibTJp",
  "key26": "5j3wEX9G8VrwkeGvoZGuxFXoPJ4Kq27svBaAvhq23zK99LV6wHopyWkgErj4cJMSBJXWofc5JZVcyyBwgrAJNojd",
  "key27": "5y7icRkh6AGisx77uJSotcyaW94zNMPnXkDRvHynjeEdiyYpiLSJKrTnMi1BtRFjPdFc1hdRVJ91CStdta1pHVqD",
  "key28": "5qLNDtoEwGiDLFjkyodxVYCH42bv8gnnx6eYJPTpt2Udgk4p3awicBWT35r1ikBi2FVCthJV3ndPBJRuqp9SEqmz"
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
