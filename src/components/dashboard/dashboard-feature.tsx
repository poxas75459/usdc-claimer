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
    "3Q4ETgMpY1StXnye41guscCjkuoN2jXdkHKXziXMAxY7ypputRdk3p7wsrRs3ZDzxJERKrAkGcp9At4wntriVnTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hbbAAfxeF1BCKw4ZNSFBWqgpBMi3JURYakeMbyGFsSCuRkKGjw9ccfRieatu64ZTwdBH9cvZWQsuyBN1brbzyLb",
  "key1": "32cAUjnKjbWsusJJxapM83pgbQCBxoqYuicAMfkrM51h1p1LkXx2K4DXzQNMgSryj2kiHCf2rL7BVm4svdgZ5Sn3",
  "key2": "51KqKrogmu68RG9FVF9M9o84TAZFgBtQHHAo2y41gAXdJcX53fWENdLNWjDq3UywSiHoThtqWaqHtWpUbBZuRnAk",
  "key3": "4G5Nym5f6vRdmrXubpU8Xg8x59M4D8M1wz2w8zVpvNw7pUnBuPceFLQohxFJakC6wLLTkW7U6NKz68m1a9ZUpFFg",
  "key4": "gqoHuuMp8XvneRTodnd2Bady4X847fBgysXRCkpn6LjmWaQna7Dsey3GM7GAZikJfKfV3Mh7Eg6v8RPUMMxAfEv",
  "key5": "3tpeS1FoQv5tNk9U1xWWQMuSPnXabsvQz5xYdjxLFuigCPFPzyzKxXpMsZZ6pdCdiewiCdsMt6mXpHA4rVsXuk8x",
  "key6": "3b8rZ34LodYxdK8XYLNPq3QTyNK5kDS1hamHHXK2buXeGCMxyqEyUTgmG63awsLALEVqXtAzDGNmFvukxSnGD7q4",
  "key7": "2vFdLFRLYbDDSnPuEgm9bokRvFgGqR5gJ8vazvahuqUmFToD6AWEKD2eZs4ppE9HwEhSVREKkmyDxdGdF2QtbXp3",
  "key8": "51XeDgX7bJzmZor2dggdifcmvk4xei6qAhdEmUAkKZRB4Qe1VJfEyzxVr34i6xaDjfZ8QqZD1TEZQShjTofGCzbn",
  "key9": "Ws42MxbCsEsHJBgnUnVhngjXpShg42was99rmQFkEPKCRn6ufVEFSwrAwWspXxZDmDd2ugfVwQppEqJtpjey1yD",
  "key10": "q3rpR1EREUjKekxjpcm24dGypCxqEL8vFaqv8bKXKBwBjgaf9nuwtfdBkAJQa2nL4MMW8UQcA2kbe1rnQYLPRKW",
  "key11": "aMF9Vhy7wAGaT3SUaizzosq1HaKdv61FZx9MyNWWs1XR9GZiNXht35UmxJzwGxwcjqfTwfs43bDUGfHon6hsTvM",
  "key12": "mgkEPmSeRwbHUj3ci9gkzjU2dHmWNxFCDWoMkkVBqgurXFmHFBwokdg1Snx1RNeMW96TPNNENPJFhdPso8Ynm5U",
  "key13": "44QdUgjc72crtnkYN9uAjjGQgJADkyp16PDeXoQp4dZsYNabibnzSPLGqx5pB8q6RH5ERRXKXCoZaBxXnhHzRVSa",
  "key14": "2XUSftL4pb5ZJbpCo6kzfqzJojC29QfZVpuPrHWNmqpLmoD78WA9ncGnK3xEXUhL7NLvGCS39okgpYeCw3h2jFKm",
  "key15": "3BSV3rKuPxuRcZqCyue1dJSKSie8fU5wjaX9H8s46to8yXWG1G4bfkjZh5JDJLXE8HQrMYic37yrzaFN643jCoV7",
  "key16": "24ZpuUvU2b2qaqmRKUiPkEWX1R54tpUTBg77PZD7sggv3cQqtT3HveDvi2yxuiLLaZw7jhUJbTyqU1gt8BPUxwGT",
  "key17": "3AwsmDHztXfMYjrgT1mkbKN8d7eg3D3wqgSq1B9aAHD9pTQ1mbjgSwztsYTu1XZySgiXGHCnzkiQVd7rRhmfC7VX",
  "key18": "2kqRrmjr4n448DmwFWxTX8ENLtdxFKpxJBNCo6VCZKDCdvqJu9xdsAFpyymNQJHvJZknhMrjMDNwa4ZNgZ4X6VL7",
  "key19": "34jT9BsqMK3emessEkACciNmgrp2Nt1gChRahP1Mytf41vqqUbesHp23WGdBYwLDQH8yj1vnQZFZz7Sd8hS6vR84",
  "key20": "2EkA4DT6SDquidMFbJdjFPfv69WUkoKA9d1x89NTGb9ZQa2kmD1m3Cruemq43qiKoRTv1T1DjFdHpEeTw822EyAt",
  "key21": "3ycGCnoB5wUeHsLUrAsgzxqaq1YMeEQzpHZ5QkQwAcNyLpcdMckjhFZ6R5wMKdFBMxXDCHWHMmHyabiFB9tHLXGa",
  "key22": "5HaLQL23nhah4djTCJimQzqKydfXvyARmaHXcJf7sd25pP787wBdQ38MyjvrCW1ypM2eM69cqeaHW4LUVCZFReYP",
  "key23": "3pP7mwx8D1HjCq74EjS8epZEkFDNgoqcF2qUPZ3Lx1SZMbBxJV1b8TXBzdZC3tBsLFviqQpsoazrYVKuFKA9D2Jq",
  "key24": "22G8eGojW9D4FZaXg8FuHTkUiFwkiiRVPNYLQxM91YgNWXM6kXWAdnERz2TN6aUMF1pNt6pugHmfy8kS3EePZfGd",
  "key25": "5Uyip8PnvQkzmX7qgDpSAQy62vxYKAZU9hXivbuPLiha87vvmhsN4Y9m45HUXHMYiykHf1pubKyrkrcbn488WSTf",
  "key26": "2wuS2Uz8rKBRJrBF1U3VXc9BJ8BzHrQeeq5jEG96HrJH21mUCeYH35deurXc9N8w4mMjhVaksYcnKqNc7LRV8WzE",
  "key27": "ZqWr1DaFHNZ26Y35vjvR2DrQgpbzuFuuBxgKdzVdeHKWSpqguvhKRwR4GfpvTiNV9oiUWNyRo2xcZ1EmtWpghfe",
  "key28": "41P8JMfEhZwSXyeLL9xa25LegUJ1rw6bNWeZNyNCD9ia2oKNLmwwKXRSBj4uTun8XcR6ys1BhZae3VfBZGSXubfB",
  "key29": "4XqzVj1QF7tPFvz1ymspdcB5xDKZzrBUx8iPQygm2pGDDuUEks4Xd6wSbFcS6RCen2yaeHNLnK2fD85PMXm7vV5Q",
  "key30": "33KGj8tQAuTokQebr8br3iyhY6pS7KFtRjMkvis1tY58TJCP9JpUZAhYdCMHjuRkDBzrHAi4MMDzR7q8oGZLfrNH",
  "key31": "5bkiS5qvdQrGByHeQdNgtHSaxqSHeqFJGFuhPAEFk7zdpgE8Wj6o7riEwjpo1N83GkenACZgVZ6AQez9LRqsTuGo",
  "key32": "4Gz2ztku5BCkpzrEWtxX3DGrzSskNXX6Ywf5KadqaBGg2yzVZwWthAxRNB3w5MuwNVQw7RUZg7rspwqLcDDQbhDb",
  "key33": "3QPWYnXWeZkZ2MfB3Nvt3bXkaZpEBanQcCXhFAcR5nkL8UGN5MHSt89ihmgYxGAJeV5yH4BHH2kydUq6fqo9YqU",
  "key34": "zTV1aDq7zha5DZeUYGbefPG84JTQwgFRZKPCaVB4G34Y42fX1D5Wmhuj5S8rzga4Z1sWq55x39tMoELZycx5Sbs",
  "key35": "2Sai2YoHLUCfLuvec4kYvCySWLeoirF1nw1Z6RfgMcL4qU6iajuCSRa5bfVMbxN67TFmqS3RoLSFHUVPSUu1Aq4R",
  "key36": "64smGQj5naRwC4pQYUKRoqAY84ZXSank3wBfFenc1DkLTvCv2qprGZuuQcRADxoMKfBTuRLHF6cgiCLYPdwrcqs2",
  "key37": "gtTvurcboKTE7DrfKYpGHajWWCxMsr3dihKFdAugARoUtjyQ9K5zYzkE8fwhH2HVMPnQVPyvmkJjKyQE3aw4NK9",
  "key38": "5voT91bjyCfbGJqLdcd5j21Dy4RdAtNLShq5UVzRZHSidmCaHnm213wvQNF8UzDopEvNynHb4hyFnmfQTAjZ1c4r",
  "key39": "kxsq3tnncE2h7w19Kd5DbThjXRvT1E9femy4D3JrMPwN3VAHQcHj1iTnrx4xpjBap31C4vQfVfY9npLfo832f5x",
  "key40": "58jpiTXxvPg1RbMNYfLefEjAFJiwUa23tYdFCndu3xiMfdefBo1y25erTavpRXxR6V4zjzcCLetM5aFyeEfs97Dg",
  "key41": "A2iqkFjkKNvCe9qd4vkdYKWWxUsEi618jxPahsqkHPtkSGnvVxDwt9j22zuQPXTg3XveR5KSSZ3xLox4LuScsjz",
  "key42": "4w8CWifhqzeRqhE6bCyj5zYsmPCA7nzTAuK6sj2PyQvipQENyfCnoYsa8PWhWXgHSAUUJzYKQC4LjSZVharbMFBp",
  "key43": "3bKDwJKCzWC3cL9zsFNRb6kyEXnse9p2exMnC4oPF73M3fqh3mFWCsCVbWFtKvpA7PPWUNb8Gx21GBvY4cqMfYYi",
  "key44": "5EymTGb7ngcMbYpGcPEadFLyg4YkTAEmi3eaCjCVPbBMjhsuc96g3bozFNff4BbbseAKyMbgPqaEYxVY2GMa3e2w",
  "key45": "3ZWPDpmtzPLeF7Lh4vmzNJWGK35m6RLYjTSAssnYb8wHBNgtL9hxn3vNSdyQdJKddLYXwvoRqEJ3ZAzzYN32vcVP",
  "key46": "5uYzk4yfDyTETbtsZUu3kpWAwRScFK3dJRiE6tK1k1cGdEgnv6QJudMzanUMY2EUsnfz1WNUyEVENGcM552hFchq",
  "key47": "3NKpnqt1ErAr7j2M7aGXSLhNF4Ajmex2g1jciLETgf7W8L34tgkremrtL1CTg9wBvbsnDi4WKEJfpB2oLryPnM7y",
  "key48": "5CYBrn4tVTuERg6kofmxh9rfumFDGjER94GPrFKv4GMe8DGwUHFtAFdm4krEDK5NsrkPEX5VKrv4XoopfoeZeAcd",
  "key49": "m34yjze8mMHp8CUs1ymXQcYTsvpNHZ2MYxx1iiZFGoH8Mo9sfT7vaAsQMqdJAhjKxxotbUSEQzGD7uiZ5wvv1K5"
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
