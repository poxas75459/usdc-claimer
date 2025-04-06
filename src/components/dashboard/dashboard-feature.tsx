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
    "5Zmin6RtXVM4CrxnRFEkgm3B6kM3U83XGYeo56m1tFQBqj8L9HcRGnaZanhXMdUbrTHoAxzeoz5MEnLCpwrZ4btJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pdgC4ErkjSDoKtd6x4WY5iXi4okTmfcfpbR1WUzm5vqe5f1THW52VvZEgZzypQBZxmyqgUuc2JJwfmEyEyi1Bo5",
  "key1": "218YHWdzt9PeEh9Y4Ka16Rso2bRqFMH1TNUGeqDvzkBhRfB5n8ZngqW7SZrsQ6aUyLirwPKrtMPyhE7hdHtJUomK",
  "key2": "3A6rY6Cn76xGUGW1RnbtmUqNruVMC3WWQsb3f8E7993qCxPR79S724mkopTijz2z4JFUMtiJK7fMPkti1YiUCL8t",
  "key3": "3Kp7ffn8uJU7NV6867xYs7kP4FPPRemmxAKn99MdrejcaMMj35Fj9ppYDQRdodG1N9uW61YDJyFhqrWLDztAQ8f6",
  "key4": "3uBd3UdMMK2782muxkNwezCgSJCFVHMfqzUXdnhVr4jSQ5Q169Xnt4wAUrrw7Mv7jPJNUph3oDR7BNewzn9kZXG8",
  "key5": "22JvHdfd1w6x86EHRdnNTBZLCsK5eAk92h7wUjtgFrNmLndQmyoQuoqqctoMttxGNcLmsQqo5Ug47EQokDRrE9ZZ",
  "key6": "5B1CuRcPDXneVG1bewaTRiLPmMqKZv6wM1Masa62fG6wm3nxPBrpZn5LLGSimMhM5LKskYMeA727GqadnPvCWVa5",
  "key7": "23aW1VqV83oZ3TWfwd1ut91wCur2CRf98P4GambrTHhDy6UtRdAc6DQyN5ovprKv1vsMjgwKdxitDGoVrNLaq55H",
  "key8": "3afzEDUBqdP9pm6EzFHJtz5Yxz2ee4UE12iat845q8ngoG23ZHZojtZT6B6VtLiEywjNoQzX7oMLD9HHcApHNYx3",
  "key9": "63EF3ojtevyeof5km5Dj3A4iESxs2qqfd2C7Gw8vjZyL6d6M2vLsh7fuZMhJ9iiQYez9vvZPEJnZPdztCqoALBHa",
  "key10": "ZpFHwGWZmJeg11syG7AMTZfkdWv3HeKFB9MTiUG8UiR4VwEHicNZjmqeNTE5xKbQTeHLJ31o93h9KhCEiHbv9eM",
  "key11": "4TguXWj4yCeQZEG4ytaPTsNcxLNGWSKCrSxjsZj22T8W2aXQCyqYKXu1a1xGXYUzZ3TeRE9LzEgiTMKVwNxcCfkd",
  "key12": "4mtJhTPhG4zEV3DffJw7KLR4FbZNffDSGGyzdxByBovkrsxJCyq8w5kDA9MASLqLDuyGSKoSCVitdhJjL6bE9bg5",
  "key13": "2SKpQbgHvxrBkDWtUj88yp9vc8hxn3zQcLuFQvPDYNV9LWTMaY9sa6zyVtz8jmDiLiKgfTBXAaBKB95kPtkoJKtW",
  "key14": "knvsy9A9rBoVgfWHm3u4spSFQmcVCkdSGaMG73LcQERyjM3UhKqahY8TetbbQVerxbV3iPAJjYTsWkFx7GJcsxW",
  "key15": "4taPsEddZzkdt651Ee6MBMNyYaAerSspLd98RF3rXuexNAsPA2oLTocSPadS1nJQcRSxkyrdcJX1Awme5xVaWGAQ",
  "key16": "51egbNeAPmkyCQoSjGunWRvijWVGoxGgtSRBZG3dVnR5v98tYtKxjLSLNPugrujAT7Nyo7YQPewHqKWTwr6KZELG",
  "key17": "452GhinyN952c23yfZd6Yz5TDesFtVcjcf6kZuE3iT5DqxnXxTzo51kfecaCH4RkA3Uez3Tid5nxQJ6VQHRKwHFa",
  "key18": "4kHWWuLT63zm1oUFuMNscg2EpCZToWjM3RK2dJsuTWHVNVTEFtsvFFhCztyaXXtqk3aUgTUP131UQTN9VtQUqiug",
  "key19": "2ok94k8BJd9nkNuMPaQVVD34uCQKhhCbVWtyBitrJNjHJMywbXL4aHYySgNuukJ5mByhWCao8WPrGmbGvPS3DpQ1",
  "key20": "mxGT4MpD5RHBDumqsTQUB1PLQPmDbDKx5cSX2yKb27d8Rtc7LhgdU8hzWu9xSavWZmkWTXaxnF8wHSFWRMG3Me5",
  "key21": "4STsWwh6vNgbCgh2pcMfQ82WdgF1ZqZis14sM1c5wwVu4SZM6S9gFkaF8XduXh6wtjHRy2gM7FXMEChwMHp3wgfb",
  "key22": "4QnZDbjkmu9YTsvy1xArhDPFhSdkH65LccionNBo3ipfEzA36AHsSTTSZKRoS14srguJJcUoSYFsop149LHSwbM",
  "key23": "3hrnmkpRmM2Qv87mC6FwcomjkEYqAyYrALmKPyk2QfgvjCRz8jznhVKVEqdiGsscsZjLHxL9BwVB8edgt13DhEfy",
  "key24": "YmbAvyZS163b11V34gVMJypw3yTRieXtMSvGQTuC6hEF3Lwr8U56zv7c196NX3s8q3KMNMwUxbqQtZmwWH1WvWr",
  "key25": "4eJFQ4J7y8oKhQRy5bM3A5UreVC5nsF7mA9HcAgDCc9SZZcnqnCU9rVpzerTvps8kuErcxSmTeXMbettoPAR1MUR",
  "key26": "4SzhxnKPKFmxUUBdvsj3tMpuEZpFEfU4ndhMKcU2YMi9tY1AMCjLHWztsYfjfna271ZJxdBi8z1bAkmHfLruFpo8",
  "key27": "tkdKv5uifcjJSp8mRQYPKx6JSoJu1NX9CUWA38eebkhQG57kr8WjSyoHM9uvhobUgpvV57hVsmnGNqaw3wUaUyt",
  "key28": "4xXXmjXeLbU8cL7AvajMEunbAqc5Tfkz1W9ad2okUUKbzUjUPQ9DjLg1aYmZRFhfSqRDiJVyrjP8sGEuHj1D84cj",
  "key29": "4AG6PdtuHZEkYJc5zk5fy483sky4oViXUtzjwvKMG9h5L8cRB9ghQmcrmr2fiQvX3QqzKoBCvRt3DAoG5yjxzCv6",
  "key30": "5u5rd2e67R7dEvxiNzWrw83TnPCFjP8rjFJqUQt8CRSpAj5Htp9FwFdJAavkE4e5yM5ysxVCFxMBdmfLpDGmVx7T",
  "key31": "3PaLkyFxkPEnssyQppWkGXrP4kBWdLqexm2BG33DvYfc35shbmiWeKBYveiXZge8J4npyEmijbFw3qinorFSRu4s",
  "key32": "26VZVnJ6FYbyBVGHHctToJzvECkevtduoVjyopaANJMon6EtWM8uQQNFNnGMjNZjM1KDTimENuUv8c1xwGRSWJVM"
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
