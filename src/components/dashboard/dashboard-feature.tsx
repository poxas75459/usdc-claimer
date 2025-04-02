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
    "3mM3nZqgmLxhavULfwxdiZZwBfeWgcwd7ZRxpQ2wVrfFXaMN1zHA3ZBMuauJRuNQSg64g6UksJ63NzCAXy9MBAme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dWQZHAPvSzGYAvBiZWzphPdZ6xh8zQMV8r3TJZNWPVxKfHMN4gBxuFpVYtQvwUZyAF7XCwpNwHabDDdSuqNd9Tj",
  "key1": "4NEzR8rdMC1b2R25RwdCHqEHoGzpodiwpPhzonf1gmCuchThkshMeGkHFoqkj7iDkXpM3Z9QQKBkBUiajvd65PbG",
  "key2": "uENNqfrnrZbkirfGgDsTCWbcuSeFGygwxPkzTFDM94ZUniNcGFp598SRmx7Qd4g5De9Cx9gaBxYfp1DbpSBMnaw",
  "key3": "4FYYYs12NvVRwe927zwaJ3hemoH3h9xu8Wx7wc79P7J7J6NXvHTgSoGDki2nSh6Com4JRywHyiLfsem2pKRrRmNB",
  "key4": "3af6A5CCY9JVrsLefqdo8DZMfVVMY5sZue4K33sB69tTeQoKb6c8cRMBARejZ8tHWTwKZKcPiaK9KQhsbjB27w1L",
  "key5": "3Bf8JMTKnNWa5i9CmSsfeMmeUeMZQLj42TDQrF9P3NDtVHzSYjgRDPcLVBMJcDQrhKGethzx8j6cQgtPYRw7dVSa",
  "key6": "5poC4gowMCiVcXsE5vhbF8LL7A8dndWANCyiPYQZGUoBy73ZJg2qoF5VbrxGUS7bctqbUdGDSRvpbQo4V67Dio2m",
  "key7": "29rKnGAhWjdrXoDZSQLpEMbcc4JadGCzrWR1rX93rgeYy3ua3TeQi5NFY2vGPujJP9aSsXbU7n1woDe1bXpmMMM3",
  "key8": "eCvGYtZmq2uvmKekQhApSGCC9EPcXSsdsqrCPCSmz42bb92k22Pfpy2stNSaXaw5ecx8Nikr3mboJ79tPPEyLQ1",
  "key9": "5dz4zRbkXA5K4xuvsaJm7cvKNki98GkWQSUX4na7rbKaQDLPe9aEqhxJxKxfTkjhVL8XzJd7jjytbyRCNJBSRqPC",
  "key10": "4gEMCVAqTRwi5x6tZyQmj4Cm1DsCH6cMQa3bgwuTD2Pe4SAKTE4MK5HWJWwNunRtMx8W4FYQ2XUXkL9mpjE2Ed82",
  "key11": "4rD66rPAWrRnnfo6sKTadjMpjmP2bWsQcHmGcsiUwsRdZTT69Kdra7SZiQYhqJi437NnzmyQxZMAkGgKDyBqWhCv",
  "key12": "3vpzQjCMgmXv1G6d8j4skjA6Ad47PbtKjyhdCP4QX4L6suHN4vXqRcGNRZWSFUSyvQJyri2BxJsLbt9SivDaszF",
  "key13": "2JYMUMSwX3tzfLF6zyDECaC8tcu5R9mbm7DbDJ842i2qU3NiPxBMTXpVbu23hDp4zbWWrFsmujCDoaqXUE6993Up",
  "key14": "4C2cy3Gq4RA585MofJQNNC8t8YgUTUAd12QFQdbHYo6bHhDagv2gVifRyzCEsmoHgapnHuaNR7c5J1np24e9Sc5N",
  "key15": "3Cfk47QWUGAxaoAEXuTDQZQZV8Nx9pnVzU11viAFF27ibcipuJGnmhVYTFxAn7jEgCK2Sf9fDW1gHLeMvQALVUM6",
  "key16": "2jJGeZPGfLNJmW6GQNSQxAbgZUFwJTXxE8UqnKKsZZWedFS2iPtqcniRZL3sgaVCciqGYcg2Sd9o75ASJipwGdPq",
  "key17": "UDVXkfQXGmXMyN2oWErTKJoUkWPKxWbAsLvF6JWwLTJGtqYTorpxvrdti6xj3Y6asdmCfP9aqKXGb6TcqqVMV3C",
  "key18": "2U6qkaKreehh5H7GGqCT8nrjYsTMsevxESQC3X47fFijZhk9GVPUgweT9VQXgx6Vy3fgoiPsaD4jG1dWJ3m4U3mV",
  "key19": "JsvhbGJjAEGvqKWUCkucj2MH1QTB9xYAvHJk8LdFr3R3mjkw8sBzFXHnVz4rdnfQW7K32qsDoHNjrt8oo5WCjPN",
  "key20": "3uGZqoqspD5UgdNkMsLZjDv8KKvPZfbc2u1rknrUdwCnsoZgdon91Y6hmB9BKNiSd9TXJeD3MkCe9XexxJzKK3wV",
  "key21": "5uMUT6W7p9drjpBAtSFyk8nRVTwHfJNznYXKkykZrfUhev4AzrtAJFktkb2BdRMNrfrPJ3Fq8Ki4S1buTZt7eY9e",
  "key22": "5KZLYSC9mY7SgWLQ5rTwfnuF9vdXqQk8EtMv7GqRBNLp8cduEXKCMgfic5pUMbHVLmhvAy7eDo6w3CBjZjojH26r",
  "key23": "4MsctmubbhYjSfZpVvD1FyGRECUdXLknjUFnzzfGzX4wMS5z1QTW27E67527ZmMoC1121vzUYypMhBRfYWnpZc1s",
  "key24": "5gnkyLiFHTUvgWHDToHmcmZvz9RpwQJA1GrPKzW75VyRHcahpHYnt5x6gSaqcXQ2bZM8HgZUkEMCgaBQd5s4scjS",
  "key25": "5tioVNEG789C2gvZeyU2ji3SHmMtHncTDd7f2KyQ3JVSvVRgea4ZKg4XJbkPfvTbawnraVZk5gm2c4X1zvTeLVtd",
  "key26": "5yaWuiG1EecruZK7Ky59TBt1BTedxhVEdHXZ2QEWZGiDc5UotnQEDqUiUgxSBPiiy1fC2DPgvVtGAYHmr5tWHZTv",
  "key27": "5bkGH7d2FTkwPQ8ED85BNAXLBUqd4EhHdHWRS9dKUXjnd3RG8Udv3jzjaGpFkH9Ef3jvKEE9CaLeMNZ9jv6T7Ydq",
  "key28": "PLTeYFyFto49RpRotik6jR7tFKWnmHS8t192GGLdtDsBzftYu1JHrwdkiqgoURbEtjerpWWdPer2r3SScfxYCP1",
  "key29": "3aboDJxJZTT92GUAETbSUWBLDBdTgYKsStfvitiCuD2ZhaM19ZukPLoakfAPdyeBE7jwfH95fyA6mWXyFsUaSSux",
  "key30": "4x5ckUJ2vpw73LMTRoTWbwaEPXV6WiBEPLt4N9cFBvgHKE862d1WRBxXDTto4gP58vGshttwGLfR9Y5jhq2Z5u7r",
  "key31": "4EPq5B2PhTxkNq36q6tzUnEqzXXG9gm7K2cds3bpTpmQrjrrTLRuEKGZqi1LRHhz7k7aL8biTYVaNBjtZ12ms8oS",
  "key32": "5MBfUm34X9pRCcYLJtdugabnDFaWNNED34NZcT9AJdd8FzfkijGcfAXJstbvFPEHWdAtFqsKmfzP3hofVwdkyAU1",
  "key33": "456tW53kCGAi7KSjKp4Um7rmD13uUs5TSdGXZ1XX3H5MuuyzH7K6kxDFvGMPfL6vYBB2eFrAca7bAurZTThxX8Wb",
  "key34": "3qP1Bd7boRs4jNeDRkGFLjzVysRNkHy38bkebx4a9K2FbBhaYHtMStPTkmuX9Cydw5PY6mGbsjriv97HmbEXmu9J",
  "key35": "64upgsGpCfyhjr1neCTM1YzikRvRzAK2PQ7BPdkP5BTztTgk75jXYWyTQbBScmXABkYLFjYfC5mdRoAsReFGu9q4",
  "key36": "3XPghYGzcFf5h6QNf37kn2Z4sbu6oa3uwAYe9shqNozEY769jSkS9BNJCbFHtUkGn9gUe4crFmLqfWQ1ewpEGc1j",
  "key37": "2kdEeWmMxmmKihYdp7CWf83rPGrTi2KmL4bC2tj8j34c7fz7ioa2pPZkZkALpMah7MMYwtNuzxPcrQ3SqDZtLqJN",
  "key38": "5i7ER19b6v3KSgPWWwLb56YNfcWjYbUe1fM6tHLQErtbtGZQCt8FQJ8r3kxGBytCJVkNCvp2U7fPv8Yy3DFt1gbP",
  "key39": "3KaJ7wrGCbe78Jh6BH8WnCWogHeYA4iTyPVgZjS7uhgmSdVUkMzKktbjX9mRN8oqAHxNMsKd3b3wSsZwYxBRtQEL",
  "key40": "437MR7jsBJyVe2Quuu5Pds3BT2qXU3Jj3qHfydqBh1KRKurKvDBZfXdSdd4RFHCprUm9khNvA1iA51exyFeWJ5Yw",
  "key41": "5izwhSui1hqWt5SgZv8AeH5ox8RxRLkSrA17euvTcsDQi2QBz6mBDDtS1MAkihaixS9XC2U3CCu9eETmFgfmcQFX",
  "key42": "4ckgusn9bicHk81nqTRA7zKdrHSCrc2m4SKFnaS7xWMmWeGPPy8gm9icY7L7heL8YtQVZNxHK1sw4AoFK9VwhhGm",
  "key43": "5fhJzJCU6cydfro4gK2HrPUf417U1NU75iT6QTbYETLomH9pG8R9HCN3n7breAKYUPRAYpobt4Ed7Q2pufdGmcPr",
  "key44": "21cCeEAGFxjZesPQW3qxWwr8CiAh1Eg13DF8WKzhk7iHGou31cYvrN8GUyrpjiLASs52i8gi5kJX6xEBy4TXeLRY",
  "key45": "32pzU6DeA746gRjDgwLN9E8AHTrneNNo3wA8kQoq8LeSEJBWfnYEiAmqby2TR22LVB8jUZRaM8g3FtAy7XzZeA31",
  "key46": "4ij65AXLyKGbqnZo5JPidHhpsmzdMY6vAZW8EbtQHhHbSHRm4ALNYrLgauhUzrj8srYb3DnEB1HFLpyRxddKUasV",
  "key47": "P2Gh1P1UUz2PhkwZkwbXAuSYpYJ3L1j7EsfQ1LQoUxJ1S9s1unCErbC2HUXBcw22ZK942j5SLbuGPPr4Jg23J1b",
  "key48": "61punPVs85LK5jXhyrdKoA3Gy9VsNiwLW8ZE79Bo51RNW9Uz1hvJttqk3fSz1FURATENpN9qkoxdYjyDijd52MkJ",
  "key49": "3FMUYstDkQoR6hAns7CTBGKTQkrLfhVMQy5CVUv4ygiqMdNaySA2CpTKbwwp42QcUt8kXBj423ge3Mg4mnZGBhYr"
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
