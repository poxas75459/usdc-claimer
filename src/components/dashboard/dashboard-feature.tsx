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
    "5MTxxSBdLkFp6AFjxQSicGkPCBjxy4wKSUR41Zr8RmbsuFBjYKrCDq5QRARGS5X68e5HydV1j27mxaG6DBYCgEW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vi4XqwttAiiiYwrZVuPCkRBUcLZdVPi6zo9gceabMiwMRBoEQvGaan9DzoMaSekSmpgZd1rfWBxcEjtFoXCiirU",
  "key1": "3BBr9CsjcvmT3QrNW5eFtcCVBzzVwq8sTWCLfrWFGg9SnZXUgNBsN4YwFdpoqeJem3iHBAgspaKjBRXZvot33q6L",
  "key2": "62m5rW5UeNrfpXbY3dMgYy4ibGt66gVouJmp6VBcNvAxsjpfz7A52knr1P9ADQNz9Vam3wXq8J9mjFkTpU3Pj7zF",
  "key3": "LmFSwGUSxuRoXJr5hYLXk14xvfWA1MKAZdb6HccA5dSizGimfFjs5iNe5ro5NkCDNp1wamsGTi8wJVjgQHyf1LT",
  "key4": "5Kk5pjbQP2D59r2Jz4k6YAtKEuMX2yMxRs3rkb4xWw2RXvesZLGtPsKQoDJzhHXYtqZXYR5embvKcZ4MTJt7jE1L",
  "key5": "5JPDmbyzKBVcFfzBLgqvNWp2A4dkRXD7SdVnwT8CbRdr9BRHSRuEM4xDBjxEasM4nXGVRmC4ZSdJMTNwr253SMdD",
  "key6": "2w6iRajdJNqT96GgCRg7QTGzZSMh2LCVSuRquEAB664CPMQidgSCi2NMdF6bo18rpezUwf9nDTW5ot6AVQUkrc4g",
  "key7": "4N39RP3c9AE4W1gLC3nHZJQ1Zhp4rXmMGX2UnMX7n1TNeqG6HMFSYgaATe3ioX5Mx2U79uv1xrFDB9gdz9QyXD1x",
  "key8": "4Gf51F3vFaSw9kVEBhgdS68n7Q44d5gXwEcPAA9gXJEW6Uj8aTxaVEw3Doc6E1byBwqrip1vJeXNaGHJqcSrbxU8",
  "key9": "5UcEPXgTYtoJbaSKSPbuwfT9EvkFtQH1mfwQaUQyKTugAnGhNU1Uixx4hRWcRpa6AXxgtbA88oRPSm4f1S6L8ohs",
  "key10": "5yvkXi3kc63FYngJ4L1RjY2tnCEZo5XY9ANZMYfhpNhGBVfDSMvvYiFNKdCXHitpm6GFiHk8JYCvi5aScQ7CmUzT",
  "key11": "5YmFUouTxRNyE678mQV6JLUA18y44R7bjgvv88FSekQdqeWdeQdPc2kihYwPM8PzrsM5ZNM5T1qCbgmW7iLvF2WJ",
  "key12": "AY64q9Ax3i5R3EmH2r4mXNhD7rpkrEqXxLX22q1rkCW5Svb7gV81kAvkTsHbrtUMSv2YaNZEcRaVFajZmcY2R9w",
  "key13": "5Q6znD1p3bTnpQMSu37GonzyGGC8EXFJjmhdRowp5YfqrvGBaKF2hgp9gfAhkkanpgFcctJ4d2fLWdyrPgedhPry",
  "key14": "2MRZRk47LFCaDNouuoeKT4VGRcVf67FGmwXFixt1FTAWD6JHvvYcRn5f8KNnPgV2jJMaLrHEgcPFhyUUdLFKG9QM",
  "key15": "4iBUHwCnFX6gAtQmauVfFPHwWbkWzTuijLutVWMvL7Wn2BYS7LVDocbruhiuZW6QgUjVJ7YUnPQwWUuXxLGjF7aT",
  "key16": "4XpCHavdua7FmeqyzFgiQMaFoHpXM3GPNB3KgTozEgoGYMExF1Ae7GizEAqnMXX1hH43Hvv7hQN6LEgq6oU1KTrs",
  "key17": "4AnKN4i95uLh47i8QhtaEQaqSjdpy9dp9uLtz7aWjs2P8VQ4NL5DTMdKYN35mYjaSA93x24WqZLL8MQRJFcxPfH3",
  "key18": "4jaPb2AKsmcGCjNXkTJUJ6Gv81NEVMK52d233WyRvSMatvH4hCEs5FZQAvV6VwtqSAs34FUt5Gw61w1KwigGm4Jd",
  "key19": "3Gizu1c1aAaaQtX42jvK9yQi6XnxMa1Cq5sv7L58PefaTPvkJZ3ha1Ng89cfxD6S6rMNNipVTkUhJ66aFmzRYiP3",
  "key20": "61GLDzehidb62yghZUo8hF2VEuz5dSY8hM2x8jPt4KZ5eXkuypveGfBazdnBvx8oU2ZTZqAwoCYFKwt9d48Ux5KN",
  "key21": "36m4GrVMrjpZ7jPFtsPYLckXuvGSFyuwwLJmHmJgnUJyTqehCBgi8TUXHAHACuuXrYyit2F7LzsTycDhaDyzg6c1",
  "key22": "3ddeh1D6EyMVztL2D9fSbvpg5K9qA7Ju5pLkutpANxCpuw7YWhkGccTUZCWT5CMQhDcnSg46j9W3uLBKXAPHFfUk",
  "key23": "hWmaSoNY32WnBY3rSquExGgSz6vaDZsc3eKnGQ5U7pEANsK8z4WQiDbTioD2EEeXmRbYczs9ZZUTfrp9ZP5NwfU",
  "key24": "5jP2C6ez7KAvdhFXphPiFgG7bygv9s6exrNdE3EC4tkGeTwwNmFJEcm4ZhKCLy9fapBojGPD1KvEud3BXRCNm3uz",
  "key25": "5zi3oUE3GUpwMCp9LcjKcwtx7rqWyXw8ZUoD9cXfM1pkWCF4Vyqxsf6SVmXdqmH8GnKi29iPsA81kfQeB2pATARo",
  "key26": "2q3pLv2RY1uyKyVAF8rSYQvSdEq1z8Lhq3uxjGjjaEPEdoQu7mwxEZYvVbwvEXLDhF2NmVKKQuaYqHGgCiRjX4E3",
  "key27": "2aLgee4zU4RX6aLq7LuNFzQiJa65Xn7HiRtcP1marAEHi9CdKK6HixTcZ858GAfK2pEp4Hj4ifeGrGGd6AC5pf2o",
  "key28": "29rwC2kuKD8W1BEgzXokjhZczgWA9PqMb5SawwKaGpXT9dHX1EnGwz8JAVPbfemb7u5bn6aUYsZwFL34y9X7PzxW",
  "key29": "451qoP5AMSqfz8yYJTWVwA6D3mSc1uGGwqXvg9qTwoZSsyxWTUBaozGDGpSBUMLrvV3WaSyoUB99XZWikiWJwQx7",
  "key30": "4MTqGQDvqJwsAdiXd1u5C7m9i35LxGCyWNdv8TyttYCzdUy5FwUfTKkzL97zHBzHRUwBMKFZVsfBc8B4SXtkJi4r",
  "key31": "23hAz9KpJX2iuexqxh3LBewArKjRwVN7zGjSfwkAcsRYbhYu5c9sCowFGNDB7DoNZBadq8gUQzKppnLF79gFiaJS",
  "key32": "4qBRStwec4HpoGGx8LzGi31bgnsJAtgmoJr1ez3GbofN4N4toZi8ErbrUF6EkcSP5b65G9rt8oM3LwzWDdTJUbRy",
  "key33": "4mVbLHixAG7HtpYs6rQbgVGGmHdE3sF47epTVi3qNv43z5Nwg4aCZj7u9tavm4MYvfkR8dV5UaBwbyBy7Kp64kkC",
  "key34": "4FWLSZmJ9d1eTJG3h6KmtUsBiwgGcgKdcafiAbS16z1vpovX7wZEJjXozCG5mxT1tdPHr2QNmNGMVVFRREp2ZXDx",
  "key35": "457yV4ESP43U63EZmh2LJCd3eaKwZpsFwFPVa1MjHdUcQZ8BSeUuzsniawNTp7KYhfM1CHVzErap3u6si44uZhKL"
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
