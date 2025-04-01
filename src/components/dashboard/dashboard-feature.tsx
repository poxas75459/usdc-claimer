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
    "4SUvZpvdTvfCquN8sfYUU4bYmXyz5Px4GDnheRHz9KQzEcD8rRB54pVyKmCKsxaFV1kFvLywMMMdHnJxWucoPX9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iWstaAdxUFox1Tc4omTENRTpp8FW5yS127327AaEeHpKmdWV3ftEuxDECZKhZgmxM9BwDkCrrneJWr4rgbb5unJ",
  "key1": "5FopwcmQj86hSNSBpaMSJW57X649FkzT8naAdZBMueakyrUKuWbjWgMzMU9oqBPsZts6UEiVMK9jwHU7y2PwnCx9",
  "key2": "4n93PbpkDF1L3Fjq9X71xMN7sAAicy2XusFtvqGhztoYnAqLYEnZviZhLCM8fDuHeDuyjj3jfWDf9VWBWadeNzVY",
  "key3": "3Gqh6kSNYmSdvtvQ7XxAaNxsKCvnHvtZEf5422A2dJFEFTxTtrt8poDZNtZL12YuJpSF8vTVx48XAuWbYWa5nJhz",
  "key4": "ryRFefe23tuh5UdWXAnxogY72wVgpupK5HtT89nmrzUbTXsyjqdkDhKjyk7ANkNYKfyWr49wpJ2x3at7ugFPSLj",
  "key5": "5n9eq8FnpcaSYMmneSPiARo2AUjnxQWx3KkbrqxrUMnXv7obfC9ZnqP8A2VqJcnEZzZaxbz4J4UxG1RYcNYVwu1c",
  "key6": "3R8MDjfaRvQCf6CVLymf7m42M576y4x3uZRqLf3R8XuiwazF8g55xJkY1jMFSH4qTXoacmjYQTPXmggNDwihmwq4",
  "key7": "36WdtTXehBbssfHVfNkqjpaaxSiYQ3SqMZsQhz68vL7gKBfhDKMpcxePQ56kVRw1p2KxkwDdHukj2Z3tAvi4wJwZ",
  "key8": "2Tw9FiaQjb23kZRRDnhbR5ZQPGrxchPqX7VaxvuWJZwNx6vHYToHdXzjmV196qkbAEewVpxQhsY3U6ysy1scDcPM",
  "key9": "2fk8KxrEVKVkTExkg44tt45GXKudXf3jpERLVK3fyaGM3ynhoNusYKmzCao7JNAy4B7f9RzbomHQruwxQccwx7Qf",
  "key10": "62uwxj7rCMVyMyirkKkRpjsyvUn3LJ2Fi2sunMKZ8k7wDVoiq5JMvqmNw1owvzYCota9hWAepn9hsyiWcdH5P2tn",
  "key11": "4UXzwesGto3eew7tUSRjmuwTpZKiP7tvkWAdXozAiQc6YBL5SWAFfYjicDq8VKY7fi2mE2FzY2bQWb8igBv8R2h",
  "key12": "4YgV7a2Q9YtwM365Y7S1caz4KX4BD8t9vpiUsXPMMjuK9Tb7NRjjE58NphmVPTFuJVGCcji5SQwXNvj8tdeiiWdi",
  "key13": "2dsDC9ehGcGmreTZnhGZVa3TN7A2XsMaH8q8mDRRHVogtR46nRVLVCwrVNnnSWgh9cU8jrmMjLd6UiwrmaawTuzX",
  "key14": "5KghZ4QGcBzACXKiWmRW2L4NWEMb8nUPe57ZD3s8Qfeh9dWWU42LFDqr99SVHwZSjKhE1hBU2Qy5UbECgLDC7Des",
  "key15": "rBgbZiSdwsUd8siDbuvWznvMGBJPVmrzkSvjJq39hPCDXQHS1sAbo1xTVq8eKQvWt859sCX3ZB9A42SQdML53PE",
  "key16": "2UTKhZ72HAXG3CHguxQRsncergZrCHhsyHHhRbrSrP61LgsHc6aYvyL1CYsogYWmbN7zJRXx5G3tqzdZatqRyt1g",
  "key17": "2DWf3X1cUxMnZJWNDBzJXPB21xDAtAHDHn5jQi7bfUxhkL6warpdNogBJQvHHG2joAS354DBFUydkhVLiota1kwo",
  "key18": "3VYv1EQnfX9W5wD898t73AxbQWXjYLPino9FfEHyPfnSsUXa9bpAD5Dnh3fMc26nhZzZ4eMt4CaKALaSj1TXXJgE",
  "key19": "4Xuo8StiV1eVJh6f4Tfa5mXhfJsrYWoRyAJRGapmAXCf6xNsjn95QYu8YjhcxMisEruZ94fNyZdsE1H8JpUdDVNX",
  "key20": "25M78qmPsZ21Nzc5EmnhKNwc9iLLkyDgrTRWbKeDSjEENW6L5XfDWmdusEqeb77gcTfA8SQAwxku1Kk9yB6McJ4U",
  "key21": "2NpZhaAiZKGfSr3zbntTZMPRdBT93peqYBCttN52gN67gdd22rnbFGs9LrR5QxVAQAmJaQZQHSZdueY91pgKSgLy",
  "key22": "3kTpBSRErYPKQ7fUDGGBySwk1GfWCt2DqWsqHwQjdfeheiJe4coxNPR9cQqheGjopCPEo81khk2uoFX9231bm2VP",
  "key23": "5gyM37WdwkxNNDEw8xcVSkgVGiV7jVFYoj34WpEAPb6e24WJAoQDzEkbfFpN42VEhjfgquyA9ab8RZ6wqDV7TNve",
  "key24": "57Su8etRx3kCxDPFAvXkUkYRHXKLL6cN6s4u62VDcB8xrnN5AC6aJZKC6ocGBcMqgXzpZZEmnBj8M7rfQ8te8GLp",
  "key25": "5UVjimvySj4rJJmkQuCzHg6eWFCErhFfTHVsBnUBqjEusWM4kZCdNDdZ9JqSbC3CFJPiLc9N5Ky7xL3wwiTczoAF",
  "key26": "2k71fuYFiYmvLR6Yikr1CirtJ8DxVaWdQeAwLxbywsSwkc65LqD9C8BKyyRbF8Qf735cvLEVuXdiH2ugKCiw8AHY",
  "key27": "2zA9esf1326teCX4oycyKXJrtKC2XyYvcTCV1BKEivRnP44D4Wg9JdpndProVLimHEkJ1R16MoypwRAvPW6o1Sap",
  "key28": "21Jt1Nc8h9EUVz18Xt9MNbuCufkTao95crvKmAiiThjDh7HxgxpoDwAfqgTAMN76e9n6TT4j7Hfwq2D4BwNLN7Qy",
  "key29": "2bths9w9VpyyzcxFfaAFdKwVjoSyNh9EJJbcwpzrCcUUsLsKrdkkWZcjr8H1oajhQpLRH3dMJXkj3Xt9rWUCeaoJ",
  "key30": "5SeyQgLyGnPND2Q1QZZjHMWmrkSxutAtYeVK97Fdmh9bnBRdnKGVSQdEzFaMapVW1GXGVSBj2Jy5SpMC1REwMd6e",
  "key31": "2YN5SNzpKq5RcAGnt7c3C1c73DQU37quodnSrkhVKdZtS3FtB1jSiz3ATV7YRjTsZ56w76UfFDe5uxQPSM9VnKK9",
  "key32": "4EK73WSSiuBacppgD3sRCRmNLB3TMhDUU1rHHh74ucyKAc8Tp4QLHLb5jd4e9Jt7p6yhdWu9UoreQhnkwc4wJv4U",
  "key33": "5brFQXnAJTbFzndeSWZ2cTQuyV6EHaLWMGhQEhG6J1nG28duax7p2WisAYGqq8fm6QmAaWzpGoX7hXWegmjdMXqv",
  "key34": "D1kcYdoSwbzpWqE8aNa7ppAfDiE3f87AJD7mpNvQN6r7iuqwzifBKTKy4CfcetFrg1uYNAt8eAb6gNMrwLrTzSs",
  "key35": "33VPfmxEwe1yoZuwLv72ppgBz8qT5ZMpYRPdX8ESjLEZ923idpbQDhicc23AYAqoQtPH9Dg8UhxuWUYWceB5U9L1",
  "key36": "4BumhXkhviU7c1xhV7UkEC9kFfqRZfc2G7hKFT8CVuHrJLAcA59v2Bwui1oLWfmD428eve4SeUPakgD8SDuP2apK",
  "key37": "5vNThJps6f4euwRvGYCh9dvdGpsfoUPMy52A8QkFF6re5zRU24WuPvh3ComoiFDX1gu2U5Vy4E6aMQwhzKSf7c8R",
  "key38": "2wkCyZNoYpwDJd4yguPv82B6FYya8gHinPukpXo5cXtFx76LjMUYXnSEZy62aDQVhooECTZQEpfMXNdjufcq9xUJ",
  "key39": "2VdYur1a4cpsNBy8HVxmPHEKb8bfnL86NMnGpQFEdQzs6j8o7qhLCq1jqBLB7ueNUJoAFiBqrXBLJw2nm2wQrYXE",
  "key40": "vuBLqaFgDe8eQvLpoHCDdVYPpyz8F5bx3cE56kmU2thj6JL8uSUFogr4DxtRH4SjW5rHCcR9X2gJV5QvZnimVMX",
  "key41": "6M7cQMppKcNmydNYuhnsTvAAduZDhowi6KDHiLupAYoY7qLmhwqEh1ttRHZdw4m4o2zcKQ9UhgGhxv6D1PaZYqi",
  "key42": "5yAj3ebMiALdKARRzEzE8D2wSoMJcBLj65Hj6tnJnncPFEKDL6Zq6CHVLDvzN8jVN6yRoNa7GsrefYgitKbyMfz2"
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
