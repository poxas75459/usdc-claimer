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
    "Y4SKaoKR1Fv8wM5GAK9mdYBJUYBfNsFnr3R9BsH8gU14GjpmthxtzHCmQc2XTs2V1MiAZt5nrASd2sNAoi5RLph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sWq1A1ACT59vJDdFyxaArU88DXBQBA8rtM5zQy81ZH7LfMzL5MpQDkxBtDARYurtEA6EgCE7s72H69tEjNjurVL",
  "key1": "3S31q8JNFmQG9WXnw5vKc8ngaQaKdyzi6eudcxxH4Ck1Ahi2Js7Wpcji5pP3bLvseTsgEJavMFW3BBXkupco5oPV",
  "key2": "5LfGiH7LGQD8uy89bfmis7Sb22uBRMHfJQ34egooNi6wdyS1yvdPXdwPF2fF5raKCM8NH44zfZgqQDyoFLiXK9Ee",
  "key3": "FgXDgmUvGYcVDegBGz6LCQQjHZ4dKNSpoLTbiA4oxZvmukFKqQ85rerka6Kc6k8uLj41L2rorVPtcgz5c6pu21A",
  "key4": "3ykBZSPw5AWYeuTEDR1wcrPCozqUrwi2jiq6SuajouaCsveTLc3TyeWL8sLiNgHTk3hr485vLWJCr3PyVes78Ko7",
  "key5": "3MCVJBP9D9v5bjwBu7kfzrpb7feYZxc9mCLH919MuHEWXa2oLsFocLyguzZxDTXTquqs3AuWwdSCYGY4hW8Uy6Dt",
  "key6": "c9xK5V9mURZkoDrwrVrx88qGvajKKQefePevhQof5LsWdt8dZCBMYVdZLWyxbdjNyWY7qQPrYBeFRYeqPbAZV7j",
  "key7": "3koN8as6U8tJQehs7hJHdYbzFZBKr1e91vGwUPEWUXgHDcVUEFPcFcDXiU4FTJmUxsoQ7RrNoxCjBLcXELNe6Jcp",
  "key8": "4PYisVZN7KQPdrMDfUS4rGVdNZm13cxoQGeaUJc2kbLtgmY5RQ72vqtPPLduPRb86A42n6vuKPCQa8HSrVdwnEx6",
  "key9": "5ysybo6NvevMBvTYWTA5NkU1x1LVZv5Rt6eDswEZFPuFeo7enmbFmpPYbYTYpfDqAkHS9j6uR9JLZQrFUZCXeS2E",
  "key10": "46kGBSEbqNYmVKtWy1cMd2xGb1oyftAoGhqcrAC8wwWPcpkANNRNY1pJU4s5S8rR2EcdtgTF5S83nXf55hSKCSW2",
  "key11": "2vzYHGEXm2w2EriCzeZnP5VKTEjrCAq8oTCFZNthnYad2oyo5qwsjVEoDmidDeht2tAFvtvCrhYxaPfr7U6c566q",
  "key12": "42maXARSYRm7tLRG6m9zhmfEqk6i4TfhB5x997na8RpTxv2RpLcrvVwL5Djy14kFqwJCXkaA8BiC9YNfWFkAuAXt",
  "key13": "3qi4SktP7APAuhsDYWe6LPFdzJKwwxeaQhCL1PK1Yz4FXv7mM5GPMnH76ggcc95gC5NeqRKh8G9FK9iWZrtY6CHR",
  "key14": "2bN8iqDYYJ4wxiJeGRcbzRzUaMYnwRFNRx4upU7VMxYWhadY34mDxYdN8cuGwtAnNtCGfNJdoQemiuv3L7zBpEPb",
  "key15": "4ihDmGg3frBYiJ4QtQxLXwgcosGu573gRJK6infWTHEiPNXbMzwbchE7snjNMZLk1EuhfCeWVSFbpqEPefLqbMb2",
  "key16": "3fQUvhiWZtZCdKYbak16XsyRYcnsXxArx2vybAEP5wdn45LMuEFHrvjQDhX85ipBLCmtH1yWYGicNwwDfTsYEsB",
  "key17": "5b5ZxqHPSnPugt5hgg2XybUA9TyGXF5Tzob3fRcef3WY95fkS5PrSm87kD3Juhrknv55GLJwYTHZzcLwVjZYh5qH",
  "key18": "efJP1VavbDr6kkSRWtuv3n5Gsp41GU2hZLYHaorUsz1YjAMJYHsuNoCpQNPwFWELiZpcPyLnSJy7zyuC1bYyz9h",
  "key19": "kzvb1NVGMATeKS3m4kGEu9CVEfDgkxPMGBLE5UGArTPUT8ZbZRh3iYHiKzTCNYzdLtb3LqymFexJJ1XCmRFHJB6",
  "key20": "4AqTAtcH29jDFdbcmSwdhmnThZcmT8qchA344ACHDuWorPHf8c2jYS92Nv8ahb7EmK2SjUJbHXZPgeTS23wZzu8g",
  "key21": "Q5j1kMFeUBhDLKYRXnnq79jR9Dc6KPRxqfSXmACtkjhbDFMSevZu847otmkMH7viXb5Db5sQx46vt1ziNAbDdnL",
  "key22": "VGkpA9zo6EVQb4RMUXd62Dy7GzuzNezHpBrPgrUNKsoSX87apCtZfuZQ9TqpqEAEWJAHfQt2QTrhpoJYAPEpG9C",
  "key23": "5a1sN4XrVRiN3LxzAFEGZGf42Rf4tzHSk8J9Yt5hor5X8tqYsDhvM7a6jN2uPFQnoKpya2NfXDxb4YNKDaLZxU82",
  "key24": "Ub8jRAAuyrhXHoPt3bRah1KHBG2cC2wS4EJbVijnP5FgSn2VKBDB1C2nb9rNJpaDimy6TqLwTRhPCRuKTzNnCwr",
  "key25": "59fafCAT1x3hnhdLtno9L2yH3AQ1EQvgsvkBq3rNKmAG8QeoyDthTjNa7hURoP3URFTSMUH3MhA9VCkqAuaYyuWy",
  "key26": "5aU2qfwyYNzCwEo6Lb7wrp4NZuDjmDTaBEfzZuMB2yrTQpUVAnhW4LpC4yrhcpXksaofdBGeHAeWoNnpXMYGsMPY",
  "key27": "4zgVKqZqAPAcNbFbpZv3R8edEGzRDWMExDrsPCaBoS2PHzifww44fZSXCaVSA2x5GmarwEAqL6yckSL6QvtUEo18",
  "key28": "4d8ZfWoyv1TQxo4GRNp2eWqf28bWvm1fzMokL5NpbwkvojcZCgkBxR7EueBrc3ingEKdf94sHgkhn2WpBPoEHpJo",
  "key29": "2RDWEjuDhePATHvuwskQvGSJYJQpCUv8dbef4YKxgCQvLrXbRg8DJ3uEbvNJc1Cz8zLBw5rpn4UL8autwfd3DtUZ",
  "key30": "5vka3jcaAYi4J4HfY9A9wfpC1yn8xnG2FcC19nZdV3bPi5woEHkabpUAbXGbpfvuJPmCNvCoQ9TXE3ZuWCwq5BqF",
  "key31": "3tgS5GpmUamjw4DDZyvDwp9PkPBXiyZDbcLrBpcqR9TkWczxSBdjQT5mEk7gjiN148TJXPico34bhPPdHDvY1FB6",
  "key32": "3Z3YRssJed6h1eDnToYA5MXfAgHSd7YwBTBNP3A63wCLvzUUc4AAeKBNbsxmSyUJ2PimHxh7pVHvvbBNWg2sc9C1",
  "key33": "4ZPmKXEgkyB1AYAoZQFBu81RuWKXN58zEyiV7v3UUBrgXjVSPdSHyEoqGgq2v9avLiJx7KqEvm3ywGd5mFoSMKfK"
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
