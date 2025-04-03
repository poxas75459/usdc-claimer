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
    "4dh8zF1NZXgVXZzGHuCpPUvmkPaDawpKUGHWQm8Etr1M8GuRD2sQRNfRkts6yoFjBUNST1KprzdDTSG6MA2iYa7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28awDbDDGgFvsN2Y1SMSU14QD1HtyeXD7wUy3tZZgwn845kUmtWoR1e1TSMEPmAysKfyYqno8M6V3NjRfpMumncD",
  "key1": "66FTe9UaAk5j2MeBeu4Fa4xvWePPeHGjswXuJJiH5S8CtqtBzc7XGzzMTZhRHB7D5pMdQfLNQhnrh7x1xjUQXioS",
  "key2": "KUoxNoVqpQdWHAr2iE8S9uFLfwqVaD8ZMMJ6AgpwN5AAqHqXu4JhVjS2B58icBPiCkuKHQFCbiZRVczgYmbwsTh",
  "key3": "5FeicDLmfMsPPcz5tQCRxaocCn5zHFUXgSKVX7AEnV1btRUFeArFw5kUit8GL3bPdwrgH8zbttxEjVhCfr6UT1Xy",
  "key4": "312icdmCYViL7ixEgTxzPCM3V75GY7gB8SVNPfh67BGYsLPHJj4KoSE9BnYuanKAoVCXbLa2mSgvBstmmv45NuSa",
  "key5": "5EXCsgY7DGQjuQkYQZXrwQe2xXAAcqgDHNjeFUWjAgbfkDbskpsHC8ufGNCuMBwCbDrwUfpYUCdyjBgnyHWMJDe6",
  "key6": "35fmeUEHCC3KVFr3Kbb8B7QxjYKXvbmBRJY9h7wzRmTdrsPv2gibgAf11iP4gpeoYxYV55eGwL7b6zXoQxgvEfC2",
  "key7": "3tZPizCbdecztbit9eiiLvHG1dDKyv7mP8byUAtZG9PtUKtSGt9TCKZNAVCMgtzRA8zaTxsnPTH51wc1BAniVNvy",
  "key8": "3vanNabwiuJQP1BNDcM8JtpoEHSFGXwzsJDsoDCGUZud9CQrzCctJ3ksP8cXDbZ7eNxxkWW4Yx2GcQRg2JznHpgj",
  "key9": "MjBgwWezTecdV6g6cCDP69saeRHiqj4wC85RA5nj6VgH4ufiPSgaiDsC3KrnFcHeUDHRjUBPK26HT1cGqptszcj",
  "key10": "2Y6hTvAau6EFrfoAmzXFrkEwSvjqNonXQfiz2y6QkPnbGLqREgvZFhMkUmXk2BU7WWBwqCjqxoN2chmVbwouz2Sa",
  "key11": "43uQBkqqmbu42bnS7YYqC7LAssf4qCgHhCWiK5ezMVGQL1jDYVvUH1MJwWtm9RLtbbyAfzQq4jhk8EcBVBbht3M2",
  "key12": "2Wpmpw6JEGTR6Jjgu3tD9vEaLRPHJGJp612QRRZ5cSxUv9umSefzidY6gKfZ3n4afeJmsu8gDbYHPyL8wJnWyfFQ",
  "key13": "2pKDiKsx66WaKpLUSGhzXKzVDQqRtL93Mv2Qf6mNScnASwVXm3qU7ygFf3LWytGjXMQonXLgt5GCkPf3jFALQaA4",
  "key14": "27UcMiFitvhzMhjeUHeadf8TBQ617cTkW4JcdCtPGHoRwWAz1Y2SKVnCG2u2GyKwjmvvU1PtRgLrLG2fkwW2B7dD",
  "key15": "5CyqB3ZJrDytrtWbtfTYTse6eLQynsHe9PTJExS9vcWrLc7XqbxsDiiAx7MgWfKmKBnatpVjrrjBYUCyUVUT5D8r",
  "key16": "3STVA6rJqj1rR4fH917CfQKndxNAZJ6JdfQqhYNkp4JPmZhsnmtQYjZKZJbgontD8qieHW8t3wtbQWLCBorrmCX2",
  "key17": "uuFVuuaBupA6kYAD8oYHw9nZk8Pk6KVWuGhgeghSDCJBBhpXPTH7d3QmHWgeYx5N5opN3tFDqx1APwB6iKFY68Q",
  "key18": "4nScX5wBv3C6XGEh1jjj75kXWS3bAeW16gKHRUwQfsWRJFgHobXp7kdr7D2ZdgDKX3AL9hdGwMdm1VeThsYEzFYJ",
  "key19": "5s19EJwSoPEwFTPctfjo167dyBL4hWBiruQzcoTsKvVpzdnb8EoepBHvUjPPqhrb9xd1csTw4Cfo5xrGWgCjC67i",
  "key20": "52Wa4EAXotiFmZeMJAd4r6o9dgfZEWqyrZTYbKG5qdH9AzwZuYVnxyiGsK32GhS6GnYmemrpfKvjN7HDLpr2ypZ6",
  "key21": "5icwMSqYwSaw4eivnPyWzmmWFeCxVLy6RGCNxP2fq91Dkfzj8dPboyGCkcnw5jubz8GfoEt4iWG7UMjtJau1skZF",
  "key22": "DJeT64oLCrNoQwwMJN9qNAw3NsWGHMQQ6znhJc5kMnN9y5PJhEBQSA1FfHAZKMcWrZJ9gFrwtzVWFcWSHdRy3Wq",
  "key23": "tAkX3kJDWiwFayGZRsd7BB9dSymsJRist3smQwcGbfZ8QgZznQP7Jmp3awaSHwBFuLWtLkz89GVR2oBSyoBCtD4",
  "key24": "53o4pkQVyyX14sawpK8B9dQrJz1Z8erzDZNVB195vqUbYxpf78JcYV5W5B3SiqRFNGFVu2e27HZrQVNXCkfjACuP",
  "key25": "qidfUSdA82DCQYB5cyiDwk6WyJbLeemdDxVtYECq9LjyVWhqrEsXvU1brE4qXJJ9bb6mLqZ5P6i2GCFQWUT2WaS",
  "key26": "5b3zCxhPZ5xiW5XwCmu2QV3qPSoabVWg2C8eE6vRyV8gL2vnJfyofk76M2eckKbmmZgTrQknWDvaGVHyW5Su3DV9",
  "key27": "4EjMfKAfGZfQf1FAdzH4zrgYtqHvryxRtrmsqs2P6B76iJ2RP93L9fJJJwATrb2U7VeHxfes9cnrDyFH1VTQXhj3",
  "key28": "5SuN2cx2Gx7VXa5iC77uaGfK4mWDwwSKMHeztciDHpecb1VniZiusRw1dgreDMipJvk4qgcynw7qJDxN715qRAHh",
  "key29": "4zqsmZSa8nQRAN1Apna3ZDKraxX8WV9Wor4MvwA6zxf1DAhe9q8Sxx3159JHkbWe5WNMffLKYdUJB1z5V8DFYW8p",
  "key30": "4ehhwiDnTWaRiMzZfsqYeEKY2NFxVjXz3WjPLAs9SnNmbogWecgvNM2NE9NYTr8TJFNsnmLQnFwirF43j3g99w2",
  "key31": "4UGkhg83B6i2SkiEtQaMdMQUJyMipyEu3z1HhG9PZXXWJqR9SnAe4CsX2sEPVXBCmvTvDJXneSHcQ5hbhQ7ouwFQ",
  "key32": "43jHh4ysQRubp1H4v9JAvDew4KmHatu7AGHQrrVYVLD3MoC8HeBGzSbsLiwN4J5DHU7okjd8YVuZXwiH85sem6tY",
  "key33": "mskUEsZi8jk9CsiNbdLp5eYwz78MaGzy61qNrV9HxxEGMU9rYfbNcPkemss6HjkANw9RKVnYJNAECGVxf9TcgLD",
  "key34": "2agF8DcnyDQhnfARG3jk6ZJYD2M9XdRPkwJuuUMeE9mLJHq5AcKhV726CKVsV2zF6wH1uq6awwG5ufP3hN7UAn6C",
  "key35": "27M7r3y6jPiScJTmdQGG7fa6RheDJirqNJgN737eHVAWHCUyH3Fo1foWRkRPE9RumqWZ2SsBbohduR77tsM8tDaz",
  "key36": "5PiENcXgSe8Lapc2w89b4NSce4rXXeTqE6a2iwopj5e7Xgy2hJTEsxbqML1NU1g7EgfzS37sQfKaRvjBMFS1wZE7",
  "key37": "3EP5zLvV7jgDrJztzN7gyQ51Bt9LuM4MUVmEEKuo2KtrH7wcJ43mUZdteFeg2AJuzLWGhWzUqVquJ2zPHwoS5i3n",
  "key38": "4sd4vHk7u9ciZmbmJTVuV1JamPNaToSLJvCbwpfBjCpB6ofppMj9a88L9PMPt8uG7y5G2aAN2LKTzRuBsBxE77jY",
  "key39": "3wWQVGsRUDD7HgQ1S7T561u7L59TnS1UcS1PKgQCCpYDQkDcqjjhiCKvsQn1bfXuWwdquCjBggBbfEV674SJUkii",
  "key40": "2esjZcuXthpzjjXspFwCJGnSFmCZ63zU5yB3HYmJNZnanJYtd1hggZ5Ux3gTQM2dLFVEasVanBug562jw2fbRVsJ",
  "key41": "3QwuuWdpbb6GpvuaqyuwRPWQe3TDnj52ChtVwi2ZBerD4yMcdSXXDcvr46dLVbL89UsYZZjdhhiQ5e27M2tQdTCZ",
  "key42": "ADHcPzoWuxvKJh9DscUb2Pm26aU8Jy46WfAYvbW2G3Y33gQXmSHRMa8f4C2ArKgWsLcZUxmCB9TNpAg6i4imDaM",
  "key43": "91VV1JxbvkEkvzEPuhe15L5rpLwWbn2VD5ALr7Yr3iFrjAULWHEF9QGZUyvrxjt1U4LiTd4NT73P8y7AWQPA46a",
  "key44": "2K5TUWzugQ8M528Ty6fw9768hTrxNWMkgcG8tAMsDqj5LkZk3bpa4G6EN598pwmd8FNqxBHXKxihQQBSCXfMtAFS"
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
