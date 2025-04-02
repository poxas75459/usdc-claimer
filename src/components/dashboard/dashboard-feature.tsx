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
    "pt7KeYQc3PSyvAvFRmcVh1MvR3KRwbw6xqg7yMkAhvU6WAqe6XhN61E71sMfmjdcFsRBF1WSW43ByZyt1Z4A6FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GCu9RGFXQV5wgJ7JHQG4pxjEEjUpv4JAv9U1jMECofPsHojNBXhfVowKsV5tLT5Ava8FTBfqggMquWk9nf9tqW",
  "key1": "4KLXeqiDo8GUjcqtv9NzJWRaSBxk2sE2St7hKTSzPyyZmhxPMynsNRT4cUkJXDsw9eL4ZPjywwHPaG25rQadRoM7",
  "key2": "66B9JF93tm8h8zBD2m8842a28PMAHgspcQCsCaLr6A8jMpMoEerpJPhMyAoxTm8mXBd7oD1BCo8BT461Tyoi1y93",
  "key3": "25XrUdGwQpGHREJZCh8pGdEGgVJxF3pcMRGBeBzvK4YT5yHkDegVtvQd3uSmuJFT5tMePSTEChfrVdQKS92fdvvx",
  "key4": "4mZfdboQCu85MdZVhniDj8MhNi4KpdDnzM5brfKgQb1XEWQRDsswdME3jsisVhBt6vQ9x5EFkEkWc3QjrMKaeDgE",
  "key5": "HDd1rSjXQCzx8NzGYpKdCDaU2Zey1e4rpaUNhZtQwTd1nouFmkrV1iGD2WUtiRPoNmeDJEc59Bs9bzQ1ZJ4Q4H2",
  "key6": "4936HhXzbx7w8hskewUPbQTtEN5u19qk5JPKZMynf4uk6wGhVTu3zkzMKf1tfoHFswcq2v2tAmfmcdNQRFAevfqs",
  "key7": "efLiUmctnvTikfQgZUpqCjaAGwpjsGgjhrBxKSqwKuaS8N1hzAqe5mmZKAJVx7q9KRv3UsFxY2xEzHRfrV1FgQz",
  "key8": "3qkKHi9r7vYeox1814hTyjkvHL561ErpnTtNesX5hMvD7AC2Gb4H6LeKD8m1jkRGyCRUCtfvgoSceE2ogZcYxasH",
  "key9": "54d47BBCFfQ8UsTTYuMqLeLt5sgernvNSVxGwTio6xFbdnvCjMJUHbrf5e8Qkf5Us6Me39uUKBKjtFyzH1c2JcPk",
  "key10": "5FnuqqvQH5GpcoqmNpTUqPzVqfC8CeTuc3X1vPAZ7CzsYcnLhgjfndwRmnX3A5Dh1CVDyKeNDN2Bv63GHVGTnChX",
  "key11": "3i6AL4Am8jyrTb2hvoTqwpg1bqJfTarwUw3Pnhydn93tC1hz3hNDDLFqgxBZrFHXL1Lae7z5DL5AN1TcqSku9Lci",
  "key12": "5KP6UDdQurTd3ooAhqStSUSKnL5NzpS7zgL47hzaSWEB2XtvJLh1bgSa81qTbKb3WwjUG3wcVeSSx3KcuHq1bFZV",
  "key13": "2YUDPhTQkttw3bxAzGnXLfX67EyJhdaeLbuMwxodkCM7Xxh6Mh8sE9xhGxhXtrudzrkbFNrNMaojJfeKeRuNWks",
  "key14": "238knaFmM1BKdKnVqTQrU7o9qY2dwjZKkipDqVh31qucyHWpqyQU1uHdyVJzZ6kYjs7oTVxiEVPYWCYzWVLzFqGt",
  "key15": "2fE2Rhz2UafXVP34JfHVS4owNFNnEkSKhdScLM2wVq7ZKuXip6BuMaYJm9poj7K9rJGaJm4zbEvqUz1AMAbPGhsy",
  "key16": "2Lsvsau5VPFXTbiMDYgjZxH6puA8J8ZBwFMiJvUbALeTj8jwvMvzAyP4jpY65HHrEWPhDn1bVeELo1nZ1cLq61sD",
  "key17": "2FNcySgX1Zcd1cKPLcXTgcKfzzvsJzhTbrDvtfEL7kHz6hFq17PfejHf4fXvMkUQYZN4EvD6DxYVhRWCo8wSYFLf",
  "key18": "47g9gWWafopSDEnJUuynewRdpSGDpxrkYBQrEbLeWah7oW1voUjTu7qXUkE77WbznPvGJMSgGUTxycLWkAmvw5jB",
  "key19": "5Vqg2Xg2MBE3dfCVv9QgPGgGXr1BMViPjr278eEYHSt9217BMsUKK9ydbFcfsRmGWUHW6XbKf6W4vwnvmWU8LWju",
  "key20": "4WU44FzeFmVfGHyekzW1CbFd9uQs5sBZrc66BPS9pFt9dUqirMXWqoaGK3sjM7UXvjK6ydAPjudzn2Z1My9egr2g",
  "key21": "5NuQqfm72pZaKMZddxHzzxXzDUSZqQKEiJopcPqsS86doW5aJVqm7TTtP6eun6YGupWXZjXp24nccaqtuxCcczaK",
  "key22": "4idwJRrxA35CzTGc8pbps97nmtYwk1FA7a3UH8FiSsNvjymWGa5viDz5uG6AVPkZb5S3oaRXXH5qafmZytQPfph3",
  "key23": "2W3wWo9w2yyrbWbHyLf9LYX36EdUvSo5tY8bihN4LqHdSbSdr2sb2t67WQFYvTHfEBkNqDCVEKdHajvEag2ZRFHB",
  "key24": "2JktX3bvmKAVQHXpYYhU3dctFmfvcJaXqEXoxQZA52i8TdDgVz7VWEvn1Den8HxBgM258gdDdWh2xvPUy46jJqSR",
  "key25": "5E2xjagtzqERyF8J5UjX6rLYyrS4nnSKaHk4sZwp4mmo46qEgwb4aD6DDm3vPJBLuppqRs58zNpSXWZycC5MKpJP",
  "key26": "2hsXaYsNRXytfmQzAvr8qfPMBFcd2KvZuKQdpdfC99w5L7mhNSexc8XqZf7uTFRchxMRf58E6eR2dGXB1v8nAV1U",
  "key27": "37kjpNxJig9dQwZ8RBDBvc7xxDeN1msdzuzWbtKCMnsfSYJApKWeyJkxG49F2wDQ7Dn4LyEuvdRRvLFnTy8dDidU",
  "key28": "4MVm4z5sQduYZuUx5fA9mR9pvZE5QtRVL7N5LkJ4DkQwPw3et248LM57EpySo1F9qpZY9snxn1KfPx9FVF1sMCuK",
  "key29": "5QnhaBRroiiRDQeErLVecYJsKmrhrppCWmknHmAxTuszf1wxxuD7DWjymYEa7Lz8KQ7JhyYRWqEkxAVppywzAxYG",
  "key30": "41KrpBcubPE9VASC1MWbiLBZZzSoydhMo92E6sjRUeT7HkGSaUVaVDWsm1KiCosNhR6ByV5oCpzp4uHFiegRY65D",
  "key31": "4Fuh6TTxTEtdR8QyUUuMNVp4zHExrRaaPDs2YuSC3KKhh7STit7z3ebMXCiYjfGbssmNg7CQRmfVwwwg6C6wUrnT",
  "key32": "4poRCUo427UqcskktUT9bKf9PTXBZvZgZz6ug3eTapbZ4GokxyWLoKHzRKeCSvF9sDGZGLve2Cmo9q6pNcH4xVhV",
  "key33": "GATyLxNJ3w76FGztWTDczsfJ3EzQtaXDsCLGYx6a94Ps4E8hEdCxrFydme8XA7oygBqvCYM68itB88CooChfJ88",
  "key34": "62dCKhDC2yJzqj2wUDYEkcUfTrWGFApqjt256bAgL27jTvdmT6GY63yzELXmq5XED7K8JEFdTWJfzTXhiRkREinx",
  "key35": "2voRn9km4xAttAzebaHLgDe2SCBXWhnSCCmdB4xBnrNbHsrGveSC6zKPZj6xMkA6QR8nKfyHmRS4MwkCcRpTr7JK",
  "key36": "5Veba6zFp4gMkhwP3mEnnkyNJz7yuBQLR5Uu4Uo2A4DYZ6pA5tQiduKvivaeX1pMKCyB6FoFTu7bdCMvJS2czYaw",
  "key37": "2owq5XtMfDp32ftiS2HYNQWvCZBqLasPyxmfkhyN8fA4FCYRmN28akr6EXS4pWNJK4AErn7L3c4nFZyqYQq99hU9",
  "key38": "5nsex4ctCDsJSvXokyZGSAMYXtaajwd3BxbxvrvYTkrud1UVgu1yH9SP5wNbKJ4xUoPEQHFeJYLFT4VxksrYTQiq",
  "key39": "2avAdXXRSy83vpnsBtqhijjj23qtSXzLb9FnP2zYSEJwtV1VejsE7rQ1S5FgDLAzbZ94TzWfHqmtanrQAZhVWSND",
  "key40": "4xKYbC1mJpJtYWmRpfrQQAvX8cxRjrd8mE4TFuTJVRfPGoY8QyPnwEMWvXj27FYsfCWmeT4uivcBcbiUppVf4Lu",
  "key41": "4kEiAFMnshCkju7BDTYgZFz62PSb7igYbYLD5MzcuFfujioXVTcqf1AQC2SDVXxyw5mThBMkMsfgb9sUrfQQCSfo",
  "key42": "YDzhubAyrHFZ1sZmG8rfVSR6o3mroktfDsQ8Vfc9XNJUbSN12kjeyvDLUsjziocPwBLiBMBpshMSNW5wMh9HKb4",
  "key43": "2Bswg2xbV38T7HwTVkR2tG8oQZ9PTD72WyRqUPby5jom7dUKaveQ8WsdD7VfXJhMCAZp9ULwR7dmo4jznYaTr5Qa",
  "key44": "hEn5fRxiCnuLp3NBw35Y2ee3Kn2wC1CeztvhChuCpYRaxemks43JFKnoewSLo69qr3UNyeiS7TYiVgPq7wq58YX",
  "key45": "4pWUipN4QCouo6miYxrCiAhKWh3bMVHYV9LQpPsHgc9zYqypEMpES68BpD7fxHToaUEnGQeeFL6hkcStuEx8zYYU",
  "key46": "3WY93JgywrLB5nYfauNXnNBCyNMkEBTPXsLhPYt3mT1yjbnyXDrvBifk5Mrk312EPirzhmsm4gKzc8hwfPA7pYM3"
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
