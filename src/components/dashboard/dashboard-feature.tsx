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
    "3Pi5SL11SDvrhRpbTKqNMqNPvtw9pvHDmPsYNrsWJ9ozbZKNNyGFggmjHVVmuhLgLutAz3AczpFTkherPAsrNThY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aP8YGwsW65EPaB2v6SCd5bnL5WcqfbvrWy7SRrji22HytcgvaboCTE43sVa2Q4SUeerY5Uy7vCwz8pRMqFX7tx7",
  "key1": "3SUJxJVgCZFpNV3R5NbvrpP6Lh9tFcj4w5XQiXBuYXu6AcZdDFgDfoRzr6B8itC1B9pWRbtP8JuWTCyEnhNy5y7o",
  "key2": "48ZXjtyaZLqjWHMcTuGQd9niy7ceND8B5WKQ5FwWjeSJsU1WBw5cfHRK3WzcuVT7EdZVUGgsuvTr7AoXPYnf6CfE",
  "key3": "5uGZMf3aomYLJN87WfR9PxwwdWhsMwFu1oomPyjBZ28fY1fddzF4JSZDdQHchxMW36p9cVCze737aHxqjApwtCPv",
  "key4": "3cnW5hSrsmbgPbi7md5ciSVvgWaSojcgqbsC4oF4Zkrvk9WJyLejURDtBeaN4MLHF5NCqPDpwRuso6kbHuvc3RTu",
  "key5": "2qZy5j82Dz9iCGjtbGY9DVx4ozP1S1nGYY3ebMx1KrikNTFYvjjvfkL3qpoEShL6NMizsH9DWMvBVmPzvfGTwf68",
  "key6": "XhaipajmXb6tTM1RN46oxXv2rtb5aqzSPDB2a9wc3BiYTQ8hcS3J9JrcCo1PoJvn2CrADG3vyuK7cqcXaMizEjv",
  "key7": "2CWjJYKAp6xRWCtPQ1hb5EBHr5VwxLAVsue4kTq3NDCp4MUrxiMvZb7rBwK6jSqG3fCN2Zh3EVaeiSe2Qrx3fcsX",
  "key8": "3xEu81u71WgMRfbtcgFQMDDsb7w1EKWbDmoCJLQiAN9LWdEoMCxWQT3VBBk2Mbr2787HKB9DvqLMaoK6skfUoc1o",
  "key9": "5hsq8WZikeZFDg2YxCGWHwaHmi89aJALjus1pepiJrDLvsAzoXtTZ1KVLjKcb9CjbQVsEyaNjzJPnY1QQB6LnQLF",
  "key10": "BFvtgdZkaKJ5YewzQLKy6SEHpCaLBxDHy3nhHZdjhZSzdBKZRQvvE3iBanRgvEXNPv9N3vx37zGVKV7ZMCr4U1M",
  "key11": "2javFw3CDseDKqP3Zd9NJRweyonGezG2Fm9KR56AuoAp2N1kdvWRe7nYdQoNUgUeVNh8Byj4Fn2NTiizqbt3NixU",
  "key12": "2hEY1jn6YxpzmacgbfnhJgHovifUzRi28CTWrt6N3t9nV8shhk3Hchjr1xKjQ79UxNGzZPN4PFfdWmsQBd1Mfuzc",
  "key13": "2pZajCYD3EbSc9X4RxoLe6He7V1pD93SXjw9rJG1zWArxSb3fzG93eqGhPo1UZAkFNVgjBqNoaF6QoTeKEXnyG9t",
  "key14": "5h2cAA6QMSck8LNxC5i1TUsEFK6hi7kzAzsufYHhj113m8ZmXurpGtHZE1RosfrgfbaVNubdjnLrrsmfnppYcPcj",
  "key15": "4iq52LiZJdSHbVsRxRos7E3XJcuRRTfytqGYaXVgi8hDUU78zxSE3HDccvqbbqTS8tmHoMjaYGQxYHaNQNgg1ZSZ",
  "key16": "2RqGRLXtFSr5bR8RCU6JxVu7qEGco3eiuoaWbhHWXf68B5ay9jmNXoG5PuRcmShRvR5PryKJaTA57T51mkb9nKe6",
  "key17": "XE2HLpF9MjFtDJuruJpYCDqvkbpX2GC6gs573P4qP6cHZvP4qLZV56TiCWh9QYumwN1SUXMcX44DxfrttNs3eiJ",
  "key18": "5nVAKC9KQQhMHAuXcVzcHUvfWCh9sPEBrjPhP1sW2dgHGkoY39rGVrpgbQd6qBknbYiG74zKS5JhSCfA3maieC33",
  "key19": "4PkEyxUANG9X363wCXfv1K5A2dtmM1c4Y6pWDBecGrELwQNzdNpu9LiQTFhncH5zdsTeN58KNxN6vQj1ZGycn3gw",
  "key20": "59pHb8NwR9RWbPuxxX7HMi6uVbDcBgA5hLEQBE2USdB3F5jqQr6RgjWVY9SaPxUQcVB1WAEUFFM9GvhEK1HKtmzm",
  "key21": "dhLsSgurQQ9YdV4bimSMXFWgWitubKVjsHoxGsDzNVGqbiRBj5igGFuNEH321sCwrKQp7RUkhfyWC3Xk9S4s83F",
  "key22": "2daj5bnYxzRGiDDumXmdyt9MDixY9ZT4kacqAdudWbxzApbpwz9ovHUgAeCgLQaz5rbbGzRzBtCfL9jMerHnTRKz",
  "key23": "51m7rsnBFRPhiXyW3srfT6yYA6VJRpasb4pkcFnK72htn2Uj7o9gLkgFXK3z3bwY2q4ioyLCFAkdHKYnyxoGoW8N",
  "key24": "3PViS536M5Je5z92m1HbvySSK5q5YAMHciqQS7oqMQ93JPA3NsTwcpUctyn7Nt768A68s2N5th4VysZHX7wukeNd",
  "key25": "2fPQi7doV1a13U5dj9tM6j2QCYSAGcR9P3X9mmaqggLyRs71scjXKcGkAkoiYZMKj1VX7bMzU5ZGsewji2nccjCC",
  "key26": "3XBs4GE9Wa4ywM7HYTN9dwbv3US2479tTTAJkvxP6oPRTKLLdcY2bK6NNZagaTRe7ChfiDV6sLiWBzJj89KQTruY",
  "key27": "3Ry7qe2aqmnDViVAWsjx2atuhcfhFyPRZANr7gRZKmCvmmBW7f7myqfpNBvMiYw91pS499jqx3q82ZDMGmPfi7zc",
  "key28": "5dTbJ5mBitRWYx564TCfrvZvMAfUW7Mxo7evKGhEgbtgHPxNEuxNNqYuqvCLFsgUfUwGjfeb16gLP7BgWcrRV9ba",
  "key29": "3rsF6pHb36zyzRpAWF7XjEWb5EoE812uUTxy6AeojZWwkwJK4ZvLDxGAvnrMoUKvG3B2X6ZJnMEg1ApAA2vPRT4z",
  "key30": "SBTgg82xi41ccHsEQW3BH17eTDGd1ZqgwPEDopHVcvDyYWUGAjXayqvJQHtvTfqkmWFdHJBXaBFJmSz6DgCy8Kh",
  "key31": "2CSohkUDtxtmbSEyQfsuscfZ4HG9QtDvCfVgZiYKdPEiJiZpTcbHGDWRHkqipjNUxAD5zra7fYwqfNz7oPKyq8Kv",
  "key32": "4LvqXjFnKturbRfCwbWBwSocrwiD4LEbC91HGNwSjq6y3y9db1KUKtpJyx1tLquqLqrsmdnr6PUhH3EZd3qzCb6L",
  "key33": "4HeP5yETeLdFWMR3tVQ9oYzAjYHh67EmuFPRbaoLw3mGdnWdvbyv74FGaWgoUeQ2q41bUJCcM8uXXoSGvHYF647C",
  "key34": "3udbwsJ8TMMZ16cuY4tW7oknfipkCFD8UPbj9g5jdeM8HppXb6WUHFEW68qWrCYgwEtvzUg7cQcJST5NbhmvVnqs",
  "key35": "5cJ8dKQyc95CGkA8CC3B78xmkBzeLhdj8bNvtXRxdYwe2mpEjqbuDo68v3VNkpLgyjuwCoYi6TMFjx8182fVRoc7",
  "key36": "3ETfp5GeDsksDc8MxEfqfa9yYshHLco9e86cHhmGiYvvqFBWc1CDhLSzewakc2h7xQT8ZeaWtZp16qFzNZi97C7U",
  "key37": "4oNCGcmzMEyCyLWPYmJf9ZRcCXyK6kWvYg4sDuAHuquqFHGd1WdSK3bgTi3THpyajWLKfuZdLwAZGeYJc4Np3rib",
  "key38": "2oJjhhJWtf2dkN1cyrSttW3xGwUdqLccXgtDkudWb1GXu6iKtvVJiGVs5dxbawXKWQJD5WuNdYRP9MjL462SGvja",
  "key39": "3gCXxFWqLJZYgyYa2rMcP3iWkHv2jBpgAQ4F9MN6uHqSkEscFUmESMUxktL5mpdepAas8QMs8YD2GXzURyvUnUxg",
  "key40": "52etFn7Xjy92dsBACkY5Y8XtY67PbsFnTn66EDtGU3x4f1N9LRU6ZXvGitZsxUoUbaDKN8v8ixVrSDnM8HGaCbiU",
  "key41": "3CsPftbEPFhMZ6d5HVmrSRHm3diwDqhC2JfJSrhQTT5o79BwMQexpbWgtBg3EPcaeCarXBEPXC1sb8jKh5MGfCk9",
  "key42": "34YWiyXPZK6agvGP3T8GpNufMX1VDyEU4L2hbo6qoPGvBVkeioCSS9962jU7n1pMHGcgKdZVfksgL7hsqDV7okZ2",
  "key43": "ZQJ6ZtxzZqQ6q4fKuZqpsbVZn2VsC6dVLRFr2iFbfB1pyjJ26BkrU1iPmbfqkNwFenWCUDhHtKuuqQi4BxZ6BKA",
  "key44": "4xjuvJPVFXU8KtiYx1h5ZfM1PDsfNTmyoaXY3GbdeEX9zFRXkr5LbHfkry4Uz4fNTkjtYazQW7PPQnTxw7mRwSft",
  "key45": "4hwwArC4hE9FVd9HRuMjKDSuLdVXDbewYg8CJuFiqDiAEWZsopYvqScnhLRZemgZTcJNKmY2spZiMyrYQHL72kGR"
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
