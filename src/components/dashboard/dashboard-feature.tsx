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
    "cecSB4ecgTQK3dGKB4aLVFrS1k6ekLrNpgM8R9Ett5PAComnPqbRKWBjnyNqn3sBGcEPwLxBgr9FyafDLnfqXb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HMH7msq1ivr2UBbVMX1FMNUhFpRPsV52RLkJBs1mh8r33TTZusyt4kGjNts7y7bUuzNoFoo9gzSUw6ZZTveMNXU",
  "key1": "2cgyPyNwTuDjRxyj5uGWuSHVXMpRPwcD9xBLjQDAtBQoq5YXg1jJPMJ6wnjm6vvPoxy2y2NeZtZC1BdUSnSxi2DT",
  "key2": "3UqFwRoiWYBt8j3N4LfuLgLcPtfTmqkZ6WA6TL12kMv1WWsnkhHLRfnMqPsBA9M9PRtG9wuy7FV6QNuxsRsDvL8p",
  "key3": "4dmj2KcMhGnmj921b9vkw4mEwD93c5wiywrMknQDv6qnih6FF6E687WfdebLqfsB6F6U8iR3m5RpvDiyg7KQ3gV1",
  "key4": "426mhLfJ1ygATdFW3Xqypd5pqBJTTKsqWrHN88HvdbkWVaiYXa3m3o7yQxN3CHDL9twFmJKDhj4HEt7QkC8t2D9a",
  "key5": "5HK5fuNcGk4p4N3bHzFymZtdR3piq6bJiTaCvZY4VzmYBEquRsQ1DbyMsGRkPCGFjfN6YwkLihvcEH31cHzCQ7af",
  "key6": "2rc3wa8K6r5TTVm2uRJn2YXLFtQ7ZNGvCuLWCn1JTiyUDK2reeJ2wtHtXWm3CsfYURkaMTJ25SQjpxUshN8iYXBZ",
  "key7": "sdKbE4Ryr94TJCHzCoNUJtv9Eds8cLpBmUnPtT1WDshuNwmncHio57Svgcpdgnh1DaYWU9nyNGxqR7BQvhMsUHv",
  "key8": "yPL2KvtdqcNJ4LqU3fk5hjPtZXtpCpeX56a6vufx51n5CUQP6tT2T722pJWnQYswPFxL4myFDWATkrBfQUyDTs3",
  "key9": "44kLY5gKMgLY8zW7ohE1NZBT4z3R34u3eL8eTUhXHcN1oY6yrWnChadJUhvJbk8Bq8YfdAB5AhkBe55scP4EC8De",
  "key10": "439KC8KRpJUaqiYHgeUH7ie6DPbtZbSrgjkaVuDNP2ibxhhh1xMjJ7sWJmYEG552w7sYhsvYgixsBW6k88rAuipY",
  "key11": "4HhKXMY2K2bbWf43ijf4JUCPoWaHUfoYC2daWnSkhg1fhcuwBJfaFAPEhZ4YBY268cXfB8VMEydXcbEYBBVG8xbM",
  "key12": "5LuJWK1oDZnDpvPAumg3WEhWm3BxRZhLBTV2SzgosPLNdjb641NZ5uMqoza7zAqCxGsL8hRQc1SP447Wx4xw8dkZ",
  "key13": "5V8cMhLNxvDbB2jX6MgJEMqJ2itE8mFXkC1VHJHNFUoJd82pK4qLjY4idqmmfTvvFuyrdze2xMfkXzGX9oY7QUzS",
  "key14": "2MAqXwqkh1YqwjgxfiGcP7wwbGn8MskYYshza4bnbBk68sSKFhhLNqzpNHTQSwf1WddvcgQgUwYY4J5LGXGQjgHg",
  "key15": "36QMiaBCWyAv2q65e9asWjPY1qxTLdDvKAbif95QmPtMyMzeAsc7b2BZvwKMSHpJZqHPpQK3tiSXrqzWst6Z9uY5",
  "key16": "2tuBhYoCL7uyZSpS52wFkK9xXEc4hqVDzS7m4z1qUWcieD1xH3oMLYBqAXwHZYaoFsVP5URLCc8hohuTU52MXuQC",
  "key17": "2Pjbz7yaVbj3cbt3RHxvXwDKufem4Cp7WdqvD3L1AVQGhDDGGgXhiBsJ2bEvJFTuGjkuZZZKyuPDqrGWRP4tQ6tV",
  "key18": "4w6dJBrrG4ZuKu9c9KJM1ZFz3SGH2JnyT2yQxAEkf83mEXLcSuXs8WjYLJiaLP7txi8o2LPk17rX2S8SfWxkZC85",
  "key19": "4SbYsHpA4fmaH4kZeMm3jcYyjLmcroXM8m495BFS8BdHipDHFH84zfGSsasaq3TpPfUobi55e16grbVSakPHZYPZ",
  "key20": "5moWcgoDx11f6qGBJxpmgtr2t8YRTGqUo1QSpvA29HgNby3TeReZBPfbNfh1i5YT85zdidGffcCxgXzahmX9s5rs",
  "key21": "2mHppRuWH6uHx9oSkWCRQ2pHjyv9z2QGF3hhYkRy3orw9qNLthwBruKvXo4jPUQerLsJsjszEs3ogHinuvR6J46D",
  "key22": "iYaphJVpCckWB5na3NPvUjPFxAZsVMXfCHZ6GDn96ULVqnsvCzRRoejZtyfB6ND2tA2NWMRbw8ZVzykmHujafgQ",
  "key23": "55wUuJKxteMbY2phiiohVCxchmCt9muF1qg8fsnRYYcGHa5j9cmgxRNW8kuGBDBuD83uAhgNGs7Xj5o3tmoLT9me",
  "key24": "5ZveVgf5EFcP2svnS4ysv58neo5PBhB7HAGb4DsQGpSirAELHrAnv48in7Yvuyp86uF9CU9jVRKPQpyXfZ5ramZJ",
  "key25": "hBuZCLX9TUjXt5fQaP8UvUT1KFsfembEi5EPgsCG1Wp7hTM9bpKPkG9ZV9aQbmcUGvdbebT7oFrQmSNtK81Kbiy",
  "key26": "2Q6AfdRDsVV5xjRhhwAxuwALyKGvV7VAJoE7QTRimECsvo3SsLNvAn84tSXvAcfZxyQWNK57kahJEMiztuHpYBcK",
  "key27": "4PpeuQ5np9sNw7E2jQWEeiPiCvbkmCghLbPQN6ncZarn3tv2j3ktsEcYh9ZFUFyfeMxHh9uH2h2t5zzHvphFZQfB",
  "key28": "2nDFopFYFpJ1RYPS9CCoWJce2NFM9RDnxEELNHvGomFnW7vU8VMeUM5CGmNXUb4zfXSh9m8NY97UcaSdipfnqoez"
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
