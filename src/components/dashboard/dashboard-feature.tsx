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
    "3P7cuPxncH3oJT3eJpg97VUFMvtLrgFkz7pfgomKum2wB5kxyD78NDB8hF7tiAnorUMGQRgVwoh5iMD6pBTPB2WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qcGsm6y8QwSRphQzqWFrdGBdBzk5VKNzWtbUeC4NfJYUetc58esTRduEGC88Yz4j2REdtDcZhPgaFQzhso4ZzWS",
  "key1": "2RFXiDPpCo7Njq4xE4YLV3UR4U5Vurx4tN4tmF1BAKEESce5jGn7KdpTNsNMbS4Hi32vq6mzgWiSR7LbginYCyt",
  "key2": "3P8KcGNKy6qx9H42nRpFRZDCZaHJnoNqBNavub8uaWu67PX5QHpsvvPFE32CRuP4xjmseZdwSaP9m8Vw3VzseVvv",
  "key3": "876wbqGbNHhuu44zq7NtQ5R6m6ptkSoKVJnzM5dAEHNXnEgA1FniZrmWq7MAADNqim9u2f4YJovcu5WEx6THUsN",
  "key4": "fbLautAXUZ9tkepvz5VeFPCqJJ2TUiA8rGRUZw2zzg8hvaSPtfpV58de4xfVh8rz5UjQxvfjZtPcqSQAP1mVaRf",
  "key5": "t9iV5yPCEbedg5zEmTRyJci5iZkrjAaz2dAjizcqVCnvMxb8KSVd3j3vG3BKxFmD7zVvdiCb4TC8bLUoSmmgcqF",
  "key6": "37EX9DYM2u1biPvLL5bP2es4ENMj74oVoMHZ4qiZmDpG2apBwYvqNB29YvhJNxMF5iHVuYUkeL6v3VaBGyUZ1c37",
  "key7": "5HxBvY9VLbBEVG6qzw85u8ysN7KpVZq29QURkxn2RHDakkAXrjotGFoS25A3i1pBtHT73VFpgnTzrAy4yJvxPCjX",
  "key8": "2FGvLMtDz48Tks6r3Z73Gu1o6XpP9yZuUKk5PzpYiwcd9icwGZiFG7NFuieRtrzomJy6PRHAGRUR925Cc1h9wKmd",
  "key9": "3UuX8PP92cpsXP9eYqZugKQg29gmb3VtD4sbuEvEZM9Weitbmyroo3Vi5fC7aLAs6fVctjcdKyoKr72CJcvHtnZM",
  "key10": "eh3PQeRghTaZP8bHH1mJs1XciQwwsxWwrVX7V66Po9TsTqUBJEwbyc5fFf6Zzazo2HphwAN6ZdJYWnr7nZTS6Ky",
  "key11": "2DLGJ7SzvwX5geZBnnAgDjDyvXLbdhkS9ooUh48X1TbEQCRp4F58dso5h8j75on2vhHCb2A6EGqKs31qXdakStDz",
  "key12": "9F78vz9vxGqeHZV8szqejx3NSRNm8j7i9EAHBxsyYGPaz7uKpDn88NVqC9wF8c6VqMvrTYzjNUQiaPtaTRUNXaG",
  "key13": "4VeBa83M9VxXNjPeToKUccpQjJcjUsuxCzjonT2S41x3uAosod6uEiq9AFVxhVEXQpTcpBTpHWjQhWg4MJoM8MKZ",
  "key14": "4guZwj5N6CQ4erYv5eCuYnbj5zkbqQNaYus1AWLzZ3VNeJ3XbBpPGnYk1McoQvZbLXnNsmMwSVng1SU7JN7Hc2EV",
  "key15": "mhLKQTX3BSHaHgTNsrj2BxdQDccH3FsUbWzpT1pfBPAskMME3bu3UP8DVFao43qYdm36dGTeu4WeKeqmzWkY74e",
  "key16": "5ADncYrbsYwiwTdKNvXQuMEfsBzbr1M8bFHnySQnKYhQR2z41YaaeEv8D67ojVxfby9E55xgpGDU7LDJ5gyGQJhJ",
  "key17": "4ab18WBDMeQLTy3cbAfYpkvfSDDgDNs9Y8Ru8zikwJAFE6u2qGg7kwFkCPpehRkibfZh3ECgbXW92PFFAbthMKw5",
  "key18": "5RB8UAF8LEzTkGgrSQpjZEMe9v8n1iA7xvrHx6stuRgAfUd4ToGvRvLHC4UFpmfHppMgEawHuQVpdcZBZJ8GToeB",
  "key19": "iTvZQ9cGfB2r9bT9u3MAuPoMt2yqFyuof7wFEBvb3oKoQVUxPusMD81KTYHJhxKGkc9Q2W4DE3PPskieaGg4oz6",
  "key20": "3PvPyqa6qe8DfN7EBdz8kBfL4a1ubSEAB8fRTkLV8og344UU8b6WRz2NwkBUagbvMQ25jsNSStTK5yYwtFgNBG1x",
  "key21": "56ERtpT49NBxaewxjcPgXUuisoNubEgfTSLBXzYXK7NXnZxWydjGxH1Nqx44nhe4Skow8b5EcyeZn78UntPzbkk4",
  "key22": "243f62hzgQeXNwip5rhetquYhRvb8327HyNor2KCQv69qsQhmcEZbExLiagnBvEVpRQBKcrTTtMWsfyBcgSWCFmL",
  "key23": "5GnvQgxr6qxjg7CBNd7xvRinipu4v4fSmPcHYGxFubiW4q74HJyefeAK9wBQZEeXjQS3nmv75aZZUf8h7SFLAm62",
  "key24": "YecqufLaQfjpcu79GnGyvW3rLZqxEz66dnnwwbD2qyszfKZ9JUDgNJhJrciPhwkDZEjEk71ZMNnGso9nDsJ7iq6",
  "key25": "2cvNPC5PTPzGJSiS8521tR9Z9FB7My7d6ZtKF7vo57b1avCpx5nx6bxoUkCob2rgi6VhjBHsEitqheDQrqPRZp9H",
  "key26": "2JaHReqoY5oVLN5VPmHiXRSYTrJGrP4HXN2mYwQ6NYDXehwiLvSxWywPT9uNYWjKe5yr1MtHpjA1MGieAHij1vRX",
  "key27": "5gxY7MafPSpAZHPw91jyVQySuCgEQckw7TeXKFVp8zbrATAKXQTGZH2JLPaCwPPC5vxE1Xgv4bkBJ21a4adYZjDf"
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
