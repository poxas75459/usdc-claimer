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
    "3HSh8xYsdeoUhXRJ3m4Gthoy98jcR4qpsS275tFzsosvdMbEBoXBf9BHKYvnqiNMkjvqLfYuVqcjXvQnL9VepxPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U428Qjwq8kvaVvoCa6D8HtLU1o5JmMSS8dB36QTuMLd4bBqJ2qa7p1nw9z4Du4ummJoQFKS9SkuJQKqpUqa9k36",
  "key1": "smaABBf699zWetEym6JZPRmvuyCr2cd1PmLxgP5ummgGYYHnuswfaRHa6Vs4ngt5DaLKx3RCiXwwjthBWmtmDE8",
  "key2": "CHZyUGqovthMTUJRSet3aoWQCsjgF8gmNhfqe9K6F94KCWsuPFQYnwFp3diuwjZoWejSnJ9mJYNHW8yDuKpu6rC",
  "key3": "3TMEoFpVmWZ7Y1N5SaGz6JTwAoVncUiiXAKSvtNuzL5qyteKQ6oNJuZWSSaq6xjxrY8Rog3wkYjcXNz2fPgG8xpB",
  "key4": "4Tgc7hx6mCw8ovkVsNvMdaJZxbJqfJnKA2v8gMachh4usny1jpVv9HSLagGWdfpFYxcnQrXz5medBVThDWFGEAPy",
  "key5": "4KmpJ1G3queQW4XiDLmtAf1XuPd2MWDmNtYSH3AqGdH8kdwuiHNQGLc2tp3NqbzGaGNe2h1LMDmmt7hyVJk43qBE",
  "key6": "4iPghPx14Z7W4Er2Fgut2hKHPazqCzhkLqqZzYVYJni4G7h8viQJDUzLqsqqXcwAtVNVQpGFumzAEkHaLbi6dgge",
  "key7": "DQsBKRMYiA9cF4AmNyzEBUFgoDYoZTtzosDirN16wtcpKtMNLdJo19fyUnM2LEA2ChpGAdAH2gQCXMRs6W6bJDB",
  "key8": "3yi6wpJAwYRv8ELUqQ4sLEhsaGW4b27m4EkJ9j6RgvtovE8K2vdy5Zg5g4uHvZCQA8hjAS1R23QccUbd4DrkXWwe",
  "key9": "4MD8wMtRrDCLT3MRBXRE8KSdbYjcezUA6U3Emu4ERN1jwfBMxXk1rSVZpuXhA3XrKMCbp5tDFhYVvLa63iSf6yHZ",
  "key10": "5NU1sLLD2Qx6iDbq5GY8C55FtLXa5Js99bcMmZseEg8H1BVosJxosnbJoerFyobptLG2zrFShHCyJawhiPiy5FBQ",
  "key11": "5DyhAmpdphqDMraqTX6V5tjTBU51mzAHsyWSpGgc8jx63KFh7moENNjZqvDD2HK5uLugueuEo8QdMo8aNYpX4KkH",
  "key12": "56SPJtkxqY7H2eJ8txYEUoj6AjooquvKDvpXF9G3pU4T9DrSno3tEKJ32MrYchmExLuMpn9RXvBGgqTgACEfxix6",
  "key13": "4R1uJJfpeF7iH9MnaqJcUEzShfVcvfc9a9xSkE7xy9QbDTV4S7xAHBj6fXg27rfmxQM51xht4vHU28ms36DSPYuF",
  "key14": "593eVr26999gWqL9LVicxKomkwzJHEp5PnmdxG37As7qrm8tGY8zDbUpEhZ4FsoEsuut3KCULLinVHpKpJovssWp",
  "key15": "4bukuSqu2FrB84yzPTtBU9BFsHckSomc92ddhm4UYTLszpDMnawHWHHzvbZDmoypDKY3zpxdEGFgmtHvN1ZmfKAK",
  "key16": "5p3ngsuwf6u8FcYyCPGTsU4J6xSRuh284GgMfqbop8jFbr4gKcmHb1t5GuDb13LhmAySE2zcmDVyUSFGPZdts598",
  "key17": "3P4rAJYQCZpXDMrVrL43GEV8f4LyaeLGqnc8HEjUZ9ptLxgXXdvUegncswVxuiHyvSnyeeQzFLBUanfFMdpPWmTW",
  "key18": "3bYExLHEHsnsEZ1m7zXkx6FPjZ76711oGWwA5dvVyEpJ2LommUUrxgYiwnEmXmJNh2un5JYV4oFhSLCMw1tANHfq",
  "key19": "3jiZQ7uLmMt7aDKVZfiMhGgLJHV5zAuysqVPNAYEvXxJdV87ABGfuScZNUogd11qySyVsFvTdxSZtMxf6UejFjcb",
  "key20": "4yEPMpNEfWppxFqivAajSRdLBMpJ6QUUtwBRRAz4E6Jf9NRvCiReYJWLa291d4f42S4JQXfVJLzkfLqGKgqzYLEp",
  "key21": "34phZZBMmdzHZYGEXDj8YXe52hDD14gcM6CS7BmU7KdeHFfvTcGDQXuJFQg7oA7NffjtzyQAqKveFmsWNsMvtHUm",
  "key22": "2aYSGKG4wLr2jHt2shdSPRmPjhsfbjumc64ZoRPnNV1xFe4c1WDSuMgntjdU3tkRPFKCsrWYMdhVi7PcvntHf3e1",
  "key23": "5yuAvLXbLjgQg53fZzWx8hQxsF23LB2VRqvaEBLqomQeFthhzuJ11SdGhkBQnEaVa2zNiKc5YzQeR9krUUtgxZLs",
  "key24": "48gsasRfgK98wDeSJC9kuq7rY99qbGabA5K66jr239K8DrMqoUBDWFqrtdZhwmjwJNajj8zrQ52VJFWr3vV1gABy",
  "key25": "NVJzUyTiEsmG7mCY83c8nqjeYBNEcNLmZ59nNavSXC94ZCpdbTBAQd2BxbseYXsbfiScjcx11VSYYKV5LxX7ZGw",
  "key26": "297n4XN7KJ7MAvQoZcSfpXPNBnsRThZHZFe4wLFZ38BjmYPFLgD3GaF8jeyPzB9F1yFRYptVPeUHR5XTYtUHkzwB",
  "key27": "3LT4ZCMze64oagAzoiAeXumHFHtS4s1FTipgzHeaFfinsrZzSu6vhZKLMGusTZ5mvJTP6BRPhiaML2T7dFwwc8Fp",
  "key28": "2DCmmXwsxHr25H2vgZjw5x3CRiw2Ed1Fw2BbPARys68ofDAVnRR5QsdfLYeq5K8b8vj3tNArEkZVjYii1jsHLJfs",
  "key29": "4RLWt1opxxfWpbwJSpaRJqTh2ppS6jvtmi8suurBAhcvwqS4smS1keVt66256jHHvnCLyxSwadSBGNDhxoUf9b5x",
  "key30": "3wuJ6t6eGec15fqTzLbQuttybXrvMURevd1f7gZmk6nVLizpbUMLDmEjV6PHaWvrbqDNVc8xPXegAQ3EU3cyYLFo",
  "key31": "GcsCYmfE6QvCA4kLdw1Hp2x5FJ5rTbFcUHW81deQJguB4yMet3LVjbouFnf4MUA7E7Ps438eTKR4RqEXv5i75a4",
  "key32": "363VFDYba2S3azvCMgadGG14CUHs4Vfyr9ZPmTaufcUMhNTro5uQBGuVQzGYTxjhmfqzkrUgGY5tynkKSCdVbh8j",
  "key33": "5Lt4SxvK7QwKvxjCWjnUXJTmJNiTh3oeGk4cdbud6uH4WS5CyYttchq2ZYQCZj5cmu83Nv9R6LAJRH6y3vqpNdXk",
  "key34": "4R53vu48UFbTMbNryZAD9rDGBFjhLJoGy8RsLpkrcEBLmhiNqGJPAEbnVfvZkK7YJ1dFv1xdWiCZZitEmPr72c8S",
  "key35": "2h1fdRu9bssdVsXi99QhwHP7LhmTKPRL3Rcwz9RToXoMaDwU42UcNijm6ZGaPD2m7q4ecKapqVCwAWxf4W9s7E2t",
  "key36": "4Pqz82uWEBLsUkvStgcmUhMvX52RfPsuwJpyCzgXPZt34ZQZTD4hhVaKSej9uM1p1ZdThNbfRamh23a9HjdZr3MN",
  "key37": "3qvPpp4sivP7fENqvCVMXZgg6am8ewrg2ZrfbMjFQCMeDH8jA4b26zLRskVem3dxDpqRZq72mWVuWNkreMttk7Cy",
  "key38": "3HDEySBxqikY1BbB7XN2zrVkiHX4XA7BKP2fja4DKas1zWf6ptfCzbqnYKEytqBJGjCTJxWAc3Kz5DnnbHrzaKkr"
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
