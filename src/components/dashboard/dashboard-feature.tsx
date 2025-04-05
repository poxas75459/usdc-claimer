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
    "4Gegb3FPAfKHw2Vok633zUaPFrGe3dtYnowEuoK7YesFeCLfFFX4BW3N1sbzw8FBHjK1nzbhym4DHZUs2NSs2gHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N1amYoU5HbnpLCZvRppZf5WqvEmkvGneBUETdqj1mnTPKoz3rLHdKZxUmtXAywc9qrAHFD7S7BXiextdhkXZwWY",
  "key1": "5ZiDpoMAK2cQMiPEE52gVruP64E5PxLDRLWtD9k2a7Gf1XcgKC5SpEKMEt9RdEEF5gTn3jvpkwjVTmXZRM5Xu5c2",
  "key2": "4y9pYVPkyFJ38SxMPBij1jjzsviN6RdjECCVqY6ETCuwxrNUSo7TxNcwkY4XTtiaQUY8Dg9oL9D4BURXbTJgVJWD",
  "key3": "4sFyoBvsigmVjRNniNA6n8BTzKeJHUwEETH6G4unn5QTkoHEuWSj9rkAGNknTJPXh11iSC2ovsMZG9KuwzZuZ2iK",
  "key4": "5mGfYp3eMgDpCtP6yKEicK9Zdojnh12s1E4csEgXp5ovUkxm8HKKegWrGsFD4Vz9kaoU3QXsLexMz3AwYEw5jdFu",
  "key5": "3jGKhvK3o2ENwshLYmMzzr3z71jtArxLAYbJK6xPL2rkdyGWP1xQ21hRqk9K1j2F9ipnBZRkv6FXWftdz6UjBePX",
  "key6": "38WrrxJwhB2DW9J3AK7zTEBzeKd9pc6gFZfpKx8Eu5MkyqMjdKpLWczqWkxg6xz9Gb4ABunryviBreCHpEdpBbub",
  "key7": "3qy68esb8CNYzdRxt6vnztEuuyVrYmyWSSoEAqdFEhbM23dLoaFrs7LU9EcRNSH4BsxK2ZNa1ZLuiXn7JTV7uUB6",
  "key8": "2y4EVihtsf5FrDjz1bnGQGsHe5P9kj26UZipLMnRb1jWjx3EfGwDdDAZr59ggqiw2jSLUTKA6yoUc8ak81p5oUQh",
  "key9": "54XUSsSKdxB1hiHgnfhuEpshASjAqFmW1grtWbZksNPDxZRWBHiNdmn6kUPreAoa9nMih8CMJ8W4dsoGMStcAK4Z",
  "key10": "dkwGZxTPCqtv3BkJTyZrBSwfbozFMkMe8vkbokKaXu2vfpi3CwL3e8Hr9nxGFDLzQWnvuJRxWxnLNgBW2cj5WpX",
  "key11": "ppnU2vQZnsSTqrE5dwxAxzxXKqAJ5kxLC5TVmUMhDMCVTCCj7oRGEGphxazKTeLkUfrrNMXhG2zjGuAubkzQJ6X",
  "key12": "3Y4iZwJSqyAmmrqQEPjC5GLMZ3p9pTRZWbxQsgG5bZhrw9WeDtrEpFP9CG3f5DSYpoq7XfNf7EEoWicBoEDL4TJZ",
  "key13": "3VLaetFmdTsw2YHJrTqLBftog9pVaMsvFeopCV5ci8hLPio6RmD9vdrkMMhLKE3nTq8U2YYJR2WnVjZkWEmELKUq",
  "key14": "5qmEnmQhD4MQjrqEiGwc5c4n54rG5v7gYwLUuTvDVPPLiQ4Ax2oU68ZJXvKCELuiiaoqDAfrLRucZCKZT1yH44Ld",
  "key15": "ytDv4pLt8L4Kn7t4dtBJ8bHE3uKGe7K3MhfS1QGHaKieBttauuhi5fncLQHzjQLn8N1HtdmrfPMZ7vCHPvPmnF2",
  "key16": "4YWqK5spZ8hWe1jCn8tt6h8YUrapdu8mk3P3Tt7RDBijJG5S8L2S8ZBy1fZVvms9RogoraH12YDdffKvpYj9PfqA",
  "key17": "3U4BMzPHpFDdkq2gN7kKujBKGS9phDNd9FqCvE4SJxjX9Zszv5ywXDaNpovrFeQLdHpkm9m1taypfvMVkR3fLgYG",
  "key18": "2MmCrW9ytaqxxqbnT8PApjHekTfzCZddeNXPKF1E4E43V5ZjpifoSwLp1gjaZpxeDaRjFwq97naRFW4EhKcxYnLv",
  "key19": "3hQwVhGsZkzVoxtq9cDfpZALp4UCnDKSC3pf2DsLdrYyZvhn5TEiZfqQn3uc9i3F9tQ9ZDsJj8WYhLRZExS3UfKk",
  "key20": "24ZoMjzpmwuWpG2uN8tTNL2H9Tgdw7ZFA4kyYXtUm2QV1QWY7QkDUJ7SVQz8U31NdbELcMrygEUNy1NJ8KMSNw5M",
  "key21": "5ULm2uFJGmCwBLng7B5YtwwvFdmFb9XHRmi3i2HE5KDEEejoD2cmSWPSzppdjoRGSKGHUshzW8C3czh2cj369Vbf",
  "key22": "4UCayCXxKntCs1BvjxztKL1Pj5tR9mJHKQyEgz3bvniCRho12xwKkaGuR7fsuiXbc64wTfR7cJmvXjtDuajTDdTU",
  "key23": "28P9NTKTNvKtPq24aN3tHKnQuQegipX5QLaWa7YRfcpETEqTNbfV86Ka5LNDXVFUtgG7E6dmNXJJ21dq8DFmpbCs",
  "key24": "r4mUcPGDDuN7n5aHYWrs9V8DZteGkGVSXEGCqHBDr211TU3bcK7VdypU4Pmc9be7JffHSA8QstqNrDKEjq7CzL7",
  "key25": "3wsABXBNLf5JMWz2RTzGbzFcj24RKJ9EjvkAMqMWQfUSNrCdA18yyhkjaVPULFzwu33kHQbBazcBqEd7r5UPFhnS",
  "key26": "4Wvim3qfRTy7zw5VhPoYrL2txYb1aX4RVKP6Pq483mTb4YeYZaq3EVA2gpMR76vRtk4q769RHtcEjihgbXBTLeVc",
  "key27": "iHEpYxMaae5RS4N88fkBZxbCdYnhuETQ2ov52SG1xNSsTPWia8W3RqDRLBza9XnJPg6YMWNzDhk4tsgJGSxvTdR",
  "key28": "4z88K2MBa8FBf8eS9ggACXsVAgfZjiycxZmRcNaDsSESyCRHiAfEUMwBeNqeF8yMfTUUK9387bPYu8TL97YGYnjX",
  "key29": "TNRUTyW6ZFgwLLCb7nFFTPbsG5igH3ys9FXebT3scNPhLxsyEtmMF3q3FfB9a7tLGn3Abfa51ZPvF7AZ5rBxr8d",
  "key30": "2eRxfSPFaxWLKwx4xwba8pFLRsgn8NBbgh8BS9an99mrKdp3BJvrirsZRUN6kDEimPW4k7FLhHi1NNyHbntMaKNo"
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
