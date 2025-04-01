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
    "2BCvU5MqduMSTvsNQ6ut2cs3ADNQfHx9yaxoe2hJQPJ28TrsCnPyHVmbpMdy9Axe5JJ5MdN9qySZv7RqjfK19Hqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7E6G9BR1fZX8X6VhKSs29Wj4M7HzseQHDX1mymRYcsUjmpCRBfDvBWdg4cjusRuRhhyfXL32egWXKCXRQoL3nU",
  "key1": "sA7HPBPkTcFRq4EpzEQhBbfeRYamME2s7Lb3rEDfez6e18g7rM6asAbEcHa5nx6dnfEoodR5FLKKduhKjjzGfPy",
  "key2": "2xscGGKtwp8Yy4nJWpQsyUq2ZpKfCpsF3ypUr1ZRyCzG5HupGDWBccuegGmX2cMVrDYESho9KPfZ74bHfReSeZL3",
  "key3": "5K1Vg46XDGu5zfHzgKMQNnfb1EhMidg4Nuw2jDDMorDFjzVGnHyqTfSJeMQfxBwjUS32obmGtgWTDURv2v9jZHtQ",
  "key4": "3pF3RtbwFjBsztC9dcFzSgrgTWBGKgEYMu1gkNTqeSWBj65rudsP9ESDCqRxdB6fcbtryf958PsH7P9r8YFA9rTh",
  "key5": "5npT9Y3sGPJmTZVdBUbex6mhKHJZtA55sELq5aXQ2WBEhaZSF2KdVTzZTZXadPNFX5XTUgUmRR6BCAiKUg346SdE",
  "key6": "3KWunsUAkjwTPDhtvSrpQT8rxZZxY3Xu7r2seDtyMUfeeXnCN8Rka4fjQaynNyqsxm7PMaK4CnMT3BvnkLWEnpu5",
  "key7": "2UviqxHR2stgDrXJf9Wrb8kUWdciF8zGYL2H5bt3kZ5XgAALwBFHPkat4QfSn15CgG3CSErAvCAcSdM9ZyAX8ABr",
  "key8": "4Ra8drRTHeHSSt6SmpQcqRTNZ3Nw6T8znxHaBdQR9mja4djkiqpeRUPF7Q3aFx6tMgMgzz45FTcuqy3xYx9YLZpT",
  "key9": "2h2HPRMcFZZ5dVXyzDXecygJKJdnAaeUpXV1gjA5oUsCzDUGxsHZ8LnnZQXSapnF1ZZUX6niqrAvPXoiGHSx6Ewk",
  "key10": "orDMKN3js1zDs3LcJS4pA3C5fjBRVyCzZWomr3jtU8fDnf77fSbZLdZywNoxeDWdLaVoespr6VwbV6yGiuYjEUL",
  "key11": "2MTa8JXWWPinCU1dZXDsvQ5ADCmvfJ31gkNygqX6VhfWwXuFRkZB5nZqPH7FvVvbjNgT2iHoxaDRuXsMMZyXipsx",
  "key12": "4nnptMextuXcpas7GzMJURsuDohxKJrotDoonTCR1VkdAQ5Y7iy3yp73JVXLAgkB3wvaLDPELmBS5yXd3Y8bTJSo",
  "key13": "3xDs3Kw6fH3ajR3cwuAmgSfzf1FC1jj885ebSDQXrmDhsn4qYgzPdnKzvYHHpY8c5Syekp1TWFG5d2PKFd1Maagd",
  "key14": "2nu94nwADDnccpztAhbTZuJ3dDnAggSuhouUV1zfDco3tytG7BcM5jVhvFsf1coLTkrVFvtShnGzm7AZiCAvLqgM",
  "key15": "2ad22d6gbNgVnME3HM21G2Zmca3146WxKr2ZgDKfCNyBrr1wmMS7DYBsCiBa5XnRHePbsVWMNZWVoJgk6ANzuqPa",
  "key16": "MPBMYTSnZut3UmumRKVz1V71KSLVpCNaNku3Miwjjqj7cexrhT7BNo2wcNvcafTSWf3Hz6zEvRxyX3QkwDN9kgp",
  "key17": "srSdPwZZKgVL4w5RzqU12jmBHxQwwwCSaCDhqaVLf1TRBu4j6HyR4hR17Tn4mSXFYZMcpyjicWSqxuuUgiXKCpe",
  "key18": "3ybJiMb6uRTuEN7D4dWnaeiVc734daVQGSZ3CgDKs4yi1YTYv2oCr5evbMHvN8Wif9s7tvZHXPavAxy5YRmC96Ui",
  "key19": "3h7HR9gW9fZyC6eqKgQ1LbAawvWjw2BdXVegUX3yZJ7BH9Hwtsuf9JP1ysbRL43QX6y75yupVGipqegYqnmkPYpb",
  "key20": "3kbUUFQbgtmj4CGfrF2Cq81fZtKqJcmaKCwH9f7EW3jAVfF7gJnSYK8ToByeiX9UbZKtcEdgYY8mTDDJpNbyLy36",
  "key21": "4CsVKeVHwWeYDRA7aVp9ZhuxXGDpcZKeaUoNpoHaDrbdpQDq4PuYx7XMGzSr3hc7Qh6yPT5uYxebTPr4j27ixVZS",
  "key22": "4tHaedvLuCr1JSKJNEDnwgkX7bZ41KP4rUaNvrcUQDZ7WCtW3BtAoY35udeSVqjQkj8ExquYUUnTX9oEGkNy3PVu",
  "key23": "53RbysD7MJWEYZZehETmUV9QWdzTSvzgxjpjnqE1RD35y2U94LieBCBBpazoPv5JSuK2gRWS7HZHJL5wQbqgxCaC",
  "key24": "2PZ65ApxLKDKXVfkjNBRMkAeCHLGXLd2UbQTqLMTJSRP37u77QjfkXhCNDkcvbULUezQrKYbVSHJLKSrTM3UMHyP",
  "key25": "5Gu9Do6uqJRm5yGDCEcyGZMLrPANR5PQECGRUUnyZX66u3ySBRxNVRd48EWkmHfzt3b7w4bdo5bhGTErd79miKhD",
  "key26": "3c6ECM2MLE1yJFtC7gFqNxK3mn1ViSjxqorjKhw2Jhke7HHCxuPkkBDKUMLtCCC3tjNZYqPAhHuF5mptJYoAB1vL",
  "key27": "24U1PaqyDPkoZczfmS5jvBrhCTcXpCN7WufxZRHSE7PRT3uex4A6x4EHHCB5sYvYnko6XZ2irAUddW7937MTHhmt",
  "key28": "4GJMDXrtJmjrqebbCiH8MCn63f7zCKqSUzfAqRj6JXBk9BjWnBdVPqVVGCYUzP2ZTkfT4u3oYF9kfePyaohZS68K",
  "key29": "2uvFz1uWTodAUGNGCJrMcsVD8rMk8paujBZt8KBntH5EQ4M6u1boz8gcrGAukb3wekdwTEApML1RrxMtNRg5V7Re",
  "key30": "5xdj824mjRayzG3qvrKohgxvnom1FtpwQHgA7qVsi9hHmfbBuRpbAfjZD5q4rRRrEsN7oR54PJzwQ8ssY3s4djjk",
  "key31": "4Jfmy2BhnPcMngJyR2Lu7bCopG5BqWpKhQYED9gPrXVw2sCP9W3zYkjom5R6H3wfwcqRtFpWu6c9b2h2qMjCBGoR",
  "key32": "SrXtmmhnLPaA77aLzzuZAzscFjmnBubjT5JP4DTCcu6j3WohzW8ayn4bsBTMMeFhp1SMXd2MszM7qF7z7sSYz8e",
  "key33": "5kmEwPwnBDhGKRw4saPvdFrSQqCQW5hggSLxMP3AtnmxeuJq7wAXYCLZ4rRso1hHyqZyPgbNp8tidnZotWkXbwAT",
  "key34": "4hut3aP3YZcwqGMifvFG4kQZ3PuAfT3qie77kDBhWtk9NXXtjpAggHWoupKM5aTjEd1Lj8rWSAN8k6itLgCBAs2U",
  "key35": "2TWEmzzxxSLW3mUYNhAMKggLpRMnwyJnidPt2Rgg4XX2LnFM4SemKJ45kMC3C7oQdouyLCmtbB8SC9TJoxfPCtYX",
  "key36": "5NTJxP9PDGUzNjXJGeQmxTT4zr9WyF2DqSstKVHgr7KbDXw8R3Q9CGhdtsvT1bnyoHG4Zih6zwanhcapNcAKCmoE",
  "key37": "3QShU4txfiMYA9VUJKpChoYxUKcyKEfD8Vpdyr6eaheAim31BkowMaEcjJ9Q4CPStuTJPoMYu1HuPhC3m7LkswS2",
  "key38": "67WtqgxH6a5kE87PuxDLcjTyNiBLCq6RGthpN6ycw2XSS5izzjFj6YqjELDrdGEG7RG32vGPiTtZVfoRZcrC2PGE",
  "key39": "3Ay7qKfNUBSTNHD9TAgmLm1AEeb5PFWx5HP5PVNR7Njh4aC397paHxXWtjFYmLdkrZJMqvBQpFYLzf3r4TeRBtAG",
  "key40": "3UcTGd32oxjVZSqTKr8TZ5hVXa78zT1vnJEeLzHNkA4Wm1q8tkg7Gwhd9gro9SRE77vWxHtDivC5grSsNkbzQeMz",
  "key41": "3GvhBhtqJe2nYsyu6b6FKu772BBAeRUPSgkZDkHioMXtH5gWF8QgGH6EptnxspXh45QTYA2p5Yxi7Rto1CqbiL8g",
  "key42": "w7dZsZPg1bJeqGfxCvWkuq784cfpkhwhPco1iZmfVRu8JxdLdTkbfWNcXcP7PcoZ5jfRCTyz25Eyha7bmo411E2",
  "key43": "2ZdUNHkxzG3TJ9ACT3XTD5U58qZBP2pv5nnj3Arq9FvBJKvBD86ExgPWfpiu8bsGwyUMKUwE126AzNkX84Y34TLS"
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
