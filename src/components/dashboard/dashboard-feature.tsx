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
    "5qNc1JeFZPvsn8PqumsY7tTriDP5vSMSrnMWHFbcwscdqoJ8QbmddwTVxQkNpSuX64Gsh2awvFNdae8P9EYmD8Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "znkG5ZzXksGahu9AWRawACGSXcXgnFVGqoA64KLd1RfxWGqGNwbuTC4uBqMvSwYv6NeAx9cBKTB7txmNXT4TfFe",
  "key1": "4J94dCvW1zggcic4Nznbj6Nt2Zh34tYKPXF4kb51wVjFGXs8H6i8kuesxGNHdbki42YBHyJamjg98UgJLFZzat9M",
  "key2": "5mCZcDg2hyzwyZ5kDFP1cf8RN6ebEUHz2imtcBz8wpU34MUUVyG4wXJNxBihzhWNfwtvrv4edDhVeSTKFySM1B9i",
  "key3": "3Kigke6DsTUkH2fyXmPSxGrdsewbiNWDxnubVk62QMg9ForrFkdA8z9StSwQXAeZgRQCJZGqUwVFUBfKMxwouuNX",
  "key4": "5BKRtgFhURpPAXqjuNCK4EWVNCzTp7UhMNEuBFqu3TDZDRzGArU943UBLM6SaMNC1TX8xFUp32mwiqhpdSmvMaGG",
  "key5": "21DaEpAJbAJfmYarM6dBrJebZsfkTjNQbK9UPkL5wJnMzf33d1khZSUfxyv3pbwRyWDBrFWmUhjQk2NFxgWddxHu",
  "key6": "2FuoAywaMGoWedKW6zJgWUzjxdz4qKVZMr2fde53eaPy6BC9ZkAo3UecFQP3ovYvfsHQQNkfTMnaTeEm6nTJSmXW",
  "key7": "2DBpiWGscP6T6ndkuT3XV3vRTD5gccVuZxx8YVKwb6685dRsZgXb2W3ZnPAB1VYfLpfwaUJuJwmBRrEFJKKf8vUB",
  "key8": "5MzmB9iF7kvMsR75QKGRgthBaNzKAfgNrBzARmULP18MftA29yjJjw3xbi9a9u3Yrf2oxqK3utbsAAL7cz8hB4AW",
  "key9": "4fmKNw1ZKJn2HWvtS7uLtNHfb9tasCWvCV9QBhd8HmmMapsiUkddu4F3gXMQSjr9NrMhLEfGrPfCBGSbC9Pgkh9t",
  "key10": "3wgPduPVRjBMMtX44GBRKTdUQnFYDv8brAAp3qGkCSsVG8CkVNLayLBLi2VqX2Kj9hKHeqczhrbEai3aabZBkGz3",
  "key11": "57AN8unqAUC6jfKKyew9FjhdXU6hRRinRFqT3gyr9TmZ9956PAQtjFGPGL66A23hisCtd5s9oeYzoW1MZTbvBRR9",
  "key12": "2Gke5BB3qtPk4Ahy4xJi8UZfm1DdEh9rBVTfWvXLfmtz9PpNKTMZuTZ7ydx3MgMjUjEB1iaEVYriVcBMQVVSxnNH",
  "key13": "dbZVpWbXppfW18nAS2zsDf5uktMELXsxS8Fd795cpNoqKPYMnwppNbUfHt1V6Pb5DnFf18ahcyGBVJSe3qNYLoT",
  "key14": "5UDUYk2ZLCan1mGgwfWFZA2sWkMHsiGVUEDePdSDfhdG51RZ9aiqS4gcH1HNRaAAQwKZBBNHZe9NrCJXP2mnQNgJ",
  "key15": "FAQWAo1ACDAqWWhobmgTauDFfCgy5cn91Uw7nSPgZUrpNVTirTCqXXGTUwcrURfxjBPrvYkGuj7jJXLkqnCBTpc",
  "key16": "66tDeuFg2NPa31X7vSpG7Rnx5vCjczmUWo1xgxzwfKvqeKWk5GKBv8cEm72pjScncGxcTz8RvSR8ZpEAWbA4ZieD",
  "key17": "43bPrqW7i2DEdP8bJvQ6wDJrZ5M7WnhmR4EdFL4K7gpKdDkzF3rqtSAuBdUPG7a3haFhuceFdh3PQcqko8fMyNQ6",
  "key18": "4tBsACzYGvqHN8iBNsSxZvGLxytA7Y2BFVi6SuXgFyZ5PPy9qZ6JBvoVevFVUVRnAwiYdtq2GN8bqFbhNgY6dnnb",
  "key19": "3VUEmBjoP7KZmwzVE66S4wMjfRkgN7khz3LaFuLKGZ6mYfGNc76FHoPLZEsgJFzgoCKnPigyhpkVDnwTQ4Rh7B1B",
  "key20": "5sEihF6SX6uqZFq8yZ6G9M8SBddpdHMVc4j2BVshqYERWfxioLUMMKo99c7fBLiY3XLvQxfD2JFMWT8upAZdcXd",
  "key21": "4uiqoYMzWV5ki5iKXb8WjTUzre7vDt7J6mXJYuimyN9xLuWHQ9njmYgHTv6kCkX5MuVANcBrCSvU6pXn6AzstSnW",
  "key22": "46qFRc1jrmfbPNvMVXZnwwhFmJKHrWCWtg49yz4YTZLTv6TtWDXFHvxJYQdbAV4ETfBUSoujRRpsdFp1NjWL83Qr",
  "key23": "3ChPDKA3JGFJbrY6JPkwvNteQug7HBkfUWXup529WZ6xDSALKjx3QHhRZY22vdTFsTMhH4aShaJrF6Zqr27CUc3P",
  "key24": "55RCGUc3aFqvMXDBJoQVbZZuYdagR9G6TGXfgAftE4rkyL9nLMDQ7HP5AA1vzcypHBUVAVoZGTJrKJwMxmXgaqXa",
  "key25": "5Pg8Y648ub8BCg1ygkAT87Hrgy9aieNEwmGLxZWgCzbjCn8hRYnWvrYZYFHWC5oQqejfFjm2Js8WDw4iQpUNCwSB",
  "key26": "4vxxGtxhJKJmDHJVh3ypRVZEaQQiATYMf4wk1L7gN3bsfeNNKLgoN5DQxqxo7zZEQFbvWHRSA1Mn2sVx7UV2wJLw",
  "key27": "PTXdokGtLRCsMMMabRgf9egwaQ49X6yZpcWV4LnGMd96AoTC1vuhaYPMP5LJBS7zdiqP5UPEXAsTSVvyfKa1V6Z",
  "key28": "xyWsKmRadXT9MTNxHuKNiQ1ruJrFgSSzCsW5g9wpSGmep7skQ4TBu6jrf4Wn9NS7d4Dx2MoTXEUa4edqbom183a",
  "key29": "JZVbTp6qamoor9oHhjf4wWnPNZQYZjS62gNFpE3WqSQVk41YUTNgyKdDU8KppUzTGyX5BX6s4Y5rocGxBF8bx23",
  "key30": "5FkGudvuKTMfkkL3s4yFycoGwCUhtvuhYgc7JvMHDygvfMPtQdaWPzBXUXzLeS38X3JdWCFi8dsAxRR3yHmjZHs",
  "key31": "CETihwVdYysNyTr9v3aCo5mVKv2heizoWx3yddrQQE9FLGRkXg37Q6BDaAuPfVA6QviYcaJiTRRniDRhJekcAqE",
  "key32": "3VtzEXE3QHfnseXiWFuWcC419Py9sZ4G2RTaHqTYZ6F1s3cETpncTe8rQV2yzKTf8afjcmFRFn1v3xd4CVSFYHua",
  "key33": "5NhHdG7yHjQGCK6F9CBgmW2uNAmhgdoe9CBX8VKYPtEFbvCaKv5aJanFVhFCii49KgYZ44RavEd9KSB83Qu4PZ4U",
  "key34": "3Hu3kD1GneHP6qADRVr7n6J2irudACtjMP2ic8M3BRFk4BKhurffUzoYPxreERx49jAJZiTBcrbymvK7YWdqxs6c",
  "key35": "pFtZMXTncH8pYyhY8zkoixFsqYSFrQuw9xpphMBUjcQKev6Vm6XYbpR9TFAoB918YTgWs7B7FLrwKfNAGyrjztk",
  "key36": "3jrAqCVPBase42LZmrvwPSxDo2yJaJqFb3tw4Av8kga5zKAU1fDnA2UikEwrCckRUQMJSKpCGPzJkb5oVckeS2yb",
  "key37": "PuKrCq3i42pL1vRRqHtTAFdXEKGmDKY4Cxj3bss8UPptgsPAoPdczUBN6bVh5iXce9DRQyfkuc1fGWAdhm2GZf5",
  "key38": "9QiVAMKFr1TWV5WJJgozsoRVpBVNJDsPRBdAsxS6w29G8n1T8AGTTdHzs4962rovpd6CPrTPaY8ZLo1ryDPzwJU",
  "key39": "hfqFSyYoW8vK1muPCBpUrw1tmTm7qu8aRLWV84nYSMX3tH4Pqrxotsg9tR6ZWx185veFB1NrBJ2sXU1azH49nGP",
  "key40": "iXc6UUmF2edXiZd8UujWYvW57k7vLJXA4vfqUjae6mhUpBiVYPQfE1SgGxbju2LbprXAUqeEMDEECRDWqn5cxQL"
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
