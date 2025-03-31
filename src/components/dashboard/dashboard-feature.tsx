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
    "3Rh3xBWS31RiUJuxevpgoxiLhvASZ4NzQMcyvijqxvmcCa3xexzPocnFxJkV78anypyM4aXCZWJqpbvD3rQ9ZXsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ss4dd4PV4bxUcjZ4HYDLRW2NTbd6oTy297wUVdEHQofSQ1HavMUPHdK9nRtxeVgCauGFqCdMJi88WxcNnX2JNDB",
  "key1": "3AmsqL5esoJrpsdzFrCDFGTuMjHkxoR5kLASeqkvfytBJry2VU4qSyJCkb7vAd2HQDtbRtqU4djARWzrPr7LSAHk",
  "key2": "3Z2szcwybiKqgBJSTGLYthf1B77dsBmTdaeGJdj7R7JybXhwTvcSBn6iAsJpxHeReF94QDrdauRUuS3EUL2km4Bk",
  "key3": "2HjuaCJtfRREDrDKTUJ1gBeByQBn5yUrxF1LGAi2NCiZRHREwZjsq2JrugPhquagM3ZdZdFcxLUqLV94JokEPZCU",
  "key4": "5TifS7pbJXQ6BK8XXx5dYzFJgEPUH6Rg8G4spstxnmRpxCW1VREYNtVqwinJuQzH7aT1Yhz366PRvZq131UJCcAX",
  "key5": "23qp9d5MuUPXzFYNmctwP4Xc4EAaXmUGZfHMdnk29gDvkX9aobLm3jEPPNgUQ1djngFmbWhVyT5PFb1eW7i81dWq",
  "key6": "2jAmxpvZL3kpj3shqZ8gHskA8ckif81iDAsJmcBnSon9BTjTC1CdgDStGa6XP8MHvrVq9EPQW5Q2BXAzS1YAZA3k",
  "key7": "XtxF8BPDi6SSyiTz1G3nQWKUdQmASmGaCUiJT7QxNp7swh1XhvWecAeYovg5H61bme86Jn2ZaSBZikn8WcPEbv3",
  "key8": "37mpVSmFbn7v1sR5U2pjWp7qZtTQzPBJFd7dFteEPhjegheD37acWeF3jbR85kA9AyeWEB9Go6ADznn77oj3p7kS",
  "key9": "4PNP5iq9AZPLbFqV6jD8uwo2YA4pcJ8CjW5LfpWGJNfw5Fd7VQpb8oUwz7cbqWsx1HqY9DdFCZ49zB95cK9wGb1x",
  "key10": "3chKrocZr2keF619YgHEKSNSmMknwuXuuQR5aYiPoVR4XHgJ1auQuk1EWCUK4RcfCys4Dt2Cfa3matbS7twDyxdR",
  "key11": "MrdfCGtfXBfSfrR62AdkkKcHPNvnaLrwRifTF5hEFj79bnCzCPS93JayoCPd85sUCZ2WScwPEybDcP2WNYENK9d",
  "key12": "2LWs6cxzxA8W1ALhiqsa32n6r9s39TnJYj6CKfBrwSyahSrnnmpMSYasW6bZky2xjUeGtRf3E2YtiFuwawwrFai8",
  "key13": "43vAW7mPKK6KvR6vD6uhB8Lkkb9oJRevCwZqtAvctq9n4aJBPgR3cWvMDoaet6NSoqBXGEUhM65YuxhNAkL9izek",
  "key14": "3fg6nEhEHQy72Pcd2H9k1khSbqRRhhWW6mjzjzHdBrLjWt8VStvdgu7c3Gv9xAdQVATx4tYt5Ud6RuHc8LevMc5U",
  "key15": "5UWNS5DT3q8HRz4jS1tBi4fxidZQQXYRqVeh5d7yrkJs7nAFqm1rJwwYZWVji88Qfke4WgwQkVzzkRQTC2ZWKueZ",
  "key16": "42wDhXndHezBJbU4LcwAPpCFdXkg4QSsf7y52YbPpf1Km8GkLnbHefbiacmUums6dqDVsFXvFo3r3cFirKTPS4mj",
  "key17": "5dqSuXkxqN74kQxjBQDrc5Jgpe3mGy2nUZ4uUK8nHsJ3C3Qkzr2g7TpRHWDrqgrcb2Z8mivB72VjptaKqWPrxTR6",
  "key18": "5onjaVXhtuex2Rt5xgVsR4U9cCUwppVhg9SYw7BgJJRHsz9G2Y79H2xqGUUqK4JXXr5KjViVYUEZww2dg4sgw24A",
  "key19": "VUGNXP1KiLmxkUXzJ28CFT3GBgATPgN5Vh79XqkU1uwgbLWQpNAw8Gu9wG16gvsM8N3GvkLJVvpcp3GsoWDDWWu",
  "key20": "2icGWGeyFcdU73XPziLwhe77vNt1aj6wQ5jWbWrfX2WaMyX8BKqKGfU5RTN2jx3gKQ68wznxnDu9dWUjynjahGuB",
  "key21": "3UdZ6XBkYyBpjXCN2FJR7oXJyU318NojbCft9XSZT5jPuWkPvYFRvKva2LyiM1YuL3htzD7D7XWDELXHnr6EKRrv",
  "key22": "2v2cUjWok9F92jGfv7UXZVB67E394Bxdmk8JkBkxy3xxjXc1aXWSRLxoiyxdNUuASwf1ByvvTrB5gRH9rwSo74R1",
  "key23": "2q17672dwo5UyHZkWWr41mHaS3YHhkD3nTgyy9hURysoArKMWwcbHf4vXpnfvupifhpEiPEXwFDjFFsAM8KYmCfF",
  "key24": "3XRGHFCRgdgNw18jSCvFkyrXWD5pT5xe8xba89Rf1yoeFieWZMtobVBdt3Tgk3WQt2BnkkdL91GXaLyLoobtc3nk",
  "key25": "52eryAAusKz3ZHh3EZuHtWYJQFsUoZH6ay1uNonT7SM66jHP41piz6m4c2jKYEmW4fXEDuZFP6747utWyjgjmiXJ",
  "key26": "4NWAi8mCCBorkxtFqRmp6Taxo3nXBuiRTtgPJQJKQyHySSZtrvhhmoeGRUBCwxDZ9bAxY6GMPy8E38a57EzkFJVr",
  "key27": "5Zu7fZGnnV5KWig3sgjXKH1vFK81xxWsfyfD16DRVSBjPZ8uciFtqFQYSQdcgfvGzQWjCZ9HZ827oJWpgWkHyasM",
  "key28": "45iuYHw6vf3zWELVsvGr7vXv46b7zxixFsqw7tBtrB8PA8AQwr49RyvTLq9xeyaC2ceyrvpYsqGThQosskQXhC2b",
  "key29": "4jhRqvsbd8TTYm7xVQJ2GYcHbakuEZodnfjKh5qGdyEUgacZMcHeBoamzqxGoHCkgYUAqS15GQJLk7kj6T76njy",
  "key30": "3B6Bfy9rxNJoJDtCk1wa1sVFnALo1Qf4xVvrT5v7doDJRLPCHLqsQUGUMFU3ZHKqXRVtLiom4acR3sRYsuvsFyY9",
  "key31": "312m7xkvP35gFQVYYBUybFNLARn5czqSz4Komg1H7oeohKAduu6VJadrJqUAw4iD8vs2TtRbPnewiCjbHUpyzUuf",
  "key32": "2sdmrGHaCMdurnaUrRCJRe1pwUKSDcmQgT48FMPPAbDGwx5X1TwEvwA9VXrkxp7LoNefRsZdfZpHFZjmiW3j8Hbf",
  "key33": "2Nk1dYJQ22ywBzRiWq3DkC7igHrDerp1RpLDADb8AaqdJ2qbehv8MaGyPdYswnawu2UmcaFPEH5udhMmV3TiCKFj",
  "key34": "ifVNtrNXwqSBxDT2SgZ4TYdrXVM3WDiM7U8GoeUVRkrNjqfo57Vc9L212xe7b5kzViTyXfcKiRsAgLpbpKnSPNU",
  "key35": "L4CqrVR4ezbjnCLF8KNM6JAMVL5qjxU3nKUAEtqegSgoK3tTCJzfkWjHiCvgZhj89NoUfeKXpLPXwMazuiJFe7P",
  "key36": "ZEFB6oZFwoZj2xUHnta6HC8oSczm1ytQodkQLitCdnAkEZWDnLofUQF9Fb1xkMEZJ5MXffMXJNXUpp1pydNCMm6",
  "key37": "mjQsToZnmPGM8nXAg45oE7Bv3nShwpmv5WdoFVzx5jYmTSQtv26Bp6Bs1JzHK98YbyQbSJFWJMrrHqDrLD1Ba3L",
  "key38": "2eZy9MjzbsqEtNcANm3dujtaMUuzf9TMw36eZXsR1mNZWakNzBvUhVb67XaEZc4Mtp3EyzFExq7R3bPhD77uHi3B",
  "key39": "4Q229tfKkeKdJ1yG8V2o5uhxLhyWPCbZ6BrVZEZa6mtVAhUqYf6NQwhyuFZ2VAv9bxdh7f7efztYGErnvrhK2nXX"
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
