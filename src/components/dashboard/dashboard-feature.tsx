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
    "2HKyBSUEgpsBwSGitMhaVpW2BsXy2gjcDaP7QiFMf9dheCWzpdubgMd4oAVdjNMi682Z3ToGyBKUizMn5zs4pxN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lc71v6wvPNA7UAju5i2tSPhyvKcg9m4d3YHYXVh71bo6nc4A1MRmSNXMDnZVt6P7CdqqtR6URPXtQdaPbGGtDfJ",
  "key1": "51CLNCp82Hk9NSxjz1ZHvPHVb9SsUGn8gezZ6yDm93r7rxVVpJQyhxg46sRBZCpa9TUKqKvieikMGMy7omR2hfiG",
  "key2": "5tquR3RPf6ziTnnPBAaidyjVA6F4oscnY1F8srsYxS3EZQaA8yQ8Btcsm6xMrS9Ahxb6xdFmMNtMQPkpcbvaJXVV",
  "key3": "5pUN9wd2J5j8hyg3ob4uvBA35ZsPFZ4i2kEZvPjcVUWXkG6Lhygrq8UNt75jgGpoUD4Ud6QhcNU8RAfLBG1D5hKp",
  "key4": "5TViFhTZCe6zSBbRxtfE5ied7q7sx4cFxaPipbrrRbjFDEdNT6LvoxPzkNTA8voL38nc1gRR1hWaSRMwqP7DYC7s",
  "key5": "MVLu7agKXqNbqBN4pUAU83vHeuYuz75XxeKrcrUGZhKxjRHxogN4jmo2BG4FLBLCbixpwJx9b6gAp8hfM74rgYP",
  "key6": "5mwerbBJF7NJ57dCbCDRGV71Hpr9GSkjRzYHay9rqzQ54Wk17wmyRAzArL4SVxSzpbDsNYv8fGaDdfK11KZWjG7z",
  "key7": "2XwEDba8rAhvcBrMXKMTjSM9fAgngcsH3nNg1qFNRgxTkx2dzHbkxznpVd6QTdYT7yiQMbXjziaLfAiMLxmezSpV",
  "key8": "4fPfB9wXThh95uuP8xKZgwZCmFbZMN3KPzMFD75GWpwpky8i2KZgi7wGRF97map1EFGk1spKYpHvtdVYCay2SWna",
  "key9": "21PTgjTMzWCKVHkRwpW1hRo8oCmBfPupdL978VzGe6vHFkht8hG9WKDx3mym3MX6uqCPgPdFy9Segv4Q6Do5u6v1",
  "key10": "3jpNjci6qHH1BxoGvWboTHbAvVf8ak2xcyiyGrfkVYscwGvYiBUWGv9tfzy1hTNhpUmszj6RZcBFXZucYEs2i3F5",
  "key11": "4kMPqWcmyMCGVxgtjj7ASMbAF15bU6kR9263CKaiLia9mK7fCzoe9PSimzZg8KKX12atRMWfmTJCFbRxtCCt1LbD",
  "key12": "4GMP3oTwXuEXBvS3waoefLoeFAL61cSGfTG8AX5rSnxCpwM49o6y5BcnF3jTmzxcKWStoaKqR7ywg8oy6oZDCBRi",
  "key13": "2mhbL5LuBgMiJqW6zcjLhuZQYeGGgfNcQifL9P54rWyvSqB92CPtih19Q6ZTDdmi8yz5asiRkNPuNDt2fzeC1PDX",
  "key14": "2qvquetBQr3rEKdW4PYvySS2aWaxiJpuRLwfNbFeHGiM9r8jWQuRw3dCaqfxrzBgpCA45HgqpyrVASwrdekhiYU9",
  "key15": "6GfdtrQfna4CMrcBPvBziUe2brHifdDJFf7RDN62VRiMDH7ggsXBYVEupn78DoEpjeTMeRJMqVuML8oeSss9fXR",
  "key16": "2aVCXWs3yUZ5XFgzejsgvma9546kNvp1LuMUWUce9wjatCQUHfGfffxkjHH1yYNNDWbAMbztXbwu7y3hsaNwf6sP",
  "key17": "3ERkxurGqnEsDj9fSHifBaTxFWcQYYm8AExYRDoHejVKyozYjxFtBtuh5yJGMdtfGF77VQBNqU73cmR2EjHTe2Mo",
  "key18": "8ynaHe7E7yTzDTUdAUKBRwkBCHn3esdSwHeHvinKe2GtwoSaWoLwqiaRTgtAi95q5BLsgm7zykZBGvb3ioHm7BJ",
  "key19": "hLhNbHrTyTxSaaswYXR3TEVBpZBTySGSjXDyuoPaMJpQLWU951K6JWSNkmkdNdBCVjMaZuivZDJjBjpyuqq6opY",
  "key20": "53AYBpWgDDhkHaHoMNGt6SzcRSctFYEJ8VYtD3PhgXgSqHgGBgHRNPXqBfEj9uGYRu863t3XfyRnf1NhxniqFEVT",
  "key21": "5BX8PgaWKBJw4RrFkJr6T2J96MZLCo4Yru1dUcj8W3rZWwcKZkq5R5wezmC4ffCiB7uRBNSggfCx9TUUghuAxM3t",
  "key22": "3jhvPUNJKvrsLcHqpNKkkKtDmL4j4ZfxBB4XsK6X9R7sWJgg198pdaBjBPELKZ9UT96V8oc4HajVdM4TbAKUu5jE",
  "key23": "51xfS74qd85EpgPhiA9F1agEX6TN4rgPH3v4se6cYphFQZKrV2yHs4maYypVRTw1jDWdB7yLFWQLqeYCYwvvfpr7",
  "key24": "hv59Pkh9UQvaKv17QGrySCwTmygVf2ADTwPW8HwUFKsrsZg5EvBBDGdPuxZKFJ8mioLwkwf3ZXFrGbDAW8nA4YV",
  "key25": "2kHTdxFDXUHUfbYr8G49GZw4wpw97mdwdagLTH4dFKS9rdgcJTJPGoUtpNxnEDMuWsswiAMoxGfQTekQu7rySCsb",
  "key26": "2nCgrc8qHdfSKPi2Jsp5yeuFM9pn85qSshpyR89L4nQAfGssnyksrRsq9AxMJWy4Wx4Q16aD6azNbv8AdYDB5LpQ",
  "key27": "21Bn4BVZLRBZnKQYNHEge6SeeyK3KZzpMyKLaJv19c13E9eyhT3nEo9KMEcVPSxK9i1b7ng64GTgzDVLKYTaBvFH",
  "key28": "4fjLSsEqYP13pdJ8BzQrdHdBypZZPgaCAdHdopzoeuopVEmzyJxCJFrBmjjxTr4g1aPRATLc1LF7koCHTDzB7769",
  "key29": "2GMmDXV4UFycEUBTE6DpkTtVDqr8S1tpG8Tv61rJkogivpi574PqvFe4yrMmoqunU2McVzUAVhJgY78qQM326ecD",
  "key30": "44DSoDALFFK4Rp6KvXMPK1zpjQgL8J9LUfH7YY668oAGru9hiTKcXJvUSbjCJRP8pfBpcvdf3pYGCKXW32SoEP6K",
  "key31": "AtkcP8i2BLJPkdEP9ZFdY1M6RJsEC7gPbLb9xv2s1joMTQEgYRRrg6DjobxNdEaZvYs6ii2ESbA62rrKAxXCBF9",
  "key32": "3mCy7Aopdb5ahoo3FCbQaSTBAxxUN4WQuTBQYbVUay7nyLRDFK92udqs2MB8m6JM8ZhetBmDwBH47cpuqfdCYr7i",
  "key33": "5CrrjW2xQJFQpEBrkoWJzQhz9V2pknFss8esSADpgbnznBXp3ic9iUhkVxMxkaDHQfpRWsdajipMBy2v5PAHxXGS",
  "key34": "5Qc3S4T3AsqEXpEbZ2K5mLTxmU7CSU7RVqzSjrcWN1u2N23jyV8c2CHcyrAHvcTPNuzrJ1Mt5rbqqDcZiVNoBE6n",
  "key35": "DCwFdrfd4uYyJRpMb6s2YAqMHJjPt22yGPG5sxervxnBMrCxYehGN8yNNmAVZQjysFt6yYBQSyGytGQ6kmVBLnX",
  "key36": "4GZFSwM7omg93v1CgEVJBoCaoUYiJGPRVPA35sYxuZfiKL7jgWLvwQjLHYBZS7BYv2duNCaFzESh7RafV2bV5DT4",
  "key37": "4jJPraZT5b9gkukfgKyWF55HveGsZLvbXhg8LDdYLXVJjXKacMB92tg2fNew4692iykUhUKfnMyDB8XACTYPDSMj",
  "key38": "3MyNyYrcmZSXoXbo3y6gi1weHtBFEpgNiaZBVat1XUC5Nyx3kAcRYXNHQnS62ik6UrXSabHqapnNQ7QZiQ2Rh652",
  "key39": "Znk2e7QHrjajCfsDLQzZ34U5WHua7Mpupj5RpX2xYSJYjraX1y14t7YrAHQGn1d9mpYsv64fxSqmKRfqtewjmqg"
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
