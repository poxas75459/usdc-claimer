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
    "K7s3j72fHwW38MJ5ViNCj8dCJjnu43yjCxT19MTicDcYBGnEvCo5Xxkx3aZETyrkYaM19933oJfiqkPic1VU2dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pK2Md2FUMzdv7NfBapzs86L2GLn3yF65vQFqdPeuKoMYVrsKhgcQttv5eyTLL9QcuRuqLdGpHd9Xn6UUccwkhRP",
  "key1": "5skWQN5rR9odQ1enpN8QbUAs8TFAuc84T9rgxUuBASdyb6XDXGZyazRizdaxDhPv3GA92V7275UosLPcB1Utmbf2",
  "key2": "2gjptQ4bjhs66pSmX663L8djMJgeCAsXp366CASgCPcDdvqhC6DvfFNNivtbKTBkTwFqkgjMUi2dxewsCovzyqhH",
  "key3": "3KXtVsWu7jnTEEvZRHibmyfXMGJXTQ1yxfWRmxLVE2mvnRGduHm2q65Y4tPvHvj2Poj4VAWupYToxKMYHtULsK3V",
  "key4": "2ibvebUewzWUZEWJC7mdzDba3v7nXmzsxFWgfNxz8tbopy9QY7Wx4zmXnoP6XSqd5uCXcRdqnNWwehkwiJu8tgE5",
  "key5": "4pggWSC39qphTEU18CQ7Q3Xppe6G9HLjSDrHxaPPCUDaazV7GUnNjPDUbJMQo6bNsQ9nQpXDuhMQBc7M8JMHjS2N",
  "key6": "2SbmXx6MQwPRps6HUPmGqoTNtCXpZLXqNq1pKBybH72sCLf84zxbgr8i3stdgZnwjJYFZrhwe1iKzvjpL7KY6sgD",
  "key7": "4PNWT7x9rgxbF8J3FFFSJsh64hre3BCvAUJF2qAxkEHtKTHiYU4wrb913khMXi2p1nNRRUMG9QKGm31TCKfbfbzA",
  "key8": "578VzSoVwZcHxztaguq4qpywdJvaJxmGtd5D6jLf7c6QHzmG2WyFKBwzTassNAsAYkxmKAoC2WYynD46pHb1fdJc",
  "key9": "2m7c9npYtF6MAzH2Vni7oELo1PmXfWDZfbhBiz5QgJJo6sSTkXe962LeA7qwe6ZB9h4NCj9Gboh51RuLmjEEyk6t",
  "key10": "2b4Dz7x2Urc3dXn6xfLD8ztsurddsqwsZRaE9cKtzfmWRpKcxaG1MEtvd5mRjZzLNQPiY26kXkwx89xfHqct5K41",
  "key11": "sbsiUq9uVyCVqbriRW1z9NWtkqMYP6wFLTW9iEHRaPuosSEWezHw3RmFK1Hpfb1Gw9uhv9kV2y1CeKdHWStJwy7",
  "key12": "2hBvDbTYKcbPPC8fo3qwNnyXHu6Lz9W69TzZWuH4difnBe8z3Zw2iDnyhhDGBBc4cKKoiJt1KoudJn8ny27RxxSm",
  "key13": "5eFQv1ZhCsJ6ob9Lno8xzNSx5RigDJiaou1bHzt6mLKf59smp82zXjzFAkXkWPTrRK96rmcCeHDc6eTJZDuikkMm",
  "key14": "5grS7pV9MuKELHZfoRAkuuAjBZHDrRXyNgSa8SxGEtdjPPDRLmSmbsa6rskWCz8645XaC6u2kozcSJAPcQmCntji",
  "key15": "38HoiRHwTEcY7LatVEUWdNdYbNdBdp4ebvzkDGSzAuFqNDp1khQcn8vD6pZ2HekYtbTX23zh9wVMGjo8fnNku87r",
  "key16": "4f7noXTWY8HkUtZTJ3JhZtVDReUTGR7fzj5sqU1my8XMQaGTWkvrEbD1Caw5krPn3YskjdKBSoGqVz864bt8cmWB",
  "key17": "59YSCW4U228ThWhQMraqkNesE3oL957A5NRXtJovgZR498dHBcBW4fK97aCCN6D2hRqDsX3Xbc2iyUgDPxG6azun",
  "key18": "v6vWf7yrmVyPb2z3S78pD2bpa8pefGbN1FF7HPTtk6hXGLM1S3roVVHnEFUGfZEK14oPEqMjeYbGjpvtuMESfG1",
  "key19": "2wSwJheBL5Je6CVcszr7LEmEHwwsLF2vLgD8UJkUN6DKwbfpgHVH7bPJyqWgLTdCMH5zhBdymZuruf1uXqjKA6Nf",
  "key20": "5ct1wWkm5z8sA8ufiPH5c83e3dABfkkGU8FEJ4q24sdsmiXc1LV9XzYLwPAo3K9wzk8Cv1ocnFGz9B8NwgJCdtr1",
  "key21": "5XnDACr48SA3jJtjfopWKgMHryx1EqSTEtXDmfGGBsFpu2LeF95sxqcPhS67jJ8Wt8cS9YoBD5X1hVmciZh4BkkH",
  "key22": "4xNBNBU5WivY595WnH7TBaPyBcVpQPm6tm2dw62zv5pNdLGakfVTXAqD6Dxb7fdv5myf3NLfzvermSuSZgrYdgLJ",
  "key23": "5tqrgTq4xeP5FHwwG35rhFpC2FgQjAKnfHXgpKoRQhqioDrdQ68m4JaFe3pTd66jZh3MaeYEYiDW2QKvqedy3qRN",
  "key24": "26m29ArgZEYaEAsVe6MLg6Q5zcvySf7ghFDZBP6zR9bzis5fMh2Yd1Cg49Xjg9GZatcXPeGzdLrQLAXFdZvd851U",
  "key25": "2N1HL3Rq5GpSpRag9LXxihpDoQyGqKug8nALN6SivRu2Fa5PKY8XNbpWX5hqu1GprHAenmCanQc8QM5GNcsXq6Cc",
  "key26": "5NTgurN8kJrFt9ZHGpBH16WYKFyKktcL3kv47E4tt8qrjm9Yow6eprwSznsL5pA1Yvoa2sS4RZ7DeajY8npsknuR",
  "key27": "4tYfhau7jtRydeuecJGhHWYtCK6Toq6H1boUnZFdSkx3AQyeK2aTRVAKPAeu86ahJWDc5rYWiRCKgwNHSBvsNCL1",
  "key28": "4j1QMhpP7VVUGhHYnjc4T53WEYWkZvjtfi5xf5CXqnWDyt3UTrJF2B1rTWR61wieadw7b6wvirTwd8S6XJzq1uji",
  "key29": "4pkwF8MU3VbHuW5PDfMejqQ5adzzzX4SUTqiNUtns2PjfiUjJMpfv1gt1Cxq7AqCPysbxTtj61mH1JPA7rzSJ1eS",
  "key30": "2QUqzA8vznrzTogwMogftRJfYfQm6MxSpX2F1fH8cD5uDhPzDyZTzrV3HPjc5SXcWwXCkqPzPr4Svh7RXa4mxGEd",
  "key31": "zUjsVc7KZjXpNSgtgdf7JgXks837Y2L76McfuwarHBHsBerKLZkTBZj52RXqt6wHLZMvwf7zvX9Lf3gvftntGNN",
  "key32": "4xdkn1pLKX4qsusZ851mTdFrG7Myi6aAygG1hq17pm2waPWqpm72eesptiZZAbJBnHfLxJqPm2Gbo81XazrCiUqK",
  "key33": "2mNNcv52DpooWAUMpAHenswd3gHfir7EVHG4vNnR86xskMZAQsUAepLHaXUy8Gd53oU89BgdR2qKnoNhPGVnx5cd",
  "key34": "4zFwso2iw3HXUwPG82ZBs1rB9EkZ25gEwzEcizcsNL9uTX9WPEGg37rdPocvt7TkZX3BqHeS5MXLEuYvsc1KTiBU",
  "key35": "2koNwsm6w4MwtjvHCRtNqMpdTEVCWy5Xo4XrLezfbXYBPAbgrBXpihKfv6HFBqWwK3wk5CQ78Tqs6ov4oS9PACEA",
  "key36": "2gWZW9p7KuQX5thLPYd8gzUsaTvmVmgcxUdwe7yfxaQ5bRMvL7eAjGSvhVSVWET2PC8726LwLafj9pAXMptyhHcb",
  "key37": "3BMfGALE4U3C4RM2LnExjYzFJp7goq6wEk8JX4x4yk8YRo9XEVJkKrQR2uNMkSXNbRegeDwfnoczwnV9BUFYn9AE",
  "key38": "x6JjKKXf1fSm4T5U2s2aPqJMyTdBZQD9xuxhJ2ttNdqMDpgqabe8JnQJRMs8SQjxxtkFpksksjsd43xdh7TjWum",
  "key39": "46mKvbvhYWqwfQasfMZZTBr2b7tUdfnVbj15M46P9r8gLdfhmbsYVihahjnUmuWnGv7nRQvLEgohCpPF3Wg1QSn1",
  "key40": "44XwmMFehG8DAJv9Xdou5qSQ6cypaSF6JX7FQvZFsfuRwK1JCs6RWYNbKWrZ2cJoLChYQpm1AhsdiAanK19Wep9w",
  "key41": "2nCP45D5wNQq58iqL7Tzgx5aPru8hwDZqbsFfeSDNRy2vzv9fAqJDTD6xZReBXKLc8oqJsgKHDrz1Gv3rwYKka89",
  "key42": "nq4PSGNsFmcosWgiRZs2xFSHCjiWmCCHtEtJjkadTFK9S5mJSAHVVVSF42UVhECWvMMEr8rQVrJs7b5jaUhUz8Y",
  "key43": "5wr3WX7Vsie1sSxzvjFcnP1wTEEEsakJR5XhASWu8CULLR9bNG6YgD5p5J5yCDHs8NonrVNYRYYoeLa1zKRvMbwi",
  "key44": "2bjVR3RHLAzthqeVRBw2cn59RwHTQJYgzqwbsZ6LoA4f354zkVu5cPvYgxJbJ6KFqNFmh9jtXFDWV3fgVYGf4GYL",
  "key45": "5hEKC6oQ6iRGbaGHDTZT6vWvXE82DzbRes3bekRy1qo6XGits6CqzCZ82s9LUPMQ4TZT39mWfNm1eQrww19LQVrx",
  "key46": "3PuRRHDFwbJa2JH57r7JxdKASo2XfLBenYfRvDY2m1dps954wJJCa5HMnxE2n2p6r5TLCfNQ4fnJiXnYHWqLtcuZ",
  "key47": "3ytBaK8bcUyp6vy3mEAfo15UWyaLDVvDPurzb521p4pxorLeuREpVQGapuMtuW2kvWJsKQkXLoQuQNMyd8LAoaLu",
  "key48": "2GNC9hXt1P2dkHWNjNAXQ21LgftBfuxpP8ggUqwBqGYm26SMAD8yYkYdTD75SRgByN9kQ8fthskUAC76VdEYE2vg",
  "key49": "WPDJPioacdLw6f98b2wRwLS3DR2qxwU2ji4aQVSxEGwAyALGUUvxmjtopxKQk2cBAk5o8Zm7Y3zX8WdEtLxz9v7"
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
