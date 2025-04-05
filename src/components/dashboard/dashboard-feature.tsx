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
    "2v8PgPA9KAn2fWXYwxHCkxFWpXBA8BpntX5HZkvM37xVzmHAQirNjDQQoxT9MoU64jhCLR2z5s26TSgRQxgArBv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39kmBSZT2QsF7mE4TpMa93sjpuQUHVxY2jNT9HoNmWyYwDrhtTTMZEttTrWJDn7BEKwdgs3AYR5Tx6z4hojRyLEh",
  "key1": "qdZSh3A5V8q318uFF4HAb7MoX2f8REn5N3RHtY2mdUC7KBcak5VZtYW7uXj4wS2kA5GoFtZ5sEKmje7KT578NmC",
  "key2": "5EERg7GnTAKsj4eD1kcEBEPgetifoPJTfSZwfaJkLsqEyJGVYKHBgfKwwBjsw7pCKh78bR3LeUSn4fu2cmSKXwTU",
  "key3": "LE9NyxEb5g9qscjUveqggvoRc8Dkzey9ZZDs1xPUawu88XYvvETX4eEywmzcMkLJ6qkwtwqX3gnzkGaUPvRt9zS",
  "key4": "2Z55NUX7iwkmnjPBTakV2qSxdYuQzo4dzAUvhap5nv3USLdUwYh6V1s4jfu4HEFB9ohRsFZ5obe4TD6T8XpehgHC",
  "key5": "4TTzkaYPrmgf7MfrdDJPfrZChms3SQFvSkK2y2RysQsWNMgyDRK3xM4q8KsaDccMnUBxCiQeXWX7HsDoUNANsa51",
  "key6": "4MLKPTjMFp9iPogox9uGZ4Xrph8LmRBoqfYM1LRzyidpnQUiCdBqPVJ4WXbcpK7CDCBpUTc4L2s5UGqeT3Rui31U",
  "key7": "4ZKHqUs3DD5T3LPtsU37PNNJYvZrH9TB8xcdVdWMXCQzm1yXBvyPFjHZ53tJJ96WkifETcAXgUZmvKSh8vvGNK4x",
  "key8": "5M1yQLNTWHidHf8qNmYQ2tiGQyumCr53EXZJ6fvrsJyTrdAimBKkUKZTSNhTAPDJ343RcvfV2vCoDAumQXi9YDcc",
  "key9": "4XcDw8hycQpshyEg6hnaGKtVAKyJF5xS1qwtFmitmAVuzkgtWHyAgjXWnpoFE5NGNgG71cQ2eq2RZkoa7pMZ2X7x",
  "key10": "5ZJM86rKmeY95ypsePkPvnLFtop796uGxcg9kbMMMvb4J96HTwfTdzr13uBvuJ5wCc8mUgNDEUSUvEGhwwy83Fw3",
  "key11": "mthqMpSnvS9krKLeBno9ndiL7m2tz8k8jHmpfbroKx8LzpuUAQoUMJzPdeBiU5NHuaZgoRvpk1ixrNV9joDrRVv",
  "key12": "3y8TWZ5Lo6E3BFiovXXAh5FCdhb8rLVNvitxbeVKBb5aJapkCVr44r8vs6WG3RmtsVUCwLCFFHk66ANjE218F6sE",
  "key13": "2L8ib7Z4u6ev8wGt2mWHbcDGHCg7nZogskci4A24rdn9QZG7ZduM6t4bogdGkhKvwE5CvRuTr56S8Yki1Hk9hZyp",
  "key14": "3hPnEtkxf6SEKan3AAHF3aXTwnwHDyCWsVbh1SuyKtqEYVKnsB1AV6pQjFWKyUmgLKi3ao8BY2q5E3C1wgh7nUo9",
  "key15": "4k6ZthFRDM6ZDdqGaQgL7fwNkzeaUTQhb9CckFQSNb4vDVsT34yZUykkM5Wi183ehJBsfVF6cDGLxwmwkb13Sghp",
  "key16": "3WswZeqnv5eUUgkw2QD31krzyaQ6obTQuPPL4A2RKEQUAbynodZApHBi9MbBroPdhgGSK3eX9oKwqKVeub4quWvm",
  "key17": "2i6fgi4cwy2wJCcZNnatPJPEH6BFgSj2jS9DxqKkHoRfrfaTUbri9a51EN2A5vjT5w3ouCvCHXguoozhrrJpL1ja",
  "key18": "7mN2NdZqqu87YrEaxD28NKmv2nrij8UZYGuRMpiqgfvqDrjgfDExrAYjaVFxWkKJ6PWY97bNFan2DHxE7kzBBEY",
  "key19": "2t25ioK1XURRaQWyVz3XoCErdzA3y55X5FYtTSCgbHYF364Nk3h6JpSpJX8BRCcqnnu5JNsMQrtZPEEBD12JdimC",
  "key20": "A8L7ChYhkrMRUewCu9K9BerG2jaYUteS7vapGVM3kWLv2N25aJVwsPVyu6bkfZ5eJk7BQ8sGrNTG1zFt2deVi9D",
  "key21": "2sKvS5MoBXpS5cQaykSKN1mwuEj5CGEM654pQMtQv7ntdpWHLVjQoG1FScPUrB6YYCQ789KfWJhmsVdQerihcabg",
  "key22": "2UShUiJ6LJK4Eq8S5RjBsdAuqgz94C4Cedh3HTyy8HnFhRHEsodicNnE4z6EN8SGGNWE6aU1vi6PEnpw8TbgQYt7",
  "key23": "2u7bMrCAzW2ob9DniVErEPrLrsXeun6Rm3CgZxLZEzypbqgrNg78g6WuQYdgv1SvVW7rnb52WnH7DZp4Zv5BrJmW",
  "key24": "56nfMcfVHG3UfAV97deZqna6sTWGn4HHgH8BuniYeDo6KdboecfbvTbTCKinKrEmJEQrnJHVqPr331xpakXJ2aZp",
  "key25": "2D2jQqv5KWGSsxKr328NB72hDu64DKS4GqP3oU2mHHmXFX4kyvnkUVqA2g1zVXDJYsAX2pmhonwYpm7j4MxzSEdn",
  "key26": "5znNmvmDAqRcHhdFa28upJww7oXH6TB2yXNT2mSv8wzmmDS6r3BL17iZVGUoaAYpLjqCvgncVPH9LjBdAAgwcHLp",
  "key27": "LsnKD2rJmWojE7Nm8nhsGchG3vCQBhRN84nZPZha4cqUzPNbBfWqvBZaVkUZf6FXQPQU1MbRb4Wfa9phvAhbzUg",
  "key28": "5sNLFavdPfJEobu4AqqYnXEQhc7iDKdq86XEVuvPVXasDCaEr5nZPSmEXrxQ5fMdXmmuv42rtGbfH78Cw3ZeGn9G",
  "key29": "3jy8ZQGGKso3eeLiK9VkB6wGTmbGPkAxRMLSXS3TwbSyiTALQEbp97KViQrCbZ6qxRoiWq8ntJBVNJFKH4qwjg4J",
  "key30": "2ZsXDRPMRqwDaoigZ17vbR6UvKtJux7BrdtH9LnJpTMHccBy4cXa2VoRQTp1h8qaDEZZbANE5j4WdEpHLRFHP9xa",
  "key31": "5YnWzy6yxUdF8McHhHNnMPVJN7U2A9CoK6LmCgYJJXdvbxVKCuJkv4GtNNptpVt6e79oZzm6hu7eL6ocBbBNSW2R",
  "key32": "2nWchBfTAKBKGatphreegNagDmBmEWtSgiC3BAcr1DuftyfmLkA3Cz6otKxNAdxCp29eNDJpH7DrNSZNA2PxCjjU",
  "key33": "52wwjC1Nbm2Qb3pHUM8AAHL8kQgpyFVz9jCtzvJKpxfRgbuKGwT66tf2JU7LTaWpZKSQAVisauduMaJWmSbTefN5",
  "key34": "5xu6t4y3zyZEps13mQsZ3CBKkYka47AN47SHyrWL8mySKDmqDrTPndXcxpNTBWkAHcTFaRrcwguqDaNAo7ho3rGo",
  "key35": "3ztSqdDXEZ7WKEWMX9z3C4QALo3C7GbC2ipK5itTswbrx8zQwWduRKvpCTMmAqmEkusHeUWAe38YbXyAB2S77xCX",
  "key36": "2ggaxTW2oGyrTjzdioSr2qXB8jiR6Z45CKwbhGVysHXJrzt6i4731Qs4xZD1KyfMQKeD8Uyju9YfCuqY4rtkiQ17",
  "key37": "5h71y45MvN7axQJgcTHQhCAn9PCTQeqyonk9VJSVfvSzsxvmWngEjJ12sVgNoBtQ853v4FrXHBEQhxXe6Yg7oo9z",
  "key38": "5RovXdyjUu4nN7rKiw5UUcCs1R6rSaHgEanP86MaT5DFpnm7JT7tEJUkAfjKgGenP5KY2VHSgZz3PWE7x6DFzZof",
  "key39": "2dLvK4DbnUPK6x898TBaT2JJBN4tRvD9pchq9ss3adkUKEpagp38d6wWLWdUCAveZFRJzrki5RffAUXpXzh76e3c"
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
