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
    "4pud3Rn39CqGUHvATHQXYgVsHfKKRwoverFzNKfMfcshhDz9LXidZqdLcv6Q7ZUu1fRTWizyHMhbM7tekknBcKco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHLk3PchN9yJnmLfcSr2o1YwRzK8RUa3rHm6to2fQoxoZvJ5PYd6e7rmCLpfBy8kQnguESz8WcSnkQRnUMWzEF3",
  "key1": "2DYhxwKLk8QLnPBg82gZF3PYoHGmmFt2jeMAAsyrhtkUPyPxcVw9qib6PkU6WTsyffeDFa28gsdYvfCs6c7jpfkV",
  "key2": "5zPbr2hg7c62bbcUv3SzprevU3Sc2byhshKKS69Rt6sWLRSSkBDxziuqRYBGSWmTKv5Wjmx7o7S6JjaR8ZmNRRe5",
  "key3": "4FSYQNMjr4uJBejuCxyut9BkP8HzPM1Ze817ahjgAreWSRsUM7E7gCx3v8wb759QMgE9iFEhDtnFoGpukqDhFjCx",
  "key4": "56wkRYQwhtQZneR2ph3HjFjg2rgnzTdjzQuyxKLcjZWq4Vgn4ANa3mFL8NyJKAJ8zeoEHmD4raMPfuoVHL6uQB1z",
  "key5": "3B8EGx2xzikNMebNkUD2TMoLbr1eAPNiQ22BWU95NpGgViS6fTgLhb78QWR9Ho7yGoeWzozaPSAciKLb5MmYnQm2",
  "key6": "5Cx1mGNKw8y3ff1K7GC53G9Wioo8fQSJESDwhpBU2ug7bvcTLyDszXvngv4y2579jqnjsY9TMLhXbDrroZL3h2RJ",
  "key7": "VmejSTcYvcPeQYgirnJiNWHtcURhRJAysVETh8STqAK5HAgyoz9hQwKUfvR6nNCo1njJnSXsg1ppAPg855pLS39",
  "key8": "Ab5aagm5PK9kSqGNtumwQBGF28shi6utarjUxaTBS6jrfsEa7sQQQ7oHHXBaXC8TQ299WiqCZ8tuxtD5ayHQ2uv",
  "key9": "4Y44a7GcZC4u3q2pofjHByb4FSUACV4pKFJqjkWFNg3PqgRtDCRuNraoFXjGXBYzD96eUyUYhqUzGYHd3zdAuQQ3",
  "key10": "23SNPeRRGxJxnQSM4jkMA3CANoXQ9wcQukYzVMLYuZrDZvjF7xGHHLDpR39R4RK2Fg9MqhLXGqH1CEkaMUxY3RLZ",
  "key11": "4bDMp9BzPmkzYKXwCzLw1CgbrnKEW4Ymjy9KfPLKz2zSE2sMt4qSuuM26YQY9ThNSEFUwDGikQiwLHXbCQkuPxNk",
  "key12": "4RK753WjYy2xTHpF7s6eqqSVaLtv6TdXCuRHnBNf1Zygh9gZ2DU5iCAyheDPdkhAfMYNFwik6F9RpPc5vKHi7BUq",
  "key13": "X4HR898p1JJoH7t6CjGm7b9DkVFjc4FczbwGHbE7LkTADjBeesCcLJTnMxEATGaYezd4FqRdMs2CP5EDfLbxP8N",
  "key14": "21TNoH436KcXAcC7BrtRArGxHHNCW5Lpa213kiS9gjNMsqFipvxWLMME3aN1fix5MaP2DjZ5BcuetB9evcmMuokm",
  "key15": "2DQc1gpbfFLbn49Wcj6XGn82YcgMk1nGj3jWmRCFswfFRz5ggLYes5awUpBbr1w6sDGDbRpvF92oxT47atAPNGB7",
  "key16": "3VnTKPQ6wPcZzKpnu7QGGCRsMALCqkyQDbWu7P5qunEAGtTXMbZogVDQ3ZkbWDHNy4xba54P29YfNh4PxhWZCCkM",
  "key17": "2pt8FX8mEFaVqkBgUhVYUReQJozhKBc3MmEPzK96Z8SEANdbDgbHv84REW1DrGdj6vmbVXPjsVRd4pqSdvt37xXB",
  "key18": "4CeQ8waHPpwYrG342pqyGYdn9HqkjuVaAaCdfkQDkQsNCUcM45EFJ7eq99MDyu5PkN5DBQfTZiJg2h9Xbj5cuqGN",
  "key19": "3ofw7ARjVrpM7nvnwbyxdfTjZZhtxVfXHN6qfD5KJugQZHsLZNQZfjCV5WVckZjnHRx7BWBm4UpzUGQFAeFbJaTy",
  "key20": "2CVuMCuU8ZLHqTSPymVJbGm5PWGizkhjwTMJu61WLQb1shLNVTSkF5gePdpxkPYCGnuC5am1QTgrMNv3S3ZKRCVA",
  "key21": "3MKpV9NsUpHgj55h1iC2zQhxWV3NZVZZkwLoiYYjbm2dTfzhL3wiMeE2dERAvmQSZ2QwZKCC8EWkEQ1Wm9g7e9EN",
  "key22": "U2h17qC2PWVEcvUVBh4s4oja7TWiQ9rzqNkJ3ua65SA8MRB26qkr97Bfi18gtH5rchUN5unAG5kCtqqRVNo2VJS",
  "key23": "3hdcypGj38tWNUDWuztSMxKUwno3uJ7Xh3zeLJyrG4QrUGepvjNsyToDgUJrV4E4J8Q9dZfAcL3XJvr8hV1S2uCc",
  "key24": "5eoVDZP5gPo8nwXw3LsNE1Hx6pPcU5riMG3harQgE3FaXMwUcNmboT1D52qPZJLjAdrRsskazWXSx53XSUm3U4jZ",
  "key25": "5jcxz1DrNXjC2kc6eebNVrtzN1m6NRJ1s3YQ6ovbZUDW1wChGfeoK9zKRm6RkVVAoSdFwFxRjNAJQnutozLQPQ1r",
  "key26": "TnnPSM9NSUYkSz7bKkTsGuHh91TQ7LWiofDukphYMbnjQCjQ2K5hHrYFXuM5UpMaVMz1Rd7M8DBxGWe8Zkjjv9q",
  "key27": "4BajKw4UtDadKx3ghzcYXhFgcAPxo6sZhYc1kkvwmSdaLv6tGyXaNPfHsFXL8RmdS5PZbFPDKFqUf1TEPxfdEywc",
  "key28": "4GZ3XqAzuWPEVFocX3CBcgYSujUZbZ1KXu5H56KqxBrTyU4ufXEarRYpsjYXhHYUBb5WwSBBGify1armZRYxUS5p",
  "key29": "4EDKf6YbhTZci19tiMee8YBmvXp8NNDTqdN9Cpx8uZkoxDjS3atqAKDMUwKuRtvD3rPhs2ngKdguHxfqh1P1avgc",
  "key30": "46vVpxkQKbyKSMysBozoBXByAKJGA2hjcLV1LWCEj5RrpbMhhvsTbPKaHTXqxAGVt9Vs4GbGeL9L1cAyZcgQ8rbL",
  "key31": "63xr8SAbmNaDPJsKP9pN2MEwy7X1j19HhjgumJuC3W9UPhXBJHQ46xtJ2hp6CUnCXPK821v88kMvNYwfeGiDK1Fa",
  "key32": "VkYszH6RwtFqtdHyvyNf7TcUc8ZKx21jXqwmrrcXQY9kLnrA1UQEAXzzy6Bhv4tYP9FGEXQrhk2Jy7AnUcNZaDp",
  "key33": "3EmiDfofSQiA45bQU1qoy9yAPWdkLRpRDt7mfiFRgDS2FGhv56i4qyYEC81DpCoJrkJ4nbvDwLreSAa92byCrW5m",
  "key34": "2X5c5mqqHyZcGwuJXaVLvowLtBgSAs9ny9uSi9GNyn2LfZEp5azXHnwBME7onhjTTR3TYFro1u2xxnEAg2BF2af7",
  "key35": "3nw9P3CF7dwDqa33k2z5DrmKz6d4KHbRcC6MatvUM2eMERPtoZiuphsycASwzJkxzR3Ucf3Gmzj1ouxzqPkFbykc",
  "key36": "4G2JQQcauX6rV4xqQRbqTdDqsUue2WMcwsMAfE79WKpjsWPa2ovcu6S95wyrCNKtFTaJcX28gn5EFCLUT7EXberf",
  "key37": "2UMotXayJE58iFxSwqpsJSFP7ejm3SFWs2AxcccC9wdta5gPAE9z6V21mGLqYrB3HNbbtQSfruV9JcXA7AxtmD36",
  "key38": "56LLrcv5PGhHuBnFhxr8d3jnU1R898V734GKGCyz39iYZ2pSYpSDG7aP283GefJ9kG4KL5VJBHxGF4q36Phapf5d"
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
