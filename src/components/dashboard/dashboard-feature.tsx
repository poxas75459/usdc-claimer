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
    "3f3K6QfdZMFcPCZnGZmqowQda3vmEew3gsJgsdgcaAzapd64F8trHrohhx3M56dHCV36DD8yttndz5G3F9ogh843"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZxU4eV6iLUeKKxAiT3HDSo8UVXqYQNnMcKCqSUnY1hwfhvhdYv3cML8SkNeZt14251QBuDtJVaepQWFAdBBiCm",
  "key1": "sWvimDrURUT4BNnEiHgvhzVVkEJM63kmfUHmxbSL2fb5TrSgq4TtN25kFJRepvJjQkQkHsQhWZPssFSvZpLUjnK",
  "key2": "5JYd8DweBeSCzs1vs6rvtdoQdD1G9G6bGiBch3vG5EGwD1sDy3kzVPKhc5fpqMqWn91C2U2wvfR8pzUrn7QnKrhA",
  "key3": "5H6qpjhXuNmdgUMeEN7y6nREWbKo3DaW3rKZew6sNoXsJZLtcN8H6moXkFz5nmVKMewKGvrd3uYLbhuSvsxQ28fV",
  "key4": "5Ao8FrCcStPAkgQMmXCpCPKrcsb7UmZsV68pcKYZZftU26nVQRPP35a7mMzbCPRGS9aEEhGrVKDMupoWk35ZpXfA",
  "key5": "3d1RkR5MGWHY14CRKwZStwDRRnwnSCuiZaCXzYVqt7tvfv5rAn5NkHW1LfUPsbYG1keZm6mo6Se8TNf6qG4qaHeX",
  "key6": "4LP9gLxFUk6jpgNfgsrMr2qxL9wSmCb3Qe2qJFuZaf5u9iqakdQeMmaXN6KXY9KY9Gveu6HmDVMAQRiqfz44Hv68",
  "key7": "52WNsYZA1jqXMJYUb8eH1cZTnzmwdpKUL4VDT54cPQfzryoRbMfd6GbspKG6d4NsyhCneLLKMzuTGBSz1HVAaHVd",
  "key8": "4zvcdx1dEjeCgJb7kizmdLxpChPqfUZamAyVZy4ftJpQHmDvemrxpiswikD12DvZSeJZdFwdMUStscjKJ9pp8Ct",
  "key9": "32N5UAa9dByL5hEka9WfuwfJ4bv71NuWkCEiWABkUP8kVSKDde3A7SZM8zkZZL8MxZ57t2Qi1wdpSEseTDnKrrhE",
  "key10": "5u1gzbp18fbQ5gmywtv2ejfaH3Fin2bKMwVSmotP93nbadiEodUFew1AmoEUZcLRz3kJMejjwEruoP4UJnRMgrJ7",
  "key11": "4jVhi9CL6CRSXcCYGUwGLtCMDe9rW6FHfiAWRz3rGi46rzjBrZVAMXaKak4djSBoa1SMo9xe9V4KvXBvd4hvPavX",
  "key12": "2SKitTs6CVSsbqGZW9fksRFfQzgwe3Vizwh2P4cYitn5u7pj3TUK1sWJT51ATuM1JWYmfN2bKe9XbDA4h8ENGvX4",
  "key13": "3A8BuQm8sitMykBU6ndxbN1dVEzcGreirRqyD9VtZD71vSDBpCy8DR9aFs5obGGwyALvavBagUo7bNkV9d3umBwA",
  "key14": "2x2ZGhRebpV1ooArExDUFpCVb69XZKHBYmk8sC9dDQUfn75aZexoNV11a56fnKSGNZS6SGqpYBoeD7V7RyT4TojK",
  "key15": "62PW8G8EJRmWvbT64BUwrvszDTSc8axJVzapq2gi69XDMiakYavk4NswDpMGY8ZbwMCccaHm7WtbQfBWUwFAze5i",
  "key16": "3X6zzinJF1w4gWUvLWbtfC4U5KD65qeBJpBpb63UjLPgQfgJxF6aQQboAWehCjsyifF7KccGqwYvBQNqSiWYwjao",
  "key17": "2xfiqQM5wzc24hJifB7DD5Pje3SY256fK3LfrCjUJxV8UUv8kazt7n1CgdV1eVgw8WTEMvmF7ypY6QpdYofR3SMB",
  "key18": "2L1NgH5BeeQrcAuu2obku7NbtDyCfECMcX4PHx1mYRu2a53x2hYL1MKioQkVKV94WCzCi2weVnMqPBF89buitZpg",
  "key19": "MAEe7EqUPBd1L5ZkyuNRUz68p2D8Feg17Fzj2oe1N73t5hf4XeLULpJRb3Dwn8inh1wYcNXV8LgFcDLtMwhB1YM",
  "key20": "1s2296kJvnk1szdqL8eTnxRF6r7CNbqsdJ8P1ANWLuroYhZLzMyfSkLjfSFUFvM9femL9LuUVxc99MoKK5fpmZk",
  "key21": "R2u4zvpSgMS82rRiQWyiD1ptMChvNctPy7MgFhBLPsurVJqzEmPD4bSvr1rgiinWQbbWLxGAQVELgEXid5PiiEN",
  "key22": "5yE2NtvfYxoNUCaZHSv8fwamhh2e7CZ1h8xCmsTeP9fcUdLTL43DC8R1Gk4QvBxCVmGEmpU8NW2AKwXbcMTit1Lz",
  "key23": "4ZFAgE7uHLwG6nRBiEPd6FKFsxfFJ1FFPZC65s3i9Rou8dBL8ycW8RsczCHbTjNTfxe4h7PmN53MqMWug1AovMzx",
  "key24": "2GGotB5mH38JDMYy5eQhZaUHoFDs77bfgdNEBhqpaTcgqmxu2oFyes4ErFS7JieoSd4WztJBt2dJknkXd8iotJXc",
  "key25": "2WMR3TEHUXpiQJqK8858B2pifu5v1rzrWKA22TbvD5xtFNuJ6y6yXx5kEbTJGC3MK26Sd5GLV1ZvEKXre8A9sJ3Z",
  "key26": "3W84YMknD83xXgd24h479X9G8pkE6rpyZmSA5T3Q9hZRuwwdbJwLCpsZPByaKVj9Qiuh2FUJ9bA9VEgDdFMpCr9X",
  "key27": "2fAVS2QG2gyjfXcA1MJ44xs9uA3Fhmd5a32yF3ECG5FaqpjYTAMjVzmsy9YuuNpLkCyCTNwZcKcXnMipJrAgiXxZ",
  "key28": "5oDPRcs6ej3d1znXaQQ3wdxYBvCZYnc45PLuBWKMRUc3qUA3NETHbfj2Z5nLSyYBx6C87fxtmcbW8E8kqVVA9KwG",
  "key29": "2oqgTJJGx4q7T5zFvo7UwHdRmuXKRuFVc5kctr2dSdj4CDmZsXQKWWJuq38Lbbi46ANmzEyt6p4zAPhCL1RtNYnR",
  "key30": "5HoZJvnYMTfP9Xstghm9dQKPvJb9xbgT3mbq9RbiFpPKfK8XshxwL2Nco3Lx6WPWJiJH1hVEZe1bku6prsppjCUH",
  "key31": "VXCz9viqntyQ8YHpxJVBPBWfyhrrZjFsyURPhCjpad7XoTSs2PnhMzN3uJh4QChybo6C4aFHVN4Kt3uWfskxkAK",
  "key32": "63ni9g8jewRNxGhi4614U8kmKYAomgjcUeoDuhX6XXucu82mKxahMScVpHrDmEm3cNcySRuu79miDrzZ4Cu4qqjB",
  "key33": "3AgWVgUu6tm9Kk5w6mQRx2ofs5wMpWmMm5ssXQhj7r5YkZ4rXXcXGu3JBVac18kzE5zMKnnEipdDFpEcKKkENzGb",
  "key34": "3nfueBVQAvxWtoY43pQ6MProEjkfh5jnr4o6LtkPz7dw8JpfeE8GHEhcumjNKbsiiMcUBtgKJigyaysDochXVPyp",
  "key35": "2qzLQSkiHz51wLQQYCR5SBUErX7BTefyQ1biwX3Afb8pJ5D6FNEgxr2CUMTxoxaJaQWnPSh8z7bAsWDMU3vwiTgY",
  "key36": "5ohfy941FYJExqogZiNVKG541rFk2LLmWfZ6eebHBPPHdb5ZhgnvUWPGQZhc2MzajLY5yU8nc2ykqp4G46yzUjq4",
  "key37": "3d8S7VGXeT3Jg6osiw91naE7VkVTAxgXCmxfJJ5Svszkt2Ery6y4FmbeRYmCL9xGmsAVc73UcX8LG9u1pvsHovUv",
  "key38": "3wS7WgL85erQsWDaTVtSAvjgaP6GsYYYih1Tgjc8yKKiePiHNvm3JW5vQaMdKNMyQafQWnNnXPyXe3ujmrdouUXW",
  "key39": "39qGaQXNUHuNiKcar6L93GnahdUKx2qdXTJ66VYbC5XSCdyDySxYfomaZy6M6ZFijGEQ8AffEHLqsywndXRec2XT",
  "key40": "3kkXgz6k5YAvegNZbRRtDga8ir6WQP1bYzQ8aGmUo8oQ2Xans1EkxEkPEHEur7aXXe4wApL1vw6ovG3XiuvJkpoX",
  "key41": "5Y173v7Duqa5EyURPykpjSDwXBa8cBy7YqndFfvW7ecRMqc6EuC29f1iH56KFfDxZ6peJg3PGX6ngi5Xjcs2uS7C",
  "key42": "5QMvLpnR6kno2XE7RaCgQTBxQBKmuFnKVqy57aGa1rxad1ggsxYGkXi6UcVZCHEouNBDrSkf8mw4SJu6HTHepKXi",
  "key43": "2hsXo6iZMbwEm7KDx6iyDmGfHbGTvzoLsK4yaWXTDzW7XXTkeDBm4c6o1fygMwFNLLhdzg7rP9gKrdZ2UxAbj6Gw"
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
