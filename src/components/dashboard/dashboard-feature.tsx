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
    "5UExWuRmQdsuFhrXFTRAhJbkz7dEmCPiSzJo5F9pwEVRQ1PA812Z2BySNRVWevUr53u6sudNvsLepSjWDU3Y4upr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZNXfSMS3XZbHniUrHvmrJf2V8oawsBFq1Pqpdgb7JvX953Nc5fEALwsa7YQ6ZPT8X3zJm3fwUtB1tzB3atuimie",
  "key1": "4LtXbCLJsf6XZXgbCBxQmiYceNopD1PWaPxAvSY794qe1QaU8z9ozFHwnjbX6cQgp1RT9ms4n2Y95b6RmQDHCWfe",
  "key2": "3xa2F89vyLk8Lh1wc6NekNjNtoSzTKyD8Xk2CtgHHZf6akrMHzMXz7WEB95MeNsxhJcAJRoyEAUP6jNkUeRvrkuK",
  "key3": "5EpvEw3NBK8qCXy7EVV7pTYvA8Kgg3q2ykwVW2VtHtbj7Sve2tkECXD9efKocsPwR2saMyYNak3c6scMheRhRyQf",
  "key4": "2ZvJtRYt4kxMZxcbVjFUtTcWKpnDETejrBZVbbuKCvSZ19kxZqhTSGC5PU7hoHEU3fS8hBCpW7n1V1j1VCvNVhws",
  "key5": "5fxstkhh1qqjJPjLMkmtXsJ9Pd6tHWbvz6fJAHN1q35XQ8mjhnd2sWikmT4Znw9VSCeA7GhUkYWTQyFmHg73j1kP",
  "key6": "634VQqwVyACvwckEWQXhy9vtaRwEj8Hf1am9AYZUaGokXodt9GKG3N412tJYS3AcuhNVyQdxYy2oxYavi1PKcNBM",
  "key7": "H1GZKKepu5ruxeYFinyKp2R94PViZG8buzNqqroagMyyyrgxBAdjDXygQW7hzGydfSqeWh8Njd6YEViw49D73sS",
  "key8": "2RoFeHVWRgjpawGEiB7wwAiC3uCAFQqegbPqdK8GtDZcdCekrqpvYTJHPTtWH5NG1zybeAa465X72Kt4dR9jy2ya",
  "key9": "5eCaJ8FJ75q5Xqah9NfaepPBxTtBn1Bvno4GK1pfhf5712Ske13dwKccLs1xJqDQrmEos2PkjnuMFQ5YGjtxBNVF",
  "key10": "5WMCK3sWN4Rw5yEKSzRxWCsk7rD6vJVRskQ3RKVgzfBeUsJLBSx5er7UHwyqarwfmtzWBJQsUfBN4HHqfid5GfB",
  "key11": "2aC3ohZiLNiMYdbEyBZvMstHmrBUMjYwEPUYsi4tBrqQXQYzBWSv3diuAypANHkmTdj4mw56vFRHrvbeD5iU57dR",
  "key12": "4ZNWunsKo51tdeBhJKp9ZQ7KfXiEKDDfbAgwxdKKGc3byVzbnZ6chKfW7G8Bti6ou9nZfffjkMoVCF4ZGen1MMnv",
  "key13": "5S1K9SbXoXsjQmwC16hAQon1UeZDtwgaa4dJ6t1bLHALVJmiW8z26Gjv5ckAPce79ppTzRXfHrPHUeRMUot7Eo2o",
  "key14": "4ZN2bZNu9gseZwjLKn8K8f2SoaUimBXYppURMbcccCaAtfVpPgVtq6p1ZJSpsapXUMTwsjq1AgF3bPDuDXRToNPM",
  "key15": "3diYDwZK4v4scbbRsFKPsBevPEhrm1ptT2aomEdXYAT2srqEMKBMVFs8Qk2MyffQVSXi5rGSaU4qt8k1Bqea1iVm",
  "key16": "vLLpr6yYzWCVkjT3F5XDWhaKY6Z1kAfcEN2SvXzDq1qx7NFaYadLWZ1td9Ft9brnpN63srsbMDCJWi6if3adYqu",
  "key17": "B3yk2cFxbMZfzSf9bkrV3g2u5b3fuy9N8hUHhfcKjfHXs8XSxwJ8c2Br63GbrkoBHYBfws3uqs4P3AhEwM1gvMH",
  "key18": "4ganuJByYkjHbFXmy54EuSK9ofrY5F4pZwjkktLTwkPT9MYymxaMkVgJ5CSgKLjZSR3ZPmB5yfyyEiYk2z6SxAkw",
  "key19": "5GWnCpN2renvrGLMQj6Lvy1t7NqaepH264j4GAB8t1hmQ41wEiQx5T3GUxWtzq2VLtbPsaXiEMoerpcTgeP97rs1",
  "key20": "2uts1aFwTj2BDXiZ4G9VomTL9VYq2TJsT3V2kCa7FfHhHpsVZrGUWsUvmjcK2f9TTgaoVt3Vb51xoASyAovQqfSq",
  "key21": "PEzXhcaPQeYQ7EyEXfddrGa9irkDDfQ74HxMmMKHDAqEZ7mbXdQoz2QeYmDqLDG4jrwRkEmxgyoLn9KZv78havZ",
  "key22": "4RoXoP6FEc3muj2auT4jRG2GE8SHhAVPTxctDaiTaLSyJcogotRP6XQVo3DhKkUSY1VZuRhbHjhkNjZ7kN3347gJ",
  "key23": "4WZhJxX64NrTB7xn5jhMkbnWHigNPRCpdaD8L9rWZcRpKoMUqUwkWnkyPDTTFhmCMjgXa1J5BudVsGJ56CEuPmtd",
  "key24": "4Ui6J1ugoyEwtrwHgWKkWum7ZTDLFs4LD5h5ZxuxDd3b2JP7RQ6ZaTEhUWp3Ab3rTUxLwrwqQCvyBDMQaao8saKo",
  "key25": "2AGpnMbf2woaifyPaJjHRp93GDHUKs9rsMXzdEFEaazknrf4QNcF9Kk1YnBuVZcyK68cVgEYcq5hiKVSZQUzvF6C",
  "key26": "31QNjZCEceqAanbJA3NQpUzzZGqAb5dBGVMAchh6aMxdhJcBgCEKQvjdyPLCpvmgSyNF2r2q6rMDfM4m5SewM35c",
  "key27": "42gxNRNrkRHJMYkuk7xU92yQaQ7ZVJW8SS2W64FE9gq3G6tvYBkmyYAtoHGVBWvXJ8YFVTDMVNf5r8JabgjHnc87",
  "key28": "2r2agWwekoC9tavf2HsBXojhcq1HZc7tGPsVx9fTAtTokQxh6bk6zx6qwmwVbFiSws1pSh5tvKwHjaLqsSpsDDUh",
  "key29": "3nPmG4gr4ucjqYsyqm7AXLsxFoDzVeepPseaFcjVWxxeLz47MyjHyrYbY9jvjPUw4w62X4TKjp3XXerD2M9B62s7",
  "key30": "3XQiSWQEziLJjRtktgF56XmvabrbArUcp5zL9KMHJuichJu2d3r6QKKhw7pCk7rzmek2jKrDR73gfBd6HNhMs7uu",
  "key31": "4pN6wzAzPEXYhF3zcJVfgkZKs3fPqACauVbcFopWtyY8KCi95jBn1Uqt3uHsZ2kbaWdrrnWRSc4m4JmaeuXWKmVD",
  "key32": "4LRCsDWG7znKoWiqKj2bKKr9nWhXKFi6EtaNUk1QxWxrKrwV6ypHX9FT2kx7JVSHkDrN4UaHQfu7hRrPRzkimRwV",
  "key33": "4AwNPojxiN8Tci1qHZD9FccQaTZ2JtjaRZVL8DtSfyVNRxs7CqrKCcmMbix4d51hjtbx9xiE6XM5hYcw5j4goMq9",
  "key34": "5cvQviXmqAQbfuLVuzttdpD25R25iqnsXUd8KSgZxQSWiBBo6LUcawfQoS5tCqG9sdJpeQsadDJWtR4LF9yziXgf",
  "key35": "5NrjpeooTBDEqYQicP2t5iniGbZDdDVNgJ1mAFfDcf9wtGjRb3viKHapC7AsK3R8rjxkReLkoXqbcFJP551tm7GG",
  "key36": "Cbpo5rNXPWFZtX6AVuvocsUqapv3fNnRJpUs5HgSJbncwk34UrkXEX5QDaHTS7452r3KC55jEZ35HTdpbJEafHC",
  "key37": "32FRztnybLkr8ZVKkKNoHAmAMGMPxHg7UDU8K836wFCqdbY2u8uCHRUVNmvK88SKXtf6YNLKMPvfKefbcRMuVuxs",
  "key38": "4QpuYXz7LDpNfkv5s9wE7WovWm6B6qpywDv3Xk4QZbkrRkrkj9MgWGHtuzniUg1ckHiFW2B23zj7eEcvsK9Y33CK",
  "key39": "9fAHtcpx9JNkr4zAaP8Qj7Y8c2XW6LhyoMH1c2EW8HPMYTEc62Bc66C1vkiiW4G8hWAaCz2JuhLCDywyNfyfr4N",
  "key40": "3zuewV7fArbFaQyvBCzMiSWVDs2Hyq8sb7u5o6Nd1o6QTujUBwz4xQzWvdPXKbw3yb6QKeB1VsqR4HK7V6R9yx5M",
  "key41": "3g9JDTpPeSmqoZxmDPEfZDAs67WtywubvGHLcf9StfZRKx4GFZxdzNR8EnN4ZMBW3T1yCu1h9TR37wrJUh6p9H3e",
  "key42": "2n4NJAdP6UmvCDPekZRu4VfCvSs9tee2L3RLfTs5HEYwknEUEFDJcopbAaEfeJArWBV1hKSfrjTdJP8HuvcDj8eq",
  "key43": "3eQhRsgQpmkK7UQejLqwQa3jnvrb12dAhYzisrYn8L6un6tcPVyM3ceyjpUL4HGmwikFYRpdua5QG6rWBNwsN8Tq",
  "key44": "2cvGHFvpP4uawtk4v4bj5U9NzQo19jY4u4yqBnNVTFUjhEULrq2se7H5KqEjjoK1wnm9WNQdG3WQFN28gPsSMUfG",
  "key45": "5hbJzo2CT66ueTD1SsEqN2cZs2bGeoqJrdwk17vHuRuU74a2vv7hwsfF4mnXsYLemcfBZEpu6AcrM6pfiQhBmGEG",
  "key46": "4fDmeAaFQqc2CiHCa93iewzPHfW3FRYCEcy9EG5wXvGp3cqB5GuvCSQ2q3ZpRp4wpK9MbxNvuQStJ8URwUgWTvJW"
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
