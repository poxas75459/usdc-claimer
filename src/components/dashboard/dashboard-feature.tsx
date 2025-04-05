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
    "5EyLU6x1CRsi4dpinh1P4JVdtqqhkVL3WZGz1nv3jEPYmwhqvdV8fRGmp1BsRzV6wqeguBkc1kzdYW9WSi9hXSzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4buY5xWgMZkFeqvP7RVVkgHwJKgJ6j6fi6BJYvLeaJt8CFa6RopMrxFn9WJuZYNXk5eKnD4AHQcJE6S6DJAKQ2vQ",
  "key1": "63uSBYcVoENnZJ39gJUy54Shv9NGs73CKUdGEPGvhmZpgdXh6GxEb31KsG2pSv1ZvWFHk1sNtqyqi33cdwVVVxv1",
  "key2": "2TR32bDzXMgpT59zrwxwJGQ9f6cheREWC6nkM732xjvcVyx5hNj38DXwax5BFjMk1GyShz9x93tXwR1cyX86Cw8y",
  "key3": "3F2fTXyJDwkT2gtvoMrv2LZRyFaWtWArz99GwBrQ6ekJunEoH9WMCpiDp6NTq7PrSHfEfYAA3BzMwXvH2iDSdVcq",
  "key4": "58paogEPZf6vTp8StDgETDBuFN7BLKJkxqHXDkxA22CiVo1VBCqJ38Vyo8Ld95LCvGwJfbuJPYWgd3G5PjQ5rsFD",
  "key5": "eZqASJyqLYeuHmJCWAp2wk4ysX587LwjqEwEcfPdPzmSyPYkhEGbtVy3wCCNiPrHKbxmnLJT3GDwkezFM17w5yZ",
  "key6": "5FxocbPhTJsq6PEt81YkxvEXinpvrrPf4EHr9pugU4uR7kF3tpgbhw3trdX2QUpZPJHLELgmRsjjcBJtqjdAFvxa",
  "key7": "REvGD1dYc1drXP9Eyyowctr3bxcwsUVb6PGJSdsJvBUHFk9244LnWxcwQ5x93nFZsc3Uv27CjhxWN8dgANfRL15",
  "key8": "45awYRRzwM84CayPLCfeE24yhju1ehH3D1xK9FZwJqoLwgagf4Abbh6uFo7Sjf6fYDLzSgGehUwooA8qETt5RnHe",
  "key9": "esHCZvbF9wgz8TFDgXLYFqFw9h5rfpoSLkpjv14PgjwvVpPgf1VRJ8y7s1xap2kSCnTpbzQDRDgCxu8TwPXFmRz",
  "key10": "59bybwFCgdet4vhxRAKQoucKhbguR7h6WjAGQrGNaqG7chyDwZKWF1Q88DZ1aG6njUBZck2rTAeZ8QjT7t8uZxiU",
  "key11": "2xqkTV3YuAzmTXx8NsoiS2dg6KwoW8qWKWJeBko5CMuRDadzvTvucqAcbYVSeRFnLw9PTSpyuxm7s49pT7zqxyBo",
  "key12": "44AdwfHrxn6pP6XBPNx1Kqj3visVQZyDgDy7HTDPn1YLaVX4i7QVuwNndnVFBca6mkaatt7pFeHgWyA1R1hP6cpQ",
  "key13": "5TFZHm7E5JvQjueqwibnewaUHtQhF4qE2kcfPihH2BmzKniezRU9DRdrDQ9ibNti7qmuwRmfqCTieJFUPwXNRaAu",
  "key14": "4eKRkM5TvGgTjGWXLEDRpG4DXabXFXjak9J33TPWh9CamCbburokQJEJqE7P4Q596PtVFbCN8rZoA2znHLbsC4iD",
  "key15": "5TgXcjJ7eGphy8JfmjdPN5dwV7nLcHcnMg4xoMUSyEJBXtVbY3H36Amju2Ldz6ymEUS1s6uiAty2vBhHF1AAdMHA",
  "key16": "39TKVQhffYYpenVC71w1uSi7XtsWmj1h3MHhmqias5Ezq46V37UYpDvY4njj8Gf38vCNyhGYXX18XNDEPY5F83Sm",
  "key17": "5jwLo4Zc155bc1fi8runLgLMvjJuFjB7wMv5qQVXswJ59qfnryVZRDGPwpBnCDjPfggu4T4UbchAoK1bS1S6nTCy",
  "key18": "5aodSqaEBZ4E2v3mKEWwmcvk6zppXgT7YYuqDcFwnZD9WRnduuuNDSZ8bRgPEHhXnXFxt3nYRZVSD6W1V8pWa2Y5",
  "key19": "anp7tsycaScVtdwzp6DCAPbFn7W3HAp21LBrTkFYnuCqV6riBbHEhfAUrChFAWCeNkco5MMjf5w3Y9KyEQV4VNC",
  "key20": "32qZXbXRAPbLkkzEFm4qzqkF5rUAN4ahzb1bB5jRjGqiP6t4RttMfxPicChpofPzZNH7G7LRkr6jiTVZXvFVx5NZ",
  "key21": "32H8zEBqpvqV7MEDVmBNymZjVhoFpYxsZ3oi6gev8R6ji8Cnf1w6jKcfH7sLYhzHxM6gN6vCfSzwGJDWs2hZo5tT",
  "key22": "2tiLU2uBypQb2emcWsKYcQnqmyRJormwQ8msHPN5zymGiZ4EXQYCBqfm2sFLmbx7b3JzUXUZAEiA4DBuFBfp9wEw",
  "key23": "2Ltptd8D9E32kT8NizUckHTKLLTduVCYr4pmATdYDSGyZjJJV4tzkxkGsYhTmuwCEsNJ4GnJA1kRP8GVf2kbPCig",
  "key24": "3JavuMeRs6gz5hMJjVz3n8iEBP1RwftRb6CDbV9zEV9yQi5wV9BDr29JvhvQwhv1aSKN6qMyU6QsjcLDT6B82eum",
  "key25": "5CP3UXFjH9oYR1XgtPFF595djBUNstvtEWqzjiAp4U3rgAQQ4MRJnSXLktjZ355REQ74VXkdYFkTW9FCU6649kx8",
  "key26": "DSeYM1v9DurtopsQsmFgg3NtjTWoPwHdbXPEeZU93i1fLJdprBrosuqUmQMsZxnV5TQaBnMqgq6CmT4tNvTcUXd",
  "key27": "wEwsvXPxZ2wgR15CJiGbEyeRr5MTh1KFGWuMJ7Na3SwNrCFvkWsDUujBiHVPnN17pdyi4C25wFPtjGAEq6yhwW9",
  "key28": "4yMmmP3kvUTvvP2iqcdywm1gC8CxWLqt3YxDzGyLrHyJMLibBYmGz4BQsqRUQRqHsEqY7ciAQms3YMkYGgrCnDGH",
  "key29": "iZJzaxDG5FTzSvGkEguQvBtU1rXp59nxnA5eL7hSJazY2iFDqWacAunoJYaPKHEcMRHGmE6kuNxKmoKR5gzDvej",
  "key30": "51xZT2Zm4pg2E3iYPe3eTL2UJZApmbpLCHanKvVKCN6Qd6qHQwUU2AuRWrPyb36gDJJwfTHjhnc3daxMqmUPTtdK",
  "key31": "4qG5AwJF2h8Nx2r6H21TagvPCM1vNDYAF4tUtvhWuusA8VJ6Mv4cuP9oQM46PnDAsL3nzfJEb9GGUoHsvJJwfDXH",
  "key32": "4HdTeTNQmU6g6rLby1LLk9ayk7o6H2nsq7tYD8o9QgNKiAsvviB6sDADt3yHJi2541A3H9tA8p9owhEsTGsBBk4W",
  "key33": "WmtDyFmXpzAHySLKwra4g8qHR5o37naKTaBCBAZeLDSGT25MidaVQqdBGoR89igocfUWiUtpumHY3DKdMMnCnKE",
  "key34": "3K5FJPfg4b6aVRe9je6i5XRq111JY2aCLtoWRh8uaK4AdT6C4dgrGeetGxwQjPf2gzMdJn6dWTdUjccpwKNwWG3R",
  "key35": "4vM3XHewCqqNGyJwe6Bemhik1jD5WS7F5ieXsdA7pQTGUzdf234mFLyo17cMMkh8qtb6iz3Pr2Fe4zQe5n4Mhz4s",
  "key36": "6v6VK58dZkE2QLrXvsvPvkXBKrx5m4sEQix7p9p7Wy6v8yeqzSkTtBJzSjHmtMkx7P3SuRfURyp6o2XPxVTHHgh"
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
