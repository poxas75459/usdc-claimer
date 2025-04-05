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
    "4aVW7JuAShvWpZBSCcs1ceWShBLUSz6gn3NoSf8natoANrspiikF5gXTNduHnE8txiDe9S1hKRuMZsYS6Ni9wc8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JvcF4GyP2z8ykLCPJUt4Cs5dgD5wXGod7Rki5sDasrwzCXG7oZDasW8a35gB7cuAsEZpAqSZbdaQRvbM4XDuXUZ",
  "key1": "47ghf7sj1sE6MBKnLpGBZ4HZ4AC1u7rKBfx4vTFGE91x1Rus1vgYS59nvoFLzL3157XhBBwGdJMBuM7S3usRgaEi",
  "key2": "2ypqbqx5bY2C3iFTQY88ztdbnmKhRn8mqzaBvyykVsWaiaua1fNuiAYmSCJz9NSzHZLW191ijfRQPTtgaMK4tjpU",
  "key3": "Lx7aor6FrGv6hUKxymrdo2bnabaqukD9z1zwoHdw8p4iReJu2Bxk9xxYJxoFtedusc2m85waBp2VjqTRifFzh6x",
  "key4": "2fMJ8P7dNndafQFRroCxPYFjBNR6ngEQYDQHkJKBAwHA64SuWJkvei4kvbXTmMuG3P2v3Db1sX87AFyv5q46pimF",
  "key5": "3UTZSAfPd1JDaVGngpTF1uJcvgKfsBStkFzrJs426jMiZdPDrMWMbGuVdUn4xWyMQiGsXxADbNy4TFeDm6c53Dee",
  "key6": "3MvSoxZCJJWGKLzuYCDN1VxYty1P7jnSEhf9LzbBAEYYuT16gQpqC6MHs676zm8SPWLSNkjnAhWX4u8SHQahu17a",
  "key7": "fYhrGGfyW4WP8J7vgyZQBZpdEimmk7yMGrKLemmFLK8uVCrSrbYEwp4oCZnS1NXzxZpjKox2iaUwW17JsKyAa8W",
  "key8": "4Dum6QBJVJTEAapYHJ5peycyptsK2bavJZjtv64VvvA6S8fMtLUnaDx3DNgXpZLRWiLG3Npp7SfExwfPW6DYPuuu",
  "key9": "5RkwjxZdEVxHnYni2C8z6tnPYRimwi94N6VjDLKXCxeneAarKPrpvBLMQVQqs5dwZj5VrFNEJmvKYnGzgVLVGNEW",
  "key10": "2Duqk3CivDHwJ6dcj5pwAhY38VLas2TVtyDkoUu1BTu8LMb6iQYKFXCY8K83M9Cv1CAcS8zyqfV8Czpa3eQMRdHf",
  "key11": "4aHcBwFUi89iRdCMxungDZvVxwbZCeR84yDyvEAvJVretJgc6Ls7KzydHj9Qr6LE4SWoGW7v9mi3QpyGvvzkvEzr",
  "key12": "52VuEki1WWBEYp6tesafPgustFhCAtX5RnqCrnhHx1DQkYAyXYfn2sqh8iCrxJX86NhvtcmCV5ySjX44pUppVvKY",
  "key13": "34fiS9BWmYrtD13tAcWidGkskbSErduYNFGH7U1CGZxjNeKPo5DRWpUWYXTv14DWkMSs97tbouMyMxsQE52347CE",
  "key14": "3SstSES4JeT4cZrreApqaApax13keCjaTzhAcjAbBwTA42g2Vmj5Bn4ShqGSBr2z1cJ1CMMVe5e5CaraXPrGE4QZ",
  "key15": "4NUg1pDmLyJ1UqK24UCqLPMpsnokMPHwTykNV2o9MWqNNdBKixxrR5dsDfZcV5TruUTtsPrpVfrSz8xW8bSN9dyf",
  "key16": "55me6SCGRM6gH6LYPLuSUUGRqE1TrXbJZw1ahPHRe97YmWSLUQBgio3rfpFPfdn69D7J4jFoY4b9C3ZQNU3M1oyv",
  "key17": "3HVgZcGNYV2LNDmF9XG6DSSiVpM5bCyXqbgBw7YhDSpS4c1w6zrYnm5DzzZavBXDtQVjSWQB3abh9MDM6dx39kwa",
  "key18": "4KDsBdn9zGFTXgSt87jKChdAm73PsJ48a5E5s42uSCkQzs2zsyXUA6z2ZcESNk8qYdUfZNkGGSTYbZmTEhMATHRG",
  "key19": "5xTEzbKTiV6SXMTcZ4VPmPgzaZg5NUccu1PBHrknfi5mjAjGGunMqzz34pD5N2qWSFTPersbvYXi1QCnp4NDKZeU",
  "key20": "d3u8kPC5yByWi65kFn5spFrg7sw9FJbTJYK1jgJRm9uzLxUmXopX1nKMn3sNY4Prs7ExEsXmrsgLC6nuSceo3SR",
  "key21": "wNbPRs8GYRiAUNqovRevKQVfpJR2npN6xuBvSqstoYnomLbFWE2TWJgn6ZWdpPpBFKvYHnLE9cuboVp9uebFkC1",
  "key22": "3Rj1gqhioi2Xk8SbannQFqTYvw44f6zygyBLs3STxms4XmMvr3CHYar4LrVFKdFouwDgjQCpgEkaJJGcyxuo5b8p",
  "key23": "GybTGvCaDp398j5V6sFQhBFys656dRDkeA9zi4W2zmoNPHobBzHmKbdCipyKHM5dEqSFAd2CT1KdkGahAH6TLE5",
  "key24": "N6witWqxKBfLZiyUQ7cjjVDuJ7axYhjycWxjCLYa6nffQjyaDT8c5uMXwnDeJeuLgFVx4zGXXxQurBjGdUDSVnj",
  "key25": "664Gw1fpnqTgNZ1kS2jRSomwmx3fkjXrmr7gSu1P4X1cqstDCVmi1gTmcasbThmSByUTkGJ1Moh6hyumxeorfHKF",
  "key26": "5vvv2LQcSGT2qMcaJPif2p2AX1VsxwnZBzpCfMJkZeXXjEfpzutVyJacQYZ9DVzH4TUqPzRMtyHFfab4JX3AFquS",
  "key27": "3eypHVNnWPKWvdHR8xXoYTN7UhuwP63q1iVvLjnESvpfn78V9PF3hWHhrs45xNBuyZoBgLi1Bcw1LxqmnaQ1j2Vx",
  "key28": "4v1tkwmmYECFxCqhtXybQrKXZnioyB4fnSYfv6hYTTDJfdwBxc3XSWH8pwzEMf79ivHMYjUKf87N1gURiyF4W6LR",
  "key29": "3dak873ssUfneZbE19Z5AYftzZywdL85w374c1CpbYjxQ95fjmoj1i6G1gfrbhTuDkDs7Ud7Np9Ext9nUNNoLUXo",
  "key30": "4BZjHYCARPEZ8eEa7NrcCn3VgfUgRAcZ2kk81yBLjqFsd64KikoootdxSDqjmPn5CfcUQwQHhipvxDujLp5dKenz",
  "key31": "FW3AGXioc4TYxqk1o2uWqKFHcHQXkv6rC1aWcgJFKmDSDkVfRN1y2xh1zagQAi3ad4pKpaWbPP9Y9jahoLejW3n",
  "key32": "3qMX5JycRGXfdh3UcjV8FbGDS6hCHd62FHZPoVhR5UGSTDu47BFoWnfCsHWhkhegiHX9EWby9bfTwKpbCbQGyDi4",
  "key33": "CRkxb8NAEviiFgZb3H7Puw15gbaw6QAP76Cmsyq2oxnRsLAtZRQS7ty6fH5L98FXmRYKDYvFrtDVpQpMx8pnv1c",
  "key34": "8oFBJkbw3LDVcS9DiyTW7SVphCbS6kwvpyGVUqQBuDL14rDj2vRifK6dtxnut4sQhGZpMjd2HfyRMgKiKzsLcwe",
  "key35": "55iT1Vx3McWtxaodVVoYtg3vVeJJ4bkduQ5bv83rE4C35QELHzAQxCEPfCt1gfivSmkVzEfKhurHSVg3jJ5R3qqb",
  "key36": "32nDuM8GHAvf4n1hEFJsq8ax1WUgnrxtNEH3e3ybyQ5tjCavWqw9dXDJ5XMRrPYzzx6xQkiuLHRbXBiYULAYTgjb",
  "key37": "5fahiME7BMtYGJUeRT9V2Xm3C9YMd18ubBvYkYZEHKvZQaro5hfXqxYbT4ipnjPmM7iycUZMU6DNkZGU7DYm9odJ",
  "key38": "5BqjNhbWojjaLtNiXHkBJxHBkWr4ne9hgp7tndYE6sLLcT3HfFeLMqFAVDQZxHEhikuf8dWgMyLHPRbnJZjNbwn6"
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
