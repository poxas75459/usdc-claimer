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
    "5gr9xBHhtDNSybBxqqU11o59NQZNNph2nGJArnZrPeCa6gPhiZxQ1r1z6xiunjk2Q64oZ83p4vDZPEVjXfT8hAvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25UryUjd9V1qD11iiE7juksCQBFd3sFKdQwpK3VwYsvcRKZ1314oEA34frvLkUx2HjJmBKGFuavNro7CDW3GqP2j",
  "key1": "4TuLC8Kibts8TKNB5KdW3G6W4YKgB8b1AbxDUYGGRAwKwNKSZsWhehCZjvaticVwc9RztjtsTCxBQmtk2suzKEL9",
  "key2": "esF1ns2cREJGeCt5cZNFVs13SwidYo8dZdpB8jtmZ8eiWXcWCkYu9QiKbAAi6m43sequPiuwxUFFkydLEPCDcxz",
  "key3": "5tjxXWkiibZQH5m6tuY4LtYpvm9QygSDctQJCg3yBHgUUnnu1ZHHdVcBUiEatuy9kXqAF8rt2UC1aoGk4VriYYPi",
  "key4": "5hRh13MytVKuwATUen97dmKKS6E77nN89njns5t3ivfnn6wCwVWiPFKfKhgwmQha2M3Unz4KF181hzF2YugTdEpx",
  "key5": "AeoXNibXtrofFp7AV8r1AYXP5F533qtB5EY6rMDvVtohKyBrh6LCHUXKWQAb4b4GZfr71vmaWeoGuUzjnT23mHK",
  "key6": "31Sxn4J9Bg2qSuDxz8txYJrqWDLnybttbztTNacA28mpg3puLzbTv2jDisud6tkHRJUH1deAK2ipdeiM4RyGJQnK",
  "key7": "3sx7BY5HsYmhBDKn8izirjzmeacasZygmgD34exvyfQSaWKF6ZQJqhzVyGBKVxqn4mVHLEFbsE2NcZiMSbQheyCr",
  "key8": "4BCqYHAKdkgWmuydW8emAHQ7XDGWgSPrwFVVrF7h356trxqGfWwvd6cLTv3SiPzoQSrfiuKPp8Wgxh9sikeRjQ5D",
  "key9": "37JkzJgTKanQSsm3FvNQ5NWT9dsxgyTb8Qx6cWvoyNVF34ZCfJyHcmQqbRDEJzQKyJQfiCcWRxos6h83MiSTCPq9",
  "key10": "2sJJELp588dGwWdpkbAtZ8pDYqfTbudCfAsgEthDYzhqmNminCvkRGREgznb6YZ8mhPEf7RtpkN3dm52dbqr1vSK",
  "key11": "5UHineCvA5JSCEL9cdVywDtMiADEnJQb3eBeCbYF2EpBVdfS3Nztskk4Adhdbgdm6HiBJPYpKFv9XFnQ4SR5yw5z",
  "key12": "2e93hdcMEFC8hNWf6Yima987v42xizBMbS4oueaeft68BJPN9dHUd6ffdqh3A8dnkBkJZnPqiQvWSCKSYpCq9GWi",
  "key13": "55CbG5QkagcDeDNnf64DiBsAqoHwFxbKZgrsYp7jwHrUSGmDTb4nyCsXg87YWM1fh9jseAZgeNci4jnAVeDrXH5x",
  "key14": "5DsYjD1vLrPf4PQBsw1Z3wv9BqF81hjibwtY6EAdfVTb7ZUkGhaaCT7DEZh4dCcQ5hbUeSpswUHqPuRiAyx3wqa3",
  "key15": "PPELH25C5Z2DzQr5NXa7eHqswik6WZnQq2nwVhhW77gem9RCeWk63FLEM8r6s6Gtsrg7MoWJeASTMdAVs2oCC6V",
  "key16": "2f789LZSVJjoeH2ua3kQnkricphFZFzdi3JfKowMMQgdCsEguVqtTa8ca6vDoVwrfpMneLEXemaRtVkaoARLbEDa",
  "key17": "xcDV8RZv75P1D68z9LbubgGe62FUUTZyXtu4eS7Ehh4qMeaso8SuFksCmiXxhabFz4pUZPz1hAeysnwRazL3mSR",
  "key18": "2qf5i5itWn1nHUNpU3FHdBU1jKGCVLe9CobVbvrafWS9ZEH882HTNRZTyhRh6obtVD55YvNQsuWrAwNfBpXuPkci",
  "key19": "36JLX9xNcB6KwkdHFuBg73qhhXGtATFrTbrin4KSpMmmzUaAcoC5kAdKczmkWFwdewDzbWqjaGrwJMB5o9dwfZrn",
  "key20": "2an14s3spHigr2GGBmbBAB8yP8E7knzW6fotdmZZnwxsDZGbbYsBDVSCGs6f1aDPMXfRJHqG9BkKMzzJjtWP6hWy",
  "key21": "2SPdAXskVJAuSwgPUfaXgjkFm83CHgGnozgVL21ZDAMNy98EGvjBMzMVp5TruJLX5zKs1MAdefCoLpffmdFwDA8r",
  "key22": "2ko39nUuhEbSKcei1Pot8YoMQvju33WtAtMWGhDWbnuWoaiumQCEejnEyBLzkdznkzKqc8tcSWQGvcZDmoQd2RiQ",
  "key23": "38ZS6XBhbktFqJa4ETtFD7obirMB5Sxs5HMbzzykAmAcc56ADdif4qmarD1ZX81LRtTRKUXWks2ezt7rJ1XndxN4",
  "key24": "3GQE1FQPXgezH3yj9Am2F1FPbq8t6qqdZ6oYEVK9RFbp1U4iv6i7DZg6UpF8FR2Dk7YXuq8xAbTph6yRmpiQwJNQ",
  "key25": "5FcTNSdCJdjr2GrfMDwJCz2EjvfKqr8zH35Syqh885JhVS11QHb7dYUfkThtHaMRb7C5TWjixESs8zEXxM5fAWJp",
  "key26": "ViqCNCLcKZsrsFqBgKZgYDDSvgxX1wwVdYtJbZh8UxpxsTWSkkH138x9wFfNVHNiCgGmvSuczs5vH31FNkmsnZn",
  "key27": "5N5h2sZe22AFe6dZbXBHM3wUwgLxNcmVHSek6wsZXgh9Fq9aKPZJNHa8nMSe1o5pinb88E4LQAZnYD8PyTY9PK4E",
  "key28": "4wNjKYpM92eysMb21VYvXvdgEVySdQJm8RrKnKB7PK6k35LGowejBEjHf4DEZLC9oSZHcsG4ZgqFNCXpdkrYH9u9",
  "key29": "5gLNXo3PyMnaTcjwuQnEeyYd9L9gCZQKaH4Kw1tMRQPsMpwVqXhitVcSLE3LT2fznrAJNnc8unFQqeyBNjZYxPsE",
  "key30": "3DxoC4WStt6x2LGB8MoxSCFp1oTqbNF3rJ7RfvJzQg3wvr3LSYZW6fcaGqaiFbVqqUdDaEqxYsNsshZVGZS8RQXp",
  "key31": "3xrsQs3J8DWgcZGLwNfidXFXJDzPJV6Vk9QxErmRKq5Gx1ig2Mrbbppj19cmemb3ASLWua4o6tK9vzZT6HZBJdbB",
  "key32": "28KU9FvVC8WsLDA2ji5jfgASWM8LQ6pUyUwcu3kXgGyZDmAtgr7FNpruoFKMRNhXRsxNSWdqbBgacWFaFxqFg8KY",
  "key33": "34KSUCwrU9SeXcTD9zaygYj7x1xitgt6oSqA9G8wdD2Xqar3tP2s14yNj1ZuWsmsQTfxM56U5GpkZXmdL6Lw8SF8",
  "key34": "37ojdA4E6Cs6qb1K5YtHBmkwbLGsrNMJgDYr2NEUwodDKM6qsxzAZVdf3zTB88kQ4ZPQrtzDwnbfzYwAHFvNgtB2",
  "key35": "RCNnhzWUoeDrFuT2bcked1ogLt2uD3SPgD4MA8bMScjxpZYaeizWJYRTjd1WLCgWPmDX4tqeihbnKFwdQhWgfot",
  "key36": "2YnJNCer7CyyvFsAAwZ742XoJHEggy3caj9JvVB6NhXJeXs41vHjx9GdLq3rPW2o9p17rrLS5mhPGVy92QGYQJNb",
  "key37": "2eFyD3aZ32HctT3ohwDj5vYCRQ9q1DYwWhaGUcArtEqemDPygyPVsqybqSjByXfegwmboTR5ma9bmpcUfZc4wM3J",
  "key38": "4KDqcs4hE9RJ68AiSLEQp39dKdiRtHbYe5iwhzbzgW8FoVGN1dYpeNdFAsN5PTet1emG7KnVtZcYsXSAcivUSnoy",
  "key39": "i3QNRy7mSqr6zxNhRttJmDkNR63GFjvKLpewAHmFaDVguLCWe3StA4bwwzBW1Jm3D584JvMgki5x6AADbiLKkRq",
  "key40": "2XxRkfJH5ocC14SKeEw1tm3AdbWCGFzM6DMHzqWoF1JMJ787BfG5tmCZDF3ucuMz12awtBKCQ5JMRRchEqLamKss",
  "key41": "5YrntK5xBhyqgCtn7oxmSdJnBpJs8wtHxMjBYZoKxvPB6sYeJh62DBVpfqELBefC2YJ49JUUd6ogeCQcRypukWKT"
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
