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
    "5xJ1tZDjvFGRY7b9EVszMsTnJNHzEDDjUmieLf65XLCD1qcZzyh4g9wexMUxcJTPZKX4n6RurdUxNSkJrcQYhpDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HeVsjj1r4RgGKSycZZjoA4rUcMtdcMaHjm8qoo2YVChWmssGNbYxVCG5t6ZzjMbW45bp13szAGYZzXxLULaBb6S",
  "key1": "4QrCpptUqmCfoFVSEYuAUKK6PpjQT8ZNYrC4yt7w1nztMhbGfDzCWP5VtkB832o8EP4TYr6Xa5YhiPQsLmRLSkuB",
  "key2": "5u6tS21QS9ueZhe9erb14ddJWvQYjdMDESbV1yzkN2hBJgVB4Yp2nkeHeFgQq67n6tuYUGbdYZuJnqdzJK3e5qWa",
  "key3": "51ecAiHrzAna6ygFMjsU9D7w9PWUXhgB1FbJTbe15QBFMgNoG6GgnQJs4wHkf8Pu8cqmutYM6sWvKdVnCD3CW4Po",
  "key4": "4TJXznNXWkRrD29SHcQggtkV9amnfkjPEWb74NFQWnCS6BvSYS5eTSoWd3ymzJtkaX7qAC1ooqxRd6hZHUq5EPbQ",
  "key5": "eq55CarYSuXtF1mUTNYt2Ko89Reb3eqX3XQeeRpow8dHFsqBTXkmuNEaGtRnGsLNvVzyB81M5qs9RsdLpKMwUyA",
  "key6": "3PubGP3TK2USTyUdRUHKjvueMYRP2oDt5RSuQvXsNhEy7zCRbVpdKZhx8izLf8y4YqWrUMfGPVsud6nj538MsnFa",
  "key7": "45DoKcpzVEbrrquvAqYmi9kQMp6LnTKhbDMppyMZGbvqRGz5ZjgYGVQ7wdPpqe7A9vHQGnbLgjr5mHyb67MRU7nA",
  "key8": "46XEYE2dZoCoxZhTwGxyQubC4Cz34qvSLSf817ZUABXxFNUAFBvsoV56iw71oTfbpuPd9bH71iDP6ApGNPgeVHU5",
  "key9": "mmHF2vYH7FZ1K2FZNjcjiwYuw74KFHBtY41MYB4pBnbJypGKuCX5upe1jgu29VT1rpQKwUKbwQg247ULXHaVVP8",
  "key10": "5MeFFtNrzbiDBFp2DPKPgoCYqz7W3HekAoV2J2j1J7MTK1GaQ9r4eSTXRNQ4ZReipiw7LES2XVWuFfWyQNkqzA54",
  "key11": "5xaoFKsGLy7swpkHtiSHtGo38A4S29RrBqGApzo5H3JfgkmgbYmj8e1qGukUwNVwVCWw7CYjSbiLds8mXs9CioaB",
  "key12": "mHjr9uqm2ConthH8Szn5TSqAEJj7W4cFadJU9LDoXCCg79j9QNcGR8pei9HZftPygbKJ986wh2gaFopwzU64Gbz",
  "key13": "4jTXyv6U9cE9YXEscFZh8unhAZ7iyJdcbn4KiqKTt7264FT2cShGos7MfMt13LKHWJmCL3J2QBVhrPgAVQQnQtXV",
  "key14": "3mQLkcSy3n1Q24iqeCkpRbHUemKhFtj96sn4qZKKRuUEiwwdwfX2QxNQoNDzAZxoZwAowmwoiFWeCUKToUAf62e1",
  "key15": "pmVKrzMDJoSnXrmwRZQBzfB5XmntsFTZNJiEemtNUkVJ47pNNgMFjGTpGjmvmsik4T66Sui57i8JRQyPf3erDzd",
  "key16": "j4rvAaGqQdb48MWTGqxV1EvppDXwaHrnenu95nNEN8NzCugH6QxeTcAg6hfXXgVw2V1Xe2F3FumDosr431LxQzu",
  "key17": "36dFZSnuDH5ykdYMC4UqDooKdM6BkuCHDFbzndRgfh7gDVfpG3E84GxppBEETvQkQ93n7TcGax67GRtWGtoUKfGq",
  "key18": "uJHcWX3dNby7477DNqkvrwFgg2vC92cpR1S6fego3GVs9n9zkgVGiBeyioazeHJuvaFiPSV7hv6D7zgnGZsTYmX",
  "key19": "4d4E5CXwzJgfCZj6usoUT9rPnWgrPRzQ6dMNuoJG8CT97yc85Gz7TotbqQ19ExGEpY2TxchArnGdbWvRKSQrZJTf",
  "key20": "36je1fcpCU39pYnKqWeA5tCGr1gSzjYRha6VkmPtsZc6V3yY1wpaBeB7Ri8XCDjyvovKtq3vmswmoBBrmxjoKyjT",
  "key21": "61k5GXMPUfMdCiVD9S3XWXjbKTmvbKZGXGBp8ckHeFwgetmVzJrhdhoRjdR2z8xpcxnWjHGXR63mCvqZnYpmVhYu",
  "key22": "4jgRpLS7r2PJho3Qc5WxL9YLLv2yQJbc5ZWALDSXLeFfE4Tgi66DxYAYpbWn419pcPEqKk6wqw33rB4Zwpb5Yeum",
  "key23": "3dC7Fr3LEPFLDM3cHRPsQYP7E3B2fYBtE7xZ76xL95bHuhu55NkRXmxT2DxjG7hhZNEBzsuzV3fhyBRDfrKQRvSx",
  "key24": "2SzYStUMD2XvFaDFWDcD2jm9rTgSUF4CPtxoQi3BQWqnq7uyjcCcnN7tpGwAKVXqgMz5QMLPPivvP8SEbakpLfsx",
  "key25": "3rzPMLvXLpjEy7kZ5F8SMiTDrMXiPmYJtA4NXwnxoWDQi4Qf3eivoueJLZP2sW8BYiscJAXj97bCKofBGhbNPgFc",
  "key26": "2ubp3tmMoZEv6Fq35fxsuoaV4w7ywQBBmDgZHN8rybUDvca6Pt1xKCUW1Luz9BRWEj7hWoyAMteeGUmwzbC2fMVh",
  "key27": "26g33iPvkHW3A2FjPCjm5Eiu4gH7yNP5JS9toETLyEkKrhiDyHK5nz9zYS2LiDX9LqDh1uPrfZXzigxm6sfuJ8E6",
  "key28": "4c1yPAn5M26ErGxM4QMoihS4ueXv3CL34NbdeY8ccEASwsgWbxS9gR2hwguqVmoJFqeMjpZMg7fbxP2FJZfNtdSg",
  "key29": "42BoXJfgpeW41nNwvdyBRyhSMsa1hoYWh4GoTWaxGdAmJGXcU4S4LgNHJu9FPxmJVqC7gxiD33ywQJJsE13btyJm",
  "key30": "5fAV5AdijVeNcP8ufoG9wKj76ChgCAT4wZrcNWpHYDkwBp51b4mQLsUTwVApFjvpbNd6CoUKKZrdbhAabNw8yipM",
  "key31": "2jqFLxVyKwpuTiUuTvnenHKjztQ6mrp1rEEfWEPzrzKjpHMuxu1SxekeUhoRYcwjGnneD378HuyFd7GmdJrJVYhZ",
  "key32": "2qyZSA81zG5wT7cuSrMwWbJqmy3p828AABCMe4eEZKJavwKwqW3GBATAbVa91ov8nr3TJtAe1gy7n9jss1Pz3usz"
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
