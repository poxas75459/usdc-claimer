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
    "4QWHAgxhme7JnLwytq6tqNC2EkmEUSrAaYMRFwg4ZfF6iUX1paGgLvouE4Bs7Tfo2t2EvinXRqZdc29T1L8tJcyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "325H7bnDAVdmBsykJQpYjpDgZs41nP3vYDY7vyJsg7GLX5NvigqaEcQFNCX5jm6KJPhK9WkzerMxdpRwyrGns3mT",
  "key1": "54JUKe17p3weQv6GfVjr49ExYAY3sFR5GFkgj2UwdNjZeLGuPtZ51599VA8Kose1SJ1L7Wm6FcUTibRfnpF1SAyo",
  "key2": "3pkRzeCF2bbRDaJSJmisib4RfGaMuE1yzX9JvPr1FnttCuDj3Qxs1QAGqBwtDguHtj1MPv2drWEwseF5dht1ueJs",
  "key3": "77xjdjnjMtLpTcp7vabwyJ7wctE6wWntjiTx4h5tdGQQuYorCGMD93enAx6iwM8ETJ44ynJ57mVJHtfPHLZy92c",
  "key4": "3FNjczMq12Mo38SjG4KW7WkmgBahZcxK8znmPayUnJcAN7drNNYWrDdYDG2PDDAniGRGKXfokBbDbxmTf9qfUPxD",
  "key5": "B6MibYc4BNAFnZwJi6qmoYDjFFcE6TMTyoTDHqzu4GA2dTEVys4fBHFhxuDBFhvpBcoh1fD6QA52VtVz7YqsF8w",
  "key6": "5VDxj1QZwqNmbxipLNnJ7jctPQftmAtGLgJGMRgQTuuuJ82H1f8H3NAupT8EJv68TwMQrrW9YqVUzqnESTcu3NXc",
  "key7": "3cqTqkHcvYbQgWR55Z2AQfhqRJBYmXoMuPczZLnRYmr1QADb1DVhoT4wdXSw6hybbjenEKr5efLhX2qq1RRSo3Gr",
  "key8": "31GixHwkwSNo8113dVtHb5nAEW6XyVvkohAEff3PUCHH9hSnkrFkTGj6yjiuau9cuPEbQq3hcnERoqCqzmVVLBKA",
  "key9": "2c5zb3B13eyTTT2FgQXrD3Jn3LvwyrAZMuaSw1rh4cUC9vdmJXN3KaUnr1R7yQdQ9t5NGYnYUT1aiCkGAbPDpTQK",
  "key10": "ZKnXmnoYavn1TvccinNLGUs2uUoWmARAaHvqh4rPxRPd8gaewyVmVjxEfQBeFGoKF84RVhzfKGMGvPeWg4RX1SB",
  "key11": "5rMvzdcZjfnFGaMd69qf5e42Xw94cJjA6T1Xf4wbpYZyMpND5f4s26U8aeJVWiZxJMQKsTFWofybHbo2d7auq9YE",
  "key12": "2yjKEaRKxSmBpHnPXgVs1FnvqsKW49qL2U397q8ZiGDBmobZUzbt5mUiBg6NYGKvgfNP7aUMaDKCupC3yzVSiS1c",
  "key13": "3tRe139k6mf4Dmi8nWV3u1yhDghEgmXVkpj9mcVFWqg9RKoFagoUiv7WgDnocL4EedRsDQxm2SDacA4q2PLDEtyy",
  "key14": "UzfNhUeaFR3YSzDWRPjiN2dLHYBSQkFHfJ1Fmb56mWauT3tMHYnqqrnabD38UypryYpyBSb2ack72fS5PKsWqkM",
  "key15": "2caHKS6tARXYwJAjWgb1fUBAk1JL1bHH7YBVBxbZvP7zHYzJpS4pgmom9fw4Hj42zC6c6ZDw2eGEjfCM9Kkz1zyy",
  "key16": "4vaBkN6qrXh8dYba7SqW11c4q63YJ6HRgyC9j13h4tnvcqTFqKW7M3Mui9dMhcFfHUofiHt3Uz5rwQVim2JmyWse",
  "key17": "5uC2aQpzv68jugwrHawoQePsfeBw8QQkKk19eJxDR5oxFWResj3FYeWpEdToyJ5MyFa1nSYNYt9W3w6DXZ5XuyTD",
  "key18": "4K3gu5TkTNaPJjartqUNgUHUDzGfpRz1nUsYzHQatA25aqiDtySuThRX3vPvLF1MNJmCHHs49zMNPkZi6pKFziK1",
  "key19": "4Lxea9Ngsdb4tAnYU1QgjTupkcGLRJyW2dXCCMTkkUnh4Fwh2cBBHCXdixKVANb5tpytmfqdMew852x7KTwMh9Qf",
  "key20": "5QGAchBsxvuAU7XxsRRP3UZU4MeKvAKrduMMVQr63kK9pTmsVjAZwd7ViLuw27y9PPEE1MstdHdUpsN5GKyKqVZg",
  "key21": "2BwLuCTDcoZ2oihqsryMs9mjQBULysXmY1C215mpsg3L217M6Nbb2XcrihdSnjWZJ7WoVEfgvmCBAacFbcHhKoXa",
  "key22": "3JhYJYh86AisMA5m48MYv7X9GzKBBaXXbxg3qdGGgykt1haKi9MAKobTiREHxJ7URKHZ5tgHaJHNWxyRKC8A5DMq",
  "key23": "5WLSxZY2hNZ7vb9UKNUSa8h27qEbKYjag9wQiAHKYcNv2RqMCiK43bNhNKct9bEzZTP2HbxBfRrL418V8YXzTE3X",
  "key24": "2NrUwy5grKmwX6Dbv5XY7BBQEd9DWBJUmWXS21FydvBX8yGD1emLTwNzqPS2itXxBwNeFb7iGtKtjbcVwqPNeR3M",
  "key25": "445xk5UscYj6dZMyWU4PS4kUifrfpcXhYvPyA3wg75hbfAv1fD6XNnoxfzhEXi4VtrLaYWAwGbpVoLDg8ZnQLNJx",
  "key26": "2TbEBqWAPUH89XithZJj4HrjTTkhBPCPtRkCzchYZEDfjCufovy7JJiQxecymsfZqDRU4z4ZupSLRAkLV6Rkn3xK",
  "key27": "4wxxn8ERXSGq2LqrEyoPX9QuzHvvGg8E7Mufg6SCHG63npE8DJUhScQY7xJnivEtoa1tDNp6jBz6sb6QE4AWPKu8",
  "key28": "5ZkDtr2ivSEkKx6AGJYs2ivZue2cj5MHEMNgV2rRj2wdVA2V4cuf7R9Xxnw3fAabpXxvgGCCdv2xsPmVZb1VT71C",
  "key29": "3NnfXBgMQ6qk8MxPwwWyoSk3iVwvQHwaVjHsf6Dn1tep7meyUvfctSQ2VSNMds3bRGvbygkRBU13bPKZyUzwqpSJ",
  "key30": "3VC6NDEm6Bq7QuctoayDNQfsk9dKcuwiMhC5r8fjpnYpi1nvMycsJXmPf94cFeyQA7kj6uQ7fsDrDGupWKPR6Ub3",
  "key31": "3rBWyU1GhHPw7vjbwMqf7TYc1yocdP54t7ziGrtTnJM2KB3Mm2FZoUYKdNTeJsqmAFuNRkBFXwC6n7M4UwizFmVB",
  "key32": "2ccH9W6N6tWkj9u2fykRftd4qoU75SEp7vsKhJf7urYnw5pd9QWWRK5hAzgWgFK1CfoMjxtApnwH6mgEa2BvdNME",
  "key33": "3LTgGnEupxK3N3ToBfK59oC1nF4c8x7Xn1bW5f3LV4aqetV6PrC8hLYpWMkBvBGxbaxFXtAMaWHJz3HViauVYPjV",
  "key34": "4n3wr4eXpmvtUsQhMckuH216SynAviqadUjkdRfYfQBrKybuinY1TtVNhW6aMjSsE6ch6dtAtWtEwSBFVv9pPBXG",
  "key35": "4pbhUG4jjdUU8B6msPNTQ1mGy3KdDwTeiMGB5iVvJqVSqThKtJa5sqs5AsrcFucGPTff7q4QxwfReicUnjuMrcow"
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
