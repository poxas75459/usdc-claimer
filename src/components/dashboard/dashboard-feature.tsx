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
    "37UK9vqb6m96SbarP3s8kgD1dWJ1GwjBjWWQcsUeUtBEFooo1FTBsA3QL1toNeiFjwPpGdz65w3usqJ3kKNL1WNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pr9hpNpgPkBSPgsjjzFX5XJEuAeiYxcKwGKyW6ahbxTrnmmMKNQhNzPEiZA1LgjgGqcU7jBDkSWBU6dBCQ8XrTX",
  "key1": "2Apbx2zt4SmHk6DUnStMpBCp7etopvbM3NrsZDARH1QeqvYCRA3sV9QLrivTyyvmk2pKqutEb2b1Y8Xz7tBBGFA4",
  "key2": "3Lk7cwCwAvpQRJTgvTaBqZpGVn3x3J4UZLK7HsNRhoVkUt9DQiSNKCSia6AAnLjUdMwVzvULppPH5GQ8kU4de1SP",
  "key3": "5oDyxg1oC9kMxkrQ1GPwD1GNt9L64zyMLBpfw4V1WAEbyFHD3aBz912TYxYQZ2Jpgmkkqwp82jK4DMRSEqoTMW6p",
  "key4": "5CwRrRD2gNrn9kZYgyYaJWmvm2uxtJKzK8hPQvB8K4JEGhCjYW8AV6AX45ZdA7paAz2YSV9QntsVM8ywRo8nY4i5",
  "key5": "2oKArUWBaEseqeitLBPjjpVnZcuuKQButTjfVCxq14yiyPbH6frFZ6UCeXG88B7Af1q1d3NeiDrq6ThbbnNnSCDj",
  "key6": "5yrdNjHaffs2SeXYfqHuCZSYPficBCvcN6ThgVGDZ6gGHWpty9jRkEbvpy4XQNt6TuGykFzQiLcU2vhq8RmS68mL",
  "key7": "4cCn8dpviJbK9Bpx5QrUbhKRABH5jMkN74CVrqSKHeDZ3rrgLGgeg4niaavvAH57sGGvwUCkA68GdSX59BtXP7f3",
  "key8": "3SH53E1tMEuQRPJoog7kfwtpSQLv2h6auyy2ZLwjw44pMfcqsg9ThVHp53bRiCH441FHKWEoUWXgcHiSwmxAwTvu",
  "key9": "4U1SVm8zdX3orxZ6cmeAhjaJwP8fQTkoCU54spmoSAyojN4phAt5anGMtrKzUkAx1xTuAsBZZPEk3qm5NFp6Umh8",
  "key10": "3dUHS47FWfeLzEk52mNp35zuss4MqhGASgDrcjJkwzVRHAjRk28BHbF88Y7StvyoBFpfGktCuyH7RD3qqtn4uiSP",
  "key11": "4a6EZK9zonNB9bWtf1HDWSfJKbvtJfk9XfDZWBn9sUosy6kmc7o8qPGqhwV9qUq5XhbUTVM37vA4dDLBGLBXaxXq",
  "key12": "3vowkEY3LadVVPB3XRj8ZbH1KNcF4h8xpjZM8yzgWgXjyzo1sfbPjq396BuQEcuzbqiPso3y7iWKtm7ST3zguxv3",
  "key13": "3HsiTsGjC6qt2Bkwc1R8Hctk56QK6JG2t2ieew1K57nd1o3ns5RfGdb4crrWzDnPp1nxsWa5FFnEYFinZJMRJvS6",
  "key14": "3RwDWZWYaQtu2p9ZvhUBVu37mTNM8jb35Xmz6RJXcqM8s6ktB9huyF89UsWGkFjeX1JvBuJPrnPvs1kEpkNPGCjB",
  "key15": "4NKjZ8kwJ5VuCi9sDVt3NphxTXpPE9JYqSFBuY4THPBN9nWtFiuJZ8iUgZfhbETLSZfPAow3m4oUMamnr4NeYSWn",
  "key16": "2oyhVW7WpBy3xH8aSK8foHKFGonQAoRHTuCyF4dSY2qWc3vLQQryhHMKPTNEjTyAjkCSPZiDHJ2GD7jnHPZAo5HW",
  "key17": "4z2W2piX75kJadbVyQqQzNz4g37tBT47xGRfoMrXnuhB7Qvaw6PwPX9VrepX8sBZckvj7XNE2k6Asxxcb3UWNHww",
  "key18": "3JyZRaJosfnmFwiZAgwcPFVwmudh9RePELyXB2K8vYDhuNtVXXpSQRKBCXEXkSKcmakQpaPSDJRkREuwxs2b5Zpu",
  "key19": "3yiVaVrPLBbaeUdXgEG7bHiAti7huN1KFQh8ruXWTmmjJsyFXxYyNpsfDLD6EoH5hrZLZZn5XTvic2KW8vVGKHM1",
  "key20": "4B1c6bLcu9zVQdQuaHYj2Kvh81R3RFAyP2ybK9A6SAfUQ8Qdb9ax9bDCBDP18YGyTKhPecWVTpAYPh1sViZT87ML",
  "key21": "5NyPCm8mDCu3kLctBgjoYFzdb9mmB3BEpvwbzyhpheNyTZfPGaEzuZhuCS7Q3LxMYdXom5h3WB8qo1fRS1nSPwND",
  "key22": "4yRVntuCMKJRyW33ABX97L65rA4kK9Rp59PrVoSPSDTKTPHeBNWrDJ6QQRpW9yAsSuXwzUJLBEUQ89SKowgRopH8",
  "key23": "5ftijnmUuZaupUK9YgjhgYXkMijasndBS6B6NBemhq4juxrgNqtevggAEyfcxYJgNEPFZJuHwqzs4xZTGzRH7W7B",
  "key24": "5DhHPFqiokYP1PhgqYaxwPKBwEPZXKJFXUAsYpvsogdFvHY9agypybQehYrnd1znVy1wJyXfMsJBptGY4sm6QWux",
  "key25": "ZWVM237EjmNoT1fHyQU5TRE1prnrTsN1ysmw9wZsgvhPjQHBrXW5CtFDG2HVrVvVm6Tmnm89TDnYBbbTnLD6FLC",
  "key26": "4VjfLTboHgMn6SWao7gfPksfJA5GzfrFeCEQfzijXMRGupTNdqWQysSKj9XmFA8krFsWrikT93f4TidgG6mJauLu",
  "key27": "3cBRxSeJ9ZZX64FfKCxRuc3hheeZzZyygi6JaDB8933BxF8iUFB7umh6BFdskyrFnCUnKctdwtiG2W21D6gRRb74",
  "key28": "3reMpndHS6o41cYkJwioEbq9yA3ByALsehmy7SJgVBd6TX6crbtFQpN5ybpYQHZyZVUJUHoPSorgMpKGbCUpKXJz",
  "key29": "4fKj3eTn9t1LD22L8P8JgyBBDZae1dfXoeUr9XyzZP8n4caHnDJRAYSnDWgo5v6BqZXXXhvppyqbL5EmXtJAvnDj",
  "key30": "5PEVF9Lq8iLnHAqdJsvm16Fz4XHvgn4gPZQKwcLCGgkxvLJcHuZR4JTWNHF56HiS3WriKdEjCRns4JmEy5We4Po2",
  "key31": "4xgdZdw33iP1DgkebFLC6etiM7oB91Lj3XDzY4K1eacQHboreQ4pgUBGVUh45iA6eijaf3mJHu6sLstMWPgamFx3",
  "key32": "4jRca9GnwGtUGQDxWdKa4z6iPB4ZsFgpP44mNUMq6HbdUSGQhu2uWmnbzWytHZMXYe1YNChtkr9LLx9nboupQfJ6",
  "key33": "wBthVtCjBrnY3gdyByfFMmh1w7E85n7NEEJsGhz7daF3VEov7TjTVPUXu6UkcJxDktkrBeTGBEtyfHZ1G4QbRFr",
  "key34": "4zhjHPppQMc7FzJxu6iu3BFcjSpfQJsLvCTENM7WmfArcPsw3hLqJbpFM58ooyoa4GYnnE6S3YaWfpk9XxiUvptu",
  "key35": "48sHwKH7jLtivxD3aD2wFgyAV3YYiKRrTgnTZaELr2YCkEoP793zesWfJAAK64Pv9GUS5nHUiQx1zxFuNjk4PCoK",
  "key36": "3A7vXbZZZJQDhALgHFHNA84SPvhonMx14HVH38ZbpzS75MKkuVD2Sb6XT1qShPXHbCjiE97Y5Msvk2VjykFUap5Z",
  "key37": "4g7Hkkf32VLx5mk7vwg1WHc1zwbPZdwEtLeucnu5ZAsCYtzywK7GvM3ynwyza52VdYSjFnwDQQR6QTbMxBmCnXbD",
  "key38": "4VuhQ8FgeB3N2yPAfCw3MErE9D7EPS4zjHQNywhhCjxWkQaE3vsHPPFdwQjEfwTXFP32zbnx6YaNo7fHUMfTyUdF"
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
