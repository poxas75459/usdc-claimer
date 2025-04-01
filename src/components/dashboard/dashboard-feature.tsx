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
    "3RqbE5yZKGUZVynV4NbDoTmmy59pyZgLc5qJ5xHqmMujK3vqhzbGi2MC4VMNVknP5WhikPZkLBZp9auQRpJZ9tdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PsW1qZS1gWuJG2tnwTfrfa41pCtRn7heZwnge41v6yRfzTC5AkvLxTa99ASW3bRNdb54LNny7LZHkP7nmHMsdU",
  "key1": "34bKtrpDjhQcrCqDkpoYvEkBYKoPSj9uZQCWKBXEzX5h6mmvTUFXUAVb8mAKiwjMiQLkDwCvG5GbvKBekJUg93Md",
  "key2": "2bdWn1iex6o47qr8MPgH7k5QscXdt7qc4sEMNjcpeawA26WCk22XcuHvs7C3P8F6wcXJffdn2ahXemQYfxeJDdb8",
  "key3": "2sjXkUGReCvjHCyTeRFVzU2S3CsZn71e3qPGgeiVYKRTzovTx8rvyYJPREg9cz1eKfWwFi5u5gbopRhvCGzM1mGd",
  "key4": "4ma7nWduNj17tj7haaqgQHRTquT7ZVTHZyRGMunXLTkGeRQTqPMSdv9bqDqcjcJRc4tYZRBZwhFRvSMFvBqiZj6c",
  "key5": "524vbbwdmHy2B4gbnDTt7CMftDaroQ6fwuMszXQA4kD34LFiuA8EuRSd37eeQyKz5DynTni9wTYMsibsxkvVNd6R",
  "key6": "5vfouai9YV3nb6wVFbpCvH5kufGSB1TWyCymqDnzqpinPjhKtJYvHNC4tWurf1gESaufW4D3WvV8gZaYkUrtZJQ1",
  "key7": "2AfJgDzpC8dwzrV1TfWBLfGmp3ou3tPbbn5bLrAdt9TedfrVwrZgqGhXUBDZWCeDz5eUJSr7v6L7m6Fvwa5bo8LV",
  "key8": "4o2vhqBvjij24SQ78ewjT9Z49avFJ5w4mDuMJi2S4gmJoKNTLYgi34dvfKWqR8Jm4iYQNpSDFSS6RaBBVvTAmCFq",
  "key9": "5Uo7dvMtvDSBDKGdBVnUMvZ4hehEpnFvJTNE4ZzUwvC6svNKkpSXvApf6fWKujLqVxsTvgNfccoh3qzTkjQjKKjr",
  "key10": "5KmhzEgoWPVFDKJTrxsSHps5H1V8KjgddKFsbAZR1DpR515oVf4gSjgrkhWTjawWuaepMSZyXLCGxJTKfvZvAjMy",
  "key11": "3NCjAfGNCseVq2qmSgGjjA57d8N1DJR7fULLH5fMDRifSAgiPHsuCVtzkimnuZnCBcmHyr2VyEQhW7nCaJsSVcCa",
  "key12": "5SVKywKitJBtVRYHywavBCY8wMZL9BzT9shJuGQnnh9cqvA5xp7s133p9yiKxc7nkki5fwL8nT47EK8d14gQRE9F",
  "key13": "4znDxsXYUFwhFwGzsU48PgmfXBz3dg4P6qfrMXm17a6926qBRTGhippipCmM3P3dYWzDcBKSYhfu9yT8T2s9pMna",
  "key14": "47bSobL3wx9Hfzm4ifoEo2s6PFBvBBaNeJvp1q7dHRxBn5GUKR83PqDMLTToyvXyW3GAewaSYhZxTH9CQ4WiMjaJ",
  "key15": "5zxSR5ZgacDeP6dEYoQy1eT7kHwj6qp2xkyZB3Z8ULtNinEmUd1UcKx9whWa19zRhi29W2GFyCyvetPnznuDRtjA",
  "key16": "tQJgTU5z4Zsv5Nzn298bW3RBf5ytFA6VrapV8BPUq8vTeweVQeeKjjbLsR3QqwS6aovMy2R7qCvy12vDA5PkA1Z",
  "key17": "2B5rENMZ8jmfvEKq8E4Tb9nfqKk7EVo2rjktRi3K33WEarMpCZjGe7dNuTM1R4DGwgrHKdqQ44k1h3vyHunBh3Rz",
  "key18": "2V78toubiKfJg14aPMmBHpqNZDYJSGvo8BFF13mZhFzJ5YHYKHSimR41KBYUAMk1BZbSzhkhXh5iHPgnNkS91sbD",
  "key19": "2ZsoDeyUr7yD2mNXXAznpWpqQQ5PoHWRDz7gVb9ZwLyWSXPA5nsQ5xAu46o4zfyJEnNKmjtVcoJs8gGg3ixJJ3kG",
  "key20": "354VTw1pPVeRep4K57ZyYY5sLwr5iyqVSPfkt7YnmpsQNZ6zJVwA2HQf1mGkjehik9pYQvHSh3uXFAfRPq8vFRUT",
  "key21": "URqEChMjkKnVfvxQbjtBuZLuGvbxQjQvTNZz8u6E6omzsUgajHcQzQKVcMmbrud9P7K8Fm8o8aCJQVrXCm3NtU8",
  "key22": "5cc9gsckertvLarSoj66ym8w18PFPPCPjRXgNFDHvVQJ1Fw7shC8wATj81qxpxKhKbVSJrA8VAbrmxZrJA8smD42",
  "key23": "4oG4HBohqBoN6aR7RCMEQxRVVXYKLT8tVQgwti7JS2eRWPBJDKNd7cpz1CrgER5FYQpgED5m74pLtftNUJFBRRr7",
  "key24": "5mbfTPNQacRMacmdUZzPhw8J8twTMpQKtrG75oDni53GeCiTCcAD5g7JpwTPWHXTRzGgMYpcqizqXpGS24wNK2Bo",
  "key25": "5bjBXqgnEq5FaYiGfvF2Z9A9dy43GWpFoVFZD3yUbPUMhDusxj2mZHXeL4bpmfgQcaTWPvXbuCJDiQeUonH226uG",
  "key26": "49duwtL6jgj4ojMFHhaEsVo2DAircsd5BvzHuYqfW8DuXnCrjct5M7bVn9VUJPuMXSBB1V2ujRnTcEbrmH17zjPW",
  "key27": "2Rg8PGJDsqMmQvQQFSv9t4ABRrCHCt9pPLLygCH7yPisJDaphjSv3PpQRM7gSpxPrZiSBatZY3uUeUfeTfSjn8Qr",
  "key28": "3LMahXDfYsHaoJgzpgcX4iLHd5yXyQh9ZX2wCadVgYWGUQSjFwuCUeT5p7RUAtfThHGwozyx6PdLmPhdBjDeyer1",
  "key29": "3ihpZ2gqmtJviVPTTdrfruAuLjposf5gw1MhmFtgt5TGWkzPS3kM1vMz17CwnU9WcXCLz8Ay7h1tqgb9RbmB65QH",
  "key30": "UYDxgvAwmtFK7QHWhjGdMXz4bVdgeQeedoWHSVnYxzU3usjgke6CMzuWi3h7ADxWhH1uRoVMviXJamBvHjtKY8M",
  "key31": "4ftnZ4iaWjEvqjeGQmEMsCXpaS1tfDEQHGgP1pPjivetywSWEsF1QuGXwJs2rC5npsC9bEgNdU3HbvWTxFWn79ay",
  "key32": "5HFKe9NyNzVdLSdgi8uDuvpZuATvnpTDoZPxpMsZrzVkGhJ47fRrxjjuFfnENuhUqC3FXXa6Yo1NJqHK9KcaNanE",
  "key33": "ebeK1EJdvsACrSALLkJq6FHeV7dWyLvHw4XttGuoWqJ7zyxSUoqnx8db1zfn2yQdssDsiy7QthD3TRqwtfmE33G",
  "key34": "zVseVjYvPFnhS6nAmxpzK68ud7CmcA4yDRjz2kKRniHbWMq4cSmBW3h36eBhbhZ5jpdd7ipXTCrxSdkePtQ4z3N",
  "key35": "4kUdh9vbc1Vn1v33FAkEbQ2G65c2wx8GxtiFM46SEFReYS99715E9a9VauG9Bxx1YXEpFRZjEHLhrwWjPcxdu7Rx",
  "key36": "21wVLdLZYVLU1CxYqXqBrExzLS3jrBroJVvxhjTR8XYXCCH3PyLpcxSRmfFf2JqTyNpE6mbejq4eGvo5Z2L8yb4U",
  "key37": "2VZEpnehPkNAYz527hgTK3hrFLneDQLe2sxpNoqAcHxow9BZXf2YRV7Lh9NZtifg234oV5SVfrJN8N2xZV4k9Zvk",
  "key38": "2BAJBz14saWXY556J6RvJaKkheqCtEuCPgPTi5rJCVwjR92H1EkmPGocbio4TXZtMWrXsQAsWx4xEuc5EDgFdB4",
  "key39": "uNQN9d9KbBQ5af7iqJSsRG6byCErFf2pxu5hha3akcD9SqwBSH3z8NN1e4Qr3T7WBBYEGQwjug4sKPiUf2vj8uo",
  "key40": "25QYFAEZyUpFn2o3aazKgSrP7H6qbKKrC57wYVoZEHPhUtTj5PaPeKX5fUmKMVk7q6dUHi5s4Hmq6RDfD3xeAcGx",
  "key41": "2omGzxqu8fAFFT8G75hQoFUCtP349Fgh6t16CyaTRCkYKMRzRKS6Ecpirp7VvFuE2LSEEKQhdXEpyZiSJ2u324bK",
  "key42": "5Y9AzXkGASwvKZ3dBxDi8di96aJGZyzC71ub2z22mXVWPLJMKnyKowpRnRM5wMATYzXZXW8pcP8iSS2KdeqhSGje",
  "key43": "27vmX85DW6BXcxJYz6exQRRuyyUvGNZ9TgxNjannsqdCqcLsvR5UDLbxVdg9bpW98Ew7qQt4EAig1T1YJSeQh6di",
  "key44": "dCSUqTnSq8eWWCrfJ95K47bsjyz1BrmDFoMooNENTm4B596SNFjansaUAbCCg3Ti4owuLG2M13Xh37Pso9USXzX",
  "key45": "VHM79yewVFzNxpRxmRBEuPRDHt7A12iPVqTt5RUSefJnNbNFui8abzRpQ7FfYv7RnVu8dxW6GZvw3RMiE6zJYg6",
  "key46": "4WuZMrs2oTCJgQnJksq4TRDpRbVP45mvKowgzWzyL49sg8YkaHmReHkBJMXVtgrijJ2D7pvxPLHSceJU6QPSVJgb",
  "key47": "2HZ8SmywS6Uj5YtudkgdE1Ndt8Pnep6ppQsT7nxtWD8pdXqvLHAhGtcgsxdksyKGQk5881LKx4PLk2CfD9WXjXba"
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
