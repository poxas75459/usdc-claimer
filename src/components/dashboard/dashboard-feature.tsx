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
    "2Hsv7XQS1R48gPJ7jYaXqavPkHBbg452rjnkZtJYqmd3MCtc6u9YDVt8sjtRTXPbkHn8cqkf2pui43nnwjKY6niF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZ1LbSSBWX6aLQaHHohjiMAQq738yQGmsYMNVfHviYyppVLrs32snWGn4hZK2HUdR373dWeSCTD9nQbvosyKMTv",
  "key1": "5XE3gNhEszw3Xh3AHyNND6vzW6Mb4mGUFHAfLevA1RduSbWhQ8nofYsSyVNM6cvqHpsazvrLWYjCqZ1mxBaqaG8Q",
  "key2": "4WCPumzmtVdrsHzWYU9LaCtVFmRUDejYb2a8EXEfs1Wma7wEdLafQDjLPqg74q9zFgdLhFMi24MLPmKWUPiYMMKF",
  "key3": "5uR4rbaUQqo1XYCquV2D6ZcnC4iWsd1RXthWkMhx8PmJLu5aeBz88inVQeJogFsbGDVV76wdtkEoJD9NJhwxbEvU",
  "key4": "2FA3sXh6GomS2kd7jCE2JMcgAzYJ6UK5Qqaj5fEy5srM5qayQy75Dn8NAPR2nV3cbGEvAmC5zwmUBb6wwwdkFvVd",
  "key5": "5BXmGtqhYAm75Qep5EFCENSntmzfAbirjXsUBRS9sWmh9pTgnZw5czJmpVrSkMtSzA84NMbSm1uWFPpbPZPLcJ78",
  "key6": "3mzEiMYDbEtPn8iCEuq9N85d2dbHy9AsTFWBuwseZA84rjbcxVb9kFoEEcLhNXQk9yBVDGBXvMJGUGJ1n7Z5R1mT",
  "key7": "3UV2WNGSb1kXxBfVUa13P6GcRGn4EdRAJsiLMwJ3Sa6FRVrBDCFV5zsBvTPLhhi4SYGf7ixo9sNzpmABsy4jZkSx",
  "key8": "2x3fQbTnJUjNqdsgM9AQjyrMJ9Fw9znVvR3jvB1zB8xcETxfNMcZfjxvRPHUrMKFsLPQbvdRsGLU7ysR6cvCdFo1",
  "key9": "3YK7unW3oT111LyfiTGc6ng3tuYuP79PuSzWGSxafnNp1Sfpq97go2iC4dcDWSCgps88WPGzrziheWy54mkoasMP",
  "key10": "5mFyQYA7MPV4eY5AZAH7fZo8rvL7LCCaGUpVZ4NjTtVdKSYoB1ht3sZrEab753wuK6sRSmC25Tme6t2KtvdA11KZ",
  "key11": "3hL6s2WKdeRjE7BdBSHPC6R7zhGNch36DJLf1UUMGDg7mzdPBAUNzgJtkriFBeaxdPrmXbnzKDpiQpVg3mXpBeFr",
  "key12": "5RPJ8qacFy8AsA28EJ2AfHHfgb3L5ZvQiFwgCoUUXr9vbM2h6fkxUy8PvGvWcf63cQVi4QJtF82A1xnKHcJeHF6Q",
  "key13": "2qgeTbP9fzZuYbnAJAM4ag7YZB2MgihyXXrgWMweLCBRCqBs4eEoKtdFvohBxPKPFgcqiLF2CsydZLmKh6ZVkyzQ",
  "key14": "26hWPmrmh836MC3yrYSDhKvXiHLKR13ajyhBPNdpzdxT54N4rQogstxDNoPSnyrv8LooRFRCL26KsNEYCNH4ZTAL",
  "key15": "4qFUozabgH5NRk6JzNPbX8swDLMsWgF3DUAP3hkguxTNTgne1GuAgW7ubFKTxBe7MVeRBZjmKqhbMui3EHhS9hnx",
  "key16": "41wCVGXD3iqcFji5gsMCDL3nPYaAimqXKQLoSiJZt4yaHsSgKbufpQYzQz8SxSwRPtuzHYzU1cFrPgjLMMmNS7a4",
  "key17": "4ZQFWKb7z5j6sCNT9pcTa94am2wLPNhigtvW1i338jVLUk8YLXUd6YWuFziFL9Xih2ZG77nQ5trfLF25FDetcEav",
  "key18": "741oCQGQR12fepoCpy4z8tuwCEohPuE1Qkbm5ZEyDCZakB5s73Dqq4U8FberoQhTtWZGu7pHYzPBVsKUdMStnE4",
  "key19": "5v9jYsz6nFCzjK8XryuDLk9M6dKmeWbt9XoUhNthmTpSBDZNmWRVCESNVuV93fAr6H2iMJuTDRi7ZD9fKB3vU7iV",
  "key20": "2qTWqARpGJ8PnTZindqQStsmcYTTRP7yAoHtJ5fJr2p45zWC2kU6b83iySbVCNoBTD1TFG8Q83kAuQbXViiuQAr3",
  "key21": "JMGEQVyoU5Ph4kpvPQaceqt9FQNgNz2umz9KLEyKnSuFxkfX53gUyufDw86nWDyoXxWcRC69S7Lj8pZw4S4FvZe",
  "key22": "4tGpHqQvVPqAV3Yb92TYyJUrfiSHkttfzFBHLKYov3HDTjjxtqvAtEuSB5vjpXZnxBNGdK9HDRunP5HDdMcMAuCp",
  "key23": "4J4VZTSbLV5ARjKyCNBTmxT4YEFbWwruKCSRkTnBToLMx4HTTvB29kgEy9bpgs7qi7Bi27jChRJBCcm2neY4d8Pk",
  "key24": "5qWC6zGoT3UPnT9gQn4bxB5kBrPKGpRrupHMJSemQFNwMrxfNCvGkswz8ZQSUn9PffRjsepS7kRws7Lp5rxQK8KY",
  "key25": "3Ba8LpptuJr37s3iv8kHQmRaNm3WHqqWxcqPuoGjnajFNYiqCquw3sReuNb43Wzopxv7rQZmLojGnvwjhZNo22UT",
  "key26": "DRbzxBcBY13eypzWkogRJYpCcBwzU4B7cGZGPDzKTcWwf99ortKiheHHQXHpwvewHV78nzX3obh7Hoab8MD2cH4",
  "key27": "5dh5kZfw5GCVinrrtkeZcWkVYJLtH9jbwE89bvwcYWbQorn6WBHJyiAoMwYnQBzq9XuCoVhze9b7ReW36sJ8yDxP",
  "key28": "E1jBFj1PQtmu6o4qtorqzderEAKbgcdqF3nfiUMzdvnsm2ntYb9rKZy7mtHEH62Ax1CyMfmoHq55XaZ4Wn5LxnC",
  "key29": "2hystfjmFp3AzvbK5AtZzz9rBwtV7dyAX1E9FrjmfqMqnRUHay6C5jSisiPEprtndkBp2M9nanZ3jw1GSLxjSXXp",
  "key30": "5n89ERMXU2kmbAthnUUTJ5JWx6GitXWEQnjXhPd9avNjPsJNMatS67JAdpKBHXPjkh38xBgthQAGBZNmS5rcEFes",
  "key31": "3Q4Fie6uoZkxMQmetMwm2itVSQSDyFAovRt29XtgvapBuExAwn8zLvct4B96G3VCyMfchDLGY58LoydUryamCjRj",
  "key32": "5ppAtffk3aq2pKRLeT8FVzEVFVEALdG5ufrncBUMACRSTRNhXGe6YasXb2L9ortvDjALUi14sN5qdTEwyiekTWHD",
  "key33": "3f4Y2F9nb7umbLLb4ZfSVVwKZfirJRuKwZrAShDch6aEiUwcdw3EK2E22K3icBy7ZTPuAaKjwSt99QKPy8HGd1DX",
  "key34": "23NviiasFnnc6yniRetPHZLXgZtRPCqC6fU7tAUZCB1RaBbHZpuZMH5TAyW4s1oZPwsE1F1VEkqZWA4ZyfiSfdfK",
  "key35": "4oj8qrrrEZnCU5FyqxCjPZPEDjh3NLQgTyhnsmCXXHgEPkR83ARyeay1TqgjijaYRBDGSScZgoAcEzLBP4Kqk5z1",
  "key36": "qTCk1BH7dzLps5f9YcmFFYEbroURmKLiunMfjvoNBmgdh42vipxFGQAvzib35a8KkDG5aK5H7WjT8anouBc1faS",
  "key37": "2xn2RvvW8vX1ta37Lrs5jUPSRKELqUNkSiTwg63xQh42phZ2UabHk7sYTzf3Qfm8Y7hUkJZGD8jprPdQ4AmkqEk",
  "key38": "4BJFgHKDV4jiVABBgZK4hA5MLpyzkgzh2VzozapkwKcX2vnwc5QF22uKcXDCgUD6oFp1wGHxCyK6jt3GifHp6uCA",
  "key39": "3KxE6siW6QX5Hj9Z7R7Wx1KoqLyHAkhfvT55izD3GmCipjvdm6qVzNmB3NuB8Hxkb64yPeBaUL43vBz6a1Dp8GAo",
  "key40": "3RZGg9VvCn5F1jPhp9yMAwR7VXbfUG5DBH49TMziPaeTNFvKpkji2qmo33USAMzpBerJruy13rVWpNhwvE7Dt6GU",
  "key41": "3Vx1u1VbJSd3ypfqcKjoUbPbrt3SEZ2Nfdjn6e7aqLUcrLRbsrWCHRc6wFy2jxM98JhaSPkhMpCHA76SuVPrrGXq",
  "key42": "651FJR3aXg4HNhL1AtnyfYkKP6Cq5xYBdMwoQfEiaKCMtfSEv6kEhXR3GP7Ag3EYCV5y2BYiByZRK23LdKBsPH28",
  "key43": "3hssKQoM4CdpDCrYWKHWwcEn8n4UUJXE6SswzwbBppE5eU6rVfoJ5kmsooEB3D7bWTevestHHa3G4LmQDzdSUuEy",
  "key44": "mmf9byRaeD4SLWxCkpg3JJvzjv5Zq5wsvF5MeuVfmkWbEernWsW8GCtnhoWVU1xXd7Pq3zwdK6QYmmXKXG4KdiV",
  "key45": "4kGjsV1knKtepv9wM1M7EskU6t4GoS4fB4wXFRe4TY273L8JFjCVxvWkHwiUAV39nKNtGaysKjzLFpgeM5BMqbTz",
  "key46": "4HKRTyeXjH2bTKQMBkY4L75WpHqSVPp7snCHYakpr3EegkH9psjdQpcHQVRoL5hXDxfbYsHRv44urVDz8qhezZvN",
  "key47": "4J5yWSskD75qGr7n17uaQtEVxZEsJh1BBrcBnXjWYwoGUErVrKZEjFhC8YL6VsqmzYmKMv2DRfyWL1E3zzRsYWgV",
  "key48": "4md8ougMfVtSTu5RsLKoBihWTUcST6Gn5YKoybQ8MchLSeFFVyoR2qL4KioGwzD8t25TkYAmYmMEic7cLTc3n3hm"
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
