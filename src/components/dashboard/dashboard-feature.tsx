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
    "2VeKMb8j88D99Tok1xsctpqtKZF194qUP4p9q1bNxuN7xKbodQRRM6jFUTWZ2hK69BrmxtEoeV3h3psipF62Dq87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jSQC6GLGe9QuAGeLZ9fdCRVt2Ss89h23sfSpkVrwNWNrvzx3xduJYH1EkmdH6E35HVjtGogpTAT2ngnx3e3YWwV",
  "key1": "664JuTqq1wKQoLYZKgHa1syv2CcUwjdoiZfFjYaVw34EThqCr1KHSzaJajAU6GwRaTBYRjv2kUZkXyDtbRqoy2tc",
  "key2": "46FnHTE2QvgFujnnvYPevFFYwaSNp6S1ZcA66NSR7sNes3WG5C8yUddGdus7mb5duAKuai3e6pMQSG2tyfaZBcbS",
  "key3": "T6eXLuuAEUvp2DzdYSn4D6LrS2sN1u31soeG7sbLnV4agn5659BdaNWaKNkzXfAGbXSCZPpAtcqXrjQxrvhJQMw",
  "key4": "2QPAxC9Xnkdvs2GErBxAndJH3NGZBYmTeT1CHiiELQ4e9YuGFHGbyHo3bhGr4eUr7mtsdamie6G9ETSZC49sjNLw",
  "key5": "55K69Fgo8N5f879qz65gsatZJacDoyzZp1CHujihntRqt1LrnVSMEdVw55wXBTEv3kkFPeXSSvzvPkRNbP9AKdXX",
  "key6": "41ZawGpyj7bDDY5d9xvAhr62EPEh6Gu8WaNoeBtHMTijf2CfWoapVpMsxamvJx6MsBrJQU1ZYiAwUeUV739uviUa",
  "key7": "5TkFPCz7HMM1AjjwzweKrBrqfuJoMFPTzSHvEh4m1SVmCaWkC3xffHfyEfrucwFQ6XMAbgTdqg9c2ZjWLyJnRYm3",
  "key8": "3fmawasEbTr51kQpZjVk9npVvKqBguw5W3JrTnoCKgX7pJviadsrs59g6NC5k2TK3rXBbP9YZXuMssKZVgvDPa56",
  "key9": "3vcGx1tznL92XoCaLt2r6EAMHYyzX8Qrpe4uE7y1qXVryJTg6HoYXV7T1rUYpmFD2whinoUB48ZByPByszt9yvPa",
  "key10": "4hvQ9Q3MwSA2YQHR7aUi6fZ6Rjd1vE6RMzo6BwhyY3jq1rDe41Dxu9c1csLxkMrzAPwdVH6HnAasBL9ZrZh5cMdM",
  "key11": "3udkk5avHrb1DmxA9tvEzStVfCgr67BkJum4633GZ6HSFrU4pWKeC44VsKVenLCQkHV5eAw7YS6pYvfjp2UJbGoF",
  "key12": "5BXVtey3W6YHotq9xWm5RpaV3X8M2HZK3fuZCzPm1aBjU3ivYPd2hxNNaHEJFSQwKQj17nq8e5yLevjvQPXyGAmC",
  "key13": "25Qn2x8FR8V2MRP559qXSWVM6dAuKbgwXHM6QMvsSumy3brYpLCNSpuRSQBAaxfCzZQGSoE8cQP1Fnd2hR4iJHku",
  "key14": "3DmVDctUZEpso8txu588mPsRVXwBs1Bv5s6HYHewFScqzZeXsiSj777BcY3N5sDCd9V5U9LMAFXe25LLyRuB617U",
  "key15": "2T3SN3g4rQHZtBh8UE3NqCsxGq6Medv5b4sy1HpCLCMw3CBEnudn9SJucWG8MPxxbxXAyazQJHBnb7FmBULa41jj",
  "key16": "5VQSA1tAKXRNbRKdEPY1zPVUV7ETxDCagB4dS4JWVB6KnwG3RpeKvVGoGg5L1it9wbJ4mzJEA47vt9jHpRuaTDgK",
  "key17": "5MdSpYBDE4HGXHV9iXgYFCJYRSFbaLrkAXc9nWHz9Za3xnCJKbNmC8MgLnvtigJtqHCKFERueHmqo71EYu4ogrUd",
  "key18": "537bJ2jBoJ8mAMLfoB4EgpBXeMtG7rNomsCQRuuJf1YBuLQMwKAoo5uzRAdJw3eNYuZnbrGp6AAX7Bs7yYfnGptE",
  "key19": "2bzVhL2WsxiHo1ezhx6W7191KgQ7eq8TKLvUZR5e7AkgUVSLzwj1d5LU8ySs9WAc6of48M39PC7x8NwoCAc1CfrM",
  "key20": "5UbPgC361yJXNwndgF7qpPWpjNpH7gYmGDk6rSStG3vu6aDnaY6aVAWsAYutC7zEw7iD4eJZuT1rprHcqs79visn",
  "key21": "5Td8u5n5jZTWx7n57JADAnv6uBG8o3BA9uuc7vN2xwue1uAUpribAbMhQY72EjrPy9mMNQ8cgJ3FziZvz2UQWwNi",
  "key22": "4ZKh8E3d5LCgstXoQzPCFieNQfCi9HnmmsPyK8HuEuiNDe8nVHfCYoNswsqeSMgho3ySmyPipHbybqJzc54fjGbD",
  "key23": "DXZU1zDTrzkTmYuGWspHQ1ego36q5PhNBvvKHq1QnG9jubzgAtSrukJb1jugogMM3DEJnmp2cQwmYdCyVHPVvzp",
  "key24": "4emdXBUPqmU9PQxKfgaNb7Vqfsdcfqw3vZppYmnHT1f2AoTzt3F5R9fkiVkYxhDLUsScajnJreWaJWvCcrU2kj7Z",
  "key25": "5UyLWJYzifVWrXynp2fFFJsP8PLaM9GW84eYQhTSxpAh9aDiNE6jspsewnTk6dNLmyiDbbjW7qF6iA36YBgtiRKb",
  "key26": "2op7VwFkSSEoMHw7jGnicgV6vvwa4wmNgJnRKCUSn1c3bMoKZzJ7x8toJjrpsNGkhNB7btUTPEDhF7Yii4qvghjL",
  "key27": "3eKG1x8DEyJaMFoyQmjJ1Tf3CpwfEu6uYhXP8X5nKhHdfCskS12zddVYPiRo45vXXf9t6bzDs9qok6qH5p9QWUim",
  "key28": "5XJNuj5x2UL15R54UQJNVs6t1UXcWXVAenWnbkZyypj3Gfom4JP5DvkThhNp5eKXJSiqDRKz1da3BPZvk3Bk9i7n",
  "key29": "2QN1rwZ4e47BExVS4CqLrKvNWzweYGcwBzwJm3yNkcWFaFVhkdchrf9WFFAdQ8iKjGAJ4PLfwF9mNAbsRnhTR7nu",
  "key30": "5JZRReaA1R3QmxHUc1S6F5arHBSPfC4V7UtCwJFsfca5Qj8T7vgN7SaYRQhbRKJagfwcSJusruzMh3GR1QwSUFu6",
  "key31": "4YACVcH7R6qcJEe3sK28x4e1EZhUaDqt943Gz9DyHmvpmiESRTZZnGEKcJAUVf5dSweBqQcuDnK7FhtdtAstpjnu",
  "key32": "jNx5Cne9uZxUycb72F68mpD8NyHamKdtrqJt6yjDPLZBfM7mx6jM3M4DzvtBKmFNNsqmr87ZkqUPShGNdfowBc1",
  "key33": "2ERzfC9HuYfrzysVoqqtzinK2epyJJPxQjRMMS73nhotjJsQchXFDmeBJfZHySwE3SJRZvzPQCjtCoGteoYQErAK",
  "key34": "5NtdXqLTqBFnTYsdfhvKzpA8x7MMy15Zce3kYtpe15razoXaDtSJscieaxPjCJkaMoSCbvTefDQvY4Y32TZeixQy",
  "key35": "2e6TY8TKnbimv2Hjq9aiN8oh4vn9RyEXQzb9EZ2A3PGYmo3h4rovS6xrcuAtwSuKKFm1xCEuXwzdXQSm48f3TJzb",
  "key36": "AUH9s2hcN5z6wdY5pHv9qo1Y8DY6VLUFnE9gG8izhZkTgUpVMD1XPdEPov5kRUfvMGeZfuj9FQtkvq35MTTRX72",
  "key37": "2aum9rSpRtKFJ4CYRcCwMfRpqJjpzBFcqsYT7XHL2F4FoK6zXzhrouxefnmNcuDdXVBSR923tLdy6HAqum6sJJRG",
  "key38": "4a8gf44YjjJhTYV8mLGLH8WtmuoLRriw8e3sqMZ8HqEMJcsqKddvDRsqX7qmfQUokqdci4n7YAqW32XRJVvcFrKi",
  "key39": "5fEgNnkYqS62GjTQvuSg35kQZY8w6wqbcG73a25oL2gz94DMdYB32ZzmSGainRQVHPhnLwR6N35u9LPjVzK3za7P",
  "key40": "3yRJY8ufyvX7A88qSZLmSK3kpBmTnmALoCJekMLKZyLgGPyjuugeBMdF6Rzus4hbZ2defNivZxdSE3Kq4TWpb6qd",
  "key41": "3Tn9Dtn8B5JwjpeGEDxVcfauYDabWiPSTTKpgRSfedor8VHuSYu3tc2fcvizo6LrpyjsBdMwxqTpfx8kacnXNVMd",
  "key42": "2EihGLCMH3yT41bJQ7EwKuPAwkRTfBoYuhbGYLnB22LM931tppDrqwYEXrDBPXarnjA5q4sgrSt6VDnzST6g1rBE",
  "key43": "hJMMr159zFBo8tgGayaHWHgiMT8XjWDgdhJw7boco5zeHwHWyrgrys89d8GiedzYmnfk6CKzyki5m93uhfwRaP9"
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
