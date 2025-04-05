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
    "4KyxarHwaSBh5T9zUH1FdSEux619y4woRkhkZ3o72KTPjxadjk6ba5LqgW4mUppPwKLXvbjguua3YcundQ7zEjai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4t518XU7m21H7M5b4zVTrdP6xGDnpPTjj8dxwAnCFha3n32EtrswJfoN1f2qYVJ4Smai6syadV1ncoCwFdnM49",
  "key1": "4gxAGGMRthTbyzk2kGkLprQr9n6Dy2R1rYokfg876z5L4AE5Zyiv8E6rxVtZGAc97nCJ2WMjvhHr9ga4H3aZvDp3",
  "key2": "3bDgfoq3kmpc6NAcKbbY82FyfiPrEjbHkU9tKueu2hLrR9LdvQiTwqY2quG1qC3JiSHP8vP9ktWVJ6bKLAz5Qaya",
  "key3": "2GhxgGdi7nsbFU97XzkWVP4NMVKuv9c5WA48iKTdgqqEG9P2KQyaUtxLWCPmrZaAPtdzGsmC3pYk7h6GTXamN4XE",
  "key4": "3V7QFkJvsue9adTQvnaMTdYAkapsDisSmFonrzKUE3Zp2kUzs9HPcX1E8kyviK4Q8eY3FHnDRVGQFYobh2U8xSRu",
  "key5": "ezk9MaeYcMgU3YXiDtkXB9LGaQmYo1zEAQudzLJSTw3RMwixXkErsegA8XyLSDeLs388CoQfBEH3VZibrzT7sxV",
  "key6": "47hrZ3AfavAszMJGp9R1njnbbzofRETV29at73ZezbutfTTaX5fXqHJPXKfWh4HTsAoYE6QfXkS5M2WTjHnmY9Kw",
  "key7": "58NsxbVS5kkZBURqBMuvybM2NLHpuGLWVA9FmuX66uGG8i4koXRcozdZZYkQsLo9Z1r4HGU5Vnt7A9Z7aLQ23mN8",
  "key8": "5VQxUZASKanLNjaZGdh5yDZvJKLhVyrcwpbNA8QEo3413BBPQZmSsSvzq1aMbfXhsXjhk3Hcgx4R56YRL4ucryjd",
  "key9": "5eE7WbRDYbKqr1BDQeRUfEjzBQTGhmh22THgA67SYDzEdF32Yh1CGmJ9g1KmDYb6tiEpH9SEdsJ7QsEvwL8Ef5n8",
  "key10": "5kbFcmfJs8BqCDDQfV8yzo4X5ydLUzxUuPuBmZdywhb86bE99tG67eh38U2tdqUknvEJLJTsifSxKdBoJaJ8t6AJ",
  "key11": "541hLBrFF3BMiwogFuqvJG9KhHkckKfi11UFMzk4EVZtGCcMhTCukUt7h89E3WXKfLDFK9k1vFwLWr8K3aj1BfF",
  "key12": "3c6CUVzhBkhEHt43AzZoMamxd5xWZDyexCf6uLU8EcuoLJKa4Fcxm9KWBL1Seq5mhKsQpPjTpYZSQfqHiKehDsTS",
  "key13": "rwAf9V4fVJeR1wF6D1RwLVym1fPByvMx39gyPBHQRP2SfnGcCTCDC7GGePKzrF4YnXn5KGGqVmgfsD7GxhV4fqi",
  "key14": "5USy8EDookvajbeGeuMWbS76HPY6BcCBVVSB1Thh6JecdboFB8VmPyEH5RpSJBoZVdLLqWyzYQ4noV1oepKrGenR",
  "key15": "3NvE2MK2qwygmxnX3ZSePKGtbzxjWLCbs6Qpg4eJjvcrCwtPqaGujifQg9GBpoSxm4K3hBcKSJo1itxCPAzNBV8s",
  "key16": "Se9iAfHnxbvwEaAtKhLvXSzwB8h8oXoHEx6QCyqReoqYKkKSk4Fyk3ew6wdEZdLKFZKGUWf3vED8Ce8YviegvMp",
  "key17": "2NJgKiZxgZFo3mz6ijRf2cpfVxD5sEPjtTRcD2hCim3XPZuuQKjidkBY1hA63UCezZ9bhc1WXM5aArVQ8BB4NwPX",
  "key18": "47Az99hWxWrKuEFrYLCUvyyKT8N8JtqUS7Wfzg1gR4quBukfPWbsrzknuvjeM7WpSvijfxEuQ6Yc3zS7rq5EX9vz",
  "key19": "3C7jS7iC69koPEHFiEVMLKwFJg4yCzstY5jhikEQycm7GDnvNR9qC3GxjGGHpS4sESTh35gkjXxGasfXvQs7CKtP",
  "key20": "3F8vFwZvt5qRRs5htFV9AKvBARG8BtAAtunqx6wzqSgHsDHDfdKbHFpJUrH3G4nbJt2R25K3LWsHqJ8f2xiSfWA3",
  "key21": "n3CQqQz6PKAuvF7CuF6LwSZpDaLmNYHw2HTyQA4iiNqY8ncCWqqmD5cy5FtDTkkjxQXXwgEYtMLodwvPAEaZ4CV",
  "key22": "629i9Qg99zmRL7EpPqjT2gqZLQL57Di8TwLGQ3CmGQiJdCRPugWNayUWo2XYJDhoMQhnWnczmQaDyakPFxAW3uc1",
  "key23": "3PThvgR8nSQa69RuAo8y1V49MbKDcZLyZ3C23dA98csMc78VvDUstX5aoho3DZuQiL76Lm4Lge8L4rUMC45uxKrX",
  "key24": "2ycUzLi87ZDgPAANsgwY6irN9kaGYHzdAcDgpa46GM6Wkysf7j7dwf54XAFZXWxET9gdDmVWnNhj8XefFG5zt3LM",
  "key25": "3nUR9EYFtfTiNSHAGEY6szoooY1aiDV7gZDRWmxqYhpYb6Hh9HFfmaVEEmxw3dDSNvhi9tBqgNteCh4DWvCuTu4V",
  "key26": "5NiFMRrCSx6jtXfd7b1FDDSW6DHhbpbinrERNxRTzFxSf6V8RJ2kPabAdK1eAw4cKjXj3Xg2VBe3sym8MvkBH2oK",
  "key27": "2cgHqiRzbMu1W5bHbczizWoTHnKBZctCoAd4p3USDQWPoYjyPwz9TQju2TzRzo7YW4KBmKWw5RaPDD2p7DchNWFy",
  "key28": "2e7Gj3eNV7aSAxPoey9pc1JhPCMqm5uv5Pkkxybj8BhHR1wowUP7PPRVHBBAgo778Dg7Jb2AewqjohAfAPsox9ku",
  "key29": "3mZDgsDCC4W9uveis6f8aU1NUBcAFKoRAL9yHXEfoG1r9C4vUxaQdBKKXJ65xZwyFgQszwzGSLTemmhLBUwr41Dn",
  "key30": "53yFchR5dgZn1gdbzDJ9kkJsiFVSuevZmXWWu9YRonoLgp5Uk9aJFjPHsWKoL24j7VhwzbSraVT5kyFhFXdE6gmi",
  "key31": "b1FKpjSzDBmEtziBPEYSByxXpAEq3NLLAsqU95J5ciLVRzG4WAaGYyDcg58nKfjw6T6EXSuViEG7bCF9GJU2Nk8",
  "key32": "5SkaCpvJUShEW8m5YKQaMYdoZnL77UtApkXCaGEEpfxnvQMjXs3R3FPxfRAorFGbxEnc1PmS5tz6xVQcLSzwXUVz",
  "key33": "2HRGLMMTsN6fBkqbFmedZD9f8y74VNKdAd6D5wshvvqTQCa87fQiBRKXPwuEBVuGgC8LaNZoUpYGQcTJ3HTgcda5",
  "key34": "5ZzgxXtUG3MnbXr6PUim36JioyEJcDNLNnQvH96jWHm7jXpgGbjJSAvK6xMhNtZzPPfAUm9q3GYbZAdGVpB3rsrK",
  "key35": "2bLCnp7j2CSjZUaVkw7GCpVJDN9JXJyr5RXrCsrgPiP3JcgnJpW2MNER7VeUoGKRwxneAGTKfF1v72bZBpWC7cW6",
  "key36": "22uiEcQGdV7AG5KKgBhPSJ61vpkY2YSAEhBCJGb9PsEQccHKw391vt3NSJLU4imjSUyvzZd9TjG44DB1zcHcu1ir",
  "key37": "5BvRpGYEQ6SDPjV3xKwiU4NFqrBijdLBPQ45XpdaboBa4sXr5RJzTDwR4xaGVjUqGhNNGt3edjuQaNbwKdiHTAju",
  "key38": "4SUtdf69XbDPK7JS7w8iuDrdiJek1HYJgy3wjNbm3BSfu5kJfL1yXbpGGQe4UDVcEkSA2bhY3RKWJ2kzf5QX8FoQ",
  "key39": "27GfvSHYVjoHGdER5UwmJNWkF6WoxmDcZ9qth1et5SE2R9cVYVcqiPWqPME229KPTK3mezyw4oLfNGkcbipW4fXQ",
  "key40": "3MJ6poM9PxGwbhnVtRbXN2SvaHzqVJTcjoUdE6LPUgGqpqmykP34Hk9DiR63teKkj4Ft2fZtHAVdDgJSWkxq1rMN",
  "key41": "PHbWvZef4zdKeUxigkJHKhuQ22L2uDq4xD7pp8oR4YuxYQ4YEWAgxHV5NgXWbCGszm26eHbmw1jh2RkiqAR8p8H",
  "key42": "5JbfHoHCntSMQgtvttTDBbCK8SQMHW28da3aTkJKSYaf5jmFckzGpY9eDqiM2koAQAuQG6S9stBTBBmHVMHfBB1M",
  "key43": "Cug6sr1t4FVvjvm4PPZVSxEukszLzvqdSSxEA2CxjVNmJnWQxusGagfkr9LWSry9pjEnJvSvHyZqQ25CQaoMusS",
  "key44": "2cMuGL6pze34Us3tvbnHnUXB4DZnbVGbwFJSkSbiFiH4jvWACSo6u7wDstqBeEiB2wY3p554P6HSdyBhZcgD5xmx",
  "key45": "4FdxRKd2stY7dnfcVj9VVwL26jVRWRkwog8gAGZoEErsDSeJi8sumdYTSSofntVExEAEHYcZsCk2XRaU6bzn9ZRV",
  "key46": "5qdmm2kWbg2cTNM3QXmD3KBdCP8g4HFFthht7DVzAQmQnpPVzQrsPturcDWAu8YMSuoPqbBcujnZ2SgVWzJqYqe1",
  "key47": "4HFrMiG5t3n4xMkf2Wip4yXvZv7yAe1N87Yk2myoHgNGLB7BjngXFzMFFV7D6YHf6LdTnvYpBf1TX1PvKMznd7CB",
  "key48": "1sXE99qLkeydi5QRkxKBNaj9xChZqruTpucnpTD3L7UpSYNjNubT1HhjZZuXAK42LRgtaqpNCRuFUUcU6U4s5Bf",
  "key49": "49MZYMdVQ2GqC1tYsHxNJF1WbFEmNJ8xJ3pGgYucqBgn2bJWXYvduF4wGPMLBFwrspVebiAaTkXPFkttzdJmx6Sv"
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
