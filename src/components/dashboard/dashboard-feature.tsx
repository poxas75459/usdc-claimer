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
    "4cKkxiWERyyx9gbfRPPrvwqrJgfkKmvW8j4WTeKu1vi2f4ptiy7huwip3djRVKAJcvJFNCUhmjAkTD6a9nATQygU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i9H3DycAPzCASYCkfrGFifeiViDDtaAR5hG1nyY1YC7A33nmr9FJUUc2dHfRBWB7vqSRpqzN1TN47up9XuqYvfg",
  "key1": "3QJQhaiA3KgQR5NpkPyEtFmHh3Cq5tPGFoi6U9htyoN9E1aumeoVo7YRAboH1S8DNWSrkNsa4j19wAny2uWDVDY5",
  "key2": "3mUwTukDDw9hoSSMccMp9bMkNhwr9DZNSECuS853agHV2KbFTrxiYf9J12FP1zgALnmrWwE3WMa1ejMW7U2B1mN3",
  "key3": "42BhTnm9dVdJ9EJumG449jmkrdhroK8TtbJKW2hHAGTNnVrE2bxZdpdb7ykPxVT9qME8RGxjGtSESdVB4ziyhLks",
  "key4": "3foUJm9n2XShqiqqxByxbQFavWgSLX1sBprCvExQ1LLt8iSYra9U4sqvPa8RBKgmoPkEokuEs61aytMhBdmrnCzo",
  "key5": "4Hyj5jDfF123kM51sXix3S1PjWAJkWhmRY24QS6w9sRR2cYX9SaNTTzPa1kDJcvJxYpcuCZyMLvSYxcJx6VNakkF",
  "key6": "2Q2gPfToHuBDiN1vigDFVbYnDGKg9LvjTffRZ8oKdt35mbBLAZYeep36ZSGiwPGBoPcR6oFDv9JgbfiWE4Vs9afW",
  "key7": "43v1DQrdvLxc8c3XGfX8oS3La2aq2h1fLpXcxdu9CKkNAiooP9dUhghiCQ43Mmmt9G1opy3m5EDz6SLr3uo9U1gH",
  "key8": "3nVnwrnoLQ1XycteFaJj8XXkmGRFtS4MQNFkc95G9VKMZKToMhExpW7Rc49eUjWCGrv2rEnxhFAG2Ddm4331hqJa",
  "key9": "DMFogymCeo3oK581cqpzBEHG7oa1EzfN92b2Ae1JqcLz3ApMeVna7fE1EuhzGWUVjWKxzd5aXZ2xLU9gQtZqhCt",
  "key10": "2LKV3v6rN8nyCnAJuF1DsfrvAFVSik4DujGUNEiYdCyULLX4yzSmCBMt3xr6SAHm5M5fGVDi7QbLCmL5F3UjkDzN",
  "key11": "5TR2PYB6Lsp8Uwhx5A9ybba2V6tvXQuzLTtXKjb6F9v5cKEYD4oMectnzRTek241i2hFcomtD8x8joAcXzLMw4qS",
  "key12": "SE9pCYv2r4HHzpdCPco192VRpjCXD3hLFu5h6xzKtjgGgzbKqwqQY2ATDZ7vtKYHuXGk7umr8FN2d4w46XM7z9W",
  "key13": "2RcdpzSTrNMPALnKGEZRFSvYjDs25z6oKXcQYbh8Y5v1YbehABufKTQ1ck5UDjkz1q4ytT9ZH9mxwCPm2TqX69FV",
  "key14": "46rZ5bxESZW62SpRceshGjSkUyx8F6KdJ7azGA6dsepST7rS4JG746R8EBkE6oZ52vir32Hp2Ger4vFkps3ow2sr",
  "key15": "3GryjiSLfa3xJR9DDXvwZmMpZbq8xMZN8DKJExRxGrJAKXSPFZfBtrBMQctj8iQQeHmAT5VErbiu2jP7peaxNh4b",
  "key16": "65Sk5ujZ8xEfgvr1AtooNFsSLv6WRg89D472fSdxR83tLUYgRoLurFHjrbMbtLxfQ4bV3oZJRtTMVksUnQNCDfP8",
  "key17": "4HvZpUHBEtY5tysMknDxjNDsnPvY7BVu3wBJZvdeDGJseMX3usYX4UHvWQsSCSDpitMTvf4mBAFjhry5wMwR7FiF",
  "key18": "2nKz5V5NmRHorGCTAthBek3jwFxvBWApX9b84k6saNBQF1rQX2FA4KysM5DQMxpKGu8i9FkuJfWgLnyXoBe137aj",
  "key19": "2gSUTAaV7FBe2d1aL9SNrwv54YmT9fvWiFcN6Zm9664VSSUS1RBtmS1JDVMJrZgq3yQA2go3SPFazSN91JXog2hM",
  "key20": "5zzevji8UXvnBUWmLG8yA2Q7HENXa9SV8GeTHrXeHWa1s6d16bu7UPgWQT2kFahwiAw9LRYC3kUjKwHxvGfpEwMN",
  "key21": "veDMFjSQEbifsrxokrnzHuAfp9wrSzfGyt66FaDyosEq5JquK2dGWKJTxihixhhZyx9mFSEg6XJjufLA1YJqDHt",
  "key22": "47aQmQ6n3LzHix4LqJVtaGatJFWqB9VC9FpS7Q6SS3RLpDbysCDgzmjuYUt5QrMkGKZsUeGy3yKfizegEX2bJ7FE",
  "key23": "3Tn3W2qP4zNtqY34WK6jVjZ4VvHh8QerUdrMT2XEAZroxQpHEFZCwz3NxmdZQTjeUCVB8Qf7UZxSLcnn3xRD6jrX",
  "key24": "2vkRkkW3WPqRwfig7SSL4KtXSzW4Jv7GURt1axHhnAFNpQ1krfdoF2juf5QhSXL5MAHAHpGTvaQHiHmYWey8wVMJ",
  "key25": "ebT2M1VNdma4b4SoZo3qC7pEFjuJEig1fy88hLVprW6Gx3ZqGpkBpKQPeLTJj1w3SMr3cp8i7vKGfjSw2H99wYP",
  "key26": "28BYeC2vNatzcCsLZiqfC2VnGXJAe4HEGmRYgKtbJ6h1maKSw4QhYyuZ5yre82876UxzSWjRiFJAnnFZKNoCBkKB",
  "key27": "3tc32i7bho76AHN46ees8NGomcRMuJczo2xtCYjgYaNuKE8yuJGjG4RRSp85dr3toBHa1zS4Us9mXWWemBVZjzSa",
  "key28": "u23nLwLgD1eF3Xw96pZ1vdetWJQd7UtDuPyxN9BfeZAEf6Ei5T59GGgWub2ctzi5pLcJ1FXKRfmatQWN85UrPne",
  "key29": "65F7dpNtRmdmvNroBTT5D9sdWi3zVPcfuc1xjecJFJB3Zk8V1DgGx3oeHQ5WNjUyb6j97q3uwsZwJ3TFNUJPEBbS",
  "key30": "3urHb39Qbq7snFAsgzKQ8GGyBCeHGgdKdJ6qjwz3c4hwgwy3LKix6E6MnFRS5yMqYY7jdE5kUz11CMVLz73CNNnk",
  "key31": "gA2PTUdBXKBFkHZE5k7MPCDZjapyw5a3uKWmR3DPfA645kTL7o2LTURgqMgzfmxrZREcTYxBQJNKH3s1M735F3z",
  "key32": "LkkNWBTwMeDoVSPgy4HTGhY9yNSkevLWYsEmBfmshC3nRuMoeVptRP8BoLDsQuGChMGqn7418Gm6L81BeVUujem",
  "key33": "348ieY532m9fzKti8muUzqZLQAXpbVMxwptToY8m8oLoT9VqTeoJQCNDgXtmewodzt7KU9Cg98Vze6P3kGJ7JT7E",
  "key34": "3h6nPRrF6PwFeKRtUXPmUyygKVYEMYSu3YA8qiBJ8rfCGHroMH8ZUxM6AW44gt9R2JuaxYAAipQaskX7zvcL3ieC",
  "key35": "5eYL2v6eCxN2eV7rL7QYVAn7FLWvSDgMNmizkFVdpYmnx9MNzz9KATsQgse2nSXrPWyDvoS9Lnvzq2z9xLJtftu2",
  "key36": "3aV6T44UsssFji7UgwinGZiXpoFuG7bDTAvA5iDwKTUKcKzPWTQqcC2cE3rebRpjbQsv655quXrLnd4Nj8j4QyXq",
  "key37": "3Uv6486PU9CA7bc1FnebCSP44FZomy7b1Um7i3W4hgCDde86v57VZjdirC5acxbTBWyZMvsyf7P25au7NmpfPebc",
  "key38": "yTwb5ZHdAPWiSPTSY1MgvS17zx5pq882QXQ9QGLw36zmnYDZDyyUdsK57ZK6GoG2xmqWp18cAoL4vbm3UKmh4kJ",
  "key39": "2aA8nX9Ceg6sqM6jaPKHAxk12L7CDWM9Q1arCrNJyjiNCt67TBePRTbPpNME7Y6XPnNkvx6XSNxXW4mtHUmKKhDh",
  "key40": "61ddqndz1AW1LQ23SygDQrmRcHFzCTssnsZH91rbuoL5fTUfCMdPF4zsvjpMYvsTp6yxcyxgafSECXnQvuyShN4y",
  "key41": "5NPCWeDYgN2FKzxfD7M9XRCRoGR79acXQgxRBqySZMAJStusKm5uYS68hSDGT9S4atTBJDs7nZe7pkiDrsdeAymv"
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
