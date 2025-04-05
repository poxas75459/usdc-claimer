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
    "4hExk3yq3RP71PJYPFQRsSdPFAsaTMFbiVzGRR3j31YTmMEwSmvtjPTFyYmFZLHqBUJ19SYSyQHJXTtWfLaw5zCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Pwy5imqAxPkoUssPDWPx1m2oC8dcHpgjXBeYNwpDphM17k1QXGoDiywwqDJgmVbE9hsCKzUSvLq6SFg6V5uChN",
  "key1": "2mGmzBP3eaZ73B5R4beMU1BhydocX2S9oYboBvPERd4AmERvDf7uYBArTwNQdwyDtqjWaRVuQwL6qotXJqpVPFgz",
  "key2": "FtevtFJ7PA1ZfA3MyTKgG3oVJFFGrrHDxdL9ACy5x4kBi3ubEefUahoTtttSRJGdMcq1qFFuWLipmmbj28PdhLQ",
  "key3": "27frycr7Hnp7N9dXJJUoqAaqfGsb5q573gYc7HfB3JiVzWBTfHLiVW7djANNuLkFoN2rEfq5j5GcKNwWCt15a3NU",
  "key4": "3FwsXEyoeQjv661GbGadV2ZEKMfR866UaUm83rwFuV2tcQmDSNWkxA34FGbHd7J2v9goooFdYSnqLSMdpBPnLqez",
  "key5": "5Zq1adCAuXYwweenviVSYj4WZqhnQ49xxu4jkHj5fip69cWZAPrRErwpzVZ4UPrtjbarnNdJYpFWJ4EzHzT7WUNH",
  "key6": "59e44jzLxSg6rJXWBGukPAkQw5fLGTHmfvhjZMySetgeuSoQuQDfPycrBkyUgmJyGwupe6RK5oawCC7SPKQVRN2n",
  "key7": "29Gur7khatK2wpjbWEzai8guvgrXAqVEidwmyoXtxziHJMWmXXvmfYyoE4bD6GJGyZNiV4ddsYt5uXhqtx6aqB51",
  "key8": "2FG3KD9sQAvHjNe1ASKdV5nnKkqmoARn46ANKJhtEwrTDF1fJRGmgSiAjR2DbSd5ZjSwppEtoqV4axKqtEPQsH9q",
  "key9": "41sE8Mk7JfcRXwtz19Fd7SPBSEGn8Qn2cAgvV8PWYvdx87zZ42VnL2E2x1ZMCSoCfxtwAm1y8LY1HphKHTDKKNoY",
  "key10": "az3soQ5HfmnhFMVbq2UYhgrQb6JbUrPigEZ5AZktqpuAeHSY1u5p5CEXXo7ychbC3hSPsviCWCmPM3s5B8HHDzD",
  "key11": "5nSWmP7iyaBpGyC1D1BQpaS2gouKNskatBMwwFa9n7CwTuyQT7141LCRjbmCQMjSq48HNy8EKfq4cmHHiKnVuZX2",
  "key12": "3buRDKFVmnWSYtm3aFjanGYE2CwP7ETe8eq5Fvn23mV9JUGCiNzomASCAgkjUS1spY8qWunWXtW8nByjkCtcRjab",
  "key13": "5yWMHDkpeqtw6NAzVDrwjXJayZQb8GeXBoCqDvNa4jzr4LyUqmNqdLuwv7J392BahFxJrnBEqvpo7AMYdfdQph9T",
  "key14": "3qPxW6SWd9xWzbf3NKbU2zqfiNAt6FmFqeDbxYzNPuwqmGg7PQZuJga29bKnTCQmefoJek7XZMYhVQQg1UoNthdU",
  "key15": "2o3eEYvT58kSuTxiGsUrr39QZmHAoJdcd7PWzdVJ24PoYLHBtzWrTyJPjhTv7U5pV4TK2VGMdh9p5ZC2RYZD69Pe",
  "key16": "4r7bpWSTrsBDufucCY1i7sS2e7DcvBeC3puNiR2tYqJo7cxsjNCLxheekdEFxBYqi9NgecWxWT16H3kNG3B1KTtd",
  "key17": "4xwcGEy59fT4zxLZenSQMw5YTjSRpgU34a5GA6R8xMzXyW4D1ThNde2FJ2NPTq4EQxZ17DVt9GyAQ723ZJ3DFg91",
  "key18": "MFaUrwFrU9BESmxxnXkCPy8U1sc1WhadjMv6R5P5Ssf4TRgiCXtWEcEKgVqzGBukeGXk7XMSUS3so5g63BuhP5x",
  "key19": "4KRiHJR2WhB3GdTmv2PNHPBRhFBmPG5m8wbRaxqUpzuA4BY2GCsgDCWbZe4MwiRGQSPAnYjz5j2ebwUzvTUhfKQi",
  "key20": "29ni7WzMnPqm31sXDeVVsCeyqiDnuRQFZyc7MdcbjqB4L3XUS8zgtmyhK7TDrdTTUsKo1sdgdKFwawUjJArdSDi5",
  "key21": "3aEvCqxuFCS2GB6FdZsVwTvnYgcyjg8EbXBpzZaS2x3V9fUjbEZpS5R7WcAnuajf1jCoygj2JMntZXYjKUmrrK7F",
  "key22": "66kNnrGqPtr7J4Xzff26dhwJqEnNzEJFz86VTd6qqVsEhXDv73dpAJfN6TV2FGoaoazFMBPmTgfsJfmovVtDqrnP",
  "key23": "5WQoUbZibfkuH2HLPdZSigajbj8dEBT9TRwiuqaxLHL8LSTURw37HohHzvjhXmmoEsW3K2JJaWGvCvcshmRXzuHR",
  "key24": "2pejWxEUDvqapDQopvXQkVt6VR3ZBkhJpypBcXXbWTiEkuqy9Czhs4BNwBagJV8UxEisLxT6mF6MT8oKNoUMAWHx",
  "key25": "1yaAgpXmDpMQktu6ENGBoPLQmEikU1ZYcPUzYp3Q1ejPwKyqzfhyRo3tWs3hHnTG52bVLFhs5q7gmPLhieEDArB",
  "key26": "2fHtoZT5fm38dyHDymJRMD5vVqBEvfj1GoCAJjtNp1JPKoocJsD6WTLnjmq6pmkBX86jvay34cS9ay5U41KpKfsK",
  "key27": "2y17pUMyWpJRCa9FHupvhdgNXvc7bnNS8WVnEsYYh9ZBadAD9rSdZQHaiCAeRr6WFwcgUUrLaJeM3t3pxkD445W2",
  "key28": "2hTTiKvVdsSPKA4y9C9ZyrVtYEJ26CmjEfvsYfk1Qxo12f52tT7cprLKzbBm3to1sjLt7nfh7yFUN5hjR9AN9TBd",
  "key29": "2AxwSj7RMP7q6AwW3RRJdLsJHwNQFLNcXsRTVdUmFWqisXi4xHgEAZzRFfD6Ak7k9mJLzrrYwZGYkzD6xn2rJagg",
  "key30": "hYYYHoPJXMkzrmYr2jPhBCfD7w4kGSE3FTAekX7JmdUSPhUHNzo5485rjWJMv4dj4ttinaUbgqM7gEgxxs1UCnb"
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
