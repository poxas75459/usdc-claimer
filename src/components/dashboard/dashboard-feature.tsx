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
    "4cWuJsb2GLr3txJcXr6ZGi5Q2y6argm2fgsEERwYrNW737ypR9sLNYFRXqou5qdBK7GnwxWzcesy8wLKpgwU79h9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKz68WYaxirZq55dmu4tzpEmwpL7MXNUmV6tidUP7UPmm4Aqx5DYsCM3ak4mcAnrbrJ9Y9tYB12azY35RD19EhE",
  "key1": "ktMTH3ZziAu8a4rsJVwqBgABKVXPyGqE3xKuGccNJ3D8FduHKTUXQuxcFcfxjt4QzsHrY85nS1Nprko4UqgjDDp",
  "key2": "28drogpdSLG81Wz2tMi1YLvbZwieoC42Dsc5RPZHeS5ETnA4N5ra1uiqUGqdmHVZiER7F1Mc2cWBwjrets5exvV9",
  "key3": "2HwUK92rBsgfid9ybHt1C9YeSRXgp6fRVJ8ky3HYiZW6tEhg7N9wquJovwq2Qvk5VJjLZxZi9MkzyKQLRcF2saa3",
  "key4": "2HFq3ZsoktvsadKgLewyp7yE8uJKJAPPnJR1pQWQfaLLRZSkeVBHTbWac8ZQb8jThR1xBDNqAny6seCJtGyyxEXc",
  "key5": "2dgzZgTRvsEFfTxQn2Jv7U3epp6nBxWQ8mgkFRsBG3SWZF3S87v1wmqW2RMBxNXZn7M5Famd81rm2vLrrQ28Xp39",
  "key6": "58Ja2bqCyqGWNzMtq6PCbm6RiiDTEow2cwDnZCKZH8SG3QcuAyp4nS5C36bTQZtnpZ6YLg6N1GV52J26UY4fwUB1",
  "key7": "3Dht1g4sPg8Za1eA3SDbZBv1VED5R8kU41t9dqfsxaJKE2GoYQCkPBSCDCCJQxXNmaGyzUM82LTn9QAZ4FiHMcQF",
  "key8": "5wwx6opXQdu6J7BSkfcdE2Vg4wyBKNXWEDJsHi3Fb9dzXWRbUxJHYu8kY1PEnnwAm9w8NJDJ4Ps9pGZqSTY511ce",
  "key9": "3jKxztAjj2wc4wpUD7jdkhfzwakt6cvv65KDaK5S112LfHpV9oF3PDieuRGsUCoapNbw4P5yaPs6z4D5oUQgpU5P",
  "key10": "21QMbxiMeTPhLiqPQ6PRnR4rqr5NZvLdD9d4EAKNTtzHi4ouqWQjQLSE1qjvP5xzYq9PEvC8VTfWx6axV4MqzfpA",
  "key11": "2HfdZWev5TERwKN2759QhcZ51y6QsPJyedNHXUtoMsSDWHE4tDMV7PAgDRnBmGJPodJ7YT5fN9B2gSR6s7SF2bgD",
  "key12": "4my2RXSQ7638uw5GKYMJWrnGdy2V84SkMUWnJ5XDUeZFZnbFAo7gs1WkDmE48pYZCJKfZ6hG8S6YXqcrUWi16x4c",
  "key13": "5oSaiBVMQGtYw2vAATPVGLen5xXhmqEam5iAeJur5JdULrTX2wU1HUjkGaWE9Ba3ufGmazH3XJngJNQY8U5H5gud",
  "key14": "LuPWe8P73HfFxaX5aG7mvYAmUmbtpMksmNaQbTmqZTCGTnZH4qnm4iDgisEvAE41HHeJ3XkaJ8sJPAM5hRXxsLx",
  "key15": "45r2WShTxEQy3UjfWcjnSbkhbuE8PaTN2MArtLxYU5SquYefygFfa8WswbSAUoGYQRznmGbz8rQSgZnjfr4oUjLK",
  "key16": "4WYc5kSMMWoZZtPyLACGUX9DETCEjVF7hedxqQ7zYgNVQa53eHgwdfM8N7ErgjRKH2xiJWQ6pu5EaQkfFBekLCdf",
  "key17": "5r5w2HhemPreKWDe78U3ugKbyqaA6MMoonU3QGJUTCe7MCHSbj4nNbpTdDizTYdkVxhysH9PZJvThmTeCTrGBiVn",
  "key18": "3xdWDJGzeFaP5ktfBDHQY6s1D8zHgGxAH7xE8JyFCgmSriyoehGkTNcj5Z6t8TB7qoNtdCUHaWvsUbnn8b4GCCB8",
  "key19": "41v3FYUPDrazvNJvzfxqzjhXh1uLAS6vEf8wFrSCBHzhpaY7vYUXgQ74KRiGUAbEFCZdXfvf2Ew8huMmt8C9GWWd",
  "key20": "4ZRiYF2CXkZwB95RLQJoKZjzXbqTDSALDeqHgJJgRA6nEV9aSYYkKeto2HnvmXLfpJFSvM2nAcagEUoeT9TRgcE4",
  "key21": "9qNMg269YkCoBmXytjWUPWjuuPbxcmw97T7We3WkY1djCFD1RYWpxne8Vt3Dyu3qLZoGHK2behVDmbfG4c69DNd",
  "key22": "27C8bPJ5F4LaqDLwPT488rVKRijVfzZTSby4hML1gj97CGReSThrfDXyeYq28bJj1UHcaXepXGwE7pH5buH8RspD",
  "key23": "2Fz4RxXREfw7g91cymak5Fp1iw8eVmXZxxQErGCG5xWo4eB6SmHopjRzWSFr5oAHCd7TM4yUEhzYX71HAvw9RLra",
  "key24": "3PtVyW9zktAXTy6v5UxuHep69vyzSzs5jurkty3y4LhrWSwE1LMFzr3VCMfWPAJTW9SitZkkZHHLYioMXaBNuaNg",
  "key25": "2w41moAkR7DmsjKXLH8mSRHYMCPSXPPLkNnm4NaKFerSnxQYYN1tutEcv7PBiUFkaumCQwvbKqEWsskepUZmLcZo",
  "key26": "4TJd5tszCYEM2KJCsPZsaRG7GcE5ucJXoVw6VtMjaNDQxmqZaZAMzRVd8UVJGdp4B4igYLZB5pmKP4hTotKZgHiA"
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
