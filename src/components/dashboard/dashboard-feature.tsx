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
    "4Fmy2c2U4SuuFpHRngsHdEJ5bqFGy5GYvAtjF3b8sxyxvAWGDmFVXzmHJNajRKGK1ezikrmGrzd6uXgSU6QZRxJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tPKaV4FjPSJqfi1Tfv5a1JgVmyW3sByEkeRuXd13kiFrg3UfD1jgD5msDPWbMFP2o7q8WtnpGTLu2okPpaVYQy",
  "key1": "4EmgHS4eLArLhkbYPgQnrDVFCquTbxKvE9fWcqEFerqCbu2tvPZAQm54GiZzKPnzi6zWHJ8i7853AaG2gatM8aib",
  "key2": "5p2m5xCXmrxdSrSrJkr1jJ49QSx7eEU9oHcHfMBbRFpYgYyVVJ6qetmJteFTaauMDYpRohqJn1XBkXnse6P61rgo",
  "key3": "3Kdg3Zc5hcACYZkqzYBQFAemrHo99Hj1bHfFrm7B5bM2tSHtLaB41ykDF3g6f7pCHut4C2r5t46D8WZgBH2FWPFQ",
  "key4": "ee8JhsBUb2Nw5pMS9soGWSGoyGMh6h8oY2awZ2Dstp4LpGo7tFFx3Qo5af1LpCeAYkdEuVcLbpWQ5Fbnmb9avTD",
  "key5": "5hMW97ACbKiLyyyj5EXi5qh9QApB7wC6L5oLfXULEHsLA72Y86D9X3LZbXgQCxDsNPzCFTUQRS2r44GRxvHVqUuk",
  "key6": "5J8zGACZh6CMPTtNu9hbVz3qNS2oawUdZvtmVN9We6UvVzmsTGuDkB2s2Ar2Q8qPAzVs1wgyTETnNuN22nAGT1Zs",
  "key7": "2UKMKUNBtzWZ1AzY9MHd4dsJtQPk72PxwqH9U45NJ3PXrjPfb7PEky96oG9iY45N44qheDk4QQDX1B3zEDxseJFV",
  "key8": "5t92b9ZVdFejkfyRUUketKzK1N1HiFXed6MCwx8XBQzkTeJhAF2qH8KvQpbjs2sYWZ2VnXPH2UUqJErhCsY5nvvb",
  "key9": "4wGa9sXeZAo6X8thnuncXYEmiJ3Er2gKk1jBBbUWTnY4ZxzPeYUHAJwXbjgxXtcgjYbYwe4s8gkcFqmHYPEnkbh4",
  "key10": "5qZzmf7rDzPMJZVabnvPxUdoA838dK6NcS5uya6W9sSjCvDCsr12i8M9zPYpNyYAg8mVs4BBKDgAiP1vhUWS4BfE",
  "key11": "21yZtWbdamtgGCySoBP9kgRNHrzckuCon9wM8e8gXXc1bJf3dtGGm9AfuVdWMt3iZp5Nb1JxwBCvEmVC4Jo8fSmi",
  "key12": "2xYYWsmtkaBkUN58h58ie8bJeLWhRpd9PVgzBNUx1JeKV2ozZ9QeHQRmZtAJxTThAwtahPhBjcmZe1SPWpiEB5cE",
  "key13": "Gm85dqiPAf7PjGYX5dHXTgTm85GXiMJo5LwCGaU95PM8hppyhDKQ6NeawnmVvR38SzSpfG3kSdQZ7QPjgeWjssm",
  "key14": "5T3Rq4kW6pWfAnSe2ainVJF1au4TQ38uTh7shSEk5wa8MwqD1GBE9pbgpbiAkkdayu38Z9ojL3kY6S2p5jzUUgzy",
  "key15": "5adeLVAGeMCKMbpAwsNRgqKdmn6YD6P8mhEC8BuJoiQ9ch2R3DifKUn4DxWdqDq2nmwA29KJ6gqVQnUVnX74dG9v",
  "key16": "G9cJcugF2gHmx7V6zb1dwmjRS6BEqn15ycP1CckYvXmvyB2FygfZeoCF1P1cPU4EfNpWvvHo8YwWHVHT5jxkoWp",
  "key17": "2U9f8qEpEG3nGYH4FbdDQKC8dvkZazzTTaQPP2nF2UPwFpFZsWbCJTBPRCggCZkZkcmRprVoVSHw7WmBSSijPhXy",
  "key18": "3KCgTZW8nQjSibp6T7EgpgdCaUQmgb9o2hvCvnHWkerpsYY2EanUd7qD4t69p7buikSKhSWHtcg1que8YFVcS6kP",
  "key19": "5KvC3Y4KRCYoCKEuM2pbAbLGnFHSA929yNjtBkGR7ekRqdHuDBsRKeZoQBkAXXtwnYiy8wQvVNkY3wWEi231UaQC",
  "key20": "nyKdWWGq3DEFXSRRUg5nHpEKj5uRfQMuaUam7fYoDXNgA6cG6j6i9aMcuL5yEXiQWfaBVHGqbpgv6FDb7EV6VGg",
  "key21": "4PVLQDsn9XCn8PhTqH6svWU3LrSFNVrwC2v55qYLmVPnW7QapakYhNDk9sJdpFyJfU79c84Xa5xSLXbYyfcsDuDQ",
  "key22": "4fhYpAzyUYweQbE4wis6AusbobhLxmHpXsnFPF3QW4MrAwoh1WPrUYKYHHmMraRdVkr42Js17YBgMbWSzWBkrZxX",
  "key23": "2yMWbnzqDqwLCAxB7kYYnEcfV1f2dBTHwpB5TUQgGCoTDd6zNay29S5z3qnJLqNReMXsQaHN2ramrZdWE8Rrx1y3",
  "key24": "4BAJNQe36d6GeYmbQFB66NfpHK1jEsC5vtMLAMeSwSmp8NwZ9JsMw8fso3rjnDieQEaKj5MhtgXX3X1X88e2tWDB",
  "key25": "3NGNpukin1mPWjwHEVvpV9PDyn9rpuY8ncZdoXFiRoq8MmqELm4cqtysm9S8i8cwdrtNoVr9oQo9JJCnEx93Ty8o",
  "key26": "m4XGEH438cxLNVf2Q1PFW4z4oFtwkpKVn2P4skwVSJMQSu97p7hg9eybv643e3X2fBfxMd6QH1qQvcYGCUGj7D7",
  "key27": "V5ZvMYPi9gwfuU55F1Pn2rV4HEDEHei6Tkhq1MgPZfSs9NuNeJATvMGFRBKjJm8SexZpD6ywC6qLXi3hgnWytPL",
  "key28": "2cYMvtGjkoaSd3s3yBLfWrc6VtiE5mJ5c8hJy77AZk8urz4snvXvvX9FaMfQnraYNLxjcrb4cpXNsWrAddua5nYG",
  "key29": "2Vog5zv9vFbrjgrfyVDYBQsLQ9DdrGwwpv5TkkoM5pEhpHhriUCA6K2iU1rbtxZpZ8raJYzKrPpiiFFcotQCzHLg",
  "key30": "GeS6B3UVY9KzsXWWEjYKx7GRNw8qezTh31xmh39AVbuqUrVMSCBny1PNWGvshUr2Jz7QQidyvMBwx2GnUGa85CQ",
  "key31": "2y9tTMwiwV7rPPLjUPuDiXDKdAkt2xHpzNJWkjsM7aS6h6jWjBSbQJcon3NvxtLaCNfAyk2eTLuD8r9s6xMXwDPD",
  "key32": "3u2kri5wfio6ZpquHUFJN6MfGAcjgTPEYheFZ6AWgzzAJeJjqNt1LREtEwQDyjyWg38ARaKpueVnCXDy5SH1QdYp",
  "key33": "2KJRe61RA7giA7fBT6h3QwVhBHF68ueG3BEDcBGfWgFVfMT5A3zR4AAomhd3MzeuuUfivVQQvaua62Dy2XE1mzqi",
  "key34": "4XZA2ckYVkCrpzwTP6snubh6ZeVQdF2gE2HyQU1cBDkE19zuEVyvE7FLsUbyQjE36hMrRuA5Q1J1m7Wx2GZwhYBM",
  "key35": "39diwqkGp2E3tMnvkFZrZARrgnsLjndbXFb4Wpdtb93WR7o5ZxDroE6EXypVDTCxPoewdXLz2rdSqNwKNcZ1VqQT",
  "key36": "5SwWsxsKLC1nQcBneL4zVG4vAVp4hWgcnS2g6cLTGg1fCjTnUWqx9zkGVni2beQ4CwpRcuX25B1zL7Jd7kvZYxdX",
  "key37": "2db8WiQM232c9k67a8QKzVBDS6zfiydscxYvGhdxvUJCAjPa1K5a1faZqZM8Jb62HbjfpDFLQWfftdhYNXRtmkYT",
  "key38": "xswzNAU93L7Q4x3vfriL5ptD8wZ9sq2uUZyayig5bPy2h87EuTfXuThQzs9hATM5MnfWwnLnrVFreUcBhSnAPdD",
  "key39": "23FM6fR3SFuFB7RFQsT8TUJ2uPQLWb5c6epaa7wNz5SfFdkDGYaYaJoKi4Z9zwUmaiTgkLVsRsMvYNisvTYNkJ2K",
  "key40": "3XLhXzHnBJi6ZTqueTuFAu6dhGJCXB81Ec7CLJpVBPqJqs88crERVeDvQFMo66tBWnWRFRVWS2YDxoUFcMQwJsim",
  "key41": "5b96qNkYDzcvwqoSupqeaqBRka6Ji88UcTu1KAxpaJbc9VPAmSeYwqweR4aNcJn2rbWxhn154bVjKdaa4xFzeQX1",
  "key42": "armqPdpeKHwgpf5JXC8HMrVtGPFH3bauj1SQZM9bb1xfKnJqK7MppEvYrSZoNMDCSeFjyJwqNow69N7vsWThYvV",
  "key43": "hLU9zmmgaWfj6QmhoTRjCrm8CVWcAMP3TiiPp6VLbqbavjrpSukVmHMkX9ttVoKHmpoYVg9kYBvxr5tCYJp5hhu",
  "key44": "SwPS4dVAmKvMMVoCZ2ndCBcntCSqTbxjHkoEvFvHGj7jLD1WToRUPnQK7LHJ4YsLhW5foHEEVn2ayKTbCHfVzPn"
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
