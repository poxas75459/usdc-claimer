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
    "5otSpctWkbt48tBh5SMqoa5c4xY1Fa8XoWCBVyzC9wnk5QeMGqqUGsTM2TCxMVG7WtXdp7TWqB3EXKPzvAbJi6rP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CokgUsKKGWvAWtT2E48jgmZ4RLJ2Ld83iFqSxTVxS65Biy8ztdk4w1p7Ru6rxPAkQ1qgLrTu3KEfLjeV8gtNLFv",
  "key1": "58RSauiXRSCbmyFs67YSgbNnGuWz18SQAvPiNiE6YZf7hLKyno81aXVeA59giBZb6skv9ZXtL8veUA28FsMA37A8",
  "key2": "xoTsovjoQxkLWHNhg6UyYBxqWznEEUfStbNePHqya2ytu1RGQ9AtVBUNdSVbnnFwuSBCEjpWvZ9b7yAVL3YHD9a",
  "key3": "3g8YjUfB9bpYFxHvTRTRbBqVUce1UWPhiv6ocRgdkotyjQ2arg6r6Qob7M5GvPR5BrNYT16UyUSNP8rtRisDXHi7",
  "key4": "VVYPs7EH9DyYuWGHBKBJyETMa2RZs2XHue5patfRMr3ntMhsd9eWtuSqTDdhrwcDndia9Hb3oLC8XSMh5ZtGt6j",
  "key5": "279GDmReq1T8gnrgfRH5AT6UXjCqTBVhGGKoymd8jQhzbBjZvda4J55AM1osfTqPSe1mPxJdVUrhiJveWUfcUYEo",
  "key6": "5w8pG3DF8eg4c1Em5Yj6cfS2PScBTzobwLRtzj611wK8wBDGwV5xDjYhd19Ca1d6mUWXzEae6bUJ9Pat5oECawmk",
  "key7": "ies1W8tec9zxSsNQ7Tbvf754A7J1vhtzkakwrUwogVdK6nvLBDNQ1eJAE96oiK4Eyi7juQYxVzGnBE7KcM5i9Nh",
  "key8": "3MUnZmbyeLGZEAs1sLso32VzKNoUYQzJD6P5rLGnrJaqiZB6v5bZM2B3GyjfoBSw42AzqjiuusurrtziLHeg1cJK",
  "key9": "4kjfLAoU5ZL2kkZTcVMJjUavBBhtb47zzPCrbVGMAuH6AR9Au2bkR3P4yEv74EBtiq963gtxnLWUnuzTXfTmJ6hF",
  "key10": "2QUyy59DTysjpSDzNjjHbwyXE7N6LmG8w1avLapDAV75fEQhs6q49kV7k3ZDeiGWFEL3g6Uvn43mvkZKfjFhEyKo",
  "key11": "5wrnru4J3BHcfw1xYdKZ2Rd3LRqVfcPc9G39aCJeTcgBnsjTgJNEbFbjer778S4obH3A5Vt5UJdKhC5NGgndbdCe",
  "key12": "4NtUkgdRYQpuDupkgmFgKwoRKZ15XYMos1FEVaV6bYmGEoDUZtjBfTwV97kC3fgGQB5FL6TNAFDEn4J5ePWnaK3q",
  "key13": "hvsyGELDjCnhtDt8SacDyGBi6tPC4B9JPf9eRTQN59PsBqtaHPCoUtEHu2BSbMG843mP2uXpTmKrYAceeb6VtCM",
  "key14": "21coLyR6RjgkMbkdjxqDn87ZX11Y7rVnRtn1AJCjyai56G7zYT5ZiWX2F1iziYbYdWDNoToitf1yGiV83Y1GrmKd",
  "key15": "5n4xQpWRx23cciZNi3PTAHqh9kuShDDPyqmfKa1PdP7jKYfoS6VkxwUHmx8DEVz8Bw5jqcmH1taKoK2TBvjGKWFp",
  "key16": "gqynpebrEpBS9yTTdYuR7FVGmgTvDzhnYEYwakufet6HEwxSwPWZtRYaJJwaf4QG1LoczBPo3hsn978WNDFrwU7",
  "key17": "2V8V5nchesLHrvGJ6bivjh35TGU4rFKYUdao27bnpA4qyGPurxY17EaXhWG2Kd7YyimoPnttpFzgRqF3uTpWVeWY",
  "key18": "5Ns2qo53aaUBSnDiAukU9EbiRzqS1rq1afQ9iauiQqFXAZn7tRmwoiAs6cHVPGneZdvpamWismBWZHjbfjkZisf7",
  "key19": "48dwazwDSRcGL4yKYZyW4XoPLYBPqxD9on5Zh7n36W8SkJELBGaGTkLPxq3fhhefgqnwU2v7WiqLfN5eGz9ZCUVf",
  "key20": "339AfAWMdSp4r5Bc2FLUCXKo2yoqAK52ctkM9h8aNN3ApY7seoz5Ui8rQNbnSRY9Napc6FmCiQe6xGfpjXtr3WWw",
  "key21": "4r37DEL33mFEJ7vkFx4LtJTsZRatnNJVrPxaVvnqnCtjZ4m1nPdpRSdgC47LkvZumb5vQ7Spvxxx6yCRMmZjsqua",
  "key22": "seSwDZyNx9p96WMn3DmPeV3EcmvR7zvN1qCkrRmGR5eR4i2qgdjjssxe1udU9qQagUb3v54yswEXvhZXrwc316j",
  "key23": "3S2Mwqg4rCkYCBgTprt2nwrm1wk7RT1LoWPe8n8TEewn2vKfCVhHk3BQVL2t8HFmEAEEKHopvdTDBAoxd3jFCdrw",
  "key24": "4ywjALaHWS6zBfDrbEWsvBjm43YUcmBefKGGaRzv6y3YXy9DkLbLwVaLfEF4Y4kpcfU8Lv5erLum6Qk55AFf9Zk6",
  "key25": "3v9F7yKjvoRvRELeuWd5MeW4DzuhHGEtG6kUJSX85w7EaQFJ3GBfFRdaZkKAhBCT6UEPQ52U8cBgrGrMgj699zLC",
  "key26": "2zPh1bA8VpZNxE8fnUvLApy7xSn3rfDcqEiYDQrBmtvqkyEYeiNhhGLXMoG6qtExw94EMLsTy8xvSYrSFvAuXqzL",
  "key27": "4SqDYb2zH97GwQcaPoy9pNzdrtHjfioFBXJkgpyeM6pz4kPVc6EENDkWWnKJVdysUGoV9q2eEsxz3h7acKXpfFBS",
  "key28": "3YRCinqrh8QPQim5eD65wAftMGZPVatqVni4R1GuFyQjb1Jn6Ln3xpvdUJmU7LS7ggtqbRBA2385Zw9Vyp9Z183w",
  "key29": "5rqtyzqRHYgVEXwhCnAQj69TBWyGFv5PKNds69Qj8NdCkMKUfbjaEz7S2y4tokiYds7N9ik755G8E8yGsRvytyi2"
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
