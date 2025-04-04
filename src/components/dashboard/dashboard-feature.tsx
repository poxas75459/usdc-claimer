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
    "2Vh3Ez8JfBEb2ise324LSmfKC9RgT1iWxx3wFGEvgEzfiYdbMLkYFHuXqsDvj6RBy7ktXbKhhbCGWPhuZh9td6MD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rMjjJ1A3NLGEsVUdtL7WvbqX1MChcTQJKwGu61HjTfYw1D2Goy3xFCjdASQYsKWjYvYCNiPVyth34df2NPj6jY1",
  "key1": "3Mc7PpLovSutYmnaZpFxLRxqLoD8mYaNS1BB7sj4CGaTEr4Wps1JuuEDD2giD8AE9KraayznmaqYYt3wS4raQjwN",
  "key2": "S6vfi8CrUTwftTkSDWdHVrKNBYjWxwwRaadNZa524FdDv8BULYrCNeyimvbA2bg4Frn4AcDKEVaZ7m1wGfhJVXM",
  "key3": "ECZqpzVBob3mWNG6j2xnKQy4B33DNdfizuvPveUREhKaX77pbNmZAXU1ioc2J2XPrchuVHuoqugyVSo2QcCxDKW",
  "key4": "2wA34npANLbZVqvWYSStNKs1b2SRZHZm1br2S7UKYaz8ZoeUqx6LAc9UQkjyGh2hF7iJHJZUJeRmM8ye3T3wxLDF",
  "key5": "2mcSmMLBYwKWmT5BL3xDYAR9wicxP3bwRuQXGxVoErxmAS9FqBiWiqbwEzkjSAthGH2uyxZZWwrM6dDDgaTb47of",
  "key6": "2fpgh92EQQuk8ndjJY3d3ewunfHM7GND4f36aY9XwaLvZWrsKcpqPxo57BXgoveeb2nyEjynqfyBKydyx8By7a9r",
  "key7": "4KkP9h6t3m9QCLzxThfWqhRj9peSwUYFc7uBXQfEU86A1SCNNodjxvBeLFpgQA2gPa2AUXhjTZkEdt28cBRbUJuo",
  "key8": "55G9UDWQiCWBUptnQ7RA66pv1atSpjBrForXqj3sCuEy8rh8JiMsL37JbUf5NgtGUhYG82vMoiEBRHEDFFhjP2i5",
  "key9": "2JgeXJq5LzBR2mPVgqw8TMZdQwjMf46pPaTGh3Kf1YctqAhpYa2czjfjTuFRHEdyFQ2wTnqbWbvHi1frivFpikxc",
  "key10": "5iXPc9JQyubTXSR2a446sXTkcTkp8GCamHrb5DYmrp6geBBaYGx9MPnJhDHhTzfJXhuaCXLfdWnBnphsm2Mpivtp",
  "key11": "627ZKDmqAWtDCj85955AfAqs7NaLHLbSPZBUkAbRDbpXkmiDr9wiHun1Ly7qWj9nALwSRAbQye78jTaTFVCXhqNc",
  "key12": "5yzrKySFHDL2rV3Rd31vHmmixAGHqFXcKeHmzGq8oWET75KsdKfHjXrtHPiU1BJQWFLC3Qp7UysRxbz4VNq9i7Ba",
  "key13": "J3WMr3rmDx94p4dZUPfmFvBqsNmadRoJvDuZjUSidYDPf3B5F2dcrdjaTiLhqkzfqiKTbMvpLF2tYvXX4ae3nhn",
  "key14": "3Fkz9zCZUoiZPGzHJ6hYaqy6DwZXEHdggd4kuMHSFS1W7ugy64mCEWn3tQp1H8P5xgYZT7sdrdp1AjQTMkxULN67",
  "key15": "2TPJbzWvAkuLJ8h4gc1hBvDrFLWhkftNFS4tmSTXzWAspsa4y1xjYAR21gg6ersRsZBtTqHzHtRYgm1FN8WtFvMA",
  "key16": "4z9hU5PWtSwk8DneMJLwSMU6zpAwp7c4UXhd8XY5XguFSrWkFfhEisyiWtNBX9JcZySCo11XXy9anaLxXm1PCLuK",
  "key17": "eD9kYJu47Ex1n2L7CH8wWvmMusjQWvuWzUAqC5UnnvN54weGTPrU2BVMxcSp91bX6ehTwzxNtsFGtv7XCGdHWLQ",
  "key18": "omJg6PY4xcviSvKAzYLcYS124r5TsP4RVNqMN7aCUqyzR4ATRnWDYeWtvUGjNsg59ziZ4QFaSv9EbgGiebnbTFa",
  "key19": "2oELBeaATsUnZtNeeVM3ZKkAEiSYBg4rYuUrdtr5dPEZHr6XBfGvU84pqKpLmbMDtXiHYKmRcmD53UrbZrvwXwNd",
  "key20": "S7gos1nz4mW3twHcJrDH4v7WPVNR8xJr5jAWhwnSQVdAUAsk8x1q7xJyJCn6gQ2MqnGcMdpNksXvwupzonsE2uN",
  "key21": "4a2WY9u7JDysocJVxzmiaLFTFPnSqQRgYsL4uaG4HkTSwVjtYm5qSCjrXbzbJz4Jg769xeyfVEJnhqzCZuQ3dt5w",
  "key22": "4gHU7EoPY1J8yqR5TMKbRFxwitxyc4L3sETs4ZDaeoLpcmR57iyeLQt5HGCj9q34Wa9H5j9TmtPNs2xcwQSJ6B1h",
  "key23": "46wWEThszm9FCjxPJqh7Hw7JjcAQi15CKWjwSFtN5rb3oofz2UDgpWtAC1PtMcYNtEi9kjgyPeqK4yBm4u7f4fwF",
  "key24": "4psBtDECCtANDmEAss5Z83DSq33NQ6d5yMCL3hLiYS6jpffRMYV1y3Bjj88G8W17jg8fWkJwTooBHtNT9FBpnEbo",
  "key25": "Jbf7gUavF4qvjjQjFHqEYeKS3GJCiihhXRKwdNoY6TP4c67kzpTrQCFYcgKR3H32KKkpjLm52oD7ueUTVhpDpzS",
  "key26": "512dqovQ62efpk75pazvx8K93smXfsAF9rJQP7upqkZYgtL5534YJdALQVsnzRB1mwmDW1ErAw3p8X9bW2pe4f7c",
  "key27": "42PhFsKerXELtRmj5kWK38ZuwKZorf3zGBJh66qpQcicupq7tzeyB9dtQQzcXJqkBUpHxbscSSaFPxV38jTZcXXc",
  "key28": "3JhG2TZ3dxy6hsFTG71ndd9SwcigrLLRtE1TK4iuQfkMcV5Pepa6rPBogmoay7ANiSGw3YVFNKZXECYPaDT1WfgP",
  "key29": "2vpw5fXftux6LBqXir8www4sP84rdqaUaY7SeDufcoEM2qgXAiH3FPqgehzZAQCLuVpj5YNLX3WBAD67JPtKnLhh",
  "key30": "3StkpzNgitF5W9DWrNgiKQq5vXcsE9P8B1SAJ8hn92Dg59KCWwSdNCsMi83qR2DE4w2dZ4fTVM5cFhq3gU77HL5x",
  "key31": "X7aRLpXCeF1NeVECPkuQu77595UKr9xK1hD5221bwDtZDGrrEdYR56G4G1HEAhMPbJ8PvAw32N1zEHze7bCemq7",
  "key32": "4BgA6v2XweTAt4GyqzJYD2WaJjnS3inFCydTkek5f7rozdWMguQWeRMocMLpeE63wNDqCn74iC6bB1KRhUDdRihQ",
  "key33": "48qqQcRdEiLhX5GJ5LCHNnyqLMwpP6J1tWfbFKghjkyjqgnWRZ4KLzpXNLeFJFFrs8i3NKxaWbp8cdKm1Gjazp5",
  "key34": "4mShPbnuQBW6HCj2bQEtVTV3LhDJgqvdZuLzG9yLsKaSrxGjatsG1Vxen2HZFjc2C15ufoLF9m4drT2f4uEiys5M",
  "key35": "FtDak9RP5Xt4DefevtvshMRnrKuYGXH2cygW688pPWiGomEwtJ3mhE5Cv3VcsDRrEkZbhJViWqPM1Efj6SCjYS9",
  "key36": "iAgw9p8DsSMDwynyJSLbghK1cBXRJ5FHfz6PzR16X8gnVM6gtXDgfpdHDgmpGMdbnQXA4B9FiZFZUPSEYRTjJ8g",
  "key37": "nuoRmn1WUA7RABSgiG4PUmo9TXtdaEpsa2zahXCa7duxTjpBvgqDMdtueK2Du8MdJKecSBhXJzjXrvvAEQtMTnE",
  "key38": "4BBNw2f9us2YhALhJ3QNaAryu5sBHvMf35n2bTgGEn1DLPKVDW4249b1kBE7eMyGvU8tiynuMkaW2qgEVrH7ADuL",
  "key39": "3LCuwGS4JVZdTXocNMU2mpJs52h1fExHcHhGGDTQHvL34zHNfYJYov4WcvUmmszQMo57z7khu4nttKn1zF5eYcg3",
  "key40": "XhvbafFyVEZERoWHYzzD9FAsc2Ui7PVGxexQZ5tJ8WbJCodsiVQjNWRwMetH4WcHdZr86kS9dWLcWkNLzJ277TT",
  "key41": "5MFD734ewLsm2BAms2CRJFYrh3mMgcJp1ppD7A648W9KyULNprF7yRRynC8NXkhJcCCLeAmrcLdeqWFpMDgMyjyq",
  "key42": "3gP9hzKYNFfp9ZUKeSyY9hXVQcc3cLgx9dQRNvNiimrtAU86KWwLrkSz7hCDgcZRuitBU8QTuSVok8FqNj8NpeZn",
  "key43": "2FjP26CB4hRkZDzbzTgz9ftfvgKfGZ1UP3mFnvHzerfFRPSQVay9DpWFbNMNiC2dkdeb1VRMy494TiFyS3BNGn7o",
  "key44": "4CnVP8JyNJ9A43UEZRYLW5NgXxYgoBeTAerYsMCMZrGDQuQeBM1BkZ3nHSPUMprXQ9RXGjCDgQwH3bcZUfLgTKCM",
  "key45": "5DCuEsv3iHNXwW5qRAuqNYCRWx97qVnFLBijumioS6RVwBgcu4GBm7Rtv4NKSbV5kviLwhG6CxpbuUaNE1ExmHyW"
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
