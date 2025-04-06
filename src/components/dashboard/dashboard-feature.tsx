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
    "2HdLEUSmuC5u1HjVXNzQ3wdUY3rMNQAdBMr1qhXzsJR8YxLhRbfV4udiyTfQ6bJqiop65a1p1ALyRc8gw3re6H7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9kwzPt36vDCgizEqSr6yKitFigzyDG9dgknaLfH8SdrPtF6UCmezhCngsxB8m67LbqmqomnMGLaiaq7HFXCU84",
  "key1": "2NHMCtTnjvvKwSLFZcu82yttFqXNUjoawdq13vZxD5ECVwny4F5vQpEWnWseELMsNYb43BRW6NPry1jcy25DLSde",
  "key2": "9KamVtr81wesw2myCnDT279U7YNyeS3My7ruy47EmM9FbNo9d5SfhCnTzAKp5rJCK1W4znFjnEKGvxrybNu8gdX",
  "key3": "43HceQaaj8mcBFtMVnXnuV3RFz9r4sUJEaHNjyZqDLdhpm951PRcm5f2m1vwmFGQn4GkXNBTQgHRJWTRVpRZrN4L",
  "key4": "9PkL5tQoWrtqJsqYyPuf8BgSXxd1srQuMirXk1ZVgwufuhZ4XnvM9H8TMdH2RP4CAegEFiDNfFE1VER5u2fWXFw",
  "key5": "26v1dNvxTpEfe6kQUuoX9rcrcfkjQH4tgKPdNqVs2X7mFYcu4M56P4yW2fQ9hEuZfAwv7Kn75ZWAuWTgyn8uyrcn",
  "key6": "4kXGw8ucdzanqwfVVuHpYfkikfR1hjatU7k8fanzsaDFVsHjqEswZNNEw9bVxYbtBXBdrVtSBr9dXyQDrXiLe5xz",
  "key7": "4tSyRfLx9xnEGwpPy75kbuhDE9WQE1UKf2Eqf7WrgkB1muVHfToSSrvmdJgVXZEb1S23EbGCET24dtyQsUnpBhMv",
  "key8": "2JRfb6KyV6cx1PFbgCF4hTpsX84Abe1QBJ743YZr518dyKyg2hwtNsN9NS6e2chvQqQ58wd4kRmdxzwWPeSoQ8v1",
  "key9": "4unngRBYrP5tag4HFsNRB2k2DEAbQwp15M4ZMZDdvYGhTPKn4L8cdUzLBiU6D6h29ZnFzKq6rwX6Jpu36UF8qAH8",
  "key10": "21c3uWD9Zj8dew7mXsL7CqyxBNcfVag5cykwshWGKRwMFTQ4hYBBS35hJ2RaYCndznMoJyU6awmPWzSkKP6Ycc99",
  "key11": "3gD7TRaVPsxj9ZhQio5AD2EWd1nxPLo5hHdJBa79BikxFg63GS8qhs37C3jy5ELLV9Ka47iNDnoyvTsBkuW5MAmd",
  "key12": "5PmRk24vMPeiH9feKE4ui8YDqUkhk2V9j1ToZKPs2K9THKbYdDe7xEGwCuGCtDf1yqV477t8wkz9Zdnf4JxULzrL",
  "key13": "2Yss21Dku3d93zRYX64JmnfCifjWpjkm7HYmkGJAMwg4b8XjSnfmGgGaQQFzuCHLk8rdq1dZkdgUQVXXGk6aSM22",
  "key14": "5L6DTsbsoH6FqDAbpeYP9daiuapBr1ggxi5M1jiP9YnCYkgmihDvkBkHdygP5eUsfZzuCefySLzoNypDdvov6kw7",
  "key15": "5vjetRRvumG3cA76uG4xxQt3uYi7VLW3gT4VpNszcDFKYJwGv71yVZmqBErkbxmapo2euSCu4bpCqXX9h1QDGT2D",
  "key16": "2WxhJtr84uyV7nY6mqAjezyf1dsT1cGJJ2kDFG8BXG9azwDhaLCY9nYesvdofg49RMDe75mCEVehCMVnq8ZauwQ6",
  "key17": "3E69C6AATewwBsHhyAsnTqg3B8S8srWWPjuNatSDBMMFyqo7iJbLVenvNAVcKYveZoCdPsRx33fXh8eHYV45RfjQ",
  "key18": "51i74WBUUC4dDKRSEMZYRC2XVh4UMEqTiD8nxVSDTzDdYm1KYbqZ6JZS7z321jhr13znUgqQ4MiY1Xkt9LKd5ppp",
  "key19": "dXRMie6tSv18fgy8H47kXG7tLRPVB7FDYa83Lh111V7dV6naDyVaYFjLKkS2yfX77wWxvHrMJu5toQh2To1oCK7",
  "key20": "4BxtnhAKBX1E33KqTC5sYsCRMRVry7WdBe6UiTTcnspcuNkTmybq61aGhyGrNTvhtui5ycxQ4gS6my1LVcLiH7b8",
  "key21": "2SqP9hE2JnxBgbRxx3vYfwmiuxJ39sCb95aktAhBTpdEP3VKWWuax5r3WhKe4AEkTYZee5qT5cGEj8hMUQUTCK1A",
  "key22": "3Ywmttjf97mbVVkcQNf2voGv4AUK2Qr7ZMzA4nSioNTgyPEPjV9DWQDcbwPVyRDg7Ktb8uQjGNMWr8ZcPR5zbezu",
  "key23": "pBiwfWSEQG4FtUYNaiP9SRi3DeHaMYrS1D8ZJTgtxRoBuedAyKsoUVKuyeiNDxPbweDzbuy4DqAp3HJuzxxoepX",
  "key24": "pmMpUWTJFEEPTB5pTcv6xQRBp4b9WfZMK11fGnBfZE9bgHyMXKiH4BQKbo5q2k1qTFFs9HtdHAa5T4KA8P8BGQo",
  "key25": "4eHWmyoMFT1qh5QGukp6YzN4o7fgbsifCey2GFSjNef5L28LHXGo98QnZyqsDMFza4A7Fid1nGRzmtaTGt6ijjo5",
  "key26": "Xb5m8PTdxTTTKxit9zBrwTsk8u2QbRZGuTA3aZjFAMRea513uzvLyr3bBc1wsjrK1itEpdrVj5iywaWPAzVZucs",
  "key27": "2yB3R999eYNxjWjMaF6zeAcYPV9CsjPgU9aWBqZm6LCW511ktsStum7U5pAwpPgVZapgpf6VhQaq4LfAtL9fdyjp",
  "key28": "2e1u5uk3R27fghwf4jFM2sCjeK5vy5pdj8JJnQGx997stgKa7NmXoGuLHn7Sxqh5BKqfsD97XyMF1E9614wPpA6J",
  "key29": "2rxC3exbKbPkzDpSUeX2pYDbYtWrAijcTjKDfVMhjpB2YeW9DZfNnZ8RCGxSduPwNrzE7uGSzNStWMF6CvvxHQBD",
  "key30": "61otH1wDBqEL4NpCqJB18tKgdTC6rfuFwND3XVvz63Wk5acoZg5nKAarDLWu4DbJmBD4n4ix4EjTR1FDugW59FCA",
  "key31": "254pjYG1oHjoa1fn4hCW3y9Nt8w5MbNXt2zqBXsAnkbcsG1G6z9BcTb3qNptgTMZnBkyhhS5ToANzjzKdYqTZyfd",
  "key32": "37XXCnHfqyf2HdZNDswRXf5vinD3xUT1TTfcWhHoha9ajatUnXg2n2jqTP763mgFKWr5zpseCjwwwgcCu7Xp7qiJ"
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
