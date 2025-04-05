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
    "5JPPCbySCe84m5z99EFTuLTcJRcNF16q1JNh54mjgt8tk7nGBF5bvb9df7qAzfrnRZv2nPXGra8cr16E29Fptoqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tyLHVzovujuqzCPyMoyPCppgEsFUMyraRYHdgGPCEjtKHEEmYHFgbA9hXHcrrVSpe4Za1bsDas3xM4qKtQ4PYxE",
  "key1": "5Zkefvza7CciawvdkMcj318b7XEFrtbUzR1GexD7NpbYFwU9C1R6Spi76Jydz35dmRzywqgEbhfVLv8RjX11kdj8",
  "key2": "53Ua9sV5tfACVCPjxhAvBjUa2ZPqvVjiQeXCojE6XddTDZPkLUL8tmaKWZzkuAtNURwkfX4214cHqQraAoENTiRo",
  "key3": "3rkTGcrCN6eBugc9jhEW5GH2gH8cNaYeuGrnYvszZLDsY4gWTn6DvamUUyk3JZ3cm4LHLKo8QCWYL8JdcMGErrYP",
  "key4": "2igEixyacnjgEHmh12ppChAYgYoaX5QfPmgiPWe9rAowUtkYPQqLmcZJfuMMcaBsWVZXgvXLbykHk6FJ77YeDFJT",
  "key5": "726rwceBHzSZqpSiwrXUQ2STxKZkkMVTeKenqeAmce8hTxJP2m4JWantrTMXMTu861aih9DbbxfVhqCJb1P5tnR",
  "key6": "2YdYQa4BYazmhynxueCTRaT92e3vDAjtzEKw8C3swegs1Uw1L5WZT9UKq2EYXJ5S3aaTgSaSFJ18jTL2Lhi89ZEr",
  "key7": "3HLX21Fk7Gnc3hoQnB9oE8TYHHBoEgpBKhxLVK5tr8PzYYJZxfnFY8jTuYHMya9C6Ks7eeaUtaDZSpan6aCFBLoP",
  "key8": "qXcR5SphhtDW4wCr7uMcUhSjcdqCcFctVieTvVbaY6We8CBFTRtQbZQD1mVJUhgNcSyndNPudCpDcdjdyxDPtSE",
  "key9": "2WTfapGMu5SvcZwiFbiRKvn4Mu4DuLFTJ9otnqZxPEL13hbnsYpZkDSa87jwnuMbtkLin1DjKVQ32aTpqfLSayHZ",
  "key10": "41EHsscQboJNGexr4NPyDTUCFXRAEfGveNV3TGTW1RKZ6wXfZD2rHqNXsyZ6FSbyah9nNd6TuCPZAxHfPbdmxNhK",
  "key11": "xfNMe3BxJRnb9wLR3d9N6oU3bmq3WGJSeP1Vn1stFpVdVcS7TmQutAYx47uydbRxDQeXDHiF1HQbUKHU5xaUicF",
  "key12": "2UjmgWk7hHiH2MCzZ6aXtqebdw6Znz4aNJuSnx2XeCCJGr3dJCZ9YVtAc7NpzraRhpy4djS5CawXrRtmthRfxYLa",
  "key13": "BtebUSaoWFLnwCKNi47F1Ui1JowDwoKNujqmBURTuTWDAYqLN7ZvYDJ8DbZbxDHTPLZ5zq3P6Y41vKZ67oWzV5a",
  "key14": "C6EWWxTRqeQgVXCVvkfvp1FqCGzHkfCtaS8uJWJuiyGXe8h7ynVUFSkcXvAfuDqMgD2KDD7mLh4iVUYQB8JLyKp",
  "key15": "2gm73SHhfyHvSCPyxUBtfWfhfZvZ5z1Fnnmbjf1SWTaGbzEGPYM6HKQRDRuN1d6bnChSu1CZHF8gNK42SuneUUT6",
  "key16": "5BYqxB7HdZQF93GiHFqow9MCnWuSZsNt6Hi72NinZ91kzFdxcnwADz3pdLWWh1ETc8VhQTTCGqK3JhJtwzCU7cyY",
  "key17": "3LjtNdZJN8hs888e8FjrNcgReuPXDme4KfTN9vGKJr5vtMJkmdbS35kYDEDMgDf2YFfaajD9DJzpQPyuzr979Crj",
  "key18": "5YAx1jPB9ZLniFXSMN6MqnG8L9TaBhT7B1Gd1tngTjQZzYgCwJUDsV8KtPaYpmBbHMdDJNPwvmWiH9cbsUS16vU4",
  "key19": "3cA5QKkrCUYWKLh8pnYRkRRRenETfZc3is5HooHXKKsv3TTnYKE7biDNwumCXRNTo25MQwKKgcH8kdQvGe4zTZpa",
  "key20": "2HRPm12tSxC2mmbMiiA5cCmE1XDH8DEdGCGY2QhEKcksr4VrsuaCH9ZmJ23sokTs1jb1UkGzP743Exbd6SnXYDJn",
  "key21": "56K7uT7jedZe1QrdUrJ6DNrBPEpovdWBMfkK8UUJCjDxJtbEuycujDKStCo5GwhuVaH5xbgibfenS1SYFLqoXiUR",
  "key22": "4rjZxcSSGpeeoDG2hkQGVfZPknXfGdv78xndJhjaGd4dqwMLDJHJCPpjMwU1ezH2LR6Lg93QBqjtXvTu2DGa4VnY",
  "key23": "5Ecah4j8qj1Yow3PWMQ3G3zb33hd6sDXJoZyGdofJ1EYFHdhCBDj1Tn6ChUKWLW6HaiufTX7RNbBj4qirthvNapz",
  "key24": "3i99vu4tweyXVENucbDGtR3Vmn2nkZiFLBZGbeNj4ELahoz7pxqiipbZ32RyfGAREWKhim62V1tTrGQ818dR2HtJ",
  "key25": "34S3L5dbsXFiu2rsc4P26shnpUrXSVxEP1dnmDF9Z1vo8ATiebdKCjL8hZkLYvci62L4SEJortJMxQZjiSL3zuyW",
  "key26": "HaETsswBYnWxciHvjiA1xoAxkNfgZyMxLbbdxE8AEk5dSRsW3ChiYnGS3YAn21XPNECRADUdLeQRSfXQC8tWuA7",
  "key27": "2EYMPb2yEUFGtwPbDy8SkqaW1W5GpKZnthW2jutzGJgNgan4ehp3rzXzmkTvMSKvTmhz6HNM68yCvw9WPJETdKSC",
  "key28": "586k6kFReXPTVzNCRre34KD6Jxq6p49VheyBQSc8mCiYdq5xNXs6aYns1z6uusfSC33HNyC32L4VekpG31StaPSg",
  "key29": "5gCo5EsiwXfMfKt9MSLKxvZrbnhyCdMJtkV8juNGoxVGD563uhaK2jbMQnF1Jv1CLGh1JLtSL1ioVGT3SWPbuFgF",
  "key30": "2r5csArQ1xbUvvL3rVvXBnwNaHReWC2MYaoSBWgrkuedhk9PQpQ39xvMb3F5xCzcEcCPxQZ3QPJNCboSySza1Ehs",
  "key31": "3dBBGynCTofxweLTCHkwPry7uVzKpV47pF9F3cHUUX7xkoYUPcrauMtyTxxsL8tf16XG5t1mAFrJwr7oqXVbfaMx",
  "key32": "4p6zdv8HnUshdDVWRovbiV3LCxKovqjrFB9sfzyY98zMV4meoDvksaSSb6Zco6ryMzS3UEpCu456CGQc4cNqjdP7",
  "key33": "4zwfPzkE9CiegXEqYX9YXCEX8sJqXMFsvZRfeimad8iktciQykbsTEqXEnTS1U8cQSAaYApFpq4sTBJsuYUXdKt4",
  "key34": "25tf2c3dv5g1XSybt9zxg918KzhsjgFXNJu2CjCPZaE1BQ71wfGJigkzTWLBGStMgbbiW9ogTX4HEVRX5LEMkHAh",
  "key35": "qtm5VsrkKFHi6PxLG1abvgCvWjvKoEztzwqSEBZvpnyYMAxgVsr1D5mxMiMw5cji73WsJAh9w395oCLegje8eZC",
  "key36": "4dfnSW8wjgKdnEamkhE7GPbTwVwcQq6LifF4tJgSfnxCHfJ6G3kBJ6K2CDC6VdRAHcZTH8Eu4a5f21VSUVXrDssT",
  "key37": "fvk8Sepq7Vncq5EgGg8jA69WkUzt9ayk5tYP71TtJHPNVBinYVEuCHksvfrAYoMGtk97X8tmq5biqnG2CN8RcbW",
  "key38": "4ibx8qHaTAfANoYz8fDKQJiodSNEbvpL59FSoZdLrEbr3DxJd4373p2CnTYj8R2naAz9DGvWoY36Rn4hYmXmypoA",
  "key39": "2PoKjawWHuAowhDzBn3hqsys2QjyQTtb2MiFe9oXGRttiqoKk8hVdX5pSc7sENKJHKWj52Ap5XE3Mwi5ktfByWhb",
  "key40": "4cFUS8gde1dJVh8YU8BGJMZ1f1KsGKNiUFAh4rbUYHa1XEes9PZEbhPVxQgBuA2cv92uqPPVPgsB8RydyEkoRxYo"
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
