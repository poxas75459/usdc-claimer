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
    "4bkdbPDJ9Po1CWFDqBk9WDqUQkTHFtfdUugwEqGabNcHdbCiS1fytymQeE94nNJ81nQv7zno1dR44QXWffREKUWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5XP7LJmwhqLBGKqnbLuNnauD1AZjkhqDmmEpB7uPJhyBLueC1sY4oGiBgP1nUvGEmSy5mvR9xUR6vCeNLRTxia",
  "key1": "4ZMExY1UXcbCijhNF8TCGyAaTQMejbhCjzEbwJqL7sa2XpdhBNrG5dqdDJQTKrzFcQzCWcLS9UhEKrqCB5YgdJRB",
  "key2": "3jYAbYiyDBwn9sHZrhfKJuNVHzwvHuPGVFNtiCoRXEin7NdV7pepFvNrbzWgQ5pMScna9TfBkWeMau1isXtE7pdL",
  "key3": "5vqCDb1maUaFBxJjpDGU2qjc2XRH62hzWAMiwwAvfJseoZNVrGVrc6Vftxn2i1ws1Q55cPuRMiiwBuinw8UN6JTp",
  "key4": "4vU6RW1LsXHDDF82bzN74ZdDYHBVjTzgLcyncHrfcSVaBiddPmg9Bdr1QovniMmzna4wQxzNRs92ibyPmJ6PzazS",
  "key5": "Y6K84VdFuQo3U4UVUd6xSiYd5cYNJgoKqRhZCuxb4Xabs3DDmYZrEmmjJjKnA9pZ5qajXwspyWVaeS89RQu5JWS",
  "key6": "yZEUwJVD6aDBmhXJ1sUiuLN5iGmkPiAMGPqjFJBwUQ3vEqMnWvvguSLq8jzfG6jchRgS1ydrM8zrygFmDq5Gzpu",
  "key7": "3VJuSL79ysFTXhk75eLegVfsCTfjp1NYeVr5Hnsx6zfKio82aP5jiwF4Nm5ocMFuUJa3A5F87BupXrxSbixDLysd",
  "key8": "5jW6xiJsjBsr4WS3kwsof21pkhgpvYK95bto3kdYJNnqKRwxRgQ3hwjD8wzLS3CM8k52fkqQgBUDUdrsNCnLXn3K",
  "key9": "5J5LzNSNDjiNF8U9Cg1Zh3PUmncR1TXHiubEMsesax6nvZa6wdRufv5YuxFduC62icYwqPr5mWePaGSX7WUPEEUE",
  "key10": "3mWbYWnr32cR1KVZ67cyuVJs35jTrncvD9SRghzuX7MPHQc1rVpYw5H9Kq9Kcqp49boxwAoHmrrcHpdVv4tf3eFh",
  "key11": "4JPwTakfTsJoBcQkUktdfruPFuXjMaRbe5sTeLiSMehiWf4WZKBjZuG9XsZM8sHgDoe4bnX2Q6RXswsLaoTtZYfM",
  "key12": "664tssDeXesmvXVNmQN3kLnpscvLcGgyBAzsC1FdMD75tjDBFCpr8GmjfEK5Q4vRTEr5PSZq46fLnQF4pUcGiZ4i",
  "key13": "5jYrxJR3YbwCn49Dag9QwiTULCyXLWGJrVStDUzuLr2w8BhxVeLp6ZrC7qMgcGHvMjdqvdwzKxJTeZYtcQe9D1tz",
  "key14": "3dcMuAMDzjzVSMHwGRtWpdw9vRuKhnHt7pQW2sfcRJsK1YSBftLv678ZQChSfiqkNu9k8UUSPjJETzakNPJhHdWD",
  "key15": "3N3PErhddXD5Tg9jehPfmKnzdbP2E8EEDW13zWFPigMGVrQGcE3EiRAWSgFe4VyoCWxS8ebMFwcKvYZM6K1QshSW",
  "key16": "6gdsndnVdFfkxUeG7PckNXtbNzmmvgjVZxCtZ6brUXgeJSncLQxM2htW9zsDvP7xDNnkFHyVNF2or1DZguYjBXB",
  "key17": "5iK2vZ8H8mvmuGMfs7P3s664r4cY7a2XKdtf7NuLoh1XrNmzSQtNoascDF6aKKy5VpWUkUYU4x6wHcgfE9dgXuct",
  "key18": "65gmhb6HYYfNxhyAaaUK4M7tCAcBH5rt9uEV4swpXgDQ1DkFwCAL1tmJB9BmXBbQ6Mt3XkdqqvBk7ZfrsXPLS8r5",
  "key19": "hN9qGTrc7zAQW3MumVBn2NXqFq3rUajohHbmG8FHqutk26bUwHNeZ6ZcaHZC6nFLaWgpHex1axuKQgLu5XTvz1P",
  "key20": "267bZur4he38ZuuXovBWQQAv2zZCBzHX7s5br8AXUqA7NTmNf1o9qMi151uXN63fvUCTz7BLXDPovYHLCSP69XBa",
  "key21": "X65Z2JrthxajdGynmodrtBNwZSHVFtzjvUQTmtQPTwdwHockKmMqFVYka5Xta25scEff1GoU1nVig16r9CKgMQy",
  "key22": "54om69X4pGmGEUXTF3Sydkg7eQJYwNeAJJKoj5Z2Lf8HZXxKx3BnH73At1m9pREgXAaPjzYnr9UoHLnz8SAyJxCr",
  "key23": "dePr1MuNjsmUtgJ9rgyx45xTXdRgEFyXknNyqzcojni8xdgZ8LexcxtL7qEF4mhBbbsf3bMHE5HLWSNs1PNXJZk",
  "key24": "4zGQgDFrTVYPvTJ9tZiMvQVR3FWciBBDof9xTk2doLXqjjRc3Zn9fVsu3EXahTX2Sux3j7vuxAykQ5VfRBUFUSaN",
  "key25": "2zDLtXy5i347j9zue47FTX6pM8BR81ZDFEcjzBUiLkMVAMgZKCw3FeVa4A7epFYksgrAfhqPk2i2RK6ZTB7kBw5N",
  "key26": "5fnKurxVuaFoz3ggYowkHVHFZMAYV1vg8aFUWr85x5MDuVS4DZPhzq3fYKpTEKJjMbF3gHL1zwsXdFBFxd6ctjoL",
  "key27": "Ar8gWsMeHJ1Q9ufTLFL2JMKMYwCyGq9fVNAyXa2h2wEbfTCviFEYEqWBzaYVa818LtFPxVtgxgdfNKhYuMjPE5W",
  "key28": "6uqzp8gfYn754WGQ5Dk3PmpHtQCw1azgfg3Z7upPzV4K4vKhct8yMVbgNdwq5i1g8c2R3YPWnJCw8qEGeXda7HS",
  "key29": "BhF8Lr2Nsw7527xFKuuADzBgo2Lthkj7EKiPmmpKcXoukLPUEmZ7RREgp8APp2XyyXofcWPvZBgZt9UGkjfNmve",
  "key30": "pyFdfoK1XKYripDENnz6TFJc6ypPi3HweQNNuyFcTN4HFzBjRCRcZCgPVDhtoQp4twAY9xTXFjnHyaMFf6CFvCL",
  "key31": "5MrGZEkMzEPgQSGt1Vkq2s6hPWpHVh9AyXZ4WRRYx53oaCFa5Z6E5QJ4UPd9PhLWXsDGnTdiZnyBpiwYqLsmBctz",
  "key32": "4EPsKC1wjCXidxM9RWiwkiDMFQkDSPHY5is7psWX2oizBhzFS6ZvCNkXmmcoQzaTUmJHYZ2LRmuFuj6M4kkyZ58m",
  "key33": "5y95JLCFRTHegMPrNhJ5xWdekE9MTbQVSHbkXTksFN8U7nhgE2TWKC213aWA9SvGpWENuXNdiSt9sE91M615muKM",
  "key34": "49eveTg9rV674FMbmjtwMoG6rr4VJq4nVRZS4XmeyDqPxBVaynUH2ZaDz6k8iLfkERttZVehbaUBEhGPbjiPLfMk",
  "key35": "JPpynEMhAkMZXNxnqHU715EGoDYTPExsLT4dnTGXaJQpx1RKBAmxRkHWR2nzsUPicmKvhgVmWJQhTobBWQ5ozsQ",
  "key36": "5kEoG1nASYZNfYQXURAwe58S7AxjoPgBVJQ32PAxxeQ5xV7HuyeykixERzjfqBkJJGJ6KpGyqyZjVRDVN4Uvy9HN",
  "key37": "2iKc8akh75nN4Q7jcGQoWMaGFpARscVpr2STngAD6G53CiHaVwr3xWsJRNPSQEpwjeJfDeVrqCiGnmv5injaYTuP",
  "key38": "4VLgwJ3YpM3N5RhtFivaKn2sKdUuQ1QdsM8Gixd9x3UnVJEwpbSC64qNa9ZQsHpGwe7kF2aw54tJx1iPdHbJtfxY",
  "key39": "66MfcRd8XeJzeijH4JWRbrm3fuPAJDcXWwpvinZmuKqZuvPGpALZGfesMXzhG1hMMEQdT6VZRq4DPHwAAXHyvYBy",
  "key40": "29PjuDdtGfWyBN32RHNJjPA1vBsvRS2tNUsFZEcNwAvwCNYX57A8Mf1WtDt3ATbTc59xbZ1XRoqhCkLw3kbFwZdp",
  "key41": "qcXfttsT7BuVe8cjNMqcEEbzavkNmedzLNytn1qZ5fveUPFSd8zGKFDMA4Hix8bJLXkLEAgSTzG6veAhdx37ohy",
  "key42": "3AhwBiPqNNebsJL1uxJQ7hdLGJ5SJX8S4st5w4f9sCuipedKN3kq3d5jUE2dXzhoNEQpoQNbc1mwC4f1UQGMTyxz",
  "key43": "32Dn4bFyFQRXYrf78V1JSg5PkYWfotNiaA5KzVsGJF8sjQ8NNrPm8KAaRcHvzb6XncDE3P9GztuRUoMmubW3ARsV",
  "key44": "2tLmdsQAwPFkrW4wN3LBxUPnH4P45qrqn3WzQg6gjLXxvTUsoaCrbzv4bqxhMZsHKms3DV1p5L96LNi4FuUS6Bxt",
  "key45": "5qa99b7WZzqXnUG35gLJmLE7S4PxyZMRTj49Cy8ovikzDqKrd1LitXLjCr72PqDZkpXEWRBVKT82cTjzmGtaP5SD"
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
