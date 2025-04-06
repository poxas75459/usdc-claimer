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
    "4rDVLx8DC5ZUTLchKjTxFbVaXX3pe7G9acXNzirVJGWwNkhSegE7rnjNefThxkVDEgnifqHMLDYzHMLfKYHPCcT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UEbZMx8JcvjAqqzXnGzQMLh2X1YpouvKXuWTfAPyJswWanMLAUaBqZPGsRdJtQx9HNPdMGacwy5wEWKGDEgzkb",
  "key1": "5FAJjgNuFi2y4YgNMzvrck7DkSwSS5HrjVeiqRrUCvapjhiccwjwp3pR7w38rbkj9XoETmxKPeEhuD6LwgPUEwU4",
  "key2": "bcpMqCvHRhKUY9TBYQNRWMoU7Rh8gRYQzTNKHsZhjrh3jSkZbjHa2VJUJNHWeu3foMx1Ux7R374zJzHLReRBtTA",
  "key3": "PYKAFXc95hS6GhBfyt9VjYRFgHVAy5Whd4qR5YWq3VJM1NG9H4ejLrJQ1on9MrXyA3yBQQ6XCW7pQNX5b8igQWN",
  "key4": "bQhTDGVUgJU9rhxqBLZQeVDqeSH28UJEUJ9syicGPKCTv65gErgmpzAQ1fAbFFfMUpv4dWsLfGpHA8Dyx63gxER",
  "key5": "62mmpWAWsDSVMYJKAQVdQKyfR59qmgNKjvGLQbvd33XHSDSxaL7NwVGmM8Fy8rHDPJN1GypQpNj8CgxTCYNZfG1j",
  "key6": "3nsuHseMreHit9BRdqihTNhMn52M2kxWTWUdFGd7UTwiPtpU1DTBBcqNpE3nogi3U6kktmDehnwcNnKXUuRou4oA",
  "key7": "2zmUzDmqnbuwmhYXMiM1FLuXgxA8tVtV64C5zC9tFaAzE7JE92JiuyevTXZvnahDQJZ55MidNb2ix5EsfUUbttbu",
  "key8": "5sLsjRhPdWduaPZJ3hKhvidXg9mpNMuGRpLXAs8eCc6T1dovxTZfFYGYDCDXqWr8WLRHJBSe44TrkXu97ReaDBv",
  "key9": "3ARGZwdtDocq1Q3GvcFe8zW258fZPmdMFPoon3fsqgYMjadGCBBDh7AcCQLpRLaK2qA8x5nWRZ5XgJGyNVFHBiKs",
  "key10": "46z8XbafuvjV7GS3fAfp9Jv9QaqZtC2vh2bst6ZmjDMocE6o9NH6yt6EVvXV1mrNTJ4KAqo5qH2x4oGUvyZJwx2p",
  "key11": "65wXzz2ZDpDBjiEiaEMJfQWGqQkZXw5wxy4pXvrEQVRjsvjdbXTN785qERvgSXup8rEMaQ42on1EhivYW1EpiMHi",
  "key12": "UWozZ8Tcw4aNJ3yZZwHukPHKTTxFbUd4yu2QsifpyYBV8fXswCycSXHEtQb24jxKt67Ris3hjwMQjyzpNFiktxZ",
  "key13": "5amWp9oiotuSuL9E3AARzzg5LUso9Hn4rzqLUXLiBRcA3zFnwRf4opv9wKmo3pNVikh7qwmyERYxJ6bymPgaXu16",
  "key14": "4qAEgWXovMNt9zLvpJhJfydmLTLPmBDSdoVU2Y6b5RV8ZcfXCFnuHhnqdQsUt3HCyvByF1ruVq16eBbm8ZQiBPTR",
  "key15": "51bHMWk16pRbg5VuMvDGBj5xMxff7C1XvRt1kjUwKi8jYMDfhZquo6CVf8vE3xZ5hr7tDweWCxn1WcYzEtT14X6Q",
  "key16": "5h8c6gDi3JEqLziJYYbJFBqbqEop8P8m8xoQ1ghbH7ZYtdy6cP1EL8tchGoVD6ZMMSm9cZmFNaMgdYUZ5pxyS4hd",
  "key17": "3uCruLgmwUg1vHnft7Bev2jnq1X9UkQUzLAyccp9wCXustFVLYb22P2fMPhzhA9GJTBxEaDxc2bMmRDC4e9HQWeh",
  "key18": "WnnSvJz8nTFLVSbaJi9CRfW8SJpW2CzJp7k2aJqBUuJ99fSpGQzaCnr55aUpFKxAjYYUv5J5BkSQPQ7eYTrsMt1",
  "key19": "2bLsZR3G3wy9TrQqDtcfdA5nvbHJDPioMpJdSZKhXZuUPFkGG6joJJRDnbsksL6Gm4DuPdJgZp8qgK9BeQQ3KN98",
  "key20": "2eTWnH3WiUCPhJe9J53qJdW1owQAWBgeRVWNA9HsyeacXSAYyGxtwjLU2yAU9RKaokWcSxXqDE44yzytq2R5BhT9",
  "key21": "5eFHX73ftvEyDH3zncF8BYe6cQTrhxwrh9wpPGqfjsVEkuBwxKtrDhiFYQ65rLRdNdYwUs1Jv77eL7mvcwnSM8Fp",
  "key22": "4qy94v7tVBRTtmUeL8o2K3ubvpVV9goTweLX6ABRMXf6XFvgVCT9reJ3qXga6dL2iG7BQ7w9KM3SUVPXPbkXyyLs",
  "key23": "3WALQTWtukj8ym7YefK6vP36XiF2DdgMZ2HGpyfrmxM3wQXisfft2XiV8DSiq9ASLgD5mTFmTcr2yqsDXYhxSAYr",
  "key24": "3Y6zdGjf4DqHW9HNACsib4AL3jQZNaSDGPWUZNTFn5c33bLkeiaYwCQQDMbXawkWSHuTnCKuWvS5vNrb8MWBkEQV",
  "key25": "2aQk2npPpyDfXgVrigPhfqjyUSESRw73gJX4pq9fKC6kGDiiTsTAmQTqK1FoLe5YjvqsbLLM9UGchnmGpSfKbTNH",
  "key26": "4nQVz5xJhwU4huP2bostagZPmPWP8mBUNmBQczDoEfuWed57mtpeiqkgLbgaA2n5puRcYxbgxdmtFwUrhZusKHc2",
  "key27": "VCuu6tv9KcHxn2RTJwjfCBbq7Y9JL9hWv3z9YhC1jorYCfriLhRvTXrxuyp3dnKFegEuvb6bcSe58VX52CpiPpM",
  "key28": "48jEXTcX6kMEhZL6xMhMAXQNsTCPzd8GrdNaBhCkUtB9sHp3MDNypMaxsp9ATK6EKatxnmqndG6FMu1Vf4pWf6jA",
  "key29": "44rMtkxmrnTHuu3fBAGmaSsXcKxck5SDWAqYhNE2g8ySmRiUzd8XJTFz22JVBK9UA9mrW5eeHNBKkqSnyWTctNxo",
  "key30": "3ZhZRXGvayanrTPBJDA2v5cEZWD7ZgSnpruiXaKx3NE46BdyKavaPjoHmU5g1y8aYqvt4WKTSc4BchGGBPQBhfQT",
  "key31": "KQiRY9K1tcWSnrNwhWMxJZNQf4ViKVkpV8RzctUqYXJmCQ7ckUwgKG71oNJqxMbQuvXN7JNsHEw5QFCZbL1oTNa",
  "key32": "2uffYTcRv8Zk4AqbKKukeqpYRYmF9nEPp37wVATP4TqRR6u3afqhKBv4uCnbzfMGGKvfHmZzS9cuQZbLzUrSgaWX",
  "key33": "3c3Vrj8o3fDuwiLsLCZk47A3Y1FbHTABcV4eysTNNKsmMiQzv4neheDV7Sp88D5VCpf9z2gDLdB8zbYL7FpMh7bY",
  "key34": "4LEwMihSD9gH2iD4kfLndEu7ug3L9fv1W5LveJ3Pjps7S28hNz43JJ9kGvPA7G7GwRtEnWHNjENNMBj1eCSAkHDM",
  "key35": "3Wfy6MxF31gxjFaFyn3nsni5PjByeHagXusQMUiiv9MEYJLgposCxSLK6W26MTKEPv3SpzRr1pqRbv728hQjUrnC",
  "key36": "5tkSErMYtYbJyhDSwYZVpvGubNDV7voLVgTbtLjqzGwMyC1Q5pg68mdPSRahWV85huk7HPk27j7dzjvLzLMtAUv9",
  "key37": "65UvxmbjWpkAAhzLdXdMatqbLJDGSL5M8di3qHk4CvDNUDHotoiYcs9ZYct9BRXRNvpfDw8LfRWtgXCCWYJJeyDJ",
  "key38": "RphEWJjZyrve7GBoic5REYigULFLxhXDmSda4qsCC5bAhL8qkJZ6YgQ6uvyLUEJ273BmK4FrWgnBE8ejqB3Ecj8",
  "key39": "32iJa2Cw5GK4KVUWZJvr5uz8MNFW1PCUCpS6bA4KjbjtVriY7L7Kzy1zefQEV3sGBHXczFiwFrkkwhoht1NxQupb",
  "key40": "4GpnHM6n5qduKC3dSWaaXfAJv7dNbyPE4j4FCdVFeienyLo2jGNRLhqWy8QAQvNa3Qbr4mrgcfTRRqbUqewnbGT2"
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
