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
    "2E4orNgUEyGVLH4Bdi873bHngxhvQGfeqhDPNNPKqxo8xg9fWfgieDYRXiMSMjeGQVnPNh9fenZ27RoN1piQu5ZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpWMMjhjDorcFgYZyn7p9GvY8dFdYx5S4sJmqzNAiPz8VKQr4ntNTztwsuojXJtFFZgjjB9SsfqiqLFWqZ1gBrx",
  "key1": "2zcZpBT49RwkbPdws4pDB26MwdW2urBTgDkECoyJVAXvejo5UYpVZvDhdGLiDwSezrZAnYNE35FbBQ2ABiXP3fia",
  "key2": "4jay1r96oqmEJXa67sjwPuQcmiCnR5NawApYVutGKM8wc6ey9KGjc4xhkR5uY6G81VHStXrHEuEKq6XJVzX752Mi",
  "key3": "37NJQm9N61BwFPzkzqJFEJ4M7fMduWTaZgaoi72nXJ1YFFv82sNuMNcWkHEG4jbZoU1TULHhK6bL6jVNWUPgvuyy",
  "key4": "ZmimftbrK7Jzr9Li4GWKk5ErcdCrMG44DX4PpaoCJQp5bkjfoUBRrdR92h2nRrNf21g9FNvB66d9ocdiP2SDPEe",
  "key5": "63gw5txqcghk3UKFrebYBKKZknSA7AWJHZWrUj3yR6KzomUGUJNYy2WH85fpB3vFrvaURZ5vBg1PDRd7aEbLExdr",
  "key6": "5LjWAz5BoDNSFiF61fFBkP28919iDWFhon6jVRzhWQCvHMzkfvkZa2bJzGRJL1Xc94Lbdbkfo5BZANPFKBL6C2D7",
  "key7": "5a8FyVqyNtwxJJHDM8HxduyVxBTiFYoWfJHYnkWEvpWqaWmcdHJLqeKZjGzXZ7WxCGAMPRuQRgXdXW3J7NwVW89N",
  "key8": "5oCHft98cRDtG6KnxktifdHMzmc3xH1K6wvEJbmZNQsPT4bMxpyBLGKjxS4pCFPojKwNZcEy7FR5CE6uhGsczXbq",
  "key9": "3BKoYUA8gjeBk7txMHpBbqCu5rySKgQ6pJEvurK27GZ1LJEgWwKfkSMWKZg2GNnVbrBYq8Z7UbVnZL2MD7zyhGAM",
  "key10": "67N8oFdXW6g6CNqqRU3iM8bEamxqeSvYnfAi9iZ8HADchFCwqBiLTVCf3CvaDHVKnUkLMevynwCXST9pwdqNmvZX",
  "key11": "5tZVvDxu6nXpvyj8aBduYaVET737Dw6rV9fnE71gZ8ZL4E8Tt2HsRcKghhV7YtcdVUYfytKeCFRSw2foSR2Gq6gP",
  "key12": "4mcCgMdFvRNH33PWkqq9qBHayHEQty2tfB8vjyQX5ojhHgSPEnJQkHNqPB5nDw79WFzRW7fZ6mFpt6PzEUdjA6bd",
  "key13": "4x9Cy8yQSqhgUPZoQnhzTxHq7KHKveS4cZYs3zSujGcGf5qEVdwf6AKNCbxwLGd2THHLXyo8YF2yWGS4kzeQeLRF",
  "key14": "5ta8MQFuGg1uYvWim8oxPbR5mnXckG3CiY3GwjuVvxEgjYq9LHKCZijFK4KFVFYKE7VXdkRD5fWDm5XPru9Gbd9z",
  "key15": "3sg4zaMpdiHqATFwnutCLac7h8WrEZ6HERxdP2We3VVjKMdkPeLBUeE3PDoNnzUvxqdcd6B4E83stRPA8wQzJjhh",
  "key16": "GHQ6mRS8EuKVqX8uwjGf4eeeEcUJuhVEifeBFCxuvA2TMw5EwkbTd4Afu8uUVM1TWhxGJk4FGsdCsgn9qoZFFq5",
  "key17": "2jBXiPZXZ6EgB7DDF6jNuchbZUwG34VtpdVgLEU3pFwr41AbMnDjTCCNjrmTke2kT9kxHwJ8KaiRymyzer4kkwsy",
  "key18": "4EJEjYLMUBV2Rn8ciuK321sSJEtPgv6bJMF42UX669T3etqjfujFUWf6KeYrQCykeSYMt3nmF8PEBzEs1BsnwU4s",
  "key19": "4qJj3GsybL3M7UoG5iKg8rawQmtWm1fxpgAiK2nT3T2yw2sNb6mJyGWbKVzrwF7sx9CfvzPkjcbD8hZJgyLEns9N",
  "key20": "3Npw2V5SgeDGJ5CCFaVgrskXxDkZXHEEYgXjfftKmWjmeCdV37KcE13Eed5SkQg4dgHzmtZsSCgnRfx8oE3nSLFq",
  "key21": "5khcRQSpd14r3EpaceKpC69fE58ejRM3feoWB4t1CV1uAb7DS4Ub39jPPEa5pU357hmKwjyvpaLRordM28JnNVtL",
  "key22": "4c14QNdPadKRaQ3Sbvc3d7US5NBdd7PS4y8BRrTA6CJrd6WPt1wX9h7M98rEUeEDgyuzcqq3KLMVmWYQ9RD5RthP",
  "key23": "4cxTHchcefRRj7N32CJQcA4wdH9Xc9h5gH5PCbsTnkR6G1zHPAdkYR2vgfdo6g5mBJUG4kscB7LVepPHQWF1fP4v",
  "key24": "5k6jaoYjH8y5PeXbwfDEQUa1hbrapdZrVUUqp3bNMyaw5i2R3rZW4v4aUrykq5da4sKqpR7NyctkXxYNe9NnM8Wp",
  "key25": "5LS5Uq7aTpxm5WDEytUMtMhYjQT3wwq7qRuMwQ45kdqurQvrpW8GN32cerXtsWH7Uws3TbB6BuyqVQqXrmg23q1F",
  "key26": "2wbkoX2z7gEXBVPZEUsJ3Ruu42Mq8pA8oPT9C1FCeWknHM9uSmbuuEEHk1G7z9a8qtKVu33NNX1hcGN4EHSoBxF9",
  "key27": "cpwKzgndsgWGi2AjpSWkiuwg8fpscz3gsKShvr3rk4GB1MHFcRUPkzKFBwdPL4jB8hERcYggc5zhNsAMCNDDKAb",
  "key28": "2p2iv7t7JbqhtqZmzftc2vx2aji2ypd9WXCzGVuA8dV1xc4HyoZbghXQk3kQm3VWRrVBSi3ghfEM1NrJRw4bwmSP",
  "key29": "455FfuKCk61MCMmMw6ASuzbSuoNdssmCu8ZrYd2MyHDCG994vxwM2t7XAR6U3UUqrVuAgfgvjbLjDkJfHiF17zBy",
  "key30": "4BQ9BepYKi5Mh4LbcoAJvvbbVhhPSpi6ik2LMrzvvcKYWwBpR4TPR2kizQX8opdqsWRByvbqKJqSsgmZ1CGYAXf8",
  "key31": "Sy7M3duptcutpxKWGwb1rvpNbpA2o94CojupNTpPbCQax4REip6URrMF73U97arvL62jwLmCvQSDg4FXbWTg2LV",
  "key32": "62GAzXEx5ucEtELYdY4tCFRb6dqvbUXjhkTUXNbNZ37rUDB8sirxLYhe4MzPQQARRpEzS2pDjax88erxLf6VQgpA",
  "key33": "3tPgiC9wsaugb5E6U7LMEvjVUMWNaBxgmSXmpZoarPrV2v6VtyBTCJN2y55ibDGNxDLr63dpeqnbiQ5iEZp1ZX3o",
  "key34": "2izdKuxhhJfyHs5B9ywbbbcXc2GFJsFMG6Y8TYMN89VWhiDLT4BerAoiBHybC2EozkeAqcC4pJW3SoJtirpZwpAg",
  "key35": "S4tFmrFWwQ6FMAhGRLa4N1QBDZwvGZhbQMEcrbiGqqCBoUxArcspcGzyFmwn6DwnUhxiHTysevRfKcMw86a8uGm",
  "key36": "26vUjmBf3JegN2FHjSmz6EpxxZKf55FgpE7TiG7n91PtCMkRRMuzE3XKo49AsFAwBKMKUcH3yqDbt7mium6tPB3h",
  "key37": "2b9b9AFKGK2pua97sP6C5pj1s6YJXDxsg4jPLsjiKuAruehvdnbPBEJ5pEV8ayuR7RoLSQEZ4vY18CzQ4JHA5787",
  "key38": "7EXBLLLurSJu1dQQUBjgKoST7U7hiSA9x1abwUWZa3T5J2RyjShJQoo6kqkmuRMky1aUfxyg8253V45Yoeq1i69",
  "key39": "CSq3Uqckz7uT3KAjdRK2C6fdhMzchiUNXJhbgXLTuY3F4WnZ5VYU5j2FgR8ySpHf18RTG6XDdqRkXW6699HdXp6",
  "key40": "4xyFkV7jx7yJeaoAAY8dZexeB9EaD8oL8CnuhauMvWbdZUKWuLrdicHzgQHZ4xRjYqudbrpZcLT7SX2ttuagP78Q",
  "key41": "SoJVdLZnwHdM7wabx4BjCCHKe2f5uwU8BAXy7zTtJuLU694wudjqx9WQJuBT4EFBGNQnMbRz9Vr2MY3iJoqvjA8",
  "key42": "2a9asmzxT7f9EhDg2gJF2nj5AhJgNCYCzm5ZjcZvDPcHk1nSiKTK8NkqY8a7niRd7bjWmygzAFcLWMkujmuqCSkQ",
  "key43": "24jXkXsi4LUZZqPpRCg7J76MGSmWarTWmHFcTZVt6QC8HurdnM7sjmbZhujjFtsqHmwobbntK583bq5eSVMD5hcD",
  "key44": "42K4YF8iUcZtM5kyzfwSWiLgZephJdLVYATmEL9JhASZjBjtFoRwCxHDFyUeymyQiEzFtYbzSGm9fBFiEMsNZYYK",
  "key45": "pEgUaWCeJaVegSiGhCgpoZt2NWxsuTKhLDM8Rrazvxhmtrk2SC37pN1my3CoL5cwSXG8UMAeL5XaJEy4hVeRT1L"
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
