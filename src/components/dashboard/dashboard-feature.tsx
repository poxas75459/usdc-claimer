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
    "5cjM9LbUiTyCqBPTMViB6UzahDHpzrfHDZahnPeSmjbf4c3Skj8C2rY4DFCW2GnjL8Hw5fyfzwsuuJhkP8ADtq9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wQasw4n6ZSDKiaBBohPSBNcMrasAaWM9AtGiYehSFx8VjP4mx2CyXGns8jw8uJrtt3KXjtrLW9QqJe93PTQnPcM",
  "key1": "5CSCVUZQcJRYMoeh31DJv476HFgiDf6w3MtDAKbj7gBLPrmAV6LMqPy8TVzg5xzbbqXmBBxbLsnKsnKWQz4rBsZo",
  "key2": "bqED2cNacVXxJoegPZsXYC8Wye7dxCifnK6zBVkkDnNNmTq1pcYsJDwkpprRch9So27guP6wAk7PX7kdjapJUr2",
  "key3": "3z67RKSHzowzKaH9UYfxucCdhADoYwYMGXjJHbmjX9pXGK2se6aMryF7wjkXFY922KcVdqga8eWWmtfePAquk4Xr",
  "key4": "4Fo1ys8ALitqbM9b3goToTSTQUmk2rgJz4zhEbdBpzSDVDX6u91irJ9uBkQ5qWvVZxYJFxrtif9ANMeR2zJcrC1e",
  "key5": "3pDG6h3PSubJ5R8CDPXxdaFUnn2RaRvnrriYJxSo1UZtnuSggD4B9DQ2vhZPFBt1UGjgP7wHvCv87yYSUCDXqQ5k",
  "key6": "3Wo47LJusx2cF83xJg9D8cWyB8uBfqmoQvVSTCDX3ksdEHDhJkKjXgdYgjLyQaQM8AXYL9yoy3YbFJPegwdYe5VR",
  "key7": "dQ1aNMaNuFqnWgYVnKBD5arGMQZ5VQzn17DjVDBZiC6m2yEFAXTDnhcxb6d7fF8crmu6xP2yfMUw3NDcCUzRWfZ",
  "key8": "2wPQzTZ1nN6U7czkDAEL1nVoGDHEpS9fnejYKgTecfBvGmc18uM9K9kFmd1c9EKkveUgQ1ogZhdZ6YVUMkwBu557",
  "key9": "4y9YQLPHCe7XSE2SS25FcJP1jJvittEZPmADSbUCScN1YVYQdYe3XosqVZVSw3d6gSRQbDFukhY2MfhRTnb48C5q",
  "key10": "aq2faWNpb8itLzvaFBM1vkjeAGok3jRdLrykaVuJDVprjBZesAQgyCiu5ki4LrpKWz1SUtubZAbe2jw5WgpxgL6",
  "key11": "btPdtTDLkBCgYx9dyRTUF4y4eWq7LjVkFVaKCyRW7bCB5Lppqw3EJvfnvpNVK5FDW88EEQwomYQChNVEzrkENG4",
  "key12": "5RCfssjyEYxSytMHGKzrL8z8R1AkVDcnCQM64SUbEBNdFbnxBAvmwifFjedvvJ8wvfonnFWP9snQhmLCDwSoq1Ss",
  "key13": "4y774dqDasg43ncqkUUbNZTYHakzWQDYxcDDNGK43VPPXekSk8AS45FxvUXHkJDPhXB6yXDZe9omwvEfGgJku4h7",
  "key14": "3bHusMji5DiQhJ3dFC4ojAEbcpKc4bBo1gpXqBGYJvfEkUbbJG81TjGrJv6WbLFLYRXe61YgMqofcxu6CFxyh3Ry",
  "key15": "3peoJ18TxhBgAEX77Q2uAqonN6brz9Fj3goxLrZ267f41FfSYVeD4U7eEpE6ECLv1cqTAZjNAgq9K6wWJk4Nm5PD",
  "key16": "3YFt61P1uqdZiwiTPYJY1QY8FLdYKHq7cU29FW8Tdwe4KfwZpzeM16JmH6hPWFcX5rSWeowGZuv9nft9UCJ3JWEG",
  "key17": "57LNz18AuZKFuwKcaCFKtZ88DZz7abWTo9wURinrwyN3eRCVKkDtMTMe8RXdfgBR2KxkUfTymsHzrXVT8dmKeV41",
  "key18": "2aeRS1c4k73i1bBL7x3Uum9PthyrYupM8NwHNtYBJvXdhbu8HdokYeQYbATsSqEHsviJXgAENxBPd9XodaPNHSWF",
  "key19": "fqsMj11eixaM2Y7y4PVgiDsR6qhrFRqCC3Jdo4vUR6GdAx2wwUsHRMq2RhWduaj45pBPveTUrrsGcnXyemZBDK7",
  "key20": "4orADBKwEpVvFvcaMTLPCeihwHjaZjsNGNdNEBSTBAVVjbXMq7JZtLUhdm1y7bpTWBQSxwaoyeLhbhWLroB1KfTm",
  "key21": "4wHuKmjSWd1CYHkJrcrwEBsUKjJ8ndF4pwVC5tG6rG74q2Pu7BbFh9oEZAP1RrQrEPCuByNW9naoeKPEyy4vdXYd",
  "key22": "pj5ycqHpcrCzzTb17adC2ZxPL89fvBZG8ttVcYtiBjR2kGzpxsExNbBQznLz5jZXoWFY8b8RSyH8kJFbqWkq82G",
  "key23": "4kj8fzJr17NKbwGzsEpFK4UqcqGTx1dTqU9YkcGHuJ2VnzV1yFVvsgAKCZ3Fon9YC8QbfJXbP1b7K3L7hdR2v4ma",
  "key24": "3Eb5prBpwVvtVbzqcZo9QJsP5UfS7gtyKJ3avTWqNcXQcVrv4XPBxRZvftdFnibvAyNBjsHYaLEaFnuoFggr8Wy9",
  "key25": "4ZVDdgC5UJGTcFuXN2kam8hZ198xLo6sh39onzNvrv9V1GBfevnsLHUes2k3jJ4JtU7LRgP4qAybTZm8XvG2o1wp",
  "key26": "twBdsusmh4yWQWpxu1GQppmtohk7BHhX16EaFeixvxd7vXzMFpfWyhxZxgUn5kUUfoEKygT4R1A3wa3sgfG5vUi",
  "key27": "4gYQmyBCqn1H3gybx7AkTePjTh9tyAGNvyXNR39iLnxJ7umzoXRZvGvDRzbxKJGUrM6xCJovBhc7c9ycf6QEeptZ",
  "key28": "5wVLdBXSi5pg5RAyg1neyQSfqPTReN9bdzgCKAkxXrCukYJ2VwGn4ZhfF5bL6Cst9iM98nFqVfDrDeo9pg4M6LKH",
  "key29": "29oV6vKoA1XED1y4PYTEja4vi57GR8ksqo2KK4yDtfskfY5STcC3knEiB8c3ztsi6aMn5XRWd8SqSrU1abYKxMQw"
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
