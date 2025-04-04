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
    "2CVBVwj2AzNt5hahabikWPbTQzPJLRFERAo9DmBbGvj5a6GiniuVnp1DDt91iWrthTaKUuRzjvxNudNt8jYs9suY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKGQhTtf1aFSD3b3QGhiqA6PsVMRNVFA9Ydv7j2fmJ8vPwsnryatkQLbnkr3prZxpuYr441He4fq7d5aLFjL26R",
  "key1": "5QdtFpFDoWBgo6DsAVoV2JMhjKiprVyvr29Fb7EQQxmr9LaDxT59BTkwKQJPUsZfEpxpaNx67gk9VMNq4qXpMtKW",
  "key2": "5jqNwPCUYHQZs4PWnx7QfsYTY2FQtb4S9NqeE57nMB2zy4weZLQ8FYrWEUDFynpTX2NjmCadmeYr2rbkb47G9aFK",
  "key3": "DhCq9BU9dpSKowY7DZ154Sk58Qx7BZHoNdYDQfJiAVPtyEjNYYpTn79MHgRL69AzE5Rw2h5V5UzWo9SVv2xsZai",
  "key4": "4hcC5nuUmKTAHftTCJNdSCXjqQXBGCwF8k4Hmt5Ribb9mAo23k6SFNkPWhXxeyVYAt8UJYtJnmwZoCv5KAc9A1Fp",
  "key5": "2BSysJDPZZqd1wYfNLGHDh5bNQwXxSQ7PmAXR3kNGdjnHKZBc9iKHAW5fZbvVhNvuiurG1AXPwAJhaqNdk12apPB",
  "key6": "4ZqvjfooMQ7Byr3nyPLKfmspGWfmjnGVgxPMA5mLvxXAqyob4TA9U5tVzzhCjVTNkaHMpN1y6jnau8FW6QmMY2zV",
  "key7": "hQHPhQiGUwYL3F8BLmDyKJWF9Mzz5Ta4gY8z77DGNyV92vpTywKp9WZo9TUeqdJ4r8ViWM8tBm7g6FyzoZkz9ay",
  "key8": "2EVCUxLAgCSHHYCXtfgna3MLV4phTpKk3x1TtbxVrie5bjFEngLhxESby3VGjGxVQopjuNobmqrZRPfAw18rhuvt",
  "key9": "5j3teSQMhZs78kkBCRh14pRJSRqk4bHEb9oUGwWJrHXTaLMCrpS8ntajciYLhxZN3JXpov4UMyMjDYbcggLn7u8v",
  "key10": "3iQVhFN36uhZEVY8KLB7Esvg62Ps55ijJsY9v3ZixcqrdjegHpz7tiHBYPChLKTV1Yo8ZqJBerVW3Wv7YZ8UoeCa",
  "key11": "YYfNxRQug87XAegJVeTdKE5i4Jwy5SEzYFLTD4BvpYJKPP7RDSns3XBMsiLyYG2KiZpefDc2tMH964rsXebWvh6",
  "key12": "61KnSXY7iuLMcTfyCSae7TSQVRzg7JAgdkSvDqxVinnk7vtRQkDx8Ft6C87yD1XSiy47DaEjPGig5xKdjVBVMvcz",
  "key13": "4j1UymjAe47uJe5a5fs7nc3J92ztrjDQWF8vpigGZYBqxButwaYsJy53Uf55RGnEBDtbMRBxatE6PoNgZQmmwMka",
  "key14": "5KJsx8qZWhc8tivM5XFe9MYhebGWtzfjQgQnMkQMdwmrxMRpa4sGAh5hsQCyjQwHqcuH1JMsfqb25Uw4UBcKcMua",
  "key15": "2Jr1RsfwNreEgqhb5AvgSYywv4GnQ97tYQfbm4m5mmdnaLkxUpsq4xPfebgxE1h8C8NZ75Q3fo5dSMjtQKmViWnc",
  "key16": "5VwkXaTxMQ8QSjD8cc2J9mB3owXuV4Ax84gphRSbKGPZ37cT2uhsYqvwUwnoY35fcqvpaWgF4hdAUpLZEVxEo5eP",
  "key17": "65idj9HLvRD8c1jo1BcwRaoMD6dgGohVQ4KYpRN97cJH51ZyLzhQr5BRyg5EF3mZpXPJEbSAYVmwSvqNYCVYobJW",
  "key18": "P57yQdRenAVXdhrs1KEA1SZzKsxZex7yZGuwDavzXwApJh6K9e6u34pV6mHYx3do8Dcq4RunNLedT9YAbTJGLFh",
  "key19": "oD67ohQ2fWcW7q7YFrGsWF3RoeyRCH5QRCCSYvjumr1ArwLjUQbxs5Ukj4W8DzCqSrepUm8FTtedwkm49oDesh6",
  "key20": "3sYL1sZ5LMzoTdvpw62YHXVWUzYaBqh9ANEHTWpkemGAjbf5mgcGtYFu3ssjh8BC6HLAb3rHTH1DHPkYYMWmC6jz",
  "key21": "eDNPVy9oGPx9NTQyRWJwLz46Lqa4An6nyWTHVbgtgv7ejZWRHhKGvK44FCnsiiFpdgLLDnMZ6tMx5wH7GGx1GrX",
  "key22": "2citWUpG73qhf2WskHp9RbfzKV4WELNxVSzoSY83h1FPTyXaNMT1jzaEevdf2wcVwxsLsXYtR7HHv5ZLrg4Tu9Kp",
  "key23": "2F5Wvu48hewC4J5Sb7qz58RRDKpuZH5DUgjfKqf6nWarth3zWUTsok1musyieezP7u4UCgoL9g7iHkSF4pLwA9eR",
  "key24": "5zY8YeAoavnvvHkDtJKQaWWQ43bnjzKMt6FsintS9dYuwtykaFWMqyu8NYniusyQoA8KWUSf6mBYCq9HfEjcwk4S",
  "key25": "2Q7w8obNSPv7nQyzNyR4wKVyZFVykjzsJ1W1wtRFcV7dhhpSUo5ARgb6PZR97iLhYJLZPHoHkoa3ZeTAmcQGUxmP",
  "key26": "52Yj6pjrt193PHTM4ewyM2C6bjzWQH9zACJVeBNBMvmRQZokeBtxrvBALLFEz5Et4VfzQuG6njaeAKfksgBxxjw4",
  "key27": "2QhWzzz8tLFreFD8fjrXRevzWw8gH8UjqAjHPCNdzjvNELXb1wBoho5e6xDJDRwjZhVwa97SDkm5kWXMsVaDeiRG",
  "key28": "ErXpvjwJGPMEKDTrab7KvyVnhyxbL17BLAWE4ePLcG4vByrcPAN8SZrnb4LGTVzyebnf55TcfZud5hDwtqiEinn",
  "key29": "67RW5nuq2LsWzt6p7nAShcfJyhCnxT2UN1EJe5jTpsuPAw11PqNgvuWWtyByCRHgAi9KeMgCfKCZynX7jcUjV2ft",
  "key30": "Rarr2g2E8qoJoYXJ8iKHUz4NZAFYUA7Py7EUwxs5CBPzFujpAcU7V4ZnWUXt96CZhwYAf8qc1kRZviLnoP6L5CA",
  "key31": "2J9fPQmcMvtedh1m2vtCp4WchgMyvvq6PNyAne8ZJFbcU33FNxyLvvnfKwDwYNtHahkaaBF1jCVUPtKWPDwLr91F",
  "key32": "2jydEwZsphQ5Anxy9eD5CAZ9pdLMnvL3t4XCDZSkrqLt1CTFFjLzxYrxyS9p2vJ6CvejRJE37DkLM6yu4tEmHQyw",
  "key33": "3bWo25vgoBSqfHNisehPJchokH2H5Jk8ahVpsg6FUExkRV5fZTz6cMJNryVmzNuETmCr3Cj1LR5BDNGPzirLQRfP",
  "key34": "5gz4vJHcWBv6qnq38U1a3bY4oK387uAqSrYVSCNaeBLtJkNinTZkw9ouAi6ANp7w8BSgkmNTFcKAzmdX5JnZLPTf",
  "key35": "2kE3zwrReizFoUHbScvwN7QqRubntqNjLPhfYFfD8hoMCGQC79VjZ1GoSt1keEV7DEKD55qCpHNTWukCgKa37Jyw",
  "key36": "5dB5CZ7dKeEYnBeNBMc2Jg2op6Gbqo2rodHgjeM2CpEkmn5YayHBwMso7f5sYCHnmj9FZRqwnZhAvxfRtsai54SR",
  "key37": "QjcqV7f5ZhfzgRStC9U7gd7wcWQSGA2oyMAVhigdEufD9ecTy2JUJd5Dz3NwSrqDyuMo2cv8HYSs8qx2XLPV9sV",
  "key38": "2fq4ooVDCYiRNZLhfbna6mkVET2PmeEYVTGmYvocBjUjtxe61UKZQADsvNs8K9HiGsTU7NovkdTpokqmAiVJwU36",
  "key39": "4DMBNH6Xvd5eJcu5N2qJAtoHJGkajQES5bYqZbVMDi7FC4gd7fbZVBPXxJaz6TEzugfri4qzmcu6HsYGiPYkB1t7"
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
