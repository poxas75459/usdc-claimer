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
    "5o7jaECfvG8J82QswY2U9sTxzPTduHkxu2G97h9LLMRVDf1JaVXj5FQLAYLspZHkNHfyuHy4xcTy4mqPBRaJSq1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T5Q1S1BeJTKvSHWYowrG6WC4wicoMw6oMYKE5H5EAFJpaNWhAJodRvXNZdvPwFDFkTeTpU1iz1sJDUWYyv8jZ9N",
  "key1": "sFC8uwtAXkUh2RRq5QvPZKdwPjKGdubT5zCJm2i4f6d3ptcAP3DdaVKtsRpCjRbE8MnheaLGgU3edAnMU4mZdAA",
  "key2": "4pbqLVZCGqo6JWwKN9dbFFbgg5gkGaNzB9jGZsdWG3BMKQWCcuyDwba4qJBP3BNKgWHWU4h1apHM3CFRS2nPqQj8",
  "key3": "36nBWWdN9rZrtt1PrFmXtKYHduzXZbakzMRBwdsgwAHK9xCDn2SaCpoNSchKQGeEFV3rdeZazBxtDKZkzoD6fQi1",
  "key4": "5966oeSGxToDmegyPkrK5hR4P8TsGbvfuLxpdmQCUB2KxF9afM2sawUzYmnC7rw3YF3W1XtQeVqwLjn9iVDzDvVP",
  "key5": "WmoeEaVrhQdt9okwd9G5qvPPf7Wj5TJkXLb5Le3fWLSY5Lg3TmAJ685SKhsWdQWZXYgtpVYbE5qi2kD9yiNYFyH",
  "key6": "28aXD3Mp6VfWbpQiPX2ZrMRjqjpavpt88DMYNH9aYGmm5Eh18epXcN1XHdPnTJLecFxKyGV2pXDbBp2WvLkd9Ptz",
  "key7": "3r4ikMnqtxrDiT5TZvBReWz1bwuw2bpu2eMd9cPeYJfRDNEoM7o9GDYS8XrECWvNQBoV8puinDujESFW3GU9bXWb",
  "key8": "5Pawd81bKLhtUvcDW9sDhpzSTMUhJD751WiPjT9RZsipk3KmEiNwibQHyWZGHKJmeFnKpK5onM6uFDyamPA2syPG",
  "key9": "HGk6cvegM1GXDXUojCzSGfWXSJsFixTeGFHSUkQG1PnzxSiGvqCSWtwQ3vruivgqWkE5LdgHLDotBozRUude4NV",
  "key10": "2aaci86D7b4PH5TeWFtevvTJDkSH3R2iZ3cHvtK8ERooZqDicoxfYyvpDdNKuaqpcbePVwHEcj9RDpxvbYqkBpQ6",
  "key11": "3qJJhGdGnfBVKER48KxrYLdd7E6jKHeqiAC4YC5n598fWnVCi4TfyCSxhnxdsBoxkuLmGebGhjyh3b3VDuxcXTrH",
  "key12": "4ey5bs7HzHRvsDFLzKLnHErBXwT3NdesrnbVuHKkByuqzhCGi7ggcBGLmS8RVPb6v3LiZV4pgTgr2Va6YWCSsdiH",
  "key13": "4Eoi6d6harbKVGpHVKiX21oQB2c8GurY8iibgrCZdzoWKinnA8a2ot84FVuBbbbupXzv25Y31xmh8vmQ3M9AWoyW",
  "key14": "nK5hou1VCKcjVYKGpbTKaYKFd7kdiK4PYV6WYQhK6GH8k1hgGSJsrPm9xEBaYb4fLD26Nzx2bwsJ6yFA1ija1HL",
  "key15": "4rNmWmB4v4Pf1ndqJ2mydQN84VBB7FkxHLR2QYyqtCekSgiqKKTLaQG3xeXcmu3fxFMMSAZEF3sk1DBNYCieyiCT",
  "key16": "63Zs8f9oDmfbuSyL5jnqxV8BBSXkVUGbGhTzxdTmGbY2Ys3tLQszavApbvA2DWaCzvTVqc7wBSWgcVBeakfkfdAG",
  "key17": "9efz8mszjcyTyDfPb3ARAv2Nh9KPGfob5sEDUUx3sZ7Sv7987TpwMaYbzNyuj9VLBsDT5K7bpRocSRCY7iwqcec",
  "key18": "5b6hLW3AvaZGpcmhgGHt7GvfApY3EZ1Jo6zNSj33gzxUqPotMztZb1k5wDWjpLy4kkgMKwNpuMDtacib6Rhj9RST",
  "key19": "4VSMfva5gfVsw4tqJJBJJn4vCyASvMKN3XtXEzwXHi17QjyRxUbcvEanegnCH8aFAu6prHdGVzcj79xMNm5Kk6wJ",
  "key20": "5zCZ689n95YrEJUpe3ntaTaQMaVhRgFJF4p3FtJbJuYdq8HiqhYf1eHqtnM81S9ehjdYCo7ETL4TeQed7zE7m6Ro",
  "key21": "3ZAKvwW6eP2oaK3x2neNY6CKPsHxzHDhreSBRFZvba5REUncR9YEED9LNYYfsMJdToqgKtfJAefyQJACjNNwAku4",
  "key22": "4P3YLRKAmy6Rxz5ewzsyokGkiXei2BojKLK9oXoCjN2JKh6eeFigGT2N4cfgqcxSJfRrX3zc8HFYEoDrRwwpdgQo",
  "key23": "5X1yjR72skqoWG6474hDNLeYXFkoNWKcbPdutS7iv7yEoS8xKXGoLjKH87NGNZvZ6NUgfdtGhDFyKvD7GvtcvJTv",
  "key24": "3ZXBoxU8B6sy7bdmQMEsQiziXbBgCkCLkncm32b3k3Ub6gY2oUfJb12CbtqPmSfZthtU9iTRVkxFSWTmHgvuEKiz",
  "key25": "2So5o9eioHuAg55QbJW5H2uazyNN3JuwbWr5Axq1qkjf3x7PUtQFmk3nBmxmG2RYZ9Ze8eNyktyj8SqFC6u5ezfV",
  "key26": "3sUg98Fu7u37kEGc1s2sgKLJGv6sTTL7tMbhVukGkm2b1hmMJABH3F2s83FLdPeDj4USjpijwq2n5mEcSDFmjt8U",
  "key27": "grP9JCXGRM9Lg8tfR1CAKPmyggioDMHCfUiHr1sjLcfV5SmJmfwiXCzP78J3Xxay4VHxZyVx5E2oLSAqrDGXgiD",
  "key28": "66YeXVKGS2TvG4iXRxVBnBJRc56bMV8hbBdDGSvoQPkmUfqXRx6Aup2ADF25YoU8PbzEnFMMDJBN4EZGpAfijYjo",
  "key29": "44acth62PnZoXkLtBfmTqM7nyFNBuzDFGGcFjDk3UZdDAekyzLw4Vy8jb9FWevPzftkEE6BaB9tW18X7kyEcVvWX",
  "key30": "PTTVHxG94Bm56nHhq2mHWSDoF4atEcJtBdagzf5njxn4Cnw5e2WoxXuw9mZmK7M1UH8Y8FAgPZ8kiipSyvUM4cg",
  "key31": "42fhASwNSzYPpgzqKfQbieLwbxmbBZ1RZd4QK8KEdeDEEETaJgDNTq9EQqVfugT4ZkEiPn2N2G9V3DEA7WipA4v3",
  "key32": "our5abXhkr6apWwCB2BJ8En6tgqZE3MV6FbeJhNxJKQeABEu2yRonZ1CDYBDX2NUgbm4QNQrULZSd8DThbPRiMT",
  "key33": "4H7fWwd3R41HcokX2DYhzBUeNAKvsqMZHzHd9L4auZgU1M7n3i9Qt6Q6rJg3aQujyNJM3zEozm1getAT2iFB6U97",
  "key34": "5ZPvz65WiWyvKGMCYkjYXMs3EEFqPtRyDvJL8CSyfS9jWVWxuMcr1WLbXengonGwEgjZbVpPpiJYTEXcxbSCiJcm",
  "key35": "1aCJbD4C1cTh7SgTVgpux7KXUrFNfwfg4iuEhWoHV8BqBHzFjPxNxgu3J5Qp7CWvyFgkzVDpwWUDKfEfScCe32D",
  "key36": "5yMbtGrsiYWXdsa5vm9FQJoSzHmoppw5tQNjLzLzCGxW6757eaQpiCMT5rYtUL2Zf4ynNAnGkANYG85fU99JuEJd",
  "key37": "ZopDfLwMyFZSd6Vgj7YbkhjSJTi8GDDkLB4gHfqkvfh5wA3JHyFWRTVFMKfnjd7Ws35h74witobLQpJZWfdra9r",
  "key38": "5wQaKjdXqSPRBn6RnA8eoZRb7ozoXdXjvXxxZuMiSMW8SGjtnW2ugqYVB7P44zDSgoh4MgLCcLAHp1fpiSe6wx8y",
  "key39": "4NQLT2zbUnVvJKA3JSWoei7CQWpuzz5T3U6XBtYrRDv79tLaAaH2s2LrFYv64zW6C8ZFU9D3C1PyT58ZpnXrh1e3",
  "key40": "37pwtprHFpi5XvcgnQ1aNFHHfHyJhVgb78tFzHXv5DCRazSS5g6nMF88LQjBHJpex12Zjyf8ByCUyFTMoTPa2yWq",
  "key41": "2Y7wuDYq93uBzgpsFYYAkaZKp5kRBuaMsda9kexS3hk6dsvWyG4roghPGsq1ybfWeWEFrtEBvhxcuMWwYddbH4Kf",
  "key42": "28SBcYESDdYv8GWwdtgBUjXdrPv6zv8A79aNaFAVAJWX9wxwRh1ptTCn8zN3Nhao69AJtRSr2Duyd1iG5hff1Jqs",
  "key43": "MrpjQt4b98TJ7QJaAyeirMvv37y7xpGUhbkd4KVn37pR2zAYNtS8CReT6iHLazBF84Aqt7kz7TEgBWxKSSXqmZ2",
  "key44": "5USJH1vrMhsKBbuvKEy7TtXrfnYhx6Vc4y1ugMjjBquqWDfMq4Eo6n4tC9rU32AN5tNMtLSgSye9RzK4MaircvYJ",
  "key45": "4rCmsiwfNEG8PfAjemd3eP4ZG6vtDZYsXJsVihx4ZDhL3Zf8eZSg8r7mvJpUjzwTqJy7vn8FNaLaDucmFHtD1ert",
  "key46": "3v4tuF1gL4YEsLAEZA3xhWYQKXani49p7HaCWke3rCWYzU1dgEXLVT2xuVx5gXobccV6yT5Ytjr1f5LVV3oKnJzt"
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
