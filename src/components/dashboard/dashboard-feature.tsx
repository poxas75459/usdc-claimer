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
    "3Q2sdJP1BWYwtb8R9wX4TztFK187xpQwY1Uui9RHayeNHTrbwVy439kH9Jqofcehmpe8XgsWMa9rVSYCvBfke49Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juuGhjJKCmN5EttLc2oQ3ztibPmpbd5mkxofQg8Ui3UD3UV8ahzRcgmdXqYMhjaejZ4dqWaSUv4o2doHp2vN8rZ",
  "key1": "3mC3Hcx3yoCcWzd8snHG5361kLnKwb24uWjk9TkjDp68AYXFbtuytmZuAu9XAqDcSgQP6vQLEpuqqSEqKACokF1K",
  "key2": "4uepLqYArU7y7unQ6ARoAQBvMTrfBinQZ5tYJvfqoj38YJQt8CwzcvjuDnUX3PMkLmFofAcrvmaBzSbp1cVBQBLC",
  "key3": "yMSUSqo2n3cKagCpSubAkRg8Tq7JNySistASMHRPq6XHzY3gC7RBU9NG19QzKqmivfiBaNk8jPTRHfqU5sUmNAU",
  "key4": "bhaBmnZc2dVTxfbPV9U2u2HvAU6XSYADdQA7gVeMLeL13zT75nT2Wi5pp34AcZWsgB12zYfFSCj2p6cMy99bPw3",
  "key5": "2N2jmJPJfMojVEMUz3AUCdXRLCnPQ8tgM9XFLH2KBciVRjXrwBL3V9byCAwf3husFXih9dA6thH3LDqXS91cS9N8",
  "key6": "5taZDa7vaxTtKtzJqmHUmexTqPWvJAFyk4fYJqZf5DTPc3ZSAWw8Z8A3Nx3u996Ee3EmUQEzFftNRFQ5jU5fjkj2",
  "key7": "3sKT6F8ecjNcBZCU9kXjiUnUbep1MmbdiSha7R6BfHBTZupJzRN3uJDEN4Pn94cot8LmvGFwtX2wtWBpe862FVyt",
  "key8": "4fVTV6ryRRMwbio8DGnRGFBsxeHh8xXFU5m6bCuBddet6knoASPCP4tac6X93A9LxSqDMMDxUosd76woubtTVMKn",
  "key9": "61v4cq4yj4oD2oX2Z5SUCYqRENpKNV4TFYYHmKbyEPHFCjq73UAApdUDxvfkfPTbBAAo6RHbbxqPGCBbeTwps5RH",
  "key10": "5Smimz1McN3E8qJDey1ceVuQNqeBnv8pyDrLboVswA6BzgSKJowxRNQsAmY9NbX9KVPtcQr5BfLnpN4pFiHPhbse",
  "key11": "5p1GDjkr7sP6aB9xVhpxYwkpaWuqdXa9wyBfvD6c9kPJUZgpnexJFdebf5AKenShXSfNqyb5dxxAAGBWd98y6GR",
  "key12": "mb3j525dAi9moQc6xeAJd2EjbbEcK8CEwnM5MfeLbYb3xyjnAha543euy59MUCmP4vwbva5iRWmxTEcd12Nm5T5",
  "key13": "5xFZkK8oMfQXqKBn6VRBHEELXyZiCtQgJ9XSwf339z5dyeueP8YNBRpoSVso7WwShwRN1DvtYZULVYzMtGnkwF91",
  "key14": "zPnpnyqQCpLZw9Yd3pWp9u3ps1zxCpMDCZoWNwcpzZyaDVvaDtdrN2ez3mvd64dSawvp8MSqDe2PFsLVPVHE9wr",
  "key15": "4ykkP4j1v12Ps39XHreiHYQjYao8rDrop4SeJJvHutaEFrVXsqoSvRjY6FBnRn43PZg37jms88vJztJwxPqmrvgg",
  "key16": "4mJxNGWvV2y5MLR91jubvpiGP4W13v2RGcHkJsBJ4aQGpgiYHDNtmsQ2nLQTRQmecTys7Spern8memRRotfa29Lc",
  "key17": "3PAUZPzvDadtkEzP7HzL4UUHxywNHawAh5bFA6MQXjgWxKvtKwQZWaKn1N4Q5NSMWRyv1ujxvg3Adpcx39k73DtR",
  "key18": "3XLhMLTWUT1iT7o5QEZ5vhAVgYzz5tx5m67VtY26TibLjXitJMkMDEM2RzwAovBpvJqR2m22EfVTodwczBwWmkiG",
  "key19": "4VMH28L4poJywc4nn2qdRhgUyU2YzSKo8QSxrr7SZkwBwY7whw5DDvuG91EXSp1c7EXeranpnvyEKDVbPQyyyibk",
  "key20": "AGqg21LTmqVeR8nBx2rwvJUr5V5egshK4u4XdSB4ZG73W3DwMF5je37EG5ALd6dpBdw8ZngNF7xi642WsMSUca6",
  "key21": "2rFBpHMuYy5VxZciFnTEmsqRG3p69eh7qZH2Rb3W5m6MJmJW5uL4LJ7BhTziDRJmJcezoUyjKZXL74emeu8tCeqx",
  "key22": "3bwV11CfkTq12nbsovpPy1k3JeMfH6GGNuY8gA9YWv9ZuWEFar7td69sdBZGoQUdFkgXePQ1bp837BenES7uJZm8",
  "key23": "62GooVTdVjUVjjbFVR28e44PSZhXKhehhJsgNy5BaV2kxZDqTYYrvdmuFoqoXmFXJsozqseFkgxH7hng3pWsqZnq",
  "key24": "2LR7LDzcrNwGZi3gdx9ggwNRTx4iQGNF2V3shuwdW5rXiBuogktNjUFZjT738sPAaQPqBDQbHekD6ZqXfphMaQwE",
  "key25": "3M2kHDwyHpAB4XQsbywNqjnhBAf6zLbfp6zodchM6KVXCRiAxhMQEJWDYwSFJaDXcb5ukiv3Jn8TuA1CjhM4A54u",
  "key26": "Dhp7PMuYWeeHMViUbnVTNjFdYn8qZY5UTM8NfAVzPXg1ZWtPFvWXtkBvj5DSzBSvkCcC29MzxhcVopGeMmGBz1C",
  "key27": "5gARH8YgqUu2PHTmV6R1dyKegw6qTtXuT2mfxUycfR57GkW2Qi1SrQJvv8mFrGSdkGsBqDMosGPJrEHhXkHTSvi",
  "key28": "2vAP1BL3ZtZZavASCw5Rv24HFkCffrbwVwXGmK1qWzApZxiwFx73v9wygdoF1ZiUH1cqtFkVXWNdDK7Q5CXTLFWN",
  "key29": "5PMk1jwJgJvF9rgXdQiLFqJHPFVjZvCawt8PDFn2T17WdtqsX6MtxaiqqLesFEg6Xjc4o9R8cfXawD3VqNvVhvcu",
  "key30": "5SpNZF4orQhcira1b2DuLcZAoptMNTeHhn8hmWsVJkQbJrbpcZ7osWAMUhhGFQs4LB38FBNhhrHNTJNzDfV5GLCw",
  "key31": "5gWuQ69F79pff7MHfXMZzkiHQQAFapZ2s4mtHix3neqr2iJ5FqjFLgcbK54RCxtxMub1vbBoD3tt3xkc26kb7PNX",
  "key32": "55a6m9jMaN26cAh8WtrPWQAzTq1JKnEoZ95w9tSuqsf89gFGKg7TdZu35z3v3skRQ8hop8JH6y3uszu7AbqBc9vp",
  "key33": "43FoVoYfdQG9EJezGTaMBAVkvx7EHGYmkEBShqyApQuxJtBt2XRF6TjGmNz3JMS27HXeZKUy8UwU27Cbv78BT35Q",
  "key34": "38txMGzhuf2iLbYSKB57wUdKHnTx3ANkuaxDJsofyfkcM1JdpYjsE6fbZ8wWEUKXvb2Pry4Hiswbs7HSGDXiGT8Q",
  "key35": "3DkRuX3x7xijzQ4PTnnQ8razpDNxNCsax5YcFS8PtGVKmCZkt7e67MNk1saTHgFtfTqA9PYV3tn2yPReVzseB1kU",
  "key36": "3gWyJSo4h71kREbVzyb6wvvCj8GbXZYotW8NnCoXfDqRCs7BeqbKH1VFay9epu41yvazRvL15Ryu2sWhQwrvLj3e",
  "key37": "UQX225pA82Ex2S862BP5RwjEBczvJUEEBm8MTr9XvbXkQkdoc4cEFBppFBY5qCQdGrfNjL4oPo3LqFQ5euVxy9b",
  "key38": "2gg8Xzx3RpXfj3TsayoHeE4irzDaNPD5CJochFfzudnkGoy5qsEUfXxCi4JRxjg73RrVbGPHEVop3iETVWExyL3f",
  "key39": "CvajJUZ1tpvmUt6g4SwCfo2XbL3ZbQhrVeUGMbaJiQkPhoZ1gsaM9FcUNtqTND3DmPaqX2h7Lh6fEc6eyeE6mvH",
  "key40": "66mSzukQ74nq9jaRehJP52S8Tyw4ff79KuiDCMNjMKSMqbA38g5kcKRXKsMTSttvqGwPJKkDC27AZZeudaKp5QVc",
  "key41": "3Waj3ar4xgWgzwgFJv2QA9StKMh7azYDcrLsPVRt2h7FTC6aNcRaMmFTco4xA6692UmmswYJqiV3bMqPBNh6nGvQ",
  "key42": "5Dqf9UaeX9119nF43EcC1rxpnpbT142ZgaPECj2Mda8cnCESfBEt9w7KrsUC9QAfB3skermdgZQNTE1ZAj9Jqrn9"
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
