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
    "41MHU8fCFuADToHqEGsyu9BGNXYsmPEhY9yCh6Sjj5kGzD2Vu2dsJW96ZAuuyygEx2dYYJ3HQk2ARSNT59SyFcUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPdAThZGdfzqfntqajiiFU42Vh5jBK68Lc3797989vTyLoiqVeLcgnnWTqoteXee2m97qtZxAMCjuTVrpPyPKVG",
  "key1": "5E3uEHwLq4rtZFzCedmebRimNuSEiMsV1dCtLJ7vVbUcU1mDKybW9o77qM8UfAx93MiGDjuiQ2HgLiMBxKorBA5E",
  "key2": "4Dofhggr42M3FF5dRwNkwYZTJnB4cKBU1mmfWaXymZGmT9i9Et4dppJ1EwSsFiofw17PVtmPVmidDjgSb6xsBnf1",
  "key3": "UuVKsyqvqWgyYnv23nQsVVe7zuQz3cmmykJKXwPF2bBadA2FQQXSxTZCsHXRkhf8PSzdBrKzewp6nmXfAsYHHGs",
  "key4": "5EDcFk75Sio116uyeBLY2L2g9e9hKjrG2rxkADw6CBaNnfUsdkB6Gc9R1u67YDFKmcaV4XSkZD4f2mDXQJ4MpRxr",
  "key5": "KtV9RzkkTaHJU3uwDj6KVQCJwmSbLDxJpeyz4Tgaj4XMNuaK1hwVuCmub4Pkp6npUu5bv4jVnAuXh5VoFdCDPkv",
  "key6": "63CGx6cFaL9RqpGdnpyJ6D4CXbWyo3NjashGJn7T4hrPJBya4Fv3opmFBfAVpuyf2BrgTFSrSiPeYwud5hkrh5j6",
  "key7": "5593iFB9qRbzJ13YepCBKnJFzRVQG246kQdezew99LPKeNhvx3564BWv5omh71sJgNiucVPemg6KG9bE8Eo6zxEu",
  "key8": "2CMRxeF6SF2K5zBY64PMa4DsrcbDMfY1cz9v4nYFvevujcz4c9podHmTFh6ZibZFLTkpx5uHDiD8BE9FAsTyT9a4",
  "key9": "2vYjCHYQYiBVhb6aHuwxnxw1NCuh6nPjEKy9MxpyhLNQrxB4U9x9j7bXjYGKNDvevrEPyrC8mttogZqbMxMeWzuX",
  "key10": "3Gti1grDK1RENWnaoxRzsQ2d69XvBVh1Q7e8Wn6JxhXJvkVrRwxrhG6XELgpMM1adURxmL6AS9TER7FkNgbyneq4",
  "key11": "2H1GZPCkgg5Kozg3SnD6RvyD1ctR59GQFxgeudDqmyhnvS9BUjewEbmgNTtv8MnoZUV9dsiPaK9usERQai49UCvT",
  "key12": "pn215GdHZ961Lobo9mLsAPU2s6Wha1vezYzmctkkck8DjwVvZcWh9F1daMFN4EBLkXGq1nehTkwE4ADXZHo7hgj",
  "key13": "PnTZAk5X9ga87dXk95JuZNrYUZLJUYtxrPz4gGH2wo6qxFNeGAJEk6rsc8bExbJA8amhf5RMxeoiJ8RqMfBD549",
  "key14": "2UXAbwu8pAJMDHabm3LsML4aXBQTpYWAceEvJCnSgpssKtuFe74fyC44HAj7p7C6oge8vTD7q6q8tTuu9YmzZKa1",
  "key15": "32jUXbJiUEZ5Qj8haaQPeu7cEG6ZQ7CNKGrSJur58v5pyuouYWtQvoUnHnogmjBkfKM6EWj3porq9GhhcNGhC4ci",
  "key16": "58R23NihAPNqNQqi3s8dok1DjZ6P6qVbdJMVZ6cxbZKGkTb7jQzp4simzJeABGHSi267P4XQPEZpPGcUyS6Qmpg9",
  "key17": "3BURphknYy5kEaKYsgemze9z2f3S1zwwYiUFJsQgaxsviJtTd3Y7RFJJeK2jadnKJQtMjCMdkR3SCZkxECXHnVfg",
  "key18": "2iWTzkjR3UZ6ECBpBPjBR7qXKNiPKsezuWEZaYDpLKtM3ZWFGmzxbm8WMQPpiKR1n7PxVb8gVm22PXpdL3iARoV1",
  "key19": "4PkJiwHD4V3o2QMAXZQnKDd3z9MTaSBxa1jBqDfErrma3eVxrkxLEWjHkVQjtmjCGMefMaxYUW5bNkqnxVUfpAwi",
  "key20": "43mNauHEeACkMt8ZYr7BkJUpp2fYA1hZ43eNuqoPU6wQDHHRHzMd3cMJfGaJrm36n6SeRWJiwNU2KcTg48notc8q",
  "key21": "5fqpRL9AQPwiKnt9JztNm3GUu7P3Hpw3V1JpeXBrx8nxDKbhjvE1gKcpBeJHzjvnp4DPk2U7MQyA1xmwmNmjz9tx",
  "key22": "k9kU6pfSLcAfU7cqdQGa3Gus3kdGWfc2DQ5qjYccp2FeJAqKF1XFUKdZj8a5Qz1CgmRmpcubW4CsDSwK8bdwVC7",
  "key23": "5hiw4ndWFFyzHLpqzStomaMVKrxguT3DVEFMVJ22C9EGHtXb2sDtcNDGi5aw2hBv67SwUvsbqMyiY8EVLzV67goX",
  "key24": "635b4fqSMgJMZ2BXrBgYvUhTXWuwqMX5rb5j1y93uh4MNjpRcbmy4CDenGedSXGzKKqbcJKTd5ody4ej8VkU36PR",
  "key25": "543X6DymrthNShJfdmEHXvyxoPXCWLkFM3Dq6jgeoNjQTF9NN849wjuDW1orNXbFy9Zg4ikExmYP91PpcDjs5Kcp",
  "key26": "4ovSzbdqp37fpH2hxLsrJ4o5Pqj1Ev9meLmps7K9PSt6KsjCNM21FnSzCPHxpHwCUi2ezVJk281hNcdSyg9SEemd",
  "key27": "53TLdpGkvMqUuHcmWFSo55dEKGLhmmJxrvb2rYgXJWtUBRN6wmB3UL9Kf8T7CuekQ5p1t7YRnReQB3LN7HZ52tS6",
  "key28": "5A3LZCYnmTzRehTyGRu9QQfLxnSAFZrDnD9y9DaPcP3mY2eaHJwu63RmfTMpPBTv4VvRtajVz8Ye2EPgBu96RzjM",
  "key29": "TpfVApFkioTQweB6S3SwNgShoTa7QFN67ZDbJy5bqimTpgdXAABVj7d4ujmRgtbuSiWjNc9W2hoC1ESRFfLaXsg",
  "key30": "4gPrP5DCRry3eF4VavXpWdbB2Z7YyafZJsQ1u3RokD9U9VwHZJjk5pPcc2EDvzJGSjM773nLGKkGaxu7or7KMhJb",
  "key31": "q67dCAXQkmFaC5Y1ktz26P4qLFiEYUmcmAgZqFGauA7FneoWYZzy2jwV2XMYzN8gvKkwncL6ai4rW6Q47cADsc9",
  "key32": "64jMuP6WWx75wpMLXxeJjkJJgEkmTt1mgHpYYVGXKEq5L7MpigZU5Wcyk4jfGtUriHGkxMgFkBrJ8ER19BkcxpN4",
  "key33": "2BRg62YrWhX8iYpU2b8QjbM8HZTvn4fP4gEP14mcsSJmBEv9WPAVTcUhdT9voukjaWfRUPDAhLX7L1gWvfeDoymM",
  "key34": "5SqjtGBcqx7MiF7tTUsuWbGEjoRqrkCrxoeQMeKszMYL4CaM4YMyJ5KhYsYPFFsepuvfnKYHoAh3G45ZaWvKtVXw",
  "key35": "5EAe2ouxjWYYydnxRpFPVZNv1599uGcpLauyPkC23uWVU4LQWd3Khr9gYZG1AzJBJ7DDY4dsF94n9c8qRp4ivTeE",
  "key36": "2YhKq71W51KVP5otUDyiFao7Gtdu3CbbVQCjgzzD6hsUJDuvGCScdkUU49J1pCcEXtfk4XqTG8o5Xg1NNkifhnNE",
  "key37": "4PH1d8fzkTSjq2rsULL8qcUn5zrzcQ6d7dbht1aKBXTi4WUDtSZEaaaCuFGCspygutwU5XsLeoW85McP2hZF7kkb",
  "key38": "2KN6GNrem31inYnorRLHdAeVkyX6ziugtqgd7o8WVbdWNDjgAqNfcCncmQFp4Pjs8hvCrNKGyS5XUVo2hHJ49ttY",
  "key39": "2LbCyuzj4Du5m4s8Pt9oN1wCjknHnfqFVBVUZmvva8e4tFnSZ6dBFP8mWWgnQYms1oFaptuT6iYJ7ZTw9T2g7Vi7",
  "key40": "44MncPhWFHaxk1zzDMd3L5VhcdfRUTnXm558zpaqV5XNEk7gVwmVeaycjNcJAb8TWg5hc3VMgDYAedXgxQx6XJsn",
  "key41": "44ashAZV84yWFxmkRiqwN3ts7KxkcAkWLj5PqHw1srjpyqXxj4KyADxtzxUxFtXnTyELaH8kHUQy4tCenxNqeReG",
  "key42": "6HKUYkv3bT2AAvqRby5TxRbR4AZWTG8prKkd7cb9wCxeRhUQmNUgkCcAX4WuVkzKaYakyJ5rCLTZ5y48ndX3NQ6",
  "key43": "5JignSL85n4Zf6AbXKx6sPCvEHTzZ1w51TayMdBNK9o1A8Wxzi8vW9pJrDzBdHZwQjd789cNrYgFbfHaZZ5D7f9",
  "key44": "3zRmNkshTavbKXML73Ao8YxEp6sPzqAACCUTPQBh5s6RqjhobdL3tmfGSxyaKjtWoM3AdZ56kNAB15skgZwWzRhW",
  "key45": "2s2Sy38h93ZBGpkmy28DuduQvpnMAMD6JSk5RoRRtXavXMipr9yVZ5cA7v46HJoTi9uuQbVhiihTr2P7Bbq315CR",
  "key46": "5wxTmF4Ur5fW8Pu2tGEyxUF4sMenhSdxAYeDmrAJaDZzPsS9D2L7nmiupcVtDXQ8vEc6kSCL2Ndh4BCzfPuYMU9R",
  "key47": "5mETT2kgdyp9KmebzAL5BHPRmtptk9w4TpHRPf3bg39JYwwDp2QW2QyZfJFgjK1gc3hJ56qNAGMfSuQVDHf4QxWe"
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
