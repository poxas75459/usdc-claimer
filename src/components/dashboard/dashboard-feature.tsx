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
    "oves7akiMVpvJ4Zaz5ESipNDzQKDeJVArekJaqeVJvZaRK3LTBQnzyRdiH69T5BEu62HrjoFqQiaPk9m9Wsztxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TsBfLUwUVbMvxGL9J4vhDAmjmbxuFSCFFgfE8owvh2hWoDEUD2WWLfiRHtPrzrowteMxK4hYGqjBaBFy8Dn6JMQ",
  "key1": "jhoghSAo3E1RKoya9sJp69senYVhyvkKzppvuQCjSDFJaLSCz5a2uyL7MDRtG8vAJErVQK8Ua79SRAwrZ7Vyvj7",
  "key2": "5PmuUMFdMW2WrJA9aGuh7oz9NeqAhVz9FsAyfztJEhMhsHRZfRnG459XdtTKNF9oBKi2PruvWSc4Tggjpr97CAQu",
  "key3": "58WmGSTyd5B9tfm9Mh4mkJBNK98TbcuBVmQMu6Q6gg9t287cphFFFoPqed3CL3JUk78Wni2ZVJMnQKVv16EWoFZ3",
  "key4": "2dBHnUgSLYwFBH5JXWvZoymUQAknACZAeEtXp8ESXDe2DhqsqPf2b3q2u3MgdAGhrDh9LaR9jiMRtgGZBbHLpjmr",
  "key5": "3c7W6rB3Uy6eb24GZ28Eg4CRQ1SjSSUcfcbercmcKAEwYLWv9ZU4uP84srcaiTqwNUWf2xjkEosvBxfSJFr1RDHT",
  "key6": "4ZymUkjrbmC4UufF2rSjFZWq13U4La8Xm32DW4YEBUbZAANCFn6nf36gkP3xAiLfx6BZCyxCh6SMcsnLWb24fQaL",
  "key7": "619PfgLcRi6KKGZADjqfko3eDinsoXWW9qRMhkrYQM52YR3cjSSVEprhVLP8HSc1LAUwSHAC2zNFEVcsDpsXYCaj",
  "key8": "2dgeaefS47xHFyNasc3rq5r3haXHoG7pJbgviPYgNmuiR3hvrkTaRKr71QumBoU3cnwifBYQppEgUimt9btKFKay",
  "key9": "Vfb7h9P2i1d6PgQDtUj6aZoQPr7So6hmRGJjZjAkN2bfhetYUUg5vNstWyhnQnofXh538WBww1rSCQZxdwDUW4m",
  "key10": "5Jam9eYAsCC4LkbXVQvu58AwZQmo1x2JEpKhma9N5yX4m3rxwQ6FtGjGpXPDgwY11BEujX7LofixkbgQ2m4BAhxQ",
  "key11": "3X87eLkv7CC52XmPsRsibZHQybLQZYzoSKgeYvXkLRW8cnpedrayuxegw34WQM3FvvMwTaDv4Ai6VriPze4f4ycH",
  "key12": "3ZerVT9C6cbJc658UsTaEKxz2WvggxbWWBpMTfTphkdaghu2gejz8c23TpsXT1wvuztjfo3ugCu9hq4kXtQ2rXu4",
  "key13": "3Wtcv2QtnEmxxwA616LpNbwxTjhYcXpQsJaGDjkaW9X8hyv3wtkDVDdt12ZG1ePrAzR81LbkkbRu5LKjHYQrWbd4",
  "key14": "PbL5nno4WR2526A9u4AoD6YWcSYLNYxsnMgeJf6gKveCrTMxm9F9x2NRJN3R4u31FKc4RButp8N6aQ2K5gUdtww",
  "key15": "593ebCQxkeeY2UwoexckvdaTcVGMr6jxq9CZvQq2fjfMoZQ1ogh2QtpiqqnFxEWJVqvuERFfpnyZa6TUhdyVxxvR",
  "key16": "oJWsXrVK1VcUWt6kCuGPkp13rEPXnai5TQJ9A5o489VYXNfRvewHXkpp2YnBjDn6rzWJVq8zTZqBK9ZJuyeQSZY",
  "key17": "3fjn8Uo4f45jbQqpfxjYLuL9fh8E9W6CoFkhKkrvdzRG8jdsmVAVh7Ww1GR9ZNz34gNsVcd9vgUhnZGVoEXHbCJW",
  "key18": "58uiniztkxPBw637XT4NbQQRCg3vbJUQPiLb9FascLVfi3RDKLQx2pBHW1MVVo6uFBRVWDknE66LGW2MjM3T6Hm1",
  "key19": "4ubbR9FYUGLMQzmM8Fi1JCuhgtpAp5YwPXzVcxTtiRaAbv8Asz1Y5uWCdJBWYfxNdZYMVoFczQ7NZyYbJwbSb1EB",
  "key20": "4bHVPpBYPS8YHzsTenEy51wdtuhNhK1ccAFPY5fE2EqjXbaKpTuQKLC6T2LTiYM9qSoy7CepAw6KL2vCPijsdq84",
  "key21": "4KHsb6phQuhm7C1WGVvgX1JBZgfEP9cuKTUu5ACXrSQe19JAEw5w4D7kzMTBbcmc2BULGCAPRiNBDB2vod5PLMq8",
  "key22": "4v6RP8ZmwZVA7VJQgdSBJ49Aaen1FST3M9WeF9KaJEAHxgQpKGSuejxHoDJj1ZqzzYvuqX6uXrD1oahJ8ABA9BM",
  "key23": "4wJVo4riQiYrwkxLgjdirz9H6kNF9iTshmbuzrd12Ei9DCkUrenorKDGsC6qL1yiwtXfWmHYvsraiWGwFydTDLrp",
  "key24": "46PrRbPaLY2fEVkcr8DRKRCGH7q69jhZDfMohUtiBs1da9Fv5z9k64ujGur1h6HmvoFdxBUpYv5fjErVwmSfkjGz",
  "key25": "4b2xec432s1qfJWYJpvgR8koDhcWFEPGY1zqFGNkXWSgxnYtpHLM6urQSPuHGZCmjkzUcBELuUdWVVYf8LGtrkwc",
  "key26": "661WY9r7q9rEQi4WKFxotPjm9jMB2G9NjYoqQCofyJZ5Wq1EBieCujfPjemybwHpKUesH5T4fKYAizxKRVC6tK5q",
  "key27": "2xKyWyH4fFUx86yjLXt1t4ntnz1eX8FogmE86VGQQYCJYsSztBt5F9paxdJsb6SAj74i76yyNeinQRjnEerLzbDX",
  "key28": "66edwNPwaAZ98gRGcniCnix8pdTJrvAapuRnYPhDH1BT7Rg922ALnxyjmoDmSGftfYkojgxfgfvdnSFk5imkA8Df",
  "key29": "4VVgHx21HZMRSPyx29qLzfqz2jrGHinx3dU8ixSsHNcGS12hjNdkRjVowHXNJEVJGcnHRCkrBfnJzCUj1xJxiXPF",
  "key30": "vBTMKLUk7fWWVzyGgWERtxCCvw3XLDJAj6VDewjCqzz6R79WbX6aHwemLVnC9HjK2SrrpJ6GJUYEFsR2q9rb4RM",
  "key31": "feYvMEijenMZMQnHPnpXjcdSmgL86M4Hb8ANa72Q4rW7KgX1GtRDaxxLAniCrw2RKKdTGGi9N6Q6nYD6yiA2iBn",
  "key32": "3GQAeWJHHi9CCmhLwLCFpuruW1jfQMRmsjLwMkZ3FWDK4UDBeZ2NFRqNN3FiShLKRPQ4ZgpbPrgWssdijFvuWaJq",
  "key33": "3U3NpZauJMqS2u3K8nqdSQVuU8qQMCwmxkfSnFZyiuNGNV49tXJLgL1mBhuBxJ5oQ6n2SpBF84xwytJiNyVH6bMY",
  "key34": "2NmrPqJmaKN2PXCaTTaxmNDTEoFQgQieDXrLrfWrDeeAyRtVKC49ct1bhuUTXmscHvq8zWYmc5pzpvkceC7hYLDU",
  "key35": "3JsQCGC5QVdNz8o9aQjD8tiwdsDF37SxohYMYURShsEeT1tYs9bpG1kfXPUoEDCrd6NXQaUZdNdBnVnWqdAmfdxA",
  "key36": "4hXFpxDwZx6WXiSUX61LcAiVu5aqGrF8MuQa44PL8g7wrrAp38VEa4n9kfDqPjA2RGdc2ciKPLYNk6kssDiZvZ2w",
  "key37": "3zNTauYNBd4v9j6GbUd4EQYRbYd7eVNWstZyRCSZ8Ff9d1UVVMnY9urE2VsxwnTgxwkd4aMoYWGi3LL2dBoBUhgs",
  "key38": "38tT9FfsXyZ6yUVD1gzFmgNGqHHdWnmQJF8bZRcGZvB2y8R3MF4qLze8Vb8SHjySg9XrzVsW2xix8YBDXRTs7y12",
  "key39": "2ZTdewBvosUQfUzed4JFzBxRsckjQS22H57dxCmnMMSEXujYp6WvU5DLqJoTinZnQddhKs7bfyf52En6SVp19MFL",
  "key40": "3dAhFEHupVpDSGVgtyqXdemnPCkCFmQoMZRRqXoT2oH22p5cRTCqChW9w6TTMXafn7ReKsetQgALETjZuWvL85fb",
  "key41": "d8hPuUCpu27vHEFoDnQXoWLvzksuxTEHTGd9jSWrsDAUYXjS5Qxue3EDGEodMnw5MFddwoU5ksSmzMk6wUHKVh8",
  "key42": "vxdj2RtdzSVd9C2Y2KiX2oeu9y4ki2DKAU8ijzGzAdxW8L6rQNrjZdHtrBMbhNJjMQKKmpgStzGmJKokTLiNXUi",
  "key43": "46VEycYUNyg8jkS1c6TgUHu37W76kbEhf1CvS3MaXPDTkvTeCB9p1jurupTPfWM93obUhHcXE89qx2Rcivb76QWW",
  "key44": "4ktfPAQq3zD4RETCxV3a9ZPRYBctaAKYKX8Eu8ekcfB3JtiURoH3MUtoGohjJswW9VsuUDzmYtVEy8dtwG18sbMs",
  "key45": "41dAnEjKnsTRpynUmvjVx3XfVWUt4ZX5mDA5GMLTBFEW6LiW7LgXiUtApq6nyntQNhUxNRn7h5SqjN6FNJ2ovcPF",
  "key46": "2fNJb7LMhrwT7ZGbeZMyrQUdc64Kf4VQPTh6TB2QqsB5WCYHVQUjXfb1gQCpui71Pd1z28RuLUewDEJfHG2kY8EN",
  "key47": "4LgT6YhRr4viZSQ712MZZgLCdqbCP9aov9ddqvaefgjKzeZVJm3nV4mbobgNujKdabKhh8D95J9bnr6dc7fApUiK"
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
