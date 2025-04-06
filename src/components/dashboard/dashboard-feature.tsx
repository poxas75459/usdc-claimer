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
    "3wmNq4uSyQyiythbL9Y3Y2iHz5mssrXX8tXd8jGYwUBLY8W4zjZLzD556H6uk9SN4Luf5wm4XhR43sLAoVW4UZzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wFSpVvYpANF122Go39L92mgXJ9VaV5qrvZKEioNFV9ar7BUAddDSxScuCHmKr53sDyFx5Q3c96AwMVp8wUTAEPm",
  "key1": "2RU5EYXsJDvhBmnKLd9R9C1Qkc12BcQ3DnCpJyCdTt3bvmo2NUKNTnbdoKVcTgjuYjJAYVZwa9ueU1TpK3rv6mjY",
  "key2": "4JmSzeKshq1PQ9QjdjVmD29gwrPJ9bYrKC13rUmgdqwsCqvEdV8hnHzSfLq76Ggsy4vs4T69nBpmHb2pBLfTYoRN",
  "key3": "3k2sFMYgknuzHNeEw2fWbAn2Su9nkZRpzbSgwbueWyyBxLTWHwqNCYfEnhDz1B8auCEZUFCZe8EW3xqpUXQFXYN2",
  "key4": "7vmDbJneQGCkvqwkjqskzZHt516ZtHaWdGD7GQXmyjSP3jDzjN8hoEiWWeCAghhNs9TeFDDMTqGXsYeNYYTMEwN",
  "key5": "5U6B957VXPErARJk9wHWin1bKCUxr4949HDKLytPJu6wfDS5quqEwyrye1jW6ZvCraHuL4CT5gpWe4eJ42H4PjQ7",
  "key6": "4yJ4u8QQMJdvBHEwMsWfpm83NxQKXB61BAXxgHt32gv2BGJzsAspGpkaoxnpCJ2C9YzNtUWaHXuSJbZpZ9bZYgSU",
  "key7": "2xkNcnvERziyCCGBYcueMGL7SjxmemLr65VRHWF5eKMwFgzxGq6gNJGGNg1k1QgQ1j2xV52CE2nB2J7CY7KUjzCA",
  "key8": "4Mrf4mRBzCWWpkX9ZUxvAchMH5B2V865XdvyAeP8Nuqf29p9pCRfUzegdo8VQp7g5QnAZ7WTZUPGqCcn9HsvqWG",
  "key9": "3TCWD3MyFcX13JzZyC6KutpsJbav5CJbdaiSq6rfLiGNkJWRtXwF28qEkbGmLdynLBF41eZcYAKCtfbQRF5cMdLG",
  "key10": "2HLGQWdqvGRhrTCpsKUXSPaz95exUSvWXqtk46Q2y5a1VBTA5GKG5S6UxV22ruVJGm83LM7m19fpbp2DYS3Edr4H",
  "key11": "5oZTrXJxwA4Jb5oMTFjWRKi3erNaaDRmv5j1KG8U6x3NJfps8HxoKTjqvjru1MBNwKmDDv3viUA2kYhHw4c17eNe",
  "key12": "3uP1645cEoywTEwTzFWmMUmBQhT1LakvQ42UoRJ7nD3ygsAT9hXZcp565WNjTyshFtdHSPUmvNmeL9C2whirSixA",
  "key13": "3NnmhusB4YFKwQXPoD7xtHV8ckGcrE88xkQMiWEsLUhKUwHrKxWm19Vj8SAAoz4hVjX8aw2FqugdVNYQeFPgtRwE",
  "key14": "5XWe3QdwenUPRAKX696Cqu5Qrm7DkpChkb5uKEzU43KSzigU7g8wzdAsJTtzwtD3Hp6Q9wseGxdWbQvYbS8qCGUJ",
  "key15": "2RLFA6LNHCoKQNLdZZZVWNoSMFXJzUQQdiAtwm8U8L22LpsrieKPtWiP8tf7NgvYQPBZZ3CNj4kGpwhivryVCNwc",
  "key16": "5WSXPtyvyDF7wN4xR75pWQv7GeUEpYLszAymquLqGUqdxFkZ9ogQLgXsATUYVG6BhzuzrTLvdA5wDLaV42xhn15B",
  "key17": "2GnR5oZpbqGJyNioBjaMuXa7Nm97qmSDvtDzLe68NoGe1ajLMu32hkTsjcddJiJhwxfPvh4gVz29HJB88QMvpcCQ",
  "key18": "4UF13oPMExk8RRRxz8rTyMVuL9jb2vSWrJUusHEDtEivEqJPL7iT31BtdyUzGerdTjvHhei9ef7k6r6okvJ9dVGW",
  "key19": "38bMZYMEDG1g53MaA1Sm6cruyQzWwjr1Xrd8Lhgde34774bwFd6fpU4uD1WxhMbWQxC4EcbfCpZbKY11BYt9VN9k",
  "key20": "vMMuhb8Gca1oTQ3YjwoRJhZzEYfxcPYpJTfWz7BEt9RC6PvDVLavqSudGXVriKyhDKuCosdkUX5bi78g3bh2sfG",
  "key21": "3yYAA6MWmUTdnE91h5kV6kCmU5MEnpoUQevXC4oMmuQ6v7Ytr7og76mmwLownCeYQ56EoAhJrmqqAxc33m9wNwwY",
  "key22": "yqRMeAMmz9ER9oT7nbCG7yd1bvui8pmMgbwZ13sasRhZvoiN5YVkjsQ1DSCLiXFwC4WeEYDQd7JJJRADD3wNDbA",
  "key23": "4nMgBkm9GKkSK98k7uytDDUWjhLfGaPr1NMf49mGrfkoWA8EGvWF7GurteQVVmEGm1nf1FXRc2cXEyVdrnbWwtqz",
  "key24": "66EY7T352L5E3o5kMHVQeqK6RwcNRE6D7uuYNg9p1BdsBuw2qhnFSChJTA3riJX4idAPXEhfbG1Wph3S5qqxisB5",
  "key25": "ozPdjtsRvMEbE9iYA9VjVaaKBcgXD1qrLcYTAHAUrs1Jpf9HQuTdtZAqGKUtbJv9dBX7ErznL1hCCrqkbSBWy4D",
  "key26": "3XeEY7egGErQJknK6E5aeA2Z18xYkZF9QgjxEL4xxdkXG7kG6i33oWax2aW8Cj2mFPwRfuP3QgZjhRAemLjRmy2W",
  "key27": "5Wp2H7aiRL31Rxd4SqD7ftc1xQ5h41ocTRbGX2Rmtt6o4Rx2hhrQ6uAcNSjY4RcuQ4CsfKBByvn783ry5FLiXuaX",
  "key28": "5x2eUEToKtgimDphU3asK8dohETHtrwuTf1s6jf5r2iSPAwjJqPZuzhSivxCwEyrbQn9P4Ea1fMHeeRWJd1YAqr3",
  "key29": "2taqjjwFH4Djy54dfGAsV8nWWEj5MBa8wv8oRM76WqsbF7MxJYvTEWZ73Hj5XFVVP55HV36nRMv3PFrc4ebEkVrh",
  "key30": "2frhME9JLMR11JKuaWTfEJhyFDkVwzmPGsFN5Av5Ye5Kfzb6HR4Xk7ehS1NBF9FEpRfCwMJN5LECrhs2J72jtym3",
  "key31": "28jRn92gHb5wT3mj6pJUGQZsh8unsGSMzF1gPW9VdRom15M3AuoJ8W73mMSLRFfGNzKwKE5EyhMzXCZQ59XfcZXB",
  "key32": "2Ba64B7WbHc8xevHK8gqUZbNEdyUGUUKk2H8FsCiuiBpo4iSDba1v3oU4MiitSSDBx7kaeAxqTpMEkKSys5B913r",
  "key33": "31c6KvRPuX5xkzXmdCaw3Z33itWtoow6zipMyHttspX9K9evbZb7dpPu2DCuFq6Qob7LPYbNYQ7VMDb7DEf6YwLi",
  "key34": "3cAchihGizPkcG5WB4Kk1QoysMoXYZMhJgdRMUfmqr4babom8Qpsos7a6zNuxfRa2aMosbKUyVLJvbq4GqkdZeeF",
  "key35": "3L9hTKRq8d1uYLw3M2bCdBNgzyYfXzUrHncT7JBYWxDWvCQMfnK5ESrx1pkK5YaEDZHdZAtpBFpYA7xaLGcpLHBA",
  "key36": "5JzCc9vYSYaMn7taMHD9prV8cEiyZ9AYmk2tAAWrpyhnJzHG5D4s1Gz41QsNVmxV1LgXfGkaWkEP29dnVGx2MoRR",
  "key37": "5FMZE8pYz94Du9WP9mB7zKkoE3iJpYmffh6jVkLJx3oGudkksAhekVEwku6utZkhRfSUway37RfhkBa1QJyiTXP1",
  "key38": "4hcyVJrE5gob3HPRbbfRJHUamodBre8rRnusG2T7KYxKr48hXLiMEbWgBdisGZaxLMhL6xc2PQ8qQjn8keaUGVKS",
  "key39": "2aEPUbg6RZQBNJGVub3kmXTw7AQAFFWV5hUE5vKHQdxT7UiywuciAzrjSbsHeaczz5dAs4Z61gzeb5UxCNXwVAAA"
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
