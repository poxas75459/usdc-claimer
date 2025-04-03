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
    "2txr6ZpraYEK1txDdffHWEdFCNrJZpKbZN4HHRCd6m2FUggTE2S1JFsdad4tCZTRY7V7Vk2BJWYy1d9ufPPW8PQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FyDjZDTwxFsNLgFSdTqWZdB5e411mzF3KNLMPTmeHrpL4eKygXHixnZdWtYyZmpjrGk5qmRPpckyo72NobaNDap",
  "key1": "5h4qpUmYc9oNEoj7iQWmpRMZTM8JKMXmvDf5BusuFfJcpQWTNHdNwPEm7LhZim2p88ZcUL9gf6i1Q6TsDV6mhJcX",
  "key2": "DZbWoBccGmqTPpzbfhYg4e9vNGeC8s74K5Ux6wHQpAGHKX23ZuUbFie6sCgQ1bRGi1XWmFrDY9BYaCyrgB3raws",
  "key3": "422WVaomsyBX91rgW6ce7zCAsepGqduEysjttmbZbcpeVkpTTwawM5ZbKmgfh7UYdhcdjdDW3zSXaugS7kScSKQP",
  "key4": "4vCrgEajvWuHA8g7qbuzkc6kLmQEnBMfVWse6B9MMh8yJkXqEXznixnGecRLwGL3A6y887dj5wsnPNz3bMUoCjFY",
  "key5": "3QL9E4udFGMPxoZKckoHvW6pENWJPJDi7LPDyemQytjGDNHpttNPDmv5MKJ8FMrN64WnposDeuHznAXtMtgTw3hb",
  "key6": "2Lutd6WgtjnkzS1mYTS3mxBxQLEiu1RhVxuxejkmMp6MaLHsZRX242CDEQtrH12nfADoeXZ7wzFMpWG3ciWMi8dG",
  "key7": "5YqcBkGbGhuTJqeh6v4GZ4syvpu6xPCSqyRyKZoGZCHWC2YWQBSsZS8wMC15bL1Lpbt3CPZPsoBL3eKh3XK8mAwu",
  "key8": "3YbyanfsU2JoxKuFekTAiVJ82VAQ69MRh727AvEyW5iPnLFrfchRJtAwQTzAYppiBurb9DtPcAMp2khrpsBn2N9g",
  "key9": "3YtcEGXwu3reL4vywcR6B1CNjonAKNLtgrT6YVPuYdyWWz6t3kWkevb2KUYtLic1cQanPxvapcS2cB9fChcReBem",
  "key10": "2EVmS1q1FVJTyqN2kbZfCmiRBjFtszp6itHuigaEat9khoau5VyTMaNtwgHZWR2KoNEpQmbqcrCckv6AipEo2HXj",
  "key11": "5jQJBvkBmEiAme7vuSz7k86zNyvEVrfUr7XsT1tTRGFh7J8aDUSaTkgSY7qj4cTnA3qEywdn25KnUjcZhiPj8Exs",
  "key12": "4MekroDsaCntHcNniuLqH6wQ8DKAWiHYjNdD2BQWxchqHHxeeYwkzDtM6ptqqjVfFdgTJ37LTpmFn4ppumv8gnzP",
  "key13": "23xANWGYHiJepphjG1wLGsTGHDNUWm7sDJ2uu3unv7DxNrPgYJL4APEnXxhinqCkECMF5auDHGunkmRvADZj7jgT",
  "key14": "3BjR6s3kkTwYf5xhn8SWmL7S8rYs8STked6PaokXf77b4eFT8pqtQxT5hnNnYna5aqzAqBLMiqdtPpkCmJNYe9AG",
  "key15": "4owJQYprWSyEJMQG1S4kwyYRZ4fMVeM8ernAmPdRR8DUEMpWH6uVa85USa2iwPPFmNHSmWtPQ8UM3oPMXWSWj8En",
  "key16": "2Yj4C6VSqohH461Ng3EB6wEvNDAbQYs4CiTT8G13BQ8QuyjibcSFHyTDNMs4SmUGCzKzgbMDdgegWS22qjPPShxv",
  "key17": "4Dtm7ayQUBJvmEVUXC3DJGGpzavQ3oacb7K5QmesVpXQhdPnMVf3biwK2QL1ieHXZtRMnwFv4tuNzUiP2rp2NRtW",
  "key18": "5bVBpgD9MBZmmLYVFZtpdWVNfEZuwZUfRdYJHFnjDrEkShvq8uEEkJLx1RAf9Rkk2AMSz7qGvfX8r548CbZcoAF6",
  "key19": "5bdjiFhH3FqgFSVvxvfpFNHJ7e9YjRwgovBuZLrzbfYYJmctAGyVrcYdKmAhapepR9cQ9mmSS3jZjECnQJXBrRcL",
  "key20": "4caf8ecbtj7hLvF1AFgnbiaB2YEDU8EexmXExTB2WiVR7mWF6CgLVJCYRnvaPw7hjWGENXuii11u6qtYyvBVzfm5",
  "key21": "48msMSGFE9kMMGXxmuQf4WYZFZCi4CdLH1XHwW1RYeHBX5H7wgWyYAyfbLcF6jVFkbjXzwaKvDhQqfHB6Kt2qBpz",
  "key22": "3L1KwcqJDUo31Ankkyr2rHd2fs6YQZQCXTQz2G8gx6U6qAtMeEBiiCFLR9Br4aHoJbQt2aaydtvM1SWzcKoX6inv",
  "key23": "4irRsB7cquZXQKmDHs4hFqXJz7q2L5vCV2uQBfFsLmR4wuw6ou6hD4oeXQQqAusZ7CjPffrVQWEvS7J4uKqSTXBc",
  "key24": "2yqE4hG7kW1pnAjJYegYvApg2k2bV2eDJE7G3ZDygZjbYHdRHRgyTk8ypquPo6JjDqaYHntZUhHycaw6cYJkdLRc",
  "key25": "zqF6WmJ39dhhZpGkFqL4eY8Q3oD5Q4TQs5LgdFmbMbW9TZHACNz2g6uoumCC3FUictZNiEimZ9iNYkivpKwA7WQ",
  "key26": "5eKAKSfRuh8X2cEi6h5knHpXMwkTus4HJ8jLDx5NTQRCdoSsTwtbQKGMrnmtMu8bN7296K8g9BAwviekNBbZCcfB",
  "key27": "3fMEy4Jv6Ad6PqYsycJ2ijnnQZmT7w9K4iFjFinM8d8UHAAhAxkoQTLQBfFuvka7mkZksBGZYP97qdUJic3JTPTg",
  "key28": "NQrrLjf2eL7pTNNhECSp4498sYdRBM8TRSutQw7QG3btuwtu5Nw5YGSja2sJhy67C5PtY6QRpTa477ryDtoNjyJ",
  "key29": "27jx83LE7JT8a9SQ2Vc5DY4PP9QpesprFtKphjfcfPTqEnqfxeDmo7gybkspFiWbBpAZ8ASPj99NkVXZckq4MnV4",
  "key30": "3ctjLjuyHZjQ4sdRE7JmCroUM9Hgq1HyLfLRjvpviZ2rwGhevxshiYJ9btGd2wHijwy5Mc8SYWAcqxT8fgDvcPad",
  "key31": "2mVsqpvzNTzYdnTkVJ9Q3PV3s2X6xMiSngJBh3vPpmUWXjCPA78795H8uUvQAtBLdhMtBCV9AFs3oLwx8Qn9bGt6",
  "key32": "4bK5yf6MnQwnc7ft6eyUWBeHZbYQeiC4rMvYzT2Y8UKyv1UbUBJmn95Fwinvi5AZsrpizHfJDAswkXxufTmD9ito",
  "key33": "4ejSraYDXgjrwEXFJJ6auzE7tW7EkwFCKyJQCra2P4hDX28347KBiJAyxgXsi2KwAkKfLqqf1vjdLgAuBaVjxL5z",
  "key34": "5gjijFWZiUsLyvpKb5SUhZcK1P1YaMzaLgMvF6LdPzWA74utdXg3bQSeKrynh9sYxfF5cf7ukpM1TT2VthQW45Dm",
  "key35": "2cGG3ycX9jgVwdCZBkPTfqf5mJy5fCXYYd3vQw5eJNmosCm8UbbH6feTCSgCjA6XCZeckCS9fiS1UQ5j9uiSkRac",
  "key36": "JvxvBbKn2jMHrkvzdmxj4HeExfh9agwAHNPuLWG9GRmU9feRJV3ns4NRdwD13r9Kijm2oEuz2WfVrx6ihhBjAYe",
  "key37": "2mnVoFeC3DZD4dyk9KFJR4Fx6k9cDtykTQNrCUquoXzDYBWU76mGtVFxJ6bRcCxYYviNDwpWVJLi3cpT8ND3YhqM",
  "key38": "3iV2Mkf99Tn7RZjaesAA9UDG2Dbubvjcf5vSajW9d2WPdZvLxNR8n9oto996R3hECZVKA1oTktAA7HjLEd86LPQx",
  "key39": "4CQgXiJDmfbkLdokEG8ud3qVuFSA5hVwLdZFvwrhGRNowHpQiyLsU6c9RUpzihQpsEkbhpnViqBYj6DcXBa8S31p",
  "key40": "4XTKoVoYVZ8RUTniEymWM9fd58Jmayh6eRTWxGu45mD8L5s58cjM7YmHiydopwbgVsjL3RYx6LSBp6uNA5LsTc9P",
  "key41": "667nt1CuhfZpfUTuo2gVU3WJsD3fdPL5WiEr4ptaTY5izArMYp63XuLsyjG88F8ccDUnjkVe6FFBR8GLBE6pVMn7",
  "key42": "3EEn316zqNLyBNuUm17f9rMoDygjaCCqzJxpwnq7GsEvTSmmkDpkv6STyMrvqhR7LVf7CW1H5VJapDhPgoZaABap",
  "key43": "5kcj15xGHqgLRdkDaeEegmAkTVGzaaZqXuxwHxaQz9BD4VHctkQSkP8mRpVJ2vpqVPtZ74Fch8AU3NmfvHXreMnK",
  "key44": "5Z7AxUaQwAUgf9yd8qHF5Kypa2VDQKQeqJaEJxQv4iHNEcXapoZNeccM7o7PcPVZi87vkZDb1xFVq3fpvu8s5AgF",
  "key45": "xNT9h29a8d6kLDc3AD6ELwoqZd426PY5s1D4naknXZAsTwcdLHLWexEWgNPcDH6BPgwE6ag8ZH24UbDTikJAoPF"
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
