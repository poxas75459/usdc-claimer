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
    "4HL3cPmogbCj7YqMWpj6KxW6C87gkdXouxWFviymSPArVE16p3h4g5devMbWeXxJcLgBpUBuomuBvJJ3xDCaXB39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65D3JiYVJ6WCkmeagn71weCJX4Pz5VTtgjbhSd74FgADesGE2M51qPza1VasiAVDuyY6taHdsN4B1XKxTm54BDcw",
  "key1": "52zyNKXtaitjGqVqfAVnwTgznE5TemyYXW6mL6UZx25r9PdfQxNhLp8UoHhbiSUeD82LKbystrUfB4KJHMvhSjv1",
  "key2": "4yFF59onmDkHcGa92yy4uC2A2mtnYbMoX3UUsTNwYzuJ6EzCxxC7UM6R5ReM3g5YBSJw4yNkj5zTYA2HDDshUGGp",
  "key3": "4eMBhCN9ySjY3bxSAteUuDyKevzSL9jCuqt8s29dfk8mm3xvDX4yHwkBsmvZt2GYUqt2sAL4atbuKpoiUgaSkA8",
  "key4": "bCkS6wVN5GrfPnGbRvpMsZEhrBytvLzxi5qVfbEZ9EgYUTqc1KcdWvN3s7XpPAJjpeb7LyNK9a31QqQBednjh8H",
  "key5": "2ta7PxM2A1hg2B5Aka4NpvPM3r1EgFfY3VYnob9kQxk9sy4WaFZxfmDPngKp22LzQYqrrNYTtXB2XDxcwmAwhov7",
  "key6": "2CVxA6ZMA8RpRmUzkyjB16Y6XB58AzDpMdbfeSDUZAAi2XYUVUNDdPpfkSMLrEQLNwNY9MNi5ushBsUzJvpDAMZR",
  "key7": "2yPDMhkPYZYkybMacp1AxPA6LNVZXYrd9JdVyBwRZdtbVkYK1NZBGU3Jc1xaF2Evko6rTnqSWUUTPT5r4S5jVrvp",
  "key8": "2FytKgSkNBmpiWNntStUqmmp5RMDei4kxpd6PF9xCo1TPQ4wHJUe8W9RHtkz37LeHhQqXuhjCXoq6eGRAqfXu5p4",
  "key9": "5yxHXoMpjBTbZiWSyocDZMTfWtkZVvME2LXEpc5AoKCTeSk3tyYEwDHAoS6R5Sj1ERHCn913LrHHRWtNJtJHRyvr",
  "key10": "Ph4qHHaeMLtpt5LibhnpA5UdYu862rqppaE1A9A3K5kEeFVM4XifrnRaV6J1DVrjBq74dixXmKajAzE3T1AjqEY",
  "key11": "41eKtboLkpDEhQYpm74sp27hf3AUonzgUGqQ6ASxkLR2jw7HBHhiUj5GhTyQfnDDuPo2LBZy7TMKh2nsTStUPqns",
  "key12": "4Eor8J3Hrct9SQrajWWdCdW8jFbqXTPhgWTP2jDThDtwPd6tiB26vkpa5DLraHAM15Vt1ULb9RYffeibNARpGqGo",
  "key13": "4ymDPpCHuUJYmKyZXKGCjmWXuiEGAJUa77BHy3XmGaKnEBTefACejZCmGoeX6xHtn4SXcmTXxCY4VPvsZ1JGaQY3",
  "key14": "4Jm86kJPhnRHkmBMXquTw1dVnDqYJczfepY2KoZBJgZeXzhnyB3Q2NbiK2c1S8ko9n7hLUagAPq1CHbtWmD46jQY",
  "key15": "4Qmj7i6w1zDWPNVVKeV99Dk3d36EnrDCqFe6AeCoNnmpJa3VpFC5V36YMxEjWy9Mbb6mJUwW9zn1jyUTWEHQuu9G",
  "key16": "5UHcpdJkecZZ6j2UbUKkbnm8KdMGSHhi75si9mAnquaTTnzey8hX774tmSPmiM6M9HDVVdfuK47duh5XXr9YLFpZ",
  "key17": "36DFhqKHaY836SX7zRfEEbD6fYnGqNRZkc96tU1778HKXitGNqnPQeHfVhed71SBAUgPu9kU2FPW7aqnaYqZFRGT",
  "key18": "5GfpUKKYruvvUWf4yoNR3r5xVKVvJz7dj6x8Jday7x2gupghJUSBdnVZxYqBNPk8dZXsWX55BUjZk9oNz1fnomx1",
  "key19": "2HELGLaLU84Q3EnrMFsrp6NeBkWTFymm2VZZL49BZ7uxsAzy1nvbtrPELWBwH24Qz18AxouoCBym3GFHRqjPW4zP",
  "key20": "2UcPdxqsGLCJJD879WDqmVAjF5yMwzp27Sa3Q7AJ4V7Tj1gAnLBAGnkSxekBnrDTfA8sQfGkrSUwBD49krZvvb2Q",
  "key21": "2tW7uQHHLUHRYwXaVDq4neB9NQAsBZMpKL6QgVykFBKf6iMRZ5yZxtD1NaCLUemEECqaxiUvAqe5H12Pk1YYR5FW",
  "key22": "59oStuJ27wzqjnw4FXrSy3penLmMQPXZc7dN1LDzMSSbw3WcXkpMcV3Wgdgva2YkH6JZW766p7pWzYAF4FE8RJq9",
  "key23": "4Y29UzRzvMFsh9EvVjkseqB4diSy4N6cTwHbCkQPodqphn1RCHbHrw9rx4idx5LJyTmQm2CfyLTrwdHv231ztiGX",
  "key24": "2mS2pHMHATxcbxf9dC8i3vqsLTDMghXpExFSqN4v9DT2vpu5ePyAvUivsZkTKgaMLwR3hvfdDDtQYKggBbSJc9xj",
  "key25": "32u8nwAdB83Fh2UWu8epQe4YLCjmD3KTEGgeuTUrJ4cPfY5qfoyrrb2Jk5SJMYGbKU5Fg2EvPRCBDeVtJXsUGeEv",
  "key26": "4kBymNeWsX2YQ4dJreRoMhAqL1qeQG7wRkpr4xpxem7FvcruPA5n26Q5YikedxudkHgWwMTnbsC5Dt2ebx35VySf",
  "key27": "5T7J3PkkzmPRG6AAFFri38q5L5YsiYzM7yZqRmkh5vC3aNHHwyxjLhMLB3WPSGPQSL6ZELPxzciW4vWjhMftens5",
  "key28": "3oMH9zV3h1hgk2qYynRji9UVap8Anc48thiBm6FD7SPFQFD3w5GQs8TGesp4wwBtgqQedezHnATAmz9GbLstv5RX",
  "key29": "jrZQDnDfsEk6Yu6nmjvHKNqyUAD5zwrtXWrGRMfdNZtnqpC4HXF2ufomBbdgkcsYwxpVGtt6A7FG6VUQxaxW7Mg",
  "key30": "3iGzEhtB3zqRJYaJCyxSL5srkdRxjr14iqJGJTMB9skPyzwFU3g3ewWACkYUgrS5wVVW1h6ioWmgd3bgeVFsA3dD",
  "key31": "4BytPFSM1RrB7dmmK8rNUQzEZG19Ed4XLtHYFxkMyXvxFpVfShAdLcBQXRALQCAqGvMFZVygxzoHqwwsCmxuzLLG",
  "key32": "34dvf7aKFcwFqKfPMyXy9sshxg9iu2mrkYiZZVg3CaCTi1jynBESbQkHxjZB1v27bbCBuDN9a1gttU1Lp8X7gFiY",
  "key33": "4Vv9mc5SiA2J2rYkwb8PZuZALG6FotoSxrYDkjXN5dkyHpoed15Mj7gucwmaR6YjEsNdGr6hG2jJbG45xSeftQ9D",
  "key34": "4UKUaVE7v8rtd1yqPNqNnXCbhCBJMd41aEgL4oYriGnuohZSwybSo5ibKzkCkVYGoJo5atet75qDFsi42TEirT66",
  "key35": "4qm8zhsjJCpjE1WPWT1hKi3XapDJFJoTjGUxmxFef1CA9CPx3uqCRvvi7on7tReC7zuTnwT8sjSpXtuJzneKgUA8"
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
