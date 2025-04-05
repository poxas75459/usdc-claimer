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
    "4nJf2oDwGQ4tJ7myARjEfqdBoG6jDLf7ERcGUMCEEsVkh8E2jYnS4sMHds3MRBEWRQpd8fnnUkzB5yNpaCS6qa6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h1qZrA2f8N4dz8wAVm79T36KsDemMrnxzYzLW446Td6Nxw4Y2znBY9oUdXwxpZphx76ZazutoXMr3g1iYn2tZ6y",
  "key1": "3yV312MT27FXUT6mAkWzhFi8g1Roh1RMDHWpbFhFCzuqKE6c6ksCNwHGPqg3dU56gRWyXdiyxv9nd6JnUdomuN48",
  "key2": "4A4bL928NEJAZjTigF5i8P4HKUdby3TK1UqtJGjUaiwt43vPQY1iPgJxSR28mvQ9MzRBAKcpNBhLzUCC7dg8zgAs",
  "key3": "5vkJKpGzDnqreaNYggJ9wYtngyFdG9BVqy2p6hNqAt1bMesWX65ccQ2Z8y1zGcGVU9vufHA9NpF5MWwwQaGCLrst",
  "key4": "2YdnnuFCEKsr6ahdDktVq83z1FfXM9oFacJnP2eiH7D6AxAtEFQT7RpTxboWsWTvQtR8e3LWQfaoNsR4o7qrPhTm",
  "key5": "37oVgz1jUZTXoka34BABUiw2bL5mUDamMVSxfHneztCBQXmGgbkjPs5cNq3CC3NtiRJZycVfGCSK7NaYLqsVKc7i",
  "key6": "3SXaVKa6kxH1Sy9U1PdEHTaYrqy1hNvmR7LZvQmsCbj6hxk4SU9zrqLQRzRFiLNyr7muHYHNTLf1XbuyP6PrtaDC",
  "key7": "52cXaqQoz4CsFF3fbKyA9NfEmgnkCYXde8KRPdQrritEoMBJmHND4C6DQEokRowjCzcAErJeYCexCK2nEG3VyaaJ",
  "key8": "45qyZqCpMQaH6ALrtEoioz9P41kxek7XD2Gau88ztdP1yKHxhDXkY2TkKGbRrSgTgTqR6aKGPSnhL939EVSvmG5g",
  "key9": "4jsEg9ypUWw4FJbDj5sJSUKAsnAYa7wj5GsSHzsJJfUGb9ZrZC4btECbok2QryrGLVaNQSSnkuKWfnASxfqdcKpg",
  "key10": "2fNRPhfMrmrpJBDQkNwbK4Frh7DhLCq77nRvoSdLBjphNLQCthoNveCs7UWoYbz8p7tT3XwC94wGrhaRvXUevH6k",
  "key11": "zL69zV7boXjkjcfPVsFhwm52MsRcST1Yx1bGi7BiTjaX3s9HXHPJjGfj1MhdMZ4xKazvMPQS7L1ZiJDG97wUAXt",
  "key12": "5zEimQC21TEH5vTfv5WmAnfmhL9ZBx5SFQS7oyM1sR4cchvFeDy4m3pNVPqK1TTniWcdZ9xyDDgLa6UicY5geveg",
  "key13": "jcuixt36isj7dmwvdZEa7A3xfVdbUU9uJCUGtMRzTupc7ZEUYrYSf14bqE9JLx9QBe1E6GCmWcQmXjrHMjCQk4b",
  "key14": "cMadf5fE4DW1Z1yspmNnNnWVBkWHrBMEf5QncRXTCcyPFjHND6Do5WH9T4WveXN1TweEi5hFX1DFXNHZU6sR7th",
  "key15": "5mHiUcEd6pWUyizA3c8HqVpq558yuBXWBbF9edMepay82Y6SxYBWGptdv9LaSSfKkM9vXJa3rViYQ56ivwLdbbcQ",
  "key16": "2B9QGaTvDk5iEaxvEviMQLrWXX8ejhNY695ywVt8cL3beJxm2sqjkyFbnzQXvt2hKmR1SjdsmXKk7BmkmRVxMiBB",
  "key17": "5rRodHt5zAwaU53cPvHozingavnzeW7jjqyEmZiqxg22mL4Xxi6pn6t8KZS3f14Ht8Rjv6vBEPBGpddfEisqszUL",
  "key18": "4WTcdLoWXG1CwDmTMocew7RW3D4e1EbamPvchsnFnMdt6E6rCCzGmHunFW1gbJdgaPTmDe1P1F6ioo5avdzDKmHC",
  "key19": "5oXFKEdNdHukVNqoKf4fCkJ6Bw3os7qHxviQJAGjjDLvJ22usjkUoFP4KccChstXHwQ1qHfJWJpS265FaxQSXpwi",
  "key20": "5zmVXcoW2sMwhX38CxsBF6vX8jysh3G6WuuUgXXupbHjPGat51p3hkb2A85jnLhjmZ5P2Sscji6XygNK7wCeiuS6",
  "key21": "3ApZi6zwukxR3n7dqX4iDjocSbb9XLd8tBpCx3zAHrMqGkqXVwB5LWyexeea8EtpSyYcpcdDoQYcNf3eVm5i8uaz",
  "key22": "528TQyoTzemQgEgNQoxzuAgR4UzzbtDDKzix7Ct8FwyYhBnVVAgxoPRSoRJ5qzCJUfbuu2BYaSKaM33vxuWNnvQW",
  "key23": "37U6GLYAuFNX75YkqoEmrw6HdhuJKSx1KQXspcM96DVJ7vtcPUXtDEsTRcpmuQJzFZTYWFpfXrn4J5hcZ7BSdHrC",
  "key24": "4vPUV3DuzzsQ7scjR2WxFuGsLirm71KXK59AZs5JErLoamqvSynBERAJ5SBUHWPsLgFfn4UC4V8syV4kwhmuP96D",
  "key25": "4DWMGSmHaZmEfvCVXSQBEN8ZuuxxvbrWuQ4znPtxfvvV1eSpYiTjU46qVEBpZ9KKXEZsRHmpjbWrLox6xfcZmaXs"
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
