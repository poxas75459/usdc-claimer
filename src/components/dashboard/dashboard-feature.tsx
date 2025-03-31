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
    "2rLF6rtjQDFnzSchUZYBz3Ri5Rv9TqZ1W24WmaAuHMkZE5A8mB9BCEZrGemm9jSkWQHzYpisNcZEKnEt9Aeu6Q89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzvHPQP54q4dVAP2hoAFtuT1Tb9gJUgeusnjcmDdgyBf5ugStMYCoM7aKdyEt6k6Tc3D81Hyfey91jHifEngnhy",
  "key1": "2jY15KWvvMbYoRdyLBeHEQdcyhVhh7TA9zWPu4PdbgJcBUnqjTvE6VmZcSHHojJEHD22x6dBXys7nqgLmrGFEc1c",
  "key2": "2heuSb5DQbxD4ar4HjTN4aqAZe4pQmBTEtYT91sFAGeA4pZBmnBn25w76vAjxGvqg5FQ8Xy7QgUALT5wnWcTsunC",
  "key3": "ovEfM9KW7WxxXx6XdWznDUZYCzLTBWReu3wzTurRjq9kNbRtXRmf3zXho6pwQw6LRvr6aMCWvVCBJYMgMcs3hnd",
  "key4": "3S3k8PS57RSUw5gW2CvWQL1YeiK5hzYx1MBDkaJHJYspjxGZzEcEQZJ5N1bNpbDFTgfZarvpHVQSFUbe1SfUugG",
  "key5": "3NNbDu6xP4yTk5veiUusQZBciEgWoMh4PeVCLsFTJ8sa3413bgbeS9bcCuddjuZNK1n99S1XraHDD717mLPZrFXS",
  "key6": "5tbnf25r6VAuq9TCjzT7GZzjYfnzWFJ7UB8DGBsfTmQz4QmLqavUjMB9kHTcTGDWwiqVzSaPDbj9usrPSJ9ocsNo",
  "key7": "2cRCuopvf51Luyt4rvq3fa6U4BtTeztLYWLPyPwhkzXEaZPUnzABKMXKJHFT29hM69JmGMLLgT4HjLYaHJvugMav",
  "key8": "5PJwbN3vnjvo3rpiYb9jFZuczFvcD5qYkDK7wvoDpwJ7ffFzTYVnjwkkD3CAf5GXs2q2B8dECBirThtBroivJTyY",
  "key9": "2GFtGeuXNLDujXFVhjSTgNtX7nx7joSbCS2VJADKeDx65VkrAAiFgtpD78rYvDAnGm9P6WDSjv9WyZ5JpUhdvTnk",
  "key10": "6W4LYCFHyZ1CMV3Rw7geX9Gxs1PzuRLGbJs8QSCMgtZTrBBjVXh5Acnw4sV9315CngXaCrAzJhUBHds41Rfs9Dw",
  "key11": "41tHyVzM1NChcTwrFBtexX9SPBdFBrVqAfFa2fyKQWnVXS2GLEBMZQFksP8vQ3ZX5uPJBjp6tnAnzRbnBMuTJDB8",
  "key12": "E8nqwDy4GnEdqbK7fMh4bDLy3fXKBexFrY4HJAxvPPb5XtEdSNepbr1wwmtua8LeqBquoYq38F8TQLxuVZZAyca",
  "key13": "qSD2kGVTvaE54LNRQxi36gysTRTrfsukmqayD55WpdNxBHUifGNJmZe7BXbREU6jfs1GHFJgJQ1HTwiC2K3fGc3",
  "key14": "62XySdP6Ys3qqoomPD71eV5RtugZ3ZDdQWBGo9boXdnEbGzZowqKjcoLLMmjTBndMsKBehdKZ9mPNhy6ddr8bMNy",
  "key15": "TdXMgWfYjNNRRUU8mJLsFDxCuLWVW7J8G2V45HXobL9hJ1pDRNTewRDiNFr3SgBXFainarSUxSbYugMRCnvS5XQ",
  "key16": "4E5PnsGuVFCUs2aEMP6FpotJcga9B8vFYfJxjSgppArJ6wzUAJVXXwRu3xKQumwPrqetqfSin2hCmrgGvpWPJ9gc",
  "key17": "3n2vQTAwcPezkD2XyveueAbj8jrBDeTiHpZyX8NeDnEwoqAgBEnj9eFMq5pMnB6xtrJH8QxcvUWmE2vCVty8eWHP",
  "key18": "5wKnuUnB9aDGBqv6cSpc6QNiooR8W5imKWDUHjXTwH4VA11cMUVNvEStgRRDdqQMo48yESy99YxEYgkEPwLdgmQ9",
  "key19": "oPxMvbsDiNmvHJaz7m7j12znTVhGVZe38W7c9Cdnraub1mLuXSJonaTC9QZtsq48cDVJGhGcNBC6Pk9rb9dSKoU",
  "key20": "2A2s2WBqnM5wCE9LLcoAuA54JQptL19vRHcff7pFEDYYCEPjLcDobqTwahcKbdH34ZC8nLdstgf6HPT5eG1ajf6u",
  "key21": "3Vb9wGjwLkZjW9UDZ4XaUiTTVghT2SSkh3zwDnhLXkRqSDMpY99prQNjqE6gSafvUovSAj6QAUwSsdGEVg9zrpYn",
  "key22": "5APU3q2wLjGEesx5XmWzQtkCetfgS5ryDr6Gc6UQfvtqnUkNQQsG8BcvYGJt8AyiXoaJUUKm48MqnVRtpAFGwawW",
  "key23": "4Ni1Fokxc9yR5ABvzuL4vkGN5whYDwxGfnXjg4LBCZ7bJQpHVEFz68yXJuY6uynT2zTQqPkANatZs9c4rArbvMUk",
  "key24": "2ELp1MGvYTopycKp9pAEugAhnmAQNdVugX222fqL9ZK6nW3M6AngNgaAhKoCGadFeGTuZET8iRrSxCgq41x2dibK",
  "key25": "XmG4n45QAFXEnCSfFPwzUKA3ZKJjGJX6PD4yLzumS7SHgJ8yAYiRMY9aeFVMMqQ3uhiWtrkomunUbQivF3XnkD5",
  "key26": "Jh6PQ1GmqzyH5ijaUKUx9PJmqYMJgywhyCHTBXPCy9ouqCsQq3yd5yvWC6fVdCVViy4GtcBP4Ez9vPmXNThswpf",
  "key27": "5Mu57K3faqeeqd7u47rV4hKoN8Mj428bKMVsSUzrWtBJWXRoTkZy8JbKpqBXkcuDPyDo2pvitcQDrsvvZVf46Xn2",
  "key28": "fRhBELNaGfZxKpGN4GvScnDPzy4deFsd9C9Dena5rSh8hU1CrWS3BL5Wi1ovCfdNoxMREeSrYEtoFjYxcMT2iUz",
  "key29": "66igfLJ5e3kJbfnjPN2RYtxe8rhEEMjP3CvvoM2rZDcntVeu3WrxfvaFoXvZmHSQeg7SCR5XJ43qULTrgeDhqbvt",
  "key30": "241XYq1e2uTjjGuNudtU3ta4NHisje9i5hRxJoBax6G6ATqnUqDo142RNZaNUdxB9qAbeuHGGWvzyskeHm4UXZsL",
  "key31": "47BL6b5xr3xtSfp8XuPrjf9SjkEEuZ6tobPzz7v3qj3HRPRs8oT9EoKASxrLraky1YaMwCQpMjCGRtnct3cMYRm2",
  "key32": "2BWMoE24gQ6xhdmiMczzAcL41nXi4LE9fWfS1tGJuoPUp88SFWsSRsVbqeFf4R3kmWBbH9bWZKvU9BTrszZmMkdm",
  "key33": "4N58nz43ftgCD9XrV25VoLqsB9DagkzRHkuaJ2yjb2V5idJrMpgn3UqgesbVJLAStm2Ud3LH51sZqpgcTRxwpopi",
  "key34": "39fVz3PnoyndrK4NJmWgo9qaPJU4yDehxG6tViD493ing6fLvgau2Qw2Rz5LBmt3JiXQKCPqr3HYikwgouudHY3p",
  "key35": "5CDq2FTaWJ37s7T9vYBrc4P5L6uke7d1iSELYZWqnvjQEtaJZ9bExsZEA6SMivrgrxKuMrcy6L3cQnLxAQjCYfjz",
  "key36": "3S7uRMoE7WQZHpngTnMDksz5XfYDMG78nzQExCYjKeT7BZyGzKdhNcKA81NoiTe3S4QXM2eB5oqCaQdoA2mBFCj4",
  "key37": "3pKWpjAigeETzBt9zzCcXKftnUzGU8mcyAFJibaACre7EdxLhdB4exCYFT9EprS4fj1KGCKbJjodssTchRxrKxuR",
  "key38": "3zEk9Xb8X7jj9dDvw3JnXw1gsfJp6jiPTokXbnoCyzp2rzjG7CPrmWnnKD2MybE6yvUFoSBoJcuQ1hDYg5yu2PvT",
  "key39": "2wyRUqUhvKhQewQWYsNBvsFMxRzud1Jbyv3N8zNMf8zQ8fNudizsTEogVwfKfMFKxHRMCVKMWVjn4utHrE3wpYfU",
  "key40": "4hn2J2u3XbTRNfqZeZqF3HHfM7LLhmLyaSE1wrmM6tTkg59AkthVLCAFAaYta8SAaCAB2tLei57T8Qr82PdBogc2",
  "key41": "BHqSjfTQi1qxF5MpHbsMAFPMtXturV1EPHf1tLvDtqteKqJYRFH1fvWFb7TE13Uv9GsMaFF1CL34cqfR2TSN7Cu",
  "key42": "3zvNwcEYacFmb4tZZtAtv4SJfDoT4Sv1tyQmZz35qCxPYaua8yfRpaSDSCL8uizMmpv9EGfyzdYqFhsa9acL2u5p",
  "key43": "48QN48AapnNXwvheX5iqZG4kuCFaaqY6koPa4kb6wBtpnQ5WB5XCn4Eaxh3f3vbTf2DYresUVpQpsdchveVHKxZ6",
  "key44": "nr9LQZTCf5LRiZ44sLLQqjsodT3eDh8Ub2j614nGeYKwSY1sa3ifYdLG2SPRKiion36cP9kWo5RtWFgnE9iRwDS",
  "key45": "apfGxW9KP5ePAwSLTAkKUdDCGMjyaetBHhdSEZcWaPPX9qD692yzJnpWdMHGu9w9T9TySUbXvHMpWpP9XkPkqTa",
  "key46": "37zFHiDwCBJhtqJaKMaB5n7FGd8mTfURKPTyEu2hJGFS3QAQkLWqjWWr2TtuuyM4jzWT15aEW2T4UWepigmqjUS8",
  "key47": "2czSeLpWyJjNMfrF3CMC4FYSQDPtJxNyubv2VZswbSvdyMrRnSiB7uEsmT5PFsgkNiNBDa3uoM5aJKHCiRdaFCzo",
  "key48": "4rj7TkYuhdAghY794Rhm1pmJGcGQ2Ya1GRPbirpWn4NaHXCvSP6565htvjJKCHugVv9RrLXjZWfQH91wkj2YM4tn"
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
