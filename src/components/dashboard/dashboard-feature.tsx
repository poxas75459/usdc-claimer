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
    "6kNH53ZU166deivujYHTrzPNDiWjiGVvK5EdK9p2Zb2p6JjtDcn6QccesTZvPVfQFJgbYoFBTvAgdyegm2gRS2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "441nGHVHsgo9ZRyuco8AVDx5mJiKs2yr6PKW4NoRxAriEDTsTwiPruJU4iTnVvczx6oB5qxz2ZaAPrnSEsvtsvgj",
  "key1": "5Z9aVtN3kNGn6BpgYJXFXU4WwrrXxZEsYPRGuDLbuydUthnHanupfNVFR84BiKxya5nLxQicrSNbubb7zsVgNUhP",
  "key2": "5abyapLS7YXjsNroXfiDRex6MXRomjpZenDfF29ALtUgktvVSwEFFCRykwRznzVa6xXazZsGmdXsJebH752QRwTX",
  "key3": "5mdYEXhEyniRvaLxbcE4nTLLatzMKFndWyY2heHeHbZMKXWGn9EUiANWcSTSUi64oMk3symi2ZmKyk6k3WgcLqPV",
  "key4": "2tkNam5tF87kgnivZjtfqp4sLncGGdYzVYVeKw7kRYmJkij7K1Q3rxdTgvXKZrcwge9M72epbLATa47A44iyyU3P",
  "key5": "3k7WStHNew9S1kcZwVpXrKmjtXNRHjcUTuXaSwgydvGYcsHkmMnVk9UFbzdTYcg8T2jV6hc2ByNr6bsDf3dEgmpk",
  "key6": "2ij4JL1mS3QhK6NMiCkaZAa8wj4Tkbmt8fN4hK5h3z7mBm1biL9xVC2QTPC6Mso6tTTb4XS1Jy6B3bP4M5m97YQR",
  "key7": "5GNK415dHFhFgjNoJTnHF4oGWb6nHLjfBbYnji8U3ehXvhqUmDQuVSJCAA9yiCitGacMfwKcovjPjFJPMbAPz2jK",
  "key8": "2knxdWPGxfxcMsFpdTrbVpYcvDChzkspEQQ32x4VEXQwgQ5WDaPRcTywq1hSUdqoghfZHRbRYf4Lhbn1dXKiwd8j",
  "key9": "YPmWSG1JyW5r9p8vyUWNVA7o3NhgoD7RJHVeNn1mb7jFpPEMi8JH2bD59VWrhVT37L2SbY69tvgehQbro6jUSAk",
  "key10": "5ZNb9Q3C4yk9jZyuHjqiSSitMvjQTQKZPnRH2YUnVQdaYaQPtHKdnEjirDR1wUMvcnonR5GCg96SuwdDDLrdJEea",
  "key11": "2eyC2DZVbPacuHQV5Pce3gqCKgUEss2GT8DEy3KLVXNzKQ2YEKzsdJMyTXZmaPpcacMGMGxXfMZ9B2S3mGQXa4kF",
  "key12": "3bxh1cGLuRhTd1JDcHxpHR9VM1eR9croDuH6aeTnepFSwkLY8jBPEpD31AwvcZp7KBdFL8TjrPyb4xNFmQMcscSB",
  "key13": "5HCP43Kq6bxUAs3fdSvyriY8JKHGK4ozqV6NqC8f9aJ4fJBdpidLkdi4XbqNqyPKyNxuinYPeW71HYYDyrskDNNY",
  "key14": "44B63gtk1ywBU5LPbZr7CbqhHiPz7U7wi9GLRf3NGymt52SWt2oGdyyg7DREVBRRYsi8kiL9J3U1LiPzh7dAyAY8",
  "key15": "4dCgSykqCQ8X8fEk9sezM1ybFwR9hcquw7S6hseBdDgyyT9HGjRzaMfi8pDfAtcNk3gzeCtm3HurUf863rwa5nNj",
  "key16": "RADmR6F1KkBcV88tSomeaoyyHfTfqSTQ3yoK5Ws8Gh8TmjtYMjjao7DefSZgjXH4M5vC5yjFxB4y4jUR59d1udb",
  "key17": "zU5zNQBjFXScjdu4pA9aPbtaw2XjBkQyznpK2RjWSqT1KUcuABY71iKzXxXb2rP6zQvnVMc1d7YUh5nrD9qq7Dd",
  "key18": "3DiNeZoiAQQQyYsdXW6WuJbNAg1t85JLb1QjR6MkuRzS7YaugYs9yuAppauzT3dsV5netSNVjq3Cj5GhnEyX1vze",
  "key19": "eKEnxNbeCNvPsvXv3vaaQaxenJ1hkACWdSp9Sifv5ZSiuuDz5GvFNWBMo4VNQNm2h21gCCkvfr8QSxbodq8oG6R",
  "key20": "63hJh8CWcA1E3pDhc8TdYBXYCk37hNDsZVSQB1hRdWtn3N6eHCsFz5ZiwdghVUauG1QA4W3FVgRWn26prZnsv47X",
  "key21": "Hj5ymVTgmkaXnixiTST5NWzteJ1astDP7A7iqtwvi72gLHgFGVTa6hXudZRJinFZKYtVPRD4UALBCz2LNBTQ56V",
  "key22": "2TRwkyuTLb2v9xjDZRuUfVcAJdGHxGcuDovFqobsggzCBrgG7xjwPknnbeNytCzFZD4acD3T4XzYrqVkWbkJKAbN",
  "key23": "4n8RyriyP74EGicUZbK6331oSuph8sTaP6CRPoNoaztDSRFbFGrpp8choCWgGbjV47U9gFPEeY1x9WWTCG2DWuDd",
  "key24": "2gtH2KTSUFFZPpLfUTsh1DmJyWHNfo9qZqQf2uDdMM5bsaKCLPy6EiJCHB8cV6QQwuWcMwEciWMupE4fU6Qr1Hb3",
  "key25": "2VAMsbvM14TnFKWZJhXURqVvTUsJcVhaiA3TitQzXtbUeq2XbnJjiCpCkKLXfqoxC1CTeyN62ZsixCoR94oLT6nM",
  "key26": "9b241gu9YvYXUoGe5wTdRW4xQbdaMcs7WfUJbGanvQvQU3ScFKWEsq9t6Y5FgtzT9HgrFfqiFhPPPjG53EvmP8J",
  "key27": "2VL1zxE35mqKP4VtTyCqfZx1d1jr4ci9jhXN9jmUct6hrARYQkiN9W6LeJWLZx6kZfRDTfcFtUErYtyUfewqPbX4",
  "key28": "4GweiMcRNLm5qMGwjouyFHfNWKYNRuf9z5UHUDCHBCEm9TByK5FPDx7cUKRP2YCPu1hT4QuSQGFDPkiMzj8ieGxC",
  "key29": "3vHEhdVMZ3QUK5yD5PyVKfqU5ns4gWhshBP8kk4BCnzpPNk3k5GxgQG7MW1NTDtiCf3teFC3RQ1eXdQ7YLHCHKXm",
  "key30": "2wjFgLwLe6VNKMJ5dKvdjw3T6zCho5naYqX2FenfBLaPqwgxjzCVqV7FqqL5zyFVvmzdKaoJoA9cKawbXZ1vL6h3",
  "key31": "5bsWA21RNKRKs9tMx1ajavkNEP1m35FJCixotyyYPcXpCLi7jbt8jvN1YDKx6USGyfzhhwXyBG4eohYf4zbma9d7",
  "key32": "Eqc1HvE98m6g1ojxwGaXwsRHJCkWecDge9jfoRZS7guWCfLPi9rNVArBC6HbLjQFEhU5cUsDBahWp47zYr7i5Zc",
  "key33": "2cck9yt1mfssGv1cXBiMCnY3VH5wSzBSd14b4KhkQgWzUGu2RfsEjTWV7AvUF4iqR29hAKw2aQfBBTaEyKaFVSUP",
  "key34": "4FzSEvpfGQSRkQNnYq7TWthG47GazVMeoTy8fcrTb7QVADZ2TUJLvTUfPRSSN6KL1MrdNXUM52ApYaWcDKHAGh5",
  "key35": "5tbstXRwKV9nEuQrQvnp6h7gFoCbyF9uRpKPCF6bCFe95btGE5sciKJHfkJWaE27JrotBBPWgmEXczQoeLoD88se",
  "key36": "4fow3majgvvhHTnytfPooSzeeDCwkywqzjRz2Yuqd937hrUsNarQvHoQPgbJnELf5eHPSCPwfCJcqCpCR2zxgTjF",
  "key37": "2XpFhBSVVv6dAguhz1MHcnPCzQamfnjEMcMY5pZfznKzAdRm1ZU3JrXkarUz6jZaHyYb9v1Krn93MpeTSfybwavW",
  "key38": "5FExwaoFzrHEiUFSgsncbZP9izEk6AE7EJijaq8edQMS8VaRzgitLz6uLNvVD7yRjWDPCj2bDGjKMG7f6wmHE6Cc",
  "key39": "4Xj1fyk89K85jH55iazt2bAyT3tUKcgQGymudsiw9kULTjs6TCnsxV2wFVkkJeuje8JCsaxZq8dXP868frZeE4ZM",
  "key40": "2JTULrkXD4grUoQrXs2bGSYhtuLhddwEVkCQ5x1bUjxbjvQTf98rT8Y35Ngu6CYzVZfFKweDkgMvdyn1UzQXfCr8"
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
