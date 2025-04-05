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
    "2u5h1z7U74AakXDZ38PjwLSiBN1m9CXTeDzvDsDUYdwEUSDegmbqDw2PYypD26N6Xdb3f4otibYKiG4ULJuz4WJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BBi7ZTmRbz2uXfYKWR1f9Ut6iLq2UeZJp31jDyoxscUYscMjXx1nXRbJLWfhvs4hF9gtkDhh9u7XAB6ygFdohi3",
  "key1": "4Rx2TbCdnndKS1qtYyKmPvRgNcy7iEp3ZYT59CMNFxNhbrXa2wr4fWoaqJPf8PtdNr5k6hRFsGrnQTQ3HAdZHVoj",
  "key2": "PvpfvDpEvPJn3W74gWBvu2DrhpSaurGyTj31ZrK6MF4hdN14XsDjvTky1XWn6HaZJJ1SmAFUcqBG6fubquZmBeX",
  "key3": "5en9RKXr2UsLA8Bo98aPbYDZRpDKZPbHTd7GAmYv6B9Cuz7zD1bUYgQmwTj2zN42RBaodPuTKSMbWiJTjCpJZK14",
  "key4": "2SAi7HwD7jRNw3C5t7jLjVufVEMPP5Vxpa3yR5kWFZb3YNgdwRSw6xZz2PXWdAAqjjZivPawcQCCeTBhFxswi1YD",
  "key5": "4MPALxvoUZ9eVrhQjRqJiSASrTJs5oBXeH1T7eSnBxM4YivpzJEZK5QVhmAcWVF2xQwmH6nLSng56QuhPe93WW8F",
  "key6": "3nJ13Df8cKBkpfKJYar84ZP8VmrM9ezxbvg2bSKfrJyw6DJqHtSDgFDnGBbfd1DrZk83S8J84rjhj5rFb1nRN4dq",
  "key7": "3s2BVTTTmuv1acyz5Tadu1eUm9uTYVNe1ADsytLsMuKbU9WyU9stADxKrN5ZHwij2faKzoG2Vu2ByQJ8o8umznT6",
  "key8": "5mnbkTzntVe1oSqbAH8wF6z34yNz7fb7V8PdGtQBfg9mvwezkKsqTs26hy4Jnsm3AcwhiMCAdauUAwCbVymmPWmi",
  "key9": "3H1J3q8a9Q65CcM9ys3e4qCcBaxW5qkfCwTA3TWqbZZgEJtCPTTqUX5c6fqbTbaCwDnPn4HhkNe6m59wBftAtqK",
  "key10": "AWGMJMQktm8zEByXznggvY6kQtBXYKWqkGhKzvPuZ5YQpDacTpSEFwmrkzQcQztcaVRWsXseXrnu3V2KvaZa1VD",
  "key11": "3yut5mxVMmLHhUdKF5CNTMzCYbXVPMmquySqNjcQkBbsnxkummzTbgFr27otWwnpnjJUfUAgxd5j7eSmnK5T9wMF",
  "key12": "3YLKrzr7SGfJk2Rr1mgoE8NBhuKjFrqe7dhAbtgzyGAepJfiWqqJFKXAdkqGnqEqhCaQo4wspKqjeSejVFAKtmQL",
  "key13": "3bRZYHdbT12nWXQ7pBJNM2XSs4Xj7s9hMQq1K9r32bcCAGzXRfgz3g1eZWmNMZGLd69jQD8q9drFmKEdXAVtcK46",
  "key14": "4ye3S3bTZSXR9AMCoPVLZUaEJpGS8DiT1a9kFVufUoSKBXBTFSF8kZF7A7UZaTvjdNhumDKckcsqfG2cBwJTGzcb",
  "key15": "5mtHhBbP1ELtK5gsRewZKgrS53Kd6UtG5jbV6RXLpWeH1yM6zDQKccp1F8RwUExAgAhNraKZMjcSjq96SxwyqpAL",
  "key16": "4RoYKRTARPQUhJ5ezs3958UCVxu3M3UhNChm5XeGq7ejCaThxk3oEDZCFUp4bKDAgciaSXLRQAinjzsNBYmRX2ph",
  "key17": "5ubusb3UZKVjs2CY2sMgJ99oqAVgArAYDkg7mQNjYnyd4AgtZNKZ2FbP535SsHPSKEc2XuhehKeoHYWY9nUmgtZn",
  "key18": "4EBMefRq3M5Gf8NKczFEgR1PcVTJZmjo6WMqVUt6fzNwkiwf7WPoXwyKeR37aqTpdJ8vQqQeti82cshmxU2zGk8V",
  "key19": "2rogqBwSfxF2R7NCGGUwZoJpsuD43BzjBWp7TAZw9W8kRiDS3ebCpVA5zb8zbAkz8TNXbYiqdEomKd4hdBpxviLx",
  "key20": "4eq1vxickfof4jPkEKghFRMQ9WdUfy6QavUWFrjo2h18vA1jPfyHiPbbxRJePRhQsi915ngcchXo8nm4kBP1B4w3",
  "key21": "36Zg7AGrTksox9AhEBXEP5vnkJVX28zM1aUDtcQToyEk3ovamcp9iExbt3qkjzcZRDaqVSc7HC63aa5ptDzCYQZ4",
  "key22": "5SVTV2xjRsyPmsW327Rtqi5oHPNd4KPLUD93hYZzeHhbvqFoE7Z9dVYboMXPfhdKJz3SrfMmXSN8BZinrk4Ky1Po",
  "key23": "52hQsKBv43KjBRREZCE4PixFN2hubE6VmuDrQ1hhz5deA3LcpuPAFbuWDYa8ScPm6sjSxxaCLRYmdvnKgsogTmvH",
  "key24": "4GPvLhMoTP76sULxiyo8WHp6J2bUM58ZiQ2aYansZ5TSUBSJfpj5TCq8Bvjq5kHJdWBaMRFkekXEK9j3uTWsohA5",
  "key25": "5JsYxYtMADse1jViFkEvmGnXwhn8p2HFiiW6AGGqBp3FuhzhR4Pt6XuNbvRij9VHoEu9Jy4XChUWM3tyqrVYyozb",
  "key26": "W8it7uCCykkSb6mPvSproqVJrv6cChWJdg1PU35V2Y7XTbWAvkUXnZeiYvVxNGvEAfVmQBWXc1NqhUNVWhoZUpi",
  "key27": "5HDJQWmADMg5gRhMDFLpGXCM1siE6kFsMr3djRPHU1V1eAACsXW7S9DXWJRMNvDRjq91tEBB3UgEwbPV1j7D37dz",
  "key28": "22XeWyQzBzuFtk8Fex4rd5RKtTN7EcThRigBVJeSCfKB13q6sDXzxHWJWY9NFAGdBVeGzCFEKQz3L5uqxRqVkqBx",
  "key29": "5CF4ZSpJJNBvRHQAGiUh5tHmdSU8HXQZN2tBLG7f7Ny9qMNVAKvG9yTekUy36bxcxQNgHEKZbLd7jTYjQCv3qk22",
  "key30": "2idX5Dpan1jgQ7xJ1ocbBxDn35LZ7ErnBamzBrnGQGCgd8buJLU14fborjqqopFQJkmxwuYkvzgMWxdNmq3BFZMd",
  "key31": "8n9Db8hsMoPAwNeCgzJt7JWu64RVZoP5JZ7QjtDwcUDuDGqGX1eCsuAki888DWUWyBsTPfzU2yVWXU4PUuf14uC",
  "key32": "VZxJkGBBEk1EvbqQGj9u5cfuo4ck6qy523cruDxezgfN6NUpHsXK85Ebhy2tdzHBEvN5mLKgESvr4LPH2dhSbRi",
  "key33": "5a4GAbSxb1hGnYJFdJPLYTkgsbKKwwitvkbS5eBtzSNDVRXpCcxJ7xjeVAR694Kw8sJ1EivmfugHXuDknTkmZPwx",
  "key34": "5yHFxjFruarpkfB8hwaVVjebonWS5YniKxjb9UAdZEu9UBiASuDCSGwJNe2ueSb2TvXpJmmmdHZTFX7TSumjya3d",
  "key35": "4YNyJp8n1UVh3cqf6RL6BbJEQ1AY1DvQHKFjPpwpsMWGQzTRmcAUt7orjmdyKG4h9fEdrgXabYvhvgzcxBYUiFHc",
  "key36": "4ytzWgieJ1G4k6UNbdZPiBQrcjV4uxCytytS9jzd5Za1LHHnBnHpTx2up7vbuXczNgCugdfregrBAKAaNHsXMYMd",
  "key37": "4wcsjQNor6feeS8Sjifc6MZREjSjoyDiB1SVhxBgFZXjHFs5K7NmFe7PqRnMz5rXnjMPZQnWzHeF5eJMVq41z9C6",
  "key38": "3GuGK7NKmVi41EoHRXNdXJ8Rimm8mrrg61H5ECJa355kBRi4hPDstUTKMwhgq4v2mZvgz6UkrEYvAb5nHnZX2mZU",
  "key39": "64fJSaNmSVj2gpNXGJ5aXePaq3J9JehgaKx2izgnfEzxJPKxuiNGbGHkV8d1fDvmrygqnmvK2pMdArW2CxxuMdXs",
  "key40": "51PFZqSFDc68AufAbdiSFYeNUJ8EqJVwzodu3CMN7jthoZ2ZdbWxaCdMgdmVXKWQdAb7z2QZYkYjnBNJJ9dNxFzy",
  "key41": "5g4ruGhGox4weUc74wS8ZfaFNkRBfNESRrBojarvq793oW51DKm5Ki2sfVoXLk6JJ6RtmxZdAYbPpbWwmJxkmeM9",
  "key42": "3EaTi4uFNoJfFjr1sJHKf5W7uDAyahsL6wMVwfW4XUhfHuUKDGf32y75aqfDS1p41gq4uGXETbTtZFQnyhAkUpxC",
  "key43": "3sZqFPLquM1PqDqshv9DhLZ3LBqCKFDts4wRxUz9NAr2EshPraQnv8McThWnsgR55VxiTyjMmB73ECp1dsPgz9zC",
  "key44": "UcrxoF1SFqFb9ajpbQt729NQAryqf4FXT1YcWSZQNEvku7PpmqwgVMz6aM9RA51jtec5HRKLEYTy6chG5gNGXpA",
  "key45": "sxu4a3fbUvKFRUomBFt6CkWtx17eg5o81EyAG23wAn16RRo8RewmkysckcM63oBcwXVKqQXhttepNnP1HosRmFZ",
  "key46": "HNDaYaqVkcmqQAsByoeYs7QcK9cSLxAY8kLwZwEjH3ZQj2a7MNfYPdEE8c83Pnsew4qep5nis1ys5z6x8CTJEhm"
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
