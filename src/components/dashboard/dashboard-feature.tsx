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
    "yFKfa4CVH1o1X1XLcRPKD4uwGnam5qWY8K6u8y8PeYFpmCjUPfpvzv3RHCLdCUNHvsGyTx3fWcfpWnDHhWcRwUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HfTXb8nsjZW618gDvQLQAMEFUvA4mF8o5xBzf6nxZLTLapUfZjZbZRd8Z5UYkU6A8eVjH5SgJ2oXfvEum24MEv5",
  "key1": "2ynqVGZDkY7NNNXRcMR6khB69EF5E6vDWPqjX5S8DW4yvcmbJgQrCcN1b5h9MFhyrLC22dsU5vn4F8SynsTR9ixi",
  "key2": "2bwWB9vPrUwDdBWDMhqygUbhD1Hnrvon8T38wpngmqsqibDB5UsH8tBgwrHjPsDyi92krv1bhKxQv1DMXAuGKM8v",
  "key3": "5foJVR3yE6CHvr6PGaRkfAcnkmGXpa8JGmwCinNDjv8bkAwGya5t3QgxnHK2PZ1macPFWeY7Cf5UF25tNWDWWAns",
  "key4": "2zjoM1D9SB2zRbNenH26nokQwYoNhWQjdhifV9ogq5JFwqj9BMkdRQHnUJBRaQftxFYGrFVdk384PTz7tPRWtSxc",
  "key5": "53cS7KJnYzxC8dfvaUMpybvNxxhaTZec63SvkoQgwhiNQmjUH58sFYfPRFtGUmgFgAXHJ6GSGxpM3HxzyouEjXYR",
  "key6": "3Cd2tjegJ6jN7cHnjRq92fC4zHMSVq9GRK9zCaegepVwVaMdsrW4BKYzmts2vQ1G6LTYMwMeMC9EgK8jhqQrcfK7",
  "key7": "hYnZ4H9pEyRYVd1371uXZzGhF5MjgFsgezSBaygYWVEpgwNSPxRCdXAJjhiTJ8on5rAVVYspTKbkREdoRQfUrfv",
  "key8": "5Dz6TZ5agzgvsaHxXmSw34zDpWGRHvDPdYthuwN7b5HiBa12oHxjT6ave9gzGu5gfDoXEiqo7zJ5JcSew6JWtDzq",
  "key9": "2UFUjZvxh6DPYf3SW9RKQ4NqEo412wqsP28AXwFQ3VKBBdvZ6a8b51mBGiPDJeJsB9o6r1iRxbDsCL61AHxpUZJZ",
  "key10": "5jjyVJkaWV2tf3fC39RMTr2q6CiPHSA5joh5QoQEP7ntMsntU6HQs8hqAFr8u6rTRwFYQ7TrWN6kSQ4Ex8Th7ucV",
  "key11": "3YhGzmWKJ4DyHx272mi9M2Qvnp8ACL66dshExNjeBqLQ1m2VqGmob68iBNWGypGy8dvxuTy2Rtqjwyry6crKLidF",
  "key12": "3hA6X7mE9rVWUYfsCZJZgRGTKTJFbobsxu4hY8GX79NrnbMt82FimvU4Bb8qaVW51WfVpcJZTNWnW71y82cRJWsM",
  "key13": "1ZmExXzRcTUTmHuANS8CCDAwCsFiCfrSdNQfwu2USKTxyGM8sUabbSyJGZNjnymvTeTRUuadAVok7VxaF1sveGA",
  "key14": "4zHy4fkjTvYUQBpErnAWXgXHkkoihrfTayWGAsR9FSKyTtCvWiVtpjzeNznmDibzEoGnjtgc7Av4tWvG6VkhQ5MP",
  "key15": "2RYr96fhmC1Y6U1CET7hDiGEhUso9xaZTehPePSLnLwDB8YMAqvigoep6WpP4r7BKhRCUbmfLtuZQ1FGuS69NVYe",
  "key16": "2zfFWGL2XNK3H6iHB1uMemXm8VoP1ipWzLRpXTjGwgmYcn715zFzso88Vs5dDE1W7PM5zZCFwqNsQqP14kxXzvHq",
  "key17": "7VxEwqAHUtG9FF1zsQjDyznbXSFXYYdQGMViWyXtBsKG9jrX3zXsnP1rN7JZB2T9jZ1Ecm7tJGjecbdpbnLbnEA",
  "key18": "4bufcuWgxfPSbatH2DUqGasEnpqYHumAJw6jin2o4cEdfXjwEiYCDac5Ybjpr1SvEZnmAPyYUKsr52FVothi7NvB",
  "key19": "5ycYxNahyYYmWqrLiWXW7s8fedAVBvaTYR6U35gjh1Wo3YfnQCJdZzVBC4zkhFvj3sMGdsjEfzQmCuKwEcKwBFUQ",
  "key20": "5C13SWvKcySQthtiQdLd5MiHor68EA9qeXGWHXAdQm7QUkw4BvSJkC9rQ9rifjyvSfShDs8eNnGFE4rKWS29KPCY",
  "key21": "2cdGVaWJExLgNrVDxDghGgUafENFGXusJfzBATpJ8f2s5xCaVZkpgD1WAkAMSFHpkFhvw4Z2iM35dqB9sy9Pr3Mm",
  "key22": "67r4KPfd2M2kRh6UUenVpE7dwU6yTEtadXyE5ZzC7RtS5cnHZHYdqgYcpAGUVyNBFup37vuU3uPdBkLNf8rd2b2L",
  "key23": "2FVag5fu1BLbPphs6742Pj75bwdMEsGoqKo95WRadiqV5CgFhVDXPnvLA2JYjwNJk6HgYn1bwxEXvohHJifnC1W3",
  "key24": "4uTiLa8EXX9fnmJjjCxKt9fnjR5eBnEbuBeWJY2iqQ6QbEEkRBYJUck78diCs4BCNANi56VdBnmhksiwmmxxt4e1",
  "key25": "4SwMZvxPDWiZnhcLhisrmguVEUBfEKzvNrF23UfsnNyzDWB3XsY53L87MEqRYDgwjLWsVYKSRUUG19jttut5U8yf",
  "key26": "36w38zvxLRbDeE241a5nKYbCCfDey6JYGBGiJDvFUeUbaGzvtZ43rGYq33GrxkR2mmL1xQNbLTZajYL7DheLwazq",
  "key27": "n1S86XmLdr6VaLqZEmaf9YKm8boqF9xMMAK1W6WiSonCvPXZqKuRATHLbPYMbgtYVWHy4M4EyPcKJXybHtoHWvx",
  "key28": "H4UPjBnHwVLadf8gwwDzNB6Zg9fBjhngs3a3Y5cke4hVwGXVMhU4tpv3sRnGnf4HBhmwbqVkWJmM9xEUASRFity",
  "key29": "3gpktJPR3Q673u5uodsNCTNyiv2TPgabe1iXaLc6DsBQrUVygXMf7F7wWL89DWV22ppmpvoek137b7k9tMUnThp3",
  "key30": "4FAGLT5dPUZZEgg1Le6dkERjWSuGFQe7sCJunMYpCpMSZxvzYPKmYceNK1tSg8oXx8v2e89exnJt3UBbP3JrzCvk",
  "key31": "23T8DjtGYZj1iqTwxckmkoKELz5dEXd6ayqLLmXaLy8tNX44Ye4w7mzgPjqudqcAr6VZydo67Qd11QX4UkAwyzHT",
  "key32": "2eKKhDVhoHfLrCCKiXJVtzjaKYGzL1v357fhC46wJbX3BsrVAfxyCxEAADNtceySJ14yTVvfawPpD6RkLP5eozfZ",
  "key33": "5LVnzo6FcBQi5cyVLDZFJjfgmpEc5WgtugThr3YqPb7u6EDNGgSnN37TrQmCQXxL37UYVALgPnnoVWYfQMUtyb4h",
  "key34": "38nHxjr6xByfVekp7tdsQ81dzHG9d7fEb4Xx6vRCY3MFGrMGsTCqLCuFwu6KaA8gPC39njYTvdZT7YuXrEu8nMBV",
  "key35": "59zPpaGTU22GCYGjm4Hj3DWwSkJ4vAXTPYubZFjYF4jtywVbdHpktdPLQoRMmCCazM7onpAwTL5KCrB3xXzNJsWo",
  "key36": "3NtoDVpUYZfZQgTjfYNNZrt9q1ZGCn8BuMefkx6VsMaEqfMWGrw6Ax1ndhgoeL6Ld9p43DftuuiCNm6izddmJzUj",
  "key37": "4MKFiU8bYv8scHrSqZhmeZpywL3j5P1YzcZPQEKUrhAHz3SwLHoQkZACz5gw6kC7hQvvQUrK2Fk2Ad8bjj6kB3Za",
  "key38": "3LY3E5HqWhi3BiRb1RueCYMdhegRbksYNpL8HAHoXn1foLDSZTG8szFDga3ccNtZ2FmbwTyZrDPPXx3aUWNfTfgi",
  "key39": "5qbmjdeVhBTLfdLZtPXLtooxRy9TRoVYztEzqPve5zAozpp52ftJ7Ku539PGjwHaa6CdEuWArb4isnu4oDjoqMZy",
  "key40": "YfqXUi59KKXLCqe9YuCUnt8mUxeAybCCGHuuuD6LHJqiAKLh5JQsGAv4AtoP8w9VFEXN1uskuxnFTyHvjEanapA",
  "key41": "2NL3GqgiCJVS4bQAigZshwRVxpWc4WEasS3yHcqM3SbGcQcTv1ChBujZ9d2wkNHajBPA7p1JQvAC4Z2xmv2VsCow",
  "key42": "3tTdyx6rheA8Xkvk2pWzRKVL751TCnsBY1juSgrer53NRrqavci7Wrf8jPiTHsfrLYbvfyELKPcEV9UzKHBeogVu",
  "key43": "43SgRoAuBvki9GXr6GaKWmyt8zk4cR79awyA3aT9UUUr3okGgCrcoP5fD5MZckRLpPGqYpVvCk58PoUWBUMMNcEP",
  "key44": "4TK4CqFyQk2HeECr3WEerXfBhK44TM5aeq88nQ4SN7RsSoaFLSdgtyAKw4HRFujprc3h7KFNuERgU4SxW95MMJwB"
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
