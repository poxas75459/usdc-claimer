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
    "3aVuXEiYZKPz51hNtJt4LZHF8Wx4hyNW2jHWJqEQEbSsYfrbatBNnY337EV653LC9MSgSdQTgjvgjAT5PSUA4tXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gc5r3MR17YhxsxwheV7k3h5yAbgkZr3pr3mJiFyVvHxQvSAKxterbrWVSHtSiNDcm9AhEdjsTEeqCKo3vsq9yV",
  "key1": "4SgWiR2DTAifZyHWHEUY9UvKPB5LhkLEua8Xe9x9bch2WKCvfFjqVzV6xyVVq1HDTk8VMjsgLRsZ1BUajhu97N5H",
  "key2": "54BPvhJkeU3JEpPVN9DV8oaVswQ3umpbKpEY3bW1jy524jths3zR4ttP3ZKSYDrEc43w8N2g2pBfvYUPfjHDgjfR",
  "key3": "46z5dGg2SzPDgaes8Nu3yEc4kHCFdhkcvzFoF7ux64T4ZrnRnmkPB31NupQt7MirQJnnioGKo8C9iQDQxWphdDJf",
  "key4": "4pQdpJhUJxhcvaPPmuop2cG7Guqt9y9yiaN36DZw8tYAy6mgkaEcyYZp9pjfBNoDCakFcRS3sBdFXsibs7ZTRsnK",
  "key5": "zwbxJiznSnxE12fxx2ecyHsRe8YqopwmEozypEffH4fq62Uf4koQsMRzT8pJ26MnCeFuR5qnmPb9s3h4VPHjPEq",
  "key6": "oj6aYeBUW3smsTpNGZ6rSxFQ3GvwUeHeMvB7sGU5uW5dirHoJL9p8WNpMpRPBng3xAK7SpJzd9nGa9QgBV3YoRc",
  "key7": "2xf4d2meB5TvXoxa89D4nAhWY3eJu5g5fBoV7JNzpZscDVSGedonyXwCnmCjqNQR71T85XyKsqf6YCsA1Dc34EEH",
  "key8": "eYMYgJELnPp4e9Wy9gah9gBAq6EfdmnbxrFPS8J1tU6M65Ex5t3GwxKPzq6H2x9BvTg21exJYd7geRnNgxeMgYW",
  "key9": "4FdxeYhgpffvUb12VwubgqaGqG1tgpTVzNqiXqxtjxnzfxKGYkTj8eXtEu3FdWMPyRqWBxBBpWpuRvz5KZsAudGV",
  "key10": "4cB5nRqSR7AM8WEVny6ujxJQ69GvRvKVooURdgQum78bUENj2bdzapWe7r4PQJVj1KU7dbTdd33ukJ4mN2EGERf4",
  "key11": "27jqnabYK4BKdBo8fjS4UneptDPPccuVw5Vo2rbd19xC846UUM3sspEydXUPbgLm842dLXNc393ME7HXAYG3Xaws",
  "key12": "43c1iEJTdeBXmaxavVhTtKPQLCxyccPmc2QXy3chy2Y4kVTCtifsZxToUoMRzsnuuJzd3KzwW6rkHJybjhTSsCpS",
  "key13": "hYoRQoUfH9BNbYqzZYkkes7iTkqcP7FTJDbGucvhDZo9edSkvATxPJp9XDBs82BPUhbv1eKDSgdWvmH7oAYCtUg",
  "key14": "3DLvWd7Jg1M43LsPD4LWizdRhNoXbQXWB2TYTnnZ2PDqyaTrgKFZcoe9MkxJVgpmwHaxwFS8oD6UcGZ8muEMAHgb",
  "key15": "3BzLGG7VB3wFJA7mTGTd4oNQvS9UySQLxqR2GLNavBzM2Ryk9PHz7fiN17ztFg8fDuLrwxkM96rKrgfmG8BKWoYf",
  "key16": "5eo9SPnBGdAAJnbwdQ1MidQdkxokeVy4a7PbgNgXr3pBXSwTmi5med5T2a6BF6Z5MeJpBLDrwkSNbxKkCjnQzw2C",
  "key17": "3Qyp7oGm82vvJDgSs58hQehrQCYDy9muMYgPH4FpnoionupysGUuawbdgF6vocjTwQ4k7wFfordGkdTfMK2dPdVN",
  "key18": "2kUUzgouV6ikoLZgp5KTkqeA22S3gYaoxYus3tdhcAs25NM6zvRZgazeiErJFErkCbZRPJHsxCsjQgFo5UvBiazu",
  "key19": "4Ym6Eb9S3Vi9o9YddBxdF8Tr14VppCN6vsaFWgcJGUj6arreej72X72994A8RxLQgeQrApPmJKmo6vVK8FxMweCn",
  "key20": "2UYAKaUV7ve9ymU5kjJxUJBifsfyX2ecB8yTx2Rr4UxbooS41FgEMFg9HBn5BrNzCFdnNfPJAHzMQdKccFz13A8b",
  "key21": "2DTEfZdkkAfUNMuHC8G6FUt6g532D2FY9fUgf6sYagWzP1uYYgyE3Bc4sHHxdxiK8MgmSfX2QqtVztWMbpBK2X46",
  "key22": "pHhRLX8s33UibZ3KypAp6ybZ3eXjQtLcgNsaoqkgkrSXjrDKeknKDoYRqMgyukVK8WmDAEFUjNP95WPf8ScTD5B",
  "key23": "5R17KEscW1JqRuSRJwGR49vZDhUN46FpSnWDk2B3kStNRgMbfgfzLQ8srimDDWUCxf1zzuRqcNfhJmjtDkqQaY6c",
  "key24": "4i3NLQjeLUAsrrCbQup2etzEr7cAX5bqKv8QjjqF3nk5yAoqSNQcbBBYpRtDCgGaaZzySPyshYKKaiVCvgmzvuQM",
  "key25": "3TvoR9AY3feQ1ZQZhS5MxFv7jTZTsqzsPcjwqGKyZaEHGGzMdi9L4466SE1sMHG4Y1uwwuJvjYQpGKku7FHUKAN6",
  "key26": "3WtRuCD9vcTzBbuizTJKsMAYeYdyp6F1p3rtkxdvsVpsxsp8ZZzYrRaGo7aQLzJoCYaptiZqJ9obsMs5nzd3X3z9",
  "key27": "59VTKaJqVLKSQqJ8TQT2EAMRzwAjBKaCnbUi6pTUwDHndPs8Ar3WfbMSv5nrYWZB5sPkz3ZrHfwLRAhtWthS32ZM",
  "key28": "5wBvwCjX8iV4Ls3bbMq6rzJYY33mchcUH7oTdZYrYG4beB5X7LLayJZhBK8MYrYmWeFuq3hS15BB5PeoqzFQKNiM",
  "key29": "K2eaPcEKDW4ft1bVisi9Ga8d2ssZmrqHrSnKoncsX6fuiQXwfLgioUYjZ6k7BkohoJ4AG94tz78tdjJXAQHhJ94",
  "key30": "YjfgYSo32axsnp2dUTS3LUcJzoD9GisrFgZcPMoA6b3N62Weusnstrx4ChRsfL8gHfXazftFMwuvLk5CDAD4isg",
  "key31": "5N4yJRkJkQ3EV1ZE8WJvriE8x7tWyjMBr76uFHBUng4ByaXL9dowkBL5GP9V9UiQ9mKJw4uT2hNubjybm3f7mFzz",
  "key32": "3heM3mHFJTRSh3rLPhvhLtGuqhnrqYQFEE9hGU7MDbLpgypraq7rsT7qRsHmB5e6TfZMNQNgHZKdc8mBtzD5KWqC",
  "key33": "5aJEbrhLd2SBbbA5cBBA6AcJoD6jTQqzVW2xRk9xdiwhApEsfHhPhUYfFLuhFQgzWWtb1yNLVgtxTvyvJRy58MQB",
  "key34": "YxkzmwaCwYtWtxJn5C3tDKAZcUwPiRWBVYNVZsBCsYRtK2XPxEv6F1bpS5Nb57scuoKcV1M4QndHXCDR2bRruNN",
  "key35": "2QmzwCSpEk88Bi8nmsMP25kNZhgiQxbg6KyQxzuLu7pjs2w3TV8kaTgJo97nkZuscFoGE4y7rmDzkYgbaEBTrjmU",
  "key36": "3zaKfE8rgDGd5K1Lf25nWogTkpMwqgFHmLi7k3vFqeK4FeKqGAiyx1CYVdJ54rBMbveUtSTxoNWKhxbn44Hc1dDu",
  "key37": "2bwhtNAZrcVU45hjVQCDXfWvHCHoxxUE9D1wCBYDuDzGCGoTqbajy2rHj2c4eKtTFXqucPBdwmsHK6rQLMkSNHSu",
  "key38": "2Fbxo4mt6cbyDzwU2txeMj71EpMGJijdkSycKgSzdfVZwSeAE7oVdUt4prWmYFrFWfCQejXCBagKMaL6q2QcG4Ms",
  "key39": "5UTzXDfNK7tb2rBgS4pY8wiyCaLFzQsrSxhYp4WMhjvWRSdgUXGUgqtyagfYyJ8HBTjf68cS5GqfvpNLh5gxf3d5",
  "key40": "3HyiS2hzQwvTTYpXvKrfSSGBeyADGuKL8AgxL2JyFSKWox5TKWBD57ddodL5UuXa6TFpgsYM8JhB6XPf8d3WcT3a",
  "key41": "2xAbRL4JrGRfgDfRiQzKNhJAe56hDKXo2NR5baL5rJq4S52kdod5NjTDhYhu4MVwETKDnwMQVFavWAHHeEsYkFx3",
  "key42": "4T9PxZevsof9uozTFukno3NYWjNpd58YY3erDS9UUeJT5FfQY1GdfmWaNw3rr32VMZRBxzeC3k2aqPsrFPQr6eN2",
  "key43": "3WR4WpFrftDi21Ai11vMy5ZUJofzTRDHWBtD2zL1tEpD3Nvbxhxj8H6ytPne7sTL43CxDDkqFN5ZGVTbk82o4Vgi",
  "key44": "24ZdKoxantNGQEDW7aCMZuEcLRXkktGceUnFnfwUo5HieAMWm5DKLFVYzSCmpzK8afYBTmy7eEL1ptGPo5obMVGf",
  "key45": "2oLTojoHtRmeHeMj6rR1tCm4RrKYydV6DAvx7Y83FFzR6FHwxDEgPZveWzeZmkLFXPyqVaVorYPHMwom5uZbmpfH",
  "key46": "2rVuoq9jTcD9DjECY5hbzJwFAoQFngAE1u65mThD3g6x25fY3BWNLMEkq3qiRj2iirJHPcGBRdzKgri8v4XztYSh",
  "key47": "CqgX89KVyBdHsxXXeYAndMk3bagiTE3mC38iVs2pPf4uXxz5TMPpTvvN8BPHDk4kitjdiHEmUqpA14Zx9ubxdi8",
  "key48": "2CSJqRC7yV8EopXau8amtXaH9XyBSLMspE7uess7xNkiiaHtWXMTaPL5r3p4cWj4nxMous6zZF9wuMgoqFiqR3pZ",
  "key49": "Pcw6qA1KDptfxwpu3qc8w8GjxbiXivd17UND7Rx2CfZSvs7jR7i9YBSqLVHgUbprk333oEJzHssBBuxPDofpBTe"
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
