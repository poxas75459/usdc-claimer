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
    "4eaeTohDioaSKXPVpeN7xjEFG5ypLzT3uLYfvTqPVaPrD5ZPG8HnWK8sJpc7VKzi2UgNYBR9qdZaLAQXQAENXy9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CPyDrmsH3coDKqBUJPyvpuyZgHuG5haXQRZfP3vJdaYHeHYmsdnYBWSo3f1eJHcQoNySdpqb1hsJbHvJiehmgFC",
  "key1": "3UTbwQFu75pDS2kPVD9rvvdFXCK1Kf5FtmjZUjgY4Fzck2jEFWmxj5vPxQVELyaupDZodR2veCStiUnot1tyCHX2",
  "key2": "24omzv1KTX9TFEddy44wxpms64XWDNvYbnFW6cezBzUUUKLhBYGzAU1wAZw7iR3e6XwNxnE6hrkZZrRgZnTw1LNy",
  "key3": "3MEr9h3x83n9ZQz7rto8pGnB3u5cdjD8Ee9hcU16cMmHQTqqFxnVLAkoBMGuLr2DapdnBCY5wf3XNYKTqFNXYCaB",
  "key4": "41xtyx7mW5hsoucCx4KK17WCpim5v825bfN6Zgjg5BKcWVVtw7oFSqZMU6STpSWtmqcEp9h7bmgiocpD6KtkSq8c",
  "key5": "4kjJbzHrxppUNenLQ24idztw6BPmaK5vzHsARKB5yjUyoW5JXNSNh37noHUKen9eFpPHA2XYJxYvf1rgdnC5wsKa",
  "key6": "Vh9PswHM5zpcQp8biYnHCG7UNwcdE66Q66KrG861EFkY5k6S3KgzsDvh1YNFWfVASczcJ5rkQwJXRMTxsCUybyD",
  "key7": "5C3ZCKmwLvN7ahmcooAUEy27DeH4EJZGgBytdQHN7xN9CAxAQ9f5C6sMmVpX7yHPYe6ws1DK3UjiHquhaasN88EU",
  "key8": "hjvDStRK2LWYgwA9Zz1mPFbpwsgyA6eKMYi4VmZ9FniHKZJhHf6URVUSK2fmXrfNREp7bL1DL8dfczw7RG7FGu7",
  "key9": "kzkmboYaGzTdwjTSjvWDK2agqdCEXsAydb43By6N3sgk8jbDbjcep471kLco4FByJCVGwkMYYFwvHrjMZZfAFrj",
  "key10": "xcBHcvjTfT6o6c4rXR6xkP7QKHS4DsX6W4tusgoYbp4ke1oRGAQBxwMhRQCbPaJmgfMuWAVCthGu5NCJBKXWcLa",
  "key11": "2ELQtK2z35yBRjCKgnkxqW3GrokpTiwuynMTwGzg559sAopNDsaoKZ6jcVL3LvztJUDZnPKVkSyAjE1tHwzb741j",
  "key12": "3h6Yo3qcyw69ZpDK34Y5L54PyWhzNrn4ARyT4bYHwEwowgTj4U4zmggcbe1xvBGTwXVguxqdVSYrBaY3R4ajURxn",
  "key13": "54BwiZbBwMBDc7iJ4TuXoq4zCvxAmRah9UGd8KN1ucYPqt1pJDQM85LBRDjE92rdJWJaMP6UJecWuioh4g1oT9Cr",
  "key14": "N2D32m4yhtKksYewbtyAHWEwLEBeJxQunsXqTqU6jLQcnquW6MqWW99Yp7GNvufHyu7NcxnhfWqS5QAHVPK3jXv",
  "key15": "2rGwFEDZkJ6sFP7gBr4guA1TPcjwisd7LkZs53gbQXXjU2F9PoyYv2CMty5EH2BBf9vK448nkoMtS7iBRvvGt7WY",
  "key16": "321fSudnZpHvTKdjaDU2MZNUMYnE6q3SYMoC7sV2FWXrLdZwgTnt3qTPyHX9mqWGp4Cpt54zKza28bt5tW75MGPJ",
  "key17": "KY6nAC7mPeSpCrbzupKm3hEtsXESrhCPa6CrmXWuCTQyBsvJfiMyt2fn9kN84SSEezo8tgW8TfGCvGZ5eivrJTs",
  "key18": "5vBjoYqjzBJcZ4pW1JUfzrLGJhNtcrs2Xh5Uvsccz7jmpap5S4ce3Qywyvkts4HehtnyCXYVZgK64Y8B3aJKqLY",
  "key19": "2t8aXvCSvbB4akKmUYmFXUKzSHwaMWnpbNaUdKzuLKLtut6g82wDc1F49RC4ptpZmNhsDgJtRu3YzNvcGtN1AySy",
  "key20": "xjFu9nDKdew7J1ZWLqvLxkyCRsWT5es8FosXy6AXZJ6maUEXX6zatCpiVYhRbxkw7kTANG12sZgaT2D5JgnDkbL",
  "key21": "3TGZuDDmYbLBmgdz5rFSpj3dg9LSMjUpbxDX4dwTdancp8HUZkBCdErRKBFqepNttb1vRebsQijjAvQCVjUwnusN",
  "key22": "5MrwSkeQBWbQVN71TWaK29fi9A2Sf3qv6kqG3e5ijtjuNUQDorWXCEs5Yyg1xeyAfRqfW64nLEdenXrMYtHMnyiz",
  "key23": "2nE8r6MJjF6hH8LUc2E323deDAAL25pWG65m1afvbtQY3WBcMrpusursum7WYssDePBJuVGyGXosHbfHTpM2RSPD",
  "key24": "4jNjsHmnmPF77wovYskM6a6V7NGX8VXatx8XUQ9wvM51UziG9kA5XxnSYTaVDS6GY1GSEQarBTAscePZM9e31XCK",
  "key25": "65b4URLjyupBbpFugJrdogLqAXBLzCC4dSu5BcTw8sSicP1Cn9k4hmwZwpwRgB7huUSYVueu7U4YhCtLbUiQXJbX",
  "key26": "5tbMBp3ugPPksKZinGGDScvXh8iH1YrNHj4yRkPhArWxExEbGfaBH7mu6CK1HxxhnCQi5CXPmCdGfbYpC3XavSxK",
  "key27": "5S6Zk1HQJXTDvucGCJRorEf7Rs25YwYpwoekTiLSEEvruDisaQZBM6NmEm1MFEZAXDejLvdcyRTCiNo1D29MPreR",
  "key28": "LE16xV8zJr9VyimLQQguzwRzS2pGcay47QtcBgJa2DgXptYChCVo5JAGnKkxiXwLjaZLUiKkm3Lszw9B3tUkwXj",
  "key29": "5UtCcoGdaHQLsvUZJYTUW1QbBP16tazvo85CWNpThUy8jTA7o7qNafqpi6rd4C22K2fQeBpUbScT9taMmKdqDmNy",
  "key30": "KYxCqF76qfsqoJf2EzAA77iwEifpad91gYgMAi3tPGZvR2nWAZ8o8ihYJiTadBsqu19WQhRTvAow5BshdJUNhaE",
  "key31": "3WJ8GLFWLViv76RCjD1cKBAjpmgWPBK3poNUCHUgEkhSeY4CEmRFCRYYAnMH56n4PcioDE1vvP81pXT9zYTiaYcJ",
  "key32": "2NrCFFyS3yd5T4hsT3txbnxmtJwRo4UmwwSSaGzGcrS4hWSpSV1s9h2ASW2aKtLPzqQ1mqQ2QZspFVCGcKeu28yS",
  "key33": "38vE6vjdbFsLm1BpbJkdG1ihkkKVStg8FpJPpQb5sMbUjjJedWBkuAT6ahbzx86dnegMZnDLTCRBHQ4bRLmdDg5g",
  "key34": "5xnq4vZSLr6bvPh8UVQxSRfe25qPJLJAxvHGVzcRabdct7gU8ovYKmiHKveYCdevzVrgHJ1pjoUPbTpnzkXRaiGp",
  "key35": "5v8t1Hu9juNXc8YNzXin9m7iUPWaCUTBf5Yqv13XeqVMuNBYuJCZ4s4uu1QBsrkGozKSHkoqaSErKP1sT6ze26wt",
  "key36": "5yEGREQ4oPEpPhAvi9jzm1y2J7qK3BspwuA4Yh9wVrWUgpDg7ZvyMuuKchJWnbFGjHKD6DtsPCDkoDqK3reWdCwE",
  "key37": "3554gckyroKANBQgFxkWqifYnYNzCk8HXpixmjaJBrNhy6PY1WwfsUmbmdAKDdwrQjyivPFArvt1BpSPsHECEGEn",
  "key38": "2v3tf1A93U85qfhj8J8xtVQua5ovL5yLRL9X9zSKm9eo3p4tu3MaxLWcPLsA5vcEkYpygvH2vutswUooJottFX2U",
  "key39": "2a9zRLEZUMh1iosND9LK3DyKRnT1ntQwvS965EMdD22QY8HuGBNrZT3yRvACGb9yTDmCTrr3drtxtRHfumeWHfyc",
  "key40": "5xvf6gVTvkz9YXk2Tg5evUC9G1TJ33RrSnTeyVuE1kDf1YZ6hg3TsdnPSCKaBJuz6BbdxcfKTMS9GCAKUEs1hMhx",
  "key41": "5hxVeZZedixAh1TJQSfxarCqoLYJNN4ZQesfAKtcQTdNgpnzbRAqXF9jH9zyQvuLrWGVvbKwvv8bFxCgm7Ky3Z7x",
  "key42": "xympwyVzvhJUk6wuM9wHP7UicgRZfhJy8mq4qzhZ9c47vQTTyEAExEUeQALAM1nXSHdhL6yeiEPCqH5xzWogzfF",
  "key43": "L7N1Twks77MBKwKLz7YS8dH56zP6g2XDQQDpnDG32sGNjv6M5oBuVkzh9XBsf8FcuYCGffojnWSksNEqY2UyxPC",
  "key44": "3cYkv34xEKvYuYuSSNpYdZiSbgjh43eXS9GbenXKP3FUzSxFbJKFvSZihuxrbv36QBeGmErdnE3zTBCEPZfrRkr9",
  "key45": "nLLBvz1RuzvZPokfo9ZxcJMesNWApiWLSMi7uTWMAZAytxGuWeqSvbcw1hyMtNqmUfe8tvzfxBgiy2hogx6nMmN",
  "key46": "5Uiztn1fDKHb1o7tdQPfe5ZfDhPMWKX1ifEpkdH9BrutTGBcAufvzEERqFnn6Y6aDNzqf3NpY2CJzisuUK2K1Wkt"
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
