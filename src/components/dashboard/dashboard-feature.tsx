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
    "4Ww9Pkzn1cCGkwF7jJ7tuR8XP9NYLTyKkGCNz3gmAsk3La8Xix8hN8ESVkzeUewGu2n66EZU2jp7KEtSsyGHPisZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2NaipTQGz4pmt5DhU86zHxx65VHzMH6jy9dapAsV8PVKnWBRKGiUpTKTisAf11ct4a8jHBMZ7Vjd4Nv9qUiUbU",
  "key1": "Hpmheb44utD3Lq98aEn62VehyrdxXwH8wfiDRFNEPMQdUzZBs6PPykD85ba4RkXcdkhVce2k6ARmir45Sndf6fn",
  "key2": "4oC9PKn4GF3TkNqvzb1kLKTaWEqGn4RrQRha1zcaRvwi4yp83teG3KXaz375NN9TXzHeLZ7KcPWq9pGxZPGVMuvU",
  "key3": "3cZFmaXRedCmZ56dSkXqhywdSkVBFoJpCftR9U7eVQ1sSM5mfBn2YJnLbocgZfnk7MS9WvbCFA2qyvoNjXuPRqAk",
  "key4": "5BHM8Eq7ifp2wreMe3kVa5zyyJDLPftTGe3XsgejaQGbhbzrZDz2dpPHJ7AFTaLK8WDmRvqdSKXEEbTKvMz4XgkV",
  "key5": "65iy5uTfPWcf997KGZqc6hzZXT6TTgR6HfWD7vXcyXNCmR7XkWqDzsJ3vgvgM3JEGQv8uVCgy5yt6XRxv8LKrNpW",
  "key6": "4SXheQQCwRKQm52w5V8NoEFibcxPbA5q4Wsid8UbhqhU6t1KCX2rXWR7obEqPQsoFqParLHbR3G8JjasnZSUex9y",
  "key7": "25GfYM6DoiEvrVVJoGaKTtZ8dx4oFq1kYajbLhU1ffPZV455vwC31aVYEF2d6vRN9eA8Tr9Vn4kTbCrA2pRq57UZ",
  "key8": "5W556iPctUQD69Sf15BDnFkpuxKxkUHts2t1fvKQbyfYvMwdb2Ab7KjC2ddSDd16YpauE5krAveK3cVHVXtJzjSA",
  "key9": "XPQEL5mb6WLF34ArHH6EwK3Hs4UAMAUuVosEo5K4q5dLP1Et3E6qJgxLQw8UVE5ph9zmuqdbZPbQWsxw7NBhiYp",
  "key10": "5dqwfwgZmsqz4uT3WtTgFYr8Us9wU1no6aUGBxWQivpnu3wCv3gBPWU39Frkc85pWbx5WEeuitvL9KJ1S12ZtC9w",
  "key11": "5DNaK4i9qFFevy8nztF9Kmp6Ku1trbgjSKU6oHvKT31YPkwBf3wHpgDFUmcBTXKcEkHiJLkkerM3yscdDcKjXvdW",
  "key12": "3nEa1ukzprEggt6oARQHausLQki7earLJmSBdwgz1EPjyS2cuV2RMR8K7Z6YSpbLH3Ak3KsPDmnhgUsmX8usequB",
  "key13": "47J1qD8DcbE9oscE353T6Zps64ynnxS9zYy574UeD1GjvJvyqEJAou6dDim6b8cHbJjvXkWiqghXd4H37jALe3tL",
  "key14": "4YdYoW4dQ6BpwVYV3pfSNX9FfK5W4BFoqXF8bas9jcuu66cYLvtGh99YNKbUUztiaJqwVjUprHgGzMmS1r41ENA6",
  "key15": "4Pgxtmd9vkC3Q5TQj9x2PPo43nnjJPN4vVcMpDN21VmSsiuiVDPATJoq78HQcy4jtFvBUU3XTRpAF7bnVt2ipGC6",
  "key16": "4iZh1gxckHgsEQ5BnmLUNveE1fzUmoTcL9fcPVsT8nfqnn9Yx17TX4HsqDvnzBL6Mq7TqtAY8a9Rd1DXpa14N9Tg",
  "key17": "66J2ty39iFeozXkyTZzxQ679LZY2vBaVKetfGoAiDBAzSv7wmAcwCxMRQ65wbgVkmctE9iLkY6kFj9LNV1yM1BSE",
  "key18": "5C7XZRGVhysAmfewAY8bTSG7zCTijBZHUEa416a6esWkWqfyF6KAZt6pouHVU8bFEi3DoGabmm6Lgm4UpzVu88MK",
  "key19": "23T2Nv9tYpBvqS1tutxxEEe6B8JoXiKKEhvaB7MhEZhyHyXuaDrKB1jS74GqgFmvu35ugYDFitFFAMgWZqvp8Lkb",
  "key20": "5ErNhR8vbt9Zdz7RtamevbLi4xsHuJS6ZfBymsTd21hdm8tGN8kv3ngMehnyoGKbzGShUw4w2VTPqmALRZ6F9yLr",
  "key21": "2TZbvr5B3g5yzeUUok3mTdSU6bpCaMpoeauoyUVJQyuzUwtEceqyuxGNxwNE3m7Mkcnpj8PMwoyiRKL2QsoNLA4j",
  "key22": "YSBTAMK95vpogkS6JKLkog2rS9XbyeJV16NtvVjFyvKYq5JQmiwh4pYZ1Zz7iaG2Uz3FCKqjFnvaSjwoCdp9i2P",
  "key23": "2dwzXYpXypQk9xWpAJ8HReJksYc9kfp9J3fV9VAFXzCJDESxcYqFBMM4pnP4varAbkF9ruPUEdqMDfyqFUyjewe7",
  "key24": "3nnC1KuEsWXVRmQvJdHQ2SR3qWLr9aqWnqimSDswJgaiXytm2pxRY5yjtCo6ein4zAVFrnFvoVGZMgDoS32PLa2j",
  "key25": "2qBEkQKcqtN9EpVoW1BNMegFBqGhy4p9MbCfdToNKcEe9dQnT15dAZLM53eQPn1Yim18NW4h3p24XjWQ7ZbVmP6W",
  "key26": "226Q6UBLyqZykqccoa7Yir7weXqnPViUq1eFeYs8ot6yogjGfRAYswfEXvNtPyEkD2gfiX2hosDU996Ef6RJQYAb",
  "key27": "5DgXn4SYAaXbAdkPBejDQSbnkzpj7oLqkdKstivHi1g36pkXRH5Dba6kiJqPGXn3nKPEN7t8qiDB8FGcznx1g9dY",
  "key28": "3wnmnpsdVjsLMS5MCmZakvMC9VCqtjBKvUgyWdJGHg2ffVUazLtUar2V8qkZP6ir2pc4up41M716wacaKKijSifH",
  "key29": "3MGxrYvjpRWuNDyX2NqNpqCNWDJPSggxYNAzxWzeizuTe2tkbsw5kbQatEuTEdBYT93RsSngs7t6biXWM42z4y6h",
  "key30": "ja7Ak6aVrutesQXwHL8NLukUp6RrdkbUMgnVxjP6z8GXq5uXzxBawxUz2zkcuPs6NXypi9Z9VgkwUqQ6KKC64Z7",
  "key31": "5oPxtCReBwSuHHAUdvBfFLv9xg8p7FrYTkyhSfAWk8vRUExzoQEBEcyh7kWaPC4FFqXdvaz3nUxJ6BN5jed8onPd",
  "key32": "5Tw89hGUGppMkmGititrzKEcCovZ9mnjuRA6agqKZXtk3VRAcov67cBRBNGCmCMNDyr7wWaRZhcrVjvi7zyCHb9t",
  "key33": "5hUyH4Mk9TmbKN4VaG9YVftVx7YP1rDwQ6URQW8WThAcZXR8ccrqtd33wwSUVmTMVfFCEykonnvjEtFPVhKx8eZh",
  "key34": "2xXVibQJQN6KSQJRZoKK1zPe4C8NF4d8wLT5m29TSQnom8k5epZYgH1RRrXYcUzbvNDrshUqsR3ghQMACQKU4bi5",
  "key35": "2YePUr5qZipw3gEBL6ayEXFbUUMNaaUbqKswAFGuRGdxiEpqvM9hFyEfFh6sdFcYRLFrKFRznWYfGonTikUNrJ9C",
  "key36": "3nycwMjZA6Vn4KC7BwjrwT6nuTgSEBZYGqv3LpxQPoYBqzDCnXqnJaT7YFNw7JGCB7QbuhRxQxTSfPr6A9ThUWWW",
  "key37": "431C7K8nV8JN1rG6Acbiapm453p8yudBxqgG35QGMKB7KR6EhkHQiYnEBvpVNhx93t19ASZ98agfZgkdUKTupKJR",
  "key38": "2FL7nAKLGUPWBNXVM9t9zoD1wymW9KNexUUNisGZinRMb8ZCefVTUSv1oovXzGvLqJK4Tro3ecZd2MeH1whgGgxh",
  "key39": "61GqpFH8kzvN1iuAP4nWMruyYRJ1joeBt45NsCexfdxw5PUrSndd5p7VLEJ2xHSAMi7CKENw1qbwbrsEu6YLg7JJ",
  "key40": "3cAVbtcchjBD6dZ2Kgk7i1bcZdoyaSGq7hWvQiUBtTZ82jFafvF4trPA2VJ3W4n14ZQGJnwxRbJbprqUyQ7ukWzj",
  "key41": "2H8Uosp1PqBGAd8MTN5Zm1Nv69bWH9MB4k3XgYGbYUpEe3JPCTUBmCn3w4FLTDpw4vG9goCoSPUWFCtdAtVR3vXo"
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
