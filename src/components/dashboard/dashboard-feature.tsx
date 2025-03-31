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
    "2g7ZPJQ9BCAaTQHkbWC8Fo9e7QgVHuB6RukNtzUzfQccsmQjm3m6CG2FiVDg9HbyPAqVRjzssprQm4JD7ShXdmQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4miTrjiyKa1VZx6xXm1LxhJH5xqMimeqxkDym7xgn2JUUjJ4tgvqFMNwkm5dtGGy5Frq1MzLDruA1hjqG5dXgtDn",
  "key1": "2CepwVZmSh3AbpGcDbbL8KD7rVJrGBrEp8TnUagBmA4SWURwwG7CP3nNxudhfSGYGcpMvaZYMQSaV7ZX3DLpGH6g",
  "key2": "2X6W6TPws93RypQbLkwkBUQRMbYBbHo2VEFhs7xsFW3ov2hbutQS6fz1nXsfrYNcFKQpiiUdyi4dgUx2Ec4XUwWE",
  "key3": "39iaRJ56ZUbyfGBLx27kHtD7vq3wXwTDwg9dBLvfVPms6eobqqYBTSHdw1tDZjsTkRBiPvAzz9qMERSF7RDy51HP",
  "key4": "2TFkd2oD68CkxUGJrAHbMyT8DJctXFLRCH5UsiXr1U2KtfW3qEzgzU8babYKi26vuFLhDF68MhWbB4LLmaPT7wWE",
  "key5": "59U7pXkEYsRzGtjMsQJq8XDRWyynJ9GjtG2Fkpirx77XqZK2LXZ9nrYHJupnFmppZZGT2ju4uRsfTxXki8UgHBYF",
  "key6": "4CbfYUSSbqUbhiC6mSR8NzKKWeDhkKyhkJk9cW1LyzUmT2JjQrR2gX2abdg5N3LzwVNts4p5PoPfq7nnz9Z8NoFb",
  "key7": "659sQTfgWEcsSEY8qHJQhr8ocLzVT8q22uvGENDAjAPGXcekQ2MCWQ8Hby8yVgekZ4RUjnpHF8obDKm7CeQabZyK",
  "key8": "5oQyEdU8g4JVxAw7zioMSd5r6vgXrXUuago2jgY48nqHnwNqhH66YDPqzzeKnWRLTxLfuaxnZRyMaANGHzedm7rT",
  "key9": "ry9TnrV8QfpDkYDbMjK5hQfSPZGnyMoSeyzPYe7AQf6pFaUcvnebzSf99WAfsdNmNr3nhaCGErdCdjUeLbTfFnL",
  "key10": "oQZPkKcwtWeXhnbH288cj7Ag4KKfgBLZkPYxrCJkvX2tDcmdVZgkwvLYCQsmXNyyvagXmSxNaRrQGbvF7pv2pzh",
  "key11": "z1K4Gxjs5PaYCafCuSKPjjt6gs8hkhrLxq83BDTHkmdkgLsisGbsobFeGpQwbugFRQAhf6Z9nmK7kdEyagoCy6L",
  "key12": "5XnxpUurQRh9pgRKa1yXtPzcGN7F1Z621Hw1dwi69qHShCE7ncGxXdsabtDEgPd5bx3v4VBe6xpqVKAfK1bTUmD9",
  "key13": "3CdgsFjDzVTVgyvJq6BgU2JRMxVwCW1L59spNYY7i4QeDrCk713Het4DxCdRkQNneqzhvujU2WJoVigzG82gYT6E",
  "key14": "3rtuJFH7gHFoXH3fM3EPwt4DtYZHeFGEsxiF9MbmA3QRCBPjEjHQo2Be5chLqr9LLfH4Zfu7BAz7YxMG1jp7sKVL",
  "key15": "4iyrN87Bjjjmx4NzfrPr5PfqapTKMMmX5NcCgtPRmggetCE531u5iwtmeMXNnxdmDtmjNo59DJ7Q7HRfEqLS6mA",
  "key16": "J4WvAzjzWvCcJf9dkH2JK4tm2u9iUJgEE21t3ds9m4Mu5GU1TxTLScSvLAErYXGB2EfTzomkzr7Qzp1Yv8KWKFi",
  "key17": "5wDrUohqwUwfgaWM571P9nN4LuGMyEmUkYsyefiAHJiGpbgezbYaqfj9txcNcT9W6YhqMkzxforEH2Mm7TyynFKn",
  "key18": "4m9AFZ7yzkz1yv6ByU5PyCc2BLjp4FDVGtaLd3ttwG2UPP82krvQQYASt7znQdLXLiKZ41PRt1sZeeij2hjXXAEC",
  "key19": "KdjTESevSnptRssK1w3jcar4njcWJGURoNEtn5ziCq55JxT6h39rD8Tvk4oXG7ZpYjehBokXbu7pYo9LW6Sky8F",
  "key20": "5CCyCoaENu3y5EAJ76mSTLUYQNJN4Dc4DBdCcW1gSUB9gT1c33ADqvomcmsJqbbQ5p8VaVj11kiwXruHRf1kUA1a",
  "key21": "64wwySroQxkTpDvn6JLVRRMKLMsZ7S7ve8qPLYSFZbYJLCTLuvDbUewkrj4VNg7W9Ytc28zixsQ71qsmbq2Qo2be",
  "key22": "28U9HVmy5zYGkTqNuukQPsnbErGkTrMP2w9ChqAMbj2tXS8KD8NQXnK5zNAmHf5Yc4jLZZdCqYusXHVo113UZjsn",
  "key23": "nv88ZRDCYwZEtDZJ4g8Rf1pwvbyQZ7e3GdAj7smqdYWfJ5v56oQn93CpTo6T1RJor6pQtjGQujrcWoSyk1gjRPM",
  "key24": "9FCgNy8RuQD6RMkWi6cPVNKVwVHbyn5S7LqkPx4v3UpZCwLnEAS6FNMMeLYUWZqwgyhuQQXho81uF1VfX5Cj6Bu",
  "key25": "4zeyBzBvQe7v8n3yiGhHutARs8npMkxBMM9cZdxtrXkggXNzHACZy3R3ynMuSmPDfhZ6mWz341kgWkFEf2YxdMJP",
  "key26": "3KJbbphrAFjTKdEcudBAkfwsKKbHRf4jxjZDWXkG2B4vuC4WUjGvv6uRHT63MSmM2Nx3nABPFgBCFNyocjG1oZ6D",
  "key27": "2YfLywF3ayAcez3juhbW7g1p92TAQbjYr8MpFWo6VttsKz9jTcg9bgn5vxamXyb2GskF87bqVuTzNst2X9VsPQtU",
  "key28": "2qbb8Kd615hvduVyZhGGXYVoNjmcLGt7UTWAHndecYhioTPX7V5mFKkhjagf8QRdcoRTxiUPXESqPimDNMQbDT2i",
  "key29": "4dLyxWGWEzWWrymc78CqESQBkU8tqgZK4uun6ftbDx7UzpGbJbxGZJaJbddC6WtoDQTA6W5m7UtAwtoWDjfEZ6eu",
  "key30": "3LTT692jcSaPSuwaBmguyqAXrAtCaaxgtpigz7oG7oyqebikkBpfVS2sPCjZ9TQPFLUc3fgn9BvCtR7VWtYUuufS",
  "key31": "5hVx4QjGwsuaMgcMVUG6Ek1Xh41Fs8xaBtvxnrsC164ufBKEfoMJc6X49m63D8XTPDhuScFKcu2cWsRn1yNcE3nb",
  "key32": "3f4pCJ1FVLAnD1Qnpzw3qja7qxkCTm4rPYiFJwoMXZBeDvj2t5Ki3iT4E2NydHopqvMo7vaR2SPDuihFJnKSw6CF",
  "key33": "63hGj9ESQo82FvvHhLrYRn7ndoVxe8JLhWezFqPMQ1aiUF2bhntPmpKqF7hrCPnpfXXV7Kvqffo8Qmaf1wYxXBaG",
  "key34": "zkDdeePM6xzJqwdLcfVnw7ZanBUdshdCvSKmTyPqtfcF995ZxEyVQtiyZuewpRkNT6ZrFqD3YB4JumEt6FNcF1c",
  "key35": "3KTxfUhpJKJvfE9A3JuevE95eEauY7rytmH5MyewvjSqzpZjjNjDTQRgCfjinV47VkVej8Mr52PwH8bNP41VKQEv",
  "key36": "3VLAtnzeusFDh5CS7cGWx5VWGGRoNnpe6ewW7kdUZ3NusnpfhFS8Fi74khfDAmFoUJkk7PBxY5vKi6dQr7VKrbvq",
  "key37": "3jjzZZe9dzGTL6xAwCYHDGCMN5waXq9AKCqkrcwwGddTfCyNjuPxqDmLBhNmjo4NDuK56fWUEGJJ2QQD8pxGe9sf",
  "key38": "56QvGnxkxcMQU93kojRMiWgjxtLTyVD51fkFSeZNeEXVuaXAS8N8GUUrNV6Hi3qBvTsNwoh8W2urJ8ZAeoFG8d7f",
  "key39": "3kWRonJbnu8ok5NJmzpgALkTjsq7qhTJyi8uZWCZAhssvez51xiS6TFp8HPq5CnPBrwa8qqoW8A4WS9tPhJYe34j",
  "key40": "3uvLyyZrjfGwUw5nSYzPRYhZJLMQfvjjogza1fQnxQ46f2rY47Wtd5mBRP7adKGFnnHyQv6njA6jrRRevhQ5AS9e",
  "key41": "5WfctfhWDxAyaFNedmM18truTsRi2MXdZLcrwdTdsBTMjt3jGU42maPcABW1mexf7gGuWGJYnDCFBCVAvbzhaSNL",
  "key42": "zZn64vsC14BBbGg41GcfQW4hSQsyw1o59J1XjQxBjbdWm1hraXrZ3zveuqm4btM2fa7NQzaMHbaAUmeXnx8WGUb",
  "key43": "5GjBnDVcW567c7iXh2v47sd2mQswwaDaTuA9A7V3abgVj4cY1bj4qfUmj3npjRoF7eovA1fcqoSKzsAhLCXU6xhb",
  "key44": "2ovqcLqrabmPkj3naSsncXukzMG4RCQHxBdLoEb367JqA5UdwHDNJQiVEUboeaoZiEspUAuLniZBsiAB9NiCCntA",
  "key45": "41zVGeFz5sk2AhtBX9vj3rX1vVrZBC94rKPZMAQhTP9gd9UFQZVf8izcxqBzyH48qhnqdS6A4oFCgrvY2aaGrSBg",
  "key46": "3sfySukysHjRK5e5K6M35U8m6smzKKqN32cnpMQxXpH9vjvz8E4xMnNYbu51QY8QBbu9zyEuiqUS2DH9pqbyYF7b",
  "key47": "3Cgkun6BX9s7EDvL61u3JzaPcFzxGdgJvQ1qA3a6uYgJccjB98uEEzLRxvkKiC2g8VPbeMQq4K3RJ1qUBmAFYNE9"
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
