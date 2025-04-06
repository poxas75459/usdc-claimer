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
    "5VjKLfE15uYyttSXQ67ENdQKhcbgfPYg9JtFg6qfFa2JhzRtkKmiyJdUfLiE5zF5WnnB5ZDWnk9BBNAziEa7L9yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMA6FC37ZBLJP7eYK9k9yTDFoe8TD9tsNTNbpSH8gjPF9V3QT93M6UhAJEy7Lq8mBwTB9VzgxDqQHG8CgvJQsM9",
  "key1": "44e3oHyYSCRBMeMePhdAjYT84qumophEgE8ZxLd8q4EYoBZXAvR5kAmaRiq5HpuxE9jGDE2bBGVY3TqkKaSfKoqF",
  "key2": "2A6e3PVv1eR4nUwim1ckegS2D3Emn7Q2syWG9Us9JxYQjwpacKT5fyfn5Cx1UL15BXaLCaZsdnZGkrLDWHQD9n1P",
  "key3": "5UyyrvXS5cAz4LNViXVa8caALoosQxvLjHfTKsehcVgmyyyAWwjSqUh1tNSLima5myE5vEHMqFjgfzqYYbnXUsrn",
  "key4": "3MADe8DRz7tqSRZJk999KDU88XrXQTAAoYDQV7ZnLExJ8QMuuprS8KPHtFmZrn7sv63vvxT6iJYFGbZfiu5J4BaM",
  "key5": "5Fr5v7FfJgDmVgFHdrusp5BeepSQF5amjLWfmdJZQ6AgswyC9ziyQEqFxwAjY8ibeikQRnTFboZioLQhPH52Zm9Q",
  "key6": "rPEjnwGG5M5TaxiqvxYtsXXszCdN7W7nZgFZ2u4gdebxz7ciSskS4XVrbv6qhFwrhY7m9SVqJTkhLqxh1cZZbPy",
  "key7": "2txqS99C6zLQpLqs9AWYVv7EWZKiDojZSFbM4EGNwEg2t5ExLmJ7wNtBTfoCzhmiwE44kLz8YjFGX4a3rd9ZSrEg",
  "key8": "3iTteuWkueHFAGLuQrkSd6TwKHCPPZGQzCfLLkJQonJu5WZAqnskGJ5tEDoJRq4bhbnZv3wDsW62rHRDediKGWHR",
  "key9": "2JBEzD9D9NEiaju4TekUFfm75UzL3EtmFyykyYCX5GwemKy8ErdrAhxLdX6TQYGgCmEYEpSFRRSkZitb8bLKytLd",
  "key10": "5V8F67Bj9TXeQXiegNQ8LPqyJP8q47xCcEVNcyGagt2zyGr6YqP7PTum8wsvbaExrGjNQT33Pw7qatYjkAHDAVjN",
  "key11": "883w4GyiSMo6eEaAVp1JMKynhWeqyGDMrsNmCxXmhvM41EXYtFa3mjhmpEEcxp6Wk1JkwEAo3f2aACAn1Qxdtur",
  "key12": "3FbuhSY48yLYnNpT84Y7X1UBm4K3dL6LtmXwJqni1fESou1hc7EytDZtyUNrrHHajSTfGHVaYdNVeBvN643G214c",
  "key13": "3CoAXT1LSc1AZeqZ7W6xDzK1AV1D8jxPsbgqhDqkzCYdSUHMEMKgZWuzHy64rBJ45hmjmumBKaMvVMGbMmLu3xKc",
  "key14": "2fHMaV4twLiaYhznUNneJGsKU8g1VGLP7FuGAjWzCiX3ArVpmVj3UiDuZWtLXQFr6wKQvNzLekb1ktBpS3JNTMRB",
  "key15": "3yoC1NN7E89LL3WidFoLznTVd7SzZSqA8z8Jcm4LN8y4EEiBKbcEPREgF1hba5QidEdYho7mHpdnHHDorysdz6MT",
  "key16": "ZRvuHDJbmj6BbiFc5B22pWRq3f8NNBv69JbXfLKvxv7M5RjWzDWUxVZL29N5LMbwfxrTiS38RHsvib3Kg8oSbo2",
  "key17": "2sMV7MQJFTHdP82YjPozA77qj5iBXXY8AN3tj8Bew9TqLsU3zcciwEUrSTbYmoGQ5bSKufGzZxpgH7bci1CatPAE",
  "key18": "5VR7PH9nP21yDUQFsmKkJbAkVk9e8jGKowmUM6TnSjF4PKnMowp3k6HEGuLKQpH1nkBdmSyHgfU9EeTJyq6aoHCo",
  "key19": "4o58BmSWZyD81w6vs4cta4vbKtTMvBFsvhVH9BS5XgcgkeD76PqJAwpKsvGA5DdV1a1kUSixJBPCkjYV3jkapqdC",
  "key20": "2PN72KrEdgNM1HQ7sUyhPAENfm18qh83uoczMJv8eYgKTMCmfDnoR77o63TL4bM73YnNFXVR65NntcJgGuXdqFaC",
  "key21": "2XovmJF88RiqzxRzEy2A5vroFaToBNqcPjTiynEAN8Suh6W25YUx7FUSGATF95Ldc2gNQkjftiG5QJfpmCyB6KXp",
  "key22": "2YjF5tBbVF9mQy9XZzy5AH7X7vM66pLPiCkL9PFvCm6nAjirXMtdWcruo11SM9BvZXQmVvM5YKdvw8iJWbTXeoHg",
  "key23": "5SiLdNTZcTDm7HQUtoTZ1ZZMvkMGzwtxLkjx87qn7fEcre3LCtC1UiC1JEBtj6paUwpwSLQjGqA229nL3WUbuuCE",
  "key24": "4235Bv7ojNb8SCR1gyL2HeGQXLtoVH22rCmrivGszfCnM8AGsTpnbmC2MTinKDBgpo4V4ETbijxq26ABQ2W2byjb",
  "key25": "3wWV1hyBip8P7K4BbAk63oMv8c4sc4FTXmfWmbZYAvv9fb3h7xUA3NiY33g3bt1q78684ui96SPVGS4KFyogo3Rw",
  "key26": "42HQL5e1CHRJPTAWz8iAZWc3xvrgcK5R5vsWvsNNKYKeo8XhM6H6QmqJRFT9y3DP2c4w5xye6zrvPkh5j4MiygaN",
  "key27": "4Se9UMaA1bh7YBZLX8EcvTFu9wU6WQTscFyBVzTEqEPMGXvkKfuow99Kb2uPm7GhqUMMYSpZNFxLUjgGRuM65Hao",
  "key28": "TQHUsbhUuxLnDcjxuGRTdNo4Z1CyfB1e1ucuJa4UWdFpbuVQbqs9GRXFkqpWKvpmwrvm4uv7akPrehx7S82x5cW",
  "key29": "3CPmwpYSwj6bEE9a9zqVpDPCsmBYKeku79UoNq4VZwY5jLaGxgxGS9NPHw32fpkW8AwRZ5fo23T4ZV7nFng4LoN8",
  "key30": "54hr7d9pN8y7Ans993cJ5nsY36zaG87YED19b5FukwrDiHqyZvLuq6uQdyg2WiVPKic5cLSkec3nzQTrLU8j4EDf",
  "key31": "kvZZzMggcBQEDP6vuS99umydG69uWVC7VbJzo5zJWTY7MBYxStzAze4HtAhNDGDkFddhADzNF962xtYPmhTvbiS",
  "key32": "4AVc4bpFVHoNPsqovEFjg2z6kGkG7mN4Z5d7D1iwRfVcNHQSUu7mzA8K2PcyxD43HiN2hCvjBizkwEHt2kuS9ph6",
  "key33": "5BrZ6k8AW8JE1UFcj15cE6VVrHBgY38xVyX7c5xA8c1X7woNVg6u5ffwMDmsoHBbPRY29DYEqMhxSXcW3dzu9fDN",
  "key34": "3amzb2VoekKQEvMrY2LKFZZcRPtJb2MNcfT78Pn8RPTbJBRFjeoXZCE42ifraVQvrp6dbR2Sm2arJ2Vs7RoVGLmG",
  "key35": "56eJy1yXTSND9YVhV2Eae4LtDPfZhE3znDjyRqVLqtcUN1iirj19v5YwT2iiovt7xrXq1b4CLkMd81NctCcPqgDt",
  "key36": "5woyZ8xxA4sZwTZ5UcA1Mo5iWYpAuoiDGt413yiKJv9SzERW8ypC6oBGWZHNQJAWNPRnxf5oeg2WMNkTRX2WmFzR",
  "key37": "4XHqzrbYNKKsCEwcFWcFaQZdE6bVpF2jvE2wobdVm4RfdQqtSDV8os51hMyzKVfCN9oinntLikxXMnyBz2CzGs9e",
  "key38": "671Hv434bv3Xu14nUwahc4ppedXui6P1rvujXAni1SzDZ74KTGwhK8FjvvwCKXQn98NJTZ5D5PpXKxNu1si26WxK",
  "key39": "g8omGAKRP8wgxa7r4xHACoU7CD5Eg1r4Ki46fmMzHQshQ8F4wHi5J3fDrU5B2GKxbdD9XzMNfhB8Daj7iLGDAxq",
  "key40": "4dqMaTiNgEdPQUp6RvXGejH4tYP19VMXpzyibdbFeezoXSJFV19ScBtjU7x3FoAuDd98VJakDTMcb1vYTjbX99n3",
  "key41": "3bQP1NF2eHB2DcNiuEoNAa8mNcvHqnGr9RrZm8a9WUNpPGheRyZfzGW4skhNqHUqZMEPne11bo621soZ7XXQ1aKL",
  "key42": "54GNXdv9zmytnjrvbZjc4gwkK9TDCKpDRZUjeNs8uDT5tdogPrFRdJiLR4DQbRXGgq5dGprPWc41sRc43YiScDH6",
  "key43": "2fCAEoPbH5sSviQ3ftmyotJJF4w58g7UcuLSomQsfy531vMF1smMBx9CeeWxX7bwmheakVZ6Zh3BaQrdF66QFQt6",
  "key44": "5VyHZ5gqVV9ybfiSC7DNm5f1D7ChEQfKasY3yaWAoPdWCXhFssNBW2ySSNejQf1xNJWUjFzYL4ShMYoGooiGBvE2",
  "key45": "2tZRsdAYb97JL3YLDnyfS3qyKqrkb4uruqtq79LggPQ6F5eMqkWvBdgbEzNnJWN5xJzYzQ2AiCy4aQoNWM2MaT4o"
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
