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
    "3atT5EDLSmi4AcKDfvC2VqX5NhPQzkzTBTjMhL2jAVu2bRDBZ8zX89ckMuctTyzqDAXBaSieQTnEPQT6QGU9xcFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5XzZ7YuAAmwM9xy2r8D7xxRuxubEUCWaDfXr5kHzqr77QZjD6VxWuV751JGVyJxjcuc6YtFLRs3Rw5v4PYEgmN",
  "key1": "2CM3qmc4M254Zm6YLX2roAEss2ekU65oHn5TcxDM1fA9GYiCAJ7moJiySxeNoLdf7THdXLYwKnPypexRjYX63Va5",
  "key2": "4NvRxhovHyxVSnM89VbSJDorfTPqopnvujbT2XatPn5wJzA3i87JC5ggCYP6uUdGjhQKqf3fHg2XcLgHxzA7Erw9",
  "key3": "2SF7KDsEyGkf1xR7qo7U8gykjLaF2Dmxh5gh1S43ptf7qGEvGmmFbeFP9vWrBmBFMz1pAwh92kVrh6rYB87LiH8b",
  "key4": "4myRWRSqWw1gXZ9AratMUVanexNEnCavU7Ao4iDTgGTghxT6UQMnfan6XZAMZUuCiFiMq7cUChSAmDcURkb6EpU6",
  "key5": "2L224cthBy56NfXUNbD4jQm1n9ZXZm5NmnzccmL1HnHf2R1GNYfEQYumHFSYn6hmDG2YoUL6frXJsZR5rJ3GLT9r",
  "key6": "5ocx4T9bBtTo3Zs8HGRwJp2GA1JEStHbC2BbqDUGwKKSYRtAdRw17xJKCrrv8Wgu3aT5zkAQvp1yxWqGk258kxJJ",
  "key7": "2qjcFQLG1gzok6qrxHmxUBWYUMeHQYivijo65vaTFiuR5yuYoAdpppuDnj2EjXCmvwNN1A95Lb2X5JLgLN1gDBQ6",
  "key8": "fDsvSRnAo7iNsAfjNYy6fU43uRseNKiXZYuhqeAF3TJEa9x3omXusHFfCKKi7UDB42MR4uRC1fSSD4B9yR84LZe",
  "key9": "2Hiu5ZeCXzroy3fUEYo7gRbmQnoTmQ8yPaVQCxpozFjDK5kJ86gr7cG7R8yNVYyFaAo1XmJeVvsbtodisBsiircE",
  "key10": "3gVTXdnrNGYHkhCQ2WtTczXg3mSRo24AwD2b8zrSkh7oBidXNLaamxd89RHATBaYiBDGheF9jiDqGxYAwzp5fADd",
  "key11": "3HTh2Fhecwkcw9HGVa2xWvA6pEhrEiutYkQ7hQxphHab5dh6QFK6TR8G2b57t9SPfth1qz2x8ReqBTMdit6YwnbU",
  "key12": "5QD1AogwQckUVyF5hgtXnv9xkE4tVhL9cVF1cKqjUrZYKLuin9uBkY7VuFWCxMiDSQkd2FBtLHdAFqG4RUPAFtuU",
  "key13": "2SCeMfaSUzCdNavyqQ1XE1VfsDJiTGHjd4Q9MkT1G7pFoYKrXCu3YAhSMC3j18FQH5M6o5GaGrt5q4TB1d493sWo",
  "key14": "5UNpPYuCPwCZmeVQ8Gz4DXKtni7PtM26qmYq8buKd8LkdkTBY7uWXfFdoBCNw8FLGCqitGgQ7vvEYfETbqSRv1CA",
  "key15": "KirF5izZmMJGpNVM7ZZYDEBc7XaQzP7NPgiurVr8fRD5GSZLEWT42VsLJD5nJk8idoSKaNiZYNRyCBiiPyWZ2TW",
  "key16": "3WTFKJYguVZReBLE9u9RyhppbFVeky3YWrzPNZa912QPJT3S3usNiHiPW5niAEMEfXaxVJUh5jv23kzSPoQJfX2D",
  "key17": "XQqXahSZCF76QRTJ27WZM8Ma5aGx1tkJDtJK4aLMGU54AqTfBbh1D8dk2QCspgiUvpEVza24QYRZAU64oam9mdZ",
  "key18": "pJ2FQr7emiL2Kv3wR94h2sqhnr1YueWB4WE9z1bD9KmrF77bFvbAT1s4haX4Hg8YKcVS5kLjrJNpC28Dk1PpKAp",
  "key19": "4LK45Qm6kTJajBDJB27vzedNWH3x8R6xGKo7x32SuyzMgUT67DYEHGdFreNmEvcwNgUo26wmdJChRVLzxmfJkmVF",
  "key20": "3qq6fj38oKYcVJqBp7oAgXDqvmToEncMCVStaNxXHkAagukzz87UtgnNw2qR1ktHvB5GSmdcSXkdxMBZGuZjyD1z",
  "key21": "jUMCYPvQdUA7ihSY9eoXBkfjGcNKGxKupdbBhKdmCSGRKbjVS3uhGHarRYeR5k5yLHZQMbYubwyA5qHAz4jHohu",
  "key22": "5nPc9XhBwBPTYkSPkzYyv34b8jKJESQvNYj9tMLav9fQFuniposmWPgEtKeSuBq2LZ2xA4yrag3PoLyLHmu8QM82",
  "key23": "4LYsLh9Qz6K5xg6gdp7rETbEcrTfxzbtboCPUrVD8VVrWaryDMAXTfUEhjn8CsdMKCG7JyehXHEKny5B3Kvo6gL",
  "key24": "4prmFXdWFeGm8nPK5yX7qpjn3Fnt8aXhgdh7YQFqAynk7A5fHvEmZBZipuxZBhQHfA21fcs6wKDV9GkdbpbDWk6K",
  "key25": "rYUda3gJLUgQjd7ViwRaWWQYZZcDQgWRRf6bupNbptcHhBjNfYwWmphK3bJP3xAhMro8bQJKZ71oWwWqUsp8jwX",
  "key26": "5FrMaJpVUdBuCVtAVCZ1mCvYjDF7XdVptBQS7tzPWzyPBB8SZTQto1UV3Udkq8TtBF8soJz3MR3UX6oM8z3xSPme",
  "key27": "4Ka6Xb9Jm9RqDKSoiF6mkMjZV5gvxVDzogk76vDGjUCejJY32gcUPhezmLAMZGZds5VHZqigHPFVZL216wjKPa8c"
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
