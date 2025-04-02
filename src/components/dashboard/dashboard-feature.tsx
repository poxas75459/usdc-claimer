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
    "2fMZLsoKvkE57dwJaf3xsaMxj2XA4JjZrZ6MKuynvjzYNjqMhDPEi7CNKteJC3wp5yzDk7t4Z6zYmRebEWWu5Fh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ojfGpod3oeGzkMQrGeDhKZB9uybFLbFZwmGYgcJANizE3SetfjKLz6ogukiywcKhkrLMRJUK2d3hMyxApUxrYPC",
  "key1": "4A4EhBexegCoqXTKw7pfj9KW8Mv3DG7bomnJ8QmJeMcDT4GH1eGo7PTe2LJ4DLbrbd9yurLHtH4aNrZPitd4BafY",
  "key2": "3bByqKjVjrvoVhYaxigpYmTjCthrVyGQiefCogWVFKfaJezCJs8mk8yaqKhDwJvi9tjobYiYvuHn8dPQdN6QABHH",
  "key3": "2fp2U9ucbMmVNkS6EbohRZqGFsFQiUJG17Dw8bZf9PassfapwW9gNpsi9cFNy7uDqHku67x3kDuFqxEr9yAFGctf",
  "key4": "569WLyipF86LbJvxD9ATHosfonUpzVoJWNSXGL7aVZ1TRUx38tfaRAs9UL92uMJVejnp3maLCbSbSwjnhyQcNdTS",
  "key5": "CBrfdPue5qcFShczvXRz64MuAiKiiJGkiYkVyrb1d9aRNKy9ZhvE8gmQ1t8yNJLkwZnUGeiijJVwfvp3UiNnHNh",
  "key6": "3yV2zCTpZuxXTVNvAzfUHFifu9FmwgoRdFJTjy3DLBn2wGw4zV2Z2PwBtfdRoQCbwoVDbpRaDjp2TsfmaxjN9BQa",
  "key7": "38qWxoQyF5fjYDv4RJD66pdj6fXZQKf9pFPL1yZdit5XU5Vn59TBLJiF3QCDJQCWFEst9iiEhqavCKLm4bo4EkH9",
  "key8": "3msWsBSftid11k23NDzDrUV7hK15zoaf9VHsgMmFKjUfXWbPT8BcMZRpJw41PW66F49HTXJTPshS6a51QNNxJ4yv",
  "key9": "3tJ1R3QywCfRYR36PMPncqtyVoM8P5JNx9X1mF1yWA8KFZ99ezSBDWSvMTyYpSBf8jVnGyEBRpp5EPrVTHq5vQS7",
  "key10": "4N42e8JLYWJqE4g751CjcrYygKbUXwzu3PiJAWXqagZQ8VD7WLzpSEE7FV4YAx2KMsFmikfMfCEDkCRi7RzHCj67",
  "key11": "54hq6Q33T8i5mXLse2DFSNHosgFEf3fLQ9VdYMpLWtnsetHWGdh5iRYBMTbuQDtUCZfGt5ZGPZsBdKRDMz2d7BH7",
  "key12": "2wXYEfkCSnmtR3Ft1pMiwdPvMNqemdDCauDJU7KTpDoYPwY4jskRjaGoDdKVCMo1QR38ohEA3yH43dCbXKRupFFN",
  "key13": "QYt1LYo12eESPCr2WaUKxUjmgZ3ta8KJ8AFwz9g8efLjqsVZND462coJUbAb4k9QsrFA17EFWF1sGekxmbV1VjR",
  "key14": "67Ym4V9EDH9RraNU2BMmfVu9GGKtiQPybi8d98UHiCQc6FjetAXUTgdUUzDFnuufvQ8faSJoMQv29hu8ng3y6gdd",
  "key15": "XHLoszcpcwEhpS7ZfzWTXL39PWZzGXXZ7YYQjAn2ajjk1gcCjXNahpHxECBZVcxpWEk77DV47j6PfPX7xF9j2Yh",
  "key16": "3vjWjeoZ8yCUBh2RSVnKgc75RY9tnm9nbLAiyFqJoBR3mitFWcu2QRkP9tuiEjARAh3Uv6GobjaDpR7YtdAmvrnY",
  "key17": "3mDu63vCbDZMCs53HDM5mBiDPMaeXzpHs7T8zoBEV7GPE5EMPvFHZeEgg61QvJB3MnNCLHaGsnaTj6aBfJjitVWc",
  "key18": "5Vk53TX4LyAfGR8WW6NTZmSCYD6wnqVT8dYyaCNhRBw8Cx97WiHDzVpqaCs9yf2vFYc71NQKFv3Rp2dcdwqsEVCK",
  "key19": "4aC4LTGsWSrnDt6zgRMNrBJmCF1sfawx6LrME7sEwoyztDDvycF7Ra85cGcBsJyzLk2VE1XLGapRT5NP1TXKgqgG",
  "key20": "4f1yxD9nwZHdBXi7fjJf6KxcdByWZG5uxDxSjhA9ed3LiPQwKThrQEovBYaFabBDbAoKzd2HzJvacrb1Zue8hfP5",
  "key21": "2aKrUgRYJerBE3wRtKcyf7v78hWnJb92RanqCAyXczhdvsNzLRGYkUqEqdrzhhiDKPaReFQz2VXozmf2ckyT8r14",
  "key22": "UPWo8erUbayoGSS1o7pb2AiqZvbwGMJ8GyutND2i4modgtJydWWZAVvPR76WP2cRQ1FvyNCtExML3YDuB8ybSyE",
  "key23": "5roTXAcJShw3M3m2nM7PsoTdRwuAbJYwHRH17uydWZVdYGTKdY7eDctZaL3SeNv2TZvCqEDWyUKUVa37yQS8Eh8t",
  "key24": "3vUgaA8UyQ5ogKXbgQGCtR6aA7KPmdJjYBBnoVZJFyr7Ae6XrJTHDY8Z8BkRekgW1nZRyGeoLV8wbNZFd9rxj2Z4",
  "key25": "3HknMnSceRs1ibQ7SgfjH9LC7VSYcidvHU7kSfciHukk3mCRaCtBFXe5YFDwsiZPFFVsSEWvEh3x2tkhKH9Kd4Pm",
  "key26": "y4cJ5khgAr41jXoYf1JHqegTVkvYKeJP2XrB5QES3jJNgGxSPCSm7rY4bMYEPqTSh25XRLwLoxEaWqjoaiLQ7Du",
  "key27": "3dus6EmCsVVuxdauXynAQobecfCDKPq8rwaB6Bi877HYhQw9hJP2YcBMgCKN8iCdLfhES4q64614EN8MxdUCzdkw",
  "key28": "32BFvP5k6HVHdiuggvEuu3q6rn1XdgAfvFxa8NQ5HPPjVjPH1EJkDbHwNC52XjDkG5gHh19WaCSPYTWWRDCpaM6m",
  "key29": "sz5FW448xBugwViQzNUhgU1yJzshsBS7MxCpxYKxM791JfUfrfp3UfSUW2jyhXP9gSgnagU81eD6L1KqjbnpHec",
  "key30": "5AYRCHCwE6paLxqJivsu36VdvCM6T348J1eVbWZ8yHXfaZakhjgQTfhB14jNxgDo8rjZFy7qd27ZfRVxvKP1nxDF",
  "key31": "4MZMT196M5DXKMqHiufbKqArRfSm7Tuh5bwe4rsG6CNezVixgYpcNjvjpcnXVQJSTg2ui6bsDjPbta6P1DGZa3Bv",
  "key32": "2t4eN3ErzXvSCdH7BaKJRk6LiJYLtmEyYPh8dP2gRYk9GGJjHUTWGAevRtZ46THsGu7AsKeHCbCSDELHcR7ARX6d",
  "key33": "4xAb7QeG16peD1zJ6BWV7QTKRmqSysVBC1cdvyv7BkZT9GkKQnZ1fCwvCi2LJzAdvqWRtbz7hFfnYnZZn1rS8uu4",
  "key34": "4jxJJ9N1ArdTTBvWgqNba8hzLxgAdKn8XSn6PtdkJP93j1dJc47y849AwPiEiUihduLJQT2okeM84WGYks7ANEdz",
  "key35": "vmMK8BF4KGf3c7xbW81qoBkboSWFRPrF3ycRYG9bkJjmWWyKEyTJtXqedWqi63iuD81xvthwXaQVxu8Z91iSWDH",
  "key36": "3o8xFYKgcJbYUhAuJ72CXqLq4JuX5ntcNcmPcSHFWMG1mEx9weKbkbj8Bgv6avccHBvuSsNK6BD5tKzCAZFe9Ctj",
  "key37": "4vRZ3V97wVnuVDadodzpsKnrPBNk9brZRSw2dKMtHsohbBxgmT79cqRkG5ssHQXWJfVbD4HYEBfSR4JutRJY6FQd",
  "key38": "3TfErQV6r1PhP43HtfRd1ignVHBaeNUwdg4M4o97Nk5wyWs5zucJwXNujGkUvhYwKY3qmQCpCStb91h9GN26N1M5",
  "key39": "2yEnTLyn4GSQVtzTGYeziwwz4GeUL339bQ31mh1C9ZLGcd9ABW93wmhAt6KFzC8YDRzZpsbD1F7ef3t9FpqD7QHE",
  "key40": "WbnAfevBEtJpMf1TVrDYEfCBdm7eBGbR5BodH9m92vJ7Hs1EY18JoqgUfoYUC6yuThAWBzyso7iqYF7UvWEHRF8",
  "key41": "5p8o92ECyEeHiDm5nEfUN2y7NyiLQ7w5kAZQBPnP5b5Qz6usw4LUpT6MYREYyjbzHqiaEBw1pud4RRezWKWikJkr"
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
