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
    "2GtZ6Nz4WSY72M93BXdA2hEgQS1C4hEhNaBdQ4h2aGTn4BuyPE5uEafbotGXDLhos6xdxH4Xj7Bba2DfmgnjfZNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NHiN6ybuSNzsCt16YAz4Nueyjy9pE4ifDAYS2AMtftNok1u7tsQu9bcRSecY5CotN1axc7SR8ijBy4AQTqNHy67",
  "key1": "4jjAiVEhSQojH6eqmqaLUcpgyh517qfiDpzYEcQY7kong5EtH8rcUspSWcUPgrqu2HvtNrTbpzTGDcfMTgfZXWzF",
  "key2": "qshWm3QMBanM9k2LNQpq4RbykZqX1md6pjGsRgAMeJGsuLzXZ8D8SFXFdksQRg1DQ41zYGUpMQyvBpbEodS1EnX",
  "key3": "5Ans6CgZD6QXJmQw5KWRpYL2LEojSYUdMvA94KYinpHw87H7TQbYCh93FebeZQg81tyRqvsfEMcjdVZYjVtrLrg5",
  "key4": "4uwg51c6CJ2hnLDkMerwTnwXCAt1CinvTXcY73QZLrQYMXmmG94rZVRyiJRb7TYsvnJdyhC3zbXEa9mvwtK8ZPvk",
  "key5": "v5DmNkGeXCm2V8SukrhWnhLfNbmJpi52ZNpTtHuC7enr29zKqC4awZ8hP5h4M9AT2XAVZi9iezM7Xmf4kKb51ev",
  "key6": "R3S37RnNuNARAzJj77fb5CPX2SjxW6DQU77SQvQ8EETp581G2iYp9NFZPHjTVrJCt5byM8BCrXAjWJ8VTs7N8uB",
  "key7": "4DLiyyb4tetZdEGV5wJczugv1GDo4u7wqD9aLwuUrxtQ1hoW3tao7sMoVpWGiXgTxAVFUFtQxgebQpnXjyRsYFhZ",
  "key8": "2vscN3NmU7o3jxamDgutGrmPBDLvkLvgVG7LJBLzADTwPkySe25A2aPCAZcVuia2XmpSW122Jz8A8L6dfPS86FUQ",
  "key9": "2xkM6gT7KkoYjP4jzR8WJst1Kt82pT2eKijr7T2oX6SXAGdcCKGehExWtn85jKAYVVe6sqDJZAyxPAA89dixGrHg",
  "key10": "3EtE3cZaaPFZW37YVz72Lv5FZD34oM6TVDkdyyg5b5hCdRG9YJFq2jDuGBMTZRN7URdtv7ApViHHvpbjL2RvBH51",
  "key11": "66XP4AuKUW2AZoEFnkjMm4dtwkNsSmf6rmRGHaq8MHUxkuNqNJcNGkw4CqTYZQsipCXQ6eWjXTKmGiHR7JZAXoCU",
  "key12": "23dV47dThut9oC6XoH21eB4XHHejSCaT5Nmy2E64pCXVXnhGxBam9inGGVZ9CsuNQokcXUfDJsu1FaroVNJ9EPPx",
  "key13": "3rSGcxiu9zF9vMyBLJVEH7qx6GgXS5Ms5r2nPDDw9Aq8Ffsej8w9XfMAxHkRStEmzu7zsmR4VkKGe2YEKqDEZBXQ",
  "key14": "4EdNY7TMsKH9F8bMeDo3YZ2y7MH37rxbRSwejGhfr194BpvYnvUHEJkXDEmaZxe1V2UugDWcU8WMAb9FQ65fSFZN",
  "key15": "66dkTzoLAZpGiXLcY5GMZPVENFu17TzWRxvriWPXggXS9p3e2zQ1eRRwq1KnWzGwyqGtgSEJX235ZEhSH2HcmDBq",
  "key16": "3U1GVmod7xVcbJSbWXHtnJthWjhz1WMj6s5FpAo1LeuYVLSmrtdd9ZkbLYG4trc9bquTrhr7smDukhiPdqVbpyji",
  "key17": "4VpLGeuuYJw9AsUU8nYzBHqJKM9Tcz7VAz5vLtnoaNgn5Bnv7jQYy1gptyG2EuZuebdzkVaSm9VVXseFEzKy8ZGk",
  "key18": "655NL5jfWmYuw4wvxFxu4GXNXEyTrCTx4bsixxEYCh1cNnyBLTpeEt2xWth9tTfdHdAmMDgfdLMwZUyzZVaWbpzV",
  "key19": "4DsveieE5DMULy2zw1K7tCosmkfZPbeeSUALTJZuoWGq9Yz7yoXbhgAMy2r7Amjrg6uAycmmnB2mJbKPt69KnM4a",
  "key20": "21Dj5ex2eVpMD9fEUMCghTTaGsjChtaGqvGkmxjiWrgBjGXpG5dQ9ebTMPfpD6dKCcSZZykEsngC2GyPKjfsyNV6",
  "key21": "ZvBuQP4bZ7PYWRqXPNNS6q4qb25kxr67Eb4XkhYUTXheJPzw97VktxCXdWxouzrfWQqrw9mVKoqekrqbNVQXTaT",
  "key22": "EC8VvUrXa7cXGJfPnQSQHHLb5ChVSvEDHeyt5BeuGCiL6MZg5LWUYb2wUBhPLQvgNWrjfbeZfdoybYGeLRYuWTG",
  "key23": "5RUVx45CLTXwhY3GkA5r7ZyATcn5maWCGCF3z6KmGtroa5VyDk9BWsFRwvoYEGXSNU5bWu7xmftLifjqgR2c479n",
  "key24": "sLhamG3f4ZJ5ouHjy7rwEoRMEaFTFpvSLFMetbZyDxes9LEN2GpH3LQW2ktpReK2wk6hDkEBnJFqvDChjvFEzDv",
  "key25": "4VQaq4nQSU5T7AoaFa9ZE8fREJzadJXgRUWCmMu35vhsUMm7nfG4xqVEu6ZYc1gUcqVb9EwKJD38wjCUwE8SM7Sb",
  "key26": "64bi2opRoQjhe7Ev2fqy9RKKj95zLsD12RxgK2VsHkXcrbQJhw44zMUnbsXp1783ZYui6wLx8vgKrQcaiGDNwtsi",
  "key27": "31oQibnCxCeK9Q3rtXA9VcmLJJ2vBFsWTYC4upGY7BC6jgxSd4A4qmWV6AWZjzPTjBUjLVA3WfZZmnhSaYx1eX17",
  "key28": "3gdHAk1EvjcApzX5RPN75YiDwQnK5PiJPnUDY1YRtPA1dsSfSDtkxp8qakghWt1TTLfARMbwDkAJtoYisLAYnZH9",
  "key29": "3SVZ35SctNSu7nrfPa2Vpc6F2gNUyRQufS62LeVeWEjcn8sFVjiskhMmY2Vrqvvs3rxdzBkTHvt1X7jEWoVQBW4N",
  "key30": "2FpZA3BmAwsBEoegz68d9if1MbWbHrhRkzV1hk6WXzzk94Bh6P2M5P6XLtF6stf11eTNFwy5hDtBJFHV56MgdJd4",
  "key31": "54QUm396ysAwXckR5YfoXpLtKY4c2LjfXYdJ9rdjBB5tYjf1QRD9EBbkfofynVEaG7riUwRR3x3ZnGT6gcSe81up",
  "key32": "3URMUvbxHtg6YPAnLdit2h4G73GCviG8vQ7mEHD4UND37EujySfhCKyjnUzwtRUxSCRyFqicmRoguVBRcHBW1ZZn",
  "key33": "3B97xmZR7pfNLFSZ6DxG6rE4VLw3ai9Aic6t4Lr5y2AHMbUiHXtZ2Xa2FiudpY3N6wE5F7bbZUjNhxWNEqdxXAZP",
  "key34": "5PTjPkRgDosUJfDToJJi5L9XwkRvVaoHLcpoWVZUctPSxJko3Zdo6Apqz49x5oBwSodFfCd3Vp3wFraoHGtdAoTi",
  "key35": "3ebaiBuad7UVHPhunFxqL3cbiPVqjMHwMs8hT9ko6oCZL94c5AYcrcFXjPG5WTH3gZfh2Ci6qFFNMAa5so9MCa5H",
  "key36": "5JZtPs1PyfZrqXFYPRXo9WbtUNyc5xLVQh2WjKt2EvnFX87quXkESERfJJQU6QBi7aWoYoxu4eyqawuSe7AaLGp1",
  "key37": "3xFarbbJ29ze5BNxwHW2ergj8KBUTCJvCUSsnkZFZszeTT6AKdnjsZnuHWxf2vEnTPPbvY7gdhUACWM9tdqi5ioU",
  "key38": "3bS6QM1oiQobuBbQewkZhBSLj1uz26X5A8wxGsPmkKoy13F7ygWsi9YQWcq8mcSwhjHWkD7gVDgzHrX1VB7BTPF7",
  "key39": "52hEpCSwUi6pbJbysqYMxQEJsqoGQRpcLGScpou8iCnLa9NCDgcwNvV8Nc1vjAY8nFY1GtBaHvB5K3gYGkFoM9Fs",
  "key40": "4icWpTdv8BMyxrsnem2V2YeG6ww2tao7WhrCGjHqZ6EeopBW24QXSLiXyfTeordmzKX79KqXHe1Z31QH5QceEDgN",
  "key41": "44DHeHD3gVkJZHqFQnicsi8JN9WxqSMyLKCSpotgjGsuXTgHojBJ2oV4bVNy9G8KRAr45UFvJqPED8yPSQ9HL4EN",
  "key42": "5Gyg1sd4WCZ8eM6ivdr2AiWyfqmdGcBJjnECuxE9WnbKyPPN6a3mSWrE7ZCdRfCzptoDZjbBn447WiVsEtArxzrW",
  "key43": "R7XPZ85v8jv1uoxHpnGqK3w3RRBrt5fsLJCr7R8Gkd827qq2xXGtW5duSyEiKDnT61VPoBqyp88EjTV2NyWK966",
  "key44": "48FykvonSDT7vABC5UDAuhzjEvk1axD8teVc7tK4DcHgRcatLrLtrjpJ17sqdgkHxRiHzKHEjjWVeWwxNDP6F62z"
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
