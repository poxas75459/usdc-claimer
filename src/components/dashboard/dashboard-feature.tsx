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
    "5cos8Jz4WjaGaBJEQExXxnGbpPnACLVP7pzGxHdRxJVHRQRHkfUBXvkeowN4ifaJP5mZnmbUE6m9RuJwWvPgrNsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mtPqKQf34wfN4Kko1G8iBqnqA2At7uJ5FnQCKTt3AqauGGYsRWw8dYGPGZNj2nb3wHXFiUfXdNUNFv5AHg7LjiM",
  "key1": "2KPyxD95YHXmeTu9S38mZgXtEz13f32EwAFkudcnTX6b43eLedz4nMuG9YNiLQxMPBF4tEzobVsHbioRbeqsy93J",
  "key2": "3XMXULpFXh1yxisYSfWzjUUw5yyryQVa3VW2rQTwaASn7gcam5SWpoTCAvuYs5XgJuz3FCzpLfwiX2mwroHSc8ZJ",
  "key3": "53JzXCd1XJZp7DPZEAiBdBtmguQQ68BT33FsDt9fj2KWVjev7CxDyKLKrhkr2BidhiKpdUtPq2RRG34n8CdRhAdC",
  "key4": "2jd3V4zBFx1LireyXAmg2KjnwKuccKxm97wzJAbk59xGafS5QJxzcHTzd22ifPPq7UGmtmsas4tG8n3boP1KJSqd",
  "key5": "2dmbYxnZ2kPHWW9Kc9Z8duwREh3fzSsHZVmHTkfnp1iR2S24MmrM1sV5LEdnz96gtkoS8rSz3Bk2vFca8ZfEVbR",
  "key6": "4G9gMPGaXpbNpbRLSR9H7Nub83mHmKg8YSYPX4NYFMKRVChu5peBT6UfpGcoJaNJLAznV2YfZeVKGGm7tS3F7Uhg",
  "key7": "47zU81tVJeDJL3DZ4U6qyLtoJ5f8L6LJ5CJ6q2aAcWK93VEsu2drAhX7JunFFAtJx5peRtTjrT1RDp1oSsUHHmuA",
  "key8": "2faSwWpLvZ3Ab41U3749YS1LwQ4zzKMCztv6n6ZdnAuzDqdLpqVNfYyQsiaEUxVTtaSYUeACVKkwRDeX112MD7JF",
  "key9": "2zu6wx7mj4xkHx789YHjbHWnYeYDp2mk28waYuv9SmehCjvYLbEuabvQya7vdGN2KwtkiFcnfkTpmKP7y467DX5a",
  "key10": "53nQtuV3dMefPP1Mso4ZCc96iLSnS8PiNKb3Hy8QCheuHohAWkrcoitBhTJ4LpHsWNaDxmVo8iWbCQAGqDkHoFGi",
  "key11": "4Uaumk1oN6wVk1GUw9hX5BdG1ikzx1r6PZuJ4qV8QYJDKJsa3NF5NnQ5wxdN9Hc8MYsny4d96YXh3qaGwgDju9ku",
  "key12": "4qFaS5DquzS3Rtrxg1h3qHzuKNipT5ACNfceBXPSzwZuyhxNvcHMtJexk7o6PV4UwfrQi499X9G7LEJ5rTFPTo9i",
  "key13": "2658e3TkKBAFxnJZV1PH2wARCQnc6Ef9DaM5J9QyRbDjdDfRkK7YrybPkj2WeSQDhR9QFqWYpGnZkeoS3pmfDnTd",
  "key14": "25AaNhjvMYuLTsNSazKhaPfCfMmGsPuiSEekJCSUWzKn8HUZpewBst4PFVcTAguG9suUWwNXEboV5ZmRQDDcx9YQ",
  "key15": "xCJSxTFxcjDwZBDC24EXZG8n3oiC8abmR7SZb9Fk7yQLRbk5tZfsiMSbxhqRh44CLUm1C8RoF5DVyyFaAqYnmJT",
  "key16": "39SoPxkk9rV47Zo7VE4Ru1qZet1cuK82uWb9nGPhD6o7LX1BtZ8cZp3uo8VeWthEfhPXzvVhLWNoBZgRCBr5Jjg6",
  "key17": "3CgWxRpQ6FXt4cbf9zFCTuQoYkCeNjACYNsjka7y5uJNj9ePJiYBDqBD5Jn1UNYwzgQxmLNoEHoofUTL4JHJVPiw",
  "key18": "2L8YoYCiQi2Ws8tiCn9vgJ1SADL1ssw1QZHGM5Lk78JVUAZgQnSdoTF1Lawgubr5hjZJkxiFFAvfoMK5moxtzb68",
  "key19": "3LuQm72nGcwM4DPZtXLYi8V1t4BCQZKjjzegjSfDaT18DEFRA6tADXjbUBdA8NN5uuqFFqVs54vw3p7uuXxe4o3A",
  "key20": "5HanoqGVP3zePo5g9R9qjGp7ecgMUgfKvZ6DSnUT8ytndH55QvbgQ5Do5aHmkrpKLCJZr58RvBFhWQ3N9nGvxXBT",
  "key21": "A2bsqfuA9xcf3fUqx7vDPvj6KctKxURKvrvxRc5kNucXXA2mJPdMeDgVrToTbP6MQfC5Hk3RrSHZfgwQs5PndH7",
  "key22": "2BLNC5Rzr1BPMydr7bPigASUmZmrGnHTeg8HGCDmPihbxdkjYZy3vTKtRMeRp4UTNEqgUrccLyfw6ND9tXCqHJwJ",
  "key23": "pfWQbftin8woH6z7Vq7W6PMDsCCuJJtAu3agDnrBbWoiuF6vznPjBNc5od4WmDt7G2JWjruNjwdbx6xRs3Tjspy",
  "key24": "2tsCrFxck3UjFgxD2h3aUfosBQgRLpJXfnjz3gmXJg19zeqPxGhqbRbZYeEB68UPozfAk4YTjLT1q5TYpGqsrTMs",
  "key25": "2u5xAAZ86UFZmWBpZ7YeanaNtFPd2KPwg6VwpNTkhDYaBrexjZXSWAHXExnZ93cXZ85UG9q9KVjwWqfSHL6ef26P",
  "key26": "37UJfaNn4PDmqsRP329mzkp9Y1Ap1XptHssfUUcArT5hGzTRwWZ8wPHfUYfkMir1v3Dn5EMzdCozQ77iR2RJCG8D",
  "key27": "4FsVAt3VUyhBzcpBJtk9KqagPkJDPC39aPkvEfTHGpZXRRx5LXEmQwNUYpFkCpsa3kqvuR3MFQMEhpTFSeBhSSTZ",
  "key28": "3xdhn8kVfRkpst5g7H5Pm5Jr7ohkrHEmMHDVHTUdccn7TKbpAjYSuxDMb4B87nvuo9VD19oyBpbViSHLcnaupCCH",
  "key29": "2s2opW33QDj3gpayiA3XuPcznNo3WNo5tAeJ7UAGynBJj6LQdAMLMmNX3S7ZifCmsqctudcPbwFQZRKhJXF7UQxj",
  "key30": "2YLj3LnWJuSUtfixJZZo7vm55UAG5UvnFdmxFbPW5558aC49FeFxnNVazJLd4qQFFZXg2kA7b2tgzLEVJkBAaRRP",
  "key31": "5YtXAsJ8yNFYcMqjKK6n7VXauzysVqX2e54ZAFqnFmacpYMsjKYXZz74WstWUAX472bo7mHkmCHekPDviqqe1D6o",
  "key32": "ZSD1GCJ8tWzqLzGEDC9WP7JL4t9eJ6GfYsUf2gws34cBJs29vG6HS6ETYm8Fsr6ejAZFM2UwdZCoNKmKWPyJ4dA",
  "key33": "2TgrLbJeMurvEmbZ1VaD5mZx4DvqxNhogmm3uqLktWGiXDmHHEtTn3jCMi7WgTet2cT8B94opWCLBCzMG9BnWv52",
  "key34": "2YB4yPvS9QUdt4e37ZBKJetAfr15eTjJgLXxtp7PncXPEVFCQsJ9fNSh2JBvX76t5fUTd6ZX44PSyKSeNkk3urHt"
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
