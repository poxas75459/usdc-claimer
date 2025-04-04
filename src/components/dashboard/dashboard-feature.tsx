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
    "3r9KZKZBGuXawL8HHbgXvmoC3D5LR2GyZ3V8ov6wwv88AgEF6RPEQpMPWLB47Rmgz3DatGWrsXdQwsgjs97sgfmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bND1UdW96etwTXjvBijaPXDQUrTLqYFd8Pcevv2XioyTPFjT2wKEvmJYNgppEEcvexZFia9CxsyqdX4o1MTx7Gg",
  "key1": "8EGF6HjRn5nNjB7QvLBpvupGPpXE5FXEY18yZeCv7zHUTYwBvJJAb1b8kvTtFchgMKZiRE3J8DSsi4MvPngkNmp",
  "key2": "2s7ATuWqMxdf635DkCpE1DajPN6JQXkjvEuDnhE2VbM3PR5XUKyqKX5C2fGc65JfWWh77jJsUAeUDh3UBDBcmBWP",
  "key3": "1dhxJUGPDsXRaQ3jeVVKvNXCE2BAznExrzrMsWajs8gTuiWJAi9soMFyDZZfsbeX9gwzVLALXHqPuNG1jxCGomg",
  "key4": "2wMzyHHqzQTGn6bw4qLy7DiYSmLfMQ99FDF3DcC4vEVmbBWaU2jed3FAcxMWwSdS32CzHFnMAmP5JtBU65fHHrXU",
  "key5": "43FzYcfW5vqywvnXNdvhsnbU8UbKhM3nzn5h3LTGZ6Fk9X9gNzkodrHZtwWdC4GCVxDa26QwHxejMUq6MZ1dCfPL",
  "key6": "xHZ7atHYrzvrE2rkWQUnEWKbGEfjszKAxggwbYFznootY7opPy2jSmdt3gei317Kih6HSQfDXixymWKHpN3DqDa",
  "key7": "JUmxShbmDu4Nn4KPGXG4zEabdeb4VHnMNcXnX1LHu1HbRAC3YoJy85CobNw9cHmDQ8M2timezAX6bYywxJW4Hwm",
  "key8": "3zeSRBsXs5kcuGaSJpAUttP6NWJbLMHn7rqPvG7QKoTccdeEonpmXBXEmHMhs6uP8Nwgmo751HdkUSHtv99FA2tv",
  "key9": "5DVZ6diqwTSGnCcu963e95LysEPN6n6qn6cHkKcfKYn7BGZwyiLdpTwT85tLn9R6WyJGSFCFWhQ1LqaS4XudNPfe",
  "key10": "4g2nDwu4XyXghGsNCz2DsrHeTY5mjrWLNSWapf1B3gUZ8ro6Hhmb6nHpSpvkypykw46FMtaP49vzWth1Yuzi5yBY",
  "key11": "3bAEV6gnV8ti7t5N5HdmgUZoHnG8ZdyTaAgPDprqT57SYts6yk3326dLwDNcZniPjua5BXPAE5FUK5XM3U23YCGD",
  "key12": "3Kautomz43chRJCAp6t3oifLMLj2aazFVj4mT9BQefaAizY3rrWtydYJRSLNsju3UGwdQUAhxoXqW8Bhp3MWJuHu",
  "key13": "54x4AfVnhEeeAKjDBW4vfRjrTJ48Rxb4vfnh4Q9hpGLU5joeF9qJHFkQpLkhDwtPnyfCG4Tsg7jNNDiMHA8UvokL",
  "key14": "2baUL7omURHhD3sTgiTCJwjBnp3mbDttK3wjq6g1411ufLFwyCbkTQVupWKuVvA71x6LgisYehS7bqtDLazig3Tc",
  "key15": "CUQ9XGcfJrYHZGJwVDzAMVAvVfnZWnLkvZ7M1RbRFtaCHQHvFJPDsfhtzDpwKr6JuD5Yoi9EfjkaUz53WfvAC51",
  "key16": "49xob8CuSGAGYoGwsbxRaUGQhZiFXjWnKKdkLdpN5u3hmKf2WX6midTJ8pM92bpC5JQLdHw5sKrcqpf9MobihvaZ",
  "key17": "671qoF8NUS4QZaSY9Z32r2ekTYXg91t6By8KQ3mM7ZBrC36ZCGkjdY7BHzGwsvr1qGKoYr9WBCRQ2tqC8bK9Yrq",
  "key18": "Kpfsv67xk1tLkurnxMzHB3SZbqEzkfhvg1JuLmRRDjcX1UCEeHECbvPdF9VuVrRUCGNGzj9bMygJimFGGRnz2HA",
  "key19": "3hd1DeajPiecy5RgzdcXVJxZDnSW44XqpUnRfqpZ8AVDQqf8Dre7J3rKfpJK3eoQrekX4Mz9X99hRHJwCe4dK8mF",
  "key20": "4vdofWSWC6xKyFz6EpLzYc7ySpd36h8GndLZBiceoDa5VGaVtq1nYpw319NcJayprzqWYRNd7gRC7s5btW1BtQ6w",
  "key21": "MTDDbABSTBnRrvtEc4edVXRE5AJvnqpXuBdqNYb8YKxqeeSgeZH7gRNhMWJtVG1AxwQhsK1rK9SMr6zCEQ5Ynum",
  "key22": "3hVBcypniAVqohDk6LKNyqVyDdJ1iV1Lha7xD75dwShfAKNWhjuig4qEmo2GhDqk31T5dbJGk2gVwvtrxF3YkfYK",
  "key23": "2sKL5BfqQRC9Z12uksPiSbEcn5Totd6RfBu8kVEhXeRMfYeijFXk6yQEoS15KXZuHEManKYnBBvVwLFne5D6ZDaC",
  "key24": "Z1UDeXjZVVApBBB4VmHsuA1pYdaDLxkpsuusszUFiLkg3LKcYiSyQ5NrCwU7vBAbJ94RX678J2oMd9pDaG9CFDN",
  "key25": "4susNPQcmhtipNZKPb2p3owkQpufBjowEEgniuD3PA66kewUkyavEHiGMHAmBPAqy7Rnt4MrKBwXGZEdKW8Ab23f",
  "key26": "2GgsdTfpe5tVkDtkHDexGXqSHpkWyzJ8CaWeEDXf1FRophyPk2e6gcXCRUANZMadSKwzx48aNKiUKc1q3HCLGbnE",
  "key27": "4tfRntgWJEM2h6Y2iVBBj2wTwoxEZ7d5pXS5vfwZZD83dW7V7cJpQ3gLngNdoCWjRLMayrEB7jLM9373tSjLJnhR",
  "key28": "5FvDZZCgt1ZYBf7i6fXaFa72fozfWVzpSQgs1oeDZopxKBv6n84eaLkSDavfHTyqCQGTrsQjuY5bDu3kmNNtdadW",
  "key29": "2o4P2tT1pm6NcBf7Nvs8uzzWQ3PShcJ31pVTUAuWthy81t8su95oJc2pTmHawcZqS2Q6fEaVTHytG8h8GMbn3G5q",
  "key30": "3ZfyDynHyUBLWGaLeU7U9bYxQwKQQ2tKkB8wCGQGUuz6bVcvy31hsmA9ZYy4kZbqP3kZvaEkVKBAZhmScpHKcgyi",
  "key31": "4ukyNC1FWPxAgAipsrrYrBw19WDaCtA8XT2AbsHw9iR826wb7nv1ckE1Mk5RPZK5cLqqJVpQVtA5sFmeL4N9EnGh",
  "key32": "339zy3f1dNU9THkXaVHgPbfEZEb6qyaNtvjXneMjpyjRT1FhGkFkYcFmzhvU4ryUzzcCkzw5vWpRoJGYPP2R28rt",
  "key33": "5RoPVNFYuyoPMzK2dnCVsPkz1wBreVuEVUGR1Bu8GEvrgUuzEGz1zuqddQzxRo6om64UwJ6osaNDoHf8tUZjVgsS",
  "key34": "G3hsHcBpgktVc7MpqiyVpC2sPtVJDyeN3J9195CoJEeRK61vqo39nscPgevcC8TeJj5HMwWzYEP6WEyURPdr3TG",
  "key35": "uY7QQwiZRZ8opriYyAqtMq7MWcwBWcJDgWRXW7GzFMBAnwK1VZshikDkmQjojCRWqTP4RUztNjabQLcUxvR8n6N",
  "key36": "2ofU9kSZZcsL8Va9jJ2RmgzR4JUyKxqRtowaNVPdtczmuMkRwUNaZVLeAZyKDf37h4S4Fm34xdjRZiWVa8nErSiq",
  "key37": "mcua3VVjAXv7QDHbCA4Ev55Sw83QPUjLUTyJUvnsS8zwVRNzpsJAFe6DAjxUhXQFDkPcfHsL4CosGemrhYRrTft",
  "key38": "5duX1XEzgvxDzVwguVzPNiEKR6nMkYs3rc8urL1bEov9zksS2R5eBSc1uhhNqGUXRymgzo2XsGXmrTnd5wryABc7",
  "key39": "JufBNN9Y91LCzKKsfFaeJ1zLLCMuuzcdah1he3k7iYHMBRCCWo7BEc5W15Y6gQa2nC25wLH89kGq7p6foPcShaM",
  "key40": "5TThUiVXPuQz6VVvjsjhzo8CXuB74hPAfroyzDsaKfscCzasRqGQ7VpVcapghupQEfZAanGgegRfr6b9bzmEh2FA",
  "key41": "oXThLzughfHYtcFcHfKTgeV1PsqC39Nj1TaRd2KQiatkPa4ySzbHED617C9Hk2PnhbnFXAgUPVkXf9VzwbzWSGy",
  "key42": "2SV3kczd9KBcHwHKZ7ydET9Abok1EdVWBDf9Y2uuLZxLxjnYSYcqo8iCuixjNBZrKozeWbDyLBZyCQCDX1DGRmYR",
  "key43": "643iRWsmDjWtWMBRFgQUZiadNswZ3osyFPfoFRnEGp5L8gPW8GE89A8ThR4C6XrWi5KSPjnWvn2rjPjKrnXhyfRb",
  "key44": "WLenQCpbUQvEwYFiBTJgXjmhWNFARDQVcKPauc3sTF4sKyWACUaoQf9rbM3hnwWRYzBL3tVmJ4STQJ43EWzKv4a",
  "key45": "4os28VVVLqLVu7gVDu8shS9AMiEbhKmCvv7T5AsbUkZHz2mzJsporqxoRie3Czpvma9DBAW2vEYsB22qjw7pAsHh",
  "key46": "58BzpGHqPpSj8aMdySjof7ReGrsPMsxbwK2TbUTSyNGNRXjLXBx31wHuXzfLX6xjASBPF78ppDKfnyKA4MMcmnKW",
  "key47": "4qSBz92iJERoZSbspsFYWUMaTD476TfcnziJP5Dpui6xVTMAVvnVx6nc8LFF4UPNwYrV4os3zvns1vFH2LkFysqF"
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
