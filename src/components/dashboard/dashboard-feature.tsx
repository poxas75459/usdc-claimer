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
    "5mN9emxD7UuvcB5gP8Z1sfDoX76ftiJLS66yGspq5qjoR4qfqsZgFfUvfH9T3d5JpsRRYeX7isokwBbdF12KkhBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KXCqQBktZa7ojzNRwrZ9fikKizYnkEHiS49CMN6B4omJELYcZk8ShSnta7ThX8ahR5S2WGUFRbE2Y32h4NetdQW",
  "key1": "3rCBxvHxujp94kUj9P4o8v3jJf4G2Z1X79Lfw1Wi5NfV39dKkxo2JfpaLvzCquitBcNSJqR86N6pQ1kUPmXQ2ESa",
  "key2": "5g1GAZcih3DbWTuYLoXq6QweRDwyrJGdHiZ33fqaCLFwMAU7LT8ncPdC4Kp53D6x35fsypp7h4WFbPFYkw3gvwY6",
  "key3": "2fCMVdL2RTruDshRkkYtJAkRddDB9WynQ6HvBjdEWxu96Pp2Nvg3ZKSGpU8Rp2WcufAdvzparCvLZeMuNszqvbWB",
  "key4": "5wxemamPU9hCXwJ423UBgPZjcyPnZSYtmyUEpDgFwsCYrJUdBrymNAqWbcmFqLPxQtVhcp6qvQpN9GCoPmHkNoZ9",
  "key5": "59x6zS3bQHxankxq5AeBZQjZZU6crFPNsx9j1bd4xVKyoKorM4qBpyyR63uCrcd7UJLQszqxv7P8v27dmYueYnk7",
  "key6": "2ZotGrmGDcvhxf6koBi5H3N7wLU9iCPgzCWUy9BRHsQBLPC87X7ZK7bTkK6RUNxG2iniAQBEkJbbDFQABRmhAL71",
  "key7": "3nkpVxLoU7NosbdVLrxMhnayu5m7Usfp7ttjvmnyeiMKjNAmNk4dfwSwGTMUWcvqMg5u4P8r1WvmAZoW128MVAHF",
  "key8": "624Cwh5SE35TYZU5uKin22tryCLS2MtnWUEN9do6F72GtNnw4EVSjugJ7Zo5W57hhD7iVmJtrW4UrVP5dQik8jev",
  "key9": "42BVeKAr1E8QG4zZawn5JgSpKeveLPHWrVsnHrLNQvX3r2y3RGxstzGSvRo21T6ZqQL9qWFVkFJhwhj81bWvkMAc",
  "key10": "23T1CgfEnmvG7Aw2J5Ek1JfASYDHKp7rrHaBs1PPeqZvGQw4hqC8zs1aHdHRJN7WYwGqwALDGyGoKnvv2A88wRWX",
  "key11": "5jrzwZBeWJj3y4k77enQpN5uZjdwBxL6GvGV7D1EhYUXbEUJ3AjjV635oFVmKRMetss9gTF3m4RqQVTwmkNWLanJ",
  "key12": "3jn75nWUfk4HX5AijS3KG8pfh3BDnRRFLFJeCP3GGLruWRrJd63e2U7CNEjmfYrDM7MddsQgkQfxLvEfFuaRh2pT",
  "key13": "7gX9XeHyKWcCzitc92P3otx3KxFKodBGiCMKt16XoHXgxvPPsyWdgcoPHRpM5PNMGwvKDbqWTdDDoZZgXzSvat3",
  "key14": "3u6c7oZmeW6tET1jXXWVrXk9D6UWPj6dYiimkBBSUXoTQS5ceyaLVcSk5dv379RU2d9WJrmZctziHNj4PF7AdW7M",
  "key15": "HABNLN3ZchmYW3Y6fdHJ3vYGTR2soMQ166TLbmf5a9rJiD7w8Hgvxjh9CpGUtS8hiuBsbui6sCJM9xJ8sKshKhG",
  "key16": "3GaiRp3n4uZFbFmMYB8d7MZ25CSUhuCTqJb3rdB7djuSX5RXqxZxBrGKUiPcUc3MxWqtBPQKEkdgLH4PM95rAoYF",
  "key17": "4RdmsLcSEB7z7i4mns3JzQnjbtYTXiweoi8kDdi7P4BAdnxw1C7yzde59BU11PUwD6NfAwpkMxo1QKmh4EN9zJh1",
  "key18": "2KBcQ2ygEUfXNCaqrykjF3wZnfHFNWgJdYY5GeSeTQwkLM38y6gbRGhVXEbdPr94tYzcAKHtfbiNMYbcPXL4doBH",
  "key19": "2Y1PDHM7AvFBaVUWpLaS9FiM611xUNBLKqVjrJHSdLFV75kfzjne8qA4qFwxhinn1i5onTGbMcjFr29Umd3QBaFT",
  "key20": "5rrsiGoLTJtmHPpcUnWxXpytmU5AcU7Dt7JjqJhy91HSoFTsaAMG278ix9cVboNutpjJs7nNDHdbkop9mWX3S1wW",
  "key21": "39ror7FibKDBwRsYgq5qbDEacvGigQgnF5BXfRe7bxqcaj7SKWkLwAQhjKxVhWFJCmqanoqm9DTvDkHpi7kZYTKw",
  "key22": "pAhzcqmDHMReiK2CgJ3byzt7aQPpWaNZzyHuQdfkgjbH3Xbf8uo9GBqksnNLt1pvvMvVJrDEeuCHJCcFBDayBw2",
  "key23": "qr6WV5BvbBhxYXQRW5GiUd47xUMqS41MMwYSVYWoKhpASFZvaHq66eKgpVkaxvuawue4E8GjTous3wQZr6oDS7J",
  "key24": "616BGykH7vt9TdCgVp3zL6DxiB2FSoWBzzmYM3QZH9f1EWYMBynp47QXstL4oUAsF7tULz6We3HKgLoLXteZqCmh",
  "key25": "3M39whdKo225UTtYG7SqFcgc4Hk2sn64MkG5xdHDvG9jHVpth7N5v7Yc6cBnguezdgLJZoVk7L4KEjFaUgaFQntk",
  "key26": "43dm6fFmKiBPY3hBPxsWHeJeJZ6oGf4mikmnyqaqRRoLW7fCD9EppkpbfJXBTQYRweZos5pwXtzyNDDCk85EBqmZ",
  "key27": "5DMDdLmyHAmDtrz3JA1KA8XfUQatPu4JiTAnsV7FA2RTmfxNZsETuVSsFqUGPGv4W9CghNWxH6NgoF9CFMQbQrxA",
  "key28": "2A1T2tap4W3AbwSds2UHtHbMSEdXQbvq112yR2W4z3xeVTuCMEkGrewRCH3cip2Tm6AEPTXmr9TTP59qEx7qDAub",
  "key29": "4k4UVVevAAkawNCar2nXSNnJoxUJH8YJb7ufw4uoqwqmXDCfdK228VeRBiV72vAiFRFdZCrZDQpKuVvCMHQfq23S",
  "key30": "5mgNB7HTyfTbFPtH7JRBdM5JwSWpQBp4nQKdUbJVyzTpTpSKFLKUWpzkz1KU93Y6kpEwDpjX1o7zprE22MDfEtu2",
  "key31": "3qqGLiijdE6VXtyZUmaNokca714w8B1dvkyreVkd2ZAniNYZoEcmJdsPAtq41sBF84Vb1HnQyk6qHZeiTWpFgxeP",
  "key32": "iH16EMgT7v9bh75aYFwfJ7QZB2U2WupnHQc1yAxuxnhQq26uPChqyrPXugVULWW2EV2U8u5RDFZo8Du4cnv5e6L",
  "key33": "KmfBEmT3YVxfZhs7T4kA2ZraXMw7WHS1hq8m9fh6YmrwZDZD2jq3Knot7PqQh154cv7DzXPZb58rYExrX6hpY2q",
  "key34": "ho6s9LJGWvLdgqahPQXPfboncQerxSezDxa9ay4AEJXQ6x6Bxiex2rC2NcQXk4vBshLaMQrQrfuq2jvPciqmxm5",
  "key35": "56n6yCSaibiMGkpYq8YWqo7ApCZiHJTiL8Gy9SvhDSy2j2sD2aArj6h4Y7MjFKTpjJ11myANegy72e5iiULWaLPz",
  "key36": "3kEBTx8PNCemspXxC88NKghHxCnR8miC5Xiz4TZPjzC5wKiYrLBTQm1a2wDYX9diiYuxWtEFwHbrGZS9c6rSsfEz",
  "key37": "PUVdYgFJY9WXXzoWBQ6a83o2XSibZExHNJ7qznqr5vpXU9d8fkreEzEAUscoWvjqD36tZesQ4RdRFQc8oUgK3wZ",
  "key38": "4hUYq6s8RXvopDRM1Ka5wp1rBsTejUAe8ivwPjxFac7rbe5b8RqWf5dvAJ5SvUvuTnGWbBV4m2ijU4dav3CWsp7w",
  "key39": "4Hcqhxo7bXbZMCQUuEvveVZEybVSLEETtMMSdpA2p2DrPKdyaHaDwDibhJy9P2oZM6xKuRgqJFNgCUBjuJhxhiYj",
  "key40": "2us9fpfEs33ZdSVMsQD6yoAdepP53vV2N4cfnmk2NZ9qEnTx1YBGkootPQ3ot9vMB19ezj1WrwnVPnn1zBcc1VxW",
  "key41": "2Zj46vLy7cuUm8j7vUk7aFGHVoUFUd74vhXq1QfBLg4jkFtxasVuNy7tv79yBZp5rvSPrFYuAWqTbteBt3Ub8n85",
  "key42": "2Msxs5wkQM9ncgXpSMgs9RBdsTevfhVgjn2iytm5hHjNdMuf7F4D2xXuYZv3QjyhvQ49vm9scvGXhHLG6AFU3KnW",
  "key43": "5xKPWZzcC9vsHPETA2dN9JAKJfNrhcbptSpcYUzDsG4m2VZLiQL7FXDTkZax4wwiy5Bkn1SBs6pTH1CbJfMkNZSW"
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
