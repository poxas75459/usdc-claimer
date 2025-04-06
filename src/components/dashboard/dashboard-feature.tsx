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
    "5JsNmahfhARwAQ8Jize8NFzVJRAaCbeM3kickgrU28caS8v6XeQ31YuoxfvZ4vAK7qPp779cDsP7w8cRmQkjEWX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnPTyLoz7p7GXuNZYoQBJDo7nbRjXeCNpvfa7DMFjAoVaBHY3iHXPfep1i2rZ9U4bniGnbkUKovkRWqd4DxsFf9",
  "key1": "5FtnaBhu4PqA4qRK3kePo7FWHztLzxjWhkEJiHhJUQ5RBP2rj1LSKfS28PLV1svfU6MycJyd1ssxQUPTiCogHjY3",
  "key2": "65bmJxmXHzxNvb3qTwVJc8JwwfrX2GmRnNPCAyfdz78sd3pHUK7bbN1kG6jYo253Trb6CTqww8Enb3jwW32bmdYm",
  "key3": "3zpgWM2jKAbSAuwWafJSuCR1iyZyteGxxj24NFo9edo1dR1xq3hwVXE29Ug3bkkm7MKJQJK1622CmyCNDdCMBtuz",
  "key4": "5RSvbGii4zdqYfGPwvDMnoVwXUcGuqDXKEMVd4WH2Ljc3KkwoXfRA2EuLK8mrEh9FbxmGKaVTFQgkZ5avgwQJdbS",
  "key5": "66CWrd47CQxTcKs4KMeZnavRDhDWAc1oLNPWdQuBrH9nFY3yUChBXQKTULzkArbcs9HTbxgkJ68Gxf8YUMjZ4ewd",
  "key6": "4c7bVwspq4WaXw4s2qQjXxSc2wJmTzcKGR8BwLUCuRXw9nSTjdw14D95aY9tVzje1f7iPvxiEJMgC9dBzznDHXAY",
  "key7": "4c1roXLconpUebd4KUegURS4drDjhx8jieU7Fejmsmyzo6VeiwFV4C4HZ2Yq1oNwSGFNLADFWofZYqsa7Cw6SJw8",
  "key8": "33eDAz8QcvTeZQjYVEciHDguSbLt2mtxVGD35WB1ky1h59C5MGGbPuX4S7ACr7LmQURTfvAuPnT4JoLiKqNhRsPM",
  "key9": "38mrgnPU1hpsGfP4uQohwW3BXqZRPU3Y4nD7KCsqrCGh8wJMEZ4yfKYfAX7i2UNUsgpkZBeWpjoJVt6yNsoV7SXQ",
  "key10": "5go5rwqkzLLHWZ3CxrAjeEtT76f93rzRtPwtyBJVDR4U9Bv7nAP8doccfRLPgcG9t8vhRkvcqzu8BJrXes73CcF3",
  "key11": "3QJsPaq6KsupuUqiNHyuVQrTED813AzpYrm2DFMk5x7XYq8GVjnKg629MuZmtF8CR878ad6NiAJ4wUF24hKwxmbw",
  "key12": "3BfsswJHdVEPCiRj5dkbjJYxKKaLowaBbXnm5XpTFgQU8ds2ApZ1nM7fviZt1GDvWoVHW9QBS3Vto1Ws5Vjkcmhf",
  "key13": "2y2WHDwjBk63rWJU42SPikUacJQgghhft7hFCQyX6kQiRLLveWASXLHVo2xa5Cb4CuKhzfBvPzjoVnsV7fydTe5S",
  "key14": "bkBF9J3jjmoJcxo3WVgnrbBcidjbpn6UYeVuzHuWJ2kXFsRd4LqQHUmkuxAYGp5DYs6q3vASoaXRyJ68neDfCqN",
  "key15": "4wpwftSrugbjSYEXuApeboBhqNWAN3gSx5BiF8KFAZWoQjL6aHuDoDZ7CQ6d8tHjE4gEzK5Vz79meAuRCkCnJnAk",
  "key16": "4L6tfik4ZpPDUzeNWoDS6KSkrzGex27hJrfAShutRFfNbT7HS5woPz7qxmoKrRXg78ajWMpFkeAddpCeT7QT8C5z",
  "key17": "2Mz2cNYuWPH1abnVCUCfJeo2Bpj44732Yf5rmsSbJh9m5u4r2wmtL9rnxsbFN3DbY7Ska3nfEhzJQmCqWknAE4VE",
  "key18": "3L4Wt6SCaynj2soi2W59VpuwJ4woWnwDJdj9u4NJN8LTntpKvopMVtE7ReWZUMYt797B7SgbBBbnh8Ry2M8nfqT",
  "key19": "5eFtLmxoCmpVqusbCossBtTSqZo73y2MQwFjkj5XVGvQjtCe9t8bnjcXscW3gvJYxPjxnM5sWjcqjQb1tUTbECpP",
  "key20": "6FeHQijmVB6mDZngf5Yk1hMvMvZGbTF8kHtxQavK3vZoFYXnhUT4Ty9TQPWbQ3WWQyw1AyXD6FtWagRqLbXvRyW",
  "key21": "129orsBP48Mdq2642mcZ4h8B1YMv3sYjPe49ksiGe6SrsAcB2tRP9GA3Fxuaqo5521qhNfiskSkm4nYSqptz8zxU",
  "key22": "2anhyFPTz9LuCfSoBsmk9KGzXeJmTf5eq13ecKbEDF8ChwRfRr2yA44S4nyfNdtNyidWx4543RJheahJGFgfESbH",
  "key23": "i6zXFNVVccFfdWhH4LTtXAe4viXq5fBHD1b27BrkkacUBV6wsRdB6Pithx1Fcb3WdFUiFtXmnxGPEb59XmiwW9t",
  "key24": "3h63Xn2B6EwTwQcCjcPDrnXRZ2q4hMwLsf8WVxwQzqXbMfwJddtNRQf9miwZxCDiNxbnyHSDzeEXFAoM1sFYQ6wB",
  "key25": "2rfEa9f9LqwA4FTdWpHd3CjiswuG5rzTdLEypKTPEiz3MAkWA2nYeHY87dRiDXRzbrnL5mJ6Ddp1KhHtHR7AHMem",
  "key26": "SbxtupM23ZHABeWp9N8hyeRV8QMkrJnRGQpc9G3rzon6ZTSH7wct1xg6gX5AyGn6xBrWJ6q8xXkvYMRQRAv1zy4",
  "key27": "27dSMePLMQJQHaEYZ93ZtoGE2YxW3wtMcECyrXmujDDEVZex4dLJcggtZm3dmvZiMMSsBCnM3sfWyVmCvW44XwCa",
  "key28": "4J3aWYfKe8LJYTasFqagz1mfkx1a3JrLwY21Wn7W2uuvQwkxbTpwqjk3mSAfWQuMB2QBBDFVKQfXAp7nXuMr3N1G",
  "key29": "4ZiYTa8LY2W7jaZiHPvct9uiNqzHu8KrmvQTCTodLiQudHwwGYKrEC1UjP4J1TuTeuk9w5sfRmNK5qMRR1nFniRe",
  "key30": "3Ws1JHKvSKogWisFTqzeieSqDQJKRjCcBXKrfzTi4d2XR3JW2u3wv7d5QjRHW56R34SCaepgvDuNDUQdYaZnWWkb",
  "key31": "c6xVsN268EGA1sUi4cfp7MwEr9Er6eJeoP4cbmsDL7k77VWwC4A9SiB4mpHzpYkpGRhMMfFHzP3EobnCD81vEYa",
  "key32": "5z51PEsDynJCWkYK2LmSUaHwgKdHs2Gz3PuyQ957DBvDHNLsSYnmGex9ekDfLhzbymQSqpysDLLXM78b9RF5zoDg",
  "key33": "22i3UoVEZNBk3tfzAmDHrQY6zYELBaobsD9ENCa1SZK3R1FSB29Qat7xA7LkiCw6TXTg1w7G5BfSWZQeSh35F3qW",
  "key34": "47rGrpYaMXnjQ4GfLEoNDtJX6puvLvuWT9pjTEJ1NiQZDxX4fn7wvyaTdewK1H4s1mjKCr5q3FWa8eStSKsP35ws",
  "key35": "3cX5PYQDwvoNCKCKL5YYGxQfshowGE4yaMHo172f3SAQJzfEPh6XPyf1JtmLWaq5sLBm7eL2s2TuZytx4hTUJzV4",
  "key36": "4P7EKMD1W37HrMjhSYuPWE1xsCDTYZA64j5D3FmBpEJhsLUwQEfLTz3UWcN6zd6EVm61t19UQ69wRZHXPfH4Vxfs",
  "key37": "3Rzdm1UCn3wUtKDr3vd74AFZaJ6R1jGaWqZAY3ntmmy3vLuGW7sdZoZVa4ZfRHuE3nkm5Nw3TgSqxK6kXzwqCoAP",
  "key38": "4ZDvDUdjfyndR5kWgr5S3zt9oto5NzxemQ85hTfjA8Q7sFyQ2oFF7pGhuaLde8VDTM1UewmAUYJvExJFCXQELQ8W",
  "key39": "4n4Gz8dNQGYrr1QBXtLduxyXsNwQJgmbsskh9J1AdJBkNwev2bwpBDhzY9G99MSZjqo8J6JU4mYzy8dTb8wxky5L",
  "key40": "5kKXkppRhVKEqwJR5G3p1qgJMNJXdK3nWsj4FDQeR6iv8yaFmWgTqazSLitDia92Xht2zkap1MXsL1t7nbfiQTrB",
  "key41": "5TxxKK5uMuZABimHqBmJG6EwFARzGo9nQFw75EmeysZTmm5h85CTKFcoShihjvq3xaDxLRCA9Nr1GyNjR76Vz9QA",
  "key42": "2T8Ys2NbgtsWt6tmM1j4gZqMB7d2b23Fr49TwsCGVV5AZnhGqwcHNiccEry2R9nDcSBzuu53VVuCZCGgWYy2P7c",
  "key43": "2d1CYBiqN8NPQcTssCQkzbSSbeHzojmBqDyFk9ECXVk6RwZJ6nV5yMLmdXJWxfNuWMbRt6wUEpFU9KFqUmASyvue"
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
