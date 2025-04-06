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
    "5BjYyMsycz991qMjVnvTSQLqfAKTb4ZpDH3qHtbLus5FSCMzveoXmkJMT888wY5fBfCkbvUkjDfRY7fw2YtyrpN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LSa6rCVPpC4b9jJEysEtWqhDcrbzUWEj79hXgA9rMfauF8iGYXUSvGVpXyCDiS29mMqxjF7zd68gHy6QsHGxjtS",
  "key1": "4nB6cyA1buxZqADi75ebYqi4R59ibPaKnZvZWQhXFgpxjdwf2CTcS6qR2mDKs1aHaEtVBPMadY1LNH1F6kVWdw7U",
  "key2": "49UJBWn8nGLKSPGFU9gS4QgQXjWBLkSbcCANLCKNf7euUXwuVYGh97cNkYREcu1KFSZ4NeYUCJmGcfpsNL57fuCh",
  "key3": "4XQp69obkutEAUVRb5FkxrNoitKoQBZ8nATbtaMxqW3TyMVK95AtZF9E1zXmUCqWotf2S9syfwD3NXp4yUxwZzne",
  "key4": "5YiidaCiBT8CxDt513SwP2pihnYjcWQjHRpBFxTPRCm7Mf6qLZaXPJNiQaX7A9hYXpNLetJ67ZewvUS2nF63dKZf",
  "key5": "FcF1sSVkJJtJWetXVQWgmoi2Yzq3qovSJBnhA9eifBrNxN4mMMxhsUWB6BVEV8eA6wSrj1EcSeGz4pkWBJNTGAT",
  "key6": "2PSjpjpDoRcCmPDcqWbqZd6T1xBPdtwvveSyhN8eFC7qBmSH1zpqGsP9LmMbnapkbyqpbEAPnreGRNbDVKo7eiJi",
  "key7": "4FFQVAy7h77tG7r3cJZwAL3391gEiqQZHZXkV7912GAeKUcQWY7cQisjVeK1spMCp691yiPRCz4kPPcoCfAXJX1K",
  "key8": "57dMg9BNgo7GDicowo8fUcFRdhyjChBabh8AhSEdNUZWNMz6zDy32XpzDm49tpgcvR7eAThEsHcVUwrYbhwPZQeq",
  "key9": "4S5FUXGLCErabXHRffuGUpU1uTnALiv8jMadhFaPqsXZ9my81HGVvzGcTRviTocLUyHzT6F3WCExgxbvDVR7KeYc",
  "key10": "4R5JkZQwUvbR6eDg2HtUoze4dwXtxcv7CFQfR2qmm2Hmi4hYjNbPvHdY8bwuwLS6icUD4KtPk6EEJfvQv95qstzq",
  "key11": "9RqqPcnaXcDsfUg6vXFFx5eRvnoJM9XRq889AsXgEL3hK8SW5E6buKc8hva4bvd2qUdxV7aySYRdkxQXEquTydM",
  "key12": "3YuXFyxRSmbFcYPGJB18mnZH8dTZcSZJmZiSYhHDcyS2f2tLJtBYnhEmJ3SPpb6gkm14HqZD29rn4gP9jyCsKLzV",
  "key13": "3yugT2x7UQ5hPh8SYdBFM7ozNBxaJ3XyXJgsgLgnf91krSbyBwGZrRhSQLaQKZAiaHWqBZMY8xppp51BMDAivo3X",
  "key14": "3xw7ePxcRUeec6cxHcP5MNu6M7A6obkW1iBrDaPBMAfzMA8U79r6i8GBpRL92CKZ86dLx6vnpgnxfjZvcS9pJsf2",
  "key15": "2nc3a3F7ngRjv5C3igSe4TzCRNrUPVATC3rwfXNmc2UMGJYdAZ2NN7fFuThaRJ7NV78uXR18NLw4ck3oY6WjoaEg",
  "key16": "3FyQUN1C3yZttikGQxvtg9K58ydYvE42RSKpVq7Y7hZ9gEVcYQ2E3vnmViaR1iRoVNeHG2B6nMSrNoFLio6Li9of",
  "key17": "3fwHaECyxw9dVTsTNUGeosewyG5WZAysKZwPxoBSyf6yygHhXD1fNEqwybWy3HiW2QYfbpan3jPBSJmXAmyYKohh",
  "key18": "23BqtExnzXjfVqmVAQTACLzi7LNAKgn4wVYhic8vdTjZQRR8RjRn4TCFR4PSEDdXDfa8tb3WLAbECigePCQF3pnW",
  "key19": "3rmzkHuaprna5DHpouAkPL38d6cAWbLZLcKGU2dr2TosmrhkXuCgscHZUkbnBneVw8hPZ5pdGMmrKKstTgSMdByM",
  "key20": "5McCHBLe6gVFrt1EdbynFBvmVyWkYPEEituz5P1XJyNCb8LoDGo7udDzJpAjt9oc2eqVjBevuLaza7zzFfjiq8sm",
  "key21": "62c9QS3zWMqTWmJwU7PJks4Y6nSX2d4bUGGXF3X84itzZVo9QBiGtDUvQXFxizzUXpfHgQ96mvvzkMzqVUQb5HDs",
  "key22": "Ja1qT9yhdEw1PaaU2RhSw1ekb7sQkegNbM2hgXdd3VeXJmNLGt6UR38KqXMBsYoRqsfZpu4V67WCfZWuwEvyy6p",
  "key23": "5D6YWhhUThf2Ykw6cUSF5zczgfdQDcFjCF2zjrRqoaSwf4Vt7djwFuiKDDHBAjJCSfP3Xo2yY4VypJDqTmNW45iA",
  "key24": "4a9iZSykf9fJLR36AKFDnNfAcAYqsb178tZDQDUUPwSeYcbC9gmfhh9GLFxPLAomm4b9YrZfcxNkLP819XNwJnWf",
  "key25": "iYyRZHRNY7p5yTz4US8Picv1LrWRnuyNZpyYFtgXpN8fzMC2FZeCPpLqoQeLxSLqrFzkaLRogDs52tUvXbocumL",
  "key26": "2LejqBh4iQmzZmPfwpFujFHaZTLPHojDoNQaE7RJEmnuuGHsDAJwppaA9VEJzFs8CX9Fgkj3NmysmXMxrHzZVVyw",
  "key27": "5KbLfBj4sVFRoy9WVLfZnFR9iKDARKbb7pBd7DSNbrYxqhY8DcqeCzwR9n53kavSYGFEFpqkiu6T9vUYw886hoLn",
  "key28": "4sTe84kXeQWWQyCJ26L3SfXkgBUKCnvz2oe75i9is2CrXBLP435N3mNqmbEWeqy4jFmoxJ26PNb4EZF38ZgH7JDn",
  "key29": "38sgJF4UGFxuukY3HrDdS87qM5EL6oa7Vy9raDqjDonYjMv8BPaY7cmWLm3ESRp9U1p3jm5YWf4cFe8bC7gDcCQd",
  "key30": "55a9rHNqyq6UVUpbmdYn7qdvNQkkm4gJoVRZxagvSBCMXwdggqsrKVtnbkZoz5bscfqTS1NGvbQeyCShri3smtqm",
  "key31": "2WZDLuCY3MMSoFVdbXK5DR3QnnxKDpuSHEStVSZRfqs1oQQudbUX4BWWhPTTxrsfLXC76U1iA7bMLYnVKCAGPsXN",
  "key32": "2Li7caYDtJ7QGnHZftieUL3cQqGWNiULwLac1PRV9cvp7VwYLRsReFzjqsCtobrnJZb6WrfdhvhG8g73w8Kfv7dH",
  "key33": "3rTTBUawgMUEhmnbKriZ2nq48iBXFiUMMrWheMUtDVcCRxrPPsNFVwvGRDybMprVu2wLMxtbUZ4xNUsP4bTW1NLi",
  "key34": "5mwh4DErhnjn6QKwkjaFkzaUBNVb7pve4gmUFotorDsMgRrmZfMfgu7dTBSaCVeJi3239VZob9FCgWuyR5fv5RQV",
  "key35": "51TCTrU4rnSpzecHLFDrby42qdHo4KxNYdJMMWX9MPydGPZboMa7cEAtdAEWQvjdnpNutdvvEWxsUKoeqPdZqFVB",
  "key36": "5d5y61ooS5PNbFAfm3rZf5qjnJ7hNwe43nD4bRvBbdnXM3ztV9HqSvXz2sHLzWe7hRko5Fcd1KWDSfegusNUMxop",
  "key37": "2E5MZ7dDo66ehtFQJXHCQ8tHTLTvv5ibkZ7Sr4v6hgCYrNurU8a4TCQbxa2neaBW8bhaa7CkxmQrXriDhdkkAmLR",
  "key38": "3m7uKTDJpUNoucrpUYTcVpSyjbvaK5XVVfXrRmWABzbPooxgmfrVxuVeYQbqkK5NUgQ4tUgUy8HwjLi1hoFEsZPi",
  "key39": "YheWmeBfH1WZ9bfJJjzfrw22dLoLWsez7kmqx2UzxuthzGXZdGboJZ3hCaens47w2Gpyo5X1ddpSoAQ2RBLG44x",
  "key40": "5ptA7h6BsmbyweeHH4gTpVpxiZSxDpMVDy93VaHDsFvL33ZEnyGnY5eBqTftk7U6VgkNU9joyujpUAjFMrvEmq3N"
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
