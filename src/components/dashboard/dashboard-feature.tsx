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
    "5EMhsjDgkk6poebR8gxEpWEL9cKDWiGZ3xCDQdVXxr2FggurMhPXT4bWNgP9EkQ6ak25BJYDvNhM2GxbSWJqAqgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DF1YX3b3hqvN48JDfYqjwCZzT9PXhx3s7zeg7X8x1oxUJ2YkJo6vJEBo8kAx3EEDxGZVEWx7mqpgKxxiy4A62b7",
  "key1": "4h6hHpYZFuwkSJC7BAy7QaTtzRpogDtFyYWX4J9VttXcAQNLPDR8bEYCaXfom7mADvy7xxmGxz2SpqRCLHo2No2g",
  "key2": "4bEyzbvMXsKYZEmQPMUJkKTbmrg4GHj3oHZCwQoox7Vy984Y47k72b8R8bqk8ibHUpxJ4y3TU3NZbLiuckrRBK8n",
  "key3": "4mfVTH8ARFs9iVBuNGVXa9boXZ1Lo6f3GbZ4DZDZXc5HdWkYseLo8j4TV52rJrL5sefpD2NTsdpUtR9Ax7uedG4y",
  "key4": "2eZBuCYXkRYcScmaTkUwvhhdsFv5kwBYcZGayv1UNvZfpsUAEqK6Uyxt4c1jhHQtGMHXpSG5pjiVijiuiijz8K5j",
  "key5": "2kUxEDnHFpbsKURJ4HZhRoYngbm1vpiD7YisdLwiCQPBiVBuSWVcyS6Gmg7AjRxtPngq758m5dmscjNzBroRQsAL",
  "key6": "3fYFYMiJTRHctN8u4eS6p7t8w5TC3VADxQETm9SoDcAdUcLwmPqT5QMuvJCupbWXMHYoRmTFxUbE4oAXXpazF5Vf",
  "key7": "5J27MZ32ZKfLQAaVFpA58PwP4NEEiUmJyREKz3PubMYYVDmuLK2PoxiEyRDtqie3sbrJwYeJb3b76ihopjdoiZxV",
  "key8": "rADoEiZpu5HPWonSqReZu1gsrGEmYhE6nKieTNPRQvCH9vc599CZXdjosWvfV55ddDXF8w3Y1is1UAKDihjTDuc",
  "key9": "2EaFDUnJiEpgGMXMDF8qJxYyKjShNzKQTjnhemub1N51pitNTtdnqgikraUcd4PmojBQ4ED4SnSuYhVMK6LMU4ZN",
  "key10": "uvwon1nK7q22ZXX2Vb5yypvDNCvR1AZ4p1rBCREJzQwPmw5rDG46APRhzyZUJSpx3ec1Ugdf69GY25N5gWLNeMQ",
  "key11": "4dHwxQtFLTvM3jb5qPwDn1UfH2DKY49henGfFDTfT1wpgB9pPX8i14GH1oSeZr3KhqJP1CmxZaJWdzLbxGteZmcj",
  "key12": "2syQrgvuVDgrHJSFNCDp4m9kkySgVZXXkQwyk5uf8bZVQ17Nr6z3VWMskxFpnsbKY2wyPgPmrFEJjJHrnkqJvM5v",
  "key13": "jPwEQU8JGYjLST3jdnwrJmZ4ECkq8bBKwhYrtKuPzfqtd9MJz9QgQzuPqdnZVdEFhh8bYPjGXD8T533qCKdJaS3",
  "key14": "52apmY4LSZmFSdEjQBLhoudWrsygTwfbUtXCbshQSkThG1nqMVvojgUzDynZ4iaDD5dv9Fh1ePQhCpyksJMSimZh",
  "key15": "5zRVNKdPbXgvK12sRFbq6Ys9eoq5m2igKKEPKd6wa7cqM9zYzAX4oAQ68SrcMgKrZJ1BKnX4gFPNqNXb5Mk436mn",
  "key16": "uinHonBwZNKzriVA1msBqympja9s7Y8d6N2HpZqNQ2a8TEEeLqXVBQ96CmhG3Y5dpcLk8PeNcpyoK8NBztR7LCi",
  "key17": "3MiWdbKS5Zzb2vnnekpgAMT7T9AYnpQpQyAnuEwHSN6VcQgHKn9HEsG6hMve8A1th8wQbwp8wUV8vtKtabEgU1pq",
  "key18": "3K6qMuupQW33Gsqr9Fno1sWsGCNqQt9ks6hEEqUr3T8apsvTmRvokm5SsVM4nPWLQYntbDPghPfK5bPbneyLDJvd",
  "key19": "4xAsyiwj9e7pE5YT1wsBTqQTym5fvrazXEhfWQkF27jryMBXoh2a79JgP47HJWjK6QoTNAxktBaiZjoxo3vJLwPn",
  "key20": "3A6pBFUWFXGnAjW9WcDF3xYYLY27PFK77qYK9zBoRn1vWmmcHpecdjQ81tfNGiyDTMCugyeZDYdHvacT5nEwjMPc",
  "key21": "2QT7oHYsfxHA51QHejXqLREQeAgifP8VtH7pjW432utG2WnVhVDFsVPkJi5NQnZXxihAWjvLL3sSEayffywxe8RW",
  "key22": "oAMTtUrHCGVngVvn5XozD3ybwucqAyVUNs3GGYFYnz7xzQDoCDpZdukDvGGGNKtN9QLpQA1s9EF8qLPFp58JRmd",
  "key23": "3obgz8SaAPd4XuZfeQEViy5Pd1y2x1gmbmsSYX1umZwQKW9amsd7X5dHhXonSpQf2YXwQcrtRgh6WwMJBLfs1b4r",
  "key24": "53DwcTVR1Y8KDW2tpH8E9sYrg3rAP3WjJcwE4Sm6MrHyFgB7omSgZPav4gQas2X4yDpYrXyrzNEzo6BEsi1zy6uC",
  "key25": "4iHE9MNbwdaN14Nxdv2oeRNHzcDymK6CZrCppPXZ6nsKcu5QaQhZuc2rbJAdppiwmiGQjJNqs8x2myPzs3xKm5wH",
  "key26": "VKC7Me1imYoqqdHwDc6ZukBjXPGixC1qCt2rszt88VYTmhDtsLpyRSHUhU1H7hXv7GFAzWHYJfVhXx7odK42WPy",
  "key27": "632LTUJJBEETrMEetJzds5s8QdLTAu4EBLNzPJPUzWBbjH2uFiNSp2Akgyj38aC9NMbHyRbiXzTLnnk41jzHywKX",
  "key28": "52jQsdTmJZ865Nqvvdum15SLqKLCEd8muthgH7ApQX2Q8p67fnf5MazNB3W6UgqiMsdTC3ePsEmFxGYXhdnnYhqG",
  "key29": "3Nsr8ZECyhJcDifF5PjkKa68uixCqFqsv4WQ7WuLoQhBey2CLBLqjUGKzXKXHhTKApr3YSQt3VhAn2EDdYekQbK4",
  "key30": "3ZzHyE4eABrc5dSYTj5kbky5dSVZSWkgvUBcT7ARngjKTmzeAE9aqWv9WeHitC21JhGEFHDy6JJsjyDRGzchRM7F",
  "key31": "e7RBAB6txFo5XH3NdSteKaEkE1g3AruJUjUD7kmFNLADd9947wfVUJ5XEdUGcULnyMraRJCzS9diPvxKewovob3",
  "key32": "3gCTRixxqEHC7S9zhWK8MTVYQEo2z5gLnxXWJoU8pdC5dzsLdEZAh7eio5yeeKuTGqG6f6HNFymoaxYJDZNdq5dQ",
  "key33": "5PZZyNNufUHpPLCzx6HMJM3EqPaRDkLLfnZbDoxvWLYtHF7WxPWEMihCTboaUtUj7mS8HcxdqUokZKzBKcyagej9",
  "key34": "5EXXgeU13sNZhJXizPMpgr8rZj5qJa1TJNbwn74SZ3oxaCtt3K6sePe8AA4wSyoGvuVVVqMKENuVVzpcLcpZ5EYG",
  "key35": "3p66WdGoZ39FvceN3X8UmjppLgi3gGw1CAxpUWHS2n4quJ4GWCjQ2M8thhgDJZH3mdKGScqRmx8b3nGDtupEQXqf",
  "key36": "2L78Zh4tkLejYyMLwKnbDHno5gaiw2g6kq7A7DQbMiF6HoZHR9U76m1uSWqNmD736cgsm4xW15KBmemB2PuFoqvV",
  "key37": "5iaZFZcibMY1kbdfgQD4UbSYSUZZ83PfBwUFFJJZCC1w4P1kk5S7nHPJD941NA11PDJtWWGEB21yw5YNLsSJKsaJ",
  "key38": "3TnHqXSQBx3EQLRyp7nqJk2NfBPL9e3djhNnUcm3qWnyxRGzkjc4auAQCSK4H8rZ2EHLbTR9JrpLdergNaQQqEgD",
  "key39": "2tnWFUgG6e9TwSv4rvxwv4AR2bLDmZ8egvX7zRLF9ni2hinANnfxN5CAKBuiFBWuHjTW9nt1j3vSbmC58n6YJkci",
  "key40": "2k7C8A4bTda9hCXyPUCCgu3Q3p6btMMwn7We1r4sUYzzaEk81RAJfZpmXYcj2FQjeXnnkFfDtoFueRMpYABwpszW",
  "key41": "2poTFZ46vDGzCmNVptqoDL7zC4tvgeT1LZkz4F3NvQkYBHDFcguC1Pb5b7mHkhZisfraGmfPDqbWWjgVyzTXZA5U"
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
