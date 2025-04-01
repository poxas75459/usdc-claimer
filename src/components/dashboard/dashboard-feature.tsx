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
    "Ji2qNUTDVNsG2C1kpWn9K1gravaC4xEaugGUK9jvrqhCLnZqQkDpATHP5jfEfx79qQDMQ2VboNSS5kVoBamRZ1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kGQGP6NdEcpinpgQmBHkd7tw9ZKKW1HbXdCxnsFFsVJPxFQkspxfDkryr7i2C7uwxXFWx6UY8bnHmXhq53riMGe",
  "key1": "xt5uPKXTEroKYTPV7KkhKHDKLzovV79P1yzW3Gn3kEF3GNW5Ps3dxnMBLqdradZKogvqB3gSMtPac4RS8vKJkRx",
  "key2": "4kbePvsSpPsFRRpGtZ9MJSxeHp9XWh6utvk7E9aKTmNzfbPmSBaL99RPrJrztm443i9FnYPRwBaQjh2ZKZZyJJMf",
  "key3": "3yywJZ4gA1CbfKCWdvy3mh7M1Er6AgsQaGCDjfftYyzM5sXrwdyC9MPjbiLZ6AYRqHwhjpvKbSXSPDsRkeHbrCfk",
  "key4": "2WFzmGqPdcX4auHzWwLoWUELqsVH7iQBKTGHW7b8L8GAK2Gdf6er9Q9Y767ARi9nHZw3PGa2tyyjr8qJ5yHySPo1",
  "key5": "6rGZnLzPhyap2Pbb8SnZ4yB7JgWMKUektUAM6sLGeNJZz6T3wmrZggnTGNtcsJsmgvuT1WcUmuhwQKj3iifZi7n",
  "key6": "5KwBzbwtSKqMXqhksfsFMjetDv1UpFXUCheyGe9bnrZ2TTtjYLiQCRJJ1G2ZEqXBAZkTrd7LtyGSihpRk91pEg7Z",
  "key7": "2FwDj9zXwj6gzkqXtMxmC3herFwHj5AKdC91dNVwY2zFCGoawKtPLuJwGUmngNrEAeEPQhtCj8CEZmkSz3tFsUcs",
  "key8": "5ucbs5WWe1jVpKgtZqe4iDQNEaMEEmDbnH3BUKHFW5TkDLzaeRPs6Bg3X8N81UcM4vS2eLwzHp5mN92rRA5Jggp2",
  "key9": "4HSYUuQAMwF67MHixwzk4oyDwbFvMKjhjKCgXjjBQgFypSaxSbG2TEa5rgrsvHf4YL6iTKsMSszHpuikstWaWMpC",
  "key10": "5WzzRBNUB67vdELp3z39MwvfLQFSYXnFMEw3PXvjU35aLTjDMYrj1QZyXz4nRVBGmUuj6y2v7uWhU1Gp58fTNzQi",
  "key11": "2THYM4nWEDXqeLtZtMtsta4TKwMrWyoNmwK7svMy9xgVDj3VxMtEmcouQCLcvEeTtCzyZUikYTKb7mBTabrnf4vp",
  "key12": "2Ti8wPe3zd5PbcNYBPErWrwDzxkbJrcK13KBg2eBXJpiLR8KK6CfiL2hFTeV2T88bb2oS1V6AfJtRsf9Fzy76Q7S",
  "key13": "2KLEAC2uXpn5UrrtyFVPx1UNbcJaF4K4Ad2kFQQ7PPo96Feqh8aGQDaTYViEwo8m4BUZscbuGP1G3nuDNGTU12k3",
  "key14": "jgH98H3ngrpWGNt9Ldu2ADAsgjrnvbNN5WZghwmoAdCEVJgtect27cwD288myEzuZ42kZKfc1CzctBBvv7BnQ4N",
  "key15": "4eFEyTC1LFRoBYYtYBWhUtj93DitBfbfxfHXRbBaYA55QXBUG2QYJ6zBoxWWGTmRSzm477x1tVsF8w1LqjoPcMHx",
  "key16": "4jtUSvzYWyR2DoYMQX8KBAZ6L1LT4MRPsDH8zC5xHYXyN7YcFhRXtLU9gg2hKrZhsCbDdRnt158YMbbiJ6v9gyxW",
  "key17": "55wgWEqPVaQN1wMFs5ojuijon3cvC2bXNUd5aF7R7tYkPiuPMuwA9ua4dxQkrLNPvYovXvfazHuWxJfXRQMfrTHE",
  "key18": "33vaUQAuNy3FZFrQ1aKcdur9o9Xb6wkwJPTBi3pokTrJA7NKSAD9M9VB3k6SGkXzdaKLzNHGKEm7AfJhexAP4V7f",
  "key19": "4Lgi32jsp3yo9kBtxV8F5AGgVHKPZ5AigRjoyf2ZAHF5fgFtUDheqBAWwCm2WvLLkj6BWB1fWDuMrTVewmUHL2GN",
  "key20": "XCXNkfr91NbnGZkVqXx5ijaaP9dMC71DZCxNyWjo9rshKtcAxDas7kKg2ZEaDQYmMUkbtqpLrj2qzHBewxDwoQ4",
  "key21": "5Jyb4fAQdmqKR8v8KWSxBnqYFcFCHjrMpoQuKXnV79k4zVWNA7PELe4jFy62vfm7YSHMkYFs4MUvVPcgTTZUTrf5",
  "key22": "5GMZUXVNN4CaryQoEKXws7FaCg4xCX1WCfGfZeLLTExtaMoKDga1pnEk97ei7AM1e3cuxF49tPcs2UQgPQ2CAJJc",
  "key23": "2HW7LhQdawZZAZhxEiw72WAgCeQhHboF2sBFCiGKHUzJA1Yb6zXHcbAsES294uNjY2TmeCpLieZanvENM451bvFQ",
  "key24": "2cnu6RgDsRWcYrZtQNG6CRbHDfk9MKnLGVSojZ1gbsjT7G17j1667TJba4ufkNDftF7rucS2igzoVH6RmDCWE4Lk",
  "key25": "47NhQFYswM76xuyHynPEwLErvXk5L6Cs7NTBwqUjKUoQRUZ2BCMr3fXChnp15t81JbPAeYu93bGjmDUSq4jdoF9q",
  "key26": "4uusbmjgNpcdbWoiXrvQWa4UzKR2M9gcXTLHqZqYGbiXAS3aequagZo5Jhm8V8mAfAsCjA6X9YqWW4DWd9oxmdU9",
  "key27": "4ews7BcMp288mphf13A6G8TipJVvU4c76kXtJqPQatdymAi535SUJ1MjKxkbHFARDVzgvaykH7VrqoDJfrEMP6nj",
  "key28": "pQjsevJvuPQfLKMEtHukyocvBx1Fvzgko2zqevwxWv9GGW4QhD8am9GXBoWy6pcrrdHSChV5LufDyDc1ytKBYLi",
  "key29": "oJ9MkcmvhuxDewiHZmRMFwMsziSfuFAkj6wWWgMfbTnMTiBPYLTz1FGr4dSu9BSu7jo7cfEEvyLX9Lc8dRVSMww",
  "key30": "pXsQoVzG94LGZg4TcEix7KYfcqzcvAkdkidwwfW4VJ7Hvi87E7N2od4detSpiWMxXvkiYep6NPi6brbttY9SkV2",
  "key31": "DhByXo7rMucZ5cstoCaF64Y6ktt3a6ds4n6PDRHSS3Rxhzh6hv9Ao7sNuD4HSRi5GE7qg9SVPFbFpLE6nqqEsB4",
  "key32": "4mBJPZ9q1KG1rq6BihTbeQs6jGu61vsWzNKpbVezcWb22LeMM5H2W2RiZ4z7nfQngBkTN2WkbwUhSSvCyP7HDowu",
  "key33": "3N9CYLN1UgtJmQkXynrQifsDfCswRqmHvJCxwVRppajjwB7WvYnUwBQKXzW8UbMjL21L2Tj7kCr9RwtoxqsU2RBv",
  "key34": "4gooTuQD7EZYntwV1c3gDosNhpuqRQAWMVUe5yoBC4Z6j9ztaKa1eidTt4B4uXbivvGEtJGePmeU3VJXkZZpcsny",
  "key35": "3Fh3XNt3Ku4B63pvKsuoQRPH4u57UB73PHtBqfc1VqZVum2Lb7QhAe4U7ns5zQY3j26urJruJLDQoojyzLKuUiUc",
  "key36": "5FPCRNSRjD6LwJAUZdvAL6kmpFWtPVg92LRd3qZwZVDaRmWQwsHhswJpC8Rb2z4SxjVVA5YUrGCBkicoMkAa1RPw",
  "key37": "5wZQEDts5n3UB7cytV8cNVUSrZCEXgjjDRWsKuso77Zo1mcjBUt9ZfmzWyNUmoyBT1ksvxDBS2XGpEG1PDa4Mowo",
  "key38": "4J1DvqmuNeySDmomzuAurCfwpyXeJuL58vGiLKPcKLkSYjHSAVJwduJncriyXQCSxSZYDTWvvPmEsBbaNBY6PuWw",
  "key39": "4zbHqDr5HQS6Ags2pHbFtBhcpz5rxtB4tpehzhV13NkXWpLbyaXUkqLG5gfsgFAeePGNYM6ZTX9RckRZVQ5akGRm",
  "key40": "RvYthVTP3166peecmwqcUvGbREHHTvt2v66NQW3i9bTsmZoWCSsvys7jzSyTspdowW3WoQ8PZNbLqE8owbwtMq3",
  "key41": "3GjQy6fUyVCqmA8rK19nQif8kak7BGSMpbBtYGRZLhZDZHDonKA72uBweXvKvyRUXDyxCmuyebo4X4yeeahKLe1Y",
  "key42": "2GkpWqpFXPLohxy39hn3J4SGsdfA9fMvLksq8hSrgh39coP7cG6HYx2FQWGjrafgpge8Jo2i7oUE46A3tpBsj5nv",
  "key43": "3TNDKbGNA8aG6qGHq6mavQokhowx4aV2ZWKdYFypoG29CPgZEEVvkJpzy5FF7DLp1WTFKKZEftzBfzWtbuSJHrXQ",
  "key44": "5KBw3KDQR8wyBxCT53BUwbu1HFD9V9sYZ9B7uyY5nJe2jubdpxbV4EnCuGKi5rEuoCUs247VDLsPUwBXbPj6Z58J",
  "key45": "5itGqVczdiChyUyyPb5NiNmWR4ShX1fUkrmbfGwZzbPBoeHeNgifuiexqhmdWzKMx2HK6TNy6rmEgz4WdjpTGjmH",
  "key46": "4VCGchdy7WAn3XwAMK7XmyYPkmhg3KAPLC9zEiZjVSRttGHNPuMtDyEBomKGmfrhcsLazcHwKG3jZcaJP4wEAVTT"
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
