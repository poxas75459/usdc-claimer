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
    "56VPNYuPDPza9fVS4LVfd9UmdJgVWWTsg6Fb4ULryZT16Zk4k4ece6eaDQ98cvAobtCUW3kq4ogek7oQhLvMaFED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZKvfcnE4v1q4zTvbXhCywt9HeeSDqdnsQxfQbs6KF38yvJSC2ARdJKZkvrognqr68kXu4ydciyQ1dUmeFciBwm",
  "key1": "3mfMt9J9rvRS885GGjDCvN6pi7SC4XchefB2G9riqrxjLUBggjJg49FCxSYtVX42ixDEYvDyHbWN3RunkvLJ8L2q",
  "key2": "5iikCJhFnaQKpmkrABZw8gFguEMMPr6p3UUGXHAwx8mXEjKuqyTq1fApPwCXd2ywZB3PKVzyj6aq8SWRcd1CxWsT",
  "key3": "c3zUmUr227oh7jb8wQnHN1wwpTpYmPQT8CFHXoPXYfQ9LDS4QiaSKtL4f7d8tarXD6rVqgruGvkzNjVryKr1krf",
  "key4": "4fGT3WT3tnWBAk2DyiHZZG98JmCGrpwddUXyvVA4iMDL87MZjsXPmwPBcT2jZk1gTKFjp58sbGsbYWkupgr15nRL",
  "key5": "3T9P6dA8M9zxWZP9Dpg114eNuPH2S4wBSB8Nxs9Z6twnkxHupKPFniZx33pkKXq4f3qKt7sEBY4Ho1646eb2tSAH",
  "key6": "4ttVfrfaKmF1cAMijqBuwnYP57U34ser469kA9NauLXLHfn2VAxoqzNCbpbJMfjs2nydP3CzdvDp74aZNMbLXRTL",
  "key7": "65AEWQFM63MbuJhcVGz5WvD1fTio1rdVhWEEuNxgAs5WL1pgHDDJQqeh9LGHwkACnu8P9VBrp9akdHMYJgxH3x8B",
  "key8": "3Apf48NCwv6qd79aHWTgAqwEPFmJP3VXcsZAyFvScJ4v4cVkZqDncyPuWuYiWwNMSRFTfzvwQUd68ioAfEMA9pw4",
  "key9": "5A9tuf5MLZTDnpjG4eT3N1eXsLrxb9J2av7sD29f6QZXWL2YBskapsmTUxuP7F6P9w16ybzJFAgWWBUdoHmpDK9m",
  "key10": "4pYM7KopRNja2PRQhFVvb2qHWuwQttArK5sUDy7P2qtsb5ryu7Xn84n6x43sSXTfpN9pXWXGz8QuhZswXWC6uEQ",
  "key11": "5GdPpeFDx4g5Ekd36XWqFMw8TN3imfnbR6h2BJgG7CXDCozB5bfXt9w925ink2XWs2HMLU5ia6dbYLbccHRU1tCu",
  "key12": "5xrGrBG5YNbAHtgtnZxQuyGYHhpJE7ZV8A9QxSeXgFCspcTo5HjAEpAHGuEGoh37eUeEEHYVDnvjA2H6Lo2FCdZ1",
  "key13": "PJWSA93jsht9yt3QKzXCoWACQ6cvAknNnyy6CYp257h6RWnQquAB7miP46ygDW77y3qwqHWmauLEzRzKEpbSeE5",
  "key14": "4pW8t8pgBBtQEVqW8VkZJL3FbHKn4TL8V7dk7hRLP3H3VT6SsLMvydiemoJ731BVnbfG9ch2e6E9KKVxuX57pYGa",
  "key15": "vcafieU8frJcTCh6bMgeziw34ZXibhLbwj4Gjos4Tn2ZpAuNKKHSdCTq8uPPHf4jwRaiCdQppGZijtLfMYJVZqN",
  "key16": "2gs6tZnymTtqyZss1nZX1HgLjgeEohq9aHWhWcbMQXKJjfwc96ZVPJiBGT9bCoq5vqoJqaoNnNqXdKmWr7SYi2GZ",
  "key17": "4DpQmGr6Z8kP3vmPnVazSqsoj6SfUDiax7ovXdQycVWGFVReEJw51rMNRWnrYgZ8NanqzKbTZ7UsWrGZzCVz26Q8",
  "key18": "4QpEWMzx83kghW4FZEySTPZGQQrpFDXPu2v6VicBTHSxbFjAvrNWH9L7pL1DrdQyQNm1nV9ew73E1zr5Q6sR2UQe",
  "key19": "5q8wKKwHwbTqspc5mqnFw55RC8MnWj3oNn5YvU27DREA9QUsTHc2YNJA5Ew5NAndrGWgPnPeizQL3XffBjpvHBax",
  "key20": "2tUhRwHsrar5JzLkW69P36yahnhFsYDmx6ok1qsYE42fDWzSVwqWiKpgWfjcQRhfC3b5BJDBZrmbzyvSc2v785W9",
  "key21": "62cVypqXWLjQHfR2pb3YTbxtDtRRwV3Kjuqpz9hgCConwAzHXPQeMut6AzyA7v1roPwrFgZkKpTnzKX5RaFf9ZGe",
  "key22": "2wf5gsDmKXL4GLpxRA7gEhejTge3HByXQbkm6Hc1hb2vT81o4C2akzKmz3a5xHiTZofWwxmaRsNQ7DcvrijFGfbE",
  "key23": "zuzFenLg1V8pu6RfmWi7uxrLrzXLfpUxRZd7wzwGz8ewmL9xGq5biNj32hfN4iwgnwgibB2JEMX886DnffDM1ab",
  "key24": "5UfQ66a29wEgoqnMPxxDSCto111prD6j1mzpPm7c1DFnQvgwdParhPTBMES2s4cJR2ftT31BmX15D69JrBUgAfXv",
  "key25": "5hGNqhNqEaSxuPETioZbuD558Lgve8q7p1GhrkAsLYHVqeSyCiV7MujU8y7YcxPz3X2MUwhU4msrrm3UVFCKP4e1",
  "key26": "D12RCDwMquvCeYWuwgc6bz4vwpMhagZF7dFekYwn9FvL1C2zstpsADPEWFENHMC7G3hWk93ccZJ4TKgYiya1qyn",
  "key27": "4dZkTUCrHYdpPb4zmyAnhZtRXdmrqnUuHvmQ8j9Kt4KSMYLbdh8JxwfXqY38ogo1wiGbUxiQdFqqw6DdNtrsqryK",
  "key28": "2Uypag2rQsyULQyNH4Fi9ZVCz3KoyiqCvHth46WnWgFphfSwCRN4hahUEVh956Mw3QLkqBVfyVtgCfkvqHEKJzxT",
  "key29": "2uezhAL6ibFjsk5PqkPSREMBT8MumHwUypSgUc5KkpvUaR883eGAVJoF5qwhTvxrKAf4X4tmCvBRd8KETDtJ4WUP",
  "key30": "2Cbh5Y2bVZaWEL4H14m2rEDYha3X6GCDuUyRa66oZaJueusdXXXpdDoSoUkkdWwJ7yxMsGX6ACb1TPf3zsZcQsnu",
  "key31": "2J9MskG5y774QrSxnyNBZ3E9Q4sXmDR5RK4WWXuTuTCrzrR63nUEirku7zM1NWQUDHrAGXGnvLd6m1b9JoSi3sMe",
  "key32": "GTRi2j76hmzsYftH6s1UYaGSzrEa95hKiEPRo7bUcN4v6pD7qLSkKTbCoeSJCjDBpX1nwnZNLz6AHfmG51KbV8U",
  "key33": "3TehHtmXGRdcDGLPrcXDJuoDwvRWQByGDLZQ1ALcMb1YAvUMtEoCncsaNHeQh2i1Tq1CnxF3A2yGKDHZC3oNe8Ye",
  "key34": "4gjicDxe24TUCfwUWCfctUHgG3FBemMvrMSWsw8jGryEBn9xSsoBLuf1zahcertCoyf9y9s9C8564GxxFRvhn6Zm",
  "key35": "5UxSRQ1aMHknNToRjqxvmVZMANQZdXi5pb1YavYHBBPdhyrk5pU9VoFD5ktFTEULumD2LLcsnKaSudiQkm3m8qXB",
  "key36": "5niZYLne3fay5vSzxcdfir8HueE3USdg2oW82rroKeTRH5eTUuaXx3xtQGRxPXSsDY27cRH37aD5uvTd6XznTtms",
  "key37": "4fJ7fk7BDYx6uC1SkG4qotMEvLvoYFx1ASo5bp76tdiB955pjJeBo4JQYbSKz7D4PYdkShEkv4Xn6fTh8S9Sg3Ze",
  "key38": "3FYAAB5YYL4BZ3BoEW8Aq8XSADWs7J7Ea2FXegrE6PTVtaUf7LTvfFZ3Z3eiRSSLe5xVYQYR9DS3UjdXAoUBc4ty",
  "key39": "4JjDjxJwctA3Vfdawz62Ge3RKCx1pFXPRcLdf66emP2CiDvQEimtaiF934daGcJdq3MqaLp7TSXuTAdmcB8VmvN4",
  "key40": "4GLHQLW2coYSknVB3h9xGMg6K9S2yhe4BfYMaXpjj5rBya53nmkxiKV1Y2VuR7p14Y4U9yLxRH5iQBwjqEgtw5cT",
  "key41": "2St2xepTEPg696P2ib3aU4P4dToYwoHEkTHyLrk18S8YGpXJwLd3uasoFccxsBGSvjgXQNpxXJkw97zLLq2ztKmS",
  "key42": "4Tkpjpa6z9G9GRCwyUTF4aiGA7r58SgHBUSwJ6VP7pSUoGvySXXfqi3ifaVeoskG8944cUv1k1DuPMfFQnrDm1Zi",
  "key43": "qbVv77RQ2HTgfCuHv8fiuvKCG1gKAUhQKuanFAcQGk4JhNw7ZsgFSPnZMTJCpRimxaZTaiB6gn7SewdDwxErxmr",
  "key44": "4Vb1sBXX7MMU9VBr1uAwKVGvbzqZFoHVwDmo7DWjAq7vKRzy1sxTYMEn2gfYcQhXjLqSbwNgevru7uzJKfW3syx7"
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
