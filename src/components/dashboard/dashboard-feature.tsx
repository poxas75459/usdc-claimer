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
    "4rqsoxvcARnNRr6qUnTqLY1y3iWFB27u58jRjhxcAQANcW4uETNDJrVwRqBpeMXNmTp3GgQw2ckxq3ZKn5vEfh5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mbwsf9yJQyyzdrLb6quGcRzANdjcpoWGTqguzxNCidS2fAU85xvBBjwdzzfBjcR1XSzdE9PDeQayRM7QeKTK96S",
  "key1": "BCG1ttxrqSkKNigVbYuMaN4MnyVVDGanuzLE1QSdMhcEwSmpyPxy62M5J1RmeXW1gh2siWvrrqpXMhAM6AwrfBK",
  "key2": "31yNLZ2FSYySWsvBe7ado7MMHViypFN2SK82VJK6mLjcgMiR4ckgbApbHtYpqps7Mgs7bZU99H8kGZdHXhVMBHCk",
  "key3": "2kkLqkp1PR1zRJDizfMhjfUUG48yS4cG72Yp5KKaa4PWWKFSKSSGwtvZkMWGcWP4EnFi72jtfjfDr9RA9kmbzScp",
  "key4": "4xyVZ5JX6GrFm6T4rTYpLQrLxe1vYwQCkn6gPbprEoS6Nd36XJn2nbuBzzWMzu7SAtrmhSGL3ZYa1VHdB8cS9eHV",
  "key5": "3aSdHkMUHHfU9bxGCa9Q8oDrPAoiEUVLQUffJwtH8E2P51U439djVzqXZVmhgyj8Hdtp5SZkQ9ThC75xsJYQiiJR",
  "key6": "4xkxJP91HQrJE6GAPhrGrPrCT1CrAvpa7jUFwXmdkDmiYhQQpdTFxwhTT1B6ZqhTNZR2xpPZeevQSS9cqbtXYtsM",
  "key7": "51TEGm4CmkHwhaMVKuvVTu56fgqTMFYxT2F453qJjER5c7Kpjg2xLcPfGxZtTLsYAU6jojmmbFmQ6mBbr8MebYjV",
  "key8": "4YYV8yJtN5knErgGNjYSe8YCWxvQLaKmgQF3xwmDDL2dHZYYfDhM7GjGR4S4FGhfA86kjHmPsMRQgjjdPXifJNaz",
  "key9": "3mHDU68sNUQ8sdfRsNzJXwzj3FUGvr5mQ4UjcRmYVixEY8YnVF4gznoraW6nNasXhH9qCakr51wmbtrXxPL4D3RC",
  "key10": "3dwHXwM1qAkcdwURj8yWD7bxMfjNLKKvjBCZcK4iDVfJ177iMHYzJDSjfKq5LoUAUWTJJ884mQfBtCx9HcrGfw8D",
  "key11": "3n3VyE6M5tNJ6c611Qr5JcfXoSBvWdoo7rB7NPBfaYY5yuAGtbqmRD13Q2aVJGfnKZQDG7xqrU6zgY39tdo9rEr",
  "key12": "5enM7RvEjtQ3BMyfStiTGyJZpCMCvXPtaoEzXTvCKJa6RX81izZ2kBtnJHdc94Z7EZCBugfkwfpu5czWaRJzC1hZ",
  "key13": "3hoZn23sQf5FruDjNYgMAtL72DCoQRCseQ5Md82AKt7BUxYBEi2UW7ZtN69RY2VrfWzrUBJabto2VsAMcUD8ezx",
  "key14": "DVrEtk8R76xqXTqeiLBLe1BdRMKeMeeK1A8ZAYoKub6W1dMKaHtCrwo5QkrY3aicf4ErDEmKKyy2x5DWZkXnyQi",
  "key15": "2RcBEJzVbYVnjiZu1DXBhLztiJ8xHeVmAZdiSbA26ges8eBotNgfRjEUAEzPgUZyxNhgFfe6ZQMNkEP2mrMDV7mt",
  "key16": "4JJGTtynR8sP4T33xtV5FKfAJwF5e8oxUSNM8FQNi8RHdyW3Qfgxr8yr9Es2275q9XuwQTzczynd2RLw66FwkoUx",
  "key17": "2irR7RtosEQLGnnQHm62KNi7PAGuhneuzvpgTQQQsfbjewx9USFUWx93ZsFzZ6CvvVsNCUPxYv3mUUNhbCNsjQDm",
  "key18": "3M2fwrwzXnVvDrpeXVmc1kJDE5gfGpLD4XPwviDpW845G71GDjD3xDjdKbqAg6r2qiAmRvt4QPdvPsmJrUsZrydX",
  "key19": "3hCRwrXo6ie57mnzjiupbcXpnkLDnf6u9Pa8VDmeGiieg6RoYDUTY6AD24Zc8rRe1cGsWrwKSQPQZHsDuyGeSfK9",
  "key20": "WdNMgXEzXqRrt3QAgzg6hncimN5mZbds9ykyN2yHPCDgX5Kv7JUjjH5fb9zsDzwfmnMavcPCDK2sxpAruD864hd",
  "key21": "2YPEsZQBAai1tMtm2NxELtLPHeGtMGXwqPxxpoZy7L79Uk8CtmALdZ4ScVu7LG1wErt7QpjuYH8csKY2REoYpXrb",
  "key22": "3Gjwv8KRCe4GiJQN2YG9iVqUn4o1kh6kP31cWG7vsmrevpnMTQTCYTch3c8LhcHQnYnwPg4ND22LAVPd7x82UmdV",
  "key23": "9QMvJ7AnzH6QPEGV3kNZgGTjydGfLAamBHSdip9rCVqqp85P5M3gXTV4YF2oNQ3My2ihLf8aaozS1z2GyaALtww",
  "key24": "3qJnpjTiFrwUBbVX17b8ZjoMoTEFYsipAoVQgqCncTuJhgsWenU6LzSFprCder6CjKUNUX6aSaFeiV2UsKDThoPi",
  "key25": "BstvY3XvtxYhS55CUcqGR4GvpMvKWvVJqQfv8VXgJBtsfncUodAnBoEfKktkHRNhtpGyESVUQUZB9a1zJdF9DHH",
  "key26": "5diVfjzs7HYQWhjhyEbxtPpjUYstaLi1Lxw56JMNAFC9E8mYpA7qwVmSZqF7VdeHCUZz1zS5yaftet3u9PzfF8fY",
  "key27": "3szb4aWy3HWtNhYXqjgTK6is9vwELqwo5nBPB1Co8JubbwKAbdkxdcKg2rk36BSFoBfejP3FrvnKngPe4tXtfhVd",
  "key28": "4rVPZGrKRWXptL4fL5UXq7mAsPJbDK5dZZqkK2WSG7qB4FcdQXsWU1USoHkAV29WS7mSxhDqEsPaF8dcbRkbVpHT",
  "key29": "gpStvv76c2Z73dSmfVuzHShf3kJYE5uLUynCVQgpGig45CWURGtr4ZUXHyus8CdRfcmt9vgnMC7TcHs17rGoTWU",
  "key30": "2GM1mCyyU4BeETCbgjDwVVHJyBa5a72gtKX2A8hgpM1wHjuvwfXygAQpttyHcyz1yEcMJRaBKQEFBS6UiZnKsSN6",
  "key31": "38QfEo2JdT5NqDVRPSWUpcWaAxQoEye7xgrBRBJtUAq4uMDERJFxHhsm3NqhTnu1MtB5R6gNQjUit3tZqxm2KiB7",
  "key32": "3NUx5NxvwDU3g5oBfLyqwiYo2Fk3mDBy8rPrRjuEbcVCvVTNHt5TP3MmPwwLvbNDL3S2b3baQMndFQbya9c2XYGN",
  "key33": "4qroMEvpPUpXuqYvaMbpscHGfTzzrkfjak5YfmJ4sihBFtvu3Jq5kV62ELQLhdk6Ckaqz1A3Emd3QgHuECfKmuuc",
  "key34": "55Rd7XJqtSGCnMrRk3Go2wckZsWafqiJhjUzV5zF64VzUYtVAyd67S4DZwNgF9Fkbz5pM7Zv37CwVKsrVfyy969K",
  "key35": "3ALpEvjGMQd3tVsmqByoAn8VznUwtGDbN7jtNZ9ySAP6PhuvMQbPfdYsQXyDLhapspYPEtzczZG8243i84guYQR4",
  "key36": "2K1rTgAd8kCSgm3h8dpfD9PEcezZurc5x97fPx2jkqU6W7DpBDDVMgZmzBwp8eVL54b9DLAAhbGSkPtiX9PJLoZ5",
  "key37": "55bbmvafpY5edRBaBhcfXp912d2MAn9vZ3Zfmjb3aUGVpxFiVSqxK8dZT7J6WMZTBZDvK5t4EjC5GsERHGqDtnRX",
  "key38": "MKGREcLSmTsSVQgsyM6EboYy7UXZYQNG3d2geeRghK4Ea3Rr6KyWc8ZEUBny1KLwvLsieWsdSHfRx6gb9eJgHoQ",
  "key39": "5rmWhuRKYeVqeunHRuv4bi1WX7yFftwq4PzWG38fCNEo1rbdW6jvGeJXXdPzh4j33xdq3cfwSLWxC2Xi5L2MDPbt",
  "key40": "As9grMpT7jiEae1FG5o1AnwLJk6HkLMDCjAfRpLQbvP79uZAjenaTFLa1WbpHkoFh9SzoFmNYTdstxqrbstt7zm",
  "key41": "8rjrcXEJ6sRRZygx3sLrRB66pB2HhG4BRJXifnXtWA5e5pF4G14tQ28KrQmGBrzTwSfYTHTXFBB8VNToLZJ9G9A",
  "key42": "4D87Y2e7hmAKn1MovnL36bfpYiTmh4GmpAUZv8oVmfdh58PLPBWbRHXA4YxB9JxNJ3fZuQLW4QEwWh3Vu6EmedrJ",
  "key43": "5cTmgkGQtLYKQ2ctHsME7zjkvrcB6aCJAiQrwhqWMsFGoKwKQab2GQtzgNkosoe3PXmxnSNHjxYpNH3JS6Evjovp",
  "key44": "5cymfREQUYrEBpNo9Evn2DFvWXQpTVAPSdRffUU9thTXa3xdqrMRVHe8JrU6BFdSvrDADjAz99YnB539NXnLgvog",
  "key45": "3Wf3RjVPz5TsRs5mHYDDR9MjoQ2yALQfjFigp941LtLNDWu3wzEMSGhHY3vYtWJSoB5vDufFWDLXk47S3hEdZhuF",
  "key46": "5ji5hStTr7dDhH6vUJPaY8U4Z1Lh1fxLoAguQ3oFeVn2mUQAsbm7Ei3wneRWsoWHUgr7Hr49jRR9ZQQrQNxAATU6",
  "key47": "3r3hzTtwSghtsUQvdx8HeQGWb5d59Pr2QYfa3vn1hpnAXkfSr63aewPwpbQH5syKwgMosP5qdXLuK4ogfUBtbRQU",
  "key48": "2PuEe5WKZvgwpJzZW2Jj3LzPZkzohgnwp9PeyXW5KgUhPKUX8podUJ9baKTkp784qHhroyPZtusFAdMgj1h72yiT",
  "key49": "k7Z2wKkmQwsypvAdjpB4CXx82Jzm8bLaq3A1wALweyWyNkfsGjJAyT2DYA717KxRgBEjzut1Q89mSJA7UsjvFwr"
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
