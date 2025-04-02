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
    "2JgJfGBSpiDq7WxbsZEdRtdLxhpM12XDnSLirkQrbdpx6aKoEznZayPw2hqo2cSny8UZJASJw6gsKN21DaLtBWYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6adMSNqL8rCaUfuGSAmsXSXd7xoaNvhgkLYvBXrHzBZY8DvPDnphpSu3BreythPfHWynLFddkxG2SJFPMrHZRa",
  "key1": "5Dd4BLmKnXiFCh77a5tDPuviQpTPcRQS6C3oMxjUdmUYiikHzRo92wDk7PjTZS9DtHZputRKRPNKKfyEDSuLFp5s",
  "key2": "5x5xmvS4972TTZ62iRWWVAktTnfignDtD31NzVZGKxVYFLot8NEJRwEULbMHWpDTLs93Fb5myEBEo5KrAhqQZ3gX",
  "key3": "3fKCxaSoD5wFSXaHwV9t8J6URzx7wxu6jZTyZzd5as8RG34YhmejRWegMbWxdJPbJiCcq5AyBHAb3NG5WodrdVFS",
  "key4": "mznThcnJdTgZJdSeYn5BvAjDQYG7mwYLBq52GeALUszMEYAsiniVduDYkMu6X9fYEGPpT4GPxCphhLmTcptqG8A",
  "key5": "4gtoF8nqcCG9xi4ZdzAYsLoTTQVrd96kspvqGKTnWwhH673ULvc3VH1XUTsA2QqxtZr5Ad6FowWahatcw64xPR5L",
  "key6": "xn7CapkxNAgYtjUh3iLPH6MStR2qe35xcGb7bN2fsqvDQ4q8F7LRWTqipnqcfepHjymv9cVr4vAYmx3aazmqq1S",
  "key7": "4WePXgkmSM1zD2PbjMVm5mAo3mLJM1jiTShmw6iHvHPrjFNWtMgyPMzcrz4kbSxUqA9pJwJubaVxEAKpq6HHdK1g",
  "key8": "2aEjpCXv4jsuPiD2oMDv8zW5N89FPLu1syqmVULGkWVx9MxH2xi85N1E1BYJQW99LmpuEF2SDGRmPT8bnxiUCVBE",
  "key9": "CpZotGjMZJthkwM3LE4W39Jnfvio2i8ZRXTL9Zr4uHNFS4UyTbZN5wukW2SxHcqYbapAXeNiRExyG88Q1qrVSsr",
  "key10": "3fwGwxkvdWbzyv3a7xM13Z9nZG5Bt9QNkgpGnf9pcHeJ17ys1ryHvsorgR3n8qBAfg6dCVKnwKwWbBpz8Rw2A1fi",
  "key11": "27nx6BWTu3r6SejoVX7XJejZusqRJpSr2y7X5e7crncdtd9iEiixYGUwRtDzmrcLLXWxdggW1Uba1kyBmNFkNDvN",
  "key12": "3WR99XcTiHxBUnFf99So2tySPrfo6PZvVxhcA1F4b2CdAAK2AfnTF3uJBYYaS6nHcwcKKc9AiCk76B9mcP6qHsud",
  "key13": "576rY7dfBERrXvvSfZFZqPiHvAfKVs8Uy9kwbnfpTHvWsQJxpSCnXYHdXfDPgegMk1GwTmNCkrfaZAPqTMANV74f",
  "key14": "46Qb2GTG8RuReEdqmwwD7DGn2wWbFa8NgwSStWvWE4mWPQ82Y54X7Pj5YEamZKmEkUchZTp8nYjcrCQ1yNfNjKJt",
  "key15": "2Lp3tq6DGneJeR9BgRALGPQYJR858MoTASaCAq3meudeM6dMfqCZnc2Gczybhr52pRTQyMBsa3hD2QWibTmDB5bj",
  "key16": "5yLgrbq5fXhDu3VxWLAdkJdMDtum4siE6DFxY514hw5uVZNhgFoWpT6qgj8NEkhyhXvUE1wLiweeQK273LJTiA1e",
  "key17": "2u1gjYVqKiVsZRwbiG38Rg3Rqfdy6vayiSS6kmANgVP13TgcePxkywLqktkj7aTyZAzmmZFgKpQGAJxiSv15beR1",
  "key18": "2kYZeEycQfF873EpZHaYDouUHPnSSSRtdQA4bLM7yXXZ3xHMJ2Pjag2oUrVfo2pWdHHU4pSau6gaG4PHjY7qFeuu",
  "key19": "2VfkHvykUP2fDz6DPHJnH12WxT1JAXewC6efgUvkYXKM7nT8Q5fXkV71Nimy3FewsQ8RXviH99bL1K55mmMm47Tn",
  "key20": "4CBEACH8fWQCwgVUQgLaiPuWsMeY4kudhzz4ZAN6tzWAyxoCU4Vc7XcC2wxBs2HksGTGg2nzJQtR7uEvUqEZp2RH",
  "key21": "4kPNrRFZJmpRbM6vtjtcShWL56rjoSc7zNZj2J6YhYJXinX85F91fvLsDf1nfD9gaUoWK5oXsBKqvMWJT46bLr9f",
  "key22": "A8k9DCwJuCX15Sy6h7xbF9kxeE4cUKoBLPcDWtSriT7HGBh7axTZp5FJTVJi2KC8bfexkEFcQfvCgZcRTrQH2aB",
  "key23": "6X5ZZg79EZXixszccfrMYaPDSFbHjqoGzZbqTrWHqgRSw9gYhZqmA1hENF2LSmqvywUbSehvBnjymHrv5rcAgPP",
  "key24": "3er64MtbxUKYm1irXjS2A1MbkPQc3te2RR5e1K6Ve1NLNS38vN7Bb2ibDpVVAXXdu4dXtNBUpvPCbhs6YZ1zfWgR",
  "key25": "4RXsUinr35MXLChRE3aJxsb7ng5xf4jnaCQCab8TgPA2V75DEuBGwp7R3PyqFLa7bpuRhCNxQ4W7qMfaz8qZ5mtd",
  "key26": "2pSXJBEse463WQMCU9g97RkgLem26rNCwL4wr5WU9UtG4Q5MKB2YjACfNQz4RanedtkkdwvfnYqpmpvMgaVXDYZY",
  "key27": "24xgPY7GZpm47qR4zAYJwKwjVTnSiwhpyae727qGK6eaD3HgHbabKeTcz8xcPRMtJC1411KtXASuTsntsD4SRoiD",
  "key28": "653Ah4uhQJmAhz71XdsxePhyo5XQSNrzfbuF7B6Hn5tVCfzkprPaMKQM67LjnxTZEXNBfVyjKgGYkRQ5VvynBoa5",
  "key29": "4WQ5tPSvxuWnVHvHUrJXuecxb1ttNkaUQ3tg3VBpgFHUQWqo6bsNAYdErePau955CJTR3KtVdHbNozQdDGNHAiHr",
  "key30": "3D5L9Q8hUyisUfEm3xG28PTPsiaG4H2EzRsKW1oHVUNMLCD3kogfjcyb5vs6pn91ub92bzj8Bk2p1EazapMXU68K",
  "key31": "52tUG72xLYz6CEGrthrjMGuikZqm2ttxC7RdmwAWHFdgbESqgPHmBv49v4bWpPLzJuA4MjXc68M4B5juagZiMjjW",
  "key32": "3w5BwyZSecwvkhbPk7YGtvrtotfp85EwpwsQ4JoQfqDUsyd1ZRgv2UQDGq6zdsXSGiqfE4YvgEgBbbwjNzJJ4cgB",
  "key33": "55t8D8dAb7XujFNpAyNegvEEYAbtTZ7RfVHhpV8HTT3Eda1hFLrv3nvLSitK9LZm8NJebYC8G72Y9fWdLR5cAtLE",
  "key34": "462kTutHw58AnSnKbCtbkwsResbc975ecBZEXYmZsy3R4u3DFzNRRvpuTTbKQ7YYhTNx8Ej1nKkPgQQTw8DMoLiR"
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
