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
    "52h2DaZHZAyouBCnQ6Nhdf1k2zLAxMTbNVUgyZQGAEwxSZMPH31Chy5NPk6Fxip6errRD8q8nyULT1hy9qhDViz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hkVGdY8MoAcUoxZkRTGveRWYSDim6tHj6LnAUr59vGagN79wkBeuv9RKR4Dxrix2ozMJjs6yjVuXQceAbFvZyB",
  "key1": "21thW8f8YYDbbcSCzYvjTEb5ShhDBgdkShqprjNHjZRtkMBcPcKY3c1GDarr8XXKWSkK9oSdu8neoD24affr1MF3",
  "key2": "563S1ZhFqTzMbC7LVHu53ezsDqVniFkzmsbeyEx8jXmqW8YrDpWtX4SZ4mj6pXG4iyadq5ERhZVLAznqXdwfPURC",
  "key3": "59Jj1NZNksCFedUdfT9s7t1wgFaKcn2UBVdJRzsPAGmXKCgyLa3fLFYiqoBiea4KA9peiTaWE6EMsGcwruzoi4Yj",
  "key4": "2epoMZ6QprMFMHHTQ7nLHJF4ZZ9jrBt8hycrpifYvJX1dDhZSsUWv5uKdetwDJzpppC6cv5Y1FhjMYN3BXMg5dXr",
  "key5": "4ug9wkmkc2pjFm2n1mn1DHHBFBwzsEy51iLXwdLEj61QEuF79shvnJMo956AmXn5T4jtvhR9JYfnNXSr5bFGx4SF",
  "key6": "4nW3oT7gW5CTaKaGPjiemmh3Zz9rDwZQ9VLCQMyUU65QfrDHP4GaXYbU82uwgvGBWG4mq2iMfYxsUFfLVyQLLThK",
  "key7": "feKyhnfPr2u7qv2yeC2jUZ1LWqWdqWQs8GrvJwLC1M8e1xqFNnTpneccGMmXJeLyaC2LPmF8vJJCjfQmbHovSZW",
  "key8": "65fHYzoKro91FukVb3r93pPWpsE727q2XVgWrf3k3HAacHQcB8qVjvktj2K6aoMRA4nHWkixBearhrrU77EMvS8D",
  "key9": "2LK4LrvDzqtcwQ7XruajyhG9RWbSTMn38FotTu5fNqWTXwDUcp68RaYKGXxgw3XXPfceo19XLEkVzsmrfMjBLtnc",
  "key10": "jg9SUJsYAbRFX9o28MDLjH3pTx8MNkp4La2c1g7CzNw3F3NaZnT3uB7WTxcR9bBKd3ZfBVBZ352QuSz6nGQDi5c",
  "key11": "54tM3unbGDe51hLGAHz7FRkaA4am9nPogZpVteirkstF8UKxvEdUCWWVMkASYQVsuEKy8V4oXzb295a6FbjbqPTr",
  "key12": "5eFYMoVE4gRo82sJfkNG5FK9W41ZESox7Gt5aHptKqXLqxPApa12DoSEQ9r4fB4AfiaZeRZe5Mf99bbMagHBpEXG",
  "key13": "3F6T5yT1oVyXwcTUpN7tzWJZ4CttnJZSAyStKFKtPiovJYoMq9YsBpL6GwUC4NBUnDjMfPVrZZEPjWocNpGtxmkL",
  "key14": "127qLyG428m3Aa2fUiZXFcvpVVBEwTp2CEgzbVtVxsU1MbW8cFCuqZzQ4aZWK9Qe6zdzDV7kqqLnwRBpUSCNyBxN",
  "key15": "2bQdWZa8nHqbKEgSHhJKC9gp5moSY5R4dHeHpsdPZF5VeNUdWhdnL3CcqjuRRedNNvPcLkLsq5zBTPHiNQdf5z2b",
  "key16": "33tnySfJELXMGG6NjNFJjGMfCtX7maELEkUpsz9CvaPMqjZzTeAfWSsar34rV7ja2JJTyhp76A7ibyqUwciMfAJS",
  "key17": "3Fgs8wU9uYqkGNvW4rSfwYnizJUz4nvyrDJhLzWvRoNmQuWbzzKRUrkTpGZsAAZAErjQsye5N5UMXyuTeQZF15iw",
  "key18": "3zhAqBrnzGZk99DUf4QE1caUv27NMm8St75bpKxWq24qsUWacYHaJwdbG67jFzBcDTwoca4iUfj9pzLYwYymTHX6",
  "key19": "2VvALzAcsziDUTBGocVibkYqVR9QuRBPAgsGghXWwdGmDnRowKxTVKGT8Hxfvr4dA7ugq7FEMxX5MwZudsAtgzY8",
  "key20": "2NcniQk9YWAPz99geERcMmsmjz7B3ABX5e8rsHUGsmU5HuZnJgEtRiTRXP9oKRqY85ENKFNAeHubJKM7v7a2P9rm",
  "key21": "3gsJS1XQp1zUN325C2e3SbmYXjxrRXqG5geJYvg2nfxXG7L46j1p1eaHTHbUVXHrjK2HFNnskqZ1WmqaFSbDhgoq",
  "key22": "4dsLktfsWWDV8tUZ27GmFxNHuBmee1n3zayGJqrtVWpuFxNgat4eNMN8vM5acchT81Jy8yLUS8iCSNsfMW8WX5FU",
  "key23": "5x5jhAN3Ht4mk3WdHm6UgsLXiN865PXioVcULhS3JJ1jxqfpFXiWsNo7yqb6XtQ7urxXeuZjPmADNDHQv44Uy2yq",
  "key24": "3VSjR6gewzd3fCWRGqJ4soiEb71ZzL9yVCGv3KTtNVboz9rRXb3Zky8NmUqgRVQ7PuaUhjcULBT7rcG4DRgWXsDo",
  "key25": "3akuzmGBt6w7YLo1PaD1pVxnoESwTBKu4aJQVqS81mhaM7dRoVuPQGk4DoyP3iH8yhJ5rwLN5iKtFkE3wuBMn2De",
  "key26": "5ErA4JDSxRoiP13GX6jduHQUWnfy7ewdKbfDP3Z6acSiikTdgN61maCWKbBf9hqfFxHnfKEMQqTWzuKWdmjWeZA2",
  "key27": "3ctq8Quzimqe9XJLXNbwYKEVihY8FB2TrWCgtjaK1L8twvpBDGsTyWqVGqfFA6URxGWKGPT64ycjV9tsbwQGwXva",
  "key28": "2MkQ3L9771gpN3ti8gLWJG4mJ31qiAPdNkgrDsXmecWguYiQL8eUWRDSqm2mJATa3VuTr3jrws1Shx1J6CiJgoAN",
  "key29": "3ACYV45kHwoGsK928cekSg2A6fzpowa9PqGJea4ZXC1bbJnRvDs65VRARJsGkcgakGhbyPAv4mijqEZuNNHEvM5",
  "key30": "3EVh8hi1UJ98kfmyfX4EmgLmaRjjSfJ4R4p5F5cUEDovVzVA9x8SF26oWjjNK5n4JCMUoxbpj5ftd2Zb4hGVum3W",
  "key31": "2AnKFAn72Budvx8FWANhu4sgdKFvdgwfDTyWzasEkbzrAqCSkCsaSY2363fDBDLcXm3UuhcpU29tFkehufi7kGVV",
  "key32": "2PexY34HBCEkDia1tYeNiQSZfSydf2tT4jX2U8hfhR56fdvMKSw75D3TEpGAh5RVx1HQNKWdah2KeUxUMmoPF3ZD",
  "key33": "47RDiqJzVPVfZRxwbBnowv4ETnucfyY4LfS6mweLxDFnMGriYF5rzg9rwarExWae8q9NnRZ7hu16ffE4xbNLgpAq",
  "key34": "3vu3rkt4vUeRxXxMH4tiaPFKimV3AGnTRSsH5y7heUNgKMrQB5hzaBDPJvh4ytebLpHadKxXECAPH7cazwZxNZNy",
  "key35": "4B8rDVTW4Xbv1yc6tyTYcMo7PvFLx5XpMt2VLzr9VSPpozn9sADa3fsZJwSJgSiTSsjUeiUTFcr4hpi1GYwc8HBS",
  "key36": "3jEvEKqdXJyppW1mScYgKS7PC1D7NZVHPCVxj7dkr9fBTJ3tBGHaCGjP2fRGBL7bB2g5T9rZSsw2ZdZrEygLQ5zq",
  "key37": "4sLQVngsDrS8cVcSGDaNhGwrtPSzE82YwFLnb5ZhbjFEYqaWpU54psZ8J15TpLjL7Dv5CZ1LT2wrdnaLguiScDih",
  "key38": "5NRJfoNeBBuFuCXcySAB8CDBLtaVZSM1xrCjpd5H5Cj18rNq4eFr1cFrH4MrK5C8npkxCk8MJncLcb8k1ZkqcBXM",
  "key39": "2d7aLJtadoVdbsT3BgjbjRSLB6d41q4yPes3gMrvsma5xyy5soUZR95XasWmspBb9KdgnBaDEpd27a3XCbVUJHmZ",
  "key40": "5q2hWDF58s5VH216hCPQaWdceKTN8QNeWApHtr65t2xxvPqdv3TBgJTvz7N4Zzr3a3sWWzd7VMuABcX7cX3mveMn",
  "key41": "25zEHM6xwKoH9WHvzYaS9QDvR9bpKoLHXnfoEkn6Qr3ppBMimBF1TGX5hVCBheZ9XnYsDVivKNCdzaPzNwxjwB6U",
  "key42": "F73awQ1cJDTotj4N1H7eSHPCMvrd6wXfSNJX5hSWZKXbYGn6mJK6tZjZMrzoiA159Zsd6KPQp3utu4xvjFR4PCS",
  "key43": "Q2M3n5yLtFf4ar2aSxj1HpGjfNkPyZ6cAnbexrtyNmzN6Wqy87m53MDga55oGnPpPx2UzrbNSwVpBqUDUnpbiYu",
  "key44": "39cnhUuYajwLW9hdZRjbEgFZexSxfGoAAZh5pEeZgnRAKPjTUwHiPbdM64Fmtc6FrjQchzxbPQhKzEeLjaUUrw1",
  "key45": "5XbnvybXy2DYrZwzCxrrEpLguGdUYRiHH3pLmt7qzvbo7yC8aZzFGF9CprZcQ88uRyShZ4Nfm6Ug8THF59GVSiKy"
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
