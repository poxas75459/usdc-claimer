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
    "m7A37CXS23evbEwxW3k8jtkdQziyAo8X6LSmxj7hJ4wMafU2FgR4G54ojciBMNey1WFd9njmjfUGfcQphnwKw4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pJVyNazvCjodBQMvYReq5xRHbBLPv28n8wMHhzD3xQC3GBp3pNtaT314tpLgBFgsvoDLdvV49h6t6YxKiBiRSG5",
  "key1": "3gevNbUFEFVksB2dx4RiD8TxroeqpQNQyDPmKgoaxtv6faC1icAKC6RCvL8oLrsEUVzkYMoG47kTvRddbaCAdLJJ",
  "key2": "3ThMeo9uYdGsbqAGhBtPai4W6XFdCmGcZ247DZhbZpHEVxqCapZLb5Xkt6kX8jhxpBsm2fB1ZcsWJ7fwN72M8pp5",
  "key3": "3w3Kowj9ZySrqqHiZm8x9y8MuLxjkTNC5RGT9BFsCsK2cWmPoNViWsgmUrA2KMbZfxRbCXQDakoqf7zaXyxfgjyh",
  "key4": "2RdSfACpUJSQWiNfcYUEaeho3c5zHcW4YFLTbBM8cTAMVAN5gfUp3EZBHhHtMkKN6xNo9B7yh7zGGcZst7Z75S78",
  "key5": "391eRBz6L9W93yY922yBFBN478MYddUsyZoKTCWfQVYXcjRqTPsqrABkCDAaY5oHuPJo5AAKsfZ4a2jdDZ27g9dr",
  "key6": "4eyVBfQ1hLRso9HA1hDtJNetUUeUG6rDCBk1pqzXnVWttyijzBHncbZckLJbC2Xke77i9FohgDB5tLAcbJvT5fMa",
  "key7": "5uhPGZVqfSEvp6UQyunS2kZ6WqUUk7pUq7pohdUyQounxa7i2mfEvQiDH9zasz6Hrwu8TJbDeyRaf1J534hhCp9H",
  "key8": "rVNbzovGSvUp7T5NQLoxzQXoAe7Uvmqx4PWarP3qRvNfxKxJwp5jYXNptaYL8qEZJBUm9hsw3btBshyX2p9UyRK",
  "key9": "uvxDQcoTvbaDo5RBTSGzVkpaa2dDLLSEcZJ3YRVULJMTTgCFHa17VwpkrozHY7HGtUBvHPCKuoH69FamuGuxovD",
  "key10": "5wbDqfm3ufTgHmKGaweiEtiJZdMNhGfVTGKcm4oJzopja1eemNV7uatRL1KP5htJzyreDySKE6uiSuNUmDiXjZVT",
  "key11": "62y2zNn7NBhtVSSA55KPZgM5G4RyXFNqasaATZeiLvg5QR7rXeJN9YoCfwgtspUE2ynfY3cBxEkDqXQaSEXmAToh",
  "key12": "5QT3VvGdbbzk5mNRwkJrJNfWF5QCmg1zU6QUhQqLYBNRrVwp6sAvgG5DbBy26AN2VdRxthSaComhkDMmhFBgCmF6",
  "key13": "2W7Fm3Nefe4TUALMgLFmAuhmHPzNPEWuu5PMRyD89EgazXmXZ57DrMwTqJZkYfBMufXVtz46mEwwgLYrpt1PHHrU",
  "key14": "jCKppKmP8smF9yecMjGmSg9GmfmbsaioGxkKpHWKPmS8ACv6zKEQrVEbFBjFg3JEzns32BgPQz5hcTD1CMNGRn1",
  "key15": "5zG1cfHCoaqXfRmkjxEYVBQUWD3eKig4XWgHnKPf3xNoKpKJqHDmh5CGdC47AbDQKutE9d8gqZSrwDXyc7BPQb1S",
  "key16": "APdUM4QBU4ydotcD2Uh66pWAXqQQLprwdA7iqUMxKyFZPQfswjtFpgNecgWgQHfZozuk8NHeexHCe34zdgEhMur",
  "key17": "4kNMKpimGaLqtnmMskpFSWeR7nUXzowFJdZPZVo7upCCc9x9abWd3eucJ8UiXKTyFxg8WmoYvkBMRJwBzHB7TW5o",
  "key18": "5EqH1fYGqpwtYiH3W7noXH6mQq6F6W96fFLuGqt434ERvPzd7B6fk2WPhCPNxqqw2L96BfJxPn85pZaoHTvGM7AX",
  "key19": "2hEL53VU92AmeWcEutG5Ru41nL88SfXGZBDbgmY2S21VbpnQnQaY5RtUgUGhnUfAb7WcAyRhpQ4fNvxPAKwworqQ",
  "key20": "ao7eTTyhc33CLRYDu1rV7DjTUk5jA1vB5vNKfRj54FeEuw8Zq2kvSnrfVPgF7RBNRNWy29ivyMsFk67x9SmH6U3",
  "key21": "5FDVDUuTNSYW1C4TPo2MJEznaCEBHkWLFJJTwYnaygqYnhUMMu3HULLbMZKJ3MW3iEFVSXKXmkkvTK4FY1r3kUt9",
  "key22": "4TqTPUZdr7Ybtpoz5khuF9RzT7GWHmU22xCjnDMjA5xqM7hoVKbLKmjTHGyWHYNXff7n1BdMQ1tQxNvKHpEohYTR",
  "key23": "b8pA9FeKs7mwTj64qycBoLgFpBA46FKLnFkEARGB64GANKEPCTkmkVvKiTBdtuH2AEqvi73i81aKvzgJketbC6k",
  "key24": "Moid4Dhu5dfhTreGBjp52DgqhFZDFJEcsf1k4Ucojro8GRiiZXQDVT26KnHddqZFtj4srLj6EpMax26gALAF8d4",
  "key25": "4NGN13iXVFb6tTT5kbFLiXB8Ma4YXvRXFok5BJcUs84wxgYbDimDM5pbjhnG8u88DdZDkL6TU8xweoVR2oaGxq6v",
  "key26": "eU91GPtrHHssynSaTXAb1AoRFBEx9yEB79wBQWKjQwSiZfZiTmvcgTeynTLyvRcPZUCLaS3Go9Ytq7UhrwRsAWV",
  "key27": "5CQJigdpNdcNxUFY9voFkSvR9put9WMk6NBFBggvnNThBMe4p7iaCFFwVFC3EEkubZhqxwKnChYrCAPgEHAJhmhV",
  "key28": "3jQMBM8yNv2UzKRQbtoML9haBKRUswQYAwZQCtPkFGBh7MZESHYT82iLYf5Lm91NLPABtKj1zeoZgFGiebbAvLYy",
  "key29": "2gRutnhbsjcZQqgaGUVWJry1v7XeCNViHWqRwLK5gDqWXJJHcmwKjATgnT9Wifd34Nz6bw4rzqMMFMuFDdawM6PY",
  "key30": "3KnQ6BSYJPovxDVjEGra4o7uMZ593gT2wWdziXBGTuTNZUN3tN219LL1mgTRaV5KegCc6FiqVJxe5C81GuDEsDGv",
  "key31": "3Eeo7wCD2cyKwCVXXwj5YSCNPAdafguA3UNj3RnDbELLJbAfLzcjfp5vg5Fypk6u6WrAbqQWXhtgrqKQJi9kdis2",
  "key32": "5uKKrNNwh42bZNfSx4tJdsjdA5Y6DbWHSrquFy53hHbtrMRYVgXK6yJ9gqSHhAjLkijcHcmgusMHnqK1N9aCgwVb",
  "key33": "CMoss6yk8xZFSaqrbGN6XGfzpTAGHwjxBG93PvhLfH4sW4dmyCSu6oR1v4SAmaRG7ZLqrPnjJchLFcky9ZqhJxG",
  "key34": "4GN6cDx3jRtyyuZi3JW8t75TjTa8HNbfzc15CVRS4DMPgpVhA8wEKQvNzLPUC8u82sebQdPVbyYBrhXAesMGG1WP",
  "key35": "2xBJRLLaksPaXBVAeLrvPKEjC4Qut6BBT2mHwTf8zFicZEVXZtXsW15WENLpJ11iM8Mcu6HVGgy44jSDp9eDUh13",
  "key36": "4h88AmoayAEwaQhbrc84cmnB7TpiV2p4BxVG1MWPxpWA5fKkKh6ZwpLPvcFCNBgQ1ytPYfkYDDTM9zA3Y6jHSCUw",
  "key37": "2zoqKiURbS2p4cBbpbFHH13rH2VSS1e2nhWpjc9r7wqRy8nmMt6HgqguoSARw7Z224LtAysXL1w31ogBvS83gGaT",
  "key38": "4ooPhL97cFEmv6YA4SPkMxtXPz5a226pLHgimMzVtadFCxUd4RvLMYfwqgYZkmJfH6nWxAV767t6kZw1Y4sJxULC",
  "key39": "23AY6KrucdVHg6MSWEo2QdN9SB9cgyvnsaeNmCJVbnR2pgUKySQaTk6EyMAFSRagjFiC9zupekdexE27G6nofxws",
  "key40": "4ZFFFivd9VV8w27wJtbKzfcRR12DjVrV3FWCd61tCkpj323eCHVDJZa9RntWZLQm9R3AeC1j1LQm1MoqyuC4yDG8",
  "key41": "jJFyt863eTTYXJPjmvH8vGchEnZFCmSpDW7DnGeEXBFdsBKaR2CCgQLFYw4Qyv1m6AVJ6h62AVM2BVi8RWs2Nna",
  "key42": "389zXWm2G3hdFaR1cZ3RuAnxkYk5QtFVq3s6mKSWytN9d7NSXNAtbYv1DcGuizyimAVTS1yUj4jt97QeaHjkHYWd",
  "key43": "2JSTFs5EndaHUNvGFBdKsKM1Q1Gzv7nAtQoLJG57HaYDii75tJcaGgk1HRs1Sw9J2VvCtZMpXjymrwP26CWPekgj",
  "key44": "2CZEgPGqB3B5sEG6PK58TVvDkDg2a1PU2qbKEZQHtiCi5nGzMh7S7d3TsoEQH5Grcus7tKvyhbscYBeS1wVAh6eT",
  "key45": "sqQKgTEieKyKBdx56yv4PNNttjuxDroN1WJwBuqFrTeM4Dqo5uipPZu62od8ucutsGwv7QUyek77ws9NVkTbVAf",
  "key46": "d9Z7E9uYQprn8dfmSDAkTFhy19BRmUQEe5gJuYySSijEjxf15VDho2LNQWnQ71sKiND2e36WVaCzYzgK81cyWjk"
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
