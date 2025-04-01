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
    "3B52HpUVry9Q88bdAYUF8ia63cRJHCdWoSLhuttBUy378CvGcve3mQUUwrrBJmeLaUxB5gfNgPxEbebyGXT5ntcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wNGnvJvc3pkcgR9cLBNFyNsqmQbaYFqZ8Y8yxxaDzgat2YK9K7Y9FsywKhVwuiE1g2itFRGEzfrfoMixD13KTGe",
  "key1": "VMAZHUopvMBWLJkX8zHMDQuUPQWaiwbWPmy3RaHPUM1isMehkEzGUsXAAHfyg7BBEzbq3vgYPpfpejr7PAm3VLF",
  "key2": "TCd9sJBr6sxxSUZ4Zy4nuh6siis3ST92LQUbjr2pKfjgp2PZ6BTJTBhxca6zBJfGmNachEcQeG9QkD4zJv6zNWc",
  "key3": "5cj5LQj1JPytFPnSUwTupc1LSUPctqRoSdBtvxeHsWTKVMuKDrep16npMpsYxTZiUQpoRScbpMJC2SArPAxFrTQF",
  "key4": "3gYrMy7gfgLB3zxuU8xcTzn9yzwAxmzTh3XSmMmAAGSfqSWGie2dX1QGN7LaV7Z6vea2JYtP6kTf6Equrnw2wy1s",
  "key5": "5Jpg4gJ3cYNmhsZy44bv9q7Wsd6epJP1zSiLSH23gtdgxpGKtMpMrksAZ5L2JD4k4KKwKH6bfib961Uw5t94j9AF",
  "key6": "Dwmi6FFjWfgzRWGWg1xv6s4c3u2iq1gWtcGQ68EXwci6TFkLGht6ffTPiYLGU9myRnn8zAFV1EX8bpzigyQ8u28",
  "key7": "4rkAMBPb9KeC1ZnrqHZf1EUNFdvcgxbbyVozA4CDQAAewys1PtZCGExh1oFNMUtY9EBvBNjmLjNvtQxNNmfFWm8f",
  "key8": "5jrj2VePwecYnPDMK1tfy2HShB13xJGWPri1JmxWpBPcJsSWFchHacS63jpiRH3Vmbeij2KyStXnRdu6BaXxstBX",
  "key9": "3QCaibcDPcSPAuGhjhVuEVWnBxBbA3uCRqypJZ92x7YjAVQQHZ5naajguqaXrd3mmw2czwNEJKavmddycGZMCYny",
  "key10": "3ajjbN2RBWD3pYs7o6tWSL5GHfihgqYuN6QB6KFd4mqgx9SCeocNuxXYfTQjxLVKkXjT8WhWG9RTFgBr78Tj8rTw",
  "key11": "3Ghr6rLntLhePKpDx2DrTYCsYH6HzTaZ45EFnxsp6e5ciEpBW1Sv1nwBFsMc3uviKgMibDjrpDtze5YEnfApeZi9",
  "key12": "4XYgVHQZchAqL4pYaRWyyoahpSzgcKTkdQDRUR65eiJhpJJRMkDhL6wWEE7NVmDeoaraJQm9XE9J3P3Sjs6qaG7v",
  "key13": "4PAmPkNjKgGxijaTSPzbz6UG95yV5oVwypaFPncsFNjbiYQafnFXN3zqTKDyM5pJptkK1MjdgUyBxssSCUX2VQYu",
  "key14": "3Gnbis4MD2auZ7WNAJb9pvFQLDvuCHQw9hXYxsHrioCdbz2JDKS4GRKzv2cfszXi6QeMUvePp8f1xQNDBBTmexMN",
  "key15": "5NPfGCDUNbL9cNjPbnv7Cthdj3kYRXSkUhtUxqihk67upt4rWje8jDYUxJJ3xk9fDrqBiy1kxQxGkyTrtbdNshAd",
  "key16": "bxR3qjVWz6J7iLADTEHkz3wRN7aPJUeP8dPvtTGe7YhbQSTxH6hLciRm2MyJ4MFYNUuxFH8REkbumEehmb1UDvn",
  "key17": "4XTSt7dVBqidAunn8PqZY2415N4g66gRiTHeSAgkfR8fb91YP4JhcD79VFJipsLuVaEkcmXFbq7j3dRg3PeTqFVi",
  "key18": "2P5fs3PxHDUV4C6NshiWEL1qTjvNNQpeHMXYtzSEg2ri5ecEsN1eh3QPxD15gWRUfhApCX5pJFVezcAi3XRXKsKA",
  "key19": "26A6iyzfDWiV41Y7VJ2w4ygybnD1Nq6fQzg2DsBfR1d9QzZBxzcburjNdfRhYzV59bHBLkNH7dVUuFK1dR3Vke9A",
  "key20": "2Z35aJxYskViveW6NJnh4iKXyc6wMv4kwka9zPT4VEeLUj3DeLEsWdsuGmGAq3wzini3ixutsxTqMbnv2QKVkqFa",
  "key21": "2tDnguoPLbuDXmzDzodeKcyw6BD4eBH9rp5jp1nxBgqL89WrbbLVARCZGNL9vBHdjQaVq7jqsm9PstfYFgGSHdGp",
  "key22": "obA8xDf47aHihfzmp8axj5URs3fkbfoijjytntGD2kD6jAQp3f4R97YdZKc4EFVhpwU5cBSGcpCYLipLj46TfLz",
  "key23": "4BD35M4VEN4iLo8xmoZmwsQUqvzTuQLjppSQ321FM3tTo1yZ6vv8HTiTpmSGc86qBK6EJv2oJ4AZZRTfS32dAxP5",
  "key24": "4J7hYYRxaqQpsEA8k7uEh26XBpsxce4i4kb21S22gi5YbDZQhLkH4oKP8o2yiiXhZWq1sTTiS8kNvVG8i48jeHaN",
  "key25": "341Q86YEQMLTPQC3s1AJ6Wn7u5hjz3LnowchdB7YBaH7KM3NmZGJDsBV38ZpK2AqXmuoArTxLvYei3T9tuxCJ1on",
  "key26": "4VaXJ9NSrhkuogQkNnDexNB99vRwUWoJCppoXjz7ch8aeykWDqp9uhhdajuxY9sB9N4fBLHyEjff7eiz4LRqvXha",
  "key27": "4y7GPx69bjtsuMicCzKn2Bmq8E4vPZ7pJC6tYPuDf6Ssrrifihf91XFXnV28fhQadXjJo1ain6txdezdLpJdZq37",
  "key28": "Tgizois1JVvoVjVPAX5njvuVEbrYx6b4mdTvBmtWqvpfQTfX6wR19svJf7dLhy5UT6NUqc5evPXpQsCFFCx4HGQ",
  "key29": "4AAMfw8cBpnUFgGZrNTgiTZJUAZt8b4Wzr6AYv7SQ47ZT8DEPmsWZgaqKgGshMYJeNMDkqqHczUQcXxmimRowTRU",
  "key30": "2C4rUFhAQEfSstiD75wAKm9kUyQYPeUgwNXFyv6mS5hyG1RgPdqEAW17TMGreUoTVoyny6HGmjbiDbxzPweQn3N7",
  "key31": "5KPfgjxoXkCPsUFHt49EwXtMz7cEtq7ZnpUWvqDvnfW7ikHxFfHXd3oRGbgWhLQzzGY2RX8aCr2oPVuMYe92ys3y",
  "key32": "5cUaXH2RrhSMcGAAhbGTt84vh9AYimNDqpAzLLkvqCwCk1AnHtKVDNWtN9QDamMNcUH3jcvsPiE8XHDgSqCzdoML",
  "key33": "25nGR5CjiAruPuYiwF7Aj1EyYF4mkFBfk1xsWyDwCwZipkW1zrZkGxjyTpuxRZD92d9JYwe9cWesSJh9FdqihMUq",
  "key34": "4aCSahnHLrjnCo4t8YVh8D7QJFQNajbRdo4syooFUpKpdAv9T1eVjwujZ421mDwLmbQrWsFf4aK4PJgPA6oYbWHv",
  "key35": "xSFUYeL1RVqyGZi4zMf6MLNyFnFNBPUHjArtAFgiAdBacap6xwiwV4PGBNhA2KaooxXuUR7kKR6fguJGsVv4duA",
  "key36": "3HEiXYnLxHK1WFAWXy3Tmo7koTASgrcT5cMM3ZPqtG5qbc2rPMEynARW5FSNiQSDrpjWSLhELQbZW2J7EphB5skL",
  "key37": "5b4XC5xXxunWHzYLGzNJzM81MARqyHW5m3t4PHT86SyVe1Tqh7xH4ZejQz1dKDhUSmsw43FkGEKB6gRkowh5MaTN",
  "key38": "5V1yurX1wjyYZg9AuNpc4dzboS7rnx9966DYtgvf2WVoJq5bJy6BJwama7o8CmYAMxDgz66H6P15PgcpFyqYwaqf"
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
