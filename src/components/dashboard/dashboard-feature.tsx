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
    "4iWPgHwQiGz11KmuLRbDsGjqMj1BxC8jS4ipDnpdRfbsS3JXJNW6UnERWy98YMZGbCnbdqKHZ2a2P8fYSYAqFvxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8i1KhFmdFXo3omJMi5FrWQjdKiYsBcsQb1sEPump9gZiJfBu24NuULqFLhenD4Z2bbZ6HzLKoowQMhH7xu2eyC",
  "key1": "cfDo8hxdDcjq57qSvuhBB5td7SJWz5pRuaihA4GLBwwPCk5Bt9MavgRbD37dywh5N2iFQS3ShUrw2J6mnQdAvUL",
  "key2": "2qjNfd3MYxzYWpgE7NDZnEmpnoP3fg4VTo5SMbrsA9NzUW8oaQsXiNyodttZAeGdZPw41XnnSg7be5bSw3hW4tpg",
  "key3": "4KFu7stnYgLzNKDNWesq71bzNrsc8By94MJZCCkRi4KTxHr84sSRNHpeYBCpj8m7x2RoGvhEAg9x2QCMgSdTaXbM",
  "key4": "3fYRHksgdWWbfPE2uufpGFeP6NtYsmTGtoSskQi6t7hHNyZLwtwgAWV6bpeGRmVrE67MpSHmP1vSWLtd5qZtFa2Y",
  "key5": "4RsUdzp1r8gTRNraCRYSQLeqyiKq9evijMbxgzjqsReTS9whdAjkiEWR7smoGFE69ufCyKsbc7j4vDUvLTuv8huq",
  "key6": "2Gbt3JFY3pFKqszd26Xmxe4uK36wag7CD1wswBEgy2UQtYRe6qSe3BWBY5wicmqjM6qNgqcgnsh9EgadgpxiYj4p",
  "key7": "2fK1E73JDMyqYRBJL6oURuvv8Fq4AymVdZhUrx9n9XFRmC66Yn1XNECneMVm2YCW2DVKP3QWGkZCRUFemfBjMyER",
  "key8": "5qvKtc82Jc4DjAGQn3d6jF6Ny1zpFTaXxfbVSyUFqM9UU14ZNEjmT6n8j8w5Ks62K25K7U4FBRCKXutABVX1Lk2o",
  "key9": "4Wcm5zKm4ToZuofaajsjFgupuaofHRYZD1WsfSReEqV7K5JiJtGsLRwDh3KELq2nwFqFkMF4MSZcCZ6BkF34jMxr",
  "key10": "2AMhjoTUo9f4m1DwL8HCLEzsg5BCtqwbERc3U7koxfHGs6Me9hWobYNcPFQfnnL7iPMxyWkZ5abJu9Wz5NzwjmCD",
  "key11": "STutqrRRRzcfxcEyNBSsoinA94d7FLWe3U2kgLfdtSmtWMG2RRXLU8oxWuFpJMxPxfPaN1H23tuDpomv4ngW8RD",
  "key12": "3tVA47tZUoEMJ3KmyCCWXrp9NU3LpSYm6dWKxUKoewvrZqRqSJAQUeNNr7zZ2DB2fAXCtqDSjp1YWfUtu6hRPvmp",
  "key13": "sZCzWvQbeWTqiAZ1DuRN8FMc8Q9z9nFiRrTswD9XHnq3BJgdKvUwqGoVXFXm2XrvwVopnK2RocUP5Tr2snPSMnp",
  "key14": "26QsQhk2aJeUFCKwNkpACFiXAuwCWoNudoRLS5WbHcatqfy8puN71LvwE81JHxYtHi5Mb6aZ2k1GoK6uuKus3BDZ",
  "key15": "2khwkjPyKEDUvHLCyRVP3QBgBDoHu5Ep2N9uEC8RznStgTMt7MhxKCo85TCVhHMaZP74rdVT7pvLjzAv7Q3R887a",
  "key16": "3RT6JH8RHnJP7zfD4EZUi35UTJkAsGzEx3hgApx6o2LK2tXMaYcrBhtxfsQ842LCRtaw23jc92ryqGJLN7sruoJU",
  "key17": "2kzJfEyxvkcZYtXyqmaycbv2rbrtapwiDMx7V5K9b2a1Z9iNT5wYqtYkNBCkKbGf7mrpRy4k2HC1HixBmzkAvbZd",
  "key18": "3PjYPg1gte836LqXFQXrceuxQ5pZ8mHbQsKXNhmivqvfGZmSHJDFVJ9cex54XhzQGCFL4rRzQNg32CNHfZVNe3Xr",
  "key19": "4BupMUJqi9ULnNvLNqU1ryM4QVBEyaEonAinPX9uJ1Cm4mTi4UGETQfxiTmoLfSDPNVZEQ2EymJXTxihh1p5zndu",
  "key20": "2ZykcPku3J34qw9CFcx3oidFY4rguQe7fuTrPk48q8EP5k8AXTuG4X9qymsyBWFPiqBHxDFHExdHTi71ew8R3Vjh",
  "key21": "2vQDaqKDsfa4PDRGo9H58fSpV6mcuMfSu12xkX8PvDGJx345qgQ3k2yDdmqfS55DXCWkUcmP2o4q8AGm2pkrTFVB",
  "key22": "3kCZerLHjNKVvMNAUbvp6Moiiifw5PEvR9LcDueEMmuEctSrmyTfrhfcd3iuMpHuL4xGnvgDY9F2bg7wpZdBRp6L",
  "key23": "2Y5xvoHHVRr9PFc67ijfjKVAGqvKyVuavX5EAurs6rhwzFdwmEcXa4TxrEz9Jpvw2AJt1u5NSvsXGXHnstNehDMr",
  "key24": "2ay8kXU5tB9frjZYANvtxkjYXXMVeQhTyQoADfjBCX7CUNHPzJMzT3pwFg7tHnJqdT4eLdcMDY16wpfXy2PXmULT",
  "key25": "5RtgZ1WSzTx95ZX1qQXp3xcGo3Jj6fJvqk3Q4E4yuNM4D9z8Txq42smBEBmmyrr7SnNKzeTPZQNYnJEYtCfBRt8e",
  "key26": "2VqVr6mhYC98Rej9TA1mXz6nSDAnT95KiuvrBtXm26FAGcU3LVXBg6EvaYi1q8TDjqkT7YsJxy3qmwvYuhknJYTk",
  "key27": "2J29bHcrx8mr1DCipfmyZ1vVJcdrMgvFgKrAWqh1KoKZiRveqzZKy8rv4TwiGxATjQKTQ5tdnjUJULZv6zsGr3ZV",
  "key28": "4pjcTXEE8EVRmtnn8pN44Hw8ZtK4aJ9ciSJPvbJwPqBz5X2XgCpG1f4XEnavp8wWNZ5TnLQVfUU1T1hTphnKAn8P",
  "key29": "5iaBxYXjf7HvNaReQyHLEesQJfbVeLYjJtFgwwHyf41VJ6fKfWGSx1cqoDr9Jf4kPifKqMqqGxiq7uWa1ZPwfSHD",
  "key30": "4uUHWG7h5w3YDms1rufFQvKAgH3fm7AZ5vHMeCo3hbeNqET7udQWj6tjxdKx9nTdLUK59hbpVyiRsdUJct4TFbup",
  "key31": "2uY6wmMp5S4K5GLmg4dHaFwoeqTtPZQcKmdEskc5EqvGVKNmFMhqSzEVLx6MWBcqeenoQ11XRAALKpeUAh9txFs",
  "key32": "62QD61ef1Q5yMUX4BkUQZJy7zNUvTNMognL28CreJPXsXqbCj2b3WuF9PdBbvKndfrnMXKihD3mta1hAwii3nBEg",
  "key33": "64eCjEPFcmvCb9uHzL9NKqmTqsGaG4xXbX9iYLwReXVgDLaLVQdyHw4mNqTYU8pcZe3rERPosAxajoskZyJqzFhi",
  "key34": "4UCfhzuN19hEX9tuPmva8NVKuUyoHmstq5mZr185WkkvLpWiYsWQsLx3aQE7bn8Ck59EsbWQiBEvskfDPZouoWgP",
  "key35": "54DUC1JJBSqEssuS9rSCJUoWE1dSh7JYXJoUCXG8HXGSaEvrz3UChsztv1pyYvAAHNoC5SmWPY35eksubmVaeYKQ",
  "key36": "5sZ9nj6YBtZSuCwBcauXRbtvaXRUURYGUFgPuUZjScpePPTJkQvPXLmGnmLN73qJNtheJvSRp5zuMBFTxpP76Cto",
  "key37": "5AvJDdBtVnd6ech9unSFbpWwurmqJnYNLAnLoWM1Eqcr9eV8vcYzEVXhB8vWgqVthmRgsDoy2PZpDVVGzRoCdyti",
  "key38": "Z4giufarCYH52GnB1UUHSHLueg4xnD5BBGbS7SV2a3FgpZHw2kBqFLKeb7xfsBVhRT8CQJ8AaDV7HDUSGQFA9kA",
  "key39": "4oUnyCtHAruC2b5MnScAF8ZV9BrhUcnWH3bqMMYvYuh26z2c9fPybopRiz7KMS7wjdMEcJGqRtHa82jkB5VSZUxn",
  "key40": "62dX3sx5bwUVu4agNPSKN8PDbizpLrcmfQ6HkBFmCaVwmd8gU7bcJV539itJWwdi9cP8DCzY16iCXo1pd1NMDRmn"
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
