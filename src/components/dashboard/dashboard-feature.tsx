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
    "5d3mfLgvtV18DjDxj2RxMXFv9gYB2tYeHmvnjwcmHSPQ7NfEk5wMFnQei2XLb9ToaCpJUum9mja843uLGEJsa4dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XgAKeW658TRe9gkCDCT8EJu6Q6ZsVyqqmtq7R1Ux75yhVfz34HNPfDX8eTDpCmbpvYiooLntLGnXwxALgo4oFsj",
  "key1": "5TuTzR3t6VKx3wxvymnqXqZYqDyJXsDLpn3gtiJ9etsboT3MWQcrZsP3j1p6MKS94njreiGNYpk82z68ThiLmKpn",
  "key2": "5txgpUToCwaDzoubLDjU9m2j1soqcnMzd9A2rZ8DGYTpMzQB8VjJ6jchCuEpWsriKcpAnJuXDhvaqVHztHVHhoQb",
  "key3": "9c2t9nWHNmiT4y5LiGrhV7qtQNDbtsb1CcM7anFfd92dUJPEDjuAPFzLStqBYHzdtuM6X9auMMXprD7Hpz6JQFp",
  "key4": "29qYfyJeiFW5EXPoodJxyMgMbrYsKWiqAddWkTAfivtfaa4DaG7z2Kj98NX1wEYmY1t4uP63jfUm43KyLUVyotFm",
  "key5": "55mjSkf7Tp7beKzwopQLcDvHE5wUUtYXoZrXwGYxe8V5b54gnJKuaT7ep6K1Sz5ZwPFxA7fssfqxL97pnsV7KUYs",
  "key6": "4zqNQtr264rUL8fAJTJCTTh6UbbckBvVzEjuHRj1XoKAQ9gbXJR1VvjPsRVki9pdeJ5ndH4pPkN4S37TC2ZkgjyK",
  "key7": "2nRyUPUkipWTys4Z5TePWWWtagBvwjRhNrc2wZy7J4op5rJLThQUUXvRJcBYdswk5syvSYJPW6pRhHygJq9CP6o2",
  "key8": "3pLSoertYT6C2WN7L4fDPupHpCcpHywgUxintrWcbtuQRpCDVNEvSxTnSCRB5278aM3d4WkdfhYg9QqNLpjEUpRj",
  "key9": "5YNzHEeLMJrzbpVGm4giku2WExo3f9yirqfSAtQvhFcAoDCD12JuRqbPr5bAHmBAa2dgGFirkMvZWHnqTf2AaXEt",
  "key10": "4Yhom4ZGRXec4QYpCdSqckdcNBwE4xkZtfNeR2sXws4FgAfeTPhegf8x9zVW5pRCBhGG7D9yRGfygEKp1zsoFTLB",
  "key11": "51psdVcWEMGi8aqLBuechMicxQUCYhih8nquHgsRX76d9Tirr6jW2JFDC3XAehV8DfrV2jLG5Dv4foLj1Yb3wuCo",
  "key12": "DkMbCtBJHHsKayoDVsSiyEWHcEvnFqorQDp3AT7JNimpmYNpj64Xi48nEtdU3v7RxDD2RC6TNosfPgg2PB636G5",
  "key13": "4jvAzfCvySD2edE5xoKDtACxqBdBi8sPTZTm6gVQUR3bAZKKMd4DReSaqzbsZHtLewPifcoFdzj3MBkA6hohYkM5",
  "key14": "LDagX8iEkHrjMoeaVViHnQSKiWNEcMYjEpuTNqjNyaExpfnXSdvBPnQpmGx7mkftdYbi5smFeVXz9XXwEnRm6PU",
  "key15": "4K9uGWU7fHx9sFKTSckfBcA1afbqfCWjFg6N3TUCeyQoQxMhhNmGtRSfiy9kuRCwYi1CvzhBF22xLRyAEbsrUcX8",
  "key16": "23gMKNwGFxnv94tDJ5VgZMjvznxbkzcoM6gAeknxKjN2D4ADo2BLNcTV34JMWuom5wtgLq7u6Q4bUbW9ZsLrrQKe",
  "key17": "5CRd3172szCzpzzMRGGL2122dHCLe57vsxpUT75xUNzpThRQ5KNDh1zQ46FNBYGzkwAkg1gzqbT86Q9E6HNnrUgQ",
  "key18": "4zssvvPSLopzBeufzW3MJnZrVAAyoQJFcurq1DFY3TQwSJBnsi2UiN9gfKpNERCbKHf9m8SphVJXMh5uJx3k7Ycm",
  "key19": "58UPEE7xGA3GHEmpQiu3VjvaBoBxNeUNVRjMmwFHXCG5mMMvnMGnw5ccehrPMS8A7JmaY1Z18yVT7tU9UYZUWrcd",
  "key20": "55buZsu5uQJeFaq6CRZFSTUPiD4NRoz2ADAvoX45fXtdLfZLU676nZdB54uXhbcFEGMedZ8Z7UHLafwyvPgaLEaU",
  "key21": "5gATubd6UT9i8QGQeTkWDPejEfkKqxBP1xnB5JtFtFf51FunabfBKbNNN39viGatLFpGA1YrhTJKnnVkZBYHxvii",
  "key22": "2iFbQQDdtBqRTpxSfANqUBEjqPec1JhVUxfeAQyo9Q4PDKyNFhZCh4TDfFpf2rkogfve9uaHbKrEQKugELtWtqjx",
  "key23": "3Gtk1WVBGQXJxg8gus4RZqc5QibHpdeoRE7ubvbzhPyUyHPeSkypjmbB4xrnkEP9dS7eGEd5iR1myhuDtuqthtHA",
  "key24": "2h2dVhHcfrbHB7ZMRabVn2dMpQE6wAsqNhgNNhwHTBbM7iMt2p6jajCvhY1RNRS56FHzCVcUKvMyC7vm48e5PeBv",
  "key25": "3QJX1UrN83UrH21hAwhZ3BBYr45vkCKfJnqzCg5T7vXUUfBt2trzkfWviy5SB8VULhJ2VibSQcpCASXb4MP9DvEQ",
  "key26": "3Hpv3J571BPUHKDiUpZ1BjqKsHvjnqC5QZTk44ZpWmhqi2BK9ATMHw2coGq1srQ4xRpZjerERzW2kkP8U4C3mvtn",
  "key27": "45GvmBkNsGVSYLJxtLicBV4ioud69d1hb8duqAs4wujw2aATDHKh9Cb7GoUph8SHNQq8aRky1C1PrSQgUB34znkP",
  "key28": "yrk1wTDtHtHprqGifR1sRRrbhiukSDgGWbxs8NSL7XDqvbPbEQ8tJwFdHmnXJxCiNZXTQatqTeJyv6A5XJ8JPCC",
  "key29": "5YX8jo4atCC6jXjLargk4kKo4NJEJpRHhUYR7kKXzLnfvFTmtY77Jrsrb26X89A3qs82GxfWcA3A68DeNGzBTeHw",
  "key30": "3sdFktbvYkjniC1UxUDYgz21W3nMNziEaZ5jEWAoDxjY4UcM9hkt7RANtWP6maYcdCKB5CsfCgUCcQw9znh8Biok"
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
