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
    "5pc56v6y3mouSLBVw5t3AvEz7JGhGhoL1ZAzvAyRQba2kDg2xmAQx8g8KBUdDczpB9FWnVajPwynqb8sTkJpwGj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmpCvzF7MPQM1j76ZAbSkBL737YTscCup7d1ELatgAZUHAhuCgJWmVp2cBmeXnNpzT2Rvj9ja6BZMuGm8XYkhqt",
  "key1": "4PU9oMf8tQRRUw8hDUkHQuAFMfB7KxeK3b42vjyyuHRXGg25jMk63TpyLF1NChiZYmL1HMpds1uXr8vFSVbgTZmt",
  "key2": "33YVWuU3XE6Fg7UutYhfzVaHLoRYb3mgSLHeMtnrHuxJ99vFVt9YSHsuBez6AZ58dFpd1K8tBZBiyYcABCbzjvcq",
  "key3": "3htZVzDP3VJq8CnRgKx8JWmkv5b8Ph3dyF8NdCd19U1WM4GXDkgBme7GdpxEBWwwXcWtv26vGhgxPEsXA4DhYfwr",
  "key4": "3RPWk5bh3x2mFkvTX2Dfa5y5BAQQJnvAuSA8MrW9g9Sr6pC6PnFx2bwFoTWgaK9S6cuyg1fBBRee5F3pHy8KsEVA",
  "key5": "67kYjquUEThnTEmfCr5LqQ7iNE5xESWL4MY4op7nwkKG7sFM3LUtY8pMqQDXp4cyicNdevF5PgosWqfzYiDXdHEQ",
  "key6": "4XxmsbYBMTLvWqLXMQ5RzQewtbsZe2Ebvp8EQ4dxzK6g6yjTah5MPWNcZbz3X3yq2JoXGxaPKDqP6ZtaDnHaTLd3",
  "key7": "2Cq9yJGZ8hcVut9byf7B86tzyVmSZecS3fBN1NAb3kSR2r5FL5oNEEP38YF1nnoFFfoyq5T6Yqy8uMLkMPqBQSSW",
  "key8": "4W3x5JgQYuF7vHY3RgeVsRshnGaKGajxkE4ur9zqRQCpE6HEuXEGZG1MTtVxyDD12vxtcePK5CRoEAsX5LTVcjnQ",
  "key9": "4KbfmxsLtodsiuT8a2evPrjvZsEupBkz3Ni4YsM1hDjKFzp7mmqBq2GknjL5DxLFAvL6GiEcKrjKH7CMurxpbaV6",
  "key10": "5j1AzUJh1U2Bu92mas1Q9sBw2FJmQHekHByL7b5g34v8bxYPuaawu7JuRHp169NWboX8SGyyedyEYFCQ77FHBccm",
  "key11": "nsLfPtPptQcusaZ9b4jVUfHu5u2BZfhjxQec6Jp7MusyX2RXR3xMowioB3yftWn3VjoaqiqhpQh6EfMLjaWrekf",
  "key12": "2MCnZAR53135QMnsU3zGe2q9T2JeqLVRAup9fCeRFMuvY4kENG3iKj7SatnqgUyL7ds527UMF34QLgB3KZGDT2xp",
  "key13": "4xA3nVz2RETPFdFyWnzeUrZ1iFkdSfBjfpmAvZqq25V67dXsfecrmBA4aLNDb9NKLcK8aXsffr5WCuu7YozvvoL5",
  "key14": "4g9kgpEZp42kg1vvtQk1XAyiRyyFmCY2AXmQGXWurqz96P6FcFKKpuaVusUo7XjsHKQhHxnhG86VwPL5vFzhRR1s",
  "key15": "9XLr44kpzW3iHf92MAkQThB73NoTWEfs276wRbCEinTnvcQV4iSBim6sXihCEeoohChFcEEWAMD3JBUCFK941KZ",
  "key16": "3GQsM1vxtTx4dEwVJSNBrmL3QjgqyXD172d74rGJtCi8FbTMgzTKDHkjKiNxshTS5LAdNSDjeGsnDP7A8XJGvWV6",
  "key17": "4zA1tbyMURvZEVwGyuuEjCZSBEmcTLWVECbnTJq49jSKufMVjaG8FJ8cGWeFac1nXjBpcuVsBwdgbqCiJ495D1Kk",
  "key18": "jC567cdLyJR46d8weDDnpJDPjCzaH8vUwkYjkDGYnfZSVE8LTSzgZQfAFF76XccFRVLLyK7xw1XZfrKVVdd2Ajh",
  "key19": "x2hSVWQL1tMrmQZR96HgzGT1dyYvV43zwvLypWKCUxWZiBhVt75Q7Cy8cMeTQqCVyc5cDJpK8h3kPRgfMnibG57",
  "key20": "3L79ruDi4gNToZE9MiaFHhm8gucxgSuULNhKyMm1xVxjGiDSGSQUGpUEanNZCoNGGJpNGBGrxZwaZuuTxgk7SYkB",
  "key21": "4bmBBsvD8P7jsEeQNizvASHoATpyHNZD4TxKAEfHsuqKxWa3RfVvEPxtBjmZ1kZ9DYG4sxA8hPBWJNgMXS4NwUhi",
  "key22": "mUn3ovTQRJugtusnHAXSTELNdTcJPr5HySy898XDp4LmaaMEN4ZyNqUso6LKMFg8Vu4jJvy9uurYTrjTWzniKhE",
  "key23": "2XWZ4nX3jYoJRA9pgZ6Y3o4DshkimRp8MNMuZRtKm7VwXHSSVoWhrL8iPUVpaSD9hwzzrnQ4Krtxe95d1jyeoinm",
  "key24": "3ym5ebvzRrhnjN6p6511c5tVpUTVsYx1uf4HsAj7qpCzndtDW1HGPHN43ZVT8DSVBnZHMre9jd3TWzHzj8LjEnkg",
  "key25": "5FX1c6NvKL4jttuDimhD5exFb15mSLxkADrTHu6R5aHKxXsWjn9fqvZAVV75fuZ5MDxiqFxQ1nKcPhXqSXUNgWRD",
  "key26": "2MsesHUvGELraypJ6ar7Uj3nJ1qREvDR2r3Nj6HVDBNfteWvrgJkaN6MZNxgCC9u6iiUenV139vgJPUXVBNKhfZb",
  "key27": "Ff1PSYnWWaYA2jSiZMQdnF3vdfm5MHKgULzWKerhaW7CxHm4SsZW132wc75RHf2iMwxPVdqjJbe2RsU6nXgMqMZ",
  "key28": "5pTPtjCZP6Gt9ey3M2LRY35GHtd2KsHuvHnSMsmpV7Ta47pKkXLv3Vv2Y4kfF54A2raoTSHmB6wMAc5GLbwRPFNm",
  "key29": "58SDSveA3Q8XWx8FoxdAvtrXDP72CvRyC8v6BSxZiWvaCMsSUPjkc48u2UQTaJyt7pevmGWzTKiFH89DEcdEjJ6r",
  "key30": "4vchZGpHDJWyvAycVoFcNKhBkbxaj9hSecpyakGs3HShi3veUt57UM3yaQfuWVdr4u17hSCFcQCZQE2nBUU28sMJ",
  "key31": "55GutfUD6cYx9St27R9vw429i3oqn42ZGawezW8xm2Jgc887W92hwyA1AGWh2VZiJujKNUfLY8b1Wo4viPmpPGkW",
  "key32": "43coQ8j7WQYAqTJwrWbcNwTyMHagNJtqd3LHurtepRABHfTTe8WHsoy3oPVtYwZRSUKP7M5KnCyCuvgD5aym7mRn",
  "key33": "eZL9G9czCdHt8T11g8w6PzgX9eD4uoYN16mZab2ShvbKU3Ga49GHx5BkdZsq7yjX5Ts8YTb6TjdU9EMj6hF5jU7",
  "key34": "PCWeNqnPgYG63h3QDdrTRDX9gh7GqwdrCEZbE1L3cK1jaWyb4bJoucfU8yzWcHz18Ucb3HUTty2axNaY46T3wfF",
  "key35": "3MtTtdjDv2FKY6VnDuUyswQy8wamwRSxMwkvPc3uPNmQjcXMLKN1WavriCL7EGGUjF5MR4RDr54zNTqkxeZX54VC",
  "key36": "4QbFEPfQHM1PMfUMPe7eciuVDCP71zgoaNtc9Bf7HRqomTaXk2cJoSn9GNT1zED7J84YYfi9FgGymnh3v5oAakpp",
  "key37": "4kogvqEhtgm6zEdBF8V3ahXtt3ph4qJRzs8GLU2rkB5eAsaQ8ic7p6TD9yEatcS7LcCU7QPyTkmruLx6kGm8ajH2",
  "key38": "3cB6Zno2r1X2yTvEsZEs6KjCG5o6DkUYfuGFxBJixRfBQLrrb7i4DQ3y5cHGSGVmDsiGJmNGRqdAFUbGJUSApBVM",
  "key39": "4u6yNrmXP9q6WFp5oyUqx2ebXEShv27cayU1BMyZiEmL872HWnD5wz8JTAwsiMZTgSCTZDyLdoxPRDDThLn8jYkt",
  "key40": "4EZquJXDUVoG1FuRtxyMEVcwzmjrgVc6zT4ZUPZAazLEEyceTHzJtZNB3GbJcvK1vXhncSJ6twBj1ZKPek3Pc8eU",
  "key41": "4zntwaL2foEuVMGFZbBu4TaYBFiZGaRbkws3KGJHcg7EQAH4D9ZSjtSum8uBRsYwKznbYnzSHs9bRDTinCUF8qa6",
  "key42": "5Ao2yZj9S3wvoUf4QqsocLJhbrSKS3raUnuhw8vJk6rjeYsx2dJmSaERjgKEJUtF11KZZnpqMNCZ22DTPnVaQbmK",
  "key43": "3irqW4ypJBTXF7GNLszWenzyJCqoyas2wU9GJMvmy1Eq1P8hoXwnJQa4qSZ3MoLrQbbqeV89FvHRDbDbCUXKUZmU",
  "key44": "5aABrLheYCrPcobRYKMDSbVpSg9iQ37e3aYBJpmBSzvAQqWQkX1Nch4sPGKd7n2rffFEoz9PTWrcgkB2D6LJiYs7",
  "key45": "5AnwLHoPjP5iXUjJUkEAzt9e2vZ8teoU3zcLgfBXFQFc4KqP1Cgfx2pWwErXAYrQCeW6csN9FAscrCYTT7xV4MK",
  "key46": "4MawozPrBCMkL3TLPX9vnU1DEZZU2G3jmE6KeNtMisiP3uCGEVh3QQwL6vL3JVexpkwkS8xHpmz9LZsWR6DJ6zHA",
  "key47": "2516fLHSvCM3R6txXrt74Ecj18BRMWE3dXFgG6ZSPLU54PKqoTyUYrKgapMsZmcZHXeCS916wdxwxEqxNYoktiPo",
  "key48": "49SsbVCV5Ge55cGmYd7b8YQ5w1dRJS8aPrpJ7ZmWXXz5BiYEPCmDwdxRP5aAAah26GNT3ChrUYcTcBNS7u6HyqZk"
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
