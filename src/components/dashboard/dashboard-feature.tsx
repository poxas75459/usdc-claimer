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
    "31fjNUztT89idmqpQZxtVmbLsnLwcUK4EMNJCzKDf5W71fjz4xefPca7BtZmiRhSUjApgSkmG26KoU5zGpJ7knqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ti2JAekdRngnYDGip1f2NuuVv34es5eJHAtZPs4D72RE8K6E6TJb8oK4W61g6XrQXNLrQTZgW5dJYcA4hYR1GKB",
  "key1": "34thoF56N6xjdDzUVAfVG8Cnr2M44oQ1xHDgPAZ1wtNrekzEwHqQiAC2dh5JwQjSXsREZHDXBFP3er4g6aRpmVPM",
  "key2": "3Ef4jXTT9HmmXnByQ3UXzwDmg4BEdND5HYSB5sfz7jqSPLpA6795qxEwMdsW9CDYdEbJtRL549jm386d6bEfHfWi",
  "key3": "v2QutVncH1Ujy1dWFV8Riu94SwvBq7RTCBc7soTdA8TDPzVbbteKeHHkRAiVqmDeG6JD5ru2BLD8wA8DFcCUcPW",
  "key4": "Ub2gF5Fg89K5Gqj2ShaUffjG4RfzRWJtFFKrRMGWHJrNcaeNoQAL7CjE7tY4oojZFLmThxvhEH4UHnMbfJ6jsig",
  "key5": "5gC9e5H21ieBenWd19dY8eck31ur6hmeMJqUdHhZaFHizZqx7c3unAQVS9ULpcy7pmM4Yp1RgJWFD8YzUPguSTG6",
  "key6": "31xYCKTGVgbHC2RKueqTdx1PyHbpcpuZWAjU5RnTDEpv6Nrs19MVifLVvUVuiDC21N5ExJET8A8LiaeqtWi3ai2y",
  "key7": "5Di1k1AwNCgkfj11BSJ5hNzhAr3VSM3u5BXr5mpheSbCwhuU6so6V9uF46AY9yQpdVoxcbJ8aHdGVV93HkGedekH",
  "key8": "4B3tDLuBu3tpjbuuwBUpfJTi7avQWjdyXHWKVpZ1wPK9gZ9o2gJxCJK6osVrz9e9BHJ6gjEcW33zrUdbzhZwM81U",
  "key9": "2fy3KmbbyTP1GxpfTqHmYxEWqg9SC353JMP3QRGUmpjYcLV5foZwurgytgobirboTpz7XvuBcSoq1SKmW9CrrqQ5",
  "key10": "8D4bNojzyNSZR3RnWCn3u99L4SLtvmgfDSoNQFAbyjXDTYX7BSsmPZNzdWLMURKLoa5MbtA8wnvnNAVpYZX8Jfr",
  "key11": "3xv8XjYK6796xpL8h6ggMu6CDtPkRhSthJ4ZdJtsc94RMibU2gygHg7B9vfEajbdzs5QtJ5SHwZyNUpE1F6EksU5",
  "key12": "3ep7ThaAygK1H6rXWQLXBERphgBXf2oVsw2jHDRRdBd2UUbqvh7ag3daZgPMBB7gn8FcL97AJC3iEsF7FqJuuQ5v",
  "key13": "2n7P825FcdLMjn82cw9xKtMJENSE8tffEt6tKEzoibzPX5pcC5EbxDSG2ZdFRschrHAQxpFzPYzCSNH5sHkwfkVY",
  "key14": "3R5B3qHXEgJdEUxnC22R2ackMvMSesJoKkoCSdkRGFKACPyiKJof2XsMWEeYbPPXWUB4ReBDKSKQM99ttrhesGjZ",
  "key15": "4nSgSoSoFFxwPBfWd2m8STMpCWNk8EKxy3K6jYV9Mycjq6g7HLm9B9DDMfB3xMEAX22PUEVJvGi9oeno9NfRf7Se",
  "key16": "4Xhsho4LUZhKWM3v2EYZrQBYMijBoi8sSaKpBTLJrYJYPCVWr97bgQmhaCFMVUBLrKmTshtB7dexf3f7RJvL7SHJ",
  "key17": "5poUB11b94e29ww3cTfoMenoeQrQZuyDfhnQCQkP7LJu9S6xcS3LS5HLGzS5LcqJpftvqEnt359XDymUsaEpUKVY",
  "key18": "62c47HPhsURUXdri6ZCP2x1YysjParmeV9YxDumCsE2uX3HTYpZuSncRJCCfkPzVqawXBF4gfwBrmhhmENWz6G9x",
  "key19": "5rBJwzcUZdsjK3yynn5o8LkRBVv22UU6fvxpqWKQFDF7defvbLpGiHxUi83nuGmPjxMNPc7jtpzUU3hWmuS6Az3g",
  "key20": "3uaKwsS8mVuD5wYkJnkaGVjWkVwNNaYn5SqM5SYeDaCGfzUKW6FrzTyuF6UdQKqDFewwGW3jGJrJ8EMo3Mfsi3wX",
  "key21": "3oDUvVT69Wd2gaKaUmT6qVyXPyQfYWUwKgXqn2FtygtfnkoYNhthGc4NYMehuFGd7eGGCP6dsCyRqRjhaNFz5gCp",
  "key22": "RBrc3ePdCKss5xMgf53atfGFGcuTHFSjzH2NCh5SYfynX2pAuJQTVcgMEZfVYZBjCpmiRyAqX9MLE8Q8GevfmGr",
  "key23": "2Xbx5QhekrKeKBL4s5KUUex5dCPQ1EFQpxPGNkUwJmuoH6LN5k4PtnTJVGxjvuR2JXt8SmoBgxdkYe6cQZXW973k",
  "key24": "uhujhy4GcsafHZd3gQUjnJHm7DMvysB5mWygUgURfEeecRdGwWRB1bCzxidtGPvS3sqPJJTwiB5YrPTMvbft1At",
  "key25": "4sMT6WztNihP1aWSxXxdZi97okyGApWvgMiDjRhzB5arYvToNS7BsnorFBnu8AT2FAs9R4gNndTgQm7WZCv9shDF",
  "key26": "5QohHRWVDjePX4H5v4MgogFraZ2CCYsAgC2TNm8VxGS3BAQAFYFeR5FDF4st3kKVd697a7oQZZP6gfsKhJcPwAHe",
  "key27": "5zhGo3ixnvvWh1m4hvRVJ9wWVc1GhbnLyLeFAdHbc5FCip9Bhn7k9UwE8egiabusoCaX4RzWTgLbPp66giatY49w",
  "key28": "49EyyEccuX82Em9G1FguSenPZhDVncH8bPHVESChBaqjV9yQsYH1H5ahKqs8Fy2S2kinLNDDTnvkU2v77ur5TwQP",
  "key29": "3cej4MUeNgRvaj1P1mZfMWrNNcgDknXbAbPA6rj2XPckkh4rFbRYpWgfUF53pMt7WJHiNkd7QX39Hnmwqq6LNrk7",
  "key30": "2w1vLyLne4jY2PM3qDxWLmaaEiqZwJSTJ44Tg3jc8T6ZfyuHadYYkKr8UzxbE39At4eSrKY6WjEYzu7frQyZocbh",
  "key31": "2Nze1j5CFYtjSEgDYenjFSg8fygv1ZUGowvZuozzAGFDwgGPkQ7zJXQvW6NTsf5y1z6s2k5a7Fk2zbBwjhLjLA4C",
  "key32": "4ejQAUsRk4eMQpZrskfr6BS8Vu5U3hvZEsi4ykkHwBDDyrPzKmCK1B94EYuQoW6AyWUJeh5KobLt4dKVHPC982fY",
  "key33": "3CpanXZEYhVYHSr3d5EeqEiKUBJvY9bdSzfd65gP23E23489TrZckPkTsKPKMEJbm7nrPbdV4xihgpbZi4aa1wZc",
  "key34": "nFHREK96WULGSKPT8a9dWWGkzkQH3JG9ffqE3rHPQvHa7M1TqKHZa6wTR2iGpztj84CnQ9WC3iwKEF6vmabD9Bo",
  "key35": "25ogvqqtQMspJjWKtniU19yedV4ZffXkMGVKUQLyEpT6ohDycRxWkWJPVd4rkEUpzPgBm44NLJNTgj91kZiizZiA",
  "key36": "6eiKEsaP33F9vqSRqiHpRd3yYzj8nccwGkJtPug7A8nhAHae57DK1ErCyif8bMr1Ku2ySESPfX7RUyTQ1ibjd4G",
  "key37": "2ViCE4Cdrc9LHtQwgEwNmn3KnAZb8wv717LcQJhoRTnsKbqeGf5eQgykvYqTEYRWJ3LCGKHNMuBJ25PwFSK6bDsY",
  "key38": "3dx8Nk6ftbpJEJCZziqYyTaYF2qRj12kcyscds17LP6SS2HYr24pjyRgSan2uTqbPTpyXXGz3AUGXUVRSf5x8Ek4",
  "key39": "4Xdgx11DDKrvGgKzM9nzHzkmUbZoiPGY4tMEhcrwFxcZRxm4pXxQ2H6vTGT5zLRQrkSy3GDUdbKjnkH56L27YVCm",
  "key40": "3UTUYRK4dKujsXzCsrEYHjthFRfYG8FfSVGtqzazjhwGLjcWUm3ihkZ8F1DAVBmuqSwp26ucJGrjZAdorvB1wK1d"
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
