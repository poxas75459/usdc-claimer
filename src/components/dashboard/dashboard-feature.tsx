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
    "2saoGZ5NRR6YxnjH6cVfutLNEf2EfF8HFuvcnnpBuUDgGkKfMKAsBQ37tZJ29carUYEhKbwoMo8V2iFZVjd7v9uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VNnDyYWwgwVWRfJyeMVDpCCcMGY3jye1KWzeEU5U8krt51dKR1L5U1UDVci7PjrSx6ZJuSuc9xqSMNmQRKWozSA",
  "key1": "2f9fHvAzU47BnRF2potz4eHC251FNq6PxE5YvvQoFVkS9AkCAAKecYpyvtX1jPiDXGpvu9dfv8EWcQdpFJY3ueW1",
  "key2": "59tAZL97nDqctaG9VufatMhDDZqBonS1VPmYBJB24wQvgEk5YEXQj8UueAbteqBLCHSvyQxYnsVDqtBugVBcaQwr",
  "key3": "21jex8S23K617mPenKEHeHMZfLabzckWmpyEe462Yi92i3aH81wuxzFyecBSKSjanfEbSnkXa1WopF9orjsRDevq",
  "key4": "jvZyqcAaGCUxHhkhbBzWQoGzhaAZ3gdBqLP1BwuV1eAdtrV27bJ5Mgwznz13wPqFU64R4FefcM2L4vgWTRyGYMm",
  "key5": "3q8SPHFrSMSEkkxd2TUpSCPed22vKgvEPqWgd5pjXpvi5QPcxuaDwGwv9obfoYebCAuxWEMdUGu4nkHACNUMJBqu",
  "key6": "2GLBwKZ9MbMVAjFED936FRvRSZXtUwzatkYVohoRU8nZR7hzmpod4qsJbUqM6o55t5rZEJL3TqWSbWWRgN2ugGE",
  "key7": "5QxDkPAaV2s43Wik1MZ3wSo9yPhtYGTqqMNcmAmoHFJBRLriJoQCRZ4VGHCYxHHricigKjAf67b8tnaWwtLX7Tfe",
  "key8": "48NGkf3EkCdHfF6Aa9N2ZEEAF8BBhzPEikX9HwyrJuzFgWvGKj1AfRZfpHJhrCWcZ9smkoHktDrre9kPTCQY1Zna",
  "key9": "3hcmbemsy2PSMjvgC5HiRebwLHWYTnm1VjMXVJqioRLfmi4wMvcbPvL5U8kcjBmwdXKiDzZWbY5QyxhkcWBXCTj6",
  "key10": "2q3oZTRnTcHu36jeDB5JmU6d6q15R4SnwqdXKw4WeDXzbiUMze7ef7QiaHeXu2z3xBjd5RJxKnLPHNUAMZMZSgyA",
  "key11": "2ySN1BJvfvKpmK5VNxdJena6qfHfyTfXYVEdTnanfYaU7az6ecWNWFbu7eU1TjYxJgxCL6hPsEurVtfeNthxsLcN",
  "key12": "67bECFzkBnBzwenkynBmCqSTCxcXhxHUWJ4SriSWkhiJhXL4b2tLZQgpunZtiBemRYzPw3E59QL5QPJw2gfYdSTN",
  "key13": "2DzKRxXwBgUzDh4aBCo6m5xSawEkQadtcXebUfVfDif7BjUw7KafMxjoL43SKSDzb6TFxVvqZQaxbRRwq43kXzPL",
  "key14": "2goJz4NzZFH61gDVqZKrYytnY3KQ1DXVEKj2opjqnjaR9aqrS6GUwEJJ3EKAPbARk7d1sRNhJgWdtzbbYqPWwF8o",
  "key15": "4PVZ9RskciNjUkz54z6HwtxtXuEQDuWfZPdUt1GfNQBVbcKa4Kjq2W9b4VJ9zPKDGSjGmeXkjbu21j8oJe19VgW7",
  "key16": "4cTgzZwM1onErHPKLyKEtHDqykNSkUWSgUYA3bWULCYjqXbBbwZLTstFXpP9NKBmGYvW9fFQnm3FBXTc9JseZPdz",
  "key17": "3Z1JGARFU5sMCtVKeqqdmG4McCE483KqC58gXnei7sL1DJFZJfv3fm5i2EoGLEESY1wFSPkqdgABcorgUWRtYNnp",
  "key18": "nZDEe3uGrFhn5gkJeBYYkkQfBdCUGuF4qxmiSdFUFU6eZe7ZnSdtUtAjA9fKnZYoicdz2RwuYGtRGBgcroS4brp",
  "key19": "8XabR5QauBgHhMMyVnL51zZ52gyGxhkRfWwwugM4n2YA8Z2MjBQNs39yvHZBnj4BnCC4GvdSuiKtkspARf2Nt7L",
  "key20": "5fXArrD746qSfzke3rNsWHLkaKxCCxCZHANYou8vknba5wnVZbFzTYJLa197n522JuzWoxcjc4Nvegrwad2Wgu4m",
  "key21": "5jfg96tAxAscK41udcYYVhH9xf9PDTkXv1HcLsuEK62FabzEnN4fmi4zCW4aWqHYbTUf444tSWKAjCqkDGTrC7MC",
  "key22": "k98nDG2AWBFSq4WCdzXeMQCijsSgS3Twk8kZSpQauD2GPkxLcMRKRYJtaYY9Nc7m1vgbqAzSZFguqchBUmS9BLE",
  "key23": "nys8DPkjhXVwQca8gYvvaxiGb4ghdQgbaWQr8DjCYT5e7a85qB5LwRYkdAQK6qb5G7RGupkjT8VfP4XPtQk6PAb",
  "key24": "4hu5DhTFwZ922MDZXyaGbFrxFW1BLTKgtfSUQdrAZq8ooPz4A1x5K1e7Jviv3mZ3XY18BB8wDkUn1a7Mh3XupyZx",
  "key25": "2QxjCWqRHjLPGyvqDrsNeiKYYMawPfphU9HASFUhv9ereDu9MTAxMVAtG7jMiWY7tU3UUYrJtxxWq3BqmAN8PjS8",
  "key26": "yZbwPff2D5Ea7pU8nzMYUaEnAHgYqLFUXHNuEeiy5yoteDQkwfAhtrDGF9mVg2qQtLxei9SH5rGiqeT64Qzphr7",
  "key27": "3989qb9ZRfnd2VoRgnw2cQLbpSKB94Zrs2G94NZqZmqkYs3svijc9ZhvVJNjBULgBdWY95m9u3S3DR3J5GSiK5un",
  "key28": "5dmiynDJF8AzLDBEdZqZJ9jxZw9ku12cfioYYpnjnW5mR5nhekUbYFC8FM4VynoBdFd3dss7kT4HKPoHz1Zmuw9r",
  "key29": "3Qd6EhpFHm1Sk2mgCyBb76c6hdc5UGBhzyLAUTSbnv4hSbSYtHf7XMAYtVGUiUpend9b578BQR4y3kbZYLX7cVuQ",
  "key30": "QivbATRVPmhJApErUFxfoJRNxjUoX7AdXdWMBSjbPLzuobhHmCnk5WSskD8Xfeus3MvXVrCD76W7ajM5vbvW3S2",
  "key31": "evvtshhhTcJYo1trXh7s3kGosFaXMjAcspmyL6y8vbuV84SZpfN2DzxEngP62h6EFQuVQj5X3YTxKCMM3bmwwsS",
  "key32": "56Jd5qwHDKqrnFp9diZzQFtsthJuYNeXTYrU9Kr8PbyHxAJGGZGucyhaBqGuoDvnNykQjY68LE99bncZhJvKtvnf",
  "key33": "28UnerEwSyiB3aw4E7krqVCuauom7REpwaXxFwsoBJuTBpF9hAwW3Gqd2HUNXqMi2c95S77522UNsTBE9mx2WtvD",
  "key34": "5KToBThj1bb2SPYvsZt9YoNYmQM6jUP3DB1QWsRL7vm1ieKJqEGuEzviTVEcFWBioo8Sajx3doGgmAAKvnK8QRFk",
  "key35": "4PeqznhtNaXjibsbpsLSMBFvWsKBXbpygnT6oYsW6ZfYdFhZsUCt42X3WWHZDMfofkmeT1HCzZkhBLPCxz6Z6GAt",
  "key36": "3LAvNgWp2VVU53ZK9J3EpNeFyAsZrezazTBBwkFA3kwGfDiwFXogWXxyVbHjdxoKCg4iUDVAD9cFwHgxyNmbD8VM",
  "key37": "47becjAFSxHCaJcxdzXrxSntuUesxUyVTAPtcFwNdX3bpYAN71fqg3WQfJ2wGyZXDTQhP69DrXGWG684t8jaRHJz",
  "key38": "4BviCdfq7eSHiSRqTehPpng1ddfQJ1HvxE8C7rxwN1GqDiHKa4GUDGgdGugEBqtBnPqWzvzkLqNj9wzvW7QwhZnY",
  "key39": "2EwxDYPPMJn3V3k3j4QEzxPNcZ4ibqa2cqHjUwUzpE7BzsJzpzS3YjghrBQpVYSr8sxr79QYTvrRHdBBr4s36PvQ",
  "key40": "2ZEhUHzZby5DgstmwpiaEoCikssgvrgUepBvbhCDagTR4XgasxPK4wmJfGikaFAXFhvhezbNDJdgr5UZh41ZiNRZ",
  "key41": "LKyPr3VbBSm4fZBCgvQp4zeK93xGHf5x4HxHwqaC5MiWKRQ1F7E9uASTKYsqhTEJxa75txnsUEHFAcJ85L67Vd9",
  "key42": "38RwPS7qrv7FWpiXjAf1QcjTB91F7F4CQEnLSPFqAqBAxTsX1WhQW6ESPBiXDkaPYXrgY3EiQTqzjpWnGtWK2cyD",
  "key43": "5yu7v7GYxQ9HtGyfJKAshrT5HDf6Bqzxb3e8BduERTQAy6Gvrste54a49d4B62VP9nvcqNpHg5zVkd8YtytsyDjK",
  "key44": "4Sxg4J6aSdSsyivyvD8fAxkz5iKnXMypLHzrdmx6zFcooctWhE6gHqqxCJapDgSkgw4FPLTgVvcJ8bYxjLJrE1Ku",
  "key45": "2kN6zg74RXz76BCKB23hc2n9fQXg4veoBs9hHWYBYi8b6AvjhVUteNjdvh7Tq6kL9PQ76zmE2i1K7RGheuafy9nE",
  "key46": "5Sgf1peJpFr6Bgby9cxSs5uEr1GqY5BNXJbY8tJLhWmWZLY54mqAzVi7AiEbVuz5bqxdLNhWnbzdQXiNCwgJTT7W"
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
