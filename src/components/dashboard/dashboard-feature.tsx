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
    "2xbJLrrSpq8urk4Rpm1E3Pp4LFWkAZY1V9ULjgLfVA1zdJ6nzztoVUmhuhyFAEBkmthCUuBvL4cfnnFpCZrgyMhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsBSti8AKHVhfbTqfsQ71CgTvjKiSFoWLrsZbEi472QKGPEckqYcB7CVqxVvhL3zVEhcY5kj3iai8Ex2Y9k3na4",
  "key1": "2G7ktTyGVCaKqtmCztpUycMDcZKTTTxZEicxt6fTqiRqKAGaYVnWuuTKArvFQS7dMWDrxFTeJ7xgt8vmyJEfwS6F",
  "key2": "562XbEg3pd8848z6V28t5WurX6kSXK9oNBsi9Anjs7UQACtqP5KfsXuUDwdQQEHVyGn749PyDUGh48CRK49rJpyb",
  "key3": "43CF1FWT7orMhyqfCpqVjShVXpYjVeVNcXAVB6B9hfANncgdZP3ddgaXgcKFVkYGhYwrWfNrVfckxk7fJRNtx2vz",
  "key4": "4ABre2B1Rj2Lgx6hUnXugSjX2JUrVrxCSKvxpc1Nzd42hNwyUpkHWMP3koxGWF9oaGhyn6FpD7fsi3z3EQVvaV8r",
  "key5": "xY2Yd5gN4Ut6ePmjvHbJtB45wCvXJBPNvjNeErYBnZC8XtGwAuLMzXMjsLvGCwUJWL7DcpHjzQgVu4NBB8L4XRs",
  "key6": "2yK8S9AjDmHczKuxTT2D2UrhJBj7XQhKwcMzUG4GwzYSS2FL44oCjctj7gxHk5ts3iZa52nkz9RVXh1r1R1U77bZ",
  "key7": "g4Gc3aDSBh7kLre8iVg4mgyzWwWZhSJnvQoXYtjnxMtJfxLMmGnk9fEYU9zLqECuWd4qZDufu3VFE4BqHo4ejdy",
  "key8": "MmzBs5i1hGkGcwc2s2m2SQpwSfhXQyAFW2bGvPKEw3QAmCorG1edS6ZJo8psubGqALUWrVMV3ScsxGLZQZkKUcq",
  "key9": "jHNXvfNsrUiX83jMnUL9eTtSeS2uWkt5yqhEup4sYyXTo24C5fD3oGV2yWkpZUiex9uJ18gGFF964M73TXfqsBs",
  "key10": "29P4gcKvwoVGuNm2ck5QAbfh6PTbUMPWSFTJCcG8ax4ib3XUbssRGAAyPVGBvQMYkNUPw6XuXNVf9Zu3vrBza22b",
  "key11": "64xxayhbiV41GTFQbSiH5CMWTio1xt34V5idq8HiWGkNpP3nwbZ4SckkdSJZhwke2JLc8hDTkmK1D3VMvpchKnF9",
  "key12": "2bkNkY1RtaxzRgbxuV4gic5LYeJsFyPZti8To3FAnhgLkCu7x38qpFn9XG2go4dj1DUZ6YLqQFDhsu4ynPtUHmV4",
  "key13": "3PN6KPEAuF2sfaKJKur2Zfcpnmo39JCfcnujADMH6gPCrEQcwmCTvJFK8tbUnag8PcXNyCNPjv7uEGx372Dok17f",
  "key14": "56TSiW1Lq8KTHPnV9hiAVGqoEf6eKgWehqwyxi9B6xTqoWMFjv5gjoSzwutrorkBtGEqCDtiR7kpVP1pCkybehA",
  "key15": "3AnRc8YdeE7SGFiqnQJB9fqDcJTZHjdc8vqCRvjTEN6YK4Xfp7nnLFj7TvTBVv8w8pnrGDE9T3s3ZQzicxrgtRHC",
  "key16": "2XcAqxL1cras8kC8GirVL3oagY863vJtoqdbDnRoEQZyGcVmG23aPMS7ZByuc9r8AdUVjnQp6RrTtQi91rYAEWPN",
  "key17": "3Qta2zwz2fWVGm3EB47Tqqwb13VWyDA5NeMQqahnTGLwDLRFamr9BxkpDKBnDbiQ8zmJ94yYpzfvZ26rij5Cjj14",
  "key18": "5xFemJX3DetK9nd3CmeFB7XmAvD8DfgKkudX8NiL58hn3PHzTWJzgr6mWFDDLT6XsVbxrSdrcpv6y28TbKJkwPyr",
  "key19": "5gzL8L87T8XVe2nLHDj22DZPxkaVdZXvCub9XctTjgfd7qLutBNcMxdRPwxSD4rCDmw9ewVLhmCiTTM8zkuroT2K",
  "key20": "4BQBBs7cyjGWrtPn5W2L6VGLgszFNywZnfirNjv2sxv3qkdjpe1uhUT6ohY8E9kqxsM1tRWyd7LzC24MmLHFKyko",
  "key21": "41inAuVQMwf7dTbnEPg6mFkCCAsDPmoYkqtYW2Yta1pi3FTMFtEgN5FLtnhXby32vuk4E3WPvxmKaZNGmg7BuWL3",
  "key22": "RzE6c7fawQYkV5vnxt5EnkyrB2NYL2aFnP5iehXj28SajoTh7gQ66HLBWFbnf9bjbm1xgv3KQdmZYo1hHtchTYt",
  "key23": "2JRJxUSX4T77MEJhgeWAdjBFooEL2CMVAu4BDiwc4ncnMSEvuDFMzVcqe64F2SnjEASbVqREtE5N766JEo2Br1Y3",
  "key24": "5cYyWLRUuFfBfQnKfwyoAGMrzq181cDsSfTzMQKT3RPzQ1B9oWM9FfQmG4cwFGvS8Bt6xeR2WseUoQTrB3Lq85co",
  "key25": "5UcX2ZcQvdfZEr2Uo6KhksPEHh8D8t31v2wbqjfc9qAmNKgeYfJkUvuj1yfSnDUvepFhs6UxvpRK9QexdqZjQXsB",
  "key26": "21y2kCkkjje4rrpDKpPcXnNSdi3YmUyWvafkpu8UpWjr2MHxndyAaQr4v6o5JybpCqJ69SnL5RSmB3pTNWjtTnGq",
  "key27": "5xQ2wG9nUTM5GN3PwoUZ6mZ7p6iAURJRHSsGeUFbFXeNkTeQtHh2YvruDHqPNyYhi6HUVLEoad1AfkVTtuDwhyYe",
  "key28": "2ZmoYbsrk8UVxEGbcv9MhdVv5FWLgddawFFxZ1ofFe8mbYRDJoKH3PdiojLTCAVu46UjYwmXbcP4RaypXsmFqKm8",
  "key29": "wxTiTHHmXhH9eLZnWtzsbbwK1r1YGKGDpzeWaUb9Vs4uDhxJmmbN2DDv5PGMS5t5muuSWFtFjawqHe5NDeJSYso",
  "key30": "y2K1NJQC5Lg64G6j4XBTw1erW6uavg4mAGfBTFBbMBvco3YodcacfRwX1vvkXS9E2oGvyPHxuRQBDT9L7JaRGdN",
  "key31": "5wZbZBRU7FnRPa6PSsWNmX9sqhG7CkBcCwtzYergDbZDughU44jQMsmUSw93TNWeJJGVA2BzyRyUZ5GQyJcpE2g6",
  "key32": "3KLYy7bnLExDPRSxoa9PVRgzVsRsZKqMN3UHdEwg1utp8AUuUTXrgBtcdsEa2pA1tgg8q8ZRpCmvbAnuKJnsBghj",
  "key33": "3mhb5G9Ay5kuWqg75aZtx3SUTPCTs2UQas195L7qAHg3u5iG7H6MnJSMojxM8D7bzcp4oLcS5xuSUhX7H4Fkcq9W",
  "key34": "BtR2RzWy8FXHxaDuC4xYkQXfiQTt9kKnw2NMAgtJd2pVpmFbiRyZTGTtGf7qZkDxWTGmzPw5s2782zFotj44Ld1",
  "key35": "4wpETVpQDfEyUooJuMZWn93ja6eeLc5ZTtGJyMVWLucac5rbWC5wba4Cijfo1JTkL1UbcxQk2v6FiYTGBezm6cLk",
  "key36": "edBZEFLDdjTyS2diGxB8q46s7cUSzNiehDp9i4TjKsXd4Mky47nWmKPjvik7JZ4XVZ11re986t4H6zRqciCHjEk",
  "key37": "4zmM8fgBJAcvirjp4VE3meQMmVnZMwbA1WMksefC78GcaGJ71tDbDukWNv1mhnxs2uorh3APjEAjRhvwUUW33gzP",
  "key38": "4UXgzRm21TwequzjMFUVBymxxUhGRLJhqiU6tsiekfgaLfQxGZoiUZzoHxww3S7BhpsWj42CFpA8seC2GAb6ziEz",
  "key39": "5ogJ58nz3ueGJzc68bQz2meWgXDSZqvPa7reTA4efELuEgaAXt25kDWVcN2JPCW5DNf1RboqdR8FPk1H6Dfn4Yr4",
  "key40": "2k5jS7dWBKo4dp6FRkHKEcy3ReNK8isBP7Fux3witafB8a5S49juZSjSTotZR1oXKp8gJTmSyW51Lj2rV9WTuMQT",
  "key41": "5vAziUuRBvfMY3kezjW5SsqAZC2mgttMQkpmszfd9tctZpxAis3ib39of1nvqkGTkC8K2VWNEknEHUzjT2pnsVps",
  "key42": "t2q5kimE2azQKXDp37aqtar1U5NrtWhaBAb4smNNh13nXYxSm84jCTnMoEuV5M2QD17nNo7QHeuF9fajupREL64",
  "key43": "5E5rXXKooBzaqmfEmbHVVGTXx3YrRXhB1qSxh3XwMFGnZs1wy3Viyih9JNBicHJF9to7KtTAg8kKAjPakLbYoNGM",
  "key44": "58QqPPyLMJHrgA6iBirE2wQiCj4u5UZZ4JSVieB5SehX12mwjg5arx4Pfb6vttaCHPwSCVAazDavSw5xVr8jHCNa",
  "key45": "2sJ4kuUwn7JZFLpeuLD3BEZxz5865sKw4xmbTmeZ3LeqrprHJrFRaJf3TFtHkZpjZ6u4ft1g37Q9xDsRYuE7XHJs",
  "key46": "6Tsw3hpoSqa9d9okhvdQ3VkYiVwSrHbgubuN5i75Z5v8R8upnC8KBzjAYLKTvdLxkiY1iAKyVp2Mv9zFdyGCW7N",
  "key47": "dHeKK2QfWVUK8fduACKj12ct9kiqmYTvnD23p8JSLCTXJPFMsD7XuApRyaJ1TvXxrB9pCC6BQ7WhM2vzHxrXEgf",
  "key48": "3k2xKMFS3vdmsMKGSHCqgS889xD2KZmoepspTmgugoW8vJoDUd1ag1KYtYV9zJXYbyFjRwCUxAcDuioHGac2rKBX"
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
