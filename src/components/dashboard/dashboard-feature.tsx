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
    "5m2Day1rg4JUF1pdpiWdSuoy955b4zBkWetvrxNJvJ8XR795rLXhnNB7NVovTkVJwmHoZGXMBkrre2SwV3HFaYCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62a2jKR4jhB1fmWqNoCMMj6u2Bpam8JSChZN84EncnLRz5T5C8AfpEPKHfUTsRffZMw5PTgvc7xycY5yv3YZWWTC",
  "key1": "21D5SvcA1h1kryNGG3S5yFa82SoRMr1C292s56Jw4ZGSUS7Esn5RVTUo5mNMMAtVgDcaDL4SAcePmLiM6XvnX7om",
  "key2": "4ffKvikobWsQA2dMPWQp6BjgRCZEstANcEShZNqnA3fjUFPChqSt3PfN2RJwd8oWuhQViy1VBJdKUEn3MTe3VDoW",
  "key3": "49HXuFF7DQjstRaaTFoG45BurRfeiKUj3MdsPbp9yMMjdkFmqbvzoh28n6RZoPRu4mHdw4GdsewqqYKjCNJTWSm6",
  "key4": "3ZuvGyRRpDTj7VLuf1CpVqzRMA7s52oofy6PU8AjkdhyN58qKut5kvNuTKXDQ8Htzjti2hc6nJBKptKTojvkVPpv",
  "key5": "5ipw4hUvjbANry13we1KoqKvHsrsE8TtNMGCSdpbEanrwaFUg4bUWo3ys9T5SDGbETF9XVPmCzPQiQX8kmkSAoKW",
  "key6": "5E6PPVUkTPbmc9zzRf9ZJKUjm8wXRLMqk3L5qxUBsmLjK2LqcYMVeuJP6MWXNd6d8ANuQSyBTiKrbH6xoYpDhhpz",
  "key7": "3ReCwcxNCt5waBLmKoEAYW33YSMDW6nAJQvAJtFDLLyk2KgWQV2e9FQSiR9D47GJgyCZWV777WRotK61PtGa2X4r",
  "key8": "sS9XpZX3PHXWPLvDWe9Xnv5fswWVMXbTyJUUWbsqwdXtcdhmSAtGKMSxBueatTMm2ZyifNzKyLDnoUs8SKgTNgD",
  "key9": "3TF4TFDm71mqrLC8SFQFtm3sb83C1QH7k9NcMiktqK3oF2S8VVfKCx4yTAEkEU6dubj9J7chfWnzAgNP3jAYaQtJ",
  "key10": "5C1HTS7zqzeLmaRNc5oAsXYRHx87Tnpph9WzNoi3E2tYU4eK8Hpi4ZJZNufQKfgnjgeY7kLdm95qk2WMATRkaJed",
  "key11": "5PBw3AB6KDvJVjSc19yuy2fp7jPgj41njhh5SqXNp3A4tWk9MqpZP7zyALRHE2SccvwcQqfxnBUihaNSh46vx3ha",
  "key12": "5qpbVNwpUvXbZNKLUVE784TcmLT5aR1fPeiuTjznMMSaqYG8y6XbPC9TxSqAoim2QSjcoJzR5iDLaZi3akHdsZSD",
  "key13": "3yhKge3yUw762wrBo4timSeCSCX7DeToNMRd2hq7G5piTnnErTHFBoWxCBzbQTy8Krfqyy7rHuLp4T7EbynkTCaM",
  "key14": "g9E42AGpz7bGo5vxK76BTcdS3ux3EngSsu6kj2az6mVPHF8uguBqQENmPT5Szf2x7rMFcs39cGwzLNHswQwKcs8",
  "key15": "2Y3YsxtKHjnfVpFXTaFFkyegCFeTQBta2R2i4oD9RQFrqgodnvVtCSWuof5qMN5dYvZUbotdtGU9aogBSA4gkMdT",
  "key16": "4xYGHazbfq1LejSiZ5JEdUWqQjax8RAmACPoqgMQ1vonHUgKdSvbxwXZqkuT3x1P9iF34sGLWFQSkBcsQLWEJcp4",
  "key17": "SKDohJa6atJoTNnKkUyVLkDt94MjjAWp9o2cDteMngmMkdoSN9c6zmWMu97bv3DewfXZXvT1NNtn9UuSBYsgTKQ",
  "key18": "Qk1pw5Hei4royYQvrHbbTMWahBuQbKiT5upbRJ9r97jLZuiMW1e4Z74m8mSuVQnw1PgBf5n6wFuqQUZ24wUQ8z8",
  "key19": "4WcNvst86HLMeszadLrhC4CdEehANh1tMtKqwmxQNJoyUS9mVeoRzHa7Uvr8mxc4F5j74DTy83DzZWoVH9BUuRHd",
  "key20": "5XjTCFhS2YmNLEEP8SJnG1gvWNAGDDCGVsWAhcDSLABwVBKEmhT2jsudPniwQdEwnBt7UXv8h4pDSfai8jiofh12",
  "key21": "37FRqViryuNnGzzrQWFNuJvqC4tqVsfDdNU1TmA9Kz2qMJfpQtH4m67FYC2EmHdDhN2tU9ceCg7Z9XuajgwWsmqp",
  "key22": "JQR24mTHn9Kskf6qYa16cu7yY9i4NyJafPjMfGRjnxNb7inyJtCupv4PoY1tQQ43hutRLk8dXp2wZ12boFSWT1Q",
  "key23": "xtgZaxijL6MRBDzhm5Rk8FLqcmepMCEbQKNVjUidCfipLQC8swkw8GRvfWkHmk7MufZRi5zS8Bvk45AKsKzQaFs",
  "key24": "3EdMtk737UjrdJtrMwgkHgkvT5ex3k5miJWtskifnFxTrqSJH6G9rH9SqRXhBgTqAhLjXVo4kuv4jtCK6EDFJL3z",
  "key25": "3VuAqZntnFPpV2JYTRjEEf5i8hHtBUwP6drr3diHtoRn4XK9KJ2VX7kvWV5Ta1kg2Uox2Bw598MCAj9oQkeEUKD6",
  "key26": "516z9e5arizGdEqa6sq9Ub1Nw8kjwDeUgjsVfC2vNxaUb1NokZbfZM75r3BMiDNDQcUDHHuJzrJSX6czac2KZPHp",
  "key27": "5gm5LG1SzMpW5PZojRNfm7SUJ6NLzhLvTUJSaeeFHJ6mGhfsfypYnY7sawdiSCMgDzzEeSsLK13wYCR7Y8FqPWde",
  "key28": "4G9fi1U9puas6TidjqK3XB4tRs6GnZi6avw2jfwABx6cAeYhWNqJT1umf5jYmm9nLx3kQqtvG7RKFZZSAzserd44",
  "key29": "4VVRCm8n61A9Cjfo68upLyHR5RHwCYUxQPRfiQBUNT57fPorEymTJWUxQQ7beWqKmeVDUpUUZAc3DrUx6ZwDM2Y",
  "key30": "4oBEYxjmuQ5YJirVNm2GSUdtux3LMZ13xR8urAQ1winXsEnt6ZF1ygnm2A2bnCNu3YDEttuZaJ9X28aqkWKviovn",
  "key31": "2GcjbcsN7amSN7Ufcv7Cen5Yg8YpbsXXYENq5JqRBNxWAKLVHaNY6jutogqo2hYv2eUKNE6dse17sJFBU8da3AdM",
  "key32": "2qau6auDNYVmDEfwKV9zhKmYUzCQo9pcNosMF3NxZVgrqvpJ86mS5Wk6jVpczTeuwozQPQemMDc4FLJjyvgtDerj",
  "key33": "2gv8Ei5B4DiDkhdgLKxz7oaNqkcR2ffuxaW92jKixfahSEYhBAcwQVy6cE254A5puEv8hQvxMLY6SqYydxqxr7rM",
  "key34": "51CNKW1bn3ENKLUCp6VwXg3EfsBhQQAopytMDPTjra68XV7e9C9oyfPq14yEBBZamG1xN5Y1NR8bc5qRCwXHnWM8",
  "key35": "2feVV8WDa3kD855ZdrxVyvsUSkLasgfbdbTgSHG3kbag6t1RBjYiWoBspK5qyaQRANAZVYW7UqrjXtwz6fjQ2q6b",
  "key36": "34Aca7Xsd8istLZ7r7dMnfFJhq5Nmyx42N1EtPAD5FxNfNDruhzAskTRZKTypD5oY4Bg7s25nMXymD2mrcSKQVsF",
  "key37": "2U6CvvHuUYSkyTDZpeFdibjH6MsRtKyhTRFKZ16CNxvfahCnTEuJUdi3G6EnUnKujScHSQBFRo12DqT7zMSNw52w",
  "key38": "3SCFzFWxeMigckyum5NmZR6m6oQGHTeSwEKzvTH6FeyEQte9N7vSTMcXroXNYY1zX7gME7DWmE1S9R214G5tWaX7",
  "key39": "3PCwXBYHnZq14EqzWVUmfJKxvQw4LomKKVBh2ZnCPiB9aN8n2FzRFLpc7D2wkZVZpfrW6cWbB4FPv5sMtDKMdeWz",
  "key40": "3aD7RFhzqNJv6GTnKAnfcdWbisVdAjp7gkDFb8en6gcWSEUMpN4Ze5fqGFzrYZrrwuKXrqEg1kvpe84aBJ76Vqng",
  "key41": "bSBQWyN49Jy9mV4txQSAwDeJFD2vtFS2qDD2rbi75qayayVJ8FxcTj4dhBsyoXVNypyP9Fue5GvnLTmUf4fMnCx"
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
