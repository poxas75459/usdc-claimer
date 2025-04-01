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
    "3pHxBKmLFrVWkFu8gUDLMqnj3swQu9sBwvxba3KecwDYmjbUebrRZCaJUkA2WnFv4jLQgkw9mQgSmv2zwzJTquop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XzmRKqnBLRuYM2XJ4XNCSb48qjmqxoNcMG4TXAXeBKVDR2bvDQx83Af2dZdpuTDamS61pfjJXGBCbVSTLGwtJjC",
  "key1": "XiBEfzmbm8GesRoprD3D7ZBAMZ4UzXVrybJbBPur7vHxgSSngeYP4TW1jEhf5NY5142uZszRHZc6Zp6kkCWuzDs",
  "key2": "vTLBWoktCM5E88VKJoCtH5B7NPrw1GWrnHjyVQz28SxZNWpJe4vbiN4D3DreAfNbakRQJs5Pyuy98APLSx5jKrn",
  "key3": "o3QQbLXoiBySUxTqi12UwgDBnHzWEi3QuaQdQW8ZdbDAG2eDoWkdqZZygzSc3j6PQrAwb8WcMSYXmBkHqEhTMWx",
  "key4": "2tR3XqCWMhSaJBEy5JN4bnfY3smFPjPwAXH8aZJp8XuAdVwAkdeCcktsrCNsEDgboXgZdX243ovxXARdkyTMAx8G",
  "key5": "ogaUH1t2Wh1SJQUGBm58fubGqRrcXZojxCX8CBX3fwLGa91KWZik3e6b45w8jYhdfjFhABMeAUfY8yfM9xbHMZ3",
  "key6": "4tDJsq4KBi4QqKXsZ2eTNbVwWqzBt4ysHKKv7Bj5KiPHc8rREgfqhN74YRNurHLTStdeauiCEezgMsgKBV2Mj3C1",
  "key7": "YS79RUMb57kS9MKtsMKgYxLVubCvj5u2KPX8ADgSaGpT2nqpaS5tss1NH5iud3Y6fciJqY87rHd27fxdUxk8LJS",
  "key8": "2Ju2VT3cTqHz6hPfugkC8RXhLqVXZRbmmWu6h1jGRUiuMHF1Dw88xeP64GYKtcXQ4R6WWsSoQqfw8BHpEWGnMsFt",
  "key9": "5PTShGmLZZhsh7EPJJnrA2mEjP7c4e9F3ntbnohTWiPhmyFB9Gz4xrQ8pQiyKUsHaM72Zwshr4xYQZp6JM2bXfyi",
  "key10": "3Nh2vnxs7Xi1HFGq3VvHSB93op4Y3SFMPPhAJfFrrwU3H7yVr1Udd5Gn6pr91eWqxW7Co5XtGwnhkDY94TWs149G",
  "key11": "2eqsDxwhQu2MGwUyUMYubRnXVq1zRMNxVJdfd4zu5AmB8CbSN9MGkqKyYig1heMQbYD9MnMtPLL3zQLPRzF6hdV3",
  "key12": "3Qd4PFoKQjurWhyKYMHHi3iLGkW4smtSYtRZmiEstwhvh67rQbkn3egrmpVxjWW53bi9f826f9tNYvj4JTH5mzbt",
  "key13": "3NxPPeCuBVgYf1G8xWdgRrh1zcdNBhq66VU7Avu8LrsvjdfZEqYJzB9ZuLo4guQXbyv5g3UG7cveanN2Kqxr6pGG",
  "key14": "2GHw7kaEV8teKme5a1FqyRLun8Eh2QVWYiqccVJvCWaBtJhUMrD6pj5XjeCPefQSxqyRkq8AsTk6fjAAFxkUDt6J",
  "key15": "SbQRDRJVwX29ZnQX3kLrLYdPyEDtue2RECnh9reJ1d7gSFEhysPTLgAbwCPxMMg6QTPXHQdhStB7qr1n9bSJgrw",
  "key16": "5qjyDMfiFBvebxBk6sWwVq3szKAM8253C5xShWZr1ZiQRcy6M78wbc9wVjqjZHmuy5favo6j23fgZ8i5gv9HLs1x",
  "key17": "4yjSYv7toQc9urXpvEWxxaLYFurmn8uMpakupf9BsxCwDe8582QKjuZZXbxV9ifGfyWYvsEK2LKUtssn7YzynDjd",
  "key18": "5Qd8WZj4tqsAyNxXRAtRkGZxXVxarEwta4iRSCzCsDfckvw9Gbq28ZMpp9u3PJb4ngnreKhG6K26dWb4VmJasP4f",
  "key19": "2azVrRqR37qjDoEpKvYkvjRKGqhnziTBXWpnqS33HDMCAnQPbJH7CUzGktGSVUc6Y4A9coJ2vge6hkXQPB75dhK5",
  "key20": "3GYzzGTShBvGMYuGGHoLx4BiB2jKdExniPnoDoyZ6MtaGYBTE7ZwwMoJgW7NChisdZiWeoyF9kFRfucZrV8qNtj1",
  "key21": "3dMJ1H5dXgmtDhreCTtvT7kKZ8aSNKk2RUVKYgjiFks8D6fsCHifYqEWj8aXHFfXYCifZpV623X85sP1n6SxB8wP",
  "key22": "eqE45hzqXPHk7cM7iqQwNeg72ZHh1fwCoVFVhozqDDA7Avy3tAbZc1jrH9SonLUZsd5wLUwmPJydtCjPgBLjkrM",
  "key23": "21EC1W4sg7aza782a2jyuM33C6f24qwm4oiskZFvuKzzybajUQghcRX3SrPWgjpd2agfkVBL8Wno4FfCkjeL4r2p",
  "key24": "5c6EhGRFcwoqsQuuPnETQb46Kk4ZVYvvUg3ZuW1k3Btcc21uUhwiAY8XHnqVvbTcdZYGMc1LKjQbE7PnK5uZwKYe",
  "key25": "3qZrhDb13WFbxGNBBwKiHbHzx7BZ15mrm3yVWsUSFHQ8F1QD2t77a44myNL8moy3xG3TxsXcnhs2tJuFBfRFjL4r",
  "key26": "4G7Xf3qU9hKBWKNZ3WDfnMjuwuz6842tdWrqxAUhxCR1qVSeLiTruCnRNRbvzzPWoixbUWJUASibnmzSCFXwTJ4w",
  "key27": "5ZExYY6BmDxKZXVGfGVg7YBPqVqRnDpYBfkU2xsVSeLy8T5Hoznkrj5TG4LB6mcdgVEdW3aoC8tCa2tSFyHqXYHM",
  "key28": "ssP4ZdQRSDYNu1HWhJMYpnQsJP4SugQ19sCc3v17UzX56ngBarnj3FhzPLFVVBqP4KTtsh1783NMqj2PfXBL8ea",
  "key29": "67bTATznjQSqSvQH3H94S6akCLxQ8Naa6GuKwJF4m1DXsbvBf5b4bXV5KHT4Rnnhbfd5HfncKqu9WSeJXH4tNc6s",
  "key30": "4cKpd8451EC7PXJCCrZhW4AhzcCnZbcGCjdUS3RD36vo1VLri3uPmJpjHdhah62G7L5eVfrQ1FR12egfDMavsp4R",
  "key31": "5y97QtPHM3UiKKcHM3G6gDF2MVMpQ2G96LyXKREdLdgfP8N5FTLqhiA5Y65bFRLt3yeUrf9XXehVyA4JVxRD4QdZ",
  "key32": "sQ6Qy7fZLEH5L8nSkjhCio2FspRv5rjvJqj2a76FTsH2zPaAwpRWVjGSoJ9qL5YShigxjSSweB4RMrQoZ6JxJg4",
  "key33": "56ibAoMN8yx2bRQiNwzEiUbm3PpMSbv8jfWurpiiHzSNXmXgcGbzUF2pwqXRz849uLFYvStY2sCmYFiTHdR4RCs9",
  "key34": "2GCwEih2sgPZ4MGmGzD5vuYDpUECRggf4mpsPCyHX7R4QZQcPt9vt4i8dDCoaGS6BuFg95SK1kzpBBGQ4WFZyw3c",
  "key35": "5B4NKzRHBBcKKwDVvXMaSc9NcBAZ43U6fbxgCvH72hW8Ua88nFCP3VVEf6iDT79J5EfCa2grpCmkYrPWV9WRNfh4",
  "key36": "LhhoRVPQjxuvuosVqE4PoLLVPzjjNfq3B7PcRXUGD1JNujiQ2VM2aESymDhjRXsKf5MUzLkih1TULPdZu9hNeqH",
  "key37": "2rHHiNgLVNXV6TJFi3ty3gGRh2o2oSVSkW6P5MokXczpwrY5PenpGuysL1CivPeMn79tVGCRhjJ8MHMHhcdz43CE",
  "key38": "2hqFNfQgxqJVuyj99ZThnVWhXMgpmpSBZSVXrWQ3ATUZJekbx6Pr7nSEzU828hbpMY9ZrnGypBYjbeYpjPcvzGe4",
  "key39": "5e6J6Eby1CFizXTDe2ySgEWa9DLUs6BJ4YGriRW2G35cy9iZchAdTXrumY9P38orRtSYq5WhSoyzkyACduLN3iMt",
  "key40": "ZMq4pbuhJLWHqgx8sjkBEwsHeE4DsdS5ExvX7N7KEAemJWZKhaVXH5sU2cNiq8wrjKe8cwCyLBPmmWCfFdtCEwB",
  "key41": "3FPPX58HgGpTxdEKNpDCNCc6yMwMxd9PeexxZA6om9NN8tvn6uKKWHqC7kDft6x4cEZDWaStpVXssjuaRpT34d4r",
  "key42": "2U3MQcxJCrZWsZnEhJWoDWF69XdopZLAnGA7orrqqyNWbcPydymJzw5LsGJfvjt3Efb9L9RZrLGthc9TYmd5BZwj",
  "key43": "24mUzKb5uHAx8um4xmQ8FYoe9JzemDWabMvn5cJyQVWcV8miQQGHZt91mZZ5aEHEuN86JwPfdhZZNLtF8wP9WDuf",
  "key44": "3znsuXKeWJyNL4NQyFq8VuwjyqcUn9MapXSsr2TBG4fSWcFFKkt2k2XUUWXcLzFKZWZh71BypbwKCfGsBVh53qHh",
  "key45": "p5QKheocMhpihepzz9h7uhEfgfL8PuztwyQV4z6CTaea91UcKwbJ4ZTSJGhyx9tuLPe85cmdhrDbRjLkRWYgFsk"
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
