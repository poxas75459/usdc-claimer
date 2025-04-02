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
    "2UkbpPRhkj7vzkEjW4EFjUy4E38ph6M1eHAz5ZYjyZP4hgKMbw4zCaHerivYWWkq3rHK7hcS2KvYMXBbE9U8gtrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CN28ttKk5nKEhNe346x6cXqN92T84YLJZZw4q2hwb8UVuozkjqsyXQhwhv6afFeZnBwn7StpgxvFgPN9oCC2mx7",
  "key1": "2GTXW3pjYum7MnGWvdQzv7zz6y3jbXfY1u7bvhz3maEin9hXss1pY1vYSgZyUbnxuuwajdBYjE2SS4zZsnnhUEHt",
  "key2": "3T2Req2sTG3jGcwzLPJRaAVdR7Y6oV7Dup93vwBwbkkQ1mHSVJa5rujXYJkqHXMHVTkFFdXXwAqgJcW2CwU98YrG",
  "key3": "2imXfyGVsayq72p63DtJZCsbfChkCUtQ4rQLKPtCazzEprAHuGnsKuPq7kSD9qw3yq4XW83NmtHqXzQ3ciNoyeBo",
  "key4": "4acYUYoNaCyk2KAMtYvpHa7TZSNTyHVsds1m7FtehXwjE7AH5sWUUUUsJTHzo8sqd8Z8d7hGk5iqEVhQ1KbgucC2",
  "key5": "5boRjLpjac44JAU7gcFiSi5SJLdcqrd2JJgYfGqC3G3KNE7wdyNMonzLrBoopGJNF782i4yxyzrC4rQamuARzXbH",
  "key6": "3f9sEchQadzEDWLsBa2FHP735coJJ2M7jeyoETusvCibymRKdTjTmN1z7aq1rrELxa8rCQgfSQ1gT8CFPMJwRQ1J",
  "key7": "2scUzRdLdStwuD1a7XCEDhNzbEkjUrfrBZo2TZ8j5ov8BRE8jN5g9JvKHwUZkavZUewqUpeY5HKcFxsG46tA8vfr",
  "key8": "3LapkpoT6HduDy6Qjrdcx9VZMrXa8VUeSExnE81gvWQW9hBe5SibfRUbyu8zHx2GWuKbv8wyjECJt3RvcSbu9G99",
  "key9": "3USMWQgaCu9zYY2qtQQ9jwWSvtKL9pXvre9J9hqdXmhS9ziC8NYijVroecnJcdsA9WR7hU2pfBRJkMBQEVCiKt6F",
  "key10": "4KQ9zy2m8pTUyy2DpJMvSFzDYuF1QgpUxUm48buwKHKhsrJ8q2Q1JhhwKzrkSu7KnvBh1ij6p9EEPqzUFK3waeGB",
  "key11": "5qW3Ni9Ha4U5bvCEDufuKWBNvMTPuf8UCeYNjYwrnWirDttSPkbwLFAzrrmqZPTFgwYbz4av7KfBWLUAE7A7PaE2",
  "key12": "5tdn5MEHUprVir7MmpCxj3a5iQfPzjUKMCg2X1shCSnm4n2eYuDLf4xsgqZYo5CvgqiUdsshaffquVFzBUsxn3LU",
  "key13": "4cY3tD983xWMz7LVx4yCpWSfPfstQ2SS5dD4Beb2sGKqtiUvmqocGWS3boqXGBYrK396bYdeWAc5VJmoUzfwh47d",
  "key14": "4AHCvua4CTskz43EFge1a6s4USbGEpiRhuZ7LUU9SmSLahHYyGHTaM3dohoYBV3FjqfeYePWycQX4zCzSi8mua5i",
  "key15": "4JMeGX9VJg9rV5JXRjeD7xqMqxRFu5Y6Ncmie43WUp62S3WigizvfhcBBzDKJw7yeJbAAG1BGYkcWj7ADkhiZvrx",
  "key16": "44YwDbmyoqtUooJWaeuN5Tmvy2ZhkB8GAXTYAQMZ7HbQkHubwtRJndqeAuPxYjjkYiZr1jU4fWTdrMpJCkYikVbk",
  "key17": "3LWX4j31w8GQ2ouk9YZZP1MJvpu1AVT98mMVSEdCpGLJkq7xxbB9uMsgw53XGD77ZqnWvHVsHiF6p6y9fmdjBotB",
  "key18": "2HK44uokYhuQDmqDSWMtWfKSMSbxjwszNxJm1JtDMKUfohxsggqDiYBX43RSEhHmrCTYRLXatdXqQxTk75W7i2me",
  "key19": "45A1LXKLSqGTGKc22sKzX8A5tEaBSwQfj8ERcdmFVohjPdWVkShPyPda65rsgjS3jtTRAjyWHG4D6UBsXn1G8Hqx",
  "key20": "xCbfG6xmm61gBKCHJK8YvLiWHZjUd2AQVSYewR1Nj5wcAQXZfpbg9bTHzvp8pJCURWr11GK39LYNNrSKZaDA5z6",
  "key21": "5vjmDEchtPjy68ixUz7riQ625GLUPx3axSEb6RNWs8aqx6kvmwRAKQfh9VrykzobZGskTA3mxJqMPNS3UGpsDNxX",
  "key22": "3QNoiHYkB65yaHbjxDcaGDgfHYysjCRh2N6u9MbCT1ZZ66YdFt6xeTumxt8c3dgAmYGjePzjyLNsnbRwyxpEgY1Z",
  "key23": "3KL41qd7mgnREkZMSffHvtjtXsyVREJsch8eBtRks5uph1qecqYYCmM5ouKvYuyUQusLGcZe8wqpHw5aDMbKrvtS",
  "key24": "2JB6VDquMChzmJ6yWJ7AeU7Yuj4izJEsgd6eG5sQBn9tVCjr8J4ArHcsWCPB6GhAQ7ymCp98xAAAFHV41zWp479W",
  "key25": "4UkjFLhdDz6BvXRNMrjRJXTpr5KbMuKDFGKnMyuhSf3LRMjuGfGE7iGs5FWN84gjBLH36sTz2eqtjrEyxG1v7qFS",
  "key26": "4VsFVRtxDViRYoPyQstX7252yM8GXnDpEDZKBscnzfyWVGiS2cGgTmH6ZHDGVtPZG5SUhfcH5pDFTBCoFHBjFJME",
  "key27": "2n3atLEb4RuzqKzuvVfTFnaJNrLCBh3fJAKHSXh1DJ3sgok8NYFpAPXyYpjFFohUJ85h3L5Lm6nYvJtX9RYrZHhA",
  "key28": "J9TgWuaP8yatYvkLjxWW36z3u6UBNuu66zXJihXVaRMAtwfsc8gwxCfrYGiUgr6K26gWvLe3xSCAeaSuC9UUbbo",
  "key29": "P2QCHqMkYr9MPWSnRpgmpHYiR7MdzupqdnDoFJ8HqCPnGUtMbRoGixbhLcJcqBcTPqsBj1S6gErCe66rpNvpYa9",
  "key30": "5hoVeg9PnN65hVWPVYq4im9qhAkqxicK2e7Dc9fsPnVsLiiPkVSfBngWSZqnmVa9n3MhRkeF6aMDbT8dTqwLrW1i",
  "key31": "4P2suyEyhP2Z1Xot2EPxM1ApAz1aZDEZ5gsvFK8K3yeBeXNSQ6BEBYQkLoR7oYQrbTBZEsXuLU58zQ44kLjSfYvn",
  "key32": "2xMpzKgvWZVPafzEjEQzQzkDbLNU1BQeWKJarVr1GDGkQ8JSfUokdmUjPrsjHeHDTP99zzGS7NhJaoJYRAXtXisj",
  "key33": "4igVXEDiD4oTGZrGuqPdJEytjdahciiPr3WqQLC99hNeDaZQSYn3trWApQ2RrwrmuFgsq2rFFCEicezJeCrAvekk",
  "key34": "5F3WHhh4mSNac2AjuG8z3FmuqkP5ubGGhUZgfH72Bdd9gc97UG8C8jbET9pSPuQQt2E4QzvMDCPCbU496FB2Vrxj",
  "key35": "4wAynMhvHdXHdQaLpEaxDCA7i2mnhgxfzV1gUhXgCjyvuhevmxBjuP186dE9MVRDcGBXaDBV8AogAqAdiRaVLNNq",
  "key36": "5LtYyBVuacyTmERQmNGmgvaKu1XzNN71tLwfX1cJtwHAt5oW4eXbmLNgVGz6dYo35qCEN5HzjiZBAAyPZQZDjLHf",
  "key37": "4ELnVGhRTw5BGTk2UULr1zov3vVV1p3PbEhJmJTNjqEa7L4NQXmEBR9WSGDgHdqw3RjhX1YofcWyv9WQWgb2sHGR",
  "key38": "63A5FLEgN8QFhFKa37jNzfQrw9a5YcSMwc6FAftrkH6fL29BsTSxZTpzbGdjx18SzjWsQvu456JESkoQ96tEFHkU",
  "key39": "64Zs6Yj82wYpm1ySYM7pde2dpgo2nh85uVLcW47h9UDortpxCfvp6qdhRPFbUc5e6cYJrzcCohvF2oVRNBBFwqX3",
  "key40": "VZRWU6sHT8c3ctZZ8FSWSvC63662tVkCJCpr1baSM5Euung8McK5VNXKNjjjV6HYhrTW2hJaUMnp312RtcdKgbc",
  "key41": "3PRZz2BBE28MQocRj64MSgrM3Ft5kwAQmLyyNN2a5SNoWRGbAoqNsjQ7u6v6pJA22b1oNxs3aXDJ2WZF7UTnKGB8"
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
