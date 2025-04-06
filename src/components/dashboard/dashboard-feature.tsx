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
    "28fnZjxiKCWaN6jKF7FVLfW25KNL8qXbdLxQFKVase8ZWTjuw3o5rHMBjQCx8xRnb6CYPDxgQmQay6qMadFzzT2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bSUiSjR93gtZVWV6bNnMhoM5jSvpGfJrC1BJSMgk1KDih9FktTefm8Xagst7aAsYb92LkWMAKZ7btb8DDwRrZAm",
  "key1": "31wkG3AmTzN1KzX48GQiCPxNngto9nhzbFtRJoLSoBPxBbdZoL632XbEApCiKM43AokjNhuXhSF7PunMoAo3DhWU",
  "key2": "3vG6KyM8cHDg3qiUYdnnaK5h1EQ5nUPxgSzxZeD9cVpZ2hvAwzNLhbXY2yMZyYaBoU2TKzcNjYckbSFmGWf57sYe",
  "key3": "4CX56kGFYMJFnBFCiYEeEXjqSjawuJe66jsLNienMz42t3KEYoDov9jYfgVe5zq8eCGGjigXSJ88dXaEhSJ9N7Jn",
  "key4": "3bVLmoTgLNBocogNkqjHCY4DprMCaey2fQSh5ytuFb5XVpMK1TCFNoTPgoGLsWu2MiQsa1a8GCw39nuGWoP5MJR6",
  "key5": "4tBEZZW6acdHNg1qcw6MRpCX7129sSwtvWr6RHBmRsknX26v1PVQuNJLouJiQCcpsNc7Zf7Z4kLr5x5cTfyonf9",
  "key6": "5fbZu1xSR5rkcVfe9LXrSGaKC7eKmxEL2uvn4KkvbHEngm4dHSVwCUE5scnxW9RxhQcrP7PX34h8RzUh7ZmLHrwN",
  "key7": "5a9ypukmj1e9wLTnbCrKwtimih1yLtHpCiv57qLQXNXpPiU7xDnbgZmZvRgomNZFLHwQo8eDgPzxSn4ToJKe7KLa",
  "key8": "21uj2PhiMa3VATFTE6M8SXBxHNZcpgRNzWraWYZ73uhzq944e9k2vxGK5mvNtra5TFfeAcy2amgKCoLvpiJxskX6",
  "key9": "3616DSWnBSnPaPZxuiGPGCSR3iGCejpXnLYXK88rA5WjSBT4bVFUzrj1tBizZin1mfwBUvM6R3bWpubuSniGW1hP",
  "key10": "39jJ6fyuUNECd2qUzAiQaWfyk7VnRjqnnZMxETS3CHNhHeJaUzkqX5wPiX5dqePWnz8QVna4SAS7qTV5CpvWhWeR",
  "key11": "3ERgXJKt4Pvr3bBm1PsTku9JTyR6P3hYzYWVBfvYH9tfLexhrSEjqdJXZh2Xzcg4AE31H5WiVtaKueaGpED4n6RS",
  "key12": "5RxYB6kKVKVbRkVwWLfc3fUN4RgB2N92SqrmuegMnfKqf1DULKReEKrvhQFfDQcia3ucP3k4pYWtxkpaobBfRMve",
  "key13": "4iFq7oTDQL48h6KFXcBvr68cKxQQEPjQKrgEi5gAQ9N5JiPonLTyoh9vkHu4UYSBrD7U3Yu6TQEmjjDGHbEEwvAQ",
  "key14": "63EJJ7Zezeqzpffb2wDW3khFwomBdVyDW7bukDYisZLDiX2W5KvrbkhxFtFo9AS5bedzapaAa3RynUoNC6855J2j",
  "key15": "23NJ3TB7XFDDXzbhMuZjnKQDFTzYUyTxvchLyoKEQ466SrCFFxazRW923BtULDvMLpJ6oHFHNgVA4c2YSyxsU2TE",
  "key16": "5bCSVHvWpkeuQLhD6ANYnaoVYo7cptnWeSFh8HpvkMRXMwmvg61qYSfvCzwnmj1hqDF918WwBPMmr2CS9SEBzEtv",
  "key17": "362zmSCCMix9HVdQqVDmfWXWuScCHy8F3Ep4wu1ejEkkSH83GPZARTHiVksyWzD86oLR5qDzBZK9EwTEXhwdFo4t",
  "key18": "5QyDDF6m8UqZfCEs1CuUNpjLZptWhEoDwmV6W1ALdRQePaVHDX3PjzWKoumJ8KVHUv44v6LB1D5W2Jd77DfkWVDT",
  "key19": "51Xx5We9bT6e36mepu8TYqgMiJNx2rCtERmvw9mVAVNmxGvYFy2qTyZr94Q1yatxXGnmLEu6GrLq8NyzbJobB35z",
  "key20": "5STLpsFBvg3QfaHJiRnZMAsknwYvXWFjs3xNArFT43qqjKx58m7bNLCb3SJ2hkoPgSb22buQauvMqFSKz5d8BNeU",
  "key21": "5UhMshDtoEDKLimSVk4ErfzaG6kVG6kPfKdfyynEFVqWJpmomXCHy1ojchVXqDdFQcKd5eBKJMRMajNp3D3nPHNa",
  "key22": "4f58gNyWnrkrngin2jAKeRECfBtD64BNCMyi4LmCudhNLYLzKsUyo8Lu5Kb2wNFYAsWw53y9QCKir5mEePbZmUyN",
  "key23": "2EsVuq5GUyWHA6q51r4Rc3zcSqX5HUtgtJBJ5C2dFjCfP2k6yGabjYKbB1ZcG4tozTffa1fiWTw89tweBB3KJ3ot",
  "key24": "3QyZ7b1cZkae35NGh5wy1wLVqejEve2UhGBp4zMcRTdknKdvxDBtJwd1Eg4j11e7cEjsykvt6oXgKWCnDrK3eaDA",
  "key25": "4jrkgAHB9ERRZiKBu4bvnLhGB8mw62HkB71n7easxfczapj7Ti6pct4cueG3RBmGajav7hV24A9JT6ezoFY3PvTt",
  "key26": "2QszBBiCwVq8Z3qpj22HLgMRJr11KL4tMrSQVh99HeRVkKnf3UNgAkFeAewWbrryNrf7jUMb9fDs3bQrLDPvyRc8",
  "key27": "5vwsYkbtE5THEuPusbfwMkyhxLXX1uTo3317o8Gm7rjKJ95PjeuJSJJRgnkqrEPVKi2yjRV9KNndAqjJRdYYZp3M",
  "key28": "64fagnkrDr7JP7Nx4K2UsKNuTxukX6qZEFNBcgtKowpcHQtFPQ9WPyNojJGHkn4rTwkfn1C4s6vPL8e42BnmgHJp",
  "key29": "3y6zMwLpF537Cc3k3QAaPAxw6R5tQLCthnAb9baHhjnWiZVtsM7GuwxEPS3CWxd1BT9bYeXvri9329D77r3g3xzk",
  "key30": "5XT5pv3g2cvmM1vRwWzuyc6HQebgrq8VrFfypUeUEu7xPqfr7WhgbAM1y13sryEQHREFuNCfCTjoREFceYmWxKMb",
  "key31": "3nv5UHGMHB9cnCVbKmKoUL3h8HshiGHxaAmxoSZrYkZgzTop18PTjktBr351A3xXseDfrY3GJfHEaxokRxE6Hh9a",
  "key32": "zfypxvA2yXhwYLHEZDTWrW4n5BhVywSDk77c9Zmzazb1eetTsa8n7JiQ7pp9h1THAocL8S6hxgMwySAdFKXmGEM",
  "key33": "2CJGheHcJoJFkBBi5SuZyoY7yNVPaeidYMwSno4eLi7zphj4JT4ctvzWZ4f4uQb3nMQzQ1j6Zg8rdguFAD2R9FYL",
  "key34": "3fd9iJQ48h5osckJU4DSfbuTt5oy3TyiqorScv4dw638rzUiWRYbnHSST8pX9zNbVYqZqhfvP32ZprB8HfVMP1Hm",
  "key35": "mQ5D9PomXjMAmSZiawTYJpqSJVUY5j6ffNgAWgzroiimDTswkeaNaryZubtnyv19qjsYH6oQuKAtLX6CjTVKTB8",
  "key36": "22rgmBiNkXoxXnXh7vqHfnVjtDngCpdve2FHuCu14Rwfgn9zyuidT7zTboyDyxgcbjmv52ZgLMzqFkHuCG1hMvjh",
  "key37": "2YgUyGLu8eg1HwD6nNdhaLbwjjsqcLCQgoV1Dorg9pScfxAvtkdaQQnvTzSS1dLXmwV88JJXgxntAcQ3A4G2j43c",
  "key38": "JxVEScvW1EvLf2vyLk7MMMT9J1neMyKr5jfLGrn2osra5KwyPGNSfSHuUdU3d7R3GpmADeD1QzkSyfqmZSnVd9J",
  "key39": "2Q54sUq6iShqesQKHBTEaciP1YLYqNqQj7FYXXiXrd7Aruh3UmjbRkg8MQCpA5SMr18MAPQTf8ub8tpUqv7qxkjz"
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
