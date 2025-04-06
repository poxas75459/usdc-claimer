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
    "3MF3AEq4gamUf6Mdi6oyw5D8vMVgK541riiHexWD7dvJqmXfP9kDyhWbcuEBF17GD2x3sUde5rniS8vuF56qxWjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kdc3nqLLTVnLbv2Fyv9S5XQTVZ4HRhkXHVAd48ELXdAeEaJNHDGKXvyVAW5JpJWVGy46k7fUkfXCaEboLyyVijq",
  "key1": "2rFMTFjrd921bVXj5HK7jLX4zLUFjZN5xJMxLU7VBTFWFPgUmTr9kPEHuBqQWMUtmEGmaN8YHUe5jDm26p5H4LyY",
  "key2": "3QxnGAvtLEpGJai9kBZJGWqtp12xcvkqQPSJD5qwrUNotAd48z1nuPMdcdZXLsQ4cgzHf1gs473F9XXQafv9SMJQ",
  "key3": "hgut99gShp5BdV8czei9KHBra1TvNBcTrWRSQ1o6PH1dJR4gEAQNsr6obExNpw5qVTLdCtQ8eHNHYP6FZsE2oUT",
  "key4": "5FxscJbpSc1jn3tUrobwWjgQW4EUzSA1NUkj4MnbgR4rBZgTiYvzSUAZm6pncPB5gmaqacfd8aUXW5iKTWxSjeuE",
  "key5": "3NmupzxdUxhMBMsvXumcxB5A8nQiGfNJYUXUtKUZPAkNC8VVpwfZhLFQh3WysFF23xFuTpNc76LswzhUEcm8xwgH",
  "key6": "5rRQyurkMhgMuAt8CKCds48FhnVHkbfXHM7zho9BVNtEiPbu6EsX1AVEP82NtUtGRLw7CsMeahVEqV34LND9oQh3",
  "key7": "5MJAQZDedNVvuKhbtZcada23nmMcZndeHy1ZXgisxwabJCa2fBW3iNpHwbPPmHJgaMpoEsDHz5VrpUa395JuBLgZ",
  "key8": "LDDyudGJnGGMBqLyVum8ZZb31n1S8dU319xRA62pqxbufAc3odgze18ekErx5gBJvTNZLq7sxWk7wd8ArZr4C1W",
  "key9": "2AEp4aLxrhM7QU1J5ucBLQY6afjqjUNctrf3BEa6ExTvhQdWwHFqU2pgQJ8D5VHnwoJVzpLV9F2HSSiR2s4Behqv",
  "key10": "Vz3oJjUEGbF3qXdQus1dpNNepk2boCgMr4AxnGLKmr2pxX6wpDMNduSnc7VmPk1k3FySEeuWvfoX8iTGBJZp3zN",
  "key11": "ragLZEC4wzP95BBtEAsP8XDXNokZMnnN3HEcdCzffgdP3D8SZJDQCB9HRsQfZGYS2ARxpmuVXZFyGbHenRFgNrV",
  "key12": "4ShS8Y2N63BuiG96QPdB8UuMoK3dVtEfge8Rw2TgQt6XRTAP7CwuZCCUqDS4ek4y5Nbr6XaXmQmHoPa3ajrpchY5",
  "key13": "2i35iH5G4tcLytE88ZKhW4AsRhUoL9oWSwssiHnWvAjeBqXVbdq3uprt5yFBqe3Uz57kBfaQ8H3JBdvfqm8pLVjh",
  "key14": "36GV6BZCayhWY5XP1cMELj9fQXVyEvRaqNH9L35Qrp8FP9KcMFUiB7pi63h5HE28XgxZex3wajExEUh5WhicTFqs",
  "key15": "5xTmLVJas23CfmwHTdUYqt5h55bY96aTfdxXvsyyXCCX6f1a3ixoDZyYzGyfL5g4hWH1a3enpMdUHFnCybMbcVd",
  "key16": "FE3ZGBTNRwuxUTHW3wKtM52rEY5MjBd81VqCFiV9iUiKbmLZDe1yQjzeuzPqDGR5m5U4cfMK2VQmhZsFzs4dbs8",
  "key17": "2F6CgQ5kkn2ko2N4aBXR4QBecEAb3U8iNpVqMPtcgrbJJ5Zt2iZwAcusFLujuCyRU1VSNyNhmNZwG6eofyAgTdST",
  "key18": "4k63wFSjzA2g4HiTVC3AbdQZhtYgZfSjv25V78YP5qfGePz2Loz7Kb6aTUxjFs1EBGUN61hRfBcNY9E5Yaw1xxta",
  "key19": "5AkVER6qGf33Gu3NQVGuMbeyAHm9EiZPjFoUvfaBr8hdHHFYyFeZegwkdFfpZMBEuz7jvrHnXsD5wc8jG7nVyBFe",
  "key20": "5BZ8RoGcGZDxWzyfpSxP51Eg7669a6aVmbr6fyPDjaMvWNxUcRR3k1id9ymh4cWYapDUmjaWiNDXdiHTsfUUU6aj",
  "key21": "2XP4Y8FhWVzYhkGjByVoMHsrPxZ4dhneMRD3GQKV2Tf3LXrjFZANPv3NGTMDrd59Yq1yTnYwQGRBAXKbwzKGwM4H",
  "key22": "27cfBNY5cF7uNz8dAtMfrBacFwA4DPf6RZwh5X8wELfPXPChQ7svANBTqvaVZ1Z4vCoKgHyS6NXqajHdsmhJndJS",
  "key23": "67gAR1JLXuwD22FGDEhrQo8qPscKWi4W31HenwRm23pi2JKjnZk9nTRpMyvYMHdfUz8BbqgExspTktvCfPCoiK4g",
  "key24": "5SRNponXPEh9jwBu2KpGaDX5N6paprKTAPj5K8M4HNMYF7hrU6wuigrn8GCdghv6fvjwc2hqaEafbwnTXBArcA7h",
  "key25": "5HwXZxtJWhKafg1UxJbQHxW3AfmmhQhgT93EhM9fE5MBCaTtow2VF7naFpbXdBQwWhsgsYLhvgjfHh1AqdDKrhrp",
  "key26": "4BwbkU35UA2tBbN8WCvakzytopgnThV5wnYUnUNCsDYqMBdhjfWx8aYHSaoReEt3Z35zo4jUkrmNPL4D5jrryZaf",
  "key27": "4BPc9NuWC1ifudGgx9xcVt3EcpRaxQ28M5wafFJCbq6ea14b34z2ddL11MoQGYwGhcKSHZ3CiY2RhMvvhUEqEF7o",
  "key28": "3MbFXD4yPCUTJGW9uDtzT3kLfQZ8qD6u6f8V5GN6wR5ogKWHq8bMtff7QrNm2MxCWX9Dbm6wptvpXyWhQ1FZXdie",
  "key29": "3Jngktw3uXDa64XQp8jSCZEgNDu1ucFKBSmKLuwyMgU4C27RkZQyoCWksGGb5YJ2k74jHW1vXqWkFMJXoMgRPpjC",
  "key30": "2neRdeUaZeeHvNUaA5Xi7Y4qMP18czgi6UEbhMcnZ84Xy5iTXhmQnXWjstp8ix7qDJu7WfyJ9mgXz4WTZcApzEw",
  "key31": "4MYZWyD1EDezP2WPKxUcriXubjTca96yyfPoJY5nNSNup11d6GHTZhdqTmjFKn1GirNhTFtCUPkytEc4xaqo2iKs",
  "key32": "5biaLFyFWNzBHwWHYwDoXYT2ia6jGoUm7EVoZNwevfSsPrpjque9SpndGPKATvjCUsLvpjDDD9d9AAguvYnCUt7r",
  "key33": "4LDLCEUstVkTQ64uXn3RDqMvKz6Nk275qL9SQZefnQ8CH1UxfS1wJpPKd5j4SVdjNgdpgbsE5Rg16LVE54KAHfdR",
  "key34": "4onnjhVwXyXStN9C9fd9r4STBW3rWSwSsLtUbkbkzMYCJGBQ7vaLZLGx37QXhRCmeH8PdmJai1mkcErSRAp3byCB",
  "key35": "5ft9xofTya7GBuJcmQ27QRwaw37Yi3CrCF4raii4dLSUPkC3VeXbArHo77RcgAS2GD4qiKfEgShBLsNdRMjeUw1S",
  "key36": "2v2qnSU9VUEUoxbrt47LiVjAHRNYhbJK9urf91pBAYZyw8UButE7TWeceiAsb5jeyjpaxqy8wqdTDhB9xBGb6XnK",
  "key37": "2NU6tTbmVPbwzBeaWyqYDt4EVPwi6nzwjNtgoAkr4RKkWE95H192KDJnXyFgStQVrQwo2dBytFjwU4pXVw7YzzLV",
  "key38": "23Gr6BA9rg5CUd9VyXSz2sNLoWs5v8xTJRNLJhMVdSJgySTi2o9nq2tjAqQhxJJu7gvU5C76HU9qjWthPeCSNUff",
  "key39": "6npreN8nYdVyjwGkp3eKL9QL14cwRpufbptduxZrbbTSfRwNXUfxnssVvqNexC12E3fHNejVgoswMmXVePd2U5M",
  "key40": "5ZW18iFXTtnVdLshDz8tx2XTx1amnHBdyWep8LYc3YyuGs9XiL7WYqvkZrNaFRonMb3h5vUhWzB6JYTcroTci1r7",
  "key41": "5ebVvfqbjAg7YgXAoC6wMvuP1ZmeWEx91zewzUWNxZeUrdmqEKULJbXHckD1SSbWN142ZdHYVzhjEMFbFcGczcEf",
  "key42": "41AVq1K5qMGcGEUCMz3Ydr7qYd3fHK21ZiUS6eaEBcLfg4dB2UScQK7g58ckgY37s4fLxqHj7D3WfjwivD88J8XR",
  "key43": "3PmUCjAwFqC9ZxKAhYxDDmySn1beF6nNxwPABwkic66jPrAPii9XTQ4mYcctBZNyWLoZ1AmF8nSbSXdX9CRScFas",
  "key44": "3a3VmmLYGkkMQE4WLPfMxgGSUWnSxJ381QdauMPJq49JefFgtzv2HuZ1XhaVdy49pL1qMmr5FAiTKH8rn553VVdQ"
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
