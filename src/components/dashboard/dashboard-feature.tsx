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
    "677NZ99xR4w7YubFT5xgoDby5odXj7wDbYLHbiqC71w35CTi1HbxfLUQurAaZhbNJsvEPPSQG1XenCu8MwRGw9C5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYPbnkVdS7sUnWvBbgbwj4EDtwdXvTfqq1C41pBtp4mqWwLxsVmPWSsEBj9vBa3vu51qJkfNMmCCKMuNLi4jX63",
  "key1": "2NwQVA4P3UnY7xg3HnYEkyZNY8QzWKdFDbRgVHkdFQL9bxsSu8HYTbYMbYSnSse4fwj4X1k139pd9mo6rThdjCJ2",
  "key2": "66hyki7uCAu7QPD1Lox1XyAjpvJHUPMEoy71AiToiQQmEwAyLtNm7evgC1B2bBh2XKRPmfi8AF4cCYUo32RX5jqb",
  "key3": "FzzkbyBqjBUr2gv7SiALUj7mLNS6XCzfhyy6qConVaSUsA1mLNFQWeRTfAFnSpbpteYWsoCBmzCwjYzCS7Dj62E",
  "key4": "fKvpn7YbFqNHi15954onkBa9P76RvrbrhHNuQUpRXrUVbGinn7iJ49R63AJkYprJe3znGjaqHEXQBbzjRb8ap14",
  "key5": "4SArWVoTjgm6yyTzjrqDRk5oeYTQ9Qe5fNGnCyqPJBPVmmPxjyz2csh6AYaRdTwNJi7oUtYB8Qus2DESrjr7xj23",
  "key6": "ifxJJ5tyGaNEmu8pfdkeVxmFabkAMLViJQVtALDj462tid9dCYCp1M7qPdRoodpZc7nVeGGWuGcBSUiHpbp5oGw",
  "key7": "4UioUuiDhDwxg4MFkeyFQqVpsgFLk8FoTeRPht2eMsXRNjsEighmR6mhVjHrnkQTyV9HSGyWJ3ZipvJWzHknPiMA",
  "key8": "ie1TYvmadnfftmuMZAMFy2QfQ8EaSEAV6ajbFg7KsiXozwwirTFenG8VDXitqZoNfWkjnSUcc7vpPZE34saxnWs",
  "key9": "256Pykc9qvUPiCxVTXeXMqyxjSCgwoBa6LQhygMQXvNhspL8ZHaZywHM7qyCsmgm7kX2QzAxbkSc8UoELfAvmGtv",
  "key10": "5fCgWpoRbFss64VJxPUfz63e832PN9d9RfhSkTetiRWF2zBQ2X8os8HLjT8LYgR3936BREMoUtjnBM49YV56Je3B",
  "key11": "5KzpW7uSFRjCBZ5wC7tsMV8Nb2J7U8Lq2reSN5PM989hgvJaff8rekhp5AKqfqtyT3oj1mLLTg1tssWbzBcsVVpN",
  "key12": "4eMw7vnczxyLx2G6G5aGdr6YxMdfh5iatLRXSHrSPYssKp5s68uqJgKjoPxByrJFAgQFErc3WJrrix3S2eQtRfVp",
  "key13": "2RRPRYAbZDtBvZCnH1M7e4gmYRwAYCY1zpvYVQ8Tfy1WfiXQWJ5TMEj2dPg54hYoGrGS5sPjzHoyHP9JH3YnxyD2",
  "key14": "HQhQCZ4tbaNRLEPsayqG76M9z53fnRQbAjEi1aoBjk2WnFQ14nVRsdJP8a7H1hLDAZLDu66fbSKNzQ6CPj2HX2o",
  "key15": "4jbdHjCsHFGrAhr7Y99WkrC57eWpUmc7yTkgWnVt4DS5ovx88Hc7Jx6HXbAxw4QstHaDtnUeZUNZxcnPQNgbi5f4",
  "key16": "5NFTWhHBmPMhUkh6NYne2q5mMGzbBNb5B1uQ1QKJYFKmCFw2enWsm3EvaPh6nMoXkhR8E5Vs55A18xGS7kJfVKfJ",
  "key17": "MVD9sGP9WCLhS5FfJ9stkH7yg2zqCoqPmmu2ZWXxzmVF2xEyFjpJGPFv42ZqCoabkA9X4q67NhpFE4DQqTFo6Jj",
  "key18": "3QRHGhDK73p6DxH3BnaNiFouwwX9wZferRERUQho9Pv1vdQRscza3cW51SkmwXeUqw7x8jmVdQhuyddCoB6HoyTH",
  "key19": "5UBNvVS2azhc9zpChktAxZGMYGdjhXrUdyJrE7jFAEdGLWvKL1KZwunqcyR6nGhjZGYjGAmRpC4ymewntosZo2Eo",
  "key20": "5Zdv6MmMW4pBFHcHJk5yy1i4WXLCXvv7ND1ihjwPQjVDdBm7pbWZap6jRrryQ1fe7Hyzngx74mSLxryDN1p4Qxpi",
  "key21": "36Ka8mWCEuqK1csQRe7XCn3h59WnYrLcaWHw743VNZREAZwuuza1vbyxNa81xTW85GUEdxFRZEEvsYDJfxTHrsZb",
  "key22": "5FVHmmj1D3jC76C3BoVT7LEP8tsZaPkNLxmfgCuUq3WEUx8nTBcixT9mhTbefx7Xdt26hBaKS9q9ajJcriXYrVDh",
  "key23": "64dWGbiwTzedzgA8a3TAkwYjNXww3ZnW6fGyMfnBCCYZUHVmXPzu3sNxJbgRCWb56q9SnVX1a3e4WKHGcGbRXEK2",
  "key24": "5TnTHWhu7MeHaf5F7ny2qTxBrpgBwWyg8yr2wzxcatjYCfETYp4oHLDYuhwxo6WnhTFGyJk6K7tjKPQ6Je9B872p",
  "key25": "5QYJ6xrLpt1NohEErS9Ai58ZnwrN5TZSrfsyFu4tYsax5T17tPoLSvH8WqMQ7HKyLm7amV7n4jeYUhCEbjbVdEZx",
  "key26": "3YTUtKeqN7EMbnD6DTxgTR1knrkzLHxUVw3MFWJqrHxu7FEcjpMcGq1cEdH9wXYk296AKiRmsLW3Ecjh6KaQZAwB",
  "key27": "5iP2xKE2K6mSNnTyjjn6QVk5TpLiDnHK6hvaWhTrh7b518E6qg3FzdgdpwcuBXy4RxjeBu5F4ZWQhxXUqV76HN37",
  "key28": "4cusfi1QEnUghm4jVoT3y3fgXJeXKZYRXs4SxWn1PwBJHDGq4uBzssHT7AyH31tEBoQv25ZypFfBLndXtLQ9p32m",
  "key29": "2efwTBAZ3AYUMfLZ8gDS8pp1u4TRxwB7YVum4m8cVqrEvkHtQ1o78aCFBQSPD9HaSDAkrWpJexWk7iHFdGCXK1x3",
  "key30": "5PDhERAKEienr2kqQn2vM3ZHqnYHcZfFmwthvDL2m6ebqWo2nsaoSDZNfZSmDtX5fRjncoKEbV88L8ystaUykETY",
  "key31": "5mQ3GF3DrPuW8eaEpcKzLi1SA2pfTGvRP27bAbh3bxkHLg37gkjNZ7MmkxRSL8eqTXpD4stT5Pa5iuzh6ut9cfhQ",
  "key32": "HNQMN9BGphF5BJfbev9YDx8vgngULWjLNq3npYgvZgZAHdQvXgUWiPD1chpbimyG4KP4dHyTQXVC4HmxNTHr377",
  "key33": "4P6YCdKSLHyP81Pv7e6CPYqv1FFqxpzLq5L3cnM5X7JSemubHeMqEDAmAUdsRu5bgfNwz9ptCPguxNyT9f7D3Rte",
  "key34": "3U8zwWkjvS4KucmroPyYmt1jT8Qe4hdJmJQXBckn9tY96D6vctzDPUvGStZbupZfbYm9TRmUbeAYkrEWxPgSmpn5",
  "key35": "3df7T75zyeZhWWDQtYGg2bECPfGDWAy4GVFhk2X9NfKbQK8PPuPYmZ1c1wpgtGgq91xtA27u2HnK2xv8D5ymjawY",
  "key36": "5ijW2ZwC7MHHTg71pzZNVR1baz9VUNUL4nYD4bAqbr19ERScnYAS9CHtSFr51bmMxhwABG7wAy17vkucNi21X9Mt",
  "key37": "4yRCxiqW18Wzd4i2EB21A7YeuTqpAPwoW12N7VhXnFGNj9Ew6bkLA4HGX3GNA81tR3sFXH1CgZk3zQesqk7Yk4oX",
  "key38": "2Mc5JNZeWaWyXGtTY1qf8pWoKJMzLiTZWsU8S66XTRgrh4mX2BymcJJUDiZoKLhe5zRH9tb3gE5orQfLaB9Acu8z",
  "key39": "4crxCaXPp2qNxsSLq4boUYsvy1aWyZypvHmf8ysw3qPJKo176i7rsgsVGPE7hm8ciaQh1qdhdVqQEwume44KgZPv",
  "key40": "RiDA3B4ygFzMNem6uKC35A5KcnoDLwDTtFUwzVPcfpiJDfa3hQ8ai69jPCWiCU3DQmSxn6aTLWpyJzafSF2EEpr",
  "key41": "VDCESdZQyPxBPgjcptRfX3VatP6eTMCDgLdJHSDXHeWof6YjGdsgSNwyDp9jBaUnraLxSz5CyNbmwoEPNBcEy9K",
  "key42": "2cnzKs1tHkVh8yEsS8356jnhu3m46fvN6CdoFbgzt5T6mxksNCznCNq6ppTWvuhsJnFbGegqHtppqgggXyieNpXk",
  "key43": "2Q8W7VfXkiENVaPjsjzqn7sV4D3ZP2eoLP7uBajPQbRhqM19or2U7BP1xQCnzRfNCggLoFS4v51mvm9Q6HKGja7e",
  "key44": "9owLse95CHTHX41AS47NBVoj1D5w1eBi2TCk9U14a4UgpVjiycDQuz61WdrjJVUghL6WhL18cib8QB53Y3nSbvg",
  "key45": "coMzUiC7VMX1g9qBaudTJWtV5yohvbh7x4NiJ8k87nkRr88q7Jb7zUYa6UG9hkvo1c999ZvWGxHLSB9SDfwsWQU"
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
