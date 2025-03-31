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
    "42JsYB9m1hPLjF855hsuNRofobitEdEUh8ByhfZxwSwzGBE6m3HeW9pnuUueTuswavdowi1Qs2y4L77Fiv1jRmNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XjmETtarULyxFjBbYwiYmYjLyWrpkJnRFU8QfLwRZKYJrdGu5oBFPgPpHt5dyB3v7Q6CCLohos1SpmHAm4AQ3b",
  "key1": "61AEZ648UiZ9X7tdCvEPUWtetLtrx37u4CHVgVtbJhp9sFZXjMwDc4No29S3pVy2QAjatCX78J99ir4Ako86gamh",
  "key2": "4RAEQ4Yfbtc3Mje6Y7kmP4FjP6mQHrdzoYxSHEsoyUs393jEd2EHomvSsSw1QjpCeXr2rQrKBg5dF7Wr38mP5n2V",
  "key3": "2Y5wpJH25G1tvRodLJ4Et1QU3yDoD7ckrBrNBnuBGQN8bgmDTsmxp1dYyj4BBd6F3ZnTAchBw3HHeu9k2HBt9B1E",
  "key4": "2fgJjDYfdRZ9RvijMZiX97fLoAT5cp8x3czMg12QnpnV3rmcs1ffwLSgMcF7JiTDPKtMeQ37SPNZ64QA23QRG6tS",
  "key5": "yB7HULFa9Qo7izqCDVY3RsZDu9jYuSNHgnxiTDNegpCJEy43vdtPy4vgAB48sdBvdJmC5Cunjwo9sKneEVrJUJ2",
  "key6": "SqLBDhacNCWDvP8fjCQ81GEk354L8XirYifBACoZE8psd7kpc2uTwu2TNoJrosZULXMpjk5vZLwra9qkSJbMRpp",
  "key7": "4J2RQ5gnPNTCkKHQn1APqYH1hUif8m9qD678FGVSv6ex1P9EyWMku72Gu9hU1XEWdTh2EoiJJRbcMRoVTSxT7aQX",
  "key8": "46phnFEozWHTSqLD8CGs8naHx5bhH7xVgY5Zffa8VqWsaFJfvYZNEMPUQ3ESuQwNT8qstsyy6mcSN21MVmUZoDDN",
  "key9": "31UXkpfKdVbECw7BiqC7FVc3iG47p53M8Xy8asQV6ZuwivBFS4js5KjvjcM8pybrMipD18oKriQAy2xuciHaKSxJ",
  "key10": "vqvx3UKvERG26Rn1PqFdzuR2oBoZMKqH5m3tizHtcyHjv2z2Cgn7vuq532sVZeezwFHtP4mqfwSg3khp5RX3PBo",
  "key11": "SuthbyMf4sCHgsomeNcavyy3U28wcYXp1YSbEVbwBNNsbEH9FspxqyeB1ycgPiRzTkTib6QXQQRfVUrRibxJywS",
  "key12": "4PqCUtig2MoGLUzWPpfd6CwMcXxfefdP2YpTbrgRAeb1tAqLvxYFvwhGAURKmzw82Sut9unszd6DyYtaTv3GCgLE",
  "key13": "76nGE8UAd1cxUwSHocVzENUSk4b6kB94jbj19Peoa12EEUrQFkV5mx2NcRJjib2M7jSC2EENpxkUpXSfsfnEHUz",
  "key14": "2juSqvD22nMKjsuLZaCM1xRnmtLQE7n3pR4jn2eLt4HdJRwV74ejwhawHL8ugGjcJ8f4kDUP8cGYM2PnaV3ZGS5C",
  "key15": "3oNQGb4wQUnN5bpQTLNYjrezcKkMnafqu3oYQVTg7dKroWRQJ7xEtqvjB2a2XX7G7LVqt9sc723f71vKi1MK2HXu",
  "key16": "3m8wccze4pw6yxgxepGeACYik7jxMwVfMiKSqyWhtckPEsVRqkmdPGHBPWTzUYRynqnXynUokPaXxZgLtQAsRHbi",
  "key17": "3qN5i1Sboud4fRJ6ByNMsPcXvjHVmTtVqYfbWMKTRTJ3uGEW7g9ipo8LX3aFe3Q6UbM35cSvZpiugyn3pwTNBsBL",
  "key18": "22dUEitgTtvEq7MS6nRyJ1EfiV1b2sYfCwh166b9x1U8C5Wv14aGSgmzMwyVLhugqCf2tSE2frURC4SZHccdPhk9",
  "key19": "63FTTsJhmHUWkrEXBpVBhbkMmZucZcjnbta6ELn3Z1f9urDr7qvSsV9yYtQB4jgvmsTFeqK6dq2ssu2c8Dj2BeL",
  "key20": "2Teo2euA1ZJk5BLALZNMxfpNF2DwBMVojN57qqDRbQoeZvWtfELWCeKwWgj76sd8NBqRWskpM8naGtdyYqN4z5k3",
  "key21": "3XbiwxA4ZH5RWaKZ2dqzvJxS7sYi2xgxFusKG2zwSKZ51GFBmrVAkmZvY3rj8zNt7AnWym2XhM4BbboKtTLWYMsz",
  "key22": "5roLCnAQeBKYXL8KQazrUCivuU9ThYjVmBkHM924inrWsfi85cYn1XuYJFJgSUB6W4Tm3mKPztdzjP2xvWDkKcjZ",
  "key23": "2LcnuZGoCw6B99AYD7TbHkBK9eZNorBKzjB7fQzB44LGuArBbBhdqnRcs9gK9tm1Q5Cms6NsK8PaZJMWxacJqwHQ",
  "key24": "2NTVt6zCyCjTj32gqQBzhktGnWSnowMdcfZMQVMiU6UjtDBPsZYw3Xw2tTLmRfVXBVGXj9dFfMNHMJEE3Pg8tCBh",
  "key25": "2tiQuo2k8C1ieoMxGR1ZnPKzyNTLUzqEzREgqpeLWKQZpJX5Zcf881KRmsDZjckS4WGYL5zgntwgyghQ8V1iERZE",
  "key26": "5pPUhmEnkAeVQji44DNf62u5C2hcv9FFA39qxsWZaF9auekUDmYDeXsWc9JgBF2hh75jsYpwbsqhrQi6844VZSTe",
  "key27": "5YwjT3WrhFQmhWurTVdAm2sqTGmLHaiwQr8dKegAzk5B1Ja95Ut9Jk2pzXbqbrWuKEFyy5yisjZ1Uw8fjoD8XaV2",
  "key28": "21kenFAgMjk5Zj1zNUqUpLa2Uiz2ub2YN9KgBe9ptdAyv6NMNfJJpDwm4Lud74hPzwhodTJLzZmmWLYMccanDLx3",
  "key29": "GxEAtduaY4g4BfCf1W81c4ptn2g2ftSkv8umFtuuVT7ndUEtMiQqgb3kW5nk44RA1r9n45TVa3wH9induTd9xuX",
  "key30": "4mYr9qmv3ma5FuXakk7iqtaFJWtjEsR5BUdTWoazCsQZxSqHDBnyhAdxgZCfr7ij2dF7LM63jH1vEjqfeHC9RjUg",
  "key31": "3an3AEYWLDztrqJGpA1E5noQdWdwNAdUeecAZe5rSfiwMugQhS37yw6fyeWMbqi6LfoAXSLJiNzpxxuM8YWFhL5o",
  "key32": "7eqe7we1pMPysWew5DFLnSMzWeLFP88EDQehHyGg7YBALLxjSUVmTUoCdoYPuCWNSdKfgZDym38o1ZKfLYBehoK",
  "key33": "4VRLGn4cF89KU3tQC184pcg3LuUExE9fwQipdwTYmqy33s2B8QXjVDvVNm82VSZMpeZQx4854p7WSydqDgqiA5Xs",
  "key34": "2mZiCZmzXtuhQY3apBguxLRfPFgNiAVABjAPrtoxetsq3iB8d9RXouSfMBP1x5DMfimEBqTGhsCjgSEk8NtDXzXJ",
  "key35": "4C7Ng1RrrTMGdDAkHPCJ2GHJwq2Qm8SLKL9M68X5qPzV4sLuVZ4N5inFdoUUA6ReoFDbyebe43dYNtKBoourN1oW",
  "key36": "5JTqfPCGpWeL4i9XH1wzJUkXdWxiw1Bbohsn4XozsdmBqRm74UXiXUm4qxGKry97QQFQ8ZsVJ3kXKqK2XQSqMfb1"
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
