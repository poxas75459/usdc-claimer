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
    "3XYNhmGzm6UHh1djjdgsw593h9fqwWiW8axgBS94rHwmKMkVLMcVon5NckPhoCpn7RWiaAQnKa2zr3SBZe9B3eGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FcgP7vvLAoneMfjhBxihwnFYxCwTXhhc6GKwgmbBU5D6uH8A7teBzLBGZLaaYF7C8CnnyHk9KSJvMgRMYP3vyLW",
  "key1": "kHnqd2hJEdYnZt9Q7pv2AGXCpxb3HQ8M9biVQ4fo8uHuAsHXSB7wHzxtjdYcuxBEdCFjskPsvbcxusSgtB69rzg",
  "key2": "4KSrshYESSeGMwPmMS1Yn5jbDboc5nsuCNmumeR4AwiKJeT2ta86mtcxLuXaADWX4vmZoJicgVDFUQNXEMZSHeSs",
  "key3": "2eUj7FhcLbUvuQzzqXy15bh5CKsaBzMJNXpWGPyHcTbFx6ASWCf5W2CfmF1f2SP6gN9rHHutodZhWmrddAktLqky",
  "key4": "3hQWM3bMyx59rPVTdCUgyRoJmJVvS7jGzoUxYjFrsT43hnPYoKSpDCBMbQfQqh4an7JczLZ6dR6x6aqiBWXVQpig",
  "key5": "XP58jjVFSc8YEwwXgUKUTAAvLwett68JopruG8fbV5hxcVLc9udgZXjiFk7kePpUhMWNFQSBiXM4sDH79UuF1fS",
  "key6": "4vmyiaeMo31UqsA592Xr4gsUokipepUnSp4isYaPCBEEyFFoQ4qWk3J81cd5gNdEiyHMwBNkEo7h9riwjHTK3XUN",
  "key7": "2qR3qo8Pe2SzMBRSQSgJBr4d1GW5Y6Ct1A546yFrRLsfvTLJEU1zahaYrdqKg4gB6thoeKk35bRQNfWkC5qUr7Ao",
  "key8": "3c2QweHW7DNnSF59K4ni813vNPajPdYQzHbJCDTSvN4Pf5nqbotRMFsqQWpfvYfJo6bv1mezBmQPK8d8m9R7VvkU",
  "key9": "34zrAKnk6LKdR1c7aokLiNrgaiHKk4cCSSGiGfqLznLAgpg8AhrKQYL14t4sZ17ntAvbiBFFsFdxuLzfwTGvgrai",
  "key10": "4wF5efQQGg8YHKigG6p2SwokaVskLBYNVbbL3gWQZ9D99BEkTubc8LwiskwjKyk4vTDngEjhEuDvY77ywneLxc7v",
  "key11": "26YTVke2qPktdjg3RM29Cddbp4eCic4DQfQDJF9BPXaUCtLoitBCmGzVMjbg2BcTEKQ2kGFhunrJPutwHfxW6tU4",
  "key12": "3cyB2eZNZgNKC9M3JUNbr6a1Yz8caB9VcyBijmb5YmTkdgkE3YeBVdnWv5qAVWVCvTWK3QCRWpbqgX1zmbZogdAY",
  "key13": "FhdusVs5CNHtCZGb6mWEYQb4TeVf4adCbAiKF5hy11VvvHXAVbiaWCsE3af7L6FfH4zQELSNTCkLzKQDRP5KTvq",
  "key14": "5fn9w8aGrLJ8SXpik4Ks4bFjuMwQMPWj7qEF4vFsJD719nmreE3W2cCGM5JpSXxqnHQ6gHZACzbHHf9GdgPc8aNs",
  "key15": "5R17ZuL8cXCjpE4yDU749faj7V3zXcGDfJZ3RVmSfE7coLNv5BZd4kdDBqtWyE4vQRP1rcNnFUnZKZfAFAuRLiF6",
  "key16": "66HPN6PmtACXqjGRv92ZAe84Wf92iUNJc9QJyabT779kN8SStADUP7HjgTCNh3oM6C4qMRvSoUgCMV67jHPic243",
  "key17": "66u5yio1WPWUrDkyZeRivyn8ZW9J6ZUbi1ns6du14RhWiyjYPpe9mJFY6zrXtWF449ssWzyFXyKCgypVrAc6cFZG",
  "key18": "33Z8yBK9CqoWSnqQs4pWtwSjAgTCEcpMw8x5uxFsbCoaQisDYF9YCG2JnBa19LjxYeiGy2n2NLieASVZ8129DpCX",
  "key19": "41AYzVzPxMg6DZ9GNthgzgH1UjZAuVytttWCMxNa7mTaUGhR5cWMYADxTbf2Li5K8fxMPp3Va6LDHiiNLiy2Vyet",
  "key20": "yV5aXu2Yj6fdVkHviK6HAipbCG5Mpqkujm3Lnb6YXodR1Yg3A6RhL7PreWyXiW2W9hqrq7qwFiwX1wWZot2BbbX",
  "key21": "2keqeJCzciXyE86q7qFaX8kpPqtVdrhNJNXxRHyZhsiPhodQLjvv8qupanVPv9gowUfVd68QA3CHEiaAJpiG3gPM",
  "key22": "33w5qwYbdAmA14UC1koJ5EMDwLZTGBDmjdPDQvd1mseeXfPH1DB1DWyRTToYtLs7rC8NQxViXy2VsYKgv7Utn1Pk",
  "key23": "27rQTLc5LP5fA25Es3TPXJBqzMRbpqDta4y9Rq4SFiq7T7AtmAPPC1s1RUTM7C91bVtRqbukokYtCR7GKYiTubBz",
  "key24": "4NfRum2DBWCVybLajoMDY7h2keAungPYNQZNU5StM3S4EWKeZtCJvQXUWBmr5eUPxWvDkgfwQEpeHUq8bwyGBV4x",
  "key25": "h2tw9gvkoWFUUfVViC96zgTdP4rLp1RofHJzHRWKMMxarPW5hcpjmGoWJZrCmARmswxSF97hbSDq1c1KFQTYZWc",
  "key26": "XQmuWYyUx5wNriJkfNoNUiAghZrf1u3imR9DKfWoBdK8AFP2TG7W4t2eHBkfaEX9hN6DFZeqyY85WrzGX61GFvg",
  "key27": "Qed5kcQ1PTtL3L2w7rykWWGsByZxbVYsjW8KA4HTQFQ4stf4HJR9T6Auq7RaaMW2uuSbHCnX5bm2vY551XydZFm",
  "key28": "2GC61XF7KDr2MHm3AhhWHe941C3JBbDTHnZH8EFuA29N33LWFtUeND5oRAh6M9FvdKDdmsVVWGdymwJV8MswecnP",
  "key29": "3CDUPJdyA3xvgfo9eMLh8asTwP5gD1xxWpLXa3dWSu6sxu67PNedJ1Zec1rvtxbGE8LyLceNZNsgcZnZoYSsr4Wu",
  "key30": "4e6zADjGy5eZiSZSquTSiXdkVV9D2jm1wTFf5nzp4sxoEwx7DjBnCWMBpjxdM7tENmykQtokbYhxuTQRKhFoYtbC",
  "key31": "4VjuLAZNSAFUUbaxxSG9iLF5APgzPoCMhJQPmtnrX58uyPdMEWppSaAXdSQ48BeMjzCtoziAbFVgGAT3vD89bAxn",
  "key32": "5XQZvjuurW4F5Ztv766VnX8xVY56CRHCcXcBQqz73SeDSFvfqKAnz455d3fHQrkzRjNcXxs5SjyiJUWi2A4ybcEt",
  "key33": "2tAwxbDjNxd9aG681uDACv15DY9fSuj3gzZvFtq2ijx3rF4AbWUZpuyFi9EpVNid3Lff4RF6TqVkD6CyMhpE7o6v",
  "key34": "XWn61sSQck9CZUdRueduvsp41tSUChFXVuoQGNvc3jLzwLuBGRgALaxfkRjtjHoS5myrHnYcGtHC1mzoS8dMyrY",
  "key35": "55AxSs5js75riXzTfg3udEjHvn4wSAsiqe5BHs6chBWkiQi2UxUg4JGLWoXWBde6ELsd9x4iBUsia6rEEJZz5PUe",
  "key36": "3YCuWj9Tvgxsvve6eMAzpTwDPNWK5gNGjQ5gsP7cqTCgsuJEXuUSFKK4hkiWhtmoVpHnxHTai4wnQPmCHKcAFbAg"
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
