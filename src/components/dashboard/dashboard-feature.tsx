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
    "2EgsxhJCBsowdVpkbJ2GFttN2kkzvtScruJaCdnGthWn55jYzk3zF9kAMXYS46rfW6ozFgbhrBLfqbs4DibkmtCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JANHgrmyTEDZNcqZEmRsvxEkFCUcCozJqi8JebPFLQYK1NsQQyVBEnJAUCaxUnBBohR7cmU1irhFi1Y4zJ2DZQE",
  "key1": "KdBu2z9QQpQCGRBsXH5GkLaFUn9LJGfJYCEGejc7PkUJKfysAyNkgva4fMqKGRBL8qJpWP1rnaWrjVwQW4jfXLG",
  "key2": "d3dGjH7sCy9U3fbcVFcJu3H8795n2B3aDD3srvpwM5EXiopDeYg4NE8BNvQA8jG2J5be1JjKGJNVVxuBzuDepcH",
  "key3": "28jALXvgD9QkhBkcciv2r4ET91xUpZbfM66LEr9s1c7taTVBZ6AZdtYDYj8G3fDohkNBunK9wUaeQk6QggLf9B8H",
  "key4": "4kbNgRQhjjvjY55iKEpY1UJFHdXupPAV9hWKXF6LocBsk3ru3guis3E6huVciPvgbtVf7T9EmWnYVLxgEDbxwuiZ",
  "key5": "yB9jN8r5bgS5ydvbdJte2GktehVVs2VBATb4KBtUma5ZmxrWTwC2inWcXLq1Fn2Xuqy2GzkTHdwcjxofcwU4YEr",
  "key6": "4r3yMJnKoGQtixreHv8xh7maYPoB14YXZyaqeNmzgNcLMEsp31k1DUXZr57kJkJehpneaoniKjf9qmWzdow62SVg",
  "key7": "3tTucz6JxFCqvLwJDEg2Ne6hSjgmXEKgvGQHgdBA2gLJJjHBhmhG1SWGPGwszqM2kz8z1Wqq5QzNJMbEZWuikc99",
  "key8": "5DRDRRmq2waQ978pVvM1BNKUGKjLoArTj4oSKrw6fNaju4Dc33eEvcdrxLDVYTfTnWRKfAgCyrNsPmpDtge6tPUi",
  "key9": "5ZpKZ4VAoN3HzKRo4iNZN5dRexTbEFAuyQHSEg46u5WDwcWHTUo3RyoN2iu5BsfUG7vVHcpx4iXGao8h5T5JTfvF",
  "key10": "DRKpq6KpnJ15ge9tUaAG2qfAKBu4SJ1yGzuN1mhUSsEbdDa1aDAPJqCaS6Rnhx6vqZs9e83P9hZZAstGT9UgkeB",
  "key11": "2KgdciNWNn11c5yTqM7A4ngnynAdMZ9Lob3zKmMNVJhRZfsmTah4JW4PaApZrVQBHa6ARddjRax8dN21EKom7dYx",
  "key12": "4k8aNackFuZyrnMeZmMGSB2h7oXxFA9jiGFdFuQeou4eG3f1FL2JoFVRTdRK7uW35iBTb49bemAMfZid1uEAu9P4",
  "key13": "3guFJLkuSRStmMvLn8AWxCicHehLyJF1bBsBb6Abup7HkPZJ5rNMy8eruXdAd87EMUQSjNPCfE8RZ1DxqT9P2CEL",
  "key14": "2BP1cCvrMCdqES4YfbazWzytnkU3Qm87jYiTEpra7eGbDkw2qmc3QWQNdywzQGSJa7sYiWqX93mq7TAw14WkWZv1",
  "key15": "XDt3j4ErVaigPfwgcqwR8ZTvuhzv9EDiYCDVkpP4Hagy6KdrSpFfPj4CG2ZKEAHjrdBZwoKfDGMN5YNkapVRdEd",
  "key16": "2Lr23mPPah1PwnKHEj1muZsnHUdrmKnUeUQCFv97d6sYc2qRxXvssZe1UUoGxCtSaKZW5J2pPnZVUVqtyWGQcJxN",
  "key17": "FHBswguR1vuAuCpLSSD67iR62tuR3vXKshEwfq3CMj4MubAB5B4yw513igfineHe4xjUiH1LQAS5VdkooAcP97N",
  "key18": "33VZRMkeX9GVTsyUb2VZ9PghyKXgVCZGeMD8NJozDMPU2M7XdZYzRdKzSsQg1Y3mKJ7MNhwyPFNGPR8Ea9YCiKpB",
  "key19": "2WMD4oN11AoRc73G9wXVNCZHz7LH5j2LFwWie9WSxyvkQWa1qq6NXYCp83ydi2N9auatPoEZ4dTVbewgeenQLo6F",
  "key20": "23HpTxFcEk2c3CvyQrAwBeZTKrKD4LQeZPnuyZpqt1sZTcjqZ8XJsGabiqKZZkjwt7g6egxKbQovh8XHdyDegnQN",
  "key21": "3qP1KhGF13CyHdfSD4aXKpzhRtJ4hezCNeiGdqNW5uiM86GQMRfg7LJVsHkET3YchTy1aGiBbpkXFbGBruEMZXE2",
  "key22": "2k4RZ2ER4vSWfsLdpxxKvuTWJJMsuC9gHX9viQ25d98fLuGpk8gYin118wj9Mr3iAay9wPrXfQy4uQvQp9z5UkGZ",
  "key23": "4xmQ4M8SU6huCAG9R1E5D42bdDt9KXxYf82a2tNa1Xzi363aWqGhZVChK9Dk2vYLgrGJLPr3RWGTAhGnzURACSc8",
  "key24": "4mqRMgLgzfPBQHZcvjes16npM3wcgzZk59LL25J6R75p1447a81KtUmXaHf1fuK6VAfsasWWF9AJzqSxjdPj3jyc",
  "key25": "zVApkmcSa48ebkU7qPbMsMK8ybAKZfFVifjbKvb9PhAEpNGwyFTr47JkzW3UY23Pcz5d9VjtX7DUFGQa7LfHMvg",
  "key26": "3R74HK6C6z8nPonBgbmMAgVuHCN5sPYQN9nHtwbyVvWY6FRgnMdtuXrnJQFJjUPWWebXZ6Z8rRo2aqYbB18sUoUt",
  "key27": "2uKKccFt5B3GwWhi6WgoU4wYWvu1vmXE81fVHGcpFtuxaKNYpgCsWhDv1G73mystkUZJidWzDyuvmwQM4LQmVyRP",
  "key28": "2FZnB16X7vEmtUbamryVsWYknm4dzVkQ5cgHXLRmNTbC8R3EH2B5hM9yg1p3i4VKaWYy9XKhxt8iri9EWpywNbas",
  "key29": "3yoLT6F6VHGaqTXtYD8ShrThPHRMqrzfK3wfErix2swB2M4YFjyFSWhrnh9rAf8YNJCRy1sEb1Pbfc8E86XqWtte",
  "key30": "63dgYrUBbty2zVxSJBNKMyXHoSmpMPMLDbW6p5qCQWfpjzs8EWFWTaeBzxfbgoqqjKBZoHJPBcJM4NhMeCaMWWQu",
  "key31": "4VuBhs4J1v39j7H4ProhAXmrsend46Dey5rGguVu8cji2tD9gvgAYu2XP1VFFDThfivKPhxwVYvsSiPFVhuZFcUT"
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
