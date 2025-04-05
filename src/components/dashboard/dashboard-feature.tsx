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
    "4QfCnm2uXZqKRZsuFLXUB7cWynSZXgMdJTZcee8FzvUWtBnDFPzJ1Reoj94XcumsaytKWiLXxZbNozDhgMz55cr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qmea1BjNyXdD9RbMNBN1cUgpmvDwtJLivopL3tVYPftQtrdd3PxS34Xh6PN3SvRVpbtnT6FbjpWFMJyMqTPSUDm",
  "key1": "3SitzBJNtEiXgWNcPvrrF3Hjvbn562g3vT9GtAXHFqVboGddiQGXBmTTUUCQdhxfsEqa5pXFNrYimKqNmyYC1wwb",
  "key2": "d33QqqCr2db5WsdkPuFXY8vPxaoZHvs4MsVmQSSmDxnAeAibCnYtEBVmH7m7PwLoHThRQtNvuhP6KEPTrXnqU4e",
  "key3": "2ym7b7B32ecc9TfZupxJQELajwvGthxXBHUqhGCArcK1kmvvTsTsoYEEb1W4ErXbj5vTziuZWbLJ4rQFVjnBEvH5",
  "key4": "4xK5rdURVN1m5GNJz45YH7jzNioaDdc5wGFh2nhmdawQZJfwjNakDebwEnxh9s3WBko7ZuUBniisEbsqzHZUJt52",
  "key5": "rBYobK8w6k7ztNgcUfXps98CoAKXAEejoFnfp7v3Nt4AbqLaYBnpwQ84siCzsRzLtKTDs4QPU3wUBfKwwNwKZZn",
  "key6": "2adskZhD3BsuXHYJci13WvmoG8aXienzy63kiNJMAGUsoUbUB3FBP2TG8M33VnPi4wJfNtiyqJUNHrPtVtLHouPz",
  "key7": "5SxevuAM3JbXNAVqYZvJDWv9FpXADUUgDHUG2i9KyWnEMigdtZ1D6siEfg5ibR71yzJsxY2bxHCkFoxUkitvW6gB",
  "key8": "2FrkMUeEsNgkz97f4zzThaUmqpf2hagNX8gYi3WXxaRtWN46j6hWBnrx13dvshwKVUpR6uKrbEjZy2xmS9Jkgxq7",
  "key9": "4GGdthYG5ZBTwtXEKCAmHCYQCv9Vmp6NkoVyb4RvPVmMmGtyRrHsLRac3iLo3AoUP16PfuEtidCGC1iMoLTWY4vp",
  "key10": "5dtGuzuaz1KVtCJzWCrreZtRHHqgwgW6SQv61Jv54oPSUm1rP5pYvR1QVSCDn5q7auXUU6qmdtswy1Hn7CXqEHQw",
  "key11": "2RV7snUKWRMrgTLPLGhtLxxeZtTnCw7xZRCV9eQsdTFZnvBXuHDxGJ9LchG5pV4tomUkLgmTk3Le2NW21NGCq1ex",
  "key12": "4acVKyrGnEheWv9v2aej7u1wyFPX6Y5zGTDAqz4XcUDvg3zoo2m1ZvEHAFrYF9Rr1UTAt3D7mJfe3CEwqKM9xn2c",
  "key13": "2CaucfdqNRhAka86kin8pWimjpg5s3VbfdmETSZ1bGodAhdhGENDaY9eWGN7Ff5ohEheiusRqhrsnnvVJa2gQGDe",
  "key14": "4i7WfV7yGGuu7n2UkbtQqt5qpZ6qmeKHCRUyCGyc1aGD5w9M7pZxmcVx7kNKnpyw7gDTm4aL6ELqT7iDyqeTCP1J",
  "key15": "4t8m43vWgoJpNytwR8Q3yAMBSsBWrZ5xtGufKNgm4ynS3cXHcaFP1NRjyDc7hujMaxMYxfjuJRaHCNKYPLgY1Z6H",
  "key16": "3WnxP9fkdtCWZkQNwSeYZrLbNfgS1kXjXLwDAsaHmc6mryfzWkq2MqiGz3SFAkePpzPYy565A29RJZMi5P9w21LD",
  "key17": "4mcn5bSxGL766RXBEpMVw83veAQMXEPVBkai1E5bp9zxj7DVkoMZppxvEr8EDhvmLAH3VDFq46nMvhQ9EGFtgQuo",
  "key18": "4Zfhx1iquXxXrjE697Mx1up8kfo2DwrWEvTqQJEiAtszqeu9GdZjwUMicju4QM6f2Nf12skBX3CZdKUh56PG4wCY",
  "key19": "3rNWJPqYegjtXeHcDgvbroetUNkKBkWQtKJ7haBBrMoAFy2TMvGzJLsWipoGWePMxm3ZNph6tt1bbgntywjgbPkH",
  "key20": "2GykwmpXGw99h2hciB3Cfnr3n7AxF9upHYh7HXPg3h5coBYukLSnxKFZALfqpR8GhFariLDrP8zwhsQJ4u7cLxE2",
  "key21": "gy3zSwmJ8irH5R2G3UyQw2mWSeFkYPG7ChtDjHFFbdbD4z5BnpiNhUGubaZ9Ypge5z5VsUSz6efjPuLcYzffXN5",
  "key22": "4DqziAEyJPEAvCSurUEPyV9Z6cDZKiPmszFSRtn4WpavsA87isTHmaCN6sEWjeGnQ9GyxtxK1tL5cNMurhKFNruo",
  "key23": "5cU6ssWZteewtTkRP6Ds1Q3ooQjSBYbAPMaNqmzcftDhkN6dHZUV6dr8Psmk7wWfhaPCBCgJvUUPbSf6qfmYwy7V",
  "key24": "3oa29LXyuSUZVCjGFiJka9pG5FQTPWBQNVZp1UHhyXrfk2yd3VXGV7PjcUTSEKhGgL4a9qHgNzVGyQ1NbPvkomjQ",
  "key25": "3hTudxMcY1Y7kiqW9HtKoitihLk8LoCSe6XzmpAwXiZvSxsiVnWZPdXa1ZjqEEqWGmoNhWaw6mBhcUw3nCfPgtvJ",
  "key26": "57BsfkxbQt2wdAEFa4NLrTEeAZf1jHb4fhdQ1dtkyeHhn1Nbai9NJ5CainWcg17ZzMiTSZQ44oWw7v3oqeJVv65z",
  "key27": "5vEfgduFWfVGnZvQ2H4tVhsP3MFCquJ5eFCZaYFbyGYtLYN3UdPd6qSvyVcEEzE7yJCyWENJvFTMqaGwjAXb7j7c",
  "key28": "NLAhNpArDmBMbM8Qcx8jTi3gHQY73LvzMqxBRWJo3aVT3kqLHgnRSeTetjKmSiGZoAYe3whcUHjNjqkjN57rQd2",
  "key29": "5P4y7d6WxrXnezG4q2M3syQhbZjsXhZHnMc8Ez5CJpqeGr1DUCkiob95qk1p5PHpXz6VfAKnWXsfjs82xm42HvZF",
  "key30": "42GKTJa4RtmWJQy6vK28ZV9fHF9xDnkx8ny3hLv1bZxDgSdXyjjnQFCXsuGRoxRjPjEE13XCUhP8eW5usNhzVFN9",
  "key31": "4Fc14g8HfgXZK2Y5ZT5ryoZkBvtb4o9svf5Fpok35Ep3vyyhiP6V9VUQpK9SKaoo11MhNNsmSsT2gGsCT3vZjV24",
  "key32": "2PhzYGhoU7TPf8Vr2EUcJw55zCWcseYnHBfFckdZyzJ4nQQdm2mbHPQwY2FhMqwwTQQhbrXxSvRQ5EsSdcsf3x8i",
  "key33": "2E9jcmzKa5g4DC596SXCBGNtE2KBsq5phLKggzv2T8WD7HwWYoez8cACTpGqLzezKmvmUJX8Fdjtk3VADojHcvxd",
  "key34": "2JazD73NR9DA9gmBdbjeMGMN9HPnSs5kqm89LChj8nF1qznSziUY1HcjrkdLCYuTHgTRYyW42qComEQKKETv8qAE",
  "key35": "5ywWCw7LJRqAn1r1qfWuj8MKeMhBZMuXtWWvwAVF2Rmc8uqi7U4ztdhMigz2GTmESuYpuif1BuiW8eqHSCMW8YjQ",
  "key36": "4ZV92dHLYYC3rVz12hSc7HhdMoRBuZho8hn7t3YQkFMLTw2EsnTBtgWf7hYyqRxov8VxooqitQSjuY2QQMehqt46",
  "key37": "3WUuCCoEkyrxSh1dikqaztkxXmCi1DHjUHrWuczyi8mmG5qJREtjNK3UWgskWkXax17E2WGRQ37wVVmWNz4bvRxg",
  "key38": "XP8YRoEGUHhnP6BMXXWyYyAa59WwuVEHcsJUGek2KuPVStKq1LURLHJtdqjibjX65E3dajUc4soNEot6dN9i7Hi",
  "key39": "567JZoLq8KatzUJx9CpainGuiHKYtWFQ4m3QA3qqxNJUDSRMecuTDcRPssNWgaphw7DSdsubU6VWoMhmfcFsYHGi",
  "key40": "5WeMdwHMmqqb8HXXmUSmmYn4WcR5xBfzpHQR6AeyBnJPMARCSBDW9PJ67JkJRfyQKWxv7oJxyW8rUL2hL2dtcRBY",
  "key41": "cts3gJssn7GNbpLyZK7N9iCFV2eTBfobwPCUDZ8E837GcTNZHSQMq2QsYxudTabApBHaFN415fkQPm31F9Q4G98",
  "key42": "4MzzKA2BPfBZBtorCqJGLpxK8uit4Dcz7P634ko7BdgP7zXiTCddDARKNQqfpA6yY7QiitcCqrzsF33ZKpyNrsrj",
  "key43": "2YVi72BLcMZYMeuGkGeFmPRNvuDpQWZXFkwtLo8q4fLgZPmGx5qNfc6i9npmVw4GNqK4mGuYfhrPxQhyroFf9NXP",
  "key44": "5j44k6LijEiR6rQsCNt8UHxURqGoki1dcRN7LJ4t2oDaZEUSiqP9dQpTvUDfqmHERYbkubKhbDEqaxk53gy6Z3qF",
  "key45": "6VQxYXJt4SMioKMasUgnkoN4zok5RKkpL1aJEA6h1oxXJBPLHzNnXby9BEk1uC3J9ss6bReqsTbaTqd1xUFqkaB",
  "key46": "4ZEBqaJupfoJBGdNBh1y1WtRQbWahcqBmtPLLYNmEVwGWM7j1kzwRQHrPfBjUTYYCta3j9q2AuH8h7ENnJ6ztai8",
  "key47": "if1QqAAexVMtZJPqCjAAryMz9jfnuseBY1Rs2EJ3wQSrDj3hxG9E9Zwdo8EVi9Bmr5KRAF9dAEM5C9P4JzvJKyQ",
  "key48": "4Jyay3cgSs1pXZnA9vqJ4xfniHdrNVk23GcmhqbwxMyHQx3yKsVdfVmwZhmhkFRHmPPWV4z8DHLYS92vcJEq3cYC",
  "key49": "4qwNFzsngnmRnSBHsDJa4JvUj6cHVxtGos3fpjyyFonXCQAhHQ5QbCvBtr7rWbUrZYRbKqncErVWi6n2jGKH3WRV"
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
