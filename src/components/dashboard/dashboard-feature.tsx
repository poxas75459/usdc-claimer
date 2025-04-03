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
    "24S3o7cxQNWFRAQjWesGcyEUos4xLdBaoGYUBDkc4GJ2c1rvhE26sTKaD2orpFkifVNVY8g4Z7fSfduzYFkiXtVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNoTw7M618m2KQyH8GewJZyu8RrdcQnLxdL4rxmA1YAzNcZtYzQYKshptCiJ5gkMADCLi1xzP7cdz6u4ywtay41",
  "key1": "5piF7vSFF882Un6hNtFvsxbipF3F53xCsLJ7VFraVU9AF8iWB4k8gaKEM7hLApgecF689cy6CPJQ1ZvCr5MfZJ8Y",
  "key2": "2hDKx5D8ns8XhQxNwijZCU8EDp9SW7Gx12vBWUVXgCUrT4HZy1YThugn4yz3oqRF3xd5p9xj7QfAMj2heN7LwLTK",
  "key3": "2UTHnwqLyqrJWwDydWepfMTdncNY3m9Yh6ot7MqkqYRsH5URm2dbj7rBoCLjcjr2SCrTmLk7CrEifVjMCbYAzQaD",
  "key4": "5k5zWiUZBQsXF8ZH72Y2NRtGJ8ocpAQjFz4PumfyZUPCksmLqqyZRZY9pmYZPFdor6BszvhjrwwUGQeakyLay5qi",
  "key5": "YKdGMnc9zJbQeXd3ivp7355wwGTPj8uxmcFzBEdbLG5DRionJsJckZkw8ZiL61vU7HC3a9zRKFidMKQpkq9hDV4",
  "key6": "g1fBvE86a4UTjwUw7aBQb6DPG7MP5Bf9fZSk7qdgU3t98vP2zfDnYAZbrBu5CzqQWpKFYNKqN7i6RcbiR8urQGv",
  "key7": "59oCpVtoq31JMSE7CF4BpPbQE5MfSZGAt73pfRaEDijT2ZEsTGEqZUxRrc5vmCmsXUCSYodwaTvmDiTPe5T8hFvv",
  "key8": "41cRSraKZTVMkCvD7WtadckmgodnS4stNWAuHnQnnxi6yYK3QUMKGADvz8ojw8JznhQ3keFFvW3EojHmPaoN6fbE",
  "key9": "5uF8tNfkTNFWRNoGTqo9LpQLA1qw9epBYzGJCVbxnzwhKQCE2NuVfdi2QAuLyJPNSJz9f7hTHmiC1vBYdEitjPhD",
  "key10": "4tFDqBMhR6r1wEXwrLDso56F83e523CkNJRtP3guCDkaGRVYZo7zyzEpsxV4sqCeMtKdsj7Wc8be3DqXkGuJ4oXe",
  "key11": "4qMaH9t1CeVgw7fMNAGrGiQkRPwK5bb3qdiLMBACySNHuqhCiX3G95HfYPQ5i4F94wGrB2pc99Tv1EkVAVbQ4CGd",
  "key12": "2w1ZCiC53heqvx8sfQkm7MyQ9Ggcz6QRK3FybUcaw3M6TNhUn6N2ZdfLAoN6Sb64WcdZBgncep18Tsq8MD7zCT2c",
  "key13": "nrXyoT3C1hdqfzsMtQYGMZrELg3UU19w6HhbddADNBecJXBiHDRAEn1X33ovWwpeVTutCL4ECJhkPuhK8o4FvVf",
  "key14": "2m13cpdq9PoiZQf9wUkPSotaPAL1iGaBbwFCtXeuVkZs2DNRLNWa2EB9WLzpjdevB4QDgM3hRL3uTHjXmuSreNLn",
  "key15": "45ZEFHxUwfWTMBxhtouYuo62ndMT8G7bfHvSQfxyJ99fT14Ari5PbLCRx7prEtXNE3Q2Kax9iyndVHNKDrEjZG5P",
  "key16": "5psEbxcP85wggc5mFTMhBGA3J8WoDqb6L7BDTgzaZgyMYJJqzCsLncQ66SmrZLwZZYZWp8EHfEsLUd36bB8csvFx",
  "key17": "p534ygKa81YRmqWVup776tTTustBJHmg4R33eiUD1gxFKb42V3waWjAYKbSFSr7rmchSZqfn3dT7AW8s9eSjZ8d",
  "key18": "3orfNxufWxVibx8DaRNgEeujkhpFF8Yev19eW6duuYZbEW9UJCPukbgC6KpFXLRMHQdSVRRWx2pVaFnJJZQf5RXb",
  "key19": "2DXmU5Z4MytbJecERN3yo6ST7iA7HyfMb4qHuANK9A9BysjcHATDJit3ijoofJJ1bnBxQWDUzQkhjPFs83BKdio4",
  "key20": "4GYgfCFUoKdmUpYmFQ8od49bSmeF9uUR6GYgQBxUQzUcfSmywXALucmqRGSwHJAAQYbszF93Sw7XV4mpwzXbCJu8",
  "key21": "2CHfGhDBb3mfkt4T92S36w7UAUvUUg3cJiZ5NKsECHFdXPwtMvhjp7XRsLVAp2PGd1ZZ7FSx28wwNeDCCiU8qbZJ",
  "key22": "3DNL3hvap4BAQ16uiBsfgBFsRDhcrizCzz6XBCem1pGgaVn5qpxiBsVUBKg6LwKv4za1AGyu3pWZb2J1u6ULM6dP",
  "key23": "61nM1oMV9E9L9NU94KJPcsq6FKLy6m2YuXH7VEaSMH1qSJn9t4dXjg2TtKYHCbjQts3yEjmR6m9eLNX3aVLXe5HU",
  "key24": "45bahxSH61fEqr8v6NPyiirqGEnpjjSiWxcvRSfP3NBGsvQ3z42eyhrAwVKV9dSe9oWi3cLi2huVmYm89PL2g9j3",
  "key25": "2nHfx4FEEFPuka2VfDdSr8MQdUU5i4thfE8sVZLqdNGMvThX17Jduf1rdugdzsPuZLYiQYcCMTxT8mgWjMu5hhph",
  "key26": "2G9sh1mT7aMt89eALfztp5XYkxFp61i4fCZ2GrF1zjvhaEANXNnVL7Nr9DX6jQNkczbKjNFA9SFCMfYq8Wp1YiM5",
  "key27": "5PxKE1riVxzdGJSNGpwxgNy5JGpWD2B97zpGjeL4tT7DiGB9eJRexJNA5dKbnYxcEQXU2Cnt83Bf87aqfjjofXqp",
  "key28": "4CG984L3ZoWyiFjhDWBxtubG4DWwbeBKzPFz3eY3jqozxiPsbynNpZfLVwKai73qYofw3EZk6pnbrcjXw8rNNiUS",
  "key29": "2zycnfMjKmLq81mGUGTcNJ7zjUn2nLjrmumjFNq27UYUnhEMNm43BhfH5hPaLCdz4MqLd7U7xX9xsFw3CxDpxY1d",
  "key30": "KfygFV3V2xS8mRCejmb7DMyhsMAabfUapLRB3Rcr3cMfcPufzATPY1dfdCpgaVK6XQs169qZp23rzRmktaieCDE",
  "key31": "2m9aigS24XQjCmQ9Dy7yhQBQRWZFVJgqgANLgfbmkjGudpo7TgPXLvz8yCq2c6yUKUzBmcUtv74RsZLiydT7nJft",
  "key32": "2hyPqAoEHzAtYYavM9C6mdQB9waGhS7eWtf7SSi8ciJgAsB9LCC4eDwQRuUtVDVoNhhVxVeQWu55XsdSkLu6x3Fi",
  "key33": "4YzesugxwioaK4G8ELPA1xd7eSAyfVXaagtLyLA2rpwHwzKdfgzyp5c15qPSuorbtzBf6sLUR8zCkfiKixfU6Wu2",
  "key34": "5uswYZKcSTG7eyY8VGhF2NuSC6sYQyVH9YScp4s2AD8vCCBisryQ8HuxyxHfp8woc6ojhxbKgpYpWb2gR5WVKJvd",
  "key35": "4hxKEdFMbzsGsyURnHvAFZ9TTFGEiZGMxaYJrkEbtS7sbeaA1TFQRjxYWfhTV4uhrwYLhcxtfecaCKNqkiZw95B6",
  "key36": "jWDPPGY8Q7X3bqo1Hy8qVjjAPeG3397goF7yXcbhXUKGFACbmjgEgU9sXYKBW9Sc54HiHSG6kM5AZAKGDzjgSQG",
  "key37": "24WGzYNLubVjiXzFtRSWazefhTjUrLPkUL29EEdTwGDT4by1v6kMgYg77DELzc4rkBdYgM6Sk7uDPr5Rzhfazijd",
  "key38": "LbHPbhE4s5McYRuhtwBz8Mmrj76cVEe8vcCzviddmBVwQSahaZgscZXEArvsh4j3SRaMc2WHdFaXwHP3wFAoMV5",
  "key39": "3WudJroUxii5JzhTxo37fghkztbskEd6L7DBgK8DG8oByxodTVsh231pL1EgUAe5vw9pjWuRzWxWBLT6FYKLTeG1",
  "key40": "5MzTYbQUYxzG7KkPHTjkcr1Rg1EXyWtR4Nhpt41a5snQ3tzyDcbjRy7uiVBcM1GuitMAFsqnB5uhGJf681CgPyXH",
  "key41": "5sbvbNNfHBEMPpEqZr22SPmgfwwLF7UrBwQQbdspkkwzQDGGsmhbfkFNbzdw5MnNqiWo1KSZRgKJoyvA7RvSFt4J",
  "key42": "5BYExMMCyu3Lfs2NDcBEPpTz1Q5rUM2CDjrk8ckHddJ5GfVpxpXfoJUQWrU4NHKqQWNHgPktg2AeQjr4btSHAWpT"
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
