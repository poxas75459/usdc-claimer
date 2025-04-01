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
    "4EKtCxQjS3HLJWA2BtCejKAHXzzcMqdBHbDsUPLjdMEzet7mThCfTUSqAJXukSprGEJkTzot8kvdb5aTuguux5Lo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZ4f6woKCQ2WYJLc9Q2q3CcJ1EKszvZCyfJ3zizmvCjQg28622xmeZ5KGZW355XU5W8Eviu8fiTeeP8zkizMv7D",
  "key1": "d1b9ayufy12gZoVT7dSBTmYvFp43AQtRAHvh9DpbLKnE3x2R7gkGwJMK39K8sXANkDRKFr3Vq5mGthtGTdhLU19",
  "key2": "3rVqHpCbbH27CFxGxtfo1mHGDuLeEhE5RzxCwvWX9JYFkmnMsvVRQHj8D4C346jUSQoLYQnBc3YZAC7tHax5dnbz",
  "key3": "2GnX5CQvn3hkcFR8wSBsvGWDEgbNXvNVNP1reCVGKSmQLdoq2YPj7GUKzzUh5onjLLj7JJct4zgu1pip8R4Wq1qe",
  "key4": "4CP6kdjGRZSKWuvpdwFAqoPyUVhPxWyve1wFCW3NJ9e3Fjb1RHHqJLWBufXbpDKeX6d6cdN6rXVTB52NswaxKcuc",
  "key5": "24jKV49M4z6Mh2KM9KfBGXKmwaaYXsCyUPK26UUrS5roMwVJG9LxGkCfKup2LMDcXYgTUwHaoTTuMNuBmsQjezDn",
  "key6": "3sSQ1kgVBYyFUFEmhxNSXYJMsgx1e51f2UGT6z6U2kWsCGLY8yev2TWqEwaaqyEDAKZY2LN7ysLQmWfPcGWoSjP4",
  "key7": "4YYaUtmhuWRMbGnBjyqsPvZVb6hL4ao5vZybk3ouiCrxUo4xQTyEqt9mpjsSPiVCpgBPhoSNPrToM1QZHE1GgC8",
  "key8": "4hjgggLNJsHtwp8KznsrvyjNvXm5vK8uSN4zNRUEFj4szjFoJRz1u55Abx98xRWRbrUkQ5nctig3rZHh4ENpFQd4",
  "key9": "1wShJNrBJgTrLLcAfh5xnk4HgEndXhJvtDRsJ3E3Zjfg5AdsbWqdDzegGjadTBUdz2KesfR5CeVPd31VMSaFkLC",
  "key10": "4Xkxz4k4BSRkDdzN1Az9jzQPxFAQdR4zvXZ53NrbP3EbAEEkfqR2UzrQPMgYfGeCMBxqhU4Wc5q36eYBpFDUcZyT",
  "key11": "2KnAzRaVviR2jvFd8Uveh4NHLwtKFJed3WjR2BnEBQ81X6r8edGQvnwLK2ByTiTHRw8VE1F5rcjfDXHzXNuMdMyc",
  "key12": "3B2gw7XKHKhHcsngLnTxCN1esHndfVReo5PaHtVCWiBd1QVJ3hDGKAA7VYxVvLvFFdqJB3RF7PfRaAjaofYq5w9r",
  "key13": "3AHbi1PUCAmz4yDzTaKp2PrxYAPwQbtXqxK3ZdhayGpBkGevb275uXujVb9ds7hoKkNPKU7c9mpzzVtd8wbxVwD6",
  "key14": "ANx1M7tiaNK397nyXV1JN9a6fpyMZM2YpKNnceoqvHktpAYhAiKBhmQPTagWvPhWC8AV19P1HXJ1tGcNsTygeR6",
  "key15": "4HPhrBTQcn51fabmSsa2RuUbVJiVbUod2mki3PhPKbjTWVqhVYgaNeEX6RXgYoUXWTT6LrKZmgvPfcVNtVZBmwtG",
  "key16": "HQKB6dfQqfnTx9LNH2SsoSegCN4UvirPZYH1XFR5Ug6F2hZu9yGbKX1AEUtTGhGhmF6yodtgtgkEFymmhK8cS7b",
  "key17": "4RdGsvp9SQXXVABEUCMhGWqXhex9MtsqBhpRTSu1pH8kfSmzbMeEBdUDdkvTKnn4A3T7zVCAavT924ciUQV3kXMe",
  "key18": "2AAoGXsUzBZ1WoLXuyFMsSe844FFU8ichYnLMyod6fBVwD456GTjhTYQqzUiBWswRnjwunuYf1fCGesJBcwdDsPf",
  "key19": "YKoicTHbZ6yZy2wEEtc8Us95UU1FeSv6CuXeumQphYKsPuoSfYtX6KnWASBvk6ydqHx9ZN52bA8FC8cr4kUCUuu",
  "key20": "4QWBdgavPqX33eqmwRrRmJJEwQ8uxy3PJ8qTCYRXC2t5HhDuGjReMgDYcAdtgKSwMvE4qsgzRyHMjGh2yD6QVxgL",
  "key21": "5EPH3Bp4j6bFThrV3faepaA5j7nyZz9XSStffBYxBi1MVToYoXYCWDckMjxy2whqHDhn7SQHbDoPJ4cR8GZdHWkT",
  "key22": "27zmLaAa3xUZtqcB6m4MAcqQ3XNxxKKFUFUUmXzsX9YUfbHSww2YCUqGfMaceDghXqdF6DgY1QXwDvyiE37Q65MZ",
  "key23": "ymTBeCVJw2FGGUDjVqNq36b1fqpomJ7XQebZLHmLiYwFGeW4TFmLZ6q7iZoaHEmZLNKCSDFGSGbTvYsRHxCcshf",
  "key24": "51RSh2KLSe6aiXNqNsVt1gKm39xeGqQaXkxYyzVptxNGDE4HcjMTK4RQG1y6FbMbk4wQz5oqrfxoDpC6C5zPKLgz",
  "key25": "2E55iX9JDdiSf6R22U9nfZX37saaFxKpGuZfSiXauya3qse96meQH3ehgQz8UtihnrwwaNhTbCPKov74eSQEes5W",
  "key26": "2WYyNXJb1BWEWxyhtPiLbV8Ns31eE5c4nvGHgeJTiaLokATDkcWjACUJ1oBNpud4pqKp7RGTqijGQZQkmDA3RxFD",
  "key27": "5Lmk3XMaPPreZZ6gR2vh7veDuW9NbDDdmKSMtiGPAuzySpgwN8Jueq3jyEcpbXPzoWdDF8Prcjw7Ab9BtJr5bmq8",
  "key28": "5b9B5xzfnhfpskecmxsUHmYbTL6usqSUixPCb7n47dEZTUFZNspFuAMPB5QshRoyX3dd2NVqwWicz5eW4JCu8JYh",
  "key29": "mzp9r1qYUH16aVu94mY9b7VFrhwDXYoLHibk2ZUXDAMncXpupKiavvbjr51467i58T1XhnwxcTVSUJnCBspghQo",
  "key30": "3KPmEuwAfJRjvu2tq2r6nJZUxd6BXdATBzYusNwJhGB2UXcsFqZVRJAvZqcTwfyWSyMsaJJ1iJJnjGCTzY1K5gHJ",
  "key31": "2fQvuxBLhDNQLj4mnJXCJadGViJtWYvAWUBKJ8WEgFz5AnVmcsET3GmWxrc6541wCroMztEsxH62nbPL2ShJiUYY",
  "key32": "4vBXuZUgWSJPdaiFDAxcNDXFPaxsGTWsZTEZXSnw7AL5x1esUfiyuDxynemQW7n7MEmuKrVzRSo7gcgEySHNojhs",
  "key33": "BU4EjD7rQQKnoUTSpGuFxTPw56htyJZEG33tAJZSgi4KeRfzXJ4RXLy3S4ibDe9Up9BbwKvTxUeua25cJZkQLHK",
  "key34": "2PZoaK3PvE5xaTZGL9CN2yvSjt3dvpQn9U5tpMChupfbQAWMihAu4hBsJHb6VBFccZGAiW2YQmXsKjFjjm6TtyQX",
  "key35": "3nSPUveYw9gBayeUtCVhibsb51UuqVhfkMucCbsoYdxPRHi1ArjsDsuCyfWqL4PuEPUmdph6agPFQKk8wjBb7CdL",
  "key36": "61Cxwi1Yk3ucXMNnL2aKN7w8GHC7xWfd5dVBkaucMKNgZqs5ab722Dvb3K8vMTqtQqobhi6QmJb5tpRr57R9pRQx",
  "key37": "2d2sko7MA9gmbtY9yJmWat4YAsnX94Ufk5gTKszaYJgjZA52Mzvm11732vwuqNzbEPp1zFbwCuvMpxV8hRBdV2SD",
  "key38": "2BtfLvCgx9v1hpjBvDVcz4xtrJcSWWUPCxMqvLPmX4uWHr6KxHBekN1weP7YGz5Eby5xTCxHpDvN1x9zvSk9tMyB"
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
