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
    "67ApYeYRYHBJdQ5TCGFfnaFQEGK5rWhgT19XU79fCCkXtFcEMYAFS2xmwHrzupdBerMCWyRNmesjAQpTsv3Szdwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w7YFdBTwMZmLWMoR6A6hwGCNUE5wCXfQTXs3BDLGB5pquT5jLebxX69ADDgwti7ngJuLjgo92vKmg8HoE9inGDb",
  "key1": "3ZzrrsjFwCrA88Wx3UimcAfLRxtQad2jAYxhPG86Y26ijQM4TjcTLoQkqPtLpre38gFC3ukerH3RfavNLzSRfGUy",
  "key2": "3tGoqbEgiGG2cBgPpmZHsDFDuiSL6hTqmhaCU6cqLs7Fr98fAewb1bsPmjEBgeSV11LrotwmHtPuv7PTHvstjGnJ",
  "key3": "5oFDFQNtgZrNuTjL9CsVNaBkyf8yCm5PozjqTbB73WW9vDiEjfstB27nSqWXQadngD4XD9uEKDmerWMQMBGgw3TP",
  "key4": "3xwqExp56yd1XwWxp53aamveiuNxLN5QQsZCsHGEc9DWXhEkibm69tcpPL8GY45EcaEmNRLcnrfSBMBaUKmG2WaL",
  "key5": "34rNVkW9TAVtZUQZHP1VnTH5DW9JZW9wXGxNCCaiE8K1bB7iDiheMb5u5qGN8uaHTbsDDnUBr2D4tVihYdPD8sjW",
  "key6": "4j24NFzaqZLemRTHGMUvn5Cjqcu1VZ51iMwteHYoJbcDSPcGW3niJbZALYkExCj362EY4DDDc5rhVwKJ7kUN5urD",
  "key7": "4Zfst5Bxu3FzwwKLb7C8RFAg5bd5mCK5hGQ6d1ZAZyrVfdypdPNd7xShhmDDkGvioe27Bux2VQv5zr3qj5DjGayr",
  "key8": "5MK1421k3irmsjqEREXmGLQJXBAA52MkWEYYQzzTLi4LjVmEc765kocNkuJThRyeSJkSkZEQn4ewyfaqxmpbSBfF",
  "key9": "zFSa9nSgxTVhbERUg5Dc1eAtittbSBh7TUekac4RqgvLDfajnh4hpZ4KAToPWQahNKLaGPyt7Ha1ZbUnFT7xefq",
  "key10": "4Zuor5P22BfZ2bsGa58PVEb4ChVQFX9Vr1XK1Npef3TMuv9E7tnSJDWvfahEAkH5zCWdJR3xDaSyy7ePDRQ5cbGY",
  "key11": "2cngaHMMDdrANCkj6M3R2ZQtpTAy3gFvaKoDrohGmTjeEYAn8729LRkVwQgt3HfgLmU48ysGxcpsiDtFBjgFBeU6",
  "key12": "5oSi2m9Dri9NZ5Prt182K9tiS2DHPPqdfD3iWfsDZXFtAB3899zTiwkhB3wFwFCpPeVHv6zsxbSZgV4c3FV7o35y",
  "key13": "3HmrWUbePLa4GPP9rLB5wD6rdZKCAa5PDuEKSqU8ss77WwTcgtDqZDsbB3Mw5CRuBPmaVGgMj1L9ifmGwF2cLuKF",
  "key14": "5WTkumgWdAbv6odd7P8V82oYDS1hTGqULQ3ReHhPYtXo7UeANaLZLEMbHDvK6Xut4xKpvwx4w8Ww77pBUhYMTCbp",
  "key15": "8QJcRr2RyJHx5KfbGBVZewFBTD4dVG2uQGftdwpYwaowoxASC18CrMa7YwdSKdRzEAufbdZRJbJoqgnC4vz12VE",
  "key16": "4edG2jqyP2anKgDzJonCJdjwBxwhTvTzzKznsBheEtJgYLtVE17BKZgMV8nV37jayYhy8hCRuPaEdJLAnsZGYctM",
  "key17": "4Vnya4JGEqoR54gnaZPtokNBQEXEXggwx59tLvzJSjozsS7kKorSouw2anEHQw17mjvZQ2LXdittzUiCTLdPJc6W",
  "key18": "59e6hbNdD6PVgMn4sAVwgps5GUiDTwkuuZjdFgxsbB4wMK8v33FF1EDgiAZJJ3KPKZB3neBpvrFwUUyt19124hKE",
  "key19": "2Mkg4AgWG6tgCX8yUkNGG1kSqnPg8RkLTy8dbZLK4rCy4Mk6aZYWacGuf6nqtN3cu8xg4cAqkbJULoCGSbbLWcsU",
  "key20": "4dioPsUzCqoqJmWhkRxMkYu4ZnrEj9PKkppH8SoZwWCBUstZS2H9ydghb4ijrsF16qB5me7xNWGTCzHuaVJg2x3Z",
  "key21": "4yhJ8hh8Ro2gKsRz3n8GH1fuWa4giKnRinhbcqmsjcQFaycadTgkWdgs3qBejtFLiw3urFxC4naSyLpaBaxBEZtK",
  "key22": "3cgpf8dt12gs7UfGGKUhBSLeJ8fxWyxZKdZ3ymykgBCJJMzaS1Vdaoyrptg9nbW2L9HkhgwtFgLfPHxyrSDthDrW",
  "key23": "2xMnp5TexJnsbZ74K1sAZ51ErBh42CeCsxFPbVPWCt6n4kHt8b6EJDwLeMg9jNrDQxYCWBnYLbTYrar7WZoXRHTr",
  "key24": "5TiX92pG37vFRzMcu9yaykKsxCxZAFobcoLpzASz5PsxbtHsAoevdSQbopkJfBnbWQawvQPqvpZXeeyfCEYnxi8E",
  "key25": "4XTRT2hjCSsb16m2jBAy2ekhH1PXQSNmbPy5mZ6DyLuVrGAFK1eJQrLTo6Ypbd3QBcsRHAHjzYEMusNJaaQdVeYu",
  "key26": "214jit5AAwo4FoQ3XF86SvRD82RqXGSvV9y5GFjdn91eFmQkj3ysXTuJ9FFPonNMU5Zbq6imQjFT2w9NyFByHXdh",
  "key27": "5kCmQZgAuDnS2e73B92CL1ycHNEaxtJ4B4H2w1mES867t9LEAGeLkNHnXy2YTPDs26denS7wHSLPNZFSfKFCjhXS",
  "key28": "2SC9nvTvRCXUiqLcpYhzve7v6VTtAKCoWsPQWfq95xB6yoTxdUJ8KbY2B9NSXwScCf33PQq4SDNnamrPHk6qye8V",
  "key29": "3QiDBCFA9uWEvq58h6mBSkxDKr9PQdHBuWwTDHWgYrTNRCitTjw8xTHFFFExt76QWEfeVmBbjDUk7sSRRbVjBxRD",
  "key30": "4V7PPoVbPrp83gtSgpe1q5xr7XLPbH2BJR8wWzpD69nivuN1pQRhUZDEonmqV44prXAmitCVq19sLrs8anQUwXT",
  "key31": "2wN6rc7qiBGztnshkE2iLPXgnQUH65Ws92UR8aq6hT9PGknD1DQBaF2udbUizWU4dGTgw4pfp2NyUSU94SBdthKP",
  "key32": "2W7Zts4DwN4Rgr2x7oin72MbF4gzDt4eFNor2g6GxPCcwPfoukJS8crTTtRaaDvkn6cMtPpUVr7RmBSy98WNraeS",
  "key33": "gi1TCcyamP12bvbL6dQtxevHvGrUsVZnJxJFeRncwueEfTAHBCoqFErDYgwMDQj4piqNhRkaSJSYcCXkfMq1EvC",
  "key34": "4JBRRSjuNXb1diYWgB17JD8D1zoYSezYhf7v989r4dFix7sARPjy9gt1xKYGgXBT5F6WNEWgKzAAWPykkPSfcEJa",
  "key35": "3DmY9aAHXY324WECy9ssJa6jfyY2vuyUyJvf4bAAJsBQMKEHAWdkiwgQuWkRabdKGV5o78MTFmX7f5hrDUfXEmn7",
  "key36": "KmW5LseH35TpbyvfR9K4XxUkELES1n94Sow5W1MRQD8xZkD6LS59ehzjetd1DHTGriBWabfesjitevX8zg6wDKZ",
  "key37": "3Jx7Ai2bH4XZAprxHDYHnwUAUjmZGRSG3EwbPUfXSxvvnFryTo9xNqJTu2t9UjGxzoiSgghYbqd6NG79JYwf9ADT",
  "key38": "4tw7xGR8Ad6qVtYtc58azCKXHdSaxACZ2XbzMgTWjZUSbTEGAWGytPHbVq93Ks596eTjDd1ERaJSQUJXRhYAPJSr",
  "key39": "49GotYk4WLP6v9kD65WiEELs8AohEHPq99jAkMNqQAePJaQ87CugUMGDkusY2KxwSrv1QFBTQ3jYMWq4aoejfNAk",
  "key40": "zyB8qCaateYc5RENc6ZdMnEoQ9SFbCawQr9HLBLVqNGwr5fjDcE75UpjwhWbScf9vNcz1ugDBHUom5PrtEv8d6T",
  "key41": "2mZBXdcRcsYtyBDB8hQPmuYsE4Pho2tdiCFdqRUQPkjJTZr8ddXzPz2Bh3gtvjRrvDKmTVLTgLNgNrFFTdaFmAe8",
  "key42": "4wR8ynh6WvkSkUuDay4P481yCTgden4CpysPXSdNN1r9ZRoy9kuMFXyP3SLZXcTZvCN56JU4NLtwFnEyr4ej7JCR",
  "key43": "3XwRmiNT2NbLRE1A3azcbfReY9AVwbS8qgDBpS9iCt6Msp5FMUSEuQ3jpSBttKK4nexMyj3uFccTU31t3QXYzh8Q",
  "key44": "JMZ7Xq6MNP9ha2PHUHHLzkj4YG9Sbx7fMbC1FyERm77shykinKUCxUH2G1Z4ssHTHcPQ6nqDXnnMz41CdwpXxRB",
  "key45": "4wppkoqPBzmES89bV9nhTneapXhAPKJr8YPzQGo924MMqh9xyH28Fu1kx6Qh2sZShYydSMzMvZcNoGqQKjeBvJ7h",
  "key46": "2Yam9A8Jqu6b8mEWRpAGy6KKA7sqF6rkMmAnTaJqoYQt2PWkUJwy9Wx1UX8ai7L3864SMaGWC75j9spza3j39Jks",
  "key47": "38d7DhyJ6YWcGcDFD2Lf7hN9C754bv1VWNzTDQMF5c3gc2dwTnp8ztw1ZLjVMJZuCSCZVfocDw2RgEru7W2uqKdD",
  "key48": "YpqUc46mnk7Cn1yVootAFs5cMBjwA2WZ68vdYyQaGGt9vUoQeKZv4ZacKy3jUuWHFE4GcBoz3iQMhZk2VRt4Mzi"
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
