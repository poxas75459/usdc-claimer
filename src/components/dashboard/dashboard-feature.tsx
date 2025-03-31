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
    "5ncSSo64C4HqRxZUv9Wzst1cYAYewSbCXQd6vnV3nmNaeegmdnujZKkzqWc4pVL6JUn4XnxDG7AXqKEYcsUiQSxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hvLSqVfT4wQxaKrg6q7r7BUKgjzV3rDm8E3KQwGGhSPnrVwz1QoxMce5B2DRg5iG9uMdnLGvzbM54XEZ6q9YkSV",
  "key1": "41iTZTK6cjJDpFCtKKzdCKkiAGsaLgWacqcabEwi39TnEhTEHKHATZ5d6fDLNVL2D9VYvWdQ2giPWdW7jf64o738",
  "key2": "56Cb5u6AMQwegfuLDqkuy85BseCFzGp2oQKVZY5xW6rwdBFTQjjNkmG31JcWugCS5vTE3CX5Vnj7TnbnErxoUZ3H",
  "key3": "2WaaX4W65zC6bK1o5M7KQXrQR7bZq9kAfon7ioNmpMhTwApAnqLg9fqm7SYmA7CYE2HgKYzQtjV6EKP7mhoKwhEd",
  "key4": "3hG3merXZdGgTB1E7LG36P83ThPpfGSaQytWGqnDZaQqwXczkQdzfdtY7A4RYDLcaTYkumwaCk539ZCaEZPX9g9",
  "key5": "5Jd2BgfBtQJa3PLsy56P7WLXFP8ARoyen8drSzf3V1Zi9DsqrFq1BjL562AgF3Sp9QRZKGGh8aFQHDagydoaCE37",
  "key6": "2XvrXXe6EA4SSK5Jo9htTxWvvKHmxpMvPPpVPDN8CnN1t5L2v4Wc1hzfH8kTZ3NumoFmzbmaVGUwSoxMWBSwmgc7",
  "key7": "2Wrt1x2ELA5SprcqTgti9qB8E3S65M3Kh5uEWUv4uqVsirxNKB4FtnwtiERBTrviHkpPKwzqLhtociA4fPzyombr",
  "key8": "yB48wUWmHfXu7GJgChz25Uw5uyqw6VrLnncoVpqbB5p3yaDENQuz18t3x5mNfVMBVnB2PvmKyjYWdKMWgPzjb2B",
  "key9": "4NfTaagusV9hnCfd9vXUpNjxk9o8Y5t8u6W34fU35UDZyw1quaB6LoTMyzPyDaNAiUYr26Ce5NQPNpSyygFjTuFb",
  "key10": "Af3FvmMK2ubc8QesatThx2WSDi6MT3cx5tyWfwJpYCWaRbS8xnvmWEdfoA6oiPD8YUbunRjD3jo3RTru8bWahvo",
  "key11": "5WXAthCTw51i4xwXewvSYKnewJdgCyWyjuDrbHji1uX9SBVwW3UstjSPaSBYNEGJ65MaJe8Q3tWYy1NmZDQb4ZRi",
  "key12": "5cksJox8kqtNXiuE8dS7niD24jy5SfjqSrGx2qLyEXtCq3XfbKLGXEzw8sdvM46khR3AJSEZaBWbW2KFgm3hUjEx",
  "key13": "5Eio4Ff8anDfM1pchhozmjUXXX1X2NyBrfdjpQoM4Rjz9SBSHbC2EVF1Decvau1Zsb4m943qPyrgeEJo1q6teRbB",
  "key14": "5mHePEAjeykNz3xh28r2gm639KZZFzZ41WckkR7apDSG1i1XVZ833tgZE3VGRA88JnoFf1TjdWddivZizLgDMwJB",
  "key15": "uoBWDNxAZgtepLbLrTMHBg9njfNQHGQHTP9mpQdG7jU9JqRUUZFoujWL7sxsZAc9T3cg6ZuyTyYtvRgvNRhtoNq",
  "key16": "5XXFppH3jUpp8Yi3wR5QYYTPy1GMtKmPTWwFYGyBbAU1En3ejrALjRvwnebu4Te5uJdFbcuAyAkjcwXaYLmjd7v7",
  "key17": "rWGy9QzJnA2VCkmhfrZiKBvVcGHjE9v62z8kNvQYuqyvkxDFckagvRhpuHaK82Rvni2itkHPJnmMvpr3kLXzDX2",
  "key18": "46QbcR6oZYiiK7VgvBmQ62LXYXrr4MLp5TRFddvQDCQvG9dLd6RLPCFTgQn1fMaaNmgUiPMhWcxtXUms6etDd9bj",
  "key19": "5iUysUPbkJkof38m9gXDuUtNTrAnGGhMRZDa3vUw9oHscuPcvUJ2dR8mWzryMdy9vtQdD2cktnjAgPPB9mnYkcvk",
  "key20": "67Q8xHqJhnbn8iHWgXC8TH6xebYa2kYN2wZzHh8n59x8Q9dguLiTK3VupC1ZiW4mvCnvd5QaAvWYLF3aqLZeU7N2",
  "key21": "4yRWt47hD49v7TMsLyNGmo3AHZmQLS65d9eGyxRAtAUBZuByAWZiH7CTsp2HLb1JovfKMCEyVj3ht9tmLNGmjt8n",
  "key22": "4EPUep4tSwby6GknqxQuxxi6ghELQSJoLWvELSm1bS1UjpMk1ZJy4of5BYqSKmEkyuvcyxuyM7WuLkuUghwi7oyq",
  "key23": "TWePJQVjSrGadA6vcsegirwaterZbEa1QzYncd8tmntKQfUEWFecraaR656Bo37cUWauigrYfNWHF4kLfFk7CNf",
  "key24": "43oxjf3vicqSH5hvyyM1zZADiEG1cT472aNDJzD9SMGPAvVBk73iyBYJAtHLrSKUMF8umFDzMAGw4j6eexA7Mwro",
  "key25": "iT9D5BDwDpXZ4McSqjnQkqFByMHA4wpACTtJeT9VCk9hgcc5Ka2tXd9vXtfMMv5dkDPHU3XRDYboS1xBpaS2VLT",
  "key26": "cR2n4ifzMZ63kNXGigMsCWozS6TBQtsmS5knE8CcCmTatFxNLvP5ab1A9d6npBd7FxNDhjKY782cuiySqgpiBDW",
  "key27": "eiUxjXcJSL7mnnFjUswqTFuLmiGbKfaYhVReXW5MxN2UWck4ArYMiydyqBgRFzyRt8E1BbnS3McqTZrtb3hFY57",
  "key28": "588jXgFqokM3A23e8xAenA8wjCEsQVPZtwAdryeyGQNtEYUBYD5L9BGr6umEDaDpuswTbryab9HyxB32KaDrKYMb",
  "key29": "E33EfeEC6dj5AtbcRApiUkKM6gmM36cdKw1s2LokcduoBkASVrw3sUaY3dfKHcvD2BZwxcm2myB3c2529ygykrd",
  "key30": "2zZz4rNzaWN9fmmHm75a3iQwwgccJ4L5vVLcYVV4rAL2HdLXc6RDxQoSSAWVYAvgFiEK5HvTuCKD9CjQHcxnUaQK",
  "key31": "54KnxRvyuuyV6SB3DVWrsES7Zo6G3frj2EjRnJDfbVGBoi1LVsaZzNtg1vp1znAZBVrtv4skAFge4PtDhANMctbL",
  "key32": "3bpfZyb1XGUr4WLgA8JmPxGV4TqW4CQpjtoEKpJgLdyyVp8jxUSwpVksMcVhs2NHEcPhL3pVVXq87zyW4anoruNj",
  "key33": "4YuePVm78PmEcHyKvn1YyQgAVbtV7Easjym8pDKHZyTfhJoQnWmtVWrG2aeNvhRcbuQ4Y6GJifcKnbaZ78DzMTZT",
  "key34": "5mAWzD5B2KaDTiKuoE8p45M4DAUAmg1nyk7QA16zgqcqc9iSuWth4HwoQoTfR3ASfQgkZQi8u3avAqoFa3h3g2MT",
  "key35": "2v2h95WikJG39FBEMo4J8TFERoUoTbAK7sgUyjetk1aMLCi5vZcwQzafysZGmeZJdQnJpD5onNx7osDQD2CCfAXr",
  "key36": "2dRwB4jYDP8Y2RF8BPg82ZuQXeRskNngsf24e7T1m1ZiBECHBuba6eqwPZBA75nAwHYhiP8r3zu3jMXHH9TiPPVz",
  "key37": "45VeC6TvBRvNP35LCQLqDmNfwowhVyjKQRRT6NNqQkYQJgdhprcPWhPGmn5rdQRm4Gn6wku1Vn73cvKMaRobjhCj",
  "key38": "r3uVWN5BHVnrNK5G8kFTMJKijXZzyQmuWkPuiMqAHhwWN4ghw4xaib6apo4raEpeQmyQVxtQmzBXZsXTX2dYEpr",
  "key39": "3Zq1hAiUUq6QtA5B51ZE6yig85fV35TDnXjZpwpycPyeCScdr2LZ7kot4xBQRZzncdhmhWBX2oAUAoZVVr2VFb93",
  "key40": "5SX5c9RxM5fvt2erHastR5E9UhKgZV8KpYJT6E9FuFyRePH28tmeYe6tZxxyjJ2pzS2DbapUDxVufcjKyekQK4pY"
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
