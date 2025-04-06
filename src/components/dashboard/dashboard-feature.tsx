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
    "7Zwt232XZmyGPd3RFGkBdzWZdBLZZwRAb1FcsSPf2jJb1DNVJVMs2b5BLqKCXhyyUZezjyWAV1GoGWnbbKa4Lv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ADAG17wwwRJBL7LeYB5T8fKL19HvaaQRrXMZjpDxjaSihhqxDHP6ubgkPJaggQPmuKEugV15tJQMR9iFbnHJNcE",
  "key1": "4ggn12jnQmZp1GL6tUCg4vk4KCnLBBURbu4EFuPzCLB3dpNzdi1wz4LmcMX93aRMi7cvj862SVmgKZPdVagZtbEw",
  "key2": "k4k7VnpsotbnCU3FqT3sQNW2NzbsNPxay96v1sbtMyo55UecK5RrDoRhVs1vmutXX7JUpUxZ6rGPrsiwkbuutDf",
  "key3": "i23wumhu8fpD8m12fYg9ToHJmJtCyQYzKeqMVAfGmBaZM4SwCGNXfxWjfJ6pgyHLYFAcZWkVnd31DDDCMVhQwXu",
  "key4": "4pkcMgYDBmV1qP36EKRpyW6TcGCx4qr1XSNK7xCm9NVi5fwg9856oTvkJmAU5eXXADFwWEKtQvs92BsgYjqsmZ8r",
  "key5": "61fBqs3jEXR3ir6yws6Kn4W4jxoEFD23Xj8xk8hz8Hmj1UXV5ZzN7WdpDVUb7u8rimvbCXFJgPHPidJLwhQKCT5z",
  "key6": "5tLxTmK8VDkCvcRBYtK45s3wq1uTm2UuyBmFvSSDRwzun6mK5wSN9e4nJWmcuuRMj7yZgMv7W6vqCqjsFCaM3atQ",
  "key7": "32uxqESKcynMD2aKGNwZeq5UsjKqycgfeZxorZeA3fvf3hK7GtXDxQbYWcAoJJRqVHpwZbebAAmDLZXZJHQA3u8H",
  "key8": "18Gqw4jrx4M7tGY9doupC76DRJwqVGoior6u2DtsqDobGUpKxYVcQvbAC4uxfYWNCWeh3dEtHguwSynKx5g6Kkd",
  "key9": "2PstLBazBSTGHFzdvDeynjjm4riLajK77A6Y71gDs6dUTXxXRaWKvQArVcRS619RvYx1rYbqoUH2abJNyfM4BQaE",
  "key10": "TX8MA8UQWg527K4YV3b4JbiKcfycUqrhvWY17taETRmzA6GH4ff5iMo4iYpme5vXtDjJbCu4gZEq5BtVkbXSAkF",
  "key11": "4KZwafFzAP65fARe3A6xiBYJp4qJPjpZpmtiVn5Q3j1JNDCctr8Xp2ajrjv4UivjtRi6p3PVDFFmLu5Vao6ACRL1",
  "key12": "4Kw35AwgTwHLDY6a2xxQJ4F9AYbR6RLH3YkfzmrMH2hShLCTVnfQJSygzcHkZVC3d2s1vSsVUwAPE5j9J7rjHSVw",
  "key13": "4dnA9awNb1kmn12YfYR7ThRCPfTWCMQncCq6hBzNoLvC9jvtQAhqE6YqqbywdKYAKCPwquB9WqfuLw7MiU5KEQeL",
  "key14": "9Q4tX4rFYSyWGf2mxHyLuSjxmhBeJS9KtrPGwbrLsfpeNY4a2C94Zs5hHT4TjoWmjXuUv6y1y1uFc4ZLVxkzG3z",
  "key15": "goWNZi6kHm2jXv1nh4nHpZHMKjLYcDn8Wu9BaCufhpe3iP7G9hZxKSZon5HxLcuXK7TTbNXRWpqjJuAzig7h4ri",
  "key16": "3FU874DcEr5Fh4nEzvY5gLwVNNd7R8kMMT3sTqRfa5Bsh85tMisbpo3cokXbSWjYXbZLxb1pMi4wcUjhLCq7Py2g",
  "key17": "37vw4vMg7ufRa7V83G5WZDW4DRGHQYvRUZFUNqx3aHALNJRKxTpgXBwnvLNQcTjmGCyNG5PFrd42DUj6YsPpovoq",
  "key18": "3KdV7LGunskJQGuAKRQtPpB1vAR16mebUzQpK1EzgwqYaYbxQ3jst428SAa2zGQN69BH1wMqNqsrm8qUdjKiafA8",
  "key19": "3BCJdWxfg8NzgC5uAX7VehhZ4ESWvDxDQGejADKE9U5PVDi9hbHtDXe93RkKcsRsATdUPrW9UwQRGtBE4uC4xpjq",
  "key20": "5SXYdA5beBegy5ereLtgL9t2N9Zw8aKRXSQhTknwqkGvdGSPe6dMWMMatYVPgvz3u5U7oFS6WkyJC7eWfzMdrrDj",
  "key21": "2Rt9yCHW3awdbyhHPtyj7mSRet8Z2HBw5ySEYEAZsT7sNTiUWou9jBVGEXi48bo4s3HP7obEjtk2kKCT6NTVS4R8",
  "key22": "2PtmkHAAKzsBteJVSKwcTixjZeHHY4XkjCSJfceoeZRkjBkLmpgWutd67b7wJKm1FaL8CMjZMMNVvYt8kFQ8FX1e",
  "key23": "2BZeLJ463kvKwvCvigLKSEBkQh4DYFLpYriCFDPxHMTKYsohzwrtpqBjg5yCBfZ5wpfu6NXAfwp6JaCHiMakFjTL",
  "key24": "acEkxZMBvch49uh7JtvQVy2hLJNyv3EwhQxPiCZqwnXMLomECotT2fWodUF1k7atEMrXJoNiVXxTJVedenuGCVq",
  "key25": "4o3p95qQof1WYqcW3J5ZmVSPFHHsCuJ6tgDuFswkp8Ns85gZyfysKnca8wKWug1VceDP68prewj412SBnE51eL5T",
  "key26": "qgp3eWjYacqx79mFFwVS7o25EbsTg6wotHQHa8vYNu5cdAGduKdhfPX1MtbYSCCty2m1CYM4UbwWLh7gatUQLoe",
  "key27": "5HWC24oic9Ji6LVEmFnjkpcBRsEixkR665QXthqwE5j42iVjfWHQjCgKsXJs5X87M5vCRR5FAKaYcD2UBhzJUsuG",
  "key28": "5tBwMYdeRbofEtKRMMzNsKb99CprZy3YCvf6L9xPWduc6fcFXrZdtLGNiQATbicFSwTUkbEiaikovfKV4oWa2tix",
  "key29": "5fos9Xu4e3J1Kza2TY4vpa3oaDyQS88kwZnaaKHt7ZaK4t91vtPVFRkC8dLeiT28qR4S4zzKckBJKqLKDRfqXrhV",
  "key30": "3TCnD87dEnDdA4gCyxNQqiYEooXhKMWMR26rRAaRje3tyf3kTdCL4oTCDS7W1XVkUJwMxHRs84mnwrwoz6UWB3G7",
  "key31": "4RVDye51kLnkW3Zdvkco65mwqFZ5eLxQCjo3omPAgkyoBHHTnv66fiAwwm62TqChAr5mVX3WAZTxjP4mCSjrTMPE",
  "key32": "2SfAcVoPZ4RFo4DyxhBLdPMCaAxhxNogovjzPkvQd6Rd2t4WDk1qGFu3W16HvDuoKTCNFwN5hrRqGv4oHEkoti4S",
  "key33": "4n2M7oRdNwiv1L3orhNaYTtHKwNV4znu1vA5u5mmamJyagosKKL57zkM4vLbPbtxsMJRzgEP2BETQLLPXbthp6gr",
  "key34": "NPCNrCChdFDdsm5B9tBqhGW4bFgkurRJPQbPojFkUH5L6pExr9LmHMfEPzwcuniSpYDH81XCLuVs4WrBivSJhGP",
  "key35": "44U1XNt8WDNSYUNfp3mV6yQ6mBWMoLe8oGMQeTv14dPfQwYUF8XFdMLVWa4zLVmuFnErAB3ZgUuPi1BNbJ2Xvb84",
  "key36": "3dL7BryPM1oCd74fLACb8CccyiKvMvHCyTNSEsowUtvJfZejVHP3zqBuGWxKXJmdx3KXn7gCLkpuYH8q8NroYD4m",
  "key37": "2rZBGDZSNYLJpdYvgwkE8RjjdoUv7rh44dEoXw6N9QWq5gWjJQ7n2LCDFgM8PhXGjG5arrLhvdSftJDETkA2fmoV",
  "key38": "3hczEzEu62TVyKUWM45yVHtJ3NQYfpiV5B9XgyvJ7oXiWXq6k3RGBJ7Laydj6tQ5DSDw8h2NcwcpHkZfHibqWFYL",
  "key39": "2fTUEwSnkqYQSvzq6FYYJSqbYufcAwa9YwVRY36f7pVE1zv2HtUAKNUrZYKvUo2EdXfpkQELbMKUNsBMRDf4dGHL"
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
