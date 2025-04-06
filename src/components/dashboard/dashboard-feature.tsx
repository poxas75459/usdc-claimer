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
    "4Dzp1BZCsr8DMeo8XykzokL1UkFCwxDxhEogVT3P25W4RP7kASnnV6su4Y4Wrfddz93w5hRhhJU33W3kELWAtT1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nKxCZ4UirJMc59qwZ9wJLKRPTw4WscR5EW2wrasZxBEiLfnkcYRoZEivJGPWrPmiswjWJbFiBzcNxehwQ7f4ytH",
  "key1": "4V19RWCbNTytd3GjBZNjr974gZbACoaNZpA9cCCLNgPm4pjV1bRmMbm2CFXWGqURqaCGGf6cW33hV8wmqRqBCfm7",
  "key2": "5TVizfCiKwpqYo4YrTT3LFnoVH8D7TAqtgUWLaqgnhdYKC7G8Gtm9zDZGi6xTLUYtdVNckZcetA3LGvdyZ7Bax8v",
  "key3": "3c8uaV1xXP89J8p6ACLN6xqUTEG6HirSyhNiB8KYDpV9aDiNnsHJYKuwjG3zHrwXFaiDjq8MHfzGcoQE5LpnrvCm",
  "key4": "49cJRNv5N1hXujfWbJPg3mJhVjdmWMpdVcxkmUMPxrwfb9QXaMkBFmzidqbNsE2kGUAbyNTX8NdMXQ2oKnGBwWiM",
  "key5": "3GWKXVCFgudUK9Q21juT6zTUxYbM8iUK5UfyqGidvX7yxffzrtKX6GniYnygnqDfKiKrGKvxSCGABtsA3okr8AGx",
  "key6": "4Lxp5buL27AeJzZogjPnVHVqXEaJmTXqBGybHyVqErrTKkCSdQ4qzEVEu2tnithVXfM9UjgwyhuVF87jDGCxctqi",
  "key7": "2n2AXVLSb47EQDqxfpc9QZYE5G1zL76u6puJLq7CU6Em1bupBgXv7vpbYWT6wYFbsZRcoBwpjbAibQGJgP44iojL",
  "key8": "2BpNR9T769oLNHg5ani91sJbi9KWDyduSQznA7t7cjRoFYRAUqQ52WiXfZ9tZCMVSWYLTCn38eSFHwsXPf9wac51",
  "key9": "565UKfYA1PCq3RqY1Bnv8HUYgnZevByuJs7N9egB2W7V6zQ3A1yL2KmghrBpZNdndSLNuto7iRpBMje116vM85f3",
  "key10": "agVCAH1zw5yu4AY9piLSbCwJTnh8Ncf5PYevzMgTGoDxeYZJdBs2A4Fst3AiZDzdhRswhp2UY55cFRkkkPX9VKs",
  "key11": "3yNJa2Mc5zxCKthGJwJjWcUm7mjib1Ve6yJ9SEaiEVcynJWZNZURvayJyvU46JbwNJdTMjM5K2nvuWxnXdkjXs93",
  "key12": "2Qa7X3sPVMnxE319SrDKVpESNL8P45ztTAKfTDBdmMkDmvLiGgYRxxrQ8ftkMgAuJbdriyfrFLcfgJgXS9hkG9Ge",
  "key13": "5Eg5ZdqZ2nnLaRcMwttKnN93beHqKSjb2CoRBTSC4qzcmFKYueMjwEo3EuPfchPyy758wmftxX3RTF9YdhHamKax",
  "key14": "3jVa6sg9N6xmrBS2oC3ndccesedYxwwf4F8A5JHW538z1MiaHwvrPmiji7fZViqcw8DvoKy9d5jeqKyA86UWhXvS",
  "key15": "Dnyxq5S3RRxBQtjcdR3FyPNL9Pd3qb7aAiZasfNk7F8Jd4pzEAhfSccxBzRAFb3zmgybPgnfuhYmDtPHtRkmf2r",
  "key16": "3mjszS35b5v5iEAoCdBv2NoQw6uXD4VHqJPY8mQb2ceoogUctbqhwKhaUnbBBJpXgFGW485Ec5gYrZaB9k3SJL39",
  "key17": "2VWcfCserbPnL8zeELuHmkKr7Rkr9NsfLMFeXGBHFNnRFYFcyDJnrLMFo2qtHC4XAx114jYxnTzFyKB8xSs9xnXo",
  "key18": "5y4QSJi4phNZ6LKr3YuEeAFd26Yws77LvWjXymSicWNp35qzSiXhhTXdQdDeiTA2Wv4kxFLdhc5fSvocGVpknzao",
  "key19": "21PDUnDVAPawFSQ3BitZ2rCj5wwmrj57NuDw1fsHfpL5z7qNvuqRBdoJNvGKYZwDJFdoiutE1GMRT9y4B5wZVfYo",
  "key20": "4SZw82rE65ve6BauNbxicjThoAxpeWZYSsgGEvhVf55NrBKEKD4rrobqQsSQifrfuJY3GdDWPCgYqEsYa7zCFRkB",
  "key21": "2ZJRDWaCvdo2BTjsFp4w7g1Qp7PFRCvxmSAS7J6Puaz4x84Fc6SUo6Ccvmvtan3Wa3KHgwydXYUogtaBrqo5tYhz",
  "key22": "49REoiuYyqTcmbmeHvKvLM4uraio3ATbDK5QBKSQDozPWtPA2yjcoH5G5GVz5zRLWPqcQDP69Bg4L9y6LQ7KX5SW",
  "key23": "3aoCBmNTp99M2Qyo8AZuLgkb3CJfNnuZnA4BpR8KievP4EWKTvcLJukKvZipjaQGVgxH6LhudDUgkRHwYeFCQF3D",
  "key24": "3xmR35VBQSuTwfMRGmTdTKR8D3dhn1xDqAUfhpXSefC3ntikNcWN3UMJCEzXaCLsMWSZRi7er9FFvQCA6EbNmRmU",
  "key25": "5LNgzUJ8HWhG7YYwW79ytYQReZzLJDgWuFeXQhk828DvdAtMrY1T2ZodNDaj4tEoMi7RaiqubLgbKXE43p9E8S4a",
  "key26": "2TCNyLyMDawPFowDnqeAfMaNuAv97RGyjvjgn3e3FEUXzy9aQ8aTVjv3gX4HBvYNkNPKbT9tAugvuMhf1b5zRaUh",
  "key27": "yXm41ENSufUrt1KKMj4t4VxYpDXzG9ySB4TmuV3P3DPGkVQLZtL5U5p3PUt5Trsg9dcTSPdRUUg8EJGPDnhpVgK",
  "key28": "5Q6Z5itDKdykDkuWMwcZREU9RdLoZE1jicoWiz1bMvDzX5cNptMH9V2mLSsxaaumHsWzisT42yXshDtYjjiEqcPB"
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
