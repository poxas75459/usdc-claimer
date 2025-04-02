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
    "v4PJRq4j6opcYJQG2esLz1tVygWnnESTQ8FN8Fpzc1BpWN4SRpcch9guzaEiBMkjSpWYH4pRuAdugsdUSbeE42X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNAtcv5cBwobBYEGHhUcabm9JRveibHSDJGBLuueodkv9bCEpfSPgH9WWocgystSRBzpvgbZ9ELCuhFo8gi7PUP",
  "key1": "3z18mFpgTDsVo8Pp5CWLgLMaJW4uQMxTz4b6rxBpkjpzzZSbC6HBYBjrr9G2pdKWy5Q9w1e7tmHegNv21KMMwccb",
  "key2": "3zY5FKDHkRsaM8f13mXPCXKcnvY92TRCfY7DUhdAsuBUy7HSELKqnWA2MU2cmeLFACqeMuTjzpQCMjH8BMwi5gmo",
  "key3": "honXWkZHMR7n4AqCnF929pvQRWX238HzqQo5MvzUMr2X6tu3yboM2KvE9NHXG84yN25VYgoYaeJFwsnZ1ZQecUq",
  "key4": "haPXNwzqkuXnNo5GdDXiKzKmuJKgofxYs6QobajcBY2ENnxPLKocgtgxXWnyvnPbSznykGz6sHeipPeSA8YB3eg",
  "key5": "35QwTjoAFXZ13yGD9ZSsjtQgUn9bLzfBPfja3QQhQFRbE6GNqFkDNofLcwWffgLAjLDisNevhcfN38yAmHCoyD8F",
  "key6": "Jcfirnk5isN3GNtzFEGeaQ7SaAoaJnzhXrZaroFuAPDiMabAzkQt9VjQKSawAuYUwTu2ArwBrRfEg5kq1A9Xzwa",
  "key7": "4uM2tbNTzPWFGQY3xWjcvSKtgCFuucVQKhj6bNnX35QLJiZjNaLVYVeqqYUNPTxNUcSWxJza9XzPgHVWW4jpLwup",
  "key8": "5S6uHXF7KoVamd1tQpSVTv24frdRmBfwgNT8BcjcLfEaWLW4garqHFj6WtYEftnm4hqEDWKfY29LndRBT4Hf8dE7",
  "key9": "4QLX5Z71b5eSLihPePPkRuhhU1XmVzpSEx3usfDvEJHqCbcYL8dNAsnJ11BwEgG378y9v6NLUuV4BPvirUnWQWzH",
  "key10": "4yjKjoT6RMjChpkWrmGBimZHLe9F5YvnkmSucP7RQRFmcgXvAHkQ6UwW2ZjuGVZy3uJ9BYukf7dYt1xE9nG8nT7T",
  "key11": "4Z7HsBLvcjemBzoEqLuT3sbqYxA4bqrUDsc5dMRC4k8U2FLYCGGhGftsPpPbWWcvXXEzrUUzr2AMeybeNy5cB1WS",
  "key12": "4BG7QPwocXqx4WYzVrpGVHawBXjuMMFiskw9iSCkNMR2wzMGpLaz7Kv2f6jF3DkYL4bypkbpP86TRYBavPDkbfoe",
  "key13": "51xGsTCxGtTMbxtSxbQys9dDghM1bqRZuViNgMH9Lq9HfmpzaBdkDnYcuZCYAy5rixuMz16pu7D7aHRoAjwEEKF5",
  "key14": "4pLKEGo1w1RPVt2gGrj8QNFc8VEAfoVW7u8jN5ZMohfPkpv8kAr86yNvtRvFmDNueSkHa1NtqBZFmsehF9XiA9KT",
  "key15": "5PTRJJh6adwJw4RbGCDnWZDcjyESVqovb9AMJzuXMGYdL2JbBrtFqugp2RJUK22DFeLBzmgdcDXMHjmCyNMfpJpb",
  "key16": "3CNYAzph6L9cyzEm7hj3jjZPnixvZ44WmNXKUa5Th48be77sFEQDibkk6yjg2ZF2Ha2kQMMv6YajCNK5oF18u8wS",
  "key17": "3RJt4PdeDyrspaWVB2fhWUw6RLjkKHdyrQ88LYBaqoxPwyWxsx3Unff3x6yzsNbT1Pkm8CYaXtXv3WSRJA9TLSxi",
  "key18": "2BTGsQiryXAAdt6ULadotiv5u9uSnGSVxn5UXpmCqKeBTARnMnaYEYnE7c1siihTDE4VnHM2xbsBWpMbtoV16ntm",
  "key19": "BwT1sHqMT6NEavC4dqrQSu17AXSWtba7EQJQKU3DGi6c9NGuztdBTRhshbLjj13XUwZf5rFAXpWwLHZVzZ3BKN4",
  "key20": "3xtxCv4PaNV2txeCigjb4w1kN3FtvAZ3BFp7vAULAYAtJ5Xu1hTFazcXfv8o3pmceFTvpBQyovWY1qjG228XcoWi",
  "key21": "27rB3tmrkWSvDmx5U519dnumbk895UvVA5xcSJYFn52X7Ex5UAXWqUxXAaBkviJU4beVZzWoPcJDtEUXtebVuiMo",
  "key22": "3HuFPma1dYBwqox2u3STQfM2cVuUgpzSisXxK577NSYmF1P2M8JSH4RpTrWFeNHDo7np11kY9iRzHPCRXQsTvukH",
  "key23": "5XaMu9aDYpH9aCYKpj8RfEAXsHQjccN74rmM8CJNDLcSKiPSL1FgDBzH48CaMfMH4Fo6eZy7LFVxkDr7CJdcRkJz",
  "key24": "2g9XKxVNrV9FanZfnhbJeffCz87TpiQrorotGYzYQ64tDU9yqdKEkwM9knksneC14dLGkYkteABJfHTiJhPwb1fh",
  "key25": "4VTgcByF5aDoa7B2G5bq6JD2NVWuNHhx3kwnrWjqz2sKSdaDtrW5w6a3gFLKgzjGm2HVVoXQVEayAcFx44KU7idE",
  "key26": "1NuPqsKiUsWYb2ZmhMCtv8Rd7nspEyccMC6WG6NqYNAguRKX8bhjSF3wdKuMomo7pi22N1d5NZ2mStrooJdRYRw",
  "key27": "5TUfQSEUUSLJ7yLKXDo5qRbdXpaNaM7djsW1iHzZeha5bTpdJFNAatVFpfJMEVgj4RdsXsz1cR1UtztgAYmNBTy2",
  "key28": "5mbeVaeoeiEzmX6S5YMkwM9MALsDZEQczgidyZqiY2zw4Txfbs7MgMkAGnu9szGAgtFFD2Vq1GnLdKs5RYTb4GGy",
  "key29": "2jQqshGNVMWQssGKHoxWvCnKSnQFz3qsHbrEwMS2akbgHcLYLoV2HaQQYmZF5yqHkFmR33q81ETqRYKod4aeTkeh",
  "key30": "4Zxwo6udTYbn2PPtWd1cjpiw4xKte8yaV3JhHM4g7n6iyHXpReWQGQBdQWxhQsdwEbM9T27UHhhYnZZVbUNVkGHz"
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
