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
    "uTM7zy9B88HjNMmaEbXC8U7EKQRD56yujip5KDoU6FtYPV6bwBD8g738HWUsk2j9U5VpV2GZo4GDuXHA6iuYmKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTZ2QLf474eBMpUyEAqMXUK2M7KDM4nnnKFs31u1QGasXPsHao38NnAnvkVUh37bSpps7vuhDc4kDRExQc7DJAr",
  "key1": "5JjCRxMy1rFZt78e9rusJodzaE9My2acFdY38BPVExRKXjuzyCdcYhjKN3FtRHaqn34idwAk1fyuWroeNVDzTB2t",
  "key2": "5FChQ2vM5pzXsFz6xaGm3bTEVz5gXAsHjiFzeunWSPtfctk1tuJ37YW3RY3ACC1fRsrh3cvEB7iWrkUZMbsq5y44",
  "key3": "53xyz9xMFcwE197cDPFA8a6xynTAH51zcwUxLi6WhXCbEPwQ2y14eq82sCqD44Hq4FUiczUzvuTbFsytPvkXHjji",
  "key4": "2VotwCPVCZKLeMwRd63bXQsiRiWf2rwcTEQu4i9vLphw7gmpTpgauHc7UCiSvJouZgXPUytUr4msM9hoBJwmDq1A",
  "key5": "5kHXPJUhPk2AdgmdfKLMQSGRAnRccnjUjvREnNVWu6o7c2XgHJrubVrDzSbwFpjFZXDUD5yiCTgK1djRJF8TWZXR",
  "key6": "5RpecXKQP1hjRD9ckpiKfJ3axge8JLXd72QChTigyxQSzwY2mdpSsGgBt22hMqAuXyfN4SVZ68fRMETSXsHgL2a4",
  "key7": "4ARDCaCSqgR6Wc6sJ81ebb4NkySGdghZFq5TW1wpT48YysY8FJ4MG9sa26HXnQFpsf58bkDxCj3DJf8Cgc8G8R4C",
  "key8": "nwcnVqLAcSPUuPN1A7pToMmiJzniR8X4yeWoozsoTRHboqAYu86ucj4LorKUpMmyXKaowim71VhP5aeqGjRd138",
  "key9": "PZfgeQVRpu4dNVPhpuZ3fUFTwc8ypf8mvYxShLEFEWDgzTvmJaEDKo1LVWwHSY7e1h96nna4oyTgnjcn2avVMqQ",
  "key10": "2XdeGQPa9G58UoVrfWQDYrNKonKFQKDwGuoh8Ai7RQygnbK4TVq54GVCEHNc9TP5ewqVWQzt8i2XodWo3ttYzmyo",
  "key11": "3TZQxCCZGhCVEPeH8kojwrcQwvQuxSfXfbCFn3NUFbcbQD8NFw1SoULq2qeL9amHfB3VUo8iMA3iYKaAzw5FUosX",
  "key12": "59uPbNwVPrTmKv1FmzY2qC3KTkyHJUUCJSDyg7cCJSd3phMghBWhvEiYYtDhXKHYXGfrFfTzvrivE69H7MPgibLG",
  "key13": "5oU32M48gfKKVduuysnX7bv7VW67BbiYq1a2sDYMZNP1fKN4PKKVftPuxheyBPpeub8BPpbRJjxGUDaEhvKA4Fqq",
  "key14": "QHWeymPgcNvGAH15mYeAsrsXShi81ngPTS7cKehfidYdcofdz8MPb5tyE6SLkMCe6i9PHNeAkqSF7eKYiKgEkH8",
  "key15": "2CZ9yartveY3Sq9Pez3NwbDbMUeLJnZd4b5RWjwYE2C4QLPr5CWA6bKoDq6tvFonPd8dbuvBUweo2PoKic2Zj8qm",
  "key16": "236Ka3V6wFiAqNcepYPJGumkSQuWuFo3TrnsUP9fGA3vnZv4fyqf1L68JArJh6HwQk1wTv8UNFx4nVynb6GKtFDm",
  "key17": "3VzLPoYSwHvFzWA7eH3vAuUYnmcGkcDbg1EdhHA79WfRfUqTmTdcjjop8CBHHfPTHhnjgQEz2kgSad3faHUkwssG",
  "key18": "5m33JqUMozjP1MogQLNge6w9oFk11Cxu5WehGz1NpKRjSu8525k2t9DWbZcJXQce4RTY5kBeq4H7uyUEBSXVkneM",
  "key19": "jrwaxyxXnp7wMCRPzbQ7h4cQ6m2ZzHoApiA62qEUwbVotf1sNpUCGA1gjGCqnj5CTaUErYtGBD9HCQENLi6PEjX",
  "key20": "3vGJiSLa2dN1cZLE8xqyv4W2mHPChrreMdRSXjJPc1QktifWhor5caLbsXXJ9WnxxK7vEL5WkrmHQW2qnpUBuRfB",
  "key21": "4wSme9tT578hY67f2j9z9yo7HwPLGA8qx3WaedkyswbcRVoLqqEAdCQvsNz2o3WQNrZJee28UQxcM6Xz55tQrz3P",
  "key22": "2op4rmV7YY9Zvdd3PyY9vFYDzyBneeyFYAC5ymkbH9VyX2C15XDdjuBPWyA7WXrUSnXQevTqGf7GRgsBgyHYob8G",
  "key23": "h43wAe8zUFR9ZdrndVb83P8ru6R2MrNwdVgpXzADfnBo4tmxfRmnz78m2soLYuVvTE9dR64xPA17zQbG7YX7S6Y",
  "key24": "3vCYBKWsx74eAxwzux1VqBqJEeQnLWKcPEsJpwbf8F6rRby1nLsBtUYLtwSpF7S4QzrnyLpeK3AKMZUriXPfLj6N",
  "key25": "4fnnphZqdJ4wSokteSMkbPe7eJRd721qAbzgi7fzPH3oKVr7e76rJF58JxD6F2atTwZ8ahzFYRkKnWCMhs453FFx",
  "key26": "3DRXhtQ69Ykj1tedsRyL4a2d6EENvfFBNBhLLcoUjqxiRnq5ZZ66zyC65XxMpkNEfpUsmMJdP4HNkvn1PA2zuBnz",
  "key27": "bjDWpA24HrPGwxwpAz8LkmFZmtshBoY9Yj4tiupvk6SMn7g1yEoAmDnFiTjahNg7YkRRXoPpaJ936nYqgjdxkjV",
  "key28": "4TvTZs8dvhgjibqFrBPSLRtdUuBpU5ojbtRT5fYUUKJSQWZDzaZsvHPwBtFWCtSmXzACU2wAgc4RMskEN93DTADv",
  "key29": "4WjXN5PdtRNiJWGRYo78kXiMVYJrEoDGgDFs8cdrkkPCj9bPtNsyBtHNN6hjSSpXMYp6KsgXZLoqXZZ25wrWcpwv",
  "key30": "39QBp8JKchT8uc9s6Q67RMcbQddu5ddyQQ7n5tbR8sgipA6SkZ7oXr1FpbJm7fQVdnBokAMJKhh65FTH3JcAYe1r",
  "key31": "MnA53LDxLHJbEeymBgYhR78oeuPmntoe9ATYcbHcbRpDFYy3sJ9CSrEU336RX6zZ2g1Uyvazsf6nDf97AmhHDpF",
  "key32": "47y71tsXhgyTg9zBM3mjUtCS5SKz2fpaKh5PruXNcDGoTT4mfsGWu3X8VT6i7dvbusAwgmrSSqasMtzJsA9y88ot",
  "key33": "3ruP9bb1ndriN1vF5R3nKQNyZSFZgKYjSKW3qFc1JK1vqJCywNiVkw35VbVtPc36GY8mJ3ViDSKkHFym2AKJtKha",
  "key34": "3ny9UZzyDKR7DCMnUaFrXx9CWLPF3SfTH5B1TmsRVZqiJ1Uy3ZyZbm2z3t4uNBCeHZKrvfeYgZzDEAySPC9BtjTR",
  "key35": "23y7x97g78w2eF4bibkoUjuzzpLaDfNPQ5a8pCMYmKBWxwAuH3DbbVs3pLWaqRwGL6a9jSyDPkoyH4XwRmNXDcd8",
  "key36": "3WJ68rZFrmNfuBnVrHb7GKTxFhsLv8yJZ3x3ZmCGABjmaaffAShHFABEjEt9dn2cpw1ps5TgYiGnKWB1ZLAyXG9G",
  "key37": "4Q7vsEy8ZVKiubN1oqkALGTnXFbnMFEoda6GvbY2ckzTThNm7VFuR8eYcs6xzrP5qRdSTj8DKQcgx75mSXN2Q3XA",
  "key38": "4m7yTyReh2dFKpJpRC2RcnUtr4tk5ZskRh413Z51mFv3mP7ihgbwDifyoyuEcVG1HBu4Ck7YyVMZqtyCFsELgWqg",
  "key39": "2M5yowTiUtXZZdfyNPmqi6AxDr36ghdggqewkjM7YZoRWCzxeBT4ieGxPr89TwA3eCqrfYJKPmAQRq3k2wK7m6Gy",
  "key40": "uo5ShZgRHuHefqQrxdSrm8xio9hiFvXyLT3hyjdrzeBw6kSm7Vd7jaqubNReEJ3jBz5iQjTGXfQFNznAWNgpSqF",
  "key41": "2gDKrELq9FKSLR1HoHwKiUspKLW5WEdb9PDMAfPtJKgeiPEw2prwpQtdUE4SbHEhRDiPJpuXvFmAGUmpZD8jZ8Em",
  "key42": "NvirodpRMBaSdJuvna33CdugjE3v5rtbiiYUMJpctNpmWPJf6EvqKPGAJg5MsnWkHqHo17WNZNTNDZc7g4dRaQ5",
  "key43": "2xQg81ohC8x2KWifM8n3zMHYfeGDchJk6imLZxHhePCdhASpSuUdAzboGPQKTDgaVbnJE3bagiCy6z3NMf4SQcZc",
  "key44": "3BjPGKaVFkTvKUiu2bzRDLPgKMqRZy5Jhnd37kQpYhKutoVca6jrDD5jfkCSwGtmBKq8EqFm9UCjLgnyd9CUrW28"
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
