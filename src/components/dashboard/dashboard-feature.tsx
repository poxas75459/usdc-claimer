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
    "4Bgw3EEU9pnsyrRoJuMKypd4raMroM9EEKTn6r4a4VJ5hVHdqcWHfMj6cYWHyRRVDoRAwN4WW9U9r4DoS3wwjvnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T427Gux7f6hYdAdHnAdseajv7YKyynDdLQ6DwoeQvVgCRzcMhFngfDkLQD6qjRWQwnZnk6ohQ9A73USsnidMhww",
  "key1": "7jjJNj2h1VApZ1thBTVjuRRN2aYENjU8vohQAWFJ5hRtL14CuWwFuEatkQQQGFygicemUDgJ7YWh7NVvPKMG9ML",
  "key2": "2sc1ohzEcsBprmVZbuCDiSfs8chwq6QTJjEds8jbajKPyarxrancv3HSqKtHXLBHNFKBPWWyWXADEHg8T6MrzVFK",
  "key3": "YGoRKkUuWkXYQetHrgzJUt5muZDdp531pfw2bhYznmmaH9CZ6MDrhmGkXnYqMaBPerBjJJwp7Szyac8b7iRxmqb",
  "key4": "3iL7SAM5HDiERdyW7SaBWwxs4cikmkwcRa4TfMhAamm51GtySSdiT3h1VQtu4W3JhvdUML4iT5VojhkLj4ehqPY1",
  "key5": "5PY92dNCatPw74kvR9wWSzmh7sD8V5NnYEB1otNW7jQ9Ei56ez5ppQsyuy8jPkVzjwpMoUQoEWEBnc6SREoiHPdn",
  "key6": "6zVB9ePqCbLXjPGucfZhH9Dum3Gf5QpoBzeV2RLS3qVDB2Ap2T6Vbj6nfjLb8ECwsbDUiTtCDheaUthWbh46378",
  "key7": "2gur55zpUkjynUvXaYHTfxB8N7D19M6JPSEEctheKqab17THw9MaTKpSBi9miJLnmPgTjnzeGkwM7Xco8amXxxam",
  "key8": "3WkzDjaxV683CjNWYsJgiHwYNGpWX8duPrqhJ8FvXVYn7WF2kdPppqvsY8dLYUwWQT4mjFGMyJWQdHoSqZBkchbN",
  "key9": "4wx6W27Z4pByF4zRehcSdmL8kZ32nD5FPuf7PuTgqnY6gp8weV4iKtmokXzK8xKPbmzE4SmA5yYq3kc4gqDe8Nyy",
  "key10": "2oUXU4Bp5ZGmG27ff2PkPBBc6s9wwCEatRrMSFzo4V3J8uQfWxJc4dUxQvpzBosuATSV5psqFBcAxjAWNaqurJpB",
  "key11": "eCdf44fGbgcrF8PHpgkgntNMe3UZQ3g3mv3skyKj5sSgHfWhr2WnV7LqhpHE56UWjsMYGMz5iVTnZbH3BsQ6QPf",
  "key12": "2n1nHqLL7GJjUDVaD4tGpkVcuwedU9DxQuTrDsPAK2x4kLhUcTcDWXiC6icmZzTj6uhrR6sWbWZ9NF6kvzDbjyJj",
  "key13": "24sPMdRaaRDHyCtQnVztfUPZ95aW6mM96pGN4cK2RV1zFj9dcKfvUV4xfknmJAbt5ZVygxeGRTK21kaYcMj1pgX1",
  "key14": "57MuNLpdeDHWnccg9tTQFEYuHgqCDJuQkb98szJfzk6xrt69CyXtdsZ896UTBYFK2hwDBLs7NYgxfm5JpBuqbRsX",
  "key15": "4zgyqv9eBMn8GHFNYmqW2wpusiFB2VA3aPVBtzMLd4L9B1exLXSweY3dY2EGVVLjYrxQVca54V8DGUwE3zRECBhe",
  "key16": "2mSt7Hu5wNjY8gzc9ERczUi2JkXXFGEhR4Avinrf4x4ugwrYG6BzEDvpFrRw8VFcZc1rNyB9i9Jygu1dBBZzgUgA",
  "key17": "iNEgALUA7jYRRt2DwALTnJ6i7nLA4yHBse5YihQvnHCd8LfGzVdHG86n7u7mFwJkNGxhNJeAGAiLk3RUPH3fp59",
  "key18": "3sFr8SBGcfZ2qd88VBwb5UbppWa4GD2HhZuZ7DM3nUtGzKXk3KqRBDvinbVF1MvixfeQMvmTbviWc1Nn4pSXoWXq",
  "key19": "gXehUJEX1FPVZ1wrS4CCVf4RnojH5L1AFWmxLJSL6pKRuS5tyRkZsPTJsshBuRAK7m1W6Ng3AA4jLnjpUccEHuU",
  "key20": "61N47RcD4dbqjtKnq16NLYrZZQ1naWoGVREgTaMSHTH4pQQbCjdbTVwPBAaUCkCLRNprGHYWfojyVZvo9xdtJwZY",
  "key21": "rprSBrQNKsR4Y79zKMR1iQGtrJcZDLewFEydUS26tNYg8RX47Yi7HBhrCmBupZHJ8sExY4neZ8HcsoEgykZacqw",
  "key22": "37n7sJUPFp92EskCqCEvtDZ43BEDrh5U1FhZJWtBrKggvcG9Res1pNvtjtjkoPzS36oBiv6HMg7yNUDojitPLJPR",
  "key23": "5aUopgHW1jvotHhMRkTMH4cZHY8Ha8Ksh1bNRjS8YjQYx4k66XDsFDcQ8Gtakn5LDX4gWtHpqdN7ED45igvADJLU",
  "key24": "2iKSdFfRHgZQYkEf7AQ8472TRnjRVgWbU8HyEBD2UeQFjVeDuNBD2EeU8NUGFnJBaQX1d9XGACcHuBxGpvCqwv2w",
  "key25": "4utWVTJNEXkkAVh1hJDQwLwVorZXyE3yH7dubfwLjzHnJ98bD5aeW4P426DfkFKpqd9w4ctG2PN67q5wVMMRzm7A",
  "key26": "2o1kRTWUK8snai6BHNPqJV7TNTkJQShKvkLbwZSgovc2hqyaTWF2e3hEck5aG4VmUJEvDv1Mx3SVKqFSpGDMtusS",
  "key27": "36H1f4aUD7d1QtijFop3rTzRdf76fmiTrd3EuR2zKc3UvjxhZfC1TZTjF7KRcwjb4NFiafKmaTaB4Ua9JQrsdRhP",
  "key28": "3cp5XbU5pmp8ugGrCxjHEAneeuNExwEW13gKTTM6Rj6EAi9D1pbQNBatKQW2ar2LaBuUCFRwctRpRWnDeSAvhu9T",
  "key29": "3UGi18Rb83EjDsK9xapVKpTLtPdDRAbrMRq7rgEb63US1o61TJFjfXR45Xk35ib96mdzAast5EaC8Xs4adcMP1fD",
  "key30": "3NTENtL8YNGPmbU8HukxFX7WWGp4MTX3CpgpTXTVyrVFJeUpuGBpyxqskGe74G7GiRn9SodYbhwUncu8n4XtQ7ih",
  "key31": "523C9SvQMaxjRZBr9hWocYJgztEKer9DQhqqp8PHtpRpieZ86NdJ2XJRJCs5KzZzstaKseyLRdE46guyd95LHgkG",
  "key32": "rxM553dYg5Ys25A1UjYHDAaFUByKVF8KpeLP83gGGL97bf2Fcc2scw4JVbFkMRTV4hRmjsoscFVVPyermMErvCX",
  "key33": "eQ89NPXpuCyqBbp5K6jTiTVsha9gShHTmf1cTis1TbtjidyywZJSsWuCkn7nUjY7KN14YpqexS7vdtzhbyhwgD2",
  "key34": "dvCSSbyXLjfMFhFzxzfQRJu2XdHZpYaP9KYS1qyTcsBL3p4ReQnxuqR5GogawqzrRFdaRkpS6aa558jGcWtQ3VV",
  "key35": "1QLM1Aiau55kenRTFc49sSGiov1d3HioCqqHUySRstGx2NmFPHQoJxAHym3JMbV45ALUE91Lks8P7ddY7ka8Gmt",
  "key36": "5woWz4qW9FPsbSzULXAPWAD2wuUWinGANohK4RewA48Jz4zXpEYifQEJDDMkoXebzRnJQ77dZTMj16e1CrS44Qrf",
  "key37": "2jEYi5pytxgrFmj9dqo4HYmj2wSetJbqByfhwjKyas4uQwMELpkzSQfrjDHkxd56aD9k9wnJ4Wk32Y34SQ9jgbfQ",
  "key38": "2Uu5jDnWv2WokvqHwADj8TWe3LHVDHpFJ5priCwnntFwdGJ5Tiwrnz5CoRAU9mB5tYAteDMTnsC6izn2Ay9EeYhz",
  "key39": "3q855xvGzgWcEabqui9dEtzfZQpeTnwgXYDKUQ6uJoKiKqQ8XTnhpbMNAC4fKmEiY7pzmEHwMZsPe6aW7DoHPZ8e",
  "key40": "2vmDYSDAiPD8VAxxU6GSWa2sbobfXyyCbZQ7XkLHGP4XnXFBa1SEyMKL59UVaL6LVhymC92JtYCHvSXWSVpBtxde",
  "key41": "43R2nT3FCbFSojW7iWkT1oubAgotijSBcsBeAmsRz7BMQpcGaBmXnveBCvM5BGVFWbJXSBqfzgkaDvBhWt4fyY67"
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
