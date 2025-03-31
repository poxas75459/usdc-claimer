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
    "5uwsxRcguMwfFCpMuGkrg1VRkgg4n3i4S49zGnc2MGp4RfdDzr1iuhCVfhVwj6u7BUgZiHrfDAWTtpbDW5LU6s3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2D7SCCjsKudLzWCcdTqkdSTHMQyLRSp1ZqhkEYLaAx1SsB3qinZzJGXBFEXffhTyBf64er8Uk8Sr1p2svdunrj",
  "key1": "2iRQsxcjnA3q1g2SF42t2wMKXSZ1y9FtXLrYTCSm7s6n88W4vsP1qD1NaYxe5iMiUpbmGrBFUNdE8akVSLFVe4Rr",
  "key2": "3oTw5144DYATgPA7B1Fd42tKU58KK8RToH9qzV7oqkhs7rvFsUVP6uRycvhVu1TzmFy7JjrsaSrJXy1yPTG1jERe",
  "key3": "5yimWeneCe8SBk5wbgX3YjtPr86H5P1LHsM2hN2gdvFmU2WVv97vbGVLHqFqdPATUkRpcvjqW2XaywcQfET7gZXS",
  "key4": "5qWSpTsyByf1n2QXYqDq7UpPnZcgbPcvn3oZxC9pFFN4snyt6ePR9m4mkeVVzHtQP5bDuESiqUiwxSHmoDARstHs",
  "key5": "4My3d87y8JwjvzAUANz28WiE1eD6qNxcaaQbfU8KtcYy5X5pxFwQWv9bGHGtYmch88u1mLwDgmjzHrk2oTrK7sCV",
  "key6": "4gGLsQKvUsFWxze5DGbYLkK9TogVv6qSKkwopbuexDQdWSEqqhFeEXUy7jnDrrU73c4XJUr8CTUCfzTSvdbsn1fs",
  "key7": "5edSJMvbfL15Z4Vw5Yy1hcpaTUfDiJmVWNq3XhGC5eewLQ2m5PZJPeRcGoev2SeMcJHKhaRTxDYPsudLSPgbbQC2",
  "key8": "5UXM6p6EQeeLkMyw8qQ2jnhMuFTFW5vv1y1ia3PejL12isToaW7nNRHsiFLML53Eq8gSohpCVkqhuKCWYg3Hac7M",
  "key9": "2rRH28NPJb7GheQ6gdCwQv9XNDNCABN7twCJ7ZWAFGuMGZjfwVDDFn7V13zQ2uon6vkQjiZjw1gnoBEXs3C56EHq",
  "key10": "U6eqSGCSxgWi47AvwYqhMFgDXTFoBbefLTnMTbgRGafFBgEW4xYYqRm7kbh6GBoe41LoiQMLK8Z9Qoxh7VAUZE8",
  "key11": "47c4LPmVnQdyApECwL5yGNjCETibLTgGQN9HhNi8p8vxVSWgh4ZPKhESe5x9wZCrQX4RAztqkAtjiz5JyymUFHa1",
  "key12": "3fbA1FJFooo6TuuEPiNFqeYXySgoXAwLFsfTiVnqZTjCLXsE7LG2Z7adhd975bhvnVvKE4qfMZ8ZZhRJ3zHxNJtd",
  "key13": "4tH9Vp5qWL4qUbQ7JHhB2pcxeD4BcopbyBUm76sXCnVSZ54gxJwz9ZhYGz7VikHTm1584LCorcKTnqyYqqevUajD",
  "key14": "2PMcFTjWTk6rnvfJX2Jo96ZdpmJcgcCXh82Fkc64mGWuMwfCRGvkCMAVF4QBJx5fN2NX4PmtDGMpqM9kBtkfuYQ8",
  "key15": "4QRsTv39yYiJwDQuqbuGKJxCsRSH9v4X52C7AedHwm84Wwzqo1RbSyeJYLMZ2mVXuvKn7RrAKUqgSJVfTXJXKXQM",
  "key16": "5peu9YQPbMBEge6BHHGCKvTk79bDT4JadmCdehjp2Acch12cZ6ZYFPwNyRQX5bWLJau36upxLeJd1RxFYxQWGoMB",
  "key17": "Gp6KDJNtfJ3yrs7wRwxMGwS9XSx78CTUvHEWU4eXe9UxuaTJfG1rhMAJfGUYLdPtPNvZ4ERkndkDoeAKi1J1Vd1",
  "key18": "3ij3oUpF2w7sfA98SkJmZqAaiACbtaHXh6da4iXFciTweCca1u8fAAJQtwDNqUAbC3c2CbJSutYdRLivrfdMFPg8",
  "key19": "wJgWZvPfsMiaPXvehyiP3sDt1pvJMdMLyUr51csZ4h8rTqQ8jqQ9ZeHfrt35KTYm5QT85DpWhsUdzmFeRM3744y",
  "key20": "WhP1G3pC2jhNbtAR6ZzTkDCWFhMTebjLpjhhnFN5svuNwFQnq492ntHPwxVmDqwsu4TNVVKU9AbG9gL9WzkC4TB",
  "key21": "fUaW6ZXDSj8fUNcVAauyeAu6G7KZgdT5zEBZuz38YTSDmBLCxCW2jg5sdpgn46Q8859Wau9HN7s7EqvqMEzme6X",
  "key22": "5gCv3Rh4sqvs2WwXZEREuLq6SzESjEHTFJNRDKtSrJCrE1F7s9YPrBs2UqwPg4z2z1sDEZKeqjhnTUMgGuMwS1f2",
  "key23": "3xunGLkoJC8uqNb6kawYwnPgVnKa5bBWUAFARXCQgD1Un3zYKU7GztSsMNMojXb29FPDjU3jZm5Udp4K9dio4nQK",
  "key24": "4vuPpJamcArKpSDz6kUKV79sbcGc4arRMjENq9vQnfcG6hAWzEAksyYGHFovWHiP3z4h6ApDmYx8swnvapLBiYGh",
  "key25": "dGUM1xDrcfugTe1FtRxfSU1MErAhCP8Q3xV5fiy5tKf8khY9mxYYLmKxYSJLvivB83hCgc4yaR9LEGZ8E8T8GD8",
  "key26": "5cD9N9cqmzb9FFwUoezcBcHm1jV24WWetBiQ9HjdnH1RQBWytGPpcmg6nmWrCWyVSXZCGQRp9B9DqUwYCyqXunZs",
  "key27": "6DUek66bYCyDEFnVUxzRoAcZMzQBD8KoLSZ8dzL6hasgBKA7qsbyQhvMEN2bYiDL3ndkMFTiZCDWEjM8iP17ayP",
  "key28": "2hxKh2nhp1PepTD6La1sCEYjnPwd2KTv6eBbPQNZ7uifjGaYbWruawaSzx3ukkhP8VQGmMUGrAGjmngsqGiHqnMN",
  "key29": "3mPrS8GwyvLkqmw7u5XxhHPxpzqUazN1Bp7e8mpazg5yaMk4dudUnMrKGC2kR17Pmk2zi49G5ecN22Ptdz2GDzXS",
  "key30": "zpnTgVhPv3X1LiSbbjFFPfq7XHVjAqw1eZ96kzBoMuEyRbG2quCEAgSy476C6LsHwVhW89sWfH42QPVhH5kFNGg",
  "key31": "3K19QYBQMWG5Hv4N5uNMMvDdAqASj16JdgMi8oF2s6Bpoj6Gzp4axeXKCHgYt9rT2m9z7hzcHqoM44zAzFJxJP82",
  "key32": "8RvE7DdwNLLfEr5aynmRN6H9LVdh4xEjWAYB5cYnX5gNhi9eAuCu9MLHwBSEwhAkH2UCwvGiMSLXArYvBGZYLmh",
  "key33": "3DiCf7De8bfvhNoaiLAbXLMkJEjxVRq1yjKVGXC7KwHW6A7FFFzbv3kDW3Ydo21Q4rfwwqt6RBosWwm7aUXsq3LX"
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
