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
    "Wt7VFhUGws4SKEZg71LYYse95ML2yBWTiwVj4Jnw2QBswx3LbrWtJKVv4wwLV5J8ikPMZcb2FWe3Vtq1P6ogGxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8DSyqjvQcCBJicosXobt5JmNcUWbMYzur8GGGrEuTUidKpyywReWotTsrS1k8qx277WzekYQBjv66ay3DLs8cD",
  "key1": "5u1SVBtTDDvqua4V7zAfXWQW6WSBS8CFKfzruWZjJE5sxFV2qwnnBmJHNKYESpKZJTzBS1sahP7WrJA8nbtGFaFC",
  "key2": "3LzrHGDGqroQMTaFykB6G5DP15qszuzpD6hR2dBB9xZ3uTfP5H3q9Q5CpSZWq5AHnUuFfccegQmaPs3GdqFDDHuC",
  "key3": "4a5hjek3os7ai55bSjhkyRmW7n8TY41fBX5sbR3BMEXzroYNb2Gik2Jvgf8CjEN7qZsehsgTk9mMu6ijG9DZX2cA",
  "key4": "45r1HR4QyRJX5wiv1hM1WyfZjY7zFmWeuP8Bz82HeNjkfcbKek92AJj18DdC5NF3vsGsXz973ZbNdnor7f3ostM7",
  "key5": "41DHNDtDgUKJF7A4WpSTkF3yaHRaANVygHtQFT4i8fn6sj4e8JhnxqoDNdhe5F2MgxM3CHWm9BfhzdyJUFpCP5FD",
  "key6": "2vsLSfCGJV72PZifkkvy2ZwHULauA6JXV3mkEsFXSggwbSNr8uhHQMCykogvcTRMkqY7ovGZA8SnNYk3oRqZk9iq",
  "key7": "4foS4i2Y8aybkjdkVm3TYTKxLimKdMRAssv6gghoq8LaSJQghCcCdv8RVJrJvyLpKYVb7g99BH4c7vyQeE5b7fDq",
  "key8": "2YqqEKV6rkjKStUd1ePRUQ8zTBPEtdzcy18APfy9crnkcQzgfeD2CaQ6Qify2DF5YBJDu3DFp43Jjpk5Fogn4iYu",
  "key9": "5HuitHZ5YQUzdu9ztPYgo3sZcJ3643V2iQyTZkK1LWpppJTm99S3HkhCYHbbak8uSEUQ4DjagUGf8ENN6obfEkfs",
  "key10": "5bfHQmM8WW5GsUuvgh3XzeEGz3JwLTrE2RDcMYP2cKTC57czoYGCV48hAF5S4GyUEuVjaz6kkywUu2QZMU86shwt",
  "key11": "4PRmRj2zjKfgyUWV3jmy6DmxJnXaLo5ESopM6NXhZrahCu9DPEnDTfxemZmzX7Fzh7aETuAMMNUyaXxVfojLmovS",
  "key12": "4asiRZJt6MzbBQVrc9hb9KxeefZKgfuKmHRiGfGi3Z3hLuqJijzg8VD3zCbkeefupcpntfEepyDG9smCzJB31o49",
  "key13": "2BH78ERq5burpEyWeGjbjaw8wsED2q8g77cRQcjNuRyJsvN46GUqdpxij2iUZbxrtJKk1WLc1r74TX5hnTgoADcv",
  "key14": "2dVA2Zyt3iHc4AAu3GuxyWrDMGgPNTwPdkbmqczrGhCYbkNqwrtdeuCEPsvWeoYd6TUenf8saJ599kvbvYsqKusQ",
  "key15": "4kXhU4YW2AcpEUa74HVpWBkX65yHSHfU9kRRyBSVo7GWmze93ptrKEJeRo8e9SQ6VQ6Kve58pnEVmyEv4eN6MqpQ",
  "key16": "61YwLxwGWngB5LjAFMsNjaawXJD7ix2AQr6pch8UoW6JEdYPvGSpMoJ4js2TxxDMoFXd5BepvPdXa1hE29JwnY22",
  "key17": "2bk4ftQmjtb5nyXhg95Sa3okp8gA5krEUgAz1tvYyCLfzRe8k6PvJDczLPcDWcx37h2d7UqZFDpLGFeqbbEe5pFE",
  "key18": "25cjHCWHuv763iCSoM8nEYHkUkxjUsFrTnPpTpGp9VLVSxvQb9uVDnapq1r8d1DYjTuy6LqFgPeDz6dDkkDGZfXh",
  "key19": "4Rhx4YHxwqixD89vta6s8kE7fzUgqG7UtSbY8BhqXHdTZLyG8Amy1LqDc89EM2npH2XMuVnbd52MjykkZgA8vXmy",
  "key20": "ekyiZXJPeviBGQQgnnkuipNqL6qDNQ9W3poEjTej8zqhwdQ3iu61HmETLWiD941TMzEaRLporpRyA16vQAUQx1R",
  "key21": "3NKYouz15iet2P1iapeiP74wU1TgAJdPqcsHc8Fst4qz8xaFq3ga6wVxoTRyEcW43T4pqj7bPheKoCZNJqTwRiL2",
  "key22": "4Qpe2N2o57RMb8CQzvSnooVViiQXsEq6gbjrgtB8XLPqgfzfjGxeLpgZ4uchEEAGFexx2BhMK7miN4N8jjanVRkv",
  "key23": "3WLBPE5wLiJnrbPZyt5aGK7iZ9d8Qc11sQppxXE8qmp9MWNFHbkrXShHxi11MjKNpMnPQUGkXcjm6YsVeicvLY3h",
  "key24": "33Df27LNyxUR1Rhi8LDjwhjnzNLNFKF2aeZEs8ioZeCWcmv4buwXWG75HBrGKUv2jNHeTtE6mQQ7PjitdfbSj8QY",
  "key25": "5UKdsemXur98PQkqvqGPmatwSyYjYM6e3LNMuMW6qLqePeeS7KeE3gREbTcUQsJYJgR228T5LFTVR8TJzTj55rd2",
  "key26": "1sXnbgtqAyyjSbho7M6DYik2UriMVmShRrsSNaiS72V2RfimkQxu3vidq1Wj9Hd6Vr9KpZ1AN5965QkSYVs2cVW",
  "key27": "2DAjZZh4TJjsJGWQJMVkv3MHKuPWsDYHUBf2sgRJ8yq9Qp4T33B3LwTk3LqzhcKX2W4KYCA174R22X3muQP9VnA6",
  "key28": "otU2bd5KvHxp8qKowmSb9fxQGJkC6a8jrLifgjsCkoeYdzpfueyz1mMed1hEfv6criCXzfE6n83LgyDS5QhK8hK",
  "key29": "4o6qZwhQhshuZeaokscb7GaSLk2jPMZrb3kqyUX1KATkBqME2DvqAVeCk8MYHebUaDV8DnCo4aAG39M4wj94fko9",
  "key30": "4BW7BzMTgr74jdaAYAMLXoPRBMqn8TrQA7ibqtaXQY2uU9vgADaviWhegXQjyfVP1rrnHGHPqHu835gxXPaRxPSw",
  "key31": "4tiLy4dTPswceJ8NyEmERg6tgqDcRW1bCV3wcgraHv8FsSdwyJxS1z46XaMAszqZiF2GPWWyvWRJHbpmwkELY9qm",
  "key32": "9RbK83d9RPPhZCGtJMgyWDgxzsYoE1W1UJPV4XV51XciTjBxutRECLqvfCVTjS7U8734K7Zmx7FHUGxD9KuQMNv",
  "key33": "52yQZwzJSc8qPt5NJ2tbKvc2s8FkKYNzuf2F7xRBoEY2cm4oLTV8FaQQUadkaqsAweSgPvivTx9KoXHP8n1WHkTt",
  "key34": "4kfJhVik5RvrUHZqJqdDA5ojfpQqrf4twh895qwR1eyXg3kfyuFc5n6ZUoa3m2hbcejnyNkaNHNLWQvw7Aj7GarR",
  "key35": "o1rq1QrefT1uEheqUzVHdsExNf1G8TiiR1qWig1q9aJEbE91H2wkpHsDEvM32QGDeLWGyMc4iZFaCZzpfjLpmSS",
  "key36": "4gwnKPNBpY6nW3eVLSeKwWtiMGktoBhfqvD5NT8vdpe3VGWCjxPh4MDg4oB9zGnECeiotkPpLoCHZKGJ2ShNxeqA",
  "key37": "QXw9YpyqqMGeBPg6oB7MpwMcLB3YhC97gziknDnNRHCwFWEFaYCQbBiobr968YG3qUBHxe3abSTjAWyWvDRS7Cs",
  "key38": "4ZBtXbsC2T2n8PppkFiyVqx1581bGdSq2d17Zq4cu4P7spGAPCeLJKYjhMsKwU7CrzMdKR79fT48KSqooENp1VUU",
  "key39": "3B2vBME1MJL5wHQ5DRXKkBjLnK9XvsPPXDFSnnXSYAN7Rq3iABuKSnWqM5i7NnBQmutU5mAQjYg1uk9LWLBMkENw",
  "key40": "5oEXDdx9GLPpDJkdyhNXSLK4ETvba5FiLuf8NFGbQadtcsevuFoZffbpSLSSJEQiPcd9WZRz7VBRyHypYmLEVN5X",
  "key41": "2QCo4p4XMAmG9eFjS7SmigcFFvNoyf6ktefcPDh349FPTEMKqPxTEx4oDyugcWe46A8jsfTBoSPxcNyraA7Xy6UN",
  "key42": "GQou1f5QR8JYMkdM8aCosHuWR3b4YuwWjdVF1dWFVncjshog3g6rMch3b6ptV4nxe3ciEtHj5Xzm5BCeKmFyKuh",
  "key43": "5rvWcygnvkruF5ZqpDAReHoSeBn1zFk7JASey5FRibnCGnJYbkL6JCtFad8uCuuPU4cFvxVufAiUKeH8RYfn6vzx",
  "key44": "23B7nu2LNCp4rh4yF1vkzbetabqPjd1LvgnnUJGpsuXP1JYttpLCgnSerBRATmNS4yBNBPgCNXmaAu3PDdsJQeGh",
  "key45": "39LAagtP2LK1iTrzSzLBvsd3XdA9ZNeP6zqsoQM2f1VAgiTRNrmerNTBB8TZrhx13ha2wRQw6YjRDrvHNdjCqTDF",
  "key46": "KqpwtfmMhHSR5zgKzipieKKGjbyJqmVd25uU6qRaMXAreWib2EuTuGwVkcb6BS8e9XaBSYAWB1KooYj9RxCayjM",
  "key47": "FwtNEseP1NLMxHkM3WjwoGrUKbtZpMJVNNTU9rmXWRxot2hKUmSNHrKmSasyD7SvASTpSWSboS93gcpgSprwZrq",
  "key48": "29e6MSWGXNEo6QEXM2xkDomCxS7AJgVTGbWvXfesnVsxvKTDbbLWXAUmCMNGXfugM5ciN5rbetmftHFR2satMT3g",
  "key49": "2rnUGvXHho4ayvjjoryW3wCp2PzyEnQUDXnXTHWRYUDWGeUGFX8w3fT3DsbSngAnwsuZrUywJiMAfVnRap6r5Xq4"
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
