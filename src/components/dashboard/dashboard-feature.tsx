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
    "5NBc93PLA21igw9dAcM3FJoEgV2uyMNg5bRfLdFkgTrwmUdQpZ2ho4b8smGvUK7zAjbQ2dM4sQn2tCVGVrdDZQuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ku3nd2H4ozLB4MwdPpKLD3mwB2THkKTi91arQVTXku5dparcoyeKKGRETgmiNyA9cPJMVmD5MMH69oBQK9Rrm2x",
  "key1": "2yqQGASx1pHGDArUYJYXG51XCxThyjmai4po6CekWg1fzG8JN3ds1aVx69yEKMBo89XeJv2Pq44WqzCryVjLrSRN",
  "key2": "5CDtXFX9ixiw17sTrYJ4U271ct6trH37CsqvDwMDuEbomW1wgVUdT6n8VSAxrB9V89NfvjT7YD9vkmcRs1MxaC9E",
  "key3": "5LVPYzRUrsrFzkWd7ZBSXgG8GY441VDKhpFipttfp4KL9Cwth484cCJSYXtHfnX5stPkJ2eAZSctqh6d5nFb2wjB",
  "key4": "2r8QpNrymsJ6NBkHLutGZt7zHKjcwHyKijdQuAbYUJNgsZ9KJBUsned2jgzoEYNhW8VqsFX4iawmPqGKdaov5ZRq",
  "key5": "43djMzo5tEgsqx8zTh1ZwHsX24cf5w46zjn7CD1tqak687CnJAsjXddX2oX4pmu45m3szSHuwjzEfpRc86vzguFS",
  "key6": "2FB87FfLLkhxWDwNgVxzu4SGCsfmcJn5Z8181jmA3t8gg5htZ9UjuX9FjkSjyxCU25iwgQXkMhcYGbyunUSp4mMx",
  "key7": "5jFdF8e7QUzZMhW6jhYWKg6btdqHj1Lhw4BGcWvsw3QvLZaHYnrsjJBKi7fA2qnbbEYy7KrF5hTMask7pZDFrETw",
  "key8": "31gJWgMS5ZDRCYmNpFMHkuWrZbmZ5RsMmANd5y3EbV7RnbQxy2DHo2jNPJSsBERc8tG8Z1zWZVkj5xkWMoVyQsKV",
  "key9": "3dL1XVPojKTZCPsUrLE8ixRjCkCZchPjP7x2s2Je9Hs7EwixXZAYzHVwfVERzCn3VNmmWcY5Povhd9uiQtpJM2U5",
  "key10": "4rBNA3DRqLWgSDbjVN2F32eJHxM2VM7backHWCDjEHcZdcTbbzqBkyyZdnYpj8TxLdotyStXr8b5rbyiZZ2HasjP",
  "key11": "31fRdMbBfrJtFMiHdVFwvN8da9UfxV2dUeAC9M5kEvPkhAUNTn3rXp4bGnQqwsKxLFpL99bjeoRyUSWzY9G8s3ES",
  "key12": "3qqdoN6NYDofykBZjNmctMsXyGAevib3BfTApR5ur5zdeNkDGbUPCKHW6LknSvC5BLXHgcWpS9po8q7AV8e7BySL",
  "key13": "5teFEkgGNpXFqsE487LhSCcX26gVuzWQtAEBziCdnASSkqz5iMPWntM6haYSD5bPMevmG3pvjCZrF6wYdLqDV4wE",
  "key14": "4spg9mRzUyaFNk1b5C6yYK2vsLdpDTNoRjtS8MiP55QkWHbwB18kG4zDdqNjF5A5f6Ga9RjGdeBS7LkszVk6agmD",
  "key15": "4GrmDvMtaiB33tAwmKBmJvDmaeGqs4Rgqdzm95oo2qou88UXqo8EseRz1Ucgax4Yvt9bmwv8kuzKTk6sEYAPN7PK",
  "key16": "3uVrpdvR9AXNfV51hpYAGCUNS8Mrd3oVjqbe2MQPYtU8bvZstTmJnyhsWSB1V3CLnddWqWiWCts3nRW468A9nBWa",
  "key17": "1iDRN7Mhbz9M9MKeT4R28acyczaxs7hy8NQikiLRx96CPDRqTPLWeMU9rjQgCjShWpYByrRsB9SEcMUR3Fr5hKZ",
  "key18": "5YMzSYJXR7M7x5bQwg3Fve2B42NfC7UW5RW2duUcCj5Sx2vpKoNfjAqsia6fWsXQDZwnz5mq9j9bfbA4EQAeeu2V",
  "key19": "4PMJcVoSL2XCsz14nTKKTpDFSBi2osfbqDQxJgNPAALRMwqhsEgWEmA3qADyWh4AU7QcjdHE5uvnpw6iP18bYZJg",
  "key20": "29Gv3uB7aZrJiqAuVTAq4CbWcRdaUNodCZiXnhf6oYYa16xzEqK8Bow8LuQ2Ci1mx3ws71bd52eopTrdvcUFU2FE",
  "key21": "Zi4A85SC2iuBm5wv96sfEBVFisnkF8zg3yn5jHaLtZGz5jzY71LeW5YtXWpNuFCPsJ3HXjCWGpd4fE2vnrFbfvb",
  "key22": "4NkJVNreVBUTuRX6boqqiFLjjMkpHHpNWDbQ9PY79yk8fZRnmzH4gJcsqu5nuFnSgtYT9XthYfBBgVwx5CQ3G7UG",
  "key23": "3Kz69AfxMTgC3KxmSmUbXQgGrvGgvWsQKdrxVowV3BVVxkxvLKvW4iqrhXMThBh36pB49XeYk1VzTgpxoAF6L9wd",
  "key24": "63VT133ganDEcmobp87rp7bYShB8WAvgkk2GEHMsHX4nxMdSwaZoWoTqHuK2xpq5uVD8LtFtwczsFowB5uDRAkVW",
  "key25": "2Xbu85ygv9ZR7EsLnqh9y2SdDwYM5op9DZt98WTRxxaW3Cj6A3F7ikBwAoJr6A9mrGUbrUrkgceQzpgxpmaDwRdE",
  "key26": "4kvV3Q7mpCwq6E3nt3SREC1weKMtTeBRuBSX1AHmtMSLLNdUfcAbVL4rEjqXttDXbB817juypY462A7sRc6VjCeq",
  "key27": "A2zdJx9pqHVxbtRLBf4LpBkt1uQ2LXAZqR2nhT3Jy7nxBLLPSzi6Lo9Ee3PzM2cbug5bBf2dpAn2wcYgZHksbiv",
  "key28": "2Lq49PfitKdZwLteyJ2rN6Ck7mpuB4nq4p2MuxK58rQrqp62nBiejt5wYgnCABPuhCRNB2Xt2kL9PWTZ59R3Fdyw",
  "key29": "2s6KhULkoR1nSrBsDJtTbcXo9vQLvinxEbEphBeYxHYUhprujsGhA4mdgquzCJmGCtah4J4Fmh8iF2PqiStRj4qd",
  "key30": "2hPcwrKiTEcYQEyyCNDXG9CVS3hUBBP3m38kttddTFAoYnozHrUE4fmMMKEHDefnPuyUjkpTDCtMojP4bP9MPcwF",
  "key31": "5UMmmP3xezYSwg1cGg9tUcuEGF63FS9vVpE7pt7Cb1oWAeJESh6tuwm8akWzXccdiNm3bKs3XQ7s2rY7Bj3tsqXw",
  "key32": "2rV9kiGQDn3CpsEcDQaXT6tVwzx7Wc5VQEFtxqVNXo6fF7BFekDyGaQ5DpKftFtB7M79xGGEeNizMFMD75EJFxdV",
  "key33": "573nfzDknAGXfwBuno1SXk3xV1xTC4Nd8bhKRdFR1cJ4hXnLRUinxqy7rr9PdNbBEQQkgVNXbyoyEXkZegZELMmf",
  "key34": "4yoXvHL1KZpuCq6S9E8GcKfRsGjircUgTDqckGLdqMWpKC63FZRxQoLom927Y8L6FCEDXzdF6WYyXL6WcbU5BBLs",
  "key35": "3avdzDM2Jo7sSkd4sRDjf1LXNfLg8hwXJPxBq98UhrPv9fzHcMvzfBzkbxipRM2SGU9y9gKMXK2YsfKqguKJW3N2"
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
