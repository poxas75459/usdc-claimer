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
    "1HPoWunpGKaERXxFMgq8TgHFnJGDe4cDQBwYVSC2NncTPkuodWmt4Jrv12wnYoiBPWf9wbJ7LkoiNB7pvuvPg4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K1gpNuLgn8nLCT1uDFHRiXQME1uTty1ibkgTX7oRRyZouGGqsgSCTrvGkU2avNsSegxtPPotWGyh3N4jkvtDwhR",
  "key1": "4Ma2HiSQdH9MDnNzEw6pXmHP29DnrPfRPeSU1tYKqRf76zveVExoqNJW3B8wpRoa8R2XeP8FyVuMLShieeV33s78",
  "key2": "5XFadyTyoy2gBza5cTAZyd84GxsesFa92NzSYYq7fWcMCfsL6nvXXBhTnvbMR6uxc4RcAjQF24WMoKCmzg7PACVx",
  "key3": "3n6XEdjTzntVgKj46doyT35Z9FdEHwTwbBhwoeS9tbdhNETLKCVqgW4PcMGdL2dF363NUtwG1Q3XTibWjgrfkj1g",
  "key4": "4jToSkxpooTCBPZCc51DQuzqfn53cdxGH8n4voVM94adbgobaLSinhXLWrBdVmBS3nvWRzVTHLtyUZvkoWzvBHbV",
  "key5": "PVfKpmrutL9PWPQXDqipfyNFWLeGfQt3UtP4k7mxjGoBYXVnpq8gom8AAsbxnJM3XDPxYPCn7o26GVVbtAbCujR",
  "key6": "kFc4DBW8sPWvXCEuHjhSvkJur8ZfdgUWkSMuLCZ9q8B164RNgTcu8TKRLDCG31Z5hCr3ZjiQ8tQo9CoGWqLCGhy",
  "key7": "2tuS6fGjJEHqMxuaBVA8vv97aty3Kvp4sP7W71qjsKfG1kjjMDjeaq36s4JHaaMMcinYGPasUCTy89v4WJAqVXj",
  "key8": "3oFYwJ4qtv8gxNj1d1CMyiBrViTDRQPFwJet21Ea6cCpsuyBQ7JsW448f8SqUH3ofTPMKp5PaKEEn1k8LySvR43h",
  "key9": "5YR4mMLMv41xcV65yfm9Fp6JnaGZipymtaqaCRiFkuj5JocbeonXLqqoAnkUjhHbiycT6cnkEBbD3dJR7DjQ9HiZ",
  "key10": "3Y57Fe9WsayT9qFGF5CaLsK8L32qdzq4q3qiz9LHh6ZcVN4Nh3GJUTDoi8BoAg3pGsHeHGzUFbP6wa6tNVhEeL84",
  "key11": "4weT62SGabyUT13SAR4L8gUDf7DeGLpfUBUy9BSm241Gi49Lu67prn1vTGH1A98t6bu5F1tg8r8a8TungbWgRTqt",
  "key12": "45e4rKF6UC4NfU3vSDsQDjNDVh8tLtwisiMGkPbiLG5xqaUdLJRQsxPkmag9jPLHU5YGBoxFCxTkZgtb5zgoEcP5",
  "key13": "4uKC2SDb7sjG4vfV4oFZjFfUDTF6hKDqxtLVFQK5MQSTMpunsJPfM6EzZaTNhcszTJJogjmNAjiQA1WDha4DxTY2",
  "key14": "5dbBGsi5uM2r8zsjv3pf9APbZec45VdotnnbJDhKqGdMLtkYKN64zpnDzNqtwJUyyADmb4z3sQo43hiZJnKzEcW9",
  "key15": "4nvcwY5JBEnNqRGKjVAbZ8o1J4Q1RVyLj3m6Zk7VaqhPUte3kLYEQETHMYz1bANS6fTGZ3HTUobvR9f4sHFTDQMv",
  "key16": "AiPwhKgoTFLJjDtjA7wqczFNc1aeZtk3NDsm7hRsKrphuM5mfbHkviEusryQr1Z76DsMdb6ssc9Sdsyw9abT9iz",
  "key17": "3gSi2jVxpo1zKuuML3a3j2usEe5h3fGtvTkTZzZDbA3ZnqadFTpdHWSDqm4vUTntpKsSNwyBpm6YeFEDqA5c1LzA",
  "key18": "4u6E7cVJeUgV6TvyjrtpBwUCfypT5BjwpkDUEpHVrXBeh32kYXpYoNdmpBD1h3RhFzaCYkGX8ydaU4yYRnLomXox",
  "key19": "3jrFAKV7P9wNk2B8Sza9nPpCroRWSNZopTqQZTPgHYpcYZRU7xnRvg9E9PY5aSxokcHDoGdD3uAzMTzi2e9DNM8u",
  "key20": "2S3SaDRS4UNjWCZa1g8yyq78BBcmmK4cncqYQmXGk533j6awbVvPJYnxSXc72nLBnfCdKz9ea5wGZHf2XrVNtzR1",
  "key21": "GJZK24sQ3W4163QekyzGkNi2NYLukiDdZhAptcrSiub7Cb2ts1bRmm7TrwVtjbSxmeqSQmnHH5K6yV973eyEXSA",
  "key22": "63X6gBywVJ6s4BAfnKWToxwy1ETzGvQWAuodu55wyymS31Jh55f32iM6ScPny5j5kvUX5ax7PSgJURXitw9NhdFS",
  "key23": "SRVCevt4bmuGDYELvMQEmouqHwJHCFJWKPT1nask2UJtBrJJKqmGTtFcYxvUYTNMzASupnEMg4ZtPuoYDyRc7aT",
  "key24": "3Tno5TAQBuZXLEXLsYDuNJJ6PNDVsKYJWFJtTjYFsN8NKHEb2BANBq5Gjd6rYfdEk55c1KTg4SbjRCipYvc1vvcc",
  "key25": "NSPzbybe8ZLnHAG2GL3KBHxXYV7SpPM221kyr9FyCRaWbCnuD5AuHa9xUAGutjzRDe4oMXRzcPG3W6wPmF7jptc",
  "key26": "46jfC4qkMGsFH5J1N6PYtncW73H3LBaVMhxJC9zjkCjfEndERdTr62CzEq3cmB3aVguXSsy3r3oMFxXpvKtcyLA4",
  "key27": "3Zcn2XVCmrxW8L7Ty8D9gVAnWN6iw8uj7zL91wN3p8q8BGnyfmHG6WavPt6pc7LKi8Yy3Ax53KwFWnFDySqbkbGD",
  "key28": "2eGMVrhhNwbUJnNBj2nVFf8hJZLRdWfafssRryxfdcRjLTNdZWT72zHBpVJ2b1HTu8df8BUxBPFY6M6AmXpLVrkk",
  "key29": "LGoj3BYgy2iDkPUqaDeuPs6RhyxGj5ZRzp4jhM8P6YEd5hgVtTuxfWNATuzkEoE1Xp9wiciThF3G5ShkpaoaEJp",
  "key30": "2djPnyPBZhxZJLRrdskQXXKBoHJvB65me5UTRqKbM4HCuVxiN5drbKoXLqhsyCbV5gzL74w25e2Xuc2dDBKSXgZ4",
  "key31": "5b5e3JFnYsjedb2Zewjanxms82R7LLBadZWXnCz9iPtbGKwBrfbsiHoJznp4efRXzHTUExjd8G2ohzrVjRiHU5nG",
  "key32": "T5GwXQCdPWM3Q56Y9gCLp9dSerFF9LQiKdAscLKamhXtmXFCq3wpA3C9juUPhB4a5T2WSFF8HLcV5C7sWUYN64C",
  "key33": "24D2GWb61YhX82NheHwgK8ToWAANFbZizrkY6xXaNJhJRJQvfE2zSjWCHMVr3nNuipZGiXXBaZDAgMBGyjXCBL9C",
  "key34": "3ePgMfjMZmQpMq9t5h29Kp5g9xmpcpjmbAvA3ouDsKrhEmG6t18xEnUP8M6UsKPQ9jzLYcYJ4bTRCjTNoi7Ezfak",
  "key35": "3uQr2oLvay4EqJymjTLhUgfEbu3QmZBggB4mDhZDDWrLgvhwdvmUVhbLUuNpVnWjuWJ87r3EvgymN5Mb3F9DwFkv",
  "key36": "5rkAGzLy7Xw4cEfhU2jVa866jc82jXnk8xi7VE7MU9KCDHoVxtB4ZTZYWv326PgNuKfSC64EdNHmqftCo7HfUvQ9",
  "key37": "64BJL2aMsus9o1yBmBLDVcKz6FAFcz9zLUgspDgqif83bXyQ4ZvPox8AsT3ussPQ5vAoGMZUuHJjEH9pxRm54iqb",
  "key38": "53KzkJo2tLA5jj1RU5fPW6CkptmViYnM6tMif2XJhxsdHG8455ZTsxFRgLHNwZts4QJcZ7x3cNtyRruvx6nv9xaJ",
  "key39": "3jaE7k2aivMHz6yi9d74UstiRUXjk8ZPj6kHdgvHQWdRW3EqZC8k2S1GuPMy8giwEPk5KHGnZb53ktyzn8wz8Sqo",
  "key40": "GNSBxFFqYBpuKZRhy4xi11SfbueGkBivLTgJ1g2FpPzNiLCZtTzrpFzbfw9WpXQdVYHVVLv5gQySw17CMbgzfQv",
  "key41": "3WDHD8zF3eeXYVMQJADT8UFKZGDk3tzsHUeF8qsKMdoHC9C9oAtgP878hbQtckRLyof3pT3YVFwySg8kSiwrtqFi",
  "key42": "5eeSeR34r9FpXCRcVP1mnSadhLigagLq1ydv5p3SaSPYxsHnA1oygGhuL5wTGvM8tL5is7kuypqpAU7qQnKPFQHF"
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
