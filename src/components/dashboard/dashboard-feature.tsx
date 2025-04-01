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
    "2ey2sQ3SjmMAybLZvKYMB3YvW4mxacWfFHE46vDQHzaZGsL8HK1rCYCjp7He24njDz4TjXizCjQzF3Q4xjksjnf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FoMrdiLmYXjaqrdDH8zf63MdRN1rYbXAhKW1c1FLHCB18VUK3y2ojMDnsqk5XW4yAPEKVWEdVrhUo3anvfY2W3S",
  "key1": "4MMZxf8TQoLXGcGuMWp6JRvS5KXqxJyE5U4dXNuGKNWVhNZp7j7euvHKmteWbMVRoeRWjHL77by173huGPm7Yr97",
  "key2": "4V2QFS6mLmPCZAJLxEHdVS5gp3K8ap9hyryjkiHnJdaTB71Baxi49nEffQzexFQGubmLX2UNVxiDgdmxMKoRXitG",
  "key3": "4YEZXL8FyWutudvVjKA8L7yZLTrd5RT3SgCAKKKvekS25rCZfj3fprQmVsXKuNnSLWQP6K5NJdzxuTZUdQmfEt5f",
  "key4": "3PWaB2gZA5AQpiYEot8gpbKQAiz2bW4fY5xCUdg4YoQcN9PUzyWxdX57Wkyhh9rf3fw27yU1sKS4z8ueyW9JDXjT",
  "key5": "3RtP5t73KjWfqV3MB8atnB2Fo3oYCAb98Vc4zpTZRbc3VJMkxiixPuq77UZf3XgKbZz6NBDfeXBWcV3mdqxGZbjD",
  "key6": "45esr3n3jfHb57nXgGYo4G3FCxFUYJ5pqZEgukKGJT4aFA68SJoMYZmB98UpuuHZqbPjCdU2acQZVco98bWM6chy",
  "key7": "45s94bNyGvqJYYhc1YramBXtn5NATQGXU3bEFpYG5KCNJjD8TnoriQtYgHt5mAyZTpNXnSd4wpzD5RDL7NfP7TSb",
  "key8": "4R996QzZPagv7tuGvpSzaqk5wDvZEQo7NPqvjKzS73rkNLMPaqMfE6GpnNGRSyybXpvWQovaLRG2fqrtDxCBEs1L",
  "key9": "5cPN8rCHDt9Ezag412oR7gikYmuwMP7bKp5GcE1jgmMTgpNv7DBhcW48tsx8hn4f4WHo1p7VXuN2eUuE6EPYHJWn",
  "key10": "abKXXxn6EGhE4H3GkvSCtEPnPzSz8fK5U1oaQ13d1Nud8uF61LPerogXw8QGEPXc4AJcnPPhc622WQfBcA7UbVz",
  "key11": "5fUhKJG6XznTYD5HQpsoQhSV9YBoyi8My7uoTk9XQ2XXZPyZ6W7QvvEqFBmCCFHzQ7e9UWYkHbfyAMz91qJ6Sx1b",
  "key12": "4EZTbZS2MxsYHoEbr3fapQ8sCHYNCAULrknXBsn8fUdK5hb8HVWEo54jx4jFN9FUVn2VaUUHfx3ivYbMWj4iGZTS",
  "key13": "32RL9noiWMMyk2yVWN9t31tC5t9UuYeLtaBTAKH3NgDmdCGfcVGFqG9XfmeUUAtW8XSuBLUtUJ9HEbvvJn1B7NBW",
  "key14": "4DQ3nD6XexkakTKgCD98ajo42K7hdxkkmvJEttR9bcuZi8DP4JzoNqBTQsrG2SZy2gLeZcmUWL4AZve9zMstAAsJ",
  "key15": "4JVGfXk1afmptgnMQACWFRisuzy6QUs2disRk9eMrHVnbiNj3gtpGHnYZc3B9LDBrQFuKrDyBE8TfLCqaiKJzmAe",
  "key16": "3ph3gTQSza6ABsr5v8wog9iE39zQrTY7mcuChww8NbPjyFKbCLUtWcXNPJV4kiCFPp4fqihHtH6RovwXkV7H8QHz",
  "key17": "5EQQXfZ9cXvGZGMPM8hHw7ZSMp9pwt1kBg9Ln3AFKXqjcWAuy67RjEpPMxramg5gLpJEGrcsnBEEXFrRZXHCKt43",
  "key18": "2VXcWPAZg9au6vvu7pNGE8UkQV9RhLHH5XXdQ3pSiTUvujntYez38wmYgqs2DDrnmSqEvfqrKiKNBXs6tU72CUcU",
  "key19": "5xh3dc8cDgNmsiqcwP8X7nXYzHaB9f27WrW8W4U5A9GAGpEBdiB4hrmZzMM65c2uP5arRaYTT6KFX4nEvph4AcbG",
  "key20": "2Hw6mxpJFxEKLDeePdj54cSeNPXFWioZAuzucLgnTc1kbPUMqPmSh99j1ccGoJ9KzoqGKpwV6PMuGoZQBu6b7gNa",
  "key21": "34NzCb3cWWoxNhJBqg9WRcPpBAZ2iZSEUqx5tcteSkCY7sffSK1q6cTCx3srpFCGzJ9E3Uzo2B1SPEUorHRGQ1LJ",
  "key22": "4ASNJtg7qnJkmGqnTDKLixuN1eSQ2n3X1FNfknzGATBibKhC4XnNStPKeTENmXPV7xN8g3nCKeBTnUM1t3CsfYak",
  "key23": "5PfktfxV1Wq4pa1LEz1dL4gNibb9RgrEBrVPu5cwmQQDGLcQHAh6TvMmZPvBmeFKJXDTd46urbiyrXd4mWXscjuy",
  "key24": "wPBwnfj47qcDwUdpyzGu841iE5HbgUFyUJfwBzxt3xwoHAXNhFcedsDQYoAMKaCpQLqoosHNx7BkM7JLdKk33Jv",
  "key25": "2VzpxFr62cQtGMMjSxm5g36C7uS6EHSuKhNAGdi5rw7jpiWRpGyP5Fjev8pyrZZndPJDLNjSXuEoHXxJxo872K6C",
  "key26": "4A8TnEnZ3xdpTNXnLioMYHuq35oW45P2oKsENHA5FNG2VrHcMPqWTTcnZmVxW6Mysf3vCW7bhnxFg5cMUL15T1Fb",
  "key27": "5AaKTrRzu4swA5Zqicq2kuKC8GQMx8pprS4pd7xUXmDde8T8rvoyB2jcwaAemAs84tUgJFHe68xjrchvtkBrHdH2",
  "key28": "4CEhmu4XoVd7xZb382sRWhC8Hf6k9ejNNUCyeoU78Q69cvsUkFqbtVr2jpW4HEKVMkwGSQcWx8AmHVxnk3xcLY39",
  "key29": "3QoDPwFdUe15PuEtH2zEJPLfVDE7FdxCTUAWvFpYxDeF2oxCCHk7niWRPYpBe97MR9KJBjiG9jNSWsCw4yp8sH1s",
  "key30": "5kNugVmGCjJJB4QutG1pw6HJdguDgFJUw8tCHs4A7c1X8wsWa7BqMgTtUQU3JhVJTJ7rgGULayWpVGoQyYzU2q6g",
  "key31": "3hMtk32D4133gtY9pU9N31Phn9wxPj1wgdyVwun9ebe9MPwanGNdmZBiDnu6QRTijShWirAS4H8qTjEaKLyhZEmN",
  "key32": "4b5q5Fq2fJP5WMG2Nkqy1vo2CWfm9coRJuu7eoyLki98ZVe8PN54eBDK5scsF9kb478tV1JdGUJdro9ZFNcMqidY",
  "key33": "2oJr8NdVcwwsA3KxrUiTpxXVx3LLXLuHkUJNLivxdJH3Lg17V1c6wDmJ6pmRe3cK1tGvRBXrqmkrW4PDs425AtBo",
  "key34": "4nzDvkYJKNeqyssZswsANw13EBNEMn4r1t9aoghroCxPG8XaoGbZ4Jb6YgYrnt1dHrMeMircPXzffR7MCsnq1a16",
  "key35": "4t8Z71LYCJbNiWzTMzHNVp6v2epDdGAd7pf7g7H5FquqYHMTKhF44diL7xw5Hvxc7akGJU9KZGQGt5HjLTmLMT3b",
  "key36": "2GrTBxExx6xrhWaVVx36MNn8Bid1MYzzcxFuhvh5oPVj682V3FAqrFiDbhP21frFquHCMmDTekVSa95a9eazMqD1",
  "key37": "48yFC1kNqrQ195jLEGuCezmDSgqVzbHe9sb4wnmrjBcriLhhGXUqetfVPQPsrkgTZr2GgVLS6eQYvp1FuivvtffK",
  "key38": "3pJgEdDoXpzFX3ZEjybjto7xdtgBtX375YJnFy1W6AD21K6D862duL75nc79x9djpNDm4yi9o1PVdNRHiRoV5vqj",
  "key39": "a4v9rvXwbnUcrQ5ehzkaG9y4Krgpb83qHu7orv7Ji275PcFHAJJraQuQMkdQyTF8vffTSMijtRcNg6JtAPuEQXS",
  "key40": "5aMTmL9UFhQTs3tfptLK7Vt4tf2gPv6NfjnBCb7ESartqxyJu9RKr5hv9tkqGGFezn5eBRSsBVH1aUtDsend7Nr9",
  "key41": "4h9SeW7FJUoqTAdkxUtdsyRMsigZoUaXKdc5eHkTTmDTL3LoucfP63H4BxXDBvNrLZiyyNkC6rSnw6TZUN8tGexP",
  "key42": "3sKJLSeFqYfp8Zsom6uyVYwpZHGEJK7a6fvYK5K3JsnxreHC97QAD7MKn5SBR44YaVSvZS5nBp7fmByaZGRJ9tun",
  "key43": "5yydXNkejboqSb7b5Lk7K4ksBV35625hNx2yMPgHbVstBsukiQBciKdFuc9Thh1fmKJp8eN2agBuD1Y1MkxyoDVY",
  "key44": "2V8BhfMAuwmhEedU9MJLSpQyAqdKWzrqZFGZpPL8Vbh5VtqU2rXkZj4WVCt5g87nwBgWGBiMCmpTqaJq2tPCpBXN",
  "key45": "3SS8bExdayqxKydiWvKWWdpFW34gjvFnJzgYg7gTKctUzpQLuwS5axWHGx49UaSFERVEh2FrVTS5eeVXT67BDbQb",
  "key46": "2R3xTp67SubNRofxjjJBdNiuVFnCsoMcfeYs674ZPDJzW2Wr1TVqBcMBC3GCm7FpNA128LzH639W2uzdqC5JyjAv"
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
