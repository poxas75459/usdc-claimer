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
    "9trVZoQGhKetyXRvpmorAVKh6TSfnJV4nVxtvkAJLTx4YVZKLc8vQdZUgsmPrvRutAfJToGG5duLrJLtBV31i7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TugPPkfkrUefdssxGMAgshvJyzAMXseLagRsutcXzZ57xH61pBDb3gumi7bLwuWTvoY3gZgcL178SPyeAB7wAMm",
  "key1": "62Bouvpkp8p7GndP9UHGHM7F6j38sAuzfSaoUQ6jwJ6DJo962PFFb1qmE48GEt7eqr5WRz2USsNzjuKzqtMh6WYU",
  "key2": "3FTSW2JNR7mGBoT2JRyenWUsZMSYVX2dAivAHFw4voHcNd7i2Tc2cjz5CXLuWxRyciwpo8TX5RC9YRPQq6cgXBE",
  "key3": "3ba9CQXP3bSfsRq84KgxxeGzcFbP5r9VYymZNM5ipGXGMiqXJonmsYMXXRpmFyWMRQ6XL1iEWHFbb38r8Mzi6pAU",
  "key4": "3jHiZZ57fJYgTpcwmFo7kBCRPVeyvdHnERhH1kgb65oqYjVs6bWXkT4q6YoAtQQbr7hDS8mVabijbgZynYoarbFz",
  "key5": "2SJKa8T9uoK5SJGGyZiCUwzPanUxeZCTi5nQqqwSTNPbWBpHjwk65FxPhDvbCsQkMGmDY3FatCpjjgP7ub4MXcd8",
  "key6": "4eYuCDMZMjgz6JD6fMMJunYdRPmgc1ZgPagqVyg9iz3SYQoxydonSfhxXHtozQdYrnrfYD5quNZNvmopbmXWkJn9",
  "key7": "qseHyrk6oGXm9ogSLi1iXzKfstGgcdCtwG5c2GdfZMeJNA1LPUYUCj55kMVY7tPr8NbcmZcrQGiBpqJPz5xzPXK",
  "key8": "5ooHEB5bFiWck6iVN4ksjodatYZpqmBVzqvNTYaX7pys2WQ8sU9uo3AM6MWkGrFmD56wWcWasDVmCYJP6xtx2eqq",
  "key9": "3FLaAYUzWf8jMZkipTufD5D9rGYpYjXbgoruhDGzyBCvN2ZfHjkDmhaMwcDt7vcaPRDB3RfnbcYCPkWyzfSUPAGU",
  "key10": "2y46DgdUGoKPp3LfDCH44cu2PofCPmn38JJbK1HZC5G5gAwuj35hSfgjnXXQnmpu7d8dYNKh5DrxuyJvgowmLNFa",
  "key11": "5JyJQNRe4GxDCFnUzLx3BCJii4KNnrNzwmWL3vrKLdxWuKeq4NQDaey5WEHZM4Pwf5c5EquRY79WVfkL4BDWRPtK",
  "key12": "31Qe2WGZEcUCXf41nFbjBHLkGkHtcQah7Yf5pLB1R9ohhkzU3ctLSsxVwVuZvWwtU6dV5WuW3p92svLJ5gwEA7Jk",
  "key13": "W7xt8PMDmamcFyJuLEeGXxLcEQELiyDWiDtdNtWphib1srh8h6i5BSgu2fxmbfH1B6Z4PE3ZDhgP6aZTsmpDnH2",
  "key14": "3LRNfno2mP5qUruxyz5KzzJES4unbJ27UYo3Hddnto9Ev1uZDArAoYZ5n2obNZ4d5xsc4DCHSomxZhjvkSH5sgmM",
  "key15": "2nSbqwArjoqif9qnb2KYeh5mxo1jmrTW3M1Emzjdafhf4ToCTc31acGPy3MYhrr3jYyftnc4QZwHYFpXTKfqJSTa",
  "key16": "4nGv7L3bPXVFrMHeUavXaLbRQnCvT19Dh6gokEqEbYuLLUcXKcSzqCup9SFgQNg9XN4z87nQv7o6YZSntHK6UcU6",
  "key17": "2RB7qtwKAmNFFk8ARdup6yJrdUaEDJx5R298DtsoPaoQu24mMHEna5EtnbhFWs2v4HGSQ8TwNdQKGEasZtfcV9Hz",
  "key18": "2nbb3uGmWEE6wm81Y9yw1FX5SVZk7s6dJ9LUvxuGhhAGQXzuoWxGiE2yLgvfkJtkYyUMgx56BkaNBtsHyqok1QhY",
  "key19": "CcvT3mDk6g6xVfxbtp8Faazx2NzUZNZtuxpgiw1JNcVNixAoaBm3uNYGdkeagtxD87gFu3utWXu4jcStCtmtY5w",
  "key20": "4ttvDfoLte2aH8uA7CsjCtGHQAK2gjb4gxgRAa7e56FoRx5dJyqEsej2JEdxo7eV3EyQ1nwZa2r44HhXe7fNZcXC",
  "key21": "2gBZ6AeUAKq5GfHow2uBKH4Mr1mHTwFEJdULjunevUKHHAUYH6iwpxSfJnVRYo2YMsf3p7m1RMrtBGmG3rr2QkZV",
  "key22": "5kkwLHAQi6cGmis5t5ZLLxR7d8So3YyjB71eKmJzHaz114yNj2HG5TphwHiwQ1fgNS2uiREzc48ioUcWoYSXjq9w",
  "key23": "3NjFkUG7vZSvEbRhzu1Edi98rnsMXSzbYKLAvjThT1tpm9XMaX7JpfHzgWmaNtbwjMZQxEt3SBt9N345WBcFtnDR",
  "key24": "38ai3QJQPuThwuwq28chFPQs9AXmPbTiDyAD89Q4PWjuwi5k6w2nT14c5KRTF1TcrgmQS2Yumc91gpxzjddc8mYy",
  "key25": "3yALDZ1TjKeBrZsuScjvG18mMhbLeDDdbM6UYiYQL4Tai1NnhH7PuUz6VjN25XJE2vc66tY4wu3az9R6r9xA5QCy",
  "key26": "ACVDJtB1acn8hkHHE92T2eK7TWyRjpwjhpaLXxohyvhhBuYufA9Dr9VjWSTVxphdUErxVtkWaGKy9yc3tgTsirU",
  "key27": "68bP9pwP7wPsXmuRRyiWU9ySxoyDvjK2dvVDXiqCgbwyZp7oUwKbQSrijTdo18xMSNun75cunTrPsBqN2o7mQUX",
  "key28": "2HnNd8jiSQ96BLv6Nkr7cMyTBgzBBSyAGs8k46Ui2D7aJBjbRJoao916CJmqUqgJ5P5XTGBm7qYKqR6LC4NTuEb1",
  "key29": "5tHbSMNz56xGXp23dJg3DuVTraQjTaFgCyFyh6SbWxGZDmVdcKTyHzWAH4QHud3BfpbphDGSs5XUjtPBbubdhvhp",
  "key30": "2TYiKDNMvegVySjQw2fif3ePCq5dvLALYWKXAa81S71EX1SvMSaP1gWu8QGR1rLZdRYPVd8LkWe92aQqTqWuFoCb",
  "key31": "4fcx66N96DCb4e4hwEiCrkw97j2QVKHDdgRPCLgQJrXRDT8k5MipqH5uTtUTjjGRFxJJZsvM8dqqUfAZgEQzxEsF"
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
