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
    "fqwf2JEMZE8KjDRaMkCUQYRPE9pNUELFRw9QXEu6L2ZhbNavZ5eeE96C1E7Y2nqoDhzY4b3DwyndZYrPKWYTqrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uMn8P1jgDCUxF8bYKs17LyQUyV4yc9P3ygWFSB8VCJzksvBGZwm3rp5ytqkU7d812G2JhqqCbqY46jBrc2zmteh",
  "key1": "3qd6RMemNdwpVwQ84sTvztRGE7tcnMKRqtMdbxWeA4vf23mDEQDjhs7do4ZN2gH3fots63z2HRmzit2Rqo45HuXC",
  "key2": "5WKpUMC6BPsNLKBCyKtgnihUHbcdCfmBW9cbvnZktTqKyzRfx5fyHE5yiE1kKyfrNSZZu5TziHAFHm9pNjPwEnZ3",
  "key3": "gKz7bFrxLLFbgozqTBqdKP5qNbnU35SqVeK8kY9kvxL1st3MkyCGXHjD8MN4Q9PSAp2Bn9hP97MtrfYfn1ZueFS",
  "key4": "2r1jENW91WgTzKVfmJF5aYjoSGGmm7Hufvi42oUMzCNRigP1SiDFUje4tg8Ua8C1xddc4XWLQ337sBUP1e4ajpau",
  "key5": "5rEBEPtptaoDRRS3HYH9nhWMHRXUeUsZABv91qdjYH9fQiZpfu67NV3AAhg4DStLqWm8aGopf4fhXqYRXHhT8esk",
  "key6": "4v4bQdRhz6LoTFBn9Mi7nyg6CAnXa9VS1B9Fdzszw69dmUJB4THEAiX2nCFVATmm2SkBQ6aCwDAEMtLB8mVNSZUQ",
  "key7": "5SK3XzEp8zKM5Fory7xF11RuV3PzVWM2G69qfhUxprvAHia9Hs5QFqDCyZ5Qd4y8859uKnykrqSJnFCyynUZQMCz",
  "key8": "5YPAXDTscchHGfV1Vtk8CsKrcfyTknnbjycocJnHMWsYMJAX8LCbRBZY7avMek3jNtFsWWbso31Saa7Prj4f1abb",
  "key9": "4BCtfHi6TTaiM68G6nvPchg9rxC6d3hfsbvFmbfGh4y6EYLHJsBGKJ4JByTab7XUbPtK8nrczfwrpuLLopwdZpVv",
  "key10": "FEwxe7C3qMpUpQ2vJHKou23m9Xdp4hiR2NUVSsSq7PEKJNFij7mZScz6PwbWNjZcMMB9Vyz4fRrZiYTquBmCqzD",
  "key11": "3eRe1ZeFDBXXpAXgTTouXreMdmPGQQRtSqfFKkYUJEZxnk2EFYinu6Nf37Tmu9GxfoAhgq2WKoHdhgqnm7TrEqQv",
  "key12": "3qAEPVd3b5yziKARLEmXFEPV8GUCuUBjNqURaShQLEbHxV23Dew4HwyDKmCwrL5MMxKN9j4EonAfUs4s1wteMaj5",
  "key13": "shw44C1nb5Kk8oNG3jsMM8maeNfvRR139wVuVwyE1xTo4raf8kNeKS4fC2QjwbhUxWyrUQ8VC9WujY5XrYZFNiP",
  "key14": "2QYrhNaAZFANiLFLxpetJXy36aGsDXnEhovnFPRpAB4NS7kNRGbdYv7G129xKnJbzgA7v9Y4URG9GcKEWpfZ3ALf",
  "key15": "5BNekyEHr1BA54Hk8A9KYiHXZdEdv392hqLAzfKN5e1XMht9MwJG8eCJXaKREgh3dvTmRUUK6HWf9rb6ScZmbwsW",
  "key16": "26zrf8nJ4FcQnVj7zTuRNHnavRbZ8ZaBHey1W7SAg9MCjnjdzEQkx2FQuKBPVFmb7xPpptt6MzPfzDsUC5pN3FUQ",
  "key17": "3vkE5j35JEnZDzaXpsma8X14xnXWNJHYzdm9V9zAQcr9xMrUrgkRPHnDmji4FUWVRJAEpjbEUacn9RxWZGadScUN",
  "key18": "3g2nUeBNpYnPLmhmAGAhYW8nMZjcXQFBEqXikKqNH5NCbxhoAJgYitk3sSpDu8suraoqtGL8Uv7iEWWxCRcPXhrx",
  "key19": "5P9Q2vE49k7mhRpneJFfQXk91pHG2MN193sFGtUqhzKwqGiKxuVmg23ha43da8raAE1WtThEmxvrTvg7PPcUJfnB",
  "key20": "2H4HERERmoCbn8DWypAbDR1rSqvQN6HFwB7C7uCnu1XJYx9csY3iPxtgHUHk1ySW758KmSHPyeJUdVhnEfSsMAGZ",
  "key21": "3P1rQADtcmB72aahbuWuvJRDaaH7LmgFVZDJtEa5c9TPFNYCntRzCZWJnUjH3bXfWq8qqDwchsBrHhZ8dp7muskq",
  "key22": "fcHjitBJBzk8oQa3uy5jKyXLc2mfhAD9LTs98D9swXEkgBqDTzgrjBoAVoFVb4muzYBd6pr7KxSuLPVk6wPaaXz",
  "key23": "3L65UUder6gj1tV1Zp89rbMqtW11N5hFucrxib3ToFwbf7pib7Hct4xh257zx8Zpcf4FgDWs9uFirjb1ZYdR4d8z",
  "key24": "4XJz8TxLEozgmSB9r2rnNSzj7MyKvgmpm1wbc2EP72wKoYD4JWtaEjDULBFXR97LyfFrqhCyVcu2o4V6D7ZSGUpW",
  "key25": "KJpBtX9zuBhBALBVoDndSAm2kQkdYQ8ZoMERxrGVp1ztCmq5D3jmehcr45iF5aQ4EmpPCQqn5yPsJ3rGNcM5E7z",
  "key26": "4KpnWnqikSrNKyK1FGc9RJjkr6yKyWtgGAZiavWfq9YnF4N9zSpdyycp8b3LHUwYuC2CCi2aJtPRUpj65gyLnfU3",
  "key27": "5btbgKcvpSdg4N9diVTMcwvbV84q743x1vh5FwNdBsxSsm1CQiJjs7byKaMwAnwjETuCsxpYGQvZEHvVMRfBwAx3"
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
