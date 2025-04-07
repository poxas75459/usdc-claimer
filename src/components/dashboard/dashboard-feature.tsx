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
    "3Zu2K5Ki9oYyYsCZJUPe9rGjyuJbZ3qMMGSYLeSoRpZDw8BAbvoZ8fcaSuFCC5QXK1hZPCCRVEr8UoDGwHsoLRWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwrMAHHruaqVzzcmSozDgajtmB7PhtpFnCpwTh4Tsf5pNUL5oyHDcPqhZRd7f9GwKUjvQRrLphogwLtKzQV882B",
  "key1": "2wiMuNx7QomA3D2CeTdbbQ1WQy6wHGE3SiShqgyXCF47QBfCHX6sUvLUg2FUHWTAy4fZ8r6V1CJibmxhzCgWndYP",
  "key2": "4nB93uthtZumNBv6Y8RhkPFJ2SDWkiyQQy1vWVed5XCmt1VKphkuSDRBKHPaSpo1mu5hEyPCJVFCstauWSacgCjg",
  "key3": "3QRQWqm47dLERuUcJwUvZBrVqmi5d1RG614kjD7bfgZM4Z9WyuHwSb2y7smrhtRsycvsDBLYNZvbqXzpK1XsB4L5",
  "key4": "3U74sR8zdoGpbbPcsgej7Ja8w15yht9kUQwFCcREN5CKxuj13rBzTn9XDMCt3BJqwhmRBoW5kkmiPfS2CeRhYt9z",
  "key5": "3DmarBofFHjJ6E429Q2kWLokh5CEfSAj6cu8dJRtiBMjdTxAdmTxw9xgVRMnouS3pj3Jbk96ngsLjwNUXcMFmbgr",
  "key6": "23wUKhKrAA3Bt52HaK2EZ3w3GMdK5ycSjtffUJtCV3PAury5AazVAS8SsFaHCESmbRcfhHyvv722VU5Nesis4q19",
  "key7": "5WY6ZKLtkkyQ2rxUBFkwi64mSSZeKbEX8VejqA1cogkkv3mu3ymkLu7Nua2pVWXSpaREnpGUC9kGe8GVv9yLNBxJ",
  "key8": "JSSZTMdd4aTwFafo5jrpcCaw1GHDzeDHcv6kmy9X3FfvRcStG6dszR7sfDPnfMWhYELaDF53Ab9chWHjaeB9FF6",
  "key9": "2cRNkFVBhX7HyuQEqgZ5ArbNddbwh2r2VRvDu7GDwzN1NsPmfcMKw8QHNTUck9amwC9q11RZ6aLTKXLSZuAEM3w8",
  "key10": "sASVtbYff5h4DD5zoStp4UxezGkfzEozxgN34djymhZVUfWgsouKNFzXFcj1sntacExE8jw7yhhQkLGN2oNJndj",
  "key11": "5ZwBBM4fwEz55PWacCZVpEoDAqRUwgYdcGhakBMo3ezgKhHbid1rxbxPraAX5Hs9efvqBtJBFZjoT6MPkbiegvj1",
  "key12": "QNxUrvqcp7KF6UUmvsavUHzH2JtT71pMmhnX7NNXLWznSijzxmtPLhEALwoFV9o6jXyGDpPBRCm5aWr9ANPrgCf",
  "key13": "4QfvjttAHueZNgzCLb9VmhoXcp1rA7CLd2fYBaiJrxTNGrfzk8gapBL7bcTi6pBxTbUvMZ6by1fjwDa5fEcZGb8N",
  "key14": "4p92GTeqdtrUL5mWBM37JUezSj86dfhV9JGz1bxjEvKr77HuQFvtnEeXhSrU3RamyrUJphtfNDoHsoma1CjC4kDV",
  "key15": "4r8JzmC918zGok94S95Q1T6hDPPpt8FRwP8f4RiDR1f7eDkFG3H68gsoiGdJGweuPfsJvUi79dMQCZLhSEvR3Z5n",
  "key16": "5g3a7BV5QhhrZiQBFrS4n98efwmyWD9vLDLDa3WGmjkKcLxWxNNLwmpVfdoUEHkWQnrWk92Qq5wCeTQiaPgGNpiW",
  "key17": "361TbB797jwxFRUmQwimBmySJni3x9kEsbrF4VeKZHPmWpGY3rrYkgPZPsSkxzu8vDbTLiuLHZwtabkSfamAJMa7",
  "key18": "2D1kmHyG2DJpgGXVLcfAKRA32qP6TKNU3VAdnbqbahat6vsK71VgQxJF6PVT7SZGJo22awMYsxskGxngfZkdYV8w",
  "key19": "49G6GSo5po2e6E5ZPvrMJfC6NMTJKf6WxQ4Q5UkgQ25DRvVwmkYxsdqcQdJem523hhiTwsSMJDpTYpsuKkqJtKfu",
  "key20": "31irW9bLKv75EnqtyyouBGMJPkcYnZDDarMA55hmZKAn4FP2SYR5L8XRgDy7YBH254jeCLGvdY84LNNQcWWDtDqL",
  "key21": "3SxhfLutSjAjVwNn8fiXKMQezz3rhvzGoLD9XGWPXV46qBHfcCr2dgV4V4CecK7EtWTwn9zz29kwfLUzCLkJw5as",
  "key22": "RfYpPshRZpgCJZ3vPwvF1o8Z6ZBHu7WrMjyK7NjYqfpEGpEnaQS3k9URcqveKySxQkHS2HnH5kRqrUKJ32LUEvE",
  "key23": "5PnHRs95xvNowNJSFLALQ2TiLQYxnEs7jD8sFoTKHEn6ccEUm2qZiqfCGeR6pUsrAdkDoJrG31eM44a8PTsk5FU9",
  "key24": "5bgKgcvTEU3kMkRP5rtCBLEtHAbRcDmNbrcihLDNBxLCzZ6aoQs6vPXnsYj7ib3Vuxh9J2xcMs6JENJFpygv9kaH",
  "key25": "iLdrvAcSTa8r3k2LBmRdcLYMowPgQ7vDx2bmB13ic4ixtv6DW9NSqydoHQJLi6eoS8VgFmJbzWjkJ5nijJVpioF",
  "key26": "2LeeauGaZHRBMgQni2LG1xsQETgVFQhfNtXjhkcR6TJs6sdGv5VhjvawBLGmnKeBDNRx1CTMMSXap7vGgZ62WGq4",
  "key27": "4jtbuXbJTod2GKmJitnm4sTfqgsJZSfFteRvrUfCJ1NFTpFpJQtDbvZ733GPRX7yBEGSS2d3JJBpnn8kEuZ7RnqJ",
  "key28": "23MSRAMp2DDj273cEcdJXXUNiP8Pnjic3itqeNh8t3Kab8JuyYCmMd1vtg37XCZhR1Z8WD2JN3xeGUJxminXF7mT",
  "key29": "3wa2DvVSoyPrL5T9tTZ43hHgNjWFZGthArd9RLbnPHuYghKMDrkc5WDdWFZLWgCTAa52NC3zmmPfDVeRJhwHWEp6",
  "key30": "5QxrZLgX27H34QqRPw1Fwxiajvu5u8iqBzBeT1Aa6LLwUr6fcEC3WguP4U4XBu665AmxSCWXMmZFnYmjBE7zVfAY",
  "key31": "5Hee2dEaM3oHrUnicSZt9REF9EAxSU1n3BkCRuA9BCBgCuLdzut1Ne1vp51zF1KZLUmH4iG7mTYm7MktUX1dYvZS",
  "key32": "3byfqWYBrGK9H81WyNAzfGezR9EPYFQaK3d7QgHNxSMB1G3G6B4omdRcxnyXUocEpRKmsozQ2bCSL5aKgJCbmt1Y",
  "key33": "5cfhVpmqdBkNCGj58UC96E3uGdC2nd7KMA8ASe9pgZZ1mkrc6yiB74aWUKZM3Sw7nkfxYecYcTcTk87X97QbmYTi",
  "key34": "2pDqADLQFv5us4HjEf7WHpKsxNkqq828t229JLy9WU2CaaQ8KQ9ZZwQFvqE4YvSS71N2GxLNe3eerqifY8egmxwZ",
  "key35": "3mZtAwhzbNRX6Nz9UAFabmL9JLZmqwonpWywr25h8rGxztbrFDcjiEg6u9jmJzuqkmP3kYEEVVyon4aXaTLDaD4V",
  "key36": "2bKfyWhnCNQ5SkKMs4NkaVE8brPgwjHuWCAH8HuYcLGUvY7QjavEsgaLEAiC9MKYQX1gRehqcbvQRyKrpLvM9tCa",
  "key37": "2UU3VdkEEv3Upnf4XJuxh1nNb7weVrxRhzBSEnWoncPh3GPbUo7P7Gy3iviKbgMpeS7f1DLaqFvRhsnNRAmTSBEh",
  "key38": "3Npn9V2QSYcGt84C8eG6v1TwUYojsGbheAJ3bwT22PbMMVAALbftz5ieCrUP58uKVBY3oHxk9SoqCPeEBgWGDjhM",
  "key39": "4xgAriLdJDnhQ7xw5PQZAwx8EPeZCvb9q7GNTheomPNRY5WMpKcmCHVDSDZL81Q1wmVkhKzuXMH2D7WXxWA3ALp6",
  "key40": "5SZ5GgDYBq8zDT5YrCzSVLv25hhUzB8sXxjwNNgsrHjAS5eAKRxxsHpgPrKKSMEFfqobSUJwwWuP28g3JniGiX84",
  "key41": "5rTPgnDaNBn16TPExUkbM9Re4z6S3XqZ3Uaxh78W7zJSNnEXnggX8PvStSp1sxqFNM3z9tmR4hpC4eA2yeaP4cbo",
  "key42": "QLq8G35XjGtRNZNEDzwXCAxkNnRBVncH2dGSvGP1axVVo94F3d6PQu8iDDMTVzPdPtQS8MVGvnVMx9y1ueR7JBq",
  "key43": "5sh8kopgDVSkriiXeZK4HVWGzdwkyRx9wKDXdhLoQgMhz68ndEYGbveyq73b9pqCnNd2ZeXzrnxnigwKm2kms1ZM",
  "key44": "2wJad4X9TZjDyueHeeUwUvNttFWHet7L6BKfzCU3aqpUmm3XKwP6ERt7ASRgfzagUisMfswWBVpEz8xvWGcvT2Dm",
  "key45": "3uDbvc9Hiq648ewWyqbWgG9HEPFq8DSyNrRQyVHWfbHReFsYihT6ymjQWBoJTczmSmoyktaBFsfUJiAK7VyFWZcc",
  "key46": "4qPQCXRNGi3Gp1kEPUpG4AifEDE28sM9wS2JbBiJsZoYLyZSE7g4yy6nvVpzPfoqjRFGhvTQnFWaJt5av5SGvsB9"
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
