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
    "5TrLSPsnomEbAH2Yj2rS4Tz6kU9iWXKrm5otLMt6ixMbwpW23ohWoSMFMqTUyJzNV47phWe3Hnwe7g22oFyRX9FD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wL3e96JPC45F5r9EJSuEx3A9jjgPwFt4DyDEYyonH8ShkpeZr8TdvHQrTZC6nrXHh4qmWLaLmwdjtEtvzT1TsTj",
  "key1": "5Aao6UVhDeJiGpuRT4ucqNW7j2xr58ZXGwJtdyLn1Ci7rgnqvCW8kFSbYyVg5SeZcQnmtH2scJL7YFWhHmQLBJ5A",
  "key2": "sFSxFjZKfh7W3Ka1kN1x439M4XSW9pVNW34w6GwoViexNJjRT3HBYqkpQndegQtRM9m5Ai5FhRFCcrLarqoguBb",
  "key3": "44Q2VCMQbSQKDySuhCdN7ChLEbrswncc6dkMLC9kESkyZTUfHkgLzG7UGHpPcjw58nYH6iM1AJFTqCs7rCho82Es",
  "key4": "2LCj2TKRrekSaxNAaP4QtSB5x8f4E9AFw4Seq1cuFvKZ7mUgQTmDERxZw8zQxT8cAPovHb61DpbavpFM4PHJMJHy",
  "key5": "5W53bqjjbapriqqCbvyaRsAMTjwi6HKWetf9PAH5DGnqv2opdwnBtZ4pd7PtVGRGZG1bn56VFhFERVRi5az9fKv4",
  "key6": "36cXjC8JDSGD6Ya21iTWzA9vjTn85NQcy7FqbUPMPkYSZc6TzgWeyDc9ccue5tDXtJbJTeDoNh7baaRVTs6Lyqio",
  "key7": "5dmBgxtqWFqzXsostjqsAgC3dJU7ZEy5Je7bvXkg87jq15egXid3syR7aXc4eybnHnpqKZRRvdrxtxkDNpvErQea",
  "key8": "2YojqBc8HR8eYafp3hSTsmgWbrBRSp9Muio51qbMPG9C8R9rxb8AsstXZopBr7GoXvaotssQLaEyzniddTKMCi5z",
  "key9": "2G6Br5Cv2Cd7e4XX68XM4GDiins9DaDpNitb5H9RT8cFY7V4aW3FbEB9JDmcmKHjJN7Lm1KRa8BcKB2aHEnoZkZJ",
  "key10": "4udw3KWTwKkkqzSfy1CTFE9g1a4WwAFBGU6T8pmAcQaYLCBQPGeDmd79U6PKqhBcPfQTUAvPhtFshbdXhYhVywer",
  "key11": "3acaTErCSbFbZhvQ6W5AS91gA2gCWrZoJx9YkFT47JarQF8mMMmzEU3rACU7Jea1oLKoSDJMBn67p8Q8kVNqXqa7",
  "key12": "2WTTBT85sheNFYtwK1x6VbeMZGE2QiA83oNTa2m6kUkk4X8P7ApWsFdN5eCQDqsXdzTaUML8VkNL99A8YNg6bGr3",
  "key13": "jwGAPw6zA6mXwTdtGpCLmEwssii4Xk8NJ93DPGDd6h5WM35zrBh7gTgcD6Q6e2KnxGrjJM7GMdcbbRnHZvEfTUW",
  "key14": "5CY9kT5T9WwQP9qqUiFbgPNGUgoQZikQ67ZFPuWUKZJx7EPHzzUtwXhK6ivd2LbAb1a845gGCmuminTLxHvx477T",
  "key15": "2rmwY9iRdSs8JVFyqK5pPQUdqS8tJsLdi4R2jLvUfKjyaZKpJN59nqcjffbUEYJCuL9PDv3ajAFw59bbg8M2J1mb",
  "key16": "5v2DzEiE7AiAHxzMYrunTT9cJa44FGykrLpP22z1zpak1THGzQ271qhxWdyaLKVkUr4L4wzEDfmwFJevztt9H6og",
  "key17": "2aSLHWJXptEp8697jKEB9QdCxZMaBvMJp2S587chgZftAhMRvf6zq8N2xNZVkobgpt4U2cKyzi3VyMKNby45QxWi",
  "key18": "G6otvXZwMC3iEy8jcm8UdAdqwRbd2TvDfqrHoKzy6s376Y3FsTAGMRKQPMnoRJas21Ptm8HCtZM2JetgbpbWn6p",
  "key19": "23AU3HPt42BfT72Z3KszqE6bQvzcXV4fMFHEgVTkX4YDYsSSo51qwt4sAZchyKVifoMsHmbVmLuDaK7QtJphctnV",
  "key20": "4mTkwDcxiK2KJEHsuaGCZDQSCQ4QpsVMGhhdWat1WLgxGzzxEe8mVhVh1pNoJ2eKtr7hU3458LVnydcK1HYHMfD6",
  "key21": "3dboKejB9xK5qvZDhCRwgcYe38G6gDGwFxqVYKAaNitsw84dovMKRRjaJ565pVExPw4JcBiMxWRp3ppGEqRNbGct",
  "key22": "KQsTKdsekMZk42MjUGkNmXYQj7WmYbS9Z4iiv3nngYGyMYP8QDM2Ee7Wb7FMcusR7mPwSNyamB3kdE8QxoUH1hc",
  "key23": "2tKfYX4EjdBAyqBAehV9AwyjZpvvkgN5NrcnbPWWMiC9J5fEYQWbrejJaBNvBLuSfwjoR482ZDufP6HuFcWmGERz",
  "key24": "3nEoQCUjkxPCNMkdnbywDmisc3CK51KKux7L6LhgFC7zv76tSz9cRFYRBxatzfhqN2hKxQjV8KMWJTmWc4pZ9NqS",
  "key25": "4bXBJRNPhcSAvSb3JvwowgYSeVVL47qN47WNisJHz8VRd15FjJYG9tMjjYqYNFvu6HApgWWMuBb6J4keFva8xkaG",
  "key26": "5cVfAM43JE9d9T39kDr7TgHVQjnTQivkuapCZNxjNqDiZUmbfbnJHFyHvAueKHvASUU6U4gR5nhmhJbkJjwQe9y5",
  "key27": "pFKjQFAuse4wTGBYSf8ue6UPN4sPKgRawoVexdvUp1VsziTAUWXNrQD7PvrFpLsyvwAitfn3Lh4NGXggTUdipsL",
  "key28": "4ESaHq98yGGjs3szJwXev59PbSLbEmto8WrFWcWyNrF3patVsjUGBL73k3EBmFNsnLWNFV4QnC1eRtveWpqKWF5z",
  "key29": "kTHGPgGRdZzrAHiAng3CqGgbLM8eQvisoN7j8YiFphdAyAFhotmVmQh9SEa3NqHim1vjfbvNyGGqvjpAPfmoNRk",
  "key30": "g5EnKPM3znoPyyTDnLRA6Dgb5VaLJr447LchEz5VJ52kCsVhKvGDt69gqiJ4MCVZnJZN3U59oKZsJj7eWKtTG9H",
  "key31": "3GKSm2QfgPLHkSAgfkFja818fk6K7HSry49LfPAnWnyxcDwFjwie8PxmWtSLvkWiaeyc7K88VeBUJxc9fMJ2KGXz",
  "key32": "3faZPFaej7YBSohYsTgxYWQGYeaCifho6F8s2rKsJ6HobsXTiB9TQEahWJanfyATwQkkKcefyCMtMXuLYrGL8pNK",
  "key33": "5BTbivo6JLAkZEALAh8cTmQVNzpHe9dZLzN6Yu5bxptTEpLyKZC1QfgkrETkHizpafdD5c2MsPLG3V4GNc4pPkxe",
  "key34": "3waQdfqQZdEbsXVgmPhHYZX8kBZZfDkW7FMJ4gHqwhi2EekeBGKCnQA2WfW7LWBG8aZmFYJEjRcrHoFdCNt7qjNJ",
  "key35": "674hUc2UCkRhCs37QGHbqUmnuE6q3eMk5g9SpANnLXPYNg9qBvxoDgoHx1hJ2PkbWd5vWHJcipXTPhwJzENiWaDj",
  "key36": "2hTYaqjLVdfNcH15nUz4biPtRnrV2TmmeNgYmbzq2TdrerHXW699TyTn9T76CwM5Kga4gRbSHvB1SNx4GWWpFrqU",
  "key37": "b6FFHzbnqdaeczERkejdb4WPr4sH6knPiZHDmZZ3ZmDnxCyeknTdGJxYM52SucGhjrpuTkwaVcoBjww9B74mLy5",
  "key38": "4GHXyTcUxqATpNs5UXHCrkAnh5zEEEeunXDYntuG5EBRe77mPaATpSng3nMtJXp93x49A7EEGPMtQJjjqDHPFf6J",
  "key39": "3rkxzrg2MVdpgAJuxUuGoHvAuSdWQmUM3mMb52FqBu1etfnk8tGCJw6tV2W4tKvwygQkiWe1AcBDkNyUrmk3Twqo",
  "key40": "2icHVs8ocFUcYQBMJPb3EwYUjvvGFN9qkGBHCwWSnFMqu2Sujc2aTPznoRhbzc4jr2xzNHmwZxfT976oYkyYDLms",
  "key41": "3abhea1oqY6kFVRbCte3RfpLY4xQdDg38ALLtn563WWbv3Rm9ZWHRPApiB1v2mmYF7BKFNiCV1GxE1yT7j3Xhhjn",
  "key42": "trW4fmPbwikC3D7WapfMo8RepVtuucTUcmAJX1NYexJB8S4AMJ5iiwiCevHKR3j7CSMVAnirnrbdFAMgCKU3Jq2",
  "key43": "NhZTRo8Tets9251LdTQKWsarLJdA6DmnkzUwNqPD26VNz34Wpk5ysQjH1C77JEUFtEwF5sjk5bApLHEA5GV2GDp",
  "key44": "4gYuR9KgYSWTMe8Aaf2uqByMpoC5X5c1Tz6n9YzKjj2PypVPcXqarcLvcveJ7cJX15BzxJu2oxNpk55TxSqBconx",
  "key45": "3x3FLuLybLtWuzVwQJ1NjRsGtuNiA7UMwUD2vFr7jarGFMnCpHFAvNUU5X3hZSfvGBiVxQdm6PkbpJhFjb92HCHv",
  "key46": "3nnYs95WSLkrR1KgcawCZ9dN7eBxqXEvqFhxuRQJzeC98bbK9rWsmjXH1sckUYSETKPQJxYahYFS1q3GK3XT3VgP",
  "key47": "2SJU7wyahWZNTsEWrXJsX4nZDxFeEFzZ2EA8WHPcoKkyDTSVU3ABx16MsCnhgv95kAWBDEfbnkAG4hnGjsAv32Go",
  "key48": "53kN4gpn6Y4U8vHd29nX6XrZmmFLgFahkv8PJ3fRkvXPKnmfTWP3yoK4yWv9JQepXbE7xxnSWZhKapSG1WYuMb1G",
  "key49": "5yVWjhXd4DUtgADRGoT8p6c1UBCa7PzZhCqbgZAbhKZ3mtjXjPXQWHSNpChGv7d8LGVhXZdNjToAYY2n8oVjPRFr"
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
