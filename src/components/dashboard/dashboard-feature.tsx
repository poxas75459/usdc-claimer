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
    "LLojZ4f1Eunmppk3TC9h8MeywKBbspUgr1QAFMfv1YQEmyKYsQjw2KvkuUHAgkVywUfBAFRpfJzQNE6zEPpZqCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GW6i6ZapeLRLqwyi6ZkPxzv3CRFsB2VUJdSPfubLaEaMTxCob2tvRuNxKbscUpxXK8ckhUTeANBH4czxr5PKKdN",
  "key1": "2cFGnGC83wfRiGd2CH92nA4VPAe9p4kWzWHNvtiRPucSTw2nD31UdaTbESaR27ei3ZiynHZEaSdwZBzDwJ4sN2r6",
  "key2": "pFeKxRx6B7dfe5KYUp1DgW9qjJDfMRW4SJcpKGh9ot8VNZs5yuv35s5YWm1d8AsXycQMfB3qma8BoHKSBKDQUMv",
  "key3": "29u28WFzF1BQgx777AubeLc82LvQsa6f4aT3vcRTHyTniiqV4RC8RKhzMyhEzUAnzsSsLKsWP7TiRuyaymz2A3Fh",
  "key4": "4W4AmkGiEZDZGcU8xekxvEQhB9pPr7AwekD7tT4CcjVE9qQwR3CZJ2cv23zPJKJJoUrrGg1KVS2R4nh5Xt5qhJRi",
  "key5": "5Kaxpp7kXugD2R3xLMjcpySMZWuCKzR24XoLEbuJiEZYvzoeARPJJMMTspK9iFgdMcBUpMhHrHMPjSbUxrDSBAcG",
  "key6": "4rfdoUdbhCwmpkCw65GFNt3cJmhoD3ksdd5uLkbFGdHnM531z6VfgnvHpjURUep6oEZ9o3WcckUhTYCXg42rUYgx",
  "key7": "xwXkMELiHFycykQ5z8KMvc9LrUATqHwNJvoDh51XBa5QXjSgqLKnDzFyDMfuPArKnibnQJGHrdBijJQeQ49VCPV",
  "key8": "PiiTaNKUBZt5sAxccABBcD36NarTda1d3bDn5QJQJ8n6ZHWFDay7zt9RdLCZzkfYx2kMf73zUmBLY3KwDpoT8Fd",
  "key9": "5bfG9oeK9XyU4R7WsNw3XN2SmXEMU1RGXuVFhy5TUvCmqHu345djdamoJxar8Hv8EpziV9u4LJcyPSS9WVpLUfw8",
  "key10": "5vasgQzGMtCafkcLSntYEt1pwP53dnoDCvCotGtLp4jRYJbqXu8AfvJDeEFN2vgvUm9vVCndvHba7wfuGZ7BgwFm",
  "key11": "519hKKHpsG846dUub5NfBEdTBBac6CeVa6Z3M947Q8wbo58Ps4aygDRx8kVvxncmJkBkjjHWsmrffCmmXhugrqt",
  "key12": "5xCesZuLMEhDDLbMQNnBjF4DyWTAFGGu4EpRwPYvdx7LDh8tSBUafAcKehNPQK8oEfUV67KjWR771f5Nkk92T8Gf",
  "key13": "28Xd4p44GmawyN58i17WA7Xe3sCP8WfVt4qcudPAAJmbRsb6ULQr753o7P4jbMiVp7ANyVVBaBvKPfBw252d2oEe",
  "key14": "495kv7848ypSGsAhLdbp965o7DNcFnSknSyQ7cTwXFvdAMrm7bVVqKBPHi2rZQn5jQuQVXQJCvaNNJFQPZWr6LHK",
  "key15": "3WgSkRVmBTpBsCEdCesvAY8oELqqgVikJmNmMUcXCbUZFrJmMmx1L99ma7iQvuX1FdsACnYW7MpcrYArwRqgAfzQ",
  "key16": "55iu4bR9smqfjGvw4VKvnKFi7bBsnRntw4LtV3U9H5vkpBNYfCdxNjFhA3HpqsKQxmhzLMEBodMMKqZpaBYLjypC",
  "key17": "ZpW8Tc16fUf7ndz7NhZzuYn6RuKsH8X1z6why87scmdhTuvx2HJ9zrZ7btXthdpjxXwyLT942YQGPRhzeDg15Ph",
  "key18": "4zyMDgp4sFpTkTkc8jrGgstMyy47oHHNYQY8qAqMJq4wTGQ63jqJynzKShdLybeGjp59m9ioV9euPTFRhYtaBfwc",
  "key19": "2wLRqgaMCiPogxevZTnT6BwZKxiJ91njaFNnjrFvEgmx3upih2CGZ8YrqLa632SVrvgLrcw6s85DnXgaER58QGia",
  "key20": "57PgBQhfZpXxcieFPoVdkLtuH4yGUa278QP1mfaJQpNAG94tFXs3LBTcds16yCXe8Pk3exAY7SAQ8zn4LrUfSKTh",
  "key21": "4C6NgGSiMukQs72upbSHpuv25iyZnsBYZQXNJ7o8Pv9wiPhD8fpvVZ7NBFLk6DuRK4GwSgxq8hLhkPgz9rgnirBu",
  "key22": "2qXdNTvak3TqGxqarm2deHxUJLCQBRcUC1kHfnyNVTRRYEkGtJ54DeDTWeVYcfEbrnZ8d5wjY4kJjw5vDHpr7wMm",
  "key23": "28BXWSUWpiMif2bwriFgRx6W3sahPUJd4ktmNG8fprYfxtmwyTHaUAgqfqYCc5B29BeUPbSAmTNpvP6ZNsMVTaJq",
  "key24": "3FTor7DLkkTehqFS7GyECJZwzhXVuKP8t4RQMv7jWkiyTKY6XPaCStZHC5KV3cgLjP5RsgbBpUqTJ3ycEZPPMRzM",
  "key25": "4Btjdwv3vzNmcNqVwsoPbavg9bE8PbN6dRmjunAKxGsTwuXK7jVDUPKnaz8bde3Ls6dXzqPWp7MhXV8ZZDuQSDYi",
  "key26": "2JdF6mNYpdqgreUkhRNCuDmdx22HGvSvcY7zY9EzM4x1V6R9MyN7wm4FGBM9tbvwuNjXWx5LWgeFiJpdrYnSmmU9",
  "key27": "6PojN6AeqYrZrewbR2RZUCxBXRmnWkJxkjYVtzjxaZV2uV3s5ABBe6hSdXFtEjN2CtXqmwQAQGjZM4aJxLfcYzQ"
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
