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
    "5gJJNhaYDCHhthjN3Shd5RFNi7F5KQR1jstkp9f1pMpNRJNXw2JRBZ2pGvPmaoNisHoYcZLG1Hw5kWDDnKnXU9un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61WfD1S5C811d1mxNKYMrWZ682S59siPrTktxbsC6hLiMi4nvTibdUX3WCRVKo3V7NEuXMNMiU1xns9btN93kqjX",
  "key1": "3yT5gJuQsydpbSy9ZE98yUsdZLQ9koLQguWnvNuMHxye79QAWzRW3CJ3uJfuxfeHNpxwF5vXH2zREkeLmRGs5QbM",
  "key2": "3pCxohVbnzi1AAfzEfwnc5oYuFtny7ngZ6KS66Ne1mdGVwS93D9uX5BS9pvGrhZZj5GZm8y2FWS3YNpXUgt6vXYL",
  "key3": "61Btv5KkwkS2rTnqyt9RnENYJHxma3eeT4YfRAaoaxXUGahvzj5wxt3ZKirLPVTn9ojq1ad2FHjqvqNSHPKMyhQH",
  "key4": "5apNL7JG6LbisgQqn2eJ82rc8pKfoBVAUDL8Hwtaih8oFfjvDfqwmFyDUUGReqW2d7ofC6ZhAozRfP1V1Re6NLMb",
  "key5": "WaiahQLWZ4dindDWC9Dbk47rkx8N8Cufrj7KG1dKdi7Yh8avCj9QEh2gfwkAkBwF8c9r2dpYv3oS4x84GcnyaDS",
  "key6": "3mcLd4UvuwTMYg3jbcQWZ6np582Y1tJqQozW23VaX1Hzo3pHQsH2gcvwcU6iLWYyeS9NT4KJEcyftYt2A96fqrmu",
  "key7": "2peJVDgMSxtMw5kdUsHDkrqTukxfUGzkL56YE8zsCRqBpfBkj9sBXVq5bmcbvKW8hAHrSvDBHT8xiu9E8MuBYTQr",
  "key8": "3xze6xBpv5HYdcRkpKFUFUXkGeSC3xGTqKwDwLKmpKBkCvuuo4UY4PfN57u2etvFWC6NDDUDBhQtfvcNCgatwATR",
  "key9": "SKCC5QLtqGeCT6VUaSFHYwRt6EJmn1xRCUQK5diDbPUpMuNicZEob6g7L83fQubCuWT4mZuFHTuA3RjBS7dSD5r",
  "key10": "48evQtwk58ZVXf1NiHQSFbgUpyv9JoPdAzFzeV6jWD54ke2z4SdRfVRwgknfw7UXrJvjwZEnSMa7LaxnoNkzSpca",
  "key11": "4ckzwgmrmJU5ApZkHAoRRGUgM1kyPmvFx4VT4yzpJfaog4io3WXwFsHGDff98rh2qhoBXvJuvihFXfiTvUMA6aaz",
  "key12": "5J8jMShqwAWV4ZTj2vKMN9RGJKqVPvVNBbK71kBMAgopx37wkAMJhhtENKYCzT1A5wUB2Fp9UaxRSCedLaeujmMe",
  "key13": "3Kn9ssaMkFiNtq6U1Z5VizX3SX87o41SorCFGhYHsqydheuMtnwKgYqHDZJYiJUfqGxGdBgMwHANywno9D8XSpgF",
  "key14": "5SHEAWqbAZRCQNKWtwXoDMab2wb6gekYgWGj2EGz3s9r2wj8UEbc1HLHY6VqNuEdLxX4uXJ7e33F2FrdeayFxCmq",
  "key15": "Ymzv3HZbcpF9hr3AyAKUpHnL9zNHTQZ3hCSsvntpNYXEwkM5jGtznWCw775yN25jDVrXns5XjbNd6npnsJfNyP3",
  "key16": "2Ziud96FLBWURXwNNDTaGAqux69XkqkTPEXFggDetzwDvokBimiwXT7YcFP6XWdxzetVTqk24WcAoDXfK7xCEboC",
  "key17": "3gxPAQPkKodMGDrwsU7baQTpJBuaDDp3VfADuSTQoL7CDA5ACS8FJqaqu7KyjBvNVKsmUFqjzHX1KWTFYA3hmm9d",
  "key18": "Nk3JsiWNCjQPypbVDbLUaD4U55rnomQikjyjt4vYnYMq9z7G95JGJH96jgbrRr2QFswZAeH6f1wFoZLFxhnthVT",
  "key19": "5yF8GGjqfhMT3zQkH2GxtWnJUsvvtHxjumwsxGNuSrK93UxMrz5Bs2j18JoykbJaR4Nm2za3pbkAhJLy67dC52mz",
  "key20": "5UXQ43VnrcaeapTGTivt4a5Hp9USeAs9msDDwPQ6XDEoRrj1g6bqpEFNa7RV58kP6HZK6VoNbNA6fhBz35D12WHc",
  "key21": "pbj23G8LaPszxKhfc2DRU2Ax8UzNui7qJYWtNYVyS9tKhFsdyp4khzfHMwHmFkmu9C8j1J78mNJUq1LVrZAzsm3",
  "key22": "2uWe6uxK8WmvjF3eZVj44KF19wBYfX5RCzofGsBmShjHiXZFHLoXkysur8AbnWuCXDTBqYdUTd7RBb3cKmrFvFCq",
  "key23": "5T1Znn2G8eEyUf7KdZXRQjkL3tgndUco1jvdyGaqDW488t59vJNmFQAM7uYyZgUugkspBuuoRLxBWDesMqc66VeZ",
  "key24": "5uTdZ4gMMjHyxt9k7ynGnwEch8M5DyryMWzcBVtf57pgyaHFKZmtvkUezZZSFFCRiMBBEJH8oULH2qKU7LVwvPNQ",
  "key25": "4pjLKEJDbW7Ng4A9MBbzVSmxTyuXqdvt86meLK7PDyVC5nJ4h1D6DWY9h1Hthyfw1WCkscd1fC4Ty9C8yyyuqg2S",
  "key26": "5Xm9ExWpv5TRyYRjc8kLxJviaEqGAZcYa8VsF6LFh2orpkq1CnZ64bxu8mBUhoTe1Zvr67KFbgRXt56urHgJ2Ja7",
  "key27": "2hYZucf3kXwXEzh8ZrN8sNaUVFYzzYH1AF9hY81JawhqRLcyLeyGmiCWAPbT6whKdw58u5A8Aa6QoNrq2y9gHyuT",
  "key28": "4NBcX5gbQ1birK1ZHWA5pL1AHrzTPvYjxRYmdkYNugHnxuq4GF8r7SXZRfBWftWJWRhakW1YNtMXzPZTxd6cEFKn",
  "key29": "588YCtFNcGFuLcLPL38FCmdmgAs9zepj7JZAcqwckEMt4vnH4wXEiBnbZeKpvTvneWZAGSnki5p4DPd7JTUYxHJC",
  "key30": "5JpoNGKav6CNKoH5fCRuPtWoL6riTodj3KH4pvnwnYdFMc98zQxVEfweuxz6vJuV2CGuXktz4TVpcd7XHRcLqtzD",
  "key31": "2EJMbCmZ388AkgVTHFjq7dmU8pSvdiAe1s4E7XyDFSmeukysTyF1RFn6JNoRBjkVGwC3MBwMuZoXzk3mXoHmWAH1",
  "key32": "54dFuEnyez38sotY18Me67jeueHE5bWzvCEuVKviEUHxKrhvKjccCHFvCrCUXnYbvaV7YxHsScy8nZ9LmXQ6FmMw",
  "key33": "3uMgd3FHoLyEdL3wF3bxBnx6AKnpELdzvqoXa2Ajd6Z3wkcz7WoUqaeM5Rbv9nt273K6yS3QYfrTwxtZ4n9Uhnou",
  "key34": "Vqsf5WdTkLosq5UPt4DkqNSg6wbp1GyUgN8c1WugPqPd4H6nQid9VdXcyNHkaEAD9qAS43wmjT6xQ32VZxa6ouu"
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
