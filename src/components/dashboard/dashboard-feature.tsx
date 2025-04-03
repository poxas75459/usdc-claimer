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
    "dqaNLT47vNxBV1QQ4JxWLQXv1PgGMLw4w9uFJEYURjPHL428LFS8m4Fjq38QmUrTmFHp7K5fQU8iNKurpDF3nLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2uMz73C9BGPMvVVZMokQZRP6kctFjwhgCQpkoGGtdT2Li6s3Hx2M58psDJF7zJS6j8dLeKjvgfS21xHcERf1y9",
  "key1": "2q19enKvXyFjGC4bBiZRsMBnU36h61sqwmFYcmHt9rcimxePhiNTaaLMdi28yhZLDWSUrNsRbtWDws4iUPDDnPHu",
  "key2": "3NiaheKEdDFigQfeCLK9KXWq3kC37vQbvBB1QZeWm4BGsKcjb9Re6e65xyqLfbSn2nuhisBykmXPd3zTSgKWV5aD",
  "key3": "4Vfdt51B1SEvoGB5mEkhMuMCRBBbN5REr6T4RhzX6yGYV5jC6BYt6ztWfTVdzF9iP9RqH3f6jD2pWVYBLeUfkh8s",
  "key4": "67fcK4wrsX9ARkVaHeKMqkktwUtywPRzuaoek128U4o3WJ4kZjZxrHt97dgMAaMju9NfxT52PNPUHLTD6Z3x1aRn",
  "key5": "2gcjYfmqGrEpk2Q5YHxKRCt4vzQLLbL8w6HBSKUPzw5ApDiUSs7s8cBZAB4bhpwiYMKsM47Ygy7xVKU8HDF3hVSM",
  "key6": "3KPoK91hgpcK7e2CxhERkWXMVS1Ndy6muHXz1MRz54kur9qfAuQ4a3FPf7oAfvBdWRPdPKHTLBFm2xKXbumN6b5s",
  "key7": "4V5Uwdrekr2hrtJ5dezVBnHnNi8XjG4BUiuUqigkpPUrbUt4ZWgezy35YZbU9qTXguESCw5BhjcUFfDagnQ9Pf4b",
  "key8": "wbBxxZYLHHkrw5DPYrPT5oewwbpZrbQsSZShFbShFyWEvbiYk58aZadVUqszj1xCChazT3zh7ThRM1QcRjwXHo4",
  "key9": "5BNXayJixhLkpzpWhbdabxataKsEphb3uHJhkjdezj6XoHcfc8QprHHzqBMieeyKuvQM7cNHVW7LDG9fErMgzmVJ",
  "key10": "5bHfA44zSAAw7TX22JtLzANAGLD2VinGQ2YyoVjfYUitNiykcywywQLCnzQJJzeb6oDRaYsmk3Yu3ZDgWDxCfuFb",
  "key11": "2HeGXNh3eYeuk49m9b6yQBneq42KM3tDGWJN6Rku5EhAYs7Mz4v5ydjLR56PCn3uf9KoTmEUWoCgAhdPLJDzXdp4",
  "key12": "2mBgcN1jngkjVCzDEAfSR17eVBq3qd57P8RkqXVA96ram7sC7jR9w57xB8XjhihGAKRMPvcj36S2hBPeMaYGv792",
  "key13": "2E7B681XLg6MDGp3vfW23qUqsEdFUSSDoc8TfTfVFFH8xmeteukhrVf9DpVyvEDKYQ9sutFMJadXMxjkH7eBZaQK",
  "key14": "3sJSPJffKFfCPA6shpUygqbrcSbCJjoK4No9rA2d55R9DGoErnFaZX1oAsu5kttW2Tefh7MtMW4pxdaM7k4npZEV",
  "key15": "5fw95jHBwRBJYviuw3k31DEe8dcpwozw6p2c6mrbhAHwFF7BndTUUzxvNQbm1MSLQ9EvyWaXFYtWptKDJtfD9UMY",
  "key16": "Na5qBG9hxmf8MC8RezxuEnRFFe12e5Ujhe2oJk5QuH1Vqi6eKFpNZF8vnrC3QAaxbab8cyRWWaQ8nNNwpMR6Pok",
  "key17": "39Uf7qqokJJL28L8VBhkeSjSfQ4SSAgsGXVv8BJ1ZRVcNo6gugVohJ6pua4mWAo885jmcXKkuQsAuLir7CkFZiYB",
  "key18": "MmVhftCBLA1DoK5aNPE8Tgpuj6rL6U2NvYGRWbWXwXjg9DmEHq1fkEYjYg8iNFPW23nRBpX8iE3Ez5R6TJbHMUB",
  "key19": "39LuoCRtBv2i26aX5GUyZUiPLL27LLwTNCfTcnwp3wwFtwvB77BoB8F4Ab5cGnxG1hn7pyRPyjsq1dVJ4zgfqypB",
  "key20": "5Ly44EYfxDEfoxsY1Ha147qoTZmJ5dL3MyuuEYSitDeq5noBLo6Wvx9ULpTB4Vu9Q1Cn8Danp2jfK7hi2FbcZ7Wn",
  "key21": "3waGCCgjKgWdXAcUJgR8pRjM7WZxBwtjpsr7Sped3iqzcS4twARGYFq7TE8NeGvuSQDpQSXDRyDoVa7HBF36AFLh",
  "key22": "4zhQ9WRz6xB9RDz3HcRnSDGYnNTWQydeN3ii4xSSVyw7BZNej8Ybw9Jx9uAnYZZfwYFnqn7MMoVPexwAEZ19ntwm",
  "key23": "3RdxZybFNBRpZD3FcfP5fCdsJBAAkkG11V9Qayifyyb9tpAcPkYmEeU7cDS6LZFPBBBz7SVZmLPTdZ7HHRFCsNKg",
  "key24": "25DWAqAF5ejJpt82wHESWVsWzZWQ7FKT7QdYkvGtMqATT3hk1ouonzhpabv6ajhptHttVvAyP3x9Cwn6XcttZo16",
  "key25": "ZJcsMSmevXGNkfirZtAyvqkp2TDSuzMigAioG1qW4pkxo68YfVXWwQKpcDtugz1hmi2gYSHp9cavdpHXcq6WGQ5",
  "key26": "4gTGCY4fUUQCx5BMihqwkPbX3YrcqG77ysYJMACL5AvgkVw7aJTrH9mpVGpcHHUsM2mWmprr8GAUu6GvRXQqThKE",
  "key27": "35wkNZdWGW1F9fKLHj2wReAVV2m4y1zKyeHhcjiEkeNfUwhu4k1YjoSE4En21f6xBbg4ePr5g2LJ9891CH1E7VHK",
  "key28": "2GL3h2KczCqrUkPSDvWX6j1cXeTym5PVK6Mffc6HRgZhMahNqD5qew32NsS5NLyaS2SLemQCjQGQj1pe1B4a5V2w",
  "key29": "y5BtwSqfKXrJQ5TNCnoYmoa6YdocteamKxBkjdNziEAuZ66bdRWsTisqM1oKQHZ7PgEQ4wtWe1gRUxBrBqNDHQy",
  "key30": "5WFcFYFErWpiZxGwRRr8r1p5oH5zJQbbSZ5u9V6Fy3Jznsxn64QZGzPbxRyHnLSngUm4rcZPjz6D9TienQvhhrRd",
  "key31": "3rqPdd6rQuJexN6xY4qDNn752WM2M5qKbEFhw96wLfNT7UkvtswavqodChhbg2uhrSJGmQYkhMutrSZPH27rWTdj",
  "key32": "3nGnoEmobAUgYnjGQzKz3Cz3vxLBTFkZbTWtyUY2Pwd2JbFpKR4vJRHGX9CMMv5ipNXDhu369rnUC2R5AtDFc1m",
  "key33": "4udiwHP2dQYJHgDWKcHhTBd4wxPQsbR1NH3w6dDESdfskKaedkFvr3tbka7WD8qXXvT4r7ddpvX22wX2BQAc4XS3",
  "key34": "4sfpxU9GBz6t8Qvo4Y69Kj5EkzygfuiXHcvVik68zFzNxTAQcREpr7hKYWXuYMdeWXqvTnrjMkCPFqtaRwz8NWVm",
  "key35": "4MX5ibmGVXoUkiaRqwQsp7fXVz9t8LBbRdBVXo9M8UFVS76pKZrqEnapw7J3xBbynkhxkPJvPRwfqCe1deKgkapn",
  "key36": "4Px1wfG3HohPrX4bVQMMdwAZBmxkYhHC6KPw4YLXsZwdGPQsiD2XtaMGj1u12m6sA5CsFdJnHUtNvM1LQcgoC93n"
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
