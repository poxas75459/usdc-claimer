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
    "3rRAqt9YQ32o2hTCa43nMhpR4Nm4wbq62am4yx27EnSzC5Gdj3KLrb63JmSgjMoUAttY4sbJyRd2kKzXLXHvaArG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JijgFJXMQNwBiZsci52jwgh3tthknrJ58ZDRkWHeW7Hxg4FeACPb35qVPTe5ZJQXfkwX5rpcTXC2jz7ceQAU9tQ",
  "key1": "5zTc5D2yfSCLsM8FetuXrMYQFFKuQyLSXU41yiqun5xteQzhCDrxmH9995TNBQNaGEAuuGwivvpaJ3H9Ddd93dF6",
  "key2": "5sz3EUAE6GkMi6zbg2TfSqoR99js5svZ4Z18kH2G5UFTbpcPMT5fuA3Fx6ZiAhfmT1szzuN2Vpgy7wmv1gmBAVjn",
  "key3": "5fnTyERqcUNCjYhBjTroeZbBcZaoQCPPnAbdzozz21xtVvzgwAM6VLBf3NCCU7zPg44hndikJ6Dvt4jYnBotbJ3L",
  "key4": "4DhgchZRLdRkfpPQ7hrcibEixR7jGbDgWNxMJxWkq7zkZwsbz4GgFWu8SJaJzEy2eUTDXuVV7KbUaYP9bZHfK6im",
  "key5": "hY8biMV3bqNaAADJMDqnr9uv3o49Y4xpzf4q26qZoaGWQdySYnhhAVz8K2iPF8K765sz78LG7hjwpSf8NRuKgox",
  "key6": "5CQy2evsLjCNwmTpLugVspyKL94ixCGpgndCrroMRjKsZctrSMXzmSnH6g6q9xub94EjBdx7TGuA8xvMkmTEVszQ",
  "key7": "DY97AGCCmLaLXcxHiowd84URH75Fzdj3vU7SFfABmd2W4SHZf3urYVSBGH2M7YNydbK1NrJ8xyZtQhdFRwXbFWF",
  "key8": "6E82cJRKZZj2eTLD4c2SBtPMyHnAMyyGBGQb6YAnSRemJTWeNPhS37hpVm8HhfAsBKKcwVNnSgh4jrt4EzxpBNj",
  "key9": "5zABf51YuBEAc1GJeubdK6ENf5otEEVyvfs3q4rcqJ8raUFK1oAFgqiAFXQ6yzCVX2YBfC9SNnEZdkoKCzLcjeK2",
  "key10": "2SRTEnGYb1wCAmzsQTaEiDipsVjrpQX4LBGAv8uHijhsqVESEGHxFnMUVCaSxpwChRLiBNtUXQwcESkasgLBKBLY",
  "key11": "2PznGuqYPVScjksnUKxjKX5DEev2UhvySbfZgsmtPx64SXDEVhB1ytzGgGvR61oLkfAq3gofdW7SZpKRVwLBcgAd",
  "key12": "3rfHv6enhjsiDwDDPKhaxA9jC51gWmvfGePFxRvWM7bQcAgBH7oEB2Nvf243GBveeyRjvZae4MhaU9Xt5qmXA6sJ",
  "key13": "2dzQjRhwF3DFdGX9GmUi7e4TwNk4MSrhjvDxwP8TvUkjPbXpn6UEFjsYg4LrBdu4BYeYTgMV95wX44P1gTezB4xi",
  "key14": "3tU8fqQoYkfqYwwzyg5UKvJCYiD3h3GKoTAD2cqUAATvFm5BRnHqQKvV9f3imGF5dCWgi8nFbQ1sbJ2EbPKLYM6R",
  "key15": "jUUBUNQUeSBkV4oURWvgSEPHTejm1duahPVjsTFaEut84FJHYYHfRyAa7D1iZZxeYdF6NRRFzRVD4gfG8JVFaaH",
  "key16": "5twMYyLd1ysetdVywWbZfr3B5UvKo3QV1mKudJdsnYeEysd7K79dStkyuZnnS9Kt2GxR9bhkqj3HS5ibbp9kNpNa",
  "key17": "Z8xDdjiDFD9binvFbNdngGLdzqfPcqCieTnE8JM5EZnvW52rTuhPxU6hyT3veDfWp4b7H5KmnfUJi1o41HHqmbk",
  "key18": "Z4si92YnZRWErJLdZkU1MhM3ybPJMum53u2ZaQhpND4Cr36SPLCBgV5Ng4PcRMPSnycwtnsdr5EmULXjKCAzksa",
  "key19": "3iemy3xCMcdzMu99J6uFFagcsRi3G7WRKt2SJb8FzPB3bwpQqYKfMTPDKKXZ1KSgfTazMfEzyJJiadKJXy2ciR2c",
  "key20": "4dhUfhwYLB9YF1kUbo9bW4C3HmPGNS9P4LRiz9ELX3Jr9e9aBcgbrQb54SD3PJf4ZhXt8TW7PGEB8icu9vU5dLRp",
  "key21": "2xpRLksWvzNhP62hDzn8C6UjwwtqXwApBui1k4uhyVZoD8ZXeRszVgP1R917XMeDrTnCCj1Z82QVJLc124HK4BfB",
  "key22": "2YCNvVrjBohKwT5A69W2Vu1UKCTNYfhAGCFvRnquxYXCsKfyPnY466V24wWFkv9m3GuzUMUu4Mq4t6K1syuyYz9Z",
  "key23": "28L7xVV3jDfctAAq3eCuTGra1ucBjfLNPeacK7886BBMko7qYsY4mJ8yFHH8hSMxcJ8g5MAG5sjhwEYeukkFifsB",
  "key24": "4kEfARs2NbTPkcZYvfjVdqMdRoNwH6nQJYy631K3ZD1MYrUz7Pp8vcy4UcrCqKhRNmXhh5Tg7tWuy3wjdAWzHPMs",
  "key25": "2S6ZBHefincRStQqKfeQGqmPG3FT3prKjrE7yFsgerqkAzFAoQajsxn3aWbD4Rw5pXCuv39yyV1q5EfHQeV6e6Sf",
  "key26": "2NqGKDDnAj8dFMCyaJ2MBfRdf1LmERaVnKxNm94ABmuhCqUMZf3cM6tbgTijYwq5FHSScfdKE1hv3BDxuSvUnf8r",
  "key27": "5LZwc9bBED5GiKQTZ5u5XcKbxmbSQwJDJUtrCQb66cseSfNtPgYmxGfbVMRa88uNn868SPTtu87HhqqWTLxAGaDb",
  "key28": "5aqntcYHvak1o7LfaN8vy6eJ5fTm89SnH6vkf1DwSE2p58EJSPiUHytjvYnP1DPXByLgdh6vxvZCvjc2gnuMBH2g",
  "key29": "2rJnZKQdAP8ATN6groNAHj42CCZ9jqHog1UtXqRLbgrJfGAzRZskDzQz27FRWdMJhdHAyDnpsAs7F2aJJhFHsMmT",
  "key30": "3PSdHJK7nNDn6PfvHZdajrU2JV6WpS4NrMMvE5Pii4tSA27bkrFDufMMF3X26AkNsVDbcHfaJQPG4gmAhTotHy1W",
  "key31": "AMp3SEmRV9jA5bxff2CZxznTjXUZwTXeSpGApjZh5oG1g7urM2kRaRCr9LT6YQVw4vUaDNEkA6xKXzffTPRMEcD",
  "key32": "3mzkWJsUitU1vMh93h4aysPYrqZ9EY1Mu3D9PL1J35yzyxStZ2pLkjaCFzzvHJ5esZv6Vab1UzTn2qzHqtbEM5Wi"
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
