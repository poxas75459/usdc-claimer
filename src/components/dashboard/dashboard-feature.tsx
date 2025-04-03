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
    "4uaaKRu71JjHpRm7g3NdCNcXTUThzNtnPnAgGQ2ad9LEjnWNZMGqRVHeNHKbHXSsDLbgcGoHGpgvUCLqgCLCQQTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KoCJDcNyZaW94FVwdbkR1NcCkeWdq7f44nCpGWCvxLQ5J4W4s362kVT3Gzmd7MspomUWDAof7nveJgGqNCwynNQ",
  "key1": "2CBictZriBAJnA41ieJkBGp5E2nFmTnPzPor9AHN2zqQBVMB1jicQJ5nYvyf4okcBnkBZFzLBX2CEH3yyY9jQkfG",
  "key2": "5wdvbHHg2LTWFEUx5uiorQXjr97MD478tQ9FjTtDcbww3z4X6b4nuKdWmEHbcFaHen5ZPrL8fPEggpKDtxuQbC1n",
  "key3": "FENiJXwnVR6YAxEuX9abxma8ea7a2L8e95LpG5i2SPiQ6asdhbSpRZSTeNfGGjrLvDALyEJwyU8hiLpPxXCydni",
  "key4": "qL6vKZdeQ2Fehmzhs64cLmFTXp9gBeA5AwLYJx2CerVTX66seT1ww3rtRHcQf6bFgKYREhj1i9tyzapiaZEFzSj",
  "key5": "51RwvzvkB1LqRJ8jnmyK3xC4y5QWkWHqmVcZJWW5ywNvYgUhRcHNtCX96xDwrkEQ5ysspFt1H5yKMwTq38iwKLiL",
  "key6": "3DXFmvvJpLoyZYp4F9fiAkvmmmCNnxc7X4GBWuWcDFoy8w9CBbNF6gJKmD9mEhKKRHgB1PLChH9ZaMkYQzgbj1tS",
  "key7": "2kN99XsqN7quhT6qxTooLYs42hPzHm4xZCK4KGnhcXjcTFRWw8WTTXiNBivzc9PWAqv5C8ng9ZMBzmpnLfkSenEc",
  "key8": "xuRRZUh4PJuFT5su9xyZAPKF7hDhzV9vch53VJv2EuX5vTtJh97SLVzpS2hKB2Y8qbTYePT8RNURQsdjAgcszJ6",
  "key9": "aGBoEbdFbgU9yQc4UKnrTg2m3frzRebrR5YqmpSq9hVwTLaYtSHWvhMNjKq9qttHuS2odNBW3ysUiDqnjjQZpTQ",
  "key10": "3MyvfgLq6iF6uyaLmmTkN2eaL64SKKpKMMk31h66YQXVm5B87aggbLVpG7QXp7AtLJ79awdcUD46uz4omnyjJdPE",
  "key11": "37jaseDZoRzRC2ygSo1PKJZjbDbnJqdhkkWWAvtjgnimTC2oqhqjBzMmuuuo5zmZydQfnBvXSW8jNcNLsQFU6c6K",
  "key12": "2gSZMnLpgoKJP2tMWBwDfPYZpipRSeq1n7sumYxAAVL7ZtTyh1YznEYkRm1KxJqtaYEDHMHPHq3Uvfzn15x1faqf",
  "key13": "3AKJgh96Uq5HLzU6ZesdUR93bbXGVq73AVvuqRWnCRcZtpAScoXxRQjhYyQPq7wsKEUfeMa4mnmMyJaF15UZBDLW",
  "key14": "3SUmLAYVBP1tT5PwznBiZzjtxtHfqCXwZduSCzXmyR8rXeyw2gVkqWB2QKhyht9nDPRwQBzHjETJEmsRcCqpdvC",
  "key15": "3P54BgGz2pK5gfq6pQgbYFfquMWt5pxgdMVXxypbgbzTVfNtsyK7oGE6j9uT9oCyNfKecLWi4U3U9vr7i131iEPm",
  "key16": "4kKF8xTqNnrcAAtXdji1pTu8JX869xggqGX2Gamf1DHoQJ5aQtHFyy3ehAsKCUxwBwkyzahXKe4yAGjWvHa1C9Uu",
  "key17": "3dXDquZCJ6t46KDc56hhzL3LqXi8hyuL5D1mr5KLRPSWqEYvpkL653gzf317w6RPjysuMB4getCZH6JXk2A1J5kM",
  "key18": "24UDVtdsWaqAkey8Qq54vgE56jyvuhE9QvZC2k3pR58tjZHmbPZgNG8RHRwVa7k79Bk8vFmXTbkPNGoUG8377q8C",
  "key19": "66hF2HK6zWSXf4LdQWfE8EkRUni8ZziEHT8pthmiffKXih1jXDxuxGfM7ts4mHgWF25oaetoBUw6BkenfLAjzcQk",
  "key20": "5ZvaRUyrTFVgPs3ZXpDoxf35cGtiREZfeCZY6seo2eZtxkABsv5evmrXcAcVngGve9sGUfQCmHSnQRAqvcxoiMDo",
  "key21": "3bpNYpdAGirnSroPFSxZE2KdmRHGGSJL3h1L8cmFyQLmaK8vMULUCuj364vpaeMFsCw6TzWxg95BzwXRYV1g3gE2",
  "key22": "3DFXYCBJ2myoNTuFpo54xYNKfYKz2BRJvLMASAPcrTXYFVEdE1aQZUkxqLpjUSv7tYNV3edwmroQCE5kLgy4VQgY",
  "key23": "5rEizgnee7Cz1viM7MfehX9VVQfvHwvybZYUbZPo2iHXDQ6vWtg9fBnRYg9HRVhiNuqN8AznuPGRDVYqHcZZJjHy",
  "key24": "5yJp4noQjLR8NpQZuirrLAenE4m35pJAK9KjSb7fofsdRiufsQQvMemegJKsTYKNoNxEzXq9YD1gpXrCNapYVNLp",
  "key25": "5gbLv1yYSdNg9jjrZtDUpQfU2i2HucpUKPKw5wuddkr6gjuv7x8ZVUG7Va5yc9p5tbx9hp3LW1eftPw9hPqHHxGh",
  "key26": "28eDgVNBqhAPvj9zUCgrpxEEtpvHGYHiu4uJSigoTV5jYrcd6FwyxoZYh71bVBUwNwbEcXsiaS9RhEMsdAaPchBs",
  "key27": "2UXYKk79aJzZi6iKiGMGrNX52PomHnnGtEqwiqZfyQn7SJokdBL1ZGfKL5fpEu4cMQTrFAh42YrS53eYQUArdN7q",
  "key28": "3E1v92uRriq6cUPtJoF2wphQoMxcgNRnhJuJhu6JEew2X2arRV13hT7gK5CpQnuKbRQpEHDYGPNuZwtbmTEcEhxR",
  "key29": "65nCJcrMfwEBJs9JqHffyiYzUkS4XbF4SearQPM17NXjDPzAPoGgN2i6Ek2YrsuiDrnWoUqdDTdJtjRABEfwqroH",
  "key30": "4KmWkUGD2MmFaAzN8ux7SQDkWcDPoCdHQgv12oyWcyHYFoR7aVLrzTSyyCrJf1G6BCELF6Xm3wPtQvdavfYHK2zn",
  "key31": "4W6wLnVAUsCCcqjKmbhZExpVmj7VyNpjeMnpYsn7cKyeUy7unGtfA56o1FYvLJb9oKcYZsMxvqe8ivVH2wBvVWEf",
  "key32": "2n2vnT3s2nkEAvnvZXtUT6VQ45AZxfyH75VL2qkrSXsefPuQAgxQNdHHm5Z6BW8ruaaQz1pr7gFPbe7KyAL1kvpW",
  "key33": "bN17Fx9HPMJxNBHFNW9EfMzFxZ6BrQQgX2qHzDW2njNKGMjkPf1PhHNgKquL8KkxNyEPGeqyAZy71xD34LS1VoX",
  "key34": "YP8ZUxYLQnQQwQcde66f35n84rQMr2yWS5vk4ppLqdX3R2YLn65oqod5fNRZCeL2AGabb8K56EvErgEKLjT9RsU",
  "key35": "5TqkU8jqmkVeJs8CTV5xKd2GVYC3JwmwKyLbLZTddYjWr5o4kEL4rEVr6paBL5SWEfzH9GhHPowsBaLqQHUszFwX",
  "key36": "3XfHgqueukkw2r1Aa3J3o7j1PhFo3W3sAraWVeLhDDkoA9z1o3ymyLhsXeRqRXVAG8xtCCgMZeuPuiohpXomkT8b"
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
