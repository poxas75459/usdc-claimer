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
    "gDT7dtNX7vdg6J4etAhrxnF6KGiVLkijfDbyaoxL8YzesWXK2pLDAfFqUdisGvimK5PFZMZjTb3JTgi6ALxZmCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZ7pzkPemy2DrEnwkWJurPQ9p7NZMpZLnHhjmQ45ugrkUEgFugW4bfYz3ZPJ4wM4cjxdyHMWQDfr79RrTdWaKka",
  "key1": "35kXMYtnsmbtcVdBopUcvi1PWQPoHdhoiLNpzASRvULoh3BSnbnFGRvhKC2dYtYTXdSJVgdzHb9vpqm5Snuovddx",
  "key2": "4vuxQBTXdL4oAQU8qVHndjxaJkgk3UbGnWqnJUtzQ68qHe3QH37MDkmbbfniaS5JweXtLmyYDtS63XqdtqN1siox",
  "key3": "238Ukj9fH136ged2ftcHFuxmeqybnvbp3GMpPTe3EXt9MxP5tvTQUoNzxEr12sMG6nDWDhoKG14mqLNZJVYJqKa6",
  "key4": "3eJQKnZ5KtLkP25JgoU3cfB8aypPp9yC4us3Gm2PTWQPuYDKzm9hYaZh24k5Q1hMeY4QS4UcajgVtYQmiiYK18DA",
  "key5": "2hbMwqNXQECMobwHGnxuLguXuCAFb4Dw37yUad5c2nZGpaTc21jfFxiwL48et44oCNuXNnR1fUVMdrAr8cVhAbam",
  "key6": "4EgD2CYMCjztxwzEHvgoGhUtpjGcAhQXqDJfGSjW33pdzsiocj1enxnW9d3Ds7CRPtvkWvbSEa2n3oCJbhiptJkh",
  "key7": "5h7gsrjUWcJSX3RXkkWiGek6FPWZcsjTZvDk8AsakwXWAHhRRnwDj4JaPTy8ZYBW65wD1m7YJrm3Ywv1HVKdY8hC",
  "key8": "3LCeSTRQYiAoMxwY5MWzRhAJh2zanEDCnhpFv9PbGw9hUBzRHySKCTGLQcmAHuH4JZS5ENnCf24NaAZBy845gpjC",
  "key9": "5J1XZHffDwv2q9uPCJEoWTzBT5iwJsj2owt7pAyGZsHdm4Egqd5NUQLeX5yR52FFtAmiUVMQnGnZti99ZK5P7aKM",
  "key10": "21Skw2miMKiFsELnitNeMBuYv7q6zZMLc6RQMYCLd26DBrkrvaNqvahcubp2vEgWPgCcipF1hmRbUcUS8ABuspzK",
  "key11": "42ov2rBfzVKnRfpkxSe47er46Moj29Naj9e4CZc8t1aFC2N7BvfMac2P44MpRmua4XLc7j1EXejA3tNCYY5pjkN7",
  "key12": "3q6uPeFC3DCKKN6vcNxDcku5q2o36F7h7UeUpLb7Ab1JXG9PxZoFHmibYcLtgwvGoE8Te6UwQgfjmScVw17oBLsX",
  "key13": "JER7oZynuD5euiQJHHwa3CxFGe56UtQkh4Z6Q2ohbrEynKZfmNGZquM3JTkpqgR2Bd1bWfvcZfytNNVUmxZQAtR",
  "key14": "3dD5QepJmceDmYa1M1knfQKzWayvfQNbHPVqVgURLeL8eYEBAtAwq2X2LAEaFsZdvvKnB1rTASnDXFfn6J8zS61W",
  "key15": "2FA2i4LqH2uitVkbrCSeY9CPskBDBhmHT5iEBYLUUEVioXog6iSa5FXYpFhc98Jv6Ac6wd1d6FMhgkjzUS74crkh",
  "key16": "3vTm52gWmBwKi4daMJBAjg9pePNiPK6cSVZKMSWNDhuhTEo89yKTvovzM7DsR5UvxJT6zPFQGuHT1i7jPMEsorBX",
  "key17": "3HbCwk6QQiBPFJKYnGRWDVJfNnez1FFajvcL8iVoY2dAXyZ9Z5aXWuD1xqzZuh9WULrJ9385nV3BPPo26A9cCVYX",
  "key18": "5DrBf8W2NsqsuAZ9WAm8F1fVjj5jojRGrEPXGqmi9ftgjqynM3TcGe9eVH3z9jmtF4AHpYH7aE7dXrYgxABxXnta",
  "key19": "4oM8bMGXtfcituaWqRFMGszV5mTMEaVxjRto3NioUA6LMNix7cTzz8isABEbGkCDQHPjWtbpTiTxtCS4Twe2ACtF",
  "key20": "4T8KBUJf4RpsDBMUCC7R2EAgm3184jPSWo2eTYFu2e25ks7hnio2nciGC7kTXHEkSusxSg7poTFGdZ4EQhVukAyk",
  "key21": "8WsynjMWwazrSuZAhhXFGVLHbizD8fVdowipHnW8SZM1i55qqKnPebVHrVwVGvAq9b9fFBcvHcV9KLYeXcoRzmS",
  "key22": "2ppfczaoJsUXe1eR4YPEi4RZzMMWEiGFK3WJmRjZ8sBLcYd3rrB8ZMLRisyqzPVTwkGVnBhpxLa7mEqgF8ZCJjHm",
  "key23": "5jwwZ6Q2NYNLorZXcd16hHBEu4w8NP87hPeStB4v95dh1bPagqaH4AUquiZX8ABUu82LVxeXRU2dZWaLZw9E216z",
  "key24": "4yna2e3cc63yMbLrtxMQ5cyC5txE3zHfMmzuhxJBaJjSTPUpN5zgi41Ap8ns8iEqqkkcAA3XdZhjeypWdYwALN3J",
  "key25": "42MXaBmgeqDrwKKAHpaHpMi2xrpSBk1WmtfhTW9bKz1yecaFJMoAVky7Ge5KGGFdANatY21yFHV6UrkkSLHEdkHu",
  "key26": "32vM1aKVuMfsm6D6GgcA166i5M23tg6S7E7rTHL4GSwsUsV66sC4ESceAwx2nLVaGzVvPPk7YRWco4fpxs6oVLd7",
  "key27": "518qPEFqziBA5JzDxM4EVJ7BSUb7xMqooWZ1wmv8AmV9DGGk35MunPxUviBQ9n59TQcdJgguhNgRufMMAns7jfft",
  "key28": "4gvUHYWMh8QZwUTz5teJAixdc8kzjULkfjzzAAa1My5ryznuRRwHGsg3o6fuv7tin3QCDtMZr4ya1pfbieT4k3YC",
  "key29": "2fTSWYpnqqpT8JbjHrPLf4Y9xWH9q6xBgXNbnZvXfbe9V9JnSAWpSabSyio8F7G6DMZMHUgPdEmv1yGnbeXDmXu5",
  "key30": "C8yASpSSkF9YxbCECWA8aLsCQeiq5Zmbmb5V15hxYRN2Dg7UxaKmsdBiYjF2emd17bEG5P7rBHkE2NxjY2gpDL5",
  "key31": "2oWordLAJtxMhHs1HUhCEyPA1xsauXiiaRLrJzZwtLu5tvfmfv73BiJo5ukY2FWF5RkWEG2dYLkViJfXCwxPiror",
  "key32": "5n9v2Rvu4HB5hajvgVriSxkbK6TeXpe8PCqxzXqp8NsJSKdjqR985AZi564guHGVRnLNxgRNUHsTktTi7kUq7LiN",
  "key33": "5VJdUArfpJSffWYVxewH5iRKARMDKHvpC1h1rWUGsZKsUu7XxiTuWgAni31GcrXdFxXdyvzmApVnVuynJQtgrng9",
  "key34": "44T9QpCQZDWN6WG8TaYKoZnAACaeDvwBg8DoU728ZtECBG2zszNsfdJCmjVRCfx4sffrjm1LTKR7Z7fd4Rm6pPMg",
  "key35": "5fASUGwLjKBzEMjWq4PcwVYgoxhnxC4RQRH4LJaqYVs1fp4uSahXD6CtUzdvfLLLhUsbq2BaesZQcioadrJMUnQR",
  "key36": "3RNChoooZNQ5yvs2Bq4wYwkApjgXuBYXASrb3LMMGFLizfYNaeKbtqVYVudfsdFrHzwirEAsx5EreL2MYrcSpQqe",
  "key37": "2kiN5qXpqBD5yY3TJfvoQc3wtLSEQGB5hY2brFAD4dN9sb99Bsv667oYtuDfq9WJsWPgw7q6M1DnPa8NS8Nd34Bj",
  "key38": "5WrUb3Cj6HJiuCcn6i8eZWQTnKFGSgEgU51J43LUg9g6WYMNhgsRfZoGws8ajNt4BT4WGbPTqWpQnvssSyL5BPSZ",
  "key39": "3ze4pPaHHcDaagno4GF5QdNh6zmGbsHQqYnq6c1NG61YSoXyiter3fqwiJfhYYXsbAdGev8i46YbjxDgKhhbJksm",
  "key40": "2uyv8ziYNFbvxeyQBfzh9juwyMoEqsdwu5HCF46HUZdboq5pEmhWs4yV6rPyxE4Eqdzp9dpyknLGoHxNbH5PhQef",
  "key41": "2PHAgM91F4ssaTKNtGEGdXetKTqzAcrX23AnpCXWCCuSVMYffvnf9ypXnBKDmaGTfKnARLKtpFspemNJpEzYrEvs",
  "key42": "Rb5YVYDwsfFyt1UPjkpwXqWh7mkY2HRg2bmgKd6PyoySEfVxrciHPp3QDLocspJiCLb2gT9j15fQiwDj6w6vBpw",
  "key43": "36AmTMjzBDGyveEBNSfvEpqnJFbcKfd7AVbX8LxS3hKKz1XwbBfniCDBqLEG2WXr4YU3AKEGJbKa8GkvaAtX16QV",
  "key44": "3BzdakaUSgEZGs3sCRApUYAUtVHSR3f4dt9oDzAjwA2tDjmEoozGpRXDjWN5yLTReiwMCZmkAmGFPf3AyECEFBrq",
  "key45": "5tbudCCsdWPE21HfzkLDUxyafNZT7yZpg8rLE8LxNWX9TeHFXKx5sUX1s5GcUjbAwHGxENWWmCfdGJRxyJhnpTfA",
  "key46": "42zPcn9jV9NDCZkcLroNTrGLajV9HRe4puFYBSrgPe9UiFoN4ZmjbvTDXh6TEoazf37zVUq1GESiA4vqyVfaJZRY",
  "key47": "2EoMwo7a5BRwDhaxHGm41UUSKSgYJhxFvtqkYzQyzgmNPSeoaf3LdfHD9FSqCYrYQgMWZXVWaENKeAifa96RQfPJ"
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
