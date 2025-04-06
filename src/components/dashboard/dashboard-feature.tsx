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
    "2Lrn7ar41Ezccw6GburwA7uGZJ3JFTvwmLT3Bf3eSwn63EThgorTBe72wV67DMsZygBiBMMKPWLpPp39HFBPuZ54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNtRiTQE1hvAw4Cg4jD5BtmX1SAKd9mvHt2FjHC1dLgahkZZgsKocLoc3WrSmRZS65T7SdBWigNJNPDLmR3iANH",
  "key1": "3ayA5VB1ScbKt4tF4Ghe7zcUajDKnYhTmWL18ft6c7wjiuYXsjGgxyjd4dVaUtKEDM3UGV9GsmNxqH4piUdFA1QT",
  "key2": "h6fTNW9PZEjxxgJFmhjxYR4RDYYK1HixDbNpMT2ZMBiCUPocPgQjs1z2nTGBYjNzo6fpLFKAuZZnfZeQZ2LTUGc",
  "key3": "4QBHNzYnAyJvj2WerWsSstLKQziRxt2WeDRpoKkL7uWauPKCcMyhnmZnD11ahRAbQuKahK2ei7AwQs2gzpWBoj5A",
  "key4": "Z9AhGcxz8WniJShHjdjnid9AtuEZVNkwJ1EwN7kufNThjxvka1iFrJ9aLcurjEfEVSqTMgL4MChgE9jjZD7pwo8",
  "key5": "41gALYXr6KAmS2jUoBwTy7ViKc9Q4CUGnjT4x46uhy9Dcs7kkdhUX9EPHt9f7PXb93jRvmuTsKSnAW2qYBSZuqQ9",
  "key6": "2GzQKL1cPGLG79HMkHgA79vjHUJFMWcrn3kbBK1gdVABzxPN1LMtciTZvncdmvautuKKqsByox4ekitnapZxq39p",
  "key7": "5CP4NRZDESj4XJCspDkuXXeyryWmra1P4AUoai6hCEyYaZhht3Ywuoh5YMJHMxyyzug8dFmLpVm1FvuNDpzzQTJD",
  "key8": "2MD8UHgbunbKdSVSxs71Yqbqc8LXy1NW2Ugj7gRqtGn3r3y31KpG8pTv6SrQHwDpoM4t6UNS1diz2MvwGqnM4PEe",
  "key9": "5i67iiYQH26Y4iog1tDEkGxDC5YzW7ZWMfD4jmErqMaHYuChGxPeQSf5MMwHD8uA2cjVb6oC7PaWC3ks6rHjNmoe",
  "key10": "4zu3i3ipivMhrKX7cVQHoxJv9w6Nm6EqgavPyeRC1dhfLWLHhy6LQBmZpZabsD4CurFUXG4CQmx9f4Tb6ExaCXrg",
  "key11": "4mvyrpANVC9vQuhT2ELd6wNNTEKK6AS6hQSk4AtY1YkLfucPiHLciZLyVRvLSUgnAWCydPdzrEwYGvxkJAdJ9Emp",
  "key12": "4bpFS2j1XtX4sJoSM1A8UyXkLJTu7nZ1YvneGKT3uXYPPHKsPpxEbqM7LAgn4VzCxryAp7gsnVeDDyTvUEi9bLjZ",
  "key13": "4jcU7kDHxWjxcL2b3trbaJ6Qn4m5i147QJkJXAzxP8yoyFjxH7Crw49XvCsaP9vZy3Roxv4iAZcdDSmwMRmxYqi",
  "key14": "3Zeyp7jAqocGoukv3txxXZPv9FaqF3tH2KNk5Z8u6qfbG6rbhp7yPKz9YqfaLiGj8fugNz5kA4xamFtRy7byMLLk",
  "key15": "2bAKgStYhbYC84jMQ8rR9aF4z8cfdwwHe5d1tcKM2XW7Xb2BtUykMd68oPHvZ68KjNPaWt5TV5kwCCPWz38FBg4F",
  "key16": "25yeXHwY36fuUohenFSscRNArKKRinzevGW8uy5LH7NRYdcgxNBkQFtHx7zU9FLeqF5y1CTdEyZV3dd7B7o6DcgN",
  "key17": "3vVQdoyqrqiFPPiqs5QZvG5ZJ5JgzfQjzPZdCbAftr4UUfuwBkhZPtgEHQVxxwLm4x4bZ7aFxhwxJe5Cdy5FSCyP",
  "key18": "5QVq8BUHjcogceBCGrJ2q8n4SXsHWUidA7cH65gJCA1amWyve1FKadFQUyNPVs6tNo35Pk71MxboT2Pc3YDp3rta",
  "key19": "4AS8ZC2DBLAQWcRtjP3k3x8YCvRPLrvLHGRjW6CGg6sf9u7sioWts6UimQRmgNJyBQ7sofJoa8AzsdVVjBYCZ7fE",
  "key20": "3hQYbzSRErSbAkaUWS3qD6PT7GYES2j35idTh5ZArx9h7bftgdFAeg3hJhP2SPbDXzPfxv9q9hpi2q6prdZmkNcv",
  "key21": "51eruntxe4LVH7Su7h2sjfJqXJ5R2Bco9Rga49wJQBVoyzbdWZST3odUtFUy5Vqwp8TngPPDzR6PZ6p9KsYza239",
  "key22": "5YJ4at2hDtSkEB9fp7DCYt2U5HbaEpExasDnTcQNXbn56ZPwXN6af2RT9Cuv52uRUzfKdaQUi54gQkdcBZoD9vZM",
  "key23": "6dL52D5SfbP6mh1i6Mnbcu8kmNEbPgJQwXdKAfj5vRTS4T9r4dCHhXMYjWMyn7QfeSPdB8EBwrsDYN27cbwk1Y1",
  "key24": "mHNKAdcnvK28RExqxx83FcNGUt3wfbRr1pgSKuVfvFA8S8sdoK72S1ruw3rbwhP3bWGfir2BzP5NvrQh6spTv8k",
  "key25": "HQWX4cQVuLkUgmFfjdz3UVo5Ptr24KAVXCGnQcfA5uDwm1a3hVJMCpXqCjCyNKTvm7aRvqYKMea9U1ztvbFLzA4",
  "key26": "LcXJkwzhRagstUhjGqJ5vfAfsKFw2HtfNpjy2f3NR7YYQTNiAW7LhRVSstYfRrYPkxkaeUjz24qVzuXfWTsEkaa",
  "key27": "2xj6PN6UrCZxMAnjqDqfgmvLjCsZhZzYBmAjQwhk3Ec5yH5GcAQJbaN29nrXWC6pZtnuFuRYCXehQgYvrcvkstEr",
  "key28": "4j5g6Geve9yczEGzZsV5wPwCUvTYGEtnYSxh15uJGwAZNBheB9CiRFGUPA2P8Xm2qtj8jHTAFn5R7N6WJY7skbxU",
  "key29": "3zHYqSs5zuJvqiifn6BQtBYp7DwxkqdPC5kp5PrAkk6pmfCzZYGirWKxNfk2qs7zmQY1KEFvgrK7kPf1YPtKEeTz",
  "key30": "4nFh2y95WDoZjojL4RVSTRDeGXENDrJ6R3FZjq7rvao5q2Gs8YH3eqSZJ4GN69nQQ4bkXxNQFMA8Tbx3rrR2Rzop",
  "key31": "h6u2Q1KSRrQ9FNdw4tPmLdMxfDwWEr94j9KkQCfpUWPhwVV7HM2a7bxm7b7imC6H6stEZH3jMTFpFkphgqonj2N",
  "key32": "3CssFCepJ5gwQ18CM2AMpkMhosPNmVmjsFMqJd3HkjYRMCwReefzaidmWavv5CnseFXaFbmKT3mdYxnxB5jELBN9",
  "key33": "JH5JQNm2FZGdzC7tZmCH4efZFd6sXiPpr6npJ5WsUEqJ6o3Cf9jSSBo2s1RHoEFswm4B2UiYTACRiD7wPFYL8X9",
  "key34": "2kd76eFqtgTiKPZiwJEYbu9hNDm17mtg4a1CVP3kMvAykhncxuHPyjpppWpjNCFqH4QL1rbMd8qjXrXhWW4CNBTQ",
  "key35": "2ppDG4gRUC1RBpzeFE4wNanC7c8NyHSENH2TXjSeCTvmu1oQqxioPsbDv374zVwMuJ8cEiMTKpEGda3MwjSmY2bU",
  "key36": "5tqnE5dAQqvM98c8YbRHkeqz7wBNWpPiD5JKfZc6CiY6AN4Mbs48RNMW1mdUNdvGMfoq9PTG3uKJZ9httXcA1wXK",
  "key37": "4FTxqLWuqLEEDLMkSMSwB43xNgB2cNjbp5UbqVFoVpDiwHsnjrSwpBFFyJNNSXtasFLmqcT9ok3CFdYJfucBPJmz",
  "key38": "4BV52y2hyUC7biSBjRmxW5dpxQrcZsVp7vrgMy3TpUL1zE9HAThaYs9F7DhwrwhbCWY1EyQheTGcuKi6nzmUy7ks",
  "key39": "4qNqAN1Wo5hEfHcMjtvubrZbssY5FyhbMPqqrCcHFvPL43R99didHqA8Qp6HgUan7FX6fZxBiJuPN64VKcwY83QL"
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
