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
    "2B7BReeYExDEp4puYUhLUCK2EGu68NhdSaGG5RLu8cSuz81w89sxF4EgBstTdPL8mY8Y36nfDPCGsVRbXAwyvper"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d2VM1dSitVgcYCRVxmPZ24CY8W2MVVrA8BEEguRPaGndzpN2nBVR6ifZ5Wijbt6scuG1jKxspqCgK6vSS2oCh8k",
  "key1": "5jTgWqm67T2ZCPgqumSe5UUNeckJE5QvqaXCU6GJqrKJ1Q4tM8DVDTu3Sew7wpe6UMyKPK837Wuk2H6ZkJKNG44t",
  "key2": "4sMnz1tpRCWT7aAEwyqQXZj6CAzz68b1FwaexDu5EjCwzmkRyuEFGoYuk1cMgdEdDtSNhryh3QjcQaSuQUTF4U67",
  "key3": "5mkNrWLcBfJhvAnmmkorKGLXKoE6JNHaR4DvsVsJ9rbGTPwM17X3jRLSea8jf6PmzgRG5e2fXqH4hMyuxRMFRYts",
  "key4": "61XMoFQgqhchkXkVULc9kYGyN5gZSMpC3UyLGceXPxX4RubNebHhqS6x2tBQhhjEDwKygvPvkQeazcjB8dWyT7Wa",
  "key5": "2yVjUYGk67VuaYDfqRJVmF5odGPgoL4GN4SfpsKrwgGogjBSTf5BBn9U1awCRwKfzQpgA2mpANFBK16JuxHEAzfs",
  "key6": "53phGr6fpinoTXQTjeohJ2EyreMpSMENYn2fBceocYbdRfsb6v9S8cCzMJTZGaSuqd4pbnWtJpmTLHLSp1SzHdHW",
  "key7": "ZnU4NQMHpvEsKWjp4UrqqMRQ6bpTLNJQ7y9Z1aSzRXENSPo14Skv8iXzEBmUYcEK7vnqP36yLZEMXVtCjqm3LRf",
  "key8": "65xQXQrdtLeHhaGn6Hi4ByZAj3R1R8QEX5rZLwSJamBAvgrg2bTepaMntJrrD8jrpRXXgofFBJCgPkaYCwaaTtSx",
  "key9": "3wPAqgD24Mggxerb2z84aMdhh8iS9nbCzu9Ru3VyzUne2KguSaGtQtBmWncj5X5dHzQFazMPWjuUD1zcZdfqRDXx",
  "key10": "31xPvKuKqiS5Zr2Qpw7V3yuF2uWreG7wJ6aAD1an79rAn93UANAhBkKf44JwF92PxR2FFwyXcYdpWjCf1Jr8VEQv",
  "key11": "ruEdVAZjqSBqNeEg4G8yDqqjNtGrTmL8VHDgFc1wgMNwgtFdFUiQaQQE8Dsv3WtAqxPvkTJqEXUMbf3ydntumEp",
  "key12": "4cFnUShpuwmkWEYs4zGdNFyAgiuuqvyAN4cCqV4mHZVijbMS8uZWtMvU44iRLoMU44w2y9NifU7QJuztDDeU28YZ",
  "key13": "5a1NW2etR2f8rekRNNXMoXTiyxAgscUKcqnKZf1Uzy9zbqwaRf5hsdeL3LjvhGvtTcpR7kcvVed6Wgd3CUw8EbZE",
  "key14": "2DqPuteARxpYoaYBhEYHyMawMpL1tyCPXPzBHK3Ca9Xc4ssEgAngqGVrEY1S51X7Dp7kUyiEYejg9XRmq2KDdK83",
  "key15": "45c73B235MtpgCSXd2sqbMtcyMkoYBw8vaKk62wzUMbV1yNMiuAwW9ZA4cUfgmrZMT75yUdifcbdXEZDbfLhsbJm",
  "key16": "2nWxbRs96NBHCzm3it33PZgaiWfCcsBs3BquavoK91vfg74n5SwBUbHMeAFBYNcmTfqZt7vSSXffaGzZzfCZ4wBJ",
  "key17": "2aFJNUXjafdhGuXoaScX7mEDv7xGRM8MfoLrLDn7N8Bp6JXkqDLZnKNLFBCHoTKukPRd8YvTn1YzScGvqbtrBrWP",
  "key18": "5BRfr7SQCnkBGzp1Xm7WruWPJxFrdYbLVkcfbHrVaFzdkLZU2KHNszyqT6CLT5cSZhnzBGi927gKsSWV9iwpN6Dr",
  "key19": "5n1AHQ8jmCPMUnzBoQwqJC9kQD532T9dh4cWcKUn84Wbw2SqMcBCkKKXcMKkSH3jKceYXDdspzEULWWr2qgSVDri",
  "key20": "4rX4hvG7esmKxd61nq9wSrnGNx18Ji1BHw9T3VAGAryBt5tGut31NJLAcLj8SSgSm94WNH4QmMxTUkFHZ9Tmo7Gi",
  "key21": "66qBijX4H2a9ytikAc1ezofdgZmZgBrZV1eaqLF9x3EvaiiT9nYSoRfh4jWSbY7cLYVYqc6RS4YUtrJW7w35azxC",
  "key22": "47qgLvW3yBjjLsQhqF2SvJsmUL2EKC1PiYALz6KmNoPemmZ5Yj8DPmq8wXGqXbNKC7V1z2wqJzgUKuZUrfoUePWa",
  "key23": "5pbfqkRUgqiPdkh1czEj4rXJ8NTPwFKmeYnch3T7jVPntVHhNhM5LCWrxNYcLu6AwEqmtyvmhdZ6kdCCoxjNB8mK",
  "key24": "4oJUZikXiKHzNfQqjWhiKcYSnjtjtR6iuS3vezXvAoGa8mJehZY9bK6yCgJvduA5w9QMKcsfUmRt5Wp3ov3eB97G",
  "key25": "SNX3zs1fRwq9qjZ5XY7sKtwUdyPhXBLqJ5UcUDb3YJV7XV1RuAj8ZK398SnCHUbXjF4v449nkjYJ5Uo3TYRU8vS",
  "key26": "3NgFPifTBUww5MC9bKVZeAreBS8sXusdoZJLcVkbP85fjHCNDzQ7NTjB7EjqcdnkmLm36hXQ8ZfZJBYu62weqCm",
  "key27": "3HTat5mpH4UcrXS1RYWD3bwhtsryqoTEnRJq6TAgDzzquAyJipWsXWvDXyRozmjt9aNjAmAz9R9TS32cdCTdTsE9",
  "key28": "2rsrcxk5ujw5zS7xfmPsd18NNgbYSiRg95VH37nn3kKfhKLYn3Lc7buFbjDXYU34zEHuqZguSt8DczAYrADV2Xu2",
  "key29": "5LgDwJV8ityg6PCxdFwMCWjzamfRp9DpW58F6TmxZmDfPNADEtBBc6hM4Hi5ajHEJ7jxfgtqJndkScAtsZGpe5uf",
  "key30": "k9EELVBGVjf1y2oX92hepSbonYShehCJ8vqxgtp6sLNDLV2erBy41hJy81bVavhYvM9wGRiF6jLhxkQrNGki7dM",
  "key31": "38m3bejR9DrZP5Z8gHbNbu3MESasdwZ3sL8ciVGozVv76tnMFH2RFh2NE3CVtZ5dqm1xEBNCGfVfDsJY4RdydaAn",
  "key32": "5dLHH3EDCXZVd88Nuh8tmkSschhmHLYjC84Jrsc6x5GvMSqn3MxhjkN8VJwtjc1gp1LhGrRiTuVhdGsDkK3yaTBo",
  "key33": "pgcPbmNKL8yfCZuv3Vpz1wP89aH9JSTMQqSp76Em6eML8jbnwhLVkojDJRCq4RuMMG5Prn9auQjz31zDjAJYWrD",
  "key34": "4b97cFHChhiQ1Az5zSgafSTtnyLPLLfskZ4rpXRa8mAmfK79iXemQXpfhUvfDCTUB4aNPf5F4cUfgd8cYuUWsCUC",
  "key35": "2qFaW9c6up9g64SyP3Ymbix4mmamij2M5rdjcaNpDCWndAogiCoMZEEQDMGWn5G7FN5jLtZKa5iEYZBHGY17jUDq",
  "key36": "3RtPQgxraDi7YEjs8K6UG2xtHtj4kmLzxPVc5yeWC7Qn3mZnEyMsdZXhY5sdbotsu3kvLSWG41wVaJmdVwrL2xRz",
  "key37": "4KCyepxZxdaS4Dhyk8215RgMBVPnAfKBd7WwwRQg5cmrdSScjRKwHPghXy8j1hrnjjDEArL6wrcmfTsVaNPwQxNN",
  "key38": "4kp7ic9fevDMs29gHJfKd3yoKF6PhsuHnfHVmCqBLn3wcJpUrvVEav5Q5LTTnjm2wnq5MMDFvssF5qLQxJCPFs2A",
  "key39": "21CSfdCboHWMrXmVgwdCmENnxqbUfrraGCkvWS4cfrSdppPtivqhRZjos81TDG2LTnk3JuVsJDhHyfM59t6Wb6ap",
  "key40": "8xqQmtYcZHnjEWKpxhaBBwejgwckEWt1vAcj2GYN7edcBvjS2Ys7XeycxMf36zayGHtkA1NGtQjWHThS44XWJsd",
  "key41": "BgtTZLm2p9TzdfjbkTKFeZMWYzAYryGAVkscf3LDztuih77iDnX6qRaoQDhmDkg9CsUpxswdFh3EW2asdnDY2Mh",
  "key42": "4d2xtVoQ5423tDUc8FuMPGZQCcfzwBJt8Cye1Cfgf2QKYUMHwcNzDWk5KTPwUiPWvEvEnDHpJE92wwXrs815qh1F",
  "key43": "5XZHEfKSRT9jC3fXVgZzGANNCQ1Lz6HpxkyRJViaxs8JFhb8jWn4FYDkgoxy8hHLAmVjAWA1pfCnkrk9qNXF7mFz",
  "key44": "3Nzboz87YHT2AYsKf1F5YREVRNZQbTXxcEAGAK1ZRXvTSEL2hKRdS1vKK3D9MG8s4P9LFvETemVLQ5DTE9VbAtYP",
  "key45": "4LDJV5H1yTjRMRQ1ppwuMb5d7eBvHnrhqsG4xvRRTXXkf7c9bH8omG73Ry34nQDaor8DoMYLgZLY6NngKvB5Twk3",
  "key46": "3EYsTMKuUFiWiiVSXZizsqYPLfpJv95TSwdgNGwRkJb518fY5qTpcCbD2khinpizfR91GHXnfRxvqcgXVzPwgfQC",
  "key47": "2gfEZ4Kh6tLrhc893uDoYGDgxFXwpE6ceguCBmVBrRzgF8HpBJJ647LxUDLHFqpSAt79mKiNUASbD7TLSe3FhKv4",
  "key48": "44nUZ6wJGepfkHZVntCXwQ8jWgs11M4YNUTjPjGgXWEb7cUchBFJHhNeFg3n4CtXZ4qn2U7igCrAn6yiQkrZT7bT",
  "key49": "2x8kbsSQBhw85S7MBuCjFeXdvFtMcwx866Pa6Det9N9mHN2Cobehj6AoZGfFzrGhQ9nhJVSRZsr9xamzN7syeEv7"
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
