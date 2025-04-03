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
    "4DfMYuMsYwxriJGnPCrd96WhJGtmdSAap53dVP5wRmXGiSooa2amMYH5UJc7NzBvG9hk229QVJfds9KKCP1FMq43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65BE7ogTDqNCckrEckQPZyZp8bSp6EkJpcYD9jt1cVUUeWvsFg6ez5VqE1UnV5FoK1Hv24mF7woPtJ9XMuvDfuo3",
  "key1": "FXb9bvvoKtkMAa1fRJgLU4J12vEfPYNXumdb7F4eqcUa15DRnUx4JDj2bBHwyubAofhsgnQRCLGbjkAbiaxxXob",
  "key2": "2hkX2yy72eScm5kfwFLj6QphZrEsQbUGMG89TeAeruzuZcESdi7ssBrfAf4P6LVu3yjJyhBAbCrd4bYReLNhu9TF",
  "key3": "2SDPzhQ1zhA61q3SfXq1yKv8DzM9weSjysGPhAFRF2LKjRTvVyd2ABD9G5Ta85vvXo5sPwpJ6PBwV9MNjB4xcADY",
  "key4": "2a73C5kLMSeGn3HqcxymWUhxsN8B45388rdoPNGJnqRpXvProovcxYy9nApSQPRFLfn7SsevHGhXALb3NdmBfCRR",
  "key5": "3oXw8dzVTR7ZrmqDvgmfNshe4WS8PCZCXyp3D8geTPisLYpEZCM8BiFqvoEBkfAChzWM1cLAwv95mMz9FZkch8iJ",
  "key6": "2N2sNHHYUsBp9i8MiLiKBUBiw3epLh3Lh75He85yVDnCqvYovZKn5JiSfkRTgu8VZLEv9P85PXta5uPvi2145fUz",
  "key7": "hRQJbpKNJAMNsYP45AYQ2fkxprKsCZ413gEbtbKagFRfthAB93XzVFfUHoBr9g4HLmhuQdkzbTZYe3F2roFbWwk",
  "key8": "3PCheg1PnLD3DPDHg9FsZrB2KjTeFitiw5H4oJq7CE1ktoFBxvi3SwvUL3nUPzgGwfVyNT7kms6Kw8DQyJVkdQXo",
  "key9": "4gKtqRN7T914WUB3gFV2TpnMZXYXrBLEDCh8fciwuwUkefZEkHSB2XHqrYZFDDueqfj3XJ9kiiH8iCNQHRvNK6zB",
  "key10": "24HJdC7UgnFFiwZq2mbYLygoChPtqbG4YQNw5pHgnnqBeWsxZYZgU4q9HPBrLLpbm9NwY9Qc8TUqRHi36a4DcqHu",
  "key11": "4eFMu5jND2rasw5xaf7H5gsNTcsrtWPiTQMXbu3c8v4W8DxxYreNKDzLvoaXdak7ctzRaApGz5sxz62YsThvHFmB",
  "key12": "38Xms21pvvHjawruNmCAdw6efiDRE8NVrsvcAipebzxpQD9Q65ZwTb54PGYgW16Ji6bQE8SgA1WPabJbkTXeD1hG",
  "key13": "4WoKU9xSDiYFt13U4jM6PBxtyYB2FZityK2hsqoZbHbRBGvefo5jCMRUCsoVr4qyqgsJnw4A9Sif8bm8Hu1pQVq2",
  "key14": "4xateeC7enYdH86zfS4Dfh38JETWrDaJWTUNTLEzwZ2o1eZyrfzevnTTCXCMf3yr57yr1nnwRnsvbcs8H1MijB6P",
  "key15": "NgC8j4dtDa3aRdyY1oKbosYFZ3DYKZrxZ6LgVjTAmgQpYpjy1vonKVkXMkzQM8G6ARCa5dwZXWx18c3zC3ZC3wi",
  "key16": "3AQm6RPyKFqACdp8HoF4WGDzybw5u3y2GE4iEYvusYTLmnZNiWABYJ18dbHjBMTtWyjXL325vV8dgf949GrPTHC2",
  "key17": "uS3ycQkoDmjqyq8Y9N7gQQQtKSgMB2DrTVr12dP2CVUu7MTboSwUdCy2tgFPqY2akBM9Tc7wc2Sa1o7bWhWwZq5",
  "key18": "4eib48kCxt9KzqZviQCp3zzBnons8jHSriEXxaQtgmGxCidXtJnaadDiJNQcfa1vimdwbxEa75ebAS5cWuTmdbwH",
  "key19": "5ty2dQnnJsCn1Rr2gtbV7CkDwkZFeQEwkyvcFFHeQQnPZKH1G1TC43PEabKDFUQrbedfovsgMULyqUPqjwriM64c",
  "key20": "36k27WEs5owA2GZhEkVEDdEMiVdDXwre2XjX6Arjxr2hfrcZYZAU6hsLCSRzrbkF5uwZbA9xG55Erhgcopt59j5V",
  "key21": "4cU8k6nnwfsQAPuNj7s5B7kSBFxvveB9xsaGyyaV5kFuLy9dqSCfKxwk7hypa8e4Un2wkNjA5K4kWcdNYrYmtTZT",
  "key22": "4jTWBqpRoNkwJVUsWo5GYeMpwFaH8vq23Af1DgkmfT9XhZxgZdvqy8gLqmSdYNzQDNPLZSSJVxbbCqWFrw7zvwSp",
  "key23": "4tynKAu9vZh2HUjheoovFCTUgQjHzbKUzqnUmyL3ZvbZNRe93HLgcX6TxnA6ZUkb95rYfCSbpNp5u52r9k94ZqNo",
  "key24": "5NC9dv4AD9rqSXXehuzEtbDyUBueXZ3XBzHBCarHruUDAVsFGYYGk19rxNBWLcSqz4ihN7gRbTvGAuC4ruJhh8Rf",
  "key25": "ZBQcFCXr9LCPL8H9pMFGN5rsj9jFh9oCL7wtcpVNoahUa3jm7pgbZfpH6W1iiBNFt4a6YYd2Eg7GhE24zWnJj8p",
  "key26": "5fmQWRXwN9UTv4wK8Kg4zDiS2rVuoyq1HctocyHFULx64yJ5vcnHmXgHgwWjncsjmx7wcSvpz6F7ZW6apb2Zb52v",
  "key27": "4iSLts92HZFZUpAv2MtkJwH1xK1kGjD2ohcZhh8ZN3MXZYEADwDpfsSGNf9m31X7FfUV4hxLhPYLi7R5U2R4mh6",
  "key28": "3Vir1Avuu2nax9h16U8BxGxnrtX88NmStvEuadT5ioVWVChzLG6qcuzd5q4esu4ShrZ5Sb9fqUc2drYMWo1Habre",
  "key29": "2ZJZRpUmzXWATpJcoRgCgZKxLemQVu2zcmHCRt47n36YAMJBs8pjazQrrytJwyBDpX8Ri8S8JRwLM9ZBb672NyEC",
  "key30": "2xMQ6wKvAnF5jqAsaszWA5hBMTDRwN8HSyAWE2KE9raG9DRUM2tpyFopkhtHFZZEqhd9U4W9Uj9DNYpfpebf476Y",
  "key31": "hQT1bg5H84ahWssh6ydnBnj12Qpd6mmUjyyBgeqkRbjyPb8FTSfxEToLZF3jhm8kp1gMzLx4mMaz8u2RmFZKhUw",
  "key32": "4meujchA62Kt2xNL1NYv4sw9kaUKEBaH4yrrH6RRc4fA1L7Kx673Q3qFKCKu1J9wmmWy47QQNMAiQaCLAejfM3ZG",
  "key33": "58dPp3K6gpWPh7i3WXYVZfhMHGwvLZ2i9KoNjRF8MBduiYBMiCa8CsUGVqcvzpbsHgehE5L2Tc8HeCo5a3Fg1L9m",
  "key34": "5m4qW3pDAjMVFnE1ZdYd1NS6ZqEdpsZ5XHALkYaZCc3jn531vyHLsCRmCjK6Awz2fNa2ygSUUyrCe9p2Hbejvoxi",
  "key35": "23AkcATjzHxiDB6rX75ArkehKCs7eXGta6H7r4G5L7KneoWWsE2ndjYHAHvkGWNKfgJ9aEVHtEMnbYLuyqcQwXxf",
  "key36": "4vWWztQ6idfegzHSPMoagGqAG5yVDW5LpBok5UrCTRij1z2a97nYM7SaiFA7bBLuAmgwHxJirHRvqioqY1NgrWRJ",
  "key37": "42B5pEGNsZyYXNUY9ekktZgknHksYQZEHUvSv6Dg3dmPwhJn7fzYN74ANoAMGRAdoaGBGAJSZCojvn971Aoi8z5D",
  "key38": "5fp3tcsi3qEoa4j6Jc4QaH3csLsNM28tn5St3eMxDBv6pGHbetfazDH4pKuAB8zREyNZ97qevvdDBADfJQiQjB8f",
  "key39": "5CBf7aMbP4WEVQiqi4yqFogqzwvyzjEF2W3sYtk7qZS4Qn3e67ZvC1pjuP9x3qtYNgbrSEBRFBDkTtNwMBhTUzws",
  "key40": "4hGUhoouJ8SJeYbWip3xBLqEgR5TrkXganGKWfcEQMoF9rKbdKLr6Q9ZPyuC36YZWrfcXEUvuUjU8MdxtJMCPZjR"
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
