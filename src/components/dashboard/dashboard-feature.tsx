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
    "1WcRtJp72Zv5a29mnVbNzaUMXvA46stoA7ycM51ZPY9NmtL6pZEtL8TvScr2yjsvL3emfWwaFXycXCoBzwdqEuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ntuwqGC3FXXvffAzhMv2PEwAAYr3rTyhymQS3unZyiR37ueBkwTm6SaqcrPgHAAKhTiwZqnKZ2Bvj6GE42vs1vT",
  "key1": "4TMMqLS2xECCbeYZg1euNwaNCvTWVi3crjQb1pMWFPwcGzaj3sBSa5DShUtb94GB13PvrqYDTnWgV6va3mxk8qKq",
  "key2": "5RiKRNAF8kUrEDio39K1A386D66iviw1DfHsG8m6TGdCCFGhzCMe4hagZL6Ca5EgncC3HhzPR6F9Fdp4rXXdToj1",
  "key3": "4wsnYck3YB8zFPTEkjzhdFYyPhKNEJrP7kkoF1yVYFFKRcTnfK6QQMpRxHmgZyeXC959xjhPsZYg4sKekdscGmfn",
  "key4": "ZQjR6Moui7TiSg3TRTkzwJ4WpZeUQ2H8N1LwH4XCWPmzbHnsHaKinoboZ6rUYTtZYSZpBt3CAtX6pvVx5zV8sru",
  "key5": "94RUcKGDGHZd3xkQH9F8FSXnSbfDY3k5r9YeGqvtvswpdu7Cg3zzqLUa9Y75kANp4GWaUgAe9623Z3hpZnsKqJU",
  "key6": "3oPqoUFqwFCbQcKnceUdDyccRBs8vHXkQG4nrsymnFvdUnVbkTWhvHxG1jBeYWytn31ht91KfN8DoatvtNacAD62",
  "key7": "4D8XFZ8UeHzPyH3LSM3HXGdWWEWLgcJWyP4yA3YFz6ZrLUUyGoGx9mP2V4Nr4D6qVhub6D2L2em8UcrCxFbkBtZw",
  "key8": "2QgJbvNWdHpDnuqLw2CdoxCKFHqTGmTMvmn8URPFJ5JXn7BKbRaus3MyviVvx1CrYbxLropwE2LoN2mkGgjdCvwU",
  "key9": "py3Crz9GtNs54F3zwSyUvGt4416sov4JupeDUtcp4Xd4fd1goQTpghZ7Bh3ZCAgxq5FEzF7Zxq5aQxJ53jJmuB1",
  "key10": "yVf5vTTwK7r3nB3NvWw3rAQEuBfbZfHZYfoa1FcwDytwL8Z1hgwY4JUYyGyHcBKA8izeGwtAKy4vF7drdc3N9fj",
  "key11": "3HsDXTUX1FwKBZ62qjjdyEuNsxcTQ8Qk7ZRtmH3edjB9xFmdbyZwAy1Rj1NhQ9LYSanF9eApFCFLwn3xs1VvYLac",
  "key12": "2ms4Ace5WdE5ywfSUbMY2eqVzUSgq6AfX7j8i94dFTwBSfGw4Z3VEzmHFEp1L2KuwwxzABY2F2fYML7casFzsxMS",
  "key13": "4DQ2AheNrJe4HKSE1S8YmbWoZr9tS3E7UukFJR5t6et1CxaoYn3qo3DAR4wrJJ8gdw64LA5jEvrpcyv9St3RKUt7",
  "key14": "439Vkma76h2C2x979CVET4iTyMHskLUkKYQXmpszwYof8hoKfqzfkaFELdt2xq88x34yEMdvywSYicjXB4KPkrnt",
  "key15": "5dj7EhC31R1NUkQdULG59ukyfzNWxNj4b3enMVQ4hPD173LyYyTcMZnry6T7YWaX1SqyDycucoeZXpEJ8qKcxUri",
  "key16": "5wn5QCmy3r3Qd2yCmorSXsET3JFqTz7wtYryzFq2qSJ4ADNigKoW1bfNEjPdrmFxLYkx89MXoyABU3BYDszpCGGw",
  "key17": "27FKsGwYvi21UjvCeaDoPFLkGmGjgat76aeG75s4GZxw6vsWNJ1enVBe2YY4CXYHniuC8u79UcWPLTAjSxCw8joy",
  "key18": "4YHZhKCN6rJ9tQMbLEgQf7ibR4ufAHAa48HxpV7RgsQtFwpjaQoLdZpgbtLVK5CqM5X4dE6CRbs8e1MTywdU5Kh8",
  "key19": "3fvziuFtMzHFNtZXg5ASc19KJkavwmJi64JEgS4NQqvCfvZQ2koc1AdyT1PCb4eiRtdKAzXftd42a3s6GStno4Rx",
  "key20": "4VjVZ3Tg97ujXq39n6WbzyVPdYLfksvWF3Wt326rdQ71GdqKnGtY3HwTZqtBjd1iontcVmySfeaWjZHhftpebho2",
  "key21": "4tbUH2m3vRNyey6WKcaNiBg8KGegnvvaeo16G715P22rRjpWck8EoDu6bvC3XjuiTrcFBTaKmi71YqXCgDoiSSnh",
  "key22": "5J3EYDGZNhJEJrErjU49gwKdy3yMBuWmHkoX2LGcR7k6WP8CtVEcne7XyiWXiryFy2Hip8HHAmZ7hRgh5cKqEPiR",
  "key23": "2A3DHk4bp3cQYdr2gYYDyW91hNVQSiHEFPtcLQGQyK56Jd4iiE4vBXViDbo7EqM7inx3bWLfze2Rq5j5zasib9w7",
  "key24": "5UX1PmkhN2ZcboRD3ztDmEXZq2VGkjzTR8puVpNS4eRFYdSp9czi8Bf1pHhHRS8h1AN25RzkyMH8aNqH9MKWuQQC",
  "key25": "31P9SDmYYg8KQpjqteVyBGVB7LttLP6odk3Tm8A6pehvRicWFE6DPpzYxu9JJraFJgKaWRVHPLpBN9qkc1X52TED",
  "key26": "yVjbUeNSCLuWNBvPNyi3N8HtJ8CccCVpxHyhP1JUhBhbD2EpNyiHCXNxXytpMh22STTFqbsXq2M3bgpgph5Vtp2",
  "key27": "2XqJXg5Emg9youT2CQtECrfAMvSqotTLMUKq824HTWLxWp5rh3jVnMjw8gAYgKiVtZNdftzo65hNbRtiQKM1xBZ5",
  "key28": "5ULvfvfSnzLvra5YfW89Qy41jAG6zzGGwapfRcuJ2Z6NY4JLRDbgJPqfGP86s9QDG2pEvpoqxbkvXetUfNBq2Ss7",
  "key29": "3SPztw1TMXFn9V7zzope9cmriwsHPqk6Vq7on1S4CXATdJrwV8RzFLc5YDBfmFJpnk4q8C9PokHcJLhgCNWDKgWH",
  "key30": "582XTdBSPMnCFtNa5rdx1r6xM1QxPZ9dzmzvbUdBRitQrW46j194oJjH5GWgjd9PABhp3ofhsC16meHAcgj6aqff",
  "key31": "5GHVJ3B97Q6VxUdATVLuPjbDSDqqkkwpi2kzVh9sWodKgv1NRmRGBSttMkHFGgFZd6ZCiHk6CRfohuSvreCUR73B",
  "key32": "323vEeYAbq8PKJSK8r5po5zkstEt6DbUdmM6yfxi4xoMDQExq3KRYshTyQfioMu77ZbKga6sSgtQRnEWHYWziTVx"
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
