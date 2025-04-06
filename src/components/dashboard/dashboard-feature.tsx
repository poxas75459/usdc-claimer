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
    "23ZFUZUEY1M6c1XZvVMHw6QbEVnWCXo1pqV3YgpLGcCNfRpmWizp5BYFFifc75PM3SQ8k6XdTjUd9Rvyhx4sZ2Q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rcqnf4mrrqGBoqiGCgKSrQyM3ydwqoJsDWLNGDHPKSM4b2oR45MMRxhGWWcf9LAoS4ketSgQLG1HacRGotRkJBc",
  "key1": "62snKZFLs9WhNHxzV2jLkGEjHDfGQtZWqBWA5u3BqJS4EwADdrnhMDdYBo5UCxgSz8ahodc7P7VNG7kS4pDAPAZY",
  "key2": "47p9yVuPXgRsE2UyyVjbyJyMAMaj4cvMbHp7589y9pCNum9BA4ZrGxBArZq32XudtStWPqsv14KHwB2ou88BeVLA",
  "key3": "21SdsoiAovPK2FC7ZJeKEA1sR4PF5XRAUcYtgkL59znusLyWYByg1BbZTYWY6FCwARrb6htNmPNVA2apgm4WmS7y",
  "key4": "5ZCcdxMnQAQXus7g1gk7sUzULBymSuLdcDfE4Kf9wqAX3jDBC6CViUmCU8iRA9GU5smmrVsvCSEgCUBSLhsgc5RC",
  "key5": "58tx2RwrcW8jUfrg7W8qF3EGn3oeFToZqFbAnDhYjRQgifwqFxm1EtZKirykZQJFVJNwtGNYXvym7tkKS1chssFK",
  "key6": "24cx8ncxPH6hpmwnPXoLnNKHSkT2x7sPSpmLdRp3BZiFM9EGfBo7miaPLwwHk95ThqBiEyCae2FD9ECtXN5VRYPo",
  "key7": "5aX1SVqeTm6dmfjpwQ2rfh9wZ7N1VYTtJuFrEMr5kQduJs6XFgUkgGiMJKf7yEctU2LNnRpdsZNq4XYWkGU3d8DU",
  "key8": "32wKK66Bxn8snujuZ86ZjrVK1QMSv7RSUyrXkZHYxxR7bZzdQfFbcVWxuZZD9QBC6QXbExQxmsHzM2UQvLFVV2RQ",
  "key9": "5WFCCDF18ZM624m6Ync6q9WUdxYR3s6UVoBY5mm2r2X9f9zfFcqe2hn4L2aEUG9vSdqMmdvEc3FqFxDkRtzEcy46",
  "key10": "4MLjeVWaNBQbFNyc1BGnPVXH291qT7tK3hjqkjPorzmvSqoXwQnFb7hF21B2fxwwyrbvfDMXRuAzFAJ2rqLXfXoQ",
  "key11": "4sb9a8p3CwnA7MBCVz3CQR9WQ9jVUw6sEpqXw73pvYknJDKKKPdWmkioqVcNputXxgoAmtazzZKRPnRtXEEX6Eo1",
  "key12": "3kTpWLU6bRTc5nrgot2C554g1bNnNs9DGJYhHfC9qF6225hfuoXPYAPaGVHpt4tZ18VCCdGCqPezLhsERJWbdbGp",
  "key13": "2BWUDjU7GfG5YmTxgz3YsGVsGK6kKyKrxSF4ikRY29d7Buovr3QZuB5SNQEyBqLGP6uawxtPNrF1uziu5wBm2ZCs",
  "key14": "2v51eLH1B14ehWGdePc3wMHpn2RN3YpNQ5CDaCAu1JcwB7tH34Wbf8nDd4tX3BH9ZokgijkidvLzPf2kPPsnrCgw",
  "key15": "Zms5HD3DKZ4wuTU4XdKJx4UoxRmbLXWUSWUZj39eCaqTagHVNrY3E6sQgg3XshrKSGjL2gXAfQMwi7oWr7QATNb",
  "key16": "63o65DA1hJUVEWhekH18pGvSGEdUmQSiUKzVTqMz55tFPjsZD7H9L8MrhfEobECPePh6DdiV84rvkYfMCfhBeniJ",
  "key17": "jQ1PSfjCsEicNXukifMZnniowrEk4ZATt1jXNbAsLaEX6wa4cvmHLknbxj7FnscsjZju15Lz8s2RkmPHneV1yBJ",
  "key18": "3hqACejmMTwoZGy7VqQgyLFmijWGLZKZ9TemHucupEesng286y4iTR1b4iqJWwEDdgZE137y2RaCrsA4m5ek6YhE",
  "key19": "3EPzqN5xD4n6DCgkLQwBLysw3RMQDZncFnfAFWP1ouPyKTxVjUSxqtVCWJ4Ayhu91K2namjSNL1VhF5ixiEq96PL",
  "key20": "4ySse2aJ239Tvcgzh1KujfWQrxmLt5F6pC65e5FLgLn5RGAvL6WvvGvWEBKpp3mNYZeggyeBCZrVigHAvwsHaRus",
  "key21": "3mzCrKf83vydGhXb5CNT6V8ChS8LzR763KJoieaneDuHQPm91siSv6h5Hbjijq4ygSaHyARQH7tBV4kVzzhBa8D3",
  "key22": "p1kBQih3hDpa2MAw8ZE1uGB3XBTFH2KMwP6A42XgG5ziPsnQc4LTbyk8QyWEVKjwKc7f8SNTesdyJWSr296Ez41",
  "key23": "5GPXFQNfLvw29UoZTVZjw926Qxt3bJZDEsHKJmZXrNvg4qQ4eckaz7EKaQK6dL9hjPsSHseGECFaDmWb5Tk5SPSr",
  "key24": "5VTH7huAU7Ju5Kffand6XFXd2Mn9vhqrJ8wC1h6KZvNGqsM93unfUNDF1FT4KtUf1A6pDS4wvQUsydJ1FnieCnzR",
  "key25": "5yQbyfi1jXr7c2mNddC7pqz3JfCS3pxVs2Lag2HQqBjwXykCG79C9eD1CpiugunP4yUwmmyh228qD4jcSWV6JCiJ",
  "key26": "4W39d2CZgB3TzvYbdEAM2wD8cJRWeF2t9P3WkgyCzkUjefSzSoFDUCdsY6fe9e89FTsNGLQgt11kb5MUJrBvhYxx"
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
