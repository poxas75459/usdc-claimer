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
    "2FoW5njrDeacYxtNj9m8YNz9vehDYVPpy26vWJJ2M5ZuspN2FkHLnP1AtWmBLtEFmn9EagNDmYqaPzfXczBCY5G3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2moYtRcqAKQgYE85shLegbwwSHHJQ5t5hchpS4WGys1FChA1a9qQU28kq4fMSeJ5fsrCej9U5yvWeb5umQiFxtjE",
  "key1": "4puSN95kXUsuc71abSt8BJbvVfYvvPVQbXoqKwwDKmPQyNK1d5GvNZHFufz6LZLkzC1RJcXKcLToqbzTtMFskCNj",
  "key2": "2Ki8WRGgodn7iAQgyc8V42UZYWgQbwvfJ7dvAaquqGbXZoKz8eTSLk4S4a6Ffknn1eoAATGVjwfVGUTVgMBky8Vv",
  "key3": "484NUqsxKNojHvh7b2wLKuse5Amh5FeeFgX24muo4UBHY1bRiRWRJ3b5Bdx8Lq9F6sQmBTsZDxtJJ3Xk21rz1nN5",
  "key4": "4yAa89spJMPDTREMGiLpcaHkke9WSMMxbbeZNjfhyivNJocDmDYzUgdCTfypoHNAn2q9NKRGdMFdBVQFZ6e9ER67",
  "key5": "2RjBMF3LEtmZaxCqiogoKoet65k72pTPkuzTagtBzLfvygUxbQFJBsh8nwPZYzRo1mp5JcJppQMd5uiAvaYhzKLG",
  "key6": "2iXBoZ4APck1TuZzBRo2UqRLBWBCuZr9HRQPurWi9ZdoCtVykKx7rejrxGD1y8kowEViuZXSRR7SdLHtsdBmNrvj",
  "key7": "5Wxo21eCLoAEweCXPgMtCXDZqFJ8pE6WADoJYmcjtsbJb4JdXonunganhYnQ4LGg7hNQY494W2UdXSdvDnV3mid9",
  "key8": "5jJP4NRdS5cHiNdk2FomsuUjyJb3GKrC5vVUR58UfVv1tkjvqAKP2fcC1iMARsgjYSskCxByvzTLuEevKp6s7vg9",
  "key9": "2jYhvfRmKtHRGDXkZdbBRNnF2utTSy31jyXLFbnsr9Xe8J8NDLVc6M2nSzcoPvF74APn6Beb39stX6D54dMVUwqz",
  "key10": "Z8zP8cmtYwKF8R8henT8WjB8jQ9MWUJsbs7krdwvsrKgJLombNayncu8v8tCpu9DUGx43UpBZdDH34iNhSVfwrm",
  "key11": "mUz6Nv7eK1pDDgUENcfrcvwSfdXRMY2H4XtuBADo5TEyECNj844Ji3FQkP2a8gN6yTjiWntUquicj5F7UdfUUqB",
  "key12": "57ybMuSWYGFsmGtTtuQDrJFfoK47WoA9FNBmVGYJToFJZUNVUJREMcsSTrzr7u9LduwfZw3NRtZvzge5JSJX95YP",
  "key13": "2rsAGwzcDieLsHEBUiNdgcSeW8wFjjs77hmqqxZ2StXm78bcvUKDjpUNeK35axfCxHf7RYgpFHzg8w64DmiFbTTx",
  "key14": "3KiegaYLE4VsiTCG7b8PEgf1HShUFPToz83LdHYVTPkipaAtfffpC6D5b1aafcJ9w2cq6eLy9txSZ7vA7NfkT1LY",
  "key15": "4tjcqeZbHJAM8QeKCS2BNCo9YBTm3SeVoRi5pL3BjrGnCh6i8Lr2FPqD4JJyNaw3tsAxDsU4NFumKFBXtKSjBW2Q",
  "key16": "21kaF9FT31cCjbPTykyxfHpfphKcBZVGepxTyMwZ2kUR1BdQ6oqQK3hH1aaAk32zqixGyupcU8Y4nHyeqxTo6TnB",
  "key17": "2DZGoatMSzLpqkzJo93vfnzskRf9oasidgfPXXpdpF8U2w7fmv3YGLuu2si98KvywMu5iTRpKpx6rF1vJwN52tSB",
  "key18": "2rHZSL3F3JHfgdZCYzZPj9ViFDemJm5SoBRSfjie6me5vGCAk8UqcyS1gNJ1RQwcK9dTM1FE6cEhsyCzUmgsAWkv",
  "key19": "4eYJRRTREZdv6zNmE6ZwktpfwA8tjfPDFgD69HTuEx2RqTxD3Va2e8BVZa7ezVyojHK5J1wXkcCLwxyYjbBdDMLZ",
  "key20": "5BwgzCHkdA6tx8QkHaDPNqhBUtPCwNZJLfGkQ5LtSBzbEPnpFMceHsEvwPwk91bayqtgX63S2fUdqrqXEvA3pVq4",
  "key21": "4xg8UoDvP8fSrcwbLqNFThfqiMCRyeupsE4EzsJifh2oAGh4TihnSKT8d2ipFjsJaH9Yr6t4iQcsMhRN3PzgLB6R",
  "key22": "4PwhGUaKK7vdRj3CmMp3Y4zBfLUfPtoqS1mcpzrh9WCyiVniFwZfMQnnx1s1FZvtNsyueDLY5WX2wCVqNkRpaxBF",
  "key23": "5ChrcPvk6sFQA5gzjvSFNR7TMF7jyCmfBzgTAy8hZDNcWLJayL17L3ycGwWmTj8658c7RKsTUdiHENB97gwSaMRf",
  "key24": "4Kx6oeoU6oBqn2T9WRutDjoSLdgHhJMAvMq7M39AxS8bg3XvgPCcHrBVTdL6RrTZmQEhpBsiqb33Mji7tR4vQ8dY",
  "key25": "5M63q3k9yDPuwva3dzURGx8v6n1TaFZ3oFnQS84aA24G5v5kQGgJqCXHhv29AyYHimCCnqgnX7BHaBKLW35BiXaQ",
  "key26": "3KLtnytkNNDws5MnWbD8yYaTXwtiYJcpS2xxoFTrGAdCPWe4yT4fc4xfEe1kvdE3Kk2JLXTNQidmokRp6YwfLQhq",
  "key27": "3mg8nRkyBMvP7zFwK4M1eqSiHWyXvP9D2R5Np6ZQQeRxSpo9SJp4iYzUxxaR3QFY8WdwASUAzHweoCVXaGv9rGdy",
  "key28": "vBVxEpCvYZvTjUz1RoAuoZ8xZgDWzPiAAXJTmGDeSHiq8rTac2nELc8FaNtv9rpfCbR8zvEytVuf6Mz1nbwb6Ep",
  "key29": "39tauYDCmVfozDgFi92jJ4tpYuTb9Am35LvzzZMRL54oyqF9eriHM6tpC8rADagD2LxK4SZzJMsnXTTgUoD2jSnU",
  "key30": "3crjPJhMm9yvWi83krLgpYXU8gsZQ4iZ73gSMAjXmd5AzWQMsM7KY443r5F1G42ktoVf1Dac8A7p1eDh9EFDYAUC",
  "key31": "1Mkw4gBQouJTiH93jxi77Cp8uSxNJWqkyYSEQyvJ5t8FmJEmQGSzs4ViqkMhP9Z4yRHJy4oqtVkUra7L5GEyhNk",
  "key32": "9a59HuQX31EDBm1kSz5waEiTkwHufejZSw7VRmxUeMPyf5oyxqDSNU6jtURzSCZ3YNg83SmG9XZY44gSdJDddQW",
  "key33": "4EqPM1qkXESfqJT3PCjzaPFC2V9rU6SHWB1Wf6iPhGv8GsTaVkA2wFePoR5AZZokoUYxxuz3ymjtpWFdM6EL8Nym"
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
