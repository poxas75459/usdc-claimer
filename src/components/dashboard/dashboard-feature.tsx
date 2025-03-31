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
    "39iiqxr9EgHBDevF7y92jaRwM18Wc21mfGEEvD5onLPTYMpYPc1TUj1T4ekNCXLXQAbHxGvSF4KczPL8BCPMi9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24YLhTTBNgkm3gVfiRVJidPBkq9gBrsv3eJb7R8ZpRQ8FvFJqYYFgneaT7preUNpBMVHxu4KhuF46Lb8aJYyX6uo",
  "key1": "E7dgfLjXJThXcQSnJYzbLsvpw3j7cAcobS6FhQjmyCpbEQQM68tGtjidVdj9k437rLkhHE6Yqk86EbBMjXZ16HX",
  "key2": "57vd3VQjLvW9kCYXffx1SrMxLnJJKKG3GHosSz9pqiFey5STccWKKfadBWouP7fwTWLJoakCrSiq66eZaD7fBpPT",
  "key3": "3C5QRtQwfX4iibEtZnTMkZc92DrS6fdKihqjcQSGNGHBUxLgw7X7xkM5neCS2CHzvkFVfuwGYAcvtXJEZAGRC1Ly",
  "key4": "38BjnjQm8u2NRJXGB2kp6jr6sGidMZZ9KanT3jp7feEiy5fEEkgvMypWGaizXLCPyr5aNuyDSfLnrU3omp7sgoh",
  "key5": "2GVKos1xmZY66LK7LamUYdihftDDzr2pAxhHPnDBoN8tD6n7WJFGMydk4DMUcHnrNidWop7MiEbtUpYLBWuYnoJF",
  "key6": "5cSS9pkwaMHVppqKpZ38sEEHQXSoTEZbqUfWr7Yi9MPNnbZ1kjAnxztut7ZPqykYQGotVbwEQeVRtbcsuVjAGu84",
  "key7": "3CDc6cG5Apek1DcY9WmMg5NST3XYsCvq8PryrqD5kzFbqBV2WgbEsE9qrwgH7gKSx5wqv83hJL43kxWQCUUwk5GT",
  "key8": "48pRa9hqAbWUknPJMFVMa9TdKKfaCwEMTK7eNiHzM9EaCNLF7Apx49HzySR8HpuiJb7tKo3EUZjXgSqSniyRtS7T",
  "key9": "7bqZYhX42CcGEUCpvBEaQikoKjQsxL82imV3sYiYgsDsfNfHFjaWhnpGd4zCqcHcV15nig7k3A4QzBWYab9g9SJ",
  "key10": "3M1ho5sNZssMcWtobaQc8CJoJVC4Y6agvadaRBccB8rELMKRAPFueHXL6XX2URtZJ8FhwZHbK56ACJHxAHqh2opw",
  "key11": "nyRshHXrx5fGAipHc9Xua5rN1WVUuLXdG3rWvmVxsqLmPdURWdsc3oN1dh8pJp8ZQVMQvRW5zuv6WMNWWkGjjPw",
  "key12": "4XVdwv3k5stSqSBHJgwyRqy88akeogohMbx3zsPXHUEb2rkfmuNkMPjnYip1kDowGqNQXvgPZrABehQfGWXtFK7D",
  "key13": "5AwmC6EGikqSmcYofFYttUVqhv5XfMc1grYv3t7mNxmAJk7u8SHzGPBdd21Cy9x5VAGWinUhut1GBRLotFqoMg4f",
  "key14": "mkVQFQrGDciYRD5SBFViRyRnA7iTXpefMGM4RtEg7UrB5Q9LkyqE9kDWAUhJHEmtFsChQS6hEwtsBM1b3TZFYFE",
  "key15": "4ckMyfjAbtvYRjmzWgZ6YdjhqF8rhMSwZz3g7qY4f4htbq1txL9PVUMM58xwvwzVXrvmmyvy93kJgoJYZwRT8V5Z",
  "key16": "5wGyPSQt7mBCWjGsGfgWAmAZeZeYJ8m2DL46kP7b6dPoornXyBmeyQJrwg4eueTrzJQtQxSZWMnMnpTzbGrZUj4H",
  "key17": "3G5XmjPvPxss69WsUbqQy3DryJEfNdR2ZSk99XmM7APbC8rQSveQpqatGxZmhD5X62U3mYijkH5LBzUEHdphjy7P",
  "key18": "2Cop4A3RXkfL8yh5jEhCC5xKSXEiLKhbvtwbPP3Nke6i89Yb6u7RweEVxjWL9eiRXYghniKBWKZPVU6pSQtmh7Mg",
  "key19": "4zKG5D1sxPdrPNKMVYDyUeE3F6ei9iNKM3Yqr7VT5XDh8GuvSMGD9ihKm5FbCmjwYVyBjS22V32onznWCauNvZx2",
  "key20": "4gXchvvCWTeYnQbTxjTzQz5vqVFvFTZF1s7sEsCtMkpJ46WE3nst4yHg3ntUhEm6C4oyfcXjRLcMC95QRfxfxiRZ",
  "key21": "5zvP7WfHsmNKNvr3ovqcNQWGsGVf9nL4ayCUQi1kXHnKMyMseTZ1Vwg7VVqSkYKQEHhypkdvgwnth1xRDwWmPJ5R",
  "key22": "aVNyrWDJsyAEPrskjnoma4oaJAg2GYVEpRHrKv9DmtBH5RudhxCuA6U51jyEMG1eJH8Pgkfnwwext3psKZ73EJJ",
  "key23": "4RYub12S9p13PxyC8RcTY9Aa2ToSHdSLUizTqT9BKAaHoRHRr6iP5Dxi7K4gtNVpcJNboLx2wGGDrKA2kTBKVxTV",
  "key24": "Eh4QzXYsePGs6QzXRUSz8sh518GMauff9hDf8c7buEu2o1vkdFyyq8Nqa1XV6D8RVit38AZTYYPZ9H4bs2ETc4i",
  "key25": "3gBDPpyipZCQukFyCn42uvJEuBUj74Fh1t3QxXv9BMP8NhJrxvMaEyuJrkMTqVzQfemFqUrphxRYe5RbJ12LPa6n",
  "key26": "2s8dbfDT8svXHkToUUpsdA1hLH2uJxXEFkuefTfqU5DMdSExEZyz4CV2VuvnMiUe5bnMbYo2eL3ghSgxABMUFwtS",
  "key27": "54whRiPvTFUCscJXctqr6nRnhmLfQ4otSJeKzZF31EXRL4xKMKb4UjUi8gnYbRSywD7iD51fqGifr7JmbNnzm8Fr",
  "key28": "EwdXnKWZz4c8BaAEZRzZCRQ8jEeS6oWEA2nBHU5SviEk2aimgUJfM7rhz2zKvZoghPnbFKzzeQJBjpjrVMwc7Un",
  "key29": "4SL5thoSJBW8SxgzpFA8PteVuG8r5KWSL2NnajghQNJpgs5utsb29mmMxt5tFmH7Y3sAGMmtWiB9KE3CQqHiatpT",
  "key30": "2ZauGR7GFzfi2Gmi69PU7gRz6sXj3MNpsJSP6zTYUPedmsmcqtFAUjt8brBrPg3NU72BfqzT2hLaV4tF4UKt5QNM",
  "key31": "4dqKSXzZ6goDs4xbaXViFLHRJjJrwEL2MjKdpzMGdEXzWsmdCmQ3enzmcWEBc4Pir9YnC2cMH5QnGSJsL7oEQPCX",
  "key32": "3D2w1SgnT9LYfGv1NrUY69xxn4ZgXLer1gxQha3DaVcb8RJweC15yd3YzCcDS78fF78QwFLez5hWx1oph8u3bcXX",
  "key33": "3N2QNtHCac9mBaMHuFfEQpXEd9RS6tM3yCPLDYqe2XGRJG1meavD4oxPqDzWThBoBr41qLLjPR4me8qAveRxav91",
  "key34": "2785exdxLYd62vynFGvHXj8GmNMsMg6J2DedsqPEkG6cL8AEk8iHAtJXEsULNjxNRrNpbjyM1Jg3nqbrJgEBTDJm",
  "key35": "36nEGMtosoAnKb217VDhv4WiDKG6PmzQW66N89TYtyj7fEuUmQdaaRZgHhTyz8rjDVt6JPZVktPeyYHzFRJAKqe3"
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
