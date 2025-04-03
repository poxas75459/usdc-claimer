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
    "3zkxAznJGBFU1s5ypdRZe6zvSpnx5UTnD8eB41yD9ZDsEM1cKJkT3nD2Jek7JhqGep6yaNDEXTtHuyJa491VqatN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xircLUrPyBHpojcEiavDGhUTkEFvbvNiUVqyiLaRHpeidJxG3U2fp7deYVQBw4dvchRQtum5z4amkdgWKW6rkis",
  "key1": "29Q1BBeLK5gNnpusARddwvBWuhUBEpfxCv4xoCgBJSbqtsnogQ9mswH1nLWkMS3w95kDPwvkWWZB8z4A7673tht9",
  "key2": "5s56NV5kxNdjYTmhNgMy1XQLrCZ7kEsQWGfFgAjBj5Jj2e3CZvwwXpsBQzcz1UTJrKGphVX3yZxDcmLxq1Nqvgic",
  "key3": "2d7pQBu5F7pV7VSztPcWsSjs6k5Q2iUHtbZH9nT8j3U3rCMVQXyTSDMdEXMRw98Fz3uLw67thb3PzRyC9SyAXfKo",
  "key4": "3mAYQ7jVvzvrYTFKuEbyjs3cxkCbUi6UXrYqqKCdr6LFas9fC9QrF8Z32PAF4HXKHAhcaTxUN3LuMsq1e8KxYp4j",
  "key5": "r36aesDxevatj8JQJEcj6obDxRK9LZe584hP9XwHpo6dvdh5dT7tHWrGCsAqirTpChMXSpTFkXS6rWZtNGUtyTS",
  "key6": "uPomVRYGzqdZXobiaLcVNSJHQcEYGzHLJ6s31cropKv4XfVvfvvVQ7a51CbKttMhxF6VN4dUuPyLfvZCeZWAiFM",
  "key7": "qfiPS1ePveBFbVPX2JymYDrGhJdTTLDRFJtan8KcZqK2vpAtdYC9Bw5qA673vgUDJaKoyQkUne8RRkFBunYRTqA",
  "key8": "3gt6qNhu26faXjEBZETTe8Rmw524bn1N7eLh2QSJ1w3BtBo1NeTPuVM48fLZmgY2YmtudiCUAUcen7QTaENz4ZNE",
  "key9": "2JMRR1CLS12cNo9xSf2wPw8X1VX8Ly83e3uhKkDX7neHFeSzQfAwKcTpX2qYPP6qomh8eTHuNrs5UuTirmoTvHCf",
  "key10": "5EYRBipLXG8CQPt2VxS43YEu7iY28hbYuPUBLxnxnt6YEh3LgjCi3kU3ikgaFvuKQXZK3TrFDKrQNvWyKpJAhjFN",
  "key11": "36fz9tejisf4gsfd65uT1evERmKEAYtX1z1h1SVbAejaNjkKtWvtcHiNS4yMs51jWZgEnDsdgpvDeG9FjHdhZkgJ",
  "key12": "4YridSGNhdMfMKB6Kb7JgwNfgZaKnTG7imxWgxcK6vtLVK7zQhhsFM8yLY5jdsZpf3tt1XJPrzyjzu2JU2Mcwzjw",
  "key13": "TUnDQ6XYMfn6qh8MkA46fcAQyi3s8wv5UivG4qffNCyYb2dgTTtL4HnSZN65frjKdzQ8ve8hKAVeo6ZUP5JTscK",
  "key14": "4g1XLGZodPvoy2CZoSYJueR2SZcqKegejmuWoef6RPpZjZANeqvQ2ivoMmncBTydhFn5pFK76De3K6U8ZtXLCDgo",
  "key15": "4wUkbL4Jz3ngByoHy5v89DHAp8wGkXS5iiXXwqE8ov4imMejq81yJZVtHvGaUcZJdj4xzyRwksXphMSqmxChJrnm",
  "key16": "tmYVGDyPxLqX1hsunWt4KSwPNbU92dbcTVP2f5Q9XsU5QVJiAsZ1bDHJLWZ4tBEYGtpapGUu8bWhd4trKkxDomC",
  "key17": "5TvSoPY6BHjkqBzCZrR9Ca6tMbd4chyyYojKDioQTc1HpEMtTUoPgxGs1t4f4SBjW6ZYebabBw7zVnghWXDEwKbW",
  "key18": "32xh7xMs4MTN1z4YE85XSTep2px7WmjcYRUi8hd8uZjig4d6poAh6tQy7KvjxsRjPxLMHtGChcUJ5fUA1j7ThFm8",
  "key19": "ij5qsXyBqSUTf1SNEiDNkNJNYoLNktZnKTLiCKGKv1Lykdz34mtw5Chk4Nt6uCoPLtDodNZ23ZQWjbSGZJgpuGf",
  "key20": "b3ocHMsEr6CaGNwwBZFESPK8tKpQEbg39Q5qeNwGq4WE4fF3xaHk2TnhBFaUqANGTVi2xrdY6q8zx3z56g8F7aG",
  "key21": "2KQJ4g7Hfz1uQ3C8Rf2omBidnR3WxnhswjTgBXYtCzw77BKcsEKszvUVt7PGtsRa8qUebNbZSxaUsimUKq4g7MXT",
  "key22": "3CEuHtKfYA9Umszp9kgyq4qUWojXQ2JQTd5qw1dGr3ai7HYbhF4mYnqFBZ9vmofdqApshxKmdG8pJYVE9zfAoP44",
  "key23": "5iLHaZG4kDMQn3P5pxSmr4bqmRH53SHRdBEsQfNjPhWiwG5mwwNEtiNS7ZzsHaPGXU4CYER85q35rwezv5tn18HV",
  "key24": "c3xhTeMG8neGpYyKyTGnUmznJGSPWrYeFwMmrxAWZ6Gpmt6szWEokoGtZP1tUXWMtXd7avjq1JHc9zCeh45CdVd",
  "key25": "34B3WmXS3b6J3pZ88HSa6jZtkmHvhnfJBs5rkDw9amp2C7x3JbZVhuPsV2gkEBB6eURcetVzEqiaygF5QCp5yAwj",
  "key26": "24aUyZjAjMkVBEMN2n6m7HZmGkDkNRqrm23es9z5o5hj8rrA9cDNzRfri7fi7tPVgxhVAwZKRVHXAtj9CFPhdier",
  "key27": "3S9kYYt492YWDBRxQkM8gqcdcVD1pzb2NbTP3DfrrowzGK1WzE7cuXUGTg5HUN68mDsEVbfhtQzuA9J2j2VH7Tc3",
  "key28": "2Q37JxcgNu34d3UHyq1Aj6U6vdAGtTzqnVkQ9h3FomSi6pSjAhVAoWKkUokNWKeXvhhjoVqEFsnAme62Yj7Ksa7v",
  "key29": "2Q6rSsZHDjqHrLik8wzqPayhj8HUj6ZoyCw5PzceuGjY23XEeZ3KTcPmRucyyZg7e2uZ8PHhgny19eGcKLF6Ke8u",
  "key30": "2suZXup4NSUc7Q2sXmkj5Xk3rmsmK1FsNM28qPUUfiNcGr8u5iVtZdnQsfV7mUWTfmTcFCv5GVwKzKqYTnc4zbfp"
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
