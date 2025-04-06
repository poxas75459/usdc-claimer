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
    "2xvQ2Suija51vYg3EgBr9t7P4PdgewzKGXS28EsRFkk32MGhFGbhuZRyen1SJMYsNoB1w7KMByEnKATi87vUb6mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EaSNC6tmkcMdWMcMapsjYoMUG6AFFyz7P4SsWVX5b7EBMmGyG22S7jpjKCXc6v7vfdRbzdSRtPKWPFaEsbZPh5y",
  "key1": "33KeGDpXYQb1THrJoEZyVSoLx8tFPoGowi4sq6PJARjRofRbPBbnPaa5ZeUmCY5FNDmQAEmvEVoAzeMZqF9EMijm",
  "key2": "B7vLqVsy7Va7WMPj6EUGCohAmHD5TmeBcrRmiGXmnSt8ZZJi8HW8beGYt2tAj5vrFPCfcq2MCNBUkXH4UJVS8mj",
  "key3": "3okAxKoKj4DGVQFRw7MpiD6MwWqs6z7znJQV59qbyM5D3P9BhTq78rBxvUDZdU5aevWjDVjDPfSDbYVNp2jcdyBL",
  "key4": "EyNNVMRXufWDPLCZTZ6b9f7uFQDw1uGr3L4uM4162CdWHbKPLokrXKfdhAAe33E9Edmy8iMRmLpFt93TMmVpqW9",
  "key5": "46pvxWUyzih6d4osJMTyPLgWTxQwNppGCTMmR7qEufyYM1E6TrzvRWjXwbyCLZMgUAj7iPDhWj1XnYj1rTE1koV5",
  "key6": "44K3vF7rhK65Wy4vvWV3L7gLgzE493x7M7TR7Ba7eF326thqauYbpT7nCbzcazSbCRqRNo8QUaK5TNHx7hm1vbGE",
  "key7": "jbnvN62ZNaV9oAUb3D3ZwKenC4QrtqRnjyRLYQVQeLtKzEk4aS1u59YPwveaGm18ujnX9b55EU54RhecAsDnVTa",
  "key8": "3XfjLzcrcfzKfKGz81bcB3oi9ozTcEb38KQyQG6coQZBjAArC3shKc963Vp29gqJ2U97fyM5wzeLnEgy8qRHCgSu",
  "key9": "f5MJNN7pZ1eJz6mSDXDH5aCvfCBgBdfPh4Hw6xy7BvkeGC2TEs8B3ttzfUzSceycvo6KSmgUko4urFL6NzguUJ7",
  "key10": "FHsDaTXXJvB81yicureLfwBHvuGR33pH1An2GfFBfK7Z1JbBNCSCaKdta8mAYAdm3ob4aAm4icKqiSGcMMtxcfa",
  "key11": "3wupLiWJJQimXnAiaCQQBLmnZtjxkcbbGKr59zW4LcmTfxFHZRLCSbJpkkRLpx7BzXB6WZPD1cWfufvMQXrkayuh",
  "key12": "4T8MZW1hfMj2K6vjcvK61GhW4ehGL4UFS1kQ8YaM9ytvcjsTj1nyT4Lsb7L2QGYC4fkmMRr8sFEH3ehxDtYCkPNu",
  "key13": "3Uds6BfL3Dd7R262uqVAgzDnccYGqt1XKEd1oMDswBn5rtztcdAUZhktq7ZVvSPJ9JZRW1XddAbHacFricBKy7NL",
  "key14": "3h9LpCWr7qM8F9S78FCepsaVquPWSm5BbJz7WQeN7GFJ3egzjhwrZssycbtToefD21C9iDYYxggDeWvGgRdopTjH",
  "key15": "5rrEfDTU3yNpJCyRoq8wd86eZgRkyWss694qW6WsTVkr78HpokJN8cCc8ifTr9Wj14wRLsE3eZsciZoYuTF6uVZQ",
  "key16": "4K5mHKAVAoojWDKBjwwM1sEkjkmTCDPL461bbyX6cZXyHYsBSMYJwgEXaykwih69mQnR4WqGsn6cBYv1xkNQDjMD",
  "key17": "5W1NruXJ9azGczzCvW2Agbvnk6KDThQ9KGSpkAAvB4iJFVLKZ4iYjn112CCJfe9zcbkegRHhdDE48nwLy9qF3Etc",
  "key18": "p7tZs8QUAwnWGSAxceeqC4guzEcQYtMnsHmqVmvc8SkrJ4xHR5pq5Z9ZZzcY12tq77L9F31kb819MwQkgmZxJdg",
  "key19": "3soYPMT4NVXkJySndu7K8HKXw7SimXYuEFCVHdXeCaPioPi5WsUnDEhjkVA5nVc3Lf8x2uKUGUpvmXLZGEUCwtoM",
  "key20": "5sLKBtHaSS3CBbsca5eWpjVrCAUrjHE7FE4LDLu537XeJAV7YMpKEt91Pb8AN3ZVeqAMGNvUytkQBqEw8CSGRwXz",
  "key21": "5rzUpwEb6dwx6Ld4RyziL63WT5QRo5njUqsZSWfBv6fDPTxaTz5oc69XGtzkRCPFFVyDDSpgiTuhisx9LW33ccSj",
  "key22": "5Fr2e7rSAFNEg4vw8QHdZQ7sPLn3QV4tZ8X4G6UVMygtDTC8Dv6HYReD94uV9CZDMnq6eEyu4ffmoexh3NJFBQCh",
  "key23": "29pYLZzvuq8VpRhaoEjgfvjzdnTyS2GLpTeufjxaVrq1Dae1DrmFvCgYobadFf7xx1bgpFDt2xNnCucSSqjnYVyU",
  "key24": "55Qzc2fX5B225wADnjWMdWDGG2YRpgJq3JPVXfibo1tHR8cRZkvcsydHj7nrdBUWQcemmv91zg4QXLp5HzYqn7BA",
  "key25": "2dg2pWLCUHuCLu6tTWWS8c1PY3m3TLK29XK4XAeMjQdzTTUdpZKsEYrL3yZ1tQHthj9HDdiPGsVrnuKUeMfZg67q",
  "key26": "66afFVJhMjwCedsmZs4dChZL6yndAJ3a5g3XGiULdgtCbm2virvAsHa2jL1329Lm4MsZGnfFHFjSiwXmDSpSoxa",
  "key27": "32KVVmswDEWfbTd4DGSSj8bB9Bf5ypZMnAJYppK1vrPo4DbNBWxiKGRvCHSzXg7uTP9T2GAdyiXDL4G8tCvoFqEp",
  "key28": "617FBn6VLp6XoieY2R5owdRTphC88hwFjPt2rxaB3DzLCetqhBb8go4SxnaGgERne5tyV9FQPDhjNeiyLoQWesJz",
  "key29": "2b9PfyDxhvxVVp55Nh3hBxbdVcwHe1L2VzCwVwQvCY4A1qbuXq6cxSuVbKJVQrXqe7RK2rzLbgp2Vd7hgUNWbpRm",
  "key30": "4Gvx2FRXzJTZT1KtLWTZRY3TvxByd3Qygh6f9uVmkGgyTQ5pj3CJJJoZy6sTUdwAfLQXYgqmfEXsPJLyvnESENvG",
  "key31": "fnLbC4wJNTSYnffvYEm6MMvKBZZU9TV2hQBSjc43mAzcyRtEzWR6kYThvdN8QUJe7N7RwRxvFoeCqBzWrTJQmr5",
  "key32": "4ZfW1puysLaWbRhgxxGvxS2VnD6HBs3F3p6yPhbdzC6iC7t2oq8CWfqFkgQmkDSvAGSUJgnmXnumEyLFwUJdf8Q7",
  "key33": "3X3P7V9rQzjNrMyPsduYwNU3n9rfRmBEtrba4CV3rAxWGWNwnNce6Cj5v6Wk3hedNXLYdHuyZEEs5UtrwDCEvepf",
  "key34": "4SgufvZo3Y59TiGHhDLkEusVqLzzkjuRVVzQcd68Kt9BEESEAgpFbD1fpsVwPGGDJM1o1LYpK2GnksCoGkr5AaSE",
  "key35": "5SEnH5DYJRHPnGNgZbGVJyUTU7tGY25FH6wkSTGqpTztNwPBvQr7bwpSuhVB6PA5PoxAyXgrEnaWJpTQRayNqCzP",
  "key36": "3WGER9UELyWCw5STzgZQjazdHZ5wvbT5rDiGopzMVm8RQ55mVsUmQRgUtvT85vr5ukQqXtQKvUePZnnANyywttYH",
  "key37": "5tKSPFvqKusJZkNPJ8tjRxG6jT37Bt1i7godzn32X5Y1mKWUZiaCGHMZmSd1t5SEz8gWXQTVX9ye2y3zHq7APnsy",
  "key38": "5xVkqPauZX71V2yvbht8ubjk8EG3PfgcKkgDL1cQxULHMdgbTWya3urr8GyDwnSSKroEUPtDTtkjEEztajDV2mni",
  "key39": "3sVosVCfudwmJNtxt2xVpbbFbrSrpgYNpcYBWWw4bZ8ZycD7VfuEfJjNAfRantAabkTuy4iRC2rGx9eNBKJJTAMF",
  "key40": "5NQLVKBWr8MLaL13pLjjiJHKmuntgsiaByLi1kQTs4Qjp2oBsccRwSJuNskj3w6oXKfc4S88x7nR4aMgBjV9WooX",
  "key41": "2nUUdh8AsLDD7a6a6Wv72xSGzw4r7vVaLK2yR8aeVGdoZNqT5urDLMUrYYwwKT61CAcTzodGLuYT2zD4MNmosrTi",
  "key42": "52gi4E8svTLxFUn2yFZtCQmsE7ZnAxJPRzqvDLjUE9c4SK5pvYuAQJgNoMah5aSQ5Y64uPupsQxZu5LQPBy5Eu7z",
  "key43": "2d2HjnMroyaTUcaA9yeDrKFGcoiXdHUAfNbvHtiw6FBo2is2on2gsmVKBppLWqN8JvF34LkJUAqddfsaDPojNtHe",
  "key44": "4Cf5oubsoNjtGHToEpYk5MDzcS2rsCn6VX1iEBGP3goGVpvXzyPJARH9Q4JUkBjc4UK7Zi7siYeHTQYu3U5a4vJQ",
  "key45": "53Qj3AdorH1rLoKkXjC9k1w7pyZ8zXXUPzca1rnY3bZq2cPB28QSkbuVYBLkvj1r49T3n889J9n4xTV81PA3MV4f",
  "key46": "2ZCjeqBxhiK3AhJyfMmdJbUGtQrk4jXsNxnG1ae4SKdabcA9K9CsQCk7eeFhbTSGc7HtpHZNWUtZXGyzvpw77a8",
  "key47": "4XA8mQtVYQacbhcQxXGnXFHuDuVNz9U5uQBd812cLp2C6dLLazetRHoDZCaRpSsGJ5kccA6JigJUCaD6WxUXqkMi",
  "key48": "2knubmuerga9nZMVcUfMChmv5AHDp1iAGLqfZe9LdG6MFjHuYgHJoFu8Bn47GACx4Zx2aUBNd3kEf3QiHwqQeeRJ",
  "key49": "UoEjcdvEZZVQavrCaW4UVLjJ6WCCv73DDYYVXdJw1mSiuJEhvX9ssGhWj6pjwiShw9BXMJkesh745QzdYRT2Bvd"
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
