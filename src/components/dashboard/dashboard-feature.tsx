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
    "2ewLaA3irXPmGMw49yBqERNYGeXMhVtp5n6FEsU3USo8j8HEybb2BPuCbdfaS7MMSuuWfZgCf6oZWsrf7zbCiS9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDN9jmRegKWkneVboVZCF4x9qpJyXo64AbApuZxeXpVD3a8ktJNYzGuUVSbwNJvDSJpc4Weg2j1ZaUsMNWPKpp8",
  "key1": "3tyKXrrJjh8sJdy2bYeHq5nnYVgasoqg2hZXpbtNWHTo7ngFZ4aYpeXUC4Z6kQsYKRQHjaUNi7jMBmoNHiruWxgS",
  "key2": "3UL6Fbrwm4Jyi6PC3zPnWeNHvWNcPWhi7y5YhHFfRQpTuPorNpCv9XC2VA71kdhyXKL3Xjnm2rZuRBGZrDxe51GF",
  "key3": "UnbygQWuP3oKcBfx1gscAMe5EfsukSA1GhUyfoyRyoJ4SEgZ6TC1KXdQuU3Kd8aAC69Dpf6AU1QiVMMJGRnfiSX",
  "key4": "sJstS2mHQ22pfeAHX7CVeucCViiEbHpWTB5W3XBu6WHjHLvVTyPqz4o3CgqyAX5MUBB1D8kt9wnRAZqaPiDQQDH",
  "key5": "2p3ttXYmYv62ae4bYMCKTHjASy9EECi4p6yBoJtWnGUPZ6jtMiWU6UoVCHZkHDMgAhnn3AsginbUer6c3LfetbTJ",
  "key6": "t56gRP6HP4hx32x1z7mQ4fGAgh5Bye3nWAyCo34Hdi7Lekn9SFp2smc7Ea5QdJoW83EPsUdhtuEozE1hWFkx4Td",
  "key7": "2tjKaatfpcDfu3aANyhxG9nxxLShxpJNip5K39N6kfJn8Z71zu8gU8zyCM4nBqXm915wTERoHqav9GktAVaVvfSU",
  "key8": "41P5EQa9XGR7ZDLRsZnJhCFUXxg29cAoXuB1nN3fTRYqdkjLKKuEf21aStAQcfAgya6Ln5eNk45qfZ5xPdF9Mxyz",
  "key9": "4UNfwfpN7cQNNM5XQ9DqhwPxCMgwAkrNXUJmEfF2AZ22jx5Gj4Jx9VuuPuGWGyp6zrZKfdy9ve42ZKxdPfdLnDiz",
  "key10": "2TUbsQFLmRAwm5oaZUjeqmy4PtXRyYLgopKc8kCFfTbpyCCJohDxBxGByU9wXhNux5ePykUYVdgtcUkjsbRw1K2i",
  "key11": "5bUccjARPhLaTo6Xd7Q6QDJaMwFZq4gcQWC4qyVDRhAquzpibVxdubHwfgTeead1iTdyiDkeqvgGtr2N7V9FXXQe",
  "key12": "2c9UqnP6AvojbYDMLt6MhrVribQSAA9w1uKWXn8U5E5ACReATgQvCkvjnUgksAMUt7LfCCmQCL5wz9YpMEE8xf7n",
  "key13": "3XpQC56pe63ofhUhubURqGTX6Q8Qo7i95WtDitgvpKe3QnnppJ64xXqMW3MSmh4kzeavqS3m5Ry1STVEhnqnQfqG",
  "key14": "2v4FvEY6Q9jsq2UGmYymm8tNX4hRmkyRhvzwEPT5kbF1A1z49FSHQgTGJiC86ZZYv372vKAnTyYSA9TRN83H6mwz",
  "key15": "2aDWcmPBKQBN2MeYNq55oe97dTdzJra7fVKms6nKpr99Yvm7oy6yvQ7nnvNcR8HkhmwQfEckJAF2A9vjkD3qbrSM",
  "key16": "4iwV6K4X24phbYXwZoqmrczKF63BH45TJpkVhXCn9qUawkbvtvdweXM5SbMu9wwFND8HAzoVhNaCx7WfR1vRwWbg",
  "key17": "4hhWvufBJzfknziV6PmEUcW9At4HgPyJhJJjCVnKsL77pJxyUx5TQUTeC6wTmWWfcV2xTmSm1zgzxEu37Dgw7zqZ",
  "key18": "35vMKPUMfmr3XspZtYaPNU8fpokkWVvxfTDoivVN6rnRC8K84VMsvKiZZKcyfBLr363wii56PLzLjsYSkrtpM7zz",
  "key19": "Dd3KwD7HNpUmZ5gTUMp2SfpjkkS3gDSZdfhDp5Zq6hJRLpxbHN68zjDpMRhhefyFhfxDM5RyfoSGAaKPdbDyvJw",
  "key20": "7ngyqYAzZnLJToZ1DYojBAtvn4ucVAUEHYGNRpf7DMxKUKv5tdWHQqh2AXpobx2yLgz6F447Rm4c89NW2BK6oyF",
  "key21": "indJ5nEgbf4Usn6NaS3qWeRD6kyxJF9xajjKxzpfSTPVF59Be2RDehNnwjED1zJfCEsxZnw2z8sxJLoouGMrTk6",
  "key22": "4dx93qgqwwqmVoh9A4AYxZCHMfizvratgzAK2M18YVDu41thAdjwBy8EK7MXhQobWBvzCNWNUVHesggYC6DJubdY",
  "key23": "xA8cMg8FVY4JP6iquiHQY417pijvzvXs8SDTQiTP75BgdbTH9bETZzjsHKSNfGTwKyA6M839B3323ZtGVQ8M4p8",
  "key24": "4adSSpju4XB8k93cG8si4CR7i2BB8dBfo57VRjKLZC6nUtjHfniUtvjTN8Yf8QxQPpcdVm5GpGciJNv1ParVXY6q",
  "key25": "VryzoRiXZCpiDuRad6NeJyCa2L55rN6RDrYjueLpSEbPvRMv7iPEoDA8u1grUjs4vs6bLSjHW7nCVb5cnkWiVmv",
  "key26": "2E3xhFYHheVEoR1NfozuU3aNUBxaQK2tGxot5sBtufBGtFBCbAhMpQsoQcbpfHpJJKeKYbseCM4QmPCB9LvfgYUc",
  "key27": "WZDvSP9vP7ACxe2g9qM2quPpKhkXqFSAv1tZiGr16hi2gGrCXmC9e3J1zDc2LqdoF2vNqfsDywBHck2ky1oTc5a",
  "key28": "5Le3ZgKMYFZ3FpW2U8d2nwe8ogh1pa82qqVLGw5z1cZzr2UM7aH1R8zo1wncUFmUcHAovMkvKLLB3Hn8EMc1qr43",
  "key29": "63uk4NxWTNS5v6DB7mPLdDM8FjYHiWJeXsq8DLiF6S8yQAK4qvmu84XvLHgD9raeFyEUKs9cURjZcNr1KdJwaZp3",
  "key30": "36Zonwr9TRHzwxAFoeb16FdXRm84uRPJHMQU45F136d52PWSUWncJgzq2A2JXGLZd4xeAWmvzze8tP2RtnQ5u6gG",
  "key31": "5TRQB7FaxGD4pxP1TSX1hPw7vzeshGiGACEp3jaVMp5emnkbm2N4T7s4ejqkJXayPryo7VNFSq52ZErFds88Nmj5",
  "key32": "27fbWrXM8ApHtEXe58jfqVp8NwDJKV7ab1uA8DfZjGRT3YYio3un2fqynQ5qAAVE8CEwboueuPGHScfHx75rHP2j",
  "key33": "PkD544pzzCHABCNsdk97BDigZNCCTxfJWKzjSLNfHyYQawLRpSDStmY3iuHjVBfthqUVwxokPVV9yxQW6z7JgX9",
  "key34": "vsMv1VkmQFbATps6yiHQXzxnmQCi9gmmJBTwBxZRGBtVikceRrNd2eNjoUPGf59cMYWVf47NL2Y6mTcnCNZxqyb",
  "key35": "576gVJQnrSZGHT9eT5r5Pj6aBesNZsg2iNotdaR9Vr8S6NdRCZELn15S1YuFAMRx4dKM1wrXZ3B3eDWRcYYyRmYa",
  "key36": "4GfTv1YtmnDxSStNs4kuDTXWFc1W3EjZQazX3gHvqP9fQaC1wh78SWQoLfAbzoF8Ec6B2BGiUUvyUXv3YEFayc9E",
  "key37": "4roD422UEJgz46zK3D6bwenD9sHc8gvA63XeU4mE7f16hkuAxWHjK37HTH3hd2Ji6yJLNa3tiQwJYLEYEoCVALsu",
  "key38": "2vgUCTmGEC7Sb3FA3Yr1TyLSucfHE7kkt4hgR7A9RScJwktDq5a4AYfyBN81r1naGhdUqWiro4QWyTGmUCWYwBXR",
  "key39": "4QkpZxNsZ6Bt3BxvdBSwen1nq2x5LMKrCgsbUFopiiFcxjULV5YpcZxp5DC8UZWUngsQn3ZsmRercPHWJbxynCG9",
  "key40": "4H8Ysk8v8xfgZpaxZeyEXVefH1kgKAzcfJ7dfkWaU6uTwiE1tyWgzzsc9FurSw8FN5ckZKzGCBgTEdptBE1yEQTS",
  "key41": "Jq2snNbKL93QZnHMPhc34JzKfFdmYH8g1NjWPThWwUDEDi4DufntSSnZ9UNrwjNeC9m2EJz6h5DPRmDLqM2gi8w"
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
