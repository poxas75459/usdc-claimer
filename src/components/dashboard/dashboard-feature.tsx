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
    "3GtUzeXk6SkwDgb51P2nWpTzA1cE81wuCH7cs75kAdXjZZWmhSoGp5wNFhnLWnkgoFH95RzhJqiGEtvLfouzF9M7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vH4MeM7HbicN9NQRHESjVk9YVK7mAoUWM1rQkP1WxetDmUrYjpyLhBpHouyYTnvTqEcfuHYQZhexbXDY9EBxLkz",
  "key1": "2b7CGvfr6QVu5ELyxaRTNdVXHDNr9sna53HVdLw4q5Ehskks1aXNyTpyKMmJu2S9jaLK5nCZC4KpRNhLKpiRHeK4",
  "key2": "2TbdeM43U8VfMiLomzPc4A7JTfbfm1ug128KsWPCossQDwuXxDGL1GmQ186D8aJBx2xzRsLBtpydZcFrYUwueBb8",
  "key3": "24KDKDNFzZdEmVfafvYc9k1uoHkH4t47x3U72v6yaBQj9DpDBEjGs4MYakyHsoZvjCXFqiGCpnDVHAvbt9AYUJea",
  "key4": "3EVmtAXWpySJHn36MhraaziEgFVxi7guWLCfZgCqSGUwPbJHKRGFzU7ej9MtkoZ4ZVSXcdbXA8MHbC9LV3sduUku",
  "key5": "3DZ41rnCmH5HNKTYCp3RwcpweGCVN7iYMMoZ8vRnD7sb6KNc74ieggv3xUJVpoC1Y6wPuGHUsiMWN7FB1GVQ6uzd",
  "key6": "5LqQswvAbWNw33YXR4v8uj1nvgskKRzEcCLd7YehoEAfnCA5FYScSWjWCift4mHQ7qaaKCbU6braTU64g4QPkgQr",
  "key7": "3TCunYKBZGVs6E5iozhxYE3X92eDhQqsRQVrAiDsa7ucex1h2HgyPK74x9oB4rvWErtECraTL2fQgwzLMLYUR2zg",
  "key8": "4LMvH1QaK7NZt2nvfhpq8E2fco1nxzngDftEtW6RVBfbyCZobmfgE8RKJZ7q22fg6LYadQSKGjZh5yrgpVvXWD48",
  "key9": "4erB2qrw8Vraa2zb4bocA5swHoTMGiSq3VYLz5DtahYukoano4WCKyRn99jZjo6DiXw7SiDAZ4UAH2o8ifuszZWw",
  "key10": "3CmfMkHfhsGHgChApKZnmadD1MFZBbExPjqVkhnbxfPnbHJFjngYamK9NDm7yV5Cnn1pWKMKwVcfJrhsYaKPkmbz",
  "key11": "Xn4nNQjTQidoULTemLGBUWG83MMqRBkwFoKzofnpxwCRQAUGSvu3Ha5xySqLfY8kksjaHVZE97mBrMFzcDRUKb2",
  "key12": "3uoG4ZkQKzxtJQXYwpwmGNompJZieNC3i5RynPDvx8fMMbT2haYw4ZUY9LN7RG7FNiWStsZ1ooPvj23Kwt7vaSpA",
  "key13": "2VdZvssmmbbgPZJ8aPgcqw6jW26CWywaw3fUG4sYXsqjFPRKs2VGfXDWXnKw3u62ZdRM7MsqXTMzmF2xHopXz4qQ",
  "key14": "suGsbsJiz4mmwpgh9mTjKaLxaiMmcKnx3AjNebnJMx4DAU5gYRqf34e9nSJQ53B2JdJZEL3oa4VihUuEpeRHXwC",
  "key15": "4kTvVSK791RF8ZP95wCHpZonZbskhRVLdpUa7mQrNFZ4hQgNWRtbd12uKdoH6y3ybU2doY6QCN88n28t8qLmdE3G",
  "key16": "3gWNmqAENcewyZpd2Eb5cuvw5bqS1pbcPAECryV1NcBVq2ZuoT8QA3ZvYTS3P9xbyRD6N1mzasEPJVziKd5LfUrd",
  "key17": "27mAWghxXVL6piupUasN757gLBCK4nWQiFxgkLG1NE3gxTQ4ftQH2Cbg7Hfd9yJhXgNTRm6cLL5yNXL9CLGmX2x8",
  "key18": "3G2xLSjL3bWdYcgKzvd6SnbMz1ENn3x6mKavmQdUexKVM8byKxn4mW16pvj6328Tb9Rw9mve1MmraWNVVkUdkgeU",
  "key19": "jyyzFor6ZLBFp5YVyoqMStj35nGG1oFxBuL3KbZ6hSx5LhAYxg88xtb2hRW32isuY9aMCNW5j2pzGRCkj8BZ4Cj",
  "key20": "3NZUpWE4hEHestpkmUYEsXh89VAq3wYRN4MsKoA6n8bVp6XonJVMFzs8fcuT23eY8SPZ6YnFVDxhzfr5nuup9LAM",
  "key21": "65rP6JvexVwBFuUZZNf4MAJeEA5YRt9vdTud7g5bEAbXfUNWqivmSSRNzfVLBpKkcXtL2uC6kJvVdCbohjxwYtFq",
  "key22": "B9g5r71un6oa895KGRPYfqFUoY67gTi7i3rosVn2u8eTCoZ5ozGwpwxLUu2iH5XPKXSSAByaLTboELZAejbn2bz",
  "key23": "5mgp2TjMzyvnv49GgMP93LdHawZoL7zBKoCa2uLbpigiLxBN2c4Yf7CyWhtnhe6vX1Ev36X5q8r5uHVsbX4htxHW",
  "key24": "5Hd1XggV3MHV6YDxYq3LzgYuyAquyxFPqyPoJcgxBCR66VUpxpZc2GpmDtdLk2bqcPysYpuGGEfNEFMBaVzBodgP",
  "key25": "2AvEH3uPbHkHj38QEGm7Dgu4ruLn2vqNxA2Xu8DyhDFjJcArb6R8SUTwf2rFY7GDvv1b3V67AD7PrpjDTQNfxodf",
  "key26": "4pXcrkvoVoi3iLtn3eKeh8oV2tS4dmpPzikK35J4Vu64kXdaUa7pHnW43L3psm2VWBVgXRnBk4WHiB6khtKbpev1",
  "key27": "44XW1LbMYUWHi2FwUKFfrS7XapLGT4KqUDkArWvzSoeeerFx1Xxf9dMomrh5o4BHhtnahS3DEHjCohqtSwoBeWQu",
  "key28": "5eXHhPriQDW5fJ881FstCE8K5vuNFWKjhJvCHUBisaiWK5znyCV9SRtygRLehvNNo2ZcZzF9mSefiF4WbzvGJa2w",
  "key29": "4So72jzHxXvagYzZL3yqNf5TXt3kS2hHZBJyAKgHFC5Tx5TMqq5kk6fudpSk78a3xudHdtdtLLSLrYzjpFVDKFQV",
  "key30": "5gVWt7HNsypmadvxo8kGwVYHQH6SdH3oECqKqHDQTGHGGGziSxYrkcrDwN49RUiLjRThAojiZXtCFxcqqyKQoo2R",
  "key31": "oysKQMgf4wRtx8EUDhTZL7gA6LXuNG9zArFb3GC6E4ZmFucqAvuWA3PKW9vZc6TFgve1jtqgoPhEYXCeg1uwwtg",
  "key32": "38gdZhtr8uZVnfjSfDJdMWH7D5yqZLGeMHGXJ7tfAgxHx4GC5WpCf5Xv13NLcbyFvMCQ2hLcYx2H7qoqDZKJ9Wdp",
  "key33": "4pQB4Byv5JXUKt7W9D3SaeMuhVvykg3HCpDzQd3JbP3bKebA6mHEJvPYADZ4WUFasNDGWZoLWnSPUFJewC3v6Jau",
  "key34": "4N2MQWUyc5vEi823u1U7rDteyk9Wn3BJz2sRSUrgbyYXGD5W97vWgL5xstcnEnRcunfHCNLgjLp1EL1Mfsw2Q2ns",
  "key35": "4PvD4gdjFrF6TK42A84v4EjpAvf4gSSsQLwbJN3VoTCFQzRK6Q7csy7xLzy63sNrXHJtdEVnHNFmp17Lgbz7Migy",
  "key36": "3wskVC752BwFJV4Qdq3M3RHHYZ1QuwNy1dQN696TkZDKVxo9fjiY7SYr9LkPqDuJ6fvEoKrm52QDPL1FFuAyN7KA",
  "key37": "3W9EGjSWUJ9biBzCE7ses6RHz78mbtXFpZb3rnbe9ucghd26bgDt7ucgCH8Z4YWB5C2hhnVsiM2ppsVhAnoK9cqK"
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
