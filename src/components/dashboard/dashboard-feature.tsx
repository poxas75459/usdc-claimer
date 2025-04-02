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
    "2KfPWskwEVyg2XgK1tRDi9vvsAaorg8h8fzUe8N8YgSqiwggwPp1omLG75rbeKat2iwdg2oswS7MGvWaw3m9EE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49u3T3xzkQBogVtsZ9GsRFbdgMnocsrtZMQrjG6kVcxU2mbtsghd3gmNypHGXyBvSz19wAHu4g1c9LhjXuias6oJ",
  "key1": "4VPvoAsn2s9mZtDFpyQBQdsDSkS4eijH5zKs1KaFFAyTxEWY4gChtxRDBMsJhoseMiuQ77CeTftGwroH422Pabe8",
  "key2": "3rL1rBVt2REiRu9nFCFRHPtrDTXqprNeog5QnUTLa9AvvLb6J6PHkfkfuh2yFaDiTmUmxxwS75NMvu6cHpHw6yi4",
  "key3": "4m2bppMUuTwWBM8NpDmQM86qFQKJWx4QBa4nCvHHnKih6oCh2gXYEXACYJ9W6NQXJss85pwSBmbRaNxs2TjLRU28",
  "key4": "2msbbLdtRni4iW2WKnakq5dscB6mQrQFZYMTr7odhaExiZxXT1Rq8UuCa9s5GTRq1mTaPtXSfYdpLPqHsFQDLhDP",
  "key5": "3Eg2HLczhoCVMqi7uSnHXLvjpqfAFerr3qMYR69mRcUiz5QYUSBfXbbNrWGbXE8xi97q6VjihcjZk6gpdTnDRw5N",
  "key6": "3G2peEqdGV5BuYMbSrtdV2YktP8c3bjHwbWuaZnWFyPGvtXJxDsYp5KDHFVh7UevnRbLswQogVKSSNztfQ1Ds7jg",
  "key7": "3JoFBQn2r4NqGVpWfwMcGSVM9YY7WtWemZYxcT2ND8TRv3Dm29pz4JzjCXa5y5brhFQaZWRJb7SeM3NGWAMZwRvm",
  "key8": "3EBxLg8HLM4gzByJEEVRgD26m2SQsYhv4uBaWj1Y4iS6YcPdfUPvfnqWfHBTTHt3Xu6mD1W6vEArsxJexAPToNxA",
  "key9": "5td1EUcrvfHhszY2BPHTebXjCpxCYFa8LBLDbxDxioBz4pvF6gVyEqRkrdePdUu8nF5M3zoTR5qQBGDodzeYsACC",
  "key10": "55K4WoFFfcS2UYnVze6wmGw2g7diTLUF6ndVQw32cHnxRtM5iVKin2guJdbE3NSbFViSeTaCtPBZ3kmxLo2hZe94",
  "key11": "5vGGxRGPCE2YdUzsqnzgrpMo2gSuxcpwsxtY3HqDcRMeuXj9L1XbS6hCTttoZWJjzfaSZf8nCkqJTkbKYtV13YQV",
  "key12": "3zgwUVtkqjPTW8zp8GxmFgfz98YjhhkcnQrKRoqgcj7TUVqjhyQtyEDrSuyr7cXwEQ7QXPsduLyfYczAuBLNk3Uj",
  "key13": "3mqAGLNzAwLvo659aQDeWXdfJQKu1ucHncVESbz785J1QAE6yjtqVmZLRMsWqTwL3Mk6YiFH9fNYdrrqrJdQsyVj",
  "key14": "65oH5wcU5odBuuE2Dy7wJ8ARsnHdFBGo5ckt6iJBAey3JjbsXyxLx75nKU1Xtvseeq2LsQGUHpYY9H7BMeeXUq5J",
  "key15": "2y2sRoXS919nJ4KRRZ8VnUszofXPhKc5TCTg31o4n4HCbBnXfZV54CPLxyTYbbxBVx752stKZP6c7HkEbgbgRr4x",
  "key16": "5xasEqrsfWDoDMVDbnWEPrgHcsNr7dxqeWtQbR3bHRu1Wdys1jfn1nnMo1RnNz9T1JJZgKPY8QDZJ1ebGEYpyXz4",
  "key17": "5D7sH8Yz7wfZp4UmmHNUk6TDN9vko71scky83saUVdVdnAskprehmWha9H17p7z5G5fWnWfTt1d353oY3mQXyHzc",
  "key18": "X5QRJNDXncC2fVwvq4ufmzotXwjUppHtSVu6ddErt7qQTuXbb7QFWkuwexfnjXPp8aBWiaCRxhgRwdYKGXW2HBU",
  "key19": "2gtMXyYsn6Fq8VmpJwFcJCaWU1qcwiZJfi5ZhbabV5bW6Pdu2Csmcc2dzpczr8MJHyWvjAvNGdMJ9ZNkQUyu73yR",
  "key20": "4y4qZ7pZ6VNrPfDKird2zZBJAkfkKGRxYtGCDmJ7uTbZWejfg46nMKxP6KtA7G3SAT73zPeWUWFRgG1PXYbsnSyL",
  "key21": "qc4uw6HqwP9hH3yTfRTwZQcjxnitKub8dVseXgJPUPfQX2sLT1y2oCvwGA1arRGjgitXge6RSA4RaqkRSkQGgJ9",
  "key22": "3ZE4YbGAt4M9dWNZpqXCG31BDQnUVRvwyTJcHib1QnrNoxEU1BWRmp9MNfbvdna9H5RKbauxvstnkbob5z8Mr5vt",
  "key23": "5wWURFFGiSU6s3CEgUkV1X1rFmuChKiTiFGznENHu5abQQ2ivofuQMyGqp7HDoRLUFUDwQwDAJE8a3yST5z6fSpw",
  "key24": "4frZmqHMjPcxAfxFCsfNvfd6T1M81ys6B5dWxaPkb7LiaS9QoEHqsWSNaGF2UhRmwueDRi6BWW3xoT7enRHThaS3"
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
