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
    "5QKyA2GwczSuuj77scc1jFCTaEz9h5tpp5NErmjx8yzzHfvVoH69sasqa94yX2bRPh9m2DpqF9tFjkiKECoDQCci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jt3jfZqvj3PwUerd1cwjUiWnzGKiFCkC5zyVnS2F8zLepTivDUHeJKBJbG56Mrnw9S3b1da96JBewYVNVZy7oiD",
  "key1": "rKbFRYfy2V7XYVijWS3ViLMfxE4DmcKWjLyGDYFdBmGmpWAEzFeVus2SSWYPY1WhbTZkdEc3H8Awm1mqHhYah1c",
  "key2": "5juuibGAf8T6tCGBDcBLBU2928ePUEQb7aGZUvAX8gx9b448FNZBQwMSBNCsAG54jxhd1JSNyrMRyWQXvjoeWBK8",
  "key3": "dnzB176nY7XHpJtL9xHuLqLXTkkdZ8Qd3uAAvKFLA3cZpCKPEVC1FEXQ6QzgcWXo3fk3NDX5AtmpCdaSiRR6Z7m",
  "key4": "45eqGSA4NQwkDDSuyqxjooTMKaP32KZmqGDDia2HKhzdhyPn9uF12BwRQoLojc5jf5s4RqQRDT6nNXnpqeqsfRzQ",
  "key5": "EYQUeDKuvne4EWB6fdHstVdT7a9aR2MiysLoCmvEHvpSF6ww9CDxwrBVwYQB2o1kSY1dgZKU5QGeQHvuK4cWuNQ",
  "key6": "4831DikdScyh2QnmuNrFmW5E8ZwLtf483uYP1ExG8Fz3XyVHCURZqwVKu7U1deoKcVvt23K84WVzSaSZKWte55ar",
  "key7": "25MQVZuzTr5FbNPKDmE4NRWWTgTWotEJvfBihtNVDZQri86fWtXoLhvHPAWWrZDzpsKc9QFzP8eMh65yD2GoafmL",
  "key8": "2LvsqGepHsfSh7T7eDn1UhoFHM8nL9Gz5N5AFW1DryWEqVpEScd625dqnXibwWMLCaxZs51BZBiQ3vTMx4wGCn6K",
  "key9": "36n7MGCdssRGaE8yDH8Ev9DmXnDjiKg9SgNWKJPpJx7PPsxDpUR88JdLbTgJr2e7frPAXzK3vZTYXimfwne5fRuk",
  "key10": "5dQF2oyKQnWoWyY9T6qyZ9RxwNcqFmh3eiQ9PZsPLBc3qazh8ACFfZgBkxJreYQ8AaxqPHSyo65xEy3qgSvcZzGv",
  "key11": "2A1krxmAQ6SSkBpP1SC8XXLX5dRAPxFPmDfUJ63hqmQWLUiBCPN9FqHgHuMPRZ5CVwdnaGizo7dcy67EWKJZrUQw",
  "key12": "sehAGFJwDNVNBMi32uvBnDpkVUvMGUikqKebF5o9RG3YWRJUbczT41WCCAgAHq3EngWjBBKrk9WTJBHH2AT4e1W",
  "key13": "5wAkwu5Vjjv8rJRyuYke4KXWJK5chgnX2SozUU7fAJFyDGDSVd4mUvVzn4Lrczs6zCcuX5RavPo2ytADjNYevvB8",
  "key14": "dqBnQQr5cJs9yPLoTpw7wQ3JiessTZgy1BJXqYGXCof8cWYY77pSp8BNV56r4naxFbm9goL5D1osV6LFQfHwJni",
  "key15": "d7KadpYW5zi52U5mfhUwLZXBGnJgdQHrPDkCYCFuSBnLZt4djf92qgauSBqCAgLzzousLtDWSua5X2Fa24zh89z",
  "key16": "34UnvdrYqHKMHimekpfNQkSh9KMtmxHwvp3Q8eqX2bsietTd7x9FELb43aEF7Tg42Yx2qtTsWdqT4CuCzS1HUD1f",
  "key17": "AuWZpxiCWxVvakD6o4CtdYAMhDYJaqkX39HBh4RRYtLdAA2CD7pdvtF3ApiRf4BLu2ZBDRjWpkGjxMbxdY9rBvX",
  "key18": "2Dw6VhCksXoqyiZP4ozr3LAsP7xiZNnGeHVBesX3PR7mqdsLKukmzYD94Z6R3eSk3XVqKpHWQNCw2D8nwwt5PzhZ",
  "key19": "4VaHaQWjRhTstavKqMtManVZwvFBwzgcHemsDGAqUUv8J38T5SG9AsJyi8nKAZE6G6xY9P2KJ5Bc34e1hepyMnJM",
  "key20": "iqoYNcMCB7vBnHvtyE5oFed3TnAhpA3Cqs45XHJCmgRPPmSXH1ComRP2MS2y7QaoffjqDePSFgtGjvZgyPDE695",
  "key21": "2dUdLysVC5CaMToA5smDowFx8TUjBZhQpoWg7fdUHinMYhGtgrkvGHivNve2DvRrUZVmyrNzSoxbEFPv1FGso43z",
  "key22": "2hJPZvfSCWZNs7ohx7UHGyacPAx6muCi8rRSTn2F2AwQkPGQae7m4ZYwaPTFnkcwi3VcDxc4cqYb3x8guugFpVUr",
  "key23": "4fdynXjmByCaCdKH9t26nrdPmKeiLJBP4tyxv51UmU4kGL4zBdU3F4wd3HjQod2n9KxU18fXRnxPDSf2myJvMsJY",
  "key24": "2vuuDuoQESjyZVEifKgdjUs8koBEoa8gkrzmHtx1HWvznknZR4LBzSsAkSAwkxfnW9dhXLndtHgqU412Adn1UjML",
  "key25": "2MhwWEUHmsdiGcnDqJbK4cZJdZunF4CSZeg4PrWQ2bH9SEtY85adfHzYR4e3NFRV37DEmNv3m4v9Wh2yW8rPtUfA",
  "key26": "4Q8NoTWCXcKww7ug4ws1cqhJm55txYhxmVtBDWEURteGFctSjFhtocNbJtK6S75snqN6FThBEPwcCXu4KcA5NsBZ",
  "key27": "3jCvN5AhhHJNr292V1D4NaRS3d1R7vL7kLsDK28nyDCDZUNjpFQ4QJUNTVKPUaU2ZEA3szj1WurovN4pTsy5FEev",
  "key28": "4g68Rb2ZAon1iNWb2zs9H9Zf66PkDUAScyh9B43Gb9L9GUCBHQWFLsFbeNGZiQC87amejms7FGCr6AdrYpV5jvL1",
  "key29": "5Y4xrcTiaVMxvzJcuTRByJ7pLx4p4LLuW3qRSiNQkr6JwS3HYq35Jx9cv9nxKTyvASeUGbq6Lcj9NNhSU8KxuMxt",
  "key30": "4PQrXena8NNkrNd98yUPNVL29xgHkhQK9MLA8WgL2jAw9YLc3Hm8AiyUJMeTxHUMox6pUo5gsDDhreJ4z79Kxg1W",
  "key31": "ZvoxerH2TkDhRoCc1YzXG8z1bU8yWt9CBaMrwJYDiue3coQMioSe5sxMcEgTpjkwC52f3Zxgcui6dMjSKhFRSFq",
  "key32": "jDx7DQ8azEzMmVWnZBpaS1o87Y2CJQN2CgTMiUrEkdgzadhwAjCDp4KW7pwkFeyT8bCfn4rdJ2ohiVTRP4qB2Di",
  "key33": "42rrF1B2g4yxpvsTUYpyfAwBQcMMUtLt2BecPFb9fpaQxR5cwoLeSYwXMn3N9GVhMCCNcDoYpM1NAQgFM5KQCwbK",
  "key34": "3LzNeX8Ve2qys7r24NKowqp6cAACdZ9991Tw6Q5bXMmZfizTvqnPeeik4VmbKQaBTLGLs8qFJFQeEZ849BME4zwP",
  "key35": "NWaFonvS2u1LTFmYgRXGTLz9HMwh1BHAf2QYugJdPBJA6u9eAb56rR6uqkK1FkD5HYpCu6gedWtbgxeEs9P6J79",
  "key36": "FopoNqrLTQN9tP836ThfzQaHHJiRV84Sb2HcHJJ6VfhBNrDehmnAoHgWRHZEpG422mNMPUdAQaiaozQLw9AAsyz",
  "key37": "29u7fagTdBSTdG3cxbS6YnSb3U7iLie5UjHrGNsGTb5DPTiP46u98osGZpDnzjnRRoMtYyZ8v4nVwE6sRqa95wiy",
  "key38": "zb1beFsDnC7y4id2SRRrqp3PAQFM2WqxRaR8LyBNWXYar7mck7nfKsKoibbUxD8CtWgsw5MKBpcF5suBhg1KhtM",
  "key39": "E62nLGqquWMU3veVhCcn4UMeqD8dGxXymMAK351brVNyJF2MPY9uyHqwPfZ92ksdBK9QAja8W1aAf1H6BAwYs4T",
  "key40": "2i5woqHmrjVMakYi6BxNfktxa548Yw6vneq7bN4g7um1yXFGQ17wYUFcqKTmAZrquCeKdEmCRBeMS7qtdpLj2zPP",
  "key41": "5iBaYdUQ4UQgzpZPGV8UvgXVQ9efFtLquvVwy6TcZ8R9XiPKebwnJKeNdE2muAJVqAWqmhnGgSLimKkvEfy6P72f"
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
