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
    "2EqZQwTgmGTbk6XnkHQU9SEEECsxhi9KeHM7PDmrKeaFXYVLv38sLiJGtxHG1pW8UbySFPhmsFLFXBnFZ7fGwC1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nes8pyMDGZh1r26ZJf5uAPqwEikEQ4ECD8DoxJDFAC3jUJ3PhWBtBAjKNqPZRiDpRJhmBwKQRbAiqdKCwMmF66F",
  "key1": "5Ecv3QtymNZbAUVfdf9VJWGeB6AX9uwo8UEMciw59awhmaxVJzEtbEp3h2mF72ssFpWxTWkmopMcXM9kcBRbwroQ",
  "key2": "3yXDF6Usaeo9mXWHtHnfJhqF7qqzGJvhymgsNQqk38od5LiUngGrSuHxEPfWg556fFRsTGpAsbA3FpdG6RuaEcjH",
  "key3": "2r8GQvbgjSydyHkuNd2K13U9MiqAYdrQ2QinXse5vhesPVzJmjMLdrkhyf76odXgpuX43TJdzMqVsKNZpuaJaFnr",
  "key4": "4KnwGCgcDY8V624QzLQ9ACvW8s25Yq1rnJBjkiMCZTQUnRuPiLnBTPdkCp1odU8f17zcFehttfEh9pykqyEcdeqG",
  "key5": "3eFwzBJLf8feUh3bCmGGUcByWUNWCFrCXicoJ3ADjvqoRqfbKpPaPFsbgH1gMGSxUBGphpzTdCVKMNxdFw5TePJm",
  "key6": "3ZXHZDZiyGLntHyxNckLco2JZYWGoZizvuiPzG3P5mqgsiHY3sZn2zq2DyLWVgR1wUmGk6bBc8bwSywACEX1W24f",
  "key7": "59TX5L28uTAY5fq4j1dKhmsrLAXiuNQjwfX5guzaCwKK7iHa3yZP5QT4SLSbzMcJ92hN1YKF1gryXTp6VxuXVgAU",
  "key8": "24AupN9nGScAseeJEjsnJRYBdDfsiZRb5S9KfUXzj228GkgzQRRujjgiysQ5MSPjMT1iYjHzwSHxQtJgtKdAXRA2",
  "key9": "3PRA7QpyXkjuj9vFJ6TZSVY7vcNRoSh45umKpzbJnhag8YX7LXVkmxMM2JXnvMvouiZVXSzq57AKDVqndJzUjHgE",
  "key10": "3T3HwvqgPHwSFuxu4RaLjqjocNXHHzduiTWLzS9NiWfhyxCRMWCFq3AegnqDaaRTp39wvhXXGz685sniLNPdE6R4",
  "key11": "4Siu7rF7oAFUk8DTUQWuKhqJkYYd9qxhB2mnZ6ksXU4qK1e1Tz5JNFJ7VY4Cx5bR9sxbebSuz8bwdvxNGqV5p3pL",
  "key12": "3dhTbLM3X39tt8zRe3Zei6Z4gcmuSs7LD7hPnv9VdPLASxR2abjJUqsS92gE23o1gNeqaW7wUh3gXK9mMAZr3hxa",
  "key13": "fY28M3V6T1BLPNJGNnqE6rbDo67iE4L5hntxcmktFRzrSqsNUzxibxhvWnLmxULEhXjpisim1opqgBJ5N8xtnSM",
  "key14": "3rEGMuFtHv7cLXgdM7K5gNGMKTUJCSf9bNBJUDk3WuqEqmGzrio35UeGEzYrkackZ29MFCdHHo9CjrzZt5hLR586",
  "key15": "cpUYvNcXZaF3KpZ7q26gCxxLexXhSdiaAWLiwZ35p4h7p2NyDVPEsFS1B6RXe3zGWvFW2HgT4zakZ6YU9C6UmHG",
  "key16": "48WvZBpatoXM2hZTHe18eTQiFDA465KJGUvFCvxZ3JfT8ngYrmtvSCnM1h9PkKVW1ftnq1g8eq6aiQQgazYR6z8a",
  "key17": "erpjfJyK37wKFdcNUENrjkKsZ6oy6KsQmXZC8gWLMRPLd1HhmC8468995fnyPDH7ziStcczrBpLHeyUmJcgCLKS",
  "key18": "4zQYZ1PB1aPxKQXwDhMgQDn7edQcH5iGkiUYP98t5C2fUmMFtLjbdtwDKbPN8ErvZd1GUpKsAmnm9LZNzKcAHDPA",
  "key19": "31Z6P6MQ4EJhNzh3TS5miDGc84GGyn9vwkDe37qXCsVf5Z7gaZWSUH467pxoTGERjJavXLXQSQ9waYFsL25HReeW",
  "key20": "5Fgk8cMVkFYSNrJMcv8sR6evjsQjnK37DpP84rp5NNgV7KDg4uGyGHk9ZgZJ28Qusho1f6rnYN2cXG7FCrLDjuBB",
  "key21": "3utmDUpW19P69SgPEfNmE8kggdijNPjDX9G9sPz8pzDXY13EUMExMkn48vgS4pUE2eWDr3PphsFae2hrDqjYctoW",
  "key22": "1CDhEgaznF7LTr2HATReAvFPmo2vYi1qswh5ETEzsUVoNbtdDVmXvAJFc17ATurzzhe2NVeRH6kKQctYtgJJPMg",
  "key23": "3GCjn7NUEfKNJ7E2YmXSWHGRZB2oeKrAikSANjhaG7jJifXwsJKGJZLafXC2FWUuPeYqh3pFSBRhr9tycKNeCrfs",
  "key24": "4N5MpvroxQAr7DFjVThRt8kAMjdopVeb5V3BGhSDopVcq5krWWYnopa6P1Z1M9YwZ4MGqvMUaMw3g4vPUkWvJ2FL"
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
