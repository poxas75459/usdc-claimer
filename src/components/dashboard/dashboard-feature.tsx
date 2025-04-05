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
    "28Ex5nbCqCXmCKdpTmD6v5PznZGDGwuPpLfaR2N3BJ8ef8nniWoczCkwX5R2ZUnEciMHZ6joDycPoNHnyzJoiSKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a44GDAv2bEcE3orNYTz8zQ6z65X6Pa2GVFsujDMiToCFUEH1DGB8GzNjkAYH7yHwXncshV9oahGexoGRzKqjnoj",
  "key1": "59Qaz3fuqtrGeUJsoFHmCeAdzYhok3bUY535GLszHSNmtpvZV9QdnsLr6TWaYBmdrRfTKuK1AhPDWrGV1nGKvX8W",
  "key2": "3QvU1qRkxnpF8ApGos9KCrnLvr5nLhxdwBrq2fRuj93nGgrF4YmSsXgP4V63VKdxxo4vzNqCv41U4REC8MwmJTCe",
  "key3": "3CUZDe18JQtPtFh3CSsxgj9bS5bjtFFh8134VHUneaeAzhXeXAq8xBQfzYT4MrepjpXXJAmS3gKgK4wWEJAfXDgf",
  "key4": "2xCQBojjiQJbhJAiMr5KqBb8xE2KVnKqDFw3fUu6Qworyv972e5x92jGatYx8i5qAXoSC5ioZRB4V78F5mMZ5Sif",
  "key5": "5t8M8ukpSnp62rFG4Qau8wuRuv5HBaigPuZ4KpjFN4MA98w9R5QPpSGQE8EwZzKAKjXhbgDGm828VvT2nuM9L8MK",
  "key6": "3bV2TcdiXw14hZxrLVT9ER3t1qVTtFy3hMD4ZZVuNUifLedmRkdZfhoDyTjBCo9thM3wzRT5KKD7zQZk6w1DZ1KU",
  "key7": "2D1UUfAEwMqi8xUZP6rw3it8Z2RLDGq36sCaUUUQoHNePD81Z9goi4Vm1F96w41Udq6smD3ZgMwvQaq5hE5uwpaJ",
  "key8": "ndVW2VUHruGVSZHbHYxxEvRQyp9YFbuQoyEosSMYxwkJaQrkxZb9dTE6QC6A8DTCPnYHeqgEzrLpeQ1ahHeztBZ",
  "key9": "uEU8Z8YSegpWNU9vFsgepT3DswMMdruNZ8gg1cVveyKZstYPNd1UHJ8MwyrNexPmeVUG6zR9YSUZTdi5AfJz7Pe",
  "key10": "3TqZp5nz7anfF9LpYpQx7gYSxZ2shohxhuKmUzF622ZW436z5e3eHPynGynUsi9idSdpebGfQY2e6pyLBH5sNZDf",
  "key11": "4mpfEpQgSyv6KWfrZSrui3s8JS3KSguP2dbQCN5G4FimVTRhqHgSDmstvjaSvmvVGbHbq2FdzEfaz6fUwdaCEMYd",
  "key12": "3CUySkNx2T1k3xzR3HVV1CVidNzgqoTcwQvuuf3RgPiw7zx1LdAtim2uVKwez1daXrNe6FpE8hWqvzxAf68yfi42",
  "key13": "2GNcrEuVhBGFnYzApg5VuzqU9TSc2su7rGg43fe5hXzfURAaWd49RXFbmcJ1yo6gSwdX2qtPSBnuk8Mpd3qwE8fU",
  "key14": "22ePtFfuuCkb7DP4Jwj4crdjnUoTy3NMGQcMFoyYhwbbVByw9JvpvG1xP83mQDj1W9vDLdksSCH3ppRyZZRwjoiY",
  "key15": "56EknX3vDarCvW7WHGcRmWQP3A5uZZfcNLNGfcxM8B1PMYdRDA836UKbM4Fd3BP8bNsk8g9mdqS83txrFpBoxehC",
  "key16": "58MMRU5MA7s86nUyn2dXrp2xHH7JgPdL8nNrXpQbuRUz1LiKYccBqR5ss4BwvCsN296T1W4QggPW4wp76RQBKUKF",
  "key17": "4YxAnvujGWjE8GpXSfuatP9i7s4FJeV94JzLaKHkd7QcD2PzDhYsTakc65y7XBRoGg7gJBpx7DEEKS56fuz1fF4W",
  "key18": "3PgPAneJmz3JJGHcBRq3GSVTHpmHtuvCoC6th7MugkJK7yeArg3bkgDP5qJqabTCsRQqdVvErqXZDpr8vnn5UBeW",
  "key19": "42JHvx6MRK8wesNDBr2vmkYdwrNSc1mSrYWTLkVcEXhJfApxifystiGFLovvsycuP8A1qopKW21p8GUaXFA8L7az",
  "key20": "4qAiYUtRsuQJTrSN6rKLR48jh4Lauie9Ap8eQsCBNWKs34AkFc4bhu9GvbVH233mrVQL9yVGokGLe9ZdE6iY9t71",
  "key21": "5ox2McP5VyVv6ah8SH6rCzePU7ntVxrpxSvjSeX82WTUXtk8QgUbSXxaQtT9we6F3qAUHepSS1EPKnUaxeybMXBW",
  "key22": "2wHvgKuWyqFUpnZws4aPXZnTJvpNA5nFg3MgE6RqS2nyr8PgjoPikxxjRgfS9XvmWfqCJD8pq7UwRTTHBfP8yL1f",
  "key23": "2gW4xrNzkE3k51upT1QTYM5hkyALvPTAk34JBT92PZNr1eumgunTymNL7s8sDoYQUk6e9QUVnuA13a97W3ttZSoT",
  "key24": "5J88qpJL9Bf5SCnKUCNhgLHnxLa1wFsdhQSHqwbQLziW5CBuhEcsh6KMex8CrbahZ9W99N8DhPnqJ3nkDQuMYZXb",
  "key25": "55DPbeei8CwToCfwAdEWVPfc7H6S5yTbevzABe3Yvi9kBfG8DEPXEUHK6bdEPNQ2P1XwTJaXLUhSVw3DDiBnff45",
  "key26": "5pXixyNZbRkZZForqnSAppW7ePRx61Kyu6QGanbmx1CFs9KP9nzsV4poBKxVjFsj5a1cH1iPfoHwho859UwocuUa",
  "key27": "eZNS7AarQBSXBDnmTmuZWM1LAsMv8W3VQP7rKuwRmNv8HXdypZQdew2BsksfhnGv7SHuqbF8iPHJfvm1qPHRtmb",
  "key28": "3Bt2yYDi6yeQ4fQ4rABQQzboQw1cSfQs6XMFBevpe2SDCX7PajBxjR2idvWxQqmfJm7UGU6ZXhYfFNkRbwRyHvgV",
  "key29": "38gYinp4mR9fh3BrncJUvMNPpeksUDCj1x2bppeMcDz7364hdEvGcASv8MCweHvg482C7QjiRkVpfKBkFJP1gY5Q",
  "key30": "4VnEK5Y8xk7ovxWWKkfepNgr2P3PCSFwceYV3dBVjeZnWnm7fzU5R3dGqux7UumEdkrSesacJwB7NrSERWKHTE9e",
  "key31": "W5FYifcAboBESpAjh3Jbzpk7UhnipTphWde6QmimjH9hEMiN4Frn8MKc54zY7QmXC3J58gwsbkEUhDD5Zoc2vhF",
  "key32": "5YENKrvcm8tmwCSbctQ9V1JVhjfWxVUw4u48avKsRxtBqcuYraoNW5abJqSM6Ho8yriJGVLGDiapKQ8oNMHRJs6B",
  "key33": "4w2HNQWxbwouNCAVyL8Mg9tj9HJufavXkF58HX4wNZmxZUd8s4bdUzdnmR1qKpRCcGRS889Bbht1E9HqJKNpuouV",
  "key34": "5LoG7HGGXR8e5yopW3RVU74MwbhGSLrCcTydpJxk6FTKhQDhpawQ1p11D3G94hnKNe92X2gNXdErvUj3tSCaybGY",
  "key35": "57GPcrJavVv5BrgNrbRmBhB3xRapdM2HMQhk7oKNagGo1tP4s6QM2P51Dz7yY2iTWYTr2K2hbRUbxiFMXSXA8nNU",
  "key36": "4Toa5y6622x3JSgRFCuUqLPNEsjJrnXA8zyQcVcL1qE88HKZGigSnN2LGrFeA8UQhGgAy8VAWbomPDrnJDSo28Y1",
  "key37": "43VA8mTuiDaAuuSJATgYUaV4u5LMKUwtz7pRrDASxVux8aqk1mH8QFWymKMHW7MGW9axPmHcxdtC6C2yANQ9TryG"
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
