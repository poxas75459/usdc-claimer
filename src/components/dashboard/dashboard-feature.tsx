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
    "2z88smmKgLAxC7fzrEGxkgH8Fua6dPnhsybGZ654BBd34aZUNhcsPDKWWojPz9mZ7Xoxd2QgoDGduP9aNgcXqkoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YCmqktq2eq8kMpdnUy4KLtqVhEBTGirXpucEAuW5eCtByVFZjHb8BaQVwCHK57ke3M5XZ73R6qB1W4G6j5pwTAQ",
  "key1": "XKB3LfCEKYebXZ82WthHx5bx7FJsKZacnZd9RBh3Hu82t8S8gtJeXMZ61vHrsQe9Ay8NneWBP8mwSDme1RJ32YD",
  "key2": "3JBt5HmPRS7XawApDgHZhgVeQfL2QeqaUpioYpw1N8cigMDKbJCobpgduUfYWMh8F5SxcC91geYGR5Uwhq7TcXjR",
  "key3": "3nsnDaLyG5cZufbvVEVS4nhMVKPbEcCLu2K2uzgFsn1ERs2QKFM9oeDLAj1QRfJwu7dezHXBH338pLqMSp4s2bZq",
  "key4": "2MVAsUe7ED5ZmuerQVQFjkt9bSWZ9Dxm4ySCFj17Zoz4oE6huZEuJjcfTXPUGbPHgRShb34SPKNBnmYbXTsuQQMQ",
  "key5": "2qqKbVYuVaxGrfrLvwxQfn1Afh8fWXgK6UrpKDfgYi37S1McjLzk7FibCXg3By8rBVBghVsGeXgkpi3NKhikgoMA",
  "key6": "2Zorvqx3f1vCNMk2pMwCtYY8W7v4WunoB4pgVHQqZnAZs7PUHTExSDXGeJcRAbLwSzgFtzBjh9NPgFQXTkrwSv5H",
  "key7": "3bR9Be615Gk1TMYm2aGib3bnXtsznEHesBUgXYo2yV6u4JkwBd4gYvNyQjnWpieGQWYkPY1VvyeCPHxRHUDTFj9R",
  "key8": "5yUsnkPQ93KyL7ydsYkzGnempdCktp7grwrAChLgLzkhzqJ3rQWxRXYwtf8DZgQ9kz117a65ZwFaLABbLnuy3v7L",
  "key9": "rkhpiPFJ1v5eRgyUN2rqGgbgJD4PHuSNCCAUesJefVPvMcxH7UgJB3mND6PM1Vyp1GRZjGBCYP4odK1cZ8nKFKU",
  "key10": "QgzFxoTj4eM6Wnf9nESar6g59iY8CBPD4qXSHwrkaJtJrP1wKtSgZHppUyt8RwZmJB8jjUKosRGxgFz4pyUz8qr",
  "key11": "X6ZCcq9x8WyxDAER5555YqLbX2iNCMEh9FTas1HigHhqS3A9gXeXrXxdHWZgTg2GKepxRSu2EJugYQAk1v9dXVY",
  "key12": "5etP5FVyeAj53qdJN8Xv2UtefDLyV61gQ9DbGuqkAq9ByntBdr3LuXHBRMUDtm13mnpbCyMuzK2196aQs2qbFeZq",
  "key13": "8wivgTnRB3hEkYJM4DgTg8Mzij3zjvRKfTYSAdmQthDno6GHmdedGfB3sPWDB67zEZF1oGA8faYjLatUKwt8shX",
  "key14": "2raJqnAB3s8g1emoFQXERtcJbht73qXDSmxH4swcB9e2QTVG376niyrYanvAxwaxxXu3SczFHRcZVaPRzVVbykUu",
  "key15": "3po4ekAg4hrXt6ePcWtxkuCWyFhZnA34dKWF4BrmzzrwdxDFrWfJz9Y6M2LYBBjgCL1KR4SZkk2v2vfmkqVAKJaB",
  "key16": "7fHKvbrLubrgNYXU3mdEnRiqHCd9mCzPXFgH6SYWTbQ7ufYNAgPRkkCSyWEKUPzLioGuKvf6wHLpxrUBiRbQ4H9",
  "key17": "2LY4mD56fXET2sMA8zjtgpTbjJBYuvcHF4dtzvxanxdj54LMLNgVoE4KCJD4taExhGziqBGk6ZxWqF5WsYQxu1G",
  "key18": "5BTeuSdqwzvrnqRFtEtEdTWjVpaZp59cuDangRkaCmQ575Q3L5v48Ncgk3zTt4nvRNbSavBzAbcAXwj7yRcWiR89",
  "key19": "2T57C45eGfVesonb1in34SE5GgsNf4ZmzQafGFJ6wG7KNWrC4DXhHYACPcyL4whQZ887QwxbArsm58EczWVphSrM",
  "key20": "4W1jc1xuQhTi56rnTupchuZNDBHRPy65P9MGTJd95E6iGJ8k2AqtNQcsDkYuMYfnbBdvsqbPP564K4NLCHgRYE2r",
  "key21": "2E6gZ4HiVRVDtVkrUQ4KmVTfkvtfoBDPwTjis3ECEbUGB31aByXU1qHinfFK6kqHgBe9aGkdQKXEKYbYnehoUfCp",
  "key22": "juaB1UXV8RW22sEDMEJWFsKbtBX5AxXXrsfb1qT7qaYRg7uYqoVRUPsJmQQycrXyJ4pSus5L2Zt83KhgCpNtXCA",
  "key23": "2qJgVmqv3bJSsjatDQxB5Qs5CcreznAqymYaX3Ym78QVpNqghz9rdjfYTE4oTpmAtnbp9cFYKWUCSphbymp6rf6j",
  "key24": "28VUdJiDyRusrCZnCFugmem928y1arUpLKWnqaSSR3UCqTgk2qdyDCnJ8psKbVVaueRLUYaiuJPUHJJKpUT7dHYb",
  "key25": "2HqDsk6RiQeBynR5yj2hzUxXFnJ9G4Ye16GTNZU3V4oK9U7pN9FRpy9jz52Gmpw3U9kNrTccfpYNtXLxogBo7HiR",
  "key26": "r6bEpZ1iSrh3cJ5pbNHPEyN8eWzPdBHL5riJr4Sz51xUHVJoeZH3P6Nj63kbLZwGNbtLTLEJhn4JeeSMd8CLUJT",
  "key27": "4EyysPbTCoKGDrS3ujgN89hb1fsbCNdRptwAu9BiEVMVAj97HKpLTAkm2FibUFjMjveVBu4rYuUrBUexnUWZSnU4",
  "key28": "2r1DdCrXKLPk8SUcsYriqVJbVoTbjhkyN9tBQHU8tgFyjVdv12RKvbS6RsZoDBq68wRyw21Msq2ha8JkAVZfuCfZ",
  "key29": "vzsQqVatAcr2F4ypyf6E5KqnHTjRzzZ88gcEJusV7b2EHsxN25ezC84evg8s3SusyC4awdo6DacvJ7JryNLPzLd",
  "key30": "ae5WbvsK4SwD6BmrErV2rKYVygFGR518XUYzzNyN5jeLDKpe9JmQXHoYaKv9bUh7YJyPAHDfNAEvxezC9MtCPdW",
  "key31": "35LUgtngeegt8cRw8vA3PzEYr8SCrTnoMSrC7fxoHagQsAMh6tPBkz1Ehy4SuGwpMuwtDaRz5boaVY9TFuSoqddt",
  "key32": "5unPqWDVVzD6m3E16FUWGSSrAN7Hme9ExL7s3ir6Qih2mem7gtvBxDPSLdQkuRzfFyCDx8ADerDtwUNkxQGszjHR",
  "key33": "4AU3ZnM9VwL6TuLi3MAEdiDiVUjdWjWcvzwQMeE6tTmYyLzg5535fG43NjCAjAjAek65W5PrvWFGai2zvfxt66os",
  "key34": "51hAsHZAZS37FTBTD4MXoYt7CUZpMJUZ3RsTyFrypjMPgn6CiTo2ofGehrY2LrErkX9wtDmzirLLHe3bmEJtPuR9",
  "key35": "3JKNeWRckgTi4ChsATi3uK9BMFKHa3x32TrXACYaDtD542GtKf5ECzy9b1Z66dpaLqLJC1T41yPATzEk84Mjs3Eu",
  "key36": "GHQP16y1EyZEF6E3wYw9W1nrF98z2U5USyFP8oTsjuV1ncGFBM39gkiEDzHtKv2arVdoDg5Ujp2K5KwhNHTPaoC"
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
