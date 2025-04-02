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
    "jUeDByzYmoF1b7G9GWq78vu5CopRF1xzQ9AzsAwUFEosKde9Y8dyBVCkhJzgtDDui4Z3fivhGhCeZ6gSj8uZTjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R3MPXpNzgfmsmFLHoKHFNx22zU7DypUgaVkCwRS8kD8xD1HSXZVfoDz74tjG4VRLzQFzLfGKsV84Wej5Jb8m7uZ",
  "key1": "5nFww6Efi9B8MFczFwGZeVAefm3RqCYWKEsxTTKePk7Yscw3BxU9NXyGHjRLsseJvMVP8duSsKn9tocVkt3jqEqq",
  "key2": "2PA3U7my66oj32kbMv3RJCCZR4yVbcTjm264YF4wqXRvbbaj3mVmYq6Rg39LUwGUESF98k3A5gTpWuYGm6DChCJR",
  "key3": "3gTcx95F2uknbPmR5qrgfjCCZprELU94RrHW3BwSYYnEgUMss45zEW3vED4dEVmnZaEJmbTToF4dCJTzVJWByoaD",
  "key4": "128UurgBQiPKQjwdJeEJci4Tb8ufgtBcveFdFoF8HoF5JADW5zVmGqZrSUq9WEBkxa89YvuJ5cLK8kAf2AgGGLAe",
  "key5": "2zGgwzjmz9Y3Vr7LP419vAu1mtuwpxRiynRPrjkWMYPgYGxtdAGy1sAFnKkPhCNwUfsFGBy6h2Bngeuknj9AShFQ",
  "key6": "3a96QdXuuEiFfRBZ2Lyn2givh9m7cKaQ1zTBnW1FHz1tUgmLYbhDsZYq9vU1g7WWMMfTFCnsx9LyW4bWhobuPYbN",
  "key7": "5BAG7f3CEzje1okDHqwMirVfTudLzGfXSsLpHtsLwUnnGpW2bntYf9K5U6zhmLvjBFsxiGzRsnnNwB7q33PTDZnC",
  "key8": "4HLkTfTzB9h4Av9pGeMN43xhHaq5TRN2wn2Yu9EazvdJ1m83CR7yZrxQAL2At3WGzRfgGG1bcD6yTbnjazHfXfzQ",
  "key9": "5F5BaPMewur5R9hsLCvEV6TBu8GJJYGrCGN5n8X7eC1BSLARzvqx7dMF9ihESUesALDsd3iyRGJLN8tthCMRag9F",
  "key10": "282vGz1vX3oCu1E8mqGMk8XZBDXP9NAByAdoa21av3YdfeRUksrW2Y53yr6UXGzjmkh94mub8JxS5wroNND3z5kn",
  "key11": "35GnV2ch6FejHqdmbwoXo7cBWnoq38mmtqYnkAM4nvfBdJjnWpepGZAmsYejF6mqzBwxYH1GUE6eM5wc3wMsG136",
  "key12": "2RC1x9hmaBPBkpG9EkKFWBUvxbxiF9kP4mZ3dNmkaJHFBa7tocXU8hrFDjiW53vY9cVSGcU9T48nTXarWpCrEBda",
  "key13": "3vvkxoX36xZWAytEqtmDJJXXM2YJqZ8cWxJZbGfGE8ghpYbrins793mLuL56aGyiBdVMXMYVKnHLGBAwWeyGLSBj",
  "key14": "3puhwm126t45PaCru3AFh835vBF8eobTVjCW48wDRY9sM64qdRj2xR7ct4VRFT6hYx5ZLhpiufNfCDQBCQCuw9Xo",
  "key15": "2f7zNigQHdDgZVQE5Hg9V4UgXbaPHxm2xHLNbCm5kRrax1hhb4CYXn5NVfFBJ2tsiT6NAzzocfqWpMFxdjQvqVwz",
  "key16": "4hNxNKUJ8pX6T51TUv5jj9ptjTUhZa6soibRQTyA46RqfYbEV7pj6Cjj2ZnLbKuub7DGBPQcGSFr23vhan7nRLiK",
  "key17": "63KS9LvrfSFabAUxuX9DPYwzM47SAtMLmDqPrS1SJdMtHSKFwJVsMrCechwNJ2zdZgKFK5cZSD2bfxi28DoMmv4S",
  "key18": "3XM43RanaTLuM6oNKFZx5oPjGYzDo5aMGcvGcjFjpd9XFc6XM9eNofesEGxJQyX6vup3cqjFBd3vEgx4CkqE7naW",
  "key19": "3UjhLgM9yxBJwwCzbpciq5U6j2oX5ZtuXQus2G149RBRTcLPF4DKWEi5xLAYL9zSqce8hyzgM1d2L5zxXHZJ3iES",
  "key20": "smfTuRKqnuqsjYq7b9QVVoJg96sjPgy4QXNNJ1C2n9BUPLHjDvgScuo3qeyWX5brU3rR2fBynMEJkcSFyurAxzQ",
  "key21": "2ysJePSRsC2XwAgH8pcmGhgyJKbxK6yfbtdLDrq8a9yf3rwurGoeuhCrHAq7px7RfSgWjDyt8bqxhnJ1Ymm52J4e",
  "key22": "5xYvG5H66iqubcP8cEL2v43oAyiXVZwcgEWur7Hr7ajWTzWcQXcJXUrwHMt7YCrai9T7BRHKqCYMrRj2uw6VWaD3",
  "key23": "4otqdrspQWAzHMvsCEQeqZywj8Pf4gsTd2bwSbRrx2FpRP9P9eBTmp2QNGmz3xMqd2MDprTmgdFviPmJf8MZRza9",
  "key24": "3Xc2FFhFRsr3kqn8tiF1Qi2mE9R8qK5mrzGADX3QSxot5MS8DTFgMDhoBfTQceefejm6NCNR4jo1BNt6M4z6eegq",
  "key25": "5mEiAsDFhE4eQjMbqswFVoR7FdPReMTKHfQLsFMe9pvkEpUbiQ13ZmdZL2Yrqr6t6g3GTaHPajsvbnT1DSNtYbyz",
  "key26": "2BXsJ5p5ZH5C2N51mRiReVHEUXRM9HRc6LCR6jbEiaD6xnHfwV5LWEk82y927EMVWSQ7iDZWFemaGT1nQRYTEwUR",
  "key27": "5zzZSeyKAZnYp9p8ZVRbb5STkj5J1NZjaXv4wis5pPRq5mpJJp89VSit4SeYbW6AsLdTd6Rku6sNMhyzmWvoBDW4",
  "key28": "8PpV23JaKnSMnHSqcmFUbrrNoqNXJmR9fi4v4GGVFAzrgnyLSfadPEzvDbLhHMbHr8foSfdzpEPsz7f5TcirNAC",
  "key29": "2mzQqKHbxubqrwcGzg8q21ao4PWXXnivoQRAxngeXJTd5GTept9pC6j8hSt97uGUxfx2EmUnNFX4gu1h66LmLBDj",
  "key30": "89jEcwF3TqTrze5CR1ekcUsh7nPWJgiKQFbbPLPC2rUjy4FRnp2GgP6dACpcc4izNHtgDSGgdGQkFqDxH8MkNe7",
  "key31": "zCvN32SR4sYFRZLatWNouPQaqvpCgA1Vw3deeG7ZgG4CNvuhVjH9WsyJVcLUmkJncLmWbQJPfTvRixuxrEay1np",
  "key32": "4W2srmfmaEDBNrnGKPweyWptkMmJRRobwLaUYachggJso74q9L35VxvHz4A9ucZZZvUuf8vDSeuk5H8mHLRLMDkm",
  "key33": "2zqNZR1kMmNmXn9gNAKGZ3WMEb5nA795FKPCdjTcvmC9Seej1iAZX2rqTqNYQt18vFiB9bCKEsXW3NDuHUi1tVFG",
  "key34": "3H6xC21mz3LcnP6obGxxyfx8MAH2mzgjU75sqfkbq7JGYa2vpNaophUjgdvN71NPqittwcpwYB8v9Avt6hg8wMGj",
  "key35": "3uLbmWHcrcPLUM6SGfST4Kte9utdSA6vq6PwA6GMA1wHSdpp2jymhd1yHqaf5VPh5rSp2p5zmz9oqZaFbgYWiqUb",
  "key36": "39B3CoA6QMaFNAVsRi6H9hZFtfv8CRfmNG9aLScRGQdF7MBSAoXK5R4rvrwfmwu3T1L2xTHXgNDMTcWTxHwbfd9C",
  "key37": "2QA17g6bTEHXA9gTeqquGSoKwMkvVU7JFQfVdtr7FCRtk2GoAjH3GG4CGF3SKRLbcttVYZCz9Ff6FrBTji2hvAsV",
  "key38": "4iAArTUUfPM2eq3gEkh8gTBqvF8KEgeSkNdZfNJw9AMvag8JFbNR2y1ajy8nsV6fkZFHfsdba8GiTfVcEenpn5Jx",
  "key39": "4gpGnBSrYyeQtDPq7gkQNFDToRu4UFxWuyH5C8apESa89PEr97m3iAypX9YYJsKVrJP4pkWSX4Q9VCzgFFR1VQiB",
  "key40": "2HRP822p9ykv6AnxhUUpG6eaDSxG6BTP7YQb2wNLdVaRF2xPB1RDxa1CXzJEbTrwyZH8To23cSrWCvADk8GvE9VY",
  "key41": "58Gk1BuEXgadttnBQbk7tiiquio8QKJCq2emA4WGuuvVruAjU26VyVrfEY91Pd5TXhFLmZKHiL5VWy6zmkB4wHXK",
  "key42": "495SL3qevheSz9UHA9bk5i5NeoSZ36wyjTFVET9CrGC6dChGJ9MMQ1HTsWZW6XNRYtmQSGqC35NF8GmLvQoysyCt",
  "key43": "2i1MG5NvVEJ9Ut3y7pR2iNjyRQmGaeaufrjR4vkS7cK7pVXdBXyy8HJUJKDU5Yt6kP2go3Pc4ozrJ7CqE7fNyD2U"
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
