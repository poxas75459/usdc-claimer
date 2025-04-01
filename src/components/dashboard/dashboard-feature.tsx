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
    "28w4Fr92BSHkwYxYHuvA3x977tVYc41GDt43xE7KA3kcsFvNrQqHQc6NX2ZTdodpQTRXvFSRXspJxXNdxW259sHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NMaosH9biYgyFVHPip8x9kHgKB9SWYLvDAqmQb6DCuAnqpJ6APMaZEZnuLqVMHhnd6Duqg8Xs5RqHLAJ1BpBueX",
  "key1": "45xxRJW1LbbZ9MoNDEcExqvfrrVJkTx4eLMJW858yqns1sZAtfWHNCmfj1nojGVZ7jVKM4D28EFS6uWSPr43ayaU",
  "key2": "41NPzjDr6i27reuVL2WxgNR1f1nsGccS34CFNojaGAFp5YkdDVqaC2cfDsEnej1LnLNkMkuWp6sNYNWuLBtA3i6t",
  "key3": "QZKyKds5a5QDQrRTKEXt6rPu1qSQy8PaQLNUCDf9MqbuEXWZiMPtdydb9dXEyBoX4Y2zVrR8a5rEJd3Y2tbxBpU",
  "key4": "3nUTydcqd1sPwQ6XVSgAa2RyqZ4KZDxAHJJ8RCAWYGLRc88j1N9PjXDcDsV8hpaG1cUzP2cYRvosBwtBbgwNG2rV",
  "key5": "4wKQXiRyc6G3t5jzJS8MKsqmabDJHLFtxv9PMvCoLxKZ5RqVUyNtayxt9tSf3xzWwRC7kCyeMomDXTirQSV8V7JZ",
  "key6": "2ti9emf1113i6byBZwCzcKptH9645HonnLZPQ7PrFGyyr89iScb6ySxnGrLu9unH7dqvc8SxD3DmWoczLYb3u6sm",
  "key7": "3huXrx9MuL8iLTRZxoBayxHUKLRKd1msUaGyyAEvSGLEudtrdAzXyK6Hd33Tf86mijGYLZsfCR4Q8cyCFNgR69ES",
  "key8": "3oP95FXCuxCiQCBV2PXCFfTP8M9QvdtQUJDinH5uz4YuvKwXUvmr3SwKNF4GfhQcJonSY9oj9xvsdiMMPEtc1qKk",
  "key9": "4nN7bd7S5t62EbpzJRFTgjkBnSSS7cpMTCdCBQmPkWb3wkriXWHAcAndvV2uA8JjxDQmiwachDTziPHT6TQ1EAph",
  "key10": "4fdEeMVT6QQxeL9uAyjPipgCm1zWJBoK4DVNSiGuiu67yRyta9D8Aj9VCFDzc4WWZncUukKUNi4jjZXXJ9T4ZKRW",
  "key11": "5jsC2g3xYRF5LVKzkZuJ7UrqxKf9U4wUcepdbkKrTHAQLfqh2mmUigoCGm92f2X2RTb6jP5HPjEDPNUt76UC1NWs",
  "key12": "5N4E2XjJPVekrvmqyo8RQZt3VLKDCUwZtpA1q67UY5mhrPmhVNPBkhXiQ5PoTbKiMrXBtrAXzEAv4UxEE5FBh7m7",
  "key13": "3D4gJ3D787iwJGF7Nk3ymL5aa9d1Mc7FEUYYwanWi88P4aCSfU7PZmahk5tLJEkXUv38WAmZhaGPqsgaWaFmGhji",
  "key14": "2E1D1kT5L6J3PtHfHj98eaF3jhrXEBk8r7v98bMRzi5VQPSZmR1AwbHJWCjRvgmYb51NMfXHTNTUw8jPNQ6Fh5Pv",
  "key15": "3aXXf4C9zD6YrJDKTkeBnPpYh1SHFCbySVwBKEp86Btadp7smCzv8oDXAgsBJLL25oCYupvhusycBVKqihNqz15v",
  "key16": "EkRZuhjzgXEbqPzfhzwEWeAsXnZmZfwghrCawPDQgau79PZvE86fjfn8yWmNpR5vQBd4LbvkE5dZ1ayU6gubzQv",
  "key17": "4URhLPNunt6nQfcy7gpWzFzBfo2sgeWWjWrFQYdLxMeBu7QNdNfBZx1cgmT6kcj4wzpHNsuqjk9P4wKorSzZ6NjG",
  "key18": "2JdaPHcdErrY7hgVsEqNGe4v8uwodynbLnsq3a3P8zSukZHDaTNq2DRwdoqCsgpqAvoVnm58BnaHdHUjrLEiJq8v",
  "key19": "7LpWcUcuVRJzAPmjQW7zeuFTBKkeHKJtbSyhGqnKsFrJFZMZPr5oqsUESbqzyikpEviipKpCPbzbtpUUdAtEvgg",
  "key20": "4gYVGc2qNzpWphsSmCmAiu1RSxzttVwJR6ejb6LdLg8oEsJhQciDD7JP45ps9joGh3hWvRaoS7qinnxQoSLoAa2r",
  "key21": "24AiLYryYWnquU1N34LBxQQ8xY8PazRyt9NjmsHxVgkyQV7qowmb4PWpCXnad4UNfgfP5qSP8A585SH5LY9b6UwY",
  "key22": "2ywU8U6t2YNwg2rFKcQtAguqwrjhvZetQ7kMrsG9H9Rf6osXenbgQJURBZX614Dp7odTUjbsu4iiqDFMxrrprHvn",
  "key23": "4MK9iMbHg2z9PBbDSmLgU6M2NDTjtPxArfiaGCBjhv8TiGgZAGU4haJWnYjabRKd3SJxw5bkJsTvngsuNATagUr3",
  "key24": "5qiSTpj7Zz97zKcGjiJvUUMR856zyvoVSEwVUD2CVLuNMapRKTybnQZDfTbKygDrDat73pcv8aKavgyMXHxnYpd2",
  "key25": "2mhsz4DobaLSfLtrBJc4E6mTXKEvJ6BbWuPDAZ5N7oYSe9KRJWe3qnASJiTaBsYsPui4WVQHCe8NvGhXLRSGwUXr",
  "key26": "4ycoP4qBtTJXUaif9SJzKG9xfriLVCi4QcsgTGQiSQGhfyYyXupujjM7sDuNGUTtDQdHWgK6oKqsfDnqE5XjWFDQ",
  "key27": "2CNNZLgQif8HR9ap23ssWMZWLSJGB78xgQ7SNXPeZ836piL6VVa3ejidRZmFEE9LmBzQALVUHncvtDSXsgpKvCDM",
  "key28": "5HHDytWBgBLFivc18fMkamcLrH76otE2mCEvKKB3365qALjrsyvFpqWwckHwBNRiAsfb4kbRFAwFsG249izoykKL",
  "key29": "2F1cEBjbEAQm2J6VjW2ZvsrYUwWgZ6PCRugBRkgPhYZi69SvyGfmr3NVoFEqHGhofQxqkbt4t92tBmLbf6aZNYFY",
  "key30": "2MGtNwDgEXtQYa6iuBk5HbqSeBqnCxiYb691hLFX3R2K1Cu4ftkJBA5w1SNSvBhGBZfKaqQVk1D8SSz5AeGG8jFT",
  "key31": "4nQ3hVmgSuvXxggtL8TnaeZx2hy8EXNddKaQhGSMV5qUfq1U5Zyq5qpxthxc5Tnxva1D7QgiRLCwyw2ya4hRZxY6",
  "key32": "3jpPQ32FCMa6fLXAXJEoyL5cnbZx3ZdwbEKkiAariVqW2V87obQu8ej7QLQbeYvE9H9dPwBjL1rp8LPRrC6SrcqF",
  "key33": "464NgwmUCDgqsGBzoUYUvRKank4nu8bNoxACyuXMCVmXgUTVU6irZLDga2mBkcTdB1Yj7TuwuZo7xdSLiRRMS6Vp",
  "key34": "2kDLZD7fwYWs5nzcThyEetT3yWkMiUn9e4HrNJKyYft97TS8KxiYLsCKQUaf6RRiiAGfzfijCeXMcMaM1q7ZuiTZ",
  "key35": "5Ys3W6vb1rjDJzWcGaKJdMy6H1DC1MiUgyBTikctawpkhEcD14d4L7BinGhagCPfs18RsAVe4D7yF9qT82Ev8MKY",
  "key36": "213zj991Uv4MvA9bm4SGVZYUmguj5uyim765Q1no3XGPNPmZVdFddKiazwRm2aMN8Lwx1grL5RR6kE5U9rBToWcB",
  "key37": "7nTCiWvkvVjC5HxxtbZeWZpfNz4FvRs81SNah6hweBhcpLouC3i9aeQDbUHtTvHHoh1FcAbeBheTT2JnpuyErQw",
  "key38": "2CiMM9zS3VSzcQByUj4zSGPxP4GuLmbHV2iKVLG3rPkyYPKWgiRtA5AtpQdx6iVtvJ7prBedgjwUuFBkqaG7uWWo",
  "key39": "2ET62oyjbBczn22ytkv4hAiScESoccdiLepBHw3Rn25tMozvPDLXT5ypMuMVURiN5sa5eAhreRbFpxHyfbcXingb",
  "key40": "4vYtq1Buu5ZLeqPA2i8XhBzPWNkDvJ3eKN2eB4Qb3uTmMFk7y4ecLG8wFfuXJbmrY6Qw1J2sY2vrFqayeLBExt1j",
  "key41": "2yBMwaLModPxquQ5aggnB5HNHXbJ9qbLxnpQCD7qSXJmP1znbPFXXLp7fCv29KYhL6p5WTQG5rPgisP9tMrjNeA3",
  "key42": "21BBGrVLJdH5EpP7MwHQYJFgfaqamVhGKkwGzXiySiMZLDD8NpNSMdic7c6bEc5mAJZ2ncUkFaJngCAJvm2F1D8z",
  "key43": "3AhPm5W7sHJmqVFgemWQzog5sKM7XRf1pVPvm9qZBJbPwNH9bsz36UunZtjXkCW7MB6U8dLGWVXiUU4Tcb5pZaFM",
  "key44": "2by6JkCtBhnLvsSiK7iESGs4Qt8vfnjiUwxb3o3QVKSqZWsFaKctUZw5baTT4YeVtgEvEFiiLFFmRto3rfzYqpYq",
  "key45": "521wQh2F3GWj6g35ov814Z3nj1bicXrSsSiVJh8eEKdG8uNJfvMYiZ6z44fSLcLwgxWSsHKDkm96r7S4pf5HDTDy",
  "key46": "4UwCdbUZXNJvKyXmoKbiwadj9HvNd7YKUrZzDiQDqen6WNdHKjGk2ySoQPRu9DkB6PNdMr3G1h4mnH6kErbPWAFy",
  "key47": "4opoAwnFbXnqhyYsGHK2zQVMrnsjMYNxMwEzbVnqWwhx6qRLgbFSyYE246MsYtuSELaNX7rwd21ZQTtPJYMgLap3",
  "key48": "4Q41cG2FoMsEyyDWaYoAYuo3VWNGsMayLxSaZApNBEEoJywCL9QZRF3rePpxMGogVSdop1wJsssjWEY5MPXA5zeU"
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
