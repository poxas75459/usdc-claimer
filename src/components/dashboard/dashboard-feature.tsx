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
    "4mArHV2PgDSp3NdyGkSaBryneikgPZTu2yA6KKYJ1Ed2YhsRQkagYrUYxjEk95mPaWBsXWknG26sZPDBxWTNetpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gBw7B4fgVfmU7myMhMgxqpWfzVt9QGkFn7aWohPGVEf5ffFc68QtRy15UbuzEuk1Y3yFkR2u53PeJYMChaRu9TH",
  "key1": "4NFX2K84DCoAWMkpLiuVvWMsSmji1MVvuxA2KpFx7VSMMLWTYEu3qwGacsHojWCDeMxY9daWzK8enEhUpdWUVPtG",
  "key2": "5VApNzZvvogcow1SrAqP4pyKHPpx4MMptsvutKnWdNTTFM55bU7f2W45rYMPZnNWxbhnbFrsKrc2jj33adj9pDsC",
  "key3": "5kCTYNCAFtuUjsx8A9k4D4Jm4dHpGZHoAexVamMgJCTc9u3GMKJ3iSPpYHEQqWRsW8UfY7y5Sn9XfJTTokjFfb99",
  "key4": "5RfFc4DhVrzQehJ77JwTrBxkbTVvR6LL7hGxGKDpbkTgKZJf93Q9LDNDnRLLBoY2P3uH1yymgH4ybhueuPWQFySP",
  "key5": "5wriFZDHUHz4Zc8zuSoSYiwfvX53AQkVcqVx3dx3nyZQj7dSnLUDcjUuJvnS4CQH59ggPGsGMz5LQRZN7jMgnE3S",
  "key6": "uT99vtsd8nGroEzQoXHUkMx1eZieD4g99CCe45CkSfWYBabyYaqwkLqKu7tqjMLKTW4H9BiMkmWwKdfDDwM2rCZ",
  "key7": "41nm1n8Cvr5TqaiEbUE35KhaB8dfvjApT5kCnsfALRPasJstZBLADJeePqLYaCj74a5KbZBx76LwYsG6XdTBg7Tz",
  "key8": "51zx7SPvtfLh1FVxVDXN659DRvAQ6WwH9bpjYgYFUYXNb6ckB6dJzBYhhhFoEoK1SGz9exwMdGEuS9pYvtpkjwVp",
  "key9": "UQcMKG1hhYhwdeBEkTZeJ9XwALbmgFR56QEUEN47UiuMACoTQdgJFbnimfkkCDR3K71AuxwA5QBuW4MNzzK7mUA",
  "key10": "2kr1V61TGuhAtzCvoQghi7QFTYc96H8ESMj142vYWwYquBbGH2VXYszJFDBoNwj5T5cPGdQHW6tVgD7c6pYvUUBJ",
  "key11": "4i8K2ggeQfYSShMCc6yop9gmuBU4mehqkopgq55yHAnV5SkGQhthKaS9FYKnLmd28g5iSettfvJSZYrvcSnaeAww",
  "key12": "5uBWqxTfvqD8ZtrVA86rsuQwCYpxu21XWNfd7gikXtXrgNEpqtUXtXpALc982JuyGmFnD2S1Zwk5TaTB8wmusebo",
  "key13": "4r8nDNPyrymT555nSU22jwWW9n2HMVTukWGNrsCBvAX86fFdvF2khrU3f4Cg57tBAW7Zxw5ZJs5gfcdsDnFroYfj",
  "key14": "4ejzLUR5drxsupR5QQrwEbLdyePE8ijcd574cbQHkMcRuJwdATEZ3KtZNLWdfWAQUTzoCkfZBYCYnofG7xwdRxz7",
  "key15": "5p2T1qEzyFsXJnT3J5QSRsBkvzjDZJvLnAs1kZBiErLsD2gKdVE9kgctXNXqZvHxoFx4aXyC8oudv258kcNjNtWq",
  "key16": "45HNFhiG1FFtv83kaKHiTHaKWKAgpioq2tMRVcoTg482Y6NrDLtAoKKCeoQWWqe9kRuTQ9o441Ne5xvpfAKbnLzt",
  "key17": "2bU4Lu8xRFR5Csvp9Peq7SiP132WAWi1stiGaS33jZLU4WZVX8V49rALhSQ34ZGvzuVKY3SQnro18vcD7NmcjxmU",
  "key18": "3qeHhvJjgrxbcfMVGve17zQSzQur4mHx2PEmaMrRB1p5Pbvvp2nGwTJRvNn3bsXVo3CQNTaEjMTFdBa8FpwZuNaN",
  "key19": "4dkN4HdABTLoq1kWfZuyf9LwHSrqa6xdp9pLdffjkeS2ETNf3HDdQLb3xg33bqTEyL1HzRyAgaUDN1gjZ9Yy3xXJ",
  "key20": "21U2CHqJHGBV1pkWGs8t6JTri6GeYiReu36aoeBvTAL1QtTP88B9mCgWJZMHcP4dndZrxrr4PJ5wDNrkUnZYfBuu",
  "key21": "4YkyJbB6N5xSKcC8Dukbj4RxFLf2f38vCL1L7e1RiCcW5GbCvFJUCwFG9utbStvG8JREEDm6toPo1gyxsWxwmnM2",
  "key22": "5jHN6vgjaSCaNVWu6AEhQw77QiVXsQiigpFbn2SqeBbXwsbiQn5nEwGvvqnHHRRA5mgUgGFAsaZ7tHiW7EJfqAJX",
  "key23": "3gvfJun98bkN7QkQmBdxAWm4Kitd3htvcg4ev1hBwCkqPBYPGcPnrMvtKJTF3RCitKZeUTAGtHGWPsq3Um8YZcqG",
  "key24": "3KpapGJFi7Q92wvfipbhZA4HsvVcettAHVSPJo1atqGKZYZGVj7foEYYShPmaRLPgxcSip5xokRw7suF3GMysrkD",
  "key25": "5rK4dyzxhpNyc6n1MvtTfg6BFJoMhCPgzbNzkSEDUQFdEFUc1BMMvJdUXboziYgY1yGdSggtMrXgv3zVhuUshBzi",
  "key26": "4CFhZCRCjgqpda4JfhrLPkTwRGF8spTL83dfhbiPkwrTMPRsf3TbcHhbmvUdSDLAfwH2Uhqe7C4qKh14Bwba8GpB",
  "key27": "41ZoFUh9thTST1aPNARgGeviZnEFy56uPd997e7DQVeDMKjgACaVR7sLESrYc451mbxcfuC55SiXWdqZY1p5oDm4",
  "key28": "3to72eczHZdXwxAFitKkEgtWiDrzgiZPiRAGgtYLXc31kyRoBvM5Xp2s9iRmWYJcMfbosqqLBsWNfhaH1CpwXAWM",
  "key29": "2DGpFbSvzmVzwqCyJ7c3atG5AG68VSiM9X2n7jfDYuE9c7G9JRXfDpqZRcFAQQ1jMEBW2d7ytFLWEpQ6tYz8vi3z",
  "key30": "3hnCFkm5LamyAxDe1pzfpuLcSJGrXLVsCmhj5jSWpop4oB3M96vqhQfyYRgjWy8EjqLV9RMJmwgPLpVnAdPmSwJP"
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
