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
    "2g8omJsJPnc9FRNC9EJdJbSorHhtbdungHZ8cmt3LDXKfs131WokMCYAb5S6ZsrCxy49TiaewvgancRtzadARrMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yBUEFDRPJCUXmK6fo5mGEN2zn1u59okVby2VYzUb4tuZ8N1RBMM8dQF37fubNHop3M61FhXzZGMv8TTWT1k3ny8",
  "key1": "4sCervdM6xpdvjvxNSY5D5c9KyhdESgajCRv8zg2Fsqt4a5jRNJjGZhNermeNcxqVbyckWZX6Lvv5rYmVfXjgi88",
  "key2": "4U6avgJ4gJATitzS4adif6p5Ls4EZPzkGqhAnSF7UDAoH8Tvgwm33AHUv7DkrG1HYBMKMFfGVEozcAGPzUL9ZNtg",
  "key3": "38NFUN9rTQBNsvTiJ9PE2ZGdRdDPVtxf36Qp24RUQtaVWtngjdADUV6gHMMQhomfnSqkUTCtgf9NYPLUnbfUGgZb",
  "key4": "wDqGofmH71ufwhXTN5XtG1TWbt5rd6DHNEZZqGXafTLYF2mzGaFRUicJVZmUKkFDbpJyLW5mV6YHUg3PNk4A5zX",
  "key5": "2H5XQu4fKB9M7rJY8Lr9GkS6baus6GBK37G8dp9w2ECuW2C4JLR6q7kgPeo7sfhtEG59H132kSr6MWA4P6WTDNLA",
  "key6": "34tpKFuGRT6Kfh6RxrFgJfnySynTbC2WjoT9RuFxo9x8zPWPaBWsDRDtEQ7NKbvpkddTnnVCgMg9wffnrCyYUJaC",
  "key7": "2xG9Txk7hAxwtqe9vkqy6eunEfpYhAJMZ38TetNWoEhPu43z6ndu7wtmVfUJpGy4BBzyxXoVbQSf7QK6zv9wZQrD",
  "key8": "5G6y2ie2HHHbe3fGLsA51g9YFAGuQhLYqat7fXH6YQAWfTUH6o5miezYNoDkekix6BPvsEFvNAQAfCYpKGrPJfXp",
  "key9": "2iFSqjDhyhnqLCjXuyreegEEkiUhSGPWtrPuwjjXkk1jqXkYLWVJLUrPpNJABNnDQ4J6GfeuAr7jucx3svrDcYJG",
  "key10": "4yFDzqH4YALoD3tUTjWyPiQjvxcUsueaJVebZ5bgDDMkTrLw5y9C7EQDKa8Dv7BquGkVDe3svzCePAWBfaZgYSEH",
  "key11": "V9teeNox7HagFKcNExZRk5F6fqR52y19iFyN9RP225ZMFe5DMDFAFpGmx1LYZtG5f7hydbwTHBxkaMPtTotHbfa",
  "key12": "4gN9DsiUUV1MXTVj813e3NmZVpyWt8PRDDXB8kRGbFZQPmTLv4YABRikmbsnM4HcRJMiWbDESEmaPgjyxsBH8Gh3",
  "key13": "2FMFYVwvR3NxxwfFEQkzs4bcCfkDaywZjS3wbZbSiHCcJfT4BBoaf4vRZtEZGggfymj9ZDxMe6CBuq2bfh9tybgX",
  "key14": "4HGMqGvR4AamjGNB89Cr6whVJL44Cj3PehsjNSWjhxUtBeJwQoM6wavNbmPW3h3n6KJi2y7Ct63uCrfK4x3i6Kc2",
  "key15": "3JcqLqar21CSNha8RNGm7eB4gM6RYdXh8h4VCoLhxeWh6WM7hnBy47QYcRsU9bvbFAXZFS1xVw5xAWtx5WinsvtD",
  "key16": "2qi9HXQMZKHtCGzohSDTMRqi7Yth15Hi1tJuVz1gTqyZa67djwkj3gdqNDQsSCMtXfBMJt7RKjGsmQzYYyyzfhnT",
  "key17": "2KALDCdmnikfy3QpG9Eqc3QNCr7w3wjncjrj5ezb1VazYWc4PfnJVjVVVSxe6xyRbRm5DSyMoWcwCiQ2YUySa1Vp",
  "key18": "2YiJu4EX689fsKLk1QcSomBxeUjn67rzQ1hhEXctCk6XRyYEQj2hbfyoZPxNpV2JbmfpD6NMZbsonrdP5FyZAhZH",
  "key19": "5tdRyUht1Y6M93WBFJ7EUZAgPbQ5kjjUQk4zPT3qT88B7nBfBQfoSks1c57r9dLVsBnJxkDszGX984hddc8GStSN",
  "key20": "2fQjtBbETiQAYBcZ2iZTorkPjut7ocyJfNouD6ELpqWwS8knStSvFhv6ZPZWFtVTbrmk4NnazDBk3FzsfEti4m2M",
  "key21": "wmEPczJ5XQqxSTpD4ux63yiHMUbZP8nF75KRxCrGK8gBncEeHCZYTwrmpL9R5frwj75KY6g9En92yrBtueJETTY",
  "key22": "bUPp59w4LruNPJdVBpscSvS93dvSgdjPeFsoT9krcBXB6rrkT3h2EwPACtiQohtKUqQDJ1jK7Fx89hEDyh5MT8u",
  "key23": "5yZEFQzkqf6k7LgacttP7wykzr6p1xD6KwjsL81C5YfYGzzXSpp7dgFNgzEGws9MpRrqpUdzs9DSCg9VZ9wn59cd",
  "key24": "3b6ts4pXmb1xpEJ9DV4vr4PdgwBWK9wFSNbHf1i9pqqFxbBPZsM8FuvoivtP44ShJB6rV6sfmw6SALdkVP9KBkkG",
  "key25": "uYR98rKQ4E4hFRbUGR15xesTqCSbXVt4zA4ZTrg1di5ay6sV4udRYPaTTrFA2iv43L8dn8h6MAAp8XpcbCaH6pC",
  "key26": "3H6axkpN9Wx2W4CiWTefo6GxxgXAs1ofhaHckehJyfqEX25pb8xwv3ESwRdsx5R999kyseaK4FUHar5xahN5oQYK",
  "key27": "5Zregj31R2d8ghFockMsNcgEve359k79vwQ3uiGkVgnL7GVEUmNqWwh9XvGSbWAyFraarEQfsp9d56k8ohFmJCpu",
  "key28": "JYp6DVibFxgEEwMfs9BmzxfJxjnSxRfSiUJRS9KHiGFYeKZeBJpLP4BcSBXHBAHv4RAQJtxMbsnCDkbvt2vR2HK",
  "key29": "64kRdHPcY5b1TWBScnrETHwGaACDpqiYHamFhio5aPKWM4pZXFDm6MctioUcxsdPSESiGSsbuS2kfyUsXbHCKjMJ",
  "key30": "3V5gXjBAKamL4qtzBRbpUvm81VTfsjGfiaPZ23fbLDoXXYkstuxykTNzwPvXC4ecN6P6wkbyYWcuky9ATvNAuZ6k",
  "key31": "5ggBF3BbYjXQx8J54qNdF1PmvjsFYrad9cq415Hm4dv7Ys6pZpFna7AbxQFCvcydZgWqyNrftDXxVDRcLq2XiBzB",
  "key32": "3ToaJhXfMyv9iF9mLf4iuEXTxSf7oSQxZz3SBf7DQcpDyBMKpuZvCZDURMr6JbB7NTBZy2Cq5W3ELHBaJmEJMRUY",
  "key33": "5KSUxoRR5RbJtS9JLVKHCJ1YKhXRUA133YmsURzxPwYzs8ksqjJ8bDS58FTf55wr4ZGbFy6XMJkDBB3DqPdPntdV",
  "key34": "5bqwKiVUYt6PekdT96ZcLvsKWaqP8F5NZ2Uf5eLZ942HDqBwKE4gZRoqgrScDDS4RaN3xrzEkp2AWXoxgwRsgo6A"
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
