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
    "4mjgE25ZB6XYnDoWBpJ4hTo78dzsiJS3EeUcBkthxj7hxGTXfg2bF2yivtVNj3YwoLJgQw8rWNrxQ2fcDcFJWTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfHaGVGf54fcPYYNYTwDpUhPTGc4u3A54B6E8SCYkweMi4xmaaCNycTfvAQSbQH8t7AovFHCw9Xs32moEpWrPqW",
  "key1": "2K79Fgi42d7jcS32kxZEg2FMFdP6eQcuuW62F82ZLma1mqUmXG4XfLLPWWHer646drgpiMKEpLCxhEDAEdWMLN2L",
  "key2": "5T19kKtuCeVWmU8LUU2Kpy9DiEvAT6Gd8q58egqEkxX7bj7e6XYkBHibM9zqwmGwYsC82ZaPeJugdGQGRcdLGsxu",
  "key3": "2bp78uX46ibAuexD4twUQcqgBWzpNEgpYRXbiqd3SZXjNygryi9KwWXurR5g3q9v7K1cBpGQTVYFhpHvLtTxbgnc",
  "key4": "3wU6KsXjjNTeR1agR7oQJUVXbahwUZkcTQ7NAWhx58aikfKy5SA1bGBM6JUxTPXoqsqYxndv2vjRntL9EJGkdFHQ",
  "key5": "673rpVp6xZ6LYrp9jvzij3Ebk8cndXrKAm1zQaXJjLykHXmznY6oLLEHVdmFpNoNpVaVN4XgdFPCC4ezPJNtWKxZ",
  "key6": "45LcAxRZ1mPgAVFcFyJ4YB2ruszMM1UHFgQxCm9GA6FgibhasEHcc5UmHos6bKboYsND5E18AyJ4ZmxY27VMZuXB",
  "key7": "4yHgXcxGGHD9JMGesQdCG7WSy19uEfekSRYUpzDAPdh6kG8zCQz9EMRsYHsfaxfDjvDizkKbP9bFwa97RYWnBTF5",
  "key8": "353tnkW1sHT7jtkaDnvAdb33z5GXrGkHxea8rqGkWmuraXQrEWDzSte5Avw7cuBVmW2VzHRcAbzi1JLRz9SbvZHB",
  "key9": "2DW7P3io3VJGGDHy1BuAtoHRZ96Dm4suY7hzW4mysPAemj1dvLpaqPBjc3b9aZitW4CNMo3iB4zU8NxNLnqwaync",
  "key10": "o9VMSqSaTfuVgKieNnvYZQ6YGPvHwKHdk4fCXViAg12wQ1tpUhDpCdSHViFUmUjFtMTcioeTfCGZB4cVb11oSir",
  "key11": "25b518UmtCM64byo4t5v5eL4Tm1JzJaudmAcPnjHcnPtiTrBmsfgkNh6JzhvyrEDr44vmYjrAeVeLG7s19BStfYn",
  "key12": "3tMiowcsMaQFMfEUMi6knD6fHzPPB9VUaTX7CupGeWfJN52Qw9tEQZX1PRkomDZgjC6pfqDjC5XvpUREuGK3yW3i",
  "key13": "2YtqvZYtExsnTjeR13UBPa63FZZs7e9oAGiySqoutSHUN3H6iN56Yq743BVH82dYUHi1huEuBawd6hxGf4whwf6J",
  "key14": "4DSDTCpdBzsTtUe1EVDqh8yFaaUm4Bk61d5Go7wVDZ8hAVp8SFcNb3NjfAciyzZYBrLAsokoUiWASWyJ5kRUNgQ2",
  "key15": "4UHdxvccoX2e5bzpWHQxM8pQygbB8H78jRWqhABp4yzi787G2sxS9jFfvt9HSgbc1p3dSRtsSDnf24kydvvJPsxv",
  "key16": "4d36Em6jG8TsZXFe6JaikFk8HRQBrxKwMy3WPZmSqPjcVLjb5Ns1oMGycASAHL1FhNrhvGjxYTjfYKcVe13KefwB",
  "key17": "3Zvfcp6yWPQSKmd2SKAmy9oPeehKSmMehoc1eLbbF3jM9XnixzzCSHuDYMcUBWTy8i2bjENrBzXNHLyF5MdJ4Waf",
  "key18": "4iupMe5eRqWHe9MWkxYV13XjQ3YW1FMv2XE6ASmjeRSK9fQuNc58Lvx1MU4m3eAY4HURTk5jkyWA8DheVh7YhHq4",
  "key19": "4PVcSqeGMbdKNg7xUoSCCF9C5mDgZDPCTeTK3i9aZWgpY1w1VQB9KqZX7FsYcAQyb2C5uFErV4wvcD77w4MQy3ho",
  "key20": "61DzLWjMisRrNmR3pgx2va6R32ycc4DbW5TzVp1w8BwZZGBxzi6kZ31shjMdQEDE9UHCkg4tSWyzueavQ9DfYPBW",
  "key21": "2pcprPMD4QYK7oWrqGvJWoAToQYjjHTuc24b1suUpFe4XGD8XW56qRgy1Fn8nWckc5y7r4AYcNPQofQhixTfuv4s",
  "key22": "3MNrW9FZXiAne9Ao9m3ukwQtvNe5GNnjyNYcZi9vS8GfBuoRQ99ofqcuBSRUU84pZc2JYbsfyLK5VzS6fjrEfQwX",
  "key23": "YpNJk26Yo39dPdBLrvDPkkLAJUxCLnGZV7GkHNU6bGcHwz2fquJH4ZL611eC8ZmZwhmvKXtXHtciK2oPh9Wmxza",
  "key24": "5HzYoaGXdicRNEkJEcq9i7DPzMmmHdCKSQrCtyEhkgDbXdw51Z6xXHEJKjhv3f6zX91R8iU5QLZFc6vqNkeFvq9U",
  "key25": "6eHru8KYDWNwSHFjVYwdFgapvaju7xhKS85oTbma1WPjBpFRPDWUfnAFmicAayRT36ufdy2JLnCjKaBdyudGb9g",
  "key26": "2cDcSDdSBtyF6rmfZbSAikJL32mPU6JVhzHK4Y3fPARicfPZKRjtW8GcdWJWntbqAr1aE1puJsPN5BK28eaX9Yfb",
  "key27": "2xH7t3RsgD74h3p7dMFqBVyNrZWH8gzgPcU2TKmkwvFJnwthVjidLQmm129XxAL63GDyN54YKNGk77kMBn2P8Z3b",
  "key28": "5zi4YsqLz1TjpN6WHjY7Enx271RqqLjXMRTXLdoL6mxG3gjGaYQQz7HFvqqPN7RWMAV1jCodE9nqzo9opKWfvQZF",
  "key29": "58svFtqJhjbt7tkdfU69HziKGhHuWM1i82RgauDkzxGn6LDHA153qpY759VLtfCqnv9cRGN2xnnDk2BhpN3S2694",
  "key30": "47UwCcjEfVjqH52gtvGZwJkCYmbJdsTfqXTUUrNB2fnBR8EzcrfzaUsdTwD8WN7H7uHsmyS8x7xmQQp7U2vLLihP",
  "key31": "2tFMP1Q1MZfP6pUJvUqwRts1qUPPXpS13BfxhtrCcb9dKxhjdibXmpDpAygxWxm6PFibJJzuF1x4meHdvTSFCP9F",
  "key32": "3LFngcYTWNvdKJ66sJbbmBDWAPNMRq7CkC74ivsf5ssPvcPqNG2zCduK9ZtEbyPhwYBgNPgbq3Pc1x6sZT8Tboky",
  "key33": "4h8VfjGoESR3xrv2qACdmyniKBjsmdjNfJLQ7ddGvHZW88rcCiCnh6iiohyzKG1xNYjHY6dnKnGZ6EAS6T2gRhJm",
  "key34": "622XAoWp9RCtydGkCZcAEUrKBtkqBvT3XKQMY5hf9ngTxzEESwoRZ4DrFWKXLWasvKuNjscXmQ1aqT7rhhrfqrgH",
  "key35": "52BPHLgdhGge5Xd4as4LS9bqwMjv4drWiWLQZtP2XMJDp3NdgfnnuMZqaV2epe1XBmf7RC4GQGZiBsJrmvcFxbSa",
  "key36": "4hQmtE5k3xWpFfysJzpMs4EoJXqbn4L9q9vrDKnedKsQRqoM5cNq5nZc8ZzmLBQf6Du3GfCiteThxg8kyJxVTYBe",
  "key37": "5UHYKTaH6Cp1x6M7gc4S1MguWy42omWwMncSBhdUHHhCUSCudbncfsE5o8KFATRW7f51REdMqcpFpqZ1Smx5UKej",
  "key38": "3xj5LZabsXpLhm2qAsmokULqBpvTRpp9vjdfTVRrduTCjFhBCZwCGqKAipS6gzfZVZzfGatJiedH4kqFw2JiJwY7",
  "key39": "29Ppj1b3D3kQi4XExGGxt1DVq59zYUVWWPx7hF21sdCsYSUzNsKeVRcFV88q4oE1zNWoZaHoRwTRFj13QikxMgaU",
  "key40": "5MLer3Vd3b7pjXFKJMBTzCU5YyxctDrt48F62q6PHi39n8WxfHwtoTGyuj47gLE2jAD42gsHSCEVxr27NEZsYebh",
  "key41": "61oQj5a8rNDhGKRbLJMWuTNwcFyAVU693Qbxz2T8hbRkY7yREut2mpYvboMXw1Xz6HEfGqEjJ7CSfbV1f9Ck7sNa",
  "key42": "5gZdhttWhK68D1ruFsxScfwgHvmcJJyWbrzbECdx9K1WXHLWum8L9pTRDL5EZHApboX3AHf9FNBHC23wYi2UoKjo",
  "key43": "3Vt7UgUKdyVDnGSDiyrvDa5KreQjSdACLMe11fLugg6YXRZULQfiZK9b5RHggsxdvgCAC6bUX5KzoHLeLNFihqeF",
  "key44": "234n681JSLzCwqTRd81hcbLUdPpkGsk8SuYUZVQPB58LUQ9DqqpjDcAWV9JVJM7qCnUgMwBcagsHx2WV2Wcq9arX",
  "key45": "4e8ZGveLL6mdhUDdyjWa13nz586SDaxAdvwHMnDPNudPwdNxkX3AN7Y8LU8R2TD1zJrDznZKneg9iBfKHNEU3W15",
  "key46": "4sZG4u5objWzSquSZXCY9pzYZBUzoMNzpcpyeLJg56qg1XBDqzCWhMuaRP9yBCFqwBJAYN61ZJ84nWDiH7Zm4LQC",
  "key47": "4SbqBqHuSk7a3475uiNamqG3VzkJoNPNR4cPf4Bv5t3kNN9FLVHSbcQ2muHqvgAm1jAdATNbXBsczrYzJZHUCqov"
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
