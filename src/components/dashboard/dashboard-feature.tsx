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
    "67AH5yvffR316SHEz3M88UQagt5Pq4fpDoqwdZeo7jg6oH28FwGM8SGE6Qm5bPBKh4KGvxFA63Z1z1PCorSqfr1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41y7gX7t7gBVG4qPivz8SkVqR3s98hpge8f254ddroXnHZqkR7fXJGNqxNxnteZ4d3CBdMJWZkoarx1HAjbyJ8xw",
  "key1": "4Yt4sR9Qqf3dQXiGfT3WREzKc5i8hXewd5evymuLyeVNpxDkzRSfmhT78xQGxksUrivV6R7pTYXTK8xgVJd1DAhH",
  "key2": "3GeQ9aqGohjcJyKQwDtoGb9uCbV6FUqWJ9zuQhr5KzvzWN5S4fsjiGWUbuHyWb3yeJEYj6au7NyYBg5US3kRgz8m",
  "key3": "2uZhikZu7KfXDubgNsGKHPEK2mkRRoy8uLpLN9tDcNJtByKCCKpiM48G5WSnHo8tiEYMGkqQurY5vGZe7Cuzj7Ri",
  "key4": "46S7o6tNZ2dK7nKRx8ahoRY7DV6xZViFf1xB6gAANUPbSBND7XnfHxhPmUtwJao7V1amsZj1Z9RB6ZCourQjseuB",
  "key5": "5Gpb1eaTiD6EM9bAKq8xHtZRqKnedNpzz9BqKWJjebosHsSQxtiTB9LJHX4KXHXrbVkVVZfPV9qUX35yNPmr66Ma",
  "key6": "6JFertQ9rVRKLCCtf2aP5b2X8gVT5zEECMCXaVF4m7jZ5rA2UujanB7CcoRWjxQtWWt4AFCArS6RrMqPF1SQ2RF",
  "key7": "4m7C3aRYLdrBys3vF5fhDSbK7irKaaYgVkvV23ELfS1PXnLdYM5CkmSnsqcUSFUforXYr6DMVuzWhSQymM63dYRD",
  "key8": "5uaid1VLRbf6vDNBD9NwGaRoWYWDY1mVPz3vYw3ns9kwgPUyL9AGoFrGY28SCex5xfRuJ6FfXtiyRP9255QVEY4K",
  "key9": "2DGV4wyttWoyfLs4rKD22vwqyyNYGCUbv51EoDgR9inSWZhfjPzzpNhHgLPNp2tKNros5hLhiRH1SaFEJQaicrUr",
  "key10": "5DXNbVCQ8U4KTf4535XMkKfd3jPsGpgKvJoVdMmAEtiJ8xkzYu2HEvdjyWbjbLQodqd4kr9E7CqJLeVrMdn4gtv9",
  "key11": "58L4MT2E42KntKAn9LWRuhRPKPg1AvY52JcsRWCaJQUNMJEbkuff89HX7Mf5UtHa1vuUT21qt1yHwHDF9Z4MZuk4",
  "key12": "t47dQcyJM2xp26DKqWmh73GscjbBto5RAUs6pU9BvSyo66eZUm4nARJBUxvF71Z48BuLMNwxaHBRw2X1PdeCWmD",
  "key13": "2Hv8ryrtm7BkRExephpitg5f2eNfUMLMsYD2dGiJN6F3g6juPqeFKPv9pBEE6m4T9Ee4JkJt6Sjm2zqWVqpeuxyj",
  "key14": "5YPwKvMn3XEg2x3xYADFwmRtCMc5Y9gE6MeLC5RrLg6HY1JTq4tjhqGG28v6NAJXeiomZjiA1mq4JtiRUgyEP1F7",
  "key15": "2tcgmnVV12dsmttHUP7GvNLKMGe213f2brANqSaxQ1c9y86qAcQmfgA9fhnKsEABjcYGF9jWGVQF4LpipuhWiEk3",
  "key16": "3fyZ8GmeqSG5n7ijdmz8GJUfVbCzemVsE9Zbmk5zZ2qaCiwfFsaG8To1UKKQNuCTuGsGztwxJk7Q5LtKxfmKYv1E",
  "key17": "4B1thKZyzGJURp5DTAxGW4B65SgvcURhLFfKeGEricFTUSHDc4PqdXD5AnZa37cMLjopVkHcCcpu4QWSbroGosbu",
  "key18": "3km6X4zJ346v9s5dCuwYKXTAVkTarmmJYkBkBp1UJR7Ca6pFPQEfvFyNyQ9vUsMRLNpaAmUAHZwZ7Uojwg3UpWrv",
  "key19": "2yh39tTfaryJxtkcP5Pgqv8gJtpnPqvEaG56S3RFtWb2bwNYyGY37vMS3HSuJpT2pBEd52N19mAUxSDrXXv6tNoU",
  "key20": "2yG42bdcFtWWHpqMBpG3XtEKRPEHQV519AuiThf4dkV4SCD5yU6KdbJJUuGrKwhJUWrwCCKPrTL1wJU9NwY3Xc5r",
  "key21": "3S536yYnFmfpxUxsoqrWwizMVwaHz2qmu7cUVagWov8Rcj3hyE1ZqGEMdsU4VPoYePiFNF3M2S9gCURrTW9Rg2NA",
  "key22": "659FM5BQKY7LLgJFgx4GRXo97bQv9QAMxQgaJnqZfYxgZJpenGShBYTfKh4pd4rT17uqo8kun9gths8QJsQVCveA",
  "key23": "3imizPEeouszfe7SU48B2ftu9jYE5mkmSzH4gMBxF11c9X31RFrCvWDN3hTbjcxCYD8dLv3CB5yCM7jAZBJC6fBf",
  "key24": "2z12sdmpdGbtWz2BBrQJFRRgF4Jr9KbjEKqsn6UzZrHv7aH44RpeVHkoPptK8dR8QdU3EBHp6L8951g6wZak9x5r",
  "key25": "nHSzbVTfC6HbBnSLKWqJiS56ZNzXxJEgUk3zRe2TKszCJV2RmebXhvMwx2WZZXdaqgBt23b3ddLCmBwcdA1sqWy",
  "key26": "uRxMKtCXJQooTAcFVj3SVBAhUfqKqVEsjuGPCTgKHZPoyE9EECq2DUhJVJ2Ejge9bHLtcNj6uvyJtbqvPn7eD59",
  "key27": "4EfMxQeXnB8PgS98LFApVhK8zwZjTv6rTj8NjgG7gnxWNcvyGF1C7mJE2gNGtUeHGPrPLi9jDNKj31CWrLzZdqBb",
  "key28": "5BPwUkXzDW8zAa1vA8WprBYLqvt8sxRZ361KfpFzm8wPNq47Te2y5zVwPvgStsjSf7VnJnmKeQCyDkJdj7jGwei2",
  "key29": "4MiEof5w5QyTtjFBpHhvpnXQUK6c5ViHmtrPF6ZQLNXM23uCWYdWYcBLuqBKB8pEJsGT8eW8evRqFcVeWygy1Px2",
  "key30": "58upCgov7XaCMxgQYV6P3a4U4BfS8cGzanXjbX6xDGASiJ9WBJkNYtXrUbQJP1iunPmhnrW8aHczZjRKwgqdzJMf",
  "key31": "5uQM7BGSNmxQxjydUUDSfsrRgEGdNvzHQHDQJDmPatiR2Wn15HRgAq2DeJyJCPxxwooEahgpbjBjqNmk8Fe1ccjK",
  "key32": "WwtEdmHU18xWzAjsKEJDVmBhbosgcnmEuo1uhfcFbpqgD1fod3dTarWb9PtoAJczDnXG6dq69xXYKejqqg6P6nA",
  "key33": "2T9wh6ARVcUqA2iex6QnESwu4PnnwjN7hoZ6Tj9p3UnkePoFiWCcyWMn6UB55CrhGANBdECwBZRdRan1c52wxRj7",
  "key34": "49PHJz6CkBrVhJGnqk8YAdSeqTttRPPefmo37hSyVR8sjwzvexuKNkRbZwB1RipUi6rakNVd9o3wSszhMSkkAM9a",
  "key35": "5jojMkvMTA8PULxKyUJr7Gx64NfAbWdyPDqfPycALqFRcvZ229uy89BYvFmwqWbKzCgitiQruc26GVbK2wvQ1jsi",
  "key36": "3vzKE5jBT3rDd7iRTfeDR8jxM6UMvJf3yt2mkS7eDfQh4RUciHKC7yWBQPeLHPeQHtHaeuU7qRsfiVAWj1hWitNg",
  "key37": "4FVh13tzTqB3w18ZbH2DrGh5qTahMKr61Ks3bBZwC7MtVRFNJwqE5MhH8Cyo5xdwwJxvuPqENrTQ1qyPQpVBb4v5",
  "key38": "2Wz5gefhYeV6XgPzKu2ZxEEiCTyrxWD3uF46dopESjxUUdzPFb6WHShu5Hj6FBh5SgmXRa3fBn6mocmhZVKqUnK2",
  "key39": "4xoMcT7fTXoH8fmeipgko7dzrVaBUjT7meVnqLv3i7M4K83U8juEPp34N9mbRHHf3G4ULjzN9HbHM6JifPGUddFV",
  "key40": "2i9v5Jm74Y6YgtU1kjn7Bpi6Nz6Nyx9HM7NZQvG1GEDbrDTi2L31RZ8ND1rGN77HAwWBPgHFitk6p4fhcDz2dALb",
  "key41": "4S4YGXfuW1UK3nXZs6YsoFi2eFPC2Dzwi2EUGPwi3peyoipBg5Li8fcvbuBSC1L4AMUVTLyh1amvWjwMmmHnDP4T",
  "key42": "3tREGuFxL1c6DF4iYDSppAM88ZomSsuqfAYCkYsgT3kxVxN1gk7YaczjtzKSgSXeib7JDNATxSCRFKhaUR8z2tXQ",
  "key43": "3QgCWWCRUi9joT8hTCNoEJwqcJTC4g6kd9cm7jJFxemm444soBh419ipHVPZgcxyoJXDz49H1ZtkwrB5ARUoGw84",
  "key44": "4c2iuixUXmUQFFRT1QUYtRrcae8QEcGQox3zQDSyrJX4ajaB3YRCnruR74cnbuWDUA74TA89Qwv3sQfeB5nAjeoW",
  "key45": "3uYMZvcAQqd4Ae4b3TTbWBTQfx8TwKvDHNxWAXhYEt9d9Q8hNXAhBYNEZV5YBnUCTahKak12ETiiyJAx7xLKEJJU",
  "key46": "5GNNpkSTGC1XRSCSpue4uuayRxp12raEjCA5SVJvQ62D1PAZ5WLEw9LVd7Sdkx6bneyiXKfKs72DyKn5ii1oPo2t",
  "key47": "2Bck396Zxa5jPQvnzrrxRWd9CYbXiKDU6ncwArSKXyWDc4rfVvi2jFY7cFS5ucKyC7629D72LXPPMb38AW3cVa6W",
  "key48": "2pvxmwrBfK3KikX2KuMdzXhB8bNCbGqh4x5QU5Xn7mdtQEBJQeT69FLetuAaquNQJ9r7YRHyAZveehxcDc9LjPtG"
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
