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
    "3xzEqXBNhXHoJACUN5He1zS7FxjQFyDEzFyv7XZEMWyxMFke1sEaHv43Nf6o5LY2Vt25PUkwqgJTb3AH9XNFLjL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXEwR7kfzZBbDeZo3MGjRHMYSrv5BFNxBMEoknbP8zMQnazM8pZ5N6ASZ2kiBQhQXZr1fTv2ZAr5pB98nHrwyEP",
  "key1": "5ESxupExz7kUgfxEks41q68mNMAX1RFkDiRvRoD2Ef33L4tyCf9McdVo6pK2rFJTCN7QZqZTYnqgUZvs2Jyy8njw",
  "key2": "2n8c8GTGEMrFQLpxf1WyM39JCaM9ZWVaBHzZESx3ADDB7GHEN84vPYvg5PP3ScnpRxZ4YcpKAcZZYZsqgat38Gfm",
  "key3": "2WSJSBSY9RpvtN2xVxYb4Hm4nN7jpbsWTBdH7AGo3QZNjQgvCKbT5byBBfNkUcPhhBzc8oUxjQhsdcoGYzVG65oc",
  "key4": "gN8kfvBJWjrEsG8qCK2LzpBahFZ8knhQ18iQsFuSyGzvoJ95jUPf7ykETy3xwvFj7uEXeZMExoAyubzL2tPFs2c",
  "key5": "3NMC2mMKT7Erar914RWK5gL5G73c599D3oHHkkmADuSvK1gXn9DbixAFCoSuGLA4KGXz6NhWfKLfD7tZTPBy4s3C",
  "key6": "2xyWMVq9Yhi75mvdJH9CsTmitzpUNQo5Bo3FZXAioK6YvWQj4cYV7atHZkKbvXuSySN3gf4iZei1bRa6wvC9aZMj",
  "key7": "4mhp4FcDayYr9swiSEQk3ueoHetGS3xJNzPXWxtmR97ohnaVo9xf6frHvxM6XmAax6CuiC1678QpGvW1JWpy8c74",
  "key8": "3SSNjMSUKVdL4EcuKM7wad2neU9GdiG9uGLvNpqKb5P7UmNcBFPLVbpCuoBoGYMmUsuaAxVNTzfVCB9yJjQacQBe",
  "key9": "2cLWDgA69N3btuH3ph9EG4jbrAWk3EEWjx2SJadEyKCipxkg9uHdvw2Du1fi8qnnFdyvaX8NsuBAHr1LwPUKfNc3",
  "key10": "4cu8ys6nK1U6Rnn8csP7MtFaiPh9vdVNrQxYGqnzFZQUikeYed4TARo8d9uqxneGfpWkUaMXWmt4LDv3yVntvdT",
  "key11": "EhsTTxwNB7YACmkAWJRTaQRhDGQzZrYx8BDGHTSHhjoKqapmcAB7Mnztsk7N32PnaZoenDhaYfhcXi8uQkeY4bW",
  "key12": "41XPW1fYrjNtmAN8M5ri2xKLnTwnSQT4k26uoKsLnu7XMtMZfJnidWQbinKUq51p4CbrfEBCrDGTftY9Rt729HwX",
  "key13": "4v88qwEFk4fm8J6gh2PM62vFnbCHEj3f4JUuMRc6dRNc3uKWNevnKjao4kTBsiz7ZxPmsRfTgT6Sc5DTj4UXoTz5",
  "key14": "25E8oDumWJYuXeb2j5yRLL5CKQ8TnYXPy7yCeSC7CBjWZCxYcBf4kkQNp6zDSSwvxNDiZiwmbormN1aus2rEKzUs",
  "key15": "5Bqg3G6TsJnkgAALRJ8pmXC4AMka9tJKiehsPXKoZjuXs5hFBHa4smh7g3CiZMPAgRaatPkYsqzuBkah3oaczmNq",
  "key16": "3Gsh2oHmnxJTqdUvUFmdRSUghzFooLPs4sGxJdH1b5QmBh84RSedakxoUHAFcgLrqzK3XLhrDxsK9DLmg6PmQFqf",
  "key17": "54A2dK9pHVxsawkTcsMNcW9WfL4sTNu4ycLXYjsBEBgdJ8F3Vx8kAZbwfWf5xc8S3pas9LGDxMgpjH87nT9V2GJb",
  "key18": "2gSShMp1GLtqxxrG7hdpKywcN33Z5tCkFKb98cJUzVP9rCR57hRe97KDE1zPKLMgExocjBFCbnyQsggeMfssJ8Ag",
  "key19": "2iPTvXDbYyoS34Vyobo1ehr5WTtExT27r1o2CCw7yMAjvtgcwJzDQX4ubYxVTVF5PJ37wYssneeFifCZn4QVE97",
  "key20": "57kEbVwuC1DviUoz1DnSkQvpussJuEqKZ8q9Umz9DKyTMTsn8KM1ZSTEYDbtDYKSCaeKyXgr1peAqcw57dU7YZy6",
  "key21": "zv1iB2KAnkZN4fpxfiJT449Qt7zPHwfXqyZCdPmzKB9PieARJVBkiiv3xFLcvGqohCLysMdATCixVScqbNFN5fr",
  "key22": "4RjPqGS2yMnoeWeGsstQZHSZ3qCU2HcNEDBcaocyT8GCZ7FErpj9tBg1Jr6dmW3XHDznjghiC1UxhUYnDEjn9yCL",
  "key23": "4hs2Ez9HSzo5RHSUL1M1Akxg1U2UwLqSnhxtqYJnZ5D4PkyjEcGkVgHf4dLP5y8akLYnsn3ZnYAUEyFvZRoXTfoA",
  "key24": "4QQiNd7Rg6iJQhSbDd1f599GK8dChPbFv2aDWQA9wrnrkMDAMUKy22MEyyK1nfaFZB4Vxo26ApxD85GBhXgewF7w",
  "key25": "tZcHq75WTKbRnhj48ScGeHcaMW2385Yhk6K8gT7wD1nF4LZwQ4rmFCqYgDyBM9ocY4Y4CmaeeEnMxBTA9TBeUZw",
  "key26": "27mZxzLoUn6mersRZ9TbtgommyQBkqpygH34qDgACrXx1mon3Sqovxe29L4G2AuqYKNj1urU6hNgP7YbqHwzmbCg",
  "key27": "4kKsEsPxmYyT5jxe9miKhg6Dk8j8nhkY3m3wJ989yA7Dx2vJK8emA8K3ZfANQg2Dhhatvdann5r9tFvMoJBeUyui",
  "key28": "5mSsz9TEo5oTy961ztRvVem2bRF3t1wFDsuPdALiRUUkeGukjfk9qBmPWjfZWq3VazqdT6RCsp4bBo1x3vbBou2n",
  "key29": "3Q66mNqJpd2mXwEUEvycZmz522tx2BCxrYL22K3P3HRjVgK294y8WRHHGUBjTN2YXH3m4h3sojJ72kgpdWvoK6FB",
  "key30": "4T2bKQj3wKrQ8mPS71hUnsy8K6kjwSJMbm35hokwUsjizD6F6e69EuhehgG6wZqAPqZ9H9r4NyhsfujaX1QS5K8X",
  "key31": "398g9o9YGo2fQ5uv6gs2k8GRDRNYFSCFAQQgHQArKA743rrPKxtphyp6DsgKDykXznwC8wEdS96JyC5rTrmDCDye",
  "key32": "5EE5g2wL3wdnA27gApQMemZQixqCgD7EkyUGYcSwjewT24JDDQSrUtA54rn1RSM2ankqJXo6qSoRcFrZV7RJe9m",
  "key33": "67SbJmipPMANtevsmtFH1GoUiaFcvWF2wAfgkHhj4DjXQSJx88mQfV7zQkpmZNA2wYvBsJ9yc3AnuwYodqgtmwsy",
  "key34": "3R6z8o624mggMZrJsoJvinHggyaq5TYfc4kvkpjPqMefPiXp2WSKmWAaYqWZp45WKotWiyQ2wZdTfJBgMVq2bduF"
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
