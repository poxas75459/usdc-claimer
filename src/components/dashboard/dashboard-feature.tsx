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
    "25DqBxjMEv5F3k6R7RqTBaoHryycdf3yUQ9Ga7eLpgzrCfisiaVEnW9FNjX9ZMhJYXgteH1iS95KhWU1ThdXmtT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzyajRufHU375M9r3uQ1ybt4iDfZzb91M78jkv3ypeEXqzyUvyV4BHxUPfrKZ256mBorbaBnwFFbUz6BmgQnhLN",
  "key1": "3FAoF69TpTUsQPHUhrRwVZosfZ7R4TZ5cupxw7k7h58U345ko4bkQRrt8gD3dqyuoPf6yoB6nN637AM2VeU5TNa4",
  "key2": "3T3xTqS25tLASMiYeQj9NHaBDF81HQv35VfTCAmHabDMdnVbTFL46pTqZczQ4D112xbj1TfuKpXysrKYAkk3AFqm",
  "key3": "4CztycGwVTVNvZgViv7JyhUUNLyY2Yj6CEwE2qTo24gh2zh99pDpYbRLJUK16V5VpdGT26yNPqUGAvpWHxn2LDdi",
  "key4": "2otTvRmzytvd6JgtUGpmtDtxuVgRkRdHzodJ5QmPjNPxZqAFbwcdUwRUtRqSTQTNsvX6nGufmQYEjbgJJQzNra3v",
  "key5": "5FYF1PPbqH9mHRjHesWGyuKZ8zgN2tHT2gawaweCszkNtuBTjVd9VzPBFcduim411eJCuncDXxYSCdi6tUXtZ8kW",
  "key6": "2fqcC9UQie1rvdBMuuv2Y2itao4GQxq3krvxgHiLPmHc1LRF3GiNnoPGK1UGDGud76Rf4idz8H3JED41ALnx1hxD",
  "key7": "2cKmjyf6ihzZ7oivmWgstfK5RtrAzJb6errVnZBjTdLX4dZCSeztKP1zSvrrjFCCr9iZkPC9X8KS7kx1H2tyEdcK",
  "key8": "2q2d6t6ST1j37NEaUi3XCwhs93uhJvgGDXXzwP1h21pRQuuEqJdCGvJy3k17K8eNMxYddFqhEpR6DZvZxxhJR34P",
  "key9": "4xgARowfgLYyCEUUKx8oj6BPQEymzXewfzieEAnD1JW2BM18ASUpmR6X2QnCo6qywGNeePveoZ3WLmYHEJtTkoxh",
  "key10": "2S619GsyaN3AzVakZLoK7jW67CrcqukyoyeDwafTfYDiHFxdrWP2mPBFisdeGhBVvC6BQTjxxLi9E2cqnp2umBTn",
  "key11": "ZtHYD5dikiuiFDpoFrE9nU9BY9eGfpCWiydUU4uRv2YKtWppUNknQ9yBXUZXUVMGwrGDBHTEco3UAJXxh8Jhz4f",
  "key12": "GNYNkfB1PTMiqEEjcvdr9EEggo72XA2bqdvx1gZgBYHxWCeo43FLe3yUcJjnxsixtpDvx6jTL6wjjzPYc8QCm4a",
  "key13": "2oGtU1aCryJG62znDZXuHHBCx57h9gZk7BviFib6Grs5biv3WtV8xBmjQcJB22P9YMjDZy7KJhdRCNcCNcAN7BYb",
  "key14": "3ZpHzkmUbM9ka33KqMkFjJu4QCTQY6sSvFqa6kYfMA4TA5abU1LD58LQqqjP7yEM98UxW8iuAST2wr5JVAY2toFn",
  "key15": "WgSB1NvLs5TGy4EFUEsqQSNuwCXiSUdQZKzsvKjacGMxqpZWjXd565MpecVoaNLHbbBYBhjsW7jAT1Z16Etf9wk",
  "key16": "gmeArcAskkPgw1sCApWnaKiBn4cDcoUEVXAUkYzNFdBXhJuN4ZHb4HgYpGBTjsVeGbcSvo6frUH9t6KRD1BJ7sb",
  "key17": "4mUXMtAe9X4Acz5aXqcfC3H82MDqM9n8wGXScRNch8A4fVo5zq3Tsnk4yyRbFPvzWB6VT1gb1Q4UGr6gVaLZfcpR",
  "key18": "2wfxKp5dGdYq43mwkAkJomNy8dAdGd6jZvPBQFzrCwA3p2BDdLQmJAtNR14JGqKi8EZ1L3fUfv3MDm9y5brKDhmh",
  "key19": "224LcoU1AxcikKi4U6UGm6gQ3uGYxvXPBhYk3jZhFkXHjAq5eDo35caUR7JbNcW1ZdtW3CRdfSw1TG1DoeaRXumk",
  "key20": "4U2mZoXKZDhM6Qsz7RM1kQDwuUQoi8R8N7AY51xswhKUdDbMPyaE8YHsbVjhF5d1jCDiQgthQGxCqS5Fo1R747T",
  "key21": "3MXQo673iaDCQJSrtRiyzpCeGiC1JLUEu93j8LacyHbHisHJRWfCpGLmqMEHXrcSPcwMdUfUYiqeydF1TZt1V2Za",
  "key22": "37M1avQmNLKHSevhCYpNUB5SK8uHVKyGVruUgWPXRkwYUFzVL53vveeGxSc2uJ33fhLXJLmMraw8hbfJBGcjYuuU",
  "key23": "8puZ5QXt9he4zzL7CvL8qUZAovsstNGVoMJziCB4DT5fmgsNh1gWD1GofN7i8R5NUKQpirMHdh3CJNvbKAjKhFy",
  "key24": "BWDsMV3NcA7LvZCM1dqtbGxeBEMHS9wLB6Wxr1MuNCyZLHH9MEoSyAcqK4H5BVRZ1c367kcs3eB4oSHBEF1co9h",
  "key25": "3rjrWhYeAqUT13LdtXgo9K4YTgkQfZ5fbvePpXsSjq4AgqsmpeVhsCC61cnnwv3cjHidmBFye2z6hHwwP4hEjkgD",
  "key26": "3EfFnJtKRroU3Ep35eXiJkWG78xGQ8JrjpbpV89cfFhCL7dXwkjF4KkVLdyXLEnxNoiYi1c3oggRcXWVzHg5p944",
  "key27": "4MGDofJ7zfLea1pqvMYSPeqdXHmDZNbk8u9ct2kHgPR54hJvuxo43iKYLapp5iwSN3q98QdrS9Uk3qFk5aeupfs9",
  "key28": "44LqJLw5LREwDEFXznX6VSHHEyYCsRZu6epnKEJ8QVizzvbWLMVwmRdjBibVqbfhvEw6qJboUztLjm6wzV6WcWyE",
  "key29": "3a3HbZnpGEjUHigfni1Gi3iqZRdksR4mXrfJdgwNMBtZSX8vFMg4ddwHwWsCfYbzp7GYtv4kKgAxyk12Uadx2APS",
  "key30": "4ub7kSsZyJWTxSuBWpsBqyQkZGXqzmmnesomQSX48ujyswTqgU4wW7cGYYzkbNhez3Ch9DXcXFntiZRjHp5Laya5",
  "key31": "3p3Ttv4Cx8c1tACRj2oJVoxNqhca5uhufTxaT3DmaM9C9eby2Vp3KNoiJGuQ3et44hxTnJrJ4FVkQoqAfGT5a6yJ",
  "key32": "5fMEgQkaMwWcKku1mFuZqHR1GbaKeELCR8M6RJya7dGBk45UbLJifRnxQb7HDjoVysUSdyi7khWBJAh3DP614BY1",
  "key33": "4ynbqMTgJoY76Cb7BWwtirNk9p5xQr1U4c9xSei5GKhQwLRBKyukVW5qD3TCchXm4UpFXquzD2AUzwcx6K3hRxH1",
  "key34": "6CCHzswH98tKn77FWyUHWd5HhD8gNBeBVD7nzhLV4dWSTiRHUoG1LviHjRquQGV83AXfub356tdEDiWGQqpdAeM",
  "key35": "5ujGB6X5G6Mi2CTKxgQyU7CHVGnpKzT57PtvfjwVD6RsPs1EMrUDuYD9jvxhfmcyipdzZjduWKzpsiuy7dhXV9aX",
  "key36": "2JXHRijMvU4QC1L334i2hy7jie8Hac4iffd3cMsXNRJWsX6i3EUk5CKUjsHagJzH3gpBY6uuw1tQ2GtyjWvLiGjD",
  "key37": "3E3rLZJApWXoFxtgBzUWpcZdhvPzvXPMPfaUuSNk2cRDEyKjwyhmgqwdkzwm7pNwdwrqkq7cGKeHydFYEX5pe5QE",
  "key38": "5pTCbR3QX9rjuUqFAHJQ9uAvM9216kawizBUb1qXj1R8ZLw67ibDnji1bD7vYJDHVZhmyoWqG2DmAFqhbz2bjrt",
  "key39": "32AZZGimzj21EwcrPVRTjnnmgfjrPdHbbCxC3AZVfhoiPfBseNT7iTWm7jgGr17S4xVeSQ7ZbpWtjyEBdf8okJb3",
  "key40": "3cF9JVXEo3n3YW1TQhg8BV2sadrqyz3L8gxGoEL39z7amSDCpmwrm6UkMgRt1Zq78BfffT5uAPyfFQkZvm3r17mM",
  "key41": "5FkeLdt4y8rh8zuZvniQd5rzsJq8JJqxVWsdFNyrMrbrywoby9acShViAK7TSnz9845QA8T5TxJufEgqF11v3yHs",
  "key42": "3GsJ6agsnb6T7kREMr3VB1Qon36esdxFHHGfi4w5dV8HgxRqoYXKpiGGPA3kTFtUh2KPwXNwj9Kfoqq4ktgjF2qH",
  "key43": "5A4V2CAStPBAZXdMuUQ7CX6scydibeYhiMPNoViLnW5zXYJQLVhHYepL8X3SVhG5nzGYEhF1Tfw6tqVeuX8AxSMc",
  "key44": "3ns9oaaqoZjRtgVKWRmVGVSkNfW5AkZjrRZXnsERniaG1DT8HapCuvbCqs2Sr67KmQKNhDQ9bVogiFPcCKj77YXw",
  "key45": "3Wg7DmRxfrpAySX6JgU5qLsAEVueyYZPdXj3TysTmB5gtShRuwrPBUYvPsRYMoFh5Z7kXi2A2FnJt4SJ2aZnnZtZ"
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
