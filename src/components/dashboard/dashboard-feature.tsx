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
    "5F5MQGfvF4CHQ9FUnMu6b4JbBmHxHtigVRt7dYeSybmaV3MWQP6gxF8zkynzLEh8EDi7Rp3pUAyfbUa9sP2chXCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6Viwz7gTxJcEK35RNkYP1aUhn12t9rhRx481zK5Qc3D2cs1xYo9eBqiDu4wW735cJNeir68R5HQnijuk8US817",
  "key1": "2stndGwMjPmKkCpVSwhbgRyapR5iGXt4ZjheR4AfZYy6FfA3RjQbzzgY6h2bdctawP6N8Z2S6he7C3oH6qbhJzNc",
  "key2": "3phKgoyHGyHu5p5T2L8B3J9wG2QBzgEQ7NHdayybL81yTARtr36QiZeZNN8TZKcwefM25ChLhHx9NGWrW9r6yYqv",
  "key3": "23bXXAbPnZQYcWEYPi1GRTVZvciS79FPBRJoTf92soRxJLWcKann34j99Vex6QgicAyKPqza6J6jiYqMiJSAd5cZ",
  "key4": "5aYkF9BNneCyp3QjEKHBEhy56URL2RzLgaTctTb1AZQERs59wUoJNpHAkFa9aZwvis5zLmZPbSW5wVMwDjgPuLY8",
  "key5": "3MMVTmM9uKQKf9SkD7hoymDzsWJhgY43DB3DuDsJ3fC3SDGbznQea1MogATroR2hLUSmcT6BbhXgt4T7VTVqTKtK",
  "key6": "4ZnUDGu3UJ4nRYhCnDUzuYb1azYXnqwDih2MDRF97MMzGf7Dm3L4rinBq7n1FNQSmxNqsnD5x2wyjrgYeN1vvwZz",
  "key7": "4ACQgsod7jVh3TZAAefLZfnANBgp5rEde1xbWtzmfcAtH7gHM3MZiaJb4Ndxu4WwHjsemw68AqRQ2NSviKPX97pf",
  "key8": "3vfEwbHde2zs6RZagUdH3Ze4NVn1fhnj1FYCPKwDiUqLBoS6q5Tw8BF9yEyDvqJtNKTo5t4d2qaFLDNgtiKrU2aU",
  "key9": "2twWt3s7VU6ZGKTgf7uX4ERP1m7ARQJrRFsfWp9BYZ7jFyBmaXNmByQyB8tMfTk2emJaSyDpR9sd7f66PNG74vJJ",
  "key10": "2UhYR8zscFwwA1tZbR8WKAqLZhAETTNF6CDoRpKBUuFQfVwcLfrwJgYz1DqTu6aq9SEe1M8ZqBey2h3MVGAD7LNA",
  "key11": "3YmWyF5wyjg4c2qzdYUW5ZYJkNuuZM6RwUvbzGBuhVnHaLXhhoB1Vwsmf3vMrquqNG3Zg3hJBXay713UEhUVGuAh",
  "key12": "2tivSyjB8fcm5fd2b18FPACM6kcaQYwDqQ79puFc2Tn63hsMku7x6zuWLfQQgbBa6qLTRBivz2jtfAiDQTaJD8rh",
  "key13": "46VatcLfJWkiyPsfUGALUarLQ84ER92PL1ZnfpCanN5sg1FcpJ39vACMQCDbZ1JN7mt1LTAPkCd6DKp7HJevVgef",
  "key14": "sDGjPBqhRE38yMkgNFXsPLVRP6UKHcHMQZawPpYWkwk2yACnz2MqDZijvApvqRGxh5qh7J12f2hKjCGhPE9LEds",
  "key15": "2PiqWa4TvD84M1Rc8px11HdkveAdTHrT4Ms3rDrbvCiYnZWsiAHPvmE68ya6ATdsEeweb1RXMkJGRg3UtRJzueGu",
  "key16": "2MDHK2dpN4Tgc9dSzpFuzjCoHYmc3ocGCNNod6EVf24bBy6Ptp5ybVmLtNd5R9TrQkELeJds9n2geJ6upnWzhhFo",
  "key17": "2qh6PLi5AKxmfPcLyutwP2JaG6y6Tchcjqi7RWykZvJrJvzyz9urqALW5W94tCkyzugfSxFksqzM16Pst4eckLDd",
  "key18": "4oTjbCcc2sN1AjSscEZ5ofjXriv9UowBZxu6m6i7GpD4DHkgQXMrx8xFkDF9PWtVeRSvkUtgqCVdjanvcpzRGNK9",
  "key19": "2EHhPVYTEB34D4LP8mXgy69KZu5b4CZZLASYZS5fzuu6xDehZNXwY36SkUarMusG1KERx3zn8A6P2v9TMVBh3KsX",
  "key20": "5EtV7e67RNWp9QwQfKQWhiDTvJEeitobAqZBV7fJs2frBuGvd7eqW7zJHFVFCJ6dwMmg8s6dzJeXsjyLQk4kDAnC",
  "key21": "y7qiyhrgvdBd8EjQwbbYuMyFdZiAnUVk5kMrVG56LsGwXnFuhfNUZFm8gbPxCLnDrQSPL3Z3mdEza6BaTAmXCvG",
  "key22": "5csqDdAuJ8GYwz22C8dvL8rrMpaAtA3WipRj6QAodpetCNMieKrtGW1oXoWLsebR5AZFAMStdsF9FR3DNTwhw6d",
  "key23": "uyBYzsdMLzJoLWwpJGdkSB4494tsm7u5EgCZ49NM3Ju9kT5bVkYPX93frjmmZZSjhGsWNWo32PjLis62RUaTvE7",
  "key24": "2ux2MDxmYWcaFYfoxVaPrH5UKDfpe4uYAM2BEPG2FQrhs91ZSqkYYstGLkKAYYDS6MfcHwgqZv7DwfSYR1UcRQ7e",
  "key25": "4QREn66YRLAPkC5JYQdVNAz12HFafsBsLA5ushoqf97N69qRdYH5dpLix8YiP4mzmcZepBSeYBVwj1ZU5n3LZuem",
  "key26": "28TfsBN7yJTzVrLodaqVfEejgQy4vSiAtkkodmwP6RUzLLcmUcEN2zBMWurkiWGKzw3orrMLQ1PJ9UAYa9cKkTbb",
  "key27": "2BowhVGMEwxS9Y2PnCYoBonUmTBsQFwPJzb51fCWUAJaDP6UXpHvty76aNxkAGXKxdJTQK1Xkkv96oFFgJuYXa3L",
  "key28": "4dJENisxgA53Jp1JfMK4tYtc3YdJBdLY1jrUoWagoWFq9VczGKhw7QR5Jkhrj1fgHhxvgzhmTTWQ2iVhSgshma7J",
  "key29": "2xCGsuQUT3kPKv6X9G8WSBP9TCuX4wNaL1vGtmxy9ZYjrGMXcAvZ2VVs2DiZFdB6etJZ55QXmfEguj7zeKodxjKW",
  "key30": "roE5aGo4KigiR36BzQBhEvh2LVe6EkS4ZjTr1eXVtktP8f8ByiQAWhtmvfgwhSJerjKD9PnvcKWJEqUySFJjW5y",
  "key31": "424PrwDr4C8Nt6fraaCswQQ1S4tw6osMBs5w4cvtFA8vM8XuBCqMRUSrkJysDbs7WSi8v8u8Z6VTEYBSCmJEKVRJ",
  "key32": "51hGdi7cTBNZEsxYGCLjPWNWwVaj5gZuQ5qxAqwj1N7KQRkRT2wEYCVd2zr81odUjMoSxhmRYwMk149ioRqJY6fK",
  "key33": "5cjsya5ZRMHWmW9tqZvuN4c8pEdhEUHJdHhb7vESakixnCZSswyGUK7ap15dUNrnAvQEfhKVxsiYA5VE6stfFmYk",
  "key34": "4msAx11h4cMqSiFzN1sJoUaiy7ujQ8HUxwPdgJjsj21CuGxcz7EUUaa3wX3fZ15nFVMPEds5peM6N8AFesfxwSZA",
  "key35": "7C52GDgaiVUz6n31X5VXrshDy8B2ahpPGov4XQSNA59vPZ5agND7PrKqwd8obEN9JqtBq1ViLc2WNmEtLBicy7y",
  "key36": "5QfWUKguMnchvDmY8Sfm5ak6wxUVBncU2FoKL9W7nYj2z6XiF7vx44gegqMwfS8D2vEyUkbm6rS7FarkSeyJLo4g",
  "key37": "3TQ3Lb3eZgKjgfJ7DmtNucbYF5Fyd1F32AMBfnFREYEW9pjNwEqf8s9HD6ySxmn2eWDF2wB8jFX5nJ6zRzKimV7S",
  "key38": "4h1CYcb42WVtNoHi9C1ivSUBpMzcz153dpnrrJDB9rCBBFZA3jRzbqHUyrD74nkSWr2UJXr8sfeF7eauBMr7WdXp",
  "key39": "5zaKGebWQ2gvkx6jjhGdx7pqDd3nsT1GWDKcaUZ1Dj7b6V1KaSk3yNcFzUS2U1w6vHUKraWHUvhQ8Vf1Cudmkwks",
  "key40": "67XLTW6cDrGeGETUiS2EFLcvEvzp6A4zz3NmHeifbYxWeay53F8QBXoaHybWN9xxyq1rozq5CxnEXpKzbLKocwG2",
  "key41": "JhrGQRa5zoSYQzTsQmrp7uqwwoKYSkqLnwXgcQ1zATdNjXQj6MxRWrTivRr4AoMQPW3odYB94wvb472qqV7oSwM",
  "key42": "4BA5y79nU5cSHaSn6tHsDMdU3B2tqoiaMGFZw7Lj15zHhCT5dvm41LSTptXCZPB15yqx47QpZvbYM5n4abuNq5Lo",
  "key43": "5gFHHrr1MiqtDpJQjASBx1g63ZRZ2xaauMMmdBrN41dz9pCeZGGKGxBY3hZAutpfg2xCvcoFMnVxqiH93MvrEp7Q",
  "key44": "4eWsyLtUGADxbdUN8orcV1bZKQ1q9xaeNXyioK5d8WtqYhPP5oEBCd87andayVSjpbSxmD7A9LViELrVFeEUwFVE"
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
