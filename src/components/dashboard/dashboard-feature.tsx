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
    "2p6xX4yb4wyLnhmksAdVLp61MxzhnR76Nu69dZBCUKJhenbsr3yPnjnDV9G3rwF5bHWJq7kDWdRKxo6Cx6s6wtzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kdg78omoeCpaeCF4ap3nXzJk5X3f9E1e1h3zMJcF6xkH9Lz6SQvt8YmiDsfQAYXUEjW3YRAgT52ydUSrL9pr4oF",
  "key1": "5JaADGNRxkrwi9pNEDAF6D4WB3VKTLvcjwcf8WzyKK11YypFDK259WkH4p2fVANp464ix1SAAtWhEXU5b9pGKB5W",
  "key2": "2iek5JNHFBpwR3xvhziW5fyNxSLYnsTZFDWMrWM8gXnLguToCLCgSQaYGSJXLNTQU2Jmunx64Yybb89N4PBH6uo5",
  "key3": "2if9vu8bPAfEABReYNQYxifJqza6mU2NLzDeCpoTpS4DgDzLcBUZS9n6ryPWorJbuKXyn453TXrU35U3R4HPP7XM",
  "key4": "4T5CeJGbHrRZkD9J3h4ksdtKCaQD7RPdN3SDMpH2qJg46C4npsHghWrQCNGiZTL4WRBtf7iSsqRgQ2i3PCJesHVL",
  "key5": "GTU4Yx91kLvtzNCVF8wkXmp1FzsTahjAvQANCn7nR8zEibcqoqcs1cCNYDT2iqDV2fEP36v16963YJS83z1UKzo",
  "key6": "utJBC94MwqReaTrs146yMd6SyekAzz6sLG1HwiBYLtDWPoP49oPbeiRBdQaqJwDsufG1AGNeHupmxNtbGB3Y6TF",
  "key7": "4EVF4zhQS4fqa2Hajiv3spBygnmRdfjr8iHT9f9fDFDhpmajgmZNJbRw6Az8PKixVyxnQSpPcK7hdRxSLidZVtbt",
  "key8": "4VEta37neDxYLAPYpKpKvzK6iKGb3ZC68e6g6WUZGLUYrRX96Y33Qsa58H9pAbo9a8Xew1uxossbkWJoM62XikkN",
  "key9": "4WgpmsKAZDecRdYmz37LFnRYiWoRpevJqw5ihQqyXrECFxpoCiJbkFSeGE7vwHwQznF9Ks6cmFhvTdYRCv9e47GL",
  "key10": "412qDuVmLSrphvHZr7Y1iS3C5ynbdXMKvyepiBLws6PqKXgtkxk2k5NyXwtKCKQpoNVzcJyU6D8KZskr4oYPsf6",
  "key11": "5QzCvjLRWgoHKGFxjozKWqie1FR9Skf13G79PF2XnvEWeLjxhFNp1wPANdtktjGBomPDMfhEUEEDQV5UKExawevm",
  "key12": "4JTXFYeHwk1Qoji675XtQ1My6XAx4NUwA4shYSPopFx2in5FpyHmV3syQe8XyuyGZ2GDBhrqYqEjrBcbe8g6LYPR",
  "key13": "3PjemXYiiFzY6XbNkAUhjRQ94WP8sJwWKo1SZ8C1rPqGCRMtwE1YGyYaAwSQTNHMT6sDMuWYy2ehHHWUjE8FrdDG",
  "key14": "5JF8gME8gsAJuvzEvPhWgdrbsEwxraAA2ejvsdxsAFa2xUWXS8XwgcoR75W95eQAZXnBDPAkyEjHdegwiivBSKRh",
  "key15": "57gfu5JvsmTdLvmviu9QbcX5GQGhw4NMBkcdt4akLbRyPxNeR9N96T6tf6CiWMNAAgy93LV23VCNXjVkHZ9hmaTC",
  "key16": "5TgyBRFT8hC2JvkJt7UcQmyASQWEEsjnUVvEBAyXrWXsWkiXRDChTkLhEq8gJfJ7cSdZiZ6KKURLiM3CTnEYEnqh",
  "key17": "2JwNmxAXAha8b2JqYPwSqfzckoCtxharyWdSEjjWbK3bWuAf6jdGtB8PDjTMmMn25g3vJhQ8D9iXG49DoRARwmub",
  "key18": "3N8ddToC7zgCS85L55ZBRVKvnXbgAKNGF6vSoshBmq9nyYnBskV5Stth96vrRhxC49ee5TMuVxDRLJtwzH5yQSyE",
  "key19": "3PHTxCNoVW4SiAsqBCUyjv6KLGgBmiRWAzHBoqVuaNgxMY4KFDPXhpMV9wVH1tD4ZHvzeapqnwZHPH4XWVR8xt3N",
  "key20": "3F5UzBmZgBhXT8c7g6GAJQMyMmUmVozmqfWwjLs3MvdM7AWPGXYPxmVpKd4HVkwvkorYEQRqbG4bbbEBKXubNutX",
  "key21": "UoCmDLL8bbff9yGC9FJQu68iaBDgMzgv6QvqTyPVzkkEgvW3LjegAuP6ZTs6MtTVUXrwPzWdaRWMChgDGHVxj75",
  "key22": "5MK2wdZc2aRZoY26q6y5WUTq4BUQHMThnQp8R3U7gQzWzSWzP7Uh8Estzug7zyWvFbBwyJKDG7hi2vgu8ZnPPm45",
  "key23": "2YT2RK4B3mUFEVQduQbwQEb9KDCSwCYC5dsXfZVjPb1WJY8iWMk3kr6sudJPXKsyyX11jPhK23Zr9GmHpYwkURJy",
  "key24": "3eFFd6s5uNvwR7v38YmVwj3yajzAnEthecQbWono9DToQmx1NSqKJ7gFks7ekhCasFjXCc3EXoHz97oZZPE3Ri9X",
  "key25": "4f4UhUXL3wreerrbMnVtQdtREp9qmcJwuVFPBJsjHZaLSdbRsyTLs2rPc5Qda9JWnXq4acL28GKB8HEzxKP8ZtVs",
  "key26": "4UGkKVtc1QNCcnme7wKiMNEzEAypEM4LCRLPu3ZKEAUoQDr3s65yLog9LUvUQprob8GHnfiUMGsmRUqZsF7CjiJL",
  "key27": "2fL2wAFg3v1RNy8nJPbS9pRf1AE3VQN4Rtu42xtX7yLnrcUPK4erKuJR4kJKeVneP9zi9BRsN2btHjwrBb2WJ5Vc",
  "key28": "6GEzqqyb67Cu9AJR68V1TVMcTUmX1giQehbfvAXbwgv7dREPXZYcrKaVsmFMPDmxUdEzGKFRRv6MNwZcfPCm6CL",
  "key29": "3XVKn85TYgybDveiFDXMcn1axb7w4SSZ56TeGH27k3MjgEjFzBqH9MbNNsEdSSNZdQSUzjfyvKWfB9Xs2iVi6ras",
  "key30": "2KpdGqKu9uCYCh1r6KpRKtF5SZ6YSGFdRxagpKTPhsdAK3U16mfkXpPBRQN9unRbfgLvnsmChswxH7SjF9EiGchC",
  "key31": "4caei89hLnKqcdr6vYN4koogUrJmCHELm3BvEk62bfvW4c43SMsHfPSG8p3fanKTg8MMzprcnx6Zt6DWyPZrLkaR",
  "key32": "47JCyMsuG31hAs9SHo5yR5HRD3yBZYVMawAKonYC52nw2jm1wtVQhEgfmwdq1zsionGcQNvHfMpSo8AmoqaCDzNk",
  "key33": "5VCPhWiXkp87XkaoQPxAsUb3WjrFizgLVowAYmv6s3TqBxzAWveKM4uAAzcUwYfYJ7yum5U7ZM2XLiKmtgcrTsSM",
  "key34": "G7ihSfWY7pKckhGPmPNnyUUipNfCF5xgV9C5Q7Q1548RFcFQHVCsivYgg5X9G7KQFiNj1hcHXj3ep67v3Z7bnK6",
  "key35": "4VyBK6wNEPAFvuUtXumEG2VsPRmoYuvx9gEQghWXUfnrbGFyPo9QgzvqJxqUvd2VTpjN2XptgSdLHTP86J3NpqSX",
  "key36": "3xdbrcwTkBZwipmRA5MBdfRPJCmKrrsYb8gXHncYdWQHxBoUsMvrR9d5KJTdv3Zar1UJVZi4BbzQjbeUG6CuFwgK"
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
