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
    "4p2XuebqBTMStUGDvnKkKiGYAaeyrqhhMwaQgTWnEnDyeuUTNHS8wsV2S1iGqSoUaj7gbFadkjFyBudCWWaoKMBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X6SZ1D1SzZkE3yFGMXzQSAfuSfigiquLWkuad7nw2jJ9E8TjVK4kngMaoXj7YMqWu3c8TvqQd97o9rarV9FvbKT",
  "key1": "2tfp7RgQ8Rcic1fdi9ZYKtJyqQq2d7k6GD6ESvMvKwHUJiY4r3XrbbkVmd8ENsBro1SLxqR2MsuB9knWtrYUWSWj",
  "key2": "5APYYwbQEL4i3X1yA1Yye9Ut1BkLwCyme9g2jx5ea77aXHQ4ap7SsuoJaC8z9HgE2uXwz6QiSYSbRDPZjGXEmUa8",
  "key3": "3bT1tPpi2zJCUtuiNqvy8VhWCCkNqNbNtGNWsvmyjUaBLD2ifUGiRMDUVck2M8ZRKwh9UX2X6ecYfaWyRVZVSqf1",
  "key4": "1Qkn3PM5xTyNK2xF6ZJRn2X4nBsRmVGpnfbU7AHhWXZcrq7Mnu4u7kzth52UUXCAscM6QKhNggar51Fo67Ui8V4",
  "key5": "5sDvr92bsCNhBRbV9amZCQuqyoT4ZweMWU3TitPQqnYWcNbzzHPMhGi7b4wZ2NyzdF9f6na8oMWEZpLw2QPZXCCU",
  "key6": "5PB6CAnPDS2CTSAqDtFJAxwVEnZBxJ5gcu76yERvtww9acPZqPs3E4i7UJ3fbi6k3GdBsUdis2Ag38wuz2gRogWS",
  "key7": "3cGCoHWbhfFEd5KdnYmYKg3imCstYdFpVy21691fohgfyyL6ubN5ZtiB374XX42CbjQDfEk2RN5GShgw1WETpztS",
  "key8": "Kv4FEpq2wDBsjfhhKhqSHYqM2QfQrjW7p85ZKPbyzVKYhkMPp3BYa7oDajpRE9ri7qPvuxCpEewgVTWawpbLKtX",
  "key9": "677iApL2TLiAkv4vQ1SjNSmaEq7ndmXZzGWWKWcF6K9Ct9LtkFon7xzvTkBFiGgjU1MDLFShEssdxGXvZHn6mLpn",
  "key10": "63yMz5N5iL1rFWEbbPePPiL4gCSfH1P2WRRLFebANyxXVwR75u7o4SzxxZqSJ5cfznNqeMbQQe6LRLHW8KG6oJxV",
  "key11": "3E9d8oKHzv1nZmG1Gu7KNKHRFYD41wFkpNPK4guv9AbKupJfuWX1ffdccbYe9LEXZAYyCYi4dei8vrnHW6H1XB23",
  "key12": "57359tyxJaM4WEc3rkV2cXZjdviFgfBXd2W3q8C7iqebbACUkb44VFyVhJgVey9gq3Wm5ZoCx6ZKck32YnyTDZec",
  "key13": "FwtKgn3Gk2SkCRM8WSiAoEfHK3zKySP9etERkHKcyZ1WddGf4mCkTDyGFyjkiYyEvJy6cHtcemwKF7DALvaXG15",
  "key14": "4FFqyuJh8Nt6YcJZwnnBfmdvhnsodXz3LMkyyqZcCdocueo2gaAmKdg8JU9YhhAVf2cihkg2v7VD173mDVgdH9kZ",
  "key15": "5nScvrGAh1f83t7JLM1AUX5rSc9Kd4CWBno9ztJmDqLYMip9dWHEBYJtmHvatXyS2dXEUrittky4UJS1JdKGHJqr",
  "key16": "3zVPGkR3bx6RMXyBGEC48hdRMKToPJ6tB3FAdojHHD7LLpH3Xw4sQwnBB6J5JZ5EMYk7SbjXDjRFDeT7GLkEBh45",
  "key17": "26PHJVg85C8Miohi9p4dYoEffdhyeXDruHj2YuNtSFHtpG5CKxu9Ch5XMAw84w8dDRQN9YtAuv2MiFmRB8oUcj4D",
  "key18": "4BRtURWKmQ9a3nZsLYAP4swxZJ6BhrKhg21S4Nmo1VYL4LmZiy2vGVcASFKWHNQXyjmhZYx8cVF5va3qS6TpfpER",
  "key19": "5onKJpoT4NgxjFVSnPFX5D8CUAn1XBfcdK4aDyiYZ74RTXvtNEE5EqMyRXWVsQauxyvw6aypT4m2xjLbvGZwYaSR",
  "key20": "5LY32rjzH6j584TWFT6vFhSm6ScqoWWLQBAVVmcVk21btjCUeBB42cuFaF9qQGo7PmnDLqRcRb8KzhXsYs2LhNw9",
  "key21": "67Wa7MGaGWez7e5vyeo5MDYaDznMtn9WD96uhX9dJ7oiVnvMWpJ78BqoqhCMh7iVHNGd7PV6ThUWN4N9QKVdQzig",
  "key22": "5bHZbUMEvvy7wNuemXy9cnZoQhdsxfRqWcc7GdcSbWt43fPKUxvrChBdNnufgjttSnKLLBV9RkbUMe9Y5GSiRjN1",
  "key23": "4zSFkEiLG4ZxWpxqxJa4g8G4w4u9GsCAzrM1jBVWFJQbta7wxPZGdzTcaF9DSmEot973uEsg666HZhPv1qaHcRan",
  "key24": "5dsgm4DGBF6WdzrbjqNAMpBoXoYraUqiyt4AxNCVyE65YkqbJbUhBMvToAFgnK7RVRjUeoDS5xF6Vf4ZNSk6C3js",
  "key25": "cR326kpau2wqXtpHdCDzFrvxWEt1bMg5qE2ffw1gM7hhEfxmr9bPNE7Z7xWX2sLNwxbVRzN42eyJGefpbNv4FSZ",
  "key26": "42tWHRZuJcLEnD4ykkpGJ8aGHE1FqnzVoQsX2RDgzEAqYiTNfP4b4DRemn3GaYhCpG6LmztmFN2FdNSBA4VmFFxC",
  "key27": "3Qmz9XhwsYUoSkwMWrePp8sGocyhTjxxD2ZTJXWxkvoNzrEfjVikpadUgcbN6NXEF3rE39q8okhdCgssV3C8r1Si",
  "key28": "35q3bNneP4YYSY9C11n2H45Tstsu1WdbSRyYNdMnBTbaBFyDGJxaSQbTgBi5yaBUZHZcoYvkxu4GXsMWCGMWQqyM",
  "key29": "5SYkvhWdRjbtGPzYiFD1P8u4mdAk7Yx8fZv4q1VoN4XwmwHdefmyqbmyCKLxCGKrMaW8rYzdtTQsACiRTjGPiz5f",
  "key30": "5KCesAqb1QCmuBjgoPkqBmeRNExRFKMQapvh7JEKW46sW1ut8iaR17etUNEtz2wAJBjDUZiCUGPLuYqYB3xrdRS1",
  "key31": "5zLgJfLFRm2aZ9YF5qHjUzXwsYNWHpLGcyj5jkkhB1dT6FNpsf3PtYY5iZ5wiPZiNfMtPYZRpjWTvR9TDTLjBUTj",
  "key32": "3unsqLi4tLwroW8r6VuXjqATKrcKnxzsgqQo2dAPfrG856fAKhFHBRawrBsZanRLnffi4ULrbCh8ZZHsL5yf5FA",
  "key33": "3g6PcBNMQcbmbqXryq25THzEo369r4UszZigNAXUq8ur664uGYhGgv7oc7SriSauxTifgY1JhnJoni8H43GdGM8U",
  "key34": "EUmnxZe9oyWx6vSh3fsCjnB8MBWjgo4yRMHjR1Zeuz5dpaqGAckY5kukeQ8WuqFD1D4LhpZVBZJXH9nkV4oSagQ",
  "key35": "rwqdFBwo6JBkBLfW1bLSWZz5MGggFnnwhzWQnA9fcVpVrYN6DEPazjAFD54VrUje6mGKksvAPQBdGQsFZCbaLUf",
  "key36": "5Lns5CPmPr7fDVN3uUom1PCanHt9B8m5bwJGuo54t9B8UCBRNWEn45XvHeUsatFH5kPy1nYwisZ3akErZAHPKnya",
  "key37": "23d4JFSaWHiVZe9n8vS7ZybXvAkrACn7HeVV6b5iDFbqtCoWgnydUuej9uDXvTcytk41QuwqSx2wFckhbaMsstx2",
  "key38": "XeS1QoZkjqgbs64msaABdugzp5aSZmm8rjrKKGRVsxd7gg5zX8cV3XtGA5ikjoLCd2JcRSrkch55BGFnAWVJqEb",
  "key39": "5zyjbzNgh19nKLvHBTsY9pbjhU2hCLvri1i4YuSrCEkDWVTrtg8K4hzBALUTZcwTZEQ1t8U7KYQh7V7Hkg6SmtKe",
  "key40": "3Tg4dkXWLipXVGRpD9NADWvidwJqiJC5aRVhp6bC9DPrSgPNPbKt2aSEhDK1jWYTz1qLZyksgwBCPRsXYqZHP1wi",
  "key41": "7PterqiCJBu1p754EKXB8qBN3369xKQ296vUx78AARsBFeAwy9ZVRg3Jm3xsTBnt9KXikxtmVZnBojay3jrqAjC",
  "key42": "x9TqnZjgz5vSscK1sEFBdDWgqyUCqiNKqfZcPrRu3CD6GYJBqHhLCXs2WqRJJ6STrB3886zxzPxbnn8NSF3NDeM",
  "key43": "3hFV7Aq9a7WvF3tFsuQyDh6yDUuQDVuRztgmizenx8xRALxRRyTMtumQL4Kwam4suxChCQAMR8WRDMWYMYZkqRg5",
  "key44": "4GAbRzKeVKNGJMjenVZpHrd6MbRWLUEWSwbYowANtQXrhBCHUz11VGpWwr3BfK3hSUe4ocUi7uQPYhcqFXQw9ESt",
  "key45": "5wiTZRxLLRnheoiYkMzLn2AkXDPsbjYTven3T52NXh7xkrgzm62psmSf95v9uRj9xLT4tCXps2npTZMVmsVVzaqm",
  "key46": "3yuvU9zdrH39PEmaPLALPeEQNqsXmpF4yhytkAsU7WHHhHjYnwxC1uJNrbMdVYs9rjX4pHUKrnyxi4nMdscCPjUo"
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
