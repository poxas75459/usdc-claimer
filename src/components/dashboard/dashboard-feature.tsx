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
    "FCYvbGuk8b83ELzjMfzvyQiFBvKnay7JAUtUeDFHkZaessk7bPg9nPGTFuPW5scK8vQvB9zy45MxQN4vx5aPxv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i1uE5A6pa9gwWJPotMcU3m6XLzqW81MAqKMjdFe5aLk6FTaQs5Ro52RZ15PvGX7qGrjP5ggdV3nctpVxftc56L6",
  "key1": "32b8aqpUPd2DHksFQThtXBZuoyWJpCfMuzXHkskhyP1bkcQtDQvtydkr7nFGQwhCZHzGjkx99Lxgpgwybu57VcsH",
  "key2": "LSeTs5jF7sH69ANx87yjgGtdNBJDeZemKdCjDVojV34MdmM6u4cHz9MHwtvuvMbm3g2f5mPUsUf9DcFA9kqgdG9",
  "key3": "4NNSh2wo8GwY1qEVBCrptqAFedhrmxhUrPzPL6CTRLQ1v3CfMWrVBxm5NuLUN9yxouieGs1bqgQPUEJPKssF3Fxs",
  "key4": "5cTM6Wqve9rm9LCMdkvuEXgM6xYxCeeuy7DmCej8fP2F9yCuw1ufH3nDb5RREW6cKG7QfW4GYgTbm3h5pkPE2HQy",
  "key5": "B2razxRw4faCTFXGKy1gtzUyZkxmna5HMDKA8Ui5pBCtDFpGf9oREag7KrGqmcmQaSk31SPaYt7jCD75n6Mzwf4",
  "key6": "8F5hgPtH5vYPFVZ2Zk7pKMLJ1xa2wJ5iuaGC7WK9U285AQou1ohPaGxLzVfMi8YyQggd8bWifMcovWM4gKKVAd6",
  "key7": "4BAJdbyb64yYC9DoJWdZZvz2PKiGsro94HubSnBksz2xUnFqnLp9KLxMu2UbcMXg3etvRRC9HXNZfHN6EdB8qF1L",
  "key8": "42V8Wii4uvdWVwQ97fUtH5umWMonwF6NknwZbmja5Yap6V5dGzrxADasbsbzNA6VfjqkWtwgppMVnJe5NkoxVNXL",
  "key9": "2YnDkf2GAQ67Vj8cx98LVDNkBAxdYT5HSFiuTfGKGAtLkngLTSEn1XsUgK1iDdTtYmK4WPAwbnT7C89VCur29J1i",
  "key10": "21vnvAoR3dtFcXYwY9MtbsW4W1tjdA5xWRWfMAkZtNGK9pQTnhmnjg9admcUCMvgb1mjk8f9FxgonVUAYNvP8cti",
  "key11": "ENciPogdQnKPBGArsT3EmThUtENAhHxhxkjgkgPCVAb5p7pFmVjcJQBZ8dJtDNe4ZNzmd5zh6kPPCEBD7KZsoZ4",
  "key12": "51Nowq2GFz2v2fuJvrpZYyNLB8YXYbTCaokvXcec5zEuCSMiwmZUWG62q7oX4XA6rDp9P4sFpGDMqix37KLBfYc7",
  "key13": "AqZ3czfMK1Mfthu3QdCKpffS5pqfXxiGUPSDW7YgJgS43nHobeTM7Gz5WYK1mtf5g5ZPPUDKyiAkyX9pY7xgwnp",
  "key14": "3ah8hB95jxZ8pV4Kxv8vrt6CfN4UmoRjgMKWk5GLSsvYoUT3dme8F9QjJVTnmLbuoe7buyUpywHmaMPWCYWxYpdB",
  "key15": "2XojHjKC7JomKjt71AECSbcNBQKpkPzFM8cZbax8upLh6Rp1UvuGgLaCusMWEzqwuT45PTxu8sb5yFk5LfQk7GjN",
  "key16": "4SjfASP8j7wqKox3GpyB8XgVyoGx7PWu8fBZavETfWB1mgqwRHtUWr7zgG21XgMiiqMWcR2auCDWsun6ZXNPeHj6",
  "key17": "3FLwLSMQbCv99gRwPAYWc8piLNBoE6zNdPVPwCeM5BNfEnXz4D6JjLHahccEeyThaZtFpJdPoFLj9Vthy727HF9L",
  "key18": "5xdrUREJpq5oZsFJJFrH3rwcFwMDENabqQwx45gmdpGsSrfyQFXrFozeL4YRpk9Xokder884W11R3tLc9p4uLYdN",
  "key19": "2Yef7vMbvZn3m8hV4DafrnEkDG45cWr7VVZrFX9PYuSnmimQw3vrzzUeXW59U5ccGkJNbxa2td8ppQZ1YWY82NTL",
  "key20": "32sUcaQyLTvsHwR9NbY5KkXPfW3Kqc61jk7KjhDe3E5rA69uiCEWEZJuprMYRjizLXja96Sr8Vfp9UQMLLG2nnPf",
  "key21": "4qKXyiZJLVmsxYFyM9SecHEkJaL55UMXvxw3kzTQWXAqV9Z5FXbraknxp4xSnkw2uJw1and8M4D3e6UfKGbnF2or",
  "key22": "5XwGf9VrFhVAL2Xu391pi735EZH8gRSoPws3HNTeUNHRXXLCA4bWvf9rikxZNSCTd9Vw8tfZTQkmaxyYCAYqwVH8",
  "key23": "25aQU44Mmu55q2wm991dmGrwNGc6FRkrwUnjQ5S7Dhi6mGV9rbCdvvG1aRA5w7yuHVJZ96xQ7MofhapHu8AmJD4s",
  "key24": "2XcHa8vJV8n1nCc1FkkZk2pYsQeWH9WAe3gK6aLLhiChBwDggqFu2AVdwBQEyZTiF2ANwcndEARjwQWC4mjQfne9",
  "key25": "kJePDT7Jyj6b15yJMn91d8BHT7L6SLQECRXnuaEHTGvGj4xvrLPKHHNSkErqVJLSShThBq8ZBCf13d5MBhPbkLL",
  "key26": "2qTHWq46umQmxRbiKH959ZHZ48jonDqgYotsZ44w3oY7zyroRzMPXQEFTuSJy297WzySQF95m9AXNNNseoZL9k6c",
  "key27": "3nTd61JXjwbPWCkuQMi3QLioVM4pmk4hGrbdVVgxd3NdUDJKwEdYGD6uDiHRh2N6BFS6aavtZMvp29X7GVdVPPdG",
  "key28": "61ij6DY8omR8iRMNGsERjvNFy99dgB9HRaCRK62FDMJ6T6nRqCzWKAAiaVZxzEdM8B9hRbRzhVgpGCfZ7cPkipNT",
  "key29": "2tjL9nJdKwdkeckiXzT3KuaRuMTebLcXdveUkhfx6ZMVbUAwArxYrimXBHFY2GBfJsn7fukv7zGppnZectHSEA67",
  "key30": "3LvXuaWXEq38YwwdLs1FSHzYUrn6x9rtpdeFfM7hMgvZQBzQ8W6KRSi5zpUJrCp79M6veUQ35tzVwqAn9N4oTXm6",
  "key31": "q7MtX8NE5RLqSe6Wqf69gZJLj6c9f1iiZpSLGABi1pZFaLcaWdqjZYpCGQn424Fa8GfwMv7cEFWiFDGmYgAa8vx",
  "key32": "2zzurT3ZwJWTuFj4daJbQXjdFnVNpZDm1E5atMBWVuXqAch2PFw3rrfw8TzZAHFGEB69DC5aTd3scKvLPsQeQoio",
  "key33": "2NQmbWFZHMaAYuXPov2nsu1ZTeU1MUAmFJ1n8HsBhhjxv44yP85DhEDeEGxg4nMAokD56EWmmoXKUWiiSCc2pVtN",
  "key34": "4kgvop1cvZiYDSeQ8tMUKBTjxq67kefJfP7Ay6LjfpwnAT3hvdD36JNKG2VCbtCJMhzRn9RjAJGgSquRBr4LSyGe",
  "key35": "PwcRqNJx7kQi1FSu2ZTCVZGKinuWw4xVfNnpMsYLbHxnx67PPrRiDbadN8nbj83oXnULZ4jr1Vmkw2q1T6xGV1D",
  "key36": "5BobkQEPN5YgFqKi3gxugf4Jt3xfuyJ98311v5iFSHfA9iepHKMsbC5oDNAhGmmBMxEQZx8UiHw88roiKs5viX8L",
  "key37": "2UZbqaauo4aHj7aHvQh8KDhz7NrBEYdNnKh5cx1xfejDFJBxTo7rNfrjazHdKPgQ4demgsEucuxeJeLZXimaCMFJ",
  "key38": "BmVj3CnVEcHSWRN2Rp8ESfxeUW2jHxXRXNna4K43RpYHFAA2hGTZe1ZAMdFBcMcyCPbkwtXd8ptgyAPKGibHXyf",
  "key39": "5gVjLFk4vwPyn6RT9SVtgon45GNdEBsd2sEL1ofELC2aKUZYFkBxPB2rMgJriesdhXvKdWh63W17vGtWVmbCazqB",
  "key40": "2LVmNYZDddjMHrrxXGibcdbVDMu2cXNByePnPNN1ZDvrtjBujSa232zxogwfLmkmZ3n6uxeTq938GiithEKk4QGd",
  "key41": "3zTJrDFX7DCCkEKQ24qhYcnXefHsYH6zZqnYjHSbWAXF8gyuKn5FFB55jSszYkRWSJnwtsJLkatRoSy44f6dGTfR"
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
