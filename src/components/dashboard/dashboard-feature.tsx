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
    "4spmcyoy4f4n1XBVZ1EQdKvwoe6z5XFU3bDJWGfLFACLpW4fCBYQPFY5SicUEiSaL8U87SmnERK2P3zzPqJqEtTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCKTwndv9VQeML76Dp4t6rH93jFAfvy6TQy3ukJhPq9NJ16SF13X14jivinxyD5913QuMqy25kDPGPTaA5wVvUT",
  "key1": "jK7mfjRdA3JU6cM2ArFMg7juELCDjKjQZ8CjH9urPK2Ap7cod5XtnBRtkmhY7XuSgb28uRbAwydQXmZaFamaFrt",
  "key2": "vX5JaVsq2kZeodLNuBvjiYdUDKSd9fGftYm3ZvsUWydACGCRvVCDZrD7s9KcnboGTpkfLTXouGWX71wfFZh1vm8",
  "key3": "3dxvWJoTykPyyzmpDeYKi4j8YBMBAMxZ2QBKMrY2yXmCA3FQjp4Gr7nyvY1FHQmiXkp6LANrKQ76URrctEo3yaA",
  "key4": "5uHBaNWLA6T9LHdzwMUdxG7FL3JvU5hhpjHKreUEqAdetuTspfeKZ4zC6VPGyNSpAraD4K87PeEbXQrc2g5p1yyG",
  "key5": "3jmGAw93ayr315K5URcjEbrDgWXFXeXxJawowYGy2A72jyZBCCuRbLgaFDB7Q772ufC7koE2LhxsmCgM1vzzjG5R",
  "key6": "5DcwHTfdD7YK9YfE2SZkHujcLTYL4d5cSd7XC37T73xrNdH73vdPPPvAhJrKQrwo4oyP75bxUxavKnEgb1QMcSRm",
  "key7": "5HyTjwEdJxtV67qf6S3Mh4MSB4ajx6e4MyeY9kzFGzVNk35mnJ9zBPFuCo3Hx7Zw8bc63BjiYq9b4b4Xbd5E263Z",
  "key8": "4NvkojC8nY6V5eyVsNxQXXcCia7HxUPRSWofo3F9iaaKWR8Kc2nm5Un78gTxCtDv1JPbHF14DZzxWhkHJaNV5mpq",
  "key9": "3TsJQaG1ZTsU9qvKhELtfSyft5GNksoeR4V3sCN6XBuJMgYwCBCfQoVBi5GLnosUYiWyQFvVYY8RxKzXVL7XpzyN",
  "key10": "4rYwgUf9iCD8nwcd7CE7V3Y8HnTJ1kiaBNWpi2fiwz6DYTZeUNf4J9sTkVApgXCrgu85zqUtaeZf9dJWA2h2ZMFm",
  "key11": "4uNXYrDXWXHgqdKVbqZr1JuFTYWsvzsJdR2qgpLiwEpBf7P8Xm1Zmyqa4z9bawE3r6qYGWt8C4PE1BgUboeH7cXd",
  "key12": "61bEnQjC2g5KTN9K3q7b8K1icQVAZdLCBjyJgBwzEK1xNjorsbWdKhatKMUPoBcxiaqnmeN6cUv5esnwPbvBLpFp",
  "key13": "3kfWizK1THCBsg68uRj5gybTqN5AmbygmYTtfNaoigmjnt3H1JdUGFis4wngSesGrqusN7eDw6D4GSqKFTn1TJTn",
  "key14": "2NR92odSJYs5Zjo9BotTSVTiRPfLDe4ZqyRCAeGFRzTGx1HxkbVnvL5WEfG7FwANhqERV3s8esBgPGpc6xsKErcM",
  "key15": "3kJEq6X4MpTPJEEf5EHTV5sxGKCzUYQBjYzLUBmi4kWuU3BzphUVLxAoRbNNMBAh6WvHgwJt3Q1Je3o6MYJYSG7M",
  "key16": "5Qej52cL7kavJkhroj6tBYgtG9BneDaLvfqvfSLasYjq7JuVeVdYiq5VxVg6M6kcVWkudpXsZYnexZwhTRtwk3JH",
  "key17": "4qxxMLFX5PN7rtyRGxaCB3wB1TWGHts6Vt7pvPHow3p8hMHzpz1xzuXWNA2JKBXyrNNSxDvvBPPxKybpicoizZPU",
  "key18": "3ztShrcgH3pRfssX1nY6TKjKT4b22RvcE2BVfuo6h48kpjuh2AYfJwkPLG9mdg1D5cEJEPPJfDCpWmkhBpm8Goya",
  "key19": "5ka2gjbnVKsXjuokNZbBvgXqtQuCohN77Aa41vDqsnaV9oqfpXwsDTWvrF9ioCEZmjwJErLbKkwXGA4VFwDabrSD",
  "key20": "4Sj3tyzpWarF33sEFpcnBPaDQ7kJUN9SZ9AmX2cPzsdyW9DuTfTwGxafxchQitpBAgNsiotY5xFFL8djs7UuiFCQ",
  "key21": "8xftbiwgGeQqydP1bTkbt1VFVo19aPRvNTnZzDvwRjF5a9x1aHZDtDT7uYotDoKE5Ct4tas7jK8ewfNbX5TSSxM",
  "key22": "3baxrKsmyNa18rDEmPtxFScf3NumQxizjbaTuL2AehqnbsZWx53uSaEHsAvYwk5eF13hdV9nvaSCbYKEf4m1QgxD",
  "key23": "5Cf6DF1hapQn8S3WReGxiUWcNckutQty3DcKLmT3Hj5MUveGhTNiMMyY5yDFUY4oSZPicMhpvgrgaC75ymU5Q1G3",
  "key24": "UFpEDhg4GpJRhD7ZR4FUhtmfKmGbvUPjjthriYE3esgzJuZw3p4gK2PG8QJdXNNgYmeWHDnbb7a8iZxdTBuwuFT",
  "key25": "2VUaR6eXJYV6VWgV7HbhS1wKM32BLQ1TE5PGAnJtUVMATwHB5hfpzhd9rY4TR6C9VLQsm5FsTEvtsLMRztNDBYnZ",
  "key26": "4CGvSWaA1irVKZMmB2HBzJ1Pf7NQV3vKoLvrcu1GtjuDBFSMwuJ1UCw3LyR9TjLfr7pCFVH7BtBjMtwB1wMU6sqR",
  "key27": "3RTc5UBgZzr4TqD44iDydo3gmV6neGvoMLw3ktqgvtzLiW45hNJYQbF3W56gtvS2b1pe7CUhyxMV6CFUeop9wfGD",
  "key28": "3UibRT4KWs528XgPYJhCrtHgmuyfEkX94pBkkivLYQ9ecJekfDi5XS9H21P6aKApJi5CvSH6g8a2TE5qHbMuy5nU",
  "key29": "5Qqsrqp5unZNYP1SN7PjnVRwhZnkSaG8L9YyGYFeh14LeM6buma9vz8dd2sp4nqeBxAiUaFveaKMwLxAaVPpX8W4",
  "key30": "5mhNSszE4c318D4hwGeY8pZCdaEmwMxnutGhDcCG4TnsodGjcEZig1xpx5498tBzUVdepfzhoQ6KgXd4tuFqc3Y",
  "key31": "4EmxPQigxUydJRiMCgVvua2pEcNSnmxDakzeC3jLZXP9EAJ1F2uRHPQc2GgSk11Ge8ybsvQVvYK1w6W1bVgBfcaX",
  "key32": "5bi8HE11TQdvcHgC6RTVHLfkjkTrApCpDpaYFfkwU5GtE27fs5v5hGFqsFXXpy1N9f9cqjiKwHE8hWofhYUNjPBT",
  "key33": "VhjVYRNcyutLVxee7xkwUdTvYMQKiwTJFNN5yHezYVVrm2kmQ2is1dEw8brkEbi1jDFw614GnkqvAfP2Wavq3dv",
  "key34": "3ZSvKzXNkLKpukWckpzakKs8saD9NmoWv8kbEgEZyZZ5quQfjCvdDjWkXifbScaKVc4JiptRtii89isG4rt8Jaig",
  "key35": "PH6fMTfUC8FepUAvbdCtQ5ZZ1wpi1jiPpuKX2Xxjegh6JZebiYEd9i8od4BZBCvVpsj8j9PL7m2fwPu6j3pDdG4",
  "key36": "cSeNGUGytuNA1emYCwdACM3AWVk2w7C6qeea7wzEqFJWN8oSV2PUjiMNQiLvofrEeL4jx1FGmigbpq6RYGqDoR5",
  "key37": "6765RcRYKvLyrBEWgER3Kqz6cFahUi7eZKNytbNgVBbPNVLEqomdeAyiXGcbaYg1h91E6nEwRap6YAnGKUnjepkG",
  "key38": "4XNntaNfYUUurhwsk4KKFRoyuxD9vvVkFQJgzM2Sznrog4j5AQcxME8GY63eXFiSyNLDmsB44TDxrxEyoBj8Cjto",
  "key39": "5ALY3eQWoBEFAyj2inQP54wfTgsKtTfJZgFr9w8zr2sXjF2mQ5HWeHwL2hd82R6Pw7wa6ovqH6if1zkNiugQgSxF",
  "key40": "4Fi23hRYVDsfGEg2LcZFAay6kJLpoTfGZRvPgrojpH1U5R2Q7vMgRSV1eQj8b6Fs4289kBbMZBsaKBijaFVSGNw"
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
