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
    "4hsxgn8VkJ4uhvtRGUJtC1nBEpTBCGJaQrAxpPS2YVmCQR1TyQYoEoXRte481yt5pMC5MejoKpG8Hmnxz3PW7Fby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BpZtQPT3LXLWDEYtfNLhqihU5B5wgQWq4buKeVB25f7t23xJtqGdusJaH5GvRGoJKDFAJR9ZsKMdYpEj7Wpx2wC",
  "key1": "5eM61hSoGzfJPLjgvUY1BSzQZhm87hPVYbNscp3RTScSgyM78KkGkDg4zkcYh4tAAmTR77KmDQp9N7ktqqhFim2E",
  "key2": "2ZtpVL5kSWcQBZtfaDmpzKeHCcsqX7ubJgAebEiP5AEuYLZvJRwSSFixpo7E9V3usv7CUznHJykAqmapdzGL5txY",
  "key3": "5xQSjyFVU1Csej4ouhLsk8G7z6HBTvnwbRhhKBNi7aAeWSwMpt69S3xTx2zP2uSHbHSVYQhuxaThUyShLkH1gCYd",
  "key4": "61Tt74NBv7BbGvCjbTyzMvbT9TLM6x7x9mZfdQZgNWvfh9RLaGcRxHUsENRrzCzQK7Mbv8ZfUu84ak4dGMrQ94gW",
  "key5": "3UbdzPw3tXSsYEqw72ieKZR2C9Em47q3dGwrbU9x6U1babxJg83KQv13bumbZTpSpKG1Cg7Ji2K6wwcvFjuPsDyf",
  "key6": "4pVY5shf6ewP1muZhrmBN2E914rnzx6fWFEF7qPgJc7kx8tQm4x3DTiLkzwBVjDyxWW7Hv4CWV3PrJxoJu4vKzzG",
  "key7": "r6QM9TfUtJzfEeFYk3hyPXXwkjbSA2Cuk1ad6P5xszMzq77FFxKFYjXSVkGKgQP66G8HFpEoYNzKxMxH6y64gBn",
  "key8": "2BYrooQbhQY7hogKFVwfmbMvffVkZi9fccGZ5LK2vTb8GxGcpJP7md2abdsxHUDiSSGESSWenkfQ2eXDJm311FSp",
  "key9": "hjhdkZxbNDwSgM3thwAYLUCdfTFcvgAaQYFjEzRGoe5BsY953Ps8xiwEDakMeoqoPc6WXro8PfVRvA7NejtAFet",
  "key10": "3dEoqWBB6RVHzGbaRfNz8Ki16nVGXx4dU928aWpBb9EiY2hqdVUH5pXTKrLTHX5r2M2Mj1izVmWisgFm2wNcczbG",
  "key11": "aLPCKz98FzPHoXgyfosbe84TGYLEZQX3Zh6x9zP694RkMB282yC5DipTQa3mdbGBsr2nMeP6LgdBCw4Wq2F9oAv",
  "key12": "5SmWcjyCi6sC7Hy433iqdH5LQb3djxHcEwbxvWXgRE4bAo4HWYk9FYsSxqUCUNz7b2CSxm1NzYjLbtmWs4CaBGhR",
  "key13": "2ZwXrmnV4Rv9bJqBwgnBSs55Ur8VsyoF62kBLBRVCPMPtrHuh67TJ4mF3L1NmsioAsEUrD1bGNhrWxXsheLLQMVp",
  "key14": "3j81kbNNkf3Aq2ft6DuvHF5L1jSBiNrLdEiPjHqYfFeSMGc5vCjLetycQJZxrC7GrnQ3VmsKZNq7RDrwqiU3CVVs",
  "key15": "5G7mLXKFHwyZC7b96KpnZ3BGmbYhu3NDRDV2x9N9K5sKQ39yf6gQh495bDiSngH7mkgavUhgAL5e4DniaM2RCa7o",
  "key16": "5JieSMgN3MhyN5qQ1ZziBbxkNqEQAJw2P4tsva5pn43inzMuTADZkw1ZLH1dhB2meKgedyBo9oB3iyHoiuH6LSza",
  "key17": "RKQeEo8rpZRp9TsGJoFKAWvXqr3Q51aUiyTn3pAJ52qurnKscnSrGX12Yfz4qmigPdRmMVFrFvGGvpjkxeJ1WGb",
  "key18": "5aZNPxcBLSLyus3a3fYXLZ3WH6RtGsc75yFd8kydaSmaMPGXuag8pqsEEUwfhJ592ZMRqfY1BZ7tzviWZgct6PcU",
  "key19": "3XWSH8gHNAQgJADiAacHeYwte5Fx78c2sA3hTFnYR3G4ghcxVgkheVJxtFYAiqsNNyS1HcxaAgwNU8ZNGp9wVLwZ",
  "key20": "29f5QnQCzz8qZfX9EENhCi4Yvw3SjQxH12wUTLcbSbCnh9DyNcadxeV4WdLobiueMwQ6gep6EEVUqQ3KauGLX1Yu",
  "key21": "28ZVDNMTeW16WZeWVJ3rkZQC6eVNSjWRnh4MNCsWmooEvLVaHaB2aD7ydwD4Ap5fbm5QGfSFnbaamG2YQANsMmhn",
  "key22": "5ugQc5FRHR5aJQ2XiQ8XkC8nTFGu2z1TEPtxWZhkiGT54bu6bqswZ6JqwprU7gRLNdfWjqjmyrFufJ8ovoeqnKq5",
  "key23": "4naWd4BgthcbZ9UCb6pFdHWMc6zDxbkSweV7H9awDd5PtHE3UuHeGz58oBoqoXufwtHwPVDPBdrVazLd9ZEQMRai",
  "key24": "2F9ZYJWDh8vTy6fHreoK3XDW3teWbEKNKqEk1VLiqkrDjka3o6K9nwLiWPk6TGptSkmw7EB3sEWGfCWwBtcsWWga",
  "key25": "3PAvKD2dzqS71cv8zMCDo9a3WYWwugr4Va4H44r8CBQCBAW5nEYcBK1wGTWQnh59KDrfSeBoUrvDKVhzXLzStyCk",
  "key26": "3Ks6dVoZsKnbbbFGqApJVfb97F3kuNUyzaJFxiihk9W6e7Ln9wQ74FtAgrLmVGurwQ1VeTuPMNRD4Egfio8d2A5P",
  "key27": "4GUzfXZz9X4KapqmFGwZWmTe4ZVb9vvknBdFsNkj8Ekok2uAuUhbZTHofPFbRMJzbqib9mfGoCTNPEa9gjSE6TWp",
  "key28": "3SZqHz6RbjpBTnzuyBLQkXMXhuhSP3cBsE1gpu4YhZz4vxf1EAK5tdDYjPyQMccBv7qGFM64vdmcs4z3LkhiAG49",
  "key29": "5bzF712QDMmKxoF3ZHPnoQisMg9emvsfHjTbxKdRuQea6AYAEguHui4zKZXZpd9cYq7tJnnW8tnG1UqU4K6BFMU5",
  "key30": "2TDQbk9axvZ2oGazJ67yqyhLGqrhZty8BhbadMqUy8b1PCkiSEZNBD6uiSfLtJ2r1EyWEr8fzXC3fvcUXLLXnohK",
  "key31": "3LhwAvgo1wgF6usagDDNFYiqmNjbbBt5GTfpU2LjYovaBVAJWdBHKAusybyUBkMMGM3EhjfwrbheX6gEBPs4KJMx",
  "key32": "6599xV7wEa3dpnA9w3Vkp84ZKgL2LXF5ABCg8DHWYZ5jcS8SHsgFwn4B3YvUPGGa4ZFiTZZzR1voU4NcHMiPBMHD",
  "key33": "3WGUhixZeJ3dUqFgbg8TA8nzWuvCVHfHYZAntdXMNXBjdhvVRKYz9PRMvYzxrLMUH2LoX3bxu1PMXnto5vG8N5NU",
  "key34": "YWyh2SKgLLpnJdaJfZUHP734F3hw6H4MZ8bUTaLwRzUNpfKNLxZTmZeWY5kAzqwty7jV2REYP9VzyySZxEepFwX",
  "key35": "4q4ccmAQAiPvQWvxPgMJgUALMYgLLjrms1BzSAPoZpCd2eRHakkLGamSYTPVLgRx4KGUb8s6pJCcD7m27DZXcqeY",
  "key36": "RfLFsbxWnpdmaBroX1EB9UH9scbtQNDkTeScj3PKqhqScde198meCUA6TG9hPCwUmgaSc5GxUrxrK7G59efvxRM",
  "key37": "4RWDZjwVsCCqvkx9c8cijw7GWqQ6i2szoP11W1h1nbAjEY5uVHnovXFJjqwnHCxL8eT71HummBtY7UPb4Zo2uT9Y",
  "key38": "3tAjbx1SgwYrw34oUUhV5vNuiUW6FCRydW5a5vRCPu3UHCWBVwRZKJoG2xbf699nEpPJn7Lt59k2idRsWHbFq9QP",
  "key39": "5TVzDxQDZSjrje4MMpzh3wyQoMMvRHhej6UQ2TJ1bQ1ktEVTrouWR1BcQuqV7sxvf6X1SyAJxCCtUXUCUcyhqtes",
  "key40": "4TNbsa6refgEw1Eqs9PNtdts8cQnNVu4txfJ4B1vdQoaTAwPH2DS9HosTzEX7tNiRUHmvXaYDrUiDTewR7ZqmZLC",
  "key41": "4oUWzLqfArnStbiTwid6QFgpex2pS5W75TtWw67xrXJTNXJn6NcxNFaBZ3L2krg3dh6v9yjQNRkhYnTzNqMWsjte",
  "key42": "2Z34RRx4PaTUKixcKykuqGg32yAuYTfFHBrrXdMBUrhx85R272ovx61xRD2JmPrZRxJL9Fuuog2bryM3XvnHt52R",
  "key43": "3tU5d8eenEMvpfWGviULm52YtArW5bMnVgKmiE2PtqXPNGCGrKBzMYFfSz3SvcrG4frrocn24RsRudrdhWtUSN8H",
  "key44": "3wpxxnMsFz4HgjhcvDRF77Z7AZoGpcHvcy26CibSoFHc898qXwRvXEFgC93goFdUSLvaUV4ndi4bDkuxTTAv49Et",
  "key45": "3RSkAct1wHPtYjiupX9y3CN2qdu6CYC4qwUKSxN75RmjEDELjr75Wx6sYkq9gt58E7E2JLQeUfg1jidcsfaWvDMm",
  "key46": "3VapGc85D4jdHCE66XCi8D8v5QuhjNnMNcAjvRGJs1tA1epy5GLC2FULuGCXT5uK6WE2JVC4PWPGQmbnsZHQ2S9P",
  "key47": "iGbwSSzdsc1MS94kdWds9pnpnqVkcE6r2es3ArmhDiqgammWn5iYRKpP1GcGuTFEEDZTWuVgjaaDrRyLtZRwPpf",
  "key48": "5KCLfKcQEspRAfbPK6bV2HJkAme5TpDNJ5rKGyLYTZssettAKweuLmQBuiChSxnSx4ANhArZFimFYbayG9dtdYMH"
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
