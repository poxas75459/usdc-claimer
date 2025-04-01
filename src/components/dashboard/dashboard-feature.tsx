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
    "4X4NYxd7cDydzGNWDySXnZU1SPTTjYnBWCqV6x9SDMd5cw7zKit7RW9b5FkQHQrwpg15pNZLMkM449zimKzxo8n9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kf4CVB8vQiwpnNgTALFp1F4XPYF7NG3QNhDWwN9iq7ZDtpN2r5KGs6QXgwuHoN6tb3Q9VVFYUJbWjDSqmSUw7hL",
  "key1": "2oZVVnrPierMwTpag57h6ExVwnPuMQs9s9wf63D5bbVGzFF6jDnyEfqd13VYQuQUidts3LB29zff2AKcNEdrgcub",
  "key2": "5xugnSrLAvEqLPnYShBY1Vp1kRSUEjQuHMAVnhhBARaDn18Mp5WVCPV53cqZGSBd2svBjwZrMq7idWXCfnTJrMAN",
  "key3": "2oEyY8fP5ZJKcMLk3BqkfNbR9bfFbSke4tNYNQBwfkQ6DbMBXK8YyThkxFRpY3SxRBRyNzTSANKt2EU2qhZFJjGS",
  "key4": "5W2wHQ4xWE2pH6VPPB3nk3tGRRwA7ydXVDfaqw6mt5XTM3KEuSRiA3gdjxsarg9JeWmEWqgARmLYw8zrvB32rt6j",
  "key5": "5YXaEorTpot13ab9URWpX6tCuMHkFtNjDQBM5x7P74zycMCYDMeMHtVX8yvgRvJp7KgV4xdS7ewwd6WZWgcpeSmd",
  "key6": "4ftV6mr5ddh3yUooNNv34vRvbXnZ81825L24GNaXmQ4CT2jTgJ8UAtVePfvifgjJ6dC64VRc1VDQCYuvFo3zamtQ",
  "key7": "4a4jDMAhy72M42ULTn3aDXQPT8M1BEHma9Yn5Yb88MZwq15FKA6E2tC6D7YuKuyjAobgyyAHoZXUCwrH8pj9S6Mt",
  "key8": "2rbFoax98LD8YmpHtYgPPpM3W2Hx6ssGfXrBzCZomrdUDf1ABNoBL9Akt7foNjPob8wrEgQnhWU9LQFGXUyjX7bS",
  "key9": "2CSFDbLHR89rW2GKMMtB4i1xEByP2qVKL7tMoeTZ6gL3DLEQMn2S2MrdakoB9xDFrVhxzxhTgLUtF5qo2NiHCac7",
  "key10": "2QahzMq4mCswj5BHa9vKaVU2g4baKxj6PkuY8jot2WJ81FxvUJAMKwLeYCnbfxqBae9Los3fBJWLYTEJ7Q3MGe2r",
  "key11": "2zh4SjH8WQX44PzaZPTmepfiYWHhL94ey4FmoCPDgBmrFsWqk6JibqaR4yVoBCYi7VqBEnWSHQ3EfFgCK3vvcUp4",
  "key12": "4Z3iLh9pQ2FcVA2RaHi4Nmea5bMdKFdLBREVxvhEzJf5MrqL8gctZQNyCET13X2q2U9uziRqjCo2aLykW8idAbWa",
  "key13": "NYGy9dbVMLkb7XHvYRj1vCXtAYb6vfvTiuU6C71FKc7edVvLmnPCEX6ivGwqxdfcWnHd3y1AS9iwXRvvmv8Cd3x",
  "key14": "rk9a2FJBgUkEHQ6LfScCv1EoZqdUyZDvdRTDEFQucgiEyo2NwiTtDYB33CMJEDFd5LzQhVwgtHcQgxKAKxT4mcE",
  "key15": "4TosJr6wK7bpeS8gfBhXN181jSW8BhY4pwpYT9gi1kVuwMKtjWKtjSBQQEJKGaCh9vhuMKLXtmGjrBRKzwvZfUCC",
  "key16": "28RiW69FFRB3crgtmu8jH81xKMA6U5bpJfhj8mwHoL2DYzPhb14zMBFsYEV5pSzUsT6RUBvfasZbhBJ1QZF4fMxa",
  "key17": "4RkgAZovZsSZQ1d2tpQLCBnrB3aLbbmygcV7dwVpLzcxXseykZF1e29JjYxyqZLDiNmwDH7x9uhmR5SjPMMdwVdN",
  "key18": "32L22EgnqckGtUJFJKJ58EH16hJcrbsXa7ecBNxhp7Rjp68YvWWY8vojzjEJANk65LCqQp1KAXKqTzDN2mNKS52J",
  "key19": "3sSV6iTUVXB5AhsmGCgLsQvmFGEJ2VufqpW6LMnZU3GZffqinbxsSE2NXxPwjVXnztg14ariNR41AVmKHnrGBns",
  "key20": "21CGA6kj22AU8HxbCGfQ4jTpTwxPrAbwAZKA6wgvcVygcR7nDeo8tbVqN42QoJ4guCyoePjH4tmEtH8tewKdC1DL",
  "key21": "2zSk8tRf1vzRLTdpU9oCrvFuZgKmNLvQ5m6y1bdJdqmqmU6FrcM4pVRQefacN7cwqF7m3m5maEoT1aTFCA3Nzm3m",
  "key22": "3Y8pvguBB8VTnsTPDX9NF5Pw2ZjYytMsqjNU6obBZjmNE8n5pVRURjY8uSP672cf422oQrG88PLXqGHErvhR5cUk",
  "key23": "4UZ3Xcv4MQRDHHRKwFSMZw1aiRbtH59K9vuCKYBKK1AgWsM2XvnpaLETFzR8FBUt1j2Fqsbio124BTMfTxzBxvRR",
  "key24": "5wJWTvAz5h79r7ajFM74uFZSvsA6ojo9iwH1eNESCG9CWkbQUw4kAWW5ReZLvVY4tpaPQhmQ4p9FncqQp3edwzNV",
  "key25": "5pu4dEoMsaUJSXuUmXjUrudY27LJUTRGn1r8mro12avbQcCG8KCGHPjAFs4xgfAF2AvufJ7itcMJbyhqFJSCA84J",
  "key26": "5wrWX1USb9XiGcMviWbEsHtwjVhR6zXqLxh4vfte1grGSzqrNgyN4qL1MqEdCfx2WyaqkVHKQf3tVq6TRDWKCFS1",
  "key27": "3ZR3DSuki4ZgzoGDfsak4QrCnGEYKADswCGDHBJgjp4EZrP5VVekNmWkjSqSmGKoGT1L1BeBUKpxKDcv93SB1PZZ",
  "key28": "32nM4pLVGLFZQe23hvyxmWGgBrEWxBxyNof1wtM8TuGHSfhQ5KJkbaQCs612nPhUvyk1kHZVCyrAXTMeLuf1kAgp",
  "key29": "5CxwSFQtFXkSFpPu5bYftq7v9RJXX3qwXf32vAmTeuv2QEfArYLvhe55iPAXCVQkPc4vGJbLN4xXTbq6sEyBnsRc",
  "key30": "3YgAkdSF6gDL1AfskFWLPJeVvUwKT2mxP1p4fdSrE8raFVmYPm7RPPFsh6nzGEdkmRtFW5K91RcNVghNjPzKQuy5",
  "key31": "49GMoubcSq2NPgcNcSJGfJqg4A8S9tXh1X7ppZm2hfdr2mBDte2wtyDDKY9Bpq5NqkFUdrsCAwMF7aQSKK56ttpX",
  "key32": "4th9GqXAGcMPE4xvjteeNiTN1BVZFZW5SV3eAdJducczpHNmQJDsR1aRxRtkWeLrTJB4Y9F4F8rKMi1v9kAqn6WV",
  "key33": "45pCeaKvNv8uku6YfL87MQiiVTK4JKL6XKDx5gbjXkd6Koiy1Lz3PM159xsU9VHyfCv6EFxGw7741AKPwbxeqRuD",
  "key34": "5azB6stkZ4pP2qbAJvVFvzA5LuULK6k332LuPjA8R9DT1coF1k3KTU2x6gVtvo48m5TvyTGEfVRsiNfLPQmSXtLw",
  "key35": "498sqafR1La9y5gaCfoW6Zkthh5nnJsFs3hY2BUefnSd3HQXpPv2J9HeDT4sLxH6aHhV8pnUvx5vUp4mCYLo3sSu",
  "key36": "4o2ZAH2x2Vww4BeZdqoUyG3fncoaL8EFr7qEconWgVBvudrjvM7PjSk937oPgS7mVumGuVsbewq3T4eiM7ieqCiC",
  "key37": "3jkoo9berJErxx8feSBA1mjzWwubbiH2tovBWx2cPFrvRroqv81DmMaDn9Fvki2L1CGfHoK8Lcd1ZVrYPj8fSAfY",
  "key38": "33ntPkNs7qafrWcBpwbBbFhvJFsUZVWWxPhXfBu87tC8DSxmu1mYWCkEphg8SKtgqQyZpBQP35Kor7Fa21WKEQZh"
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
