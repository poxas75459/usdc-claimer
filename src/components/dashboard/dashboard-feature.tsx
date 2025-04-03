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
    "8JUBviKFTnPMCQApuLFrmibTMYGZoPfzvJeCTeHj7btdXJTLyTCukPGmB8r7AUsuQ51iCkMQEvZMApnLyzpRL4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uFy6d2Q8jkP2X4MjHX97Wx4rEJjPeRGa3fyXCRRqzYwqbtoCGRbwU5DZWzmBxMC5oBehxqqN1yQA2dYMzHSVKD2",
  "key1": "4X2RMbyYxNJUJisMstHMwmeodfFxRvbHnMcRLhssdCgHFiAfaaw4omkshTdmAjFzrYAVDJh4kMjfCV1GFadEomoF",
  "key2": "5GVMMgwjcLnmzPRHBNwUPKzCf6oCeg7iHjtebTD5zzW9VpQU2Z9xkGQSfFdcgsgxnxFxnCUw23R3uiLK2hucCPen",
  "key3": "4cbpx6mpoo5emd3Pj677zm1myUE9yy1MQLG9jb6fG2FWZzxmqKh61xXWQrupu8j7YKSwEA4PS2khC8boTq7YwTiP",
  "key4": "znKbyA22w4GgjDkdpMffqXNtH1Tpzo8YCdVZemx7p9jJiMnkKdRRPDdBa7ECyvT4kRCNg6WCeMy8bh9vTu6GMpm",
  "key5": "3GX9Jqx6FZN7Eq91vFdh9GtwoBDC7Yc2YRW8Sp19Ka1tfzyUTXYNjexM77PA1Xg5NbGFrSmo12GX7eCUvxDTZM8f",
  "key6": "4vzk9B5VPAugkxXzbadYCoY5b1fBecsYTx5nM5aVfLtv3KsLkj8P828Ft4hjU5QSaQZt9qbZhDjA9FjeEx7tHRh3",
  "key7": "2dRbxHbX9SLCRKtyYjnUo5efe9TeD2593ozEzxBjHVSwxL5BNN6roHQZfonfb3XYmV9jTuRGgywu5dS7U19sX4Vj",
  "key8": "4FFsMfVD5ASrZh2YQySuHV3CohdacmBypTyoCwkN953PAf3g6eB9xZ9PD9miiBC3CevbrNyG9b5MhyEcoFh2vL7F",
  "key9": "63Cp6XaeTscS35SS9DQbcUrPo7Jx1U82hVmqss9Q854AmPE9qXybq8vvfioFRG4Peu5hw7iNjXc27Gj8pa48mCmT",
  "key10": "3evBgYWpPim67upQo6abAhc3r8coquMLq193Db62tmnTE9JCgi7pwS93KSUbhNmfkjzmGi3G283ehc6zTE6WY251",
  "key11": "5oAGNGg6c47MKRskuYoB4ehVWNVymfU9hsZ2nNH76nDbf6dmHt6U1yvPAwMeR9anYg2hwLdJqmbKZ4ixzCbCRVR7",
  "key12": "4oQtucpKFKH2gvpQGfSUoqggaCJyfVqSAe1iPFr4vWee2YRdwb11qwWGpoDVAHdR2c9Zzznnb5ZrWYyssbUKMT6e",
  "key13": "3pWePhXvFVCzxSW6m9hvn7aasF6uWFWNhXoM46T3pXXs8Cr8h3BdaNSfnLhadbMoH65tBsVJuphBKx3suNkGA3AU",
  "key14": "61wkTa288YFcMK7Lswy3GN4pd6nECBZUUbWpDod7nPkwPaL31gWG5VF9Q7FQZyPDfbFEqHNengAdYALW8rFwYo1s",
  "key15": "6fkujjgm3TAH7MmX7XWRHPQ5vf2f2xM9Y3nBV4qUdSqw5nYbFktJAVanDwnoYnadz4bvPRebn62VNNpwqRrw9Nv",
  "key16": "4JdMWcDC9UcRoVibegMhXCfSWDGsgHNVd2h6aAixZAyCWMiVxiuTmHW5vzQpdMmKZiYCS216pRvpjiaoLQoQhHPH",
  "key17": "4HDJeQbZDySSPJ49tgVQ5HvovfdbZpd2apPJECunGjoMkwNZ8cNxnZbjQKaezdtReAN6KrsYATaCtt9zcBfvvvcB",
  "key18": "xkTDbfWFB3VSxnnFJE4t5rAAHLZfsKfcUDwPFMDVdxG7FTa4yv2PJas4rd5aUPee59QF1vYVh6x8mVdcNy32BzR",
  "key19": "2dhkAsDEn6kiKoJzov8JJPrdWUUs4XtQnUX9fSmbN6VgGbEFgyqsnXE9pxN4EgSsV3mFAbrtXzYc1GjE8Q1gNVzc",
  "key20": "414eWnqAdWkJ9G64j9kZjkw5XGb34mkTQaXqzsdttAYWhBBPVvx1rsfiUsk3h4MFGeEuLcFuZhAz9ge614x1q7eu",
  "key21": "NazwLTrHheuhEeUWd75j5deqaeDY1BMtu9UtofTzgksjs9SAfQnpHWRd8szMR1aQAPECDZvqXvd7fxpGrt3vs4u",
  "key22": "2PmdJb4yDdsBiASqb3v8AgdvxWrUadMoiF2irzV1yTWvtDamU1WVDEf2gBW55EJx6K5ASRfqg21pSyTi8DsEqXoR",
  "key23": "4s1zr5fdesEMTZdT9W3upbeaoMGnTZV19bRaqcmXuspaeLfgc28j6VLN2posah8dZVh7MvLngPPHSTDMV5ZesqWi",
  "key24": "5mgvByzcotcX5U2By8fg1NduLRUVjbvPKS1g9XzZQiSD8Km3BgWRBkcPDAfEBX4Cihobfkw6F4ezNByZYrPRAtCP",
  "key25": "5WT5GEPqBrTWN6CGVV1oCB2wihCzGLm3xyfAgYe5XkLf46NXZALa5QbZ5bKMjESXoNrzCgrFMgsbVcLn5giWkCLM",
  "key26": "2C11bumy3ioQsuKDkwDvggSypbRv95k3Rb6hFoWxWkru7rKxS48n8nguUgsFCLGPzxpuYfxC2ysG1dD2WnGq778R",
  "key27": "4WTyvJBWUkUsvMQojnqBtbNJSU1t7wHLrnA5mR4jedgYtCuK3bqiEowqZeBPhDSxPPnWceFAti2r8cPXC2ukSu5s",
  "key28": "rVZ4AjRt4dTBrRJEgTVzgqez2tYn3NBASv8a2cB9dstKtyxZQKQAiPozHhNQLNEwz4orUo1gZHyCGwdQkLumRkX",
  "key29": "3EKEej72kuv6MZtTUw8oxWtJummX7WQaAZmQ75dc2AtmP7MXKsvFJUmWEtQLhikzkPRnNvMcFxsuJmqpitzeQArJ",
  "key30": "4reby7vaQKs9Umb8Vxo1auW115Z479cyhx9UQRVuz2umHBczhJmkAvmWMbdWtTkL9BHEy4PmXHNxANTqG3WRghb",
  "key31": "3wantTCMTYvp1kvrmN75jszMirZ1a29KSXZxt1N1Bd7VLuZVQotZ1ByTVbfV1T8QXPbeq4U3uVkJqpxgNNhUicbj",
  "key32": "5bZyvmchce8DrLykCW2LVXWCkA62Vh9Wj13cnTikw76N9FxcGXrxVRmpsNNiCm4tWq4gZ2kNeMNArK8uW3oyP8eM",
  "key33": "3FQpjPzj8jjsuFh9Vs5XHk8iTs5yN7185Qc9XsCT4mANE6yoB2gtig965qQyfGzirSzpPs7Tk9Y8ChNKNRGEE262",
  "key34": "5aCoXMhAkJNBpAUAgJ49ATHCZq4FPuVVP5sWgst2FdoUjDtrGgtUZzpboSFCuZ4WLdYoKgekMvwdvzsqvX9CoJXm",
  "key35": "4EQ9JTn3nVgnzaNwGVpnzh56zoEL8eDKj2wneTszdM1pxNhPQR7ufQF7MmkxY1vEeXiZozddz3WAJqHcF21qtXRL",
  "key36": "WrMaELpEaeshLQJqZbFh4gi4yj5UrE8j6CQ6nisK4ijqUFfXd8DN8mxBt2xqcBERXpmjgjetGDBMouFEKJRRe4n",
  "key37": "3D7CRSjZckPW2SRxjSzW2uUTZfgJV6VrJp8wV9VMGu174NHY6Tooti5N8CY5aWo3ueoavZHcjvywtZAh9VcYDToy",
  "key38": "5XFxtrnGiTAysvhud76uvhaihHAaAkxMhAc4qvjYdQyj6z5Qys1KADAmVhq2meWcD9b8FK8EFHS9T5U7fp7gqN8M",
  "key39": "4kebMcDvfE5D94pYw8JQJSSmgDuxstPe7RgBrkCmhMchU5fT2yT8jHbxaR4Z44P9X7guGxpLFyw6HdWioMupb6Ry",
  "key40": "5v6UY7ChZR26wRrkxNBvWu65wbWHvYa9ww2EjyntqZZXhHzd6NJh5gAMDMf6fSpnaenvYDFAVcXHi5K55thKvwDr",
  "key41": "ng7zbVnurNy7vkNztbqY4r88suF6gs9cVjMHscnAkuNL1etfecR6vYzDZa1R3N39PY4PfTxrz7tWt9ds8h3zHYc",
  "key42": "63CnjHDkkvYaKswfrijHs4W3YYN2TxzX4j7piUWCQSHqDbn5BN4HSVFcdjKSaF62qYhwES79uisxJoXyGtR4wMK3",
  "key43": "wqMbgry3zpsMDbVvJgcumoAQykbsuLmoADMTZPjxaczJyLQqZKap3bDfM4vipuExfvcuCWPPFqhvEUuDQYKVkAz",
  "key44": "49JqzyyHCz13FzXamTfB7drP9J65VAWnEAe6tRpZ8TUBfuMUFXkGwjVWuba5FRHeHucdgEH9ZboqysL8stQACx2w",
  "key45": "9HvNQvXnFn4AoZTgNHNN1gnMNHDyNFyAzCfodHg58NcqcZPF3gYNYHenuaagqsXPKCU7ZjABU5GxA9cW9VxWNpo",
  "key46": "4Abg9VJs1RVygkgdSn8AY1ka62exv7kc6XrqwyRR82GVf85ZRaWDX474ZUArUFAgBvtiNHxtVzbrEpe9NEZHBPpp"
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
