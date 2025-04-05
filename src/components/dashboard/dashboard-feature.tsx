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
    "4NCL2a6vC22YeXUG2KzFmRciEsWRcc5DDBvPhfEboaPbU3GT94RNMCwbaVx8P1D8WJcKjHXE9FCKmu4rqsFFhANs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38cUTwmQsZJnMuoSPSrPVRCGub5eoWPpr2Uy9v72a1RGKpZ6rGZjXT2V5tLsMSgdpTwgkACPxRohaFhFRPzatPxE",
  "key1": "4CefZcoPvSsB9Dua2ZuxgsFcBL7cyBTtfJVusofuVyc53gJP5VkHmf7JTk8toUd7uHqFccFpmUHjH8Yxa7MHpTBw",
  "key2": "2ypTA2mS1UjD2eyfCghAoVxrSS7n7dkZ2BxcePmoLDLzWGUnwkx1n4hfaGQ1yj3kbpXXp13ceYA8MC1uJFCSaswS",
  "key3": "FckycYzmuqikSyqmogpeXLNMUBSb7T1ygCxcNuizQRRhwb5eiRkjHmp7h78G9D2fC6zNqY2PZjnhgZbtdk1gJcq",
  "key4": "PTNjZxboL9AEV8Q7xVBhYNAgmW4wgjXgdi8Y7sfjZxnqc8xjxRSCfHbDYc8uKznYz45GQEYnJoiZuLVuzUUDstn",
  "key5": "5Xw5X768puxBnEMDqFg8dkheeUBSpssa9L86WDnP3ma4L4TXn5QjE6uwf1ox1U17hAXj2ELFnFKg74m3CBkopiTg",
  "key6": "4ohfksjA5ZJyfMuMAXkj76SofvAoPAsTnDkLYLHCbMdp81ZaSbqTmNeEcV1Ah22AsEnfM29HTefCNMCrcGo3eKXy",
  "key7": "fy3MZbnsVvD3bQn9NPsQ9aah1323SsaJQGEDeCsKWyoj16odRzRjAE6eYg47TBZq8LS2s71pSfPGnJYCwUAHruC",
  "key8": "5DekKue1drNNewjCFUdpUbt9rjqBGiw2veScKU3fJq8U14tuEAsYXQGrZG9NxyrA3dRHzaunqnsDtSmj4HYrdzKL",
  "key9": "2jtromq9yv3yviSzN5rLvBdAuy1PEwtvWupB2vicHAvypLKabzoixX3c2fMmXyaD2HK3tdQXXpXiPGbgTzfyx5sF",
  "key10": "5aJoBrwtkcSumm6MqXUTaQ4G8buzA9WyH1JWj4hhusG81NJ1Bi2tfJtWU2o8T7n9aWNP2KdGKHWNqa4i6R5hyeSa",
  "key11": "48MpiNhCzS5ZB1AkKB5oNxXCzc9Q48BXGS4j51am58HmEXo7YqNzx77uaYtwpYUKZTWpRABY2zdrXqRmN1Tn3A47",
  "key12": "2ZLhRr8y24MZW5Qp1FwM6dMQhAXBYBsHSB7X3hBunw6dEyWgNNiTnYQhZKjAr572FBofJPrQGxzQ7ADg28d1Lsvf",
  "key13": "3fV4LTREhnSywRrrk1RcF1hqP8PiRBHpwynaDbZDbmUqP4eJbVsWbNy7jcYDrNyRNH9Jyi1EQBEq7TnWMR4PsWPb",
  "key14": "5joUSHH4ykSytwehQh2nK8URhvvW2Sz2CAUGLfpwErS5cf3PriFwwsyyxTzfcL9BpoVp71QCoJ3vszafqc2y3NWp",
  "key15": "5G7MKsvsGg3s1JQCPm1XYesjrWsBvnfFGeZX9nDBzjkBxNx9JFkycEsRiRXmSvX5GCiPU1cZi1gQ8bXtTVbBVGSH",
  "key16": "49eyLg6QLpWcsrHrEJGzE4N8LWhyeDyY6PFQAQ52FUEUJuicufEWB4gHsP669UjMYc7USE2saXtd3GbKgdKbwW4z",
  "key17": "cyuLvewzAcBun3YCRBLEjUF3kDtaqGtNB9sFnjGsKLpsxgGMgKRHCdT5a6aJaEmJtxFySMg2kkyD8ezy2nxjPj9",
  "key18": "4jAGkj2ztuH2bawFM4dg2RGk2gXd6kwiuxXP9yC5NmX5SS8hs5ydueCRsGbGw43xs66kJKLz4fZRJN1kWGVVHZo6",
  "key19": "3JicjCb7x5k4JyAxRrCiapxZYaXTUny6XEjkdLAE88qM3ZcP5FbnKC6neKkngdCJTy8yT8cmbMi7gB6Xgjs2PmmX",
  "key20": "Tbnvst4gcoE48vXiTtswQvaGBU2Chh2S97fcmttNkdJbikK78qwjruJDosT43LqTvmKRq9Afbs4YujqQiAJeRxh",
  "key21": "3PkaFMVQr78NpEkkS1pdcpXTAxKxB1mygCSXM6VFStbzE8UYh7RMcB32o6qdR8ZDvsgUgtveqFdQ5cLY7NxodCjS",
  "key22": "52ZqeGdPqtt3MrdgPwWhSjvKcmisxJ6KFfPFEQ9GK9GVkUZQEWZMRCbkT91rEJXkoXi78BFMnn8GrSLahQ11QfCK",
  "key23": "5M7GB7GDRrwox9HmB9uyFc152VPjRwE2d4PzwUgqTkJsyY7m5kbE7wrSgaYLHa5zK18sArYb5kKRuGELEwBSA6nb",
  "key24": "4hGQTufbiJFCkxxqfeAbBNAUTUHaR78LdzmQtzZjpewvE6AotKNGjMzeVyzgrCn4vzmZLrrp2ptHFn5zNsMoAwyb",
  "key25": "2QBUsnBCgWg7uz4gjWwFanMfYGmEyGqQHixshcPZhPSKKzgwWU3BhNXKz4JSfpXj7Er9FkSFGeQzW6Tq1mviF7aF",
  "key26": "85XC7sqDWZBS1ntcQ6NdaZUPafb6ZP4h4CVHjfj4zX7Pd7TWa7WWpXpfVdwoTDnAgqWg3iu5ZrwoDZE23juQnA8",
  "key27": "2AyAEZM8L2LCDf2tSWuvJtUyhUmWmec2TL36c8BdfrixkFdFGG4Kw8ydHQtrYG7h3rwnmupeAZKnVKDh3S3cexdn",
  "key28": "3dzNcuKusTVLuKVLrp8Tzpqu4eEDD6u8TquUbPxASNtqSem6aZgTGe4i6FH1UFMGMQw4n4eAnXdWjmozddY1w1sJ",
  "key29": "47NpEyJFYBQdpmvvrbNUoMBM5tMELPw6Q7LPg4PWTRYDbCNV7wrr7M4jDxNTf4MCy73KkgvPnE6iMnWLqY2mfc9C",
  "key30": "3FpAtaxQr2ntwrg8iJuZQWVnokn9iKQUx2QVoPbox9kwS63kSmzNoJENHssXsKXBndpY7sWRfVn8aLdDaR1HA3UW",
  "key31": "2QruTxw1gn14yyqgrZRXQRQfg5gM7ujz3NkG7Y2GosXA7rzxMw7BheLESeghrRqRjcbB8jwKpgYFhotiocJLk4y1",
  "key32": "3qUAUbYgkmZy4MbBABk4yXfpzBducnRMmRkSosWJUWEroatt2J5MADz5whFNTqcRLRbsQET5PgbB6FafBdHV2A7K",
  "key33": "4Fmc56YNomRu3qFiZDyBnvLpEyLMBBpm1BnJk4t8FFv7Yr3gLmmfmTrE353HeQSUS5J9826bxpdPtkVTgxqNHMif",
  "key34": "4FxQ1sCYwnZYwHQiCA6oqMqH5j9kFHaQAKszEMTpnJhxjaU2AutFS5C67cFGE7UUNVuWtfc27pE7qxFqbeMv4qC6",
  "key35": "fR8XjzsmpUt2QeQFf2LAKJCqNvxeCmQodZj7G6bmeobwUPunSGkXQ8pSvgs1RXmMRzcsPxUMH2snzo8KA6oa6wN",
  "key36": "tLAq8RVHbx8FwnofjsoBdzEdmrxFLNwz4GVfm7Z4gi38RbqS8fe1atHrNstvmomEK76f9BqBehF5hbv9PcnDveg",
  "key37": "2UhhgmoHbajNHbSQ4gxZsF2gCbx8qBQsUr9YEiWLmQgyEoskzjDTLFCu9Uh2LZf7fvERovnCsr4cuehnh6aNsPE9",
  "key38": "3H75czksjSnRcgU51M78eiW42S4RGkY1o9SnRRAccbNj47MsyeCnymUZ4u6hJD2iErFpWzLmxYSCENJ2ZoRyjrB4",
  "key39": "3roCN7S7mwaviQEuS2Qb9qCLASc5Hn9CFFUe9n6W2xJvsSoAf4iRXcLzCPCTckicS9dpqb1bAfmb1GTvXwmMfKRP",
  "key40": "iiTceESFqiYdE8VnxACpnaxmVzDJZRwYuZAJqoiiUnzmgZW8YLLwgjbKmrRA1biDt2ryPMNRUAErcmoeNtw9Jrp",
  "key41": "T6jTRQmG9q933j1idySYHJPfyHyt5JwGCWhAn9zHo7WbD1WwKWvB2MdusmmKQy25TzMev3sPjuRVkxmGXyx7LKL"
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
