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
    "3JQYntYPhvRzGHbpicgHSYFCNmiz7yaUzaDSoGjvvhRJ1DUJjSsUt1SNLy5mTuowo1hdda4uvuhYbPp3vr4cs9ix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xkr6GeFhdx16NKwEBfiaAxNS9V8tLUimk6juYBX1D61JuSnBJeb9KncNPabv21nW6K8P8qSiMaGSq8VP1LsGKW",
  "key1": "5FQW8cyNYWw7w9jM42BCdZmp3hPEVUWAKnPbyApFBHYj4ntJPdccYnnWvTWFd4eSLqV1vvs8f5ebTqpWNSH3auMX",
  "key2": "3uDBttTeqNqnwn7KZ4dpbpaWkvgv1X35MdTTobDWdVFLMvmoMXupdddL92YJKb3Ygaxqw3bpfj4GrTRndoTDkdwm",
  "key3": "5pj7DVzNJfXdKN4ubx2w8r46TgUgoFigPFwg82QekXQbJrrU1UF2U1KPLXJkPnjM1Ty4DRzWtSYfNyxnUW6ywJ7u",
  "key4": "5W2RXU8xHYo4ae5zEuqpPcwEVELWxH5GSPDKmidqnHX1E22ZGgPv4B4kPUzWZuD68KmfvaearXWihEYeAxuz4ZJd",
  "key5": "5jScctoadfAwsVHgiK48DCf4pKY23peVnJ4P1gxsKnK4ez3A6WbeBgiWuDrGrHD3Hesdn5gyj69E2s8UKLGyAGX9",
  "key6": "65BsNRYu18njSGu7AYZMohbfZrfAWmhh39ihGj8HZzw8VQZjQzqm4qCNES51PqJMyYCyKu1oZtWJYN63hQzhtPKn",
  "key7": "2kroSFePpkL3NXMhrbuoFxRkRpjkoEshNmT1Esiruqrx3cjZuEprVttgDJHpMfVwCDFVurTGwcQLwcSpjvoz5DQo",
  "key8": "3LLyNqMqoj9zDt89LFHezeKRQY7Lo3ttY9wVq7mymJYuRKUrKDF6h1ES4YK2Bmjdk7YXyFp7FdjvDqQRfdp8fdFp",
  "key9": "2jptY9EiEheuq9vQocVaKK9GMSJC81bqZET84b7CEAeRnHCT9dXkHWycM1Vwbm1zfhUTZfJ92V8YoS9TUhirdXE7",
  "key10": "2DWhxyLEezf33cW6qC9zLiQTH2s7dFaPYJTrHVXBZDG4p2jwBSD11LszC9o9QADX1jQBz7rLfNmrdXuF7AG96uuL",
  "key11": "ppYMHJg3FH3MUCirWhpAj3BsGvTRhyPsMeyqBVhihaXGyr49cmsLGVUrX7oLqJPNcEKCGRPi1andJdVhXqFwxSr",
  "key12": "2dYu7cht3MYG1RUsY1V4i8b62mWwP4YndCTCRPZFbAKcmr1cFmdV7Z3byvMT88CqhVGJSJS38Yn9b39UVM8qMDKZ",
  "key13": "5C9S6fXRG9VXEuKX7RubFCAFZCcrYL3UZCUnSNhEJyyRMj1wPo6DDzh2JRMBkKC4QDhCdqn7mph4agBeu36dzCW2",
  "key14": "wUAqXF9nDanFLERsydeC2rXGXGWrnbQSBb7dDbWdzSFyA55mBRhNFs6iKnputjJKiXZkpsyg4KcpNZ3FwU2UxCm",
  "key15": "4QMM7QQ2fQrwHaC15p9NFukX4LMaXzPTgmcHZsDJuLKSKAZyyWuK5rSEtdYTW1KdqkSqByTXpZmZfgdyaPW3pfai",
  "key16": "4CdLZZDzjw4FbuMNjFuNKktFszxF2co54FcD7Vey1xqTp5qaNVSSw4UmLqUT7xF5NH2JTEuMDWTbFs9bwGF7ZdAp",
  "key17": "5toc4YC4Kxt2UUyGQZbXG2xqRFUJDaopQBhbLiVLX9VqDi2tKMR9FFg1aW8nE8xyPcvWWi4LF8xG4iPM9HLsJcPf",
  "key18": "3mGqp7p1jC5vBNwNvDXeDBJAfm1TpTkxhhpS1GVRqYPEkdQKt7WEDBq8qCVBpNztcvjDKx2B1kAzyVavuDneBCEp",
  "key19": "2vxRv1WfxTXAg4X2YwnxBWBwv1UdYZzLRvu2rCQ62jWraKjtAK5GdfHTAqT4C95SCxnxREKPCbZH4cQAF1MUgrHD",
  "key20": "qJZAU3ErhpNbAaqA4345pHZm1uV35cj1L3rtYxQDGNvayqr5FQnabuU5JyvoKtrXXP3anA1dyivSwmkLed3eX5G",
  "key21": "5vogpsVV7GSM37btLxxc63vLw5xS5kLFZ4y827fK8QXUmFitoaSt6Fh7tQEP3SCBpNEXVr3rQQ2qiVAFRDzfrQ8o",
  "key22": "1Cu39X6WsypmHU3LWqUQxRt3EQGZZpmHSkcCtVtfWUPSTb3r5t2fATyoNCwRoWmdfhymjokrCx6Lppe3z4yW5Pw",
  "key23": "3Bi5CsuUnKBg5Rbq3DBHy5UcjuL5TDbM4YCtHoXdyqfVjtQECiyk8VeYFxRTGr83SCTcSmWJh3eDgvoDvtggGmsg",
  "key24": "2Nqx4bWZFXyVfeAQ8FpYCMFdH9WA2u9iHptAPtos7GfaJNnNxB6EBygw8Stsq9gJXLpiKJWpoPPEcmCX8qo5dVtQ",
  "key25": "RL17bBNk9azJtF9qFP5VwrcR5f6fjAUnnXNsvrfPs3QLCyMg4qSiGoGzuEdBfTEjr4Pz4crtuUv1Cj7fevbxhAe",
  "key26": "2pHEB58AKBHKqea3ENJoHDUeCr32kEuL5jg12Lu5DsLYL7pzR3iGWn6fu6kt4GZkjQw3Cpseo1iDAxD7iejQPVwT",
  "key27": "3y7nRRukRKXbYPezfC9vv6GQDwvx4qQk9KDijAuiur6ubuGAzCzKBfMH6ozKvJPNqKSG6Ev7ZwXEXnJgbHbwUSYT",
  "key28": "dxEFT7bfd1KQ7hpmkNE9fm6Yq2LQTQvXnay4eaaAzQp6kqgJmGeuwbTpDjDFRyn8L77FRYAn6bgaPaXXmTAN1wb",
  "key29": "SQZaUShZKBVX3ndasbg7pZkjKsNkGcTHxfXULzPY5r2RFjETjJhNbevJ1URmhCV6y67vyAQ15Lp7Hc25P9zPFkV",
  "key30": "49dwDD8XbJqmhMqtuKNJtt79pqyRjrCzNHh8huT26etxHWP4dGuSNeSV5piaB3y54DZC7Q5wESopab6cQXW1UHX6",
  "key31": "46n39HPMw25Ms3XwSXvXmWK2ZP7iafov5miich6uwrGfmH6FzLShSh1Buyg2UeWuDmyKDjW7o5oTBnKBSyB5QDW1",
  "key32": "5ofpoEfhG3vyuuRcxr5PNDxNKmJyoJh4LTE5jxok6zx1tuEhAdxGZZYiJ4FwhUsvXu2BbsrLoZq2iKhTfyAFMXoD",
  "key33": "2894RegBf4JHgmuNSmEKfW1fVYPUJaceT2NiEsXui9UpoB8pmFpcVUCuFKJLjYEZFax2ktBKbTLpUsMcKuKJasAv",
  "key34": "3hZNzu6wFn2fZsJr1NiQ1XUqHiPCAKEYZ4rjLm6jdngvdRsRz5CBPLM35JJgbFhRZNSL1Hdt61pv4i2G2gKwQnkY",
  "key35": "3fF7x14tjKX3UMfuSPS4U38kCrLCewidCnyvidtTMVY4tv9EWdY5jLuoggGXYWej8bZ2UjaUZ2RLXhV4iSLhCpCT",
  "key36": "2DSCvCQfhMwsiZhBeMaXa9t1YeHBS8wZTJ87rK4S1m4hHiW1HYyjTido8SvLJ9zmZnrrs2KXQBVdRPLb4ENPefdx",
  "key37": "3XNe7McFatoF8Qz961insR6XqBy3ddLhwQgLzCqqcMJQoavbwiHo7bz9yqKdcEM3euA5drQJJmANw4TPitGwniEg",
  "key38": "ECcgMx2AuXK5fLLF7s88Gwc5gmQpXtQPLNiYWSBfVdZw1u3zhc4HLHxbUS5XUWJiUCTPy6MGeCzWEJze3k924gv",
  "key39": "129jvpd9YbKiGeSVMmHopxjLZWBtxuwrLVU11CURoiTm6qfLHUyYuL68ZGarNT5BxVrNgvc8gx4QBQrdzrbaJQ38",
  "key40": "2bBspYJMPXa93F6tBRrwrcq23D81wGmH4bTGuxFVmiKanjJgnH2JU49x6tbT7kjTkzDrpZZHAVQZcApUHhSgR6GK",
  "key41": "33wPvVieH1YQYyDJqVvMJgfw7AYUDqwpcgnC88mbhg7xsjqkfCP6RHhGA3pAFUV373oA4VZZypB9ejtaGC6sWkE3",
  "key42": "5NoWmSBZqUMpaViwdBCo2x8pDiYfftpTCzww9P8tDYCUnQe467XeGfh8hRV7C6BqpUAGnMoEiSu1dwZkam2QNgsW",
  "key43": "2sy9w2uX85t62RwNUdSpChwXjdyP8DaMiY4V7pkt4k11BqTFcapL3iD7VjkzdYGUy41tyPT2zPMshwByzayP9FwY"
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
