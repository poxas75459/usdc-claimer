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
    "2mxr6QCTa7waL9ttY2vRDp2fXoPgmQZGCRpCsx4gxSzUY7Jxj9HwfBQ5SzKpGLzoC5Q9EBwXajmqH1VenSxDC6mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UUdVKSJfdhVfP2YXKJhyVt8Ygifp16h3wjMZjnDD9zfZ2zy8QUMBk3qWEu2TJt72EGnW9y4eq3QNgpjFAU5LSWD",
  "key1": "4ShKe6TZGuMyR6A3oFdnjepyeTEZBDcJuHHoYtBHAKkp19d8kvRSb9E3Z4pYvS5nXbW8UeDx3saaxRzwzq3k7MFh",
  "key2": "4b1nzH2pf23LTupfaz8KXcYLzVQRJzDsyo3dEBeeeWrF2UMBPA1FvM7H4YAtVAViAgHBEfjkB6mKhafpi5ET92Q",
  "key3": "5MaZbPirjTRfbfbutdSQiWxWQNokSY6yWaCigfDohVGXsgvAX5i3Lu5eys4gtfLmhd1eNBUAjupkSivk2cmSQMt6",
  "key4": "dyS3KCbEphifvDPbpLJhEtjt3nmMu91tosgFYYXmr4pFKJXvpy8NGynU1qsS3LqkEB6TP8JCvym2EXeiCWag5gc",
  "key5": "59oNNbvHxcMCQutTrfbgdELtGn37dpjqBnCfvU43Gr7aeNuWE2drW5KSJjam81woAPg7Rj5NPGSHsXn82ZWJz4Ye",
  "key6": "ypKTKwjvZsjagv1xVjPEX1LxnfRyvHLaKmHttfukCSSHz6ubxavDzGcFo3gJmxyf9zKQbpkwe2QQ5D5CUZ5YPaA",
  "key7": "53o49h4LDE4CR3YdCX2zqMowq4DRhpvBjo9gJMHwcHbRwjf8n3WczUcPj1xodBtA6VqLY8uuURc3sDXb2gSEes96",
  "key8": "uN9LP7BtUfX85PFERC93uBzQZTv3HVFsSfU1jRW9WeG38JTHWeVRiGPLVSxokpGotWQZCPfkUPsrLJ8qKciLFVL",
  "key9": "3EH9e2sxB71MFz7iB6Y68bqfxas7zAowcy1yWLkZ13cb6MuiNeZ3zytgRoYA4iKJmDs5S3QCvBdGEcb2giVo8pgo",
  "key10": "cD92CMmr1i27mbDzwUMdoVjwJXjrP8ACPkXofRaNdRcGxWsYRjspcrFBWQ5eeq16jpRn3kwRQEvEejnGtxih9nM",
  "key11": "59AV2kdeyCxshf3AsrnGbfuyqE2VcS7aNXAf4Sx2fwfU1QTNRwY4tdVTrGD9AqDVijJ9B2tnEHfurtUMtAg7S4s7",
  "key12": "3EaZowPtP5WjqQEySnNykqEH6DCcScpRbeYh1dCTLu6bStQ1FFJnAJLMMmTJuas4LdfNo4ByoqJJ94vHiUec9TJg",
  "key13": "4dVK4iY6movvqJwmiLFY2mzLrpadV8JQhNHQM2QAZqUxP4W8pU4Gga5Q9kW8n56r3Ljum4EYnaX5brsRJYaPEL3v",
  "key14": "5Lv5m6pb95yGCdvvhvgwnhpFUWJYRCCef8uc3bgJAUsXGSY3xNao1UR1y4Ey3zpcQyc3EXPMxK8xZnL8YWwBrxwx",
  "key15": "3XLHfHJqUQoqXYc7scQzF5g5tLE9qXvZwAm48WxdrLEEQCiRB4MqEZbj5pvYRP3MQvMiPRmH9ztbxLDYe6vr3h5H",
  "key16": "3SoLFfebZYZzSG67SFiwYQkY4qaNpdEN6e8PfYgDaT5Y4Gg8YC8sQJMvJPebSKdS4u4L39etZcWgC71DQtAUVWxB",
  "key17": "4X2MRuoNTR1MAxjBrCBrgj5AWxNEZyesRhXV4H79c5WtrG7en9QFxBXy6zTNXPWJTrPWwSqtiqTyQ1Z3R37qBcPL",
  "key18": "3deHHgGyxSougSKbPgGZ1TScACxMVmiLNxkGzusYdEvqbn2L7GC5bPU8EgctpEw1MLSXAxSYu3Bfd2C2dsCfsCNX",
  "key19": "3LTe8k5iXwGvLk5HTQfBaLjsSN7Y7TPpiQhowGHtLE6YmoNkD1GnHmFAoCMsKEGs2N9ZdBK8XLvr3ad3U3Cp6rmU",
  "key20": "4f4t2LL7Ep5N3QvdQm835R792RbpQiUBmaBVXNdLPFnWsXXpEdTHxebVE4X9UzBoAS6DcY2WnJa4Nv4C6dkWSG48",
  "key21": "2k9wEU2SJdwgBjZHUeQWTffawabCRPhMfcP38pVp4wmdfNY9t7CCA2RkkToUgnDrkATGjHp4wcTD6JSoR8Nqdjzw",
  "key22": "23EgzSqRfzdEmWA7FtQwYEEGUHtJXR2BewZchiUtM3VgRYFZ7AcHdedKpeuPPnCFbMAvv2RniVeEQUiisWSNroDG",
  "key23": "34y7PGDXViyoei4y4EEDTJjGokExyaqJk1mQKsFJXJJyhoXBxGKqYvd838EK8XEmK9BBrqLZTgxWKXAJ1kdR9aZh",
  "key24": "2HBbFE8nHVvHtBQkch1LAYhh5jAw1YfidchvhTJsH1xcMfmQFDEr6foFVpgQj42RJra4DuerTLiraQyRHJH76rMV",
  "key25": "1vyXTDhCwdkBNTK8rXMHBJCmPDnUqBpcwCrv7FiBx7H776fm4y5ZenHCajyQfwJtRawuRfkMAoQCzZpghsosuWm",
  "key26": "2rH3ZRBv78KG2NafpyGTLDu9gkXwYvaSQVHkje8XroDkEfGFAGrKU91L6KLRgpPWFBQgiUNTM7AdWbJgW88gnFJ",
  "key27": "59yte2oegNodqohvvNZrgEzcXxBxTCpj1gqHxsX4d3x9CvfqTBMkMNLJB6xxPBS8687gXPTJL4JqdiwfmWrK9Ndm",
  "key28": "2KV8eDxjFgwdHNzh8TNyHuJfqA8QRLocXkT7tXbh3pF9XnRYKSD41HrF7txPgNY6y4G4nBKwheqLWkD4qzJJY6aE",
  "key29": "5aL3CDZsxHaMpCV2LgATbhkcYi9xGgzV3J3meFVRDFLinsDPbGU6BHj3uuXJzUJNycmhSe9e6z2LGMNXqifmMMuz"
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
