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
    "32pWfiXX2qJFJ36dpsGm5NMWCPVyJhh587FNLUmzFRsvTWM2G821k59MbeMQA3WWV6Asqx9d6wEJBLr9Typxq4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzgeomXLwsa74VC6DqDHQvAkTUxC38LDmHLrCxin1TTM6gX614T4pf4vfHw5tW8mQatJzNevCuXwYWKkd914XkT",
  "key1": "4o222LB8hAp1MkZgnkAg7gTwjVRGRZbVmMavmHH9S3W9c3pXsFB799AWAibs2uhT28LduGCL4mzWRsTGv19su5Wa",
  "key2": "4eUb1bysTezfEFUoZh5YGGXyervuYDVgn5VUod98gXgPfRvS1KcEjV1BHEkDJa736563SRknCjK5wWyJnbZXsg2D",
  "key3": "KmGJN5KNj71JrKRSgddvz4Qsbkob6ZrDPyoWoSndQRKJ4k3yvswopmcvYWwGePJv4aAkT9XK2QYXwoJFGKzTYrV",
  "key4": "amP1M48XYLxmGVeryYcU687r2hNKFJ1LnfaMETjpVSbzibWFimpaQjXh5RqPcBo1R7AQR5Q7kRJLkRN9KYiU6GF",
  "key5": "yGNPzBvn2ZpD3oHxQ5bReUZaGU8WVx36oKH3xsLCA3M7a3mdMsZZ4tq7av38eRsixh8NQQ6J9SPdNGgRzvT2GL9",
  "key6": "4n5AWhG5FWczygYVmCBuXEuinSEGXcezHxK8AvH2Bytxze98vYbQDTZaRJMXqFj69cHPMyodafExB2kEqbWPwZuB",
  "key7": "4WaMMo2bzUyvxvJcybtXbfX41MgV6rU5PkrzGFhbgYbz1kNBAzxH86T5JJbwS1E6a69b9pF6zEpEiuFcYqKSPfCF",
  "key8": "o18ynZ2T4jpybyBuiGgXnguVxATQ2R1erM9zKQ91WyJVFhY2Hs4CNGuyEbUuoH6G4ib32Q4KNL3tHea5rrJttBA",
  "key9": "2VGWW2wusYeZoY7YX8jw1WpnxEzFKVk3gJc86H3EfcnwjeLNtsVXqxLTnVtkDu2XPD4Ab9ixsU1sSyxUVYBqu7d7",
  "key10": "5MHeccTRrJchn6Su775cihiuY6QfaCrNGrzwvEdmMvTwG8ToqcvTgyWLUsRyRmMkziBYvFa9FixCvQX8UAyakfEQ",
  "key11": "5gkdXxHMqTfcUyMRkX5AxhDMAsqNFsUCyYcDJ8mKrjcFKtF6dBVkipbGArccEyn6ecQn4rxT62jQHFkuG77mSVUc",
  "key12": "2XuNBhyMQKX8PhrDiDAvLK1Dn59j2oC3StPJ6b3eLja1XjKEmomsakTHsPt76qxa5MWtTEEPqHUdrLhBKQNwtrET",
  "key13": "52fp9jMxUhdxeUpMQgBFD97Zq59Lo3vL29sMkNsQ39qvQzm5dKibKaghJJ3LW1Xps61JELTpWEM9kpKTXnw39yie",
  "key14": "3vLPwgutgnwBsdxdtCeN3M6JbUH4j7pAuehEtDMDzhJspWwksUpfY36UbcPHRChDpvFg9tzFfAUJoYejR27wwdq5",
  "key15": "2zU8ZN2iwcZFfjrt7zBipxpJyKjtZ3QKF5KXkxRkxcPbmQ525QdCZHAxYZcM2xyrAwhsH77VF78dsWrLR6XQsga5",
  "key16": "5edE1cq4ebrK89ERDdc16KkUtUZ4jx2PusNqpajMW9oMPnJApgFnPLQh4WpCLvf6h17BWzChABSjLrbQEjguqHyq",
  "key17": "Xks2SpPdDwMTMViprNDGApUFsAzxHk1fzALuWTLwMwffn54P2jigwAo7Cw2551jFZhvd1va8AWy3CvbKeWPGMB6",
  "key18": "24H7zHLLaNPAJsT629jwE6mQhoZsA5PBMjYJZzFYZVe14uZRxakMNToSigt26XXc2sCuUsfcJYX6uMALHAR2AR6w",
  "key19": "5DziWUx7zCvcWRHMme1fGhLR46QXJnrGddp2iySDwKMwfKBuUdYjELK42xNXrCxTRttsHdRjNyFZM1UK3ghCDJ7N",
  "key20": "3heLap6W8yXn3BuC4wPDXM2yjR1NLzuC7qgWuP6mqQnEbEkpeETepjS71BbV18hmbVGKZwU5neC9K9rcNsTVwBEJ",
  "key21": "4JDQ9Xk2Nk4ueuNzwCwV4RVWz7tPESchrnC6zhwCjQPJgC88eLUTXNSncpMBCERV8tXXQtyjG4GKn61XghFmXmYF",
  "key22": "TvZidxsFZN9Quq8nrwizHmC3v2rfLt1SxkKWcmEHfrvv2cfFCrzVgA5QXtWiy9ozxgTM6FFMXLnRhcjsfyxWA8z",
  "key23": "5W7CL7jAygatxZk2uhwGJuDRDqLQxqRi4bFj9QLs73z9CNBJMYrU3C68gyvaWUjr9q4yF79Aw2sH5VFhmb1T2LUD",
  "key24": "AiEoAap2YeUcu6Pm42yD9cNQdf546jt5mxLtgVv61YuTkWxWUSxFKoh1bbNbSQgVqSLccR3KA3PhYha46FV3Cf7",
  "key25": "UkEskZTHi39vgjexXGWgYQp7gKXxek6Vgu1zQLo5iYbtMPg7rD1PT3Uf2GKKwb7hGtziRay2cdAG2rMJZ9Ps9By",
  "key26": "5parZKZfghDWhMsV8B89dU2nXGU8z8ey61b9VPnsECYnJHG211bJwEG5yvjgHvW9HeJXRovGuss2sco9hSfT4fmp",
  "key27": "2KTbhqqsGmeaVCRKj3hMcidfgkoTrftQyG7bwqKu5ABaydX81CfoT467wWrbyc3wc2kBs6dxuq9xRUdPU5vRHwHS",
  "key28": "4WPQKBUBEJp1tJtTdioxMJVzTWkZPSN8GjPr5ZWY7gvu9vEUeV5G6CZvKVMMLq4rBLHY6U64ybrBFK9iLTkuis1s",
  "key29": "3fF3r7JaQuS4aJwXXDQjC9dvrwBwQQhz3yYYrDxzNCQ9HKHhZgMSMkmUvMWCeFwj4RX7QzRSVYJyX4QXNgyjdMWH",
  "key30": "2YXeiFFzhE59uYVpKp7vRY8hsPU5XGF1Nmm5JvRagSfMNQshHY1XYykGQLDZNe7W1zVm6Cz9As6Ap94Nqf1pzPty",
  "key31": "5X5gL5qQRotpyZ6wJZXmdzsTx2xLSArg8Cd2aSKUBz586PQhJ2WQACWrd2GJUtkKAnYAvd2KWFjeYgXZWqyjdvUh",
  "key32": "NR8U4hJgTd1h9ZxeyAeUZpCgKCyAh59cL91NxPx5bY8iqX3qNq3fNS6QD1Sdie3HjhhhJdGx9Ro49d51jkyEbbf",
  "key33": "bYr2DAihVytDFDSQ1KnreYuN2MkzXfboUdE7VrZNCNZbUm7HoP72ukrsizC9gb693ZVuQgZUErWStXPs8X3psdG",
  "key34": "4oM1Djbu5SkkvxN6VLLqtAWthqNysh5meF3f5LTzKndiwMiX29CubakVxksecjs2FaMfSdo3octJUsyaQBx7ubPp",
  "key35": "1XkstedbYfWFXcv7hPZib5WA7VFK7PW4F51WawDNnqyArNiAbGW3R8L28QobbhnQDJc57GD9ZjjGpxh1LNr13VE",
  "key36": "5zh5G9niFiyxPMnZPMKu28VuMWGq7tUxtjzLepQLjQ2uaNxv9DGTdJ7YYTRc6B4vpW5aKcbScEB9xYaDw7pBZ9bz",
  "key37": "5Ytreg6itUAkn159Q1kiotW9qyK2G6qpktkHrxv4qjycjkKtDi4FYfe3v5HFzovL1cvLURGbqsmohhGTAF2Miyq8",
  "key38": "Jkwqe16b5HVVVnioRrAy4RXdNe3wCqifuL9BveGRk7FyHob4wPXxahMbFa1YRp84jxDMRUPBo1TSwnMtTdLcB1c",
  "key39": "2gsEqSQcUmVnK1fYLUMa4b5ARuWvp7BN15S1ktYcdjutKcbFZJ7fA3JuwXZ1vZC95ZRmuyAvEPF4ZG1uigx651Np",
  "key40": "4zhMc7E7dRmEj8GSgjxBCYqGbJJuTRpCQwxLgsazgGnmRHPbThp9efkkWMegyJerwfbfpULEhqCoLcvZZULKFkTH",
  "key41": "329diR3ieocY2ZDRFafTZnJb9C7kAeFJJtQQTe7eyNDSA8GJx58X613tGmb41h3KyerfpJray8iX4Lx1jTqr9M9v",
  "key42": "4PXrjTqRBxFm7hXYcfXrASaRpmYTd6GdBFghmgp1r756bqRzNcLj6dasDH5MFoeBvtweGJR5AqZdix8dYHSwHkJB"
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
