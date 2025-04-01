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
    "V7rLEoNSmd1Cf7yphEwU8YFGboyomZkmUoLCNX6CYGrXm3CSJGiyUE7yvbpBx3bhtVc5YYerkn25ywDusnWCre8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32URFBppFcgWs991FV5QqJ82UTsN7GtR4GeS4W7nYeXFbYvVbCeZemv89WgvCevZdjSFES1DmczPiMXdD9C1UUKp",
  "key1": "5PCYokyBQQUjpUaCGJtm4qm7qgFmZHXrkxYnfBKZ4itJ1zbrWH2Jc2be27WG3K9Uqz134VVKtaeYUAg41HEs6RJD",
  "key2": "QAuYfUHFMy1k36wzLeB9RsYyYhNQgs2YPzmRJSG1GpoNxccPUK1E7ifJU7nHHwd8nSMfe8xtpYMVgTryiRLBAFp",
  "key3": "3KJdtdpAWNVEjsGj1mKpSwuGSmZgmdsuXDsgdt3kGNeNm4GzXQ2T7ZA81RKJh4JEmgEN4hAAx9AGCoDSubH52ADi",
  "key4": "5iQYizQ3dmghq1wJxVGnQj29hbp6iz6QErxGieUStitNi61KfLZNBDXhLNeDMrYuWGCBVLkQFndrw87nsFxaVep4",
  "key5": "3T9BVtkvMUdYhkevZEZFGtuLfA8rkViRAqy8jyaSBHar1xx7kNJndR919rHK1iUqv7GCjPBrSjedFHaQYN8G4HuC",
  "key6": "4roC8Sr3zUVzXieMqdgqzFgs2CPvxEBVufEwE3bnVh3BTeRQbfksrzBnsbenetErmhRFE41wamF3KXZFkp9ywAH8",
  "key7": "3Wxm6pDA9yDyPtyzDCDjVcGiNz5RfgjiLPmmviU9uumxkLY8bq8cvK6HVxiWF5p3eeHU1UZmDp4WfJCdCtLrwTSy",
  "key8": "2g87DuUvjdhd7TLT6oxYtv3mSEfA9s5SHM6LMCzpMpNJAewkUcoYCU5GEwPbcEut8sUpUvNHEXG4AsJZm4ZxKqaH",
  "key9": "2SdLbx6kehnCDuFVh92yVNa35JAzcW914LgFf4ZMLa9XkQGA5EbrsFg8B3wNbk1kTjeKr7uwCvZejEhdzc26mfKb",
  "key10": "4jU4vmKBpho9kybRhF9Z7iVNVZLF6YFbPG4HssrBXfJJD2RQN62auQLsy52t2Ajz2NWXbwMHqTYpmS3wGZBouSAT",
  "key11": "4oxpZb3bpvJ188DioSAZ9b9a4BZjVuFwuMwNbsCnqDuyEWgAcBvTd3NFpsxbuXPrbaWt3VaQwCd6pi6wonWigVhS",
  "key12": "4zdQ1QRr63RT5DyrHRzEmU8ArSeKB1NSPSh5t1yn1XUYT9bbJ5RLwqyyuFx6wfhFxsjEgtrTCZxdtWayQuNrAFgy",
  "key13": "2BXPkVupexUHP5m7Er2azqJwXvRdqTC9h5TDWXiLM3hGRgqnQGJaL1YngrEZXz1Q9aXyLQEvu9Xa8JBn61RPshAS",
  "key14": "4gvANpTxy2jjPxwhRMyzLki5oQ6Xenbxse11PvoiGVoWd4dsLYNpw5BffrFyoT6HDdQZ9VtXQBF1LMajuXs9MjMF",
  "key15": "2KuMkipT1DZf5CRCuDr3Z4hJRgwjMFAHaAtWwqvzV9LGprLZeY2JiNwGnsrvKxycExuoHsUkVnrboUqFkZ5CmxJ8",
  "key16": "3Axz1fPzJTLvHthNefJAVCBk9HpWtvXnvU4ky9rvHmC4MVUC32sB6Jtq6t6eMu2eENfYHJc2FyjzMxVHXd7JAAxo",
  "key17": "3YuxGdSVoksFfTGZ2A7FpLj31PKAJukmN6CzEUQaCRontgpqmXxmz9Mmy653tZgFDryjXjJNXX8kgRdxhZ7jhJvc",
  "key18": "4zjdwPt5AmRPpoCmKzFeD3XYyc3jFsujpGmAzaMtvs3vSTp6pPhk7ccdBuM5f7h4BYQ1qMVkTuE1pG6seb3zZSZs",
  "key19": "5R7D45M9jBHfn9cHg3dbgGy1HcgMXnUxxoqRNSKV2H1LMnapZ6rJp1iNF5bXUeNNR8UVCZXuj5zJHZ9mAK8XcTdJ",
  "key20": "5AmYecA1KVueZXn8sonNCJixmoqEnudgMfWKYAbGKCFkrxe647tANtNhGx4UmMgVuXKgo8WNce3T2tdRFLv2R7ZX",
  "key21": "2Tb668hCKhXtxciPFsytJpVwFjM1ybHX5QZ34aK5dWCPg9YsCArvYPw1Z6DtZ83kcZfcXC7MJR6b3T7xsEZtVWj7",
  "key22": "3NHA8eB5UTjM1D8kw1banHmn79iVrY4sigDp5HFFZjdiudCnWTiTG2bzB5RLaagEVRtF9bB3px8xjAo5RbFfcWvh",
  "key23": "63Se7SPJK9B5BKGzR5jEkypA9FoL6kgjVpBXgDJ2oBdtucr8AaVXrbTVqc46taMhFbuHY4auyoF5HM1vZzohobhZ",
  "key24": "59RWDNTym3mzddGwCUjp6waRWHXM3mRgvdrNpHpMo4G83sjJxp7qpmNM6gPqD4Q2iMaiqdHPT66cReEJ8wawfgy",
  "key25": "2V7ETLtg95UcWvSRoVxdceY8sWFSiRpfhWoNVhXdD75zSHPCyr2uBBjzXE9XmuHGSn5bhEvLBWLqYFRjMCxmKdai",
  "key26": "4tSQoru4DBhciHcn2w3jbzQ3mLtVuDNqXRdsA5TMkWXuJB8oqChntTrZ1mJNGKpgWbJXJWLRUTsE3Lcxqp8d7MKm",
  "key27": "4jsqmerdF16RK1bcP9jyDJwqPVPdTc1pah75oLRmjBVuSVYDQxPtWtKJn2EB7aCrEmxGtvbofJ3JR8JHdQQoiYPz",
  "key28": "2vfFJpNH42jQ65xiLFGfsQfPxjTh23fmbhyerVUkErxXkdnCUYnqLSqDveZBXn1ErigL1cFtL9djUu9Dxrv114vC",
  "key29": "3faDeU3GDMDNpVUh5saJBZE59LeMJystr4X6jMxFQE1Q9PsTRtw92YCG5cKazNoGmBmr3QSAQMh7x1ybfaTkk56V",
  "key30": "5ZtkSCzHXzh492QAxj3Y6eYh85WPeTgTco8eZTE4MwXFmoBfZgosCDiHJgWJPZqtSAkqP2XakjMv9XQ2xWDXVK7m",
  "key31": "3rqkLXkfL935Zy9xyaQvNzxL6u3k617cS3HFE9csaZaB5JkSZbBRJmheX2fiMVxhP1bouszfDka9vmVQatmGQfoG",
  "key32": "RBisoDWXPMJTaAiwinZAA5qrPx5n45JazDu442qo3VZFyoX6FpL2iL1NgCPZVSoDwYYKatzssewyuHi4dU9rkDg",
  "key33": "4f3BxNvebx9uC7MGTnPrB5QX8TV1ubWgp6BGFCFnjuf1aHvvtvvE4o1NMc2V8jagWMvsQBef429ik9YK9TNTwNok",
  "key34": "etbi3DDhtDUAhHD9XLpzVD2U1brCXeri2JPoz3hNBKHHJktYfYCLwy6GkafyegzvvrLNn8dPaNQiW6iH87c7jFD",
  "key35": "ii3XoJS41LwWJ8zBBUDru67u4uQECy62jCrSNXY4LPKHKbcgLW9z7wTUZ3HWp6TWbEfMaLPAUaXDN9euD2iFKpz",
  "key36": "2hv6ohxB8PyyWn6Fn4Pc6t6YqbLyRsARfbQ7Y8A8EmTDnXsxh7GqBFhvqgXTHzxCjFL5eFVyLgNAd2MXP1JS8zkR",
  "key37": "4FrVAkEHScyYhJRgSeHB6WV1sxr85w8vS8nZXzWScpTMXTuhcVm8rzPRWF5EPzx33S26Ggx7rfEf37oX2LS2Se5k",
  "key38": "4sp4cp1r977DpBSe1Uh2J4TM6XFGbQHRsX9iVHBdH3CU79cEpsFC5G6puUEhaF23NmUQsfpSZYtqpWDadKjNQn3u",
  "key39": "2P9q9hqSG7F5kHMAeYY9Jm35Z9FoKeHMz5QCMiYfJGf6EAHHuzf29Jj7dHk7BTuK67x3qQp9jPn41wPV46sw9Hz3",
  "key40": "5PMPFp3pPXPXDCetiiLRGn7WJNbUNDDm6cMmVsMhE1xnpnFnGJVApadT63dsdSSRuXHUHUMPyTbNPP19FrNWJeBF",
  "key41": "2KgcQ1t3Ffs3r9meUz7kXYQxUpPygu68rqFUzEmWqyqmACFUYt4dmAyAKory5t11HTtjgEkoZmtAz4dYZc4WEvcH",
  "key42": "3kw95Vpj9iwmsC8jgyERVr4Q5BLacz5u2QzpeyhG72QkMxtm7YUXMZ6CgC8PwNRZn2nAZch5VsETPeD1DjPhg1tj"
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
