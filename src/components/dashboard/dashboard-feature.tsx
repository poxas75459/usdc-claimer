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
    "2DUCqVyHVMkV3jJND4Kn1y78tED4wywN5KcQbmEAauheTeqsJX8Z5We2KvDGRQ1cwdQMNUQTvdSbu7L3dhv58ZC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vKZwi3HMkKwNiiBEtQHc4XSZdjNozdUFsrrELqWSLeWXgueXcxAU6hD8yoFQm54XnudDgxA8UyQW8T4XMvivNHK",
  "key1": "MBtDf2HN7Myb1BePYt3UeK7CTjTNedfpSgHKG82NqntHxyegwQjMnMMyjESAeqnzUtrC8h4MVbZ46V2q6Mrj3sj",
  "key2": "5zciJyV1DcNEAE1FBGf2TyCoDaULgTsbUjPWzBRa22rUEcTvkwsHq5hXS7Nb72SaUYqNdiqd8L4F5J3KFpbZRYw",
  "key3": "3Df53jn47rkAXwttUA5h2VnNg6j223GHDRm1zuQS2dsLoCugtt1AhwQPnfrVYQkgVEBf7NAV9SALZ3SfZGvKkKER",
  "key4": "37b7gAAFTEBZcMe1tPzK1Wzpi3B3rRSyjkJzQVT3stQUr4grRmNNzKHDidbrZqhKtpRZ3VSSytS15BtNYnJNchjE",
  "key5": "tqr2ErTJBbqxk7gYjNrGnb72f6dxRxZg6CLrxcqUsqSczSb7dcrR2ARFNW3NyBK4rcfKKQTjuB75LkXzKSupWXN",
  "key6": "3njJXRNQeLnbQcnp2YJ6g2TD4FXbtvGr2cybdcWjsPZUyM8DuJx56jWXz42tBxDCxS6pqK7YZuY71XAAxxV8ZvYy",
  "key7": "3uaJN99vzeA9VVxqB1dkTB4v4V3YgGMobnoypt7xTKqh4gDqqkHe5Mce93oa5S6dEYDDY9twkLt7pVQ1zxZ7mbMz",
  "key8": "5kwXmeawqujb5kYLq54gszGGiNVsn3rVLbZZ9xWiazB3xvE8s5ousbsCp8sX8WNKBkfG8RKQ7PpwYwwW7qLqnVJK",
  "key9": "2nuYCkcZCSPcuY5f1jW7serts5UVbfNqj54ZDNhBc4ZwR7gbH31JFeF1MSbjpLbARN6gHHJhfScmFEikU3871uL9",
  "key10": "39jB44YBnCj9tbfogzeGJcukduTvgjkVGLyqTU1SdL6Nzitz6J5s14tmx5a2p74xaj4wNsmXBogWy8bSwTyGa8rY",
  "key11": "3ccxPVDF7WBUijKuBZNpXYa92v1u7x3AbmWdPzt63FpabtqDXXkMUzXxmR4by1o5FWaKZR7f7ATQ44JDcCrgmwc2",
  "key12": "6Cu4eDakbn1BT2jzJ8wmYA7qCrBBcj7oJeiizDCg3XaHeLjv8X5pAHPdsMnT4wkTJjego9jdfJHMB7K5zdEMxPJ",
  "key13": "5m6ESDhPqCozW1GhZyEskTcrKvUXXcQYHa1Dfxeg7WPbKLMBFCs9z7GmP3VjKTUVH2awGbakaMkoetcQuS9aWgvE",
  "key14": "4R2NcB8fbDZH7eAht3xf8VNVXeMgQHfweMh69AbGXVbcookQcAqcCfkHG91p8K5VQfF5gh71YrjK7zEdMrsttbWP",
  "key15": "4iL7yBLSiX75zViuLEdm4f4Yvc2x3SG1RmwjczKYt5neRYyAYi8CtSbLtck31ACA9HfsMtBD6debW38ZhEgajanH",
  "key16": "2fjABbwpzsbLnE12jsXDRXgF9SZKBfrxXVzobqyzY9TPG2yQhZModT6auUtUZh2MHwQW2ZGD1e9caTRzKTZHYEdE",
  "key17": "3VTyDpKSFbzYTwCybeMwfT11jPHe3UYk6F41D1FAbTxcjbUZdwGXFS3y7XG4v6GiaqUJZVeSpytQo9Vr3XXvHuhg",
  "key18": "5pLudLdqZeZw28Eqnu16vGh35igMHbygboUWrJ51MSVedtpDdQTrkJawqs6YpathbYG5dohiqCbW4uPqm18atkjW",
  "key19": "5p5zqHevwK5i6ZsVm4pbHd8ofSCCzJR3ZSxP4HDdYVujEy23rHidbTR6Ft511xmZB148tciJrmnzQGMDJcXRU1tp",
  "key20": "6TSKtSpG413Yeop92h8n4mX2sQ9E1iiQiM3RqSWAiucjjCv9ZB1HcBMpACeDxCxpMiwZMYCwzi1aAE1tni6VuYv",
  "key21": "5mAraaTooZyegoXUJkuG8PweRQ8J84uu9fpu9HDcBg9NXGvLMPVt9b3cypyefZPaTmCFqVimJuvCTTAt7TgAccZ",
  "key22": "pY8SbpxY8bNBcLNch1yWRcJeLsufWtZ41Lhdh7tL2YxzFqPsyFxAvXcKP8vJQJmWsqjrvJNr7NXfPanoz7cN2EA",
  "key23": "2xgwdnxPnQNwM7nAVtoZTwWpCNkukFhPi8tbLhN9Miz5CPDWueeFfeZth9QxoFnY9DxpZfmdFgrPSfziSMWPszGv",
  "key24": "4Csjp1X9YuwQNthmFK9J1uSeGBiPQTYYbwXP7PKHSgX1xPuV4LyDFVMrcZL3Tdvv9H42Bh2CpzjARxdXcmxsiU6U",
  "key25": "5AGSBpBkTT7aLRF1fvbj2Mj2h9oJzqxMKNN5QdWdyjijN85dwC2b29e3fhXp9n1eoUivpetGyHnhsRng5CYDgjsc",
  "key26": "5VXSxYEry5y1RReP9Qyk2TvkeRAU6RVh4tWxxJ5gjtY47JP456oC88pHj6tLUYQW1ghQ3gw85tvRSqUQKrpKU7mm",
  "key27": "5DCagoqz55jev7PXtSxXXAFoz8W8hU837r2oumnEDQEwreUBwUsrvbZDCHCjEHHwkgiTUy1qRGabZC4AuPyv867r",
  "key28": "21L5rJQ3jEcqLfd5HLKENLADMz4A1jE6sj6chju53iS4RymccA4c7ma95xKxt98AMMb4UG185QeD7hR1MCBUULr8",
  "key29": "5Ke6VbUm75r7bgpipsR8APvb9yFHRQrEUtHvSPSFRzVcpdRM79KKrMmSLMQ25ouaGPU3dpHxz9zRfC3GwxKe1RU1",
  "key30": "ie6rZLNBEsfDBzyXijdMDBpQBDNRmRfqgpmmkF7ZeFc5XPtmMypF5oy8uckrPKnKAaEZELAHasi5a41GCPJ5ubD",
  "key31": "61bx7RNz1A6K9JQ6jbvA8tgUVuBvSHJyLA31JGXrrgWgsHgcYLtech5ZuQZWk7izAfW9CCxN51mYZEro6xmFGQ5T",
  "key32": "5tQSAJbogSnsFFZu2aiXVm4vi3wUmAz51JuToKdguS7SP95YgUrAHZR4QD7cSdLR3Vuybu1Fz2ukhmuRj1kxV9mX",
  "key33": "D545YmDJLuexCSj4EKBfiRroTbax98BBuVh6WT1nGN28nuvv5xwsYWaLiLeWJ3TSTEShJaV94A2pRnESQuPoVgq",
  "key34": "66ABxR1JkcfWocVbz2AorVtKiggbpWBG28fWaFFrYHzWsHjSo5wWbJA5komzWPqGKWGfgNM8YPvX5XTDAQsoUjDu"
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
