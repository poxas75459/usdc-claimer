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
    "4w7WjQZiExJBJvEFh7WgPYs8Xj1YcQy9EzmJvKiFcypH5PZquyi2JLQCAuxJe66ehA1GcZZ92EPXo79k6DEamA7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kq63UuUC86iLmpENDNYze3QETk8EVp9QEHA7ncipnJDkmG9XcRv29PKobvSDDN81pE9Zb4J6AzA9QFHBzWBnfA6",
  "key1": "4rNGKmisWiyxhZNAa6HUUNJBbTsiWijX6TxZxPvndapZDxQ76tzprToRxsh3BEpzfDwHhZg1eGyWeQK6wnic4aAB",
  "key2": "vnbCvEHHzvKgNJf83TAEpoQWvFjkExjb8ErWxVhqRVjZnfLysQS3CYwbLrCi7Uiw8tjrVzKsTstQC2veuJUMkni",
  "key3": "4HdMf4BgX59zaio3mxDjfZvj9o35YqTMXadY43SdVVTtV2rV9ijHFh1zeTmdkygrKjQxuqRbJtnBMkayFcVEJvFD",
  "key4": "3s9CGfNQoMK59nBK3j4ta4Hf4NBLqq5ppZsuwZ1FUtbBvJ3XzbwiocAXCpfVyencCKsFp3n54UugoRAJRu7dCGRf",
  "key5": "5MavLx5sWSD2HpdgamWKmfUnh5FGQoxZj3ahnMdJwrW1FBMc6svJwgwgdAm6yBYUokT18H8AJr6ae5pLYGyWwsTM",
  "key6": "2XX62oG3uppnRK2LjSbpJa53A6KAoNJoTPwzmm7T11bEMxGQ1oqieUMXobkwfMeuiKnA5LVGkn31D7jN5Qp4PUjD",
  "key7": "27ML2PbcTbyZ1kAhmCfsNN13V8HhNoFbwkPD2cLGPNejv3THe7n7rrHsJxzjZyg9gZh8zwa5FUPLuj7GnYkmpMRp",
  "key8": "4HfPHpPTECreQRoijLX5DgmFrHPa3MtKEfv3Ah2ZVyTp8kUAWBeuXGGfBkpkSNZ1dBcT3mQKKSfiHPT72yvVpXTa",
  "key9": "5UaQNvsjnfWmsRw9DaEZJDsvzJ8HgyiDRJjAz7SKa734Kf1YUV2DE5ST2bui5o3HhuBnPwfaFHf1GZKKTPcVAkZV",
  "key10": "5h87tGFzRq8tTf7EBqxxtX2eDF4X4TGbLM7TvNaope9zrWxtm3DSxBcH4Rzosd2jqFnNhFLFQ6RdXpjEVErekz3Q",
  "key11": "4bZy9Fx6LtY2cNmvzpnkmEtX52pLK76dZSFbw6cWmjRY5iHTzuSDbAVi7sFCHEZb84TDNg6BU2dU5Xw4ARwVRtDd",
  "key12": "2EUWjeedu11utExeYpjRtccWn9CRYp5unRbtrGYDbL9rV2dRyYPrbD4Mvvgb9N2cQ7GuLKtJod7LzHh6xmk4nkyk",
  "key13": "43KvwK4skCBP1NFTCnsUQrv9Q8FZucC1jsbx468Wy16RLMLN5jhRjPp44b4VuVrtUmMhQJJKJo2dgFx9QZthKRLg",
  "key14": "4B7fd9FDaNSh5hfpDmqfV4izeXhAnYx6LesaszMPysomNt6cVeKHDafweUgwV3ADCS8NQ3AZkZmKpLpN9AaiMWxG",
  "key15": "4HEUqWE2fMiWUVX44Utn6uYHY4rbz5e7nS3B99Vhs8Wq3wJhbXMzj9EiFbHdZSsTTkRGVn7RPaL7rZ3t12ptfpYy",
  "key16": "2kjsZkrjqKJ9w85sbg8QCT3gx7tyC1aEwNyNKJnK2qfYf4AtcPewqzz7e5NxARtB28mzzPGwpWTkZQHL5c9zASWB",
  "key17": "5Yw685VvQkjdnQ1tnTgBZPdgJeq7Q9EBAecqZPSr2sKzT5DZPjQ2wuCdbR8oY3baLvdh3Ry3BpCYAcBevzMSnzGR",
  "key18": "3cF3ruTsh1GFdTY45tRpVWjbhF4p3WJLLjRBDoEsyXjJhzxscKZLZNJ8NcuNTURqTWNbC1seHgYDVwaqK4qZJg7B",
  "key19": "2RxZAW5cFYymSMSaMxmavEKnNWAUjHgNaKtzY7g5pRGwMYUWMJSPMs5T6fYpXvi3NGTQY43SHRyWzbibEAguhwy1",
  "key20": "2gW3R8ByHsvNx4i68oX6iyimNZzNKquNjxMtE4deLFGo4mTrFFj1eBphmpJcR1MoAM8ZWMFza35UXappWsu6ydU7",
  "key21": "39s3awKp3Wbu8YJc8aznM9Dx9m3n3qPj79cvPZvRq5tM1oMFQ8CKsPe78VEyHPzciSPNMUGHEewq66qnHCWeJ38N",
  "key22": "3wrFARgbLpuGGES6XUGxnT6uLk3bPB21ojLMFEXqvyG6e6FvauY9sb8oWrfnxegMqa5vnqSJqbjEK2eE99svn9MM",
  "key23": "2VyWTQ7sgN9MzPFb3bxr2HHxNY6U2sJU5cD68BXz6L6TU9yGs2N912u9R5BJApQfcGfNJzTQtLynAqGCG2aRTkHp",
  "key24": "297oCtstPkdr3C4uDkuhN53DZhPXd3LkPuYVEtMJSLicBpzsH6cqfJwzVCf26BmTBAvs7cGhJTmywHXCcGvESjNv",
  "key25": "66phaAx8hMHgEVMseV5jiHbWuHCb345TQSTHZteFgcwEkRffpdq4738UiAEkXobjGeqsZCdN5CVninagRfWXQrKq",
  "key26": "5uPQzPivaRRLAvYvgnq84pZ879YJHiQcHupKGuuydZ6oLP2nZKiMTRYD2uYctM94SP5of4WTh9VKBCBDyqTtNXgR",
  "key27": "5Ye1x3WtXgVSsbFGWrgnktXM48rtiZ4SB7s4eqwDHrcbPy1wfibhn29YjfVTXk8tpn313DN9697BhR3vQtxpymAZ",
  "key28": "5BuSMgaSwg55KnHCmCgJnmL8i8AFeuKyJua9medS2hTpSNDpRZ6hLFNgjknTFLLZHdNxo8sz4VWiS6vPmvCGX1jo",
  "key29": "5X8dURy6gNtt5gN9cq6KV49gGePq41NZidphBXKg2nougbX7qmuivtyMeFrBCYHXU5vEB9KqRphQ4hvW5Ewu64HM"
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
