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
    "55timAAVuxTLNo6WEASX3eE4LAukxFHcXMopvSjFtmiJgx8ewgBJcyHXRgRiwQsbqxbMfidhCFTFViANgXDub8ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QzCk7RgGhanNxBqMddBoNLBo3igewVtQ8MszdoVNuzgsemn3tkkyumBsMBDh2Wks8LpiUJ5MXv73TgnxYzMSYU",
  "key1": "dHCiLXiuYBvfungiethAC1vZun8u1EjEfd9Umue7w6JiG3tbopsRrL4DmakJpC5p1XqbCXjx4MUHhvJzCyccmhw",
  "key2": "5GL2kW3KpRXFMmS57xjFm9quRrKm8BNMRmQVfPrCv2ESp5uVPEGaaLWd72gQibCw3ek1YrQzeet151TUrD7rrpBa",
  "key3": "42oLVoHtdga9LdSMMYdaWdT3CVM6PHpRcxkpWsATredCDrVrk9nT7xMqTyPqreFaPPvF42sQgku1wRzNATBiZiC",
  "key4": "2KZkwkFUJE4Fy3BPWiKCLWQLH5cDeKR7gdQ6K6x8EP3hjoqe5n7D9TwpAQY39hGcUBJqjEzQRtHBBSHUcDimkwD1",
  "key5": "3sUg8HPK2VkdU8io64Z5RskYhcqzpGjD7zC18h1mxg8LySj5u47PCn8fRfphBTbQXmXAgQoYsFKmbG1Dd7H7RXfL",
  "key6": "5YEMgVMZoMrjZaL6A3KwGABxynms4CsDuZbsdS3a1MFKzyKxm9uNX8ZchYJBcZTZYC2gcESENZet6VvcjqoEdJhH",
  "key7": "5CigfRa1WJ5FGAtrNbVVn7smYVzG3X4NkdYzvyo24eeuhDSR3rVgKYMtDHMfqVxJg84ZfT73iMg7fTBBWJ6uS9XS",
  "key8": "5zbohmeutCmAexFKcf4doPocWknPCfcE31RuARp5YB5iKumX6RnJ5NKg2XD4qtde8KYJeWHPS3FJDbnimEcNhYiT",
  "key9": "dtgPysX3up6v64sDtX6vNhgXySND7VJ4dfLA34iSKLX58KELtqtEJyzBNrGG2BHmDF3JhvGSygzb1EMs1CyxfPQ",
  "key10": "44Tj58XWaZ25KvQJhEke6XHgxe6ipGi1JmjS2bPUNNwNj3zExg5L4mNUwkkZGambvcceMDnWsKB61xFBF9peJKK3",
  "key11": "U2dhy87QwieX8UiSWAgossphaxgM4GTCU614FtBfGuhr6wW7uDZQzMux8FbwyKDq4pAiD4tCV2yZJL9yAeWMRSs",
  "key12": "Re9pDQmbpHyQs416jTn5o3NNznpqFLFQ7uRZmwKXtCGQoMYJdK8QzHqxqyST9GvjNPxzPN9Y9EXiMK4ho4wpvcB",
  "key13": "5kyayb4bfUSTf1ki3etShj2Y4zWpYrFo3Y4aMaPa6Fcai8eq3kzUVrVHw6yBNvfGDtHX52qG7K1VAgx4DkFonWRm",
  "key14": "5XmHqwN6k3uhZ8aozrrA96HxeLj7NE58jZyyk3xciwGqSKEipShvZx4FGWmgbj39iv1DhAJ9LQeMG8vWsUv6p9Nw",
  "key15": "67MBhGRdZF9SfwV6tJhnc7d3YPRZW44rDNVs5bJKpYm7T5SUSEYRoowCbUBK2riDpbzGDvsm7E2hnMcGZVNVnxdv",
  "key16": "2JoYMteyFS3NgfyTcfQpUj8nCXXKiSwAvLU4SdFgvFpGrSQA4N1XAucN6UXXSPuqA1XDnzXqzSCG6uTJ4W456CoD",
  "key17": "5WbajPH2WK6Ucs3brGUjhMa21TG9Qw8qWwLEaHqpm9hdGsYqnj9nnmLFUxgyYoBVrLa1FGszXPyj5xxZK2T44Jix",
  "key18": "2KRC6dXGnhXynWWA3uZfyEGaWmhmDX3EhesACJaDxwT7uEArzbBxA7zMcLH8vMsgiXnsgGxwHRHGwz1NRZULKXHG",
  "key19": "2ZVPMrfdySZSpRaFXm22Dvotg8tXwbW3yQqq49ghb8KBNBWL1PAPFN7bmySwK1bT6Xm5DQExbxzMp91HL3V4ARNT",
  "key20": "4F1jTBGoQw1JksE5ygbh4QM9eacGUP3MRQkw1tknP58z8XbnPuU73RML3nHkEw1t9uMHWP2XP6BuAYACeiBiBqW6",
  "key21": "3SZjpy1P6zJujveJz18yVzn6SuY11WwvUbLk7g8KsMnkgrnEXDoHgtYd59osENa294WuDdTN2tFU3CEoJXcJkvQB",
  "key22": "48fdPcCsygDXXtLCfsqs2VX1A9oErHZ94vmdSiihshD6uVaaQpZLr5uR1avuisgRZjHkWfE16feR5djjAbWW54C4",
  "key23": "5rZt2THm7guNqne6b6334zY55PMxKZreCHAtWvyKfcbZtkdgaFofKd35MAw6afJrRgEjHoE6vE9QVn6Bug5oDiRV",
  "key24": "3Bg75H3pVqf7mDU1EgXLp4X2kFb2ByKFkRdFby5VSbgXth84Ep5gJCKx3fYvH6gFyWdAM5WtJ3r454GvzEy3ETpQ",
  "key25": "67o4jNZzbRYsuhxingM5Lh1fy51xHhJU4ZJ6QTa2Nf19yiSCuA53GQY1E7kb6gNoZQV5ihMqHXfNMLEBLWTgJ4sa",
  "key26": "4UKQExaHaEYRcgHvjJUXegKEGRvC26HG5SztxKak5eCXCa2kn31k3B8sdV8u9rt7yJxif9oDNjTJpwPKHFExp3V3",
  "key27": "DPqchNbEoXnT523fVKu8p1jJebEMSPfTcBgrQFo9ZsEJS2e1sUJTgqM4ukrooMz3ErSht3isCEQr9bUBMTdDHbE",
  "key28": "5HuwQdRrmLEqonJSmQddbTzcPVrJcfGsZuT6djtSP84nzzpjRxzLV8hdNVYaZXu2UR1cd9TxbMa7FvfxDZMkMKu",
  "key29": "4AoZzC4F3AF8zJHJ3u2QfcjZaJoPyjv8tUz8aWQorHQLYxadk5j7h2Mb13P417uR2oicVQ351qVxt9qW6BwVk8nz",
  "key30": "4Bvf9ZLVTN4SvwAyBza85MTWvG9kj5b1nPqMn2DdLJT3T6Nz3JSZjjxU29X4gdYUaMHVRCDevwVeWQKMppwAwZDm",
  "key31": "3AQXoR2e66q634nS1r6rD7Eyns8jM1kSdQSL492DGnGVPKR3dBpzGXA3YNiNum156Td12W35ocCpR5Dq2kTe3zZQ",
  "key32": "41QTnYCyc6ntmeTV1hJyFkaEa6YEsu4yXHmJGAAQc7RNrvu8wVhj9ZX2uh1aiKY16edGhMLaBHBYCgubnvGwZvYS",
  "key33": "sZ2Lri2MXsNFZ2JrYsidjuofjQsrhNnkNSpMv7BLZ27xYST9vhNX64FU2W4sWF96F38U63B6FXiAYJq1c9iR9zE",
  "key34": "35hBoaGtHrcW8A3eUEbzwRB6mMuEGbNSGGknCkaErnUoCa6dQqGfT5aVe84Njr6tnknuVz1ZSbSSVDB5ACWi15Jq",
  "key35": "29xRA6BF1hR1oEbgpDpFxcKm6UYhrcEjaWWRCur7zp8r96T2RMx4Z1Dp7aEVtEYFQ6EGVaGYvejyPV6QRWbsxtZi",
  "key36": "2HpMGmiR8mgFxoAcn6SupgkT4tDW9DSm9j2Wu4RvoHBcRhkib2crq7vdkvhBCpEnEetk4k5MmqAkzHsAoNJ8rmjC",
  "key37": "4jvCNkKNLrEi5yLs7ShYJfFoxRC6jHmHheD1T3ExQrEUgMtqjKiiVpA28GnmYKwhuQTmKbDFJdven96Z7C25qmRs",
  "key38": "dwhTL1teug8rccn1XWJ7D8cz5Z1hyRVPR8QYL6eCP8ubJso3vv6bA2q3Bx7MoCwQquXfHQsAMZBYCwK8rvsL6pC",
  "key39": "29z1JqdGnwupgdv8ASxCew5HmqEJsWn8VBQqGBBYRsNqV2oFmGpP6cEhsx4aLuUUw9WmbvXRbaA1MhJoQzwQgTQu",
  "key40": "drP444K2XEgQZnLRK7RAytkfAASCw42aGu9ri2bKb1vD5ByMZZhZJszWy9P3U55Y5y1Mn7NpxxjFXcyvfHvTTvQ",
  "key41": "38KFY77kZ1uPiDrnr7q8gbd8UZGYe14VYZbTQ2rHtWR5U12NZxAmJn6oZcLS5rsAteZPGYKaiZka95bup4TZppha",
  "key42": "329L7GkMmoDUoKP1D61gBZxcSTco5yxMy3F9HHtvkZzHFncxNZb7ErZbSRND3m15UzWrD7RLngPWtws9tanexChf"
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
