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
    "3qVLXdypdaDtA5rTo2W8MN8JeKHF7Ek1yqwoJkbSNjNA7xhyLJhWMhjcdwX3KDYiNipwpRXwUx5vowvjxMSa4FwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABywJUH54f2dN14AF44RertujZYQ27efq1ftbqAWQTwcohPsKPDYjV8DBMhrLFPX2QdACBdwgbmUzBpZ8a3Wn2P",
  "key1": "31JYyykjM4Nazu8zcskT1Y7HhbFvgk2hUgYGvsMNCDSyx1Twu8g37rUY4AU5Etqy3NRLW5St2GLVmSiRBx77duhP",
  "key2": "33FYfqkyLL1k12U4HcGC723hkZFwHCKsAV3iTUmvuSpBWq7tZxxQczqei4CVqbFP4E4vDhKWPSmf4LvY1Nnm7Cqm",
  "key3": "8A5jXi2Hhc48fm1JCgqGKiuFo15mxDZBHcWGJTs9NTHnf6gqx995YaUbxBJB7a34rWM6P3A85dyz7XdteCj4RZy",
  "key4": "y6zk6xavh5Bv1EUfF2LeLpTjvFyvFA8DGTVREZGVdTbGi4y4Phcp7pcBWRTUYE9PVy9AaAnbCzMCALQAvb46JT4",
  "key5": "2PmitukY5TQa71kVSszSBH9bp134eCSGtJSZZbYxgPuWYoNi1K324fPwSNEJLnMRHpgm5vE9GAzLNAZjWmnDevCV",
  "key6": "3X6CQ53Uie8cBkA2o7UBx8X9Q4KrapC51LYky2zTnUf78p1oATNiLGYpZL9MdzGYkVtpXZzgfPHMgqfnfJ57SAW9",
  "key7": "2F2b1YAG3E9TyPAsdEMnDdpqQH7T7168hEZ7X2Etf6Yy95z9n27KLH1E73koQZ4pPi2DszRtsEpfejvvPktgbs9Z",
  "key8": "XYAzCnz13Cy7ZdXbhAomf7b39VPjBmFomzM9PdjSyibPgCH4s8XBr1zA5Wq3wcy4wQLnwnhMMrGhVByKKHhiwix",
  "key9": "2DijLm2tSC3rpDHAPYgM4PLhrNRaSL9yPaTy2DoPhY2y47f2UXeYSscqh6DEQAWaSnbSTLQRAYeEi4Pbnp8x1hsg",
  "key10": "5jkHKX3R2kPPeF1KF8BdxGrCxGS7MsoRFfqT7WMeepmUasotr1t6kJ4oQJLsgZi2v4JdNQjeqzR9CeeZ65Y8UmPY",
  "key11": "tfh5C33D6GNKD1SFyAHFMozec3NACZNQ3Z1pGKGpadpuPkkwvVoTLYVidp1HDbN9XCTAbtdC6A88pVJJHTBcs6W",
  "key12": "2bP6BYS5LWPWPcEqgUz9uE3n7v5gess1jVz2XAT6y7RGh6n6E1Pymc1PdkCqHVdJc1PnHK8yA6wfCHLCeGxJ6Jq5",
  "key13": "3pgne8XYRpdNK2r5CBRaR13HTPHk8MH9LWs6TRVgZkcszBvqX85tJjfPyf8gDRVhqpRxr6uXA6x85coo5LtnB4uh",
  "key14": "4x12FTWYeWVgjK8zaf7i4PzvXWAH69LHkAQgYZcaipiV3yNwkn6dJtJrPJC5AqvwdkPVSQeZ2d9ZtHRyWTFYs6oG",
  "key15": "5iKsSPNsezSPsahBGGWdwwmBFodzDvmdbf56Ydx3goUZ54svG46GxW4bY4xbqkbqhkqPwYwDsXoDUatdEiXyTcJ4",
  "key16": "rBbWfxcbR9XbAa7EdGqpDZbj4Hxn984xJujDbLiHcQM4sm8TDXjJ8Jqk2Yg7eB6bFci296xNca4mY7676MrPvRk",
  "key17": "SeDkFMoC3C9q4qrDzNsHq8bX9KpR9FQXwQDkEYcEaQ91LAGsWpMjLsCPGUt9nYZfkyGrxEAtoW8BwE9Fk3VG9XC",
  "key18": "3mjsrGaHPErRrCPWbkNXzcepQZMs9i1wAjXc5pE2u9YAT5S8cToktkvz8phinrPpFfzjymqi55PEmqMAwkSH2Y6V",
  "key19": "QcJswCE9d6KAb6La4J18RhvaZZqi9mgzZTQA3Kbcem6mtsxdxrGW3c9MJVYKwBkDrnEz1sjNU2m5Xjamgji4f84",
  "key20": "3t2EKNRGTbozyRLcBh5a3aqaAjU6FughjetH2Hc4U6hsbisHKFtTVjkwJV7kqiJXX37ttbMnJKCnCgUcS1kFdfRX",
  "key21": "27H1YtX91dKyPRGR35fmiJuRHpjtAGGRmHhPjD1pjN676anvrQLFunAdxgsStB6c6p6Se8aUzMJGhjF4a6bkVcSm",
  "key22": "5FLZyFU1sFR3McMyJnGQ1kqAddVncno7zZts5Wdfdf3MYzGP8s2hnY52SQ7rXmEAJNccYMpz7Lt4RHZQsizuThmM",
  "key23": "2BgRrCHgdVQrjBfqsLi9UkP1iJqwGpFWdmnA6w6exC8y4WQdEm6edyZZ8bEBHHQe1t3i3DD3Chf4euNNg361AQPJ",
  "key24": "3WHmDTpTYQkxECdN4rfCXk53wdAiAbfe37yLjabm3qFK4MotqehZE5h86hmMYxnLa5wRfp65iaAEwEXMhhYTdrc",
  "key25": "5nJ9VdNXsCiQ42y1gKhSFLaDoBdMudZDTjoG7R6Wo2MbPP5odHYbCKb4Re3ujtN99sxHfRWdj5uDxk9GXBjijF48",
  "key26": "8BT4pojyoArUntXA4ei6Ar7bDkk3tKQVv6oxm611oSr9wiHmAn7ESKt4bVcRomUCQsUYzVHE5tXfpSiQf5bh8BQ",
  "key27": "4LNCY9Q4kS8zN32t9g7Lufu4HGJ4HmmdPCynWL1T56Sq1kAcJQfsCEFKuRfbqdFZ48fChmA822C1CAfQWvusNPx9",
  "key28": "61s8M2YvqoWzQh8i5LgVJUbhS35yFBxpSuWn3FDsZ4AR1q5GpqJfqd43rVXKNPXTHFSLk2SEyRk3N5zvPsLBvnaz",
  "key29": "4FBQEKL5YrbgL2WahytX6kCn4p3HApuKJoGqkpVzFmb5tCnjTG8qMMD9SatbnkQKnpYtFBNMD8VSS3bEhczaZezh",
  "key30": "2XYRQHQiqAKoJ7Fpue3RZm6iHxMLuvo8BNStd9s6YZYjb8e1Ymhp6VDLYr379d2M2cvep99fUdAVeLJ2BiNxJu6Q",
  "key31": "3jQZ5GVNa59TifKB1VYmbC29UHpVpyYvP2ydXW9GqzNvzeEWqDzGB5cquwSzSsGY5b2VUATMgruXqby4bD4kJQSb",
  "key32": "2kNR2tbsPTqjrAgkJGFsLct3LNJjSvcMiS3zRgscMbuUohFJjgaJHpovjVJqDmXm1PzN8WPvcogRQKpTB83i6GT3",
  "key33": "3bfDBK94eNxemxdiS1VqxtNfyjVijrZyUWXJRTZVwJbD2H3wGhJSnLchHxpmbEViescg17KbJMR6YLk6MfBvA27H",
  "key34": "3yn57gw87F4cdckKisYaRRnJnhxK5jzycmraBQF7jN9178qpKpuhsorR7FUropwtjgrvBqGLdER82Wtjb6TmAeFx",
  "key35": "3kWSowouXG3LkCieCi4LtC92VpZ8MJikhTrgHQ8fQKG49dPYx1GmtnZbW8fyYbypetACCHsgzUzDTj2g1AxztNAc",
  "key36": "2FefYVktF9H1pd7cxD5KZpiPEyAueFPNz8Cjxrscu3o9UQbXiBQm1TLfFJu1NNcbakqbsrp2ZoyUFrHjvsh9mraQ",
  "key37": "4NX9oJLWi39zPwvjFyCPQWFSAmsHYsEsdFtSJ9DSUYY91tsqjh2ragDQqZi6tovC7HuchQNC1GAScCycq8MhpK3e",
  "key38": "23dovhk4MgJ6ck5GmAsyWfc25vcZHPYgzmLnEdMBNcTyg5cwJ3yScUH6rqpbpJkTBRPHHaB8DJbV8Te5jYruAqHD",
  "key39": "28wEBPYJPwwYkGy9qpqZVGTZbqVZtJDwmKNJUcwMDrp3TzkNotxFSgAHufsVVK4AP7V7DBH8E3QPganjHJQWQVzq",
  "key40": "4r6Cyy93XiEgFX2SrezixQbmecycbVhn48M8ePQ7DSLw9Ww8zL9eQ389M1TPxXibToWusUfGxAjb6efC6XAvCXDz"
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
