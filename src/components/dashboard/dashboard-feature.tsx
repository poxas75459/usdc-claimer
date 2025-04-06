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
    "5E5maAMSyG4dEatHfsQbA1GbkeuTWqiWsZ3xkfpp5j2dgrYTJm32m1EUR9hhZcpQ4ezUbiFT5eubjms8Prx9DGC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a1pgouLxA4VrM7Kb8fBo9CW7SdpLhLYmtmvnNxtHWhxcQ7rUfRT6hgr5ZWouvLXKzVqx8M5SbtgGFjAmC2Lt1Vp",
  "key1": "3GshgyQjkA8zmVkU9nEmhRcvaTPWMEx1oHtKgBguSmR4sBbufnJVztajNufkj4ohx5uNnY86nDkLEVMQ46c27EiG",
  "key2": "54ZnUNK9FNo8K2QbELbqCRpN3WMZQvCYPcqTFegxjhC1h3zrfezDC7hsG1vDyuDgusd788XvNfXYoEWTAbHjDBWQ",
  "key3": "3WvcMgDxpVnnq9wbd8xC2FbAUjEzxvPhRakb7EpcdPjcpURYEctzJ27XGSdEsCLdEA1HpgegPFWLeQdG4WyjtHWq",
  "key4": "3JR6HuFxRZNZpqhwch7UDRjyet2o5kbVcdDQy6kyH9xycZVjzLQEEyKbwvbZ9WvNsKzGq8FcS9sGGxxvH4Y1eaCw",
  "key5": "3nstiQXB2h9wWwB6w7p5qWt7hjmAFWGjcQMTFvDa5e6TB3KHbi1CoxtZsDonDXEczq3xMEdnn14gtE6dhZEToZcA",
  "key6": "4rpH24eCsfc8AXW7cRsyyWTN9pJHGstauTGWJcVWF6388LEf2TyGbXC5kj5jr8pox5YM2YRX4wK2WTj32KFHhRYT",
  "key7": "PmWeXjY4wnpKExVzNkmKYTrqoZmXF3Bko4x1ZkqAeFhiV3XYmSBtFRMbK6PUnkJEQPBDLXE5BBt5fy7CUWqrFdB",
  "key8": "j2vAgiKWGxiPZb5FTNvRqbCo9T3V9ic3fhT7sxc1Z7EpL4UchqevUBVVApGga89iEbfzCrgcdcupv8o1FUkeosu",
  "key9": "4fcaQvqR5F5ugTXvvttY5JMA47o52V6wSK4ssovgy7SwApH7o4a2qrLkw8Tx9Yn8UXDjuPEx3AMJ4jABQ154oBj9",
  "key10": "4Syct7V75hZ5Md6MNCEKoP4BrJ3bJhaMitAVKdwuNN6RrRr8BaWzNpF6A9rQb8EQU7Uy5XdMX6g9V8qJS4mRH6M3",
  "key11": "6486W8qFqDxnoe7ERLMWC8C4LZx4jwRkQJMquQ3XgcdWf1XsRFaEcNs7B7nXGa1gfZo6ZENojTcvomgscUVNPjQ2",
  "key12": "4J3mqxCmpGjtyGED1GrR4TXsFcefPizbrqVPybrrwwdbWsUoyGkz8kzNinZ1hJ98cdGTdRw1WJVagnmeJgFXa2vQ",
  "key13": "3ARNjyfEuTpKJyHX27AXntWuE9A49PNzu52mRi2WXtBeSpvLQCTJcJJ4AmMcvmktyTdLewS98Q9rvWXGoDhtmD26",
  "key14": "2kHN5pEaC6ThQM6m82FgUcJyvaMhZsNTT9EL2rHeqgt7uwF39jfNNScarZt6Zisn5nipexpKp8EXtSc9oBcAcnGs",
  "key15": "4VN3e8a8HDiTANLW9cEPFSffjo5EfukiWoc9nzYZ48Y7EgA17YDpdBUzs2M1yMWzWN6nHhqqvoRs8B2Vw6yZwzLW",
  "key16": "5T1b7rrCYciR7XgAENJGaJ41bRabWAupATShAJ5fUGWmUrKsUTczbtYfpaTR7oMkLmjgdLFJuRP8KEhgL6bMgrgT",
  "key17": "4kkVMv3m5sMMYRaB8EvjsW55QbwXs7codeE2xGoTdjwawBBi25t68e3FDWTT91pXPgCNa5XZfbnFhpiKTRY9VJvq",
  "key18": "2bZJR9MhwBd11LG1wqYXo3tC172eEX9KxSGNgvhSKSkWM79oNtqp3M8y5VohJyxUfSDo9tJMFBYJosTHK66owzF4",
  "key19": "4kvq2dQ1FD4GBsqErpT3rigeA2GiMjzsTmPQcUHbWE5exoof1B1SAfMB6w95dbHYqMtgMoURhz8dzS36zCQQ8JhU",
  "key20": "C78Fpx9ZUF1AobGcdxvgkABijXvaDmkHQFgJ74QKv19mQcdofodjwVrGPHNKMtYMBA68wxFveczAnGp1WmwVayR",
  "key21": "66Xs5YpDJ9KXmsjj2jXABzvw2D7Vq4Th9dcnYxE7VEQ2vjioDvFtSBT8V39At99nYpLt8a4WGNX39aTTPdBdvmHZ",
  "key22": "2n1MzgYx6syxiq2D2Pu8PL7AXfvkbwZqaNjUgddf9RjDWxbmfjAJaiCRWsrcomsgMyYLJrjwk3H33rW8Z9oHrQej",
  "key23": "4y1qTCefi4iLq5yhwSJfrfJsrRcnmRHqKpChc2awrFAe7QcE529ise3NBhYPYTMAKutHwbwGLQ7gfHiSFf67MfqM",
  "key24": "5nf8ncd3wxqip16r2rVTvWA2Y22wmzmNqdHAitd8heixDqvaXztPCFSkn3pNqTUBbsRV1w6MEQh9A7rKQwSuKuRE",
  "key25": "3k6n3eiKxCcCp935DXzjKV41etZ7ebHZ4XAE1hyAmNJnTAGyPZTuxipxxBjCpEAZ6R1q9gK2iKXxSxhKi8fnowUz",
  "key26": "5N83AoW8RqE6f8EUjx9xpBeLstC4YeNET2JckJqd3k23tybgH6PtfRB3V5xsyqbNqs7A8S5TR1SADnveZuUuKPsu",
  "key27": "2LLUudv2FpjWgFzK34SVfDJZbcFpKg4rKYPQcRXCNzG4mEGQ2D8qWjMuGmKXxs46hZn7Ni8taC7QbBjnwcWgiFA4",
  "key28": "KVhQvbFVJf9dsagQ6fr8nRrh1FLC3p79EYnGRNvoRhNqVeoS8D53Eo5jvJjyb8GYWLM9HEtY8FHkVyXxkb8Qgo5",
  "key29": "2Wk4qwB3sjpAzN6A47bT7zgKZ2czrqCC1W4ePK8d5T1Q9FxySGk1ks7gCFKWFBevVXZJShY5shUYA8oUJfvPGu3P",
  "key30": "3J9RuVetFtEiaeVAs4pjY9xzP5uJ4bmn2bKCE6uxEFtGWAy1vvJUotooJLP9YFyuXBucFR2A3gUBxQyi9pmrcr7K",
  "key31": "5ydKQd9v9u8GGKWak7MuFqZ5vcVwpfU5y1zRwg5u4M5bKXJGB3x2dqY2XYtP1xDq59ZUd4411GmskpV5JEZb9Nti",
  "key32": "58vdfeCPyNpcjQ9SczUg2Pose21y33f7qYdh8YBHjUgY36V9nxsyfA6LADwMJFyoNZGAWpfGH5xcFQeMnGsKwQxD",
  "key33": "51AWvrMnuExL6G54siXM7GmAMs52bS2m8JxzcZKsg2JjFDWnk6TMxqwm6VK2WqSuJSq5yMHbB1MX9UtY4MD33CqK",
  "key34": "3iB3H2nas9LEJ2sw3Afs6fmWqTy5ABq7jbpviH1ZRkGmHnVX7nK8Y29W2cjPh93nxGb7pEVKZgf5qq97gHqg1cpD",
  "key35": "5god2qhiWp4DjDtJSUC7Ci3qHD4j9SQrSkuMC4XLiLq7hZeSKfmYPjBXPu9Gys34JtgMsbQfvSk6vmrp2nLrLxuR",
  "key36": "2syLujeKcau4D5AEkKP1Yd964vsyUndf4y46gCJ2zcZbKhwsYesxKhYAkZLZMw37Wr3zsnE5pFfeVin4oqM7uTyL",
  "key37": "3zvbHxRYBy7H1PrBViwTmKZvH4Mb56CgKQ1ZxsALTNJN9ktEME25HcfMfRZdc5S2KtJ9NPPYBvuyD7rH9Txgnppz",
  "key38": "3wbzN3rUzDYty9kKQrhEAcyV1r4FixxFWUvqiPVsA9vfmU5FNK3WBrVTuvHQ37r2gqEWfRkoSKDk4GZsmAQrKjgz",
  "key39": "bxBJrrDtS57fDuT5UTpNYmzEX6XVaK7CQqVaybArYzUZEeShA4gXabkbYyqMpPFcqc1C5tRBodULe8fyj21e3ip",
  "key40": "FVLFaYKjx5oCxvCKzc9LAZ1KuS1aBJ4HPV3jimerNdAcWBPYGeSEpfPbyqXkuCCjegfv4yeqo5tyAQ69g9cR62M",
  "key41": "5dRYx8MKhXftSDPWLAJb9ZLiRJftoc2Xtp1b8MjQ9nLijhABsGitZjrnDdjQyr4MJ2QfHPy53x2b4Rk45wkACWVN",
  "key42": "2skMsTWnWwK1WddZ7Cej8jJEwX6oyMKuBGahQQZmzfJxyCktXGbJtb8Jevu1r8dPcFfNXiXw34SbpfmCPi6F8fVv",
  "key43": "33B83wKaCjk48CfXdQtD42ibzBMa2w7Agfzft5kphiZm3Lm9LJ91zaisqVkb5XF4thHhTGij3oSoQzEu89gTyD3s",
  "key44": "4SfM33ppm7J4ZNWJfNXdm7vggEEG3agWkQx5jHrgYmXpkTe25YnvJeCPnCNWHxtYko8ayZsL5i1gUJGFUHfFUkRj",
  "key45": "3Th4Ttf4Zn3BGFGD29LHWraXsG9gmpbi9vBc92WSDwuzgSkFfWWum2pGr6j9DhXnxkVDDWZQFCz9vGhgEWwFB7nj",
  "key46": "2izVkDgJMscFTKcg6duwoqjZewMsc6Sxio1QYq7Qjt1pqfCLnECXd3WCkTibam7L8RuZJTP4FYTNYkK5dqMWbSmG",
  "key47": "5T3upVifk1i2XomP2PbQ6xEGhLUn4tKkAsnp1UZfK6SdkTDrNNGfMAz5tfkUY5r4K6o8su52VRx8fKHxqXjrVsuN",
  "key48": "4CWM6pscMVxexj4FQoqMko5Gb8pbAdbYjSk2WHTagte15raC49zTSx363z1bvUSSRQs2Z9kZEaUfu9LZnCmCgs19"
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
