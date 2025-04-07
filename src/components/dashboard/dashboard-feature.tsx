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
    "J1w42xjrQmywWKnDCfHLvgDYtEi76HBzFyuXK86HFRK5rHmEp2oTQfPdz3try1GhS3rMNbHSKSa7aSeq6D7jnXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJk79RgBmjDJyBT1iAd3BquET4J216mNUgNjVSpBRXuicmjS7X2cE19MxybtGh1qD72PNBsd2Avb9cdFxEbW3tA",
  "key1": "4HiB85BYkQHsr2XkUC5edaeyJoeYTLsb3ALfRJ6acLmSJ2qBhGb6fxoxbPoPuJgaZ9nxf4puGpX121sUSmwY3ckP",
  "key2": "2bk1GZqph4WwR7MTgetR5AwFcjk9vC3Y33J1FduWGUM57Q4eS1j1vT5jKYmo5c2Ka6A9Mh7ZsmqRZTGwfHtJgSdk",
  "key3": "5HSd8cM6KP5YZuJoDPgrDKCUWfEEEVu5ekD1JMKK325A3CjJRR3ZouTnNHSKstmH5JGW9mwjsqJKr8o6rq6fWo5D",
  "key4": "W5iaXizCSJjSNBDz4GFKW9r46qJTeJM3FfdAfYhUre9RxYPwmXWzgVVuuzsUbfmthCqow27ueb19fWYdhrN9Y6h",
  "key5": "3exDv2qdUos31bQoCYEzQ3cDNMDyp68ryGqPhGHbk1TMyHDkuBVJSNwheXadBrNTmYCaQo3M29Xj1F7LxttXY74F",
  "key6": "YYhEAQnBKrP9y4ZYmfWhaLf4b25MBjtudkZVH1427hXKzqZRtvL3M1ewzjXTNeFv1EtByaMHa2D36zmFxsuLVff",
  "key7": "4995nbof3SmpBdDcDmzDXR9EiRQxLxk6xhCG1v7SQjPrE2qyDtub78CiQe1cCeirMZrq3ycUa15yJ9P9B76WmmU4",
  "key8": "36yYsZ4ukvpA3MfN6JWS2ToqEGxp2GG3qdAtpKqSJ4FyEY9boffmpjNbuMoQXo49EhcKfUXzVFNXezaDZwswBsCT",
  "key9": "2ELtzViEmjix9dHyDwzwxWMnqPJMJzhnnERJwzywpba9C5s7YSUTeJRNMoxreMQnWGAM4N4hPygtuBTHcs1s8DLG",
  "key10": "35p1W9uyRvofGvowsuoT41qo1rQDfsPk4VzYVTy48kg9wRWrFydboD1Tk1YfDFBQEBUbEssacBRKmA88XiJA6c1P",
  "key11": "4WCrqSM4xJmP3iJEpdF3FWw1tstGQR6iYhGi7B1KhUe4H4ctDGgjEq1eUEm1S7tbnVgM8bQHUdDUwEVB43Dj899",
  "key12": "qhYMnn1eoQegoXJnkgKv5yxcBxVMdKoDo2QpAqxczShpMLgaNC5s8q3HZcREkvog1teTbb6RspPBDdLqdNUUk1T",
  "key13": "3PNxVB7KZ8XSKWGhVVeRYT9xBpTCCLbro6ddsesdbiW5tPebcDMz1ySQeZxHk91TyFMK4EAPVdEXkaWsTYSGmgLu",
  "key14": "29CvGEGH9RWrJUgQvc2Wa342esmY5N2m6oDrGEMHzKVQYEbjHWyaLRKvSv8f6Q4YN58tDVqxshoAJRBEkTWJgwK2",
  "key15": "3xXetedNKWRecYp51akfewovVuy1vznPRK8qbSg2NKjLvJiqAsNVKZtpog55qkgVDfPsNJXGTUT8Zj4u6ATdGjvK",
  "key16": "39fiyuGeQiViUaBAoZAzdxb9GuZennCFh8azed8xiJEqt4LCK2HwGLXcdDBVx58L9axFgiJKSrWd9LYHjGnoLVHm",
  "key17": "8x9wsn8dtDtNFn7baAMHJUvPs4X12G2ipgP6mVCyNjDT4H8Empob1SQeKJf2xDRMf8x2Q8Tum7bneG13VMHMXC5",
  "key18": "BKLDLpyCcvjxjXNy4z1WpnjbpyhuWrE3TKXdxnz6skqYxqe2TLCMfGSq2TfsAJ9j1euTdi2Avx1rubUXB9xfyF7",
  "key19": "4Rvgz3aSDpNXFTYC5Uwb4N7q8SkJRLRqHFe53rezEd5iWPA9DTH4EeCsnDjEUNYRpue85X9iKiFeof5ZTq3DsKJT",
  "key20": "5XJCbqqnZfD7pfZ2S8sx2PPfDuqCLrVWEm3Ny3iW6Wp6apAt7VrFwZDk11UknYGPnDad2kRKMVD7RuBeHXKT1K9D",
  "key21": "5H2kgNB98rCzfm3Gk4b7pDRyn1pWSeD1vW1LzznPCzRFgAjMAvDCaBVjpWaTnTbox8Vnk81WhzRcoBLhKudia9Mc",
  "key22": "4tcrGwbZUusZJTH6An3Rg63X8fmzVX1xRUCmSpyFN9SmipkVeNQ3uoRejvC7DUMh4XApZgqeVgPGD5MSckDnfW35",
  "key23": "23vtaFzFirdY2vRiztVdoFdM7mz9CdyBxHmtpba4PKReEJ3JxYVLwmLiUMUjGV9jqgDqAuSHL4GK3ZaGh3u4piK7",
  "key24": "3w4Edr4Ac2adz2nRTpknCEr6BoTLcGk8zt6krXXGeM2VCKvuznM3dueBpqUPS4d1hrYMubKFuUTBZXQC24XK2Gt2",
  "key25": "4aGZWcpSNF1BQcTxUcpvBKKVv3BmTQkrLnHHGvhjY9qLbDbgitLFDE1zkKQgNtEsZf44U3CiuY9rMGRjA9BMN1TB",
  "key26": "28Zwbf8r1hQvg3aHMtn8L67dRjC4rzpyq7Q8gVnWaWNXRaCXuN3zxWA8xFtUhQDk4Ympomsh7ww4e38vbUU34KC1",
  "key27": "3P2SXJWGHW6dsrBRY2wvFU32cugyCJT8KuK73oHP2QvQ6QTSVTxqUNEDzp1BPAodENQcDo62YMdbhYyByzpu7ZJq",
  "key28": "EJqa1oXYm4csCU2YC9DuV9uYc85fyCi3MrTSRHGXmdNDKnFinhUXgrWP21Y64jPRabKFbJ7JPV9MywKYeC2JQpL",
  "key29": "41AUCyDRM2LFeDb58rWLyM9VCgC5E3fZnHmXVTotvvEaph2FPCmFHqmyoAgMGs14AJGyKFcwLvNvMcPNMp3bYW5b",
  "key30": "2BXCkiPHH6AN7kbpogUqBQNCDYueMFfW3AXMhTBGCmTuSaEqznFtYt2uMYxBPxMULSsJ1aVSnzwaraqRGjpJM4oV",
  "key31": "2Dpe1wrhBXVZbR1VrLiHZPxjKkK3MZiNSer3mffrCfiiR6EmGyXaz57VEa9a6JacdMVt7Qzf97xWhRab19f68p1p",
  "key32": "4sNvC9sndCoFR1Uny4JvgZfrV9YT7e6XdQEgBpQPueSmywj1V791KHj2Um4nZFuhLDjjvQjt2A6gTUiCCEFo1yFy",
  "key33": "3FsPXExjF7e8ttGUVs8cCxbZLZAUBqLj8pfbFJZRa38uzLoN68UWtYqN1g4KGZsX8DPKsEcBaYixffgXbvph3G16",
  "key34": "78Q4jkrLTgPbhoAsXacH7NsTLzNzVUNEauCvtBEVuVgvwGfzRh4d17DCcWt9TGjvgmA2BLe43PzntccfFBAMKog",
  "key35": "2LNZimLnHJehS8rE2ux97AeTdKvqDLcpkyA8N5ub3doY5pw9M9GBcZojk41tFh76caN8KqhAfAu4Bj5AESwkz2qr"
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
