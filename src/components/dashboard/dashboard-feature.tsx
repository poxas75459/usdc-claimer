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
    "4CGd7KR3AshPwU3C5KuEh5ZLpbZFTFvSWqJQSkxaGbDzdtx1jcXhmGhZewNXnRXTaosx9iEZLpc7AR14skuoeoGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RvUyRXWDTACxciB9HT5fzEUNLMj4RpLtBivjoXbb5oqSfCFW9RkTxEpf72vMKNhCHBzFXZmYSPxKTvAown9wC4B",
  "key1": "3c8kp61v8rAbSfF5UoQ3rHFHVEUbCPJQduttVVNoCN6YFaCHwMiSvr8Qoc7FG4GxhDNvGY7YS2KcKJpV5w5Phmen",
  "key2": "44Kw3FTN3A7Rj2Du3GxGgxWFS5WW38qmw53FphejhtkNHubSUsGjNfQQfer352dEBzyMBL1iU2GGV2fdKAQD8aJ2",
  "key3": "3sUsh5n653xoMTbSa9ZyDM4XyrnXJSN5TbTzmCkKhbdpUz4mQpVXMppUxBXoNNSPMEbt44r2ogKwqkWV9Xt1XvY2",
  "key4": "4rTtuFYyyWiCwj97XhZcpiXDjsXSjRsix1yCpsbyueuAVSxZv4diCKAgMexy8o5zJsT7oKwctKsa29BioefhWAMh",
  "key5": "r71fVJzgeH72KfbPoLUedNfjTx6zFjzvNE2U6AXEMn3MXnnyDWaChLhGZvMvw6VN6jf7Kxps1DUT3NRXBjmc3W2",
  "key6": "5eDYACoB7udJ2stgobL5QJypJjPyxyxZsQ72aSjjY4Wbi7Q4vcULAYKxSqLRE6JmL3pFrMeBfnEBHG29jmA7Mnwx",
  "key7": "2xxLYR3kTuBLfEVYckZQ15qMgcC3gKQZY1Qu4aG34EJY76Lf6jdHHU4zkhT1hskJwGaJiLSUFHmQRjktfnGD7zr4",
  "key8": "5iio71HwJAkcW2vefReVbogMsyZZqktSCGgx6cn7ii83pvyGy6LkHo4wAw1tDWX7ogegQSayqSxDpV1dftkeRGWZ",
  "key9": "5wZa5akWMXmaat5tgwSbkM4KqSSs2uEm6kK1VVwWgVjvsKUEeWx9dDNjsWDHTEHQWFGyfA75PX86njJoRLc9szqc",
  "key10": "2L76u5GiK2CCgrVNzbCVB4xbAesMmVCx4MNvKSxqBBLTt9Afzs39og4gS7sKkWoXtfsc8B58ZHUYPtMawnnk3nBG",
  "key11": "UbSPh2p9cWPn6d5vyGCHXLmpfGd8SRnnn977iQ5LSArc2K9fEAG4afx3Q5GFGkdZFEMNGJg1YeCzV3Dcb11mnTk",
  "key12": "6MRsMFQ9XiEip2wtt56r6rNgVAHc7E7BNUDsNY6H3g9o1NDuCQRUnHx28NLSWncZ38z5W4k13T3ntWREJ9byitE",
  "key13": "1KmiVwmBnMd5CU8vwcgNP8Qn6HsHFyEk4Zk6527BaaETLXWwfS9t3vFNuo5RxiboAYQFtJjQZ3XN1AHghJDds58",
  "key14": "2AjzWxffZuqwfUvqrg3ZniMT6J9quqdx96r8pfqYEZ2KbrtXyGrLhEufmQc2Zj5XEUVAwgTVuL244b2XY3BNxus1",
  "key15": "5Cqo2fNvokkKqmGep9Lw46aFD7yCsYCmoR3FHLWaYxFSPhLE1i53HneQiWcfhcuVz5iwdmKGhakCNNmrPsT6v7cW",
  "key16": "3eu3bYUN2YetziGeYWjFJatyBemMrxJdot5FumpjiJPJKHR9x9kwE8HqMqrjT4C62mVcPHLqgZbVynzuSJkhS1z4",
  "key17": "43v64NKg9xZkoH8mrRGtzAgkmF1GwuRpMR7bx2zaCnPAXzzQVVXkH8Wrp6gCy5r1hJhSKDnumSf3gFHE7S81ZrB4",
  "key18": "4dEx7EE2JXPdcQcbiuZ42jPGsPAjZtZ1JyJmeV99xPVYZyzEX1FJDfFZdYzvVZj1MwYqoM95sWhvkbrULznJAkGG",
  "key19": "431LfyvPCwUwinsoGBAg7YFh2rGJXZ3N6T5Ad9dSZTsptfhKqqNATnMFcoXL1M2GjH1smmNqNyW8US6qMSSmWpLR",
  "key20": "2syKYj3UZPcXQUSWicmwcPAQ5Kjjsz2EwjCJmcTZB2JigS6btyMnp6Ry6Vay2RqcWPtdf3sLgE4Jbsi3MLrQr1NA",
  "key21": "3J5krQ9fz6xbcA6m1GCrDUCUen9ZMyvux4iCKLJB9inLF7yEC35JFbU4Bn2Cv9TcdgEj2VdZy3g5tPFUwy7ukfHk",
  "key22": "2pHgbAzuxQBy37K1LHNKPBRtaGmVbT3UTSbuidQxPE5A2ehkeWtX5CfVHxe4JY6HCcZ7TaFGoecUSWxiX3oAspJa",
  "key23": "4Q8BUdcc254gfYFRVKtUfRbRFzYf4o7BgtSaCyGBk9yV1x4wfqpWjn2o6wFSxX2KHan2mRh2timEd975RbVgrPN",
  "key24": "iCjHkaSUz578QUb5ndxcRC6UpLZ1au5iKf43rJ3KuuximZWU4xJ29Awy91vtqjNEKR1fp69g7Tj3AhjDm9jppw2",
  "key25": "2YSzQeVytQinoB9CGTEhWFrNaV3JBBTn336pkuPTbwFM9kUwoCobewRgnREMzkrth3LEz14aNUWeUyU67fzhjQ8R",
  "key26": "43ikVcMypGAzdembKV9RbKYuVzSefStceXR9UFfchZEpVApsd9sBhrN5zsGHPQZLj2FiGXfcmXzsu3BeTkj7HavE",
  "key27": "5b2bFN2QRJsBW2Lvi21V1jXa6fRrhBGDpw5o2iH5pYqTvZGGoFkRWAS1JmtZpJM3y9JnKcv2ebXf8Txe7PksV17U",
  "key28": "3qM6uwnqxS3517SHTqGMCfeFTC3xRmFXH8MFnWnJ9gyMUAYJGCJv3wCXu4uYhjQWkZc8SxXXWmrdJg86jDH3G3aC",
  "key29": "5P3j6FQ2n2YEucEtGCBUmogx46FmGJkaTgS3oDnborQQ35nDL9Fa3PKX6rzosRctdPFMNyDJDdduFbF9WPKM3LKd",
  "key30": "3S5LV8gnRzPVFupgTB74KH3Mb24YZHRh6AmCw2fp6hruEcJu8HzbNL7jMZfrW2syYnsSh5SSerrWbKitMsv4VXPB",
  "key31": "3fVWMQ1uaqofkrTp4UYqn8vhof7dvDBi1kxhCKX3iBrUpzrKR8EJdkhgufoN2bD5qsCCcHdB9GCfrUE6crnty37B",
  "key32": "34YLX97V6x66ipAXVyBXJz7xqbJ2NXfT9n62bo1Ev1auyQA4thFMKTuHSdwpXKmgEGxrQ81dy3jT1ZZqBDw2h44y",
  "key33": "23CrmoQmAj7vvZsH2sC42uhcGdiP1febFG2EkCzRY7jcDr9KscdgMu6r9rA71wjEP6rgsXXowDJ61RcUyGGhtE9d",
  "key34": "38TJaCShsSpUzViaBvdvShQ9Pq5eX9aNDMjHuDHeQwGuygjAcBQzYbZu6yVw7ykm2Vq9zUUqmpXafA8ucpH345cf",
  "key35": "4DN5cpGxqa7qBYu13fjRFTJy1MiC2ymYAj7kfRmXkecmAc6SZdv6g2SHN4HPnYJWmfZcv9AfBjEY1gyUHtEzh2Ep",
  "key36": "BZvTGHWAXaJjyGKY8EFxKP778xZqhAhXh9jvsxcPnfdnKWrrcb9uU64qr2oXsQMV3JYcFDDr6tXdBTkuuDhQmy8"
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
