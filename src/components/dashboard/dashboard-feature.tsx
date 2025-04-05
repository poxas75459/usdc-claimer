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
    "2ea1R4Lsm9Jcs63Amr4vWRUzjPqMTXGnSt6MnwdafBVtF9GkhMW3PfRv3uNvj8rr9b4neswJrn9bt5aceYVYvMkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9H5TpLkJTgv4bQdSSKVxZYrCWGunVifvatpxnBto8vg9niGc9LvesknzdYtrNFqwa3mca4mTPnxb3mx1TV9yDfL",
  "key1": "3iAMwmxyv4W3JsWvuECqunLUPg9NTtHpTrSWSnuUakhgnPiwRa2VNRr96KiPPnRbw5bkWkmLFJuCbUFf2LLb7nQS",
  "key2": "AVW4S6pQNcj8y3bWKvXejj3CWizciFkev1mkUV4d5oGCur7R4zkS2v7mKL1kWVFrKe2QbNJzNSGHzZcH43mZTao",
  "key3": "5bX9XomwkrPgdGBhnd4VMVFyKFF3uTMLPb9ZjG6m6APZZjkkH2xKqFhxqErKfEYxAqEmn9kZMEtjLPib19CqdexG",
  "key4": "3bj2D4BxQUhjszZg2g1TDQ7m2k1AZaNRHg7Qv32yg9P3W5swNWmTjZ8LoC78W78qTPPa2esMNb62gRprUoWcCH69",
  "key5": "5ihECzboV1zdn95FFu3jda2Mp9NmfbFXgHBdH7caZwDWpTWDkZgSbLL2c14bxsVDMZaVtAQDVY3ypaPAUBqBBbpz",
  "key6": "4ML3ZEVorYTsgeqGmV7phaMEGLWvJLKkWmQuFnDUXstNs9SqfzwGFdsNkdHJCpqXYctCyreZojG7XfuRJ3ZK5sia",
  "key7": "63trmmsH5kbzi9cmg7rQf6rYEjMdMiSoX7jacxYnCA6erABsA1NsQHxNwvQYRFW5iRxCeeV7BPmkLAYFjSjb7F4T",
  "key8": "hGxH2ZHnzAhU2JByhtEny9tduiCdxHm3dxHGRCC8fcwVyYuT1VQkLBoNE4S2pYv7pJSqpn1qjJ4pLNmUZTzDPTv",
  "key9": "3ZxEZMpsSJPW91uYjMjP1m22GHivexTHvV6qeRb8f94DnSx2Qd1ScFMMYdxAuvV19EGEmCy8sA2LkTw82fsb3qSB",
  "key10": "3AqKcJSon2JhbmNSDqGfPDgKwhbb1epX4kU6zsNbNZvLb94KmHez92qd5vMmyEQoa6hA4Uq15qXcDtyiwD1TqyK5",
  "key11": "5ux8RprgzM7t6veWLvx6Gm9fcQxFTBEJmPo9BQsii1FJvKs6PzdjZY5VSy3ugKXMFL6bCjMyktShGB8Q9wU6VGeq",
  "key12": "4nZsE7T61yuG2JntD5YRombBsaR8QiFwGyy8Heb446xc3Xy99hCcDekSVkxTcmLxYXqPeBc4xp9ZkR1Nj9mgpWnq",
  "key13": "32AT9pWypHMDePzEmrw1NZjUNvTFsPjcxoex9qRWJpUocdhsx4zLqYFKUHaETcrbMfKkhkt1wiPGeYtzbdqstu55",
  "key14": "3VE41QK95p4CUMNs8Wcreh79aoQyfedWahFUHrwr3tJ33Fiq6SiMx4WoU7wviuFRYe2oRtnBo8DNMvHgi53fJxHn",
  "key15": "5vpF3MYhaQssmQRfoekNWuQAz2dzJD2KJEb5TRuF4dPotwVbXQTCsfWunvqJqQchjf6FgXPe4S7pf1CnhzvyEcht",
  "key16": "4YQw6cBMf2KApg1WhXwXHi5dLEFPuqDgqYvEJESuM1Rb4FqcvCLvND9PopFphC3D3EQfr6cW5dTSo2BYWKXarCLt",
  "key17": "4u6CJBTpR7Xg4VA7JM9ikZNAozWpVALVPTUBskRDf14nguJDozeY4xcbEo5JAPaeshiJyG86uZTWipHJS1ftr5zf",
  "key18": "4nh6ZovUF1hFwu5GorQqTULCaq9UqtsujsrjFCc31MbsqrHAZguJdcXwcWx19E2SCjxzpeVoUtrVGe7ttE3c2qGr",
  "key19": "4xUd8PDY97JNByN87TzofJbz3seDnmsc24WxbnGbnv51KYJxtGUyzetbEMF4udmq3b7Het6RJxjTkwXhs11WBDD2",
  "key20": "4cT6SrwPhxsuidR58Hcm3j8YAMVxCa9L9DWaWims3ZviepnTaZUJW2MaHRsdtggtRY3xW7bgk4SFtUC4HF2y6Sff",
  "key21": "5FgLUsoEby1j3opTAgfKkXJAXvCky5amYG2EhchSag9rfP59dVR8Q1hFs6BCBu8LM4LeXvNgg5tS9gJ5Bxbd7K6s",
  "key22": "5xVQwJhMAb3s7r5KFtmm5jtfiwRfHoL8nGD3CP6vE3gB7qagvfJc4RRkiPS3Wxmsazb1WVsMMjyF5faSjFEiRzL4",
  "key23": "4N4Fgxom5wA44qHeKXSNtHcqbtjrcB8gLnE31G4pxs6DFiH2VnizaGkpXLMc49m5WWVdgRiT93JAMTPBHrBUVqHB",
  "key24": "5zccvZQVEZ44j28TcaUjnB6TSmxbGtudqkj8CYCxEtyyW8ySd5MAmRmE2hwwytZQPWR4EJ7Z1GPB2qGz4TbhFPDW",
  "key25": "3J7PAcQAWjUw9Vi6mHJs2vWDGCcSxfeHS4DCRn6wuj4zAbe6aS9EPViSdG76WB8AToduiwLM1A695kKNFNd3NXMh",
  "key26": "64TYupo6K29KZqB1T6K21uS4mxLxRwALYymvqkUCjFuiuRqysz11rbB2gZDRzLMfZrj8BombYzYetyGiwHnynebE",
  "key27": "4454Lq9PBBpnaLwKHwcy555g7AnhdGJqLgaqUrx4QYaEcx2R9VYmoUt8Za3ewxFM9ZVpHwRMo86QpWZXYCxqtgje",
  "key28": "2PUk1MX1wVagQJbKYLq8fZCTY1cFaEBtVWKPM5bB3G9PBPH82jJRrsEK6ayJVrSaPSjH7A9Ww2p1rHq9TNHvMMhu",
  "key29": "3ZBYUtGGvffmDJpinmYQhisNUNePzY4g1ApbfeA7DadTU31SAfpFCo39ETXqeVXMtkEa4tRCvw49L5fUftBZsbgh",
  "key30": "3YbTwco3wnZ9DPgJuybHSKWFGe1sfhoMkzuzUcDAiPR8V5TQVHzVVXxTxaNbAfMhQr3jyLhTNV6FWWTiTsNrFoa5",
  "key31": "4g3g7sYApoEoQw1JBSoE6vdsDRyTakx3N5FEBGGjkSZVGWQgZsLaEhMmmokoqMDssovYkZKGY4dTi296Q4Rmq56j",
  "key32": "2RQ9XtbT3qg51yG23aWsyvEAG7knTd2MrXPN2Etgq9vZowNjjA9q4WUrmmyjy2Tfi4V48otK4QQzd3ZKUt8XymWa",
  "key33": "Dw8LqntRrCRmAhLym5HK9iTA3VgRXFPM2qmSsZ8FhdvFjxmE27mDGRcoHjrWPrHWLWU2Dft7YZCJDzBy6qcFmym",
  "key34": "4F4vUrHKJzaLaAjsMGSDz2jLSgeJjTLNimXgZJVpiuKDHsiKYzF3jRrJhWUBfp3ump47tX9p4J3yyCb3kdf6yHZL",
  "key35": "4aUWYC4sni6CdD6BjEBNi8RYqKE5qgKDLfDHCCwU4RWqRhyxDTnVZ9LP2kdVPCGJFqNrin97SsnBvRKhkKNS7ZY7",
  "key36": "2dLRxVtwPQjbpx3Gj84mYeSHH2v9TRDo3GJkGbvT7E7GxTMHzYM6g5SpDteDyfpVDaUH3pFCDafdHEoDjha4ScvZ",
  "key37": "ZcK3NqUSmuqb9fVTVRnWWnzXhwgu2QC55cF4sn4qmcUdTYnup2GwqBPr7CcaQNYAY6kQ2pcVjMVtcU7exMA1soV",
  "key38": "5rSb8JwtGreXhEiWC4n6U7wQwuXS8aS1S5hceSRSZW83EbgZ4uuMGXogUnc1XPZ8yZZTUSEVjJdJB7uTQysZuiD4",
  "key39": "4c5xUjPmLh3K6QtMWQZVkQEGRuXh34udzXBH518CHDEQ25eAnUeRk9MfAFiJg4jdMvXX5vrHV6ruFSSmn8f3AP2g",
  "key40": "9GJr5uLectNH39u3VGovJb7kn6doj5jVRynvv1L4z6PPaigzJbS5hGkmmj9VTZhKo5Fqy7waAKPv5UTk85VH7dh",
  "key41": "2PMNku3FoiaDNkmiSpK6Rec3NRkFLoRGmWdcYwQkEY2n9wGj8o4ovXVpQLKiGDqcmMyN5o87Zq8Vpz6oa4QQeJE8",
  "key42": "3PSpoSQnYecxfHG68rSFjrQQycXxsbVF5Mn2kFbr6Uc136YU93e9md72Z7rkkuSnoYo8Npny3LkrZpKB7acCgNQY",
  "key43": "2HXzaYrQrrDRHu3a4Eu32VrEYAP25W9vDmiZLCmiRL1iLoC9NTKFXjqd5nazCQyMCMeX5zrTAvEmStF6CRRLYh7w"
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
