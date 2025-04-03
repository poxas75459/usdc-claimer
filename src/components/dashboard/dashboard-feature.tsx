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
    "4WkeZtXCshAS8UAaZ6rqeR8BuQwQtQphLWKg2gosusPGNg2LTnnWBaU6BkExVzLghtws6oos3eeAxKMTJGTWK8f7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZbBN2bFYwWdBuCRKT2vzucsddsgJQDC1CxnkdkeVfaAFN3WXYiWjioaM3MUcn3rGPxSNXfBLTPdmt2C2M4edHn",
  "key1": "3JWgJTjjvz9X7GgrZWS9E3YmShU28ijB1CniXLCrfcK4SGLyQzSa6yMUe9vpwrGrKm2rtoC9KfGBviYpUHnMiWey",
  "key2": "2CyX8rdDbzLLraQYZNUY91RiBxDTW8VwsYpZ8CbbneCRsRBniyja5AwkWn1u5pE92Rda7jGk92DZd7ot727DgA62",
  "key3": "Q3BAFQQGkzKenGVKs7B4CiEXP6jRyiEXKBKQGxpxayZWKs3q319FVS3PS7AT126Rps66aAkDGGtCXBFeSDzu3sE",
  "key4": "2avoCV63ZMyRf9TfAGxrWUccLu5WEQv6UDiQk4yMD4FqunnEAr9ba3SdyWntBMrZ3BN1meBZNkSw66w3BPZT7ZUy",
  "key5": "28CCdj8S9vDBMTQeUPKLcvKYQEZvgvmZPHp7bwo3iYZqDqX9GC8ez2bzjaejcRZzkCTaHdmVUKDK88cYnyg7tHqv",
  "key6": "3NvKYbGciz7wJDYPR7EjQthL2Qrznt9MLJxytrb8LP7fWJVP7u79o3p78qL1ESjX3LwnnetUWh2Pk8TV5QRK67hs",
  "key7": "4hp4m2r6WMYKMajxNSAYzXeC14PfzyBBVmZr22KU3A79PE1AR4TWUjfUqN7RFmVhP8iki83LkPC4Ggvvy7DzU18q",
  "key8": "3ht4DyDkA2q6t25F4v7GEFtbMLJFSoRqNDLVafmiY1pNg3wo1v1ZAFcdRRtWYGUpjGhTPK3tHXtMHVQVTRxjxZUX",
  "key9": "22EwvyrVP4aQkiZYCDE2M66PM66xfUV1K5jQAoEo6TkbomoYQwu2Lguh31MdiA8K9waRpguQ44cL3fxkgHaB3BUn",
  "key10": "rEKqc4mFc8Deyus1UwUvuCgDD4KrHmn6ECPJFGrsPdZef5rdcHsUUQGmyY33ofzMUctKLH37P56XHUaePNu8Lu2",
  "key11": "399t89NhGUzFeABDFbQo3QQ8Kz14P4iM5AuRoJn86qj7ZHYYKMDrziYyzqQYofgxtq83SxkvCFShod5KYFF85UXH",
  "key12": "3hYHQHCrrWkuFLTDAcBYu9iFGNjC5cj9yeAkFJMPhhDTR3DfHq3GhqE5PheUMrG24qJYwoxKNRsNLC9cQRvxNZ3R",
  "key13": "5QXCv6EDi2MN7SigxeLCTLeKnQ6vjq3h3BHa484yB6hdj5b1JJgf7W2ADy6mEJ9T3CJGLcyJnBqoLLC3p2JzaQLp",
  "key14": "42qjoyLQtmaj1CV1k6RQpxgqUzdpaSuDSJZ6PeFzfZnEnWwA9VME2DrmPoxWuCGptLuD6tLfkVdvQvMzg96KLG1h",
  "key15": "hQUxpHjaThzttNXXTc27yyya9jKFrWnrB1Umcv6XBxd6YmQubUAWRxigufGkHD2tKPH4iPAmZ7ZcdG5Ua3KBgyR",
  "key16": "5DLuFyTeMEujVqHMVt8bVb3kkihtX6qbgLzdNmefMysvD9A5moHD16va68YWL1GU4UpvnaED3ciRPiM2cKpdkDPW",
  "key17": "2dHZH8c2j5R7MWdVqa4D6eRKENQZanwvqgjz8EkxnHE2q2BZy6ThCbXVdmRgfnfcHFS37EVpsURm2xHpCiaHu4RE",
  "key18": "4LowWwo1SFCsmbnb5yWLL1CphB4bQK3jQyPuAMzxYWm7GL9oHaqH6U2yoPVMzyuXQFK3ZuUav9Mh5FueEskjWTwn",
  "key19": "qJCDr2s6rawieVTFZTtw4TD4pstue9CXKxP76da2cXAtjDmmGunkw2obXCCndm751wQfuSDK7ocUNPC5vrRVXhH",
  "key20": "4tkZ33x5J9rzsXTF71o2BDfJA3WpbKdg3zqPJWvjssXZpWB8HoWQs6aicWDEVHS469ofH7WqFdxZZMiJeUCsCNBu",
  "key21": "2QEHcLTzAACBVpas8Mh6Pv6JiumityprJcVwFskYmwwoNkSjRRvtiwbn4vh8U9uN62LPZ1PkExcbQATzbVSPkcjT",
  "key22": "3Deino3kAwMsr7t7Kyz4fbwnnCLsp3EPtYSjkQ9iKzsRWh1UnBz7MBHoscdE257qzTvQkesU1SWSW92vk87VHaBP",
  "key23": "qzWESTRscoeGuoSF6ynNCFge3W4kAzeNBacnKMv7RkmeaXtPyZ3ay8YfUSMU4f2pZNLnpmEJWuBPD5GMz8uvHqA",
  "key24": "5639oJdo95R89KnahHMztkfQreEcheDYsyNoSs1upuhE9uzsW9D1NHZeAezQrvFz4fzXZXETajDdRDBWwc1k6q2i",
  "key25": "43yNSgy8roHvPmjcHuQhPPYHs2XQVYCqVatCVLbn7X1rWMKn8aYHPZmodrnKsE2kLhSapDMKdX8P3boNTXH8RtJy",
  "key26": "4GYJYqytJBYU7sJXzgafu7E6bA5nGBZp3hTJ2CiBR1k7fdM3tPWPUAxPDP2byRrN5NGVxTDpVnSNT7fYUWLotfAj",
  "key27": "2yEm8kPdkgDx4JYk1Yqy59Lb5pFPcVoXgJ85hmf3a4CthhCWUVXsyv7HhCTjMPiZMVYAKQBpX2BWrKt8XVt4AS1V",
  "key28": "28QCdNT5wPyDmQsDNmjtnTCcgGYPi2jYqQjpgnDm9kvpdwzAdDcqFxYHhFJ9rUcQ1zxbKk4FNjvZh6YWGTiQch6r",
  "key29": "5oYjcWggxqURrw3TYKtQGGH24MZEjJCCqkfMNbPy2pKMJCYfK5PvvnmiU2qrtGDLNfX4KxHv2qyvf1A98U8imjYQ",
  "key30": "4EZxnQCLgG1eFnhVLdgZnoh6u1bxvjL33y3nAwxEwMmzvVvsei1CD5HJMCPu2tiHUqxMpqnhBquRhxUsuNJN3vg3",
  "key31": "5bCZzSFWfiwfWEdMnKGD2eYJXiV912sUHyJf7uNTREPLDU15Zg7ASR2NxS87ap5dTnEmMVL4zsPiCBkHyhXqqUMu",
  "key32": "21zHQ4yh2njMmBvYcytFCTorsX2ytagirWPbV9YMjRQK9ibniwLAtQ15KKBd5qxboGer4Lb4KxAkMSxYRKnA17uY",
  "key33": "G1RdsJgX8WxDh6DMQeBNFHfHAkmBbXUQSGMg3d7T4F5DDmQLpe81dZR9LfVCYMAuRpREujtw55CjK3Pub6CsCUE",
  "key34": "2MUqwZMBiuXd1ZXuKyXmrSLvpVmyuzXGUa5E4Aiz9p2zotco5J3LoYYVD9SEQtWH2CkZ9rxWRid56DJJeMvyyWBF"
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
