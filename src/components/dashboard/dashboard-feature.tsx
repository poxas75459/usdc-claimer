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
    "5cESjMmE8YCMMf7p9E11mFcdrcFD2ufB21KGTRRoYoPCpiQb72sider6gEJPkNbrFhcF7EkX1bm2Z5FR7UiX7zZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x2314HmY3szbCWE6Z8pqaVLtvehTYvZUpbZDQo1ydH5sqzLTB9FsoRf7tGz9tVvo2nH52G7nDaApoCu4ELu2u2g",
  "key1": "vrrYNCmBor9652YAPzTcGhFcbZCrCyTH9z8gLMSiMQY8AeJARrhyGBz7s7WSREgxVZwtBoMokyAiBKMVs9Zfj9o",
  "key2": "2J9o8E5j55dhRXFUzTky2zVGaXjGNJsj59qqVGxQHDPFBtK8zr94oVcEshNsqwJdgRRgpWW1GThtuS5BpdwzfdqF",
  "key3": "5F8BzGoRmYxRVLr1g3NmKV43G5KLRk2Ysmcmxs4U464Kz4EuStghCfQirJft8VAys6euPTcEx3JkkgvE6QCCQ3Tg",
  "key4": "62gmdMJS4US8dj3Z9VepRVEv2zZkJkan4AxRZwR1eTWHqSBz1EfUbr5p1DMAtJW9BekT9guTwG2ATYsKr3tV6gF1",
  "key5": "3NYBgCqtwpT9rvp7SKqPKx1xLv7wxd9Uwrk3of1noMHwnG7HV6r9JNkBsuZavqqqzqqCUmpYsCViBHqr8y23fcaQ",
  "key6": "SA6JWc5jdYjswbpF7eWTiQZdtdn66ZQKcoh5XaZTQkj9EJxQvNs56jEBQPuZPUim6f8iFfuRZF6Zd9nW6pXE2qk",
  "key7": "YTKkdsimCmjZHabQFgJW6MEoa5DaUicWMFMugpnwgh4MLysdcEiheHLJ2BuJ8DAS8RL4vGAevjapCRG1uMhqGKd",
  "key8": "5ytJYceQiQ4XGueoYV9LS9ELZT8RUhQnt3FxruYNQAV8kPYsr1wetY651FxFuHyD37DVczKHtna9FyS38CNkMGGB",
  "key9": "5z8S1RFQMXcrT2jRty43hWSQcLQ2fYuPMqiKDuPkUwwNhFCGkoTFhQ8BviHQQV1SZsmFGZX3GqWp3PsuJcp698K5",
  "key10": "5CoQY72ZNs6oJgQxmwG5GA1rfQK48ay92PDDSV8Ro9ER8p3A3Z4L4PiUMAz6vNB5WdurkCg1TQhu6MfcrjpiMyft",
  "key11": "3YMJznBEoRPa7TigNgHHEg9V276w9Lz244rVB557Ts7KRRAK8hKCCC8U4CE61cZRLxKpFUNb7wJ2kurULhbDJHs5",
  "key12": "37pvvGejhwqdQQpdWWwcnLAiKKvqiDFgzbm4cbBUUUsDPQg6vxqaf551M7Bhj3YwsHequrjm5XXwEqqiYBiCvoSJ",
  "key13": "4NSM6Yyh9rseDtokvYndLxc5APksNY4koCutaphenbisXfR5ksWhxQnGX5dRWEpcZj17vZRKCbGSE8feFGyBnDMd",
  "key14": "HjhCoXe1sLQaSDB8AgvqxtaMFZosvZxjZsiTuwXYyYxYKgLtcjbWFppfTtxkM7EHRgVGUqBsqopWD8TvWpKqgd2",
  "key15": "3uH3wi91492N6JVEFdNpp78gpkdNMvys4n569ZUsxYV3fRzvogNC8mE6ihK44QbQ1kK6Duzwn7DnLysqh1kv85ia",
  "key16": "48KTzoZSzAEVuSVBhBEhHuYr2qyqv2kycURcLoqHnRvcrikCydn3aQo9pQ2oMU5yoh93y1mHDw1XaHaGD7h3iqR4",
  "key17": "3smPPBXi6wfrccrkhAzJ6s7AYW1EpvbBZwkiXuuuYZ2CthZTdQNgXTyhfE6YXA8ucb7qUabYKwkzpQqUUyrGpbrX",
  "key18": "33rwMv6LGSzFjhCpqULQncQ6bajaPLmcMKfNTgQwL6DXxbxU18Zz2RXR2CLMKcHRVumFV78ShS5AsxXcgpZGtNAL",
  "key19": "49Zo4a7q7z7DocPp2P2jkScKR89tyr8J5jvHCYxSrAKtL9BQgk3SyuHAuKNW4m3r6vd7YbGewLjm7MPQ6MPJkTgx",
  "key20": "5veS82TwHScpnBzwvZ1NiiQYFYVmLJpD6PE3eiLPduZhTRwz3oLZ4w9F1a7w154vzZZHf7zXaoftnEyDtDrKQAMw",
  "key21": "5z4irUQEvbxqWAGrzYwGv6xR6w1HzYYkfomu6rNsvEz9Eib4snsgzRMDmgvZRZ3nVWRGpvgzjF34Zxma2o8UgpAs",
  "key22": "5odWGukagfn8xSixdcKiyofc8721A26ycBWrRzR8BT6XFa6Ze32HmXZNkmGJdKzy1FdKhPpnGfUfbWb2F78QDUAU",
  "key23": "2UH85botYREj73wBzpHCTxXhcjD9M1CzKEwqEkUhjssQGSsUHDKwV63wS36VFU7wF9qR3FE16KP4EHL1XKNHFnia",
  "key24": "5gkA7pFQja9rpEFGD3ZBgf97NCq3eoCP3rcmQWEHXvFKiVSxgAh5tgjew6V5y1FyaSifkkHcBfVtB8pXFrs1ehBW"
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
