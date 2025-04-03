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
    "3qp52PEyFqWgY1aQ6MMCGX1kJB3nYYXBkjj4iwcVd3N1PPPhZ1VuS1xgfRGXbqbRDn77A22SgwTve2naTSgq6Sgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DeRTmb2WsVCthk8txszP9ia51ZsBGn5j5dACtNWBrabXMXGrAnmmQAGGv4RyFkvVYEm4s5CwseBbJcjMx8c7Na1",
  "key1": "4RrHvRkonFP74CZXxfJNYHTaxuh1duh7fkwqFMVjVKXrgkdRpMCyZPp1kpbDKqfc4pkoJfb2ZweFi6nKBxvjw83A",
  "key2": "4oFBbU8cW66yKK2EtYNr9nEfwTZG6Jaczq3gSYoCc1h9v4SK1ruVSi4Y4iz1zFm5ccDUHD8BBCBCGHkcHMhEYoxi",
  "key3": "5XNK7TrhWf58cErNE2nvr8ugjY2Hd3nApXRkxKws2mx6u2YrhVcWbATT4WskmMtJ4ioxvv2JLoXY1wQxuuevNoy1",
  "key4": "5ktRPrzdmjX6CCa2smUCmEvD8C3SUK5KDoXPtamHiN1NCSHYjR4bsZsa6UMv6S8fDQj8mjWpty7KVJyJ2drke9Sb",
  "key5": "5VEu3VEUbCu4Du3oVokft9e5GH375AYy3ohnQiRioLv4rUMv1DgSZeMSVkdA4jQENuozpwvnX1avUonZeLYqcqnR",
  "key6": "29tuA6RjXpdbdPRaM829Lj3LKWWeGEyrYnJ4A7ARzdNtx8pE8BSf6ftx5Ha8q8YaH8pJeKbGsPjpKZ3MFKLtWJnE",
  "key7": "3Az94vWu1ERZK2YxcJouyYu9oqChEJXeX3cNaWHn5cXLTh8nXww4AJhnSgDsmDZLHPYUBBSrvMKBTFeKTn9Enm2D",
  "key8": "5EvgTfHDySiJp75JwNeDdy7YgieBzUHr9PLGCPU8UDkLQdtr6qbD8Yq7GWsuLhojfiNXNJz3rwyBk44wDsrC4BGP",
  "key9": "4dKWu4dXzqdzmSYezCxe8sH1FkFwsbhQDjPMmcew2tqUg5STQctRJeiWERidoUGw1UqS2PghDreGf4DMJZ5kDPqd",
  "key10": "6oHtvpJukb9vq2maYpHZyUm3Hn6UzWvQW8vTkv6Uaz9cvAJdB5LkyKTMsoLLeanrnKWRskENKEeCXuykHLjjGgP",
  "key11": "3AJiS6afArpaAzs7o3iKpV5tphU1SWkjtsQTsQD1ewYCvWShQCcPh74v7j4GVfHdmkH6en2cMiSpY8ohFDFtt8FR",
  "key12": "3oBFYxXqdmt3S4x61bi6eysnknRRxVuY2nLjCEh85BcESbWFaZewkQ5ozxnPomduMa4dhZAANNp88sYXfgv8N4qE",
  "key13": "54K5vDBpb1tSPkttSgZoUqGBdpPLP1qMFqpjDF3LDdE6JW5SQ7NipRrqmwEEUMd8vUh865n8Kir85g5zYFAUgPbq",
  "key14": "2FECeM8T52VGuYF1Yj4N8yyvixv6qYYXkF9GPMC5V7JDKcw9R1syZpYHaGFBBictQXE5oxr1vvEvxBH8bQE9LeFb",
  "key15": "aQrPkZofjUZSFnXibN1jsdNsccDGPBtbW75ShcBGG3SjrHUvgjTV55xbnZHbXDAsCjseP1jz84j4zrCx3JEFFsa",
  "key16": "5FTfYitajm5LQ2pBVT6ZJ5PbeyGg2cvXCNFstjDegBvTfCaZJyjP1R4PTWrob3sJK5Eo5GQBpNr47j2bQYunQVeu",
  "key17": "442k3yRwb4x2hjK3SbkT4jXFgDqpS191YQR4fk9GKrAxc8Nfz7keLXUbjiEZQwLXXyu7Nd9MrnbK8DX6pBp765wf",
  "key18": "2qhRBFgCCzkf22yN5M8GzEdTfkAoooEUURxKLebMGEYx8imzvEmQzu5b2LKDFfFvmD3e12PTMWFJpxNrb8aSBYLm",
  "key19": "49Y7FEm6j68P6R5Yip27hSvumATHcsmdv4KaXSdMJ1BFmsY5qRjLBYtByjY4X3j7DMXFRejNqLih3fmbrLx7o8Sd",
  "key20": "31mRxpAWw71tEXAbsNQKgkhoh3GWhi9JVY8g6BTf4tHidrJ42CqYoVFUhFHa63Wgnudqpmf93DGZYTWLmjWA4JmK",
  "key21": "5AtUPY7LrnkMugRH8Q3n86iNGVTiUzy5rpJRwMQvHFUhnYnXHfnttwtJ1vmfJ12v38BvqmaBHWeXu7X2MieeyAs7",
  "key22": "3aVWU6BbevkeUZFi4DZLA6ZuvDMKaW6GnKfs7H6M7ie6i7grFMN5QXzGBL647Af9YHskCc72kJSxKyogY2W86uyC",
  "key23": "3eksA8XyTf9eCYXhtPUwL2ZeSzLMKFGH2jfrp5TXdhTG7fyUK8upmXVB4jTtgDTk2g18uRs7EQ4usmhAJqtZwjzT",
  "key24": "sQNo1NoHjNduPouhF6gMPrLSec3f8MJMRczpYo7ci2ndF1r4bjSmcbk8xpE9EueScWM4aBXDnDJbxjuSQMzisog",
  "key25": "2vY4zvdLznyPg32TGm1ts8zNgXQJfsALPHMgRnFMHi9WoAR8dfuA2bD4jWvuuxiKJJHtTkXD2Zknrqats6X5kzsg",
  "key26": "4gy8xBF19AkMEEsdRcgJMGSFni22Ff7VH5UpUoTMyDhjJaVWCqtvE1AP92d5S9kwTEeeMZEAGedeQWiXBjwVh4V1",
  "key27": "Zp9SUtEFWUUyWtszkLa6to3i2sgrN371occ2oQ3CcFKLV555ZMgKSQg5TEFyJLf1kd1cobiRyq1WXXVVd1c1kTh",
  "key28": "4cvWKW7yoZtXgEyWZXTtrhSYUNMw3b2onDb2KbZo6oLKPmgUvzuotwT5Q21SE5FDUeAgYvg3CFm6QY2hZ8UXyomv",
  "key29": "3AfvmLyXM23nAP7yBiwY7ghPvPGtEmYX36ob26ZKSZmqJU28ntX6n878YTa55GaF4TtQ5v87BYHjHBwKXLdmUu4V",
  "key30": "3URbtEoA366SpihATHXxVP63JKinXAXpLWMQnkTA8XZVn9EdQx289YaE2Qyfstdd7WMFghLQPXRk1jePgFgn3odw",
  "key31": "5sjTGizgLXnE7HuBZACMigyGtD6rMVPMHD6TdhKjLmpPP2sCa2AXc6YunWKvxJSsbJ89XgrqpGRVZpjEmYGsBgrp",
  "key32": "4xdB8MmevAC13YZB8cydzxhuxvsgc7KFxAq6gWGWUaiFWUhDSxFptSZU9nnaRFjkeH5Kq1GY5bpk43cU5vvfhaMp",
  "key33": "3jUuJDMFhKVHUtUWPBabLmnnPXjHTpCG59RcAGwd1mgh668ntH1yftgJC86gdS1fkbxUbaeSwNPaGpzCeqworw3u",
  "key34": "4KC9cgSVj5pfUVybFCor6LSQ5g9denhG7cUsBY5z66sDWCteZNgsy2saCyYzhLEWHo5gZCoZYcZrGsdqB6mKGh2z",
  "key35": "25Pi5WgVmQSfn4aXAsqkxJphs9wddYYninn2yQycXN9K9jjxDcqCRV96ywWb9R28KRoYyi2p5aPnx3N812Kt8wr1",
  "key36": "3vgiywSVCdhcS269UVgKAdPFZoAiTxLRyTD2XbLouzmbFFKcgKL3izotcaVsjBuUWbAS5XCZXoLkAv1uuzCUddx5",
  "key37": "oQDR28iNNz3Ebz3NcoHq6YricKg1F1gpN5JQqLcK7gaWKjXiT8mNUAKMYpdMD3P1vQz7vnZgWz5Rk3Jq4S9ebGB",
  "key38": "8HLji4CcKdoy9GnPLATjNHgwoy4WELTLbNY2QDfrc8FmbqfTHnkdtUNaKrigx2r9R32588S3YHcTwxeADBgwLvj",
  "key39": "2kjbWbAqnkzWnsqaxZuWQw9SXnikecL4XT2MaqcWMtA4L11NMafof57bQaifhCZQ7BWU964K7dpYGBqPD3AMGg6R",
  "key40": "3GQ2oPKh7cBNY5facyLtgiQirQHLQvdkXxbgWk1nFNZ5gsowN9gfFXWo9qEcBQwMZjPTCh9cRV67RgG7xVu8X2RK",
  "key41": "3UZBE5YUGj1By7JUS49LLnAy2kUp7b5W6WS9nKWmsJmFRCAAUP2rK2spPkpHRRQjc4XYMx65myfh6ZbNQvKuYv32",
  "key42": "2aKX844SMaynMUmrzheEjMWmtdyA5FQTxGrC12trCodRgPJ9twc42RgBCKuSKFgFgALnfFaZ2ALap84MCLP2kB9T",
  "key43": "znRhRudMUzGuK2LPWDbZfGqWu1XVpeoLnXAbnQfgSrU45ryhkmahm1Bc6dHBYBJY8q33PsKC5o33bUMJuUR6Ai5",
  "key44": "3p1rNnpbgJWcqVAK8bWWz332GWZsYSMMzp2zEeAYrqGhAvRfpd7mV1RUNCtC5gRXT7ZV5Sd85ywmXrFqYCWLDKGu",
  "key45": "zXaGHbkhRqad3baLk8AfoUteTrZzAz3rwhfs7CSyj7ynhnn4tEth5DXqid628vrDcGM2G539B5fsvvCkHmiUStd"
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
