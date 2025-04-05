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
    "2LHaMFxSH3wKdLayqxGvXHKm4mLs9nhc5Tgq3hQgczMxyp3yep6B7nsRmggVagUP9PvNfbCAJnB1v34WmDLGpC4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TDeG443ZQeQsdZFebb5wmzT8DxXURJ6sw8a4m64n79f2DV4cppeVEdiYJjCCTvpFnHdvEk9UFu9sQUjygm3HbcK",
  "key1": "4LaoSVEvZnYjr9c3t7nZ7arkxMkBEsSq9b7kaeFdKnJtQjcFArogxvHa4GkfAUpykMJCfqaE2LQwpLNRhxNtnNYp",
  "key2": "5TvwQfnPDQcnpKjGpNJGHYPC788wHD7R3ySZC6is4TbhTzPo3sYL99cDbrsjEabp3L6pjyQ7Z7qaiYFyCkVCM9Lg",
  "key3": "29tqyRDy6wHGEqQsNG4iSDy3rnchEML7aBPu2MppogR2LESoLrsHEWnRszUfvsWR3k3NcmGctC9aETmQE4piNrtU",
  "key4": "3ta71qQy3YaAFurhiQt6oHSuiwsfQ4Nq2wLZhbpTmKFjDgXqvoz4zwWQh8rJ2BeRzeBGFpLyF1BmDA72q7RoEKUe",
  "key5": "3GAnYfZx7M3HeMAtarabXeDJZBXLndvZzbbJQHHyTS2j1YtfgShHojW3HNFCFytT36mJcyp7fu8SmbYrgQHHvGVW",
  "key6": "5hzgvPP9uXJbe8N1wMX9H8TJDbv9qnNcq5HHFtVaGFat7DbPYnQACRqPuEEzCAjDJKRkRLGhRUHa96ZuDKMXUVHh",
  "key7": "5AYJmoduJWA7bF8ZEfZVZs6cHiJvX6bh3rUykTznMwv1gQ67EjyeoEzYX4krv9HnTSQLMh5aDQMtGdmwekWNUVbv",
  "key8": "Zagzjknx8nZ9vJfNZ41qpErJtucrdU6sYCddUmwFaKSkL5pGjQ3PrbFBmVF8JrfgdraM3TQzoh3k1Y3m4jqZoN6",
  "key9": "2NeCBY893k5EHzbEwWiX5SejLA9Vj2Um98bqfwSBJT2sFvsnA8URrLyLFzEtnptoJcjbHYZqpqGnAdxqCcpf8sCf",
  "key10": "5kDNjj5M9NKnbcAmHEf7BNqtMVtnXekF1YfG1bxc5L6X74rTgGz8Dp1XMzvKCKAiCRfnSX7yNqiEEUg7L43D4Us2",
  "key11": "75N5cHn86vgE2arCBwYNSScaQ9WcyXDpxEHinPj8iukMY7CGb6MPzYpFaUPZu7swXjyZJi91dFxSQDr4HiWjoGq",
  "key12": "NDLaGHyRQhMDs7d8UMLv7VX1rxnhzS2woRjJ5V9H2dVhnR5gtudzGpjyY1mtNEHzjXKdpHdzs8izcPLK1yQewYd",
  "key13": "964opXnsLbzXdjXFJR1UiJNkfNAZHSk8f7ovx7UzUoJTEsRwSiNtexsR4cWCm3AS7GbMHxd85xCAqSP1cnryFWs",
  "key14": "p7jE1HQJEo7HpH2599bgGsihH2kEHtTUhMoWn8tVihDTNpNSfDLqszxZfvaPZBXUYuVcV6kPxTux7hwYEBWea3r",
  "key15": "4H8R85GA8gNUCyTN2nLgETtGEyJrmW1ir8XDLJhfD87bRjcVSrTHTeBCTq3CEWJhxSZvRypbxFSYAmswG2rLdeCi",
  "key16": "ryZY843vUgMvnuh32AUhumB2PoixNfTjQDiG4CNQPEgoNTRKEBs5bDfW2GcgpRd24QCdxdx9P3sRnRMcsV2oWzZ",
  "key17": "ptkaL5SUJsnjGVFYMN43WpvLor8qG93v4GpgkamydT1KhQ99HoKta6QR3wbzLHaok6CVmr1MUHPuXh8JjAJyEhN",
  "key18": "eRj6YdcmNyeWLtJbSAknF32ntHVTNuw5NsPca7jzSJPivavTxiMcDL71d4rD4fDjWgaERTynbxEaw3gBieLucWA",
  "key19": "2e3AU5z9UFhWsQdZvFvP1zkijGYnia5aRvN2YoYKi49afKPhyiMWLaXrdETV5Tck38TGoGx2k4HFog8rFowmXvNp",
  "key20": "2pWvMUREu34zUGFhDVtjXJAyAsD7hmEZMEXLoVoqNsoZpKBjy6U7PdziKJWwFX8haSwtJvq6ioixuWEhDxBXEz3c",
  "key21": "4BbDwff5aKhanQLAQDuQhEQ2u2ke28ZqVUGyqMrfojgCqGqKYh6ngBwf5dv3zu6sz62JmeLa4mN5K3xakErz9zae",
  "key22": "4ay933dDFVxAmcu22WUihaSnSV8vvNKkbyb6ycM1AAzC2V3wTY2zyJn7qWMRsVzFHMuSjo8qnzfdoonZZrJBgiw",
  "key23": "3azmQHT2nRTczFuZonK82kUWTZ2XLJJsycKykwg1teS3d1LwSAFMJQpp8cG91zk4trWnfHehmhadfWz6MXP8zNEH",
  "key24": "3J89wyraz4Cwa7piw4wfMU5Y8XrWkQzmrNBNaaApSBg4R5KXsNxc359CazBvojGGVBCoHZYsA6ZG3YEjtC14SHi4",
  "key25": "543he9krELDSwC4fWwJERKYwyUKkaYLAiXipV9zTvbuDxgjy6mpacRf51ZyELgRfSdBv7Ao4SDNo1TW8MHKJYgza",
  "key26": "5JXR5jJMys74eM1mmHWnT6u2d9WBtjV9FBhpHxg934nvqEfFzKtjXJWivpyMAYkxpC8ivQriu1A8viKYSf8VzWWW",
  "key27": "5Wsc9zLvvZ5HXdKQZPeyRLKwPsCfmGTJ5q9iD3ygwCweeBM8EfBtQanePKJUfNKjeJwgPifBgCahb3PLHfBU2uCU",
  "key28": "ZChaLPootCGqFbTGshk3pvrsaN3GvTZ8SXg3pdUzoM6dkHcaNiEgoBaApJD9YgcYeZphVo77ZX8qqsw3czFfeux",
  "key29": "2KDkNWQhdYBBLY7swzfaFBUtvhfikq5ihojQi2FXNqnNRxe1iKzCi9kV2TaCJnKtpcLPwwf49vBDoW6Uew5UHMgb",
  "key30": "5tA6m2JY4zLddCuQ5quS7yzfAa1DbGQu9WqxFzMdtkzsKmaPtJf38ZNrWPoZrvvtbj8uXi9MjkZEfWupC9GVgSqh",
  "key31": "5ZYGdkCfCUoWv4K5Mz8KxybHBfV8PFhT9FVVxwjM6Mmj7VwVZCibMeneDsPEncrGnSLzk7yzmQDkrWuGxFy7KrqF",
  "key32": "YFsntVx74eRqCSscjkTdrPJXi6hFKv4RaWemQpLAHJL2SuNoFmNGCaCvfhZwVFUKCGqZF77MspoVgiZYMcwizVG",
  "key33": "3UgUQcjBbEwK3cuPFmcKFSxziGeFhcHtXPjXvwFcmaXsvnT6ksMsh8dW8tB1eZgAsQiEKc73bv5hh5GEpj2dQxPi",
  "key34": "cGa258WiUea181NtgUZqdfU4wRZcTKzvbXc8iwPakTGtir7jcHNWa7hnjJF4FytbZ7RoSN4eKcQEstAWRU7uaFa",
  "key35": "5VKWhxdYc8biL69RRhWB6q6Mp1mRMkJRFjh4WTSSTNKfiDL8Z9UjL14gELWpCbHzjk2VFdJ9N5FL6wf1yzhMa6pY",
  "key36": "4wsiEAbBe5CaDtqmBVJhpcrJeGQtWgf6NVqj8uNKxLneoEUYUU7TgcN1TS95Vk6mL3ZuvmerEX1SMBRGDVXb8TaY",
  "key37": "f5cFYnh42xQ4a8tLis8a96cj2MbwHECYff98WHg1nXgUBfFezeYDhc8AwNXDncMSgRaXRY7LyJD8qvDMtjWaucX",
  "key38": "2M7pckm1WrA7ATsB2kqeJHF5d1BVGtGyF7NSzzxNiB8B4XwGmtTvkFrZe9KfD5vEsQqTHRrWkZzmDdHgdAwivrRP",
  "key39": "5u5fxRN8nDu9GyMFrjrjSrLQYxbk9hdE2oSgU8hoisQMVfaVAmMwhxaxPgw63W9PGgQ5A2iHzs2KGnpSsB6gGm31",
  "key40": "4UJfB8rqKnQMVxhWCwdLdZ6bY8reD4tMfdFY3gRu2Dj9EynstWoKAk5F8JNE3j4dse9URf3DRXyfperudtU4DvUi",
  "key41": "3ekk4c2cp3nwJvfgSwutbVVimu7w97JSR9XdVvADdP2egg58ZhQvVQLqTcdMbo8b83FKe6AGZKxERTPsKteVMLqP",
  "key42": "hkf8zQ1Hpu8uiNL9dmUZeNWChTdERPrHd3PV2HaJzaSreCnWCRHRPNYmkLRmfNzdyUaz5wefr8bDrLdbAVWMExC",
  "key43": "2En5dZpb5iw6mWvr11p6ohFW9bfz3wfj1ZAaGPy5XJWFpmAoiy7F6j2pYG9NWmdhkdDjLE7yVRrSgsZxWNF5nHYh"
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
