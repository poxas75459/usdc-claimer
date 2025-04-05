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
    "4MucdRVphja9AQNwmuddNuL5NEGcYfZ7UKqscnpMxmrdd1YLZPFJXpUFN8UgqW5gYsiqhqA7zm3QrdM4aHqXP7yJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E6R7DqP2xHZEr8ydNa53HSiDABHcouinhtrYAT5qCvhDAfA7D7AewFirH9BKMyMhDte4ZQeGBGZMDB5jKdWGJSZ",
  "key1": "3oKTktYgd5MUC37JJWevghk5yqyXvhHK9JzeuwqDwUkrTk8WMLJQg4P73MJiWvYXX9EdpK2jCMshDyPPcZ8y9FJX",
  "key2": "243QBYir2jwumrMqEcxQTG2JJAJBE7oEArkStTbNogsPSQpDKGCHspecthCq4DDfKHM4oujqasUzXoACL9WuY8gL",
  "key3": "4Nn6zT3CrFPJ9ADavhdpUbAfQT6Bfm27s7Yzap7JRwCK8fhDWuZRQqoqqJfaHjRyagCgdB5E87jayZwMK3Wccrum",
  "key4": "47EqSRnbVDMF2Fug4PGSFoZKYpyDGKMcnEL1BzqiDJp6MKW7VyN5C6fJZX9DFksjHGE4KztpuJmeouoCgp55a4Yi",
  "key5": "5c5RjLquXphfRZXQ6Wi28oBgP4rdT9MrJujmt3MjUPVxKcFrWLxCKBar4ba5B29QuzuMCneJfBaRvKN5kJu6gSF7",
  "key6": "2jWLXS7ygwjjXktVrncqesCv1ALQDhmn2MQPD6RBKP7dxUTZrzWssim9Nt6Uj2qLx4eb3EsdSwcE139UT5x9hhDC",
  "key7": "56VvmujVxVSgQk1cgc1CvEKB565R92WRw5eyjDCyCPrWxYv3LDCj8Exchc8gBUUHQ3PsYdgULzULcpv85i3Y6NnM",
  "key8": "31KA3bZLE4hjMwqmWx8BtkD9fCLZBJobiC5Nf7TjiZHzQEWsv85WNkWfmFeahheMRdnCRtKdBcJBtNGDZ4rR7jiZ",
  "key9": "5yihVxaYrFmydwYy8kYwwkf4xxZ5tpN9keyGHEx9UZXPm1w3F8umjb5v7mQUMy6XLDv233sWQ5HfJF8U6hh78tAT",
  "key10": "5F2u3p6wwidY9rBKFk4mdqrcyH1JtEwZTjgdXfS1xppmQha5qvAeia6GWTNVFT3K1orMEwjqyZXjMpzy4YD6iax4",
  "key11": "bRHFTG227T2JjRdr9R1JKqm6LDnhaf4AZfQ6j8KAGLcEN8Cj8zTRJRh6CtRzuE3J5ZKXUXgfCrYNVxuY8KztsuW",
  "key12": "526H3HekzUNz2QErc74hjyPTAtpiERfC7LXLv6mvqtGnLDF1CkrZGS7fQnZD6q2Mccoft7MQjF4UtYzuqA9raSE4",
  "key13": "3ayyh8hsREvYNFK3T5z1LK4hJRN77acBhbfrvppuf1R2eFqRLtBXWdApiiBhwRTQnciyGwbmWiLoiwYpduSTbwV1",
  "key14": "3bE4XAi9F6M6HsahHYC6cztx9yeMrA6rh6uFCz39Pk8u7pwwiYouFfZUiW8qHsiWsNztqn76A1JCzcuAEUb2tpvd",
  "key15": "4vqaGfUykcCwVD4AKuf8p3pqMzHKY32ctHP6swpYXHKcaLJJXMfwvTgFxguigJseyyCFcqQKT8yas6mfutRBDR47",
  "key16": "5edvzq5UdGTLPcreKovabvTxoz2Vvhb5PDBT8ToxwGi6FmQxFg8w3RS1avWAyKkEiteHQfsiiDavJeX73hS8ynLC",
  "key17": "4MSqMCHpZHTRUiQxUJUGURxXuiSTsNafuDTNtPZbHXC5PQTpLN4mYrwQTdaTZA8ym8yd9VL8SSvnaszJa5LiV9mm",
  "key18": "3wuhm55JKgjhAcQUE7fGcajzgo5tfyExJWnk9gqVPDKq4rgTA8ZLN5GcyFw4hhAWaSb3Jr5vj7CtuWTeTBgJHVKL",
  "key19": "Aah8fYbxarn2dMNsojscTgahf4BhbRjYxyPNnTWkeViYnQUt9aFRYaatfUbBSWxKxibVRTajGhTJgW7Q5sG1ri8",
  "key20": "4pywPQbERwvM8Mb8DRwoPMb1sQJEDjWQAh43uxtwkDbBavTMFZyeFtfiA9LrtjmNy9hso5M4pDPL4vchqDnzgGa6",
  "key21": "4N1vUm6m5fi2oVjkYEPyQUahvm8YrP1XggeCuS7B1JPHff4oLWcmgWrtC49MDMgo5KP5aD1ZECEKQLK7Db7CFQr1",
  "key22": "3595MTJuhN4fbxREbgFRBQ7bnWAG3npWZd8V2Bv6SqZ7zvK5ZrjCZ3LwadwrkBW59cioWGtLm1mF395ePqcLkUip",
  "key23": "3aTmvbTY4HKoZhqBrpm5c5i4pZhaaUTLNE33J57TydsgGc3SLoWYNF1sPmt9Zs9AQirXTBZf86rLWK9EzTZdbn5q",
  "key24": "41L61FMwGH8Vu6QnZvjfbS2c1i3qZ4jLxrNkJBNqRpHjauGUM3hHoge5VZ6aeRwCipumS48gRLYDd6Dk8tn3VqSL",
  "key25": "5TknEQ4maEFHWc3oR2fZwXGKgKFWGCmjnu5M1xi5Asj2z6vxVK16Wm1JTJf2oZAe6jyTGzd2EEp3rCfRAdSuzrsA",
  "key26": "259ZmXFW1BSwgZpdBfmiFf569KBG6qe9aJXigZSQqmyVSwBXYm2y8vujE8BtsxLsnVbcuzKcsBT8LXvSFNFMYjiX",
  "key27": "4BLo9LRjPHAgoogTufgYiozFmBnrSR5oojb3nT9JUEFbrZtCMrBP9PbHsQboskyFSkksJCqFwK2RACLr6239enXB",
  "key28": "53tmtwuM8PBxF52QnQKQhVEZMkSiatNK6BsCMmQ3A3omPRgaVN3YAZFmTaUo1w3xceDuwBV9QhsSjXp4q9zzcs83",
  "key29": "41SBjfkGHSPjWhXt1uRG1UD3posXWgjCsVNKy3rG7qmnrv6tyH3i9ZFrbecyjLNpoW5g6BtosfF3RYW8BLuL7KS5",
  "key30": "3i5fJzvaM5FxCSvQ9KAbTkvo69bUiWJs87WCVCHhnVQn9WrtUAMjQP1FokEdMbWaoycz8r3cYq214z5yiDUFoRLx",
  "key31": "53mZbYhBaf6mhMeTBKiS76S2PKjLvtEwy5VoeDHnJwA1oj7FL5mavvCySQNBpoVFUNi1yKLezcwBSpboopNdVQN3",
  "key32": "pSrA939UT4AythMonTgmm5hdJUNSnFLwiVVDpKtF679zxbYsFVXHR3U5XMiLGHnzzF7LEHr3VMZRYWC19tDcMVr",
  "key33": "4Udnrzb9qjApRL5xgUHY9xaTWCnSDCg2Smut1Gghk9qoheAXj9WAAUZ8jDEdcKCL5Kdq5c11rTTPhUc8LBe2PbqC",
  "key34": "5weAZn9NaSx6bHoztAJ8QcFYJboN6WhNGbTohP1PBjhUvCmzpYHkE6SwFzvk6si4rNrTs7EuQ3S1NdW17JwxWAiv",
  "key35": "4URfb4WHD4DCz2zYzyK41RLuphfkx59i8QDQ1Yzaru6ozXQZUjgM9STFxN7FzDyG7XqL8QUmpeLfU6aXu9Wt9f4u"
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
