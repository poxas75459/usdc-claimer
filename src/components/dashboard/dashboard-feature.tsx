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
    "3xS8r6pCoxLuyawePZbJ3LSikVqPSUAb4tpFCthdmu7aEw1XrcRmuzHALKBEWoPKgowdT6b2GGJLsvwzdiUcWGNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kmLs3FU9GxLVQFE6yaWfUYr2CRts5Z4mgkXPPnwA8zP7b4faZud1UJzMhXGv8nLRhhz8k2qCwrTzt8a86cLUnTY",
  "key1": "GtuFrSqs2VxYCVC4dbnX87UDAK53FvEdZL7DuX8sVXjp8L66viFTJ2mFBN8yj83iuYeWGUt9znDMHciE1EL7X3A",
  "key2": "4TY63tCMupDmm8JuQN4srXyXFjzqyTr4GnY7wgVAvwnDMN4jLWKtJ78pVafAJoFJXYJk97jmMY2CyvPoMtmHa7RT",
  "key3": "2wzbs3tqYkQmMAekeM5cJm2xjuiaECgbUrC7zfXUBmJxuy6yqMhtvp4Apq4UjRdZubD3dh56PbTjscEzRY8dQXSF",
  "key4": "4kn9tusA8tJjrqxWg6EFwJkYnoTAweY63C3ypxp7JtVVJc111UVLZms5KtbEAcAko1hjfkhLheL2fHUqXFc2Zrv",
  "key5": "bJfuHy87o6vD6BhzcKBXi7u2niYY1pzSebGXyRkvtguJTReqUuDAv2aRrsokY4ZsJcK4VDXaN7EJS7QPFPEi8b9",
  "key6": "57Cw9gcD7KPLHPZJ9K1W3p53QtpGqYfWED81tAQYheadFUYP46FxXpjZxUhkuoRApNV3nCk6w5aGat8oeWRgzR6k",
  "key7": "4jyfZ9LhZGSK2m8C7cz93jge8aFpq4N6J6b7yRPPgxpfbyCJ3EkPoMVBhvYH2Gq7Jc3RhvL3SgatcX1sk1Px68a7",
  "key8": "LzMPhpv8VPa4qMgzs4komGnBnzmc5ts7dcN23AP3AQ4dJrHgWHBPrZdNKZoV76b3S7JVu43Ct5nKmJtAyP3cT2j",
  "key9": "31RwB3GB8twTdQiMwPHifGBex23KmfWMokAgLx4HQ53xtD9FKNbmTWPrB2d8XR4Jfx6zrhB6x8YddmUbA3FMYEHJ",
  "key10": "5KkSUbGjaKfAvhAp7BmktCZSEoB7LXN8nx4NKcJAsHcPD1DmGK9aoNA2MNnjHt6Aum7qfTJ1qHJE4g1tjDdKcXz8",
  "key11": "4v91cCVbTMTwN26NR9QrqnLAH8vz18LQ5ueo182rmWJmUbB9sG4JkM5QyBoeT1j9YbQxRBeDd4L7JdaRrz1uhWHX",
  "key12": "27vtRMVDrDH9GjEq25gbzDJ368CuH1bq4aoLsUUEQHrWZFHGgisY8PCiiz8Mv9nbQHL2pyH1GSujziLLNPpVm2cd",
  "key13": "oy8HxyfbH2bmTGb9xwo6aHGePcoCFcWp5P5ey1VXo3MJykqQ2aQEqgTdhxzfHUbcrFGkxGkKnGjswtkDsjxCyhV",
  "key14": "21xiWRSPpnJumz73UXJz6g3Yt7fFt7tB3zJTWYFtoeBGXTKxFafwCLRPJtJCdqRnPCzFSPYmVkscCVZn8RYQvRFS",
  "key15": "4HBBZAx7R2njun5Cy9zga9Lck7oCWFdB21VhJNxKK6UiCN6GdGhX9eQkf6gqvTAN67Pxx2QqEqYcaZzXXVyofgq5",
  "key16": "5DjcUVvAL4Quh9jt2cSqWu2nzK5zW8ACpiDZevPzbZYnQfS6ZMspHhsxxK41pvouVLRZPSpybo3edHSHAUfkyRWR",
  "key17": "3ZWHhVtq9PKBgAiW95FVM4dDY2hzQuQyETaUsrbcsArSAxjJfswTRA9ZRsjy6zGcaUwWWxL6NGZPeD3xUGt71mW5",
  "key18": "VtBPDNMLomwdPy1kXTq4F9kHrk3TyBfNwFCK1zRznoGyHhQcHN2S8Gc85DdWTS2f1w8CqBKXDUTKiRQwJz8JXyV",
  "key19": "QUQJGzvYw7KPSuZZadNfVtyphj7AbqvYDW9cEv3j9imuWd4E3KJp7GCF5Sqzben6GpFJTSavpqHcDaSqiLwm322",
  "key20": "hKkDrDtCS9XWTX7UX74W968pdRKke69vjWhgDxfXdaRjjaETB4zhPKeLU16Qs3D96x91JLuxQ973Jp9fahggsVV",
  "key21": "2YYQ5D5s8GtF8i9eyyup3HDRK3mkZvtRpmdqA3cicbcxd1aqdLZofTJXYfgFnfQ7JfcCeXJawVtzc2WgK7QpNa2K",
  "key22": "CWG6edswmD6qSGCVBJcE6ErmX1rxvogmKa2zxBWiNsVABPFUMwG9pDd2oN9LUqAMFYpTn2YLU6YT9bcBNoBAA7o",
  "key23": "4RsLAP3EyaSgBpsjJkya7uLCEWKkjtJZFeYJ9F2ezZopMZz2rpqQ5mLrhUoXVSvqqJxr6TXpMcCWbdmpXYjJ1Niw",
  "key24": "27MMgrnxX2pmzG53pKHxdYqgUcz1bAv8SeAwcBtTNU53JyxL4Xrdvh9RtX32TLrEW19sCHr5JEkPQssddqaEigS9",
  "key25": "5WkGFFjZ5TR6AhiKhhStAbTS2GbsRtNAwbSCp7P6fZ2j4e2uanC1ZbPSoT9zjS4ybDT3YyYKeHfCEGSdFcTACDUp",
  "key26": "51LGt7Ye6UUo44XYk5MBzmrtiwjc1FgP76ABCKJTEVhk7vvLm9K49hzrKLdhAT59oUdL1JHpjHLh7aFrNLAoJFUn",
  "key27": "3wZ3Nkq5ea3nSoKWthG1SFMxp5hfVEkm5XGxSCLDUJRsQ5R7vdUuAyygtM94WCMYXUqkB65FrcQaUs6jPiTcpJen",
  "key28": "2aKcpGA3vNZyFbBDxv2dXMBD9PxaUyaHRM9KpMX1UcvhXtoikp32XpoisvRaWckMUkoDkJgRVasM2Q2rZZ8PPhdJ",
  "key29": "3MaL2dSy9Tvksamnz1axEiLFtJYtXNacHHSwxxnUSEFt1TNWpWanQQTWiPTxo3wKqg2YJ45nv6tA3R8yyRA73xsT",
  "key30": "2GEMowfDYTdXUhc4xi3xM9sWscTDJKGx1g1L3rF3LU78jQAvVUT3kLDMUqhdbfH143WG2x6mWKHJxYX6XccTEU1f",
  "key31": "2fwUCG9gshytLWLMoQ2Z8edd6Yd8prxWMPpCxa8FWboPsNtFrs3eW3RieweZP95Lzbff7TQ225AVkyC1gZFSmqJt",
  "key32": "4f8Yquko5ANCmGbMH7GUHBJrhq4n7beViyXGSdn9DFsTeSiHiBz1JMeWiYruypTRph3FMUaumgDfffdU2a2N4fsN",
  "key33": "Dw1bW3okTz7NnqM4e1Bg9LYf9UWT6dnMVsRhgDnKwUk5pvUocbwp35biE6jmZNCkG88Fsxh1c3wuGZwkiyj3Q2A",
  "key34": "4PraDKqQcbiznqK5vHx2RZDWX1sPRHmaBHHeKnjMo4pGCn9Z4eiqD89YHDmmeodGg9jAsdFzhucj8doCxUQ9XBhg",
  "key35": "FSMcAMz8P2xw6oocxbQgFg9uERRnbk83HnbrY1aTUTuQCPvJ5tKiE1FTgdq6WbkVzF5P1S19cfWX5xMhMoUeMdq",
  "key36": "nqsc1P2zdantkUimFfKS5NK8edu9M65TWMdo5Xdd7ufUecJdG9BPESCNchpk5v54qfkizMUAoApE55U6wkjQVhC",
  "key37": "2RuavCbvSbSLLN6NwKtYCHBxfzxY8vtjwbAHqtcdEr9ra1LjBPDMMNoNsQDH5ayXbtcHiomQSmnZZxw9UNuwpg9A",
  "key38": "5qFjSEZtAZDtoQMWw4Bp3LkpEaiomUgXXquPz7Ccd5QnCQkFj5U4CjTZQB2T8Ho6SBkqXhjuWYk5XQueJiy5Cp5f",
  "key39": "4R74bd1peFXLXujxZdXWYc6XHaN9iFomqPFoabV7zGKs4qYf9kAzzbvBPWB1Lo4oVFAkTT7XK8FW5SvRQzJKmDub",
  "key40": "qhfSBhnNLebmF8z6hwQEdjpyYb1MkUGEHSi8vmh8YyCvzsdLJg3M4njWiRh5CpLxj2RePhRo8eTdVH9s8xDaPnW"
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
