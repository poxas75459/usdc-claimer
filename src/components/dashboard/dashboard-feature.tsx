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
    "53fV1hoKofhUA26PSkFCdNaJY3isoe6mAJbEa9W9CKV1htuAmnrg3d9yJsG6jhKpvQiFabyZCjNvBfxNB3E3RkZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ju2EEhdPGwg8nfJWsYYugRozbWEDvm5ecwx4KsYyfaAMP1Q1ugHgcQTVaqoq1MGF3o1gBzZgV1TmLohww69psyw",
  "key1": "4j61gu5AyA8MfPFWHPGp5ToyjXz2U7mzECKwyD4VZ4QJM7rGB8vDLWoVgfoYnsXHX1BJKeY9U14WJ9yCGGAeGvhN",
  "key2": "3DpxCLPMgeQoqySijhmiTzc2UfCwPWEXAd7v2kD6JZhMmrk6RdKmsZYBRVQp9TuJofDMotSDSGeeve2ohk4TXuT6",
  "key3": "3pJNnXvJ6ZmJU735ok66BaZZzizKtDq9PmWNefE9AL9UqV5hUk6yYWRarhusspSwEmKziynXzo3SancvEBL1CiEy",
  "key4": "52ZR6FuEbm7ctUPJFNDYxNjHJyJu59j4qnWKGAEDxQLtnS35M1gtqhSEzqrPdAyUeL3Xgzreb4j74Ch55aU9FHKG",
  "key5": "5eNUP6TcuZmV76JRgLN7JC7hEY71rcxbo2qAhJ2QQRESHUE1DzBQk1zGEaZwqycjfDNSFP5Zuwx89KGCNJqdWNut",
  "key6": "5v5gQwnfbknRhFzauonbntwmLb5d8EeqzBWNS6XoC9Kn3wZP5w4hkHDun85hbrH1MrCDRoyH8h4MdCzjfBhJ4GK2",
  "key7": "4Mdr2wMAF15wFXRSSFDce1o4fHoFHb4To1qzwZpkMuEAs69gGMVnyMumJBLvosQdhw1ukDkwxjACsohqt8wfZrTo",
  "key8": "5SfW8EdmsjzkAXbTVdoqoXYKjWDojmhRryYWaMeZqf2cac6pRo6PPY2kXJhDVuJiomHbkzpNMqunw3svtXD7BTB3",
  "key9": "4Cxs3A7pRt1BGCXDEtb5BhtJot1deQsR5NE7wNWntuGobbDMeADNmzLCByAiLYZFGaxrzH7GMSHgfwoodRMioak",
  "key10": "5xUDe7yzM3mZ8zYfidXsHSEiSKnEENSAvfu8KyZ6GFnjXTTk3Lt9dL9ZT2vdcNSABkxmNEtWVLdcjGeB9979xJg",
  "key11": "268VAWfaKptiRhjGP5U2a5E7k8V42Am9uDMko9m59fqZa1dTD4xPx2dCYiQ3RrjC1LyxkbKXjWaFn6VSFwu5hCdb",
  "key12": "4Yzdi6YtaKQ7fMM29Z1cGF1X31qWk2RF6vLXHxDjvbhUvsKh2yLyWgHeds52XvEP2zPHYdFVghWncywBuXw3tFG2",
  "key13": "5SHA49bJdpRnx5QRB5xBmS9fBdRyJKwesHhqZS2Wa7LFnPwTV9ke9h6oom327ZRX1R8kw9nu7ocHvr2f1HjZjYSy",
  "key14": "XTrtPN1sjP2UA824degCmbjZ85i3oytpee8XkqMxBgyjtCZkwxCGYfS3QqLCJhS7Lb5iufSaPA4HSkispTGxYTq",
  "key15": "59iqR3SrQDVEGj7wPrUDQM2taPFC5PMkjs4GkbKoCVBsZgpkrJP4LFNVqmaXSBzoTTXjhdZMY5NumEps4naf6BAF",
  "key16": "3hJ9McJawtL521Cia6bK5LS7QnjNGEP2MABwNPC4Jt1CVte9sivvBx74X9qZBSiyFNZ3kz4kqpyuf9rK5dWiQYSN",
  "key17": "2RdBbsN2AM1e5yHCGFbodNKHBomzfSyRaBnSwAY3r6jvdVguCzRxJAUsgWMAAGzEqL6p5bDy7wii1EXcPvoqZvHX",
  "key18": "3zFZ1eEG1BCZqhWNA8PFJaPxBCrPzi4bJ3F8Qwqs4FzcHhxZCe2UCVq1vme4KawMJ2MLcCYnPXgMCCPnE1TWBAfq",
  "key19": "2PfgufShVCYJyrcf7iJbdE9xLsQVkdiAS13twUPWRoRpv2Eio9cvMGLFvqjif6XXmu77yRAgeuM6L2cekLaKL9ar",
  "key20": "4Q7o7hQkVfiB9G48Gamn1zaPy8NDHSuCAqWP6NNBiEc1LZNir6dTGk94pnCjSbTv4LhiG6PZEc4gFYKukS5UkBmM",
  "key21": "NFYwKeBuFV5SRRNnM4ck6Xats7ofZKuXjsoRpqD8rUZxz8uccaFdWwJCuBMW8LgajBtAVRzegLGH8u3NKuNwkHw",
  "key22": "5LJ4ZVSmPNeamEPLadteoeGCCuE2HiRMsXJzmq9ArqG2YKZ1ZcLcaLbv6MMwjYLnUtTEA7CNbfu77ZvJJJnK9aZN",
  "key23": "3XQS3B5hQMTkktuGY89suc3iTPZmRbTYgZUabouoUoHaFo7EgokACruURbK6ffxodcLA6ntjdJEUHCYWGqx11hiu",
  "key24": "2GGVY1kRnsFEQx5sBMwoWjkgvuei9Y8x15NWnvdRoBXMnH7WCakMgJ1KPXhH6JyZZpifsQ27Nj2DqtJTXqoj1Vjk",
  "key25": "65iU9e6bB51vxouAE2s3w8eo3CDN57pZ8CtWWGzSHesy8Jb8QUo8mj24ognEdBGiF1fDc8JjMK7qhyjqpcu1ryEC",
  "key26": "RH8bk9V2BRt12uDBBcGHKZuc7NiFDQ5FPFLgPtgms55ktkznQX8LsqGCXX7MPZmv9LxhSJcSNu7ZVvP1X5hMVPD",
  "key27": "3E1jHJhAUrn99DNoCw1F1XqFFPV1WCWUfWDQ3kd3ArVYusu6drJrX2FWTE4GK111gnmogU56sau5Yi6DRgx5MQs7",
  "key28": "5mm3XmbTWGiJjFSvPMW8oKg58K43q6nx4vUgE23fidCB8HNx8vCEBSuuYiTMB8cVcgUeCL6vL6EceUmzb8Fo2epa",
  "key29": "38oXMQgS8tW7J3rgim7GpobnzcoPWgU7z3zmos78cokEYMjbExj31wprP9QT7yCGaJ23Co4Mm4YKysw6bfzCGQRz",
  "key30": "2VjZRnPydDZB4Ut7hXfgu2HsZwq5zspfuWXXtdDPDofDjonE6HikzpxLdFiEeFRsiarE69DeKU4UBpPdwES3UzSD",
  "key31": "5BbqLFqsLCh4MALXNofCtxUNyBMVu7s2xU2EmwiKAMmaKZuT2ZrwJ4viCEJnoV7CbzxH3YE2JcDY93w9NDsnekDQ",
  "key32": "2DFWBfVXrG4coL1PfX1W8B5tc4TvoSbeQctVsuov3wB8qDN2ZiuAPoJsgMysRcNCi5oikaVYFdQ7hja84kdpMumG",
  "key33": "TSfN5Lws1oB59BHanyep6ZfcUYo8SzCjDPRMh3msGKFU2HUoCSKh6vpT6CzUS7xHosjkpNAxFs6dHz1bi4ZQMcL",
  "key34": "64esNaQHwBZkjXpPSG5bN5EWEPhbU1HNQU8jASwo3mVVFaKCkRgDLGh7Y2AvNxjXhweDGChJADaARB4oFVT7TwyW",
  "key35": "iffmAtNVPbqBtyhE4Xx2MgFUjVAmxqS5aVvUVbTEQDUrX73TM46pFDyfXMMXfQbrCQMCKCXKSKuGU5d1Kvk1Hgx",
  "key36": "LZc9CY7gJa5XGFvJ624QgWhNPS9CwcJHHZawQYEKsLkL8zK7XKLnWX2D2L3ALAxtxAji7uPfnH1KnmgLeC6qFw3",
  "key37": "yAYYruYLjf8Y2N7XVanj6YTzcwwd6987keL8C9uVeNsn6w6WPm7rg499foH1iMfEbkstdyJGdK5FERDz54W1wo7",
  "key38": "2No1sSoixbPcuR2xSitRYq9av3QXz5oTKy6U2Gpnb98zsinBVfLWKPEzU4ytjKD2vkAhPpncbxK6diyUQU84pTZJ",
  "key39": "2j9TcLFH9iWXSZHseA2eLG6WBzCV1f8Yy2NqS957w1VHtXt9EbvizxVV6RQ7dtZH11tobMbg5j5viY6oW9MVTB2A",
  "key40": "4yaXM9LcJXKFoGQ2q68fqoV5k1TiC4Nty7TFZ3kFPYMusJGpFnxScpGdEHP1v3csg4SpQ4fhEJzN4n5Q8bj8RaYS",
  "key41": "3Sp1c4VsH6KPRzSGLHpNh2UpMii41BnDYKu6aE5NjAPTrtc7FUhBH8ykU4RBUHWYCZD6CtEavNkivqMdMLGVJBtu",
  "key42": "4bSJfVAdwwXsur8BZQ1AWxH4wzFUGrP547o74zhh7Yio8xMGgxfUnczaTDx1jaZXQAwJtjnSQYGeV6cmHXNqW86n"
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
