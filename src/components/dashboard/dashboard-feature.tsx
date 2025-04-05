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
    "bE699nyfYz9qyoR15DtgHqpaPUdnvhNc6PTXQimJmyUoNfj896vufQVi8KG6n1cLXoCdZLEGpQdQmtueTmS4RWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iHCDoZoqcfdLwCTTXiCx8V16k3tGfnTGFfXdmYuH7WPdRVfjiCfbu754jb1QsAtscK2Dai8HxfRKXyPUuU1XPJ1",
  "key1": "4Muk9d7jJUE1dPYzCj9vjAS7U5YNJXLTXZJCUeVRXA2srVVCCaRkxWCHp6Cq3viUcCnTf1U5W2c87o9moN2QQf5",
  "key2": "3H8YjybhmMzEJvNUm9PnBerp2B8imCXSE4rkcP8K4sTc9HVWhFULZ7FAv8sgZJZhQavMv6d2zRjqKF6CJAda1XG7",
  "key3": "2PQNG89pJo7rgq8UKnbXkLGRaZLdxgbCPjKxZRFyM8x6cWsvX1Db9zqSVM2eRwd1QqJZD4tXoZZhM3ccvCKVn7on",
  "key4": "zMjrvzNY5DfxW2EUd3cQeSZb6xGB1cQfT35SEd5pkgF9e88UfKWAbhdYi8WAUSDn9yi9SmU4N1NHZJGkJwZ5NzV",
  "key5": "38EC1CZZVfoVQLrcXYJV9ZubkPd1JW38WZvt8p47WziEbp3iDHdGHCFRo5TPq4tfhyPcjnxYuZsTjMWcR7MXqPyj",
  "key6": "3X7brbd6TBHQHGu9RhmrfZud1qzAcnpdZViqpp7X6eAsx7Z1GuvPMLb1B71XcVHpspytdCuj58RPNTQX6Byrv8vr",
  "key7": "2gTMSRkaoqBLGoJ4UPR9eAsTw6skr3q5AvDXVXKQtQ3aiQpDVEH7NCsQBpxaXr7HDkxYm1M7atjdfZnRQNfgoqLa",
  "key8": "2h7yk1RieU9zFxTCnbX2mr6himvEP1dU7bxVEkSB4fAGQKpeHLxrw1KVbssv9fCLKanuZ1y1ZfrCjUCxYKjn317N",
  "key9": "3hPbxGxAdHvGt617rnDsfm6rsHDT4Lo2SWU3ooJEcBz3NJoxSdJr5yLgZQvSto6HJZ8pvduCzRe2SyD672SGoo3F",
  "key10": "43b3u59GUQzcQqcovwReY8Vc38BSDEQrU42wQfqZAbnhQF4bb9osATJTUFvkap7mNnLa7mEMFu6tafPVX3ptpbW",
  "key11": "28gWoKzKT32WSkPndz8BUT9kWE5S5Cu3pdzZ7ofCouGsEBDjYY7quQXVtrqLKd48LjgyTN8aUgmbAbvBBHActqGC",
  "key12": "4CXB7H7z9nSbSE27VpcDoBatm4DDpJx2coJxjActWrzeAicvZE9GtzS32BYVAagXhFg6jVKU5rTVdN8i4p1hsJLR",
  "key13": "3txEBEGkrbu7k8crCdqxruBwmxpcgHJQwap928u1ZVexiBu6QMMjGxUjP4D7zn2iVv4jAViNEkUFr8xzNMed2j8U",
  "key14": "62tFpkF7owWzpbqUCni9G4EbznN4wqgHU3A2J5SdE31sVsbU4WKheiEP6J2gW2CAF2opPCdG3rTRnZNz9Hy8Fcn8",
  "key15": "5jGN4JSRn5aFyD3puR2R9R8YhA8Zt25Dy5ezygDyYpEYMFMxX8UcrEFRUqJbcAX9piGBEJBKAqgJYdoARtccWxeK",
  "key16": "5XQsBUyDtcrzSKeZQqzpgi9YtYApfLJfsLpbCmNUZsPxpS6rJ6zviXUmbZ6pZ4W6uPubqwfHEnaxfTTeFvjpPbrL",
  "key17": "4g9Pi7jnipgZAPKPrWZGETCdZBFMJigmkCy3SVP6r3Y97KbqPNLvUrUAsNQp93F11Py2vybzxSGSDtCeR3Cbzxcq",
  "key18": "4Tj7H9pn9DmReLFhtL3n8NtKd1T4hDU4jsoxRnNFqcex8EpUtDLBRXcC9FKn4YFDXEPqw6SX76gciBYFg8nLhcjH",
  "key19": "yuHiN41eeFZbfCU9KJaxbsz9txGVxqXxcN9nyquwwyS1AXxEDQpFpfMTdKHgCxaRsq7S7TSXx5mgY1n73eFtNcf",
  "key20": "4HST6vL7VNwfYiKD3FHFLaVJmMLdmFQ89AhDSLpFfD467Sf8SiG81aT7kf8PNAuAmrMPjU3o1QH4Rus8g4C47ewY",
  "key21": "3bxjfw8ayhwBT1S9gKoyfTM1FqiBTrCHuzpccDVXQPFaCfKALnwKj8bx59Kkz9q9wXuLyRKq24MthAcZrL8PhQep",
  "key22": "3yXqpfNp8DWSB1CpDjr9dRgYwkLMNxh6dwqpcxvbRp3x5DeBr348D1d5FxAXPc6huoUcoSrTHC2kE2JRVqBz4TLf",
  "key23": "24G7wJerweXDt4GrAFfyYSZCMufv92jDgMxwWSjVUZNPEG8hcXtF1anRmQBVxXuAu7P2c6FZ7ggnHsp3QZxF8woj",
  "key24": "4PmiCBvk4NELgD7Ku7qgYvL5cUrF3ob8Fd5bz3VFa21PRzpcjszJ959jJW5ERCqX66ESX1oV1z3i42eJg2rSkQdY",
  "key25": "2w3xDniKXdjoHp9z9sF6dNgHbidpT5xnUchKsEdtLsCPMJVSDyCiyCa5FfQNDPtN3wdUJW6MEP8Hjze7fUsLicno",
  "key26": "2W2zzHr8jPRe5gmQCppin773hwiqmQReiwfXaCVQUGqDwF27WMhQ2b9pqiFAbEELyQafFBgM4dHmxHw56BxRHHbf",
  "key27": "2oQdugA55p38824eXdbpUdHSWQypy6duKT3f1E96Ph54DEA2779zp4LiN1uFVEQTVPZ36nzueM3ebssmwzBU9n3n",
  "key28": "32XzZ1N7kZXhr9RzFW6joriAGquSr7LkdrrnDY4cXEkWrzWwiX4eUgdjp7RSBWthoyqirzqGa5yNGSAnZBKYVm11",
  "key29": "3qBBECPwTw3Gu9jbrtSvKhXrbExUxVSBWCMDznaDdnJx4s4RRFhrWVkbfTvrG13ziQ1qwkLVe6R7RGo6ucUAWEbY",
  "key30": "57CCAz9bQBhMtCBYv9BYyAF71LFknRarU7qsf1KQLtTWUiVMJ1TdSYpqn3JeLV74zaXL5jAYk6sSEq4gjn8MiZh5",
  "key31": "4cq7UJBkiCDpWdjLphqDhDnUijeAApRymGQ47oRZRtJn3CS4kjjfauY7iuDzZdVLgZKeETZBZM4kJN8Furuj4Prq",
  "key32": "1KVz2oMyTVd3Ncw9V8hkC9G21z33ZdFUSytJeTK4MupK2oT5uiCXgPZR6Myjap14Jty7uJntzKndUJW5vNz6LCh",
  "key33": "35jDYgFV29g8qfVynJgk53y4CKL9en5rth8F4oCNA1TP8K4wRXpkA1kdv9SgfFz6YW733orrdCfQC5wFACqJFbvT",
  "key34": "4X7hdrDtQdHb1Hm9bvD67Y35f11C3s9oGE6wX9CPb3Z6SVz1af9NVpytz1EDZ37spAYxkgBU1z3srWdq5pM2pnVh",
  "key35": "3X27emF38yMbCyUG6ZXhFkoUUVwnGZqBjRtvcFzcWiNN961BWesNFfSdrxRGobFAchyvt5uwtyN9rbzY5EQxzznn",
  "key36": "5PQ7GJ5YXAeXTvu2haw219bV5fciE4eJ4m7bM44AMFARDtLyHCGLH5n3ReBYJ1EMXv8JztxmdyGZwUE9yDUBh3wW",
  "key37": "4mLC1zhgs4L6H42XgEqN8dKEFnbqKqvZwqFjPbspTgbEdyR6T2z752Rr2q763YjvrRACBHpG3sLGzsj5r8ZLogb",
  "key38": "4zswfP7FwLtfmUvn5WHYTocdJ4n8HoxcjMspcanZhZsVR2ut7xRph9F3HhXt3AZ1KEbZAxKsivKzQwGtQ1px3ngG"
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
