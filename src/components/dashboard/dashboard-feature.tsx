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
    "5oQX1TpSX8AsdLW5XDgfSb9gpKGV2xdcFDszYGmCezZsq3LMqvqcDTtfmxV9uHuxUtmkhqY7B6pPi86cVb64g5FA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2evhCNX1m1AUgaQsmsBeHXCYdRmWWPQV1jjA9udYF92f6B2mLabABZf4k4ohySLd7FDtG9iX5dNrW3x1DDW1JH63",
  "key1": "36UYGnS7jW4rbKzbUZ31VMxFh3RhMCvRGqq88Hyawf3pFUU6GFW9rgaFaVHRrYaAtBBauXHDsdf5J9zVHCB4duoT",
  "key2": "5f3cqCa5oWeHKkpj7t2xqo5sGAwvxDvGgG4h4PgEq8xqHkaEN5Kfp8AVE4ZQ2MNnyb5dBdWoi6Qr9kZnaR7mwofA",
  "key3": "4ig1kigVDwK2ZrGp2n5MRvJ5a2ZqUcCe3Adi1YNmpVcqyjST8Mcr1nNqYeYzVuhems3HjzDz4H9c6e9q96E5H4xA",
  "key4": "qCziGVRYfwGMA2JgmdiUqZSCgHfVvPVcytX7qNcQhhpdxGWo6LwXs4kH6sSXfRvacotd39cxhTTi54Mt4B2oYBT",
  "key5": "3X2bUMYgDieprcvvXT3TmmpxGHesJgFHhbHtpLYkFpeCxjm1qbrVVToPECQ3AjZNjoEPUwhM92w84VGThMxiPV3h",
  "key6": "3ZbGoLos1ZjepZjna1d27jMZYATT87cFpRyMhxt2mw23Y2UHX34WmSPfquWdA2BupEKk4vWSckeZx9KirXsmPYsS",
  "key7": "2gMhjeZKG64AF3avmL5pBhVJmhj1RUmfXwRHEGGNUL2kXQ4uSDZW7bJMEfDrB9zsTSfj9FdNEbwoP8TBdyydWLwQ",
  "key8": "ndghT45R6zeUgoHvFaa1vEbs3nk1uLoT18dr7GpiCYBB55eende8hfKEVPQ1PirxGfgBtS4m4wdtRHPDj4j7vdq",
  "key9": "35MFaKWb8NZBkqbXtBLYRTZtVpem6Yn9DoDZYXspY45BnEQ7sTgo7u9zq7t5iyTWyLKM3eY5EkLvcjQ7NBBgKGHr",
  "key10": "26zRzyyKFwFxpp9M6pJAnbLFth6G8NQauqncFRxjAPmRtP1kHWCcjyjtEN3YDqpBAM2aN4QzLbNtysjrFRfntDRX",
  "key11": "5JvRLZdbaZ5NgWWrMeca9E1REmQpyWmP17pMwGgyuTrNSsqbyuUMiRi5XKdauERBN15M6mZeTZ9gbngkbVjSDNpg",
  "key12": "2SPbZfpjWEGWeS4eowGTc1m6v2FURhNQm8cWG3MKT8XNjayFYdAVNifmWULytFF4Vf9AEKNvg12N2Mps5xJkVEBK",
  "key13": "3dBTi96mF7u7MbmB9PxfPd1KApV88ChHhewpTwphqA9E7DWxhCbmAftiWiupx6Mvynt1T4dgu4bcmqxDSXws6xrf",
  "key14": "2aJGa9m3URD3cH6Z9etQhUTvWGYAqPRs8ZujtNhKpvKKD1WRWfFF4mY8BCjjWYsKuiF6zZ1ViJS1CvTovZXHBVBS",
  "key15": "3uU6d8P6ppUP5a55DLqzYmv3zmNzKByVFX7C27tGQ1u2bSzPPW4CSVooo5GSTZTT6qudK6w3Eqvfzh7ZwQQy5Mue",
  "key16": "28pNCs47x17F1AmaVP8nE1YSeLCncSFuYGH5CRXSvB8THpc6eVnTKwNgsR3oVNHsXs5VtXA5ZKL1D7zfwQvb6217",
  "key17": "3XwTkw4Q8qyTLEiR6G86sgcYGYg62uuR9xZ8XjRHNet1e1BZWTeyv2pyU1Yo7hd3d5cw46Q6XDLTJiWVEBKXDPJ8",
  "key18": "3Qin5QjdZ4V2zZDbgNdjQGvTR4s1oVmAzoxv9yoT5caz68wSk1WZcMYZ6Ps7GkcyFv3xwytcdyrV1kNVWSpM55Fb",
  "key19": "FXd1PabchAX5scfqHz9gfimTw7KFEpoWKrGqAv8zkCEHukbMkFBqRs9BswUTjCjnHokiayyY1vnqfSHjjbLwdoL",
  "key20": "3fcbsjYRzotePHMzNq7yy3A6o54VbGEPCYArEFmuc372Uok2P85DNtUeuNVYJyHkzAL8whGvSWRa5csQpV7FcvAf",
  "key21": "3Ksw4gbR9hZY1bbHJv6oyu5mL311LBjxrmpBjLzntDNhPRZFRLXGN67HJHMePAi3hfkBr5CMer6rRuP5SSjvyYsC",
  "key22": "4oUJwDExE3QT1FDJmLzrhjzpxajRRqPYuhYq9Kkb9E4HCucXaBtCk6gJifhncnWARGBW6h7WepQjaargFNWS6xYp",
  "key23": "5YMPehR2NQJLD9bgY4PByXtYY11J8etpqjcqAGARgnt5iZA7gEJT816m7RrkYQvT9aJJX1CNXZgjSN3bgYse3JvN",
  "key24": "3gtx2Da45qfAHpi4z1o9HQioqM1eZC5Daq1y9AmHgytRBv85SJJzG7hayZbBVppV4UD1FVGDWvTNR168FmwDneT8",
  "key25": "3FFnCfGmnzCp9DHpDotGtxwWfnKQYszKH1KByDUPR96H2Ut48Yq26DfPfammMjPPBxuLE2y4n4zAtyhMpwtK7qKx",
  "key26": "2e5BHvHRtonLU6u3pU8XX15AyMaN7T5Vm2yvubVpvyZ9aaE8JEDLYiMJM45SYxtBpvyJx62rMWY829RD657rPMKy",
  "key27": "wCe1vC7fiLeZFk9Q3nanV2r9nnUnEf8QUuupLNmPZaPYGB9Q9GCEgXVbKYNkS7hFsbF83Ffqxh8VfdS2ojvfwup",
  "key28": "5BrZUc7oufAvVpSTujSqBQmSHkr9QrSJ5SsSqsBZJG7rv6VWNDyQxt4wSQwUJQnUAwoexVkT5bbosrQbcf6jWY87",
  "key29": "5Vx5Z551HFZiV1yiXBpeZTJVnSFwQU3xuwAxAM2V7GZUAw1FmnVZw2XrnrnZWX1HsSZxfsnKS7591bwYSk8jhhPa",
  "key30": "bJcsfrv24hjqar4ar7Pn8p3dhVKkYjJANhX4oCh73QEwbkX7fEhS8bfYmeJm5rUCU5UgzxrT9XMpwHZhzyEUwHh",
  "key31": "3bRBYLHfKLzDPykfxmRGr4cKQ2kHKmPy5peGvsVjjjpyDBtqwn1GaDLmDKGcb55shdjzN1RJpzeDaRjCCDHLUC1V",
  "key32": "3nZrkeegqNhoSVW5KZwwr4yvSQcYyt31hB1TycpUmyJfxqSthMr5gMskEk1k5zbdE7gG7Y5b7nG2QBu6cwGWrqqE",
  "key33": "5PaAX4B34uToX8sRdcCcTr11LpcVZPqTsHtnzaBhZwwTY8NTdjtwjAwmqJdNLhDcsbvdLe7AobuP4nWotZDtSXb2"
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
