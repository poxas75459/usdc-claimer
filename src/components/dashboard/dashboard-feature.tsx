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
    "5CBBbQCHrrCrpEhcWqK5kki827sRnEe5Q2hk8FtkXsGdoBppnzo6qbv9ibCYDZUv9tNM6fXccHEgma4EFzGyATRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gr8FfxTuvRV2tCKu99q7tfL4hQgBArr6yfA17kCTXfA4m4iq3XNESsGHouhBfDpYF7QDF6gU6MTmNQgooSRAsdT",
  "key1": "3ep9QKJ1zNcSWQVrCfDr67iWSPfc16zB81LUb35A4Vj9yt7ZUe8LwihvTShzsHAf41M7rtQ6bymgpbesXuk62pv2",
  "key2": "5Pve8Ge3Z7kLAtk7EdxL6hthvbe6dPJ6z9Ab7KQzZAwdnwN7P2RpiRDb1yY6EAvwDSZZ4TvqrsHJC2QbUJdXSU7u",
  "key3": "2LgJBxgDxttvA399dZeEesfgz4JFUTNJJBgYwmQSMF526vnx1WDP6suyWhFYurJrJcgffHST3WXkSQGeJZCbrFnY",
  "key4": "5K1fqAaCfu25Y3C91BafJTzHwZrQ9bQzgt1ZMbzsTLQPFk2uvfpB5TETzUoStkUFufRWst5R6dqb95Dp8SREcMXD",
  "key5": "PBzEEs8jsKbjL2rgZ6BpnepgLhQ6B5apekxZKSXq2Z4h1dGUgVhdhGXdfmHxfxC6f1X1Z1HY3EnQFAeBKbAVKQ8",
  "key6": "3HoCSLY4UyMceL6tGMyXBJsEzSRpeGPg3Tgk4n7PWWBqcQgk256N6kUE3BWp72mdfxVUP78SNK7SfoqFEQ3MJDSX",
  "key7": "sJmDKBjw6u7TFERropTEfRzqv6CUW9zStV117xQWQjwCHGddHYDYtrsGCmGbaEara4ms8nmFS6VT33K6NyngkaM",
  "key8": "FCiaa29yNS1C38hU4ae1qbne3cDk1oivGoxHtQJ9JW2b634fYwTpdEdYWwfpLPgTKaZAJ7xmwTT4CcM4LZU9Zto",
  "key9": "5QfbpJoVou7N3UXAKQrfVgE9GA389nUkGZ5Z6Z9b4XrYBWbcbbLqWiRGgUxVnWxz2s6xpM3CoDAqSBfdmMBXkYEK",
  "key10": "4n9MGK33qVa4eBUpzwurUeQD8wCGZLsgrT9VGXZrUF3Xn7TkWn6X1bo5J1iPfh2GHqes2VnVEbpheX3aiJXhtnXQ",
  "key11": "4hK6s8tjEwbctdp6XGHhxr4riGSqfJa5WV3Vyz8oYnKpbm84BichWTLjg8A2jRNCfsHT5sV4BZe3fD9MnPLAc4WV",
  "key12": "4VXhpK4ur6fqLf4GRX36X6bKJdG9CS5ccz11j1Yh31SxLPWkwJ7sGQzkhLZrv1a7kgmouBGvnnz5cCvCwRzYYk8P",
  "key13": "47D4mEzzyW7rDh4HDjtPhrcP5B53SpvpRmUP9EJBLqr227tVa2sCuKmFsBKmV8UtsrNDvjRmNbgrYVpGzcqY6B7F",
  "key14": "5wv9PogFfiQcTKWXLeoF1qVxpQEmnHBfmstKM1heLVsJaTXfZgiJKMtzxDmYpAv2EirCYxiwbE9aSY78F61UXmX5",
  "key15": "7UPKhYCgTCs9DepSrSMAWegkzf7yPrARHz56Uy1piv1TgM4xv3SpnUYfA1gXgFLVteiYes5JPoVu9G1eS2KqRTh",
  "key16": "5Pjf3HDrhNEhpNWBKqQQnSk4YkXhABMUXmWeWXdZ2SqmzLgZj7yEm9fpqgoKhwiCRSWVQAcACgqJaB2jyrxXqGF3",
  "key17": "2qng2tuM1RDooJCbFesS3wenzu5KZvnitkzvNAcrx1ESnLASuNm2ne2LRG8z9y1LuksUzo1B8M2zjPkKHU3UVCma",
  "key18": "66qMpejQJU7KwjBHCRZbF2pb96nMES5d8P8Tzc8gFBBjyQCeu98y8JLCNNLa1YgYxeoWkAZRuEQ87wDiCfdo2zDh",
  "key19": "38jCnDRP7GUaanmphyg535ueym4vN5V95KsXeT2T1JZtEX1fbg7ZV382XBeXHPgQMa8EQ7eJ2avsz55w81xu2Umv",
  "key20": "3NW88UfHasbCFL61JxohzgXAnWP1Ft7LBaGjf3Apb9Lvnt4n9jAsZD3Qbr1axmfEyMEey42RpXKQ1hQQKeVb3eWi",
  "key21": "2kYeWhdnMLSxjHryKEzfsYCtTpq5v9MfARbMF5QMafA81sU9EaT4gvcxhKF9gzd2wB3jVzCj4v5t4EMn61y1dfRs",
  "key22": "5qVSweesJ8tjuTbuK6HCrFusrKHstGTmD3Cp7yxBbVGRT1qNzrWyekFYKVH7r2AEtXwUcHcTtMCe5PQCAJX185n2",
  "key23": "4jfywL81mihsWVh1okwW7g4Em2Fc9ivc7riXkk6KcphpHd8zNrcogExGqSgPbFuqmNAMSniYBkQKSk8FMaoaqS6v",
  "key24": "AtMCbTctPj3LfrwqoJY1tw1z8Nt5VxJqEJy41QzesDDGNLj9UTtxBPxx4cHuGZEMyjLxYLfaZDDDK92yuqes4Mh",
  "key25": "4c3zJN1Pe9KQbka5W95kSF1r1ETfTeNkYdLNStP9r2stR7kdQUjerfNJhPwF72vjGtt7cuj2PuN87opTECe16HTa",
  "key26": "zR8oX7EqS8HQT7MVJE3xbtPFRiKj1fUacRAHed5bKoLXtM36RDLvydCFF5GJ92eukeQiKjkyj46JNRnv79srSB3",
  "key27": "5Dm9gsn1FALuQiu8enA37K5rDv5Q5Xc4p4vGuixFcWPHS4fwMcs7DoGe6KNBCfPPeGDrp5DMwMgoNx6HqPbEe7uF",
  "key28": "5xFvMiFt1NcFKXMS97sJRa2y1jG2mQBQxPeLSnijpVSTixw4sZixkF5TEhrhAyorNMbJG3mefX6jngqyTf2arnCi",
  "key29": "5aN9yFNzYLw52bqqX3hnXK4sXdhStZVWXiR27jnypLH4ve9sx3XMSndZA2TPT4p3gcSsGqfjwXpqJaTHb3YwAkfy",
  "key30": "35g8ZgpX8cMvarBDkwrkpTgXQTLWEe82Y1f2qUuAdz9eL5b6xoTiVy2Rza5zMoh8Ap4aCjXgmEKQWhDmhifDTmDh",
  "key31": "5WaGz9Fxnc94zdCmCuhnQamXZhy3mYVSZkQc3PV8ewhff5UcerZ3ph2ebDbfkti1BWLiaoTPrdLB4h58e63MeqjP",
  "key32": "4SD2Roo814EU29qKMVWYTpi8RBfzwrQX4N5dPJXotWXrB9vjpYCJesi4Mnix11qhUgLB9Ygb4zRJMDfzFfkzH4gL",
  "key33": "5nWf2KvMBAQYpscxkG1wMoNBJWP4gsv7sHmBCQpL3wPMsGKHjZswuoJGYZPAYAPnGSoVHz3Kee44G1Bwbcr6dbZt",
  "key34": "Z4zbu5Esqty6gQwG8Q3khaR97ETMCWzbQtFi2hox85Dz86nyf4KZTb6zPrZanTWdqZrKE46GZDdcra3pC4GvGin",
  "key35": "3jdqHULD3wSjRkQcV9uuSBEPHDmxucmxpvY4ixj3THquWyvYJqX29cgkCfvRyh3TQjeXK9ubPLJuHdUvWPWTxmAC",
  "key36": "3jumukpLAJjNXQ2DCzJgXkhhu7K8BQGaYKjas7sz7j5aZpsB8tvi3cjMwwkPzCPWrTSUPRf78hrGwLUr9UefC4z7",
  "key37": "XGxYxcJXdmbKgaoa2y7x3oWhzSHPVMjS79EbbUgoJzVa4rfuH1GQnavtzSknk22KiRU54DesZKPFL1SmdwnE63W",
  "key38": "3fF7uUHmJ1AW84tdzryBhiFj2Tx1o19rfEtHfcUGa4MC7W1iGtsNAvejKjMspt1i7CZHHTvn87S6xcPpvuiw1NfZ",
  "key39": "5QSFfFqkFvHAcr6uRvqxMnBXo2w3pigJKUtCBeKEgmXYHpUkkNFYHqhnm9xytoePXbWW1nx894WhaJWvzujenPJv",
  "key40": "JmAxfBFTLv6SLiCfe3q1LGYZLsc9hUyHAxUkwHnKBdTcURDQJVvaNxFUtg5T8cooG135XzbT38Tcs25pgY1jurF"
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
