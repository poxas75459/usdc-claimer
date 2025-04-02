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
    "C6vX1GK5Zg34J92vSj8CxqTGSZejFTEzKYze4mNpRRPgZgn9SD2jQKZnUZ2sJNNEXebnQRwztsFyRYGHEfF98Mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mG3c4o38q7oHFKiBTLcxTVeCL4w7KSiCtBPqFmKdG4thJt7nofj3tu4brtniNsuFrRMeHrCMxjvTF5GybbfXcBo",
  "key1": "6613kgiVAgxnGQ11nNQHZ4VVujTvia33kBZodhqcFJn7v2r5TUwDhjQY25tzJy6zWxrqfKeuV8bh5hUF9TpN1Kc",
  "key2": "5oDh6rsnfoaPm89CvcMdqZAsdMUdvMVJQxzLzR9WujfvTVVuj8zYPX1WakqNw5Eqi1xJk8G5QzT8UaSPDBN1tMrX",
  "key3": "5VawvdsH5nt94xKeeBFV65Wo3Ztr1jLMsFNiZkHoWzKzzypbTekDmcqAqs2Mh6giURv6vdMrkn7m2Mwv2Ubk6WFw",
  "key4": "uWeVgT7Be7Jm2hS2ZbCTZ939XD1tg4c737f8UKi3FRAMCWvySyQeJJrBRXqTgp5R6Ks8dYMbb2LsLToexYdgtdc",
  "key5": "3rqxNWk4abS6Qexw378ct4rJCdJ9H6wsRjf5oo1F1GNoYptZBA3BvwEmiFGdYzzwot3WZWgd5aEvmg8JmpJTE5He",
  "key6": "52UizTTEG3Jrbkuv29Hez3exE1NeKJL4mHzduMdNdVui3UWpktZ9kaRoDs1SW1CK7bME4pTkB3xCSHVMxhMCK3Zc",
  "key7": "2zfnWgKmdn7SQxDuvR9QMwEpwNM83GGq91pNcobKnF1nphHPGhtH562CAZ4j4xQAEUJR2Yjt8wpGqyU923wa3NNf",
  "key8": "2Tz5ZiXWtWNoozJuumb9QyhEkq3ta1EVhZLJMrqXRMYriydRiXaNqRjnPiimwVeBiaGroaiqf2aGJFt8qNYwr2N2",
  "key9": "2xUtpfTYptAXNx894vnaSMQwABBN8u4AFQmeoJm1F3yhyhS2xJBDjQ5ZMGTKBySQ3pX6KULLZZDffmTZH7929NV7",
  "key10": "2VHkFYvxehAP9Rar8YwpoQCb259zy9iSkahbPo1ZBWC1QBDjkxT8ZrdRdsNyPLFUdGnnDMN9epgruccbbpTqqHoH",
  "key11": "5T5NXn7kwoMi84goQdDXbMAM85c1b8x5wqTCWcBgoWXaknuuUs58DLFuzMx7BQHunkQGs5JGEoh8v5W5JYTSZ9Hn",
  "key12": "2SPZxXLXaG7a3C3dqGoZmHHtny4debfMKF7tK2AVzdL6CthLbK9nYZEMLKz29cEDfMcZmi2K4Lygu3U5rWAMG7mc",
  "key13": "5uS54GEzce2R1bxVp2BDHfNBf8n8upYeW9R5urBU3e4Q1WvFk21zY3rwZ2JVwaquEHYb6bhHmVzyaWovx8ANHM7q",
  "key14": "fzeSuQBikDAhT6kMJkjtQc8P8ktyt5J6gLbBvJyK3JXQVZPu2pT6PUkk78tmZ1JbfwZGAhZtaMnE9vKH8RN3VTM",
  "key15": "4N96tpQf23CkJ4qAwkGuUw6GH6qQEeaZXF8Atk2nGcweDk9s71EpUFidGaBfSykmoNi6iZd494TE88wujwYTFDbB",
  "key16": "2MRFZtY5XrJYunx45e1M3cJ43naaQvAVU7i2FbJgPNMueWvQq9ujE5K2gGuRyNziToTFWsnCgh2YXJrs7mAh2BaE",
  "key17": "5BW2skKCRNBbGZ4ctzfeJyD7LqVwfHDDFV6e6LQd4hmihjYUmSei8jJUSJsuFf3AyR7KG5aprgFjVavbU3q1mDJb",
  "key18": "3jfSPtzNN3K2LKa1PpwbeH3JbGwHbSCPvXnY5ooH5UVd56bSLmrceemRrLmsVuRAxnBDwc9V2Y9XFEF75bMKCTy8",
  "key19": "2aG5b7rBNv3WN5P76Hx19ukdJm2a5tHAvqK87Bin5z1LBtNVDyWDpUsPnmepf8vdoxBM9z1XbXQ4oNSSiWDHNKtn",
  "key20": "4JZHuXTZfRJbPF51deRCvVps2HpHxiQ9pRB4kWUAwciZtmzkE4ckaifq2LUowGLJ7GBSvrWC4ukpzHL6hfvjS3L2",
  "key21": "3Ejn5AyC2sbbQDxZ8J5JmAVWadNMFtyNyEu1S1shtNDYW5m2qAz2xsNXCmDpEf716ZoJUC2Dq13urtWnQUL3QYoL",
  "key22": "3CeYviw3N3AQq3dBehoeT8aFvJqyTGZgtBvveyDwgvb5LiYc6BKA6e16KeCPKt5JNEZtQxqRF3xn6R1TCHVjmTPv",
  "key23": "ZX2wh5ZPUe7GL64pdQJib7LqVER3MT9mMC2khkxv47reAzJqKcLcUEkk99RqqBoEePWExWa2LFyufY6ezbXGYj8",
  "key24": "2z7shBZxcwJQUbGGm9SHvbJcnnpmKBw4mex86QSGUv8U4MqYGysjF38yeQbLuYLQs2SZELREW4RszTcGKet3pmRw",
  "key25": "3aEM6vWtkewAHYq7iemVB9RgFB6kow4KdWWYun3xaxk7NFzNHHSHDCupb5UjKoAigo7XPKPEDNzwf2mUNgvR4GdV",
  "key26": "5r11L3p2FtRPCVDRWWAkYoNQfXVExWQLgS15j1jNGK18j5e79ZpgpTFkAVPJiKuHHtRXheYR5tGsyLTRCF9b8DzM",
  "key27": "FTPJPrwC6kGGep3a2trHRie6muNwSZ4ig1qiwZ8264yjYGg9x311CU3etEjFawtvx3ccr28MniwkSyQn9nbr3KK",
  "key28": "2Cep72qCh46mpwWticnxwyQWRxj6DEyiKckMAGQ1WMaTKt774UnhhGb9GzWFNQJ5P7Jf2q4KXRRrgVifTo93kh4w",
  "key29": "3cAicP8eU4AkNUYtm6kJ8ggtgF3zwqg9k2Bs78Y74xKk5Rn4RULGVMvqExNpjfjX5kmHbeV1frrc9K2tk72jsniD",
  "key30": "3rb1YNvy7E4F5cxNNDsZhRDZAQZ9wzvoJ1EYR389QQcEEHYjeVW1nwsEvBjk5PBrrZvC58yY1rrUXBapJdt91iiq",
  "key31": "37YwLzyK8gQDX8DFS1aUZ6HQwRTP3vy6yDxo8CaD1qrhuD8tLEDHZDunW7nZgPWF61JCRMtrSQDNkXPGzDD7fhR2",
  "key32": "5XtU7bn2hzcUQug5nNbuvQaKotacevXZi1xqbunWpW6GURnxLVGThquiA631gEiDZRRghJXk2VjVc8boMf3rFibb",
  "key33": "4vFecp1chX1tPedbcPcekX9RzbN6xnzuucYeWKBwTQsbFSiwzfQZ6RGz9BQyAyjrBspfB232AtaeJnQSRdL7gHvt",
  "key34": "4bp6p2k1Fd6jjzLqPaKL9TKhtEFMa7M4VVrM9TRYJZ6VpYKXXpu51KsM1iZJzynn7XL4xNfLGdYENwGVr8dE9PGr",
  "key35": "3XMfezjgRpYJXerD5CURM64NYUYLEp1tqJExFAtyR5LSWjeKSRm7F4WBFc92Us7nNvyvKUcoxx4BzfwxPkqV5pSx",
  "key36": "2Y7Vhmc7z7XrLQYUU3n954xG1oGAE2YUeBHyFWng2cD6XF2LSKkpg3pTtbhThrcmUdyzY1sX1xjwZZrH9zyjF5Vw",
  "key37": "5vEDxXthoh6NE1dwXBayyp2o9SSBwrhY5B2zhfWoiGz79yJsyXjmo9T65pBRLLJhiVJ6jfLVQn5A8zLLVfhXQNLU",
  "key38": "39thNtNob1qYbDfqF6YraZb55ut3fHR7PbQ9mmMfWxMsSxBr1RQPXzsjMHLSjSh4SVJDw6nAwt6bEUsr5qPPQMWp",
  "key39": "225QhH9JAUrBQzVh3hgVSNnHk6S6no6WLcrU1xgrEHTHuCh7hNUURmdv3ZB6FoewLXLBmXCRtEN3SvbhvNU9e6ZQ",
  "key40": "4gEHq6taoBHUtb5S1fxzDV7dX9uViCgX5tWiGQfrwFpJ1rem86TLpdcn1zaNq7Guq44RouQpUou64Kj9eD5Sbz4z",
  "key41": "5f7YXmNciLAXoshJ81bcFQ2uTcgeeWrP2vMvavYhLGDwLsbFTR3gywrW1cRr9A2MhcLp8vdRUDYWprrkdaq9pCQa",
  "key42": "3htjqXSHTaqM498nPyD26QSEnusTWkrTo3F7jTS14jjJwnaCKnjFGTZJL7MBB92chf31sXDMRAeYuNociMKgRmo7",
  "key43": "5335VFbkgbpqNESVMhdNZdXnUCQtQp27yaN367hqVdkPuRr99CrYrEPtj4JLxJPmoiqcEM63U9Ubm4RAiaX3woS2",
  "key44": "2ZSUUFPbiCeoeC63seqnUoyoP3nw1w74PLdVxnq3jWXjRGpgPK86MWgd7rmpcEcW9cLeDP745Qi1HbEeqxzaPgM9",
  "key45": "4nxfEvr5G645vY7PPXnJ85dR87hMcGm4A41Xv1E3V9oYQhBrVUYHvaYJf4ZTiHngNTjNaZgnNPEkZootR2rwRszX",
  "key46": "2acwyctTnNj6tRVYN2C1VLr474CoCbk3vMor4kqh8Q2yHYUrybpLa62uKcLUEDyP5F9tBUsQuKKVHnJjUCTu8xH",
  "key47": "2TuUHFPQokZMe9sw46JhRsUtREbVmxn3pS7WJvAKd9y1YUmPFxXYRpwz9YUWuwceEqTpQRX7yiWnzTQMHriCLY6q",
  "key48": "5YbZHEZoddQQiumQosenSmCjBtJ5KbzFn3QweJ8VkjGZUGmE7N2PLEVWygDDbzbsbUNRC8TTT7Tv7s4Fpmi16Jn5",
  "key49": "4RLaL4VWy3wHLhZn8mTE1tV26BPJN75USc6e6ET5SokXjsrb7cznRQT1T6eVYr3ET7JQD94V3Fy6RKQg9J5sZKYJ"
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
