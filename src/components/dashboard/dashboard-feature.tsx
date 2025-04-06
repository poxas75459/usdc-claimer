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
    "5TfUiMSUAi3dVZ8Y14CUqgoQvsyNVjHRFinkm5f1H1rdAX2hHEY1ZpG1J2mFhRj94KQSgGBrFRFe2U3yGV1YHQem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctZvKE8WahmUqGuLqwt6aTCiT5Jnab38amzzAx8duM8bpiBRenjrhKdbLaK2BgkiMnTE1eA7kRtw1HRdtEy8izF",
  "key1": "3fUPJFtTBHmVUkVct1wSwH8MCt5FheTgZhrkVKz5zSaKvakdjc3qqojaykKW7kJNnH9WvjorDJNPPk642jzbEE6H",
  "key2": "vau5UYiRhiWSMHEyJtyrhy62w6Pf353JxFoaXeXTSpoSToEc8WNeiELSwU5EoHigaS84KxgJ7CuRRRRGn6un67t",
  "key3": "S4RY5LWVd2yzgN9Nr3jzVo6n1hcEtwn9VZdVyT5F3jifd8jMAihBqKRhxoBZP2EtVxcMqAPpCSXKQdadm9xM9bn",
  "key4": "5ar1C1HqdG2vf438J4zJbewcCQvxuVhHtRih12fVh5X79q6xGzHBoE4fuqperfpYTs7jj7ReQEf6CmKYvhk5kB3m",
  "key5": "q9vsg7mqBjgpWZavLnWqbTvNXPTTexJFZdmG94tQq29CSm2WThtVc6amdBQodoh8iZbX2RnvSPJ3nDYofZyMR3V",
  "key6": "5oyZZiPW2rpFT8iRKMoEAYJ4fi4MBbw4QNz1Z5kx9fndzdWegrnqxZBV6i5Mta9jfTXdkiGPv73WDeo5XZHzM3ai",
  "key7": "5XN6uXLBp4HUMumhJwy8DkGLMtjW18QZfXqFbVu2P6SH3gnay6r9brdJGUkwVBHLHJeG6Pj1t6dukznauTxHhW4x",
  "key8": "2ickcXC6WiuATtn8Z7iseLzu8DJCjtMXGdBjkYtLJgbgCoGRYTYBeSBL1BFu83PnPBPh5M3ujt2MuUCGNJhS5L1Q",
  "key9": "3bw4bh4bLrctv5zTK7dQfQrRMdYGGtvsBombcQBgAqK67KUetQSv4vVWBirc7g22ksBrjP3NUeX7vMDBftqvvjXX",
  "key10": "KtEYPu57DpfV4eVKfKLLfuxcXYxQXD9Ktndk3Zus8zmicBVx61kUPV4MVLr7nPrt2SoBKnS5VCtHJj7CrLwrZrv",
  "key11": "4bZuaW1u2ZMKzxqdzBu55PPcaVTYMv9uZx75JKHD5S7tDHYTu15nrf8MzQEx2TsCJU3nZi2KtVKvLFwmhyxAjLZk",
  "key12": "253xE4r6ByVMTjWhEmFqfMotEcNojZGMDytcLQKpnUvo8od9hqofdvGFirmAc6Xau7Yynzyf963e6bdbuBdeD3Aq",
  "key13": "3JDh5NH1KAyNdCBeUJifUH4ZGPcCCgEHKTS8hStXhk6EEmKZD7g1JyyGZ16dDkmhA2zWGbEkJWft3JZNuhhyDu27",
  "key14": "2482YyRuBkkc1bK14bC3EyhRDwNAtMEiCnEnFo5sP1K36Qi4GjjQ9tiMkstCMomuK8rNVfbcDw9TvnEZR9RuiyqQ",
  "key15": "21uGV4WUhqY2pn2QCSuRPdKfQHWJxV9HGt9KGdK1FZ1FJPxaVHMYaSxPYEsqq3h8ByfsK8aNWrpNLiCxswDA5tKF",
  "key16": "2SGAK7Cs4wgKu2xjYEArpGDGsWGzoqSqVwynTMtjdVaG4gRB27JCbT4VgGPuFjyyfUbkGoY4xT8A6oCr8qG3MTcv",
  "key17": "2kG8apCEAoYxDKUQx5MP5MUG1JKUJ3B1hzFEdnLxcYEdMwu8QmjJU566BU97k7ARk7JrZX2jKQGEXk2C75c5LPMW",
  "key18": "49e1gkgR8UaLmb2xFUvgWpiWQXrdrGVVDvWfxAmDGEogNzqCs6LwXapKHdGkoAJ2qmn7RqMztBhwFxjmN3zKqHXS",
  "key19": "3unwkVHeQ6btyr4dy3rgW5t1T1WNePbNMtgiJdBpBuahQebaGwRpQHoifHUY9KEfM5N98T2dUZPNgQeXV3bcShtp",
  "key20": "4rSVPJNMCPDU7veLgbscEmH5E5darkckYqyiCWCFWMwvK21XnaFXHG9FaF6auzWAVwN1zt9mYMPUE9aM5xUxhkse",
  "key21": "3opbPFEZ786wfrBJQtzC1uGeG2s5tHzDDWiKsyaybyeFHLCmgmPePeiGJoMCGZr3udhqUKm4nxocNbKWwYsrKwPd",
  "key22": "szNG9sYf93ccyPLS4EBYwohtjF7F9wcsktKo7Uvv3RVpYctC35VkAn3VGhxs8c6ofMKqRKqJJnTWmSKwHukEJyq",
  "key23": "2N1YTUbtRwHsLpHduNAtcZcw8VN6vH5Ldo8czRs19q1oqy1MoArUi35sKBpPVzYXY1V2HXhbWD3YAqbw7YQmeSJv",
  "key24": "4deKKot21fe28SvjqQGrii6DnJZvPSTPUShi8FeGJ4hAVvum4hH6DiL11o77anNCuiv2gYMTWDCfupXFn8NwieVn",
  "key25": "2kg6FZDjgBLVvVWCfAsbVjzUHLXMNfkPeCYY6hGZa3Nb3j1GYQ3NRxnGQw5aBDshsthGEEu2vKMnxJRg167SxajJ",
  "key26": "3PsN1XE9xNq2cVdma4y52EkVczR4D1b9a12veACt9n3CXAsgQx9cXHsm7ubTXVVhkyJw36kAfghisxjqZ8vmgaCT",
  "key27": "64mDyJnCb8P8FUncFjEvkjUew1N2txuCNV5wwduqK9MA6MnZTXGnWfDuaT9Ttz6WRLb7gtENuUAAt3S7WdpuADCf",
  "key28": "5BLxtzB42h5tUvdngKvYUwFwZEzdSTJ4jwgUai3sfzcC5Q3oJmCayd3YyB2Pk9eMBx9j8z1ixuYSnJSfHRydBNNR",
  "key29": "5wtvgHvUy1MthoomJ8jgRiayPq76NSUNQgLSyMRU2yxkvHLaEYvyHjY7oUMV79JkUkqVHBR3Bg817pANYBHMF1nW",
  "key30": "sQf9xrPffYhyC2ZY6H6bksZr3t7auKkCCd9ksm6KgMFbixZ1ufJDk4eWMH7vULsZqG5WqNjVfFiMDgHmkNaxeo5",
  "key31": "297AgaEPLURHBSQKqbdCEZsC84weNsoZDoQSSiv4X2KmEd43nyf15eGWtTUZokjyUFoXWSQ6MttkLs58fEU3Lojn",
  "key32": "2FirY9zin3H4LNB27vWhttpdjuawo6pEwheYa7W6SE59V2TVqTh5UHcKv7o9TZ8XR2p2fr6HyPgoo7sD69DyHt94",
  "key33": "4m4btVN5zzEdZ5VquUkSgdZBxXbvYvKurzwC5dTiEYNLzWYX4oGRizokrJbdD8yQByGkWWdytXQSveECKbtaBa15",
  "key34": "5K6a3zgBfsorUhmLfw9TYZLGZqDqLjcdkpZV9Z4iz8m7RAyvcWvgFnZN7nHPgM1qy4qBfkyC82MxhQN8gi6enipa",
  "key35": "BZuBEMvbA7sXbsoWJVtP9hcBas85ANT3XzBoYDcnKAabhoQvFzHjNPbQESex7hXQGVh8SzoGs1DE3ThA1Ec3VS5",
  "key36": "3QvASex2rPkEw69QTC6jfutRoTSji2oz74S2ez8iMAkuAqUB3SV6qGay3vqTriun8b6jhnHCmvWAgmcuZi46qqg8",
  "key37": "3yGz7VP4YGWFRiQjhTbriPRJLntyQULWMnPXXR1fLBd1xPk8S5ZNnBvhXnGC9GLrYeNVcDP4R7ysso26deVGbRdG",
  "key38": "2w2eJve2djCEK1PNqKSUAoCqKTh5pBgENyyHopCQYwfBsa19tJr6e9q48p9hiCqnujbg5G5SWEyBc7jH5emgn63x",
  "key39": "dm61bNaHcrw1LAnWEMvXfGFLUtDT6xxsicezkt12upeh5EFQhxaTgPq5CBYJoGxAFT6D7jRUKszHTi9rJ2P3xx6",
  "key40": "64cfjZpfUzRiuqYi46u4i7g6RvWoSRAsJYpqX5puK59a6yrpzoRnsvdwgabhZuftLZPs1exVvoNLe2bt9f4WXrYm",
  "key41": "R12yhBz3rzTx21R76xnD5pvc1ak5crbWFa98MGydzvHbS7qwTTUGezbFgvJvvhm6znv3LLgc1m8kZPV9MwXbQP7",
  "key42": "2rqSCX87cjEmmpS3hkWJyY75uTTgtsmyk2fC6RTnFRcPbpKbfwrUL2QMQfW8WU3gEztoyZW1RBrTbwDE9gRjfMb1",
  "key43": "3kMggn72h743tW4ZzpTfmF9niGwo8snNSstBCSb5fdCpsGN6NNd7FRsWaw8WDLyLUaJFkDZmVpn5BwfF9ZwE5cwC",
  "key44": "4q9MQtbSFfJCH1hd8jbWC1FwY5b6rbFNF5E7tNehwbvoKgKTBkxc5r7rcJHgW1dSMhft7RPHiVHM888uCjcKXZCy"
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
