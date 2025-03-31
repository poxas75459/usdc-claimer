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
    "4ux4q4nuSXBEfW9LKbrZaKxSW6iUE5CsTvKQ9YUbnQkwChSCSfLH5Tf5XLm5oiu2pZb8Q12YFtut6aWEp2nhjaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDB17vdyrAmHcSXNma3Q5jtSGreAss1yqo7y8YgycjzvjLPkF8eX5UM549TE1zb7T4qmummHBSobe6BB1CCj9Er",
  "key1": "5TjMv8KPHae3pb7DHZWvqDmyQd9gRQMWsB3eyUxZhnEiyWNsTizyzBReuXT7Yfx31SacV4cjsj3MJEoAHWNjpSMz",
  "key2": "3mo6GgSKkr3QxKpr2Bpd7KTmytqQjJqr11zrpC16xab2h9EEEu7r82VFtYcL1GLhbMhVRZ6TaW6MgcTryN6ohot7",
  "key3": "3cQCWXygDHskPrm77N4LAWDwZMUdzG9qUmTvKvGjHR4Qb8GndjVB33RKjupJF6oiitmf3gf6a7QHjoWwAMAhjQ15",
  "key4": "4iaGuVtDLmJUw9L7T3SRHk3XJd1WJZLtQviAqVJN5fmbFQcDkZNYGVWPV2p3rsGQabyqbQ1AhP5Uf8YFthHcrVmo",
  "key5": "3wrbfbTfbVRwKKMj5kfqHfFGFRjPnXaEPV2zMJed5T8gJzjLwwfBo7XrX1YeApT7M8F4cYKFmDApUn43md8KujQT",
  "key6": "xpQ8vtaMXCkMcppV4aqubE4xqGvmP4erZBmV6525qK2v9upb6X6hPLPzqA5uLkCJaKvaUpkx3wB1RD48fytMV1n",
  "key7": "5UGDiZPrA1cQN7k2efToUFbXzj2PwyU8fX8U36JFdMxhfrA7GjuVhyE7BeFatAkguk1feK5fZJJ8p2m3m4BcvWcH",
  "key8": "27PyvySbTmfJtSjmV4wZ7KBcRmamNnyvHJYn8N1eMnLhiiNSTef6AYjseHQHKG5NfFHjtQr3urgJ1donegTh23uZ",
  "key9": "5C2n75jqjDZsyH8dqFJJrCjctGCjtc3e1MWEVjCiXiYW5YAWygB2YhtbYw64mQmch5RfZY7R3iFUqSAutXUQ1HLb",
  "key10": "3jS3Tac4XS68eR4wxaX1XF4h3Ke478i6t6uGJZWsdvBjos7EA6ke9gTTxUY77YYkzr3kJzt9NziAgiCwNGBy3dXB",
  "key11": "3ZLBzmfKVktJsg96jVyYGyrvsgexoqpysqAKL6XVchkWqwme7Cp14LJTYUyNDnmArXZ4ReapGZHDbCtsJbzzRZN1",
  "key12": "KzUPbdtzoGyadCGFfYqviQoyWmx8EnSwaqFNm4BNgGD6M5grSFwN13xnPGjS8jXG99ZcS1QTk5LAUQxEwYyLu7z",
  "key13": "iaeZFQXiebdcW4zP9afETnx8mRvUKqt2n3S5MNviMoZXJ96PnybE46tYNtYhYWehqiiusK19WyMe43WcbN8V4q1",
  "key14": "5UBboycLVRCekPG8E5jjccvDiNRdjmrn7XaKDRTbjBnxnYtJv4eDtPJMnkKNzegdd7Q5qGzvQRpyyK2hsTSgCBXw",
  "key15": "zEhWV9vKkCAVFwqChHzufftDqdTghaYwv6mNm6mqex49WS4Kwmt13ov1hVWYx6FER4LPuTMWjeJ82NnHxdhb6B2",
  "key16": "4CJSUKw17PqCrSR1SyuW3QGXk9eMPfLJJqsVoLdZUdUHoZEZddLr74pdRo7dVvLYn1jp9HCcxtmP6hTLtitrTTfY",
  "key17": "4Feu4AAsvnAxpqWJjEmAzgGcsUdYUGKiqWnB1nF4wZJWYWCX6DPUqU9qHdgTmadgWRo4xhDEb6HtsUouhoBG9jsi",
  "key18": "5HUxAmRWhaqFUWM4uSaWjutzxSaF66XgyT2DFnNuhZH8TRSPonyzbs2yu3wPq2zRSJDcjojycUKUH6XDKetjxHct",
  "key19": "4UJi2mHmJoGFC7MHL1iqJGGCDqNKGbdZNLrf59ZKti49QGsaz4Z8gDyFA3jeKXFHJNSup9vaqZHYoBEbvivyt3pq",
  "key20": "4fVcuZzrzkipoMiFisgUkaUcWdY3HrZFPLpkYGSbVZwGz1eZcy3eLF22FCKpkyAqRpF9ZgsL2favq5fneG3o4MPA",
  "key21": "5zY9qWVqt2JgBy3DzBMnk8Nk78FTBMyHAi2EBUBcNqGDsDBBUWJZoX83PtTK51FNhzvcNevTf9Vn5d6rhJDLUETk",
  "key22": "eiKS9DTUVDSdLK2d1dWEFVNWXXuqHokYV6Gc9kW6Ft9B3ZCEkRMMgqkMwwPwMoo6YKiZjWdz6GKCtP497udiWAm",
  "key23": "3HaRNH9w1akdCw8wT5xSVzVjmgwav7sFKvELv46H9LV6fLnX5EnQQe9KnHfx8S6JuRxR5GpYe4Dx9UhhBDboAyFQ",
  "key24": "33TxyvL4f1xCbEiXCVhHkSg9B3AUyFfGVvhiL9sUZSZE3fEp3rMATZGDikMqM4GRiU73e1mGgYamqHNEbvGJrPWn",
  "key25": "3pfR6tSKvpJUJRRnsAGJ6RLUhnQW4Xjj4Kzb758Yh23ygAinoqHsoNCNo7ro7saFZXnPhhP6Chg4ExNUEMWkuv8w",
  "key26": "5Ry3Jgp6mJck9tu2xMUApuaGimPZc8upzkbrisfHgjPGPprva1FExAmepkYTAtiixfZuxTkykPs9hRgeYx9E7tu2",
  "key27": "3z1z8jhXG6nfjRbrw4cvNaaDEvop5LRB2gi2bogKdTJfce2sXFnsUMs6NBQrrxUF4mZJX7f4kUw7SovUi7MPvtd5",
  "key28": "5TS9AusmiduvgfCGVKMuRDU4kDMA8BsCe16pTLQKynYLkiB6boe5X7E2146nYcg9MjemspMW33NTz4jEcAarEGEK",
  "key29": "3kRLwG6X17pDR9mySGrDDzv1yVvXXqS6KmJNpd2zmRpk5NyveDsD9mKXgVaYJXJMTxGP2hLzYSLLCC4HxSc2LVBo",
  "key30": "4DtmegYaJVVQ8yscigVVyZawewD7fJFWq7LShqKD8SFvHySPXkef92RewZe8mjHzdJPCDYaX4UZvimqnB6r26RAk",
  "key31": "r1krN2FWGUdXPKd7dNEGKvs8ZMtPzA2FZadqUgEvSvzvPSvf5vE2sLixvXs3yVrK4av8x52kbqEp9qiqjG9csud",
  "key32": "33u4iNaQLJQG27b2WPgendvDBou2D1oaEoWK3f7Q1kqYf24yr6eHJgPKrh3xvsJuatuovuHP7JrbVjB3kdRpVp5u",
  "key33": "35VzCiCLsTfi2ZKvHvSPsjXWUY888eKPppNxmLZjMzZB2ejADZ9o2PcPLbx23zxmPUiZpyho9NRNyhgEEFnN9QwN",
  "key34": "4KmcTq6uhrCryQMX9k1A586XsXcNZtcUn37jwYDUK2kx4dYWkiTrRS5rV4PUiKhTpNVX6qYPrJdcCJNJd9gpPqv1",
  "key35": "5RWfnEwCNLcXZqQ21Mz2EbBM1jTUPWnyca87DPfRUpSRVKZF9ZB9KGspE5udSZdKWzgN938qe2NZCvne7jC4MRSW",
  "key36": "FSmKtueptuPMn8UZjCCgLtjCN2fTcmTKgP34XgiVczfzvfan54JySBc1CJT1rakkRQK5NzRXsduRu9tuqvhT8Tj",
  "key37": "2Wcfb4hYHLf4vfvs1XsXvtDADLKy9Y7HQSrtXXgp5unvHFxo86sJcwj8vhnaXT5WN4awvpy8k7voNfR4mPncTS8W",
  "key38": "42K9mSJDTqb2YDLtc5NgvYSjK28pwtDuB5fW4Wjf3wLiN6Eju1kPMBMtTunaWN2zrmss8wDv72dV2mnYK9bugpx2",
  "key39": "343qwnJsD1oWDfcwQAspd2eATgaPznZdFGDm1LH1hyLRyoZxSJrAY25tc6vPPdDZeStKm4JwpLE3mR5RY8dRw3sS",
  "key40": "Pe5TB2n5y4k3G1Brog2mr6bCkgTWEHqi7T4P6XZDmxzbcsPNaynqkEaYD1PRR8bURjxLzsCcFVmBz5V4VdUphom",
  "key41": "2RHqWs59qdYNyKSh3nDHEpueMgnCfJdWC93BrvHY6NpeN7rBxH4n7nWq7ooqutDn9ypQX6Yj76SmFeAzjTvuUfMk",
  "key42": "5GVHQ5QSPQqV51ehGMSGSfD8mL5Ekge3mYBmNWNPwzrSrNLEJeLpSajTvj5bMBbmMmaCE3RXLH4iuGYV4w9Su5xc",
  "key43": "QRtqFmuLRMosxeecxJ1L79nPL7hgqDynTbsiX7qH39S8cDu5XCKpUwy2xBi6zJvwc2WiPWw2f24CAiCNSrwMzgG",
  "key44": "66AGs5djpUcNrdiYcCCgZ3CSaR5jMAscHkSf5w18kTMmhpFWip19yFKVL1GTYrbnFzyDSt9igUfTDsKcrjwkKzpq",
  "key45": "3vwb9zfdNLycLAnAYNQXHPqWw4megh8VSRdvDiBcuw7dnqGc4npJ9L3a9GSoamjZdapx91T4bk4tS9CzKkPdxBfY",
  "key46": "2QbyYjm2JV2gmjanSQP6LCMKfCY6VNFKaziPJ1ePjMJqtWjBkfLVt8rHN956qkavEVdjrgV6Vn3KnqMxPmHFSuaR",
  "key47": "2QuC1ecGgn9Ghf8D9MSJYFD4kxG5fTeESeG9RWAPLiZBWKRKFE8nBWpsWNJKs8Qn6DxyXhbmmB54p5apytkqh9P8",
  "key48": "4x8eL3VjBJ79otQFi4UTrz1Rt5Z878KzFRSTNmz6EvyP7v3vW4on4Yz5ndkqTMT8K9iMSFWzcqPWuWhbHQAb33S5",
  "key49": "4L1tk5Wp5TNek1Sqpe3X78FamvwrTn1YgRzDkEwgXTU1iU194xpPHzw3Vf6nZUhddTwMbZP9kSdkdDUWT9Aw5sXb"
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
