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
    "5VZVhRujkr3vAmRswJ7na5xBVain8FYVrGTRpGmfEmixKadNdS6XUHYTr1i9PVVzoCuxsASMWtK15XZMB4mf6zsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r8yHA3YsEsNA4ig4UQkk8StYedpcJxFQFimWDy4b8QvNQFZzeoQsFXovZ3feBcQbstcqL5vGvXAKb7rostaCAaG",
  "key1": "5Hoxhup8o7pjJmmw8oJnx2HNPNHKk9XHrG69J5WyNXGRxtFpNiEFDATbQDCck2GSXFneUMHyH5zoFW26hP8h1aCo",
  "key2": "5ZCpnnC5s1AXgvRPgowASaqRjdp59XrQEks2wpm4zxU7vxgDdt6jMoSnNX1xf3brpxCCPhCFxPcBUaG7FXaVY8wb",
  "key3": "3WuJGgDZ8gRBNBQD7oucrZ3EFgZu74tt4Eag5Eh6teuqsZNnxpZhErtsTiqHkkZQJEhazzgkjrBLs3MTw72gqPbg",
  "key4": "4EuUDrRtj3rGkor3UPmpAMawbfEh5YT7Y1ijD99Yod9pW3AXbWJ6kT5AUSk7dXD1y8mgdep89KuhkEQQmNyxhTF8",
  "key5": "4HGh9ci7cVLqywAyL2fiAggsgyDwW3uaSXxwffP16qi9Dg4aw3uaMZ7TgxzTzjnW1wE2WAoxjSVhkv1C3xhxVqPS",
  "key6": "2UDDDSSrZobHzYoNGZcuoow53WrNipcNDi5KusCFbufcoau8Twd5VSZkENDM4app2VQWWZkHKjdTMKfNMLLYtJKV",
  "key7": "5VDArduvHFZuwzqZvrB19EetSbGbTBsNoWGv7N687vcCnLor7BTLS9j5Vg1VTH74JSxdyXcfZmR3vCbEnm92odrv",
  "key8": "3TYyn9eQw2Mht6vs4feHpB1p6uQFZgrWKR4DC5q3S72X2myBo8AASJ33J2HtapsT2bSUp4FYMcMP526NqZnShizw",
  "key9": "TPxsA8teT5bYFzavAyoxrcQ37g1JBZZLTCXznvSmGm1QhF6jrukAg1hNwpb7pSmC2ixaECBiGW2GbPeZZnkHkfT",
  "key10": "3kpbVgpn54wFMFLgie3JRvd1APZ4EkJXhPFtr1g7HXzf27G6c8h9gwHexqXave7weKRBwvv3jhfAeNJvMaJNiLko",
  "key11": "4zzzKNJJPech83r5tmGwvLrmmKwFhsdLPvXa4K9ZznHBEpdbgrVAcg7jCTAGLXy8b3V81ZVca2Yz9cC2YcGDCiTt",
  "key12": "668iUwU4aM7Vu5QNoNZoKyXY11NBvY3TAKVJgNSiw1hoLe4NNXMzCVco2kumCU4HrJgNC8Da6yJVV8rReTbB9V1i",
  "key13": "4SxaAeXsLx6xcxuDwT2412LFC7ZrgfWd7GhB6PLobgsjtjcLoxCHRcV7NabuVz2Fk6wZ2Gj3KXaY1ccRNbWXyizt",
  "key14": "qmhD2QU4FdsqEAYdRpiQDxwMnRDkzqSyC7AUsgQYWGsJnwtQF73y4k4mRNPrUNWsY4HfPQ1vfPhAxQ1oW7jNiA8",
  "key15": "4HpsPf1NUzZhFeqy1Jivf1fKXrQ7UQokhAvPLj41EtcAqTqouvQ8Bx3vnrwVL6trsBYPAfSqmjgvc89PX5dL9xtS",
  "key16": "42iAqeobDMhh6fkEjQQbquCtzTcSDxDVTuwDii62M85GBvrVCvxNkgXNEmguuqmLgR8LyWJtHahmoc8BubYbzb8W",
  "key17": "57fi5B2B8i9Ye1zhumLq7CjSTAidNQZ2tuamdQqZN4UHcKVC6WRTbT5RR7jgtG7d1CCS2kFrpHCqgKnQT999FjfK",
  "key18": "29kz89P5AyPbkuKNtAZq19zLv6sbMTzoFE9W9jxPadvZDhg3K1D5WNwJ9jnUiVtNaBuHNRfsi6D2JZNKUsgF1MH2",
  "key19": "4muedrML8x9Mov1JPriToW85n2piv3DKcGSZGnDmwan7mmaveL1h9dPTCqBKWC2WAAu9fohhiiEqoUc3UfUSAc2a",
  "key20": "2gKZkpsVxPKArkEjjT9mQm4Z2cAs3hqkrqd5YkEyDsyrFDVbz9JKqS8GU1TPrR7X5nps8cocEfBjENBgXb6GBiQU",
  "key21": "2FqdFzzmKLXWFSmfiTeUQQi64ciR2JfmeUCcaZzegwgVFe8EztQiHJ9YiKsJiSaHuowV4hYhqW3zLekM91rsAkct",
  "key22": "kV17XgFxzfpqipZ7vZSrxfvFh5ERx6L8uHPX6VqWWkcuoGEX2pfbjjg2cLcV564WXP4LVMpwevrGejFyDSSTBUx",
  "key23": "JJsUZBpymHRj9FxufCScwPLpJweUDTkK4ZCN1SgZdiubnhNkz8aJm4rgAetVHDEWHrxBiXh1vMU9R6otZcyfpXg",
  "key24": "5KoEG7e4boH8mrfMoHt6dvU1NpY2txsoJCqMXAKfVJHd9qKzpn3oVANPe69rdm5vwXbkjwCQJ8ggZVgCzu9DNb5K",
  "key25": "5eGnMkCktL3kJUCw6G7Vhwe664ZtqLcFmNGqRdTA1TsYq47Vjd2S7GMeJkksE7mFqAvtVCumncdoPmiHk6LQBXd9",
  "key26": "jt8YChFQgKG9R1U2Sjf8C3sWy1Mh4KUJVVpoXk9FPnR2o1hTacEsRark9QwgFjkKGpYSmikN6N5mfoYWNnba3Q9",
  "key27": "4M9HctvCp2c5pUyzcuxXeBwJpvmoj6bp9RYQd8x7L7do4b1Dj8m3fETF41n4BXycZaX3VDygjMnkqy7Z4V2PMkKE",
  "key28": "3nwzBwjdWPHMLyTmHZ14jsXiDjNtjfFEQiQormU11mPSKipbieHDaRhjyf2GSnxVGPhvMrftFnQncMZbaqmknYUN",
  "key29": "5uXMknHPZSBtJdwrrSVVmzQg2SamVvGJAqnM38tqpr64Ein69bQ9KHqW9MqM2tSPUG9bYhdL6GCTK667qkPLCEto",
  "key30": "3zfZbegUoEgHvS9pgLXYgL53B1KRRwyycwTTaSrcKSvzpNG5WFSjFEbDNzyxgoPqqHrgDfX4PnS7hetBFbWe9Mu6",
  "key31": "pxAG8bcsenMJoe5ujypN21wkysP8KG2HNBx77vFAmZuTacUiiAtjtjhQeXTM1CuXE7QjfhC6HEWB9kfyqRBF6Yg",
  "key32": "2RmoU1kTc5bQSc1V6MJ6qGAcPHb7iV8d2gQcTJXT6mxa8HxZjxWd5BtKxKoMxZtCTnMMPAkmGkuhBSvVhkvXFXnR",
  "key33": "3Y8mjRJgy33sSyawccegttouAgcuJSc8YpaJ5EDAqn6h2z82P9EEv9QTUDMsJFMFqF3JBUoGW3EoHjUeRw9VsNX7",
  "key34": "5iSicdNpT3F5y74EfHJs1YhfzWVrHJohz6UMAzUtGpt7q8sTF69iVQHkB7AqXXruTBe563Tz14Pdkodcd1Qcxx4o",
  "key35": "4tKpcYQMUVnUC6sTRuKf1wUuCGNZhj7JmBPoCGrQKk4gsTWfwt7Wi5mJhkzabEe4WxNskyDn864pv8GXq95xR8fH"
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
