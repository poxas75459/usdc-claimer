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
    "3sa43c9gcnxQyV2hFUcH9bdcGADHeuvGWfQuHHtnuNuFs8EGRTxWDPujvchmp4Msi8GyAKP4B1eYe7FQQC5H2V39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmAxXUaVgmttjbxNzJc8o17aAZzTxcF2HntYL89G9FuwQqWgDiGJdRLa4om1BNLQo2yMpmHaeACaWdoFtgjuXzF",
  "key1": "2Cwzum77bTPzVLTJex8HLDc9ZRqPAE2g4MbYPDZMyZA8VNBfGNCBJHJUMBaoxTyy8omKRqY2DdtNSvGFNYmrGQYC",
  "key2": "3oLhjxuGMuYA4UvEkMAsyGAqKLWjtzgyZtMwrkwK8bax1aPX1L5Y9XWeJVjLNiUCcivn2E7kgTfYz4PvdZiDKPoB",
  "key3": "pz6wd8crerAe7r6FcbenTA1XjDqzDi2EFda9G6UYPVkdsT1r8krWwdJdJwnmJ7CBoSNJWBmLkjBTsCJqRtHHL1N",
  "key4": "3QdSyKKX6TLmgBGYxrL2KVxwuB2M7yjrSu8rDXAGfPPTUCHAPwUPowCbcPdR3TZkXsLuNZYDuc8UEjQh53YYe6YL",
  "key5": "BkiJ4xxCJ6VT98BKx8azRqRiFB4EMMmj2aM8zTRCXCU8bDymybkU3s32Xinq4ePsYJuWAWqNZzGyswQHnh9TBmT",
  "key6": "5r2s6NXrfb1t62U5H5fBWUexPRHZACn3511z3GWMjGpeVqY4pa6Vtco2JwLmk22hdTvj3TWj8cSg3so3pRHtcKrC",
  "key7": "4qF5B3eAHZp3FUHRVuqoPE8zvgFpVjtKPcYfRT8z2bj6NkkYPf6TLxaRDEg7aTQxauP6gywtssL5k9AS7j2jGAMz",
  "key8": "4gQqKjkPPrPWbwFCVcVWUqMPNdFMajM8UWyUYM2jXa1EJCvUXi1SNweMCLnRsGGKexg7bz9GyjE2YKg4EjVbBtc8",
  "key9": "fDhdLVNe94q8uTwXxyerPEEm9qpNpYX1mphzRA3LHkjv9MkP9Wm1CFGg7xgN4B6tyV2fjNWZKVNTYEdPpLPqmQW",
  "key10": "4TrnZiG5NcSnsQph3LpsHB3g3dkzhGZ67K5Rb5VUCGXqpdYCLts1fFFM2cjm6uK4wkZ4Wd1TEBWW7waXpMLSi4no",
  "key11": "3rYPSnfF337gFMni2XAbsdrTYsTU7fB9ETnJQ6kFZ9S3vgtQWu6KB7gNH1oAVUgK8GemNUkgx239FXEjkBSX7dJd",
  "key12": "4Rbrr7nBgnprBJ1wg52Ad8NYTYBWifNmCEMWzG9wXiEH9WqafCJW6E6smHVoGqGjtgfQ9pxKEKGUwigp9mdXgqQe",
  "key13": "r2yBoyB1oviyUyzR7hk7GcrdpEkcRYrztaHg3JLjrVCvA9AtitZPfnUqTB9sHvf6XWdnUaSJ5nPMnqjycgxBTuz",
  "key14": "2zwJmhJ1uA3GKVAwsXgVpFoP84SnyddAVYvNkj543Gt3DeR4Tr1gS59AziN9nj93SyZefZRSju5Ch3P4B1G3wuqp",
  "key15": "5RJe5fTKgKecCwkJsSRcUynSVDE6beeLmLgACrCsCV5khK7URnDg2dqQcRLR15WdbNka2qDYZCzV7DNvNa7TPuDg",
  "key16": "5qThwaQRLfvRMPoVgF5uro5mRBUVvU5AYtxPsKGXVNeYvjiMvcP2ujBpNt9mSrdmQmKj9RvMMCbtAZ5fY6TJNuDJ",
  "key17": "37eeKctDrctFYyvKh9eFK2yFMWR7bj4SYc3aEzZxdCPoC3KZGeogBbGzaZMFLBJDdpsETdG7gy3FifLotCL7u899",
  "key18": "62gNH28gfBAZGqWmaBy1f6bfYGgWX8baan5Mx97qns9Pap5FqrHuF6LngJPT3PHqCVwe74Q9NpkBEqudvcYJt4uG",
  "key19": "2CaQKdcNwJrW9qqaZsb7toTyw7asan2QocFQM3fgqNpZqN8dufGDGcTbeVGmTDMb461VbXKoG1TM7VJ6QEw18dcb",
  "key20": "65fPPNtJzSB8fwidxckmxqs9AUuXibxe8ixVZkkCMfA4BMJFCd78SAFz9VpZnY7xjiEKHNobDKu2dir4NyN6E6A8",
  "key21": "2TUaqPBHKs98ZZ1JTiQPemH139C2BSLMP5SXKXcdxQ5AcmChA798tNYnCzj268wKuxs7Hoae6WejjNCsvJqJn19w",
  "key22": "2iqi7bdchdFiwQp5Z3HxeeeT6appZxyczNBCZsJeBvdwfBGiSUkz5dBVLXyw29BhPbCJgfMQXYvXZUjyvLymF1uK",
  "key23": "qVfwzn9Mo8ujz6ayN161Tu2s7baSPBGGxZh4Zv7kFnDUcHrkjhrzJyWM1MgaNoSy65fwGDn2NBVE2Pp9wvksMMq",
  "key24": "2tNo8fHPTYxaCgvZ2spHKpD6a3ApUN9YeKxixPZdcx6XiWBJtZgujq6xUdkkYJrJZPu1T5ihEWL7tSmQcktzAJ6H",
  "key25": "3cttR5N4y2bPySf7HhxgrMPvcxF8PN6XHL25FiZWzAY7xZmzS9fF2qR351V48gAxcyag81PkqzYu499qRdz9ZfbR",
  "key26": "49qcGAzUB1PL9zd83UsMQadQpE2xDC9bgtymvDizFW8zd9Jz9HJh56VUEpsU18C56pBpXFiMHTZFe8suJrJv6N5g",
  "key27": "rw1vmyTok7ZTappDkhbUF4JQThx4GWmQJoTZb9ktyECn2iwmMU6sfGuN3SzVe3Wmuxymwuzn7WyNsxFJthA97Hx",
  "key28": "5JPAjcRSe4yQVwXxRXdsTJFwZJBT1f9Ao25pkVYjdre19LJnw1ZCHhLp9DRN7AADD1L3Z6HzfzaiqD56noExtE9r",
  "key29": "5qeXx4qfGapuR1YSikPDqGWN9ZDzZfTKXPQtHXz1vd7fL2bjd6Wx8K84sJ5ezDYvA7t8Yqh5L7Ut8omp4TFNBhWg",
  "key30": "4hjXC8meYhYQ9LpYccEMt2poXamWAYpWz9ubCnb3WugaVJGSm4Kn9yKifdMdaNM6mEqzvTbNLiibLNszJLQUWtXe",
  "key31": "46fS6QtmFsnvuxuCyjhkyLm3umi38dVKJ84hnmcJPPuXyxjxXAs2N4XfBLRZiti9yN86MeCCaE1V3WzHg7aK2pTz",
  "key32": "28x3upUvVrosUGPFXzyrjRPtxtYE9CeDCaT6BnK9oUHHUrxWHu88zmJHr6FXa1p57yZrsM9fduecvh4KCF4trdUR",
  "key33": "XvMKqKnrYY2Co1pnK6xyD4Bv4asq8j6qQ19h1RifDdFuh6dBXhEaBfvbDdAnGmuyvX6UgbDSdB79hcbPHZjLF2g",
  "key34": "2sAVMi6oVBwmvhK7qaTqCVcpHkvWyXo2VBQbgc4N1t2LhbuxtJvBNvfqgicTc6stehoY8v78ekCnnpn1VSsBCXer",
  "key35": "gbHf3rkDEC6xX472sMmq2RhoQF6fcGJ2apqPdmeGixqqvLsXwubPSWFVtoy5qgx3kRzPsxsTWwg4RQnUe7eFFd8",
  "key36": "5Q3ZH2xaLQ3GPwEFf8649hfTQuavkHrbobvsrgv6mjQVTtopf9Uoj4hJPnNrQ6uJvQXkF3LeeWPme7zhUZNu1Xn9",
  "key37": "5Jp4ouCQvS7pA32Fny53ezx5ugJ4LRBr3wnnnyg6gUnLKnnFnt18rqY1VzFc6GH8Hya4HvPToj5qeQSuKz7To7zr",
  "key38": "4JWJHhNZH1QVDuUeGDgJw2QuZaUmCbAFjz3c8MZjGhUwcq3FK3GfgXmeUidMFWsWw6jkWE5y7NShgGzmCjYbaAKh",
  "key39": "2bhenp2A6FfzeFVNnRVvgsieYouJRSys1YcsTixDNGeuzzK7qpUAoZsDxAbFnnUHaYPxXS85H6FdfBYtKUB2sSGG",
  "key40": "LzXwqjEvss6mJnVHnHgs1ibkHM97Xw82g1gom8iQYz8qZmfKrxQqXLKunM9NyhF4ijTso5WZcbLgK7d9q4kfh53",
  "key41": "22uN2ZEPLBNPriNFFTg6s1KgrrZwjKqhZWBBpWrmSNhZ2qsrsHGdbpdcZ78hBAN9xaZNUAmaBywKRT92jckCin76",
  "key42": "9FEF1Gj5XSpjBpDwF6U2Gh8WdzN5XcY1ACSmaQZz8mJKEjvm7XkVzEKrRWeUFSz2N4t3xSifrqpDnxsqLavDBHF",
  "key43": "269PQmihafJQ6njGdVx2F1vbDNDn3JugehvuaiL5cxjpoSLrnvyDgatziQNrLnEUPdG84TGYmWir2owYMDqrPyfV",
  "key44": "4nF1LDZ6LbumXJFyeJbyyrz8jAYCbrVXhhKocGvpd9S49uWeKDA52W82cJVtp2JAuPJqKD29HvVPnSSjbXz4U1qw"
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
