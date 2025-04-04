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
    "4CUncrGE6oYCDe7Bi2N4hyHEordhqVKFz2sgnW3sC62KCNXrZBBkBoLLkciJwyLHkmEVkUmYcVVBpXWqauyGeqpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38fr3nnGS6KZcUXsvSRWuSGKa7Lb6cU7T5wPXAXwGMYHwJKaKzvC2g7xnXHpHqdkEuPkY6uCu8m6p3vmARFmhFnv",
  "key1": "kqV3p4S5fWu4kGtwobGLuhxrb6s1GNVgaaSTU4DM1KxBsshT5SEDhJf8VRkY4WhecJJDSZoNSwqa8Mok1HCSNcx",
  "key2": "2ibnLhy89uhp5s6ThxhWEhkp4sQnvCqzM8hzwTL5rZgcQSwkkoufhwaGjs3gc5DH6QXdT4gsYVGARcDpnm6XqDbr",
  "key3": "2ENpYBAmiJeXuJBzkNX8yrhjhuqCUKDbL8EzAyXh1H9DLdkpCc34TXDP4UNVEPpuCHVUWf6zAyV3zGHA4j6oiq9X",
  "key4": "5qhAUJ9s8V2g2FsQpFH6pgxnPiVKs7FTJeLrUFQGoTac8m1ssW8qdnbX7q5q88rGfAAZsDY8GVD7nyRpseagakm4",
  "key5": "267Jj5WypXUxBSD4GJxXDGDsmGWeUpovfexVL8M1NPMzrN8nUmoU8gdDx6MLuNrxh23KdZJGgcvT1a3uVYKVLMGw",
  "key6": "416BhCpockJ4GXyEw63j6KfiorLHXwTaJzSJis1eiWRx7zugEjG9brTCpqjVryfHwE4Us6MbTYyctJUSszjEYxDk",
  "key7": "NnwdDmWm9SC8xfmJRxrNCPSK37HTafcU1cszwG7wNugpV8yZ3mjVZ9mqZ8jvmD9kVby5vFFUSEEAKyLQg4uLE7K",
  "key8": "rZiUM18Lu89V19akrhv5oyfVPS62PNMAeJdtubdmUWfE3uqMmfX74DkXDibVcDNpShYbVox9MqixAqV3QHNyYte",
  "key9": "4xihB3MkvaWWKBRNHw9X1i9fwWcT6XPiPXYC6EhegTfxnj2X124Zc8ZU4Lr3XbUcowZTwXMY3HS7MFQfuaqJhYqk",
  "key10": "5NCw7Spudw5v8djCSaLhnmNp4Uz4ZhjtHof4DhG1RowTQaCDk5YG25sYF8WYdCdfTV38BMC7b1M6MmAjwDGSADiP",
  "key11": "2tBjTFPGPXJGVz17qdbM3f2s58EPegnCws1tHxwPjm5jS5WjeQRt7zKxvMhWRoKJZThWCAs168VNuQ9YZnK3eUM8",
  "key12": "3KkzisnKHRciF3K53Kj85xcBdVcL4Xma4xxb1vVEdXJHN7QDo8S4bZ3zEWU9hKq78im86MCAXzKzQJ85Vuj5G1fk",
  "key13": "5wojBdmDZhWnAYNXKgTXzBCExhBy9KGB1GimkwTFtvHDyoTkhQUxufiuKkhFwF1o3acP5BaGbFUgyhU7jj5MJjXB",
  "key14": "3Ga3nvWMXDECANjbB1wZCncSkzSTuyeY92472bDa3gneyNSH25ceUD3cFFu7xWJqZWGXbX8wM5dGkEVeGf86BSUS",
  "key15": "3HuVQ7UwnQVh7hNErW82VvyPZgnh6tvr6Rr7B5DJ5UMLSQ9MwySzbHJhnjTzZV9RWvsbNWmm6tczQpdi8QWxSeVz",
  "key16": "2GHMpcQB9kNb563AS46DLtKmxdEa42ac4HubUfBdSPfG3vKPBpn17N1A5vvf7XYiPdVeLjbedzfsGumtQeiM6DJv",
  "key17": "4AB6NfeMUHaEbXRQ6KymCdzmd8nJZF7BSib6nUnkrDMGonNNTjAt6GzrQrBDj9jYa2uFxzqzwq3iFZtyQ3PjDx8p",
  "key18": "5yghrjTwmr8ytFfSX2LC6t2C6vZPPpbYZychVbgA96VSRJbGfQPxTg4DkkDs9Ma12Q4oU36aJpjnYwFTuqaXksdB",
  "key19": "NRybYbwqci8nTnwxib8GhgvK2T4bHrRWEgf6edYqTrZZvSMHUZfHDsv6NZ21aduVY9VPKFz6TKp4iDQZvC1SUvU",
  "key20": "2uqkYyvtoyb6iYfA1Hspdfe8HZEpx4DPrDaWMWgDdSzkS6SrW2VjpRnmEUt1Y1QECSYw2dM2YcovnhnPP3ST69tz",
  "key21": "4TmvtXnbVrxhp7nWGHM8cxGnDn1AtkQwQGd6bFVpKmD9ed3mzkTb7tJ4YptnJpfKYA2xeoRu3tqU7r5dEycmmWz2",
  "key22": "3FSeGbKTgaxVVrpkXdxMUzUXGisTE7m51kKZaRMYC5MZtr5QQ75iptTMWAv2CPre72Fpg1DkWKeKsqf1GsHyL6RD",
  "key23": "3CnxT1fDpzHiiYHfbe1Ma1eUH4gTzcw4QxHogtFsXhAeqz2oEDBvCSPtSSBUQznYfu9YrQNFtJMgTdUEmcvUZPeZ",
  "key24": "5o3bgAcYAQRkyvoc2fdk3xKeyehw4oKUdVLracCERBg3FMkMpbjgtqYGvsKA4gn27LjrB6n4VnRvm6LWFKk8EpHL",
  "key25": "8YHoBgVbuLf4siDMvcgitpbGKxGewnRCF291QxVDJByjqzzciRKq1CeDSdZEE9FyfX8apvLWCQW7Ng92cPH3rap",
  "key26": "4EVvr6x3Qvxu3n75DViNBTD5KQ9VKAnfUNX4BWcLWGupyEbuuBNEihPma6LT4MAGMFh97TD8tPKGVKsPXL7JaKzJ",
  "key27": "2yyShkgUQVcxdzvHss4Bp8VyLFPPvBa6TNArfzqGGCotBdZ99ebGnq8QKZRdws4s2caW2hvE4GxnCas7hAGG9L27",
  "key28": "52cQqAHbesqaMdZFCxQK8itc2pFVp1d48qqWimEjgqtyERq3bsg224Lv563kTeK5LJT6sxJu1tb1jN8zpCEQycGC",
  "key29": "XGR2SMsJb5A1NHxyFep9352yJTcSsHnMHDuLe5R4bG1aCxiDZvCuw4r4PaA8hx6mXrjnCGdmi1SzCFaKhy6kqrX",
  "key30": "2sVhhg39LX9NdgDFcSMnAqHTgcpSxQV62GQBTox8h1psMAFfUC9UnPrM95dhe1JaMmcFH5QGsLw4ajqHAd91fXd2"
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
