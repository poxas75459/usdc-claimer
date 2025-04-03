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
    "4xEhWfydknDwLtqmzpoP63mhtcQWg5jorjUkUnYGnySHvwWw5F9gXMHp1ofEHybhuDPaF7s5j4xbv6VE5f8xENoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36JusrjN2cXR3HtTRiCCTMcVa68mWm1oiR5zXkqXNXS3fVQVRg6wsaSZET5v8arSqMLQGntoC4Tf66bEwEYjJHh",
  "key1": "24WVRRi9jtA1zEYLDNLtd3v3akzwi6EaZnqangmvvi55YSxWz6kxPVp3axXMi9vj7ZtArpCK1qrUYZadymHkTV3V",
  "key2": "2ZhAnEc5zzdbyMNopJmGcNGHW9DmuB2ZDneCosDLiXuJS1umeAbCGKZmjdEXWhJAQ2UMwau122BmEvUz3eaQbdDx",
  "key3": "3qbqdXYEGXhWpCM9ujd6NmheGA8umhZsVi7f1L2DhgLse1HHMeMkNRqRDv3httWWQQytxyXFX6czH1pwTCUHZU81",
  "key4": "2dz7VVgfeqTzZiP35pBv92QJDKBpLhfLD9fmdwnLGL1dpLJFeAafWMwhcPhwxwTNGtqaxA7X5gXaRCZi6Z7otfFj",
  "key5": "dkpTHfHCqCZAhXxZTPp7hT4ssLLgkrKFL8FcToyX2paRjNWU58Hd53pXkmJMhc7WA2G6Y55Z8ZBmQZ7MT994YHG",
  "key6": "4yNDSJqtZtMctn8ucUegWZHJDKJaW19hBWBRP6k7ALy4Ti6Z8SRhXYeSwN8R9CDKah1bsVHrSvxM9ECUMFE7HYhT",
  "key7": "3qqPuZy2VbLRDQX7cEpRYD23S9N1rQKPx9nBhVJLoNfQQLdBQ58WZmMtq4Gtz6Y9oJqqhDVaXmwQeG2ypkCz7g14",
  "key8": "XphVEiX9ihUfBhd5S2pAn5PRngHb3kvQoMqg4vncYvNMTZnZJ3iGiCrUQYVU7UCrGx5VUFidotCRyQzcnde13Ue",
  "key9": "4C9aAcS9KdVxb81BtyJCjLq4PY5JsGrYyqKstvwcfHKLsXbmMJ4gnwhrKEvLPwaZwGbh9xy1FVcWFkYcvKU3xX5n",
  "key10": "ALP1BxPMJj1oTaMiWsSgSUCmDHoM2WTNqkMo6aX6vXUtx27t98YfWt4Avi9ewasCNZxTuc1CBXYGT1qoYJHsRjF",
  "key11": "YGtp8BU4zgKSoJqR2TaHH9EzqcJnCREuPWuVbdYvgz76qGAfgoMLeG3qaSwY49S7WFdsnmdUaiN134U3pUbpyPM",
  "key12": "23LRZ6UyS5edThgXs17SgUmUsTrqMNKD9p3NzVSCz6GbR7XC25ie9PJBKhmxkwoNUmcXSMAihPx4FwkTzz12soHa",
  "key13": "uZNBKBfS1fdZHV7FmCi4NoNehSDXKmA6rV7vgqnDKhDVyi1SxzgA7fadiG32DK6KbgdZ3Nie1JF9S3kbj9MDrHY",
  "key14": "3RnWEYRdyfEyRstU3upCcyqNDLLPbj2tmWSB5dA1LqYZRNJZ9VSkGMVEtAwzsncqPAroPt4dbFHqCnn3ttwaotUc",
  "key15": "2TRLiGAnPZvFFHDgA3tGpESwVgS8QRA2q1tewBHWPZABBXAjcwJKWKDbKwXFbp2pBYPraSZiAS6wfMFj7Zgz3ySY",
  "key16": "woW9GGZNz8T58RJp4fEYicyHGP9jmVUtMu5WiTthaS4t9mCMBjiNNAQrmFN2E167jMxrjSYnLqvQXMwHRUzqBXF",
  "key17": "2Lg3wgyLP4MVpf6iwTQ8p79ZxgZhAk2EF9vLwdwdmrKyfB81udhEzAhirKTe7gpGwr43XYoyJbRAjm4VEiYGCHe5",
  "key18": "2vMjyp5Qzb9cFwNgwtpS6N3UxkLa6woRCDnFBX1ZNXQN7suKvUpDdoeQykik8m8DZSsXWtaK49XMcy8NsQYosUqs",
  "key19": "4eXgaQnJWude63XcrqyW5yebuwkWTZ2xGhKs5DHcUeQaa5yvsWc4jqFxwTgnB4AbcZ35hn7B7k3q8TjWXbJAYC58",
  "key20": "2c2Mxoy7LFPw8qCxxKtxbcGMWX7rm41Ts9CFm7Jdw6DBwkJ74cw7siPSSuw4B4iq5D9UNLYNk3A9GAmWq1KU5jng",
  "key21": "XvXHc5N4VPpAA6tPsvY1Z3tVydze75DdfsQKf7TeW5gVoQ7UZUK2xhw5nzMTSxuPXz3y7Qp2X7KuJ7oVMPC7qNu",
  "key22": "Fde4UzqfzAW6LVZWT2m8x53pjqW5Jp1157R1v1B4e9M9rcdXdzRQwbmtxqjAPqiqoN8c8qDjM5oemoeFBybqhVY",
  "key23": "3EqMCAQRzSEe21NZVEPdQnRcueDHaH5AtPmWkZ5Bu2nwQ3M54eeHL5cUSS3XyhFh9vFrJEkVVfS8XABi687RzzqL",
  "key24": "2GS34v3w3skhK1A4DHo4bZP9zCTyL2vv181e5ihHJn1gv2JVnt4xec6HThxp5UaKxtbFzD8sRiPgWx2ofJshGoFZ",
  "key25": "5Jn7Z7P2rBXty4JrhvJF73GYoNRLbXp6zrQCMoBPaT5hCttLLYAAMpEz6LKXvn2GVuto5bPExnFLTfXmUETGkNfV",
  "key26": "5V38pdB3ghw2hKtWQKy9Feamb6Q9fFthVk6BDNhUCYKDsfGemZZUWCZLGV8fZKQV6oTK8TLtQgQp6nQrPkRzGjKJ",
  "key27": "4yG2WC1YkuzDzXzT7GxSW3J1nGdkozFTu1WAvmyzUjqyPo5Cbt2PJNZSrSJ1HMvniwDWsYJHkQZ2xau8mSRKeFa4",
  "key28": "d3cyqdDp5DpZVx9qHHQPJcwM2yCxnX2mUwUwpbNkzAAWZoVed2L1HqWa6ifWQierdhCKotWKWaCV4VRHqkbqpZB",
  "key29": "51fkAKb5KxV97PTfuLUfWzLT6253zpi1YFFvbFq6bYN91MT3pav6pM5BQyMRc17GMPt38ZYvPwGHcWa1tUzHqonW",
  "key30": "3t2QWgcp1yFg7PT6vacxFrYbMF8Qtkmxi5TXuaLHQueBZeTLmkXJjL7FGjy6A8V4zAdJAptcHCPrLUiY2mXy24P9",
  "key31": "25NkK4DzDrRgXxL5TtmC2psAUkSf6bzpKtSQ367BVGVk4kmAGyCgBMRX2ev4WimKPenVZnkfzgQR6tfEBFnbSqk5",
  "key32": "8xCusiHzinEd9CnFDxcPFsbx97D93HuoTDZttkoERuTX2R3xcYYvJWSvdaAyNsRpoiwUHf5zewCJgrqqd4FgFBR",
  "key33": "5WjRaBG9EuTURVgbihA2hQk5PEcEUwXx2Z2euhmzdNG9PYMnvELCN8eaXdBPJ6euxjLx4pTUmc1CKhmFck3HM5hq",
  "key34": "3UB3s4gzgm9rbTt3axhcjpXgQKBxk8o7YBoN66euiqj8awijViXjusk5Mq7aStnLWRahUCU5mszUq3r35N24P2P1",
  "key35": "5JsuehsYdrgfd5mPbwgxJq7GeKpNp7F75X36DuHkm7i44YPneMGg1vY5SSpHyT3ydmWSNSpDoQGuQ1g12NXu88N7",
  "key36": "5WYaNWog9DuvXb4TszmKEE347CKuiSAunyZu1qknxVMQLfooQyRQ38cmBy2U44qRB1Ez4DQMCg3FR3MeMYowpfKQ",
  "key37": "5VXKi37z2sCAwPjz7Mr7ee72mYcw6CYQNiw9ZD8gjvpLSn4RVnEMLeS4vF7k7iPxheUDgcuGKKK6bsg1Zg9i3bg3",
  "key38": "52VrmYSMVmaiZwvpfjSJN8gGQD3yfBdrXmJT4YGgd2THMCoBYsiuz6E5euvsrujpqJbdCeF3XGJh1845Ub7bTbe9",
  "key39": "4mBjmeFgbcM1TWhUxZC8qWvD6DjDyGigEJ63RnKGM1XH7tW9rvrLnJ3CBsu6fxNbm4WgxoEawmMAof7pHAwJEnhn",
  "key40": "43WZydj31mmnh6v1Rm36nZ6zTyuvozThtVPMW7RkzDrWtPNBSoygQu4XdZBKFJX3CjLYBvmh9SGqeLC9nw9QHjL1",
  "key41": "5pAR2MPfHSaCVqSW9CpkdHrB8L3SrMNqinuZABB19MK4qzV4qf9tzAqYkGQG7imZLSaFyFFBWEvPwYrry9KLxufb",
  "key42": "aZAg34nQYYWHNsZJtNcepRb1HjezdrKoMZKjGTsmHGEh5FqFNX1VtNcqzPu86iFJ4F2fM4LqNXiGLeoxX7krfCu",
  "key43": "2gUJduke1chf6uWUL9XyRV8AqtWygsbjjLUCvx8GwbVm1RiuWwDkCKq1toexEPXHDSJ8ZBde78hEGR45vfZaL1iw",
  "key44": "4LNwrzeW5FxA68e5c94bMPdUSA9qnAY7zUuTv6dscg3PAb9eqNuv51QjBgTDjDHfRo5GQ2rhoqcna5Y6oUL6Qj3t",
  "key45": "vqCvQtkvCWcKm99uRsQ3qP2TmU8kqakygkERBkb5ohdTNTQ7GFXztHyBMQ2CPTi78bH7xedSZnDwpy6NvTUpg8Z",
  "key46": "2aQuctU2ZMdCpcU3qrjEUb4Bred3ZmGoNzWQSNaH4cS2wjPAKznAxBrkDQAhaZRzDhAa9TazY6nZ9hKNG3fgAFUS"
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
