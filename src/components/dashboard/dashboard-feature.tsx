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
    "4XRCtc6stmGuCRgb8gi5uvtE7TGNaskZfUzkrUXA5MX4isP9zgGFLUkwXV14rAnDH1Eq4srKSdSdLT7GjmB9XCut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zx2xkDNt9rK82dKs9cpAXz2udgi1MubsnaTstqHvyjUQSQfrK4jn1hX1yqJKFZGvTUxVZj8iteuVW7m1bgZzvPm",
  "key1": "63PptsZvPzKbY2RtoG9BUSjqaLGHR5anhJ96UewJcXr748TQ6QcaTzQQkiCuD8aXTGyDTK2oUQJi6jyVnxAW3vsN",
  "key2": "3rrWj69qZMiNN6XGGP3gqmHpunK8uaruve8kPrAnK89xN9oU9scYHp2pZvcbV9ieqKcFhWwBPP5ftCV1WhsogJjd",
  "key3": "3P3qYXFd795t7riDZhUcLEHdBcQD4zmvdWXvGL5ZuUZVDFeUgJFCfoA5FyEZrP9Z6W1FpJBnbQZ917jhfovwnW9f",
  "key4": "5VaQ7HprRxfYLLiZqKhVV3XTzoPA9xBTNacEZbyCMSzg3eUXMJLeYHQ5GMMEL1CuvVoFPZKo9Capfm7Gy9r2jT7E",
  "key5": "5AR778K1v5cZF4tePEQRUtepNarYSzFdqHECwucQtV2dRtLBxYzVWDGGfcwCZMJD288LDskTMHb9YSb26x61utHG",
  "key6": "2AwLuYffXRHEnwKRiSJw1ySQ26QH5ZZtA3oh6uFTX52sCQRUoVyqd1hefpUdMkmBjbaN1pYBuCQrtPmhXK6pgqGD",
  "key7": "iYrqgbx2cERQJSXRofeYU3cmTQ5UwoCiSqzwD1T9CBetcDTsgZVvvxTBNFCpiMf3Cs2GdcTedqJS1fHgnMY69Cp",
  "key8": "rGJ1MsKJRsbg53Cxaa6xo74VARwwvH123Y65Qwv3ufpZDhn5VdgpVJQoRpWvJBQ6ysgzsrPzx49R7AY9ge1rcYJ",
  "key9": "5nPKR14JEy8kejGZfMsZ3hBM4u17foP6WcUvwr3fChSp117rHQtw8yK7aLCnwDdnAGhQKp9W5enxev1hYcB1YSuz",
  "key10": "38Y4gwFrSTmi6TTq4XhzmcomCzMmrDVRYmUSBqQ8JKMhWCuPccMrx2rsNanyfxnVcGwqPCYLdpvYDGrXeMcPRFLK",
  "key11": "2T67VJha9nYr9hsBPDxNnk5KsWiJago7gLa92x7Bozkd6YV4W5H8BLxB13XCzxdpojLa1466YL1qMBVUSjZ7a8RY",
  "key12": "249JGYNx1pn6E67GeeuJDFdubHa52XzXxGmo7zpyGHtLta9uyGPqBsa8tjmAQky7e7xumVQcJiWJPJXawkmhvXZf",
  "key13": "wcFiXKjb7XgFzdPRQK3FYnms28d6rTcPkNxxqFPwicsA9jRgCTKY7xs1tE1LkAbvKBWHuykuQnfyYRAksLKnGKm",
  "key14": "2YBRvkV4HEwoh7yJJ5nNdSSdEzQRA43B9W7B5AJjRWD7bcP7pNeo7hcfW8jNTrQro6wyXcGUt9zwwKzs4KFtqtC3",
  "key15": "3rrNt6auABz6Ks9ekRRCPLRwQD8ucZgv87pj9F8q63RfktYkSvsrSgr3ynxRE1nsjRuHwCZxEui4sgFjfhDrMSYP",
  "key16": "4g6wP1EjAuPA5zYo4YW1Q7CUGUiBg9UUujyTEzzZG7zB3pr89i8KeANgNUBLhJzemWrSTEqCBTDtUH8dsGLoqsoa",
  "key17": "3hTnRxuzu8j2vTQrPjY1BZ9h9cRoyv9M8ZpwGEXdq3Zh3p2Y1VaF9SpSQ4mkmttvqykwTc9xavw6TW8jZxB6c6es",
  "key18": "4rxnGcYwaUtHpzQc8W4tcXTDELe5uYmBzpof53rreq9j5t2qCNyWUKYjkjLn9Bi8PrmGjbkoioMTAgVgHnoo7Ubo",
  "key19": "5sGfjDS2afsTthDUcBAgwWtt8gPmxVJKFdoqE79d3BCr8vguErbU1zG5L8JjaMWa1fmZ2pv83Np3abXw3ZYvCXzt",
  "key20": "595Y964kDDX85yYTizAMipjkbLUXJ71ykhEBetij8wzVTdwPrBe1qycn1cuDzeokmueWs4HkVf6TaSFDWJQAygkV",
  "key21": "4dfQfGJscZg3KP1XQPvch8vFEwhZJ9GPfCixGRjyy246sQLeLuB5bWnqvQvNBxme8CGaFsFqevqpbbJyDXxy9kNf",
  "key22": "p3vvTcJyX8xTUNhXNwhmaUVXL6fWZozb7x3jtBxWRbiPz93op2kSwo3n7tQ87bGfkZ8hHt4KMyHr8TiU6PAU8Wb",
  "key23": "57RcBSpZE54gVbyLBHofxUV26F7Sc7HRQNNoHJVWJ3zewtmXJdS9qu3aowWhe7BXpCSrrtj9ZdjPBjQ7CV1q9Kso",
  "key24": "3pS7yUK3H8sQfFXpjgAnQbLUf1P4zSWiqBaR9wW7XkZxjnFzdW1nLdWiw4RUzBDXwjhkE2c4pkERg1zmtw2AkgQP",
  "key25": "3217Tg6e75Rg6pmjvxDisFVDVJjvxg3vGrxhsH5cezejaPVqK39ukjSHucpaRYq8zWKxSiUEeyvB42QU4YEDufUL",
  "key26": "5fqJGPxtZRSSzyVnsvR4iNbZhXaF4exGEvGR2RKNtayTijhuGLXevrVGZiNJJPbsw7Q2gDcHgcKXqFPDUNkqn6oY",
  "key27": "51mtVZWuDWLcfjfabveWxZLbRJ8iwdHaeUA5c1qwHKwKxLojDmbB6BzY5Nao1qyMj3ioz8xZygshHzTbypVZrARk",
  "key28": "2fHrRPskn1TYTSEMtvnL9sGkYcz8DGYsrCxXTxNXysdoTSqtQ4cZ8kBH9oA9rJCeQaQbrhz7Pj7y58gEdZajx9ME",
  "key29": "57g3PwaJoAh9LmmJE8nyPW3gXqB3i2XckcMsCQStrCfQZfbKifsxs5eMYAjESzfE8FCTZBXwavAcSdcWn2M7p4s9",
  "key30": "4iomTaWEQ41KyQjNaFJwK6wGKVh4b3XiJCo8rx4ZsnVUfxtqvNDeC41yzu3ErjQzMSVfHVTsTwiGVjQZ4FGpRqss",
  "key31": "2DgCUojybLnfurtZEtpjrT5joEpzUXwRDBpU75qC7MZJA8ajv9QCevuEPjJQbwn8NViMcPNYD8sChMRNrx8YkXBm",
  "key32": "36FP4MLhCMS12zKqkLppVHnbYjdogJeVHQDcuE8DVqPoHSYQstnrUfR5pYMBzLYD3WcaBfeLhKyeHY5s8iMticPy",
  "key33": "23Lze1yKCNpGEKgSkTBLyniyJtBAtHXuqmsH3QpogeZzy4Mv57Goi4HwWo4j4ZtpHSTVwLRshRhErB2Rc5uBPTYb",
  "key34": "5CyhdmD6AcRhiSVpGtA7UwM5EwhLwTKo3RPTpwADgsRAZoVPv1S6cZdDefrXPKQixGsBpaGeeRLC9hiaqEZcYa1q",
  "key35": "35NtQnWsHKWNSTpCSbmyDrRnMNKsx8dtXHroTc3C921y6bdu5XNKfQVdedyryLwuYvASAL6x3LE7k2JApzNct723",
  "key36": "2WnEKSFAggyb9kMW53YtsKj2ggPUvRprej6pvqoH37vvBzXXXdydAEWNVjGoHJqYWi4TEnTJ5dxuFA8PUMFz83PQ"
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
