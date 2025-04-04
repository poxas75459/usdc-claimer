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
    "9kmf75dF1NhzvP8FDM6xP1ucRLjP9RBL27Rchw48PD8MkUo6KgCyEXTfTzYFm7QWAkYaTK4USzeFXuNnnGxET56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usLSjYXzLQFMEmHed3afMaGMUe9BueMEboZJaJQCWT9qaHPkuPBwV6DAxMcNKqCV553WB8dRxFemQDqFMRczi61",
  "key1": "444J2tivdw84d5RHGygMJY9i4PpUzgFAD8vgnCkPWy9VgfYwZSg9woL3QhM2EiAn8sP6x1Z4QbwUgvKii4iXEHzV",
  "key2": "4K6PdU2KRvWo3BvCFGQUagWRrm6XZ438YfgtdKAEAz5vWMkAcPQgoDJuXXQLNMgevZyAhiWrnRURiuL1CGhMYmdk",
  "key3": "4BuXtu6NQAdtySt6G44saRBckmTfr7PQvokWBVk3ABSyWeNTNJGMmCzwpAtDSydbpUv9xETYCV21FJTihbfUU7NM",
  "key4": "jNLQjwcnQcVEkZkqtGk5mk8V3LW3gbdbWBMZ28MBy3NAUFesbbm3sJGZRBeWmviUYh9655ZAmne7Fnb62MApf4G",
  "key5": "3h5iEU4UcRqD6rNMd2fP5K8WnsTmtLArQdqGGibtCkB45EXPmuVa5XuPWRUjC3JF962NUzr3H1tzQMJaqBJBWYLL",
  "key6": "2MC4FkdRb4zYsEbs9jqjAXYKMhMDpmydBNaLKgLUs4hc1uvLQPse6HDfq6nAagAsRcyQFqzUWB5dQ3aKbkzbqNLs",
  "key7": "4gthpughWgAFFJK3U16joqw9x83Q8xs9CC2Gwd3bqSdQcBM7Nh3jumQMvyeiYjJ5MAzZkesFumWZGBJdwTs2fFd5",
  "key8": "3pSZxLJXRcyq4JQfN1wEkdFBC4MqAhiNQzzNCLFHdhveza3kwr8wfwogoG2kVqbsofEkdXy68Rv38upw3nwbtLBo",
  "key9": "29eHjSotvitLt2TTobJzNbdPeiMo2YRGXMHzTqqg5ZZA2Q4WRd248v5ysvZF3B9qGX2TwNvgaBphk6Ckc5wbSNcC",
  "key10": "4cY1FTSQiJ1nFMDPCZvZ26p3HpXS2cJgnuuoEREoCcH8VEsgN1yb6eNmuHbPwUp6xsNE8RBtk5cJGSdUTuxF6TYE",
  "key11": "5nFyVEABjGCGJvuVmkxE6uUFrp44BvvheiJdiZDNTCJgd9j4cWRJy2e1wEsW4jjEMGtvDH3KGjapCjPneaAfDbZB",
  "key12": "QnPndNqU7GWANZd2RaSc4VEGp3Rv7kEviP25yp8LanAQoApz1AWYv1z456YKFfEMxs8jv3U6yMcP3mFyaoHczMS",
  "key13": "2rkEnrSzGqpN1w5n7BtcJYV3ecGanzGRztQZk8hBqt8mra86M5geXVJxeVAaNwvmkAVhgvnFPY3x4hjKVDZ5iCTi",
  "key14": "2qvYdCwnvWSxB8roY3gSrcha5NBboi42rC2ckchEmfwRnYn8SErMZbHV8XLBWwErJi2ntGbg4RJtdY2NokDV6ins",
  "key15": "LoSN7BXb1M7HQBBFRouMZTUttGCYLU51VDgyPgoXS8jL1ihXtL2Bzb9p5QRF7RzyzE4My2ACXdA8Age8xfDVb9B",
  "key16": "45xyTHpeoR4S1CJBG9Gf6JJjfbtrRcYbfeCzrurpNQFqt7LvTfiTKbGydjCJtjWZN5HtNsbwzCqKYnkZDG8kHLGZ",
  "key17": "3o1D5ksrJScwKx22m9ng9BkdrNyScQYFk4ZpA89DM1MYWdQpBm1rULqdM7pz4TFm9S9gjz191dN8TdiUfVza9x5E",
  "key18": "3Pb7wy9Ms8UY93tNwT5SmYSvxkSynJxhDou1qCHYsF2ALAu3fFrUj9vCg3PMMgkZcki4tbwfXYUqe65vRrEHL1A6",
  "key19": "61y8EjM6Uf5gTL3NTaoyNU258sWwVKSWZDuRZRL1hZwVybSNhFpT9DSX7QDWuUYrAvFH1TD11s4u14uCZezc8yEi",
  "key20": "4xKhQW6BUb5Xr2a9dLmYkvFFAmDBE4JsiSWh5spJvvAKSbqsPqC12KKKtUPrAXCkvcsrvACwqojoWTyfUtagrE6z",
  "key21": "B64Wz7wgiArrCy3YUZQxj7RzhucjT3tF3PimN2Vg6v724E7FnLzt5PjodMJgSSy5eYk9XVDaVsSJo6YshfE8KvN",
  "key22": "5t7osBV1af6LAejBDiSYR22KZXtAtjRcz5vmZUDGRdYM4r7WNzUm5Tq7jcKPAgB4jA8jegq4nyxHughq4ALjLXyL",
  "key23": "2taAv2kDV69DxAL5VTpjii5iU3VuFmWa1JVmp5DVYFtR4AGmAFbQZB5UAJD8fUgSqBsWXChnjWkyYVRpmJBHvGcV",
  "key24": "xXg2nicirEJyZQJnZ9fPNHFjk9bzdopmWPmJRy5mzCZhQwmyzdQuK6ZWJ13ybqyWThqW7hqzt4ic8hLhzhL7Lnn",
  "key25": "23MuNccvFwrH2qj6PqCUUC2ELeXwswenAQSRqq5LK5i9vCxcBDd4uSWXMrBrz49NuTxDtPWs5GhGuAjYFisio6SG",
  "key26": "5UW3xqQBT6yThVikwoSp6VpTZ3rfPaiMgiABVHctddFPpn1Et8HnJ4SirR3y4A91yrNmu18nk1Y4iY1UnCbbEjsL",
  "key27": "65df9Rx4dVx9o6GxYwnRhYLayQUBvXhUyhL7AJc1wktkL3gUbBCQMCemHvWhxjeWYXBaGxDvio57V1YitA9FfEg5",
  "key28": "2B9m8ZDLJpTuNzE1bA9PkJmHe8mFjJrzkYztuoN6yTGrwnb8UXRuqd4bNQppANAE2E7eTC7C75GYohar55VEtCWZ",
  "key29": "SPnfj56s6ZgCkQKmj1ue7aeRVy4Fuk62HYQGeNW9tUREwpWgyUKcpXddJ74sD6fL5tULJ5xAScfPuQc4Kdkzz5a",
  "key30": "URzaLr6oT5jkdpZdsaAxE1wABbEMKDdunCRtQGAETk77y9UWgjDSvEQFUHdg1G9R7MAhTVhvLfGMzTDAcSxcuYy",
  "key31": "4RosE5ewiJ8pfnEYmnTsLP1S7N9AgeEZa8C2vhVs8PY7WVsJBLaLGPuFGgpqsTJ4BpX8vynkHMVAXReGNg2eo8wE",
  "key32": "4Hi5LqCJqCnBP3BfRFJUPPRhdkY6256v4hKYQir3pbzb6EWNAyLn8quHjdgJiGB5L3oq1QeHJeapHm8amKrbnFuX",
  "key33": "2WAdwCRmkGSsnRWu9DsUBX9DsTgE8TZutBeXbTyTqzLsUuNKd2JyUgaKSG9uqKv2cbDM7KBbdvo7kcuEZ5vMF155",
  "key34": "2EcXcM3tUsxTdiFtnoPEkWWJG8qhsxaG9EEULMmvhKSbo2GxcUKDC1WCYLJHJmhNAzUvsnYYUR5oVVJww81AnB3d",
  "key35": "3zUwYo2CH7D8Lt9q8B1oXiq5r7EdebsQmXLMo1Hj5GqF3m7XXARaBNda8i2jRRifHMcH3erTyS7ZLzLZcFLX8MmL",
  "key36": "31Y3bYRH2d1fgsAw8y5s4QT4jqmrwZfHsskw2MpgJgq7HYNveL2AU9xLmZuTVefVBBjDTZgyzK3WCEfJ4UYSjGch",
  "key37": "66G8qg1oRGGyDW7RACdn9JrzjVDfu55MuzzBkY7Zq2h93L1fic89MZ8eMJtAVDGgKi6hyDewcKozbFstqFw8viAn"
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
