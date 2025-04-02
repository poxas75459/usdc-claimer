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
    "3mGggbtAwvBkoWJ16gp6abF2ypfHKEWVrgNxPPbP694c32A2jwmXQ9cmnaEVsWxBcTmy8eQGNXgGahHYMBVzNVnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJtWGpVcZY37ExxFkukqP4yWUF28KTR8gQgx6jNZgbqSctZJafntLvhzcC1SBtM4mVKnhGdVmCKiit4BDxg57n2",
  "key1": "5XToTz9UiWkXX5ns89MkzVmMJMYqtmeqhqwzRsXrSvncM1aWUtMgMBRcweKCGyTHMB68xkpNiifGyAGatw5rgU5e",
  "key2": "2rg47QF7fzZef74a3XtqTy7hnwXN14MkXrWThJm8TALbgQF7dPwGsSWYZYeW55uudPJxHdjpHFAJufwqXPu14GTL",
  "key3": "3zjGp2XdMjxJmnwyfNt8mWyX1hAFJJqGX7XvW4SqsT54AdH79wFetya5mEy7to6P9YE2iWC7WUYLa5qjD6wUeeJF",
  "key4": "F9h6TsVHaoVfFCD8Y5RRUSeBJuvkfqrQWhwQWMLJ3JaMdNdjR4ALCwGKUFkHkr2PRBKh5TKDknjiGJLnEqPXwbk",
  "key5": "4dSSXmNQ51wDokLHd4jKs1XBo2mHjzeAZWb8qBzX86P8MFcGv1PdEPpybUfj2BAxjt7cpy2DLizCcJGb2jAdECDW",
  "key6": "BYmuQDr5XrM4EF3iqfpdD8eTR1U2ixQN5kozTbzfoN2FAh9AP9zce8RSVNTiuSRJ9F77sbDfs3Amd17A6jCMUCw",
  "key7": "5EXBi8h8VbnwgF89ZpJsqXBfKSQseGvg4NmxARooFiRuJYodE5ta22DmatDaurC6ucCUjGAoNSArn8L3aPrER2rK",
  "key8": "2oagVF4mkSvHXbLRyGFZaUARyYhxPgPVqFQ6hfEyZShiMrExNCzPK36t5QyHKcvN6RqKoBb6oiYiDtZFxJ2mrxCV",
  "key9": "42DnkZSLBpwYpYXm1Yfvg6K85Gac2vUjDjtyYoTUBo9JCHqgQGdpwUxDUMf9VC5SS18jX9GCgmeKY6SpP6g2M7kk",
  "key10": "4aZXpfaW27Ycnc1cSnRmVfDHjtMA3Cb1sY8CjbEcwAZHYU8asTkzyav3Q7Hg1DF4vDicYLCkrV1XGy7Wbbg2Cv5R",
  "key11": "5o4qhRyymVMSHyAKN7c5nEGyeLvpXke1M9BkYQ93ewrN9oBgURNSFg7R8gPbs94XNHUY8dLzLvBXJTCSD6SK8gvz",
  "key12": "5CrZj45yg8Mf1Ju3PGvG4DBctgbHcMxQpqxouiqzvqw9a2TvjE7aHCLGjCBMk44DSCg5TYzihzHJL5afWPhvZ88N",
  "key13": "573m3MFkRZET3XtxQnVg4e6N7JsCmhb17ZDpGbbY4TdDFeFvdG631MUPUFosPvivvgDkCfHRSgFHfp5bfNzKMpTW",
  "key14": "3CsG24xDPA1tcZPjZnUAQJZuRJ9CQ9n11G788un7ug3AmTfkfcfJeQ3bcKx6CqjvtYNxmsY6rMcGroXvWGXbiipv",
  "key15": "4dRy9cJ6fFeLs3W5Fom7vkGhA7BVQTSwt5tG5dVB4HH7yM2fXFwgHV4MBhAWdxL8Lomu9cMqcvd5UVJQXDifWhZW",
  "key16": "3qzjjeR4YpYtVGWQtsKq35MYAzxHLwNhUugR1TKtEhLcK51FL1SgT8rrTEckLEAxntkAiQM5j7e9GyVQhQTfHY3h",
  "key17": "gFKqfq7k4XnbyACdBCWDwrVKBetMWY4YjJgM6eZ1nVMQPMpEXNoKpi23XxK1AiQEbRkuu63AdiriE4a61yMoTbk",
  "key18": "3UZvyFVeyxp8YKbV2NoP57k6JqbSMsiXbGFUU6e6prTqxho8fWD5vEMy7PaJGShXBJSr7Nq7n6nFzEvnTtYzN3qx",
  "key19": "3dhG6gpYXvarGKon3r9rYMLm83C93eWoWy7RZkLZpy7Gijvj8uUcT9Ucy1BUBDEH76xUghK7j7Ef3gDCrQZxjmiY",
  "key20": "4gYqAVe3qfBMVqMiWBfkXJQqJz1HR56yeRSD77YrV2VrKDSxZ9pBTpk5Nc7CA3RXMuBT2ckZVJ3CTcrYdBBwzSz2",
  "key21": "gYvLWQ7amEvCftb3ab4EV5iLoNt1B6Cje5aQL8HZzfjDZTwn9sCAvnXWTj8X2ajgfvD8jqYcfUozHKrcZFN785y",
  "key22": "4nFuXM3N8M7akwYfFU444LZsvb7W6CYJBZEvhjrgwrR236RQeyUttD1xbjTo3Uje2vM6M5EABFQp5ahkeFotrrmP",
  "key23": "5BtYMByGPQ93NMGQRnWC8HGiUCuhbXgXbj4gTNZkctd4zvLX7jQV9nMFsu51uyYRVyyq8Uqf2a3WfqwAUyv6ft5o",
  "key24": "3vGUtJx4FkJzsMQZQJXqcs951YHYa8WdGjf6JFEauw9kjV4La2MzauiuW5e8BGUZw3cWkXgMKBfxAQsHcvKvyxgW",
  "key25": "TyyndkMQYhACdUyqTCko9f9EvbWqsPV21MCnETZg5mdhFwacwspgJiitHrNugw4q8rtbB9xdJs94Tsh9P6d27B3",
  "key26": "2vABmDDYursEULLHm6goUizk9U5PMt59U7NPWvhtfmvky2MgPeXaHbvyEnNb5RECHbqCgMC9X1GxS4jNwC79Nn3B",
  "key27": "3sD4MBppyzuCDPRL2mh7DkrJSiqyEhKF1bFuRT4eeXinDm9bnCQdHxubYeC96LwkLaAXoDuLFLgeMrE4FVQ1KzKo",
  "key28": "2tfqgejFwbLijUKAYpx4AXUR6m5bKRD6Mfj6RmSLqcqk6TLVixVEwZkVHfHmFvT9r6JDrrMHk1LWXu3AEQPypqiV",
  "key29": "2pSmw2HpjnZQjaZLuyD3KhqgNtESy7uWPmsHf88y78DxLSJUbWtu2yLPipx1StKFXBiPysLxasReePQb59j5JE8S",
  "key30": "2wtGpMK2NRHmJoFWvd5swSB5bc3Cts9jwWHEADZhh29xqoa4dnysFCAA14uzgTNFE3p4AWdXqhvwxkA8kZ9zVRyX",
  "key31": "5qWt5SH5ArC5UN2RwYLEtVJCnKFwfn3fMhLGW5tKaEvECZmLHkN3oMTDY7ArtKZ1u3zCtPeAefBTKRkVtDBeSrsA",
  "key32": "4eKjfm51fD31tQx12TrnAaByJyJNX2CbYy1k9WSfy2PwyR8fpeQaxZ9sj2bmqAGcm54xGdqP82m96V9imeWxsXpf",
  "key33": "2zrUkWN3szvjecs2HzGGsBC71aHzE3FwoASXF52Lbw2r6ZDoJMTWaWGNndJ6cC9cXEhtJhmgd3nCTtBHXC7TaTTG",
  "key34": "4QJQhajuzVJSfEjWUCMKYDQ4Acc3oBCG3J1EMuJFWs2dqY8BY9LEEXcex9c9xVvTopFemszHbVYWQTvVSddmA4t1",
  "key35": "5G8nb7WSxNj2KoYrdNg2oxtQbZbVi5FX71sQL3VSAdfFbXzDj9Sx6DwDQyBt1FZ1b4HS66ATYmr5gFxXoeWVqY1D",
  "key36": "3nUMMiCxqtLHb43BFAhspKKFa5wgoP3XDoUtsxH9cH4Xs7G1Z2KW5cNQT9LGbivgpz1uQxy4scFxyQBa9ekYZnsV",
  "key37": "3V5TYTCrkMYNZnth431UvfnNGGRNTAQEXuKPDq678QaFTXTWF36h1CZ5Mj2rmS8dkkRheN26tw55ozCD9ATzyUmj",
  "key38": "2ySjSgAHgk8ovigJnv3PKZHFFYed7ZrQyzR8iqvsksNaD8nt1pDVbvgobuw2wnU8weGDLnfeVoTsQJ7tVo4AaBLf",
  "key39": "WYru16DPFTjASHtPLbSHgi2QWhASHAiMtP6a3NV7FXmpHhEqPMgB69WGEw4qSe7UAMoLPZ6LPm7cTZEZw82oyy8",
  "key40": "5tAwmDcwHBvWCCirP56egsE8uEeU5VFoGQ1nGxdKEdcFhi2E9gvg7LGKnFDbs7gwXYpAGEmqJMfNKJHjsk9RkPGZ",
  "key41": "GMhKyV52JPVu79Kbs8oztw7nUKJsN19KnCvhEat5dAT4SGN5afm6qwZWkX2G5pFmhwaLqxFbUVScShx7t6eJA26",
  "key42": "5jtS1dNBVTyFtqkiZdmu41oUPxeYHWCKP5GKKVapK22KhsT2DZB7b5dJHTkag5pCX6DfV21WLba5JShf42uKVD35",
  "key43": "36pR9yJPdTKvXSR6rXuywnBeWZfjC5QRBR5veT6EwEmmi7Wj2zu7r8d8ifaYmTR6zij6yunHNDJdMiYkHTy7xS45",
  "key44": "4qoibfCsgyKhuLPVpGrB2HRbbAbbXtowH7U5GkrV1jREmJTBtdTd13mD3iU3VX9yDotM797QxTtHE4iYcbJuYymw",
  "key45": "3tCLSgiKYfBsDbivBLqVuot9kfV1d4Mmeee8cRzPgNkq78SYib1tjtEbkYxnBNKGCyWSBAU7pTSCp4y5Da4tUGe",
  "key46": "2fatcHopxMWdAgFiHUPmNGkXTJqCUQXTQon7b3qbv6827kAS61XPDvztogKnvPS3Scn5cD6VVj1vDmd6fPj2Hufk",
  "key47": "3jogY5GYuQMSrDuU2DUy4JL9PdLtvZ9wpnshffCMR7cnhMfS5YDbCL1Z5yWEnmeYJFx2NmzzHSA3nWRjUtQKu5Jt"
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
