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
    "2YxwraeR1dvYCenSGpWfvjHFjwoNvBvsywyW4hsBKYfF5erVjYPo1cygpdeBa2D5CCiz21mchUHqxfnZyLDSy6hF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9wexePyyMMHEN689NNubXLraTLMT2aEBhLCmkDKzRZsccVWfxqqq1G2kxSPTQs5UESA9ZNaVGJ7WXbdNuwAmo",
  "key1": "4dhKcxhio26koa8SPQqr6kgsdW2hZcsa22FNTw3rxFYnLvL1Vza1dtewXMkpd2VBWxpAg4Bf1dJPX5qRJvgKpMdY",
  "key2": "2UPpxxU2VUeut6R1wGK5K2QFJmxG3ujCNgmGUf4WDmbkMs7VU18QPMYKqwzm1AERidfxhtxmMVks3HuLfaK6EToj",
  "key3": "zpEDBDwBdXZpgjcxUNSoztfSzmSVtqkHNcqjW9RmrnS6P5uAfKG87NGjMC9jLwsTwn5qBbNYzzhm48mQNcAD21A",
  "key4": "4Vk2vukYj3kKX3N3rse8Sd78Rjk5XNjzHC4SyJfpxGjiwo7CcqjXQMxHwpz7ziT1UiCmTffs4vpEAfEmL3cLwiFv",
  "key5": "56aRtKW7BsnqernyGZMm4bB1Bd89F6badh3mpofEWh3y9ii1iDUJuXLDecYxc8bpbNPkiLNbhBHPbs1VAEudafLe",
  "key6": "4hBpwLwavUJgC17Fsgx2rTVERWQHFTqy5JnwYpsvjsACbXwqCARrZSScHrx8U5Fs32mQJECgUMsAnD41KzV4WekE",
  "key7": "2xNtYQudDmnsqEgCVQDstybbNhwDmWH6dTuKGCUHFB6npbq8w1NnrjHm3zW4gyHcfoJCbCH3JfeHZBVR44dkdJKJ",
  "key8": "4gs2gvFt5bpFBcYFjDsPVEkUNoLiNmDRSLCGydgv2o6PPYtkJtpb5wJLwGYu8x4XcpyFwEBvYVmt5X3Sukr3wRnw",
  "key9": "43Tqqkzrwr5HsLjWd65gCQMgozefutJg6ooDCFKrmMnXmDV1mtPSv9x8jHLaPxce5hQ7bBbAoG2cCngn2nxTGgCc",
  "key10": "JoCyqixBJBpLZKh1DKTesoEmtqv7iFXMNakXxX41bXfUfhdPNWPCBLBYu9rHpeUVPLmSMrePhAjEG6AwiB3QeL4",
  "key11": "Tn2jy8WTyPY6oMu3udUAEo4Jy5Ru2YGxYmri6TQ8u46k9He3NrPUpbZqNjZHEd6T3Mfjwy4U2qzTHYcALkaC3QW",
  "key12": "4uLbUx3g7uVFAnNTtDJQUeJH2ppLnvoYEZo1z6bMCaGLPcQjnCtD65mtL1eFDchRsTSLtpaN1cQ8gvUwbYRovLX8",
  "key13": "4CgwZrN8NWjUiqWZua1kBvrQKf9zD9XRHx6J5VJvGEuXXkp1YYMV1Sadydd3uxEdByQJmGPoMERZ9bwU6kWyVXM4",
  "key14": "roQ46RMyAS8AnCi5qSD94yBQSHqeMRDf7GK7EhWxubWySxaBU1x1qzSNauX3Yut8w4V4ah7RCMFSm5HwQbjcUNj",
  "key15": "2RHWUqHAgcHTPREdpwNNRSnBeujgrsfSbYmBfUC4C6j65XwWhN77WW3Ge4Lh5EFWfR5zo7Qf6koW6ra8PE3CvjFq",
  "key16": "4n13wMUDE455MAwML7P84RxCKH7Ehf9ijtNn4SNH6Sr3ZDz8jRjWequA5DKJQFNfCBbedk3YdoCZtqtFh7aCwXho",
  "key17": "49eZLUDqncCV5JNDa9K3iMei9bQgiFmUMST3cj4eWL5aRHqD2QxMvMuhXXvY63d46Ua6EaHaYi1Kwr56GQs7H4M9",
  "key18": "4n9ARx2KysQgJvep8yfk9wL3XTNu2SXvfTsXQRKubmKRXf8QDuxFWjHBRC5Qz1NdMrtcebsRjJYAVyz4giKh2Unw",
  "key19": "3kC3pjrqNSmCPCmdatEXu2MHZ3YsfxqhobxntVHTSvbM978RyRMysUN4VFG7hRnkxxiQfZWUdVDNqDsceM9tg6Nr",
  "key20": "5vsCkZmfUD5RnP8SVcfUCwt4RmyLfdx2DntCGJ7YKh4KV9JtfmVReW77pzxn4wG9TFJiL7h7YUvH8pLndVuLh6rf",
  "key21": "23pdcCBS2ktFUns6pvmRUq39AaMoJ3zKs9E1DAGZvcjxeizV8wV24UvrPcLD7WJ2y6qVrnGssE4ijAmyNERMVVwC",
  "key22": "2EVniRgr44D6vcTA4DECEJ296p5VQfKzpaWiszXtFhrtAmsmY7vQTyVotjr1UNB4cddANZi1rwkioZw3JLGDjgCD",
  "key23": "4sPeBLX9DLzyyQD9DrXPZWUK2XkazKRAHehwwnys3sN3hJNAm4NX7EsygCLp1UBDPHT1iDit3wwFfe2WLUmEEwM5",
  "key24": "3k4jr5FKW5DUtwrkSaQEGuM48ujYrSYP2zWtMYxZTEFKqi6hXJFZ9umYuaYfdCHM9WCJsv4rQpixk55hT5SyTuSD",
  "key25": "3Qv1Wcbz691bDu3yKjJESKY96uJoCWHEnUqkXjezQQDS1zzUPBQgrmP3Z9vGi6JQjXVZ1u9u9ga3LiQY3jftXFDD",
  "key26": "f7Lne9bxBN5BDub86jChAN3HQqY2n9ZQ75AMSB6sjWFVRbLKxRLdZU4BiZwTp4mGnMd2Rhk1CjYZi2NAqX2ZUbu",
  "key27": "4aSmNSam4P7ahYLJyWAiL8ZZSVjjbWybCKFR7V2yEtHhWmNmnnbNWL2NFA8924hteyF8WMrsnQrMQFjqUKLnyQaU",
  "key28": "3X35Ydj6UEjJHC2YFTB1UKSYaqgMaDDyXwcbBofjsDhzxYmTxgwzjYnChscfh4QhY7pZaM79VuhRVvxfRatSJstx",
  "key29": "3NaVGpn2s6Apumhx4rntsuD9WNDDR7mRD2XMYHfhbwH3rWp4hZSKTivm5r7oaB88dw4FD3PjQAhtMWop9j4xZQw8",
  "key30": "4net1Kz4nYy2heEdPaSE8pRNQB3MofHxQ2PgHKV4SqTYbs8jRVfSiF8uDywExrS8mH2dud7QXJx5qbrg6XoPywsE",
  "key31": "5AfB9fyiMQ3txfJ5hXNeeVZuQnjGgm1bxqUv6kts7JVPm9vyVWB1qfUojh9qQjECBtKuu44Uck9S2tfoH85Rdn1v",
  "key32": "5t1ExsAYvLfrQQ7dq4veeLraJEbdBK6UY4GHFPE7poUmJSY6kXQtaRhThfa2SuD6p2myzmwmAqKRLyeQshKEE72J",
  "key33": "3NHrcMAUhqKqKWyWuBaoEfwoZrJ26kBRv1sx6pAa3B1MywjoFifg7b7ibvCZTTUUpjgB5jbrYCqo8jXX92bUvwDu",
  "key34": "NE8EnNisDmn98QGTVYLoYRKvoFEJSjTxwfrz5naVQ3kuRcUYHA9opV9Vtbrzn3TqwcTHDvUC2UKH5LCYZqEZaCM",
  "key35": "2azPQEc761eEpDe49BmFzs9LDmN6F58nPosr4o2dAN2Y8uKt2e2hzaee35azieoc9XF5sqTsBStYCD2du6Rr8o1A",
  "key36": "TWBtEZksFjBLYAuWMvHEAXFu49EYDZ7QeTVYWBCEpbAkpk2RcXqYzq1YibboYVUDc2dQVpFPAKHgcMMXhzkzGPT",
  "key37": "2n14paxh54h1GFrKqotuKbshqEB4nbKsunDY65P259KijV8Yn9WMJitC8HiR9g3tw22ruSteqVPzWJvMnHGT8Ayv"
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
