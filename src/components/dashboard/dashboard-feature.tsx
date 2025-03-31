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
    "W2x6H3AEZKVG64x1wSXkRheK9my6tr7k3rfvnBFvDKLoYv9ssqkcNr1bBHYJ8sVyRhi2G4Ka8ctjUfAfj2dXawn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DPUGLgjhSWv7P4PT4oRqNV8wX1YpFpgi4HY7miXU1JuQfYQg9sjzU8H8sVLzS3JMo8PquP3GZ86877UbjY31vGv",
  "key1": "aTXZzN1yLV3du4VzXDFmMWSzapXMJMuUziEfsNfq78jBubaGuRBYQF7a2uh6xobKfhpbShRKC98XdULJ5hZnLyF",
  "key2": "4oaZK38Kx9EpcabBWoXTJTjQct7dEoroYr1fTeg3DGfB7j4DA7vyj8oBoc4e28ZnjF4QSihvfkEFgig6hhxEB6b5",
  "key3": "4GFzjJGnKLmezDapohL6nyvqMNbSik7j8rGDDorJwubTEvjuifttC4fsmegf1kAbAeQmD9zNYp16FezRFM46ovC8",
  "key4": "2e9Jjw6m3ocYuSMeVUDFXEfShAio7NTr8P4eyXkdvwHBsUbx5YM3rpbetJAnKYTF3rQ4C2pkNJFKLskt456tdYxW",
  "key5": "24SbnRLAR9hyicoQRQ86mRAWR9UmCf6yH6KYbQYvRrUVYZfC1pTrTZPqCpLz5YnFJHqLSX7Z9LtRR8eBcV6tzCCx",
  "key6": "y3phhhARdEqt9XNS5A2Y6FVyyW4GkxDr532nJHDNRFFfGjaRjUYgAPS6mYXie3As9Mq15NGeqgt7kLNM3TAidLM",
  "key7": "3WfSCg6wnzZNmacxxmKZB9P5eUc3t5RyBra3aM9ci7eLp1BFYuTe2EEh5eiePJpycuAP6EuMcvWaRzD4vk6v4Xj6",
  "key8": "3sNKkfoa1zwwqgCwwDTGTWk2ztZZBc1SBv9G5BXziHtVkTnppmbZMTTDBP7XKp5K67cvGq2zx3r7if18NCuwJwLZ",
  "key9": "4QoARZEMq4NgRnusJjywWYQuWYBMomuzVtpjHN9AjnuWsqeqDW5LQLmrAELjZCNQEaf1zPbDKd5cFUwNKcHAdsau",
  "key10": "3MVkTCMrYwL53FTjUgn1hFAtUvSt7fErBk33ScJkUUSB7DhCsk1REdMhiJe8gFJjaxeEpDcAc4aRjYMMA7LgBvM6",
  "key11": "3j9LNvrTHyan9CfexP3t6r1nv5dhFwNxQ523E3ko6gTfwDDehGazRNw7v5ArobMxHYbtriwTjUL5qhXNftEopQxo",
  "key12": "3iKkqQFrFGS8eUWo3dPYkNznpBZArBwbGbJMuhLNWsz4jpydh5HtVgUz62pbqve3rbYa1dze59TzwAchiTdQpQyq",
  "key13": "42QqYRMjyY7gYidC769VxGES2op8yZLK3eDTJDbifmgob457CZcJSk95fALEXrJSRp9A16VXbpGaZynfcaHhFKYE",
  "key14": "1299w4XMxsb6a4j2LgayUT5XfBrJvbpV7ew2anzE1vuL1S6zj3WvvmT3e7B7d9tNYymkuFRsMAqcakgapNfbP3db",
  "key15": "2k2LZBtYSHMYJqTcGgzbzRGubnudFmh6GJP1gzwhd4oE1VeZSDhx497s9jviE79AumwReGMHZJvVChk45KuJQCHV",
  "key16": "2TBT8fAGnU5sA7K83TrLstHAg54jxrSRGV1AxxqfST11ojkaoyXtTZnAmMmx5hTGCj1Q3141L7QHGsfgGXup2WuP",
  "key17": "24bj1tZbECGmUTZwNTkAj5HdbdwTi23ABXLM3bShX3DFLpfpYJBFfAbH5boE5eLvvoVuxCPHnsXyjKiM5HSjgPam",
  "key18": "5EVo3BMTU91VuPBEzfq9ZH1Yu8y6amiJDMa9PWCWmcV2ia661sxKpifBqXZMm9tmGHMySYyz6ByhyZd8Pqr51XVh",
  "key19": "3fpTh93JEDybohCKVvSbffmhWQpg4Hs1bpwm5kJ5ZxoHM4EKzgiJVVmdjVBAjoxqVnsWGup4wqgSQPi3NRrqoDdV",
  "key20": "f6zaQj759VsU8qfSezi83ybRpMpRrB91E5JfeEpFgZawrMHV5ZqKHWGrB4btFZM55iHMpPY2KKTzFUW8V6AuzZb",
  "key21": "3ADVGupih7MXjWrJrYiQ4HYW3R3gLnyEWFDQdT1jNdVhjgT3hac31kuMFYEryvAXvRmr7myFRXJKiQ5CSyPgVjcM",
  "key22": "4BsEfUqbv2iXaFRTNmNc8E3Y1B3hP6fMU7JEWcumdV1yD4k8CiqhUJzRKSahd8J48X3TdhGXNj4MwNWX4TwU5sGv",
  "key23": "4Uvm5ZxYAMSUXroTcLAJED8D3ZuAeffszPRCTouamRkuZUN5hUHkgC5XPDGSHCrk2HNP6LD4bn9aEBooNWar2W5K",
  "key24": "3q75uNB2WKJR3aihb3mKaBak8MYACycNb5wK4dh1KSHPThG9J7Ycup7coQTLbCJ2kNshh1fczx8oeby41TcRLo4s",
  "key25": "26Y9pngwomDyuuZmhMidHm1nASLdydpGpJK8sXVDKgRNcj1JRUakUduZ7nkMwM7RxRp7xBKoSA4oJBoN2zHZQSjY",
  "key26": "2MdJqxD2DHw9G7zEPrnReGrSBgwJJQuk7NCSZfxnVnp73SvfxvFDmTnKJHkfC4d1r3DQnkPnt4gULHgnQWU9sffQ",
  "key27": "3tzmcAzHbcYaaekwzuy1sMCkCVC37uUoCeiNyqV8ufmembciuS81EMnBFurwGNicBoAs4dTjxbBVjaz4gafQVSat",
  "key28": "3nDsbBXFFGxfeSfKh3oDQEiY2zEcdi2Q8jWLhuVMLBwa6wLmJoTxEYCxgWCAZtsN8kX3mZDSmL61o2vCMfycK64X",
  "key29": "2d6z7k4Q13LPVCCsEBzyWJpk79ft8N7oxcGPQCDXMJxtB8Wmk3qnUgXu4dnkY3UcnLnZVRgB5N9Gi5ZzCN9Fvfz8",
  "key30": "4B9SFeuttaP46ruEhDYtSddZtiwCx6EeNdUr79UA1Ujwue8BYqtRB1AUBgSXtfE8eeiwqQry1DMeWqZV4QD6fHSg",
  "key31": "54imNez4WE2EkJBhfDbuwVT6s1K6wrdEzPaBNh9ziSLbzbrzvXTMxkVER664gdxfQDzWHQ5Wsk7XxpbktFRKje7",
  "key32": "5oKcHBn7Y7xQ7rzLQiskwp9JF8vRxkFBcUwVTq9Sd3pZbU5BQXyqFyjmsQDBT6Avsb2QXBdeYECGLVtd7Qy3KzZk",
  "key33": "59nqxGJsz6nvSr9HQrqm1zzFyxFF41yphSP4QHP28aK7GbJpb92JGckF2ufJnmK25h9vCLoN2nurJahXxKu8WoEt",
  "key34": "2heS9wrdnTqiB1oRGSKT9PJnhYPYvorazE2iJKMNGhEPM5CGyRQmG3YSqfL22MeMiJK2f5W51E4yuJzHoRT6zR46",
  "key35": "aQammZAMdgem8SSzsALzWvfmtfkoptWDs8oAxr2eC8rUpEJFiLGM3DiG3w6HGd2cZRP7M14JnYzmJDarLNM8QV8",
  "key36": "51qXWcnoK66VKZwkhtsBT57gTcj9BLexrWJgXonFpq7Tu2cwtMR9s65DZdsMoJH8mvV5Ss3N7L8KptXs3V5cRZ4L",
  "key37": "53Mcsuec6WGwS19pgRPauoPjCcE5kJbEzYbKVWf66eiG7PABhn7LjnLWpfUT6kAhCWMDVbP3FXb2gBh2YciK6VoR",
  "key38": "4XSvMMah1gC4wtm5nHeiCwn8PpjXbtJ73miSkib9ZthCsZbRdNwQQbHj2FbquqNUzpKyCGrhbRP8pLcav3SihkVG",
  "key39": "3wNd68WCgKrXghB4zeXqmntqXLAM5YuMLZKrF3QJwbFBWBN7jRBMHEGQ6iREV9MD8p3tjBqRFhe3umDkYFb5XEr1",
  "key40": "3sPB6ghyeXycqspaM58rhc7UMCCwndFZaR3wc8sxpu89yyKF8cLcsgZzpfPag7EbYhusfxaYSCBsWATyEeVZzKXg"
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
