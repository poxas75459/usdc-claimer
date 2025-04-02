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
    "rpBVUwvwojnBJcbHnsq2JQKeafVM9nJhks3eHZbDGGpAmzNZBtMwomeHrQQkCjnSioDaGZhcNSNFybHY7pk7VJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JZrUHe1PFeyjmQBH5kTuFz7ppsDDEbDyAErvokADSuPo5h7JMwYsMssxZ4E1ckSW5VxHJvvivd74LiGGzJYNof1",
  "key1": "3VpzaxYb7usp6gbwU1hnJgLLQYU5QytAiiUdcqVuzz3eA3gECRb8ZrsX9CUTaMZbGTCuwYJSQXPGhgV7Jo6WRhR3",
  "key2": "5M2cygDPD4apb3PdHJuC365CEaGgdAnZqdKt1bXHJywY5fDEae1BGsa3MkkKf3wXA5cBBQ55sR9Qcy4Zu82Kh6wH",
  "key3": "4oL1yHoiC1Fssq6eqk9Dqrs5ihLyvAHRBayq6mexGEz9aFybc5HEdM7aqRf2wnRZuMAJMUzdemrBm2ZhyCTWb2tH",
  "key4": "5Wt6o7GxJHkBjdqBKoyydo4wfxs6ReSJWvTzmXdP6kULe2HLkMN6wP9GvDd5gGdTAmZCC9rZhaNrBki7GzZ4yjnv",
  "key5": "2M2coz1fku8E2qGDCoXcEpJyzskSgNYR41nwBwXe1nZwMmyd57EWS7WaHrzHSTKpDcdUkmfAqjcy3EG8yR35TnM",
  "key6": "eGi1uWheQExtDSeyy6XEddvr665Yk25qbsb7LNJJrDrzZKxUh7WorsBjEbXtd5ytvfBY5sxKA6eFsg4CoWYGijo",
  "key7": "cZ9kqmZAvHgRtnegLcdRM9mvpZJBSJa7V2cw8MnAW31E7xziDbovgNoWsAYeifLNaifdcJ7axRP2rV5LDWzhRMf",
  "key8": "49wcfaHc8jZ624eF9thLjFd8qV2JiXdVaXEn5ahho6wKW6QsbGz24QC9fYrTVR96NZG2AscHHbm1hku2R9iZiN3j",
  "key9": "2M9i1Fo29GYefgkdugd6qZbgbNbX5ZYQnGiVKxoCpoxqgXie5tzRS5H9oCDoHtT5y726fa8MpprmU8Anv4F9Qoy4",
  "key10": "EPNMcA7kyatHGZR2DgLwZxccnTcSzb7Hk9vmDFfXF9sKtdP8ZPKPZU5uPsrPK6bbVF3KsxtgfL8Zyo6ah4FnvNJ",
  "key11": "58DvJ9ysiqBdn6Fc73PmWywbffc2Rc3ZoRsGxvZqU7Aa4bF3Vjpk8XqMKWLagEDL7rrgu5t9qxSoWX68cedqxcEf",
  "key12": "2n9VDr2yDwaV7VEfFzu7LwkETX9wnGg95LPJmyFPgxSP965L4SuCtx24HLFQJVJbiD5my3qxc362XGyZjzuLbkvz",
  "key13": "2CXpQBLws55NVYdMgEKSw7DHo8ULqu3yE5TM5CFKaNWDJioTcyKQNkskB5KygG8TGc4chtYpSPCeZRcpVr6qjRAc",
  "key14": "3HNtD1jykcf6SkYmPr4SzHiuDPUMtqzQe5bzosNLWy9s7KsjU6HVoVFr7i31Av838HszJ3JLUxzYYFqUkKSMLLLw",
  "key15": "3hHuQMBuSjayvHz5x9rDbaiNHbqzoTCYFUBJ3vwBJoUrHn1aswwJZm7kEyQktzpegw2XTm4imphvam16R8VLDzcq",
  "key16": "64vhANn9fE5R62ArdFUSkvcXvT7wSELDpRoN6tsChVM3S8LuZgVTiDErRntUkUGpn8VoxtZVGPeDAcd7GH7TbF8J",
  "key17": "3LWy4zXUbzGFRN1hgPduE9T5dA5S8RWrqiQuQn8PNCB7rPqsBuBdZuN4XRgVYvDgd6ya2KsqMzp81axjE4b92wD2",
  "key18": "4NM5F8cyYGKPY6SjmtGZB92sUZ4CQZsJpSotSZKdmeVcUVztwB5UyDXMLRvFS8QDZyU7QGDmygVepaYm9Bju7Tyg",
  "key19": "5bFnmiFh6SpPbJeypqvtQ66VAimjjRdeDvpSb9Furwy7yNnD3aWbQZnvUAaWFh2vesRmbXxzJ7CRaLuMmoGjjGje",
  "key20": "vTmf4e9rxhNbCKMMk3nyTiitwiD59j5hGw69eFPRZ3WRS2dyMVhsebEMjYQs7PNphSNn4XqeosUwugSojyXFsaN",
  "key21": "4aHc2ELGywha9nziGkCSjUMkACjfD4Tof39rku3nWdSFY75w7LbTQerMyznBXkNhXrz72skygUZ9yHWwyQ3MZrKQ",
  "key22": "5ZNCxzP5yJ5gmyvCewYhonvWrZGe34HABZfj9Su61Sd7FW1SqkcYznA4fTBK651jjyVbDfibc5hrdUXSEcoSaKfF",
  "key23": "uwuVDDmepzPvR7gCj1XaKQUYMfkGrFL6xjzmkzuwQzLKdfQTKzAa6s21rWCDLtiS3BDvqvKoELtMcmKSHW6bdcc",
  "key24": "N97o2Jz4Cf9T7cehnSdqHHKcxgShnpnki3rxtoS4GXSjA8nH8rm3eqtoVarioaxMSGJMiTvPXFxDiqHS38fXawP",
  "key25": "2YyYrjEht2vbfWizbYRVj9qAVv41p2KDCiUd4TCiHMNHXiA4CTZDQTUXXcvEqxLHbBwsXxU3ozF5VAYmzPSRs1GF",
  "key26": "zobRTwsTvrxrh3YcuMVGF86Xe79kuDUsEuxApPgq6Fm49ihhbTp7WZqFUBuij5qnn2pfVXZ6DeZHhmXMhnHBz8i",
  "key27": "2FE1FFWbMxJU7jnqwj64nQaEAmVa1JLToRrEStVzXbuob9nGsfaoLgE6eVf8beLFAMBzv1CMM6EGHHm7oYkZpCQk",
  "key28": "3iZTFznMWX8ZHRHb479nhDy9UWecYxEmoQHAakpbkGb3YQjWHiRvGRiitwG1kBvZvZHWpzQJVVbMBtMusSUQTxf1",
  "key29": "4pMpzxnr9Yw2mL88AbTVNgTb1HowxZrgg1hsSviu6Uwf2rP85EaERWEXCum1kkxcrWwSkmsqwWE1C83dRWDXEtdp",
  "key30": "2PyWKUBdHmueCj8qqLpsC7Qoia16RXWWXrfkhGhgXhqS31bzULY2eP3RxDvvy2ymbcHgbsHUf23tEpRsboadZoVf"
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
