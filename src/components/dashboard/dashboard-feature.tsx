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
    "fWKajMWN8WWiKKg6JFxgqyvtriCCx8fiWXyZZAVnpVEy2dVJBud6VDs3wLegjBjWbPHDE62gb4VuigCV5VqrayU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VoyAPFNAu4SEedjY4MaLbLUyoaz8eGQJPS1rZMd9wCsiEPCqe1qqyFSbwTmRUqNE9jp4juHr4r3BTheYkCrZVYS",
  "key1": "21hRf4nH9s19ZXKhXwihXd7Jn559eWq8YxprEQKRYZkrP47mn1xV4gdBCqafcPQwC5CkTYQ2fHmptxqDpvfWqqpJ",
  "key2": "2vTmPvHvBo9ixd1th2S5i8X6sAeyk1G3s6jjeefAbcxKrYqwy2r2147iTF8mRam14i8ahYJdSzQsTXrKczJxPhLR",
  "key3": "4EY6pe9Mte8iMZGno8KiyXbwQEquos75RsJj2Vnk6BfcdYZhT6xY9gpQgva8drev76u6smn9b8oh3J4R3V1a7hoF",
  "key4": "3PuA5jbhWKjhnTrh93HvAR1ud4pgFG1G4AyGaJ3ou1dKqzpgXLev5NaEhHDULtceXhhEzhvrjh1JwLVQ6PrDJEFD",
  "key5": "4feZHfcpoCS7s3NbPDdo1w8XqNjjWqsUMpyAePC5GsJAi24iynzxskcZ9Lne1BriYA7qV2W4XWcJ61nx7o46k1Et",
  "key6": "LVixPyLrPNZkhmNWkDW16Jiq8yVd7nW9KUqv4qRYfc3jm2k2ktf7G4PWv3QWnFfWNfiLPMHTHct8z8AEss1XsEp",
  "key7": "3aFH96AHo6d87eUb1gL9kzAYiRJ327snBo2BmLiz8KDfkniohExN6KJ5hY8Se9uC4ywQyXgUMsq7k6eQAD8ioED2",
  "key8": "fxQGJqZaGpguA6d7WDN77V1kmnasBW9bbyVrcWpvxa3RXzK7u7Aa9TFzeskDpmWUgc71DpUMxTb6Vq26aZw4tqj",
  "key9": "4wTtnEXf16w8uCxJJHuhjy2c74tKLtTU6keG1w4ZyoLAWmj7mpWruGJon5AXZ4xUJN5hYbw5qs5GRFpVYZJq69N4",
  "key10": "2VFKHRyCzb4dFSwumJu9BgYh4W8MSH842zAH6iDBrMeW1jsSxSDVfZzf3QkR8voJCLwzZRRvZfz5Vx7LY4uiqrD7",
  "key11": "5mNff6d6Hf1r7EceGpiNrcyZA1TzgZWGAvfzKMZwzvDE9DgnQPXxT66nvHaKHbrgAiF5tJ3J9AvrdQjmNBjyKZT4",
  "key12": "3zhagCSnRsBesqF9JtjtobaxLa578gnxuJZyeJTXpmUB2MrXjjkFyRneR5myXBf8z6mWBvCkMmV72UYpuYHRARXA",
  "key13": "2Jy2W6SFD5MGNh4w9nDsv3vx5J4ETyHT9PEeThRi7LSNrWHV4krgRQ68nHngNCFFXrbcvph2QNhJM72iZXM2Lo4k",
  "key14": "2RkEKm2ggye99urS5HKwWiiEGtFq1z39NaxJiGpZd64XWKhgyJ59Wk8qrqLj1D3UcKGCXhDb7VCttSHpgw5Snj3A",
  "key15": "2iFo8Jnx8Ni2dzCp92PvBB9WAtREPYek2GT6iAxirsUquq1MsFSXhuYWUaixnMCf99nVPaKWLh9pv4RYefpWFgtL",
  "key16": "5fvB2ppK4Z6wJ2o2tmKq6QbQ36izhGDDqEJaMVQPrVUEAtrk1wPYZ66P6oKy9jg2nZVycH7Ryfig3LHYHd6SQCaz",
  "key17": "3TP3PJbB9XTkXV4TmLQkvhpQaYLVoPYyu3sVixoDVTuJvDApE12yN7bjMSwqJMg758AdoVASsGfci564Ju8M5PN1",
  "key18": "5FDkncnJzFNAyZmrtjtATn94KhT4wL7QMXbRvQpqTbqNsBBAL6r8SD6pRts6NFEQAyXaQK38dKJGYgo3XWYR2SkQ",
  "key19": "BTqHmTLHgAfKqQVPAH91HGbd4zfvVVaFwmh1mRHhE4nPEjF3Qga77BqSYJX3t2zxFan9qxHF1JG1W7gRYJuQP2F",
  "key20": "3qpvkiQgDN8fnu3vHqQCgXGngEvder9vYqbEW1Siq6zzpx11BRdvu74UuWEWKepfj5Jgs8KxFPmYsPBRDVQTx4Ym",
  "key21": "3WGVY8Q22Y5ryyhrzDdkqTFXCUBnyChoQqouTpWtGKtbjGkQPRF3iwy9o3fGRihnz4YqpHXmE8dECt4zKEcvx6E6",
  "key22": "U79baFBywx9AVLMq29ZuAzyq5i2xJiD3yq9aecUFVYKqiV6QuL9tcSHLRvV5mUbbxh56QEb8G8waznLtVvbiSZ9",
  "key23": "5FamLSyEKGpC9GFLN85hFr9fHow2tMnJPZxVUoUtNdx8py8ZL3wLpkAQECeR8eDsLWGnvTt8RTreDpGauCtC38yQ",
  "key24": "2nNMY6fTMHRPrdpf7QZNrsdCSZaSSvXW36KnKka7obiD2aiEbRcr5JKnnV1cLjgYKDuDzXBmaYVLy4aUxLmJycRk",
  "key25": "nmZzRpDGBbmbmvQCghX6igupfdVUtJXMLT4qgTbNH3Kx9AqJCNNdkP39nVa1ByFfbsE8xcbzKctLTPX7LhYNp4a",
  "key26": "r1L5L7g52nZDiaiqPfpJE82P2hW2TX8ghZ3x5Rc19wcCsf2brQ8jnBAUCtaYptmcaaZfD4UjQvMGV3eF4Pw5odV",
  "key27": "4dY5NPzbP5SoTDddzkbPd7bvjHFWfHMM1bRfrvbDno8JLZhVXQ4rpGMH8p8K6ZWJC8PmMYjUh5eqBvaewnKPCGmb",
  "key28": "YjLDEviTFn9u7DRDUrpNa4C9ph7bUhedcNLuzHJeDPrvTSFQ9WwFAxA9dpCNn7Z9iaztceijgodzUCBwcvaeqci",
  "key29": "5m3w4HwsxavcbJW2eqqqQCKwPAStpVUYENqoa9dFEF223yM7dnxpWBvTCKuum8LKbMSBJE284tCyjAR5xZ1ztYZY",
  "key30": "7h9Qeq1B7rhQnbyaiCDxDGg5BxiHCvPBTwMs95EvSEAVimDWz8C7MaqZZKmdLLPkfK4eZ5YNc4gZESEF5wKkfg1",
  "key31": "WSEJn5k8dhD4fSEYihqUXojLvMapvPctJEmSGmnswzLifGYLfYqwr56B3KE8hKU9d3Fazu8mi4CYHYkXTyU7oat",
  "key32": "5gSGBKJVb1NSXDmUgHrWrmepa48kR7YdRMnxNFsmHaTRcd5qo59FAUx73e6BR74oegk1LnVZbEJe1MD7C3WfrvKX",
  "key33": "3p9KwuvDhkYSwt3MXjgmG1RQnA3DSeTvCB9oP2yjHSsTVsY3DuNyFmgEBbVp1ep7g3wCyTNQFhMJrGpcNg1t2UKz",
  "key34": "3x9KRcBNZZFdpnuezQTSuiUDNpVGAU9FrMuz6QR1T1awKz92iGeAqtujSCvTFiXxSJVSPy3wxV9xehKvYuqJNaNu",
  "key35": "5Gst34K6KXsjhzUmCFbhgDVwURciXt33KN4yDwRTdzi27rDBjgwVvGvY1P5YQr8o7g1wPxnLjeQDnJQJd6GDMNMG",
  "key36": "2c9WYwFhEZd4Zi6FQzshykHmG6tFbFTFofPTBhT5xuyE5Vcv7caina53SXnKc2NY14bWPSr68GzzsiB88wRDVC6y",
  "key37": "4qTmBYvr6bgowVquvoe4Mb4tX7Su6zxEoCmPao85dfSMCmtdeH2xDLqfgdo8VCWGVG3H7iub2cZFA5XJUbzgRegP",
  "key38": "3qTSdZz1q2fLxUB4VheZVuYJeNtF1WtVdPBBqRPt9bfP3Pp1N6finXwD6MTj7NCR6hXRkQi7nE6LLWNJXVS2Ra7u",
  "key39": "5Cr1SWsL5HAMWHVNvuRh4MKUeZv6LCqbLaMX5wrqNxMvbSfFqFaiz5MMstSHpfcKqy1ABwmV8dEyuRR2qVFnBpwo",
  "key40": "2SbemsdWv9n2s4L2kfAb79RzL2tgitom6kMfMjTyupnXUDD3yeKJxsSsEKak9DRMQiesxHp9cCzQVHHtXqYDnhZM",
  "key41": "21KTc81iA2Fgf6oRn4BbjSXzBarpMCzaWYhspGBgoeEwZsakhq9iwXA6UGLnWFMLrrwEPvgHkxAzfq3Y66KyVCuy",
  "key42": "3UDRsLG9JxfSFpxiKCxbUo6hE3SVW8i6tiExWLCt69QMimbP7cKc9kXPKDyBBKSpEXzqCkMtsSQAqRBx6ei7QXJk",
  "key43": "tmBd37wVP7kNR8jFkj3Wd5FADfh66qDepdxHskLLQ8SC4qiSeHM7XLrpGDJtx6uwW2ZxwsCR78EvRdTSf5hgXZw",
  "key44": "bkBakZBE94pzREznE6TFGub2f41fgntV8Ke3VdkZRbGbpATqo7HobyT22XFqumXLyNBSZVMSGTUr5kNwf7h3wtp"
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
