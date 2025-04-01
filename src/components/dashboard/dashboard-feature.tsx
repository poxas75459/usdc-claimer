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
    "3hoUTAzbJ8c9RVokAGnLi8XzLyvw6YoPSSZLsmfXNYQFQdi5FSXMQFH8itJA9zyeZpuYSTejEqf96zJxRTa8GDs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zz7bpdjrmFYTY8Z3ZTjbikMDAQyUvirdJV6k948WvovDN51WXirM1i4fVxDeKMg19DXVw48kNrymCEqfzGJgUa6",
  "key1": "64ZKHrcU4N5p18joshCcuNPCthVWzR2XgSYjSN1kkV7oR18XMRZ87Ruj4cyeGAbLfogHBADxtSKUuv11rH5T5dFX",
  "key2": "3c5qPkF4W7EsuC4XPEiv6tcf4oobtLwy2At7s24w2j6ZbC32f5GbWS7HW9efuB18v4C2c74nr9xCkP2pVzzwsyXs",
  "key3": "rfvviHSbPcXvaUGFAGeu2EktqXQ1Jk641cdr34YuFuDWT1DtfgN6P9pXQeWL11BrkLohtNNrZQHfpnAvDyRdRdR",
  "key4": "4D3o8febmAonsXiFCin7qAsDoDRZpWpnBgqiAStXmSJAV3r9kRVPRqjW3waiHamoVFtNvbTdUFVNmWoCXf51C77r",
  "key5": "cS2YWpCUiCeixT1ohfiH9LrTHS9r8oLWLdGjqoW9XP4Uayv5wK3Waz81nPmcLuTY9sU7AK8f562uPakxDeYti2f",
  "key6": "2ymofgpzQu2zCpG493FVm1zE2pVeF2PZop6i3QZjcRpYqNRB4u8zzvmemF2vZsiZWWqJpzy6empHtLJbY6CQJpsD",
  "key7": "5LLMj7XbmWcQVgYZuL48iTkVKmfBCYXZkiYfEw9TDAh46noPVJxoSg8XPswmaNWFn9f5443b7xbauhmxfbT9mwE1",
  "key8": "ebo8D3QmCuA3ajt1PCStg6KQgARBukWQxARaq2xhNMCaSYkMtXxLMNcUGSh1DZ36dSGudUzBZEz3bzCWhHBEvMF",
  "key9": "FQo3ysx7ZoQjGnywNd3K5dEvJF94WaYJzKUQ1fDhsPpT9r1GcWa1jvreRWgg2rf8bVwBLrAUfuYgiZFxZvzsLDp",
  "key10": "54RUNyDeKeiZ511GydryqdLcXj5XN3DK9aVs2NeRvbxrG4JZy3HvcUYq2T5vqYVwCENSTMFN6jqNpCuqM899NRE",
  "key11": "4djEgGjGqEFvz5GFq8p7q3Z5CpEZqvSPKuUtpbD71eJZoUmCP6YkrmdymkCo2YXR2KPjQQ9BDDtWQpJiUWq4oEW1",
  "key12": "3sNpyo4StUAvU9xqB6dTCsY54MWPNbcPUqWnL5YNLxtfSPsySKLvbMbuwbJ6dzC1tzjnwuNMq7rpwBSqcUPeaAjR",
  "key13": "zNDo5xMoPim1s9XsodQmcbLwXmpzqvGcCBpVpowDwj9abEfZsqFkRGyebJb8uw8z2caw2WMhTnvpvmKh8cDJTzg",
  "key14": "2qjdWq8e1v5EZ23mQzpMrK6jEFfzXuVc8XHbpGeKqhJ4GdhuZE8Dzi3zwM5kkeLmDGp9GgK93RPgT8Gwtuce4CcN",
  "key15": "RhN6Sm3NEoV4LTH2cTQ8AK9fKfDkCg5w2bTHEWeZJeHTf4B5dF4FLmpm7aY3o1gg3Enr8RySCfKWJx4EuoYw8ur",
  "key16": "61EzN6L8MzjT9x9Uv5xQevm1vtXQEG8MD92hqzceJvjBRd9pFBYSqAYxAXPqyBVCtH2UTgvXwiDLuHETPGQMeENS",
  "key17": "26FwWNn1cbtM1LrubUeirgdAC3ab7DsmkiWaKcLU4Va6TDTJpKYxqMTvRjxWDCoyyK2cxrc9ggGPCxrS5mewp9v9",
  "key18": "M6nK8Ae5tjwczNMz51t7V731c6FzsfGbbrFVjkt56ueHqdggnZ8Af9Rdn2PYXUNWaEeMQdEZgP7n3FJABLDC9JU",
  "key19": "4MLRLcKTyJ4XNNLyjdM8JTZHMzVCgZF4VyUoDRjK6tsmVNDo3RrBqYBdyGTYmkRXEjxyuZMx69Yimxb1P9xSHkLe",
  "key20": "4RYpzy1ehaZaoYmboYJhM9bErF62rNaUJMoGrHe5Y1QN6hqKnYV8u5qsxL2HL19P1bCGVQaxkLiMDjV5xjryNDLw",
  "key21": "36NUTUiSbmUgbbL5fVZ69if8aaNL68Q3FtZtZYv7xmhFFba5gh861HjoCBDC1qiSww38ZV1QEmkURdQRmLB6QphZ",
  "key22": "5iNEmUZjvCprsTVYABJBt2LPzFEK5hAmjpaHaFTsnQvkWA6nyDowpTNAEVdKzCMntGTYr2n8pZeobbjh4DBLLNmU",
  "key23": "2VwDWCLzWZBVwk9U2TWhDNXRgEwpcL9bUDFKq6XD5kyQtdgc15rJ3BMrLmBLVWXtRcDZbz7LBcmB3b9udCkYTwdk",
  "key24": "2riTv7pSx7uRXoALaTZjcp6Qtng3serw667ggpKU8yNEF37KeWKWYCBeGSddgFG3tkaBj3dgcKC7uXFqj1EgEb4Z",
  "key25": "3Udj2CckCisHiPPke6f3nrSAC8HpPUNpqEAUTL8yUnBS2QSx6B13FJTbSL37LC2rgLzdFM4xj1bRbtZ3oMfwwhgk",
  "key26": "26UVCgHnPtWboUjAzqRW8n7HZYgb2tnQw7A8vqTMBUM7CexTPh52r5fMidPWzrfkkgNA6oEdpN1Nme1i4XprcJfY",
  "key27": "3q7j4FMn5PjjovaZMZiJZkeR4eyhsPEGFHFkBE6vycXQ4HXxxVtRbDMDsyzFx9pmCuMLxmeGsbyufWjKMVkhJzrb",
  "key28": "5SphGUzyR3vvLouMeZ9j9DA7t7Mywp2BwMUPkHAGWAE25Pzy5uWkMRTRGfgLSJYFREWUtBwXKwc58EdseboAcUzm",
  "key29": "2eaKxsHtp3KXSYaqnoV8138HgztwkShT4N4V5Jon7Hf2RxWHDr49tYjdix31YNhhVo2MZWGZKpdg3mJ9DWHvf4cf",
  "key30": "679s4VYzJQttnXTaYdbQn5cnchUcebjsizDBG6ZkNJaki9MJDoz1m2Nr3eTM5MQPN5ibHbZdRxMwKKgH3tWvXqBC",
  "key31": "PaksVVgwWQhHiqjiCSaGddncCn8v82sVfiDiop4WX4EP29nfhzHgWHkGFrKxPmGtTS418e4rS7aP5S2BDcexiqP",
  "key32": "49YrUv8pzcdtjvuhMCgMNBL9TGsUKBuVdEr2QAx7BV5JtEZdRzsLhsruicUJm5CKhWsPmm1eDp3LFPuKP8CeQzme",
  "key33": "3JyFgpp4eM9NpXHPCKKP5veEoqY5wc65MqLftW8kewLGVddrH3mmmmQfrddm3Yni3AyJdVa9uLbJiJfeEvgYMdKY",
  "key34": "5sEir8CDtLfS83ooAjauVXZ9mfdLjJguuctnorZsvz9nQCm935JzeeRWuCdgbdrABMZTaEV1jFCDx12GXAj6NmG3",
  "key35": "t7QS33AFkYLXYiu6hsVwZT74eEQCyf3jhRskj2Hfa6fZzXscpCuMQH2KLCVmXe7VgLMhYXSvx4tS1S6itnrJ2jM",
  "key36": "HttLZvaWVXFktsAsxRAipLebXSxW48mMHoapcpZJiDo7ahMLBEwMPXbj5qt67HH95uNc2fDzN3Mt5RT7fbPcDpS",
  "key37": "4FjSh61a8eu7qr518HaQH9JQJfiVjPrFzwrJv7dU1ZwGL9ETQmkB9drjMsUTyk5P9parBhhm6QAghFGcGUdLw91k",
  "key38": "59eYHi5nUs9MgsGx2f32j9P7YTwHP5XaguxKLeMVmrv6iQYtMnjegq7kYQ8ZCxgBa7B1ogaduWf3YXQTmM1a9MLh",
  "key39": "3ojZm5XbT6RRi319LCmMd5MPPDCsKQXVvi9PXs5qTcfA5zHPqjws19EtntmYwMk7mhZBgnk6E5LwT1y1k5gK6YSy",
  "key40": "3XrVbs8n2DbikaDS7s5PTvwYyfAqXKFHM6xC7L2A5q6EfajSN5qB4b6f4W27TEjgeYNPE4yJkXAi5c7CbR9qVNiZ",
  "key41": "eRE7mQjSDst4b8arpfvuBVa3Yq6AQgdE8UWyH8V6pqhiygNaoTKwmBze8Ne5Z78Um6CN3ia1uhjCtLJjadZk7yh",
  "key42": "3jxwPnwrtegtdN8WgH2aZDasz5R9V9jHiMMEsBmExABCMu2MivKTH6WjfYAEmmP2TKrC5dXWPruiPnNnGLhBhAQN",
  "key43": "5dqfoBJ8Ras1vxfjj4hGYEd5x4pXkCKy8Q1xEY7RqrbweuMQpbjCv7cHFByPds344MnTwpQ4HCqhyP9qg4MH3ocS",
  "key44": "3j6tMWgwMPi6ZGMT27rwUDKAfDT6hYqG5zXzcDrRwdhPVTbTt3tV7LE2JPqe6qByWkTE9qVTMfnv6Udrkc1R3U9t"
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
