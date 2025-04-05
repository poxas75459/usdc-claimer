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
    "4Y6BV2h8YPnotTsmqsnDT12C7nUzGWqmjHcgGvAzdki2RgnBoCRGFgnwFi8nxRDRJYdXmpMYKptpBiAjf3fHc8D8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWsvpG18dGcuX1tKRthXMXQpbHZYzgHp933QGWawk2MMucuwxsxuxLUvUukQv4e3u1Dypyeo58A9LDYMxER3XFU",
  "key1": "3cMCqA9e8twPCzWGGEpz6bsTsboPwndfFoBkS1SiFNAgcr7qvsMz3dgJpJZNUgxd6S4oxLFkpnujZqoMWTdui6EP",
  "key2": "jYYqNqaL92Gq1s3vHVzhPYJcEr3eA7RvVbPb8Ke1t5fuqb9BpYNVYPFYycxfeid9EEJ2nZgprQLJqdyitZFRg6N",
  "key3": "63jcfv9j8L4hJgf44rVJMV8hXSf5GpN4xzjabNGyD4ca5BexmeVfFNEH7MDvchEnaivdZYuHVxvVoxxAg8vCSnH",
  "key4": "S3rNsKc69jNftgpk9FW4yWcsbqDJ2FFPfPVfF7w474js5RzG33rMqv7FZf9KTH7b87pYksGLiUC93qp8ZDriCDn",
  "key5": "4k7VPsjx8sPUva7SmbSH4MtcocKJ38c1DP5CysNAkDkwcAQjVXCnrYZ78M1ErWRptZ3rNmLY74k7daosATkTm5Tn",
  "key6": "5KNrcrBUHRnE2qLVnHrVvNrtvrQrHv11f86ckdgEeK46K4QpswphgiiijY5LdSmzCFufg9wd27JT6FhAaTAKAJUx",
  "key7": "4gUPHffrTDHAFbByWGYrEu9VHCBQDzWSUtoQBfCKdquLoe7bQkCYeLaLBZuZndPU2yzxnEbue98D9ws7aRiaGs5f",
  "key8": "2NFg82jTczNLqAzGPpeaLmyAi2CTbGM91eXiZTEkYkWrYuUUdSSYkeDg5fzHnNZgzELz6WCGG6jZy6CwBeqSjNjc",
  "key9": "3ZPivY3114UufgGN51ZMBwa1ERgKTSLXuVErdEcunYCbLR7Md14uvZV8SmKfiz4ZQuVT8bcQbouWHJJYTcc74r37",
  "key10": "4G5qpx4idA41auvv3cniYXNRb8YHk8p2NyGqrC9DwH3KxEAXnKnxzad5kN24qRym6Fxs86J9uefR7Qaq6aGXRjva",
  "key11": "5XWPT6gJnQMWkRpZv1yarq3sQeQDx1NUjTieUEobzMn3ce3LE5eJpFZo1dvUBCc4yRgCYUpJQoaWFVMpcSd82MRb",
  "key12": "4tLtrFTrTXHPe83eRX6hyX5LkpyaAZswQaKw6py7srnfp7AX9kCvBZs3cfqd7PTxxcyHz3swiXqkVAsDU7QE4uQe",
  "key13": "dBQBxQTyBA96aAdGZHDwQejm1v6SJ8ncgfQw6VuqfL8oMyjNfENHjrHAWoC2whn2W5LGeXfPKRwZwX4Zyjv38p5",
  "key14": "2B9FgRPE1MLh3j6iR42AuMVjDTSqS4UX4V7UGyEj91SkZK59ukeDDfAc5qXTX43XzjmSiHWhFZcPj6Z2Xwb5wcaS",
  "key15": "3NEagLJyU1g6gn7vpFF3dpbrojVNJgTD14JoT51QrEdJRvw5Hx2zB5g7pm2n3anQLo6mex6F8h2u3YtwDfviPvZL",
  "key16": "4Vo1jRj5V5vBP3KKA1z6MrLjWGrTt4hZPzHqBvEYe2vDt28X183QfFbTZHPrhYT6145wMgcjisvjxB3cK8WGgGQP",
  "key17": "5Q7sDzUUyXzAEozaArTXdcMT4zF3TwWMJD9HhpgEKVgLYq1DEvLPyK16LJVtp6ibUzJrHs5gkQ2HJng9qornZpJo",
  "key18": "5E1JxukFmwz48P4M77E296NNv1iQiYk4moxqHpYbSJa6UtZgsuPuBeUft6JehMsSshWrVCVDGdnrRPTMR2VFf844",
  "key19": "5kx3ipqi7ttoZKM7kcKeEDfmm385iXf8deKTcvN8RgtrSYZLYnKR2TRFBMNgUhQgdJJvhJxCe6HAG9YUyGshj9R5",
  "key20": "3x2eqfn6wuex16eeuAihyw7GxsemxKqBXKYdRRgbdg9rvq7gyneE9UizQE2qxZxfxhDjErnh9o8iZ9X7nGVgNgkd",
  "key21": "5drTMwivkpaeYvQEgdHkRdVKS4F37hzrHEra8fLf1bpShWvJSEpUtkvDzG6zuTH3vQuQmUb55PWJ7eibrP9fbAQs",
  "key22": "uGgZEMuUHh6MN621cq3chUyxYsJpSEjADfESubTNep3GzutKPvvgPChEXbsHW2MAqU62sJfF3YbecsJ6sRZiJyo",
  "key23": "2mdTtmupFiKHSLVN2eVpDm6vvLujJRyDwFKj7h7qgAd6QBZutdzqBacs7xsqT7vVb2vjTKLZ6BCs2CWuMvgPmT1D",
  "key24": "5cZaBTUAgveu82gVJAr8yqVGrqYbcw2AefkWLYMjVJtHAgvVwxTPznWrYk3WxLqTYta247uWSBsd4jUWJUCHRuXP",
  "key25": "3sHPmNHHKjAQEEnbRxmyPcD7GRNw3Vq7i88T6Pns1hpq9bkZuzmj8ZyyhNkteZPKwR7YDb39YrrXkcj3s4jAtRjr",
  "key26": "5heUfKqzxyE9hQdiKuwgru9eHCWrv188k6ZPhY7DzB1n7EuvFur4kZc3845VigoYV7KdibUJLCqx5UsVghGwsG1C",
  "key27": "WeVi1wCjCMP6JVfzpZYkhBLJjhPQgYUCgJ9AjL3R9b3ZmhaVjtp29cXHZ8XyRTa1XSYAFRHpbNWJRYYxhJkeZbT",
  "key28": "67rRBTmGuPwfUpbbdE6xz6EqMTauxa8tuLcJPxhL2sQ8zcpiZVgThVDcqJx69GdU69qa8JviM4Exz7x9zPxuzD2p",
  "key29": "Zy5NLHTfGKff6XNe7uH3J8V1o79KuzMGCFCaVWksmf8CySb9DkG7j3wkTtvUFG2knUxtsegtfWiFWNKzbWZQzxz",
  "key30": "4E77g5JACzKn7AmDWZyac9csA8nsnAttCxTCpLZJP9Ydxqn2z7KqzrfcsPbcAB5TiTu3EXq1tPXnXtrzvSTaZYqy",
  "key31": "GoX1p1UcXkhMNLC5jZJK1znwHjhtQ6PygkJzuVdkB4xmBDktqzTtfmZpW6sT2WTGVgTt23ZwM4v6nv5iDxND9Up",
  "key32": "5SkYoLRbnA1QyeU5exRKWA7vvnDCWKUME4vCTMYutuXHdfd3DesSuYZcyBqHvXQL9FQVuMJNgDKga1gauKCtrpP1",
  "key33": "3nWJ4Psb7QWj8gcq9iH9MQxskqmz6HvNvpr7poq2mLn5f16hBL6aR2qDV7GtZ785gqAnopS3RWTdacmitVXoVF4Q",
  "key34": "39mFNyhTYSWLMrRobSxbahUyHDK2timSXYmQwk4oUnczN8aCxw12LhWoYnAbfTNpBFTnL18rNbSMnDKkPhgbMNXt",
  "key35": "5abp7gySBuXndG5o3Ghx4HmC8sEZEfWaYgbEWjTAh9oxQfJA4y7NPsqLQzy7sfL48z2JmtvbsXkkr5vKypydzQc2",
  "key36": "R7wm1bEqFRwFhbxx35bJwrMdAsxeeWgoLpbA48oufiVp1VUeCNyJeaEstaDVjhTsPwF2xPFNYCGBkXf3VW5xCqT",
  "key37": "e4QqTFr6rNer4RvXkPoHLZykinouMGoHiTLJ5js3TVN8H2fwiMZGqJcwdXxgEx3JYRRtyCYZMwm7ccrcJQmCdUE",
  "key38": "5tUZzDge7uxvkeCHaB7Tp7gCwGwe796J1ApvuRxW81JVhBR4ywm4yBf4yKsvr8Vhc8Cj3GiExhSGtXL4F6ViGdf4",
  "key39": "J7pwvNbnxABh6pbR7trW9heSUCF7QcTDoaExkZ9Pkv95LHnG5ZzGNd3bAjbipJZHfBnDGBDFQi85mKmDXTVX4S5"
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
