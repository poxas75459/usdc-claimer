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
    "z5GbmgZLpQF3JcDET7V3m5S8kKV2XaycJBwsZPewRRctUAKGfjvWZQ1A6ZsA18dJYd5tPVSzaQxPawnda2M5D3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38U7RSJ5qwv7ZYwgt2hNExtQ2CVS6cAkkE8zoYUttXYZtouycj5VBy29Pw251UtYStaLSTE2XifyqbXXamD2GLfA",
  "key1": "EVyaZsjdP1u4qia5GeFLL9usij28oEETbwSg8PFGAnQ9D1RBeWAZuDTQNWdMHaJV2KG4ipmWDCzwViLi8TsNv9h",
  "key2": "5A9Ec94HpP9rnsrqUvRL9GiwdznXgZQcZTCp6PergbY49ZAb1K9Fi2xhbvGbfCoyqTwYxTzscaHg6C2xjGVo8whE",
  "key3": "5Asu3g9fa3oaf7esBFKHTHGWA5mwjxBka4sw1WqffRjAQkwRg15xBZUo4bJrF6eU1QtGZL8znbvQb3ZyuaVenmTy",
  "key4": "5mTkkM8coYbMdC4hGKNKBvzwHWWGTB4BonVmJnNKaK7TQMHbBZgiaE5Jj5Cu9zQmhBMMC1RDXhaLWf62igfoJhNG",
  "key5": "5rRKdfPVMf4GmYH1SExbEMnFqwE6FrnMxgMtKTAKr5QSVxKJxzJhiV17vaUSAxLQGde3QBDi9hJweXMvZKNPqzt1",
  "key6": "3Qb3GAA6dZzAK9VeQ95ajeNnREuGon8ACCYnf3u1c8q4bharoyyd8KLbkj3JAgScyU9Jqi4XtFCBpHbUXWs3qaCP",
  "key7": "46eLdFS372SnigSXr4ffPv2NWcUad1y2rrdWzyWaByiJfZCohvRr8Wr2KPiVt1jivHfP6Bc3qgbH7KBHptrBzjaX",
  "key8": "3L6G9VFtXeFG43yjJjnneQJPsdxs3j1QU19EXaFY3ZJDkTv9fapMuZR7RGiaLhUsBqmffvAeA7Zt558R4UGbgvGh",
  "key9": "3hamuFnYa7v9dZswdeDWyYoKkTqLNeH5hHAYxpDAu3HfaQbXfPZd6TaCEbLiYSXFAP5KyDnXV5fswharwEZBMBpu",
  "key10": "329yzPmZJc4cQxBoAkyEhpRZHvtT74FTfbitZhgnoWwKFpeUzuyUPNbwipsZXH7HdxXxTHtiaC4MREropgVWcwuS",
  "key11": "3Uf3uhrM2TXDwD89a7t4rR84VUiF4FJBZeLPcnh5x3zmMD8d8x9RXdJ5vefB8uqf3HqziSYk7tB6KehYHjYgrbxU",
  "key12": "3nijWNpma2k1W1GPmoLCwouSwV64MBW9QfS17FP5obp25sAYo8pvVPFXyxqgCkFJEotPv8f3kvdXxT8v3NQ93sWa",
  "key13": "5NcjDb1JnPsAxYirBSfWLnjayJM72kKKLP74Wz49XZ9sGbr3iBSiscwgz7ZDECgXAcgGcQvyo2FnJeLEJDQ551XG",
  "key14": "2dPDsjC1Zrhu4gxbSkkf97ZEx42BxXShGi5zoh43BY2QUAY6aiHpzaQ8HbwhLcqKtLbucuHgZMdnpnM8z2kGWCSy",
  "key15": "4nRzts8nEbrNvj1YsVFUsqv6RpmbTmGrghGEo6yJmGaGUHW27uKanjJFtyuiXoSfDpvLyFZ8Qz72XPATyyTp6obg",
  "key16": "2ES9r4w6PPuqEVbUgg9ARvP834Wc6gYpexLgRcSrwzPq1icbmAG8r91Q1eaJYnhkoWoWnZX3wojo9NBBY2AmkhMo",
  "key17": "4nDEmdXmz2Nt75CDkZyLQtqgR5WMgnQL8Bif9PkHy664UqAsJT57hj4AA68RX2XuTs1ktrkcdqsuabVkuUAfwgvd",
  "key18": "5CSeXwV4TXcHTdjBxtSk4MAdfoWS4tE2KCpzTmoHw1ZyfafAiiCpPLn6sUpZPTsRWmAfmMVRv6zxow8E1zvv4hGQ",
  "key19": "5dV7S6opuANu4rcgvYnfvD3KTLXkfNo6xsCw8Vy9wjTHpHxA12oQZKnC18uMhcEmPgStdbFgbtVcQkbwjbeXfRdf",
  "key20": "44H3vFyjBvWsUysw1JZJhPpjwX9GJaN4HVsnaNvjnfxEjXGFpqXv64kyKitzUC86Kvj7RHnjbGdWNvZqFG6N1jyr",
  "key21": "pQEa4rFhKqW5CVyiha23hKUUtowm24A6ZA9EUu6jkJeTDsmpEh5SrxRES9VFj6Uwjn6Mfrfy1V89kKU6fxqeRdC",
  "key22": "dj1PjNwzs56aJipkfTPvFgtykCGaBKG3V7V7pC3qYBrTK5GuhWZcT8mXrVAtxyFi8TvT51Q2nmgZCxoH1WDGxJ5",
  "key23": "2Wa49uGtqXxdMBvipoxjLJWdPHtzfeSFL4mrDvn2RHvaqePdhe2MdpZ94f6bpE4zxGkC2TQTgoW6RpB644diM7XQ",
  "key24": "4XrqTtB1KZ7d4EyKZaiYiNHFf6tCzmYjW7iArAssHmXuTKavatfnaaEnqYtokQyU5fvPpaPwT4PxiNm4SJF9jK3r",
  "key25": "257Y9SWB4Po5o9QX9D7UcBfnsTCmg82UwZ7pDnPapCYXYbxwWJ27VibfEfJ3mfsMKLrZ4NB24egdKiFEP7q6wUbM",
  "key26": "3GM1Du196nL14EXfgbYL9Afcstb7GHx3EszW8MbJ26as5hCpVpeMCSxLqvcyiXmdCSes2dkcjS91xudgqLJmEh1G",
  "key27": "Yjd7vnnqJs3fXbJANDR4effkRNePwTec6hWinZhtNEtJiw39GpbkRBHt6phLzUbTcXEAESwtXXS3TGYYDYm8dZV",
  "key28": "4ydxcCLyyjajuWdYk9FJyFz3VryEebKfTdM6Z6Dzjsj4Dp9Hr75wzB3xwTsQGePbtDdKEJ2WGvZPWfZhEbhmu4BQ",
  "key29": "ACyf6jQde4LYMn31kGCbtKB3RR2chrCpSKUtw2c5EQYnc8XBEbivPGF4jXaRzh1hDp8aTcEbNWFRTyweKrxRk1c",
  "key30": "4NiLkKqWXr55ZSMKqCmEBfybYjWVJEU1r5H8rF8gQJa6TtL8vBGve4HeufoaqjxJKwqQJGzvcpUQW6MZtKbkfVnX",
  "key31": "5AgSLvpess8PhRdqffPnkU2w4eGCTw9tkPcSKr2f7vueE9b2RnL4qt3QJkQEkQSNRg8bVVcY3mNntrXzSrARYrpf",
  "key32": "2fKFvzqdHeDYRLdJoJza2opw2PcKfLRPYwV3F4HHFshqagqErpM9Dd4e4dcPX4ffENEjYsKtcGKYeM85WdwrGUNi",
  "key33": "4W4kCAFYDCiocbvjWPe2gUdZrAgjiPoUiWG4UJz9aDxseAAKZAx8R1L8FxVyM5rKZNDo4QUHgLKqRATyFpqdeKxB",
  "key34": "3q6StdjTnw4b3eGwhJhSxDVTPaztzWs5yQ6bCdYFBbAN3EgfyYGAuYVVNFoBTNpfzHwbTMPUdZAm9gorgCBF6xLZ",
  "key35": "2SxBpmQfBAMRLpbCZrrZC41TsU2vEy8K8GWjyCTCxrGj5gUDfzsXjankibpYKjzne3bWjQvbsQEYX1awMUEoCgDn",
  "key36": "4nNowh9eh4q3agSg1Yz9Fyi8Xp8GphT95ZK6EVNyf5osTJrxcD4KZw2Bgrt8bA8x4FvYup2k9evScEZrZMMi2qYN",
  "key37": "4FgaBAUnVLjhkJE9KyKRGdmSXUrGddydKktmkTVregE36qFvA5W5gkJY2dvyS4UMSuPXpe9yZKVTRT49yZjfQbam",
  "key38": "26xipb9ybeQ8NTrJgQmZKDri2geWAmcox1ctFZVNg8KgMzYHHWN2sYwjT9g7ZEHaeAef5BSQmenaxUjMtFkooq8z"
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
