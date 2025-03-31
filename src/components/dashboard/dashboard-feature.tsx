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
    "4yny9uQsZ4rMupPn9SG1sc6EJQPXmbSnxZkWAUUw4s28BohGq64tWLDkai2WdiAVymctozumLSVik9LkX5UpyRnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41KDshRZQQasrPUBRLVG2DoRB5Rw61YANMVk1i1uPFiudaUUqWXS9w6tedi2GndDoG8yu2ZYHWw3pDbT2EmhybAS",
  "key1": "2QNHUSng9u5hb6WvqAKugsD6huXmbMq61Xp6SKyyN57bvrLW7dWo1HvJgoP31SEeGWT4UeQZ6TSG7S8bQ7Pr4zeV",
  "key2": "4PZ11rKdtP4Vq5GFqQKugKnhwmDb9q5RjA7ctZDL2akVGRQYhyTe2tYTwiUgkLNjT1o3j2E5teyqRek7843gsw6g",
  "key3": "3pxEUhvockXJrhdDTAzJahUX16PBFWJVLseaesWr4KsjAAsj1BQXwY4uedsz6dZcfcF9QxJXa96PPGX1CodzfX3L",
  "key4": "wgpVgEkA2mw11MFvxHhWuTK76dLaMWzud5wP1tgnSmTju7UpLKuK3WuxhZoMAqvdPJ8ZPpW3KoEmwydYpgzffYr",
  "key5": "3wRjaFskyqdNNLB1qG68C5SC9phM3pQbyR23cetaxediUyYYZp7kM9NHX4vp4uZZzDZKAK1R7TcU3JXdBZzvJwQU",
  "key6": "3Y9ZEG36bGBoXDe7LL6UfaF6ANPp5CYCb8tK7m69pPWYoCLQ2Qn7NSL9P8wUUiuWQarJD84p3JnR3F1JcScctWKW",
  "key7": "5z1XK4SDNP73C3VE4HMYYNzHnTeawrYP2iLH9bTuVoQTxuyMcZcxvTF1QFVfEDJE2aL2KQQNCTR72EAG7M6Qdwe",
  "key8": "4xaYGtEy8oWaFX8L4PWUFCcaxF5Xc3jLisohHBgYKAdsg8mwnrkzKPypCKFMHUTYHRMqpHTWM9xdeHq2E3M9grsJ",
  "key9": "4q1jQcHKVhCUAos8JatdjwdkRoQBv4NHzcZwnpPDX61vM3nmY1WAx2e3wS6NrMC4sNxecaWu1VwnbqCgEnLEemmd",
  "key10": "5AtJ3HjUsvqTJf3d1fGdAW4rS73mS4QYzLnPmsShvhsb1Ds7f1xp7X7rjcPnQ8vw1WDFJ1mmcaHje6oUwnExAEYg",
  "key11": "62toce7ygQMfNvvjQ5E6uD6YSJQLpLXjdxxPVzPfkcBjLQPmAQVrGShuMfz3a7Rmt2m8jG5VYujHfkcKAEWVqBTL",
  "key12": "674cJKEdonrN8WKkXN6u2YC7L3itUj8E78f4sGXHMbi2NNLcixFyqxQoHhNfCn6gULRbmbsGrc3WX2VXqhKUnvB",
  "key13": "UDksFxdkcCAuDkf3tkpFPEBTFR2ViQGqRbnB7HAyFMjqEMSjkkbapc91iub7YR7bXcs8hjk1BsAwz7T2ehQj6oM",
  "key14": "3ytY9Ls4FAPMu5f92zpBfNCSFadEBdZfg7p6rNaSNzJrFUL7qpyvUGA3Ps5EFt1S4WjNhDLzYRtbyP3ppbe5DBgv",
  "key15": "Ws5RaSKRmpSBJ5sZEGcchF3VxgjUdbaSHfexbTXa9vZX3M8HnaX65Yvt9RubSp8RJKQZkSdL7vTubHotL2CrdtP",
  "key16": "5Nytb6TH9G52vwkJAVSpjyrbEisDyFnAo9Ph2HkF2Ju3RLa4mjGQdJ3jWSxQmGnsrUkbPSJMs2iC8SCnBETjqjAV",
  "key17": "4t8aVamewtw3N5PNShY9jvMe6Ybkuci4h45P6U3F5iPaUMDAchvWbp464drA63A4XQ9Ubxycr9rmkyai4vKsaQjy",
  "key18": "2Nqb5Qt4HsViUGMCP5LwMcu2hsK24cUJG5y5sLCqXtjv5TPrVUzdmKWaFu9KoQgEeQJLUUX6g3Tj3mhsrFx8abwV",
  "key19": "4VFEjJWXLY3A4YnVM1MC1fwyHST7Y8GcyNojF5kdPkAdaVP23zWytEhSBSZptHcMJVHbWiAgWv64kqebxxAjdxmN",
  "key20": "3FMDrSDmpxkHmZpaXGupkoLoRVhTRTwKosYasSWqQbqCdvreaEeNM6LYkCaHqVPsPzTe3TH5sFQmJke4igBZUuVd",
  "key21": "4P756FH2AhKfZFrMq6bJ4MCxWzJBQFNPHTzoLXdL9h1mbUzqQ9QXEcw5uYqgQpy6rJtzRNygAx3NQXLNv6YkDLdp",
  "key22": "45fhkiAGUZb6KpxXweX9o4f37WqA1oyvipbAvjm6FAaGkQRyjxRLgCnkgGzPT3eNbTSdV9NvfvPAcdwzqZgRXRBA",
  "key23": "5Ar8dSyTLAE3SXP33zUrTjaTV4Q7VbFAHgciFiGT94K5gyzNQcMc81wagw7ZgPW6JJG4W5faihivjV53L5qjnUeq",
  "key24": "8uKdirQAFkkZLFL7UoDTxJUMRYL97iLNJPan4dtvizM3kfrqncF7G9X71ASqR9LV11UQMjMPwfKEydrsako67j7",
  "key25": "S2NFfM5kEsJCKtrBUmBaD7mu8qjzCiEGZ62LCn7gArsBaAJcLPdqwJTr3aMmwUHCEJaXnyKRqa3LsdhxRsnALUr",
  "key26": "X3LjX5fq5u2Vg8vi1o9W5zuCJmY2Wm8gbQqW5e8duR5M2vbPP7NFzbXVCyGbpgHANtNStFyRkpQvnRjFLN2z4HK",
  "key27": "534Fwsrbf4qLbcw1cNuKc2wffSR8u3Ysc3HErjgJVHCnjMBk74uEjmBWYM4EX3St8aa1HhYwGoLMihNi4FwwA1te",
  "key28": "5yWyyeTDAeK8cKnvRRuhMUGmEFNdvezngW18R9BpXgB3Pcv7saMxR2KTa8iXFvmTu3jhwLfToAWs7cNK4WbKXy5M",
  "key29": "fgE1QgNgMvR2pPBv2fL4QTFt4P82k2Uothfv6869HCTpLkHf6NHza1Jk771QSuMwZUpuSywdujuzeCfHUCiazvV",
  "key30": "4nKUixjYioUR52TUiFiq2UV3CY6w8dAB8fhcrGMQaQus8mkTdmx7RxVHsA6cHJbKRKSGAHMywsiLRybyaanLgSDa",
  "key31": "PbesHjX3eRyZRaEgGHmWkP9zKce4FcKBNPyi4fokFm2uKoq2Wr4cTWmk2JPfWW1qJMNJByFswNcSaWfyZbCLCSa",
  "key32": "5dPpkSnjzTq9VxXP6gE3VVqLi9ShyeYmggEZFKPAxCqWdG7iuxoskRg6BaUFnzXrYRC5GSehxnFnkmH8c8FeTZ6P",
  "key33": "5GRgHESMq8iVPiZL5RyPFa1nLDAjp69ZVnqmwuAmNhm9SpsrTJEFXJByBCh553Xh11PSzBqYsGoCPjZygnR8DG8E",
  "key34": "33C7UEMzf3eLvht4oihKyK2j1cons1QyVmchwdn61Huk79G9aYYCingGkUvvuPyNQDXwL9VvtHC7QmYzzpr9b8y7",
  "key35": "Lq3B1tJ2hR8G61rLx457QiBF1Seacaek4XTRnw9LAMWGK5FvRpKeBpsFdkgaugZo3r4dKR9ncf4FQRnCpWjFi48",
  "key36": "4QfZZjwScW1qJuMqqavztt9bouqoXG3tDVUN5kA1DEpfkuAxf5eCBeAYk9iqxrJU5gCgoaZTtxJcScGXxPUkp8JJ",
  "key37": "1GiEVaQyhGej2gDPk4XgZTQr1gXjeiyRoJVNKgHZWX1HqzWKyLzfoiXgHXmjjUmn3j5DrtjA2qrkRWAzKQHuMPL",
  "key38": "2ZR1VEzFeBQ7TH1c7wJw47g1VV3LsoX6rQgX58cEkPETcLi78ZXsmndBpLLXmqXrvWfTPiBsseVJ2TPjUyTCuodV",
  "key39": "5iwxHS48UBLkTsrh9fSY7LNDN7Uwt2t9m4LyVygXMLRvaGfC9hrcjLVhEfC58deg1w6qUKq4mvULzTxeHzf5Sfbn",
  "key40": "536oG6ufi4QcFBm6eWXVxm4EHuSaCgobCAmafArKU2CkMrndRMG6AVXryREKhbTaBKFZwJPAzFZcZ2zdLb4r8gRn",
  "key41": "6gBKcbpUpxZvHwf1TV24xuYJktAX8SiMcCaTDnXLMoG6meJAyRWh5wFqLXPEAz2A4ZwdJX1r15LCZvZjbMQD9r9",
  "key42": "4RHDzV6LHLLEPrgp4dAfb59G2eHmSQbYvQkSVT5hbnBhBe92G81xzqBnRtDCLTe1QFGeJKSNCvX5BJ4ZifcLjMh1",
  "key43": "3tVDJa1uCbuMrXie9FNrKBNihaPUE4oWoYbGwg3pXwEgW6rG3BS87psDyBNso6Hp58xyeqyAvNKhpEJthweLf9MG",
  "key44": "2795cpZQ6yo1rQrMvFnec6dk4vNNdyMP1U8DkvE8x8W9jSYXBcxgA2iWHxo11iaCCQCJP76xd8weinD6DuELuYxA",
  "key45": "ZQKb2QShupTvs69xG2sAw9qDSr1sSqayYSEog3k6ewpSv4kjzPRSr8bqspR6AcEkaW2yZYvM8dkc4MLY4EvV5qy"
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
