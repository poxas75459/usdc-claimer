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
    "3HGBKTFzjeibet4HiwkNyHBG86Pt5czX27vQxhSkxhKA9LMPopSDU5Wh5Gt9Mhk7Yp7UAGVhoUQfGoDiyYuSWsxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BUHerPZQSaV3Yp841Pb9ovxcWyareYMnYQzzD7FcVgVa1ABVwcnSjd7JJi7Ce5iTcqQBZoLhX6z2RETc917kPi2",
  "key1": "2kbnX8igBbmb7LNLLXdb8mYNyUDFYQ1iQwn9J9L4QfptXoB1smxtawg8Craz66EtY7nWQ43Vte8j3qeFGR6K9qLn",
  "key2": "Ymo1VHJCGmgFiUkHAxRZBYDT6atmeX2tCAJxHZmT3tcvAXCdn5yXAQsyYK9zcVny895fHTKaxw87uTNESFpUri3",
  "key3": "5ToZU4Ytyp33omB86MgSf7WKvDfeyGywb2iC33ycgGzkXvGAMZv1dPGcK1B6JPDv41e5tU99yQwARAXJJTZiDKvR",
  "key4": "3fF3yBnqSnp9mGskSxxnMWbysSR9cmqzPuPi8ieEnPsqbThpLExqzqRzcGKge93yGftGark4vHqYrN8CYBqr9CAq",
  "key5": "RShyFJHQLgNiur3cEbfES9ehQqyGXFYKQhZk37maPC9Pt5ULVUZj2uAyUdJRtHgmPAd3AzM4UJLpBDqWc3FBdgy",
  "key6": "2vCUX2rzNuBAhDrKAwybci8HNmLeR8mNwHSH4mCXkh9NJsFYRBAku6kvAuTrMs3J9EfTFZTehmG8vReCKs2Rgmwb",
  "key7": "41bhu5FsB9ZcTKvuY8N2jCdmYbyheWGJzT3wVg129Y68wfePXy9Fie1x5Z1iHi8a7jbJKb23np1K8UHozmdidRfA",
  "key8": "Q9sZPaJtEC2Lcfg3kiidf2SoyMig5bJ6EA2yuYACzcMJK46MyXf79ENqBDCtzv2PH1iut6HPsLCkLUkvrpg3nQn",
  "key9": "3x1NRfcNY5c2wTdU2cAXWyDnJMdyVXmd3pxGkpq2P9LJR1uJpLUtxi354tTEMtTEEaFqEBbXMHN6pNDdqBd8Gw4k",
  "key10": "4Hr1NzpuR9wFXUZRYdNKWyUeWi1vGnkr8bZ47BF9icFy1KLTjYUHVt29KAYuSAdd3fsEZiLZh7y8BCA2U37aUBaJ",
  "key11": "3AapR5PUKiHX89Qe5pQjQ4Zi2zEhgTcv3gipYpBADXhLHB9HjBhdgzkCD71VVu8nQ9V5wps1RXeNxdvXdqSzFU8Z",
  "key12": "3VCgKQ2C3p6nDPK157PqEvDqfVUvFWe3tMP7kUA8EifGbrom3vAitNpUXzQbVaZePb37bA1wUxdiHzeQJrsq7Wqs",
  "key13": "27bzkjwwerakyCix8nBLhmvsojRQthejeQZC6oiPnkykxN2LHcHvESvFpXnrjXQU7MtTkAzidUHH7J95Em475rbk",
  "key14": "5yMKEgzzrSk1v2uAQfh3GH8t6ySDyUiY9E1Vj2GNjZLJ8oxD7CxoePgdQUeJ2isuPDcZ1CRU5oSmbC524Een87a5",
  "key15": "5e1vdcB94xxEXUJV4ShfWaD41Lidkf51suDWot83yVN4RfgHzHMyoj9U2TckTJAshS97t2f7CzRebbDWktBEmxCq",
  "key16": "5ThxpoSd65eghr71RvVZm1NgmLHsJQ56o3ygzaDBfAV5D6NrkuavgaqXWu2S3EbtUuBidgmoZy7WYyfX4BjzkiRK",
  "key17": "5A8M3TRUXa1gU3A3kg65eVpNDnus9s1RzqjEo3vd27XK5GhJV1tWU7UR64sKwxJGwvh5Ayyhfo2Lsdx796BJ9n6f",
  "key18": "kbycdZKXprrHjtobTxTagSonTniT2nSJ5jRBq4YfNwZKNkxYwUig6YcDVTa3SSDVrXTnMzAPFYs5ZeBwgcDB2cS",
  "key19": "3tuwknRZcUHUPbVW1dzFGZnSP5KqZQsVtg1xQuyYenZq6KpXvraoskB1fLoCM6HWKUjdJUWVpmQD6judctj9R3ri",
  "key20": "5bKcRws8eYbJdWyXRQL4PEuiCxJUFoPJJ5cdjgjoqjiZbaxX5trfUL2uUmDkMtwh27XKTt2JUafFyjfs4SMSvv4G",
  "key21": "2kiYGUDbr7dxEEXmzRTBbMu8ayU8YuSFwQ3fDkEnBjv6GMqHRrFEZm5vik9yP2zWos9wwfA5v5eJWQ6aRFmNQ95p",
  "key22": "583HK6N3ojj85PTXHKu8bZx9BXaiWmaHP8behQ6WFRkfF1cm6WZGV6nX6iYbkt2zWEZBxuvLZtFqgEoR2qWqRTYe",
  "key23": "yZnSXAurUrEz4WJ5vxtcSBLQJGeSVyK4gvfBwHVDzumSzWiiGSeJ4Pdo86GA5hsG1RGu6L95aqrSXoP5Yin8FK3",
  "key24": "2RfuCFARbxwK4yQhTWJguTMNz8H8pao2QMaa74NmEQwXaqLVuzBoaxWdDLwZUvwJaVbHSa6VHw7gvDFpBV6cTbjH",
  "key25": "4VoyE4mzjbeysAmbxdRJznNyM3AXsmhsX7FXCywtfsAgJerZpWC8GA3ugrkHrxE6rXb7JXdvbRbX49pJvqLYaPVv",
  "key26": "uJwPxSXMJLrQx1KFAEGGd6njmRBFavMvU3GFwNwKTFJ9nBwQ6TBi8czxrM21QZreERSNm4HPRSSsSLVYB5TmeCe",
  "key27": "4iogkJ1sa1rzsV2CuZF18EzsiZoK5eGKnyYpn3yZbKaC9McUGNtG2hxgtFDqbAKR3XQWgG6NirB18Z3mqKeh23ia",
  "key28": "d66LXxtrS3BRg38mqAJmcdKGypBM86kbBWVKTtWCkvfQutduvpRknjngz41T3AH7X2NRhWZTJeuUYjcJYtqnxek",
  "key29": "2ZtG6RWpAtkeN6MQFk4S1vSvo3wbuUu5mkRpcZ9DzYZnxsthmCMsVgR1rHWFrMUXh1TXDjn9kAo61urF2iJYXHY",
  "key30": "3tGzEq8H34PfR6irWWsuqo2ZUhoxG1CPcvexRhGb8QhKHh3Q18xzoRELvS8tRZ8tVvMMjTKoheAvw7U15NQDGr7",
  "key31": "2VbqkNkH9AKzSTwLHDZ6E5WxHJFtssPYpaSaKyfYJYM7W39CJ6cno2RjHEhKYtFP812t8HYb63DsYRZEX3my2YRr",
  "key32": "3Q7duoivwdz2NypTZWY8pLW87WM8oC8WHhnX7iBssDFdqvEkZWTZcHTeri8pR2NmBxo74jGTzYGTyKaapF1qfy4v",
  "key33": "49Ke7TC35q9EWV5P4W55yCfbNPvrobWYhyrVKuVL2RVmecFgWhSGQXz5BWLwbwnXaUG2d1TSxkBgtmSh7SXwWqv5",
  "key34": "34PLvmEEXrgiDAArKqBfZAaYCjrqiwJWCbeU3YgSKyQNyDjfJNJAgLWhUGRfhP8odvPKELbJjHqLeF1CHRA8yKxu",
  "key35": "uke9vT8uczSFzx6TvCCR6YYKm2b6TWX8b6PPy2ca1i17qBn1n7iw7bhrhA4NFBSotB7QTNYbS7UYX3tkX6pE6Eu",
  "key36": "4sVmjHZzp5Rywt1AFn68UCNu4sjcN66CpsKKmHfHwmQi6enzsDDDDqgPrQBeHzM8ED8jyA5HUMUsW58yjpDNhVhd",
  "key37": "4ZdGBNUG5WZWxoSKgPKRnkZQZmPi2hLTcwpDCrGifcnv7GFYBfh84Ccbp1YDgphqas9qFD8LTboAQu9rPDxj4PQL",
  "key38": "3s3vMMo8mQq1VyLuHqQHum1UCamMrk6Qmo5N2CPSYsktZ1CKgxVVbt827GZ8z3sRWKq3ApKQxaRBhHSCGhqM5ntE",
  "key39": "dAmk6zHuvp32aGXHmYsiqQf85xygdPmLUwQpqvo5x2cRxf5VJbpfVXrT3esbV2FEoMByYPkeYyAHiZeLX5mjR6Y",
  "key40": "474T8PLrGKpTf3oo9rncNR1U3FFidDpFFaM9qhs9zQhErgJU471pJq5apkUpcmYNcT4ipQMEr4GdWWNmhGUkHEK9"
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
