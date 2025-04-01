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
    "3YRyGoTGUEiS3qn19AUqSF5gfCfcza2ZZmm6ZSM1J9NVy8QkdbJ5C29oYHL3DZtmkXtXXo4Z5dWnoGUmsLCgdXaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yet1QjkUB4qUVA6RApKnMz6gpvjpRK7AE5xZwQbo9ApVELvMKpZQtRxr4PzJd1TTPFiGWUraGS8T63dCqYqGYz9",
  "key1": "62Bin55E9gEWBUhcufE9KbJaeZwXhrvmEooG5Z91vdVvRUZAFP8QMGqcti1cLFnnFpRhz7pu8PUHLmdtcmT7b6aP",
  "key2": "4ZoMQ5REkNiVVKPXXL3UjT8NWSaifUGbtgRapapjsJM5EJMSDt48Fxp9ZmMHiGATheryojnUw6oeGSpvci7SyaLb",
  "key3": "3qF3RCbeXaJKqbjPToUiyX4RDb4AJTea65SRC4gLtnMR2WxsvDXXQhed9Kj18pFPb7vVLo4ZzGUe6eAWvZKThvYy",
  "key4": "2C3PjLb4TQf7PUQmySWCQsLc9hvs4Ka5mY9wBbgGnaRJzpCDFqX6ob2AkLZev49UxJASdTuqwHdVdjvkEAuiBQLY",
  "key5": "2KA6DUVexVLeoxmdFhb5dCXYB3BzRMdi8SQMi34rMQ7vqXW2CYvH5sqasZ4YWct2i16KyZyWiKviGFQGksAc8rH7",
  "key6": "5V8GtKrkbe77JKeZRubxVzbVhV92Vq8A9GWXqArctnHrSgVJ3UjE9i9kzRyw9nScNzAboXcXMyzvH9SdPTbTxbue",
  "key7": "2rNTEFgzXQ7p8YAFiGsPLXtqbxNG3kH2RnD7FGMC9mtfKs4uTypTdPArywi7MeqSaXwYsovafxSLXEs1K3h5Fo9c",
  "key8": "25XgPU5GvEKpbtVDCBS9dzbhxnHmSkVZuYpLPsXVLnAPB2WDC21kaf2xLSorejjDzL3LwdRS5s53853FUaZ3AFVo",
  "key9": "4wiMuTQp2xnmQk8UmVtnMaNTvfjNLK7qg3QDnQkJDWjvdmDyr3noTD2DyqQPmNbEJnsWCv2hFZfxggkTUPaHmQZY",
  "key10": "3nMYoDMGX66VNdrPoM6jaBC5nqvQx8QcVBQmu1UudAYZVyYoqhujELLuJa9c9PkQbAdzmF7xrsRH8R5a1Ywouzg4",
  "key11": "34hUCykCcv3pXkm6HN9uCCed323tnVj4XsHmrWBR1SH9uqWz3Pod44LuPF9m2sQ2VsBvWovUtz2N4ioegfzou5DW",
  "key12": "5S4cFsh594YALC7icwHatxDCsMpSz7LcrtdTzmfU3uQs9zUB36QUZegtiyYGDzYdozFkwraniAcscezaTVHjgTcU",
  "key13": "2DtTPo5AAoCj5TXtTKYYPLLX62myEs8iCbACu3Qjuq4XrPV5MHAMarFhMdi7uv8bh8t78r7XkhxniPngJZaRpcqq",
  "key14": "4d99jy7JcGg9NJZy81qXXESaCcza8ZfSUt4b166x8sLowmMANK6xLvrGgYnTGPavSwdtb7kKMXyL6YnoNrVAeJyo",
  "key15": "2RnyVTkfYj11i533vNrKe3ZB69r66xF4Do4zFm73bdRm2gCzycwRKNDKHZq3bN5puxSW8j2NXAAn8ErP3uJQVf6S",
  "key16": "2dbLPe3HTVwHJuLjtL8asj7C3vAzegdMj1SvULbwSfHSM4Xo3s4ZMxgmpcPsBDKgPRRVkveyMyokSwYbaquNjQTG",
  "key17": "58kRGaQ2PMKQdTtGa7j7tc8ED6EP2facjFK6PxWtsuREyadR2S1mjhNKugYMyQJDNGs1CphVWLco2pRBXt6WfoHP",
  "key18": "5o7rCgJFJ9ojY7zrm3YELo6jXBidkw77YH238YcsqetY4VEacFRxKzLqMUqDpkosk8m128oVwsTytQ5nESkqGVkK",
  "key19": "33rSmS5LyeZfP4WPavsSMyt4Gu5bMfRPmH1Zd1ouGdrDrGAzyCKaHtYhYPwB6SaG7K85VMUeow2j9PCy9F1SxubU",
  "key20": "3SX1Rrp5B4Gj619eyABEEb6nvcprPVgYV2w38r2GA5kwJWpaT494qvqUU7oEEaq3Zq9seLmbXwSLzPoMK3hHsLYP",
  "key21": "4oxRLEW5ZEZZcE5phFyLeMrKsGPJiDGB5v1WnSQZfDwHZf7YxPyCHWXDeDv9KXNWbpkDBmeiNNmA9tRRqUCQrN4r",
  "key22": "2tGsNChwKikZWFjR94M61f6K7TDtUYZoDFWuz3hwFvjy7T7gcYwL2C5RgjEUFDYG7HsPVgEWpqwRsgae5c9Bqdgu",
  "key23": "2HUXXDfXRKfMpSa6rpxLJFmueVgAHftJKmZ2BW7r8nWbNt4uBBFLXigSWeaQjTYi2MAEKAWuEhuFhZU8eRuSbCJJ",
  "key24": "4vgq5XzeMSZMjnrBWw8RDoatFmaurbX7VmhRNgjH97a9asq8qSkoPBhh5LsRXrGBYChHecCUPtcZxETw3gT6BobS",
  "key25": "LnzCgQuHK2dkepD6S1atDkw1yvTSZdTRiBRGkaVboVjYtQySBBCoSfAZ18PKhKUp8NmFD3UUXpmCQXC7tkC8Z5c",
  "key26": "4PZee952tKKP5hMCYT4SUqus4cZ7kteMyt4U2JsHwrjZ1AzbiBAzDH97zp63FvVPqzA8PpaGob6cJTaCP84azE4z",
  "key27": "3VBicRNCfnyDz4Cy1UFkUckya5mSkYskXVsUAryLKcse8XnAUd4XYVkRkdVeGuf8CrbkzLDp9GoVF7xhQ5EW4RsH",
  "key28": "2tti2Dt3FPgDbTJqqbRRi3uG9grJSuaLG4v1HQChQCWBkF9Z4qz5LeLHrj7yfSQYQyRnpyrBtAVBHhc4PH3zmpQ8",
  "key29": "5Uw1WLULJyvhM7MCTDMsZ4gEehXkxuGQCsVjzeHH7b6jQd8GJgd3nURtitgxDnpVLXmq8AmXwg25cJoeUzC84Z33",
  "key30": "2B2ga5oXFQvgmPsecAfNNRBAGXqWC7opuQcGaEww1dKsniwkhHe3HuiL1i5dZctJ1KZh2TeEikxA8KGeZ22X19hA",
  "key31": "4s2qrbKjEJpC6qsmEknt3K3W8MrhEL8PyhSVMhjwYScKuWNB4koK9V8SqHRR2kmKHj8CU7wGbqb5nuCu9gaxobTs",
  "key32": "2BeLn2dHLQfvaaNatRgySMoB8w285daRRnP2WeVC7qfnXBmUUC7cg1Dy6uG86MXmXMxG2CKF1Z7qoXY7PwrLnuQn",
  "key33": "pi7L6wPHSV7xuSEoHhFcsUDEMPXiF4WBcG9nrCofasGzZfsMovqADg3Lk9YZzVVj9KrwqJkqHoRED69vyfwWPAq",
  "key34": "8NGvroMbmyLUJJCWjb8yiUfpWATggnBap62F6kUSRmETmN17tFsmdoy8SL3RJ5zDHap6F4jSDMYniDMbUynnkmC",
  "key35": "DKmRUhCA5GLGM7gu1e5PBnLXsSQb9LcM37Fb4fdKUegYbmoAVXVGmM5EL3GE3jmkbeVBpvzXNcxckShaVtMLQpS",
  "key36": "5ZUcpg4hU7gftfDufnb5MLAuMi4SKaoVZTHM815kAHFVR7KBsVS7j8HBFg3yjFYwNvbxxraMK7bBMqLQXzX5267i",
  "key37": "UTmP7mjE22PgZ7hEz1mfhd2oyty2bo367rt7FCUisTkEdAqiQfGGaPGuCjMhbey9K2aKhnUg9M2d2fujoA5qSpM",
  "key38": "DCPC3MJvnBV7y465SqkzVDoU2uRZdmdk5SQ1LUBrGu6egRojfiXzXm4eFN4Xx4GT1yWemR2jQScWG1USHBL1cYP",
  "key39": "55JmyvYnbtrVVFSWEN4oaj5UT9GxzL1NpSsepBHNp6HKYRteDxSN9JBpGfCigPhZWzgLtLWJJmWziTRVAo1ZESrz",
  "key40": "VwVN9uvfkcPWZ6soQmf8BuY9FYrK3ocAF4yS56oNfcdGjNqu3garNrSX344K95Zvqp1H2doGaj4nj6ci8ZXS6yt",
  "key41": "ofQMcXc7L63juWX4nVaKMjDj16bxE96WMdTK5pYRL9GSJR8jjiM3tS8uHchWgtKC8STYiB1Pw9Liym7Zceuo48s",
  "key42": "44KCWps7hC4oPPE4L6U9u2nP4Qb4tZFuHmB6K8QFG5NY85P3AQzPK5ujUqF4K4yCD5HZELHQsnpyT6ZACwqUYh6d",
  "key43": "8FBeMJuVoTN5t9NyWpXSRYBe55z1PQUYWs3a5vz9ehQ6bEWCxfURMScppxDZN4GGrWxTJZqgLakjcyxPpi1u6Ra",
  "key44": "5ZVrQ4o7KD8s1B6ZbJC853ScUcqh425oBzNcNqEi6yjfbfWmgzUuuFFxw2edmwEpYKhU5E2azjtkDBdfrhP8rC2z",
  "key45": "5sp9k965U5YAtcvRRAczoMZB6548eWXXuyyAf9MF3bRaoePnVafynPjAcTzZBcaaW8VMDKsYbg3n1mnkFLedP1X5",
  "key46": "3dRfU25QJCBTHfQd4nshYqVUc66Pu4ZD83pJT4y8eEDivENrijnccmCH3hRXZ6ybr6PkvR1UzruMxPpRAo4AhpzA",
  "key47": "2Wf6u7QnmxTZKi1SSZVKBaEfZVXH9hiLnDsQSUPWVx24frPMqFv6rUHSfQJC7zmovT4t28dPEgGbyzqSRkFE11T",
  "key48": "4tBcQ6EDME2S8yVQEnMLgcpLRjTpNmH8VBsZWWXWwz4a3n6hPpP4Z4Y9aT8Au23CvPPhyk4YAy2NguV2HaSiyZnp",
  "key49": "2hU3wpweX5jP5m9a7YAHB9xnVJ1S81otxHDHMcXT27Ad5EpCcVfYaP2tnCgQnRNkRr16fxr6oJjtErZD5uwYrWNC"
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
