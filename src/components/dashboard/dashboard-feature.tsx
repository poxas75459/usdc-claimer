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
    "5JXrmcJ6Ai12dcJXV9QhMZd6ajeQZvMPGJFCQMi1q2kQZrQBtiFU64qNvkruWnqksMsFq4361S5rqJm1EsXxYFeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pEBbN55SXYwqHZZJi7AwwALZ5iEEAn3XNrhc7k3A31cmtGmme6g79N1qGYCvbjEwbFGsqxUHhXvGtNMAcZdhhFd",
  "key1": "4PLNZS7b6MMiDhvTGRcQprj2F2va2SzphiTb3jvDG6XfAgFxWAxqUpDtvYX29d9aY31G5yxqaNGEo1ke6mNqrNye",
  "key2": "3ez1tsPYonKhNJsccvicTMSuYE4fxiurVVjcqcajfZAVsPTjJTusnAcuamRMziadqGN4QmKHfWjUuq5oRouH4uTQ",
  "key3": "eQrVaXop8Fo1TXha5u78YXUnuVfqLss55t7Jn9QuDeF19pPU16dEGrNDpxumisCTkCsfeMgEkV1YkXWh9guXvkU",
  "key4": "2ZC9CpEWNuRyJTwZvDZYQrBtdLM231FAVoAvBThKFoHZk57GB1fcjwnTTTvsoHHBFjVyg7iW7H5KZmPjHq1E2YN5",
  "key5": "cLvk1cGQEXbaXLyDEJZHjNEozPjJPHvfahVEM73Xjg6dd7MfBXRNn6SX453sp68A3KDSaDA9Zt7Bq9Q2kAwh4PW",
  "key6": "3HtgP7itWxNoYhiWduYiLNBmSExYWaZV9Q2sTKFisVE8dq4G2mGzjU6bQaiXWGZ85XFwHabWaXcSCwcpWoJCz2Jq",
  "key7": "2wMxtQDwB5F9mRhP5reeD77fpbLbNuikJh6kKpPZuj8UdFu7ScAgLJtxhKp5DKxFje1WGdLgFvaEre1d5HBfmfaa",
  "key8": "3L1yRuLiFhdWn5cDqRSR96EajZFKENzpFpK3FsFV1RZKq86iJrpVkE1h7GLJCX6t94ViA9mZDdCB1x57jMR8SNUg",
  "key9": "4cV4wasgdBPGfxv33EZx9HfMBRyoAfMYmh1WkkWtYMYtAQEtQg1apkVACFJJaxf9JXXAXkzvJctmgv7VT6nztKUr",
  "key10": "3Nbycb8vLuCo6Epnk2auEgAR8R9KXoUzTreFdd4yWBvG4w8P8fhyPd4qA5vDqbZJkhPFhRQJNRNegzMgeesnucKy",
  "key11": "4MrHic8oqTskrkU4ujEVqLrftaAoYpo7nPNEoFL7KBZDtXTUtZc4GVtLmmvyFV3ZoL3wDoDMqA5ihwoXUeRoWwqy",
  "key12": "4t2ovr8V96GyUEo76hNK4Tkyv3eV6XjtcWoJQoWL6PaDv2sRc81ipX9Ygn5UPLKep2aySESNLg66KD5on7WagXjg",
  "key13": "3m74eEbC6DCWexFdGoK9yNtU7B8RaWniH5V7LcvgnrXHsFCbDZtVYt3bhYrKzmvVv7PgDTFp6JDYGnwbqmV2xgYd",
  "key14": "5BNCfD1U9a4pWmshj5cMMQkT17ydv7DFDoGHs3HdwPo6TpeZVvdTMqQavpcapT8zLC9RJ29pv7rfcopHdwq1xh3H",
  "key15": "25vCP7fwB4nw3BEnU2CWkPSamXbM17FhoWcwCLHheb8tEhaXrn5beobECYYVhBYqbAT2nwLhLdyUMz4Maj6wz2ir",
  "key16": "4Q1i416bRHWJoYfYFKmPj82shE8W5crfN5WYJuR6uc8RfG2R5g2mbh3eDVQsUdHc5RGFkBcEmnLbTqUE4daqNzvV",
  "key17": "HZ45JQpxBTCJuBVs6WCA7ae6CJGHnY4RM8JgBkEcrWGzbS1Bu79WxACjNCqCwYTaLJqV7n5vRAybhHX1sJNLVWG",
  "key18": "xXp38qHDmRZus8tFPHDDcTAVqRf6mqGsR4qahh85QCsgbmwCno93s8e2SwBU938MD8Fd2WX6VgpACGtVDnTrmQw",
  "key19": "5TSgBJS1a2ssbZGEHMbkfDzJyZgRVrjaCv5yGSM7AFR8mcaDaQ5AYfTwaWXANEd6oUkfbbDPjEapUpT2qjwk6GeB",
  "key20": "34ieKKtmaRpgJU6K7qiLQLun2v7cq2wF1jHcfmM6npsiuHjaEtsiPJAD78mLj49RZzUniDAckMje5KGszK9LuYD7",
  "key21": "3JmHoz9JKYH15mcdSbmq6A1EkNQCYU8AegEf54KgG7qVDDj87aZeiD9PJwiAP2fNSE9bcLQusyBv16BDtc4dDyi6",
  "key22": "27TmN6WZBSLhu6BP3xWtpRrdKakXhK6bcWwa8Ss1e9PhmKPxAj7WZQEHM1VxQGNsjuL517xG3vUBjL8uuLhajoLu",
  "key23": "4J7KsRwLGBoQGJT3CVeKrMvD97ftaXXAAckuTrwr6ranE9EVeMiPMxJiSBrWWmhsfZ4ECtXHDnU4VSSH6cE5rZhg",
  "key24": "2CvRzz2HWQZ3TymgCBWKbJt82DqRi1cghU4TTq22W16KfVEdgQVSYEGjk38VF9MSu7NKZYfgE8GQbDaM6K4Hfz8p",
  "key25": "dUVnhSJUCx36jytjPxLtVKjuSXohvHegYxWD4SZhyeRtsQJ2bps2K8jcjWvi3uR15B9bULshBuf5ezo2gW2Qg18",
  "key26": "FegKwuuy1P4Ex3maHnqU6MGmSjDs9L8waQ4aZMSHSMAnFLaRnGHLxeYz1yA5d84oGG9JYFxStUa4FUGFgqDt71T",
  "key27": "7HtYh2dPeFLW1PypNkoJpKUrRqxFL2ePTsm1panoAnY5qgfCZPrhk5LDhKF8o9yp7Pjz247nh2yKswPqzjiEZVs",
  "key28": "5xX6PRTBX8NxdQrR8Qbuu3uDG77swMygm6piHJVWQLPVLF6LaxRf7u8h7DZAqPBuptJRF46RDofTMBKRjUVhSYCK",
  "key29": "2FiRfMj7CBf3vbo1qst92m522jBoSGMFZkvgN4LgvARhgB9UkTDV6WfpKLSkbD5t81n6ENHz1SfSM6ngBFDSQK6H",
  "key30": "4jj26tbiqd61A7rKK4XKrirvqzz99xkr8KS2mD9ZrjYx6kkQHtdyn9RvA1fJFRQCoMcSa2iXtPT92TLN4zGZqAZZ",
  "key31": "5tVR8vWdHgMRoU5BCBpURWkg5dX7WCvEhTegCrzUUWhyJJ9Sf8nkCYNfmKymqd5CsgN8ZaydJ2kwprGXDoiqRhBG",
  "key32": "3svnL9Pnf2mY6JJT9L2kMVLJ62LFZVFi9U9wQr8U2eVmuTPyjX6c6XKM1cqLmSq8eG1ZJ6f3zYBmLWgPAYaxYF9U",
  "key33": "CKJtizuU8FYeAZHaSUhnzvhemn3ihTHkVo31PyLmLGgvBUTdjL7b2NCnQNdkvLfPfJKCn2psHMv3eTojSNFP7u5",
  "key34": "4WU9gk8bAsGE75ay4x2PPJsHJHomNxLHikFgj4phj4jUmffMDoLwdVKjJvyMWvXuQDaxLPCsVu6X14fdmekvZyAu",
  "key35": "x8NcrgVc2tvWpGUm7wzf1uyXuzd4EuMepUk5sCa1QXgZjWYqvZgMEp3ABPX6LomxLSFgu5wPJxFcANZRwJWx13A",
  "key36": "5gxC2U3maNFkS2tnP5nmq59qSeCT2Bj5Lg95ghbWNS7JUiWgWUPEnKESUBPo1zZdVurLsvMqu1oKnKTPadwmyGyk",
  "key37": "3ftvbLvF5h5vwMQ3pD1Z4cGdc4U3bQKtZSsqsYa9fVfGKUcVbZEtaqb18vscoXgmLLt5SFYHZ2K8PCxzSsZC6vXb",
  "key38": "28FBpPYqvmsXoC4aK2GzWsL4r9uywnhyy5qESjw5E9pVwtAJKmnguWBAWSyw9bCxCtHMWSHmvw47tfS8K5QBqQcb",
  "key39": "CGDc63JQ9rbZmU6UtSq8jHGAYoS3Dfv4PUfYCJs4mJkxpihaThsED6Ba2SYdxANjkxT7oz2G4ksZmd7pjHJWh2U",
  "key40": "56TZuka5fKdjVWHdMroqFLL4dV3Ca4oY2Egmd26jx1xwX7roh4gXwu26fc7xwqMLEkfnFFvdyARkPVNn9DFB1299",
  "key41": "3EEPpwDbo2MAGUo5oaLMoZNqZWFHhYjBbM5yGuxPtdhjVhjW5BKYyjpEKkJwyn2fmKrtz29UQZ8hiuVT2dqwD1xw",
  "key42": "3hEEjPneLkY4CpLDRpSjgM6yzQHRxUnTBdG5wUFnUQGoB1iTqt2H5QJ1K1ddhD9bRTU2p3VYhkFd35jHDBVW7oik",
  "key43": "53JjtoZoH51f3Ka8EaMW2ndkRoMoazqFtQgjS3taLXwxUpW6CEksLpPyQJHeT6bfaALuRRY8VyyfTWoyw6R4Da17",
  "key44": "n6aUxtX67uhNbCxJ3utxTxk4DY6BjoLAYu33SfXGB85Si3YFohMUv4ra6uxWYk5h5TjrgU9vnCaY6A9yAHSSjT7",
  "key45": "4e49kAZRUsTkb7N7Gpt1B3GCtGg83uViXFcPXaQsT1FWPQ84Jnm3TzRieQkeAx64tGad8NZRxdiJ1tW8HZXNpsf7"
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
