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
    "3ww6YLrfNESD2VMm5PSajudZingZEBdMsSjLgkNaKKcKAW2iqQw5swGZjVjEEQwQzcV9iBRZhvKyUVV7Z2eXqQYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSPnPdXXrmA47ekELj8Px5atQhw5qKMx7dTJ1qyb5fRZtFpWc4HgEFAvM8cYupqBDkVmtK4r166SaHbzbVFLLmM",
  "key1": "3T14iCvsypjodPhWUSoMpqhEhFk7bZD6BwUGhMRXafs2sK4CVkYkcbfTYiDtrJC9AwmdejqfQGRpZosednPDmemy",
  "key2": "3uVh2xtfgqcnudfgb1nYkCaWf4KkagYNCVoqqaQLNxEbgvBZxB7sbLNvx9aLjdQvFU45aYgVLTrjJ1Gk1iLJkQEN",
  "key3": "5EyBX5GAQqnorzMKK7NqNv1msm5L4DKukxEzDmMjLatCX7vP1iKp7Jaxte4PG4udhgczUNmgh4k5vZc5qAvy6pyw",
  "key4": "2JeNDtgUeaKbcSCwzsqiusFMUC1YCHdAGZJBsBcvx4s5X5s4G1m1bHc1k6k9kt7AVqGSWXmzpb6jcZQUjeWNZapy",
  "key5": "2B63Ck3XCpkyE2vmqYdMg3ch7qcsBnEyH2wVQbp4gf1LnMDwo9uT9kBDepWnTZMqCHT3L1zBGnV6tYX7YW95b8gA",
  "key6": "4yCxkYW8t3EisuNVFdYJgFjgxBnzEJyyiavzk8oXVfQoXJj5wagh9aCwg14J7mi5uc31kCsfb5Aaq1bkddyCYw4u",
  "key7": "B59RWNg46zcHCZJHR1KUj4YXUtTZEQDNFhobX6scArqHqQP5WczphJKvdaC8Xz6E5rkAZ8uX92R1cF1yPTAqffE",
  "key8": "4Lfe82uP4KaXo6i4CP9YMkjsMNH1BMW7bQM6Yi4d28VL2KkM8xNNPkf9BKpGLs9ctgkGW4vW49PiWoVMkfUiaLhm",
  "key9": "5gNAtpTpRwGNbpXU3GjAjrJMCTKcUc5GXvx9vgikXaACDNsVpWzCAmGpG8CNTxBSzS6771eQ3nypCV5fV8bwWeDV",
  "key10": "3x9H4AQSqeSAT9yaCfpyB2MKncrdVyKPg4MT7iLCrwAfTx5YXUao8GteS2HQFYvQqeRcwcwJrgecbwAuE1T3ihcM",
  "key11": "2ycrQSEQ7MDdqUXib37CtX5Zppw7GByBLrprkP8bVr5psvAnNcyD4bXeSuoZ2MCFztHznsxHbDPBEU1uMcBk6Qit",
  "key12": "5zkCu2GtbPyh7V8qoiMqkNmm7TgxciGBt6qABZYevDzdnwrpn7TmHDdBraV93ZU8D8drJGT7fc2eEJPgJ8C95s3j",
  "key13": "3NoJvYP66R7LZQsGtbJERpq1ZDLx8BQdpCsh243QLGLcntznMA74CuprAL4BmiYBUHutw92pyVnmRyRoaaRrtTDQ",
  "key14": "2JXFQNsXvbBTzxAvSC3u2d8vNUN8ydGUs7e7UsMQUg3a7GFWRZqeo7Ywze1PWymJv8soypoeWtZbyvfRqVV17YF9",
  "key15": "kZcdQP9FjDiQmyLTYiE33d2Fhtwc4HGa89vGnqJjUiLvi323nyTum5sMAjweV4sMq2ab8Yhkxjjf7xPDYMGfjWM",
  "key16": "5h8Tg6GBvC4BVeDjMcg83VkuAxNAfA1JkvbjnFghYEWbYte7MQkW6wXG4bjV6AyUGUUk9qVLFYrr2ifWnimw7oKq",
  "key17": "2uCwJK5SRT2QWdBiKd4KiVHsvnHcgHuC4F3NAatUyHRkpDz41n928435zUG2n1JwNV1H7bfCipV7fSMFq9D8ANUo",
  "key18": "24ntdeZo1HRDjbW5jXXGcnrKQW7r4nnX4rahknS6k8TJsFtRSTBur2v6eTrEaa2dXni3M8U61Zmapfqi1i2sqAsR",
  "key19": "37MCwcw1vgWtSxBxr3QThSWVKqbMH8LcMxJzwJXyimNSTGDDQPfDHPNfkZb15cYV5wSsatrFqjbNCuiwW94nJR2M",
  "key20": "4mAGcJb3ahkviKmvW8dVfTd1EUd6FkSGKj74mwHikCBp4oqnyYgFUea8PnZ6fCRV669epWDbUDfS8DWrh1QJiS2T",
  "key21": "4S1CSp4h3F4424mQf2evfLvYbYSJ12LaF5Dji2fpxWhXsZSawAQYKd3m2Exz8TNysb8uRob6uqZLfpNBQSctEQpR",
  "key22": "5Kk7soVc4qaBmDv35aAm8Zx6bAU46AvMPCQvY6Q1SQq5eXKCmGN2qXZAHKT3C3E9YHgQkqBUTCpoectJSrmKTtAt",
  "key23": "5feBekcHJsHxoBFRkc6T5B5G6RncRKSms9RA9LggJ8xiAUxdWvcFUGUdj2VD8a4X8VUoXzdzzaZdo6UCdUbH6qQs",
  "key24": "4tg4DSvQGdMHP8uYokf7ghou5KtxDBUP1TsvTzBRRgAXr1icfCRL8iJVz4o6P5L3EnXizxPFdEQcHbFe4j8zABgr",
  "key25": "5b79hbYfRUeUNtueTye7s9YWDr2g6Uww6XExrJoQy3hqGRk3i7e5Y4vnCXPq4oJ65pWpWsnJoZKtCacqn5KuKs1j",
  "key26": "zUqbEbnZaWmTxBDRBfs3PunrbSPhfkFkbPM17kZSPh9cPKsGRjfqW9nGjbB98cVPJ5CTokNsGWQqJZ59aPhKRcT",
  "key27": "3FpnhwxjSNZ68KUKERRmwzkc7RhJfL3pubeR84RnJgaTq4CVZiipxhc7trRXFPv7jUsupgtx2YkG2M1wuMwNKbj8",
  "key28": "5xpr8bQtBUBAtNDWiZap4qy1TQCcgHFyxBa8KWcH3Ek5YbYbuNLsAn2Z1EK61DEdh5ujgfz4JuAkx9z8S7ZeJyfs",
  "key29": "3TAYhThvceuVQLQmtWD6cJojA6YbBUATL1JGLYW8hhTvxWZ5Ssp5XHdoVxqaMSD8DthsHqitcJCfFWw2r4MRxC3U",
  "key30": "31ZSDteYbK5GDGeBdWd9UpztZ9oBLUDBsowLhEYKUuvhRg9y2QGQNRaxP7yoaduXqCSznm8zZ9jNm7yADWktUpdj",
  "key31": "3axwDUBbRbTdNTAYVFuzwKNgdndGrctWThDrTj4hzwBU4wzcppxF5tJUQeoCyRRVfgqatWTqP3KF3WL8muL1DAY3",
  "key32": "3jokcuU95dGavWXgowVoNmjYBy2VEyRa4Gtp2r1zVJLhBZEcUkFkCwubDzNnrYRk8iCw1DJHX8W8hr8bewmgH61a",
  "key33": "zaZLY756Lz72b6j2Lj3dQgw54xvKWHF93QQE5pn2VHzkqcFGrpyAeZcHERWDkyqRXMsuymrjoMyNxj498rNnw7m",
  "key34": "4dh6jVzfWRM7ZvByGgjGiayAzR5zdPsU7hxkySWtM3LsJ1wJ2izCoLjHuMtJoeK7zQAosz2qL6DUVEdYghNpawEc",
  "key35": "3dMAVk2NfxyL5GKDdzVDM4xg9StsDNvPsyjNBxnj1dJh9dYaxFdLsR3qZTBENPTFMFnjdPMyWjob3wDXrqZq5PH6",
  "key36": "6VW7ncz9pW48bJcL4yfHGPUM58RdJwrwppQXio4J9z2aSucZk3DbBFFmtRmiF9caJT5F3vhpxVokckkEd2X3LPe",
  "key37": "5jLeVMMLWwgmUohX6Hr5DhSoahFaQLpTY3Sit1CGgFjmzxAJGSkrSxtYYRvM8dGMwLAQKpKoc6JJBL5MR5bfXg2K",
  "key38": "2vtfWLBoUaYsYgWfHETLJAiJmT8b8RNiY8pmhmVChGNkMwCHBh6AcKwk9dFGF4wX4L4q9RtM3f7K6Sus5BRLTsnv",
  "key39": "2zDrtPDnJwAb2CHvn2BnnvbayikTv1CditjkT8BfdTjbMaLaAhE8A8ZLa8KLwYDhEvnBQnPKkbtR4AZTjUkm1iGs",
  "key40": "3UY8RreEsbsYaB2wiiBdMw3UTkqR9ae8adimzG72Bz2YDGPPsWJYxAWVkctjZy2Eed6EnYw9j9REVsddSTD1eCEx",
  "key41": "3Rs5pnXL5AsT5JFb7WW2puW9cL3D7mkQUixQA1xh9XqxWYCNgxZRFvqV4B6TqZSDiYKJMJz8ETTSyXn857iFVWuc",
  "key42": "y98fUCbdTXT9A1YNVucYPvJ4QARLyi6JQRkKMsDksXmrujFvMmmdUR9XMPcYPT9Vui3SGZ9nRFm1S2em51AJcSA",
  "key43": "5gUbhs7f5Bx27W6XQBkwhU4Pg66KRyWH6ZBr8odpsxck2YCMxpv4CiXobvb11KrCcMSpqNqPJzCQiRqdcy7Eky77"
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
