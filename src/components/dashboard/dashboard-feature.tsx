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
    "3xdb8cP9yGR37CL6vDEVWNoo7nMPvU45VAzCAcAEU3PBLLAjhoRnUoUFfeuC7nRwWvS7a6113v4aJHsapp1y3ZcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZ7UNHfeWZ9n3bBghqNKFk5zZjDaL1P5oDyYCmkMRmCmH12Z6zBBNbbiGp1jY92N6rRt5GyHEj1dUCzABaPTSqi",
  "key1": "Movi8BVJ45UpURjPsbyZnqGP6etYU4WTE4sYY9Aj3nyZ3dA7xp1ScgnwveyNMD3bY9cEXHS3dxm1ePWygPTe3ff",
  "key2": "FZyQLiViPjZUrPQjNT55pajZ3RosesD4L8vFLxAgYuM21xxKe6772YxWBbY9fiBReVQHHeS1e9tLVNZgb15o873",
  "key3": "3roT92V5GSpgvdajde4s3MXpPxMcFZswFmw7ubZdJY9Lu2M6Fe1BZcCCt2nkCD2BFJ1jWJPTV45MeHomvkNtgd5f",
  "key4": "2VQtS7si1Hy3NmSxiLZrwQrtPhmMBW2Jq4ocwWdFKyiZb9vTUug5qWGDjBqvrEMjeM9boX5jYLKD5zzvF5RZ3zhQ",
  "key5": "2iEwq3tHeJ7iktUWNaJh9wQ28QkCATnmZ39qpN5TmXLXF4ae4fq8NepyZAFHfasowKx6C7MqtoUELT4rGZpCtJbM",
  "key6": "4jCozNYkiD6vkP9c5V1nNscnt4ycQ87zqMi1rfeWanyV25m8pGHwaXbfhobEhUN74DM4ChCFGgn1Py3x74qrJnp5",
  "key7": "cpGiRDRSWMzkgT3YJcpSWDtJqQfBjfA9v5Y6QpB57ESrxSgWZWLy9dGEUALoYcwAPb1gLBUj7c3Nvvp6uLwu4Ky",
  "key8": "5aKDKS84CNkoejg7E1QheLGqFWtXsHno6HApEZ854K2kwp9jgD7j1u2GE6bejqhhFbcRCew54KHBuJNythkrQR8Z",
  "key9": "D3NUnnZ2qVBmZ6aLXJYsyqjymBp83gz3yyv5nn7TSrqfFGKEZGLpaYAEQeL8HgcP4h1ZKtAS8UBVe8VXPziyv5P",
  "key10": "2ype7Ldy6GsPZ1xgSrC2fq79XoXMhDHxzkBzMiB31xocnNeMpjshQeKxEmBY6T3qXoHrRJ6pVtEQ4aCeK7NssthP",
  "key11": "5BUGVCn1z2h7BQLWM5ZaJQfoX5hWdcRrSf7kWvm1n8Mc2UFbgeFGXrWqGP6xXscEeDvqjbKKeMf689yHUiKECvAG",
  "key12": "3M1oGbwTtjPk5ewYdYMpquPibJg3PaMpaWvUtyDitwryNBRLTqWFZJJ1yxggUeak7JnpMpLQf8BCZeH2NE9fT773",
  "key13": "58C6Q2b9BTnzxBQnrJSj1NnQa5evzT8EMjNrqfL9KxNWopQNYbL9iMAzfo3SZQWB8QfGPTFSeAd5u2dv9C5iR3sV",
  "key14": "5G4eXYWsrqPeU5fsjvJLz5XvNxNz9vnwxj1VZNshZYeMY6JGhgCv5h9JDYcZcLki3Xhf76JowPrYTMBN29hKoENK",
  "key15": "FqsqeLddv4XYdUgcBnH5vhZt3SvPyyNDkBJ6T9efbJxdKzLbBMLa6gYXZYQNeSuLjJijE4ErAHjebihYQDsPoZs",
  "key16": "2WEW48M4DogChLGhydPnFziAyeCBLrimPMKaUNEj8QMAFrGsp3tdMDuqrJe7KP76Tk9t7u9zaqRkygbCc14p6iys",
  "key17": "3nM7uagYQien4uppsFNNpdS9aTT8csXxFhVjrsa67mtGq6sAoAgRRMQPYmPZ1eC8MuwCrkJeB9aVaxMeStQKGZu",
  "key18": "51xK4sn9VxtwJyMoJTpeThdruzBeQkd61aFha7NMDZLrWN5xdoRjnbqJ6UCDmomGqG7rtLbqsRBjfbFBFaCpaW2L",
  "key19": "4ZeB6BZYES4er3PDeP5tChTyHFEjDSEEd662z99s2o9PXdncWwH4GZbYVKzCx7v1q4hQ4HCT3dH4fkBh5nY5XDJV",
  "key20": "4zbjJTYfrYBCqskqtty9ZACLwvsysvc5j1UhUHAXEdg9zReap2GH8jQzEs17r9cnb7KPZ73pzAfYDGToQZogSLKN",
  "key21": "5LS7siQ7rWTK9qqBwTkgosTxokFoyFt8DyqCWfqrijFZMA35SUDGnSMN8PnWRfA48jzRWxzzRPpwPBKcZQR2FTos",
  "key22": "5hNJWGJuNDg4ejqW95WNBADrV139TeWcYVBYPcQwDTz4pAgvKvCreDgVCkw4w7tUznjJc1usy6S1tVbbjVKGrhaF",
  "key23": "4vKiwbtPjTea1JgwG12QDNy8PrxPrwXX7DbpTyQphPLPYGCPJK5WP4D9JtQnaW3Uj7BGfbYCE57stPTXBkAxXcTr",
  "key24": "51MZsJkEGS9hbAAx4zpRWL17gu5icqUUhVNY4RUDnyYKqwJA2uxVHT36betKGXCFYovCSHhUuVkGq7bWybss1Vqj",
  "key25": "3A1iZEgqLMaQ8ciimTMaxSiULyfSVk9kyySvRsgFpFoQowhDgrBk84PhbNw94yjJZnccRxLCebpY4pdsmN8P1KQy",
  "key26": "592QMDotXzKqeRFYNJLxNqJ6zNStDkzCzqqbWX26PFUfK1hCM7NpEoFnjZFs624LKL4Qfz18C9XqNoacThzJZ63E",
  "key27": "3mpQkxFm73aAoDq3FvnPySWAVxPskQm9uNuYhh9edrmsH2MzzwmTHrpi5JnwdbRf7zggUq1JrWCkF1RWj3WvPQkE",
  "key28": "38e4xiWyshcBMFPpehg9scPrFkCxGwoFj7KhMFTPRP8cRe5zPFtzhsVNp8GYo68ziHthkacnTjRQVHohWQBUz11Y",
  "key29": "2MCBCjWoXSknw3rMtdmnW1iWZgpHVheSrUZk9679ZwD2HS2JtgGhHncdwQvE3Th2W9mWXe35T2G8NoTR1nVq3BWi",
  "key30": "vhk8tuAKE1ZK7eHtWqcaRJLj4oTErRE3d8BKqArwHV32YNpmwsDk9Tdjvvb5ScPnSCyFQJ8Z6Kasstjb41XuTBk",
  "key31": "4ND9Y5xaCzCAXztk2F6sAEnJ6pjnvHTjdPSHwkxptchVxrnAdDABh7fGuhdvzea15DPSg62No5iuqqxgF7pcfuNZ",
  "key32": "4WEZBjVRoDbh9Z5rG1mMg52TfqRhy3bmRq1LcHrXvW7U1BeE16qUbnDDexekrqUtbRY677TLLU4eRdBT64taXKQM",
  "key33": "5LavYJr8tzAyAkNiP54W6V1FUX5M25iS39tizj7Jue1wamLiwBjMVsegG7vTgmehK9BhbqnojPtdQnCJRc8ds5Qp",
  "key34": "5wpbrW8uVwieAMmavFVi342oQFC1DGedMCxmVXZaXMf8rXnWagY9BKySNHLgQwZM7W3tiVb39T68T2iG383u7F2w",
  "key35": "5izbcjwQqh78PyJn8Qkhxmz5P22KL4HUzycprGVYkdP1dSXkeingUSLjst3a65dLAvmtNGeUVhRmGFwpdmWNu1t3",
  "key36": "4pR2Q6iWQ22HoyoC3oH7d8Fd3ptpsa7Ppz5hBws5hgqA22DKUr3WKehee3RMCwhKPEYKDuUzQQ4BypX7UFYKHA8G",
  "key37": "39wjXSPWgxHyC37NkatLiUHTGZeqSxp18rn72bnnk2kjsTfE3Wubx3d4TyDp7RJdjAQYc8xfXLmv7hiTPL3Yagce",
  "key38": "3rae5RpwQjCYpVrMRVnYT9cpApHXZdEnPQJP23FT3Att8rNWB9aR1A88sFwMvAgJY8Dg4e9KQTqEKYzFw5twNt2v",
  "key39": "2sP3A9ckoe54rrRouZmLR7mjTsuNSX4agZ4qZVZje86xBJuareVrXjgcLwmWhxR2BTrk9HBykmrNfJspfGHqp1SZ",
  "key40": "2ZEcnprWjMDGttPSDkUPhUKDdkerTstYGt1tYP5bdCNcVSwN7NK3e2XFfwANhtiY2XkVG61sfTknUZgybm4xn3CX"
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
