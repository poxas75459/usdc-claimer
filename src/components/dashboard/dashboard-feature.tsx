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
    "26dbSDgwBdJ2jiBvaE4zgQnSFYHEg5zdGeYNRKtUfjqcELj9Rg2MSqjbJv45fXyWYZ7EgrL6WmKvCGpGYdHqNZTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syuGPCWWthhDa2VHkcpaMdXkyouuJErTHh8E8fkmCh38zmdso3hoVxhoZrRsTcgnYiRfV9fbFGSFXzzyzmpxiSz",
  "key1": "4EHsyS8HRNsqXQeXRMbpasRN7ApXr6fGg7YiBVNj4FPenoGfJ1kHjPo9mkMmGB8ezes98AaJoNkDP3paWS6m6ZwW",
  "key2": "2Qju5tw9gWqTXdrc2TZgQsnay4Raio1XaitETyk1EJUj344EegPetD2yUH958JzHvvFGAmj7dRFKoCQXbrBjjcEz",
  "key3": "5Ziz3xBHmxrvDjSBzghGooSD2y6o5zSYTuZGrUtnmQ9idbEhbRveDiqAvwMGqwst1dd5H2iwEjm8MgfwKqj6wizo",
  "key4": "5yK8Y9s5rLk4nEgmiwqwLEATyXxNcLzN5yRz9zVbKX2iB7xLWJTfG2G4r8cirF6kj6GyssZhPBQkDZcwUXeT1yQh",
  "key5": "3ptChyZ8oFqLZ1acaZ7RuGGGD9k8hQRmHB1kDJm2ZigDebxXoeaKa6Bw4C5Uda25v3BomevY9M3XAZwRx6hNdL6u",
  "key6": "3uMp87yemonVDLSPUYN7otCkvdyR71vVjkPxticJaSXBobiuhems8z2LbcZzAFvMih739rCBqheVjPwBfxcNNnpn",
  "key7": "5c4MdLzScVwsHnuJUJiyKbYnvFPixr9NoSmiozC7fEbqVG6uLMe14SnnkENS8CQkVzkvzjXGuUr4vjLgV3v96Fbd",
  "key8": "3HcTsUqQG35nmpjCuYpt1BYZ4qDTigq4MRRJDwYK2NZTs8ajbUodbRGD8rR89UUC6j4ScUHJF96FYwYCihYGPnYc",
  "key9": "L59iLNDB7r2oN7e1ZiFAZjjdeNsw97SfT4Z8wSaToKNaFHuhWEo1DPiXoiQaS2k99J1bmQ16GK2yqxXa2cM6Qgm",
  "key10": "1ksVaCQ5SLmsabQub8kUU5ydfZan5zsRHGjdv5f5XfxiwvM8eEuc6FMX9pPKv6vdhYQfuQWYz1xkvUB8qAx8s9Z",
  "key11": "N9M4kwpfYb8bT2pMidYZi93bj3kpeT3pgCVm1HBpKpup1ptqEYxn5vhgQ1ZTufFNzrakvrsbYGbFkz4hamPDLTi",
  "key12": "4aJuHqTvZKdvpRUPkre1Ks1bUemnd9RvQNFbC6eQAiY5Xm8ePD91egjVotVFcnfTqebF6JNM1QepqpvNsC3rBAnF",
  "key13": "5FDXnhvTkAVLzkqtU11Y5X4XxfZFrKRLTLyshKb1tXhYRgy4cx4J4qL7w4fTWGKgGet8snvcHyMmjkfkLfd1QQfc",
  "key14": "3HXfox7vFA9e18kczhDfK3TMCYHVPVoPZhyZBaTMGgdt7krbYrVz6ddVjRS3oe57VNVjUsLGCzBkawDYTNZdttbG",
  "key15": "2EYc7EZu9uu1vFNxQpkY4g67tBKh3UnwQ5bk63Ah8roV1WfsTG44TM65aaGJDg2MfDofTAgzdemyqfjZ3k3L7v4T",
  "key16": "3WDFUURMDZ9m2xaDsJ1sTi1q4HNBMrqwQkDXk3GaMN2kL5yyMT4SdUSNyBRBy646CcLVFJPiaybUXFqTH1Ct6nyz",
  "key17": "5YAL2Q74zhogJhws1fgcJotxo27auS9gmApuEuTS6zCJefuYHQVeUbP7MBaWsUR2SViAT6Ug312pJtgS4bu3bhRL",
  "key18": "22nBWACpvwfE29HLmuvgXc4DDuZwo7q4fZx1uD5dah9Qi8BB3STpVJDnAijr6aM3ffVQjmJknKzaENcrE7qx2JFD",
  "key19": "4yob5x5HfVXiKGtxwK9vF1Wa8QjxzRWfJWg4RGMSRNeRRRRnpMuihJaCZcrTADWfYdnoEPgEDcHaJrStaMqWZCpx",
  "key20": "2yazP7FwKTcyRGLpk3b2DarUDTBZqUz7VzGcNtDHeq4XSkKyBci6mcSW8h5tP4EUtfhcGt2AQ19XU4pWhgmgwGH9",
  "key21": "5URru5sCUYwRSpkCM5oJ1P2tDmaRmBj53kuyKYMCuWWAgbwsmDTW9Tz3LMm919Ejess4si1AfFhaQbtwF8GFSzfH",
  "key22": "sMR9qA3nWaxXsgTYXuPU3t2YvwMC6n76gaHhf52xWP7K8pnunagnUoTfECoQhMiWYpDiuBrfRV3SbvMsFNKHiWw",
  "key23": "4EoRuquSQFv2AXSXMkQjfAzfHFDoxQC6aVnNVJfShxxh6VuBWgh2iqto2z3TKYNcsr4TcvRBiPqUrbtXxx38PX4D",
  "key24": "epfTxgRqS6dCxMVNawaEkRDtjxKZvS8XHaTUYXTLxuzA3J59CGBtkLPNBeBo3qt1bBpnUrFWUDWFe1NXNN4wnRw",
  "key25": "4ZNY2CnjvCKFQzN1JhpdjLsbetF3iLdRgvQVi6shqd6mdCnHHosSN5GeiZGcDV9K8P5SGDeW21XPGU12UiGNbkKy",
  "key26": "DBQj4hmVEjZy8TvkQnJZBYA4Nynw8CB7uCoTcMmWzC6uX6S2WJ4V6ZSsjpQQCeYf4mDrgtiwmeGGTFPi2NJwFdM",
  "key27": "3L6PB1KeVLidcqS7KUiZ2oEE7CKpjaUpPTzKXGFLcvcxMDvZcdyJdzS71gG5Cy7pyRci4eKcGs9EfPe5c2qHGAcY",
  "key28": "zPV8UXkyBaoiN2NCH72oPhRK8y2eSppB4y2g8T1ndGd7ij3wThi5BeWuCkzzpuoqsyuY2Hy43dQDwUZBmQWwVrm",
  "key29": "QSJgRDyrR9wiDLzGHj71hWC63vN8NZ7Xp4WZicrMkZ6SPAd1PYPd6VM2D5a43eCimtJr18HMZguLveYzVGwEZDw",
  "key30": "UmnrsysmfFLUR1AkYv982hjMDuXVbLRHcbxMmfpi4qh8J7wTHg8Vpqc65hmQwCUyeMt7XrEJtSmpEjD94UbHBVK",
  "key31": "CDiC5a3H7Sk8dDyn9uNzU6PFwQqVYuZFtoUrnmuAkNQd6YSM8RNMRsVqGe27LWt5nfMhNXxWzEBBjxc2ZVeH9ge",
  "key32": "5s4ytwL7JxS3WYP4K2wqZj4BqTccQKYDG3jNB4EZ28H8NtULh3ML3qFKf8ntzti4H2AyR9wu2iEyq5VGjeq7my8c",
  "key33": "2tYncqZDN9hr7GPBzAGWuQB95ZKatYjmmafQgCt6mTSRBhG53X66iHy4KvzYtijwzKqsCNYj7HutGXcqrxmZ7mkC",
  "key34": "58T65zoLtBubxNp9ne3GoJc9wBD6yMLR95eT3x8mqFVbfXZbVV4AnjrSjCr6VZbHLDkCYdxSmAMGgTo2qSEL9C4N",
  "key35": "3wUviQz1JkDCRsq9hiQjcCMf7ZfjDuQxb9DNZUU3tH5Ujkzucv3hLfQa4D1VJvMUD1TQyZwaaRZfP1ncmoz2wRdf",
  "key36": "2naazqCyyCXcbFvFZT6o9b5oe7ktm8kbwsG4QR3AUemPT8b4e8mUscPxNRXhFZmYEq3enQmg3DAPEpwcLuRajdqu",
  "key37": "3YUnBj4BvdiXoGPCoxPz22w1cXXHnjFCESG38kw3mc9Vvp3Sjw3sUGbLLo8devGDaWWwHKRjB2SFQsrSX8N79ym",
  "key38": "2YeKf1dYVr47cZq42kBw9JtncDnNhn8MeZzKYVWC3sk6V4RodHZ2uTLP8Pv9XdfgfyTCcktfFZpvufkd9L3sVL5b",
  "key39": "4SZwiHbqUVfe3YfEoEmSNpatyEYC9Yu3EnsTy9G8tR6tQEQbvfqj82aKf5o14vYHFV7AQ7b2gcPjyoNHDEdj3hi9",
  "key40": "2mZS57msYKiKrL1Wsn5EuphWfCDe82CYxi3GuAZ6H4vSeTCrrxodDacvGDguFPVo5LajfPtSMr9FaS9F2AujMcCJ",
  "key41": "27Y8VqhEk8su8xVLLWUpTrWrkpBLTGKrHBakAefuHjVnqb7vQYTvi6biCAKqnsKPwdbNCAQkF1iLWA7nezdNeg2h"
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
