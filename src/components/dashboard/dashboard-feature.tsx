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
    "5UyFAzhSwv2xYpS1kchV3j54U4djYkZ7fTFVGDMhHhhi33sB6JVzs29eWEYeJgUMEkxT17EACv74sSEMpwtWLMxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34DeN4bDWxRHtihYHMhu3tYjFEbVLdCDEp7HMRJ96eRWA47JrGAcUxASivLf1tGZtgDgFLHvxdmsMWNYpcZWTzDB",
  "key1": "4ENAW9yYCaDBcFPNVDauRszCgM7oVXNB3TKnYsBHujPwnp6LPEfKXL6Q5fE3No1en83v6mqgoshmY428iF3uCBMX",
  "key2": "5vQv6JSj9GVfsFPkmNYCBXarpiRV93m1Fr5KaqrAyMrxkUfH5ZTehP9qf4JRPUNYf7X7hGcyxGpDbYSqEraFsgbH",
  "key3": "5eNMxqm5pKTuBBFJaeCT2HaF54P6yxE8HVPYifTDrqJkGkZS3ooC2vVHNcErmsAeM7JRdMUMMnqYjbcmoV9EreLw",
  "key4": "4bUBdBeGGCPzunvNFxbSocfZbzfinBoAtYwghgEVQTczp3Ut7jeH52ipBWoqFwXXTiq5Ni6QDfghPY26DdmCzNvz",
  "key5": "4tiYztN62t86vuKJccH2eB3gfYc1G25bcnRX1DVs4hwcVfgqtMnDpPM1diQhLkT2Xf6myppiKzQ11DgTXPRnJRry",
  "key6": "3Qx2aTaTovft8wAZHhM63dAqcAWH5RRpnQsYCCvcKjfi55WJHqyzQTwLCEHUf8TiUSMPisvuSzsgTqU2btjb17jb",
  "key7": "2hjC7M978bRNAgCa5JgwUtEhdfVHRJeftv4YE4YJmF1EwUZ87vjynRfyvuTUbwG44iiTqDxM8NQDUG9E6bhpi6Eg",
  "key8": "3FLGJpoc9x6hnj1VJFZnd37ZbgPCz7mcGSGnrSzz7iL4v5Xet46oTowy6GhAEg6AJDDeVNPkYzZ1Dmm1HvYjhpUa",
  "key9": "eAiQmvNR2PbpgriAEjcwCvF39eLoFGAiJekexR6WyZoZSHFktwt6XGS9hhMijocMbuJs2qfTFmjdiQZ3XVEwNgk",
  "key10": "4jFAok1NgkMAsF5EQun8MLbQFrJBZvoapCTaHmMeZoDEUQvvUZHx829GR7XCmfu6X6RF3wUiJwhJCFmLKf5z4vZs",
  "key11": "XQNd9BUHbCp4NjSNXKvb53c2E7oW6c35s4XkJRyG9aXtnDeUjDxkYbZjm1wYAzzFTM6RfLSTPUWrVbLSR9oqqrX",
  "key12": "5FJe1eqM9WDATKkBK66GHfLAuW9viyDwHt95RBYswBCdHRuciHZb3KXAhbYtnxbVSCkco6TeG7mt97ZKag8gWuZQ",
  "key13": "5QcVfU52eDkbs2dJgfUStrpo11XjqhNUVb7XJsMS8qis16s7fiCWhyGmbDHGm3uH1TgYa2LvDkYkDkgFD7wwo58d",
  "key14": "5akZFEERCQzD1sEwBzkZ9y5Fkqu43gWapStUuqpdtC5yPSzkTJL4mJThgDu75qh7n6b798vhccsZ4ibkAcRdru6q",
  "key15": "5oUDGCWacz2ZkAUFdwYJbZezdFMiyfvUW3BrrGeq26oYkMCmaQu2Beghjpdw1BBy9uiNcd4LMCFhVdPdyrve1bAf",
  "key16": "4FQdtbmSAFwghxPZH3sEKQjiXF7E7o2R2Ey7VRPuhybHW6ie6pSQRoc6HRAcadvjJBueA8JPpeN4aorgnihah9Jh",
  "key17": "ZjTGWomxKx1mDmhCBiDB4nDpENeHSQrnonhFyfmzQZhFerbBrE7fABc9q1iptQv2rELJg8JZRYvR7edtTa8PLtV",
  "key18": "4EFw5Mtgm3UNdPzknoDft3aTCmJt3qcVEPowyjycv9Sguuhupo4tuLfc6HumBsWriMS96yp8pWe9XY14qRsRWUKL",
  "key19": "ZDwDrcnrEZCk5yH2Ub2hQWdvqm64783zAPTXWQEkDxoCDzqru7oYdAfmiPQ2kTdkaPWFrFN4GCTX5hJP5PjmYnB",
  "key20": "4G1gTrdfEWSVGEUqjjPf6vEXNAkFU34Xe3k76vHDLF9nw8rScUFfQxhmUfQQGrN5aWkT1YsEJ4ZzKVx5WFz5LF6u",
  "key21": "5VCNqSGnct5j6LYZZRKJHbhh5mvjnSpKzH8juDR2nRHvxjBQFEYbYfjVFHk8TKm64oGLDZsr4KBxUJQt1nUdfT2R",
  "key22": "5gsDEuEpUmiJXshNC1V2SUFeTCdBv4BLgYHSwc42a1rEBSmLjmyCzXA4vtWyVrHu21nAJ9wRLJBkDd6hyisLYoEg",
  "key23": "58kAD8ZB1xQ6UPGTNWo4USMTJFu7MaCSaA6B4yqfzsVx1bnWjD1M2mWqAF1AJhMcVjzDkyDUw5gr9q5o9GhGQLf2",
  "key24": "65X44suJV4KMfTckG6aUVRkoi69JmJKyvnketvbeWAdirHZWykc5WJSyTtDAdgU27Qt2ntJ6su6JvvptuVnHALKW",
  "key25": "5iKbQusRjxntr5WAGF21kqKNt42usMwPvgsNST78JTuATQS2XN7rsFMtK2S9L73LqpV7fExUhEZ4ug8s67tVzZxu",
  "key26": "5xsAKo9kW1XeqMsjWxqtj2Ff55htXRMqSZ8NZjqDqE3cs79jsCPTdETfngHfpEe6GezW9cR2PU5NrRo4QGdQq9kF",
  "key27": "7QXtqnzJ1wPMMaCUpnk5MVzobUGbNTC4eVwQwY4dd2vU1oxwpZjCps55diZSmqyYqyvZ3ieg7ooCVDYSPYYgFfU",
  "key28": "29xJB8eSSuozF4RhVuRkyjJ1MiV8FCdpncZn5iKcKQnRfzcsMnJK2Lhj3FAZiAqdynZuHQuVzryTJotEaYHVpACo",
  "key29": "2KcRU4YQ29z6Vz31WjSw7v6t4fT8zeDsDosrc1bLGiu9iK52VPkbiRM48QEPeMYNnzNVMTWweBErqHHbKGjp6NCU",
  "key30": "3BWB982RQbVfBiKpKmAhpEfB1EJVfEJK3jY6XrJ153K1ch9JJYEvcaifCXP2uomUgzo9nQNbyoGE7kBbULMeC2AN",
  "key31": "3ckg6ic7mCYPs7BEsEvdsc32KXQjeUx93vHWjaWH57swCj62JbngTdbXLoNH4QnPvnK212jdScWJP5C7wQXg3TXu",
  "key32": "2kr1yfUJvExJrD4k7aRFd5JgKsYF6KmcQnxpzs2Ck3X9QGTmYfrMrHu2X14Zfcd6MvEYBWwW96PQLarns25u3EAf",
  "key33": "62CuHTf5CxNEn8QT1FxCiELJ2SCP75SKSY9DGRePENgsmMSYpxoP27rcmqJUJ59WBjVtKkiJnsGGja3P5o5fj8KP",
  "key34": "3j5HGoRsMfYA2ZweGzApsyo2uKhy5hDM9gc5kpDGMkZKhzdARF4ZcEpPCwQiszEvvCcf5Mttsaq8a8bb2NoeBYcC",
  "key35": "3xUSndGLwWYEYUJgj37B6B3DEXsdBN8myJAQZrSuKJkf29qDgadyRXKwe4rAyzvHF4UAL43EiT12JEmWLmBmDPzU",
  "key36": "2N123WAA66W4iAoYYwBkqEewU8JvmbUzz1A9JFSMx54YGRnmixZnKyNh7tYHhkZ7diHyEieqfPWfXYJGmY8VLpyh",
  "key37": "4VSDVoqn8GA2ZtZCYM4xjNntXbz6Fy8C2i6CtXKq4mWfcMzA6aqGW1yh4nwazZs5Tb98hAMfZ572JW8ixN24VuMU",
  "key38": "gUexNgNrg1HkZ5eZbcmXdwmNz88vuH34EdM75SDAsbv3CA3tx4sGzuWUX6UeXVvbEHCuXCnDhvTztdAmdUacevw",
  "key39": "5cEHqDcePua18y2vdaTQSJyzM5xCzFbn89pbXj9LWX481VGvhQxstMVdn6P2uBoWDvQyc2qHLz2JbHGMFEu3hBNr",
  "key40": "4HcWXEYbp9J8rPvs5dRLhaRRTvMs5BfQMMuWGCH1KkSgXVCGBTe3uhFR2yt7MU676Wc77X1yCLupdWN6zpGEsr1c"
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
