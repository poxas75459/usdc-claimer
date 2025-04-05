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
    "kjYuKGRkvZ71d67ob3MksqDMMMg8xaDM6uVzwK9jrQ9X2CocNZp6MTKRqk7pScb8iqfhzEtpG7gAhD7iZDiDTqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27vcLPBQfGZXadPNdjr7jN1HvqXyYdVGsJgKiTLXUZYFSjYQMDLxQg5AAiLaZ7PaQcuJTgvPryf4GkNMZYVLSFU3",
  "key1": "3Kzu1xdH29m39H3Xbe69EK5vrwdttf7zSsJwQqm3TiYxr5RZE5i6khHYcZ8KMLCfUr16LbDapC8c5vp1SDawGQf4",
  "key2": "WPtCdyJTSD2GBbi1Jg91MxFjsfepFo3j2MWPyuFpMFZBJMgHzMwXA2rsEFcXcvxXS8UF58ujH15wawehWUz7a3W",
  "key3": "3whuDQQ6R1UGpSWiq9RZ8eUpoyACGyw5Xy1FKMaJ9wzD8QK9KCFKjJKWKALAADcS5PccsKjz8TJRyzVvy9LWpCqc",
  "key4": "54ExLYp11nLKjsXPrNm6Ek9Cq4oHwbmvkR5eCDtyNRxK9G6JWVYXsN4BzkEiFeqx3eMXiNspza4L2V2VjGMgozUT",
  "key5": "22wRHfXUkU38rZCi1PvqMQ94PMsGdTmH9KWEahaL8Zm8GEVQcCFUPoQkHE3WnM4VyukxQDw6njtvfFUcdiVbXsgG",
  "key6": "2gkAv4p4ow5efzABCZY1ZQZF89JRRQEsdsMimofSDKwATTVtN5vMkndYVYqPhEJGcp2z49CQz5vcVqVavRHmiGpP",
  "key7": "27sr91GSFbvu4wGpcMwej6rXpCZdFMme1h5jSqQvy3EYqhoa9AqRjK7YpUijeRrsCnqfPaLawcDLi7dWfJWZhbPb",
  "key8": "5z4SE4DmJHwgNdvrCbxCAbyoVhbTW76hyyahagmNo2YdgWRTzMe4rUYoCYS2BrWBAaDyf8qGT18Np4AHBeHrPmHZ",
  "key9": "ZrySAre9b9UxkpfofNFAYApQcx3PBBx9jJZ82gFj8ibZsiJpC8fZJiNDE8zMnSfRHiAfDHX3VjWUHhwGVuSv6gm",
  "key10": "4LEPfyWt1hvmJs6GFZo5NvKCAqasswyCYWNMRidxWAwjfFzNkAFxunBHL265MLF8MpFHWf5ZikJS16u4zQC14fgZ",
  "key11": "5dqPW47bJxEfthy9kpcoPgCmc7ydduYWMkHuTRUvHLj9VLFjwjmVbsgsPaKYcTjNdJNfiinv2cMdgAonuH11i4CS",
  "key12": "GXY2UWcrvgH6vMFe6r8uk2JyAUerH48uiEWxj45qGTN1a8huUbV9LxMp1zF4Yzu3YAYEru5MRtBpGLh3YzD965g",
  "key13": "67hHN7MCM3GgTacUX8QnZsbdHv9cBQ81WBmioaqCDdDtyLmXgqyyvfSnZYpTWUdL1CZ93ZMDvrqv3NL8EQnize51",
  "key14": "4uub6h9pf1bTmSEoKG9RVnwYFTFnVnKYwrXpNHTtJjuKkyyVqun171Z6G1QcMSutpoiH5Y4NWvEHxq5AgYyc4tRA",
  "key15": "63v4V6Qe71F1o4S6uM1cy9eCXANx6qAmrWKjcFvcYkHu4Vaqm6aQpr5YaUjszYSEvFoq3qkdAZmmoRmqnhgobEBa",
  "key16": "5k1jcZ1RpQcNpRa8MZ7audGXntcGDaxVh5prSYdBapbmquS85C3QjhkZ7YUUsf64Qev4oNH1HvxG11pBbX3u4gzM",
  "key17": "4wPuCHnxdUM5iHiZu4bZ6Rd5XkZQmwHhvBC2Wo4naJ2ZudA9w3DUG77rXSUh9NysLiPLRWkYWbGo1QAXndUWBcjM",
  "key18": "4v5aZXd3RYqpSqiBJYgSYUeEdbdyqqJybN5MEYFWq9iTfHWkkYQB3tNFYzDdTbDDnSgDkpfod5dhkLAZ8vvfG282",
  "key19": "2G5aK2GzVgWxRKc7cisWoNuxLJzeRcppfdrTNEyLDZgaFBrXXYTP4jEfdboMBDLUMTZC4e2TeawRm6JTvwVnimhM",
  "key20": "LJcGag2m4Xbk5SLXPUkkDwX27Xm6CddWyTeHVVTo4ugAZ3thEiTnzbWQR912gZcWuDTWeEYAFdTF3Bb8MeTyJSX",
  "key21": "4JzaqVdgLf5XXfV3TYjPgJBGbqLedKfc6HgTPMJfEQr3cBjncCC7n8Tzv9cdDmhvrmVSoXCZDCyuV316P6LPPKav",
  "key22": "4GWJrRn1zLkJGp8W3QFm35CQNoSW7GCsYcY4FQ7ZmevJqnBCgcp7zrU4d2DKdaUNqGaQmxeL7shLu64FqBCGbyw9",
  "key23": "58L11qv6VhWQEHkpnViUQ4WaptkUsce569vfcNv9hd1M4f94BynBFdBgTSWjyp8ig9YeM2EprNsBB7CCHwnjomWD",
  "key24": "4hXRr1Q36V6fU3mZB1sumxGSd5YSPPNC4TB68kEHKqzGzQ3WjUC3RGPnUVa7SjmCkDipUdCXgsacsXLNifsJiTtw",
  "key25": "3rntYRhkaHRGVpxUjFtmu2ZJ32xxfYnoi4WTx5GpyVYXX6EZnFPZwkc2t4CeNth6zJTCehTUAhQQNc7yCgBP9V74",
  "key26": "SiRp2i15zewHskiTqEiMEqaxXbkGMYSkTatFGAxxEEpcBcT7UWZTPY1V1vX3dSLnxXrzAFdrFoBycGGEsRETXgS",
  "key27": "3LwAznsKrtye18ZMxNLzeD7ct9DGeDq8dricVkeHQvHDzbbwtzhRevKQGQ7aPiQoy98diqDLSnZsveW3V8CTjWWy",
  "key28": "4vrGzHgsSan4jk4ANvFAdAwkGGSETuyWrkuFsnRNXiXLcHy7joZSw68PcPNiX5DPfJ7C6GR8bARoTB7ojctYcFkB",
  "key29": "4xjeR3KQ1DdThwAZJofB9grvk1m275uAkqZ5CRkRivppZcFRVrjYerunt5rTskQtyYa9RoQb4b2nzRVSDtANMfaq",
  "key30": "2oHtuMmLcSFeWp6BpYfiW7kSv2fpE9QidZP3h1qeSATvJY9hsxvfN6FgM2qtQL5MkqMFLjptRK1QNrTkxNEZyH1j",
  "key31": "4E3YjcGNq1tR5gxQuvDDWCiekKYjs31NwvVZ9QcPKohvJfxSQtnwkooJVEFHeAMKJLyLo12brtpAm1qqmsJyWiLG",
  "key32": "5pJyf3i4x1VgDyQdLyHRzYMAaKW9DQJ84zwBz1uFwDRD4gVFiSZX1AUFT4ZF6BbSJqv4XD1PjiR94ZvUWbSe82Qh",
  "key33": "4e2F3Z9GhxCGoGY9tebarJVMWgKPNesCq8u3eo4pjYp9Kqo4MBP3ZmE92kbBadpApvTqQUnbzsTHhc3HsVtn4p6S",
  "key34": "5kzJdeApgkVLyV1X8dsfJyr7KrTNKjKbY4MqvUWznmjJgyiyY1fc5LDP2qrUkmH8aJf4BngGpKuEQfTKzjMpn5kt",
  "key35": "6u4fRc3wjmoEqTWhb69g3jgUewEuq41NfbVQecmFQYLmE73wQ25FfimXRUW6SzH2uGyMQsSBRSPCKiJ8X7AAGzT",
  "key36": "3MiPhKaJfSP6bfnHDuDaSsmzVQmzxoC6SzP6MEYV9BHKQAZe5B34bu9vvomJpTdp7yLot9Km3fdUWSVrBXCciaG6",
  "key37": "4wnahL2wtyBj9FKRWvNj5stgxCFVnGN6UUBhsyhwderTrKX6cecsU5bQRnPUjzChHujMoR64FrQeytnmcHcpzi7F",
  "key38": "4vq4jXMNahrSoZD3fqfZx6Wcfg5HBu1xLrh4hUgcgpBavbyScHbxcRKXRoBcuuDr7ctqpt21irfMjjZ5GbbVQ2YT",
  "key39": "51skNrQmFi3S9N2CHbYPUFfKgdvoTXGrEnNaiZ99vvD234aTVQvEXYM1zDJmyMG74tUvS9L1TzfbRTPxCDDGJQDp",
  "key40": "3uDouu8JVg2R649gW5QnoxPfsxavkWnwynCxTPoWJUp8s7sCStgTAShSz3cexCbxLFGPGsxtJtaWpLxxiXXcYkDP",
  "key41": "2ovc5FveURYVqjhUTiZ2ZC9k1ghuKzZGPToWvjzgX1mhB4RYugGvpwu4xPCDsjWbLNE7ZJLrTv4mWa6yUVb4A3j",
  "key42": "SfwJUf1Xe3bTyzDQfJxrdXoQKcy2QueSRNPxSCveHUUS4JebyscsEiU2XqiRwpqFZrREsMKwNTxMBssaxomSsHx",
  "key43": "3Mu5rxULuKjg2HnNt7LSMXHDjZ1KeLTLhJnpAG1hQ7rvKF4JSm28YMspEhFUYoiTH7CnfQcNuo6tT3zeACNhXfDP",
  "key44": "2nySq3otFowHJt9uGgu36z2BtXkbrk35nUS8eMzRNwwyQDkXeUeJ4n3KWXZ8BYZWaq92ZK9GiULJQmHxiTZx2AY8",
  "key45": "5jg3NdJoVg5GT8ZnXQ9nRHaJRbNxynxJghWUjUqPaLCDwb5GAGNXEAy8J2c4RAmtKSd6cqYBtyrKbXJrPVZdqhPm",
  "key46": "8jvvkbN6pRcWNvhSvnZyetGa8637PQR2KCjdNLe7MdRt7FCBBL3f9ySr7LQSrBswokebxLwF2BT36car2RePVBP"
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
