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
    "2egDRCYTvpXz3PuCZbyf5wfioC4N65GVhP6sziMuAHLiQsRz9qhVGFFJFwPp9XWXY2WbDt8XAHoiSqKCQWhURKEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DrDifzvheK7BSqmQNdeEo9hBJ4jMdxu84kaJ8ZwvNJ8VMZAezAU1WQXJzZaKvhx13aGemaAjTa4DQbQrt6QFas",
  "key1": "45bgq41xT6CUVELEQqJdsQH6BSFdW95odacN31ZPju3JFTEmLiuzidR1xVGSiE4A2PBoDhYNpqJByVJUMqNBCrho",
  "key2": "4oLj9WduAarU5yzyeqtmyNxQcYem1fj68rzwN47EKkR32JYSjb73EU2pzpkVhF9GmEsMhbRcbP9pxTB1hiE265qE",
  "key3": "HPnqnKFCNcLY57pQnavezxfLthPCia71fSZoyqRcrU34unXYqe5UJsHSqzKaV7RsUaJHwRUwjYR5dBEvWJQdGix",
  "key4": "4h1s4u6X795S6KFimXXSMkVtCjPyBYJ38bbBkjg6cLGU5cbopa9H5br71VM5TbDyKN16Dxs4eMQDG8z35YDaGzRV",
  "key5": "5dLDh5J6fGRNZSTMjBoeRDK2kaYGxWucx56fbCcajWqSdVSZS2CRkxLuUbGMMaWmY6nGf6czLvmrYqdMXJuT9itf",
  "key6": "4KAPGN5rs7QAjtCbJMPtYRZdZ7aBXsa9ynciZWh6oBSpH7H7TMuSm8zn2jhe2xYNRXCdS3GgGkJ4zXZNEEafGLFJ",
  "key7": "61ukdiDBwfMP1xNtjSoT9dKf5zhtt9pfiWfbAk19iRLKQia4iJKiq7DaCQjzD9Hfw8pr49mHKq5JYsk43Fk5X5rj",
  "key8": "5FMqDTFm9Le6XdYxczJzJsr27347rPj3YsZHkP5uzNdD36fzCPa9xTAdu8bhHsTUgJtxboCPZC8WwBPWGQtdP7WM",
  "key9": "4EUeG2zAN9htB5jG1Sx9u5w23EuWNjEkasBCDFffMzuM7dQGMG9bhwHsBjP5BdfEe9vJxjkaWi2SoNRmpRFQxyKU",
  "key10": "4eR1ks6mTdibuStzoWNXG4vkrb6kS3o7Hh5SqfYLmZgN4UmNjLjyrRc6VxW9WS1WYGU6BmpU8o4KJESj5kDEt8yZ",
  "key11": "5w5mciX3A2jgGzr9WgBbrdFTvbdLJmEotmopEchMEYp33AaG27bQShDr7fArZFi8JQsY4EZDRDjLHB9YpsBezLgo",
  "key12": "4fLnHK1u3WuNptYtR2b8UV2Pbmy9FKQS3zc6KqLSMTRMRSZmaEfC4M54QxRvkGSTYN3UNyU8uk19Gui1qfxawSdk",
  "key13": "493YFnqk8zC6ph3PxChJcMEe3rz9zGLpk5ozParAo4tEP9e1fB7nhBrCv4TuwoL3HJB59b8NNXqRsSTYhCA4jDKy",
  "key14": "4ogCoNDGaoCMYhEbxEWhSVY9nj3gHNqjuBMNzD1YMj6RJc8vTF6c2cGjdwGdjEzzevVT86JNEx5nnJ9o7GSKPL4a",
  "key15": "4EzcgHqyZxTnaEnrCVsHA6zM1nGVm1QnxXJEirAAZCYUxMJqccKe6jTmew5zQrYWVHuQdNxS8daz3TERs1yyiF3R",
  "key16": "464LhcV8MzfFAm36RchnBgZY416E2cuDX7baEwRzx6sWuAw69GBKgt1LWD267fxBamyxcMnS5b4LVKYZrYRfHHDt",
  "key17": "4b5KAFuPwJTfVvX1NJXH2a8CtLdJLXLrwCzYWuiDpFyfnYNNGb5Z2dunAYVt3tCiQipP3mTtcaSD2Madaqj9u1TM",
  "key18": "5m67iMHqfhLqqQ6EqPNyzAq3t7PnoetYcey9Qmnf3xVQZSL7MtrWvt6Gn78ZUY7U2X7Cc5rYuFPspuUSdsqYGigN",
  "key19": "3QAzBfanttqhEBkyjfP1Tnt5nkX8Fcnd9GnyEuwwd7tULGRyKF9CFYnAhJMNU5iFWAjDuBP6HHEX5x78GX6UWCCK",
  "key20": "5TMRdHXtWkH4aJLMwsHpMXC1AAivjZhBdEJQeGD5r2TrGLTx8pDeyXGti3MZCLtdVPNRMUZq2Yp9pjZn4i9y6szx",
  "key21": "2NUKrUDsyaddmemPrVN8MZyxSCVTBjAXrDfNUUeTpz8LLcajzcmWRq2jH3pVMNbSwBcYjk3jg9vkfZVb35diqfkY",
  "key22": "5A331keeKgmUMAjEf4Z7VfpYLHDRXibFTTjhxFtmGdHxwznwVHN1Z4yTJckxmApR7h75ioBQESFHRA7v6RA2Jd78",
  "key23": "45gvnrJ6d8BvK2FegoeZ1LGVvoZ96DCpugeycCnuBKqC9feagYVjip4JEBTJckvJNfMTE6dXzWhDQmajp5jT8pX2",
  "key24": "EskJQqQAzkbq7rRyw6sHy4ukxEkDpxzJPnU1LFm8osMtaMWcxd7FLLt5yCysd6J6F7Bu7XN6t7UBaL2ZfHDf4d2",
  "key25": "2YpdhJ35zPtk3HVhFMYVgQv7GCib2YccyzTnkBK4TrZ5ZCfBeY68eKAGRkcVwqUWbD5isMwwiN8yLFo1ufoXtBNu",
  "key26": "5iau5kmzpyEVPnT7TRLNh3Qu3qg3kqqzZ9T5zeVKZmoYcjHaMFV3nv1PcqACDNPdmXyh2CpSJSiDJkv5hoFJ1F6y",
  "key27": "4sza1C8zRWDE27n1BTbuVQxomFttnS6MddSm9TDDqmsEhDufMSqBUTLPRgtGbLXjpVdPruLqHBsEv4mfxMaafiP7",
  "key28": "vxX957HF1Gs2VjHu3YRb2pXJjuG9zhHtBMpgKvp2EwuxnFqZGwGnnvYYszDW6ZoMVhYkbB62oVHdKRmeBAyMKdV",
  "key29": "2TS996BjrfeUadZpEKnuv6gjbZRenwv82nLKrDKawk3oqdjgMjMJCcuYru9h26Dp4XnLvsc6tZmrYiwRaHg72ch6",
  "key30": "j3G149gVC4UukWtywCaoHjfmHzALWsebt6NJwz8UZWZZNoHGwDWZhh4SomcReKucn8Y3roHsSG3UkXL4ghJYQj8",
  "key31": "3QdgvhmR19pPHrPXQuazm8Rfuvt3z6eEXFfVDgTL14LGEp5t1C6jcwkMFP8FbzjVkD6vy3kiyUybLsG1DT1FtbjJ",
  "key32": "y7LaMQvBECa1yUPrWnE7YiRHWT9UwuC8U6Ruehn6QEnnCcw4crhRehDnnd7jhjK95otZ99aBkQvcvsgpCQTiUMz",
  "key33": "3kUxtPiYzqSsGqyoyy2q1acgGZrWtUQtUKUhu9dSCysdnGAmez3TGzG3bCnxNgNfwKczjBZACNTSeLQ5moKB2E2c",
  "key34": "4TfBSFksJvHWBaK3yJ8hUqhwtjnDMLeszrDdQS5Ldcire7WC7Z7SBF4zpdJgkszGT7afxaFaH7Z8TgS4RrVYevAU",
  "key35": "3cb4jmQYtnMGStfC116tAPEMx3oHTurAUzRmM7hbwNoTAb66HNNdja7pe7tPgDkC1NHiDbS3554UJJjf7T6cPEeA",
  "key36": "2KYX6PdZ79ob45dMpQiDnLPVftzEZe5VPpM9cyUSrwGvHB7WbRbmTXYbTco5PCAj3LksA3vu8Go8iPnA5ir21GY7",
  "key37": "RRgbjdKrC6xeQpiw2FY2Nmeg9AR49XVncMx5qi8TSxd24j6XjZpCUf87cxWCozJK7o7Ve7LfVHVMRpte83S3p8S",
  "key38": "5gwKRFnm33VRDL2pN239R8v78nJbkABtCdTFrKJftzT7AbGmJ5ndy299CTnBUh5TTi8fz9PUMC1KyLYX1r9aKH34"
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
