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
    "57MyTDJ7cwR35CUZ3icuVoP9S5s8GBfxrWWp6qpz4hc3oAGwYfZ1cW6tDDTVAu7pvyub3bnXbfsbHed9ndeyDPv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65882usma7pU63Mkwy2zSsnCXuw7Hwh4SftKPU3q5Sgy6E3pVji5hCb25n6SufMi9GZ8gE8tFwuRadpGHwiZGvBd",
  "key1": "53ufu7pLE6U17ZVsSbdWAjJNCu3Pg9XRZFe3vNgXBpmFk5dB6kAsycgnKeBv4fy2TJpbjB7MGc7KpBfvetfpWxBf",
  "key2": "5hGZkAatKg47jfxiHivYgJjkAGa7AbYLGtbQNLF97PBrgzcrBC1nzNrbFtmnxRKyLaKvTkMnix4puytdFAcWFQhW",
  "key3": "XcWxsEcfHX9NUVFKXE9RgwV9vKSz8g2qtsXuMdB54uUWEeauY1Z5y7PMPAjwdeToztfCrwZL2qXuzwL6ATNbjhY",
  "key4": "3jy4aYyPR8s51wV62gKZvnnh1DGyCwjpAc769tW4UXTWvWhSXEhfj6zdPapVT1wwfVwhGvZGgwmJMNvWg8hyHaHt",
  "key5": "4u4kzhmFcYAyXToNBHGRzLd6ctP13N9LQbzuSAbkkrBpXvG5SDf1NXp5XQrzGZYSMEtnGLXLUs9qMkyGPWhLoRYR",
  "key6": "2WR7KRe1t94oFtLhvkydmktaBjdUWNNUYw5TATJ29FoaPGbRYwZeWFqpabceYPc27Ae3C6j4hsSMzJa4tL8oDngq",
  "key7": "3kjTTEGrQF9PDrNq4RKxjm2c2FsGdxtKditZ666KknXk5RrSh4eBXeaKXDGxfTseMPPTSq33Bzz1KUPDHz7YNQN8",
  "key8": "2M6RWgigGR6pTdfeCJ3ox1NJncTtXrrVqp7P1yay9tECREFyUagLCgFPdLxWXHGepto3N7tW66osMcTV2taSQvYq",
  "key9": "2pkQMfbEECQhcZNotJBX39s45yvr3jBqD3BH2xzU4xapkxD6UA8eNJZqYMzCypRiU2vTBBE7eg9uZP2EETtGV6o6",
  "key10": "24Yb5vWMAAtYD3CJPjvL9anKRZEfZorvZ9gikR6LAdBo4yRH5gvrURjTiE4kTuzijTfJrj7ugM8wh2aqHd66JCUF",
  "key11": "GHbBMZR8kLSxDooNZsBiqEQexYon7qF4PrxgdEDoAr4N7yxPGW5zaBF1TpmUn2KJyE14xoqADyRYG8qbF6ipduJ",
  "key12": "2WktmWSjP1b8Y7AyM21FcZ1EPYoDtJne9uuAJKr95yxmVKGADYWZxuM38RtYyGi2NkxVskG5MhqxHqugKaPGYGUZ",
  "key13": "3eRp8RURFVZGuqk4KbM4EfWNqCJUi242ZTGa6qduAZ3kXVZxkCxeoe2GBGkDTNPqTAKrekjban6apvmZscU7kwXN",
  "key14": "2aKpab5RaJCt6zDS2DCoWz6EjWaLKMC4GeDgZ9RX1dSLsqCAiPdm4dtRhHPj7WjZFJwFx4tCksVF4srubYb4sMwk",
  "key15": "3C19WemhbwhcjgzSdfMmPCSecdhXJnAwhfBbVbRoAU6Jhcyj6R96rMg9SzRDckez7JQwNuDPK6dNCoY6Rm5AfpLj",
  "key16": "ixrKbgMTm8YZMr91FzuBg4ExjeersQSQQmFXujugo4Wpu1zN8UGjUg8HNJeYVWgCC3yDhSjEVSwGg9hifoee9ki",
  "key17": "47RKiSfjnnAz7ExfLCcZ3JqxtuUseCBH9rMYUVq7TnShKTEPvFyo27MnnESTduTeKpPDWQNezrdR93j66ZcPNzRv",
  "key18": "jtGGbZ3p9YZYgUxKsNk9bmvx4o3k6TWUXidgiFuym9T6j2xidcbXDkBSXAkCheM7jHSyrdayouU3w3jXMLPAdKy",
  "key19": "3PtVNNVmzjMZPqr3pM2MZ6b7RGPaoEUQfcvTr2vXNgxtnThthVbZLDeDpQPNGT7UuqPtWiL7a9pGTyPgMFTLEY9C",
  "key20": "4r6E2mNpoComqAv97nWvLURX4mezuu693i3otg4YiPRv8iJmGu7y1GiRLsRMrXhCWgkzZXHS1hH9i9L2ncxf9x2H",
  "key21": "4GRdgz48H5wukzvTtyxQShNMNC846WqvzMczRKDfvbSQkoTg5gSF3ie4LHBgz7gUGDJ8cBVjFBvLYkMxBZdiJYEU",
  "key22": "659MCmh6GPjwSLTr8qCfzSrSUdUzqGgLWr91jkLmqX669D3tioeXxaQPCAJE36bPoBxjz69Ao7uhfpJ89BXUrs3f",
  "key23": "2K9Jtt1JFKYir72j1cs9m5U3kaS1r21dSgaXSG9AFBHLaYTvTfQhZPR5NGsZ6dpqpiEwRDhugSf5a7V8e1qEJhEu",
  "key24": "2fFsbUjXAwiZYAtk42mwvj1jeiT6T8efWPxbmgfXGtU1NaKVakn2weVm7YKXG8fUaXnhKSvkcEDVWN2AWLQvpmiQ",
  "key25": "43GvNSxc24m2jZ68ffQBFdWLDfzrBuqQssAa6w5rAQdvT3uTykAR6gorJHNE6LTgFytx5azoNodRyQkVs7HRM12E",
  "key26": "3RgaJG5FMnt6GVhnZee3WvtPgNfdnxrNCwJ9yijXkzi8VkbPMo2ft4Lat2prqbYYTJKYxyW66ErZPKn6caCiYYqn",
  "key27": "4LaDa52zuaHRHxsA4rSswcGZujQUxFztNd2FVDGxnMbcp9KpNajbkrMy97GtZcTTwC2tpvDhhXtuciEosFEdRWuP",
  "key28": "5PStV1SmHLYRDBGEmf1JaSQqyHdixXh9bppX9kFSckQPzhqMkNefBMbzoyTy4D8FVFFzAWpNytPGx8DJodzELQda",
  "key29": "3AiLtsnrgMZAPDhbrsN8RThneZAw6DyeahJSLcrt64AYdkFcDB6TYk1hfTxPAj3j491JnHxnHqAcp2TDbNxexg3w",
  "key30": "5nb1SKHBg8DKMaMu358LPCkM34JbB9Fd2m4bvR94nNCpUTyAb1pyUvfq4mDvfYui5S8vFSzhEnJDsBTzGdY3Kvs8",
  "key31": "2hzgjPioRwqUQQcC2Q1oDN4bkHwPpBGvE15HRLX15Xgx9wzkBArRtWvLHrw9ra5EvkXDfb6hAG6a7yBsADyogytt",
  "key32": "5HCfXcdojcqb5FekMzTum97pa3Aunbwntk7DhKa9Ud9vY4YyHCEUQ6RvcyVnWSVVBQq32yB3sT1RJh1pubNDesER",
  "key33": "5zh69bECesb7ux59jH1YdqrqruUKkoDyNQ7n5XLSYpDj5FUyjfLKEumSZ4VemsLQX75LMshzDxC5HpvdGXzaytyT",
  "key34": "2CLq57JdAmxzYsdhYoeqpfauP4YsCxQSbBbBwsBxfmU9sfaUREdmA7PWrwMNBC3g1sWm2ZukkaXgmcYF6rGtgDc9",
  "key35": "4S4HuchgDqZVVYWTbqQFakW2Gj6UZdGLaH75fkWBxPZcVUL5uMZZAZVWiomSFiJA7LLT4t69ubcaaDCyFgEAZHdn",
  "key36": "5EfNiZtPEmfTvArVUrYMuRUB2BLMgDybQQFnMo68ySSoTmwqrW4af2chWfnxSX3qxk3mDMkYPR31uFVCXU4mL9io",
  "key37": "39Eokq4Y9vAg3nTxM2rsFfNqCuQ1LkvhP3WSr8jC7XrKnTGA1zo2EdssKuJPgpMepepSFRDovVySSHAJppYNQUoT",
  "key38": "BFWVpt51dmfprDmYWJbENXjbcevjMnhU2t2injVutq2sJc5q9pWjLi9KcPTPtDsAuM627ZhsCnyLd2S3LRmbT4g",
  "key39": "2z66jbsT8nts25W9byzNYsrSiVhDH9QDwXB7FrrrqoprtPLUVRoDRYnQCSr7qXkhyRAqziJjajGcZrHbTr3Jm2w3",
  "key40": "5QpaWRtQ3pSrarhoQm9Bnw7CzskyHYDQMSN95pKrEmZ56qTTfBWasj7USNCPTs6vt64Fv694Y7tYaCtkrmudzNCd",
  "key41": "4Tu1U9W86HGvxjHu43p6ZB7qJtk4x17TKMttbuUHpq5awFNMkTegWmbyRMX8gnxN4KEH2sacuRReR7DpMZz7bq8R",
  "key42": "3kZDp9qt6N6WWEaAjkCHaYiPqL2aje6pWJTr4EBBcfHbdgo4D7ZwuXoaH2VEb4euyMeZ8Qp4UdxC2L8rkoPfCE5J",
  "key43": "4btpKn6B4D4VVLyjVwhSnpjuxFht465fiSNkmM7eqWsd1vhFBhExn2PvzAaAZdR1K7952vhbSpKv72smS33K2hY4",
  "key44": "KDo8SwUJ3DFZnaX82JcaBgmtuvusx6ekmnnDPDoEvN6QtzeBYZ1BtTHE8HoyKoST4sLkTEHy3Sg2nqA46y8qnHD",
  "key45": "5PVVmtjivCKWznD7Ys9LLTUPXEyevge1Fgx1TNEvCkZKY6ty7xg6iSFK6JyCeGdhucKtqSErow29f9PhM27F7t15"
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
