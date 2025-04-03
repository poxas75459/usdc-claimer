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
    "3p9aRw9qo23kZbz9JVC7dYpWjaNMHbteguDB16XPJvRP5xMkjto15gBb4zETwFft1S7dtwBkntnUbnPSZ5rNP4mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kVZKxJsK14kGtBC6RPCW9qZnYKAFLwALZcsxPu3T9HgQwfPpPgkfZGRQdC6ja2k6CeoiEMVXKZnQw2K8FsTN7i",
  "key1": "3rPWUGzKbJbb2BX3M2UL4ZQQ3WxEnV6ZzfKggVUT4Qu3ek1FaokcxjjbVpKo5CGtvadLxuCmEmiKAiKiHAWHWg9Q",
  "key2": "4a9XUPueZRkw1Z2pAwY5mNMWvio2KrcCYyCRYFDreS1hHabUmzvC4eFR1Ute9mvzH2dj48SNt7DmAs73NR8oahNh",
  "key3": "KNBD5jA1mMkwMGqctWPdEwUa9TBv4SNAXBsGMVm8dFA4EszNHg1peNYrMLoMP8VGikzQosF41CYSjD7skFvKUBa",
  "key4": "4HUSQdvCHNwXLUjPDVrtr6M7eYR7FzTarGn7TsTGYZSe9ECaDmh73th95B7Uz7JeBGFvqHY2zB7BHpwiC8HVw464",
  "key5": "3vK8w2pAP628W9NBaaJZFWsY7VJgxJk2G6LK28wkNsFSb8r9KGoKw96M9WEwesoQx4puDJSCd9hqJTSqXpKJFsg7",
  "key6": "35TNaQGkwjMFV8h3cqTS1yKStVhxYPUtEtrQ2hb9zFLf7G7PEhiyKoxNzgRFHjLDkTaBLmwdzaGmRvVbpwrELtpA",
  "key7": "48ywZfTwLKp7eXu6foXb4dzmCmvnayMsg8nXxGZLL7R9erfVJ7cba9oXhtxEuJJgFEstiXNGJbjZXqNUU8H6CY5S",
  "key8": "2Yft5Xzjbbc4kUZe38pQ2kis56KPBMZFQaf2MrZ2V4j75ePLuKF8nZjvFQqyJVE139gH69C1NbpAzUNdGF7DbeQr",
  "key9": "5sPVnCyjLZ6Whdhe5aMa7hrGNZfKYw3fhd37LEgsfnpUZEXtGqErTF6Kx97M8V1p8borksXCunZe2G5Fk1Ch3L1a",
  "key10": "2uHTzq5RhmYPWGJvNdXQwXfRPodfafvd2EU8hTL35nyqnAHEUKngUg5mraZj3GuUSQQfViw6RVKvNuT3jdaZAeDJ",
  "key11": "4cCGcb9PaHxK1QPKe2A92mDTtrZMJTSxYQz6p2CwiBAEePJvLQhSgoW2sabqND8MaprfbxP4YBtptogtkb2NtJMj",
  "key12": "4YvinAffjpap3tfEvAvvShLENTKUuCPKdVbAw5LGRCy6ago7XDD8bY9tmy9Kq6Y9zBHmrLoEuUU97QafSGqCubth",
  "key13": "Exh2XTTAk8RmWDJ6dLNKPbr3hyi3TEhMybZxkcRKU1vxBtndMfdWTxfCy2sZF6xkG8utxMs2eWw2L6JYmNCfWEK",
  "key14": "3PQxiqx6cQshgNA9y2yMVBh7kjbZ5BtHYv6YrR5Rf6JtX8Tzybe65w8Lh1Bz7v8JY2RtagJShUH6Yj5X9ZUR9fpU",
  "key15": "3XnbWoErewYNbb8g8krZD5YnKjzZmRXb4e1dBnScxoxRpsLYyyHh5qm2w6EkNrM6c2vEozYuhi68P8xKiYU8oErm",
  "key16": "CGZdbqh2PGkYztVi18ppLgsUqfVEY9Fx5CkAGpW8AtsT1WC45WQ1FaWsdDSNKTGkbJTbB4aweBR6TgJyXvNv1PJ",
  "key17": "4VV6GnqrnEbjARkve4WDTmiHyuYZ2YRJRjTrhypYNuMhVcAtVbHGeQdsWkuVE1xW4aU6cYj4UspcoUsDPY4u4gGk",
  "key18": "4mt5sJKt6cx7Ee8s3xBTj1vck3j9Tm9g9AZvYR3payuDY7dvswXoiKQJUZLBx4bkMnKPn1DFPV9WoRBQCqDgpixJ",
  "key19": "2TnB9XVN8Q3ScPuFSP89bLcJWGPAUjgrJrCE7jJZsrpqJ5HjSsHczCgZkwMRDNfA7vmB3uUVADy6LyVS8uLh1SS2",
  "key20": "4a4Cjtb1QUKdqzbffs2KLE1DtwvziyFXfW2sUZV2Hqkd77hFjB3Yx5AYGLJaHSLhHhuanmUah9wKo8UdU8yKfYh2",
  "key21": "2LXjDAoEU7PCSUKZEJeh7B9yUVePsjyTycv6fDyJAdXP7i7Y14QLjzWZjeBZEFzRH1D9dK5vJBMPQfD5arMy3iNq",
  "key22": "3oLeSTbAbrE9yXHGWsRNbNcizmbyrkANM2eJAAXCw8DYSQBuQGj7TPfdjJXJTUznCUC8vP4bEo79NNZTRPfWkMQ9",
  "key23": "3y1A8mjVFp1X3cF1JtPUTYEiAZ28cSTmkLmqvoXXx3zUoAzJzcz8QPic5EXuePKH6rwUT4cs86i4ChRkZcgUEyCo",
  "key24": "3sutmDdDqBErsU5wrEa5jWWQh9GiZQPmjJKVE2XM6NARpVmZv6b4L44kg4i8RB7m9wvMMBaYvwgfNWMJTwoxhdop",
  "key25": "5MdD963oH4StDD7jdANBBi9QrUTA7zmXN4TVggqg8NgM3VbJ2V8rodGLoVwLYpMrrpo1pjxaKRDcmMsXssvwaKgs",
  "key26": "3CgSuRdxqvUaDvSjK1EvqQSQC5kfuKSwpwGhJ5bbEesLNcVYbkkCfhAkr6fFxxUzggaqpdcPUz8HMqFg61MCPywL",
  "key27": "31fkCdk7t7RyV9N2xM2C3N7vfFZAFBPTLqXDUp8pJWkJwowkGAqvgFXHgCtdybzLfRZ9pCzQ6uhVGyewCgbWhQCa",
  "key28": "4d2qvGBGj2uL6GVYVajbmZ5Zcuwe7E4WGtTfQyBCs61CrDtd7r3xWhwqXchCbwn5XqeL11bHgHBKMHiJo2dgCQmd",
  "key29": "5jXHykjPDe2g2WBqqDPUfa4gw6LBpjDKxc175ehaWoKgs1jgyo36P3d7eFUJaR3hG7fyk8YNKRBCnJaixx5xLQTx",
  "key30": "5iyP1o6Fst8waAvY5PGHrZY9jFr2VZHWHNshhBY4mk4AmYc37xfkLvmkSgVGHWunfGVgyiH91Ls3gimYzX1RqxZh",
  "key31": "2HVXy7DHJ2TnBwUTP2nZZUoSBsViar6zVfxJ69wnZK7UAsDMzGUUnaDKqxzuTriE47GsNiQX5eLZVxKq9SKg8TQa",
  "key32": "54cVRDQrELtSp4wH9aGtyyMbivon2ob3AFm4aKUQqpqaeEi9v3t3QqvQbaJuKKYASsF3hVFFEY32f7CHH2gXBfQm",
  "key33": "5AB1ASpm47AHYy42pW2pdEwBd4YCL3wSRKuEYfgyCfZFYeTTcFBFwV5h2QJ7Rut41scqCDB5AHEzrA2fdrS9TBNW",
  "key34": "4mgyExEdmXDqxmaUsNwqGAbiguAZLcRSKM4koyfnwnoxvWBdbkNvkqubuNUHtcYcFFDNdKU4xsMRW66XizNqhbt6",
  "key35": "3w2KRMjmmNsrRx2jWut4zzUsGGuHKQ73gRFKFRuCC6nh1qjcK56gfuaEePemWmtVNmKN7XQUSPr7TxPa6cKAtEUb",
  "key36": "3J6CGFf5xN2QCHUZDrACr44tpoJjv9Rn2oK5J3oDBviadDmnUojwtxHEX7uTkVE8SUseM6W5jNSBfE4be1794Xc9",
  "key37": "4X6zW6q84Q8GWoNARZpnybz1qy17zCpgRhcqurn4WgaoH8PEYhivczVFRTb3fgiM9Y65gsa1Qct2DUzVVb2PCs8M",
  "key38": "5ACgLkmTxX65A7953y7HhzYYnwLEu4mmhwb2d3w22idXhjbz86bbEvrxwaZHt9YMvhwtto7E8CKXRLkENyyLRojD",
  "key39": "5bA1z8w7vrRoxide4t4mxdDhbUWFa2xgULkaiGeL4ifJ6Ur5iCHT6m5FFHMmmG6SPcUfsKiHsSiJD3uE9V3rh6PM",
  "key40": "2PpfLM31pfJs6BBt8mMGwDpNravR3SMDLK1NpU1Bx5fnDdSnnyZmwmV8GGSmfAWRKKP27jREaoA17wkwLXTxtgqo",
  "key41": "2BQGDRh13EBLea9ykGWXGKBX76KUCuroChGtBbJPasXpSNakhNhVU9GvwdRH2j2eH6C9Bx45fxcLX75Bvpkkb2dD",
  "key42": "5Rb1ctjWUBiKRMzZdoELi9DQ9aqSg6DnVGc9hsY3ucXL4HWa73TfmKcHo48Cd4rqbLu2XK648EYqW6zFH3XUxAGR",
  "key43": "5kU5zGnTBKF7Q36C9WwYZewpdKTAaH7D3BDkAg1t5ywri1WSZThoM2FhmuFXgAAji1EGQi243gotG83TXmMwgwgj",
  "key44": "2Qp7LN2Snm6jnxU1LinJUXr8rxXwPn6D8DXYGVmRXwkpYsav8CtjPMi4tJrm7XqdNrGju7pUUAme7XiRoAnZEPgJ",
  "key45": "4gEZDvUNunowtAg28uWWDWkTD7QXvJ9Uk7wyZ2QiiNhhj41xQ1ZYtYy3vYuA37UQGSaihqAm1Et96k85qZbciaTG",
  "key46": "5wYdQUrAKZnCLDbdHoXJpwaJYjJDpSgyQuEZV1auWwCmAZJhSUpqQa8fH9wtPM6cdz3g4yfvtZiPFZCS4PDCbRD4"
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
