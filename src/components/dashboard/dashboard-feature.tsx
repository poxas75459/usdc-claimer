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
    "2ADLK88iuGtVt2hZBw9Dmpprr8oSL1YwVg4o84Uf2eB1x1d6gwQ1xvY6odGA8Bjq1jPEEtCpqseVgs9fUUMAEs3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42A9eGUXLq7mai39vMb7brUGEsUoXDbr7vT1LTR19FrK1tJTXqfTEKVjtBKZdMP7tjktNwrYx48GSyVGtYmJfP1r",
  "key1": "5V5mRh6E7aVf8WAtkJJJPgrzY1DebCun4fpi4TPuR4WEvJBbp5Y9vHFfaKZsVARuqPPEUg3bf1kFcZZmWv329mc4",
  "key2": "3WEqSBZ7Rwp2HgStYEQSmtQATk2gdDZ1huUVG5pktyJCoJdtZxGoZZEV9eujXyyUqgdaK7KLAZRQa4ZiCm5qobQL",
  "key3": "5FBDZA1Xyt9pL4vLBGzoP8f4uexgJ5Mg3qEqnvmGZwzp3VjS867xe68WLnrDM6TLmmcF5QbgrsiPcgTLcKBkFLsW",
  "key4": "5p3iF5NUyiwgeBG7q46H3TshrkRqcy2vz944FNpiYk5oJReRxj3WXsUbC6VVPM8ywAHehbySHJ1cd2dYH3tPgtkR",
  "key5": "FNgY7DxMo25pC784FFpUDYnv6dEuAYK8VL8qJQQrEzSmYERKCE52ZPe18BqPYFnZKwFdAySvWCSkaoMaZx2KVRz",
  "key6": "5n9DEzZKaV3ZYWTn5DHND4WPRBQir8HjAeQCzZDdWzUFwvjf3tpdKB5G2Zu3VTwgfuAi3SWTSBDsKe3NivddEjj2",
  "key7": "3KtNFae1EPV9zhd7xF7EYTV4K8RLR3m8UEbNL5q75KWXHo5CMxevW9pKU3EERtp5jKDT3BcHTca6wqboZcAsrNCP",
  "key8": "34ZUJ5xRjNCmY8VTt9CNZ7ZTJzsoRqCZMUfRJxgQBkEoD4xmK9LAUXT5SuoF8gFBXsumFTwb1yu6U3JNJrgsEGtD",
  "key9": "3J4AY849omMVw9MU8nnbmbFxBMREECozk9D75gNxn3BBY1ATUA3MZVXMKteLWMFw7dBsrfd6jyt7UpVJP2Xwo2HN",
  "key10": "4KzphKynDTNDWMvkKdHqd6srQjx1ujotpfjcwu4JiWSKkhfMs7wYqRDTwQYjH3DCAm1rwjUD3WjNFkRxHNBkmUCv",
  "key11": "3QdBzLiQVCSPWRN42FHWpUE58yvkCFdM6s7edneviEFULRQpmCjK9xUjpJnUSARWGXM8P8WAHwm2bHz6QEEeEWa6",
  "key12": "283SVZcv9KLqScpbmKph6zFZTkWBZ7wNA2pCQqC1Eh9ocdWVyin8YmPV5pVWQchE2kaQZfHdBR8BV2YUhjYTtzkT",
  "key13": "4V3JqUwLaye8LAFUAFVbETMFMteyocY9bdJ6BBu2ahd1fTm5sMcoeq1fpUzVw7LiF7V25tJLQSWMtWBUM7DEVSWJ",
  "key14": "51XXk95gxMkH2KVsVye65Yw4XuQZUqxKQ4m62DLZDoXFdpt9eGfRMCq9rQbUdfoRQbyJeFzXSVedBB9jkA7UZtpd",
  "key15": "2A1EuXsCNULwLfiQYQQxt7qiNitv3TZC5srdg6vB1sUMCHzfQFqT6bw1Q4ynSu3HqJ5g2ndpSP5h1ACwWeLyfZMA",
  "key16": "5Jq1rd7pYw7xFs8p8y3nPc3oaGLRyJDa2Sqoy77ggUkAZM6jTkPuWFBhDYtTZXoBrN98GXXwokiGLbv5MqFes473",
  "key17": "44oEobn8Z1miqcuxALHpYjqUcWnu4CaL5ezEAeYnz8U15bs9LimRJ3YVgU3YfAyYhAEjgDmem3RrH5ihToWFt1Yp",
  "key18": "HXRtEpM6byDmz1NBUJ9jns9gdbbNpawkvNQQrgH1byjUqmizV9FVnCbLFiFUHXFZhu7GS4ve6jrpeEDVY9NzkuJ",
  "key19": "63KYoPSYKuGnwR2Skk2P9HPK1Wc6XuCmRuxHotuTjwjg7SmUKTrSCEnYnNAfgJkYzCJuX7NLxVrQxDc8SkneQ66P",
  "key20": "4p6Pyk6dx3c5sdQ6a6TehHmk544Dpc8gWPmXS6vZXCjC8A7KjikXLaYbkvYSquVstF8prqZBP4XahzHtCBM48Uv1",
  "key21": "3CX7GpnqPt3ExgsuM5iXtRc4Mvij7PfrdNfuxbG9gQzUUuDo4RdRiKd5a2Y4ZrWHjX9oWgUkNGpEVVy4MjoxvKof",
  "key22": "21fVqNzPdQNABE6hhFz98xSNh4kU2MGEArRtu4F2kKEETMAk1fH5KYtz3ehoW1sC7xJMZH5EdRMkZbNvD9th9VTU",
  "key23": "99DUtJV8G3HsUedwF7PZDkFxKBq8u4mex8cUiMkjnDXAj8F3TUrnm9dN77de8nzjpwxuAfAu1qX4FzwyejdRhrK",
  "key24": "2FMDmCpnWWWQQxfQZDPKV5riLiaJARsko1CdSp1rdE38rTx4ymgbS1s6jULh98WGMmKA9kjDxMAQ71trofdQTkAE",
  "key25": "5WscFocoRY2ry9mnmQRbm1McvXUmTcQ91vWCexfg7LmcPrrFhTriQnQMrYHM5VRT8bmDyk2vuuXyy4Z3xVa5aDTi",
  "key26": "WY1geYF64sx67VwC4syR8eDGDrNFkZGQRyDwcCLFuQbaqFzEyJX6gujBGvcreWWsaTZbRzfRw3598Wq3usjGafW",
  "key27": "2CAhqUCfw92uZP4Scvr8PepXFjLAFdnDuv2mgyzrnD6nD4azMK62wAPcwG6WB8XAVs7qHgXF6LECiP4pLPsuy4y9",
  "key28": "34fmKQsEqGJfnAN6vSmomShx7QCqiVDKaA9HF4hc4EuWTXndv1B5HGYH1Ydxj2MC41TMnhYqhs4dhaNaWswNFdT8",
  "key29": "2Tf2UvjrNB5nKfYshqiDbAGMs4Wjd5J9oWVeGTMz8KEiG6fFvriEzrCiPMXuayghXSzWivkZuPfGQN333wfDg8YP",
  "key30": "3ftFFwEjh7hWmGzeQNQTTgZYtNU5kSjZKrPH8rMBULgr7jcTcj2v9ESS4KkXxWyhqyZTNVhF31LpndBjbbXHDkzn",
  "key31": "2TrcMtYwTmz8tbT2U8c31YSSRrbPuaeyftgURDdXPuePjpCpz7B3MC4vhQdAiwJ356hfYs159Te9hb6L5CP1LzX5",
  "key32": "4weKtx4UKtQh5bKKsKtuME13XzWDQkLoGSJHevdUXX5hidEFNsBww3RMHwbYpgExizU2ABx6pFXa6eaRwst5Gs7e",
  "key33": "2wnZUt15M7bCm862wLJzTABeEB58hu1MhQEABy5kU5KgBpWZSuV3VbDE5dGTrr3fue3UCZrPfTT6Yz9mcK7DE5ri",
  "key34": "2yvMsfXWHd7jjPikMtzexEdoEH44uyZQXPnZLaivjGteJ2EuhAcaCZFJDj7jDjQWELMxhKykuknSQcQktQnpY5SN",
  "key35": "3N8MB5ga6t94egMDkPpe2MRn2WYGbEUwXLdzGPBNApFqpLWwU4nZfQF8zt7fzA1p1ikVc6dX6uJxzSJxWSLpV6D7",
  "key36": "36hoAc1oCgFyXLPS32zN9rqNfyPBTVGMdSwEZdz4iKXfQrBp1LX8CKzFNBxfsRmbPLMBfMiVRKCHSphtgJT1pV9M",
  "key37": "eaQ21TgpQoYkyANbZKLhCTEH6srbNswypAvZRMCYXd7NtCCY4FVShcQPhpjmvpd9RDzpZ2G4CdwnB5ecCKUrezg",
  "key38": "4o1iwKZPufCA7MkpzNzkFnQa3CyFTYui1Lc5Wjr419KzHDwbQTYKHxgCo25TvG8jcgrAG4WLvoNFPPbErUUxzDVu",
  "key39": "2TuoUBaGFwGD3jwWupJLKdc2KyX9AzVvtWvWwJ71ppomyEuwnjc6D3t1hYzpRkNsJNwVvxHADW237rSGbrhDVC4e",
  "key40": "5MCC9QJNgLvQeEyVwjD5XvMoubTbkZoxfPKnXXakJUFqDxWax1zcXCB8EqTWHDRoTBMFje8NTKeNai4zVQe6U4t7",
  "key41": "39KywWcCj6aVpSmyfQ7exxSa2uHAtTnRyJFDpqpW3V7oXMvpLzxEZy3etNc36Vh6Y78Z1NSvf1DpuHYRPaDBRg8y",
  "key42": "5kUzGoCtn3y1rmdHunW8zpkTvUB6kCggKuve5SAgvihsCtSzcs5PNAm6bN6u3zwaBGrUozhvZzP8p3TdiE5TWtyq"
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
