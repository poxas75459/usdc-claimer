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
    "2oSqiVbFkgVcp3hnBBaWCoKNeNPozoRnFKHNJFCSRGcQ5SJimVPtBiYLRotP8cVR2zxTNcxycQNrrQL6mLQjYpWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yS8CAMWozh5PQuaYBzAfepgz54MJ6GSbthkdC9sfeA4i5y4EPPHMmGwuMwxhd8MPZgqJQXEpbohWSRaf5RBsoiJ",
  "key1": "3zgJCusLQF1dBuzCzT1fNj8txQHGRmGNaaVtLbiCRyoXLGW6v2ZYgKM6SrsgLRXRbkBjuycVZeBxnEQp9wqE5MCL",
  "key2": "2aJpSqQdJc49to9FC52Q6ANKDGS8XWLAy3MW6ZY8GBxKcnVKZqkYyUFWV1c1fcgqou8JFkg8UAN1NbKuWnp9ZLfU",
  "key3": "4MN8eJbKN1mrLjoDfTdVC5qcCkLmTSF92EiFNURuctdBfppFkSDkWgkN9wMq4PxnCXaxKqJHErZDyk2wQQrukfnY",
  "key4": "4fcX6sG8ySt5DhbZ3BZG2bEt9t6Tvz8Sjr3YYhuKoKC111ACnJd5H4PeTuL4zpACKqPS56Cn2uxMrDgddzBSvNtv",
  "key5": "41Pcrv34uPFn1wyavGgvWJiXVTW2JBq4YpwTa1ivv7geV7SsEigtxyzgkyGZAPu9Kbr8asT4EbzdQuZBxFTHRgFk",
  "key6": "58eRu8WdosV6MWYHGbQSLukxihzaV5ifRyJ37V2PhKF4RgfKNgVJS5t3QNRWUWQdKr6kJTW582hW777zGjQTrDm",
  "key7": "596rYYrttrkVcAXWrwMhPje2LPwSYWQdej2Di9bgBAjhFvTFEgnz9gApDK9VbUfYwqUgYUQHpxY4r2iA6SwRjKXe",
  "key8": "3toceWtRYuXoa4oJtJW728eXmNw6rTMvJFJbkBFnEnuwLtYoKRbLxjYFm9cr2v1inVdPTTDdEQ4VBMN34iWJJEQX",
  "key9": "2hxKco3xC1QdAqP6aUwXvbGR8WzKp9gPbTKFkpH1Z5zUJMH4GVgdm2fj1nNXmVAyKN7ocEEMT8dRxBt7j724R6em",
  "key10": "2Gv4GvHi5mTaet2TBm9vW7M7T3Ae4bgTr3KqnCwpT45oBtkJPJH6TAx6z4PNKE8RfPrxZMBcF1XNkUssiDSWW4xF",
  "key11": "65nM7TW6667e3hU9U2sJv9AFcBw89yigGmakDX5yDRHffDKPPBPLJyv2nPbpcSWHffLsnMrNeUcJujJUF6tZbCtZ",
  "key12": "dMteCVRBivxconYYxL3M8pjpQc7iBdFM9fNKaePctFYhMAwsjX27nWBMgM68hWyyDqWHZNvuPBx8toNmvRN5yoq",
  "key13": "3P9hm2MVkwcdU9mmz2oMuwbW5ZpHyApX6yQ9kJChaxqptAo4zUAfQSJPQjygAHrR4uNKYc3xk6hxrxYsuYKqLyf5",
  "key14": "3WiEyw4PwKvBXLFPrRQNJ6qve9B8ZaHywRQEPP6aJkzhxKNB4gxap7VW5YjKZBWNzDLeJmVgaBZM97KHy8nAUD7h",
  "key15": "3PNxSELALPzyKRaonwY3BeUvM79Ci3y1CLQzLCdZGPzEj8bdm4xVRqV8DzzPuQAuNrsy39na7MrK63vUSPAuyAYG",
  "key16": "5jq39bRiAF9PB3iDqi4zNAKLvhvyVYDHLNP7mdFoayJkvCKggcBcExu1rUvyk3Hi4PNuWgGgSTAb734cdJK5J56X",
  "key17": "dAwgevehKuEntZid4THmVUfRqT2C1YCN8nyatnRJSKEhESBddQspCxZwxNu92VET2aLKFpDWny5sXV8fJ3esBeZ",
  "key18": "2boYeL5zdXNcnyxcdRri4Ek2H68uF223NhYBSkp1dxUEpNMSChQdJXYdsbijZFbae6CTSnRiHsdT6GMSttVQFEgA",
  "key19": "5joT8tqaBkbdcMh2nHMgUERXG15DLvQRK9iiNDma8p75WsZJdhtFaXDhdRxVFRn5CuSz4j3tVx32QFBEkeBwTdtB",
  "key20": "5aYv7Z1zoW17PwkHXnc82yLkNzVRZ4nW3YrDE7kbgCcCFmnNzgGgnQg76yFX362BCGw5XnnzeQZ2qwtJG1YQ7JE1",
  "key21": "5HsMzFSfPiYEuD5Y1TsU4kqi4bsr4cgZZUiHRBeDTAq3N8sceyb5cAmzMB2Wgu8knspXcctvMuy9y17bqLsmukm7",
  "key22": "21o1tYVMHBCe4UgdJivh8xrwMjkKA5HvAdVtrbWLTTPN9JqscbXM3yA3iKHBy8NZTG5e2GWEj23svL3iqEqxpRVY",
  "key23": "5vypqW8XdUHPdSxouSr3Y5x2TRLks9JCkUienPTNv4owsQar8hoZ4PF7nntojqXfbAVi9Zuw73yggh44kyEhofJS",
  "key24": "58FPCvneKJTNJt2n62j3SWJGCHyYTcXrBpbboP56L97Bs12WZmUW9NoEnjbJXofSMuvfYPQptirVsezATBBtzQBy",
  "key25": "26y5aGLFH6rVifTTSUKEvBeXkF86Vcuhu9Edcc5zSvKceJ8fTUqfPFya9yHkbe1RhuZvRPWKD57mBvpSUcBL3BVz",
  "key26": "2eH75Bma3sP2AeYhTgCc2mJ7ShjAWXFGHhBRaSTHCoDWhttcCfenSpwNTkYnM4omsYH6p1By7Nnd4gkWKoKFhM7N",
  "key27": "4VJCAeHR7JqZqi48rHP3WAwkCQVdd9M7facz2fERo2CLEpCnsAgMoKnBkyZTTtwcTGeU3cXzwE6NzhcLWuPHgxF5",
  "key28": "3hGhu4DU7jThym24PCmo1SMdHHAhXkzE1kwokwpcMmGhnHLusfGYdoHdtGa7NXXKt1fxJD319tCpuJJ9bWBkT3Yv",
  "key29": "3eV659m5GDRgQt3STmDWewLmeJKMtWvsVZE3CPbKfmzfXpPh9piiqT4VkfEZSEJiZXHRW2oHkdFuveso5p2y2Q4T",
  "key30": "49x29Nhw3XHsFYFre6dcg7tdv5hFdFiSW1UjaVnT9apG1G3pzYwqQMzAWANRV5D7gxS92t7a1BQ3UYz5jboZAfwp"
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
