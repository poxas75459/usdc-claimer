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
    "2VSRTR7L6nzLG32R2eXBxi7sryhrRTFGNufbQVdqxAfcnB1DaDZhL4PVYBjBUfhYnCQdFKGsqM9L2m8tKQm8oxoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UFR9BGojw3Cw2RcpYLA8N1xqZ9yue3qoeZbum6UtRvw9T3daHh8Zx1QHwbDT278ufjGzRUW2fVtVpkimivyzJaL",
  "key1": "2chTaGZZjhFGTExQzw5qzozftQvUgPtTU6Z4xYcKxzmGpVuvQXZ11JCF6TyEs6BwYPKTvV1qhrPHLCKdYLz73nav",
  "key2": "4VpLcuGmEKDFuFkrdtJSGh2cDbhfQ5eaYfnqeURoemRVdH4MndgtXDnttGoGDGNTcAiNRgCjn6KZPszwG9sAhWrZ",
  "key3": "5xGsnBFU1xreqKU6QQfZ3oSSLFwpjTKY2EGVXwZ8LdrGTkrcTEw9mY1e9sWaWiGkizMunhg3fiJg2ZCMjVruaenh",
  "key4": "5QmHL2zrdWMKc8Wkg6Xr6emoe7BYBVZH7a4aPXw3Sx4Yai2FyX3WyNfPzpyRCfPeiuvtzfB2o235ZCCCjcZpGjrP",
  "key5": "2hw7uYRXQLrm23JCPGWAA78SJsHLNwQ13s22UhoJPgQX7v4jdvk4fcJ3XCRRoj2ViLd5FDqKajwR4SbfvpaJheNA",
  "key6": "58PPsPjEc3ziFfXwo6sSTQJeQN23Ws1ViHPKkM1F2STDutqLeft44vBp8Szvkpr6PrqpqbsXFKmCd2cooV7aPnwm",
  "key7": "tVtVmngTRvLH4fXuNnCPyigqHChMJJaED2AkT4dQhXsJqXBVJUjkUDU15TMKYZtohi6utVXcj4isgJB9KHFu79S",
  "key8": "MPskY2vwegB6nqba7yL9M1yPLdrnH31KzoU18mPF9o6UXXjNo72uqHZLYcSae4bMHU1QBMCAxFagHkHwiidDNF3",
  "key9": "pufa93ckwbt1RiinMYYastJZS9kfKQwHs3Ub29ic666YeVYYsjJ8z2PgnHeW8Khyu4xRQ3cfcXTwJGNqabqQTku",
  "key10": "2FurUXhHU18dQtSjdss2JCRwnuZVwGT8fFVS4EeqvbDPgLy2sM45spChsd9GQJoPebwFVCLBzhSd1gtw3t5oMjQa",
  "key11": "4Dr5ApMp4FEHBPAUCYMgk8SJxTBrgZogzzTbEWucvgyD7TC14ZknMzz6Z1PWjDkmXjy3tas9CwWAnzNFoBGan1ug",
  "key12": "gThNGNdWjsj6z6hP5ujafcShfyJyW5ZacdEQkidLRGxTNCBoez9TnJSrB82cKNyBR7woWPGJ8vzZeKpw8n3SZH7",
  "key13": "2MigFwgMXZikWnPFUafW7oGyZXSDdQLaPwdRAS3xesLHaGwC2huSzgZ412AAe7JnisWpkwjGRjTrtQVRGFnsxC7q",
  "key14": "kFtLo4xJJxK2UTVE7HzBD24ThBaFsrR1jSnPAg1Y3CKurTYEJQLLwZrufaHmiTQ9vhdZ5ntCRuA4r2CZSfxm386",
  "key15": "sFwBLp7mDajBkgRCzAEepnU1SJ4edaQ36cEzHEAE2uw5UW7PzvCwMmXSec6NekLxjKuenNidNuXgXqBmcbkVkRN",
  "key16": "3sPynqByDr3sU8k9Cw2LtsLMMtcHtsBV7Jhm59rgVbJHS68aa69TSYywkAsEr7JdVB7uiVXpceAM5AxLixug4r63",
  "key17": "3ghaW2nzpUm84HCxZt39jSNLkzj2ayUTNHDngRfURz4YvBMkXf2TUTgkMkyaPnBb2kC4z6MxeJHzHVFMvn1SWxc4",
  "key18": "5wxHJBhV1apacd5dCHZVDD3Ur4SkWSxMVabv2cu9Ewii8MqZB1gkAk1jQ9Ch8MiMrLg91XLPhQRrUyyRqySpTnae",
  "key19": "5qdtMYC5oXYteEp34wKUanrXH65cSLxqtxNfXGgmYmdVFTu7xQguwZjsj3GYuMuP2pvRe5r6KBTkzongWSegmEwU",
  "key20": "2FwCp3cdJfHb1MfaKrGqkCu45ng1MrVfqeaCjVDLzefUNSug978z1ViK8knNNVNhaC4fVhCpcRQ2xMbrHWSVQSZB",
  "key21": "2hzV1MPANP45swz3WUJWTQ4PygLtSRVpHdw8z1AaAEvWxbXqSHbyMNcUfmDNKiw6faSwxKtWmWT23TFAGzTZxbd7",
  "key22": "24PGHNtAsvR7JJ3jHu8H6GA4hTpahzqgZvUEPZPgJ8fsZEnYhwhEVw6sC7PaizxY6r2LSHirDHetN4gnZEZwJpdR",
  "key23": "NYg9Ts4kmLiiALhzumxj6s5noXhAtvGxMqc4eZ2UaQyepjP45iv58GFP75sA46tk1WoPaEX8XLhLj6q69R9Q3Sx",
  "key24": "4CuXMLrULhqUDngQzZcxGzLPYEtvJvJtjZAiuJt31wE9xVLjRFibymRRsSe38NR2g4J72cymBpVGjNZmP73bZfG9",
  "key25": "3sJCEnRDWVtCJ6wvLxQjPLVoT6pjfE1FnNQzFAAZ7Hpj8yuVWEi67MxMPR6YJ5iWLzDs8rc9AGGmobb5X1XTF9nz",
  "key26": "LntM5pq3agoden24Db73M198UtwLbzq5M68SNXyfXgNgUVV9XKpHftksQ29yqa9Dae7Rymiyqbm8DdwLpaHyG2k",
  "key27": "3mihyjoGgMe8GcXbMJEMkvF2XVgzRpWgPTamsnNkqgk46AjvZ4QQ2uFdHYwx5crC9Y1d5XvDw5mUfvny6Ys8Ya1b",
  "key28": "5szw3rwkDdqitCmcb9iTJN2DVRQs4kMgGWi8qHS9fXfsqMELQrjMZGXNYgpYt8LUEw2wBk6THjoxxy4yQn1t1GNH",
  "key29": "4XHYuyeiDUE3uipkgHe8Z9xW9yKZw56SSpPwihs5PMwC2KpKkab1MVH44vZBP1tWJhydYJr6vbsSqnqdTUEdNqNw",
  "key30": "4on7E6J1BXcNFYTbJp5Rg8wsSmaTvbbPV3K5UWiegm3JYPqGKhPY18NTnyDPXQGoJGruF95hYPVmr6Vsjs8b2bWS",
  "key31": "XEr2BexdAGsSzSXxWbPbgs3CNBuygt8ddUTQnH6TQ2HsSwLYpsaNfjKhkgbxGM4ATJEo5mD8YJqNDxt4QJRnX4r",
  "key32": "4bvgV2eMaBPsBC9Zar28CLqcUc8qTab7yn1RviFxjembFahS6JsGXGWNbsjyB6ZPzmthxdbWTUQuyFXDzY5xCpsS",
  "key33": "5bWeYNHLU6BvC76WG4xUXNENk4bXo1w49Lqm1PQ2NLwEWeH7wZypGJtFcBJmqGigFHziiQygzxUn3AwhZEPLA3GG",
  "key34": "2c4vHRbQoZE8gYqprB1ZjF2YmnaYkVQyiCrDtXM1wFdcdrQr1CFxSgi4Zi3BYUwpDQRuK9PBK9bZfhmdMxrLWAir",
  "key35": "4wned3W743Hb4jzxS97Yi4zR8iW7oDf9JMypkbemn7udRKE4VPsiQZbWN1xMdzcVdwM9PAzAuqbYCPogpEZTkM1b",
  "key36": "9vMqQPNf6gQkeMaXjwbnAkdJZZ2rGMbydyYPxPKFSnuPYrneoD3AmDVofbScZ9DnrTx3opQirZ4v11g7UE46QRS",
  "key37": "4Hxs9Xdxh9TxJbRy5kccjKKTv7CRVKeBmJJ3giGDvMq17Jf2JBMhz1Doe48meDJfS6JfZBazsgSBcymAMnEcg6sL",
  "key38": "K6tf5mw1dtZSmWVekFktgiDXGDWNffT273xvnoqj2doHuo7VEtkXMveTuKNJfiUvekkXYLvZfmXAJazqcqeTS4L",
  "key39": "SCYsMhVDA939Fcne1AvZozxaS8hiakTAee2bRth3t7Dh4oLEerEfgABrKy94x1aThrp8KMCP8sRkTShrhQy7qEL",
  "key40": "66Ma3FZxUhDzj4ySngpM6CsePDi4sLNbQncESwUec1gitXmcuVR5MiMofrcGi2ch4PuJbf4ZUvXLn7YPpHAcSTux",
  "key41": "N6Bpu7KCNB2vV6mdtjT3zmTzT2HVxosVgG6hPZYWE1AdiUoR8EwwGj12mKGoxXqxxe2kwMDAxXVL13UQVKvRShN",
  "key42": "BBBpUMyWH3wWK3s7BrhiqGHpuGKP9QreMtZV3WhTv84HpwdZJ6DuopgHnVLQ4mJ8aRPjXruUvr7aoeiJq3SpHq3",
  "key43": "5FsB1kZNZv2zyim2ico6KBuA7YNEFqzwYEVQ1evuxDLdxqb5GDpYPcESm2ZcfomZ9ZvkKWfc2RaK8cFewqN6rwkn",
  "key44": "9gEg7o1vuJTZtmDsXSGLGCqJGLXnH5F1gqZ7j5k14SmzL8MBKBj2M1CsG17e5WT4QSrXrL5tMccP2d7xQWotSfW"
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
