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
    "ihV6N1LmjrQuY8BnQPeHdsCtYAftVjBQnMzpLmPkvnhUjU54ZXmGihRgGRjMLGTZzeg4PKAhYmVEqLcZWJdPxJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abgqWqcY9vQFm4Jb5oDQcymgFc5exqsANEMu9tXwrxUvSTRxW8a29p7gCBoFHcWn7pYMtTM73PFR8vVGoad5FeJ",
  "key1": "62jPz8Urz3rJ13CmZcvn63QZR2c8btpW1ZFuZsLYLiDXV484sYCeb9h6HxVvfVyQYrgcQwuVLYmySzEGS781srFh",
  "key2": "2Jm1q7pirBWqLG3TWvjhDAvepUSkpN1tAvu6kLArgGeCfBY28FUW3AjWcSxahGkVkNUWXbjgjneGFtA5sGKswqrd",
  "key3": "whzFgoieMeybnen4SUNDYNmoMWgzWxKfoQ3ZsjMAxNBoTeseV2qTfZ95Xzgp8NtSWtiZSUhxYmiJd2nfCAGR1hq",
  "key4": "3TWDkFRUnmwfe9YMm691FtdnSBVU4iB4J4jBpveRvTQTxvLeofjFgcMAfvoDLRf953gdeq3huajcpG86HxSbsfkf",
  "key5": "5MGcM2dmpif8rwT7mpyx2LHsoRBfGcjr3Juq4CAfLNu6jxcrpVMGc1QoWhC1e2W9nykkm3ieg4e4eog2ghssx7nr",
  "key6": "2hTjV5z5bkbQUsSkmEE1i2vJGfeJUojGbWyB1uz578QrZJ4edEjw5aWNcvPjvDD9ZpJoY2yPwsfaYgBKduRxkjzN",
  "key7": "2uVjbUL4f5VPRAzzmo4Kdp91eNz5qd95RfWoTP4eoZybj84rYqJAsU7Jd9u654CagboCKqWDWrKhJC6qSHuCNQ6E",
  "key8": "3d7armcGUPX7zueYeeatdi9eT5jiMLHMDo4QSJ8Yh7BDbq9cpDMGT317u8BapJi4jfcbNSjkUpaxD2Ea6oRAPodK",
  "key9": "54Z4mHdHyx5NWx8P6k9769wPRf7AhGbaC9t6uM1AU55SLy27pvHym28Mfyu2fMnKqiZb69Uut1SvaGwaALCAPwYm",
  "key10": "t37EvdPoetz7EjRvqSdHB5qswCa1URdT8EGd6fAKvNQ3qNzW3cRMMiP8c8emnFN733hLDujcnpZxGpN83tx7Xhi",
  "key11": "4CA2WkHN2BGKVxGCNxpCMhA8iaY3HzDoiFJBPpaBM377s4mSBLj8Cd85bwGH6yGVxLGZ2BCwwDK6rWyw5PMpkpWL",
  "key12": "HLiKbXFpv83WaggMYZd3yVUjDJFPoGptQucKSuq9fRVTjg1xfVEqvTzoMTuWNuydceUjj6i9ewGpEPzh3SYrs82",
  "key13": "3BdRs9Rck4FCfwxxtLywYwSgmBJcs6mohZ8ZXiMQUeRLFTqAwNkcwvbDCQeMPFsZF5Vf1nudTnvV9uKCrwk61rLQ",
  "key14": "3245YUt3tfSBQs6HiuBz1DSQThY3Ji876b6iAddJ3PpK91Zai6GWocTNT7CbMqwqKAR86vWFU4xFWswsBzGmKQtX",
  "key15": "5BJqevs2j9Ad3ea41Pp9onNELRqujPMKPupmgAwQ5gqSD4qDDYm8m3qjAV2XsWg1rTVhfCYgbZw2mAj4tDw5QEAe",
  "key16": "44euRJZWbt1U7eQeYSpKHF5buRVvbh5WHPsinpL3LNs4QTiMQS8aiLctoEgsZLwaULZhkKrJecRdv9qiJW32apc8",
  "key17": "2JxMzrVz7P8ZAFHfcpArFSLZRCFhm9VQyoWZKT9hLKwq3J8LCVbTFjo2LxLcvE55xqQsiE11EwGpT4afyLXAU3T8",
  "key18": "E6wPziSxT47N2ZNM5wWxBv1wo6U3NvDLkZSpvinR33ESGeiAzoL9JBcv1QqhVJM8a1yBnP8YAMa2wJWF7PVP2aV",
  "key19": "M2Mtg7cVGRYda1YAwZMWcyHAbapQBgWVz9e11kiB3yJy9DSccs7Gb4LcDLM9LZaiN8BW4sbnS73euL35Ax3y7u8",
  "key20": "3fF1XrhmBfHBQbFLkzLX1gZQq6abxyV4XzCVgDhWzzx1Bs3w47ToYJsBhZ9M1wNUwnhQinkVSKKQTe5HRXcnmFfF",
  "key21": "3WRybC5CwYyu3b1moq9DvU8P65DYWdubj1JFwLJS7Fu4hjY6HdWzoadNoNfPyWWoUQ21jhUUpP7UogG19iFxTib2",
  "key22": "3Yv3bjh2JsiMoivLAqgXKK4dPAoXQ28mfMj4BWehE1ac511iuVka25aUzWCRkLMvRbyG3tSZVcYAQgzxpkpmPfYt",
  "key23": "32Uw37nfe5DUbwyvmo3m1j27ZcgXH9Ky3PW3H8yQv5koqVnTA7o1f6PPoXKSJpwXkNbKvJPbiritHmfK3tzMgcuV",
  "key24": "3PgHrE9pnLmwwDwqhsxQgM9872GJZjjrMgX4ExkcP9vCz6XZL16yyToX9wn2HxQSDg6FEbS45NvbWJJccMPdQ31y",
  "key25": "nvaE8LyMMuisoVyBJxQfgzaiRLQK5TruVdHck7NWkRddZRKWbngk7Z8oGe7Vs3E1uxqUDNAdja9Y5mRdAzb8teT",
  "key26": "3pX4Zqw8wMffFn4mFjBVN1aHzgVAhEzSKnh8JDDriGAfYo2xNqDVKTrQfqvemrWK8qGWu7FTaUu8cqXqLq94vQn9",
  "key27": "34rKfUCpgxzouXhs4LLyS48qnySnXiW4vjPuSQzBypFGhiTe8QmuMvgD8C1EcodAm2VPizct4no1AC927PAetwqU",
  "key28": "3TN6UFkgqt683QkEquC3KmaXtMu33EzMchFDryEXmu7p8iBGEwu82TEeb939iUzx5kQb9b2qvyTphzpcNejWPdKr",
  "key29": "2T8TKagxqNqxF2FA6pUMquxUFwRvMurJGbPFXZDEdzv4BDQeD1G1rHvXLSgRSDi7ahhRKSScL9TZSS4XHXDEesgi",
  "key30": "Bh8v7eDb52gHsCuN8vkfEv9tSkNUzR1KUGX2RyAUwJfXoeMhn9ZK8hYZAeAuyVJe7qowoTSboJoj7t3a2ARDbb1"
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
