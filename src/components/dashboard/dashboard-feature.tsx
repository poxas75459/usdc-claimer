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
    "5nHv138Ph4XV5vfFtCiSDtMs47WHAmmSFaTC6Vx7rm72kSmpxk9vZ4GP9s7XWD5DRechZiu8qKE8Pd3SKBmXGNZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCiMheqUKQAiYYUjJVDm2aeqr84fTzaAqvFPSehKYHUrqgGRaYwUYq2aSFLEgARHdwT2JaJpwgYxuFkZQYKmJYw",
  "key1": "61ZqfLrDMWSKqakwBfmMDM2MKGaCJmhTzZRJ1A7pf33RtQfYwWDsF7vQ2srTkEsp8eU3FyAA6yUt2EbFEb2wcnhK",
  "key2": "2okmLq6bY8ayX9TFy6ZsPNxgXfA7w48w2E5wSFu4PQEyZbvSB1T38hiKoTDchgmLEdmaHbbo8fGa9zuv5gjsy2mh",
  "key3": "5RqBSkWbNaJuE8X4GFhLgJSMJGhdhYVG2rQKb8c6HM7r4qbLM7nq449wRBZX594YWVnvrxxAB7cUgowfm7YyGvcx",
  "key4": "2grN9QxJ2NsHUTbU2X1rU5zyQomepos3xqovHpacJ6SpDo4SmvKksdv49VniA7o2Tp5WoFYjhqBcgCGDSWSTadjL",
  "key5": "NwWEoD3BLiZKCDVUowRyKYHRqDMdQsBgr6FuGrhubxwzL8qQBj2vGafj7rsmGpQUDarRCMr67afSpuf91k4wNPf",
  "key6": "2y7ShUJ3NuQVxYz4o9cgV1eWYVVkYwKm7vLQc7o8YdRLX2Q7P5KDU1mbvq96pg8itwMZXMdWGbt8veK286zUzUfB",
  "key7": "2LzgngjbMPDKkEYuP5hea6N3gkdqj4n7oSKPvcUnBJuFJNntbL6ngYrRvBb5sonGnH9nVqEdryA84M7cn9qT2Amg",
  "key8": "2kxTEqN6pbsBXDCWGkxxLDdvEcpPgaLuhUQ4FpgCGvnbE6WQTQqBjtqC2rE8baL4YuMHJ6EvAGyXfFbfUe7GKkrg",
  "key9": "3XHaERbQYUSn51ubQtcZ9VHR9gTb78o26RvRuSgttvm7gAt9hmEB8jcBGe5rCLCC5qSVmyLrSR1DMEpaK1dxU4wi",
  "key10": "3w8ow4vGjZ3VUt4YtXia3Gvba34M6j7PXsbzdB1LeaofP67coqwySK5vtmnXTpDxmydCxKnCS83ETsUUFBpzMF3j",
  "key11": "4X5MEzCkTC41JacPpunrtpFXEgq4cn2f4eyfRLsgUDbqNXD1iSaUpWjANgEoQtSypq2LNeUJS26iCnG669sWXmkU",
  "key12": "5s244TRiUvWycMpsB9rjtL1HA8YvDoAmhxbS2xjwGr9H82Hk1Qgcnz9uD8KXMdwUXsv3skGYaQXWXnYw4sf6JJoT",
  "key13": "EjrDyBbe9dchUS2UKbAwNGo4GdUccJcrHy9SKUbGrHvbviqDeAHvgykm6MDAeRhDoruTKr5Tg2Yooyks7yXdzD5",
  "key14": "4mqMuaoehrQKg1rBERSCn816oyfNCic9jg7yRqC2YxdTveCHqmfjYe5fF5QmKRCZu2FjB3MzxGiGiy9vvBNx7gVd",
  "key15": "4k1sZ5L4w2ZwEhF48RaBhCsQz9bYSx3N3yDSKYuScEk6nRFAF9a9eRC8UhzipPhetUvcSrS4ivoM4rZEouxC5Bww",
  "key16": "3RL7TueZjj1Ydt9U37aTYRwW91H1XoxudGcLHMSJWQqqjLeyS5kuuXC2EC1r8fdRQ2W5qQfqp4dqAFSwqMiQDSDV",
  "key17": "5sEg6rw7JUtvpBJY6yZ6EEKSshCKoPVzNt7StVKc2pEqiquZugZkGCN1x8oTBw3Ft82naxJqLFtGUmqVwycR4vFc",
  "key18": "4SmeZccUC9n5XCiE4x9H1Px5itoC37MCWhVsf6HXpDEwKmsZepbGg9G4bdmdyFSH3ypH6i9SCvEZScgYAuDyQdTs",
  "key19": "3fzKaDu41Smj7wbtGDwXYD7r3AawFwUo6f8UWmGZzfBmRUaN7FCKp7Dr2PSVCYBQgZmEgVYvf4mYyCrgCLwJYCna",
  "key20": "4DRt6Av31wFkyXcmjRsk6zcbqNTynMY8Hz8cAMbGakX7foJNgENp2s1XsrNC2uzfsAfKAr2jC8JGsctih6FDxv9f",
  "key21": "64xYmvniJ7J4ppBpsKCxj33jY8GxzZL9jLz9y5SY8KFYjVy2vuyTorLAEw7Dy6EwDLqxTyQzhbTrdCJTyPF64ELM",
  "key22": "39vDNT1C1C5qDLPaPWjnt3LSGenZS6oe1ndTxZ1nV1Wog9TptkUdd8BP2vqD1QHMUmk9taJeDeCj739MSPpmRw3q",
  "key23": "616QdUMjVkRCzQZsEr7H3xGk3ntQJhY4zav8w6shxL5Z1jja1L1Uiqxiz8Dd193UK8AU3PFjrYRjqhsZCNqYPjSr",
  "key24": "3enL6Sb2EQUJgRBM2dcxfhPZzq9kgE4c8sEymqiXhdQ2vaL66gJmyWY4x2QTinyhUuhuU8n9ygXTvAE9kMuDRcU5",
  "key25": "35XzdWYgq8438vr7gsGgwj7RZXoLSzu9zDa9mTwJAwzQbsTqaitaVbJRsfscU264M5v1KGeqRtDJdPpNYYgMWHTs",
  "key26": "4siUPmGqR4XMLqAvn93peRxReJL5erVLJhL17DoJLgAEynT2LWyqS7oSdMecfv7m3xfybDMXQXj9b2jCeoMJ2sbQ",
  "key27": "5ZSNQs1mCPcstqvSYY6t95ZUNkxzDBx1Jpky87MVi4WKqDFZ9CkST9pxSTxpKm3QdWagjF9Y8tsagkX1x7VEqV4N",
  "key28": "3KrzNFA6vjKw3bh1B2C48vmZsN2QLRFzTuSQuEKd4BXYRUKwqVDH6i1cAPQAfCdcGtA9NBiFFpBgZ5HGpkLPCdBQ",
  "key29": "5MzKQwWw1YnBVsFj8w8Q5bTK4rcCA8z3Dsuu4tCUBp9sxpt2cwrtBg3kdEfG1LyXqUFDSva2cygoSjzWDRWgBdqS",
  "key30": "3wAotBPd411rCuRQ7zsq8xXvnN7V3qr4HH6sz1vCLhMxkDyENSJ52xRPDiYiy19QhXuoFQgmSQNBN2mhZXNBCX4d",
  "key31": "4CQx9oSrREZ5HMmmd2TyfqidgBZamNQ8m4od7dHHQFrbGQ2qZdLKz6dAvGDwzhiZBtYpFySGQHK4Fv91P8ixiHsb",
  "key32": "5MSZx3tmrikn2ec6h9YvYqmtx23LH64BWrSnczbm4Ygm8xDJTaQHJMHqky2bt3JgUb8AzgRpQEBaaPMDqRY6eH8s",
  "key33": "43omPkNqJFNPSyDGSLmTuRDnBngMmsZxADQsqYVBodhRUFdcw9LphNEeCw2N7Agk51c2aLooweQYgS2dZei6gVuk",
  "key34": "u7ai1h3PUsfBTpsSFBTPwvcQxTm6Xzd1xTjjjNd6mc9pEjbkJw5imjyTdsJjeow2vG7qeqcMJHxzeVb5xfH2Eik",
  "key35": "3b1D6zQLkookvksVBdNQSH28yGro91JCorDvDEP3mvcfR1UGrfennUTVTewL7VXZ6XV83WECTGbHPGbWqL4gvRbi",
  "key36": "6iPN2SdqT7J8eGLTArhGgJdRP8pV8ZS3g7awQgwPAY5AgEWCS7j4gr5VRWomVrs6mCod7GAXUJzc6Ebp4RVUWvo",
  "key37": "4iC1V7tVLnJszoUzMUecvE3WYDSUB5MGjZ2fuKX7fGbswadBXpAAMEM2gDS3KZ1pua78TwF7Q9T2SsKHd7y8xrnK",
  "key38": "36Y7FHxhuBozk3ZQjTuhUeqZSd2bYZgcWTkPfadnMtGE5dWrpQWePTb1MuwBJiQt8BtZd9tNwC2MyjshEyyeHZ9K",
  "key39": "3T85EpANs1ZH7Tt4g1PfgW9No1s4cerRbRLBqgQMuY8SFhZoHiNGLhxTdRnAYf7mSvweQ8VTtShDjuSo11k9qGrv",
  "key40": "36XSAgDC13x1RJ8WrfuMoeZYVLBEsenft2kSnW25zbHQEGDgG6WsiCEgNScRKX9J2usyGQC51DQcJ2z2Ua5yca6y",
  "key41": "3Gwbq4jfn7J6yKqKQBwVpnohPxvtUgRXhByZamjn3rG6D3CwTJ3b4byejWpgKjgj2zuFuVR4Vc6XGEvQAnbWbBFU",
  "key42": "3wPFkns1W84iPQv2kyBj8voWdPhewUPSHziCgeSbtQ1f7MgGfC7YBncAWwc3a3tt1rSNNC7GKbXsdAbeJZiQjxcR",
  "key43": "2EZbEcEaPXzQRqKZR63eanz8drbAAa624Y2PwSMjJJNpA2vh9tiMTHmpmUD9SuwiABRsBJfGaCNya3AfchvT3pEt",
  "key44": "4qNTA7c5oCTZs3N2k4EYsUg2b5dA3vkVx3fQ2r3UEqJr4mefjW2kJ8ioUdwQrtXc9NFkBtXuXzppYmXiSftCyAia",
  "key45": "2P7spFFRzwWxTjtv4ZKRH2aksq3wSNxztVicznsB6ZAG7hdJZCf4Vi2nkLNkULt8ghHwWB4PwmX5e8r7YXM7q3w6",
  "key46": "5NqWCziCzoxzLydY7ufjKBWAuhn7bc7WGogGUsfqQFPYzY1UPyYqeHjvN8K3EoSvs5NpLhtLZn8B1ER5PfoxiZpX"
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
