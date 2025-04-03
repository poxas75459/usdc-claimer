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
    "2hEp6UK2QRcB7vhgSatdNDkFpcKP8SfPDKd4fbtKqz1QFZoHgcBsKXfvvKoLxVBa8hMcwgxNrVzZX7TF66jVtYkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47cMB97SmVkkwrXUUnqaodrxjzUGCndxVQJVWsY11dDUpafMJzcveZa7sc7o7LPupJxEPq1ibjY8d5PwJipUq5mj",
  "key1": "2UGbHKdiyupYnzGYQRKSHbNqPChZGhAyiyHBFuzy6XC55DcZoKJVXHahRUeNZ9mTTv4bqaheUzwo2rZ22vkhTSbN",
  "key2": "4ArodmD3SU7bQ6RcAFrfME3XywNkxPfCfYhx8Au5M2HGSYzkWaDQN6nzDrJqire1BEShmvLnwTuvwDqcPhBGwqep",
  "key3": "5c35s4H84Ntk7Usvgn9YtNAWCPyJ3hmuL7a4W4FJotNrgKLyF68GmnWRzCYYcZ1WkuZuUjj4Wgqbbfzx7XKJBnFB",
  "key4": "4p6P9DaKn59wMim5hN4xBrU4dJGPNHa9LPmyLCk7QQkzHNQrUiQKUHVFVVz1JX52gedtPdv3WrcJ9KeHFkmGXVUs",
  "key5": "3SkzSsFTsM3aaKyq1dCz17uL16owTkzwX17k99uCj1em9xEhc8fw1cLn61pYUMk3VgvmX4r4gs5CMaVeJFPW351u",
  "key6": "4KvQrsyYBFCkRAcbptkhZSggrvCnhZxDw5v2TqCHttoP9pHBmYfifA7YpZTYTMvyunYdFqTGUe6qXbZi1uHEjXUA",
  "key7": "41skD1EdN4U5QvteTYAJd5jAWZ8VWYtmS37dS4SzdxnjSYJMHSFi892jXdPLtKm6ueUaqZT5AGMuHMLhVdsbJtDf",
  "key8": "536Us7zyXB1EbUJHwht1DxS35ZViKr1D76Znqa2gozEksmM9eb5KjbtcECDFJQ6ZXxNMjNuqZ3rzAQ5uUKnmSerJ",
  "key9": "2YqCxA7vrDvfqM9hu1YxR24PX2gzYF3Pp3g845fiH6vgEm9Eu6TrhcC4DcCdZSVvzHCp5JiAFURk88WFMrLfW2Yp",
  "key10": "3Hkyqyv4ecJeAc22XRjFsPd8yCMQSzgfMDHtJibXMS5yi4TLiUQczquC6R5ashRQsEDMNX8etTtsqsgmipu8vcN3",
  "key11": "KFcdesJutmLnEH41EaKRo8ew4PVYDwcgwFoBQ6vS3m5L6bx7nZTPi62K9iCTHzpce9EQoVTiZYga2QcukmV97zX",
  "key12": "22PJiwHcG82JxE5NZbARsR9P2bqRmUcoUNArBCxMCejuQxA5hw1poKy96Hy6k72KuDTyi5EAMSG9BVcUd9qaN2kk",
  "key13": "2r4L8JwHgWT4PwaASQBHXjzvHvX4F9iB5QmfunHgT1dLp9jP2Fi6TKWgy1gdzVKTWkog3iGjcj7e9KjzfPG8SGLE",
  "key14": "QZcDqaiSh1dDBYxZnEXXBoWePw8aPkC5EbXKNHJ9TP4PATFyhr8dzMEP7LNKXB7UkdU69ZLeyHpakLoBfSUcbCH",
  "key15": "4rax2eC75CW7xBA6SpNsBRifgSU9BczV1jgp1cyg5fgBYYZCUGK7f55giGeaVdH2umsBxSFcZpeioLP3aSM84fvm",
  "key16": "3P8fzwn6Dn8i5BofJsPg27PWNh4JQgatDibvr4GSE8aQX8MVuWxUAeabS5EW6KRAwQK9AVRYvLtiPyefYqNUFPu4",
  "key17": "2nafjsDQyNfCqWKNvvPo2QgYSyN7mjhbzPydsotBCBjPhszZxdfhT8nZmjWZ6KeZdd5bmRCRSN6ReSKpEfczVuF3",
  "key18": "MbYdaVgBHsvb6VfZTh6LGd93oqHnXMwCpwBjzrkP2X7vFjPHzmgoXT6B2FBa2C5boemDvXYqrhr6rGUFDAjA4Dz",
  "key19": "5RRma8jybH6Fr3yHmLNrnDnKc5vV2HVe9XxwVZJSPc6WSkFbTehg9poQogdiUH9DVat29fxMyBLykFaDQGzZCYP4",
  "key20": "3FwJp3YWBUwy7YoogRaLBMrDvcA4cZDEUXaWqyGSS5sJUq1uALVZpFXuEZ4s3ABXnne7ejZiqXUu5VFVPxh7mZ7e",
  "key21": "2hYDVRzgy64GDwfLmEMdreNnZSKEZ5w9ykp8RjVawfMLPheVyVptQ3vApL48MAxtP5rjJVPFAVbZojrJV2FxTPxz",
  "key22": "65UvcfLVbNb81Bojon5Knd2RzxSroJuSfaeSKbjRYhjddjWRKoQ3Why6HpSPj2HAUPqK6AtMQJezyLjepwAXYeMq",
  "key23": "2cjqBsMZSjXprp6zrE7u31FHCbWofAvsyZzghRhNLxV6VGxnPBm9iNeqrywc8SqQ8cZNf4M1XLiuTooLWGW3VQgg",
  "key24": "5WGUeVhxnyu3M2v5Rggo4xaej2cyCsW2P1ESpc5bEhgJgEBp89EBPxihqddPzQXsWxmBGqfCgh8tLYaAoPG8hoPb",
  "key25": "3JExvw1G7w1mLp8fNGGZRZo5ZEDCG9MEgt7qDaKsg8ouw8EEJuf9tVz7X1RaiXTnp3hM1pfLDAvFWqKAnPtrxmib",
  "key26": "43TtshrpHxq3TKNMtxKWYDkFEkQ2mFEvrW2zJQd3XBgGTY718wmnD4J9HAUPS8343YwdVCn38QFmmKqt8tsmSdm8",
  "key27": "3XQ9RA3yyjLyUMiRdFzjiegkAmyUoHWJkHq3GA5DAiviodgtd8eQHUrExTALmWB1zZR8A5YHBKBKa2my6RDcvgdQ",
  "key28": "3nfQ1B2XRZ6goxoogMdGHqpZoyYawWzkxmXYcnxCRXbDgW1LeACshzfkviDQbDxbUgvUDn3EWQe5iQjyG8Z37WP9",
  "key29": "5qNDP4nC1HsaysV3hXRQg6MVuMwJNL7xYMZQJXfijMbqUgPYbbhKqB3UUVRBF1WEz3ndEVCBfBDcUA7PopHzaEkw",
  "key30": "2xJ81miKjuncJVXkvVa6PoYLn1vwmp6LNmtgBi4tkfNaH9X15cc2xEip7Gvhso5LBQkmbDkghybavd9zDAVEfFMQ",
  "key31": "2AiJAvcL1uvpVmt98HQmGwH1jwE76wiYtpRD1JkunTJ2bPk2BRnQ8jUHRLGLarG2aiZ4LvGSyftg9Noo8mUcLNnw",
  "key32": "2y1ZeVM63X5LsaXxCVjoUrvWLDKQTUTafF5HGPtSiv4YbMxX8fdFRgyvibe2bCgv7ym9cQzpKHixU8gEggSShVNS",
  "key33": "4aUPdX3EUMa1N2bMe6w8CjHD39cnh78BC38vGXDdVz1j2zaWSQYG3zENgZKEupg1scAijGdk1dHdMEm5m5wjfsk2",
  "key34": "pwGgGkjUCtRwsXDktSnix5q6V9UjdpgHxBQ6cG1LJRXymung5MZcXJbL3EjvnxUbgUU1eygbbLrGVXBZCEGCe6k",
  "key35": "bKwzUDZX3JkEWeU1vdmLuqrpCA6qBKch4XkozaZ7VxFyL3LrZcQw6VGa2Kcc5h3mZ5g5ej8sCgnJw9WTX6gCCDQ",
  "key36": "4YTaXS5taqnHuRkGpgJhpyzQVQLrhQ8dKqrGfB6Be5v7zKc4jkh1shqETQJZGbuDA8C97gMbizERwNiWkdBbPBhE",
  "key37": "5nutnG33y9MrDHfrVBEGxaRz5je19a6xShWoY92a3pbHtKewEDVVpqdAYhYHaA8oapmmGxwGwmBfefy483rRPE65",
  "key38": "5nvQQsjt4F2V71WxfNhCoxhV23mmH7xo6fnQWuCzL571Tk2WQA63jKWSgrMbWrH6vsXoF1wuebauQLv8iSaRsvng",
  "key39": "3i44e68WKsmRtt9mC7WeTLj9EH5RnMTs48GjtQGPQUYA8yS8br9Ki7qpfVTNU4qymDTZo2XkKFWXWBTsTSFKz6er",
  "key40": "4QHcGs4XbrQ38nP3C7DfR1dktmBm49X88amJ2mhLrTEB2TJiUQaN15dZ7EtYia7sovF6eW3xD29gGqgXYo6Kz12j"
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
