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
    "NZdRC7qEaUMHQJJoCX3VQFgEFju8fEgfjdanNHe5gfZkfQ79mvhjyqNzpS73BsJ9RHRj5yovbLcdm1Kv6Xb7ZxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DTKjAnqptWzwxJx94f3fEAyU9UwP5xbbiejo7ykJMopK1qsysn8xjcYzi9PoCfK34M3xZzwyY9yKeteGQ6pbo42",
  "key1": "5PLwGWuaeY364DY334f7k5x5noiBrty7adu6RaHqsFahZYp67CpP2q9zHn46yoBxWgkwEKRMorHZhS2Kz3Rp5qhz",
  "key2": "5Wpp9a5saQPx5hDPwtAM82P8dhZkYZv82dQeZn4JH6X9PRJhPUbKrhy8M9i2VUZSRGwgE257nyhUbzgt3X33GWHx",
  "key3": "5TGmBrJ8z5M1cg1Hz75zkyAcP7E28w76fdNuv3Nrjujdyqjrrh19dnpzqRtrrQQGraJ7x5mjXFx463UvhaEWB3UD",
  "key4": "2ibaZPQGyPJfxUCKwbg9TomNSrm9g9ofn6hLKDApvCi6JRUMAiAkU9pvgEDkwGd3xprb5V42anVnfpWhwkv7HFNk",
  "key5": "5ajuToBYw8HexcGg6gGhnfcMT73BHFm8ZZ5L5EjnViUwpBRBSuuLZxzjsTE6emGQGwwcuqmgvsSu7oiBwoHofoB5",
  "key6": "vTuEW9GxiasEmjw9gaUR7fN5J2ZMFokcUxhSTFivHEoa2v37vrck83ohLdzmAmXK3sNgiaehPSqAckRbQXcnv68",
  "key7": "59GCCeABgpcWEXGtrazSwAmhacRpktYDG2io6218NFQQAZctjETYpBAh6yZ66Cvbn5JzFCz673X26m5ToGbwNELc",
  "key8": "3impHQqt5VVTX21j6wyGCATPLMM86YDMiStn1NMBvV93jv8ztU8DS9RRhXr6uBY5mMhvzBb4SYbhvjQjsSW4ZV5f",
  "key9": "5gN5R97Fe5tvZ6eCSdHDRk7LEyQAMmErh6n8XEm6fMkaWx4ASiNGNtRfUZyMcieWqG38qqSikAf5mPzjqBe9A6AV",
  "key10": "3xA9RooLpyRAakPaKA1fMSwYvaTq1LyRdbxS3rz931L8ot8yGsDEPewncK6oFkugWQyccWYQrY5xtbb6zX2PmF3n",
  "key11": "5k4BM6jhmBNeEZiAp6pn6AAQrfrUhUfbEUEJnSx2Gzv13tqnKnoTktMd26FG4ToyDMGvS2PCWtKvU6UpKwdjMKZa",
  "key12": "35ryvUqAR5tjE9RSFGWYve6FNcnCyoBAY8HPBUrQtJs53uPG3W92bvWL2uBpGk6wecYbdiF1enbzj6RthRNpvT7b",
  "key13": "5bqsFQhV2qGhy3UYfPsD5nxBMTiFhU1Vdjw7otUxb7VbcPqVjuPdQtiHmcCbjM3teoe6kYRoPhrHytsWFHVK8b3r",
  "key14": "5xG4iL97BqwUECrXvZPkWkXMLrz4GHDMFr95Gh8SGr3gnNp58QnnWJDwmYjDP5SonDxKNLsQsgsAxGC8seTu3q5A",
  "key15": "2XkVUzUaEqgH44zQkmhXXDAmwSbH5LsjXWx7ZFfisAsZa7nkucgJbStmWbVA4ht5JUK3NMbcHLWSj4XLzBHvcnGq",
  "key16": "5n5YSeNz1vyQL9DXcdG3YPVT1cM6dDU4QPHBVxJzmjgB83VFXpiQfvDhfdongZmyUmV3x9eYEXyd8PhssKbiZxts",
  "key17": "3fsy3b1AHC1VBtmNkKBKxr2cYRggf3Uc9ABguxnPmkhvfZrkcCy8RhcQkMwN6MtXYByUvfk1Xa18f16fQEE3ys9y",
  "key18": "gr1ckExWpseAh93zYsPXLqWEwwe5Kgb6oHZxMkgiF6b57Q9d6zYjKZxtMyvPwAy37y3mKf1Tyr1FyGYTVGwSzXT",
  "key19": "47rNuCKvSMQsETHV2Ee5jyhzRf5k3vhDPBkKYcD8M9u4spKQgig2K3962S8fetm2BEm7Xq6KLBa9idY2ykmkiEBB",
  "key20": "4Guf2HVFHwxdaB3szs9gRTgKY35RyBFBxCeEuzyRBUuZkdAGjZrXxBvrb7R4XQ6ZKghYEk7DGYGmVZAtrW4wdi4b",
  "key21": "2EFYwathTbFj2ZYhiBaKJFBgTasqHS8b4Jm5UEw2ov97F8xCTmJo6HgZ1fFobAQ3zsVZXaCt7DeVUpXBTngpxJv2",
  "key22": "59NYgUhyWJkjTzXDzGuYPRmzPX4Rv9hasYumverPNXD6ZZe66XF6By9UAKZ3KUoAsQFjvQZNa8thJsDdKAvgmsoa",
  "key23": "2Vz7fBZ7pzvZz6SNMnBFdCYuPHDLWYTg9dm8eKuYS5msu92vtQU3c9vyxmi4ffNU3yQXjp3ynQGdfvj9srT7rcgE",
  "key24": "5xNCGpWy5b3A3MXvVbZ2eAjsejCinTj4gk3RmY2ji65JrgRFSVUr2a2RqUtAnnnD7T5n34rbAXZJmaE2w1ks4wfW",
  "key25": "2CoaVh5R9iMudAhyykFwXKjTf6k8k1oQWrpWCcBZqDwmbRH6V9YDuRasKtyD3Ba1pvaGERxPB99dqUnZ4YDKoYa5",
  "key26": "3kopuSSS3ZkMoNvJgodVXjFGytCqXKDQw2P9fj2WbwXx1D9Pe7Cvp5ty41zBFv6nQBzMvC5e41TwjR1TNEjj7uLf",
  "key27": "35a6RwvToicqdjGGpju2cDtHx4VFsYUb2AXrrWpeC5ubagBKpwBL9mqfD1ASwR6SsCsQhtZMDAgWdMmzdo1synTH",
  "key28": "29CKNeW7rEv9vh1AB4sxmWU6Mog9A8HMRpcGDJ5wFQ3dNAJaMjsHhKZJ2nXsdtmBFbSxRSn8rVv1nTf2Wku1wLtE",
  "key29": "5K6vPPoE9WXz2xLjEZVVVzxYcW2yBFGE6gv9UwyFZm1fnP6ejs7hQdLxVrEtsUNT9kKLHMxKh1kJFPPg8C1SHr7b",
  "key30": "kMK5rQRTuWyAyELY1iEHnTdRk9ixYDTar4oQsQsdM1Y83yCkT1zBbA57kbiBDNeAKumiVVQNHxorNPBcf3KiUEj",
  "key31": "3XQMgHfEUhFC3jp4zbfJrHxkjQJJjQ515zpDr43C662LjJDV3DVShRE6QDwmaAeQWrBxuc8a6B4qzWoJLSoHgk6w",
  "key32": "hWYt8daFVWnNn8oDmHVFJoMH8vomgK81mApvrfXPfBCTHZiEKKzoof8rn8EqNxCCTyNh9q6vpzDtUTFfwp2T6Zy",
  "key33": "952FipyDfV4bgmyimPaPpCaQM5EHnV7prf6vN6wWmZYd8E2QtkQcjLF3tyLJjWm2gw7R1uAoEpwpVqm2P5VCYT9",
  "key34": "z4ssnSF5152it8Rcy1Mkc45woDgikjdsN77RfjhsFLTK9pVkMMB7ydfJTDVKE57h5KdpGNKYZKtfuEk71mZESPQ",
  "key35": "4m7VXpW9yXuanczf2C1L3n8FitfqNEpgUEGeuPvbSPmP9rwsK7JWLciWaKqo21BavzVXGnohhdBDokLq2pNQimoX"
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
