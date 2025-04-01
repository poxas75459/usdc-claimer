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
    "3PZJLFzidgQHuCi68L1WCkoBJNTvoHPkjHnbzdhsLseBjKitBatz6SDdV6SH6JBMKrzSKpsp3ojGmjuHWJXvgd2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NFcnzBpto8gfb3kFhqUbmiqPL2Faevy3JJFZsyuJZkz8gXecwpPhK5ZSXoUtfSKJxxbq3H8wFduBZ473wKd5grm",
  "key1": "31FtAkB4PjDZE3wmhfouSjFzsnpB1jpXqMywVaKqyHHQyj6doLD1WFKj4LAsN7KE2yCX17uWkb1onhkCWz9oEXqc",
  "key2": "51ymHxLVLuqcsAeP4jSPNUSfoa7TQKdmGbRzCEoBNDVsP4u5r3ERPHw32b28njSu2JmPsuMVFhj1bttchB3AfgBU",
  "key3": "3AiVK4qCVb3xHnHuK2GPtTvZvzQqUHXbSd1uGpawbNQwkyPqoXofvLsG88HcnTipaoJwmm8wdcENFdMZdB3Wrsdn",
  "key4": "4CFcc3TQCqTBzCPSoWLecAWxo5sHGv7uzacwoiZwqHmwwrbphNhTzRvUNDdSwqycbyqhVt3xdHr3Xs11Mu13GSq6",
  "key5": "58MMnxFp7ivF1dc3GJFkm3LrQcL2ARV7H4xGdmrD29XCdNrFqtYskhEnzR73nR9Hfo6URCv1eMSunerZSCXvrnpz",
  "key6": "2zCkDBMf4pALYAMzXH5gZdcHsX4JnYFKFCWzLpeejsy2R3VxLdBbKkmmsmbHsYufiNvSYA2hSPqZG5HA3DYdDGCS",
  "key7": "42iVuRKrFkZ7cvqbT7J937Jxq4JoB5A4METoRZm6J9DN3tMj8Jnt3m2TRwGontcZaCAXADtV8X7p29YzHHEKLs7",
  "key8": "PQhr5XbJSVeCWY7oK2mGMMPXDgoUnf577HihiAn4kuajdLBPYnTu6vHUmAPziHWEtLLxB8a88HrkfAvCEsntQzF",
  "key9": "5D1nXiP1QYBYnyK1x4zrSKVD4TDD4zkc25k2YCU8apG1jzdTHimeqsoepmRruVM1EhonHf6VPNLhXfrhU5RbVE6x",
  "key10": "3rNzHUeg18qdiYH1CDS2EXfoeGVpoJhtYvFndW22ZLKBSY7egA2QBxbbpD78am8Vh2HSCct7yzP6bAiZ4WZpcqjL",
  "key11": "4fHeGtpt5vmgvBxbNBqKwY6pPVd6p6o8iqWDnwEMW4XGF4tjjhBEWJrs8piyvv5Nk1orVAGD35RvAaRDXBE7TpHt",
  "key12": "F1zmG52WGgkw7qdtVo9EXkuVyX134CFhvvfCPqSjRcm3pyV6GevrzCz1QXtKsEfze3StQszxVQNG3PTq6pP4DXF",
  "key13": "UqHjFwEH8zQHBhqmXMgX4dAywywkHjxfH4nq7CUx9ygiwhFRpJFeapv68UhQkFJbLWJgwycmJGC8xSf8M1tnnkA",
  "key14": "5dt9vMefiuAiKmVpFCQAie82FiYU1iCmT89j5k2BvcBavKJAi9i5e71Nktqw7eaFJSTPdsAFGe4F5mngqdbyLxjf",
  "key15": "2L2TuHfLmoZo2snTrrXYAQEzVXkAdfsyvpAjGno1FR973eQCV6CfNgMqEZcTtRxAJSwH6gGNiZXazgo9fyP43Z1m",
  "key16": "2Z93Qkvdq9gmWZdFEE3rJMnPjuddRVpt3e1kjykY9LaHyM6RWqbwAWaWTxc7GbPMSTf1cECsBg2dQ8W4zBUagSmA",
  "key17": "nLTCF2vbhpzog4EHnMN4HJctVQrC8ntSavR8sVa5bMWxNJ3qrp8ZRpL4N9iEtyYVhYCFcyawKUtdMwWgt36RiQ9",
  "key18": "2maUmNqWuCDUfvY19UK8WGKC8wrNWcrbSoyJpBPKo7KE1jhG4BbEUwCAZ9nKNnACQsbx444o7nhLVBqm1hwGd6Dk",
  "key19": "9AakfsTLpxEcPT64GE8HSvUed3sWVDZvQ2FhCgLn1yu6TLfV3bn5e1NHAw2AzcdiERMvLu78bq62GHCGyG41Rnd",
  "key20": "279csur87CGfrL2KAL4mveyPPvb7RKXxsAF4ZHgJwGfCegarTcj9ZXr2GarwD4UtSriyjGqCtcMwGJMmmPqFzrzf",
  "key21": "4h6wXQwy7PQ5A1pvTRVKNZuQtTJfF5X66WHQpnJeSAUGbWHzHPTh81yPMzs2HA4YXULxMaBswTfAgTn4Mh53uy8x",
  "key22": "3QLu8dAwLFCH4hqARW3j2aFnjqrCerQ5yh1a7f2Tpbtp64KwHZwKjcgafyprnJVwMaHoH2CY91afGFng6yLQKzT3",
  "key23": "3ZMGYqMV3LAKxFJv1WKiM7FATUTCCu42vijDjU5zZwVu6EKruWFY3BU3bC68LDa9KZcB8x7EnTCT6i8GHS5mGqsF",
  "key24": "66HUw1ehPF2Fi1mbXFXzn58zqgNPWPBtHkwotDJXQMz9vNGjRGZuiqf14wsvYD2z6cLkREGroR7iFhv85t8GXHNu",
  "key25": "4Ubhxd3w4t4KDX8WdRQiJUk98Ph4ZsFqjtNTAY3Kbai5JWB6tnaxFK98StuoCx7WiRygiz6phZcNy4xwC2yYPqVx",
  "key26": "4j1KuNEmD2xVaniYWSpfuzQEupbxfg2bwg3hmScHMvuhd7crNyuzQvwsMniCwUQtTih2Bavque2E4RxBHF6vcadL",
  "key27": "24tWQUXNzdRV5WYTUJhKH2FE3qKcuM95ZYTMaFwTNRRFsyGcZPp9QQkS3YAjozn3NC99y3BPRoxsnspKp5J8bk6X",
  "key28": "37Ncdo6TUPNAPDoWHzty5HtumHLbujxs7W91iQFUKKHe9uWhf6xfrLD1xmm4zpuVuQpkv21mrq5GbTTr2ZdT8yXB",
  "key29": "e8zZmhZJa8DDowa1syB5C6rC6onaauZ8fTJKhk3nyU1WxJbNX1UVZq44a2qjdQ7kM2sWJNysiwYj9DbSseRUMDH",
  "key30": "wuHGasAp4pRCyBiXUM9bPH3SoTD3WeTC2jhtzGDeULiM1bHcBD9TxAKBQ1gNBVo6qmosAVmvT1uC3HBtDEEDAgh",
  "key31": "sNyK25pfoP2cUyGDvrkVVuzY6eBfbBVhNSWqQGGhw6k5pcFZF3Y6WfAhGUVWUaR9jU7tVhmAoxqHM9WwZbYgybU",
  "key32": "34nJiGdeP3HuWkfwbWb5vi77x7abvALTFbdBCpRuFdQgheEij8iXvuJnSxbnxLWp2XaAMLcyW7vZuPFNJqvvbmNW",
  "key33": "4ra2fsme4DCQoMcnFq4Q7SrjL1FxqKFcj31Z2Qc7L3tLGSECzN3AjAwFQtsjfTzqqaRrUyVe14BxVYZVueLnSMst",
  "key34": "47QwKnWZQH2YzMkWAQLtivi15BW4RrFxZ7x7tDp2kj27w5wGk2Ht6Yy3cp7QkBTw6MU48MJQquqzRsD7DPpo4VWN",
  "key35": "2QxC3YJ57sLyMVHEB6EGVzNhL4qVHUGXb34ytAvQLHgzrQXXs9JmN6nPhiWUJ7DGid92vwJA5heecK1fuFq4FD86",
  "key36": "5X7MnAsRx8fXtHHhWU16UfH3ECmTx1ryuNfmHPnWNfLTChXemU3nSHTWgxKweMjvaRAZ2MyKAN5kn5pSXbSoDp61",
  "key37": "2Cw5ASnumF4FkbPhaQKf93mmCxX4fHFrYhZmMUjY5k6QDAgVkSLqmc1sh87vbnVnSmgTb5rArQPRowc9QSihhXss",
  "key38": "2Rcs2Go3kjNnZ63E3K3E52CLXAqDGos6gYzpcDUJP1h23UpH2bqE6LiBxhMZqffPYn4RZTXf6JskBqeaKMhiEwg3",
  "key39": "vKt6gUEB5AE2XCkzVxpoiUTmQ1PycvaZWvxcCVTWo2yy5JsXoXjpEs5U3GRQWpHLjcttUYzLx33r6Y8RbZSkCzj",
  "key40": "2qYgZv1ZkyUo6njf7w4QM4bZBqdkUokYYRfcTbbQphTQheGx1yY8c9g6QYm1ZfMJSUwwZ8Spqoz8meckTABP1pzT",
  "key41": "3uaQs9LgtpCMmt82xt7gLCfKEhCLhgHcKgh6G9cuRmqoXpoVx9vM2ZneZjg145B895whFN6hvCuREBbP5naeUZKA",
  "key42": "4zYnAYnKMmgAPvcXQRfrdPiqP6mQ51zU23ev2jxr4YcNrhRLB6Rc9dKrqmBbr3evyEg84JtfZHbb3Z8TcpUKWRAD",
  "key43": "24VgicaddKonm7AR1fTi1m6Wgm2NEyEZyYUQNCV2PkCLeF7GMmAcDgdpcqzmfkemQoETKwypa7xsojSVL3uXrUx2"
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
