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
    "4a6mgj2m8kVHiYyvv4Hn3dJnNRYxAY1m9ynnYzxFXetT4VRLYA9nfWqDMV62DnVxkLVYnMzf1b7azxiTPs4xc7iq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFkFp1gDABfpnwxVzPJVA14L3wsx9FyMMgFJkxXMu2ee6rp8b11W37gabBrufUodMLrW7tM917YDnDyguiYeRhY",
  "key1": "5y6mjd5E1dJ1PL71QDeoRFZPXVCuxjpW5HvgtxnsiovbbpydV571dUdy9sCMFRFzDfVq6XgyjZLHYBHfE5F8GVKb",
  "key2": "csW1idWB6cQRghEkpEabHemkryM2ZmgHvtBgdrGZZr8Rb8xKqmQwrX29b2gM2Wv3hmfiPBBnF1MfJMkSTncfusX",
  "key3": "3KH3pr7ytvdXwZBidpyUsZ6hXLgN9Enc3maK3etqZU8buvWsw4SbaVq6wX9QSJK36JHRxe6v3viPUcBGiugNMpaf",
  "key4": "2gFCxVfZnDqcZZr1nZKLMcUEG2aGw6zRtBRfozZSjDaDZCeymA717zWzorueTAyacMpzfiJyq74xPNV6DF3RsnHD",
  "key5": "3tdC38ggJ7SyfjccrdAbDawmhuPmCSieS27zLsYuaTm9jAvzHevoyfnbF7vW1qDzttdptZKeAtgd5fqGcH51Nq6g",
  "key6": "3VjFep8kX4tKC93EGZdwRRjuZHtegoR6uwGxLUyu3vkhme1AnPtWLqnen2w9H7YnhGLt77cbHTtMG82HzvCaCXXj",
  "key7": "2HvoPSK2EpFcXTeEFtHaLvZt2iyHTZtEFDZmDdB9Ft3cECPgYfxmS9WeW6Fy9CvwpcKbxDFtodygyn9FmL2Bi1pn",
  "key8": "5jKfcDqSziZmR2V8Xm1kMEGMUwofstt9PaJq58foyWHqy7yS2kkC8Qi9BRb22hYQDwCVQXAV5PjCEbuhWrUi9UMn",
  "key9": "2yf1KRxsqkmhnJxBwBhj9BycXeHBKfjY5ng4KyeXCyJ4Wu4zT3ybmtFDF7XXNEEnBGxzHTDSzWDyViptzpfzASiR",
  "key10": "4tbcFCShJw91mgeES8YbS6PaDLxu8CL9EkLWMvxVnAZZXHKKJgiePc2CXvm6ezjNf1XbxwRuD5XYgDAe6HBDqfTU",
  "key11": "62aH7T3TSLnRfXKTMRfDDkvc2KFNEXDv28tXWsFYTEq4Yc51DNYEDpEf2zvBthPMjWr3DqV4N9gcFTgMG7tzx7n5",
  "key12": "3eF85MXFD6DzmQqDZTBmUH8GQGBE88C98mq2BKCukoEfErLcbgdeBq5qNCLSjCbqHthWXQBWDvRMRzFEmZy3goTh",
  "key13": "4x76S4ZDyyCjN7Q14UUtZ7qZemgQWfmk77VRGj8qhY5ijNUBihNC6YtpMK3NQWejuvEuZyxAV1BxhSQpdHiedupR",
  "key14": "ECt35zpMK15xRvscR2tXs16uGhYtUrust9wcTLfpVEDm29P7mxL1pLhdDJG8T3Qjzernw9Tj1n6R9LYDiZSLMd2",
  "key15": "ZrRdj44SHp6zmAsuied1h74hcm3cA25gweduJcmyLYkke8uT1CcQ3mHRFmXH1uGzpaLbH3ggXzGohQjQR9XKV4E",
  "key16": "648jjKPW6KExsHUwbHfdXr4p65DbPPdFosbsZw9kV8hZay2tCDodBJYnESrBN7Y6odtPt6rQU7P8EhYHHnxFSdLC",
  "key17": "27fi14zDWSk1vWCyP77rur1vgYRmFZJrB7V59eMC5Vcfp35B6gvX54RPeYbT5d1vpv7Sqj4P8YN6YtWv9qpsoh4A",
  "key18": "3nX5tRj8AsS8Ls3KwQjCyYFasgFtoDmvFemDMFPxS7SxPp6r5ouTW1wPonkgtMVS3CeKy8oY6HSuKc73vTsBcBmE",
  "key19": "3eSWgq4vzvUUXHk89b4w9X8o8Vw3wUvakDhQy4RTBY4LMVfhV3gFF5HzR1iD4D6bn1tKpu6yMgfztzfnxp7qga81",
  "key20": "4UkiNb79xzZ2FadM5RKKotuMJcmdSHRSWeSo6Bg9Jmu3BiqTNf1Ma9B6DpreYNXYxs6APPE2GWyv6M8EmAvN7hcu",
  "key21": "2joNHbTBXEELjXN5784oeBeHjoi6EFxZz94FuzDaxUuXB6JeEFuteM8jx59PTicWbcFHtk94158AgxTSHcGJwfCa",
  "key22": "KnrC4bFHjg4ZJbiywc4w68vU7JL7WGwRLkp3YdNs9zJKoXDgUNPff3LS1sGDuW6Jmjmkk4kP8y6mDR14FZv16ph",
  "key23": "PszeCEKKhqBR8it7FrvGaK3S5mUKVbZGJUH4xNMww2BefVxf32dCCAL2vVFr5S4cgQALdok1q1pfc37F26HyMuJ",
  "key24": "2i9yRYGt2UHcBh1ncnjShsAQGd6DJxJggTe9nosNcd1HVVCQUrcpDiE6PM8txmUCQCBCU6SZ43G93WzSh11wBNwc",
  "key25": "4fKPD4MvCmrpjnytNWDYsboF6VcTQ9MQazziwrTfktm99LQZLidMfdinJ1hdbZpRC2LQVNB33xb8iBhJkZd8PSpo",
  "key26": "EA9Gmt32x9MhymqYiS5Finf539JU83eLBBqEBKnkhkTqKyzwVU8FybkRNCV63wMUtqCGwLkGC4uo6H3Pj6hrS8q",
  "key27": "4zBsjL4tgRJWX2HB6tHePwk1yyfdnBf7Mp8qTdM5tz18HrHuzDeNef7S7YqgxciserTEf8yB1XFJywL2BYpGcjB5",
  "key28": "EJbvskz8FHeEpDF6kV941Erk233c54CyHsJb3M8xZrLERQ7WdAdvZ2WFXFgMkrFFtooSSK4LbgciLXknVwGAnXP",
  "key29": "4uCWPZEsrMtT7neXDsjDq2djAmEV3UN76A9WQdiTVMFApa37RpB3mhdNKkDwSL9anZejjqn21AZqUGeKt7acNg5n",
  "key30": "5nZJzDvfiAxfh5UxiS45uKCgDTP3L46zTuz9EPu9hyQu2SUaqDyvwB4g5jVuEncVYtjocDL6KneTq8dgqCgDXx81",
  "key31": "3apUCabze5z5sA3cCLX5NKxMNuWmRAxHyq8QAPYjttvB54CjzSZQUqNsB8wz2wK2zMEN7znyXrQ5hCTc5pMCXven",
  "key32": "zVQoUgYSYw9Fzfdsr5cCqnx5ks6SZtDgcQkTYa7GcaozQQcXJu1WHpWng9qbvXf9MVhX2eyzKygwUacJ3t5qh5c"
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
