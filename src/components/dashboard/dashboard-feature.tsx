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
    "54Jx1nHJiNT6Rwae9dMrE2aAb2XehXGpRkEgnskhnMykGkStdq6HVCBwhegXPK8CbgsauUsMBSKS3nRT5fMUsNg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zmw7j2Fm53WQ46iVQCzDrcfR4oBP139kJ5c636xLYrsQZyZe22cYUVpg4x6ywjBtgHg7bU9DvheByrxHGsiALPn",
  "key1": "2S9wk6ViJ3vTa7PQMShj4gGTxVkur8zQKHTat1H7WMpHReN4y415v8HrgKXYvjkWY6658ibkhpqxQD9pNkhJeCtp",
  "key2": "5KRtjXj7zboehtXALCZs8LG3cERjp7zWzVMyD9Neq4v4RU1V4drMRrzDtz5jDpzjrNxJxDrE1e3DxGFQ35kjiWx6",
  "key3": "8SHMvByqJszx9DvdM6EnQnk1JbfD6DkTNd4YF8XH4LwQJUt5TF6Tju3CZFN4mZ64AB1bACP2rLYFhXnWa24EH6Y",
  "key4": "BaNhRAz3UF6uec7jw5UenbuaL6CkVp96wsqU6ivfzz1u12Q1iUfh8ZmjPGbyvgziX4m8VCoohgSxk9jNzARFkj5",
  "key5": "4ub2Gx9Dfk3NLqvYNe1rGGFpbvhD1V1GDyQYHCooRumHfqjFE7D4gitxJNYa1C97ae2xwnFdZJRrTPoUJX5UcAFb",
  "key6": "5ffQKoN7YDLZc6GVQXbAtCUeBbAQ7VGZsYGTrcBB87GjSzz7TDAbcQcJxNM3ohcREUGg5NdL6K3dqaXYDNqep8qP",
  "key7": "3A9e9YBVqnMCZC12d9Y69PQsFcLdemjQ97PhytQCGEZQApKvRgA1ct992nhDKd7cuPTEC52DbxxEQdCjxxieBGmb",
  "key8": "3ivNwp8TUsqPYq9jF5oktX19F3XUbwFoWWiUnz3wHcCfFYw8QzKPiLDStw6A8XmoQdG7QjyjoZPWURawGEugoZmc",
  "key9": "3BSwXMUkNyKGA264E96Pb5uVGehyDUZtwaSs4Y82vUyHZrUW7f3AVJCESR9jtkpyJPfFydNHZd4j7hvZV3kEMVD2",
  "key10": "4bsNxaVoiSjGkLq5kd3VCsdD4y8i9g2GWPBgBjT4hXfYsCMNUNGScyLXsgVChbHak72tqj2cLLmjULgkH5fv4iq4",
  "key11": "5onstK6UBmwMXgEZkNeqkeQQtjVU1MTNbnffqGVpQkuQP1e5dKKp4KPuAoLds8tsAUNFnSvfJYfTXNmwDT5dLTTH",
  "key12": "3kFksFuZbHY4LwSuZZHKzALfhUzD5oTEwhHnjhSGuE1riUH6NmMTCU4wnxMS2ou5Eo8CshXC9mRNCxZyTosgeHAg",
  "key13": "3B5P6UAZM7nUFH5S1AY2CmtwZAbSn21DytbKELatPP7dUBqZP4G9zdHG69qxPJnnUNsS2XGCT7j57YZuhUoAd5iJ",
  "key14": "2gdkw2ACFKBrNsFK7CqT7Vz8Dw8nWL5kqyttG45c2jUsv5YhKwUNKJpivUz754cuKDwqe1DSisHHoeLKZZzRmVy6",
  "key15": "4PwUMNor1qWx7fo3nzoMVQr4C9W3YFH3aagbMEmvxsTZt6sy7zQfgyg19Sq8nXyWHK1FuTeLHSSrTgVwTxm8dFm8",
  "key16": "5ffrEW2QFXRmSasPLse7vGBijXkYewonr5wvE1qsr1xdgoxaqLMaH1XWD1q5o2QyTdapaQWFHw66Z2ppPsKXmMoF",
  "key17": "4S11E2Txs6kxo2e3DBXd3KgWgwjtYaMmgQQyFvYeH1Nab3w1Ghd5R97bF8TDXTZ1GBPGwRJ5BXNBJaMaX73a9EfC",
  "key18": "Gr1NmW5XrxSZvUgx1L66kJBjnXQoDvBjRWbviXQNgh9Pg3V5rbNDHVoE7CKCmSNaPvSbqw5AbhtTXUn883toTGc",
  "key19": "4T8wUQfptChTpe7L5xgD4JgrE9mhdNUjZbD6p5wRu7yhcuQvWA943siW5eQ4CwbRHFkU5fdjksnHgFCXY1o9GcLA",
  "key20": "2S25vEucicTUh1ie8BsXQRHJ17G9sKyXWTyGVmWBqU9Hv7igmCRTyy7rWuH7PjXjVtt6tfyXe5c6hLYcYQ7NGMeZ",
  "key21": "2dJdfAv2FUCSYzSyNTVXkPhrwBKo9xZsZDwW8xe4MHD2nV5vrxY4bR82waevHPjF1qqjaU5aeCSnJuDRRe9MsYWs",
  "key22": "zQBgKMk4Eo3ieW2EWBqLY32BdmP4xvY3YMk2rJoEy57kSuZJ13XnUHFFraDpbJMVnrxcA3iCbE4EqF9Eem2v1kH",
  "key23": "2GUncvMPUCGirFbDeBzspDbTDpUvDcEE4u7YZbDup5C9Rzg1JkG1xfzEbXMWbkrrYHed3uCs1S25WcDpWZosnpvc",
  "key24": "baSBra3atZeDc4MLpmZgzmWVQaJcVbR4z6GiUcmJ8QFs3RZDC8NsZoLFusyub1F1aC7b5LMebPsFGSUekFw4avi",
  "key25": "2do7ptetGrTA6tFhbcF3FgQKWHw7gUPM6Q9cbr2KtzYJyQ5nHKsck9MajZwiYYjEt9byXUuw3DMSTQPSrpZtuQo7",
  "key26": "5yoqPKJgTVCqtmsusTdqBRwm1vH6LqMAjZxgxmDU15gXAzp24hzPq4GTDig2QyAjdC2erCJbmS5CeD3duNHR7Drf",
  "key27": "3PkapgQcgGYepAxVND6P3vHE4ywkrzfnyMMVL3HnAMC583na3WjG1KJfz8MYr1CghvpmUGjMUCctndgNDXQMJXqu",
  "key28": "2nE9MWzxjvMre15pQBVBBbG2axkjsAAmqVDDkTizUvgU9dyqo5WGrv1Tz9i4Z8f6JCRiURcYHrNcQgxihs9F37ma",
  "key29": "UAAPYCWVUDHBCrba6NA2xohcg5imKgTV1yjXEQU6qW7zWd6Gko4pxx7fT9mWvvmPRtCgYuhqe1iVJWVVDdoBbiM",
  "key30": "3jMVLCXrBnyHjvizrCBjR1wKgq36QUwCCM6GKwfRiqqSpz2zqGw6trvg4WUMLDLvqmUJJEtSym2wK3AMFAfsZGud",
  "key31": "4VSdXPQN74zhv9hqhqcY8ZvSTrJ71fFTtSDYJnLgpKZ3NP8dtcKVX7gzLyRJqstbTVkGDvWBGb8cYSt21usnnWpH",
  "key32": "4Gufwoj8H5mS9x28U9QXVUZ5apAqMjyk4aTTWyuH6BQHnHsWSE3N3nh89rMdDzrbVN7PwznJTthYpnk3JTB6Lq5k",
  "key33": "5kA6oVdfddyg5gkHB6ksvr1ZynDFpE7Y3vDTfoSxGpUe6Uf8FTAUVMV8b5VioFiwJBiUHC8oreNmrdstEdR8WCd1",
  "key34": "4QW8VoHT47yQ9ym1DRSBWPjaB6xNWJ1XYF5EHp9dsTLCrCTMoPSFbhmpDPetmFvNZQgMCNgdjEn6S9gqDm1Z7Bk3",
  "key35": "4S728AhDa9hTRYybg7RainJUVmugdsKVAf9jotxSJ9AjxNmVKkd2FnhkwXbLvUjM8vJk1FufVJjdmVHFCYtuxNbz",
  "key36": "4ZUU1N8F9V11TRBDDs99UR1NJJb13AUi5BreAQdDMCorqwVeaXBrt5reRqzHaomSMhVbKEkNFywvURA16Y88Ezzu",
  "key37": "3cF2grPWn3WwRyEVV2hnBk5ZLDBenfBbx6m5fEt3sEZdG5f9sYHpWJJqoCLPirzF1KC1X56sZ3U5oVZgnUdPxkQi",
  "key38": "3GnRUjhk1k8SMjgoLUuX2XkrKptyC5vaBnpYfqmtJLGZYaU4SJcrxKojJLzvYA2JG2YxPpZgBiSSSiKF8rFaTf6k",
  "key39": "2JzxmAHDaBiwEae5CtG5viqGk97ewKDYvYW3b4JYxvcwFhs36Y3if2mKGUNQG8tFu9HTjttNNopqgCXRFvtHhefL",
  "key40": "4nebmd75a97YWvEJ7mBzPvNgQiAB4SWAAn7KKuK7ZxXzzAu82XDq43u9bUvatide62iTUFDiNK6XB5ABN2JXBsUu",
  "key41": "2SbiiTkAp32mVPveUjTTC1cBi6CWXuvgvYpFRwPPz5RHgpUvTqGDTmz3riAfUpQiBwbjNcBDv5adCmzMKDvVgYM",
  "key42": "4XU7KxG9h6TDJDfPRtK6vmXGnF2dtcuaZjG1GfCEhY4eNnBHk8YyfMouimvBpG31K7cUmMfzRMeLMWvmaXkU5BnE",
  "key43": "44haEg5q4gaPvne6oyyjPQ3MgJk56s1Wc8Do88ti6Ju1NGsjgprRMHco6H26aWEj4LHcaaF5RJL58xoRxbLiK3pw",
  "key44": "2ajkCq5GAfmUA3HES3LdL5i9HT5WebZBurKRCPAM1WXcUPtuRc1SHU61hTMHciDSExX4fEvTPaDdmEx5eZvwjF8T",
  "key45": "F1JUW9nkTBdZwYt4z5TfRW2Ca4xaREQuF7JF3xUi1NBGK4Gcv4HvtUakKmufPCydLdgk9wx19pVPHJTrnZNqV58",
  "key46": "4xdCjxhrSqs7SNSknokabtqz5YqTfAoB5hQha9bRDpyjt2cz33cpwfD2g4WVyNiA2yb6WpnrSpqAppSFC74jVR3o",
  "key47": "K5ap1Ughnko6uU3CPknuJvfD5LtQQqgpi1XGS6U2B4YL3w26kc7TnfH15UrJD4xKdYwR7rt8un269SBVaCsSJkw",
  "key48": "UkMDFH4upVedPFcqb1Qydw5DeVCxtFbzfBCdyGe6MdUK5uTVJwtGS69WyU5945ZtExuryUjJs7BPyuq5GRzqgd3"
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
