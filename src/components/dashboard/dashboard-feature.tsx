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
    "5scHNxnk8uywpfmVqWTXNEwfDpSa3JX9aTY9xYVFVxxJAEviJLqbEB1RP7fooVGWFN8Trkfq6WUqeM8DZUikssT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqoctAZzK6PxRVk8eNtqVavGMqpT6mpoyNu95qTYCD7Xot7G3sEY8o8F44qwRWKPMfDvCommZiHAGcb6wCcWwuX",
  "key1": "3mmYcVoKLFtVAW5yuqT4YALStLfkfWYb8j6shhT9xc8CsXWqaNgpvb5q2pwB33GBFePjChKtjg9JbSC6PuGZPn2v",
  "key2": "2u344jee7JgAVAyZBYak8bMpSJcyMcapmqQQpDnXmYDWa8WGhbdZP9k7E5dgkuVPYn7Fyqr7AVkLzzSM5kofcY83",
  "key3": "49Rfg1fBtuSdvKPzmpiD95oxm6nPDm9s2B1rcH5XsaY4vrPsWJoZxCPfF3SkEdq8E8apc3k9FJkSfkWeTdCNjZdP",
  "key4": "32576gCfdPtvtYydvRhKtMET6pnAAkWiVt8z8MvyNHtNWZxEw9vsn6W4usVBA49UdjtW5YEabA9SqygrNjGK1ck3",
  "key5": "62G5pxk9xaBs9vtepHQDMTxaoV79nR2FzvAM1eGyTuQr7Lv7zEwzhry3PDp3ehTtiHjvAQJxAYQcr1Jp1mzWBw2",
  "key6": "3TE1GepYcMEFnW5YsYjFVT2k33uFLabvHeA89DxsNy1e1Wv6GUo2y6zGpKWwTNxP91gPeQB4u5W9puLLUUGRJGfk",
  "key7": "26kcaXcWkyEfP7tAb9GqJUE1kzATPHc58ohnUnhbVv8knMMuU8Se6dEGLNACkc8ySL8Gtwy217pBNfd9y1TzmM5N",
  "key8": "4Rv3CxXjKZQyVpa2iyGHvXrT2Yr78tVL7k8hKSzij5qD7WSiM3y3dRajaD5N2XfW4P53CuTvhnJHjxqHzf5hWfoL",
  "key9": "4NPAA5PKFis5BtKg4KiRQn3bgjCjUaVzE7SwBx1QDuFTAudnGA2HcxTKTLzcETai11ZwmWhUxHK8kZT6iisWSj59",
  "key10": "2AF51xncmCDHHmLpdnbA8mv5DC3igywY4fyEvMrzPvei5bbhVyPDh8ce85DrpA4AmY53h3fFc3iB7LZJ4AaDK3Vo",
  "key11": "45D1X8FLuSFJs5duT8kBhchnEKhThFqi23xY5vqWEUgNUM1o71xw9e4xEK8ogqj7t2dLbCvzaFdpFBDjmAS5XtZ1",
  "key12": "49BWDMWnj5FhAcRpsUbDXXqv6ozZ9JM7nVQcT928SXhMgvgxYdHtFZQ7d39c8EYLCAfdrPq8hXDDLERawxgVPtr7",
  "key13": "5gESARFv2L8kFq789grmPnWomUmc6CyLEYo81TwPjvssswowmpjdnCU6MrcsRrmMhPtkC6aG9sCMK9sfT47div8t",
  "key14": "3KjwsmjfjF8ccTrH8DxCa9819YyaTBwgpkbqthcgSaRaLXj78Bu17sGuqxQCGKhsEyPQMMBdCvNujtQzdHhHE7LW",
  "key15": "2zCWbKRc9bDpVfA5sh5UWn2eY8W3orj6pKhUxqJGLFsMeV9BhkQvzyuwAXh6593CqRF2RiqnDo6EhnBZh82jhWy8",
  "key16": "4VUcj8TiVWbmLTeSsTgF8EEFVdN9ahRbzoRA8Xtv7YNc4gSkBB5n4QQooRFAzcM9jB11QWtrgUXTAany82Uy7Xeo",
  "key17": "4LjxQ2ptYAV8142MQg82SZb2vVXUgwV86pbXpoRXkrEsMPho8hJhCajzdqYosazsBnCxPV1qmtagWjhUAQ65bA1D",
  "key18": "3H37fjS6mmxt4aKKZreRdJBdScGNNZZRHrGevT44dys1F7ckiWm1nHYrVXpKDMwf5ku77VQq1prqqRQNY557oqSV",
  "key19": "3NWud7z351wwXhLf5EPYXdfHX7KmKgz7KseoPpw6nB8Loq2KVXxh1nfLZHrdA1oEgs6tWQWzwA4L1RryL6FkEvvV",
  "key20": "2W2vcqM1kogd1w6Xy2ijRKsj8iyFG6rxLuWuV9ucihHPfGWpRwTqLtd82SxLHgWBe8DTwiEp3sg8n4inKsPtk2t2",
  "key21": "281xXCwH9VnX4uZTd9mS1kNJ1F8RdYfKFQ5nm7xCpvykk1hrcex5f2r2ib9Zw1tG3jVDBfKcjCMw4shRQizG97Q9",
  "key22": "65B3P4GnpR8RsUD44J1G5VWheuD3Nnqakgm2wFg7EVQNzYTLvsu5a4qPGSgEJsgF58qVDYbXJa4SxxRd95idRJTZ",
  "key23": "VDsUpFb95GVoskUK8gGQigJh4r6zKQMKu829ZkhNW8YzTN1Gw916JvNG585ekXeLoXhwA3xSFYofxRhxt1HAqNy",
  "key24": "348QaFothdeSS7Uynz99LqFPnk5ERphaBDPtnu9S3nm2Pj6NJaxP6eF5xEoozCPpbVNzntcKokfwTcVLpy6u7fV7",
  "key25": "5emS6jE7EQErYNj8sShBoiZb2teamxEBRpvrHdfoyswoABUDUdZj24hF9wDBreHuujzR3cAZZksk9Ck82o8SYhH9",
  "key26": "5s8Jk9iVkegHRtHBDZyPyAHhoSptenLra1PsTCELChvjvYPU7AqS89wMdFubb9vhvZTyCiyfLWTgDqsbiFr6F51d",
  "key27": "5n5ERTE6kRZ3k59no19AwYkVHuJ21d6v9UgMARmd8Vb6xRxS8NGumVJmQV62cn6BsgKTDS2ThpTCm1byByJ3htP9",
  "key28": "5LwDj45YdwUtJN6qtJ5B16JNAgiUag1rTyY2PeJE6EK7WmJ2M97bC64nB3c2Rrkyt1VP9kJvYs7KViW9Zv4ZoUZZ",
  "key29": "SyVENSXez2ZNLCZ4CbUf2bdWjcWtfrH6aJhCPyXjuUPiFkZSNLNmKMoToboPkVkLbEQSTJ5hvD2yDLTAtApTgXg",
  "key30": "3VSR3GMyuEtjEgMdtkHCwyrfPNCMBnhUjD1TFNGuoaEoDFq3SrUa34jxUkmHQtkUBZUhLQf1KQyZ9DXTSbxAp3uD"
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
