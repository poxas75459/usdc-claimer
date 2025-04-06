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
    "4Y9tJEDMgQdSyE5hcVRm6SmniLezPEVbe45adLVso8X3pfoW673p2CTbQRJe3gxBULXEhHmDBzDua7XUSFAp3S3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uTBjF8zCQQgPDT33DmHWFchaMaDfpVP5QCvBEhB13PzJA12qHoZbek2s1Fs5N5sgbiHycn4CUbTJfTnSFRVnktN",
  "key1": "5Frt3ViiQmqk5FwB8YYGmAF6pHp3JJ4gAE2z1wnmCTDSYnQSJY9wo5aNSFQEUjxvM4SUahjBHUY7gxRqQYAc5qJM",
  "key2": "2pYSw5Lb8uJjfMdKcG77PJVMXQTWi2zopH4FaLLusEiFGhkrUHj9E38oPEUSMRMpLQVhAmn9Pt7E9XSr2jmqEmdh",
  "key3": "5PbTs8Je5TJUKWq6gmPnSpue97gda56NSE5HqXVFLrYNvRkpaihMPqXk6iYow4mvbiXXcoGnZg3e795zn3Gqcymd",
  "key4": "5W8cwbjmUCdomwDQKoqyJsjN59ATpvzM9E1nPci8AbQ3epXMZXZbGFLR5oMUPpkvYWXRMUmYLgDwLL86NbAPGCBk",
  "key5": "3FQ1T6kAXBu82SpKk755cTcSTGNWH2KSSpzRYjJdDktekEAnpoHLJ3CxfwhTAiMbftt2NJYZZekEATcrRtckDY6e",
  "key6": "5yLjgukCj4nuAy4gFqEKPfQyEMPsgFvtNzKjtz7xVJFv7JxZsyDzMX4WcDBLuFnNRTYWaqSXixA1DqLPrisMkYZ4",
  "key7": "2zteGdGCWiHe11VrVYLJpH5EQs7Set67UVEEFgyWSv2rC9BQS29KH5yTesBgmGkoo7M5U4SAht1TuQJeSpWJMwTv",
  "key8": "3hPC2tXmofr8sooZJpiduqpY7nDVayUag7FmEQ4ed3a3Ki3VtRE1TnRSebDzzTrRxJmeUvtU3mxchEhzvPfrozit",
  "key9": "q4V84vgo3ssKub9roidDQmTTgZnL176MmsEobC8nJFiV1RGM1DVY4Bq9wxWeAtbhgEQxjMp4zrvNdtAswbWBexf",
  "key10": "3j7yuxmQTkbzT9DtvMLvxiVAjiQ4xB3hdrBZf5KtzTjwf76d8T1ceuEjZRTBjTR4KVGkNeaLRQKvvFAQCVqL27jd",
  "key11": "5YiGdMjn81ohLGYpEarrAUt2P5JR2NUC9adLqbFVuGLbiapVFyHKkv8CZbPX3SxWDNM9E8CPWXGw2fzD5rYjJ1S2",
  "key12": "3yBFWkFGBs7ZN4RsbVuYaryTetKbwUsUdchzhfMmc4LXEqGbeRg6xpETpmCkzVtASH5BdmbZpcH8fkEw6m16yWAX",
  "key13": "4zGSsS2zsJ7ib1kdv6qHTp1QCCW9T3RjEGwEiTHwg7VXhJhAUqzvJixzHMbhVKjseD7baAHAcKe7j1cbffXwVcKg",
  "key14": "4jeepAxdrToQfMxjDYBbTwBWq467NNxi7D4ME8zDYsJfrHx8DBLeYcRm8yoBBBmm5b8DdPDh84pxeA8YkQPoDBZc",
  "key15": "2W7ivPYE42iVm9yBPdaSj1gBK4zAcWPkTr91kSm5G1n6v3tVdGtvQAHxsttdjUpL3RDs6uMFPWBzNmsEeGVgEvhy",
  "key16": "3rgAxeWdvJPk6p7cj7hUWr9W2BzJNDyM7BMdXrDeN6mD6cTdwUkQFgvt75GjMirgkZvQKyq1guac4nqo1aukmbv3",
  "key17": "2d3gYvbR6MUopEyUmUUxYTehbSgMPfYEoruFAATzTEZ2UdFq6fZm9jjjDcjvH89md8TGCQkDfqE92nW9AHcGfJfC",
  "key18": "4PwACFETatEMTBY9QKob56koSpkzLfM4zs8DNzKkgBWmQkmWMh3GEefgt73FT8M5JjJRhmbvbAWQvBeELf26H6Cg",
  "key19": "27geBrqGgy2HFi3GckhVpUcxTAu8vdfD8XT8M7cfahDhoBYvG2ZWV1vCjEyadWCEYJ366dydFcY1MnfDyqTmntdF",
  "key20": "ivtdQrdQVp7wg5rz8jHdriBhY3vAR5SLDQU1eakVrcyCFQUEDMvWuaiGSdiRaqfBn6E3kn7RYXwXuURtYxkezgw",
  "key21": "YLe4s2tJ9y4DLYabkLdwmYSuDveZpotAgiG2s9KyATxa9EjWu774VzAYGrwHfgWu3RmNvuMGsKj3cwDGPUGPETi",
  "key22": "4UVX6XgRZp42kvSqXDEFkhX7n3aE4FdHGXhPqAi39M3WPfUaHqkNovz27NsQ6KgWKfrfxLAKz7mKgdoFPSRMCa8K",
  "key23": "2tdsxH4iF8bxtPs9YEHC38HcBrMpZpoVLTBBD54ru6KvpNgo9hRBS2C3qeWCTEDTo5XXddBoacr7HnMtTyh2orPv",
  "key24": "63ZdVd83rYB87rD959NXHTHcT3tWRyJg8dzj64UPcEa3D9C6g6cqYU8nG7ZSaARRsYwLFbfTdL4jVk2EqiZYx4VX",
  "key25": "56LUGN24CQk6ZVPNo1coG3HW2ztk3A5iLgvTTybAtMLYsoJE4d7YFTyB2AbHyPRKngk6e9UyEGMaLk3JaJuqm45F",
  "key26": "2KozCAkY2Kc5tjqqWH1fhbSbzcwJs9WHT7TujCH353rX16xYtK6FyFkQw6D2rj8YCuXYTSpuNfjCupNiKytDqjio",
  "key27": "2phkFjYzZfV6g2nZ6YkuJ3hErjznXtCUX9gnZEgCk9GFNxxQFEa7xT2P6WLYCzee4otaQHokt5EjjYvGGbWbRbwE",
  "key28": "5V2xf9Psvv6avb49ZBZZwdmz5tLAfXdqBEcdg2SwTWp9mFfeMLA2SkyC4uhfUgNWQpKeUJJ1eEyTJPnTZohMRgBf",
  "key29": "36sFrT4uS6JDpsbupS1VMrqFsC8vLJ3RM6kne9dw949YHZ97EGpd7P8fTNBftxYAnhEgYs1m5gCVzcQno3fs5kNh",
  "key30": "YTjBzMN3RG9G8Mhy1NSffpXAVRXKJfSv7Pb3CP8ecE2cV8PXqGvbXLmhziMVmtZJUc8AjWPUzmSZzgVaE8xTVB1",
  "key31": "Gna4xrZmKqQ4DkBbWArZf6vA483KSDftBrChdsGSE5DBeRYHs51aQit73t5UaR5yitDFjotVSQRoptZw6bhc973",
  "key32": "47kH88tJAHmdG2SbzWjqhxmzwhm7VFvtceLBh5pnzq1a1cxbRwAzuGGabqe9Rk31hzvx5hbtX8RBLrSgoKEYHRjc",
  "key33": "62xDsAS5qRTJurDKV3SfyqibnoP1ALCq6n2t2ohAf2DXT6ete7zKc4jJVWcn54AYVBLmCikTRvsd2JioseT8ofbe",
  "key34": "2m87wbJDEpescSkyJWnwVCoTvcJUE1VnCbWfdA1M1ZRYRQQLchP6y6qRGhYdLnMYM4ir1hfPnYvxaiWWoRdNREqc",
  "key35": "5Er4nT2pMWBnLL5YsWQ3XaT1R5M1EGsJRwyv1xUh7ZTnfQRqhScW82AJPPGL2BypzTfN8WVEtmuHqMHTAEaE83k4",
  "key36": "2HXnTCj9HLQs5UKcYs67z9o6WEhGNXcs3PZ7sSWmg2S9driBah8UjuRDaXXsou1vgoMimgk9KVzjFcVdx3VEf7G5",
  "key37": "3FM8V78L2v87ymXVNxZMPXJEcxenpHPjuhb2x6ZRqzb2z42srvo3DyjQ8MtqJ2pE516N8sRAT1EXfwBsbCSQnHyB",
  "key38": "457yX1xUHBB9mSZFPRGsJCDPdf2tyHLr3niUbQZLL7yT6YpZrEgLoPGQ7sWjNwKWekFcDBr31yv4auXGbA8xcrTW",
  "key39": "4KHoutZR4phRkHLZRsjAk8stNcSrbjbo2K8F3RooSsrZjBxTbAw6RFzb6DpCLTFDLV7iVmUqPfyo3CHy8AJoW25B",
  "key40": "5in5hcqZPAE3rALuxdB83BQV3KEXodNz4JoMpS8GkRE5CyqKR7BRwaT4Tr75PayLNyqmEWvQvfJ9Dj72keX79AQ6",
  "key41": "2EEWdBhhjZDtKPdKLjLdtMdVRV9SY1kKHXRqACoBn8k5dRm3X9riibhsZ1TveHaxXZvL9dooRseVHkyKh4vrUwYn",
  "key42": "5JmfNm22Wvoy6dhrSrBku81iLKpvCgpGuzbFvoMSJudVr4qsgNHKi7JFEpzzX3jkEe6WtRXMKHgRuZ3Gkd5tkxSh",
  "key43": "33cqNWae95j5fKrqKTknA3rY39891BC3Kh2nyo945nx3gWRQwCrZWzNkFNfDDZDhYgtm3yKp6B7TkWfz9wijFCVt",
  "key44": "P3v9uLMWCvbv6u9a4jfUk577VrLVD7MZdx3m3whSyqtb2nvCwrMu4y1pV5jHDEJ5tqKJWw8q6FN37XWAb9D7oAu",
  "key45": "4vQucYYyezKvaSSXZK8QeLea3MECUZgStcFD1kfhox2XfyQaoL1KYU5QDDJvFJSg7PgiaQJHHEjZVRpDxndBEK7S",
  "key46": "62imcAZw4mWNtSyctMM4kvTdZDKmgkXi9PVrDGfgAkMqcWYei4i7RLY4FtiXbso74NFd95Fuja9wQYE8z4zK1zH"
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
