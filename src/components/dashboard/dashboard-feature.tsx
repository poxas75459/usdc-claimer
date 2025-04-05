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
    "4eG5AraPJZvJGdMyRQcDPBxPjSegRvjz2pjJtw1Mcg6HLjbZNVZ3wdFzUzmtgXXXzUAqDxfpgSgNoQN3gZ4kvGEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Y5hWZpHxyRwLUqy7TB1XTTf6HEyWPCP8zYrpwJdhK95JTDe5xHiYfzhJhyqTZB9kFktwKvXptxFHVa9L6Fh7HR",
  "key1": "iRj2CezurRrkUhMBG1dBvKwkMooLZcjLFj4NYYsYnKkPWdMQ92q7yDzfXqPMEoBqAcLPE1xkFJtoQixFi4N4zGW",
  "key2": "32QwahRyA2K862xRFmbiNFPZoBEtSD8KinmC6XNvnHMq94g7JGN4pNe1yAgq4aQdMZxzX4HRqGpv5ejNKDHWuSzL",
  "key3": "4Hu7nnGZ6irSgDeAsDt9didtsn4CLSfZpprPZGyxcWRDaZ3BWtfM9oAXTby7xs9jXCqSVupPMRBKmKn6y57MyNi9",
  "key4": "26YPJeZuvsG5QjqGzNKwR8zFHa3viBvMXn6Cm19zaGKBhjvmttV74V2aCE5Pk5Z7tPRcVVfft18mZk4AZ9WzqUyx",
  "key5": "5Uy3V9tYNVDeFXQEQxTMCZJm5XM1JGWsKtjhed4GC6pHxhdcVjDjadpCKigoWeiUZBKhmmu2kgM7U45aKMT7yzgP",
  "key6": "2ckj3N7f8F94rhksf7GwfPrdENsUryXGynhwN8KXjjipTVuXyv6kMUFd3bAJ3bzcduf9QiLcU2iincDVwnTdYCFq",
  "key7": "5qeTQRRkVcV9CD47Z76CYzkK7E133ozSbwhUDC9zsDRGdbd5NTpbxsMxGDv7dSEX3FeD8GnnkwXojQw6dQyL4817",
  "key8": "5jKYHNEgCDP8iKoz8Mf55d2fEiZ1bU4DYYZ6WYGm7V9PheiJP2W1DABrGMoYnForVVFbwReQHjCR36X6DNeNUgbV",
  "key9": "5KzRipA5MtHL3SKEzMmLcJs1YNWTpZKdA6nsNKTcEPTRj68edtZaFZCtA9BxJnTGKcx9trBBmoRDuwdtuPHAakGD",
  "key10": "5yDdfiU47gDTce4RLPJkhxmApS9d2YemrheW12z29y5seBz1S694qCVgnKnaZcRXrQFW6n5a22TMa8CamuCBgYuz",
  "key11": "37cPK1cSeJQ4Va56FAAiDSDdDZz7WA77HYfhu2kTcPJvHbAQmwmJaidmqZWGwNYK472eFSgH4L31ydLdLrwVbCZ3",
  "key12": "44K8TX7Uh5VnyTpUszyC41TV17rXCe5TW7cMQvqpzCktD3Z7jCDYgDxCZAyyFvHEZUYRnKy4vj3a7J5EgfstxqoW",
  "key13": "2WhvnRcJ92ghpMbB3H9shYYvRt7datdr1HgbDMz6VgDcdDhR83Jeh6qWSxKUUtXUkR9PmdejoKZcYU35DCjsNDM5",
  "key14": "Z1vcKjdHSgMFh16DXVGNRMuYaSoiso4taDg4dBtcK5iXhXtpXJneMo9XWrUBTeAxHKRcciyVD1Lh9pvAqT28HbJ",
  "key15": "4Xg8ZkhxeE4aXCS6qWgTjpSLYYFkKXBV2CoJBPFeTnNf9SDLLJ8ZKAMRRUL6pysK6LZaHbabsG5Be6DNgHrYN7ML",
  "key16": "5z8q76qdm9gpVrow5MP1MkeFU44ZPQEeaeqEf6ApJJtVbWuyLa7t53VgjAjTyBEQPQ4Q7KEbjp7kcMUgf5b2c2Pe",
  "key17": "rV3Pkvz1MsipxoB4boBLBt1tiFrFevwT1YhkkV3JXSbzHXJgQyjAgT1YJPouPkPpo9XGAjcUoHmqTTDL2eeVEAa",
  "key18": "4Q8bzS6nQJY9Lt47pNSiMxk3cco3H914CjHbugtBBCTNjMKv9yiRzwKcU2bkAPJjvpyF8NnH2bU8bfesGFdSeetj",
  "key19": "2W583KFd7xvMejv8rWHLTMfB3VDT9ZnnumneD3haraJ6vdqR4nwoSmoBg2gNr12p6UnPQ5XC5Sc8nGyd8TrHBE3m",
  "key20": "5X8XwtPa6TtaXecyonrJUivguK4xQPz3chDi2cLVA1pd5j5yXiNrpM9ydwx7inYmcpry1KzW6sghR7u34TT8FJEE",
  "key21": "24pR63TqWSCELdwNFpxZo6CDhCyfs8GtJRLL7gqNWPVqbfh9M1jDDktgeNJFCZff4pxMgRqJPYotJ8kfb9M8GQGW",
  "key22": "3exSEqxHKT8V1ZtAnDAKKcGrVoHT9jDwnb5ziR5ZrVEzLFnMHQbxa2ziQ9HwJvYiJAxLQLpxnud474w5NcJHUYru",
  "key23": "3Cf2ZKGbmU3XaCNmo7qkML4zx6s8pbjuhDgmdkuTPztWg3EYh7EbgzxvuuuRYpUWjcWb9b8RK1wEyfUXMazo4F7d",
  "key24": "2wNccQQH8M33D6bVJRuftCBPBcMvNHzovUSTpzDFWnSdVaVDvVBaZG1yJWJEQFEPc1bZ78cv1LS1ywhodrkopSvM",
  "key25": "3gTXYbTHSuwf7gjuRi1ef98HSZRJZiUEBHohheFMvLHYZnP4Gaq3Yb8sJ17tnPmG2EVdawPsAAMHKDAw8MVNpsFf",
  "key26": "2yRArBndVLmQmikT7xZjUszLhsSg34qVQ1JE1MT5sxL8FQoUJpuKEeAbA51o2XqnAsCheCwupXzY8AJdnbmveGr8",
  "key27": "2op6asrgbGYMXxa51hS8FjNzuSmbpjLy6kgn6peS4w5czSDSzjvMHV4rMbKMi5mPySM7zXXeJmAEuJfCh8oDXRcC",
  "key28": "5G39wPp27LmaR5dKPGmYhygXGTL8mTBNErYqM79EmrNhryRGbbU4j7cC4nfJyWAijDPe8BpmNe1cMWgJKs6s1s5w",
  "key29": "35mpveFDk43g69rfY8Ec2zKve8Fjov3SrY8kFWQd7pJ8LxvmmPiVsPApMx51boJRxax8fStriXEps9eyhGVuirpd",
  "key30": "5cmwXvZ1WKNXKSQWgzeXE4y4E9NLbbZgfv4FFGYn9UHWgnJCkKqCaaafBFLyL9PT4A9rAx2QyuV1XVAB6NUGydis",
  "key31": "3GdLbyefd6qqCvR4UB4m3GuVpbii67qBtZcXeDrUJw5PmQHADBMwYgaBpSth97tzue7BPjkM7t7RnQVt5x9zVwk4",
  "key32": "4qrnN5CYiMzyd7mBz27axQcCUYsgdj6R4qRGmW8FcsUp7KWPszzCx89nKJY7PcSs5mKkeX3WnrmZiLjfHbY3jGfK",
  "key33": "26i8eHyXa8RBM5Z6nKgvLZcgmNUvbi1U1mTfJ6JXAdvSdXr9M9xntU42dvLdz5pEcKFerVKDFKTaK2TKLzp22SYv",
  "key34": "5SXxtUk9j4XFboF4KxbGVZoa2HUtnpG4Zx5N9rtF25ntYQ1rNPEZcggCgLrQXZFyFgDArfuByxY6mMvbz7p4Gz34",
  "key35": "prYKDxpJc8d9Vt75ePR444za8jTg37WCSuFcLEd1ZnyuqWbYMTCxUgZwXnKHWRoXjv9DGLVJjxe9rivi4WyyLcE",
  "key36": "4W2517HHWZ9NNucVNmzce9y1LxnBtDKns8evCngFX98NAN9mbDAb5FP22Jrs3M9jjirEKm5cb1mRyA8tqGVy1hfH",
  "key37": "dACo6iHyhCMFSqBquQ5uiq5uMoBqwE28MwuG3BWMJmeCwBRbc7KixYhDge9y3fnTi3KVvDU6v6d8CvL4GRtkx9K",
  "key38": "2oTAmfnUpDtTauMzVSaeTwkFyfQHfRHcsgFL7zv6iUkQB5xnpHxzWLXdibbAYKdenQqXF29NHki2cmJ7pFLG3b1b",
  "key39": "3VHMFvNbv2FRco1V14ZNSKw71v71Q2YwZyiiNbh3g2WKr76q7wnrHv82AUCxUhjF3SeaBGZBbTeYEoXUXz34upyC",
  "key40": "4mnfUQhFCC7RXjvtcgWYQAojygy7d9wgFQ76yJF6NXSoR5QH487cnhdsfuA7FGL4MS6JeBvFP2L4aEN3y6P1QbC2",
  "key41": "3Swr32uVykSHWP94eBRU8HVAJgynLFQqmdSghC17v834XmfEqZ7ESjCR7iU5VDdbEEh1X5bFM4ybRKLmWPppdJw7",
  "key42": "4vhebMzoRwDNiTi4ziFfQRbB4cTGs1fBdNfyDrob81iB2y9vnzv1NPjrgsvoANFFWzmKLhRgsLHxLebVVifqN6Xb",
  "key43": "2Ybw3x7UHwEEZmVLDMZJHL8Vb5VpxcuRZ7VKMLBw1DqoqY8NUmhAjfC7xWPPKQ7Aqc41WbqNPWyprDvtXT3GKWgn",
  "key44": "5cFCL2fCELhnc2cyG1eKfjfgsoeYViDmLx4mDTgm6fwyhziRpZASFaAmftgjEJCvsZ8eZ6Moem3UBTDXtvVHb3N",
  "key45": "3neGMvRLAAvZLai6kYSEbsjQR2mqcxfpa9FVpgAqUgHRssiNn3ZU3qzwCuvNLtnwW6DfpttdJoGKbGwuSJA4kGbS",
  "key46": "3eW3Bw6Kogt43MAzBtGwaJcZa6i8mJXdPCQfk6usYWUxKTRfP4GjyU4RUxGHv87wpPj8xTCksgh9GPkrzLvg3JKs",
  "key47": "4km7W6TAGHEJP1bb9J2PB5qf1czqGfjoznF3B6QqyRWJ9LYPszeyS9qmNEacXMSqHt4r3tHdx5bVok7nABLWDFsQ",
  "key48": "2Aq9op2xSebmhyVW8w9TgB1Mo6SyTuqNHGL19RuwnxcMqZryFGdSnTK1cDh4Aftd6hj6MgfQT3eDp5xpCWu8KKnJ"
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
