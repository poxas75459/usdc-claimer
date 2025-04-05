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
    "2dc5Q7a2UgexvQKcyKRrjjJra6nNtxrjuf5VtSS88gwimrGSom36brxCJB4f8Naycn89P9nDPTNeqZDtQ5z7sQMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmRL5h83u3HtXN7qGqMLS9FunaM1TbfrLBzSkKqrLSwzwYpHHJpmA9gy21rgTpsoMcdasmKGukwckzgQ5oWxGUV",
  "key1": "5mTPQfGJGPmfqwWGSVv3sczfL87GjesZw26oqrrGF3BnBtXHSbviBNargGCSstCNd6SjyLhhu8PXbgheTibLgnyJ",
  "key2": "5PmuKnkZzAFfr9FuH6LecS5mBPo5b9FXy7y1FLN9mP6s4HizGHWUd2v6NyiZG4sTGgYBo87WTdFsJJdVdiuuwAN1",
  "key3": "53powhZ1aVK6Hs8eBcFrXtNw8jBae7ySACEMRA9ZJGoUXsvRuUb9FjoyPCVCDWoEU377HEoipgW2rwNANANfEV4",
  "key4": "58rXg5yoDtGo6TfVsmcm51KNiH8cSSw7bzk1W64WsTgUDbHuaMvma6F9buJrStNpPjj4kThW5auer5hxvUGhzYxd",
  "key5": "3LSeQkZgPoA8AjEDgAWAKbnUG5nTsy5C9Dar8xFexQ7DQTeTSBRyv79Pj2aHi8EyhmoaP5w1gTRjfsoLGnAC5MoC",
  "key6": "48SrAFNNLctTD4kXR3jjKUEytz8xZegnCY9aawW4EvfxPYypd5VFEHbjEeAZz8HFFGWDtVVzafDXCF5d45FowMue",
  "key7": "4j2U25TaSQq2DZcCDi9CkCW3q4XvM5D7GynMNH3iEgitPrBcnihBiVbXjdj1sc82v9ZW7eWhSsmzLz1R5ctSpC3q",
  "key8": "NAJkS3pT74mt3cogGim2uhfPMyXbeUHUQr9jgksPNP8RGDHWhDJEvWCCTBDugXrHi9KFSYHskrvFkCFREPqKiTB",
  "key9": "rcASbZ1cv551YyrECX69tycjtY8scq2jCAJso5wBuKny8pYkAQxDXVwHX3JuvkA5s3nBJbWkb43RgKWLxGpnvT1",
  "key10": "63XTZvHnskN2ZJPGDnyCk3MkEjHqajr3P14BFgzHPe8T4hxyy8EjgWsQzKegHY559mAju1xL4w7fyowUGCPXqmoS",
  "key11": "5rY5zGSBuLUr7Y1Jb6Td9vC5ZsCoAAc3sTJFaQ21hoNxUfbmh3QTy3qnjHztABcgpPixQVwrssFPwUY2LWUG7KuH",
  "key12": "5fhF7gsQfhbaEidAnUxMWCaPxMwCDKkP9GcJdnAV1kwh4AvpU1Cgn4nnDn3NG1QSLNdsQhrKTmRKF7QeWvv7kgka",
  "key13": "4zYzUe7noEQ2bdRo2Qc6vwYCvtDJo72MWoHdmTGk8BXtb9mMTVZbX73btDRCTkGJovuSQhkvLJ46mwhBLyK9HGzb",
  "key14": "rVviaQQV41jNgZTzX8r1Nnudq72CrUJX1vjxXUxr9gSjxB9WG8RXYHBwXsm6sZM7eE765prPC8ijb7DoaX1kq8Q",
  "key15": "vCt1q3Xc4zSziWfVo55Xhac7Vt4fGqfJ8CL9zjxAtyKUMrwBJxLmniK1frgkE2NLbRfPF81evH16hRa56EW9JsF",
  "key16": "4B6qJ2H2DpykzC5ymRnWkWUxhdjv9MxsmFL2QZiQY7sa6EB8YQmUr6zhSoeawkcgHM2se2DXNo1VvTXQU7GKUZha",
  "key17": "4F9XLzoSXyhpTaEafnjdKGcUzojMr5ZgX5h5Wu1WunEiGtFnSKaXMMhABufaMug3r9SEDcJ3XN4vahaAFoPAGmac",
  "key18": "4JPnp93xvJmdtD1zvGoHrhZ7Z3Kh1BdMQpMo2iS9DyDT3vbo2jq7CU3kQ6ZB5scCA49hC5NaYR5kZ1sBM6tfT1Tv",
  "key19": "25mmxTPrviPyyH7WoWpdgkbgiBcBZpDjbQwqUiG41WxKdHJKXfh2B9fnh7armEGkwsBFwiGhykmfahPswDmYoQf8",
  "key20": "sTjbUkMLTb6RyDUPHPjin3psn6tMcEpSwpvvB4ettjujCu7Vx5KjHzNdhUHRxvzF67A7YoiLqucyM9irkUS12si",
  "key21": "5wLmt13bWCXUUmoRR5ScHdKdatEUTS77AWwaXLe7U2pUn71FmTdLNS5JeHiL9FmPYXkVwvEj2jTgmrTgVNUd6F3a",
  "key22": "bhMAH7JMRYP3S9sbAfqRqVkK2pV49MDZketNMrqYBTbb5ZgGGa5ZcY8n8kiihDJh1XMokAR8Yts57JniBxbFwFS",
  "key23": "5qavJ88PGANFykG59o5QuHGhP1vjTfWKZAeAgWv5DpYz35G8mkV3eXqps5NDpennFaUtTZZVQMyT7h54aUYKr7vf",
  "key24": "CLqXvbRs8ijEnrRJTpqjWAE5xZY9RaDLVCehehJAb6CxuBdUnbX3TY9aYy3cModukQKPyCM8U4w35QgKBnrgPvD",
  "key25": "45Cq4c9A7KuPni1xwaFXsmUF31h4kJv7n6zuHoC86c5H4pEtMu6bK7YjwbwGT74ZKpUxv7reokoQw8yiVjxLveWd",
  "key26": "5KVjQjvsvryEyeab6fQeamdeofa6GuEjMiFE34UzcFLQGhos4KUxwDzvg6iKtkDJoWjHpP9RFrKHLaD6NSKJUckS",
  "key27": "4EYDrprtvxTPDGhzbY3fQaixQMGCEkXjFGwQhi8BqdbGm8nsanAkvD3j2ra27jZHhW1umtKTNG38gVfrTd3HWimZ",
  "key28": "5m85XLbPmsVFK4Zv9BmSLzcPQKLDmhWZyyA4x5D12aXRS7yCcfiePmUWiuV8Py99rkbK63nphEG5NhgthVdTgSzQ",
  "key29": "5zV9AB9meBhZBUXoLCcuc9tv2Z7g7KeJaT8VXjGKirN2ZTjChvGHxtbbqx5Kt92ArDQE35uTxLKZGdvbAUEgg1Z3",
  "key30": "2XNWhCjtshisq3gvFNUpQNRvSRPKBaHWmL8MASgpbETup5zzuypQDwicPCJuCBqjtaCrrpgQqjcj5eUBWC8iB4jb",
  "key31": "3Nspo3RscsojNJUFNpfMTGhgkbtSr9NKgt6JhdaDrCXYbdSrLZgXsJmDtfHL4Ee4kv9o1vZPStAMiYtDztTbxaky",
  "key32": "4oHjJKuQiQaH64p7d35TLaCcDidfSBGKNdfKiVed3Bk3HM1v2Dw1bef8sYWZ5pX7TfKQskGmtnPjqjReNdbX64VV",
  "key33": "2rLTyEXoz7124aqWC2NULcoP1eeFGUk8MX8AqJKncBwaD8JT5a9jwacFvuQqu67MR16BzwCkJSD7u7zr8t2pNg98",
  "key34": "hXWzKmLrE6Xd7LRMBjmAde9uCMPbzKRnXrzi5T1Yw2ExsuVFrmFcyHuSpua8Ttv3DnCKtN7kUDyoGviyoNmhw9n",
  "key35": "4zhXKQ9sABzL8ZdTJFgnVmN5zNvWyyDt5XwqLhUTAuKkMxGiyNpFGwA3f5YYXshajZ5SyRQJGMo6QUZe2YU6Cs7Z",
  "key36": "34U4uCNGvfQtqqxZgjfGcMR8vGKc5FftnMToGF1bLnn8yyCn2eBKFNzd9iSYi8HLrNMVgRKraT3uiA4DidnXpdRC",
  "key37": "VNmSXyH6SbjnzeTqbcEHGcf3bLMimkerpKqswWw5WzMjG1TRrEvpevYWc5ZeT72FZz9c4vVjCY6anrHNqbtVQ4J",
  "key38": "3m2XN834Mvqq5i8G2ACaUC7stZD9WWpH8iWC9dSuNggNdnLY6dEW9UajJTxdrETR8XMWMZHEDinThTWyyEDyBqbH",
  "key39": "3BQDNpauxrwFdQiBHPR7f6pwVHD7zV1gveoAPfMtF6FKLWT36exhRFpMVijPmY4RwigVSAAjKVQiYz7jU5R9WnM1",
  "key40": "r3DUAzqMkCTR88ggu9oN9hghBGXaKoApym6ArMqsUszPchb9uP3pMuKdWw12FRedWQM9VjsCcb4hbGMg4Q96PYK",
  "key41": "3518gw9Zpo1YKyufYoz5eaHgmBho4BSKK8hQSM9myUbZpKGzpPRp2mEoEkNryfaBvmJe6faWULR1sWfAh1ptcTRq",
  "key42": "5HHas6WANEof7SkFsmqY9mfKbSzF1mAV6ZjKSEb26GCDoRDf11U8iG3Ct3VQiBiLeQqQjrWcaBQBsqXCvwn9KEcK",
  "key43": "3W2ytYAaGi9cfWzVVYCZTT93nT8dSahfURRnkZeXdg62tTXA8pPWpmPZe4jr4JxFyNTQQWgGGJoFPXZHAwidvv8X",
  "key44": "3vr7ktjRoz7s1RaQyuQDJtABP4aB6jCYNAKBXqRkhvZL4TLSriW8t3tfbmzjShBhyVbvk5JZd5kqddvda74rr4zi",
  "key45": "43p1ypwb93JGyqwzjrQb9kYQejDCCTLF4Lx8Q8chxkoKiZrgh46JQDTS1QaJw48ASo8j7Yk9qCt9f8RuZgjtG7QY",
  "key46": "m3R9iXvA9U82EDb8k9VmyUUL7w27Y8rdzdW91wKM7yDXBtdAFCmuPo7TV366LoxoFxWV6mEcXq7bxdepah1Shgs"
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
