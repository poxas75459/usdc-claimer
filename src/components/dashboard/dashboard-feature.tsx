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
    "2fPXHicsY4H7VSQhDCRdBkARRStrZSWE3imUbX9T8vcyJBpUuSxroRKh9yYGqRsqdso9sns7jvuA9bbCWxQJnVJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CfBBTwvr4tUVP7X9QgrUg9Zakj4ALSUPBstCw9a6dG4AZFp4uWZYRQEX7CiQ1LeQE3GtGYvjhio2QvfM26ZPsNE",
  "key1": "5M7VM3YHSTacmkLN2z8tCwHm1yuk7biooRFJCBnBEnarLW9sFmnanUQsA4iE6No9HUNDVGkX5rSBJitdS91aay51",
  "key2": "26LAkxrPFvqPCYYX97fczR6hv9nwiG5WgKZR51YMD49z2yqZ2ACWov5YV2Lo4GE6f2Yrc9NGq9oz8nBDX5x2hjbm",
  "key3": "5ydhfuTA9Y3hJyA99g45pgKNkEPvmkBvkWVmbLNJhiMGKYtCC7oFPXNKARriU7KafMt1V416iVebbRiGwPfYRpz3",
  "key4": "3SAFrTLfMa6BMAw8xACDk5e3iAYC5vpTiVsXmBM6d8nq2es7UoNoC6BHkqBYktL53XrFuYJetJczJJRKP41QgzeM",
  "key5": "zByLkkcbaLwZRHddYkMwCeaLVuKGww3GktYyMkn1iatFT5PbuCq27Aza7v1mqL8Td8YieQgqnJJ8MQRH1zaj5mf",
  "key6": "38LeKZ8GBQ4dkpEtztJPxhr15yWJMzkcb6MCyyDw9W3dcX6MD2dDgFLTsv3JHTnAai8beoEQNCqYGPWJuT7nxZfg",
  "key7": "Zq9EJGpMaaxv3DgqAFT9tAs7oGXjMitZDUNmErynYgag8eBTNU8tabDMGb9nTFE8zS5cacviuU1DYmca8bdgg9y",
  "key8": "ac296DJu3RoMwR1AThpAm9PtCXCzjzTK8Hg8PqmtuVEPhEqxHZd62Z6WMymF6a81YqHD6npSHNAFzsVYP3BELKC",
  "key9": "4RrNBnUxo7oLrALQdm1JvP4Yh2DFiCQyACCpX9HbNMfPR45cFs5GYC1ZFhoRuTCUPeTDy6cU4hCMYLKA7cCFprrn",
  "key10": "u1Uh4s2kYop7hBofy9AAinUkrryAqeDku4GFWYLTaRWHxwUH17evek5VQVAKmuiEN5hVXw4T9UQ12bmW3Wr9NDF",
  "key11": "2aV9QE1SLXbugsGtVAyMzmTkuFAr7Dzw7Po3qH86eTqDeh8N6edUw3v6BnYsGJwbDN5wynA5GgpryC2UHXts8ebc",
  "key12": "2Rv3KyfitT1EiHrmrGWVgNnKxM86uXHtrrtpQq5isS8dZGE5BFj1BpMZcXT1QkUNdVx42jWJF3G6Stw3CA7QgjPN",
  "key13": "QUFJu7RpS3bTaMndrwAneWzZadaAVYSERnbaGuZfKy2qN5LaFg1po5T12bGhJsSB7e5zykEBeHwsxzb5CsgB9G9",
  "key14": "48zCxXAsZfENgTDTLjKKURZ2jg5bELa5Zxj3D6sKuambeJ2m7BHTu5C6G9cL444xJekJKvMxG1WdRyPzQftmsQRt",
  "key15": "5pDNopxQ1AcqjVZG6TxJRTLjAog8jUfYJgeysbibZustmm9xKPnPy3cDK5U3dG9W1RyaZsyxSSmK1iry6exnQcAs",
  "key16": "5D5guydEih7peABDuM8TKPWXnhtbwWConDhUfeuiYC9RqA74zL8CorkfaASjzon4rrU8nRopLq458KqpU8cn4dCk",
  "key17": "3fE6WWDiwJxpeFPgdfM6wk4gF6gGSBJHcgbeQCfgJGKTiPsBZ2pTmWn9U9NnQy1xkSKYjnKu2hH5YPCPeymxXAVg",
  "key18": "3jUXreAJbUPbF7MWXU8qYVKAooJaW2L886YUpmULtV3swsW8dpGR7ZRec4Fc1VMPd7cwZ5nN9DkN2n5ipBtkzMi1",
  "key19": "2wq41qx3ehp6iGJ67GAhSjPJKMUpGzb5PVmyLatorQmyuPB1RNSe46ZeFCJG54VBqva8b2aLrQ35fYf92kigtEig",
  "key20": "2eaLRFV6WjNFWPjH5rfgo2R64CTQNpYz6JKdsKXty3Yh8jLfszLU2YMjoRb58ouW4N9mGkirxt3zaraNGqPrtYJA",
  "key21": "2jqvQEGt6gBXR8JCqQzEv6Vzj9iARrwxYVrqM34SF3gbGintN32uz1YDZWqGMz7dnXcsmbLG3t3PT5WUDyQxs2FU",
  "key22": "36c9PxhuPtA76DewA2baB7y6kWGmwKsZzQuECHr9Ki2EAz4xtE8pjdBq3EqK7secsrdEnF1NC4jzZFJvp2mFnzem",
  "key23": "1Er8HEt6HY7iADDEmBEebXVV8kGTvXBHNE9r7XntdvbHRN8jQvfQJFyDbhhj1kab9JadxKhN21jqR6jKFtmLzvb",
  "key24": "39B9V5PazDu4NRY9QGk8xCZumHY8hd5fz6C2sESkwT7Rf8CJrUmjXL8hdUhteephPicckp8DcA5DuiFWB3hxrb8K",
  "key25": "sbWJmnXacrsHSacwaffRT2oHaPDjdZobgsz5RmJG6LURuJ9Ppfq1wLNnVGtNZSywEf9DEi8KwFpa5KcofF37Te3",
  "key26": "27Uwu68sWrwQbiL6wWbNVEED3rHRweL6eeWWB36rH3i45CxYLhbKJeyFv5xTan8yTonVAeV8TzJ1HQu3Gr3JzqSM",
  "key27": "3BYELmJiMP51mvF3hCAkX7SRVr6F6ZZs8aXuPAWbABWDiQoGoJVZRo2spXuDuQWUyMpAx4sVFMt5W2dDUNycdznd",
  "key28": "5xg75bL7X5gBAqBLNHbg6hFX4T85tk9iZy8BszjnZ7NxzvJ8CJ9DtjP8bWi6okQPZ5VXhhket9bjg2mdYfyEhvN",
  "key29": "3vxVxCPac68CTbNkdd8zypjVtERsijXtjEyAjsztxNxER3FogRuvggWV8GKnKt5cuG7e86QgqWPoexgohLo9NJfg",
  "key30": "24NPPLgco6kZcdJXGNaCACAMHeQG5Fdstbs2iL2sNnqZNt1s9Y9C7huPtAbRbcDi7LDR4y1yvY2jvRXdjC2zXXrg",
  "key31": "22x9NVSLhA866MCV9apWCb5KUnF7qzNb9yMfW96rJxXXL66YaSXq7woaQczfSTyH6Ru4JN5DEJNHttEPeeFT9xwt",
  "key32": "5r4ZKosgonZDQTrTWLFxPLPR4PSGuJEpbW3Eqxk5rQ6RLjK2MB2oaXCQERSzC6RzXSm2njTsGTbW7CrPQqok1iBf",
  "key33": "3RsKsKbneRFxSzRt1z5sBXzQQCKb18vXVrkxkVnx8H7wTJHFr5nM8zXZe8XSKHT7YZGJ94PS8EBbfTDH7EdVhQYv",
  "key34": "BkaomZ5dcFucgoqH5WMM3SvrbqQaPXBfPj1LrxihJ9hHaZERZNNBwwRX5XPoaTv6MhLDgsCGVndLEU8hWkADpZv",
  "key35": "KVnEi6tbjFjHsLUVbaMbeG44RE3SE3Nx6SPo6qvVVUxGg7ssNsEEv93tDqsDPF3f4P4N58wR1DpkyxeSgD6aenJ",
  "key36": "DSD63nJPg2JVeDpyZA23pi2nGzU9KCsVqczATNv8mPh2Pgzr9iGedC9bpmJTMu4fymLnyzKG8hMCA3indMaBPwp",
  "key37": "4Ak3LYF2jVNtkoVrsKY1qQSUgYRNqDEQbbK8XoCxQfrKiEU6ood6DC4zNrsYw69E1zS2NdzWCaDq1U2x1RekE8f8",
  "key38": "31FFfUGwM4jWqqtrKBefSGyc276wdecW89x4WuzYDX7fTSsC8z96DeMM7Vy8a7kcLcP3Pdpzv6q9nnVTFDxgRr1u",
  "key39": "WDWANhCQwB39yA8HDZShMifpiU9bVsndJwh3EH62p5MTefdRbzFZ8ksFSAJpKUcbhVzbdHw2SapQYAJdanC4Jfg",
  "key40": "Nktcd8qtM766LrqFw6QEKLCYWZTqBfxCxLAgbWbQgvSgXhtJLFdAtjnNu9bq6vkdCUXmC3XEiNcmjAWZeoqh4Mu",
  "key41": "TwJd6SZf1j6EiGBXUTQptZGheVUkYgjpkobJprHgvVRBUzFfitQBH4mvoAsdBwkVZugEyaCSJbsw8pwUDZFFfbu",
  "key42": "3DnhAyrpugqfCvi6cnc2thXbzXrW3tJNo1KFBfPQZwJDTK923QuHStCLiWKM7MxxnKp6mjc3LhPEva7aamNPEF4r",
  "key43": "2BTCZWSx1hwSggrst1GgnSKwFVrzX9mfSW2ts93KfM2C4mvyjracnxzwsLkhSMQGGPNquRnBWH3iRPT8wqan8bH6",
  "key44": "2L5QJhfJgf4w2FfxN89rNiDnDeyijBACf8Kzt6NLBmVoaf2JYqgjfXQAfyaCo8qqXr6sAVSy9G6bu6sehcwTXU87"
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
