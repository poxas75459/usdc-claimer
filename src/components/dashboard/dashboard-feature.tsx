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
    "65Ztrvy3JJquCWSsLzmWFQWB3LP3kzcapifV4Wcjb547Hpj72KXjZfoqfKHSNaqMBmtMeQmSBuym81fHw1QU9VWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gvgc8pyHeh64HLAwTccqU1BUYXHm2DFD5oH9AkGhrinUWQCWDvQ2ouc5VbCTkXcAHdqom4skbBGa58tsoR9UXqf",
  "key1": "29TTGwpDJXubwR3tdz8BnHvx96vnGofRMxFtPcu4PZiEZiFSsnJeVuBPCGbxpFq6ayBZp6AixTEcjnY9XM32hMGq",
  "key2": "5n5B6EY4gDV2xXEo6wYGtp7YSsAyEteMZRwa7HowErxjBzwUx6QA97FxHPqsk3fzozJmVxr4qmYA337ujWVEpXNu",
  "key3": "5MWqvpG2Y4MJpySx8wdYMYV5HPbWJSqvjWCMsUbciSQmAMq44JjgH5RNpCvJf6wuA3qGSefTJw5kQ14Ckm1duLa",
  "key4": "2L6XwMGj3fU5QA3rvZE9Z93oMmi2puJdXV2ttkVpAg8qNs9YjKRnxwC1ELmF2qVUELzJs8fJRRHRv2PWwpbvWCbT",
  "key5": "MTQCMEsDtUZvYWd9PJLamJ2wrZ1PBQovbAB8oE746WqwEJ9bXjN5E4qbH6Co6hoGbHMNvLtDWAvbV9JTkqhfX7b",
  "key6": "AniP8Gdgb3VVj1vuVEfSk9yz5EcdkoeGH9c6CbaS8PPqarb1QwM95JiWAASwFZHQWwFTg3ixxpBxrVa7UBZQ2FC",
  "key7": "57WF6dPsradMcQbFXDu2JHaZXqh87AQUJJCR3hP124EBX9eLjRkc2EYiRp1NdqVAqUarjjAi4eWChHDWhXZFPiAV",
  "key8": "5njznwJa7n8QqyzFqQ6ZAikow9wC6ceDCRJqCPcPUGMnsVnvmKsUXYVbxcyZtHeaQiSnNCfASfDpKquhTtSga5XE",
  "key9": "4SBrFTY9hYhphSmswzVXxWDUpGjUp4P9Kxk6oYxBiGVRq8j3PTDK1Y2xEDdun7WkpUURrkWSkwHSJeGk86cfW5Mi",
  "key10": "kDAJceGaUxkJLpbtU9bQPy51abwBup2EfQ5gnDrpgcAXfXsQnqYSQBb8P22SZYmSpFSamtVqH7ih4hdSzRgrYo3",
  "key11": "3Q5nSSqZfEKXWv4HKEfGDHB5QaDTE41NTwqqp1uhU6H3PREowkyihHbkKv88nQZXKJJqUw4UZ3tR3uxbj6NwDBjY",
  "key12": "5ePY3pthBiBEvrypnNNmmMNKmSEEMvVqXtQrZCn62ryPMzPJguxwpnKbBBbKEDmoRt4jyJHGNbsaaSVgvZZcPtRj",
  "key13": "2njJCmogH3Wqw4Y1LdpaW7x4NrSBjiG9peQXMuGbqu5dFcdhf1xQFV6ohtP5m1xKBDwzHm1SQgheJFeEjtbRf3T9",
  "key14": "641QfzzbbexVtMEV7snN9hm7ydVyXwRDNP3NrT29NKaAX3ijUFcjxrQmrPg2evxE2hHrRrGjJCyNdWCPLege8fZC",
  "key15": "3mqdK35icFfEakGWnUdfbwmGMWvP4L42FVokSLjh8AycgjkrBxSvxS4KajvThBEYyMTxxdJPyk8w2G29mTAff943",
  "key16": "4tt8U7oKsUpPTDAzsRUiLNPraiNUxscACTTi6Gyeb2k942xiuWJGX4v1McTSFfbRg7bNS7uoBtZqETakzf1bPjiR",
  "key17": "3MqY3B7cS3K4kZAy3cwtT5haoN7prhyCCGo5wAzNgbiMtEyZ3pEmbd7r7cr8KEJukcqkAn9ULMobN7faUuU1eziB",
  "key18": "4BUe5n4C3oDzBBq3xZZBdyPxEc6St4Y3C9t2RrVbz8Pr6izXHoR79X4pQu5WTVonN8atNnEPbj9gUSXgaD5qBDsK",
  "key19": "58di9zferAAQY3qPyJZPMJpm5t4kxL8CFzr4sG4AKDThr8hUmVLWrjRxEwZ963iDrV32XFMS3HLUC7yorcMtEpUg",
  "key20": "4eexZbusTtvgDmJF7monaEtmtY4RdYpUnxpCFzrHxpTsWhhESwbXsWXAxEBmvWZt41zJHDS297VQ6GDrUjRV7rqU",
  "key21": "3UBvNjz8WrGwVr8wP8eh6fzPZbuFL2NYAdMuFwSbP1uopsQGCSFEPXKJHgr3saJDPkK7eCXu6TSZtXDHmRdqys9A",
  "key22": "3YwTBZFLGdqqWwcVEks49U1kHuDWCvbWC2wg7KcadNSf7w5ka8RUS7W8xJSScRi2ZovBfxQmDDN73acEUze9aifS",
  "key23": "3sLGsYcWYeDtwoncQX1tdtxUZ52qUERkGsbVitM8wccFqQhX95wW3LjQHRWJ37TTw2ymkhgTqUrWGeQRZ8Avj5Ks",
  "key24": "5yrBvFXj62AxWMpV7CrPWaCgbwBbFXYwDaqQcxeny5pBxTWieiaz6L6KChvDigJZYJkaWD578LxeEyAMSHkkgJUB",
  "key25": "4kpxuuwLdCM1wHNkHB7tFUoCFbVxFUdquh4mKR23RAPwqFqZnZo2iRspatGnYoKCzfr3JZ55fhin2N4JhDTSE5af",
  "key26": "4ckdXdMVCe3eddjvEeg3bpXhKJHMLpPY5e6PKzL3k6qWzVrZTyyvTLNrZx8G4uhffgyRuG3Q27MBw22AQWJ7yQLQ",
  "key27": "4opWXsrJTATfZWiN69aZwAaLPKnztRxt2ddx5DG7k9jVt1i7qA4AzXTxqAjz2ja8Vo5AJ1tTWevyApG7mKVShRcS",
  "key28": "37yULEqP69hPjXqqaJyVR5x78oP95Fs6U9dedjFiXmmmhwXkPJL73MgpPigZ1Uhx7yqYkFPACqLxcvVLCcc8aqew",
  "key29": "52DkjkgZFmXtHSmsYnY4QoXzMHY2B7BMQznUyJdnq8owbpPTjjRCPKPbb5W2BDZFd2Mi7GENJMpqqVY88sy1ZZWE",
  "key30": "2xyDkyiW2NQpQgxeiY4opvVE8wynGvnyiodm9yhypygEfmdiiTrfBzMnvpZU3PmvgXwbf9r77TgYAQvpp8i4JQNV",
  "key31": "BsW83EhPPUU3A2AZVMN4QvBFYdzqijbrnbYbkdB4e4t6GGbN2EcWFNcknuhHKbLP75KAghivo7QVtMrAXoYPtmG",
  "key32": "2hLXkU673WfppxdduSiAvtLSMnK4VsBZWrnidwZo1LcdoHoYwimmNQY2hMXgcyXp2MAar9n2tQfDb4RKPyxk5sDZ",
  "key33": "4MremoxRFyciMXmvbv55cUmNFYkncGGGjDwNTMoNcEP2ngAETema2LjRGarv6WSeJu8THuzPcHjKHZviSsdHfeSK",
  "key34": "4hytfP1euX3mCdaX9QXKNQHVaGsMEHaHke6d51iVmHZ6bbUojcRQrEtSe2263ZyWHRHXVrJoS9mMBmo5idTM5fi",
  "key35": "4Dw1KjuhTjL2EQwP54pucDSiZx4VdHt5XDLjzAMPAaHaUpuZ84mGxn7L2XDRbcMVpyyj8F2CVAMDZLEW95eTkma1",
  "key36": "4pnfK6KjmtVubX1GNkgyaZCAw4h28prWYPg3T5gLKoYZSpBB3ZXCYUHMdsuk4zX5MryicjyyVdtgBKfTCK3KTfyX",
  "key37": "34PJUJwXwDpdQc4eAwqeGzZMVsvwYi5YkDiTMACLBXcqPXScjT566mszX2aL5ZDrb56xjFWTTHZ25vCwJLdWCfwu",
  "key38": "3t9hkk13QKfnYFbakdgCocBCA7gztYwgFfAVViGGRPRwUQ4L65K4PkxQRn7z3hQymo4T5ZMCMcTaKQ2YXf9WTfEv",
  "key39": "3omHEqkrsN9dJrkaK2TispGAejdghn4qUQEKE25x1oJ1xdUgWNNNHGV5tAiBETG81J3NHATLNNJALtPahfBnbmy4",
  "key40": "4Ls16Z3JPeFauoHoQB5dmosdw2VMfcKjbebCN4BPYfxYyFduH55XYhwd6zkKWhtqZLKM7tcWac25BcJfqDEB6Kbb",
  "key41": "3fE8ptf56Xv7bEVsUdRtvEdySRhqm1nkWSKGhKJmUoU8FXq8XceS1rQkyVRpvpmQdhTZSaQnRg4x3MXhjvSZ6ioK",
  "key42": "2RysLHjq5xKbwczLuoVZh9dBFKh5vCyteVaST7L96JUS7BCXN3ZNdZQ2Z8tXR3p9LWHsXNcvtisEedxSVrcM8UEa",
  "key43": "3w89W8FqPUdRnoZsEfNicxvVhuAxDfvfD9pQgDYjWg7gj3wgQPFns4CoKKRpVXJVQPyWU8khrJqpqWL9bN3iPWt"
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
