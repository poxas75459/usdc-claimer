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
    "3vxXWRUPKBu6vXdJsJeNymttfUoFqPixLwwKtUqjeoWZU1N2p57PZzhSeFXavRNMtuQvE8S3q6JKLdbzcc9BWNDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rLajo7H6qBYt4WpFXjkM668eVCkBZhhVT2htiwq4zP1mnFZUkcewfvAoZzPk42tLBWUSt1QtVRLuN3f1MUFKJ2y",
  "key1": "4XHHVBgq4CyV3Geusprmhd16p6dNUdd3DktQNato34FZDBLqLuMGBAeuUW9kdAGsmofXSZ1oSzSFPwr3sa7DE9s7",
  "key2": "5GZXw66hcLoyN62rJhnv4vwnkexX3B5VwB37e6dgZ79aXkHoENeqxshv1A8qNQEvRCNgDcJaPEcPaetLbKBrVvp1",
  "key3": "4zsQDpXK24trixRPYSZmQJipaGk6EDuQnhXnmGz3ayh3EJCmcqv59LbmP1TWJjBD3r7LFQC7uHDSRt9qaaAbaaLM",
  "key4": "52KWaonGpoRuoBfhkUVQ7StCE3Pq4SS5f46K3awy4n8gD4q18racuYyJCdsXn8xRa7D3rue91bUxgjVM2KzWhAMS",
  "key5": "5gy3eEqYC9YkpobguCJLy1dvDfkgFBCgggNExhjZBEiT3jKDrufsRS3GjNKNuwe3mapp2YnDesgtK8n1wkNqniXC",
  "key6": "3HL2cpBSMRwz5jJZtTZi911oMk59Bmuw7R3eEXPY7czMhaRY5LFU6TCDyMDU12kBsd25Vk5kSCC5ybtvKkcpgxEy",
  "key7": "3VKqMmzGUb2hxa56ZpRZm594PdjbK2CzS2DSNdjaJbSj8q2JvLyosvDGuve1WPgZy4wABZr7keHitdM3hFz7WX1H",
  "key8": "3qTYJpL9ieWVt4gg8kEnv35c4cUcGsQnSmwfHMDeEAa9p5U97KZtWNvAzBVD9FQrvFHGiw5upx46hq5VdpCbXm9L",
  "key9": "3PQT2L8JHQKvoAYe1ogUKcUmghwith6SbP9qE8Zm8yTWQdMGupt7WfHDDE65GW5L49SWWvHgwF2rL33dA1DKHcBs",
  "key10": "et5s8uPbLp8tzqGFmSK3Wr7ajLASSJRvZ9bvFJ62QmGo6UXsWmkpdTm4jF7at5AWmb5Cnhy7gZWUo8JwYLwwStb",
  "key11": "5eV8JNmqBmGaZGjd7ypL5jTho78uT5s6vvZeFeEaaJUkCMezo3248DvDDGRuRiWMTSapoEpfWHunKHkZJnX4jm6L",
  "key12": "3ShgATWh33TvYrga2Ai1bJ4fMNsh4EdqrVt6AdJjhoR3vaKuPM92BJB6sixv7Q2zuahVtntqRpeHiBWpqUTAPiqZ",
  "key13": "5J8DdVxamj3m3RjenFokJ9xW5F8aRdZnC6u44Qhk1R5JkwmBxYLrtvMsZ7J5M98fxEMCwRBrq9XKg4JxLQcedGrU",
  "key14": "4owsZUMEfmcuLH54s2xMRGh2PBYRsxKTnHMDYcx6twZz1RxKuELDFAoPZfEd9ef8fdcaq8GQSF6T93mVzxFbpbA4",
  "key15": "Wt5CNxk45XwRjYqbPfE9tMG8w7fhMKxeyNUiv9nsaCennw6oxhaB9Patqo71myscvwfe46moTmmYE8vk5SFZNZ7",
  "key16": "31wf4PRGjukkmYvVyx8tAuqLdWR284mTHBrKHwP5ZeJEEwbGjQUfMrzemWQNqv8TvUewYin2y2AfkKSxBmLo824f",
  "key17": "4knrd54JfVm2L7aTpWxkQmzg1WL6jFKjnixku2rJVmrVHh2LuTNjHrudHEaT7gRCd5DRevj7RDhPQHFxBakM1Qqx",
  "key18": "5E4Y6SV38J9ymDL2eHbEJykuPRt7zLiCoyHM9SnhGZS9KbCwDrpFLtpdjDHEqNMLEfyXwvmoTG31997K2mM3qsAA",
  "key19": "4JtDU523CokwkCrw6XPWPicoEg4V7Y2oRtvyaevfSmML71DXfF6AutnzN6xyhVvseQh5wrWqWaRCWuFcRRc6r1xT",
  "key20": "5Pf6BBZUPguqQwvr2aEew5qKmUEjQis2TnWNDgNTjVsdPYS82cH8jSQB814GJ6MtBjVrbysJbb3qa6mvv7DVNnYE",
  "key21": "637hUTCwLu9AyuWbdhSKvWsQ76mdZt4XQBF7QSnLeSJewNa8HojdXkuZ6Zfqwo43gtQ3X42GgzsG7ZNMWcaBsez5",
  "key22": "XzyWMFiD7BRGHvYzQbGxXzShrg8q6APs4YqWrikBrXCTQBUgedSpsobTRXkhjKLX4kRrKwjP3JAmqomked9veqP",
  "key23": "Z5KdVTnZqJGGDpczYVun7Pgk9nMtrxYuzxndh3pmMoiVNs94Cc9bUrQHHvUtdYG6yT44dqaQEvSdRYSuBQQEHj3",
  "key24": "5bme2veNYJfoLWtbB82i3KPjxp4tfy5KxanYa9EkQUNLuthpsBA3n5dqjyBBSdNsLD5XsgT4Sh1QWW2znzbRyePD",
  "key25": "5AnMsCAAPAfpqZEN2wVyWoUF1oAvohWymLiLLTaA4FgdLcdoZdveK9GLAdQ5LM3ZjmwKnQVJfuRWznJKqxai4hHM",
  "key26": "4NfbSCw8L4LnnXz49b2EXuhQ9egxTeCP4q6TfkFrHNA9w7YLeDqpn14JVaH2jC1uo6G32cUK9qWBBzH5UP5JKwVZ",
  "key27": "o5yp2x8UhgAiZH5tnMxUpTvEz1Z6kBKFLteRXodaGnaWRUQzJop3LqeXo79uKy8eu4JgJsATVp4spjG59qoK5dr",
  "key28": "389aCv7uT7E4jSuD3Pv377wuQVJqQxeTqeMJFRSzqobianAbjS4f4L3VQLDXF4MM2trw2iPp3zm8RxHHj1A9Sh5h",
  "key29": "45bj7jemgeMJEfCMHRPJxqzfWZq3BrBFk4hAyvZXqHvDrm2K6FFE3g8dGg7iuWu4qFyGAZ1UjmczxFVukx3ZnYnA",
  "key30": "3zwxxch3ZB7uzTVFQCQgdi1V8Jc6VgTMHdUzUXpB6gwWGuAwbDGXA7CXJQK6NCjJ8m6Vg1orxLgDutiaV5UqEuXQ",
  "key31": "2FhsennqB1SNy1fgGPu2JhDvWo6VZJ3GYjmGUuYqaSsEcZHAHzJVRUJqP2xGHbaPBugyNxeYFEo7M56S93b8zUF"
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
